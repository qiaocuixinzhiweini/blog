### call:
```javascript
Function.prototype.call2 = function (context) {
    context = context || window
    context.fn = this
    var args = []
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments['+i+']')
    }
    var result = eval('context.fn('+args+')')
    delete context.fn
    return result
}
```
### apply:
```javascript
Function.prototype.apply2 = function (context, arr) {
    context = Object(context) || window
    context.fn = this
    var result
    if (!arr) {
        result = context.fn()
    } else {
        var args = []
        for(var i = 0, len = arr.length; i < len; i++) {
            args.push('arr['+i+']')
        }
        result = eval('context.fn('+args+')')
    }
    delete context.fn
    return result
}
```
### bind:
```javascript
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```