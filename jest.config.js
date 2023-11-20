module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    "**/pages/login.test.js"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
};
