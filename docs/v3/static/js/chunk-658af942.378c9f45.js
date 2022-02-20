(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-658af942"],{"0edb":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var t,a=window.document;function i(e){if(!t){t=a.createElement("textarea"),t.id="$XECopy";var n=t.style;n.width="48px",n.height="24px",n.position="fixed",n.zIndex="0",n.left="-500px",n.top="-500px",a.body.appendChild(t)}t.value=null===e||void 0===e?"":""+e}function r(e){var n=!1;try{i(e),t.select(),t.setSelectionRange(0,t.value.length),n=a.execCommand("copy"),t.blur()}catch(o){}return n}function s(e){return r(e)}s.copy=r;var d=s;n["default"]=d},9600:function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("p",{staticClass:"tip"},[e._v("右键菜单，实现对按钮的控制，通过 "),o("table-api-link",{attrs:{prop:"visibleMethod"}}),e._v(" 和 "),o("table-api-link",{attrs:{prop:"visible"}}),e._v(" | "),o("table-api-link",{attrs:{prop:"disabled"}}),e._v(" 属性来控制菜单选项的操作权限")],1),o("vxe-grid",e._b({ref:"xGrid",on:{"cell-menu":e.cellContextMenuEvent,"menu-click":e.contextMenuClickEvent}},"vxe-grid",e.gridOptions,!1)),o("pre",[e._v("    "),o("pre-code",[e._v("\n      | Arrow Up ↑ | 移动到上一个菜单选项 |\n      | Arrow Down ↓ | 移动到下一个菜单选项 |\n      | Arrow Left ← | 关闭二级菜单 |\n      | Arrow Right → | 打开二级菜单 |\n      | Esc | 关闭菜单选项 |\n      | Enter | 选中当前菜单选项 |\n      | Spacebar | 选中当前菜单选项 |\n    ")]),e._v("\n  ")],1),o("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),o("pre",[e._v("    "),o("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),o("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},a=[],i=(o("d3b7"),o("159b"),o("caad"),o("a9e3"),o("0edb")),r=o.n(i),s=o("a388"),d=o.n(s),l={data:function(){return{gridOptions:{border:!0,resizable:!0,showFooter:!0,highlightCurrentRow:!0,footerMethod:this.footerMethod,menuConfig:{header:{options:[[{code:"exportAll",name:"导出所有.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},body:{options:[[{code:"copy",name:"复制内容",prefixIcon:"fa fa-copy",visible:!0,disabled:!1},{code:"clear",name:"清除内容",visible:!0,disabled:!1},{code:"reload",name:"刷新表格",visible:!0,disabled:!1}],[{code:"myPrint",name:"打印",prefixIcon:"fa fa-print",visible:!0,disabled:!1},{code:"myExport",name:"导出.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},footer:{options:[[{code:"exportAll",name:"导出所有.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},visibleMethod:this.visibleMethod},columns:[{type:"seq",width:50},{field:"name",title:"app.body.label.name"},{field:"age",title:"app.body.label.age"},{field:"nickname",title:"Nickname",showOverflow:!0}],data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"}]},footerData:[["合计","","xx","666"]],demoCodes:['\n        <vxe-grid\n          ref="xGrid"\n          v-bind="gridOptions"\n          @cell-menu="cellContextMenuEvent"\n          @menu-click="contextMenuClickEvent">\n        </vxe-grid>\n        ',"\n        import XEClipboard from 'xe-clipboard'\n        import VXETable from 'vxe-table'\n\n        export default {\n          data () {\n            return {\n              gridOptions: {\n                border: true,\n                resizable: true,\n                showFooter: true,\n                highlightCurrentRow: true,\n                footerMethod: this.footerMethod,\n                menuConfig: {\n                  header: {\n                    options: [\n                      [\n                        { code: 'exportAll', name: '导出所有.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                      ]\n                    ]\n                  },\n                  body: {\n                    options: [\n                      [\n                        { code: 'copy', name: '复制内容', prefixIcon: 'fa fa-copy', visible: true, disabled: false },\n                        { code: 'clear', name: '清除内容', visible: true, disabled: false },\n                        { code: 'reload', name: '刷新表格', visible: true, disabled: false }\n                      ],\n                      [\n                        { code: 'myPrint', name: '打印', prefixIcon: 'fa fa-print', visible: true, disabled: false },\n                        { code: 'myExport', name: '导出.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                      ]\n                    ]\n                  },\n                  footer: {\n                    options: [\n                      [\n                        { code: 'exportAll', name: '导出所有.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                      ]\n                    ]\n                  },\n                  visibleMethod: this.visibleMethod\n                },\n                columns: [\n                  { type: 'seq', width: 50 },\n                  { field: 'name', title: 'app.body.label.name' },\n                  { field: 'age', title: 'app.body.label.age' },\n                  { field: 'nickname', title: 'Nickname', showOverflow: true }\n                ],\n                data: [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }\n                ]\n              },\n              footerData: [\n                ['合计', '', 'xx', '666']\n              ]\n            }\n          },\n          methods: {\n            visibleMethod ({ type, options, column }) {\n              // 示例：只有 name 列允许操作，清除按钮只能在 age 才显示\n              // 显示之前处理按钮的操作权限\n              let isDisabled = !column || column.property !== 'name'\n              let isVisible = column && column.property === 'age'\n              options.forEach(list => {\n                list.forEach(item => {\n                  if (['copy'].includes(item.code)) {\n                    item.disabled = isDisabled\n                  }\n                  if (['clear'].includes(item.code)) {\n                    item.visible = isVisible\n                  }\n                })\n              })\n              return true\n            },\n            cellContextMenuEvent ({ row }) {\n              const $grid = this.$refs.xGrid\n              $grid.setCurrentRow(row)\n            },\n            contextMenuClickEvent ({ menu, row, column }) {\n              const $grid = this.$refs.xGrid\n              switch (menu.code) {\n                case 'copy':\n                  if (row && column) {\n                    if (XEClipboard.copy(row[column.property])) {\n                      VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })\n                    }\n                  }\n                  break\n                case 'clear':\n                  $grid.clearData(row, column.property)\n                  break\n                case 'myPrint':\n                  $grid.print()\n                  break\n                case 'myExport':\n                  $grid.exportData()\n                  break\n              }\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod () {\n              return this.footerData\n            }\n          }\n        }\n        "]}},methods:{visibleMethod:function(e){var n=e.options,o=e.column,t=!o||"name"!==o.property,a=o&&"age"===o.property;return n.forEach((function(e){e.forEach((function(e){["copy"].includes(e.code)&&(e.disabled=t),["clear"].includes(e.code)&&(e.visible=a)}))})),!0},cellContextMenuEvent:function(e){var n=e.row,o=this.$refs.xGrid;o.setCurrentRow(n)},contextMenuClickEvent:function(e){var n=e.menu,o=e.row,t=e.column,a=this.$refs.xGrid;switch(n.code){case"copy":o&&t&&r.a.copy(o[t.property])&&d.a.modal.message({content:"已复制到剪贴板！",status:"success"});break;case"clear":a.clearData(o,t.property);break;case"myPrint":a.print();break;case"myExport":a.exportData();break}},sumNum:function(e,n){var o=0;return e.forEach((function(e){o+=Number(e[n])})),o},footerMethod:function(){return this.footerData}}},c=l,p=o("2877"),m=Object(p["a"])(c,t,a,!1,null,null,null);n["default"]=m.exports}}]);