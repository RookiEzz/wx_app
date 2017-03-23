// pages/movieDetail/movieDetail.js
import {html2wxml} from '../../src/htmltowxml';
Page({
  data:{
    id:'',
    movieName: '',
    movie:'',
    imgUrls: [],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular:true,
    mode: 'scaleToFill',
    innerHTML: ''
  },
  
  onLoad:function(option){
    var url = "http://v3.wufazhuce.com:8000/api/movie/" + option.id + "/story/1/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android";
    var url_img="http://v3.wufazhuce.com:8000/api/movie/detail/" + option.id + "?channel=wdj&source=summary&source_id=9095&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android"
    var that = this;
    wx.request({
      url: url,
      success: function(res){
       
         res.data.data.data[0].content.replace(/\n/g, " ")    
          res.data.data.data[0].content.replace(/\r/g, " ")
         
       var content = res.data.data.data[0].content
        that.setData({
          movie:res.data.data.data[0],
          innerHTML: html2wxml(content)
        })
        console.log(html2wxml(content))
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    //图片
    wx.request({
      url: url_img,
      
      success: function(res){
        console.log(res.data.data.title)
        that.setData({
          imgUrls: res.data.data.photo,
          movieName: res.data.data.title
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