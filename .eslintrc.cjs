module.exports = {
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'prefer-const': 'error', // 此規則旨在標記使用 let 關鍵字聲明但在初始分配後從未重新分配的變量，要求使用 const
    'require-await': 'error', // 啟用 require-await 規則

    'no-console': 'warn', // 禁止使用 console(警告)
    'no-empty-function': 'error', // 禁止出現空函數.如果一個函數包含了一個註釋，它將不會被認為有問題
    'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空的程式碼區塊，但允許 catch 語句區塊使用空區塊
    'no-irregular-whitespace': 'off', // 禁止不規則的空白
    'no-multi-spaces': 'error', // 禁止多餘空格
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允許多個空白行，最多一行
    'no-undef': 'off', // 未宣告的變量，除非它們在 /*global */ 註解中被提到(停用)
    'no-undef-init': 'error', // 禁止將變數初始化為 undefined
    'no-useless-escape': 'off', // 禁止使用轉移字符(關閉)
    'no-var': 'error', // 要求使用 let 或 const 而不是 var

    'vue/attribute-hyphenation': 'off', // 對模板中的自訂元件強制執行屬性命名樣式(關閉)
    'vue/attributes-order': 'off', // vue api使用順序，強制執行屬性順序(關閉)
    'vue/custom-event-name-casing': 'off', // 強制由自訂事件名稱使用特定大小寫(關閉)
    'vue/html-closing-bracket-newline': 'off', // 在標籤的右括號之前要求或禁止換行(關閉)
    'vue/max-attributes-per-line': 'off', // 強制每行的最大屬性數(關閉)
    'vue/multiline-html-element-content-newline': 'off', // 在多行元素的內容之前和之後需要換行符(關閉)
    'vue/multi-word-component-names': 'off', // 要求元件名稱永遠為 “-” 連結的單字(關閉)
    'vue/one-component-per-file': 'off', // 強制每個元件都應該在自己的檔案中(關閉)
    'vue/require-default-prop': 'off', // 此規則要求為每個 prop 為必填時，必須提供預設值(關閉)
    'vue/singleline-html-element-content-newline': 'off', // 在單行元素的內容之前和之後需要換行符(關閉)

    '@typescript-eslint/ban-ts-comment': 'off', // 禁止使用 // @ts-ignore 和 // @ts-expect-error 這類型的註解(關閉)
    '@typescript-eslint/ban-types': 'warn', // 禁止某些類型(警告)
    '@typescript-eslint/no-explicit-any': 'warn', // 禁止使用 any 類型(警告)
    '@typescript-eslint/no-this-alias': 'off', //禁止對 this 關鍵字賦值(關閉)

    'prettier/prettier': 'error'
  }
};
