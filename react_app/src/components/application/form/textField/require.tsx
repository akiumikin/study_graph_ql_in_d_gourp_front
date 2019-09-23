import * as React from 'react';

// material-ui
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// validation
import { checkValidation } from '../../../../validator/base'

/**
 * form_style
 */
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

/**
 * input Props
 */
interface Props {
  // required
  id: string;          // componentの持つid、自動テストを考えることになった時のためあったほうが良い
  label: string;       // フォームコンポーネントのラベル（ex. ユーザー名）
  modelState: any;     // front の model型（ex. user）
  setModelState: any;  // front の model型へのset関数（ex. setUser）
  itemName: string;    // model型のうちでフォームに相対するcolumnの名称（ex. name）
  // any arguments
  placeholder?: string
  onChange?: (e: React.SyntheticEvent<any, Event>) => void;
  onBlur?: (e: React.SyntheticEvent<any, Event>) => void;
  style?: React.CSSProperties;
}

/**
 * フォーム本体
 */
export const RequiredTextField = (props: Props) => {
  const classes = useStyles({});

  // 外部からは初期値を受け取り取り回して、onBlurで値を上位に渡すと良い
  const initValue = props.modelState[props.itemName]
  const extension = props.modelState[`${props.itemName}_extension`]
  const [values, setValues] = React.useState({ [props.itemName]: initValue });

  // onChange用のsetState、上位に値を返さず再描画範囲を限定的にする
  const handleChange = (name: string, event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // onBlur用のsetState、上位コンポーネントに値を返す
  const handleBlur = () => {
    const updateState = { ...props.modelState, ...values }
    props.setModelState(updateState);

    // validationを実行してメッセージを取得
    // modelStateを投げる想定だったので暫定で、上位コンポーネントを
    // 更新するならこの値になるって状態で渡す
    checkValidation(
      props.itemName,
      props.setModelState,
      updateState,
    )
  };

  return (
    <div>
      <TextField
        required
        id={props.id}
        label={props.label}
        className={classes.textField}
        onChange={e => handleChange(props.itemName, e)}
        onBlur={() => handleBlur()}
        placeholder={props.placeholder ? props.placeholder : null}
        margin='normal'
        variant='outlined'
      />
      {/* HTML5のvalidateでも可能だけどフォーム下にメッセージ出したい */}
      {extension.messages.map((message: string, idx: number) =>
        <div key={`errorMessage${idx}`}>{message}</div>
      )}
    </div>
  );
}
