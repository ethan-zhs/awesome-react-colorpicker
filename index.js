!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("react"));else if("function"==typeof define&&define.amd)define(["react"],n);else{var t="object"==typeof exports?n(require("react")):n(e.React);for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,(function(e){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=7)}([function(n,t){n.exports=e},function(e,n,t){const r=t(3),a=t(5),o={};Object.keys(r).forEach(e=>{o[e]={},Object.defineProperty(o[e],"channels",{value:r[e].channels}),Object.defineProperty(o[e],"labels",{value:r[e].labels});const n=a(e);Object.keys(n).forEach(t=>{const r=n[t];o[e][t]=function(e){const n=function(...n){const t=n[0];if(null==t)return t;t.length>1&&(n=t);const r=e(n);if("object"==typeof r)for(let e=r.length,n=0;n<e;n++)r[n]=Math.round(r[n]);return r};return"conversion"in e&&(n.conversion=e.conversion),n}(r),o[e][t].raw=function(e){const n=function(...n){const t=n[0];return null==t?t:(t.length>1&&(n=t),e(n))};return"conversion"in e&&(n.conversion=e.conversion),n}(r)})}),e.exports=o},function(e,n,t){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===o)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},function(e,n,t){const r=t(4),a={};for(const e of Object.keys(r))a[r[e]]=e;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=o;for(const e of Object.keys(o)){if(!("channels"in o[e]))throw new Error("missing channels property: "+e);if(!("labels"in o[e]))throw new Error("missing channel labels property: "+e);if(o[e].labels.length!==o[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:n,labels:t}=o[e];delete o[e].channels,delete o[e].labels,Object.defineProperty(o[e],"channels",{value:n}),Object.defineProperty(o[e],"labels",{value:t})}o.rgb.hsl=function(e){const n=e[0]/255,t=e[1]/255,r=e[2]/255,a=Math.min(n,t,r),o=Math.max(n,t,r),l=o-a;let c,s;o===a?c=0:n===o?c=(t-r)/l:t===o?c=2+(r-n)/l:r===o&&(c=4+(n-t)/l),c=Math.min(60*c,360),c<0&&(c+=360);const i=(a+o)/2;return s=o===a?0:i<=.5?l/(o+a):l/(2-o-a),[c,100*s,100*i]},o.rgb.hsv=function(e){let n,t,r,a,o;const l=e[0]/255,c=e[1]/255,s=e[2]/255,i=Math.max(l,c,s),u=i-Math.min(l,c,s),h=function(e){return(i-e)/6/u+.5};return 0===u?(a=0,o=0):(o=u/i,n=h(l),t=h(c),r=h(s),l===i?a=r-t:c===i?a=1/3+n-r:s===i&&(a=2/3+t-n),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*i]},o.rgb.hwb=function(e){const n=e[0],t=e[1];let r=e[2];const a=o.rgb.hsl(e)[0],l=1/255*Math.min(n,Math.min(t,r));return r=1-1/255*Math.max(n,Math.max(t,r)),[a,100*l,100*r]},o.rgb.cmyk=function(e){const n=e[0]/255,t=e[1]/255,r=e[2]/255,a=Math.min(1-n,1-t,1-r);return[100*((1-n-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*a]},o.rgb.keyword=function(e){const n=a[e];if(n)return n;let t,o=1/0;for(const n of Object.keys(r)){const a=r[n],s=(c=a,((l=e)[0]-c[0])**2+(l[1]-c[1])**2+(l[2]-c[2])**2);s<o&&(o=s,t=n)}var l,c;return t},o.keyword.rgb=function(e){return r[e]},o.rgb.xyz=function(e){let n=e[0]/255,t=e[1]/255,r=e[2]/255;return n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,[100*(.4124*n+.3576*t+.1805*r),100*(.2126*n+.7152*t+.0722*r),100*(.0193*n+.1192*t+.9505*r)]},o.rgb.lab=function(e){const n=o.rgb.xyz(e);let t=n[0],r=n[1],a=n[2];return t/=95.047,r/=100,a/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,[116*r-16,500*(t-r),200*(r-a)]},o.hsl.rgb=function(e){const n=e[0]/360,t=e[1]/100,r=e[2]/100;let a,o,l;if(0===t)return l=255*r,[l,l,l];a=r<.5?r*(1+t):r+t-r*t;const c=2*r-a,s=[0,0,0];for(let e=0;e<3;e++)o=n+1/3*-(e-1),o<0&&o++,o>1&&o--,l=6*o<1?c+6*(a-c)*o:2*o<1?a:3*o<2?c+(a-c)*(2/3-o)*6:c,s[e]=255*l;return s},o.hsl.hsv=function(e){const n=e[0];let t=e[1]/100,r=e[2]/100,a=t;const o=Math.max(r,.01);return r*=2,t*=r<=1?r:2-r,a*=o<=1?o:2-o,[n,100*(0===r?2*a/(o+a):2*t/(r+t)),100*((r+t)/2)]},o.hsv.rgb=function(e){const n=e[0]/60,t=e[1]/100;let r=e[2]/100;const a=Math.floor(n)%6,o=n-Math.floor(n),l=255*r*(1-t),c=255*r*(1-t*o),s=255*r*(1-t*(1-o));switch(r*=255,a){case 0:return[r,s,l];case 1:return[c,r,l];case 2:return[l,r,s];case 3:return[l,c,r];case 4:return[s,l,r];case 5:return[r,l,c]}},o.hsv.hsl=function(e){const n=e[0],t=e[1]/100,r=e[2]/100,a=Math.max(r,.01);let o,l;l=(2-t)*r;const c=(2-t)*a;return o=t*a,o/=c<=1?c:2-c,o=o||0,l/=2,[n,100*o,100*l]},o.hwb.rgb=function(e){const n=e[0]/360;let t=e[1]/100,r=e[2]/100;const a=t+r;let o;a>1&&(t/=a,r/=a);const l=Math.floor(6*n),c=1-r;o=6*n-l,0!=(1&l)&&(o=1-o);const s=t+o*(c-t);let i,u,h;switch(l){default:case 6:case 0:i=c,u=s,h=t;break;case 1:i=s,u=c,h=t;break;case 2:i=t,u=c,h=s;break;case 3:i=t,u=s,h=c;break;case 4:i=s,u=t,h=c;break;case 5:i=c,u=t,h=s}return[255*i,255*u,255*h]},o.cmyk.rgb=function(e){const n=e[0]/100,t=e[1]/100,r=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a))]},o.xyz.rgb=function(e){const n=e[0]/100,t=e[1]/100,r=e[2]/100;let a,o,l;return a=3.2406*n+-1.5372*t+-.4986*r,o=-.9689*n+1.8758*t+.0415*r,l=.0557*n+-.204*t+1.057*r,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),[255*a,255*o,255*l]},o.xyz.lab=function(e){let n=e[0],t=e[1],r=e[2];return n/=95.047,t/=100,r/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,[116*t-16,500*(n-t),200*(t-r)]},o.lab.xyz=function(e){let n,t,r;t=(e[0]+16)/116,n=e[1]/500+t,r=t-e[2]/200;const a=t**3,o=n**3,l=r**3;return t=a>.008856?a:(t-16/116)/7.787,n=o>.008856?o:(n-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,n*=95.047,t*=100,r*=108.883,[n,t,r]},o.lab.lch=function(e){const n=e[0],t=e[1],r=e[2];let a;return a=360*Math.atan2(r,t)/2/Math.PI,a<0&&(a+=360),[n,Math.sqrt(t*t+r*r),a]},o.lch.lab=function(e){const n=e[0],t=e[1],r=e[2]/360*2*Math.PI;return[n,t*Math.cos(r),t*Math.sin(r)]},o.rgb.ansi16=function(e,n=null){const[t,r,a]=e;let l=null===n?o.rgb.hsv(e)[2]:n;if(l=Math.round(l/50),0===l)return 30;let c=30+(Math.round(a/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===l&&(c+=60),c},o.hsv.ansi16=function(e){return o.rgb.ansi16(o.hsv.rgb(e),e[2])},o.rgb.ansi256=function(e){const n=e[0],t=e[1],r=e[2];return n===t&&t===r?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(t/255*5)+Math.round(r/255*5)},o.ansi16.rgb=function(e){let n=e%10;if(0===n||7===n)return e>50&&(n+=3.5),n=n/10.5*255,[n,n,n];const t=.5*(1+~~(e>50));return[(1&n)*t*255,(n>>1&1)*t*255,(n>>2&1)*t*255]},o.ansi256.rgb=function(e){if(e>=232){const n=10*(e-232)+8;return[n,n,n]}let n;return e-=16,[Math.floor(e/36)/5*255,Math.floor((n=e%36)/6)/5*255,n%6/5*255]},o.rgb.hex=function(e){const n=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},o.hex.rgb=function(e){const n=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];let t=n[0];3===n[0].length&&(t=t.split("").map(e=>e+e).join(""));const r=parseInt(t,16);return[r>>16&255,r>>8&255,255&r]},o.rgb.hcg=function(e){const n=e[0]/255,t=e[1]/255,r=e[2]/255,a=Math.max(Math.max(n,t),r),o=Math.min(Math.min(n,t),r),l=a-o;let c,s;return c=l<1?o/(1-l):0,s=l<=0?0:a===n?(t-r)/l%6:a===t?2+(r-n)/l:4+(n-t)/l,s/=6,s%=1,[360*s,100*l,100*c]},o.hsl.hcg=function(e){const n=e[1]/100,t=e[2]/100,r=t<.5?2*n*t:2*n*(1-t);let a=0;return r<1&&(a=(t-.5*r)/(1-r)),[e[0],100*r,100*a]},o.hsv.hcg=function(e){const n=e[1]/100,t=e[2]/100,r=n*t;let a=0;return r<1&&(a=(t-r)/(1-r)),[e[0],100*r,100*a]},o.hcg.rgb=function(e){const n=e[0]/360,t=e[1]/100,r=e[2]/100;if(0===t)return[255*r,255*r,255*r];const a=[0,0,0],o=n%1*6,l=o%1,c=1-l;let s=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=c,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=c,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=c}return s=(1-t)*r,[255*(t*a[0]+s),255*(t*a[1]+s),255*(t*a[2]+s)]},o.hcg.hsv=function(e){const n=e[1]/100,t=n+e[2]/100*(1-n);let r=0;return t>0&&(r=n/t),[e[0],100*r,100*t]},o.hcg.hsl=function(e){const n=e[1]/100,t=e[2]/100*(1-n)+.5*n;let r=0;return t>0&&t<.5?r=n/(2*t):t>=.5&&t<1&&(r=n/(2*(1-t))),[e[0],100*r,100*t]},o.hcg.hwb=function(e){const n=e[1]/100,t=n+e[2]/100*(1-n);return[e[0],100*(t-n),100*(1-t)]},o.hwb.hcg=function(e){const n=e[1]/100,t=1-e[2]/100,r=t-n;let a=0;return r<1&&(a=(t-r)/(1-r)),[e[0],100*r,100*a]},o.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},o.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},o.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},o.gray.hsl=function(e){return[0,0,e[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(e){return[0,100,e[0]]},o.gray.cmyk=function(e){return[0,0,0,e[0]]},o.gray.lab=function(e){return[e[0],0,0]},o.gray.hex=function(e){const n=255&Math.round(e[0]/100*255),t=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,n,t){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,n,t){const r=t(3);function a(e){const n=function(){const e={},n=Object.keys(r);for(let t=n.length,r=0;r<t;r++)e[n[r]]={distance:-1,parent:null};return e}(),t=[e];for(n[e].distance=0;t.length;){const e=t.pop(),a=Object.keys(r[e]);for(let r=a.length,o=0;o<r;o++){const r=a[o],l=n[r];-1===l.distance&&(l.distance=n[e].distance+1,l.parent=e,t.unshift(r))}}return n}function o(e,n){return function(t){return n(e(t))}}function l(e,n){const t=[n[e].parent,e];let a=r[n[e].parent][e],l=n[e].parent;for(;n[l].parent;)t.unshift(n[l].parent),a=o(r[n[l].parent][l],a),l=n[l].parent;return a.conversion=t,a}e.exports=function(e){const n=a(e),t={},r=Object.keys(n);for(let e=r.length,a=0;a<e;a++){const e=r[a];null!==n[e].parent&&(t[e]=l(e,n))}return t}},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),o=t.n(a),l=t(2),c=t.n(l);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=t(1),u={rgb:/rgb[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,rgba:/rgba[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,hsl:/hsl[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,hsla:/hsla[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,hsv:/hsv[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,hsva:/hsva[\s|\(]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))[,|\s]+((?:[-\+]?\d*\.\d+%?)|(?:[-\+]?\d+%?))\s*\)?/,hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function h(e,n){var t={h:[0,360],s:[0,100],l:[0,100],v:[0,100],r:[0,255],g:[0,255],b:[0,255],a:[0,1]};return(n=n.toString().includes("%")?n.toString().replace("%","")/100*t[e][1]:n)>t[e][1]&&(n=t[e][1]),n<t[e][0]&&(n=t[e][0]),Number(n)}function p(e){var n=u,t=0,r=0,a=0,o=1;if(e=e.trim(),n.hsl.test(e)){var l=n.hsl.exec(e),c=h("h",l[1]),p=h("s",l[2]),b=h("l",l[3]),d=s(i.hsl.rgb([c,p,b]),3);t=d[0],r=d[1],a=d[2]}else if(n.hsla.test(e)){var g=n.hsla.exec(e),f=h("h",g[1]),m=h("s",g[2]),v=h("l",g[3]),y=h("a",g[4]),k=s(i.hsl.rgb([f,m,v]),4);t=k[0],r=k[1],a=k[2];var x=k[3];o=void 0===x?y:x}else if(n.hsv.test(e)){var w=n.hsv.exec(e),E=h("h",w[1]),M=h("s",w[2]),C=h("v",w[3]),S=s(i.hsv.rgb([E,M,C]),3);t=S[0],r=S[1],a=S[2]}else if(n.hsva.test(e)){var O=n.hsva.exec(e),j=h("h",O[1]),N=h("s",O[2]),A=h("v",O[3]),P=h("a",O[4]),R=s(i.hsv.rgb([j,N,A]),4);t=R[0],r=R[1],a=R[2];var I=R[3];o=void 0===I?P:I}else if(n.rgb.test(e)){var F=n.rgb.exec(e);t=h("r",F[1]),r=h("g",F[2]),a=h("b",F[3])}else if(n.rgba.test(e)){var q=n.rgba.exec(e);t=h("r",q[1]),r=h("g",q[2]),a=h("b",q[3]),o=h("a",q[4])}else if(n.hex3.test(e)||n.hex6.test(e)||n.hex4.test(e)||n.hex8.test(e)){var T=s(i.hex.rgb(e),3);t=T[0],r=T[1],a=T[2]}else try{var _=s(i.keyword.rgb(e),3);t=_[0],r=_[1],a=_[2]}catch(e){console.log("convert keyword to hex fail")}var B=i.rgb.hsv([t,r,a]),L=i.rgb.hex([t,r,a]);return{r:t,g:r,b:a,a:o,h:B[0],s:B[1],v:B[2],hex:L}}t(6);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var k=function(e){function n(e){var t,a,l;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,l=f(n).call(this,e),t=!l||"object"!==b(l)&&"function"!=typeof l?m(a):l,y(m(t),"renderBoard",(function(){var e=t.state,n=e.h,a=e.s,l=e.v,c=d(o.a.hsv.rgb([n,100,100]),3),s=c[0],i=c[1],u=c[2];return r.createElement("div",{className:"color-picker-panel-board",style:{backgroundColor:"rgb(".concat(s,", ").concat(i,", ").concat(u,")")},onClick:t.changeColorOnBoard},r.createElement("div",{className:"color-picker-panel-board-hsv"},r.createElement("div",{className:"color-picker-panel-board-value"}),r.createElement("div",{className:"color-picker-panel-board-saturation"})),r.createElement("span",{style:{left:"".concat(a,"%"),top:"".concat(100-l,"%")}}),r.createElement("div",{className:"color-picker-panel-board-handler"}))})),y(m(t),"renderColorPickWrap",(function(){var e=t.state,n=e.h,a=e.s,l=e.v,c=e.a,s=Math.round(n/360*100),i=d(o.a.hsv.rgb([n,a,l]),3),u=i[0],h=i[1],p=i[2];return r.createElement("div",{className:"color-picker-panel-wrap"},r.createElement("div",{className:"color-picker-panel-wrap-ribbon"},r.createElement("div",{className:"color-picker-panel-ribbon"},r.createElement("span",{style:{left:"".concat(s,"%")},onMouseDown:t.changeRibbonStart}),r.createElement("div",{className:"color-picker-panel-ribbon-handler",onClick:function(e){return t.changeRibbon(e.clientX)}}))),r.createElement("div",{className:"color-picker-panel-wrap-alpha"},r.createElement("div",{className:"color-picker-panel-alpha"},r.createElement("div",{className:"color-picker-panel-alpha-bg",style:{background:"linear-gradient(to right, rgba(".concat(u,", ").concat(h,", ").concat(p,", 0),\n                                rgb(").concat(u,", ").concat(h,", ").concat(p,"))")}}),r.createElement("span",{style:{left:"".concat(c,"%")},onMouseDown:t.changeAlphaStart}),r.createElement("div",{className:"color-picker-panel-alpha-handler",onClick:function(e){return t.changeAlpha(e.clientX)}}))),r.createElement("div",{className:"color-picker-panel-wrap-swatch"},r.createElement("span",{className:"color-picker-panel-swatch",draggable:!1},r.createElement("span",{style:{background:"rgb(".concat(u,", ").concat(h,", ").concat(p,")")}})),r.createElement("span",{className:"color-picker-panel-swatch",draggable:!1},r.createElement("span",null))))})),y(m(t),"renderParams",(function(){var e,n=t.state,a=n.hex,o=n.h,l=n.s,s=n.v,i=n.r,u=n.g,h=n.b,p=n.a,b=n.colorType,d={hsb:[{type:"h",value:o,label:"H",max:360},{type:"s",value:l,label:"S",max:100},{type:"v",value:s,label:"B",max:100}],rgb:[{type:"r",value:i,label:"R",max:255},{type:"g",value:u,label:"G",max:255},{type:"b",value:h,label:"B",max:255}]};return r.createElement("div",{className:"color-picker-panel-wrap",style:{height:"45px",marginTop:"6px"}},r.createElement("div",{className:c()((e={},y(e,"color-picker-panel-params",!0),y(e,"color-picker-panel-params-has-alpha",!0),e))},r.createElement("div",{className:"color-picker-panel-params-input"},r.createElement("input",{type:"text",className:"color-picker-panel-params-hex",maxLength:6,value:a,onChange:t.changeHexOnInput,onBlur:t.hexInputBlur}),d[b].map((function(e,n){return r.createElement("input",{key:n,type:"number",value:e.value,onChange:function(n){return t.changeColorOnInput(n,e.type,e.max)}})})),r.createElement("input",{type:"number",value:p,onChange:function(e){return t.changeColorOnInput(e,"a",100)}})),r.createElement("div",{className:"color-picker-panel-params-label"},r.createElement("label",{className:"color-picker-panel-params-label-hex"},"Hex"),d[b].map((function(e,n){return r.createElement("label",{key:n,className:"color-picker-panel-params-label-number",onClick:t.changeColorType},e.label)})),r.createElement("label",{className:"color-picker-panel-params-lable-alpha"},"A"))))})),y(m(t),"renderGlobalColor",(function(){var e,n=t.props.globalColor,a=void 0===n?[]:n;return r.createElement("div",{className:c()((e={},y(e,"collapse-panel",!0),y(e,"color-picker-panel-palette",!0),e))},r.createElement("div",{className:"collapse-panel-header",onClick:t.toggleGlobalColor},r.createElement("span",null,"全局色彩")),r.createElement("div",{className:"collapse-panel-content-wp"},r.createElement("div",{className:"collapse-panel-content"},a.map((function(e,n){return r.createElement("span",{key:n,className:"color-picker-panel-swatch",onClick:function(){return t.clickColorChange(e)}},r.createElement("span",{style:{background:e}}))})),r.createElement("span",{className:"color-picker-panel-palette-add",onClick:t.addGlobalColor},r.createElement("span",null,"+")))))})),y(m(t),"renderRecentColor",(function(){var e,n=localStorage.getItem("recentColor")||"[]",a=JSON.parse(n);return r.createElement("div",{className:c()((e={},y(e,"collapse-panel",!0),y(e,"color-picker-panel-palette",!0),e))},r.createElement("div",{className:"collapse-panel-header",onClick:t.toggleRecentColor},r.createElement("span",null,"最近使用")),r.createElement("div",{className:"collapse-panel-content-wp"},r.createElement("div",{className:"collapse-panel-content"},a.map((function(e,n){return r.createElement("span",{key:n,className:"color-picker-panel-swatch",onClick:function(){return t.clickColorChange(e)}},r.createElement("span",{style:{background:e}}))})))))})),y(m(t),"changeRibbon",(function(e){var n=document.querySelector(".color-picker-panel-ribbon").getBoundingClientRect(),r=n.x,a=n.width,l=e-r,c=Math.round((l>a?a:l<0?0:l)/a*360),s=t.state.s,i=t.state.v,u=d(o.a.hsv.rgb([c,s,i]),3),h=u[0],p=u[1],b=u[2],g=o.a.hsv.hex([c,s,i]);t.setState({hex:g,h:c,r:h,g:p,b:b},(function(){t.changeColor()}))})),y(m(t),"changeAlpha",(function(e){var n=document.querySelector(".color-picker-panel-alpha").getBoundingClientRect(),r=n.x,a=n.width,o=e-r,l=Math.round((o>a?a:o<0?0:o)/a*100);t.setState({a:l},(function(){t.changeColor()}))})),y(m(t),"changeRibbonStart",(function(e){document.addEventListener("mousemove",t.changeRibbonMove),document.addEventListener("mouseup",t.changeRibbonEnd)})),y(m(t),"changeRibbonMove",(function(e){t.changeRibbon(e.clientX)})),y(m(t),"changeRibbonEnd",(function(e){document.removeEventListener("mousemove",t.changeRibbonMove),document.removeEventListener("mouseup",t.changeRibbonEnd)})),y(m(t),"changeAlphaStart",(function(e){document.addEventListener("mousemove",t.changeAlphaMove),document.addEventListener("mouseup",t.changeAlphaEnd)})),y(m(t),"changeAlphaMove",(function(e){t.changeAlpha(e.clientX)})),y(m(t),"changeAlphaEnd",(function(e){document.removeEventListener("mousemove",t.changeAlphaMove),document.removeEventListener("mouseup",t.changeAlphaEnd)})),y(m(t),"changeColorOnBoard",(function(e){var n=e.target.getBoundingClientRect(),r=n.x,a=n.y,l=n.width,c=n.height,s=(e.clientX-r)/l,i=(e.clientY-a)/c,u=t.state.h,h=Math.round(100*(s>1?1:s<0?0:s)),p=100-Math.round(100*(i>1?1:i<0?0:i)),b=d(o.a.hsv.rgb([u,h,p]),3),g=b[0],f=b[1],m=b[2],v=o.a.hsv.hex([u,h,p]);t.setState({hex:v,s:h,v:p,r:g,g:f,b:m},(function(){t.changeColor()}))})),y(m(t),"changeHexOnInput",(function(e){t.setState({hex:e.target.value})})),y(m(t),"hexInputBlur",(function(){var e=t.state.hex,n=o.a.rgb.hex(o.a.hex.rgb(e)),r=d(o.a.hex.hsv(e),3),a=r[0],l=r[1],c=r[2],s=d(o.a.hex.rgb(e),3),i=s[0],u=s[1],h=s[2];t.setState({hex:n,h:a,s:l,v:c,r:i,g:u,b:h},(function(){t.changeColor()}))})),y(m(t),"changeColorOnInput",(function(e,n,r){var a={},l=e.target.value;l=(l=/[0-9]+/.test(l)?l:0)>r?r:l<0?0:l,a[n]=parseInt(l,10),t.setState(a,(function(){var e=t.state,n=e.colorType,r=e.h,a=e.s,l=e.v,c=e.r,s=e.g,i=e.b;if("rgb"===n){var u=d(o.a.hsv.rgb([c,s,i]),3),h=u[0],p=u[1],b=u[2];t.setState({h:h,s:p,v:b},(function(){t.changeColor()}))}else{var g=d(o.a.hsv.rgb([r,a,l]),3),f=g[0],m=g[1],v=g[2];t.setState({r:f,g:m,b:v},(function(){t.changeColor()}))}}))})),y(m(t),"clickColorChange",(function(e){var n=p(e),r=n.r,a=n.g,o=n.b,l=n.a,c=n.h,s=n.s,i=n.v,u=n.hex;t.setState({r:r,g:a,b:o,a:100*l,h:c,s:s,v:i,hex:u},t.changeColor)})),y(m(t),"changeColor",(function(){var e=t.state,n=e.r,r=e.g,a=e.b,o=e.a,l=t.props.onChange,c=100===o?"rgb(".concat(n,", ").concat(r,", ").concat(a,")"):"rgba(".concat(n,", ").concat(r,", ").concat(a,", ").concat(o/100,")");l&&l(c)})),y(m(t),"changeColorType",(function(){t.setState({colorType:"rgb"===t.state.colorType?"hsb":"rgb"})})),y(m(t),"addGlobalColor",(function(){var e=t.state,n=e.r,r=e.g,a=e.b,o=e.a,l=t.props.addGlobalColor;l&&l("rgba(".concat(n,", ").concat(r,", ").concat(a,", ").concat(o/100,")"))})),y(m(t),"toggleGlobalColor",(function(){var e=localStorage.getItem("globalColorVisible")||"0";localStorage.setItem("globalColorVisible","0"===e?"1":"0")})),y(m(t),"toggleRecentColor",(function(){var e=localStorage.getItem("recentColorVisible")||"0";localStorage.setItem("recentColorVisible","0"===e?"1":"0")})),t.state={colorType:"rgb",hex:"000000",h:180,s:0,v:0,r:0,g:0,b:0,a:100},t}var t,a,l;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,e),t=n,(a=[{key:"componentDidMount",value:function(){var e=p(this.props.color||"#000000"),n=e.r,t=e.g,r=e.b,a=e.a,o=e.h,l=e.s,c=e.v,s=e.hex;this.setState({r:n,g:t,b:r,a:100*a,h:o,s:l,v:c,hex:s})}},{key:"componentWillUnmount",value:function(){var e=this.state,n=e.r,t=e.g,r=e.b,a=e.a,o="rgba(".concat(n,", ").concat(t,", ").concat(r,", ").concat((a>100?100:a)/100,")"),l=localStorage.getItem("recentColor")||"[]",c=JSON.parse(l);c.length>=18&&c.pop(),c.unshift(o),localStorage.setItem("recentColor",JSON.stringify(c))}},{key:"componentDidUpdate",value:function(e){if(this.props.color!==e.color){var n=p(this.props.color||"#000000"),t=n.r,r=n.g,a=n.b,o=n.a,l=n.h,c=n.s,s=n.v,i=n.hex;this.setState({r:t,g:r,b:a,a:100*o,h:l,s:c,v:s,hex:i})}}},{key:"render",value:function(){var e=this.props.globalColor;return r.createElement("div",{className:"color-picker-panel"},r.createElement("div",{className:"color-picker-panel-inner"},this.renderBoard(),this.renderColorPickWrap(),this.renderParams(),e&&this.renderGlobalColor(),this.renderRecentColor()))}}])&&g(t.prototype,a),l&&g(t,l),n}(r.Component);y(k,"colorFormat",p);n.default=k}]).default}));