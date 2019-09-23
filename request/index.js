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