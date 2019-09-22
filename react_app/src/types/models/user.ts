////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * user のモデルの型を定義
 * validationなどを加える時には`${column名}_extension`でExtension型を与えること
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
import { Extension } from './../extendType'

export class User {
  id: number;
  id_extension: Extension;
  name: string;
  name_extension: Extension;
  email: string;
  email_extension: Extension;

  constructor() {
    this.id = 0;
    this.id_extension = {
      itemName: 'id',
      displayName: 'ユーザーID',
      messages: []
    }

    this.name = '';
    this.name_extension = {
      itemName: 'name',
      displayName: '氏名',
      messages: [],
      rule: { lengthMax: 255, lengthMin: 0 }
    };

    this.email = '';
    this.email_extension = {
      itemName: 'email',
      displayName: 'メールアドレス',
      messages: [],
      rule: { lengthMax: 255, lengthMin: 0, email: true }
    };
  }
}

// enumやmodelメソッドが欲しい場合には下記に追記する
// export enum STATUS {
//   NON_ACTIVE = 0,
//   ACTIVE = 1,
// }
