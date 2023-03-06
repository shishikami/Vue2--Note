const arr = ['a', 'abc', 'ddddd', 'zzhdsb'];

// forEach一旦开始，便不能停止
// 无法return或者break
arr.forEach((item, index) => {
    // 
})

// 可以通过return true结束循环
arr.some((item, index) => {
    if (item === 'a') {
        return true;
    }
})

// every
// 判断每一个state是否为true
// arr.every(item=>item.state)

// reduce
// arr.filter(item=>item.state).reduce((累加结果，当前循环项)=>{},初始值)
// 每次return的值作为下一次的初始值
// e.g.
// const res = arr.filter(item => item.state).reduce((amt, item) => {
//     return amt = arr.price * item.count;
// }, 0)