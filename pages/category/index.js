import { request } from "../../request/index"

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:[],
    goodsData:[],
    currentIndex:0

  },
  Cates:[],
  onLoad(){
    this.getCates()
  },
  getCates(){
    request({
      url:'/categories'
    }).then(res=>{
      console.log(res)
      this.Cates=res.data.message
      const menuList=this.Cates.map(v=> v.cat_name)
      const goodsData=this.Cates[0].children
      this.setData({
        menuList,
        goodsData
      })
    })
   
  },
  
  //左侧菜单点击事件
  handleMenuTap(e){
    // console.log(e);
    const {index}=e.currentTarget.dataset
    const goodsData=this.Cates[index].children
    this.setData({
      currentIndex:index,
      goodsData
    })
  }
})