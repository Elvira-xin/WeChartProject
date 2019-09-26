import { request } from "../../request/index"
// pages/goods_list/index.js
Page({
  data: {
    tabList:[
      {
        id:0,
        text:'综合'
      }, {
        id:1,
        text:'销量'
      }, {
        id:2,
        text:'价格'
      }
    ],
    goodsList:[],
    currentIndex:0
  },
  queryParam:{
    query:'',
    cid:'',
    pagenum:1,
    pagesize:10
  },
  totalPage:1,
  onLoad(options){
    // console.log(options);
    const {cid}=options
    this.queryParam.cid=cid
    this.getGoodsData();
  },
  // 点击切换商品列表tab栏
  tabChange(e){
    this.setData({
      currentIndex:e.detail.index
    })
  },
  //获取商品列表数据
  getGoodsData(){
    request({
      url:'/goods/search',
      data:this.queryParam
    }).then(res=>{
      console.log(res);
      //获取旧数组
      const oldGoodsList=this.data.goodsList
      //获取后台新的数组
      const newGoodsList=res.data.message.goods
      // const {pagenum}=res.data.message;
      this.totalPage=Math.ceil(res.data.message.total/this.queryParam.pagesize)
      // console.log(this.totalPage);
      this.setData({
        goodsList:[...oldGoodsList,...newGoodsList]
      })
    })
  }
})