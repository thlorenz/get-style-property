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
  
  t.equal('20px' ,  getStyleProperty(foo ,  'height')        ,  'gets height')
  t.equal('20px' ,  getStyleProperty(foo ,  'min-height')    ,  'gets min-height')
  t.equal('10px' ,  getStyleProperty(foo ,  'padding')       ,  'gets padding')
  t.equal('10px' ,  getStyleProperty(foo ,  'padding-left')  ,  'gets padding-left')
  t.equal('10px' ,  getStyleProperty(foo ,  'margin')        ,  'gets margin')
  t.equal('10px' ,  getStyleProperty(foo ,  'margin-left')   ,  'gets margin-left')
  t.equal('5px'  ,  getStyleProperty(foo ,  'border-radius') ,  'gets border-radius')
  t.end();
})
