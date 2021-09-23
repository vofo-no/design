module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  logLevel: "debug",
  addons: ["@storybook/addon-docs", "@storybook/addon-controls"],
  features: {
    postcss: false,
  },
  typescript: {
    reactDocgen: false,
  },
};
