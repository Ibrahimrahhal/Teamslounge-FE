const path = require("path");

module.exports = {
    components: "src/**/atoms/**/*.tsx",
    webpackConfig: require("./config/webpack.config"),
    styleguideComponents: {
        Wrapper: path.join(__dirname, "src/styleguide/wrapper.tsx")
    },
    getExampleFilename(componentPath) {
        return path.join(componentPath, '../', '../', 'styleguide', 'index.md');
    }
};