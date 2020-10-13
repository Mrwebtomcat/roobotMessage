const index = require('./router/index')
const paCong = require('./middleware/paCong')
const Koa = require('koa');
const app = new Koa();
let robot = require('./lib/dingTalk')

const schedule = require('node-schedule');
const myArray = [...new Array(100).keys()]
console.log(myArray)
// 定义规则
let rule = new schedule.RecurrenceRule();
// rule.second = [0,10,20,30,40,50]; // 每隔 0 秒执行一次
rule.second = 3; // 每隔 0 秒执行一次
// rule.minute = 30; // 每隔 30 分执行一次
let count = 0
// 启动任务
let job = schedule.scheduleJob(rule, async (data) => {
  const everyData = await paCong()
  // if(count>everyData.length){
  //   count = 0
  // }
  console.log(count)
  // console.log(everyData[count])
  robot.dingTalkTemp.link.title = everyData[count]
  robot.dingTalkTemp.link.text = `${everyData[count]} 分享`
  //todo 推送过的文章打上标记来区分是否发送过
  // robot.send(robot.dingTalkTemp,(err,data)=>{
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   // pool.insert(' INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES ', (err, res) => {
  //   //   // console.log(err, res)
  //   //   app.context.db = res.rows
  //   //   pool.end()
  //   // })
  // })
  count++
  // console.log(new Date(),everyData);
});


//路由
app.use(index.routes(),index.allowedMethods())
app.listen(3000);