module.exports = {
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
    //             plugins: [
    //             require("postcss-px2rem")({
    //                 remUnit: 64
    //          })
    //         ]
    //         }
    //     }
    // },
    publicPath: '/',
    outputDir: 'apartment', //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint

    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "0.0.0.0",
        //port: '8080',
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                // target: "http://172.18.88.127",
                // target: "http://172.18.88.11",
                target: "http://172.18.89.81",
                // target: "http://172.18.88.194",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
               },
                cookiePathRewrite: {
                    '/': '/api'
                },
                // logLevel:'debug'
            },
        },
    }
}
