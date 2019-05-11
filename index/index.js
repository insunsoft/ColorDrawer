const app = getApp()

Page({
  data: {
    drawerMenu: [ //抽屉菜单
      {
        icon: 'icon-formfill', //菜单图标
        url: '../log/log', //跳转页面
        title: '抽屉菜单3', //菜单标题
        arrow: true, //是否显示箭头
      }, {
        icon: 'icon-formfill', //菜单图标
        url: '../log/log', //跳转页面
        title: '抽屉菜单4', //菜单标题
        arrow: true, //是否显示箭头
      }, {
        icon: 'icon-formfill', //菜单图标
        url: '../log/log', //跳转页面
        title: '抽屉菜单4', //菜单标题
        arrow: true, //是否显示箭头
      }, {
        icon: 'icon-formfill', //菜单图标
        url: '../log/log', //跳转页面
        title: '抽屉菜单4', //菜单标题
        arrow: true, //是否显示箭头
      }, {
        icon: 'icon-formfill', //菜单图标
        url: '../log/log', //跳转页面
        title: '抽屉菜单4', //菜单标题
        arrow: true, //是否显示箭头
      }
    ],
    canuse:false
  },
  banuse(e){
    this.setData({
      canuse:false
    })
    wx.showToast({
      title: '禁止右滑抽屉',
    })
    console.log(this.data.canuse)
  },
  allowuse(e){
    this.setData({
      canuse:true
    })
    wx.showToast({
      title: '允许右滑抽屉',
    })
  }
})