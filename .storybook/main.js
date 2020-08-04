module.exports = {
  stories: [
    '../src/components/**/*.stories.[tj]s',
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
  ],
};
