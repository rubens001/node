/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
;/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,W,u){'use strict';function S(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.20/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===qa&&a?!0:x(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(z(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function lc(b){return function(a,c){b(c,a)}}function Fd(){return++rb}function mc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}mc(b,a);return b}function aa(b){return parseInt(b,10)}function Ob(b,a){return w(Object.create(b),a)}function A(){}function ra(b){return b}function ea(b){return function(){return b}}
function D(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function L(b){return null!==b&&"object"===typeof b}function x(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function ha(b){return"[object Date]"===Ca.call(b)}function z(b){return"function"===typeof b}function Va(b){return"[object RegExp]"===Ca.call(b)}function Ua(b){return b&&b.window===b}function Wa(b){return b&&b.$evalAsync&&b.$watch}function Xa(b){return"boolean"===typeof b}function nc(b){return!(!b||
!(b.nodeName||b.prop&&b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function wa(b){return K(b.nodeName||b[0]&&b[0].nodeName)}function Ya(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Ua(b)||Wa(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(L(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),L(b[f])&&(c.push(b[f]),
d.push(e)),a.push(e);else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),L(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);mc(a,g)}}else if(a=b)H(b)?a=Da(b,[],c,d):ha(b)?a=new Date(b.getTime()):Va(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):L(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function sa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(L(b))for(c in a=
a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ia(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ia(b[d],a[d]))return!1;return!0}}else{if(ha(b))return ha(a)?ia(b.getTime(),a.getTime()):!1;if(Va(b))return Va(a)?b.toString()==a.toString():!1;if(Wa(b)||Wa(a)||Ua(b)||Ua(a)||H(a)||ha(a)||Va(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!z(b[d])){if(!ia(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!z(a[d]))return!1;return!0}return!1}function Za(b,a,c){return b.concat($a.call(a,c))}function oc(b,a){var c=2<arguments.length?$a.call(arguments,2):[];return!z(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Za(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Ua(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Wa(a)&&(c="$SCOPE");return c}function ab(b,a){if("undefined"===typeof b)return u;Y(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function pc(b){return x(b)?JSON.parse(b):b}function xa(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===bb?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function qc(b){try{return decodeURIComponent(b)}catch(a){}}
function rc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=qc(c[0]),y(d)&&(b=y(c[1])?qc(c[1]):!0,sc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Pb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function sb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=tb.length;b=B(b);for(d=0;d<e;++d)if(c=tb[d]+a,x(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};r(tb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(tb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function tc(b,a,c){L(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===W?"document":xa(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=cb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(c.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return d();R.name=R.name.replace(f,"");ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});return d()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function uc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;vc||((ta=R.jQuery)&&ta.fn.on?(B=ta,w(ta.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ta.cleanData,ta.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");b(a)}):B=T,ca.element=B,vc=!0)}function Rb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function La(b,a,c){c&&H(b)&&(b=b[b.length-1]);Rb(z(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function wc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&z(b)?oc(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ja(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=S("$injector"),d=S("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||S;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return t})}})}function Pd(b){w(b,{bootstrap:tc,copy:Da,extend:w,equals:ia,
element:B,forEach:r,injector:cb,noop:A,bind:oc,toJson:ab,fromJson:pc,identity:ra,isUndefined:D,isDefined:y,isString:x,isFunction:z,isObject:L,isNumber:Y,isElement:nc,isArray:H,version:Qd,isDate:ha,lowercase:K,uppercase:vb,callbacks:{counter:0},getTestability:Ld,$$minErr:S,$$csp:db,reloadWithDebugInfo:Kd});eb=Od(R);try{eb("ngLocale")}catch(a){eb("ngLocale",[]).provider("$locale",Rd)}eb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",xc).directive({a:Td,
input:yc,textarea:yc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:zc,ngPattern:zc,required:Ac,ngRequired:Ac,minlength:Bc,ngMinlength:Bc,maxlength:Cc,ngMaxlength:Cc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(wb).directive(Dc);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Ec,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function fb(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Fc(b){b=b.nodeType;return b===qa||!b||9===b}function Gc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ka[d]||ka._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Za(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function T(b){if(b instanceof T)return b;var a;x(b)&&(b=N(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new T(b)}if(a){a=W;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Gc(b,a))?c.childNodes:[]}Hc(this,b)}function Ub(b){return b.cloneNode(!0)}function xb(b,a){a||yb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)yb(c[d])}function Ic(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=zb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(y(c)){var d=e[a];Ya(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function yb(b,a){var c=b.ng339,d=c&&Ab[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Ic(b)),delete Ab[c],b.ng339=u))}function zb(b,a){var c=b.ng339,c=c&&Ab[c];a&&!c&&(b.ng339=c=++hf,c=Ab[c]={events:{},data:{},handle:u});return c}function Vb(b,a,c){if(Fc(b)){var d=y(c),e=!d&&a&&!L(a),
f=!a;b=(b=zb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",N((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+N(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=N(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",N(c))}}function Hc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Jc(b,a){return Eb(b,"$"+(a||"ngController")+"Controller")}function Eb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==u)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Kc(b){for(xb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Lc(b,a){a||xb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||R;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Mc(b,a){var c=Fb[a.toLowerCase()];return c&&Nc[wa(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Oc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(D(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=sa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(T,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Bb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Db(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function gb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function mf(b){return(b=b.toString().replace(Pc,"").match(Qc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function cb(b,a){function c(a){return function(b,c){if(L(b))r(b,lc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(z(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(D(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!n.get(a)){n.put(a,!0);try{x(a)?(c=eb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):La(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],l=cb.$$annotate(b,a,g),h,q,p;q=0;for(h=l.length;q<h;q++){p=l[q];if("string"!==typeof p)throw Fa("itkn",p);k.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}H(b)&&(b=b[h]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return L(a)||z(a)?a:d},get:d,annotate:cb.$$annotate,has:function(a){return p.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new gb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){Ma(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ca.isString(b)&&k.push(b);
throw Fa("unpr",k.join(" <- "));}),t={},s=t.$injector=h(t,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,u,a)});r(g(b),function(a){s.invoke(a||A)});return s}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():nc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,$a.call(arguments,1))}finally{if(m--,0===m)for(;C.length;)try{C.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r($,function(a){a()});I=b(da,a)})()}function g(){h();l()}function h(){a:{try{M=t.state;break a}catch(a){}M=void 0}M=D(M)?null:M;ia(M,P)&&(M=P);P=M}function l(){if(G!==n.url()||E!==M)G=n.url(),E=M,r(X,function(a){a(n.url(),M)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var n=this,p=a[0],q=b.location,t=b.history,s=b.setTimeout,F=b.clearTimeout,v={};n.isMock=!1;var m=0,C=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){m++};n.notifyWhenNoOutstandingRequests=function(a){r($,function(a){a()});0===m?a():C.push(a)};var $=[],I;n.addPollFn=function(a){D(I)&&f(100,s);$.push(a);return a};var M,E,G=q.href,O=a.find("base"),Q=null;h();E=M;n.url=function(a,c,e){D(e)&&(e=null);q!==b.location&&(q=b.location);t!==b.history&&(t=b.history);if(a){var f=
E===e;if(G===a&&(!d.history||f))return n;var g=G&&Ga(G)===Ga(a);G=a;E=e;if(!d.history||g&&f){if(!g||Q)Q=a;c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):q.href=a}else t[c?"replaceState":"pushState"](e,"",a),h(),E=M;return n}return Q||q.href.replace(/%27/g,"'")};n.state=function(){return M};var X=[],ba=!1,P=null;n.onUrlChange=function(a){if(!ba){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);ba=!0}X.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=
O.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var fa={},y="",la=n.baseHref();n.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+la+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+la).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=
d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),fa[a]===u&&(fa[a]=k(e.substring(g+1))));return fa}};n.defer=function(a,b){var c;m++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],F(a),e(A),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,
b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw S("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!D(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete l[a];
g--},removeAll:function(){l={};g=0;n={};p=q=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function xc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ma("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){Ma(a,"directive");x(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);z(h)?h={compile:ea(h)}:!h.compile&&h.link&&
(h.compile=ea(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";L(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):r(a,lc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,F,v,m,C,$,I,M){function E(a,b){try{a.addClass(b)}catch(c){}}function G(a,b,c,d,e){a instanceof B||(a=B(a));r(a,function(b,c){b.nodeType==bb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);G.$$addScopeClass(a);
var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Xb(g,B("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);G.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function O(a,b,c,d,e,f){function g(a,
c,d,e){var f,l,k,q,p,s,t;if(m)for(t=Array(c.length),q=0;q<h.length;q+=3)f=h[q],t[f]=c[f];else t=c;q=0;for(p=h.length;q<p;)l=t[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),G.$$addScopeInfo(B(l),k)):k=a,s=c.transcludeOnThisElement?Q(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?Q(a,b):null,c(f,k,l,d,s)):f&&f(a,l.childNodes,u,e)}for(var h=[],l,k,q,p,m,s=0;s<a.length;s++){l=new Yb;k=X(a[s],[],l,0===s?d:u,e);(f=k.length?fa(k,a[s],l,b,c,null,[],[],f):null)&&
f.scope&&G.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[s].childNodes)||!q.length?null:O(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(s,f,l),p=!0,m=m||f;f=null}return p?g:null}function Q(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function X(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case qa:la(b,ya(wa(a)),"E",d,g);for(var k,
q,p,m=a.attributes,s=0,t=m&&m.length;s<t;s++){var M=!1,I=!1;k=m[s];l=k.name;q=N(k.value);k=ya(l);if(p=U.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var F=k.replace(/(Start|End)$/,"");D(F)&&k===F+"Start"&&(M=l,I=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());h[k]=l;if(p||!c.hasOwnProperty(k))c[k]=q,Mc(a,k)&&(c[k]=!0);Pa(a,b,q,k,p);la(b,k,"A",d,g,M,I)}a=a.className;L(a)&&(a=a.animVal);if(x(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),
la(b,k,"C",d,g)&&(c[k]=N(l[3])),a=a.substr(l.index+l[0].length);break;case bb:za(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),la(b,k,"M",d,g)&&(c[k]=N(l[2]))}catch(v){}}b.sort(da);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ma("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function P(a,b,c){return function(d,e,f,g,h){e=ba(e[0],
b,c);return a(d,e,f,g,h)}}function fa(a,d,e,f,g,l,k,p,m){function s(a,b,c,d){if(a){c&&(a=P(a,c,d));a.require=J.require;a.directiveName=da;if(Q===J||J.$$isolateScope)a=Y(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=P(b,c,d));b.require=J.require;b.directiveName=da;if(Q===J||J.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function M(a,b,c,d){var e,f="data",g=!1,l=c,k;if(x(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",
l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ma("ctreq",b,a);return e||null}H(b)&&(e=[],r(b,function(b){e.push(M(a,b,c,d))}));return e}function I(a,c,f,g,l){function h(a,b,c){var d;Wa(a)||(c=b,b=a,a=u);A&&(d=C);c||(c=A?X.parent():X);return l(a,b,d,c,Wb)}var m,s,t,E,C,ib,X,P;d===f?(P=e,X=e.$$element):(X=B(f),P=new Yb(X,e));Q&&(E=c.$new(!0));l&&(ib=h,ib.$$boundTransclude=l);O&&($={},C={},r(O,function(a){var b={$scope:a===
Q||a.$$isolateScope?E:c,$element:X,$attrs:P,$transclude:ib};t=a.controller;"@"==t&&(t=P[a.name]);b=v(t,b,!0,a.controllerAs);C[a.name]=b;A||X.data("$"+a.name+"Controller",b.instance);$[a.name]=b}));if(Q){G.$$addScopeInfo(X,E,!0,!(na&&(na===Q||na===Q.$$originalDirective)));G.$$addScopeClass(X,!0);g=$&&$[Q.name];var ba=E;g&&g.identifier&&!0===Q.bindToController&&(ba=g.instance);r(E.$$isolateBindings=Q.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,l,h,k;switch(a.mode){case "@":P.$observe(e,
function(a){ba[d]=a});P.$$observers[e].$$scope=c;P[e]&&(ba[d]=b(P[e])(c));break;case "=":if(f&&!P[e])break;l=F(P[e]);k=l.literal?ia:function(a,b){return a===b||a!==a&&b!==b};h=l.assign||function(){g=ba[d]=l(c);throw ma("nonassign",P[e],Q.name);};g=ba[d]=l(c);f=function(a){k(a,ba[d])||(k(a,g)?h(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(P[e],f):c.$watch(F(P[e],f),null,l.literal);E.$on("$destroy",f);break;case "&":l=F(P[e]),ba[d]=function(a){return l(c,a)}}})}$&&
(r($,function(a){a()}),$=null);g=0;for(m=k.length;g<m;g++)s=k[g],Z(s,s.isolateScope?E:c,X,P,s.require&&M(s.directiveName,s.require,X,C),ib);var Wb=c;Q&&(Q.template||null===Q.templateUrl)&&(Wb=E);a&&a(Wb,f.childNodes,u,l);for(g=p.length-1;0<=g;g--)s=p[g],Z(s,s.isolateScope?E:c,X,P,s.require&&M(s.directiveName,s.require,X,C),ib)}m=m||{};for(var E=-Number.MAX_VALUE,C,O=m.controllerDirectives,$,Q=m.newIsolateScopeDirective,na=m.templateDirective,fa=m.nonTlbTranscludeDirective,la=!1,D=!1,A=m.hasElementTranscludeDirective,
w=e.$$element=B(d),J,da,V,hb=f,za,K=0,R=a.length;K<R;K++){J=a[K];var Pa=J.$$start,U=J.$$end;Pa&&(w=ba(d,Pa,U));V=u;if(E>J.priority)break;if(V=J.scope)J.templateUrl||(L(V)?(Oa("new/isolated scope",Q||C,J,w),Q=J):Oa("new/isolated scope",Q,J,w)),C=C||J;da=J.name;!J.templateUrl&&J.controller&&(V=J.controller,O=O||{},Oa("'"+da+"' controller",O[da],J,w),O[da]=J);if(V=J.transclude)la=!0,J.$$tlb||(Oa("transclusion",fa,J,w),fa=J),"element"==V?(A=!0,E=J.priority,V=w,w=e.$$element=B(W.createComment(" "+da+": "+
e[da]+" ")),d=w[0],T(g,$a.call(V,0),d),hb=G(V,f,E,l&&l.name,{nonTlbTranscludeDirective:fa})):(V=B(Ub(d)).contents(),w.empty(),hb=G(V,f));if(J.template)if(D=!0,Oa("template",na,J,w),na=J,V=z(J.template)?J.template(w,e):J.template,V=Sc(V),J.replace){l=J;V=Sb.test(V)?Tc(Xb(J.templateNamespace,N(V))):[];d=V[0];if(1!=V.length||d.nodeType!==qa)throw ma("tplrt",da,"");T(g,w,d);R={$attr:{}};V=X(d,[],R);var aa=a.splice(K+1,a.length-(K+1));Q&&y(V);a=a.concat(V).concat(aa);S(e,R);R=a.length}else w.html(V);if(J.templateUrl)D=
!0,Oa("template",na,J,w),na=J,J.replace&&(l=J),I=of(a.splice(K,a.length-K),w,e,g,la&&hb,k,p,{controllerDirectives:O,newIsolateScopeDirective:Q,templateDirective:na,nonTlbTranscludeDirective:fa}),R=a.length;else if(J.compile)try{za=J.compile(w,e,hb),z(za)?s(null,za,Pa,U):za&&s(za.pre,za.post,Pa,U)}catch(pf){c(pf,xa(w))}J.terminal&&(I.terminal=!0,E=Math.max(E,J.priority))}I.scope=C&&!0===C.scope;I.transcludeOnThisElement=la;I.elementTranscludeOnThisElement=A;I.templateOnThisElement=D;I.transclude=hb;
m.hasElementTranscludeDirective=A;return I}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function la(b,e,f,g,l,h,k){if(e===l)return null;l=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var m=0,s=e.length;m<s;m++)try{q=e[m],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(h&&(q=Ob(q,{$$start:h,$$end:k})),b.push(q),l=q)}catch(I){c(I)}}return l}function D(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;
return!1}function S(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(E(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,l){var h=[],k,q,p=b[0],m=a.shift(),t=Ob(m,{templateUrl:null,transclude:null,
replace:null,$$originalDirective:m}),I=z(m.templateUrl)?m.templateUrl(b,c):m.templateUrl,M=m.templateNamespace;b.empty();s(I).then(function(s){var F,v;s=Sc(s);if(m.replace){s=Sb.test(s)?Tc(Xb(M,N(s))):[];F=s[0];if(1!=s.length||F.nodeType!==qa)throw ma("tplrt",m.name,I);s={$attr:{}};T(d,b,F);var C=X(F,[],s);L(m.scope)&&y(C);a=C.concat(a);S(c,s)}else F=p,b.html(s);a.unshift(t);k=fa(a,F,c,e,b,m,f,g,l);r(d,function(a,c){a==F&&(d[c]=b[0])});for(q=O(b[0].childNodes,e);h.length;){s=h.shift();v=h.shift();
var G=h.shift(),P=h.shift(),C=b[0];if(!s.$$destroyed){if(v!==p){var $=v.className;l.hasElementTranscludeDirective&&m.replace||(C=Ub(F));T(G,B(v),C);E(B(C),$)}v=k.transcludeOnThisElement?Q(s,k.transclude,P):P;k(q,s,C,d,v)}}h=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(h?h.push(b,c,d,a):(k.transcludeOnThisElement&&(a=Q(b,k.transclude,e)),k(q,b,c,d,a)))}}function da(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ma("multidir",
b.name,c.name,a,xa(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&G.$$addBindingClass(a);return function(a,c){var e=c.parent();b||G.$$addBindingClass(e);G.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==
b)return $.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return $.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===wa(a))throw ma("selmulti",xa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ma("nodomevents");var p=g[e];p!==d&&(k=p&&b(p,!0,h,f),d=p);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||
a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,l;if(a)for(g=0,l=a.length;g<l;g++)if(a[g]==d){a[g++]=c;l=g+e-1;for(var h=a.length;g<h;g++,l++)l<h?a[g]=a[l]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());ta?(Qb=!0,ta.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),
a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(l){c(l,xa(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&I.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&I.removeClass(this.$$element,a)},$updateClass:function(a,
b){var c=Uc(a,b);c&&c.length&&I.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&I.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Mc(f,a),l=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):l&&(this[l]=b,f=l);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=uc(a,"-"));g=wa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",l=N(b),h=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,h=/\s/.test(l)?
h:/(,)/,l=l.split(h),h=Math.floor(l.length/2),k=0;k<h;k++)var q=2*k,g=g+M(N(l[q]),!0),g=g+(" "+N(l[q+1]));l=N(l[2*k]).split(/\s/);g+=M(N(l[0]),!0);2===l.length&&(g+=" "+N(l[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ja()),e=d[a]||(d[a]=[]);e.push(b);m.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});
return function(){Ya(e,b)}}};var V=b.startSymbol(),na=b.endSymbol(),Sc="{{"==V||"}}"==na?ra:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,na)},U=/^ngAttr[A-Z]/;G.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;G.$$addBindingClass=k?function(a){E(a,"ng-binding")}:A;G.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;G.$$addScopeClass=k?function(a,b){E(a,b?"ng-isolate-scope":
"ng-scope")}:A;return G}]}function ya(b){return fb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");L(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=
!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!L(a.$scope))throw S("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var n,p,q;l=!0===l;k&&x(k)&&(q=k);if(x(g)){k=g.match(c);if(!k)throw rf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:wc(h.$scope,p,!0)||(a?wc(e,p,!0):u);La(g,p,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,n=Object.create(l||null),q&&f(h,q,n,p||g.name),w(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:q});
n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(x(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=pc(c))}}return b}function Wc(b){var a=ja(),c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(N(b.substr(0,
e)));d=N(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=L(b)?b:u;return function(c){a||(a=Wc(b));return c?(c=a[K(c)],void 0===c&&(c=null),c):a}}function Yc(b,a,c,d){if(z(d))return d(b,a,c);r(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return L(a)&&"[object File]"!==Ca.call(a)&&"[object Blob]"!==Ca.call(a)&&"[object FormData]"!==Ca.call(a)?ab(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:sa($b),put:sa($b),patch:sa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};r(a,function(a,d){z(a)?(b=
a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw S("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[K(a.method)]);a:for(f in c){a=K(f);for(g in e)if(K(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=vb(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),u,a.transformRequest);D(e)&&r(d,function(a,b){"content-type"===K(b)&&
delete d[b]});D(a.withCredentials)&&!D(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},u],g=h.when(e);for(r(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){La(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){La(a,"fn");g.then(null,function(b){a(b.data,
b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}E&&(200<=b&&300>b?E.put(Q,[b,c,Wc(d),e]):E.remove(Q));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?I.resolve:I.reject)({data:a,status:b,headers:Xc(d),config:c,statusText:e})}function n(a){m(a.data,a.status,sa(a.headers()),a.statusText)}function t(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var I=h.defer(),M=I.promise,
E,G,O=c.headers,Q=p(c.url,c.params);k.pendingRequests.push(c);M.then(t,t);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=L(c.cache)?c.cache:L(b.cache)?b.cache:q);E&&(G=E.get(Q),y(G)?G&&z(G.then)?G.then(n,n):H(G)?m(G[1],G[0],sa(G[2]),G[3]):m(G,200,{},"OK"):E.put(Q,M));D(G)&&((G=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||b.xsrfHeaderName]=G),d(c.method,Q,f,l,O,c.timeout,c.withCredentials,c.responseType));return M}function p(a,b){if(!b)return a;
var c=[];Ed(b,function(a,b){null===a||D(a)||(H(a)||(a=[a]),r(a,function(a){L(a)&&(a=ha(a)?a.toISOString():ab(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),t=[];r(c,function(a){t.unshift(x(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){r(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){k[a]=function(b,c,d){return k(w(d||
{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new R.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,t="unknown";
a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,q,t){function s(){m&&m();C&&C.abort()}function F(a,d,e,f,g){I!==u&&c.cancel(I);m=C=null;a(d,e,f,g);b.$$completeOutstandingRequest(A)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==K(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=a;d[v].called=!0};
var m=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){F(k,a,d[v].data,"",b);d[v]=A})}else{var C=a();C.open(e,h,!0);r(n,function(a,b){y(a)&&C.setRequestHeader(b,a)});C.onload=function(){var a=C.statusText||"",b="response"in C?C.response:C.responseText,c=1223===C.status?204:C.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);F(k,c,b,C.getAllResponseHeaders(),a)};e=function(){F(k,-1,null,null,"")};C.onerror=e;C.onabort=e;q&&(C.withCredentials=!0);if(t)try{C.responseType=t}catch($){if("json"!==
t)throw $;}C.send(l||null)}if(0<p)var I=c(s,p);else p&&z(p.then)&&p.then(s)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,s){function F(c){return c.replace(k,b).replace(n,a)}function v(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(s&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;
case "number":a=""+a;break;default:a=ab(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}s=!!s;for(var m,C,r=0,I=[],M=[],E=f.length,G=[],O=[];r<E;)if(-1!=(m=f.indexOf(b,r))&&-1!=(C=f.indexOf(a,m+h)))r!==m&&G.push(F(f.substring(r,m))),r=f.substring(m+h,C),I.push(r),M.push(c(r,v)),r=C+l,O.push(G.length),G.push("");else{r!==E&&G.push(F(f.substring(r)));break}if(t&&1<G.length)throw ac("noconcat",f);if(!g||I.length){var Q=function(a){for(var b=0,c=I.length;b<c;b++){if(s&&D(a[b]))return;G[O[b]]=
a[b]}return G.join("")};return w(function(a){var b=0,c=I.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return Q(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:I,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=Q(c);z(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=
["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,p=a.clearInterval,q=0,t=y(k)&&!k,s=(t?d:c).defer(),F=s.promise;l=y(l)?l:0;F.then(null,null,e);F.$$intervalId=n(function(){s.notify(q++);0<l&&q>=l&&(s.resolve(q),p(F.$$intervalId),delete f[F.$$intervalId]);t||b.$apply()},h);f[F.$$intervalId]=s;return F}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):
!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);
return b.join("/")}function $c(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=rc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ua(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function Gb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b,a,c){this.$$html5=!0;c=c||"";$c(b,this);this.$$parse=function(b){var c=ua(a,b);if(!x(c))throw Hb("ipthprfx",b,a);ad(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=Pb(this.$$search),c=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=ua(b,d))!==u?(g=f,g=(f=ua(c,f))!==u?a+(ua("/",f)||f):b+g):(f=ua(a,d))!==u?g=a+f:a==d+"/"&&(g=a);g&&this.$$parse(g);return!!g}}function dc(b,a,c){$c(b,this);this.$$parse=function(d){var e=ua(b,d)||ua(a,d),f;D(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",D(e)&&(b=d,this.replace())):(f=ua(c,e),D(f)&&(f=e));ad(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=
Pb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function bd(b,a,c){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ua(a,d))?f=b+c+g:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),
e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Ib(b){return function(){return this[b]}}function cd(b,a){return function(c){if(D(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Xa(b)?(a.enabled=b,this):L(b)?(Xa(b.enabled)&&(a.enabled=b.enabled),Xa(b.requireBase)&&
(a.requireBase=b.requireBase),Xa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),q;if(a.enabled){if(!n&&a.requireBase)throw Hb("nobase");q=p.substring(0,p.indexOf("/",
p.indexOf("//")+2))+(n||"/");n=e.history?cc:bd}else q=Ga(p),n=dc;var t=q.substr(0,Ga(q).lastIndexOf("/")+1);k=new n(q,t,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var s=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=B(b.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var l=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");L(l)&&"[object SVGAnimatedString]"===l.toString()&&(l=
Aa(l.animVal).href);s.test(l)||!l||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(l,h)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Gb(k.absUrl())!=Gb(p)&&d.url(k.absUrl(),!0);var F=!0;d.onUrlChange(function(a,b){D(ua(t,a))?g.location.href=a:(c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,
!1,e)):(F=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Gb(d.url()),b=Gb(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(F||q)F=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=
a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function va(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ga("isecfld",a);return b}function dd(b,a){b+="";if(!x(b))throw ga("iseccst",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw ga("isecfn",a);if(b.window===b)throw ga("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ga("isecdom",a);if(b===Object)throw ga("isecobj",
a);}return b}function ec(b){return b.constant}function jb(b,a,c,d,e){oa(b,e);oa(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=va(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=oa(h,e)}f=va(c.shift(),e);oa(b[f],e);return b[f]=d}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){va(b,f);va(a,f);va(c,f);va(d,f);va(e,f);var h=function(a){return oa(a,f)},l=g||Qa(b)?h:ra,k=g||Qa(a)?h:ra,n=g||Qa(c)?h:ra,p=g||Qa(d)?h:ra,q=g||Qa(e)?h:ra;return function(f,g){var h=g&&g.hasOwnProperty(b)?
g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return u;h=k(h[a]);if(!c)return h;if(null==h)return u;h=n(h[c]);if(!d)return h;if(null==h)return u;h=p(h[d]);return e?null==h?u:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,oa,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<
h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;r(g,function(a,b){va(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return jb(a,d,b,c,b)};return e[b]=f}function fc(b){return z(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ja(),
a=ja();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,
[])),l;if(1===e.length){var h=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,h)||(l=d(a),h=b&&fc(b));return l},b,c)}for(var k=[],q=0,p=e.length;q<p;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var h=e[c](a);if(b||(b=!g(h,k[c])))k[c]=h&&fc(h)}b&&(l=d(a));return l},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=
!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==
h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var m,r,u;switch(typeof d){case "string":u=d=d.trim();var I=g?a:b;m=I[u];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(r=!0,d=d.substring(2)),g=g?t:q,m=new gc(g),m=(new kb(m,c,g)).parse(d),m.constant?m.$$watchDelegate=n:r?(m=e(m),m.$$watchDelegate=m.literal?k:l):m.inputs&&(m.$$watchDelegate=h),I[u]=m);return p(m,f);
case "function":return p(d,f);default:return p(A,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{z(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(l){d.reject(l),a(l)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=S("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(L(b)||z(b))d=b&&b.then;z(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(z(b)?
b(c):c)}catch(l){a(l)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return l(e,!1)}return d&&z(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=
n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}function Pe(){function b(a){function b(){this.$$watchers=this.$$nextSibling=
this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=S("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function p(a){if(v.$$phase)throw c("inprog",v.$$phase);v.$$phase=a}function q(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function s(){for(;u.length;)try{u.shift()()}catch(a){g(a)}e=null}function F(){null===e&&(e=l.defer(function(){v.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?
(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:t,get:e,exp:a,eq:!!c};d=null;z(b)||(g.fn=A);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ya(f,
g);d=null}},$watchGroup:function(a,b){function c(){l=!1;h?(h=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,l=!1,h=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var h=g.$watch(a,function(a,f){e[b]=a;d[b]=f;l||(l=!0,g.$evalAsync(c))});f.push(h)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=
a;var b,d,g,l;if(!D(e)){if(L(e))if(Ta(e))for(f!==p&&(f=p,t=f.length=0,k++),a=e.length,t!==a&&(k++,f.length=t=a),b=0;b<a;b++)l=f[b],g=e[b],d=l!==l&&g!==g,d||l===g||(k++,f[b]=g);else{f!==n&&(f=n={},t=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],l=f[b],b in f?(d=l!==l&&g!==g,d||l===g||(k++,f[b]=g)):(t++,f[b]=g,k++));if(t>a)for(b in k++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,q=h(a,c),p=[],n={},m=!0,t=0;return this.$watch(q,
function(){m?(m=!1,b(e,e,d)):b(e,g,d);if(l)if(L(e))if(Ta(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)sc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,q,n,r=a,F,P=[],u,y;p("$digest");l.$$checkUrlChange();this===v&&null!==e&&(l.defer.cancel(e),s());d=null;do{n=!1;for(F=this;m.length;){try{y=m.shift(),y.scope.$eval(y.expression,y.locals)}catch(w){g(w)}d=null}a:do{if(k=F.$$watchers)for(q=k.length;q--;)try{if(b=k[q])if((f=b.get(F))!==(h=b.last)&&
!(b.eq?ia(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Da(f,null):f,b.fn(f,h===t?f:h,F),5>r&&(u=4-r,P[u]||(P[u]=[]),P[u].push({msg:z(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){n=!1;break a}}catch(D){g(D)}if(!(k=F.$$childHead||F!==this&&F.$$nextSibling))for(;F!==this&&!(k=F.$$nextSibling);)F=F.$parent}while(F=k);if((n||m.length)&&!r--)throw v.$$phase=null,c("infdig",a,P);}while(n||m.length);for(v.$$phase=null;C.length;)try{C.shift()()}catch(B){g(B)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==v){for(var b in this.$$listenerCount)q(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=
this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){v.$$phase||m.length||l.defer(function(){m.length&&v.$digest()});m.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){C.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){g(b)}finally{v.$$phase=
null;try{v.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);F()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,q(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,l={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){l.defaultPrevented=
!0},defaultPrevented:!1},h=Za([l],arguments,1),k,q;do{d=e.$$listeners[a]||c;l.currentScope=e;k=0;for(q=d.length;k<q;k++)if(d[k])try{d[k].apply(null,h)}catch(p){g(p)}else d.splice(k,1),k--,q--;if(f)return l.currentScope=null,l;e=e.$parent}while(e);l.currentScope=null;return l},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Za([e],arguments,1),l,h;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];l=0;for(h=d.length;l<h;l++)if(d[l])try{d[l].apply(null,f)}catch(k){g(k)}else d.splice(l,1),l--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new n,m=v.$$asyncQueue=[],C=v.$$postDigestQueue=[],u=v.$$applyAsyncQueue=[];return v}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=
function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(x(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Va(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function hd(b){var a=[];y(b)&&r(b,function(b){a.push(Df(b))});
return a}function Te(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),p,q,t=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ba("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>Ra)throw Ba("iequirks");var d=sa(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(pa,function(a,b){var c=K(b);d[fb("parse_as_"+c)]=function(b){return e(a,b)};d[fb("get_trusted_"+c)]=function(b){return f(a,b)};d[fb("trust_as_"+
c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in
l);!d||k&&n||(k=x(f.body.style.webkitTransition),n=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(D(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:db(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function We(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;x(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=
a.defaults&&a.defaults.transformResponse;H(h)?h=h.filter(function(a){return a!==Zb}):h===Zb&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!g)throw ma("tpload",f);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=
ca.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var n=y(k)&&!k,p=(n?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}n||b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Ra&&(Z.setAttribute("href",b),b=Z.href);
Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=x(b)?Aa(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(R)}function Ec(b){function a(c,d){if(L(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!H(b))return b;var d;switch(null!==a?typeof a:"null"){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,
a,c){var d=L(b)&&"$"in b;!0===a?a=ia:z(a)||(a=function(a,b){if(D(a))return!1;if(null===a||null===b)return a===b;if(L(a)||L(b))return!1;a=K(""+a);b=K(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!L(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==
h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!z(e)&&!D(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){D(d)&&(d=a.CURRENCY_SYM);D(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==
b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||L(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,
t=a.gSize;if(k.length>=q+t)for(p=k.length-q,n=0;n<p;n++)0===(p-n)%t&&0!==n&&(h+=c),h+=k.charAt(n);for(n=p;n<k.length;n++)0===(k.length-n)%q&&0!==n&&(h+=c),h+=k.charAt(n);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Jb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function U(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=
c;0===e&&-12==c&&(e=12);return Jb(e,a,d)}}function Kb(b,a){return function(c,d){var e=c["get"+b](),f=vb(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Jb(a,b)}}function hc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function kd(b){function a(a){var b;if(b=a.match(c)){a=
new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Kf.test(c)?
aa(c):a(c));Y(c)&&(c=new Date(c));if(!ha(c))return c;for(;e;)(k=Lf.exec(e))?(h=Za(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){D(a)&&(a=2);return ab(b,a)}}function Gf(){return function(b,a){Y(b)&&(b=b.toString());return H(b)||x(b)?(a=Infinity===Math.abs(Number(a))?Number(a):
aa(a))?0<a?b.slice(0,a):b.slice(a):x(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=
a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ra;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return $a.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},
d))}}function Ia(b){z(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Lb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,
"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});Ya(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];
d&&(Ya(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Mb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?
a:a.toString()})}function lb(b,a,c,d,e,f){var g=K(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=N(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};
a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Nb(b,a){return function(c,d){var e,f;if(ha(c))return c;if(x(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,
dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?ha(a)?a:c(a):u}td(e,f,g,h);lb(e,f,g,h,l,k);var t=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;
h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});h.$formatters.push(function(a){if(a&&!ha(a))throw nb("datefmt",a);if(p(a)){if((s=a)&&"UTC"===t){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return n("date")(a,d,t)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||D(r)||c(a)>=r};g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var v;
h.$validators.max=function(a){return!p(a)||D(v)||c(a)<=v};g.$observe("max",function(a){v=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=L(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw nb("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],
n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(x(a))return a.split(" ");if(L(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var t=l(k,1);h.$addClass(t)}else if(!ia(b,
n)){var s=e(n),t=d(k,s),k=d(s,k),t=l(t,1),k=l(k,-1);t&&t.length&&c.addClass(g,t);k&&k.length&&c.removeClass(g,k)}}n=sa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+uc(b,"-"):"";
a(ob+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[ob]=e.hasClass(ob));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=u));Xa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=u,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=
!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,K=function(b){return x(b)?b.toLowerCase():b},sc=Object.prototype.hasOwnProperty,vb=function(b){return x(b)?b.toUpperCase():b},Ra,B,ta,$a=[].slice,qf=[].splice,Pf=[].push,Ca=Object.prototype.toString,Ja=S("ng"),ca=R.angular||(R.angular={}),eb,rb=0;Ra=W.documentMode;A.$inject=[];ra.$inject=[];var H=
Array.isArray,N=function(b){return x(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},db=function(){if(y(db.isActive_))return db.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return db.isActive_=b},tb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,vc=!1,Qb,qa=1,bb=3,Qd={full:"1.3.20",major:1,minor:3,dot:20,codeName:"shallow-translucence"};T.expando="ng339";var Ab=
T.cache={},hf=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=S("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Ka=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(R).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,
splice:[].splice},Fb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Fb[K(b)]=b});var Nc={};r("input select option textarea button form details".split(" "),function(b){Nc[b]=!0});var Oc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Vb,removeData:yb},function(b,a){T[a]=b});r({data:Vb,inheritedData:Eb,scope:function(b){return B.data(b,"$scope")||Eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,
"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Jc,injector:function(b){return Eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=fb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==bb&&2!==d&&8!==d)if(d=K(a),Fb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||A).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=
b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(D(b)){var d=a.nodeType;return d===qa||d===bb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(D(a)){if(b.multiple&&"select"===wa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;xb(b,!0);b.innerHTML=a},empty:Kc},function(b,a){T.prototype[a]=
function(a,d){var e,f,g=this.length;if(b!==Kc&&(2==b.length&&b!==Bb&&b!==Jc?a:d)===u){if(L(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:yb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Fc(c)){var g=zb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],
l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Ic,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;xb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,
function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Lc,detach:function(a){Lc(a,!0)},after:function(a,
c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;D(f)&&(f=!Bb(a,c));(f?Db:Cb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=
zb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:g,target:a},c.type&&(e=w(e,c)),c=sa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){T.prototype[c]=function(c,
e,f){for(var g,h=0,l=this.length;h<l;h++)D(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Hc(g,a(this[h],c,e,f));return y(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});gb.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Qc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rf=/,/,Sf=/^\s*(_?)(\S+?)\1\s*$/,Pc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=S("$injector");
cb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw x(d)&&d||(d=a.name||mf(a)),Fa("strictdi",d);c=a.toString().replace(Pc,"");c=c.match(Qc);r(c[1].split(Rf),function(a){a.replace(Sf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,La(a[c],"fn"),e=a.slice(0,c)):La(a,"fn",!0);return e};var Tf=S("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Tf("notcsel",
c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ja();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,
c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ca.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();
return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=x(c)?c:H(c)?c.join(" "):"";r(a,function(a){Db(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=x(c)?c:H(c)?c.join(" "):"";r(a,function(a){Cb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");
m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);
k(a,e);return l()},enabled:A,cancel:A}}]}],ma=S("$compile");xc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,rf=S("$controller"),Vc="application/json",$b={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,ac=S("$interpolate"),Uf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Hb=S("$location"),Vf={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(D(a))return this.$$url;var c=Uf.exec(a);(c[1]||
""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:cd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a)||Y(a))a=a.toString(),this.$$search=rc(a);else if(L(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Hb("isrcharg");
break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:cd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([bd,dc,cc],function(a){a.prototype=Object.create(Vf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Hb("nostate");this.$$state=D(c)?null:c;return this}});var ga=S("$parse"),Wf=Function.prototype.call,Xf=Function.prototype.apply,
Yf=Function.prototype.bind,pb=ja();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;pb[c]=a});pb["this"]=function(a){return a};pb["this"].sharedGetter=!0;var qb=w(ja(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,
c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,
c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,
text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=qb[c],f=qb[d];qb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===
typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ga("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&
!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===
a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var kb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};kb.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});kb.prototype={constructor:kb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;
return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in pb?a=pb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):
"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ga("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ga("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,
c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw ga("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=qb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=qb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=
this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},
filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(u,e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=
this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},
additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(kb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();
return w(function(d,e,f){d=f||a(d,e);return null==d?u:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=dd(d(e,f),c);va(h,c);return g?oa(g[h],c):u},{assign:function(e,f,g){var h=va(dd(d(e,g),c),c),l=oa(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?u:g,k=a(g,h,l)||A;if(f)for(var n=d.length;n--;)f[n]=oa(d[n](g,h),e);oa(l,e);if(k){if(k.constructor===k)throw ga("isecfn",e);if(k===Wf||k===Xf||k===Yf)throw ga("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return oa(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ja(),Af=ja(),Cf=Object.prototype.valueOf,Ba=S("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ma=S("$compile"),Z=W.createElement("a"),id=Aa(R.location.href);Ec.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:U("FullYear",4),yy:U("FullYear",2,0,!0),y:U("FullYear",1),MMMM:Kb("Month"),MMM:Kb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),dd:U("Date",2),d:U("Date",
1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:Kb("Day"),EEE:Kb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:qd(2),w:qd(1),G:hc,GG:hc,GGG:hc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Lf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=ea(K),If=ea(vb);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ca.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),wb={};r(Fb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);wb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});r(Oc,function(a,c){wb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=ya("ng-"+a);wb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ca.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,c){a.$name=c},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(d,e){d.addClass(Sa).addClass(ob);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var p=k.$$parentForm;f&&(jb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(jb(a,null,k.$name,u,k.$name),p.$$renameControl(k,c),jb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){p.$removeControl(k);
f&&jb(a,null,e[f],u,k.$name);w(k,Lb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$f=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ag=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,bg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,
Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e)},date:mb("date",zd,Nb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ad,Nb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Cd,Nb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",kc,function(a,c){if(ha(a))return a;if(x(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:mb("month",Bd,Nb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);lb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:bg.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw nb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
D(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:u;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||D(l)||a<=l};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));l=Y(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},email:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ag.test(d)}},radio:function(a,c,d,e){D(d.name)&&c.attr("name",++rb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),n=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ia(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:A,button:A,submit:A,reset:A,file:A},yc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[K(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],cg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,
c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=jc("",!0),de=jc("Odd",0),ce=jc("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Dc={},dg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Dc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
ub(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,p,q,r){var s=0,u,v,m,C=function(){v&&(v.remove(),v=null);u&&(u.$destroy(),u=null);m&&(d.leave(m).then(function(){v=null}),v=m,m=null)};e.$watch(g,function(g){var p=function(){!y(l)||l&&!e.$eval(l)||
c()},M=++s;g?(a(g,!0).then(function(a){if(M===s){var c=e.$new();q.template=a;a=r(c,function(a){C();d.enter(a,null,f).then(p)});u=c;m=a;u.$emit("$includeContentLoaded",g);e.$eval(h)}},function(){M===s&&(C(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(C(),q.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Gc(f.template,W).childNodes)(c,function(a){d.append(a)},
{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?N(f):f;e.$parsers.push(function(a){if(!D(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?N(a):a)});return c}});e.$formatters.push(function(a){return H(a)?a.join(f):u});e.$isEmpty=function(a){return!a||
!a.length}}}},ob="ng-valid",vd="ng-invalid",Sa="ng-pristine",Mb="ng-dirty",xd="ng-pending",nb=S("ngModel"),eg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,t=p,s=q,F=null,v,m=this;this.$$setOptions=function(a){if((m.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);z(d)&&(d=c(a));return d};s=function(a,c){z(p(a))?g(a,{$$$p:m.$modelValue}):q(a,m.$modelValue)}}else if(!p.assign)throw nb("nonassign",d.ngModel,xa(e));};this.$render=A;this.$isEmpty=function(a){return D(a)||
""===a||null===a||a!==a};var C=e.inheritedData("$formController")||Lb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:C,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Mb);g.addClass(e,Sa)};this.$setDirty=function(){m.$dirty=!0;m.$pristine=!1;g.removeClass(e,Sa);g.addClass(e,Mb);C.$setDirty()};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=
function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(F);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(!Y(m.$modelValue)||!isNaN(m.$modelValue)){var a=m.$$rawModelValue,c=m.$valid,d=m.$modelValue,e=m.$options&&m.$options.allowInvalid;m.$$runValidators(a,m.$$lastCommittedViewValue,function(f){e||c===f||(m.$modelValue=f?a:u,m.$modelValue!==d&&m.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d){function e(){var d=!0;r(m.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(r(m.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;r(m.$asyncValidators,function(f,h){var l=f(a,c);if(!l||!z(l.then))throw nb("$asyncValidators",l);g(h,u);d.push(l.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},A):h(!0)}function g(a,c){l===w&&m.$setValidity(a,c)}function h(a){l===w&&d(a)}w++;var l=w;(function(){var a=
m.$$parserName||"parse";if(v===u)g(a,null);else return v||(r(m.$validators,function(a,c){g(c,null)}),r(m.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(F);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=m.$$lastCommittedViewValue;if(v=D(c)?u:!0)for(var d=
0;d<m.$parsers.length;d++)if(c=m.$parsers[d](c),D(c)){v=!1;break}Y(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=t(a));var e=m.$modelValue,f=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=c;f&&(m.$modelValue=c,m.$modelValue!==e&&m.$$writeModelToScope());m.$$runValidators(c,m.$$lastCommittedViewValue,function(a){f||(m.$modelValue=a?c:u,m.$modelValue!==e&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(F);d?F=h(function(){m.$commitViewValue()},d):l.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==m.$modelValue&&(m.$modelValue===m.$modelValue||c===c)){m.$modelValue=
m.$$rawModelValue=c;v=u;for(var d=m.$formatters,e=d.length,f=c;e--;)f=d[e](f);m.$viewValue!==f&&(m.$viewValue=m.$$lastCommittedViewValue=f,m.$render(),m.$$runValidators(c,f,A))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:eg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(ob);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Lb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",
function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],fg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);
this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=N(this.$options.updateOn.replace(fg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,n=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(n)||{},t={},n=c.startSymbol(),s=
c.endSymbol(),u=n+k+"-"+p+s,v=ca.noop,m;r(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+K(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){t[e]=c(a.replace(d,u))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===m||d&&isNaN(m)||(v(),v=f.$watch(t[c],l),m=c)})}}}],ne=["$parse","$animate",function(a,c){var d=S("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=
0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],q=k[3],t=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var s=k[3]||k[1],F=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||
/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var v,m,C,y,w={$id:Na};t?v=a(t):(C=function(a,c){return Na(c)},y=function(a){return a});return function(a,f,g,k,n){v&&(m=function(c,d,e){F&&(w[F]=c);w[s]=d;w.$index=e;return v(a,w)});var t=ja();a.$watchCollection(p,function(g){var k,p,v=f[0],G,w=ja(),D,I,A,z,H,O,x;q&&(a[q]=g);if(Ta(g))H=g,p=m||C;else{p=m||y;H=[];for(x in g)g.hasOwnProperty(x)&&"$"!=x.charAt(0)&&H.push(x);H.sort()}D=
H.length;x=Array(D);for(k=0;k<D;k++)if(I=g===H?k:H[k],A=g[I],z=p(I,A,k),t[z])O=t[z],delete t[z],w[z]=O,x[k]=O;else{if(w[z])throw r(x,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,z,A);x[k]={id:z,scope:u,clone:u};w[z]=!0}for(G in t){O=t[G];z=ub(O.clone);c.leave(z);if(z[0].parentNode)for(k=0,p=z.length;k<p;k++)z[k].$$NG_REMOVED=!0;O.scope.$destroy()}for(k=0;k<D;k++)if(I=g===H?k:H[k],A=g[I],O=x[k],O.scope){G=v;do G=G.nextSibling;while(G&&G.$$NG_REMOVED);O.clone[0]!=G&&c.move(ub(O.clone),null,B(v));
v=O.clone[O.clone.length-1];e(O.scope,k,s,A,F,I,D)}else n(function(a,d){O.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(v));v=f;O.clone=a;w[O.id]=O;e(O.scope,k,s,A,F,I,D)});t=w})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?
"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=
0;for(e=k.length;d<e;++d){var s=ub(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,
element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw S("ngTransclude")("orphan",xa(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],gg=S("ngOptions"),te=ea({restrict:"A",
terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},n=e,p;l.databound=d.ngModel;l.init=function(a,c,d){n=a;p=d};l.addOption=function(c,d){Ma(c,'"option value"');
k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Na(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=A})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=
d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&v.prop("selected",!0)):null==a&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new gb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ia(e,d.$viewValue)||(e=sa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),
function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[A]=d;I&&(T[I]=c);return a(e,T)}function l(a){var c;if(t)if(K&&H(a)){c=new gb([]);for(var d=0;d<a.length;d++)c.put(h(K,null,a[d]),!0)}else c=new gb(a);else K&&(a=h(K,null,a));return function(d,e){var f;f=K?K:x?x:E;return t?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function k(){m||(e.$$postDigest(p),m=!0)}function n(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){m=!1;var a={"":[]},c=[""],d,k,s,u,v;s=g.$viewValue;
u=L(e)||[];var A=I?Object.keys(u).sort():u,x,B,H,E,P={};v=l(s);var N=!1,U,W;R={};for(E=0;H=A.length,E<H;E++){x=E;if(I&&(x=A[E],"$"===x.charAt(0)))continue;B=u[x];d=h(M,x,B)||"";(k=a[d])||(k=a[d]=[],c.push(d));d=v(x,B);N=N||d;B=h(z,x,B);B=y(B)?B:"";W=K?K(e,T):I?A[E]:E;K&&(R[W]=x);k.push({id:W,label:B,selected:d})}t||(w||null===s?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(A=c.length;x<A;x++){d=c[x];k=a[d];S.length<=x?(s={element:D.clone().attr("label",
d),label:k.label},u=[s],S.push(u),f.append(s.element)):(u=S[x],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));N=null;E=0;for(H=k.length;E<H;E++)d=k[E],(v=u[E+1])?(N=v.element,v.label!==d.label&&(n(P,v.label,!1),n(P,d.label,!0),N.text(v.label=d.label),N.prop("label",v.label)),v.id!==d.id&&N.val(v.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",v.selected=d.selected),Ra&&N.prop("selected",v.selected))):(""===d.id&&w?U=w:(U=C.clone()).val(d.id).prop("selected",d.selected).attr("selected",
d.selected).prop("label",d.label).text(d.label),u.push(v={element:U,label:d.label,id:d.id,selected:d.selected}),n(P,d.label,!0),N?N.after(U):s.element.append(U),N=U);for(E++;u.length>E;)d=u.pop(),n(P,d.label,!1),d.element.remove()}for(;S.length>x;){k=S.pop();for(E=1;E<k.length;++E)n(P,k[E].label,!1);k[0].element.remove()}r(P,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=s.match(d)))throw gg("iexp",s,xa(f));var z=c(v[2]||v[1]),A=v[4]||v[6],B=/ as /.test(v[0])&&v[1],x=B?c(B):
null,I=v[5],M=c(v[3]||""),E=c(v[2]?v[1]:A),L=c(v[7]),K=v[8]?c(v[8]):null,R={},S=[[{element:f,label:""}]],T={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=L(e)||[],c;if(t)c=[],r(f.val(),function(d){d=K?R[d]:d;c.push("?"===d?u:""===d?null:h(x?x:E,d,a[d]))});else{var d=K?R[f.val()]:f.val();c="?"===d?u:""===d?null:h(x?x:E,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(L,k);e.$watchCollection(function(){var a=L(e),c;
if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(z,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(z,d,a[d]));return c},k);t&&e.$watchCollection(function(){return g.$modelValue},k)}if(l[1]){var q=l[0];l=l[1];var t=h.multiple,s=h.ngOptions,w=!1,v,m=!1,C=B(W.createElement("option")),D=B(W.createElement("optgroup")),z=C.clone();h=0;for(var A=g.children(),x=A.length;h<x;h++)if(""===A[h].value){v=w=A.eq(h);break}q.init(l,w,z);t&&(l.$isEmpty=function(a){return!a||0===a.length});
s?p(e,g,l):t?n(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound||(n=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],
Xd=ea({restrict:"E",terminal:!1}),Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){x(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw S("ngPattern")("noregexp",g,a,xa(c));f=
a||u;e.$validate()});e.$validators.pattern=function(a,c){return e.$isEmpty(c)||D(f)||f.test(c)}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=
function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};R.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),B(W).ready(function(){Jd(W,tc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map
;/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,c,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,d,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(c.isDefined(b&&b.$template)){var b=a.$new(),d=r.current;m=y(b,function(b){g.enter(b,null,m||f).then(function(){!c.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=d.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(c,h,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,d=b.locals;f.html(d.$template);var y=c(f.contents());b.controller&&(d.$scope=a,d=h(b.controller,d),b.controllerAs&&(a[b.controllerAs]=d),f.data("$ngControllerController",d),f.children().data("$ngControllerController",d));y(a)}}}p=c.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return c.extend(Object.create(a),
f)}function h(a,c){var b=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,c,b,d){a="?"===d?d:null;d="*"===d?d:null;g.push({name:b,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(d&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=new RegExp("^"+a+"$",b?"i":"");return d}var g={};this.when=function(a,f){var b=c.copy(f);c.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
c.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=c.extend(b,a&&h(a,b));if(a){var d="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[d]=c.extend({redirectTo:a},h(d,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,d,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&c.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,c.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(c.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),d.when(e).then(function(){if(e){var a=
c.extend({},e.resolve),b,f;c.forEach(a,function(b,e){a[e]=c.isString(b)?h.get(b):h.invoke(b,null,null,e)});c.isDefined(b=e.template)?c.isFunction(b)&&(b=b(e.params)):c.isDefined(f=e.templateUrl)&&(c.isFunction(f)&&(f=f(e.params)),c.isDefined(f)&&(e.loadedTemplateUrl=x.valueOf(f),b=p(f)));c.isDefined(b)&&(a.$template=b);return d.all(a)}}).then(function(f){e==s.current&&(e&&(e.locals=f,c.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;c.forEach(g,function(d,g){var q;if(q=!b){var h=f.path();q=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=c.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return s}]});var B=c.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});
p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map
;/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),
A={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=
g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,
e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+
k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map
;/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var e=[];r(e,h.noop).chars(a);return e.join("")}function g(a){var e={};a=a.split(",");var d;for(d=0;d<a.length;d++)e[a[d]]=!0;return e}function F(a,e){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;f.last()&&t[f.last()];)c("",f.last());u[b]&&f.last()==b&&c("",b);(l=v[b]||!!l)||f.push(b);var m={};d.replace(G,function(a,b,e,c,d){m[b]=q(e||c||d||"")});e.start&&e.start(b,m,l)}function c(a,b){var c=0,d;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(d=f.length-1;d>=c;d--)e.end&&e.end(f[d]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],m=a,l;for(f.last=function(){return f[f.length-1]};a;){l="";k=!0;if(f.last()&&w[f.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");e.chars&&e.chars(q(b));return""}),c("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(e.comment&&
e.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),e.chars&&e.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=a.replace(/</g,
"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,e){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,f){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,f){var k=h.lowercase(f),g="img"===a&&"src"===k||"background"===
k;!0!==O[k]||!0===D[k]&&!e(d,g)||(c(" "),c(f),c('="'),c(B(d)),c('"'))}),c(f?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(e){var d=[];F(e,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var e=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function f(a,c){g.push("<a ");
h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(e);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),f(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
;/*
 AngularJS v1.4.14
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,s,y){'use strict';function t(f,k,p){n.directive(f,["$parse","$swipe",function(c,e){return function(l,m,g){function h(a){if(!b)return!1;var d=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return r&&75>d&&0<a&&30<a&&.3>d/a}var d=c(g[f]),b,r,a=["touch"];s.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,d){b=a;r=!0},cancel:function(a){r=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);d(l,{$event:b})})}},a)}}])}var n=s.module("ngTouch",[]);n.factory("$swipe",
[function(){function f(c){c=c.originalEvent||c;var e=c.touches&&c.touches.length?c.touches:[c];c=c.changedTouches&&c.changedTouches[0]||e[0];return{x:c.clientX,y:c.clientY}}function k(c,e){var l=[];s.forEach(c,function(c){(c=p[c][e])&&l.push(c)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(c,e,l){var m,g,h,d,b=!1;l=l||["mouse","touch"];c.on(k(l,"start"),function(a){h=
f(a);b=!0;g=m=0;d=h;e.start&&e.start(h,a)});var r=k(l,"cancel");if(r)c.on(r,function(a){b=!1;e.cancel&&e.cancel(a)});c.on(k(l,"move"),function(a){if(b&&h){var c=f(a);m+=Math.abs(c.x-d.x);g+=Math.abs(c.y-d.y);d=c;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(c,a)))}});c.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
["$parse","$timeout","$rootElement",function(f,k,p){function c(d,b,c){for(var a=0;a<d.length;a+=2){var e=d[a+1],g=c;if(25>Math.abs(d[a]-b)&&25>Math.abs(e-g))return d.splice(a,a+2),!0}return!1}function e(d){if(!(2500<Date.now()-m)){var b=d.touches&&d.touches.length?d.touches:[d],e=b[0].clientX,b=b[0].clientY;if(!(1>e&&1>b||h&&h[0]===e&&h[1]===b)){h&&(h=null);var a=d.target;"label"===s.lowercase(a.nodeName||a[0]&&a[0].nodeName)&&(h=[e,b]);c(g,e,b)||(d.stopPropagation(),d.preventDefault(),d.target&&
d.target.blur&&d.target.blur())}}}function l(d){d=d.touches&&d.touches.length?d.touches:[d];var b=d[0].clientX,c=d[0].clientY;g.push(b,c);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==c){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(d,b,h){var a=f(h.ngClick),k=!1,q,n,t,v;b.on("touchstart",function(a){k=!0;q=a.target?a.target:a.srcElement;3==q.nodeType&&(q=q.parentNode);b.addClass("ng-click-active");n=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:
[a])[0];t=a.clientX;v=a.clientY});b.on("touchcancel",function(a){k=!1;b.removeClass("ng-click-active")});b.on("touchend",function(a){var d=Date.now()-n,f=a.originalEvent||a,u=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=u.clientX,u=u.clientY,w=Math.sqrt(Math.pow(f-t,2)+Math.pow(u-v,2));k&&750>d&&12>w&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),c(g,f,u),q&&q.blur(),s.isDefined(h.disabled)&&
!1!==h.disabled||b.triggerHandler("click",[a]));k=!1;b.removeClass("ng-click-active")});b.onclick=function(a){};b.on("click",function(b,c){d.$apply(function(){a(d,{$event:c||b})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map
;/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.13.4 - 2015-09-03
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("collapse",["$animate",function(a){return{link:function(b,c,d){function e(){c.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),a.addClass(c,"in",{to:{height:c[0].scrollHeight+"px"}}).then(f)}function f(){c.removeClass("collapsing"),c.css({height:"auto"})}function g(){return c.hasClass("collapse")||c.hasClass("in")?(c.css({height:c[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void a.removeClass(c,"in",{to:{height:"0"}}).then(h)):h()}function h(){c.css({height:"0"}),c.removeClass("collapsing"),c.addClass("collapse")}b.$watch(d.collapse,function(a){a?g():e()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass,a.$watch("isOpen",function(c){b.toggleClass(a.openClass,c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable=!!b.close,this.close=a.close}]).directive("alert",function(){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).value("$bindHtmlUnsafeSuppressDeprecated",!1).directive("bindHtmlUnsafe",["$log","$bindHtmlUnsafeSuppressDeprecated",function(a,b){return function(c,d,e){b||a.warn("bindHtmlUnsafe is now deprecated. Use ngBindHtml instead"),d.addClass("ng-binding").data("$binding",e.bindHtmlUnsafe),c.$watch(e.bindHtmlUnsafe,function(a){d.html(a||"")})}}]),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];b.find("input").css({display:"none"}),f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})}})}}}).directive("btnCheckbox",["$document",function(a){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(b,c,d,e){function f(){return h(d.btnCheckboxTrue,!0)}function g(){return h(d.btnCheckboxFalse,!1)}function h(a,c){var d=b.$eval(a);return angular.isDefined(d)?d:c}var i=e[0],j=e[1];c.find("input").css({display:"none"}),j.$render=function(){c.toggleClass(i.activeClass,angular.equals(j.$modelValue,f()))},c.bind(i.toggleEvent,function(){d.disabled||b.$apply(function(){j.$setViewValue(c.hasClass(i.activeClass)?g():f()),j.$render()})}),c.on("keypress",function(e){d.disabled||32!==e.which||a[0].activeElement!==c[0]||b.$apply(function(){j.$setViewValue(c.hasClass(i.activeClass)?g():f()),j.$render()})})}}}]),angular.module("ui.bootstrap.carousel",[]).controller("CarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){r||(angular.extend(b,{direction:e,active:!0}),angular.extend(l.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&l.slides.length>1&&(b.$element.data(p,b.direction),l.currentSlide&&l.currentSlide.$element&&l.currentSlide.$element.data(p,b.direction),a.$currentTransition=!0,n?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),l.currentSlide=b,q=c,g())}function f(a){if(angular.isUndefined(m[a].index))return m[a];var b;m.length;for(b=0;b<m.length;++b)if(m[b].index==a)return m[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(j=c(i,b))}function h(){j&&(c.cancel(j),j=null)}function i(){var b=+a.interval;k&&!isNaN(b)&&b>0&&m.length?a.next():a.pause()}var j,k,l=this,m=l.slides=a.slides=[],n=angular.version.minor>=4,o="uib-noTransition",p="uib-slideDirection",q=-1;l.currentSlide=null;var r=!1;l.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>l.getCurrentIndex()?"next":"prev"),b&&b!==l.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){r=!0}),l.getCurrentIndex=function(){return l.currentSlide&&angular.isDefined(l.currentSlide.index)?+l.currentSlide.index:q},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:m.indexOf(a)},a.next=function(){var b=(l.getCurrentIndex()+1)%m.length;return 0===b&&a.noWrap()?void a.pause():l.select(f(b),"next")},a.prev=function(){var b=l.getCurrentIndex()-1<0?m.length-1:l.getCurrentIndex()-1;return a.noWrap()&&b===m.length-1?void a.pause():l.select(f(b),"prev")},a.isActive=function(a){return l.currentSlide===a},a.$watch("interval",g),a.$on("$destroy",h),a.play=function(){k||(k=!0,g())},a.pause=function(){a.noPause||(k=!1,h())},l.addSlide=function(b,c){b.$element=c,m.push(b),1===m.length||b.active?(l.select(m[m.length-1]),1==m.length&&a.play()):b.active=!1},l.removeSlide=function(a){angular.isDefined(a.index)&&m.sort(function(a,b){return+a.index>+b.index});var b=m.indexOf(a);m.splice(b,1),m.length>0&&a.active?b>=m.length?l.select(m[b-1]):l.select(m[b]):q>b&&q--,0===m.length&&(l.currentSlide=null)},a.$watch("noTransition",function(a){b.data(o,a)})}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&!a.parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&!a.parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.parsers={};var g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},h:{regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}};this.parse=function(c,g,h){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(f,"\\$&"),this.parsers[g]||(this.parsers[g]=d(g));var i=this.parsers[g],j=i.regex,k=i.map,l=c.match(j);if(l&&l.length){var m,n;angular.isDate(h)&&!isNaN(h.getTime())?m={year:h.getFullYear(),month:h.getMonth(),date:h.getDate(),hours:h.getHours(),minutes:h.getMinutes(),seconds:h.getSeconds(),milliseconds:h.getMilliseconds()}:(h&&a.warn("dateparser:","baseDate is not a valid date"),m={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var o=1,p=l.length;p>o;o++){var q=k[o-1];q.apply&&q.apply.call(m,l[o])}return e(m.year,m.month,m.date)&&(n=new Date(m.year,m.month,m.date,m.hours,m.minutes,m.seconds,m.milliseconds||0)),n}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","datepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){for(var c,d=new Array(b),f=new Date(a),g=0;b>g;)c=new Date(f),e.fixTimeZone(c),d[g++]=c,f.setDate(f.getDate()+1);return d}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=(11-e.startingDay)%7,p=b.rows.length,q=0;p>q;q++)b.weekNumbers.push(h(b.rows[q][o].date))}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a,b){var c=e.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var d=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(d,1),c=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(c)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c,d=new Array(12),f=e.activeDate.getFullYear(),g=0;12>g;g++)c=new Date(f,g,1),e.fixTimeZone(c),d[g]=angular.extend(e.createDateObject(c,e.formatMonth),{uid:b.uniqueId+"-"+g});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(d,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a,b){var c=e.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);e.activeDate.setMonth(c)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b,c=new Array(f),g=0,h=e(d.activeDate.getFullYear());f>g;g++)b=new Date(h+g,0,1),d.fixTimeZone(b),c[g]=angular.extend(d.createDateObject(b,d.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=d.split(c,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a,b){var c=d.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=5:"right"===a?c+=1:"down"===a?c+=5:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*d.step.years:"home"===a?c=e(d.activeDate.getFullYear()):"end"===a&&(c=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(c)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).directive("datepickerPopup",["$compile","$parse","$document","$rootScope","$position","dateFilter","dateParser","datepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(j,k,l,m){function n(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function o(a){if(angular.isNumber(a)&&(a=new Date(a)),a){if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=g.parse(a,q,j.date);return isNaN(b)?void 0:b}return void 0}return null}function p(a,b){var c=a||b;if(!l.ngRequired&&!c)return!0;if(angular.isNumber(c)&&(c=new Date(c)),c){if(angular.isDate(c)&&!isNaN(c))return!0;if(angular.isString(c)){var d=g.parse(c,q);return!isNaN(d)}return!1}return!0}var q,r=angular.isDefined(l.closeOnDateSelection)?j.$parent.$eval(l.closeOnDateSelection):h.closeOnDateSelection,s=angular.isDefined(l.datepickerAppendToBody)?j.$parent.$eval(l.datepickerAppendToBody):h.appendToBody,t=angular.isDefined(l.onOpenFocus)?j.$parent.$eval(l.onOpenFocus):h.onOpenFocus,u=angular.isDefined(l.datepickerPopupTemplateUrl)?l.datepickerPopupTemplateUrl:h.datepickerPopupTemplateUrl,v=angular.isDefined(l.datepickerTemplateUrl)?l.datepickerTemplateUrl:h.datepickerTemplateUrl,w={};j.showButtonBar=angular.isDefined(l.showButtonBar)?j.$parent.$eval(l.showButtonBar):h.showButtonBar,j.getText=function(a){return j[a+"Text"]||h[a+"Text"]},j.isDisabled=function(a){return"today"===a&&(a=new Date),j.watchData.minDate&&j.compare(a,w.minDate)<0||j.watchData.maxDate&&j.compare(a,w.maxDate)>0},j.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())};var x=!1;if(h.html5Types[l.type]?(q=h.html5Types[l.type],x=!0):(q=l.datepickerPopup||h.datepickerPopup,l.$observe("datepickerPopup",function(a,b){var c=a||h.datepickerPopup;if(c!==q&&(q=c,m.$modelValue=null,!q))throw new Error("datepickerPopup must have a date format specified.")})),!q)throw new Error("datepickerPopup must have a date format specified.");if(x&&l.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");var y=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");y.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":u});var z=angular.element(y.children()[0]);if(z.attr("template-url",v),x&&"month"===l.type&&(z.attr("datepicker-mode",'"month"'),z.attr("min-mode","month")),l.datepickerOptions){var A=j.$parent.$eval(l.datepickerOptions);A&&A.initDate&&(j.initDate=A.initDate,z.attr("init-date","initDate"),delete A.initDate),angular.forEach(A,function(a,b){z.attr(n(b),a)})}j.watchData={},angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(a){if(l[a]){var c=b(l[a]);if(j.$parent.$watch(c,function(b){j.watchData[a]=b,("minDate"===a||"maxDate"===a)&&(w[a]=new Date(b))}),z.attr(n(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;j.$watch("watchData."+a,function(a,b){angular.isFunction(d)&&a!==b&&d(j.$parent,a)})}}}),l.dateDisabled&&z.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),l.showWeeks&&z.attr("show-weeks",l.showWeeks),l.customClass&&z.attr("custom-class","customClass({ date: date, mode: mode })"),x?m.$formatters.push(function(a){return j.date=a,a}):(m.$$parserName="date",m.$validators.date=p,m.$parsers.unshift(o),m.$formatters.push(function(a){return j.date=a,m.$isEmpty(a)?a:f(a,q)})),j.dateSelection=function(a){angular.isDefined(a)&&(j.date=a);var b=j.date?f(j.date,q):null;k.val(b),m.$setViewValue(b),r&&(j.isOpen=!1,k[0].focus())},m.$viewChangeListeners.push(function(){j.date=g.parse(m.$viewValue,q,j.date)});var B=function(a){!j.isOpen||k[0].contains(a.target)||y[0].contains(a.target)||j.$apply(function(){j.isOpen=!1})},C=function(a){27===a.which&&j.isOpen?(a.preventDefault(),a.stopPropagation(),j.$apply(function(){j.isOpen=!1}),k[0].focus()):40!==a.which||j.isOpen||(a.preventDefault(),a.stopPropagation(),j.$apply(function(){j.isOpen=!0}))};k.bind("keydown",C),j.keydown=function(a){27===a.which&&(j.isOpen=!1,k[0].focus())},j.$watch("isOpen",function(a){a?(j.position=s?e.offset(k):e.position(k),j.position.top=j.position.top+k.prop("offsetHeight"),i(function(){t&&j.$broadcast("datepicker.focus"),c.bind("click",B)},0,!1)):c.unbind("click",B)}),j.select=function(a){if("today"===a){var b=new Date;angular.isDate(j.date)?(a=new Date(j.date),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}j.dateSelection(a)},j.close=function(){j.isOpen=!1,k[0].focus()};var D=a(y)(j);y.remove(),s?c.find("body").append(D):k.after(D),j.$on("$destroy",function(){j.isOpen===!0&&(d.$$phase||j.$apply(function(){j.isOpen=!1})),D.remove(),k.unbind("keydown",C),c.unbind("click",B)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate","$position","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j){var k,l,m=this,n=a.$new(),o=d.openClass,p=angular.noop,q=b.onToggle?c(b.onToggle):angular.noop,r=!1,s=!1,t=h.find("body");this.init=function(d){m.$element=d,b.isOpen&&(l=c(b.isOpen),p=l.assign,a.$watch(l,function(a){n.isOpen=!!a})),r=angular.isDefined(b.dropdownAppendToBody),s=angular.isDefined(b.keyboardNav),r&&m.dropdownMenu&&(t.append(m.dropdownMenu),t.addClass("dropdown"),d.on("$destroy",function(){m.dropdownMenu.remove()}))},this.toggle=function(a){return n.isOpen=arguments.length?!!a:!n.isOpen},this.isOpen=function(){return n.isOpen},n.getToggleElement=function(){return m.toggleElement},n.getAutoClose=function(){return b.autoClose||"always"},n.getElement=function(){return m.$element},n.isKeynavEnabled=function(){return s},n.focusDropdownEntry=function(a){var b=m.dropdownMenu?angular.element(m.dropdownMenu).find("a"):angular.element(m.$element).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(m.selectedOption)?m.selectedOption=m.selectedOption===b.length-1?m.selectedOption:m.selectedOption+1:m.selectedOption=0;break;case 38:angular.isNumber(m.selectedOption)?m.selectedOption=0===m.selectedOption?0:m.selectedOption-1:m.selectedOption=b.length-1}b[m.selectedOption].focus()},n.getDropdownElement=function(){return m.dropdownMenu},n.focusToggleElement=function(){m.toggleElement&&m.toggleElement[0].focus()},n.$watch("isOpen",function(b,c){if(r&&m.dropdownMenu){var d=g.positionElements(m.$element,m.dropdownMenu,"bottom-left",!0),h={top:d.top+"px",display:b?"block":"none"},l=m.dropdownMenu.hasClass("dropdown-menu-right");l?(h.left="auto",h.right=window.innerWidth-(d.left+m.$element.prop("offsetWidth"))+"px"):(h.left=d.left+"px",h.right="auto"),m.dropdownMenu.css(h)}var s=r?t:m.$element;if(f[b?"addClass":"removeClass"](s,o).then(function(){angular.isDefined(b)&&b!==c&&q(a,{open:!!b})}),b)m.dropdownMenuTemplateUrl&&j(m.dropdownMenuTemplateUrl).then(function(a){k=n.$new(),i(a.trim())(k,function(a){var b=a;m.dropdownMenu.replaceWith(b),m.dropdownMenu=b})}),n.focusToggleElement(),e.open(n);else{if(m.dropdownMenuTemplateUrl){k&&k.$destroy();var u=angular.element('<ul class="dropdown-menu"></ul>');m.dropdownMenu.replaceWith(u),m.dropdownMenu=u}e.close(n),m.selectedOption=null}angular.isFunction(p)&&p(a,b)}),a.$on("$locationChangeSuccess",function(){"disabled"!==n.getAutoClose()&&(n.isOpen=!1)});var u=a.$on("$destroy",function(){
n.$destroy()});n.$on("$destroy",u)}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(a,b,c,d){d.init(b),b.addClass("dropdown")}}}).directive("dropdownMenu",function(){return{restrict:"AC",require:"?^dropdown",link:function(a,b,c,d){if(d){var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("keyboardNav",function(){return{restrict:"A",require:"?^dropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=b.length-1}b[d.selectedOption].focus()}})}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).directive("modalBackdrop",["$animate","$injector","$modalStack",function(a,b,c){function d(b,d,f){f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{restrict:"EA",scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)})),b.when(h).then(function(){var a=f[0].querySelectorAll("[autofocus]");a.length?a[0].focus():f[0].focus()});var i=a.getTop();i&&a.modalRendered(i.key)})}}}]).directive("modalAnimationClass",[function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.modalAnimationClass)}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(a,b,c,d,e,f,g,h,i){function j(){for(var a=-1,b=t.keys(),c=0;c<b.length;c++)t.get(b[c]).value.backdrop&&(a=c);return a}function k(a,b){var d=c.find("body").eq(0),e=t.get(a).value;t.remove(a),m(e.modalDomEl,e.modalScope,function(){var b=e.openedClass||s;u.remove(b,a),d.toggleClass(b,u.hasKey(b))}),l(),b&&b.focus?b.focus():d.focus()}function l(){if(p&&-1==j()){var a=q;m(p,q,function(){a=null}),p=void 0,q=void 0}}function m(b,c,d){function e(){e.done||(e.done=!0,o?o(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(v.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function n(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var o=null;g.has("$animateCss")&&(o=g.get("$animateCss"));var p,q,r,s="modal-open",t=i.createNew(),u=h.createNew(),v={NOW_CLOSING_EVENT:"modal.stack.now-closing"},w=0,x="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(j,function(a){q&&(q.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=t.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){v.dismiss(b.key,"escape key press")});break;case 9:v.loadFocusElementList(b);var c=!1;a.shiftKey?v.isFocusInFirstItem(a)&&(c=v.focusLastFocusableElement()):v.isFocusInLastItem(a)&&(c=v.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),v.open=function(a,b){var f=c[0].activeElement,g=b.openedClass||s;t.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass}),u.put(g,a);var h=c.find("body").eq(0),i=j();if(i>=0&&!p){q=e.$new(!0),q.index=i;var k=angular.element('<div modal-backdrop="modal-backdrop"></div>');k.attr("backdrop-class",b.backdropClass),b.animation&&k.attr("modal-animation","true"),p=d(k)(q),h.append(p)}var l=angular.element('<div modal-window="modal-window"></div>');l.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:t.length()-1,animate:"animate"}).html(b.content),b.animation&&l.attr("modal-animation","true");var m=d(l)(b.scope);t.top().value.modalDomEl=m,t.top().value.modalOpener=f,h.append(m),h.addClass(g),v.clearFocusListCache()},v.close=function(a,b){var c=t.get(a);return c&&n(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),k(a,c.value.modalOpener),!0):!c},v.dismiss=function(a,b){var c=t.get(a);return c&&n(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),k(a,c.value.modalOpener),!0):!c},v.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},v.getTop=function(){return t.top()},v.modalRendered=function(a){var b=t.get(a);b&&b.value.renderDeferred.resolve()},v.focusFirstFocusableElement=function(){return r.length>0?(r[0].focus(),!0):!1},v.focusLastFocusableElement=function(){return r.length>0?(r[r.length-1].focus(),!0):!1},v.isFocusInFirstItem=function(a){return r.length>0?(a.target||a.srcElement)==r[0]:!1},v.isFocusInLastItem=function(a){return r.length>0?(a.target||a.srcElement)==r[r.length-1]:!1},v.clearFocusListCache=function(){r=[],w=0},v.loadFocusElementList=function(a){if((void 0===r||!r.length0)&&a){var b=a.value.modalDomEl;b&&b.length&&(r=b[0].querySelectorAll(x))}},v}]).provider("$modal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$modalStack",function(b,c,d,e,f,g){function h(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function i(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)?c.push(d.when(b.get(a))):c.push(d.when(a))}),c}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(b){var e=d.defer(),j=d.defer(),l=d.defer(),m={result:e.promise,opened:j.promise,rendered:l.promise,close:function(a){return g.close(m,a)},dismiss:function(a){return g.dismiss(m,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var n,o=d.all([h(b)].concat(i(b.resolve)));return n=k=d.all([k]).then(function(){return o},function(){return o}).then(function(a){var d=(b.scope||c).$new();d.$close=m.close,d.$dismiss=m.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var h,i={},k=1;b.controller&&(i.$scope=d,i.$modalInstance=m,angular.forEach(b.resolve,function(b,c){i[c]=a[k++]}),h=f(b.controller,i),b.controllerAs&&(b.bindToController&&angular.extend(h,d),d[b.controllerAs]=h)),g.open(m,{scope:d,deferred:e,renderDeferred:l,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass}),j.resolve(!0)},function(a){j.reject(a),e.reject(a)})["finally"](function(){k===n&&(k=null)}),m},j}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["pager","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate","$rootScope","$parse",function(e,f,g,h,i,j,k,l){return function(e,m,n,o){function p(a){var b=(a||o.trigger||n).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}o=angular.extend({},b,d,o);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup title="'+r+"title"+s+'" '+(o.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';return{restrict:"EA",compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){I.isOpen?q():n()}function n(){(!H||a.$eval(d[m+"Enable"]))&&(v(),I.popupDelay?D||(D=g(r,I.popupDelay,!1)):r())}function q(){s(),k.$$phase||k.$digest()}function r(){return D=null,C&&(g.cancel(C),C=null),(o.useContentExp?I.contentExp():I.content)?(t(),I.isOpen=!0,K&&K.assign(I.origScope,I.isOpen),k.$$phase||I.$apply(),A.css({display:"block"}),void L()):angular.noop}function s(){I.isOpen=!1,K&&K.assign(I.origScope,I.isOpen),g.cancel(D),D=null,g.cancel(E),E=null,I.animation?C||(C=g(u,500)):u()}function t(){A&&u(),B=I.$new(),A=c(B,function(a){F?h.find("body").append(a):b.after(a)}),o.useContentExp&&(B.$watch("contentExp()",function(a){!a&&I.isOpen&&s()}),B.$watch(function(){J||(J=!0,B.$$postDigest(function(){J=!1,I.isOpen&&L()}))}))}function u(){C=null,A&&(A.remove(),A=null),B&&(B.$destroy(),B=null)}function v(){w(),x(),y()}function w(){I.popupClass=d[m+"Class"]}function x(){var a=d[m+"Placement"];I.placement=angular.isDefined(a)?a:o.placement}function y(){var a=d[m+"PopupDelay"],b=parseInt(a,10);I.popupDelay=isNaN(b)?o.popupDelay:b}function z(){var a=d[m+"Trigger"];M(),G=p(a),"none"!==G.show&&G.show.forEach(function(a,c){a===G.hide[c]?b[0].addEventListener(a,j):a&&(b[0].addEventListener(a,n),b[0].addEventListener(G.hide[c],q))})}var A,B,C,D,E,F=angular.isDefined(o.appendToBody)?o.appendToBody:!1,G=p(void 0),H=angular.isDefined(d[m+"Enable"]),I=a.$new(!0),J=!1,K=angular.isDefined(d[m+"IsOpen"])?l(d[m+"IsOpen"]):!1,L=function(){A&&(E||(E=g(function(){A.css({top:0,left:0,width:"auto",height:"auto"});var a=i.position(A),c=i.positionElements(b,A,I.placement,F);c.top+="px",c.left+="px",c.width=a.width+"px",c.height=a.height+"px",A.css(c),E=null},0,!1)))};I.origScope=a,I.isOpen=!1,I.contentExp=function(){return a.$eval(d[e])},o.useContentExp||d.$observe(e,function(a){I.content=a,!a&&I.isOpen?s():L()}),d.$observe("disabled",function(a){D&&a&&(g.cancel(D),D=null),a&&I.isOpen&&s()}),d.$observe(m+"Title",function(a){I.title=a,L()}),d.$observe(m+"Placement",function(){I.isOpen&&(x(),L())}),K&&a.$watch(K,function(a){a!==I.isOpen&&j()});var M=function(){G.show.forEach(function(a){b.unbind(a,n)}),G.hide.forEach(function(a){b.unbind(a,q)})};z();var N=a.$eval(d[m+"Animation"]);I.animation=angular.isDefined(N)?!!N:o.animation;var O=a.$eval(d[m+"AppendToBody"]);F=angular.isDefined(O)?O:F,F&&a.$on("$locationChangeSuccess",function(){I.isOpen&&s()}),a.$on("$destroy",function(){g.cancel(C),g.cancel(D),g.cancel(E),M(),u(),I=null})}}}}}]}).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.tooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("tooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html"}}).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html"}}).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).value("tooltipHtmlUnsafeSuppressDeprecated",!1).directive("tooltipHtmlUnsafe",["$tooltip","tooltipHtmlUnsafeSuppressDeprecated","$log",function(a,b,c){return b||c.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."),a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html"}}).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html"}}).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).value("$progressSuppressWarning",!1).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=d.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("uibProgress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"uibProgress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("progress",["$log","$progressSuppressWarning",function(a,b){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html",link:function(){b&&a.warn("progress is now deprecated. Use uib-progress instead")}}}]).directive("uibBar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("bar",["$log","$progressSuppressWarning",function(a,b){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(c,d,e,f){b&&a.warn("bar is now deprecated. Use uib-bar instead"),f.addBar(c,d)}}}]).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect(),a.selectCalled=!1)}),a.active=!0,a.selectCalled||(a.onSelect(),a.selectCalled=!0)},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse","$log",function(a,b){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(c,d,e,f,g){c.$watch("active",function(a){a&&f.select(c)}),c.disabled=!1,e.disable&&c.$parent.$watch(a(e.disable),function(a){c.disabled=!!a}),e.disabled&&(b.warn('Use of "disabled" attribute has been deprecated, please use "disable"'),c.$parent.$watch(a(e.disabled),function(a){c.disabled=!!a})),c.select=function(){c.disabled||(c.active=!0)},f.addTab(c),c.$on("$destroy",function(){f.removeTab(c)}),c.$transcludeFn=g}}}]).directive("tabHeadingTransclude",function(){return{restrict:"A",require:"^tab",link:function(a,b,c,d){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===q[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function j(a){k(),p.$setViewValue(new Date(o)),l(a)}function k(){p.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=o.getHours(),d=o.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),"m"!==b&&(a.minutes=i(d)),a.meridian=o.getHours()<12?q[0]:q[1]}function m(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function n(a){o=m(o,a),j()}var o=new Date,p={$setViewValue:angular.noop},q=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){p=c,p.$render=this.render,p.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g);var i=angular.isDefined(b.arrowkeys)?a.$parent.$eval(b.arrowkeys):f.arrowkeys;i&&this.setupArrowkeyEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var r=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){r=parseInt(a,10)});var s=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){s=parseInt(a,10)});var t;a.$parent.$watch(c(b.min),function(a){var b=new Date(a);t=isNaN(b)?void 0:b});var u;a.$parent.$watch(c(b.max),function(a){var b=new Date(a);u=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=m(o,60*r);return a>u||o>a&&t>a},a.noDecrementHours=function(){var a=m(o,60*-r);return t>a||a>o&&a>u},a.noIncrementMinutes=function(){var a=m(o,s);return a>u||o>a&&t>a},a.noDecrementMinutes=function(){var a=m(o,-s);return t>a||a>o&&a>u},a.noToggleMeridian=function(){return o.getHours()<13?m(o,720)>u:m(o,-720)<t},a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,p.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(o.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){p.$setViewValue(null),p.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g(),b=h();angular.isDefined(a)&&angular.isDefined(b)?(o.setHours(a),t>o||o>u?d(!0):j("h")):d(!0)},b.bind("blur",function(b){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h(),b=g();angular.isDefined(a)&&angular.isDefined(b)?(o.setMinutes(a),t>o||o>u?d(void 0,!0):j("m")):d(void 0,!0)},c.bind("blur",function(b){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var b=p.$viewValue;isNaN(b)?(p.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(o=b),t>o||o>u?(p.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):k(),l())},a.showSpinners=angular.isDefined(b.showSpinners)?a.$parent.$eval(b.showSpinners):f.showSpinners,a.incrementHours=function(){a.noIncrementHours()||n(60*r)},a.decrementHours=function(){a.noDecrementHours()||n(60*-r)},a.incrementMinutes=function(){a.noIncrementMinutes()||n(s)},a.decrementMinutes=function(){a.noDecrementMinutes()||n(-s)},a.toggleMeridian=function(){a.noToggleMeridian()||n(720*(o.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.transition",[]).value("$transitionSuppressDeprecated",!1).factory("$transition",["$q","$timeout","$rootScope","$log","$transitionSuppressDeprecated",function(a,b,c,d,e){function f(a){for(var b in a)if(void 0!==h.style[b])return a[b]}e||d.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");var g=function(d,e,f){f=f||{};var h=a.defer(),i=g[f.animation?"animationEndEventName":"transitionEndEventName"],j=function(a){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(e)?d.addClass(e):angular.isFunction(e)?e(d):angular.isObject(e)&&d.css(e),i||h.resolve(d)}),h.promise.cancel=function(){
i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},h=document.createElement("trans"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},j={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return g.transitionEndEventName=f(i),g.animationEndEventName=f(j),g}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$position","typeaheadParser",function(a,b,c,d,e,f,g,h,i){var j=[9,13,27,38,40],k=200;return{require:["ngModel","^?ngModelOptions"],link:function(l,m,n,o){function p(){K.moveInProgress||(K.moveInProgress=!0,K.$digest()),S&&d.cancel(S),S=d(function(){K.matches.length&&q(),K.moveInProgress=!1,K.$digest()},k)}function q(){K.position=D?h.offset(m):h.position(m),K.position.top+=m.prop("offsetHeight")}var r=o[0],s=o[1],t=l.$eval(n.typeaheadMinLength);t||0===t||(t=1);var u,v,w=l.$eval(n.typeaheadWaitMs)||0,x=l.$eval(n.typeaheadEditable)!==!1,y=b(n.typeaheadLoading).assign||angular.noop,z=b(n.typeaheadOnSelect),A=angular.isDefined(n.typeaheadSelectOnBlur)?l.$eval(n.typeaheadSelectOnBlur):!1,B=b(n.typeaheadNoResults).assign||angular.noop,C=n.typeaheadInputFormatter?b(n.typeaheadInputFormatter):void 0,D=n.typeaheadAppendToBody?l.$eval(n.typeaheadAppendToBody):!1,E=l.$eval(n.typeaheadFocusFirst)!==!1,F=n.typeaheadSelectOnExact?l.$eval(n.typeaheadSelectOnExact):!1,G=b(n.ngModel),H=b(n.ngModel+"($$$p)"),I=function(a,b){return angular.isFunction(G(l))&&s&&s.$options&&s.$options.getterSetter?H(a,{$$$p:b}):G.assign(a,b)},J=i.parse(n.typeahead),K=l.$new(),L=l.$on("$destroy",function(){K.$destroy()});K.$on("$destroy",L);var M="typeahead-"+K.$id+"-"+Math.floor(1e4*Math.random());m.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":M});var N=angular.element("<div typeahead-popup></div>");N.attr({id:M,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(n.typeaheadTemplateUrl)&&N.attr("template-url",n.typeaheadTemplateUrl),angular.isDefined(n.typeaheadPopupTemplateUrl)&&N.attr("popup-template-url",n.typeaheadPopupTemplateUrl);var O=function(){K.matches=[],K.activeIdx=-1,m.attr("aria-expanded",!1)},P=function(a){return M+"-option-"+a};K.$watch("activeIdx",function(a){0>a?m.removeAttr("aria-activedescendant"):m.attr("aria-activedescendant",P(a))});var Q=function(a,b){return K.matches.length>b&&a?a.toUpperCase()===K.matches[b].label.toUpperCase():!1},R=function(a){var b={$viewValue:a};y(l,!0),B(l,!1),c.when(J.source(l,b)).then(function(c){var d=a===r.$viewValue;if(d&&u)if(c&&c.length>0){K.activeIdx=E?0:-1,B(l,!1),K.matches.length=0;for(var e=0;e<c.length;e++)b[J.itemName]=c[e],K.matches.push({id:P(e),label:J.viewMapper(K,b),model:c[e]});K.query=a,q(),m.attr("aria-expanded",!0),F&&1===K.matches.length&&Q(a,0)&&K.select(0)}else O(),B(l,!0);d&&y(l,!1)},function(){O(),y(l,!1),B(l,!0)})};D&&(angular.element(f).bind("resize",p),e.find("body").bind("scroll",p));var S;K.moveInProgress=!1,O(),K.query=void 0;var T,U=function(a){T=d(function(){R(a)},w)},V=function(){T&&d.cancel(T)};r.$parsers.unshift(function(a){return u=!0,0===t||a&&a.length>=t?w>0?(V(),U(a)):R(a):(y(l,!1),V(),O()),x?a:a?void r.$setValidity("editable",!1):(r.$setValidity("editable",!0),null)}),r.$formatters.push(function(a){var b,c,d={};return x||r.$setValidity("editable",!0),C?(d.$model=a,C(l,d)):(d[J.itemName]=a,b=J.viewMapper(l,d),d[J.itemName]=void 0,c=J.viewMapper(l,d),b!==c?b:a)}),K.select=function(a){var b,c,e={};v=!0,e[J.itemName]=c=K.matches[a].model,b=J.modelMapper(l,e),I(l,b),r.$setValidity("editable",!0),r.$setValidity("parse",!0),z(l,{$item:c,$model:b,$label:J.viewMapper(l,e)}),O(),K.$eval(n.typeaheadFocusOnSelect)!==!1&&d(function(){m[0].focus()},0,!1)},m.bind("keydown",function(a){if(0!==K.matches.length&&-1!==j.indexOf(a.which)){if(-1===K.activeIdx&&(9===a.which||13===a.which))return O(),void K.$digest();a.preventDefault(),40===a.which?(K.activeIdx=(K.activeIdx+1)%K.matches.length,K.$digest()):38===a.which?(K.activeIdx=(K.activeIdx>0?K.activeIdx:K.matches.length)-1,K.$digest()):13===a.which||9===a.which?K.$apply(function(){K.select(K.activeIdx)}):27===a.which&&(a.stopPropagation(),O(),K.$digest())}}),m.bind("blur",function(){A&&K.matches.length&&-1!==K.activeIdx&&!v&&(v=!0,K.$apply(function(){K.select(K.activeIdx)})),u=!1,v=!1});var W=function(a){m[0]!==a.target&&3!==a.which&&0!==K.matches.length&&(O(),g.$$phase||K.$digest())};e.bind("click",W),l.$on("$destroy",function(){e.unbind("click",W),D&&X.remove(),N.remove()});var X=a(N)(K);D?e.find("body").append(X):m.after(X)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("typeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close($event)">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop"\n     modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n    modal-in-class="in"\n	ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-template-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-html.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-template.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" ></i>\n</span>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a href tabindex="-1" ng-bind-html="match.label | typeaheadHighlight:query"></a>\n')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');;/* Notify.js - http://notifyjs.com/ Copyright (c) 2015 MIT */
(function(window, document, $, undefined) {
  "use strict";
  //IE8 indexOf polyfill
  var indexOf = [].indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) {
        return i;
      }
    }
    return -1;
  };

  var pluginName = "notify";
  var pluginClassName = pluginName + "js";
  var blankFieldName = pluginName + "!blank";

  var positions = {
    t: "top",
    m: "middle",
    b: "bottom",
    l: "left",
    c: "center",
    r: "right"
  };
  var hAligns = ["l", "c", "r"];
  var vAligns = ["t", "m", "b"];
  var mainPositions = ["t", "b", "l", "r"];
  var opposites = {
    t: "b",
    m: null,
    b: "t",
    l: "r",
    c: null,
    r: "l"
  };

  var parsePosition = function(str) {
    var pos;
    pos = [];
    $.each(str.split(/\W+/), function(i, word) {
      var w;
      w = word.toLowerCase().charAt(0);
      if (positions[w]) {
        return pos.push(w);
      }
    });
    return pos;
  };

  var styles = {};

  var coreStyle = {
    name: "core",
    html: "<div class=\"" + pluginClassName + "-wrapper\">\n  <div class=\"" + pluginClassName + "-arrow\"></div>\n  <div class=\"" + pluginClassName + "-container\"></div>\n</div>",
    css: "." + pluginClassName + "-corner {\n  position: fixed;\n  margin: 5px;\n  z-index: 1050;\n}\n\n." + pluginClassName + "-corner ." + pluginClassName + "-wrapper,\n." + pluginClassName + "-corner ." + pluginClassName + "-container {\n  position: relative;\n  display: block;\n  height: inherit;\n  width: inherit;\n  margin: 3px;\n}\n\n." + pluginClassName + "-wrapper {\n  z-index: 1;\n  position: absolute;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n." + pluginClassName + "-container {\n  display: none;\n  z-index: 1;\n  position: absolute;\n}\n\n." + pluginClassName + "-hidable {\n  cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n  position: relative;\n}\n\n." + pluginClassName + "-arrow {\n  position: absolute;\n  z-index: 2;\n  width: 0;\n  height: 0;\n}"
  };

  var stylePrefixes = {
    "border-radius": ["-webkit-", "-moz-"]
  };

  var getStyle = function(name) {
    return styles[name];
  };

  var addStyle = function(name, def) {
    var cssText, elem, fields, ref;
    if (!name) {
      throw "Missing Style name";
    }
    if (!def) {
      throw "Missing Style definition";
    }
    if (!def.html) {
      throw "Missing Style HTML";
    }
    if ((ref = styles[name]) != null ? ref.cssElem : void 0) {
      if (window.console) {
        console.warn(pluginName + ": overwriting style '" + name + "'");
      }
      styles[name].cssElem.remove();
    }
    def.name = name;
    styles[name] = def;
    cssText = "";
    if (def.classes) {
      $.each(def.classes, function(className, props) {
        cssText += "." + pluginClassName + "-" + def.name + "-" + className + " {\n";
        $.each(props, function(name, val) {
          if (stylePrefixes[name]) {
            $.each(stylePrefixes[name], function(i, prefix) {
              return cssText += "  " + prefix + name + ": " + val + ";\n";
            });
          }
          return cssText += "  " + name + ": " + val + ";\n";
        });
        return cssText += "}\n";
      });
    }
    if (def.css) {
      cssText += "/* styles for " + def.name + " */\n" + def.css;
    }
    if (cssText) {
      def.cssElem = insertCSS(cssText);
      def.cssElem.attr("id", "notify-" + def.name);
    }
    fields = {};
    elem = $(def.html);
    findFields("html", elem, fields);
    findFields("text", elem, fields);
    return def.fields = fields;
  };

  var insertCSS = function(cssText) {
    var e, elem, error;
    elem = createElem("style");
    elem.attr("type", 'text/css');
    $("head").append(elem);
    try {
      elem.html(cssText);
    } catch (error) {
      e = error;
      elem[0].styleSheet.cssText = cssText;
    }
    return elem;
  };

  var findFields = function(type, elem, fields) {
    var attr;
    if (type !== "html") {
      type = "text";
    }
    attr = "data-notify-" + type;
    return find(elem, "[" + attr + "]").each(function() {
      var name;
      name = $(this).attr(attr);
      if (!name) {
        name = blankFieldName;
      }
      return fields[name] = type;
    });
  };

  var find = function(elem, selector) {
    if (elem.is(selector)) {
      return elem;
    } else {
      return elem.find(selector);
    }
  };

  var pluginOptions = {
    clickToHide: true,
    autoHide: true,
    autoHideDelay: 5000,
    arrowShow: true,
    arrowSize: 5,
    breakNewLines: true,
    elementPosition: "bottom",
    globalPosition: "top right",
    style: "bootstrap",
    className: "error",
    showAnimation: "slideDown",
    showDuration: 400,
    hideAnimation: "slideUp",
    hideDuration: 200,
    gap: 5
  };

  var inherit = function(a, b) {
    var F;
    F = function() {};
    F.prototype = a;
    return $.extend(true, new F(), b);
  };

  var defaults = function(opts) {
    return $.extend(pluginOptions, opts);
  };

  var createElem = function(tag) {
    return $("<" + tag + "></" + tag + ">");
  };

  var globalAnchors = {};

  var getAnchorElement = function(element) {
    var radios;
    if (element.is('[type=radio]')) {
      radios = element.parents('form:first').find('[type=radio]').filter(function(i, e) {
        return $(e).attr("name") === element.attr("name");
      });
      element = radios.first();
    }
    return element;
  };

  var incr = function(obj, pos, val) {
    var opp, temp;
    if (typeof val === "string") {
      val = parseInt(val, 10);
    } else if (typeof val !== "number") {
      return;
    }
    if (isNaN(val)) {
      return;
    }
    opp = positions[opposites[pos.charAt(0)]];
    temp = pos;
    if (obj[opp] !== undefined) {
      pos = positions[opp.charAt(0)];
      val = -val;
    }
    if (obj[pos] === undefined) {
      obj[pos] = val;
    } else {
      obj[pos] += val;
    }
    return null;
  };

  var realign = function(alignment, inner, outer) {
    if (alignment === "l" || alignment === "t") {
      return 0;
    } else if (alignment === "c" || alignment === "m") {
      return outer / 2 - inner / 2;
    } else if (alignment === "r" || alignment === "b") {
      return outer - inner;
    }
    throw "Invalid alignment";
  };

  var encode = function(text) {
    encode.e = encode.e || createElem("div");
    return encode.e.text(text).html();
  };

  function Notification(elem, data, options) {
    if (typeof options === "string") {
      options = {
        className: options
      };
    }
    this.options = inherit(pluginOptions, $.isPlainObject(options) ? options : {});
    this.loadHTML();
    this.wrapper = $(coreStyle.html);
    if (this.options.clickToHide) {
      this.wrapper.addClass(pluginClassName + "-hidable");
    }
    this.wrapper.data(pluginClassName, this);
    this.arrow = this.wrapper.find("." + pluginClassName + "-arrow");
    this.container = this.wrapper.find("." + pluginClassName + "-container");
    this.container.append(this.userContainer);
    if (elem && elem.length) {
      this.elementType = elem.attr("type");
      this.originalElement = elem;
      this.elem = getAnchorElement(elem);
      this.elem.data(pluginClassName, this);
      this.elem.before(this.wrapper);
    }
    this.container.hide();
    this.run(data);
  }

  Notification.prototype.loadHTML = function() {
    var style;
    style = this.getStyle();
    this.userContainer = $(style.html);
    this.userFields = style.fields;
  };

  Notification.prototype.show = function(show, userCallback) {
    var args, callback, elems, fn, hidden;
    callback = (function(_this) {
      return function() {
        if (!show && !_this.elem) {
          _this.destroy();
        }
        if (userCallback) {
          return userCallback();
        }
      };
    })(this);
    hidden = this.container.parent().parents(':hidden').length > 0;
    elems = this.container.add(this.arrow);
    args = [];
    if (hidden && show) {
      fn = "show";
    } else if (hidden && !show) {
      fn = "hide";
    } else if (!hidden && show) {
      fn = this.options.showAnimation;
      args.push(this.options.showDuration);
    } else if (!hidden && !show) {
      fn = this.options.hideAnimation;
      args.push(this.options.hideDuration);
    } else {
      return callback();
    }
    args.push(callback);
    return elems[fn].apply(elems, args);
  };

  Notification.prototype.setGlobalPosition = function() {
    var align, anchor, css, key, main, pAlign, pMain, ref;
    ref = this.getPosition(), pMain = ref[0], pAlign = ref[1];
    main = positions[pMain];
    align = positions[pAlign];
    key = pMain + "|" + pAlign;
    anchor = globalAnchors[key];
    if (!anchor) {
      anchor = globalAnchors[key] = createElem("div");
      css = {};
      css[main] = 0;
      if (align === "middle") {
        css.top = '45%';
      } else if (align === "center") {
        css.left = '45%';
      } else {
        css[align] = 0;
      }
      anchor.css(css).addClass(pluginClassName + "-corner");
      $("body").append(anchor);
    }
    return anchor.prepend(this.wrapper);
  };

  Notification.prototype.setElementPosition = function() {
    var arrowColor, arrowCss, arrowSize, color, contH, contW, css, elemH, elemIH, elemIW, elemPos, elemW, gap, j, k, len, len1, mainFull, margin, opp, oppFull, pAlign, pArrow, pMain, pos, posFull, position, ref, wrapPos;
    position = this.getPosition();
    pMain = position[0], pAlign = position[1], pArrow = position[2];
    elemPos = this.elem.position();
    elemH = this.elem.outerHeight();
    elemW = this.elem.outerWidth();
    elemIH = this.elem.innerHeight();
    elemIW = this.elem.innerWidth();
    wrapPos = this.wrapper.position();
    contH = this.container.height();
    contW = this.container.width();
    mainFull = positions[pMain];
    opp = opposites[pMain];
    oppFull = positions[opp];
    css = {};
    css[oppFull] = pMain === "b" ? elemH : pMain === "r" ? elemW : 0;
    incr(css, "top", elemPos.top - wrapPos.top);
    incr(css, "left", elemPos.left - wrapPos.left);
    ref = ["top", "left"];
    for (j = 0, len = ref.length; j < len; j++) {
      pos = ref[j];
      margin = parseInt(this.elem.css("margin-" + pos), 10);
      if (margin) {
        incr(css, pos, margin);
      }
    }
    gap = Math.max(0, this.options.gap - (this.options.arrowShow ? arrowSize : 0));
    incr(css, oppFull, gap);
    if (!this.options.arrowShow) {
      this.arrow.hide();
    } else {
      arrowSize = this.options.arrowSize;
      arrowCss = $.extend({}, css);
      arrowColor = this.userContainer.css("border-color") || this.userContainer.css("background-color") || "white";
      for (k = 0, len1 = mainPositions.length; k < len1; k++) {
        pos = mainPositions[k];
        posFull = positions[pos];
        if (pos === opp) {
          continue;
        }
        color = posFull === mainFull ? arrowColor : "transparent";
        arrowCss["border-" + posFull] = arrowSize + "px solid " + color;
      }
      incr(css, positions[opp], arrowSize);
      if (indexOf.call(mainPositions, pAlign) >= 0) {
        incr(arrowCss, positions[pAlign], arrowSize * 2);
      }
    }
    if (indexOf.call(vAligns, pMain) >= 0) {
      incr(css, "left", realign(pAlign, contW, elemW));
      if (arrowCss) {
        incr(arrowCss, "left", realign(pAlign, arrowSize, elemIW));
      }
    } else if (indexOf.call(hAligns, pMain) >= 0) {
      incr(css, "top", realign(pAlign, contH, elemH));
      if (arrowCss) {
        incr(arrowCss, "top", realign(pAlign, arrowSize, elemIH));
      }
    }
    if (this.container.is(":visible")) {
      css.display = "block";
    }
    this.container.removeAttr("style").css(css);
    if (arrowCss) {
      return this.arrow.removeAttr("style").css(arrowCss);
    }
  };

  Notification.prototype.getPosition = function() {
    var pos, ref, ref1, ref2, ref3, ref4, ref5, text;
    text = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition);
    pos = parsePosition(text);
    if (pos.length === 0) {
      pos[0] = "b";
    }
    if (ref = pos[0], indexOf.call(mainPositions, ref) < 0) {
      throw "Must be one of [" + mainPositions + "]";
    }
    if (pos.length === 1 || ((ref1 = pos[0], indexOf.call(vAligns, ref1) >= 0) && (ref2 = pos[1], indexOf.call(hAligns, ref2) < 0)) || ((ref3 = pos[0], indexOf.call(hAligns, ref3) >= 0) && (ref4 = pos[1], indexOf.call(vAligns, ref4) < 0))) {
      pos[1] = (ref5 = pos[0], indexOf.call(hAligns, ref5) >= 0) ? "m" : "l";
    }
    if (pos.length === 2) {
      pos[2] = pos[1];
    }
    return pos;
  };

  Notification.prototype.getStyle = function(name) {
    var style;
    if (!name) {
      name = this.options.style;
    }
    if (!name) {
      name = "default";
    }
    style = styles[name];
    if (!style) {
      throw "Missing style: " + name;
    }
    return style;
  };

  Notification.prototype.updateClasses = function() {
    var classes, style;
    classes = ["base"];
    if ($.isArray(this.options.className)) {
      classes = classes.concat(this.options.className);
    } else if (this.options.className) {
      classes.push(this.options.className);
    }
    style = this.getStyle();
    classes = $.map(classes, function(n) {
      return pluginClassName + "-" + style.name + "-" + n;
    }).join(" ");
    return this.userContainer.attr("class", classes);
  };

  Notification.prototype.run = function(data, options) {
    var d, datas, name, type, value;
    if ($.isPlainObject(options)) {
      $.extend(this.options, options);
    } else if ($.type(options) === "string") {
      this.options.className = options;
    }
    if (this.container && !data) {
      this.show(false);
      return;
    } else if (!this.container && !data) {
      return;
    }
    datas = {};
    if ($.isPlainObject(data)) {
      datas = data;
    } else {
      datas[blankFieldName] = data;
    }
    for (name in datas) {
      d = datas[name];
      type = this.userFields[name];
      if (!type) {
        continue;
      }
      if (type === "text") {
        d = encode(d);
        if (this.options.breakNewLines) {
          d = d.replace(/\n/g, '<br/>');
        }
      }
      value = name === blankFieldName ? '' : '=' + name;
      find(this.userContainer, "[data-notify-" + type + value + "]").html(d);
    }
    this.updateClasses();
    if (this.elem) {
      this.setElementPosition();
    } else {
      this.setGlobalPosition();
    }
    this.show(true);
    if (this.options.autoHide) {
      clearTimeout(this.autohideTimer);
      this.autohideTimer = setTimeout(this.show.bind(this, false), this.options.autoHideDelay);
    }
  };

  Notification.prototype.destroy = function() {
    return this.wrapper.remove();
  };

  $[pluginName] = function(elem, data, options) {
    if ((elem && elem.nodeName) || elem.jquery) {
      $(elem)[pluginName](data, options);
    } else {
      options = data;
      data = elem;
      new Notification(null, data, options);
    }
    return elem;
  };

  $.fn[pluginName] = function(data, options) {
    $(this).each(function() {
      var inst;
      inst = getAnchorElement($(this)).data(pluginClassName);
      if (inst) {
        return inst.run(data, options);
      } else {
        return new Notification($(this), data, options);
      }
    });
    return this;
  };

  $.extend($[pluginName], {
    defaults: defaults,
    addStyle: addStyle,
    pluginOptions: pluginOptions,
    getStyle: getStyle,
    insertCSS: insertCSS
  });

  //always include the default bootstrap style
  addStyle("bootstrap", {
    html: "<div>\n<span data-notify-text></span>\n</div>",
    classes: {
      base: {
        "font-weight": "bold",
        "padding": "8px 15px 8px 14px",
        "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
        "background-color": "#fcf8e3",
        "border": "1px solid #fbeed5",
        "border-radius": "4px",
        "white-space": "nowrap",
        "padding-left": "25px",
        "background-repeat": "no-repeat",
        "background-position": "3px 7px"
      },
      error: {
        "color": "#B94A48",
        "background-color": "#F2DEDE",
        "border-color": "#EED3D7",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
      },
      success: {
        "color": "#468847",
        "background-color": "#DFF0D8",
        "border-color": "#D6E9C6",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
      },
      info: {
        "color": "#3A87AD",
        "background-color": "#D9EDF7",
        "border-color": "#BCE8F1",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
      },
      warn: {
        "color": "#C09853",
        "background-color": "#FCF8E3",
        "border-color": "#FBEED5",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
      }
    }
  });

  $(function() {
    insertCSS(coreStyle.css).attr("id", "core-notify");
    $(document).on("click", "." + pluginClassName + "-hidable", function(e) {
      return $(this).trigger("notify-hide");
    });
    return $(document).on("notify-hide", "." + pluginClassName + "-wrapper", function(e) {
      var elem = $(this).data(pluginClassName);
      if(elem) {
        elem.show(false);
      }
    });
  });

}).call(this, window, document, jQuery);
;/*

 Counter block mode compatible with  Dr Brian Gladman fileenc.c
 derived from CryptoJS.mode.CTR
 Jan Hruby jhruby.web@gmail.com

 (c) 2012 by C?dric Mesnil. All rights reserved.

 Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

     - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
     - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 Yusuke Kawasaki
 @license MIT
 @constructor
 @see https://github.com/kawanet/event-lite
 @see http://kawanet.github.io/event-lite/EventLite.html
 @example
 var EventLite = require("event-lite");

 function MyClass() {...}             // your class

 EventLite.mixin(MyClass.prototype);  // import event methods

 var obj = new MyClass();
 obj.on("foo", function() {...});     // add event listener
 obj.once("bar", function() {...});   // add one-time event listener
 obj.emit("foo");                     // dispatch event
 obj.emit("bar");                     // dispatch another event
 obj.off("foo");                      // remove event listener
 MIT License (c) copyright 2013-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors  MIT License (c) copyright 2010-2014 original author or authors */
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(y,e,l){if(l.get||l.set)throw new TypeError("ES3 does not support getters and setters.");y!=Array.prototype&&y!=Object.prototype&&(y[e]=l.value)};$jscomp.getGlobal=function(y){return"undefined"!=typeof window&&window===y?y:"undefined"!=typeof global&&null!=global?global:y};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(y){return $jscomp.SYMBOL_PREFIX+(y||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var y=$jscomp.global.Symbol.iterator;y||(y=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[y]&&$jscomp.defineProperty(Array.prototype,y,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(y){var e=0;return $jscomp.iteratorPrototype(function(){return e<y.length?{done:!1,value:y[e++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(y){$jscomp.initSymbolIterator();y={next:y};y[$jscomp.global.Symbol.iterator]=function(){return this};return y};$jscomp.makeIterator=function(y){$jscomp.initSymbolIterator();var e=y[Symbol.iterator];return e?e.call(y):$jscomp.arrayIterator(y)};
$jscomp.polyfill=function(y,e,l,h){if(e){l=$jscomp.global;y=y.split(".");for(h=0;h<y.length-1;h++){var b=y[h];b in l||(l[b]={});l=l[b]}y=y[y.length-1];h=l[y];e=e(h);e!=h&&null!=e&&$jscomp.defineProperty(l,y,{configurable:!0,writable:!0,value:e})}};$jscomp.EXPOSE_ASYNC_EXECUTOR=!0;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(y){function e(){this.batch_=null}if(y&&!$jscomp.FORCE_POLYFILL_PROMISE)return y;e.prototype.asyncExecute=function(a){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(a);return this};e.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var l=$jscomp.global.setTimeout;e.prototype.asyncExecuteFunction=function(a){l(a,0)};e.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=
this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(g){this.asyncThrow_(g)}}}this.batch_=null};e.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var h=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(c){b.reject(c)}};h.prototype.createResolveAndReject_=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=
!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};h.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof h)this.settleSameAsPromise_(a);else{var b;a:switch(typeof a){case "object":b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};h.prototype.resolveToNonPromiseObj_=function(a){var b=void 0;try{b=a.then}catch(c){this.reject_(c);return}"function"==
typeof b?this.settleSameAsThenable_(b,a):this.fulfill_(a)};h.prototype.reject_=function(a){this.settle_(2,a)};h.prototype.fulfill_=function(a){this.settle_(1,a)};h.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};h.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=this.onSettledCallbacks_,b=0;b<a.length;++b)a[b].call(),
a[b]=null;this.onSettledCallbacks_=null}};var b=new e;h.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};h.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(g){c.reject(g)}};h.prototype.then=function(a,b){function c(c,a){return"function"==typeof c?function(a){try{d(c(a))}catch(r){k(r)}}:a}var d,k,m=new h(function(c,a){d=c;k=a});this.callWhenSettled_(c(a,d),
c(b,k));return m};h.prototype["catch"]=function(a){return this.then(void 0,a)};h.prototype.callWhenSettled_=function(a,d){function c(){switch(g.state_){case 1:a(g.result_);break;case 2:d(g.result_);break;default:throw Error("Unexpected state: "+g.state_);}}var g=this;null==this.onSettledCallbacks_?b.asyncExecute(c):this.onSettledCallbacks_.push(function(){b.asyncExecute(c)})};h.resolve=function(a){return a instanceof h?a:new h(function(b,c){b(a)})};h.reject=function(a){return new h(function(b,c){c(a)})};
h.race=function(a){return new h(function(b,c){for(var d=$jscomp.makeIterator(a),k=d.next();!k.done;k=d.next())h.resolve(k.value).callWhenSettled_(b,c)})};h.all=function(a){var b=$jscomp.makeIterator(a),c=b.next();return c.done?h.resolve([]):new h(function(a,d){function g(c){return function(b){k[c]=b;p--;0==p&&a(k)}}var k=[],p=0;do k.push(void 0),p++,h.resolve(c.value).callWhenSettled_(g(k.length-1),d),c=b.next();while(!c.done)})};$jscomp.EXPOSE_ASYNC_EXECUTOR&&(h.$jscomp$new$AsyncExecutor=function(){return new e});
return h},"es6-impl","es3");$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(y,e){$jscomp.initSymbolIterator();y instanceof String&&(y+="");var l=0,h={next:function(){if(l<y.length){var b=l++;return{value:e(b,y[b]),done:!1}}h.next=function(){return{done:!0,value:void 0}};return h.next()}};h[Symbol.iterator]=function(){return h};return h};
$jscomp.polyfill("Array.prototype.keys",function(y){return y?y:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");$jscomp.polyfill("Number.isFinite",function(y){return y?y:function(e){return"number"!==typeof e?!1:!isNaN(e)&&Infinity!==e&&-Infinity!==e}},"es6-impl","es3");$jscomp.polyfill("Number.isInteger",function(y){return y?y:function(e){return Number.isFinite(e)?e===Math.floor(e):!1}},"es6-impl","es3");
$jscomp.polyfill("Array.prototype.fill",function(y){return y?y:function(e,l,h){var b=this.length||0;0>l&&(l=Math.max(0,b+l));if(null==h||h>b)h=b;h=Number(h);0>h&&(h=Math.max(0,b+h));for(l=Number(l||0);l<h;l++)this[l]=e;return this}},"es6-impl","es3");
$jscomp.checkStringArgs=function(y,e,l){if(null==y)throw new TypeError("The 'this' value for String.prototype."+l+" must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype."+l+" must not be a regular expression");return y+""};$jscomp.polyfill("String.prototype.includes",function(y){return y?y:function(e,l){return-1!==$jscomp.checkStringArgs(this,e,"includes").indexOf(e,l||0)}},"es6-impl","es3");
$jscomp.owns=function(y,e){return Object.prototype.hasOwnProperty.call(y,e)};
$jscomp.polyfill("WeakMap",function(y){function e(a){$jscomp.owns(a,h)||$jscomp.defineProperty(a,h,{value:{}})}function l(a){var c=Object[a];c&&(Object[a]=function(a){e(a);return c(a)})}if(function(){if(!y||!Object.seal)return!1;try{var a=Object.seal({}),c=Object.seal({}),b=new y([[a,2],[c,3]]);if(2!=b.get(a)||3!=b.get(c))return!1;b["delete"](a);b.set(c,4);return!b.has(a)&&4==b.get(c)}catch(k){return!1}}())return y;var h="$jscomp_hidden_"+Math.random().toString().substring(2);l("freeze");l("preventExtensions");
l("seal");var b=0,a=function(a){this.id_=(b+=Math.random()+1).toString();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();a=$jscomp.makeIterator(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}};a.prototype.set=function(a,c){e(a);if(!$jscomp.owns(a,h))throw Error("WeakMap key fail: "+a);a[h][this.id_]=c;return this};a.prototype.get=function(a){return $jscomp.owns(a,h)?a[h][this.id_]:void 0};a.prototype.has=function(a){return $jscomp.owns(a,h)&&$jscomp.owns(a[h],this.id_)};a.prototype["delete"]=
function(a){return $jscomp.owns(a,h)&&$jscomp.owns(a[h],this.id_)?delete a[h][this.id_]:!1};return a},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.polyfill("Map",function(y){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!y||!y.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),a=new y($jscomp.makeIterator([[c,"s"]]));if("s"!=a.get(c)||1!=a.size||a.get({x:4})||a.set({x:4},"t")!=a||2!=a.size)return!1;var b=a.entries(),d=b.next();if(d.done||d.value[0]!=c||"s"!=d.value[1])return!1;d=b.next();return d.done||4!=d.value[0].x||"t"!=d.value[1]||!b.next().done?!1:!0}catch(n){return!1}}())return y;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var e=new WeakMap,l=function(c){this.data_={};this.head_=a();this.size=0;if(c){c=$jscomp.makeIterator(c);for(var b;!(b=c.next()).done;)b=b.value,this.set(b[0],b[1])}};l.prototype.set=function(c,a){var b=h(this,c);b.list||(b.list=this.data_[b.id]=[]);b.entry?b.entry.value=a:(b.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:c,value:a},b.list.push(b.entry),this.head_.previous.next=b.entry,this.head_.previous=b.entry,this.size++);return this};l.prototype["delete"]=
function(c){c=h(this,c);return c.entry&&c.list?(c.list.splice(c.index,1),c.list.length||delete this.data_[c.id],c.entry.previous.next=c.entry.next,c.entry.next.previous=c.entry.previous,c.entry.head=null,this.size--,!0):!1};l.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=a();this.size=0};l.prototype.has=function(c){return!!h(this,c).entry};l.prototype.get=function(c){return(c=h(this,c).entry)&&c.value};l.prototype.entries=function(){return b(this,function(c){return[c.key,
c.value]})};l.prototype.keys=function(){return b(this,function(c){return c.key})};l.prototype.values=function(){return b(this,function(c){return c.value})};l.prototype.forEach=function(c,a){for(var b=this.entries(),d;!(d=b.next()).done;)d=d.value,c.call(a,d[1],d[0],this)};l.prototype[Symbol.iterator]=l.prototype.entries;var h=function(c,a){var b;b=a&&typeof a;"object"==b||"function"==b?e.has(a)?b=e.get(a):(b=""+ ++d,e.set(a,b)):b="p_"+a;var g=c.data_[b];if(g&&$jscomp.owns(c.data_,b))for(var n=0;n<
g.length;n++){var p=g[n];if(a!==a&&p.key!==p.key||a===p.key)return{id:b,list:g,index:n,entry:p}}return{id:b,list:g,index:-1,entry:void 0}},b=function(c,a){var b=c.head_;return $jscomp.iteratorPrototype(function(){if(b){for(;b.head!=c.head_;)b=b.previous;for(;b.next!=b.head;)return b=b.next,{done:!1,value:a(b)};b=null}return{done:!0,value:void 0}})},a=function(){var c={};return c.previous=c.next=c.head=c},d=0;return l},"es6-impl","es3");
(function(y){"object"===typeof exports&&"undefined"!==typeof module?module.exports=y():"function"===typeof define&&define.amd?define([],y):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).autobahn=y()})(function(){return function e(l,h,b){function a(c,k){if(!h[c]){if(!l[c]){var g="function"==typeof require&&require;if(!k&&g)return g(c,!0);if(d)return d(c,!0);g=Error("Cannot find module '"+c+"'");throw g.code="MODULE_NOT_FOUND",g;}g=h[c]={exports:{}};
l[c][0].call(g.exports,function(b){var d=l[c][1][b];return a(d?d:b)},g,g.exports,e,l,h,b)}return h[c].exports}for(var d="function"==typeof require&&require,c=0;c<b.length;c++)a(b[c]);return a}({1:[function(e,l,h){var b=e("crypto-js");h.sign=function(a,d){return b.HmacSHA256(d,a).toString(b.enc.Base64)};h.derive_key=function(a,d,c,g){return b.PBKDF2(a,d,{keySize:(g||32)/4,iterations:c||1E3,hasher:b.algo.SHA256}).toString(b.enc.Base64)}},{"crypto-js":38}],2:[function(e,l,h){e("when");e("when/function");
h.auth=function(b,a,d){var c=b.defer();navigator.id.watch({loggedInUser:a,onlogin:function(a){c.resolve(a)},onlogout:function(){b.leave("wamp.close.logout")}});return c.promise.then?c.promise:c}},{when:120,"when/function":96}],3:[function(e,l,h){var b="undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{};e("./polyfill.js");l=e("../package.json");var a=e("when"),d=e("msgpack-lite");"AUTOBAHN_DEBUG"in b&&AUTOBAHN_DEBUG&&(e("when/monitor/console"),"console"in
b&&console.log("AutobahnJS debug enabled"));var b=e("./util.js"),c=e("./log.js"),g=e("./session.js"),k=e("./connection.js"),m=e("./configure.js"),n=e("./serializer.js"),p=e("./auth/persona.js");e=e("./auth/cra.js");h.version=l.version;h.transports=m.transports;h.Connection=k.Connection;h.Session=g.Session;h.Invocation=g.Invocation;h.Event=g.Event;h.Result=g.Result;h.Error=g.Error;h.Subscription=g.Subscription;h.Registration=g.Registration;h.Publication=g.Publication;h.serializer=n;h.auth_persona=
p.auth;h.auth_cra=e;h.when=a;h.msgpack=d;h.util=b;h.log=c},{"../package.json":21,"./auth/cra.js":1,"./auth/persona.js":2,"./configure.js":4,"./connection.js":5,"./log.js":6,"./polyfill.js":7,"./serializer.js":15,"./session.js":16,"./util.js":20,"msgpack-lite":65,when:120,"when/monitor/console":118}],4:[function(e,l,h){function b(){this._repository={}}b.prototype.register=function(a,c){this._repository[a]=c};b.prototype.isRegistered=function(a){return this._repository[a]?!0:!1};b.prototype.get=function(a){if(void 0!==
this._repository[a])return this._repository[a];throw"no such transport: "+a;};b.prototype.list=function(){var a=[],c;for(c in this._repository)a.push(c);return a};l=new b;var a=e("./transport/websocket.js");l.register("websocket",a.Factory);a=e("./transport/longpoll.js");l.register("longpoll",a.Factory);e=e("./transport/rawsocket.js");l.register("rawsocket",e.Factory);h.transports=l},{"./transport/longpoll.js":17,"./transport/rawsocket.js":18,"./transport/websocket.js":19}],5:[function(e,l,h){(function(b){var a=
e("when"),d=e("./session.js"),c=e("./util.js"),g=e("./log.js"),k=e("./autobahn.js"),m=function(c){(this._options=c)&&c.use_es6_promises?"Promise"in b?this._defer=function(){var c={};c.promise=new Promise(function(a,b){c.resolve=a;c.reject=b});return c}:(g.debug("Warning: ES6 promises requested, but not found! Falling back to whenjs."),this._defer=a.defer):this._defer=c&&c.use_deferred?c.use_deferred:a.defer;this._options.transports||(this._options.transports=[{type:"websocket",url:this._options.url}]);
this._transport_factories=[];this._init_transport_factories();this._session_close_message=this._session_close_reason=this._session=null;this._retry_if_unreachable=void 0!==this._options.retry_if_unreachable?this._options.retry_if_unreachable:!0;this._max_retries="undefined"!==typeof this._options.max_retries?this._options.max_retries:15;this._initial_retry_delay=this._options.initial_retry_delay||1.5;this._max_retry_delay=this._options.max_retry_delay||300;this._retry_delay_growth=this._options.retry_delay_growth||
1.5;this._retry_delay_jitter=this._options.retry_delay_jitter||.1;this._connect_successes=0;this._retry=!1;this._retry_count=0;this._retry_delay=this._initial_retry_delay;this._is_retrying=!1;this._retry_timer=null};m.prototype._create_transport=function(){for(var c=0;c<this._transport_factories.length;++c){var a=this._transport_factories[c];g.debug("trying to create WAMP transport of type: "+a.type);try{var b=a.create();if(b)return g.debug("using WAMP transport type: "+a.type),b}catch(r){g.debug("could not create WAMP transport '"+
a.type+"': "+r)}}return null};m.prototype._init_transport_factories=function(){var a,b,f;c.assert(this._options.transports,"No transport.factory specified");for(var d=0;d<this._options.transports.length;++d){a=this._options.transports[d];a.url||(a.url=this._options.url);a.serializers||(a.serializers=this._options.serializers);a.protocols||(a.protocols=this._options.protocols);c.assert(a.type,"No transport.type specified");c.assert("string"===typeof a.type,"transport.type must be a string");try{if(f=
k.transports.get(a.type))b=new f(a),this._transport_factories.push(b)}catch(z){console.error(z)}}};m.prototype._autoreconnect_reset_timer=function(){this._retry_timer&&clearTimeout(this._retry_timer);this._retry_timer=null};m.prototype._autoreconnect_reset=function(){this._autoreconnect_reset_timer();this._retry_count=0;this._retry_delay=this._initial_retry_delay;this._is_retrying=!1};m.prototype._autoreconnect_advance=function(){this._retry_delay_jitter&&(this._retry_delay=c.rand_normal(this._retry_delay,
this._retry_delay*this._retry_delay_jitter));this._retry_delay>this._max_retry_delay&&(this._retry_delay=this._max_retry_delay);this._retry_count+=1;var a;a=this._retry&&(-1===this._max_retries||this._retry_count<=this._max_retries)?{count:this._retry_count,delay:this._retry_delay,will_retry:!0}:{count:null,delay:null,will_retry:!1};this._retry_delay_growth&&(this._retry_delay*=this._retry_delay_growth);return a};m.prototype.open=function(){function c(){a._transport=a._create_transport();if(a._transport)a._session=
new d.Session(a._transport,a._defer,a._options.onchallenge),a._session_close_reason=null,a._session_close_message=null,a._transport.onopen=function(){a._autoreconnect_reset();a._connect_successes+=1;a._session.join(a._options.realm,a._options.authmethods,a._options.authid,a._options.authextra)},a._session.onjoin=function(c){if(a.onopen)try{c.transport=a._transport.info,a.onopen(a._session,c)}catch(r){g.debug("Exception raised from app code while firing Connection.onopen()",r)}},a._session.onleave=
function(c,b){a._session_close_reason=c;a._session_close_message=b.message||"";a._retry=!1;a._transport.close(1E3)},a._transport.onclose=function(b){a._autoreconnect_reset_timer();a._transport=null;0===a._connect_successes?(b="unreachable",a._retry_if_unreachable||(a._retry=!1)):b=b.wasClean?"closed":"lost";var f=a._autoreconnect_advance();if(a.onclose){var d={reason:a._session_close_reason,message:a._session_close_message,retry_delay:f.delay,retry_count:f.count,will_retry:f.will_retry};try{var k=
a.onclose(b,d)}catch(D){g.debug("Exception raised from app code while firing Connection.onclose()",D)}}a._session&&(a._session._id=null,a._session=null,a._session_close_reason=null,a._session_close_message=null);a._retry&&!k&&(f.will_retry?(a._is_retrying=!0,g.debug("retrying in "+f.delay+" s"),a._retry_timer=setTimeout(c,1E3*f.delay)):g.debug("giving up trying to reconnect"))};else if(a._retry=!1,a.onclose)a.onclose("unsupported",{reason:null,message:null,retry_delay:null,retry_count:null,will_retry:!1})}
var a=this;if(a._transport)throw"connection already open (or opening)";a._autoreconnect_reset();a._retry=!0;c()};m.prototype.close=function(a,c){if(!this._transport&&!this._is_retrying)throw"connection already closed";this._retry=!1;this._session&&this._session.isOpen?this._session.leave(a,c):this._transport&&this._transport.close(1E3)};Object.defineProperty(m.prototype,"defer",{get:function(){return this._defer}});Object.defineProperty(m.prototype,"session",{get:function(){return this._session}});
Object.defineProperty(m.prototype,"isOpen",{get:function(){return this._session&&this._session.isOpen?!0:!1}});Object.defineProperty(m.prototype,"isConnected",{get:function(){return this._transport?!0:!1}});Object.defineProperty(m.prototype,"transport",{get:function(){return this._transport?this._transport:{info:{type:"none",url:null,protocol:null}}}});Object.defineProperty(m.prototype,"isRetrying",{get:function(){return this._is_retrying}});h.Connection=m}).call(this,"undefined"!==typeof global?
global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"./autobahn.js":3,"./log.js":6,"./session.js":16,"./util.js":20,when:120}],6:[function(e,l,h){(function(b){var a=function(){};"AUTOBAHN_DEBUG"in b&&AUTOBAHN_DEBUG&&"console"in b&&(a=function(){console.log.apply(console,arguments)});h.debug=a}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{}],7:[function(e,l,h){e("./polyfill/object.js");e("./polyfill/array.js");
e("./polyfill/string.js");e("./polyfill/function.js");e("./polyfill/console.js");e("./polyfill/typedarray.js");e("./polyfill/json.js")},{"./polyfill/array.js":8,"./polyfill/console.js":9,"./polyfill/function.js":10,"./polyfill/json.js":11,"./polyfill/object.js":12,"./polyfill/string.js":13,"./polyfill/typedarray.js":14}],8:[function(e,l,h){"function"!==typeof Array.prototype.reduce&&(Array.prototype.reduce=function(b){var a,d,c,g;if(null===this||"undefined"===typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");
if("function"!==typeof b)throw new TypeError(b+" is not a function");d=Object(this);a=d.length>>>0;g=0;if(2<=arguments.length)c=arguments[1];else{for(;g<a&&!g in d;)g++;if(g>=a)throw new TypeError("Reduce of empty array with no initial value");c=d[g++]}for(;g<a;g++)g in d&&(c=b(c,d[g],g,d));return c});"indexOf"in Array.prototype||(Array.prototype.indexOf=function(b,a){void 0===a&&(a=0);0>a&&(a+=this.length);0>a&&(a=0);for(var d=this.length;a<d;a++)if(a in this&&this[a]===b)return a;return-1});"lastIndexOf"in
Array.prototype||(Array.prototype.lastIndexOf=function(b,a){void 0===a&&(a=this.length-1);0>a&&(a+=this.length);a>this.length-1&&(a=this.length-1);for(a++;0<a--;)if(a in this&&this[a]===b)return a;return-1});"forEach"in Array.prototype||(Array.prototype.forEach=function(b,a){for(var d=0,c=this.length;d<c;d++)d in this&&b.call(a,this[d],d,this)});"map"in Array.prototype||(Array.prototype.map=function(b,a){for(var d=Array(this.length),c=0,g=this.length;c<g;c++)c in this&&(d[c]=b.call(a,this[c],c,this));
return d});"filter"in Array.prototype||(Array.prototype.filter=function(b,a){for(var d=[],c,g=0,k=this.length;g<k;g++)g in this&&b.call(a,c=this[g],g,this)&&d.push(c);return d});"every"in Array.prototype||(Array.prototype.every=function(b,a){for(var d=0,c=this.length;d<c;d++)if(d in this&&!b.call(a,this[d],d,this))return!1;return!0});"some"in Array.prototype||(Array.prototype.some=function(b,a){for(var d=0,c=this.length;d<c;d++)if(d in this&&b.call(a,this[d],d,this))return!0;return!1});"function"!==
typeof Array.prototype.reduceRight&&(Array.prototype.reduceRight=function(b){if(null===this||"undefined"===typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof b)throw new TypeError(b+" is not a function");var a=Object(this),d=(a.length>>>0)-1,c;if(2<=arguments.length)c=arguments[1];else{for(;0<=d&&!d in a;)d--;if(0>d)throw new TypeError("Reduce of empty array with no initial value");c=a[d--]}for(;0<=d;d--)d in a&&(c=b(c,a[d],d,a));return c})},
{}],9:[function(e,l,h){(function(b){b||(b=window.console={log:function(a,b,c,g,k){},info:function(a,b,c,g,k){},warn:function(a,b,c,g,k){},error:function(a,b,c,g,k){},assert:function(a,b){}});"object"===typeof b.log&&(b.log=Function.prototype.call.bind(b.log,b),b.info=Function.prototype.call.bind(b.info,b),b.warn=Function.prototype.call.bind(b.warn,b),b.error=Function.prototype.call.bind(b.error,b),b.debug=Function.prototype.call.bind(b.info,b));"group"in b||(b.group=function(a){b.info("\n--- "+a+
" ---\n")});"groupEnd"in b||(b.groupEnd=function(){b.log("\n")});"assert"in b||(b.assert=function(a,b){if(!a)try{throw Error("assertion failed: "+b);}catch(c){setTimeout(function(){throw c;},0)}});"time"in b||function(){var a={};b.time=function(b){a[b]=(new Date).getTime()};b.timeEnd=function(d){var c=(new Date).getTime();b.info(d+": "+(d in a?c-a[d]:0)+"ms")}}()})("undefined"!==typeof console?console:void 0)},{}],10:[function(e,l,h){Function.prototype.bind||(Function.prototype.bind=function(b){var a=
this,d=Array.prototype.slice.call(arguments,1);return function(){return a.apply(b,Array.prototype.concat.apply(d,arguments))}})},{}],11:[function(e,l,h){"object"!==typeof JSON&&(JSON={});(function(){function b(a){return 10>a?"0"+a:a}function a(a){g.lastIndex=0;return g.test(a)?'"'+a.replace(g,function(a){var c=n[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function d(c,b){var f,g,n,r,F=k,e,A=b[c];A&&"object"===typeof A&&"function"===typeof A.toJSON&&
(A=A.toJSON(c));"function"===typeof p&&(A=p.call(b,c,A));switch(typeof A){case "string":return a(A);case "number":return isFinite(A)?String(A):"null";case "boolean":case "null":return String(A);case "object":if(!A)return"null";k+=m;e=[];if("[object Array]"===Object.prototype.toString.apply(A)){r=A.length;for(f=0;f<r;f+=1)e[f]=d(f,A)||"null";n=0===e.length?"[]":k?"[\n"+k+e.join(",\n"+k)+"\n"+F+"]":"["+e.join(",")+"]";k=F;return n}if(p&&"object"===typeof p)for(r=p.length,f=0;f<r;f+=1)"string"===typeof p[f]&&
(g=p[f],(n=d(g,A))&&e.push(a(g)+(k?": ":":")+n));else for(g in A)Object.prototype.hasOwnProperty.call(A,g)&&(n=d(g,A))&&e.push(a(g)+(k?": ":":")+n);n=0===e.length?"{}":k?"{\n"+k+e.join(",\n"+k)+"\n"+F+"}":"{"+e.join(",")+"}";k=F;return n}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+b(this.getUTCMonth()+1)+"-"+b(this.getUTCDate())+"T"+b(this.getUTCHours())+":"+b(this.getUTCMinutes())+":"+b(this.getUTCSeconds())+
"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var c,g,k,m,n,p;"function"!==typeof JSON.stringify&&(g=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(a,c,b){var f;m=k="";if("number"===typeof b)for(f=0;f<b;f+=1)m+=" ";else"string"===typeof b&&(m=b);if((p=
c)&&"function"!==typeof c&&("object"!==typeof c||"number"!==typeof c.length))throw Error("JSON.stringify");return d("",{"":a})});"function"!==typeof JSON.parse&&(c=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(a,b){function f(a,c){var d,g,k=a[c];if(k&&"object"===typeof k)for(d in k)Object.prototype.hasOwnProperty.call(k,d)&&(g=f(k,d),void 0!==g?k[d]=g:delete k[d]);return b.call(a,c,k)}var d;a=String(a);c.lastIndex=0;
c.test(a)&&(a=a.replace(c,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"===typeof b?f({"":d},""):d;throw new SyntaxError("JSON.parse");})})();h.JSON=JSON},{}],12:[function(e,l,h){Object.create||(Object.create=function(){function b(){}return function(a){if(1!=
arguments.length)throw Error("Object.create implementation only accepts one parameter.");b.prototype=a;return new b}}());Object.keys||(Object.keys=function(){var b=Object.prototype.hasOwnProperty,a=!{toString:null}.propertyIsEnumerable("toString"),d="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),c=d.length;return function(g){if("object"!==typeof g&&("function"!==typeof g||null===g))throw new TypeError("Object.keys called on non-object");
var k=[],m;for(m in g)b.call(g,m)&&k.push(m);if(a)for(m=0;m<c;m++)b.call(g,d[m])&&k.push(d[m]);return k}}())},{}],13:[function(e,l,h){"trim"in String.prototype||(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")})},{}],14:[function(e,l,h){"undefined"===typeof Uint8Array&&function(b,a){function d(a){switch(typeof a){case "undefined":return"undefined";case "boolean":return"boolean";case "number":return"number";case "string":return"string";default:return null===a?"null":
"object"}}function c(a){return Object.prototype.toString.call(a).replace(/^\[object *|\]$/g,"")}function g(a){return"function"===typeof a}function k(a){if(null===a||void 0===a)throw TypeError();return Object(a)}function m(a){function c(c){Object.defineProperty(a,c,{get:function(){return a._getter(c)},set:function(b){a._setter(c,b)},enumerable:!0,configurable:!1})}if(1E5<a.length)throw RangeError("Array too large for polyfill");var b;for(b=0;b<a.length;b+=1)c(b)}function n(a,c){var b=32-c;return a<<
b>>b}function p(a,c){var b=32-c;return a<<b>>>b}function f(a){return[a&255]}function r(a){return n(a[0],8)}function e(a){return[a&255]}function h(a){return p(a[0],8)}function l(a){a=S(Number(a));return[0>a?0:255<a?255:a&255]}function w(a){return[a>>8&255,a&255]}function F(a){return n(a[0]<<8|a[1],16)}function B(a){return[a>>8&255,a&255]}function A(a){return p(a[0]<<8|a[1],16)}function L(a){return[a>>24&255,a>>16&255,a>>8&255,a&255]}function G(a){return n(a[0]<<24|a[1]<<16|a[2]<<8|a[3],32)}function J(a){return[a>>
24&255,a>>16&255,a>>8&255,a&255]}function C(a){return p(a[0]<<24|a[1]<<16|a[2]<<8|a[3],32)}function E(a,c,b){function f(a){var c=v(a);a-=c;return.5>a?c:.5<a?c+1:c%2?c+1:c}var d=(1<<c-1)-1,q,g,k;a!==a?(g=(1<<c)-1,k=P(2,b-1),q=0):Infinity===a||-Infinity===a?(g=(1<<c)-1,k=0,q=0>a?1:0):0===a?(k=g=0,q=-Infinity===1/a?1:0):(q=0>a,a=u(a),a>=P(2,1-d)?(g=T(v(t(a)/M),1023),k=f(a/P(2,g)*P(2,b)),2<=k/P(2,b)&&(g+=1,k=1),g>d?(g=(1<<c)-1,k=0):(g+=d,k-=P(2,b))):(g=0,k=f(a/P(2,1-d-b))));for(a=[];b;--b)a.push(k%2?
1:0),k=v(k/2);for(b=c;b;--b)a.push(g%2?1:0),g=v(g/2);a.push(q?1:0);a.reverse();c=a.join("");for(q=[];c.length;)q.push(parseInt(c.substring(0,8),2)),c=c.substring(8);return q}function H(a,c,b){var f=[],d,q,g;for(d=a.length;d;--d)for(g=a[d-1],q=8;q;--q)f.push(g%2?1:0),g>>=1;f.reverse();q=f.join("");a=(1<<c-1)-1;f=parseInt(q.substring(0,1),2)?-1:1;d=parseInt(q.substring(1,1+c),2);q=parseInt(q.substring(1+c),2);return d===(1<<c)-1?0!==q?NaN:Infinity*f:0<d?f*P(2,d-a)*(1+q/P(2,b)):0!==q?f*P(2,-(a-1))*(q/
P(2,b)):0>f?-0:0}function I(a){return H(a,11,52)}function O(a){return E(a,11,52)}function Q(a){return H(a,8,23)}function K(a){return E(a,8,23)}var M=Math.LN2,u=Math.abs,v=Math.floor,t=Math.log,q=Math.max,T=Math.min,P=Math.pow,S=Math.round;(function(){var a=Object.defineProperty,c;try{c=Object.defineProperty({},"x",{})}catch(ja){c=!1}a&&c||(Object.defineProperty=function(c,b,f){if(a)try{return a(c,b,f)}catch(ba){}if(c!==Object(c))throw TypeError("Object.defineProperty called on non-object");Object.prototype.__defineGetter__&&
"get"in f&&Object.prototype.__defineGetter__.call(c,b,f.get);Object.prototype.__defineSetter__&&"set"in f&&Object.prototype.__defineSetter__.call(c,b,f.set);"value"in f&&(c[b]=f.value);return c})})();(function(){function n(a){a>>=0;if(0>a)throw RangeError("ArrayBuffer size is not a small enough positive integer.");Object.defineProperty(this,"byteLength",{value:a});Object.defineProperty(this,"_bytes",{value:Array(a)});for(var c=0;c<a;c+=1)this._bytes[c]=0}function p(){if(!arguments.length||"object"!==
typeof arguments[0])return function(a){a>>=0;if(0>a)throw RangeError("length is not a small enough positive integer.");Object.defineProperty(this,"length",{value:a});Object.defineProperty(this,"byteLength",{value:a*this.BYTES_PER_ELEMENT});Object.defineProperty(this,"buffer",{value:new n(this.byteLength)});Object.defineProperty(this,"byteOffset",{value:0})}.apply(this,arguments);if(1<=arguments.length&&"object"===d(arguments[0])&&arguments[0]instanceof p)return function(a){if(this.constructor!==a.constructor)throw TypeError();
var c=a.length*this.BYTES_PER_ELEMENT;Object.defineProperty(this,"buffer",{value:new n(c)});Object.defineProperty(this,"byteLength",{value:c});Object.defineProperty(this,"byteOffset",{value:0});Object.defineProperty(this,"length",{value:a.length});for(c=0;c<this.length;c+=1)this._setter(c,a._getter(c))}.apply(this,arguments);if(1<=arguments.length&&"object"===d(arguments[0])&&!(arguments[0]instanceof p)&&!(arguments[0]instanceof n||"ArrayBuffer"===c(arguments[0])))return function(a){var c=a.length*
this.BYTES_PER_ELEMENT;Object.defineProperty(this,"buffer",{value:new n(c)});Object.defineProperty(this,"byteLength",{value:c});Object.defineProperty(this,"byteOffset",{value:0});Object.defineProperty(this,"length",{value:a.length});for(c=0;c<this.length;c+=1)this._setter(c,Number(a[c]))}.apply(this,arguments);if(1<=arguments.length&&"object"===d(arguments[0])&&(arguments[0]instanceof n||"ArrayBuffer"===c(arguments[0])))return function(a,c,b){c>>>=0;if(c>a.byteLength)throw RangeError("byteOffset out of range");
if(c%this.BYTES_PER_ELEMENT)throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");if(void 0===b){var f=a.byteLength-c;if(f%this.BYTES_PER_ELEMENT)throw RangeError("length of buffer minus byteOffset not a multiple of the element size");b=f/this.BYTES_PER_ELEMENT}else b>>>=0,f=b*this.BYTES_PER_ELEMENT;if(c+f>a.byteLength)throw RangeError("byteOffset and length reference an area beyond the end of the buffer");Object.defineProperty(this,"buffer",{value:a});Object.defineProperty(this,
"byteLength",{value:f});Object.defineProperty(this,"byteOffset",{value:c});Object.defineProperty(this,"length",{value:b})}.apply(this,arguments);throw TypeError();}function z(a,c,b){var f=function(){Object.defineProperty(this,"constructor",{value:f});p.apply(this,arguments);m(this)};"__proto__"in f?f.__proto__=p:(f.from=p.from,f.of=p.of);f.BYTES_PER_ELEMENT=a;var d=function(){};d.prototype=P;f.prototype=new d;Object.defineProperty(f.prototype,"BYTES_PER_ELEMENT",{value:a});Object.defineProperty(f.prototype,
"_pack",{value:c});Object.defineProperty(f.prototype,"_unpack",{value:b});return f}b.ArrayBuffer=b.ArrayBuffer||n;Object.defineProperty(p,"from",{value:function(a){return new this(a)}});Object.defineProperty(p,"of",{value:function(){return new this(arguments)}});var P={};p.prototype=P;Object.defineProperty(p.prototype,"_getter",{value:function(a){if(1>arguments.length)throw SyntaxError("Not enough arguments");a>>>=0;if(!(a>=this.length)){var c=[],b,f;b=0;for(f=this.byteOffset+a*this.BYTES_PER_ELEMENT;b<
this.BYTES_PER_ELEMENT;b+=1,f+=1)c.push(this.buffer._bytes[f]);return this._unpack(c)}}});Object.defineProperty(p.prototype,"get",{value:p.prototype._getter});Object.defineProperty(p.prototype,"_setter",{value:function(a,c){if(2>arguments.length)throw SyntaxError("Not enough arguments");a>>>=0;if(!(a>=this.length)){var b=this._pack(c),f,d;f=0;for(d=this.byteOffset+a*this.BYTES_PER_ELEMENT;f<this.BYTES_PER_ELEMENT;f+=1,d+=1)this.buffer._bytes[d]=b[f]}}});Object.defineProperty(p.prototype,"constructor",
{value:p});Object.defineProperty(p.prototype,"copyWithin",{value:function(a,c,b){var f=k(this),d=f.length>>>0,d=q(d,0);a>>=0;a=0>a?q(d+a,0):T(a,d);c>>=0;c=0>c?q(d+c,0):T(c,d);b=void 0===b?d:b>>0;b=0>b?q(d+b,0):T(b,d);d=T(b-c,d-a);from<a&&a<c+d?(b=-1,c=c+d-1,a=a+d-1):b=1;for(;0<count;)f._setter(a,f._getter(c)),c+=b,a+=b,--d;return f}});Object.defineProperty(p.prototype,"every",{value:function(a,c){if(void 0===this||null===this)throw TypeError();var b=Object(this),f=b.length>>>0;if(!g(a))throw TypeError();
for(var d=0;d<f;d++)if(!a.call(c,b._getter(d),d,b))return!1;return!0}});Object.defineProperty(p.prototype,"fill",{value:function(a,c,b){var f=k(this),d=f.length>>>0,d=q(d,0);c>>=0;c=0>c?q(d+c,0):T(c,d);b=void 0===b?d:b>>0;for(d=0>b?q(d+b,0):T(b,d);c<d;)f._setter(c,a),c+=1;return f}});Object.defineProperty(p.prototype,"filter",{value:function(a,c){if(void 0===this||null===this)throw TypeError();var b=Object(this),f=b.length>>>0;if(!g(a))throw TypeError();for(var d=[],q=0;q<f;q++){var k=b._getter(q);
a.call(c,k,q,b)&&d.push(k)}return new this.constructor(d)}});Object.defineProperty(p.prototype,"find",{value:function(a){var c=k(this),b=c.length>>>0;if(!g(a))throw TypeError();for(var f=1<arguments.length?arguments[1]:void 0,d=0;d<b;){var q=c._getter(d);if(a.call(f,q,d,c))return q;++d}}});Object.defineProperty(p.prototype,"findIndex",{value:function(a){var c=k(this),b=c.length>>>0;if(!g(a))throw TypeError();for(var f=1<arguments.length?arguments[1]:void 0,d=0;d<b;){var q=c._getter(d);if(a.call(f,
q,d,c))return d;++d}return-1}});Object.defineProperty(p.prototype,"forEach",{value:function(a,c){if(void 0===this||null===this)throw TypeError();var b=Object(this),f=b.length>>>0;if(!g(a))throw TypeError();for(var d=0;d<f;d++)a.call(c,b._getter(d),d,b)}});Object.defineProperty(p.prototype,"indexOf",{value:function(a){if(void 0===this||null===this)throw TypeError();var c=Object(this),b=c.length>>>0;if(0===b)return-1;var f=0,d;0<arguments.length&&(d=Number(arguments[1]),d!==f?f=0:0!==d&&d!==1/0&&d!==
-(1/0)&&(f=(0<d||-1)*v(u(d))));if(f>=b)return-1;for(f=0<=f?f:q(b-u(f),0);f<b;f++)if(c._getter(f)===a)return f;return-1}});Object.defineProperty(p.prototype,"join",{value:function(a){if(void 0===this||null===this)throw TypeError();for(var c=Object(this),b=c.length>>>0,f=Array(b),d=0;d<b;++d)f[d]=c._getter(d);return f.join(void 0===a?",":a)}});Object.defineProperty(p.prototype,"lastIndexOf",{value:function(a){if(void 0===this||null===this)throw TypeError();var c=Object(this),b=c.length>>>0;if(0===b)return-1;
var f=b;1<arguments.length&&(f=Number(arguments[1]),f!==f?f=0:0!==f&&f!==1/0&&f!==-(1/0)&&(f=(0<f||-1)*v(u(f))));for(b=0<=f?T(f,b-1):b-u(f);0<=b;b--)if(c._getter(b)===a)return b;return-1}});Object.defineProperty(p.prototype,"map",{value:function(a,c){if(void 0===this||null===this)throw TypeError();var b=Object(this),f=b.length>>>0;if(!g(a))throw TypeError();var d=[];d.length=f;for(var q=0;q<f;q++)d[q]=a.call(c,b._getter(q),q,b);return new this.constructor(d)}});Object.defineProperty(p.prototype,"reduce",
{value:function(a){if(void 0===this||null===this)throw TypeError();var c=Object(this),b=c.length>>>0;if(!g(a))throw TypeError();if(0===b&&1===arguments.length)throw TypeError();var f=0,d;for(d=2<=arguments.length?arguments[1]:c._getter(f++);f<b;)d=a.call(void 0,d,c._getter(f),f,c),f++;return d}});Object.defineProperty(p.prototype,"reduceRight",{value:function(a){if(void 0===this||null===this)throw TypeError();var c=Object(this),b=c.length>>>0;if(!g(a))throw TypeError();if(0===b&&1===arguments.length)throw TypeError();
var b=b-1,f;for(f=2<=arguments.length?arguments[1]:c._getter(b--);0<=b;)f=a.call(void 0,f,c._getter(b),b,c),b--;return f}});Object.defineProperty(p.prototype,"reverse",{value:function(){if(void 0===this||null===this)throw TypeError();for(var a=Object(this),c=a.length>>>0,b=v(c/2),f=0,c=c-1;f<b;++f,--c){var d=a._getter(f);a._setter(f,a._getter(c));a._setter(c,d)}return a}});Object.defineProperty(p.prototype,"set",{value:function(a,c){if(1>arguments.length)throw SyntaxError("Not enough arguments");
var b,f,d,q,g,k;if("object"===typeof arguments[0]&&arguments[0].constructor===this.constructor){b=arguments[0];f=arguments[1]>>>0;if(f+b.length>this.length)throw RangeError("Offset plus length of array is out of range");k=this.byteOffset+f*this.BYTES_PER_ELEMENT;f=b.length*this.BYTES_PER_ELEMENT;if(b.buffer===this.buffer){d=[];q=0;for(g=b.byteOffset;q<f;q+=1,g+=1)d[q]=b.buffer._bytes[g];for(q=0;q<f;q+=1,k+=1)this.buffer._bytes[k]=d[q]}else for(q=0,g=b.byteOffset;q<f;q+=1,g+=1,k+=1)this.buffer._bytes[k]=
b.buffer._bytes[g]}else if("object"===typeof arguments[0]&&"undefined"!==typeof arguments[0].length){b=arguments[0];d=b.length>>>0;f=arguments[1]>>>0;if(f+d>this.length)throw RangeError("Offset plus length of array is out of range");for(q=0;q<d;q+=1)g=b[q],this._setter(f+q,Number(g))}else throw TypeError("Unexpected argument type(s)");}});Object.defineProperty(p.prototype,"slice",{value:function(a,c){for(var b=k(this),f=b.length>>>0,d=a>>0,d=0>d?q(f+d,0):T(d,f),g=void 0===c?f:c>>0,f=0>g?q(f+g,0):
T(g,f),g=new b.constructor(f-d),n=0;d<f;){var p=b._getter(d);g._setter(n,p);++d;++n}return g}});Object.defineProperty(p.prototype,"some",{value:function(a,c){if(void 0===this||null===this)throw TypeError();var b=Object(this),f=b.length>>>0;if(!g(a))throw TypeError();for(var d=0;d<f;d++)if(a.call(c,b._getter(d),d,b))return!0;return!1}});Object.defineProperty(p.prototype,"sort",{value:function(a){if(void 0===this||null===this)throw TypeError();for(var c=Object(this),b=c.length>>>0,f=Array(b),d=0;d<
b;++d)f[d]=c._getter(d);a?f.sort(a):f.sort();for(d=0;d<b;++d)c._setter(d,f[d]);return c}});Object.defineProperty(p.prototype,"subarray",{value:function(a,c){a>>=0;c>>=0;1>arguments.length&&(a=0);2>arguments.length&&(c=this.length);0>a&&(a=this.length+a);0>c&&(c=this.length+c);var b=this.length;a=0>a?0:a>b?b:a;b=this.length;b=(0>c?0:c>b?b:c)-a;0>b&&(b=0);return new this.constructor(this.buffer,this.byteOffset+a*this.BYTES_PER_ELEMENT,b)}});var x=z(1,f,r),S=z(1,e,h),D=z(1,l,h),t=z(2,w,F),M=z(2,B,A),
E=z(4,L,G),H=z(4,J,C),ha=z(4,K,Q),ma=z(8,O,I);b.Int8Array=a.Int8Array=b.Int8Array||x;b.Uint8Array=a.Uint8Array=b.Uint8Array||S;b.Uint8ClampedArray=a.Uint8ClampedArray=b.Uint8ClampedArray||D;b.Int16Array=a.Int16Array=b.Int16Array||t;b.Uint16Array=a.Uint16Array=b.Uint16Array||M;b.Int32Array=a.Int32Array=b.Int32Array||E;b.Uint32Array=a.Uint32Array=b.Uint32Array||H;b.Float32Array=a.Float32Array=b.Float32Array||ha;b.Float64Array=a.Float64Array=b.Float64Array||ma})();(function(){function a(a,c){return g(a.get)?
a.get(c):a[c]}function f(a,b,f){if(!(a instanceof ArrayBuffer||"ArrayBuffer"===c(a)))throw TypeError();b>>>=0;if(b>a.byteLength)throw RangeError("byteOffset out of range");f=void 0===f?a.byteLength-b:f>>>0;if(b+f>a.byteLength)throw RangeError("byteOffset and length reference an area beyond the end of the buffer");Object.defineProperty(this,"buffer",{value:a});Object.defineProperty(this,"byteLength",{value:f});Object.defineProperty(this,"byteOffset",{value:b})}function d(c){return function(f,d){f>>>=
0;if(f+c.BYTES_PER_ELEMENT>this.byteLength)throw RangeError("Array index out of range");f+=this.byteOffset;for(var q=new b.Uint8Array(this.buffer,f,c.BYTES_PER_ELEMENT),g=[],n=0;n<c.BYTES_PER_ELEMENT;n+=1)g.push(a(q,n));!!d===!!k&&g.reverse();return a(new c((new b.Uint8Array(g)).buffer),0)}}function q(c){return function(f,d,q){f>>>=0;if(f+c.BYTES_PER_ELEMENT>this.byteLength)throw RangeError("Array index out of range");d=new c([d]);d=new b.Uint8Array(d.buffer);var g=[],n;for(n=0;n<c.BYTES_PER_ELEMENT;n+=
1)g.push(a(d,n));!!q===!!k&&g.reverse();(new Uint8Array(this.buffer,f,c.BYTES_PER_ELEMENT)).set(g)}}var k=function(){var c=new b.Uint16Array([4660]),c=new b.Uint8Array(c.buffer);return 18===a(c,0)}();Object.defineProperty(f.prototype,"getUint8",{value:d(b.Uint8Array)});Object.defineProperty(f.prototype,"getInt8",{value:d(b.Int8Array)});Object.defineProperty(f.prototype,"getUint16",{value:d(b.Uint16Array)});Object.defineProperty(f.prototype,"getInt16",{value:d(b.Int16Array)});Object.defineProperty(f.prototype,
"getUint32",{value:d(b.Uint32Array)});Object.defineProperty(f.prototype,"getInt32",{value:d(b.Int32Array)});Object.defineProperty(f.prototype,"getFloat32",{value:d(b.Float32Array)});Object.defineProperty(f.prototype,"getFloat64",{value:d(b.Float64Array)});Object.defineProperty(f.prototype,"setUint8",{value:q(b.Uint8Array)});Object.defineProperty(f.prototype,"setInt8",{value:q(b.Int8Array)});Object.defineProperty(f.prototype,"setUint16",{value:q(b.Uint16Array)});Object.defineProperty(f.prototype,"setInt16",
{value:q(b.Int16Array)});Object.defineProperty(f.prototype,"setUint32",{value:q(b.Uint32Array)});Object.defineProperty(f.prototype,"setInt32",{value:q(b.Int32Array)});Object.defineProperty(f.prototype,"setFloat32",{value:q(b.Float32Array)});Object.defineProperty(f.prototype,"setFloat64",{value:q(b.Float64Array)});b.DataView=b.DataView||f})()}(h,window);"undefined"===typeof window||"Uint8ClampedArray"in window||(window.Uint8ClampedArray=window.Uint8Array)},{}],15:[function(e,l,h){function b(a,b){this.replacer=
a;this.reviver=b;this.SERIALIZER_ID="json";this.BINARY=!1}function a(){this.SERIALIZER_ID="msgpack";this.BINARY=!0;this.codec=d.createCodec()}e("./log.js");var d=e("msgpack-lite");b.prototype.serialize=function(a){return JSON.stringify(a,this.replacer)};b.prototype.unserialize=function(a){return JSON.parse(a,this.reviver)};h.JSONSerializer=b;d=e("msgpack-lite");a.prototype.serialize=function(a){return d.encode(a,{codec:this.codec})};a.prototype.unserialize=function(a){return d.decode(new Uint8Array(a),
{codec:this.codec})};a.prototype.registerExtType=function(a,b,d,m){d&&b&&this.codec.addExtPacker(a,b,d);m&&this.codec.addExtUnpacker(a,m)};h.MsgpackSerializer=a},{"./log.js":6,"msgpack-lite":65}],16:[function(e,l,h){(function(b){function a(){return new k(Math.floor(9007199254740992*Math.random()))}e("when");var d=e("when/function"),c=e("./log.js"),g=e("./util.js"),k=e("int64-buffer").Uint64BE;Date.now=Date.now||function(){return+new Date};var m={caller:{features:{caller_identification:!0,progressive_call_results:!0}},
callee:{features:{caller_identification:!0,pattern_based_registration:!0,shared_registration:!0,progressive_call_results:!0,registration_revocation:!0}},publisher:{features:{publisher_identification:!0,subscriber_blackwhite_listing:!0,publisher_exclusion:!0}},subscriber:{features:{publisher_identification:!0,pattern_based_subscription:!0,subscription_revocation:!0}}},n=function(a,c,b,f,d){this.procedure=a;this.progress=c;this.caller=b;this.caller_authid=f;this.caller_authrole=d},p=function(a,c,b,
f,d){this.publication=a;this.topic=c;this.publisher=b;this.publisher_authid=f;this.publisher_authrole=d},f=function(a,c){this.args=a||[];this.kwargs=c||{}},r=function(a,c,b){this.error=a;this.args=c||[];this.kwargs=b||{}},z=function(a,c,b,f,d){this.topic=a;this.handler=c;this.options=b||{};this.session=f;this.id=d;this.active=!0;this._on_unsubscribe=f._defer();this.on_unsubscribe=this._on_unsubscribe.promise.then?this._on_unsubscribe.promise:this._on_unsubscribe};z.prototype.unsubscribe=function(){return this.session.unsubscribe(this)};
var x=function(a,c,b,f,d){this.procedure=a;this.endpoint=c;this.options=b||{};this.session=f;this.id=d;this.active=!0;this._on_unregister=f._defer();this.on_unregister=this._on_unregister.promise.then?this._on_unregister.promise:this._on_unregister};x.prototype.unregister=function(){return this.session.unregister(this)};var l=function(a){this.id=a},w=function(a,g,k){var e=this;e._socket=a;e._defer=g;e._onchallenge=k;e._id=null;e._realm=null;e._features=null;e._goodbye_sent=!1;e._transport_is_closing=
!1;e._publish_reqs={};e._subscribe_reqs={};e._unsubscribe_reqs={};e._call_reqs={};e._register_reqs={};e._unregister_reqs={};e._subscriptions={};e._registrations={};e._invocations={};e._prefixes={};e._caller_disclose_me=!1;e._publisher_disclose_me=!1;e._send_wamp=function(a){c.debug(a);e._socket.send(a)};e._protocol_violation=function(a){c.debug("failing transport due to protocol violation: "+a);e._socket.close(1002,"protocol violation: "+a)};e._MESSAGE_MAP={};e._MESSAGE_MAP[8]={};e._process_SUBSCRIBED=
function(a){var c=a[1];a=a[2];if(c in e._subscribe_reqs){var b=e._subscribe_reqs[c],f=b[0],d=b[1],g=b[2],b=b[3];a in e._subscriptions||(e._subscriptions[a]=[]);d=new z(d,g,b,e,a);e._subscriptions[a].push(d);f.resolve(d);delete e._subscribe_reqs[c]}else e._protocol_violation("SUBSCRIBED received for non-pending request ID "+c)};e._MESSAGE_MAP[33]=e._process_SUBSCRIBED;e._process_SUBSCRIBE_ERROR=function(a){var c=a[2];c in e._subscribe_reqs?(a=new r(a[4],a[5],a[6]),e._subscribe_reqs[c][0].reject(a),
delete e._subscribe_reqs[c]):e._protocol_violation("SUBSCRIBE-ERROR received for non-pending request ID "+c)};e._MESSAGE_MAP[8][32]=e._process_SUBSCRIBE_ERROR;e._process_UNSUBSCRIBED=function(a){var c=a[1];if(c in e._unsubscribe_reqs){a=e._unsubscribe_reqs[c];var b=a[0];a=a[1];if(a in e._subscriptions){for(var f=e._subscriptions[a],d=0;d<f.length;++d)f[d].active=!1,f[d].on_unsubscribe.resolve();delete e._subscriptions[a]}b.resolve(!0);delete e._unsubscribe_reqs[c]}else if(0===c)if(c=a[2],a=c.subscription,
c=c.reason,a in e._subscriptions){f=e._subscriptions[a];for(d=0;d<f.length;++d)f[d].active=!1,f[d]._on_unsubscribe.resolve(c);delete e._subscriptions[a]}else e._protocol_violation("non-voluntary UNSUBSCRIBED received for non-existing subscription ID "+a);else e._protocol_violation("UNSUBSCRIBED received for non-pending request ID "+c)};e._MESSAGE_MAP[35]=e._process_UNSUBSCRIBED;e._process_UNSUBSCRIBE_ERROR=function(a){var c=a[2];c in e._unsubscribe_reqs?(a=new r(a[4],a[5],a[6]),e._unsubscribe_reqs[c][0].reject(a),
delete e._unsubscribe_reqs[c]):e._protocol_violation("UNSUBSCRIBE-ERROR received for non-pending request ID "+c)};e._MESSAGE_MAP[8][34]=e._process_UNSUBSCRIBE_ERROR;e._process_PUBLISHED=function(a){var c=a[1],b=a[2];c in e._publish_reqs?(a=e._publish_reqs[c][0],b=new l(b),a.resolve(b),delete e._publish_reqs[c]):e._protocol_violation("PUBLISHED received for non-pending request ID "+c)};e._MESSAGE_MAP[17]=e._process_PUBLISHED;e._process_PUBLISH_ERROR=function(a){var c=a[2];c in e._publish_reqs?(a=new r(a[4],
a[5],a[6]),e._publish_reqs[c][0].reject(a),delete e._publish_reqs[c]):e._protocol_violation("PUBLISH-ERROR received for non-pending request ID "+c)};e._MESSAGE_MAP[8][16]=e._process_PUBLISH_ERROR;e._process_EVENT=function(a){var b=a[1];if(b in e._subscriptions){var f=a[3],d=a[4]||[],g=a[5]||{},b=e._subscriptions[b];a=new p(a[2],f.topic||b[0]&&b[0].topic,f.publisher,f.publisher_authid,f.publisher_authrole);for(f=0;f<b.length;++f)try{b[f].handler(d,g,a)}catch(I){c.debug("Exception raised in event handler",
I)}}else e._protocol_violation("EVENT received for non-subscribed subscription ID "+b)};e._MESSAGE_MAP[36]=e._process_EVENT;e._process_REGISTERED=function(a){var c=a[1];a=a[2];if(c in e._register_reqs){var b=e._register_reqs[c],f=b[0],b=new x(b[1],b[2],b[3],e,a);e._registrations[a]=b;f.resolve(b);delete e._register_reqs[c]}else e._protocol_violation("REGISTERED received for non-pending request ID "+c)};e._MESSAGE_MAP[65]=e._process_REGISTERED;e._process_REGISTER_ERROR=function(a){var c=a[2];c in e._register_reqs?
(a=new r(a[4],a[5],a[6]),e._register_reqs[c][0].reject(a),delete e._register_reqs[c]):e._protocol_violation("REGISTER-ERROR received for non-pending request ID "+c)};e._MESSAGE_MAP[8][64]=e._process_REGISTER_ERROR;e._process_UNREGISTERED=function(a){var c=a[1];if(c in e._unregister_reqs){a=e._unregister_reqs[c];var b=a[0];a=a[1];a.id in e._registrations&&delete e._registrations[a.id];a.active=!1;b.resolve();delete e._unregister_reqs[c]}else 0===c?(a=a[2],c=a.registration,b=a.reason,c in e._registrations?
(a=e._registrations[c],a.active=!1,a._on_unregister.resolve(b),delete e._registrations[c]):e._protocol_violation("non-voluntary UNREGISTERED received for non-existing registration ID "+c)):e._protocol_violation("UNREGISTERED received for non-pending request ID "+c)};e._MESSAGE_MAP[67]=e._process_UNREGISTERED;e._process_UNREGISTER_ERROR=function(a){var c=a[2];c in e._unregister_reqs?(a=new r(a[4],a[5],a[6]),e._unregister_reqs[c][0].reject(a),delete e._unregister_reqs[c]):e._protocol_violation("UNREGISTER-ERROR received for non-pending request ID "+
c)};e._MESSAGE_MAP[8][66]=e._process_UNREGISTER_ERROR;e._process_RESULT=function(a){var c=a[1];if(c in e._call_reqs){var b=a[2],d=a[3]||[],g=a[4]||{};a=null;1<d.length||0<Object.keys(g).length?a=new f(d,g):0<d.length&&(a=d[0]);g=e._call_reqs[c];d=g[0];g=g[1];b.progress?g&&g.receive_progress&&d.notify(a):(d.resolve(a),delete e._call_reqs[c])}else e._protocol_violation("CALL-RESULT received for non-pending request ID "+c)};e._MESSAGE_MAP[50]=e._process_RESULT;e._process_CALL_ERROR=function(a){var c=
a[2];c in e._call_reqs?(a=new r(a[4],a[5],a[6]),e._call_reqs[c][0].reject(a),delete e._call_reqs[c]):e._protocol_violation("CALL-ERROR received for non-pending request ID "+c)};e._MESSAGE_MAP[8][48]=e._process_CALL_ERROR;e._process_INVOCATION=function(a){var c=a[1],b=a[2],g=a[3];if(b in e._registrations){var b=e._registrations[b],k=a[4]||[];a=a[5]||{};var p=null;g.receive_progress&&(p=function(a,b){var f=[70,c,{progress:!0}];a=a||[];b=b||{};var d=Object.keys(b).length;if(a.length||d)f.push(a),d&&
f.push(b);e._send_wamp(f)});g=new n(g.procedure||b.procedure,p,g.caller,g.caller_authid,g.caller_authrole);d.call(b.endpoint,k,a,g).then(function(a){var b=[70,c,{}];if(a instanceof f){var d=Object.keys(a.kwargs).length;if(a.args.length||d)b.push(a.args),d&&b.push(a.kwargs)}else b.push([a]);e._send_wamp(b)},function(a){var b=[8,68,c,{}];if(a instanceof r){b.push(a.error);var f=Object.keys(a.kwargs).length;if(a.args.length||f)b.push(a.args),f&&b.push(a.kwargs)}else b.push("wamp.error.runtime_error"),
b.push([a]);e._send_wamp(b)})}else e._protocol_violation("INVOCATION received for non-registered registration ID "+c)};e._MESSAGE_MAP[68]=e._process_INVOCATION;e._socket.onmessage=function(a){var b=a[0];if(e._id)if(6===b){if(e._goodbye_sent||e._send_wamp([6,{},"wamp.error.goodbye_and_out"]),e._id=null,e._realm=null,e._features=null,b=a[1],a=a[2],e.onleave)e.onleave(a,b)}else if(8===b){var f=a[1];if(f in e._MESSAGE_MAP[8])e._MESSAGE_MAP[b][f](a);else e._protocol_violation("unexpected ERROR message with request_type "+
f)}else if(b in e._MESSAGE_MAP)e._MESSAGE_MAP[b](a);else e._protocol_violation("unexpected message type "+b);else if(2===b){e._id=a[1];b=a[2];e._features={};if(b.roles.broker&&(e._features.subscriber={},e._features.publisher={},b.roles.broker.features)){for(f in m.publisher.features)e._features.publisher[f]=m.publisher.features[f]&&b.roles.broker.features[f];for(f in m.subscriber.features)e._features.subscriber[f]=m.subscriber.features[f]&&b.roles.broker.features[f]}if(b.roles.dealer&&(e._features.caller=
{},e._features.callee={},b.roles.dealer.features)){for(f in m.caller.features)e._features.caller[f]=m.caller.features[f]&&b.roles.dealer.features[f];for(f in m.callee.features)e._features.callee[f]=m.callee.features[f]&&b.roles.dealer.features[f]}if(e.onjoin)e.onjoin(a[2])}else if(3===b){if(b=a[1],a=a[2],e.onleave)e.onleave(a,b)}else 4===b?e._onchallenge?d.call(e._onchallenge,e,a[1],a[2]).then(function(a){e._send_wamp([5,a,{}])},function(a){c.debug("onchallenge() raised:",a);e._send_wamp([3,{message:"sorry, I cannot authenticate (onchallenge handler raised an exception)"},
"wamp.error.cannot_authenticate"]);e._socket.close(1E3)}):(c.debug("received WAMP challenge, but no onchallenge() handler set"),a=[3,{message:"sorry, I cannot authenticate (no onchallenge handler set)"},"wamp.error.cannot_authenticate"],e._send_wamp(a),e._socket.close(1E3)):e._protocol_violation("unexpected message type "+b)};e._created="performance"in b&&"now"in performance?performance.now():Date.now()};Object.defineProperty(w.prototype,"defer",{get:function(){return this._defer}});Object.defineProperty(w.prototype,
"id",{get:function(){return this._id}});Object.defineProperty(w.prototype,"realm",{get:function(){return this._realm}});Object.defineProperty(w.prototype,"isOpen",{get:function(){return null!==this.id}});Object.defineProperty(w.prototype,"features",{get:function(){return this._features}});Object.defineProperty(w.prototype,"caller_disclose_me",{get:function(){return this._caller_disclose_me},set:function(a){this._caller_disclose_me=a}});Object.defineProperty(w.prototype,"publisher_disclose_me",{get:function(){return this._publisher_disclose_me},
set:function(a){this._publisher_disclose_me=a}});Object.defineProperty(w.prototype,"subscriptions",{get:function(){for(var a=Object.keys(this._subscriptions),c=[],b=0;b<a.length;++b)c.push(this._subscriptions[a[b]]);return c}});Object.defineProperty(w.prototype,"registrations",{get:function(){for(var a=Object.keys(this._registrations),c=[],b=0;b<a.length;++b)c.push(this._registrations[a[b]]);return c}});w.prototype.log=function(){if("console"in b){var a;this._id&&this._created?(a="performance"in b&&
"now"in performance?performance.now()-this._created:Date.now()-this._created,a="WAMP session "+this._id+" on '"+this._realm+"' at "+Math.round(1E3*a)/1E3+" ms"):a="WAMP session";if("group"in console){console.group(a);for(a=0;a<arguments.length;a+=1)console.log(arguments[a]);console.groupEnd()}else{var c=[a+": "];for(a=0;a<arguments.length;a+=1)c.push(arguments[a]);console.log.apply(console,c)}}};w.prototype.join=function(a,c,b,f){g.assert("string"===typeof a,"Session.join: <realm> must be a string");
g.assert(!c||Array.isArray(c),"Session.join: <authmethods> must be an array []");g.assert(!b||"string"===typeof b,"Session.join: <authid> must be a string");if(this.isOpen)throw"session already open";this._goodbye_sent=!1;this._realm=a;var d={};d.roles=m;c&&(d.authmethods=c);b&&(d.authid=b);f&&(d.authextra=f);this._send_wamp([1,a,d])};w.prototype.leave=function(a,c){g.assert(!a||"string"===typeof a,"Session.leave: <reason> must be a string");g.assert(!c||"string"===typeof c,"Session.leave: <message> must be a string");
if(!this.isOpen)throw"session not open";a||(a="wamp.close.normal");var b={};c&&(b.message=c);this._send_wamp([6,b,a]);this._goodbye_sent=!0};w.prototype.call=function(c,b,f,d){g.assert("string"===typeof c,"Session.call: <procedure> must be a string");g.assert(!b||Array.isArray(b),"Session.call: <args> must be an array []");g.assert(!f||f instanceof Object,"Session.call: <kwargs> must be an object {}");g.assert(!d||d instanceof Object,"Session.call: <options> must be an object {}");if(!this.isOpen)throw"session not open";
d=d||{};void 0===d.disclose_me&&this._caller_disclose_me&&(d.disclose_me=!0);var e=this._defer(),k=a();this._call_reqs[k]=[e,d];c=[48,k,d,this.resolve(c)];b?(c.push(b),f&&c.push(f)):f&&(c.push([]),c.push(f));this._send_wamp(c);return e.promise.then?e.promise:e};w.prototype.publish=function(c,b,f,d){g.assert("string"===typeof c,"Session.publish: <topic> must be a string");g.assert(!b||Array.isArray(b),"Session.publish: <args> must be an array []");g.assert(!f||f instanceof Object,"Session.publish: <kwargs> must be an object {}");
g.assert(!d||d instanceof Object,"Session.publish: <options> must be an object {}");if(!this.isOpen)throw"session not open";d=d||{};void 0===d.disclose_me&&this._publisher_disclose_me&&(d.disclose_me=!0);var e=null,k=a();d.acknowledge&&(e=this._defer(),this._publish_reqs[k]=[e,d]);c=[16,k,d,this.resolve(c)];b?(c.push(b),f&&c.push(f)):f&&(c.push([]),c.push(f));this._send_wamp(c);if(e)return e.promise.then?e.promise:e};w.prototype.subscribe=function(c,b,f){g.assert("string"===typeof c,"Session.subscribe: <topic> must be a string");
g.assert("function"===typeof b,"Session.subscribe: <handler> must be a function");g.assert(!f||f instanceof Object,"Session.subscribe: <options> must be an object {}");if(!this.isOpen)throw"session not open";var d=a(),e=this._defer();this._subscribe_reqs[d]=[e,c,b,f];b=[32,d];f?b.push(f):b.push({});b.push(this.resolve(c));this._send_wamp(b);return e.promise.then?e.promise:e};w.prototype.register=function(c,b,f){g.assert("string"===typeof c,"Session.register: <procedure> must be a string");g.assert("function"===
typeof b,"Session.register: <endpoint> must be a function");g.assert(!f||f instanceof Object,"Session.register: <options> must be an object {}");if(!this.isOpen)throw"session not open";var d=a(),e=this._defer();this._register_reqs[d]=[e,c,b,f];b=[64,d];f?b.push(f):b.push({});b.push(this.resolve(c));this._send_wamp(b);return e.promise.then?e.promise:e};w.prototype.unsubscribe=function(c){g.assert(c instanceof z,"Session.unsubscribe: <subscription> must be an instance of class autobahn.Subscription");
if(!this.isOpen)throw"session not open";if(!(c.active&&c.id in this._subscriptions))throw"subscription not active";var b=this._subscriptions[c.id],f=b.indexOf(c);if(-1===f)throw"subscription not active";b.splice(f,1);c.active=!1;f=this._defer();b.length?f.resolve(!1):(b=a(),this._unsubscribe_reqs[b]=[f,c.id],this._send_wamp([34,b,c.id]));return f.promise.then?f.promise:f};w.prototype.unregister=function(c){g.assert(c instanceof x,"Session.unregister: <registration> must be an instance of class autobahn.Registration");
if(!this.isOpen)throw"session not open";if(!(c.active&&c.id in this._registrations))throw"registration not active";var b=a(),f=this._defer();this._unregister_reqs[b]=[f,c];this._send_wamp([66,b,c.id]);return f.promise.then?f.promise:f};w.prototype.prefix=function(a,c){g.assert("string"===typeof a,"Session.prefix: <prefix> must be a string");g.assert(!c||"string"===typeof c,"Session.prefix: <uri> must be a string or falsy");c?this._prefixes[a]=c:a in this._prefixes&&delete this._prefixes[a]};w.prototype.resolve=
function(a){g.assert("string"===typeof a,"Session.resolve: <curie> must be a string");var c=a.indexOf(":");if(0<=c){var b=a.substring(0,c);return b in this._prefixes?this._prefixes[b]+"."+a.substring(c+1):a}return a};h.Session=w;h.Invocation=n;h.Event=p;h.Result=f;h.Error=r;h.Subscription=z;h.Registration=x;h.Publication=l}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"./log.js":6,"./util.js":20,"int64-buffer":64,when:120,"when/function":96}],
17:[function(e,l,h){function b(c){a.assert(void 0!==c.url,"options.url missing");a.assert("string"===typeof c.url,"options.url must be a string");this._options=c}var a=e("../util.js"),d=e("../log.js");e("when");b.prototype.type="longpoll";b.prototype.create=function(){var c=this;d.debug("longpoll.Factory.create");var b={protocol:void 0,send:void 0,close:void 0,onmessage:function(){},onopen:function(){},onclose:function(){},info:{type:"longpoll",url:null,protocol:"wamp.2.json"},_run:function(){var e=
null,g=!1,n=c._options.request_timeout||12E3;a.http_post(c._options.url+"/open",JSON.stringify({protocols:["wamp.2.json"]}),n).then(function(k){function f(){d.debug("longpoll.Transport: polling for message ...");a.http_post(p+"/receive",null,n).then(function(a){a&&(a=JSON.parse(a),d.debug("longpoll.Transport: message received",a),b.onmessage(a));g||f()},function(a){d.debug("longpoll.Transport: could not receive message",a.code,a.text);g=!0;b.onclose({code:1001,reason:"transport receive failure (HTTP/POST status "+
a.code+" - '"+a.text+"')",wasClean:!1})})}e=JSON.parse(k);var p=c._options.url+"/"+e.transport;b.info.url=p;d.debug("longpoll.Transport: open",e);b.close=function(c,f){if(g)throw"transport is already closing";g=!0;a.http_post(p+"/close",null,n).then(function(){d.debug("longpoll.Transport: transport closed");b.onclose({code:1E3,reason:"transport closed",wasClean:!0})},function(a){d.debug("longpoll.Transport: could not close transport",a.code,a.text)})};b.send=function(c){if(g)throw"transport is closing or closed already";
d.debug("longpoll.Transport: sending message ...",c);c=JSON.stringify(c);a.http_post(p+"/send",c,n).then(function(){d.debug("longpoll.Transport: message sent")},function(a){d.debug("longpoll.Transport: could not send message",a.code,a.text);g=!0;b.onclose({code:1001,reason:"transport send failure (HTTP/POST status "+a.code+" - '"+a.text+"')",wasClean:!1})})};f();b.onopen()},function(a){d.debug("longpoll.Transport: could not open transport",a.code,a.text);g=!0;b.onclose({code:1001,reason:"transport open failure (HTTP/POST status "+
a.code+" - '"+a.text+"')",wasClean:!1})})}};b._run();return b};h.Factory=b},{"../log.js":6,"../util.js":20,when:120}],18:[function(e,l,h){(function(b,a){function d(a){a.protocols?g.assert(Array.isArray(a.protocols),"options.protocols must be an array"):a.protocols=["wamp.2.json"];a.rawsocket_max_len_exp=a.rawsocket_max_len_exp||24;this._options=a}function c(c,b){this._options={_peer_serializer:null,_peer_max_len_exp:0};this._options=g.defaults(this._options,b,this.DEFAULT_OPTIONS);g.assert(this._options.serializer in
this.SERIALIZERS,"Unsupported serializer: "+this._options.serializer);g.assert(9<=this._options.max_len_exp&&36>=this._options.max_len_exp,"Message length out of bounds [9, 36]: "+this._options.max_len_exp);g.assert(!this._options.autoping||Number.isInteger(this._options.autoping)&&0<=this._options.autoping,"Autoping interval must be positive");g.assert(!this._options.ping_timeout||Number.isInteger(this._options.ping_timeout)&&0<=this._options.ping_timeout,"Ping timeout duration must be positive");
g.assert(!this._options.packet_timeout||Number.isInteger(this._options.packet_timeout)&&0<=this._options.packet_timeout,"Packet timeout duration must be positive");g.assert(!this._options.autoping||!this._options.ping_timeout||this._options.autoping>this._options.ping_timeout,"Autoping interval ("+this._options.autoping+") must be lower than ping timeout ("+this._options.ping_timeout+")");this._ping_interval=this._ping_payload=this._ping_timeout=null;this._status=this.STATUS.UNINITIATED;this._stream=
c;this._emitter=new m;this._buffer=new a(4);this._msgLen=this._bufferLen=0;var f=this;this._stream.on("data",function(a){f._read(a)});this._stream.on("connect",function(){f._handshake()});["close","drain","end","error","timeout"].forEach(function(a){f._stream.on(a,function(c){f._emitter.emit(a,c)})})}var g=e("../util.js"),k=e("../log.js"),m=e("events").EventEmitter;d.prototype.type="rawsocket";d.prototype.create=function(){var a=this,f={protocol:void 0,send:void 0,close:void 0,onmessage:function(){},
onopen:function(){},onclose:function(){},info:{type:"rawsocket",url:null,protocol:"wamp.2.json"}};if(b.process&&b.process.versions.node)(function(){var b=e("net"),d;if(a._options.path)connectionOptions={path:a._options.path,allowHalfOpen:!0};else if(a._options.port)connectionOptions={port:a._options.port||8E3,host:a._options.host||"localhost",allowHalfOpen:!0};else throw"You must specify a host/port combination or a unix socket path to connect to";b=b.connect(connectionOptions);d=new c(b,{serializer:"json",
max_len_exp:a._options.rawsocket_max_len_exp});d.on("connect",function(a){k.debug("RawSocket transport negociated");f.onopen(a)});d.on("data",function(a){k.debug("RawSocket transport received",a);f.onmessage(a)});d.on("close",function(a){k.debug("RawSocket transport closed");f.onclose({code:999,reason:"",wasClean:!a})});d.on("error",function(a){k.debug("RawSocket transport error",a)});f.close=function(a,c){k.debug("RawSocket transport closing",a,c);d.close()};f.send=function(a){k.debug("RawSocket transport sending",
a);d.write(a)}})();else throw"No RawSocket support in browser";return f};c.prototype._MAGIC_BYTE=127;c.prototype.SERIALIZERS={json:1};c.prototype.STATUS={CLOSED:-1,UNINITIATED:0,NEGOCIATING:1,NEGOCIATED:2,RXHEAD:3,RXDATA:4,RXPING:5,RXPONG:6};c.prototype.ERRORS={0:"illegal (must not be used)",1:"serializer unsupported",2:"maximum message length unacceptable",3:"use of reserved bits (unsupported feature)",4:"maximum connection count reached"};c.prototype.MSGTYPES={WAMP:0,PING:1,PONG:2};c.prototype.DEFAULT_OPTIONS=
{fail_on_ping_timeout:!0,strict_pong:!0,ping_timeout:2E3,autoping:0,max_len_exp:24,serializer:"json",packet_timeout:2E3};c.prototype.close=function(){this._status=this.STATUS.CLOSED;this._stream.end();return this.STATUS.CLOSED};c.prototype.write=function(c,b,d){b=void 0===b?0:b;b===this.MSGTYPES.WAMP&&(c=JSON.stringify(c));var f=a.byteLength(c,"utf8");if(f>Math.pow(2,this._options._peer_max_len_exp))this._emitter.emit("error",new n("Frame too big"));else{var e=new a(f+4);e.writeUInt8(b,0);e.writeUIntBE(f,
1,3);e.write(c,4);this._stream.write(e,d)}};c.prototype.ping=function(a){a=a||255;if(Number.isInteger(a))for(var c=Math.max(1,a),b=0;b<c;b++)a+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&~\"#'{([-|`_\\^@)]=},?;.:/!*$<>".charAt(92*Math.random()|0);this._ping_payload=a;return this.write(a,this.MSGTYPES.PING,this._setupPingTimeout.bind(this))};c.prototype._setupPingTimeout=function(){this._options.ping_timeout&&(this._ping_timeout=setTimeout(this._onPingTimeout.bind(this),this._options.ping_timeout))};
c.prototype._clearPingTimeout=function(){this._ping_timeout&&(clearTimeout(this._ping_timeout),this._ping_timeout=null)};c.prototype._setupAutoPing=function(){this._clearAutoPing();this._options.autoping&&(this._autoping_interval=setInterval(this.ping.bind(this),this._options.autoping))};c.prototype._clearAutoPing=function(){this._autoping_interval&&(clearInterval(this._autoping_interval),this._autoping_interval=null)};c.prototype._onPingTimeout=function(){this._emitter.emit("error",new n("PING timeout"));
this._options.fail_on_ping_timeout&&this.close()};c.prototype._read=function(a){var c,b;switch(this._status){case this.STATUS.CLOSED:case this.STATUS.UNINITIATED:this._emitter.emit("error",n("Unexpected packet"));break;case this.STATUS.NEGOCIATING:c=this._handleHandshake;b=4;break;case this.STATUS.NEGOCIATED:case this.STATUS.RXHEAD:this._status=this.STATUS.RXHEAD;c=this._handleHeaderPacket;b=4;break;case this.STATUS.RXDATA:c=this._handleDataPacket;b=this._msgLen;break;case this.STATUS.RXPING:c=this._handlePingPacket;
b=this._msgLen;break;case this.STATUS.RXPONG:c=this._handlePongPacket,b=this._msgLen}if(a=this._splitBytes(a,b))this._status=c.call(this,a[0]),0<a[1].length&&this._read(a[1])};c.prototype._handshake=function(){if(this._status!==this.STATUS.UNINITIATED)throw"Handshake packet already sent";var c=new a(4);c.writeUInt8(this._MAGIC_BYTE,0);c.writeUInt8(this._options.max_len_exp-9<<4|this.SERIALIZERS[this._options.serializer],1);c.writeUInt8(0,2);c.writeUInt8(0,3);this._stream.write(c);this._status=this.STATUS.NEGOCIATING};
c.prototype._splitBytes=function(c,b){b!==this._buffer.length&&(this._buffer=new a(b),this._bufferLen=0);c.copy(this._buffer,this._bufferLen);if(this._bufferLen+c.length<b)return this._bufferLen+=c.length,null;var f=this._buffer.slice(),d=c.slice(b-this._bufferLen);this._bufferLen=0;return[f,d]};c.prototype._handleHandshake=function(a){if(a[0]!==this._MAGIC_BYTE)return this._emitter.emit("error",new n("Invalid magic byte. Expected 0x"+this._MAGIC_BYTE.toString(16)+", got 0x"+a[0].toString(16))),this.close();
if(0===(a[1]&15))return a=a[1]>>4,this._emitter.emit("error",new n("Peer failed handshake: "+(this.ERRORS[a]||"0x"+a.toString(16)))),this.close();this._options._peer_max_len_exp=(a[1]>>4)+9;this._options._peer_serializer=a[1]&15;if(this._options._peer_serializer!==this.SERIALIZERS.json)return this._emitter.emit("error",new n("Unsupported serializer: 0x"+this._options._peer_serializer.toString(16))),this.close();this._emitter.emit("connect");this._setupAutoPing();return this.STATUS.NEGOCIATED};c.prototype._handleHeaderPacket=
function(a){var c=a[0]&15;this._msgLen=a.readUIntBE(1,3);switch(c){case this.MSGTYPES.WAMP:return this.STATUS.RXDATA;case this.MSGTYPES.PING:return this.STATUS.RXPING;case this.MSGTYPES.PONG:return this.STATUS.RXPONG;default:return this._emitter.emit("error",new n("Invalid frame type: 0x"+c.toString(16))),this.close()}};c.prototype._handleDataPacket=function(a){var c;try{c=JSON.parse(a.toString("utf8"))}catch(r){return this._emitter.emit("error",new n("Invalid JSON frame")),this.STATUS.RXHEAD}this._emitter.emit("data",
c);return this.STATUS.RXHEAD};c.prototype._handlePingPacket=function(a){this.write(a.toString("utf8"),this.MSGTYPES.PONG);return this.STATUS.RXHEAD};c.prototype._handlePongPacket=function(a){this._clearPingTimeout();return this._options.strict_pong&&this._ping_payload!==a.toString("utf8")?(this._emitter.emit("error",new n("PONG response payload doesn't match PING.")),this.close()):this.STATUS.RXHEAD};c.prototype.on=function(a,c){return this._emitter.on(a,c)};c.prototype.once=function(a,c){return this._emitter.once(a,
c)};c.prototype.removeListener=function(a,c){return this._emitter.removeListener(a,c)};var n=h.ProtocolError=function(a){Error.apply(this,Array.prototype.splice.call(arguments));Error.captureStackTrace(this,this.constructor);this.message=a;this.name="ProtocolError"};n.prototype=Object.create(Error.prototype);h.Factory=d;h.Protocol=c}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{},e("buffer").Buffer)},{"../log.js":6,"../util.js":20,
buffer:25,events:26,net:22}],19:[function(e,l,h){(function(b){function a(a){d.assert(void 0!==a.url,"options.url missing");d.assert("string"===typeof a.url,"options.url must be a string");a.serializers?d.assert(Array.isArray(a.serializers),"options.serializers must be an array"):(a.serializers=[new g.JSONSerializer],g.MsgpackSerializer&&a.serializers.push(new g.MsgpackSerializer));a.protocols?d.assert(Array.isArray(a.protocols),"options.protocols must be an array"):(a.protocols=[],a.serializers.forEach(function(c){a.protocols.push("wamp.2."+
c.SERIALIZER_ID)}));this._options=a}var d=e("../util.js"),c=e("../log.js"),g=e("../serializer.js");a.prototype.type="websocket";a.prototype.create=function(){var a=this,d={protocol:void 0,serializer:void 0,send:void 0,close:void 0,onmessage:function(){},onopen:function(){},onclose:function(){}};d.info={type:"websocket",url:a._options.url,protocol:null};b.process&&b.process.versions.node?function(){var c=e("ws"),b,f;a._options.protocols?(f=a._options.protocols,Array.isArray(f)&&(f=f.join(",")),b=new c(a._options.url,
{protocol:f})):b=new c(a._options.url);d.send=function(a){a=d.serializer.serialize(a);b.send(a,{binary:d.serializer.BINARY})};d.close=function(a,c){b.close()};b.on("open",function(){var c=b.protocol.split(".")[2],f;for(f in a._options.serializers){var e=a._options.serializers[f];if(e.SERIALIZER_ID==c){d.serializer=e;break}}d.info.protocol=b.protocol;d.onopen()});b.on("message",function(a,c){var b=d.serializer.unserialize(a);d.onmessage(b)});b.on("close",function(a,c){d.onclose({code:a,reason:c,wasClean:1E3===
a})});b.on("error",function(a){d.onclose({code:1006,reason:"",wasClean:!1})})}():function(){var e;if("WebSocket"in b)e=a._options.protocols?new b.WebSocket(a._options.url,a._options.protocols):new b.WebSocket(a._options.url),e.binaryType="arraybuffer";else if("MozWebSocket"in b)e=a._options.protocols?new b.MozWebSocket(a._options.url,a._options.protocols):new b.MozWebSocket(a._options.url);else throw"browser does not support WebSocket or WebSocket in Web workers";e.onmessage=function(a){c.debug("WebSocket transport receive",
a.data);a=d.serializer.unserialize(a.data);d.onmessage(a)};e.onopen=function(){var c=e.protocol.split(".")[2],b;for(b in a._options.serializers){var g=a._options.serializers[b];if(g.SERIALIZER_ID==c){d.serializer=g;break}}d.info.protocol=e.protocol;d.onopen()};e.onclose=function(a){d.onclose({code:a.code,reason:a.message,wasClean:a.wasClean})};d.send=function(a){a=d.serializer.serialize(a);c.debug("WebSocket transport send",a);e.send(a)};d.close=function(a,c){e.close(a,c)}}();return d};h.Factory=
a}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"../log.js":6,"../serializer.js":15,"../util.js":20,ws:24}],20:[function(e,l,h){(function(b){var a=e("./log.js"),d=e("when"),c=function(a,d){if(!a){if(c.useDebugger||"AUTOBAHN_DEBUG"in b&&AUTOBAHN_DEBUG)debugger;throw Error(d||"Assertion failed!");}},g=function(){if(0===arguments.length)return{};var a=arguments[0],c=!1,b=arguments.length;"boolean"===typeof arguments[b-1]&&(c=arguments[b-
1],--b);var d=function(b){var f=e[b];b in a?c&&"object"===typeof f&&"object"===typeof a[b]&&g(a[b],f):a[b]=f},f=1;for(;f<b;f++){var e=arguments[f];if(e){if("object"!==typeof e)throw Error("Expected argument at index "+f+" to be an object");Object.keys(e).forEach(d)}}return a};h.rand_normal=function(a,c){var b,d;do b=2*Math.random()-1,d=2*Math.random()-1,d=b*b+d*d;while(1<=d||0==d);return(a||0)+b*Math.sqrt(-2*Math.log(d)/d)*(c||1)};h.assert=c;h.http_post=function(c,b,e){a.debug("new http_post request",
c,b,e);var g=d.defer(),f=new XMLHttpRequest;f.withCredentials=!0;f.onreadystatechange=function(){if(4===f.readyState){var a=1223===f.status?204:f.status;200===a&&g.resolve(f.responseText);if(204===a)g.resolve();else{var c=null;try{c=f.statusText}catch(x){}g.reject({code:a,text:c})}}};f.open("POST",c,!0);f.setRequestHeader("Content-type","application/json; charset=utf-8");0<e&&(f.timeout=e,f.ontimeout=function(){g.reject({code:501,text:"request timeout"})});b?f.send(b):f.send();return g.promise.then?
g.promise:g};h.defaults=g}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"./log.js":6,when:120}],21:[function(e,l,h){l.exports={name:"autobahn",version:"0.11.2",description:"An implementation of The Web Application Messaging Protocol (WAMP).",main:"index.js",scripts:{test:"nodeunit test/test.js"},dependencies:{"crypto-js":">= 3.1.8",tweetnacl:">= 0.14.3",when:">= 3.7.7",ws:">= 1.1.1","msgpack-lite":">= 0.1.26","int64-buffer":">= 0.1.9"},
optionalDependencies:{bufferutil:">= 1.2.1","utf-8-validate":">= 1.2.1"},devDependencies:{browserify:">= 13.1.1",nodeunit:">= 0.10.2"},browser:{ws:!1,"lib/transport/rawsocket.js":!1},repository:{type:"git",url:"git://github.com/crossbario/autobahn-js.git"},keywords:["WAMP","WebSocket","RPC","PubSub"],author:"Crossbar.io Technologies GmbH",license:"MIT"}},{}],22:[function(e,l,h){},{}],23:[function(e,l,h){function b(a){var c=a.length;if(0<c%4)throw Error("Invalid string. Length must be a multiple of 4");
return"="===a[c-2]?2:"="===a[c-1]?1:0}function a(a,c,b){for(var e=[],f=c;f<b;f+=3)c=(a[f]<<16)+(a[f+1]<<8)+a[f+2],e.push(d[c>>18&63]+d[c>>12&63]+d[c>>6&63]+d[c&63]);return e.join("")}h.byteLength=function(a){return 3*a.length/4-b(a)};h.toByteArray=function(a){var d,e,k,f,r;d=a.length;f=b(a);r=new g(3*d/4-f);e=0<f?d-4:d;var h=0;for(d=0;d<e;d+=4)k=c[a.charCodeAt(d)]<<18|c[a.charCodeAt(d+1)]<<12|c[a.charCodeAt(d+2)]<<6|c[a.charCodeAt(d+3)],r[h++]=k>>16&255,r[h++]=k>>8&255,r[h++]=k&255;2===f?(k=c[a.charCodeAt(d)]<<
2|c[a.charCodeAt(d+1)]>>4,r[h++]=k&255):1===f&&(k=c[a.charCodeAt(d)]<<10|c[a.charCodeAt(d+1)]<<4|c[a.charCodeAt(d+2)]>>2,r[h++]=k>>8&255,r[h++]=k&255);return r};h.fromByteArray=function(c){for(var b=c.length,e=b%3,g="",f=[],k=0,h=b-e;k<h;k+=16383)f.push(a(c,k,k+16383>h?h:k+16383));1===e?(c=c[b-1],g+=d[c>>2],g+=d[c<<4&63],g+="=="):2===e&&(c=(c[b-2]<<8)+c[b-1],g+=d[c>>10],g+=d[c>>4&63],g+=d[c<<2&63],g+="=");f.push(g);return f.join("")};var d=[],c=[],g="undefined"!==typeof Uint8Array?Uint8Array:Array;
for(e=0;64>e;++e)d[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e],c["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(e)]=e;c[45]=62;c[95]=63},{}],24:[function(e,l,h){arguments[4][22][0].apply(h,arguments)},{dup:22}],25:[function(e,l,h){(function(b){function a(){try{var a=new Uint8Array(1);a.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}};return 42===a.foo()&&"function"===typeof a.subarray&&0===a.subarray(1,1).byteLength}catch(T){return!1}}
function d(a,b){if((c.TYPED_ARRAY_SUPPORT?2147483647:1073741823)<b)throw new RangeError("Invalid typed array length");c.TYPED_ARRAY_SUPPORT?(a=new Uint8Array(b),a.__proto__=c.prototype):(null===a&&(a=new c(b)),a.length=b);return a}function c(a,b,f){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(a,b,f);if("number"===typeof a){if("string"===typeof b)throw Error("If encoding is specified then the first argument must be a string");return m(this,a)}return g(this,a,b,f)}function g(a,b,f,e){if("number"===
typeof b)throw new TypeError('"value" argument must not be a number');if("undefined"!==typeof ArrayBuffer&&b instanceof ArrayBuffer){b.byteLength;if(0>f||b.byteLength<f)throw new RangeError("'offset' is out of bounds");if(b.byteLength<f+(e||0))throw new RangeError("'length' is out of bounds");b=void 0===f&&void 0===e?new Uint8Array(b):void 0===e?new Uint8Array(b,f):new Uint8Array(b,f,e);c.TYPED_ARRAY_SUPPORT?(a=b,a.__proto__=c.prototype):a=n(a,b);return a}if("string"===typeof b){e=a;a=f;if("string"!==
typeof a||""===a)a="utf8";if(!c.isEncoding(a))throw new TypeError('"encoding" must be a valid string encoding');f=r(b,a)|0;e=d(e,f);b=e.write(b,a);b!==f&&(e=e.slice(0,b));return e}return p(a,b)}function k(a){if("number"!==typeof a)throw new TypeError('"size" argument must be a number');if(0>a)throw new RangeError('"size" argument must not be negative');}function m(a,b){k(b);a=d(a,0>b?0:f(b)|0);if(!c.TYPED_ARRAY_SUPPORT)for(var e=0;e<b;++e)a[e]=0;return a}function n(a,c){var b=0>c.length?0:f(c.length)|
0;a=d(a,b);for(var e=0;e<b;e+=1)a[e]=c[e]&255;return a}function p(a,b){if(c.isBuffer(b)){var e=f(b.length)|0;a=d(a,e);if(0===a.length)return a;b.copy(a,0,0,e);return a}if(b){if("undefined"!==typeof ArrayBuffer&&b.buffer instanceof ArrayBuffer||"length"in b)return(e="number"!==typeof b.length)||(e=b.length,e=e!==e),e?d(a,0):n(a,b);if("Buffer"===b.type&&u(b.data))return n(a,b.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");}function f(a){if(a>=
(c.TYPED_ARRAY_SUPPORT?2147483647:1073741823))throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+(c.TYPED_ARRAY_SUPPORT?2147483647:1073741823).toString(16)+" bytes");return a|0}function r(a,b){if(c.isBuffer(a))return a.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(a)||a instanceof ArrayBuffer))return a.byteLength;"string"!==typeof a&&(a=""+a);var f=a.length;if(0===f)return 0;for(var d=!1;;)switch(b){case "ascii":case "latin1":case "binary":return f;
case "utf8":case "utf-8":case void 0:return I(a).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return 2*f;case "hex":return f>>>1;case "base64":return K.toByteArray(H(a)).length;default:if(d)return I(a).length;b=(""+b).toLowerCase();d=!0}}function z(a,c,b){var f=!1;if(void 0===c||0>c)c=0;if(c>this.length)return"";if(void 0===b||b>this.length)b=this.length;if(0>=b)return"";b>>>=0;c>>>=0;if(b<=c)return"";for(a||(a="utf8");;)switch(a){case "hex":a=c;c=b;b=this.length;if(!a||0>a)a=0;
if(!c||0>c||c>b)c=b;f="";for(b=a;b<c;++b)a=f,f=this[b],f=16>f?"0"+f.toString(16):f.toString(16),f=a+f;return f;case "utf8":case "utf-8":return F(this,c,b);case "ascii":a="";for(b=Math.min(this.length,b);c<b;++c)a+=String.fromCharCode(this[c]&127);return a;case "latin1":case "binary":a="";for(b=Math.min(this.length,b);c<b;++c)a+=String.fromCharCode(this[c]);return a;case "base64":return c=0===c&&b===this.length?K.fromByteArray(this):K.fromByteArray(this.slice(c,b)),c;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":c=
this.slice(c,b);b="";for(a=0;a<c.length;a+=2)b+=String.fromCharCode(c[a]+256*c[a+1]);return b;default:if(f)throw new TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase();f=!0}}function x(a,c,b){var f=a[c];a[c]=a[b];a[b]=f}function l(a,b,f,d,e){if(0===a.length)return-1;"string"===typeof f?(d=f,f=0):2147483647<f?f=2147483647:-2147483648>f&&(f=-2147483648);f=+f;isNaN(f)&&(f=e?0:a.length-1);0>f&&(f=a.length+f);if(f>=a.length){if(e)return-1;f=a.length-1}else if(0>f)if(e)f=0;else return-1;"string"===
typeof b&&(b=c.from(b,d));if(c.isBuffer(b))return 0===b.length?-1:w(a,b,f,d,e);if("number"===typeof b)return b&=255,c.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?e?Uint8Array.prototype.indexOf.call(a,b,f):Uint8Array.prototype.lastIndexOf.call(a,b,f):w(a,[b],f,d,e);throw new TypeError("val must be string, number or Buffer");}function w(a,c,b,f,d){function e(a,c){return 1===g?a[c]:a.readUInt16BE(c*g)}var g=1,k=a.length,q=c.length;if(void 0!==f&&(f=String(f).toLowerCase(),"ucs2"===
f||"ucs-2"===f||"utf16le"===f||"utf-16le"===f)){if(2>a.length||2>c.length)return-1;g=2;k/=2;q/=2;b/=2}if(d)for(f=-1;b<k;b++)if(e(a,b)===e(c,-1===f?0:b-f)){if(-1===f&&(f=b),b-f+1===q)return f*g}else-1!==f&&(b-=b-f),f=-1;else for(b+q>k&&(b=k-q);0<=b;b--){k=!0;for(f=0;f<q;f++)if(e(a,b+f)!==e(c,f)){k=!1;break}if(k)return b}return-1}function F(a,c,b){b=Math.min(a.length,b);for(var f=[];c<b;){var d=a[c],e=null,g=239<d?4:223<d?3:191<d?2:1;if(c+g<=b){var k,q,n;switch(g){case 1:128>d&&(e=d);break;case 2:k=
a[c+1];128===(k&192)&&(d=(d&31)<<6|k&63,127<d&&(e=d));break;case 3:k=a[c+1];q=a[c+2];128===(k&192)&&128===(q&192)&&(d=(d&15)<<12|(k&63)<<6|q&63,2047<d&&(55296>d||57343<d)&&(e=d));break;case 4:k=a[c+1],q=a[c+2],n=a[c+3],128===(k&192)&&128===(q&192)&&128===(n&192)&&(d=(d&15)<<18|(k&63)<<12|(q&63)<<6|n&63,65535<d&&1114112>d&&(e=d))}}null===e?(e=65533,g=1):65535<e&&(e-=65536,f.push(e>>>10&1023|55296),e=56320|e&1023);f.push(e);c+=g}a=f.length;if(a<=v)f=String.fromCharCode.apply(String,f);else{b="";for(c=
0;c<a;)b+=String.fromCharCode.apply(String,f.slice(c,c+=v));f=b}return f}function B(a,c,b){if(0!==a%1||0>a)throw new RangeError("offset is not uint");if(a+c>b)throw new RangeError("Trying to access beyond buffer length");}function A(a,b,f,d,e,g){if(!c.isBuffer(a))throw new TypeError('"buffer" argument must be a Buffer instance');if(b>e||b<g)throw new RangeError('"value" argument is out of bounds');if(f+d>a.length)throw new RangeError("Index out of range");}function L(a,c,b,f){0>c&&(c=65535+c+1);for(var d=
0,e=Math.min(a.length-b,2);d<e;++d)a[b+d]=(c&255<<8*(f?d:1-d))>>>8*(f?d:1-d)}function G(a,c,b,f){0>c&&(c=4294967295+c+1);for(var d=0,e=Math.min(a.length-b,4);d<e;++d)a[b+d]=c>>>8*(f?d:3-d)&255}function J(a,c,b,f,d,e){if(b+f>a.length)throw new RangeError("Index out of range");if(0>b)throw new RangeError("Index out of range");}function C(a,c,b,f,d){d||J(a,c,b,4,3.4028234663852886E38,-3.4028234663852886E38);M.write(a,c,b,f,23,4);return b+4}function E(a,c,b,f,d){d||J(a,c,b,8,1.7976931348623157E308,-1.7976931348623157E308);
M.write(a,c,b,f,52,8);return b+8}function H(a){a=a.trim?a.trim():a.replace(/^\s+|\s+$/g,"");a=a.replace(t,"");if(2>a.length)return"";for(;0!==a.length%4;)a+="=";return a}function I(a,c){c=c||Infinity;for(var b,f=a.length,d=null,e=[],g=0;g<f;++g){b=a.charCodeAt(g);if(55295<b&&57344>b){if(!d){if(56319<b){-1<(c-=3)&&e.push(239,191,189);continue}else if(g+1===f){-1<(c-=3)&&e.push(239,191,189);continue}d=b;continue}if(56320>b){-1<(c-=3)&&e.push(239,191,189);d=b;continue}b=(d-55296<<10|b-56320)+65536}else d&&
-1<(c-=3)&&e.push(239,191,189);d=null;if(128>b){if(0>--c)break;e.push(b)}else if(2048>b){if(0>(c-=2))break;e.push(b>>6|192,b&63|128)}else if(65536>b){if(0>(c-=3))break;e.push(b>>12|224,b>>6&63|128,b&63|128)}else if(1114112>b){if(0>(c-=4))break;e.push(b>>18|240,b>>12&63|128,b>>6&63|128,b&63|128)}else throw Error("Invalid code point");}return e}function O(a){for(var c=[],b=0;b<a.length;++b)c.push(a.charCodeAt(b)&255);return c}function Q(a,c,b,f){for(var d=0;d<f&&!(d+b>=c.length||d>=a.length);++d)c[d+
b]=a[d];return d}var K=e("base64-js"),M=e("ieee754"),u=e("isarray");h.Buffer=c;h.SlowBuffer=function(a){+a!=a&&(a=0);return c.alloc(+a)};h.INSPECT_MAX_BYTES=50;c.TYPED_ARRAY_SUPPORT=void 0!==b.TYPED_ARRAY_SUPPORT?b.TYPED_ARRAY_SUPPORT:a();h.kMaxLength=c.TYPED_ARRAY_SUPPORT?2147483647:1073741823;c.poolSize=8192;c._augment=function(a){a.__proto__=c.prototype;return a};c.from=function(a,c,b){return g(null,a,c,b)};c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,
"undefined"!==typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0}));c.alloc=function(a,c,b){k(a);a=0>=a?d(null,a):void 0!==c?"string"===typeof b?d(null,a).fill(c,b):d(null,a).fill(c):d(null,a);return a};c.allocUnsafe=function(a){return m(null,a)};c.allocUnsafeSlow=function(a){return m(null,a)};c.isBuffer=function(a){return!(null==a||!a._isBuffer)};c.compare=function(a,b){if(!c.isBuffer(a)||!c.isBuffer(b))throw new TypeError("Arguments must be Buffers");
if(a===b)return 0;for(var f=a.length,d=b.length,e=0,g=Math.min(f,d);e<g;++e)if(a[e]!==b[e]){f=a[e];d=b[e];break}return f<d?-1:d<f?1:0};c.isEncoding=function(a){switch(String(a).toLowerCase()){case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return!0;default:return!1}};c.concat=function(a,b){if(!u(a))throw new TypeError('"list" argument must be an Array of Buffers');if(0===a.length)return c.alloc(0);var f;
if(void 0===b)for(f=b=0;f<a.length;++f)b+=a[f].length;var d=c.allocUnsafe(b),e=0;for(f=0;f<a.length;++f){var g=a[f];if(!c.isBuffer(g))throw new TypeError('"list" argument must be an Array of Buffers');g.copy(d,e);e+=g.length}return d};c.byteLength=r;c.prototype._isBuffer=!0;c.prototype.swap16=function(){var a=this.length;if(0!==a%2)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var c=0;c<a;c+=2)x(this,c,c+1);return this};c.prototype.swap32=function(){var a=this.length;if(0!==
a%4)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var c=0;c<a;c+=4)x(this,c,c+3),x(this,c+1,c+2);return this};c.prototype.swap64=function(){var a=this.length;if(0!==a%8)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var c=0;c<a;c+=8)x(this,c,c+7),x(this,c+1,c+6),x(this,c+2,c+5),x(this,c+3,c+4);return this};c.prototype.toString=function(){var a=this.length|0;return 0===a?"":0===arguments.length?F(this,0,a):z.apply(this,arguments)};c.prototype.equals=function(a){if(!c.isBuffer(a))throw new TypeError("Argument must be a Buffer");
return this===a?!0:0===c.compare(this,a)};c.prototype.inspect=function(){var a="",c=h.INSPECT_MAX_BYTES;0<this.length&&(a=this.toString("hex",0,c).match(/.{2}/g).join(" "),this.length>c&&(a+=" ... "));return"<Buffer "+a+">"};c.prototype.compare=function(a,b,f,d,e){if(!c.isBuffer(a))throw new TypeError("Argument must be a Buffer");void 0===b&&(b=0);void 0===f&&(f=a?a.length:0);void 0===d&&(d=0);void 0===e&&(e=this.length);if(0>b||f>a.length||0>d||e>this.length)throw new RangeError("out of range index");
if(d>=e&&b>=f)return 0;if(d>=e)return-1;if(b>=f)return 1;b>>>=0;f>>>=0;d>>>=0;e>>>=0;if(this===a)return 0;var g=e-d,k=f-b,n=Math.min(g,k);d=this.slice(d,e);a=a.slice(b,f);for(b=0;b<n;++b)if(d[b]!==a[b]){g=d[b];k=a[b];break}return g<k?-1:k<g?1:0};c.prototype.includes=function(a,c,b){return-1!==this.indexOf(a,c,b)};c.prototype.indexOf=function(a,c,b){return l(this,a,c,b,!0)};c.prototype.lastIndexOf=function(a,c,b){return l(this,a,c,b,!1)};c.prototype.write=function(a,c,b,f){if(void 0===c)f="utf8",b=
this.length,c=0;else if(void 0===b&&"string"===typeof c)f=c,b=this.length,c=0;else if(isFinite(c))c|=0,isFinite(b)?(b|=0,void 0===f&&(f="utf8")):(f=b,b=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var d=this.length-c;if(void 0===b||b>d)b=d;if(0<a.length&&(0>b||0>c)||c>this.length)throw new RangeError("Attempt to write outside buffer bounds");f||(f="utf8");for(d=!1;;)switch(f){case "hex":a:{c=Number(c)||0;f=this.length-c;b?(b=Number(b),b>f&&(b=
f)):b=f;f=a.length;if(0!==f%2)throw new TypeError("Invalid hex string");b>f/2&&(b=f/2);for(f=0;f<b;++f){d=parseInt(a.substr(2*f,2),16);if(isNaN(d)){a=f;break a}this[c+f]=d}a=f}return a;case "utf8":case "utf-8":return Q(I(a,this.length-c),this,c,b);case "ascii":return Q(O(a),this,c,b);case "latin1":case "binary":return Q(O(a),this,c,b);case "base64":return Q(K.toByteArray(H(a)),this,c,b);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":f=this.length-c;for(var e,g=[],k=0;k<a.length&&!(0>(f-=
2));++k)e=a.charCodeAt(k),d=e>>8,e%=256,g.push(e),g.push(d);return Q(g,this,c,b);default:if(d)throw new TypeError("Unknown encoding: "+f);f=(""+f).toLowerCase();d=!0}};c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var v=4096;c.prototype.slice=function(a,b){var f=this.length;a=~~a;b=void 0===b?f:~~b;0>a?(a+=f,0>a&&(a=0)):a>f&&(a=f);0>b?(b+=f,0>b&&(b=0)):b>f&&(b=f);b<a&&(b=a);if(c.TYPED_ARRAY_SUPPORT)f=this.subarray(a,b),f.__proto__=c.prototype;
else for(var d=b-a,f=new c(d,void 0),e=0;e<d;++e)f[e]=this[e+a];return f};c.prototype.readUIntLE=function(a,c,b){a|=0;c|=0;b||B(a,c,this.length);b=this[a];for(var f=1,d=0;++d<c&&(f*=256);)b+=this[a+d]*f;return b};c.prototype.readUIntBE=function(a,c,b){a|=0;c|=0;b||B(a,c,this.length);b=this[a+--c];for(var f=1;0<c&&(f*=256);)b+=this[a+--c]*f;return b};c.prototype.readUInt8=function(a,c){c||B(a,1,this.length);return this[a]};c.prototype.readUInt16LE=function(a,c){c||B(a,2,this.length);return this[a]|
this[a+1]<<8};c.prototype.readUInt16BE=function(a,c){c||B(a,2,this.length);return this[a]<<8|this[a+1]};c.prototype.readUInt32LE=function(a,c){c||B(a,4,this.length);return(this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]};c.prototype.readUInt32BE=function(a,c){c||B(a,4,this.length);return 16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])};c.prototype.readIntLE=function(a,c,b){a|=0;c|=0;b||B(a,c,this.length);b=this[a];for(var f=1,d=0;++d<c&&(f*=256);)b+=this[a+d]*f;b>=128*f&&(b-=Math.pow(2,
8*c));return b};c.prototype.readIntBE=function(a,c,b){a|=0;c|=0;b||B(a,c,this.length);b=c;for(var f=1,d=this[a+--b];0<b&&(f*=256);)d+=this[a+--b]*f;d>=128*f&&(d-=Math.pow(2,8*c));return d};c.prototype.readInt8=function(a,c){c||B(a,1,this.length);return this[a]&128?-1*(255-this[a]+1):this[a]};c.prototype.readInt16LE=function(a,c){c||B(a,2,this.length);var b=this[a]|this[a+1]<<8;return b&32768?b|4294901760:b};c.prototype.readInt16BE=function(a,c){c||B(a,2,this.length);var b=this[a+1]|this[a]<<8;return b&
32768?b|4294901760:b};c.prototype.readInt32LE=function(a,c){c||B(a,4,this.length);return this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24};c.prototype.readInt32BE=function(a,c){c||B(a,4,this.length);return this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]};c.prototype.readFloatLE=function(a,c){c||B(a,4,this.length);return M.read(this,a,!0,23,4)};c.prototype.readFloatBE=function(a,c){c||B(a,4,this.length);return M.read(this,a,!1,23,4)};c.prototype.readDoubleLE=function(a,c){c||B(a,8,this.length);return M.read(this,
a,!0,52,8)};c.prototype.readDoubleBE=function(a,c){c||B(a,8,this.length);return M.read(this,a,!1,52,8)};c.prototype.writeUIntLE=function(a,c,b,f){a=+a;c|=0;b|=0;f||A(this,a,c,b,Math.pow(2,8*b)-1,0);f=1;var d=0;for(this[c]=a&255;++d<b&&(f*=256);)this[c+d]=a/f&255;return c+b};c.prototype.writeUIntBE=function(a,c,b,f){a=+a;c|=0;b|=0;f||A(this,a,c,b,Math.pow(2,8*b)-1,0);f=b-1;var d=1;for(this[c+f]=a&255;0<=--f&&(d*=256);)this[c+f]=a/d&255;return c+b};c.prototype.writeUInt8=function(a,b,f){a=+a;b|=0;f||
A(this,a,b,1,255,0);c.TYPED_ARRAY_SUPPORT||(a=Math.floor(a));this[b]=a&255;return b+1};c.prototype.writeUInt16LE=function(a,b,f){a=+a;b|=0;f||A(this,a,b,2,65535,0);c.TYPED_ARRAY_SUPPORT?(this[b]=a&255,this[b+1]=a>>>8):L(this,a,b,!0);return b+2};c.prototype.writeUInt16BE=function(a,b,f){a=+a;b|=0;f||A(this,a,b,2,65535,0);c.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=a&255):L(this,a,b,!1);return b+2};c.prototype.writeUInt32LE=function(a,b,f){a=+a;b|=0;f||A(this,a,b,4,4294967295,0);c.TYPED_ARRAY_SUPPORT?
(this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=a&255):G(this,a,b,!0);return b+4};c.prototype.writeUInt32BE=function(a,b,f){a=+a;b|=0;f||A(this,a,b,4,4294967295,0);c.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=a&255):G(this,a,b,!1);return b+4};c.prototype.writeIntLE=function(a,c,b,f){a=+a;c|=0;f||(f=Math.pow(2,8*b-1),A(this,a,c,b,f-1,-f));f=0;var d=1,e=0;for(this[c]=a&255;++f<b&&(d*=256);)0>a&&0===e&&0!==this[c+f-1]&&(e=1),this[c+f]=(a/d>>0)-e&255;return c+
b};c.prototype.writeIntBE=function(a,c,b,f){a=+a;c|=0;f||(f=Math.pow(2,8*b-1),A(this,a,c,b,f-1,-f));f=b-1;var d=1,e=0;for(this[c+f]=a&255;0<=--f&&(d*=256);)0>a&&0===e&&0!==this[c+f+1]&&(e=1),this[c+f]=(a/d>>0)-e&255;return c+b};c.prototype.writeInt8=function(a,b,f){a=+a;b|=0;f||A(this,a,b,1,127,-128);c.TYPED_ARRAY_SUPPORT||(a=Math.floor(a));0>a&&(a=255+a+1);this[b]=a&255;return b+1};c.prototype.writeInt16LE=function(a,b,f){a=+a;b|=0;f||A(this,a,b,2,32767,-32768);c.TYPED_ARRAY_SUPPORT?(this[b]=a&255,
this[b+1]=a>>>8):L(this,a,b,!0);return b+2};c.prototype.writeInt16BE=function(a,b,f){a=+a;b|=0;f||A(this,a,b,2,32767,-32768);c.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=a&255):L(this,a,b,!1);return b+2};c.prototype.writeInt32LE=function(a,b,f){a=+a;b|=0;f||A(this,a,b,4,2147483647,-2147483648);c.TYPED_ARRAY_SUPPORT?(this[b]=a&255,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24):G(this,a,b,!0);return b+4};c.prototype.writeInt32BE=function(a,b,f){a=+a;b|=0;f||A(this,a,b,4,2147483647,-2147483648);
0>a&&(a=4294967295+a+1);c.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=a&255):G(this,a,b,!1);return b+4};c.prototype.writeFloatLE=function(a,c,b){return C(this,a,c,!0,b)};c.prototype.writeFloatBE=function(a,c,b){return C(this,a,c,!1,b)};c.prototype.writeDoubleLE=function(a,c,b){return E(this,a,c,!0,b)};c.prototype.writeDoubleBE=function(a,c,b){return E(this,a,c,!1,b)};c.prototype.copy=function(a,b,f,d){f||(f=0);d||0===d||(d=this.length);b>=a.length&&(b=a.length);
b||(b=0);0<d&&d<f&&(d=f);if(d===f||0===a.length||0===this.length)return 0;if(0>b)throw new RangeError("targetStart out of bounds");if(0>f||f>=this.length)throw new RangeError("sourceStart out of bounds");if(0>d)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length);a.length-b<d-f&&(d=a.length-b+f);var e=d-f;if(this===a&&f<b&&b<d)for(d=e-1;0<=d;--d)a[d+b]=this[d+f];else if(1E3>e||!c.TYPED_ARRAY_SUPPORT)for(d=0;d<e;++d)a[d+b]=this[d+f];else Uint8Array.prototype.set.call(a,this.subarray(f,
f+e),b);return e};c.prototype.fill=function(a,b,f,d){if("string"===typeof a){"string"===typeof b?(d=b,b=0,f=this.length):"string"===typeof f&&(d=f,f=this.length);if(1===a.length){var e=a.charCodeAt(0);256>e&&(a=e)}if(void 0!==d&&"string"!==typeof d)throw new TypeError("encoding must be a string");if("string"===typeof d&&!c.isEncoding(d))throw new TypeError("Unknown encoding: "+d);}else"number"===typeof a&&(a&=255);if(0>b||this.length<b||this.length<f)throw new RangeError("Out of range index");if(f<=
b)return this;b>>>=0;f=void 0===f?this.length:f>>>0;a||(a=0);if("number"===typeof a)for(d=b;d<f;++d)this[d]=a;else for(a=c.isBuffer(a)?a:I((new c(a,d)).toString()),e=a.length,d=0;d<f-b;++d)this[d+b]=a[d%e];return this};var t=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"base64-js":23,ieee754:27,isarray:28}],26:[function(e,l,h){function b(){this._events=this._events||{};this._maxListeners=this._maxListeners||
void 0}function a(a){return"function"===typeof a}function d(a){return"object"===typeof a&&null!==a}l.exports=b;b.EventEmitter=b;b.prototype._events=void 0;b.prototype._maxListeners=void 0;b.defaultMaxListeners=10;b.prototype.setMaxListeners=function(a){if("number"!==typeof a||0>a||isNaN(a))throw TypeError("n must be a positive number");this._maxListeners=a;return this};b.prototype.emit=function(b){var c,e,m,n;this._events||(this._events={});if("error"===b&&(!this._events.error||d(this._events.error)&&
!this._events.error.length)){c=arguments[1];if(c instanceof Error)throw c;e=Error('Uncaught, unspecified "error" event. ('+c+")");e.context=c;throw e;}e=this._events[b];if(void 0===e)return!1;if(a(e))switch(arguments.length){case 1:e.call(this);break;case 2:e.call(this,arguments[1]);break;case 3:e.call(this,arguments[1],arguments[2]);break;default:c=Array.prototype.slice.call(arguments,1),e.apply(this,c)}else if(d(e))for(c=Array.prototype.slice.call(arguments,1),n=e.slice(),e=n.length,m=0;m<e;m++)n[m].apply(this,
c);return!0};b.prototype.addListener=function(c,e){var g;if(!a(e))throw TypeError("listener must be a function");this._events||(this._events={});this._events.newListener&&this.emit("newListener",c,a(e.listener)?e.listener:e);this._events[c]?d(this._events[c])?this._events[c].push(e):this._events[c]=[this._events[c],e]:this._events[c]=e;d(this._events[c])&&!this._events[c].warned&&(g=void 0!==this._maxListeners?this._maxListeners:b.defaultMaxListeners)&&0<g&&this._events[c].length>g&&(this._events[c].warned=
!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[c].length),"function"===typeof console.trace&&console.trace());return this};b.prototype.on=b.prototype.addListener;b.prototype.once=function(b,d){function c(){this.removeListener(b,c);e||(e=!0,d.apply(this,arguments))}if(!a(d))throw TypeError("listener must be a function");var e=!1;c.listener=d;this.on(b,c);return this};b.prototype.removeListener=
function(b,e){var c,g,n;if(!a(e))throw TypeError("listener must be a function");if(!this._events||!this._events[b])return this;c=this._events[b];n=c.length;g=-1;if(c===e||a(c.listener)&&c.listener===e)delete this._events[b],this._events.removeListener&&this.emit("removeListener",b,e);else if(d(c)){for(;0<n--;)if(c[n]===e||c[n].listener&&c[n].listener===e){g=n;break}if(0>g)return this;1===c.length?(c.length=0,delete this._events[b]):c.splice(g,1);this._events.removeListener&&this.emit("removeListener",
b,e)}return this};b.prototype.removeAllListeners=function(b){var c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[b]&&delete this._events[b],this;if(0===arguments.length){for(c in this._events)"removeListener"!==c&&this.removeAllListeners(c);this.removeAllListeners("removeListener");this._events={};return this}c=this._events[b];if(a(c))this.removeListener(b,c);else if(c)for(;c.length;)this.removeListener(b,c[c.length-1]);delete this._events[b];
return this};b.prototype.listeners=function(b){return this._events&&this._events[b]?a(this._events[b])?[this._events[b]]:this._events[b].slice():[]};b.prototype.listenerCount=function(b){if(this._events){b=this._events[b];if(a(b))return 1;if(b)return b.length}return 0};b.listenerCount=function(a,b){return a.listenerCount(b)}},{}],27:[function(e,l,h){h.read=function(b,a,d,c,e){var g;g=8*e-c-1;var m=(1<<g)-1,n=m>>1,p=-7;e=d?e-1:0;var f=d?-1:1,r=b[a+e];e+=f;d=r&(1<<-p)-1;r>>=-p;for(p+=g;0<p;d=256*d+
b[a+e],e+=f,p-=8);g=d&(1<<-p)-1;d>>=-p;for(p+=c;0<p;g=256*g+b[a+e],e+=f,p-=8);if(0===d)d=1-n;else{if(d===m)return g?NaN:Infinity*(r?-1:1);g+=Math.pow(2,c);d-=n}return(r?-1:1)*g*Math.pow(2,d-c)};h.write=function(b,a,d,c,e,k){var g,n=8*k-e-1,p=(1<<n)-1,f=p>>1,r=23===e?Math.pow(2,-24)-Math.pow(2,-77):0;k=c?0:k-1;var h=c?1:-1,x=0>a||0===a&&0>1/a?1:0;a=Math.abs(a);isNaN(a)||Infinity===a?(a=isNaN(a)?1:0,c=p):(c=Math.floor(Math.log(a)/Math.LN2),1>a*(g=Math.pow(2,-c))&&(c--,g*=2),a=1<=c+f?a+r/g:a+r*Math.pow(2,
1-f),2<=a*g&&(c++,g/=2),c+f>=p?(a=0,c=p):1<=c+f?(a=(a*g-1)*Math.pow(2,e),c+=f):(a=a*Math.pow(2,f-1)*Math.pow(2,e),c=0));for(;8<=e;b[d+k]=a&255,k+=h,a/=256,e-=8);c=c<<e|a;for(n+=e;0<n;b[d+k]=c&255,k+=h,c/=256,n-=8);b[d+k-h]|=128*x}},{}],28:[function(e,l,h){var b={}.toString;l.exports=Array.isArray||function(a){return"[object Array]"==b.call(a)}},{}],29:[function(e,l,h){function b(){throw Error("setTimeout has not been defined");}function a(){throw Error("clearTimeout has not been defined");}function d(a){if(p===
setTimeout)return setTimeout(a,0);if((p===b||!p)&&setTimeout)return p=setTimeout,setTimeout(a,0);try{return p(a,0)}catch(F){try{return p.call(null,a,0)}catch(B){return p.call(this,a,0)}}}function c(b){if(f===clearTimeout)return clearTimeout(b);if((f===a||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(b);try{return f(b)}catch(F){try{return f.call(null,b)}catch(B){return f.call(this,b)}}}function g(){z&&x&&(z=!1,x.length?r=x.concat(r):D=-1,r.length&&k())}function k(){if(!z){var a=d(g);z=!0;for(var b=
r.length;b;){x=r;for(r=[];++D<b;)x&&x[D].run();D=-1;b=r.length}x=null;z=!1;c(a)}}function m(a,b){this.fun=a;this.array=b}function n(){}e=l.exports={};var p,f;try{p="function"===typeof setTimeout?setTimeout:b}catch(w){p=b}try{f="function"===typeof clearTimeout?clearTimeout:a}catch(w){f=a}var r=[],z=!1,x,D=-1;e.nextTick=function(a){var b=Array(arguments.length-1);if(1<arguments.length)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];r.push(new m(a,b));1!==r.length||z||d(k)};m.prototype.run=function(){this.fun.apply(null,
this.array)};e.title="browser";e.browser=!0;e.env={};e.argv=[];e.version="";e.versions={};e.on=n;e.addListener=n;e.once=n;e.off=n;e.removeListener=n;e.removeAllListeners=n;e.emit=n;e.binding=function(a){throw Error("process.binding is not supported");};e.cwd=function(){return"/"};e.chdir=function(a){throw Error("process.chdir is not supported");};e.umask=function(){return 0}},{}],30:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),
e("./cipher-core")):a(b.CryptoJS)})(this,function(b){(function(){var a=b.lib.BlockCipher,d=b.algo,c=[],e=[],k=[],m=[],n=[],p=[],f=[],r=[],h=[],x=[];(function(){for(var a=[],b=0;256>b;b++)a[b]=128>b?b<<1:b<<1^283;for(var d=0,g=0,b=0;256>b;b++){var z=g^g<<1^g<<2^g<<3^g<<4,z=z>>>8^z&255^99;c[d]=z;e[z]=d;var l=a[d],D=a[l],C=a[D],E=257*a[z]^16843008*z;k[d]=E<<24|E>>>8;m[d]=E<<16|E>>>16;n[d]=E<<8|E>>>24;p[d]=E;E=16843009*C^65537*D^257*l^16843008*d;f[z]=E<<24|E>>>8;r[z]=E<<16|E>>>16;h[z]=E<<8|E>>>24;x[z]=
E;d?(d=l^a[a[a[C^l]]],g^=a[a[g]]):d=g=1}})();var l=[0,1,2,4,8,16,32,64,128,27,54],d=d.AES=a.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var a=this._keyPriorReset=this._key,b=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],g=0;g<a;g++)if(g<d)e[g]=b[g];else{var n=e[g-1];g%d?6<d&&4==g%d&&(n=c[n>>>24]<<24|c[n>>>16&255]<<16|c[n>>>8&255]<<8|c[n&255]):(n=n<<8|n>>>24,n=c[n>>>24]<<24|c[n>>>16&255]<<16|c[n>>>8&255]<<8|c[n&255],n^=l[g/d|0]<<24);
e[g]=e[g-d]^n}b=this._invKeySchedule=[];for(d=0;d<a;d++)g=a-d,n=d%4?e[g]:e[g-4],b[d]=4>d||4>=g?n:f[c[n>>>24]]^r[c[n>>>16&255]]^h[c[n>>>8&255]]^x[c[n&255]]}},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,k,m,n,p,c)},decryptBlock:function(a,b){var c=a[b+1];a[b+1]=a[b+3];a[b+3]=c;this._doCryptBlock(a,b,this._invKeySchedule,f,r,h,x,e);c=a[b+1];a[b+1]=a[b+3];a[b+3]=c},_doCryptBlock:function(a,b,c,f,d,e,g,n){for(var k=this._nRounds,r=a[b]^c[0],p=a[b+1]^c[1],m=a[b+2]^c[2],h=a[b+3]^
c[3],w=4,z=1;z<k;z++)var A=f[r>>>24]^d[p>>>16&255]^e[m>>>8&255]^g[h&255]^c[w++],F=f[p>>>24]^d[m>>>16&255]^e[h>>>8&255]^g[r&255]^c[w++],l=f[m>>>24]^d[h>>>16&255]^e[r>>>8&255]^g[p&255]^c[w++],h=f[h>>>24]^d[r>>>16&255]^e[p>>>8&255]^g[m&255]^c[w++],r=A,p=F,m=l;A=(n[r>>>24]<<24|n[p>>>16&255]<<16|n[m>>>8&255]<<8|n[h&255])^c[w++];F=(n[p>>>24]<<24|n[m>>>16&255]<<16|n[h>>>8&255]<<8|n[r&255])^c[w++];l=(n[m>>>24]<<24|n[h>>>16&255]<<16|n[r>>>8&255]<<8|n[p&255])^c[w++];h=(n[h>>>24]<<24|n[r>>>16&255]<<16|n[p>>>
8&255]<<8|n[m&255])^c[w++];a[b]=A;a[b+1]=F;a[b+2]=l;a[b+3]=h},keySize:8});b.AES=a._createHelper(d)})();return b.AES})},{"./cipher-core":31,"./core":32,"./enc-base64":33,"./evpkdf":35,"./md5":40}],31:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){b.lib.Cipher||function(a){var d=b.lib,c=d.Base,e=d.WordArray,k=d.BufferedBlockAlgorithm,m=b.enc.Base64,n=b.algo.EvpKDF,p=d.Cipher=k.extend({cfg:c.extend(),createEncryptor:function(a,b){return this.create(this._ENC_XFORM_MODE,
a,b)},createDecryptor:function(a,b){return this.create(this._DEC_XFORM_MODE,a,b)},init:function(a,b,c){this.cfg=this.cfg.extend(c);this._xformMode=a;this._key=b;this.reset()},reset:function(){k.reset.call(this);this._doReset()},process:function(a){this._append(a);return this._process()},finalize:function(a){a&&this._append(a);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){return function(a){return{encrypt:function(b,c,f){return("string"==
typeof c?w:D).encrypt(a,b,c,f)},decrypt:function(b,c,f){return("string"==typeof c?w:D).decrypt(a,b,c,f)}}}}()});d.StreamCipher=p.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var f=b.mode={},r=d.BlockCipherMode=c.extend({createEncryptor:function(a,b){return this.Encryptor.create(a,b)},createDecryptor:function(a,b){return this.Decryptor.create(a,b)},init:function(a,b){this._cipher=a;this._iv=b}}),f=f.CBC=function(){function b(b,c,f){var d=this._iv;d?this._iv=a:d=this._prevBlock;
for(var e=0;e<f;e++)b[c+e]^=d[e]}var c=r.extend();c.Encryptor=c.extend({processBlock:function(a,c){var f=this._cipher,d=f.blockSize;b.call(this,a,c,d);f.encryptBlock(a,c);this._prevBlock=a.slice(c,c+d)}});c.Decryptor=c.extend({processBlock:function(a,c){var f=this._cipher,d=f.blockSize,e=a.slice(c,c+d);f.decryptBlock(a,c);b.call(this,a,c,d);this._prevBlock=e}});return c}(),h=(b.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,f=c<<24|c<<16|c<<8|c,d=[],g=0;g<c;g+=4)d.push(f);c=e.create(d,
c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=p.extend({cfg:p.cfg.extend({mode:f,padding:h}),reset:function(){p.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,
this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var l=d.CipherParams=c.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),f=(b.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?e.create([1398893684,1701076831]).concat(a).concat(b):b).toString(m)},parse:function(a){a=m.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=e.create(b.slice(2,4));b.splice(0,
4);a.sigBytes-=16}return l.create({ciphertext:a,salt:c})}},D=d.SerializableCipher=c.extend({cfg:c.extend({format:f}),encrypt:function(a,b,c,f){f=this.cfg.extend(f);var d=a.createEncryptor(c,f);b=d.finalize(b);d=d.cfg;return l.create({ciphertext:b,key:c,iv:d.iv,algorithm:a,mode:d.mode,padding:d.padding,blockSize:a.blockSize,formatter:f.format})},decrypt:function(a,b,c,f){f=this.cfg.extend(f);b=this._parse(b,f.format);return a.createDecryptor(c,f).finalize(b.ciphertext)},_parse:function(a,b){return"string"==
typeof a?b.parse(a,this):a}}),c=(b.kdf={}).OpenSSL={execute:function(a,b,c,f){f||(f=e.random(8));a=n.create({keySize:b+c}).compute(a,f);c=e.create(a.words.slice(b),4*c);a.sigBytes=4*b;return l.create({key:a,iv:c,salt:f})}},w=d.PasswordBasedCipher=D.extend({cfg:D.cfg.extend({kdf:c}),encrypt:function(a,b,c,f){f=this.cfg.extend(f);c=f.kdf.execute(c,a.keySize,a.ivSize);f.iv=c.iv;a=D.encrypt.call(this,a,b,c.key,f);a.mixIn(c);return a},decrypt:function(a,b,c,f){f=this.cfg.extend(f);b=this._parse(b,f.format);
c=f.kdf.execute(c,a.keySize,a.ivSize,b.salt);f.iv=c.iv;return D.decrypt.call(this,a,b,c.key,f)}})}()})},{"./core":32}],32:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a():b.CryptoJS=a()})(this,function(){var b=b||function(a,b){var c=Object.create||function(){function a(){}return function(b){a.prototype=b;b=new a;a.prototype=null;return b}}(),d={},e=d.lib={},m=e.Base=function(){return{extend:function(a){var b=c(this);a&&b.mixIn(a);b.hasOwnProperty("init")&&this.init!==b.init||(b.init=
function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),n=e.WordArray=m.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=b?c:4*a.length},toString:function(a){return(a||f).stringify(this)},
concat:function(a){var b=this.words,c=a.words,f=this.sigBytes;a=a.sigBytes;this.clamp();if(f%4)for(var d=0;d<a;d++)b[f+d>>>2]|=(c[d>>>2]>>>24-d%4*8&255)<<24-(f+d)%4*8;else for(d=0;d<a;d+=4)b[f+d>>>2]=c[d>>>2];this.sigBytes+=a;return this},clamp:function(){var b=this.words,c=this.sigBytes;b[c>>>2]&=4294967295<<32-c%4*8;b.length=a.ceil(c/4)},clone:function(){var a=m.clone.call(this);a.words=this.words.slice(0);return a},random:function(b){for(var c=[],f=function(b){var c=987654321;return function(){c=
36969*(c&65535)+(c>>16)&4294967295;b=18E3*(b&65535)+(b>>16)&4294967295;return(((c<<16)+b&4294967295)/4294967296+.5)*(.5<a.random()?1:-1)}},d=0,e;d<b;d+=4){var g=f(4294967296*(e||a.random()));e=987654071*g();c.push(4294967296*g()|0)}return new n.init(c,b)}}),p=d.enc={},f=p.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var c=[],f=0;f<a;f++){var d=b[f>>>2]>>>24-f%4*8&255;c.push((d>>>4).toString(16));c.push((d&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],
f=0;f<b;f+=2)c[f>>>3]|=parseInt(a.substr(f,2),16)<<24-f%8*4;return new n.init(c,b/2)}},r=p.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var c=[],f=0;f<a;f++)c.push(String.fromCharCode(b[f>>>2]>>>24-f%4*8&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],f=0;f<b;f++)c[f>>>2]|=(a.charCodeAt(f)&255)<<24-f%4*8;return new n.init(c,b)}},h=p.Utf8={stringify:function(a){try{return decodeURIComponent(escape(r.stringify(a)))}catch(F){throw Error("Malformed UTF-8 data");}},parse:function(a){return r.parse(unescape(encodeURIComponent(a)))}},
l=e.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=h.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(b){var c=this._data,f=c.words,d=c.sigBytes,e=this.blockSize,g=d/(4*e),g=b?a.ceil(g):a.max((g|0)-this._minBufferSize,0);b=g*e;d=a.min(4*b,d);if(b){for(var k=0;k<b;k+=e)this._doProcessBlock(f,k);k=f.splice(0,b);c.sigBytes-=d}return new n.init(k,d)},clone:function(){var a=m.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});e.Hasher=l.extend({cfg:m.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){l.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,c){return(new a.init(c)).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return(new D.HMAC.init(a,
c)).finalize(b)}}});var D=d.algo={};return d}(Math);return b})},{}],33:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(){var a=b.lib.WordArray;b.enc.Base64={stringify:function(a){var b=a.words,d=a.sigBytes,e=this._map;a.clamp();a=[];for(var m=0;m<d;m+=3)for(var n=(b[m>>>2]>>>24-m%4*8&255)<<16|(b[m+1>>>2]>>>24-(m+1)%4*8&255)<<8|b[m+2>>>2]>>>24-(m+2)%4*8&255,p=0;4>p&&m+.75*p<d;p++)a.push(e.charAt(n>>>6*(3-p)&63));if(b=e.charAt(64))for(;a.length%
4;)a.push(b);return a.join("")},parse:function(b){var c=b.length,d=this._map,e=this._reverseMap;if(!e)for(var e=this._reverseMap=[],m=0;m<d.length;m++)e[d.charCodeAt(m)]=m;if(d=d.charAt(64))d=b.indexOf(d),-1!==d&&(c=d);for(var d=[],n=m=0;n<c;n++)if(n%4){var p=e[b.charCodeAt(n-1)]<<n%4*2,f=e[b.charCodeAt(n)]>>>6-n%4*2;d[m>>>2]|=(p|f)<<24-m%4*8;m++}return a.create(d,m)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();return b.enc.Base64})},{"./core":32}],34:[function(e,
l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(){function a(a){return a<<8&4278255360|a>>>8&16711935}var d=b.lib.WordArray,c=b.enc;c.Utf16=c.Utf16BE={stringify:function(a){var b=a.words;a=a.sigBytes;for(var c=[],d=0;d<a;d+=2)c.push(String.fromCharCode(b[d>>>2]>>>16-d%4*8&65535));return c.join("")},parse:function(a){for(var b=a.length,c=[],e=0;e<b;e++)c[e>>>1]|=a.charCodeAt(e)<<16-e%2*16;return d.create(c,2*b)}};c.Utf16LE={stringify:function(b){var c=
b.words;b=b.sigBytes;for(var d=[],e=0;e<b;e+=2){var g=a(c[e>>>2]>>>16-e%4*8&65535);d.push(String.fromCharCode(g))}return d.join("")},parse:function(b){for(var c=b.length,e=[],g=0;g<c;g++)e[g>>>1]|=a(b.charCodeAt(g)<<16-g%2*16);return d.create(e,2*c)}}})();return b.enc.Utf16})},{"./core":32}],35:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./sha1"),e("./hmac")):a(b.CryptoJS)})(this,function(b){(function(){var a=b.lib,d=a.Base,c=a.WordArray,a=b.algo,e=a.EvpKDF=
d.extend({cfg:d.extend({keySize:4,hasher:a.MD5,iterations:1}),init:function(a){this.cfg=this.cfg.extend(a)},compute:function(a,b){for(var d=this.cfg,e=d.hasher.create(),f=c.create(),g=f.words,k=d.keySize,d=d.iterations;g.length<k;){h&&e.update(h);var h=e.update(a).finalize(b);e.reset();for(var m=1;m<d;m++)h=e.finalize(h),e.reset();f.concat(h)}f.sigBytes=4*k;return f}});b.EvpKDF=function(a,b,c){return e.create(c).compute(a,b)}})();return b.EvpKDF})},{"./core":32,"./hmac":37,"./sha1":56}],36:[function(e,
l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){(function(a){var d=b.lib.CipherParams,c=b.enc.Hex;b.format.Hex={stringify:function(a){return a.ciphertext.toString(c)},parse:function(a){a=c.parse(a);return d.create({ciphertext:a})}}})();return b.format.Hex})},{"./cipher-core":31,"./core":32}],37:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(){var a=b.enc.Utf8;
b.algo.HMAC=b.lib.Base.extend({init:function(b,c){b=this._hasher=new b.init;"string"==typeof c&&(c=a.parse(c));var d=b.blockSize,e=4*d;c.sigBytes>e&&(c=b.finalize(c));c.clamp();for(var h=this._oKey=c.clone(),n=this._iKey=c.clone(),p=h.words,f=n.words,r=0;r<d;r++)p[r]^=1549556828,f[r]^=909522486;h.sigBytes=n.sigBytes=e;this.reset()},reset:function(){var a=this._hasher;a.reset();a.update(this._iKey)},update:function(a){this._hasher.update(a);return this},finalize:function(a){var b=this._hasher;a=b.finalize(a);
b.reset();return b.finalize(this._oKey.clone().concat(a))}})})()})},{"./core":32}],38:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./x64-core"),e("./lib-typedarrays"),e("./enc-utf16"),e("./enc-base64"),e("./md5"),e("./sha1"),e("./sha256"),e("./sha224"),e("./sha512"),e("./sha384"),e("./sha3"),e("./ripemd160"),e("./hmac"),e("./pbkdf2"),e("./evpkdf"),e("./cipher-core"),e("./mode-cfb"),e("./mode-ctr"),e("./mode-ctr-gladman"),e("./mode-ofb"),e("./mode-ecb"),e("./pad-ansix923"),
e("./pad-iso10126"),e("./pad-iso97971"),e("./pad-zeropadding"),e("./pad-nopadding"),e("./format-hex"),e("./aes"),e("./tripledes"),e("./rc4"),e("./rabbit"),e("./rabbit-legacy")):b.CryptoJS=a(b.CryptoJS)})(this,function(b){return b})},{"./aes":30,"./cipher-core":31,"./core":32,"./enc-base64":33,"./enc-utf16":34,"./evpkdf":35,"./format-hex":36,"./hmac":37,"./lib-typedarrays":39,"./md5":40,"./mode-cfb":41,"./mode-ctr":43,"./mode-ctr-gladman":42,"./mode-ecb":44,"./mode-ofb":45,"./pad-ansix923":46,"./pad-iso10126":47,
"./pad-iso97971":48,"./pad-nopadding":49,"./pad-zeropadding":50,"./pbkdf2":51,"./rabbit":53,"./rabbit-legacy":52,"./rc4":54,"./ripemd160":55,"./sha1":56,"./sha224":57,"./sha256":58,"./sha3":59,"./sha384":60,"./sha512":61,"./tripledes":62,"./x64-core":63}],39:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(){if("function"==typeof ArrayBuffer){var a=b.lib.WordArray,d=a.init;(a.init=function(a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));
if(a instanceof Int8Array||"undefined"!==typeof Uint8ClampedArray&&a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array)a=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);if(a instanceof Uint8Array){for(var b=a.byteLength,c=[],e=0;e<b;e++)c[e>>>2]|=a[e]<<24-e%4*8;d.call(this,c,b)}else d.apply(this,arguments)}).prototype=a}})();return b.lib.WordArray})},{"./core":32}],
40:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(a){function d(a,b,c,f,d,e,g){a=a+(b&c|~b&f)+d+g;return(a<<e|a>>>32-e)+b}function c(a,b,c,f,d,e,g){a=a+(b&f|c&~f)+d+g;return(a<<e|a>>>32-e)+b}function e(a,b,c,f,d,e,g){a=a+(b^c^f)+d+g;return(a<<e|a>>>32-e)+b}function k(a,b,c,f,d,e,g){a=a+(c^(b|~f))+d+g;return(a<<e|a>>>32-e)+b}var h=b.lib,n=h.WordArray,p=h.Hasher,h=b.algo,f=[];(function(){for(var b=0;64>b;b++)f[b]=4294967296*
a.abs(a.sin(b+1))|0})();h=h.MD5=p.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(a,b){for(var g=0;16>g;g++){var n=b+g,h=a[n];a[n]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360}var g=this._hash.words,n=a[b+0],h=a[b+1],p=a[b+2],r=a[b+3],m=a[b+4],z=a[b+5],l=a[b+6],J=a[b+7],C=a[b+8],E=a[b+9],H=a[b+10],I=a[b+11],O=a[b+12],Q=a[b+13],K=a[b+14],M=a[b+15],u=g[0],v=g[1],t=g[2],q=g[3],u=d(u,v,t,q,n,7,f[0]),q=d(q,u,v,t,h,12,f[1]),t=
d(t,q,u,v,p,17,f[2]),v=d(v,t,q,u,r,22,f[3]),u=d(u,v,t,q,m,7,f[4]),q=d(q,u,v,t,z,12,f[5]),t=d(t,q,u,v,l,17,f[6]),v=d(v,t,q,u,J,22,f[7]),u=d(u,v,t,q,C,7,f[8]),q=d(q,u,v,t,E,12,f[9]),t=d(t,q,u,v,H,17,f[10]),v=d(v,t,q,u,I,22,f[11]),u=d(u,v,t,q,O,7,f[12]),q=d(q,u,v,t,Q,12,f[13]),t=d(t,q,u,v,K,17,f[14]),v=d(v,t,q,u,M,22,f[15]),u=c(u,v,t,q,h,5,f[16]),q=c(q,u,v,t,l,9,f[17]),t=c(t,q,u,v,I,14,f[18]),v=c(v,t,q,u,n,20,f[19]),u=c(u,v,t,q,z,5,f[20]),q=c(q,u,v,t,H,9,f[21]),t=c(t,q,u,v,M,14,f[22]),v=c(v,t,q,u,m,
20,f[23]),u=c(u,v,t,q,E,5,f[24]),q=c(q,u,v,t,K,9,f[25]),t=c(t,q,u,v,r,14,f[26]),v=c(v,t,q,u,C,20,f[27]),u=c(u,v,t,q,Q,5,f[28]),q=c(q,u,v,t,p,9,f[29]),t=c(t,q,u,v,J,14,f[30]),v=c(v,t,q,u,O,20,f[31]),u=e(u,v,t,q,z,4,f[32]),q=e(q,u,v,t,C,11,f[33]),t=e(t,q,u,v,I,16,f[34]),v=e(v,t,q,u,K,23,f[35]),u=e(u,v,t,q,h,4,f[36]),q=e(q,u,v,t,m,11,f[37]),t=e(t,q,u,v,J,16,f[38]),v=e(v,t,q,u,H,23,f[39]),u=e(u,v,t,q,Q,4,f[40]),q=e(q,u,v,t,n,11,f[41]),t=e(t,q,u,v,r,16,f[42]),v=e(v,t,q,u,l,23,f[43]),u=e(u,v,t,q,E,4,f[44]),
q=e(q,u,v,t,O,11,f[45]),t=e(t,q,u,v,M,16,f[46]),v=e(v,t,q,u,p,23,f[47]),u=k(u,v,t,q,n,6,f[48]),q=k(q,u,v,t,J,10,f[49]),t=k(t,q,u,v,K,15,f[50]),v=k(v,t,q,u,z,21,f[51]),u=k(u,v,t,q,O,6,f[52]),q=k(q,u,v,t,r,10,f[53]),t=k(t,q,u,v,H,15,f[54]),v=k(v,t,q,u,h,21,f[55]),u=k(u,v,t,q,C,6,f[56]),q=k(q,u,v,t,M,10,f[57]),t=k(t,q,u,v,l,15,f[58]),v=k(v,t,q,u,Q,21,f[59]),u=k(u,v,t,q,m,6,f[60]),q=k(q,u,v,t,I,10,f[61]),t=k(t,q,u,v,p,15,f[62]),v=k(v,t,q,u,E,21,f[63]);g[0]=g[0]+u|0;g[1]=g[1]+v|0;g[2]=g[2]+t|0;g[3]=g[3]+
q|0},_doFinalize:function(){var b=this._data,c=b.words,f=8*this._nDataBytes,d=8*b.sigBytes;c[d>>>5]|=128<<24-d%32;var e=a.floor(f/4294967296);c[(d+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;c[(d+64>>>9<<4)+14]=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360;b.sigBytes=4*(c.length+1);this._process();b=this._hash;c=b.words;for(f=0;4>f;f++)d=c[f],c[f]=(d<<8|d>>>24)&16711935|(d<<24|d>>>8)&4278255360;return b},clone:function(){var a=p.clone.call(this);a._hash=this._hash.clone();return a}});
b.MD5=p._createHelper(h);b.HmacMD5=p._createHmacHelper(h)})(Math);return b.MD5})},{"./core":32}],41:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){b.mode.CFB=function(){function a(a,b,d,e){var c=this._iv;c?(c=c.slice(0),this._iv=void 0):c=this._prevBlock;e.encryptBlock(c,0);for(e=0;e<d;e++)a[b+e]^=c[e]}var d=b.lib.BlockCipherMode.extend();d.Encryptor=d.extend({processBlock:function(b,d){var c=this._cipher,e=c.blockSize;
a.call(this,b,d,e,c);this._prevBlock=b.slice(d,d+e)}});d.Decryptor=d.extend({processBlock:function(b,d){var c=this._cipher,e=c.blockSize,g=b.slice(d,d+e);a.call(this,b,d,e,c);this._prevBlock=g}});return d}();return b.mode.CFB})},{"./cipher-core":31,"./core":32}],42:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){b.mode.CTRGladman=function(){function a(a){if(255===(a>>24&255)){var b=a>>16&255,c=a>>8&255;a&=255;255===
b?(b=0,255===c?(c=0,255===a?a=0:++a):++c):++b;a=0+(b<<16)+(c<<8)+a}else a+=16777216;return a}var d=b.lib.BlockCipherMode.extend(),c=d.Encryptor=d.extend({processBlock:function(b,c){var d=this._cipher,e=d.blockSize,g=this._iv,f=this._counter;g&&(f=this._counter=g.slice(0),this._iv=void 0);g=f;0===(g[0]=a(g[0]))&&(g[1]=a(g[1]));f=f.slice(0);d.encryptBlock(f,0);for(d=0;d<e;d++)b[c+d]^=f[d]}});d.Decryptor=c;return d}();return b.mode.CTRGladman})},{"./cipher-core":31,"./core":32}],43:[function(e,l,h){(function(b,
a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){b.mode.CTR=function(){var a=b.lib.BlockCipherMode.extend(),d=a.Encryptor=a.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize,e=this._iv,g=this._counter;e&&(g=this._counter=e.slice(0),this._iv=void 0);e=g.slice(0);c.encryptBlock(e,0);g[d-1]=g[d-1]+1|0;for(c=0;c<d;c++)a[b+c]^=e[c]}});a.Decryptor=d;return a}();return b.mode.CTR})},{"./cipher-core":31,"./core":32}],44:[function(e,
l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){b.mode.ECB=function(){var a=b.lib.BlockCipherMode.extend();a.Encryptor=a.extend({processBlock:function(a,b){this._cipher.encryptBlock(a,b)}});a.Decryptor=a.extend({processBlock:function(a,b){this._cipher.decryptBlock(a,b)}});return a}();return b.mode.ECB})},{"./cipher-core":31,"./core":32}],45:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):
a(b.CryptoJS)})(this,function(b){b.mode.OFB=function(){var a=b.lib.BlockCipherMode.extend(),d=a.Encryptor=a.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize,e=this._iv,g=this._keystream;e&&(g=this._keystream=e.slice(0),this._iv=void 0);c.encryptBlock(g,0);for(c=0;c<d;c++)a[b+c]^=g[c]}});a.Decryptor=d;return a}();return b.mode.OFB})},{"./cipher-core":31,"./core":32}],46:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,
function(b){b.pad.AnsiX923={pad:function(a,b){var c=a.sigBytes,d=4*b,d=d-c%d,c=c+d-1;a.clamp();a.words[c>>>2]|=d<<24-c%4*8;a.sigBytes+=d},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};return b.pad.Ansix923})},{"./cipher-core":31,"./core":32}],47:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){b.pad.Iso10126={pad:function(a,d){var c=4*d,c=c-a.sigBytes%c;a.concat(b.lib.WordArray.random(c-1)).concat(b.lib.WordArray.create([c<<
24],1))},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};return b.pad.Iso10126})},{"./cipher-core":31,"./core":32}],48:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){b.pad.Iso97971={pad:function(a,d){a.concat(b.lib.WordArray.create([2147483648],1));b.pad.ZeroPadding.pad(a,d)},unpad:function(a){b.pad.ZeroPadding.unpad(a);a.sigBytes--}};return b.pad.Iso97971})},{"./cipher-core":31,"./core":32}],49:[function(e,
l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){b.pad.NoPadding={pad:function(){},unpad:function(){}};return b.pad.NoPadding})},{"./cipher-core":31,"./core":32}],50:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){b.pad.ZeroPadding={pad:function(a,b){var c=4*b;a.clamp();a.sigBytes+=c-(a.sigBytes%c||c)},unpad:function(a){for(var b=a.words,c=a.sigBytes-
1;!(b[c>>>2]>>>24-c%4*8&255);)c--;a.sigBytes=c+1}};return b.pad.ZeroPadding})},{"./cipher-core":31,"./core":32}],51:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./sha1"),e("./hmac")):a(b.CryptoJS)})(this,function(b){(function(){var a=b.lib,d=a.Base,c=a.WordArray,a=b.algo,e=a.HMAC,k=a.PBKDF2=d.extend({cfg:d.extend({keySize:4,hasher:a.SHA1,iterations:1}),init:function(a){this.cfg=this.cfg.extend(a)},compute:function(a,b){for(var d=this.cfg,f=e.create(d.hasher,a),
g=c.create(),n=c.create([1]),k=g.words,h=n.words,m=d.keySize,d=d.iterations;k.length<m;){var l=f.update(b).finalize(n);f.reset();for(var B=l.words,A=B.length,L=l,G=1;G<d;G++){L=f.finalize(L);f.reset();for(var J=L.words,C=0;C<A;C++)B[C]^=J[C]}g.concat(l);h[0]++}g.sigBytes=4*m;return g}});b.PBKDF2=function(a,b,c){return k.create(c).compute(a,b)}})();return b.PBKDF2})},{"./core":32,"./hmac":37,"./sha1":56}],52:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./enc-base64"),
e("./md5"),e("./evpkdf"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){(function(){function a(){for(var a=this._X,b=this._C,c=0;8>c;c++)e[c]=b[c];b[0]=b[0]+1295307597+this._b|0;b[1]=b[1]+3545052371+(b[0]>>>0<e[0]>>>0?1:0)|0;b[2]=b[2]+886263092+(b[1]>>>0<e[1]>>>0?1:0)|0;b[3]=b[3]+1295307597+(b[2]>>>0<e[2]>>>0?1:0)|0;b[4]=b[4]+3545052371+(b[3]>>>0<e[3]>>>0?1:0)|0;b[5]=b[5]+886263092+(b[4]>>>0<e[4]>>>0?1:0)|0;b[6]=b[6]+1295307597+(b[5]>>>0<e[5]>>>0?1:0)|0;b[7]=b[7]+3545052371+(b[6]>>>0<e[6]>>>
0?1:0)|0;this._b=b[7]>>>0<e[7]>>>0?1:0;for(c=0;8>c;c++){var d=a[c]+b[c],g=d&65535,h=d>>>16;k[c]=((g*g>>>17)+g*h>>>15)+h*h^((d&4294901760)*d|0)+((d&65535)*d|0)}a[0]=k[0]+(k[7]<<16|k[7]>>>16)+(k[6]<<16|k[6]>>>16)|0;a[1]=k[1]+(k[0]<<8|k[0]>>>24)+k[7]|0;a[2]=k[2]+(k[1]<<16|k[1]>>>16)+(k[0]<<16|k[0]>>>16)|0;a[3]=k[3]+(k[2]<<8|k[2]>>>24)+k[1]|0;a[4]=k[4]+(k[3]<<16|k[3]>>>16)+(k[2]<<16|k[2]>>>16)|0;a[5]=k[5]+(k[4]<<8|k[4]>>>24)+k[3]|0;a[6]=k[6]+(k[5]<<16|k[5]>>>16)+(k[4]<<16|k[4]>>>16)|0;a[7]=k[7]+(k[6]<<
8|k[6]>>>24)+k[5]|0}var d=b.lib.StreamCipher,c=[],e=[],k=[],h=b.algo.RabbitLegacy=d.extend({_doReset:function(){for(var b=this._key.words,c=this.cfg.iv,f=this._X=[b[0],b[3]<<16|b[2]>>>16,b[1],b[0]<<16|b[3]>>>16,b[2],b[1]<<16|b[0]>>>16,b[3],b[2]<<16|b[1]>>>16],b=this._C=[b[2]<<16|b[2]>>>16,b[0]&4294901760|b[1]&65535,b[3]<<16|b[3]>>>16,b[1]&4294901760|b[2]&65535,b[0]<<16|b[0]>>>16,b[2]&4294901760|b[3]&65535,b[1]<<16|b[1]>>>16,b[3]&4294901760|b[0]&65535],d=this._b=0;4>d;d++)a.call(this);for(d=0;8>d;d++)b[d]^=
f[d+4&7];if(c){var f=c.words,c=f[0],f=f[1],c=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360,f=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360,d=c>>>16|f&4294901760,e=f<<16|c&65535;b[0]^=c;b[1]^=d;b[2]^=f;b[3]^=e;b[4]^=c;b[5]^=d;b[6]^=f;b[7]^=e;for(d=0;4>d;d++)a.call(this)}},_doProcessBlock:function(b,d){var f=this._X;a.call(this);c[0]=f[0]^f[5]>>>16^f[3]<<16;c[1]=f[2]^f[7]>>>16^f[5]<<16;c[2]=f[4]^f[1]>>>16^f[7]<<16;c[3]=f[6]^f[3]>>>16^f[1]<<16;for(f=0;4>f;f++)c[f]=(c[f]<<8|c[f]>>>24)&16711935|(c[f]<<
24|c[f]>>>8)&4278255360,b[d+f]^=c[f]},blockSize:4,ivSize:2});b.RabbitLegacy=d._createHelper(h)})();return b.RabbitLegacy})},{"./cipher-core":31,"./core":32,"./enc-base64":33,"./evpkdf":35,"./md5":40}],53:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){(function(){function a(){for(var a=this._X,b=this._C,c=0;8>c;c++)e[c]=b[c];b[0]=b[0]+1295307597+this._b|0;b[1]=b[1]+3545052371+
(b[0]>>>0<e[0]>>>0?1:0)|0;b[2]=b[2]+886263092+(b[1]>>>0<e[1]>>>0?1:0)|0;b[3]=b[3]+1295307597+(b[2]>>>0<e[2]>>>0?1:0)|0;b[4]=b[4]+3545052371+(b[3]>>>0<e[3]>>>0?1:0)|0;b[5]=b[5]+886263092+(b[4]>>>0<e[4]>>>0?1:0)|0;b[6]=b[6]+1295307597+(b[5]>>>0<e[5]>>>0?1:0)|0;b[7]=b[7]+3545052371+(b[6]>>>0<e[6]>>>0?1:0)|0;this._b=b[7]>>>0<e[7]>>>0?1:0;for(c=0;8>c;c++){var d=a[c]+b[c],g=d&65535,h=d>>>16;k[c]=((g*g>>>17)+g*h>>>15)+h*h^((d&4294901760)*d|0)+((d&65535)*d|0)}a[0]=k[0]+(k[7]<<16|k[7]>>>16)+(k[6]<<16|k[6]>>>
16)|0;a[1]=k[1]+(k[0]<<8|k[0]>>>24)+k[7]|0;a[2]=k[2]+(k[1]<<16|k[1]>>>16)+(k[0]<<16|k[0]>>>16)|0;a[3]=k[3]+(k[2]<<8|k[2]>>>24)+k[1]|0;a[4]=k[4]+(k[3]<<16|k[3]>>>16)+(k[2]<<16|k[2]>>>16)|0;a[5]=k[5]+(k[4]<<8|k[4]>>>24)+k[3]|0;a[6]=k[6]+(k[5]<<16|k[5]>>>16)+(k[4]<<16|k[4]>>>16)|0;a[7]=k[7]+(k[6]<<8|k[6]>>>24)+k[5]|0}var d=b.lib.StreamCipher,c=[],e=[],k=[],h=b.algo.Rabbit=d.extend({_doReset:function(){for(var b=this._key.words,c=this.cfg.iv,f=0;4>f;f++)b[f]=(b[f]<<8|b[f]>>>24)&16711935|(b[f]<<24|b[f]>>>
8)&4278255360;for(var d=this._X=[b[0],b[3]<<16|b[2]>>>16,b[1],b[0]<<16|b[3]>>>16,b[2],b[1]<<16|b[0]>>>16,b[3],b[2]<<16|b[1]>>>16],b=this._C=[b[2]<<16|b[2]>>>16,b[0]&4294901760|b[1]&65535,b[3]<<16|b[3]>>>16,b[1]&4294901760|b[2]&65535,b[0]<<16|b[0]>>>16,b[2]&4294901760|b[3]&65535,b[1]<<16|b[1]>>>16,b[3]&4294901760|b[0]&65535],f=this._b=0;4>f;f++)a.call(this);for(f=0;8>f;f++)b[f]^=d[f+4&7];if(c){var f=c.words,c=f[0],f=f[1],c=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360,f=(f<<8|f>>>24)&16711935|(f<<
24|f>>>8)&4278255360,d=c>>>16|f&4294901760,e=f<<16|c&65535;b[0]^=c;b[1]^=d;b[2]^=f;b[3]^=e;b[4]^=c;b[5]^=d;b[6]^=f;b[7]^=e;for(f=0;4>f;f++)a.call(this)}},_doProcessBlock:function(b,d){var f=this._X;a.call(this);c[0]=f[0]^f[5]>>>16^f[3]<<16;c[1]=f[2]^f[7]>>>16^f[5]<<16;c[2]=f[4]^f[1]>>>16^f[7]<<16;c[3]=f[6]^f[3]>>>16^f[1]<<16;for(f=0;4>f;f++)c[f]=(c[f]<<8|c[f]>>>24)&16711935|(c[f]<<24|c[f]>>>8)&4278255360,b[d+f]^=c[f]},blockSize:4,ivSize:2});b.Rabbit=d._createHelper(h)})();return b.Rabbit})},{"./cipher-core":31,
"./core":32,"./enc-base64":33,"./evpkdf":35,"./md5":40}],54:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){(function(){function a(){for(var a=this._S,b=this._i,c=this._j,d=0,f=0;4>f;f++){var b=(b+1)%256,c=(c+a[b])%256,e=a[b];a[b]=a[c];a[c]=e;d|=a[(a[b]+a[c])%256]<<24-8*f}this._i=b;this._j=c;return d}var d=b.lib.StreamCipher,c=b.algo,e=c.RC4=d.extend({_doReset:function(){for(var a=
this._key,b=a.words,a=a.sigBytes,c=this._S=[],d=0;256>d;d++)c[d]=d;for(var f=d=0;256>d;d++){var e=d%a,f=(f+c[d]+(b[e>>>2]>>>24-e%4*8&255))%256,e=c[d];c[d]=c[f];c[f]=e}this._i=this._j=0},_doProcessBlock:function(b,c){b[c]^=a.call(this)},keySize:8,ivSize:0});b.RC4=d._createHelper(e);c=c.RC4Drop=e.extend({cfg:e.cfg.extend({drop:192}),_doReset:function(){e._doReset.call(this);for(var b=this.cfg.drop;0<b;b--)a.call(this)}});b.RC4Drop=d._createHelper(c)})();return b.RC4})},{"./cipher-core":31,"./core":32,
"./enc-base64":33,"./evpkdf":35,"./md5":40}],55:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(a){function d(a,b){return a<<b|a>>>32-b}a=b.lib;var c=a.WordArray,e=a.Hasher;a=b.algo;var k=c.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),h=c.create([5,14,7,0,9,2,11,4,13,6,15,
8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),n=c.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),p=c.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,
13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),f=c.create([0,1518500249,1859775393,2400959708,2840853838]),r=c.create([1352829926,1548603684,1836072691,2053994217,0]);a=a.RIPEMD160=e.extend({_doReset:function(){this._hash=c.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(a,b){for(var c=0;16>c;c++){var e=b+c,g=a[e];a[e]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360}var e=this._hash.words,g=f.words,m=r.words,l=
k.words,z=h.words,x=n.words,J=p.words,C,E,H,I,O,Q,K,M,u,v;Q=C=e[0];K=E=e[1];M=H=e[2];u=I=e[3];v=O=e[4];for(var t,c=0;80>c;c+=1)t=C+a[b+l[c]]|0,t=16>c?t+((E^H^I)+g[0]):32>c?t+((E&H|~E&I)+g[1]):48>c?t+(((E|~H)^I)+g[2]):64>c?t+((E&I|H&~I)+g[3]):t+((E^(H|~I))+g[4]),t|=0,t=d(t,x[c]),t=t+O|0,C=O,O=I,I=d(H,10),H=E,E=t,t=Q+a[b+z[c]]|0,t=16>c?t+((K^(M|~u))+m[0]):32>c?t+((K&u|M&~u)+m[1]):48>c?t+(((K|~M)^u)+m[2]):64>c?t+((K&M|~K&u)+m[3]):t+((K^M^u)+m[4]),t|=0,t=d(t,J[c]),t=t+v|0,Q=v,v=u,u=d(M,10),M=K,K=t;t=
e[1]+H+u|0;e[1]=e[2]+I+v|0;e[2]=e[3]+O+Q|0;e[3]=e[4]+C+K|0;e[4]=e[0]+E+M|0;e[0]=t},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,f=8*a.sigBytes;b[f>>>5]|=128<<24-f%32;b[(f+64>>>9<<4)+14]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;a.sigBytes=4*(b.length+1);this._process();a=this._hash;b=a.words;for(c=0;5>c;c++)f=b[c],b[c]=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360;return a},clone:function(){var a=e.clone.call(this);a._hash=this._hash.clone();return a}});b.RIPEMD160=
e._createHelper(a);b.HmacRIPEMD160=e._createHmacHelper(a)})(Math);return b.RIPEMD160})},{"./core":32}],56:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(){var a=b.lib,d=a.WordArray,c=a.Hasher,e=[],a=b.algo.SHA1=c.extend({_doReset:function(){this._hash=new d.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(a,b){for(var c=this._hash.words,d=c[0],f=c[1],g=c[2],k=c[3],h=c[4],m=0;80>m;m++){if(16>
m)e[m]=a[b+m]|0;else{var l=e[m-3]^e[m-8]^e[m-14]^e[m-16];e[m]=l<<1|l>>>31}l=(d<<5|d>>>27)+h+e[m];l=20>m?l+((f&g|~f&k)+1518500249):40>m?l+((f^g^k)+1859775393):60>m?l+((f&g|f&k|g&k)-1894007588):l+((f^g^k)-899497514);h=k;k=g;g=f<<30|f>>>2;f=d;d=l}c[0]=c[0]+d|0;c[1]=c[1]+f|0;c[2]=c[2]+g|0;c[3]=c[3]+k|0;c[4]=c[4]+h|0},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,d=8*a.sigBytes;b[d>>>5]|=128<<24-d%32;b[(d+64>>>9<<4)+14]=Math.floor(c/4294967296);b[(d+64>>>9<<4)+15]=c;a.sigBytes=
4*b.length;this._process();return this._hash},clone:function(){var a=c.clone.call(this);a._hash=this._hash.clone();return a}});b.SHA1=c._createHelper(a);b.HmacSHA1=c._createHmacHelper(a)})();return b.SHA1})},{"./core":32}],57:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./sha256")):a(b.CryptoJS)})(this,function(b){(function(){var a=b.lib.WordArray,d=b.algo,c=d.SHA256,d=d.SHA224=c.extend({_doReset:function(){this._hash=new a.init([3238371032,914150663,812702999,
4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=c._doFinalize.call(this);a.sigBytes-=4;return a}});b.SHA224=c._createHelper(d);b.HmacSHA224=c._createHmacHelper(d)})();return b.SHA224})},{"./core":32,"./sha256":58}],58:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(a){var d=b.lib,c=d.WordArray,e=d.Hasher,d=b.algo,k=[],h=[];(function(){function b(b){for(var c=a.sqrt(b),f=2;f<=c;f++)if(!(b%
f))return!1;return!0}function c(a){return 4294967296*(a-(a|0))|0}for(var d=2,e=0;64>e;)b(d)&&(8>e&&(k[e]=c(a.pow(d,.5))),h[e]=c(a.pow(d,1/3)),e++),d++})();var n=[],d=d.SHA256=e.extend({_doReset:function(){this._hash=new c.init(k.slice(0))},_doProcessBlock:function(a,b){for(var c=this._hash.words,f=c[0],d=c[1],e=c[2],g=c[3],k=c[4],m=c[5],l=c[6],p=c[7],G=0;64>G;G++){if(16>G)n[G]=a[b+G]|0;else{var J=n[G-15],C=n[G-2];n[G]=((J<<25|J>>>7)^(J<<14|J>>>18)^J>>>3)+n[G-7]+((C<<15|C>>>17)^(C<<13|C>>>19)^C>>>
10)+n[G-16]}J=p+((k<<26|k>>>6)^(k<<21|k>>>11)^(k<<7|k>>>25))+(k&m^~k&l)+h[G]+n[G];C=((f<<30|f>>>2)^(f<<19|f>>>13)^(f<<10|f>>>22))+(f&d^f&e^d&e);p=l;l=m;m=k;k=g+J|0;g=e;e=d;d=f;f=J+C|0}c[0]=c[0]+f|0;c[1]=c[1]+d|0;c[2]=c[2]+e|0;c[3]=c[3]+g|0;c[4]=c[4]+k|0;c[5]=c[5]+m|0;c[6]=c[6]+l|0;c[7]=c[7]+p|0},_doFinalize:function(){var b=this._data,c=b.words,d=8*this._nDataBytes,e=8*b.sigBytes;c[e>>>5]|=128<<24-e%32;c[(e+64>>>9<<4)+14]=a.floor(d/4294967296);c[(e+64>>>9<<4)+15]=d;b.sigBytes=4*c.length;this._process();
return this._hash},clone:function(){var a=e.clone.call(this);a._hash=this._hash.clone();return a}});b.SHA256=e._createHelper(d);b.HmacSHA256=e._createHmacHelper(d)})(Math);return b.SHA256})},{"./core":32}],59:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./x64-core")):a(b.CryptoJS)})(this,function(b){(function(a){var d=b.lib,c=d.WordArray,e=d.Hasher,k=b.x64.Word,d=b.algo,h=[],n=[],l=[];(function(){for(var a=1,b=0,c=0;24>c;c++){h[a+5*b]=(c+1)*(c+2)/2%64;var f=(2*
a+3*b)%5,a=b%5,b=f}for(a=0;5>a;a++)for(b=0;5>b;b++)n[a+5*b]=b+(2*a+3*b)%5*5;a=1;for(b=0;24>b;b++){for(var d=f=c=0;7>d;d++){if(a&1){var e=(1<<d)-1;32>e?f^=1<<e:c^=1<<e-32}a=a&128?a<<1^113:a<<1}l[b]=k.create(c,f)}})();var f=[];(function(){for(var a=0;25>a;a++)f[a]=k.create()})();d=d.SHA3=e.extend({cfg:e.cfg.extend({outputLength:512}),_doReset:function(){for(var a=this._state=[],b=0;25>b;b++)a[b]=new k.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(a,b){for(var c=this._state,
d=this.blockSize/2,e=0;e<d;e++){var g=a[b+2*e],k=a[b+2*e+1],g=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,k=(k<<8|k>>>24)&16711935|(k<<24|k>>>8)&4278255360,m=c[e];m.high^=k;m.low^=g}for(d=0;24>d;d++){for(e=0;5>e;e++){for(var r=g=0,p=0;5>p;p++)m=c[e+5*p],g^=m.high,r^=m.low;m=f[e];m.high=g;m.low=r}for(e=0;5>e;e++)for(m=f[(e+4)%5],g=f[(e+1)%5],k=g.high,p=g.low,g=m.high^(k<<1|p>>>31),r=m.low^(p<<1|k>>>31),p=0;5>p;p++)m=c[e+5*p],m.high^=g,m.low^=r;for(k=1;25>k;k++)m=c[k],e=m.high,m=m.low,p=h[k],32>
p?(g=e<<p|m>>>32-p,r=m<<p|e>>>32-p):(g=m<<p-32|e>>>64-p,r=e<<p-32|m>>>64-p),m=f[n[k]],m.high=g,m.low=r;m=f[0];e=c[0];m.high=e.high;m.low=e.low;for(e=0;5>e;e++)for(p=0;5>p;p++)k=e+5*p,m=c[k],g=f[k],k=f[(e+1)%5+5*p],r=f[(e+2)%5+5*p],m.high=g.high^~k.high&r.high,m.low=g.low^~k.low&r.low;m=c[0];e=l[d];m.high^=e.high;m.low^=e.low}},_doFinalize:function(){var b=this._data,f=b.words,d=8*b.sigBytes,e=32*this.blockSize;f[d>>>5]|=1<<24-d%32;f[(a.ceil((d+1)/e)*e>>>5)-1]|=128;b.sigBytes=4*f.length;this._process();
for(var b=this._state,f=this.cfg.outputLength/8,d=f/8,e=[],g=0;g<d;g++){var k=b[g],h=k.high,k=k.low,h=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360,k=(k<<8|k>>>24)&16711935|(k<<24|k>>>8)&4278255360;e.push(k);e.push(h)}return new c.init(e,f)},clone:function(){for(var a=e.clone.call(this),b=a._state=this._state.slice(0),c=0;25>c;c++)b[c]=b[c].clone();return a}});b.SHA3=e._createHelper(d);b.HmacSHA3=e._createHmacHelper(d)})(Math);return b.SHA3})},{"./core":32,"./x64-core":63}],60:[function(e,l,h){(function(b,
a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./x64-core"),e("./sha512")):a(b.CryptoJS)})(this,function(b){(function(){var a=b.x64,d=a.Word,c=a.WordArray,a=b.algo,e=a.SHA512,a=a.SHA384=e.extend({_doReset:function(){this._hash=new c.init([new d.init(3418070365,3238371032),new d.init(1654270250,914150663),new d.init(2438529370,812702999),new d.init(355462360,4144912697),new d.init(1731405415,4290775857),new d.init(2394180231,1750603025),new d.init(3675008525,1694076839),new d.init(1203062813,
3204075428)])},_doFinalize:function(){var a=e._doFinalize.call(this);a.sigBytes-=16;return a}});b.SHA384=e._createHelper(a);b.HmacSHA384=e._createHmacHelper(a)})();return b.SHA384})},{"./core":32,"./sha512":61,"./x64-core":63}],61:[function(e,l,h){(function(b,a,d){"object"===typeof h?l.exports=h=a(e("./core"),e("./x64-core")):a(b.CryptoJS)})(this,function(b){(function(){function a(){return e.create.apply(e,arguments)}var d=b.lib.Hasher,c=b.x64,e=c.Word,k=c.WordArray,c=b.algo,h=[a(1116352408,3609767458),
a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,633803317),a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,
1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),a(1396182291,2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),
a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,3602036899),a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,
2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],n=[];(function(){for(var b=0;80>b;b++)n[b]=a()})();c=c.SHA512=d.extend({_doReset:function(){this._hash=
new k.init([new e.init(1779033703,4089235720),new e.init(3144134277,2227873595),new e.init(1013904242,4271175723),new e.init(2773480762,1595750129),new e.init(1359893119,2917565137),new e.init(2600822924,725511199),new e.init(528734635,4215389547),new e.init(1541459225,327033209)])},_doProcessBlock:function(a,b){for(var c=this._hash.words,f=c[0],d=c[1],e=c[2],g=c[3],k=c[4],m=c[5],l=c[6],c=c[7],p=f.high,G=f.low,J=d.high,C=d.low,E=e.high,H=e.low,I=g.high,O=g.low,Q=k.high,K=k.low,M=m.high,u=m.low,v=
l.high,t=l.low,q=c.high,T=c.low,P=p,S=G,ea=J,aa=C,ja=E,ia=H,ka=I,ba=O,V=Q,U=K,na=M,fa=u,oa=v,ha=t,ma=q,la=T,X=0;80>X;X++){var ca=n[X];if(16>X)var W=ca.high=a[b+2*X]|0,N=ca.low=a[b+2*X+1]|0;else{var W=n[X-15],N=W.high,Y=W.low,W=(N>>>1|Y<<31)^(N>>>8|Y<<24)^N>>>7,Y=(Y>>>1|N<<31)^(Y>>>8|N<<24)^(Y>>>7|N<<25),ga=n[X-2],N=ga.high,R=ga.low,ga=(N>>>19|R<<13)^(N<<3|R>>>29)^N>>>6,R=(R>>>19|N<<13)^(R<<3|N>>>29)^(R>>>6|N<<26),N=n[X-7],pa=N.high,da=n[X-16],Z=da.high,da=da.low,N=Y+N.low,W=W+pa+(N>>>0<Y>>>0?1:0),
N=N+R,W=W+ga+(N>>>0<R>>>0?1:0),N=N+da,W=W+Z+(N>>>0<da>>>0?1:0);ca.high=W;ca.low=N}var pa=V&na^~V&oa,da=U&fa^~U&ha,ca=P&ea^P&ja^ea&ja,ra=S&aa^S&ia^aa&ia,Y=(P>>>28|S<<4)^(P<<30|S>>>2)^(P<<25|S>>>7),ga=(S>>>28|P<<4)^(S<<30|P>>>2)^(S<<25|P>>>7),R=h[X],sa=R.high,qa=R.low,R=la+((U>>>14|V<<18)^(U>>>18|V<<14)^(U<<23|V>>>9)),Z=ma+((V>>>14|U<<18)^(V>>>18|U<<14)^(V<<23|U>>>9))+(R>>>0<la>>>0?1:0),R=R+da,Z=Z+pa+(R>>>0<da>>>0?1:0),R=R+qa,Z=Z+sa+(R>>>0<qa>>>0?1:0),R=R+N,Z=Z+W+(R>>>0<N>>>0?1:0),N=ga+ra,ca=Y+ca+(N>>>
0<ga>>>0?1:0),ma=oa,la=ha,oa=na,ha=fa,na=V,fa=U,U=ba+R|0,V=ka+Z+(U>>>0<ba>>>0?1:0)|0,ka=ja,ba=ia,ja=ea,ia=aa,ea=P,aa=S,S=R+N|0,P=Z+ca+(S>>>0<R>>>0?1:0)|0}G=f.low=G+S;f.high=p+P+(G>>>0<S>>>0?1:0);C=d.low=C+aa;d.high=J+ea+(C>>>0<aa>>>0?1:0);H=e.low=H+ia;e.high=E+ja+(H>>>0<ia>>>0?1:0);O=g.low=O+ba;g.high=I+ka+(O>>>0<ba>>>0?1:0);K=k.low=K+U;k.high=Q+V+(K>>>0<U>>>0?1:0);u=m.low=u+fa;m.high=M+na+(u>>>0<fa>>>0?1:0);t=l.low=t+ha;l.high=v+oa+(t>>>0<ha>>>0?1:0);T=c.low=T+la;c.high=q+ma+(T>>>0<la>>>0?1:0)},
_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,d=8*a.sigBytes;b[d>>>5]|=128<<24-d%32;b[(d+128>>>10<<5)+30]=Math.floor(c/4294967296);b[(d+128>>>10<<5)+31]=c;a.sigBytes=4*b.length;this._process();return this._hash.toX32()},clone:function(){var a=d.clone.call(this);a._hash=this._hash.clone();return a},blockSize:32});b.SHA512=d._createHelper(c);b.HmacSHA512=d._createHmacHelper(c)})();return b.SHA512})},{"./core":32,"./x64-core":63}],62:[function(e,l,h){(function(b,a,d){"object"===
typeof h?l.exports=h=a(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):a(b.CryptoJS)})(this,function(b){(function(){function a(a,b){var c=(this._lBlock>>>a^this._rBlock)&b;this._rBlock^=c;this._lBlock^=c<<a}function d(a,b){var c=(this._rBlock>>>a^this._lBlock)&b;this._lBlock^=c;this._rBlock^=c<<a}var c=b.lib,e=c.WordArray,c=c.BlockCipher,k=b.algo,h=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,
6,61,53,45,37,29,21,13,5,28,20,12,4],n=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],l=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,
402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,
4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,
201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,
419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,
6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,
24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,
524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,
1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,
36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,
114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,
384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,
6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,
336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,
2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,
2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],r=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],z=k.DES=c.extend({_doReset:function(){for(var a=this._key.words,b=[],c=0;56>c;c++){var f=h[c]-1;b[c]=a[f>>>5]>>>31-f%32&1}a=this._subKeys=[];for(f=0;16>f;f++){for(var d=a[f]=[],e=l[f],c=0;24>c;c++)d[c/6|0]|=
b[(n[c]-1+e)%28]<<31-c%6,d[4+(c/6|0)]|=b[28+(n[c+24]-1+e)%28]<<31-c%6;d[0]=d[0]<<1|d[0]>>>31;for(c=1;7>c;c++)d[c]>>>=4*(c-1)+3;d[7]=d[7]<<5|d[7]>>>27}b=this._invSubKeys=[];for(c=0;16>c;c++)b[c]=a[15-c]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._subKeys)},decryptBlock:function(a,b){this._doCryptBlock(a,b,this._invSubKeys)},_doCryptBlock:function(b,c,e){this._lBlock=b[c];this._rBlock=b[c+1];a.call(this,4,252645135);a.call(this,16,65535);d.call(this,2,858993459);d.call(this,8,16711935);
a.call(this,1,1431655765);for(var g=0;16>g;g++){for(var k=e[g],h=this._lBlock,m=this._rBlock,n=0,l=0;8>l;l++)n|=f[l][((m^k[l])&r[l])>>>0];this._lBlock=m;this._rBlock=h^n}e=this._lBlock;this._lBlock=this._rBlock;this._rBlock=e;a.call(this,1,1431655765);d.call(this,8,16711935);d.call(this,2,858993459);a.call(this,16,65535);a.call(this,4,252645135);b[c]=this._lBlock;b[c+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});b.DES=c._createHelper(z);k=k.TripleDES=c.extend({_doReset:function(){var a=this._key.words;
this._des1=z.createEncryptor(e.create(a.slice(0,2)));this._des2=z.createEncryptor(e.create(a.slice(2,4)));this._des3=z.createEncryptor(e.create(a.slice(4,6)))},encryptBlock:function(a,b){this._des1.encryptBlock(a,b);this._des2.decryptBlock(a,b);this._des3.encryptBlock(a,b)},decryptBlock:function(a,b){this._des3.decryptBlock(a,b);this._des2.encryptBlock(a,b);this._des1.decryptBlock(a,b)},keySize:6,ivSize:2,blockSize:2});b.TripleDES=c._createHelper(k)})();return b.TripleDES})},{"./cipher-core":31,"./core":32,
"./enc-base64":33,"./evpkdf":35,"./md5":40}],63:[function(e,l,h){(function(b,a){"object"===typeof h?l.exports=h=a(e("./core")):a(b.CryptoJS)})(this,function(b){(function(a){var d=b.lib,c=d.Base,e=d.WordArray,d=b.x64={};d.Word=c.extend({init:function(a,b){this.high=a;this.low=b}});d.WordArray=c.extend({init:function(b,c){b=this.words=b||[];this.sigBytes=c!=a?c:8*b.length},toX32:function(){for(var a=this.words,b=a.length,c=[],d=0;d<b;d++){var f=a[d];c.push(f.high);c.push(f.low)}return e.create(c,this.sigBytes)},
clone:function(){for(var a=c.clone.call(this),b=a.words=this.words.slice(0),d=b.length,e=0;e<d;e++)b[e]=b[e].clone();return a}})})();return b})},{"./core":32}],64:[function(e,l,h){(function(b){!function(a){function d(b,d,g){function m(a,b,c,d){if(!(this instanceof m))return new m(a,b,c,d);w&&F&&(a instanceof F&&(a=new w(a)),c instanceof F&&(c=new w(c)));if(a||b||c||L){if(!h(a,b)){var f=L||Array;d=b;c=a;b=0;a=new f(8)}this.buffer=a;this.offset=b|=0;if("undefined"!==typeof c)if("string"===typeof c){d=
d||10;var f=0,e=c.length,g=0,k=0;"-"===c[0]&&f++;for(var l=f;f<e;){var p=parseInt(c[f++],d);if(!(0<=p))break;k=k*d+p;g=g*d+Math.floor(k/4294967296);k%=4294967296}l&&(g=~g,k?k=4294967296-k:g++);A(a,b+C,g);A(a,b+K,k)}else h(c,d)?n(a,b,c,d):"number"===typeof d?(A(a,b+C,c),A(a,b+K,d)):0<c?q(a,b,c):0>c?G(a,b,c):n(a,b,B,0)}else this.buffer=Array.prototype.slice.call(B,0,8)}function p(){var a=this.buffer,b=this.offset,c=x(a,b+C),a=x(a,b+K);g||(c|=0);return c?4294967296*c+a:a}function A(a,b,c){a[b+t]=c&255;
c>>=8;a[b+v]=c&255;c>>=8;a[b+u]=c&255;a[b+M]=c>>8&255}function x(a,b){return 16777216*a[b+M]+(a[b+u]<<16)+(a[b+v]<<8)+a[b+t]}var C=d?0:4,K=d?4:0,M=d?0:3,u=d?1:2,v=d?2:1,t=d?3:0,q=d?l:r,G=d?f:z;d=m.prototype;var J="is"+b,S="_"+J;d.buffer=void 0;d.offset=0;d[S]=!0;d.toNumber=p;d.toString=function(a){var b=this.buffer,c=this.offset,d=x(b,c+C),b=x(b,c+K),c="",f=!g&&d&2147483648;f&&(d=~d,b=4294967296-b);for(a=a||10;;){var e=d%a*4294967296+b,d=Math.floor(d/a),b=Math.floor(e/a),c=(e%a).toString(a)+c;if(!d&&
!b)break}f&&(c="-"+c);return c};d.toJSON=p;d.toArray=c;D&&(d.toBuffer=e);w&&(d.toArrayBuffer=k);m[J]=function(a){return!(!a||!a[S])};return a[b]=m}function c(a){var b=this.buffer,c=this.offset;L=null;return!1!==a&&0===c&&8===b.length&&A(b)?b:Array.prototype.slice.call(b,c,c+8)}function e(a){var c=this.buffer,d=this.offset;L=D;if(!1!==a&&0===d&&8===c.length&&b.isBuffer(c))return c;a=new D(8);n(a,0,c,d);return a}function k(a){var b=this.buffer,c=this.offset,d=b.buffer;L=w;if(!1!==a&&0===c&&d instanceof
F&&8===d.byteLength)return d;a=new w(8);n(a,0,b,c);return a.buffer}function h(a,b){var c=a&&a.length;b|=0;return c&&b+8<=c&&"string"!==typeof a[b]}function n(a,b,c,d){b|=0;d|=0;for(var f=0;8>f;f++)a[b++]=c[d++]&255}function l(a,b,c){for(var d=b+8;d>b;)a[--d]=c&255,c/=256}function f(a,b,c){var d=b+8;for(c++;d>b;)a[--d]=-c&255^255,c/=256}function r(a,b,c){for(var d=b+8;b<d;)a[b++]=c&255,c/=256}function z(a,b,c){var d=b+8;for(c++;b<d;)a[b++]=-c&255^255,c/=256}function x(a){return!!a&&"[object Array]"==
Object.prototype.toString.call(a)}var D="undefined"!==typeof b&&b,w="undefined"!==typeof Uint8Array&&Uint8Array,F="undefined"!==typeof ArrayBuffer&&ArrayBuffer,B=[0,0,0,0,0,0,0,0],A=Array.isArray||x,L;d("Uint64BE",!0,!0);d("Int64BE",!0,!1);d("Uint64LE",!1,!0);d("Int64LE",!1,!1)}("object"===typeof h&&"string"!==typeof h.nodeName?h:this||{})}).call(this,e("buffer").Buffer)},{buffer:25}],65:[function(e,l,h){h.encode=e("./encode").encode;h.decode=e("./decode").decode;h.Encoder=e("./encoder").Encoder;
h.Decoder=e("./decoder").Decoder;h.createCodec=e("./ext").createCodec;h.codec=e("./codec").codec},{"./codec":74,"./decode":76,"./decoder":77,"./encode":79,"./encoder":80,"./ext":84}],66:[function(e,l,h){(function(b){function a(a){return a&&a.isBuffer&&a}l.exports=a("undefined"!==typeof b&&b)||a(this.Buffer)||a("undefined"!==typeof window&&window.Buffer)||this.Buffer}).call(this,e("buffer").Buffer)},{buffer:25}],67:[function(e,l,h){h.copy=function(b,a,d,c){d||(d=0);c||0===c||(c=this.length);a||(a=
0);var e=c-d;if(b===this&&d<a&&a<c)for(c=e-1;0<=c;c--)b[c+a]=this[c+d];else for(c=0;c<e;c++)b[c+a]=this[c+d];return e};h.toString=function(b,a,d){b=a|0;d||(d=this.length);a="";for(var c;b<d;)c=this[b++],128>c?a+=String.fromCharCode(c):(192===(c&224)?c=(c&31)<<6|this[b++]&63:224===(c&240)?c=(c&15)<<12|(this[b++]&63)<<6|this[b++]&63:240===(c&248)&&(c=(c&7)<<18|(this[b++]&63)<<12|(this[b++]&63)<<6|this[b++]&63),65536<=c?(c-=65536,a+=String.fromCharCode((c>>>10)+55296,(c&1023)+56320)):a+=String.fromCharCode(c));
return a};h.write=function(b,a){for(var d=a||(a|=0),c=b.length,e,k=0;k<c;)e=b.charCodeAt(k++),128>e?this[d++]=e:(2048>e?this[d++]=192|e>>>6:(55296>e||57343<e?this[d++]=224|e>>>12:(e=(e-55296<<10|b.charCodeAt(k++)-56320)+65536,this[d++]=240|e>>>18,this[d++]=128|e>>>12&63),this[d++]=128|e>>>6&63),this[d++]=128|e&63);return d-a}},{}],68:[function(e,l,h){var b=e("./bufferish");h=l.exports=[];h.alloc=function(a){return Array(a)};h.concat=b.concat;h.from=function(a){if(!b.isBuffer(a)&&b.isView(a))a=b.Uint8Array.from(a);
else if(b.isArrayBuffer(a))a=new Uint8Array(a);else{if("string"===typeof a)return b.from.call(h,a);if("number"===typeof a)throw new TypeError('"value" argument must not be a number');}return Array.prototype.slice.call(a)}},{"./bufferish":72}],69:[function(e,l,h){function b(a){return new d(a)}var a=e("./bufferish"),d=a.global;h=l.exports=a.hasBuffer?b(0):[];h.alloc=a.hasBuffer&&d.alloc||b;h.concat=a.concat;h.from=function(b){if(!a.isBuffer(b)&&a.isView(b))b=a.Uint8Array.from(b);else if(a.isArrayBuffer(b))b=
new Uint8Array(b);else{if("string"===typeof b)return a.from.call(h,b);if("number"===typeof b)throw new TypeError('"value" argument must not be a number');}return d.from&&1!==d.from.length?d.from(b):new d(b)}},{"./bufferish":72}],70:[function(e,l,h){function b(b,e,g,f){var h=c.isBuffer(this),n=c.isBuffer(b);if(h&&n)return this.copy(b,e,g,f);if(k||h||n||!c.isView(this)||!c.isView(b))return d.copy.call(this,b,e,g,f);g=g||null!=f?a.call(this,g,f):this;b.set(g,e);return g.length}function a(a,d){var e=
this.slice||!k&&this.subarray;if(e)return e.call(this,a,d);e=c.alloc.call(this,d-a);b.call(this,e,0,a,d);return e}var d=e("./buffer-lite");h.copy=b;h.slice=a;h.toString=function(a,b,e){return(!g&&c.isBuffer(this)?this.toString:d.toString).apply(this,arguments)};h.write=function(a){return function(){return(this[a]||d[a]).apply(this,arguments)}}("write");var c=e("./bufferish");e=c.global;var g=c.hasBuffer&&"TYPED_ARRAY_SUPPORT"in e,k=g&&!e.TYPED_ARRAY_SUPPORT},{"./buffer-lite":67,"./bufferish":72}],
71:[function(e,l,h){function b(a){return new Uint8Array(a)}var a=e("./bufferish");h=l.exports=a.hasArrayBuffer?b(0):[];h.alloc=b;h.concat=a.concat;h.from=function(b){if(a.isView(b)){var c=b.byteOffset,d=b.byteLength;b=b.buffer;b.byteLength!==d&&(b.slice?b=b.slice(c,c+d):(b=new Uint8Array(b),b.byteLength!==d&&(b=Array.prototype.slice.call(b,c,c+d))))}else{if("string"===typeof b)return a.from.call(h,b);if("number"===typeof b)throw new TypeError('"value" argument must not be a number');}return new Uint8Array(b)}},
{"./bufferish":72}],72:[function(e,l,h){function b(a){return d(this).alloc(a)}function a(a){return a instanceof ArrayBuffer||w(a)}function d(a){return p(a)?z:f(a)?x:n(a)?r:k?z:m?x:r}function c(){return!1}function g(a,b){a="[object "+a+"]";return function(c){return null!=c&&{}.toString.call(b?c[b]:c)===a}}l=h.global=e("./buffer-global");var k=h.hasBuffer=l&&!!l.isBuffer,m=h.hasArrayBuffer="undefined"!==typeof ArrayBuffer,n=h.isArray=e("isarray");h.isArrayBuffer=m?a:c;var p=h.isBuffer=k?l.isBuffer:
c,f=h.isView=m?ArrayBuffer.isView||g("ArrayBuffer","buffer"):c;h.alloc=b;h.concat=function(a,c){function d(a){c+=a.length}c||(c=0,Array.prototype.forEach.call(a,d));var f=b.call(this!==h&&this||a[0],c),e=0;Array.prototype.forEach.call(a,function(a){e+=D.copy.call(a,f,e)});return f};h.from=function(a){if("string"===typeof a){var c=3*a.length,f=b.call(this,c);a=D.write.call(f,a);c!==a&&(f=D.slice.call(f,0,a));return f}return d(this).from(a)};var r=h.Array=e("./bufferish-array"),z=h.Buffer=e("./bufferish-buffer"),
x=h.Uint8Array=e("./bufferish-uint8array"),D=h.prototype=e("./bufferish-proto"),w=g("ArrayBuffer")},{"./buffer-global":66,"./bufferish-array":68,"./bufferish-buffer":69,"./bufferish-proto":70,"./bufferish-uint8array":71,isarray:95}],73:[function(e,l,h){function b(a){if(!(this instanceof b))return new b(a);this.options=a;this.init()}function a(a,b){function c(){a.apply(this,arguments);return b.apply(this,arguments)}return a&&b?c:a||b}function d(a){function b(a,b){return b(a)}a=a.slice();return function(c){return a.reduce(b,
c)}}function c(a){return new b(a)}var g=e("isarray");h.createCodec=c;h.install=function(c){for(var d in c)b.prototype[d]=a(b.prototype[d],c[d])};h.filter=function(a){return g(a)?d(a):a};var k=e("./bufferish");b.prototype.init=function(){var a=this.options;a&&a.uint8array&&(this.bufferish=k.Uint8Array);return this};h.preset=c({preset:!0})},{"./bufferish":72,isarray:95}],74:[function(e,l,h){e("./read-core");e("./write-core");h.codec={preset:e("./codec-base").preset}},{"./codec-base":73,"./read-core":86,
"./write-core":89}],75:[function(e,l,h){function b(a){if(!(this instanceof b))return new b(a);a&&(this.options=a,a.codec&&(a=this.codec=a.codec,a.bufferish&&(this.bufferish=a.bufferish)))}h.DecodeBuffer=b;l=e("./read-core").preset;e("./flex-buffer").FlexDecoder.mixin(b.prototype);b.prototype.codec=l;b.prototype.fetch=function(){return this.codec.decode(this)}},{"./flex-buffer":85,"./read-core":86}],76:[function(e,l,h){h.decode=function(a,d){var c=new b(d);c.write(a);return c.read()};var b=e("./decode-buffer").DecodeBuffer},
{"./decode-buffer":75}],77:[function(e,l,h){function b(d){if(!(this instanceof b))return new b(d);a.call(this,d)}h.Decoder=b;l=e("event-lite");var a=e("./decode-buffer").DecodeBuffer;b.prototype=new a;l.mixin(b.prototype);b.prototype.decode=function(a){arguments.length&&this.write(a);this.flush()};b.prototype.push=function(a){this.emit("data",a)};b.prototype.end=function(a){this.decode(a);this.emit("end")}},{"./decode-buffer":75,"event-lite":93}],78:[function(e,l,h){function b(a){if(!(this instanceof
b))return new b(a);a&&(this.options=a,a.codec&&(a=this.codec=a.codec,a.bufferish&&(this.bufferish=a.bufferish)))}h.EncodeBuffer=b;l=e("./write-core").preset;e("./flex-buffer").FlexEncoder.mixin(b.prototype);b.prototype.codec=l;b.prototype.write=function(a){this.codec.encode(this,a)}},{"./flex-buffer":85,"./write-core":89}],79:[function(e,l,h){h.encode=function(a,d){var c=new b(d);c.write(a);return c.read()};var b=e("./encode-buffer").EncodeBuffer},{"./encode-buffer":78}],80:[function(e,l,h){function b(d){if(!(this instanceof
b))return new b(d);a.call(this,d)}h.Encoder=b;l=e("event-lite");var a=e("./encode-buffer").EncodeBuffer;b.prototype=new a;l.mixin(b.prototype);b.prototype.encode=function(a){this.write(a);this.emit("data",this.read())};b.prototype.end=function(a){arguments.length&&this.encode(a);this.flush();this.emit("end")}},{"./encode-buffer":78,"event-lite":93}],81:[function(e,l,h){function b(d,c){if(!(this instanceof b))return new b(d,c);this.buffer=a.from(d);this.type=c}h.ExtBuffer=b;var a=e("./bufferish")},
{"./bufferish":72}],82:[function(e,l,h){function b(a){n||(n=e("./encode").encode);return n(a)}function a(a){return a.valueOf()}function d(a){a=RegExp.prototype.toString.call(a).split("/");a.shift();var b=[a.pop()];b.unshift(a.join("/"));return b}function c(a){var b={},c;for(c in p)b[c]=a[c];return b}h.setExtPackers=function(f){f.addExtPacker(14,Error,[c,b]);f.addExtPacker(1,EvalError,[c,b]);f.addExtPacker(2,RangeError,[c,b]);f.addExtPacker(3,ReferenceError,[c,b]);f.addExtPacker(4,SyntaxError,[c,b]);
f.addExtPacker(5,TypeError,[c,b]);f.addExtPacker(6,URIError,[c,b]);f.addExtPacker(10,RegExp,[d,b]);f.addExtPacker(11,Boolean,[a,b]);f.addExtPacker(12,String,[a,b]);f.addExtPacker(13,Date,[Number,b]);f.addExtPacker(15,Number,[a,b]);"undefined"!==typeof Uint8Array&&(f.addExtPacker(17,Int8Array,m),f.addExtPacker(18,Uint8Array,m),f.addExtPacker(19,Int16Array,m),f.addExtPacker(20,Uint16Array,m),f.addExtPacker(21,Int32Array,m),f.addExtPacker(22,Uint32Array,m),f.addExtPacker(23,Float32Array,m),"undefined"!==
typeof Float64Array&&f.addExtPacker(24,Float64Array,m),"undefined"!==typeof Uint8ClampedArray&&f.addExtPacker(25,Uint8ClampedArray,m),f.addExtPacker(26,ArrayBuffer,m),f.addExtPacker(29,DataView,m));g.hasBuffer&&f.addExtPacker(27,k,g.from)};var g=e("./bufferish"),k=g.global,m=g.Uint8Array.from,n,p={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":72,"./encode":79}],83:[function(e,l,h){function b(a){n||(n=e("./decode").decode);return n(a)}function a(a){return RegExp.apply(null,
a)}function d(a){return function(b){var c=new a,d;for(d in p)c[d]=b[d];return c}}function c(a){return function(b){return new a(b)}}function g(a){return(new Uint8Array(a)).buffer}h.setExtUnpackers=function(f){f.addExtUnpacker(14,[b,d(Error)]);f.addExtUnpacker(1,[b,d(EvalError)]);f.addExtUnpacker(2,[b,d(RangeError)]);f.addExtUnpacker(3,[b,d(ReferenceError)]);f.addExtUnpacker(4,[b,d(SyntaxError)]);f.addExtUnpacker(5,[b,d(TypeError)]);f.addExtUnpacker(6,[b,d(URIError)]);f.addExtUnpacker(10,[b,a]);f.addExtUnpacker(11,
[b,c(Boolean)]);f.addExtUnpacker(12,[b,c(String)]);f.addExtUnpacker(13,[b,c(Date)]);f.addExtUnpacker(15,[b,c(Number)]);"undefined"!==typeof Uint8Array&&(f.addExtUnpacker(17,c(Int8Array)),f.addExtUnpacker(18,c(Uint8Array)),f.addExtUnpacker(19,[g,c(Int16Array)]),f.addExtUnpacker(20,[g,c(Uint16Array)]),f.addExtUnpacker(21,[g,c(Int32Array)]),f.addExtUnpacker(22,[g,c(Uint32Array)]),f.addExtUnpacker(23,[g,c(Float32Array)]),"undefined"!==typeof Float64Array&&f.addExtUnpacker(24,[g,c(Float64Array)]),"undefined"!==
typeof Uint8ClampedArray&&f.addExtUnpacker(25,c(Uint8ClampedArray)),f.addExtUnpacker(26,g),f.addExtUnpacker(29,[g,c(DataView)]));k.hasBuffer&&f.addExtUnpacker(27,c(m))};var k=e("./bufferish"),m=k.global,n,p={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":72,"./decode":76}],84:[function(e,l,h){e("./read-core");e("./write-core");h.createCodec=e("./codec-base").createCodec},{"./codec-base":73,"./read-core":86,"./write-core":89}],85:[function(e,l,h){function b(){if(!(this instanceof
b))return new b}function a(){if(!(this instanceof a))return new a}function d(){throw Error("method not implemented: write()");}function c(){throw Error("method not implemented: fetch()");}function g(){if(!this.buffers||!this.buffers.length)return this.fetch();this.flush();return this.pull()}function k(a){(this.buffers||(this.buffers=[])).push(a)}function m(){return(this.buffers||(this.buffers=[])).shift()}function n(a){return function(b){for(var c in a)b[c]=a[c];return b}}h.FlexDecoder=b;h.FlexEncoder=
a;var p=e("./bufferish");b.mixin=n(function(){return{bufferish:p,write:function(a){var b=this.offset?p.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=b?a?this.bufferish.concat([b,a]):b:a;this.offset=0},fetch:c,flush:function(){for(;this.offset<this.buffer.length;){var a=this.offset,b;try{b=this.fetch()}catch(z){if(z&&"BUFFER_SHORTAGE"!=z.message)throw z;this.offset=a;break}this.push(b)}},push:k,pull:m,read:g,reserve:function(a){var b=this.offset;a=b+a;if(a>this.buffer.length)throw Error("BUFFER_SHORTAGE");
this.offset=a;return b},offset:0}}());b.mixin(b.prototype);a.mixin=n(function(){return{bufferish:p,write:d,fetch:function(){var a=this.start;if(a<this.offset){var b=this.start=this.offset;return p.prototype.slice.call(this.buffer,a,b)}},flush:function(){for(;this.start<this.offset;){var a=this.fetch();a&&this.push(a)}},push:k,pull:function(){var a=this.buffers||(this.buffers=[]),b=1<a.length?this.bufferish.concat(a):a[0];a.length=0;return b},read:g,reserve:function(a){var b=a|0;if(this.buffer){var c=
this.buffer.length,d=this.offset|0,f=d+b;if(f<c)return this.offset=f,d;this.flush();a=Math.max(a,Math.min(2*c,this.maxBufferSize))}a=Math.max(a,this.minBufferSize);this.buffer=this.bufferish.alloc(a);this.start=0;this.offset=b;return 0},send:function(a){var b=a.length;b>this.minBufferSize?(this.flush(),this.push(a)):(b=this.reserve(b),p.prototype.copy.call(a,this.buffer,b))},maxBufferSize:65536,minBufferSize:2048,offset:0,start:0}}());a.mixin(a.prototype)},{"./bufferish":72}],86:[function(e,l,h){function b(a){var b=
k.getReadToken(a);return function(a){var c=g(a),d=b[c];if(!d)throw Error("Invalid type: "+(c?"0x"+c.toString(16):c));return d(a)}}function a(){var a=this.options;this.decode=b(a);a&&a.preset&&c.setExtUnpackers(this);return this}var d=e("./ext-buffer").ExtBuffer,c=e("./ext-unpacker"),g=e("./read-format").readUint8,k=e("./read-token"),m=e("./codec-base");m.install({addExtUnpacker:function(a,b){(this.extUnpackers||(this.extUnpackers=[]))[a]=m.filter(b)},getExtUnpacker:function(a){function b(b){return new d(b,
a)}return(this.extUnpackers||(this.extUnpackers=[]))[a]||b},init:a});h.preset=a.call(m.preset)},{"./codec-base":73,"./ext-buffer":81,"./ext-unpacker":83,"./read-format":87,"./read-token":88}],87:[function(e,l,h){function b(a,b){var c={},d,f=Array(b),e=Array(b),g=a.codec.decode;for(d=0;d<b;d++)f[d]=g(a),e[d]=g(a);for(d=0;d<b;d++)c[f[d]]=e[d];return c}function a(a,b){var c=new Map,d,f=Array(b),e=Array(b),g=a.codec.decode;for(d=0;d<b;d++)f[d]=g(a),e[d]=g(a);for(d=0;d<b;d++)c.set(f[d],e[d]);return c}
function d(a,b){for(var c=Array(b),d=a.codec.decode,f=0;f<b;f++)c[f]=d(a);return c}function c(a,b){var c=a.reserve(b);return I.toString.call(a.buffer,"utf-8",c,c+b)}function g(a,b){var c=a.reserve(b),c=I.slice.call(a.buffer,c,c+b);return H.from(c)}function k(a,b){var c=a.reserve(b),c=I.slice.call(a.buffer,c,c+b);return H.Uint8Array.from(c).buffer}function m(a,b){var c=a.reserve(b+1),d=a.buffer[c++],f=c+b,e=a.codec.getExtUnpacker(d);if(!e)throw Error("Invalid ext type: "+(d?"0x"+d.toString(16):d));
c=I.slice.call(a.buffer,c,f);return e(c)}function n(a){var b=a.reserve(1);return a.buffer[b]}function p(a){var b=a.reserve(1);a=a.buffer[b];return a&128?a-256:a}function f(a){var b=a.reserve(2);a=a.buffer;return a[b++]<<8|a[b]}function r(a){var b=a.reserve(2);a=a.buffer;b=a[b++]<<8|a[b];return b&32768?b-65536:b}function z(a){var b=a.reserve(4);a=a.buffer;return 16777216*a[b++]+(a[b++]<<16)+(a[b++]<<8)+a[b]}function x(a){var b=a.reserve(4);a=a.buffer;return a[b++]<<24|a[b++]<<16|a[b++]<<8|a[b]}function D(a,
b){return function(c){var d=c.reserve(a);return b.call(c.buffer,d,Q)}}function w(a){return(new C(this,a)).toNumber()}function F(a){return(new E(this,a)).toNumber()}function B(a){return new C(this,a)}function A(a){return new E(this,a)}function L(a){return J.read(this,a,!1,23,4)}function G(a){return J.read(this,a,!1,52,8)}var J=e("ieee754");l=e("int64-buffer");var C=l.Uint64BE,E=l.Int64BE;h.getReadFormat=function(e){var h=e&&e.int64;return{map:O&&e&&e.usemap?a:b,array:d,str:c,bin:H.hasArrayBuffer&&
e&&e.binarraybuffer?k:g,ext:m,uint8:n,uint16:f,uint32:z,uint64:D(8,h?B:w),int8:p,int16:r,int32:x,int64:D(8,h?A:F),float32:D(4,L),float64:D(8,G)}};h.readUint8=n;var H=e("./bufferish"),I=e("./bufferish-proto"),O="undefined"!==typeof Map,Q=!0},{"./bufferish":72,"./bufferish-proto":70,ieee754:94,"int64-buffer":64}],88:[function(e,l,h){function b(b){var e,g=Array(256);for(e=0;127>=e;e++)g[e]=a(e);for(e=128;143>=e;e++)g[e]=c(e-128,b.map);for(e=144;159>=e;e++)g[e]=c(e-144,b.array);for(e=160;191>=e;e++)g[e]=
c(e-160,b.str);g[192]=a(null);g[193]=null;g[194]=a(!1);g[195]=a(!0);g[196]=d(b.uint8,b.bin);g[197]=d(b.uint16,b.bin);g[198]=d(b.uint32,b.bin);g[199]=d(b.uint8,b.ext);g[200]=d(b.uint16,b.ext);g[201]=d(b.uint32,b.ext);g[202]=b.float32;g[203]=b.float64;g[204]=b.uint8;g[205]=b.uint16;g[206]=b.uint32;g[207]=b.uint64;g[208]=b.int8;g[209]=b.int16;g[210]=b.int32;g[211]=b.int64;g[212]=c(1,b.ext);g[213]=c(2,b.ext);g[214]=c(4,b.ext);g[215]=c(8,b.ext);g[216]=c(16,b.ext);g[217]=d(b.uint8,b.str);g[218]=d(b.uint16,
b.str);g[219]=d(b.uint32,b.str);g[220]=d(b.uint16,b.array);g[221]=d(b.uint32,b.array);g[222]=d(b.uint16,b.map);g[223]=d(b.uint32,b.map);for(e=224;255>=e;e++)g[e]=a(e-256);return g}function a(a){return function(){return a}}function d(a,b){return function(c){var d=a(c);return b(c,d)}}function c(a,b){return function(c){return b(c,a)}}var g=e("./read-format");h.getReadToken=function(a){var d=g.getReadFormat(a);if(a&&a.useraw){var e=b(d).slice();e[217]=e[196];e[218]=e[197];e[219]=e[198];for(a=160;191>=
a;a++)e[a]=c(a-160,d.bin);return e}return b(d)}},{"./read-format":87}],89:[function(e,l,h){function b(a){var b=g.getWriteType(a);return function(a,c){var d=b[typeof c];if(!d)throw Error('Unsupported type "'+typeof c+'": '+c);d(a,c)}}function a(){var a=this.options;this.encode=b(a);a&&a.preset&&c.setExtPackers(this);return this}var d=e("./ext-buffer").ExtBuffer,c=e("./ext-packer"),g=e("./write-type"),k=e("./codec-base");k.install({addExtPacker:function(a,b,c){function f(b){c&&(b=c(b));return new d(b,
a)}c=k.filter(c);var e=b.name;e&&"Object"!==e?(this.extPackers||(this.extPackers={}))[e]=f:(this.extEncoderList||(this.extEncoderList=[])).unshift([b,f])},getExtPacker:function(a){var b=this.extPackers||(this.extPackers={});if(b=(a=a.constructor)&&a.name&&b[a.name])return b;for(var b=this.extEncoderList||(this.extEncoderList=[]),c=b.length,d=0;d<c;d++){var e=b[d];if(a===e[0])return e[1]}},init:a});h.preset=a.call(k.preset)},{"./codec-base":73,"./ext-buffer":81,"./ext-packer":82,"./write-type":91}],
90:[function(e,l,h){function b(){var b=x.slice();b[196]=a(196);b[197]=d(197);b[198]=c(198);b[199]=a(199);b[200]=d(200);b[201]=c(201);b[202]=g(202,4,B.writeFloatBE||n,!0);b[203]=g(203,8,B.writeDoubleBE||p,!0);b[204]=a(204);b[205]=d(205);b[206]=c(206);b[207]=g(207,8,k);b[208]=a(208);b[209]=d(209);b[210]=c(210);b[211]=g(211,8,m);b[217]=a(217);b[218]=d(218);b[219]=c(219);b[220]=d(220);b[221]=c(221);b[222]=d(222);b[223]=c(223);return b}function a(a){return function(b,c){var d=b.reserve(2),e=b.buffer;e[d++]=
a;e[d]=c}}function d(a){return function(b,c){var d=b.reserve(3),e=b.buffer;e[d++]=a;e[d++]=c>>>8;e[d]=c}}function c(a){return function(b,c){var d=b.reserve(5),e=b.buffer;e[d++]=a;e[d++]=c>>>24;e[d++]=c>>>16;e[d++]=c>>>8;e[d]=c}}function g(a,b,c,d){return function(e,f){var g=e.reserve(b+1);e.buffer[g++]=a;c.call(e.buffer,f,g,d)}}function k(a,b){new r(this,b,a)}function m(a,b){new z(this,b,a)}function n(a,b){f.write(this,a,b,!1,23,4)}function p(a,b){f.write(this,a,b,!1,52,8)}var f=e("ieee754");l=e("int64-buffer");
var r=l.Uint64BE,z=l.Int64BE,x=e("./write-uint8").uint8,D=e("./bufferish"),w=D.global,F=D.hasBuffer&&"TYPED_ARRAY_SUPPORT"in w&&!w.TYPED_ARRAY_SUPPORT,B=D.hasBuffer&&w.prototype||{};h.getWriteToken=function(a){return a&&a.uint8array?(a=b(),a[202]=g(202,4,n),a[203]=g(203,8,p),a):F||D.hasBuffer&&a&&a.safe?(a=x.slice(),a[196]=g(196,1,w.prototype.writeUInt8),a[197]=g(197,2,w.prototype.writeUInt16BE),a[198]=g(198,4,w.prototype.writeUInt32BE),a[199]=g(199,1,w.prototype.writeUInt8),a[200]=g(200,2,w.prototype.writeUInt16BE),
a[201]=g(201,4,w.prototype.writeUInt32BE),a[202]=g(202,4,w.prototype.writeFloatBE),a[203]=g(203,8,w.prototype.writeDoubleBE),a[204]=g(204,1,w.prototype.writeUInt8),a[205]=g(205,2,w.prototype.writeUInt16BE),a[206]=g(206,4,w.prototype.writeUInt32BE),a[207]=g(207,8,k),a[208]=g(208,1,w.prototype.writeInt8),a[209]=g(209,2,w.prototype.writeInt16BE),a[210]=g(210,4,w.prototype.writeInt32BE),a[211]=g(211,8,m),a[217]=g(217,1,w.prototype.writeUInt8),a[218]=g(218,2,w.prototype.writeUInt16BE),a[219]=g(219,4,w.prototype.writeUInt32BE),
a[220]=g(220,2,w.prototype.writeUInt16BE),a[221]=g(221,4,w.prototype.writeUInt32BE),a[222]=g(222,2,w.prototype.writeUInt16BE),a[223]=g(223,4,w.prototype.writeUInt32BE),a):b()}},{"./bufferish":72,"./write-uint8":92,ieee754:94,"int64-buffer":64}],91:[function(e,l,h){var b=e("isarray");l=e("int64-buffer");var a=l.Uint64BE,d=l.Int64BE,c=e("./bufferish"),g=e("./bufferish-proto"),k=e("./write-token"),m=e("./write-uint8").uint8,n=e("./ext-buffer").ExtBuffer,p="undefined"!==typeof Uint8Array,f="undefined"!==
typeof Map,r=[,212,213,,214,,,,215];r[16]=216;h.getWriteType=function(e){function h(a){return 32>a?1:255>=a?2:65535>=a?3:5}function l(a){return 32>a?1:65535>=a?3:5}function z(c,e){if(null===e)return B(c,e);if(I(e))return O(c,e);if(b(e)){var f=e,g=f.length;C[16>g?144+g:65535>=g?220:221](c,g);for(var h=c.codec.encode,k=0;k<g;k++)h(c,f[k])}else if(a.isUint64BE(e))C[207](c,e.toArray());else if(d.isInt64BE(e))C[211](c,e.toArray());else(f=c.codec.getExtPacker(e))&&(e=f(e)),e instanceof n?(f=e,g=f.buffer,
h=g.length,C[r[h]||(255>h?199:65535>=h?200:201)](c,h),m[f.type](c),c.send(g)):Q(c,e)}function F(a,b){if(I(b)){var c=b.length;C[32>c?160+c:65535>=c?218:219](a,c);a.send(b)}else z(a,b)}function B(a,b){C[192](a,b)}function A(a,b){var c=b.length;C[255>c?196:65535>=c?197:198](a,c);a.send(b)}function L(a,b){A(a,new Uint8Array(b))}function G(a,b){var c=Object.keys(b),d=c.length;C[16>d?128+d:65535>=d?222:223](a,d);var e=a.codec.encode;c.forEach(function(c){e(a,c);e(a,b[c])})}function J(a,b){if(!(b instanceof
Map))return G(a,b);var c=b.size;C[16>c?128+c:65535>=c?222:223](a,c);var d=a.codec.encode;b.forEach(function(b,c,e){d(a,c);d(a,b)})}var C=k.getWriteToken(e),E=e&&e.useraw,H=p&&e&&e.binarraybuffer,I=H?c.isArrayBuffer:c.isBuffer,O=H?L:A,Q=f&&e&&e.usemap?J:G;return{"boolean":function(a,b){C[b?195:194](a,b)},"function":B,number:function(a,b){var c=b|0;if(b!==c)C[203](a,b);else C[-32<=c&&127>=c?c&255:0<=c?255>=c?204:65535>=c?205:206:-128<=c?208:-32768<=c?209:210](a,c)},object:E?F:z,string:function(a){return function(b,
c){var d=c.length;b.offset=b.reserve(5+3*d);var e=b.buffer,f=a(d),h=b.offset+f,d=g.write.call(e,c,h),k=a(d);f!==k&&g.copy.call(e,e,h+k-f,h,h+d);C[1===k?160+d:3>=k?215+k:219](b,d);b.offset+=d}}(E?l:h),symbol:B,undefined:B}}},{"./bufferish":72,"./bufferish-proto":70,"./ext-buffer":81,"./write-token":90,"./write-uint8":92,"int64-buffer":64,isarray:95}],92:[function(e,l,h){function b(a){return function(b){var c=b.reserve(1);b.buffer[c]=a}}e=h.uint8=Array(256);for(l=0;255>=l;l++)e[l]=b(l)},{}],93:[function(e,
l,h){function b(){if(!(this instanceof b))return new b}(function(a){function b(a){for(var b in h)a[b]=h[b];return a}function c(a,b){function d(a){return a!==b&&a.originalListener!==b}var f;if(arguments.length)if(b){if(f=e(this,a,!0)){f=f.filter(d);if(!f.length)return c.call(this,a);this.listeners[a]=f}}else{if(f=this.listeners)if(delete f[a],!Object.keys(f).length)return c.call(this)}else delete this.listeners;return this}function e(a,b,c){if(!c||a.listeners)return a=a.listeners||(a.listeners={}),
a[b]||(a[b]=[])}"undefined"!==typeof l&&(l.exports=a);var h={on:function(a,b){e(this,a).push(b);return this},once:function(a,b){function d(){c.call(f,a,d);b.apply(this,arguments)}var f=this;d.originalListener=b;e(f,a).push(d);return f},off:c,emit:function(a,b){function c(a){a.call(h)}function d(a){a.call(h,b)}function g(a){a.apply(h,m)}var h=this,k=e(h,a,!0);if(!k)return!1;var l=arguments.length;if(1===l)k.forEach(c);else if(2===l)k.forEach(d);else{var m=Array.prototype.slice.call(arguments,1);k.forEach(g)}return!!k.length}};
b(a.prototype);a.mixin=b})(b)},{}],94:[function(e,l,h){arguments[4][27][0].apply(h,arguments)},{dup:27}],95:[function(e,l,h){arguments[4][28][0].apply(h,arguments)},{dup:28}],96:[function(e,l,h){(function(b){b(function(a){function b(a){var b=1<arguments.length?n.call(arguments,1):[];return function(){return l(a,this,b.concat(n.call(arguments)))}}var c=a("./when"),e=c["try"],h=a("./lib/liftAll"),l=a("./lib/apply")(c.Promise),n=Array.prototype.slice;return{lift:b,liftAll:function(a,c,d){return h(b,
c,d,a)},call:e,apply:function(a,b){return l(a,this,null==b?[]:n.call(b))},compose:function(a){var b=n.call(arguments,1);return function(){var d=this,f=n.call(arguments),f=e.apply(d,[a].concat(f));return c.reduce(b,function(a,b){return b.call(d,a)},f)}}}})})(function(b){l.exports=b(e)})},{"./lib/apply":100,"./lib/liftAll":112,"./when":120}],97:[function(e,l,h){(function(b){b(function(a){var b=a("./makePromise"),c=a("./Scheduler");a=a("./env").asap;return b({scheduler:new c(a)})})})(function(b){l.exports=
b(e)})},{"./Scheduler":98,"./env":110,"./makePromise":113}],98:[function(e,l,h){(function(b){b(function(){function a(a){this._async=a;this._running=!1;this._queue=this;this._queueLen=0;this._afterQueue={};this._afterQueueLen=0;var b=this;this.drain=function(){b._drain()}}a.prototype.enqueue=function(a){this._queue[this._queueLen++]=a;this.run()};a.prototype.afterQueue=function(a){this._afterQueue[this._afterQueueLen++]=a;this.run()};a.prototype.run=function(){this._running||(this._running=!0,this._async(this.drain))};
a.prototype._drain=function(){for(var a=0;a<this._queueLen;++a)this._queue[a].run(),this._queue[a]=void 0;this._queueLen=0;this._running=!1;for(a=0;a<this._afterQueueLen;++a)this._afterQueue[a].run(),this._afterQueue[a]=void 0;this._afterQueueLen=0};return a})})(function(b){l.exports=b()})},{}],99:[function(e,l,h){(function(b){b(function(){function a(b){Error.call(this);this.message=b;this.name=a.name;"function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,a)}a.prototype=Object.create(Error.prototype);
return a.prototype.constructor=a})})(function(b){l.exports=b()})},{}],100:[function(e,l,h){(function(b){b(function(){function a(a,d){function c(b,c){if(0>b.i)return d(b.f,b.thisArg,b.params,c);a._handler(b.args[b.i]).fold(e,b,void 0,c)}function e(a,b,d){a.params[a.i]=b;--a.i;c(a,d)}2>arguments.length&&(d=b);return function(b,e,f){var g=a._defer(),h=f.length;c({f:b,thisArg:e,args:f,params:Array(h),i:h-1,call:d},g._handler);return g}}function b(a,b,d,e){try{e.resolve(a.apply(b,d))}catch(n){e.reject(n)}}
a.tryCatchResolve=b;return a})})(function(b){l.exports=b()})},{}],101:[function(e,l,h){(function(b){b(function(a){var b=a("../state"),c=a("../apply");return function(a){function d(c){var d=a._handler(c);if(0===d.state())return h(c).then(b.fulfilled,b.rejected);d._unreport();return b.inspect(d)}function e(a){return function(b,c,d){return g(a,void 0,[b,c,d])}}var g=c(a),h=a.resolve,f=a.all,l=Array.prototype.reduce,z=Array.prototype.reduceRight,x=Array.prototype.slice;a.any=function(b){function c(a){k=
null;this.resolve(a)}function d(a){this.resolved||(k.push(a),0===--h&&this.reject(k))}for(var e=a._defer(),f=e._handler,g=b.length>>>0,h=g,k=[],l,m=0;m<g;++m)if(l=b[m],void 0!==l||m in b)if(l=a._handler(l),0<l.state()){f.become(l);a._visitRemaining(b,m,l);break}else l.visit(f,c,d);else--h;0===h&&f.reject(new RangeError("any(): array must not be empty"));return e};a.some=function(b,c){function d(a){this.resolved||(h.push(a),0===--m&&(k=null,this.resolve(h)))}function e(a){this.resolved||(k.push(a),
0===--n&&(h=null,this.reject(k)))}var f=a._defer(),g=f._handler,h=[],k=[],l=b.length>>>0,m=0,n,p,r;for(r=0;r<l;++r)p=b[r],(void 0!==p||r in b)&&++m;c=Math.max(c,0);n=m-c+1;m=Math.min(c,m);c>m?g.reject(new RangeError("some(): array must contain at least "+c+" item(s), but had "+m)):0===m&&g.resolve(h);for(r=0;r<l;++r)p=b[r],(void 0!==p||r in b)&&a._handler(p).visit(g,d,e,g.notify);return f};a.settle=function(a){return f(a.map(d))};a.map=function(b,c){return a._traverse(c,b)};a.filter=function(b,c){var d=
x.call(b);return a._traverse(c,d).then(function(b){for(var c=b.length,e=Array(c),f=0,g=0;f<c;++f)b[f]&&(e[g++]=a._handler(d[f]).value);e.length=g;return e})};a.reduce=function(a,b){return 2<arguments.length?l.call(a,e(b),arguments[2]):l.call(a,e(b))};a.reduceRight=function(a,b){return 2<arguments.length?z.call(a,e(b),arguments[2]):z.call(a,e(b))};a.prototype.spread=function(a){return this.then(f).then(function(b){return a.apply(this,b)})};return a}})})(function(b){l.exports=b(e)})},{"../apply":100,
"../state":114}],102:[function(e,l,h){(function(b){b(function(){function a(){throw new TypeError("catch predicate must be a function");}function b(a){return a}return function(c){function d(a,b){return function(c){return(b===Error||null!=b&&b.prototype instanceof Error?c instanceof b:b(c))?a.call(this,c):p(c)}}function e(a,b,c,d){a=a.call(b);return"object"!==typeof a&&"function"!==typeof a||null===a?c(d):h(a,c,d)}function h(a,b,c){return l(a).then(function(){return b(c)})}var l=c.resolve,p=c.reject,
f=c.prototype["catch"];c.prototype.done=function(a,b){this._handler.visit(this._handler.receiver,a,b)};c.prototype["catch"]=c.prototype.otherwise=function(b){return 2>arguments.length?f.call(this,b):"function"!==typeof b?this.ensure(a):f.call(this,d(arguments[1],b))};c.prototype["finally"]=c.prototype.ensure=function(a){return"function"!==typeof a?this:this.then(function(c){return e(a,this,b,c)},function(b){return e(a,this,p,b)})};c.prototype["else"]=c.prototype.orElse=function(a){return this.then(void 0,
function(){return a})};c.prototype.yield=function(a){return this.then(function(){return a})};c.prototype.tap=function(a){return this.then(a).yield(this)};return c}})})(function(b){l.exports=b()})},{}],103:[function(e,l,h){(function(b){b(function(){return function(a){a.prototype.fold=function(b,c){var d=this._beget();this._handler.fold(function(c,d,e){a._handler(c).fold(function(a,c,d){d.resolve(b.call(this,c,a))},d,this,e)},c,d._handler.receiver,d._handler);return d};return a}})})(function(b){l.exports=
b()})},{}],104:[function(e,l,h){(function(b){b(function(a){var b=a("../state").inspect;return function(a){a.prototype.inspect=function(){return b(a._handler(this))};return a}})})(function(b){l.exports=b(e)})},{"../state":114}],105:[function(e,l,h){(function(b){b(function(){return function(a){function b(a,d,e,h){function g(f,g){return c(e(f)).then(function(){return b(a,d,e,g)})}return c(h).then(function(b){return c(d(b)).then(function(d){return d?b:c(a(b)).spread(g)})})}var c=a.resolve;a.iterate=function(a,
c,d,e){return b(function(b){return[b,a(b)]},c,d,e)};a.unfold=b;return a}})})(function(b){l.exports=b()})},{}],106:[function(e,l,h){(function(b){b(function(){return function(a){a.prototype.progress=function(a){return this.then(void 0,void 0,a)};return a}})})(function(b){l.exports=b()})},{}],107:[function(e,l,h){(function(b){b(function(a){function b(a,b,d,e){return c.setTimer(function(){a(d,e,b)},b)}var c=a("../env"),e=a("../TimeoutError");return function(a){function d(a,c,d){b(g,a,c,d)}function g(a,
b){b.resolve(a)}function h(a,b,c){a="undefined"===typeof a?new e("timed out after "+c+"ms"):a;b.reject(a)}a.prototype.delay=function(a){var b=this._beget();this._handler.fold(d,a,void 0,b._handler);return b};a.prototype.timeout=function(a,d){var e=this._beget(),f=e._handler,g=b(h,a,d,e._handler);this._handler.visit(f,function(a){c.clearTimer(g);this.resolve(a)},function(a){c.clearTimer(g);this.reject(a)},f.notify);return e};return a}})})(function(b){l.exports=b(e)})},{"../TimeoutError":99,"../env":110}],
108:[function(e,l,h){(function(b){b(function(a){function b(a){throw a;}function c(){}var e=a("../env").setTimer,h=a("../format");return function(a){function d(a){a.handled||(F.push(a),l("Potentially unhandled rejection ["+a.id+"] "+h.formatError(a.value)))}function g(a){var b=F.indexOf(a);0<=b&&(F.splice(b,1),m("Handled previous rejection ["+a.id+"] "+h.formatObject(a.value)))}function f(a,b){w.push(a,b);null===B&&(B=e(k,0))}function k(){for(B=null;0<w.length;)w.shift()(w.shift())}var l=c,m=c,D;"undefined"!==
typeof console&&(D=console,l="undefined"!==typeof D.error?function(a){D.error(a)}:function(a){D.log(a)},m="undefined"!==typeof D.info?function(a){D.info(a)}:function(a){D.log(a)});a.onPotentiallyUnhandledRejection=function(a){f(d,a)};a.onPotentiallyUnhandledRejectionHandled=function(a){f(g,a)};a.onFatalRejection=function(a){f(b,a.value)};var w=[],F=[],B=null;return a}})})(function(b){l.exports=b(e)})},{"../env":110,"../format":111}],109:[function(e,l,h){(function(b){b(function(){return function(a){a.prototype["with"]=
a.prototype.withThis=function(a){var b=this._beget(),d=b._handler;d.receiver=a;this._handler.chain(d,a);return b};return a}})})(function(b){l.exports=b()})},{}],110:[function(e,l,h){(function(b){(function(a){a(function(a){function c(a){var b,c=document.createTextNode("");(new a(function(){var a=b;b=void 0;a()})).observe(c,{characterData:!0});var d=0;return function(a){b=a;c.data=d^=1}}var d,e="undefined"!==typeof setTimeout&&setTimeout,h=function(a,b){return setTimeout(a,b)},l=function(a){return clearTimeout(a)},
p=function(a){return e(a,0)};if("undefined"!==typeof b&&"[object process]"===Object.prototype.toString.call(b))p=function(a){return b.nextTick(a)};else if(d="function"===typeof MutationObserver&&MutationObserver||"function"===typeof WebKitMutationObserver&&WebKitMutationObserver)p=c(d);else if(!e)var f=a("vertx"),h=function(a,b){return f.setTimer(b,a)},l=f.cancelTimer,p=f.runOnLoop||f.runOnContext;return{setTimer:h,clearTimer:l,asap:p}})})(function(a){l.exports=a(e)})}).call(this,e("_process"))},
{_process:29}],111:[function(e,l,h){(function(b){b(function(){function a(a){var c=String(a);"[object Object]"===c&&"undefined"!==typeof JSON&&(c=b(a,c));return c}function b(a,b){try{return JSON.stringify(a)}catch(k){return b}}return{formatError:function(b){var c="object"===typeof b&&null!==b&&(b.stack||b.message)?b.stack||b.message:a(b);return b instanceof Error?c:c+" (WARNING: non-Error used)"},formatObject:a,tryStringify:b}})})(function(b){l.exports=b()})},{}],112:[function(e,l,h){(function(b){b(function(){function a(a,
b,d){a[d]=b;return a}function b(a){return"function"===typeof a?a.bind():Object.create(a)}return function(c,d,e,h){"undefined"===typeof d&&(d=a);return Object.keys(h).reduce(function(a,b){var e=h[b];return"function"===typeof e?d(a,c(e),b):a},"undefined"===typeof e?b(h):e)}})})(function(b){l.exports=b()})},{}],113:[function(e,l,h){(function(b){(function(a){a(function(){return function(a){function c(a,b){this._handler=a===x?b:d(a)}function d(a){function b(a){e.resolve(a)}function c(a){e.reject(a)}function d(a){e.notify(a)}
var e=new w;try{a(b,c,d)}catch(U){c(U)}return e}function e(a){return a instanceof c?a:new c(x,new F(r(a)))}function h(a){return new c(x,new F(new L(a)))}function l(a,b,d){function e(c,e,g){g.resolved||p(d,f,c,a(b,e,c),g)}function f(a,b,c){l[a]=b;0===--k&&c.become(new A(l))}for(var g="function"===typeof b?e:f,h=new w,k=d.length>>>0,l=Array(k),m=0,n;m<d.length&&!h.resolved;++m)n=d[m],void 0!==n||m in d?p(d,g,m,n,h):--k;0===k&&h.become(new A(l));return new c(x,h)}function p(a,b,d,e,g){if(Q(e)){e=e instanceof
c?e._handler.join():z(e);var h=e.state();0===h?e.fold(b,d,void 0,g):0<h?b(d,e.value,g):(g.become(e),f(a,d+1,e))}else b(d,e,g)}function f(a,b,c){for(;b<a.length;++b){var d=r(a[b]);if(d!==c){var e=d.state();0===e?d.visit(d,void 0,d._unreport):0>e&&d._unreport()}}}function r(a){return a instanceof c?a._handler.join():Q(a)?z(a):new A(a)}function z(a){try{var b=a.then;return"function"===typeof b?new B(b,a):new A(a)}catch(ka){return new L(ka)}}function x(){}function D(){}function w(a,b){c.createContext(this,
b);this.consumers=void 0;this.receiver=a;this.handler=void 0;this.resolved=!1}function F(a){this.handler=a}function B(a,b){w.call(this);q.enqueue(new H(a,b,this))}function A(a){c.createContext(this);this.value=a}function L(a){c.createContext(this);this.id=++ea;this.value=a;this.reported=this.handled=!1;this._report()}function G(a,b){this.rejection=a;this.context=b}function J(a){this.rejection=a}function C(a,b){this.continuation=a;this.handler=b}function E(a,b){this.handler=b;this.value=a}function H(a,
b,c){this._then=a;this.thenable=b;this.resolver=c}function I(a,b,c,d,e){try{a.call(b,c,d,e)}catch(U){d(U)}}function O(a,b,c,d){this.f=a;this.z=b;this.c=c;this.to=d;this.resolver=S;this.receiver=this}function Q(a){return("object"===typeof a||"function"===typeof a)&&null!==a}function K(a,b,d,e){if("function"!==typeof a)return e.become(b);c.enterContext(b);try{e.become(r(a.call(d,b.value)))}catch(V){e.become(new L(V))}c.exitContext()}function M(a,b,c){try{return a(b,c)}catch(ba){return h(ba)}}function u(a,
b){b.prototype=P(a.prototype);b.prototype.constructor=b}function v(a,b){return b}function t(){}var q=a.scheduler,T=function(){return"undefined"!==typeof b&&null!==b&&"function"===typeof b.emit?function(a,c){return"unhandledRejection"===a?b.emit(a,c.value,c):b.emit(a,c)}:"undefined"!==typeof self&&"function"===typeof CustomEvent?function(a,b,c){var d=!1;try{d=new c("unhandledRejection")instanceof c}catch(V){}return d?function(a,d){var e=new c(a,{detail:{reason:d.value,key:d},bubbles:!1,cancelable:!0});
return!b.dispatchEvent(e)}:a}(t,self,CustomEvent):t}(),P=Object.create||function(a){function b(){}b.prototype=a;return new b};c.resolve=e;c.reject=h;c.never=function(){return aa};c._defer=function(){return new c(x,new w)};c._handler=r;c.prototype.then=function(a,b,c){var d=this._handler,e=d.join().state();if("function"!==typeof a&&0<e||"function"!==typeof b&&0>e)return new this.constructor(x,d);e=this._beget();d.chain(e._handler,d.receiver,a,b,c);return e};c.prototype["catch"]=function(a){return this.then(void 0,
a)};c.prototype._beget=function(){var a=this._handler,b=this.constructor,a=new w(a.receiver,a.join().context);return new b(x,a)};c.all=function(a){return l(v,null,a)};c.race=function(a){if("object"!==typeof a||null===a)return h(new TypeError("non-iterable passed to race()"));if(0===a.length)a=aa;else if(1===a.length)a=e(a[0]);else{var b=new w,d,g;for(d=0;d<a.length;++d)if(g=a[d],void 0!==g||d in a)if(g=r(g),0!==g.state()){b.become(g);f(a,d+1,g);break}else g.visit(b,b.resolve,b.reject);a=new c(x,b)}return a};
c._traverse=function(a,b){return l(M,a,b)};c._visitRemaining=f;x.prototype.when=x.prototype.become=x.prototype.notify=x.prototype.fail=x.prototype._unreport=x.prototype._report=t;x.prototype._state=0;x.prototype.state=function(){return this._state};x.prototype.join=function(){for(var a=this;void 0!==a.handler;)a=a.handler;return a};x.prototype.chain=function(a,b,c,d,e){this.when({resolver:a,receiver:b,fulfilled:c,rejected:d,progress:e})};x.prototype.visit=function(a,b,c,d){this.chain(S,a,b,c,d)};
x.prototype.fold=function(a,b,c,d){this.when(new O(a,b,c,d))};u(x,D);D.prototype.become=function(a){a.fail()};var S=new D;u(x,w);w.prototype._state=0;w.prototype.resolve=function(a){this.become(r(a))};w.prototype.reject=function(a){this.resolved||this.become(new L(a))};w.prototype.join=function(){if(!this.resolved)return this;for(var a=this;void 0!==a.handler;)if(a=a.handler,a===this)return this.handler=new L(new TypeError("Promise cycle"));return a};w.prototype.run=function(){var a=this.consumers,
b=this.handler;this.handler=this.handler.join();this.consumers=void 0;for(var c=0;c<a.length;++c)b.when(a[c])};w.prototype.become=function(a){this.resolved||(this.resolved=!0,this.handler=a,void 0!==this.consumers&&q.enqueue(this),void 0!==this.context&&a._report(this.context))};w.prototype.when=function(a){this.resolved?q.enqueue(new C(a,this.handler)):void 0===this.consumers?this.consumers=[a]:this.consumers.push(a)};w.prototype.notify=function(a){this.resolved||q.enqueue(new E(a,this))};w.prototype.fail=
function(a){a="undefined"===typeof a?this.context:a;this.resolved&&this.handler.join().fail(a)};w.prototype._report=function(a){this.resolved&&this.handler.join()._report(a)};w.prototype._unreport=function(){this.resolved&&this.handler.join()._unreport()};u(x,F);F.prototype.when=function(a){q.enqueue(new C(a,this))};F.prototype._report=function(a){this.join()._report(a)};F.prototype._unreport=function(){this.join()._unreport()};u(w,B);u(x,A);A.prototype._state=1;A.prototype.fold=function(a,b,d,e){if("function"!==
typeof a)e.become(this);else{c.enterContext(this);try{a.call(d,b,this.value,e)}catch(V){e.become(new L(V))}c.exitContext()}};A.prototype.when=function(a){K(a.fulfilled,this,a.receiver,a.resolver)};var ea=0;u(x,L);L.prototype._state=-1;L.prototype.fold=function(a,b,c,d){d.become(this)};L.prototype.when=function(a){"function"===typeof a.rejected&&this._unreport();K(a.rejected,this,a.receiver,a.resolver)};L.prototype._report=function(a){q.afterQueue(new G(this,a))};L.prototype._unreport=function(){this.handled||
(this.handled=!0,q.afterQueue(new J(this)))};L.prototype.fail=function(a){this.reported=!0;T("unhandledRejection",this);c.onFatalRejection(this,void 0===a?this.context:a)};G.prototype.run=function(){this.rejection.handled||this.rejection.reported||(this.rejection.reported=!0,T("unhandledRejection",this.rejection)||c.onPotentiallyUnhandledRejection(this.rejection,this.context))};J.prototype.run=function(){this.rejection.reported&&(T("rejectionHandled",this.rejection)||c.onPotentiallyUnhandledRejectionHandled(this.rejection))};
c.createContext=c.enterContext=c.exitContext=c.onPotentiallyUnhandledRejection=c.onPotentiallyUnhandledRejectionHandled=c.onFatalRejection=t;a=new x;var aa=new c(x,a);C.prototype.run=function(){this.handler.join().when(this.continuation)};E.prototype.run=function(){var a=this.handler.consumers;if(void 0!==a)for(var b,d=0;d<a.length;++d){b=a[d];var e=b.progress,f=this.value,g=this.handler,h=b.receiver;b=b.resolver;if("function"!==typeof e)b.notify(f);else{c.enterContext(g);g=b;try{g.notify(e.call(h,
f))}catch(fa){g.notify(fa)}c.exitContext()}}};H.prototype.run=function(){var a=this.resolver;I(this._then,this.thenable,function(b){a.resolve(b)},function(b){a.reject(b)},function(b){a.notify(b)})};O.prototype.fulfilled=function(a){this.f.call(this.c,this.z,a,this.to)};O.prototype.rejected=function(a){this.to.reject(a)};O.prototype.progress=function(a){this.to.notify(a)};return c}})})(function(a){l.exports=a()})}).call(this,e("_process"))},{_process:29}],114:[function(e,l,h){(function(b){b(function(){function a(){return{state:"pending"}}
function b(a){return{state:"rejected",reason:a}}function c(a){return{state:"fulfilled",value:a}}return{pending:a,fulfilled:c,rejected:b,inspect:function(d){var e=d.state();return 0===e?a():0<e?c(d.value):b(d.value)}}})})(function(b){l.exports=b()})},{}],115:[function(e,l,h){(function(b){b(function(a){var b=a("./monitor/PromiseMonitor");a=a("./monitor/ConsoleReporter");var c=new b(new a);return function(a){return c.monitor(a)}})})(function(b){l.exports=b(e)})},{"./monitor/ConsoleReporter":116,"./monitor/PromiseMonitor":117}],
116:[function(e,l,h){(function(b){b(function(a){function b(){this._previouslyReported=!1}function c(){}var e=a("./error");b.prototype=function(){var a,b,d,e;if("undefined"===typeof console)a=b=c;else{var f=console;"function"===typeof f.error&&"function"===typeof f.dir?(b=function(a){f.error(a)},a=function(a){f.log(a)},"function"===typeof f.groupCollapsed&&(d=function(a){f.groupCollapsed(a)},e=function(){f.groupEnd()})):a="undefined"!==typeof f.log&&"undefined"!==typeof JSON?b=function(a){if("string"!==
typeof a)try{a=JSON.stringify(a)}catch(z){}f.log(a)}:b=c}return{msg:a,warn:b,groupStart:d||b,groupEnd:e||c}}();b.prototype.log=function(a){if(0===a.length)this._previouslyReported&&(this._previouslyReported=!1,this.msg("[promises] All previously unhandled rejections have now been handled"));else{this._previouslyReported=!0;this.groupStart("[promises] Unhandled rejections: "+a.length);try{this._log(a)}finally{this.groupEnd()}}};b.prototype._log=function(a){for(var b=0;b<a.length;++b)this.warn(e.format(a[b]))};
return b})})(function(b){l.exports=b(e)})},{"./error":119}],117:[function(e,l,h){(function(b){b(function(a){function b(a){this.logDelay=0;this.stackFilter=h;this.stackJumpSeparator="from execution context:";this.filterDuplicateFrames=!0;this._reporter=a;"function"===typeof a.configurePromiseMonitor&&a.configurePromiseMonitor(this);this._traces=[];this._traceTask=0;var b=this;this._doLogTraces=function(){b._logTraces()}}function c(a,b){return b.filter(function(b){return!a.test(b)})}function e(a){return!a.handler.handled}
var h=/[\s\(\/\\](node|module|timers)\.js:|when([\/\\]{1,2}(lib|monitor|es6-shim)[\/\\]{1,2}|\.js)|(new\sPromise)\b|(\b(PromiseMonitor|ConsoleReporter|Scheduler|RunHandlerTask|ProgressTask|Promise|.*Handler)\.[\w_]\w\w+\b)|\b(tryCatch\w+|getHandler\w*)\b/i,l=a("../lib/env").setTimer,n=a("./error"),p=[];b.prototype.monitor=function(a){var b=this;a.createContext=function(a,c){a.context=b.createContext(a,c)};a.enterContext=function(a){p.push(a.context)};a.exitContext=function(){p.pop()};a.onPotentiallyUnhandledRejection=
function(a,c){return b.addTrace(a,c)};a.onPotentiallyUnhandledRejectionHandled=function(a){return b.removeTrace(a)};a.onFatalRejection=function(a,c){return b.fatal(a,c)};return this};b.prototype.createContext=function(a,b){var c={parent:b||p[p.length-1],stack:void 0};n.captureStack(c,a.constructor);return c};b.prototype.addTrace=function(a,b){var c,d;for(d=this._traces.length-1;0<=d&&(c=this._traces[d],c.handler!==a);--d);0<=d?c.extraContext=b:this._traces.push({handler:a,extraContext:b});this.logTraces()};
b.prototype.removeTrace=function(){this.logTraces()};b.prototype.fatal=function(a,b){var c=Error();c.stack=this._createLongTrace(a.value,a.context,b).join("\n");l(function(){throw c;},0)};b.prototype.logTraces=function(){this._traceTask||(this._traceTask=l(this._doLogTraces,this.logDelay))};b.prototype._logTraces=function(){this._traceTask=void 0;this._traces=this._traces.filter(e);this._reporter.log(this.formatTraces(this._traces))};b.prototype.formatTraces=function(a){return a.map(function(a){return this._createLongTrace(a.handler.value,
a.handler.context,a.extraContext)},this)};b.prototype._createLongTrace=function(a,b,d){a=n.parse(a)||[String(a)+" (WARNING: non-Error used)"];a=c(this.stackFilter,a,0);this._appendContext(a,b);this._appendContext(a,d);return this.filterDuplicateFrames?this._removeDuplicates(a):a};b.prototype._removeDuplicates=function(a){var b={},c=this.stackJumpSeparator,d=0;return a.reduceRight(function(a,e,f){0===f?a.unshift(e):e===c?0<d&&(a.unshift(e),d=0):b[e]||(b[e]=!0,a.unshift(e),++d);return a},[])};b.prototype._appendContext=
function(a,b){a.push.apply(a,this._createTrace(b))};b.prototype._createTrace=function(a){for(var b=[],d;a;){if(d=n.parse(a)){d=c(this.stackFilter,d);var e=b;1<d.length&&(d[0]=this.stackJumpSeparator,e.push.apply(e,d))}a=a.parent}return b};return b})})(function(b){l.exports=b(e)})},{"../lib/env":110,"./error":119}],118:[function(e,l,h){(function(b){b(function(a){var b=a("../monitor");a=a("../when").Promise;return b(a)})})(function(b){l.exports=b(e)})},{"../monitor":115,"../when":120}],119:[function(e,
l,h){(function(b){b(function(){function a(a){try{throw Error();}catch(r){a.stack=r.stack}}function b(a){a.stack=Error().stack}function c(a){return h(a)}function e(a){var b=Error();b.stack=h(a);return b}function h(a){for(var b=!1,c="",d=0;d<a.length;++d)b?c+="\n"+a[d]:(c+=a[d],b=!0);return c}var l,n,p;Error.captureStackTrace?(l=function(a){return a&&a.stack&&a.stack.split("\n")},p=c,n=Error.captureStackTrace):(l=function(a){var b=a&&a.stack&&a.stack.split("\n");b&&a.message&&b.unshift(a.message);return b},
"string"!==typeof Error().stack?(p=c,n=a):(p=e,n=b));return{parse:l,format:p,captureStack:n}})})(function(b){l.exports=b()})},{}],120:[function(e,l,h){(function(b){b(function(a){function b(a,b,c,d){var e=B.resolve(a);return 2>arguments.length?e:e.then(b,c,d)}function c(a){return function(){for(var b=0,c=arguments.length,d=Array(c);b<c;++b)d[b]=arguments[b];return A(a,this,d)}}function e(a){for(var b=0,c=arguments.length-1,d=Array(c);b<c;++b)d[b]=arguments[b+1];return A(a,this,d)}function h(){function a(a){d._handler.resolve(a)}
function b(a){d._handler.reject(a)}function c(a){d._handler.notify(a)}var d=B._defer();this.promise=d;this.resolve=a;this.reject=b;this.notify=c;this.resolver={resolve:a,reject:b,notify:c}}var l=a("./lib/decorators/timed"),n=a("./lib/decorators/array"),p=a("./lib/decorators/flow"),f=a("./lib/decorators/fold"),r=a("./lib/decorators/inspect"),z=a("./lib/decorators/iterate"),x=a("./lib/decorators/progress"),D=a("./lib/decorators/with"),w=a("./lib/decorators/unhandledRejection"),F=a("./lib/TimeoutError"),
B=[n,p,f,z,x,r,D,l,w].reduce(function(a,b){return b(a)},a("./lib/Promise")),A=a("./lib/apply")(B);b.promise=function(a){return new B(a)};b.resolve=B.resolve;b.reject=B.reject;b.lift=c;b["try"]=e;b.attempt=e;b.iterate=B.iterate;b.unfold=B.unfold;b.join=function(){return B.all(arguments)};b.all=function(a){return b(a,B.all)};b.settle=function(a){return b(a,B.settle)};b.any=c(B.any);b.some=c(B.some);b.race=c(B.race);b.map=function(a,c){return b(a,function(a){return B.map(a,c)})};b.filter=function(a,
c){return b(a,function(a){return B.filter(a,c)})};b.reduce=c(B.reduce);b.reduceRight=c(B.reduceRight);b.isPromiseLike=function(a){return a&&"function"===typeof a.then};b.Promise=B;b.defer=function(){return new h};b.TimeoutError=F;return b})})(function(b){l.exports=b(e)})},{"./lib/Promise":97,"./lib/TimeoutError":99,"./lib/apply":100,"./lib/decorators/array":101,"./lib/decorators/flow":102,"./lib/decorators/fold":103,"./lib/decorators/inspect":104,"./lib/decorators/iterate":105,"./lib/decorators/progress":106,
"./lib/decorators/timed":107,"./lib/decorators/unhandledRejection":108,"./lib/decorators/with":109}]},{},[3])(3)});
;/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function i(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););
return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function c(n,t){return!(null==n||!n.length)&&-1<d(n,t,0)}function a(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];
return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function _(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function g(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function d(n,t,r){if(t===t)n:{
--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=g(n,b,r);return n}function y(n,t,r,e){--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function b(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:P}function j(n){return function(t){return null==t?F:t[n]}}function w(n){return function(t){return null==n?F:n[t]}}function m(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;
return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==F&&(r=r===F?i:r+i)}return r}function E(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function O(n,t){return l(t,function(t){return[t,n[t]]})}function S(n){return function(t){return n(t)}}function I(n,t){return l(t,function(t){return n[t]})}function R(n,t){return n.has(t)}function z(n,t){for(var r=-1,e=n.length;++r<e&&-1<d(t,n[r],0););return r}function W(n,t){for(var r=n.length;r--&&-1<d(t,n[r],0););return r}function B(n){
return"\\"+Tn[n]}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function U(n,t){return function(r){return n(t(r))}}function C(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function M(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function T(n){if(Bn.test(n)){
for(var t=zn.lastIndex=0;zn.test(n);)++t;n=t}else n=tt(n);return n}function $(n){return Bn.test(n)?n.match(zn)||[]:n.split("")}var F,N=1/0,P=NaN,Z=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],q=/\b__p\+='';/g,V=/\b(__p\+=)''\+/g,K=/(__e\(.*?\)|\b__t\))\+'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,H=/[&<>"']/g,J=RegExp(G.source),Y=RegExp(H.source),Q=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,nn=/<%=([\s\S]+?)%>/g,tn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rn=/^\w*$/,en=/^\./,un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,on=/[\\^$.*+?()[\]{}|]/g,fn=RegExp(on.source),cn=/^\s+|\s+$/g,an=/^\s+/,ln=/\s+$/,sn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,hn=/\{\n\/\* \[wrapped with (.+)\] \*/,pn=/,? & /,_n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,vn=/\\(\\)?/g,gn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,dn=/\w*$/,yn=/^[-+]0x[0-9a-f]+$/i,bn=/^0b[01]+$/i,xn=/^\[object .+?Constructor\]$/,jn=/^0o[0-7]+$/i,wn=/^(?:0|[1-9]\d*)$/,mn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,An=/($^)/,kn=/['\n\r\u2028\u2029\\]/g,En="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",On="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+En,Sn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",In=RegExp("['\u2019]","g"),Rn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),zn=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Sn+En,"g"),Wn=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+",On].join("|"),"g"),Bn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Ln=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Un="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Cn={};
Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=true,Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object DataView]"]=Cn["[object Date]"]=Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object WeakMap]"]=false;
var Dn={};Dn["[object Arguments]"]=Dn["[object Array]"]=Dn["[object ArrayBuffer]"]=Dn["[object DataView]"]=Dn["[object Boolean]"]=Dn["[object Date]"]=Dn["[object Float32Array]"]=Dn["[object Float64Array]"]=Dn["[object Int8Array]"]=Dn["[object Int16Array]"]=Dn["[object Int32Array]"]=Dn["[object Map]"]=Dn["[object Number]"]=Dn["[object Object]"]=Dn["[object RegExp]"]=Dn["[object Set]"]=Dn["[object String]"]=Dn["[object Symbol]"]=Dn["[object Uint8Array]"]=Dn["[object Uint8ClampedArray]"]=Dn["[object Uint16Array]"]=Dn["[object Uint32Array]"]=true,
Dn["[object Error]"]=Dn["[object Function]"]=Dn["[object WeakMap]"]=false;var Mn,Tn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$n=parseFloat,Fn=parseInt,Nn=typeof global=="object"&&global&&global.Object===Object&&global,Pn=typeof self=="object"&&self&&self.Object===Object&&self,Zn=Nn||Pn||Function("return this")(),qn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vn=qn&&typeof module=="object"&&module&&!module.nodeType&&module,Kn=Vn&&Vn.exports===qn,Gn=Kn&&Nn.process;
n:{try{Mn=Gn&&Gn.binding&&Gn.binding("util");break n}catch(n){}Mn=void 0}var Hn=Mn&&Mn.isArrayBuffer,Jn=Mn&&Mn.isDate,Yn=Mn&&Mn.isMap,Qn=Mn&&Mn.isRegExp,Xn=Mn&&Mn.isSet,nt=Mn&&Mn.isTypedArray,tt=j("length"),rt=w({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I",
"\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C",
"\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i",
"\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S",
"\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe",
"\u0149":"'n","\u017f":"s"}),et=w({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),ut=w({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),it=function w(En){function On(n){if(xu(n)&&!af(n)&&!(n instanceof Mn)){if(n instanceof zn)return n;if(ci.call(n,"__wrapped__"))return Pe(n)}return new zn(n)}function Sn(){}function zn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=F}function Mn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,
this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Pn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function qn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Pn;++t<r;)this.add(n[t])}function Vn(n){
this.size=(this.__data__=new Nn(n)).size}function Gn(n,t){var r,e=af(n),u=!e&&cf(n),i=!e&&!u&&sf(n),o=!e&&!u&&!i&&gf(n),u=(e=e||u||i||o)?E(n.length,ri):[],f=u.length;for(r in n)!t&&!ci.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Re(r,f))||u.push(r);return u}function tt(n){var t=n.length;return t?n[cr(0,t-1)]:F}function ot(n,t){return Te(Mr(n),gt(t,0,n.length))}function ft(n){return Te(Mr(n))}function ct(n,t,r){(r===F||hu(n[t],r))&&(r!==F||t in n)||_t(n,t,r);
}function at(n,t,r){var e=n[t];ci.call(n,t)&&hu(e,r)&&(r!==F||t in n)||_t(n,t,r)}function lt(n,t){for(var r=n.length;r--;)if(hu(n[r][0],t))return r;return-1}function st(n,t,r,e){return oo(n,function(n,u,i){t(e,n,r(n),i)}),e}function ht(n,t){return n&&Tr(t,Lu(t),n)}function pt(n,t){return n&&Tr(t,Uu(t),n)}function _t(n,t,r){"__proto__"==t&&Ei?Ei(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function vt(n,t){for(var r=-1,e=t.length,u=Hu(e),i=null==n;++r<e;)u[r]=i?F:Wu(n,t[r]);return u;
}function gt(n,t,r){return n===n&&(r!==F&&(n=n<=r?n:r),t!==F&&(n=n>=t?n:t)),n}function dt(n,t,r,e,i,o){var f,c=1&t,a=2&t,l=4&t;if(r&&(f=i?r(n,e,i,o):r(n)),f!==F)return f;if(!bu(n))return n;if(e=af(n)){if(f=Ee(n),!c)return Mr(n,f)}else{var s=yo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(sf(n))return Wr(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Oe(n),!c)return a?Fr(n,pt(f,n)):$r(n,ht(f,n))}else{if(!Dn[s])return i?n:{};f=Se(n,s,dt,c)}}if(o||(o=new Vn),
i=o.get(n))return i;o.set(n,f);var a=l?a?ye:de:a?Uu:Lu,p=e?F:a(n);return u(p||n,function(e,u){p&&(u=e,e=n[u]),at(f,u,dt(e,t,r,u,n,o))}),f}function yt(n){var t=Lu(n);return function(r){return bt(r,n,t)}}function bt(n,t,r){var e=r.length;if(null==n)return!e;for(n=ni(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===F&&!(u in n)||!i(o))return false}return true}function xt(n,t,r){if(typeof n!="function")throw new ei("Expected a function");return jo(function(){n.apply(F,r)},t)}function jt(n,t,r,e){var u=-1,i=c,o=true,f=n.length,s=[],h=t.length;
if(!f)return s;r&&(t=l(t,S(r))),e?(i=a,o=false):200<=t.length&&(i=R,o=false,t=new qn(t));n:for(;++u<f;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(o&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function wt(n,t){var r=true;return oo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function mt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===F?o===o&&!Au(o):r(o,f)))var f=o,c=i}return c}function At(n,t){var r=[];return oo(n,function(n,e,u){
t(n,e,u)&&r.push(n)}),r}function kt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ie),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?kt(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function Et(n,t){return n&&co(n,t,Lu)}function Ot(n,t){return n&&ao(n,t,Lu)}function St(n,t){return f(t,function(t){return gu(n[t])})}function It(n,t){t=Rr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[$e(t[r++])];return r&&r==e?n:F}function Rt(n,t,r){return t=t(n),af(n)?t:s(t,r(n))}function zt(n){if(null==n)n=n===F?"[object Undefined]":"[object Null]";else if(ki&&ki in ni(n)){
var t=ci.call(n,ki),r=n[ki];try{n[ki]=F;var e=true}catch(n){}var u=si.call(n);e&&(t?n[ki]=r:delete n[ki]),n=u}else n=si.call(n);return n}function Wt(n,t){return n>t}function Bt(n,t){return null!=n&&ci.call(n,t)}function Lt(n,t){return null!=n&&t in ni(n)}function Ut(n,t,r){for(var e=r?a:c,u=n[0].length,i=n.length,o=i,f=Hu(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,S(t))),s=Mi(p.length,s),f[o]=!r&&(t||120<=u&&120<=p.length)?new qn(o&&p):F}var p=n[0],_=-1,v=f[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;
if(v?!R(v,d):!e(h,d,r)){for(o=i;--o;){var y=f[o];if(y?!R(y,d):!e(n[o],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ct(n,t,r){var e={};return Et(n,function(n,u,i){t(e,r(n),u,i)}),e}function Dt(n,t,e){return t=Rr(t,n),n=2>t.length?n:It(n,vr(t,0,-1)),t=null==n?n:n[$e(Ge(t))],null==t?F:r(t,n,e)}function Mt(n){return xu(n)&&"[object Arguments]"==zt(n)}function Tt(n){return xu(n)&&"[object ArrayBuffer]"==zt(n)}function $t(n){return xu(n)&&"[object Date]"==zt(n)}function Ft(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!xu(n)&&!xu(t))t=n!==n&&t!==t;else n:{
var i=af(n),o=af(t),f=i?"[object Array]":yo(n),c=o?"[object Array]":yo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&sf(n)){if(!sf(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Vn),t=i||gf(n)?_e(n,t,r,e,Ft,u):ve(n,t,f,r,e,Ft,u);else{if(!(1&r)&&(i=a&&ci.call(n,"__wrapped__"),f=o&&ci.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Vn),t=Ft(n,t,r,e,u);break n}if(c)t:if(u||(u=new Vn),
i=1&r,f=de(n),o=f.length,c=de(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:ci.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===F?h!==p&&!Ft(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l)}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),
u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Nt(n){return xu(n)&&"[object Map]"==yo(n)}function Pt(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=ni(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===F&&!(c in n))return false}else{if(f=new Vn,e)var s=e(a,l,c,n,t,f);if(s===F?!Ft(l,a,3,e,f):!s)return false}}return true}function Zt(n){return!(!bu(n)||li&&li in n)&&(gu(n)?_i:xn).test(Fe(n))}function qt(n){
return xu(n)&&"[object RegExp]"==zt(n)}function Vt(n){return xu(n)&&"[object Set]"==yo(n)}function Kt(n){return xu(n)&&yu(n.length)&&!!Cn[zt(n)]}function Gt(n){return typeof n=="function"?n:null==n?Nu:typeof n=="object"?af(n)?Xt(n[0],n[1]):Qt(n):Vu(n)}function Ht(n){if(!Le(n))return Ci(n);var t,r=[];for(t in ni(n))ci.call(n,t)&&"constructor"!=t&&r.push(t);return r}function Jt(n,t){return n<t}function Yt(n,t){var r=-1,e=pu(n)?Hu(n.length):[];return oo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Qt(n){
var t=me(n);return 1==t.length&&t[0][2]?Ue(t[0][0],t[0][1]):function(r){return r===n||Pt(r,n,t)}}function Xt(n,t){return We(n)&&t===t&&!bu(t)?Ue($e(n),t):function(r){var e=Wu(r,n);return e===F&&e===t?Bu(r,n):Ft(t,e,3)}}function nr(n,t,r,e,u){n!==t&&co(t,function(i,o){if(bu(i)){u||(u=new Vn);var f=u,c=n[o],a=t[o],l=f.get(a);if(l)ct(n,o,l);else{var l=e?e(c,a,o+"",n,t,f):F,s=l===F;if(s){var h=af(a),p=!h&&sf(a),_=!h&&!p&&gf(a),l=a;h||p||_?af(c)?l=c:_u(c)?l=Mr(c):p?(s=false,l=Wr(a,true)):_?(s=false,l=Lr(a,true)):l=[]:wu(a)||cf(a)?(l=c,
cf(c)?l=Ru(c):(!bu(c)||r&&gu(c))&&(l=Oe(a))):s=false}s&&(f.set(a,l),nr(l,a,r,e,f),f.delete(a)),ct(n,o,l)}}else f=e?e(n[o],i,o+"",n,t,u):F,f===F&&(f=i),ct(n,o,f)},Uu)}function tr(n,t){var r=n.length;if(r)return t+=0>t?r:0,Re(t,r)?n[t]:F}function rr(n,t,r){var e=-1;return t=l(t.length?t:[Nu],S(je())),n=Yt(n,function(n){return{a:l(t,function(t){return t(n)}),b:++e,c:n}}),A(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Ur(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);
break n}}e=n.b-t.b}return e})}function er(n,t){return ur(n,t,function(t,r){return Bu(n,r)})}function ur(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=It(n,o);r(f,o)&&pr(i,Rr(o,n),f)}return i}function ir(n){return function(t){return It(t,n)}}function or(n,t,r,e){var u=e?y:d,i=-1,o=t.length,f=n;for(n===t&&(t=Mr(t)),r&&(f=l(n,S(r)));++i<o;)for(var c=0,a=t[i],a=r?r(a):a;-1<(c=u(f,a,c,e));)f!==n&&wi.call(f,c,1),wi.call(n,c,1);return n}function fr(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];
if(r==e||u!==i){var i=u;Re(u)?wi.call(n,u,1):mr(n,u)}}}function cr(n,t){return n+zi(Fi()*(t-n+1))}function ar(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=zi(t/2))&&(n+=n);while(t);return r}function lr(n,t){return wo(Ce(n,t,Nu),n+"")}function sr(n){return tt(Du(n))}function hr(n,t){var r=Du(n);return Te(r,gt(t,0,r.length))}function pr(n,t,r,e){if(!bu(n))return n;t=Rr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=$e(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):F;
a===F&&(a=bu(l)?l:Re(t[u+1])?[]:{})}at(f,c,a),f=f[c]}return n}function _r(n){return Te(Du(n))}function vr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Hu(u);++e<u;)r[e]=n[e+t];return r}function gr(n,t){var r;return oo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function dr(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!Au(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return yr(n,t,Nu,r);
}function yr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=Au(t),a=t===F;u<i;){var l=zi((u+i)/2),s=r(n[l]),h=s!==F,p=null===s,_=s===s,v=Au(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Mi(i,4294967294)}function br(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!hu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function xr(n){return typeof n=="number"?n:Au(n)?P:+n}function jr(n){if(typeof n=="string")return n;
if(af(n))return l(n,jr)+"";if(Au(n))return uo?uo.call(n):"";var t=n+"";return"0"==t&&1/n==-N?"-0":t}function wr(n,t,r){var e=-1,u=c,i=n.length,o=true,f=[],l=f;if(r)o=false,u=a;else if(200<=i){if(u=t?null:po(n))return D(u);o=false,u=R,l=new qn}else l=t?[]:f;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(o&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),f.push(s)}else u(l,h,r)||(l!==f&&l.push(h),f.push(s))}return f}function mr(n,t){return t=Rr(t,n),n=2>t.length?n:It(n,vr(t,0,-1)),
null==n||delete n[$e(Ge(t))]}function Ar(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?vr(n,e?0:i,e?i+1:u):vr(n,e?i+1:0,e?u:i)}function kr(n,t){var r=n;return r instanceof Mn&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function Er(n,t,r){var e=n.length;if(2>e)return e?wr(n[0]):[];for(var u=-1,i=Hu(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=jt(i[u]||o,n[f],t,r));return wr(kt(i,1),t,r)}function Or(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:F);
return o}function Sr(n){return _u(n)?n:[]}function Ir(n){return typeof n=="function"?n:Nu}function Rr(n,t){return af(n)?n:We(n,t)?[n]:mo(zu(n))}function zr(n,t,r){var e=n.length;return r=r===F?e:r,!t&&r>=e?n:vr(n,t,r)}function Wr(n,t){if(t)return n.slice();var r=n.length,r=yi?yi(r):new n.constructor(r);return n.copy(r),r}function Br(n){var t=new n.constructor(n.byteLength);return new di(t).set(new di(n)),t}function Lr(n,t){return new n.constructor(t?Br(n.buffer):n.buffer,n.byteOffset,n.length)}function Ur(n,t){
if(n!==t){var r=n!==F,e=null===n,u=n===n,i=Au(n),o=t!==F,f=null===t,c=t===t,a=Au(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Cr(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Di(i-o,0),l=Hu(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Dr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Di(i-f,0),s=Hu(l+a);
for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Mr(n,t){var r=-1,e=n.length;for(t||(t=Hu(e));++r<e;)t[r]=n[r];return t}function Tr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):F;c===F&&(c=n[f]),u?_t(r,f,c):at(r,f,c)}return r}function $r(n,t){return Tr(n,vo(n),t)}function Fr(n,t){return Tr(n,go(n),t)}function Nr(n,t){return function(r,u){var i=af(r)?e:st,o=t?t():{};return i(r,n,je(u,2),o);
}}function Pr(n){return lr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:F,o=2<u?r[2]:F,i=3<n.length&&typeof i=="function"?(u--,i):F;for(o&&ze(r[0],r[1],o)&&(i=3>u?F:i,u=1),t=ni(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Zr(n,t){return function(r,e){if(null==r)return r;if(!pu(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=ni(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function qr(n){return function(t,r,e){var u=-1,i=ni(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
}return t}}function Vr(n,t,r){function e(){return(this&&this!==Zn&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Hr(n);return e}function Kr(n){return function(t){t=zu(t);var r=Bn.test(t)?$(t):F,e=r?r[0]:t.charAt(0);return t=r?zr(r,1).join(""):t.slice(1),e[n]()+t}}function Gr(n){return function(t){return h($u(Tu(t).replace(In,"")),n,"")}}function Hr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=io(n.prototype),t=n.apply(r,t);return bu(t)?t:r}}function Jr(n,t,e){function u(){for(var o=arguments.length,f=Hu(o),c=o,a=xe(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:C(f,a),o-=c.length,o<e?fe(n,t,Xr,u.placeholder,F,f,c,F,F,e-o):r(this&&this!==Zn&&this instanceof u?i:n,this,f);
}var i=Hr(n);return u}function Yr(n){return function(t,r,e){var u=ni(t);if(!pu(t)){var i=je(r,3);t=Lu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:F}}function Qr(n){return ge(function(t){var r=t.length,e=r,u=zn.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ei("Expected a function");if(u&&!o&&"wrapper"==be(i))var o=new zn([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=be(i),f="wrapper"==u?_o(i):F,o=f&&Be(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[be(f[0])].apply(o,f[3]):1==i.length&&Be(i)?o[u]():o.thru(i);
return function(){var n=arguments,e=n[0];if(o&&1==n.length&&af(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Xr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Hu(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=xe(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Cr(y,e,u,_)),i&&(y=Dr(y,i,o,_)),d-=x,_&&d<a)return j=C(y,j),fe(n,t,Xr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Mi(f.length,x),m=Mr(y);w--;){
var A=f[w];y[w]=Re(A,x)?m[A]:F}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Zn&&this instanceof l&&(b=g||Hr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?F:Hr(n);return l}function ne(n,t){return function(r,e){return Ct(r,n,t(e))}}function te(n,t){return function(r,e){var u;if(r===F&&e===F)return t;if(r!==F&&(u=r),e!==F){if(u===F)return e;typeof r=="string"||typeof e=="string"?(r=jr(r),e=jr(e)):(r=xr(r),e=xr(e)),u=n(r,e)}return u}}function re(n){return ge(function(t){
return t=l(t,S(je())),lr(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ee(n,t){t=t===F?" ":jr(t);var r=t.length;return 2>r?r?ar(t,n):t:(r=ar(t,Ri(n/T(t))),Bn.test(t)?zr($(r),0,n).join(""):r.slice(0,n))}function ue(n,t,e,u){function i(){for(var t=-1,c=arguments.length,a=-1,l=u.length,s=Hu(l+c),h=this&&this!==Zn&&this instanceof i?f:n;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++t];return r(h,o?e:this,s)}var o=1&t,f=Hr(n);return i}function ie(n){return function(t,r,e){
e&&typeof e!="number"&&ze(t,r,e)&&(r=e=F),t=Eu(t),r===F?(r=t,t=0):r=Eu(r),e=e===F?t<r?1:-1:Eu(e);var u=-1;r=Di(Ri((r-t)/(e||1)),0);for(var i=Hu(r);r--;)i[n?r:++u]=t,t+=e;return i}}function oe(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Iu(t),r=Iu(r)),n(t,r)}}function fe(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:F;o=l?F:o;var h=l?i:F;return i=l?F:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(F,u),Be(n)&&xo(r,u),r.placeholder=e,De(r,n,t)}function ce(n){
var t=Xu[n];return function(n,r){if(n=Iu(n),r=null==r?0:Mi(Ou(r),292)){var e=(zu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(zu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function ae(n){return function(t){var r=yo(t);return"[object Map]"==r?L(t):"[object Set]"==r?M(t):O(t,n(t))}}function le(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ei("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=F),o=o===F?o:Di(Ou(o),0),f=f===F?f:Ou(f),a-=u?u.length:0,64&t){
var l=e,s=u;e=u=F}var h=c?F:_o(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Cr(e,r,h[4]):r,i[4]=e?C(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Dr(e,r,h[6]):r,i[6]=e?C(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Mi(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===F?c?0:n.length:Di(i[9]-a,0),!f&&24&t&&(t&=-25),De((h?lo:xo)(t&&1!=t?8==t||16==t?Jr(n,t,f):32!=t&&33!=t||u.length?Xr.apply(F,i):ue(n,t,r,e):Vr(n,t,r),i),n,t)}function se(n,t,r,e){return n===F||hu(n,ii[r])&&!ci.call(e,r)?t:n}function he(n,t,r,e,u,i){return bu(n)&&bu(t)&&(i.set(t,n),nr(n,t,F,he,i),i.delete(t)),n}function pe(n){return wu(n)?F:n}function _e(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;var c=-1,a=true,l=2&r?new qn:F;
for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],h=t[c];if(e)var p=o?e(h,s,c,t,n,i):e(s,h,c,n,t,i);if(p!==F){if(p)continue;a=false;break}if(l){if(!_(t,function(n,t){if(!R(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==h&&!u(s,h,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function ve(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!i(new di(n),new di(t)))break;
return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return hu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=L;case"[object Set]":if(f||(f=D),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=_e(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(eo)return eo.call(n)==eo.call(t)}return false}function ge(n){return wo(Ce(n,F,Ve),n+"")}function de(n){
return Rt(n,Lu,vo)}function ye(n){return Rt(n,Uu,go)}function be(n){for(var t=n.name+"",r=Ji[t],e=ci.call(Ji,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function xe(n){return(ci.call(On,"placeholder")?On:n).placeholder}function je(){var n=On.iteratee||Pu,n=n===Pu?Gt:n;return arguments.length?n(arguments[0],arguments[1]):n}function we(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
}function me(n){for(var t=Lu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!bu(u)]}return t}function Ae(n,t){var r=null==n?F:n[t];return Zt(r)?r:F}function ke(n,t,r){t=Rr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=$e(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&yu(u)&&Re(o,u)&&(af(n)||cf(n)))}function Ee(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&ci.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Oe(n){
return typeof n.constructor!="function"||Le(n)?{}:io(bi(n))}function Se(r,e,u,i){var o=r.constructor;switch(e){case"[object ArrayBuffer]":return Br(r);case"[object Boolean]":case"[object Date]":return new o(+r);case"[object DataView]":return e=i?Br(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return Lr(r,i);case"[object Map]":return e=i?u(L(r),1):L(r),h(e,n,new r.constructor);case"[object Number]":case"[object String]":return new o(r);case"[object RegExp]":return e=new r.constructor(r.source,dn.exec(r)),e.lastIndex=r.lastIndex,e;case"[object Set]":return e=i?u(D(r),1):D(r),h(e,t,new r.constructor);case"[object Symbol]":return eo?ni(eo.call(r)):{}}}function Ie(n){return af(n)||cf(n)||!!(mi&&n&&n[mi])}function Re(n,t){return t=null==t?9007199254740991:t,
!!t&&(typeof n=="number"||wn.test(n))&&-1<n&&0==n%1&&n<t}function ze(n,t,r){if(!bu(r))return false;var e=typeof t;return!!("number"==e?pu(r)&&Re(t,r.length):"string"==e&&t in r)&&hu(r[t],n)}function We(n,t){if(af(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Au(n))||(rn.test(n)||!tn.test(n)||null!=t&&n in ni(t))}function Be(n){var t=be(n),r=On[t];return typeof r=="function"&&t in Mn.prototype&&(n===r||(t=_o(r),!!t&&n===t[0]))}function Le(n){var t=n&&n.constructor;
return n===(typeof t=="function"&&t.prototype||ii)}function Ue(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==F||n in ni(r)))}}function Ce(n,t,e){return t=Di(t===F?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Di(u.length-t,0),f=Hu(o);++i<o;)f[i]=u[t+i];for(i=-1,o=Hu(t+1);++i<t;)o[i]=u[i];return o[t]=e(f),r(n,this,o)}}function De(n,t,r){var e=t+"";t=wo;var u,i=Ne;return u=(u=e.match(hn))?u[1].split(pn):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),
e=e.replace(sn,"{\n/* [wrapped with "+r+"] */\n")),t(n,e)}function Me(n){var t=0,r=0;return function(){var e=Ti(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(F,arguments)}}function Te(n,t){var r=-1,e=n.length,u=e-1;for(t=t===F?e:t;++r<t;){var e=cr(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function $e(n){if(typeof n=="string"||Au(n))return n;var t=n+"";return"0"==t&&1/n==-N?"-0":t}function Fe(n){if(null!=n){try{return fi.call(n)}catch(n){}return n+""}return"";
}function Ne(n,t){return u(Z,function(r){var e="_."+r[0];t&r[1]&&!c(n,e)&&n.push(e)}),n.sort()}function Pe(n){if(n instanceof Mn)return n.clone();var t=new zn(n.__wrapped__,n.__chain__);return t.__actions__=Mr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ze(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Ou(r),0>r&&(r=Di(e+r,0)),g(n,je(t,3),r)):-1}function qe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==F&&(u=Ou(r),u=0>r?Di(e+u,0):Mi(u,e-1)),
g(n,je(t,3),u,true)}function Ve(n){return(null==n?0:n.length)?kt(n,1):[]}function Ke(n){return n&&n.length?n[0]:F}function Ge(n){var t=null==n?0:n.length;return t?n[t-1]:F}function He(n,t){return n&&n.length&&t&&t.length?or(n,t):n}function Je(n){return null==n?n:Ni.call(n)}function Ye(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(_u(n))return t=Di(n.length,t),true}),E(t,function(t){return l(n,j(t))})}function Qe(n,t){if(!n||!n.length)return[];var e=Ye(n);return null==t?e:l(e,function(n){
return r(t,F,n)})}function Xe(n){return n=On(n),n.__chain__=true,n}function nu(n,t){return t(n)}function tu(){return this}function ru(n,t){return(af(n)?u:oo)(n,je(t,3))}function eu(n,t){return(af(n)?i:fo)(n,je(t,3))}function uu(n,t){return(af(n)?l:Yt)(n,je(t,3))}function iu(n,t,r){return t=r?F:t,t=n&&null==t?n.length:t,le(n,128,F,F,F,F,t)}function ou(n,t){var r;if(typeof t!="function")throw new ei("Expected a function");return n=Ou(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=F),
r}}function fu(n,t,r){return t=r?F:t,n=le(n,8,F,F,F,F,F,t),n.placeholder=fu.placeholder,n}function cu(n,t,r){return t=r?F:t,n=le(n,16,F,F,F,F,F,t),n.placeholder=cu.placeholder,n}function au(n,t,r){function e(t){var r=c,e=a;return c=a=F,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===F||r>=t||0>r||g&&n>=l}function i(){var n=Jo();if(u(n))return o(n);var r,e=jo;r=n-_,n=t-(n-p),r=g?Mi(n,l-r):n,h=e(i,r)}function o(n){return h=F,d&&c?e(n):(c=a=F,s)}function f(){var n=Jo(),r=u(n);if(c=arguments,
a=this,p=n,r){if(h===F)return _=n=p,h=jo(i,t),v?e(n):s;if(g)return h=jo(i,t),e(p)}return h===F&&(h=jo(i,t)),s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ei("Expected a function");return t=Iu(t)||0,bu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Di(Iu(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==F&&ho(h),_=0,c=p=a=h=F},f.flush=function(){return h===F?s:o(Jo())},f}function lu(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ei("Expected a function");return r.cache=new(lu.Cache||Pn),r}function su(n){if(typeof n!="function")throw new ei("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function hu(n,t){return n===t||n!==n&&t!==t}function pu(n){return null!=n&&yu(n.length)&&!gu(n);
}function _u(n){return xu(n)&&pu(n)}function vu(n){if(!xu(n))return false;var t=zt(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!wu(n)}function gu(n){return!!bu(n)&&(n=zt(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function du(n){return typeof n=="number"&&n==Ou(n)}function yu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function bu(n){var t=typeof n;return null!=n&&("object"==t||"function"==t);
}function xu(n){return null!=n&&typeof n=="object"}function ju(n){return typeof n=="number"||xu(n)&&"[object Number]"==zt(n)}function wu(n){return!(!xu(n)||"[object Object]"!=zt(n))&&(n=bi(n),null===n||(n=ci.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&fi.call(n)==hi))}function mu(n){return typeof n=="string"||!af(n)&&xu(n)&&"[object String]"==zt(n)}function Au(n){return typeof n=="symbol"||xu(n)&&"[object Symbol]"==zt(n)}function ku(n){if(!n)return[];if(pu(n))return mu(n)?$(n):Mr(n);
if(Ai&&n[Ai]){n=n[Ai]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=yo(n),("[object Map]"==t?L:"[object Set]"==t?D:Du)(n)}function Eu(n){return n?(n=Iu(n),n===N||n===-N?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Ou(n){n=Eu(n);var t=n%1;return n===n?t?n-t:n:0}function Su(n){return n?gt(Ou(n),0,4294967295):0}function Iu(n){if(typeof n=="number")return n;if(Au(n))return P;if(bu(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=bu(n)?n+"":n),typeof n!="string")return 0===n?n:+n;
n=n.replace(cn,"");var t=bn.test(n);return t||jn.test(n)?Fn(n.slice(2),t?2:8):yn.test(n)?P:+n}function Ru(n){return Tr(n,Uu(n))}function zu(n){return null==n?"":jr(n)}function Wu(n,t,r){return n=null==n?F:It(n,t),n===F?r:n}function Bu(n,t){return null!=n&&ke(n,t,Lt)}function Lu(n){return pu(n)?Gn(n):Ht(n)}function Uu(n){if(pu(n))n=Gn(n,true);else if(bu(n)){var t,r=Le(n),e=[];for(t in n)("constructor"!=t||!r&&ci.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in ni(n))t.push(r);n=t}return n}function Cu(n,t){
if(null==n)return{};var r=l(ye(n),function(n){return[n]});return t=je(t),ur(n,r,function(n,r){return t(n,r[0])})}function Du(n){return null==n?[]:I(n,Lu(n))}function Mu(n){return Nf(zu(n).toLowerCase())}function Tu(n){return(n=zu(n))&&n.replace(mn,rt).replace(Rn,"")}function $u(n,t,r){return n=zu(n),t=r?F:t,t===F?Ln.test(n)?n.match(Wn)||[]:n.match(_n)||[]:n.match(t)||[]}function Fu(n){return function(){return n}}function Nu(n){return n}function Pu(n){return Gt(typeof n=="function"?n:dt(n,1))}function Zu(n,t,r){
var e=Lu(t),i=St(t,e);null!=r||bu(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=St(t,Lu(t)));var o=!(bu(r)&&"chain"in r&&!r.chain),f=gu(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Mr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function qu(){}function Vu(n){return We(n)?j($e(n)):ir(n)}function Ku(){return[]}function Gu(){
return false}En=null==En?Zn:it.defaults(Zn.Object(),En,it.pick(Zn,Un));var Hu=En.Array,Ju=En.Date,Yu=En.Error,Qu=En.Function,Xu=En.Math,ni=En.Object,ti=En.RegExp,ri=En.String,ei=En.TypeError,ui=Hu.prototype,ii=ni.prototype,oi=En["__core-js_shared__"],fi=Qu.prototype.toString,ci=ii.hasOwnProperty,ai=0,li=function(){var n=/[^.]+$/.exec(oi&&oi.keys&&oi.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),si=ii.toString,hi=fi.call(ni),pi=Zn._,_i=ti("^"+fi.call(ci).replace(on,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vi=Kn?En.Buffer:F,gi=En.Symbol,di=En.Uint8Array,yi=vi?vi.f:F,bi=U(ni.getPrototypeOf,ni),xi=ni.create,ji=ii.propertyIsEnumerable,wi=ui.splice,mi=gi?gi.isConcatSpreadable:F,Ai=gi?gi.iterator:F,ki=gi?gi.toStringTag:F,Ei=function(){
try{var n=Ae(ni,"defineProperty");return n({},"",{}),n}catch(n){}}(),Oi=En.clearTimeout!==Zn.clearTimeout&&En.clearTimeout,Si=Ju&&Ju.now!==Zn.Date.now&&Ju.now,Ii=En.setTimeout!==Zn.setTimeout&&En.setTimeout,Ri=Xu.ceil,zi=Xu.floor,Wi=ni.getOwnPropertySymbols,Bi=vi?vi.isBuffer:F,Li=En.isFinite,Ui=ui.join,Ci=U(ni.keys,ni),Di=Xu.max,Mi=Xu.min,Ti=Ju.now,$i=En.parseInt,Fi=Xu.random,Ni=ui.reverse,Pi=Ae(En,"DataView"),Zi=Ae(En,"Map"),qi=Ae(En,"Promise"),Vi=Ae(En,"Set"),Ki=Ae(En,"WeakMap"),Gi=Ae(ni,"create"),Hi=Ki&&new Ki,Ji={},Yi=Fe(Pi),Qi=Fe(Zi),Xi=Fe(qi),no=Fe(Vi),to=Fe(Ki),ro=gi?gi.prototype:F,eo=ro?ro.valueOf:F,uo=ro?ro.toString:F,io=function(){
function n(){}return function(t){return bu(t)?xi?xi(t):(n.prototype=t,t=new n,n.prototype=F,t):{}}}();On.templateSettings={escape:Q,evaluate:X,interpolate:nn,variable:"",imports:{_:On}},On.prototype=Sn.prototype,On.prototype.constructor=On,zn.prototype=io(Sn.prototype),zn.prototype.constructor=zn,Mn.prototype=io(Sn.prototype),Mn.prototype.constructor=Mn,Tn.prototype.clear=function(){this.__data__=Gi?Gi(null):{},this.size=0},Tn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
this.size-=n?1:0,n},Tn.prototype.get=function(n){var t=this.__data__;return Gi?(n=t[n],"__lodash_hash_undefined__"===n?F:n):ci.call(t,n)?t[n]:F},Tn.prototype.has=function(n){var t=this.__data__;return Gi?t[n]!==F:ci.call(t,n)},Tn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Gi&&t===F?"__lodash_hash_undefined__":t,this},Nn.prototype.clear=function(){this.__data__=[],this.size=0},Nn.prototype.delete=function(n){var t=this.__data__;return n=lt(t,n),!(0>n)&&(n==t.length-1?t.pop():wi.call(t,n,1),
--this.size,true)},Nn.prototype.get=function(n){var t=this.__data__;return n=lt(t,n),0>n?F:t[n][1]},Nn.prototype.has=function(n){return-1<lt(this.__data__,n)},Nn.prototype.set=function(n,t){var r=this.__data__,e=lt(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Pn.prototype.clear=function(){this.size=0,this.__data__={hash:new Tn,map:new(Zi||Nn),string:new Tn}},Pn.prototype.delete=function(n){return n=we(this,n).delete(n),this.size-=n?1:0,n},Pn.prototype.get=function(n){return we(this,n).get(n);
},Pn.prototype.has=function(n){return we(this,n).has(n)},Pn.prototype.set=function(n,t){var r=we(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},qn.prototype.add=qn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},qn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.clear=function(){this.__data__=new Nn,this.size=0},Vn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Vn.prototype.get=function(n){
return this.__data__.get(n)},Vn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Nn){var e=r.__data__;if(!Zi||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Pn(e)}return r.set(n,t),this.size=r.size,this};var oo=Zr(Et),fo=Zr(Ot,true),co=qr(),ao=qr(true),lo=Hi?function(n,t){return Hi.set(n,t),n}:Nu,so=Ei?function(n,t){return Ei(n,"toString",{configurable:true,enumerable:false,value:Fu(t),writable:true})}:Nu,ho=Oi||function(n){
return Zn.clearTimeout(n)},po=Vi&&1/D(new Vi([,-0]))[1]==N?function(n){return new Vi(n)}:qu,_o=Hi?function(n){return Hi.get(n)}:qu,vo=Wi?function(n){return null==n?[]:(n=ni(n),f(Wi(n),function(t){return ji.call(n,t)}))}:Ku,go=Wi?function(n){for(var t=[];n;)s(t,vo(n)),n=bi(n);return t}:Ku,yo=zt;(Pi&&"[object DataView]"!=yo(new Pi(new ArrayBuffer(1)))||Zi&&"[object Map]"!=yo(new Zi)||qi&&"[object Promise]"!=yo(qi.resolve())||Vi&&"[object Set]"!=yo(new Vi)||Ki&&"[object WeakMap]"!=yo(new Ki))&&(yo=function(n){
var t=zt(n);if(n=(n="[object Object]"==t?n.constructor:F)?Fe(n):"")switch(n){case Yi:return"[object DataView]";case Qi:return"[object Map]";case Xi:return"[object Promise]";case no:return"[object Set]";case to:return"[object WeakMap]"}return t});var bo=oi?gu:Gu,xo=Me(lo),jo=Ii||function(n,t){return Zn.setTimeout(n,t)},wo=Me(so),mo=function(n){n=lu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return en.test(n)&&t.push(""),n.replace(un,function(n,r,e,u){
t.push(e?u.replace(vn,"$1"):r||n)}),t}),Ao=lr(function(n,t){return _u(n)?jt(n,kt(t,1,_u,true)):[]}),ko=lr(function(n,t){var r=Ge(t);return _u(r)&&(r=F),_u(n)?jt(n,kt(t,1,_u,true),je(r,2)):[]}),Eo=lr(function(n,t){var r=Ge(t);return _u(r)&&(r=F),_u(n)?jt(n,kt(t,1,_u,true),F,r):[]}),Oo=lr(function(n){var t=l(n,Sr);return t.length&&t[0]===n[0]?Ut(t):[]}),So=lr(function(n){var t=Ge(n),r=l(n,Sr);return t===Ge(r)?t=F:r.pop(),r.length&&r[0]===n[0]?Ut(r,je(t,2)):[]}),Io=lr(function(n){var t=Ge(n),r=l(n,Sr);return(t=typeof t=="function"?t:F)&&r.pop(),
r.length&&r[0]===n[0]?Ut(r,F,t):[]}),Ro=lr(He),zo=ge(function(n,t){var r=null==n?0:n.length,e=vt(n,t);return fr(n,l(t,function(n){return Re(n,r)?+n:n}).sort(Ur)),e}),Wo=lr(function(n){return wr(kt(n,1,_u,true))}),Bo=lr(function(n){var t=Ge(n);return _u(t)&&(t=F),wr(kt(n,1,_u,true),je(t,2))}),Lo=lr(function(n){var t=Ge(n),t=typeof t=="function"?t:F;return wr(kt(n,1,_u,true),F,t)}),Uo=lr(function(n,t){return _u(n)?jt(n,t):[]}),Co=lr(function(n){return Er(f(n,_u))}),Do=lr(function(n){var t=Ge(n);return _u(t)&&(t=F),
Er(f(n,_u),je(t,2))}),Mo=lr(function(n){var t=Ge(n),t=typeof t=="function"?t:F;return Er(f(n,_u),F,t)}),To=lr(Ye),$o=lr(function(n){var t=n.length,t=1<t?n[t-1]:F,t=typeof t=="function"?(n.pop(),t):F;return Qe(n,t)}),Fo=ge(function(n){function t(t){return vt(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Mn&&Re(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:nu,args:[t],thisArg:F}),new zn(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(F),
n})):this.thru(t)}),No=Nr(function(n,t,r){ci.call(n,r)?++n[r]:_t(n,r,1)}),Po=Yr(Ze),Zo=Yr(qe),qo=Nr(function(n,t,r){ci.call(n,r)?n[r].push(t):_t(n,r,[t])}),Vo=lr(function(n,t,e){var u=-1,i=typeof t=="function",o=pu(n)?Hu(n.length):[];return oo(n,function(n){o[++u]=i?r(t,n,e):Dt(n,t,e)}),o}),Ko=Nr(function(n,t,r){_t(n,r,t)}),Go=Nr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ho=lr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&ze(n,t[0],t[1])?t=[]:2<r&&ze(t[0],t[1],t[2])&&(t=[t[0]]),
rr(n,kt(t,1),[])}),Jo=Si||function(){return Zn.Date.now()},Yo=lr(function(n,t,r){var e=1;if(r.length)var u=C(r,xe(Yo)),e=32|e;return le(n,e,t,r,u)}),Qo=lr(function(n,t,r){var e=3;if(r.length)var u=C(r,xe(Qo)),e=32|e;return le(t,e,n,r,u)}),Xo=lr(function(n,t){return xt(n,1,t)}),nf=lr(function(n,t,r){return xt(n,Iu(t)||0,r)});lu.Cache=Pn;var tf=lr(function(n,t){t=1==t.length&&af(t[0])?l(t[0],S(je())):l(kt(t,1),S(je()));var e=t.length;return lr(function(u){for(var i=-1,o=Mi(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);
return r(n,this,u)})}),rf=lr(function(n,t){return le(n,32,F,t,C(t,xe(rf)))}),ef=lr(function(n,t){return le(n,64,F,t,C(t,xe(ef)))}),uf=ge(function(n,t){return le(n,256,F,F,F,t)}),of=oe(Wt),ff=oe(function(n,t){return n>=t}),cf=Mt(function(){return arguments}())?Mt:function(n){return xu(n)&&ci.call(n,"callee")&&!ji.call(n,"callee")},af=Hu.isArray,lf=Hn?S(Hn):Tt,sf=Bi||Gu,hf=Jn?S(Jn):$t,pf=Yn?S(Yn):Nt,_f=Qn?S(Qn):qt,vf=Xn?S(Xn):Vt,gf=nt?S(nt):Kt,df=oe(Jt),yf=oe(function(n,t){return n<=t}),bf=Pr(function(n,t){
if(Le(t)||pu(t))Tr(t,Lu(t),n);else for(var r in t)ci.call(t,r)&&at(n,r,t[r])}),xf=Pr(function(n,t){Tr(t,Uu(t),n)}),jf=Pr(function(n,t,r,e){Tr(t,Uu(t),n,e)}),wf=Pr(function(n,t,r,e){Tr(t,Lu(t),n,e)}),mf=ge(vt),Af=lr(function(n){return n.push(F,se),r(jf,F,n)}),kf=lr(function(n){return n.push(F,he),r(Rf,F,n)}),Ef=ne(function(n,t,r){n[t]=r},Fu(Nu)),Of=ne(function(n,t,r){ci.call(n,t)?n[t].push(r):n[t]=[r]},je),Sf=lr(Dt),If=Pr(function(n,t,r){nr(n,t,r)}),Rf=Pr(function(n,t,r,e){nr(n,t,r,e)}),zf=ge(function(n,t){
var r={};if(null==n)return r;var e=false;t=l(t,function(t){return t=Rr(t,n),e||(e=1<t.length),t}),Tr(n,ye(n),r),e&&(r=dt(r,7,pe));for(var u=t.length;u--;)mr(r,t[u]);return r}),Wf=ge(function(n,t){return null==n?{}:er(n,t)}),Bf=ae(Lu),Lf=ae(Uu),Uf=Gr(function(n,t,r){return t=t.toLowerCase(),n+(r?Mu(t):t)}),Cf=Gr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Df=Gr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Mf=Kr("toLowerCase"),Tf=Gr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase();
}),$f=Gr(function(n,t,r){return n+(r?" ":"")+Nf(t)}),Ff=Gr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Nf=Kr("toUpperCase"),Pf=lr(function(n,t){try{return r(n,F,t)}catch(n){return vu(n)?n:new Yu(n)}}),Zf=ge(function(n,t){return u(t,function(t){t=$e(t),_t(n,t,Yo(n[t],n))}),n}),qf=Qr(),Vf=Qr(true),Kf=lr(function(n,t){return function(r){return Dt(r,n,t)}}),Gf=lr(function(n,t){return function(r){return Dt(n,r,t)}}),Hf=re(l),Jf=re(o),Yf=re(_),Qf=ie(),Xf=ie(true),nc=te(function(n,t){return n+t},0),tc=ce("ceil"),rc=te(function(n,t){
return n/t},1),ec=ce("floor"),uc=te(function(n,t){return n*t},1),ic=ce("round"),oc=te(function(n,t){return n-t},0);return On.after=function(n,t){if(typeof t!="function")throw new ei("Expected a function");return n=Ou(n),function(){if(1>--n)return t.apply(this,arguments)}},On.ary=iu,On.assign=bf,On.assignIn=xf,On.assignInWith=jf,On.assignWith=wf,On.at=mf,On.before=ou,On.bind=Yo,On.bindAll=Zf,On.bindKey=Qo,On.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return af(n)?n:[n]},
On.chain=Xe,On.chunk=function(n,t,r){if(t=(r?ze(n,t,r):t===F)?1:Di(Ou(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Hu(Ri(r/t));e<r;)i[u++]=vr(n,e,e+=t);return i},On.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},On.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Hu(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return s(af(r)?Mr(r):[r],kt(t,1))},On.cond=function(n){var t=null==n?0:n.length,e=je();return n=t?l(n,function(n){
if("function"!=typeof n[1])throw new ei("Expected a function");return[e(n[0]),n[1]]}):[],lr(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})},On.conforms=function(n){return yt(dt(n,1))},On.constant=Fu,On.countBy=No,On.create=function(n,t){var r=io(n);return null==t?r:ht(r,t)},On.curry=fu,On.curryRight=cu,On.debounce=au,On.defaults=Af,On.defaultsDeep=kf,On.defer=Xo,On.delay=nf,On.difference=Ao,On.differenceBy=ko,On.differenceWith=Eo,On.drop=function(n,t,r){var e=null==n?0:n.length;
return e?(t=r||t===F?1:Ou(t),vr(n,0>t?0:t,e)):[]},On.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Ou(t),t=e-t,vr(n,0,0>t?0:t)):[]},On.dropRightWhile=function(n,t){return n&&n.length?Ar(n,je(t,3),true,true):[]},On.dropWhile=function(n,t){return n&&n.length?Ar(n,je(t,3),true):[]},On.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&ze(n,t,r)&&(r=0,e=u),u=n.length,r=Ou(r),0>r&&(r=-r>u?0:u+r),e=e===F||e>u?u:Ou(e),0>e&&(e+=u),e=r>e?0:Su(e);r<e;)n[r++]=t;
return n},On.filter=function(n,t){return(af(n)?f:At)(n,je(t,3))},On.flatMap=function(n,t){return kt(uu(n,t),1)},On.flatMapDeep=function(n,t){return kt(uu(n,t),N)},On.flatMapDepth=function(n,t,r){return r=r===F?1:Ou(r),kt(uu(n,t),r)},On.flatten=Ve,On.flattenDeep=function(n){return(null==n?0:n.length)?kt(n,N):[]},On.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===F?1:Ou(t),kt(n,t)):[]},On.flip=function(n){return le(n,512)},On.flow=qf,On.flowRight=Vf,On.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){
var u=n[t];e[u[0]]=u[1]}return e},On.functions=function(n){return null==n?[]:St(n,Lu(n))},On.functionsIn=function(n){return null==n?[]:St(n,Uu(n))},On.groupBy=qo,On.initial=function(n){return(null==n?0:n.length)?vr(n,0,-1):[]},On.intersection=Oo,On.intersectionBy=So,On.intersectionWith=Io,On.invert=Ef,On.invertBy=Of,On.invokeMap=Vo,On.iteratee=Pu,On.keyBy=Ko,On.keys=Lu,On.keysIn=Uu,On.map=uu,On.mapKeys=function(n,t){var r={};return t=je(t,3),Et(n,function(n,e,u){_t(r,t(n,e,u),n)}),r},On.mapValues=function(n,t){
var r={};return t=je(t,3),Et(n,function(n,e,u){_t(r,e,t(n,e,u))}),r},On.matches=function(n){return Qt(dt(n,1))},On.matchesProperty=function(n,t){return Xt(n,dt(t,1))},On.memoize=lu,On.merge=If,On.mergeWith=Rf,On.method=Kf,On.methodOf=Gf,On.mixin=Zu,On.negate=su,On.nthArg=function(n){return n=Ou(n),lr(function(t){return tr(t,n)})},On.omit=zf,On.omitBy=function(n,t){return Cu(n,su(je(t)))},On.once=function(n){return ou(2,n)},On.orderBy=function(n,t,r,e){return null==n?[]:(af(t)||(t=null==t?[]:[t]),
r=e?F:r,af(r)||(r=null==r?[]:[r]),rr(n,t,r))},On.over=Hf,On.overArgs=tf,On.overEvery=Jf,On.overSome=Yf,On.partial=rf,On.partialRight=ef,On.partition=Go,On.pick=Wf,On.pickBy=Cu,On.property=Vu,On.propertyOf=function(n){return function(t){return null==n?F:It(n,t)}},On.pull=Ro,On.pullAll=He,On.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?or(n,t,je(r,2)):n},On.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?or(n,t,F,r):n},On.pullAt=zo,On.range=Qf,On.rangeRight=Xf,On.rearg=uf,On.reject=function(n,t){
return(af(n)?f:At)(n,su(je(t,3)))},On.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=je(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return fr(n,u),r},On.rest=function(n,t){if(typeof n!="function")throw new ei("Expected a function");return t=t===F?t:Ou(t),lr(n,t)},On.reverse=Je,On.sampleSize=function(n,t,r){return t=(r?ze(n,t,r):t===F)?1:Ou(t),(af(n)?ot:hr)(n,t)},On.set=function(n,t,r){return null==n?n:pr(n,t,r)},On.setWith=function(n,t,r,e){return e=typeof e=="function"?e:F,
null==n?n:pr(n,t,r,e)},On.shuffle=function(n){return(af(n)?ft:_r)(n)},On.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&ze(n,t,r)?(t=0,r=e):(t=null==t?0:Ou(t),r=r===F?e:Ou(r)),vr(n,t,r)):[]},On.sortBy=Ho,On.sortedUniq=function(n){return n&&n.length?br(n):[]},On.sortedUniqBy=function(n,t){return n&&n.length?br(n,je(t,2)):[]},On.split=function(n,t,r){return r&&typeof r!="number"&&ze(n,t,r)&&(t=r=F),r=r===F?4294967295:r>>>0,r?(n=zu(n))&&(typeof t=="string"||null!=t&&!_f(t))&&(t=jr(t),
!t&&Bn.test(n))?zr($(n),0,r):n.split(t,r):[]},On.spread=function(n,t){if(typeof n!="function")throw new ei("Expected a function");return t=null==t?0:Di(Ou(t),0),lr(function(e){var u=e[t];return e=zr(e,0,t),u&&s(e,u),r(n,this,e)})},On.tail=function(n){var t=null==n?0:n.length;return t?vr(n,1,t):[]},On.take=function(n,t,r){return n&&n.length?(t=r||t===F?1:Ou(t),vr(n,0,0>t?0:t)):[]},On.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Ou(t),t=e-t,vr(n,0>t?0:t,e)):[]},On.takeRightWhile=function(n,t){
return n&&n.length?Ar(n,je(t,3),false,true):[]},On.takeWhile=function(n,t){return n&&n.length?Ar(n,je(t,3)):[]},On.tap=function(n,t){return t(n),n},On.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ei("Expected a function");return bu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),au(n,t,{leading:e,maxWait:t,trailing:u})},On.thru=nu,On.toArray=ku,On.toPairs=Bf,On.toPairsIn=Lf,On.toPath=function(n){return af(n)?l(n,$e):Au(n)?[n]:Mr(mo(zu(n)))},On.toPlainObject=Ru,
On.transform=function(n,t,r){var e=af(n),i=e||sf(n)||gf(n);if(t=je(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:bu(n)&&gu(o)?io(bi(n)):{}}return(i?u:Et)(n,function(n,e,u){return t(r,n,e,u)}),r},On.unary=function(n){return iu(n,1)},On.union=Wo,On.unionBy=Bo,On.unionWith=Lo,On.uniq=function(n){return n&&n.length?wr(n):[]},On.uniqBy=function(n,t){return n&&n.length?wr(n,je(t,2)):[]},On.uniqWith=function(n,t){return t=typeof t=="function"?t:F,n&&n.length?wr(n,F,t):[]},On.unset=function(n,t){return null==n||mr(n,t);
},On.unzip=Ye,On.unzipWith=Qe,On.update=function(n,t,r){return null==n?n:pr(n,t,Ir(r)(It(n,t)),void 0)},On.updateWith=function(n,t,r,e){return e=typeof e=="function"?e:F,null!=n&&(n=pr(n,t,Ir(r)(It(n,t)),e)),n},On.values=Du,On.valuesIn=function(n){return null==n?[]:I(n,Uu(n))},On.without=Uo,On.words=$u,On.wrap=function(n,t){return rf(Ir(t),n)},On.xor=Co,On.xorBy=Do,On.xorWith=Mo,On.zip=To,On.zipObject=function(n,t){return Or(n||[],t||[],at)},On.zipObjectDeep=function(n,t){return Or(n||[],t||[],pr);
},On.zipWith=$o,On.entries=Bf,On.entriesIn=Lf,On.extend=xf,On.extendWith=jf,Zu(On,On),On.add=nc,On.attempt=Pf,On.camelCase=Uf,On.capitalize=Mu,On.ceil=tc,On.clamp=function(n,t,r){return r===F&&(r=t,t=F),r!==F&&(r=Iu(r),r=r===r?r:0),t!==F&&(t=Iu(t),t=t===t?t:0),gt(Iu(n),t,r)},On.clone=function(n){return dt(n,4)},On.cloneDeep=function(n){return dt(n,5)},On.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:F,dt(n,5,t)},On.cloneWith=function(n,t){return t=typeof t=="function"?t:F,dt(n,4,t)},
On.conformsTo=function(n,t){return null==t||bt(n,t,Lu(t))},On.deburr=Tu,On.defaultTo=function(n,t){return null==n||n!==n?t:n},On.divide=rc,On.endsWith=function(n,t,r){n=zu(n),t=jr(t);var e=n.length,e=r=r===F?e:gt(Ou(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},On.eq=hu,On.escape=function(n){return(n=zu(n))&&Y.test(n)?n.replace(H,et):n},On.escapeRegExp=function(n){return(n=zu(n))&&fn.test(n)?n.replace(on,"\\$&"):n},On.every=function(n,t,r){var e=af(n)?o:wt;return r&&ze(n,t,r)&&(t=F),e(n,je(t,3));
},On.find=Po,On.findIndex=Ze,On.findKey=function(n,t){return v(n,je(t,3),Et)},On.findLast=Zo,On.findLastIndex=qe,On.findLastKey=function(n,t){return v(n,je(t,3),Ot)},On.floor=ec,On.forEach=ru,On.forEachRight=eu,On.forIn=function(n,t){return null==n?n:co(n,je(t,3),Uu)},On.forInRight=function(n,t){return null==n?n:ao(n,je(t,3),Uu)},On.forOwn=function(n,t){return n&&Et(n,je(t,3))},On.forOwnRight=function(n,t){return n&&Ot(n,je(t,3))},On.get=Wu,On.gt=of,On.gte=ff,On.has=function(n,t){return null!=n&&ke(n,t,Bt);
},On.hasIn=Bu,On.head=Ke,On.identity=Nu,On.includes=function(n,t,r,e){return n=pu(n)?n:Du(n),r=r&&!e?Ou(r):0,e=n.length,0>r&&(r=Di(e+r,0)),mu(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<d(n,t,r)},On.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Ou(r),0>r&&(r=Di(e+r,0)),d(n,t,r)):-1},On.inRange=function(n,t,r){return t=Eu(t),r===F?(r=t,t=0):r=Eu(r),n=Iu(n),n>=Mi(t,r)&&n<Di(t,r)},On.invoke=Sf,On.isArguments=cf,On.isArray=af,On.isArrayBuffer=lf,On.isArrayLike=pu,On.isArrayLikeObject=_u,
On.isBoolean=function(n){return true===n||false===n||xu(n)&&"[object Boolean]"==zt(n)},On.isBuffer=sf,On.isDate=hf,On.isElement=function(n){return xu(n)&&1===n.nodeType&&!wu(n)},On.isEmpty=function(n){if(null==n)return true;if(pu(n)&&(af(n)||typeof n=="string"||typeof n.splice=="function"||sf(n)||gf(n)||cf(n)))return!n.length;var t=yo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(Le(n))return!Ht(n).length;for(var r in n)if(ci.call(n,r))return false;return true},On.isEqual=function(n,t){return Ft(n,t);
},On.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:F)?r(n,t):F;return e===F?Ft(n,t,F,r):!!e},On.isError=vu,On.isFinite=function(n){return typeof n=="number"&&Li(n)},On.isFunction=gu,On.isInteger=du,On.isLength=yu,On.isMap=pf,On.isMatch=function(n,t){return n===t||Pt(n,t,me(t))},On.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:F,Pt(n,t,me(t),r)},On.isNaN=function(n){return ju(n)&&n!=+n},On.isNative=function(n){if(bo(n))throw new Yu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
return Zt(n)},On.isNil=function(n){return null==n},On.isNull=function(n){return null===n},On.isNumber=ju,On.isObject=bu,On.isObjectLike=xu,On.isPlainObject=wu,On.isRegExp=_f,On.isSafeInteger=function(n){return du(n)&&-9007199254740991<=n&&9007199254740991>=n},On.isSet=vf,On.isString=mu,On.isSymbol=Au,On.isTypedArray=gf,On.isUndefined=function(n){return n===F},On.isWeakMap=function(n){return xu(n)&&"[object WeakMap]"==yo(n)},On.isWeakSet=function(n){return xu(n)&&"[object WeakSet]"==zt(n)},On.join=function(n,t){
return null==n?"":Ui.call(n,t)},On.kebabCase=Cf,On.last=Ge,On.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==F&&(u=Ou(r),u=0>u?Di(e+u,0):Mi(u,e-1)),t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=g(n,b,u,true);return n},On.lowerCase=Df,On.lowerFirst=Mf,On.lt=df,On.lte=yf,On.max=function(n){return n&&n.length?mt(n,Nu,Wt):F},On.maxBy=function(n,t){return n&&n.length?mt(n,je(t,2),Wt):F},On.mean=function(n){return x(n,Nu)},On.meanBy=function(n,t){return x(n,je(t,2))},On.min=function(n){
return n&&n.length?mt(n,Nu,Jt):F},On.minBy=function(n,t){return n&&n.length?mt(n,je(t,2),Jt):F},On.stubArray=Ku,On.stubFalse=Gu,On.stubObject=function(){return{}},On.stubString=function(){return""},On.stubTrue=function(){return true},On.multiply=uc,On.nth=function(n,t){return n&&n.length?tr(n,Ou(t)):F},On.noConflict=function(){return Zn._===this&&(Zn._=pi),this},On.noop=qu,On.now=Jo,On.pad=function(n,t,r){n=zu(n);var e=(t=Ou(t))?T(n):0;return!t||e>=t?n:(t=(t-e)/2,ee(zi(t),r)+n+ee(Ri(t),r))},On.padEnd=function(n,t,r){
n=zu(n);var e=(t=Ou(t))?T(n):0;return t&&e<t?n+ee(t-e,r):n},On.padStart=function(n,t,r){n=zu(n);var e=(t=Ou(t))?T(n):0;return t&&e<t?ee(t-e,r)+n:n},On.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),$i(zu(n).replace(an,""),t||0)},On.random=function(n,t,r){if(r&&typeof r!="boolean"&&ze(n,t,r)&&(t=r=F),r===F&&(typeof t=="boolean"?(r=t,t=F):typeof n=="boolean"&&(r=n,n=F)),n===F&&t===F?(n=0,t=1):(n=Eu(n),t===F?(t=n,n=0):t=Eu(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Fi(),Mi(n+r*(t-n+$n("1e-"+((r+"").length-1))),t)):cr(n,t);
},On.reduce=function(n,t,r){var e=af(n)?h:m,u=3>arguments.length;return e(n,je(t,4),r,u,oo)},On.reduceRight=function(n,t,r){var e=af(n)?p:m,u=3>arguments.length;return e(n,je(t,4),r,u,fo)},On.repeat=function(n,t,r){return t=(r?ze(n,t,r):t===F)?1:Ou(t),ar(zu(n),t)},On.replace=function(){var n=arguments,t=zu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},On.result=function(n,t,r){t=Rr(t,n);var e=-1,u=t.length;for(u||(u=1,n=F);++e<u;){var i=null==n?F:n[$e(t[e])];i===F&&(e=u,i=r),n=gu(i)?i.call(n):i;
}return n},On.round=ic,On.runInContext=w,On.sample=function(n){return(af(n)?tt:sr)(n)},On.size=function(n){if(null==n)return 0;if(pu(n))return mu(n)?T(n):n.length;var t=yo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Ht(n).length},On.snakeCase=Tf,On.some=function(n,t,r){var e=af(n)?_:gr;return r&&ze(n,t,r)&&(t=F),e(n,je(t,3))},On.sortedIndex=function(n,t){return dr(n,t)},On.sortedIndexBy=function(n,t,r){return yr(n,t,je(r,2))},On.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){
var e=dr(n,t);if(e<r&&hu(n[e],t))return e}return-1},On.sortedLastIndex=function(n,t){return dr(n,t,true)},On.sortedLastIndexBy=function(n,t,r){return yr(n,t,je(r,2),true)},On.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=dr(n,t,true)-1;if(hu(n[r],t))return r}return-1},On.startCase=$f,On.startsWith=function(n,t,r){return n=zu(n),r=null==r?0:gt(Ou(r),0,n.length),t=jr(t),n.slice(r,r+t.length)==t},On.subtract=oc,On.sum=function(n){return n&&n.length?k(n,Nu):0},On.sumBy=function(n,t){return n&&n.length?k(n,je(t,2)):0;
},On.template=function(n,t,r){var e=On.templateSettings;r&&ze(n,t,r)&&(t=F),n=zu(n),t=jf({},t,e,se),r=jf({},t.imports,e.imports,se);var u,i,o=Lu(r),f=I(r,o),c=0;r=t.interpolate||An;var a="__p+='";r=ti((t.escape||An).source+"|"+r.source+"|"+(r===nn?gn:An).source+"|"+(t.evaluate||An).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(kn,B),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),
e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(q,""):a).replace(V,"$1").replace(K,"$1;"),a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Pf(function(){return Qu(o,l+"return "+a).apply(F,f)}),t.source=a,vu(t))throw t;return t},On.times=function(n,t){if(n=Ou(n),1>n||9007199254740991<n)return[];
var r=4294967295,e=Mi(n,4294967295);for(t=je(t),n-=4294967295,e=E(e,t);++r<n;)t(r);return e},On.toFinite=Eu,On.toInteger=Ou,On.toLength=Su,On.toLower=function(n){return zu(n).toLowerCase()},On.toNumber=Iu,On.toSafeInteger=function(n){return n?gt(Ou(n),-9007199254740991,9007199254740991):0===n?n:0},On.toString=zu,On.toUpper=function(n){return zu(n).toUpperCase()},On.trim=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(cn,""):n&&(t=jr(t))?(n=$(n),r=$(t),t=z(n,r),r=W(n,r)+1,zr(n,t,r).join("")):n;
},On.trimEnd=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(ln,""):n&&(t=jr(t))?(n=$(n),t=W(n,$(t))+1,zr(n,0,t).join("")):n},On.trimStart=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(an,""):n&&(t=jr(t))?(n=$(n),t=z(n,$(t)),zr(n,t).join("")):n},On.truncate=function(n,t){var r=30,e="...";if(bu(t))var u="separator"in t?t.separator:u,r="length"in t?Ou(t.length):r,e="omission"in t?jr(t.omission):e;n=zu(n);var i=n.length;if(Bn.test(n))var o=$(n),i=o.length;if(r>=i)return n;if(i=r-T(e),1>i)return e;
if(r=o?zr(o,0,i).join(""):n.slice(0,i),u===F)return r+e;if(o&&(i+=r.length-i),_f(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=ti(u.source,zu(dn.exec(u))+"g")),u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===F?i:c)}}else n.indexOf(jr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},On.unescape=function(n){return(n=zu(n))&&J.test(n)?n.replace(G,ut):n},On.uniqueId=function(n){var t=++ai;return zu(n)+t},On.upperCase=Ff,On.upperFirst=Nf,On.each=ru,On.eachRight=eu,On.first=Ke,
Zu(On,function(){var n={};return Et(On,function(t,r){ci.call(On.prototype,r)||(n[r]=t)}),n}(),{chain:false}),On.VERSION="4.17.4",u("bind bindKey curry curryRight partial partialRight".split(" "),function(n){On[n].placeholder=On}),u(["drop","take"],function(n,t){Mn.prototype[n]=function(r){r=r===F?1:Di(Ou(r),0);var e=this.__filtered__&&!t?new Mn(this):this.clone();return e.__filtered__?e.__takeCount__=Mi(r,e.__takeCount__):e.__views__.push({size:Mi(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Mn.prototype[n+"Right"]=function(t){
return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Mn.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:je(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Mn.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Mn.prototype[n]=function(){return this.__filtered__?new Mn(this):this[r](1);
}}),Mn.prototype.compact=function(){return this.filter(Nu)},Mn.prototype.find=function(n){return this.filter(n).head()},Mn.prototype.findLast=function(n){return this.reverse().find(n)},Mn.prototype.invokeMap=lr(function(n,t){return typeof n=="function"?new Mn(this):this.map(function(r){return Dt(r,n,t)})}),Mn.prototype.reject=function(n){return this.filter(su(je(n)))},Mn.prototype.slice=function(n,t){n=Ou(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Mn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),
t!==F&&(t=Ou(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Mn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Mn.prototype.toArray=function(){return this.take(4294967295)},Et(Mn.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=On[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(On.prototype[t]=function(){function t(n){return n=u.apply(On,s([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Mn,a=f[0],l=c||af(o);
l&&r&&typeof a=="function"&&1!=a.length&&(c=l=false);var h=this.__chain__,p=!!this.__actions__.length,a=i&&!h,c=c&&!p;return!i&&l?(o=c?o:new Mn(this),o=n.apply(o,f),o.__actions__.push({func:nu,args:[t],thisArg:F}),new zn(o,h)):a&&c?n.apply(this,f):(o=this.thru(t),a?e?o.value()[0]:o.value():o)})}),u("pop push shift sort splice unshift".split(" "),function(n){var t=ui[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);On.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){
var u=this.value();return t.apply(af(u)?u:[],n)}return this[r](function(r){return t.apply(af(r)?r:[],n)})}}),Et(Mn.prototype,function(n,t){var r=On[t];if(r){var e=r.name+"";(Ji[e]||(Ji[e]=[])).push({name:t,func:r})}}),Ji[Xr(F,2).name]=[{name:"wrapper",func:F}],Mn.prototype.clone=function(){var n=new Mn(this.__wrapped__);return n.__actions__=Mr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Mr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Mr(this.__views__),
n},Mn.prototype.reverse=function(){if(this.__filtered__){var n=new Mn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Mn.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=af(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Mi(n,f+s);break;case"takeRight":f=Di(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,
o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Mi(n,this.__takeCount__),!e||!u&&i==n&&l==n)return kr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},On.prototype.at=Fo,On.prototype.chain=function(){return Xe(this)},On.prototype.commit=function(){return new zn(this.value(),this.__chain__)},On.prototype.next=function(){this.__values__===F&&(this.__values__=ku(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?F:this.__values__[this.__index__++]}},On.prototype.plant=function(n){for(var t,r=this;r instanceof Sn;){var e=Pe(r);e.__index__=0,e.__values__=F,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},On.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Mn?(this.__actions__.length&&(n=new Mn(this)),n=n.reverse(),n.__actions__.push({func:nu,args:[Je],thisArg:F}),new zn(n,this.__chain__)):this.thru(Je);
},On.prototype.toJSON=On.prototype.valueOf=On.prototype.value=function(){return kr(this.__wrapped__,this.__actions__)},On.prototype.first=On.prototype.head,Ai&&(On.prototype[Ai]=tu),On}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=it, define(function(){return it})):Vn?((Vn.exports=it)._=it,qn._=it):Zn._=it}).call(this);;angular.module('app', [ 'ngRoute', 'ngSanitize', 'ui.bootstrap',
	'Commom.Factory','security.authorization',
	'home.module','songs.module','adm.module','service.modalbox',
	'service.app','service.login','userlogged.module','plnx.module'
	]);

//security interceptor
angular.module('app').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('securityInterceptor');
}]);

// Constantes da App
angular.module('app').constant('APP_CONFIG', {
	baseUrl : '/api',	// http://rock-radios.rhcloud.com/api
//	baseUrl : 'http://localhost:8080/api',			// rbz desenv
	timeOutNotification : 3000,
	rowsPerPage : 10
});

angular.module('app').config(
		['$httpProvider',
function ($httpProvider) {
	$httpProvider.defaults.timeout = 3000;
}]);

angular.module('app').run(
				['APP_CONFIG','$rootScope','$http','$location','AppService',
function( APP_CONFIG,  $rootScope,  $http,  $location,  AppService) {
	// disponibiliza funcoes para todas as paginas
	$rootScope.regexEmail = /^[A-Za-z0-9-*_.+:();#$!-]+@[-_.+:A-Za-z0-9-]+(\.[a-zA-Z]{2,3})$/i;
	$rootScope.secIsLogged = AppService.secIsLogged;
	$rootScope.secGetUserName = AppService.secGetUserName;
	$rootScope.secHasRole = AppService.secHasRole;
	$rootScope.renderHtml = AppService.renderHtml;
	$rootScope.hasAjax = function () { return $http.pendingRequests.length > 0; };
	$rootScope.getPathMenu = AppService.getPathMenu;
	$rootScope.i18n = AppService.i18n;

	}]
);

//Adicao style para notifyjs
$.notify.addStyle("bootstrap", {
	  html: "<div>\n<span data-notify-text></span>\n</div>",
	  classes: {
	    base: {
	      "font-weight": "bold",
	      "padding": "8px 15px 8px 14px",
	      "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
	      "background-color": "#fcf8e3",
	      "border": "1px solid #fbeed5",
	      "border-radius": "4px",
	      "white-space": "nowrap",
/*	      "padding-left": "25px", */
	      "background-repeat": "no-repeat"
/*	      "background-position": "3px 7px" */
	    },
	    error: {
	      "color": "#B94A48",
	      "background-color": "#F2DEDE",
	      "border-color": "#EED3D7"
	    },
	    success: {
	      "color": "#468847",
	      "background-color": "#DFF0D8",
	      "border-color": "#D6E9C6"
	    },
	    info: {
	      "color": "#3A87AD",
	      "background-color": "#D9EDF7",
	      "border-color": "#BCE8F1"
	    },
	    warn: {
	      "color": "#C09853",
	      "background-color": "#FCF8E3",
	      "border-color": "#FBEED5"
	    }
	  }
});
;angular.module('adm.module', ['resources.shell']);

angular.module('adm.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/adm', {
		templateUrl: 'html/templates/adm/adm.tpl.html',
	  controller:'AdmCtrl',
		resolve:{
			validRole: ['secAuth', function (secAuth) { secAuth.validRole('ROLE_ADM_ROCK'); }],
		}
	  });

	$routeProvider.when('/adm/shell', {
		templateUrl: 'html/templates/adm/shell.tpl.html',
	  controller:'ShellCtrl',
		resolve:{
			validRole: ['secAuth', function (secAuth) { secAuth.validRole('ROLE_ADM_ROCK'); }],
		}
	  });

	$routeProvider.when('/adm/env', {
		templateUrl: 'html/templates/adm/env.tpl.html',
		controller:'EnvCtrl',
		resolve:{
			validRole: ['secAuth', function (secAuth) { secAuth.validRole('ROLE_ADM_ROCK'); }],
		}
	});
	
	$routeProvider.when('/adm/plnx', {
		templateUrl: 'html/templates/adm/plnx.tpl.html',
		controller:'PlnxCtrl',
		resolve:{
			validRole: ['secAuth', function (secAuth) { secAuth.validRole('ROLE_ADM_ROCK'); }],
		}
	});
	
}]);

angular.module('adm.module').controller('AdmCtrl',
		['$scope', '$location',
function ($scope,  $location) {

}]);

angular.module('adm.module').controller('PlnxCtrl',
		['$scope','$http','AdmService','AppService',
function ($scope,  $http,  AdmService,  AppService) {

	$scope.onStartPlnx = function() {
		$http({method: 'GET',url: 'api/plnxdb/start'
		}).then(function successCallback(response) {
			console.log('plnx ok, data=', response.data);
		}, function errorCallback(response) {
			console.error('plnx ERR response=',response);
		});
	};

	$scope.onStopPlnx = function() {
		$http({method: 'GET',url: 'api/plnxdb/stop'
		}).then(function successCallback(response) {
			console.log('plnx ok, data=', response.data);
		}, function errorCallback(response) {
			console.error('plnx ERR response=',response);
		});
	};

	$scope.onCsvPlnx = function() {
		$http({method: 'GET',url: 'api/plnxdb/csv'
		}).then(function successCallback(response) {
			console.log('plnx ok, data=', response.data);
		}, function errorCallback(response) {
			console.error('plnx ERR response=',response);
		});
	};

	$scope.onPushPlnx = function() {
		$http({method: 'GET',url: 'api/plnxdb/push'
		}).then(function successCallback(response) {
			console.log('plnx ok, data=', response.data);
		}, function errorCallback(response) {
			console.error('plnx ERR response=',response);
		});
	};

	// console.log('ok in PlnxCtrl');
	// const data = {id:1,msg:'teste'};
	// var htmlJson = AdmService.formatJson(data);
	// AdmService.showHtmlJson(htmlJson);

}]);

angular.module('adm.module').controller('EnvCtrl',
				['$scope','Shell','AdmService',
function ($scope,  Shell,  AdmService) {

	Shell.get(successEnv, errorEnv, false);

  function successEnv (data,status){
		console.log(data);
		var htmlJson = AdmService.formatJson(data);
		AdmService.showHtmlJson(htmlJson);
	}
	function errorEnv (data,status){
		alert('errorEnv, status='+status);
		console.log(data);
	}

}]);

angular.module('adm.module').controller('ShellCtrl',
				['$scope','$location','Shell','AdmService',
function ($scope,  $location,  Shell,  AdmService) {

	$scope.txtCmd = "\'use strict\'\n"+
		"var db = require(\'./app/db\').get();\n\n"+
		"exports.execute=function(showReturn) {\n"+
		"\tvar resp = db.get('posts').find({ id: 123 }).value();\n"+
		"\tshowReturn(null,resp); // showReturn(err,resp);\n"+
		"}";

	// $scope.txtCmd
	$scope.execs=function(){
		var shell = new Shell();
		shell.cmd=$scope.txtCmd;
		shell.$save(onCmdOk, onCmdErr);
	};
	function onCmdOk(data, status){
		console.log(data);
		var htmlJson = AdmService.formatJson(data);
		AdmService.showHtmlJson(htmlJson);
	}
	function onCmdErr(data, status){
		alert('onCmdErr, status='+status);
		console.log(data);
	}

}]);

angular.module('adm.module').factory('AdmService',
		['$http',
function ($http) {

	// The return API
	function AdmService() { }

	AdmService.showHtmlJson = function (htmlJson){
		$('.json-container').html(htmlJson);
		$('.json-container').ready(function(){
		$('.json-container').on('mouseover', 'div', function(e) {
				$(e.target).parent().css("background-color","snow");
				$(e.target).children().css("background-color","snow");
				$(e.target).css("background-color","#FFFFCC");

				$(e.target).mouseout(function(){
					$(e.target).css("background-color","snow");
				});
		});

		});
	};

	// search object items recursively and replace some chars
	// to html tags in order to prettyfy
	AdmService.formatJson = function(obj) {
	//		var obj = JSON.parse(json);
		var obj2 = objStr(obj);
		json = JSON.stringify(obj2);

		json = json.replace(/{/g,"<div class=\"item\">{");
		json = json.replace(/\[/g,"<div class=\"item\">[");
		json = json.replace(new RegExp('},', 'g'),"&#125;,</div>");
		json = json.replace(/]\,/g,"&#93;,</div>");
		json = json.replace(/}/g,"}</div>");
		json = json.replace(/\]/g,"]</div>");
		json = json.replace(/,/g,",<br>");
		json = json.replace(/\\n/g,"<br>");

		return json;
	};

	// search for string values and replace their
	// comma, brackets, etc to unicode
	function objStr(obj) {
		if (obj===null||obj===undefined){return obj;}
		if (typeof obj == 'string') {
			if (obj===null||obj===undefined){return obj;}
			var strVal = obj.replace(/,/g,"&#44;");
	//				strVal = strVal.replace(/{/g,"&#x7b;");
	//				strVal = strVal.replace(/}/g,"&#x7d;");
			strVal = strVal.replace(/\[/g,"&#x5b;");
			strVal = strVal.replace(/\]/g,"&#x5d;");
			return strVal;
		}
		if (typeof obj != 'object') {
			return obj;
		}

		if (Array.isArray(obj)) {
			var arr = [];
			obj.forEach(function(item) {
					arr.push(objStr(item));
			});
			return arr;
		} else {
				var keys = Object.keys(obj);
				var sobj = {};
				keys.forEach(function(k){
					sobj[k] = objStr(obj[k]);
				});
				return sobj;
		}
	}

	return AdmService;
}]);
;angular.module('home.module', ['resources.userlogged', 'service.modalbox',
		'resources.contact', 'service.rsa', 'resources.profile' ]);

angular.module('home.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'html/templates/home/home.tpl.html',
	    controller:'HomeCtrl',
	    resolve : {
	    	isRevalidate : function() { return false; }
	    }
	  });

	$routeProvider.when('/home/revalidate', {
		templateUrl: 'html/templates/home/home.tpl.html',
	    controller:'HomeCtrl',
	    resolve : {
	    	isRevalidate : function() { return true; }
	      }
	  });
}]);

//Pagina Home (controller tambem usado para revalidacao de login)
angular.module('home.module').controller('HomeCtrl',
		['$scope', 'isRevalidate','$location',
function ($scope,   isRevalidate,  $location) {



}]);


//NavBarCtrl - chamado diretamente no html
angular.module('home.module').controller('NavBarCtrl',
				['$scope','$rootScope','AppService','UserLogged','ModalBox','UserProfile','$location','$route','$http',
function ($scope,  $rootScope,  AppService,  UserLogged,  ModalBox,  UserProfile,  $location,  $route,  $http) {

	if (localStorage) {
		var user = AppService.secGetUser();
		if (user) {
			var sid = user.uuid;
			if (sid) {
				$http.defaults.headers.common['X-Auth-Token'] = sid;
			}
		}
	}
	$http.defaults.headers.common['X-CSRF-Token'] = AppService.getConfiguration().language;

	// Manuseio de historico, tratamento de back, ffw, etc
	// chama pagina home ("/") porem passando parametro AppService.path
	$scope.onMenu = function(path) {
		$location.path(path.substring(1));
	};

	$scope.onLogin = function() {

		var onLoginOk = function (user) {
	    	if (user.passRec) {
	    		ModalBox.notify('Foi enviado um email de recuperação<br />' +
		    			'para o endereço informado. Verifique.','Recuperação de senha','sm');
	    		return;
	    	}
	    	if (!user.loginMode) {
	    		ModalBox.notify('Foi enviado um email de confirmação<br />' +
		    			'para o endereço informado. Verifique.','Cadastro efetuado','sm');
	    		return;
	    	}
		    };

		ModalBox.custom({
		      templateUrl: 'html/templates/home/modal.login.tpl.html',
		      controller: 'LoginCtrl',
		      size: null,
		      resolve : {
		    	  isRevalidate : function() { return false; },
		    	  AppService : ['AppService', function(AppService) { return AppService; }],
		    	  UserLogged : ['UserLogged', function(UserLogged) { return UserLogged; }],
		    	  ModalBox : ['ModalBox', function(ModalBox) { return ModalBox; }]
		      }
		    },onLoginOk);
	};

	$scope.onLogout = function() {
		UserProfile.queryPathVariable('/logout', onOkLogout, onErrorLogout, false);
		AppService.secLogout();
		function onOkLogout() {
			$location.path('/');
		}
		function onErrorLogout(data, status, headers, config) {
			console.log("Err logout ", data, status);
			//AppService.notify("msg.process.error", "error", {name : "logout"});
			$location.path('/');
		}
	};

	$scope.onContact = function() {
		ModalBox.custom({
		      templateUrl: 'html/templates/home/modal.contact.tpl.html',
		      controller: 'ContactCtrl',
		      size: null,
		      resolve : {
		    	  AppService : ['AppService', function(AppService) { return AppService; }],
		    	  contactItem : ['Contact', function(Contact) { return new Contact(); }]
		      }
		    },function () {
	    		ModalBox.notify('Sua mensagem foi enviada.<br />' +
		    			'Obrigado :-).',null,'sm');
			    });

	};

	$scope.onInfo = function() {
		switch($location.path()) {
	    case '/':
	    	$location.path("/info");
	        break;
	    case '/crypto':
	    	$location.path("/info/crypto");
	        break;
	    case '/decrypto':
	    	$location.path("/info/decrypto");
	        break;
	    case '/cryptook':
	    	$location.path("/info/crypto");
	        break; // browse
	    case '/browse':
	    	$location.path("/info/browse");
	    	break;
	    default:
	    	$location.path("/info");
	    	break;
		}
	};

}]);



angular.module('home.module').controller('LoginCtrl',
		['$scope','$modalInstance', 'AppService', 'UserLogged', 'ModalBox', 'RsaService', 'isRevalidate',
function ($scope,  $modalInstance,   AppService,   UserLogged,   ModalBox,   RsaService,   isRevalidate) {

	$scope.user = {name : null, password : null, password2: null, loginMode: true, id:null}; // loginMode = true  = login / false=signin

	$scope.isRevalidate = isRevalidate;

	$scope.cancel = function() {
		$modalInstance.dismiss('canceled');
	};

	$scope.onOk = function() {
		if (!$scope.user.name) {
			AppService.notify("msg.invalid.error", "error", {name: "email"}, "#inputEmail3");
			return;
		}
		if (!$scope.user.password) {
			AppService.notify("msg.invalida.error", "error", {name: "senha"}, "#inputPassword3");
			return;
		}
		if (!$scope.user.loginMode) {
			if (!$scope.user.password2) {
				AppService.notify("msg.invalida.error", "error", { name : "confirmação de senha" }, "#inputPassword4");
				return;
			}
			if ($scope.user.password != $scope.user.password2) {
				AppService.notify("msg.password.confirm.error", "error", {}, "#inputPassword4");
				return;
			}
		}
		$scope.save();
	};

	$scope.save = function(){
		if ($scope.user.loginMode) {
    		processLogin();
    	} else {
    		processSignin();
    	}
	};

	function processLogin() {
		var userLogged = new UserLogged();
		userLogged.login = $scope.user.name;
		userLogged.password = RsaService.encrypt($scope.user.password);  // crypto
//		userLogged.password = $scope.user.password;
		userLogged.loginType = 0; // email

		userLogged.$postService('login', onLoginOk, onLoginErr);
	}

	function onLoginOk(userLoggedDto, status, headers, config) {
		if (!userLoggedDto) {
			AppService.notify("msg.login.error", "error", {}, "#inputEmail3");
			return;
		}
		if (!userLoggedDto.username) {
			AppService.notify("msg.login.error", "error", {}, "#inputEmail3");
			return;
		}
		AppService.secSetUser(userLoggedDto);
		$modalInstance.close($scope.user);
	}

	function onLoginErr(data, status, headers, config) {
		console.log(data);
		console.log(status);
		console.log(headers);
		console.log(config);
		if (status == 401) {
			AppService.notify('msg.login.invalid', "error", {}, "#inputEmail3");
			return;
		}
		AppService.notify("msg.login.error", "error", {}, "#inputEmail3");
	}

	function processSignin() {
		var userLogged = new UserLogged();
		userLogged.login = $scope.user.name;
		userLogged.password = RsaService.encrypt($scope.user.password);
//		userLogged.password = $scope.user.password;
		userLogged.loginType = 0; // email

		userLogged.$postService('signin', onSignOk, onSignErr);

	}

	function onSignOk(restDto, status, headers, config) {
		if (!restDto) {
			AppService.notify("msg.save.error", "error", {name: "o email"}, "#inputEmail3");
			return;
		}
		if (restDto.msg) {
			AppService.notify(restDto.msg, "error", {}, "#inputEmail3");
			return;
		}
		if (!restDto.id) {
			AppService.notify("msg.save.error", "error", {name: "o email!"}, "#inputEmail3");
			return;
		}
		$scope.user.id = restDto.id; // sucesso
		$modalInstance.close($scope.user);
	}
	function onSignErr(data, status, headers, config) {
		console.log(data, status, headers, config);
		AppService.notify("msg.save.error", "error", {name: "o email."}, "#inputEmail3");
	}

	$scope.hitEnterUser = function(evt) {
		if (angular.equals(evt.keyCode, 13) && $scope.user.name) {
			$("#inputPassword3").focus();
		}
	};

	$scope.hitEnterPassword = function(evt) {
		if (angular.equals(evt.keyCode, 13) && $scope.user.password) {
			if ($scope.user.loginMode) {
				$scope.onOk();
			} else {
				$("#inputPassword4").focus();
			}
		}
	};

	$scope.hitEnterPassword2 = function(evt) {
		if (angular.equals(evt.keyCode, 13) && $scope.user.password) {
			$scope.onOk();
		}
	};

	$scope.signin = function() {
		if ($scope.user.loginMode) {
			$scope.user.loginMode = false;
		} else {
			$scope.user.loginMode = true;
		}
	};

	$scope.facebook = function() {
		var path = window.location.href;
		var callBack = "http://www.7chaos.com/html/oauth/facecallback.html";
		if (environment == "des") {
			callBack = "http://localhost:7070/html/oauth/facecallback.html";
		}
		if (environment != "prod" && environment != "apk") {
			environment = environment + "_" + environment_inic;
		}
		var urlTo = "https://www.facebook.com/dialog/oauth?client_id=1503208176588180&redirect_uri=" + callBack + "&state=crypto/html/index.html" + "_" + environment + "&response_type=token";
		if (environment != "apk") {
			window.location.href = urlTo;
		} else { // apk :
			var ref = cordova.InAppBrowser.open(urlTo, '_blank', 'location=no');
			ref.addEventListener('loadstart', function(event) {
				if((event.url).startsWith(callBack)) {
					requestToken = (event.url).split("access_token=")[1];
			        requestToken = requestToken.split("&")[0];
			        ref.close();
			        $.ajax({
			          type: 'GET',
					  dataType: 'json',
					  url: 'https://graph.facebook.com/me?access_token=' + requestToken,
					  success: function (resp) {
					  	var user = resp;
				        var userOauth = {};

				        userOauth.loginType=1;
				        userOauth.token=requestToken;
				        userOauth.id=user.id;
				        userOauth.email=user.email;
				        userOauth.verifiedEmail=user.verified;
				        userOauth.name=user.name;
				        userOauth.givenName=user.first_name;
				        userOauth.familyName=user.last_name;
				        userOauth.gender=user.gender;
				        userOauth.link=user.link;

					  	UserLogged.postData('/loginoauth', userOauth, onloginOauthOk, onloginOauthErr, false);
					  },
					  error: function (request, error) {
				        console.log("valid user error req=",req,error);
				        AppService.notify("msg.process.error", "error", {name: "login"});
				    	}
					});
				}
			});
		}
	};

	$scope.google = function() {
		var path = window.location.href;
		var callBack = "http://www.7chaos.com/html/oauth/oauth2callback.html";
		if (environment == "des") {
			callBack = "http://localhost:7070/html/oauth/oauth2callback.html";
		}
		if (environment != "prod" && environment != "apk") {
			environment = environment + "_" + environment_inic;
		}
		var urlTo = "https://accounts.google.com/o/oauth2/auth?scope=email&state=crypto/html/index.html" + "_" + environment + "&redirect_uri=" + callBack + "&client_id=976809327431-mq6c2hprmhrd4qrmk7luulhvpkjeptju.apps.googleusercontent.com&response_type=token";
		if (environment != "apk") {
			window.location.href = urlTo;
		} else { // apk :
			var ref = cordova.InAppBrowser.open(urlTo, '_blank', 'location=no');
			ref.addEventListener('loadstart', function(event) {
			    if((event.url).startsWith(callBack)) {
			        requestToken = (event.url).split("access_token=")[1];
			        requestToken = requestToken.split("&")[0];
			        ref.close();
			        $.ajax({
			          type: 'GET',
					  dataType: 'json',
					  url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + requestToken,
					  success: function (resp) {
					  	var user = resp;
				        var userOauth = {};

				        userOauth.loginType=2;
				        userOauth.token=requestToken;
				        userOauth.id=user.id;
				        userOauth.email=user.email;
				        userOauth.verifiedEmail=user.verified_email;
				        userOauth.name=user.name;
				        userOauth.givenName=user.given_name;
				        userOauth.familyName=user.family_name;
				        userOauth.gender=user.gender;
				        userOauth.link=user.link;
				        userOauth.picture=user.picture;

					  	UserLogged.postData('/loginoauth', userOauth, onloginOauthOk, onloginOauthErr, false);
					  },
					  error: function (request, error) {
				        console.log("valid user error req=",req,error);
				        AppService.notify("msg.process.error", "error", {name: "login"});
				    	}
					});
			    }
			});
		}
	};

	function onloginOauthOk(restDto, status, headers, config) {
		AppService.secSetUser(restDto);
		$modalInstance.close($scope.user);
	}

	function onloginOauthErr(restDto, status, headers, config) {
		console.log('onloginOauthErr,status=' + status, restDto);
		AppService.notify("msg.process.error", "error", {name: "login"});
	}

	$scope.passwordRecover = function() {
		if (!$scope.user.name) {
			AppService.notify("msg.invalid.error", "error", {name: "email"}, "#inputEmail3");
			return;
		}

		ModalBox.confirm("Será gerado um email de recuperação para seu endereço.", null, "sm", onRecOk, onRecCancel);
	};

	function onRecOk() {
		var userLogged = new UserLogged();
		userLogged.login = $scope.user.name;
		userLogged.loginType = 0; // email
		userLogged.$postService('passrecover', onPassRecOk, onPassRecErr);
	}
	function onRecCancel() {
		return;
	}

	function onPassRecOk(restDto, status, headers, config) {
		if (!restDto) {
			AppService.notify("msg.process.error", "error", {name: "recuperação de senha."}, "#inputEmail3");
		}
		if (restDto.msg) {
			AppService.notify(restDto.msg, "error", {}, "#inputEmail3");
			return;
		}
		if (!restDto.id) {
			AppService.notify("msg.process.error", "error", {name: "recuperação de senha."}, "#inputEmail3");
			return;
		}
		$scope.user.id = restDto.id; // sucesso
		$scope.user.passRec=true;
		$modalInstance.close($scope.user);
	}
	function onPassRecErr(data, status, headers, config) {
		AppService.notify("msg.process.error", "error", {name: "recuperação de senha."}, "#inputEmail3");
	}

}]);


angular.module('home.module').controller('ContactCtrl',
				['$scope','$modalInstance', 'AppService', 'contactItem',
function ($scope,  $modalInstance,   AppService,   contactItem) {

	$scope.user = {emailAddr : null, message : null};

	var userLogged = AppService.secGetUser();
	if (userLogged) {
		if (userLogged.email) {
			$scope.user.emailAddr = userLogged.email;
		}
	}

	$scope.cancel = function() {
		$modalInstance.dismiss('canceled');
	};

	$scope.onOk = function() {
		if (!$scope.user.emailAddr) {
			AppService.notify("msg.invalid.error", "error", {name: "email"}, "#inputEmail3");
			return;
		}
		if (!$scope.user.message) {
			AppService.notify("msg.invalida.error", "error", {name: "mensagem"}, "#message");
			return;
		}
		$scope.save();
	};

	$scope.save = function(){
		contactItem.msg = $scope.user.message;
		contactItem.email = $scope.user.emailAddr;
		contactItem.$save(onContactOk, onContactErr);
	};
	function onContactOk(result, status, headers, config) {
		$modalInstance.close();
	}
	function onContactErr(result, status, headers, config) {
		console.log("onContactErr", result, status, headers, config);
		AppService.notify("msg.process.error", "error", {name: "envio"}, "#message");
	}
}]);
;angular.module('plnx.module', ['service.wsconnect']);

angular.module('plnx.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/plnx', {
		templateUrl: 'html/templates/plnx/plnx.tpl.html',
	    controller:'PolnxCtrl'
	  });
}]);

//Pagina Home (controller tambem usado para revalidacao de login)
angular.module('plnx.module').controller('PolnxCtrl',
		['$scope', '$location','WSService',
function ($scope,   $location,  WSService) {

	// _.each([1,2,3],function(o){ console.log('o=',o); });

	$scope.usbc=[];
	
	var wsuri = "wss://api.poloniex.com";
	var connection = WSService.connect();

	connection.onopen = function (session) {
		session.subscribe('ticker', tickerEvent);
	};

	$scope.onStart = function(){
		connection.open();
	};
	
	$scope.onStop = function(){
		connection.close();
	};
	
	function tickerEvent (args,kwargs) {
		if (args[0]=='USDT_BTC') {
			$scope.usbc.push({date:new Date(),currencyPair:args[0],
				last:args[1],lowestAsk:args[2],highestBid:args[3],percentChange:args[4],baseVolume:args[5],
				quoteVolume:args[6],isFrozen:args[7],high24Hs:args[8],low24Hs:args[9]});
		}
	}
}]);
;angular.module('songs.module', []);

angular.module('songs.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/songs', {
		templateUrl: 'html/templates/songs/songs.tpl.html',
	    controller:'SongsCtrl'
	  });
}]);

//Pagina Home (controller tambem usado para revalidacao de login)
angular.module('songs.module').controller('SongsCtrl',
		['$scope', '$location',
function ($scope,  $location) {

	console.log('### SongsCtrl');
	$scope.music={list:[]};
	$scope.music.list.push({date:(new Date()), singer:'singer1', song:'song1'});
	$scope.music.list.push({date:(new Date()), singer:'singer2', song:'song2'});
	$scope.music.list.push({date:(new Date()), singer:'singer3', song:'song3'});

}]);
;angular.module('userlogged.module', ['resources.userlogged', 'resources.profile']);

angular.module('userlogged.module').config(['$routeProvider',
function (routeProvider) {

	routeProvider.when('/userlogged', {
		templateUrl:'html/templates/userlogged/userlogged.tpl.html',
	    controller:'UserLoggedCtrl',
	    resolve : {
			userLoggedList : ['UserLogged', function (UserLogged) {
		    	  return UserLogged.filter({page:1, rowsPerPage:5,
		    		  paramsFilter:[{param:'active', valueParam:1, operator:'eq' } ]
		    	  } );
			} ]
		}
	  });

	routeProvider.when('/userlogged/profile', {
		templateUrl:'html/templates/userlogged/userlogged.profile.tpl.html',
	    controller:'UserLoggedProfileCtrl',
	    resolve : {
	    	userProfile : ['UserProfile', function (UserProfile) {
	    		return UserProfile.queryPathVariable('/get',null,null,false);
	    	}]
	    }
	  });
}]);

angular.module('userlogged.module').controller('UserLoggedCtrl',
		['$scope', 'UserLogged', 'userLoggedList',
function ($scope,   UserLogged,   userLoggedList) {
	$scope.userLoggedList=userLoggedList.list;
}]);

angular.module('userlogged.module').controller('UserLoggedProfileCtrl',
		['$scope', 'userProfile', 'AppService', '$location', 'RsaService', 'UserProfile',
function ($scope,   userProfile,   AppService,   $location,   RsaService,   UserProfile) {

	$scope.userProfileItem = userProfile;

	$scope.editMode = false;
	$scope.editPassword = false;
	$scope.newPassword2 = null;

	if ($scope.userProfileItem.loginType === 0) {
		$scope.loginType = "email";
	}

	switch($scope.userProfileItem.loginType) {
    case 0:
    	$scope.loginType = "email";
        break;
    case 1:
    	$scope.loginType = "facebook";
        break;
    case 2:
    	$scope.loginType = "google";
        break;
    default:
    	$scope.loginType = "???";
	}

	$scope.onConfirm = function() {
		if ($scope.editMode) {
			if (!$scope.userProfileItem.givenName) {
				AppService.notify("msg.invalid.error", "error", {name: "Nome de exibição"}, "#idGivenName");
				return;
			}
		}
		if ($scope.editPassword) {
			if (!$scope.userProfileItem.password) {
				AppService.notify("msg.invalid.error", "error", {name: "Senha atual"}, "#idPassAtu");
				return;
			}
			if (!$scope.userProfileItem.newPassword) {
				AppService.notify("msg.invalida.error", "error", {name: "Nova senha"}, "#idPassTo1");
				return;
			}
			if (!$scope.newPassword2) {
				AppService.notify("msg.invalida.error", "error", {name: "confirmação senha"}, "#idPassTo2");
				return;
			}
			if ($scope.newPassword2 != $scope.userProfileItem.newPassword) {
				AppService.notify("msg.password.confirm.error", "error", {}, "#idPassTo1");
				return;
			}
		}

		// move dados para entidade
		var userProfileTo = new UserProfile();
		userProfileTo.givenName = null;
		userProfileTo.password = null;
		userProfileTo.newPassword = null;

		if ($scope.editMode) {
			userProfileTo.givenName = $scope.userProfileItem.givenName;
		}
		if ($scope.editPassword) { // crypto
			userProfileTo.password = RsaService.encrypt($scope.userProfileItem.password);
			userProfileTo.newPassword = RsaService.encrypt($scope.userProfileItem.newPassword);
		}
		userProfileTo.$postService('update', onUpdateOk, onUpdateError);

		function onUpdateOk(restDto, status, headers, config) {
			var idErr = "#idGivenName";
			if ($scope.editPassword) {
				idErr = "#idPassAtu";
			}
			if (!restDto) {
				AppService.notify("msg.save.error", "error", {name: "o perfil"}, idErr);
				return;
			}
			if (restDto.msg) {
				AppService.notify(restDto.msg, "error", {}, idErr);
				return;
			}
			if (!restDto.id) {
				AppService.notify("msg.save.error", "error", {name: "o perfil!"}, idErr);
				return;
			}

			// alt de nome de exibicao
			if ($scope.editMode) {
				var userAtu = AppService.secGetUser();
				userAtu.givenName = $scope.userProfileItem.givenName;
				AppService.secSetUser(userAtu);
			}

			AppService.notify("msg.save.success", "success", {name: "perfil"});
			$location.path("/");
		}
		function onUpdateError(result, status, headers, config) {
			var idErr = "#idGivenName";
			if ($scope.editPassword) {
				idErr = "#idPassTo1";
			}
			console.log("onUpdateError", result, status, headers, config);
			AppService.notify("msg.process.error", "error", {name: "alteração de perfil"}, idErr);
		}
	};

	$scope.onCancel = function() {
		$location.path("/");
	};

}]);
;angular.module('app').constant('MSG_PT', {
	'msg.save.success':'{{name}} salvo',
	'msg.save.error':'Ocorreu erro ao salvar {{name}}',
	'msg.update.success':'{{name}} alterado',
	'msg.update.error':'Ocorreu erro ao alterar {{name}}',
	'msg.delete.success':'{{name}} excluido',
	'msg.deletas.success':'{{name}} excluidas',
	'msg.delete.error':'Ocorreu erro ao excluir {{name}}',
	'msg.browse.error':'Ocorreu erro ao consultar {{name}}',
	'msg.invalid.error':'{{name}} inválido',
	'msg.invalida.error':'{{name}} inválida',
	'msg.password.confirm.error':'Confirmação diferente da senha',
	'msg.signin.duplicate':'Email já cadastrado. Efetue login.',
	'msg.login.error':'Ocorreu erro no processo de login.',
	'msg.login.invalid':'Email ou senha inválidos.',
	'msg.logout.success':'Sessão encerrada.',
	'msg.process.error':'Ocorreu erro no processo de {{name}}.',
	'msg.email.notfound':'Email não cadastrado.',
	'msg.password.invalid':'Senha inválida.',
	'msg.new.password.invalid':'Nova senha inválida.',
	'msg.logintype.invalid':'Tipo de login invalido.',
	'msg.given.name.invalid':'Nome de exibição inválido.',
	'msg.mustinform':'{{name}} deve ser informado.',
	'msg.mustinforma':'{{name}} deve ser informada.',
	'msg.not.storage':'Seu navegador não possui esta funcionalidade.',
	'msg.login.needed':'Somente para usuários logados.',
	'msg.email.ok':'Email enviado.',
	'msg.cut.copy.error':'Selecione alguma crypto para {{name}}.',
	'msg.test.ok':'{{name}} name2={{name2}}',
	'msg.test.error':'funcao nao implementada.'
});

angular.module('app').constant('MSG_EN', {
	'msg.save.success':'{{name}} saved',
	'msg.save.error':'Error occured saving {{name}}',
	'msg.update.success':'{{name}} updated',
	'msg.update.error':'Error updating {{name}}',
	'msg.delete.success':'{{name}} deleted',
	'msg.deletas.success':'{{name}} deleted',
	'msg.delete.error':'Error deleting {{name}}',
	'msg.browse.error':'Error searching {{name}}',
	'msg.invalid.error':'Invalid {{name}}',
	'msg.invalida.error':'Invalid {{name}}',
	'msg.password.confirm.error':'Confirmation differs from password',
	'msg.signin.duplicate':'Email already recorded. Please login.',
	'msg.login.error':'Error on login process.',
	'msg.login.invalid':'Invalid email or password.',
	'msg.logout.success':'Session closed.',
	'msg.process.error':'Error in the process of {{name}}.',
	'msg.email.notfound':'Email not in our files.',
	'msg.password.invalid':'Invalid password.',
	'msg.new.password.invalid':'Invalid new password.',
	'msg.logintype.invalid':'Invalid login type.',
	'msg.given.name.invalid':'Invalid exhibition name.',
	'msg.mustinform':'{{name}} must be informed.',
	'msg.mustinforma':'{{name}} must be informed.',
	'msg.not.storage':'Your browser does not support this feature.',
	'msg.login.needed':'Only for logged users.',
	'msg.email.ok':'Email sent.',
	'msg.cut.copy.error':'Please select a data for cut.',
	'msg.test.ok':'{{name}} name2={{name2}}',
	'msg.test.error':'function not supported.',
});


angular.module('app').constant('MSG_ES', {
	'msg.save.success':'{{name}} guardado',
	'msg.save.error':'Se produjo un error al guardar {{name}}',
	'msg.update.success':'{{name}} cambiado',
	'msg.update.error':'Se produjo un error al cambiar {{name}}',
	'msg.delete.success':'{{name}} excluido',
	'msg.deletas.success':'{{name}} excluida',
	'msg.delete.error':'Se produjo un error al excluir {{name}}',
	'msg.browse.error':'Se produjo un error al consultar {{name}}',
	'msg.invalid.error':'{{name}} inválido',
	'msg.invalida.error':'{{name}} inválida',
	'msg.password.confirm.error':'Confirmación y la contraseña difieren',
	'msg.signin.duplicate':'E-mail ya registrado. Identifíquese.',
	'msg.login.error':'Se produjo un error en el proceso de inicio de sesión.',
	'msg.login.invalid':'E-mail o contraseña no válidos.',
	'msg.logout.success':'Sesión cerrada.',
	'msg.process.error':'Se produjo un error en el proceso de {{name}}.',
	'msg.email.notfound':'El e-mail no se registró.',
	'msg.password.invalid':'Contraseña no es válida.',
	'msg.new.password.invalid':'Nueva contraseña no es válida.',
	'msg.logintype.invalid':'Tipo de inicio de sesión no válido.',
	'msg.given.name.invalid':'Nombre para visualización no es válido.',
	'msg.mustinform':'El {{name}} debe ser informado.',
	'msg.mustinforma':'La {{name}} debe ser informada.',
	'msg.not.storage':'Su navegador no tiene esta funcionalidad.',
	'msg.login.needed':'Sólo para los usuarios registrados.',
	'msg.email.ok':'E-mail enviado.',
	'msg.cut.copy.error':'Seleccione cualquier dato para cortar.',
	'msg.test.ok':'{{name}} name2={{name2}}',
	'msg.test.error':'funcionalidad no implementado.',
});

angular.module('app').constant('LITERAL_PT', {
	'msg.Idiom':'Idioma',
	'msg.Save':'Salvar',
	'msg.contract':'Contato',
	'msg.A.crypto.w.name':'Uma crypto com nome',
	'msg.already.exists':'já existe.',
	'msg.and':'e',
	'msg.Browse':'Consulta',
	'msg.Cancel':'Cancela',
	'msg.cancel':'cancela',
	'msg.clean.crypto':'limpa crypto',
	'msg.clean.screen':'limpa as informações da tela.',
	'msg.confirm':'confirma',
	'msg.Confirm':'Confirmação',
	'msg.Confirm.copy':'Confirmação de cópia',
	'msg.Confirm.login':'Confirmação de login',
	'msg.Confirm.password':'confirmação senha',
	'msg.copy':'copiar',
	'msg.Copy.confirmation':'Deseja copiar mesmo assim ?',
	'msg.creation':'criação',
	'msg.Crypto':'Crypto',
	'msg.Crypto.generated':'Crypto gerada',
	'msg.cryptografy':'criptografia',
	'msg.cut':'recortar',
	'msg.decrypto':'decrypto',
	'msg.Decrypto':'Decrypto',
	'msg.Do.signin':'Efetuar cadastro',
	'msg.Download':'Download',
	'msg.edit':'editar',
	'msg.Email':'Email',
	'msg.email':'email',
	'msg.Email.crypto':'Email crypto',
	'msg.exclude':'excluir',
	'msg.Exhibition.name':'Nome de exibição',
	'msg.expired.session':'Sessão expirada',
	'msg.File':'Arquivo',
	'msg.forgot':'esqueceu?',
	'msg.forgot.passw':'esqueceu sua senha?',
	'msg.Help':'Ajuda',
	'msg.However.remember.passw':'Entretanto, lembre-se de sua senha pois não há como recuperá-la !',
	'msg.Inc.date':'Data Inclusão',
	'msg.instru.about':'Como trata-se de um',
	'msg.instru.crypt01':'A criptografia utilizada obedece o padrão AES. Ref :',
	'msg.instru.crypt02':'A crypto gerada pode ser simplesmente copiada para ser interpretada mais tarde.',
	'msg.instru.crypt03':'A crypto poderá ser obtida da consulta ou de um arquivo crypto efetuando upload.',
	'msg.instru.crypt04':'A sua base do site fica armazenada na internet nos servidores do sistema. Nunca se perderá.',
	'msg.instru.crypt05':'A sua base do site somente poderá ser consultada após efetuado login.',
	'msg.instru.crypt06':'A sua base local pertence a memória do navegador (Chrome, Inernet Explorer, etc). Caso a memória do navegador seja limpa ou utilizado outro navegador suas cryptos locais poderão se perder.',
	'msg.instru.crypt07':'a sua segurança é baseada apenas na senha. Portanto leia as recomendações para não escolher senhas fáceis.',
	'msg.instru.crypt08':'Agora cuidado : A senha é a sua segurança.',
	'msg.instru.crypt09':'algoritmo de chave simétrica',
	'msg.instru.crypt10':'Analogamente para os outros itens.',
	'msg.instru.crypt11':'Após informada crypto e senha pressione ',
	'msg.instru.crypt12':'As cryptos criadas poderão ser enviadas por email, salvas na máquina (local) ou armazenadas no site para consulta futura.',
	'msg.instru.crypt13':'As suas cryptos estão armazenadas em local seguro ? Guarde-as no site ou em algum email ou dispositivo que somente você tenha acesso.',
	'msg.instru.crypt14':'Cadastre um email ou retorne ao login',
	'msg.instru.crypt15':'Caso a senha esteja correta e o texto for interpretado, será exibido botão para poder alterar o texto, gerando uma nova crypto.',
	'msg.instru.crypt16':'Caso uma crypto esteja sendo colada e já exista uma crypto de mesmo nome, será solcitada uma confirmação.',
	'msg.instru.crypt17':'Caso você esteja utilizando a opção de "consulta" e solicite ajuda, será exibida a ajuda de consulta.',
	'msg.instru.crypt18':'Cuidado com as suas senhas. Elas são a sua garantia de segredo. Não escolha senhas fáceis demais.',
	'msg.instru.crypt19':'Este aplicativo permite criar textos criptografados (cryptos).',
	'msg.instru.crypt20':'Deverá ser informada uma crypto válida e a senha para que o sistema possa interpretar e exibir o texto.',
	'msg.instru.crypt21':'Exibe lista de suas cryptos armazenadas na base local ou do site.',
	'msg.instru.crypt22':'Dica : Para senha escolha uma frase misturando letras maiúsculas, minúsculas e caracteres especiais.',
	'msg.instru.crypt23':'Informe a crypto ou faça upload de um arquivo e informe sua senha.',
	'msg.instru.crypt24':'Informe email / senha, ou utilize seu login do facebook ou google',
	'msg.instru.crypt25':'Informe uma senha e um texto que deseja criptografar e pressione <button type="button" class="btn btn-primary"><i class="fa fa-asterisk"></i> crypto</button>.',
	'msg.instru.crypt26':'Já pensou em guardar suas informações secretas ? Trocar mensagens confidenciais com alguém ?',
	'msg.instru.crypt27':'O botão local/site permite alternar a consulta entre as bases.',
	'msg.instru.crypt28':'O seu nome, sua data de nascimento ou numero de documento são muito fáceis de adivinhar.',
	'msg.instru.crypt29':'O sistema de ajuda é sensível ao contexto.',
	'msg.instru.crypt30':'Para copiar uma crypto local para o site : efetue consulta local, selecione a crypto desejada, copie, efetue consulta no site e cole.',
	'msg.instru.crypt31':'permite que sejam escolhidas cryptos para recortar, copiar ou excluir. Copia e cola sempre entre as bases local e site.',
	'msg.instru.crypt32':'permitem movimentação das cryptos entre as bases local e site.',
	'msg.instru.crypt33':'Pode ser efetuado download de um arquivo texto contendo a crypto gerada. Desta maneira, você poderá armazená-la em seu equipamento ou onde preferir. O arquivo texto poderá ser alterado se você desejar, copiado, recortado, colado à vontade. No entanto, a parte do texto que contém a crypto não deve ser mexida, caso contrário o sistema não conseguirá mais interpretá-la.',
	'msg.instru.crypt34':'Que trata-se de um padrão bastante seguro.',
	'msg.instru.crypt35':'Salvar sua crypto na memória do navegador. Caso a memória do navegador seja limpa ou utilizado outro navegador suas cryptos locais poderão se perder.',
	'msg.instru.crypt36':'Será enviado email para destiatário informado contendo a crypto',
	'msg.instru.crypt37':'Será solicitado um destinatário e enviado um email contendo a crypto. Futuramente, basta copiar a crypto que encontra-se no email para que o sistema possa interpretá-la.',
	'msg.instru.crypt38':'Seu texto estará criptografado e protegido. A crypto foi gerada e poderá ser :',
	'msg.instru.crypt39':'Todas cryptos possuirão uma senha definida por você.',
	'msg.instru.crypt40':'Trata-se de uma maneira prática para guardar suas cryptos. As senhas não serão armazenadas. Apenas o texto criptografado e o nome informado.',
	'msg.instru.crypt41':'Várias cryptos selecionadas poderão ser recortadas, copiadas e movidas em um único comando.',
	'msg.instru.crypt42':'Você poderá armazenar seus segredos. Criar um texto criptografado e "trancá-lo" com sua senha.',
	'msg.instru.crypt43':'Para geração das cryptos são utilizadas técnicas modernas de',
	'msg.leng.':'tam.',
	'msg.local':'local',
	'msg.Login':'Login',
	'msg.Login.type':'Tipo de login',
	'msg.Message':'Mensagem',
	'msg.Name':'Nome',
	'msg.New.psw':'Nova senha',
	'msg.Objective':'Objetivo',
	'msg.OK':'OK',
	'msg.or':'Ou',
	'msg.Passw':'Senha',
	'msg.Passw.atu':'Senha atual',
	'msg.paste':'colar',
	'msg.Personal.Profile':'Perfil Pessoal',
	'msg.protect':'proteger',
	'msg.Recommendation':'Recomendações',
	'msg.Reference':'Referências',
	'msg.register':'cadastro',
	'msg.Return.to.login':'Retornar ao Login',
	'msg.Save.crypto.site':'Salvar sua crypto no site',
	'msg.save.local':'salva local',
	'msg.Save.local':'Salva local',
	'msg.save.site':'salva no site',
	'msg.Save.site':'Salva no site',
	'msg.selectbox':'A caixa de seleção',
	'msg.Send.by.email':'Enviar por email',
	'msg.send.email':'envia email',
	'msg.Signin.yourself':'Cadastre-se',
	'msg.site':'site',
	'msg.Social.login':'login social',
	'msg.Text':'Texto',
	'msg.The.buttons.for':'Os botões para',
	'msg.The.clean.button':'O botão de limpeza ',
	'msg.To':'Para',
	'msg.to.update':'alterar',
	'msg.update':'alteração',
	'msg.upload':'upload',
	'msg.Use.accout.or.mail':'Utilize suas contas ou um email',
	'msg.Utilization':'Utilização',
	'msg.warn.too.easy':'Não utilize senhas muito fáceis.',
});

angular.module('app').constant('LITERAL_EN', {
	'msg.Idiom':'Idiom',
	'msg.Save':'Save',
	'msg.contract':'Contact',
	'msg.A.crypto.w.name':'A crypto with name',
	'msg.already.exists':'already exists',
	'msg.and':'and',
	'msg.Browse':'Browse',
	'msg.Cancel':'Cancel',
	'msg.cancel':'cancel',
	'msg.clean.crypto':'clean crypto',
	'msg.clean.screen':'clean screen information',
	'msg.confirm':'confirm',
	'msg.Confirm':'Confirmation',
	'msg.Confirm.copy':'Copy confirmation',
	'msg.Confirm.login':'Login confirmation',
	'msg.Confirm.password':'Password confirmation',
	'msg.copy':'copy',
	'msg.Copy.confirmation':'Copy it anyway ?',
	'msg.creation':'creation',
	'msg.Crypto':'Crypto',
	'msg.Crypto.generated':'Crypto generated',
	'msg.cryptografy':'cryptography',
	'msg.cut':'cut',
	'msg.decrypto':'decrypto',
	'msg.Decrypto':'Decrypto',
	'msg.Do.signin':'Signin',
	'msg.Download':'Download',
	'msg.edit':'edit',
	'msg.Email':'Email',
	'msg.email':'email',
	'msg.Email.crypto':'Email crypto',
	'msg.exclude':'delete',
	'msg.Exhibition.name':'Alias',
	'msg.expired.session':'Session expired',
	'msg.File':'File',
	'msg.forgot':'forgotten?',
	'msg.forgot.passw':'password forgotten?',
	'msg.Help':'Help',
	'msg.However.remember.passw':'However, remember your password because there is no way to recover it !',
	'msg.Inc.date':'Creation Date',
	'msg.instru.about':'As it is an',
	'msg.instru.crypt01':'The cryptography technology utilized is the AES pattern Ref:',
	'msg.instru.crypt02':'The generated crypto may be just copied for a later interpretation.',
	'msg.instru.crypt03':'The crypto may be retrieved from a browse option or from a crypto file by upload.',
	'msg.instru.crypt04':'Your site base is at internet cloud at the system servers. Never will be lost.',
	'msg.instru.crypt05':'Your site base will only be available after login.',
	'msg.instru.crypt06':'Your local base local belongs to the browser memory (Chrome, Inernet Explorer, etc). In case of cleaning browser memory or just changing browser, your local cryptos will be lost.',
	'msg.instru.crypt07':'your warranty is your password. Read carefully the recommendations, do not use easy passwords.',
	'msg.instru.crypt08':'Now attention : Your warranty is your password.',
	'msg.instru.crypt09':'symmetric key algorithm',
	'msg.instru.crypt10':'For the otture hers items by analogy.',
	'msg.instru.crypt11':'After crypto and password informed press',
	'msg.instru.crypt12':'The generated cryptos may be sent by email, saved in your device (local) or sent to our site for future.',
	'msg.instru.crypt13':'Are your cryptos in a safe place ? Keep them in cloud or email or in a device that only you access.',
	'msg.instru.crypt14':'Sign in with an email or return to login',
	'msg.instru.crypt15':'In the case of a correct password and the text is interpreted, the button option for update will be shown, generating a new crypto.',
	'msg.instru.crypt16':'In the case of pasting a crypto that same name already exists, a confirmation will be asked.',
	'msg.instru.crypt17':'In the case of using the \"browser\" option and clicking for help, the browser help will be shown.',
	'msg.instru.crypt18':'Be careful with your passwords. They are your warranty. Do not use easy passwords.',
	'msg.instru.crypt19':'This application allow you to generate cryptographed (encrypted) texts called \"cryptos\".',
	'msg.instru.crypt20':'A valid crypto and password must be informed, so the system may interpret and show the orignal text.',
	'msg.instru.crypt21':'It shows your crypto list from your local or site base.',
	'msg.instru.crypt22':'Tip : For your password, create phrases mixing upper and lower casesand some special characters.',
	'msg.instru.crypt23':'Inform a crypto or upload one from a file and fill it\'s password.',
	'msg.instru.crypt24':'Inform an email / password, or use your google / facebook login',
	'msg.instru.crypt25':'Inform a password and a text that you wish to encrypt and press',
	'msg.instru.crypt26':'Have you ever wondered about keeping your informations secrets ? Changing confidential messages with someone ?',
	'msg.instru.crypt27':'The local/site switcher allow you to alternate between the bases.',
	'msg.instru.crypt28':'Your name, birthdate, phone or document number and the word \"secret\" are too easy to guess :-).',
	'msg.instru.crypt29':'The help system is context sensitive.',
	'msg.instru.crypt30':'In order to copy a crypto from local to site : browse your local cryptos, select one, copy, alternate to site and paste it.',
	'msg.instru.crypt31':'allow you to choose between cryptos to cut, copy and paste or delete. Copy and paste allways between your local and site bases.',
	'msg.instru.crypt32':'allow crypto movement between your local and site bases.',
	'msg.instru.crypt33':'Download may be done generating a text file that contain the generated crypto. In this case, you may keep it in your device or whatever is your preference. The text file may be changed if you wish, copied, cutted, pasted... However, the text part that contain the crypto shoud not be changed, otherwise the system cannot interpret it no more.',
	'msg.instru.crypt34':'It is considered a very good and safe pattern.',
	'msg.instru.crypt35':'Saved in your browser memory. In the case of cleaning your browser memory or using another browser your cryptos will be lost.',
	'msg.instru.crypt36':'An email will be sent to the informed destination containing the crypto',
	'msg.instru.crypt37':'A destination will be asked and an email will be sent containing the crypto. After it, if you want to decrypt it all you have to do is copy and paste it in the system.',
	'msg.instru.crypt38':'Your text will be encrypted and protected. The generated crypto may be :',
	'msg.instru.crypt39':'All your cryptos will have a password defined by you.',
	'msg.instru.crypt40':'It is a practical way to mantain your cryptos. The passwords will not be stored. Just the encrypted text and the given name.',
	'msg.instru.crypt41':'Many selected cryptos may be cut, copy and pasted in a single command.',
	'msg.instru.crypt42':'You may keep and mantain your secrets. Generate a encrypted text and lock it with your password.',
	'msg.instru.crypt43':'In order to generate cryptos the app will use some modern techniques of',
	'msg.leng.':'leng.',
	'msg.local':'local',
	'msg.Login':'Login',
	'msg.Login.type':'Login type',
	'msg.Message':'Message',
	'msg.Name':'Name',
	'msg.New.psw':'New password',
	'msg.Objective':'Objective',
	'msg.OK':'OK',
	'msg.or':'Or',
	'msg.Passw':'Password',
	'msg.Passw.atu':'Current password',
	'msg.paste':'paste',
	'msg.Personal.Profile':'Personal Profile',
	'msg.protect':'protect',
	'msg.Recommendation':'Recommendations',
	'msg.Reference':'References',
	'msg.register':'archive',
	'msg.Return.to.login':'Return to Login',
	'msg.Save.crypto.site':'Save your crypto on site',
	'msg.save.local':'local save',
	'msg.Save.local':'Local save',
	'msg.save.site':'site save',
	'msg.Save.site':'Site save',
	'msg.selectbox':'The selection box',
	'msg.Send.by.email':'Send by email',
	'msg.send.email':'send email',
	'msg.Signin.yourself':'Register yourself',
	'msg.site':'site',
	'msg.Social.login':'social login',
	'msg.Text':'Text',
	'msg.The.buttons.for':'The buttons for',
	'msg.The.clean.button':'The clean button',
	'msg.To':'To',
	'msg.to.update':'update',
	'msg.update':'update',
	'msg.upload':'upload',
	'msg.Use.accout.or.mail':'Use your accounts or an email',
	'msg.Utilization':'Utilization',
	'msg.warn.too.easy':'Do not use easy passwords.',
});

angular.module('app').constant('LITERAL_ES', {
	'msg.Idiom':'Idioma',
	'msg.Save':'Guardar',
	'msg.contract':'Contato',
	'msg.A.crypto.w.name':'Un crypto con el nombre',
	'msg.already.exists':'ya existe',
	'msg.and':'y',
	'msg.Browse':'Consulta',
	'msg.Cancel':'Cancela',
	'msg.cancel':'cancela',
	'msg.clean.crypto':'limpiarr crypto',
	'msg.clean.screen':'limpiar la información de la pantalla.',
	'msg.confirm':'confirma',
	'msg.Confirm':'Confirmación',
	'msg.Confirm.copy':'Confirmación de copia',
	'msg.Confirm.login':'Confirmación de login',
	'msg.Confirm.password':'confirmación contraseña',
	'msg.copy':'copiar',
	'msg.Copy.confirmation':'¿Desea copiar todos todavia?',
	'msg.creation':'creación',
	'msg.Crypto':'Crypto',
	'msg.Crypto.generated':'Crypto generada',
	'msg.cryptografy':'cifrado',
	'msg.cut':'cortar',
	'msg.decrypto':'decrypto',
	'msg.Decrypto':'Decrypto',
	'msg.Do.signin':'Registrarse',
	'msg.Download':'Download',
	'msg.edit':'editar',
	'msg.Email':'Email',
	'msg.email':'email',
	'msg.Email.crypto':'Email crypto',
	'msg.exclude':'borrar',
	'msg.Exhibition.name':'Nombre de exibición',
	'msg.expired.session':'Sesión expirada',
	'msg.File':'Archivo',
	'msg.forgot':'¿se olvidó?',
	'msg.forgot.passw':'¿Olvidaste tu contraseña?',
	'msg.Help':'Ayuda',
	'msg.However.remember.passw':'Sin embargo recuerde su contraseña. Porque no hay forma de recuperarla !',
	'msg.Inc.date':'Fecha inclusión',
	'msg.instru.about':'Ya que es un',
	'msg.instru.crypt01':'El cifrado utilizado cumple con el estándar AES. Ref :',
	'msg.instru.crypt02':'El cifrado generado puede copiarse facilmente y ser interpretado más tarde.',
	'msg.instru.crypt03':'El cifrado se puede obtener de la consulta o de un archivo crypto mediante upload.',
	'msg.instru.crypt04':'Su base de sitio se almacena en Internet en los servidores del sistema. Nunca se pierde.',
	'msg.instru.crypt05':'Su base en el sitio sólo se puede acceder después de iniciar sesión.',
	'msg.instru.crypt06':'Su base local pertenece a la memoria del navegador (Chrome,  Inernet Explorer,  etc.). Si la memoria del navegador se borra o se utiliza otro navegador sus cryptos locales se pueden perder.',
	'msg.instru.crypt07':'su seguridad se basa únicamente en su contraseña. Así que leer las recomendaciones de no elegir contraseñas fáciles.',
	'msg.instru.crypt08':'Ahora cuidado : La contraseña es su seguridad.',
	'msg.instru.crypt09':'algoritmo de clave simétrica',
	'msg.instru.crypt10':'Del mismo modo para los otros artículos.',
	'msg.instru.crypt11':'Después de informada el crypto y contraseña pulse',
	'msg.instru.crypt12':'Los cryptos creados pueden ser enviadas por correo electrónico guardados en la máquina (local) o almacenados en el sitio para referencia futura.',
	'msg.instru.crypt13':'Sus cryptos se almacenan en un lugar seguro ? Mantenerlos en el sitio web o en cualquier correo electrónico o dispositivo que sólo usted tiene acceso.',
	'msg.instru.crypt14':'Registrar un correo electrónico o volver a iniciar sesión',
	'msg.instru.crypt15':'Si la contraseña es correcta y el texto se interpreta, se mostrará un botón para cambiar el texto  generando una nueva crypto.',
	'msg.instru.crypt16':'Si un crypto está siendo pegado y ya existe un crypto del mismo nombre, será solcitada confirmación.',
	'msg.instru.crypt17':'Si está utilizando la opción de "consulta" y pedir ayuda aparece la ayuda de la consulta.',
	'msg.instru.crypt18':'Cuidado con las contraseñas. La contraseña es su seguridad. No elija contraseñas demasiado fáciles.',
	'msg.instru.crypt19':'Esta aplicación le permite crear textos cifrados (cryptos).',
	'msg.instru.crypt20':'Deben ser informados un crypto válido y la contraseña para que el sistema pueda interpretar y mostrar el texto.',
	'msg.instru.crypt21':'Muestra lista de sus cryptos almacenada en la base local o sitio web.',
	'msg.instru.crypt22':'Punta : Para contraseñas elija una frase con mezcla de mayúsculas, minúsculas y caracteres especiales.',
	'msg.instru.crypt23':'Introduzca el crypto o cargar un archivo e introduzca su contraseña.',
	'msg.instru.crypt24':'Ingrese correo electrónico / contraseña o utilizar su login Facebook / Google',
	'msg.instru.crypt25':'Introducir una contraseña y un texto que desea cifrar y pulse <button type="button" class="btn btn-primary"><i class="fa fa-asterisk"></i> crypto</button>.',
	'msg.instru.crypt26':'¿ Ha pensado en mantener su información secreta ? Intercambio de mensajes privados con alguien ?',
	'msg.instru.crypt27':'El botón local/sitio permite cambiar la consulta entre las bases.',
	'msg.instru.crypt28':'Su nombre su fecha de nacimiento o números de documento son muy fáciles de adivinar.',
	'msg.instru.crypt29':'El sistema de ayuda es sensible al contexto.',
	'msg.instru.crypt30':'Para copiar un crypto local en el sitio : hacer consulta local seleccione el crypto deseada copiar realizar consultas en el sitio y pegar.',
	'msg.instru.crypt31':'permite crypto ser elegido para cortar copiar o eliminar. Siempre copiar y pegar entre las bases local y sitio.',
	'msg.instru.crypt32':'permiten el movimiento de cryptos entre las bases local y sitio.',
	'msg.instru.crypt33':'Se puede hacer la descarga de un archivo de texto que contiene el crypto generado. De esta manera se puede almacenar en su equipo o donde se prefiera. El archivo de texto se puede cambiar si lo desea copiar, cortar, pegar. etc. Sin embargo, la parte del texto que contiene la criptografía no debe ser cambiado  de lo contrario el sistema no puede interpretarlo.',
	'msg.instru.crypt34':'Que es un estándar bastante seguro.',
	'msg.instru.crypt35':'Guarda su cripto en la memoria del navegador. Si la memoria del navegador se borra o utilizar otro navegador cryptos locales se pueden perder.',
	'msg.instru.crypt36':'Se le enviará un correo electrónico a destiatário informado que contiene el crypto',
	'msg.instru.crypt37':'El sistema le pedirá un destinatario y se envía un correo electrónico con la criptografía. En el futuro simplemente copiar el crypto del correo electrónico para que el sistema pueda interpretarlo.',
	'msg.instru.crypt38':'Su texto será encriptado y protegido. La criptografía fue generada y puede ser:',
	'msg.instru.crypt39':'Todos los cryptos poseen una contraseña definida por usted.',
	'msg.instru.crypt40':'Esta es una forma práctica de almacenar su cryptos. No se almacenarán las contraseñas. Solamente el texto cifrado y el nombre introducido .',
	'msg.instru.crypt41':'Varios cryptos seleccionados se pueden cortar copiar y mover en un solo comando.',
	'msg.instru.crypt42':'Puedes guardar sus secretos. Crear un texto cifrado y "cerrarlo" con su contraseña.',
	'msg.instru.crypt43':'Para la generación de cryptos se utilizan técnicas modernas de',
	'msg.leng.':'tam.',
	'msg.local':'local',
	'msg.Login':'Login',
	'msg.Login.type':'Tipo de login',
	'msg.Message':'Nensaje',
	'msg.Name':'Nombre',
	'msg.New.psw':'Nueva contraseña',
	'msg.Objective':'Meta',
	'msg.OK':'OK',
	'msg.or':'O',
	'msg.Passw':'Contraseña',
	'msg.Passw.atu':'Contraseña actual',
	'msg.paste':'pegar',
	'msg.Personal.Profile':'Perfil Personal',
	'msg.protect':'proteger',
	'msg.Recommendation':'Recomendaciones',
	'msg.Reference':'Referencias',
	'msg.register':'registro',
	'msg.Return.to.login':'Volver a Login',
	'msg.Save.crypto.site':'Guardar su crypto en el sitio',
	'msg.save.local':'guarda local',
	'msg.Save.local':'Guarda local',
	'msg.save.site':'guarda en el sitio',
	'msg.Save.site':'Guarda en el sitio',
	'msg.selectbox':'La caja de selección',
	'msg.Send.by.email':'Enviar por email',
	'msg.send.email':'envía email',
	'msg.Signin.yourself':'Registre-se',
	'msg.site':'sitio',
	'msg.Social.login':'login social',
	'msg.Text':'Texto',
	'msg.The.buttons.for':'Los botones de',
	'msg.The.clean.button':'El botón de limpieza',
	'msg.To':'Para',
	'msg.to.update':'cambio',
	'msg.update':'cambio',
	'msg.upload':'upload',
	'msg.Use.accout.or.mail':'Utilizar sus cuentas o un email',
	'msg.Utilization':'Uso',
	'msg.warn.too.easy':'No utilice contraseñas muy fáciles.',
});
;
angular.module('resources.songs', ['restResource']);
angular.module('resources.songs').factory('Songs', ['restResource', function ($restResource) {
  var Songs = $restResource('songs');
  return Songs;
}]);

angular.module('resources.shell', ['restResource']);
angular.module('resources.shell').factory('Shell', ['restResource', function ($restResource) {
  var Shell = $restResource('shell');
  return Shell;
}]);

angular.module('resources.userlogged', ['restResource']);
angular.module('resources.userlogged').factory('UserLogged', ['restResource', function ($restResource) {
  var UserLogged = $restResource('userlogged','http://www.7chaos.com/api');
  return UserLogged;
}]);

angular.module('resources.profile', ['restResource']);
angular.module('resources.profile').factory('UserProfile', ['restResource', function ($restResource) {
  var UserProfile = $restResource('user/profile','http://www.7chaos.com/api');
  return UserProfile;
}]);

angular.module('resources.user', ['restResource']);
angular.module('resources.user').factory('User', ['restResource', function ($restResource) {
  var User = $restResource('adm/user','http://www.7chaos.com/api');
  return User;
}]);

angular.module('resources.contact', ['restResource']);
angular.module('resources.contact').factory('Contact', ['restResource', function ($restResource) {
  var Contact = $restResource('contact','http://www.7chaos.com/api');
  return Contact;
}]);
;angular.module('security.authorization', [])

.provider('secAuth', {

  requireAuthenticatedUser: ['secAuth', function(secAuth) {
    return secAuth.requireAuthenticatedUser();
  }],
  validRole: ['secAuth', function(secAuth) {
    return secAuth.validRole();
  }],
  $get: ['AppService', '$location', function(AppService, $location) {
    var service = {
      requireAuthenticatedUser: function() {
    	  return AppService.secGetUser();
      },
      validRole: function(roleList) {
    	  if (!roleList) {
    		  return false;
    	  }
    	  // transforma parametro enviado sempre num array mesmo que seja um unico string
    	  var roles = [];
    	  if (Array.isArray(roleList)) {
    		  roles = roleList;
    	  } else {
    		  roles.push(roleList);
    	  }
    	  // verifica se possui permissao - senao redireciona
    	  var hasRole = AppService.secHasRole(roles);
    	  if (!hasRole) {
    		  $location.path('/');
    	  }
    	  return hasRole;
      }
    };

    return service;
  }]
});
;angular.module('service.login', ['ui.bootstrap.modal', 'service.app']).factory('LoginService', 
		[ '$modal', 'AppService', '$location',
  function($modal,   AppService,   $location) {

	// The return API
	function LoginService() { }
	
	LoginService.dialog = function() {
		
		// supostamente chegou aqui por 403, entao melhor matar user
		AppService.secLogout();

		$location.path('/home/revalidate');
		
		return ;
	};
	
	// The return API
	return LoginService;
} ]);
;angular.module('service.modalbox', ['ui.bootstrap.modal']).factory('ModalBox', 
		[ '$http', '$modal', 
  function($http,   $modal) {

	// The return API (metodos=error/wait/notify/confirm/custom)
	function ModalBox() { }
	
	// Modais parametros : msg, header, size
	// size pode ser : null=normal, lg=large ou sm=small
	ModalBox.error = function (msg, header, size) {
		if (!header) {
			header = "Atenção";
		}
	    var modalInstance = $modal.open({
	      templateUrl: '/modal/modal.error.tpl.html',
	      controller: 'ModalBoxErrCtrl',
	      size: size,
	      resolve: { msg: function () { return msg; },
	    	  header: function () { return header; } }
	    });
	};
	
	
	ModalBox.wait = function (msg, header, size) {
		if (!header) {
			header = "Aguarde...";
		}
	    var modalInstance = $modal.open({
	      templateUrl: '/modal/modal.wait.tpl.html',
	      controller: 'ModalBoxWaitCtrl',
	      size: size,
	      resolve: { msg: function () { return msg; },
	    	  header: function () { return header; } }
	    });
	    
	};
	
	// Metodo para atualizar a barra de progresso da janela de wait
	// parametro : de 0 a 100
	ModalBox.waitSetProgress = function(progress) {
		// o callback desta funcao eh criado em ModalBoxWaitCtrl
	};
	
	ModalBox.notify = function (msg, header, size) {
		if (!header) {
			header = "Aviso";
		}
	    var modalInstance = $modal.open({
	      templateUrl: '/modal/modal.notify.tpl.html',
	      controller: 'ModalBoxNotifyCtrl',
	      size: size,
	      resolve: { msg: function () { return msg; },
	    	  header: function () { return header; } }
	    });
	};
	
	// parametros : msg body, string para header, size, callback OK, callback Cancel
	ModalBox.confirm = function (msg, header, size, onOk, onCancel) {
		if (!header) {
			header = "Confirmação";
		}
	    var modalInstance = $modal.open({
	      templateUrl: '/modal/modal.confirm.tpl.html',
	      controller: 'ModalBoxConfirmCtrl',
	      size: size,
	      resolve: { msg: function () { return msg; },
	    	  header: function () { return header; } }
	    }); //.result.then(onOk, onCancel);
	    
	    modalInstance.result.then(function () {
		      if (onOk) {
		    	  onOk();
		      }
		    }, function () {
		    	if (onCancel) {
		    		onCancel();
			      }
		    });
	};
	
	// parametros : objeto de configuracao (templateUrl, controller, size, resolve); 
	// function que recebera' objeto de retorno para OK;
	// function para cancel
	ModalBox.custom = function (objConfig, onOk, onCancel) {
		var modalInstance = $modal.open(objConfig);
		
		var env = this.findBootstrapEnvironment();
		// foco no 1o. input da tela modal
		window.setTimeout(function() {
			$(".modal-body").find(':input:enabled:visible:first').focus();
			// mobile : modal largura 100%
			if (env == 'xs') {
				$(".modal-dialog").css('width', '100%');
				$(".modal-dialog").css('margin', '0px');
			}
		}, 400 );
		
		if (onOk || onCancel) {
			modalInstance.result.then(onOk, onCancel);
		}
	};
	
	// Detecta environment view Bootstrap (xs < sm < md < lg)
	ModalBox.findBootstrapEnvironment = function() {
        var envs = ['xs', 'sm', 'md', 'lg'];

        $el = $('<div>');
        $el.appendTo($('body'));

        for (var i = envs.length - 1; i >= 0; i--) {
            var env = envs[i];

            $el.addClass('hidden-'+env);
            if ($el.is(':hidden')) {
                $el.remove();
                return env;
            }
        }
    };
    
	// The return API
	return ModalBox;
} ]);

angular.module('service.modalbox').controller('ModalBoxErrCtrl', 
		['$scope','$modalInstance', 'msg', 'header', 
function ($scope,  $modalInstance,   msg,   header) {
	  $scope.msg = msg;
	  $scope.header = header;
	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);

angular.module('service.modalbox').controller('ModalBoxWaitCtrl',
		['$scope','$modalInstance', 'msg', 'header', 'ModalBox',
function ($scope,  $modalInstance,   msg,   header,   ModalBox) {
	  $scope.msg = msg;
	  $scope.header = header;
	  $scope.dynamic = 0;
	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  $scope.setProgress = function(progress) {
		  $scope.dynamic = progress;
		  if (progress >= 100) {
			  setTimeout(function(){ $modalInstance.dismiss('cancel'); }, 1000);
		  }
		  $scope.$digest(); // força refresh na barra de progresso
	  };
	  ModalBox.waitSetProgress = $scope.setProgress;
}]);

angular.module('service.modalbox').controller('ModalBoxNotifyCtrl', 
		['$scope','$modalInstance', 'msg', 'header',
function ($scope,  $modalInstance,   msg,   header) {
	  $scope.msg = msg;
	  $scope.header = header;
	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);

angular.module('service.modalbox').controller('ModalBoxConfirmCtrl', 
		['$scope','$modalInstance', 'msg', 'header',
function ($scope,  $modalInstance,   msg,   header) {
	  $scope.msg = msg;
	  $scope.header = header;
	  $scope.msg = msg;
	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);

angular.module('service.modalbox').run(["$templateCache", 
   function($templateCache) { 
	$templateCache.put("/modal/modal.error.tpl.html",'<div class="modal-header dialog-header-error"><button type="button" class="close" ng-click="cancel()">&times;</button><h4 class="modal-title text-danger"><i class="fa fa-times-circle"></i> {{header}}</h4></div><div class="modal-body text-danger" ng-bind-html="renderHtml(msg)"></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()"> OK </button></div>');
	$templateCache.put("/modal/modal.wait.tpl.html",'<div class="modal-header dialog-header-wait"><button type="button" class="close" ng-click="cancel()">&times;</button><h4 class="modal-title text-danger"><i class="fa fa-clock-o"></i> {{header}}</h3></div><div class="modal-body"><span>{{renderHtml(msg)}}</span><div><div style="height:15px;"></div><div class="progress progress-striped active"><progressbar animate="true" value="dynamic" type="info"><b>{{dynamic}}%</b></progressbar></div></div></div>');
	$templateCache.put("/modal/modal.notify.tpl.html",'<div class="modal-header dialog-header-notify"><button type="button" class="close" ng-click="cancel()">&times;</button><h4 class="modal-title text-info"><i class="fa fa-info-circle"></i> {{header}}</h4></div><div class="modal-body text-info" ng-bind-html="renderHtml(msg)"></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()"> OK </button></div>');
	$templateCache.put("/modal/modal.confirm.tpl.html",'<div class="modal-header dialog-header-confirm"><button type="button" class="close" ng-click="cancel()">&times;</button><h4 class="modal-title"><i class="fa fa-check-square-o"></i> {{header}}</h4></div><div class="modal-body" ng-bind-html="renderHtml(msg)"></div><div class="modal-footer"><button class="btn btn-primary col-xs-4 pull-left" ng-click="ok()">OK</button><button class="btn btn-warning col-xs-4 pull-right" ng-click="cancel()">Cancela</button></div>');
}]);;/*
 ngProgress 1.0.6 - slim, site-wide progressbar for AngularJS
(C) 2013 - Victor Bjelkholm 
License: MIT 
Source: https://github.com/VictorBjelkholm/ngProgress 
 Date Compiled: 2014-08-27
*/
angular.module('ngProgress.provider', ['ngProgress.directive'])
    .provider('ngProgress', function () {
        'use strict';
        //Default values for provider
        this.autoStyle = true;
        this.count = 0;
        this.height = '2px';
        this.color = '#33CCFF'; // 'firebrick';

        this.$get = ['$document',
            '$window',
            '$compile',
            '$rootScope',
            '$timeout', function ($document, $window, $compile, $rootScope, $timeout) {
            var count = this.count,
                height = this.height,
                color = this.color,
                $scope = $rootScope,
                parent = $document.find('body')[0];

            // Compile the directive
            var progressbarEl = $compile('<ng-progress></ng-progress>')($scope);
            // Add the element to body
                parent.appendChild(progressbarEl[0]);
            // Set the initial height
            $scope.count = count;
            // If height or color isn't undefined, set the height, background-color and color.
            if (height !== undefined) {
                progressbarEl.eq(0).children().css('height', height);
            }
            if (color !== undefined) {
                progressbarEl.eq(0).children().css('background-color', color);
                progressbarEl.eq(0).children().css('color', color);
            }
            // The ID for the interval controlling start()
            var intervalCounterId = 0;
            var animation;
            return {
                // Starts the animation and adds between 0 - 5 percent to loading
                // each 400 milliseconds. Should always be finished with progressbar.complete()
                // to hide it
                start: function () {
                    // TODO Use requestAnimationFrame instead of setInterval
                    // https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame
                    this.show();
                    var self = this;
                    clearInterval(intervalCounterId);
                    intervalCounterId = setInterval(function () {
                        if (isNaN(count)) {
                            clearInterval(intervalCounterId);
                            count = 0;
                            self.hide();
                        } else {
                            var remaining = 100 - count;
                            count = count + (0.15 * Math.pow(1 - Math.sqrt(remaining), 2));
                            self.updateCount(count);
                        }
                    }, 200);
                },
                updateCount: function (new_count) {
                    $scope.count = new_count;
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                },
                // Sets the height of the progressbar. Use any valid CSS value
                // Eg '10px', '1em' or '1%'
                height: function (new_height) {
                    if (new_height !== undefined) {
                        height = new_height;
                        $scope.height = height;
                        if(!$scope.$$phase) {
                            $scope.$apply();
                        }
                    }
                    return height;
                },
                // Sets the color of the progressbar and it's shadow. Use any valid HTML
                // color
                color: function (new_color) {
                    if (new_color !== undefined) {
                        color = new_color;
                        $scope.color = color;
                        if(!$scope.$$phase) {
                            $scope.$apply();
                        }
                    }
                    return color;
                },
                hide: function () {
                    progressbarEl.children().css('opacity', '0');
                    var self = this;
                    self.animate(function () {
                        progressbarEl.children().css('width', '0%');
                        self.animate(function () {
                            self.show();
                        }, 500);
                    }, 500);
                },
                show: function () {
                    var self = this;
                    self.animate(function () {
                        progressbarEl.children().css('opacity', '1');
                    }, 100);
                },
                // Cancel any prior animations before running new ones.
                // Multiple simultaneous animations just look weird.
                animate: function(fn, time) {
                    if(animation) { $timeout.cancel(animation); }
                    animation = $timeout(fn, time);
                },
                // Returns on how many percent the progressbar is at. Should'nt be needed
                status: function () {
                    return count;
                },
                // Stops the progressbar at it's current location
                stop: function () {
                    clearInterval(intervalCounterId);
                },
                // Set's the progressbar percentage. Use a number between 0 - 100. 
                // If 100 is provided, complete will be called.
                set: function (new_count) {
                    this.show();
                    this.updateCount(new_count);
                    count = new_count;
                    clearInterval(intervalCounterId);
                    return count;
                },
                css: function (args) {
                    return progressbarEl.children().css(args);
                },
                // Resets the progressbar to percetage 0 and therefore will be hided after
                // it's rollbacked
                reset: function () {
                    clearInterval(intervalCounterId);
                    count = 0;
                    this.updateCount(count);
                    return 0;
                },
                // Jumps to 100% progress and fades away progressbar.
                complete: function () {
                    count = 100;
                    this.updateCount(count);
                    var self = this;
                    clearInterval(intervalCounterId);
                    $timeout(function () {
                        self.hide();
                        $timeout(function () {
                            count = 0;
                            self.updateCount(count);
                        }, 500);
                    }, 1000);
                    return count;
                },
                //set the parent of the directive, sometimes body is not sufficient
                setParent: function (newParent) {
                    if (newParent === null || newParent === undefined) {
                        throw new Error('Provide a valid parent of type HTMLElement');
                    }

                    if (parent !== null && parent !== undefined) {
                        parent.removeChild(progressbarEl[0]);
                    }

                    parent = newParent;
                    parent.appendChild(progressbarEl[0]);
                },
                getDomElement: function () {
                    return progressbarEl;
                }
            };
        }];

        this.setColor = function (color) {
            if (color !== undefined) {
                this.color = color;
            }

            return this.color;
        };

        this.setHeight = function (height) {
            if (height !== undefined) {
                this.height = height;
            }

            return this.height;
        };
    });
angular.module('ngProgress.directive', [])
    .directive('ngProgress', ["$window", "$rootScope", function ($window, $rootScope) {
        var directiveObj = {
            // Replace the directive
            replace: true,
            // Only use as a element
            restrict: 'E',
            link: function ($scope, $element, $attrs, $controller) {
                // Watch the count on the $rootScope. As soon as count changes to something that
                // isn't undefined or null, change the counter on $scope and also the width of
                // the progressbar. The same goes for color and height on the $rootScope
                $rootScope.$watch('count', function (newVal) {
                    if (newVal !== undefined || newVal !== null) {
                        $scope.counter = newVal;
                        $element.eq(0).children().css('width', newVal + '%');
                    }
                });
                $rootScope.$watch('color', function (newVal) {
                    if (newVal !== undefined || newVal !== null) {
                        $scope.color = newVal;
                        $element.eq(0).children().css('background-color', newVal);
                        $element.eq(0).children().css('color', newVal);
                    }
                });
                $rootScope.$watch('height', function (newVal) {
                    if (newVal !== undefined || newVal !== null) {
                        $scope.height = newVal;
                        $element.eq(0).children().css('height', newVal);
                    }
                });
            },
            // The actual html that will be used
            template: '<div id="ngProgress-container"><div id="ngProgress"></div></div>'
        };
        return directiveObj;
    }]);

angular.module('ngProgress', ['ngProgress.directive', 'ngProgress.provider']);;/*
 * Tratamento de timeout, 403, metodos padrao para $save, $delete, etc
 * */
angular.module('restResource', []).factory('restResource',
				['APP_CONFIG','$http','$q','LoginService','AppService','$location',
function (APP_CONFIG,  $http,  $q,  LoginService,  AppService,  $location) {

  function restResourceFactory(substantive,baseUrl) {

    var url = APP_CONFIG.baseUrl;
		if (baseUrl) { // rbz @@@ assume url do contrutor se informado
			url=baseUrl;
		}
    var defaultParams = {};

    var thenFactoryMethod = function (httpPromise, successcb, errorcb, isArray, isFilter) {
      var successFn = successcb || angular.noop;
      var errorFn = errorcb || angular.noop;

      if (typeof isFilter == 'undefined') {
    	  isFilter = false;
  		}

      return httpPromise.then(function (response) {
    	  if (!response) {
    		  return;
    	  }
    	  AppService.lockScreen(false);
        var result;
        if (isFilter) {
        	result = {pageableFilter: response.data.pageableFilter, list:[]};
        	if (response.data.list) {
        		for (var i = 0; i < response.data.list.length; i++) { // pageableFilter.totalRows
    	            result.list.push(new Resource(response.data.list[i]));
    	          }
        	}
        } else {
	        if (isArray) {
	          result = [];
	          for (var i1 = 0; i1 < response.data.length; i1++) {
	            result.push(new Resource(response.data[i1]));
	          }
	        } else {
	          //Resource rest full has rather peculiar way of reporting not-found items, I would expect 404 HTTP response status...
	          if (!response || !response.data || response.data === " null "){
	            return $q.reject({
	              code:'resource.notfound',
	              collection:substantive
	            });
	          } else {
	            result = new Resource(response.data);
	          }
	        }
        }
        successFn(result, response.status, response.headers, response.config);
        return result;
      }, function (response) {
    	  AppService.lockScreen(false);
    	  if(response){
    		  if (response.status == 403 || response.status == 401) {
    			  //LoginService.dialog();
						$location.path('/');
    		  }
    		  errorFn(response.data, response.status, response.headers, response.config);
    	  }
        return undefined;
      });
    };

    var Resource = function (data) {
      angular.extend(this, data);
    };

    // retorna lista sem filtro
    Resource.get = function (successcb, errorcb, isArray) {
			if (isArray===undefined) {
				isArray=true;
			}
    	AppService.lockScreen(true);
    	var httpPromise = $http.get(url.concat('/').concat(substantive) );
        return thenFactoryMethod(httpPromise, successcb, errorcb, isArray);
//      return Resource.query({}, cb, errorcb);
    };

    // assume que sera retornada uma LIST, se desejar utilizar este metodo para retornar
    // um objeto, passar parametro isList=FALSE
    Resource.queryPathVariable = function (pathVariable, successcb, errorcb, isList) {
    	AppService.lockScreen(true);
    	if (isList === undefined) {
    		isList = true;
    	}
      var httpPromise = $http.get(url.concat('/').concat(substantive).concat(pathVariable));
      return thenFactoryMethod(httpPromise, successcb, errorcb, isList);
    };

    // query com parametro object em json
    // TODO: podia deixar parametro no final opcional
    Resource.query = function (queryJson, successcb, errorcb) {
    	AppService.lockScreen(true);
      var params = angular.isObject(queryJson) ? {q:JSON.stringify(queryJson)} : {};
      var httpPromise = $http.get(url.concat('/').concat(substantive), {params:angular.extend({}, defaultParams, params)});
      return thenFactoryMethod(httpPromise, successcb, errorcb, true);
    };

    Resource.filter = function (filterObj, successcb, errorcb, substantiveCustom) {
    	AppService.lockScreen(true);
    	if (typeof filterObj.rowsPerPage == 'undefined') {
    		filterObj.rowsPerPage = APP_CONFIG.rowsPerPage; // assume qtd linhas constant
    	}
    	var params = angular.isObject(filterObj) ? {filters:JSON.stringify(filterObj)} : {};
    	var httpPromise;
    	if (substantiveCustom === undefined) {
    		httpPromise = $http.get(url.concat('/').concat(substantive).concat('/filter'), {params:angular.extend({}, defaultParams, params)});
    	} else {
    		httpPromise = $http.get(url.concat('/').concat(substantive).concat(substantiveCustom).concat('/filter'), {params:angular.extend({}, defaultParams, params)});
    	}
        return thenFactoryMethod(httpPromise, successcb, errorcb, false, true);
      };

//    Resource.filterCustom = function (filterObj,substantiveCustom , successcb, errorcb) {
//	  	if (typeof filterObj.rowsPerPage == 'undefined') {
//	  		filterObj.rowsPerPage = APP_CONFIG.rowsPerPage; // assume qtd linhas constant
//	  	}
//	  	var params = angular.isObject(filterObj) ? {filters:JSON.stringify(filterObj)} : {};
//	      var httpPromise = $http.get(url.concat('/').concat(substantive).concat(substantiveCustom).concat('/filter'), {params:angular.extend({}, defaultParams, params)});
//	      return thenFactoryMethod(httpPromise, successcb, errorcb, false, true);
//    };

    Resource.getById = function (id, successcb, errorcb) {
    	AppService.lockScreen(true);
      var httpPromise = $http.get(url.concat('/').concat(substantive) + '/' + id, {params:defaultParams});
      return thenFactoryMethod(httpPromise, successcb, errorcb);
    };

    Resource.getByIds = function (ids, successcb, errorcb) {
    	AppService.lockScreen(true);
      var qin = [];
      angular.forEach(ids, function (id) {
         qin.push({$oid: id});
      });
      return Resource.query({_id:{$in:qin}}, successcb, errorcb);
    };

    Resource.removeVariable = function (successcb, errorcb, pathDelete, id) {
    	AppService.lockScreen(true);
        var httpPromise = $http['delete'](url.concat('/').concat(substantive) + "/" + pathDelete + "/" + id, {params:defaultParams});
        return thenFactoryMethod(httpPromise, successcb, errorcb);
    };

    Resource.postData = function (pathVariable, data, successcb, errorcb, isArray) {
    	var httpPromise;
	  	httpPromise = $http.post(url.concat('/').concat(substantive).concat(pathVariable), data);
        return thenFactoryMethod(httpPromise, successcb, errorcb, isArray);
      };

	Resource.putData = function (pathVariable, data, successcb, errorcb) {
	  var httpPromise = $http.put(url.concat('/').concat(substantive).concat(pathVariable), data);
	  return thenFactoryMethod(httpPromise, successcb, errorcb);
	};

    Resource.removeAll = function (elements, successcb, errorcb) {
        	AppService.lockScreen(true);
        	var params = {list:JSON.stringify(elements)};
        	var httpPromise;
        	httpPromise = $http['delete'](url.concat('/').concat(substantive).concat('/deleteall'), {params:angular.extend({}, defaultParams, params)});
            return thenFactoryMethod(httpPromise, successcb, errorcb, false, false);
          };

    Resource.pagination = function (scope, result, fnRefresh, substantiveCustom) {
    	var thisResource = this;

    	if (!(scope.calcPagination)) {
    		scope.calcPagination = function (resultado) {
    			if(resultado){
    			  scope.currentPage = resultado.pageableFilter.page;
    			  scope.numPages = parseInt((resultado.pageableFilter.totalRows -1) / resultado.pageableFilter.rowsPerPage) + 1;
    			}
    		  };
    	}
    	if (!(scope.selectPage)) {
    		scope.selectPage = function(page){
    			result.pageableFilter.page = page;
    			thisResource.filter(result.pageableFilter, substantiveCustom).then(function(newResult) {
    				fnRefresh(newResult);
    				scope.calcPagination(newResult);
    			  });
    		};
    	}
    	scope.calcPagination(result);
    };

    //instance methods

    Resource.prototype.$id = function () {
      if (this.id) {
        return this.id;
      }
    };

    Resource.prototype.$postService = function (pathVariable, successcb, errorcb) {
    	AppService.lockScreen(true);
        var httpPromise = $http.post(url.concat('/').concat(substantive).concat('/').concat(pathVariable), this); // , {timeout:2000}
        return thenFactoryMethod(httpPromise, successcb, errorcb, false);
      };

    Resource.prototype.$save = function (successcb, errorcb) {
    	AppService.lockScreen(true);
      var httpPromise = $http.post(url.concat('/').concat(substantive), this); // , {params:defaultParams}
      return thenFactoryMethod(httpPromise, successcb, errorcb, false);
    };

    Resource.prototype.$saveAll = function (successcb, errorcb, elements) {
    	AppService.lockScreen(true);
        var httpPromise = $http.post(url.concat('/').concat(substantive).concat('/saveall'), elements);
        return thenFactoryMethod(httpPromise, successcb, errorcb);
      };

    Resource.prototype.$update = function (successcb, errorcb) {
    	AppService.lockScreen(true);
      var httpPromise = $http.put(url.concat('/').concat(substantive) + "/" + this.$id(), angular.extend({}, this, {_id:undefined})); // , {params:defaultParams}
      return thenFactoryMethod(httpPromise, successcb, errorcb);
    };

    Resource.prototype.$remove = function (successcb, errorcb) {
    	AppService.lockScreen(true);
      var httpPromise = $http['delete'](url.concat('/').concat(substantive) + "/" + this.$id()); // , {params:defaultParams}
      return thenFactoryMethod(httpPromise, successcb, errorcb);
    };

    Resource.prototype.$saveOrUpdate = function (successcb, errorcb) {
        if (this.$id()) {
          return this.$update(successcb, errorcb);
        } else {
          return this.$save(successcb, errorcb);
        }
      };

    return Resource;
  }
  return restResourceFactory;
}]);
;angular.module('service.rsa', []).factory('RsaService', 
		['$http',
function ($http) {

	// Code here will be linted with JSHint.
    /* jshint ignore:start */
	
	// The return API
	function RsaService() { }
	
	// "../vendor/rsa/jsbn.js" --------------------
	
	// Copyright (c) 2005  Tom Wu
	// All Rights Reserved.
	// See "LICENSE" for details.

	// Basic JavaScript BN library - subset useful for RSA encryption.

	// Bits per digit
	var dbits;

	// JavaScript engine analysis
	var canary = 0xdeadbeefcafe;
	var j_lm = ((canary&0xffffff)==0xefcafe);

	// (public) Constructor
	function BigInteger(a,b,c) {
	  if(a != null)
	    if("number" == typeof a) this.fromNumber(a,b,c);
	    else if(b == null && "string" != typeof a) this.fromString(a,256);
	    else this.fromString(a,b);
	}

	// return new, unset BigInteger
	function nbi() { return new BigInteger(null); }

	// am: Compute w_j += (x*this_i), propagate carries,
	// c is initial carry, returns final carry.
	// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
	// We need to select the fastest one that works in this environment.

	// am1: use a single mult and divide to get the high bits,
	// max digit bits should be 26 because
	// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
	function am1(i,x,w,j,c,n) {
	  while(--n >= 0) {
	    var v = x*this[i++]+w[j]+c;
	    c = Math.floor(v/0x4000000);
	    w[j++] = v&0x3ffffff;
	  }
	  return c;
	}
	// am2 avoids a big mult-and-extract completely.
	// Max digit bits should be <= 30 because we do bitwise ops
	// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
	function am2(i,x,w,j,c,n) {
	  var xl = x&0x7fff, xh = x>>15;
	  while(--n >= 0) {
	    var l = this[i]&0x7fff;
	    var h = this[i++]>>15;
	    var m = xh*l+h*xl;
	    l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
	    c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
	    w[j++] = l&0x3fffffff;
	  }
	  return c;
	}
	// Alternately, set max digit bits to 28 since some
	// browsers slow down when dealing with 32-bit numbers.
	function am3(i,x,w,j,c,n) {
	  var xl = x&0x3fff, xh = x>>14;
	  while(--n >= 0) {
	    var l = this[i]&0x3fff;
	    var h = this[i++]>>14;
	    var m = xh*l+h*xl;
	    l = xl*l+((m&0x3fff)<<14)+w[j]+c;
	    c = (l>>28)+(m>>14)+xh*h;
	    w[j++] = l&0xfffffff;
	  }
	  return c;
	}
	if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
	  BigInteger.prototype.am = am2;
	  dbits = 30;
	}
	else if(j_lm && (navigator.appName != "Netscape")) {
	  BigInteger.prototype.am = am1;
	  dbits = 26;
	}
	else { // Mozilla/Netscape seems to prefer am3
	  BigInteger.prototype.am = am3;
	  dbits = 28;
	}

	BigInteger.prototype.DB = dbits;
	BigInteger.prototype.DM = ((1<<dbits)-1);
	BigInteger.prototype.DV = (1<<dbits);

	var BI_FP = 52;
	BigInteger.prototype.FV = Math.pow(2,BI_FP);
	BigInteger.prototype.F1 = BI_FP-dbits;
	BigInteger.prototype.F2 = 2*dbits-BI_FP;

	// Digit conversions
	var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	var BI_RC = new Array();
	var rr,vv;
	rr = "0".charCodeAt(0);
	for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
	rr = "a".charCodeAt(0);
	for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	rr = "A".charCodeAt(0);
	for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

	function int2char(n) { return BI_RM.charAt(n); }
	function intAt(s,i) {
	  var c = BI_RC[s.charCodeAt(i)];
	  return (c==null)?-1:c;
	}

	// (protected) copy this to r
	function bnpCopyTo(r) {
	  for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
	  r.t = this.t;
	  r.s = this.s;
	}

	// (protected) set from integer value x, -DV <= x < DV
	function bnpFromInt(x) {
	  this.t = 1;
	  this.s = (x<0)?-1:0;
	  if(x > 0) this[0] = x;
	  else if(x < -1) this[0] = x+this.DV;
	  else this.t = 0;
	}

	// return bigint initialized to value
	function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

	// (protected) set from string and radix
	function bnpFromString(s,b) {
	  var k;
	  if(b == 16) k = 4;
	  else if(b == 8) k = 3;
	  else if(b == 256) k = 8; // byte array
	  else if(b == 2) k = 1;
	  else if(b == 32) k = 5;
	  else if(b == 4) k = 2;
	  else { this.fromRadix(s,b); return; }
	  this.t = 0;
	  this.s = 0;
	  var i = s.length, mi = false, sh = 0;
	  while(--i >= 0) {
	    var x = (k==8)?s[i]&0xff:intAt(s,i);
	    if(x < 0) {
	      if(s.charAt(i) == "-") mi = true;
	      continue;
	    }
	    mi = false;
	    if(sh == 0)
	      this[this.t++] = x;
	    else if(sh+k > this.DB) {
	      this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
	      this[this.t++] = (x>>(this.DB-sh));
	    }
	    else
	      this[this.t-1] |= x<<sh;
	    sh += k;
	    if(sh >= this.DB) sh -= this.DB;
	  }
	  if(k == 8 && (s[0]&0x80) != 0) {
	    this.s = -1;
	    if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
	  }
	  this.clamp();
	  if(mi) BigInteger.ZERO.subTo(this,this);
	}

	// (protected) clamp off excess high words
	function bnpClamp() {
	  var c = this.s&this.DM;
	  while(this.t > 0 && this[this.t-1] == c) --this.t;
	}

	// (public) return string representation in given radix
	function bnToString(b) {
	  if(this.s < 0) return "-"+this.negate().toString(b);
	  var k;
	  if(b == 16) k = 4;
	  else if(b == 8) k = 3;
	  else if(b == 2) k = 1;
	  else if(b == 32) k = 5;
	  else if(b == 4) k = 2;
	  else return this.toRadix(b);
	  var km = (1<<k)-1, d, m = false, r = "", i = this.t;
	  var p = this.DB-(i*this.DB)%k;
	  if(i-- > 0) {
	    if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
	    while(i >= 0) {
	      if(p < k) {
	        d = (this[i]&((1<<p)-1))<<(k-p);
	        d |= this[--i]>>(p+=this.DB-k);
	      }
	      else {
	        d = (this[i]>>(p-=k))&km;
	        if(p <= 0) { p += this.DB; --i; }
	      }
	      if(d > 0) m = true;
	      if(m) r += int2char(d);
	    }
	  }
	  return m?r:"0";
	}

	// (public) -this
	function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

	// (public) |this|
	function bnAbs() { return (this.s<0)?this.negate():this; }

	// (public) return + if this > a, - if this < a, 0 if equal
	function bnCompareTo(a) {
	  var r = this.s-a.s;
	  if(r != 0) return r;
	  var i = this.t;
	  r = i-a.t;
	  if(r != 0) return (this.s<0)?-r:r;
	  while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
	  return 0;
	}

	// returns bit length of the integer x
	function nbits(x) {
	  var r = 1, t;
	  if((t=x>>>16) != 0) { x = t; r += 16; }
	  if((t=x>>8) != 0) { x = t; r += 8; }
	  if((t=x>>4) != 0) { x = t; r += 4; }
	  if((t=x>>2) != 0) { x = t; r += 2; }
	  if((t=x>>1) != 0) { x = t; r += 1; }
	  return r;
	}

	// (public) return the number of bits in "this"
	function bnBitLength() {
	  if(this.t <= 0) return 0;
	  return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
	}

	// (protected) r = this << n*DB
	function bnpDLShiftTo(n,r) {
	  var i;
	  for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
	  for(i = n-1; i >= 0; --i) r[i] = 0;
	  r.t = this.t+n;
	  r.s = this.s;
	}

	// (protected) r = this >> n*DB
	function bnpDRShiftTo(n,r) {
	  for(var i = n; i < this.t; ++i) r[i-n] = this[i];
	  r.t = Math.max(this.t-n,0);
	  r.s = this.s;
	}

	// (protected) r = this << n
	function bnpLShiftTo(n,r) {
	  var bs = n%this.DB;
	  var cbs = this.DB-bs;
	  var bm = (1<<cbs)-1;
	  var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
	  for(i = this.t-1; i >= 0; --i) {
	    r[i+ds+1] = (this[i]>>cbs)|c;
	    c = (this[i]&bm)<<bs;
	  }
	  for(i = ds-1; i >= 0; --i) r[i] = 0;
	  r[ds] = c;
	  r.t = this.t+ds+1;
	  r.s = this.s;
	  r.clamp();
	}

	// (protected) r = this >> n
	function bnpRShiftTo(n,r) {
	  r.s = this.s;
	  var ds = Math.floor(n/this.DB);
	  if(ds >= this.t) { r.t = 0; return; }
	  var bs = n%this.DB;
	  var cbs = this.DB-bs;
	  var bm = (1<<bs)-1;
	  r[0] = this[ds]>>bs;
	  for(var i = ds+1; i < this.t; ++i) {
	    r[i-ds-1] |= (this[i]&bm)<<cbs;
	    r[i-ds] = this[i]>>bs;
	  }
	  if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
	  r.t = this.t-ds;
	  r.clamp();
	}

	// (protected) r = this - a
	function bnpSubTo(a,r) {
	  var i = 0, c = 0, m = Math.min(a.t,this.t);
	  while(i < m) {
	    c += this[i]-a[i];
	    r[i++] = c&this.DM;
	    c >>= this.DB;
	  }
	  if(a.t < this.t) {
	    c -= a.s;
	    while(i < this.t) {
	      c += this[i];
	      r[i++] = c&this.DM;
	      c >>= this.DB;
	    }
	    c += this.s;
	  }
	  else {
	    c += this.s;
	    while(i < a.t) {
	      c -= a[i];
	      r[i++] = c&this.DM;
	      c >>= this.DB;
	    }
	    c -= a.s;
	  }
	  r.s = (c<0)?-1:0;
	  if(c < -1) r[i++] = this.DV+c;
	  else if(c > 0) r[i++] = c;
	  r.t = i;
	  r.clamp();
	}

	// (protected) r = this * a, r != this,a (HAC 14.12)
	// "this" should be the larger one if appropriate.
	function bnpMultiplyTo(a,r) {
	  var x = this.abs(), y = a.abs();
	  var i = x.t;
	  r.t = i+y.t;
	  while(--i >= 0) r[i] = 0;
	  for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
	  r.s = 0;
	  r.clamp();
	  if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
	}

	// (protected) r = this^2, r != this (HAC 14.16)
	function bnpSquareTo(r) {
	  var x = this.abs();
	  var i = r.t = 2*x.t;
	  while(--i >= 0) r[i] = 0;
	  for(i = 0; i < x.t-1; ++i) {
	    var c = x.am(i,x[i],r,2*i,0,1);
	    if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
	      r[i+x.t] -= x.DV;
	      r[i+x.t+1] = 1;
	    }
	  }
	  if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
	  r.s = 0;
	  r.clamp();
	}

	// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
	// r != q, this != m.  q or r may be null.
	function bnpDivRemTo(m,q,r) {
	  var pm = m.abs();
	  if(pm.t <= 0) return;
	  var pt = this.abs();
	  if(pt.t < pm.t) {
	    if(q != null) q.fromInt(0);
	    if(r != null) this.copyTo(r);
	    return;
	  }
	  if(r == null) r = nbi();
	  var y = nbi(), ts = this.s, ms = m.s;
	  var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
	  if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
	  else { pm.copyTo(y); pt.copyTo(r); }
	  var ys = y.t;
	  var y0 = y[ys-1];
	  if(y0 == 0) return;
	  var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
	  var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
	  var i = r.t, j = i-ys, t = (q==null)?nbi():q;
	  y.dlShiftTo(j,t);
	  if(r.compareTo(t) >= 0) {
	    r[r.t++] = 1;
	    r.subTo(t,r);
	  }
	  BigInteger.ONE.dlShiftTo(ys,t);
	  t.subTo(y,y);	// "negative" y so we can replace sub with am later
	  while(y.t < ys) y[y.t++] = 0;
	  while(--j >= 0) {
	    // Estimate quotient digit
	    var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
	    if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
	      y.dlShiftTo(j,t);
	      r.subTo(t,r);
	      while(r[i] < --qd) r.subTo(t,r);
	    }
	  }
	  if(q != null) {
	    r.drShiftTo(ys,q);
	    if(ts != ms) BigInteger.ZERO.subTo(q,q);
	  }
	  r.t = ys;
	  r.clamp();
	  if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
	  if(ts < 0) BigInteger.ZERO.subTo(r,r);
	}

	// (public) this mod a
	function bnMod(a) {
	  var r = nbi();
	  this.abs().divRemTo(a,null,r);
	  if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
	  return r;
	}

	// Modular reduction using "classic" algorithm
	function Classic(m) { this.m = m; }
	function cConvert(x) {
	  if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
	  else return x;
	}
	function cRevert(x) { return x; }
	function cReduce(x) { x.divRemTo(this.m,null,x); }
	function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
	function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

	Classic.prototype.convert = cConvert;
	Classic.prototype.revert = cRevert;
	Classic.prototype.reduce = cReduce;
	Classic.prototype.mulTo = cMulTo;
	Classic.prototype.sqrTo = cSqrTo;

	// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
	// justification:
//	         xy == 1 (mod m)
//	         xy =  1+km
	//   xy(2-xy) = (1+km)(1-km)
	// x[y(2-xy)] = 1-k^2m^2
	// x[y(2-xy)] == 1 (mod m^2)
	// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
	// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
	// JS multiply "overflows" differently from C/C++, so care is needed here.
	function bnpInvDigit() {
	  if(this.t < 1) return 0;
	  var x = this[0];
	  if((x&1) == 0) return 0;
	  var y = x&3;		// y == 1/x mod 2^2
	  y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
	  y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
	  y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
	  // last step - calculate inverse mod DV directly;
	  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
	  y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
	  // we really want the negative inverse, and -DV < y < DV
	  return (y>0)?this.DV-y:-y;
	}

	// Montgomery reduction
	function Montgomery(m) {
	  this.m = m;
	  this.mp = m.invDigit();
	  this.mpl = this.mp&0x7fff;
	  this.mph = this.mp>>15;
	  this.um = (1<<(m.DB-15))-1;
	  this.mt2 = 2*m.t;
	}

	// xR mod m
	function montConvert(x) {
	  var r = nbi();
	  x.abs().dlShiftTo(this.m.t,r);
	  r.divRemTo(this.m,null,r);
	  if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
	  return r;
	}

	// x/R mod m
	function montRevert(x) {
	  var r = nbi();
	  x.copyTo(r);
	  this.reduce(r);
	  return r;
	}

	// x = x/R mod m (HAC 14.32)
	function montReduce(x) {
	  while(x.t <= this.mt2)	// pad x so am has enough room later
	    x[x.t++] = 0;
	  for(var i = 0; i < this.m.t; ++i) {
	    // faster way of calculating u0 = x[i]*mp mod DV
	    var j = x[i]&0x7fff;
	    var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
	    // use am to combine the multiply-shift-add into one call
	    j = i+this.m.t;
	    x[j] += this.m.am(0,u0,x,i,0,this.m.t);
	    // propagate carry
	    while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
	  }
	  x.clamp();
	  x.drShiftTo(this.m.t,x);
	  if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
	}

	// r = "x^2/R mod m"; x != r
	function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

	// r = "xy/R mod m"; x,y != r
	function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

	Montgomery.prototype.convert = montConvert;
	Montgomery.prototype.revert = montRevert;
	Montgomery.prototype.reduce = montReduce;
	Montgomery.prototype.mulTo = montMulTo;
	Montgomery.prototype.sqrTo = montSqrTo;

	// (protected) true iff this is even
	function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

	// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
	function bnpExp(e,z) {
	  if(e > 0xffffffff || e < 1) return BigInteger.ONE;
	  var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
	  g.copyTo(r);
	  while(--i >= 0) {
	    z.sqrTo(r,r2);
	    if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
	    else { var t = r; r = r2; r2 = t; }
	  }
	  return z.revert(r);
	}

	// (public) this^e % m, 0 <= e < 2^32
	function bnModPowInt(e,m) {
	  var z;
	  if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
	  return this.exp(e,z);
	}

	// protected
	BigInteger.prototype.copyTo = bnpCopyTo;
	BigInteger.prototype.fromInt = bnpFromInt;
	BigInteger.prototype.fromString = bnpFromString;
	BigInteger.prototype.clamp = bnpClamp;
	BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
	BigInteger.prototype.drShiftTo = bnpDRShiftTo;
	BigInteger.prototype.lShiftTo = bnpLShiftTo;
	BigInteger.prototype.rShiftTo = bnpRShiftTo;
	BigInteger.prototype.subTo = bnpSubTo;
	BigInteger.prototype.multiplyTo = bnpMultiplyTo;
	BigInteger.prototype.squareTo = bnpSquareTo;
	BigInteger.prototype.divRemTo = bnpDivRemTo;
	BigInteger.prototype.invDigit = bnpInvDigit;
	BigInteger.prototype.isEven = bnpIsEven;
	BigInteger.prototype.exp = bnpExp;

	// public
	BigInteger.prototype.toString = bnToString;
	BigInteger.prototype.negate = bnNegate;
	BigInteger.prototype.abs = bnAbs;
	BigInteger.prototype.compareTo = bnCompareTo;
	BigInteger.prototype.bitLength = bnBitLength;
	BigInteger.prototype.mod = bnMod;
	BigInteger.prototype.modPowInt = bnModPowInt;

	// "constants"
	BigInteger.ZERO = nbv(0);
	BigInteger.ONE = nbv(1);
	
	// "../vendor/rsa/prng4.js" --------------------
	
	// prng4.js - uses Arcfour as a PRNG

	function Arcfour() {
	  this.i = 0;
	  this.j = 0;
	  this.S = new Array();
	}

	// Initialize arcfour context from key, an array of ints, each from [0..255]
	function ARC4init(key) {
	  var i, j, t;
	  for(i = 0; i < 256; ++i)
	    this.S[i] = i;
	  j = 0;
	  for(i = 0; i < 256; ++i) {
	    j = (j + this.S[i] + key[i % key.length]) & 255;
	    t = this.S[i];
	    this.S[i] = this.S[j];
	    this.S[j] = t;
	  }
	  this.i = 0;
	  this.j = 0;
	}

	function ARC4next() {
	  var t;
	  this.i = (this.i + 1) & 255;
	  this.j = (this.j + this.S[this.i]) & 255;
	  t = this.S[this.i];
	  this.S[this.i] = this.S[this.j];
	  this.S[this.j] = t;
	  return this.S[(t + this.S[this.i]) & 255];
	}

	Arcfour.prototype.init = ARC4init;
	Arcfour.prototype.next = ARC4next;

	// Plug in your RNG constructor here
	function prng_newstate() {
	  return new Arcfour();
	}

	// Pool size must be a multiple of 4 and greater than 32.
	// An array of bytes the size of the pool will be passed to init()
	var rng_psize = 256;
	
	// "../vendor/rsa/rng.js" --------------------
	
	// Random number generator - requires a PRNG backend, e.g. prng4.js

	// For best results, put code like
	// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
	// in your main HTML document.

	var rng_state;
	var rng_pool;
	var rng_pptr;

	// Mix in a 32-bit integer into the pool
	function rng_seed_int(x) {
	  rng_pool[rng_pptr++] ^= x & 255;
	  rng_pool[rng_pptr++] ^= (x >> 8) & 255;
	  rng_pool[rng_pptr++] ^= (x >> 16) & 255;
	  rng_pool[rng_pptr++] ^= (x >> 24) & 255;
	  if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
	}

	// Mix in the current time (w/milliseconds) into the pool
	function rng_seed_time() {
	  rng_seed_int(new Date().getTime());
	}

	// Initialize the pool with junk if needed.
	if(rng_pool == null) {
	  rng_pool = new Array();
	  rng_pptr = 0;
	  var t;
	  if(window.crypto && window.crypto.getRandomValues) {
	    // Use webcrypto if available
	    var ua = new Uint8Array(32);
	    window.crypto.getRandomValues(ua);
	    for(t = 0; t < 32; ++t)
	      rng_pool[rng_pptr++] = ua[t];
	  }
	  if(navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
	    // Extract entropy (256 bits) from NS4 RNG if available
	    var z = window.crypto.random(32);
	    for(t = 0; t < z.length; ++t)
	      rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
	  }  
	  while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
	    t = Math.floor(65536 * Math.random());
	    rng_pool[rng_pptr++] = t >>> 8;
	    rng_pool[rng_pptr++] = t & 255;
	  }
	  rng_pptr = 0;
	  rng_seed_time();
	  //rng_seed_int(window.screenX);
	  //rng_seed_int(window.screenY);
	}

	function rng_get_byte() {
	  if(rng_state == null) {
	    rng_seed_time();
	    rng_state = prng_newstate();
	    rng_state.init(rng_pool);
	    for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
	      rng_pool[rng_pptr] = 0;
	    rng_pptr = 0;
	    //rng_pool = null;
	  }
	  // TODO: allow reseeding after first request
	  return rng_state.next();
	}

	function rng_get_bytes(ba) {
	  var i;
	  for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
	}

	function SecureRandom() {}

	SecureRandom.prototype.nextBytes = rng_get_bytes;
	
	// "../vendor/rsa/rsa.js" --------------------
	
	// Depends on jsbn.js and rng.js

	// Version 1.1: support utf-8 encoding in pkcs1pad2

	// convert a (hex) string to a bignum object
	function parseBigInt(str,r) {
	  return new BigInteger(str,r);
	}

	function linebrk(s,n) {
	  var ret = "";
	  var i = 0;
	  while(i + n < s.length) {
	    ret += s.substring(i,i+n) + "\n";
	    i += n;
	  }
	  return ret + s.substring(i,s.length);
	}

	function byte2Hex(b) {
	  if(b < 0x10)
	    return "0" + b.toString(16);
	  else
	    return b.toString(16);
	}

	// PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint
	function pkcs1pad2(s,n) {
	  if(n < s.length + 11) { // TODO: fix for utf-8
	    alert("Message too long for RSA");
	    return null;
	  }
	  var ba = new Array();
	  var i = s.length - 1;
	  while(i >= 0 && n > 0) {
	    var c = s.charCodeAt(i--);
	    if(c < 128) { // encode using utf-8
	      ba[--n] = c;
	    }
	    else if((c > 127) && (c < 2048)) {
	      ba[--n] = (c & 63) | 128;
	      ba[--n] = (c >> 6) | 192;
	    }
	    else {
	      ba[--n] = (c & 63) | 128;
	      ba[--n] = ((c >> 6) & 63) | 128;
	      ba[--n] = (c >> 12) | 224;
	    }
	  }
	  ba[--n] = 0;
	  var rng = new SecureRandom();
	  var x = new Array();
	  while(n > 2) { // random non-zero pad
	    x[0] = 0;
	    while(x[0] == 0) rng.nextBytes(x);
	    ba[--n] = x[0];
	  }
	  ba[--n] = 2;
	  ba[--n] = 0;
	  return new BigInteger(ba);
	}

	// "empty" RSA key constructor
	function RSAKey() {
	  this.n = null;
	  this.e = 0;
	  this.d = null;
	  this.p = null;
	  this.q = null;
	  this.dmp1 = null;
	  this.dmq1 = null;
	  this.coeff = null;
	}

	// Set the public key fields N and e from hex strings
	function RSASetPublic(N,E) {
	  if(N != null && E != null && N.length > 0 && E.length > 0) {
	    this.n = parseBigInt(N,16);
	    this.e = parseInt(E,16);
	  }
	  else
	    alert("Invalid RSA public key");
	}

	// Perform raw public operation on "x": return x^e (mod n)
	function RSADoPublic(x) {
	  return x.modPowInt(this.e, this.n);
	}

	// Return the PKCS#1 RSA encryption of "text" as an even-length hex string
	function RSAEncrypt(text) {
	  var m = pkcs1pad2(text,(this.n.bitLength()+7)>>3);
	  if(m == null) return null;
	  var c = this.doPublic(m);
	  if(c == null) return null;
	  var h = c.toString(16);
	  if((h.length & 1) == 0) return h; else return "0" + h;
	}

	// Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
	//function RSAEncryptB64(text) {
	//  var h = this.encrypt(text);
	//  if(h) return hex2b64(h); else return null;
	//}

	// protected
	RSAKey.prototype.doPublic = RSADoPublic;

	// public
	RSAKey.prototype.setPublic = RSASetPublic;
	RSAKey.prototype.encrypt = RSAEncrypt;
	//RSAKey.prototype.encrypt_b64 = RSAEncryptB64;
	
	// "../vendor/rsa/base64.js" --------------------
	
	var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var b64padchar="=";

	function hex2b64(h) {
	  var i;
	  var c;
	  var ret = "";
	  for(i = 0; i+3 <= h.length; i+=3) {
	    c = parseInt(h.substring(i,i+3),16);
	    ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
	  }
	  if(i+1 == h.length) {
	    c = parseInt(h.substring(i,i+1),16);
	    ret += b64map.charAt(c << 2);
	  }
	  else if(i+2 == h.length) {
	    c = parseInt(h.substring(i,i+2),16);
	    ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
	  }
	  while((ret.length & 3) > 0) ret += b64padchar;
	  return ret;
	}

	// convert a base64 string to hex
	function b64tohex(s) {
	  var ret = ""
	  var i;
	  var k = 0; // b64 state, 0-3
	  var slop;
	  for(i = 0; i < s.length; ++i) {
	    if(s.charAt(i) == b64padchar) break;
	    v = b64map.indexOf(s.charAt(i));
	    if(v < 0) continue;
	    if(k == 0) {
	      ret += int2char(v >> 2);
	      slop = v & 3;
	      k = 1;
	    }
	    else if(k == 1) {
	      ret += int2char((slop << 2) | (v >> 4));
	      slop = v & 0xf;
	      k = 2;
	    }
	    else if(k == 2) {
	      ret += int2char(slop);
	      ret += int2char(v >> 2);
	      slop = v & 3;
	      k = 3;
	    }
	    else {
	      ret += int2char((slop << 2) | (v >> 4));
	      ret += int2char(v & 0xf);
	      k = 0;
	    }
	  }
	  if(k == 1)
	    ret += int2char(slop << 2);
	  return ret;
	}

	// convert a base64 string to a byte/number array
	function b64toBA(s) {
	  //piggyback on b64tohex for now, optimize later
	  var h = b64tohex(s);
	  var i;
	  var a = new Array();
	  for(i = 0; 2*i < h.length; ++i) {
	    a[i] = parseInt(h.substring(2*i,2*i+2),16);
	  }
	  return a;
	}
	
	// Definicioes do servico :
	var rsaObj = {};
	rsaObj = {n: {}, e: {}, ciphertext: {}, cipherb64: {}};
	// Modulus
	rsaObj.n.value="D08BE7E9AA044A263FA49A511C2ED6EA266A3D8480E6B25A4A0C3C220AB4441059FE935085E188F5CEAE70F89A5249F76939C7CDAEA3407032E2F6DD4A24F999";
	rsaObj.e.value="10001";
	
	// Criptografia RSA
	RsaService.encrypt = function(texto) {
		var rsa = new RSAKey();
		rsa.setPublic(rsaObj.n.value, rsaObj.e.value);
		var res = rsa.encrypt(texto);
		
		if(res) {
			rsaObj.cipherb64.value = linebrk(hex2b64(res), 64);
			return rsaObj.cipherb64.value;
		} else {
			console.log("ERRO crypt");
			return null;
		}
	};
	
	// The return API
	return RsaService;
	
	// Code here will be ignored by JSHint.
	/* jshint ignore:end */
} ]);;// intercepta todo request / response http para colocar header de sessionId
// ou ler header proveniente do back-end de autenticacao
// ou validar 403
angular.module('Commom.Factory', []).factory('securityInterceptor',
				['$log','$q',
function( $log,  $q) {

		// The return API
		var securityInterceptor = {
			request: function(config) {
				return config || $q.when(config);
			},

			requestError: function(rejection) {
				return $q.reject(rejection);
			},

			response: function(response) {
				return response || $q.when(response);
			},

			responseError: function(rejection) {
				if (rejection.status == 401 && rejection.config.url.indexOf('/api/userlogged/login')>=0) {
					return $q.reject(rejection);
				}
				if (rejection.status == 403 || rejection.status == 401) {
          	return $q.reject(rejection);
          }
        return $q.reject(rejection);
			}
		};

		return securityInterceptor;
	}]);
;angular.module('service.app', ['ngProgress.provider']).factory('AppService',
				['$http', '$compile','$interpolate','$sce','ModalBox','ngProgress','MSG_PT','MSG_EN','MSG_ES','LITERAL_PT','LITERAL_EN','LITERAL_ES',
function ($http,   $compile,  $interpolate,  $sce,  ModalBox,  ngProgress,  MSG_PT,  MSG_EN,  MSG_ES,  LITERAL_PT,  LITERAL_EN,  LITERAL_ES) {

	// The return API
	function AppService() { }

	// Carrega template no elemento DOM informado e vincula ao scope.
	AppService.loadTpl = function(tplName, $element, $scope) {
		$http({method: 'GET', url: tplName}).
	    success(function(result, status, headers, config) {
	    	$element.html(result).show();
			$compile($element.contents())($scope);
	    }).
	    error(function(data, status, headers, config) {
	      console.log("ERROR AppService.loadTpl [http Get] template\r\ntplName=" + tplName);
	      console.log("status=" + status);
	      $element.html(data);
	    });
	};

	// procura indice de um objeto num array
	// parametros : o array, a propriedade procurada, o valor procurado
	// retorno: indice encontrado ou -1 se nao encontrado
	AppService.indexOfPropertyValue = function(array, prop, value){
		if (!(array instanceof Array)) {
			return -1;
		}
	      for (var index = 0; index < array.length; index++){
	        if (prop in array[index]){
	          if (array[index][prop] == value){
	            return index;
	          }
	        }
	      }
	      return -1;
	    };

	// Coloca um layer transparente protetor em toda tela; Param: true/false
	AppService.lockScreen = function (lockIt) {
		if (lockIt) {
			if (!AppService.countLock) {
				AppService.countLock=0;
			}
			AppService.countLock++;
			ngProgress.start();
			AppService.$lock = $('<div>');
			AppService.$lock.appendTo($('body'));
			AppService.$lock.css({'position': 'absolute','top':'0','left':'0',
	        	'width':'100%','height': $(document).height() + 'px',
	        	'background-color':'rgba(0,0,0,0.01)','z-index':'999999999999'});
		} else {
			AppService.countLock--;
			if (AppService.countLock <= 0) {
				try {
					AppService.unlockScreen();
				} catch (err) {}
			}
		}
	};

  AppService.unlockScreen=function(){
		AppService.countLock=0;
		ngProgress.complete();
		AppService.$lock.remove();
	};

	// Detecta environment view Bootstrap (xs < sm < md < lg)
    AppService.findBootstrapEnvironment = function() {
        var envs = ['xs', 'sm', 'md', 'lg'];

        $el = $('<div>');
        $el.appendTo($('body'));

        for (var i = envs.length - 1; i >= 0; i--) {
            var env = envs[i];

            $el.addClass('hidden-'+env);
            if ($el.is(':hidden')) {
                $el.remove();
                return env;
            }
        }
    };

	// Emite mensagem notificacao (plugin jquery Notify.js)
	// parametros : 1=cod mensagem 2=success/info/warn/error, 3=properties para substituicao, 4=elemento (default=navBar)
	AppService.notify = function (codMsg, level, properties, element) {
		var msg;
		msg = MSG_PT[codMsg];
		if (!msg) {
			msg="msg.undefined";
		}
		var msgFinal = msg;
		if (properties) {
			msgFinal = $interpolate(msg)(properties);
		}
		if (!level) {
			level = "warn";
		}

		// se mobile: ModalBox, senao Notify.js
		var env = this.findBootstrapEnvironment();
		if (env == 'xs') {
			switch (level) {
			case "success":
				ModalBox.notify(msgFinal,"Aviso","sm");
		        break;
			case "info":
				ModalBox.notify(msgFinal,"Atenção","sm");
		        break;
			case "warn":
				ModalBox.notify(msgFinal,"Aviso","sm");
		        break;
			case "error":
				ModalBox.error(msgFinal,"Atenção","sm");
		        break;
			}
			return;
		}

		if (element) {
			$(element).notify(msgFinal, { style: 'bootstrap', position : "bottom right", className : level });
		} else {
			$(".navbar").notify(msgFinal, { style: 'bootstrap', position : "bottom right", className : level });
		}
////	$.notify.defaults( {globalPosition: 'bottom left'} );
//		$.notify(msgFinal, level);
	};


	// Interpreta mensagem notificacao (sem exibi-la)
	// parametros : 1=cod mensagem 2=properties para substituicao
	AppService.msg = function (codMsg, properties) {
		var msg = MSG_PT[codMsg];
		if (!msg) {
			return;
		}
		var msgFinal = msg;
		if (properties) {
			msgFinal = $interpolate(msg)(properties);
		}
		return msgFinal;
	};

	// para poder exibir mensagens formatadas em html
	AppService.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

	// Funcoes de seguranca
    AppService.secGetUser = function() {
    	if (AppService.user) {
			return AppService.user;
		} else {
			AppService.user = JSON.parse(localStorage.getItem("user"));
			return AppService.user;
		}
    };

    AppService.secSetUser = function(user) {
    	AppService.user = user;
    	if (localStorage) {
    		localStorage.setItem("user", JSON.stringify(user));
    	}
		if (user.uuid) {
			$http.defaults.headers.common['X-Auth-Token'] = angular.copy(user.uuid);
		}
    };

    AppService.secLogout = function() {
    	if (localStorage) {
    		localStorage.removeItem("user");
    	}
		AppService.user = null;
		delete $http.defaults.headers.common['X-Auth-Token'];
    };

	AppService.secIsLogged = function() {
		if (AppService.secGetUser()) {
			return true;
		} else {
			return false;
		}
	};
	AppService.secGetUserName = function () {
		if (!AppService.secGetUser()) {
			return null;
		}
		var loginType = AppService.secGetUser().loginType;
		var username = "logged";
//		if (loginType == 0) { // email
//			username = AppService.secGetUser().login.substring(0,AppService.secGetUser().login.indexOf("@"));
//		}
//		if (loginType == 1 || loginType == 2) { // oauths
			username = AppService.secGetUser().givenName;
//		}
		return username;
	};
	// verifica se possui ALGUMA das authorities (roles) informadas. Param=uma role ou uma lista de roles
	AppService.secHasRole = function(roles) {
		if (!AppService.secGetUser()) {
			return false;
		}
		var roleList = [];
		if (Array.isArray(roles)) {
			for (var i=0; i<roles.length; i++) {
				roleList.push(roles[i]);
			}
		} else {
			roleList.push(roles);
		}
		for (var k=0; k<roleList.length; k++) {
			for (var j=0; j<AppService.secGetUser().authorities.length; j++) {
				if (roleList[k]==AppService.secGetUser().authorities[j].authority) {
					return true;
				}
			}
		}
		return false;
	};

	// recuperar configurações
	AppService.getConfiguration = function() {
		if (AppService.configuration) {
			return AppService.configuration;
		} else {
			var configuration = localStorage.getItem("configuration");
			if (configuration) {
				AppService.configuration = JSON.parse(configuration);
				return AppService.configuration;
			} else {
				configuration = {language:navigator.language, metricSystem:true, dateFormat:0};
				// somente EUA
				if (configuration.language.toLowerCase() == 'en-us') {
					configuration.metricSystem = false;
					configuration.dateFormat = 1;
				}
				AppService.setConfiguration(configuration);
				return configuration;
			}
		}
	};

	// armazenar configurações
	AppService.setConfiguration = function(configuration) {
		AppService.configuration = configuration;
		if (localStorage) {
			localStorage.setItem("configuration", JSON.stringify(configuration));
		}
	};

	AppService.i18n = function(code, properties) { // @@@
		var userLang = 'PT'; //AppService.secGetUser().configuration.language;

		var messages = LITERAL_PT;

		switch (userLang) {
		case 'EN':
			messages = LITERAL_EN;
			break;
		case 'ES':
			messages = LITERAL_ES;
			break;
		default:
			break;
		}

		var msgFinal = messages[code];
		if (!msgFinal){msgFinal = "???"+code;}
		if (properties) {
			msgFinal = $interpolate(msg)(properties);
		}
		return msgFinal;
	};

	// The return API
	return AppService;
} ]);
;angular.module('service.wsconnect', ['service.app']).factory('WSService', 
		[ 'AppService', '$location',
function ( AppService,   $location) {

	// The return API
	function WSService() { }
	
	WSService.connection=null;

	WSService.connect = function() {
		var wsuri = "wss://api.poloniex.com";
		if (!WSService.connection) {
			WSService.connection = new autobahn.Connection({url:wsuri,realm:"realm1"});
		}
		
		return connection;
	};
	
	// The return API
	return WSService;
} ]);
