App({
  onLaunch: function() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.WindowWidth = e.windowWidth;
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
      }
    })
  },
  globalData: {

  }
})