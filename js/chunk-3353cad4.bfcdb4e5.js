(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3353cad4"],{6604:function(e,t,a){},6698:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-header-wrapper",[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"合作伙伴名称"}},[a("a-input",{attrs:{placeholder:""},model:{value:e.queryParam.search,callback:function(t){e.$set(e.queryParam,"search",t)},expression:"queryParam.search"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",style:{}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新建")])],1),this.selectedRowKeys.length>0?a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary"},on:{click:e.batchDelete}},[e._v("批量删除")])],1):e._e(),a("s-table",{ref:"table",attrs:{size:"default",rowKey:"uuid",scroll:{x:!0},columns:e.columns,data:e.loadData,alert:e.options.alert,rowSelection:e.options.rowSelection,showPagination:"auto"},scopedSlots:e._u([{key:"picUrl",fn:function(e){return a("span",{},[a("img",{staticClass:"activity-pic",attrs:{src:e||"",alt:"头像"}})])}},{key:"action",fn:function(t,n){return a("span",{},[[a("a",{on:{click:function(t){return e.edit(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.deletePartner(n)}}},[e._v("删除")])]],2)}}])})],1),e.visible?a("partner-edit",{attrs:{data:e.data,visible:e.visible},on:{cancel:e.handleEditCancel,ok:e.handleEditOk}}):e._e()],1)},i=[],r=a("2af9"),s=a("0fea"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"编辑合作伙伴",width:1200,visible:e.visible,footer:null,destroyOnClose:""},on:{ok:function(){e.$emit("ok")},cancel:function(){e.$emit("cancel")}}},[a("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1}},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"合作伙伴名称",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入合作伙伴名称"}],initialValue:e.data.name}],expression:"[\n            'name',\n            {rules: [{ required: true, message: '请输入合作伙伴名称' }], initialValue: data.name}\n          ]"}],attrs:{name:"name",placeholder:"合作伙伴名称"}})],1),a("a-form-item",{staticClass:"avatar-uploader-container",attrs:{label:"图片",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["picKey",{rules:[{required:!0,message:"请选择图片"}],initialValue:e.data.picKey}],expression:"[\n            'picKey',\n            {rules: [{ required: true, message: '请选择图片' }], initialValue: data.picKey}\n          ]"}],staticClass:"avatar-uploader",attrs:{name:"avatar","list-type":"picture-card","show-upload-list":!1,"before-upload":e.beforeUpload,"custom-request":e.customRequest},on:{change:e.handleChange}},[e.picUrl?a("img",{staticClass:"activity-pic",attrs:{src:e.picUrl,alt:"activity-pic"}}):a("div",[a("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(" 上传 ")])],1)]),a("span",{staticStyle:{color:"grey","line-height":"20px","font-size":"10px"}},[e._v("图片建议尺寸660*200px")])],1),a("a-form-item",{attrs:{label:"跳转链接",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["linkUrl",{rules:[{required:!0,message:"请输入跳转链接"}],initialValue:e.data.linkUrl}],expression:"[\n            'linkUrl',\n            {rules: [{ required: true, message: '请输入跳转链接' }], initialValue: data.linkUrl}\n          ]"}],attrs:{name:"name",placeholder:"跳转链接"}})],1),a("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[a("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v(e._s(e.$t("form.basic-form.form.submit")))])],1)],1)],1)],1)},l=[],c=(a("99af"),a("b0c0"),a("ac1f"),a("1276"),a("5530")),d=a("9fb0"),u=a("8ded"),p=a.n(u),m=a("ca00"),f=a("9b15"),h=a.n(f);function b(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}var v={props:{visible:{type:Boolean,required:!0},data:{type:Object,required:!0}},data:function(){return{form:this.$form.createForm(this),loading:!1,picUrl:this.data.picUrl,picKey:this.data.picKey,token:p.a.get(d["a"])}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){if(!e){if(!t.picKey)return void t.$notification.error({message:"图片上传失败, 请重新上传"});var n=Object(c["a"])(Object(c["a"])(Object(c["a"])({},t.data),a),{},{picUrl:t.picUrl,picKey:t.picKey});Object(s["a"])(n).then((function(e){t.$emit("ok")}))}}))},getUploadPic:function(){return Object(m["a"])()},customRequest:function(e){var t=this,a=this,n=e.file;Object(s["g"])().then((function(e){var i=e.data,r=i.accessKeyId,o=i.accessKeySecret,l=i.securityToken,c=new h.a({region:"oss-cn-shanghai",accessKeyId:r,accessKeySecret:o,bucket:"huibo91",stsToken:l}),d=n.name.split("."),u="pictures_admin_".concat(d[0],"_").concat(Date.now(),"_").concat(1e16*Math.random(),".").concat(d[1]||"");c.multipartUpload(u,n,{progress:function(e,t){}}).then((function(e){a.$notification.success({message:"上传成功"});e.res.requestUrls[0].split("?")[0];Object(s["i"])({key:u}).then((function(e){t.picUrl=e.data.publicUrl,t.loading=!1,t.picKey=u})).catch((function(e){a.$notification.error({message:"获取图片链接失败"})}))})).catch((function(e){a.$notification.error({message:"上传失败"})}))}))},handleChange:function(e){var t=this;"uploading"!==e.file.status?"done"===e.file.status&&b(e.file.originFileObj,(function(e){t.pic=e,t.loading=!1})):this.loading=!0},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;return t||this.$message.error("You can only upload JPG file!"),t},getData:function(e){return{file:e}}}},g=v,y=(a("7414"),a("2877")),w=Object(y["a"])(g,o,l,!1,null,"28e79f07",null),k=w.exports,x=[{title:"uuid",dataIndex:"uuid"},{title:"合作伙伴名字",dataIndex:"name"},{title:"图片",dataIndex:"picUrl",scopedSlots:{customRender:"picUrl"}},{title:"跳转链接",dataIndex:"linkUrl",scopedSlots:{customRender:"linkUrl"}},{title:"操作",dataIndex:"action",width:"150px",fixed:"right",scopedSlots:{customRender:"action"}}],C={name:"PartnerList",components:{STable:r["b"],Ellipsis:r["a"],PartnerEdit:k},data:function(){var e=this;return this.columns=x,{queryParam:{},data:{},visible:!1,selectedRowKeys:[],selectedRows:[],options:{alert:{show:!0,clear:function(){e.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},optionAlertShow:!1,loadData:function(t){var a=Object.assign({},t,e.queryParam);return Object(s["h"])(a).then((function(e){var t;return{data:null!==(t=e.data.records)&&void 0!==t?t:[],total:e.data.total,page:a.page}}))}}},methods:{edit:function(e){this.data=e,this.visible=!0},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},handleEditCancel:function(){this.visible=!1},handleEditOk:function(){this.visible=!1,this.$refs.table.loadData()},handleAdd:function(){this.$router.push("/partner/create")},batchDelete:function(){var e=this;this.$confirm({title:"确定要删除该合作伙伴吗?",content:"删除后无法复原,请谨慎",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){Object(s["d"])({idList:e.selectedRowKeys}).then((function(t){e.$notification.success({message:"删除成功"}),e.selectedRowKeys=[],e.selectedRows=[],e.$refs.table.loadData()}))}})},deletePartner:function(e){var t=this;this.$confirm({title:"确定要删除该合作伙伴吗?",content:"删除后无法复原,请谨慎",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){Object(s["d"])({idList:[e.uuid]}).then((function(e){t.$notification.success({message:"删除成功"}),t.$refs.table.loadData()}))}})},toggleAdvanced:function(){this.advanced=!this.advanced}}},K=C,U=(a("e1ba"),Object(y["a"])(K,n,i,!1,null,null,null));t["default"]=U.exports},7414:function(e,t,a){"use strict";var n=a("6604"),i=a.n(n);i.a},e1ba:function(e,t,a){"use strict";var n=a("eaea"),i=a.n(n);i.a},eaea:function(e,t,a){}}]);