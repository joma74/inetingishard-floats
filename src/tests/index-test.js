import { Selector, ClientFunction } from "testcafe"
import identifyUserAgent from "./utils/identify-useragent"

const fixtureName = "Index_Page_Test"

fixture(fixtureName).page("http://0.0.0.0:8080/dist/index.html")

const getUA = ClientFunction(() => navigator.userAgent)

const testName = "index_test"

test(testName, async (t) => {
  const ua = await getUA()

  await t.takeScreenshot(
    fixtureName +
      "/" +
      testName +
      "/" +
      identifyUserAgent(ua) +
      "/" +
      "scsh_1.png",
  )
})
