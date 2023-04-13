const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        // When comes across a .txt files, it uses raw-loader to transform the 
        // content before adding to dependency graph
        rules: [{
            test: /\.txt$/,
            use: "raw-loader"
        }, {
            test: /\.css$/,
            use: "css-loader"
        }, {
            test: /\.ts$/,
            use: "ts-loader"
        }]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
}

// Plugins carry out different tasks. Each plugin has a specific responsibility.

// The default mode is production. It can be development or none also.