(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7215"],{7600:function(e,n,t){"use strict";t.r(n);t("b0c0");var a=t("7a23"),i={class:"tip"},s=Object(a["l"])("表单数据代理，可以通过设置 "),o=Object(a["l"])("={"),r=Object(a["l"])("} 渲染表单"),l={class:"demo-code"},m=Object(a["l"])("      "),d=Object(a["l"])("\r\n      "),c=Object(a["l"])("\r\n    ");function u(e,n,t,u,p,b){var f=Object(a["L"])("grid-api-link"),x=Object(a["L"])("vxe-input"),g=Object(a["L"])("vxe-option"),v=Object(a["L"])("vxe-select"),O=Object(a["L"])("vxe-button"),h=Object(a["L"])("vxe-grid"),j=Object(a["L"])("pre-code");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["j"])("p",i,[s,Object(a["m"])(f,{prop:"form-config"}),o,Object(a["m"])(f,{prop:"items"}),r]),Object(a["m"])(h,Object(a["w"])(Object(a["p"])(e.gridOptions)),{name_item:Object(a["V"])((function(e){var n=e.data;return[Object(a["m"])(x,{modelValue:n.name,"onUpdate:modelValue":function(e){return n.name=e},type:"text",placeholder:"请输入名称"},null,8,["modelValue","onUpdate:modelValue"])]})),sex_item:Object(a["V"])((function(n){var t=n.data;return[Object(a["m"])(v,{modelValue:t.sex,"onUpdate:modelValue":function(e){return t.sex=e},transfer:""},{default:Object(a["V"])((function(){return[(Object(a["D"])(!0),Object(a["i"])(a["a"],null,Object(a["J"])(e.sexList1,(function(e){return Object(a["D"])(),Object(a["g"])(g,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),submit_item:Object(a["V"])((function(){return[Object(a["m"])(O,{type:"submit",status:"primary",content:"查询"})]})),reset_item:Object(a["V"])((function(){return[Object(a["m"])(O,{type:"reset",content:"重置"})]})),_:1},16),Object(a["j"])("p",l,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[m,Object(a["m"])(j,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[0]),1)]})),_:1}),d,Object(a["m"])(j,{class:"javascript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[1]),1)]})),_:1}),c])])}t("d3b7");var p=Object(a["n"])({setup:function(){var e=Object(a["H"])({resizable:!0,border:!0,showOverflow:!0,height:400,exportConfig:{},pagerConfig:{pageSize:10},formConfig:{items:[{field:"name",title:"名称",itemRender:{},slots:{default:"name_item"}},{field:"sex",title:"性别",itemRender:{},slots:{default:"sex_item"}},{itemRender:{},slots:{default:"submit_item"}},{itemRender:{},slots:{default:"reset_item"}}]},toolbarConfig:{export:!0,custom:!0},proxyConfig:{form:!0,ajax:{query:function(e){var n=e.page,t=e.form;return new Promise((function(e){setTimeout((function(){var a=[{id:10001,name:"Test1"+t.name,nickname:"T1",role:"Develop",sex:"1",age:28,address:"Shenzhen"},{id:10002,name:"Test2"+t.name,nickname:"T2",role:"Test",sex:"0",age:22,address:"Guangzhou"},{id:10003,name:"Test3"+t.name,nickname:"T3",role:"PM",sex:"1",age:32,address:"Shanghai"},{id:10004,name:"Test4"+t.name,nickname:"T4",role:"Designer",sex:"0",age:23,address:"Shenzhen"},{id:10005,name:"Test5"+t.name,nickname:"T5",role:"Develop",sex:"0",age:30,address:"Shanghai"},{id:10006,name:"Test6"+t.name,nickname:"T6",role:"Develop",sex:"0",age:27,address:"Shanghai"},{id:10007,name:"Test7"+t.name,nickname:"T7",role:"Develop",sex:"1",age:29,address:"Shenzhen"},{id:10008,name:"Test8"+t.name,nickname:"T8",role:"Develop",sex:"0",age:32,address:"Shanghai"},{id:10009,name:"Test9"+t.name,nickname:"T9",role:"Develop",sex:"1",age:30,address:"Shenzhen"},{id:10010,name:"Test10"+t.name,nickname:"T10",role:"Develop",sex:"0",age:34,address:"Shanghai"}];e({result:a,page:{totle:20*n.pageSize}})}),500)}))}}},columns:[{type:"seq",width:60},{type:"checkbox",width:60},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"age",title:"Age"},{field:"sex",title:"Sex"},{field:"describe",title:"Describe",showOverflow:!0}]}),n=Object(a["I"])([]);return setTimeout((function(){n.value=[{value:"1",label:"男"},{value:"0",label:"女"}]}),200),{gridOptions:e,sexList1:n,demoCodes:['\n        <vxe-grid v-bind="gridOptions">\n          <template #name_item="{ data }">\n            <vxe-input v-model="data.name" type="text" placeholder="请输入名称"></vxe-input>\n          </template>\n          <template #sex_item="{ data }">\n            <vxe-select v-model="data.sex" transfer>\n              <vxe-option v-for="item in sexList1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n            </vxe-select>\n          </template>\n          <template #submit_item>\n            <vxe-button type="submit" status="primary" content="查询"></vxe-button>\n          </template>\n          <template #reset_item>\n            <vxe-button type="reset" content="重置"></vxe-button>\n          </template>\n        </vxe-grid>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VxeGridProps } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const gridOptions = reactive<VxeGridProps>({\n              resizable: true,\n              border: true,\n              showOverflow: true,\n              height: 400,\n              exportConfig: {},\n              pagerConfig: {\n                pageSize: 10\n              },\n              formConfig: {\n                items: [\n                  { field: 'name', title: '名称', itemRender: {}, slots: { default: 'name_item' } },\n                  { field: 'sex', title: '性别', itemRender: {}, slots: { default: 'sex_item' } },\n                  { itemRender: {}, slots: { default: 'submit_item' } },\n                  { itemRender: {}, slots: { default: 'reset_item' } }\n                ]\n              },\n              toolbarConfig: {\n                export: true,\n                custom: true\n              },\n              proxyConfig: {\n                form: true, // 启用表单代理\n                ajax: {\n                  // 接收 Promise API\n                  query: ({ page, form }) => {\n                    return new Promise(resolve => {\n                      setTimeout(() => {\n                        const list = [\n                          { id: 10001, name: 'Test1' + form.name, nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },\n                          { id: 10002, name: 'Test2' + form.name, nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },\n                          { id: 10003, name: 'Test3' + form.name, nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },\n                          { id: 10004, name: 'Test4' + form.name, nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },\n                          { id: 10005, name: 'Test5' + form.name, nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },\n                          { id: 10006, name: 'Test6' + form.name, nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },\n                          { id: 10007, name: 'Test7' + form.name, nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },\n                          { id: 10008, name: 'Test8' + form.name, nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },\n                          { id: 10009, name: 'Test9' + form.name, nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },\n                          { id: 10010, name: 'Test10' + form.name, nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }\n                        ]\n                        resolve({\n                          result: list,\n                          page: {\n                            totle: page.pageSize * 20\n                          }\n                        })\n                      }, 500)\n                    })\n                  }\n                }\n              },\n              columns: [\n                { type: 'seq', width: 60 },\n                { type: 'checkbox', width: 60 },\n                { field: 'name', title: 'Name' },\n                { field: 'nickname', title: 'Nickname' },\n                { field: 'age', title: 'Age' },\n                { field: 'sex', title: 'Sex' },\n                { field: 'describe', title: 'Describe', showOverflow: true }\n              ]\n            })\n\n            const sexList1 = ref<any[]>([])\n\n            // 异步更新下拉选项\n            setTimeout(() => {\n              sexList1.value = [\n                { value: '1', label: '男' },\n                { value: '0', label: '女' }\n              ]\n            }, 200)\n\n            return {\n              gridOptions,\n              sexList1\n            }\n          }\n        })\n        "]}}}),b=t("6b0d"),f=t.n(b);const x=f()(p,[["render",u]]);n["default"]=x}}]);