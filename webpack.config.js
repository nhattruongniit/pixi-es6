const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        devtoolModuleFilenameTemplate: "./dist/[resource]"
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 9000
    }
    // externals: [
    //     // Don't bundle pixi.js, assume it'll be included in the HTML via a script
    //     // tag, and made available in the global variable PIXI.
    //     { "pixi.js": "PIXI" }
    // ],
};