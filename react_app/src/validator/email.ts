
// 外部ライブラリなどから validator を得ている場合には下記コメントアウトのイメージ
// const isEmail = require('validator').isEmail;

export const checkEmail = (str: string): string => {
//   if (str === '') return ''; // 未入力の場合にはエラー判定しない

//   return isEmail(str) ? '' : 'メールアドレスの入力形式に誤りがあります'
  console.log(str)
  return '';
}
