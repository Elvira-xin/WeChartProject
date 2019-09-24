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
    currentIndex:0
  },
  handleTap(e){
    // console.log(e);
    const {index}=e.target.dataset
    this.setData({
      currentIndex:index
    })
  }
})