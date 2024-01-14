const config = {
  verbose: true,
  rootDir: '../../',
  setupFiles: ['<rootDir>/build-tools/test/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '\\.(scss|css|less)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg)$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>/node_modules', '<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};

module.exports = config;
