(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13242830"],{"07ac":function(e,t,n){var s=n("23e7"),a=n("6f53").values;s({target:"Object",stat:!0},{values:function(e){return a(e)}})},"6f53":function(e,t,n){var s=n("83ab"),a=n("e330"),l=n("df75"),o=n("fc6a"),r=n("d1e7").f,i=a(r),c=a([].push),u=function(e){return function(t){var n,a=o(t),r=l(a),u=r.length,d=0,v=[];while(u>d)n=r[d++],s&&!i(a,n)||c(v,e?[n,a[n]]:a[n]);return v}};e.exports={entries:u(!0),values:u(!1)}},"7d4f":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("全键盘操作")]),n("vxe-toolbar",{attrs:{refresh:{query:e.findList}},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{scopedSlots:e._u([{key:"default",fn:function(){return[e._v("新增操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"},on:{click:function(t){return e.insertEvent(null)}}},[e._v("从第一行插入")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){return e.insertEvent(-1)}}},[e._v("从最后插入")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.insertEvent(e.$refs.xTable.getData(100))}}},[e._v("插入到 100 行")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.insertEvent(e.$refs.xTable.getData(400))}}},[e._v("插入到 400 行")])]},proxy:!0}])}),n("vxe-button",{scopedSlots:e._u([{key:"default",fn:function(){return[e._v("删除操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"},on:{click:function(t){return e.$refs.xTable.removeCheckboxRow()}}},[e._v("删除选中")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.remove(e.$refs.xTable.getData(0))}}},[e._v("删除第一行")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.remove(e.$refs.xTable.getData(e.$refs.xTable.getData().length-1))}}},[e._v("删除最后一行")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.remove(e.$refs.xTable.getData(100))}}},[e._v("删除第 100 行")])]},proxy:!0}])}),n("vxe-button",{scopedSlots:e._u([{key:"default",fn:function(){return[e._v("校验操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"},on:{click:e.validEvent}},[e._v("基本校验")]),n("vxe-button",{attrs:{type:"text"},on:{click:e.fullValidEvent}},[e._v("完整校验")]),n("vxe-button",{attrs:{type:"text"},on:{click:e.selectValidEvent}},[e._v("选中校验")])]},proxy:!0}])}),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),n("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),n("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")]),n("vxe-button",{scopedSlots:e._u([{key:"default",fn:function(){return[e._v("滚动操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.scrollToRow(e.$refs.xTable.getData(10))}}},[e._v("滚动到第 10 行")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.scrollToRow(e.$refs.xTable.getData(400))}}},[e._v("滚动第 400 行")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.scrollToColumn(e.$refs.xTable.getColumns(1))}}},[e._v("滚动第 1 列")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.scrollToColumn(e.$refs.xTable.getColumns(10))}}},[e._v("滚动第 10 列")])]},proxy:!0}])})]},proxy:!0}])}),n("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"","keep-source":"",height:"300",loading:e.loading,"edit-rules":e.validRules,"mouse-config":{selected:!0},"edit-config":{trigger:"dblclick",mode:"cell",showStatus:!0},"keyboard-config":{isArrow:!0,isDel:!0,isEnter:!0,isTab:!0,isEdit:!0},"checkbox-config":{checkField:"checked"}}},[n("vxe-table-column",{attrs:{type:"checkbox",width:"60"}}),n("vxe-table-column",{attrs:{type:"seq",width:"100"}}),n("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:"",width:"200","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"age",title:"Age",width:"200","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"sex",title:"Sex",width:"200","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"rate",title:"Rate",width:"200"}}),n("vxe-table-column",{attrs:{field:"region",title:"Region",width:"200"}}),n("vxe-table-column",{attrs:{field:"time",title:"Time",width:"200"}}),n("vxe-table-column",{attrs:{field:"address",title:"Address",width:"300","show-overflow":""}}),n("vxe-table-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),n("vxe-table-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}})],1),e._m(0),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",[e._v("\n      | Arrow Up ↑ | 移动到当前活动单元格上面的单元格 |\n      | Arrow Down ↓ | 移动到当前活动单元格下面的单元格 |\n      | Arrow Left ← | 移动到当前活动单元格左边的单元格 |\n      | Arrow Right → | 移动到当前活动单元格右边的单元格 |\n      | Tab | 移动到当前选中或活动单元格的右侧单元格，如果到最后一列且存在下一行，则从下一行开始移动 |\n      | Tab + Shift | 移动到当前选中或活动单元格的左侧单元格，如果到第一列且存在上一行，则从上一行开始移动 |\n      | Spacebar | 如果单元格是复选框或单选框则切换勾选状态 |\n      | Enter | 取消编辑并移动到当前活动单元格下面的单元格 |\n      | Delete | 清空内容 |\n      | Backspace | 清空内容并激活选中单元格为编辑状态 |\n      | F2 | 激活单元格编辑 |\n      | Esc | 取消单元格编辑 |\n      | Page Up | 向上翻页滚动 |\n      | Page Down | 向下翻页滚动 |\n      | Home | 滚动到顶部 |\n      | End | 滚动到底部 |\n    ")]),e._v("\n  ")])}],l=(n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("fb6a"),n("07ac"),n("99af"),n("d81d"),n("1487")),o=n.n(l),r={data:function(){return{loading:!1,validRules:{name:[{required:!0,message:"app.body.valid.rName"},{min:3,max:50,message:"名称长度在 3 到 50 个字符"}],sex:[{required:!0,message:"性别必须填写"}]},demoCodes:['\n        <vxe-toolbar :refresh="{query: findList}">\n          <template v-slot:buttons>\n            <vxe-button>\n              <template v-slot>新增操作</template>\n              <template v-slot:dropdowns>\n                <vxe-button type="text" @click="insertEvent(null)">从第一行插入</vxe-button>\n                <vxe-button type="text" @click="insertEvent(-1)">从最后插入</vxe-button>\n                <vxe-button type="text" @click="insertEvent($refs.xTable.getData(100))">插入到 100 行</vxe-button>\n                <vxe-button type="text" @click="insertEvent($refs.xTable.getData(400))">插入到 400 行</vxe-button>\n              </template>\n            </vxe-button>\n            <vxe-button>\n              <template v-slot>删除操作</template>\n              <template v-slot:dropdowns>\n                <vxe-button type="text" @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.remove($refs.xTable.getData(0))">删除第一行</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.remove($refs.xTable.getData($refs.xTable.getData().length - 1))">删除最后一行</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.remove($refs.xTable.getData(100))">删除第 100 行</vxe-button>\n              </template>\n            </vxe-button>\n            <vxe-button>\n              <template v-slot>校验操作</template>\n              <template v-slot:dropdowns>\n                <vxe-button type="text" @click="validEvent">基本校验</vxe-button>\n                <vxe-button type="text" @click="fullValidEvent">完整校验</vxe-button>\n                <vxe-button type="text" @click="selectValidEvent">选中校验</vxe-button>\n              </template>\n            </vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n            <vxe-button>\n              <template v-slot>滚动操作</template>\n              <template v-slot:dropdowns>\n                <vxe-button type="text" @click="$refs.xTable.scrollToRow($refs.xTable.getData(10))">滚动到第 10 行</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.scrollToRow($refs.xTable.getData(400))">滚动第 400 行</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.scrollToColumn($refs.xTable.getColumns(1))">滚动第 1 列</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.scrollToColumn($refs.xTable.getColumns(10))">滚动第 10 列</vxe-button>\n              </template>\n            </vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          show-overflow\n          keep-source\n          ref="xTable"\n          height="300"\n          :loading="loading"\n          :edit-rules="validRules"\n          :mouse-config="{selected: true}"\n          :edit-config="{trigger: \'dblclick\', mode: \'cell\', showStatus: true}"\n          :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"\n          :checkbox-config="{checkField: \'checked\'}">\n          <vxe-table-column type="checkbox" width="60"></vxe-table-column>\n          <vxe-table-column type="seq" width="100"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" sortable width="200" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="age" title="Age" width="200" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" width="200" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="rate" title="Rate" width="200"></vxe-table-column>\n          <vxe-table-column field="region" title="Region" width="200"></vxe-table-column>\n          <vxe-table-column field="time" title="Time" width="200"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" width="300" show-overflow></vxe-table-column>\n          <vxe-table-column field="updateTime" title="UpdateTime" width="200"></vxe-table-column>\n          <vxe-table-column field="createTime" title="CreateTime" width="200"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              validRules: {\n                name: [\n                  { required: true, message: 'app.body.valid.rName' },\n                  { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }\n                ],\n                sex: [\n                  { required: true, message: '性别必须填写' }\n                ]\n              }\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  let tableData = window.MOCK_DATA_LIST.slice(0, 600)\n                  // 阻断 vue 对大数组的监听，避免 vue 绑定大数据造成短暂的卡顿\n                  if (this.$refs.xTable) {\n                    this.$refs.xTable.loadData(tableData)\n                  }\n                  resolve()\n                  this.loading = false\n                }, 300)\n              })\n            },\n            validEvent () {\n              this.$refs.xTable.validate((errMap) => {\n                if (errMap) {\n                  this.$XModal.message({ status: 'error', message: '校验不通过！' })\n                } else {\n                  this.$XModal.message({ status: 'success', message: '校验成功！' })\n                }\n              })\n            },\n            fullValidEvent () {\n              this.$refs.xTable.fullValidate((errMap) => {\n                if (errMap) {\n                  let msgList = []\n                  Object.values(errMap).forEach(errList => {\n                    errList.forEach(params => {\n                      let { rowIndex, column, rules } = params\n                      rules.forEach(rule => {\n                        msgList.push(`第 ${rowIndex} 行 ${column.title} 校验错误：${rule.message}`)\n                      })\n                    })\n                  })\n                  this.$XModal.message({\n                    status: 'error',\n                    slots: {\n                      default () {\n                        return [\n                          <div class=\"red\" style=\"max-height: 400px;overflow: auto;\">\n                            {\n                              msgList.map(msg => {\n                                return <div>{ msg }</div>\n                              })\n                            }\n                          </div>\n                        ]\n                      }\n                    }\n                  })\n                } else {\n                  this.$XModal.message({ status: 'success', message: '校验成功！' })\n                }\n              })\n            },\n            selectValidEvent () {\n              let selectRecords = this.$refs.xTable.getCheckboxRecords()\n              if (selectRecords.length > 0) {\n                this.$refs.xTable.validate(selectRecords, (errMap) => {\n                  if (errMap) {\n                    this.$XModal.message({ status: 'error', message: '校验不通过！' })\n                  } else {\n                    this.$XModal.message({ status: 'success', message: '校验成功！' })\n                  }\n                })\n              } else {\n                this.$XModal.message({ status: 'warning', message: '未选中数据！' })\n              }\n            },\n            insertEvent (row) {\n              let xTable = this.$refs.xTable\n              const record = {\n                checked: false\n              }\n              xTable.insertAt(record, row).then(({ row }) => {\n                xTable.setActiveRow(row)\n              })\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xTable.getInsertRecords()\n              this.$XModal.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              let removeRecords = this.$refs.xTable.getRemoveRecords()\n              this.$XModal.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              let updateRecords = this.$refs.xTable.getUpdateRecords()\n              this.$XModal.alert(updateRecords.length)\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){o.a.highlightBlock(e)}))},methods:{findList:function(){var e=this;return this.loading=!0,new Promise((function(t){setTimeout((function(){var n=window.MOCK_DATA_LIST.slice(0,600);e.$refs.xTable&&e.$refs.xTable.loadData(n),t(),e.loading=!1}),300)}))},validEvent:function(){var e=this;this.$refs.xTable.validate((function(t){t?e.$XModal.message({status:"error",message:"校验不通过！"}):e.$XModal.message({status:"success",message:"校验成功！"})}))},fullValidEvent:function(){var e=this;this.$createElement;this.$refs.xTable.fullValidate((function(t){if(t){var n=[];Object.values(t).forEach((function(e){e.forEach((function(e){var t=e.rowIndex,s=e.column,a=e.rules;a.forEach((function(e){n.push("第 ".concat(t+1," 行 ").concat(s.title," 校验错误：").concat(e.message))}))}))})),e.$XModal.message({status:"error",slots:{default:function(){var e=this.$createElement;return[e("div",{class:"red",style:"max-height: 400px;overflow: auto;"},[n.map((function(t){return e("div",[t])}))])]}}})}else e.$XModal.message({status:"success",message:"校验成功！"})}))},selectValidEvent:function(){var e=this,t=this.$refs.xTable.getCheckboxRecords();t.length>0?this.$refs.xTable.validate(t,(function(t){t?e.$XModal.message({status:"error",message:"校验不通过！"}):e.$XModal.message({status:"success",message:"校验成功！"})})):this.$XModal.message({status:"warning",message:"未选中数据！"})},insertEvent:function(e){var t=this.$refs.xTable,n={checked:!1};t.insertAt(n,e).then((function(e){var n=e.row;t.setActiveRow(n)}))},getInsertEvent:function(){var e=this.$refs.xTable.getInsertRecords();this.$XModal.alert(e.length)},getRemoveEvent:function(){var e=this.$refs.xTable.getRemoveRecords();this.$XModal.alert(e.length)},getUpdateEvent:function(){var e=this.$refs.xTable.getUpdateRecords();this.$XModal.alert(e.length)}}},i=r,c=n("2877"),u=Object(c["a"])(i,s,a,!1,null,null,null);t["default"]=u.exports}}]);