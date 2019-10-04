import regeneratorRuntime from '../../lib/runtime/runtime'
import {getSetting,openSetting,chooseAddress} from '../../request/index'
Page({
  data: {
    adress:{}
  },
  getAddress(){
    this.getUserAdress()
  },
  async getUserAdress(){
    try {
      const res1=await getSetting()
      console.log(res1)
      const auth=res1.authSetting["scope.address"]
      if(auth===false){
        await openSetting()
      }
      const res2=await chooseAddress()
      console.log(res2);
      res2.detailAdress=res2.provinceName+res2.cityName+res2.countyName+res2.detailInfo
      console.log(res2);
      this.setData({
        adress:res2
      })
      wx.setStorageSync('adress', res2);
        
    } catch (error) {
      console.log(error);
    }
   
  } 
})