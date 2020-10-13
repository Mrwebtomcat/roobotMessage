const ChatBot = require("dingtalk-robot-sender");
let robot =  new ChatBot({
    // webhook: `https://oapi.dingtalk.com/robot/send?access_token=3a2c1bd7008673807abef013dfb4c3e64c571d649472c1747da4e4107bd23133`,
    webhook: `https://oapi.dingtalk.com/robot/send?access_token=56078f19242e12d1fa91b43c64b0472c4a1270c536b2699a82b4d2eb1c24cb96`,
});
robot.dingTalkTemp = {
  msgtype: "link",
  link: {
    title: "众成翻译文章",
    text: '分享',
    picUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1496819944,2798685262&fm=26&gp=0.jpg",
    messageUrl:"https://www.baidu.com"
  },
}

module.exports = robot