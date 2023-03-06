// 动态组件
// 动态切换组件的显示和隐藏

// vue内置组件 <component>
// 专门实现动态组件渲染
// <component is="componentName">
// 代表占位，后期is指定谁就显示谁
// <component :is="componentName">
// 通过v-bind可以更灵活的操作组件

// keep-alive标签
// 确保组件不被动态销毁
// <keep-alive>
//    <component :is="componentName">
// </keep-alive>

// 监听缓存和激活
// 对应生命周期函数
// 激活： activated
// 缓存： deactivated
// 第一次被创建时 created activited均会被执行

// include exclude属性
// 指定哪些标签可以被缓存
// <keep-alive include="name1,name2,..."></...

// 组件名称
// 如果在声明组件的时候没有指定name属性
// 组件默认名称为注册时候的名称
// 可以在组件内部
// export default {
//     name:...
// }
// 注册名称是用来以标签的形式使用的
// 与组件名称有一定区别