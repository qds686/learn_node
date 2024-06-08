//=> 在浏览器中访问window和global
// 浏览器中有 window对象 默认值为this
// 浏览器无法直接访问 global对象，所以需要 window 来代理

//=>在Node中访问global对象
// 1、在Node中可以直接访问global

// global.a = 1;
// console.log(a); // 1

///1.1 默认声明的属性不放在global上
// let a = 1;
// console.log(global.a); // undefined

//=>Node的特点：每个文件都是一个模块，模块外面包了匿名函数
// 匿名函数的参数：module,exports,require,__dirname,__filename
// console.log(this === global); // false
// console.log(this === module.exports); // true

// (function(){
//   console.log(this); // global对象，前面没有点，默认就是global调用的
// })();

// global中的属性叫全局属性 + module,exports,require,__dirname,__filename 叫全局对象

// 打印global对象的key
// (function(){
//   console.log(Object.keys(this)); 
// })();
/**
 * [
      'global',          'queueMicrotask',
      'clearImmediate',  'setImmediate',
      'structuredClone', 'clearInterval',
      'clearTimeout',    'setInterval',
      'setTimeout',      'atob',
      'btoa',            'performance',
      'fetch'
    ]

    process 进程 开启很多个线程
    Buffer 缓存区 
      我们node读取文件 把电脑中的文件读到内存中，内存中的数据都是二进制的数据
      把8进制变为16进制
    clearInterval setInterval
    clearTimeout setTimeout
    clearImmediate setImmediate
    queueMicrotask 微任务队列
 */

// 1.命令 window的目录和Mac的目录不一样
// window=>win32 mac=>'darwin'
// console.log(process.platform); // window => win32


/* 
  2.argv 代表用户传递的参数 
    + 是一个数组，默认前两个参数，没有实际意义
    + chdir cwd() current working directory
    + env 环境变量
    + nextTick node中的微任务

  执行node node + 文件名执行
  只能通过 命令 + 文件名 后面是参数 process.argv.slice(2)
*/

// $ node 1.js --port 3000 --env xxx
// 收集用户传递的参数
// console.log(process.argv.slice(2)); //[ '--port', '3000', '--env', 'xxx' ]

// 把得到的数组变为对象
// let config = process.argv.slice(2).reduce((memo,current, index, array) => {
//   if(current.includes('--')){
//     memo[current.slice(2)] = array[index + 1];
//   }
//   return memo;
// }, {});
// console.log(config); // { port: '3000', env: 'xxx' }

// commander 命令行的管家 帮你提供--help，必须先安装 $ yarn add commander
const { program } = require('commander');
// 解析用户的参数 默认提供--help
// program.version('1.0.0').parse(process.argv); //$ node 1.js --version => 1.0.0

program
  .version('1.0.0')
  .option('-p, --port <val>')
  .parse(process.argv); 
console.log(program);