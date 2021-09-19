## 识别 ast 结构

速查手册：

<https://github.com/estree/estree/blob/master/es5.md>

playground:
<https://astexplorer.net/>

## 生成 ast
遍历 AST 的库，常见的是 @babel/traverse；其核心概念是 visitor 模式，具体文档可以参考：Babel Plugin Handbook。

一些相对轻量级的、可用于遍历AST 的 npm 库有：Estraverse，或其他的一些工具库，如 ESQuery、esutils。

- visitor 模式： 

```
// 当遍历 ast 时， 会在每个 identifier 中调用 identifier()
const Myvistor = {
    enter() {
      console.log("Entered!");
    },
    exit() {
      console.log("Exited!");
    }
};

let visitor = {};
visitor.MemberExpression = function() {};
visitor.FunctionDeclaration = function() {};
```
 - babel 对 ast 的增删改查
<https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md>



