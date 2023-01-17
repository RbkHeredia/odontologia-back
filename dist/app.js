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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQTtFQUFBLENBQ0o7RUFBQSxnQkFWS1IsU0FBUztJQUFBO0VBQUE7QUFBQSxHQVVkO0FBRURBLFNBQVMsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9HcmFwaFFML2hvcmFyaW9zLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvR3JhcGhRTC9ub3Rhcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL0dyYXBoUUwvcGFjaWVudGUuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9HcmFwaFFML3Byb2Zlc2lvbmFsLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9ob3Jhcmlvcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL25vdGFzLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9tb2RlbHMvcGFjaWVudGUuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9wcm9mZXNpb25hbC5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXHJcbmNvbnN0IHsgT3AgfSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgaG9yYXJpb3MocHJvZmVzaW9uYWw6U3RyaW5nKTogW0hvcmFyaW9dXHJcbiAgICBob3JhcmlvUG9yRGlhKGZlY2hhOlN0cmluZywgcHJvZmVzaW9uYWw6U3RyaW5nKTpbSG9yYXJpb11cclxuICB9XHJcbiAgdHlwZSBIb3Jhcmlve1xyXG4gICAgdHVybm9faWQ6SURcclxuICAgIHByb2Zlc2lvbmFsOiBTdHJpbmdcclxuICAgIHBhY2llbnRlOlN0cmluZ1xyXG4gICAgZHVyYWNpb246RHVyYXRpb24hXHJcbiAgICBob3JhOiBBbGxvd2VkSG91ciFcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBlbnVtIER1cmF0aW9ue1xyXG4gICAgSEFMRlxyXG4gICAgT05FXHJcbiAgICBPTkVIXHJcbiAgICBUV09cclxuICB9XHJcbiAgZW51bSBBbGxvd2VkSG91cntcclxuICAgIE5JTkVcclxuICAgIE5JTkVIXHJcbiAgICBURU5cclxuICAgIFRFTkhcclxuICAgIEVMRVZFTlxyXG4gICAgRUxFVkVOSFxyXG4gICAgVFdFTFZFXHJcbiAgICBUV0VMVkVIXHJcbiAgICBGT1VSVEVFTlxyXG4gICAgRk9VUlRFRU5IXHJcbiAgICBGSUZURUVOXHJcbiAgICBGSUZURUVOSFxyXG4gICAgU0lYVEVFTlxyXG4gICAgU0lYVEVFTkhcclxuICAgIFNFVkVOVEVFTlxyXG4gICAgU0VWRU5URUVOSFxyXG4gIH1cclxuICBcclxuICBpbnB1dCBhZGREYXRle1xyXG4gICAgcHJvZmVzaW9uYWw6U3RyaW5nXHJcbiAgICBwYWNpZW50ZTogU3RyaW5nXHJcbiAgICBkdXJhY2lvbjpEdXJhdGlvbiFcclxuICAgIGhvcmE6QWxsb3dlZEhvdXIhXHJcbiAgICBmZWNoYTpTdHJpbmdcclxuICB9XHJcbiAgXHJcbiAgZXh0ZW5kIHR5cGUgTXV0YXRpb257XHJcbiAgICBhZ3JlZ2FyQ2l0YShpbnB1dDphZGREYXRlKTpIb3JhcmlvXHJcbiAgICBlbGltaW5hckhvcmFyaW8odHVybm9faWQ6SW50KTpIb3JhcmlvXHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgRHVyYXRpb246e1xyXG4gICAgSEFMRkhPVVI6ICcwOjMwJyxcclxuICAgIE9ORUhPVVI6ICcxOjAwJyxcclxuICAgIE9ORUhBTEY6ICcxOjMwJyxcclxuICAgIFRXT0hPVVJTOiAnMjowMCdcclxuICB9LFxyXG4gIEFsbG93ZWRIb3VyOntcclxuICAgIE5JTkU6ICc5OjAwJyxcclxuICAgIE5JTkVIOiAnOTozMCcsXHJcbiAgICBURU46IFwiMTA6MDBcIixcclxuICAgIFRFTkg6ICcxMDozMCcsXHJcbiAgICBFTEVWRU46ICcxMTowMCcsXHJcbiAgICBFTEVWRU5IOiAnMTE6MzAnLFxyXG4gICAgVFdFTFZFOiAnMTI6MDAnLFxyXG4gICAgVFdFTFZFSDogJzEyOjMwJyxcclxuICAgIEZPVVJURUVOOiAnMTQ6MDAnLFxyXG4gICAgRk9VUlRFRU5IOiAnMTQ6MzAnLFxyXG4gICAgRklGVEVFTjogJzE1OjAwJyxcclxuICAgIEZJRlRFRU5IOiAnMTU6MzAnLFxyXG4gICAgU0lYVEVFTjogJzE2OjAwJyxcclxuICAgIFNJWFRFRU5IOiAnMTY6MzAnLFxyXG4gICAgU0VWRU5URUVOOiAnMTc6MDAnLFxyXG4gICAgU0VWRU5URUVOSDogJzE3OjMwJyxcclxuICB9LFxyXG4gIFF1ZXJ5OiB7XHJcbiAgICBob3JhcmlvczogYXN5bmMgKF8se3Byb2Zlc2lvbmFsfSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBwcm9mID0gcHJvZmVzaW9uYWw7XHJcbiAgICAgICAgbGV0IHR1cm5vcyA9IFtdO1xyXG4gICAgICAgIGlmIChwcm9mID09PSAnbnVsbCcpe1xyXG4gICAgICAgICAgdHVybm9zID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZEFsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0dXJub3MgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kQWxsKHt3aGVyZTp7cHJvZmVzaW9uYWw6cHJvZmVzaW9uYWx9fSlcclxuICAgICAgICB9OyByZXR1cm4gdHVybm9zXHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gaGF5IHR1cm5vcyBwYXJhIG1vc3RyYXInKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBob3JhcmlvUG9yRGlhOiBhc3luYyAoXywge2ZlY2hhLCBwcm9mZXNpb25hbH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgbGV0IHR1cm5vcyA9IFtdO1xyXG4gICAgICAgIGlmIChwcm9mZXNpb25hbCA9PT0gJ2FsbCcpe1xyXG4gICAgICAgICAgdHVybm9zID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZEFsbCh7d2hlcmU6IHtmZWNoYTpmZWNoYX19KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHVybm9zID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZEFsbCh7d2hlcmU6e1tPcC5hbmRdOltcclxuICAgICAgICAgICAge3Byb2Zlc2lvbmFsOnByb2Zlc2lvbmFsfSxcclxuICAgICAgICAgICAge2ZlY2hhOiBmZWNoYX1cclxuICAgICAgICAgIF19fSlcclxuICAgICAgICB9OyByZXR1cm4gdHVybm9zXHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3InKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBNdXRhdGlvbjp7XHJcbiAgICBhZ3JlZ2FyQ2l0YTogYXN5bmMgKF8sIHtpbnB1dH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRPbmUoe3doZXJlOntbT3AuYW5kXTogW1xyXG4gICAgICAgICAgeyBmZWNoYTogaW5wdXQuZmVjaGEgfSxcclxuICAgICAgICAgIHsgaG9yYTogaW5wdXQuaG9yYSB9XHJcbiAgICAgICAgXX19KVxyXG4gICAgICAgIGlmIChkYXRhKXtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneWEgZXhpc3RlIGVzZSBob3JhcmlvJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgY2l0YSA9IGF3YWl0IGRiLmhvcmFyaW9zLmNyZWF0ZShpbnB1dClcclxuICAgICAgICAgIHJldHVybiBjaXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIGFsIGNyZWFyIGxhIGNpdGEnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWxpbWluYXJIb3JhcmlvOiBhc3luYyAoXyx7dHVybm9faWR9KSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGxldCBob3JhcmlvID0gYXdhaXQgZGIuaG9yYXJpb3MuZGVzdHJveSh7d2hlcmU6IHt0dXJub19pZDp0dXJub19pZH19KVxyXG4gICAgICAgIGlmIChob3JhcmlvKXtcclxuICAgICAgICAgIHJldHVybiAnT2snXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnbm8gZXhpc3RlIGhvcmFyaW8nXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGV4aXN0ZSBlbCBob3JhcmlvJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsIGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIG5vdGFzOiBbTm90YV1cclxuICAgIG5vdGEobm90YV9pZDpJRCEpOiBOb3RhXHJcbiAgfVxyXG4gIHR5cGUgTm90YXtcclxuICAgIG5vdGFfaWQ6IElEXHJcbiAgICBub3RhOlN0cmluZ1xyXG4gICAgcHJvZmVzaW9uYWw6U3RyaW5nXHJcbiAgICBmZWNoYTpTdHJpbmdcclxuICB9XHJcbiAgaW5wdXQgYWRkTm90ZXtcclxuICAgIG5vdGE6U3RyaW5nXHJcbiAgICBwcm9mZXNpb25hbDpTdHJpbmdcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBleHRlbmQgdHlwZSBNdXRhdGlvbntcclxuICAgIGFncmVnYXJOb3RhKGlucHV0OmFkZE5vdGUpOk5vdGFcclxuICAgIGVsaW1pbmFyTm90YShub3RhX2lkOkludCk6Tm90YVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9e1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBub3RhczogYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBhd2FpdCBkYi5ub3Rhcy5maW5kQWxsKCk7XHJcbiAgICAgICAgaWYgKCFub3Rlcyl7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGV4aXN0ZW4gbm90YXMgcGFyYSBtb3N0cmFyJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBub3RhOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxyXG4gICAgICBkYi5ub3Rhcy5maW5kQnlQayhhcmdzLmlkKSxcclxuICB9LFxyXG5cclxuICBNdXRhdGlvbjoge1xyXG4gICAgYWdyZWdhck5vdGE6IGFzeW5jIChfLHtpbnB1dH0pPT4ge1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlTm90ZSA9IGF3YWl0IGRiLm5vdGFzLmNyZWF0ZShpbnB1dClcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY3JlYXRlTm90ZVxyXG4gICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciBhbCBjcmVhciBsYSBub3RhJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVsaW1pbmFyTm90YTogYXN5bmMgKF8se25vdGFfaWR9KSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGxldCBub3RhID0gYXdhaXQgZGIubm90YXMuZGVzdHJveSh7d2hlcmU6IHtub3RhX2lkOm5vdGFfaWR9fSlcclxuICAgICAgICBpZiAobm90YSl7XHJcbiAgICAgICAgICByZXR1cm4gJ09rJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ25vIGV4aXN0ZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBleGlzdGUgbGEgbm90YScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIHBhY2llbnRlczogW1BhY2llbnRlXVxyXG4gICAgcGFjaWVudGUocGFjaWVudGVfaWQ6SUQhKTogUGFjaWVudGUgICBcclxuICB9XHJcbiAgdHlwZSBQYWNpZW50ZXtcclxuICAgIHBhY2llbnRlX2lkOklEXHJcbiAgICBub21icmU6IFN0cmluZ1xyXG4gICAgY2VsdWxhcjpTdHJpbmdcclxuICAgIGFjdGl2bzpCb29sZWFuXHJcbiAgfVxyXG4gIGlucHV0IGFkZFBhY2llbnR7XHJcbiAgICBub21icmU6U3RyaW5nXHJcbiAgICBjZWx1bGFyOlN0cmluZ1xyXG4gICAgYWN0aXZvOkJvb2xlYW5cclxuICB9XHJcbiAgaW5wdXQgc2V0UGFjaWVudHtcclxuICAgIGFjdGl2bzpCb29sZWFuXHJcbiAgfVxyXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9ue1xyXG4gICAgYWdyZWdhclBhY2llbnRlKGlucHV0OmFkZFBhY2llbnQpOlBhY2llbnRlXHJcbiAgICBkZXNhY3RpdmFyUGFjaWVudGUocGFjaWVudGVfaWQ6SW50LCBpbnB1dDogc2V0UGFjaWVudCk6UGFjaWVudGVcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeToge1xyXG4gICAgcGFjaWVudGVzOiBhc3luYyAoKSA9PiBkYi5wYWNpZW50ZS5maW5kQWxsKHt3aGVyZTp7YWN0aXZvOnRydWV9fSksXHJcbiAgICBwYWNpZW50ZTogYXN5bmMgKGFyZ3MpID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcGFjaWVudCA9IGF3YWl0IGRiLnBhY2llbnRlLmZpbmRBbGwoe3doZXJlOiB7bm9tYnJlOmFyZ3Mubm9tYnJlfX0pXHJcbiAgICAgICAgaWYoIXBhY2llbnQpe1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBleGlzdGUgZWwgcGFjaWVudGUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcGFjaWVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBNdXRhdGlvbjp7XHJcbiAgICBhZ3JlZ2FyUGFjaWVudGU6IGFzeW5jKF8sIHtpbnB1dH0pPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjcmVhdGVQYWNpZW50ID0gZGIucGFjaWVudGUuY3JlYXRlKGlucHV0KVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVQYWNpZW50XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc2UgcHVkbyBjcmVhciBlbCBudWV2byBwYWNpZW50ZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZXNhY3RpdmFyUGFjaWVudGU6IGFzeW5jKF8se2lucHV0LCBwYWNpZW50ZV9pZH0pPT57XHJcbiAgICAgIGRiLnBhY2llbnRlLnVwZGF0ZShpbnB1dCAse3doZXJlOntwYWNpZW50ZV9pZDpwYWNpZW50ZV9pZH19KVxyXG4gICAgfSxcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmNvbnN0IGpzb253ZWJ0b2tlbiA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWwgYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgcHJvZmVzaW9uYWxlczpbUHJvZmVzaW9uYWxdXHJcbiAgICBwcm9mZXNpb25hbChwcm9mZXNpb25hbF9pZDpJRCEpOlByb2Zlc2lvbmFsXHJcbiAgfVxyXG4gIHR5cGUgUHJvZmVzaW9uYWx7XHJcbiAgICBwcm9mZXNpb25hbF9pZDpJRFxyXG4gICAgdXN1YXJpbzpTdHJpbmdcclxuICAgIHBhc3N3b3JkOlN0cmluZ1xyXG4gICAgbm9tYnJlOlN0cmluZ1xyXG4gICAgZXNwZWNpYWxpZGFkOlN0cmluZ1xyXG4gICAgY2VsdWxhcjpJbnRcclxuICAgIGVtYWlsOlN0cmluZ1xyXG4gICAgYXZhdGFyOlN0cmluZ1xyXG4gIH1cclxuICB0eXBlIEF1dGhQYXlsb2FkIHtcclxuICAgIHRva2VuOiBTdHJpbmchXHJcbiAgICB1c2VyOiBQcm9mZXNpb25hbCFcclxuICB9XHJcbiAgaW5wdXQgYWRkUHJvZmVzaW9uYWx7XHJcbiAgICB1c3VhcmlvOlN0cmluZ1xyXG4gICAgcGFzc3dvcmQ6U3RyaW5nXHJcbiAgICBub21icmU6U3RyaW5nXHJcbiAgICBlc3BlY2lhbGlkYWQ6U3RyaW5nXHJcbiAgICBjZWx1bGFyOkludFxyXG4gICAgZW1haWw6U3RyaW5nXHJcbiAgICBhdmF0YXI6U3RyaW5nXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9ue1xyXG4gICAgcmVnaXN0ZXIoaW5wdXQ6YWRkUHJvZmVzaW9uYWwpOkF1dGhQYXlsb2FkIVxyXG4gICAgbG9naW4gKGVtYWlsOiBTdHJpbmchLCBwYXNzd29yZDogU3RyaW5nISk6IEF1dGhQYXlsb2FkIVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeTp7XHJcbiAgICBwcm9mZXNpb25hbGVzOiBhc3luYyAoKSA9PiBkYi5wcm9mZXNpb25hbC5maW5kQWxsKCksXHJcbiAgICBwcm9mZXNpb25hbDogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cclxuICAgICAgZGIucHJvZmVzaW9uYWwuZmluZEJ5UGsoYXJncy5pZCksXHJcbiAgfSxcclxuICBNdXRhdGlvbjp7XHJcbiAgICByZWdpc3RlcjogYXN5bmMgKF8sIHsgaW5wdXQgfSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5wcm9mZXNpb25hbC5jcmVhdGUoe1xyXG4gICAgICAgICAgbm9tYnJlOiBpbnB1dC5ub21icmUsXHJcbiAgICAgICAgICBlc3BlY2lhbGlkYWQ6IGlucHV0LmVzcGVjaWFsaWRhZCxcclxuICAgICAgICAgIGNlbHVsYXI6IGlucHV0LmNlbHVsYXIsXHJcbiAgICAgICAgICBhdmF0YXI6IGlucHV0LmF2YXRhcixcclxuICAgICAgICAgIHVzdWFyaW86IGlucHV0LnVzdWFyaW8sXHJcbiAgICAgICAgICBlbWFpbDogaW5wdXQuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogYXdhaXQgYmNyeXB0Lmhhc2goaW5wdXQucGFzc3dvcmQsIHNhbHRSb3VuZHMpXHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB1c2VyLCBtZXNzYWdlOiBcIkF1dGhlbnRpY2F0aW9uIHN1Y2Nlc2Z1bGxcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dpbjogYXN5bmMgKF8sIHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucHJvZmVzaW9uYWwuZmluZE9uZSh7IHdoZXJlOiB7IGVtYWlsIH19KVxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIHdpdGggdGhhdCBlbWFpbCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZClcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IHBhc3N3b3JkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIGp3dFxyXG4gICAgICAgIGNvbnN0IHRva2VuID0ganNvbndlYnRva2VuLnNpZ24oXHJcbiAgICAgICAgICB7IGlkOiB1c2VyLnByb2Zlc2lvbmFsX2lkLCBlbWFpbDogdXNlci5lbWFpbH0sXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxyXG4gICAgICAgICAgeyBleHBpcmVzSW46ICcxZCd9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIHRva2VuLCB1c2VyXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIH1cclxufSIsImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcbnZhciBkYiA9IHt9XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgcHJvY2Vzcy5lbnYuREFUQUJBU0VfTkFNRSxcclxuICAgIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VTRVIsXHJcbiAgICBwcm9jZXNzLmVudi5EQVRBQkFTRV9QQVNTV09SRCxcclxuICAgIHtcclxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9IT1NULFxyXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlQsXHJcbiAgICAgICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgICAgICBkZWZpbmU6IHtcclxuICAgICAgICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9vbDoge1xyXG4gICAgICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICAgICAgICAgIGlkbGU6IDEwMDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gPGh0dHA6Ly9kb2NzLnNlcXVlbGl6ZWpzLmNvbS9tYW51YWwvdHV0b3JpYWwvcXVlcnlpbmcuaHRtbCNvcGVyYXRvcnM+XHJcbiAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogMCxcclxuICAgIH0sXHJcbilcclxuXHJcbmxldCBtb2RlbHMgPSBbXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL2hvcmFyaW9zLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL25vdGFzLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL3BhY2llbnRlLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL3Byb2Zlc2lvbmFsLmpzJyksXHJcblxyXG5dXHJcblxyXG4vLyBJbml0aWFsaXplIG1vZGVsc1xyXG5tb2RlbHMuZm9yRWFjaChtb2RlbCA9PiB7XHJcbiAgICBjb25zdCBzZXFNb2RlbCA9IG1vZGVsKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxyXG4gICAgZGJbc2VxTW9kZWwubmFtZV0gPSBzZXFNb2RlbFxyXG59KVxyXG5cclxuLy8gQXBwbHkgYXNzb2NpYXRpb25zXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBpZiAoJ2Fzc29jaWF0ZScgaW4gZGJba2V5XSkge1xyXG4gICAgICAgIGRiW2tleV0uYXNzb2NpYXRlKGRiKVxyXG4gICAgfVxyXG59KVxyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplXHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGIiLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ2hvcmFyaW9zJywge1xuICAgIHR1cm5vX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZmVzaW9uYWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwcm9mZXNpb25hbCcsXG4gICAgICAgIGtleTogJ3VzdWFyaW8nXG4gICAgICB9XG4gICAgfSxcbiAgICBwYWNpZW50ZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg1MCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3BhY2llbnRlJyxcbiAgICAgICAga2V5OiAnbm9tYnJlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaG9yYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ05JTkUnLCdOSU5FSCcsJ1RFTicsJ1RFTkgnLCdFTEVWRU4nLCdFTEVWRU5IJywnVFdFTFZFJywnVFdFTFZFSCcsJ0ZPVVJURUVOJywnRk9VUlRFRU5IJywnRklGVEVFTicsJ0ZJRlRFRU5IJywnU0lYVEVFTicsJ1NJWFRFRU5IJywnU0VWRU5URUVOJywnU0VWRU5URUVOSCcpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBkdXJhY2lvbjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ0hBTEYnLCAnT05FJywgJ09ORUgnLCAnVFdPJyksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBmZWNoYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygpLFxuICAgICAgYWxsb3dOdWxsOmZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ2hvcmFyaW9zJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ0dXJub19pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZmtfaG9yYXJpb19wcm9mZXNpb25hbFwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImZrX2hvcmFyaW9fcGFjaWVudGVcIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInBhY2llbnRlXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgnbm90YXMnLCB7XG4gICAgbm90YToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlRFWFQsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBub3RhX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZmVzaW9uYWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwcm9mZXNpb25hbCcsXG4gICAgICAgIGtleTogJ3VzdWFyaW8nXG4gICAgICB9XG4gICAgfSxcbiAgICBmZWNoYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ25vdGFzJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJub3RhX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJwcm9mZXNpb25hbFwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdwYWNpZW50ZScsIHtcbiAgICBwYWNpZW50ZV9pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIG5vbWJyZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBjZWx1bGFyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDE1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGFjdGl2bzoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkJPT0xFQU4sXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAxXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ3BhY2llbnRlJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwYWNpZW50ZV9pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwibm9tYnJlXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJub21icmVcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdwcm9mZXNpb25hbCcsIHtcbiAgICBwcm9mZXNpb25hbF9pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHVzdWFyaW86IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgbm9tYnJlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGVzcGVjaWFsaWRhZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkNIQVIoNTApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgY2VsdWxhcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygxNSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzAwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAncHJvZmVzaW9uYWwnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInByb2Zlc2lvbmFsX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ1c3VhcmlvXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ1c3VhcmlvXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJylcbmNvbnN0IHsgQXBvbGxvU2VydmVyIH0gPSByZXF1aXJlKCdhcG9sbG8tc2VydmVyLWV4cHJlc3MnKVxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBqd3QgPSAgcmVxdWlyZSgnanNvbndlYnRva2VuJylcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcbmFwcC51c2UoY29ycygpKVxuXG5jb25zdCBnZXRVc2VyID0gdG9rZW4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpXG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgY29udGV4dDogKHsgcmVxIH0pID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuZ2V0KCdBdXRob3JpemF0aW9uJykgfHwgJydcbiAgICAgICAgcmV0dXJuIHsgdXNlcjogZ2V0VXNlcih0b2tlbi5yZXBsYWNlKCdCZWFyZXInLCAnJykpfVxuICAgICAgfSxcbiAgICAgIGludHJvc3BlY3Rpb246IHRydWUsXG4gICAgICBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgIG1vZHVsZXM6IFtcbiAgICAgICAgcmVxdWlyZSgnLi9HcmFwaFFML2hvcmFyaW9zLmpzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9wYWNpZW50ZS5qcycpLFxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvbm90YXMuanMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9HcmFwaFFML3Byb2Zlc2lvbmFsLmpzJylcbiAgICBdLFxufSlcblxuY29uc3Qgc2VydmVyUnVuID0gYXN5bmMgKCkgPT57XG4gICAgYXdhaXQgc2VydmVyLnN0YXJ0KCkudGhlbihyZXM9Pnt9KVxuXG4gICAgc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KVxuICAgIFxuICAgIGFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKCdIZWxsbyBXb3JsZCEnKSlcbiAgICBcbiAgICBhcHAubGlzdGVuKHsgcG9ydDogNTAwMCB9LCAoKSA9PlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo1MDAwYCksXG4gICAgKVxufVxuXG5zZXJ2ZXJSdW4oKSJdLCJuYW1lcyI6WyJncWwiLCJkYiIsInJlcXVpcmUiLCJPcCIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiRHVyYXRpb24iLCJIQUxGSE9VUiIsIk9ORUhPVVIiLCJPTkVIQUxGIiwiVFdPSE9VUlMiLCJBbGxvd2VkSG91ciIsIk5JTkUiLCJOSU5FSCIsIlRFTiIsIlRFTkgiLCJFTEVWRU4iLCJFTEVWRU5IIiwiVFdFTFZFIiwiVFdFTFZFSCIsIkZPVVJURUVOIiwiRk9VUlRFRU5IIiwiRklGVEVFTiIsIkZJRlRFRU5IIiwiU0lYVEVFTiIsIlNJWFRFRU5IIiwiU0VWRU5URUVOIiwiU0VWRU5URUVOSCIsIlF1ZXJ5IiwiaG9yYXJpb3MiLCJfIiwicHJvZmVzaW9uYWwiLCJwcm9mIiwidHVybm9zIiwiZmluZEFsbCIsIndoZXJlIiwiRXJyb3IiLCJob3JhcmlvUG9yRGlhIiwiZmVjaGEiLCJhbmQiLCJNdXRhdGlvbiIsImFncmVnYXJDaXRhIiwiaW5wdXQiLCJmaW5kT25lIiwiaG9yYSIsImRhdGEiLCJjcmVhdGUiLCJjaXRhIiwiZWxpbWluYXJIb3JhcmlvIiwidHVybm9faWQiLCJkZXN0cm95IiwiaG9yYXJpbyIsIm5vdGFzIiwibm90ZXMiLCJtZXNzYWdlIiwibm90YSIsIm9iaiIsImFyZ3MiLCJjb250ZXh0IiwiaW5mbyIsImZpbmRCeVBrIiwiaWQiLCJhZ3JlZ2FyTm90YSIsImNyZWF0ZU5vdGUiLCJlbGltaW5hck5vdGEiLCJub3RhX2lkIiwicGFjaWVudGVzIiwicGFjaWVudGUiLCJhY3Rpdm8iLCJub21icmUiLCJwYWNpZW50IiwiYWdyZWdhclBhY2llbnRlIiwiY3JlYXRlUGFjaWVudCIsImRlc2FjdGl2YXJQYWNpZW50ZSIsInBhY2llbnRlX2lkIiwidXBkYXRlIiwiYmNyeXB0IiwianNvbndlYnRva2VuIiwic2FsdFJvdW5kcyIsImNvbmZpZyIsInByb2Zlc2lvbmFsZXMiLCJyZWdpc3RlciIsImVzcGVjaWFsaWRhZCIsImNlbHVsYXIiLCJhdmF0YXIiLCJ1c3VhcmlvIiwiZW1haWwiLCJoYXNoIiwicGFzc3dvcmQiLCJ1c2VyIiwibG9naW4iLCJjb21wYXJlIiwiaXNWYWxpZCIsInRva2VuIiwic2lnbiIsInByb2Zlc2lvbmFsX2lkIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJTZXF1ZWxpemUiLCJzZXF1ZWxpemUiLCJEQVRBQkFTRV9OQU1FIiwiREFUQUJBU0VfVVNFUiIsIkRBVEFCQVNFX1BBU1NXT1JEIiwiaG9zdCIsIkRBVEFCQVNFX0hPU1QiLCJwb3J0IiwiREFUQUJBU0VfUE9SVCIsImRpYWxlY3QiLCJkZWZpbmUiLCJmcmVlemVUYWJsZU5hbWUiLCJwb29sIiwibWF4IiwibWluIiwiYWNxdWlyZSIsImlkbGUiLCJvcGVyYXRvcnNBbGlhc2VzIiwibW9kZWxzIiwiZm9yRWFjaCIsIm1vZGVsIiwic2VxTW9kZWwiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFzc29jaWF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJEYXRhVHlwZXMiLCJhdXRvSW5jcmVtZW50IiwidHlwZSIsIklOVEVHRVIiLCJhbGxvd051bGwiLCJwcmltYXJ5S2V5IiwiU1RSSU5HIiwicmVmZXJlbmNlcyIsIkVOVU0iLCJkdXJhY2lvbiIsInRhYmxlTmFtZSIsInRpbWVzdGFtcHMiLCJpbmRleGVzIiwidW5pcXVlIiwidXNpbmciLCJmaWVsZHMiLCJURVhUIiwiQk9PTEVBTiIsImRlZmF1bHRWYWx1ZSIsIkNIQVIiLCJleHByZXNzIiwiYm9keVBhcnNlciIsIkFwb2xsb1NlcnZlciIsImNvcnMiLCJhcHAiLCJqd3QiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZ2V0VXNlciIsInZlcmlmeSIsImVycm9yIiwic2VydmVyIiwicmVxIiwiZ2V0IiwicmVwbGFjZSIsImludHJvc3BlY3Rpb24iLCJwbGF5Z3JvdW5kIiwibW9kdWxlcyIsInNlcnZlclJ1biIsInN0YXJ0IiwidGhlbiIsInJlcyIsImFwcGx5TWlkZGxld2FyZSIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==