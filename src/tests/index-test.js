import { Selector, ClientFunction } from "testcafe"
import identifyUserAgent from "./utils/identify-useragent"

const fixtureName = "Index_Page_Test"

fixture(fixtureName).page("http://localhost:8080/dist/index.html")

const getUA = ClientFunction(() => navigator.userAgent)

const testName = "dom_has_critical_elements"

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
