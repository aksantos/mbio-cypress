const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo",
    viewportWidth: 1280,
    viewportHeight: 780,
    includeShadowDom: true,
    testIsolation: false, //prevent blank page
    chromeWebSecurity: false, //access iframes
  },
});
