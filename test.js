const assert = require("assert")
const factory = require("./index")

describe("attemptExport", function () {
  const attemptExport = factory({})

  it("returns the function result when no error is thrown", function () {
    const result = attemptExport(() => 42)
    assert.strictEqual(result, 42)
  })

  it("returns undefined when the function throws", function () {
    const result = attemptExport(() => {
      throw new Error("boom")
    })
    assert.strictEqual(result, undefined)
  })

  it("allows returning undefined without throwing", function () {
    const result = attemptExport(() => undefined)
    assert.strictEqual(result, undefined)
  })

  it("throws if the argument is not a function", function () {
    assert.throws(
      () => attemptExport(123),
      /attemptExport expects a function/
    )
  })

  it("does not swallow non-Error throws", function () {
    const result = attemptExport(() => {
      throw "string error"
    })
    assert.strictEqual(result, undefined)
  })
})
