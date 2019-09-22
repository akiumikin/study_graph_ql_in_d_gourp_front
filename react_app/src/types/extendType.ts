import { ValidationType } from './../validator/base'

export class Extension {
  itemName: string         // 項目名 user.tsのnameのcolumnの場合は"name"
  displayName: string      // 画面に表示する名前、項目名を多言語対応する場合にはここで変更する
  messages: Array<string>
  rule?: ValidationType

  constructor() {
    this.itemName = ''
    this.displayName = ''
    this.messages = []
  }
}
