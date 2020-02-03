module.exports = {
    "rootDir": "../../",
    "roots": [
      "<rootDir>/src/"
    ],
    "transform": {
      "^.+\\.tsx?$": "babel-jest"
    },
    "setupFiles": ["<rootDir>/config/testing/jest.setup.ts"],
    "setupFilesAfterEnv": [
      "<rootDir>/config/testing/testing-library.setup.ts"
    ]
  }