const { defineConfig } = require('cypress');
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
    },
    baseUrl: 'https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo',
    viewportWidth: 1280,
    viewportHeight: 780,
    includeShadowDom: true,
    testIsolation: false, //prevent blank page
  },
});
