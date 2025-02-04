/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  rootDir: "./",
  testMatch: ["<rootDir>/src/**/**/*.test.ts", "<rootDir>/src/**/**/*.spec.ts"]
}
