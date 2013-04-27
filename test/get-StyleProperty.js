'use strict';
/*jshint asi: true, browser: true */

var test = require('tape')
  , getStyleProperty =  require('..');

+function setup() {

  +function createFoo() {
    var elem = document.createElement('div')
    elem.setAttribute('class', 'foo')
    document.body.appendChild(elem)
  }()

  +function loadStyle() {
    var css = [
          '.foo {'
        , '   min-height    :  20px;'
        , '   min-width     :  200px;'
        , '   padding       :  10px;'
        , '   margin        :  10px;'
        , '   background    :  antiquewhite;'
        , '   border        :  1px solid antiquewhite;'
        , '   border-radius :  5px;'
        , ' };'
    ].join('\n');

    var head  = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  }()
}()

test('get style property', function (t) {
  var foo = document.querySelector('.foo')
  
  t.ok(~['auto', '20px'].indexOf(getStyleProperty(foo ,  'height')), 'gets height')
  t.equal(getStyleProperty(foo ,  'min-height')    , '20px' ,  'gets min-height')
  t.equal(getStyleProperty(foo ,  'padding')       , '10px' ,  'gets padding')
  t.equal(getStyleProperty(foo ,  'padding-left')  , '10px' ,  'gets padding-left')
  t.equal(getStyleProperty(foo ,  'margin')        , '10px' ,  'gets margin')
  t.equal(getStyleProperty(foo ,  'margin-left')   , '10px' ,  'gets margin-left')
  t.equal(getStyleProperty(foo ,  'border-radius') , '5px'  ,  'gets border-radius')
  t.end();
})
