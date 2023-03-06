// vant模板库

// 安装 参照官网

// 引入组件
// 1. 自动按需引入组件
//    引入比较麻烦
// 2. 一次性导入所有组件
//    增加代码包体积，但比较方便
//    开发时体积很大，但是项目发布时可以优化掉

// 导入并安装
// import Vant form 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// http://doc.toutiao.liulongbin.top/mds/1.init.html

// axios挂载 比较原始 
// Vue.prototype.$http = axios;
// 封装request.js模块
import axios from 'axios';

const Axios = axios.create({
    baseURL: '...',
});

export default Axios;
// 对不同的axios对象封装不同的模块

// vant定制主题
// 参照vant官方文档
// vant使用了Less定义样式
// 1.引入样式源文件 index.less
// 2.修改样式变量：对于vue-cli项目
//   在vue.config.js中进行配置

const path = require('path');
const coverPath = path.join(__dirname, './src/theme.less');

module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖的变量
                        // e.g.
                        // 'text-color': '#111';
                        // 或者直接覆盖less文件
                        // e.g.
                        // hack: 'true;@import "coverPath.less"';
                        // 使用自己的主题文件

                        // Webpack打包底层使用了Node.js
                        // 可以使用Node.js的模块：path

                        // 直接覆盖效率比较低，每次修改完要重启服务器
                    }
                }
            }
        }
    }
}
// vue.config.js是vue-cli配置文件 可以对项目进行配置
// 可以参照vue-cli官方文档