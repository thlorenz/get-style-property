'use strict';
/*jshint asi: true, browser: true */

var test = require('tape')

var foo              =  document.querySelector('.foo')
  , getStyleProperty =  require('..');

test('get style property', function (t) {
  
  t.equal('20px' ,  getStyleProperty(foo ,  'height')        ,  'gets height')
  t.equal('20px' ,  getStyleProperty(foo ,  'min-height')    ,  'gets min-height')
  t.equal('10px' ,  getStyleProperty(foo ,  'padding')       ,  'gets padding')
  t.equal('10px' ,  getStyleProperty(foo ,  'padding-left')  ,  'gets padding-left')
  t.equal('10px' ,  getStyleProperty(foo ,  'margin')        ,  'gets margin')
  t.equal('10px' ,  getStyleProperty(foo ,  'margin-left')   ,  'gets margin-left')
  t.equal('5px'  ,  getStyleProperty(foo ,  'border-radius') ,  'gets border-radius')
  t.end();
})
