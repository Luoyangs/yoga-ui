import{_ as n,r as t,c as l,a as r,w as o,f as s,e,b as a,o as p}from"./app.5978bb01.js";const I='{"title":"\u4E3AGithub Page\u96C6\u6210Travis CI","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5199\u5728\u524D\u9762","slug":"\u5199\u5728\u524D\u9762"},{"level":2,"title":"\u4F7F\u7528Travis CI\u7684\u8FC7\u7A0B\uFF1A","slug":"\u4F7F\u7528travis-ci\u7684\u8FC7\u7A0B\uFF1A"},{"level":2,"title":"\u914D\u7F6EGITHUB_TOKEN","slug":"\u914D\u7F6Egithub-token"},{"level":2,"title":"\u542F\u7528Github Pages","slug":"\u542F\u7528github-pages"}],"relativePath":"learns/deploy/add-travis-ci.md","lastUpdated":1645243365220}',c={},b=s('<p><div class="table-of-contents"><ul><li><a href="#\u5199\u5728\u524D\u9762">\u5199\u5728\u524D\u9762</a></li><li><a href="#\u4F7F\u7528travis-ci\u7684\u8FC7\u7A0B\uFF1A">\u4F7F\u7528Travis CI\u7684\u8FC7\u7A0B\uFF1A</a></li><li><a href="#\u914D\u7F6Egithub-token">\u914D\u7F6EGITHUB_TOKEN</a></li><li><a href="#\u542F\u7528github-pages">\u542F\u7528Github Pages</a></li></ul></div></p><h1 id="\u4E3Agithub-page\u96C6\u6210travis-ci" tabindex="-1">\u4E3AGithub Page\u96C6\u6210Travis CI <a class="header-anchor" href="#\u4E3Agithub-page\u96C6\u6210travis-ci" aria-hidden="true">#</a></h1><h2 id="\u5199\u5728\u524D\u9762" tabindex="-1">\u5199\u5728\u524D\u9762 <a class="header-anchor" href="#\u5199\u5728\u524D\u9762" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u7ED9\u7F16\u5199\u7684vue libs\u589E\u52A0\u4E00\u4E2A\u53EF\u9884\u89C8\u7684demo\u7AD9\u70B9\uFF0C\u91C7\u7528\u4E86<a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Github Pages</a>, \u53EF\u4EE5\u5C06\u7F16\u8BD1\u597D\u7684\u9759\u6001html\u4E0A\u4F20\u5230github\u514D\u8D39\u90E8\u7F72\u3002</p><p>\u4F46\u662F\u6BCF\u6B21\u624B\u52A8\u90E8\u7F72\u90FD\u9700\u8981\u5728\u672C\u5730\u5148\u7F16\u8BD1vue libs\u7684\u6E90\u7801\uFF0C\u7136\u540E\u751F\u6210demo\u7684\u5185\u5BB9\uFF0C\u6700\u540E\u7F16\u8BD1demo\u624D\u751F\u6210\u9759\u6001\u7684html\u3002\u8FD9\u4E2D\u95F4\u7684\u8FC7\u7A0B\u5B8C\u5168\u662F\u53EF\u590D\u5236\u7684\uFF0C\u56E0\u6B64\u53EF\u4EE5\u501F\u52A9\u96C6\u6210\u5DE5\u5177\u8FDB\u884C\u81EA\u52A8\u5316\u90E8\u7F72\u3002</p><p><a href="https://app.travis-ci.com/" target="_blank" rel="noopener noreferrer">Travis CI</a>\u529F\u80FD\u5F3A\u5927\uFF0C\u64CD\u4F5C\u7B80\u5355\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C<a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noopener noreferrer">GitLab CI/CD</a>\u7684\u529F\u80FD\u3002</p><h2 id="\u4F7F\u7528travis-ci\u7684\u8FC7\u7A0B\uFF1A" tabindex="-1">\u4F7F\u7528Travis CI\u7684\u8FC7\u7A0B\uFF1A <a class="header-anchor" href="#\u4F7F\u7528travis-ci\u7684\u8FC7\u7A0B\uFF1A" aria-hidden="true">#</a></h2><ul><li>\u6CE8\u518C<a href="https://app.travis-ci.com/" target="_blank" rel="noopener noreferrer">Travis</a>\u8D26\u53F7, \u53EF\u4EE5\u4F7F\u7528github\u8D26\u53F7\u767B\u5F55</li><li>\u8FDB\u5165\u8BBE\u7F6E\u9875\u9762\uFF0C&quot;GitHub Apps Integration&quot;\u70B9\u51FB\u201DActivate\u201C\u8FDB\u884Cgithub repositories\u6388\u6743\uFF0C\u8FD9\u91CC\u4F1A\u8DF3\u8F6C\u5230github</li><li>\u8F93\u5165github\u5BC6\u7801\uFF0C\u4F1A\u8DF3\u8F6C\u5230\u201Dsettings/installations\u201C</li><li>\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230Travis CI\u7684\u914D\u7F6E\uFF0C\u201DRepository access\u201C\u91CC\u9762\u53EF\u4EE5\u914D\u7F6E\u4F60\u60F3\u6388\u6743\u7684github project</li><li>\u7136\u540E\u70B9\u51FB\u201DApprove and install\u201C</li><li>\u7A0D\u7B49\u4E00\u4F1A\u5C31\u53EF\u4EE5\u5B8C\u6210\u7ED1\u5B9A</li></ul><p>\u4E0A\u9762\u662F\u7ED1\u5B9ATravis CI\u548CGithub\u7684\u8FC7\u7A0B\uFF0C\u4F46\u662F\u8981\u5728\u9879\u76EE\u91CC\u9762\u4F7F\u7528Travis CI\uFF0C\u8FD8\u9700\u8981\u7ED9\u9879\u76EE\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6.travis.yml</p>',9),u=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[a(`bunlanguage: node_js
node_js:
  - lts/*
install:
  - `),e("span",{class:"token function"},"yarn"),a(),e("span",{class:"token function"},"install"),a(`
before_script:
  - `),e("span",{class:"token function"},"rm"),a(` -rf docs/.vitepress/dist
  - node bin/deploy.js
script:
  - `),e("span",{class:"token function"},"yarn"),a(` build
  - `),e("span",{class:"token assign-left variable"},"ENV"),e("span",{class:"token operator"},"="),a("prod "),e("span",{class:"token function"},"yarn"),a(` vitepress build docs
  - node bin/append-meta.js
deploy:
  provider: pages
  skip_cleanup: `),e("span",{class:"token boolean"},"true"),a(`
  local_dir: docs/.vitepress/dist
  github_token: `),e("span",{class:"token variable"},"$GITHUB_TOKEN"),a(`
  keep_history: `),e("span",{class:"token boolean"},"false"),a(`
  on:
    branch: master
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br")])],-1),h=s('<h2 id="\u914D\u7F6Egithub-token" tabindex="-1">\u914D\u7F6EGITHUB_TOKEN <a class="header-anchor" href="#\u914D\u7F6Egithub-token" aria-hidden="true">#</a></h2><p>\u811A\u672C\u5185\u5BB9\u4E00\u76EE\u4E86\u7136\uFF0C\u552F\u4E00\u9700\u8981\u5907\u6CE8\u7684\u662F\u53D8\u91CF$GITHUB_TOKEN\u7684\u914D\u7F6E\u3002</p><ul><li>\u8FDB\u5165Github Repository</li><li>\u70B9\u51FB\u53F3\u4E0A\u89D2\u5934\u50CF\uFF0C\u8FDB\u5165setting</li><li>\u8FDB\u5165&quot;Developer settings&quot;</li><li>\u9009\u62E9\u201DPersonal access tokens\u201C</li><li>\u70B9\u51FB\u201DGenerate new token\u201C\uFF0C\u586B\u5199\u4E00\u4E9B\u5907\u6CE8\u4FE1\u606F\uFF0C\u7136\u540E\u70B9\u51FB\u201DGenerate token\u201C</li><li>\u590D\u5236\u751F\u6210\u7684token, \u8FDB\u5165\u201DTravis CI\u201C</li><li>\u9009\u62E9\u9700\u8981\u914D\u7F6E\u7684\u9879\u76EE\uFF0C\u70B9\u51FB\u201DMore options\u201C\u8FDB\u5165\u201Dsettings\u201C</li><li>\u9009\u62E9&quot;Environment Variables&quot;\uFF0C\u6DFB\u52A0\u4E00\u6761\u914D\u7F6E\uFF0Cname\u662FGITHUB_TOKEN\uFF0Cvalue\u5C31\u662F\u4F60\u590D\u5236\u7684token, \u70B9\u51FB\u201Dadd\u201C\u4FDD\u5B58</li><li>\u56DE\u5230\u9879\u76EE\uFF0C\u91CD\u65B0\u63D0\u4EA4\u4EE3\u7801\u5230\u201Dmaster\u201C\u5206\u652F\uFF0C\u5C31\u4F1A\u770B\u5230Travis CI\u5F00\u59CB\u5DE5\u4F5C\u4E86\u3002</li><li>Travis CI\u6210\u529F\u540E\uFF0C\u4F60\u4F1A\u770B\u5230github project\u4E0B\u9762\u591A\u4E86\u4E00\u4E2A\u201Dgh-pages\u201C\u7684\u5206\u652F\uFF0C\u91CC\u9762\u5C31\u662FTravis CI \u7F16\u8BD1\u7684\u9759\u6001html.</li></ul><h2 id="\u542F\u7528github-pages" tabindex="-1">\u542F\u7528Github Pages <a class="header-anchor" href="#\u542F\u7528github-pages" aria-hidden="true">#</a></h2><p>github page\u53EF\u4EE5\u662Fhtml\u4E5F\u53EF\u4EE5\u662F.md\u683C\u5F0F\u7684\u5185\u5BB9\u3002\u8FD9\u91CC\u6211\u4EEC\u4E3B\u8981\u914D\u7F6Ehtml\u683C\u5F0F\u7684\u7AD9\u70B9\u3002</p><ul><li>\u8FDB\u5165github project\u7684\u201Dsetting\u201C</li><li>\u9009\u62E9\u201Dpages\u201C, \u53EF\u4EE5\u770B\u5230GitHub Pages</li><li>\u5728\u201DSource\u201C\u91CC\u9762\u53EF\u4EE5\u914D\u7F6EGitHub Pages\u7684\u6E90\u7801\u4ED3\u5E93</li><li>\u8FD9\u91CC\u6211\u4EEC\u76F4\u63A5\u9009\u62E9\u521A\u521ATravis CI\u81EA\u52A8\u90E8\u7F72\u751F\u6210\u7684gh-pages\u7684\u6839\u76EE\u5F55</li><li>\u53EF\u4EE5\u9009\u62E9\u4E3B\u9898\uFF0C\u6211\u4EEC\u8FD9\u91CC\u662F\u81EA\u5DF1\u8BBE\u7F6E\u7F51\u7AD9\u6837\u5F0F\uFF0C\u5C31\u4E0D\u7528\u5B83\u7684\u4E3B\u9898\u4E86</li><li>\u7136\u540E\u70B9\u51FBsave\u5C31\u53EF\u4EE5\u5B8C\u6210, \u4F1A\u770B\u5230github\u7ED9\u4F60\u751F\u6210\u7684url</li><li>github pages\u4F1A\u81EA\u52A8\u90E8\u7F72</li></ul>',6);function d(g,_,v,m,T,f){const i=t("code-block");return p(),l("div",null,[b,r(i,{showAction:!1},{default:o(()=>[u]),_:1}),h])}var C=n(c,[["render",d]]);export{I as __pageData,C as default};