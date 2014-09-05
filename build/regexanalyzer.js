/**
*
*   RegExAnalyzer
*   @version: 0.3.2
*
*   A simple Regular Expression Analyzer in JavaScript
*   https://github.com/foo123/regex-analyzer
*
**/!function(t,e,r){"use strict";var a,s="object"==typeof module&&module.exports,p="function"==typeof define&&define.amd;s?module.exports=(module.$deps=module.$deps||{})[e]=module.$deps[e]||r.call(t,{NODE:module})||1:p&&"function"==typeof require&&"function"==typeof require.specified&&require.specified(e)?define(e,["require","exports","module"],function(e,a,s){return r.call(t,{AMD:s})}):e in t||(t[e]=a=r.call(t,{})||1)&&p&&define(e,[],function(){return a})}(this,"RegExAnalyzer",function(t){return function(t){var e="\\",r=/^\{\s*(\d+)\s*,?\s*(\d+)?\s*\}/,a=/^u([0-9a-fA-F]{4})/,s=/^x([0-9a-fA-F]{2})/,p={".":"MatchAnyChar","|":"MatchEither","?":"MatchZeroOrOne","*":"MatchZeroOrMore","+":"MatchOneOrMore","^":"MatchStart",$:"MatchEnd","{":"StartRepeats","}":"EndRepeats","(":"StartGroup",")":"EndGroup","[":"StartCharGroup","]":"EndCharGroup"},h={"\\":"EscapeChar","/":"/",0:"NULChar",f:"FormFeed",n:"LineFeed",r:"CarriageReturn",t:"HorizontalTab",v:"VerticalTab",b:"MatchWordBoundary",B:"MatchNonWordBoundary",s:"MatchSpaceChar",S:"MatchNonSpaceChar",w:"MatchWordChar",W:"MatchNonWordChar",d:"MatchDigitChar",D:"MatchNonDigitChar"},i=Object.prototype.toString,n=function(t,e){if(e&&(e instanceof Array||"[object Array]"==i.call(e)))for(var r=0,a=e.length;a>r;r++)t[e[r]]=1;else for(var r in e)t[r]=1;return t},g=function(t,e){t&&(t instanceof Array||"[object Array]"==i.call(t))&&(e=t[1],t=t[0]);var r,a,s=t.charCodeAt(0),p=e.charCodeAt(0);if(p==s)return[String.fromCharCode(s)];for(a=[],r=s;p>=r;++r)a.push(String.fromCharCode(r));return a},l=function(t){var e,r,a,s,p,h,i,o,u={},f={};if(i=t.type,"Alternation"==i)for(a=0,s=t.part.length;s>a;a++)p=l(t.part[a]),u=n(u,p.peek),f=n(f,p.negativepeek);else if("Group"==i)p=l(t.part),u=n(u,p.peek),f=n(f,p.negativepeek);else if("Sequence"==i){for(a=0,s=t.part.length,r=t.part[a],h=a>=s||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;!h;)p=l(r.part),u=n(u,p.peek),f=n(f,p.negativepeek),a++,r=t.part[a],h=a>=s||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;s>a&&(r=t.part[a],"Special"!=r.type||"^"!=r.part&&"$"!=r.part||(r=t.part[a+1]||null),r&&"Quantifier"==r.type&&(r=r.part),r&&(p=l(r),u=n(u,p.peek),f=n(f,p.negativepeek)))}else if("CharGroup"==i)for(e=t.flags.NotMatch?f:u,a=0,s=t.part.length;s>a;a++)r=t.part[a],o=r.type,"Chars"==o?e=n(e,r.part):"CharRange"==o?e=n(e,g(r.part)):"UnicodeChar"==o||"HexChar"==o?e[r.flags.Char]=1:"Special"==o&&("D"==r.part?t.flags.NotMatch?u["\\d"]=1:f["\\d"]=1:"W"==r.part?t.flags.NotMatch?u["\\w"]=1:f["\\W"]=1:"S"==r.part?t.flags.NotMatch?u["\\s"]=1:f["\\s"]=1:e["\\"+r.part]=1);else"String"==i?u[t.part.charAt(0)]=1:"Special"!=i||t.flags.MatchStart||t.flags.MatchEnd?("UnicodeChar"==i||"HexChar"==i)&&(u[t.flags.Char]=1):"D"==t.part?f["\\d"]=1:"W"==t.part?f["\\W"]=1:"S"==t.part?f["\\s"]=1:u["\\"+t.part]=1;return{peek:u,negativepeek:f}},o=function(t,e){t&&this.setRegex(t,e)};o.VERSION="0.3.2",o.getCharRange=g,o.prototype={constructor:o,VERSION:o.VERSION,regex:null,groupIndex:null,pos:null,flags:null,parts:null,getCharRange:o.getCharRange,getPeekChars:function(){var t,e,r,a,s=this.flags&&this.flags.i,h=l(this.parts);for(t in h){a={},r=h[t];for(e in r)"\\d"==e?(delete r[e],a=n(a,g("0","9"))):"\\s"==e?(delete r[e],a=n(a,["\f","\n","\r","	",""," ","\u2028","\u2029"])):"\\w"==e?(delete r[e],a=n(a,["_"].concat(g("0","9")).concat(g("a","z")).concat(g("A","Z")))):"\\."==e?(delete r[e],a[p["."]]=1):"\\"!=e.charAt(0)&&s?(a[e.toLowerCase()]=1,a[e.toUpperCase()]=1):"\\"==e.charAt(0)&&delete r[e];h[t]=n(r,a)}return h},setRegex:function(t,e){if(t){this.flags={},e=e||"/";for(var r=t.toString(),a=r.length,s=r.charAt(a-1);e!=s;)this.flags[s]=1,r=r.substr(0,a-1),a=r.length,s=r.charAt(a-1);e==r.charAt(0)&&e==r.charAt(a-1)&&(r=r.substr(1,a-2)),this.regex=r}return this},analyze:function(){var t,i,n,g="",l=[],o=[],u=!1;for(this.pos=0,this.groupIndex=0;this.pos<this.regex.length;)if(t=this.regex.charAt(this.pos++),u=e==t?!0:!1,u&&(t=this.regex.charAt(this.pos++)),u)"u"==t?(g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),n=a.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,o.push({part:n[0],flags:{Char:String.fromCharCode(parseInt(n[1],16)),Code:n[1]},type:"UnicodeChar"})):"x"==t?(g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),n=s.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,o.push({part:n[0],flags:{Char:String.fromCharCode(parseInt(n[1],16)),Code:n[1]},type:"HexChar"})):h[t]&&"/"!=t?(g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),i={},i[h[t]]=1,o.push({part:t,flags:i,type:"Special"})):g+=t;else if("|"==t)g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),l.push({part:o,flags:{},type:"Sequence"}),o=[];else if("["==t)g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),o.push(this.chargroup());else if("("==t)g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),o.push(this.subgroup());else if("{"==t){g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),n=r.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,i={part:n[0],MatchMinimum:n[1],MatchMaximum:n[2]||"unlimited"},i[p[t]]=1,"?"==this.regex.charAt(this.pos)?(i.isGreedy=0,this.pos++):i.isGreedy=1;var f=o.pop();"String"==f.type&&f.part.length>1&&(o.push({part:f.part.slice(0,-1),flags:{},type:"String"}),f.part=f.part.slice(-1)),o.push({part:f,flags:i,type:"Quantifier"})}else if("*"==t||"+"==t||"?"==t){g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),i={},i[p[t]]=1,"?"==this.regex.charAt(this.pos)?(i.isGreedy=0,this.pos++):i.isGreedy=1;var f=o.pop();"String"==f.type&&f.part.length>1&&(o.push({part:f.part.slice(0,-1),flags:{},type:"String"}),f.part=f.part.slice(-1)),o.push({part:f,flags:i,type:"Quantifier"})}else p[t]?(g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),i={},i[p[t]]=1,o.push({part:t,flags:i,type:"Special"})):g+=t;return g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),l.length?(l.push({part:o,flags:{},type:"Sequence"}),o=[],i={},i[p["|"]]=1,this.parts={part:l,flags:i,type:"Alternation"}):this.parts={part:o,flags:{},type:"Sequence"},this},subgroup:function(){var t,i,n,g="",l=[],o=[],u={},f=!1,c=this.regex.substr(this.pos,2);for("?:"==c?(u.NotCaptured=1,this.pos+=2):"?="==c?(u.LookAhead=1,this.pos+=2):"?!"==c&&(u.NegativeLookAhead=1,this.pos+=2),u.GroupIndex=++this.groupIndex;this.pos<this.regex.length;)if(t=this.regex.charAt(this.pos++),f=e==t?!0:!1,f&&(t=this.regex.charAt(this.pos++)),f)"u"==t?(g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),n=a.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,o.push({part:n[0],flags:{Char:String.fromCharCode(parseInt(n[1],16)),Code:n[1]},type:"UnicodeChar"})):"x"==t?(g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),n=s.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,o.push({part:n[0],flags:{Char:String.fromCharCode(parseInt(n[1],16)),Code:n[1]},type:"HexChar"})):h[t]&&"/"!=t?(g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),i={},i[h[t]]=1,o.push({part:t,flags:i,type:"Special"})):g+=t;else{if(")"==t)return g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),l.length?(l.push({part:o,flags:{},type:"Sequence"}),o=[],i={},i[p["|"]]=1,{part:{part:l,flags:i,type:"Alternation"},flags:u,type:"Group"}):{part:{part:o,flags:{},type:"Sequence"},flags:u,type:"Group"};if("|"==t)g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),l.push({part:o,flags:{},type:"Sequence"}),o=[];else if("["==t)g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),o.push(this.chargroup());else if("("==t)g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),o.push(this.subgroup());else if("{"==t){g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),n=r.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,i={part:n[0],MatchMinimum:n[1],MatchMaximum:n[2]||"unlimited"},i[p[t]]=1,"?"==this.regex.charAt(this.pos)?(i.isGreedy=0,this.pos++):i.isGreedy=1;var y=o.pop();"String"==y.type&&y.part.length>1&&(o.push({part:y.part.slice(0,-1),flags:{},type:"String"}),y.part=y.part.slice(-1)),o.push({part:y,flags:i,type:"Quantifier"})}else if("*"==t||"+"==t||"?"==t){g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),i={},i[p[t]]=1,"?"==this.regex.charAt(this.pos)?(i.isGreedy=0,this.pos++):i.isGreedy=1;var y=o.pop();"String"==y.type&&y.part.length>1&&(o.push({part:y.part.slice(0,-1),flags:{},type:"String"}),y.part=y.part.slice(-1)),o.push({part:y,flags:i,type:"Quantifier"})}else p[t]?(g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),i={},i[p[t]]=1,o.push({part:t,flags:i,type:"Special"})):g+=t}return g.length&&(o.push({part:g,flags:{},type:"String"}),g=""),l.length?(l.push({part:o,flags:{},type:"Sequence"}),o=[],i={},i[p["|"]]=1,{part:{part:l,flags:i,type:"Alternation"},flags:u,type:"Group"}):{part:{part:o,flags:{},type:"Sequence"},flags:u,type:"Group"}},chargroup:function(){var t,r,p,i,n,g,l=[],o=[],u={},f=!1,c=!1;for("^"==this.regex.charAt(this.pos)&&(u.NotMatch=1,this.pos++);this.pos<this.regex.length;)if(g=!1,p=r,r=this.regex.charAt(this.pos++),c=e==r?!0:!1,c&&(r=this.regex.charAt(this.pos++)),c&&("u"==r?(n=a.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,r=String.fromCharCode(parseInt(n[1],16)),g=!0):"x"==r&&(n=s.exec(this.regex.substr(this.pos-1)),this.pos+=n[0].length-1,r=String.fromCharCode(parseInt(n[1],16)),g=!0)),f)o.length&&(l.push({part:o,flags:{},type:"Chars"}),o=[]),i[1]=r,f=!1,l.push({part:i,flags:{},type:"CharRange"});else if(c)!g&&h[r]&&"/"!=r?(o.length&&(l.push({part:o,flags:{},type:"Chars"}),o=[]),t={},t[h[r]]=1,l.push({part:r,flags:t,type:"Special"})):o.push(r);else{if("]"==r)return o.length&&(l.push({part:o,flags:{},type:"Chars"}),o=[]),{part:l,flags:u,type:"CharGroup"};"-"==r?(i=[p,""],o.pop(),f=!0):o.push(r)}return o.length&&(l.push({part:o,flags:{},type:"Chars"}),o=[]),{part:l,flags:u,type:"CharGroup"}}},t.RegExAnalyzer=o}(t),t.RegExAnalyzer});