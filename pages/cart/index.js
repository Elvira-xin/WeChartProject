// pages/cart/index.js
Page({
  data: {

  },
  getAddress() {
    //获取用户当前设置
    wx.getSetting({
      success:(res)=> {
        console.log(res)
        const auth = res.authSetting["scope.address"]
        //判断用户是否点击了取消
        if (auth == false) {
          //诱导用户打开授权
          wx.openSetting({
            success: (res2) => {
              // console.log(res2);
              //获取用户收获地址
              wx.chooseAddress({
                success:(res3)=> {
                  console.log(res3);
                }
              })
            }
          })
        }else{
          //未点击取消 获取用户收货地址
          wx.chooseAddress({
            success:(res3)=> {
              console.log(res3);
            }
          })
        }
      }
    })
  }
})