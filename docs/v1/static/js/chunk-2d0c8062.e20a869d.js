(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8062"],{"52b1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v(e._s(e.$t("app.aside.nav.pager")))]),a("p",{staticClass:"tip"},[e._v("支持自定义的分页，查看 "),a("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"pager"}}}},[e._v("API")]),e._v("，可以通过 "),a("router-link",{staticClass:"link",attrs:{to:{name:"StartGlobal"}}},[e._v("setup")]),e._v(" 设置全局参数")],1),a("p",[a("vxe-pager",{attrs:{align:"left","current-page":e.page1.currentPage,"page-size":e.page1.pageSize,total:e.page1.totalResult},on:{"update:currentPage":function(t){return e.$set(e.page1,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page1,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page1,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page1,"pageSize",t)}}}),a("vxe-pager",{attrs:{align:"left",size:"medium","current-page":e.page2.currentPage,"page-size":e.page2.pageSize,total:e.page2.totalResult},on:{"update:currentPage":function(t){return e.$set(e.page2,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page2,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page2,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page2,"pageSize",t)}}}),a("vxe-pager",{attrs:{align:"left",size:"small","current-page":e.page2.currentPage,"page-size":e.page2.pageSize,total:e.page2.totalResult},on:{"update:currentPage":function(t){return e.$set(e.page2,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page2,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page2,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page2,"pageSize",t)}}}),a("vxe-pager",{attrs:{align:"left",size:"mini","current-page":e.page2.currentPage,"page-size":e.page2.pageSize,total:e.page2.totalResult},on:{"update:currentPage":function(t){return e.$set(e.page2,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page2,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page2,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page2,"pageSize",t)}}})],1),a("p",[a("vxe-pager",{attrs:{"current-page":e.page4.currentPage,"page-size":e.page4.pageSize,total:e.page4.totalResult,layouts:["PrevJump","PrevPage","Number","NextPage","NextJump","Sizes","FullJump","Total"]},on:{"update:currentPage":function(t){return e.$set(e.page4,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page4,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page4,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page4,"pageSize",t)}}}),a("vxe-pager",{attrs:{background:"","current-page":e.page5.currentPage,"page-size":e.page5.pageSize,total:e.page5.totalResult,layouts:["PrevJump","PrevPage","JumpNumber","NextPage","NextJump","Sizes","FullJump","Total"]},on:{"update:currentPage":function(t){return e.$set(e.page5,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page5,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page5,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page5,"pageSize",t)}}})],1),a("p",[a("vxe-tooltip",{ref:"xTip"}),a("vxe-table",{attrs:{border:"",height:"200",data:e.tableData}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name"}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1),a("vxe-pager",{attrs:{perfect:"","current-page":e.page6.currentPage,"page-size":e.page6.pageSize,total:e.page6.totalResult,"page-sizes":[10,20,100,{label:"大量数据",value:1e3},{label:"全量数据",value:-1}],layouts:["PrevJump","PrevPage","Number","NextPage","NextJump","Sizes","FullJump","Total"]},on:{"update:currentPage":function(t){return e.$set(e.page6,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page6,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page6,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page6,"pageSize",t)}},scopedSlots:e._u([{key:"left",fn:function(){return[a("vxe-button",{attrs:{size:"small"},scopedSlots:e._u([{key:"default",fn:function(){return[e._v("更多操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[a("vxe-button",{attrs:{type:"text"}},[e._v("批量修改")]),a("vxe-button",{attrs:{type:"text"}},[e._v("批量管理")]),a("vxe-button",{attrs:{type:"text"}},[e._v("批量删除")])]},proxy:!0}])})]},proxy:!0},{key:"right",fn:function(){return[a("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}}),a("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}}),a("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}})]},proxy:!0}])})],1),e._m(0),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[e._v("    "),a("code",[e._v("\n      | Arrow Up ↑ | 如果在当前页输入框内则向上翻页 |\n      | Arrow Down ↓ | 如果在当前页输入框内则向下翻页 |\n    ")]),e._v("\n  ")])}],p=(a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("fb6a"),a("1487")),g=a.n(p),u={data:function(){return{page1:{currentPage:1,pageSize:10,totalResult:200},page2:{currentPage:1,pageSize:10,totalResult:200},page3:{currentPage:1,pageSize:10,totalResult:200},page4:{currentPage:1,pageSize:10,totalResult:300},page5:{currentPage:1,pageSize:10,totalResult:300},page6:{currentPage:1,pageSize:10,totalResult:300},tableData:[],demoCodes:['\n        <p>\n          <vxe-pager\n            align="left"\n            :current-page.sync="page1.currentPage"\n            :page-size.sync="page1.pageSize"\n            :total="page1.totalResult">\n          </vxe-pager>\n          <vxe-pager\n            align="left"\n            size="medium"\n            :current-page.sync="page2.currentPage"\n            :page-size.sync="page2.pageSize"\n            :total="page2.totalResult">\n          </vxe-pager>\n          <vxe-pager\n            align="left"\n            size="small"\n            :current-page.sync="page2.currentPage"\n            :page-size.sync="page2.pageSize"\n            :total="page2.totalResult">\n          </vxe-pager>\n          <vxe-pager\n            align="left"\n            size="mini"\n            :current-page.sync="page2.currentPage"\n            :page-size.sync="page2.pageSize"\n            :total="page2.totalResult">\n          </vxe-pager>\n        </p>\n\n        <p>\n          <vxe-pager\n            :current-page.sync="page4.currentPage"\n            :page-size.sync="page4.pageSize"\n            :total="page4.totalResult"\n            :layouts="[\'PrevJump\', \'PrevPage\', \'Number\', \'NextPage\', \'NextJump\', \'Sizes\', \'FullJump\', \'Total\']">\n          </vxe-pager>\n\n          <vxe-pager\n            background\n            :current-page.sync="page5.currentPage"\n            :page-size.sync="page5.pageSize"\n            :total="page5.totalResult"\n            :layouts="[\'PrevJump\', \'PrevPage\', \'JumpNumber\', \'NextPage\', \'NextJump\', \'Sizes\', \'FullJump\', \'Total\']">\n          </vxe-pager>\n        </p>\n\n        <p>\n          <vxe-tooltip ref="xTip"></vxe-tooltip>\n          <vxe-table\n            border\n            height="200"\n            :data="tableData">\n            <vxe-table-column type="seq" width="60"></vxe-table-column>\n            <vxe-table-column field="name" title="Name"></vxe-table-column>\n            <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n            <vxe-table-column field="age" title="Age"></vxe-table-column>\n          </vxe-table>\n          <vxe-pager\n            perfect\n            :current-page.sync="page6.currentPage"\n            :page-size.sync="page6.pageSize"\n            :total="page6.totalResult"\n            :page-sizes="[10, 20, 100, {label: \'大量数据\', value: 1000}, {label: \'全量数据\', value: -1}]"\n            :layouts="[\'PrevJump\', \'PrevPage\', \'Number\', \'NextPage\', \'NextJump\', \'Sizes\', \'FullJump\', \'Total\']">\n            <template v-slot:left>\n              <vxe-button size="small">\n                <template v-slot>更多操作</template>\n                <template v-slot:dropdowns>\n                  <vxe-button type="text">批量修改</vxe-button>\n                  <vxe-button type="text">批量管理</vxe-button>\n                  <vxe-button type="text">批量删除</vxe-button>\n                </template>\n              </vxe-button>\n            </template>\n            <template v-slot:right>\n              <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n              <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n              <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n            </template>\n          </vxe-pager>\n        </p>\n        ',"\n        export default {\n          data () {\n            return {\n              page1: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 200\n              },\n              page2: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 200\n              },\n              page3: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 200\n              },\n              page4: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 300\n              },\n              page5: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 300\n              },\n              page6: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 300\n              },\n              tableData: []\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){g.a.highlightBlock(e)}))},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,8)}},l=u,i=a("2877"),s=Object(i["a"])(l,n,r,!1,null,null,null);t["default"]=s.exports}}]);