import{_ as o,r as i,o as l,c as r,a as n,b as a,e as t,d as s}from"./app.69546fb1.js";const c={},p=t(`<h1 id="_6-\u9879\u76EE\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_6-\u9879\u76EE\u90E8\u7F72" aria-hidden="true">#</a> 6. \u9879\u76EE\u90E8\u7F72</h1><h3 id="_6-1-\u96C6\u6210\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_6-1-\u96C6\u6210\u90E8\u7F72" aria-hidden="true">#</a> 6.1 \u96C6\u6210\u90E8\u7F72</h3><ul><li>\u5206\u522B\u5728\\source\\vue\\xzs-student\u76EE\u5F55\u548Csource\\vue\\xzs-admin\u76EE\u5F55\uFF0C\u6267\u884C\u524D\u7AEF\u6253\u5305\u547D\u4EE4</li></ul><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm install --registry https://registry.npm.taobao.org  
npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=n("li",null,"\u6253\u5305\u540E\u7684\u76EE\u5F55\u4E3Astudent\u548Cadmin",-1),u=n("li",null,"\u5C06\u6587\u4EF6\u653E\u5230\\source\\xzs\\src\\main\\resources\\static\u4E0B\uFF0C\u7136\u540E\u5C06java\u7A0B\u5E8F\u6253\u5305\u6210jar\u5305",-1),_=n("li",null,"\u4FEE\u6539application-prod.yml\u4E2D\u7684datasource\u5730\u5740",-1),h=s("\u5B66\u751F\u7AEF\u8BBF\u95EE\u5730\u5740\u4E3A\uFF1A"),k={href:"http://ip:8000/student",target:"_blank",rel:"noopener noreferrer"},m=s("http://ip:8000/student"),v=s("\u7BA1\u7406\u5458\u7AEF\u8BBF\u95EE\u5730\u5740\u4E3A\uFF1A"),b={href:"http://ip:8000/admin",target:"_blank",rel:"noopener noreferrer"},g=s("http://ip:8000/admin"),x=n("li",null,"\u6267\u884C\u4E0B\u5217\u547D\u4EE4\uFF0C\u8FD0\u884C\u7A0B\u5E8F",-1),f=t(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>nohup java <span class="token operator">-</span><span class="token class-name">Duser</span><span class="token punctuation">.</span>timezone<span class="token operator">=</span><span class="token class-name">Asia</span><span class="token operator">/</span><span class="token class-name">Shanghai</span> <span class="token operator">-</span>jar <span class="token operator">-</span><span class="token class-name">Dspring</span><span class="token punctuation">.</span>profiles<span class="token punctuation">.</span>active<span class="token operator">=</span>prod  xzs<span class="token operator">-</span><span class="token number">3.9</span><span class="token number">.0</span><span class="token punctuation">.</span>jar  <span class="token operator">&gt;</span> start1<span class="token punctuation">.</span>log  <span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token number">1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-2-\u524D\u540E\u7AEF\u5206\u79BB\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_6-2-\u524D\u540E\u7AEF\u5206\u79BB\u90E8\u7F72" aria-hidden="true">#</a> 6.2 \u524D\u540E\u7AEF\u5206\u79BB\u90E8\u7F72</h3>`,2),y=n("li",null,"\u91C7\u7528\u524D\u540E\u7AEF\u5206\u79BB\u65B9\u5F0F\u90E8\u7F72\uFF0C\u540E\u7AEF\u542F\u52A8\u548C\u90E8\u7F72\u65B9\u5F0F1\u4E00\u6837",-1),z=n("li",null,"\u524D\u7AEF\u91C7\u7528nginx\u6765\u88C5\u8F7D\u9759\u6001\u9875\u9762,\u5148\u521B\u5EFA/usr/local/xzs/web/\u76EE\u5F55\uFF0C\u7136\u540E\u5C06\u6253\u5305\u540E\u7684student\u3001admin\u653E\u5230\u6B64\u76EE\u5F55\u4E0B",-1),w=n("li",null,"\u9875\u9762\u8BBF\u95EE\u7AEF\u53E3\u4E3A8001\uFF0C\u6CE8\u610F\u68C0\u67E5\u9632\u706B\u5899\u7AEF\u53E3\u662F\u5426\u6253\u5F00",-1),j=s("\u5B66\u751F\u7AEF\u8BBF\u95EE\u5730\u5740\u4E3A\uFF1A"),N={href:"http://ip:8001/student",target:"_blank",rel:"noopener noreferrer"},V=s("http://ip:8001/student"),B=s("\u7BA1\u7406\u5458\u7AEF\u8BBF\u95EE\u5730\u5740\u4E3A\uFF1A"),E={href:"http://ip:8001/admin",target:"_blank",rel:"noopener noreferrer"},D=s("http://ip:8001/admin"),I=n("li",null,"nginx\u914D\u7F6E\u5982\u4E0B\uFF1A",-1),L=t(`<div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">8001</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> xzs</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/local/xzs/web/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
       <span class="token directive"><span class="token keyword">proxy_pass</span>  http://localhost:8000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-docker\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_6-3-docker\u90E8\u7F72" aria-hidden="true">#</a> 6.3 docker\u90E8\u7F72</h3>`,2),S=n("li",null,"\u51C6\u5907\u597Dcentos\u670D\u52A1\u5668",-1),q=n("li",null,"\u5148\u68C0\u67E5\u670D\u52A1\u5668\u7AEF\u53E3\u3001ip\u8F6C\u53D1\u7684\u662F\u5426\u914D\u7F6E\u6B63\u786E\uFF0C\u5426\u5219\u65E0\u6CD5\u8BBF\u95EE\u5230docker\u5185\u90E8",-1),A=n("li",null,"docker\u5185\u90E8\u955C\u50CF\u5DF2\u7ECF\u5B89\u88C5\u4E86java\u3001mysql,\u5747\u5DF2\u914D\u7F6E\u597D\uFF0C\u65E0\u9700\u5176\u4ED6\u64CD\u4F5C",-1),C=n("li",null,"\u6267\u884C\u4E0B\u5217docker\u547D\u4EE4\uFF0C\u62C9\u53D6\u955C\u50CF\uFF0C\u542F\u52A8\u5BB9\u5668",-1),T=s("\u5B66\u751F\u7AEF\u8BBF\u95EE\u5730\u5740\u4E3A\uFF1A"),F={href:"http://ip:8000/student",target:"_blank",rel:"noopener noreferrer"},G=s("http://ip:8000/student"),H=s("\u7BA1\u7406\u5458\u7AEF\u8BBF\u95EE\u5730\u5740\u4E3A\uFF1A"),J={href:"http://ip:8000/admin",target:"_blank",rel:"noopener noreferrer"},K=s("http://ip:8000/admin"),M=t(`<div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>docker pull  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.9.0
docker run -d --name xzs --privileged -it  -d -p 8000:8000 -v /etc/localtime:/etc/localtime:ro  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.9.0 /usr/sbin/init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function O(P,Q){const e=i("ExternalLinkIcon");return l(),r("div",null,[p,n("ul",null,[d,u,_,n("li",null,[h,n("a",k,[m,a(e)])]),n("li",null,[v,n("a",b,[g,a(e)])]),x]),f,n("ul",null,[y,z,w,n("li",null,[j,n("a",N,[V,a(e)])]),n("li",null,[B,n("a",E,[D,a(e)])]),I]),L,n("ul",null,[S,q,A,C,n("li",null,[T,n("a",F,[G,a(e)])]),n("li",null,[H,n("a",J,[K,a(e)])])]),M])}const U=o(c,[["render",O],["__file","deploy.html.vue"]]);export{U as default};
