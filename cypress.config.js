const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    stand1: {
      username: "joinbet",
      password: "43wSfdpcREJF4zu",
    },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});