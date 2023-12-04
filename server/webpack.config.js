const path = require('path');

module.exports = {
    target: 'node',
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'server'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            process: "process/browser",
            '@config': path.resolve(__dirname, 'src/config/operations.ts'),
            '@database': path.resolve(__dirname, 'src/database/index.ts'),
            '@modules': path.resolve(__dirname, 'src/modules/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@global': path.resolve(__dirname, 'src/global/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: 'ts-loader',
            },
        ],
    },
    stats: {
        errorDetails: true,
    },
};