import { request } from "../../request/index"
Page({
  data: {
    goodsList:{},
    isCollect:false
  },
  //获取商品详情页数据
  getGoodsData(goods_id){
    request({
      url:'/goods/detail',
      data:{goods_id}
    }).then(res=>{
      console.log(res);
      this.setData({
        goodsList:res.data.message
      })
      
    })
  },
  //点击轮播图图片
  handleImagePreview(e){
    // console.log(e.currentTarget.dataset.current);
    const {goodsList}=this.data;
    console.log(goodsList);
    const urls=goodsList.pics.map(v=>
      v.pics_mid_url
    )
    const current=e.currentTarget.dataset.current
    console.log(current);
    
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  //点击收藏
  handleCollect(){
    isCollect=!isCollect
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoodsData(options.goods_id)
    
  },

  
})