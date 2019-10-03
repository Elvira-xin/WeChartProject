import { request } from "../../request/index"
import regeneratorRuntime from '../../lib/runtime/runtime'
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:[],
    goodsData:[],
    currentIndex:0,
    scrollTop: 0
  },
  Cates:[],
  onLoad(){
    this.loadData()
  },
  // 获取缓存中的数据获取接口中的数据
  loadData(){
    //  1 获取本地存储中的数据  值空 字符串
    const localCate=wx.getStorageSync('cates');
    // 2 判断该数据是否存在
    if(localCate){
      // 存在 判断该数据是否过期
      if(Date.now() - localCate.time>1000*10){
        // 过期了
        this.getCates()
      }else{
        //未过期
        this.Cates=localCate.data;
        const menuList=this.Cates.map(v=> v.cat_name)
        const goodsData=this.Cates[0].children
        this.setData({
          menuList,
          goodsData
        })
      }
    }else{
      //数据不存在
      this.getCates()
    }
  },
  async getCates(){
    const res=await request({ url:'/categories'})
    this.Cates=res.data.message;
    wx.setStorageSync('cates', {
      data:this.Cates,
      time:Date.now()
    });
    const menuList=this.Cates.map(v=> v.cat_name)
    const goodsData=this.Cates[0].children
    this.setData({
      menuList,
      goodsData,
    })
  },
  // getCates(){
  //   request({
  //     url:'/categories'
  //   }).then(res=>{
  //     console.log(res)
  //     this.Cates=res.data.message;
  //     wx.setStorageSync('cates', {
  //       data:this.Cates,
  //       time:Date.now()
  //     });
  //     const menuList=this.Cates.map(v=> v.cat_name)
  //     const goodsData=this.Cates[0].children
  //     this.setData({
  //       menuList,
  //       goodsData
  //     })
  //   })
   
  // },
  
  //左侧菜单点击事件
  handleMenuTap(e){
    // console.log(e);
    const {index}=e.currentTarget.dataset
    const goodsData=this.Cates[index].children
    this.setData({
      currentIndex:index,
      goodsData,
      scrollTop: 0
    })
  }
})