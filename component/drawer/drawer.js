const app = getApp()
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    drawerClass: String,
    drawerBarClass: String,
    canuse:Boolean,
    menu: {
      type: Array,
      value: []
    }
  },
  observers: {
    tabs: function(val) {
      if (val.length > 0) {
        this.setData({
          tabsCount: val.length
        })
      }
    }
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 0,
    showMenu: false
  },

  methods: {
    tool: function() { //阻止事件冒泡
    },
    getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    showModal(e) {
      this.setData({
        showMenu: true
      })
    },
    hideModal(e) {
      this.setData({
        showMenu: false
      })
    },
    DrawerMoveStart: function(e) {
      this.touchesStart = e.changedTouches[0];
    },
    DrawerMoveEnd: function(e) {
      let touchesEnd = e.changedTouches[0];
      if (touchesEnd.pageX - this.touchesStart.pageX > 50 &&
        Math.abs(touchesEnd.pageY - this.touchesStart.pageY) < 60 && !this.data.showMenu) {
        this.setData({
          showMenu: true
        })
      }
      if (touchesEnd.pageX - this.touchesStart.pageX < -50 &&
        Math.abs(touchesEnd.pageY - this.touchesStart.pageY) < 60 && this.data.showMenu) {
        this.setData({
          showMenu: false
        })
      }
    }
  }
})