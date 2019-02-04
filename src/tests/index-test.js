import { Selector, ClientFunction } from "testcafe"
import pretty from "pretty"
const prettyFormat = require("pretty-format")
import identifyUserAgent from "./utils/identify-useragent"

fixture("Index_Page_Test").page("http://localhost:8080/dist/index.html")

const getUA = ClientFunction(() => navigator.userAgent)

test("dom_has_critical_elements", async (t) => {
  const ua = await getUA()

  await t.takeScreenshot(
    t.testRun.test.fixture.name +
      "/" +
      t.testRun.test.name +
      "/" +
      identifyUserAgent(ua) +
      "/" +
      "scsh_1.png",
  )
})
