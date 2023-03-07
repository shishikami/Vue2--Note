// Es6 模块化规范
// 浏览器端 服务器端通用规范

// Es6 模块化规范
// 每个js文件都是一个独立的模块
// 导入其他模块使用import关键字
// 向外共享模块使用export关键字

// Node.js使用require() 为CommonJs的规范

// Node.js中使用Es6模块化
// 在package.json的根结点中添加
// "type":"module"

// 1.默认导入 默认导出
// 2.按需导入 按需导出
// 3.直接导入并执行模块中的代码

// 1.默认导入 默认导出
// export default "默认导出的成员"
// 默认导出
function show() {
    console.log('...');
}
personName = 'zs';
personAge = 20;
export default {
    personName,
    personAge,
    show,
}
// 默认导入
// import module from '...'
// 可以获取导出的对象

// *** 每个模块只能使用唯一的一次export default
//     否则会报错
// *** 导入时接收模块的对象名称可以任意 但是要符合变量命名规范

// 2.按需导入 按需导出
// 按需导出
export let s1 = 'sss';
export function say() { };
// 按需导入
// import {..} from '模块标识符'
import { s1, say } from '....';
// *** 可以多次按需导出
//     按需导入的名称和按需导出的名称保持一致
//     按需导入时可以用as关键字重新命名
import { s2 as str2 } from '..';
//     按需导入可以和默认导入一起使用
import origin, { s1, s2, s3 } from '...';

// 3.直接导入并执行模块中的代码
// 直接import 模块名
// module文件：
for (let i = 0; i < 5; ++i) {
    console.log(i);
}
// ---------------------
import 'module.js';

// --------------------------------------

// 解决嵌套回调的问题
// Promise

// 1.Promise是一个构造函数
// 可以创建promise对象
const p = new Promise();
// new 出来的Promise实例对象代表一个异步操作

// 2.Promise.prototype上包含一个.then()方法
// 可以通过原型链的方法访问到.then()方法

// 3.then()用来预先指定成功和失败的回调函数
p.then(result => { }, errror => { })
// 成功的回调函数必选 失败的回调函数可选

// --------------------------------------
// 通过 .catch 捕获错误
// .catch(err){console,log(err)}
// .catch放置在最后可以捕获所有错误，但是出错位置之后的其余代码不再执行
// 如果希望希望出现错误后仍能继续执行，可以将catch语句前置

/*
Promise.all() 方法
发起并行的Promise异步操作，
等所有的异步操作全部结束后才会执行下一步的.then操作

Promise.race() 方法
同样发起并行的Promise异步操作
但是只要一个异步操作完成就立即执行下一步的.then操作
*/

function getFile(path) {
    return new Promise(function (resolve, reject) {
        // 读取文件的操作
        FileSystem.readFile(path, 'utf-8', (err, dataStr) => {
            if (err) {
                return reject(err);
            } else {
                resolve(dataStr);
            }
        })
    })
}
// 此处的回调函数分别对应着function(resolve,reject)
getFile("文件地址").then("成功的回调函数", "失败的回调函数");

/*
async/await
async/await 是ES8引入的新语法，用来简化Promise异步操作
在此之前只能通过.then()的链式调用方式处理Promise异步操作
 -- .then 优点在于解决了回调地狱
     但是也有 代码冗余、阅读性差、不易理解 的缺点

基本使用
如果一个调用的返回值为Promise对象 即可添加await
修饰完毕后返回的是一个值
方法体内使用了await的方法要添加async

 -- 在async方法中 第一个await之前的代码会被同步执行
    第一个await之后的代码会异步执行
*/

// --------------------------------------

/**
JS是单线程语言 同一时间只能做一件事
如果前一个任务非常耗时 后续的任务就会一直等待 导致程序假死

Js中待执行的任务分为两类：
1. 同步任务 synchronous：
    非耗时任务 指的是在主线程上排队执行的任务
    只有前一个任务结束才能执行下一个
2. 异步任务 asynchronous
    称作耗时任务 异步任务由js委托给宿主环境进行执行
    当异步任务执行完成后，会通知js主线程执行异步任务的回调函数

同步任务和异步任务执行过程
Js主线程 + 宿主环境 + 任务队列
（1）同步任务由js主线程次序执行
（2）异步任务委托给宿主环境
（3）已完成的异步任务对应的回调函数加入到任务队列中等待执行
（4）主线程执行栈被清空后，读取任务队列的回调函数，次序执行
（5）不断重复（4）

（4）这一步骤是循环不断的，所以这个运行机制又叫做EventLoop(事件循环)
 */

/*
宏任务和微任务
js把异步任务作了进一步划分 异步任务分为两类：宏任务macrotask 微任务microtask
1. 宏任务
    异步Ajax
    setTimeout setInterval
    文件操作
    其他宏任务
2. 微任务
    Promise.then .cath .finally
    process.nextTick
    其他微任务

宏任务和微任务的执行顺序：
每一个宏任务执行完成之后 检查是否有微任务
如果有 则执行完所有微任务之后 再继续执行下一个宏任务

 */

/*
try...catch捕获异常
try{
    ...
}catch(err){
    ...
}
 */