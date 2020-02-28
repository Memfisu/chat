const path = require('path');

const webpackConfigPath = './tools/webpack.config.js';

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "globals": {
    "NODE_ENV": true,
    "VERSION": true,
    "DEPLOY": true,
    "BUILD_TYPE": true,
    "STAND_TYPE": true,
    "CORDOVA": true,
    "ELECTRON": true,
    "PRODUCT_VERSION": true,
    "CORDOVA_EMULATE": true,
    "PRODUCT_NAME": true,
    "PACKAGE_NAME": true,
    "LOGGER": true,
    "OFFLINE": true
  },
  "rules": {
    // override airbnb rules to run app
    "import/no-cycle": 0,
    "import/no-named-as-default": 0, //d
    "array-callback-return": 0, //l
    "default-case": 0, //s
    "consistent-return": 0, //l
    "class-methods-use-this": 0, //d
    "func-names": 0, //a
    "no-useless-escape": 0, //l

    "prefer-promise-reject-errors": ["warn", {"allowEmptyReject": true}],
    "prefer-destructuring": 0, //e

    "no-plusplus": 0, //e
    "no-param-reassign": 0, //s
    "no-underscore-dangle": 0, //d
    "no-unused-expressions": 0, //l
    "no-use-before-define": 0, //d
    "no-prototype-builtins": 0, //s
    "no-restricted-syntax": 0, //a

    "react/prop-types": 0, //l
    "react/sort-comp": 0, //s
    "react/forbid-prop-types": 0, //e
    "react/no-find-dom-node": 0, //s
    "react/no-unused-prop-types": 0, //d
    "react/no-multi-comp": 0, //a
    "react/no-did-mount-set-state": 0, //l
    "react/prefer-stateless-function": 0, //d
    "react/jsx-filename-extension": 0, //e
    "react/require-default-props": 0, //l
    "react/no-array-index-key": 0, //l
    "react/destructuring-assignment": 0,
    "react/no-access-state-in-setstate": 0,
    "react/no-this-in-sfc": 0,

    "jsx-a11y/label-has-for": 0, //d
    "jsx-a11y/anchor-has-content": 0, //e
    "jsx-a11y/img-has-alt": 0, //l
    "jsx-a11y/no-static-element-interactions": 0, //d
    "jsx-a11y/no-noninteractive-element-interactions": 0, //e
    "jsx-a11y/click-events-have-key-events": 0, //e
    "jsx-a11y/anchor-is-valid": 0, //e
    "jsx-a11y/label-has-associated-control": 0,

    "jest/no-disabled-tests": 2,
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "jest/valid-expect": 2,

    'camelcase': 1,

    // leave it to prettier
    "react/self-closing-comp": 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, webpackConfigPath)
      }
    }
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "jest"
  ]
};
