const attemptX = require("attempt-x")
const isFunction = require("is-function-x")
const not = require("@not-js/not")
const throwUp = require("immediate-error")

module.exports = function factory(theModule) {
  return function attemptExport(x) {
    if (not(isFunction)(x)) throwUp("attemptExport expects a function bro")
    const res = attemptX(x)
    if (res.threw) {
      theModule.exports = require("primitive-value-undefined")
    } else {
      theModule.exports = res.value
    }
  }
}