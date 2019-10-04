//设置发送请求的次数 当发送的请求
let requestTime=0;
export const request=(params)=>{
    //每发送一次请求就会多一次请求次数
    requestTime++;
    //添加遮罩
    wx.showLoading({
        title: '加载中',
        mask: true,
    });
      
    const baseUrl='https://api.zbztb.cn/api/public/v1'
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url:baseUrl+params.url,
            success:(res)=>{
                resolve(res)
            },
            complete:()=>{
                requestTime--;
                //当请求都回来了隐藏遮罩
                requestTime===0&&wx.hideLoading();
            }
        })
    })
}

/**
 * 
 * promise 形式的 getSetting
 */
export const getSetting=(params)=>{
    return new Promise((resolve,reject)=>{
        wx.getSetting({
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
        });
          
    })
}

/**
 * 
 * promise 形式的 openSetting
 */
export const openSetting=(params)=>{
    return new Promise((resolve,reject)=>{
        wx.openSetting({
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
        });
          
    })
}

/**
 * 
 * promise 形式的 chooseAddress
 */
export const chooseAddress=(params)=>{
    return new Promise((resolve,reject)=>{
        wx.chooseAddress({
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
        });
          
    })
}