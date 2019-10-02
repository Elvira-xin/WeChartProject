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
    // 查询的关键字  可以为空
    query:'',
    // 分类id  从分类页面 传递过来
    cid:'',
    // 页码 第几页
    pagenum:1,
    // 页容量 一页可以放几条数据 
    pagesize:''
  },
  totalPage:1,
  onLoad(options){
    // console.log(options);
    const {cid}=options
    this.queryParam.cid=cid
    this.getGoodsData();
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
      // 总条数
      const total=res.data.message.total;
      this.totalPage=Math.ceil(total/this.queryParam.pagesize)
      // console.log(this.totalPage);
      this.setData({
        goodsList:[...oldGoodsList,...newGoodsList]
      })
    })
    //停止下拉刷新
    wx.stopPullDownRefresh()
  },
  onPullDownRefresh(){
    console.log(123);
    
  },
  //页面上拉触底事件的处理函数
  onReachBottom(){
    // console.log(456);
    // if()
    
  }
})