const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',  // Importante para Node.js
    mode: "production",
    entry: './src/app.js',  // Ponto de entrada alterado
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "server.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    externals: [nodeExternals()],  // Exclui node_modules do bundle
    optimization: {
        minimize: false  // Opcional: desabilita minificação para melhor debugging
    },
    resolve: {
        extensions: ['.js']
    }
};
