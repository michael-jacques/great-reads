module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      'transform-es2015-modules-commonjs',
      'babel-plugin-dynamic-import-node',
    ],
    env: {
      test: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'transform-es2015-modules-commonjs',
          'babel-plugin-dynamic-import-node',
        ],
      },
    },
  };
}
