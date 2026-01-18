module.exports = {
  arrowParens: 'avoid', // 可以省略括弧就省略 ex. x => x
  bracketSameLine: true,
  bracketSpacing: true, // 大括號與文字間需要空格 ex. { foo: bar }
  endOfLine: 'auto', // 換行符號
  htmlWhitespaceSensitivity: 'ignore', // 在html中空格是否是敏感的 "css" - 遵守CSS显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
  proseWrap: 'preserve', // 使用預設的換行標準 always\never\preserve
  printWidth: 100, // 超過 100 字元就換到新的一行
  quoteProps: 'as-needed', // 預設 'as-needed'，只有在屬性名稱包含特殊字元或空格時才會使用雙引號。否則，它將使用單引號。
  semi: true, // 語句結尾加上分號
  singleQuote: true, // 使用單引號，預設使用雙引號
  tabWidth: 2, // tab鍵縮排為2空格
  trailingComma: 'none', // Object、Array 最後一個元素後不需要加上逗號
  useTabs: false, // 使用空格縮排
  vueIndentScriptAndStyle: true // 縮排Vue 檔案中的程式碼<script>和<style>標籤
}