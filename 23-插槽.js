// 插槽 Slot
// 为组件封装者提供的功能
// 把不确定的、希望由用户指定的部分定义为插槽

// 没有提供插槽时填入的内容默认会被忽略

// 声明插槽
// <slot name="slot1"></slot>
// 每一个slot都应该有一个名称
// 如果省略； 默认叫做default
// 插入时如果想要指定插槽：
// v-slot:"slotName" 用来指定插入位置
// * v-slot只能使用在component或者template上
// template用来包裹元素，作为虚拟标签不会显示出来
// 简写为 #

// 组件库 vant

// 具名插槽 有名字的插槽

// 作用域插槽 定义插槽时可以定义一些属性
// 使用对应插槽时可以获取到：
// 返回的是个对象
// <slot name="a" msg="aaaaa"><..
// <template #a="obj">
//      {{obj.msg}}
// </template>
// 建议使用scope命名
// 可以通过v-bind绑定数据