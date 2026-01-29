const attemptX = require("attempt-x")
const isFunction = require("is-function-x")
const not = require("@not-js/not")
const throwUp = require("immediate-error")

module.exports = function factory(exportsObj) {
  return function attemptExport(x) {
    if (not(isFunction)(x)) throwUp("attemptExport expects a function bro")
    const res = attemptX(x)
    if (res.threw) {
      return require("primitive-value-undefined")
    } else {
      return res.value
    }
  }
}