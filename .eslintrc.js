module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    // Diese Regeln werden auf Warn gesetzt, um die Entwicklung zu erleichtern
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/no-unescaped-entities": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@next/next/no-img-element": "warn",
  },
};
