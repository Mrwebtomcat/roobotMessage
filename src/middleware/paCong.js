const puppeteer = require('puppeteer');

const paCong = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // const puppeteerUrl = 'https://image.baidu.com'
  const puppeteerUrl = 'https://python.freelycode.com/contribution/detail/1515'
  await page.goto(puppeteerUrl);
  const mydom = await page.evaluate(() => {
    const h2 = document.querySelectorAll('h2');
    return Array.prototype.map.call(h2, img => img.innerHTML);
  });
  page.on('load', async () => {
    await browser.close();
  })
  return mydom
};
module.exports = paCong
