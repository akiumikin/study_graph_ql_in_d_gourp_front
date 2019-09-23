export const checkSameValue = (inputValue: any, compaireValue: any): string => {
  if (inputValue === '') return ''; // 未入力の場合にはエラー判定しない

  if (inputValue && !compaireValue) return 'メインの入力項目にも入力が必要です';
  return inputValue === compaireValue ? '' : '確認項目に入力された値が一致しません'
}
