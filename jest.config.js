module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files using Babel
      '^.+\\.css$': 'jest-transform-stub', // Transform CSS files to stub
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy', // Mock CSS files as JS objects
    },
  };
  