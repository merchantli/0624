// 项目用到的依赖
// ⬇ 线上依赖

// ⬇ 开发依赖
/*
*  cross-env -> 在不同的系统上，设置环境变量的命令不同，同样意思的命令，需要写多个版本，cross-env会去做这件事，而我们只需要写一次。
*  babel-cli -> babel命令行工具.(babel->将js代码转成指定版本的js代码，转的时候使用的babel命令由babel-cli提供)
*  babel-core -> babel编译器的核心
*  babel-plugin-add-module-exports -> babel6开始，babel不再导出module.exports默认导出的东西。
*   ````
*     a.js
*       export default 'foo'
*       会被编译为
*       exports.default = 'foo'
*     如果是在nodejs里边，那么我们引用的时候需要使用
*     b.js
*       const some = require('./a.js')
*       console.log(some) // {default: 'foo'}
*       const _else = require('./a.js').default
*       console.log(_else) // 'foo'
*     使用这个插件可以去掉那个非常抽的.default尾巴
*     使用这个插件之后
*     c.js
*       export default 'foo'
*     d.js
*       const anything = require('./c.js')
*       console.log(anything) // 'foo' -> .default这个尾巴被去掉了
*   ````
* */
