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








































/*!
 * jQuery Magnify Plugin v2.3.3 by T. H. Doan (https://thdoan.github.io/magnify/)
 * Based on http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3
 *
 * jQuery Magnify by T. H. Doan is licensed under the MIT License.
 * Read a copy of the license in the LICENSE file or at https://choosealicense.com/licenses/mit/
 */

(function($) {
	$.fn.magnify = function(oOptions) {
	  // Default options
	  oOptions = $.extend({
		'src': '',
		'speed': 100,
		'timeout': -1,
		'touchBottomOffset': 0,
		'finalWidth': null,
		'finalHeight': null,
		'magnifiedWidth': null,
		'magnifiedHeight': null,
		'limitBounds': false,
		'mobileCloseEvent': 'touchstart',
		'afterLoad': function(){}
	  }, oOptions);
  
	  var $that = this, // Preserve scope
		$html = $('html'),
  
		// Initiate
		init = function(el) {
		  var $image = $(el),
			$anchor = $image.closest('a'),
			oDataAttr = {};
  
		  // Get data attributes
		  for (var i in oOptions) {
			oDataAttr[i] = $image.attr('data-magnify-' + i.toLowerCase());
		  }
  
		  // Disable zooming if no valid large image source
		  var sZoomSrc = oDataAttr['src'] || oOptions['src'] || $anchor.attr('href') || '';
		  if (!sZoomSrc) return;
  
		  var $container,
			$lens,
			nImageWidth,
			nImageHeight,
			nMagnifiedWidth,
			nMagnifiedHeight,
			nLensWidth,
			nLensHeight,
			nBoundX = 0,
			nBoundY = 0,
			nPosX, nPosY,     // Absolute cursor position
			nX, nY,           // Relative cursor position
			oContainerOffset, // Relative to document
			oImageOffset,     // Relative to container
			// Get true offsets
			getOffset = function() {
			  var o = $container.offset();
			  // Store offsets from container border to image inside
			  // NOTE: .offset() does NOT take into consideration image border and padding.
			  oImageOffset = {
				'top': ($image.offset().top-o.top) + parseInt($image.css('border-top-width')) + parseInt($image.css('padding-top')),
				'left': ($image.offset().left-o.left) + parseInt($image.css('border-left-width')) + parseInt($image.css('padding-left'))
			  };
			  o.top += oImageOffset['top'];
			  o.left += oImageOffset['left'];
			  return o;
			},
			// Hide the lens
			hideLens = function() {
			  if ($lens.is(':visible')) $lens.fadeOut(oOptions['speed'], function() {
				$html.removeClass('magnifying').trigger('magnifyend'); // Reset overflow-x
			  });
			},
			moveLens = function(e) {
			  // Reinitialize if image initially hidden
			  if (!nImageHeight) {
				refresh();
				return;
			  }
			  if (e) {
				e.preventDefault();
				// Save last coordinates in case we need to call this function directly (required when
				// updating magnifiedWidth/magnifiedHeight while the lens is visible).
				nPosX = e.pageX || e.originalEvent.touches[0].pageX;
				nPosY = e.pageY || e.originalEvent.touches[0].pageY;
				$image.data('lastPos', {
				  'x': nPosX,
				  'y': nPosY
				});
			  } else {
				nPosX = $image.data('lastPos').x;
				nPosY = $image.data('lastPos').y;
			  }
			  // x/y coordinates of the mouse pointer or touch point. This is the position of
			  // .magnify relative to the document.
			  //
			  // We deduct the positions of .magnify from the mouse or touch positions relative to
			  // the document to get the mouse or touch positions relative to the container.
			  nX = nPosX - oContainerOffset['left'],
			  nY = (nPosY - oContainerOffset['top']) - oOptions['touchBottomOffset'];
			  // Toggle magnifying lens
			  if (!$lens.is(':animated')) {
				if (nX>nBoundX && nX<nImageWidth-nBoundX && nY>nBoundY && nY<nImageHeight-nBoundY) {
				  if ($lens.is(':hidden')) {
					$html.addClass('magnifying').trigger('magnifystart'); // Hide overflow-x while zooming
					$lens.fadeIn(oOptions['speed']);
				  }
				} else {
				  hideLens();
				}
			  }
			  if ($lens.is(':visible')) {
				// Move the magnifying lens with the mouse
				var sBgPos = '';
				if (nMagnifiedWidth && nMagnifiedHeight) {
				  // Change the background position of .magnify-lens according to the position of
				  // the mouse over the .magnify-image image. This allows us to get the ratio of
				  // the pixel under the mouse pointer with respect to the image and use that to
				  // position the large image inside the magnifying lens.
				  var nRatioX = -Math.round(nX/nImageWidth*nMagnifiedWidth-nLensWidth/2),
					nRatioY = -Math.round(nY/nImageHeight*nMagnifiedHeight-nLensHeight/2);
				  if (oOptions['limitBounds']) {
					// Enforce bounds to ensure only image is visible in lens
					var nBoundRight = -Math.round((nImageWidth-nBoundX)/nImageWidth*nMagnifiedWidth-nLensWidth/2),
					  nBoundBottom = -Math.round((nImageHeight-nBoundY)/nImageHeight*nMagnifiedHeight-nLensHeight/2);
					// Left and right edges
					if (nRatioX>0) nRatioX = 0;
					else if (nRatioX<nBoundRight) nRatioX = nBoundRight;
					// Top and bottom edges
					if (nRatioY>0) nRatioY = 0;
					else if (nRatioY<nBoundBottom) nRatioY = nBoundBottom;
				  }
				  sBgPos = nRatioX + 'px ' + nRatioY + 'px';
				}
				// Now the lens moves with the mouse. The logic is to deduct half of the lens's
				// width and height from the mouse coordinates to place it with its center at the
				// mouse coordinates. If you hover on the image now, you should see the magnifying
				// lens in action.
				$lens.css({
				  'top': Math.round(nY-nLensHeight/2) + oImageOffset['top'] + 'px',
				  'left': Math.round(nX-nLensWidth/2) + oImageOffset['left'] + 'px',
				  'background-position': sBgPos
				});
			  }
			};
  
		  // Data attributes have precedence over options object
		  if (!isNaN(+oDataAttr['speed'])) oOptions['speed'] = +oDataAttr['speed'];
		  if (!isNaN(+oDataAttr['timeout'])) oOptions['timeout'] = +oDataAttr['timeout'];
		  if (!isNaN(+oDataAttr['finalWidth'])) oOptions['finalWidth'] = +oDataAttr['finalWidth'];
		  if (!isNaN(+oDataAttr['finalHeight'])) oOptions['finalHeight'] = +oDataAttr['finalHeight'];
		  if (!isNaN(+oDataAttr['magnifiedWidth'])) oOptions['magnifiedWidth'] = +oDataAttr['magnifiedWidth'];
		  if (!isNaN(+oDataAttr['magnifiedHeight'])) oOptions['magnifiedHeight'] = +oDataAttr['magnifiedHeight'];
		  if (oDataAttr['limitBounds']==='true') oOptions['limitBounds'] = true;
		  if (typeof window[oDataAttr['afterLoad']]==='function') oOptions.afterLoad = window[oDataAttr['afterLoad']];
  
		  // Implement touch point bottom offset only on mobile devices
		  if (/\b(Android|BlackBerry|IEMobile|iPad|iPhone|Mobile|Opera Mini)\b/.test(navigator.userAgent)) {
			if (!isNaN(+oDataAttr['touchBottomOffset'])) oOptions['touchBottomOffset'] = +oDataAttr['touchBottomOffset'];
		  } else {
			oOptions['touchBottomOffset'] = 0;
		  }
  
		  // Save any inline styles for resetting
		  $image.data('originalStyle', $image.attr('style'));
  
		  // Activate magnification:
		  // 1. Try to get large image dimensions
		  // 2. Proceed only if able to get large image dimensions OK
  
		  // [1] Calculate the native (magnified) image dimensions. The zoomed version is only shown
		  // after the native dimensions are available. To get the actual dimensions we have to create
		  // this image object.
		  var elZoomImage = new Image();
		  $(elZoomImage).on({
			'load': function() {
			  // [2] Got image dimensions OK.
  
			  // Fix overlap bug at the edges during magnification
			  $image.css('display', 'block');
			  // Create container div if necessary
			  if (!$image.parent('.magnify').length) {
				$image.wrap('<div class="magnify"></div>');
			  }
			  $container = $image.parent('.magnify');
			  // Create the magnifying lens div if necessary
			  if ($image.prev('.magnify-lens').length) {
				$container.children('.magnify-lens').css('background-image', 'url(\'' + sZoomSrc + '\')');
			  } else {
				$image.before('<div class="magnify-lens loading" style="background:url(\'' + sZoomSrc + '\') 0 0 no-repeat"></div>');
			  }
			  $lens = $container.children('.magnify-lens');
			  // Remove the "Loading..." text
			  $lens.removeClass('loading');
			  // Cache dimensions and offsets for improved performance
			  // NOTE: This code is inside the load() function, which is important. The width and
			  // height of the object would return 0 if accessed before the image is fully loaded.
			  nImageWidth = oOptions['finalWidth'] || $image.width();
			  nImageHeight = oOptions['finalHeight'] || $image.height();
			  nMagnifiedWidth = oOptions['magnifiedWidth'] || elZoomImage.width;
			  nMagnifiedHeight = oOptions['magnifiedHeight'] || elZoomImage.height;
			  nLensWidth = $lens.width();
			  nLensHeight = $lens.height();
			  oContainerOffset = getOffset(); // Required by refresh()
			  // Set zoom boundaries
			  if (oOptions['limitBounds']) {
				nBoundX = (nLensWidth/2) / (nMagnifiedWidth/nImageWidth);
				nBoundY = (nLensHeight/2) / (nMagnifiedHeight/nImageHeight);
			  }
			  // Enforce non-native large image size?
			  if (nMagnifiedWidth!==elZoomImage.width || nMagnifiedHeight!==elZoomImage.height) {
				$lens.css('background-size', nMagnifiedWidth + 'px ' + nMagnifiedHeight + 'px');
			  }
			  // Store zoom dimensions for mobile plugin
			  $image.data('zoomSize', {
				'width': nMagnifiedWidth,
				'height': nMagnifiedHeight
			  });
			  // Store mobile close event for mobile plugin
			  $container.data('mobileCloseEvent', oDataAttr['mobileCloseEvent'] || oOptions['mobileCloseEvent']);
			  // Clean up
			  elZoomImage = null;
			  // Execute callback
			  oOptions.afterLoad();
			  // Simulate a lens move to update positioning if magnifiedWidth/magnifiedHeight is
			  // updated while the lens is visible
			  if ($lens.is(':visible')) moveLens();
			  // Handle mouse movements
			  $container.off().on({
				'mousemove touchmove': moveLens,
				'mouseenter': function() {
				  // Need to update offsets here to support accordions
				  oContainerOffset = getOffset();
				},
				'mouseleave': hideLens
			  });
  
			  // Prevent magnifying lens from getting "stuck"
			  if (oOptions['timeout']>=0) {
				$container.on('touchend', function() {
				  setTimeout(hideLens, oOptions['timeout']);
				});
			  }
			  // Ensure lens is closed when tapping outside of it
			  $('body').not($container).on('touchstart', hideLens);
  
			  // Support image map click-throughs while zooming
			  var sUsemap = $image.attr('usemap');
			  if (sUsemap) {
				var $map = $('map[name=' + sUsemap.slice(1) + ']');
				// Image map needs to be on the same DOM level as image source
				$image.after($map);
				$container.click(function(e) {
				  // Trigger click on image below lens at current cursor position
				  if (e.clientX || e.clientY) {
					$lens.hide();
					var elPoint = document.elementFromPoint(
						e.clientX || e.originalEvent.touches[0].clientX,
						e.clientY || e.originalEvent.touches[0].clientY
					  );
					if (elPoint.nodeName==='AREA') {
					  elPoint.click();
					} else {
					  // Workaround for buggy implementation of elementFromPoint()
					  // See https://bugzilla.mozilla.org/show_bug.cgi?id=1227469
					  $('area', $map).each(function() {
						var a = $(this).attr('coords').split(',');
						if (nX>=a[0] && nX<=a[2] && nY>=a[1] && nY<=a[3]) {
						  this.click();
						  return false;
						}
					  });
					}
				  }
				});
			  }
  
			  if ($anchor.length) {
				// Make parent anchor inline-block to have correct dimensions
				$anchor.css('display', 'inline-block');
				// Disable parent anchor if it's sourcing the large image
				if ($anchor.attr('href') && !(oDataAttr['src'] || oOptions['src'])) {
				  $anchor.click(function(e) {
					e.preventDefault();
				  });
				}
			  }
  
			},
			'error': function() {
			  // Clean up
			  elZoomImage = null;
			}
		  });
  
		  elZoomImage.src = sZoomSrc;
		}, // END init()
  
		// Simple debounce
		nTimer = 0,
		refresh = function() {
		  clearTimeout(nTimer);
		  nTimer = setTimeout(function() {
			$that.destroy();
			$that.magnify(oOptions);
		  }, 100);
		};
  
	  /**
	   * Public Methods
	   */
  
	  // Turn off zoom and reset to original state
	  this.destroy = function() {
		this.each(function() {
		  var $this = $(this),
			$lens = $this.prev('div.magnify-lens'),
			sStyle = $this.data('originalStyle');
		  if ($this.parent('div.magnify').length && $lens.length) {
			if (sStyle) $this.attr('style', sStyle);
			else $this.removeAttr('style');
			$this.unwrap();
			$lens.remove();
		  }
		});
		// Unregister event handler
		$(window).off('resize', refresh);
		return $that;
	  }
  
	  // Handle window resizing
	  $(window).resize(refresh);
  
	  return this.each(function() {
		// Initiate magnification powers
		init(this);
	  });
  
	};
  }(jQuery));
  