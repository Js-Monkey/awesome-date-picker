import{o as e,c as t,y as r}from"./vendor.2128ca7e.js";const o={class:"markdown-body"},n=r('<h1>START</h1><p>First, use <strong>npm</strong> or <strong>yarn</strong> to install <em>better-datepicker</em></p><pre><code class="language-shell">npm install better-datepicker\nyarn add better-datepicker\n</code></pre><p>Then, import <em>better-datepicker</em> and css</p><pre><code class="language-js">import  {createDatePicker} from &#39;better-datepicker&#39;\nimport &#39;better-datepicker/dist/index.css&#39;\n</code></pre><h2>CreateDatePicker</h2><p>createDatePicker accepts two parameters. The first is the InputElement, and the second is the configuration item.</p><pre><code>    const input = document.querySelector(&#39;#input&#39;)\n    const picker = createDatePicker(input,{\n           type: &#39;week&#39;,\n           offset: 20,\n           placement: &#39;bottom&#39; \n    })\n</code></pre><h2>defaultOptions</h2><pre><code>import {locale,defaultOptions} from &#39;better-datepicker&#39;\ndefaultOptions({\n    themeColor: &#39;#1890ff&#39;,\n    rangeBgColor: &#39;#e6f7ff&#39;,\n    tdColor: &#39;#5f5f5f&#39;,\n    thColor: &#39;#5f5f5f&#39;\n})\n</code></pre><h2>locale</h2><pre><code>import {locale} from &#39;better-datepicker&#39;\nimport ZH from &#39;better-datepicker/dist/locale_es/zh-cn&#39;\nlocale(ZH)\n</code></pre>',12),a={expose:[],setup:r=>(r,a)=>(e(),t("div",o,[n]))};export default a;
