import{_ as n,r as s,c as t,a,w as o,f as e,e as c,b as p,o as u}from"./app.de0c49ac.js";const l='{"title":"JavaScript 运行机制详解：再谈Event Loop","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、为什么JavaScript是单线程？","slug":"一、为什么javascript是单线程？"},{"level":2,"title":"二、任务队列","slug":"二、任务队列"},{"level":2,"title":"三、事件和回调函数","slug":"三、事件和回调函数"},{"level":2,"title":"四、Event Loop","slug":"四、event-loop"},{"level":2,"title":"五、定时器","slug":"五、定时器"},{"level":2,"title":"六、Node.js的Event Loop","slug":"六、node-js的event-loop"}],"relativePath":"learns/javascript/js-event-loop.md","lastUpdated":1635307774051}',i={},r=e('',27),k=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[p("\n"),c("span",{class:"token function"},"setTimeout"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),p("console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"1"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),p(),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"2"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br")])],-1),m=e('',8),b=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[p("process"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"nextTick"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token constant"},"A"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),p(),c("span",{class:"token punctuation"},"{"),p("\n  console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"1"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n  process"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"nextTick"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token constant"},"B"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),p("console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"2"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n\n"),c("span",{class:"token function"},"setTimeout"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token function"},"timeout"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),p(),c("span",{class:"token punctuation"},"{"),p("\n  console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'TIMEOUT FIRED'"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),p(),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},")"),p("\n"),c("span",{class:"token comment"},"// 1"),p("\n"),c("span",{class:"token comment"},"// 2"),p("\n"),c("span",{class:"token comment"},"// TIMEOUT FIRED"),p("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br"),c("span",{class:"line-number"},"11"),c("br")])],-1),d=c("p",null,[p("上面代码中，"),c("strong",null,'由于process.nextTick方法指定的回调函数，总是在当前"执行栈"的尾部触发'),p('，所以不仅函数A比setTimeout指定的回调函数timeout先执行，而且函数B也比timeout先执行。这说明，如果有多个process.nextTick语句（不管它们是否嵌套），将全部在当前"执行栈"执行')],-1),f=c("p",null,"现在，再看setImmediate。",-1),v=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token function"},"setImmediate"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token constant"},"A"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),p(),c("span",{class:"token punctuation"},"{"),p("\n  console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"1"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n  "),c("span",{class:"token function"},"setImmediate"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token constant"},"B"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),p("console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"2"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n\n"),c("span",{class:"token function"},"setTimeout"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token function"},"timeout"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),p(),c("span",{class:"token punctuation"},"{"),p("\n  console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'TIMEOUT FIRED'"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),p(),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br")])],-1),q=c("p",null,[p("上面代码中，"),c("strong",null,"setImmediate与setTimeout(fn,0)各自添加了一个回调函数A和timeout，都是在下一次Event Loop触发"),p("。那么，哪个回调函数先执行呢？答案是不确定。运行结果可能是1--TIMEOUT FIRED--2，也可能是TIMEOUT FIRED--1--2。")],-1),T=c("blockquote",null,[c("p",null,"令人困惑的是，Node.js文档中称，setImmediate指定的回调函数，总是排在setTimeout前面。实际上，这种情况只发生在递归调用的时候。")],-1),h=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token function"},"setImmediate"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),p("\n  "),c("span",{class:"token function"},"setImmediate"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token constant"},"A"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),p(),c("span",{class:"token punctuation"},"{"),p("\n    console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"1"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n    "),c("span",{class:"token function"},"setImmediate"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token constant"},"B"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},"{"),p("console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"2"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n  "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n\n  "),c("span",{class:"token function"},"setTimeout"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token function"},"timeout"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),p(),c("span",{class:"token punctuation"},"{"),p("\n    console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'TIMEOUT FIRED'"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n  "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),p(),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n"),c("span",{class:"token comment"},"// 1"),p("\n"),c("span",{class:"token comment"},"// TIMEOUT FIRED"),p("\n"),c("span",{class:"token comment"},"// 2"),p("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br"),c("span",{class:"line-number"},"11"),c("br"),c("span",{class:"line-number"},"12"),c("br"),c("span",{class:"line-number"},"13"),c("br")])],-1),I=c("p",null,"上面代码中，setImmediate和setTimeout被封装在一个setImmediate里面，它的运行结果总是1--TIMEOUT FIRED--2，这时函数A一定在timeout前面触发。至于2排在TIMEOUT FIRED的后面（即函数B在timeout后面触发），是因为setImmediate总是将事件注册到下一轮Event Loop，所以函数A和timeout是在同一轮Loop执行，而函数B在下一轮Loop执行。",-1),g=c("p",null,[p("我们由此得到了process.nextTick和setImmediate的一个重要区别："),c("strong",null,'多个process.nextTick语句总是在当前"执行栈"一次执行完，多个setImmediate可能则需要多次loop才能执行完'),p('。事实上，这正是Node.js 10.0版添加setImmediate方法的原因，否则像下面这样的递归调用process.nextTick，将会没完没了，主线程根本不会去读取"事件队列"！')],-1),E=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[p("process"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"nextTick"),c("span",{class:"token punctuation"},"("),c("span",{class:"token keyword"},"function"),p(),c("span",{class:"token function"},"foo"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),p(),c("span",{class:"token punctuation"},"{"),p("\n  process"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"nextTick"),c("span",{class:"token punctuation"},"("),p("foo"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),p("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br")])],-1),_=c("blockquote",null,[c("p",null,"事实上，现在要是你写出递归的process.nextTick，Node.js会抛出一个警告，要求你改成setImmediate。")],-1),w=c("p",null,'另外，由于process.nextTick指定的回调函数是在本次"事件循环"触发，而setImmediate指定的是在下次"事件循环"触发，所以很显然，前者总是比后者发生得早，而且执行效率也高（因为不用检查"任务队列"）。',-1),j=c("p",null,[p("来源："),c("a",{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"},"http://www.ruanyifeng.com/blog/2014/10/event-loop.html")],-1);var x=n(i,[["render",function(n,e,c,p,l,i){const x=s("code-block");return u(),t("div",null,[r,a(x,{showAction:!1},{default:o((()=>[k])),_:1}),m,a(x,{showAction:!1},{default:o((()=>[b])),_:1}),d,f,a(x,{showAction:!1},{default:o((()=>[v])),_:1}),q,T,a(x,{showAction:!1},{default:o((()=>[h])),_:1}),I,g,a(x,{showAction:!1},{default:o((()=>[E])),_:1}),_,w,j])}]]);export{l as __pageData,x as default};
