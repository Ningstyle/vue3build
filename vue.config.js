const webpack = require('webpack')
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: true,
    runtimeCompiler: true,
    productionSourceMap: true,
		lintOnSave: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    // css相关配置
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    // webpack-dev-server 相关配置
		devServer: {
			hot: true,
			host: '0.0.0.0',
			port: 8080,
			https: false,
			open: false, 
		  proxy: {
		    '/api': {
		      target:'https://www.mzili.com.cn',
		      ws: true,
		      pathRewrite: {
		        '/api': '/'
		      }
		    }
		  }
		},
    pluginOptions: {
			
    }
}