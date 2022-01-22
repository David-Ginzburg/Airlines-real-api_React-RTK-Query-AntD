const CracoLessPlugin = require('craco-less')

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('autoprefixer'),
            ],
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}