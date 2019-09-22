export const checkTelephoneNumber = (str: string): string => {
  if (str === '') return ''; // 未入力の場合にはエラー判定しない

  const result = str.match(/^0\d{1,3}-\d{1,4}-\d{4}$/)
  return result ? '' : '電話番号の入力形式のみ入力可能です（例 000-0000-0000）'
}
