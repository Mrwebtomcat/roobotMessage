// const ChatBot = require('dingtalk-robot-sender');
// // 直接使用 webhook
// // const robot = new ChatBot({
// //   baseUrl: 'https://oapi.dingtalk.com/robot/send',
// //   accessToken: 'https://oapi.dingtalk.com/robot/send?access_token=3a2c1bd7008673807abef013dfb4c3e64c571d649472c1747da4e4107bd23133',
// //   secret: 'SECcbee7225fd534c0c387f7e1edaffa2ca7d8fc542f2a11fd5cf2eef33d5015386',
// // })
// const robot = new ChatBot({
//   webhook: 'https://oapi.dingtalk.com/robot/send?access_token=3a2c1bd7008673807abef013dfb4c3e64c571d649472c1747da4e4107bd23133'
// });
 
// // let link = {
// //   "text": "这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？", 
// //   "title": "时代的火车向前开", 
// //   "picUrl": "", 
// //   "messageUrl": "https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI"
// // };
// // robot.link(link);
// // let links = [
// //   {
// //     "title": "学习分享1",
// //     "messageURL": "https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
// //     "picURL": "https://www.dingtalk.com/"
// //   },
// //   {
// //     "title": "学习分享1",
// //     "messageURL": "https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
// //     "picURL": "https://www.dingtalk.com/"
// //   }
// // ]
// let textContent = {
//   "msgtype": "text", 
//   "text": {
//     "content": "我就是我, 是不一样的烟火"
//   }, 
//   "at": {
//     "atMobiles": [
//       "156xxxx8827", 
//       "189xxxx8325"
//     ], 
//     "isAtAll": false
//   }
// }
// robot.send(textContent)
//   .then((res) => {
//     // TODO
//   });


const ChatBot = require("dingtalk-robot-sender");
const robot = new ChatBot({
  webhook: `https://oapi.dingtalk.com/robot/send?access_token=3a2c1bd7008673807abef013dfb4c3e64c571d649472c1747da4e4107bd23133`,
});
robot.send(
  {
    msgtype: "link",
    link: {
      title: "众成翻译文章",
      text: 'nodejs 分享',
      picUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1496819944,2798685262&fm=26&gp=0.jpg",
      messageUrl:"https://www.baidu.com"
    },
  },
  function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);