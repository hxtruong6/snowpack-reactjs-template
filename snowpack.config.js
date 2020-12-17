/** @type {import("snowpack").SnowpackUserConfig } */


module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-react-refresh', 
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: true
      },
    ],
    '@snowpack/plugin-postcss'
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
