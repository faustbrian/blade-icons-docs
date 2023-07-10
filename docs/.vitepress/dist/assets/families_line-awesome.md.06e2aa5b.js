import{_ as a,o as e,c as s,V as o}from"./chunks/framework.d3b95951.js";const D=JSON.parse('{"title":"Line Awesome","description":"","frontmatter":{},"headers":[],"relativePath":"families/line-awesome.md","filePath":"families/line-awesome.md"}'),n={name:"families/line-awesome.md"},l=o('<h1 id="line-awesome" tabindex="-1">Line Awesome <a class="header-anchor" href="#line-awesome" aria-label="Permalink to &quot;Line Awesome&quot;">​</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This package requires <a href="https://www.php.net/" target="_blank" rel="noreferrer">PHP</a> 8.2 or later, and it supports <a href="https://laravel.com/" target="_blank" rel="noreferrer">Laravel</a> 10 or later.</p></div><p>To get the latest version, simply require the project using <a href="https://getcomposer.org/" target="_blank" rel="noreferrer">Composer</a>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bombenprodukt/blade-icons-line-awesome</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The prefix for all icon families in this package is <code>line-awesome</code>. Please refer to the <a href="https://github.com/faustbrian/blade-icons-line-awesome/tree/main/resources/svg" target="_blank" rel="noreferrer">resources/svg</a> directory for a list of available styles and icons.</p></div><h3 id="view-component" tabindex="-1">View Component <a class="header-anchor" href="#view-component" aria-label="Permalink to &quot;View Component&quot;">​</a></h3><div class="language-blade"><button title="Copy Code" class="copy"></button><span class="lang">blade</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-line-awesome:{{</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">}}-{{</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">}}</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h3 id="dynamic-component" tabindex="-1">Dynamic Component <a class="header-anchor" href="#dynamic-component" aria-label="Permalink to &quot;Dynamic Component&quot;">​</a></h3><div class="language-blade"><button title="Copy Code" class="copy"></button><span class="lang">blade</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-dynamic-component</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">component</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">line-awesome:</span><span style="color:#82AAFF;">{{</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">style</span><span style="color:#C3E88D;"> </span><span style="color:#82AAFF;">}}</span><span style="color:#C3E88D;">-</span><span style="color:#82AAFF;">{{</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">icon</span><span style="color:#C3E88D;"> </span><span style="color:#82AAFF;">}}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div>',11),t=[l];function p(r,c,i,m,d,h){return e(),s("div",null,t)}const u=a(n,[["render",p]]);export{D as __pageData,u as default};