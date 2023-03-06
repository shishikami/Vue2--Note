// 组件之间的关系
// 组件被封装好了之后彼此之间是独立的

// 在使用的时候根据彼此的嵌套关系 形成父子、兄弟关系

// 使用组件的步骤
// 1.使用import导入需要的组件
// import componentName from address;
// 2.使用components节点注册组件
// export default{
//     components:{
//         两者名称相同时可简写为componentName
//         'componentName':componentName,
//     }
// }
// 3.以标签形式使用刚才的组件
// <div class='...'>
//     <componentName></componentName>
// </div>

// 通过components注册的组件是私有组件
// 对于频繁使用的组件 可以注册全局组件

// 注册全局组件
// 在main.js入口文件中
// 先导入需要全局注册的组件
// 通过Vue.component()方法注册全局组件
// Vue.component('name',componentName);
// 组件里不要调用自己

// 组件的props
// props是组件的自定义属性 封装通用组件通过props可以极大的提高组件的复用性
// 语法格式：
// export default {
//     props: ['attr1', 'attr2', 'attr3'],
//     data() {
//         return '...';
//     }
// }
// e.g.
// export default {
//     props: ['init'],
//     data() {
//         return {
//              count:0,
//         }
//     }
// }
// <myComponent init='6'>...<myComponent>

// 配合v-bind使用自定义属性
// :init="9" 是数字 因为v-bind后面引号里面是js语句

// props的数据可以直接在模板中使用
// * props是只读的（可以被修改，但会报错 强烈不推荐
//   通过将props的值转存到data里的数据中

// 为了避免props没有传值
// 给其设定一个初始值
// export default {
//     props: {
//         init: {
//             // 通过default定义默认值
//             default: 0,
//         }
//     }
// }

// props的type值类型
// export default {
//     props: {
//         init: {
//             default: 0,
//             // 规定值类型为Number
//             type: Number,
//         }
//     }
// }

// required必填项
// 规定属性必传
// required:true;
// * 哪怕有默认值，如果添加了required:true
//   依旧会报错~

// 组件之间的样式冲突
// 默认情况下 .vue组件的样式会全局生效
// 根本原因在于：
// 1.单页面程序中，所有组件的DOM结构都是基于唯一的index.html页面呈现的
// 2.每个组件的样式，都会影响整个index.html中的DOM元素
// * 解决方案
// (1).添加自定义属性 style采用[]属性选择器
//     太麻烦了
// (2).在style标签添加scoped属性 vue自动添加属性
//     只要写样式，尽量添加scoped属性
// * 局限性：
// 不能修改嵌套的组件的style（父组件中修改子组件的属性
// 解决方式：
// 添加 /deep/
// 可以修改子组件内容的样式  