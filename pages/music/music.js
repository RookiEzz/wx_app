// pages/music/music.js
Page({
  data:{
    classname:'',
    current:'',
    isplay: false,
    music_url:""
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
    var music_id = option.currentTarget.dataset.musicid 
    console.log("id?")
    console.log(music_id)
  wx.request({
    url: 'https://app.mawenbao.com/music-api-server/?p=xiami&t=songlist&i='+music_id,
    success: function(res){
      var music_url = res.data.songs[0].url;
      console.log("是不是")
      console.log(music_url)
      that.setData({
        music_url:music_url
      })
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
  var current = option.currentTarget.dataset.index
  console.log('点击事件')
  console.log(this)
  if(!this.data.isplay){
    console.log('没有播放')
    var that = this;
    console.log(this.data)
    wx.playVoice({
      filePath: "http://om5.alicdn.com/905/2103135905/2102717758/1795677918_1490068765995.mp3?auth_key=2f513e4c043db309a0c5c0dde62ced5a-1491015600-0-null",
      success: function(res){
        // success
      },
      fail: function(err) {
        console.log(err)
      },
      complete: function() {
        // complete
      }
    })
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
    
   
    }

  },
  onReady:function(){
    this.audioCtx = wx.createAudioContext('myAudio');
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