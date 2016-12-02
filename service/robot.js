var config = require('../config.js');
var apiUrl = 'http://www.tuling123.com/openapi/api';
var apiKey = config.robotKey;

function Robot() {

};

Robot.prototype.request = function (info, callback) {
  var postFields = {
    key: apiKey,
    info: info
  };
  wx.request({
    url: apiUrl,
    data: postFields,
    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
      if (res.statusCode !== 200) {
        callback(res.errMsg);
        return;
      }

      callback(null, res.data);
    },
    fail: function() {
      // fail
      callback('接口请求失败');
    },
    complete: function() {
      // complete
    }
  })
};

module.exports = Robot;
exports.RESTYPES = {
  100000: '文本类',
  200000: '链接类',
  302000: '新闻类',
  308000: '菜谱类',
};