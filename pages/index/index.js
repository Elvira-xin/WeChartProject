import regeneratorRuntime from '../../lib/runtime/runtime'
//引入封装好的promis
import { request } from '../../request/index'
Page({
    data: {
        //轮播图数组
        swiperList: [],
        //导航菜单数组
        cataList: [],
        //楼层数组
        floorList: []
    },
    onLoad() {
        this.getSwiperDate()
        this.getCateData()
        this.getFloorData()
    },
    //获取轮播图数据
    async getSwiperDate() {
        const res = await request({ url: '/home/swiperdata' })
        this.setData({
            swiperList: res.data.message
        })
    },
    // getSwiperDate() {
    //     request({
    //         url:'/home/swiperdata',
    //     }).then(res=>{
    //         this.setData({
    //             swiperList:res.data.message
    //         })
    //     })
    // },
    //获取导航菜单数据
    async getCateData() {
        const res = await request({ url: '/home/catitems' })
        this.setData({
            cataList: res.data.message
        })
    },
    // getCateData(){
    //     request({
    //         url:'/home/catitems'
    //     }).then(res=>{
    //         this.setData({
    //             cataList:res.data.message
    //         })
    //     })
    // },
    //获取楼层数据
    async getFloorData() {
        const res=await request({url: '/home/floordata'})
        this.setData({
            floorList: res.data.message
        })
    }
    // getFloorData() {
    //     request({
    //         url: '/home/floordata'
    //     }).then(res => {
    //         this.setData({
    //             floorList: res.data.message
    //         })
    //     })
    // }
})
