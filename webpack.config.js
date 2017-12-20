module.exports = {
    entry: "./index.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ '.ts', '.js', '.json']
    },
    devServer: { port: 9000 },
    module: {
        rules: [
            { test: /\.ts$/, use: "ts-loader" }
        ]
    }
}