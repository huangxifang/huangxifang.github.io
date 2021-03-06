import{_ as n,c as s}from"./app.44f8184c.js";const a={},e=s(`<h1 id="_49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684css\u6837\u5F0F\u6E05\u5355\u6574\u7406" tabindex="-1"><a class="header-anchor" href="#_49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684css\u6837\u5F0F\u6E05\u5355\u6574\u7406" aria-hidden="true">#</a> 49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684CSS\u6837\u5F0F\u6E05\u5355\u6574\u7406</h1><h3 id="_1\u3001\u6587\u5B57\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6587\u5B57\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7" aria-hidden="true">#</a> <strong>1\u3001\u6587\u5B57\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7</strong></h3><p>\u5355\u884C\u6587\u672C\u7684\u6EA2\u51FA\u663E\u793A\u7701\u7565\u53F7\uFF08\u4E00\u5B9A\u8981\u6709\u5BBD\u5EA6\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code> <span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>200rpx<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u591A\u884C\u6587\u672C\u6EA2\u51FA\u663E\u793A\u7701\u7565\u53F7</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2\u3001\u4E2D\u82F1\u6587\u81EA\u52A8\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E2D\u82F1\u6587\u81EA\u52A8\u6362\u884C" aria-hidden="true">#</a> <strong>2\u3001\u4E2D\u82F1\u6587\u81EA\u52A8\u6362\u884C</strong></h3><p>word-break:break-all;\u53EA\u5BF9\u82F1\u6587\u8D77\u4F5C\u7528\uFF0C\u4EE5\u5B57\u6BCD\u4F5C\u4E3A\u6362\u884C\u4F9D\u636Eword-wrap:break-word; \u53EA\u5BF9\u82F1\u6587\u8D77\u4F5C\u7528\uFF0C\u4EE5\u5355\u8BCD\u4F5C\u4E3A\u6362\u884C\u4F9D\u636Ewhite-space:pre-wrap; \u53EA\u5BF9\u4E2D\u6587\u8D77\u4F5C\u7528\uFF0C\u5F3A\u5236\u6362\u884Cwhite-space:nowrap; \u5F3A\u5236\u4E0D\u6362\u884C\uFF0C\u90FD\u8D77\u4F5C\u7528</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
  <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//\u4E0D\u6362\u884C
.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//\u81EA\u52A8\u6362\u884C
.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//\u5F3A\u5236\u6362\u884C
.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span>break-all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_3\u3001\u6587\u5B57\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u6587\u5B57\u9634\u5F71" aria-hidden="true">#</a> <strong>3\u3001\u6587\u5B57\u9634\u5F71</strong></h3><p>text-shadow \u4E3A\u7F51\u9875\u5B57\u4F53\u6DFB\u52A0\u9634\u5F71\uFF0C\u901A\u8FC7\u5BF9text-shadow\u5C5E\u6027\u8BBE\u7F6E\u76F8\u5173\u7684\u5C5E\u6027\u503C\u3002\u5C5E\u6027\u4E0E\u503C\u7684\u8BF4\u660E\u5982\u4E0B\uFF1Atext-shadow: [X-offset,Y-offset,Blur,Color];</p><blockquote><p>X-offset:\u6307\u9634\u5F71\u5C45\u4E8E\u5B57\u4F53\u6C34\u5E73\u504F\u79FB\u7684\u4F4D\u7F6E\u3002 Y-offset:\u6307\u9634\u5F71\u5C45\u4E8E\u5B57\u4F53\u5782\u76F4\u504F\u79FB\u7684\u4F4D\u7F6E\u3002 Blur:\u6307\u9634\u5F71\u7684\u6A21\u7CCA\u503C\u3002 color:\u6307\u9634\u5F71\u7684\u989C\u8272\uFF1B</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1</span><span class="token punctuation">{</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 5px 5px 5px #FF0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4\u3001\u8BBE\u7F6Eplaceholder\u7684\u5B57\u4F53\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u8BBE\u7F6Eplaceholder\u7684\u5B57\u4F53\u6837\u5F0F" aria-hidden="true">#</a> <strong>4\u3001\u8BBE\u7F6Eplaceholder\u7684\u5B57\u4F53\u6837\u5F0F</strong></h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input::-webkit-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Chrome/Opera/Safari */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 19+ */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:-ms-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* IE 10+ */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 18- */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_5\u3001\u4E0D\u56FA\u5B9A\u9AD8\u5BBD-div-\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u4E0D\u56FA\u5B9A\u9AD8\u5BBD-div-\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u6CD5" aria-hidden="true">#</a> <strong>5\u3001\u4E0D\u56FA\u5B9A\u9AD8\u5BBD div \u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u6CD5</strong></h3><p>\u65B9\u6CD5\u4E00\uFF1A\u4F2A\u5143\u7D20\u548C inline-block / vertical-align\uFF08\u517C\u5BB9 IE8\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box-wrap:before</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> -0.25em<span class="token punctuation">;</span> //\u5FAE\u8C03\u6574\u7A7A\u683C
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
     <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
     <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1Aflex(\u4E0D\u517C\u5BB9 ie8 \u4EE5\u4E0B)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.box-wrap {
     height: 300px;
     justify-content:center;
     align-items:center;
     display:flex;
     background-color:#666;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u65B9\u6CD5\u4E09\uFF1Atransform(\u4E0D\u517C\u5BB9 ie8 \u4EE5\u4E0B)</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code> <span class="token selector">.box-wrap</span> <span class="token punctuation">{</span>
     <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
     <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
     <span class="token property">background</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u65B9\u6CD5\u56DB\uFF1A\u8BBE\u7F6E margin:auto\uFF08\u8BE5\u65B9\u6CD5\u5F97\u4E25\u683C\u610F\u4E49\u4E0A\u7684\u975E\u56FA\u5B9A\u5BBD\u9AD8\uFF0C\u800C\u662F 50%\u7684\u7236\u7EA7\u7684\u5BBD\u9AD8\u3002\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box-wrap</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-content</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#ff0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_6\u3001\u89E3\u51B3ios\u9875\u9762\u6ED1\u52A8\u5361\u987F" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u89E3\u51B3ios\u9875\u9762\u6ED1\u52A8\u5361\u987F" aria-hidden="true">#</a> <strong>6\u3001\u89E3\u51B3IOS\u9875\u9762\u6ED1\u52A8\u5361\u987F</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>body,html{
    -webkit-overflow-scrolling: touch;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_7\u3001\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F" aria-hidden="true">#</a> <strong>7\u3001\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.test::-webkit-scrollbar{
  /*\u6EDA\u52A8\u6761\u6574\u4F53\u6837\u5F0F*/
  width : 10px;  /*\u9AD8\u5BBD\u5206\u522B\u5BF9\u5E94\u6A2A\u7AD6\u6EDA\u52A8\u6761\u7684\u5C3A\u5BF8*/
  height: 1px;
}
.test::-webkit-scrollbar-thumb {
  /*\u6EDA\u52A8\u6761\u91CC\u9762\u5C0F\u65B9\u5757*/
  border-radius   : 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
}
.test::-webkit-scrollbar-track {
  /*\u6EDA\u52A8\u6761\u91CC\u9762\u8F68\u9053*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_8\u3001\u5B9E\u73B0\u9690\u85CF\u6EDA\u52A8\u6761\u540C\u65F6\u53C8\u53EF\u4EE5\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u5B9E\u73B0\u9690\u85CF\u6EDA\u52A8\u6761\u540C\u65F6\u53C8\u53EF\u4EE5\u6EDA\u52A8" aria-hidden="true">#</a> <strong>8\u3001\u5B9E\u73B0\u9690\u85CF\u6EDA\u52A8\u6761\u540C\u65F6\u53C8\u53EF\u4EE5\u6EDA\u52A8</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.demo::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.demo {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_9\u3001css-\u7ED8\u5236\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#_9\u3001css-\u7ED8\u5236\u4E09\u89D2\u5F62" aria-hidden="true">#</a> <strong>9\u3001css \u7ED8\u5236\u4E09\u89D2\u5F62</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div {
    width: 0;
    height: 0;
    border-width: 0 40px 40px;
    border-style: solid;
    border-color: transparent transparent red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A<img src="https://mmbiz.qpic.cn/mmbiz_jpg/eXCSRjyNYcYERnXdE2gkJTCeTUr3cHkgXey6ogtnicicXQLkubiaG2diahNcthLLR9uvrRLG2C3AsAQ2KdAH1EF5eg/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"> \u5B9E\u73B0\u5E26\u8FB9\u6846\u7684\u4E09\u89D2\u5F62\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;blue&quot;&gt;&lt;div&gt;

#blue {
    position:relative;
    width: 0;
    height: 0;
    border-width: 0 40px 40px;
    border-style: solid;
    border-color: transparent transparent blue;
}
#blue:after {
    content: &quot;&quot;;
    position: absolute;
    top: 1px;
    left: -38px;
    border-width: 0 38px 38px;
    border-style: solid;
    border-color: transparent transparent yellow;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A<img src="https://mmbiz.qpic.cn/mmbiz_jpg/eXCSRjyNYcYERnXdE2gkJTCeTUr3cHkgO8leHDaur8qRsJawNUE4KicC1lZr6uYTZV5VmiahKq5Vic9UklkQepKQA/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"> \u6CE8: \u5982\u679C\u60F3\u7ED8\u5236\u53F3\u76F4\u89D2\u4E09\u89D2\uFF0C\u5219\u5C06\u5DE6 border \u8BBE\u7F6E\u4E3A 0\uFF1B\u5982\u679C\u60F3\u7ED8\u5236\u5DE6\u76F4\u89D2\u4E09\u89D2\uFF0C\u5C06\u53F3 border \u8BBE\u7F6E\u4E3A 0 \u5373\u53EF\uFF08\u5176\u5B83\u60C5\u51B5\u540C\u7406\uFF09\u3002</p><h3 id="_10\u3001table\u8868\u683C\u8FB9\u6846\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_10\u3001table\u8868\u683C\u8FB9\u6846\u5408\u5E76" aria-hidden="true">#</a> <strong>10\u3001Table\u8868\u683C\u8FB9\u6846\u5408\u5E76</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>table,tr,td{
  border: 1px solid #666;
}
table{
  border-collapse: collapse;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_11\u3001css-\u9009\u53D6\u7B2C-n-\u4E2A\u6807\u7B7E\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_11\u3001css-\u9009\u53D6\u7B2C-n-\u4E2A\u6807\u7B7E\u5143\u7D20" aria-hidden="true">#</a> <strong>11\u3001css \u9009\u53D6\u7B2C n \u4E2A\u6807\u7B7E\u5143\u7D20</strong></h3><blockquote><p>first-child first-child \u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u6807\u7B7E\u3002 last-child last-child \u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u6807\u7B7E nth-child(3) \u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u7B2C 3 \u4E2A\u6807\u7B7E nth-child(2n) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u5076\u6570\u6807\u7B7E nth-child(2n-1) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u5947\u6570\u6807\u7B7E nth-child(n+3) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u6807\u7B7E\u4ECE\u7B2C 3 \u4E2A\u5F00\u59CB\u5230\u6700\u540E\u3002 nth-child(-n+3) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u6807\u7B7E\u4ECE 0 \u5230 3\uFF0C\u5373\u5C0F\u4E8E 3 \u7684\u6807\u7B7E\u3002 nth-last-child(3) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u5012\u6570\u7B2C 3 \u4E2A\u6807\u7B7E\u3002</p></blockquote><p>\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>li:first-child{}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_12\u3001\u79FB\u52A8\u7AEF\u8F6F\u952E\u76D8\u53D8\u4E3A\u641C\u7D22\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_12\u3001\u79FB\u52A8\u7AEF\u8F6F\u952E\u76D8\u53D8\u4E3A\u641C\u7D22\u65B9\u5F0F" aria-hidden="true">#</a> <strong>12\u3001\u79FB\u52A8\u7AEF\u8F6F\u952E\u76D8\u53D8\u4E3A\u641C\u7D22\u65B9\u5F0F</strong></h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8F6F\u952E\u76D8\u4E0A\u8BE5\u952E\u4F4D\u4E3A\u524D\u5F80\u6216\u8005\u786E\u8BA4\u7B49\u6587\u5B57\uFF0C\u8981\u4F7F\u5176\u53D8\u4E3A\u641C\u7D22\u6587\u5B57\uFF0C\u9700\u8981\u5728 input \u4E0A\u52A0\u4E0A type \u58F0\u660E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;form action=&quot;#&quot;&gt;
    &lt;input type=&quot;search&quot; placeholder=&quot;\u8BF7\u8F93\u5165...&quot; name=&quot;search&quot; /&gt;
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9700\u8981\u4E00\u4E2A form \u6807\u7B7E\u5957\u8D77\u6765,\u5E76\u4E14\u8BBE\u7F6E action \u5C5E\u6027,\u8FD9\u6837\u5199\u5B8C\u4E4B\u540E\u8F93\u5165\u6CD5\u7684\u53F3\u4E0B\u89D2\u5C31\u4F1A\u81EA\u52A8\u53D8\u6210\u641C\u7D22,\u540C\u65F6\uFF0C\u4F7F\u7528\u4E86 search \u7C7B\u578B\u540E\uFF0C\u641C\u7D22\u6846\u4E0A\u4F1A\u9ED8\u8BA4\u81EA\u5E26\u5220\u9664\u6309\u94AE\u3002</p><h3 id="_13\u3001onerror-\u5904\u7406\u56FE\u7247\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#_13\u3001onerror-\u5904\u7406\u56FE\u7247\u5F02\u5E38" aria-hidden="true">#</a> <strong>13\u3001onerror \u5904\u7406\u56FE\u7247\u5F02\u5E38</strong></h3><p>\u4F7F\u7528 onerror \u5F02\u5E38\u5904\u7406\u65F6\uFF0C\u82E5 onerror \u7684\u56FE\u7247\u4E5F\u51FA\u73B0\u95EE\u9898\uFF0C\u5219\u56FE\u7247\u663E\u793A\u4F1A\u9677\u5165\u6B7B\u5FAA\u73AF\uFF0C\u6240\u4EE5\u8981\u5728\u8D4B\u503C\u5F02\u5E38\u56FE\u7247\u4E4B\u540E\uFF0C\u5C06\u5730\u5740\u7F6E\u7A7A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;img onerror=&quot;this.src=&#39;url;this.onerror=null&#39;&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_14\u3001\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_14\u3001\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F" aria-hidden="true">#</a> <strong>14\u3001\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.bg-img{
    background:url(../img/find_pw_on_2.png)  no-repeat center center !important;
    background-size: 27px auto !important;
    /*background-size: 100% 100%;*/
    /*background-size: 50px 100px*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_15\u3001\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#_15\u3001\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD" aria-hidden="true">#</a> <strong>15\u3001\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD</strong></h3><p>\u5355\u8BCDtext-indent\u62AC\u5934\u8DDD\u79BB\uFF0Cletter-spacing\u5B57\u4E0E\u5B57\u95F4\u8DDD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>p{
  text-indent\uFF1A10px\uFF1B//\u5355\u8BCD\u62AC\u5934\u8DDD\u79BB
  letter-spacing\uFF1A10px\uFF1B//\u95F4\u8DDD
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_16\u3001\u5143\u7D20\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55" tabindex="-1"><a class="header-anchor" href="#_16\u3001\u5143\u7D20\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55" aria-hidden="true">#</a> <strong>16\u3001\u5143\u7D20\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55</strong></h3><p>heigth\u5982\u679C\u4F7F\u7528100%\uFF0C\u4F1A\u6839\u636E\u7236\u7EA7\u7684\u9AD8\u5EA6\u6765\u51B3\u5B9A\uFF0C\u6240\u4EE5\u4F7F\u7528100vh\u5355\u4F4D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.dom{
  width:100%;
  height:100vh;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_17\u3001css\u5B9E\u73B0\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#_17\u3001css\u5B9E\u73B0\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50" aria-hidden="true">#</a> <strong>17\u3001CSS\u5B9E\u73B0\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
    text-align: justify;
    text-justify: distribute-all-lines;  //ie6-8
    text-align-last: justify;  //\u4E00\u4E2A\u5757\u6216\u884C\u7684\u6700\u540E\u4E00\u884C\u5BF9\u9F50\u65B9\u5F0F
    -moz-text-align-last: justify;
    -webkit-text-align-last: justify;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_18\u3001\u5B9E\u73B0\u6587\u5B57\u7AD6\u5411\u6392\u7248" tabindex="-1"><a class="header-anchor" href="#_18\u3001\u5B9E\u73B0\u6587\u5B57\u7AD6\u5411\u6392\u7248" aria-hidden="true">#</a> <strong>18\u3001\u5B9E\u73B0\u6587\u5B57\u7AD6\u5411\u6392\u7248</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5355\u5217\u5C55\u793A\u65F6
.wrap {
    width: 25px;
    line-height: 18px;
    height: auto;
    font-size: 12px;
    padding: 8px 5px;
    word-wrap: break-word;/*\u82F1\u6587\u7684\u65F6\u5019\u9700\u8981\u52A0\u4E0A\u8FD9\u53E5\uFF0C\u81EA\u52A8\u6362\u884C*/ 
}
// \u591A\u5217\u5C55\u793A\u65F6
.wrap {
    height: 210px;
    line-height: 30px;
    text-align: justify;
    writing-mode: vertical-lr;  //\u4ECE\u5DE6\u5411\u53F3    
    writing-mode: tb-lr;        //IE\u4ECE\u5DE6\u5411\u53F3
    //writing-mode: vertical-rl;  -- \u4ECE\u53F3\u5411\u5DE6
    //writing-mode: tb-rl;        -- \u4ECE\u53F3\u5411\u5DE6
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_19\u3001\u4F7F\u5143\u7D20\u9F20\u6807\u4E8B\u4EF6\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#_19\u3001\u4F7F\u5143\u7D20\u9F20\u6807\u4E8B\u4EF6\u5931\u6548" aria-hidden="true">#</a> <strong>19\u3001\u4F7F\u5143\u7D20\u9F20\u6807\u4E8B\u4EF6\u5931\u6548</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
  // \u5982\u679C\u6309tab\u80FD\u9009\u4E2D\u8BE5\u5143\u7D20\uFF0C\u5982button\uFF0C\u7136\u540E\u6309\u56DE\u8F66\u8FD8\u662F\u80FD\u6267\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u5982click\u3002
 pointer-events: none;
 cursor: default;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_20\u3001\u7981\u6B62\u7528\u6237\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_20\u3001\u7981\u6B62\u7528\u6237\u9009\u62E9" aria-hidden="true">#</a> <strong>20\u3001\u7981\u6B62\u7528\u6237\u9009\u62E9</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_21\u3001\u4F7F\u7528\u786C\u4EF6\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#_21\u3001\u4F7F\u7528\u786C\u4EF6\u52A0\u901F" aria-hidden="true">#</a> <strong>21\u3001\u4F7F\u7528\u786C\u4EF6\u52A0\u901F</strong></h3><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u7528css\u5F00\u542F\u786C\u4EF6\u52A0\u901F\uFF0C\u4F7FGPU (Graphics Processing Unit) \u53D1\u6325\u529F\u80FD\uFF0C\u4ECE\u800C\u63D0\u5347\u6027\u80FD\u3002\u786C\u4EF6\u52A0\u901F\u5728\u79FB\u52A8\u7AEF\u5C24\u5176\u6709\u7528\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u6709\u6548\u7684\u51CF\u5C11\u8D44\u6E90\u7684\u5229\u7528\u3002 \u76EE\u524D\u4E3B\u6D41\u6D4F\u89C8\u5668\u4F1A\u68C0\u6D4B\u5230\u9875\u9762\u4E2D\u67D0\u4E2ADOM\u5143\u7D20\u5E94\u7528\u4E86\u67D0\u4E9BCSS\u89C4\u5219\u65F6\u5C31\u4F1A\u5F00\u542F\uFF0C\u6700\u663E\u8457\u7684\u7279\u5F81\u7684\u5143\u7D20\u76843D\u53D8\u6362\u3002\u5982\u679C\u4E0D\u4F7F\u75283D\u53D8\u5F62\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u5F0F\u6765\u5F00\u542F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
    transform: translateZ(0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_22\u3001\u9875\u9762\u52A8\u753B\u51FA\u73B0\u95EA\u70C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_22\u3001\u9875\u9762\u52A8\u753B\u51FA\u73B0\u95EA\u70C1\u95EE\u9898" aria-hidden="true">#</a> <strong>22\u3001\u9875\u9762\u52A8\u753B\u51FA\u73B0\u95EA\u70C1\u95EE\u9898</strong></h3><p>\u5728 Chrome and Safari\u4E2D\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528CSS transforms \u6216\u8005 animations\u65F6\u53EF\u80FD\u4F1A\u6709\u9875\u9762\u95EA\u70C1\u7684\u6548\u679C\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u4FEE\u590D\u6B64\u60C5\u51B5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.cube {
   -webkit-backface-visibility: hidden;
   backface-visibility: hidden;
 
   -webkit-perspective: 1000;
   perspective: 1000;
   /* Other transform properties here */
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728webkit\u5185\u6838\u7684\u6D4F\u89C8\u5668\u4E2D\uFF0C\u53E6\u4E00\u4E2A\u884C\u4E4B\u6709\u6548\u7684\u65B9\u6CD5\u662F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.cube {
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
  /* Other transform properties here */
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_23\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_23\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362" aria-hidden="true">#</a> <strong>23\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>p {text-transform: uppercase}  // \u5C06\u6240\u6709\u5B57\u6BCD\u53D8\u6210\u5927\u5199\u5B57\u6BCD
p {text-transform: lowercase}  // \u5C06\u6240\u6709\u5B57\u6BCD\u53D8\u6210\u5C0F\u5199\u5B57\u6BCD
p {text-transform: capitalize} // \u9996\u5B57\u6BCD\u5927\u5199
p {font-variant: small-caps}   // \u5C06\u5B57\u4F53\u53D8\u6210\u5C0F\u578B\u7684\u5927\u5199\u5B57\u6BCD
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_24\u3001\u5C06\u4E00\u4E2A\u5BB9\u5668\u8BBE\u4E3A\u900F\u660E" tabindex="-1"><a class="header-anchor" href="#_24\u3001\u5C06\u4E00\u4E2A\u5BB9\u5668\u8BBE\u4E3A\u900F\u660E" aria-hidden="true">#</a> <strong>24\u3001\u5C06\u4E00\u4E2A\u5BB9\u5668\u8BBE\u4E3A\u900F\u660E</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap { 
  filter:alpha(opacity=50); 
  -moz-opacity:0.5; 
  -khtml-opacity: 0.5; 
  opacity: 0.5; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_25\u3001\u6D88\u9664transition\u95EA\u5C4F" tabindex="-1"><a class="header-anchor" href="#_25\u3001\u6D88\u9664transition\u95EA\u5C4F" aria-hidden="true">#</a> <strong>25\u3001\u6D88\u9664transition\u95EA\u5C4F</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_26\u3001\u8BC6\u522B\u5B57\u7B26\u4E32\u91CC\u7684-n-\u5E76\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#_26\u3001\u8BC6\u522B\u5B57\u7B26\u4E32\u91CC\u7684-n-\u5E76\u6362\u884C" aria-hidden="true">#</a> <strong>26\u3001\u8BC6\u522B\u5B57\u7B26\u4E32\u91CC\u7684 &#39;\\n&#39; \u5E76\u6362\u884C</strong></h3><p>\u4E00\u822C\u5728\u5BCC\u6587\u672C\u4E2D\u8FD4\u56DE\u6362\u884C\u7B26\u4E0D\u662F<br>\u7684\u6807\u7B7E\uFF0C\u800C\u4E14\\n\u3002\u4E0D\u4F7F\u7528\u6B63\u5219\u8F6C\u6362\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u901A\u8FC7\u4E0B\u9762\u6837\u5F0F\u5B9E\u73B0\u6362\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>body {
   white-space: pre-line;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_27\u3001\u79FB\u9664a\u6807\u7B7E\u88AB\u70B9\u94FE\u63A5\u7684\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#_27\u3001\u79FB\u9664a\u6807\u7B7E\u88AB\u70B9\u94FE\u63A5\u7684\u8FB9\u6846" aria-hidden="true">#</a> <strong>27\u3001\u79FB\u9664a\u6807\u7B7E\u88AB\u70B9\u94FE\u63A5\u7684\u8FB9\u6846</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a {
  outline: none\uFF1B//\u6216\u8005outline: 0
  text-decoration:none; //\u53D6\u6D88\u9ED8\u8BA4\u4E0B\u5212\u7EBF
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_28\u3001css\u663E\u793A\u94FE\u63A5\u4E4B\u540E\u7684url" tabindex="-1"><a class="header-anchor" href="#_28\u3001css\u663E\u793A\u94FE\u63A5\u4E4B\u540E\u7684url" aria-hidden="true">#</a> <strong>28\u3001CSS\u663E\u793A\u94FE\u63A5\u4E4B\u540E\u7684URL</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&quot;//www.webqdkf.com&quot;&gt;\u6709\u8BFE\u524D\u7AEF\u7F51&lt;/a&gt;
&lt;style&gt;
a:after {content: &quot; (&quot; attr(href) &quot;)&quot;;}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_29\u3001select\u5185\u5BB9\u5C45\u4E2D\u663E\u793A\u3001\u4E0B\u62C9\u5185\u5BB9\u53F3\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#_29\u3001select\u5185\u5BB9\u5C45\u4E2D\u663E\u793A\u3001\u4E0B\u62C9\u5185\u5BB9\u53F3\u5BF9\u9F50" aria-hidden="true">#</a> <strong>29\u3001select\u5185\u5BB9\u5C45\u4E2D\u663E\u793A\u3001\u4E0B\u62C9\u5185\u5BB9\u53F3\u5BF9\u9F50</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select{
    text-align: center;
    text-align-last: center;
}
select option {
    direction: rtl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_30\u3001\u4FEE\u6539input\u8F93\u5165\u6846\u4E2D\u5149\u6807\u7684\u989C\u8272\u4E0D\u6539\u53D8\u5B57\u4F53\u7684\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#_30\u3001\u4FEE\u6539input\u8F93\u5165\u6846\u4E2D\u5149\u6807\u7684\u989C\u8272\u4E0D\u6539\u53D8\u5B57\u4F53\u7684\u989C\u8272" aria-hidden="true">#</a> <strong>30\u3001\u4FEE\u6539input\u8F93\u5165\u6846\u4E2D\u5149\u6807\u7684\u989C\u8272\u4E0D\u6539\u53D8\u5B57\u4F53\u7684\u989C\u8272</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>input{
    color:  #fff;
    caret-color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_31\u3001\u5B50\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6-\u7236\u5143\u7D20\u5BBD\u5EA6\u88AB\u6491\u5F00" tabindex="-1"><a class="header-anchor" href="#_31\u3001\u5B50\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6-\u7236\u5143\u7D20\u5BBD\u5EA6\u88AB\u6491\u5F00" aria-hidden="true">#</a> <strong>31\u3001\u5B50\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6 \u7236\u5143\u7D20\u5BBD\u5EA6\u88AB\u6491\u5F00</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7236\u5143\u7D20\u4E0B\u7684\u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20
.wrap {
  white-space: nowrap;
}
// \u82E5\u7236\u5143\u7D20\u4E0B\u7684\u5B50\u5143\u7D20\u662F\u5757\u7EA7\u5143\u7D20
.wrap {
  white-space: nowrap;  // \u5B50\u5143\u7D20\u4E0D\u88AB\u6362\u884C
  display: inline-block;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_32\u3001\u8BA9div\u91CC\u7684\u56FE\u7247\u548C\u6587\u5B57\u540C\u65F6\u4E0A\u4E0B\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#_32\u3001\u8BA9div\u91CC\u7684\u56FE\u7247\u548C\u6587\u5B57\u540C\u65F6\u4E0A\u4E0B\u5C45\u4E2D" aria-hidden="true">#</a> <strong>32\u3001\u8BA9div\u91CC\u7684\u56FE\u7247\u548C\u6587\u5B57\u540C\u65F6\u4E0A\u4E0B\u5C45\u4E2D</strong></h3><p>\u8FD9\u91CC\u4E0D\u4F7F\u7528flex\u5E03\u5C40\u7684\u60C5\u51B5\u3002\u901A\u8FC7vertival-align</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
  height: 100,
  line-height: 100
}
img {
  vertival-align\uFF1Amiddle
}
// vertical-align css\u7684\u5C5E\u6027vertical-align\u7528\u6765\u6307\u5B9A\u884C\u5185\u5143\u7D20\uFF08inline\uFF09\u6216\u8868\u683C\u5355\u5143\u683C\uFF08table-cell\uFF09\u5143\u7D20\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002\u53EA\u5BF9\u884C\u5185\u5143\u7D20\u3001\u8868\u683C\u5355\u5143\u683C\u5143\u7D20\u751F\u6548\uFF0C\u4E0D\u80FD\u7528\u5B83\u5782\u76F4\u5BF9\u9F50\u5757\u7EA7\u5143\u7D20
// vertical-align\uFF1Abaseline/top/middle/bottom/sub/text-top;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_33\u3001\u5B9E\u73B0\u5BBD\u9AD8\u7B49\u6BD4\u4F8B\u81EA\u9002\u5E94\u77E9\u5F62" tabindex="-1"><a class="header-anchor" href="#_33\u3001\u5B9E\u73B0\u5BBD\u9AD8\u7B49\u6BD4\u4F8B\u81EA\u9002\u5E94\u77E9\u5F62" aria-hidden="true">#</a> <strong>33\u3001\u5B9E\u73B0\u5BBD\u9AD8\u7B49\u6BD4\u4F8B\u81EA\u9002\u5E94\u77E9\u5F62</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.scale {
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  position: relative; 
}
.item {
  position: absolute; 
  width: 100%;
  height: 100%;
  background-color: 499e56;
}    
&lt;div class=&quot;scale&quot;&gt;
     &lt;div class=&quot;item&quot;&gt;
         \u8FD9\u91CC\u662F\u6240\u6709\u5B50\u5143\u7D20\u7684\u5BB9\u5668
     &lt;/div&gt;
 &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_34\u3001transfrom\u7684rotate\u5C5E\u6027\u5728span\u6807\u7B7E\u4E0B\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#_34\u3001transfrom\u7684rotate\u5C5E\u6027\u5728span\u6807\u7B7E\u4E0B\u5931\u6548" aria-hidden="true">#</a> <strong>34\u3001transfrom\u7684rotate\u5C5E\u6027\u5728span\u6807\u7B7E\u4E0B\u5931\u6548</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>span {
  display: inline-block
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_35\u3001css\u52A0\u8F7D\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#_35\u3001css\u52A0\u8F7D\u52A8\u753B" aria-hidden="true">#</a> <strong>35\u3001CSS\u52A0\u8F7D\u52A8\u753B</strong></h3><p>\u4E3B\u8981\u662F\u901A\u8FC7css\u65CB\u8F6C\u52A8\u753B\u7684\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.dom{
  -webkit-animation:circle 1s infinite linear;
}
@keyframes circle{
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5B9E\u73B0\u5982\u4E0B\u6548\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;loader&quot;&gt;&lt;/div&gt;
&lt;style&gt;
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_36\u3001\u6587\u5B57\u6E10\u53D8\u6548\u679C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_36\u3001\u6587\u5B57\u6E10\u53D8\u6548\u679C\u5B9E\u73B0" aria-hidden="true">#</a> <strong>36\u3001\u6587\u5B57\u6E10\u53D8\u6548\u679C\u5B9E\u73B0</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;text_signature &quot; &gt;fly63\u524D\u7AEF\u7F51\uFF0C\u4E00\u4E2A\u514D\u8D39\u5B66\u4E60\u524D\u7AEF\u77E5\u8BC6\u7684\u7F51\u7AD9&lt;/div&gt;
&lt;style&gt;
.text_signature {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #ec2239, #40a4e2,#ea96f5);
    width: 320px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_37\u3001\u597D\u770B\u7684\u8FB9\u6846\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#_37\u3001\u597D\u770B\u7684\u8FB9\u6846\u9634\u5F71" aria-hidden="true">#</a> <strong>37\u3001\u597D\u770B\u7684\u8FB9\u6846\u9634\u5F71</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;text_shadow&quot;&gt;&lt;/div&gt;
&lt;style&gt; 
.text_shadow{
  width:500px;
  height:100px;
  box-shadow: 0px 0px 13px 1px rgba(51, 51, 51, 0.1);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_38\u3001\u597D\u770B\u7684\u80CC\u666F\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#_38\u3001\u597D\u770B\u7684\u80CC\u666F\u6E10\u53D8" aria-hidden="true">#</a> <strong>38\u3001\u597D\u770B\u7684\u80CC\u666F\u6E10\u53D8</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;text_gradient&quot;&gt;&lt;/div&gt;
&lt;style&gt; 
.text_gradient{
  width:500px;
  height:100px;
  background: linear-gradient(25deg, rgb(79, 107, 208), rgb(98, 141, 185), rgb(102, 175, 161), rgb(92, 210, 133)) rgb(182, 228, 253);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_39\u3001\u5B9E\u73B0\u7ACB\u4F53\u5B57\u7684\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_39\u3001\u5B9E\u73B0\u7ACB\u4F53\u5B57\u7684\u6548\u679C" aria-hidden="true">#</a> <strong>39\u3001\u5B9E\u73B0\u7ACB\u4F53\u5B57\u7684\u6548\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;text_solid&quot;&gt;\u6709\u8BFE\u524D\u7AEF\u7F51-web\u524D\u7AEF\u6280\u672F\u5B66\u4E60\u5E73\u53F0&lt;/div&gt;
&lt;style&gt; 
.text_solid{
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    line-height:100px;
    text-transform:uppercase;
    position: relative;
  background-color: #333;
    color:#fff;
    text-shadow:
    0px 1px 0px #c0c0c0,
    0px 2px 0px #b0b0b0,
    0px 3px 0px #a0a0a0,
    0px 4px 0px #909090,
    0px 5px 10px rgba(0, 0, 0, 0.6);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_40\u3001\u5168\u5C4F\u80CC\u666F\u56FE\u7247\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_40\u3001\u5168\u5C4F\u80CC\u666F\u56FE\u7247\u7684\u5B9E\u73B0" aria-hidden="true">#</a> <strong>40\u3001\u5168\u5C4F\u80CC\u666F\u56FE\u7247\u7684\u5B9E\u73B0</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.swper{
  background-image: url(./img/bg.jpg);
  width:100%;
  height:100%;//\u7236\u7EA7\u9AD8\u4E0D\u4E3A100%\u8BF7\u4F7F\u7528100vh
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_41\u3001\u5B9E\u73B0\u6587\u5B57\u63CF\u8FB9\u76842\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_41\u3001\u5B9E\u73B0\u6587\u5B57\u63CF\u8FB9\u76842\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> <strong>41\u3001\u5B9E\u73B0\u6587\u5B57\u63CF\u8FB9\u76842\u79CD\u65B9\u6CD5</strong></h3><p>\u65B9\u5F0F\u4E00\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.stroke {
      -webkit-text-stroke: 1px greenyellow;
     text-stroke: 1px greenyellow;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u65B9\u5F0F\u4E8C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.stroke {
  text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
  -webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
  -moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
  *filter: Glow(color=#000, strength=1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_42\u3001\u5143\u7D20\u900F\u660E\u5EA6\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_42\u3001\u5143\u7D20\u900F\u660E\u5EA6\u7684\u5B9E\u73B0" aria-hidden="true">#</a> <strong>42\u3001\u5143\u7D20\u900F\u660E\u5EA6\u7684\u5B9E\u73B0</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.dom{
  opacity:0.4;
  filter:alpha(opacity=40); /* IE8 \u53CA\u5176\u66F4\u65E9\u7248\u672C */
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F7F\u7528rgba()\u8BBE\u7F6E\u989C\u8272\u900F\u660E\u5EA6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.demo{
  background:rgba(255,0,0,1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8BF4\u660E\uFF1ARGBA \u662F\u4EE3\u8868Red\uFF08\u7EA2\u8272\uFF09 Green\uFF08\u7EFF\u8272\uFF09 Blue\uFF08\u84DD\u8272\uFF09\u548C Alpha\uFF08\u4E0D\u900F\u660E\u5EA6\uFF09\u4E09\u4E2A\u5355\u8BCD\u7684\u7F29\u5199\u3002</p><h3 id="_43\u3001\u89E3\u51B31px\u8FB9\u6846\u53D8\u7C97\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_43\u3001\u89E3\u51B31px\u8FB9\u6846\u53D8\u7C97\u95EE\u9898" aria-hidden="true">#</a> <strong>43\u3001\u89E3\u51B31px\u8FB9\u6846\u53D8\u7C97\u95EE\u9898</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.dom{
  height: 1px;
  background: #dbdbdb;
  transform:scaleY(0.5);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Ps\uFF1A\u51FA\u73B01px\u53D8\u7C97\u7684\u539F\u56E0\uFF0C\u6BD4\u5982\u57282\u500D\u5C4F\u65F61px\u7684\u50CF\u7D20\u5B9E\u9645\u5BF9\u5E942\u4E2A\u7269\u7406\u50CF\u7D20\u3002</p><h3 id="_44\u3001css\u4E0D\u540C\u5355\u4F4D\u7684\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_44\u3001css\u4E0D\u540C\u5355\u4F4D\u7684\u8FD0\u7B97" aria-hidden="true">#</a> <strong>44\u3001CSS\u4E0D\u540C\u5355\u4F4D\u7684\u8FD0\u7B97</strong></h3><p>css\u81EA\u5DF1\u4E5F\u80FD\u591F\u8FDB\u884C\u7B80\u5355\u7684\u8FD0\u7B97\uFF0C\u4E3B\u8981\u662F\u7528\u5230\u4E86calc\u8FD9\u4E2A\u51FD\u6570\u3002\u5B9E\u73B0\u4E0D\u540C\u5355\u4F4D\u7684\u52A0\u51CF\u8FD0\u7B97\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.div{ 
   width: calc(100% - 50px); 
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_45\u3001css\u5B9E\u73B0\u6587\u5B57\u6A21\u7CCA\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_45\u3001css\u5B9E\u73B0\u6587\u5B57\u6A21\u7CCA\u6548\u679C" aria-hidden="true">#</a> <strong>45\u3001CSS\u5B9E\u73B0\u6587\u5B57\u6A21\u7CCA\u6548\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.vague_text{
  color: transparent; 
  text-shadow: #111 0 0 5px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_46\u3001\u901A\u8FC7\u6EE4\u955C\u8BA9\u56FE\u6807\u53D8\u7070" tabindex="-1"><a class="header-anchor" href="#_46\u3001\u901A\u8FC7\u6EE4\u955C\u8BA9\u56FE\u6807\u53D8\u7070" aria-hidden="true">#</a> <strong>46\u3001\u901A\u8FC7\u6EE4\u955C\u8BA9\u56FE\u6807\u53D8\u7070</strong></h3><p>\u4E00\u5F20\u5F69\u8272\u7684\u56FE\u7247\u5C31\u80FD\u5B9E\u73B0\u9F20\u6807\u79FB\u5165\u53D8\u5F69\u8272\uFF0C\u79FB\u51FA\u53D8\u7070\u7684\u6548\u679C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&#39;&#39; class=&#39;icon&#39;&gt;&lt;img src=&#39;01.jpg&#39; /&gt;&lt;/a&gt;
&lt;style&gt;
.icon{
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);   
  filter: grayscale(100%);
  filter: gray;
}
.icon:hover{
  filter: none;
  -webkit-filter: grayscale(0%);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_47\u3001\u56FE\u7247\u81EA\u9002\u5E94object-fit" tabindex="-1"><a class="header-anchor" href="#_47\u3001\u56FE\u7247\u81EA\u9002\u5E94object-fit" aria-hidden="true">#</a> <strong>47\u3001\u56FE\u7247\u81EA\u9002\u5E94object-fit</strong></h3><p>\u5F53\u56FE\u7247\u6BD4\u4F8B\u4E0D\u56FA\u5B9A\u65F6\uFF0C\u60F3\u8981\u8BA9\u56FE\u7247\u81EA\u9002\u5E94\uFF0C\u4E00\u822C\u90FD\u4F1A\u7528background-size:cover/contain\uFF0C\u4F46\u662F\u8FD9\u4E2A\u53EA\u9002\u7528\u4E8E\u80CC\u666F\u56FE\u3002css3\u4E2D\u53EF\u4F7F\u7528object-fit\u5C5E\u6027\u6765\u89E3\u51B3\u56FE\u7247\u88AB\u62C9\u4F38\u6216\u662F\u88AB\u7F29\u653E\u7684\u95EE\u9898\u3002\u4F7F\u7528\u7684\u63D0\u524D\u6761\u4EF6\uFF1A\u56FE\u7247\u7684\u7236\u7EA7\u5BB9\u5668\u8981\u6709\u5BBD\u9AD8\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>fill: \u9ED8\u8BA4\u503C\u3002\u5185\u5BB9\u62C9\u4F38\u586B\u6EE1\u6574\u4E2Acontent box, \u4E0D\u4FDD\u8BC1\u4FDD\u6301\u539F\u6709\u7684\u6BD4\u4F8B\u3002contain: \u4FDD\u6301\u539F\u6709\u5C3A\u5BF8\u6BD4\u4F8B\u3002\u957F\u5EA6\u548C\u9AD8\u5EA6\u4E2D\u957F\u7684\u90A3\u6761\u8FB9\u8DDF\u5BB9\u5668\u5927\u5C0F\u4E00\u81F4\uFF0C\u77ED\u7684\u90A3\u6761\u7B49\u6BD4\u7F29\u653E\uFF0C\u53EF\u80FD\u4F1A\u6709\u7559\u767D\u3002cover: \u4FDD\u6301\u539F\u6709\u5C3A\u5BF8\u6BD4\u4F8B\u3002\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4E2D\u77ED\u7684\u90A3\u6761\u8FB9\u8DDF\u5BB9\u5668\u5927\u5C0F\u4E00\u81F4\uFF0C\u957F\u7684\u90A3\u6761\u7B49\u6BD4\u7F29\u653E\u3002\u53EF\u80FD\u4F1A\u6709\u90E8\u5206\u533A\u57DF\u4E0D\u53EF\u89C1\u3002\uFF08\u5E38\u7528\uFF09none: \u4FDD\u6301\u539F\u6709\u5C3A\u5BF8\u6BD4\u4F8B\u3002\u540C\u65F6\u4FDD\u6301\u66FF\u6362\u5185\u5BB9\u539F\u59CB\u5C3A\u5BF8\u5927\u5C0F\u3002scale-down:\u4FDD\u6301\u539F\u6709\u5C3A\u5BF8\u6BD4\u4F8B,\u5982\u679C\u5BB9\u5668\u5C3A\u5BF8\u5927\u4E8E\u56FE\u7247\u5185\u5BB9\u5C3A\u5BF8\uFF0C\u4FDD\u6301\u56FE\u7247\u7684\u539F\u6709\u5C3A\u5BF8\uFF0C\u4E0D\u4F1A\u653E\u5927\u5931\u771F\uFF1B\u5BB9\u5668\u5C3A\u5BF8\u5C0F\u4E8E\u56FE\u7247\u5185\u5BB9\u5C3A\u5BF8\uFF0C\u7528\u6CD5\u8DDFcontain\u4E00\u6837\u3002</p><h3 id="_48\u3001\u884C\u5185\u6807\u7B7E\u5143\u7D20\u51FA\u73B0\u95F4\u9699\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_48\u3001\u884C\u5185\u6807\u7B7E\u5143\u7D20\u51FA\u73B0\u95F4\u9699\u95EE\u9898" aria-hidden="true">#</a> <strong>48\u3001\u884C\u5185\u6807\u7B7E\u5143\u7D20\u51FA\u73B0\u95F4\u9699\u95EE\u9898</strong></h3><p>\u65B9\u5F0F\u4E00\uFF1A\u7236\u7EA7font-size\u8BBE\u7F6E\u4E3A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.father{
 font-size:0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u65B9\u5F0F\u4E8C\uFF1A\u7236\u5143\u7D20\u4E0A\u8BBE\u7F6Eword-spacing\u7684\u503C\u4E3A\u5408\u9002\u7684\u8D1F\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.father{
   word-spacing:-2px
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5176\u5B83\u65B9\u6848\uFF1A1\u5C06\u884C\u5185\u5143\u7D20\u5199\u4E3A1\u884C(\u5F71\u54CD\u9605\u8BFB)\uFF1B2\u4F7F\u7528\u6D6E\u52A8\u6837\u5F0F\uFF08\u4F1A\u5F71\u54CD\u5E03\u5C40\uFF09\u3002</p><h3 id="_49\u3001\u89E3\u51B3vertical-align\u5C5E\u6027\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_49\u3001\u89E3\u51B3vertical-align\u5C5E\u6027\u4E0D\u751F\u6548" aria-hidden="true">#</a> <strong>49\u3001\u89E3\u51B3vertical-align\u5C5E\u6027\u4E0D\u751F\u6548</strong></h3><p>\u5728\u4F7F\u7528vertical-align:middle\u5B9E\u73B0\u5782\u76F4\u5C45\u4E2D\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u4F1A\u53D1\u73B0\u4E0D\u751F\u6548\u7684\u60C5\u51B5\u3002\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u5B83\u751F\u6548\u9700\u8981\u6EE1\u8DB3\u7684\u6761\u4EF6\uFF1A</p><blockquote><p>**\u4F5C\u7528\u73AF\u5883\uFF1A**\u7236\u5143\u7D20\u8BBE\u7F6Eline-height\u3002\u9700\u8981\u548Cheight\u4E00\u81F4\u3002\u6216\u8005\u5C06display\u5C5E\u6027\u8BBE\u7F6E\u4E3Atable-cell\uFF0C\u5C06\u5757\u5143\u7D20\u8F6C\u5316\u4E3A\u5355\u5143\u683C\u3002 **\u4F5C\u7528\u5BF9\u8C61\uFF1A**\u5B50\u5143\u7D20\u4E2D\u7684inline-block\u548Cinline\u5143\u7D20\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;img src=&quot;.\\test.jpg&quot;/&gt;
  &lt;span&gt;\u5185\u90E8\u6587\u5B57&lt;/span&gt;
&lt;/div&gt;
&lt;style&gt;
.box{
  width:300px; 
  line-height: 300px;
  font-size: 16px; 
}
.box img{
  width: 30px; 
  height:30px; 
  vertical-align:middle
}
.box span{
  vertical-align:middle
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>PS\uFF1Avertical-align\u4E0D\u53EF\u7EE7\u627F\uFF0C\u5FC5\u987B\u5BF9\u5B50\u5143\u7D20\u5355\u72EC\u8BBE\u7F6E\u3002\u540C\u65F6\u9700\u8981\u6CE8\u610F\u7684\u662Fline-height\u7684\u9AD8\u5EA6\u57FA\u4E8Efont-size\uFF08\u5373\u5B57\u4F53\u7684\u9AD8\u5EA6\uFF09\uFF0C\u5982\u679C\u6587\u5B57\u8981\u8F6C\u884C\u4F1A\u51FA\u73B0\u5F02\u5E38\u54E6\u3002\u672C\u6587\u5B8C~</p>`,149);function r(p,l){return e}var i=n(a,[["render",r],["__file","easyToIgnore.html.vue"]]);export{i as default};
