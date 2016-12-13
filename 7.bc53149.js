webpackJsonp([7],{115:function(s,a,t){s.exports=t(401)},274:function(s,a){s.exports='<section><h1>Tabbar</h1> <blockquote> <p>底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Tabbar, TabItem } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Tabbar.name, Tabbar);\nVue.component(TabItem.name, TabItem);\n</code></pre> <h2>例子</h2> <p>搭配 <a v-link="{path:\'/\' + $route.language + \'/tab-container\'}">tab-container</a> 组件使用</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-tabbar</span> <span class=hljs-attr>:selected.sync</span>=<span class=hljs-string>"selected"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"外卖"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span>&gt;</span>\n    外卖\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"订单"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span>&gt;</span>\n    订单\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"发现"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span>&gt;</span>\n    发现\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"我的"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span>&gt;</span>\n    我的\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tabbar</span>&gt;</span>\n</code></pre> <h2>API</h2> <h3>tabbar</h3> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>fixed</td> <td>固定在页面底部</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>selected</td> <td>返回当前选中的 tab-item 的 id</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h3>tab-item</h3> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>id</td> <td>选中后的返回值</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <h3>tabbar</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>内容</td> </tr> </tbody> </table></div><h3>tab-item</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>显示文字</td> </tr> <tr> <td>icon</td> <td>icon 图标</td> </tr> </tbody> </table></div></section>'},401:function(s,a,t){var n,l,p={};l=t(274),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports.default);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(e.template=l),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var a=p[s];e.computed[s]=function(){return a}})}});