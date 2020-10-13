'use strict';


const Schedule = require('node-schedule');

exports.init = function(){
    console.log('定时任务启动')
    try {
        // 定时发送模板消息
        const sendRemindMessage = Schedule.scheduleJob('10 * * * * *', require('../controller/telesale_old').schedulerefreshTelesaleOrder);


    } catch (error) {
        console.log('定时任务出错：', error);
    }
}

