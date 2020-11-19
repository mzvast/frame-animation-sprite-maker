const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

// https://github.com/Klathmon/imagemin-webpack-plugin
// https://web.dev/codelab-imagemin-webpack/

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'images'),
                glob: '*.png',
            },
            target: {
                image: path.resolve(__dirname, 'build/sprite.png'),
                css: path.resolve(__dirname, 'build/sprite.css'),
            },
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'build/**/**'),
        //             to: path.resolve(__dirname, 'dist'),
        //         },
        //     ],
        // }),
        // new ImageminPlugin({
        //     pngquant: {quality: '50-80'},
        // }),
    ],
};
