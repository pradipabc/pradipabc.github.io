(function(e){function n(n){for(var t,r,l=n[0],u=n[1],c=n[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);s&&s(n);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],t=!0,l=1;l<a.length;l++){var u=a[l];0!==o[u]&&(t=!1)}t&&(i.splice(n--,1),e=r(r.s=a[0]))}return e}var t={},o={index:0},i=[];function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var n=[],a=o[e];if(0!==a)if(a)n.push(a[2]);else{var t=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=t);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=function(e){return r.p+"static/js/"+({"pages-createWallet-index~pages-selectAndCreatWallet-index~pages-selectWallet-index":"pages-createWallet-index~pages-selectAndCreatWallet-index~pages-selectWallet-index","pages-createWallet-index":"pages-createWallet-index","pages-selectAndCreatWallet-index":"pages-selectAndCreatWallet-index","pages-selectWallet-index":"pages-selectWallet-index","pages-home-index":"pages-home-index"}[e]||e)+"."+{"pages-createWallet-index~pages-selectAndCreatWallet-index~pages-selectWallet-index":"b9297cf9","pages-createWallet-index":"710063ed","pages-selectAndCreatWallet-index":"ba4b412e","pages-selectWallet-index":"a4ed32de","pages-home-index":"87e35171"}[e]+".js"}(e);var u=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(c);var a=o[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+i+")",u.name="ChunkLoadError",u.type=t,u.request=i,a[1](u)}o[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},r.m=e,r.c=t,r.d=function(e,n,a){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(a,t,function(n){return e[n]}.bind(null,t));return a},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var s=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("ec84")},"153a":function(e,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={createWallet:{data:[{name:"Welcome to Trust Live"},{name:"I Already Have a Wallet"},{name:"Creat New Wallet"},{name:"By continuing,you agree to our"},{name:"Terms of Use"},{name:"one secure extension for web3"}]},rememberMnemonic:{data:[{name:"CREAT WALLET"},{name:"Type your secret phrase to restore your existing wallet"},{name:"NEXT"}]},confirmMnemonic:{data:[{name:"Please click mnemonics in order to confirm your normal backup."},{name:"NEXT"},{name:"Upgrade Reminder"},{name:"Your version is too old to work properly. Please go to the official website to update"},{name:"upgrade now"},{name:"Wrong sequence"},{name:"Backup mnemonics"}]},importMnemonic:{data:[{name:"You will have a multi chain wallet under your identity, such as ETH, BTC, COSMOS, EOS..."},{name:"Mnemonic words"},{name:"NEXT"},{name:"Mnemonic errors"},{name:"Import mnemonics"}]}}},1770:function(e,n,a){"use strict";var t=a("9ebf"),o=a.n(t);o.a},"1da7":function(e,n,a){"use strict";(function(e){var n=a("4ea4").default;a("13d5"),a("d3b7"),a("ddb0"),a("ac1f"),a("5319");var t=n(a("e143")),o={keys:function(){return[]}};e["____118FD0C____"]=!0,delete e["____118FD0C____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"Trust Live",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.7.3",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__118FD0C",e.__uniConfig.appName="Trust Live",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=o.keys().reduce((function(e,n){var a=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=o(n);return Object.assign(e[a]||(e[a]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,t.default.component("pages-createWallet-index",(function(e){var n={component:Promise.all([a.e("pages-createWallet-index~pages-selectAndCreatWallet-index~pages-selectWallet-index"),a.e("pages-createWallet-index")]).then(function(){return e(a("4b91"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-selectWallet-index",(function(e){var n={component:Promise.all([a.e("pages-createWallet-index~pages-selectAndCreatWallet-index~pages-selectWallet-index"),a.e("pages-selectWallet-index")]).then(function(){return e(a("e0a8"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-home-index",(function(e){var n={component:a.e("pages-home-index").then(function(){return e(a("ebcc"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-selectAndCreatWallet-index",(function(e){var n={component:Promise.all([a.e("pages-createWallet-index~pages-selectAndCreatWallet-index~pages-selectWallet-index"),a.e("pages-selectAndCreatWallet-index")]).then(function(){return e(a("8526"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/createWallet/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-createWallet-index",{slot:"page"})])}},meta:{id:1,name:"pages-createWallet-index",isNVue:!1,maxWidth:0,pagePath:"pages/createWallet/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/selectWallet/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-selectWallet-index",{slot:"page"})])}},meta:{name:"pages-selectWallet-index",isNVue:!1,maxWidth:0,pagePath:"pages/selectWallet/index",windowTop:0}},{path:"/pages/home/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-home-index",{slot:"page"})])}},meta:{name:"pages-home-index",isNVue:!1,maxWidth:0,pagePath:"pages/home/index",windowTop:0}},{path:"/pages/selectAndCreatWallet/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-selectAndCreatWallet-index",{slot:"page"})])}},meta:{name:"pages-selectAndCreatWallet-index",isNVue:!1,maxWidth:0,pagePath:"pages/selectAndCreatWallet/index",windowTop:0}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("c8ba"))},"1fc1":function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){}));var t=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},o=[]},"82dd":function(e,n,a){"use strict";a.r(n);var t=a("1fc1"),o=a("9e82");for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(n,e,(function(){return o[e]}))}(i);a("1770");var r=a("f0c5"),l=Object(r["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);n["default"]=l.exports},"9e82":function(e,n,a){"use strict";a.r(n);var t=a("dea0"),o=a.n(t);for(var i in t)["default"].indexOf(i)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=o.a},"9ebf":function(e,n,a){var t=a("e574");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=a("4f06").default;o("5902b7ec",t,!0,{sourceMap:!1,shadowMode:!1})},dea0:function(e,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=t},e574:function(e,n,a){var t=a("24fb");n=t(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},ea34:function(e,n,a){"use strict";a("7a82");var t=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(a("a925")),i=t(a("e143")),r=t(a("f14f")),l=t(a("153a"));i.default.use(o.default);var u=new o.default({locale:uni.getStorageSync("locale")?uni.getStorageSync("locale"):"en",messages:{en:l.default,zh:r.default}}),c=u;n.default=c},ec84:function(e,n,a){"use strict";var t=a("4ea4").default,o=t(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("1da7"),a("1c31");var i=t(a("82dd")),r=t(a("ea34")),l=t(a("e143"));l.default.config.productionTip=!1,i.default.mpType="app";var u=new l.default((0,o.default)({i18n:r.default},i.default));u.$mount()},f14f:function(e,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={createWallet:{data:[{name:"欢迎来到Trust Live"},{name:"我已经有了钱包"},{name:"创建新钱包"},{name:"通过继续，您同意我们的"},{name:"使用条款"},{name:"one secure extension for web3"}]},rememberMnemonic:{data:[{name:"创建钱包"},{name:"键入密码短语以恢复现有钱包"},{name:"下一个"}]},confirmMnemonic:{data:[{name:"请单击助记符以确认正常备份。"},{name:"下一个"},{name:"升级提醒"},{name:"您的版本较低，无法正常使用。请到官网更新"},{name:"立即升级"},{name:"错误的顺序"},{name:"备份助记词"}]},importMnemonic:{data:[{name:"您的身份下将有一个多链钱包，例如ETH、BTC、COSMOS、EOS。。。"},{name:"助记词"},{name:"下一个"},{name:"助记词错误"},{name:"导入助记词"}]}}}});