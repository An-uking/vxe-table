(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0d75"],{"9da5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"tip"},[e._v(" 固定列，通过设置 "),a("table-column-api-link",{attrs:{prop:"fixed"}}),e._v("=left|right 来启用固定列"),a("br"),e._v(" 当横向内容过多时，将列固定在左右两侧 ")],1),a("vxe-table",{attrs:{border:"inner","show-overflow":"",data:e.tableData}},[a("vxe-column",{attrs:{type:"seq",width:"60",fixed:"left"}}),a("vxe-column",{attrs:{field:"name",title:"Name",width:"300"}}),a("vxe-column",{attrs:{field:"role",title:"Role",width:"300"}}),a("vxe-column",{attrs:{field:"sex",title:"Sex",width:"300"}}),a("vxe-column",{attrs:{field:"date",title:"Date",width:"300"}}),a("vxe-column",{attrs:{field:"address",title:"Address",fixed:"right",width:"300"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),a("p",{staticClass:"tip"},[e._v("如果列宽足够的情况下，固定列不会浮动")]),a("vxe-table",{attrs:{border:"","show-overflow":"",data:e.tableData}},[a("vxe-column",{attrs:{type:"seq",width:"60",fixed:"left"}}),a("vxe-column",{attrs:{field:"name",title:"Name"}}),a("vxe-column",{attrs:{field:"role",title:"Role"}}),a("vxe-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}}),a("vxe-column",{attrs:{field:"address",title:"Address",fixed:"right",width:"300"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1)],1)},s=[],l={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:24,address:"Shanghai"}],demoCodes:['\n        <vxe-table\n          border="inner"\n          show-overflow\n          :data="tableData">\n          <vxe-column type="seq" width="60" fixed="left"></vxe-column>\n          <vxe-column field="name" title="Name" width="300"></vxe-column>\n          <vxe-column field="role" title="Role" width="300"></vxe-column>\n          <vxe-column field="sex" title="Sex" width="300"></vxe-column>\n          <vxe-column field="date" title="Date" width="300"></vxe-column>\n          <vxe-column field="address" title="Address" fixed="right" width="300"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }\n              ]\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          show-overflow\n          :data="tableData">\n          <vxe-column type="seq" width="60" fixed="left"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="role" title="Role"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" fixed="right" width="300"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }\n              ]\n            }\n          }\n        }\n        "]}}},d=l,o=a("2877"),i=Object(o["a"])(d,n,s,!1,null,null,null);t["default"]=i.exports}}]);