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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
  Op = _require.Op;
var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    horarios: [Horario]\n    horario(id:ID!): Horario\n    horarioPorDia(fecha:String):[Horario]\n    horarioPorDiaHora(fecha:String, hora:AllowedHour):Horario   \n  }\n  type Horario{\n    turno_id:ID\n    profesional: String\n    paciente:String\n    duracion:Duration!\n    hora: AllowedHour!\n    fecha:String\n  }\n  enum Duration{\n    HALF\n    ONE\n    ONEH\n    TWO\n  }\n  enum AllowedHour{\n    NINE\n    NINEH\n    TEN\n    TENH\n    ELEVEN\n    ELEVENH\n    TWELVE\n    TWELVEH\n    FOURTEEN\n    FOURTEENH\n    FIFTEEN\n    FIFTEENH\n    SIXTEEN\n    SIXTEENH\n    SEVENTEEN\n    SEVENTEENH\n  }\n"])));
var resolvers = {
  Duration: {
    HALFHOUR: '0:30',
    ONEHOUR: '1:00',
    ONEHALF: '1:30',
    TWOHOURS: '2:00'
  },
  AllowedHour: {
    NINE: '9:00',
    NINEH: '9:30',
    TEN: "10:00",
    TENH: '10:30',
    ELEVEN: '11:00',
    ELEVENH: '11:30',
    TWELVE: '12:00',
    TWELVEH: '12:30',
    FOURTEEN: '14:00',
    FOURTEENH: '14:30',
    FIFTEEN: '15:00',
    FIFTEENH: '15:30',
    SIXTEEN: '16:00',
    SIXTEENH: '16:30',
    SEVENTEEN: '17:00',
    SEVENTEENH: '17:30'
  },
  Query: {
    horarios: function () {
      var _horarios = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
      function horarios() {
        return _horarios.apply(this, arguments);
      }
      return horarios;
    }(),
    horario: function () {
      var _horario = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(obj, args, context, info) {
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
      function horario(_x, _x2, _x3, _x4) {
        return _horario.apply(this, arguments);
      }
      return horario;
    }(),
    horarioPorDiaHora: function () {
      var _horarioPorDiaHora = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, _ref) {
        var fecha, hora, horario;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              fecha = _ref.fecha, hora = _ref.hora;
              _context3.prev = 1;
              _context3.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findOne({
                where: _defineProperty({}, Op.and, [{
                  fecha: fecha
                }, {
                  hora: hora
                }])
              });
            case 4:
              horario = _context3.sent;
              if (!(horario === null)) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return", '');
            case 9:
              return _context3.abrupt("return", horario);
            case 10:
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](1);
              throw new Error('Error');
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 12]]);
      }));
      function horarioPorDiaHora(_x5, _x6) {
        return _horarioPorDiaHora.apply(this, arguments);
      }
      return horarioPorDiaHora;
    }(),
    horarioPorDia: function () {
      var _horarioPorDia = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_, _ref2) {
        var fecha, horario;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              fecha = _ref2.fecha;
              _context4.prev = 1;
              _context4.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findAll({
                where: {
                  fecha: fecha
                }
              });
            case 4:
              horario = _context4.sent;
              if (!(horario === null)) {
                _context4.next = 9;
                break;
              }
              return _context4.abrupt("return", '');
            case 9:
              return _context4.abrupt("return", horario);
            case 10:
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);
              throw new Error('Error');
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 12]]);
      }));
      function horarioPorDia(_x7, _x8) {
        return _horarioPorDia.apply(this, arguments);
      }
      return horarioPorDia;
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


var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    pacientes: [Paciente]\n    paciente(paciente_id:ID!): Paciente   \n  }\n  type Paciente{\n    paciente_id:ID\n    nombre: String\n    celular:String\n    activo:Boolean\n  }\n  input addPacient{\n    nombre:String\n    celular:String\n    activo:Boolean\n  }\n  input setPacient{\n    activo:Boolean\n  }\n  extend type Mutation{\n    agregarPaciente(input:addPacient):Paciente\n    desactivarPaciente(paciente_id:Int, input: setPacient):Paciente\n  }\n"])));
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
    hora: {
      type: DataTypes.ENUM('NINE', 'NINEH', 'TEN', 'TENH', 'ELEVEN', 'ELEVENH', 'TWELVE', 'TWELVEH', 'FOURTEEN', 'FOURTEENH', 'FIFTEEN', 'FIFTEENH', 'SIXTEEN', 'SIXTEENH', 'SEVENTEEN', 'SEVENTEENH'),
      allowNull: true
    },
    duracion: {
      type: DataTypes.ENUM('HALF', 'ONE', 'ONEH', 'TWO'),
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING(),
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
      allowNull: false,
      defaultValue: 1
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
      type: DataTypes.CHAR(50),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aENBLG1CQUFPLENBQUMsa0RBQW9CLENBQUMsRUFDN0JBLG1CQUFPLENBQUMsOERBQTBCLENBQUM7QUFFM0MsQ0FBQyxDQUFDO0FBRUYsSUFBTTZJLFNBQVM7RUFBQSxzRUFBRztJQUFBO01BQUE7UUFBQTtVQUFBO1VBQUEsT0FDUkYsTUFBTSxDQUFDRyxLQUFLLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUFBO1VBRWxDTCxNQUFNLENBQUNNLGVBQWUsQ0FBQztZQUFFWCxHQUFHLEVBQUhBO1VBQUksQ0FBQyxDQUFDO1VBRS9CQSxHQUFHLENBQUNZLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQ0MsR0FBRyxFQUFFSCxHQUFHO1lBQUEsT0FBS0EsR0FBRyxDQUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDO1VBQUEsRUFBQztVQUVwRGQsR0FBRyxDQUFDZSxNQUFNLENBQUM7WUFBRXRFLElBQUksRUFBRTtVQUFLLENBQUMsRUFBRTtZQUFBLE9BQ3ZCdUUsT0FBTyxDQUFDQyxHQUFHLHNEQUE0QztVQUFBLEVBQzFEO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBLENBQ0o7RUFBQSxnQkFWS1YsU0FBUztJQUFBO0VBQUE7QUFBQSxHQVVkO0FBRURBLFNBQVMsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9HcmFwaFFML2hvcmFyaW9zLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvR3JhcGhRTC9ub3Rhcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL0dyYXBoUUwvcGFjaWVudGUuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9HcmFwaFFML3Byb2Zlc2lvbmFsLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9ob3Jhcmlvcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL25vdGFzLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9tb2RlbHMvcGFjaWVudGUuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9wcm9mZXNpb25hbC5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5jb25zdCB7IE9wIH0gPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIGhvcmFyaW9zOiBbSG9yYXJpb11cclxuICAgIGhvcmFyaW8oaWQ6SUQhKTogSG9yYXJpb1xyXG4gICAgaG9yYXJpb1BvckRpYShmZWNoYTpTdHJpbmcpOltIb3JhcmlvXVxyXG4gICAgaG9yYXJpb1BvckRpYUhvcmEoZmVjaGE6U3RyaW5nLCBob3JhOkFsbG93ZWRIb3VyKTpIb3JhcmlvICAgXHJcbiAgfVxyXG4gIHR5cGUgSG9yYXJpb3tcclxuICAgIHR1cm5vX2lkOklEXHJcbiAgICBwcm9mZXNpb25hbDogU3RyaW5nXHJcbiAgICBwYWNpZW50ZTpTdHJpbmdcclxuICAgIGR1cmFjaW9uOkR1cmF0aW9uIVxyXG4gICAgaG9yYTogQWxsb3dlZEhvdXIhXHJcbiAgICBmZWNoYTpTdHJpbmdcclxuICB9XHJcbiAgZW51bSBEdXJhdGlvbntcclxuICAgIEhBTEZcclxuICAgIE9ORVxyXG4gICAgT05FSFxyXG4gICAgVFdPXHJcbiAgfVxyXG4gIGVudW0gQWxsb3dlZEhvdXJ7XHJcbiAgICBOSU5FXHJcbiAgICBOSU5FSFxyXG4gICAgVEVOXHJcbiAgICBURU5IXHJcbiAgICBFTEVWRU5cclxuICAgIEVMRVZFTkhcclxuICAgIFRXRUxWRVxyXG4gICAgVFdFTFZFSFxyXG4gICAgRk9VUlRFRU5cclxuICAgIEZPVVJURUVOSFxyXG4gICAgRklGVEVFTlxyXG4gICAgRklGVEVFTkhcclxuICAgIFNJWFRFRU5cclxuICAgIFNJWFRFRU5IXHJcbiAgICBTRVZFTlRFRU5cclxuICAgIFNFVkVOVEVFTkhcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBEdXJhdGlvbjp7XHJcbiAgICBIQUxGSE9VUjogJzA6MzAnLFxyXG4gICAgT05FSE9VUjogJzE6MDAnLFxyXG4gICAgT05FSEFMRjogJzE6MzAnLFxyXG4gICAgVFdPSE9VUlM6ICcyOjAwJ1xyXG4gIH0sXHJcbiAgQWxsb3dlZEhvdXI6e1xyXG4gICAgTklORTogJzk6MDAnLFxyXG4gICAgTklORUg6ICc5OjMwJyxcclxuICAgIFRFTjogXCIxMDowMFwiLFxyXG4gICAgVEVOSDogJzEwOjMwJyxcclxuICAgIEVMRVZFTjogJzExOjAwJyxcclxuICAgIEVMRVZFTkg6ICcxMTozMCcsXHJcbiAgICBUV0VMVkU6ICcxMjowMCcsXHJcbiAgICBUV0VMVkVIOiAnMTI6MzAnLFxyXG4gICAgRk9VUlRFRU46ICcxNDowMCcsXHJcbiAgICBGT1VSVEVFTkg6ICcxNDozMCcsXHJcbiAgICBGSUZURUVOOiAnMTU6MDAnLFxyXG4gICAgRklGVEVFTkg6ICcxNTozMCcsXHJcbiAgICBTSVhURUVOOiAnMTY6MDAnLFxyXG4gICAgU0lYVEVFTkg6ICcxNjozMCcsXHJcbiAgICBTRVZFTlRFRU46ICcxNzowMCcsXHJcbiAgICBTRVZFTlRFRU5IOiAnMTc6MzAnLFxyXG4gIH0sXHJcbiAgUXVlcnk6IHtcclxuICAgIGhvcmFyaW9zOiBhc3luYyAoKSA9PmRiLmhvcmFyaW9zLmZpbmRBbGwoKSxcclxuICAgICAgIFxyXG4gICAgaG9yYXJpbzogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cclxuICAgICAgZGIuaG9yYXJpb3MuZmluZEJ5UGsoYXJncy5pZCksXHJcbiAgICBob3JhcmlvUG9yRGlhSG9yYTogYXN5bmMgKF8se2ZlY2hhLCBob3JhfSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBob3JhcmlvID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZE9uZSh7d2hlcmU6IHsgW09wLmFuZF06IFtcclxuICAgICAgICAgIHsgZmVjaGE6IGZlY2hhIH0sXHJcbiAgICAgICAgICB7IGhvcmE6IGhvcmEgfVxyXG4gICAgICAgIF19fSlcclxuICAgICAgICBpZiAoaG9yYXJpbyA9PT0gbnVsbCl7XHJcbiAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGhvcmFyaW9cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3InKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaG9yYXJpb1BvckRpYTogYXN5bmMgKF8sIHtmZWNoYX0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgaG9yYXJpbyA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRBbGwoe3doZXJlOiB7ZmVjaGE6ZmVjaGF9fSlcclxuICAgICAgICBpZiAoaG9yYXJpbyA9PT0gbnVsbCl7XHJcbiAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGhvcmFyaW9cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3InKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWwgYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgbm90YXM6IFtOb3RhXVxyXG4gICAgbm90YShub3RhX2lkOklEISk6IE5vdGFcclxuICB9XHJcbiAgdHlwZSBOb3Rhe1xyXG4gICAgbm90YV9pZDogSURcclxuICAgIG5vdGE6U3RyaW5nXHJcbiAgICBwcm9mZXNpb25hbDpTdHJpbmdcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBpbnB1dCBhZGROb3Rle1xyXG4gICAgbm90YTpTdHJpbmdcclxuICAgIHByb2Zlc2lvbmFsOlN0cmluZ1xyXG4gICAgZmVjaGE6U3RyaW5nXHJcbiAgfVxyXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9ue1xyXG4gICAgYWdyZWdhck5vdGEoaW5wdXQ6YWRkTm90ZSk6Tm90YVxyXG4gICAgZWxpbWluYXJOb3RhKG5vdGFfaWQ6SW50KTpOb3RhXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID17XHJcbiAgUXVlcnk6IHtcclxuICAgIG5vdGFzOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBub3RlcyA9IGF3YWl0IGRiLm5vdGFzLmZpbmRBbGwoKTtcclxuICAgICAgICBpZiAoIW5vdGVzKXtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZXhpc3RlbiBub3RhcyBwYXJhIG1vc3RyYXInKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm90ZXM7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5vdGE6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgIGRiLm5vdGFzLmZpbmRCeVBrKGFyZ3MuaWQpLFxyXG4gIH0sXHJcblxyXG4gIE11dGF0aW9uOiB7XHJcbiAgICBhZ3JlZ2FyTm90YTogYXN5bmMgKF8se2lucHV0fSk9PiB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjcmVhdGVOb3RlID0gYXdhaXQgZGIubm90YXMuY3JlYXRlKGlucHV0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjcmVhdGVOb3RlXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIGFsIGNyZWFyIGxhIG5vdGEnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWxpbWluYXJOb3RhOiBhc3luYyAoXyx7bm90YV9pZH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgbGV0IG5vdGEgPSBhd2FpdCBkYi5ub3Rhcy5kZXN0cm95KHt3aGVyZToge25vdGFfaWQ6bm90YV9pZH19KVxyXG4gICAgICAgIGlmIChub3RhKXtcclxuICAgICAgICAgIHJldHVybiAnT2snXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnbm8gZXhpc3RlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGV4aXN0ZSBsYSBub3RhJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgcGFjaWVudGVzOiBbUGFjaWVudGVdXHJcbiAgICBwYWNpZW50ZShwYWNpZW50ZV9pZDpJRCEpOiBQYWNpZW50ZSAgIFxyXG4gIH1cclxuICB0eXBlIFBhY2llbnRle1xyXG4gICAgcGFjaWVudGVfaWQ6SURcclxuICAgIG5vbWJyZTogU3RyaW5nXHJcbiAgICBjZWx1bGFyOlN0cmluZ1xyXG4gICAgYWN0aXZvOkJvb2xlYW5cclxuICB9XHJcbiAgaW5wdXQgYWRkUGFjaWVudHtcclxuICAgIG5vbWJyZTpTdHJpbmdcclxuICAgIGNlbHVsYXI6U3RyaW5nXHJcbiAgICBhY3Rpdm86Qm9vbGVhblxyXG4gIH1cclxuICBpbnB1dCBzZXRQYWNpZW50e1xyXG4gICAgYWN0aXZvOkJvb2xlYW5cclxuICB9XHJcbiAgZXh0ZW5kIHR5cGUgTXV0YXRpb257XHJcbiAgICBhZ3JlZ2FyUGFjaWVudGUoaW5wdXQ6YWRkUGFjaWVudCk6UGFjaWVudGVcclxuICAgIGRlc2FjdGl2YXJQYWNpZW50ZShwYWNpZW50ZV9pZDpJbnQsIGlucHV0OiBzZXRQYWNpZW50KTpQYWNpZW50ZVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBwYWNpZW50ZXM6IGFzeW5jICgpID0+IGRiLnBhY2llbnRlLmZpbmRBbGwoe3doZXJlOnthY3Rpdm86dHJ1ZX19KSxcclxuICAgIHBhY2llbnRlOiBhc3luYyAoYXJncykgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBwYWNpZW50ID0gYXdhaXQgZGIucGFjaWVudGUuZmluZEFsbCh7d2hlcmU6IHtub21icmU6YXJncy5ub21icmV9fSlcclxuICAgICAgICBpZighcGFjaWVudCl7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV4aXN0ZSBlbCBwYWNpZW50ZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBwYWNpZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIE11dGF0aW9uOntcclxuICAgIGFncmVnYXJQYWNpZW50ZTogYXN5bmMoXywge2lucHV0fSk9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVBhY2llbnQgPSBkYi5wYWNpZW50ZS5jcmVhdGUoaW5wdXQpXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBhY2llbnRcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBzZSBwdWRvIGNyZWFyIGVsIG51ZXZvIHBhY2llbnRlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlc2FjdGl2YXJQYWNpZW50ZTogYXN5bmMoXyx7aW5wdXQsIHBhY2llbnRlX2lkfSk9PntcclxuICAgICAgZGIucGFjaWVudGUudXBkYXRlKGlucHV0ICx7d2hlcmU6e3BhY2llbnRlX2lkOnBhY2llbnRlX2lkfX0pXHJcbiAgICB9LFxyXG4gIH1cclxufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsIGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIHByb2Zlc2lvbmFsZXM6W1Byb2Zlc2lvbmFsXVxyXG4gICAgcHJvZmVzaW9uYWwocHJvZmVzaW9uYWxfaWQ6SUQhKTpQcm9mZXNpb25hbFxyXG4gIH1cclxuICB0eXBlIFByb2Zlc2lvbmFse1xyXG4gICAgcHJvZmVzaW9uYWxfaWQ6SURcclxuICAgIHVzdWFyaW86U3RyaW5nXHJcbiAgICBwYXNzd29yZDpTdHJpbmdcclxuICAgIG5vbWJyZTpTdHJpbmdcclxuICAgIGVzcGVjaWFsaWRhZDpTdHJpbmdcclxuICAgIGNlbHVsYXI6SW50XHJcbiAgICBlbWFpbDpTdHJpbmdcclxuICAgIGF2YXRhcjpTdHJpbmdcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnk6e1xyXG4gICAgcHJvZmVzaW9uYWxlczogYXN5bmMgKCkgPT4gZGIucHJvZmVzaW9uYWwuZmluZEFsbCgpLFxyXG4gICAgcHJvZmVzaW9uYWw6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgIGRiLnByb2Zlc2lvbmFsLmZpbmRCeVBrKGFyZ3MuaWQpLFxyXG4gIH1cclxufSIsImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcbnZhciBkYiA9IHt9XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgcHJvY2Vzcy5lbnYuREFUQUJBU0VfTkFNRSxcclxuICAgIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VTRVIsXHJcbiAgICBwcm9jZXNzLmVudi5EQVRBQkFTRV9QQVNTV09SRCxcclxuICAgIHtcclxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9IT1NULFxyXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlQsXHJcbiAgICAgICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgICAgICBkZWZpbmU6IHtcclxuICAgICAgICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9vbDoge1xyXG4gICAgICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICAgICAgICAgIGlkbGU6IDEwMDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gPGh0dHA6Ly9kb2NzLnNlcXVlbGl6ZWpzLmNvbS9tYW51YWwvdHV0b3JpYWwvcXVlcnlpbmcuaHRtbCNvcGVyYXRvcnM+XHJcbiAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogMCxcclxuICAgIH0sXHJcbilcclxuXHJcbmxldCBtb2RlbHMgPSBbXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL2hvcmFyaW9zLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL25vdGFzLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL3BhY2llbnRlLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL3Byb2Zlc2lvbmFsLmpzJyksXHJcblxyXG5dXHJcblxyXG4vLyBJbml0aWFsaXplIG1vZGVsc1xyXG5tb2RlbHMuZm9yRWFjaChtb2RlbCA9PiB7XHJcbiAgICBjb25zdCBzZXFNb2RlbCA9IG1vZGVsKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxyXG4gICAgZGJbc2VxTW9kZWwubmFtZV0gPSBzZXFNb2RlbFxyXG59KVxyXG5cclxuLy8gQXBwbHkgYXNzb2NpYXRpb25zXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBpZiAoJ2Fzc29jaWF0ZScgaW4gZGJba2V5XSkge1xyXG4gICAgICAgIGRiW2tleV0uYXNzb2NpYXRlKGRiKVxyXG4gICAgfVxyXG59KVxyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplXHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGIiLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ2hvcmFyaW9zJywge1xuICAgIHR1cm5vX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZmVzaW9uYWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwcm9mZXNpb25hbCcsXG4gICAgICAgIGtleTogJ3VzdWFyaW8nXG4gICAgICB9XG4gICAgfSxcbiAgICBwYWNpZW50ZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg1MCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3BhY2llbnRlJyxcbiAgICAgICAga2V5OiAnbm9tYnJlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaG9yYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ05JTkUnLCdOSU5FSCcsJ1RFTicsJ1RFTkgnLCdFTEVWRU4nLCdFTEVWRU5IJywnVFdFTFZFJywnVFdFTFZFSCcsJ0ZPVVJURUVOJywnRk9VUlRFRU5IJywnRklGVEVFTicsJ0ZJRlRFRU5IJywnU0lYVEVFTicsJ1NJWFRFRU5IJywnU0VWRU5URUVOJywnU0VWRU5URUVOSCcpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBkdXJhY2lvbjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ0hBTEYnLCAnT05FJywgJ09ORUgnLCAnVFdPJyksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBmZWNoYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygpLFxuICAgICAgYWxsb3dOdWxsOmZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ2hvcmFyaW9zJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ0dXJub19pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZmtfaG9yYXJpb19wcm9mZXNpb25hbFwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImZrX2hvcmFyaW9fcGFjaWVudGVcIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInBhY2llbnRlXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgnbm90YXMnLCB7XG4gICAgbm90YToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlRFWFQsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBub3RhX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZmVzaW9uYWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwcm9mZXNpb25hbCcsXG4gICAgICAgIGtleTogJ3VzdWFyaW8nXG4gICAgICB9XG4gICAgfSxcbiAgICBmZWNoYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEVPTkxZLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICB0YWJsZU5hbWU6ICdub3RhcycsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgaW5kZXhlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBSSU1BUllcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwibm90YV9pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwicHJvZmVzaW9uYWxcIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInByb2Zlc2lvbmFsXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgncGFjaWVudGUnLCB7XG4gICAgcGFjaWVudGVfaWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBub21icmU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgY2VsdWxhcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygxNSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBhY3Rpdm86IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5CT09MRUFOLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICB0YWJsZU5hbWU6ICdwYWNpZW50ZScsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgaW5kZXhlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBSSU1BUllcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicGFjaWVudGVfaWRcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIm5vbWJyZVwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwibm9tYnJlXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgncHJvZmVzaW9uYWwnLCB7XG4gICAgcHJvZmVzaW9uYWxfaWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICB1c3VhcmlvOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDIwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIG5vbWJyZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBlc3BlY2lhbGlkYWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5DSEFSKDUwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGNlbHVsYXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ3Byb2Zlc2lvbmFsJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwcm9mZXNpb25hbF9pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwidXN1YXJpb1wiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwidXN1YXJpb1wiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxuY29uc3QgeyBBcG9sbG9TZXJ2ZXIgfSA9IHJlcXVpcmUoJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcycpXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxuYXBwLnVzZShjb3JzKCkpXG5cbmNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIG1vZHVsZXM6IFtcbiAgICAgICAgcmVxdWlyZSgnLi9HcmFwaFFML2hvcmFyaW9zLmpzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9wYWNpZW50ZS5qcycpLFxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvbm90YXMuanMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9HcmFwaFFML3Byb2Zlc2lvbmFsLmpzJylcbiAgICBdLFxufSlcblxuY29uc3Qgc2VydmVyUnVuID0gYXN5bmMgKCkgPT57XG4gICAgYXdhaXQgc2VydmVyLnN0YXJ0KCkudGhlbihyZXM9Pnt9KVxuXG4gICAgc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KVxuICAgIFxuICAgIGFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKCdIZWxsbyBXb3JsZCEnKSlcbiAgICBcbiAgICBhcHAubGlzdGVuKHsgcG9ydDogNTAwMCB9LCAoKSA9PlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo1MDAwYCksXG4gICAgKVxufVxuXG5zZXJ2ZXJSdW4oKSJdLCJuYW1lcyI6WyJncWwiLCJkYiIsInJlcXVpcmUiLCJPcCIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiRHVyYXRpb24iLCJIQUxGSE9VUiIsIk9ORUhPVVIiLCJPTkVIQUxGIiwiVFdPSE9VUlMiLCJBbGxvd2VkSG91ciIsIk5JTkUiLCJOSU5FSCIsIlRFTiIsIlRFTkgiLCJFTEVWRU4iLCJFTEVWRU5IIiwiVFdFTFZFIiwiVFdFTFZFSCIsIkZPVVJURUVOIiwiRk9VUlRFRU5IIiwiRklGVEVFTiIsIkZJRlRFRU5IIiwiU0lYVEVFTiIsIlNJWFRFRU5IIiwiU0VWRU5URUVOIiwiU0VWRU5URUVOSCIsIlF1ZXJ5IiwiaG9yYXJpb3MiLCJmaW5kQWxsIiwiaG9yYXJpbyIsIm9iaiIsImFyZ3MiLCJjb250ZXh0IiwiaW5mbyIsImZpbmRCeVBrIiwiaWQiLCJob3JhcmlvUG9yRGlhSG9yYSIsIl8iLCJmZWNoYSIsImhvcmEiLCJmaW5kT25lIiwid2hlcmUiLCJhbmQiLCJFcnJvciIsImhvcmFyaW9Qb3JEaWEiLCJub3RhcyIsIm5vdGVzIiwibWVzc2FnZSIsIm5vdGEiLCJNdXRhdGlvbiIsImFncmVnYXJOb3RhIiwiaW5wdXQiLCJjcmVhdGUiLCJjcmVhdGVOb3RlIiwiZWxpbWluYXJOb3RhIiwibm90YV9pZCIsImRlc3Ryb3kiLCJwYWNpZW50ZXMiLCJwYWNpZW50ZSIsImFjdGl2byIsIm5vbWJyZSIsInBhY2llbnQiLCJhZ3JlZ2FyUGFjaWVudGUiLCJjcmVhdGVQYWNpZW50IiwiZGVzYWN0aXZhclBhY2llbnRlIiwicGFjaWVudGVfaWQiLCJ1cGRhdGUiLCJwcm9mZXNpb25hbGVzIiwicHJvZmVzaW9uYWwiLCJTZXF1ZWxpemUiLCJjb25maWciLCJzZXF1ZWxpemUiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfTkFNRSIsIkRBVEFCQVNFX1VTRVIiLCJEQVRBQkFTRV9QQVNTV09SRCIsImhvc3QiLCJEQVRBQkFTRV9IT1NUIiwicG9ydCIsIkRBVEFCQVNFX1BPUlQiLCJkaWFsZWN0IiwiZGVmaW5lIiwiZnJlZXplVGFibGVOYW1lIiwicG9vbCIsIm1heCIsIm1pbiIsImFjcXVpcmUiLCJpZGxlIiwib3BlcmF0b3JzQWxpYXNlcyIsIm1vZGVscyIsImZvckVhY2giLCJtb2RlbCIsInNlcU1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJhc3NvY2lhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRGF0YVR5cGVzIiwidHVybm9faWQiLCJhdXRvSW5jcmVtZW50IiwidHlwZSIsIklOVEVHRVIiLCJhbGxvd051bGwiLCJwcmltYXJ5S2V5IiwiU1RSSU5HIiwicmVmZXJlbmNlcyIsIkVOVU0iLCJkdXJhY2lvbiIsInRhYmxlTmFtZSIsInRpbWVzdGFtcHMiLCJpbmRleGVzIiwidW5pcXVlIiwidXNpbmciLCJmaWVsZHMiLCJURVhUIiwiREFURU9OTFkiLCJjZWx1bGFyIiwiQk9PTEVBTiIsImRlZmF1bHRWYWx1ZSIsInByb2Zlc2lvbmFsX2lkIiwidXN1YXJpbyIsInBhc3N3b3JkIiwiZXNwZWNpYWxpZGFkIiwiQ0hBUiIsImVtYWlsIiwiYXZhdGFyIiwiZXhwcmVzcyIsImJvZHlQYXJzZXIiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNlcnZlciIsIm1vZHVsZXMiLCJzZXJ2ZXJSdW4iLCJzdGFydCIsInRoZW4iLCJyZXMiLCJhcHBseU1pZGRsZXdhcmUiLCJnZXQiLCJyZXEiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=