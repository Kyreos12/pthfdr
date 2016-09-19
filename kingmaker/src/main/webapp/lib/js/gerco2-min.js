/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)
},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()
};
m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)
},pushStack:function(a){var b=m.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a,b){return m.each(this,a,b)
},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(d.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(e=arguments[h])){for(d in e){a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c))
}}}return g
},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===m.type(a)
},isArray:Array.isArray||function(a){return"array"===m.type(a)
},isWindow:function(a){return null!=a&&a==a.window
},isNumeric:function(a){return !m.isArray(a)&&a-parseFloat(a)>=0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},isPlainObject:function(a){var b;
if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a)){return !1
}try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}if(k.ownLast){for(b in a){return j.call(a,b)
}}for(b in a){}return void 0===b||j.call(a,b)
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a
},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);
if(c){if(g){for(;
f>e;
e++){if(d=b.apply(a[e],c),d===!1){break
}}}else{for(e in a){if(d=b.apply(a[e],c),d===!1){break
}}}}else{if(g){for(;
f>e;
e++){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}else{for(e in a){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}}return a
},trim:function(a){return null==a?"":(a+"").replace(n,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
},inArray:function(a,b,c){var d;
if(b){if(g){return g.call(b,a,c)
}for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;
d>c;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,b){var c=+b.length,d=0,e=a.length;
while(c>d){a[e++]=b[d++]
}if(c!==c){while(void 0!==b[d]){a[e++]=b[d++]
}}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];
if(h){for(;
g>f;
f++){d=b(a[f],f,c),null!=d&&i.push(d)
}}else{for(f in a){d=b(a[f],f,c),null!=d&&i.push(d)
}}return e.apply([],i)
},guid:1,proxy:function(a,b){var c,e,f;
return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))
},e.guid=a.guid=a.guid||m.guid++,e):void 0
},now:function(){return +new Date
},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()
});
function r(a){var b=a.length,c=m.type(a);
return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0
},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;
c>b;
b++){if(this[b]===a){return b
}}return -1
},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
};
try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType
}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;
if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a){return d
}if(1!==(k=b.nodeType)&&9!==k){return[]
}if(p&&!e){if(f=_.exec(a)){if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode){return d
}if(h.id===j){return d.push(h),d
}}else{if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j){return d.push(h),d
}}}else{if(f[2]){return I.apply(d,b.getElementsByTagName(a)),d
}if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName){return I.apply(d,b.getElementsByClassName(j)),d
}}}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;
while(l--){o[l]=s+qb(o[l])
}w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")
}if(x){try{return I.apply(d,w.querySelectorAll(x)),d
}catch(y){}finally{r||b.removeAttribute("id")
}}}}return i(a.replace(R,"$1"),b,d,e)
}function gb(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function hb(a){return a[u]=!0,a
}function ib(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function jb(a,b){var c=a.split("|"),e=a.length;
while(e--){d.attrHandle[c[e]]=b
}}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function lb(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function mb(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a
}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;
return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()
},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()
})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length
}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);
return c&&c.parentNode?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(cb,db);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);
return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")
}),ib(function(a){var b=e.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];
if(!f||!g){return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0
}if(f===g){return kb(a,b)
}c=a;
while(c=c.parentNode){h.unshift(c)
}c=b;
while(c=c.parentNode){i.unshift(c)
}while(h[d]===i[d]){d++
}return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0
},e):n
},fb.matches=function(a,b){return fb(a,null,null,b)
},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return fb(b,n,null,[a]).length>0
},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;
if(q){if(f){while(p){l=b;
while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:1===l.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];
while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];
break
}}}else{if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w){m=j[1]
}else{while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b)){break
}}}}return m-=e,m===d||m%d===0&&m/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=K.call(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));
return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()
}
}),has:hb(function(a){return function(b){return fb(a,b).length>0
}
}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Z.test(a.nodeName)
},input:function(a){return Y.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:nb(function(){return[0]
}),last:nb(function(a,b){return[b-1]
}),eq:nb(function(a,b,c){return[0>c?c+b:c]
}),even:nb(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:nb(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=lb(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=mb(b)
}function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?fb.error(a):z(a,i).slice(0)
};
function qb(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f){return j[2]=h[2]
}if(i[d]=j,j[2]=a(b,c,g)){return !0
}}}}}
}function sb(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function tb(a,b,c){for(var d=0,e=b.length;
e>d;
d++){fb(a,b[d],c)
}return c
}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h))
}return g
}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)
}})
}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b
},h,!0),l=rb(function(a){return K.call(b,a)>-1
},h,!0),m=[function(a,c,d){return !g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[rb(sb(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))
}m.push(c)
}}return sb(m)
}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||0.1,x=u.length;
for(k&&(j=g!==n&&g);
q!==x&&null!=(l=u[q]);
q++){if(e&&l){m=0;
while(o=a[m++]){if(o(l,g,h)){i.push(l);
break
}}k&&(w=v)
}c&&((l=!o&&l)&&p--,f&&r.push(l))
}if(p+=q,c&&q!==p){m=0;
while(o=b[m++]){o(r,s,g,h)
}if(f){if(p>0){while(q--){r[q]||s[q]||(s[q]=G.call(i))
}}s=ub(s)
}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)
}return k&&(w=v,j=t),r
};
return c?hb(f):f
}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=wb(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,xb(e,d)),f.selector=a
}return f
},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=X.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a){return I.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),ib(function(a){return null==a.getAttribute("disabled")
})||jb(L,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),fb
}(a);
m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;
var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;
function w(a,b,c){if(m.isFunction(b)){return m.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return m.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(v.test(b)){return m.filter(b,a,c)
}b=m.filter(b,a)
}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c
})
}m.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType
}))
},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;
if("string"!=typeof a){return this.pushStack(m(a).filter(function(){for(b=0;
e>b;
b++){if(m.contains(d[b],this)){return !0
}}}))
}for(b=0;
e>b;
b++){m.find(a,d[b],c)
}return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
},filter:function(a){return this.pushStack(w(this,a||[],!1))
},not:function(a){return this.pushStack(w(this,a||[],!0))
},is:function(a){return !!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length
}});
var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;
if(!a){return this
}if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b){return !b||b.jquery?(b||x).find(a):this.constructor(b).find(a)
}if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b)){for(c in b){m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c])
}}return this
}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2]){return x.find(a)
}this.length=1,this[0]=d
}return this.context=y,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))
};
A.prototype=m.fn,x=m(y);
var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};
m.extend({dir:function(a,b,c){var d=[],e=a[b];
while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c))){1===e.nodeType&&d.push(e),e=e[b]
}return d
},sibling:function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;
return this.filter(function(){for(b=0;
d>b;
b++){if(m.contains(this,c[b])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?m.unique(f):f)
},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function D(a,b){do{a=a[b]
}while(a&&1!==a.nodeType);
return a
}m.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return m.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)
},next:function(a){return D(a,"nextSibling")
},prev:function(a){return D(a,"previousSibling")
},nextAll:function(a){return m.dir(a,"nextSibling")
},prevAll:function(a){return m.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)
},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return m.sibling(a.firstChild)
},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)
}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)
}
});
var E=/\S+/g,F={};
function G(a){var b=F[a]={};
return m.each(a.match(E)||[],function(a,c){b[c]=!0
}),b
}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);
var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;
h&&e>f;
f++){if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;
break
}}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())
},k={add:function(){if(h){var d=h.length;
!function f(b){m.each(b,function(b,c){var d=m.type(c);
"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)
})
}(arguments),b?e=h.length:c&&(g=d,j(c))
}return this
},remove:function(){return h&&m.each(arguments,function(a,c){var d;
while((d=m.inArray(c,h,d))>-1){h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)
}}),this
},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)
},empty:function(){return h=[],e=0,this
},disable:function(){return h=i=c=void 0,this
},disabled:function(){return !h
},lock:function(){return i=void 0,c||k.disable(),this
},locked:function(){return !i
},fireWith:function(a,c){return !h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return k
},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?m.extend(a,d):d
}},e={};
return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(e>1){for(i=new Array(e),j=new Array(e),k=new Array(e);
e>b;
b++){c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var H;
m.fn.ready=function(a){return m.ready.promise().done(a),this
},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)
},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body){return setTimeout(m.ready)
}m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))
}}});
function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))
}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())
}m.ready.promise=function(b){if(!H){if(H=m.Deferred(),"complete"===y.readyState){setTimeout(m.ready)
}else{if(y.addEventListener){y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1)
}else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);
var c=!1;
try{c=null==a.frameElement&&y.documentElement
}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")
}catch(a){return setTimeout(e,50)
}I(),m.ready()
}}()
}}}return H.promise(b)
};
var K="undefined",L;
for(L in m(k)){break
}k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))
}),function(){var a=y.createElement("div");
if(null==k.deleteExpando){k.deleteExpando=!0;
try{delete a.test
}catch(b){k.deleteExpando=!1
}}a=null
}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b
};
var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;
function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();
if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c
}catch(e){}m.data(a,b,c)
}else{c=void 0
}}return c
}function P(a){var b;
for(b in a){if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b){return !1
}}return !0
}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b){return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f
}}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;
while(e--){delete d[b[e]]
}if(c?!P(d):!m.isEmptyObject(d)){return
}}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)
}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)
},data:function(a,b,c){return Q(a,b,c)
},removeData:function(a,b){return R(a,b)
},_data:function(a,b,c){return Q(a,b,c,!0)
},_removeData:function(a,b){return R(a,b,!0)
}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])))
}m._data(f,"parsedAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){m.data(this,a)
}):arguments.length>1?this.each(function(){m.data(this,a,b)
}):f?O(f,a,m.data(f,a)):void 0
},removeData:function(a){return this.each(function(){m.removeData(this,a)
})
}}),m.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)
})})
}}),m.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);
m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){m.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}});
var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)
},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===m.type(c)){e=!0;
for(h in c){m.access(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
},W=/^(?:checkbox|radio)$/i;
!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();
if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1
}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;
try{delete b.test
}catch(d){k.deleteExpando=!1
}}}(),function(){var b,c,d=y.createElement("div");
for(b in {submit:!0,change:!0,focusin:!0}){c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1)
}d=null
}();
var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;
function ab(){return !0
}function bb(){return !1
}function cb(){try{return y.activeElement
}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);
if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)
},k.elem=a),b=(b||"").match(E)||[""],h=b.length;
while(h--){f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0)
}a=null
}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);
if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;
while(j--){if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;
while(f--){g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g))
}i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])
}else{for(o in k){m.event.remove(a,o+b[j],c,d,!0)
}}}m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))
}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];
if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);
h;
h=h.parentNode){o.push(h),l=h
}l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)
}n=0;
while((h=o[n++])&&!b.isPropagationStopped()){b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault())
}if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;
try{d[p]()
}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)
}return b.result
}},dispatch:function(a){a=m.event.fix(a);
var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;
while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped()){(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&(!a.button||"click"!==a.type)){for(;
i!=this;
i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;
h>f;
f++){d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d)
}e.length&&g.push({elem:i,handlers:e})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},fix:function(a){if(a[m.expando]){return a
}var b,c,d,e=a.type,f=a,g=this.fixHooks[e];
g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;
while(b--){c=d[b],a[c]=f[c]
}return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus){try{return this.focus(),!1
}catch(a){}}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(a){return m.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){var d="on"+b;
a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))
},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void (this[m.expando]=!0)):new m.Event(a,b)
},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()
}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;
c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0
}),m._data(c,"submitBubbles",!0))
})
},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))
},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")
}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)
}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)
})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;
X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)
}),m._data(b,"changeBubbles",!0))
})
},handle:function(a){var b=a.target;
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)
}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)
};
m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);
e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;
e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))
}}
}),m.fn.extend({on:function(a,b,c,d,e){var f,g;
if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);
for(f in a){this.on(f,b,c,a[f],e)
}return this
}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1){d=bb
}else{if(!d){return this
}}return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)
},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?m.event.trigger(a,b,c,!0):void 0
}});
function db(a){var b=eb.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));
rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;
function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;
if(!f){for(f=[],c=a.childNodes||a;
null!=(d=c[e]);
e++){!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b))
}}return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f
}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)
}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a
}function yb(a){var b=pb.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function zb(a,b){for(var c,d=0;
null!=(c=a[d]);
d++){m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))
}}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};
for(c in h){for(d=0,e=h[c].length;
e>d;
d++){m.event.add(b,c,h[c][d])
}}}g.data&&(g.data=m.extend({},g.data))
}}function Bb(a,b){var c,d,e;
if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);
for(d in e.events){m.removeEvent(b,d,e.handle)
}b.removeAttribute(m.expando)
}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)
}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);
if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a))){for(d=ub(f),h=ub(a),g=0;
null!=(e=h[g]);
++g){d[g]&&Bb(e,d[g])
}}if(b){if(c){for(h=h||ub(a),d=d||ub(f),g=0;
null!=(e=h[g]);
g++){Ab(e,d[g])
}}else{Ab(a,f)
}}return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f
},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;
n>q;
q++){if(f=a[q],f||0===f){if("object"===m.type(f)){m.merge(p,f.nodeType?[f]:f)
}else{if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];
while(e--){h=h.lastChild
}if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;
while(e--){m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)
}}m.merge(p,h.childNodes),h.textContent="";
while(h.firstChild){h.removeChild(h.firstChild)
}h=o.lastChild
}else{p.push(b.createTextNode(f))
}}}}h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;
while(f=p[q++]){if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;
while(f=h[e++]){ob.test(f.type||"")&&c.push(f)
}}}return h=null,o
},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;
null!=(d=a[h]);
h++){if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events){for(e in g.events){n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle)
}}j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))
}}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))
},null,a,arguments.length)
},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);
b.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;
null!=(c=d[e]);
e++){b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c))
}return this
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&m.cleanData(ub(a,!1));
while(a.firstChild){a.removeChild(a.firstChild)
}a.options&&m.nodeName(a,"select")&&(a.options.length=0)
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)
})
},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a){return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0
}if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=arguments[0];
return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)
}),a&&(a.length||a.nodeType)?this:this.remove()
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,b){a=e.apply([],a);
var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);
if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p)){return this.each(function(c){var d=n.eq(c);
q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)
})
}if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;
l>j;
j++){d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j)
}if(f){for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;
f>j;
j++){d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")))
}}i=c=null
}return this
}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;
h>=d;
d++){c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get())
}return this.pushStack(e)
}
});
var Cb,Db={};
function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");
return e.detach(),f
}function Fb(a){var b=y,c=Db[a];
return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c
}!function(){var a;
k.shrinkWrapBlocks=function(){if(null!=a){return a
}a=!1;
var b,c,d;
return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0
}
}();
var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;
a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)
},Jb=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""
}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle
},Jb=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
});
function Lb(a,b){return{get:function(){var c=a();
if(null!=c){return c?void delete this.get:(this.get=b).apply(this,arguments)
}}}
}!function(){var b,c,d,e,f,g,h;
if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g
},boxSizingReliable:function(){return null==f&&i(),f
},pixelPosition:function(){return null==e&&i(),e
},reliableMarginRight:function(){return null==h&&i(),h
}});
function i(){var b,c,d,i;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))
}}}(),m.swap=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
};
var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];
function Ub(a,b){if(b in a){return b
}var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;
while(e--){if(b=Tb[e]+c,b in a){return b
}}return d
}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}function Wb(a,b,c){var d=Pb.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)))
}return g
}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e)){return e
}d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"
}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;
if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c){return g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]
}if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set" in g&&void 0===(c=g.set(a,c,d))))){try{i[b]=c
}catch(j){}}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);
return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get" in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f
}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)
}):Yb(a,b,d):void 0
},set:function(a,c,d){var e=d&&Ib(a);
return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)
}}
}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)
}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0
}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+T[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)
}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;
if(m.isArray(b)){for(d=Ib(a),e=b.length;
e>g;
g++){f[b[g]]=m.css(a,b[g],!1,d)
}return f
}return void 0!==c?m.style(a,b,c):m.css(a,b)
},a,b,arguments.length>1)
},show:function(){return Vb(this,!0)
},hide:function(){return Vb(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()
})
}});
function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];
return a&&a.get?a.get(this):Zb.propHooks._default.get(this)
},run:function(a){var b,c=Zb.propHooks[this.prop];
return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this
}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]
},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},m.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}},m.fx=Zb.prototype.init,m.fx.step={};
var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;
if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;
do{h=h||".5",g/=h,m.style(c.elem,a,g+f)
}while(h!==(h=c.cur()/d)&&1!==h&&--i)
}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};
function fc(){return setTimeout(function(){$b=void 0
}),$b=m.now()
}function gc(a,b){var c,d={height:a},e=0;
for(b=b?1:0;
4>e;
e+=2-b){c=T[e],d["margin"+c]=d["padding"+c]=a
}return b&&(d.opacity=d.width=a),d
}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");
c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d]){continue
}q=!0
}o[d]=r&&r[d]||m.style(a,d)
}else{j=void 0
}}if(m.isEmptyObject(o)){"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j)
}else{r?"hidden" in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()
}),n.done(function(){var b;
m._removeData(a,"fxshow");
for(b in o){m.style(a,b,o[b])
}});
for(d in o){g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function jc(a,b){var c,d,e,f,g;
for(c in a){if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(jc(k,j.opts.specialEasing);
g>f;
f++){if(d=dc[f].call(j,a,k,j.opts)){return d
}}return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)
}},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)
}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};
return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)
},d
},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);
(e||m._data(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&cc.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}(b||!c)&&m.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;
for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];
m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)
}
}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;
for($b=m.now();
c<b.length;
c++){a=b[c],a()||b[c]!==a||b.splice(c--,1)
}b.length||m.fx.stop(),$b=void 0
},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()
},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))
},m.fx.stop=function(){clearInterval(_b),_b=null
},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},function(){var a,b,c,d,e;
b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value
}();
var lc=/\r/g;
m.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=m.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""
})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)
}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");
return null!=b?b:m.trim(m.text(a))
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;
while(g--){if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0){try{d.selected=c=!0
}catch(h){d.scrollHeight
}}else{d.selected=!1
}}return c||(a.selectedIndex=-1),e
}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0
}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
});
var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;
m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)
})
}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(a&&3!==f&&8!==f&&2!==f){return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get" in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set" in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))
}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);
if(f&&1===a.nodeType){while(c=f[e++]){d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)
}}},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c
}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;
oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;
return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e
}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null
}
}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void (a.defaultValue=b):mc&&mc.set(a,b,c)
}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);
return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0
}},oc.id=oc.name=oc.coords=function(a,b,c){var d;
return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null
},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);
return c&&c.specified?c.value:void 0
},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)
}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0
}}
})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0
},set:function(a,b){return a.style.cssText=b+""
}});
var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;
m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)
},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]
}catch(b){}})
}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
if(a&&3!==g&&8!==g&&2!==g){return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");
return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1
}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)
}}
}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this
}),k.enctype||(m.propFix.enctype="encoding");
var uc=/[\t\r\n\f]/g;
m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).addClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;
while(e=b[f++]){d.indexOf(" "+e+" ")<0&&(d+=e+" ")
}g=m.trim(d),c.className!==g&&(c.className=g)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;
while(e=b[f++]){while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")
}}g=a?m.trim(d):"",c.className!==g&&(c.className=g)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)
}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")
}})
},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;
d>c;
c++){if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0){return !0
}}return !1
}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}});
var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
m.parseJSON=function(b){if(a.JSON&&a.JSON.parse){return a.JSON.parse(b+"")
}var c,d=null,e=m.trim(b+"");
return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")
}))?Function("return "+e)():m.error("Invalid JSON: "+b)
},m.parseXML=function(b){var c,d;
if(!b||"string"!=typeof b){return null
}try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))
}catch(e){c=void 0
}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c
};
var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");
try{zc=location.href
}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href
}yc=Gc.exec(zc.toLowerCase())||[];
function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(E)||[];
if(m.isFunction(c)){while(d=f[e++]){"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function Mc(a,b,c,d){var e={},f=a===Ic;
function g(h){var i;
return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};
for(d in b){void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d])
}return c&&m.extend(!0,a,c),a
}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"))
}if(e){for(g in h){if(h[g]&&h[g].test(e)){i.unshift(g);
break
}}}if(i[0] in c){f=i[0]
}else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;
break
}d||(d=g)
}f=f||d
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)
},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};
var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;
if(2===t){if(!j){j={};
while(b=Cc.exec(f)){j[b[1].toLowerCase()]=b[2]
}}b=j[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===t?f:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return t||(a=s[c]=s[c]||a,r[a]=b),this
},overrideMimeType:function(a){return t||(k.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>t){for(b in a){q[b]=[q[b],a[b]]
}}else{v.always(a[v.status])
}}return this
},abort:function(a){var b=a||u;
return i&&i.abort(b),x(0,b),this
}};
if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t){return v
}h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);
for(d in k.headers){v.setRequestHeader(d,k.headers[d])
}if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t)){return v.abort()
}u="abort";
for(d in {success:1,error:1,complete:1}){v[d](k[d])
}if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")
},k.timeout));
try{t=1,i.send(r,x)
}catch(w){if(!(2>t)){throw w
}x(-1,w)
}}else{x(-1,"No Transport")
}function x(a,b,c,d){var j,r,s,u,w,x=b;
2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))
}return v
},getJSON:function(a,b,c){return m.get(a,b,c,"json")
},getScript:function(a,b){return m.get(a,void 0,b,"script")
}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})
}
}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)
}
}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},m.fn.extend({wrapAll:function(a){if(m.isFunction(a)){return this.each(function(b){m(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&1===a.firstChild.nodeType){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))
}:function(){var b=m(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=m.isFunction(a);
return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)
}).end()
}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))
},m.expr.filters.visible=function(a){return !m.expr.filters.hidden(a)
};
var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;
function Vc(a,b,c,d){var e;
if(m.isArray(b)){m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==m.type(b)){d(a,b)
}else{for(e in b){Vc(a+"["+e+"]",b[e],c,d)
}}}}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a)){m.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){Vc(c,a[c],b,e)
}}return d.join("&").replace(Qc,"+")
},m.fn.extend({serialize:function(){return m.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");
return a?m.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))
}).map(function(a,b){var c=m(this).val();
return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}
}):{name:b.name,value:c.replace(Sc,"\r\n")}
}).get()
}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()
}:Zc;
var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();
a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc){Xc[a](void 0,!0)
}}),k.cors=!!Yc&&"withCredentials" in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;
return{send:function(c,d){var e,f=a.xhr(),g=++Wc;
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]
}}a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
for(e in c){void 0!==c[e]&&f.setRequestHeader(e,c[e]+"")
}f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;
if(b&&(e||4===f.readyState)){if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e){4!==f.readyState&&f.abort()
}else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);
try{i=f.statusText
}catch(k){i=""
}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404
}}j&&d(h,i,j,f.getAllResponseHeaders())
},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()
},abort:function(){b&&b(void 0,!0)
}}
}});
function Zc(){try{return new a.XMLHttpRequest
}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a
}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;
return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))
},c.insertBefore(b,c.firstChild)
},abort:function(){b&&b.onload(void 0,!0)
}}
}});
var _c=[],ad=/(=)\?(?=&|$)|\?\?/;
m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;
return this[a]=!0,a
}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||y;
var d=u.exec(a),e=!c&&[];
return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))
};
var bd=m.fn.load;
m.fn.load=function(a,b,c){if("string"!=typeof a&&bd){return bd.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)
}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])
}),this
},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem
}).length
};
var cd=a.document.documentElement;
function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1
}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using" in b?b.using.call(a,n):l.css(n)
}},m.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)
})
}var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;
if(f){return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d
}},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;
while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position")){a=a.offsetParent
}return a||cd
})
}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);
m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);
return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void (f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)
},a,d,arguments.length,null)
}
}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0
})
}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return V(this,function(b,c,d){var e;
return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),m.fn.size=function(){return this.length
},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m
});
var ed=a.jQuery,fd=a.$;
return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m
},typeof b===K&&(a.jQuery=a.$=m),m
});
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){return d(a.target).is(this)?a.handleObj.handler.apply(this,arguments):void 0
}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)
})
}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)
};
i.VERSION="3.3.2",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()
}var l=g(this),k=l.attr("data-target");
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
var d=g(k);
a&&a.preventDefault(),d.length||(d=l.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",j,i.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;
c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.2",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();
a+="Text",null==i.resetText&&k.data("resetText",k[j]()),setTimeout(f.proxy(function(){k[j](null==i[a]?this.options[a]:i[a]),"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l))
},this),0)
},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var j=this.$element.find("input");
"radio"==j.prop("type")&&(j.prop("checked")&&this.$element.hasClass("active")?i=!1:d.find(".active").removeClass("active")),i&&j.prop("checked",!this.$element.hasClass("active")).trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))
}i&&this.$element.toggleClass("active")
};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target);
a.hasClass("btn")||(a=a.closest(".btn")),e.call(a,"toggle"),b.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var l=g(this),k=l.data("bs.carousel"),c=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
k||l.data("bs.carousel",k=new j(this,c)),"number"==typeof a?k.to(a):b?k[b]():c.interval&&k.pause().cycle()
})
}var j=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
j.VERSION="3.3.2",j.TRANSITION_DURATION=600,j.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},j.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},j.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},j.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},j.prototype.getItemForDirection=function(l,k){var p=this.getItemIndex(k),o="prev"==l&&0===p||"next"==l&&p==this.$items.length-1;
if(o&&!this.options.wrap){return k
}var n="prev"==l?-1:1,m=(p+n)%this.$items.length;
return this.$items.eq(m)
},j.prototype.to=function(e){var d=this,k=this.getItemIndex(this.$active=this.$element.find(".item.active"));
return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)
}):k==e?this.pause().cycle():this.slide(e>k?"next":"prev",this.$items.eq(e))
},j.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},j.prototype.next=function(){return this.sliding?void 0:this.slide("next")
},j.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},j.prototype.slide=function(v,u){var t=this.$element.find(".item.active"),s=u||this.getItemForDirection(v,t),r=this.interval,q="next"==v?"left":"right",p=this;
if(s.hasClass("active")){return this.sliding=!1
}var o=s[0],n=g.Event("slide.bs.carousel",{relatedTarget:o,direction:q});
if(this.$element.trigger(n),!n.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(s)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:o,direction:q});
return g.support.transition&&this.$element.hasClass("slide")?(s.addClass(v),s[0].offsetWidth,t.addClass(q),s.addClass(q),t.one("bsTransitionEnd",function(){s.removeClass([v,q].join(" ")).addClass("active"),t.removeClass(["active",q].join(" ")),p.sliding=!1,setTimeout(function(){p.$element.trigger(a)
},0)
}).emulateTransitionEnd(j.TRANSITION_DURATION)):(t.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(a)),r&&this.cycle(),this
}};
var i=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=j,g.fn.carousel.noConflict=function(){return g.fn.carousel=i,this
};
var h=function(n){var m,l=g(this),k=g(l.attr("data-target")||(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));
if(k.hasClass("carousel")){var b=g.extend({},k.data(),l.data()),a=l.attr("data-slide-to");
a&&(b.interval=!1),f.call(k,b),a&&k.data("bs.carousel").to(a),n.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var k,e=a.attr("data-target")||(k=a.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function j(a){return this.each(function(){var k=g(this),d=k.data("bs.collapse"),b=g.extend({},i.DEFAULTS,k.data(),"object"==typeof a&&a);
!d&&b.toggle&&"show"==a&&(b.toggle=!1),d||k.data("bs.collapse",d=new i(this,b)),"string"==typeof a&&d[a]()
})
}var i=function(a,d){this.$element=g(a),this.options=g.extend({},i.DEFAULTS,d),this.$trigger=g(this.options.trigger).filter('[href="#'+a.id+'"], [data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
i.VERSION="3.3.2",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},i.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,m=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(m&&m.length&&(a=m.data("bs.collapse"),a&&a.transitioning))){var l=g.Event("show.bs.collapse");
if(this.$element.trigger(l),!l.isDefaultPrevented()){m&&m.length&&(j.call(m,"hide"),a||m.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return d.call(this)
}var c=g.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var k=this.dimension();
this.$element[k](this.$element[k]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[k](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION):d.call(this)
}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},i.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(k,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},i.prototype.addAriaAndCollapsedClass=function(e,d){var k=e.hasClass("in");
e.attr("aria-expanded",k),d.toggleClass("collapsed",!k).attr("aria-expanded",k)
};
var h=g.fn.collapse;
g.fn.collapse=j,g.fn.collapse.Constructor=i,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(l){var k=g(this);
k.attr("data-target")||l.preventDefault();
var c=f(k),b=c.data("bs.collapse"),a=b?"toggle":g.extend({},k.data(),{trigger:this});
j.call(c,a)
})
}(jQuery),+function(j){function i(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=p(g),b={relatedTarget:this};
c.hasClass("open")&&(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger("hidden.bs.dropdown",b)))
}))
}function p(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&j(f);
return e&&e.length?e:a.parent()
}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)
})
}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)
};
l.VERSION="3.3.2",l.prototype.toggle=function(r){var q=j(this);
if(!q.is(".disabled, :disabled")){var c=p(q),b=c.hasClass("open");
if(i(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j('<div class="dropdown-backdrop"/>').insertAfter(j(this)).on("click",i);
var a={relatedTarget:this};
if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger("shown.bs.dropdown",a)
}return !1
}},l.prototype.keydown=function(a){if(/(38|40|27|32)/.test(a.which)&&!/input|textarea/i.test(a.target.tagName)){var t=j(this);
if(a.preventDefault(),a.stopPropagation(),!t.is(".disabled, :disabled")){var s=p(t),r=s.hasClass("open");
if(!r&&27!=a.which||r&&27==a.which){return 27==a.which&&s.find(m).trigger("focus"),t.trigger("click")
}var q=" li:not(.divider):visible a",f=s.find('[role="menu"]'+q+', [role="listbox"]'+q);
if(f.length){var c=f.index(a.target);
38==a.which&&c>0&&c--,40==a.which&&c<f.length-1&&c++,~c||(c=0),f.eq(c).trigger("focus")
}}}};
var k=j.fn.dropdown;
j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this
},j(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m,l.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',l.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',l.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.2",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.options.backdrop&&i.adjustBackdrop(),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;
if(this.$backdrop=f('<div class="modal-backdrop '+j+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",f.proxy(function(b){b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))
},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){k.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()
},h.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right","")
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());
j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.tooltip"),b="object"==typeof a&&a;
(c||"destroy"!=a)&&(c||i.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",d,c)
};
h.VERSION="3.3.2",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(this.options.viewport.selector||this.options.viewport);
for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d&&d.$tip&&d.$tip.is(":visible")?void (d.hoverState="in"):(d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show())
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide()
},h.prototype.show=function(){var F=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(F);
var E=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(F.isDefaultPrevented()||!E){return
}var D=this,C=this.tip(),B=this.getUID(this.type);
this.setContent(),C.attr("id",B),this.$element.attr("aria-describedby",B),this.options.animation&&C.addClass("fade");
var A="function"==typeof this.options.placement?this.options.placement.call(this,C[0],this.$element[0]):this.options.placement,z=/\s?auto?\s?/i,y=z.test(A);
y&&(A=A.replace(z,"")||"top"),C.detach().css({top:0,left:0,display:"block"}).addClass(A).data("bs."+this.type,this),this.options.container?C.appendTo(this.options.container):C.insertAfter(this.$element);
var x=this.getPosition(),w=C[0].offsetWidth,v=C[0].offsetHeight;
if(y){var u=A,t=this.options.container?f(this.options.container):this.$element.parent(),s=this.getPosition(t);
A="bottom"==A&&x.bottom+v>s.bottom?"top":"top"==A&&x.top-v<s.top?"bottom":"right"==A&&x.right+w>s.width?"left":"left"==A&&x.left-w<s.left?"right":A,C.removeClass(u).addClass(A)
}var c=this.getCalculatedOffset(A,x,w,v);
this.applyPlacement(c,A);
var a=function(){var b=D.hoverState;
D.$element.trigger("shown.bs."+D.type),D.hoverState=null,"out"==b&&D.leave(D)
};
f.support.transition&&this.$tip.hasClass("fade")?C.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top=z.top+u,z.left=z.left+t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j?"left":"top",50*(1-i/d)+"%").css(j?"top":"left","")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function k(){"in"!=j.hoverState&&i.detach(),j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type),a&&a()
}var j=this,i=this.tip(),c=f.Event("hide.bs."+this.type);
return this.$element.trigger(c),c.isDefaultPrevented()?void 0:(i.removeClass("in"),f.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",k).emulateTransitionEnd(h.TRANSITION_DURATION):k(),this.hoverState=null,this)
},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var n=a[0],m="BODY"==n.tagName,l=n.getBoundingClientRect();
null==l.width&&(l=f.extend({},l,{width:l.right-l.left,height:l.bottom-l.top}));
var k=m?{top:0,left:0}:a.offset(),j={scroll:m?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},i=m?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},l,j,i,k)
},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.width&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;
return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){return this.$tip=this.$tip||f(this.options.template)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type)
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.popover"),b="object"==typeof a&&a;
(c||"destroy"!=a)&&(c||i.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.2",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();
i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
},h.prototype.tip=function(){return this.$tip||(this.$tip=f(this.options.template)),this.$tip
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(i,b){var a=f.proxy(this.process,this);
this.$body=f("body"),this.$scrollElement=f(f(i).is("body")?window:i),this.options=f.extend({},e.DEFAULTS,b),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a),this.refresh(),this.process()
}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;
c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.2",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a="offset",j=0;
f.isWindow(this.$scrollElement[0])||(a="position",j=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();
var i=this;
this.$body.find(this.selector).map(function(){var k=f(this),c=k.data("target")||k.attr("href"),b=/^#./.test(c)&&f(c);
return b&&b.length&&b.is(":visible")&&[[b[a]().top+j,c]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])
})
},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;
if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)
}if(k&&i<m[0]){return this.activeTarget=null,this.clear()
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(!m[j+1]||i<=m[j+1])&&this.activate(l[j])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new j(this)),"string"==typeof a&&b[a]()
})
}var j=function(a){this.element=g(a)
};
j.VERSION="3.3.2",j.TRANSITION_DURATION=150,j.prototype.show=function(){var a=this.element,p=a.closest("ul:not(.dropdown-menu)"),o=a.data("target");
if(o||(o=a.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var n=p.find(".active:last a"),m=g.Event("hide.bs.tab",{relatedTarget:a[0]}),l=g.Event("show.bs.tab",{relatedTarget:n[0]});
if(n.trigger(m),a.trigger(l),!l.isDefaultPrevented()&&!m.isDefaultPrevented()){var k=g(o);
this.activate(a.closest("li"),p),this.activate(k,k.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:n[0]})
})
}}},j.prototype.activate=function(a,n,m){function l(){k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),m&&m()
}var k=n.find("> .active"),c=m&&g.support.transition&&(k.length&&k.hasClass("fade")||!!n.find("> .fade").length);
k.length&&c?k.one("bsTransitionEnd",l).emulateTransitionEnd(j.TRANSITION_DURATION):l(),k.removeClass("in")
};
var i=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=j,g.fn.tab.noConflict=function(){return g.fn.tab=i,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;
c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.2",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return r>p?"top":!1
}if("bottom"==this.affixed){return null!=r?p+this.unpin<=o.top?!1:"bottom":t-q>=p+n?!1:"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&r>=p?"top":null!=q&&l+k>=t-q?"bottom":!1
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=f("body").height();
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
!function(b){var a=function(d,c){this.init(d,c)
};
a.prototype={constructor:a,init:function(e,c){var f=this;
this.options=c;
this.$element=b(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",b.proxy(this.hide,this));
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote,function(){var g=b.Event("loaded");
f.$element.trigger(g)
});
var d=typeof this.options.manager==="function"?this.options.manager.call(this):this.options.manager;
d=d.appendModal?d:b(d).modalmanager().data("modalmanager");
d.appendModal(this)
},toggle:function(){return this[!this.isShown?"show":"hide"]()
},show:function(){var c=b.Event("show");
if(this.isShown){return
}this.$element.trigger(c);
if(c.isDefaultPrevented()){return
}this.escape();
this.tab();
this.options.loading&&this.loading()
},hide:function(c){c&&c.preventDefault();
c=b.Event("hide");
this.$element.trigger(c);
if(!this.isShown||c.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
this.tab();
this.isLoading&&this.loading();
b(document).off("focusin.modal");
this.$element.removeClass("in").removeClass("animated").removeClass(this.options.attentionAnimation).removeClass("modal-overflow").attr("aria-hidden",true);
b.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()
},layout:function(){var f=this.options.height?"height":"max-height",d=this.options.height||this.options.maxHeight;
if(this.options.width){this.$element.css("width",this.options.width);
var c=this;
this.$element.css("margin-left",function(){if(/%/ig.test(c.options.width)){return -(parseInt(c.options.width)/2)+"%"
}else{return -(b(this).width()/2)+"px"
}})
}else{this.$element.css("width","");
this.$element.css("margin-left","")
}this.$element.find(".modal-body").css("overflow","").css(f,"");
if(d){this.$element.find(".modal-body").css("overflow","auto").css(f,d)
}var e=b(window).height()-10<this.$element.height();
if(e||this.options.modalOverflow){this.$element.css("margin-top",0).addClass("modal-overflow")
}else{this.$element.css("margin-top",0-this.$element.height()/2).removeClass("modal-overflow")
}},tab:function(){var c=this;
if(this.isShown&&this.options.consumeTab){this.$element.on("keydown.tabindex.modal","[data-tabindex]",function(h){if(h.keyCode&&h.keyCode==9){var g=[],f=Number(b(this).data("tabindex"));
c.$element.find("[data-tabindex]:enabled:visible:not([readonly])").each(function(e){g.push(Number(b(this).data("tabindex")))
});
g.sort(function(i,e){return i-e
});
var d=b.inArray(f,g);
if(!h.shiftKey){d<g.length-1?c.$element.find("[data-tabindex="+g[d+1]+"]").focus():c.$element.find("[data-tabindex="+g[0]+"]").focus()
}else{d==0?c.$element.find("[data-tabindex="+g[g.length-1]+"]").focus():c.$element.find("[data-tabindex="+g[d-1]+"]").focus()
}h.preventDefault()
}})
}else{if(!this.isShown){this.$element.off("keydown.tabindex.modal")
}}},escape:function(){var c=this;
if(this.isShown&&this.options.keyboard){if(!this.$element.attr("tabindex")){this.$element.attr("tabindex",-1)
}this.$element.on("keyup.dismiss.modal",function(d){d.which==27&&c.hide()
})
}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")
}}},hideWithTransition:function(){var c=this,d=setTimeout(function(){c.$element.off(b.support.transition.end);
c.hideModal()
},500);
this.$element.one(b.support.transition.end,function(){clearTimeout(d);
c.hideModal()
})
},hideModal:function(){var d=this.options.height?"height":"max-height";
var c=this.options.height||this.options.maxHeight;
if(c){this.$element.find(".modal-body").css("overflow","").css(d,"")
}this.$element.hide().trigger("hidden")
},removeLoading:function(){this.$loading.remove();
this.$loading=null;
this.isLoading=false
},loading:function(f){f=f||function(){};
var d=this.$element.hasClass("fade")?"fade":"";
if(!this.isLoading){var c=b.support.transition&&d;
this.$loading=b('<div class="loading-mask '+d+'">').append(this.options.spinner).appendTo(this.$element);
if(c){this.$loading[0].offsetWidth
}this.$loading.addClass("in");
this.isLoading=true;
c?this.$loading.one(b.support.transition.end,f):f()
}else{if(this.isLoading&&this.$loading){this.$loading.removeClass("in");
var e=this;
b.support.transition&&this.$element.hasClass("fade")?this.$loading.one(b.support.transition.end,function(){e.removeLoading()
}):e.removeLoading()
}else{if(f){f(this.isLoading)
}}}},focus:function(){var c=this.$element.find(this.options.focusOn);
c=c.length?c:this.$element;
c.focus()
},attention:function(){if(this.options.attentionAnimation){this.$element.removeClass("animated").removeClass(this.options.attentionAnimation);
var c=this;
setTimeout(function(){c.$element.addClass("animated").addClass(c.options.attentionAnimation)
},0)
}this.focus()
},destroy:function(){var c=b.Event("destroy");
this.$element.trigger(c);
if(c.isDefaultPrevented()){return
}this.$element.off(".modal").removeData("modal").removeClass("in").attr("aria-hidden",true);
if(this.$parent!==this.$element.parent()){this.$element.appendTo(this.$parent)
}else{if(!this.$parent.length){this.$element.remove();
this.$element=null
}}this.$element.trigger("destroyed")
}};
b.fn.modal=function(d,c){return this.each(function(){var g=b(this),f=g.data("modal"),e=b.extend({},b.fn.modal.defaults,g.data(),typeof d=="object"&&d);
if(!f){g.data("modal",(f=new a(this,e)))
}if(typeof d=="string"){f[d].apply(f,[].concat(c))
}else{if(e.show){f.show()
}}})
};
b.fn.modal.defaults={keyboard:true,backdrop:true,loading:false,show:true,width:null,height:null,maxHeight:null,modalOverflow:false,consumeTab:true,focusOn:null,replace:false,resize:false,attentionAnimation:"shake",manager:"body",spinner:'<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',backdropTemplate:'<div class="modal-backdrop" />'};
b.fn.modal.Constructor=a;
b(function(){b(document).off("click.modal").on("click.modal.data-api",'[data-toggle="modal"]',function(h){var g=b(this),d=g.attr("href"),c=b(g.attr("data-target")||(d&&d.replace(/.*(?=#[^\s]+$)/,""))),f=c.data("modal")?"toggle":b.extend({remote:!/#/.test(d)&&d},c.data(),g.data());
h.preventDefault();
c.modal(f).one("hide",function(){g.focus()
})
})
})
}(window.jQuery);
!function(c){var a=function(f,e){this.init(f,e)
};
a.prototype={constructor:a,init:function(f,e){this.$element=c(f);
this.options=c.extend({},c.fn.modalmanager.defaults,this.$element.data(),typeof e=="object"&&e);
this.stack=[];
this.backdropCount=0;
if(this.options.resize){var h,g=this;
c(window).on("resize.modal",function(){h&&clearTimeout(h);
h=setTimeout(function(){for(var j=0;
j<g.stack.length;
j++){g.stack[j].isShown&&g.stack[j].layout()
}},10)
})
}},createModal:function(f,e){c(f).modal(c.extend({manager:this},e))
},appendModal:function(f){this.stack.push(f);
var e=this;
f.$element.on("show.modalmanager",b(function(h){var g=function(){f.isShown=true;
var i=c.support.transition&&f.$element.hasClass("fade");
e.$element.toggleClass("modal-open",e.hasOpenModal()).toggleClass("page-overflow",c(window).height()<e.$element.height());
f.$parent=f.$element.parent();
f.$container=e.createContainer(f);
f.$element.appendTo(f.$container);
e.backdrop(f,function(){f.$element.show();
if(i){f.$element[0].offsetWidth
}f.layout();
f.$element.addClass("in").attr("aria-hidden",false);
var j=function(){e.setFocus();
f.$element.trigger("shown")
};
i?f.$element.one(c.support.transition.end,j):j()
})
};
f.options.replace?e.replace(g):g()
}));
f.$element.on("hidden.modalmanager",b(function(g){e.backdrop(f);
if(!f.$element.parent().length){e.destroyModal(f)
}else{if(f.$backdrop){var h=c.support.transition&&f.$element.hasClass("fade");
if(h){f.$element[0].offsetWidth
}c.support.transition&&f.$element.hasClass("fade")?f.$backdrop.one(c.support.transition.end,function(){f.destroy()
}):f.destroy()
}else{f.destroy()
}}}));
f.$element.on("destroyed.modalmanager",b(function(g){e.destroyModal(f)
}))
},getOpenModals:function(){var f=[];
for(var e=0;
e<this.stack.length;
e++){if(this.stack[e].isShown){f.push(this.stack[e])
}}return f
},hasOpenModal:function(){return this.getOpenModals().length>0
},setFocus:function(){var f;
for(var e=0;
e<this.stack.length;
e++){if(this.stack[e].isShown){f=this.stack[e]
}}if(!f){return
}f.focus()
},destroyModal:function(f){f.$element.off(".modalmanager");
if(f.$backdrop){this.removeBackdrop(f)
}this.stack.splice(this.getIndexOfModal(f),1);
var e=this.hasOpenModal();
this.$element.toggleClass("modal-open",e);
if(!e){this.$element.removeClass("page-overflow")
}this.removeContainer(f);
this.setFocus()
},getModalAt:function(e){return this.stack[e]
},getIndexOfModal:function(f){for(var e=0;
e<this.stack.length;
e++){if(f===this.stack[e]){return e
}}},replace:function(g){var f;
for(var e=0;
e<this.stack.length;
e++){if(this.stack[e].isShown){f=this.stack[e]
}}if(f){this.$backdropHandle=f.$backdrop;
f.$backdrop=null;
g&&f.$element.one("hidden",b(c.proxy(g,this)));
f.hide()
}else{if(g){g()
}}},removeBackdrop:function(e){e.$backdrop.remove();
e.$backdrop=null
},createBackdrop:function(g,f){var e;
if(!this.$backdropHandle){e=c(f).addClass(g).appendTo(this.$element)
}else{e=this.$backdropHandle;
e.off(".modalmanager");
this.$backdropHandle=null;
this.isLoading&&this.removeSpinner()
}return e
},removeContainer:function(e){e.$container.remove();
e.$container=null
},createContainer:function(e){var f;
f=c('<div class="modal-scrollable">').css("z-index",d("modal",this.getOpenModals().length)).appendTo(this.$element);
if(e&&e.options.backdrop!="static"){f.on("click.modal",b(function(g){e.hide()
}))
}else{if(e){f.on("click.modal",b(function(g){e.attention()
}))
}}return f
},backdrop:function(h,j){var f=h.$element.hasClass("fade")?"fade":"",i=h.options.backdrop&&this.backdropCount<this.options.backdropLimit;
if(h.isShown&&i){var e=c.support.transition&&f&&!this.$backdropHandle;
h.$backdrop=this.createBackdrop(f,h.options.backdropTemplate);
h.$backdrop.css("z-index",d("backdrop",this.getOpenModals().length));
if(e){h.$backdrop[0].offsetWidth
}h.$backdrop.addClass("in");
this.backdropCount+=1;
e?h.$backdrop.one(c.support.transition.end,j):j()
}else{if(!h.isShown&&h.$backdrop){h.$backdrop.removeClass("in");
this.backdropCount-=1;
var g=this;
c.support.transition&&h.$element.hasClass("fade")?h.$backdrop.one(c.support.transition.end,function(){g.removeBackdrop(h)
}):g.removeBackdrop(h)
}else{if(j){j()
}}}},removeSpinner:function(){this.$spinner&&this.$spinner.remove();
this.$spinner=null;
this.isLoading=false
},removeLoading:function(){this.$backdropHandle&&this.$backdropHandle.remove();
this.$backdropHandle=null;
this.removeSpinner()
},loading:function(h){h=h||function(){};
this.$element.toggleClass("modal-open",!this.isLoading||this.hasOpenModal()).toggleClass("page-overflow",c(window).height()<this.$element.height());
if(!this.isLoading){this.$backdropHandle=this.createBackdrop("fade",this.options.backdropTemplate);
this.$backdropHandle[0].offsetWidth;
var e=this.getOpenModals();
this.$backdropHandle.css("z-index",d("backdrop",e.length+1)).addClass("in");
var g=c(this.options.spinner).css("z-index",d("modal",e.length+1)).appendTo(this.$element).addClass("in");
this.$spinner=c(this.createContainer()).append(g).on("click.modalmanager",c.proxy(this.loading,this));
this.isLoading=true;
c.support.transition?this.$backdropHandle.one(c.support.transition.end,h):h()
}else{if(this.isLoading&&this.$backdropHandle){this.$backdropHandle.removeClass("in");
var f=this;
c.support.transition?this.$backdropHandle.one(c.support.transition.end,function(){f.removeLoading()
}):f.removeLoading()
}else{if(h){h(this.isLoading)
}}}}};
var d=(function(){var f,e={};
return function(g,j){if(typeof f==="undefined"){var i=c('<div class="modal hide" />').appendTo("body"),h=c('<div class="modal-backdrop hide" />').appendTo("body");
e.modal=+i.css("z-index");
e.backdrop=+h.css("z-index");
f=e.modal-e.backdrop;
i.remove();
h.remove();
h=i=null
}return e[g]+(f*j)
}
}());
function b(e){return function(f){if(f&&this===f.target){return e.apply(this,arguments)
}}
}c.fn.modalmanager=function(f,e){return this.each(function(){var h=c(this),g=h.data("modalmanager");
if(!g){h.data("modalmanager",(g=new a(this,f)))
}if(typeof f==="string"){g[f].apply(g,[].concat(e))
}})
};
c.fn.modalmanager.defaults={backdropLimit:999,resize:true,spinner:'<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',backdropTemplate:'<div class="modal-backdrop" />'};
c.fn.modalmanager.Constructor=a;
c(function(){c(document).off("show.bs.modal").off("hidden.bs.modal")
})
}(jQuery);
/*! DataTables 1.10.4
 * ©2008-2014 SpryMedia Ltd - datatables.net/license
 */
(function(b,a,c){(function(d){if(typeof define==="function"&&define.amd){define("datatables",["jquery"],d)
}else{if(typeof exports==="object"){d(require("jquery"))
}else{if(jQuery&&!jQuery.fn.dataTable){d(jQuery)
}}}}(function(bF){var N;
var I;
var J;
var bk;
var aB;
var a7={};
var W=/[\r\n]/g;
var aU=/<.*?>/g;
var am=/^[\w\+\-]/;
var bv=/[\w\+\-]$/;
var aD=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g");
var bG=/[',$Â£â‚¬Â¥%\u2009\u202F]/g;
var bB=function(bR){return !bR||bR===true||bR==="-"?true:false
};
var F=function(bS){var bR=parseInt(bS,10);
return !isNaN(bR)&&isFinite(bS)?bR:null
};
var bD=function(bS,bR){if(!a7[bR]){a7[bR]=new RegExp(m(bR),"g")
}return typeof bS==="string"&&bR!=="."?bS.replace(/\./g,"").replace(a7[bR],"."):bS
};
var aj=function(bU,bR,bT){var bS=typeof bU==="string";
if(bR&&bS){bU=bD(bU,bR)
}if(bT&&bS){bU=bU.replace(bG,"")
}return bB(bU)||(!isNaN(parseFloat(bU))&&isFinite(bU))
};
var bM=function(bR){return bB(bR)||typeof bR==="string"
};
var j=function(bU,bR,bT){if(bB(bU)){return true
}var bS=bM(bU);
return !bS?null:aj(D(bU),bR,bT)?true:null
};
var au=function(bS,bW,bV){var bT=[];
var bU=0,bR=bS.length;
if(bV!==c){for(;
bU<bR;
bU++){if(bS[bU]&&bS[bU][bW]){bT.push(bS[bU][bW][bV])
}}}else{for(;
bU<bR;
bU++){if(bS[bU]){bT.push(bS[bU][bW])
}}}return bT
};
var t=function(bT,bR,bX,bW){var bU=[];
var bV=0,bS=bR.length;
if(bW!==c){for(;
bV<bS;
bV++){if(bT[bR[bV]][bX]){bU.push(bT[bR[bV]][bX][bW])
}}}else{for(;
bV<bS;
bV++){bU.push(bT[bR[bV]][bX])
}}return bU
};
var bg=function(bR,bV){var bT=[];
var bS;
if(bV===c){bV=0;
bS=bR
}else{bS=bV;
bV=bR
}for(var bU=bV;
bU<bS;
bU++){bT.push(bU)
}return bT
};
var ad=function(bS){var bT=[];
for(var bU=0,bR=bS.length;
bU<bR;
bU++){if(bS[bU]){bT.push(bS[bU])
}}return bT
};
var D=function(bR){return bR.replace(aU,"")
};
var aH=function(bX){var bU=[],bW,bV,bR=bX.length,bT,bS=0;
again:for(bV=0;
bV<bR;
bV++){bW=bX[bV];
for(bT=0;
bT<bS;
bT++){if(bU[bT]===bW){continue again
}}bU.push(bW);
bS++
}return bU
};
function T(bV){var bU="a aa ai ao as b fn i m o s ",bR,bT,bS={};
bF.each(bV,function(bW,bX){bR=bW.match(/^([^A-Z]+?)([A-Z])/);
if(bR&&bU.indexOf(bR[1]+" ")!==-1){bT=bW.replace(bR[0],bR[2].toLowerCase());
bS[bT]=bW;
if(bR[1]==="o"){T(bV[bW])
}}});
bV._hungarianMap=bS
}function aa(bU,bR,bT){if(!bU._hungarianMap){T(bU)
}var bS;
bF.each(bR,function(bV,bW){bS=bU._hungarianMap[bV];
if(bS!==c&&(bT||bR[bS]===c)){if(bS.charAt(0)==="o"){if(!bR[bS]){bR[bS]={}
}bF.extend(true,bR[bS],bR[bV]);
aa(bU[bS],bR[bS],bT)
}else{bR[bS]=bR[bV]
}}})
}function aS(bU){var bT=N.defaults.oLanguage;
var bS=bU.sZeroRecords;
if(!bU.sEmptyTable&&bS&&bT.sEmptyTable==="No data available in table"){R(bU,bU,"sZeroRecords","sEmptyTable")
}if(!bU.sLoadingRecords&&bS&&bT.sLoadingRecords==="Loading..."){R(bU,bU,"sZeroRecords","sLoadingRecords")
}if(bU.sInfoThousands){bU.sThousands=bU.sInfoThousands
}var bR=bU.sDecimal;
if(bR){br(bR)
}}var aM=function(bT,bS,bR){if(bT[bS]!==c){bT[bR]=bT[bS]
}};
function a4(bU){aM(bU,"ordering","bSort");
aM(bU,"orderMulti","bSortMulti");
aM(bU,"orderClasses","bSortClasses");
aM(bU,"orderCellsTop","bSortCellsTop");
aM(bU,"order","aaSorting");
aM(bU,"orderFixed","aaSortingFixed");
aM(bU,"paging","bPaginate");
aM(bU,"pagingType","sPaginationType");
aM(bU,"pageLength","iDisplayLength");
aM(bU,"searching","bFilter");
var bT=bU.aoSearchCols;
if(bT){for(var bS=0,bR=bT.length;
bS<bR;
bS++){if(bT[bS]){aa(N.models.oSearch,bT[bS])
}}}}function X(bR){aM(bR,"orderable","bSortable");
aM(bR,"orderData","aDataSort");
aM(bR,"orderSequence","asSorting");
aM(bR,"orderDataType","sortDataType")
}function be(bS){var bR=bS.oBrowser;
var bU=bF("<div/>").css({position:"absolute",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(bF("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(bF('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body");
var bT=bU.find(".test");
bR.bScrollOversize=bT[0].offsetWidth===100;
bR.bScrollbarLeft=bT.offset().left!==1;
bU.remove()
}function aV(bV,bX,bZ,bR,bT,bS){var bU=bR,bY,bW=false;
if(bZ!==c){bY=bZ;
bW=true
}while(bU!==bT){if(!bV.hasOwnProperty(bU)){continue
}bY=bW?bX(bY,bV[bU],bU,bV):bV[bU];
bW=true;
bU+=bS
}return bY
}function O(bV,bU){var bW=N.defaults.column;
var bR=bV.aoColumns.length;
var bT=bF.extend({},N.models.oColumn,bW,{nTh:bU?bU:a.createElement("th"),sTitle:bW.sTitle?bW.sTitle:bU?bU.innerHTML:"",aDataSort:bW.aDataSort?bW.aDataSort:[bR],mData:bW.mData?bW.mData:bR,idx:bR});
bV.aoColumns.push(bT);
var bS=bV.aoPreSearchCols;
bS[bR]=bF.extend({},N.models.oSearch,bS[bR]);
a2(bV,bR,null)
}function a2(bT,b2,b1){var bX=bT.aoColumns[b2];
var bR=bT.oClasses;
var bS=bF(bX.nTh);
if(!bX.sWidthOrig){bX.sWidthOrig=bS.attr("width")||null;
var b3=(bS.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);
if(b3){bX.sWidthOrig=b3[1]
}}if(b1!==c&&b1!==null){X(b1);
aa(N.defaults.column,b1);
if(b1.mDataProp!==c&&!b1.mData){b1.mData=b1.mDataProp
}if(b1.sType){bX._sManualType=b1.sType
}if(b1.className&&!b1.sClass){b1.sClass=b1.className
}bF.extend(bX,b1);
R(bX,b1,"sWidth","sWidthOrig");
if(typeof b1.iDataSort==="number"){bX.aDataSort=[b1.iDataSort]
}R(bX,b1,"aDataSort")
}var b0=bX.mData;
var bW=ao(b0);
var bZ=bX.mRender?ao(bX.mRender):null;
var bV=function(b4){return typeof b4==="string"&&b4.indexOf("@")!==-1
};
bX._bAttrSrc=bF.isPlainObject(b0)&&(bV(b0.sort)||bV(b0.type)||bV(b0.filter));
bX.fnGetData=function(b6,b5,b7){var b4=bW(b6,b5,c,b7);
return bZ&&b5?bZ(b4,b5,b6,b7):b4
};
bX.fnSetData=function(b4,b6,b5){return ax(b0)(b4,b6,b5)
};
if(typeof b0!=="number"){bT._rowReadObject=true
}if(!bT.oFeatures.bSort){bX.bSortable=false;
bS.addClass(bR.sSortableNone)
}var bU=bF.inArray("asc",bX.asSorting)!==-1;
var bY=bF.inArray("desc",bX.asSorting)!==-1;
if(!bX.bSortable||(!bU&&!bY)){bX.sSortingClass=bR.sSortableNone;
bX.sSortingClassJUI=""
}else{if(bU&&!bY){bX.sSortingClass=bR.sSortableAsc;
bX.sSortingClassJUI=bR.sSortJUIAscAllowed
}else{if(!bU&&bY){bX.sSortingClass=bR.sSortableDesc;
bX.sSortingClassJUI=bR.sSortJUIDescAllowed
}else{bX.sSortingClass=bR.sSortable;
bX.sSortingClassJUI=bR.sSortJUI
}}}}function aJ(bV){if(bV.oFeatures.bAutoWidth!==false){var bU=bV.aoColumns;
bw(bV);
for(var bT=0,bS=bU.length;
bT<bS;
bT++){bU[bT].nTh.style.width=bU[bT].sWidth
}}var bR=bV.oScroll;
if(bR.sY!==""||bR.sX!==""){l(bV)
}L(bV,null,"column-sizing",[bV])
}function r(bT,bR){var bS=p(bT,"bVisible");
return typeof bS[bR]==="number"?bS[bR]:null
}function bJ(bT,bR){var bS=p(bT,"bVisible");
var bU=bF.inArray(bR,bS);
return bU!==-1?bU:null
}function aQ(bR){return p(bR,"bVisible").length
}function p(bT,bS){var bR=[];
bF.map(bT.aoColumns,function(bV,bU){if(bV[bS]){bR.push(bU)
}});
return bR
}function v(bU){var bV=bU.aoColumns;
var bZ=bU.aoData;
var b1=N.ext.type.detect;
var b0,b4,bY,bS,bX,bW;
var bT,b2,b3,bR;
for(b0=0,b4=bV.length;
b0<b4;
b0++){bT=bV[b0];
bR=[];
if(!bT.sType&&bT._sManualType){bT.sType=bT._sManualType
}else{if(!bT.sType){for(bY=0,bS=b1.length;
bY<bS;
bY++){for(bX=0,bW=bZ.length;
bX<bW;
bX++){if(bR[bX]===c){bR[bX]=bu(bU,bX,b0,"type")
}b3=b1[bY](bR[bX],bU);
if(!b3&&bY!==b1.length-1){break
}if(b3==="html"){break
}}if(b3){bT.sType=b3;
break
}}if(!bT.sType){bT.sType="string"
}}}}}function k(bS,b2,bT,b1){var bY,bU,bX,b3,bW,b0,bR;
var bV=bS.aoColumns;
if(b2){for(bY=b2.length-1;
bY>=0;
bY--){bR=b2[bY];
var bZ=bR.targets!==c?bR.targets:bR.aTargets;
if(!bF.isArray(bZ)){bZ=[bZ]
}for(bX=0,b3=bZ.length;
bX<b3;
bX++){if(typeof bZ[bX]==="number"&&bZ[bX]>=0){while(bV.length<=bZ[bX]){O(bS)
}b1(bZ[bX],bR)
}else{if(typeof bZ[bX]==="number"&&bZ[bX]<0){b1(bV.length+bZ[bX],bR)
}else{if(typeof bZ[bX]==="string"){for(bW=0,b0=bV.length;
bW<b0;
bW++){if(bZ[bX]=="_all"||bF(bV[bW].nTh).hasClass(bZ[bX])){b1(bW,bR)
}}}}}}}}if(bT){for(bY=0,bU=bT.length;
bY<bU;
bY++){b1(bY,bT[bY])
}}}function aO(bS,b1,b0,bX){var bZ=bS.aoData.length;
var bR=bF.extend(true,{},N.models.oRow,{src:b0?"dom":"data"});
bR._aData=b1;
bS.aoData.push(bR);
var bW,bU;
var bV=bS.aoColumns;
for(var bY=0,bT=bV.length;
bY<bT;
bY++){if(b0){bm(bS,bZ,bY,bu(bS,bZ,bY))
}bV[bY].sType=null
}bS.aiDisplayMaster.push(bZ);
if(b0||!bS.oFeatures.bDeferRender){P(bS,bZ,b0,bX)
}return bZ
}function bQ(bS,bR){var bT;
if(!(bR instanceof bF)){bR=bF(bR)
}return bR.map(function(bU,bV){bT=bf(bS,bV);
return aO(bS,bT.data,bV,bT.cells)
})
}function bs(bR,bS){return(bS._DT_RowIndex!==c)?bS._DT_RowIndex:null
}function a0(bR,bS,bT){return bF.inArray(bT,bR.aoData[bS].anCells)
}function bu(bU,bR,bV,bX){var bY=bU.iDraw;
var bS=bU.aoColumns[bV];
var bT=bU.aoData[bR]._aData;
var bZ=bS.sDefaultContent;
var bW=bS.fnGetData(bT,bX,{settings:bU,row:bR,col:bV});
if(bW===c){if(bU.iDrawError!=bY&&bZ===null){aN(bU,0,"Requested unknown parameter "+(typeof bS.mData=="function"?"{function}":"'"+bS.mData+"'")+" for row "+bR,4);
bU.iDrawError=bY
}return bZ
}if((bW===bT||bW===null)&&bZ!==null){bW=bZ
}else{if(typeof bW==="function"){return bW.call(bT)
}}if(bW===null&&bX=="display"){return""
}return bW
}function bm(bS,bT,bW,bV){var bR=bS.aoColumns[bW];
var bU=bS.aoData[bT]._aData;
bR.fnSetData(bU,bV,{settings:bS,row:bT,col:bW})
}var K=/\[.*?\]$/;
var f=/\(\)$/;
function ak(bR){return bF.map(bR.match(/(\\.|[^\.])+/g),function(bS){return bS.replace(/\\./g,".")
})
}function ao(bS){if(bF.isPlainObject(bS)){var bT={};
bF.each(bS,function(bU,bV){if(bV){bT[bU]=ao(bV)
}});
return function(bW,bV,bY,bX){var bU=bT[bV]||bT._;
return bU!==c?bU(bW,bV,bY,bX):bW
}
}else{if(bS===null){return function(bU){return bU
}
}else{if(typeof bS==="function"){return function(bV,bU,bX,bW){return bS(bV,bU,bX,bW)
}
}else{if(typeof bS==="string"&&(bS.indexOf(".")!==-1||bS.indexOf("[")!==-1||bS.indexOf("(")!==-1)){var bR=function(b2,b3,bU){var b5,bY,b0,bX;
if(bU!==""){var b4=ak(bU);
for(var b1=0,bW=b4.length;
b1<bW;
b1++){b5=b4[b1].match(K);
bY=b4[b1].match(f);
if(b5){b4[b1]=b4[b1].replace(K,"");
if(b4[b1]!==""){b2=b2[b4[b1]]
}b0=[];
b4.splice(0,b1+1);
bX=b4.join(".");
for(var bZ=0,b6=b2.length;
bZ<b6;
bZ++){b0.push(bR(b2[bZ],b3,bX))
}var bV=b5[0].substring(1,b5[0].length-1);
b2=(bV==="")?b0:b0.join(bV);
break
}else{if(bY){b4[b1]=b4[b1].replace(f,"");
b2=b2[b4[b1]]();
continue
}}if(b2===null||b2[b4[b1]]===c){return c
}b2=b2[b4[b1]]
}}return b2
};
return function(bV,bU){return bR(bV,bU,bS)
}
}else{return function(bV,bU){return bV[bS]
}
}}}}}function ax(bS){if(bF.isPlainObject(bS)){return ax(bS._)
}else{if(bS===null){return function(){}
}else{if(typeof bS==="function"){return function(bT,bV,bU){bS(bT,"set",bV,bU)
}
}else{if(typeof bS==="string"&&(bS.indexOf(".")!==-1||bS.indexOf("[")!==-1||bS.indexOf("(")!==-1)){var bR=function(b1,bX,bT){var b4=ak(bT),b2;
var b3=b4[b4.length-1];
var b5,bY,bU,bW;
for(var b0=0,bV=b4.length-1;
b0<bV;
b0++){b5=b4[b0].match(K);
bY=b4[b0].match(f);
if(b5){b4[b0]=b4[b0].replace(K,"");
b1[b4[b0]]=[];
b2=b4.slice();
b2.splice(0,b0+1);
bW=b2.join(".");
for(var bZ=0,b6=bX.length;
bZ<b6;
bZ++){bU={};
bR(bU,bX[bZ],bW);
b1[b4[b0]].push(bU)
}return
}else{if(bY){b4[b0]=b4[b0].replace(f,"");
b1=b1[b4[b0]](bX)
}}if(b1[b4[b0]]===null||b1[b4[b0]]===c){b1[b4[b0]]={}
}b1=b1[b4[b0]]
}if(b3.match(f)){b1=b1[b3.replace(f,"")](bX)
}else{b1[b3.replace(K,"")]=bX
}};
return function(bT,bU){return bR(bT,bU,bS)
}
}else{return function(bT,bU){bT[bS]=bU
}
}}}}}function bH(bR){return au(bR.aoData,"_aData")
}function bi(bR){bR.aoData.length=0;
bR.aiDisplayMaster.length=0;
bR.aiDisplay.length=0
}function a5(bS,bU,bW){var bV=-1;
for(var bT=0,bR=bS.length;
bT<bR;
bT++){if(bS[bT]==bU){bV=bT
}else{if(bS[bT]>bU){bS[bT]--
}}}if(bV!=-1&&bW===c){bS.splice(bV,1)
}}function B(bU,bS,bR,bV){var b0=bU.aoData[bS];
var bW,bY;
var bT=function(b1,b2){while(b1.childNodes.length){b1.removeChild(b1.firstChild)
}b1.innerHTML=bu(bU,bS,b2,"display")
};
if(bR==="dom"||((!bR||bR==="auto")&&b0.src==="dom")){b0._aData=bf(bU,b0,bV,bV===c?c:b0._aData).data
}else{var bZ=b0.anCells;
if(bZ){if(bV!==c){bT(bZ[bV],bV)
}else{for(bW=0,bY=bZ.length;
bW<bY;
bW++){bT(bZ[bW],bW)
}}}}b0._aSortData=null;
b0._aFilterData=null;
var bX=bU.aoColumns;
if(bV!==c){bX[bV].sType=null
}else{for(bW=0,bY=bX.length;
bW<bY;
bW++){bX[bW].sType=null
}ac(b0)
}}function bf(bY,b7,b1,b5){var b2=[],bX=b7.firstChild,bR,bU,bT,b0=0,bV,bW=bY.aoColumns,b3=bY._rowReadObject;
b5=b5||b3?{}:[];
var b4=function(ca,cc){if(typeof ca==="string"){var b9=ca.indexOf("@");
if(b9!==-1){var b8=ca.substring(b9+1);
var cb=ax(ca);
cb(b5,cc.getAttribute(b8))
}}};
var b6=function(b8){if(b1===c||b1===b0){bU=bW[b0];
bV=bF.trim(b8.innerHTML);
if(bU&&bU._bAttrSrc){var b9=ax(bU.mData._);
b9(b5,bV);
b4(bU.mData.sort,b8);
b4(bU.mData.type,b8);
b4(bU.mData.filter,b8)
}else{if(b3){if(!bU._setter){bU._setter=ax(bU.mData)
}bU._setter(b5,bV)
}else{b5[b0]=bV
}}}b0++
};
if(bX){while(bX){bR=bX.nodeName.toUpperCase();
if(bR=="TD"||bR=="TH"){b6(bX);
b2.push(bX)
}bX=bX.nextSibling
}}else{b2=b7.anCells;
for(var bZ=0,bS=b2.length;
bZ<bS;
bZ++){b6(b2[bZ])
}}return{data:b5,cells:b2}
}function P(bS,bZ,bR,bX){var b2=bS.aoData[bZ],bV=b2._aData,b1=[],b0,bW,bU,bY,bT;
if(b2.nTr===null){b0=bR||a.createElement("tr");
b2.nTr=b0;
b2.anCells=b1;
b0._DT_RowIndex=bZ;
ac(b2);
for(bY=0,bT=bS.aoColumns.length;
bY<bT;
bY++){bU=bS.aoColumns[bY];
bW=bR?bX[bY]:a.createElement(bU.sCellType);
b1.push(bW);
if(!bR||bU.mRender||bU.mData!==bY){bW.innerHTML=bu(bS,bZ,bY,"display")
}if(bU.sClass){bW.className+=" "+bU.sClass
}if(bU.bVisible&&!bR){b0.appendChild(bW)
}else{if(!bU.bVisible&&bR){bW.parentNode.removeChild(bW)
}}if(bU.fnCreatedCell){bU.fnCreatedCell.call(bS.oInstance,bW,bu(bS,bZ,bY),bV,bZ,bY)
}}L(bS,"aoRowCreatedCallback",null,[b0,bV,bZ])
}b2.nTr.setAttribute("role","row")
}function ac(bU){var bT=bU.nTr;
var bS=bU._aData;
if(bT){if(bS.DT_RowId){bT.id=bS.DT_RowId
}if(bS.DT_RowClass){var bR=bS.DT_RowClass.split(" ");
bU.__rowc=bU.__rowc?aH(bU.__rowc.concat(bR)):bR;
bF(bT).removeClass(bU.__rowc.join(" ")).addClass(bS.DT_RowClass)
}if(bS.DT_RowData){bF(bT).data(bS.DT_RowData)
}}}function aL(bR){var bV,b0,bZ,b2,bU;
var bW=bR.nTHead;
var bX=bR.nTFoot;
var bY=bF("th, td",bW).length===0;
var bT=bR.oClasses;
var bS=bR.aoColumns;
if(bY){b2=bF("<tr/>").appendTo(bW)
}for(bV=0,b0=bS.length;
bV<b0;
bV++){bU=bS[bV];
bZ=bF(bU.nTh).addClass(bU.sClass);
if(bY){bZ.appendTo(b2)
}if(bR.oFeatures.bSort){bZ.addClass(bU.sSortingClass);
if(bU.bSortable!==false){bZ.attr("tabindex",bR.iTabIndex).attr("aria-controls",bR.sTableId);
C(bR,bU.nTh,bV)
}}if(bU.sTitle!=bZ.html()){bZ.html(bU.sTitle)
}S(bR,"header")(bR,bZ,bU,bT)
}if(bY){aw(bR.aoHeader,bW)
}bF(bW).find(">tr").attr("role","row");
bF(bW).find(">tr>th, >tr>td").addClass(bT.sHeaderTH);
bF(bX).find(">tr>th, >tr>td").addClass(bT.sFooterTH);
if(bX!==null){var b1=bR.aoFooter[0];
for(bV=0,b0=b1.length;
bV<b0;
bV++){bU=bS[bV];
bU.nTf=b1[bV].cell;
if(bU.sClass){bF(bU.nTf).addClass(bU.sClass)
}}}}function a6(bU,b3,b6){var bZ,bW,bY,b2,bX,b0,bV,b5;
var bT=[];
var b1=[];
var bR=bU.aoColumns.length;
var bS,b4;
if(!b3){return
}if(b6===c){b6=false
}for(bZ=0,bW=b3.length;
bZ<bW;
bZ++){bT[bZ]=b3[bZ].slice();
bT[bZ].nTr=b3[bZ].nTr;
for(bY=bR-1;
bY>=0;
bY--){if(!bU.aoColumns[bY].bVisible&&!b6){bT[bZ].splice(bY,1)
}}b1.push([])
}for(bZ=0,bW=bT.length;
bZ<bW;
bZ++){b5=bT[bZ].nTr;
if(b5){while((bV=b5.firstChild)){b5.removeChild(bV)
}}for(bY=0,b2=bT[bZ].length;
bY<b2;
bY++){bS=1;
b4=1;
if(b1[bZ][bY]===c){b5.appendChild(bT[bZ][bY].cell);
b1[bZ][bY]=1;
while(bT[bZ+bS]!==c&&bT[bZ][bY].cell==bT[bZ+bS][bY].cell){b1[bZ+bS][bY]=1;
bS++
}while(bT[bZ][bY+b4]!==c&&bT[bZ][bY].cell==bT[bZ][bY+b4].cell){for(bX=0;
bX<bS;
bX++){b1[bZ+bX][bY+b4]=1
}b4++
}bF(bT[bZ][bY].cell).attr("rowspan",bS).attr("colspan",b4)
}}}}function a3(bT){var cd=L(bT,"aoPreDrawCallback","preDraw",[bT]);
if(bF.inArray(false,cd)!==-1){w(bT,false);
return
}var cc,b8,b4;
var bX=[];
var cf=0;
var b1=bT.asStripeClasses;
var b6=b1.length;
var b2=bT.aoOpenRows.length;
var b7=bT.oLanguage;
var b3=bT.iInitDisplayStart;
var cb=y(bT)=="ssp";
var bW=bT.aiDisplay;
bT.bDrawing=true;
if(b3!==c&&b3!==-1){bT._iDisplayStart=cb?b3:b3>=bT.fnRecordsDisplay()?0:b3;
bT.iInitDisplayStart=-1
}var bS=bT._iDisplayStart;
var bU=bT.fnDisplayEnd();
if(bT.bDeferLoading){bT.bDeferLoading=false;
bT.iDraw++;
w(bT,false)
}else{if(!cb){bT.iDraw++
}else{if(!bT.bDestroying&&!af(bT)){return
}}}if(bW.length!==0){var bV=cb?0:bS;
var bR=cb?bT.aoData.length:bU;
for(var b9=bV;
b9<bR;
b9++){var bZ=bW[b9];
var b0=bT.aoData[bZ];
if(b0.nTr===null){P(bT,bZ)
}var ce=b0.nTr;
if(b6!==0){var ca=b1[cf%b6];
if(b0._sRowStripe!=ca){bF(ce).removeClass(b0._sRowStripe).addClass(ca);
b0._sRowStripe=ca
}}L(bT,"aoRowCallback",null,[ce,b0._aData,cf,b9]);
bX.push(ce);
cf++
}}else{var b5=b7.sZeroRecords;
if(bT.iDraw==1&&y(bT)=="ajax"){b5=b7.sLoadingRecords
}else{if(b7.sEmptyTable&&bT.fnRecordsTotal()===0){b5=b7.sEmptyTable
}}bX[0]=bF("<tr/>",{"class":b6?b1[0]:""}).append(bF("<td />",{valign:"top",colSpan:aQ(bT),"class":bT.oClasses.sRowEmpty}).html(b5))[0]
}L(bT,"aoHeaderCallback","header",[bF(bT.nTHead).children("tr")[0],bH(bT),bS,bU,bW]);
L(bT,"aoFooterCallback","footer",[bF(bT.nTFoot).children("tr")[0],bH(bT),bS,bU,bW]);
var bY=bF(bT.nTBody);
bY.children().detach();
bY.append(bF(bX));
L(bT,"aoDrawCallback","draw",[bT]);
bT.bSorted=false;
bT.bFiltered=false;
bT.bDrawing=false
}function ai(bV,bS){var bU=bV.oFeatures,bR=bU.bSort,bT=bU.bFilter;
if(bR){x(bV)
}if(bT){u(bV,bV.oPreviousSearch)
}else{bV.aiDisplay=bV.aiDisplayMaster.slice()
}if(bS!==true){bV._iDisplayStart=0
}bV._drawHold=bS;
a3(bV);
bV._drawHold=false
}function i(bV){var b8=bV.oClasses;
var b5=bF(bV.nTable);
var bX=bF("<div/>").insertBefore(b5);
var bW=bV.oFeatures;
var bS=bF("<div/>",{id:bV.sTableId+"_wrapper","class":b8.sWrapper+(bV.nTFoot?"":" "+b8.sNoFooter)});
bV.nHolding=bX[0];
bV.nTableWrapper=bS[0];
bV.nTableReinsertBefore=bV.nTable.nextSibling;
var bY=bV.sDom.split("");
var b3,bZ,bU,b9,b7,b1;
for(var b4=0;
b4<bY.length;
b4++){b3=null;
bZ=bY[b4];
if(bZ=="<"){bU=bF("<div/>")[0];
b9=bY[b4+1];
if(b9=="'"||b9=='"'){b7="";
b1=2;
while(bY[b4+b1]!=b9){b7+=bY[b4+b1];
b1++
}if(b7=="H"){b7=b8.sJUIHeader
}else{if(b7=="F"){b7=b8.sJUIFooter
}}if(b7.indexOf(".")!=-1){var b2=b7.split(".");
bU.id=b2[0].substr(1,b2[0].length-1);
bU.className=b2[1]
}else{if(b7.charAt(0)=="#"){bU.id=b7.substr(1,b7.length-1)
}else{bU.className=b7
}}b4+=b1
}bS.append(bU);
bS=bF(bU)
}else{if(bZ==">"){bS=bS.parent()
}else{if(bZ=="l"&&bW.bPaginate&&bW.bLengthChange){b3=aR(bV)
}else{if(bZ=="f"&&bW.bFilter){b3=q(bV)
}else{if(bZ=="r"&&bW.bProcessing){b3=bA(bV)
}else{if(bZ=="t"){b3=bz(bV)
}else{if(bZ=="i"&&bW.bInfo){b3=g(bV)
}else{if(bZ=="p"&&bW.bPaginate){b3=aA(bV)
}else{if(N.ext.feature.length!==0){var b6=N.ext.feature;
for(var b0=0,bR=b6.length;
b0<bR;
b0++){if(bZ==b6[b0].cFeature){b3=b6[b0].fnInit(bV);
break
}}}}}}}}}}}if(b3){var bT=bV.aanFeatures;
if(!bT[bZ]){bT[bZ]=[]
}bT[bZ].push(b3);
bS.append(b3)
}}bX.replaceWith(bS)
}function aw(bX,bS){var b4=bF(bS).children("tr");
var b3,b1;
var bZ,bW,bV,bT,b5,b0,bY,b6,bR;
var b2;
var bU=function(b7,ca,b9){var b8=b7[ca];
while(b8[b9]){b9++
}return b9
};
bX.splice(0,bX.length);
for(bZ=0,bT=b4.length;
bZ<bT;
bZ++){bX.push([])
}for(bZ=0,bT=b4.length;
bZ<bT;
bZ++){b3=b4[bZ];
bY=0;
b1=b3.firstChild;
while(b1){if(b1.nodeName.toUpperCase()=="TD"||b1.nodeName.toUpperCase()=="TH"){b6=b1.getAttribute("colspan")*1;
bR=b1.getAttribute("rowspan")*1;
b6=(!b6||b6===0||b6===1)?1:b6;
bR=(!bR||bR===0||bR===1)?1:bR;
b0=bU(bX,bZ,bY);
b2=b6===1?true:false;
for(bV=0;
bV<b6;
bV++){for(bW=0;
bW<bR;
bW++){bX[bZ+bW][b0+bV]={cell:b1,unique:b2};
bX[bZ+bW].nTr=b3
}}}b1=b1.nextSibling
}}}function bh(bY,bS,bW){var bT=[];
if(!bW){bW=bY.aoHeader;
if(bS){bW=[];
aw(bW,bS)
}}for(var bV=0,bR=bW.length;
bV<bR;
bV++){for(var bU=0,bX=bW[bV].length;
bU<bX;
bU++){if(bW[bV][bU].unique&&(!bT[bU]||!bY.bSortCellsTop)){bT[bU]=bW[bV][bU].cell
}}}return bT
}function av(bS,bT,bX){L(bS,"aoServerParams","serverParams",[bT]);
if(bT&&bF.isArray(bT)){var bU={};
var bV=/(.*?)\[\]$/;
bF.each(bT,function(b3,b4){var b2=b4.name.match(bV);
if(b2){var b1=b2[0];
if(!bU[b1]){bU[b1]=[]
}bU[b1].push(b4.value)
}else{bU[b4.name]=b4.value
}});
bT=bU
}var bR;
var bY=bS.ajax;
var bZ=bS.oInstance;
if(bF.isPlainObject(bY)&&bY.data){bR=bY.data;
var b0=bF.isFunction(bR)?bR(bT):bR;
bT=bF.isFunction(bR)&&b0?b0:bF.extend(true,bT,b0);
delete bY.data
}var bW={data:bT,success:function(b2){var b1=b2.error||b2.sError;
if(b1){bS.oApi._fnLog(bS,0,b1)
}bS.json=b2;
L(bS,null,"xhr",[bS,b2]);
bX(b2)
},dataType:"json",cache:false,type:bS.sServerMethod,error:function(b4,b1,b3){var b2=bS.oApi._fnLog;
if(b1=="parsererror"){b2(bS,0,"Invalid JSON response",1)
}else{if(b4.readyState===4){b2(bS,0,"Ajax error",7)
}}w(bS,false)
}};
bS.oAjaxData=bT;
L(bS,null,"preXhr",[bS,bT]);
if(bS.fnServerData){bS.fnServerData.call(bZ,bS.sAjaxSource,bF.map(bT,function(b2,b1){return{name:b1,value:b2}
}),bX,bS)
}else{if(bS.sAjaxSource||typeof bY==="string"){bS.jqXHR=bF.ajax(bF.extend(bW,{url:bY||bS.sAjaxSource}))
}else{if(bF.isFunction(bY)){bS.jqXHR=bY.call(bZ,bT,bX,bS)
}else{bS.jqXHR=bF.ajax(bF.extend(bW,bY));
bY.data=bR
}}}}function af(bR){if(bR.bAjaxDataGet){bR.iDraw++;
w(bR,true);
av(bR,bL(bR),function(bS){V(bR,bS)
});
return false
}return true
}function bL(bW){var bX=bW.aoColumns,b3=bX.length,bT=bW.oFeatures,bR=bW.oPreviousSearch,b2=bW.aoPreSearchCols,b0,bZ=[],bS,bV,b5,bY=aI(bW),b7=bW._iDisplayStart,b1=bT.bPaginate!==false?bW._iDisplayLength:-1;
var bU=function(b8,b9){bZ.push({name:b8,value:b9})
};
bU("sEcho",bW.iDraw);
bU("iColumns",b3);
bU("sColumns",au(bX,"sName").join(","));
bU("iDisplayStart",b7);
bU("iDisplayLength",b1);
var b4={draw:bW.iDraw,columns:[],order:[],start:b7,length:b1,search:{value:bR.sSearch,regex:bR.bRegex}};
for(b0=0;
b0<b3;
b0++){bV=bX[b0];
b5=b2[b0];
bS=typeof bV.mData=="function"?"function":bV.mData;
b4.columns.push({data:bS,name:bV.sName,searchable:bV.bSearchable,orderable:bV.bSortable,search:{value:b5.sSearch,regex:b5.bRegex}});
bU("mDataProp_"+b0,bS);
if(bT.bFilter){bU("sSearch_"+b0,b5.sSearch);
bU("bRegex_"+b0,b5.bRegex);
bU("bSearchable_"+b0,bV.bSearchable)
}if(bT.bSort){bU("bSortable_"+b0,bV.bSortable)
}}if(bT.bFilter){bU("sSearch",bR.sSearch);
bU("bRegex",bR.bRegex)
}if(bT.bSort){bF.each(bY,function(b8,b9){b4.order.push({column:b9.col,dir:b9.dir});
bU("iSortCol_"+b8,b9.col);
bU("sSortDir_"+b8,b9.dir)
});
bU("iSortingCols",bY.length)
}var b6=N.ext.legacy.ajax;
if(b6===null){return bW.sAjaxSource?bZ:b4
}return b6?bZ:b4
}function V(bR,bZ){var bW=function(b0,b1){return bZ[b0]!==c?bZ[b0]:bZ[b1]
};
var bU=bW("sEcho","draw");
var bV=bW("iTotalRecords","recordsTotal");
var bY=bW("iTotalDisplayRecords","recordsFiltered");
if(bU){if(bU*1<bR.iDraw){return
}bR.iDraw=bU*1
}bi(bR);
bR._iRecordsTotal=parseInt(bV,10);
bR._iRecordsDisplay=parseInt(bY,10);
var bS=bt(bR,bZ);
for(var bT=0,bX=bS.length;
bT<bX;
bT++){aO(bR,bS[bT])
}bR.aiDisplay=bR.aiDisplayMaster.slice();
bR.bAjaxDataGet=false;
a3(bR);
if(!bR._bInitComplete){aC(bR,bZ)
}bR.bAjaxDataGet=true;
w(bR,false)
}function bt(bT,bS){var bR=bF.isPlainObject(bT.ajax)&&bT.ajax.dataSrc!==c?bT.ajax.dataSrc:bT.sAjaxDataProp;
if(bR==="data"){return bS.aaData||bS[bR]
}return bR!==""?ao(bR)(bS):bS
}function q(bU){var bV=bU.oClasses;
var bT=bU.sTableId;
var bX=bU.oLanguage;
var bW=bU.oPreviousSearch;
var bS=bU.aanFeatures;
var b2='<input type="search" class="'+bV.sFilterInput+'"/>';
var b1=bX.sSearch;
b1=b1.match(/_INPUT_/)?b1.replace("_INPUT_",b2):b1+b2;
var bR=bF("<div/>",{id:!bS.f?bT+"_filter":null,"class":bV.sFilter}).append(bF("<label/>").append(b1));
var b0=function(){var b4=bS.f;
var b3=!this.value?"":this.value;
if(b3!=bW.sSearch){u(bU,{sSearch:b3,bRegex:bW.bRegex,bSmart:bW.bSmart,bCaseInsensitive:bW.bCaseInsensitive});
bU._iDisplayStart=0;
a3(bU)
}};
var bZ=bU.searchDelay!==null?bU.searchDelay:y(bU)==="ssp"?400:0;
var bY=bF("input",bR).val(bW.sSearch).attr("placeholder",bX.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",bZ?al(b0,bZ):b0).bind("keypress.DT",function(b3){if(b3.keyCode==13){return false
}}).attr("aria-controls",bT);
bF(bU.nTable).on("search.dt.DT",function(b4,b3){if(bU===b3){try{if(bY[0]!==a.activeElement){bY.val(bW.sSearch)
}}catch(b5){}}});
return bR[0]
}function u(bU,bY,bX){var bT=bU.oPreviousSearch;
var bW=bU.aoPreSearchCols;
var bV=function(bZ){bT.sSearch=bZ.sSearch;
bT.bRegex=bZ.bRegex;
bT.bSmart=bZ.bSmart;
bT.bCaseInsensitive=bZ.bCaseInsensitive
};
var bS=function(bZ){return bZ.bEscapeRegex!==c?!bZ.bEscapeRegex:bZ.bRegex
};
v(bU);
if(y(bU)!="ssp"){ay(bU,bY.sSearch,bX,bS(bY),bY.bSmart,bY.bCaseInsensitive);
bV(bY);
for(var bR=0;
bR<bW.length;
bR++){Y(bU,bW[bR].sSearch,bR,bS(bW[bR]),bW[bR].bSmart,bW[bR].bCaseInsensitive)
}ar(bU)
}else{bV(bY)
}bU.bFiltered=true;
L(bU,null,"search",[bU])
}function ar(bU){var bT=N.ext.search;
var bX=bU.aiDisplay;
var bZ,bS;
for(var bW=0,bY=bT.length;
bW<bY;
bW++){var b0=[];
for(var bV=0,bR=bX.length;
bV<bR;
bV++){bS=bX[bV];
bZ=bU.aoData[bS];
if(bT[bW](bU,bZ._aFilterData,bS,bZ._aData,bV)){b0.push(bS)
}}bX.length=0;
bX.push.apply(bX,b0)
}}function Y(bS,bR,bW,bZ,b0,bU){if(bR===""){return
}var bX;
var bY=bS.aiDisplay;
var bT=aW(bR,bZ,b0,bU);
for(var bV=bY.length-1;
bV>=0;
bV--){bX=bS.aoData[bY[bV]]._aFilterData[bW];
if(!bT.test(bX)){bY.splice(bV,1)
}}}function ay(bS,b0,bR,bZ,b2,bV){var bU=aW(b0,bZ,b2,bV);
var bT=bS.oPreviousSearch.sSearch;
var bX=bS.aiDisplayMaster;
var bY,b1,bW;
if(N.ext.search.length!==0){bR=true
}b1=aE(bS);
if(b0.length<=0){bS.aiDisplay=bX.slice()
}else{if(b1||bR||bT.length>b0.length||b0.indexOf(bT)!==0||bS.bSorted){bS.aiDisplay=bX.slice()
}bY=bS.aiDisplay;
for(bW=bY.length-1;
bW>=0;
bW--){if(!bU.test(bS.aoData[bY[bW]]._sFilterRow)){bY.splice(bW,1)
}}}}function aW(bT,bU,bV,bR){bT=bU?bT:m(bT);
if(bV){var bS=bF.map(bT.match(/"[^"]+"|[^ ]+/g)||"",function(bX){if(bX.charAt(0)==='"'){var bW=bX.match(/^"(.*)"$/);
bX=bW?bW[1]:bX
}return bX.replace('"',"")
});
bT="^(?=.*?"+bS.join(")(?=.*?")+").*$"
}return new RegExp(bT,bR?"i":"")
}function m(bR){return bR.replace(aD,"\\$1")
}var e=bF("<div>")[0];
var aq=e.textContent!==c;
function aE(bS){var bU=bS.aoColumns;
var bT;
var bW,bV,b0,bR,bZ,bX,b2;
var b1=N.ext.type.search;
var bY=false;
for(bW=0,b0=bS.aoData.length;
bW<b0;
bW++){b2=bS.aoData[bW];
if(!b2._aFilterData){bZ=[];
for(bV=0,bR=bU.length;
bV<bR;
bV++){bT=bU[bV];
if(bT.bSearchable){bX=bu(bS,bW,bV,"filter");
if(b1[bT.sType]){bX=b1[bT.sType](bX)
}if(bX===null){bX=""
}if(typeof bX!=="string"&&bX.toString){bX=bX.toString()
}}else{bX=""
}if(bX.indexOf&&bX.indexOf("&")!==-1){e.innerHTML=bX;
bX=aq?e.textContent:e.innerText
}if(bX.replace){bX=bX.replace(/[\r\n]/g,"")
}bZ.push(bX)
}b2._aFilterData=bZ;
b2._sFilterRow=bZ.join("  ");
bY=true
}}return bY
}function by(bR){return{search:bR.sSearch,smart:bR.bSmart,regex:bR.bRegex,caseInsensitive:bR.bCaseInsensitive}
}function aF(bR){return{sSearch:bR.search,bSmart:bR.smart,bRegex:bR.regex,bCaseInsensitive:bR.caseInsensitive}
}function g(bS){var bT=bS.sTableId,bR=bS.aanFeatures.i,bU=bF("<div/>",{"class":bS.oClasses.sInfo,id:!bR?bT+"_info":null});
if(!bR){bS.aoDrawCallback.push({fn:at,sName:"information"});
bU.attr("role","status").attr("aria-live","polite");
bF(bS.nTable).attr("aria-describedby",bT+"_info")
}return bU[0]
}function at(bU){var bR=bU.aanFeatures.i;
if(bR.length===0){return
}var bT=bU.oLanguage,bS=bU._iDisplayStart+1,bV=bU.fnDisplayEnd(),bY=bU.fnRecordsTotal(),bX=bU.fnRecordsDisplay(),bW=bX?bT.sInfo:bT.sInfoEmpty;
if(bX!==bY){bW+=" "+bT.sInfoFiltered
}bW+=bT.sInfoPostFix;
bW=bp(bU,bW);
var bZ=bT.fnInfoCallback;
if(bZ!==null){bW=bZ.call(bU.oInstance,bU,bS,bV,bY,bX,bW)
}bF(bR).html(bW)
}function bp(bU,bW){var bS=bU.fnFormatNumber,bX=bU._iDisplayStart+1,bR=bU._iDisplayLength,bV=bU.fnRecordsDisplay(),bT=bR===-1;
return bW.replace(/_START_/g,bS.call(bU,bX)).replace(/_END_/g,bS.call(bU,bU.fnDisplayEnd())).replace(/_MAX_/g,bS.call(bU,bU.fnRecordsTotal())).replace(/_TOTAL_/g,bS.call(bU,bV)).replace(/_PAGE_/g,bS.call(bU,bT?1:Math.ceil(bX/bR))).replace(/_PAGES_/g,bS.call(bU,bT?1:Math.ceil(bV/bR)))
}function h(bX){var bU,bR,bY=bX.iInitDisplayStart;
var bT=bX.aoColumns,bW;
var bV=bX.oFeatures;
if(!bX.bInitialised){setTimeout(function(){h(bX)
},200);
return
}i(bX);
aL(bX);
a6(bX,bX.aoHeader);
a6(bX,bX.aoFooter);
w(bX,true);
if(bV.bAutoWidth){bw(bX)
}for(bU=0,bR=bT.length;
bU<bR;
bU++){bW=bT[bU];
if(bW.sWidth){bW.nTh.style.width=bK(bW.sWidth)
}}ai(bX);
var bS=y(bX);
if(bS!="ssp"){if(bS=="ajax"){av(bX,[],function(b0){var bZ=bt(bX,b0);
for(bU=0;
bU<bZ.length;
bU++){aO(bX,bZ[bU])
}bX.iInitDisplayStart=bY;
ai(bX);
w(bX,false);
aC(bX,b0)
},bX)
}else{w(bX,false);
aC(bX)
}}}function aC(bS,bR){bS._bInitComplete=true;
if(bR){aJ(bS)
}L(bS,"aoInitComplete","init",[bS,bR])
}function aT(bS,bT){var bR=parseInt(bT,10);
bS._iDisplayLength=bR;
bl(bS);
L(bS,null,"length",[bS,bR])
}function aR(bW){var bX=bW.oClasses,bU=bW.sTableId,bT=bW.aLengthMenu,bR=bF.isArray(bT[0]),bV=bR?bT[0]:bT,bZ=bR?bT[1]:bT;
var b0=bF("<select/>",{name:bU+"_length","aria-controls":bU,"class":bX.sLengthSelect});
for(var bY=0,b1=bV.length;
bY<b1;
bY++){b0[0][bY]=new Option(bZ[bY],bV[bY])
}var bS=bF("<div><label/></div>").addClass(bX.sLength);
if(!bW.aanFeatures.l){bS[0].id=bU+"_length"
}bS.children().append(bW.oLanguage.sLengthMenu.replace("_MENU_",b0[0].outerHTML));
bF("select",bS).val(bW._iDisplayLength).bind("change.DT",function(b2){aT(bW,bF(this).val());
a3(bW)
});
bF(bW.nTable).bind("length.dt.DT",function(b4,b3,b2){if(bW===b3){bF("select",bS).val(b2)
}});
return bS[0]
}function aA(bU){var bT=bU.sPaginationType,bW=N.ext.pager[bT],bS=typeof bW==="function",bX=function(bY){a3(bY)
},bV=bF("<div/>").addClass(bU.oClasses.sPaging+bT)[0],bR=bU.aanFeatures;
if(!bS){bW.fnInit(bU,bV,bX)
}if(!bR.p){bV.id=bU.sTableId+"_paginate";
bU.aoDrawCallback.push({fn:function(b1){if(bS){var bY=b1._iDisplayStart,b3=b1._iDisplayLength,bZ=b1.fnRecordsDisplay(),b6=b3===-1,b4=b6?0:Math.ceil(bY/b3),b0=b6?1:Math.ceil(bZ/b3),b5=bW(b4,b0),b2,b7;
for(b2=0,b7=bR.p.length;
b2<b7;
b2++){S(b1,"pageButton")(b1,bR.p[b2],b2,b5,b4,b0)
}}else{bW.fnUpdate(b1,bX)
}},sName:"pagination"})
}return bV
}function aG(bT,bU,bX){var bW=bT._iDisplayStart,bR=bT._iDisplayLength,bS=bT.fnRecordsDisplay();
if(bS===0||bR===-1){bW=0
}else{if(typeof bU==="number"){bW=bU*bR;
if(bW>bS){bW=0
}}else{if(bU=="first"){bW=0
}else{if(bU=="previous"){bW=bR>=0?bW-bR:0;
if(bW<0){bW=0
}}else{if(bU=="next"){if(bW+bR<bS){bW+=bR
}}else{if(bU=="last"){bW=Math.floor((bS-1)/bR)*bR
}else{aN(bT,0,"Unknown paging action: "+bU,5)
}}}}}}var bV=bT._iDisplayStart!==bW;
bT._iDisplayStart=bW;
if(bV){L(bT,null,"page",[bT]);
if(bX){a3(bT)
}}return bV
}function bA(bR){return bF("<div/>",{id:!bR.aanFeatures.r?bR.sTableId+"_processing":null,"class":bR.oClasses.sProcessing}).html(bR.oLanguage.sProcessing).insertBefore(bR.nTable)[0]
}function w(bS,bR){if(bS.oFeatures.bProcessing){bF(bS.aanFeatures.r).css("display",bR?"block":"none")
}L(bS,null,"processing",[bS,bR])
}function bz(b5){var b4=bF(b5.nTable);
b4.attr("role","grid");
var bR=b5.oScroll;
if(bR.sX===""&&bR.sY===""){return b5.nTable
}var bZ=bR.sX;
var bY=bR.sY;
var b6=b5.oClasses;
var b3=b4.children("caption");
var bS=b3.length?b3[0]._captionSide:null;
var bV=bF(b4[0].cloneNode(false));
var b8=bF(b4[0].cloneNode(false));
var bX=b4.children("tfoot");
var b0="<div/>";
var bW=function(b9){return !b9?null:bK(b9)
};
if(bR.sX&&b4.attr("width")==="100%"){b4.removeAttr("width")
}if(!bX.length){bX=null
}var b2=bF(b0,{"class":b6.sScrollWrapper}).append(bF(b0,{"class":b6.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:bZ?bW(bZ):"100%"}).append(bF(b0,{"class":b6.sScrollHeadInner}).css({"box-sizing":"content-box",width:bR.sXInner||"100%"}).append(bV.removeAttr("id").css("margin-left",0).append(bS==="top"?b3:null).append(b4.children("thead"))))).append(bF(b0,{"class":b6.sScrollBody}).css({overflow:"auto",height:bW(bY),width:bW(bZ)}).append(b4));
if(bX){b2.append(bF(b0,{"class":b6.sScrollFoot}).css({overflow:"hidden",border:0,width:bZ?bW(bZ):"100%"}).append(bF(b0,{"class":b6.sScrollFootInner}).append(b8.removeAttr("id").css("margin-left",0).append(bS==="bottom"?b3:null).append(b4.children("tfoot")))))
}var bT=b2.children();
var b1=bT[0];
var b7=bT[1];
var bU=bX?bT[2]:null;
if(bZ){bF(b7).scroll(function(b9){var ca=this.scrollLeft;
b1.scrollLeft=ca;
if(bX){bU.scrollLeft=ca
}})
}b5.nScrollHead=b1;
b5.nScrollBody=b7;
b5.nScrollFoot=bU;
b5.aoDrawCallback.push({fn:l,sName:"scrolling"});
return b2[0]
}function l(cr){var cm=cr.oScroll,bW=cm.sX,ch=cm.sXInner,bT=cm.sY,cf=cm.iBarWidth,ck=bF(cr.nScrollHead),b9=ck[0].style,bV=ck.children("div"),bS=bV[0].style,cu=bV.children("table"),b2=cr.nScrollBody,cd=bF(b2),b8=b2.style,cn=bF(cr.nScrollFoot),cc=cn.children("div"),ca=cc.children("table"),b0=bF(cr.nTHead),cb=bF(cr.nTable),ce=cb[0],bY=ce.style,b7=cr.nTFoot?bF(cr.nTFoot):null,bZ=cr.oBrowser,b4=bZ.bScrollOversize,bU,bX,cp,cs,b5,b3,cj=[],cl=[],cg=[],ct,b1,cv,b6=function(cw){var cx=cw.style;
cx.paddingTop="0";
cx.paddingBottom="0";
cx.borderTopWidth="0";
cx.borderBottomWidth="0";
cx.height=0
};
cb.children("thead, tfoot").remove();
b5=b0.clone().prependTo(cb);
bU=b0.find("tr");
cp=b5.find("tr");
b5.find("th, td").removeAttr("tabindex");
if(b7){b3=b7.clone().prependTo(cb);
bX=b7.find("tr");
cs=b3.find("tr")
}if(!bW){b8.width="100%";
ck[0].style.width="100%"
}bF.each(bh(cr,b5),function(cw,cx){ct=r(cr,cw);
cx.style.width=cr.aoColumns[ct].sWidth
});
if(b7){a8(function(cw){cw.style.width=""
},cs)
}if(cm.bCollapse&&bT!==""){b8.height=(cd[0].offsetHeight+b0[0].offsetHeight)+"px"
}cv=cb.outerWidth();
if(bW===""){bY.width="100%";
if(b4&&(cb.find("tbody").height()>b2.offsetHeight||cd.css("overflow-y")=="scroll")){bY.width=bK(cb.outerWidth()-cf)
}}else{if(ch!==""){bY.width=bK(ch)
}else{if(cv==cd.width()&&cd.height()<cb.height()){bY.width=bK(cv-cf);
if(cb.outerWidth()>cv-cf){bY.width=bK(cv)
}}else{bY.width=bK(cv)
}}}cv=cb.outerWidth();
a8(b6,cp);
a8(function(cw){cg.push(cw.innerHTML);
cj.push(bK(bF(cw).css("width")))
},cp);
a8(function(cx,cw){cx.style.width=cj[cw]
},bU);
bF(cp).height(0);
if(b7){a8(b6,cs);
a8(function(cw){cl.push(bK(bF(cw).css("width")))
},cs);
a8(function(cx,cw){cx.style.width=cl[cw]
},bX);
bF(cs).height(0)
}a8(function(cx,cw){cx.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+cg[cw]+"</div>";
cx.style.width=cj[cw]
},cp);
if(b7){a8(function(cx,cw){cx.innerHTML="";
cx.style.width=cl[cw]
},cs)
}if(cb.outerWidth()<cv){b1=((b2.scrollHeight>b2.offsetHeight||cd.css("overflow-y")=="scroll"))?cv+cf:cv;
if(b4&&(b2.scrollHeight>b2.offsetHeight||cd.css("overflow-y")=="scroll")){bY.width=bK(b1-cf)
}if(bW===""||ch!==""){aN(cr,1,"Possible column misalignment",6)
}}else{b1="100%"
}b8.width=bK(b1);
b9.width=bK(b1);
if(b7){cr.nScrollFoot.style.width=bK(b1)
}if(!bT){if(b4){b8.height=bK(ce.offsetHeight+cf)
}}if(bT&&cm.bCollapse){b8.height=bK(bT);
var cq=(bW&&ce.offsetWidth>b2.offsetWidth)?cf:0;
if(ce.offsetHeight<b2.offsetHeight){b8.height=bK(ce.offsetHeight+cq)
}}var bR=cb.outerWidth();
cu[0].style.width=bK(bR);
bS.width=bK(bR);
var ci=cb.height()>b2.clientHeight||cd.css("overflow-y")=="scroll";
var co="padding"+(bZ.bScrollbarLeft?"Left":"Right");
bS[co]=ci?cf+"px":"0px";
if(b7){ca[0].style.width=bK(bR);
cc[0].style.width=bK(bR);
cc[0].style[co]=ci?cf+"px":"0px"
}cd.scroll();
if((cr.bSorted||cr.bFiltered)&&!cr._drawHold){b2.scrollTop=0
}}function a8(bW,bT,bS){var bU=0,bV=0,bR=bT.length;
var bY,bX;
while(bV<bR){bY=bT[bV].firstChild;
bX=bS?bS[bV].firstChild:null;
while(bY){if(bY.nodeType===1){if(bS){bW(bY,bX,bU)
}else{bW(bY,bU)
}bU++
}bY=bY.nextSibling;
bX=bS?bX.nextSibling:null
}bV++
}}var a1=/<.*?>/g;
function bw(bX){var b5=bX.nTable,bU=bX.aoColumns,bT=bX.oScroll,b2=bT.sY,b3=bT.sX,bW=bT.sXInner,b9=bU.length,b7=p(bX,"bVisible"),b6=bF("th",bX.nTHead),b0=b5.getAttribute("width"),bZ=b5.parentNode,b8=false,b4,bV,ca,b1,bR;
for(b4=0;
b4<b7.length;
b4++){bV=bU[b7[b4]];
if(bV.sWidth!==null){bV.sWidth=ag(bV.sWidthOrig,bZ);
b8=true
}}if(!b8&&!b3&&!b2&&b9==aQ(bX)&&b9==b6.length){for(b4=0;
b4<b9;
b4++){bU[b4].sWidth=bK(b6.eq(b4).width())
}}else{var bY=bF(b5).clone().empty().css("visibility","hidden").removeAttr("id").append(bF(bX.nTHead).clone(false)).append(bF(bX.nTFoot).clone(false)).append(bF("<tbody><tr/></tbody>"));
bY.find("tfoot th, tfoot td").css("width","");
var bS=bY.find("tbody tr");
b6=bh(bX,bY.find("thead")[0]);
for(b4=0;
b4<b7.length;
b4++){bV=bU[b7[b4]];
b6[b4].style.width=bV.sWidthOrig!==null&&bV.sWidthOrig!==""?bK(bV.sWidthOrig):""
}if(bX.aoData.length){for(b4=0;
b4<b7.length;
b4++){ca=b7[b4];
bV=bU[ca];
bF(aK(bX,ca)).clone(false).append(bV.sContentPadding).appendTo(bS)
}}bY.appendTo(bZ);
if(b3&&bW){bY.width(bW)
}else{if(b3){bY.css("width","auto");
if(bY.width()<bZ.offsetWidth){bY.width(bZ.offsetWidth)
}}else{if(b2){bY.width(bZ.offsetWidth)
}else{if(b0){bY.width(b0)
}}}}az(bX,bY[0]);
if(b3){var cb=0;
for(b4=0;
b4<b7.length;
b4++){bV=bU[b7[b4]];
bR=bF(b6[b4]).outerWidth();
cb+=bV.sWidthOrig===null?bR:parseInt(bV.sWidth,10)+bR-bF(b6[b4]).width()
}bY.width(bK(cb));
b5.style.width=bK(cb)
}for(b4=0;
b4<b7.length;
b4++){bV=bU[b7[b4]];
b1=bF(b6[b4]).width();
if(b1){bV.sWidth=bK(b1)
}}b5.style.width=bK(bY.css("width"));
bY.remove()
}if(b0){b5.style.width=bK(b0)
}if((b0||b3)&&!bX._reszEvt){bF(b).bind("resize.DT-"+bX.sInstance,al(function(){aJ(bX)
}));
bX._reszEvt=true
}}function al(bR,bU){var bT=bU!==c?bU:200,bS,bV;
return function(){var bY=this,bX=+new Date(),bW=arguments;
if(bS&&bX<bS+bT){clearTimeout(bV);
bV=setTimeout(function(){bS=c;
bR.apply(bY,bW)
},bT)
}else{if(bS){bS=bX;
bR.apply(bY,bW)
}else{bS=bX
}}}
}function ag(bS,bR){if(!bS){return 0
}var bU=bF("<div/>").css("width",bK(bS)).appendTo(bR||a.body);
var bT=bU[0].offsetWidth;
bU.remove();
return bT
}function az(bT,bU){var bR=bT.oScroll;
if(bR.sX||bR.sY){var bS=!bR.sX?bR.iBarWidth:0;
bU.style.width=bK(bF(bU).outerWidth()-bS)
}}function aK(bS,bU){var bR=ab(bS,bU);
if(bR<0){return null
}var bT=bS.aoData[bR];
return !bT.nTr?bF("<td/>").html(bu(bS,bR,bU,"display"))[0]:bT.anCells[bU]
}function ab(bW,bX){var bV,bR=-1,bT=-1;
for(var bU=0,bS=bW.aoData.length;
bU<bS;
bU++){bV=bu(bW,bU,bX,"display")+"";
bV=bV.replace(a1,"");
if(bV.length>bR){bR=bV.length;
bT=bU
}}return bT
}function bK(bR){if(bR===null){return"0px"
}if(typeof bR=="number"){return bR<0?"0px":bR+"px"
}return bR.match(/\d$/)?bR+"px":bR
}function bb(){if(!N.__scrollbarWidth){var bT=bF("<p/>").css({width:"100%",height:200,padding:0})[0];
var bU=bF("<div/>").css({position:"absolute",top:0,left:0,width:200,height:150,padding:0,overflow:"hidden",visibility:"hidden"}).append(bT).appendTo("body");
var bS=bT.offsetWidth;
bU.css("overflow","scroll");
var bR=bT.offsetWidth;
if(bS===bR){bR=bU[0].clientWidth
}bU.remove();
N.__scrollbarWidth=bS-bR
}return N.__scrollbarWidth
}function aI(bU){var bZ,bT,bW,b0,bX=[],b2=[],b4=bU.aoColumns,bY,b3,bR,b1,bV=bU.aaSortingFixed,b6=bF.isPlainObject(bV),bS=[],b5=function(b7){if(b7.length&&!bF.isArray(b7[0])){bS.push(b7)
}else{bS.push.apply(bS,b7)
}};
if(bF.isArray(bV)){b5(bV)
}if(b6&&bV.pre){b5(bV.pre)
}b5(bU.aaSorting);
if(b6&&bV.post){b5(bV.post)
}for(bZ=0;
bZ<bS.length;
bZ++){b1=bS[bZ][0];
bY=b4[b1].aDataSort;
for(bW=0,b0=bY.length;
bW<b0;
bW++){b3=bY[bW];
bR=b4[b3].sType||"string";
if(bS[bZ]._idx===c){bS[bZ]._idx=bF.inArray(bS[bZ][1],b4[b3].asSorting)
}bX.push({src:b1,col:b3,dir:bS[bZ][1],index:bS[bZ]._idx,type:bR,formatter:N.ext.type.order[bR+"-pre"]})
}}return bX
}function x(bW){var b8,bU,b5,b7,b9,b4,bR,b1,bX,cd=[],b0=N.ext.type.order,b2=bW.aoData,b6=bW.aoColumns,bS,cc,bV,bZ,b3,ca=0,bY,bT=bW.aiDisplayMaster,cb;
v(bW);
cb=aI(bW);
for(b8=0,bU=cb.length;
b8<bU;
b8++){bY=cb[b8];
if(bY.formatter){ca++
}G(bW,bY.col)
}if(y(bW)!="ssp"&&cb.length!==0){for(b8=0,b5=bT.length;
b8<b5;
b8++){cd[bT[b8]]=b8
}if(ca===cb.length){bT.sort(function(cm,cl){var cn,ck,ce,cj,cf,cg=cb.length,ci=b2[cm]._aSortData,ch=b2[cl]._aSortData;
for(ce=0;
ce<cg;
ce++){cf=cb[ce];
cn=ci[cf.col];
ck=ch[cf.col];
cj=cn<ck?-1:cn>ck?1:0;
if(cj!==0){return cf.dir==="asc"?cj:-cj
}}cn=cd[cm];
ck=cd[cl];
return cn<ck?-1:cn>ck?1:0
})
}else{bT.sort(function(co,cn){var cp,cm,cf,ce,ck,cg,cl,ch=cb.length,cj=b2[co]._aSortData,ci=b2[cn]._aSortData;
for(cf=0;
cf<ch;
cf++){cg=cb[cf];
cp=cj[cg.col];
cm=ci[cg.col];
cl=b0[cg.type+"-"+cg.dir]||b0["string-"+cg.dir];
ck=cl(cp,cm);
if(ck!==0){return ck
}}cp=cd[co];
cm=cd[cn];
return cp<cm?-1:cp>cm?1:0
})
}}bW.bSorted=true
}function bd(bV){var b1;
var b0;
var bW=bV.aoColumns;
var bX=aI(bV);
var bY=bV.oLanguage.oAria;
for(var bZ=0,bT=bW.length;
bZ<bT;
bZ++){var bS=bW[bZ];
var bU=bS.asSorting;
var b2=bS.sTitle.replace(/<.*?>/g,"");
var bR=bS.nTh;
bR.removeAttribute("aria-sort");
if(bS.bSortable){if(bX.length>0&&bX[0].col==bZ){bR.setAttribute("aria-sort",bX[0].dir=="asc"?"ascending":"descending");
b0=bU[bX[0].index+1]||bU[0]
}else{b0=bU[0]
}b1=b2+(b0==="asc"?bY.sSortAscending:bY.sSortDescending)
}else{b1=b2
}bR.setAttribute("aria-label",b1)
}}function bj(bU,bW,bR,b0){var bS=bU.aoColumns[bW];
var bY=bU.aaSorting;
var bV=bS.asSorting;
var bZ;
var bX=function(b2,b3){var b1=b2._idx;
if(b1===c){b1=bF.inArray(b2[1],bV)
}return b1+1<bV.length?b1+1:b3?null:0
};
if(typeof bY[0]==="number"){bY=bU.aaSorting=[bY]
}if(bR&&bU.oFeatures.bSortMulti){var bT=bF.inArray(bW,au(bY,"0"));
if(bT!==-1){bZ=bX(bY[bT],true);
if(bZ===null){bY.splice(bT,1)
}else{bY[bT][1]=bV[bZ];
bY[bT]._idx=bZ
}}else{bY.push([bW,bV[0],0]);
bY[bY.length-1]._idx=0
}}else{if(bY.length&&bY[0][0]==bW){bZ=bX(bY[0]);
bY.length=1;
bY[0][1]=bV[bZ];
bY[0]._idx=bZ
}else{bY.length=0;
bY.push([bW,bV[0]]);
bY[0]._idx=0
}}ai(bU);
if(typeof b0=="function"){b0(bU)
}}function C(bT,bS,bV,bU){var bR=bT.aoColumns[bV];
bc(bS,{},function(bW){if(bR.bSortable===false){return
}if(bT.oFeatures.bProcessing){w(bT,true);
setTimeout(function(){bj(bT,bV,bW.shiftKey,bU);
if(y(bT)!=="ssp"){w(bT,false)
}},0)
}else{bj(bT,bV,bW.shiftKey,bU)
}})
}function ae(bW){var bX=bW.aLastSort;
var bS=bW.oClasses.sSortColumn;
var bU=aI(bW);
var bV=bW.oFeatures;
var bT,bR,bY;
if(bV.bSort&&bV.bSortClasses){for(bT=0,bR=bX.length;
bT<bR;
bT++){bY=bX[bT].src;
bF(au(bW.aoData,"anCells",bY)).removeClass(bS+(bT<2?bT+1:3))
}for(bT=0,bR=bU.length;
bT<bR;
bT++){bY=bU[bT].src;
bF(au(bW.aoData,"anCells",bY)).addClass(bS+(bT<2?bT+1:3))
}}bW.aLastSort=bU
}function G(bR,bW){var bS=bR.aoColumns[bW];
var b0=N.ext.order[bS.sSortDataType];
var bY;
if(b0){bY=b0.call(bR.oInstance,bR,bW,bJ(bR,bW))
}var bZ,bU;
var bV=N.ext.type.order[bS.sType+"-pre"];
for(var bT=0,bX=bR.aoData.length;
bT<bX;
bT++){bZ=bR.aoData[bT];
if(!bZ._aSortData){bZ._aSortData=[]
}if(!bZ._aSortData[bW]||b0){bU=b0?bY[bT]:bu(bR,bT,bW,"sort");
bZ._aSortData[bW]=bV?bV(bU):bU
}}}function bo(bR){if(!bR.oFeatures.bStateSave||bR.bDestroying){return
}var bS={time:+new Date(),start:bR._iDisplayStart,length:bR._iDisplayLength,order:bF.extend(true,[],bR.aaSorting),search:by(bR.oPreviousSearch),columns:bF.map(bR.aoColumns,function(bT,bU){return{visible:bT.bVisible,search:by(bR.aoPreSearchCols[bU])}
})};
L(bR,"aoStateSaveParams","stateSaveParams",[bR,bS]);
bR.oSavedState=bS;
bR.fnStateSaveCallback.call(bR.oInstance,bR,bS)
}function bO(bT,bY){var bW,bZ;
var bU=bT.aoColumns;
if(!bT.oFeatures.bStateSave){return
}var bR=bT.fnStateLoadCallback.call(bT.oInstance,bT);
if(!bR||!bR.time){return
}var bX=L(bT,"aoStateLoadParams","stateLoadParams",[bT,bR]);
if(bF.inArray(false,bX)!==-1){return
}var bV=bT.iStateDuration;
if(bV>0&&bR.time<+new Date()-(bV*1000)){return
}if(bU.length!==bR.columns.length){return
}bT.oLoadedState=bF.extend(true,{},bR);
bT._iDisplayStart=bR.start;
bT.iInitDisplayStart=bR.start;
bT._iDisplayLength=bR.length;
bT.aaSorting=[];
bF.each(bR.order,function(b1,b0){bT.aaSorting.push(b0[0]>=bU.length?[0,b0[1]]:b0)
});
bF.extend(bT.oPreviousSearch,aF(bR.search));
for(bW=0,bZ=bR.columns.length;
bW<bZ;
bW++){var bS=bR.columns[bW];
bU[bW].bVisible=bS.visible;
bF.extend(bT.aoPreSearchCols[bW],aF(bS.search))
}L(bT,"aoStateLoaded","stateLoaded",[bT,bR])
}function an(bT){var bS=N.settings;
var bR=bF.inArray(bT,au(bS,"nTable"));
return bR!==-1?bS[bR]:null
}function aN(bU,bW,bV,bR){bV="DataTables warning: "+(bU!==null?"table id="+bU.sTableId+" - ":"")+bV;
if(bR){bV+=". For more information about this error, please see http://datatables.net/tn/"+bR
}if(!bW){var bT=N.ext;
var bS=bT.sErrMode||bT.errMode;
if(bS=="alert"){alert(bV)
}else{throw new Error(bV)
}}else{if(b.console&&console.log){console.log(bV)
}}}function R(bS,bU,bR,bT){if(bF.isArray(bR)){bF.each(bR,function(bV,bW){if(bF.isArray(bW)){R(bS,bU,bW[0],bW[1])
}else{R(bS,bU,bW)
}});
return
}if(bT===c){bT=bR
}if(bU[bR]!==c){bS[bT]=bU[bR]
}}function aX(bR,bT,bS){var bU;
for(var bV in bT){if(bT.hasOwnProperty(bV)){bU=bT[bV];
if(bF.isPlainObject(bU)){if(!bF.isPlainObject(bR[bV])){bR[bV]={}
}bF.extend(true,bR[bV],bU)
}else{if(bS&&bV!=="data"&&bV!=="aaData"&&bF.isArray(bU)){bR[bV]=bU.slice()
}else{bR[bV]=bU
}}}}return bR
}function bc(bT,bS,bR){bF(bT).bind("click.DT",bS,function(bU){bT.blur();
bR(bU)
}).bind("keypress.DT",bS,function(bU){if(bU.which===13){bU.preventDefault();
bR(bU)
}}).bind("selectstart.DT",function(){return false
})
}function bN(bU,bS,bR,bT){if(bR){bU[bS].push({fn:bR,sName:bT})
}}function L(bT,bU,bV,bS){var bR=[];
if(bU){bR=bF.map(bT[bU].slice().reverse(),function(bX,bW){return bX.fn.apply(bT.oInstance,bS)
})
}if(bV!==null){bF(bT.nTable).trigger(bV+".dt",bS)
}return bR
}function bl(bT){var bU=bT._iDisplayStart,bS=bT.fnDisplayEnd(),bR=bT._iDisplayLength;
if(bU>=bS){bU=bS-bR
}bU-=(bU%bR);
if(bR===-1||bU<0){bU=0
}bT._iDisplayStart=bU
}function S(bS,bR){var bU=bS.renderer;
var bT=N.ext.renderer[bR];
if(bF.isPlainObject(bU)&&bU[bR]){return bT[bU[bR]]||bT._
}else{if(typeof bU==="string"){return bT[bU]||bT._
}}return bT._
}function y(bR){if(bR.oFeatures.bServerSide){return"ssp"
}else{if(bR.ajax||bR.sAjaxSource){return"ajax"
}}return"dom"
}N=function(bT){this.$=function(bX,bW){return this.api(true).$(bX,bW)
};
this._=function(bX,bW){return this.api(true).rows(bX,bW).data()
};
this.api=function(bW){return bW?new J(an(this[I.iApiIndex])):new J(this)
};
this.fnAddData=function(bY,bZ){var bW=this.api(true);
var bX=bF.isArray(bY)&&(bF.isArray(bY[0])||bF.isPlainObject(bY[0]))?bW.rows.add(bY):bW.row.add(bY);
if(bZ===c||bZ){bW.draw()
}return bX.flatten().toArray()
};
this.fnAdjustColumnSizing=function(bZ){var bY=this.api(true).columns.adjust();
var bX=bY.settings()[0];
var bW=bX.oScroll;
if(bZ===c||bZ){bY.draw(false)
}else{if(bW.sX!==""||bW.sY!==""){l(bX)
}}};
this.fnClearTable=function(bX){var bW=this.api(true).clear();
if(bX===c||bX){bW.draw()
}};
this.fnClose=function(bW){this.api(true).row(bW).child.hide()
};
this.fnDeleteRow=function(b0,b2,b1){var bX=this.api(true);
var bZ=bX.rows(b0);
var bW=bZ.settings()[0];
var bY=bW.aoData[bZ[0][0]];
bZ.remove();
if(b2){b2.call(this,bW,bY)
}if(b1===c||b1){bX.draw()
}return bY
};
this.fnDestroy=function(bW){this.api(true).destroy(bW)
};
this.fnDraw=function(bW){this.api(true).draw(!bW)
};
this.fnFilter=function(b0,bX,bY,b2,b1,bW){var bZ=this.api(true);
if(bX===null||bX===c){bZ.search(b0,bY,b2,bW)
}else{bZ.column(bX).search(b0,bY,b2,bW)
}bZ.draw()
};
this.fnGetData=function(bZ,bW){var bY=this.api(true);
if(bZ!==c){var bX=bZ.nodeName?bZ.nodeName.toLowerCase():"";
return bW!==c||bX=="td"||bX=="th"?bY.cell(bZ,bW).data():bY.row(bZ).data()||null
}return bY.data().toArray()
};
this.fnGetNodes=function(bX){var bW=this.api(true);
return bX!==c?bW.row(bX).node():bW.rows().nodes().flatten().toArray()
};
this.fnGetPosition=function(bY){var bX=this.api(true);
var bZ=bY.nodeName.toUpperCase();
if(bZ=="TR"){return bX.row(bY).index()
}else{if(bZ=="TD"||bZ=="TH"){var bW=bX.cell(bY).index();
return[bW.row,bW.columnVisible,bW.column]
}}return null
};
this.fnIsOpen=function(bW){return this.api(true).row(bW).child.isShown()
};
this.fnOpen=function(bX,bW,bY){return this.api(true).row(bX).child(bW,bY).show().child()[0]
};
this.fnPageChange=function(bW,bY){var bX=this.api(true).page(bW);
if(bY===c||bY){bX.draw(false)
}};
this.fnSetColumnVis=function(bX,bW,bZ){var bY=this.api(true).column(bX).visible(bW);
if(bZ===c||bZ){bY.columns.adjust().draw()
}};
this.fnSettings=function(){return an(this[I.iApiIndex])
};
this.fnSort=function(bW){this.api(true).order(bW).draw()
};
this.fnSortListener=function(bX,bW,bY){this.api(true).order.listener(bX,bW,bY)
};
this.fnUpdate=function(b0,bZ,bW,b1,bY){var bX=this.api(true);
if(bW===c||bW===null){bX.row(bZ).data(b0)
}else{bX.cell(bZ,bW).data(b0)
}if(bY===c||bY){bX.columns.adjust()
}if(b1===c||b1){bX.draw()
}return 0
};
this.fnVersionCheck=I.fnVersionCheck;
var bU=this;
var bS=bT===c;
var bR=this.length;
if(bS){bT={}
}this.oApi=this.internal=I.internal;
for(var bV in N.ext.internal){if(bV){this[bV]=ah(bV)
}}this.each(function(){var ce={};
var cb=bR>1?aX(ce,bT,true):bT;
var ck=0,ci,cj,cn,ch,bW;
var b6=this.getAttribute("id");
var b5=false;
var b9=N.defaults;
if(this.nodeName.toLowerCase()!="table"){aN(null,0,"Non-table node initialisation ("+this.nodeName+")",2);
return
}a4(b9);
X(b9.column);
aa(b9,b9,true);
aa(b9.column,b9.column,true);
aa(b9,cb);
var b2=N.settings;
for(ck=0,ci=b2.length;
ck<ci;
ck++){if(b2[ck].nTable==this){var cg=cb.bRetrieve!==c?cb.bRetrieve:b9.bRetrieve;
var b8=cb.bDestroy!==c?cb.bDestroy:b9.bDestroy;
if(bS||cg){return b2[ck].oInstance
}else{if(b8){b2[ck].oInstance.fnDestroy();
break
}else{aN(b2[ck],0,"Cannot reinitialise DataTable",3);
return
}}}if(b2[ck].sTableId==this.id){b2.splice(ck,1);
break
}}if(b6===null||b6===""){b6="DataTables_Table_"+(N.ext._unique++);
this.id=b6
}var b3=bF.extend(true,{},N.models.oSettings,{nTable:this,oApi:bU.internal,oInit:cb,sDestroyWidth:bF(this)[0].style.width,sInstance:b6,sTableId:b6});
b2.push(b3);
b3.oInstance=(bU.length===1)?bU:bF(this).dataTable();
a4(cb);
if(cb.oLanguage){aS(cb.oLanguage)
}if(cb.aLengthMenu&&!cb.iDisplayLength){cb.iDisplayLength=bF.isArray(cb.aLengthMenu[0])?cb.aLengthMenu[0][0]:cb.aLengthMenu[0]
}cb=aX(bF.extend(true,{},b9),cb);
R(b3.oFeatures,cb,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]);
R(b3,cb,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);
R(b3.oScroll,cb,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);
R(b3.oLanguage,cb,"fnInfoCallback");
bN(b3,"aoDrawCallback",cb.fnDrawCallback,"user");
bN(b3,"aoServerParams",cb.fnServerParams,"user");
bN(b3,"aoStateSaveParams",cb.fnStateSaveParams,"user");
bN(b3,"aoStateLoadParams",cb.fnStateLoadParams,"user");
bN(b3,"aoStateLoaded",cb.fnStateLoaded,"user");
bN(b3,"aoRowCallback",cb.fnRowCallback,"user");
bN(b3,"aoRowCreatedCallback",cb.fnCreatedRow,"user");
bN(b3,"aoHeaderCallback",cb.fnHeaderCallback,"user");
bN(b3,"aoFooterCallback",cb.fnFooterCallback,"user");
bN(b3,"aoInitComplete",cb.fnInitComplete,"user");
bN(b3,"aoPreDrawCallback",cb.fnPreDrawCallback,"user");
var b7=b3.oClasses;
if(cb.bJQueryUI){bF.extend(b7,N.ext.oJUIClasses,cb.oClasses);
if(cb.sDom===b9.sDom&&b9.sDom==="lfrtip"){b3.sDom='<"H"lfr>t<"F"ip>'
}if(!b3.renderer){b3.renderer="jqueryui"
}else{if(bF.isPlainObject(b3.renderer)&&!b3.renderer.header){b3.renderer.header="jqueryui"
}}}else{bF.extend(b7,N.ext.classes,cb.oClasses)
}bF(this).addClass(b7.sTable);
if(b3.oScroll.sX!==""||b3.oScroll.sY!==""){b3.oScroll.iBarWidth=bb()
}if(b3.oScroll.sX===true){b3.oScroll.sX="100%"
}if(b3.iInitDisplayStart===c){b3.iInitDisplayStart=cb.iDisplayStart;
b3._iDisplayStart=cb.iDisplayStart
}if(cb.iDeferLoading!==null){b3.bDeferLoading=true;
var co=bF.isArray(cb.iDeferLoading);
b3._iRecordsDisplay=co?cb.iDeferLoading[0]:cb.iDeferLoading;
b3._iRecordsTotal=co?cb.iDeferLoading[1]:cb.iDeferLoading
}var cd=b3.oLanguage;
bF.extend(true,cd,cb.oLanguage);
if(cd.sUrl!==""){bF.ajax({dataType:"json",url:cd.sUrl,success:function(cq){aS(cq);
aa(b9.oLanguage,cq);
bF.extend(true,cd,cq);
h(b3)
},error:function(){h(b3)
}});
b5=true
}if(cb.asStripeClasses===null){b3.asStripeClasses=[b7.sStripeOdd,b7.sStripeEven]
}var cl=b3.asStripeClasses;
var b1=bF("tbody tr:eq(0)",this);
if(bF.inArray(true,bF.map(cl,function(cr,cq){return b1.hasClass(cr)
}))!==-1){bF("tbody tr",this).removeClass(cl.join(" "));
b3.asDestroyStripes=cl.slice()
}var cf=[];
var b0;
var cc=this.getElementsByTagName("thead");
if(cc.length!==0){aw(b3.aoHeader,cc[0]);
cf=bh(b3)
}if(cb.aoColumns===null){b0=[];
for(ck=0,ci=cf.length;
ck<ci;
ck++){b0.push(null)
}}else{b0=cb.aoColumns
}for(ck=0,ci=b0.length;
ck<ci;
ck++){O(b3,cf?cf[ck]:null)
}k(b3,cb.aoColumnDefs,b0,function(cr,cq){a2(b3,cr,cq)
});
if(b1.length){var cp=function(cq,cr){return cq.getAttribute("data-"+cr)?cr:null
};
bF.each(bf(b3,b1[0]).cells,function(ct,cq){var cr=b3.aoColumns[ct];
if(cr.mData===ct){var cs=cp(cq,"sort")||cp(cq,"order");
var cu=cp(cq,"filter")||cp(cq,"search");
if(cs!==null||cu!==null){cr.mData={_:ct+".display",sort:cs!==null?ct+".@data-"+cs:c,type:cs!==null?ct+".@data-"+cs:c,filter:cu!==null?ct+".@data-"+cu:c};
a2(b3,ct)
}}})
}var b4=b3.oFeatures;
if(cb.bStateSave){b4.bStateSave=true;
bO(b3,cb);
bN(b3,"aoDrawCallback",bo,"state_save")
}if(cb.aaSorting===c){var bZ=b3.aaSorting;
for(ck=0,ci=bZ.length;
ck<ci;
ck++){bZ[ck][1]=b3.aoColumns[ck].asSorting[0]
}}ae(b3);
if(b4.bSort){bN(b3,"aoDrawCallback",function(){if(b3.bSorted){var cq=aI(b3);
var cr={};
bF.each(cq,function(cs,ct){cr[ct.src]=ct.dir
});
L(b3,null,"order",[b3,cq,cr]);
bd(b3)
}})
}bN(b3,"aoDrawCallback",function(){if(b3.bSorted||y(b3)==="ssp"||b4.bDeferRender){ae(b3)
}},"sc");
be(b3);
var bY=bF(this).children("caption").each(function(){this._captionSide=bF(this).css("caption-side")
});
var cm=bF(this).children("thead");
if(cm.length===0){cm=bF("<thead/>").appendTo(this)
}b3.nTHead=cm[0];
var bX=bF(this).children("tbody");
if(bX.length===0){bX=bF("<tbody/>").appendTo(this)
}b3.nTBody=bX[0];
var ca=bF(this).children("tfoot");
if(ca.length===0&&bY.length>0&&(b3.oScroll.sX!==""||b3.oScroll.sY!=="")){ca=bF("<tfoot/>").appendTo(this)
}if(ca.length===0||ca.children().length===0){bF(this).addClass(b7.sNoFooter)
}else{if(ca.length>0){b3.nTFoot=ca[0];
aw(b3.aoFooter,b3.nTFoot)
}}if(cb.aaData){for(ck=0;
ck<cb.aaData.length;
ck++){aO(b3,cb.aaData[ck])
}}else{if(b3.bDeferLoading||y(b3)=="dom"){bQ(b3,bF(b3.nTBody).children("tr"))
}}b3.aiDisplay=b3.aiDisplayMaster.slice();
b3.bInitialised=true;
if(b5===false){h(b3)
}});
bU=null;
return this
};
var U=[];
var o=Array.prototype;
var bP=function(bT){var bR,bV;
var bU=N.settings;
var bS=bF.map(bU,function(bX,bW){return bX.nTable
});
if(!bT){return[]
}else{if(bT.nTable&&bT.oApi){return[bT]
}else{if(bT.nodeName&&bT.nodeName.toLowerCase()==="table"){bR=bF.inArray(bT,bS);
return bR!==-1?[bU[bR]]:null
}else{if(bT&&typeof bT.settings==="function"){return bT.settings().toArray()
}else{if(typeof bT==="string"){bV=bF(bT)
}else{if(bT instanceof bF){bV=bT
}}}}}}if(bV){return bV.map(function(bW){bR=bF.inArray(this,bS);
return bR!==-1?bU[bR]:null
}).toArray()
}};
J=function(bT,bV){if(!this instanceof J){throw"DT API must be constructed as a new object"
}var bU=[];
var bW=function(bY){var bX=bP(bY);
if(bX){bU.push.apply(bU,bX)
}};
if(bF.isArray(bT)){for(var bS=0,bR=bT.length;
bS<bR;
bS++){bW(bT[bS])
}}else{bW(bT)
}this.context=aH(bU);
if(bV){this.push.apply(this,bV.toArray?bV.toArray():bV)
}this.selector={rows:null,cols:null,opts:null};
J.extend(this,this,U)
};
N.Api=J;
J.prototype={concat:o.concat,context:[],each:function(bT){for(var bS=0,bR=this.length;
bS<bR;
bS++){bT.call(this,this[bS],bS,this)
}return this
},eq:function(bR){var bS=this.context;
return bS.length>bR?new J(bS[bR],this[bR]):null
},filter:function(bU){var bS=[];
if(o.filter){bS=o.filter.call(this,bU,this)
}else{for(var bT=0,bR=this.length;
bT<bR;
bT++){if(bU.call(this,this[bT],bT,this)){bS.push(this[bT])
}}}return new J(this.context,bS)
},flatten:function(){var bR=[];
return new J(this.context,bR.concat.apply(bR,this.toArray()))
},join:o.join,indexOf:o.indexOf||function(bT,bU){for(var bS=(bU||0),bR=this.length;
bS<bR;
bS++){if(this[bS]===bT){return bS
}}return -1
},iterator:function(b8,bT,bU,bW){var b6=[],b7,b3,bR,b1,b0,bS=this.context,bV,bY,b5,b2=this.selector;
if(typeof b8==="string"){bW=bU;
bU=bT;
bT=b8;
b8=false
}for(b3=0,bR=bS.length;
b3<bR;
b3++){var bZ=new J(bS[b3]);
if(bT==="table"){b7=bU.call(bZ,bS[b3],b3);
if(b7!==c){b6.push(b7)
}}else{if(bT==="columns"||bT==="rows"){b7=bU.call(bZ,bS[b3],this[b3],b3);
if(b7!==c){b6.push(b7)
}}else{if(bT==="column"||bT==="column-rows"||bT==="row"||bT==="cell"){bY=this[b3];
if(bT==="column-rows"){bV=aP(bS[b3],b2.opts)
}for(b1=0,b0=bY.length;
b1<b0;
b1++){b5=bY[b1];
if(bT==="cell"){b7=bU.call(bZ,bS[b3],b5.row,b5.column,b3,b1)
}else{b7=bU.call(bZ,bS[b3],b5,b3,b1,bV)
}if(b7!==c){b6.push(b7)
}}}}}}if(b6.length||bW){var bX=new J(bS,b8?b6.concat.apply([],b6):b6);
var b4=bX.selector;
b4.rows=b2.rows;
b4.cols=b2.cols;
b4.opts=b2.opts;
return bX
}return this
},lastIndexOf:o.lastIndexOf||function(bR,bS){return this.indexOf.apply(this.toArray.reverse(),arguments)
},length:0,map:function(bU){var bS=[];
if(o.map){bS=o.map.call(this,bU,this)
}else{for(var bT=0,bR=this.length;
bT<bR;
bT++){bS.push(bU.call(this,this[bT],bT))
}}return new J(this.context,bS)
},pluck:function(bR){return this.map(function(bS){return bS[bR]
})
},pop:o.pop,push:o.push,reduce:o.reduce||function(bR,bS){return aV(this,bR,bS,0,this.length,1)
},reduceRight:o.reduceRight||function(bR,bS){return aV(this,bR,bS,this.length-1,-1,-1)
},reverse:o.reverse,selector:null,shift:o.shift,sort:o.sort,splice:o.splice,toArray:function(){return o.slice.call(this)
},to$:function(){return bF(this)
},toJQuery:function(){return bF(this)
},unique:function(){return new J(this.context,aH(this))
},unshift:o.unshift};
J.extend=function(bZ,bV,bS){if(!bV||(!(bV instanceof J)&&!bV.__dt_wrapper)){return
}var bW,bY,bU,bR,bT,b0,bX=function(b2,b1,b3){return function(){var b4=b1.apply(b2,arguments);
J.extend(b4,b4,b3.methodExt);
return b4
}
};
for(bW=0,bY=bS.length;
bW<bY;
bW++){bT=bS[bW];
bV[bT.name]=typeof bT.val==="function"?bX(bZ,bT.val,bT):bF.isPlainObject(bT.val)?{}:bT.val;
bV[bT.name].__dt_wrapper=true;
J.extend(bZ,bV[bT.name],bT.propExt)
}};
J.register=bk=function(bT,bV){if(bF.isArray(bT)){for(var bY=0,bU=bT.length;
bY<bU;
bY++){J.register(bT[bY],bV)
}return
}var bZ,b2,bW=bT.split("."),bX=U,b1,bS;
var b0=function(b6,b4){for(var b5=0,b3=b6.length;
b5<b3;
b5++){if(b6[b5].name===b4){return b6[b5]
}}return null
};
for(bZ=0,b2=bW.length;
bZ<b2;
bZ++){bS=bW[bZ].indexOf("()")!==-1;
b1=bS?bW[bZ].replace("()",""):bW[bZ];
var bR=b0(bX,b1);
if(!bR){bR={name:b1,val:{},methodExt:[],propExt:[]};
bX.push(bR)
}if(bZ===b2-1){bR.val=bV
}else{bX=bS?bR.methodExt:bR.propExt
}}};
J.registerPlural=aB=function(bR,bT,bS){J.register(bR,bS);
J.register(bT,function(){var bU=bS.apply(this,arguments);
if(bU===this){return this
}else{if(bU instanceof J){return bU.length?bF.isArray(bU[0])?new J(bU.context,bU[0]):bU[0]:c
}}return bU
})
};
var d=function(bR,bS){if(typeof bR==="number"){return[bS[bR]]
}var bT=bF.map(bS,function(bV,bU){return bV.nTable
});
return bF(bT).filter(bR).map(function(bV){var bU=bF.inArray(this,bT);
return bS[bU]
}).toArray()
};
bk("tables()",function(bR){return bR?new J(d(bR,this.context)):this
});
bk("table()",function(bR){var bT=this.tables(bR);
var bS=bT.context;
return bS.length?new J(bS[0]):bT
});
aB("tables().nodes()","table().node()",function(){return this.iterator("table",function(bR){return bR.nTable
},1)
});
aB("tables().body()","table().body()",function(){return this.iterator("table",function(bR){return bR.nTBody
},1)
});
aB("tables().header()","table().header()",function(){return this.iterator("table",function(bR){return bR.nTHead
},1)
});
aB("tables().footer()","table().footer()",function(){return this.iterator("table",function(bR){return bR.nTFoot
},1)
});
aB("tables().containers()","table().container()",function(){return this.iterator("table",function(bR){return bR.nTableWrapper
},1)
});
bk("draw()",function(bR){return this.iterator("table",function(bS){ai(bS,bR===false)
})
});
bk("page()",function(bR){if(bR===c){return this.page.info().page
}return this.iterator("table",function(bS){aG(bS,bR)
})
});
bk("page.info()",function(bV){if(this.context.length===0){return c
}var bU=this.context[0],bW=bU._iDisplayStart,bR=bU._iDisplayLength,bS=bU.fnRecordsDisplay(),bT=bR===-1;
return{page:bT?0:Math.floor(bW/bR),pages:bT?1:Math.ceil(bS/bR),start:bW,end:bU.fnDisplayEnd(),length:bR,recordsTotal:bU.fnRecordsTotal(),recordsDisplay:bS}
});
bk("page.len()",function(bR){if(bR===c){return this.context.length!==0?this.context[0]._iDisplayLength:c
}return this.iterator("table",function(bS){aT(bS,bR)
})
});
var H=function(bT,bR,bU){if(y(bT)=="ssp"){ai(bT,bR)
}else{w(bT,true);
av(bT,[],function(bX){bi(bT);
var bY=bt(bT,bX);
for(var bW=0,bV=bY.length;
bW<bV;
bW++){aO(bT,bY[bW])
}ai(bT,bR);
w(bT,false)
})
}if(bU){var bS=new J(bT);
bS.one("draw",function(){bU(bS.ajax.json())
})
}};
bk("ajax.json()",function(){var bR=this.context;
if(bR.length>0){return bR[0].json
}});
bk("ajax.params()",function(){var bR=this.context;
if(bR.length>0){return bR[0].oAjaxData
}});
bk("ajax.reload()",function(bS,bR){return this.iterator("table",function(bT){H(bT,bR===false,bS)
})
});
bk("ajax.url()",function(bS){var bR=this.context;
if(bS===c){if(bR.length===0){return c
}bR=bR[0];
return bR.ajax?bF.isPlainObject(bR.ajax)?bR.ajax.url:bR.ajax:bR.sAjaxSource
}return this.iterator("table",function(bT){if(bF.isPlainObject(bT.ajax)){bT.ajax.url=bS
}else{bT.ajax=bS
}})
});
bk("ajax.url().load()",function(bS,bR){return this.iterator("table",function(bT){H(bT,bR===false,bS)
})
});
var ap=function(bS,bY){var bT=[],bW,bX,bV,b0,bU,bR,bZ=typeof bS;
if(!bS||bZ==="string"||bZ==="function"||bS.length===c){bS=[bS]
}for(bV=0,b0=bS.length;
bV<b0;
bV++){bX=bS[bV]&&bS[bV].split?bS[bV].split(","):[bS[bV]];
for(bU=0,bR=bX.length;
bU<bR;
bU++){bW=bY(typeof bX[bU]==="string"?bF.trim(bX[bU]):bX[bU]);
if(bW&&bW.length){bT.push.apply(bT,bW)
}}}return bT
};
var bE=function(bR){if(!bR){bR={}
}if(bR.filter&&!bR.search){bR.search=bR.filter
}return{search:bR.search||"none",order:bR.order||"current",page:bR.page||"all"}
};
var z=function(bT){for(var bS=0,bR=bT.length;
bS<bR;
bS++){if(bT[bS].length>0){bT[0]=bT[bS];
bT.length=1;
bT.context=[bT.context[bS]];
return bT
}}bT.length=0;
return bT
};
var aP=function(bT,bR){var bU,b0,bV,bY=[],bZ=bT.aiDisplay,bW=bT.aiDisplayMaster;
var b1=bR.search,bS=bR.order,bX=bR.page;
if(y(bT)=="ssp"){return b1==="removed"?[]:bg(0,bW.length)
}else{if(bX=="current"){for(bU=bT._iDisplayStart,b0=bT.fnDisplayEnd();
bU<b0;
bU++){bY.push(bZ[bU])
}}else{if(bS=="current"||bS=="applied"){bY=b1=="none"?bW.slice():b1=="applied"?bZ.slice():bF.map(bW,function(b3,b2){return bF.inArray(b3,bZ)===-1?b3:null
})
}else{if(bS=="index"||bS=="original"){for(bU=0,b0=bT.aoData.length;
bU<b0;
bU++){if(b1=="none"){bY.push(bU)
}else{bV=bF.inArray(bU,bZ);
if((bV===-1&&b1=="removed")||(bV>=0&&b1=="applied")){bY.push(bU)
}}}}}}}return bY
};
var E=function(bS,bR,bT){return ap(bR,function(bZ){var bW=F(bZ);
var bX,bU;
if(bW!==null&&!bT){return[bW]
}var bY=aP(bS,bT);
if(bW!==null&&bF.inArray(bW,bY)!==-1){return[bW]
}else{if(!bZ){return bY
}}if(typeof bZ==="function"){return bF.map(bY,function(b0){var b1=bS.aoData[b0];
return bZ(b0,b1._aData,b1.nTr)?b0:null
})
}var bV=ad(t(bS.aoData,bY,"nTr"));
if(bZ.nodeName){if(bF.inArray(bZ,bV)!==-1){return[bZ._DT_RowIndex]
}}return bF(bV).filter(bZ).map(function(){return this._DT_RowIndex
}).toArray()
})
};
bk("rows()",function(bR,bS){if(bR===c){bR=""
}else{if(bF.isPlainObject(bR)){bS=bR;
bR=""
}}bS=bE(bS);
var bT=this.iterator("table",function(bU){return E(bU,bR,bS)
},1);
bT.selector.rows=bR;
bT.selector.opts=bS;
return bT
});
bk("rows().nodes()",function(){return this.iterator("row",function(bR,bS){return bR.aoData[bS].nTr||c
},1)
});
bk("rows().data()",function(){return this.iterator(true,"rows",function(bR,bS){return t(bR.aoData,bS,"_aData")
},1)
});
aB("rows().cache()","row().cache()",function(bR){return this.iterator("row",function(bS,bU){var bT=bS.aoData[bU];
return bR==="search"?bT._aFilterData:bT._aSortData
},1)
});
aB("rows().invalidate()","row().invalidate()",function(bR){return this.iterator("row",function(bS,bT){B(bS,bT,bR)
})
});
aB("rows().indexes()","row().index()",function(){return this.iterator("row",function(bR,bS){return bS
},1)
});
aB("rows().remove()","row().remove()",function(){var bR=this;
return this.iterator("row",function(bW,bY,bV){var bX=bW.aoData;
bX.splice(bY,1);
for(var bU=0,bT=bX.length;
bU<bT;
bU++){if(bX[bU].nTr!==null){bX[bU].nTr._DT_RowIndex=bU
}}var bS=bF.inArray(bY,bW.aiDisplay);
a5(bW.aiDisplayMaster,bY);
a5(bW.aiDisplay,bY);
a5(bR[bV],bY,false);
bl(bW)
})
});
bk("rows.add()",function(bT){var bS=this.iterator("table",function(bX){var bY,bW,bU;
var bV=[];
for(bW=0,bU=bT.length;
bW<bU;
bW++){bY=bT[bW];
if(bY.nodeName&&bY.nodeName.toUpperCase()==="TR"){bV.push(bQ(bX,bY)[0])
}else{bV.push(aO(bX,bY))
}}return bV
},1);
var bR=this.rows(-1);
bR.pop();
bR.push.apply(bR,bS.toArray());
return bR
});
bk("row()",function(bR,bS){return z(this.rows(bR,bS))
});
bk("row().data()",function(bS){var bR=this.context;
if(bS===c){return bR.length&&this.length?bR[0].aoData[this[0]]._aData:c
}bR[0].aoData[this[0]]._aData=bS;
B(bR[0],this[0],"data");
return this
});
bk("row().node()",function(){var bR=this.context;
return bR.length&&this.length?bR[0].aoData[this[0]].nTr||null:null
});
bk("row.add()",function(bS){if(bS instanceof bF&&bS.length){bS=bS[0]
}var bR=this.iterator("table",function(bT){if(bS.nodeName&&bS.nodeName.toUpperCase()==="TR"){return bQ(bT,bS)[0]
}return aO(bT,bS)
});
return this.row(bR[0])
});
var Z=function(bU,bY,bX,bR){var bW=[];
var bT=function(b0,bZ){if(b0.nodeName&&b0.nodeName.toLowerCase()==="tr"){bW.push(b0)
}else{var b1=bF("<tr><td/></tr>").addClass(bZ);
bF("td",b1).addClass(bZ).html(b0)[0].colSpan=aQ(bU);
bW.push(b1[0])
}};
if(bF.isArray(bX)||bX instanceof bF){for(var bV=0,bS=bX.length;
bV<bS;
bV++){bT(bX[bV],bR)
}}else{bT(bX,bR)
}if(bY._details){bY._details.remove()
}bY._details=bF(bW);
if(bY._detailsShow){bY._details.insertAfter(bY.nTr)
}};
var A=function(bT,bR){var bS=bT.context;
if(bS.length){var bU=bS[0].aoData[bR!==c?bR:bT[0]];
if(bU._details){bU._details.remove();
bU._detailsShow=c;
bU._details=c
}}};
var ba=function(bT,bS){var bR=bT.context;
if(bR.length&&bT.length){var bU=bR[0].aoData[bT[0]];
if(bU._details){bU._detailsShow=bS;
if(bS){bU._details.insertAfter(bU.nTr)
}else{bU._details.detach()
}bx(bR[0])
}}};
var bx=function(bW){var bV=new J(bW);
var bU=".dt.DT_details";
var bT="draw"+bU;
var bR="column-visibility"+bU;
var bS="destroy"+bU;
var bX=bW.aoData;
bV.off(bT+" "+bR+" "+bS);
if(au(bX,"_details").length>0){bV.on(bT,function(bZ,bY){if(bW!==bY){return
}bV.rows({page:"current"}).eq(0).each(function(b0){var b1=bX[b0];
if(b1._detailsShow){b1._details.insertAfter(b1.nTr)
}})
});
bV.on(bR,function(b3,b0,bY,b2){if(bW!==b0){return
}var b5,b4=aQ(b0);
for(var b1=0,bZ=bX.length;
b1<bZ;
b1++){b5=bX[b1];
if(b5._details){b5._details.children("td[colspan]").attr("colspan",b4)
}}});
bV.on(bS,function(b1,bZ){if(bW!==bZ){return
}for(var b0=0,bY=bX.length;
b0<bY;
b0++){if(bX[b0]._details){A(bV,b0)
}}})
}};
var n="";
var s=n+"row().child";
var aY=s+"()";
bk(aY,function(bT,bR){var bS=this.context;
if(bT===c){return bS.length&&this.length?bS[0].aoData[this[0]]._details:c
}else{if(bT===true){this.child.show()
}else{if(bT===false){A(this)
}else{if(bS.length&&this.length){Z(bS[0],bS[0].aoData[this[0]],bT,bR)
}}}}return this
});
bk([s+".show()",aY+".show()"],function(bR){ba(this,true);
return this
});
bk([s+".hide()",aY+".hide()"],function(){ba(this,false);
return this
});
bk([s+".remove()",aY+".remove()"],function(){A(this);
return this
});
bk(s+".isShown()",function(){var bR=this.context;
if(bR.length&&this.length){return bR[0].aoData[this[0]]._detailsShow||false
}return false
});
var a9=/^(.+):(name|visIdx|visible)$/;
var aZ=function(bW,bV,bU,bT,bX){var bS=[];
for(var bY=0,bR=bX.length;
bY<bR;
bY++){bS.push(bu(bW,bX[bY],bV))
}return bS
};
var bC=function(bU,bR,bV){var bT=bU.aoColumns,bW=au(bT,"sName"),bS=au(bT,"nTh");
return ap(bR,function(b1){var bY=F(b1);
if(b1===""){return bg(bT.length)
}if(bY!==null){return[bY>=0?bY:bT.length+bY]
}if(typeof b1==="function"){var b2=aP(bU,bV);
return bF.map(bT,function(b4,b3){return b1(b3,aZ(bU,b3,0,0,b2),bS[b3])?b3:null
})
}var bZ=typeof b1==="string"?b1.match(a9):"";
if(bZ){switch(bZ[2]){case"visIdx":case"visible":var bX=parseInt(bZ[1],10);
if(bX<0){var b0=bF.map(bT,function(b3,b4){return b3.bVisible?b4:null
});
return[b0[b0.length+bX]]
}return[r(bU,bX)];
case"name":return bF.map(bW,function(b3,b4){return b3===bZ[1]?b4:null
})
}}else{return bF(bS).filter(b1).map(function(){return bF.inArray(this,bS)
}).toArray()
}})
};
var M=function(bT,bU,bR,bY){var b0=bT.aoColumns,bS=b0[bU],bW=bT.aoData,b3,b2,bV,b1,bZ;
if(bR===c){return bS.bVisible
}if(bS.bVisible===bR){return
}if(bR){var bX=bF.inArray(true,au(b0,"bVisible"),bU+1);
for(bV=0,b1=bW.length;
bV<b1;
bV++){bZ=bW[bV].nTr;
b2=bW[bV].anCells;
if(bZ){bZ.insertBefore(b2[bU],b2[bX]||null)
}}}else{bF(au(bT.aoData,"anCells",bU)).detach()
}bS.bVisible=bR;
a6(bT,bT.aoHeader);
a6(bT,bT.aoFooter);
if(bY===c||bY){aJ(bT);
if(bT.oScroll.sX||bT.oScroll.sY){l(bT)
}}L(bT,null,"column-visibility",[bT,bU,bR]);
bo(bT)
};
bk("columns()",function(bR,bS){if(bR===c){bR=""
}else{if(bF.isPlainObject(bR)){bS=bR;
bR=""
}}bS=bE(bS);
var bT=this.iterator("table",function(bU){return bC(bU,bR,bS)
},1);
bT.selector.cols=bR;
bT.selector.opts=bS;
return bT
});
aB("columns().header()","column().header()",function(bR,bS){return this.iterator("column",function(bU,bT){return bU.aoColumns[bT].nTh
},1)
});
aB("columns().footer()","column().footer()",function(bR,bS){return this.iterator("column",function(bU,bT){return bU.aoColumns[bT].nTf
},1)
});
aB("columns().data()","column().data()",function(){return this.iterator("column-rows",aZ,1)
});
aB("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(bS,bR){return bS.aoColumns[bR].mData
},1)
});
aB("columns().cache()","column().cache()",function(bR){return this.iterator("column-rows",function(bV,bU,bT,bS,bW){return t(bV.aoData,bW,bR==="search"?"_aFilterData":"_aSortData",bU)
},1)
});
aB("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(bU,bT,bS,bR,bV){return t(bU.aoData,bV,"anCells",bT)
},1)
});
aB("columns().visible()","column().visible()",function(bS,bR){return this.iterator("column",function(bU,bT){if(bS===c){return bU.aoColumns[bT].bVisible
}M(bU,bT,bS,bR)
})
});
aB("columns().indexes()","column().index()",function(bR){return this.iterator("column",function(bT,bS){return bR==="visible"?bJ(bT,bS):bS
},1)
});
bk("columns.adjust()",function(){return this.iterator("table",function(bR){aJ(bR)
},1)
});
bk("column.index()",function(bT,bR){if(this.context.length!==0){var bS=this.context[0];
if(bT==="fromVisible"||bT==="toData"){return r(bS,bR)
}else{if(bT==="fromData"||bT==="toVisible"){return bJ(bS,bR)
}}}});
bk("column()",function(bR,bS){return z(this.columns(bR,bS))
});
var bq=function(bU,bV,bR){var bY=bU.aoData;
var b5=aP(bU,bR);
var b3=ad(t(bY,b5,"anCells"));
var b2=bF([].concat.apply([],b3));
var b4;
var bT=bU.aoColumns.length;
var bZ,bX,b0,bW,bS,b1;
return ap(bV,function(b6){var b7=typeof b6==="function";
if(b6===null||b6===c||b7){bZ=[];
for(bX=0,b0=b5.length;
bX<b0;
bX++){b4=b5[bX];
for(bW=0;
bW<bT;
bW++){bS={row:b4,column:bW};
if(b7){b1=bU.aoData[b4];
if(b6(bS,bu(bU,b4,bW),b1.anCells[bW])){bZ.push(bS)
}}else{bZ.push(bS)
}}}return bZ
}if(bF.isPlainObject(b6)){return[b6]
}return b2.filter(b6).map(function(b8,b9){b4=b9.parentNode._DT_RowIndex;
return{row:b4,column:bF.inArray(b9,bY[b4].anCells)}
}).toArray()
})
};
bk("cells()",function(bU,bR,bS){if(bF.isPlainObject(bU)){if(typeof bU.row!==c){bS=bR;
bR=null
}else{bS=bU;
bU=null
}}if(bF.isPlainObject(bR)){bS=bR;
bR=null
}if(bR===null||bR===c){return this.iterator("table",function(b2){return bq(b2,bU,bE(bS))
})
}var bV=this.columns(bR,bS);
var b1=this.rows(bU,bS);
var bY,bX,bZ,bW,bT;
var b0=this.iterator("table",function(b3,b2){bY=[];
for(bX=0,bZ=b1[b2].length;
bX<bZ;
bX++){for(bW=0,bT=bV[b2].length;
bW<bT;
bW++){bY.push({row:b1[b2][bX],column:bV[b2][bW]})
}}return bY
},1);
bF.extend(b0.selector,{cols:bR,rows:bU,opts:bS});
return b0
});
aB("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(bT,bU,bS){var bR=bT.aoData[bU].anCells;
return bR?bR[bS]:c
},1)
});
bk("cells().data()",function(){return this.iterator("cell",function(bS,bT,bR){return bu(bS,bT,bR)
},1)
});
aB("cells().cache()","cell().cache()",function(bR){bR=bR==="search"?"_aFilterData":"_aSortData";
return this.iterator("cell",function(bT,bU,bS){return bT.aoData[bU][bR][bS]
},1)
});
aB("cells().render()","cell().render()",function(bR){return this.iterator("cell",function(bT,bU,bS){return bu(bT,bU,bS,bR)
},1)
});
aB("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(bS,bT,bR){return{row:bT,column:bR,columnVisible:bJ(bS,bR)}
},1)
});
aB("cells().invalidate()","cell().invalidate()",function(bR){return this.iterator("cell",function(bT,bU,bS){B(bT,bU,bR,bS)
})
});
bk("cell()",function(bR,bT,bS){return z(this.cells(bR,bT,bS))
});
bk("cell().data()",function(bT){var bS=this.context;
var bR=this[0];
if(bT===c){return bS.length&&bR.length?bu(bS[0],bR[0].row,bR[0].column):c
}bm(bS[0],bR[0].row,bR[0].column,bT);
B(bS[0],bR[0].row,"data",bR[0].column);
return this
});
bk("order()",function(bR,bT){var bS=this.context;
if(bR===c){return bS.length!==0?bS[0].aaSorting:c
}if(typeof bR==="number"){bR=[[bR,bT]]
}else{if(!bF.isArray(bR[0])){bR=Array.prototype.slice.call(arguments)
}}return this.iterator("table",function(bU){bU.aaSorting=bR.slice()
})
});
bk("order.listener()",function(bS,bR,bT){return this.iterator("table",function(bU){C(bU,bS,bR,bT)
})
});
bk(["columns().order()","column().order()"],function(bR){var bS=this;
return this.iterator("table",function(bV,bU){var bT=[];
bF.each(bS[bU],function(bX,bW){bT.push([bW,bR])
});
bV.aaSorting=bT
})
});
bk("search()",function(bS,bU,bV,bT){var bR=this.context;
if(bS===c){return bR.length!==0?bR[0].oPreviousSearch.sSearch:c
}return this.iterator("table",function(bW){if(!bW.oFeatures.bFilter){return
}u(bW,bF.extend({},bW.oPreviousSearch,{sSearch:bS+"",bRegex:bU===null?false:bU,bSmart:bV===null?true:bV,bCaseInsensitive:bT===null?true:bT}),1)
})
});
aB("columns().search()","column().search()",function(bR,bT,bU,bS){return this.iterator("column",function(bX,bW){var bV=bX.aoPreSearchCols;
if(bR===c){return bV[bW].sSearch
}if(!bX.oFeatures.bFilter){return
}bF.extend(bV[bW],{sSearch:bR+"",bRegex:bT===null?false:bT,bSmart:bU===null?true:bU,bCaseInsensitive:bS===null?true:bS});
u(bX,bX.oPreviousSearch,1)
})
});
bk("state()",function(){return this.context.length?this.context[0].oSavedState:null
});
bk("state.clear()",function(){return this.iterator("table",function(bR){bR.fnStateSaveCallback.call(bR.oInstance,bR,{})
})
});
bk("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null
});
bk("state.save()",function(){return this.iterator("table",function(bR){bo(bR)
})
});
N.versionCheck=N.fnVersionCheck=function(bT){var bX=N.version.split(".");
var bU=bT.split(".");
var bS,bW;
for(var bV=0,bR=bU.length;
bV<bR;
bV++){bS=parseInt(bX[bV],10)||0;
bW=parseInt(bU[bV],10)||0;
if(bS===bW){continue
}return bS>bW
}return true
};
N.isDataTable=N.fnIsDataTable=function(bT){var bR=bF(bT).get(0);
var bS=false;
bF.each(N.settings,function(bU,bV){if(bV.nTable===bR||bV.nScrollHead===bR||bV.nScrollFoot===bR){bS=true
}});
return bS
};
N.tables=N.fnTables=function(bR){return bF.map(N.settings,function(bS){if(!bR||(bR&&bF(bS.nTable).is(":visible"))){return bS.nTable
}})
};
N.util={throttle:al,escapeRegex:m};
N.camelToHungarian=aa;
bk("$()",function(bR,bT){var bU=this.rows(bT).nodes(),bS=bF(bU);
return bF([].concat(bS.filter(bR).toArray(),bS.find(bR).toArray()))
});
bF.each(["on","one","off"],function(bS,bR){bk(bR+"()",function(){var bT=Array.prototype.slice.call(arguments);
if(!bT[0].match(/\.dt\b/)){bT[0]+=".dt"
}var bU=bF(this.tables().nodes());
bU[bR].apply(bU,bT);
return this
})
});
bk("clear()",function(){return this.iterator("table",function(bR){bi(bR)
})
});
bk("settings()",function(){return new J(this.context,this.context)
});
bk("data()",function(){return this.iterator("table",function(bR){return au(bR.aoData,"_aData")
}).flatten()
});
bk("destroy()",function(bR){bR=bR||false;
return this.iterator("table",function(bS){var b1=bS.nTableWrapper.parentNode;
var bT=bS.oClasses;
var b3=bS.nTable;
var bW=bS.nTBody;
var bY=bS.nTHead;
var bZ=bS.nTFoot;
var b4=bF(b3);
var bV=bF(bW);
var bX=bF(bS.nTableWrapper);
var b5=bF.map(bS.aoData,function(b6){return b6.nTr
});
var bU,b2;
bS.bDestroying=true;
L(bS,"aoDestroyCallback","destroy",[bS]);
if(!bR){new J(bS).columns().visible(true)
}bX.unbind(".DT").find(":not(tbody *)").unbind(".DT");
bF(b).unbind(".DT-"+bS.sInstance);
if(b3!=bY.parentNode){b4.children("thead").detach();
b4.append(bY)
}if(bZ&&b3!=bZ.parentNode){b4.children("tfoot").detach();
b4.append(bZ)
}b4.detach();
bX.detach();
bS.aaSorting=[];
bS.aaSortingFixed=[];
ae(bS);
bF(b5).removeClass(bS.asStripeClasses.join(" "));
bF("th, td",bY).removeClass(bT.sSortable+" "+bT.sSortableAsc+" "+bT.sSortableDesc+" "+bT.sSortableNone);
if(bS.bJUI){bF("th span."+bT.sSortIcon+", td span."+bT.sSortIcon,bY).detach();
bF("th, td",bY).each(function(){var b6=bF("div."+bT.sSortJUIWrapper,this);
bF(this).append(b6.contents());
b6.detach()
})
}if(!bR&&b1){b1.insertBefore(b3,bS.nTableReinsertBefore)
}bV.children().detach();
bV.append(b5);
b4.css("width",bS.sDestroyWidth).removeClass(bT.sTable);
b2=bS.asDestroyStripes.length;
if(b2){bV.children().each(function(b6){bF(this).addClass(bS.asDestroyStripes[b6%b2])
})
}var b0=bF.inArray(bS,N.settings);
if(b0!==-1){N.settings.splice(b0,1)
}})
});
N.version="1.10.4";
N.settings=[];
N.models={};
N.models.oSearch={bCaseInsensitive:true,sSearch:"",bRegex:false,bSmart:true};
N.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null};
N.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:false,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};
N.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:true,bDeferRender:false,bDestroy:false,bFilter:true,bInfo:true,bJQueryUI:false,bLengthChange:true,bPaginate:true,bProcessing:false,bRetrieve:false,bScrollCollapse:false,bServerSide:false,bSort:true,bSortMulti:true,bSortCellsTop:false,bSortClasses:true,bStateSave:false,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(bR){return bR.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)
},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(bR){try{return JSON.parse((bR.iStateDuration===-1?sessionStorage:localStorage).getItem("DataTables_"+bR.sInstance+"_"+location.pathname))
}catch(bS){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(bR,bS){try{(bR.iStateDuration===-1?sessionStorage:localStorage).setItem("DataTables_"+bR.sInstance+"_"+location.pathname,JSON.stringify(bS))
}catch(bT){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:bF.extend({},N.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null};
T(N.defaults);
N.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:true,bSortable:true,bVisible:true,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
T(N.defaults.column);
N.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:false,bScrollbarLeft:false},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:false,bInitialised:false,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:true,jqXHR:null,json:c,oAjaxData:c,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:false,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:false,bSorted:false,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return y(this)=="ssp"?this._iRecordsTotal*1:this.aiDisplayMaster.length
},fnRecordsDisplay:function(){return y(this)=="ssp"?this._iRecordsDisplay*1:this.aiDisplay.length
},fnDisplayEnd:function(){var bR=this._iDisplayLength,bW=this._iDisplayStart,bT=bW+bR,bS=this.aiDisplay.length,bU=this.oFeatures,bV=bU.bPaginate;
if(bU.bServerSide){return bV===false||bR===-1?bW+bS:Math.min(bW+bR,this._iRecordsDisplay)
}else{return !bV||bT>bS||bR===-1?bS:bT
}},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{}};
N.ext=I={classes:{},errMode:"alert",feature:[],search:[],internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:N.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:N.version};
bF.extend(I,{afnFiltering:I.search,aTypes:I.type.detect,ofnSearch:I.type.search,oSort:I.type.order,afnSortData:I.order,aoFeatures:I.feature,oApi:I.internal,oStdClasses:I.classes,oPagination:I.pager});
bF.extend(N.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});
(function(){var bS="";
bS="";
var bT=bS+"ui-state-default";
var bU=bS+"css_right ui-icon ui-icon-";
var bR=bS+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
bF.extend(N.ext.oJUIClasses,N.ext.classes,{sPageButton:"fg-button ui-button "+bT,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:bT+" sorting_asc",sSortDesc:bT+" sorting_desc",sSortable:bT+" sorting",sSortableAsc:bT+" sorting_asc_disabled",sSortableDesc:bT+" sorting_desc_disabled",sSortableNone:bT+" sorting_disabled",sSortJUIAsc:bU+"triangle-1-n",sSortJUIDesc:bU+"triangle-1-s",sSortJUI:bU+"carat-2-n-s",sSortJUIAscAllowed:bU+"carat-1-n",sSortJUIDescAllowed:bU+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+bT,sScrollFoot:"dataTables_scrollFoot "+bT,sHeaderTH:bT,sFooterTH:bT,sJUIHeader:bR+" ui-corner-tl ui-corner-tr",sJUIFooter:bR+" ui-corner-bl ui-corner-br"})
}());
var bI=N.ext.pager;
function bn(bW,bR){var bS=[],bU=bI.numbers_length,bV=Math.floor(bU/2),bT=1;
if(bR<=bU){bS=bg(0,bR)
}else{if(bW<=bV){bS=bg(0,bU-2);
bS.push("ellipsis");
bS.push(bR-1)
}else{if(bW>=bR-1-bV){bS=bg(bR-(bU-2),bR);
bS.splice(0,0,"ellipsis");
bS.splice(0,0,0)
}else{bS=bg(bW-1,bW+2);
bS.push("ellipsis");
bS.push(bR-1);
bS.splice(0,0,"ellipsis");
bS.splice(0,0,0)
}}}bS.DT_el="span";
return bS
}bF.extend(bI,{simple:function(bS,bR){return["previous","next"]
},full:function(bS,bR){return["first","previous","next","last"]
},simple_numbers:function(bS,bR){return["previous",bn(bS,bR),"next"]
},full_numbers:function(bS,bR){return["first","previous",bn(bS,bR),"next","last"]
},_numbers:bn,numbers_length:7});
bF.extend(true,N.ext.renderer,{pageButton:{_:function(bX,b4,b3,b2,b1,bV){var bY=bX.oClasses;
var bU=bX.oLanguage.oPaginate;
var bT,bS,bR=0;
var bZ=function(b6,cb){var b9,b5,ca,b8;
var cc=function(cd){aG(bX,cd.data.action,true)
};
for(b9=0,b5=cb.length;
b9<b5;
b9++){b8=cb[b9];
if(bF.isArray(b8)){var b7=bF("<"+(b8.DT_el||"div")+"/>").appendTo(b6);
bZ(b7,b8)
}else{bT="";
bS="";
switch(b8){case"ellipsis":b6.append("<span>&hellip;</span>");
break;
case"first":bT=bU.sFirst;
bS=b8+(b1>0?"":" "+bY.sPageButtonDisabled);
break;
case"previous":bT=bU.sPrevious;
bS=b8+(b1>0?"":" "+bY.sPageButtonDisabled);
break;
case"next":bT=bU.sNext;
bS=b8+(b1<bV-1?"":" "+bY.sPageButtonDisabled);
break;
case"last":bT=bU.sLast;
bS=b8+(b1<bV-1?"":" "+bY.sPageButtonDisabled);
break;
default:bT=b8+1;
bS=b1===b8?bY.sPageButtonActive:"";
break
}if(bT){ca=bF("<a>",{"class":bY.sPageButton+" "+bS,"aria-controls":bX.sTableId,"data-dt-idx":bR,tabindex:bX.iTabIndex,id:b3===0&&typeof b8==="string"?bX.sTableId+"_"+b8:null}).html(bT).appendTo(b6);
bc(ca,{action:b8},cc);
bR++
}}}};
try{var bW=bF(a.activeElement).data("dt-idx");
bZ(bF(b4).empty(),b2);
if(bW!==null){bF(b4).find("[data-dt-idx="+bW+"]").focus()
}}catch(b0){}}}});
bF.extend(N.ext.type.detect,[function(bT,bS){var bR=bS.oLanguage.sDecimal;
return aj(bT,bR)?"num"+bR:null
},function(bT,bS){if(bT&&!(bT instanceof Date)&&(!am.test(bT)||!bv.test(bT))){return null
}var bR=Date.parse(bT);
return(bR!==null&&!isNaN(bR))||bB(bT)?"date":null
},function(bT,bS){var bR=bS.oLanguage.sDecimal;
return aj(bT,bR,true)?"num-fmt"+bR:null
},function(bT,bS){var bR=bS.oLanguage.sDecimal;
return j(bT,bR)?"html-num"+bR:null
},function(bT,bS){var bR=bS.oLanguage.sDecimal;
return j(bT,bR,true)?"html-num-fmt"+bR:null
},function(bS,bR){return bB(bS)||(typeof bS==="string"&&bS.indexOf("<")!==-1)?"html":null
}]);
bF.extend(N.ext.type.search,{html:function(bR){return bB(bR)?bR:typeof bR==="string"?bR.replace(W," ").replace(aU,""):""
},string:function(bR){return bB(bR)?bR:typeof bR==="string"?bR.replace(W," "):bR
}});
var Q=function(bU,bR,bT,bS){if(bU!==0&&(!bU||bU==="-")){return -Infinity
}if(bR){bU=bD(bU,bR)
}if(bU.replace){if(bT){bU=bU.replace(bT,"")
}if(bS){bU=bU.replace(bS,"")
}}return bU*1
};
function br(bR){bF.each({num:function(bS){return Q(bS,bR)
},"num-fmt":function(bS){return Q(bS,bR,bG)
},"html-num":function(bS){return Q(bS,bR,aU)
},"html-num-fmt":function(bS){return Q(bS,bR,aU,bG)
}},function(bS,bT){I.type.order[bS+bR+"-pre"]=bT;
if(bS.match(/^html\-/)){I.type.search[bS+bR]=I.type.search.html
}})
}bF.extend(I.type.order,{"date-pre":function(bR){return Date.parse(bR)||0
},"html-pre":function(bR){return bB(bR)?"":bR.replace?bR.replace(/<.*?>/g,"").toLowerCase():bR+""
},"string-pre":function(bR){return bB(bR)?"":typeof bR==="string"?bR.toLowerCase():!bR.toString?"":bR.toString()
},"string-asc":function(bR,bS){return((bR<bS)?-1:((bR>bS)?1:0))
},"string-desc":function(bR,bS){return((bR<bS)?1:((bR>bS)?-1:0))
}});
br("");
bF.extend(true,N.ext.renderer,{header:{_:function(bU,bR,bT,bS){bF(bU.nTable).on("order.dt.DT",function(bY,bV,bX,bW){if(bU!==bV){return
}var bZ=bT.idx;
bR.removeClass(bT.sSortingClass+" "+bS.sSortAsc+" "+bS.sSortDesc).addClass(bW[bZ]=="asc"?bS.sSortAsc:bW[bZ]=="desc"?bS.sSortDesc:bT.sSortingClass)
})
},jqueryui:function(bU,bR,bT,bS){bF("<div/>").addClass(bS.sSortJUIWrapper).append(bR.contents()).append(bF("<span/>").addClass(bS.sSortIcon+" "+bT.sSortingClassJUI)).appendTo(bR);
bF(bU.nTable).on("order.dt.DT",function(bY,bV,bX,bW){if(bU!==bV){return
}var bZ=bT.idx;
bR.removeClass(bS.sSortAsc+" "+bS.sSortDesc).addClass(bW[bZ]=="asc"?bS.sSortAsc:bW[bZ]=="desc"?bS.sSortDesc:bT.sSortingClass);
bR.find("span."+bS.sSortIcon).removeClass(bS.sSortJUIAsc+" "+bS.sSortJUIDesc+" "+bS.sSortJUI+" "+bS.sSortJUIAscAllowed+" "+bS.sSortJUIDescAllowed).addClass(bW[bZ]=="asc"?bS.sSortJUIAsc:bW[bZ]=="desc"?bS.sSortJUIDesc:bT.sSortingClassJUI)
})
}}});
N.render={number:function(bT,bS,bR,bU){return{display:function(bY){var bW=bY<0?"-":"";
bY=Math.abs(parseFloat(bY));
var bX=parseInt(bY,10);
var bV=bR?bS+(bY-bX).toFixed(bR).substring(2):"";
return bW+(bU||"")+bX.toString().replace(/\B(?=(\d{3})+(?!\d))/g,bT)+bV
}}
}};
function ah(bR){return function(){var bS=[an(this[N.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
return N.ext.internal[bR].apply(this,bS)
}
}bF.extend(N.ext.internal,{_fnExternApiFunc:ah,_fnBuildAjax:av,_fnAjaxUpdate:af,_fnAjaxParameters:bL,_fnAjaxUpdateDraw:V,_fnAjaxDataSrc:bt,_fnAddColumn:O,_fnColumnOptions:a2,_fnAdjustColumnSizing:aJ,_fnVisibleToColumnIndex:r,_fnColumnIndexToVisible:bJ,_fnVisbleColumns:aQ,_fnGetColumns:p,_fnColumnTypes:v,_fnApplyColumnDefs:k,_fnHungarianMap:T,_fnCamelToHungarian:aa,_fnLanguageCompat:aS,_fnBrowserDetect:be,_fnAddData:aO,_fnAddTr:bQ,_fnNodeToDataIndex:bs,_fnNodeToColumnIndex:a0,_fnGetCellData:bu,_fnSetCellData:bm,_fnSplitObjNotation:ak,_fnGetObjectDataFn:ao,_fnSetObjectDataFn:ax,_fnGetDataMaster:bH,_fnClearTable:bi,_fnDeleteIndex:a5,_fnInvalidate:B,_fnGetRowElements:bf,_fnCreateTr:P,_fnBuildHead:aL,_fnDrawHead:a6,_fnDraw:a3,_fnReDraw:ai,_fnAddOptionsHtml:i,_fnDetectHeader:aw,_fnGetUniqueThs:bh,_fnFeatureHtmlFilter:q,_fnFilterComplete:u,_fnFilterCustom:ar,_fnFilterColumn:Y,_fnFilter:ay,_fnFilterCreateSearch:aW,_fnEscapeRegex:m,_fnFilterData:aE,_fnFeatureHtmlInfo:g,_fnUpdateInfo:at,_fnInfoMacros:bp,_fnInitialise:h,_fnInitComplete:aC,_fnLengthChange:aT,_fnFeatureHtmlLength:aR,_fnFeatureHtmlPaginate:aA,_fnPageChange:aG,_fnFeatureHtmlProcessing:bA,_fnProcessingDisplay:w,_fnFeatureHtmlTable:bz,_fnScrollDraw:l,_fnApplyToChildren:a8,_fnCalculateColumnWidths:bw,_fnThrottle:al,_fnConvertToWidth:ag,_fnScrollingWidthAdjust:az,_fnGetWidestNode:aK,_fnGetMaxLenString:ab,_fnStringToCss:bK,_fnScrollBarWidth:bb,_fnSortFlatten:aI,_fnSort:x,_fnSortAria:bd,_fnSortListener:bj,_fnSortAttachListener:C,_fnSortingClasses:ae,_fnSortData:G,_fnSaveState:bo,_fnLoadState:bO,_fnSettingsFromNode:an,_fnLog:aN,_fnMap:R,_fnBindAction:bc,_fnCallbackReg:bN,_fnCallbackFire:L,_fnLengthOverflow:bl,_fnRenderer:S,_fnDataSource:y,_fnRowAttributes:ac,_fnCalculateEnd:function(){}});
bF.fn.dataTable=N;
bF.fn.dataTableSettings=N.settings;
bF.fn.dataTableExt=N.ext;
bF.fn.DataTable=function(bR){return bF(this).dataTable(bR).api()
};
bF.each(N,function(bS,bR){bF.fn.DataTable[bS]=bR
});
return bF.fn.dataTable
}))
}(window,document));
/*! DataTables Bootstrap 3 integration
 * ©2011-2014 SpryMedia Ltd - datatables.net/license
 */
(function(c,a,d){var b=function(f,e){f.extend(true,e.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-6'i><'col-sm-6'p>>",renderer:"bootstrap"});
f.extend(e.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm"});
f.fn.dataTableExt.oApi.fnPagingInfo=function(h){return{iStart:h._iDisplayStart,iEnd:h.fnDisplayEnd(),iLength:h._iDisplayLength,iTotal:h.fnRecordsTotal(),iFilteredTotal:h.fnRecordsDisplay(),iPage:h._iDisplayLength===-1?0:Math.ceil(h._iDisplayStart/h._iDisplayLength),iTotalPages:h._iDisplayLength===-1?0:Math.ceil(h.fnRecordsDisplay()/h._iDisplayLength)}
};
function g(r,p){var z=/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,w=/(^[ ]*|[ ]*$)/g,n=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,l=/^0x[0-9a-f]+$/i,h=/^0/,s=r.toString().replace(w,"")||"",o=p.toString().replace(w,"")||"",u=s.replace(z,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),k=o.replace(z,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),j=parseInt(s.match(l))||(u.length!=1&&s.match(n)&&Date.parse(s)),v=parseInt(o.match(l))||j&&o.match(n)&&Date.parse(o)||null;
if(v){if(j<v){return -1
}else{if(j>v){return 1
}}}for(var q=0,i=Math.max(u.length,k.length);
q<i;
q++){var t=!(u[q]||"").match(h)&&parseFloat(u[q])||u[q]||0;
var m=!(k[q]||"").match(h)&&parseFloat(k[q])||k[q]||0;
if(isNaN(t)!==isNaN(m)){return(isNaN(t))?1:-1
}else{if(typeof t!==typeof m){t+="";
m+=""
}}if(t<m){return -1
}if(t>m){return 1
}}return 0
}f.fn.dataTable.ext.type.detect.unshift(function(h){if(h.toString().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)==null){return null
}return"date"
});
delete f.fn.DataTable.ext.type.order["string-pre"];
f.extend(f.fn.dataTableExt.oSort,{"string-asc":function(i,h){return g(i.toString().toLowerCase(),h.toString().toLowerCase())
},"string-desc":function(i,h){return g(i.toString().toLowerCase(),h.toString().toLowerCase())*-1
},"date-pre":function(h){if(h==null||h==""){return 0
}var i=h.split("/");
return(i[2]+i[1]+i[0])*1
},"date-asc":function(i,h){return((i<h)?-1:((i>h)?1:0))
},"date-desc":function(i,h){return((i<h)?1:((i>h)?-1:0))
},"html-pre":function(h){var k=h.indexOf("class");
if(k!=-1){if(h.indexOf("</i></a>")!=-1){return h.substring(k).toLowerCase()
}if(h.indexOf("</i>")!=-1){return h.substring(k).toLowerCase()
}return h.replace(/<.*?>/g,"").toLowerCase()
}var j=h.indexOf("src");
if(j!=-1){return h.substring(j).toLowerCase()
}return h.replace(/<.*?>/g,"").toLowerCase()
}});
f.fn.dataTableExt.oSort["html-num-pre"]=f.fn.dataTableExt.oSort["html-pre"];
f.extend(f.fn.dataTableExt.oPagination,{bootstrap:{fnInit:function(l,i,k){var h=l.oLanguage.oPaginate;
var m=function(n){n.preventDefault();
if(l.oApi._fnPageChange(l,n.data.action)){k(l)
}};
f(i).append('<ul class="pagination"><li class="first disabled"><a href="#">'+h.sFirst+'</a></li><li class="prev  disabled"><a href="#">'+h.sPrevious+'</a></li><li class="next  disabled"><a href="#">'+h.sNext+'</a></li><li class="last  disabled"><a href="#">'+h.sLast+"</a></li></ul>");
var j=f("a",i);
f(j[0]).bind("click.DT",{action:"first"},m);
f(j[1]).bind("click.DT",{action:"previous"},m);
f(j[2]).bind("click.DT",{action:"next"},m);
f(j[3]).bind("click.DT",{action:"last"},m)
},fnUpdate:function(l,s){var t=5;
var n=l.oInstance.fnPagingInfo();
var q=l.aanFeatures.p;
var p,o,m,h,u,k=Math.floor(t/2);
if(n.iTotalPages<t){h=1;
u=n.iTotalPages
}else{if(n.iPage<=k){h=1;
u=t
}else{if(n.iPage>=(n.iTotalPages-k)){h=n.iTotalPages-t+1;
u=n.iTotalPages
}else{h=n.iPage-k+1;
u=h+t-1
}}}for(p=0,iLen=q.length;
p<iLen;
p++){f("li:gt(1)",q[p]).filter(":not(.next,.last)").remove();
for(o=h;
o<=u;
o++){var r="";
if(o==n.iPage+1){r='class="active"'
}f("<li "+r+'<a href="/ref#sClass"></a><a href="#">'+o+"</a></li>").insertBefore(f(".next,.last",q[p])[0]).bind("click",function(i){i.preventDefault();
l._iDisplayStart=(parseInt(f("a",this).text(),10)-1)*n.iLength;
s(l)
})
}if(n.iPage===0){f("li:first",q[p]).addClass("disabled");
f("li.prev").addClass("disabled")
}else{f("li:first",q[p]).removeClass("disabled");
f("li.prev").removeClass("disabled")
}if(n.iPage===n.iTotalPages-1||n.iTotalPages===0){f("li:last",q[p]).addClass("disabled");
f("li.next").addClass("disabled")
}else{f("li:last",q[p]).removeClass("disabled");
f("li.next").removeClass("disabled")
}}}}});
e.ext.renderer.pageButton.bootstrap=function(l,s,r,q,p,k){var o=new e.Api(l);
var m=l.oClasses;
var j=l.oLanguage.oPaginate;
var i,h;
var n=function(u,y){var w,t,x,v;
var z=function(A){A.preventDefault();
if(!f(A.currentTarget).hasClass("disabled")){o.page(A.data.action).draw(false)
}};
for(w=0,t=y.length;
w<t;
w++){v=y[w];
if(f.isArray(v)){n(u,v)
}else{i="";
h="";
switch(v){case"ellipsis":i="&hellip;";
h="disabled";
break;
case"first":i=j.sFirst;
h=v+(p>0?"":" disabled");
break;
case"previous":i=j.sPrevious;
h=v+(p>0?"":" disabled");
break;
case"next":i=j.sNext;
h=v+(p<k-1?"":" disabled");
break;
case"last":i=j.sLast;
h=v+(p<k-1?"":" disabled");
break;
default:i=v+1;
h=p===v?"active":"";
break
}if(i){x=f("<li>",{"class":m.sPageButton+" "+h,"aria-controls":l.sTableId,tabindex:l.iTabIndex,id:r===0&&typeof v==="string"?l.sTableId+"_"+v:null}).append(f("<a>",{href:"#"}).html(i)).appendTo(u);
l.oApi._fnBindAction(x,{action:v},z)
}}}};
n(f(s).empty().html('<ul class="pagination"/>').children("ul"),q)
};
if(e.TableTools){f.extend(true,e.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn btn-default",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info"},select:{row:"active"}});
f.extend(true,e.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}})
}};
if(typeof define==="function"&&define.amd){define(["jquery","datatables"],b)
}else{if(typeof exports==="object"){b(require("jquery"),require("datatables"))
}else{if(jQuery){b(jQuery,jQuery.fn.dataTable)
}}}})(window,document);
!function(l){function i(){return new Date(Date.UTC.apply(Date,arguments))
}function h(){var a=new Date();
return i(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),0)
}var j=function(b,c){var a=this;
this.element=l(b);
this.language=c.language||this.element.data("date-language")||"en";
this.language=this.language in k?this.language:"en";
this.isRTL=k[this.language].rtl||false;
this.formatType=c.formatType||this.element.data("format-type")||"standard";
this.format=g.parseFormat(c.format||this.element.data("date-format")||g.getDefaultFormat(this.formatType,"input"),this.formatType);
this.isInline=false;
this.isVisible=false;
this.isInput=this.element.is("input");
this.component=this.element.is(".date")?this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar").parent():false;
this.componentReset=this.element.is(".date")?this.element.find(".add-on .icon-remove").parent():false;
this.hasInput=this.component&&this.element.find("input").length;
if(this.component&&this.component.length===0){this.component=false
}this.linkField=c.linkField||this.element.data("link-field")||false;
this.linkFormat=g.parseFormat(c.linkFormat||this.element.data("link-format")||g.getDefaultFormat(this.formatType,"link"),this.formatType);
this.minuteStep=c.minuteStep||this.element.data("minute-step")||5;
this.pickerPosition=c.pickerPosition||this.element.data("picker-position")||"bottom-right";
this.showMeridian=c.showMeridian||this.element.data("show-meridian")||false;
this.initialDate=c.initialDate||new Date();
this._attachEvents();
this.formatViewType="datetime";
if("formatViewType" in c){this.formatViewType=c.formatViewType
}else{if("formatViewType" in this.element.data()){this.formatViewType=this.element.data("formatViewType")
}}this.minView=0;
if("minView" in c){this.minView=c.minView
}else{if("minView" in this.element.data()){this.minView=this.element.data("min-view")
}}this.minView=g.convertViewMode(this.minView);
this.maxView=g.modes.length-1;
if("maxView" in c){this.maxView=c.maxView
}else{if("maxView" in this.element.data()){this.maxView=this.element.data("max-view")
}}this.maxView=g.convertViewMode(this.maxView);
this.startViewMode=2;
if("startView" in c){this.startViewMode=c.startView
}else{if("startView" in this.element.data()){this.startViewMode=this.element.data("start-view")
}}this.startViewMode=g.convertViewMode(this.startViewMode);
this.viewMode=this.startViewMode;
this.viewSelect=this.minView;
if("viewSelect" in c){this.viewSelect=c.viewSelect
}else{if("viewSelect" in this.element.data()){this.viewSelect=this.element.data("view-select")
}}this.viewSelect=g.convertViewMode(this.viewSelect);
this.forceParse=true;
if("forceParse" in c){this.forceParse=c.forceParse
}else{if("dateForceParse" in this.element.data()){this.forceParse=this.element.data("date-force-parse")
}}this.picker=l(g.template).appendTo(this.isInline?this.element:"body").on({click:l.proxy(this.click,this),mousedown:l.proxy(this.mousedown,this)});
if(this.isInline){this.picker.addClass("datetimepicker-inline")
}else{this.picker.addClass("datetimepicker-dropdown-"+this.pickerPosition+" dropdown-menu")
}if(this.isRTL){this.picker.addClass("datetimepicker-rtl");
this.picker.find(".prev i, .next i").toggleClass("glyphicon-arrow-left glyphicon-arrow-right")
}l(document).on("mousedown",function(d){if(l(d.target).closest(".datetimepicker").length===0){a.hide()
}});
this.autoclose=false;
if("autoclose" in c){this.autoclose=c.autoclose
}else{if("dateAutoclose" in this.element.data()){this.autoclose=this.element.data("date-autoclose")
}}this.keyboardNavigation=true;
if("keyboardNavigation" in c){this.keyboardNavigation=c.keyboardNavigation
}else{if("dateKeyboardNavigation" in this.element.data()){this.keyboardNavigation=this.element.data("date-keyboard-navigation")
}}this.todayBtn=(c.todayBtn||this.element.data("date-today-btn")||false);
this.todayHighlight=(c.todayHighlight||this.element.data("date-today-highlight")||false);
this.weekStart=((c.weekStart||this.element.data("date-weekstart")||k[this.language].weekStart||0)%7);
this.weekEnd=((this.weekStart+6)%7);
this.startDate=-Infinity;
this.endDate=Infinity;
this.daysOfWeekDisabled=[];
this.setStartDate(c.startDate||this.element.data("date-startdate"));
this.setEndDate(c.endDate||this.element.data("date-enddate"));
this.setDaysOfWeekDisabled(c.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled"));
this.fillDow();
this.fillMonths();
this.update();
this.showMode();
if(this.isInline){this.show()
}};
j.prototype={constructor:j,_events:[],_attachEvents:function(){this._detachEvents();
if(this.isInput){this._events=[[this.element,{focus:l.proxy(this.show,this),keyup:l.proxy(this.update,this),keydown:l.proxy(this.keydown,this)}]]
}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:l.proxy(this.show,this),keyup:l.proxy(this.update,this),keydown:l.proxy(this.keydown,this)}],[this.component,{click:l.proxy(this.show,this)}]];
if(this.componentReset){this._events.push([this.componentReset,{click:l.proxy(this.reset,this)}])
}}else{if(this.element.is("div")){this.isInline=true
}else{this._events=[[this.element,{click:l.proxy(this.show,this)}]]
}}}for(var c=0,b,a;
c<this._events.length;
c++){b=this._events[c][0];
a=this._events[c][1];
b.on(a)
}},_detachEvents:function(){for(var c=0,b,a;
c<this._events.length;
c++){b=this._events[c][0];
a=this._events[c][1];
b.off(a)
}this._events=[]
},show:function(a){this.picker.show();
this.height=this.component?this.component.outerHeight():this.element.outerHeight();
if(this.forceParse){this.update()
}this.place();
l(window).on("resize",l.proxy(this.place,this));
if(a){a.stopPropagation();
a.preventDefault()
}this.isVisible=true;
this.element.trigger({type:"show",date:this.date})
},hide:function(a){if(!this.isVisible){return
}if(this.isInline){return
}this.picker.hide();
l(window).off("resize",this.place);
this.viewMode=this.startViewMode;
this.showMode();
if(!this.isInput){l(document).off("mousedown",this.hide)
}if(this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()
}this.isVisible=false;
this.element.trigger({type:"hide",date:this.date})
},remove:function(){this._detachEvents();
this.picker.remove();
delete this.element.data().datetimepicker
},getDate:function(){var a=this.getUTCDate();
return new Date(a.getTime()+(a.getTimezoneOffset()*60000))
},getUTCDate:function(){return this.date
},setDate:function(a){this.setUTCDate(new Date(a.getTime()-(a.getTimezoneOffset()*60000)))
},setUTCDate:function(a){if(a>=this.startDate&&a<=this.endDate){this.date=a;
this.setValue();
this.viewDate=this.date;
this.fill()
}else{this.element.trigger({type:"outOfRange",date:a,startDate:this.startDate,endDate:this.endDate})
}},setFormat:function(a){this.format=g.parseFormat(a,this.formatType);
var b;
if(this.isInput){b=this.element
}else{if(this.component){b=this.element.find("input")
}}if(b&&b.val()){this.setValue()
}},setValue:function(){var a=this.getFormattedDate();
if(!this.isInput){if(this.component){this.element.find("input").val(a)
}this.element.data("date",a)
}else{this.element.val(a)
}if(this.linkField){l("#"+this.linkField).val(this.getFormattedDate(this.linkFormat))
}},getFormattedDate:function(a){if(a==undefined){a=this.format
}return g.formatDate(this.date,a,this.language,this.formatType)
},setStartDate:function(a){this.startDate=a||-Infinity;
if(this.startDate!==-Infinity){this.startDate=g.parseDate(this.startDate,this.format,this.language,this.formatType)
}this.update();
this.updateNavArrows()
},setEndDate:function(a){this.endDate=a||Infinity;
if(this.endDate!==Infinity){this.endDate=g.parseDate(this.endDate,this.format,this.language,this.formatType)
}this.update();
this.updateNavArrows()
},setDaysOfWeekDisabled:function(a){this.daysOfWeekDisabled=a||[];
if(!l.isArray(this.daysOfWeekDisabled)){this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)
}this.daysOfWeekDisabled=l.map(this.daysOfWeekDisabled,function(b){return parseInt(b,10)
});
this.update();
this.updateNavArrows()
},place:function(){if(this.isInline){return
}var a=parseInt(this.element.parents().filter(function(){return l(this).css("z-index")!="auto"
}).first().css("z-index"))+10;
var b,c,d;
if(this.component){b=this.component.offset();
d=b.left;
if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){d+=this.component.outerWidth()-this.picker.outerWidth()
}}else{b=this.element.offset();
d=b.left
}if(this.pickerPosition=="top-left"||this.pickerPosition=="top-right"){c=b.top-this.picker.outerHeight()
}else{c=b.top+this.height
}this.picker.css({top:c,left:d,zIndex:a})
},update:function(){var b,a=false;
if(arguments&&arguments.length&&(typeof arguments[0]==="string"||arguments[0] instanceof Date)){b=arguments[0];
a=true
}else{b=this.element.data("date")||(this.isInput?this.element.val():this.element.find("input").val())||this.initialDate
}if(!b){b=new Date();
a=false
}this.date=g.parseDate(b,this.format,this.language,this.formatType);
if(a){this.setValue()
}if(this.date<this.startDate){this.viewDate=new Date(this.startDate)
}else{if(this.date>this.endDate){this.viewDate=new Date(this.endDate)
}else{this.viewDate=new Date(this.date)
}}this.fill()
},fillDow:function(){var b=this.weekStart,a="<tr>";
while(b<this.weekStart+7){a+='<th class="dow">'+k[this.language].daysMin[(b++)%7]+"</th>"
}a+="</tr>";
this.picker.find(".datetimepicker-days thead").append(a)
},fillMonths:function(){var a="",b=0;
while(b<12){a+='<span class="month">'+k[this.language].monthsShort[b++]+"</span>"
}this.picker.find(".datetimepicker-months td").html(a)
},fill:function(){if(this.date==null||this.viewDate==null){return
}var Q=new Date(this.viewDate),W=Q.getUTCFullYear(),N=Q.getUTCMonth(),ae=Q.getUTCDate(),a=Q.getUTCHours(),O=Q.getUTCMinutes(),M=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,Y=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,ac=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,K=this.endDate!==Infinity?this.endDate.getUTCMonth():Infinity,aa=(new i(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate())).valueOf(),S=new Date();
this.picker.find(".datetimepicker-days thead th:eq(1)").text(k[this.language].months[N]+" "+W);
if(this.formatViewType=="time"){var V=a%12?a%12:12;
var af=(V<10?"0":"")+V;
var ab=(O<10?"0":"")+O;
var f=k[this.language].meridiem[a<12?0:1];
this.picker.find(".datetimepicker-hours thead th:eq(1)").text(af+":"+ab+" "+f.toUpperCase());
this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(af+":"+ab+" "+f.toUpperCase())
}else{this.picker.find(".datetimepicker-hours thead th:eq(1)").text(ae+" "+k[this.language].months[N]+" "+W);
this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(ae+" "+k[this.language].months[N]+" "+W)
}this.picker.find("tfoot th.today").text(k[this.language].today).toggle(this.todayBtn!==false);
this.updateNavArrows();
this.fillMonths();
var e=i(W,N-1,28,0,0,0,0),c=g.getDaysInMonth(e.getUTCFullYear(),e.getUTCMonth());
e.setUTCDate(c);
e.setUTCDate(c-(e.getUTCDay()-this.weekStart+7)%7);
var ag=new Date(e);
ag.setUTCDate(ag.getUTCDate()+42);
ag=ag.valueOf();
var Z=[];
var U;
while(e.valueOf()<ag){if(e.getUTCDay()==this.weekStart){Z.push("<tr>")
}U="";
if(e.getUTCFullYear()<W||(e.getUTCFullYear()==W&&e.getUTCMonth()<N)){U+=" old"
}else{if(e.getUTCFullYear()>W||(e.getUTCFullYear()==W&&e.getUTCMonth()>N)){U+=" new"
}}if(this.todayHighlight&&e.getUTCFullYear()==S.getFullYear()&&e.getUTCMonth()==S.getMonth()&&e.getUTCDate()==S.getDate()){U+=" today"
}if(e.valueOf()==aa){U+=" active"
}if((e.valueOf()+86400000)<=this.startDate||e.valueOf()>this.endDate||l.inArray(e.getUTCDay(),this.daysOfWeekDisabled)!==-1){U+=" disabled"
}Z.push('<td class="day'+U+'">'+e.getUTCDate()+"</td>");
if(e.getUTCDay()==this.weekEnd){Z.push("</tr>")
}e.setUTCDate(e.getUTCDate()+1)
}this.picker.find(".datetimepicker-days tbody").empty().append(Z.join(""));
Z=[];
var R="",T="",X="";
for(var d=0;
d<24;
d++){var P=i(W,N,ae,d);
U="";
if((P.valueOf()+3600000)<=this.startDate||P.valueOf()>this.endDate){U+=" disabled"
}else{if(a==d){U+=" active"
}}if(this.showMeridian&&k[this.language].meridiem.length==2){T=(d<12?k[this.language].meridiem[0]:k[this.language].meridiem[1]);
if(T!=X){if(X!=""){Z.push("</fieldset>")
}Z.push('<fieldset class="hour"><legend>'+T.toUpperCase()+"</legend>")
}X=T;
R=(d%12?d%12:12);
Z.push('<span class="hour'+U+" hour_"+(d<12?"am":"pm")+'">'+R+"</span>");
if(d==23){Z.push("</fieldset>")
}}else{R=d+":00";
Z.push('<span class="hour'+U+'">'+R+"</span>")
}}this.picker.find(".datetimepicker-hours td").html(Z.join(""));
Z=[];
R="",T="",X="";
for(var d=0;
d<60;
d+=this.minuteStep){var P=i(W,N,ae,a,d,0);
U="";
if(P.valueOf()<this.startDate||P.valueOf()>this.endDate){U+=" disabled"
}else{if(Math.floor(O/this.minuteStep)==Math.floor(d/this.minuteStep)){U+=" active"
}}if(this.showMeridian&&k[this.language].meridiem.length==2){T=(a<12?k[this.language].meridiem[0]:k[this.language].meridiem[1]);
if(T!=X){if(X!=""){Z.push("</fieldset>")
}Z.push('<fieldset class="minute"><legend>'+T.toUpperCase()+"</legend>")
}X=T;
R=(a%12?a%12:12);
Z.push('<span class="minute'+U+'">'+R+":"+(d<10?"0"+d:d)+"</span>");
if(d==59){Z.push("</fieldset>")
}}else{R=d+":00";
Z.push('<span class="minute'+U+'">'+a+":"+(d<10?"0"+d:d)+"</span>")
}}this.picker.find(".datetimepicker-minutes td").html(Z.join(""));
var b=this.date.getUTCFullYear();
var ad=this.picker.find(".datetimepicker-months").find("th:eq(1)").text(W).end().find("span").removeClass("active");
if(b==W){ad.eq(this.date.getUTCMonth()).addClass("active")
}if(W<M||W>ac){ad.addClass("disabled")
}if(W==M){ad.slice(0,Y).addClass("disabled")
}if(W==ac){ad.slice(K+1).addClass("disabled")
}Z="";
W=parseInt(W/10,10)*10;
var L=this.picker.find(".datetimepicker-years").find("th:eq(1)").text(W+"-"+(W+9)).end().find("td");
W-=1;
for(var d=-1;
d<11;
d++){Z+='<span class="year'+(d==-1||d==10?" old":"")+(b==W?" active":"")+(W<M||W>ac?" disabled":"")+'">'+W+"</span>";
W+=1
}L.html(Z);
this.place()
},updateNavArrows:function(){var a=new Date(this.viewDate),c=a.getUTCFullYear(),b=a.getUTCMonth(),d=a.getUTCDate(),e=a.getUTCHours();
switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&c<=this.startDate.getUTCFullYear()&&b<=this.startDate.getUTCMonth()&&d<=this.startDate.getUTCDate()&&e<=this.startDate.getUTCHours()){this.picker.find(".prev").css({visibility:"hidden"})
}else{this.picker.find(".prev").css({visibility:"visible"})
}if(this.endDate!==Infinity&&c>=this.endDate.getUTCFullYear()&&b>=this.endDate.getUTCMonth()&&d>=this.endDate.getUTCDate()&&e>=this.endDate.getUTCHours()){this.picker.find(".next").css({visibility:"hidden"})
}else{this.picker.find(".next").css({visibility:"visible"})
}break;
case 1:if(this.startDate!==-Infinity&&c<=this.startDate.getUTCFullYear()&&b<=this.startDate.getUTCMonth()&&d<=this.startDate.getUTCDate()){this.picker.find(".prev").css({visibility:"hidden"})
}else{this.picker.find(".prev").css({visibility:"visible"})
}if(this.endDate!==Infinity&&c>=this.endDate.getUTCFullYear()&&b>=this.endDate.getUTCMonth()&&d>=this.endDate.getUTCDate()){this.picker.find(".next").css({visibility:"hidden"})
}else{this.picker.find(".next").css({visibility:"visible"})
}break;
case 2:if(this.startDate!==-Infinity&&c<=this.startDate.getUTCFullYear()&&b<=this.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})
}else{this.picker.find(".prev").css({visibility:"visible"})
}if(this.endDate!==Infinity&&c>=this.endDate.getUTCFullYear()&&b>=this.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})
}else{this.picker.find(".next").css({visibility:"visible"})
}break;
case 3:case 4:if(this.startDate!==-Infinity&&c<=this.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})
}else{this.picker.find(".prev").css({visibility:"visible"})
}if(this.endDate!==Infinity&&c>=this.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})
}else{this.picker.find(".next").css({visibility:"visible"})
}break
}},click:function(r){r.stopPropagation();
r.preventDefault();
var f=l(r.target).closest("span, td, th, legend");
if(f.length==1){if(f.is(".disabled")){this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate});
return
}switch(f[0].nodeName.toLowerCase()){case"th":switch(f[0].className){case"switch":this.showMode(1);
break;
case"prev":case"next":var v=g.modes[this.viewMode].navStep*(f[0].className=="prev"?-1:1);
switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,v);
break;
case 1:this.viewDate=this.moveDate(this.viewDate,v);
break;
case 2:this.viewDate=this.moveMonth(this.viewDate,v);
break;
case 3:case 4:this.viewDate=this.moveYear(this.viewDate,v);
break
}this.fill();
break;
case"today":var u=new Date();
u=i(u.getFullYear(),u.getMonth(),u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds(),0);
this.viewMode=this.startViewMode;
this.showMode(0);
this._setDate(u);
this.fill();
if(this.autoclose){this.hide()
}break
}break;
case"span":if(!f.is(".disabled")){var d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),c=this.viewDate.getUTCDate(),b=this.viewDate.getUTCHours(),t=this.viewDate.getUTCMinutes(),a=this.viewDate.getUTCSeconds();
if(f.is(".month")){this.viewDate.setUTCDate(1);
e=f.parent().find("span").index(f);
c=this.viewDate.getUTCDate();
this.viewDate.setUTCMonth(e);
this.element.trigger({type:"changeMonth",date:this.viewDate});
if(this.viewSelect>=3){this._setDate(i(d,e,c,b,t,a,0))
}}else{if(f.is(".year")){this.viewDate.setUTCDate(1);
d=parseInt(f.text(),10)||0;
this.viewDate.setUTCFullYear(d);
this.element.trigger({type:"changeYear",date:this.viewDate});
if(this.viewSelect>=4){this._setDate(i(d,e,c,b,t,a,0))
}}else{if(f.is(".hour")){b=parseInt(f.text(),10)||0;
if(f.hasClass("hour_am")||f.hasClass("hour_pm")){if(b==12&&f.hasClass("hour_am")){b=0
}else{if(b!=12&&f.hasClass("hour_pm")){b+=12
}}}this.viewDate.setUTCHours(b);
this.element.trigger({type:"changeHour",date:this.viewDate});
if(this.viewSelect>=1){this._setDate(i(d,e,c,b,t,a,0))
}}else{if(f.is(".minute")){t=parseInt(f.text().substr(f.text().indexOf(":")+1),10)||0;
this.viewDate.setUTCMinutes(t);
this.element.trigger({type:"changeMinute",date:this.viewDate});
if(this.viewSelect>=0){this._setDate(i(d,e,c,b,t,a,0))
}}}}}if(this.viewMode!=0){var s=this.viewMode;
this.showMode(-1);
this.fill();
if(s==this.viewMode&&this.autoclose){this.hide()
}}else{this.fill();
if(this.autoclose){this.hide()
}}}break;
case"td":if(f.is(".day")&&!f.is(".disabled")){var c=parseInt(f.text(),10)||1;
var d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),b=this.viewDate.getUTCHours(),t=this.viewDate.getUTCMinutes(),a=this.viewDate.getUTCSeconds();
if(f.is(".old")){if(e===0){e=11;
d-=1
}else{e-=1
}}else{if(f.is(".new")){if(e==11){e=0;
d+=1
}else{e+=1
}}}this.viewDate.setUTCFullYear(d);
this.viewDate.setUTCMonth(e);
this.viewDate.setUTCDate(c);
this.element.trigger({type:"changeDay",date:this.viewDate});
if(this.viewSelect>=2){this._setDate(i(d,e,c,b,t,a,0))
}}var s=this.viewMode;
this.showMode(-1);
this.fill();
if(s==this.viewMode&&this.autoclose){this.hide()
}break
}}},_setDate:function(c,a){if(!a||a=="date"){this.date=c
}if(!a||a=="view"){this.viewDate=c
}this.fill();
this.setValue();
var b;
if(this.isInput){b=this.element
}else{if(this.component){b=this.element.find("input")
}}if(b){b.change();
if(this.autoclose&&(!a||a=="date")){}}this.element.trigger({type:"changeDate",date:this.date})
},moveMinute:function(b,c){if(!c){return b
}var a=new Date(b.valueOf());
a.setUTCMinutes(a.getUTCMinutes()+(c*this.minuteStep));
return a
},moveHour:function(b,c){if(!c){return b
}var a=new Date(b.valueOf());
a.setUTCHours(a.getUTCHours()+c);
return a
},moveDate:function(b,c){if(!c){return b
}var a=new Date(b.valueOf());
a.setUTCDate(a.getUTCDate()+c);
return a
},moveMonth:function(s,r){if(!r){return s
}var e=new Date(s.valueOf()),a=e.getUTCDate(),d=e.getUTCMonth(),f=Math.abs(r),b,c;
r=r>0?1:-1;
if(f==1){c=r==-1?function(){return e.getUTCMonth()==d
}:function(){return e.getUTCMonth()!=b
};
b=d+r;
e.setUTCMonth(b);
if(b<0||b>11){b=(b+12)%12
}}else{for(var q=0;
q<f;
q++){e=this.moveMonth(e,r)
}b=e.getUTCMonth();
e.setUTCDate(a);
c=function(){return b!=e.getUTCMonth()
}
}while(c()){e.setUTCDate(--a);
e.setUTCMonth(b)
}return e
},moveYear:function(a,b){return this.moveMonth(a,b*12)
},dateWithinRange:function(a){return a>=this.startDate&&a<=this.endDate
},keydown:function(e){if(this.picker.is(":not(:visible)")){if(e.keyCode==27){this.show()
}return
}var c=false,q,b,d,a,r;
switch(e.keyCode){case 27:this.hide();
e.preventDefault();
break;
case 37:case 39:if(!this.keyboardNavigation){break
}q=e.keyCode==37?-1:1;
viewMode=this.viewMode;
if(e.ctrlKey){viewMode+=2
}else{if(e.shiftKey){viewMode+=1
}}if(viewMode==4){a=this.moveYear(this.date,q);
r=this.moveYear(this.viewDate,q)
}else{if(viewMode==3){a=this.moveMonth(this.date,q);
r=this.moveMonth(this.viewDate,q)
}else{if(viewMode==2){a=this.moveDate(this.date,q);
r=this.moveDate(this.viewDate,q)
}else{if(viewMode==1){a=this.moveHour(this.date,q);
r=this.moveHour(this.viewDate,q)
}else{if(viewMode==0){a=this.moveMinute(this.date,q);
r=this.moveMinute(this.viewDate,q)
}}}}}if(this.dateWithinRange(a)){this.date=a;
this.viewDate=r;
this.setValue();
this.update();
e.preventDefault();
c=true
}break;
case 38:case 40:if(!this.keyboardNavigation){break
}q=e.keyCode==38?-1:1;
viewMode=this.viewMode;
if(e.ctrlKey){viewMode+=2
}else{if(e.shiftKey){viewMode+=1
}}if(viewMode==4){a=this.moveYear(this.date,q);
r=this.moveYear(this.viewDate,q)
}else{if(viewMode==3){a=this.moveMonth(this.date,q);
r=this.moveMonth(this.viewDate,q)
}else{if(viewMode==2){a=this.moveDate(this.date,q*7);
r=this.moveDate(this.viewDate,q*7)
}else{if(viewMode==1){if(this.showMeridian){a=this.moveHour(this.date,q*6);
r=this.moveHour(this.viewDate,q*6)
}else{a=this.moveHour(this.date,q*4);
r=this.moveHour(this.viewDate,q*4)
}}else{if(viewMode==0){a=this.moveMinute(this.date,q*4);
r=this.moveMinute(this.viewDate,q*4)
}}}}}if(this.dateWithinRange(a)){this.date=a;
this.viewDate=r;
this.setValue();
this.update();
e.preventDefault();
c=true
}break;
case 13:if(this.viewMode!=0){var f=this.viewMode;
this.showMode(-1);
this.fill();
if(f==this.viewMode&&this.autoclose){this.hide()
}}else{this.fill();
if(this.autoclose){this.hide()
}}e.preventDefault();
break;
case 9:this.hide();
break
}if(c){var p;
if(this.isInput){p=this.element
}else{if(this.component){p=this.element.find("input")
}}if(p){p.change()
}this.element.trigger({type:"changeDate",date:this.date})
}},showMode:function(b){if(b){var a=Math.max(0,Math.min(g.modes.length-1,this.viewMode+b));
if(a>=this.minView&&a<=this.maxView){this.element.trigger({type:"changeMode",date:this.viewDate,oldViewMode:this.viewMode,newViewMode:a});
this.viewMode=a
}}this.picker.find(">div").hide().filter(".datetimepicker-"+g.modes[this.viewMode].clsName).css("display","block");
this.updateNavArrows()
},reset:function(a){this._setDate(null,"date")
}};
l.fn.datetimepicker=function(a){var b=Array.apply(null,arguments);
b.shift();
return this.each(function(){var c=l(this),d=c.data("datetimepicker"),e=typeof a=="object"&&a;
if(!d){c.data("datetimepicker",(d=new j(this,l.extend({},l.fn.datetimepicker.defaults,e))))
}if(typeof a=="string"&&typeof d[a]=="function"){d[a].apply(d,b)
}})
};
l.fn.datetimepicker.defaults={};
l.fn.datetimepicker.Constructor=j;
var k=l.fn.datetimepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["am","pm"],suffix:["st","nd","rd","th"],today:"Today"}};
var g={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return(((a%4===0)&&(a%100!==0))||(a%400===0))
},getDaysInMonth:function(b,a){return[31,(g.isLeapYear(b)?29:28),31,30,31,30,31,31,30,31,30,31][a]
},getDefaultFormat:function(b,a){if(b=="standard"){if(a=="input"){return"yyyy-mm-dd hh:ii"
}else{return"yyyy-mm-dd hh:ii:ss"
}}else{if(b=="php"){if(a=="input"){return"Y-m-d H:i"
}else{return"Y-m-d H:i:s"
}}else{throw new Error("Invalid format type.")
}}},validParts:function(a){if(a=="standard"){return/hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g
}else{if(a=="php"){return/[dDjlNwzFmMnStyYaABgGhHis]/g
}else{throw new Error("Invalid format type.")
}}},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(a,c){var d=a.replace(this.validParts(c),"\0").split("\0"),b=a.match(this.validParts(c));
if(!d||!d.length||!b||b.length==0){throw new Error("Invalid date format.")
}return{separators:d,parts:b}
},parseDate:function(s,H,d,a){if(s instanceof Date){var F=new Date(s.valueOf()-s.getTimezoneOffset()*60000);
F.setMilliseconds(0);
return F
}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(s)){H=this.parseFormat("yyyy-mm-dd",a)
}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(s)){H=this.parseFormat("yyyy-mm-dd hh:ii",a)
}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(s)){H=this.parseFormat("yyyy-mm-dd hh:ii:ss",a)
}if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(s)){var E=/([-+]\d+)([dmwy])/,f=s.match(/([-+]\d+)([dmwy])/g),C,z;
s=new Date();
for(var e=0;
e<f.length;
e++){C=E.exec(f[e]);
z=parseInt(C[1]);
switch(C[2]){case"d":s.setUTCDate(s.getUTCDate()+z);
break;
case"m":s=j.prototype.moveMonth.call(j.prototype,s,z);
break;
case"w":s.setUTCDate(s.getUTCDate()+z*7);
break;
case"y":s=j.prototype.moveYear.call(j.prototype,s,z);
break
}}return i(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),0)
}var f=s&&s.match(this.nonpunctuation)||[],s=new Date(0,0,0,0,0,0,0),b={},I=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","D","DD","d","dd","H","HH","p","P"],G={hh:function(n,m){return n.setUTCHours(m)
},h:function(n,m){return n.setUTCHours(m)
},HH:function(n,m){return n.setUTCHours(m==12?0:m)
},H:function(n,m){return n.setUTCHours(m==12?0:m)
},ii:function(n,m){return n.setUTCMinutes(m)
},i:function(n,m){return n.setUTCMinutes(m)
},ss:function(n,m){return n.setUTCSeconds(m)
},s:function(n,m){return n.setUTCSeconds(m)
},yyyy:function(n,m){return n.setUTCFullYear(m)
},yy:function(n,m){return n.setUTCFullYear(2000+m)
},m:function(n,m){m-=1;
while(m<0){m+=12
}m%=12;
n.setUTCMonth(m);
while(n.getUTCMonth()!=m){n.setUTCDate(n.getUTCDate()-1)
}return n
},d:function(n,m){return n.setUTCDate(m)
},p:function(n,m){return n.setUTCHours(m==1?n.getUTCHours()+12:n.getUTCHours())
}},A,c,C;
G.M=G.MM=G.mm=G.m;
G.dd=G.d;
G.P=G.p;
s=i(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds());
if(f.length==H.parts.length){for(var e=0,B=H.parts.length;
e<B;
e++){A=parseInt(f[e],10);
C=H.parts[e];
if(isNaN(A)){switch(C){case"MM":c=l(k[d].months).filter(function(){var m=this.slice(0,f[e].length),n=f[e].slice(0,m.length);
return m==n
});
A=l.inArray(c[0],k[d].months)+1;
break;
case"M":c=l(k[d].monthsShort).filter(function(){var m=this.slice(0,f[e].length),n=f[e].slice(0,m.length);
return m==n
});
A=l.inArray(c[0],k[d].monthsShort)+1;
break;
case"p":case"P":A=l.inArray(f[e].toLowerCase(),k[d].meridiem);
break
}}b[C]=A
}for(var e=0,D;
e<I.length;
e++){D=I[e];
if(D in b&&!isNaN(b[D])){G[D](s,b[D])
}}}return s
},formatDate:function(f,a,p,c){if(f==null){return""
}var q;
if(c=="standard"){q={yy:f.getUTCFullYear().toString().substring(2),yyyy:f.getUTCFullYear(),m:f.getUTCMonth()+1,M:k[p].monthsShort[f.getUTCMonth()],MM:k[p].months[f.getUTCMonth()],d:f.getUTCDate(),D:k[p].daysShort[f.getUTCDay()],DD:k[p].days[f.getUTCDay()],p:(k[p].meridiem.length==2?k[p].meridiem[f.getUTCHours()<12?0:1]:""),h:f.getUTCHours(),i:f.getUTCMinutes(),s:f.getUTCSeconds()};
q.H=(q.h%12==0?12:q.h%12);
q.HH=(q.H<10?"0":"")+q.H;
q.P=q.p.toUpperCase();
q.hh=(q.h<10?"0":"")+q.h;
q.ii=(q.i<10?"0":"")+q.i;
q.ss=(q.s<10?"0":"")+q.s;
q.dd=(q.d<10?"0":"")+q.d;
q.mm=(q.m<10?"0":"")+q.m
}else{if(c=="php"){q={y:f.getUTCFullYear().toString().substring(2),Y:f.getUTCFullYear(),F:k[p].months[f.getUTCMonth()],M:k[p].monthsShort[f.getUTCMonth()],n:f.getUTCMonth()+1,t:g.getDaysInMonth(f.getUTCFullYear(),f.getUTCMonth()),j:f.getUTCDate(),l:k[p].days[f.getUTCDay()],D:k[p].daysShort[f.getUTCDay()],w:f.getUTCDay(),N:(f.getUTCDay()==0?7:f.getUTCDay()),S:(f.getUTCDate()%10<=k[p].suffix.length?k[p].suffix[f.getUTCDate()%10-1]:""),a:(k[p].meridiem.length==2?k[p].meridiem[f.getUTCHours()<12?0:1]:""),g:(f.getUTCHours()%12==0?12:f.getUTCHours()%12),G:f.getUTCHours(),i:f.getUTCMinutes(),s:f.getUTCSeconds()};
q.m=(q.n<10?"0":"")+q.n;
q.d=(q.j<10?"0":"")+q.j;
q.A=q.a.toString().toUpperCase();
q.h=(q.g<10?"0":"")+q.g;
q.H=(q.G<10?"0":"")+q.G;
q.i=(q.i<10?"0":"")+q.i;
q.s=(q.s<10?"0":"")+q.s
}else{throw new Error("Invalid format type.")
}}var f=[],b=l.extend([],a.separators);
for(var d=0,e=a.parts.length;
d<e;
d++){if(b.length){f.push(b.shift())
}f.push(q[a.parts[d]])
}return f.join("")
},convertViewMode:function(a){switch(a){case 4:case"decade":a=4;
break;
case 3:case"year":a=3;
break;
case 2:case"month":a=2;
break;
case 1:case"day":a=1;
break;
case 0:case"hour":a=0;
break
}return a
},headTemplate:'<thead><tr><th class="prev"><i class="glyphicon glyphicon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="glyphicon glyphicon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};
g.template='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+g.headTemplate+"<tbody></tbody>"+g.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+"</table></div></div>";
l.fn.datetimepicker.DPGlobal=g;
l.fn.datetimepicker.noConflict=function(){l.fn.datetimepicker=old;
return this
};
l(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api",'[data-provide="datetimepicker"]',function(a){var b=l(this);
if(b.data("datetimepicker")){return
}a.preventDefault();
b.datetimepicker("show")
});
l(function(){l('[data-provide="datetimepicker-inline"]').datetimepicker()
})
}(window.jQuery);
(function(a){a.fn.datetimepicker.dates.fr={days:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],daysShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam","Dim"],daysMin:["D","L","Ma","Me","J","V","S","D"],months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthsShort:["Jan","Fev","Mar","Avr","Mai","Jui","Jul","Aou","Sep","Oct","Nov","Dec"],today:"Aujourd'hui",suffix:[],meridiem:["am","pm"],weekStart:1,format:"dd/mm/yyyy"}
}(jQuery));
!function(b){"undefined"==typeof b.fn.each2&&b.extend(b.fn,{each2:function(a){for(var h=b([0]),g=-1,f=this.length;
++g<f&&(h.context=h[0]=this[g])&&a.call(h[0],g,h)!==!1;
){}return this
}})
}(jQuery),function(aE,aD){function aq(a){var d=aE(document.createTextNode(""));
a.before(d),d.before(a),d.remove()
}function ap(d){function c(b){return ar[b]||b
}return d.replace(/[^\u0000-\u007E]/g,c)
}function ao(f,e){for(var h=0,g=e.length;
g>h;
h+=1){if(am(f,e[h])){return h
}}return -1
}function an(){var a=aE(at);
a.appendTo(document.body);
var d={width:a.width()-a[0].clientWidth,height:a.height()-a[0].clientHeight};
return a.remove(),d
}function am(b,d){return b===d?!0:b===aD||d===aD?!1:null===b||null===d?!1:b.constructor===String?b+""==d+"":d.constructor===String?d+""==b+"":!1
}function al(h,g,l){var k,j,i;
if(null===h||h.length<1){return[]
}for(k=h.split(g),j=0,i=k.length;
i>j;
j+=1){k[j]=l(k[j])
}return k
}function ak(b){return b.get(0).getBoundingClientRect().width-b.width()
}function aj(b){var a="keyup-change-value";
b.on("keydown",function(){aE.data(b,a)===aD&&aE.data(b,a,b.val())
}),b.on("keyup",function(){var c=aE.data(b,a);
c!==aD&&b.val()!==c&&(aE.removeData(b,a),b.trigger("keyup-change"))
})
}function ai(a){a.on("mousemove",function(e){var b=ax;
(b===aD||b.x!==e.pageX||b.y!==e.pageY)&&aE(e.target).trigger("mousemove-filtered",e)
})
}function ah(b,h,g){g=g||aD;
var f;
return function(){var a=arguments;
window.clearTimeout(f),f=window.setTimeout(function(){h.apply(g,a)
},b)
}
}function ag(e,d){var f=ah(e,function(b){d.trigger("scroll-debounced",b)
});
d.on("scroll",function(b){ao(b.target,d.get())>=0&&f(b)
})
}function af(b){b[0]!==document.activeElement&&window.setTimeout(function(){var g,a=b[0],h=b.val().length;
b.focus();
var f=a.offsetWidth>0||a.offsetHeight>0;
f&&a===document.activeElement&&(a.setSelectionRange?a.setSelectionRange(h,h):a.createTextRange&&(g=a.createTextRange(),g.collapse(!1),g.select()))
},0)
}function ae(a){a=aE(a)[0];
var h=0,g=0;
if("selectionStart" in a){h=a.selectionStart,g=a.selectionEnd-h
}else{if("selection" in document){a.focus();
var f=document.selection.createRange();
g=document.selection.createRange().text.length,f.moveStart("character",-a.value.length),h=f.text.length-g
}}return{offset:h,length:g}
}function ad(b){b.preventDefault(),b.stopPropagation()
}function ac(b){b.preventDefault(),b.stopImmediatePropagation()
}function ab(a){if(!ay){var d=a[0].currentStyle||window.getComputedStyle(a[0],null);
ay=aE(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:d.fontSize,fontFamily:d.fontFamily,fontStyle:d.fontStyle,fontWeight:d.fontWeight,letterSpacing:d.letterSpacing,textTransform:d.textTransform,whiteSpace:"nowrap"}),ay.attr("class","select2-sizer"),aE(document.body).append(ay)
}return ay.text(a.val()),ay.width()
}function aa(a,l,k){var j,h,i=[];
j=aE.trim(a.attr("class")),j&&(j=""+j,aE(j.split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&i.push(this)
})),j=aE.trim(l.attr("class")),j&&(j=""+j,aE(j.split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(h=k(this),h&&i.push(h))
})),a.attr("class",i.join(" "))
}function Z(h,g,l,k){var j=ap(h.toUpperCase()).indexOf(ap(g.toUpperCase())),i=g.length;
return 0>j?void l.push(k(h)):(l.push(k(h.substring(0,j))),l.push("<span class='select2-match'>"),l.push(k(h.substring(j,j+i))),l.push("</span>"),void l.push(k(h.substring(j+i,h.length))))
}function Y(d){var c={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};
return String(d).replace(/[&<>"'\/\\]/g,function(b){return c[b]
})
}function X(l){var k,j=null,i=l.quietMillis||100,b=l.url,a=this;
return function(c){window.clearTimeout(k),k=window.setTimeout(function(){var n=l.data,m=b,h=l.transport||aE.fn.select2.ajaxDefaults.transport,g={type:l.type||"GET",cache:l.cache||!1,jsonpCallback:l.jsonpCallback||aD,dataType:l.dataType||"json"},e=aE.extend({},aE.fn.select2.ajaxDefaults.params,g);
n=n?n.call(a,c.term,c.page,c.context):null,m="function"==typeof m?m.call(a,c.term,c.page,c.context):m,j&&"function"==typeof j.abort&&j.abort(),l.params&&(aE.isFunction(l.params)?aE.extend(e,l.params.call(a)):aE.extend(e,l.params)),aE.extend(e,{url:m,dataType:l.dataType,data:n,success:function(f){var d=l.results(f,c.page,c);
c.callback(d)
},error:function(o,f,q){var p={hasError:!0,jqXHR:o,textStatus:f,errorThrown:q};
c.callback(p)
}}),j=h.call(a,e)
},i)
}
}function W(a){var k,j,l=a,i=function(b){return""+b.text
};
aE.isArray(l)&&(j=l,l={results:j}),aE.isFunction(l)===!1&&(j=l,l=function(){return j
});
var h=l();
return h.text&&(i=h.text,aE.isFunction(i)||(k=h.text,i=function(b){return b[k]
})),function(c){var f,n=c.term,m={results:[]};
return""===n?void c.callback(l()):(f=function(o,g){var d,b;
if(o=o[0],o.children){d={};
for(b in o){o.hasOwnProperty(b)&&(d[b]=o[b])
}d.children=[],aE(o.children).each2(function(p,e){f(e,d.children)
}),(d.children.length||c.matcher(n,i(d),o))&&g.push(d)
}else{c.matcher(n,i(o),o)&&g.push(o)
}},aE(l().results).each2(function(e,d){f(d,m.results)
}),void c.callback(m))
}
}function V(b){var a=aE.isFunction(b);
return function(j){var i=j.term,d={results:[]},c=a?b(j):b;
aE.isArray(c)&&(aE(c).each(function(){var e=this.text!==aD,f=e?this.text:this;
(""===i||j.matcher(i,f))&&d.results.push(e?this:{id:this,text:this})
}),j.callback(d))
}
}function U(a,d){if(aE.isFunction(a)){return !0
}if(!a){return !1
}if("string"==typeof a){return !0
}throw new Error(d+" must be a string, function, or falsy value")
}function T(a,f){if(aE.isFunction(a)){var e=Array.prototype.slice.call(arguments,2);
return a.apply(f,e)
}return a
}function S(a){var d=0;
return aE.each(a,function(e,c){c.children?d+=S(c.children):d++
}),d
}function R(v,u,t,s){var p,o,n,m,b,r=v,q=!1;
if(!s.createSearchChoice||!s.tokenSeparators||s.tokenSeparators.length<1){return aD
}for(;
;
){for(o=-1,n=0,m=s.tokenSeparators.length;
m>n&&(b=s.tokenSeparators[n],o=v.indexOf(b),!(o>=0));
n++){}if(0>o){break
}if(p=v.substring(0,o),v=v.substring(o+b.length),p.length>0&&(p=s.createSearchChoice.call(this,p,u),p!==aD&&null!==p&&s.id(p)!==aD&&null!==s.id(p))){for(q=!1,n=0,m=u.length;
m>n;
n++){if(am(s.id(p),s.id(u[n]))){q=!0;
break
}}q||t(p)
}}return r!==v?v:void 0
}function Q(){var a=this;
aE.each(arguments,function(b,d){a[d].remove(),a[d]=null
})
}function P(a,f){var e=function(){};
return e.prototype=new a,e.prototype.constructor=e,e.prototype.parent=a.prototype,e.prototype=aE.extend(e.prototype,f),e
}if(window.Select2===aD){var aC,aB,aA,az,ay,aw,av,ax={x:0,y:0},au={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(b){switch(b=b.which?b.which:b){case au.LEFT:case au.RIGHT:case au.UP:case au.DOWN:return !0
}return !1
},isControl:function(d){var c=d.which;
switch(c){case au.SHIFT:case au.CTRL:case au.ALT:return !0
}return d.metaKey?!0:!1
},isFunctionKey:function(b){return b=b.which?b.which:b,b>=112&&123>=b
}},at="<div class='select2-measure-scrollbar'></div>",ar={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038a":"\u0399","\u03aa":"\u0399","\u038c":"\u039f","\u038e":"\u03a5","\u03ab":"\u03a5","\u038f":"\u03a9","\u03ac":"\u03b1","\u03ad":"\u03b5","\u03ae":"\u03b7","\u03af":"\u03b9","\u03ca":"\u03b9","\u0390":"\u03b9","\u03cc":"\u03bf","\u03cd":"\u03c5","\u03cb":"\u03c5","\u03b0":"\u03c5","\u03c9":"\u03c9","\u03c2":"\u03c3"};
aw=aE(document),az=function(){var b=1;
return function(){return b++
}
}(),aC=P(Object,{bind:function(d){var c=this;
return function(){d.apply(c,arguments)
}
},init:function(l){var k,j,f=".select2-results";
this.opts=l=this.prepareOpts(l),this.id=l.id,l.element.data("select2")!==aD&&null!==l.element.data("select2")&&l.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=aE(".select2-hidden-accessible"),0==this.liveRegion.length&&(this.liveRegion=aE("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body)),this.containerId="s2id_"+(l.element.attr("id")||"autogen"+az()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",l.element.attr("title")),this.body=aE(document.body),aa(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",l.element.attr("style")),this.container.css(T(l.containerCss,this.opts.element)),this.container.addClass(T(l.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",ad),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),aa(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(T(l.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",ad),this.results=k=this.container.find(f),this.search=j=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",ad),ai(this.results),this.dropdown.on("mousemove-filtered",f,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",f,this.bind(function(c){this._touchEvent=!0,this.highlightUnderEvent(c)
})),this.dropdown.on("touchmove",f,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",f,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(c){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())
})),ag(80,this.results),this.dropdown.on("scroll-debounced",f,this.bind(this.loadMoreIfNeeded)),aE(this.container).on("change",".select2-input",function(c){c.stopPropagation()
}),aE(this.dropdown).on("change",".select2-input",function(c){c.stopPropagation()
}),aE.fn.mousewheel&&k.mousewheel(function(g,d,m,i){var h=k.scrollTop();
i>0&&0>=h-i?(k.scrollTop(0),ad(g)):0>i&&k.get(0).scrollHeight-k.scrollTop()+i<=k.height()&&(k.scrollTop(k.get(0).scrollHeight-k.height()),ad(g))
}),aj(j),j.on("keyup-change input paste",this.bind(this.updateResults)),j.on("focus",function(){j.addClass("select2-focused")
}),j.on("blur",function(){j.removeClass("select2-focused")
}),this.dropdown.on("mouseup",f,this.bind(function(c){aE(c.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(c),this.selectHighlighted(c))
})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(c){c.stopPropagation()
}),this.lastSearchTerm=aD,aE.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==l.maximumInputLength&&this.search.attr("maxlength",l.maximumInputLength);
var b=l.element.prop("disabled");
b===aD&&(b=!1),this.enable(!b);
var a=l.element.prop("readonly");
a===aD&&(a=!1),this.readonly(a),av=av||an(),this.autofocus=l.element.prop("autofocus"),l.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",l.searchInputPlaceholder)
},destroy:function(){var b=this.opts.element,f=b.data("select2"),e=this;
this.close(),b.length&&b[0].detachEvent&&e._sync&&b.each(function(){e._sync&&this.detachEvent("onpropertychange",e._sync)
}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,f!==aD&&(f.container.remove(),f.liveRegion.remove(),f.dropdown.remove(),b.removeData("select2").off(".select2"),b.is("input[type='hidden']")?b.css("display",""):(b.show().prop("autofocus",this.autofocus||!1),this.elementTabIndex?b.attr({tabindex:this.elementTabIndex}):b.removeAttr("tabindex"),b.show())),Q.call(this,"container","liveRegion","dropdown","results","search")
},optionToData:function(b){return b.is("option")?{id:b.prop("value"),text:b.text(),element:b.get(),css:b.attr("class"),disabled:b.prop("disabled"),locked:am(b.attr("locked"),"locked")||am(b.data("locked"),!0)}:b.is("optgroup")?{text:b.attr("label"),children:[],element:b.get(),css:b.attr("class")}:void 0
},prepareOpts:function(p){var o,n,m,l,f=this;
if(o=p.element,"select"===o.get(0).tagName.toLowerCase()&&(this.select=n=p.element),n&&aE.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in p){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")
}}),p.debug=p.debug||aE.fn.select2.defaults.debug,p.debug&&console&&console.warn&&(null!=p.id&&console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=p.text&&console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=p.sortResults&&console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "),null!=p.selectOnBlur&&console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."),null!=p.ajax&&null!=p.ajax.results&&console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."),null!=p.formatNoResults&&console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."),null!=p.formatSearching&&console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."),null!=p.formatInputTooShort&&console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."),null!=p.formatInputTooLong&&console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."),null!=p.formatLoading&&console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."),null!=p.formatSelectionTooBig&&console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."),p.element.data("select2Tags")&&console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")),null!=p.element.data("tags")){var b=p.element.data("tags");
aE.isArray(b)||(b=[]),p.element.data("select2Tags",b)
}if(null!=p.sorter&&(p.sortResults=p.sorter),null!=p.selectOnClose&&(p.selectOnBlur=p.selectOnClose),null!=p.ajax&&aE.isFunction(p.ajax.processResults)&&(p.ajax.results=p.ajax.processResults),null!=p.language){var a=p.language;
aE.isFunction(a.noMatches)&&(p.formatNoMatches=a.noMatches),aE.isFunction(a.searching)&&(p.formatSearching=a.searching),aE.isFunction(a.inputTooShort)&&(p.formatInputTooShort=a.inputTooShort),aE.isFunction(a.inputTooLong)&&(p.formatInputTooLong=a.inputTooLong),aE.isFunction(a.loadingMore)&&(p.formatLoading=a.loadingMore),aE.isFunction(a.maximumSelected)&&(p.formatSelectionTooBig=a.maximumSelected)
}if(p=aE.extend({},{populateResults:function(t,s,r){var q,i=this.opts.id,c=this.liveRegion;
(q=function(B,A,z){var y,x,k,j,h,g,G,F,E,D;
B=p.sortResults(B,A,r);
var C=[];
for(y=0,x=B.length;
x>y;
y+=1){k=B[y],h=k.disabled===!0,j=!h&&i(k)!==aD,g=k.children&&k.children.length>0,G=aE("<li></li>"),G.addClass("select2-results-dept-"+z),G.addClass("select2-result"),G.addClass(j?"select2-result-selectable":"select2-result-unselectable"),h&&G.addClass("select2-disabled"),g&&G.addClass("select2-result-with-children"),G.addClass(f.opts.formatResultCssClass(k)),G.attr("role","presentation"),F=aE(document.createElement("div")),F.addClass("select2-result-label"),F.attr("id","select2-result-label-"+az()),F.attr("role","option"),D=p.formatResult(k,F,r,f.opts.escapeMarkup),D!==aD&&(F.html(D),G.append(F)),g&&(E=aE("<ul></ul>"),E.addClass("select2-result-sub"),q(k.children,E,z+1),G.append(E)),G.data("select2-data",k),C.push(G[0])
}A.append(C),c.text(p.formatMatches(B.length))
})(s,t,0)
}},aE.fn.select2.defaults,p),"function"!=typeof p.id&&(m=p.id,p.id=function(c){return c[m]
}),aE.isArray(p.element.data("select2Tags"))){if("tags" in p){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+p.element.attr("id")
}p.tags=p.element.data("select2Tags")
}if(n?(p.query=this.bind(function(d){var k,j,i,r={results:[],more:!1},q=d.term;
i=function(e,h){var g;
e.is("option")?d.matcher(q,e.text(),e)&&h.push(f.optionToData(e)):e.is("optgroup")&&(g=f.optionToData(e),e.children().each2(function(s,c){i(c,g.children)
}),g.children.length>0&&h.push(g))
},k=o.children(),this.getPlaceholder()!==aD&&k.length>0&&(j=this.getPlaceholderOption(),j&&(k=k.not(j))),k.each2(function(e,c){i(c,r.results)
}),d.callback(r)
}),p.id=function(c){return c.id
}):"query" in p||("ajax" in p?(l=p.element.data("ajax-url"),l&&l.length>0&&(p.ajax.url=l),p.query=X.call(p.element,p.ajax)):"data" in p?p.query=W(p.data):"tags" in p&&(p.query=V(p.tags),p.createSearchChoice===aD&&(p.createSearchChoice=function(c){return{id:aE.trim(c),text:aE.trim(c)}
}),p.initSelection===aD&&(p.initSelection=function(c,h){var g=[];
aE(al(c.val(),p.separator,p.transformVal)).each(function(){var e={id:this,text:this},i=p.tags;
aE.isFunction(i)&&(i=i()),aE(i).each(function(){return am(this.id,e.id)?(e=this,!1):void 0
}),g.push(e)
}),h(g)
}))),"function"!=typeof p.query){throw"query function not defined for Select2 "+p.element.attr("id")
}if("top"===p.createSearchChoicePosition){p.createSearchChoicePosition=function(d,c){d.unshift(c)
}
}else{if("bottom"===p.createSearchChoicePosition){p.createSearchChoicePosition=function(d,c){d.push(c)
}
}else{if("function"!=typeof p.createSearchChoicePosition){throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function"
}}}return p
},monitorSource:function(){var b,f=this.opts.element,a=this;
f.on("change.select2",this.bind(function(c){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()
})),this._sync=this.bind(function(){var c=f.prop("disabled");
c===aD&&(c=!1),this.enable(!c);
var e=f.prop("readonly");
e===aD&&(e=!1),this.readonly(e),this.container&&(aa(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(T(this.opts.containerCssClass,this.opts.element))),this.dropdown&&(aa(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(T(this.opts.dropdownCssClass,this.opts.element)))
}),f.length&&f[0].attachEvent&&f.each(function(){this.attachEvent("onpropertychange",a._sync)
}),b=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,b!==aD&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new b(function(c){aE.each(c,a._sync)
}),this.propertyObserver.observe(f.get(0),{attributes:!0,subtree:!1}))
},triggerSelect:function(a){var d=aE.Event("select2-selecting",{val:this.id(a),object:a,choice:a});
return this.opts.element.trigger(d),!d.isDefaultPrevented()
},triggerChange:function(a){a=a||{},a=aE.extend({},a,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(a),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()
},isInterfaceEnabled:function(){return this.enabledInterface===!0
},enableInterface:function(){var d=this._enabled&&!this._readonly,c=!d;
return d===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",c),this.close(),this.enabledInterface=d,!0)
},enable:function(b){b===aD&&(b=!0),this._enabled!==b&&(this._enabled=b,this.opts.element.prop("disabled",!b),this.enableInterface())
},disable:function(){this.enable(!1)
},readonly:function(b){b===aD&&(b=!1),this._readonly!==b&&(this._readonly=b,this.opts.element.prop("readonly",b),this.enableInterface())
},opened:function(){return this.container?this.container.hasClass("select2-dropdown-open"):!1
},positionDropdown:function(){var C,B,A,j,a,aL=this.dropdown,aK=this.container,aJ=aK.offset(),aI=aK.get(0).getBoundingClientRect().height,aH=aK.get(0).getBoundingClientRect().width,aG=aL.get(0).getBoundingClientRect().height,aF=aE(window),O=aF.width(),N=aF.height(),M=aF.scrollLeft()+O,L=aF.scrollTop()+N,K=aJ.top+aI,J=aJ.left,I=L>=K+aG,H=aJ.top-aG>=aF.scrollTop(),G=aL.get(0).getBoundingClientRect().width,F=function(){return M>=J+G
},E=function(){return aJ.left+M+aK.get(0).getBoundingClientRect().width>G
},D=aL.hasClass("select2-drop-above");
D?(B=!0,!H&&I&&(A=!0,B=!1)):(B=!1,!I&&H&&(A=!0,B=!0)),A&&(aL.hide(),aJ=this.container.offset(),aI=this.container.get(0).getBoundingClientRect().height,aH=this.container.get(0).getBoundingClientRect().width,aG=aL.get(0).getBoundingClientRect().height,M=aF.scrollLeft()+O,L=aF.scrollTop()+N,K=aJ.top+aI,J=aJ.left,G=aL.get(0).getBoundingClientRect().width,aL.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(a=aE(".select2-results",aL)[0],aL.addClass("select2-drop-auto-width"),aL.css("width",""),G=aL.get(0).getBoundingClientRect().width+(a.scrollHeight===a.clientHeight?0:av.width),G>aH?aH=G:G=aH,aG=aL.get(0).getBoundingClientRect().height):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(C=this.body.offset(),K-=C.top,J-=C.left),!F()&&E()&&(J=aJ.left+this.container.get(0).getBoundingClientRect().width-G),j={left:J,width:aH},B?(this.container.addClass("select2-drop-above"),aL.addClass("select2-drop-above"),aG=aL.get(0).getBoundingClientRect().height,j.top=aJ.top-aG,j.bottom="auto"):(j.top=K,j.bottom="auto",this.container.removeClass("select2-drop-above"),aL.removeClass("select2-drop-above")),j=aE.extend(j,T(this.opts.dropdownCss,this.opts.element)),aL.css(j)
},shouldOpen:function(){var a;
return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(a=aE.Event("select2-opening"),this.opts.element.trigger(a),!a.isDefaultPrevented())
},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")
},open:function(){return this.shouldOpen()?(this.opening(),aw.on("mousemove.select2Event",function(b){ax.x=b.pageX,ax.y=b.pageY
}),!0):!1
},opening:function(){var i,a=this.containerEventName,l="scroll."+a,k="resize."+a,j="orientationchange."+a;
this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),i=aE("#select2-drop-mask"),0===i.length&&(i=aE(document.createElement("div")),i.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),i.hide(),i.appendTo(this.body),i.on("mousedown touchstart click",function(e){aq(i);
var f,g=aE("#select2-drop");
g.length>0&&(f=g.data("select2"),f.opts.selectOnBlur&&f.selectHighlighted({noFocus:!0}),f.close(),e.preventDefault(),e.stopPropagation())
})),this.dropdown.prev()[0]!==i[0]&&this.dropdown.before(i),aE("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),i.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");
var h=this;
this.container.parents().add(window).each(function(){aE(this).on(k+" "+l+" "+j,function(b){h.opened()&&h.positionDropdown()
})
})
},close:function(){if(this.opened()){var a=this.containerEventName,h="scroll."+a,g="resize."+a,f="orientationchange."+a;
this.container.parents().add(window).each(function(){aE(this).off(h).off(g).off(f)
}),this.clearDropdownAlignmentPreference(),aE("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),aw.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.search.removeAttr("aria-activedescendant"),this.opts.element.trigger(aE.Event("select2-close"))
}},externalSearch:function(b){this.open(),this.search.val(b),this.updateResults(!1)
},clearSearch:function(){},prefillNextSearchTerm:function(){if(""!==this.search.val()){return !1
}var b=this.opts.nextSearchTerm(this.data(),this.lastSearchTerm);
return b!==aD?(this.search.val(b),this.search.select(),!0):!1
},getMaximumSelectionSize:function(){return T(this.opts.maximumSelectionSize,this.opts.element)
},ensureHighlightVisible:function(){var q,p,o,n,m,l,k,a,r=this.results;
if(p=this.highlight(),!(0>p)){if(0==p){return void r.scrollTop(0)
}q=this.findHighlightableChoices().find(".select2-result-label"),o=aE(q[p]),a=(o.offset()||{}).top||0,n=a+o.outerHeight(!0),p===q.length-1&&(k=r.find("li.select2-more-results"),k.length>0&&(n=k.offset().top+k.outerHeight(!0))),m=r.offset().top+r.get(0).getBoundingClientRect().height,n>m&&r.scrollTop(r.scrollTop()+(n-m)),l=a-r.offset().top,0>l&&"none"!=o.css("display")&&r.scrollTop(r.scrollTop()+l)
}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
},moveHighlight:function(a){for(var h=this.findHighlightableChoices(),g=this.highlight();
g>-1&&g<h.length;
){g+=a;
var f=aE(h[g]);
if(f.hasClass("select2-result-selectable")&&!f.hasClass("select2-disabled")&&!f.hasClass("select2-selected")){this.highlight(g);
break
}}},highlight:function(a){var g,f,h=this.findHighlightableChoices();
return 0===arguments.length?ao(h.filter(".select2-highlighted")[0],h.get()):(a>=h.length&&(a=h.length-1),0>a&&(a=0),this.removeHighlight(),g=aE(h[a]),g.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",g.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(g.text()),f=g.data("select2-data"),void (f&&this.opts.element.trigger({type:"select2-highlight",val:this.id(f),choice:f})))
},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")
},touchMoved:function(){this._touchMoved=!0
},clearTouchMoved:function(){this._touchMoved=!1
},countSelectableResults:function(){return this.findHighlightableChoices().length
},highlightUnderEvent:function(a){var f=aE(a.target).closest(".select2-result-selectable");
if(f.length>0&&!f.is(".select2-highlighted")){var e=this.findHighlightableChoices();
this.highlight(e.index(f))
}else{0==f.length&&this.removeHighlight()
}},loadMoreIfNeeded:function(){var n,i=this.results,h=i.find("li.select2-more-results"),m=this.resultsPage+1,l=this,k=this.search.val(),j=this.context;
0!==h.length&&(n=h.offset().top-i.offset().top-i.height(),n<=this.opts.loadMorePadding&&(h.addClass("select2-active"),this.opts.query({element:this.opts.element,term:k,page:m,context:j,matcher:this.opts.matcher,callback:this.bind(function(a){l.opened()&&(l.opts.populateResults.call(this,i,a.results,{term:k,page:m,context:j}),l.postprocessResults(a,!1,!1),a.more===!0?(h.detach().appendTo(i).html(l.opts.escapeMarkup(T(l.opts.formatLoadMore,l.opts.element,m+1))),window.setTimeout(function(){l.loadMoreIfNeeded()
},10)):h.remove(),l.positionDropdown(),l.resultsPage=m,l.context=a.context,this.opts.element.trigger({type:"select2-loaded",items:a}))
})})))
},tokenize:function(){},updateResults:function(z){function p(){y.removeClass("select2-active"),u.positionDropdown(),x.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?u.liveRegion.text(x.text()):u.liveRegion.text(u.opts.formatMatches(x.find('.select2-result-selectable:not(".select2-selected")').length))
}function b(c){x.html(c),p()
}var v,t,q,y=this.search,x=this.results,w=this.opts,u=this,s=y.val(),r=aE.data(this.container,"select2-last-term");
if((z===!0||!r||!am(s,r))&&(aE.data(this.container,"select2-last-term",s),z===!0||this.showSearchInput!==!1&&this.opened())){q=++this.queryCount;
var a=this.getMaximumSelectionSize();
if(a>=1&&(v=this.data(),aE.isArray(v)&&v.length>=a&&U(w.formatSelectionTooBig,"formatSelectionTooBig"))){return void b("<li class='select2-selection-limit'>"+T(w.formatSelectionTooBig,w.element,a)+"</li>")
}if(y.val().length<w.minimumInputLength){return b(U(w.formatInputTooShort,"formatInputTooShort")?"<li class='select2-no-results'>"+T(w.formatInputTooShort,w.element,y.val(),w.minimumInputLength)+"</li>":""),void (z&&this.showSearch&&this.showSearch(!0))
}if(w.maximumInputLength&&y.val().length>w.maximumInputLength){return void b(U(w.formatInputTooLong,"formatInputTooLong")?"<li class='select2-no-results'>"+T(w.formatInputTooLong,w.element,y.val(),w.maximumInputLength)+"</li>":"")
}w.formatSearching&&0===this.findHighlightableChoices().length&&b("<li class='select2-searching'>"+T(w.formatSearching,w.element)+"</li>"),y.addClass("select2-active"),this.removeHighlight(),t=this.tokenize(),t!=aD&&null!=t&&y.val(t),this.resultsPage=1,w.query({element:w.element,term:y.val(),page:this.resultsPage,context:null,matcher:w.matcher,callback:this.bind(function(d){var c;
if(q==this.queryCount){if(!this.opened()){return void this.search.removeClass("select2-active")
}if(d.hasError!==aD&&U(w.formatAjaxError,"formatAjaxError")){return void b("<li class='select2-ajax-error'>"+T(w.formatAjaxError,w.element,d.jqXHR,d.textStatus,d.errorThrown)+"</li>")
}if(this.context=d.context===aD?null:d.context,this.opts.createSearchChoice&&""!==y.val()&&(c=this.opts.createSearchChoice.call(u,y.val(),d.results),c!==aD&&null!==c&&u.id(c)!==aD&&null!==u.id(c)&&0===aE(d.results).filter(function(){return am(u.id(this),u.id(c))
}).length&&this.opts.createSearchChoicePosition(d.results,c)),0===d.results.length&&U(w.formatNoMatches,"formatNoMatches")){return b("<li class='select2-no-results'>"+T(w.formatNoMatches,w.element,y.val())+"</li>"),void (this.showSearch&&this.showSearch(this.showSearch))
}x.empty(),u.opts.populateResults.call(this,x,d.results,{term:y.val(),page:this.resultsPage,context:null}),d.more===!0&&U(w.formatLoadMore,"formatLoadMore")&&(x.append("<li class='select2-more-results'>"+w.escapeMarkup(T(w.formatLoadMore,w.element,this.resultsPage))+"</li>"),window.setTimeout(function(){u.loadMoreIfNeeded()
},10)),this.postprocessResults(d,z),p(),this.opts.element.trigger({type:"select2-loaded",items:d})
}})})
}},cancel:function(){this.close()
},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
},focusSearch:function(){af(this.search)
},selectHighlighted:function(f){if(this._touchMoved){return void this.clearTouchMoved()
}var e=this.highlight(),h=this.results.find(".select2-highlighted"),g=h.closest(".select2-result").data("select2-data");
g?(this.highlight(e),this.onSelect(g,f)):f&&f.noFocus&&this.close()
},getPlaceholder:function(){var b;
return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((b=this.getPlaceholderOption())!==aD?b.text():aD)
},getPlaceholderOption:function(){if(this.select){var a=this.select.children("option").first();
if(this.opts.placeholderOption!==aD){return"first"===this.opts.placeholderOption&&a||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select)
}if(""===aE.trim(a.text())&&""===a.val()){return a
}}},initContainerWidth:function(){function a(){var h,m,l,k,j,i;
if("off"===this.opts.width){return null
}if("element"===this.opts.width){return 0===this.opts.element.get(0).getBoundingClientRect().width?"auto":this.opts.element.get(0).getBoundingClientRect().width+"px"
}if("copy"===this.opts.width||"resolve"===this.opts.width){if(h=this.opts.element.attr("style"),"string"==typeof h){for(m=h.split(";"),k=0,j=m.length;
j>k;
k+=1){if(i=m[k].replace(/\s/g,""),l=i.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==l&&l.length>=1){return l[1]
}}}return"resolve"===this.opts.width?(h=this.opts.element.css("width"),h.indexOf("%")>0?h:0===this.opts.element.get(0).getBoundingClientRect().width?"auto":this.opts.element.get(0).getBoundingClientRect().width+"px"):null
}return aE.isFunction(this.opts.width)?this.opts.width():this.opts.width
}var d=a.call(this);
null!==d&&this.container.css("width",d)
}}),aB=P(aC,{createContainer:function(){var a=aE(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));
return a
},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())
},opening:function(){var a,f,e;
this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),a=this.search.get(0),a.createTextRange?(f=a.createTextRange(),f.collapse(!1),f.select()):a.setSelectionRange&&(e=this.search.val().length,a.setSelectionRange(e,e))),this.prefillNextSearchTerm(),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(aE.Event("select2-open"))
},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())
},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())
},isFocused:function(){return this.container.hasClass("select2-container-active")
},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()
},destroy:function(){aE("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),Q.call(this,"selection","focusser")
},initContainer:function(){var a,i,l=this.container,k=this.dropdown,j=az();
this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=a=l.find(".select2-choice"),this.focusser=l.find(".select2-focusser"),a.find(".select2-chosen").attr("id","select2-chosen-"+j),this.focusser.attr("aria-labelledby","select2-chosen-"+j),this.results.attr("id","select2-results-"+j),this.search.attr("aria-owns","select2-results-"+j),this.focusser.attr("id","s2id_autogen"+j),i=aE("label[for='"+this.opts.element.attr("id")+"']"),this.opts.element.on("focus.select2",this.bind(function(){this.focus()
})),this.focusser.prev().text(i.text()).attr("for",this.focusser.attr("id"));
var f=this.opts.element.attr("title");
this.opts.element.attr("title",f||i.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(aE("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(b){if(this.isInterfaceEnabled()&&229!=b.keyCode){if(b.which===au.PAGE_UP||b.which===au.PAGE_DOWN){return void ad(b)
}switch(b.which){case au.UP:case au.DOWN:return this.moveHighlight(b.which===au.UP?-1:1),void ad(b);
case au.ENTER:return this.selectHighlighted(),void ad(b);
case au.TAB:return void this.selectHighlighted({noFocus:!0});
case au.ESC:return this.cancel(b),void ad(b)
}}})),this.search.on("blur",this.bind(function(b){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.results&&this.results.length>1&&this.search.focus()
}),0)
})),this.focusser.on("keydown",this.bind(function(b){if(this.isInterfaceEnabled()&&b.which!==au.TAB&&!au.isControl(b)&&!au.isFunctionKey(b)&&b.which!==au.ESC){if(this.opts.openOnEnter===!1&&b.which===au.ENTER){return void ad(b)
}if(b.which==au.DOWN||b.which==au.UP||b.which==au.ENTER&&this.opts.openOnEnter){if(b.altKey||b.ctrlKey||b.shiftKey||b.metaKey){return
}return this.open(),void ad(b)
}return b.which==au.DELETE||b.which==au.BACKSPACE?(this.opts.allowClear&&this.clear(),void ad(b)):void 0
}})),aj(this.focusser),this.focusser.on("keyup-change input",this.bind(function(b){if(this.opts.minimumResultsForSearch>=0){if(b.stopPropagation(),this.opened()){return
}this.open()
}})),a.on("mousedown touchstart","abbr",this.bind(function(b){this.isInterfaceEnabled()&&(this.clear(),ac(b),this.close(),this.selection&&this.selection.focus())
})),a.on("mousedown touchstart",this.bind(function(b){aq(a),this.container.hasClass("select2-container-active")||this.opts.element.trigger(aE.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),ad(b)
})),k.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()
})),a.on("focus",this.bind(function(b){ad(b)
})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(aE.Event("select2-focus")),this.container.addClass("select2-container-active")
})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(aE.Event("select2-blur")))
})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(aE.Event("select2-focus")),this.container.addClass("select2-container-active")
})),this.initContainerWidth(),this.opts.element.hide(),this.setPlaceholder()
},clear:function(a){var h=this.selection.data("select2-data");
if(h){var g=aE.Event("select2-clearing");
if(this.opts.element.trigger(g),g.isDefaultPrevented()){return
}var f=this.getPlaceholderOption();
this.opts.element.val(f?f.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),a!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(h),choice:h}),this.triggerChange({removed:h}))
}},initSelection:function(){if(this.isPlaceholderOptionSelected()){this.updateSelection(null),this.close(),this.setPlaceholder()
}else{var a=this;
this.opts.initSelection.call(null,this.opts.element,function(b){b!==aD&&null!==b&&(a.updateSelection(b),a.close(),a.setPlaceholder(),a.lastSearchTerm=a.search.val())
})
}},isPlaceholderOptionSelected:function(){var b;
return this.getPlaceholder()===aD?!1:(b=this.getPlaceholderOption())!==aD&&b.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===aD||null===this.opts.element.val()
},prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments),d=this;
return"select"===a.element.get(0).tagName.toLowerCase()?a.initSelection=function(e,c){var f=e.find("option").filter(function(){return this.selected&&!this.disabled
});
c(d.optionToData(f))
}:"data" in a&&(a.initSelection=a.initSelection||function(i,h){var g=i.val(),b=null;
a.query({matcher:function(e,k,j){var f=am(g,a.id(j));
return f&&(b=j),f
},callback:aE.isFunction(h)?function(){h(b)
}:aE.noop})
}),a
},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===aD?aD:this.parent.getPlaceholder.apply(this,arguments)
},setPlaceholder:function(){var b=this.getPlaceholder();
if(this.isPlaceholderOptionSelected()&&b!==aD){if(this.select&&this.getPlaceholderOption()===aD){return
}this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(b)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")
}},postprocessResults:function(h,f,l){var k=0,j=this;
if(this.findHighlightableChoices().each2(function(d,c){return am(j.id(c.data("select2-data")),j.opts.element.val())?(k=d,!1):void 0
}),l!==!1&&(f===!0&&k>=0?this.highlight(k):this.highlight(0)),f===!0){var i=this.opts.minimumResultsForSearch;
i>=0&&this.showSearch(S(h.results)>=i)
}},showSearch:function(a){this.showSearchInput!==a&&(this.showSearchInput=a,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!a),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!a),aE(this.dropdown,this.container).toggleClass("select2-with-searchbox",a))
},onSelect:function(f,e){if(this.triggerSelect(f)){var h=this.opts.element.val(),g=this.data();
this.opts.element.val(this.id(f)),this.updateSelection(f),this.opts.element.trigger({type:"select2-selected",val:this.id(f),choice:f}),this.lastSearchTerm=this.search.val(),this.close(),e&&e.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),am(h,this.id(f))||this.triggerChange({added:f,removed:g})
}},updateSelection:function(b){var g,f,h=this.selection.find(".select2-chosen");
this.selection.data("select2-data",b),h.empty(),null!==b&&(g=this.opts.formatSelection(b,h,this.opts.escapeMarkup)),g!==aD&&h.append(g),f=this.opts.formatSelectionCssClass(b,h),f!==aD&&h.addClass(f),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==aD&&this.container.addClass("select2-allowclear")
},val:function(){var b,j=!1,i=null,h=this,g=this.data();
if(0===arguments.length){return this.opts.element.val()
}if(b=arguments[0],arguments.length>1&&(j=arguments[1],this.opts.debug&&console&&console.warn&&console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')),this.select){this.opts.debug&&console&&console.warn&&console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'),this.select.val(b).find("option").filter(function(){return this.selected
}).each2(function(d,c){return i=h.optionToData(c),!1
}),this.updateSelection(i),this.setPlaceholder(),j&&this.triggerChange({added:i,removed:g})
}else{if(!b&&0!==b){return void this.clear(j)
}if(this.opts.initSelection===aD){throw new Error("cannot call val() if initSelection() is not defined")
}this.opts.element.val(b),this.opts.initSelection(this.opts.element,function(c){h.opts.element.val(c?h.id(c):""),h.updateSelection(c),h.setPlaceholder(),j&&h.triggerChange({added:c,removed:g})
})
}},clearSearch:function(){this.search.val(""),this.focusser.val("")
},data:function(b){var f,e=!1;
return 0===arguments.length?(f=this.selection.data("select2-data"),f==aD&&(f=null),f):(this.opts.debug&&console&&console.warn&&console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'),arguments.length>1&&(e=arguments[1]),b?(f=this.data(),this.opts.element.val(b?this.id(b):""),this.updateSelection(b),e&&this.triggerChange({added:b,removed:f})):this.clear(e),void 0)
}}),aA=P(aC,{createContainer:function(){var a=aE(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));
return a
},prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments),d=this;
return"select"===a.element.get(0).tagName.toLowerCase()?a.initSelection=function(e,c){var f=[];
e.find("option").filter(function(){return this.selected&&!this.disabled
}).each2(function(h,g){f.push(d.optionToData(g))
}),c(f)
}:"data" in a&&(a.initSelection=a.initSelection||function(i,h){var g=al(i.val(),a.separator,a.transformVal),b=[];
a.query({matcher:function(k,j,f){var e=aE.grep(g,function(c){return am(c,a.id(f))
}).length;
return e&&b.push(f),e
},callback:aE.isFunction(h)?function(){for(var e=[],l=0;
l<g.length;
l++){for(var k=g[l],j=0;
j<b.length;
j++){var f=b[j];
if(am(k,a.id(f))){e.push(f),b.splice(j,1);
break
}}}h(e)
}:aE.noop})
}),a
},selectChoice:function(d){var c=this.container.find(".select2-search-choice-focus");
c.length&&d&&d[0]==c[0]||(c.length&&this.opts.element.trigger("choice-deselected",c),c.removeClass("select2-search-choice-focus"),d&&d.length&&(this.close(),d.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",d)))
},destroy:function(){aE("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),Q.call(this,"searchContainer","selection")
},initContainer:function(){var f,a=".select2-choices";
this.searchContainer=this.container.find(".select2-search-field"),this.selection=f=this.container.find(a);
var e=this;
this.selection.on("click",".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)",function(c){e.search[0].focus(),e.selectChoice(aE(this))
}),this.search.attr("id","s2id_autogen"+az()),this.search.prev().text(aE("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.opts.element.on("focus.select2",this.bind(function(){this.focus()
})),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())
})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(h){if(this.isInterfaceEnabled()){++this.keydowns;
var c=f.find(".select2-search-choice-focus"),l=c.prev(".select2-search-choice:not(.select2-locked)"),k=c.next(".select2-search-choice:not(.select2-locked)"),j=ae(this.search);
if(c.length&&(h.which==au.LEFT||h.which==au.RIGHT||h.which==au.BACKSPACE||h.which==au.DELETE||h.which==au.ENTER)){var i=c;
return h.which==au.LEFT&&l.length?i=l:h.which==au.RIGHT?i=k.length?k:null:h.which===au.BACKSPACE?this.unselect(c.first())&&(this.search.width(10),i=l.length?l:k):h.which==au.DELETE?this.unselect(c.first())&&(this.search.width(10),i=k.length?k:null):h.which==au.ENTER&&(i=null),this.selectChoice(i),ad(h),void (i&&i.length||this.open())
}if((h.which===au.BACKSPACE&&1==this.keydowns||h.which==au.LEFT)&&0==j.offset&&!j.length){return this.selectChoice(f.find(".select2-search-choice:not(.select2-locked)").last()),void ad(h)
}if(this.selectChoice(null),this.opened()){switch(h.which){case au.UP:case au.DOWN:return this.moveHighlight(h.which===au.UP?-1:1),void ad(h);
case au.ENTER:return this.selectHighlighted(),void ad(h);
case au.TAB:return this.selectHighlighted({noFocus:!0}),void this.close();
case au.ESC:return this.cancel(h),void ad(h)
}}if(h.which!==au.TAB&&!au.isControl(h)&&!au.isFunctionKey(h)&&h.which!==au.BACKSPACE&&h.which!==au.ESC){if(h.which===au.ENTER){if(this.opts.openOnEnter===!1){return
}if(h.altKey||h.ctrlKey||h.shiftKey||h.metaKey){return
}}this.open(),(h.which===au.PAGE_UP||h.which===au.PAGE_DOWN)&&ad(h),h.which===au.ENTER&&ad(h)
}}})),this.search.on("keyup",this.bind(function(b){this.keydowns=0,this.resizeSearch()
})),this.search.on("blur",this.bind(function(c){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),c.stopImmediatePropagation(),this.opts.element.trigger(aE.Event("select2-blur"))
})),this.container.on("click",a,this.bind(function(c){this.isInterfaceEnabled()&&(aE(c.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(aE.Event("select2-focus")),this.open(),this.focusSearch(),c.preventDefault()))
})),this.container.on("focus",a,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(aE.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())
})),this.initContainerWidth(),this.opts.element.hide(),this.clearSearch()
},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())
},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var a=this;
this.opts.initSelection.call(null,this.opts.element,function(b){b!==aD&&null!==b&&(a.updateSelection(b),a.close(),a.clearSearch())
})
}},clearSearch:function(){var b=this.getPlaceholder(),d=this.getMaxSearchWidth();
b!==aD&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(b).addClass("select2-default"),this.search.width(d>0?d:this.container.css("width"))):this.search.val("").width(10)
},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")
},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.prefillNextSearchTerm(),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(aE.Event("select2-open"))
},close:function(){this.opened()&&this.parent.close.apply(this,arguments)
},focus:function(){this.close(),this.search.focus()
},isFocused:function(){return this.search.hasClass("select2-focused")
},updateSelection:function(a){var h={},g=[],f=this;
aE(a).each(function(){f.id(this) in h||(h[f.id(this)]=0,g.push(this))
}),this.selection.find(".select2-search-choice").remove(),this.addSelectedChoice(g),f.postprocessResults()
},tokenize:function(){var b=this.search.val();
b=this.opts.tokenizer.call(this,b,this.data(),this.bind(this.onSelect),this.opts),null!=b&&b!=aD&&(this.search.val(b),b.length>0&&this.open())
},onSelect:function(d,c){this.triggerSelect(d)&&""!==d.text&&(this.addSelectedChoice(d),this.opts.element.trigger({type:"selected",val:this.id(d),choice:d}),this.lastSearchTerm=this.search.val(),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(d,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.prefillNextSearchTerm()&&this.updateResults(),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:d}),c&&c.noFocus||this.focusSearch())
},cancel:function(){this.close(),this.focusSearch()
},addSelectedChoice:function(a){var f=this.getVal(),e=this;
aE(a).each(function(){f.push(e.createChoice(this))
}),this.setVal(f)
},createChoice:function(p){var b,a,o=!p.locked,n=aE("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),m=aE("<li class='select2-search-choice select2-locked'><div></div></li>"),l=o?n:m,k=this.id(p);
return b=this.opts.formatSelection(p,l.find("div"),this.opts.escapeMarkup),b!=aD&&l.find("div").replaceWith(aE("<div></div>").html(b)),a=this.opts.formatSelectionCssClass(p,l.find("div")),a!=aD&&l.addClass(a),o&&l.find(".select2-search-choice-close").on("mousedown",ad).on("click dblclick",this.bind(function(c){this.isInterfaceEnabled()&&(this.unselect(aE(c.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),ad(c),this.close(),this.focusSearch())
})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))
})),l.data("select2-data",p),l.insertBefore(this.searchContainer),k
},unselect:function(a){var i,h,j=this.getVal();
if(a=a.closest(".select2-search-choice"),0===a.length){throw"Invalid argument: "+a+". Must be .select2-search-choice"
}if(i=a.data("select2-data")){var g=aE.Event("select2-removing");
if(g.val=this.id(i),g.choice=i,this.opts.element.trigger(g),g.isDefaultPrevented()){return !1
}for(;
(h=ao(this.id(i),j))>=0;
){j.splice(h,1),this.setVal(j),this.select&&this.postprocessResults()
}return a.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(i),choice:i}),this.triggerChange({removed:i}),!0
}},postprocessResults:function(i,h,n){var m=this.getVal(),l=this.results.find(".select2-result"),k=this.results.find(".select2-result-with-children"),j=this;
l.each2(function(e,d){var f=j.id(d.data("select2-data"));
ao(f,m)>=0&&(d.addClass("select2-selected"),d.find(".select2-result-selectable").addClass("select2-selected"))
}),k.each2(function(d,c){c.is(".select2-result-selectable")||0!==c.find(".select2-result-selectable:not(.select2-selected)").length||c.addClass("select2-selected")
}),-1==this.highlight()&&n!==!1&&this.opts.closeOnSelect===!0&&j.highlight(0),!this.opts.createSearchChoice&&!l.filter(".select2-result:not(.select2-selected)").length>0&&(!i||i&&!i.more&&0===this.results.find(".select2-no-results").length)&&U(j.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+T(j.opts.formatNoMatches,j.opts.element,j.search.val())+"</li>")
},getMaxSearchWidth:function(){return this.selection.width()-ak(this.search)
},resizeSearch:function(){var h,g,l,k,j,i=ak(this.search);
h=ab(this.search)+10,g=this.search.offset().left,l=this.selection.width(),k=this.selection.offset().left,j=l-(g-k)-i,h>j&&(j=l-i),40>j&&(j=l-i),0>=j&&(j=h),this.search.width(Math.floor(j))
},getVal:function(){var b;
return this.select?(b=this.select.val(),null===b?[]:b):(b=this.opts.element.val(),al(b,this.opts.separator,this.opts.transformVal))
},setVal:function(a){if(this.select){this.select.val(a)
}else{var f=[],e={};
aE(a).each(function(){this in e||(f.push(this),e[this]=0)
}),this.opts.element.val(0===f.length?"":f.join(this.opts.separator))
}},buildChangeDetails:function(f,e){for(var e=e.slice(0),f=f.slice(0),h=0;
h<e.length;
h++){for(var g=0;
g<f.length;
g++){if(am(this.opts.id(e[h]),this.opts.id(f[g]))){e.splice(h,1),h--,f.splice(g,1);
break
}}}return{added:e,removed:f}
},val:function(h,g){var b,a=this;
if(0===arguments.length){return this.getVal()
}if(b=this.data(),b.length||(b=[]),!h&&0!==h){return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),void (g&&this.triggerChange({added:this.data(),removed:b}))
}if(this.setVal(h),this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection)),g&&this.triggerChange(this.buildChangeDetails(b,this.data()))
}else{if(this.opts.initSelection===aD){throw new Error("val() cannot be called if initSelection() is not defined")
}this.opts.initSelection(this.opts.element,function(d){var e=aE.map(d,a.id);
a.setVal(e),a.updateSelection(d),a.clearSearch(),g&&a.triggerChange(a.buildChangeDetails(b,a.data()))
})
}this.clearSearch()
},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")
}this.search.width(0),this.searchContainer.hide()
},onSortEnd:function(){var a=[],d=this;
this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){a.push(d.opts.id(aE(this).data("select2-data")))
}),this.setVal(a),this.triggerChange()
},data:function(a,j){var h,g,i=this;
return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return aE(this).data("select2-data")
}).get():(g=this.data(),a||(a=[]),h=aE.map(a,function(b){return i.opts.id(b)
}),this.setVal(h),this.updateSelection(a),this.clearSearch(),j&&this.triggerChange(this.buildChangeDetails(g,this.data())),void 0)
}}),aE.fn.select2=function(){var s,r,q,p,o,t=Array.prototype.slice.call(arguments,0),n=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],m=["opened","isFocused","container","dropdown"],b=["val","data"],a={search:"externalSearch"};
return this.each(function(){if(0===t.length||"object"==typeof t[0]){s=0===t.length?{}:aE.extend({},t[0]),s.element=aE(this),"select"===s.element.get(0).tagName.toLowerCase()?o=s.element.prop("multiple"):(o=s.multiple||!1,"tags" in s&&(s.multiple=o=!0)),r=o?new window.Select2["class"].multi:new window.Select2["class"].single,r.init(s)
}else{if("string"!=typeof t[0]){throw"Invalid arguments to select2 plugin: "+t
}if(ao(t[0],n)<0){throw"Unknown method: "+t[0]
}if(p=aD,r=aE(this).data("select2"),r===aD){return
}if(q=t[0],"container"===q?p=r.container:"dropdown"===q?p=r.dropdown:(a[q]&&(q=a[q]),p=r[q].apply(r,t.slice(1))),ao(t[0],m)>=0||ao(t[0],b)>=0&&1==t.length){return !1
}}}),p===aD?this:p
},aE.fn.select2.defaults={debug:!1,width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(g,f,j,i){var h=[];
return Z(this.text(g),j.term,h,i),h.join("")
},transformVal:function(a){return aE.trim(a)
},formatSelection:function(b,f,e){return b?e(this.text(b)):aD
},sortResults:function(e,d,f){return e
},formatResultCssClass:function(b){return b.css
},formatSelectionCssClass:function(b,d){return aD
},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(b){return b==aD?null:b.id
},text:function(a){return a&&this.data&&this.data.text?aE.isFunction(this.data.text)?this.data.text(a):a[this.data.text]:a.text
},matcher:function(d,c){return ap(""+c).toUpperCase().indexOf(ap(""+d).toUpperCase())>=0
},separator:",",tokenSeparators:[],tokenizer:R,escapeMarkup:Y,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(b){return b
},adaptDropdownCssClass:function(b){return null
},nextSearchTerm:function(b,d){return aD
},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(d){var c="ontouchstart" in window||navigator.msMaxTouchPoints>0;
return c&&d.opts.minimumResultsForSearch<0?!1:!0
}},aE.fn.select2.locales=[],aE.fn.select2.locales.en={formatMatches:function(b){return 1===b?"One result is available, press enter to select it.":b+" results are available, use up and down arrow keys to navigate."
},formatNoMatches:function(){return"No matches found"
},formatAjaxError:function(e,d,f){return"Loading failed"
},formatInputTooShort:function(e,d){var f=d-e.length;
return"Please enter "+f+" or more character"+(1==f?"":"s")
},formatInputTooLong:function(e,d){var f=e.length-d;
return"Please delete "+f+" character"+(1==f?"":"s")
},formatSelectionTooBig:function(b){return"You can only select "+b+" item"+(1==b?"":"s")
},formatLoadMore:function(b){return"Loading more results\u2026"
},formatSearching:function(){return"Searching\u2026"
}},aE.extend(aE.fn.select2.defaults,aE.fn.select2.locales.en),aE.fn.select2.ajaxDefaults={transport:aE.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:X,local:W,tags:V},util:{debounce:ah,markMatch:Z,escapeMarkup:Y,stripDiacritics:ap},"class":{"abstract":aC,single:aB,multi:aA}}
}}(jQuery);
(function(a){a.fn.select2.locales.fr={formatMatches:function(b){return b+" résultats sont disponibles, utilisez les flèches haut et bas pour naviguer."
},formatNoMatches:function(){return"Aucun résultat trouvé"
},formatInputTooShort:function(b,c){var d=c-b.length;
return"Saisissez "+d+" caractère"+(d==1?"":"s")+" supplémentaire"+(d==1?"":"s")
},formatInputTooLong:function(c,b){var d=c.length-b;
return"Supprimez "+d+" caractère"+(d==1?"":"s")
},formatSelectionTooBig:function(b){return"Vous pouvez seulement sélectionner "+b+" élément"+(b==1?"":"s")
},formatLoadMore:function(b){return"Chargement de résultats supplémentaires…"
},formatSearching:function(){return"Recherche en cours…"
}};
a.extend(a.fn.select2.defaults,a.fn.select2.locales.fr)
})(jQuery);
$.fn.dataTable.datagrid={iDisplayLength:10,aLengthMenu:[10,25,50,100,250],oLanguage:{sLengthMenu:"_MENU_ lignes par page",sEmptyTable:"Aucune donnée",sInfo:"De _START_ à _END_ sur _TOTAL_ lignes",sInfoEmpty:"",sInfoFiltered:"(_MAX_ lignes filtrées)",sInfoThousands:" ",sLoadingRecords:"Chargement...",sProcessing:"En cours...",sSearch:"Recherche",sZeroRecords:"Aucun résultat trouvé",oAria:{sSortAscending:" - click/return to sort ascending",sSortDescending:" - click/return to sort descending"},oPaginate:{sPrevious:"&larr;",sNext:"&rarr;"}},fnDrawCallback:function(){$(".mypopover").popover()
}};
var optionsSelect2WithSearch={minimumResultsForSearch:10,dropdownAutoWidth:true,placeholderOption:function(){return undefined
},width:"100%"};
$(document).ready(function(){$(".datagrid").dataTable($.fn.dataTable.datagrid);
$("select").select2(optionsSelect2WithSearch);
$(".mypopover").popover();
window.setTimeout(function(){$(".datepicker").datetimepicker({language:"fr",startView:"month",minView:2,maxView:4,todayHighlight:true})
},10)
});