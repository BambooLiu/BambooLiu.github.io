module.exports = {
  extends: [
    'stylelint-config-standard', // Stylelint 標準共享配置
    'stylelint-config-recommended-scss', // 擴展 stylelint-config-recommended 共享配置並為 SCSS 配置其規則
    'stylelint-config-recommended-vue/scss', // 擴展 stylelint-config-recommended 共享配置並為 Vue 配置其規則
    'stylelint-config-html/vue', // 共用 HTML (類似 HTML) 配置，捆綁 postcss-html 並對其進行配置
    'stylelint-config-recess-order', // 提供最佳化樣式順序的配置
    'stylelint-config-prettier-scss'
  ],
  overrides: [
    { files: ['**/*.(scss|css|vue|html)'], customSyntax: 'postcss-scss' },
    { files: ['**/*.(html|vue)'], customSyntax: 'postcss-html' }
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  rules: {
    'color-function-notation': null, // 強制執行顏色函數的notation
    'custom-property-pattern': null, // 指定自訂屬性的模式
    'declaration-block-no-redundant-longhand-properties': null, // 禁止在樣式聲明中使用可以通過簡寫屬性覆盖的longhand屬性
    'font-family-no-missing-generic-family-keyword': null, // 禁止在 font-family 中沒有通用家族關鍵字。
    'function-url-quotes': 'always', // 要求或禁止URL的引號" always（必須加上引號）
    'import-notation': 'string', // 指定規則的 @import 字串或 URL 表示法
    'keyframes-name-pattern': null, // 指定關鍵幀名稱的模式
    'media-feature-range-notation': null, // 指定媒體要素範圍的上下文或前綴表示法
    'no-descending-specificity': null, // 禁止在具有較高優先權的選擇器後出現被其覆寫
    'no-empty-source': null, // 關閉禁止空源碼
    'property-no-unknown': null, // 禁止未知的屬性（true為不允許）
    'property-no-vendor-prefix': null, // 關閉 屬性前綴 -webkit-mask
    'selector-class-pattern': null, // 關閉強制選擇器類別名稱的格式
    'selector-id-pattern': null, // 關閉強制選擇器id名稱的格式
    'selector-not-notation': null, //
    'selector-pseudo-class-no-unknown': [
      // 不允許未知的選擇器
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'] // 忽略屬性，修改
      }
    ],
    'value-keyword-case': null, // 在css中使用v-bind，不報錯
    'value-no-vendor-prefix': null, // 關閉 屬性值前綴 --webkit-box

    'scss/at-if-no-null': null, // 檢查是否等於 null 是不必要的顯式，因為在 null Sass 中是假的。
    'scss/at-rule-conditional-no-parentheses': null, // 強制在 SCSS 的 @if、@else 等條件語句中禁止使用括號。
    'scss/dollar-variable-pattern': null, // 關閉強制scss變數名稱的格式
    'scss/no-global-function-names': null, // 不允許使用全域函數名稱，因為這些全域函數現在位於內置的 Sass 模組中。
    'scss/load-no-partial-leading-underscore': null // 強制 :not() 偽類在省略父選擇器時使用什麼表示法(is、where 或 not)。
  }
};
