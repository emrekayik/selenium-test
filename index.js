const { Builder } = require("selenium-webdriver");
require("chromedriver");

(async function helloSelenium() {
  let driver = await new Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();

  await driver.get("https://www.techlistic.com/p/selenium-practice-form.html");
  await driver.sleep(500);
  await driver.actions().scroll(10, 10, 0, 400).perform();
  

  // fill in form
  await driver.findElement({ name: "firstname" }).sendKeys("John");
  await driver.findElement({ name: "lastname" }).sendKeys("Doe");

  // select radio button
  await driver.findElement({ id: "sex-0" }).click();
  await driver.findElement({ id: "exp-3" }).click();
  
  // fill in date
  await driver.findElement({ id: "datepicker" }).sendKeys("07/02/2023");
  
  // select elements
  await driver.findElement({ id: "profession-0" }).click();
  await driver.findElement({ id: "profession-1" }).click();
  
  // scroll down
  await driver.actions().scroll(10, 10, 0, 200).perform();
  
  // select elements
  await driver.findElement({ id: "tool-0" }).click();
  await driver.findElement({ id: "tool-1" }).click();
  await driver.findElement({ id: "tool-2" }).click();
  
  // scroll down
  await driver.actions().scroll(10, 10, 0, 200).perform();
  
  // select elements
  await select(driver.findElement({ id: "continents" })).selectByVisibleText("Europe");
  await select(driver.findElement({ id: "selenium_commands" })).selectByVisibleText("Browser Commands");
  
  // click on submit button
  await driver.findElement({ id: "submit" }).click();
  
  // wait for 5 seconds
  await driver.sleep(5000)
  
  await driver.quit();
})();
