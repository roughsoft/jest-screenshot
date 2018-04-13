const path = require("path");

module.exports = {
    entry: {
        "report-viewer": path.resolve(__dirname, "src/report-viewer"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig-webpack.json",
                },
                exclude: [
                    /__tests__/,
                    /dist/,
                ],
            }
        ]
    },
    devtool: "source-map",
}