"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[851],{72851:function(a,t,e){e.r(t),e.d(t,{default:function(){return v}});e(68309);var s=function(){var a=this,t=a._self._c;return t("page-header-wrapper",[t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"车辆名称"}},[t("a-input",{attrs:{placeholder:"请输入车辆名称",allowClear:""},model:{value:a.queryParam.name,callback:function(t){a.$set(a.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"库存号"}},[t("a-input",{attrs:{placeholder:"请输入库存号",allowClear:""},model:{value:a.queryParam.stockNumber,callback:function(t){a.$set(a.queryParam,"stockNumber",t)},expression:"queryParam.stockNumber"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"品牌"}},[t("div",{staticClass:"select-v ant-input-affix-wrapper",class:{placeholder:!a.getBrandName},on:{click:a.selectBrand}},[a._v(a._s(a.getBrandName?a.getBrandName:"请选择")+" "),t("span",{staticClass:"ant-input-suffix"},[t("i",{staticClass:"anticon anticon-close-circle ant-input-clear-icon"})])])])],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"收购日期"}},[t("a-range-picker",{attrs:{placeholder:["选择开始时间","选择结束时间"]},on:{change:a.consignmentDateChange},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"车架号"}},[t("a-input",{attrs:{placeholder:"请输入车架号",allowClear:""},model:{value:a.queryParam.vinNo,callback:function(t){a.$set(a.queryParam,"vinNo",t)},expression:"queryParam.vinNo"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"库存状态"}},[t("a-select",{attrs:{allowClear:"",placeholder:"请选择库存状态"},model:{value:a.queryParam.statusList,callback:function(t){a.$set(a.queryParam,"statusList",t)},expression:"queryParam.statusList"}},[a._l(a.carStatus,(function(e,s){return t("a-select-option",{key:s,attrs:{value:e.value}},[a._v(a._s(e.key)+" ")])})),t("a-select-option",{attrs:{value:7}},[a._v("已售出 ")])],2)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"收购员"}},[t("div",{staticClass:"select-v ant-input-affix-wrapper",class:{placeholder:!a.getStaffName},on:{click:a.selectStaff}},[a._v(a._s(a.getStaffName?a.getStaffName:"请选择")+" "),t("span",{staticClass:"ant-input-suffix"},[t("i",{staticClass:"anticon anticon-close-circle ant-input-clear-icon"})])])])],1)],1)],1)],1),t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{type:"primary"},on:{click:a.handleAdd}},[a._v("添加车辆")]),t("a-button",{staticClass:"marginLeft20",staticStyle:{width:"240px"},attrs:{type:"primary"},on:{click:a.getData}},[a._v("搜索 ")]),t("a-button",{staticStyle:{"margin-left":"20px"},on:{click:a.reset}},[a._v("重置")])],1),a._l(a.data,(function(e,s){var i,r;return t("div",{key:s},[t("div",{staticClass:"header"},[a._v(a._s(e.brandInfo.name)+"#"+a._s(null===(i=e.seriesInfo)||void 0===i?void 0:i.name)+"#"+a._s(e.carInfo.name)+" ")]),t("div",{staticClass:"row fill"},[t("div",{staticClass:"fill"},[t("img",{staticClass:"car-image",attrs:{src:a.getCarImage(e),alt:"首图"}})]),t("div",{staticClass:"split"}),t("div",{staticClass:"fill"},[t("div",[a._v("车架号："+a._s(a._f("formatStr")(e.vinNo)))]),t("div",[a._v("库存号："+a._s(a._f("formatStr")(e.stockNum)))]),t("div",[a._v("发动机排量："+a._s(a._f("displacement")(e.displacement,e.displacementUnit)))]),t("div",[a._v("上牌日期："+a._s(a._f("registerDate")(e.registerTime)))]),t("div",[a._v("里程："+a._s(a._f("price")(e.mileage))+"万公里")])]),t("div",{staticClass:"split"}),t("div",{staticClass:"fill"},[t("div",[a._v("收购员："+a._s(a._f("formatStr")(null===(r=e.staff)||void 0===r?void 0:r.name)))]),t("div",[a._v("收购时间："+a._s(a._f("formatStr")(e.consignmentDate)))]),t("div",[a._v("外观颜色："+a._s(a._f("outColor")(e.appearanceColor)))]),t("div",[a._v("内饰颜色："+a._s(a._f("outColor")(e.interiorColor)))]),t("div",[a._v("过户次数："+a._s(a._f("formatStr")(e.transferNum)))])]),t("div",{staticClass:"split"}),t("div",{staticClass:"fill"},[t("div",[a._v("库存状态："+a._s(a._f("carStatus")(e.status)))]),t("div",[a._v("指导价："+a._s(a._f("price")(e.guidePrice))+"万元")]),t("div",[a._v("展厅价格："+a._s(a._f("price")(e.showRoomPrice))+"万元")]),t("div",[a._v("排放标准："+a._s(a._f("discharge")(e.discharge)))])]),t("div",{staticClass:"split"}),t("div",{staticClass:"fill center column"},[7!==e.status?t("div",{staticClass:"marginBottom20"},[t("a-button",{attrs:{type:"primary"},on:{click:a.handleAdd}},[a._v("编辑")])],1):a._e(),t("a-button",{attrs:{type:"primary"},on:{click:a.handleAdd}},[a._v("查看详情")])],1)])])})),0===a.data.length?t("div",{staticClass:"no-data center"},[a._v(" 暂无数据 ")]):a._e(),t("div",{staticClass:"center marginTop20"},[a.total>0?t("a-pagination",{attrs:{total:a.total},on:{change:a.changePage,showSizeChange:a.showSizeChange},model:{value:a.page,callback:function(t){a.page=t},expression:"page"}}):a._e()],1)],2),a.brandVisible?t("select-brand",{attrs:{visible:a.brandVisible},on:{onClose:a.closeBrand,onSuccess:a.onSuccess}}):a._e(),a.staffVisible?t("select-staff",{attrs:{visible:a.staffVisible},on:{ok:a.onSelectStaff,cancel:a.onCloseStaff}}):a._e()],1)},i=[],r=e(68800),n=e(42671),l=e(65163),c={SellList:"/admin-car-list"};function o(a){return(0,l.ZP)({url:c.SellList,method:"get",params:a})}var u={name:"SellList",components:{STable:n.m7,Ellipsis:n.mH,SelectBrand:n.mB,SelectStaff:n.FF},data:function(){return{queryParam:{},data:{},page:1,size:10,total:0,brandVisible:!1,staffVisible:!1,date:null}},created:function(){this.getData()},computed:{getBrandName:function(){var a=this.queryParam,t=a.brandName,e=a.seriesName,s=a.carName,i="";return t&&(i+=t+"/"),e&&(i+=e+"/"),s&&(i+=s+"/"),i&&(i=i.substring(0,i.length-1)),i},carStatus:function(){return this.$store.getters.config.carStatusConfigList},getStaffName:function(){var a=this.queryParam.staffName;return a}},methods:{changePage:function(a,t){this.page=a,this.size=t,this.getData()},showSizeChange:function(a,t){this.page=a,this.size=t,this.getData()},handleAdd:function(){},getData:function(){var a=this,t=this.page,e=this.size;o((0,r.Z)((0,r.Z)({},this.queryParam),{},{page:t,size:e})).then((function(t){var e=t.total,s=t.data;a.total=e,a.data=s}))},consignmentDateChange:function(a){console.log(a),this.date=a,a&&a.length>0?(this.queryParam.consignmentDateLeft=a[0].format("YYYY-MM-DD"),this.queryParam.consignmentDateRight=a[1].format("YYYY-MM-DD")):(this.queryParam.consignmentDateLeft="",this.queryParam.consignmentDateRight="")},getCarImage:function(a){return a.carImageList&&a.carImageList.length>0?a.carImageList[0].publicUrl:"https://car-userd.oss-cn-shanghai.aliyuncs.com/default_car.png"},selectBrand:function(){this.brandVisible=!0},onCloseStaff:function(){this.staffVisible=!1},onSelectStaff:function(a){this.queryParam=(0,r.Z)((0,r.Z)({},this.queryParam),a),this.onCloseStaff()},selectStaff:function(){this.staffVisible=!0},closeBrand:function(){this.brandVisible=!1},onSuccess:function(a){console.log(a),this.queryParam=(0,r.Z)((0,r.Z)({},this.queryParam),a),this.closeBrand()},reset:function(){this.queryParam={},this.date=null}}},m=u,f=e(1001),d=(0,f.Z)(m,s,i,!1,null,null,null),v=d.exports}}]);