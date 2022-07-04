/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var text = t.text()
		, a = text.split(splitter)
		, inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
				//inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
			});
			//t.attr('aria-label',text)
			t.empty()
			.append(inject)

		}
	}


	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},

		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);










































/*!
 * circletype 2.3.2
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2020 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.CircleType=n():t.CircleType=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=28)}([function(t,n,e){var r=e(13)("wks"),i=e(12),o=e(1).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(4),i=e(11);t.exports=e(6)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5),i=e(33),o=e(34),u=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(18)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(2),i=e(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(16)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports={}},function(t,n,e){var r=e(13)("keys"),i=e(12);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(1),i=e(2),o=e(3),u=e(20),c=e(21),a=function(t,n,e){var f,s,l,p,h=t&a.F,v=t&a.G,d=t&a.S,y=t&a.P,m=t&a.B,g=v?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,_=v?i:i[n]||(i[n]={}),x=_.prototype||(_.prototype={});for(f in v&&(e=n),e)l=((s=!h&&g&&void 0!==g[f])?g:e)[f],p=m&&s?c(l,r):y&&"function"==typeof l?c(Function.call,l):l,g&&u(g,f,l,t&a.U),_[f]!=l&&o(_,f,p),y&&x[f]!=l&&(x[f]=l)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(10),i=e(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(1),i=e(3),o=e(7),u=e(12)("src"),c=e(35),a=(""+c).split("toString");e(2).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(f&&(o(e,u)||i(e,u,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n,e){var r=e(36);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(42),i=e(9);t.exports=function(t){return r(i(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(4).f,i=e(7),o=e(0)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(29);var r=e(54).default;t.exports=r},function(t,n,e){e(30),e(47),t.exports=e(2).Array.from},function(t,n,e){"use strict";var r=e(31)(!0);e(32)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(8),i=e(9);t.exports=function(t){return function(n,e){var o,u,c=String(i(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(16),i=e(17),o=e(20),u=e(3),c=e(14),a=e(37),f=e(26),s=e(46),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,d,y,m){a(e,n,v);var g,_,x,b=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",O="values"==d,j=!1,S=t.prototype,M=S[l]||S["@@iterator"]||d&&S[d],T=M||b(d),P=d?O?b("entries"):T:void 0,A="Array"==n&&S.entries||M;if(A&&(x=s(A.call(new t)))!==Object.prototype&&x.next&&(f(x,w,!0),r||"function"==typeof x[l]||u(x,l,h)),O&&M&&"values"!==M.name&&(j=!0,T=function(){return M.call(this)}),r&&!m||!p&&!j&&S[l]||u(S,l,T),c[n]=T,c[w]=h,d)if(g={values:O?T:b("values"),keys:y?T:b("keys"),entries:P},m)for(_ in g)_ in S||o(S,_,g[_]);else i(i.P+i.F*(p||j),n,g);return g}},function(t,n,e){t.exports=!e(6)&&!e(18)((function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=e(13)("native-function-to-string",Function.toString)},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";var r=e(38),i=e(11),o=e(26),u={};e(3)(u,e(0)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){var r=e(5),i=e(39),o=e(25),u=e(15)("IE_PROTO"),c=function(){},a=function(){var t,n=e(19)("iframe"),r=o.length;for(n.style.display="none",e(45).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(4),i=e(5),o=e(40);t.exports=e(6)?Object.defineProperties:function(t,n){i(t);for(var e,u=o(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var r=e(41),i=e(25);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(7),i=e(22),o=e(43)(!1),u=e(15)("IE_PROTO");t.exports=function(t,n){var e,c=i(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~o(f,e)||f.push(e));return f}},function(t,n,e){var r=e(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(22),i=e(24),o=e(44);t.exports=function(t){return function(n,e,u){var c,a=r(n),f=i(a.length),s=o(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(8),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(7),i=e(27),o=e(15)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(21),i=e(17),o=e(27),u=e(48),c=e(49),a=e(24),f=e(50),s=e(51);i(i.S+i.F*!e(53)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,i,l,p=o(t),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,m=0,g=s(p);if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),null==g||h==Array&&c(g))for(e=new h(n=a(p.length));n>m;m++)f(e,m,y?d(p[m],m):p[m]);else for(l=g.call(p),e=new h;!(i=l.next()).done;m++)f(e,m,y?u(l,d,[i.value,m],!0):i.value);return e.length=m,e}})},function(t,n,e){var r=e(5);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){var r=e(14),i=e(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n,e){"use strict";var r=e(4),i=e(11);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},function(t,n,e){var r=e(52),i=e(0)("iterator"),o=e(14);t.exports=e(2).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(23),i=e(0)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(0)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:e=!0}},o[r]=function(){return u},t(o)}catch(t){}return e}},function(t,n,e){"use strict";e.r(n);var r=function(t){var n=t.getBoundingClientRect();return{height:n.height,left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:n.width}};function i(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=Math.PI/180,u=function(t){return t*o},c=function(t,n){return t*(1-Math.cos(u(n/2)))},a=180/Math.PI,f=function(t,n){return t.reduce((function(t,e){var r=e.width,i=r/n*a;return{"θ":t.θ+i,rotations:t.rotations.concat([t.θ+i/2])}}),{"θ":0,rotations:[]})};function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=Math.PI,p=Math.max,h=Math.min,v=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=n,this.originalHTML=this.element.innerHTML;var o=document.createElement("div"),u=document.createDocumentFragment();o.setAttribute("aria-label",n.innerText),o.style.position="relative",this.container=o,this._letters=function(t,n){var e=document.createElement("span");e.style.display="inline-block";var r=t.innerText.trim();return(n?n(r):i(r)).map((function(t){var n=e.cloneNode();return n.insertAdjacentHTML("afterbegin"," "===t?"&nbsp;":t),n}))}(n,e),this._letters.forEach((function(t){return u.appendChild(t)})),o.appendChild(u),this.element.innerHTML="",this.element.appendChild(o);var c=window.getComputedStyle(this.element),a=c.fontSize,f=c.lineHeight;this._fontSize=parseFloat(a),this._lineHeight=parseFloat(f)||this._fontSize,this._metrics=this._letters.map(r);var s=this._metrics.reduce((function(t,n){return t+n.width}),0);this._minRadius=s/l/2+this._lineHeight,this._dir=1,this._forceWidth=!1,this._forceHeight=!0,this._radius=this._minRadius,this._invalidate()}var n,e,o;return n=t,(e=[{key:"radius",value:function(t){return void 0!==t?(this._radius=p(this._minRadius,t),this._invalidate(),this):this._radius}},{key:"dir",value:function(t){return void 0!==t?(this._dir=t,this._invalidate(),this):this._dir}},{key:"forceWidth",value:function(t){return void 0!==t?(this._forceWidth=t,this._invalidate(),this):this._forceWidth}},{key:"forceHeight",value:function(t){return void 0!==t?(this._forceHeight=t,this._invalidate(),this):this._forceHeight}},{key:"refresh",value:function(){return this._invalidate()}},{key:"destroy",value:function(){return this.element.innerHTML=this.originalHTML,this}},{key:"_invalidate",value:function(){var t=this;return cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame((function(){t._layout()})),this}},{key:"_layout",value:function(){var t=this,n=this._radius,e=this._dir,r=-1===e?-n+this._lineHeight:n,i="center ".concat(r/this._fontSize,"em"),o=n-this._lineHeight,a=f(this._metrics,o),s=a.rotations,l=a.θ;if(this._letters.forEach((function(n,r){var o=n.style,u=(-.5*l+s[r])*e,c=-.5*t._metrics[r].width/t._fontSize,a="translateX(".concat(c,"em) rotate(").concat(u,"deg)");o.position="absolute",o.bottom=-1===e?0:"auto",o.left="50%",o.transform=a,o.transformOrigin=i,o.webkitTransform=a,o.webkitTransformOrigin=i})),this._forceHeight){var p=l>180?c(n,l):c(o,l)+this._lineHeight;this.container.style.height="".concat(p/this._fontSize,"em")}if(this._forceWidth){var v=function(t,n){return 2*t*Math.sin(u(n/2))}(n,h(180,l));this.container.style.width="".concat(v/this._fontSize,"em")}return this}}])&&s(n.prototype,e),o&&s(n,o),t}();n.default=v}])}));












/*  제품상세 : 확대 기능 pan zoom */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.panzoom = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
	'use strict';
	/**
	 * Allows to drag and zoom svg elements
	 */
	var wheel = require('wheel');
	var animate = require('amator');
	var eventify = require('ngraph.events');
	var kinetic = require('./lib/kinetic.js');
	var createTextSelectionInterceptor = require('./lib/makeTextSelectionInterceptor.js');
	var domTextSelectionInterceptor = createTextSelectionInterceptor();
	var fakeTextSelectorInterceptor = createTextSelectionInterceptor(true);
	var Transform = require('./lib/transform.js');
	var makeSvgController = require('./lib/makeSvgController.js');
	var makeDomController = require('./lib/makeDomController.js');
	
	var defaultZoomSpeed = 1;
	var defaultDoubleTapZoomSpeed = 1.75;
	var doubleTapSpeedInMS = 300;
	var clickEventTimeInMS = 200;
	
	module.exports = createPanZoom;
	
	/**
	 * Creates a new instance of panzoom, so that an object can be panned and zoomed
	 *
	 * @param {DOMElement} domElement where panzoom should be attached.
	 * @param {Object} options that configure behavior.
	 */
	function createPanZoom(domElement, options) {
	  options = options || {};
	
	  var panController = options.controller;
	
	  if (!panController) {
		if (makeSvgController.canAttach(domElement)) {
		  panController = makeSvgController(domElement, options);
		} else if (makeDomController.canAttach(domElement)) {
		  panController = makeDomController(domElement, options);
		}
	  }
	
	  if (!panController) {
		throw new Error(
		  'Cannot create panzoom for the current type of dom element'
		);
	  }
	  var owner = panController.getOwner();
	  // just to avoid GC pressure, every time we do intermediate transform
	  // we return this object. For internal use only. Never give it back to the consumer of this library
	  var storedCTMResult = { x: 0, y: 0 };
	
	  var isDirty = false;
	  var transform = new Transform();
	
	  if (panController.initTransform) {
		panController.initTransform(transform);
	  }
	
	  var filterKey = typeof options.filterKey === 'function' ? options.filterKey : noop;
	  // TODO: likely need to unite pinchSpeed with zoomSpeed
	  var pinchSpeed = typeof options.pinchSpeed === 'number' ? options.pinchSpeed : 1;
	  var bounds = options.bounds;
	  var maxZoom = typeof options.maxZoom === 'number' ? options.maxZoom : Number.POSITIVE_INFINITY;
	  var minZoom = typeof options.minZoom === 'number' ? options.minZoom : 0;
	
	  var boundsPadding = typeof options.boundsPadding === 'number' ? options.boundsPadding : 0.05;
	  var zoomDoubleClickSpeed = typeof options.zoomDoubleClickSpeed === 'number' ? options.zoomDoubleClickSpeed : defaultDoubleTapZoomSpeed;
	  var beforeWheel = options.beforeWheel || noop;
	  var beforeMouseDown = options.beforeMouseDown || noop;
	  var speed = typeof options.zoomSpeed === 'number' ? options.zoomSpeed : defaultZoomSpeed;
	  var transformOrigin = parseTransformOrigin(options.transformOrigin);
	  var textSelection = options.enableTextSelection ? fakeTextSelectorInterceptor : domTextSelectionInterceptor;
	
	  validateBounds(bounds);
	
	  if (options.autocenter) {
		autocenter();
	  }
	
	  var frameAnimation;
	  var lastTouchEndTime = 0;
	  var lastTouchStartTime = 0;
	  var pendingClickEventTimeout = 0;
	  var lastMouseDownedEvent = null;
	  var lastMouseDownTime = new Date();
	  var lastSingleFingerOffset;
	  var touchInProgress = false;
	
	  // We only need to fire panstart when actual move happens
	  var panstartFired = false;
	
	  // cache mouse coordinates here
	  var mouseX;
	  var mouseY;
	
	  // Where the first click has happened, so that we can differentiate
	  // between pan and click
	  var clickX;
	  var clickY;
	
	  var pinchZoomLength;
	
	  var smoothScroll;
	  if ('smoothScroll' in options && !options.smoothScroll) {
		// If user explicitly asked us not to use smooth scrolling, we obey
		smoothScroll = rigidScroll();
	  } else {
		// otherwise we use forward smoothScroll settings to kinetic API
		// which makes scroll smoothing.
		smoothScroll = kinetic(getPoint, scroll, options.smoothScroll);
	  }
	
	  var moveByAnimation;
	  var zoomToAnimation;
	
	  var multiTouch;
	  var paused = false;
	
	  listenForEvents();
	
	  var api = {
		dispose: dispose,
		moveBy: internalMoveBy,
		moveTo: moveTo,
		smoothMoveTo: smoothMoveTo, 
		centerOn: centerOn,
		zoomTo: publicZoomTo,
		zoomAbs: zoomAbs,
		smoothZoom: smoothZoom,
		smoothZoomAbs: smoothZoomAbs,
		showRectangle: showRectangle,
	
		pause: pause,
		resume: resume,
		isPaused: isPaused,
	
		getTransform: getTransformModel,
	
		getMinZoom: getMinZoom,
		setMinZoom: setMinZoom,
	
		getMaxZoom: getMaxZoom,
		setMaxZoom: setMaxZoom,
	
		getTransformOrigin: getTransformOrigin,
		setTransformOrigin: setTransformOrigin,
	
		getZoomSpeed: getZoomSpeed,
		setZoomSpeed: setZoomSpeed
	  };
	
	  eventify(api);
	  
	  var initialX = typeof options.initialX === 'number' ? options.initialX : transform.x;
	  var initialY = typeof options.initialY === 'number' ? options.initialY : transform.y;
	  var initialZoom = typeof options.initialZoom === 'number' ? options.initialZoom : transform.scale;
	
	  if(initialX != transform.x || initialY != transform.y || initialZoom != transform.scale){
		zoomAbs(initialX, initialY, initialZoom);
	  }
	
	  return api;
	
	  function pause() {
		releaseEvents();
		paused = true;
	  }
	
	  function resume() {
		if (paused) {
		  listenForEvents();
		  paused = false;
		}
	  }
	
	  function isPaused() {
		return paused;
	  }
	
	  function showRectangle(rect) {
		// TODO: this duplicates autocenter. I think autocenter should go.
		var clientRect = owner.getBoundingClientRect();
		var size = transformToScreen(clientRect.width, clientRect.height);
	
		var rectWidth = rect.right - rect.left;
		var rectHeight = rect.bottom - rect.top;
		if (!Number.isFinite(rectWidth) || !Number.isFinite(rectHeight)) {
		  throw new Error('Invalid rectangle');
		}
	
		var dw = size.x / rectWidth;
		var dh = size.y / rectHeight;
		var scale = Math.min(dw, dh);
		transform.x = -(rect.left + rectWidth / 2) * scale + size.x / 2;
		transform.y = -(rect.top + rectHeight / 2) * scale + size.y / 2;
		transform.scale = scale;
	  }
	
	  function transformToScreen(x, y) {
		if (panController.getScreenCTM) {
		  var parentCTM = panController.getScreenCTM();
		  var parentScaleX = parentCTM.a;
		  var parentScaleY = parentCTM.d;
		  var parentOffsetX = parentCTM.e;
		  var parentOffsetY = parentCTM.f;
		  storedCTMResult.x = x * parentScaleX - parentOffsetX;
		  storedCTMResult.y = y * parentScaleY - parentOffsetY;
		} else {
		  storedCTMResult.x = x;
		  storedCTMResult.y = y;
		}
	
		return storedCTMResult;
	  }
	
	  function autocenter() {
		var w; // width of the parent
		var h; // height of the parent
		var left = 0;
		var top = 0;
		var sceneBoundingBox = getBoundingBox();
		if (sceneBoundingBox) {
		  // If we have bounding box - use it.
		  left = sceneBoundingBox.left;
		  top = sceneBoundingBox.top;
		  w = sceneBoundingBox.right - sceneBoundingBox.left;
		  h = sceneBoundingBox.bottom - sceneBoundingBox.top;
		} else {
		  // otherwise just use whatever space we have
		  var ownerRect = owner.getBoundingClientRect();
		  w = ownerRect.width;
		  h = ownerRect.height;
		}
		var bbox = panController.getBBox();
		if (bbox.width === 0 || bbox.height === 0) {
		  // we probably do not have any elements in the SVG
		  // just bail out;
		  return;
		}
		var dh = h / bbox.height;
		var dw = w / bbox.width;
		var scale = Math.min(dw, dh);
		transform.x = -(bbox.left + bbox.width / 2) * scale + w / 2 + left;
		transform.y = -(bbox.top + bbox.height / 2) * scale + h / 2 + top;
		transform.scale = scale;
	  }
	
	  function getTransformModel() {
		// TODO: should this be read only?
		return transform;
	  }
	
	  function getMinZoom() {
		return minZoom;
	  }
	
	  function setMinZoom(newMinZoom) {
		minZoom = newMinZoom;
	  }
	
	  function getMaxZoom() {
		return maxZoom;
	  }
	
	  function setMaxZoom(newMaxZoom) {
		maxZoom = newMaxZoom;
	  }
	
	  function getTransformOrigin() {
		return transformOrigin;
	  }
	
	  function setTransformOrigin(newTransformOrigin) {
		transformOrigin = parseTransformOrigin(newTransformOrigin);
	  }
	
	  function getZoomSpeed() {
		return speed;
	  }
	
	  function setZoomSpeed(newSpeed) {
		if (!Number.isFinite(newSpeed)) {
		  throw new Error('Zoom speed should be a number');
		}
		speed = newSpeed;
	  }
	
	  function getPoint() {
		return {
		  x: transform.x,
		  y: transform.y
		};
	  }
	
	  function moveTo(x, y) {
		transform.x = x;
		transform.y = y;
	
		keepTransformInsideBounds();
	
		triggerEvent('pan');
		makeDirty();
	  }
	
	  function moveBy(dx, dy) {
		moveTo(transform.x + dx, transform.y + dy);
	  }
	
	  function keepTransformInsideBounds() {
		var boundingBox = getBoundingBox();
		if (!boundingBox) return;
	
		var adjusted = false;
		var clientRect = getClientRect();
	
		var diff = boundingBox.left - clientRect.right;
		if (diff > 0) {
		  transform.x += diff;
		  adjusted = true;
		}
		// check the other side:
		diff = boundingBox.right - clientRect.left;
		if (diff < 0) {
		  transform.x += diff;
		  adjusted = true;
		}
	
		// y axis:
		diff = boundingBox.top - clientRect.bottom;
		if (diff > 0) {
		  // we adjust transform, so that it matches exactly our bounding box:
		  // transform.y = boundingBox.top - (boundingBox.height + boundingBox.y) * transform.scale =>
		  // transform.y = boundingBox.top - (clientRect.bottom - transform.y) =>
		  // transform.y = diff + transform.y =>
		  transform.y += diff;
		  adjusted = true;
		}
	
		diff = boundingBox.bottom - clientRect.top;
		if (diff < 0) {
		  transform.y += diff;
		  adjusted = true;
		}
		return adjusted;
	  }
	
	  /**
	   * Returns bounding box that should be used to restrict scene movement.
	   */
	  function getBoundingBox() {
		if (!bounds) return; // client does not want to restrict movement
	
		if (typeof bounds === 'boolean') {
		  // for boolean type we use parent container bounds
		  var ownerRect = owner.getBoundingClientRect();
		  var sceneWidth = ownerRect.width;
		  var sceneHeight = ownerRect.height;
	
		  return {
			left: sceneWidth * boundsPadding,
			top: sceneHeight * boundsPadding,
			right: sceneWidth * (1 - boundsPadding),
			bottom: sceneHeight * (1 - boundsPadding)
		  };
		}
	
		return bounds;
	  }
	
	  function getClientRect() {
		var bbox = panController.getBBox();
		var leftTop = client(bbox.left, bbox.top);
	
		return {
		  left: leftTop.x,
		  top: leftTop.y,
		  right: bbox.width * transform.scale + leftTop.x,
		  bottom: bbox.height * transform.scale + leftTop.y
		};
	  }
	
	  function client(x, y) {
		return {
		  x: x * transform.scale + transform.x,
		  y: y * transform.scale + transform.y
		};
	  }
	
	  function makeDirty() {
		isDirty = true;
		frameAnimation = window.requestAnimationFrame(frame);
	  }
	
	  function zoomByRatio(clientX, clientY, ratio) {
		if (isNaN(clientX) || isNaN(clientY) || isNaN(ratio)) {
		  throw new Error('zoom requires valid numbers');
		}
	
		var newScale = transform.scale * ratio;
	
		if (newScale < minZoom) {
		  if (transform.scale === minZoom) return;
	
		  ratio = minZoom / transform.scale;
		}
		if (newScale > maxZoom) {
		  if (transform.scale === maxZoom) return;
	
		  ratio = maxZoom / transform.scale;
		}
	
		var size = transformToScreen(clientX, clientY);
	
		transform.x = size.x - ratio * (size.x - transform.x);
		transform.y = size.y - ratio * (size.y - transform.y);
	
		// TODO: https://github.com/anvaka/panzoom/issues/112
		if (bounds && boundsPadding === 1 && minZoom === 1) {
		  transform.scale *= ratio;
		  keepTransformInsideBounds();
		} else {
		  var transformAdjusted = keepTransformInsideBounds();
		  if (!transformAdjusted) transform.scale *= ratio;
		}
	
		triggerEvent('zoom');
	
		makeDirty();
	  }
	
	  function zoomAbs(clientX, clientY, zoomLevel) {
		var ratio = zoomLevel / transform.scale;
		zoomByRatio(clientX, clientY, ratio);
	  }
	
	  function centerOn(ui) {
		var parent = ui.ownerSVGElement;
		if (!parent)
		  throw new Error('ui element is required to be within the scene');
	
		// TODO: should i use controller's screen CTM?
		var clientRect = ui.getBoundingClientRect();
		var cx = clientRect.left + clientRect.width / 2;
		var cy = clientRect.top + clientRect.height / 2;
	
		var container = parent.getBoundingClientRect();
		var dx = container.width / 2 - cx;
		var dy = container.height / 2 - cy;
	
		internalMoveBy(dx, dy, true);
	  }
	
	  function smoothMoveTo(x, y){
		internalMoveBy(x - transform.x, y - transform.y, true);
	  }
	
	  function internalMoveBy(dx, dy, smooth) {
		if (!smooth) {
		  return moveBy(dx, dy);
		}
	
		if (moveByAnimation) moveByAnimation.cancel();
	
		var from = { x: 0, y: 0 };
		var to = { x: dx, y: dy };
		var lastX = 0;
		var lastY = 0;
	
		moveByAnimation = animate(from, to, {
		  step: function (v) {
			moveBy(v.x - lastX, v.y - lastY);
	
			lastX = v.x;
			lastY = v.y;
		  }
		});
	  }
	
	  function scroll(x, y) {
		cancelZoomAnimation();
		moveTo(x, y);
	  }
	
	  function dispose() {
		releaseEvents();
	  }
	
	  function listenForEvents() {
		owner.addEventListener('mousedown', onMouseDown, { passive: false });
		owner.addEventListener('dblclick', onDoubleClick, { passive: false });
		owner.addEventListener('touchstart', onTouch, { passive: false });
		owner.addEventListener('keydown', onKeyDown, { passive: false });
	
		// Need to listen on the owner container, so that we are not limited
		// by the size of the scrollable domElement
		wheel.addWheelListener(owner, onMouseWheel, { passive: false });
	
		makeDirty();
	  }
	
	  function releaseEvents() {
		wheel.removeWheelListener(owner, onMouseWheel);
		owner.removeEventListener('mousedown', onMouseDown);
		owner.removeEventListener('keydown', onKeyDown);
		owner.removeEventListener('dblclick', onDoubleClick);
		owner.removeEventListener('touchstart', onTouch);
	
		if (frameAnimation) {
		  window.cancelAnimationFrame(frameAnimation);
		  frameAnimation = 0;
		}
	
		smoothScroll.cancel();
	
		releaseDocumentMouse();
		releaseTouches();
		textSelection.release();
	
		triggerPanEnd();
	  }
	
	  function frame() {
		if (isDirty) applyTransform();
	  }
	
	  function applyTransform() {
		isDirty = false;
	
		// TODO: Should I allow to cancel this?
		panController.applyTransform(transform);
	
		triggerEvent('transform');
		frameAnimation = 0;
	  }
	
	  function onKeyDown(e) {
		var x = 0,
		  y = 0,
		  z = 0;
		if (e.keyCode === 38) {
		  y = 1; // up
		} else if (e.keyCode === 40) {
		  y = -1; // down
		} else if (e.keyCode === 37) {
		  x = 1; // left
		} else if (e.keyCode === 39) {
		  x = -1; // right
		} else if (e.keyCode === 189 || e.keyCode === 109) {
		  // DASH or SUBTRACT
		  z = 1; // `-` -  zoom out
		} else if (e.keyCode === 187 || e.keyCode === 107) {
		  // EQUAL SIGN or ADD
		  z = -1; // `=` - zoom in (equal sign on US layout is under `+`)
		}
	
		if (filterKey(e, x, y, z)) {
		  // They don't want us to handle the key: https://github.com/anvaka/panzoom/issues/45
		  return;
		}
	
		if (x || y) {
		  e.preventDefault();
		  e.stopPropagation();
	
		  var clientRect = owner.getBoundingClientRect();
		  // movement speed should be the same in both X and Y direction:
		  var offset = Math.min(clientRect.width, clientRect.height);
		  var moveSpeedRatio = 0.05;
		  var dx = offset * moveSpeedRatio * x;
		  var dy = offset * moveSpeedRatio * y;
	
		  // TODO: currently we do not animate this. It could be better to have animation
		  internalMoveBy(dx, dy);
		}
	
		if (z) {
		  var scaleMultiplier = getScaleMultiplier(z * 100);
		  var offset = transformOrigin ? getTransformOriginOffset() : midPoint();
		  publicZoomTo(offset.x, offset.y, scaleMultiplier);
		}
	  }
	
	  function midPoint() {
		var ownerRect = owner.getBoundingClientRect();
		return {
		  x: ownerRect.width / 2,
		  y: ownerRect.height / 2
		};
	  }
	
	  function onTouch(e) {
		// let them override the touch behavior
		beforeTouch(e);
		clearPendingClickEventTimeout();
	
		if (e.touches.length === 1) {
		  return handleSingleFingerTouch(e, e.touches[0]);
		} else if (e.touches.length === 2) {
		  // handleTouchMove() will care about pinch zoom.
		  pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
		  multiTouch = true;
		  startTouchListenerIfNeeded();
		}
	  }
	
	  function beforeTouch(e) {
		// TODO: Need to unify this filtering names. E.g. use `beforeTouch`
		if (options.onTouch && !options.onTouch(e)) {
		  // if they return `false` from onTouch, we don't want to stop
		  // events propagation. Fixes https://github.com/anvaka/panzoom/issues/12
		  return;
		}
	
		e.stopPropagation();
		e.preventDefault();
	  }
	
	  function beforeDoubleClick(e) {
		clearPendingClickEventTimeout();
	
		// TODO: Need to unify this filtering names. E.g. use `beforeDoubleClick``
		if (options.onDoubleClick && !options.onDoubleClick(e)) {
		  // if they return `false` from onTouch, we don't want to stop
		  // events propagation. Fixes https://github.com/anvaka/panzoom/issues/46
		  return;
		}
	
		e.preventDefault();
		e.stopPropagation();
	  }
	
	  function handleSingleFingerTouch(e) {
		lastTouchStartTime = new Date();
		var touch = e.touches[0];
		var offset = getOffsetXY(touch);
		lastSingleFingerOffset = offset;
		var point = transformToScreen(offset.x, offset.y);
		mouseX = point.x;
		mouseY = point.y;
		clickX = mouseX;
		clickY = mouseY;
	
		smoothScroll.cancel();
		startTouchListenerIfNeeded();
	  }
	
	  function startTouchListenerIfNeeded() {
		if (touchInProgress) {
		  // no need to do anything, as we already listen to events;
		  return;
		}
	
		touchInProgress = true;
		document.addEventListener('touchmove', handleTouchMove);
		document.addEventListener('touchend', handleTouchEnd);
		document.addEventListener('touchcancel', handleTouchEnd);
	  }
	
	  function handleTouchMove(e) {
		if (e.touches.length === 1) {
		  e.stopPropagation();
		  var touch = e.touches[0];
	
		  var offset = getOffsetXY(touch);
		  var point = transformToScreen(offset.x, offset.y);
	
		  var dx = point.x - mouseX;
		  var dy = point.y - mouseY;
	
		  if (dx !== 0 && dy !== 0) {
			triggerPanStart();
		  }
		  mouseX = point.x;
		  mouseY = point.y;
		  internalMoveBy(dx, dy);
		} else if (e.touches.length === 2) {
		  // it's a zoom, let's find direction
		  multiTouch = true;
		  var t1 = e.touches[0];
		  var t2 = e.touches[1];
		  var currentPinchLength = getPinchZoomLength(t1, t2);
	
		  // since the zoom speed is always based on distance from 1, we need to apply
		  // pinch speed only on that distance from 1:
		  var scaleMultiplier =
			1 + (currentPinchLength / pinchZoomLength - 1) * pinchSpeed;
	
		  var firstTouchPoint = getOffsetXY(t1);
		  var secondTouchPoint = getOffsetXY(t2);
		  mouseX = (firstTouchPoint.x + secondTouchPoint.x) / 2;
		  mouseY = (firstTouchPoint.y + secondTouchPoint.y) / 2;
		  if (transformOrigin) {
			var offset = getTransformOriginOffset();
			mouseX = offset.x;
			mouseY = offset.y;
		  }
	
		  publicZoomTo(mouseX, mouseY, scaleMultiplier);
	
		  pinchZoomLength = currentPinchLength;
		  e.stopPropagation();
		  e.preventDefault();
		}
	  }
	
	  function clearPendingClickEventTimeout() {
		if (pendingClickEventTimeout) {
		  clearTimeout(pendingClickEventTimeout);
		  pendingClickEventTimeout = 0;
		}
	  }
	
	  function handlePotentialClickEvent(e) {
		// we could still be in the double tap mode, let's wait until double tap expires,
		// and then notify:
		if (!options.onClick) return;
		clearPendingClickEventTimeout();
		var dx = mouseX - clickX;
		var dy = mouseY - clickY;
		var l = Math.sqrt(dx * dx + dy * dy);
		if (l > 5) return; // probably they are panning, ignore it
	
		pendingClickEventTimeout = setTimeout(function() {
		  pendingClickEventTimeout = 0;
		  options.onClick(e);
		}, doubleTapSpeedInMS);
	  }
	
	  function handleTouchEnd(e) {
		clearPendingClickEventTimeout();
		if (e.touches.length > 0) {
		  var offset = getOffsetXY(e.touches[0]);
		  var point = transformToScreen(offset.x, offset.y);
		  mouseX = point.x;
		  mouseY = point.y;
		} else {
		  var now = new Date();
		  if (now - lastTouchEndTime < doubleTapSpeedInMS) {
			// They did a double tap here
			if (transformOrigin) {
			  var offset = getTransformOriginOffset();
			  smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
			} else {
			  // We want untransformed x/y here.
			  smoothZoom(lastSingleFingerOffset.x, lastSingleFingerOffset.y, zoomDoubleClickSpeed);
			}
		  } else if (now - lastTouchStartTime < clickEventTimeInMS) {
			handlePotentialClickEvent(e);
		  }
	
		  lastTouchEndTime = now;
	
		  triggerPanEnd();
		  releaseTouches();
		}
	  }
	
	  function getPinchZoomLength(finger1, finger2) {
		var dx = finger1.clientX - finger2.clientX;
		var dy = finger1.clientY - finger2.clientY;
		return Math.sqrt(dx * dx + dy * dy);
	  }
	
	  function onDoubleClick(e) {
		beforeDoubleClick(e);
		var offset = getOffsetXY(e);
		if (transformOrigin) {
		  // TODO: looks like this is duplicated in the file.
		  // Need to refactor
		  offset = getTransformOriginOffset();
		}
		smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
	  }
	
	  function onMouseDown(e) {
		clearPendingClickEventTimeout();
	
		// if client does not want to handle this event - just ignore the call
		if (beforeMouseDown(e)) return;
	
		lastMouseDownedEvent = e;
		lastMouseDownTime = new Date();
	
		if (touchInProgress) {
		  // modern browsers will fire mousedown for touch events too
		  // we do not want this: touch is handled separately.
		  e.stopPropagation();
		  return false;
		}
		// for IE, left click == 1
		// for Firefox, left click == 0
		var isLeftButton =
		  (e.button === 1 && window.event !== null) || e.button === 0;
		if (!isLeftButton) return;
	
		smoothScroll.cancel();
	
		var offset = getOffsetXY(e);
		var point = transformToScreen(offset.x, offset.y);
		clickX = mouseX = point.x;
		clickY = mouseY = point.y;
	
		// We need to listen on document itself, since mouse can go outside of the
		// window, and we will loose it
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		textSelection.capture(e.target || e.srcElement);
	
		return false;
	  }
	
	  function onMouseMove(e) {
		// no need to worry about mouse events when touch is happening
		if (touchInProgress) return;
	
		triggerPanStart();
	
		var offset = getOffsetXY(e);
		var point = transformToScreen(offset.x, offset.y);
		var dx = point.x - mouseX;
		var dy = point.y - mouseY;
	
		mouseX = point.x;
		mouseY = point.y;
	
		internalMoveBy(dx, dy);
	  }
	
	  function onMouseUp() {
		var now = new Date();
		if (now - lastMouseDownTime < clickEventTimeInMS) handlePotentialClickEvent(lastMouseDownedEvent);
		textSelection.release();
		triggerPanEnd();
		releaseDocumentMouse();
	  }
	
	  function releaseDocumentMouse() {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
		panstartFired = false;
	  }
	
	  function releaseTouches() {
		document.removeEventListener('touchmove', handleTouchMove);
		document.removeEventListener('touchend', handleTouchEnd);
		document.removeEventListener('touchcancel', handleTouchEnd);
		panstartFired = false;
		multiTouch = false;
		touchInProgress = false;
	  }
	
	  function onMouseWheel(e) {
		// if client does not want to handle this event - just ignore the call
		if (beforeWheel(e)) return;
	
		smoothScroll.cancel();
	
		var delta = e.deltaY;
		if (e.deltaMode > 0) delta *= 100;
	
		var scaleMultiplier = getScaleMultiplier(delta);
	
		if (scaleMultiplier !== 1) {
		  var offset = transformOrigin
			? getTransformOriginOffset()
			: getOffsetXY(e);
		  publicZoomTo(offset.x, offset.y, scaleMultiplier);
		  e.preventDefault();
		}
	  }
	
	  function getOffsetXY(e) {
		var offsetX, offsetY;
		// I tried using e.offsetX, but that gives wrong results for svg, when user clicks on a path.
		var ownerRect = owner.getBoundingClientRect();
		offsetX = e.clientX - ownerRect.left;
		offsetY = e.clientY - ownerRect.top;
	
		return { x: offsetX, y: offsetY };
	  }
	
	  function smoothZoom(clientX, clientY, scaleMultiplier) {
		var fromValue = transform.scale;
		var from = { scale: fromValue };
		var to = { scale: scaleMultiplier * fromValue };
	
		smoothScroll.cancel();
		cancelZoomAnimation();
	
		zoomToAnimation = animate(from, to, {
		  step: function (v) {
			zoomAbs(clientX, clientY, v.scale);
		  },
		  done: triggerZoomEnd
		});
	  }
	
	  function smoothZoomAbs(clientX, clientY, toScaleValue) {
		var fromValue = transform.scale;
		var from = { scale: fromValue };
		var to = { scale: toScaleValue };
	
		smoothScroll.cancel();
		cancelZoomAnimation();
	
		zoomToAnimation = animate(from, to, {
		  step: function (v) {
			zoomAbs(clientX, clientY, v.scale);
		  }
		});
	  }
	
	  function getTransformOriginOffset() {
		var ownerRect = owner.getBoundingClientRect();
		return {
		  x: ownerRect.width * transformOrigin.x,
		  y: ownerRect.height * transformOrigin.y
		};
	  }
	
	  function publicZoomTo(clientX, clientY, scaleMultiplier) {
		smoothScroll.cancel();
		cancelZoomAnimation();
		return zoomByRatio(clientX, clientY, scaleMultiplier);
	  }
	
	  function cancelZoomAnimation() {
		if (zoomToAnimation) {
		  zoomToAnimation.cancel();
		  zoomToAnimation = null;
		}
	  }
	
	  function getScaleMultiplier(delta) {
		var sign = Math.sign(delta);
		var deltaAdjustedSpeed = Math.min(0.25, Math.abs(speed * delta / 128));
		return 1 - sign * deltaAdjustedSpeed;
	  }
	
	  function triggerPanStart() {
		if (!panstartFired) {
		  triggerEvent('panstart');
		  panstartFired = true;
		  smoothScroll.start();
		}
	  }
	
	  function triggerPanEnd() {
		if (panstartFired) {
		  // we should never run smooth scrolling if it was multiTouch (pinch zoom animation):
		  if (!multiTouch) smoothScroll.stop();
		  triggerEvent('panend');
		}
	  }
	
	  function triggerZoomEnd() {
		triggerEvent('zoomend');
	  }
	
	  function triggerEvent(name) {
		api.fire(name, api);
	  }
	}
	
	function parseTransformOrigin(options) {
	  if (!options) return;
	  if (typeof options === 'object') {
		if (!isNumber(options.x) || !isNumber(options.y))
		  failTransformOrigin(options);
		return options;
	  }
	
	  failTransformOrigin();
	}
	
	function failTransformOrigin(options) {
	  console.error(options);
	  throw new Error(
		[
		  'Cannot parse transform origin.',
		  'Some good examples:',
		  '  "center center" can be achieved with {x: 0.5, y: 0.5}',
		  '  "top center" can be achieved with {x: 0.5, y: 0}',
		  '  "bottom right" can be achieved with {x: 1, y: 1}'
		].join('\n')
	  );
	}
	
	function noop() { }
	
	function validateBounds(bounds) {
	  var boundsType = typeof bounds;
	  if (boundsType === 'undefined' || boundsType === 'boolean') return; // this is okay
	  // otherwise need to be more thorough:
	  var validBounds =
		isNumber(bounds.left) &&
		isNumber(bounds.top) &&
		isNumber(bounds.bottom) &&
		isNumber(bounds.right);
	
	  if (!validBounds)
		throw new Error(
		  'Bounds object is not valid. It can be: ' +
		  'undefined, boolean (true|false) or an object {left, top, right, bottom}'
		);
	}
	
	function isNumber(x) {
	  return Number.isFinite(x);
	}
	
	// IE 11 does not support isNaN:
	function isNaN(value) {
	  if (Number.isNaN) {
		return Number.isNaN(value);
	  }
	
	  return value !== value;
	}
	
	function rigidScroll() {
	  return {
		start: noop,
		stop: noop,
		cancel: noop
	  };
	}
	
	function autoRun() {
	  if (typeof document === 'undefined') return;
	
	  var scripts = document.getElementsByTagName('script');
	  if (!scripts) return;
	  var panzoomScript;
	
	  for (var i = 0; i < scripts.length; ++i) {
		var x = scripts[i];
		if (x.src && x.src.match(/\bpanzoom(\.min)?\.js/)) {
		  panzoomScript = x;
		  break;
		}
	  }
	
	  if (!panzoomScript) return;
	
	  var query = panzoomScript.getAttribute('query');
	  if (!query) return;
	
	  var globalName = panzoomScript.getAttribute('name') || 'pz';
	  var started = Date.now();
	
	  tryAttach();
	
	  function tryAttach() {
		var el = document.querySelector(query);
		if (!el) {
		  var now = Date.now();
		  var elapsed = now - started;
		  if (elapsed < 2000) {
			// Let's wait a bit
			setTimeout(tryAttach, 100);
			return;
		  }
		  // If we don't attach within 2 seconds to the target element, consider it a failure
		  console.error('Cannot find the panzoom element', globalName);
		  return;
		}
		var options = collectOptions(panzoomScript);
		console.log(options);
		window[globalName] = createPanZoom(el, options);
	  }
	
	  function collectOptions(script) {
		var attrs = script.attributes;
		var options = {};
		for (var j = 0; j < attrs.length; ++j) {
		  var attr = attrs[j];
		  var nameValue = getPanzoomAttributeNameValue(attr);
		  if (nameValue) {
			options[nameValue.name] = nameValue.value;
		  }
		}
	
		return options;
	  }
	
	  function getPanzoomAttributeNameValue(attr) {
		if (!attr.name) return;
		var isPanZoomAttribute =
		  attr.name[0] === 'p' && attr.name[1] === 'z' && attr.name[2] === '-';
	
		if (!isPanZoomAttribute) return;
	
		var name = attr.name.substr(3);
		var value = JSON.parse(attr.value);
		return { name: name, value: value };
	  }
	}
	
	autoRun();
		
	},{"./lib/kinetic.js":2,"./lib/makeDomController.js":3,"./lib/makeSvgController.js":4,"./lib/makeTextSelectionInterceptor.js":5,"./lib/transform.js":6,"amator":7,"ngraph.events":9,"wheel":10}],2:[function(require,module,exports){
	/**
	 * Allows smooth kinetic scrolling of the surface
	 */
	module.exports = kinetic;
	
	function kinetic(getPoint, scroll, settings) {
	  if (typeof settings !== 'object') {
		// setting could come as boolean, we should ignore it, and use an object.
		settings = {};
	  }
	
	  var minVelocity = typeof settings.minVelocity === 'number' ? settings.minVelocity : 5;
	  var amplitude = typeof settings.amplitude === 'number' ? settings.amplitude : 0.25;
	  var cancelAnimationFrame = typeof settings.cancelAnimationFrame === 'function' ? settings.cancelAnimationFrame : getCancelAnimationFrame();
	  var requestAnimationFrame = typeof settings.requestAnimationFrame === 'function' ? settings.requestAnimationFrame : getRequestAnimationFrame();
	
	  var lastPoint;
	  var timestamp;
	  var timeConstant = 342;
	
	  var ticker;
	  var vx, targetX, ax;
	  var vy, targetY, ay;
	
	  var raf;
	
	  return {
		start: start,
		stop: stop,
		cancel: dispose
	  };
	
	  function dispose() {
		cancelAnimationFrame(ticker);
		cancelAnimationFrame(raf);
	  }
	
	  function start() {
		lastPoint = getPoint();
	
		ax = ay = vx = vy = 0;
		timestamp = new Date();
	
		cancelAnimationFrame(ticker);
		cancelAnimationFrame(raf);
	
		// we start polling the point position to accumulate velocity
		// Once we stop(), we will use accumulated velocity to keep scrolling
		// an object.
		ticker = requestAnimationFrame(track);
	  }
	
	  function track() {
		var now = Date.now();
		var elapsed = now - timestamp;
		timestamp = now;
	
		var currentPoint = getPoint();
	
		var dx = currentPoint.x - lastPoint.x;
		var dy = currentPoint.y - lastPoint.y;
	
		lastPoint = currentPoint;
	
		var dt = 1000 / (1 + elapsed);
	
		// moving average
		vx = 0.8 * dx * dt + 0.2 * vx;
		vy = 0.8 * dy * dt + 0.2 * vy;
	
		ticker = requestAnimationFrame(track);
	  }
	
	  function stop() {
		cancelAnimationFrame(ticker);
		cancelAnimationFrame(raf);
	
		var currentPoint = getPoint();
	
		targetX = currentPoint.x;
		targetY = currentPoint.y;
		timestamp = Date.now();
	
		if (vx < -minVelocity || vx > minVelocity) {
		  ax = amplitude * vx;
		  targetX += ax;
		}
	
		if (vy < -minVelocity || vy > minVelocity) {
		  ay = amplitude * vy;
		  targetY += ay;
		}
	
		raf = requestAnimationFrame(autoScroll);
	  }
	
	  function autoScroll() {
		var elapsed = Date.now() - timestamp;
	
		var moving = false;
		var dx = 0;
		var dy = 0;
	
		if (ax) {
		  dx = -ax * Math.exp(-elapsed / timeConstant);
	
		  if (dx > 0.5 || dx < -0.5) moving = true;
		  else dx = ax = 0;
		}
	
		if (ay) {
		  dy = -ay * Math.exp(-elapsed / timeConstant);
	
		  if (dy > 0.5 || dy < -0.5) moving = true;
		  else dy = ay = 0;
		}
	
		if (moving) {
		  scroll(targetX + dx, targetY + dy);
		  raf = requestAnimationFrame(autoScroll);
		}
	  }
	}
	
	function getCancelAnimationFrame() {
	  if (typeof cancelAnimationFrame === 'function') return cancelAnimationFrame;
	  return clearTimeout;
	}
	
	function getRequestAnimationFrame() {
	  if (typeof requestAnimationFrame === 'function') return requestAnimationFrame;
	
	  return function (handler) {
		return setTimeout(handler, 16);
	  };
	}
	},{}],3:[function(require,module,exports){
	module.exports = makeDomController;
	
	module.exports.canAttach = isDomElement;
	
	function makeDomController(domElement, options) {
	  var elementValid = isDomElement(domElement); 
	  if (!elementValid) {
		throw new Error('panzoom requires DOM element to be attached to the DOM tree');
	  }
	
	  var owner = domElement.parentElement;
	  domElement.scrollTop = 0;
	  
	  if (!options.disableKeyboardInteraction) {
		owner.setAttribute('tabindex', 0);
	  }
	
	  var api = {
		getBBox: getBBox,
		getOwner: getOwner,
		applyTransform: applyTransform,
	  };
	  
	  return api;
	
	  function getOwner() {
		return owner;
	  }
	
	  function getBBox() {
		// TODO: We should probably cache this?
		return  {
		  left: 0,
		  top: 0,
		  width: domElement.clientWidth,
		  height: domElement.clientHeight
		};
	  }
	
	  function applyTransform(transform) {
		// TODO: Should we cache this?
		domElement.style.transformOrigin = '0 0 0';
		domElement.style.transform = 'matrix(' +
		  transform.scale + ', 0, 0, ' +
		  transform.scale + ', ' +
		  transform.x + ', ' + transform.y + ')';
	  }
	}
	
	function isDomElement(element) {
	  return element && element.parentElement && element.style;
	}
	
	},{}],4:[function(require,module,exports){
	module.exports = makeSvgController;
	module.exports.canAttach = isSVGElement;
	
	function makeSvgController(svgElement, options) {
	  if (!isSVGElement(svgElement)) {
		throw new Error('svg element is required for svg.panzoom to work');
	  }
	
	  var owner = svgElement.ownerSVGElement;
	  if (!owner) {
		throw new Error(
		  'Do not apply panzoom to the root <svg> element. ' +
		  'Use its child instead (e.g. <g></g>). ' +
		  'As of March 2016 only FireFox supported transform on the root element');
	  }
	
	  if (!options.disableKeyboardInteraction) {
		owner.setAttribute('tabindex', 0);
	  }
	
	  var api = {
		getBBox: getBBox,
		getScreenCTM: getScreenCTM,
		getOwner: getOwner,
		applyTransform: applyTransform,
		initTransform: initTransform
	  };
	  
	  return api;
	
	  function getOwner() {
		return owner;
	  }
	
	  function getBBox() {
		var bbox =  svgElement.getBBox();
		return {
		  left: bbox.x,
		  top: bbox.y,
		  width: bbox.width,
		  height: bbox.height,
		};
	  }
	
	  function getScreenCTM() {
		var ctm = owner.getCTM();
		if (!ctm) {
		  // This is likely firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=873106
		  // The code below is not entirely correct, but still better than nothing
		  return owner.getScreenCTM();
		}
		return ctm;
	  }
	
	  function initTransform(transform) {
		var screenCTM = svgElement.getCTM();
	
		// The above line returns null on Firefox
		if (screenCTM === null) {
		  screenCTM = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
		}
	
		transform.x = screenCTM.e;
		transform.y = screenCTM.f;
		transform.scale = screenCTM.a;
		owner.removeAttributeNS(null, 'viewBox');
	  }
	
	  function applyTransform(transform) {
		svgElement.setAttribute('transform', 'matrix(' +
		  transform.scale + ' 0 0 ' +
		  transform.scale + ' ' +
		  transform.x + ' ' + transform.y + ')');
	  }
	}
	
	function isSVGElement(element) {
	  return element && element.ownerSVGElement && element.getCTM;
	}
	},{}],5:[function(require,module,exports){
	/**
	 * Disallows selecting text.
	 */
	module.exports = makeTextSelectionInterceptor;
	
	function makeTextSelectionInterceptor(useFake) {
	  if (useFake) {
		return {
		  capture: noop,
		  release: noop
		};
	  }
	
	  var dragObject;
	  var prevSelectStart;
	  var prevDragStart;
	  var wasCaptured = false;
	
	  return {
		capture: capture,
		release: release
	  };
	
	  function capture(domObject) {
		wasCaptured = true;
		prevSelectStart = window.document.onselectstart;
		prevDragStart = window.document.ondragstart;
	
		window.document.onselectstart = disabled;
	
		dragObject = domObject;
		dragObject.ondragstart = disabled;
	  }
	
	  function release() {
		if (!wasCaptured) return;
		
		wasCaptured = false;
		window.document.onselectstart = prevSelectStart;
		if (dragObject) dragObject.ondragstart = prevDragStart;
	  }
	}
	
	function disabled(e) {
	  e.stopPropagation();
	  return false;
	}
	
	function noop() {}
	
	},{}],6:[function(require,module,exports){
	module.exports = Transform;
	
	function Transform() {
	  this.x = 0;
	  this.y = 0;
	  this.scale = 1;
	}
	
	},{}],7:[function(require,module,exports){
	var BezierEasing = require('bezier-easing')
	
	// Predefined set of animations. Similar to CSS easing functions
	var animations = {
	  ease:  BezierEasing(0.25, 0.1, 0.25, 1),
	  easeIn: BezierEasing(0.42, 0, 1, 1),
	  easeOut: BezierEasing(0, 0, 0.58, 1),
	  easeInOut: BezierEasing(0.42, 0, 0.58, 1),
	  linear: BezierEasing(0, 0, 1, 1)
	}
	
	
	module.exports = animate;
	module.exports.makeAggregateRaf = makeAggregateRaf;
	module.exports.sharedScheduler = makeAggregateRaf();
	
	
	function animate(source, target, options) {
	  var start = Object.create(null)
	  var diff = Object.create(null)
	  options = options || {}
	  // We let clients specify their own easing function
	  var easing = (typeof options.easing === 'function') ? options.easing : animations[options.easing]
	
	  // if nothing is specified, default to ease (similar to CSS animations)
	  if (!easing) {
		if (options.easing) {
		  console.warn('Unknown easing function in amator: ' + options.easing);
		}
		easing = animations.ease
	  }
	
	  var step = typeof options.step === 'function' ? options.step : noop
	  var done = typeof options.done === 'function' ? options.done : noop
	
	  var scheduler = getScheduler(options.scheduler)
	
	  var keys = Object.keys(target)
	  keys.forEach(function(key) {
		start[key] = source[key]
		diff[key] = target[key] - source[key]
	  })
	
	  var durationInMs = typeof options.duration === 'number' ? options.duration : 400
	  var durationInFrames = Math.max(1, durationInMs * 0.06) // 0.06 because 60 frames pers 1,000 ms
	  var previousAnimationId
	  var frame = 0
	
	  previousAnimationId = scheduler.next(loop)
	
	  return {
		cancel: cancel
	  }
	
	  function cancel() {
		scheduler.cancel(previousAnimationId)
		previousAnimationId = 0
	  }
	
	  function loop() {
		var t = easing(frame/durationInFrames)
		frame += 1
		setValues(t)
		if (frame <= durationInFrames) {
		  previousAnimationId = scheduler.next(loop)
		  step(source)
		} else {
		  previousAnimationId = 0
		  setTimeout(function() { done(source) }, 0)
		}
	  }
	
	  function setValues(t) {
		keys.forEach(function(key) {
		  source[key] = diff[key] * t + start[key]
		})
	  }
	}
	
	function noop() { }
	
	function getScheduler(scheduler) {
	  if (!scheduler) {
		var canRaf = typeof window !== 'undefined' && window.requestAnimationFrame
		return canRaf ? rafScheduler() : timeoutScheduler()
	  }
	  if (typeof scheduler.next !== 'function') throw new Error('Scheduler is supposed to have next(cb) function')
	  if (typeof scheduler.cancel !== 'function') throw new Error('Scheduler is supposed to have cancel(handle) function')
	
	  return scheduler
	}
	
	function rafScheduler() {
	  return {
		next: window.requestAnimationFrame.bind(window),
		cancel: window.cancelAnimationFrame.bind(window)
	  }
	}
	
	function timeoutScheduler() {
	  return {
		next: function(cb) {
		  return setTimeout(cb, 1000/60)
		},
		cancel: function (id) {
		  return clearTimeout(id)
		}
	  }
	}
	
	function makeAggregateRaf() {
	  var frontBuffer = new Set();
	  var backBuffer = new Set();
	  var frameToken = 0;
	
	  return {
		next: next,
		cancel: next,
		clearAll: clearAll
	  }
	
	  function clearAll() {
		frontBuffer.clear();
		backBuffer.clear();
		cancelAnimationFrame(frameToken);
		frameToken = 0;
	  }
	
	  function next(callback) {
		backBuffer.add(callback);
		renderNextFrame();
	  }
	
	  function renderNextFrame() {
		if (!frameToken) frameToken = requestAnimationFrame(renderFrame);
	  }
	
	  function renderFrame() {
		frameToken = 0;
	
		var t = backBuffer;
		backBuffer = frontBuffer;
		frontBuffer = t;
	
		frontBuffer.forEach(function(callback) {
		  callback();
		});
		frontBuffer.clear();
	  }
	
	  function cancel(callback) {
		backBuffer.delete(callback);
	  }
	}
	
	},{"bezier-easing":8}],8:[function(require,module,exports){
	/**
	 * https://github.com/gre/bezier-easing
	 * BezierEasing - use bezier curve for transition easing function
	 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
	 */
	
	// These values are established by empiricism with tests (tradeoff: performance VS precision)
	var NEWTON_ITERATIONS = 4;
	var NEWTON_MIN_SLOPE = 0.001;
	var SUBDIVISION_PRECISION = 0.0000001;
	var SUBDIVISION_MAX_ITERATIONS = 10;
	
	var kSplineTableSize = 11;
	var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
	
	var float32ArraySupported = typeof Float32Array === 'function';
	
	function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
	function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
	function C (aA1)      { return 3.0 * aA1; }
	
	// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
	function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }
	
	// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
	function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }
	
	function binarySubdivide (aX, aA, aB, mX1, mX2) {
	  var currentX, currentT, i = 0;
	  do {
		currentT = aA + (aB - aA) / 2.0;
		currentX = calcBezier(currentT, mX1, mX2) - aX;
		if (currentX > 0.0) {
		  aB = currentT;
		} else {
		  aA = currentT;
		}
	  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	  return currentT;
	}
	
	function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
	 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
	   var currentSlope = getSlope(aGuessT, mX1, mX2);
	   if (currentSlope === 0.0) {
		 return aGuessT;
	   }
	   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	   aGuessT -= currentX / currentSlope;
	 }
	 return aGuessT;
	}
	
	function LinearEasing (x) {
	  return x;
	}
	
	module.exports = function bezier (mX1, mY1, mX2, mY2) {
	  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
		throw new Error('bezier x values must be in [0, 1] range');
	  }
	
	  if (mX1 === mY1 && mX2 === mY2) {
		return LinearEasing;
	  }
	
	  // Precompute samples table
	  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	  for (var i = 0; i < kSplineTableSize; ++i) {
		sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	  }
	
	  function getTForX (aX) {
		var intervalStart = 0.0;
		var currentSample = 1;
		var lastSample = kSplineTableSize - 1;
	
		for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
		  intervalStart += kSampleStepSize;
		}
		--currentSample;
	
		// Interpolate to provide an initial guess for t
		var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
		var guessForT = intervalStart + dist * kSampleStepSize;
	
		var initialSlope = getSlope(guessForT, mX1, mX2);
		if (initialSlope >= NEWTON_MIN_SLOPE) {
		  return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
		} else if (initialSlope === 0.0) {
		  return guessForT;
		} else {
		  return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
		}
	  }
	
	  return function BezierEasing (x) {
		// Because JavaScript number are imprecise, we should guarantee the extremes are right.
		if (x === 0) {
		  return 0;
		}
		if (x === 1) {
		  return 1;
		}
		return calcBezier(getTForX(x), mY1, mY2);
	  };
	};
	
	},{}],9:[function(require,module,exports){
	module.exports = function eventify(subject) {
	  validateSubject(subject);
	
	  var eventsStorage = createEventsStorage(subject);
	  subject.on = eventsStorage.on;
	  subject.off = eventsStorage.off;
	  subject.fire = eventsStorage.fire;
	  return subject;
	};
	
	function createEventsStorage(subject) {
	  // Store all event listeners to this hash. Key is event name, value is array
	  // of callback records.
	  //
	  // A callback record consists of callback function and its optional context:
	  // { 'eventName' => [{callback: function, ctx: object}] }
	  var registeredEvents = Object.create(null);
	
	  return {
		on: function (eventName, callback, ctx) {
		  if (typeof callback !== 'function') {
			throw new Error('callback is expected to be a function');
		  }
		  var handlers = registeredEvents[eventName];
		  if (!handlers) {
			handlers = registeredEvents[eventName] = [];
		  }
		  handlers.push({callback: callback, ctx: ctx});
	
		  return subject;
		},
	
		off: function (eventName, callback) {
		  var wantToRemoveAll = (typeof eventName === 'undefined');
		  if (wantToRemoveAll) {
			// Killing old events storage should be enough in this case:
			registeredEvents = Object.create(null);
			return subject;
		  }
	
		  if (registeredEvents[eventName]) {
			var deleteAllCallbacksForEvent = (typeof callback !== 'function');
			if (deleteAllCallbacksForEvent) {
			  delete registeredEvents[eventName];
			} else {
			  var callbacks = registeredEvents[eventName];
			  for (var i = 0; i < callbacks.length; ++i) {
				if (callbacks[i].callback === callback) {
				  callbacks.splice(i, 1);
				}
			  }
			}
		  }
	
		  return subject;
		},
	
		fire: function (eventName) {
		  var callbacks = registeredEvents[eventName];
		  if (!callbacks) {
			return subject;
		  }
	
		  var fireArguments;
		  if (arguments.length > 1) {
			fireArguments = Array.prototype.splice.call(arguments, 1);
		  }
		  for(var i = 0; i < callbacks.length; ++i) {
			var callbackInfo = callbacks[i];
			callbackInfo.callback.apply(callbackInfo.ctx, fireArguments);
		  }
	
		  return subject;
		}
	  };
	}
	
	function validateSubject(subject) {
	  if (!subject) {
		throw new Error('Eventify cannot use falsy object as events subject');
	  }
	  var reservedWords = ['on', 'fire', 'off'];
	  for (var i = 0; i < reservedWords.length; ++i) {
		if (subject.hasOwnProperty(reservedWords[i])) {
		  throw new Error("Subject cannot be eventified, since it already has property '" + reservedWords[i] + "'");
		}
	  }
	}
	
	},{}],10:[function(require,module,exports){
	/**
	 * This module used to unify mouse wheel behavior between different browsers in 2014
	 * Now it's just a wrapper around addEventListener('wheel');
	 *
	 * Usage:
	 *  var addWheelListener = require('wheel').addWheelListener;
	 *  var removeWheelListener = require('wheel').removeWheelListener;
	 *  addWheelListener(domElement, function (e) {
	 *    // mouse wheel event
	 *  });
	 *  removeWheelListener(domElement, function);
	 */
	
	module.exports = addWheelListener;
	
	// But also expose "advanced" api with unsubscribe:
	module.exports.addWheelListener = addWheelListener;
	module.exports.removeWheelListener = removeWheelListener;
	
	
	function addWheelListener(element, listener, useCapture) {
	  element.addEventListener('wheel', listener, useCapture);
	}
	
	function removeWheelListener( element, listener, useCapture ) {
	  element.removeEventListener('wheel', listener, useCapture);
	}
	},{}]},{},[1])(1)
	});
	



















	/*! iFrame Resizer (jquery.iframeSizer.min.js ) - v0.1.0 - 2013-08-21
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeSizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2013 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT and GPL
 */

(function(e){function o(e){i.log&&window.console&&console.log(t+" "+e)}var t="[iFrameSizer]",n=t.length,r=0,i,s={log:!1,contentWindowBodyMargin:8,doHeight:!0,doWidth:!1,interval:0,callback:function(){}};e(window).on("message",function(e){function r(e){function r(){function e(e){u.iframe.style[e]=u[e]+"px",o(u.iframe.id+" "+e+" set to "+u[e]+"px")}i.doHeight&&e("height"),i.doWidth&&e("width")}function s(){var t=e.substr(n).split(":");u={iframe:document.getElementById(t[0]),height:t[1],width:t[2]}}var u={};t===e.substr(0,n)&&(s(),r(),i.callback(u))}r(e.originalEvent.data)}),e.fn.iFrameSizer=function(n){return i=e.extend({},s,n),this.each(function(){function n(){return a.contentWindow?!0:!1}function s(){a.style.overflow="hidden",a.scrolling="no",e(a).on("load",function(){u(a)}),u(a)}function u(){function e(){""===a.id&&(a.id="iFrameSizer"+r++,o("Added missing iframe ID: "+a.id))}function n(){var e=a.id+":"+i.contentWindowBodyMargin+":"+i.doWidth+":"+i.log+":"+i.interval;o("Sending init msg to iframe ("+e+")"),a.contentWindow.postMessage(t+e,"*")}e(),n()}var a=this;n()&&s()})}})(window.jQuery);









