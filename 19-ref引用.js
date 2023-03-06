// 需求：不操作DOM API获取DOM元素或者子组件的引用

// 每个vue组件实例上默认有一个$refs对象
// 存储对应的DOM元素或组件的引用
// 默认情况$refs指向空对象{}

// 给对应DOM元素添加属性
// ref='name'
// 获取引用：
// this.$refs.name
// 随后可以正常使用DOM API

// 引用组件
// 组件加ref属性

// ***
// this.$nextTick(callback)
// callback延迟执行，等到DOM重新渲染完毕
// 推迟到下一个DOM更新周期之后执行
// 保证方法能操作到最新的DOM元素