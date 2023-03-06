// 手动封装路由非常麻烦
// 使用第三方库

// 仅能在Vue中使用
// 1.安装
// 2.创建路由模块
// 3.导入并挂载模块
// 4.声明路由链接和占位符

// 2.src下创建router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 创建实例对象
const router = new VueRouter();

// 共享对象
export default router;

// 要在main.js挂载对象
// import router from './xx.js'
// new Vue({
//     render:...Vue;
//     router:router;
//     同名可以简写为
//     router
// })

// 配置完成后可以使用router-view组件
// <router-view></router-view>
// 在router/index.js下定义对应关系
// import Home from ...
// import Movie from ...
// const router = new VueRouter({
//     routes: [
//         {
//             path: '/home',
//             component: Home
//         },
//         {
//             path:'/movie',
//             component:Movie
//         }
//     ]
// })

// 安装并配置了vue-router后可以使用router-link来代替a链接
<router-link to="/home"></router-link>
// 其中 /home可以改写为 home

// 路由重定向
// 访问a时强制跳转到c
// {
//     path: '/'
//     redirect: '/home'
// }

// ***
// 嵌套路由
// 父级路由链接显示模板内容，模板内容又有子级路由链接
// 点击子级路由链接显示子级模板内容
// import tab1 from ...;
// import tab2 from ...;
// routes: [
//     path: '/about',
//     component: About,
//     子路由不用写 / 了
//     children: [
//         {
//             path: 'tab1',
//             component: tab1
//         }, {
//             path: 'tab2',
//             component: tab2
//         }
//     ]
// ]

// 默认子路由
// 如果某个children数组中，某个路由规则的path为空字符串
// 该路由规则为默认子路由

// 动态路由匹配
// 将Hash地址中可变的部分定义为参数项
// 从而提高路由规则的复用性
// vue-router中使用 : 定义路由的参数项
// {
//     path: '/movie/:id',
//     component:Movie
// }
// 在movie组件中获取id值：
// 对应组件中 this.$route.params.id
// 此处id并非固定写法，跟随 : 后标记选择
// $route是参数对象
// $router是路由对象

// 为路由规则开启props传参
// 在路由规则中添加:
// props:true
// 在对应组件中添加：
// props:['id'];

// * hash地址中 / 后的参数为路径参数
// 在路由参数中需要使用this.$route.params来访问路径参数的值
// ?后面的为查询参数
// 通过this.$route.query访问
// route还有参数 fullPath和path
// path不带查询参数
// fullPath是完整的hash地址

// 编程式导航跳转 & 声明式导航
// 通过点击链接实现的导航 - 声明式导航
// 通过调用location.href跳转到新页面的方式 - 编程式导航
// location.href源生的
// Vue中：
// this.$router.push('hash address')
// 跳转到指定地址 并且增加一条历史记录
// this.$router.replace('hash address')
// 跳转到指定地址 并且替换掉当前的历史记录
// this.$router.go(n)
// n可正可负
// 用于在浏览历史中进行跳转
// 实际开发一般前进或者后退一页
// this.$router.back()
// this.$router.forward()

// 导航守卫
// 可以控制路由访问权限

// 1.全局前置首位
// 每次发生路由的导航跳转时都会触发全局前置首位
const router2 = new VueRouter()
// 通过beforeEach()方法声明全局前置守卫
// 每次发生路由自动触发fn回调函数
router2.beforeEach(fn);
// fn接受三个形参
fn = function (to, from, next) {
    // to   将要访问的路由信息对象
    // from 将要离开的路由信息对象
    // next 是一个函数 调用next()允许放行
}
// next()的使用情况
// 1.直接调用next()允许访问
// 2.没有访问权限 强制跳转到登陆页面
//   next('/login')
//   传一个地址
// 3.next(false) 停留在当前页面