//引入封装好的promis
import {request} from '../../request/index'
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
        request({
            url:'/home/swiperdata',
        }).then(res=>{
            this.setData({
                swiperList:res.data.message
            })
        })
    },
    //获取导航菜单数据
    getCateData(){
        request({
            url:'/home/catitems'
        }).then(res=>{
            this.setData({
                cataList:res.data.message
            })
        })
        // wx.request({
        //     url:'/catitems',
        //     success:(res)=>{
        //         // console.log(res)
        //         this.setData({
        //             cataList:res.data.message
        //         })
        //     }
        // })
    },
    //获取楼层数据
    getFloorData(){
        request({
            url:'/home/floordata'
        }).then(res=>{
            this.setData({
                floorList:res.data.message
            })
        })
    }
})
