!function e(t,n,r){function i(l,a){if(!n[l]){if(!t[l]){var u="function"==typeof require&&require;if(!a&&u)return u(l,!0);if(o)return o(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[l]={exports:{}};t[l][0].call(f.exports,function(e){var n=t[l][1][e];return i(n?n:e)},f,f.exports,e,t,n,r)}return n[l].exports}for(var o="function"==typeof require&&require,l=0;l<r.length;l++)i(r[l]);return i}({1:[function(e,t,n){"use strict";function r(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){e.requestModules(["Array"]).then(function(){var t=function(e){function t(e,n,r){i(this,t);var l=o(this,Object.getPrototypeOf(t).call(this,e,n,r));return l.textfields=[],l.aceInstances=[],l}return l(t,e),u(t,[{key:"toString",value:function(){return this._content.map(function(e){return e.val}).join("")}},{key:"insert",value:function(e,n){s(Object.getPrototypeOf(t.prototype),"insert",this).call(this,e,n.split(""))}},{key:"bindAce",value:function(e,t){function n(e){if(l){l=!1;try{e()}catch(t){throw l=!0,new Error(t)}l=!0}}function i(t,n,r){if(!a){var i=0;t.row===n.row&&t.column===n.column&&(i=1);var o=new u(t.row,t.column,n.row,n.column+i),l=e.session.addMarker(o,r,"text");e.markers.push({id:l,timestamp:Date.now()})}}this.aceInstances.push(e);var o=this,l=!0;e.markers=[];var a=!1;"object"===("undefined"==typeof t?"undefined":r(t))&&"undefined"!=typeof t.disableMarkers&&(a=t.disableMarkers),e.setValue(this.toString()),e.on("change",function(t){n(function(){var n=0,r=0,i=e.getSession().getDocument();"insert"===t.action?(n=i.positionToIndex(t.start,0),o.insert(n,t.lines.join("\n"))):"remove"===t.action&&(n=i.positionToIndex(t.start,0),r=t.lines.join("\n").length,o["delete"](n,r))})}),a||(this.inteval&&clearInterval(this.inteval),this.inteval=setInterval(function(){for(var t=0,n=Date.now(),r=800;t<e.markers.length;){var i=e.markers[t];i.timestamp+r<n&&(e.getSession().removeMarker(i.id),e.markers.splice(t,1),t--),t++}},1e3));var u=window.ace.require("ace/range").Range;this.observe(function(t){var r=e.getSession().getDocument();n(function(){for(var e=0;e<t.length;e++){var n=t[e];if("insert"===n.type){var o=r.indexToPosition(n.index,0),l=r.indexToPosition(n.index+n.value.length,0);r.insert(o,n.value),i(o,l,"inserted")}else if("delete"===n.type){var o=r.indexToPosition(n.index,0),l=r.indexToPosition(n.index+n.length,0),a=new u(o.row,o.column,l.row,l.column);r.remove(a),i(o,l,"deleted")}}})})}},{key:"bind",value:function(){var e=arguments[0];e instanceof Element?this.bindTextarea.apply(this,arguments):null!=e&&null!=e.session&&null!=e.getSession&&null!=e.setValue?this.bindAce.apply(this,arguments):console.error("Cannot bind, unsupported editor!")}},{key:"bindTextarea",value:function(e,t){t=t||window,null==t.getSelection&&(t=window);for(var n in this.textfields)if(this.textfields[n]===e)return;var r=!1,i=this;e.value=this.toString(),this.textfields.push(e);var o,l,a;null!=e.selectionStart&&null!=e.setSelectionRange?(o=function(t){var n=e.selectionStart,r=e.selectionEnd;return null!=t&&(n=t(n),r=t(r)),{left:n,right:r}},l=function(t){a(i.toString()),e.setSelectionRange(t.left,t.right)},a=function(t){e.value=t}):(o=function(n){var r={},i=t.getSelection(),o=e.textContent.length;r.left=Math.min(i.anchorOffset,o),r.right=Math.min(i.focusOffset,o),null!=n&&(r.left=n(r.left),r.right=n(r.right));var l=i.focusNode;return l===e||l===e.childNodes[0]?r.isReal=!0:r.isReal=!1,r},l=function(t){a(i.toString());var n=e.childNodes[0];if(t.isReal&&null!=n){t.left<0&&(t.left=0),t.right=Math.max(t.left,t.right),t.right>n.length&&(t.right=n.length),t.left=Math.min(t.left,t.right);var r=document.createRange();r.setStart(n,t.left),r.setEnd(n,t.right);var o=window.getSelection();o.removeAllRanges(),o.addRange(r)}},a=function(t){var n=t.replace(new RegExp("\n","g")," ").split(" ");e.innerText="";for(var r in n){var i=n[r];e.innerText+=i,r!==n.length-1&&(e.innerHTML+="&nbsp;")}}),a(this.toString()),this.observe(function(e){for(var t in e){var n=e[t];if(!r){var i,a;if("insert"===n.type){i=n.index,a=function(e){return i>=e?e:e+=1};var u=o(a);l(u)}else"delete"===n.type&&(i=n.index,a=function(e){return i>e?e:e-=1},u=o(a),l(u))}}}),e.onkeypress=function(t){if(i.is_deleted)return e.onkeypress=null,!0;r=!0;var n;if(n=13===t.keyCode?"\n":null!=t.key?32===t.charCode?" ":t.key:window.String.fromCharCode(t.keyCode),n.length>1)return!0;if(n.length>0){var a=o(),u=Math.min(a.left,a.right,i.length),s=Math.abs(a.right-a.left);i["delete"](u,s),i.insert(u,n),a.left=u+n.length,a.right=a.left,l(a)}return t.preventDefault(),r=!1,!1},e.onpaste=function(t){return i.is_deleted?(e.onpaste=null,!0):void t.preventDefault()},e.oncut=function(t){return i.is_deleted?(e.oncut=null,!0):void t.preventDefault()},e.onkeydown=function(t){if(r=!0,i.is_deleted)return e.onkeydown=null,!0;var n=o(),a=Math.min(n.left,n.right,i.toString().length),u=Math.abs(n.left-n.right);if(null!=t.keyCode&&8===t.keyCode){if(u>0)i["delete"](a,u),n.left=a,n.right=a,l(n);else if(null!=t.ctrlKey&&t.ctrlKey){var s=i.toString(),f=a,c=0;for(a>0&&(f--,c++);f>0&&" "!==s[f]&&"\n"!==s[f];)f--,c++;i["delete"](f,a-f),n.left=f,n.right=f,l(n)}else a>0&&(i["delete"](a-1,1),n.left=a-1,n.right=a-1,l(n));return t.preventDefault(),r=!1,!1}return null!=t.keyCode&&46===t.keyCode?(u>0?(i["delete"](a,u),n.left=a,n.right=a,l(n)):(i["delete"](a,1),n.left=a,n.right=a,l(n)),t.preventDefault(),r=!1,!1):(r=!1,!0)}}}]),t}(e.Array["class"]);e.extend("Text",new e.utils.CustomType({name:"Text","class":t,struct:"List",initType:regeneratorRuntime.mark(function n(r,i){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.delegateYield(e.Struct.List.map.call(this,i,function(e){return{id:JSON.stringify(e.id),val:e.content}}),"t0",1);case 1:return o=n.t0,n.abrupt("return",new t(r,i.id,o));case 3:case"end":return n.stop()}},n,this)})}))})}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function f(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:f(i,t,n)}if("value"in r)return r.value;var o=r.get;if(void 0!==o)return o.call(n)};t.exports=a,"undefined"!=typeof Y&&a(Y)},{}]},{},[1]);
//# sourceMappingURL=y-text.js.map