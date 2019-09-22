export const checkPostcode = (str: string): string => {
  if (str === '') return ''; // 未入力の場合にはエラー判定しない

  const result = str.match(/^\d{3}[-]\d{4}$/)
  return result ? '' : '郵便番号の形式のみ入力可能です（例 151-0053）'
}
