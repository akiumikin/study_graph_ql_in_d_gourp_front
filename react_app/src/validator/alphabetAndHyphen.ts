export const checkAlphabetAndHyphen = (str: string): string => {
  if (str === '') return ''; // 未入力の場合にはエラー判定しない

  const result = str.match(/^[a-z0-9\-]+$/)
  return result ? '' : '英数字またはハイフンのみが使用できます'
}
