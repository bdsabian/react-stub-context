(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.stubContext = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function createStubbedContextComponent(e,t){("undefined"==typeof t||null===t)&&(t={});var n={},r=t;try{Object.keys(r).forEach(function(e){n[e]=React.PropTypes.any})}catch(o){throw new TypeError("createdStubbedContextComponent requires an object")}e.contextTypes?_extends(e.contextTypes,n):_extends(e,{contextTypes:n});var a=React.createClass({displayName:"StubbedContextComponent",childContextTypes:n,getChildContext:function(){return r},getWrappedComponent:function(){return this._wrappedComponent},getWrappedElement:function(){return this._wrappedElement},render:function(){return this._wrappedComponent=e,this._wrappedElement=React.createElement(e,_extends({},this.state,this.props)),this._wrappedElement}});return a}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},React=require("react");module.exports=createStubbedContextComponent;

},{"react":undefined}],2:[function(require,module,exports){
"use strict";module.exports=exports=require("./createStubbedContextComponent");

},{"./createStubbedContextComponent":1}]},{},[2])(2)
});