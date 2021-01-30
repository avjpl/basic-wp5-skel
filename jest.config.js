module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css': require.resolve('./config/jest/mocks/styles-mock.js'),
  },
  setupFilesAfterEnv: ['<rootDir>/config/rtl/setupTests.js'],
  moduleDirectories: [
    'node_modules',
    'config/rtl/utils',
    __dirname,
  ],
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      statements: 36,
      branches: 0,
      functions: 36,
      lines: 36
    }
  }
}
