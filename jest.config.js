module.exports = {
    verbose: true,
    testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  }