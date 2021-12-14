import{_ as c,r as l,c as p,a as t,w as e,f as o,e as n,b as s,o as u}from"./app.0419d259.js";const Z='{"title":"\u4E5D\u4E2AConsole\u547D\u4EE4\uFF0C\u8BA9js\u8C03\u8BD5\u66F4\u7B80\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u663E\u793A\u4FE1\u606F\u7684\u547D\u4EE4","slug":"\u663E\u793A\u4FE1\u606F\u7684\u547D\u4EE4"},{"level":2,"title":"\u5360\u4F4D\u7B26","slug":"\u5360\u4F4D\u7B26"},{"level":2,"title":"\u4FE1\u606F\u5206\u7EC4","slug":"\u4FE1\u606F\u5206\u7EC4"},{"level":2,"title":"\u67E5\u770B\u5BF9\u8C61\u7684\u4FE1\u606F","slug":"\u67E5\u770B\u5BF9\u8C61\u7684\u4FE1\u606F"},{"level":2,"title":"\u663E\u793A\u67D0\u4E2A\u8282\u70B9\u7684\u5185\u5BB9","slug":"\u663E\u793A\u67D0\u4E2A\u8282\u70B9\u7684\u5185\u5BB9"},{"level":2,"title":"\u5224\u65AD\u53D8\u91CF\u662F\u5426\u662F\u771F","slug":"\u5224\u65AD\u53D8\u91CF\u662F\u5426\u662F\u771F"},{"level":2,"title":"\u8FFD\u8E2A\u51FD\u6570\u7684\u8C03\u7528\u8F68\u8FF9","slug":"\u8FFD\u8E2A\u51FD\u6570\u7684\u8C03\u7528\u8F68\u8FF9"},{"level":2,"title":"\u8BA1\u65F6\u529F\u80FD","slug":"\u8BA1\u65F6\u529F\u80FD"},{"level":2,"title":"console.profile()\u7684\u6027\u80FD\u5206\u6790","slug":"console-profile-\u7684\u6027\u80FD\u5206\u6790"}],"relativePath":"learns/javascript/nine-console.md","lastUpdated":1639485634648}',r={},i=o('<p><div class="table-of-contents"><ul><li><a href="#\u663E\u793A\u4FE1\u606F\u7684\u547D\u4EE4">\u663E\u793A\u4FE1\u606F\u7684\u547D\u4EE4</a></li><li><a href="#\u5360\u4F4D\u7B26">\u5360\u4F4D\u7B26</a></li><li><a href="#\u4FE1\u606F\u5206\u7EC4">\u4FE1\u606F\u5206\u7EC4</a></li><li><a href="#\u67E5\u770B\u5BF9\u8C61\u7684\u4FE1\u606F">\u67E5\u770B\u5BF9\u8C61\u7684\u4FE1\u606F</a></li><li><a href="#\u663E\u793A\u67D0\u4E2A\u8282\u70B9\u7684\u5185\u5BB9">\u663E\u793A\u67D0\u4E2A\u8282\u70B9\u7684\u5185\u5BB9</a></li><li><a href="#\u5224\u65AD\u53D8\u91CF\u662F\u5426\u662F\u771F">\u5224\u65AD\u53D8\u91CF\u662F\u5426\u662F\u771F</a></li><li><a href="#\u8FFD\u8E2A\u51FD\u6570\u7684\u8C03\u7528\u8F68\u8FF9">\u8FFD\u8E2A\u51FD\u6570\u7684\u8C03\u7528\u8F68\u8FF9</a></li><li><a href="#\u8BA1\u65F6\u529F\u80FD">\u8BA1\u65F6\u529F\u80FD</a></li><li><a href="#console-profile-\u7684\u6027\u80FD\u5206\u6790">console.profile()\u7684\u6027\u80FD\u5206\u6790</a></li></ul></div></p><h1 id="\u4E5D\u4E2Aconsole\u547D\u4EE4\uFF0C\u8BA9js\u8C03\u8BD5\u66F4\u7B80\u5355" tabindex="-1">\u4E5D\u4E2AConsole\u547D\u4EE4\uFF0C\u8BA9js\u8C03\u8BD5\u66F4\u7B80\u5355 <a class="header-anchor" href="#\u4E5D\u4E2Aconsole\u547D\u4EE4\uFF0C\u8BA9js\u8C03\u8BD5\u66F4\u7B80\u5355" aria-hidden="true">#</a></h1><h2 id="\u663E\u793A\u4FE1\u606F\u7684\u547D\u4EE4" tabindex="-1">\u663E\u793A\u4FE1\u606F\u7684\u547D\u4EE4 <a class="header-anchor" href="#\u663E\u793A\u4FE1\u606F\u7684\u547D\u4EE4" aria-hidden="true">#</a></h2>',3),k=n("div",{class:"language-"},[n("pre",null,[n("code",null,`console.log('hello');
console.info('\u4FE1\u606F');
console.error('\u9519\u8BEF');
console.warn('\u8B66\u544A');
`)]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br")])],-1),d=o('<h2 id="\u5360\u4F4D\u7B26" tabindex="-1">\u5360\u4F4D\u7B26 <a class="header-anchor" href="#\u5360\u4F4D\u7B26" aria-hidden="true">#</a></h2><p>console\u4E0A\u8FF0\u7684\u96C6\u4E2D\u5EA6\u652F\u6301printf\u7684\u5360\u4F4D\u7B26\u683C\u5F0F\uFF0C\u652F\u6301\u7684\u5360\u4F4D\u7B26\u6709\uFF1A\u5B57\u7B26\uFF08%s\uFF09\u3001\u6574\u6570\uFF08%d\u6216%i\uFF09\u3001\u6D6E\u70B9\u6570\uFF08%f\uFF09\u548C\u5BF9\u8C61\uFF08%o\uFF09:</p><table><thead><tr><th style="text-align:left;">\u5360\u4F4D\u7B26</th><th style="text-align:left;">\u4F5C\u7528</th></tr></thead><tbody><tr><td style="text-align:left;">%s</td><td style="text-align:left;">\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;">%d or %i</td><td style="text-align:left;">\u6574\u6570</td></tr><tr><td style="text-align:left;">%f</td><td style="text-align:left;">\u6D6E\u70B9\u6570</td></tr><tr><td style="text-align:left;">%o</td><td style="text-align:left;">\u53EF\u5C55\u5F00\u7684DOM</td></tr><tr><td style="text-align:left;">%O</td><td style="text-align:left;">\u5217\u51FADOM\u7684\u5C5E\u6027</td></tr><tr><td style="text-align:left;">%c</td><td style="text-align:left;">\u6839\u636E\u63D0\u4F9B\u7684css\u6837\u5F0F\u683C\u5F0F\u5316\u5B57\u7B26\u4E32</td></tr></tbody></table>',3),b=n("div",{class:"language-"},[n("pre",null,[n("code",null,`console.log("%d\u5E74%d\u6708%d\u65E5",2011,3,26);
`)]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br")])],-1),m=n("p",null,"%o\u3001%O\u90FD\u662F\u7528\u6765\u8F93\u51FAObject\u5BF9\u8C61\u7684\uFF0C\u5BF9\u666E\u901A\u7684Object\u5BF9\u8C61\uFF0C\u4E24\u8005\u6CA1\u533A\u522B\uFF0C\u4F46\u662F\u6253\u5370dom\u8282\u70B9\u65F6\u5C31\u4E0D\u4E00\u6837\u4E86\uFF1A",-1),f=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// \u683C\u5F0F\u6210\u53EF\u5C55\u5F00\u7684\u7684DOM\uFF0C\u50CF\u5728\u5F00\u53D1\u8005\u5DE5\u5177Element\u9762\u677F\u90A3\u6837\u53EF\u5C55\u5F00"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'%o'"),n("span",{class:"token punctuation"},","),s("document"),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},"."),s("firstElementChild"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u50CFJS\u5BF9\u8C61\u90A3\u6837\u8BBF\u95EEDOM\u5143\u7D20\uFF0C\u53EF\u67E5\u770BDOM\u5143\u7D20\u7684\u5C5E\u6027"),s(`
`),n("span",{class:"token comment"},"// \u7B49\u540C\u4E8Econsole.dir(document.body.firstElementChild)"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'%O'"),n("span",{class:"token punctuation"},","),s("document"),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},"."),s("firstElementChild"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br")])],-1),g=n("p",null,"%c\u5360\u4F4D\u7B26\u662F\u6700\u5E38\u7528\u7684\u3002\u4F7F\u7528%c\u5360\u4F4D\u7B26\u65F6\uFF0C\u5BF9\u5E94\u7684\u540E\u9762\u7684\u53C2\u6570\u5FC5\u987B\u662FCSS\u8BED\u53E5\uFF0C\u7528\u6765\u5BF9\u8F93\u51FA\u5185\u5BB9\u8FDB\u884CCSS\u6E32\u67D3\u3002\u5E38\u89C1\u7684\u8F93\u51FA\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A\u6587\u5B57\u6837\u5F0F\u3001\u56FE\u7247\u8F93\u51FA\u3002",-1),h=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[s("console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%cHello world,\u6B22\u8FCE\u60A8\uFF01"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"color: red; font-size: 20px"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"//\u8F93\u51FA\u7EA2\u8272\u7684\u300120px\u5927\u5C0F\u7684\u5B57\u7B26\u4E32\uFF1AHello world,\u6B22\u8FCE\u60A8\uFF01"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),_=n("p",null,[n("img",{src:"https://cloud.githubusercontent.com/assets/7871813/20181741/5156e57a-a79a-11e6-9f5d-d74908733fce.png",alt:"img"})],-1),w=n("p",null,"\u7531\u4E8E console\u4E0D\u80FD\u5B9A\u4E49img\uFF0C\u56E0\u6B64\u7528\u80CC\u666F\u56FE\u7247\u4EE3\u66FF\u3002\u6B64\u5916\uFF0Cconsole\u4E0D\u652F\u6301width\u548Cheight\uFF0C\u5229\u7528\u7A7A\u683C\u548Cfont-size\u4EE3\u66FF\uFF1B\u8FD8\u53EF\u4EE5\u4F7F\u7528padding\u548Cline-height\u4EE3\u66FF\u5BBD\u9AD8\u3002",-1),x=n("h2",{id:"\u4FE1\u606F\u5206\u7EC4",tabindex:"-1"},[s("\u4FE1\u606F\u5206\u7EC4 "),n("a",{class:"header-anchor",href:"#\u4FE1\u606F\u5206\u7EC4","aria-hidden":"true"},"#")],-1),v=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[s("console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"group"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u7B2C\u4E00\u7EC4\u4FE1\u606F"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u7B2C\u4E00\u7EC4\u7B2C\u4E00\u6761:\u6211\u7684\u535A\u5BA2(http://www.ido321.com)"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u7B2C\u4E00\u7EC4\u7B2C\u4E8C\u6761:CSDN(http://blog.csdn.net/u011043843)"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"groupEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"group"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u7B2C\u4E8C\u7EC4\u4FE1\u606F"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u7B2C\u4E8C\u7EC4\u7B2C\u4E00\u6761:\u7A0B\u5E8F\u7231\u597D\u8005QQ\u7FA4\uFF1A 259280570"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u7B2C\u4E8C\u7EC4\u7B2C\u4E8C\u6761:\u6B22\u8FCE\u4F60\u52A0\u5165"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"groupEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),y=n("p",null,[n("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443563/d824b86c-5b6d-11e6-83fa-e623693d3118.png",alt:"img"})],-1),j=n("h2",{id:"\u67E5\u770B\u5BF9\u8C61\u7684\u4FE1\u606F",tabindex:"-1"},[s("\u67E5\u770B\u5BF9\u8C61\u7684\u4FE1\u606F "),n("a",{class:"header-anchor",href:"#\u67E5\u770B\u5BF9\u8C61\u7684\u4FE1\u606F","aria-hidden":"true"},"#")],-1),A=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" info "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  blog`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"http://www.ido321.com"'),n("span",{class:"token punctuation"},","),s(`
  QQGroup`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"259280570"),n("span",{class:"token punctuation"},","),s(`
  message`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"\u7A0B\u5E8F\u7231\u597D\u8005\u6B22\u8FCE\u4F60\u7684\u52A0\u5165"'),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dir"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1),C=n("p",null,[n("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443571/e6d04f34-5b6d-11e6-9ed0-6b64afd5587a.png",alt:"img"})],-1),T=n("h2",{id:"\u663E\u793A\u67D0\u4E2A\u8282\u70B9\u7684\u5185\u5BB9",tabindex:"-1"},[s("\u663E\u793A\u67D0\u4E2A\u8282\u70B9\u7684\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u663E\u793A\u67D0\u4E2A\u8282\u70B9\u7684\u5185\u5BB9","aria-hidden":"true"},"#")],-1),E=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token constant"},"DOCTYPE"),s(" html"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("html"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("head"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),s("title"),n("span",{class:"token operator"},">"),s("\u5E38\u7528console\u547D\u4EE4"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("title"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),s("meta http"),n("span",{class:"token operator"},"-"),s("equiv"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"Content-Type"'),s(" content"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"text/html; charset=utf-8"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("head"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("body"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),s("div id"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"info"'),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("h3"),n("span",{class:"token operator"},">"),s("\u6211\u7684\u535A\u5BA2\uFF1Awww"),n("span",{class:"token punctuation"},"."),s("ido321"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("h3"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("p"),n("span",{class:"token operator"},">"),s("\u7A0B\u5E8F\u7231\u597D\u8005"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"259280570"),n("span",{class:"token punctuation"},","),s("\u6B22\u8FCE\u4F60\u7684\u52A0\u5165"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("p"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),s("script type"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"text/javascript"'),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" info "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dirxml"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("body"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("html"),n("span",{class:"token operator"},">"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br")])],-1),S=n("p",null,[n("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443585/f6e7ce7e-5b6d-11e6-95b2-11b18e041a8a.png",alt:"img"})],-1),O=n("h2",{id:"\u5224\u65AD\u53D8\u91CF\u662F\u5426\u662F\u771F",tabindex:"-1"},[s("\u5224\u65AD\u53D8\u91CF\u662F\u5426\u662F\u771F "),n("a",{class:"header-anchor",href:"#\u5224\u65AD\u53D8\u91CF\u662F\u5426\u662F\u771F","aria-hidden":"true"},"#")],-1),D=n("p",null,"console.assert()\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u8868\u8FBE\u5F0F\u6216\u53D8\u91CF\u662F\u5426\u4E3A\u771F\u3002\u5982\u679C\u7ED3\u679C\u4E3A\u5426\uFF0C\u5219\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u4E00\u6761\u76F8\u5E94\u4FE1\u606F\uFF0C\u5E76\u4E14\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38\u3002",-1),I=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assert"),n("span",{class:"token punctuation"},"("),s(" result "),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"var"),s(" year "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2014"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assert"),n("span",{class:"token punctuation"},"("),s("year "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"2018"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br")])],-1),V=n("p",null,[n("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443601/0c202f34-5b6e-11e6-9b50-ce0cbc843ea5.png",alt:"img"})],-1),N=n("h2",{id:"\u8FFD\u8E2A\u51FD\u6570\u7684\u8C03\u7528\u8F68\u8FF9",tabindex:"-1"},[s("\u8FFD\u8E2A\u51FD\u6570\u7684\u8C03\u7528\u8F68\u8FF9 "),n("a",{class:"header-anchor",href:"#\u8FFD\u8E2A\u51FD\u6570\u7684\u8C03\u7528\u8F68\u8FF9","aria-hidden":"true"},"#")],-1),P=n("p",null,"console.trace()\u7528\u6765\u8FFD\u8E2A\u51FD\u6570\u7684\u8C03\u7528\u8F68\u8FF9",-1),B=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token operator"},"<"),s("script type"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"text/javascript"'),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token comment"},"/*\u51FD\u6570\u662F\u5982\u4F55\u88AB\u8C03\u7528\u7684\uFF0C\u5728\u5176\u4E2D\u52A0\u5165console.trace()\u65B9\u6CD5\u5C31\u53EF\u4EE5\u4E86*/"),s(`
\u3000\u3000
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s("b")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
\u3000\u3000\u3000\u3000`),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token operator"},"+"),s("b"),n("span",{class:"token punctuation"},";"),s(`
\u3000\u3000`),n("span",{class:"token punctuation"},"}"),s(`
\u3000\u3000`),n("span",{class:"token keyword"},"var"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"add3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
\u3000\u3000`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s("b")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"add2"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
\u3000\u3000`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s("b")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"add1"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
\u3000\u3000`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s("b")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),M=n("p",null,[n("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443612/1b91bf50-5b6e-11e6-8bb8-2441435521bf.png",alt:"img2"})],-1),Q=n("h2",{id:"\u8BA1\u65F6\u529F\u80FD",tabindex:"-1"},[s("\u8BA1\u65F6\u529F\u80FD "),n("a",{class:"header-anchor",href:"#\u8BA1\u65F6\u529F\u80FD","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token operator"},"<"),s("script type"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"text/javascript"'),n("span",{class:"token operator"},">"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"time"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u63A7\u5236\u53F0\u8BA1\u65F6\u5668\u4E00"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("i"),n("span",{class:"token operator"},"<"),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},";"),s("i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  \u3000\u3000`),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" j"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("j"),n("span",{class:"token operator"},"<"),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},";"),s("j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"timeEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u63A7\u5236\u53F0\u8BA1\u65F6\u5668\u4E00"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br")])],-1),R=n("h2",{id:"console-profile-\u7684\u6027\u80FD\u5206\u6790",tabindex:"-1"},[s("console.profile()\u7684\u6027\u80FD\u5206\u6790 "),n("a",{class:"header-anchor",href:"#console-profile-\u7684\u6027\u80FD\u5206\u6790","aria-hidden":"true"},"#")],-1),W=n("p",null,"\u6027\u80FD\u5206\u6790\uFF08Profiler\uFF09\u5C31\u662F\u5206\u6790\u7A0B\u5E8F\u5404\u4E2A\u90E8\u5206\u7684\u8FD0\u884C\u65F6\u95F4\uFF0C\u627E\u51FA\u74F6\u9888\u6240\u5728\uFF0C\u4F7F\u7528\u7684\u65B9\u6CD5\u662Fconsole.profile()\u3002",-1),z=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token operator"},"<"),s("script type"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"text/javascript"'),n("span",{class:"token operator"},">"),s(`
\u3000`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"All"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
\u3000\u3000 `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("i"),n("span",{class:"token operator"},"<"),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s("i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"funcA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
     `),n("span",{class:"token punctuation"},"}"),s(`
\u3000\u3000\u3000`),n("span",{class:"token function"},"funcB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
\u3000\u3000`),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"funcA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"count"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("i"),n("span",{class:"token operator"},"<"),s("count"),n("span",{class:"token punctuation"},";"),s("i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"funcB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"count"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("i"),n("span",{class:"token operator"},"<"),s("count"),n("span",{class:"token punctuation"},";"),s("i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"profile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6027\u80FD\u5206\u6790\u5668'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"All"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"profileEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br")])],-1),H=n("p",null,[n("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443637/438c79b4-5b6e-11e6-896a-5d9a0c5da63d.png",alt:"img"})],-1),q=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"World Internet Conference"'),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"match"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"[a-d]"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"i")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// ["d", index: 4, input: "World Internet Conference"]'),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"match"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"[a-d]"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"gi")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// ["d", "C", "c"]'),s(`
`),n("span",{class:"token comment"},"// RegExp \u65B9\u6CD5\u5982\u4E0B"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"[a-d]"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"gi")]),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"[a-d]"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"gi")]),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exec"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// ["d", index: 4, input: "World Internet Conference"]'),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1);function G(J,U,Y,F,K,L){const a=l("code-block");return u(),p("div",null,[i,t(a,{showAction:!1},{default:e(()=>[k]),_:1}),d,t(a,{showAction:!1},{default:e(()=>[b]),_:1}),m,t(a,{showAction:!1},{default:e(()=>[f]),_:1}),g,t(a,{showAction:!1},{default:e(()=>[h]),_:1}),_,w,x,t(a,{showAction:!1},{default:e(()=>[v]),_:1}),y,j,t(a,{showAction:!1},{default:e(()=>[A]),_:1}),C,T,t(a,{showAction:!1},{default:e(()=>[E]),_:1}),S,O,D,t(a,{showAction:!1},{default:e(()=>[I]),_:1}),V,N,P,t(a,{showAction:!1},{default:e(()=>[B]),_:1}),M,Q,t(a,{showAction:!1},{default:e(()=>[$]),_:1}),R,W,t(a,{showAction:!1},{default:e(()=>[z]),_:1}),H,t(a,{showAction:!1},{default:e(()=>[q]),_:1})])}var nn=c(r,[["render",G]]);export{Z as __pageData,nn as default};
