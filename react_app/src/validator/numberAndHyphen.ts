export const checkNumberAndHyphen = (str: string): string => {
  if (str === '') return ''; // 未入力の場合にはエラー判定しない

  const result = str.match(/^[0-9\-]*$/)
  return result ? '' : '数字とハイフンのみが使用できます'
}
