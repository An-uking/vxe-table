(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b23b3"],{"22da":function(e,t,n){"use strict";n.r(t);var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("通过 "),n("table-api-link",{attrs:{prop:"edit-config"}}),e._v("."),n("table-api-link",{attrs:{prop:"activeMethod"}}),e._v(" 方法来判断单元格是否禁用，禁用后不可编辑")],1),n("vxe-grid",{attrs:{border:"","show-overflow":"",columns:e.tableColumn,data:e.tableData,"edit-config":{trigger:"click",mode:"cell",activeMethod:e.activeCellMethod}},on:{"edit-disabled":e.editDisabledEvent}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("禁用第二行编辑")]),n("vxe-grid",{attrs:{border:"","show-overflow":"",columns:e.tableColumn2,data:e.tableData,"edit-config":{trigger:"click",mode:"cell",activeMethod:e.activeRowMethod}},on:{"edit-disabled":e.editDisabledEvent}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},a=[],i=(n("fb6a"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("1487")),l=n.n(i),o={data:function(){return{tableData:[],tableColumn:[{type:"seq",width:50},{field:"name",title:"app.body.label.name",editRender:{name:"input"}},{field:"sex",title:"app.body.label.sex",editRender:{name:"input"}},{field:"age",title:"Age",editRender:{name:"input"}},{field:"address",title:"Address",editRender:{name:"input"}}],tableColumn2:[{type:"seq",width:50},{field:"name",title:"app.body.label.name",editRender:{name:"input"}},{field:"sex",title:"app.body.label.sex",editRender:{name:"input"}},{field:"age",title:"Age",editRender:{name:"input"}},{field:"address",title:"Address",editRender:{name:"input"}}],demoCodes:['\n        <vxe-grid\n          border\n          show-overflow\n          :columns="tableColumn"\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\', activeMethod: activeCellMethod}"\n          @edit-disabled="editDisabledEvent">\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'app.body.label.name', editRender: { name: 'input' } },\n                { field: 'sex', title: 'app.body.label.sex', editRender: { name: 'input' } },\n                { field: 'age', title: 'Age', editRender: { name: 'input' } },\n                { field: 'address', title: 'Address', editRender: { name: 'input' } }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n          },\n          methods: {\n            activeCellMethod ({ column, columnIndex }) {\n              if (columnIndex === 1) {\n                return false\n              }\n              return true\n            },\n            editDisabledEvent ({ row, column }) {\n              alert('禁止编辑')\n            }\n          }\n        }\n        ",'\n        <vxe-grid\n          border\n          show-overflow\n          :columns="tableColumn"\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\', activeMethod: activeRowMethod}"\n          @edit-disabled="editDisabledEvent">\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'app.body.label.name', editRender: { name: 'input' } },\n                { field: 'sex', title: 'app.body.label.sex', editRender: { name: 'input' } },\n                { field: 'age', title: 'Age', editRender: { name: 'input' } },\n                { field: 'address', title: 'Address', editRender: { name: 'input' } }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n          },\n          methods: {\n            activeRowMethod ({ row, rowIndex }) {\n              if (rowIndex === 1) {\n                return false\n              }\n              return true\n            },\n            editDisabledEvent ({ row, column }) {\n              this.$XModal.alert('禁止编辑')\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,6)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){l.a.highlightBlock(e)}))},methods:{activeCellMethod:function(e){var t=e.columnIndex;return 1!==t},activeRowMethod:function(e){var t=e.rowIndex;return 1!==t},editDisabledEvent:function(){this.$XModal.alert("禁止编辑")}}},s=o,r=n("2877"),c=Object(r["a"])(s,d,a,!1,null,null,null);t["default"]=c.exports}}]);