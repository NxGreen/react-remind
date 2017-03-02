'use strict';
var path = require('path');

module.exports = {
    entry: [
        "./src/entry.js"
    ],
    output: {
        path: path.join(__dirname, 'out'),
        publicPath: "/",
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.(svg|jpg|png)$/, loader: "url?limit=1024"}
        ]
    }
};