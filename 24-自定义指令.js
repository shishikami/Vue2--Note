// 私有自定义指令
// 全局自定义指令

// 私有自定义指令：
// 在directives节点下声明私有自定义指令
// directives:{
//     定义一个自定义指令，指向一个配置对象
//     color:{
//         当指令被绑定到对象身上时会立即触发bind方法
//         只触发一次
//         bind(el){
//             形参中的el是绑定了此指令的原生DOM对象
//             el.style.color = 'red';
//         }
//     }
// }

// directives:{
//     color:{
//         bind(el, binding){
//             el.style.color = binding.value;
//         }
//     }
// }

// DOM更新时会触发update
// 第一次不生效，后续DOM更新时触发
// update(el, binding){...}

// 函数简写：
// 如果bind和update函数中略记完全相同
// 则对象格式的自定义指令可以简写成函数格式：
// directives:{
//     color(el,binding){
//         el.style.color = binding.value;
//     }
// }

// 全局自定义指令
// 定义在main.js中
// Vue.directives('color',function(el,binding){
//     ...
// })