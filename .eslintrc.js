module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    // parser: "@typescript-eslint/parser",
    plugins: ["react"],
    rules: {
        // I usually turn off these rules out of personal, feel free to delete the rules section in your project
        "react/prop-types": "off"
    }
};
