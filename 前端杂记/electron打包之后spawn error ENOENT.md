在开发环境通过spawn 运行npm run start是正常的，但打包成asar 应用后再运行就报了：Error: spawn npm ENOENT 错误。查阅文档，发现如下这段话：

> ### [执行`asar`档案内的二进制文件](https://electronjs.org/docs/tutorial/application-packaging#%E6%89%A7%E8%A1%8Casar%E6%A1%A3%E6%A1%88%E5%86%85%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6)
>
> Node 中有一些可以执行程序的 API，如 `child_process.exec`，`child_process.spawn` 和 `child_process.execFile` 等， 但只有 `execFile` 可以执行 `asar` 包中的程序。
>
> 因为 `exec` 和 `spawn` 允许 `command` 替代 `file` 作为输入，而 `command` 是需要在 shell 下执行的. 目前没有 可靠的方法来判断 command 中是否在操作一个 asar 包中的文件，而且即便可以判断，我们依旧无法保证可以在无任何 副作用的情况下替换 command 中的文件路径。

因为程序不是从命令行启动的，所以不会主动查找系统路径，解决该问题的方法就是修复路径问题。

[https://www.npmjs.com/package/fix-path](https://www.npmjs.com/package/fix-path)  引用该库，问题解决
