# node-mercury-jsx

Transparently `require()` __mercury__ jsx from node.

## Usage

`require('node-mercury-jsx').install()`

If you want to use a different extension, do:

`require('node-mercury-jsx').install({extension: '.jsx'})`

If you want to couple with an additional transform (such as CoffeeScript), do:

```
var coffee = require('coffee-script');
require('node-mercury-jsx').install({
  extension: '.coffee',
  additionalTransform: function(src) {
    return coffee.compile(src, {
      'bare': true
    });
  }
});
```

If you want to use [ES6 transforms](https://github.com/facebook/jstransform/tree/master/visitors) available in the JSX tool

`require('node-mercury-jsx').install({harmony: true})`
