const {Builder} = require('selenium-webdriver');
require("chromedriver");

(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://selenium.dev');

  await driver.quit();
})();

/*

(async function example() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.google.com");
  await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
  await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  await driver.quit();
})();

*/