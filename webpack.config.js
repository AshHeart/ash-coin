const path = require("path")

module.exports = ((env = {}) => {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "index.bundle.js"
        },
        resolve: {
            extensions: [".js"]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader"
                }
            ]
        }
    }
})()