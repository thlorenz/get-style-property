# get-styleProperty

Gets the current value of a style property for a given DOM element.

```js
var foo              =  document.querySelector('.foo')
  , getStyleProperty =  require('get-styleProperty');

// assuming we applied css: ".foo { min-height: 200px }"

console.log(getStyleProperty(foo, 'min-height')); // => 200px
```

## API

```js
/**
 * Gets the current value of a style property for a given DOM element.
 *
 * @function
 * @param el {Object} The DOM element.
 * @param propName {String} The name of the property.
 * @return {String} The current value of the element's style and given property. 
 */
getStyleProperty(el, propName)
```
