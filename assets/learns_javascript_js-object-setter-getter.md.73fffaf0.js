import{_ as o,r as c,c as p,a,w as e,f as l,e as n,b as s,o as u}from"./app.0419d259.js";const z='{"title":"\u5173\u4E8EObject\u7684getter\u548Csetter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Object\u7684getter\uFF0Csetter","slug":"object\u7684getter\uFF0Csetter"},{"level":2,"title":"Object.prototype._defineGetter\u548CObject.prototype.defineSetter_","slug":"object-prototype-definegetter-\u548Cobject-prototype-definesetter"},{"level":2,"title":"Object.defineProperty","slug":"object-defineproperty"},{"level":2,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":2,"title":"\u4FEE\u6B63","slug":"\u4FEE\u6B63"}],"relativePath":"learns/javascript/js-object-setter-getter.md","lastUpdated":1639485634648}',i={},r=l('<p><div class="table-of-contents"><ul><li><a href="#object\u7684getter\uFF0Csetter">Object\u7684getter\uFF0Csetter</a></li><li><a href="#object-prototype-definegetter-\u548Cobject-prototype-definesetter">Object.prototype._defineGetter_\u548CObject.prototype.defineSetter</a></li><li><a href="#object-defineproperty">Object.defineProperty</a></li><li><a href="#\u5206\u6790">\u5206\u6790</a></li><li><a href="#\u4FEE\u6B63">\u4FEE\u6B63</a></li></ul></div></p><h1 id="\u5173\u4E8Eobject\u7684getter\u548Csetter" tabindex="-1">\u5173\u4E8EObject\u7684getter\u548Csetter <a class="header-anchor" href="#\u5173\u4E8Eobject\u7684getter\u548Csetter" aria-hidden="true">#</a></h1><p>\u5BF9\u4E8E\u5BF9\u8C61o\u6709N\u4E2A\u5C5E\u6027\uFF0C\u4E0D\u4FEE\u6539\u4E0B\u9762\u4EE3\u7801\uFF0C\u7F16\u5199\u4E00\u6BB5\u7A0B\u5E8F\u83B7\u53D6\u5230\u5BF9\u8C61o\u7684\u6240\u6709\u5C5E\u6027</p>',3),k=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    a`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    b`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"/**\u66F4\u591A\u5C5E\u6027**/"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" o"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br")])],-1),b=n("p",null,"\u5BF9\u8C61o\u53EA\u662F\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u800C\u5BF9\u5916\u63D0\u4F9B\u7684\u552F\u4E00\u63A5\u53E3foo(key)\u53EF\u4EE5\u83B7\u53D6\u5230\u5BF9\u8C61o\u5355\u72EC\u7684\u67D0\u4E2Akey\u5BF9\u5E94\u7684value\uFF0C\u5982\uFF1Afoo('a')\u8FD4\u56DE1\u3002\u4F46\u662F\u8FD9\u91CC\u8981\u6C42\u83B7\u53D6\u4E00\u4E2A\u672A\u77E5\u5C5E\u6027\u4E2A\u6570\u5BF9\u8C61o\u7684\u6240\u6709\u5C5E\u6027\u3002",-1),d=n("p",null,"\u5728\u89E3\u9898\u4E4B\u524D\u5148\u6765\u4E86\u89E3\u4E00\u4E0B\u89E3\u6790\u9700\u8981\u7528\u5230\u7684\u6280\u672F\u3002",-1),m=n("h2",{id:"object\u7684getter\uFF0Csetter",tabindex:"-1"},[s("Object\u7684getter\uFF0Csetter "),n("a",{class:"header-anchor",href:"#object\u7684getter\uFF0Csetter","aria-hidden":"true"},"#")],-1),f=n("p",null,"\u5728javascript\u4E2D\uFF0C\u5BF9\u8C61\u6709\u4E24\u4E2A\u7279\u6B8A\u7684\u201C\u5C5E\u6027\u201D\u3002\u8FD9\u4E24\u4E2A\u4E1C\u897F\u53EF\u4EE5\u5206\u522B\u7ED9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u8FDB\u884C\u76D1\u542C\uFF0C\u5728\u83B7\u53D6/\u8BBE\u7F6E\u8BE5\u5BF9\u8C61\u7684\u8BE5\u5C5E\u6027\u7684\u65F6\u5019\u6267\u884C\u67D0\u4E9B\u4E8B\u4EF6\uFF0C\u5C31\u50CFDOM\u4E2D\u7684\u4E8B\u4EF6\u76D1\u542C\u4E00\u6837\uFF0C\u80FD\u591F\u5728\u4F60\u5355\u51FB/\u53CC\u51FB/...\u5404\u79CD\u64CD\u4F5C\u7684\u65F6\u5019\u6267\u884C\u8BE5\u65B9\u6CD5\uFF0C\u5E76\u4E14\u5728\u8FD9\u4E2A\u51FD\u6570\u4E2D\u7684this\u6307\u5411\u8BE5\u5BF9\u8C61\u3002\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u76F4\u63A5\u4E0A\u4EE3\u7801\uFF1A",-1),_=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" test "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"o"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u76D1\u542C\u5230\u6B63\u5728\u83B7\u53D6\u5C5E\u6027o\u7684\u503C'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token function"},"o"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u76D1\u542C\u5230\u6B63\u5728\u8BBE\u7F6E\u5C5E\u6027o\u7684\u503C\u4E3A\uFF1A'"),s(),n("span",{class:"token operator"},"+"),s(" v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o "),n("span",{class:"token operator"},"="),s(" v"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

test`),n("span",{class:"token punctuation"},"."),s("o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u76D1\u542C\u5230\u6B63\u5728\u8BBE\u7F6E\u5C5E\u6027o\u7684\u503C\u4E3A\uFF1A14"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("test"),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u76D1\u542C\u5230\u6B63\u5728\u83B7\u53D6\u5C5E\u6027o\u7684\u503C"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),h=n("p",null,"\u53EF\u4EE5\u770B\u5230\uFF0C\u7ED3\u679C\u5B8C\u5168\u5982\u9884\u671F\u6240\u6599\u3002\u8FD9\u91CC\u7528_o\u4E3A\u4E86\u907F\u514D\u5728set\u7684\u65F6\u5019\u4F1A\u8BBE\u7F6E\u5C5E\u6027o\u7136\u540Eset\u65B9\u6CD5\u5C31\u4F1A\u65E0\u9650\u5FAA\u73AF\u7684\u6267\u884C\u5BFC\u81F4\u5D29\u6E83\u62A5\u9519\u3002\u770B\u5230\u8FD9\u91CC\u6216\u8005\u4F1A\u8BF4\uFF0C\u8FD9\u4E2A\u548C\u9898\u76EE\u6709\u51E0\u6BDB\u94B1\u7684\u5173\u7CFB\uFF0C\u522B\u6025\uFF0C\u63A5\u7740\u770Bgetter\u548Csetter\u7684\u53E6\u5916\u4E24\u79CD\u58F0\u660E\u65B9\u5F0F\u3002",-1),g=n("h2",{id:"object-prototype-definegetter-\u548Cobject-prototype-definesetter",tabindex:"-1"},[s("Object.prototype.__defineGetter__\u548CObject.prototype."),n("strong",null,"defineSetter"),s(),n("a",{class:"header-anchor",href:"#object-prototype-definegetter-\u548Cobject-prototype-definesetter","aria-hidden":"true"},"#")],-1),y=n("p",null,"\u4E0A\u9762\u7684\u58F0\u660E\u65B9\u5F0F\u65E0\u6CD5\u5BF9\u5DF2\u7ECF\u5B58\u5728\u7684\u5BF9\u8C61\u8FDB\u884Cgetter\u548Csetter\u201C\u5C5E\u6027\u201D\u7684\u6DFB\u52A0\uFF0C\u53EA\u80FD\u5728\u5BF9\u8C61\u58F0\u660E\u7684\u65F6\u5019\u8BBE\u7F6E\u3002",-1),j=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" test "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

test`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"__defineGetter__"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'o'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u76D1\u542C\u5230\u6B63\u5728\u83B7\u53D6\u5C5E\u6027o\u7684\u503C'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

test`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"__defineSetter__"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'o'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u76D1\u542C\u5230\u6B63\u5728\u8BBE\u7F6E\u5C5E\u6027o\u7684\u503C\u4E3A\uFF1A'"),s(),n("span",{class:"token operator"},"+"),s(" v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o "),n("span",{class:"token operator"},"="),s(" v"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

test`),n("span",{class:"token punctuation"},"."),s("o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u76D1\u542C\u5230\u6B63\u5728\u8BBE\u7F6E\u5C5E\u6027o\u7684\u503C\u4E3A\uFF1A14"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("test"),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u76D1\u542C\u5230\u6B63\u5728\u83B7\u53D6\u5C5E\u6027o\u7684\u503C"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br")])],-1),w=n("div",{class:"warning custom-block"},[n("p",{class:"custom-block-title"},"WARNING"),n("p",null,"\u4F46\u662F\uFF0C\u8FD9\u4E24\u79CD\u65B9\u6CD5\u5DF2\u7ECF\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u800C\u4E14\u968F\u7740\u6D4F\u89C8\u5668\u66F4\u65B0\u4F1A\u6162\u6162\u629B\u5F03\u4E0D\u518D\u652F\u6301\u8FD9\u4E24\u79CD\u5199\u6CD5\u3002\u8FD9\u91CC\u63D0\u51FA\u6765\u53EA\u662F\u9614\u5C55\u4E00\u4E0B\u89C6\u91CE\u7684\u3002")],-1),v=n("h2",{id:"object-defineproperty",tabindex:"-1"},[s("Object.defineProperty "),n("a",{class:"header-anchor",href:"#object-defineproperty","aria-hidden":"true"},"#")],-1),O=n("p",null,"\u7ED9\u5BF9\u8C61\u6DFB\u52A0\u5BF9\u8C61\u5C5E\u6027\u7279\u6027\u63CF\u8FF0\uFF0C\u4E3B\u8981\u5C31\u662F\u662F\u5426\u53EF\u679A\u4E3E\u4FEE\u6539\u5220\u9664\u8BBE\u7F6E\u7B49\u4EE5\u53CAvalue/getter/setter\u7B49\u8BBE\u7F6E\uFF0C\u5176\u4ED6\u5C31\u4E0D\u591A\u8BF4\uFF0C\u518D\u8BF4\u5C31\u8D70\u8FDC\u4E86\uFF0C\u6765\u770B\u770Bgetter/setter\u7684\u4F7F\u7528\uFF1A",-1),S=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" test "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"defineProperty"),n("span",{class:"token punctuation"},"("),s("test"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'o'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u76D1\u542C\u5230\u6B63\u5728\u83B7\u53D6\u5C5E\u6027o\u7684\u503C'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u76D1\u542C\u5230\u6B63\u5728\u8BBE\u7F6E\u5C5E\u6027o\u7684\u503C\u4E3A\uFF1A'"),s(),n("span",{class:"token operator"},"+"),s(" v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o "),n("span",{class:"token operator"},"="),s(" v"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_o"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

test`),n("span",{class:"token punctuation"},"."),s("o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u76D1\u542C\u5230\u6B63\u5728\u8BBE\u7F6E\u5C5E\u6027o\u7684\u503C\u4E3A\uFF1A14"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("test"),n("span",{class:"token punctuation"},"."),s("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u76D1\u542C\u5230\u6B63\u5728\u83B7\u53D6\u5C5E\u6027o\u7684\u503C"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br")])],-1),x=n("p",null,"\u8FD9\u4E2A\u624D\u662FJS\u6807\u51C6\u652F\u6301\u7684\u65B9\u5F0F\u3002\u53E6\u5916\u5728\u6269\u5C55\u4E00\u4E0BObject.defineProperties\uFF0C\u590D\u6570\u5F62\u5F0F\uFF0C\u4E5F\u5C31\u662F\u53EF\u4EE5\u4E00\u6B21\u6027\u8BBE\u7F6E\u591A\u4E2A\u3002",-1),A=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" test "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"defineProperties"),n("span",{class:"token punctuation"},"("),s("test"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  o`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  p`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),P=n("h2",{id:"\u5206\u6790",tabindex:"-1"},[s("\u5206\u6790 "),n("a",{class:"header-anchor",href:"#\u5206\u6790","aria-hidden":"true"},"#")],-1),N=n("p",null,[s("\u6839\u636E\u9898\u76EE\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\u5728\u8C03\u7528foo(key)\u7684\u65F6\u5019\uFF0C\u51FD\u6570foo\u4F1A\u8C03\u7528\u5BF9\u8C61o\u5E76\u4E14\u8FD4\u56DEo[key]\u7684\u503C\u3002\u8FD9\u91CC\u4F1A\u5BF9\u5BF9\u8C61\u8FDB\u884C\u4E00\u4E2A\u53D6\u503C\u64CD\u4F5C\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7ED9\u5BF9\u8C61o\u6DFB\u52A0\u4E00\u4E2Aself\u5C5E\u6027\u7684getter\u76D1\u542C\uFF0C\u5728foo('self')\u7684\u65F6\u5019\u6267\u884C\u5E76\u4E14\u8FD4\u56DEthis\uFF0C\u4E0A\u9762\u4E5F\u5DF2\u7ECF\u8BF4\u4E86\uFF0C"),n("strong",null,"getter/setter\u51FD\u6570\u4E2D\uFF0Cthis\u662F\u6307\u5411\u5BF9\u8C61\u672C\u8EAB\u7684"),s("\u3002")],-1),T=n("p",null,"\u90A3\u4E48\u95EE\u9898\u53C8\u6765\u4E86\uFF0C\u600E\u4E48\u7ED9\u5BF9\u8C61o\u6DFB\u52A0self\u5C5E\u6027\u7684getter\u76D1\u542C\u3002",-1),G=n("p",null,[s("\u53E6\u5916\u4E00\u4E2A\u77E5\u8BC6\u70B9---\u539F\u578B\u3002\u6211\u4EEC\u90FD\u77E5\u9053"),n("strong",null,"\u6240\u6709\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u90FD\u662FObject"),s("\uFF0C\u800C\u5BF9\u5BF9\u8C61\u53D6\u67D0\u4E2A\u5C5E\u6027\u7684\u65F6\u5019\u81EA\u751F\u6CA1\u6709\u5C31\u4F1A\u53BB\u539F\u578B\u94FE\u4E0A\u627E\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u53EA\u9700\u8981\u7ED9Object.prototype\u6DFB\u52A0\u4E00\u4E2Aself\u5C5E\u6027\u7684getter\u76D1\u542C\u5E76\u4E14\u653E\u56DEthis\u3002")],-1),V=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[s("Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"defineProperty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'self'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"var"),s(" o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'self'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),s("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// ['a', 'b']"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1),C=n("h2",{id:"\u4FEE\u6B63",tabindex:"-1"},[s("\u4FEE\u6B63 "),n("a",{class:"header-anchor",href:"#\u4FEE\u6B63","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u4E0A\u9762\u7684\u505A\u6CD5\u5DF2\u7ECF\u57FA\u672C\u4E0A\u80FD\u89E3\u51B3\u95EE\u9898\u4E86\uFF0C\u4F46\u8FD8\u4E0D\u5B8C\u5584\u3002\u5982\u679C\u5BF9\u8C61o\u81EA\u751F\u5B58\u5728self\u5C5E\u6027\uFF0C\u90A3\u4E48\u5728\u83B7\u53D6\u7684\u65F6\u5019\u5C31\u4E0D\u4F1A\u53BB\u5176\u539F\u578B\u94FE\u4E0A\u67E5\u627E\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5FC5\u987B\u8981\u5B9A\u4E00\u4E2A\u552F\u4E00\u7684\u5C5E\u6027\u3002",-1),B=n("p",null,"\u8FD9\u91CC\u5C31\u53EF\u4EE5\u7528\u5230ES6\u65B0\u589E\u52A0\u7684\u7B2C7\u79CD\u6570\u636E\u7C7B\u578BSymbol\u3002",-1),D=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"Symbol"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"defineProperty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"var"),s(" o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),s("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// ['a', 'b']"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1);function E(I,R,J,M,U,W){const t=c("code-block");return u(),p("div",null,[r,a(t,{showAction:!1},{default:e(()=>[k]),_:1}),b,d,m,f,a(t,{showAction:!1},{default:e(()=>[_]),_:1}),h,g,y,a(t,{showAction:!1},{default:e(()=>[j]),_:1}),w,v,O,a(t,{showAction:!1},{default:e(()=>[S]),_:1}),x,a(t,{showAction:!1},{default:e(()=>[A]),_:1}),P,N,T,G,a(t,{showAction:!1},{default:e(()=>[V]),_:1}),C,$,B,a(t,{showAction:!1},{default:e(()=>[D]),_:1})])}var F=o(i,[["render",E]]);export{z as __pageData,F as default};
