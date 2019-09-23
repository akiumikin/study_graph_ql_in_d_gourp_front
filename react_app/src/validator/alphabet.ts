export const checkAlphabet = (str: string): string => {
  if (str === '') return ''; // 未入力の場合にはエラー判定しない

  const result = str.match(/^[a-zA-Z0-9]*$/)
  return result ? '' : '英数字のみが使用できます'
}
