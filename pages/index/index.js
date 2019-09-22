Page({
    data: {
        swiperList: [

        ]
    },
    onLoad() {
        this.getSwiperDate()
    },
    getSwiperDate() {
        wx.request({
            url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
            success: (result) => {
                console.log(result);
                this.setData({
                    swiperList: result.data.message
                })
            },
        });
    },

})
