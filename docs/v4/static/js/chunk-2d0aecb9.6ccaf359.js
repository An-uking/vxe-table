(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aecb9"],{"0c1a":function(n,e,t){"use strict";t.r(e);var l=t("7a23"),o=Object(l["createTextVNode"])("      "),r=Object(l["createTextVNode"])("\r\n    ");function s(n,e,t,s,i,a){var u=Object(l["resolveComponent"])("pre-code");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[Object(l["createElementVNode"])("h2",null,Object(l["toDisplayString"])(n.$t("app.aside.nav.global")),1),Object(l["createElementVNode"])("pre",null,[o,Object(l["createVNode"])(u,{class:"typescript"},{default:Object(l["withCtx"])((function(){return[Object(l["createTextVNode"])(Object(l["toDisplayString"])(n.demoCodes[0]),1)]})),_:1}),r])])}var i=Object(l["defineComponent"])({setup:function(){return{demoCodes:["\n        import VXETable from 'vxe-table'\n\n        VXETable.setup({\n          // size: null, // 全局尺寸\n          // zIndex: 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡\n          // version: 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据\n          // table: {\n          //   showHeader: true,\n          //   keepSource: false,\n          //   showOverflow: null,\n          //   showHeaderOverflow: null,\n          //   showFooterOverflow: null,\n          //   size: null,\n          //   autoResize: false,\n          //   stripe: false,\n          //   border: false,\n          //   round: false,\n          //   emptyText: '暂无数据',\n          //   rowConfig: {\n          //     keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名\n          //   },\n          //   radioConfig: {\n          //     trigger: 'default'\n          //   },\n          //   checkboxConfig: {\n          //     strict: false,\n          //     highlight: false,\n          //     range: false,\n          //     trigger: 'default'\n          //   },\n          //   sortConfig: {\n          //     remote: false,\n          //     trigger: 'default',\n          //     orders: ['asc', 'desc', null],\n          //     sortMethod: null\n          //   },\n          //   filterConfig: {\n          //     remote: false,\n          //     filterMethod: null\n          //   },\n          //   expandConfig: {\n          //     trigger: 'default',\n          //     showIcon: true\n          //   },\n          //   treeConfig: {\n          //     rowField: 'id',\n          //     parentField: 'parentId',\n          //     children: 'children',\n          //     hasChild: 'hasChild',\n          //     mapChildren: '_X_CHILD',\n          //     indent: 20,\n          //     showIcon: true\n          //   },\n          //   tooltipConfig: {\n          //     enterable: true\n          //   },\n          //   menuConfig: {\n          //     visibleMethod () {}\n          //   },\n          //   editConfig: {\n          //     mode: 'cell',\n          //     showAsterisk: true\n          //   },\n          //   importConfig: {\n          //     modes: ['insert', 'covering']\n          //   },\n          //   exportConfig: {\n          //     modes: ['current', 'selected']\n          //   },\n          //   customConfig: {\n          //    storage: false\n          //   },\n          //   scrollX: {\n          //     gt: 60\n          //   },\n          //   scrollY: {\n          //     gt: 100\n          //   }\n          // },\n          // grid: {\n          //   size: null,\n          //   zoomConfig: {\n          //     escRestore: true\n          //   },\n          //   pagerConfig: {\n          //     perfect: false\n          //   },\n          //   toolbarConfig: {\n          //     perfect: false\n          //   },\n          //   proxyConfig: {\n          //     autoLoad: true,\n          //     message: true,\n          //     props: {\n          //       list: null, // 用于列表，读取响应数据\n          //       result: 'result', // 用于分页，读取响应数据\n          //       total: 'page.total' // 用于分页，读取总条数\n          //     }\n          //     beforeItem: null,\n          //     beforeColumn: null,\n          //     beforeQuery: null,\n          //     afterQuery: null,\n          //     beforeDelete: null,\n          //     afterDelete: null,\n          //     beforeSave: null,\n          //     afterSave: null\n          //   }\n          // },\n          // pager: {\n          //   size: null,\n          //   autoHidden: false,\n          //   perfect: true,\n          //   pageSize: 10,\n          //   pagerCount: 7,\n          //   pageSizes: [10, 15, 20, 50, 100],\n          //   layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']\n          // },\n          // form: {\n          //   preventSubmit: false\n          //   size: null,\n          //   colon: false,\n          //   validConfig: {\n          //     autoPos: true\n          //   },\n          //   tooltipConfig: {\n          //     enterable: true\n          //   },\n          //   titleAsterisk: true\n          // },\n          // input: {\n          //   size: null,\n          //   transfer: false\n          //   parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',\n          //   labelFormat: '',\n          //   valueFormat: '',\n          //   startDay: 1,\n          //   digits: 2,\n          //   controls: true\n          // },\n          // textarea: {\n          //   size: null\n          //   autosize: {\n          //     minRows: 1,\n          //     maxRows: 10\n          //   }\n          // },\n          // select: {\n          //   size: null,\n          //   transfer: false,\n          //   optionConfig: {\n          //     keyField: '_X_OPTION_KEY' // 选项数据的唯一主键字段名\n          //   },\n          //   multiCharOverflow: 8\n          // },\n          // toolbar: {\n          //   size: null,\n          //   import: {\n          //     mode: 'covering'\n          //   },\n          //   export: {\n          //     types: ['csv', 'html', 'xml', 'txt']\n          //   },\n          //   custom: {\n          //     isFooter: true\n          //   },\n          //   buttons: [],\n          //   tools: []\n          // },\n          // button: {\n          //   size: null,\n          //   transfer: false\n          // },\n          // radio: {\n          //   size: null\n          // },\n          // checkbox: {\n          //   size: null\n          // },\n          // switch: {\n          //   size: null\n          // },\n          // modal: {\n          //   // size: null,\n          //   minWidth: 340,\n          //   minHeight: 200,\n          //   lockView: true,\n          //   mask: true,\n          //   duration: 3000,\n          //   marginSize: 0,\n          //   dblclickZoom: true,\n          //   showTitleOverflow: true\n          //   storage: false\n          // },\n          // list: {\n          //   scrollY: {\n          //     gt: 100\n          //   }\n          // }\n        })\n        "]}}}),a=t("6b0d"),u=t.n(a);const f=u()(i,[["render",s]]);e["default"]=f}}]);