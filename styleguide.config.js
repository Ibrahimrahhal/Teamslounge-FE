const path = require("path");

module.exports = {
    sections: [
        {
            name: "Atoms", 
            sections: [
                {
                    name: "Inputs",
                    components: "src/**/atoms/input*/**/*.tsx"
                }
            ]
        }, {
            name: "Compontent",
            sections: [
                {
                    name: "Layout",
                    components: ["src/**/components/header/**/*.tsx", "src/**/components/footer/**/*.tsx"]
                }
            ]
        }
    ],
    webpackConfig: require("./config/webpack.config"),
    styleguideComponents: {
        Wrapper: path.join(__dirname, "src/styleguide/wrapper.tsx")
    },
    getExampleFilename(componentPath) {
        return path.join(componentPath, '../', '../', 'styleguide', 'index.md');
    }
};