(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d01be"],{6729:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{staticClass:"tip"},[e._v("右键菜单操作")]),t("vxe-virtual-tree",{ref:"xVTree",attrs:{resizable:"","row-key":"","row-id":"id",toolbar:{custom:!0,slots:{buttons:"toolbar_buttons"}},"tree-config":{children:"children"},"checkbox-config":{labelField:"id",checkField:"checked",halfField:"indeterminate"},"context-menu":{header:{options:e.headerMenus},body:{options:e.bodyMenus},visibleMethod:e.visibleMethod},"edit-config":{trigger:"click",mode:"row"},data:e.tableData,columns:e.tableColumn},on:{"context-menu-click":e.contextMenuClickEvent},scopedSlots:e._u([{key:"toolbar_buttons",fn:function(){return[t("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")])]},proxy:!0}])}),e._m(0),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[e._v("    "),t("code",[e._v("\n      | Arrow Up ↑ | 移动到上一个菜单选项 |\n      | Arrow Down ↓ | 移动到下一个菜单选项 |\n      | Arrow Left ← | 关闭二级菜单 |\n      | Arrow Right → | 打开二级菜单 |\n      | Esc | 关闭菜单选项 |\n      | Enter | 选中当前菜单选项 |\n      | Spacebar | 选中当前菜单选项 |\n    ")]),e._v("\n  ")])}],i=(t("d3b7"),t("159b"),t("a630"),t("3ca3"),t("caad"),t("c695")),a=t.n(i),d=t("1487"),s=t.n(d),l={data:function(){return{tableData:[],tableColumn:[{type:"checkbox",title:"ID",width:280,treeNode:!0},{field:"name",title:"Name",editRender:{name:"input"}},{field:"size",title:"Size",editRender:{name:"input"}},{field:"type",title:"Type",editRender:{name:"input"}},{field:"date",title:"Date",editRender:{name:"input"}}],headerMenus:[[{code:"hideColumn",name:"隐藏列",disabled:!1},{code:"showAllColumn",name:"取消所有隐藏列",disabled:!1}]],bodyMenus:[[{code:"insertAt",name:"插入一行",disabled:!1},{code:"expand",name:"展开节点",disabled:!1},{code:"contract",name:"收缩节点",disabled:!1}]],demoCodes:['\n        <vxe-virtual-tree\n          resizable\n          row-key\n          ref="xVTree"\n          row-id="id"\n          :toolbar="{custom: true, slots: {buttons: \'toolbar_buttons\'}}"\n          :tree-config="{children: \'children\'}"\n          :checkbox-config="{labelField: \'id\', checkField: \'checked\', halfField: \'indeterminate\'}"\n          :context-menu="{header: {options: headerMenus}, body: {options: bodyMenus}, visibleMethod}"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          :data="tableData"\n          :columns="tableColumn"\n          @context-menu-click="contextMenuClickEvent">\n          <template v-slot:toolbar_buttons>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n          </template>\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                { type: 'checkbox', title: 'ID', width: 280, treeNode: true },\n                { field: 'name', title: 'Name', editRender: { name: 'input' } },\n                { field: 'size', title: 'Size', editRender: { name: 'input' } },\n                { field: 'type', title: 'Type', editRender: { name: 'input' } },\n                { field: 'date', title: 'Date', editRender: { name: 'input' } }\n              ],\n              headerMenus: [\n                [\n                  {\n                    code: 'hideColumn',\n                    name: '隐藏列',\n                    disabled: false\n                  },\n                  {\n                    code: 'showAllColumn',\n                    name: '取消所有隐藏列',\n                    disabled: false\n                  }\n                ]\n              ],\n              bodyMenus: [\n                [\n                  {\n                    code: 'insertAt',\n                    name: '插入一行',\n                    disabled: false\n                  },\n                  {\n                    code: 'expand',\n                    name: '展开节点',\n                    disabled: false\n                  },\n                  {\n                    code: 'contract',\n                    name: '收缩节点',\n                    disabled: false\n                  }\n                ]\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          },\n          methods: {\n            insertAtEvent (row, column) {\n              let xVTree = this.$refs.xVTree\n              let record = {\n                name: '新数据',\n                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')\n              }\n              // 插入到指定节点位置中\n              xVTree.insertAt(record, row).then(({ row }) => xVTree.setActiveRow(row))\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xVTree.getInsertRecords()\n              this.$XModal.alert(insertRecords.length)\n            },\n            visibleMethod  ({ row, type }) {\n              let xVTree = this.$refs.xVTree\n              if (type === 'body') {\n                this.bodyMenus.forEach(list => {\n                  list.forEach(item => {\n                    if (['expand', 'contract'].includes(item.code)) {\n                      if (row.children && row.children.length) {\n                        let isExpand = xVTree.isTreeExpandByRow(row)\n                        item.disabled = ['expand'].includes(item.code) ? isExpand : !isExpand\n                      } else {\n                        item.disabled = true\n                      }\n                    }\n                  })\n                })\n              }\n              return true\n            },\n            contextMenuClickEvent ({ menu, row, column }) {\n              let xVTree = this.$refs.xVTree\n              switch (menu.code) {\n                case 'hideColumn':\n                  xVTree.hideColumn(column)\n                  break\n                case 'showAllColumn':\n                  xVTree.resetColumn()\n                  break\n                case 'insertAt':\n                  this.insertAtEvent(row, column)\n                  break\n                case 'expand':\n                  xVTree.setTreeExpand(row, true)\n                  break\n                case 'contract':\n                  xVTree.setTreeExpand(row, false)\n                  break\n              }\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=a.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){s.a.highlightBlock(e)}))},methods:{insertAtEvent:function(e){var n=this.$refs.xVTree,t={name:"新数据",date:a.a.toDateString(new Date,"yyyy-MM-dd")};n.insertAt(t,e).then((function(e){var t=e.row;return n.setActiveRow(t)}))},getInsertEvent:function(){var e=this.$refs.xVTree.getInsertRecords();this.$XModal.alert(e.length)},visibleMethod:function(e){var n=e.row,t=e.type,o=this.$refs.xVTree;return"body"===t&&this.bodyMenus.forEach((function(e){e.forEach((function(e){if(["expand","contract"].includes(e.code))if(n.children&&n.children.length){var t=o.isTreeExpandByRow(n);e.disabled=["expand"].includes(e.code)?t:!t}else e.disabled=!0}))})),!0},contextMenuClickEvent:function(e){var n=e.menu,t=e.row,o=e.column,r=this.$refs.xVTree;switch(n.code){case"hideColumn":r.hideColumn(o);break;case"showAllColumn":r.resetColumn();break;case"insertAt":this.insertAtEvent(t,o);break;case"expand":r.setTreeExpand(t,!0);break;case"contract":r.setTreeExpand(t,!1);break}}}},c=l,u=t("2877"),h=Object(u["a"])(c,o,r,!1,null,null,null);n["default"]=h.exports}}]);