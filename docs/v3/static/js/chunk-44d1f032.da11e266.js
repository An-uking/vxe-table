(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44d1f032"],{"8f8e":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{staticClass:"tip"},[e._v(" 基于树表格实现分组汇总 ")]),t("vxe-table",{attrs:{resizable:"",loading:e.loading,"tree-config":e.tableTreeConfig,data:e.tableData}},[t("vxe-column",{attrs:{field:"name",title:"名称","tree-node":"",formatter:e.formatName}}),t("vxe-column",{attrs:{field:"level",title:"级别"}}),t("vxe-column",{attrs:{field:"age",title:"年龄"}}),t("vxe-column",{attrs:{field:"rate",title:"分数"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},l=[],r=(t("d3b7"),t("99af"),t("b0c0"),t("159b"),t("a9e3"),t("c695")),i=t.n(r),s={data:function(){return{loading:!1,tableData:[],tableTreeConfig:{children:"children",accordion:!0,expandAll:!1},demoCodes:['\n        <vxe-table\n          resizable\n          :loading="loading"\n          :tree-config="tableTreeConfig"\n          :data="tableData">\n          <vxe-column field="name" title="名称" tree-node :formatter="formatName"></vxe-column>\n          <vxe-column field="level" title="级别"></vxe-column>\n          <vxe-column field="age" title="年龄"></vxe-column>\n          <vxe-column field="rate" title="分数"></vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tableTreeConfig: {\n                children: 'children',\n                accordion: true, // 一层只允许展开一个节点\n                expandAll: false // 默认是否全部展开\n              }\n            }\n          },\n          created () {\n            this.loading = true\n            this.findList().then(data => {\n              this.tableData = this.getGroupSummary(data)\n              this.loading = false\n            })\n          },\n          methods: {\n            findList () {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  let list = [\n                    {\n                      name: '一班',\n                      level: '',\n                      age: '',\n                      rate: '',\n                      children: [\n                        { name: 'test7', rate: 9, age: 24, level: 1 },\n                        { name: 'test6', rate: 14, age: 20, level: 3 },\n                        {\n                          name: '第一组',\n                          level: '',\n                          age: '',\n                          rate: '',\n                          children: [\n                            { name: 'test85', rate: 13, age: 32, level: 1 },\n                            { name: 'test37', rate: 9, age: 29, level: 4 },\n                            { name: 'test93', rate: 22, age: 28, level: 5 },\n                            { name: 'test90', rate: 55, age: 26, level: 2 }\n                          ]\n                        },\n                        { name: 'test32', rate: 11, age: 21, level: 1 }\n                      ]\n                    },\n                    {\n                      name: '二班',\n                      level: '',\n                      age: '',\n                      rate: '',\n                      children: [\n                        { name: 'test15', rate: 13, age: 32, level: 1 },\n                        { name: 'test44', rate: 9, age: 29, level: 4 },\n                        {\n                          name: '第一组',\n                          level: '',\n                          age: '',\n                          rate: '',\n                          children: [\n                            { name: 'test37', rate: 9, age: 29, level: 4 },\n                            { name: 'test93', rate: 22, age: 28, level: 5 }\n                          ]\n                        },\n                        {\n                          name: '第二组',\n                          level: '',\n                          age: '',\n                          rate: '',\n                          children: [\n                            { name: 'test74', rate: 11, age: 32, level: 5 },\n                            { name: 'test99', rate: 23, age: 18, level: 4 },\n                            {\n                              name: '第一排',\n                              level: '',\n                              age: '',\n                              rate: '',\n                              children: [\n                                { name: 'test48', rate: 77, age: 29, level: 4 },\n                                { name: 'test38', rate: 34, age: 21, level: 2 }\n                              ]\n                            },\n                            { name: 'test16', rate: 22, age: 26, level: 5 }\n                          ]\n                        },\n                        { name: 'test91', rate: 16, age: 27, level: 5 },\n                        {\n                          name: '第三组',\n                          level: '',\n                          age: '',\n                          rate: '',\n                          children: [\n                            { name: 'test77', rate: 11, age: 35, level: 1 },\n                            { name: 'test89', rate: 40, age: 18, level: 4 },\n                            { name: 'test10', rate: 22, age: 20, level: 2 }\n                          ]\n                        }\n                      ]\n                    },\n                    {\n                      name: '三班',\n                      level: '',\n                      age: '',\n                      rate: '',\n                      children: [\n                        { name: 'test6', rate: 3, age: 22, level: 2 },\n                        { name: 'test2', rate: 5, age: 25, level: 3 },\n                        { name: 'test42', rate: 17, age: 35, level: 4 }\n                      ]\n                    }\n                  ]\n                  resolve(list)\n                }, 300)\n              })\n            },\n            formatName ({ row }) {\n              return row.children && row.children.length ? `${row.name} (${row.num}人)` : row.name\n            },\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            // 计算逻辑\n            handleSummary  (children) {\n              return {\n                num: this.sumNum(children, 'num'),\n                level: Math.floor(this.sumNum(children, 'level')),\n                age: parseInt(this.meanNum(children, 'age')),\n                rate: this.sumNum(children, 'rate')\n              }\n            },\n            getGroupSummary (data) {\n              XEUtils.eachTree(data, (row, index, items, path, parent, nodes) => {\n                let children = row.children\n                if (children && children.length) {\n                  // 合计子节点\n                  Object.assign(row, this.handleSummary(children))\n                } else {\n                  row.num = 1\n                  if (index === items.length - 1) {\n                    // 全量汇总\n                    for (let len = nodes.length - 2; len >= 0; len--) {\n                      Object.assign(nodes[len], this.handleSummary(nodes[len].children))\n                    }\n                  }\n                }\n              }, this.tableTreeConfig)\n              return data\n            }\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,this.findList().then((function(n){e.tableData=e.getGroupSummary(n),e.loading=!1}))},methods:{findList:function(){return new Promise((function(e){setTimeout((function(){var n=[{name:"一班",level:"",age:"",rate:"",children:[{name:"test7",rate:9,age:24,level:1},{name:"test6",rate:14,age:20,level:3},{name:"第一组",level:"",age:"",rate:"",children:[{name:"test85",rate:13,age:32,level:1},{name:"test37",rate:9,age:29,level:4},{name:"test93",rate:22,age:28,level:5},{name:"test90",rate:55,age:26,level:2}]},{name:"test32",rate:11,age:21,level:1}]},{name:"二班",level:"",age:"",rate:"",children:[{name:"test15",rate:13,age:32,level:1},{name:"test44",rate:9,age:29,level:4},{name:"第一组",level:"",age:"",rate:"",children:[{name:"test37",rate:9,age:29,level:4},{name:"test93",rate:22,age:28,level:5}]},{name:"第二组",level:"",age:"",rate:"",children:[{name:"test74",rate:11,age:32,level:5},{name:"test99",rate:23,age:18,level:4},{name:"第一排",level:"",age:"",rate:"",children:[{name:"test48",rate:77,age:29,level:4},{name:"test38",rate:34,age:21,level:2}]},{name:"test16",rate:22,age:26,level:5}]},{name:"test91",rate:16,age:27,level:5},{name:"第三组",level:"",age:"",rate:"",children:[{name:"test77",rate:11,age:35,level:1},{name:"test89",rate:40,age:18,level:4},{name:"test10",rate:22,age:20,level:2}]}]},{name:"三班",level:"",age:"",rate:"",children:[{name:"test6",rate:3,age:22,level:2},{name:"test2",rate:5,age:25,level:3},{name:"test42",rate:17,age:35,level:4}]}];e(n)}),300)}))},formatName:function(e){var n=e.row;return n.children&&n.children.length?"".concat(n.name," (").concat(n.num,"人)"):n.name},meanNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t/e.length},sumNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},handleSummary:function(e){return{num:this.sumNum(e,"num"),level:Math.floor(this.sumNum(e,"level")),age:parseInt(this.meanNum(e,"age")),rate:this.sumNum(e,"rate")}},getGroupSummary:function(e){var n=this;return i.a.eachTree(e,(function(e,t,a,l,r,i){var s=e.children;if(s&&s.length)Object.assign(e,n.handleSummary(s));else if(e.num=1,t===a.length-1)for(var m=i.length-2;m>=0;m--)Object.assign(i[m],n.handleSummary(i[m].children))}),this.tableTreeConfig),e}}},m=s,o=t("2877"),c=Object(o["a"])(m,a,l,!1,null,null,null);n["default"]=c.exports},"99af":function(e,n,t){"use strict";var a=t("23e7"),l=t("da84"),r=t("d039"),i=t("e8b5"),s=t("861d"),m=t("7b0b"),o=t("07fa"),c=t("8418"),u=t("65f0"),d=t("1dde"),g=t("b622"),v=t("2d00"),f=g("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",p=l.TypeError,N=v>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),x=d("concat"),w=function(e){if(!s(e))return!1;var n=e[f];return void 0!==n?!!n:i(e)},E=!N||!x;a({target:"Array",proto:!0,forced:E},{concat:function(e){var n,t,a,l,r,i=m(this),s=u(i,0),d=0;for(n=-1,a=arguments.length;n<a;n++)if(r=-1===n?i:arguments[n],w(r)){if(l=o(r),d+l>h)throw p(b);for(t=0;t<l;t++,d++)t in r&&c(s,d,r[t])}else{if(d>=h)throw p(b);c(s,d++,r)}return s.length=d,s}})},a9e3:function(e,n,t){"use strict";var a=t("83ab"),l=t("da84"),r=t("e330"),i=t("94ca"),s=t("6eeb"),m=t("1a2d"),o=t("7156"),c=t("3a9b"),u=t("d9b5"),d=t("c04e"),g=t("d039"),v=t("241c").f,f=t("06cf").f,h=t("9bf2").f,b=t("408a"),p=t("58a8").trim,N="Number",x=l[N],w=x.prototype,E=l.TypeError,I=r("".slice),_=r("".charCodeAt),y=function(e){var n=d(e,"number");return"bigint"==typeof n?n:S(n)},S=function(e){var n,t,a,l,r,i,s,m,o=d(e,"number");if(u(o))throw E("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=p(o),n=_(o,0),43===n||45===n){if(t=_(o,2),88===t||120===t)return NaN}else if(48===n){switch(_(o,1)){case 66:case 98:a=2,l=49;break;case 79:case 111:a=8,l=55;break;default:return+o}for(r=I(o,2),i=r.length,s=0;s<i;s++)if(m=_(r,s),m<48||m>l)return NaN;return parseInt(r,a)}return+o};if(i(N,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var T,C=function(e){var n=arguments.length<1?0:x(y(e)),t=this;return c(w,t)&&g((function(){b(t)}))?o(Object(n),t,C):n},A=a?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;A.length>O;O++)m(x,T=A[O])&&!m(C,T)&&h(C,T,f(x,T));C.prototype=w,w.constructor=C,s(l,N,C)}}}]);