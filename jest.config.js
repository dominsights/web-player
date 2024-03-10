/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'js-dom',
  moduleNameMapper: {
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
  }
};

