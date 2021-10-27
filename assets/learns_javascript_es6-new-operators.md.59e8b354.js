import{_ as n,r as s,c as a,a as e,w as l,f as o,e as t,b as p,o as c}from"./app.de0c49ac.js";const r='{"title":"ES6新增好用的运算符","description":"","frontmatter":{},"headers":[{"level":2,"title":"指数运算符","slug":"指数运算符"},{"level":2,"title":"链判断运算符","slug":"链判断运算符"},{"level":2,"title":"Null 判断运算符","slug":"null-判断运算符"},{"level":2,"title":"逻辑赋值运算符","slug":"逻辑赋值运算符"}],"relativePath":"learns/javascript/es6-new-operators.md","lastUpdated":1635307774047}',u={},i=o('<p><div class="table-of-contents"><ul><li><a href="#指数运算符">指数运算符</a></li><li><a href="#链判断运算符">链判断运算符</a></li><li><a href="#null-判断运算符">Null 判断运算符</a></li><li><a href="#逻辑赋值运算符">逻辑赋值运算符</a></li></ul></div></p><h1 id="es6新增好用的运算符" tabindex="-1">ES6新增好用的运算符 <a class="header-anchor" href="#es6新增好用的运算符" aria-hidden="true">#</a></h1><h2 id="指数运算符" tabindex="-1">指数运算符 <a class="header-anchor" href="#指数运算符" aria-hidden="true">#</a></h2>',3),k=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token number"},"2"),p(),t("span",{class:"token operator"},"**"),p(),t("span",{class:"token number"},"2"),p(),t("span",{class:"token comment"},"// 4"),p("\n"),t("span",{class:"token number"},"2"),p(),t("span",{class:"token operator"},"**"),p(),t("span",{class:"token number"},"3"),p(),t("span",{class:"token comment"},"// 8"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br")])],-1),b=t("div",{class:"danger custom-block"},[t("p",{class:"custom-block-title"},"WARNING"),t("p",null,[p("这个运算符的一个特点是"),t("strong",null,"右结合"),p("，而不是常见的左结合。多个指数运算符连用时，是"),t("strong",null,"从最右边开始计算"),p("的。")])],-1),m=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token number"},"2"),p(),t("span",{class:"token operator"},"**"),p(),t("span",{class:"token number"},"3"),p(),t("span",{class:"token operator"},"**"),p(),t("span",{class:"token number"},"2"),p(),t("span",{class:"token comment"},"// 相当于 2 ** (3 ** 2)"),p("\n"),t("span",{class:"token comment"},"// 512"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br")])],-1),d=t("p",null,"上面代码中，首先计算的是第二个指数运算符，而不是第一个。",-1),g=t("p",null,"指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。",-1),f=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"let"),p(" a "),t("span",{class:"token operator"},"="),p(),t("span",{class:"token number"},"1.5"),t("span",{class:"token punctuation"},";"),p("\na "),t("span",{class:"token operator"},"**="),p(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token comment"},"// 等同于 a = a * a;"),p("\n\n"),t("span",{class:"token keyword"},"let"),p(" b "),t("span",{class:"token operator"},"="),p(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},";"),p("\nb "),t("span",{class:"token operator"},"**="),p(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token comment"},"// 等同于 b = b * b * b;"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br")])],-1),h=t("h2",{id:"链判断运算符",tabindex:"-1"},[p("链判断运算符 "),t("a",{class:"header-anchor",href:"#链判断运算符","aria-hidden":"true"},"#")],-1),w=t("p",null,"编程实务中，如果读取对象内部的某个属性，往往需要判断一下，属性的上层对象是否存在。比如，读取message.body.user.firstName这个属性，安全的写法是写成下面这样。",-1),v=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token comment"},"// 错误的写法"),p("\n"),t("span",{class:"token keyword"},"const"),p("  firstName "),t("span",{class:"token operator"},"="),p(" message"),t("span",{class:"token punctuation"},"."),p("body"),t("span",{class:"token punctuation"},"."),p("user"),t("span",{class:"token punctuation"},"."),p("firstName "),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},";"),p("\n\n"),t("span",{class:"token comment"},"// 正确的写法"),p("\n"),t("span",{class:"token keyword"},"const"),p(" firstName "),t("span",{class:"token operator"},"="),p(),t("span",{class:"token punctuation"},"("),p("message\n  "),t("span",{class:"token operator"},"&&"),p(" message"),t("span",{class:"token punctuation"},"."),p("body\n  "),t("span",{class:"token operator"},"&&"),p(" message"),t("span",{class:"token punctuation"},"."),p("body"),t("span",{class:"token punctuation"},"."),p("user\n  "),t("span",{class:"token operator"},"&&"),p(" message"),t("span",{class:"token punctuation"},"."),p("body"),t("span",{class:"token punctuation"},"."),p("user"),t("span",{class:"token punctuation"},"."),p("firstName"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},";"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br")])],-1),y=t("p",null,"上面例子中，firstName属性在对象的第四层，所以需要判断四次，每一层是否有值。",-1),x=t("p",null,"三元运算符?:也常用于判断对象是否存在。",-1),_=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"const"),p(" fooInput "),t("span",{class:"token operator"},"="),p(" myForm"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"querySelector"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'input[name=foo]'"),t("span",{class:"token punctuation"},")"),p("\n"),t("span",{class:"token keyword"},"const"),p(" fooValue "),t("span",{class:"token operator"},"="),p(" fooInput "),t("span",{class:"token operator"},"?"),p(" fooInput"),t("span",{class:"token punctuation"},"."),p("value "),t("span",{class:"token operator"},":"),p(),t("span",{class:"token keyword"},"undefined"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br")])],-1),A=t("p",null,"上面例子中，必须先判断fooInput是否存在，才能读取fooInput.value。这样的层层判断非常麻烦，因此 ES2020 引入了“链判断运算符”（optional chaining operator）?.，简化上面的写法",-1),j=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"const"),p(" firstName "),t("span",{class:"token operator"},"="),p(" message"),t("span",{class:"token operator"},"?."),p("body"),t("span",{class:"token operator"},"?."),p("user"),t("span",{class:"token operator"},"?."),p("firstName "),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token keyword"},"const"),p(" fooValue "),t("span",{class:"token operator"},"="),p(" myForm"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"querySelector"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'input[name=foo]'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"?."),p("value\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br")])],-1),N=t("p",null,"上面代码使用了?.运算符，直接在链式调用的时候判断，左侧的对象是否为null或undefined。如果是的，就不再往下运算，而是返回undefined。",-1),S=t("p",null,"下面是判断对象方法是否存在，如果存在就立即执行的例子。",-1),I=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[p("iterator"),t("span",{class:"token punctuation"},"."),p("return"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br")])],-1),T=t("p",null,"上面代码中，iterator.return如果有定义，就会调用该方法，否则iterator.return直接返回undefined，不再执行?.后面的部分。",-1),D=t("p",null,"对于那些可能没有实现的方法，这个运算符尤其有用。",-1),E=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"if"),p(),t("span",{class:"token punctuation"},"("),p("myForm"),t("span",{class:"token punctuation"},"."),p("checkValidity"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token operator"},"==="),p(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token punctuation"},"{"),p("\n  "),t("span",{class:"token comment"},"// 表单校验失败"),p("\n  "),t("span",{class:"token keyword"},"return"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token punctuation"},"}"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br")])],-1),V=t("p",null,"上面代码中，老式浏览器的表单对象可能没有checkValidity()这个方法，这时?.运算符就会返回undefined，判断语句就变成了undefined === false，所以就会跳过下面的代码。",-1),q=t("p",null,"链判断运算符?.有三种写法。",-1),C=t("ul",null,[t("li",null,"obj?.prop // 对象属性是否存在"),t("li",null,"obj?.[expr] // 同上"),t("li",null,"func?.(...args) // 函数或对象方法是否存在")],-1),F=t("p",null,"下面是obj?.[expr]用法的一个例子。",-1),z=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"let"),p(" hex "),t("span",{class:"token operator"},"="),p(),t("span",{class:"token string"},'"#C0FFEE"'),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"match"),t("span",{class:"token punctuation"},"("),t("span",{class:"token regex"},[t("span",{class:"token regex-delimiter"},"/"),t("span",{class:"token regex-source language-regex"},"#([A-Z]+)"),t("span",{class:"token regex-delimiter"},"/"),t("span",{class:"token regex-flags"},"i")]),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br")])],-1),R=t("p",null,"上面例子中，字符串的match()方法，如果没有发现匹配会返回null，如果发现匹配会返回一个数组，?.运算符起到了判断作用。",-1),G=t("p",null,"下面是?.运算符常见形式，以及不使用该运算符时的等价形式。",-1),P=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[p("a"),t("span",{class:"token operator"},"?."),p("b\n"),t("span",{class:"token comment"},"// 等同于"),p("\na "),t("span",{class:"token operator"},"=="),p(),t("span",{class:"token keyword"},"null"),p(),t("span",{class:"token operator"},"?"),p(),t("span",{class:"token keyword"},"undefined"),p(),t("span",{class:"token operator"},":"),p(" a"),t("span",{class:"token punctuation"},"."),p("b\n\na"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"["),p("x"),t("span",{class:"token punctuation"},"]"),p("\n"),t("span",{class:"token comment"},"// 等同于"),p("\na "),t("span",{class:"token operator"},"=="),p(),t("span",{class:"token keyword"},"null"),p(),t("span",{class:"token operator"},"?"),p(),t("span",{class:"token keyword"},"undefined"),p(),t("span",{class:"token operator"},":"),p(" a"),t("span",{class:"token punctuation"},"["),p("x"),t("span",{class:"token punctuation"},"]"),p("\n\na"),t("span",{class:"token operator"},"?."),t("span",{class:"token function"},"b"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p("\n"),t("span",{class:"token comment"},"// 等同于"),p("\na "),t("span",{class:"token operator"},"=="),p(),t("span",{class:"token keyword"},"null"),p(),t("span",{class:"token operator"},"?"),p(),t("span",{class:"token keyword"},"undefined"),p(),t("span",{class:"token operator"},":"),p(" a"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"b"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p("\n\na"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p("\n"),t("span",{class:"token comment"},"// 等同于"),p("\na "),t("span",{class:"token operator"},"=="),p(),t("span",{class:"token keyword"},"null"),p(),t("span",{class:"token operator"},"?"),p(),t("span",{class:"token keyword"},"undefined"),p(),t("span",{class:"token operator"},":"),p(),t("span",{class:"token function"},"a"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br")])],-1),W=t("div",{class:"danger custom-block"},[t("p",{class:"custom-block-title"},"WARNING"),t("p",null,"上面代码中，特别注意后两种形式，如果a?.b()和a?.()。如果a?.b()里面的a.b有值，但不是函数，不可调用，那么a?.b()是会报错的。a?.()也是如此，如果a不是null或undefined，但也不是函数，那么a?.()会报错。")],-1),H=t("p",null,[p("使用这个运算符，有"),t("strong",null,"几个注意点"),p("。")],-1),U=t("p",null,"（1）短路机制",-1),Z=t("p",null,"本质上，?.运算符相当于一种短路机制，只要不满足条件，就不再往下执行。",-1),B=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[p("a"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"["),t("span",{class:"token operator"},"++"),p("x"),t("span",{class:"token punctuation"},"]"),p("\n"),t("span",{class:"token comment"},"// 等同于"),p("\na "),t("span",{class:"token operator"},"=="),p(),t("span",{class:"token keyword"},"null"),p(),t("span",{class:"token operator"},"?"),p(),t("span",{class:"token keyword"},"undefined"),p(),t("span",{class:"token operator"},":"),p(" a"),t("span",{class:"token punctuation"},"["),t("span",{class:"token operator"},"++"),p("x"),t("span",{class:"token punctuation"},"]"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br")])],-1),J=t("p",null,"上面代码中，如果a是undefined或null，那么x不会进行递增运算。也就是说，链判断运算符一旦为真，右侧的表达式就不再求值。",-1),K=t("p",null,"（2）括号的影响",-1),L=t("p",null,"如果属性链有圆括号，链判断运算符对圆括号外部没有影响，只对圆括号内部有影响。",-1),M=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"("),p("a"),t("span",{class:"token operator"},"?."),p("b"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),p("c\n"),t("span",{class:"token comment"},"// 等价于"),p("\n"),t("span",{class:"token punctuation"},"("),p("a "),t("span",{class:"token operator"},"=="),p(),t("span",{class:"token keyword"},"null"),p(),t("span",{class:"token operator"},"?"),p(),t("span",{class:"token keyword"},"undefined"),p(),t("span",{class:"token operator"},":"),p(" a"),t("span",{class:"token punctuation"},"."),p("b"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),p("c\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br")])],-1),O=t("p",null,[p("上面代码中，?.对圆括号外部没有影响，不管a对象是否存在，"),t("strong",null,"圆括号后面的.c总是会执行"),p("。")],-1),Q=t("blockquote",null,[t("p",null,"一般来说，使用?.运算符的场合，不应该使用圆括号。")],-1),X=t("p",null,"（3）报错场合",-1),Y=t("p",null,"以下写法是禁止的，会报错。",-1),$=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token comment"},"// 构造函数"),p("\n"),t("span",{class:"token keyword"},"new"),p(),t("span",{class:"token class-name"},"a"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p("\n"),t("span",{class:"token keyword"},"new"),p(),t("span",{class:"token class-name"},"a"),t("span",{class:"token operator"},"?."),t("span",{class:"token function"},"b"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p("\n\n"),t("span",{class:"token comment"},"// 链判断运算符的右侧有模板字符串"),p("\na"),t("span",{class:"token operator"},"?."),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"{b}"),t("span",{class:"token template-punctuation string"},"`")]),p("\na"),t("span",{class:"token operator"},"?."),p("b"),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"{c}"),t("span",{class:"token template-punctuation string"},"`")]),p("\n\n"),t("span",{class:"token comment"},"// 链判断运算符的左侧是 super"),p("\n"),t("span",{class:"token keyword"},"super"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),p("\n"),t("span",{class:"token keyword"},"super"),t("span",{class:"token operator"},"?."),p("foo\n\n"),t("span",{class:"token comment"},"// 链运算符用于赋值运算符左侧"),p("\na"),t("span",{class:"token operator"},"?."),p("b "),t("span",{class:"token operator"},"="),p(" c\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br")])],-1),nn=t("p",null,"（4）右侧不得为十进制数值",-1),sn=t("p",null,"为了保证兼容以前的代码，允许foo?.3:0被解析成foo ? .3 : 0，因此规定如果?.后面紧跟一个十进制数字，那么?.不再被看成是一个完整的运算符，而会按照三元运算符进行处理，也就是说，那个小数点会归属于后面的十进制数字，形成一个小数。",-1),an=t("h2",{id:"null-判断运算符",tabindex:"-1"},[p("Null 判断运算符 "),t("a",{class:"header-anchor",href:"#null-判断运算符","aria-hidden":"true"},"#")],-1),en=t("p",null,"读取对象属性的时候，如果某个属性的值是null或undefined，有时候需要为它们指定默认值。常见做法是通过||运算符指定默认值。",-1),ln=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"const"),p(" headerText "),t("span",{class:"token operator"},"="),p(" response"),t("span",{class:"token punctuation"},"."),p("settings"),t("span",{class:"token punctuation"},"."),p("headerText "),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token string"},"'Hello, world!'"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token keyword"},"const"),p(" animationDuration "),t("span",{class:"token operator"},"="),p(" response"),t("span",{class:"token punctuation"},"."),p("settings"),t("span",{class:"token punctuation"},"."),p("animationDuration "),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token number"},"300"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token keyword"},"const"),p(" showSplashScreen "),t("span",{class:"token operator"},"="),p(" response"),t("span",{class:"token punctuation"},"."),p("settings"),t("span",{class:"token punctuation"},"."),p("showSplashScreen "),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},";"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br")])],-1),on=t("p",null,[p("上面的三行代码都通过||运算符指定默认值，但是这样写是错的。开发者的原意是，只要属性的值为null或undefined，默认值就会生效，但是"),t("strong",null,"属性的值如果为空字符串或false或0"),p("，默认值也会生效。")],-1),tn=t("p",null,[p("为了避免这种情况，ES2020 引入了一个新的 Null 判断运算符??。它的行为类似||，但是"),t("strong",null,"只有运算符左侧的值为null或undefined时"),p("，才会返回右侧的值。")],-1),pn=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"const"),p(" headerText "),t("span",{class:"token operator"},"="),p(" response"),t("span",{class:"token punctuation"},"."),p("settings"),t("span",{class:"token punctuation"},"."),p("headerText "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token string"},"'Hello, world!'"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token keyword"},"const"),p(" animationDuration "),t("span",{class:"token operator"},"="),p(" response"),t("span",{class:"token punctuation"},"."),p("settings"),t("span",{class:"token punctuation"},"."),p("animationDuration "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token number"},"300"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token keyword"},"const"),p(" showSplashScreen "),t("span",{class:"token operator"},"="),p(" response"),t("span",{class:"token punctuation"},"."),p("settings"),t("span",{class:"token punctuation"},"."),p("showSplashScreen "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},";"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br")])],-1),cn=t("p",null,"上面代码中，默认值只有在左侧属性值为null或undefined时，才会生效。",-1),rn=t("p",null,"这个运算符的一个目的，就是跟链判断运算符?.配合使用，为null或undefined的值设置默认值。",-1),un=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"const"),p(" animationDuration "),t("span",{class:"token operator"},"="),p(" response"),t("span",{class:"token punctuation"},"."),p("settings"),t("span",{class:"token operator"},"?."),p("animationDuration "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token number"},"300"),t("span",{class:"token punctuation"},";"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br")])],-1),kn=t("p",null,"上面代码中，如果response.settings是null或undefined，或者response.settings.animationDuration是null或undefined，就会返回默认值300。也就是说，这一行代码包括了两级属性的判断。",-1),bn=t("p",null,"这个运算符很适合判断函数参数是否赋值",-1),mn=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"function"),p(),t("span",{class:"token function"},"Component"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"props"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token punctuation"},"{"),p("\n  "),t("span",{class:"token keyword"},"const"),p(" enable "),t("span",{class:"token operator"},"="),p(" props"),t("span",{class:"token punctuation"},"."),p("enabled "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},";"),p("\n  "),t("span",{class:"token comment"},"// …"),p("\n"),t("span",{class:"token punctuation"},"}"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br")])],-1),dn=t("p",null,"上面代码判断props参数的enabled属性是否赋值，基本等同于下面的写法。",-1),gn=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"function"),p(),t("span",{class:"token function"},"Component"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"props"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token punctuation"},"{"),p("\n  "),t("span",{class:"token keyword"},"const"),p(),t("span",{class:"token punctuation"},"{"),p("\n    enabled"),t("span",{class:"token operator"},":"),p(" enable "),t("span",{class:"token operator"},"="),p(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),p("\n  "),t("span",{class:"token punctuation"},"}"),p(),t("span",{class:"token operator"},"="),p(" props"),t("span",{class:"token punctuation"},";"),p("\n  "),t("span",{class:"token comment"},"// …"),p("\n"),t("span",{class:"token punctuation"},"}"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br")])],-1),fn=t("div",{class:"danger custom-block"},[t("p",{class:"custom-block-title"},"WARNING"),t("p",null,"??本质上是逻辑运算，它与其他两个逻辑运算符&&和||有一个优先级问题，它们之间的优先级到底孰高孰低。优先级的不同，往往会导致逻辑运算的结果不同。")],-1),hn=t("p",null,[p("现在的规则是，如果多个逻辑运算符一起使用，"),t("strong",null,"必须用括号表明优先级"),p("，否则会报错。")],-1),wn=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token comment"},"// 报错"),p("\nlhs "),t("span",{class:"token operator"},"&&"),p(" middle "),t("span",{class:"token operator"},"??"),p(" rhs\nlhs "),t("span",{class:"token operator"},"??"),p(" middle "),t("span",{class:"token operator"},"&&"),p(" rhs\nlhs "),t("span",{class:"token operator"},"||"),p(" middle "),t("span",{class:"token operator"},"??"),p(" rhs\nlhs "),t("span",{class:"token operator"},"??"),p(" middle "),t("span",{class:"token operator"},"||"),p(" rhs\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br")])],-1),vn=t("p",null,"上面四个表达式都会报错，必须加入表明优先级的括号。",-1),yn=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"("),p("lhs "),t("span",{class:"token operator"},"&&"),p(" middle"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token operator"},"??"),p(" rhs"),t("span",{class:"token punctuation"},";"),p("\nlhs "),t("span",{class:"token operator"},"&&"),p(),t("span",{class:"token punctuation"},"("),p("middle "),t("span",{class:"token operator"},"??"),p(" rhs"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),p("\n\n"),t("span",{class:"token punctuation"},"("),p("lhs "),t("span",{class:"token operator"},"??"),p(" middle"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token operator"},"&&"),p(" rhs"),t("span",{class:"token punctuation"},";"),p("\nlhs "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token punctuation"},"("),p("middle "),t("span",{class:"token operator"},"&&"),p(" rhs"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),p("\n\n"),t("span",{class:"token punctuation"},"("),p("lhs "),t("span",{class:"token operator"},"||"),p(" middle"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token operator"},"??"),p(" rhs"),t("span",{class:"token punctuation"},";"),p("\nlhs "),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token punctuation"},"("),p("middle "),t("span",{class:"token operator"},"??"),p(" rhs"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),p("\n\n"),t("span",{class:"token punctuation"},"("),p("lhs "),t("span",{class:"token operator"},"??"),p(" middle"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token operator"},"||"),p(" rhs"),t("span",{class:"token punctuation"},";"),p("\nlhs "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token punctuation"},"("),p("middle "),t("span",{class:"token operator"},"||"),p(" rhs"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br")])],-1),xn=t("h2",{id:"逻辑赋值运算符",tabindex:"-1"},[p("逻辑赋值运算符 "),t("a",{class:"header-anchor",href:"#逻辑赋值运算符","aria-hidden":"true"},"#")],-1),_n=t("p",null,"ES2021 引入了三个新的逻辑赋值运算符（logical assignment operators），将逻辑运算符与赋值运算符进行结合。",-1),An=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token comment"},"// 或赋值运算符"),p("\nx "),t("span",{class:"token operator"},"||="),p(" y\n"),t("span",{class:"token comment"},"// 等同于"),p("\nx "),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token punctuation"},"("),p("x "),t("span",{class:"token operator"},"="),p(" y"),t("span",{class:"token punctuation"},")"),p("\n\n"),t("span",{class:"token comment"},"// 与赋值运算符"),p("\nx "),t("span",{class:"token operator"},"&&="),p(" y\n"),t("span",{class:"token comment"},"// 等同于"),p("\nx "),t("span",{class:"token operator"},"&&"),p(),t("span",{class:"token punctuation"},"("),p("x "),t("span",{class:"token operator"},"="),p(" y"),t("span",{class:"token punctuation"},")"),p("\n\n"),t("span",{class:"token comment"},"// Null 赋值运算符"),p("\nx "),t("span",{class:"token operator"},"??="),p(" y\n"),t("span",{class:"token comment"},"// 等同于"),p("\nx "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token punctuation"},"("),p("x "),t("span",{class:"token operator"},"="),p(" y"),t("span",{class:"token punctuation"},")"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br")])],-1),jn=t("p",null,"这三个运算符||=、&&=、??=相当于先进行逻辑运算，然后根据运算结果，再视情况进行赋值运算。",-1),Nn=t("p",null,"它们的一个用途是，为变量或属性设置默认值。",-1),Sn=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token comment"},"// 老的写法"),p("\nuser"),t("span",{class:"token punctuation"},"."),p("id "),t("span",{class:"token operator"},"="),p(" user"),t("span",{class:"token punctuation"},"."),p("id "),t("span",{class:"token operator"},"||"),p(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),p("\n\n"),t("span",{class:"token comment"},"// 新的写法"),p("\nuser"),t("span",{class:"token punctuation"},"."),p("id "),t("span",{class:"token operator"},"||="),p(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br")])],-1),In=t("p",null,"上面示例中，user.id属性如果不存在，则设为1，新的写法比老的写法更紧凑一些。",-1),Tn=t("p",null,"下面是另一个例子。",-1),Dn=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"function"),p(),t("span",{class:"token function"},"example"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"opts"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token punctuation"},"{"),p("\n  opts"),t("span",{class:"token punctuation"},"."),p("foo "),t("span",{class:"token operator"},"="),p(" opts"),t("span",{class:"token punctuation"},"."),p("foo "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token string"},"'bar'"),t("span",{class:"token punctuation"},";"),p("\n  opts"),t("span",{class:"token punctuation"},"."),p("baz "),t("span",{class:"token operator"},"??"),p(),t("span",{class:"token punctuation"},"("),p("opts"),t("span",{class:"token punctuation"},"."),p("baz "),t("span",{class:"token operator"},"="),p(),t("span",{class:"token string"},"'qux'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token punctuation"},"}"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br")])],-1),En=t("p",null,"上面示例中，参数对象opts如果不存在属性foo和属性baz，则为这两个属性设置默认值。有了“Null 赋值运算符”以后，就可以统一写成下面这样。",-1),Vn=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"function"),p(),t("span",{class:"token function"},"example"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"opts"),t("span",{class:"token punctuation"},")"),p(),t("span",{class:"token punctuation"},"{"),p("\n  opts"),t("span",{class:"token punctuation"},"."),p("foo "),t("span",{class:"token operator"},"??="),p(),t("span",{class:"token string"},"'bar'"),t("span",{class:"token punctuation"},";"),p("\n  opts"),t("span",{class:"token punctuation"},"."),p("baz "),t("span",{class:"token operator"},"??="),p(),t("span",{class:"token string"},"'qux'"),t("span",{class:"token punctuation"},";"),p("\n"),t("span",{class:"token punctuation"},"}"),p("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br")])],-1);var qn=n(u,[["render",function(n,o,t,p,r,u){const qn=s("code-block");return c(),a("div",null,[i,e(qn,{showAction:!1},{default:l((()=>[k])),_:1}),b,e(qn,{showAction:!1},{default:l((()=>[m])),_:1}),d,g,e(qn,{showAction:!1},{default:l((()=>[f])),_:1}),h,w,e(qn,{showAction:!1},{default:l((()=>[v])),_:1}),y,x,e(qn,{showAction:!1},{default:l((()=>[_])),_:1}),A,e(qn,{showAction:!1},{default:l((()=>[j])),_:1}),N,S,e(qn,{showAction:!1},{default:l((()=>[I])),_:1}),T,D,e(qn,{showAction:!1},{default:l((()=>[E])),_:1}),V,q,C,F,e(qn,{showAction:!1},{default:l((()=>[z])),_:1}),R,G,e(qn,{showAction:!1},{default:l((()=>[P])),_:1}),W,H,U,Z,e(qn,{showAction:!1},{default:l((()=>[B])),_:1}),J,K,L,e(qn,{showAction:!1},{default:l((()=>[M])),_:1}),O,Q,X,Y,e(qn,{showAction:!1},{default:l((()=>[$])),_:1}),nn,sn,an,en,e(qn,{showAction:!1},{default:l((()=>[ln])),_:1}),on,tn,e(qn,{showAction:!1},{default:l((()=>[pn])),_:1}),cn,rn,e(qn,{showAction:!1},{default:l((()=>[un])),_:1}),kn,bn,e(qn,{showAction:!1},{default:l((()=>[mn])),_:1}),dn,e(qn,{showAction:!1},{default:l((()=>[gn])),_:1}),fn,hn,e(qn,{showAction:!1},{default:l((()=>[wn])),_:1}),vn,e(qn,{showAction:!1},{default:l((()=>[yn])),_:1}),xn,_n,e(qn,{showAction:!1},{default:l((()=>[An])),_:1}),jn,Nn,e(qn,{showAction:!1},{default:l((()=>[Sn])),_:1}),In,Tn,e(qn,{showAction:!1},{default:l((()=>[Dn])),_:1}),En,e(qn,{showAction:!1},{default:l((()=>[Vn])),_:1})])}]]);export{r as __pageData,qn as default};
