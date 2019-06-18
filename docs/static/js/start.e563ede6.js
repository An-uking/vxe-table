(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["start"],{"0aa1":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("主题")]),t("p",[e._v("Case 1.使用默认的主题样式")]),t("pre",[e._v("    "),t("code",{staticClass:"scss"},[e._v("\n      @import 'vxe-table/lib/index.css';\n    ")]),e._v("\n  ")]),t("p",[e._v("Case 2.修改主题颜色，只需在项目的 scss 文件中修改局部变量即可")]),t("pre",[e._v("    "),t("code",{staticClass:"scss"},[e._v("\n      @import 'vxe-table/styles/variable.scss';\n      $vxe-font-color: #606266;\n      $vxe-table-header-background-color: #f8f8f9;\n      $vxe-table-border-color: #e8eaec;\n      $vxe-table-background-color: #ffffff;\n      @import 'vxe-table/styles/default.scss';\n    ")]),e._v("\n  ")]),t("p",[e._v("Case 3.如果需要完全重写主题样式，把 vxe-table/styles/** 目录全部复制到项目中自行修改")])])}],r=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),s=t.n(r),o={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,a,l,!1,null,null,null);n["default"]=u.exports},"61d9":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("npm 安装")]),t("p",[e._v("推荐使用 npm 的方式安装，它能更好地和 "),t("a",{staticClass:"link",attrs:{href:"https://webpack.js.org/"}},[e._v("webpack")]),e._v(" 打包工具配合使用。")]),t("p",[e._v("依赖库： "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/xe-utils"}},[e._v("xe-utils1.9+")]),e._v("  "),t("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D"}},[e._v("vue2.6+")])]),t("pre",[e._v("    "),t("code",{staticClass:"shell"},[e._v("\n      npm install xe-utils vxe-table\n    ")]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      Vue.use(VXETable)\n    ")]),e._v("\n  ")]),t("h3",[e._v("CDN")]),t("p",[e._v("可以通过 "),t("a",{staticClass:"link",attrs:{href:"https://unpkg.com/vxe-table/"}},[e._v("unpkg")]),e._v(" 或 "),t("a",{staticClass:"link",attrs:{href:"https://cdn.jsdelivr.net/npm/vxe-table/"}},[e._v("cdnjs")]),e._v(" 获取到最新版本的资源，并在页面上引入即可")]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v('\n      \x3c!-- 引入样式 --\x3e\n      <link rel="stylesheet" href="https://unpkg.com/vxe-table/lib/index.css">\n      \x3c!-- 引入脚本 --\x3e\n      <script src="https://unpkg.com/xe-utils"><\/script>\n      <script src="https://unpkg.com/vxe-table"><\/script>\n    ')]),e._v("\n  ")])])}],r=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),s=t.n(r),o={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,a,l,!1,null,null,null);n["default"]=u.exports},a325:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("国际化")]),t("p",[e._v("目前支持的"),t("a",{staticClass:"link",attrs:{href:"https://github.com/xuliangzhan/vxe-table/tree/master/locale/lang",target:"_blank"}},[e._v("国际化列表")])]),t("p",[e._v("若希望使用指定语言，则需要进行多语言设置。以中/英文为例")]),t("pre",[e._v("    "),t("code",{staticClass:"shell"},[e._v("\n      npm install vue-i18n\n    ")]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VueI18n from 'vxe-i18n'\n      import VXETable from 'vxe-table'\n      import zhCNLocat from 'vxe-table/lib/locale/lang/zh_CN'\n      import enLocat from 'vxe-table/lib/locale/lang/en'\n\n      const messages = {\n        zh_CN: {\n          ...zhCNLocat\n        },\n        en: {\n          ...enLocat\n        }\n      }\n\n      const i18n = new VueI18n({\n        locale: 'zh_CN',\n        messages,\n      })\n\n      Vue.use(VXETable, {\n        i18n: (key, value) => i18n.t(key, value)\n      })\n\n      new Vue({ i18n }).$mount('#app')\n    ")]),e._v("\n  ")])])}],r=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),s=t.n(r),o={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,a,l,!1,null,null,null);n["default"]=u.exports},d936:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("高级函数")]),t("p",[e._v("通过渲染器你可以轻松实现渲染的单元格组件，可以根据不同业务实现不一样的组件，这个功能将非常实用")]),e._m(0),t("p",[e._v("添加单个 renderer.add(name, options)")]),t("p",[e._v("混合多个 renderer.mixin(opts)")]),t("p",[e._v("删除 renderer.delete(name)")]),t("p",[e._v("例子：使用 render 实现单元格组件")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),t("p",[e._v("例子：使用 JSX 实现单元格组件")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")]),t("p",[e._v("通过内置拦截器可以解决当表格交互与其他组件存在冲突的，可以通过拦截器去阻止默认的行为，从而可以集成其他组件互相兼容")]),t("p",[e._v("添加单个 interceptor.add(name, handle)")]),t("p",[e._v("name: event.clear_actived（清除激活单元格时触发，返回 false 阻止默认的清除行为）")]),t("p",[e._v("例子：比如自定义渲染某个组件后，由于弹出层面板不在单元格之内，按键事件的交互行为存在冲突，对于这些场景就很有用了")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n  ")])])},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("比如这些插件 "),t("a",{attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-element"}},[e._v("vxe-table-plugin-element")]),e._v(" 等插件都是使用渲染器实现的")])}],r=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),s=t.n(r),o={data:function(){return{demoCodes:["\n        import Vue from 'vue'\n        import VXETable from 'vxe-table'\n        import 'vxe-table/lib/index.css'\n\n        VXETable.renderer.add('MyCell', {\n          autofocus: '.my-cell',\n          renderEdit (h, editRender, params) {\n            let { row, column } = params\n            return [\n              h('input', {\n                class: 'my-cell',\n                attrs: {\n                  type: 'text'\n                },\n                domProps: {\n                  value: row[column.property]\n                },\n                on: {\n                  input (evnt) {\n                    row[column.property] = evnt.target.value\n                  }\n                }\n              })\n            ]\n          },\n          renderCell (h, editRender, params) {\n            let { row, column } = params\n            return [\n              h('span', row[column.property])\n            ]\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="600"\n          :data.sync="tableData"\n          :edit-config="{key: \'id\', trigger: \'click\', mode: \'row\'}">\n          <vxe-table-column type="selection" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column type="index" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column prop="name" label="Name" :edit-render="{name: \'MyCell\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        import Vue from 'vue'\n        import VXETable from 'vxe-table'\n        import 'vxe-table/lib/index.css'\n\n        VXETable.renderer.add('MyCell', {\n          autofocus: '.my-cell',\n          renderEdit (h, editRender, { row, column }) {\n            return <input class=\"my-cell\" text=\"text\" value={row[column.property]} on-input={val => row[column.property] = val}/>\n          },\n          renderCell (h, editRender, { row, column }) {\n            return <span>{row[column.property]}</span>\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="600"\n          :data.sync="tableData"\n          :edit-config="{key: \'id\', trigger: \'click\', mode: \'row\'}">\n          <vxe-table-column type="selection" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column type="index" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column prop="name" label="Name" :edit-render="{name: \'MyCell\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        import Vue from 'vue'\n        import VXETable from 'vxe-table'\n        import 'vxe-table/lib/index.css'\n\n        VXETable.interceptor.add('event.clear_actived', (params, event) => {\n          // 比如点击了某日期组件的面板，此时被激活单元格不应该被自动关闭，通过返回 false 可以阻止默认的行为。\n          if (event.target.className.indexOf('other-popper') > -1) {\n            return false\n          }\n        })\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,a,l,!1,null,null,null);n["default"]=u.exports},f924:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("完整引入")]),t("pre",[e._v("    "),t("code",{staticClass:"shell"},[e._v("\n      npm install xe-utils vxe-table\n    ")]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      Vue.use(VXETable)\n    ")]),e._v("\n  ")]),t("h3",[e._v("按需引入")]),t("p",[e._v("借助插件 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/babel-plugin-import"}},[e._v("babel-plugin-import")]),e._v(" 可以实现按需加载模块，减少文件体积。然后在文件 .babelrc 中配置")]),t("pre",[e._v("    "),t("code",{staticClass:"shell"},[e._v("\n      npm install babel-plugin-import -D\n    ")]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v('\n      {\n        "plugins": [\n          [\n            "import",\n            {\n              "libraryName": "vxe-table",\n              "style": true // 样式是否也按需加载\n            }\n          ]\n        ]\n      }\n    ')]),e._v("\n  ")]),t("p",[e._v("最后这样按需引入模块，就可以减小体积了")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n      import {\n        VXETable,\n        Table,\n        Column,\n        Header,\n        Body,\n        Footer,\n        Filter,\n        Loading,\n        Grid,\n        Excel,\n        Menu,\n        Toolbar,\n        Pager,\n        Checkbox,\n        Radio,\n        Input,\n        Button,\n        Message,\n        Export,\n        Resize\n      } from 'vxe-table'\n      import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'\n\n      Vue.use(Table)\n      Vue.use(Column)\n      Vue.use(Header)\n      Vue.use(Body)\n      Vue.use(Footer)\n      Vue.use(Filter)\n      Vue.use(Loading)\n      Vue.use(Grid)\n      Vue.use(Excel)\n      Vue.use(Menu)\n      Vue.use(Toolbar)\n      Vue.use(Pager)\n      Vue.use(Checkbox)\n      Vue.use(Radio)\n      Vue.use(Input)\n      Vue.use(Button)\n      Vue.use(Message)\n      Vue.use(Export)\n      Vue.use(Resize)\n\n      // 按需加载的方式默认是不带国际化的，需要自行导入\n      VXETable.setup({\n        i18n: (key, value) => VXETable.t(zhCNLocat, key)\n      })\n    ")]),e._v("\n  ")]),t("h3",[e._v("局部 size 设置")]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v("\n      每个组件都有 size 属性，默认是继承父组件，所以只要给局部的父组件设置 size，所有后代组件一律继承，该功能对于很多场景中都非常有用\n    ")]),e._v("\n  ")]),t("h3",[e._v("全局默认参数")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      Vue.use(VXETable, {\n        size: 'small',\n        version: 0,\n        tooltipConfig: {\n          zIndex: 3000\n        }\n      })\n    ")]),e._v("\n  ")]),t("p",[e._v("通过 setup 函数设置")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      VXETable.setup({\n        // 默认表格参数\n        size: 'small',\n        showAllOverflow: null,\n        showHeaderAllOverflow: null,\n        stripe: false,\n        border: false,\n        resizable: false,\n        fit: true,\n        showHeader: true,\n        // 版本号（对于某些带 Storage 数据储存的功能有用到，上升版本号可以用于重置 Storage 数据）\n        version: 0,\n        // 默认快捷菜单\n        contextMenu: null,\n        // 自定义图标配置\n        iconMap: {\n          sortAsc: 'vxe-icon--caret-top',\n          sortDesc: 'vxe-icon--caret-bottom',\n          filter: 'vxe-icon--funnel',\n          edit: 'vxe-icon--edit-outline',\n          tree: 'vxe-icon--caret-right',\n          jumpPrev: 'vxe-icon--d-arrow-left',\n          jumpNext: 'vxe-icon--d-arrow-right',\n          prevPage: 'vxe-icon--arrow-left',\n          nextPage: 'vxe-icon--arrow-right'\n        },\n        // 默认 tooltip 主题样式\n        tooltipConfig: {\n          zIndex: 3000,\n          theme: 'dark'\n        },\n        // 默认分页参数\n        pager: {\n          pageSize: 10,\n          pagerCount: 7,\n          pageSizes: [10, 15, 20, 50, 100],\n          layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']\n        },\n        // 默认工具栏参数\n        toolbar: {\n          setting: false,\n          buttons: []\n        },\n        // 默认消息提示框参数\n        message: {\n          lockView: true,\n          lockScroll: true,\n          mask: true,\n          animat: true\n        },\n        // 默认优化配置项\n        optimization : {\n          animat: true,\n          // 当列大于 40 条时自动启用横向 X 滚动渲染\n          scrollX: {\n            gt: 40,\n            oSize: 5,\n            rSize: 16\n          },\n          // 当数据大于 500 条时自动启用纵向 Y 滚动渲染\n          scrollY: {\n            gt: 500,\n            oSize: 20,\n            rSize: 80\n          }\n        }\n      })\n    ")]),e._v("\n  ")])])}],r=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),s=t.n(r),o={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,a,l,!1,null,null,null);n["default"]=u.exports}}]);