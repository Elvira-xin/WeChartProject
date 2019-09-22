Page({
    data: {
        //轮播图数组
        swiperList: [],
        //导航菜单数组
        cataList:[],
        //楼层数组
        floorList:[]
    },
    onLoad() {
        this.getSwiperDate()
        this.getCateData()
        this.getFloorData()
    },
    //获取轮播图数据
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
    //获取导航菜单数据
    getCateData(){
        wx.request({
            url:'https://api.zbztb.cn/api/public/v1/home/catitems',
            success:(res)=>{
                // console.log(res)
                this.setData({
                    cataList:res.data.message
                })
            }
        })
    },
    //获取楼层数据
    getFloorData(){
        wx.request({
            url:'https://api.zbztb.cn/api/public/v1/home/floordata',
            success:(res)=>{
                console.log(res);
                this.setData({
                    floorList:res.data.message
                })
            }
        })
    }
})
