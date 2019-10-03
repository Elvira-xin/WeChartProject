import regeneratorRuntime from '../../lib/runtime/runtime'
import { request } from "../../request/index"
Page({
  data: {
    goodsList: {},
    isCollect: false
  },
  //获取商品详情页数据
  async getGoodsData(goods_id) {
    const res=await request({ url: '/goods/detail',data: { goods_id }})
    this.setData({
      goodsList: res.data.message
    })},
  // getGoodsData(goods_id) {
  //   request({
  //     url: '/goods/detail',
  //     data: { goods_id }
  //   }).then(res => {
  //     // console.log(res);
  //     this.setData({
  //       goodsList: res.data.message
  //     })

  //   })
  // },
  //点击轮播图图片
  handleImagePreview(e) {
    // console.log(e.currentTarget.dataset.current);
    const { goodsList } = this.data;
    console.log(goodsList);
    const urls = goodsList.pics.map(v =>
      v.pics_mid_url
    )
    const current = e.currentTarget.dataset.current
    console.log(current);

    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  //点击收藏
  handleCollect() {
    isCollect = !isCollect
  },
  //加入购物车
  handleCartAdd() {
    const { goodsList } = this.data
    console.log(goodsList);
    //从本地存储里面拿数据
    const cartList = wx.getStorageSync('carts')||[];
    //查找是否有该商品
    const index = cartList.findIndex(v=>v.goods_id===goodsList.goods_id)
    console.log(index);
    //判断是否有该商品
    if(index===-1){
      //说明没有该商品
      cartList.push({
        goods_id:goodsList.goods_id,
        goods_name:goodsList.goods_name,
        goods_price:goodsList.goods_price,
        goods_small_logo:goodsList.goods_small_logo,
        num:1
      })
    }else{
      cartList[index].num++
    }
    //把数据存储到本地存储
    wx.setStorageSync('carts', cartList);
    wx.showToast({
      title: '加入购物车成功',
      mask: true,
    });
  },
  //页面加载生命周期
  onLoad: function (options) {
    this.getGoodsData(options.goods_id)

  },


})