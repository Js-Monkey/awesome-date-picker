module.exports = {
    "transform": {
      ".(ts|tsx)": "ts-jest"
    },
    "testEnvironment": "jsdom",
    "testRegex": "/src/.*\\.(test|spec)\\.(ts)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "/tests/"
    ],
    "coverageThreshold": {
      "global": {
        "functions": 2,
        "lines": 1,
        "statements": 1
      }
    },
    "collectCoverageFrom": [
      "src/*.{js,ts}",
      "src/**/*.{js,ts}"
    ]
};
