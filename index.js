const Koa = require('koa');
const app = new Koa();
const { Pool} = require('pg')
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // const puppeteerUrl = 'https://image.baidu.com'
  const puppeteerUrl = 'https://python.freelycode.com/contribution/detail/1515'
  await page.goto(puppeteerUrl);
  // await page.setViewport({
  //   width: 1920,
  //   height: 1080
  // });

  // await page.focus('#kw');
  // await page.keyboard.sendCharacter('敬业福');
  // await page.click('.s_search');
  const mydom = await page.evaluate(() => {
    const h2 = document.querySelectorAll('h2');
    return Array.prototype.map.call(h2, img => img.innerHTML);
  });
  
  page.on('load', async () => {
    /*
    const h2DOM = await page.evaluate(() => {
      // const images = document.querySelectorAll('img.main_img');
      // console.log(images,'page loading done, start fetch ...');
      // return Array.prototype.map.call(images, img => img.src);
      return $('title').val
    });
    console.log(`get ${srcs.length} image, start download`);
    const h2DOM =await page.evaluate(() => {
      await page.$eval('.content h2',el=>el.innerHTML)
    });;
    console.log(tweetHandle,h2DOM,'tweetHandle')
    
    srcs.forEach(async (src) => {
      console.log(src)
      // await srcToImg(src, mn);
    });
    */
    await browser.close();
  })

})();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testing',
  password: '666',
  port: 5433,
})

pool.query('select * from article WHERE id=1', (err, res) => {
  // console.log(err, res)
  app.context.db = res.rows
  pool.end()
})


app.use(async ctx => {
  ctx.body = 'Hello World';
  ctx.body = ctx.db;
  
});



app.listen(3000);