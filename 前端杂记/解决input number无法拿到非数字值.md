`input type=number`文档地址：[https://www.w3.org/TR/html5/sec-forms.html#number-state-typenumber](https://www.w3.org/TR/html5/sec-forms.html#number-state-typenumber)

在w3c规范中，如果`input type=number`输入了一些非数字的字符，就会返回空值，这在做输入校验的时候就不行了，会认为输入框没有输入。好在，input属性里有一个`validity`，其中的`badInput`属性可以判断值是否合法。合法值是`false`，非法则为`true`。

通过`input.validity.badInput​`就可以判断出当前输入值是否合法，可以跟无输入时的状态进行区分了。

这个属性值不常用，但关键时刻却很有用户，记录一下，以便以后查阅。
