(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53c7fd09"],{"24de":function(e,t,a){"use strict";a("e890")},"26f2":function(e,t,a){"use strict";a("ab0b")},8980:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=this,a=t.$createElement,s=t._self._c||a;return s("page-header-wrapper",[s("a-card",{attrs:{bordered:!1}},[s("div",{staticClass:"table-page-search-wrapper"},[s("a-form",{attrs:{layout:"inline"}},[s("a-row",{attrs:{gutter:48}},[s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"所属大V"}},[s("div",{staticClass:"select-v",on:{click:t.selectVData}},[t._v(t._s(t.vData.name))])])],1),s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"客户手机号"}},[s("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.phone,callback:function(e){t.$set(t.queryParam,"phone",e)},expression:"queryParam.phone"}})],1)],1),t.advanced?[s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"客户姓名"}},[s("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.name,callback:function(e){t.$set(t.queryParam,"name",e)},expression:"queryParam.name"}})],1)],1),s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"状态"}},[s("a-select",{attrs:{placeholder:"请选择状态"},model:{value:t.queryParam.status,callback:function(e){t.$set(t.queryParam,"status",e)},expression:"queryParam.status"}},[s("a-select-option",{attrs:{value:this.customConfig.status.online}},[t._v("线上咨询")]),s("a-select-option",{attrs:{value:this.customConfig.status.offline}},[t._v("线下带看")]),s("a-select-option",{attrs:{value:this.customConfig.status.deal}},[t._v("成交")]),s("a-select-option",{attrs:{value:this.customConfig.status.other}},[t._v("其他")])],1)],1)],1),s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"意向楼盘"}},[s("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.intentionHouse,callback:function(e){t.$set(t.queryParam,"intentionHouse",e)},expression:"queryParam.intentionHouse"}})],1)],1),s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"购房预算"}},[s("a-input-number",{attrs:{min:0,max:2e3},model:{value:t.queryParam.budgetStart,callback:function(e){t.$set(t.queryParam,"budgetStart",e)},expression:"queryParam.budgetStart"}}),t._v(" 至 "),s("a-input-number",{attrs:{min:0,max:2e3},model:{value:t.queryParam.budgetEnd,callback:function(e){t.$set(t.queryParam,"budgetEnd",e)},expression:"queryParam.budgetEnd"}})],1)],1),s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"意向面积"}},[s("a-select",{attrs:{placeholder:"请选择意向面积"},model:{value:t.queryParam.intentionArea,callback:function(e){t.$set(t.queryParam,"intentionArea",e)},expression:"queryParam.intentionArea"}},[s("a-select-option",{attrs:{value:this.customConfig.area.unlimited}},[t._v("不限")]),s("a-select-option",{attrs:{value:this.customConfig.area.level1}},[t._v("60㎡以下")]),s("a-select-option",{attrs:{value:this.customConfig.area.level2}},[t._v("60-90㎡")]),s("a-select-option",{attrs:{value:this.customConfig.area.level3}},[t._v("90-110㎡")]),s("a-select-option",{attrs:{value:this.customConfig.area.level4}},[t._v("110-130㎡")]),s("a-select-option",{attrs:{value:this.customConfig.area.level5}},[t._v("130-150㎡")]),s("a-select-option",{attrs:{value:this.customConfig.area.level6}},[t._v("150-200㎡")]),s("a-select-option",{attrs:{value:this.customConfig.area.level7}},[t._v("200㎡以上")])],1)],1)],1)]:t._e(),s("a-col",{attrs:{md:t.advanced?24:8,sm:24}},[s("span",{staticClass:"table-page-search-submitButtons",style:t.advanced&&{float:"right",overflow:"hidden"}||{}},[s("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),s("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){e.queryParam={},e.vData={name:""}}}},[t._v("重置")]),s("a",{staticStyle:{"margin-left":"8px"},on:{click:t.toggleAdvanced}},[t._v(" "+t._s(t.advanced?"收起":"展开")+" "),s("a-icon",{attrs:{type:t.advanced?"up":"down"}})],1)],1)])],2)],1)],1),s("div",{staticClass:"table-operator"},[s("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAdd}},[t._v("新建")])],1),s("s-table",{ref:"table",attrs:{size:"default",rowKey:"id",columns:t.columns,data:t.loadData,scroll:{x:!0},showPagination:"auto"},scopedSlots:t._u([{key:"status",fn:function(e){return s("span",{},[t._v(" "+t._s(t.getCustomStatus(e))+" ")])}},{key:"intentionArea",fn:function(e){return s("span",{},[t._v(" "+t._s(t.getCustomIntentionArea(e))+" ")])}},{key:"action",fn:function(e,a){return s("span",{},[[s("a",{on:{click:function(e){return t.edit(a)}}},[t._v("编辑")]),s("a-divider",{attrs:{type:"vertical"}}),s("a",{on:{click:function(e){return t.deleteCustom(a)}}},[t._v("删除")])]],2)}}])}),s("select-v",{attrs:{visible:t.visible},on:{cancel:t.handleSelectVCancel,ok:t.handleSelectVOk}}),t.editVisible?s("custom-edit",{attrs:{visible:t.editVisible,data:t.data},on:{cancel:t.handleCustomEditCancel,ok:t.handleCustomEditOk}}):t._e()],1)],1)},n=[],i=a("2af9"),l=a("0fea"),o=a("a754"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"编辑客户",width:1200,visible:e.visible,footer:null,destroyOnClose:""},on:{ok:function(){e.$emit("ok")},cancel:function(){e.$emit("cancel")}}},[a("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1}},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入客户姓名"}],initialValue:e.data.name}],expression:"[\n            'name',\n            {rules: [{ required: true, message: '请输入客户姓名' }], initialValue: data.name}\n          ]"}],attrs:{name:"name",placeholder:"客户姓名"}})],1),a("a-form-item",{attrs:{label:"年龄",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["age",{initialValue:e.data.age}],expression:"[\n            'age',\n            { initialValue: data.age }\n          ]"}],attrs:{min:0,type:"number",name:"age",placeholder:"年龄"}})],1),a("a-form-item",{attrs:{label:"性别",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",{rules:[{required:!0,message:"请选择用户性别"}],initialValue:""+(e.data.sex||"")}],expression:"['sex', {rules: [{ required: true, message: '请选择用户性别' }], initialValue: `${data.sex || ''}` }]"}]},[a("a-radio",{attrs:{value:this.sexConfig.male}},[e._v("男")]),a("a-radio",{attrs:{value:this.sexConfig.female}},[e._v("女")])],1)],1),a("a-form-item",{attrs:{label:"手机号",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"请输入手机号"}],initialValue:e.data.phone}],expression:"[\n            'phone',\n            {rules: [{ required: true, message: '请输入手机号' }], initialValue: data.phone}\n          ]"}],attrs:{placeholder:"手机号"}})],1),a("a-form-item",{attrs:{label:"所属大V",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("div",{directives:[{name:"decorator",rawName:"v-decorator",value:["vId",{rules:[{required:!0,message:"请选择大V"}],initialValue:e.data.vId}],expression:"[\n            'vId',\n            {rules: [{ required: true, message: '请选择大V' }], initialValue: data.vId}\n          ]"}],staticClass:"select-v",attrs:{name:"vId"},on:{click:e.selectVData}},[e._v(e._s(e.vData.name))])]),a("a-form-item",{attrs:{label:"状态",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{rules:[{required:!0,message:"请选择状态"}],initialValue:""+(e.data.status||"")}],expression:"[\n            'status',\n            {rules: [{ required: true, message: '请选择状态' }], initialValue: `${data.status || ''}`}\n          ]"}],attrs:{placeholder:"请选择状态"}},[a("a-select-option",{attrs:{value:this.customConfig.status.online}},[e._v("线上咨询")]),a("a-select-option",{attrs:{value:this.customConfig.status.offline}},[e._v("线下带看")]),a("a-select-option",{attrs:{value:this.customConfig.status.deal}},[e._v("成交")]),a("a-select-option",{attrs:{value:this.customConfig.status.other}},[e._v("其他")])],1)],1),a("a-form-item",{attrs:{label:"意向楼盘",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["intentionHouse",{initialValue:e.data.intentionHouse}],expression:"[\n            'intentionHouse',\n            { initialValue: data.intentionHouse }\n          ]"}],attrs:{placeholder:"意向楼盘"}})],1),a("a-form-item",{attrs:{label:"购房预算",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["purchaseBudget",{initialValue:e.data.purchaseBudget}],expression:"[\n            'purchaseBudget',\n            { initialValue: data.purchaseBudget }\n          ]"}],attrs:{min:0,max:2e3,formatter:function(e){return e+"万"},parser:function(e){return e.replace("万","")}}})],1),a("a-form-item",{attrs:{label:"意向面积",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["intentionArea",{initialValue:e.data.intentionArea}],expression:"[\n            'intentionArea',\n            { initialValue: data.intentionArea }\n          ]"}],attrs:{placeholder:"请选择意向面积"}},[a("a-select-option",{attrs:{value:this.customConfig.area.unlimited}},[e._v("不限")]),a("a-select-option",{attrs:{value:this.customConfig.area.level1}},[e._v("60㎡以下")]),a("a-select-option",{attrs:{value:this.customConfig.area.level2}},[e._v("60-90㎡")]),a("a-select-option",{attrs:{value:this.customConfig.area.level3}},[e._v("90-110㎡")]),a("a-select-option",{attrs:{value:this.customConfig.area.level4}},[e._v("110-130㎡")]),a("a-select-option",{attrs:{value:this.customConfig.area.level5}},[e._v("130-150㎡")]),a("a-select-option",{attrs:{value:this.customConfig.area.level6}},[e._v("150-200㎡")]),a("a-select-option",{attrs:{value:this.customConfig.area.level7}},[e._v("200㎡以上")])],1)],1),a("a-form-item",{attrs:{label:"意向户型",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["intentionHouseType",{initialValue:e.data.intentionHouseType}],expression:"[\n            'intentionHouseType',\n            { initialValue: data.intentionHouseType }\n          ]"}],attrs:{placeholder:"请选择意向户型"}},[a("a-select-option",{attrs:{value:this.customConfig.houseType.unlimited}},[e._v("不限")]),a("a-select-option",{attrs:{value:this.customConfig.houseType.level1}},[e._v("一室")]),a("a-select-option",{attrs:{value:this.customConfig.houseType.level2}},[e._v("两室")]),a("a-select-option",{attrs:{value:this.customConfig.houseType.level3}},[e._v("三室")]),a("a-select-option",{attrs:{value:this.customConfig.houseType.level4}},[e._v("四室")]),a("a-select-option",{attrs:{value:this.customConfig.houseType.level5}},[e._v("四室以上")])],1)],1),a("a-form-item",{attrs:{label:"备注",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{initialValue:e.data.remark}],expression:"[\n            'remark',\n            { initialValue: data.remark }\n          ]"}],attrs:{rows:"4",placeholder:"备注"}})],1),a("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[a("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v(e._s(e.$t("form.basic-form.form.submit")))])],1)],1),a("select-v",{attrs:{visible:e.vModelVisible},on:{cancel:e.handleSelectVCancel,ok:e.handleSelectVOk}})],1)],1)},u=[],c=a("5530"),d=a("a078"),m={props:{visible:{type:Boolean,required:!0},data:{type:Object,required:!0}},components:{SelectV:o["a"]},data:function(){return this.sexConfig=d["k"],this.customConfig=d["f"],{form:this.$form.createForm(this),vData:{name:this.data.vname,vId:this.data.vId},vModelVisible:!1}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||Object(l["v"])(Object(c["a"])(Object(c["a"])({},a),{},{id:t.data.id})).then((function(e){t.$emit("ok")}))}))},selectVData:function(e){e.preventDefault(),this.vModelVisible=!0},handleSelectVCancel:function(){this.vModelVisible=!1},handleSelectVOk:function(e){this.vModelVisible=!1,null!==e&&void 0!==e&&""!==e&&(this.vData=e,this.form.setFieldsValue({vId:e.id}))}},created:function(){}},p=m,v=(a("24de"),a("2877")),f=Object(v["a"])(p,r,u,!1,null,"2410e6bc",null),h=f.exports,b=a("ca00"),g=[{title:"客户 id",dataIndex:"id"},{title:"客户昵称",dataIndex:"name"},{title:"手机号码",dataIndex:"phone"},{title:"意向楼盘",dataIndex:"intentionHouse"},{title:"购房预算(万)",dataIndex:"purchaseBudget"},{title:"意向面积(㎡)",scopedSlots:{customRender:"intentionArea"},dataIndex:"intentionArea"},{title:"所属大V",dataIndex:"vname"},{title:"添加时间",dataIndex:"createTime",sorter:!0},{title:"最近更新时间",dataIndex:"updateTime",sorter:!0},{title:"状态",scopedSlots:{customRender:"status"},dataIndex:"status"},{title:"操作",dataIndex:"action",width:"150px",fixed:"right",scopedSlots:{customRender:"action"}}],y={name:"CustomList",components:{STable:i["c"],Ellipsis:i["b"],SelectV:o["a"],CustomEdit:h},data:function(){var e=this;return this.columns=g,this.customConfig=d["f"],{visible:!1,cId:"",mdl:null,advanced:!1,vData:{name:""},editVisible:!1,queryParam:{},loadData:function(t){var a=Object.assign({},t,e.queryParam);return Object(l["P"])(a).then((function(e){return{data:e.data.list,page:a.page,total:e.data.total}}))},data:{}}},methods:{handleAdd:function(){this.$router.push("/custom/create-custom")},selectVData:function(e){e.preventDefault(),this.visible=!0},handleSelectVCancel:function(){this.visible=!1},handleSelectVOk:function(e){this.visible=!1,null!==e&&void 0!==e&&""!==e&&(this.vData=e,this.queryParam.vId=e.id)},getCustomIntentionArea:function(e){return Object(b["h"])(e)},getCustomStatus:function(e){return Object(b["i"])(e)},toggleAdvanced:function(){this.advanced=!this.advanced},deleteCustom:function(e){var t=this;this.$confirm({title:"确定要删除该客户吗?",content:"删除后无法复原,请谨慎",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){Object(l["o"])(e.id).then((function(e){t.$notification.success({message:"删除成功"}),t.$refs.table.loadData()}))}})},edit:function(e){this.data=e,this.editVisible=!0},handleCustomEditCancel:function(){this.editVisible=!1},handleCustomEditOk:function(){this.editVisible=!1,this.$refs.table.loadData()}}},C=y,x=(a("26f2"),Object(v["a"])(C,s,n,!1,null,null,null));t["default"]=x.exports},a754:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"选择大V",width:1200,visible:e.visible,footer:null},on:{ok:function(){e.$emit("ok")},cancel:function(){e.$emit("cancel")}}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"大V名字"}},[a("a-input",{attrs:{placeholder:""},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"手机号"}},[a("a-input",{attrs:{placeholder:""},model:{value:e.queryParam.phone,callback:function(t){e.$set(e.queryParam,"phone",t)},expression:"queryParam.phone"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",style:{float:"right",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")])],1)])],1)],1)],1),this.selectedRowKeys.length>0?a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary"},on:{click:e.selectUser}},[e._v("选择")])],1):e._e(),a("s-table",{ref:"table",attrs:{size:"default",rowKey:"vId",columns:e.columns,data:e.loadData,alert:this.isMultiple?e.options.alert:null,rowSelection:this.isMultiple?e.options.rowSelection:null,showPagination:"auto"},scopedSlots:e._u([{key:"avatar",fn:function(e){return a("span",{},[a("a-avatar",{attrs:{src:e}})],1)}},{key:"action",fn:function(t,s){return a("span",{},[[a("a",{on:{click:function(){e.$emit("ok",Object.assign({},s,{id:s.vId}))}}},[e._v("选择")])]],2)}}])})],1)},n=[],i=a("5530"),l=(a("d81d"),a("b0c0"),a("2af9")),o=a("0fea"),r=[{title:"大V编号",dataIndex:"vId"},{title:"头像",dataIndex:"avatar",scopedSlots:{customRender:"avatar"}},{title:"名字",dataIndex:"name"},{title:"手机号",dataIndex:"phone"},{title:"操作",dataIndex:"action",width:"150px",scopedSlots:{customRender:"action"}}],u=[{title:"大V编号",dataIndex:"vId"},{title:"头像",dataIndex:"avatar",scopedSlots:{customRender:"avatar"}},{title:"名字",dataIndex:"name"},{title:"手机号",dataIndex:"phone"}],c={props:{visible:{type:Boolean,required:!0},isMultiple:{type:Boolean},selectKeys:{type:Array,default:function(){return[]}},selectRows:{type:Array,default:function(){return[]}}},components:{STable:l["c"]},methods:{onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},selectUser:function(){var e="",t="";this.selectedRows.map((function(a){e+=a.vId+",",t+=a.name+","})),e=e.substring(0,e.length-1),t=t.substring(0,t.length-1),this.$emit("ok",{name:t,id:e})}},data:function(){var e=this;return this.columns=this.isMultiple?u:r,{queryParam:{},selectedRowKeys:this.selectKeys,selectedRows:this.selectRows,options:{alert:{show:!0,clear:function(){e.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectKeys,onChange:this.onSelectChange}},optionAlertShow:!1,loadData:function(t){var a=Object.assign({},t,e.queryParam);return Object(o["eb"])(a).then((function(e){return Object(i["a"])(Object(i["a"])({},e.data),{},{page:a.page})}))}}},created:function(){}},d=c,m=a("2877"),p=Object(m["a"])(d,s,n,!1,null,null,null);t["a"]=p.exports},ab0b:function(e,t,a){},e890:function(e,t,a){}}]);