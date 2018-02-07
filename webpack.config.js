const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

// 是否是开发模式
const isDev = process.env.NODE_ENV === 'dev'

// 路径转换
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

// webpack基础配置
const config = {
  // 入口
  entry: resolve('src/index.js'),
  // 输出
  output: {
    filename: 'bundle.[hash:8].js',
    path: resolve('dist')
  },
  // 解析
  resolve: {
    // 自动解析确定的扩展
    extensions: ['.js', '.vue', '.styl'],
    // 创建 import 或 require 的别名
    alias: {
      '@': resolve('src'),
      '@api': resolve('src/api'),
      '@store': resolve('src/store'),
      '@route': resolve('src/route'),
      '@assets': resolve('src/assets'),
      '@images': resolve('src/assets/images'),
      '@styles': resolve('src/assets/styles'),
      '@components': resolve('src/components'),
      '@views': resolve('src/views')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        // 排除node_modules目录
        exclude: /node_modules/
      }, {
        /* 开发中如果使用css文件，需以下配置 */
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 资源文件小于1024直接转成base64
            limit: 1024,
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // webpack编译过程中和自己写的js中调用
      'process.env': {
        NODE_ENV: isDev ? '"dev"' : '"pro"'
      }
    }),
    // 自动生成一个html文件、引入相关静态资源、bundle.js等功能
    new HTMLWebpackPlugin({
      // 标题
      title: 'Vue_all',
      // 模版
      template: resolve('src/tpl/index.html')
    })
  ]
}

// 开发模式和生产模式相关配置
if (isDev) {
  // 开发环境stylus配置
  config.module.rules.push({
    test: /\.styl$/,
    // loader处理后依次往上处理
    use: ['style-loader', 'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, 'stylus-loader'
    ]
  })
  // 使用source-map便于调试
  config.devtool = '#cheap-module-eval-source-map'
  // 配置devServer
  config.devServer = {
    // 端口
    port: 8001,
    // 本机内外网ip可访问
    host: '0.0.0.0',
    overlay: {
      // 报错信息显示到网页
      errors: true
    },
    // 不刷新页面重新渲染节点(模块热替换)
    hot: true,
    // 自动打开浏览器
    //open: true
  }
  config.plugins.push(
    // 模块热替换
    new webpack.HotModuleReplacementPlugin(),
    // 编译出现错误时跳过输出阶段，确保输出资源不会包含错误
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  // 生产环境配置
  // 配置单独打包依赖js库
  config.entry = {
    app: resolve('src/index.js'),
    // 此处vendor和下面CommonsChunkPlugin中的name相同
    vendor: ['vue', 'vue-router', 'vuex', 'axios', 'qs', 'fastclick', 'better-scroll']
  }
  // 生产环境输出的js名称
  config.output.filename = '[name].[chunkhash:8].js'
  // 生产环境stylus配置
  config.module.rules.push({
    test: /\.styl$/,
    // loader处理后依次往上处理，最后打包成css文件
    use: ExtractTextWebpackPlugin.extract({
      fallback: 'style-loader',
      use: [{
          loader: 'css-loader',
          options: {
            // css压缩
            minimize: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, 'stylus-loader']
    })
  })
  config.plugins.push(
    // 单独打包css的文件名，带有8为hash值
    new ExtractTextWebpackPlugin('styles.[contentHash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // webpack相关的代码单独打包，两个CommonsChunkPlugin位置不能换
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    // 混淆相关
    new webpack.optimize.UglifyJsPlugin({
      // 压缩
      compress: {
        // 取消警告
        warnings: false
      },
      // 是否生成sourceMap
      sourceMap: false
    })
  )
}

module.exports = config
