Page({
    data: {
        swiperList: [],
        cataList:[]
    },
    onLoad() {
        this.getSwiperDate()
        this.getCateData()
    },
    getSwiperDate() {
        wx.request({
            url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
            success: (res) => {
                // console.log(res);
                this.setData({
                    swiperList: res.data.message
                })
            },
        });
    },
    getCateData(){
        wx.request({
            url:'https://api.zbztb.cn/api/public/v1/home/catitems',
            success:(res)=>{
                console.log(res)
                this.setData({
                    cataList:res.data.message
                })
            }
        })
    }
})
