webpackJsonp([45],{138:function(s,n,a){s.exports=a(363)},236:function(s,n){s.exports='<section><h1>快速上手</h1> <p>本节将介绍如何在项目中使用 Mint UI。</p> <hr> <h2>使用 Starter Kit</h2> <p>我们提供了通用的<a href=https://github.com/mint-ui/mint-ui-starter>项目模板</a>，你可以直接使用。如果不希望使用我们提供的模板，请继续阅读。</p> <h2>配置文件</h2> <p>新建项目，项目结构为</p> <pre><code class=language-text>|- src/  --------------------- 项目源代码\n    |- App.vue\n    |- main.js  -------------- 入口文件\n|- .babelrc  ----------------- babel 配置文件\n|- index.html  --------------- HTML 模板\n|- package.json  ------------- npm 配置文件\n|- README.md  ---------------- 项目帮助文档\n|- webpack.config.json  ------ webpack 配置文件\n</code></pre> <p>几个配置文件的典型配置如下：</p> <p><strong>.babelrc</strong></p> <pre><code class=language-json>{\n  <span class=hljs-attr>"presets"</span>: [\n    [<span class=hljs-string>"es2015"</span>, { <span class=hljs-attr>"modules"</span>: <span class=hljs-literal>false</span> }]\n  ]\n}\n</code></pre> <br> <p><strong>package.json</strong></p> <pre><code class=language-json>{\n  <span class=hljs-attr>"name"</span>: <span class=hljs-string>"my-project"</span>,\n  <span class=hljs-attr>"description"</span>: <span class=hljs-string>"A Vue.js and Mint UI project"</span>,\n  <span class=hljs-attr>"private"</span>: <span class=hljs-literal>true</span>,\n  <span class=hljs-attr>"scripts"</span>: {\n    <span class=hljs-attr>"dev"</span>: <span class=hljs-string>"cross-env NODE_ENV=development webpack-dev-server --inline --hot --port 8087"</span>,\n    <span class=hljs-attr>"build"</span>: <span class=hljs-string>"cross-env NODE_ENV=production webpack --progress --hide-modules"</span>\n  },\n  <span class=hljs-attr>"dependencies"</span>: {\n    <span class=hljs-attr>"mint-ui"</span>: <span class=hljs-string>"^2.0.4"</span>,\n    <span class=hljs-attr>"vue"</span>: <span class=hljs-string>"^2.0.3"</span>\n  },\n  <span class=hljs-attr>"devDependencies"</span>: {\n    <span class=hljs-attr>"babel-core"</span>: <span class=hljs-string>"^6.0.0"</span>,\n    <span class=hljs-attr>"babel-loader"</span>: <span class=hljs-string>"^6.0.0"</span>,\n    <span class=hljs-attr>"babel-preset-es2015"</span>: <span class=hljs-string>"^6.13.2"</span>,\n    <span class=hljs-attr>"cross-env"</span>: <span class=hljs-string>"^1.0.6"</span>,\n    <span class=hljs-attr>"css-loader"</span>: <span class=hljs-string>"^0.23.1"</span>,\n    <span class=hljs-attr>"file-loader"</span>: <span class=hljs-string>"^0.8.5"</span>,\n    <span class=hljs-attr>"style-loader"</span>: <span class=hljs-string>"^0.13.1"</span>,\n    <span class=hljs-attr>"vue-loader"</span>: <span class=hljs-string>"^9.5.1"</span>,\n    <span class=hljs-attr>"webpack"</span>: <span class=hljs-string>"2.1.0-beta.22"</span>,\n    <span class=hljs-attr>"webpack-dev-server"</span>: <span class=hljs-string>"^2.1.0-beta.0"</span>\n  }\n}\n</code></pre> <br> <p><strong>webpack.config.js</strong></p> <pre><code class=language-javascript><span class=hljs-keyword>var</span> path = <span class=hljs-built_in>require</span>(<span class=hljs-string>\'path\'</span>)\n<span class=hljs-keyword>var</span> webpack = <span class=hljs-built_in>require</span>(<span class=hljs-string>\'webpack\'</span>)\n\n<span class=hljs-built_in>module</span>.exports = {\n  entry: <span class=hljs-string>\'./src/main.js\'</span>,\n  output: {\n    path: path.resolve(__dirname, <span class=hljs-string>\'./dist\'</span>),\n    publicPath: <span class=hljs-string>\'/dist/\'</span>,\n    filename: <span class=hljs-string>\'build.js\'</span>\n  },\n  resolveLoader: {\n    root: path.join(__dirname, <span class=hljs-string>\'node_modules\'</span>)\n  },\n  <span class=hljs-built_in>module</span>: {\n    loaders: [\n      {\n        test: <span class=hljs-regexp>/\\.vue$/</span>,\n        loader: <span class=hljs-string>\'vue\'</span>\n      },\n      {\n        test: <span class=hljs-regexp>/\\.js$/</span>,\n        loader: <span class=hljs-string>\'babel\'</span>,\n        exclude: <span class=hljs-regexp>/node_modules/</span>\n      },\n      {\n        test: <span class=hljs-regexp>/\\.css$/</span>,\n        loader: <span class=hljs-string>\'style!css\'</span>\n      },\n      {\n        test: <span class=hljs-regexp>/\\.(eot|svg|ttf|woff|woff2)$/</span>,\n        loader: <span class=hljs-string>\'file\'</span>\n      },\n      {\n        test: <span class=hljs-regexp>/\\.(png|jpg|gif|svg)$/</span>,\n        loader: <span class=hljs-string>\'file\'</span>,\n        query: {\n          name: <span class=hljs-string>\'[name].[ext]?[hash]\'</span>\n        }\n      }\n    ]\n  },\n  devServer: {\n    historyApiFallback: <span class=hljs-literal>true</span>,\n    noInfo: <span class=hljs-literal>true</span>\n  },\n  devtool: <span class=hljs-string>\'#eval-source-map\'</span>\n}\n\n<span class=hljs-keyword>if</span> (process.env.NODE_ENV === <span class=hljs-string>\'production\'</span>) {\n  <span class=hljs-built_in>module</span>.exports.devtool = <span class=hljs-string>\'#source-map\'</span>\n  <span class=hljs-comment>// http://vue-loader.vuejs.org/en/workflow/production.html</span>\n  <span class=hljs-built_in>module</span>.exports.plugins = (<span class=hljs-built_in>module</span>.exports.plugins || []).concat([\n    <span class=hljs-keyword>new</span> webpack.DefinePlugin({\n      <span class=hljs-string>\'process.env\'</span>: {\n        NODE_ENV: <span class=hljs-string>\'"production"\'</span>\n      }\n    }),\n    <span class=hljs-keyword>new</span> webpack.optimize.UglifyJsPlugin({\n      compress: {\n        warnings: <span class=hljs-literal>false</span>\n      }\n    })\n  ])\n}\n\n</code></pre> <h2>引入 Mint UI</h2> <p>你可以引入整个 Mint UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Mint UI。</p> <h3>完整引入</h3> <p>在 main.js 中写入以下内容：</p> <pre><code class=language-javascript><span class=hljs-keyword>import</span> Vue <span class=hljs-keyword>from</span> <span class=hljs-string>\'vue\'</span>\n<span class=hljs-keyword>import</span> MintUI <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>\n<span class=hljs-keyword>import</span> <span class=hljs-string>\'mint-ui/lib/style.css\'</span>\n<span class=hljs-keyword>import</span> App <span class=hljs-keyword>from</span> <span class=hljs-string>\'./App.vue\'</span>\n\nVue.use(MintUI)\n\n<span class=hljs-keyword>new</span> Vue({\n  el: <span class=hljs-string>\'#app\'</span>,\n  render: h =&gt; h(App)\n})\n</code></pre> <p>以上代码便完成了 Mint UI 的引入。需要注意的是，样式文件需要单独引入。</p> <h3>按需引入</h3> <p>借助 <a href=https://github.com/QingWei-Li/babel-plugin-component>babel-plugin-component</a>，我们可以只引入需要的组件，以达到减小项目体积的目的。</p> <p>首先，安装 babel-plugin-component：</p> <pre><code class=language-bash>npm install babel-plugin-component -D\n</code></pre> <p>然后，将 .babelrc 修改为：</p> <pre><code class=language-json>{\n  <span class=hljs-attr>"presets"</span>: [\n    [<span class=hljs-string>"es2015"</span>, { <span class=hljs-attr>"modules"</span>: <span class=hljs-literal>false</span> }]\n  ],\n  <span class=hljs-attr>"plugins"</span>: [[<span class=hljs-string>"component"</span>, [\n    {\n      <span class=hljs-attr>"libraryName"</span>: <span class=hljs-string>"mint-ui"</span>,\n      <span class=hljs-attr>"style"</span>: <span class=hljs-literal>true</span>\n    }\n  ]]]\n}\n</code></pre> <p>如果你只希望引入部分组件，比如 Button 和 Cell，那么需要在 main.js 中写入以下内容：</p> <pre><code class=language-javascript><span class=hljs-keyword>import</span> Vue <span class=hljs-keyword>from</span> <span class=hljs-string>\'vue\'</span>\n<span class=hljs-keyword>import</span> { Button, Cell } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>\n<span class=hljs-keyword>import</span> App <span class=hljs-keyword>from</span> <span class=hljs-string>\'./App.vue\'</span>\n\nVue.component(Button.name, Button)\nVue.component(Cell.name, Cell)\n<span class=hljs-comment>/* 或写为\n * Vue.use(Button)\n * Vue.use(Cell)\n */</span>\n\n<span class=hljs-keyword>new</span> Vue({\n  el: <span class=hljs-string>\'#app\'</span>,\n  render: h =&gt; h(App)\n})\n</code></pre> <h2>开始使用</h2> <p>至此，一个基于 Vue 和 Mint UI 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：</p> <pre><code class=language-bash><span class=hljs-comment># 执行如下命令后访问 localhost:8087</span>\nnpm run dev\n</code></pre> <p>编译：</p> <pre><code class=language-bash>npm run build\n</code></pre> <p>各个组件的使用方法请参阅它们各自的文档。</p> </section>'},363:function(s,n,a){var p,l,e={};l=a(236),s.exports=p||{},s.exports.__esModule&&(s.exports=s.exports.default);var t="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(t.template=l),t.computed||(t.computed={}),Object.keys(e).forEach(function(s){var n=e[s];t.computed[s]=function(){return n}})}});