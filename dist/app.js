/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/GraphQL/horarios.js":
/*!*********************************!*\
  !*** ./app/GraphQL/horarios.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": () => (/* binding */ resolvers),
/* harmony export */   "typeDefs": () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    horarios: [Horario]\n    horario(id:ID!): Horario   \n  }\n  type Horario{\n    turno_id:ID\n    profesional: String\n    paciente:String\n    duracion:Int\n  }\n"])));
var resolvers = {
  Query: {
    tickets: function () {
      var _tickets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findAll());
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function tickets() {
        return _tickets.apply(this, arguments);
      }
      return tickets;
    }(),
    ticket: function () {
      var _ticket = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(obj, args, context, info) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findByPk(args.id));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function ticket(_x, _x2, _x3, _x4) {
        return _ticket.apply(this, arguments);
      }
      return ticket;
    }()
  }
};

/***/ }),

/***/ "./app/GraphQL/notas.js":
/*!******************************!*\
  !*** ./app/GraphQL/notas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": () => (/* binding */ resolvers),
/* harmony export */   "typeDefs": () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    notas: [Nota]\n    nota(nota_id:ID!): Nota\n  }\n  type Nota{\n    nota_id: ID\n    nota:String\n    profesional:String\n    fecha:String\n  }\n  input addNote{\n    nota:String\n    profesional:String\n    fecha:String\n  }\n  extend type Mutation{\n    agregarNota(input:addNote):Nota\n    eliminarNota(nota_id:Int):Nota\n  }\n"])));
var resolvers = {
  Query: {
    notas: function () {
      var _notas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var notes;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].notas.findAll();
            case 3:
              notes = _context.sent;
              if (notes) {
                _context.next = 6;
                break;
              }
              throw new Error('no existen notas para mostrar');
            case 6:
              return _context.abrupt("return", notes);
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              throw new Error(_context.t0.message);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }));
      function notas() {
        return _notas.apply(this, arguments);
      }
      return notas;
    }(),
    nota: function () {
      var _nota = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(obj, args, context, info) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["default"].notas.findByPk(args.id));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function nota(_x, _x2, _x3, _x4) {
        return _nota.apply(this, arguments);
      }
      return nota;
    }()
  },
  Mutation: {
    agregarNota: function () {
      var _agregarNota = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, _ref) {
        var input, createNote;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = _ref.input;
              _context3.prev = 1;
              _context3.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].notas.create(input);
            case 4:
              createNote = _context3.sent;
              return _context3.abrupt("return", createNote);
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              throw new Error('error al crear la nota');
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 8]]);
      }));
      function agregarNota(_x5, _x6) {
        return _agregarNota.apply(this, arguments);
      }
      return agregarNota;
    }(),
    eliminarNota: function () {
      var _eliminarNota = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_, _ref2) {
        var nota_id, nota;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              nota_id = _ref2.nota_id;
              _context4.prev = 1;
              _context4.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].notas.destroy({
                where: {
                  nota_id: nota_id
                }
              });
            case 4:
              nota = _context4.sent;
              if (!nota) {
                _context4.next = 9;
                break;
              }
              return _context4.abrupt("return", 'Ok');
            case 9:
              return _context4.abrupt("return", 'no existe');
            case 10:
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);
              throw new Error('no existe la nota');
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 12]]);
      }));
      function eliminarNota(_x7, _x8) {
        return _eliminarNota.apply(this, arguments);
      }
      return eliminarNota;
    }()
  }
};

/***/ }),

/***/ "./app/GraphQL/paciente.js":
/*!*********************************!*\
  !*** ./app/GraphQL/paciente.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": () => (/* binding */ resolvers),
/* harmony export */   "typeDefs": () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    pacientes: [Paciente]\n    paciente(paciente_id:ID!): Paciente   \n  }\n  type Paciente{\n    paciente_id:ID\n    nombre: String\n    celular:String\n    activo:Boolean\n  }\n  input addPacient{\n    nombre:String\n    celular:String\n  }\n  input setPacient{\n    activo:Boolean\n  }\n  extend type Mutation{\n    agregarPaciente(input:addPacient):Paciente\n    desactivarPaciente(paciente_id:Int, input: setPacient):Paciente\n  }\n"])));
var resolvers = {
  Query: {
    pacientes: function () {
      var _pacientes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["default"].paciente.findAll({
                where: {
                  activo: true
                }
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function pacientes() {
        return _pacientes.apply(this, arguments);
      }
      return pacientes;
    }(),
    paciente: function () {
      var _paciente = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args) {
        var pacient;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].paciente.findAll({
                where: {
                  nombre: args.nombre
                }
              });
            case 3:
              pacient = _context2.sent;
              if (pacient) {
                _context2.next = 8;
                break;
              }
              throw new Error('No existe el paciente');
            case 8:
              return _context2.abrupt("return", pacient);
            case 9:
              _context2.next = 14;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              throw new Error(_context2.t0.message);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 11]]);
      }));
      function paciente(_x) {
        return _paciente.apply(this, arguments);
      }
      return paciente;
    }()
  },
  Mutation: {
    agregarPaciente: function () {
      var _agregarPaciente = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, _ref) {
        var input, createPacient;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = _ref.input;
              _context3.prev = 1;
              createPacient = _database__WEBPACK_IMPORTED_MODULE_1__["default"].paciente.create(input);
              return _context3.abrupt("return", createPacient);
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](1);
              throw new Error('no se pudo crear el nuevo paciente');
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 6]]);
      }));
      function agregarPaciente(_x2, _x3) {
        return _agregarPaciente.apply(this, arguments);
      }
      return agregarPaciente;
    }(),
    desactivarPaciente: function () {
      var _desactivarPaciente = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_, _ref2) {
        var input, paciente_id;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              input = _ref2.input, paciente_id = _ref2.paciente_id;
              _database__WEBPACK_IMPORTED_MODULE_1__["default"].paciente.update(input, {
                where: {
                  paciente_id: paciente_id
                }
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function desactivarPaciente(_x4, _x5) {
        return _desactivarPaciente.apply(this, arguments);
      }
      return desactivarPaciente;
    }()
  }
};

/***/ }),

/***/ "./app/GraphQL/profesional.js":
/*!************************************!*\
  !*** ./app/GraphQL/profesional.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": () => (/* binding */ resolvers),
/* harmony export */   "typeDefs": () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    profesionales:[Profesional]\n    profesional(profesional_id:ID!):Profesional\n  }\n  type Profesional{\n    profesional_id:ID\n    usuario:String\n    password:String\n    nombre:String\n    especialidad:String\n    celular:Int\n    email:String\n    avatar:String\n  }\n"])));
var resolvers = {
  Query: {
    profesionales: function () {
      var _profesionales = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["default"].profesional.findAll());
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function profesionales() {
        return _profesionales.apply(this, arguments);
      }
      return profesionales;
    }(),
    profesional: function () {
      var _profesional = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(obj, args, context, info) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["default"].profesional.findByPk(args.id));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function profesional(_x, _x2, _x3, _x4) {
        return _profesional.apply(this, arguments);
      }
      return profesional;
    }()
  }
};

/***/ }),

/***/ "./app/database.js":
/*!*************************!*\
  !*** ./app/database.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);

(__webpack_require__(/*! dotenv */ "dotenv").config)();
var db = {};
var sequelize = new (sequelize__WEBPACK_IMPORTED_MODULE_0___default())(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'mysql',
  define: {
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
  operatorsAliases: 0
});
var models = [__webpack_require__(/*! ../models/horarios.js */ "./models/horarios.js"), __webpack_require__(/*! ../models/notas.js */ "./models/notas.js"), __webpack_require__(/*! ../models/paciente.js */ "./models/paciente.js"), __webpack_require__(/*! ../models/profesional.js */ "./models/profesional.js")];

// Initialize models
models.forEach(function (model) {
  var seqModel = model(sequelize, (sequelize__WEBPACK_IMPORTED_MODULE_0___default()));
  db[seqModel.name] = seqModel;
});

// Apply associations
Object.keys(db).forEach(function (key) {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = (sequelize__WEBPACK_IMPORTED_MODULE_0___default());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

/***/ }),

/***/ "./models/horarios.js":
/*!****************************!*\
  !*** ./models/horarios.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('horarios', {
    turno_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    profesional: {
      type: DataTypes.STRING(30),
      allowNull: false,
      references: {
        model: 'profesional',
        key: 'usuario'
      }
    },
    paciente: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'paciente',
        key: 'nombre'
      }
    },
    duracion: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    tableName: 'horarios',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "turno_id"
      }]
    }, {
      name: "fk_horario_profesional",
      using: "BTREE",
      fields: [{
        name: "profesional"
      }]
    }, {
      name: "fk_horario_paciente",
      using: "BTREE",
      fields: [{
        name: "paciente"
      }]
    }]
  });
};

/***/ }),

/***/ "./models/notas.js":
/*!*************************!*\
  !*** ./models/notas.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('notas', {
    nota: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nota_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    profesional: {
      type: DataTypes.STRING(30),
      allowNull: false,
      references: {
        model: 'profesional',
        key: 'usuario'
      }
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    tableName: 'notas',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "nota_id"
      }]
    }, {
      name: "profesional",
      using: "BTREE",
      fields: [{
        name: "profesional"
      }]
    }]
  });
};

/***/ }),

/***/ "./models/paciente.js":
/*!****************************!*\
  !*** ./models/paciente.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('paciente', {
    paciente_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    tableName: 'paciente',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "paciente_id"
      }]
    }, {
      name: "nombre",
      using: "BTREE",
      fields: [{
        name: "nombre"
      }]
    }]
  });
};

/***/ }),

/***/ "./models/profesional.js":
/*!*******************************!*\
  !*** ./models/profesional.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('profesional', {
    profesional_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    especialidad: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    tableName: 'profesional',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "profesional_id"
      }]
    }, {
      name: "usuario",
      using: "BTREE",
      fields: [{
        name: "usuario"
      }]
    }]
  });
};

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/polyfill");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-express");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var _require = __webpack_require__(/*! apollo-server-express */ "apollo-server-express"),
  ApolloServer = _require.ApolloServer;
var cors = __webpack_require__(/*! cors */ "cors");
var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
var server = new ApolloServer({
  modules: [__webpack_require__(/*! ./GraphQL/horarios.js */ "./app/GraphQL/horarios.js"), __webpack_require__(/*! ./GraphQL/paciente.js */ "./app/GraphQL/paciente.js"), __webpack_require__(/*! ./GraphQL/notas.js */ "./app/GraphQL/notas.js"), __webpack_require__(/*! ./GraphQL/profesional.js */ "./app/GraphQL/profesional.js")]
});
var serverRun = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return server.start().then(function (res) {});
        case 2:
          server.applyMiddleware({
            app: app
          });
          app.get('/', function (req, res) {
            return res.send('Hello World!');
          });
          app.listen({
            port: 5000
          }, function () {
            return console.log("\uD83D\uDE80 Server ready at http://localhost:5000");
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function serverRun() {
    return _ref.apply(this, arguments);
  };
}();
serverRun();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLDhEQUEwQixDQUFDO0FBRTNDLENBQUMsQ0FBQztBQUVGLElBQU11RSxTQUFTO0VBQUEsc0VBQUc7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBLE9BQ1JGLE1BQU0sQ0FBQ0csS0FBSyxFQUFFLENBQUNDLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFBQTtVQUVsQ0wsTUFBTSxDQUFDTSxlQUFlLENBQUM7WUFBRVgsR0FBRyxFQUFIQTtVQUFJLENBQUMsQ0FBQztVQUUvQkEsR0FBRyxDQUFDWSxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUNDLEdBQUcsRUFBRUgsR0FBRztZQUFBLE9BQUtBLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQztVQUFBLEVBQUM7VUFFcERkLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDO1lBQUVyRSxJQUFJLEVBQUU7VUFBSyxDQUFDLEVBQUU7WUFBQSxPQUN2QnNFLE9BQU8sQ0FBQ0MsR0FBRyxzREFBNEM7VUFBQSxFQUMxRDtRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNKO0VBQUEsZ0JBVktWLFNBQVM7SUFBQTtFQUFBO0FBQUEsR0FVZDtBQUVEQSxTQUFTLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvR3JhcGhRTC9ob3Jhcmlvcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL0dyYXBoUUwvbm90YXMuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9HcmFwaFFML3BhY2llbnRlLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvR3JhcGhRTC9wcm9mZXNpb25hbC5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL2RhdGFiYXNlLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9tb2RlbHMvaG9yYXJpb3MuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9ub3Rhcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL3BhY2llbnRlLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9tb2RlbHMvcHJvZmVzaW9uYWwuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIGhvcmFyaW9zOiBbSG9yYXJpb11cclxuICAgIGhvcmFyaW8oaWQ6SUQhKTogSG9yYXJpbyAgIFxyXG4gIH1cclxuICB0eXBlIEhvcmFyaW97XHJcbiAgICB0dXJub19pZDpJRFxyXG4gICAgcHJvZmVzaW9uYWw6IFN0cmluZ1xyXG4gICAgcGFjaWVudGU6U3RyaW5nXHJcbiAgICBkdXJhY2lvbjpJbnRcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeToge1xyXG4gICAgdGlja2V0czogYXN5bmMgKCkgPT4gZGIuaG9yYXJpb3MuZmluZEFsbCgpLFxyXG4gICAgdGlja2V0OiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxyXG4gICAgICBkYi5ob3Jhcmlvcy5maW5kQnlQayhhcmdzLmlkKSxcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbCBgXHJcbiAgZXh0ZW5kIHR5cGUgUXVlcnl7XHJcbiAgICBub3RhczogW05vdGFdXHJcbiAgICBub3RhKG5vdGFfaWQ6SUQhKTogTm90YVxyXG4gIH1cclxuICB0eXBlIE5vdGF7XHJcbiAgICBub3RhX2lkOiBJRFxyXG4gICAgbm90YTpTdHJpbmdcclxuICAgIHByb2Zlc2lvbmFsOlN0cmluZ1xyXG4gICAgZmVjaGE6U3RyaW5nXHJcbiAgfVxyXG4gIGlucHV0IGFkZE5vdGV7XHJcbiAgICBub3RhOlN0cmluZ1xyXG4gICAgcHJvZmVzaW9uYWw6U3RyaW5nXHJcbiAgICBmZWNoYTpTdHJpbmdcclxuICB9XHJcbiAgZXh0ZW5kIHR5cGUgTXV0YXRpb257XHJcbiAgICBhZ3JlZ2FyTm90YShpbnB1dDphZGROb3RlKTpOb3RhXHJcbiAgICBlbGltaW5hck5vdGEobm90YV9pZDpJbnQpOk5vdGFcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPXtcclxuICBRdWVyeToge1xyXG4gICAgbm90YXM6IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IG5vdGVzID0gYXdhaXQgZGIubm90YXMuZmluZEFsbCgpO1xyXG4gICAgICAgIGlmICghbm90ZXMpe1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBleGlzdGVuIG5vdGFzIHBhcmEgbW9zdHJhcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub3RlcztcclxuICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbm90YTogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cclxuICAgICAgZGIubm90YXMuZmluZEJ5UGsoYXJncy5pZCksXHJcbiAgfSxcclxuXHJcbiAgTXV0YXRpb246IHtcclxuICAgIGFncmVnYXJOb3RhOiBhc3luYyAoXyx7aW5wdXR9KT0+IHtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5vdGUgPSBhd2FpdCBkYi5ub3Rhcy5jcmVhdGUoaW5wdXQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vdGVcclxuICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgYWwgY3JlYXIgbGEgbm90YScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbGltaW5hck5vdGE6IGFzeW5jIChfLHtub3RhX2lkfSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBsZXQgbm90YSA9IGF3YWl0IGRiLm5vdGFzLmRlc3Ryb3koe3doZXJlOiB7bm90YV9pZDpub3RhX2lkfX0pXHJcbiAgICAgICAgaWYgKG5vdGEpe1xyXG4gICAgICAgICAgcmV0dXJuICdPaydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdubyBleGlzdGUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZXhpc3RlIGxhIG5vdGEnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgZXh0ZW5kIHR5cGUgUXVlcnl7XHJcbiAgICBwYWNpZW50ZXM6IFtQYWNpZW50ZV1cclxuICAgIHBhY2llbnRlKHBhY2llbnRlX2lkOklEISk6IFBhY2llbnRlICAgXHJcbiAgfVxyXG4gIHR5cGUgUGFjaWVudGV7XHJcbiAgICBwYWNpZW50ZV9pZDpJRFxyXG4gICAgbm9tYnJlOiBTdHJpbmdcclxuICAgIGNlbHVsYXI6U3RyaW5nXHJcbiAgICBhY3Rpdm86Qm9vbGVhblxyXG4gIH1cclxuICBpbnB1dCBhZGRQYWNpZW50e1xyXG4gICAgbm9tYnJlOlN0cmluZ1xyXG4gICAgY2VsdWxhcjpTdHJpbmdcclxuICB9XHJcbiAgaW5wdXQgc2V0UGFjaWVudHtcclxuICAgIGFjdGl2bzpCb29sZWFuXHJcbiAgfVxyXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9ue1xyXG4gICAgYWdyZWdhclBhY2llbnRlKGlucHV0OmFkZFBhY2llbnQpOlBhY2llbnRlXHJcbiAgICBkZXNhY3RpdmFyUGFjaWVudGUocGFjaWVudGVfaWQ6SW50LCBpbnB1dDogc2V0UGFjaWVudCk6UGFjaWVudGVcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeToge1xyXG4gICAgcGFjaWVudGVzOiBhc3luYyAoKSA9PiBkYi5wYWNpZW50ZS5maW5kQWxsKHt3aGVyZTp7YWN0aXZvOnRydWV9fSksXHJcbiAgICBwYWNpZW50ZTogYXN5bmMgKGFyZ3MpID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcGFjaWVudCA9IGF3YWl0IGRiLnBhY2llbnRlLmZpbmRBbGwoe3doZXJlOiB7bm9tYnJlOmFyZ3Mubm9tYnJlfX0pXHJcbiAgICAgICAgaWYoIXBhY2llbnQpe1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBleGlzdGUgZWwgcGFjaWVudGUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcGFjaWVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBNdXRhdGlvbjp7XHJcbiAgICBhZ3JlZ2FyUGFjaWVudGU6IGFzeW5jKF8sIHtpbnB1dH0pPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjcmVhdGVQYWNpZW50ID0gZGIucGFjaWVudGUuY3JlYXRlKGlucHV0KVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVQYWNpZW50XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc2UgcHVkbyBjcmVhciBlbCBudWV2byBwYWNpZW50ZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZXNhY3RpdmFyUGFjaWVudGU6IGFzeW5jKF8se2lucHV0LCBwYWNpZW50ZV9pZH0pPT57XHJcbiAgICAgIGRiLnBhY2llbnRlLnVwZGF0ZShpbnB1dCAse3doZXJlOntwYWNpZW50ZV9pZDpwYWNpZW50ZV9pZH19KVxyXG4gICAgfSxcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbCBgXHJcbiAgZXh0ZW5kIHR5cGUgUXVlcnl7XHJcbiAgICBwcm9mZXNpb25hbGVzOltQcm9mZXNpb25hbF1cclxuICAgIHByb2Zlc2lvbmFsKHByb2Zlc2lvbmFsX2lkOklEISk6UHJvZmVzaW9uYWxcclxuICB9XHJcbiAgdHlwZSBQcm9mZXNpb25hbHtcclxuICAgIHByb2Zlc2lvbmFsX2lkOklEXHJcbiAgICB1c3VhcmlvOlN0cmluZ1xyXG4gICAgcGFzc3dvcmQ6U3RyaW5nXHJcbiAgICBub21icmU6U3RyaW5nXHJcbiAgICBlc3BlY2lhbGlkYWQ6U3RyaW5nXHJcbiAgICBjZWx1bGFyOkludFxyXG4gICAgZW1haWw6U3RyaW5nXHJcbiAgICBhdmF0YXI6U3RyaW5nXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OntcclxuICAgIHByb2Zlc2lvbmFsZXM6IGFzeW5jICgpID0+IGRiLnByb2Zlc2lvbmFsLmZpbmRBbGwoKSxcclxuICAgIHByb2Zlc2lvbmFsOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxyXG4gICAgICBkYi5wcm9mZXNpb25hbC5maW5kQnlQayhhcmdzLmlkKSxcclxuICB9XHJcbn0iLCJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcblxyXG52YXIgZGIgPSB7fVxyXG5cclxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIHByb2Nlc3MuZW52LkRBVEFCQVNFX05BTUUsXHJcbiAgICBwcm9jZXNzLmVudi5EQVRBQkFTRV9VU0VSLFxyXG4gICAgcHJvY2Vzcy5lbnYuREFUQUJBU0VfUEFTU1dPUkQsXHJcbiAgICB7XHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfSE9TVCxcclxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9QT1JULFxyXG4gICAgICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICAgICAgZGVmaW5lOiB7XHJcbiAgICAgICAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvb2w6IHtcclxuICAgICAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgICAgICAgICBpZGxlOiAxMDAwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIDxodHRwOi8vZG9jcy5zZXF1ZWxpemVqcy5jb20vbWFudWFsL3R1dG9yaWFsL3F1ZXJ5aW5nLmh0bWwjb3BlcmF0b3JzPlxyXG4gICAgICAgIG9wZXJhdG9yc0FsaWFzZXM6IDAsXHJcbiAgICB9LFxyXG4pXHJcblxyXG5sZXQgbW9kZWxzID0gW1xyXG4gIHJlcXVpcmUoJy4uL21vZGVscy9ob3Jhcmlvcy5qcycpLFxyXG4gIHJlcXVpcmUoJy4uL21vZGVscy9ub3Rhcy5qcycpLFxyXG4gIHJlcXVpcmUoJy4uL21vZGVscy9wYWNpZW50ZS5qcycpLFxyXG4gIHJlcXVpcmUoJy4uL21vZGVscy9wcm9mZXNpb25hbC5qcycpLFxyXG5cclxuXVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBtb2RlbHNcclxubW9kZWxzLmZvckVhY2gobW9kZWwgPT4ge1xyXG4gICAgY29uc3Qgc2VxTW9kZWwgPSBtb2RlbChzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcclxuICAgIGRiW3NlcU1vZGVsLm5hbWVdID0gc2VxTW9kZWxcclxufSlcclxuXHJcbi8vIEFwcGx5IGFzc29jaWF0aW9uc1xyXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgaWYgKCdhc3NvY2lhdGUnIGluIGRiW2tleV0pIHtcclxuICAgICAgICBkYltrZXldLmFzc29jaWF0ZShkYilcclxuICAgIH1cclxufSlcclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZVxyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdob3JhcmlvcycsIHtcbiAgICB0dXJub19pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHByb2Zlc2lvbmFsOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAncHJvZmVzaW9uYWwnLFxuICAgICAgICBrZXk6ICd1c3VhcmlvJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFjaWVudGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNTApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwYWNpZW50ZScsXG4gICAgICAgIGtleTogJ25vbWJyZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIGR1cmFjaW9uOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuVElNRSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAnaG9yYXJpb3MnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInR1cm5vX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJma19ob3JhcmlvX3Byb2Zlc2lvbmFsXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwcm9mZXNpb25hbFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZmtfaG9yYXJpb19wYWNpZW50ZVwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicGFjaWVudGVcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdub3RhcycsIHtcbiAgICBub3RhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuVEVYVCxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIG5vdGFfaWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBwcm9mZXNpb25hbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3Byb2Zlc2lvbmFsJyxcbiAgICAgICAga2V5OiAndXN1YXJpbydcbiAgICAgIH1cbiAgICB9LFxuICAgIGZlY2hhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURU9OTFksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ25vdGFzJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJub3RhX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJwcm9mZXNpb25hbFwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdwYWNpZW50ZScsIHtcbiAgICBwYWNpZW50ZV9pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIG5vbWJyZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBjZWx1bGFyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDE1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGFjdGl2bzp7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuQk9PTEVBTixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ3BhY2llbnRlJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwYWNpZW50ZV9pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwibm9tYnJlXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJub21icmVcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdwcm9mZXNpb25hbCcsIHtcbiAgICBwcm9mZXNpb25hbF9pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHVzdWFyaW86IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgbm9tYnJlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGVzcGVjaWFsaWRhZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg1MCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgY2VsdWxhcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygxNSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzAwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAncHJvZmVzaW9uYWwnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInByb2Zlc2lvbmFsX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ1c3VhcmlvXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ1c3VhcmlvXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJ1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXG5jb25zdCB7IEFwb2xsb1NlcnZlciB9ID0gcmVxdWlyZSgnYXBvbGxvLXNlcnZlci1leHByZXNzJylcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXG5hcHAudXNlKGNvcnMoKSlcblxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgbW9kdWxlczogW1xuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvaG9yYXJpb3MuanMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9HcmFwaFFML3BhY2llbnRlLmpzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9ub3Rhcy5qcycpLFxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvcHJvZmVzaW9uYWwuanMnKVxuICAgIF0sXG59KVxuXG5jb25zdCBzZXJ2ZXJSdW4gPSBhc3luYyAoKSA9PntcbiAgICBhd2FpdCBzZXJ2ZXIuc3RhcnQoKS50aGVuKHJlcz0+e30pXG5cbiAgICBzZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pXG4gICAgXG4gICAgYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4gcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpKVxuICAgIFxuICAgIGFwcC5saXN0ZW4oeyBwb3J0OiA1MDAwIH0sICgpID0+XG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5qAIFNlcnZlciByZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OjUwMDBgKSxcbiAgICApXG59XG5cbnNlcnZlclJ1bigpIl0sIm5hbWVzIjpbImdxbCIsImRiIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInRpY2tldHMiLCJob3JhcmlvcyIsImZpbmRBbGwiLCJ0aWNrZXQiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJmaW5kQnlQayIsImlkIiwibm90YXMiLCJub3RlcyIsIkVycm9yIiwibWVzc2FnZSIsIm5vdGEiLCJNdXRhdGlvbiIsImFncmVnYXJOb3RhIiwiXyIsImlucHV0IiwiY3JlYXRlIiwiY3JlYXRlTm90ZSIsImVsaW1pbmFyTm90YSIsIm5vdGFfaWQiLCJkZXN0cm95Iiwid2hlcmUiLCJwYWNpZW50ZXMiLCJwYWNpZW50ZSIsImFjdGl2byIsIm5vbWJyZSIsInBhY2llbnQiLCJhZ3JlZ2FyUGFjaWVudGUiLCJjcmVhdGVQYWNpZW50IiwiZGVzYWN0aXZhclBhY2llbnRlIiwicGFjaWVudGVfaWQiLCJ1cGRhdGUiLCJwcm9mZXNpb25hbGVzIiwicHJvZmVzaW9uYWwiLCJTZXF1ZWxpemUiLCJyZXF1aXJlIiwiY29uZmlnIiwic2VxdWVsaXplIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX05BTUUiLCJEQVRBQkFTRV9VU0VSIiwiREFUQUJBU0VfUEFTU1dPUkQiLCJob3N0IiwiREFUQUJBU0VfSE9TVCIsInBvcnQiLCJEQVRBQkFTRV9QT1JUIiwiZGlhbGVjdCIsImRlZmluZSIsImZyZWV6ZVRhYmxlTmFtZSIsInBvb2wiLCJtYXgiLCJtaW4iLCJhY3F1aXJlIiwiaWRsZSIsIm9wZXJhdG9yc0FsaWFzZXMiLCJtb2RlbHMiLCJmb3JFYWNoIiwibW9kZWwiLCJzZXFNb2RlbCIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXNzb2NpYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkRhdGFUeXBlcyIsInR1cm5vX2lkIiwiYXV0b0luY3JlbWVudCIsInR5cGUiLCJJTlRFR0VSIiwiYWxsb3dOdWxsIiwicHJpbWFyeUtleSIsIlNUUklORyIsInJlZmVyZW5jZXMiLCJkdXJhY2lvbiIsIlRJTUUiLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwiaW5kZXhlcyIsInVuaXF1ZSIsInVzaW5nIiwiZmllbGRzIiwiVEVYVCIsImZlY2hhIiwiREFURU9OTFkiLCJjZWx1bGFyIiwiQk9PTEVBTiIsInByb2Zlc2lvbmFsX2lkIiwidXN1YXJpbyIsInBhc3N3b3JkIiwiZXNwZWNpYWxpZGFkIiwiZW1haWwiLCJhdmF0YXIiLCJleHByZXNzIiwiYm9keVBhcnNlciIsIkFwb2xsb1NlcnZlciIsImNvcnMiLCJhcHAiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2VydmVyIiwibW9kdWxlcyIsInNlcnZlclJ1biIsInN0YXJ0IiwidGhlbiIsInJlcyIsImFwcGx5TWlkZGxld2FyZSIsImdldCIsInJlcSIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==