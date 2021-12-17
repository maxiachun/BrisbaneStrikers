const puppeteer = require('puppeteer');

async function launchVeo() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  var links;
  await page.goto('https://app.veo.co');

  await page.waitForSelector('button[type="submit"]');

  await page.focus('input[name="email"]');

  await page.$eval('input[name="email"]', el => el.value = 'maxiachun@hotmail.com');
  await page.$eval('input[name="password"]', el => el.value = 'Monday2016');
  await page.click('button[type="submit"]');

  await page.waitForSelector('div[class="grid"]');

  await page.$$eval('.match-list-item', names => names.map(name => name.textContent));

  let result = page.$$eval('.match-list-item', names => names.map(name => name.getAttribute('href')));

  //const hrefs = await page.evaluate

  // const hrefs1 = await page.evaluate(
  //   () => Array.from(
  //     document.querySelectorAll('.match-list-item'),
  //     a => a.getAttribute('href')
  //   )
  // );

  //console.log((await result).values();

  await page.screenshot({ path: 'example.png' });

}

launchVeo();

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({ path: 'example.png' });

//   await browser.close();
// })();