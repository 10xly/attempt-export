const assert = require("assert")
const factory = require(".")

describe("attemptExport", function () {
  it("throws if input is not a function", function () {
    const theModule = { exports: null }
    const attemptExport = factory(theModule)

    assert.throws(
      () => attemptExport(123),
      /attemptExport expects a function bro/
    )
  })

  it("sets module.exports to return value when function succeeds", function () {
    const theModule = { exports: null }
    const attemptExport = factory(theModule)

    attemptExport(() => 42)

    assert.strictEqual(theModule.exports, 42)
  })

  it("sets module.exports to undefined primitive when function throws", function () {
    const theModule = { exports: null }
    const attemptExport = factory(theModule)

    attemptExport(() => {
      throw new Error("boom")
    })

    assert.strictEqual(
      theModule.exports,
      require("primitive-value-undefined")
    )
  })
})
