// 常见关系
// 1.父子关系
// 2.兄弟关系

// 一、父子组件间数据共享
// 1.父->子
// 使用自定义属性
// 2.子->父
// 自定义事件
// 父组件：
// (1)
// <Son @numberchange='getNewVal'></Son>
// (2)
// methods:{
//     getNewVal(val){
//         this.countFromSon = val;
//     }
// }
// 子组件：
// methods:{
//     add(){
//         this.count++;
//         this.$emit('numberchange', this.count);
//     }
// }

// 二、兄弟组件数据共享
// vue2中：
// 1.EventBus
// (1)新建eventBus.js
// (2)发送方调用bus.$emit('eventName',data)触发自定义事件
// (3)接收方调用bus.$on('eventName',function)注册自定义事件
import Vue from 'vue';
export default new Vue();
// 发送方导入eventBus.js文件
// methods:{
//     sendMsg(){
//         bus.$emit('share',this.msg);
//     }
// }
// 接收方同样导入eventBus文件
// created(){
//     bus.$on('share',val=>{
//         this.msgFromCousin = val;
//     })
// }