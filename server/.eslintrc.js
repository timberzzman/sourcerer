module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base",
        'airbnb-typescript/base',
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
