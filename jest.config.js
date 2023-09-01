const esModules = ['@rimac'].join('|');

module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  testMatch: [
    '**/*.steps.ts'
  ],
  coveragePathIgnorePatterns: [
    'src/ingresar/DataAccess.ts',
    'src/obtener/DataAccess.ts',
    'node_modules/axios/lib/axios.js'
  ],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`
  ]
};
