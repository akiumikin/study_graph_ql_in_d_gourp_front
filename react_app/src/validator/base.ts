import { checkAlphabet } from './alphabet';
import { checkAlphabetAndHyphen } from './alphabetAndHyphen';
import { checkEmail } from './email';
import { checkLengthMax, checkLengthMin} from './length';
import { checkNumberAndHyphen } from './numberAndHyphen';
import { checkSameValue } from './sameValue';
import { checkTelephoneNumber } from './telephoneNumber';
import { checkPostcode } from './postcode';

export interface ValidationType {
  lengthMax?: number          // 文字数上限（同値は許容）
  lengthMin?: number          // 文字数下限（同値は許容）
  sameValue?: boolean         // 同値判定をするか
  numberAndHyphen?: boolean   // 郵便番号などの形式（数字とハイフンのみ）
  alphabet?: boolean          // クーポンコードなどの形式（英数字のみ）
  alphabetAndHyphen?: boolean // サブドメインなどの形式（英数字＋ハイフン）
  email?: boolean             // Email形式
  datetime?: boolean          // 日時形式
  postcode?: boolean          // 郵便番号形式 これを選択した場合には文字数制限不要
  telephoneNumber?: boolean   // 電話番号形式 これを選択した場合には文字数制限不要
}

/**
 * バリデーションをした後にmodelのsetState関数を使ってstateを更新する
 * stateにエラーメッセージを追記する
 * @param itemName  // modelのstateのcolumn名に当たる　例：client型 => nameなど
 * @param setData   // modelのstateを作った時のsetState関数
 * @param data      // modelのstate、変更対象のmessage以外はこの値を継承する
 * @param messages  // エラーメッセージ
 */
const setValidateParam = (
  itemName: string,
  setData: React.Dispatch<React.SetStateAction<boolean>>,
  data: any,
  messages: string[]
) => {
  setData({
    ...data,
    [`${itemName}_extension`]: {
      ...data[`${itemName}_extension`],
      messages: messages
    },
  });
};

/**
 * フォームに対してバリデーションチェックをするための関数
 * 基本的にはonBlurに設定すること
 * @param itemName        // modelのstateのcolumn名に当たる　例：client型 => nameなど
 * @param setData         // modelのstateを作った時のsetState関数
 * @param main_data       // modelのstate、フォームに設定している値がこっち
 * @param compaire_value  // 比較対象の値　例：メールアドレスの確認フォームの場合、確認じゃない方のメールアドレス
 */
export const checkValidation = (
  itemName: string,
  setData: React.Dispatch<React.SetStateAction<boolean>>,
  main_data: any,
  compaire_value?: any
) => {
  const validation: ValidationType = main_data[`${itemName}_extension`].rule
  const value: any = main_data[itemName]
  let messages = Array()

  // 必須判定（onBlurで判定する性質ではないのでこの関数では使わないこと）

  // 文字数上限
  if (validation.lengthMax) {
    messages.push(checkLengthMax(value, validation.lengthMax))
  }

  // 文字数下限
  if (validation.lengthMin) {
    messages.push(checkLengthMin(value, validation.lengthMin))
  }

  // 同値判定
  if (validation.sameValue) {
    messages.push(checkSameValue(value, compaire_value))
  }

  // 数字とハイフンのみ（郵便番号や電話番号形式）
  if (validation.numberAndHyphen) {
    messages.push(checkNumberAndHyphen(value))
  }

  // 英数字とハイフンのみ（サブドメインなど）
  if (validation.alphabetAndHyphen) {
    messages.push(checkAlphabetAndHyphen(value))
  }

  // 英数字のみ（クーポンコードなど）
  if (validation.alphabet) {
    messages.push(checkAlphabet(value))
  }

  // Email形式
  if (validation.email) {
    messages.push(checkEmail(value))
  }

  // 郵便番号形式
  if (validation.postcode) {
    messages.push(checkPostcode(value))
  }

  // 電話番号形式
  if (validation.telephoneNumber) {
    messages.push(checkTelephoneNumber(value))
  }

  messages = messages.filter(v => v) // 空文字を除去
  setValidateParam(itemName, setData, main_data, messages)
}

/**
 * モデル型の値の中のvalidation失敗しているものの「messages」を返す
 * @param state        Clientなどモデルに相対する型を入れる
 * @param requireItems 必須チェック対象の項目
 * @param ignoreItems  バリデーションチェックの対象外の項目（hoge_extension）の形式で指定すること
 */
export const invalidModelMessages = (
  state: any,
  requireItems?: Array<string>,
  ignoreItems?: Array<string>
) => {
  let invalidMessages = [] as Array<string>

  for(let key in state){
    const isKeyExtension = /.*_extension$/.test(key) // Extensionのcolumnか判定

    if (isKeyExtension) { // 拡張形式なら既にチェックしたエラーメッセージがあればそれを出す
      invalidMessages.push(extensionKeyMessages(state, key, ignoreItems || []) as never)
    } else { // 拡張形式でない（clientのnameのようにvalueを入れるもの）の場合は必須入力判定をする
      invalidMessages.push(requireItemErrorMessages(state, key, requireItems || [], ignoreItems || []) as never)
    }
  }

  invalidMessages = invalidMessages.filter(v => v) // 空文字を除去
  return invalidMessages
}

/**
 * プライベートメソッド
 * 入力チェックのエラーメッセージをcolumnが持っているか判定して、
 * 項目名を加えたmessagesを返す
 * @param state       model型のstate（clientモデル型など）
 * @param key         validationのチェックメソッドのループないでチェック中のcolumn名
 * @param ignoreItems チェック対象から除外するリスト（_extensionを除いた形で指定）
 */
const extensionKeyMessages = (
  state: any,
  key: string,
  ignoreItems: Array<string>
) => {
  const keyValueName = key.replace(new RegExp('_extension$'), '');  // hoge_extensionの形でくるのでhogeに直す

  const isInIgnoreItem = ignoreItems.indexOf(keyValueName) != -1
  if (isInIgnoreItem) return '' // 無視リストに入って入れば空文字でreturn

  const itemName = state[key].displayName
  return state[key].messages.length ? `${itemName}：${state[key].messages}` : '' // メッセージがあれば項目名＋内容で返す
}

/**
 * プライベートメソッド
 * 入力チェックのエラーメッセージをcolumnが持っているか判定して、
 * 項目名を加えたmessagesを返す
 * @param state        model型のstate（clientモデル型など）
 * @param key          validationのチェックメソッドのループないでチェック中のcolumn名
 * @param requireItems 必須項目チェック対象（_extensionを除いた形で指定）
 * @param ignoreItems  チェック対象から除外するリスト（_extensionを除いた形で指定）
 */
const requireItemErrorMessages = (
  state: any,
  key: string,
  requireItems: Array<string>,
  ignoreItems: Array<string>
) => {
  const isInRequireItem = requireItems.indexOf(key) != -1
  if (!isInRequireItem) return '' // 必須項目のチェック対象に入ってなければ空文字でreturn

  const isInIgnoreItem = ignoreItems.indexOf(key) != -1
  if (isInIgnoreItem) return ''   // 無視リストに入って入れば空文字でreturn

  const ItemEmpty = [null, undefined, ''].indexOf(state[key]) != -1 // 項目入力済み判定
  const itemName = state[`${key}_extension`].displayName            // モデルで設定された表示項目名を取得

  return ItemEmpty ? `${itemName}：必須項目です` : ''
}
