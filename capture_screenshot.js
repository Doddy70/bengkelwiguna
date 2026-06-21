const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1280, height: 800 });

  console.log("Navigating to localhost:3000...");
  await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 60000 });
  
  console.log("Waiting for 10 seconds for Next.js to compile and render CSS...");
  await page.waitForTimeout(10000);

  await page.screenshot({ path: 'screenshot_default2.png', fullPage: true });
  console.log("Screenshot saved to screenshot_default2.png");

  await browser.close();
})();
