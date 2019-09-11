# 微信js 上传多个照片IOS,只上传了最后一个

### 之前项目里也遇到过，但是一直没有认真去解决，现在又有项目需要上传多张图片，之前也是 安卓可以，ios不行

### 直接上代码把，不bb了，主要使用回调方法

~~~ javaScript
var that = this;
wx.ready(function() {
    wx.chooseImage({
        sizeType: ['compressed'],
        sourceType: ['camera', 'album'],
        success: function(images) {
            var i = 0,
                length = images.localIds.length;
            upload();

            function upload() {
                wx.uploadImage({
                    localId: images.localIds[i],
                    isShowProgressTips: 0,
                    success: function(res) {
                        i++;
                        if(i < length) {
                            //上传到自己服务器方法(res.serverId);
                            upload();//设置回调
                        } else {
                            //上传到自己服务器方法(res.serverId);
                        }
                    },
                    fail: function(res) {
                        alert(JSON.stringify(res));
                    }
                });
            }
        }
    });
});
~~~