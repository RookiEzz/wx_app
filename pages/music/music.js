// pages/music/music.js
Page({
  data:{
    classname:'',
    current:'',
    isplay: false
  },
  list:[],
  onLoad:function(options){
    var that = this;
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      success: function(res){
        console.log(res.data.data)
        var tempList = res.data.data;
        console.log(tempList)
        var len = tempList.length;
        that.setData({
          list : res.data.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  detail: function(e){
    console.log(e)
    

 var id = e.currentTarget.dataset.id  
 var url='../musicDetail/musicDetail?id='+id;
  
    
    console.log(url)
    wx.navigateTo({
      url: url,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    console.log(1)
  },
  play: function(option){

  var current = option.currentTarget.dataset.index
  console.log('点击事件')
  console.log(this)
  if(!this.data.isplay){
    console.log('没有播放')
    this.setData({
      classname:'mystyle ',
      current:current,
      isplay: true
    })
    
    console.log(isplay)
    }else{
      console.log('在播放')
      this.setData({
      classname:'',
      current:current,
      isplay:false
    })
    
    console.log(isplay)
    }
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