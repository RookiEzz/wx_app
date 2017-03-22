// pages/read/read.js
Page({
  data:{},
  list:[],
  onLoad:function(options){
    var that = this;
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      success: function(res){
        console.log(res.data.data)
        var tempList = res.data.data;
        console.log(tempList)
        var len = tempList.length;
        console.log(len)
        that.setData({
          list : res.data.data
        })
      },
      fail: function() {
        alert('数据获取失败，请刷新')
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})