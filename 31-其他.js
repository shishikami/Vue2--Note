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