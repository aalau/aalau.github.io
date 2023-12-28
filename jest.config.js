const {defaults} = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],

  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
  "testEnvironment": 'jest-environment-jsdom'
};

module.exports = config;
