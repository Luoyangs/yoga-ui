import{_ as n,r as s,c as a,a as t,w as e,f as o,e as c,b as l,o as p}from"./app.de0c49ac.js";const u='{"title":"九个Console命令，让js调试更简单","description":"","frontmatter":{},"headers":[{"level":2,"title":"显示信息的命令","slug":"显示信息的命令"},{"level":2,"title":"占位符","slug":"占位符"},{"level":2,"title":"信息分组","slug":"信息分组"},{"level":2,"title":"查看对象的信息","slug":"查看对象的信息"},{"level":2,"title":"显示某个节点的内容","slug":"显示某个节点的内容"},{"level":2,"title":"判断变量是否是真","slug":"判断变量是否是真"},{"level":2,"title":"追踪函数的调用轨迹","slug":"追踪函数的调用轨迹"},{"level":2,"title":"计时功能","slug":"计时功能"},{"level":2,"title":"console.profile()的性能分析","slug":"console-profile-的性能分析"}],"relativePath":"learns/javascript/nine-console.md","lastUpdated":1635307774051}',r={},i=o('',3),k=c("div",{class:"language-"},[c("pre",null,[c("code",null,"console.log('hello');\nconsole.info('信息');\nconsole.error('错误');\nconsole.warn('警告');\n")]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br")])],-1),b=o('',3),d=c("div",{class:"language-"},[c("pre",null,[c("code",null,'console.log("%d年%d月%d日",2011,3,26);\n')]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),m=c("p",null,"%o、%O都是用来输出Object对象的，对普通的Object对象，两者没区别，但是打印dom节点时就不一样了：",-1),g=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token comment"},"// 格式成可展开的的DOM，像在开发者工具Element面板那样可展开"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'%o'"),c("span",{class:"token punctuation"},","),l("document"),c("span",{class:"token punctuation"},"."),l("body"),c("span",{class:"token punctuation"},"."),l("firstElementChild"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n"),c("span",{class:"token comment"},"// 像JS对象那样访问DOM元素，可查看DOM元素的属性"),l("\n"),c("span",{class:"token comment"},"// 等同于console.dir(document.body.firstElementChild)"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'%O'"),c("span",{class:"token punctuation"},","),l("document"),c("span",{class:"token punctuation"},"."),l("body"),c("span",{class:"token punctuation"},"."),l("firstElementChild"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br")])],-1),f=c("p",null,"%c占位符是最常用的。使用%c占位符时，对应的后面的参数必须是CSS语句，用来对输出内容进行CSS渲染。常见的输出方式有两种：文字样式、图片输出。",-1),h=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[l("console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"%cHello world,欢迎您！"'),c("span",{class:"token punctuation"},","),c("span",{class:"token string"},'"color: red; font-size: 20px"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n"),c("span",{class:"token comment"},"//输出红色的、20px大小的字符串：Hello world,欢迎您！"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br")])],-1),w=c("p",null,[c("img",{src:"https://cloud.githubusercontent.com/assets/7871813/20181741/5156e57a-a79a-11e6-9f5d-d74908733fce.png",alt:"img"})],-1),x=c("p",null,"由于 console不能定义img，因此用背景图片代替。此外，console不支持width和height，利用空格和font-size代替；还可以使用padding和line-height代替宽高。",-1),v=c("h2",{id:"信息分组",tabindex:"-1"},[l("信息分组 "),c("a",{class:"header-anchor",href:"#信息分组","aria-hidden":"true"},"#")],-1),y=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[l("console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"group"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"第一组信息"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"第一组第一条:我的博客(http://www.ido321.com)"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"第一组第二条:CSDN(http://blog.csdn.net/u011043843)"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"groupEnd"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"group"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"第二组信息"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"第二组第一条:程序爱好者QQ群： 259280570"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"第二组第二条:欢迎你加入"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"groupEnd"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br")])],-1),_=c("p",null,[c("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443563/d824b86c-5b6d-11e6-83fa-e623693d3118.png",alt:"img"})],-1),j=c("h2",{id:"查看对象的信息",tabindex:"-1"},[l("查看对象的信息 "),c("a",{class:"header-anchor",href:"#查看对象的信息","aria-hidden":"true"},"#")],-1),A=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token keyword"},"var"),l(" info "),c("span",{class:"token operator"},"="),l(),c("span",{class:"token punctuation"},"{"),l("\n  blog"),c("span",{class:"token operator"},":"),c("span",{class:"token string"},'"http://www.ido321.com"'),c("span",{class:"token punctuation"},","),l("\n  QQGroup"),c("span",{class:"token operator"},":"),c("span",{class:"token number"},"259280570"),c("span",{class:"token punctuation"},","),l("\n  message"),c("span",{class:"token operator"},":"),c("span",{class:"token string"},'"程序爱好者欢迎你的加入"'),l("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"dir"),c("span",{class:"token punctuation"},"("),l("info"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br")])],-1),C=c("p",null,[c("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443571/e6d04f34-5b6d-11e6-9ed0-6b64afd5587a.png",alt:"img"})],-1),T=c("h2",{id:"显示某个节点的内容",tabindex:"-1"},[l("显示某个节点的内容 "),c("a",{class:"header-anchor",href:"#显示某个节点的内容","aria-hidden":"true"},"#")],-1),E=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"!"),c("span",{class:"token constant"},"DOCTYPE"),l(" html"),c("span",{class:"token operator"},">"),l("\n"),c("span",{class:"token operator"},"<"),l("html"),c("span",{class:"token operator"},">"),l("\n"),c("span",{class:"token operator"},"<"),l("head"),c("span",{class:"token operator"},">"),l("\n  "),c("span",{class:"token operator"},"<"),l("title"),c("span",{class:"token operator"},">"),l("常用console命令"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("title"),c("span",{class:"token operator"},">"),l("\n  "),c("span",{class:"token operator"},"<"),l("meta http"),c("span",{class:"token operator"},"-"),l("equiv"),c("span",{class:"token operator"},"="),c("span",{class:"token string"},'"Content-Type"'),l(" content"),c("span",{class:"token operator"},"="),c("span",{class:"token string"},'"text/html; charset=utf-8"'),l(),c("span",{class:"token operator"},"/"),c("span",{class:"token operator"},">"),l("\n"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("head"),c("span",{class:"token operator"},">"),l("\n"),c("span",{class:"token operator"},"<"),l("body"),c("span",{class:"token operator"},">"),l("\n  "),c("span",{class:"token operator"},"<"),l("div id"),c("span",{class:"token operator"},"="),c("span",{class:"token string"},'"info"'),c("span",{class:"token operator"},">"),l("\n    "),c("span",{class:"token operator"},"<"),l("h3"),c("span",{class:"token operator"},">"),l("我的博客：www"),c("span",{class:"token punctuation"},"."),l("ido321"),c("span",{class:"token punctuation"},"."),l("com"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("h3"),c("span",{class:"token operator"},">"),l("\n    "),c("span",{class:"token operator"},"<"),l("p"),c("span",{class:"token operator"},">"),l("程序爱好者"),c("span",{class:"token operator"},":"),c("span",{class:"token number"},"259280570"),c("span",{class:"token punctuation"},","),l("欢迎你的加入"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("p"),c("span",{class:"token operator"},">"),l("\n  "),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("div"),c("span",{class:"token operator"},">"),l("\n  "),c("span",{class:"token operator"},"<"),l("script type"),c("span",{class:"token operator"},"="),c("span",{class:"token string"},'"text/javascript"'),c("span",{class:"token operator"},">"),l("\n    "),c("span",{class:"token keyword"},"var"),l(" info "),c("span",{class:"token operator"},"="),l(" document"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"getElementById"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'info'"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n    console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"dirxml"),c("span",{class:"token punctuation"},"("),l("info"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n  "),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("script"),c("span",{class:"token operator"},">"),l("\n"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("body"),c("span",{class:"token operator"},">"),l("\n"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("html"),c("span",{class:"token operator"},">"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br"),c("span",{class:"line-number"},"11"),c("br"),c("span",{class:"line-number"},"12"),c("br"),c("span",{class:"line-number"},"13"),c("br"),c("span",{class:"line-number"},"14"),c("br"),c("span",{class:"line-number"},"15"),c("br"),c("span",{class:"line-number"},"16"),c("br"),c("span",{class:"line-number"},"17"),c("br")])],-1),S=c("p",null,[c("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443585/f6e7ce7e-5b6d-11e6-95b2-11b18e041a8a.png",alt:"img"})],-1),O=c("h2",{id:"判断变量是否是真",tabindex:"-1"},[l("判断变量是否是真 "),c("a",{class:"header-anchor",href:"#判断变量是否是真","aria-hidden":"true"},"#")],-1),D=c("p",null,"console.assert()用来判断一个表达式或变量是否为真。如果结果为否，则在控制台输出一条相应信息，并且抛出一个异常。",-1),I=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token keyword"},"var"),l(" result "),c("span",{class:"token operator"},"="),l(),c("span",{class:"token number"},"1"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"assert"),c("span",{class:"token punctuation"},"("),l(" result "),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n"),c("span",{class:"token keyword"},"var"),l(" year "),c("span",{class:"token operator"},"="),l(),c("span",{class:"token number"},"2014"),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"assert"),c("span",{class:"token punctuation"},"("),l("year "),c("span",{class:"token operator"},"=="),l(),c("span",{class:"token number"},"2018"),l(),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br")])],-1),P=c("p",null,[c("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443601/0c202f34-5b6e-11e6-9b50-ce0cbc843ea5.png",alt:"img"})],-1),M=c("h2",{id:"追踪函数的调用轨迹",tabindex:"-1"},[l("追踪函数的调用轨迹 "),c("a",{class:"header-anchor",href:"#追踪函数的调用轨迹","aria-hidden":"true"},"#")],-1),Q=c("p",null,"console.trace()用来追踪函数的调用轨迹",-1),V=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token operator"},"<"),l("script type"),c("span",{class:"token operator"},"="),c("span",{class:"token string"},'"text/javascript"'),c("span",{class:"token operator"},">"),l("\n    "),c("span",{class:"token comment"},"/*函数是如何被调用的，在其中加入console.trace()方法就可以了*/"),l("\n　　\n    "),c("span",{class:"token keyword"},"function"),l(),c("span",{class:"token function"},"add"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},[l("a"),c("span",{class:"token punctuation"},","),l("b")]),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),l("\n      console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"trace"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n　　　　"),c("span",{class:"token keyword"},"return"),l(" a"),c("span",{class:"token operator"},"+"),l("b"),c("span",{class:"token punctuation"},";"),l("\n　　"),c("span",{class:"token punctuation"},"}"),l("\n　　"),c("span",{class:"token keyword"},"var"),l(" x "),c("span",{class:"token operator"},"="),l(),c("span",{class:"token function"},"add3"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"1"),c("span",{class:"token punctuation"},","),c("span",{class:"token number"},"1"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n　　"),c("span",{class:"token keyword"},"function"),l(),c("span",{class:"token function"},"add3"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},[l("a"),c("span",{class:"token punctuation"},","),l("b")]),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),c("span",{class:"token keyword"},"return"),l(),c("span",{class:"token function"},"add2"),c("span",{class:"token punctuation"},"("),l("a"),c("span",{class:"token punctuation"},","),l("b"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),c("span",{class:"token punctuation"},"}"),l("\n　　"),c("span",{class:"token keyword"},"function"),l(),c("span",{class:"token function"},"add2"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},[l("a"),c("span",{class:"token punctuation"},","),l("b")]),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),c("span",{class:"token keyword"},"return"),l(),c("span",{class:"token function"},"add1"),c("span",{class:"token punctuation"},"("),l("a"),c("span",{class:"token punctuation"},","),l("b"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),c("span",{class:"token punctuation"},"}"),l("\n　　"),c("span",{class:"token keyword"},"function"),l(),c("span",{class:"token function"},"add1"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},[l("a"),c("span",{class:"token punctuation"},","),l("b")]),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),c("span",{class:"token keyword"},"return"),l(),c("span",{class:"token function"},"add"),c("span",{class:"token punctuation"},"("),l("a"),c("span",{class:"token punctuation"},","),l("b"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),c("span",{class:"token punctuation"},"}"),l("\n"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("script"),c("span",{class:"token operator"},">"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br"),c("span",{class:"line-number"},"11"),c("br"),c("span",{class:"line-number"},"12"),c("br")])],-1),B=c("p",null,[c("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443612/1b91bf50-5b6e-11e6-8bb8-2441435521bf.png",alt:"img2"})],-1),N=c("h2",{id:"计时功能",tabindex:"-1"},[l("计时功能 "),c("a",{class:"header-anchor",href:"#计时功能","aria-hidden":"true"},"#")],-1),R=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token operator"},"<"),l("script type"),c("span",{class:"token operator"},"="),c("span",{class:"token string"},'"text/javascript"'),c("span",{class:"token operator"},">"),l("\n  console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"time"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"控制台计时器一"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n  "),c("span",{class:"token keyword"},"for"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"var"),l(" i"),c("span",{class:"token operator"},"="),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},";"),l("i"),c("span",{class:"token operator"},"<"),c("span",{class:"token number"},"1000"),c("span",{class:"token punctuation"},";"),l("i"),c("span",{class:"token operator"},"++"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),l("\n  　　"),c("span",{class:"token keyword"},"for"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"var"),l(" j"),c("span",{class:"token operator"},"="),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},";"),l("j"),c("span",{class:"token operator"},"<"),c("span",{class:"token number"},"1000"),c("span",{class:"token punctuation"},";"),l("j"),c("span",{class:"token operator"},"++"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),c("span",{class:"token punctuation"},"}"),l("\n  "),c("span",{class:"token punctuation"},"}"),l("\n  console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"timeEnd"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},'"控制台计时器一"'),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("script"),c("span",{class:"token operator"},">"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br")])],-1),W=c("h2",{id:"console-profile-的性能分析",tabindex:"-1"},[l("console.profile()的性能分析 "),c("a",{class:"header-anchor",href:"#console-profile-的性能分析","aria-hidden":"true"},"#")],-1),z=c("p",null,"性能分析（Profiler）就是分析程序各个部分的运行时间，找出瓶颈所在，使用的方法是console.profile()。",-1),H=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token operator"},"<"),l("script type"),c("span",{class:"token operator"},"="),c("span",{class:"token string"},'"text/javascript"'),c("span",{class:"token operator"},">"),l("\n　"),c("span",{class:"token keyword"},"function"),l(),c("span",{class:"token function"},"All"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),l(),c("span",{class:"token punctuation"},"{"),l("\n    "),c("span",{class:"token function"},"alert"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"11"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n　　 "),c("span",{class:"token keyword"},"for"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"var"),l(" i"),c("span",{class:"token operator"},"="),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},";"),l("i"),c("span",{class:"token operator"},"<"),c("span",{class:"token number"},"10"),c("span",{class:"token punctuation"},";"),l("i"),c("span",{class:"token operator"},"++"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),l("\n      "),c("span",{class:"token function"},"funcA"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"1000"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n     "),c("span",{class:"token punctuation"},"}"),l("\n　　　"),c("span",{class:"token function"},"funcB"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"10000"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n　　"),c("span",{class:"token punctuation"},"}"),l("\n\n  "),c("span",{class:"token keyword"},"function"),l(),c("span",{class:"token function"},"funcA"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},"count"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),l("\n    "),c("span",{class:"token keyword"},"for"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"var"),l(" i"),c("span",{class:"token operator"},"="),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},";"),l("i"),c("span",{class:"token operator"},"<"),l("count"),c("span",{class:"token punctuation"},";"),l("i"),c("span",{class:"token operator"},"++"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),c("span",{class:"token punctuation"},"}"),l("\n  "),c("span",{class:"token punctuation"},"}"),l("\n\n  "),c("span",{class:"token keyword"},"function"),l(),c("span",{class:"token function"},"funcB"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},"count"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),l("\n    "),c("span",{class:"token keyword"},"for"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"var"),l(" i"),c("span",{class:"token operator"},"="),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},";"),l("i"),c("span",{class:"token operator"},"<"),l("count"),c("span",{class:"token punctuation"},";"),l("i"),c("span",{class:"token operator"},"++"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),c("span",{class:"token punctuation"},"}"),l("\n  "),c("span",{class:"token punctuation"},"}"),l("\n\n  console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"profile"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'性能分析器'"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n  "),c("span",{class:"token function"},"All"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n  console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"profileEnd"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n"),c("span",{class:"token operator"},"<"),c("span",{class:"token operator"},"/"),l("script"),c("span",{class:"token operator"},">"),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br"),c("span",{class:"line-number"},"11"),c("br"),c("span",{class:"line-number"},"12"),c("br"),c("span",{class:"line-number"},"13"),c("br"),c("span",{class:"line-number"},"14"),c("br"),c("span",{class:"line-number"},"15"),c("br"),c("span",{class:"line-number"},"16"),c("br"),c("span",{class:"line-number"},"17"),c("br"),c("span",{class:"line-number"},"18"),c("br"),c("span",{class:"line-number"},"19"),c("br"),c("span",{class:"line-number"},"20"),c("br"),c("span",{class:"line-number"},"21"),c("br")])],-1),q=c("p",null,[c("img",{src:"https://cloud.githubusercontent.com/assets/7871813/17443637/438c79b4-5b6e-11e6-896a-5d9a0c5da63d.png",alt:"img"})],-1),G=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token keyword"},"var"),l(" str "),c("span",{class:"token operator"},"="),l(),c("span",{class:"token string"},'"World Internet Conference"'),c("span",{class:"token punctuation"},";"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),l("str"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"match"),c("span",{class:"token punctuation"},"("),c("span",{class:"token regex"},[c("span",{class:"token regex-delimiter"},"/"),c("span",{class:"token regex-source language-regex"},"[a-d]"),c("span",{class:"token regex-delimiter"},"/"),c("span",{class:"token regex-flags"},"i")]),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l(),c("span",{class:"token comment"},'// ["d", index: 4, input: "World Internet Conference"]'),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),l("str"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"match"),c("span",{class:"token punctuation"},"("),c("span",{class:"token regex"},[c("span",{class:"token regex-delimiter"},"/"),c("span",{class:"token regex-source language-regex"},"[a-d]"),c("span",{class:"token regex-delimiter"},"/"),c("span",{class:"token regex-flags"},"gi")]),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l(),c("span",{class:"token comment"},'// ["d", "C", "c"]'),l("\n"),c("span",{class:"token comment"},"// RegExp 方法如下"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token regex"},[c("span",{class:"token regex-delimiter"},"/"),c("span",{class:"token regex-source language-regex"},"[a-d]"),c("span",{class:"token regex-delimiter"},"/"),c("span",{class:"token regex-flags"},"gi")]),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"test"),c("span",{class:"token punctuation"},"("),l("str"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l(),c("span",{class:"token comment"},"// true"),l("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token regex"},[c("span",{class:"token regex-delimiter"},"/"),c("span",{class:"token regex-source language-regex"},"[a-d]"),c("span",{class:"token regex-delimiter"},"/"),c("span",{class:"token regex-flags"},"gi")]),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"exec"),c("span",{class:"token punctuation"},"("),l("str"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l(),c("span",{class:"token comment"},'// ["d", index: 4, input: "World Internet Conference"]'),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br")])],-1);var J=n(r,[["render",function(n,o,c,l,u,r){const J=s("code-block");return p(),a("div",null,[i,t(J,{showAction:!1},{default:e((()=>[k])),_:1}),b,t(J,{showAction:!1},{default:e((()=>[d])),_:1}),m,t(J,{showAction:!1},{default:e((()=>[g])),_:1}),f,t(J,{showAction:!1},{default:e((()=>[h])),_:1}),w,x,v,t(J,{showAction:!1},{default:e((()=>[y])),_:1}),_,j,t(J,{showAction:!1},{default:e((()=>[A])),_:1}),C,T,t(J,{showAction:!1},{default:e((()=>[E])),_:1}),S,O,D,t(J,{showAction:!1},{default:e((()=>[I])),_:1}),P,M,Q,t(J,{showAction:!1},{default:e((()=>[V])),_:1}),B,N,t(J,{showAction:!1},{default:e((()=>[R])),_:1}),W,z,t(J,{showAction:!1},{default:e((()=>[H])),_:1}),q,t(J,{showAction:!1},{default:e((()=>[G])),_:1})])}]]);export{u as __pageData,J as default};
