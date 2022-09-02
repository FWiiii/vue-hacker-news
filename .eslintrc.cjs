module.exports = {
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "vue/multi-word-component-names": 0,
  },
};
