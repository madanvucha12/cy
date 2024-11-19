const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    projectId: "4cb7bn",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureCypress(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
