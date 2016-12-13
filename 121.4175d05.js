webpackJsonp([121],{158:function(t,e){t.exports="<section><h1>Action sheet</h1> <blockquote> <p>A menu sheet that slides from the bottom of the screen.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Actionsheet } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(Actionsheet.name, Actionsheet);\n</code></pre> <h2>Example</h2> <p><code>actions</code> is an array of objects. Each object has two keys: <code>name</code> and <code>method</code>. <code>name</code> is the text showing on the sheet, and <code>method</code>(optional) is the callback when clicked.</p> <p>Sync <code>visible</code> with one of your vue instance variables. Toggle it to switch on/off the action sheet.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-actionsheet</span>\n  <span class=hljs-attr>:actions</span>=<span class=hljs-string>\"actions\"</span>\n  <span class=hljs-attr>:visible.sync</span>=<span class=hljs-string>\"sheetVisible\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-actionsheet</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>actions</td> <td>array of actions</td> <td>Array</td> <td></td> <td></td> </tr> <tr> <td>visible</td> <td>visibility of the action sheet</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>cancelText</td> <td>text of the cancel button. If this is an empty string, no cancel button will show</td> <td>String</td> <td></td> <td>'取消'</td> </tr> <tr> <td>closeOnClickModal</td> <td>if the action sheet turns off when the modal is clicked</td> <td>Boolean</td> <td></td> <td>true</td> </tr> </tbody> </table></div></section>"},24:function(t,e,s){t.exports=s(285)},285:function(t,e,s){var o,a,n={};a=s(158),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var c="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(c.template=a),c.computed||(c.computed={}),Object.keys(n).forEach(function(t){var e=n[t];c.computed[t]=function(){return e}})}});