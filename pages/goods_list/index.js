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
    pagenum:3,
    pagesize:10
  },
  onLoad(){
    this.getGoodsData()
  },
  // 点击切换商品列表tab栏
  handleTap(e){
    // console.log(e);
    const {index}=e.target.dataset
    this.setData({
      currentIndex:index
    })
  },
  //获取商品列表数据
  getGoodsData(){
    request({
      url:'/goods/search',
      data:this.queryParam
    }).then(res=>{
      console.log(res);
      const {pagenum}=res.data.message;
      const {total}=res.data.message;
      setData({
        pagenum,
        pagesize:total/pagenum
      })
    })
  }
})