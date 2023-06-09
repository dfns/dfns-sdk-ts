module.exports = {
  root: true,
  extends: ["@dfns/eslint-config", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
  },
};
