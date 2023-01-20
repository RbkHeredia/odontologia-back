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
var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    horarios(profesional:String): [Horario]\n    horarioPorDia(fecha:String, profesional:String):[Horario]\n  }\n  type Horario{\n    turno_id:ID\n    profesional: String\n    paciente:String\n    duracion:Duration!\n    hora: AllowedHour!\n    fecha:String\n  }\n  enum Duration{\n    HALF\n    ONE\n    ONEH\n    TWO\n  }\n  enum AllowedHour{\n    NINE\n    NINEH\n    TEN\n    TENH\n    ELEVEN\n    ELEVENH\n    TWELVE\n    TWELVEH\n    FOURTEEN\n    FOURTEENH\n    FIFTEEN\n    FIFTEENH\n    SIXTEEN\n    SIXTEENH\n    SEVENTEEN\n    SEVENTEENH\n  }\n  \n  input addDate{\n    profesional:String\n    paciente: String\n    duracion:Duration!\n    hora:AllowedHour!\n    fecha:String\n  }\n  \n  extend type Mutation{\n    agregarCita(input:addDate):Horario\n    eliminarHorario(turno_id:Int):Horario\n  }\n"])));
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
      var _horarios = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_, _ref) {
        var profesional, prof, turnos;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              profesional = _ref.profesional;
              _context.prev = 1;
              prof = profesional;
              turnos = [];
              if (!(prof === 'null')) {
                _context.next = 10;
                break;
              }
              _context.next = 7;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findAll();
            case 7:
              turnos = _context.sent;
              _context.next = 13;
              break;
            case 10:
              _context.next = 12;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findAll({
                where: {
                  profesional: profesional
                }
              });
            case 12:
              turnos = _context.sent;
            case 13:
              ;
              return _context.abrupt("return", turnos);
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](1);
              throw new Error('no hay turnos para mostrar');
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 17]]);
      }));
      function horarios(_x, _x2) {
        return _horarios.apply(this, arguments);
      }
      return horarios;
    }(),
    horarioPorDia: function () {
      var _horarioPorDia = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_, _ref2) {
        var fecha, profesional, turnos;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              fecha = _ref2.fecha, profesional = _ref2.profesional;
              _context2.prev = 1;
              turnos = [];
              if (!(profesional === 'all')) {
                _context2.next = 9;
                break;
              }
              _context2.next = 6;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findAll({
                where: {
                  fecha: fecha
                }
              });
            case 6:
              turnos = _context2.sent;
              _context2.next = 12;
              break;
            case 9:
              _context2.next = 11;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findAll({
                where: _defineProperty({}, Op.and, [{
                  profesional: profesional
                }, {
                  fecha: fecha
                }])
              });
            case 11:
              turnos = _context2.sent;
            case 12:
              ;
              return _context2.abrupt("return", turnos);
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](1);
              throw new Error('Error');
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 16]]);
      }));
      function horarioPorDia(_x3, _x4) {
        return _horarioPorDia.apply(this, arguments);
      }
      return horarioPorDia;
    }()
  },
  Mutation: {
    agregarCita: function () {
      var _agregarCita = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, _ref3) {
        var input, data, cita;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = _ref3.input;
              _context3.prev = 1;
              _context3.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.findOne({
                where: _defineProperty({}, Op.and, [{
                  fecha: input.fecha
                }, {
                  hora: input.hora
                }])
              });
            case 4:
              data = _context3.sent;
              if (!data) {
                _context3.next = 9;
                break;
              }
              throw new Error('ya existe ese horario');
            case 9:
              _context3.next = 11;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.create(input);
            case 11:
              cita = _context3.sent;
              return _context3.abrupt("return", cita);
            case 13:
              _context3.next = 18;
              break;
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](1);
              throw new Error('error al crear la cita');
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 15]]);
      }));
      function agregarCita(_x5, _x6) {
        return _agregarCita.apply(this, arguments);
      }
      return agregarCita;
    }(),
    eliminarHorario: function () {
      var _eliminarHorario = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_, _ref4) {
        var turno_id, horario;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              turno_id = _ref4.turno_id;
              _context4.prev = 1;
              _context4.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].horarios.destroy({
                where: {
                  turno_id: turno_id
                }
              });
            case 4:
              horario = _context4.sent;
              if (!horario) {
                _context4.next = 9;
                break;
              }
              return _context4.abrupt("return", 'Ok');
            case 9:
              return _context4.abrupt("return", 'no existe horario');
            case 10:
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);
              throw new Error('no existe el horario');
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 12]]);
      }));
      function eliminarHorario(_x7, _x8) {
        return _eliminarHorario.apply(this, arguments);
      }
      return eliminarHorario;
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
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
var saltRounds = 10;
(__webpack_require__(/*! dotenv */ "dotenv").config)();
var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    profesionales:[Profesional]\n    profesional(profesional_id:ID!):Profesional\n  }\n  type Profesional{\n    profesional_id:ID\n    usuario:String\n    password:String\n    nombre:String\n    especialidad:String\n    celular:Int\n    email:String\n    avatar:String\n  }\n  type AuthPayload {\n    token: String!\n    user: Profesional!\n  }\n  input addProfesional{\n    usuario:String\n    password:String\n    nombre:String\n    especialidad:String\n    celular:Int\n    email:String\n    avatar:String\n  }\n\n  type Mutation{\n    register(input:addProfesional):AuthPayload!\n    login (email: String!, password: String!): AuthPayload!\n  }\n"])));
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
  },
  Mutation: {
    register: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, _ref) {
        var input, user;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = _ref.input;
              _context3.prev = 1;
              _context3.t0 = _database__WEBPACK_IMPORTED_MODULE_1__["default"].profesional;
              _context3.t1 = input.nombre;
              _context3.t2 = input.especialidad;
              _context3.t3 = input.celular;
              _context3.t4 = input.avatar;
              _context3.t5 = input.usuario;
              _context3.t6 = input.email;
              _context3.next = 11;
              return bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(input.password, saltRounds);
            case 11:
              _context3.t7 = _context3.sent;
              _context3.t8 = {
                nombre: _context3.t1,
                especialidad: _context3.t2,
                celular: _context3.t3,
                avatar: _context3.t4,
                usuario: _context3.t5,
                email: _context3.t6,
                password: _context3.t7
              };
              _context3.next = 15;
              return _context3.t0.create.call(_context3.t0, _context3.t8);
            case 15:
              user = _context3.sent;
              return _context3.abrupt("return", {
                user: user,
                message: "Authentication succesfull"
              });
            case 19:
              _context3.prev = 19;
              _context3.t9 = _context3["catch"](1);
              throw new Error(_context3.t9.message);
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 19]]);
      }));
      function register(_x5, _x6) {
        return _register.apply(this, arguments);
      }
      return register;
    }(),
    login: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_, _ref2) {
        var email, password, user, isValid, token;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              email = _ref2.email, password = _ref2.password;
              _context4.prev = 1;
              _context4.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_1__["default"].profesional.findOne({
                where: {
                  email: email
                }
              });
            case 4:
              user = _context4.sent;
              if (user) {
                _context4.next = 7;
                break;
              }
              throw new Error('No user with that email');
            case 7:
              _context4.next = 9;
              return bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);
            case 9:
              isValid = _context4.sent;
              if (isValid) {
                _context4.next = 12;
                break;
              }
              throw new Error('Incorrect password');
            case 12:
              // return jwt
              token = jsonwebtoken.sign({
                id: user.profesional_id,
                email: user.email
              }, process.env.JWT_SECRET, {
                expiresIn: '1d'
              });
              return _context4.abrupt("return", {
                token: token,
                user: user
              });
            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](1);
              throw new Error(_context4.t0.message);
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 16]]);
      }));
      function login(_x7, _x8) {
        return _login.apply(this, arguments);
      }
      return login;
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
      type: DataTypes.STRING(20),
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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

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
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
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
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
(__webpack_require__(/*! dotenv */ "dotenv").config)();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
var getUser = function getUser(token) {
  try {
    if (token) {
      return jwt.verify(token, JWT_SECRET);
    }
    return null;
  } catch (error) {
    return null;
  }
};
var server = new ApolloServer({
  context: function context(_ref) {
    var req = _ref.req;
    var token = req.get('Authorization') || '';
    return {
      user: getUser(token.replace('Bearer', ''))
    };
  },
  introspection: true,
  playground: true,
  modules: [__webpack_require__(/*! ./GraphQL/horarios.js */ "./app/GraphQL/horarios.js"), __webpack_require__(/*! ./GraphQL/paciente.js */ "./app/GraphQL/paciente.js"), __webpack_require__(/*! ./GraphQL/notas.js */ "./app/GraphQL/notas.js"), __webpack_require__(/*! ./GraphQL/profesional.js */ "./app/GraphQL/profesional.js")]
});
var serverRun = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    return _ref2.apply(this, arguments);
  };
}();
serverRun();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQTtFQUFBLENBQ0o7RUFBQSxnQkFWS1IsU0FBUztJQUFBO0VBQUE7QUFBQSxHQVVkO0FBRURBLFNBQVMsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9HcmFwaFFML2hvcmFyaW9zLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvR3JhcGhRTC9ub3Rhcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL0dyYXBoUUwvcGFjaWVudGUuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9HcmFwaFFML3Byb2Zlc2lvbmFsLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9ob3Jhcmlvcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL25vdGFzLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9tb2RlbHMvcGFjaWVudGUuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9wcm9mZXNpb25hbC5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuY29uc3QgeyBPcCB9ID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgZXh0ZW5kIHR5cGUgUXVlcnl7XHJcbiAgICBob3Jhcmlvcyhwcm9mZXNpb25hbDpTdHJpbmcpOiBbSG9yYXJpb11cclxuICAgIGhvcmFyaW9Qb3JEaWEoZmVjaGE6U3RyaW5nLCBwcm9mZXNpb25hbDpTdHJpbmcpOltIb3JhcmlvXVxyXG4gIH1cclxuICB0eXBlIEhvcmFyaW97XHJcbiAgICB0dXJub19pZDpJRFxyXG4gICAgcHJvZmVzaW9uYWw6IFN0cmluZ1xyXG4gICAgcGFjaWVudGU6U3RyaW5nXHJcbiAgICBkdXJhY2lvbjpEdXJhdGlvbiFcclxuICAgIGhvcmE6IEFsbG93ZWRIb3VyIVxyXG4gICAgZmVjaGE6U3RyaW5nXHJcbiAgfVxyXG4gIGVudW0gRHVyYXRpb257XHJcbiAgICBIQUxGXHJcbiAgICBPTkVcclxuICAgIE9ORUhcclxuICAgIFRXT1xyXG4gIH1cclxuICBlbnVtIEFsbG93ZWRIb3Vye1xyXG4gICAgTklORVxyXG4gICAgTklORUhcclxuICAgIFRFTlxyXG4gICAgVEVOSFxyXG4gICAgRUxFVkVOXHJcbiAgICBFTEVWRU5IXHJcbiAgICBUV0VMVkVcclxuICAgIFRXRUxWRUhcclxuICAgIEZPVVJURUVOXHJcbiAgICBGT1VSVEVFTkhcclxuICAgIEZJRlRFRU5cclxuICAgIEZJRlRFRU5IXHJcbiAgICBTSVhURUVOXHJcbiAgICBTSVhURUVOSFxyXG4gICAgU0VWRU5URUVOXHJcbiAgICBTRVZFTlRFRU5IXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IGFkZERhdGV7XHJcbiAgICBwcm9mZXNpb25hbDpTdHJpbmdcclxuICAgIHBhY2llbnRlOiBTdHJpbmdcclxuICAgIGR1cmFjaW9uOkR1cmF0aW9uIVxyXG4gICAgaG9yYTpBbGxvd2VkSG91ciFcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBcclxuICBleHRlbmQgdHlwZSBNdXRhdGlvbntcclxuICAgIGFncmVnYXJDaXRhKGlucHV0OmFkZERhdGUpOkhvcmFyaW9cclxuICAgIGVsaW1pbmFySG9yYXJpbyh0dXJub19pZDpJbnQpOkhvcmFyaW9cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBEdXJhdGlvbjp7XHJcbiAgICBIQUxGSE9VUjogJzA6MzAnLFxyXG4gICAgT05FSE9VUjogJzE6MDAnLFxyXG4gICAgT05FSEFMRjogJzE6MzAnLFxyXG4gICAgVFdPSE9VUlM6ICcyOjAwJ1xyXG4gIH0sXHJcbiAgQWxsb3dlZEhvdXI6e1xyXG4gICAgTklORTogJzk6MDAnLFxyXG4gICAgTklORUg6ICc5OjMwJyxcclxuICAgIFRFTjogXCIxMDowMFwiLFxyXG4gICAgVEVOSDogJzEwOjMwJyxcclxuICAgIEVMRVZFTjogJzExOjAwJyxcclxuICAgIEVMRVZFTkg6ICcxMTozMCcsXHJcbiAgICBUV0VMVkU6ICcxMjowMCcsXHJcbiAgICBUV0VMVkVIOiAnMTI6MzAnLFxyXG4gICAgRk9VUlRFRU46ICcxNDowMCcsXHJcbiAgICBGT1VSVEVFTkg6ICcxNDozMCcsXHJcbiAgICBGSUZURUVOOiAnMTU6MDAnLFxyXG4gICAgRklGVEVFTkg6ICcxNTozMCcsXHJcbiAgICBTSVhURUVOOiAnMTY6MDAnLFxyXG4gICAgU0lYVEVFTkg6ICcxNjozMCcsXHJcbiAgICBTRVZFTlRFRU46ICcxNzowMCcsXHJcbiAgICBTRVZFTlRFRU5IOiAnMTc6MzAnLFxyXG4gIH0sXHJcbiAgUXVlcnk6IHtcclxuICAgIGhvcmFyaW9zOiBhc3luYyAoXyx7cHJvZmVzaW9uYWx9KSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHByb2YgPSBwcm9mZXNpb25hbDtcclxuICAgICAgICBsZXQgdHVybm9zID0gW107XHJcbiAgICAgICAgaWYgKHByb2YgPT09ICdudWxsJyl7XHJcbiAgICAgICAgICB0dXJub3MgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kQWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHR1cm5vcyA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRBbGwoe3doZXJlOntwcm9mZXNpb25hbDpwcm9mZXNpb25hbH19KVxyXG4gICAgICAgIH07IHJldHVybiB0dXJub3NcclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBoYXkgdHVybm9zIHBhcmEgbW9zdHJhcicpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGhvcmFyaW9Qb3JEaWE6IGFzeW5jIChfLCB7ZmVjaGEsIHByb2Zlc2lvbmFsfSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBsZXQgdHVybm9zID0gW107XHJcbiAgICAgICAgaWYgKHByb2Zlc2lvbmFsID09PSAnYWxsJyl7XHJcbiAgICAgICAgICB0dXJub3MgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kQWxsKHt3aGVyZToge2ZlY2hhOmZlY2hhfX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0dXJub3MgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kQWxsKHt3aGVyZTp7W09wLmFuZF06W1xyXG4gICAgICAgICAgICB7cHJvZmVzaW9uYWw6cHJvZmVzaW9uYWx9LFxyXG4gICAgICAgICAgICB7ZmVjaGE6IGZlY2hhfVxyXG4gICAgICAgICAgXX19KVxyXG4gICAgICAgIH07IHJldHVybiB0dXJub3NcclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIE11dGF0aW9uOntcclxuICAgIGFncmVnYXJDaXRhOiBhc3luYyAoXywge2lucHV0fSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZE9uZSh7d2hlcmU6e1tPcC5hbmRdOiBbXHJcbiAgICAgICAgICB7IGZlY2hhOiBpbnB1dC5mZWNoYSB9LFxyXG4gICAgICAgICAgeyBob3JhOiBpbnB1dC5ob3JhIH1cclxuICAgICAgICBdfX0pXHJcbiAgICAgICAgaWYgKGRhdGEpe1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5YSBleGlzdGUgZXNlIGhvcmFyaW8nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBjaXRhID0gYXdhaXQgZGIuaG9yYXJpb3MuY3JlYXRlKGlucHV0KVxyXG4gICAgICAgICAgcmV0dXJuIGNpdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgYWwgY3JlYXIgbGEgY2l0YScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbGltaW5hckhvcmFyaW86IGFzeW5jIChfLHt0dXJub19pZH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgbGV0IGhvcmFyaW8gPSBhd2FpdCBkYi5ob3Jhcmlvcy5kZXN0cm95KHt3aGVyZToge3R1cm5vX2lkOnR1cm5vX2lkfX0pXHJcbiAgICAgICAgaWYgKGhvcmFyaW8pe1xyXG4gICAgICAgICAgcmV0dXJuICdPaydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdubyBleGlzdGUgaG9yYXJpbydcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZXhpc3RlIGVsIGhvcmFyaW8nKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWwgYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgbm90YXM6IFtOb3RhXVxyXG4gICAgbm90YShub3RhX2lkOklEISk6IE5vdGFcclxuICB9XHJcbiAgdHlwZSBOb3Rhe1xyXG4gICAgbm90YV9pZDogSURcclxuICAgIG5vdGE6U3RyaW5nXHJcbiAgICBwcm9mZXNpb25hbDpTdHJpbmdcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBpbnB1dCBhZGROb3Rle1xyXG4gICAgbm90YTpTdHJpbmdcclxuICAgIHByb2Zlc2lvbmFsOlN0cmluZ1xyXG4gICAgZmVjaGE6U3RyaW5nXHJcbiAgfVxyXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9ue1xyXG4gICAgYWdyZWdhck5vdGEoaW5wdXQ6YWRkTm90ZSk6Tm90YVxyXG4gICAgZWxpbWluYXJOb3RhKG5vdGFfaWQ6SW50KTpOb3RhXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID17XHJcbiAgUXVlcnk6IHtcclxuICAgIG5vdGFzOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBub3RlcyA9IGF3YWl0IGRiLm5vdGFzLmZpbmRBbGwoKTtcclxuICAgICAgICBpZiAoIW5vdGVzKXtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZXhpc3RlbiBub3RhcyBwYXJhIG1vc3RyYXInKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm90ZXM7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5vdGE6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgIGRiLm5vdGFzLmZpbmRCeVBrKGFyZ3MuaWQpLFxyXG4gIH0sXHJcblxyXG4gIE11dGF0aW9uOiB7XHJcbiAgICBhZ3JlZ2FyTm90YTogYXN5bmMgKF8se2lucHV0fSk9PiB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjcmVhdGVOb3RlID0gYXdhaXQgZGIubm90YXMuY3JlYXRlKGlucHV0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjcmVhdGVOb3RlXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIGFsIGNyZWFyIGxhIG5vdGEnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWxpbWluYXJOb3RhOiBhc3luYyAoXyx7bm90YV9pZH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgbGV0IG5vdGEgPSBhd2FpdCBkYi5ub3Rhcy5kZXN0cm95KHt3aGVyZToge25vdGFfaWQ6bm90YV9pZH19KVxyXG4gICAgICAgIGlmIChub3RhKXtcclxuICAgICAgICAgIHJldHVybiAnT2snXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnbm8gZXhpc3RlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGV4aXN0ZSBsYSBub3RhJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgcGFjaWVudGVzOiBbUGFjaWVudGVdXHJcbiAgICBwYWNpZW50ZShwYWNpZW50ZV9pZDpJRCEpOiBQYWNpZW50ZSAgIFxyXG4gIH1cclxuICB0eXBlIFBhY2llbnRle1xyXG4gICAgcGFjaWVudGVfaWQ6SURcclxuICAgIG5vbWJyZTogU3RyaW5nXHJcbiAgICBjZWx1bGFyOlN0cmluZ1xyXG4gICAgYWN0aXZvOkJvb2xlYW5cclxuICB9XHJcbiAgaW5wdXQgYWRkUGFjaWVudHtcclxuICAgIG5vbWJyZTpTdHJpbmdcclxuICAgIGNlbHVsYXI6U3RyaW5nXHJcbiAgICBhY3Rpdm86Qm9vbGVhblxyXG4gIH1cclxuICBpbnB1dCBzZXRQYWNpZW50e1xyXG4gICAgYWN0aXZvOkJvb2xlYW5cclxuICB9XHJcbiAgZXh0ZW5kIHR5cGUgTXV0YXRpb257XHJcbiAgICBhZ3JlZ2FyUGFjaWVudGUoaW5wdXQ6YWRkUGFjaWVudCk6UGFjaWVudGVcclxuICAgIGRlc2FjdGl2YXJQYWNpZW50ZShwYWNpZW50ZV9pZDpJbnQsIGlucHV0OiBzZXRQYWNpZW50KTpQYWNpZW50ZVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBwYWNpZW50ZXM6IGFzeW5jICgpID0+IGRiLnBhY2llbnRlLmZpbmRBbGwoe3doZXJlOnthY3Rpdm86dHJ1ZX19KSxcclxuICAgIHBhY2llbnRlOiBhc3luYyAoYXJncykgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBwYWNpZW50ID0gYXdhaXQgZGIucGFjaWVudGUuZmluZEFsbCh7d2hlcmU6IHtub21icmU6YXJncy5ub21icmV9fSlcclxuICAgICAgICBpZighcGFjaWVudCl7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV4aXN0ZSBlbCBwYWNpZW50ZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBwYWNpZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIE11dGF0aW9uOntcclxuICAgIGFncmVnYXJQYWNpZW50ZTogYXN5bmMoXywge2lucHV0fSk9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVBhY2llbnQgPSBkYi5wYWNpZW50ZS5jcmVhdGUoaW5wdXQpXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBhY2llbnRcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBzZSBwdWRvIGNyZWFyIGVsIG51ZXZvIHBhY2llbnRlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlc2FjdGl2YXJQYWNpZW50ZTogYXN5bmMoXyx7aW5wdXQsIHBhY2llbnRlX2lkfSk9PntcclxuICAgICAgZGIucGFjaWVudGUudXBkYXRlKGlucHV0ICx7d2hlcmU6e3BhY2llbnRlX2lkOnBhY2llbnRlX2lkfX0pXHJcbiAgICB9LFxyXG4gIH1cclxufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYXRhYmFzZSc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuY29uc3QganNvbndlYnRva2VuID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xyXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbCBgXHJcbiAgZXh0ZW5kIHR5cGUgUXVlcnl7XHJcbiAgICBwcm9mZXNpb25hbGVzOltQcm9mZXNpb25hbF1cclxuICAgIHByb2Zlc2lvbmFsKHByb2Zlc2lvbmFsX2lkOklEISk6UHJvZmVzaW9uYWxcclxuICB9XHJcbiAgdHlwZSBQcm9mZXNpb25hbHtcclxuICAgIHByb2Zlc2lvbmFsX2lkOklEXHJcbiAgICB1c3VhcmlvOlN0cmluZ1xyXG4gICAgcGFzc3dvcmQ6U3RyaW5nXHJcbiAgICBub21icmU6U3RyaW5nXHJcbiAgICBlc3BlY2lhbGlkYWQ6U3RyaW5nXHJcbiAgICBjZWx1bGFyOkludFxyXG4gICAgZW1haWw6U3RyaW5nXHJcbiAgICBhdmF0YXI6U3RyaW5nXHJcbiAgfVxyXG4gIHR5cGUgQXV0aFBheWxvYWQge1xyXG4gICAgdG9rZW46IFN0cmluZyFcclxuICAgIHVzZXI6IFByb2Zlc2lvbmFsIVxyXG4gIH1cclxuICBpbnB1dCBhZGRQcm9mZXNpb25hbHtcclxuICAgIHVzdWFyaW86U3RyaW5nXHJcbiAgICBwYXNzd29yZDpTdHJpbmdcclxuICAgIG5vbWJyZTpTdHJpbmdcclxuICAgIGVzcGVjaWFsaWRhZDpTdHJpbmdcclxuICAgIGNlbHVsYXI6SW50XHJcbiAgICBlbWFpbDpTdHJpbmdcclxuICAgIGF2YXRhcjpTdHJpbmdcclxuICB9XHJcblxyXG4gIHR5cGUgTXV0YXRpb257XHJcbiAgICByZWdpc3RlcihpbnB1dDphZGRQcm9mZXNpb25hbCk6QXV0aFBheWxvYWQhXHJcbiAgICBsb2dpbiAoZW1haWw6IFN0cmluZyEsIHBhc3N3b3JkOiBTdHJpbmchKTogQXV0aFBheWxvYWQhXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OntcclxuICAgIHByb2Zlc2lvbmFsZXM6IGFzeW5jICgpID0+IGRiLnByb2Zlc2lvbmFsLmZpbmRBbGwoKSxcclxuICAgIHByb2Zlc2lvbmFsOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxyXG4gICAgICBkYi5wcm9mZXNpb25hbC5maW5kQnlQayhhcmdzLmlkKSxcclxuICB9LFxyXG4gIE11dGF0aW9uOntcclxuICAgIHJlZ2lzdGVyOiBhc3luYyAoXywgeyBpbnB1dCB9KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnByb2Zlc2lvbmFsLmNyZWF0ZSh7XHJcbiAgICAgICAgICBub21icmU6IGlucHV0Lm5vbWJyZSxcclxuICAgICAgICAgIGVzcGVjaWFsaWRhZDogaW5wdXQuZXNwZWNpYWxpZGFkLFxyXG4gICAgICAgICAgY2VsdWxhcjogaW5wdXQuY2VsdWxhcixcclxuICAgICAgICAgIGF2YXRhcjogaW5wdXQuYXZhdGFyLFxyXG4gICAgICAgICAgdXN1YXJpbzogaW5wdXQudXN1YXJpbyxcclxuICAgICAgICAgIGVtYWlsOiBpbnB1dC5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBhd2FpdCBiY3J5cHQuaGFzaChpbnB1dC5wYXNzd29yZCwgc2FsdFJvdW5kcylcclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVzZXIsIG1lc3NhZ2U6IFwiQXV0aGVudGljYXRpb24gc3VjY2VzZnVsbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxvZ2luOiBhc3luYyAoXywgeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5wcm9mZXNpb25hbC5maW5kT25lKHsgd2hlcmU6IHsgZW1haWwgfX0pXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgd2l0aCB0aGF0IGVtYWlsJylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgcGFzc3dvcmQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gand0XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqc29ud2VidG9rZW4uc2lnbihcclxuICAgICAgICAgIHsgaWQ6IHVzZXIucHJvZmVzaW9uYWxfaWQsIGVtYWlsOiB1c2VyLmVtYWlsfSxcclxuICAgICAgICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICAgICAgICB7IGV4cGlyZXNJbjogJzFkJ31cclxuICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgdG9rZW4sIHVzZXJcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xyXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxyXG5cclxudmFyIGRiID0ge31cclxuXHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICBwcm9jZXNzLmVudi5EQVRBQkFTRV9OQU1FLFxyXG4gICAgcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVNFUixcclxuICAgIHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JELFxyXG4gICAge1xyXG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRBVEFCQVNFX0hPU1QsXHJcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfUE9SVCxcclxuICAgICAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgICAgIGRlZmluZToge1xyXG4gICAgICAgICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb29sOiB7XHJcbiAgICAgICAgICAgIG1heDogNSxcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBhY3F1aXJlOiAzMDAwMCxcclxuICAgICAgICAgICAgaWRsZTogMTAwMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyA8aHR0cDovL2RvY3Muc2VxdWVsaXplanMuY29tL21hbnVhbC90dXRvcmlhbC9xdWVyeWluZy5odG1sI29wZXJhdG9ycz5cclxuICAgICAgICBvcGVyYXRvcnNBbGlhc2VzOiAwLFxyXG4gICAgfSxcclxuKVxyXG5cclxubGV0IG1vZGVscyA9IFtcclxuICByZXF1aXJlKCcuLi9tb2RlbHMvaG9yYXJpb3MuanMnKSxcclxuICByZXF1aXJlKCcuLi9tb2RlbHMvbm90YXMuanMnKSxcclxuICByZXF1aXJlKCcuLi9tb2RlbHMvcGFjaWVudGUuanMnKSxcclxuICByZXF1aXJlKCcuLi9tb2RlbHMvcHJvZmVzaW9uYWwuanMnKSxcclxuXHJcbl1cclxuXHJcbi8vIEluaXRpYWxpemUgbW9kZWxzXHJcbm1vZGVscy5mb3JFYWNoKG1vZGVsID0+IHtcclxuICAgIGNvbnN0IHNlcU1vZGVsID0gbW9kZWwoc2VxdWVsaXplLCBTZXF1ZWxpemUpXHJcbiAgICBkYltzZXFNb2RlbC5uYW1lXSA9IHNlcU1vZGVsXHJcbn0pXHJcblxyXG4vLyBBcHBseSBhc3NvY2lhdGlvbnNcclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGlmICgnYXNzb2NpYXRlJyBpbiBkYltrZXldKSB7XHJcbiAgICAgICAgZGJba2V5XS5hc3NvY2lhdGUoZGIpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemVcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgnaG9yYXJpb3MnLCB7XG4gICAgdHVybm9faWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBwcm9mZXNpb25hbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3Byb2Zlc2lvbmFsJyxcbiAgICAgICAga2V5OiAndXN1YXJpbydcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhY2llbnRlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDUwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAncGFjaWVudGUnLFxuICAgICAgICBrZXk6ICdub21icmUnXG4gICAgICB9XG4gICAgfSxcbiAgICBob3JhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuRU5VTSgnTklORScsJ05JTkVIJywnVEVOJywnVEVOSCcsJ0VMRVZFTicsJ0VMRVZFTkgnLCdUV0VMVkUnLCdUV0VMVkVIJywnRk9VUlRFRU4nLCdGT1VSVEVFTkgnLCdGSUZURUVOJywnRklGVEVFTkgnLCdTSVhURUVOJywnU0lYVEVFTkgnLCdTRVZFTlRFRU4nLCdTRVZFTlRFRU5IJyksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIGR1cmFjaW9uOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuRU5VTSgnSEFMRicsICdPTkUnLCAnT05FSCcsICdUV08nKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGZlY2hhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKCksXG4gICAgICBhbGxvd051bGw6ZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAnaG9yYXJpb3MnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInR1cm5vX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJma19ob3JhcmlvX3Byb2Zlc2lvbmFsXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwcm9mZXNpb25hbFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZmtfaG9yYXJpb19wYWNpZW50ZVwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicGFjaWVudGVcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdub3RhcycsIHtcbiAgICBub3RhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuVEVYVCxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIG5vdGFfaWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBwcm9mZXNpb25hbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3Byb2Zlc2lvbmFsJyxcbiAgICAgICAga2V5OiAndXN1YXJpbydcbiAgICAgIH1cbiAgICB9LFxuICAgIGZlY2hhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDIwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAnbm90YXMnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIm5vdGFfaWRcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcInByb2Zlc2lvbmFsXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwcm9mZXNpb25hbFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbn07XG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3BhY2llbnRlJywge1xuICAgIHBhY2llbnRlX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgbm9tYnJlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGNlbHVsYXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgYWN0aXZvOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuQk9PTEVBTixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6IDFcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAncGFjaWVudGUnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInBhY2llbnRlX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJub21icmVcIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIm5vbWJyZVwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbn07XG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3Byb2Zlc2lvbmFsJywge1xuICAgIHByb2Zlc2lvbmFsX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgdXN1YXJpbzoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBub21icmU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgZXNwZWNpYWxpZGFkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuQ0hBUig1MCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBjZWx1bGFyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDE1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMDApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICB0YWJsZU5hbWU6ICdwcm9mZXNpb25hbCcsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgaW5kZXhlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBSSU1BUllcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxfaWRcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcInVzdWFyaW9cIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInVzdWFyaW9cIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxuY29uc3QgeyBBcG9sbG9TZXJ2ZXIgfSA9IHJlcXVpcmUoJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcycpXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmNvbnN0IGp3dCA9ICByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxuYXBwLnVzZShjb3JzKCkpXG5cblxuY29uc3QgZ2V0VXNlciA9IHRva2VuID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cbmNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIGNvbnRleHQ6ICh7IHJlcSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmdldCgnQXV0aG9yaXphdGlvbicpIHx8ICcnXG4gICAgICAgIHJldHVybiB7IHVzZXI6IGdldFVzZXIodG9rZW4ucmVwbGFjZSgnQmVhcmVyJywgJycpKX1cbiAgICAgIH0sXG4gICAgICBpbnRyb3NwZWN0aW9uOiB0cnVlLFxuICAgICAgcGxheWdyb3VuZDogdHJ1ZSxcbiAgICBtb2R1bGVzOiBbXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9ob3Jhcmlvcy5qcycpLFxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvcGFjaWVudGUuanMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9HcmFwaFFML25vdGFzLmpzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9wcm9mZXNpb25hbC5qcycpXG4gICAgXSxcbn0pXG5cbmNvbnN0IHNlcnZlclJ1biA9IGFzeW5jICgpID0+e1xuICAgIGF3YWl0IHNlcnZlci5zdGFydCgpLnRoZW4ocmVzPT57fSlcblxuICAgIHNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSlcbiAgICBcbiAgICBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiByZXMuc2VuZCgnSGVsbG8gV29ybGQhJykpXG4gICAgXG4gICAgYXBwLmxpc3Rlbih7IHBvcnQ6IDUwMDAgfSwgKCkgPT5cbiAgICAgICAgY29uc29sZS5sb2coYPCfmoAgU2VydmVyIHJlYWR5IGF0IGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMGApLFxuICAgIClcbn1cblxuc2VydmVyUnVuKCkiXSwibmFtZXMiOlsiZ3FsIiwiZGIiLCJyZXF1aXJlIiwiT3AiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsIkR1cmF0aW9uIiwiSEFMRkhPVVIiLCJPTkVIT1VSIiwiT05FSEFMRiIsIlRXT0hPVVJTIiwiQWxsb3dlZEhvdXIiLCJOSU5FIiwiTklORUgiLCJURU4iLCJURU5IIiwiRUxFVkVOIiwiRUxFVkVOSCIsIlRXRUxWRSIsIlRXRUxWRUgiLCJGT1VSVEVFTiIsIkZPVVJURUVOSCIsIkZJRlRFRU4iLCJGSUZURUVOSCIsIlNJWFRFRU4iLCJTSVhURUVOSCIsIlNFVkVOVEVFTiIsIlNFVkVOVEVFTkgiLCJRdWVyeSIsImhvcmFyaW9zIiwiXyIsInByb2Zlc2lvbmFsIiwicHJvZiIsInR1cm5vcyIsImZpbmRBbGwiLCJ3aGVyZSIsIkVycm9yIiwiaG9yYXJpb1BvckRpYSIsImZlY2hhIiwiYW5kIiwiTXV0YXRpb24iLCJhZ3JlZ2FyQ2l0YSIsImlucHV0IiwiZmluZE9uZSIsImhvcmEiLCJkYXRhIiwiY3JlYXRlIiwiY2l0YSIsImVsaW1pbmFySG9yYXJpbyIsInR1cm5vX2lkIiwiZGVzdHJveSIsImhvcmFyaW8iLCJub3RhcyIsIm5vdGVzIiwibWVzc2FnZSIsIm5vdGEiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJmaW5kQnlQayIsImlkIiwiYWdyZWdhck5vdGEiLCJjcmVhdGVOb3RlIiwiZWxpbWluYXJOb3RhIiwibm90YV9pZCIsInBhY2llbnRlcyIsInBhY2llbnRlIiwiYWN0aXZvIiwibm9tYnJlIiwicGFjaWVudCIsImFncmVnYXJQYWNpZW50ZSIsImNyZWF0ZVBhY2llbnQiLCJkZXNhY3RpdmFyUGFjaWVudGUiLCJwYWNpZW50ZV9pZCIsInVwZGF0ZSIsImJjcnlwdCIsImpzb253ZWJ0b2tlbiIsInNhbHRSb3VuZHMiLCJjb25maWciLCJwcm9mZXNpb25hbGVzIiwicmVnaXN0ZXIiLCJlc3BlY2lhbGlkYWQiLCJjZWx1bGFyIiwiYXZhdGFyIiwidXN1YXJpbyIsImVtYWlsIiwiaGFzaCIsInBhc3N3b3JkIiwidXNlciIsImxvZ2luIiwiY29tcGFyZSIsImlzVmFsaWQiLCJ0b2tlbiIsInNpZ24iLCJwcm9mZXNpb25hbF9pZCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwiU2VxdWVsaXplIiwic2VxdWVsaXplIiwiREFUQUJBU0VfTkFNRSIsIkRBVEFCQVNFX1VTRVIiLCJEQVRBQkFTRV9QQVNTV09SRCIsImhvc3QiLCJEQVRBQkFTRV9IT1NUIiwicG9ydCIsIkRBVEFCQVNFX1BPUlQiLCJkaWFsZWN0IiwiZGVmaW5lIiwiZnJlZXplVGFibGVOYW1lIiwicG9vbCIsIm1heCIsIm1pbiIsImFjcXVpcmUiLCJpZGxlIiwib3BlcmF0b3JzQWxpYXNlcyIsIm1vZGVscyIsImZvckVhY2giLCJtb2RlbCIsInNlcU1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJhc3NvY2lhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRGF0YVR5cGVzIiwiYXV0b0luY3JlbWVudCIsInR5cGUiLCJJTlRFR0VSIiwiYWxsb3dOdWxsIiwicHJpbWFyeUtleSIsIlNUUklORyIsInJlZmVyZW5jZXMiLCJFTlVNIiwiZHVyYWNpb24iLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwiaW5kZXhlcyIsInVuaXF1ZSIsInVzaW5nIiwiZmllbGRzIiwiVEVYVCIsIkJPT0xFQU4iLCJkZWZhdWx0VmFsdWUiLCJDSEFSIiwiZXhwcmVzcyIsImJvZHlQYXJzZXIiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwiand0IiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImdldFVzZXIiLCJ2ZXJpZnkiLCJlcnJvciIsInNlcnZlciIsInJlcSIsImdldCIsInJlcGxhY2UiLCJpbnRyb3NwZWN0aW9uIiwicGxheWdyb3VuZCIsIm1vZHVsZXMiLCJzZXJ2ZXJSdW4iLCJzdGFydCIsInRoZW4iLCJyZXMiLCJhcHBseU1pZGRsZXdhcmUiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=