//logs.js
var util = require('../../utils/util.js')
var Robot = require('../../service/robot.js');

Page({
  data: {
    logs: [],
    dialogs: []
  },
  onLoad: function () {
    this.setData({
      robot: new Robot,
    })
  },
  formSubmit: function (events) {
    var that = this;
    this.data.robot.request(events.detail.value, function (err, res) {
      if (err) {
        return;
      }

      that.setData({
        dialogs: that.data.dialogs.concat(res)
      });
    });
  }
})
