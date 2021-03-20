import {checkForURL} from '../js/urlChecker'

describe("Testing url checker", () => {
    test("Testing wrong url", () => {
        expect(checkForURL("what is life?")).toBe(false)
    })
    test("Testing correct url", () => {
        expect(checkForURL("https://plato.stanford.edu/entries/life-meaning/")).toBe(true)
    })
 
})