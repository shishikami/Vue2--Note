// 前端开发
// 模块化 js css 资源的模块化
// 组件化 复用
// 规范化
// 自动化 自动化构建、部署、测试

// 前端工程化解决方案
// 主流：
// 1.webpack ***
// 2.parcel

// webpack
// 友好的前端模块化开发支持、代码压缩混淆
// 处理浏览器端js兼容性、性能优化
// 项目中配置webpack：
// 1.新建webpack.config.js文件
// 2.
// module.exports = {
//     // mode development和production
//     mode: 'development'
// }
// 3.package.json在scripts添加：
// "dev": "webpack"
// 4.终端运行npm run dev

// 其可选值
// development：
// 开发环境
// 不会对打包生成的文件进行代码压缩和性能优化
// 打包速度快 适合在开发阶段使用
// production:
// 生产环境 会对打包的文件进行代码压缩和性能优化
// 打包速度很慢 仅适合在项目发布阶段使用

// 4.x 5.x
// 默认打包入口为src->index.js
// 输出文件路径：dist->main.js
// 可以在webpack.config.js中修改
// entry为打包入口
// output为打包出口
// e.g.
// const path = require('path');
// module.exports = {
//     entry: path.join(__dirname, './src/...'),
//     output: {
//         path: path.join(__dirname, './dist'),
//         filename: 'bundle.js'
//     }
// }

// Webpack插件
// 1.webpack-dev-server
// 修改源代码时自动进行项目的打包和构建
// 2.html-webpack-plugin
// 定制index.html的页面内容

// 配置webpack-dev-server
// 1.修改.json 为webpack serve
// 2.npm run dev
// 3.访问http://localhost:8080

// 配置html-webpack-plugin
// 1.导入
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
// 2.创建实例对象
const htmlPlugin = new HtmlPlugin({
    // 原文件的存放路径
    template: '...',
    // 生成文件的存放路径
    filename: '...'
})
module.exports = {
    mode: 'development',
    // 3.通过plugins节点，使插件生效
    plugins: [htmlPlugin]
}
// 在webpack.config.js中

// devServer节点
// devServer:{
//     初次打包完成，自动打开浏览器
//     open:true,
//     实时打包所使用的主机地址
//     host:'127.0.0.1',
//     实时打包用的端口号
//     port:8080
// }

// loader
// 加载器
// webpack默认只能打包js后缀的模块
// 其他文件需要调用loader才能正常打包
// loader加载器作用：
// 协助webpack打包
// css-loader less-loader babel-loader分别处理css less webpack无法处理的高级js语法

// 处理css
// style-loader css-loader
// 1.webpack.config.js配置：
// module:{
// rules: [
//     {
//         test: /\/.css$/,
//         use: ['style-loader', 'css-loader']
//     }
// ]}
// test 匹配的文件类型
// use 要调用的对应loader
// * use数组中指定的loader顺序固定
// * 多个loader调用从后往前

// 处理less
// less-loader less
// module: {
//     rules: [
//         {
//             test: /\/.less$/,
//             use: ['style-loader', 'css-loader','less-loader']
//         }
//     ]
// }

// 处理样式表与url路径相关的文件
// url-loader file-loader
// {
//     test: /\.jpg|png|gif$/,
//     use: 'url-loader?limit=1024'
// }
// ?之后为loader参数 单位为字节
// <=limit的文件被转为base64格式的图片

// 无法处理的高级语法
// babel-loader
// {
//     test:/\.js$/,
//     use:'babel-loader',
//     使用exclude排除指定项 node_modules目录下的第三方包不需要被打包
//     exclude:/node_modules/
// }
// * 根目录创建babel.config.js配置文件
//   声明可用插件
//   module.exports = {
//     plugins:[['@babel/plugin-proposal-decorators',{legacy:true}]]
// }

// 配置webpack打包发布
// package.json文件script节点
// 新增build参数
// 项目发布时执行build命令
// "build":"webpack --mode production"

// 优化项目文件生成路径
// img部分：
// {
//     test: /\.jpg|png|gif$/,
//     use: 'url-loader?limit=1024&outputPath=images'
// }

// 自动清理dist文件旧文件
// clean-webpack-plugin
// ...

// Source Map
// 信息文件 存储位置信息
// 存储着压缩混淆后的代码所对应的转换前的位置
// 出错时可以直接显示原始代码而不是转换后的代码

// @符号
// 表示src源代码目录，从外往里找
// webpack配置
// resoleve：{
//     alias:{
//         '@':path.join(__dirname,'./src/')
//     }
// }