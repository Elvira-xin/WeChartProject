import regeneratorRuntime from '../../lib/runtime/runtime'
import { request } from "../../request/index"
Page({
  data: {
    tabList: [
      {
        id: 0,
        text: '综合'
      }, {
        id: 1,
        text: '销量'
      }, {
        id: 2,
        text: '价格'
      }
    ],
    goodsList: [],
    currentIndex: 0,
    isNoMore: false
  },
  queryParam: {
    // 查询的关键字  可以为空
    query: '',
    // 分类id  从分类页面 传递过来
    cid: '',
    // 页码 第几页
    pagenum: 1,
    // 页容量 一页可以放几条数据 
    pagesize: 10
  },
  totalPage: 1,
  onLoad(options) {
    const { cid } = options
    this.queryParam.cid = cid
    this.getGoodsData();
  },
  //获取商品列表数据
  async getGoodsData() {
    const res=await request({ url: '/goods/search',data: this.queryParam})
      //获取旧数组
      const oldGoodsList = this.data.goodsList
      //获取后台新的数组
      const newGoodsList = res.data.message.goods
      // 总条数
      const total = res.data.message.total;
      // console.log(total);
      this.totalPage = Math.ceil(total / this.queryParam.pagesize)
      this.setData({
        goodsList: [...oldGoodsList, ...newGoodsList]
      })
    //停止下拉刷新
    wx.stopPullDownRefresh()
  },
  // getGoodsData(){
  //   request({
  //     url:'/goods/search',
  //     data:this.queryParam
  //   }).then(res=>{
  //     console.log(res);
  //     //获取旧数组
  //     const oldGoodsList=this.data.goodsList
  //     //获取后台新的数组
  //     const newGoodsList=res.data.message.goods
  //     // 总条数
  //     const total=res.data.message.total;
  //     // console.log(total);
  //     this.totalPage=Math.ceil(total/this.queryParam.pagesize)
  //     console.log(this.totalPage);
  //     this.setData({
  //       goodsList:[...oldGoodsList,...newGoodsList]
  //     })
  //   })
  //停止下拉刷新
  //   wx.stopPullDownRefresh()
  // },
  //下拉刷新事件
  onPullDownRefresh() {
    // console.log(123);
    this.queryParam.pagenum = 1;
    this.getGoodsData();
    this.setData({
      goodsList: []
    })
  },
  //页面上拉触底事件的处理函数
  onReachBottom() {
    //判断是否有下一页
    if (this.queryParam.pagenum >= this.totalPage) {
      //没有下一页
      // console.log('没有数据了');
      wx.showToast({
        title: '不要再滑动了',
        icon: "none"
      })
      this.setData({
        isNoMore: true
      })
    } else {
      //有下一页,页码数++,重新获取数据
      this.queryParam.pagenum++;
      this.getGoodsData()
    }
  },
})