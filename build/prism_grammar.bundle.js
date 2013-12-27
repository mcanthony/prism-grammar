/**
*
*   classy.js
*   Object-Oriented mini-framework for JavaScript
*   @version: 0.4.2
*
*   https://github.com/foo123/classy.js
*
**/!function(e,t,r,n){r=r?[].concat(r):[];var o,l=r.length,a=new Array(l),i=new Array(l),c=new Array(l);for(o=0;l>o;o++)a[o]=r[o][0],i[o]=r[o][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[t]){for(o=0;l>o;o++)c[o]=module.exports[a[o]]||require(i[o])[a[o]];module.exports[t]=n.apply(e,c)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(i),function(r){if("undefined"==typeof r[t]){for(var o=Array.prototype.slice.call(arguments,1),l=0,i=o.length;i>l;l++)c[l]=r[a[l]];r[t]=n.apply(e,c)}});else if("undefined"==typeof e[t]){for(o=0;l>o;o++)c[o]=e[a[o]];e[t]=n.apply(e,c)}}(this,"Classy",null,function(){var e=Array.prototype.slice,t=(Array.prototype.splice,Array.prototype.concat,Object.prototype.toString),r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=Object.keys,l=Object.defineProperty,a=function(e){return"function"==typeof e},i=function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad desc");var n={};if(r.call(e,"enumerable")&&(n.enumerable=!!t.enumerable),r.call(e,"configurable")&&(n.configurable=!!t.configurable),r.call(e,"value")&&(n.value=t.value),r.call(e,"writable")&&(n.writable=!!e.writable),r.call(e,"get")){var o=e.get;if(!a(o)&&"undefined"!==o)throw new TypeError("bad get");n.get=o}if(r.call(e,"set")){var l=e.set;if(!a(l)&&"undefined"!==l)throw new TypeError("bad set");n.set=l}if(("get"in n||"set"in n)&&("value"in n||"writable"in n))throw new TypeError("identity-confused descriptor");return n},c=Object.defineProperties||function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad obj");t=Object(t);for(var r=o(t),n=[],a=0;a<r.length;a++)n.push([r[a],i(t[r[a]],e)]);for(var a=0;a<n.length;a++)l(e,n[a][0],n[a][1]);return e},u=Object.create||function(e,t){var r,n=function(){};return n.prototype=e,r=new n,r.__proto__=e,"object"==typeof t&&c(r,t),r},f=function(t,r){return r=r||0,function(n){if(n){for(var o=t,l=r;l&&o;)o=o.$super,l--;if(l)return;if(o){var a,i=this;if(n="constructor"==n?o:o.prototype[n])return r++,a=n.apply(i,e.call(arguments,1)),r--,a}}}},p=function(){var o,l,a,i,c,u,f,p,s=e.call(arguments);for(l=s.shift()||{},o=s.length,p=0;o>p;p++)if(a=s[p],a&&"object"==typeof a)for(f in a)r.call(a,f)&&n.call(a,f)&&(u=a[f],i=t.call(u),c=typeof u,l[f]="number"==c||u instanceof Number?0+u:u&&("[object Array]"==i||u instanceof Array||"string"==c||u instanceof String)?u.slice(0):u);return l},s=function(e,t){e=e||Object,t=t||{};var r=t.constructor?t.constructor:function(){};return r.prototype=u(e.prototype),r.prototype=p(r.prototype,t),c(r.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0},$class:{value:r,enumerable:!1,writable:!0,configurable:!0},$super:{value:f(e),enumerable:!1,writable:!0,configurable:!0}}),c(r,{$super:{value:e,enumerable:!1,writable:!0,configurable:!0},$static:{value:e.$static&&"object"==typeof e.$static?p(null,e.$static):null,enumerable:!1,writable:!0,configurable:!0}}),r},y=Mixin=p,b=function(){var t=e.call(arguments),r=t.length,n=null;if(r>=2){var o=typeof t[0];o="function"==o?{Extends:t[0]}:"object"==o?t[0]:{Extends:Object};var l,a,i=t[1]||{},c=t[2]||null,u={},f=o.Extends||o.extends||Object,b=o.Implements||o.implements,d=o.Mixin||o.mixin;if(b=b?[].concat(b):null,d=d?[].concat(d):null)for(l=0,a=d.length;a>l;l++)d[l].prototype&&(u=Mixin(u,d[l].prototype));if(b)for(l=0,a=b.length;a>l;l++)b[l].prototype&&(u=y(u,b[l].prototype));n=s(f,p(u,i)),c&&"object"==typeof c&&(n.$static=p(n.$static,c))}else n=s(Object,t[0]);return n};return{VERSION:"0.4.2",Class:b,Extends:s,Implements:y,Mixin:Mixin,Create:u,Merge:p}});
/**
*
*   A simple Regular Expression Analyzer
*   @version 0.2.4
*   https://github.com/foo123/regex-analyzer
*
**/!function(t,e,r,a){r=r?[].concat(r):[];var p,s=r.length,h=new Array(s),n=new Array(s),i=new Array(s);for(p=0;s>p;p++)h[p]=r[p][0],n[p]=r[p][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[e]){for(p=0;s>p;p++)i[p]=module.exports[h[p]]||require(n[p])[h[p]];module.exports[e]=a.apply(t,i)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(n),function(r){if("undefined"==typeof r[e]){for(var p=Array.prototype.slice.call(arguments,1),s=0,n=p.length;n>s;s++)i[s]=r[h[s]];r[e]=a.apply(t,i)}});else if("undefined"==typeof t[e]){for(p=0;s>p;p++)i[p]=t[h[p]];t[e]=a.apply(t,i)}}(this,"RegExAnalyzer",null,function(){var t="\\",e=/^\{\s*(\d+)\s*,?\s*(\d+)?\s*\}/,r=/^u([0-9a-fA-F]{4})/,a=/^x([0-9a-fA-F]{2})/,p={".":"MatchAnyChar","|":"MatchEither","?":"MatchZeroOrOne","*":"MatchZeroOrMore","+":"MatchOneOrMore","^":"MatchStart",$:"MatchEnd","{":"StartRepeats","}":"EndRepeats","(":"StartGroup",")":"EndGroup","[":"StartCharGroup","]":"EndCharGroup"},s={"\\":"EscapeChar","/":"/",0:"NULChar",f:"FormFeed",n:"LineFeed",r:"CarriageReturn",t:"HorizontalTab",v:"VerticalTab",b:"MatchWordBoundary",B:"MatchNonWordBoundary",s:"MatchSpaceChar",S:"MatchNonSpaceChar",w:"MatchWordChar",W:"MatchNonWordChar",d:"MatchDigitChar",D:"MatchNonDigitChar"},h=Object.prototype.toString,n=function(t,e){if(e&&(e instanceof Array||"[object Array]"==h.call(e)))for(var r=0,a=e.length;a>r;r++)t[e[r]]=1;else for(var r in e)t[r]=1;return t},i=function(t,e){t&&(t instanceof Array||"[object Array]"==h.call(t))&&(e=t[1],t=t[0]);var r,a,p=t.charCodeAt(0),s=e.charCodeAt(0);if(s==p)return[String.fromCharCode(p)];for(a=[],r=p;s>=r;++r)a.push(String.fromCharCode(r));return a},g=function(t){var e,r,a,p,s,h,o={},l={};if("Alternation"==t.type)for(a=0,p=t.part.length;p>a;a++)s=g(t.part[a]),o=n(o,s.peek),l=n(l,s.negativepeek);else if("Group"==t.type)s=g(t.part),o=n(o,s.peek),l=n(l,s.negativepeek);else if("Sequence"==t.type){for(a=0,p=t.part.length,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;!h;)s=g(r.part),o=n(o,s.peek),l=n(l,s.negativepeek),a++,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;p>a&&(r=t.part[a],"Special"!=r.type||"^"!=r.part&&"$"!=r.part||(r=t.part[a+1]||null),r&&"Quantifier"==r.type&&(r=r.part),r&&(s=g(r),o=n(o,s.peek),l=n(l,s.negativepeek)))}else if("CharGroup"==t.type)for(e=t.flags.NotMatch?l:o,a=0,p=t.part.length;p>a;a++)r=t.part[a],"Chars"==r.type?e=n(e,r.part):"CharRange"==r.type?e=n(e,i(r.part)):"UnicodeChar"==r.type||"HexChar"==r.type?e[r.flags.Char]=1:"Special"==r.type&&("D"==r.part?t.flags.NotMatch?o["\\d"]=1:l["\\d"]=1:"W"==r.part?t.flags.NotMatch?o["\\w"]=1:l["\\W"]=1:"S"==r.part?t.flags.NotMatch?o["\\s"]=1:l["\\s"]=1:e["\\"+r.part]=1);else"String"==t.type?o[t.part.charAt(0)]=1:"Special"!=t.type||t.flags.MatchStart||t.flags.MatchEnd?("UnicodeChar"==t.type||"HexChar"==t.type)&&(o[t.flags.Char]=1):"D"==t.part?l["\\d"]=1:"W"==t.part?l["\\W"]=1:"S"==t.part?l["\\s"]=1:o["\\"+t.part]=1;return{peek:o,negativepeek:l}},o=function(t,e){t&&this.setRegex(t,e)};return o.VERSION="0.2.4",o.getCharRange=i,o.prototype={constructor:o,VERSION:o.VERSION,regex:null,groupIndex:null,pos:null,flags:null,parts:null,getCharRange:o.getCharRange,getPeekChars:function(){var t,e,r,a,s=this.flags&&this.flags.i,h=g(this.parts);for(t in h){a={},r=h[t];for(e in r)"\\d"==e?(delete r[e],a=n(a,i("0","9"))):"\\s"==e?(delete r[e],a=n(a,["\f","\n","\r","	",""," ","\u2028","\u2029"])):"\\w"==e?(delete r[e],a=n(a,["_"].concat(i("0","9")).concat(i("a","z")).concat(i("A","Z")))):"\\."==e?(delete r[e],a[p["."]]=1):"\\"!=e.charAt(0)&&s?(a[e.toLowerCase()]=1,a[e.toUpperCase()]=1):"\\"==e.charAt(0)&&delete r[e];h[t]=n(r,a)}return h},setRegex:function(t,e){if(t){this.flags={},e=e||"/";for(var r=t.toString(),a=r.length,p=r.charAt(a-1);e!=p;)this.flags[p]=1,r=r.substr(0,a-1),a=r.length,p=r.charAt(a-1);e==r.charAt(0)&&e==r.charAt(a-1)&&(r=r.substr(1,a-2)),this.regex=r}return this},analyze:function(){var h,n,i,g="",o=[],l=[],u=!1;for(this.pos=0,this.groupIndex=0;this.pos<this.regex.length;)h=this.regex.charAt(this.pos++),u=t==h?!0:!1,u&&(h=this.regex.charAt(this.pos++)),u?"u"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):s[h]&&"/"!=h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h:"|"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.push({part:l,flags:{},type:"Sequence"}),l=[]):"["==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.chargroup())):"("==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.subgroup())):"{"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=e.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:l.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==h||"+"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):"?"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):p[h]?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h;return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,this.parts={part:o,flags:n,type:"Alternation"}):this.parts={part:l,flags:{},type:"Sequence"},this},subgroup:function(){var h,n,i,g="",o=[],l=[],u={},f=!1,c=this.regex.substr(this.pos,2);for("?:"==c?(u.NotCaptured=1,this.pos+=2):"?="==c?(u.LookAhead=1,this.pos+=2):"?!"==c&&(u.NegativeLookAhead=1,this.pos+=2),u.GroupIndex=++this.groupIndex;this.pos<this.regex.length;)if(h=this.regex.charAt(this.pos++),f=t==h?!0:!1,f&&(h=this.regex.charAt(this.pos++)),f)"u"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):s[h]&&"/"!=h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h;else{if(")"==h)return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,{part:{part:o,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:l,flags:{},type:"Sequence"},flags:u,type:"Group"};"|"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.push({part:l,flags:{},type:"Sequence"}),l=[]):"["==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.chargroup())):"("==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.subgroup())):"{"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=e.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:l.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==h||"+"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):"?"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):p[h]?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h}return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,{part:{part:o,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:l,flags:{},type:"Sequence"},flags:u,type:"Group"}},chargroup:function(){var e,p,h,n,i,g,o=[],l=[],u={},f=!1,c=!1;for("^"==this.regex.charAt(this.pos)&&(u.NotMatch=1,this.pos++);this.pos<this.regex.length;)if(g=!1,h=p,p=this.regex.charAt(this.pos++),c=t==p?!0:!1,c&&(p=this.regex.charAt(this.pos++)),c&&("u"==p?(i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,p=String.fromCharCode(parseInt(i[1],16)),g=!0):"x"==p&&(i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,p=String.fromCharCode(parseInt(i[1],16)),g=!0)),f)l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),n[1]=p,f=!1,o.push({part:n,flags:{},type:"CharRange"});else if(c)!g&&s[p]&&"/"!=p?(l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),e={},e[s[p]]=1,o.push({part:p,flags:e,type:"Special"})):l.push(p);else{if("]"==p)return l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),{part:o,flags:u,type:"CharGroup"};"-"==p?(n=[h,""],l.pop(),f=!0):l.push(p)}return l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),{part:o,flags:u,type:"CharGroup"}}},o});
/**
*
*   PrismGrammar
*   @version: 0.1
*   Transform a grammar specification in JSON format,
*   into a syntax-highlighter for Prism
*
*   https://github.com/foo123/prism-grammar
*
**/!function(t,n,e,i){e=e?[].concat(e):[];var s,r=e.length,o=new Array(r),l=new Array(r),h=new Array(r);for(s=0;r>s;s++)o[s]=e[s][0],l[s]=e[s][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[n]){for(s=0;r>s;s++)h[s]=module.exports[o[s]]||require(l[s])[o[s]];module.exports[n]=i.apply(t,h)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(l),function(e){if("undefined"==typeof e[n]){for(var s=Array.prototype.slice.call(arguments,1),r=0,l=s.length;l>r;r++)h[r]=e[o[r]];e[n]=i.apply(t,h)}});else if("undefined"==typeof t[n]){for(s=0;r>s;s++)h[s]=t[o[s]];t[n]=i.apply(t,h)}}(this,"PrismGrammar",[["Classy","./classy"],["RegExAnalyzer","./regexanalyzer"]],function(t,n){var e,s,r=t.Class,o=1/0,h=2,u=4,c=8,a=9,f=10,p=16,g=32,k=64,d=128,y=256,R=512,v=2,E=4,b=8,m=4,w=8,x=16,_=32,A=33,O=34,q=64,B=128,C=256,S=257,T=258,j=259,L=512,P=1024,D={ONEOF:q,EITHER:q,ALL:B,ZEROORONE:S,ZEROORMORE:T,ONEORMORE:j,REPEATED:C},M={BLOCK:_,COMMENT:O,ESCAPEDBLOCK:A,SIMPLE:x,GROUP:L,NGRAM:P},I={RegExpID:null,Style:null,Lex:null,Syntax:null,Parser:null},N=Array.prototype.slice,$=(Array.prototype.splice,Array.prototype.concat),z=Object.prototype.hasOwnProperty,F=Object.prototype.toString,K=Object.prototype.propertyIsEnumerable,U=Object.keys,G=function(t){var n=typeof t,e=F.call(t);return"undefined"==n?y:"number"==n||t instanceof Number?h:null===t?d:!0===t||!1===t?u:t&&("string"==n||t instanceof String)?1==t.length?a:c:t&&("[object RegExp]"==e||t instanceof RegExp)?p:t&&("[object Array]"==e||t instanceof Array)?g:t&&"[object Object]"==e?k:R},Z=function(t,n){return n||g!=G(t)?[t]:t},H=function(t,n){return t=Z(t,n),(n||g!=G(t[0]))&&(t=[t]),t},V=function(t){var n,e=G(t);if(!((k|g)&e))return t;var i,s={};for(i in t)z.call(t,i)&&K.call(t,i)&&(n=G(t[i]),s[i]=k&n?V(t[i]):g&n?t[i].slice():t[i]);return s},J=function(){var t=N.call(arguments),n=t.length;if(1>n)return null;if(2>n)return V(t[0]);var e,i,s,r,o=t.shift(),l=V(o);for(n--,i=0;n>i;i++)if(e=t.shift())for(s in e)z.call(e,s)&&K.call(e,s)&&(z.call(o,s)&&K.call(o,s)?(r=G(o[s]),k&~c&r&&(l[s]=J(o[s],e[s]))):l[s]=V(e[s]));return l},Q=function(t){return t.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},W=function(t,n){return n.length-t.length},X=function(t,n){return c&G(n)&&c&G(t)&&n.length&&n.length<=t.length&&n==t.substr(0,n.length)},Y=function(t,e,i){if(!t||h==G(t))return t;var s=e?e.length||0:0;if(s&&e==t.substr(0,s)){var r,o,l,u="^("+t.substr(s)+")";return i[u]||(r=new RegExp(u),l=new n(r).analyze(),o=l.getPeekChars(),U(o.peek).length||(o.peek=null),U(o.negativepeek).length||(o.negativepeek=null),i[u]=[r,o]),i[u]}return t},tn=function(t,n){var e={},i="",s=G(n);(c==s||a==s)&&(i=n);var r=t.sort(W).map(function(t){return e[t.charAt(0)]=1,Q(t)}).join("|");return[new RegExp("^("+r+")"+i),{peek:e,negativepeek:null},1]},nn=r({constructor:function(t){this.string=t?""+t:"",this.start=this.pos=0,this._=null},_:null,string:"",start:0,pos:0,fromStream:function(t){return this._=t,this.string=""+t.string,this.start=t.start,this.pos=t.pos,this},toString:function(){return this.string},sol:function(){return 0==this.pos},eol:function(){return this.pos>=this.string.length},chr:function(t,n){var e=this.string.charAt(this.pos)||null;return e&&t==e?(!1!==n&&(this.pos+=1,this._&&(this._.pos=this.pos)),e):!1},chl:function(t,n){var e=this.string.charAt(this.pos)||null;return e&&-1<t.indexOf(e)?(!1!==n&&(this.pos+=1,this._&&(this._.pos=this.pos)),e):!1},str:function(t,n,e){var i=this.pos,s=this.string,r=s.charAt(i)||null;if(r&&n[r]){var o=t.length,l=s.substr(i,o);if(t==l)return!1!==e&&(this.pos+=o,this._&&(this._.pos=this.pos)),l}return!1},rex:function(t,n,e,i,s){var r=this.pos,o=this.string,l=o.charAt(r)||null;if(l&&n&&n[l]||e&&!e[l]){var h=o.slice(r).match(t);return!h||h.index>0?!1:(!1!==s&&(this.pos+=h[i||0].length,this._&&(this._.pos=this.pos)),h)}return!1},end:function(){return this.pos=this.string.length,this._&&(this._.pos=this.pos),this},nxt:function(){if(this.pos<this.string.length){var t=this.string.charAt(this.pos++)||null;return this._&&(this._.pos=this.pos),t}},bck:function(t){return this.pos-=t,0>this.pos&&(this.pos=0),this._&&(this._.pos=this.pos),this},bck2:function(t){return this.pos=t,0>this.pos&&(this.pos=0),this._&&(this._.pos=this.pos),this},spc:function(){for(var t=this.pos,n=this.pos,e=this.string;/[\s\u00a0]/.test(e.charAt(n));)++n;return this.pos=n,this._&&(this._.pos=this.pos),this.pos>t},cur:function(){return this.string.slice(this.start,this.pos)},sft:function(){return this.start=this.pos,this}}),en=r({constructor:function(t){this.l=t||0,this.stack=[],this.t=w,this.r="0",this.inBlock=null,this.endBlock=null},l:0,stack:null,t:null,r:null,inBlock:null,endBlock:null,clone:function(){var t=new this.$class(this.l);return t.t=0+this.t,t.r=""+this.r,t.stack=this.stack.slice(),t.inBlock=this.inBlock,t.endBlock=this.endBlock,t},toString:function(){return["",this.l,this.t,this.r,this.inBlock||"0"].join("_")}}),sn=r({constructor:function(t,n,e,i){switch(this.type=v,this.tt=t||a,this.tn=n,this.tk=i||0,this.tg=0,this.tp=null,this.p=null,this.np=null,this.tt){case a:case f:this.tp=e;break;case c:this.tp=e,this.p={},this.p[""+e.charAt(0)]=1;break;case p:this.tp=e[0],this.p=e[1].peek||null,this.np=e[1].negativepeek||null,this.tg=e[2]||0;break;case d:this.tp=null}},type:null,tt:null,tn:null,tp:null,tg:0,tk:0,p:null,np:null,get:function(t,n){var e,i=this.tt,s=this.tk,r=this.tp,o=this.tg,l=this.p,h=this.np;switch(i){case a:if(e=t.chr(r,n))return[s,e];break;case f:if(e=t.chl(r,n))return[s,e];break;case c:if(e=t.str(r,l,n))return[s,e];break;case p:if(e=t.rex(r,l,h,o,n))return[s,e];break;case d:return!1!==n&&t.end(),[s,""]}return!1},toString:function(){return["[","Matcher: ",this.tn,", Pattern: ",this.tp?this.tp.toString():null,"]"].join("")}}),rn=r(sn,{constructor:function(t,n,e){this.type=E,this.tn=t,this.ms=n,this.ownKey=!1!==e},ms:null,ownKey:!0,get:function(t,n){var e,i,s=this.ms,r=s.length,o=this.ownKey;for(e=0;r>e;e++)if(i=s[e].get(t,n))return o?[e,i[1]]:i;return!1}}),on=r(sn,{constructor:function(t,n,e){this.type=b,this.tn=t,this.s=new rn(this.tn+"_Start",n,!1),this.e=e},s:null,e:null,get:function(t,n){var e,i=this.s,s=this.e;if(e=i.get(t,n)){var r=s[e[0]];return h==G(r)&&(r=new sn(c,this.tn+"_End",e[1][r+1])),r}return!1}}),ln=function(t,n,e,i){var s=G(n);if(h==s)return n;if(!i[t]){e=e||0;var r,o=0;n&&n.isCharList&&(o=1,delete n.isCharList),r=d&s?new sn(d,t,n,e):a==s?new sn(a,t,n,e):c&s?o?new sn(f,t,n,e):new sn(c,t,n,e):g&s?new sn(p,t,n,e):n,i[t]=r}return i[t]},hn=function(t,n,e,i,s,r){if(!r[t]){var o,l,h,u,f,p,k,d=0,y=0,R=1;if(o=Z(n),h=o.length,1==h)k=ln(t,Y(o[0],e,s),0,r);else if(h>1){for(u=(h>>1)+1,l=0;u>=l;l++)f=G(o[l]),p=G(o[h-1-l]),(a!=f||a!=p)&&(R=0),g&f||g&p?d=1:(X(o[l],e)||X(o[h-1-l],e))&&(y=1);if(!R||i&&c&G(i))if(!i||d||y){for(l=0;h>l;l++)o[l]=g&G(o[l])?hn(t+"_"+l,o[l],e,i,s,r):ln(t+"_"+l,Y(o[l],e,s),l,r);k=h>1?new rn(t,o):o[0]}else k=ln(t,tn(o,i),0,r);else o=o.slice().join(""),o.isCharList=1,k=ln(t,o,0,r)}r[t]=k}return r[t]},un=function(t,n,e,i,s){if(!s[t]){var r,o,l,h,u,c,a;for(h=[],u=[],r=H(n),o=0,l=r.length;l>o;o++)c=ln(t+"_0_"+o,Y(r[o][0],e,i),o,s),a=r[o].length>1?ln(t+"_1_"+o,Y(r[o][1],e,i),o,s):c,h.push(c),u.push(a);s[t]=new on(t,h,u)}return s[t]},cn=r({constructor:function(t,n,e){this.tt=x,this.tn=t,this.t=n,this.r=e,this.required=0,this.ERR=0,this.toClone=["t","r"]},tn:null,tt:null,t:null,r:null,required:0,ERR:0,toClone:null,actionBefore:null,actionAfter:null,get:function(t,n){return this.t.get(t)?(n.t=this.tt,this.r):!1},require:function(t){return this.required=t?1:0,this},push:function(t,n,e){return n?t.splice(n,0,e):t.push(e),this},clone:function(){var t,n,e=this.toClone;if(t=new this.$class,t.tt=this.tt,t.tn=this.tn,t.actionBefore=this.actionBefore,t.actionAfter=this.actionAfter,e&&e.length){n=e.length;for(var i=0;n>i;i++)t[e[i]]=this[e[i]]}return t},toString:function(){return["[","Tokenizer: ",this.tn,", Matcher: ",this.t?this.t.toString():null,"]"].join("")}}),an=r(cn,{constructor:function(t,n,e,i,s,r){this.$super("constructor",n,e,i),this.tt=t,this.mline="undefined"==typeof s?1:s,this.esc=r||"\\",this.toClone=["t","r","mline","esc"]},mline:0,esc:null,get:function(t,n){var e,i,s,r=0,o=0,l="",h=this.mline,u=this.t,c=this.tn,a=0,f=A==this.tt,p=this.esc;if(O==this.tt&&(this.required=0),n.inBlock==c?(o=1,e=n.endBlock):!n.inBlock&&(e=u.get(t))&&(o=1,n.inBlock=c,n.endBlock=e),o){if(s=n.stack.length,r=e.get(t),i=h,!r)for(;!t.eol();){if(!(f&&a||!e.get(t))){r=1;break}l=t.nxt(),a=!a&&l==p}return i=h&&(!f||a),r||!i?(n.inBlock=null,n.endBlock=null):this.push(n.stack,s,this),n.t=this.tt,this.r}return!1}}),fn=r(cn,{constructor:function(t,n,e,i){this.tt=C,this.tn=t||null,this.t=null,this.ts=null,this.min=e||0,this.max=i||o,this.found=0,this.toClone=["ts","min","max","found"],n&&this.set(n)},ts:null,min:0,max:1,found:0,set:function(t){return t&&(this.ts=Z(t)),this},get:function(t,n){var e,i,s,r,o,l=this.ts,h=l.length,u=this.found,c=this.min,a=this.max,f=0;for(this.ERR=0,this.required=0,r=t.pos,o=n.stack.length,e=0;h>e;e++){if(i=l[e].clone().require(1),s=i.get(t,n),!1!==s){if(++u,a>=u)return this.found=u,this.push(n.stack,o,this.clone()),this.found=0,s;break}i.required&&f++,i.ERR&&t.bck2(r)}return this.required=c>u,this.ERR=u>a||c>u&&f>0,!1}}),pn=r(fn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=q},get:function(t,n){var e,i,s,r,o=this.ts,l=o.length,h=0,u=0;for(this.required=1,this.ERR=0,r=t.pos,s=0;l>s;s++){if(i=o[s].clone(),e=i.get(t,n),h+=i.required?1:0,!1!==e)return e;i.ERR&&(u++,t.bck2(r))}return this.required=h>0,this.ERR=l==u&&h>0,!1}}),gn=r(fn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=B},get:function(t,n){var e,i,s,r,o=this.ts,l=o.length;if(this.required=1,this.ERR=0,s=t.pos,e=o[0].clone().require(1),i=e.get(t,n),!1!==i){r=n.stack.length;for(var h=l-1;h>0;h--)this.push(n.stack,r+l-h,o[h].clone().require(1));return i}return e.ERR?(this.ERR=1,t.bck2(s)):e.required&&(this.ERR=1),!1}}),kn=r(fn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=P},get:function(t,n){var e,i,s,r,o=this.ts,l=o.length;if(this.required=0,this.ERR=0,s=t.pos,e=o[0].clone().require(0),i=e.get(t,n),!1!==i){r=n.stack.length;for(var h=l-1;h>0;h--)this.push(n.stack,r+l-h,o[h].clone().require(1));return i}return e.ERR&&t.bck2(s),!1}}),dn=function(t,n,i,s,r,l,h,u,a,f,p){if(t=""+t,!u[t]){var k,d,y,R,v,E,b=null;if(k=i[t]||s[t]||{type:"simple",tokens:t})if((c|g)&G(k)&&(k={type:"simple",tokens:k}),d=k.type?M[k.type.toUpperCase().replace("-","").replace("_","")]:x,k.tokens=Z(k.tokens),R=k.action||null,x&d)k.autocomplete&&Rn(k,t,p),y="undefined"==typeof k.combine?"\\b":k.combine,b=new cn(t,hn(t,k.tokens.slice(),n,y,l,h),r[t]||e),u[t]=b;else if(_&d)O&d&&yn(k,f),b=new an(d,t,un(t,k.tokens.slice(),n,l,h),r[t]||e,k.multiline,k.escape),u[t]=b,k.interleave&&a.push(b.clone());else if(L&d){E=k.tokens.slice(),g&G(k.match)?b=new fn(t,null,k.match[0],k.match[1]):(v=D[k.match.toUpperCase()],b=S==v?new fn(t,null,0,1):T==v?new fn(t,null,0,o):j==v?new fn(t,null,1,o):q&v?new pn(t,null):new gn(t,null)),u[t]=b;for(var m=0,w=E.length;w>m;m++)E[m]=dn(E[m],n,i,s,r,l,h,u,a,f,p);b.set(E)}else if(P&d){b=H(k.tokens.slice()).slice();for(var A,B=[],m=0,w=b.length;w>m;m++)B[m]=b[m].slice(),b[m]=new kn(t+"_NGRAM_"+m,null);u[t]=b;for(var m=0,w=b.length;w>m;m++){A=B[m];for(var C=0,I=A.length;I>C;C++)A[C]=dn(A[C],n,i,s,r,l,h,u,a,f,p);b[m].set(A)}}}return u[t]},yn=function(t,n){var e,s,r,o=H(t.tokens.slice());for(i=0,l=o.length;l>i;i++)e=o[i][0],s=o[i].length>1?o[i][1]:o[i][0],r=o[i].length>2?o[i][2]:"",null===s?(n.line=n.line||[],n.line.push(e)):(n.block=n.block||[],n.block.push([e,s,r]))},Rn=function(t,n,e){var i=[].concat(Z(t.tokens)).map(function(t){return{word:t,meta:n}});e.autocomplete=$.apply(e.autocomplete||[],i)},vn=function(t){var n,e,i,s,r,o,l,h,u,c,a,f,p,k,d,y;if(t.__parsed)return t;for(a={},f={},p={},d={},y={},k=[],t=J(t,I),n=t.RegExpID||null,t.RegExpID=null,delete t.RegExpID,o=t.Lex||{},t.Lex=null,delete t.Lex,l=t.Syntax||{},t.Syntax=null,delete t.Syntax,r=t.Style||{},s=t.Parser||[],i=s.length,e=[],h=0;i>h;h++)u=s[h],c=dn(u,n,o,l,r,a,f,p,k,d,y)||null,c&&(g&G(c)?e=e.concat(c):e.push(c));return t.Parser=e,t.cTokens=k,t.Style=r,t.Comments=d,t.Keywords=y,t.__parsed=1,t},En=r({constructor:function(t,n){this.DEF=n.DEFAULT,this.ERR=t.Style.error||n.ERROR,this.Tokens=t.Parser||[],this.cTokens=t.cTokens.length?t.cTokens:null},ERR:null,DEF:null,cTokens:null,Tokens:null,tokenize:function(t,n){t=t||"",n=n||"span";var e,i=t.split(/\r\n|\r|\n/g),s=i.length+1,r=[],o=new Array(s);for(o[0]=null,e=1;s>e;e++){var l=this.getLineTokens(i[e-1],o[e-1],e-1);o[e]=l.state,r=r.concat(l.tokens),r.push("\n")}return r=r.map(function(t){if(t.type&&t.content){var e=["token",t.type];return"<"+n+' class="'+e.join(" ")+'" '+">"+t.content+"</"+n+">"}return t.content?t.content:""+t}).join("")},getLineTokens:function(t,n,e){var i,s,r,o,l,h,u,c,a,f,p=this.cTokens,g=this.Tokens,k=g.length,d=this.DEF,y=this.ERR;for(h=[],a=new nn(t),n=n?n.clone():new en,n.l=1+e,f=n.stack,u={type:null,content:""},c=null;!a.eol();)if(s=0,c&&c!==u.type?(u.type&&h.push(u),u={type:c,content:a.cur()},a.sft()):u.type&&(u.content+=a.cur(),a.sft()),a.spc())n.t=w,n.r=c=d;else{for(;f.length&&!a.eol();){if(p){for(o=0,r=0;o<p.length;)if(l=p[o++],n.r=c=l.get(a,n),!1!==c){r=1;break}if(r){s=1;break}}if(l=f.pop(),n.r=c=l.get(a,n),!1!==c){s=1;break}if(l.ERR||l.required){f.length=0,a.nxt(),n.t=m,n.r=c=y,s=1;break}}if(!s){if(a.eol())break;for(i=0;k>i;i++){if(l=g[i],n.r=c=l.get(a,n),!1!==c){s=1;break}if(l.ERR||l.required){f.length=0,a.nxt(),n.t=m,n.r=c=y,s=1;break}}if(!s){if(a.eol())break;a.nxt(),n.t=w,n.r=c=d}}}return c&&c!==u.type?(u.type&&h.push(u),h.push({type:c,content:a.cur()})):u.type&&(u.content+=a.cur(),h.push(u)),u=null,{state:n,tokens:h}}}),bn=function(t,n){return new En(t,n)},mn=function(t,n){var i={DEFAULT:n||e,ERROR:s};t=vn(t);var r,o,l=bn(t,i),h=0,u={};return u["before-highlight"]=function(t){r==t.language&&(t.parser=l)},u["before-insert"]=function(t){if(r==t.language){t._highlightedCode=t.highlightedCode;var n=t.parser.tokenize(t.code,"span");t.highlightedCode=n}},{hook:function(t,n){h||(o=t,r=n,o.hooks.add("before-highlight",u["before-highlight"]),o.hooks.add("before-insert",u["before-insert"]),h=1)},unhook:function(){if(h){var t=o.hooks.all;for(var n in u)if(t[n]){var e=t[n].indexOf(u[n]);e>-1&&t[n].splice(e,1)}h=0}}}};e=null,s=null;var wn={VERSION:"0.1",extend:J,parse:vn,getMode:mn};return wn});