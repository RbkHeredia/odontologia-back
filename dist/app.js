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
/* harmony import */ var _models_profesional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/profesional */ "./models/profesional.js");
/* harmony import */ var _models_profesional__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_profesional__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database */ "./app/database.js");
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
var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    horarios(profesional:String): [Horario]\n    horario(id:ID!): Horario\n    horarioPorDia(fecha:String, profesional:String):[Horario]\n    horarioPorDiaHora(fecha:String, hora:AllowedHour):Horario   \n  }\n  type Horario{\n    turno_id:ID\n    profesional: String\n    paciente:String\n    duracion:Duration!\n    hora: AllowedHour!\n    fecha:String\n  }\n  enum Duration{\n    HALF\n    ONE\n    ONEH\n    TWO\n  }\n  enum AllowedHour{\n    NINE\n    NINEH\n    TEN\n    TENH\n    ELEVEN\n    ELEVENH\n    TWELVE\n    TWELVEH\n    FOURTEEN\n    FOURTEENH\n    FIFTEEN\n    FIFTEENH\n    SIXTEEN\n    SIXTEENH\n    SEVENTEEN\n    SEVENTEENH\n  }\n  \n  input addDate{\n    profesional:String\n    paciente: String\n    duracion:Duration!\n    hora:AllowedHour!\n    fecha:String\n  }\n  \n  extend type Mutation{\n    agregarCita(input:addDate):Horario\n    eliminarHorario(turno_id:Int):Horario\n  }\n"])));
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
              return _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.findAll();
            case 7:
              turnos = _context.sent;
              _context.next = 13;
              break;
            case 10:
              _context.next = 12;
              return _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.findAll({
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
    horario: function () {
      var _horario = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(obj, args, context, info) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.findByPk(args.id));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function horario(_x3, _x4, _x5, _x6) {
        return _horario.apply(this, arguments);
      }
      return horario;
    }(),
    horarioPorDiaHora: function () {
      var _horarioPorDiaHora = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, _ref2) {
        var fecha, hora, horario;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              fecha = _ref2.fecha, hora = _ref2.hora;
              _context3.prev = 1;
              _context3.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.findOne({
                where: _defineProperty({}, Op.and, [{
                  profesional: (_models_profesional__WEBPACK_IMPORTED_MODULE_1___default())
                }, {
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
      function horarioPorDiaHora(_x7, _x8) {
        return _horarioPorDiaHora.apply(this, arguments);
      }
      return horarioPorDiaHora;
    }(),
    horarioPorDia: function () {
      var _horarioPorDia = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_, _ref3) {
        var fecha, profesional, turnos;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              fecha = _ref3.fecha, profesional = _ref3.profesional;
              _context4.prev = 1;
              turnos = [];
              if (!(profesional === 'all')) {
                _context4.next = 9;
                break;
              }
              _context4.next = 6;
              return _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.findAll({
                where: {
                  fecha: fecha
                }
              });
            case 6:
              turnos = _context4.sent;
              _context4.next = 12;
              break;
            case 9:
              _context4.next = 11;
              return _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.findAll({
                where: _defineProperty({}, Op.and, [{
                  profesional: profesional
                }, {
                  fecha: fecha
                }])
              });
            case 11:
              turnos = _context4.sent;
            case 12:
              ;
              return _context4.abrupt("return", turnos);
            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](1);
              throw new Error('Error');
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 16]]);
      }));
      function horarioPorDia(_x9, _x10) {
        return _horarioPorDia.apply(this, arguments);
      }
      return horarioPorDia;
    }()
  },
  Mutation: {
    agregarCita: function () {
      var _agregarCita = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_, _ref4) {
        var input, data, cita;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              input = _ref4.input;
              _context5.prev = 1;
              _context5.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.findOne({
                where: _defineProperty({}, Op.and, [{
                  fecha: input.fecha
                }, {
                  hora: input.hora
                }])
              });
            case 4:
              data = _context5.sent;
              if (!data) {
                _context5.next = 9;
                break;
              }
              throw new Error('ya existe ese horario');
            case 9:
              _context5.next = 11;
              return _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.create(input);
            case 11:
              cita = _context5.sent;
              return _context5.abrupt("return", cita);
            case 13:
              _context5.next = 18;
              break;
            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](1);
              throw new Error('error al crear la cita');
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 15]]);
      }));
      function agregarCita(_x11, _x12) {
        return _agregarCita.apply(this, arguments);
      }
      return agregarCita;
    }(),
    eliminarHorario: function () {
      var _eliminarHorario = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_, _ref5) {
        var turno_id, horario;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              turno_id = _ref5.turno_id;
              _context6.prev = 1;
              _context6.next = 4;
              return _database__WEBPACK_IMPORTED_MODULE_2__["default"].horarios.destroy({
                where: {
                  turno_id: turno_id
                }
              });
            case 4:
              horario = _context6.sent;
              if (!horario) {
                _context6.next = 9;
                break;
              }
              return _context6.abrupt("return", 'Ok');
            case 9:
              return _context6.abrupt("return", 'no existe horario');
            case 10:
              _context6.next = 15;
              break;
            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](1);
              throw new Error('no existe el horario');
            case 15:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 12]]);
      }));
      function eliminarHorario(_x13, _x14) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQUE7VUFFbENMLE1BQU0sQ0FBQ00sZUFBZSxDQUFDO1lBQUVYLEdBQUcsRUFBSEE7VUFBSSxDQUFDLENBQUM7VUFFL0JBLEdBQUcsQ0FBQ1ksR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDQyxHQUFHLEVBQUVILEdBQUc7WUFBQSxPQUFLQSxHQUFHLENBQUNJLElBQUksQ0FBQyxjQUFjLENBQUM7VUFBQSxFQUFDO1VBRXBEZCxHQUFHLENBQUNlLE1BQU0sQ0FBQztZQUFFcEUsSUFBSSxFQUFFO1VBQUssQ0FBQyxFQUFFO1lBQUEsT0FDdkJxRSxPQUFPLENBQUNDLEdBQUcsc0RBQTRDO1VBQUEsRUFDMUQ7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FDSjtFQUFBLGdCQVZLVixTQUFTO0lBQUE7RUFBQTtBQUFBLEdBVWQ7QUFFREEsU0FBUyxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL0dyYXBoUUwvaG9yYXJpb3MuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9HcmFwaFFML25vdGFzLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvR3JhcGhRTC9wYWNpZW50ZS5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL0dyYXBoUUwvcHJvZmVzaW9uYWwuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL2hvcmFyaW9zLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9tb2RlbHMvbm90YXMuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9wYWNpZW50ZS5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL3Byb2Zlc2lvbmFsLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgcHJvZmVzaW9uYWwgZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2Zlc2lvbmFsJztcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5jb25zdCB7IE9wIH0gPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIGhvcmFyaW9zKHByb2Zlc2lvbmFsOlN0cmluZyk6IFtIb3JhcmlvXVxyXG4gICAgaG9yYXJpbyhpZDpJRCEpOiBIb3JhcmlvXHJcbiAgICBob3JhcmlvUG9yRGlhKGZlY2hhOlN0cmluZywgcHJvZmVzaW9uYWw6U3RyaW5nKTpbSG9yYXJpb11cclxuICAgIGhvcmFyaW9Qb3JEaWFIb3JhKGZlY2hhOlN0cmluZywgaG9yYTpBbGxvd2VkSG91cik6SG9yYXJpbyAgIFxyXG4gIH1cclxuICB0eXBlIEhvcmFyaW97XHJcbiAgICB0dXJub19pZDpJRFxyXG4gICAgcHJvZmVzaW9uYWw6IFN0cmluZ1xyXG4gICAgcGFjaWVudGU6U3RyaW5nXHJcbiAgICBkdXJhY2lvbjpEdXJhdGlvbiFcclxuICAgIGhvcmE6IEFsbG93ZWRIb3VyIVxyXG4gICAgZmVjaGE6U3RyaW5nXHJcbiAgfVxyXG4gIGVudW0gRHVyYXRpb257XHJcbiAgICBIQUxGXHJcbiAgICBPTkVcclxuICAgIE9ORUhcclxuICAgIFRXT1xyXG4gIH1cclxuICBlbnVtIEFsbG93ZWRIb3Vye1xyXG4gICAgTklORVxyXG4gICAgTklORUhcclxuICAgIFRFTlxyXG4gICAgVEVOSFxyXG4gICAgRUxFVkVOXHJcbiAgICBFTEVWRU5IXHJcbiAgICBUV0VMVkVcclxuICAgIFRXRUxWRUhcclxuICAgIEZPVVJURUVOXHJcbiAgICBGT1VSVEVFTkhcclxuICAgIEZJRlRFRU5cclxuICAgIEZJRlRFRU5IXHJcbiAgICBTSVhURUVOXHJcbiAgICBTSVhURUVOSFxyXG4gICAgU0VWRU5URUVOXHJcbiAgICBTRVZFTlRFRU5IXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IGFkZERhdGV7XHJcbiAgICBwcm9mZXNpb25hbDpTdHJpbmdcclxuICAgIHBhY2llbnRlOiBTdHJpbmdcclxuICAgIGR1cmFjaW9uOkR1cmF0aW9uIVxyXG4gICAgaG9yYTpBbGxvd2VkSG91ciFcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBcclxuICBleHRlbmQgdHlwZSBNdXRhdGlvbntcclxuICAgIGFncmVnYXJDaXRhKGlucHV0OmFkZERhdGUpOkhvcmFyaW9cclxuICAgIGVsaW1pbmFySG9yYXJpbyh0dXJub19pZDpJbnQpOkhvcmFyaW9cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBEdXJhdGlvbjp7XHJcbiAgICBIQUxGSE9VUjogJzA6MzAnLFxyXG4gICAgT05FSE9VUjogJzE6MDAnLFxyXG4gICAgT05FSEFMRjogJzE6MzAnLFxyXG4gICAgVFdPSE9VUlM6ICcyOjAwJ1xyXG4gIH0sXHJcbiAgQWxsb3dlZEhvdXI6e1xyXG4gICAgTklORTogJzk6MDAnLFxyXG4gICAgTklORUg6ICc5OjMwJyxcclxuICAgIFRFTjogXCIxMDowMFwiLFxyXG4gICAgVEVOSDogJzEwOjMwJyxcclxuICAgIEVMRVZFTjogJzExOjAwJyxcclxuICAgIEVMRVZFTkg6ICcxMTozMCcsXHJcbiAgICBUV0VMVkU6ICcxMjowMCcsXHJcbiAgICBUV0VMVkVIOiAnMTI6MzAnLFxyXG4gICAgRk9VUlRFRU46ICcxNDowMCcsXHJcbiAgICBGT1VSVEVFTkg6ICcxNDozMCcsXHJcbiAgICBGSUZURUVOOiAnMTU6MDAnLFxyXG4gICAgRklGVEVFTkg6ICcxNTozMCcsXHJcbiAgICBTSVhURUVOOiAnMTY6MDAnLFxyXG4gICAgU0lYVEVFTkg6ICcxNjozMCcsXHJcbiAgICBTRVZFTlRFRU46ICcxNzowMCcsXHJcbiAgICBTRVZFTlRFRU5IOiAnMTc6MzAnLFxyXG4gIH0sXHJcbiAgUXVlcnk6IHtcclxuICAgIGhvcmFyaW9zOiBhc3luYyAoXyx7cHJvZmVzaW9uYWx9KSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHByb2YgPSBwcm9mZXNpb25hbDtcclxuICAgICAgICBsZXQgdHVybm9zID0gW107XHJcbiAgICAgICAgaWYgKHByb2YgPT09ICdudWxsJyl7XHJcbiAgICAgICAgICB0dXJub3MgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kQWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHR1cm5vcyA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRBbGwoe3doZXJlOntwcm9mZXNpb25hbDpwcm9mZXNpb25hbH19KVxyXG4gICAgICAgIH07IHJldHVybiB0dXJub3NcclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBoYXkgdHVybm9zIHBhcmEgbW9zdHJhcicpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgICBcclxuICAgIGhvcmFyaW86IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgIGRiLmhvcmFyaW9zLmZpbmRCeVBrKGFyZ3MuaWQpLFxyXG4gICAgaG9yYXJpb1BvckRpYUhvcmE6IGFzeW5jIChfLHtmZWNoYSwgaG9yYX0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgaG9yYXJpbyA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRPbmUoe3doZXJlOiB7IFtPcC5hbmRdOiBbXHJcbiAgICAgICAgICB7IHByb2Zlc2lvbmFsOiBwcm9mZXNpb25hbH0sXHJcbiAgICAgICAgICB7IGZlY2hhOiBmZWNoYSB9LFxyXG4gICAgICAgICAgeyBob3JhOiBob3JhIH1cclxuICAgICAgICBdfX0pXHJcbiAgICAgICAgaWYgKGhvcmFyaW8gPT09IG51bGwpe1xyXG4gICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBob3JhcmlvXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhvcmFyaW9Qb3JEaWE6IGFzeW5jIChfLCB7ZmVjaGEsIHByb2Zlc2lvbmFsfSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBsZXQgdHVybm9zID0gW107XHJcbiAgICAgICAgaWYgKHByb2Zlc2lvbmFsID09PSAnYWxsJyl7XHJcbiAgICAgICAgICB0dXJub3MgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kQWxsKHt3aGVyZToge2ZlY2hhOmZlY2hhfX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0dXJub3MgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kQWxsKHt3aGVyZTp7W09wLmFuZF06W1xyXG4gICAgICAgICAgICB7cHJvZmVzaW9uYWw6cHJvZmVzaW9uYWx9LFxyXG4gICAgICAgICAgICB7ZmVjaGE6IGZlY2hhfVxyXG4gICAgICAgICAgXX19KVxyXG4gICAgICAgIH07IHJldHVybiB0dXJub3NcclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIE11dGF0aW9uOntcclxuICAgIGFncmVnYXJDaXRhOiBhc3luYyAoXywge2lucHV0fSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZE9uZSh7d2hlcmU6e1tPcC5hbmRdOiBbXHJcbiAgICAgICAgICB7IGZlY2hhOiBpbnB1dC5mZWNoYSB9LFxyXG4gICAgICAgICAgeyBob3JhOiBpbnB1dC5ob3JhIH1cclxuICAgICAgICBdfX0pXHJcbiAgICAgICAgaWYgKGRhdGEpe1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5YSBleGlzdGUgZXNlIGhvcmFyaW8nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBjaXRhID0gYXdhaXQgZGIuaG9yYXJpb3MuY3JlYXRlKGlucHV0KVxyXG4gICAgICAgICAgcmV0dXJuIGNpdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgYWwgY3JlYXIgbGEgY2l0YScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbGltaW5hckhvcmFyaW86IGFzeW5jIChfLHt0dXJub19pZH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgbGV0IGhvcmFyaW8gPSBhd2FpdCBkYi5ob3Jhcmlvcy5kZXN0cm95KHt3aGVyZToge3R1cm5vX2lkOnR1cm5vX2lkfX0pXHJcbiAgICAgICAgaWYgKGhvcmFyaW8pe1xyXG4gICAgICAgICAgcmV0dXJuICdPaydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdubyBleGlzdGUgaG9yYXJpbydcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZXhpc3RlIGVsIGhvcmFyaW8nKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWwgYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgbm90YXM6IFtOb3RhXVxyXG4gICAgbm90YShub3RhX2lkOklEISk6IE5vdGFcclxuICB9XHJcbiAgdHlwZSBOb3Rhe1xyXG4gICAgbm90YV9pZDogSURcclxuICAgIG5vdGE6U3RyaW5nXHJcbiAgICBwcm9mZXNpb25hbDpTdHJpbmdcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBpbnB1dCBhZGROb3Rle1xyXG4gICAgbm90YTpTdHJpbmdcclxuICAgIHByb2Zlc2lvbmFsOlN0cmluZ1xyXG4gICAgZmVjaGE6U3RyaW5nXHJcbiAgfVxyXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9ue1xyXG4gICAgYWdyZWdhck5vdGEoaW5wdXQ6YWRkTm90ZSk6Tm90YVxyXG4gICAgZWxpbWluYXJOb3RhKG5vdGFfaWQ6SW50KTpOb3RhXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID17XHJcbiAgUXVlcnk6IHtcclxuICAgIG5vdGFzOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBub3RlcyA9IGF3YWl0IGRiLm5vdGFzLmZpbmRBbGwoKTtcclxuICAgICAgICBpZiAoIW5vdGVzKXtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZXhpc3RlbiBub3RhcyBwYXJhIG1vc3RyYXInKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm90ZXM7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5vdGE6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgIGRiLm5vdGFzLmZpbmRCeVBrKGFyZ3MuaWQpLFxyXG4gIH0sXHJcblxyXG4gIE11dGF0aW9uOiB7XHJcbiAgICBhZ3JlZ2FyTm90YTogYXN5bmMgKF8se2lucHV0fSk9PiB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjcmVhdGVOb3RlID0gYXdhaXQgZGIubm90YXMuY3JlYXRlKGlucHV0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjcmVhdGVOb3RlXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIGFsIGNyZWFyIGxhIG5vdGEnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWxpbWluYXJOb3RhOiBhc3luYyAoXyx7bm90YV9pZH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgbGV0IG5vdGEgPSBhd2FpdCBkYi5ub3Rhcy5kZXN0cm95KHt3aGVyZToge25vdGFfaWQ6bm90YV9pZH19KVxyXG4gICAgICAgIGlmIChub3RhKXtcclxuICAgICAgICAgIHJldHVybiAnT2snXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnbm8gZXhpc3RlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGV4aXN0ZSBsYSBub3RhJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgcGFjaWVudGVzOiBbUGFjaWVudGVdXHJcbiAgICBwYWNpZW50ZShwYWNpZW50ZV9pZDpJRCEpOiBQYWNpZW50ZSAgIFxyXG4gIH1cclxuICB0eXBlIFBhY2llbnRle1xyXG4gICAgcGFjaWVudGVfaWQ6SURcclxuICAgIG5vbWJyZTogU3RyaW5nXHJcbiAgICBjZWx1bGFyOlN0cmluZ1xyXG4gICAgYWN0aXZvOkJvb2xlYW5cclxuICB9XHJcbiAgaW5wdXQgYWRkUGFjaWVudHtcclxuICAgIG5vbWJyZTpTdHJpbmdcclxuICAgIGNlbHVsYXI6U3RyaW5nXHJcbiAgICBhY3Rpdm86Qm9vbGVhblxyXG4gIH1cclxuICBpbnB1dCBzZXRQYWNpZW50e1xyXG4gICAgYWN0aXZvOkJvb2xlYW5cclxuICB9XHJcbiAgZXh0ZW5kIHR5cGUgTXV0YXRpb257XHJcbiAgICBhZ3JlZ2FyUGFjaWVudGUoaW5wdXQ6YWRkUGFjaWVudCk6UGFjaWVudGVcclxuICAgIGRlc2FjdGl2YXJQYWNpZW50ZShwYWNpZW50ZV9pZDpJbnQsIGlucHV0OiBzZXRQYWNpZW50KTpQYWNpZW50ZVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBwYWNpZW50ZXM6IGFzeW5jICgpID0+IGRiLnBhY2llbnRlLmZpbmRBbGwoe3doZXJlOnthY3Rpdm86dHJ1ZX19KSxcclxuICAgIHBhY2llbnRlOiBhc3luYyAoYXJncykgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBwYWNpZW50ID0gYXdhaXQgZGIucGFjaWVudGUuZmluZEFsbCh7d2hlcmU6IHtub21icmU6YXJncy5ub21icmV9fSlcclxuICAgICAgICBpZighcGFjaWVudCl7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV4aXN0ZSBlbCBwYWNpZW50ZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBwYWNpZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIE11dGF0aW9uOntcclxuICAgIGFncmVnYXJQYWNpZW50ZTogYXN5bmMoXywge2lucHV0fSk9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVBhY2llbnQgPSBkYi5wYWNpZW50ZS5jcmVhdGUoaW5wdXQpXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBhY2llbnRcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBzZSBwdWRvIGNyZWFyIGVsIG51ZXZvIHBhY2llbnRlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlc2FjdGl2YXJQYWNpZW50ZTogYXN5bmMoXyx7aW5wdXQsIHBhY2llbnRlX2lkfSk9PntcclxuICAgICAgZGIucGFjaWVudGUudXBkYXRlKGlucHV0ICx7d2hlcmU6e3BhY2llbnRlX2lkOnBhY2llbnRlX2lkfX0pXHJcbiAgICB9LFxyXG4gIH1cclxufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsIGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIHByb2Zlc2lvbmFsZXM6W1Byb2Zlc2lvbmFsXVxyXG4gICAgcHJvZmVzaW9uYWwocHJvZmVzaW9uYWxfaWQ6SUQhKTpQcm9mZXNpb25hbFxyXG4gIH1cclxuICB0eXBlIFByb2Zlc2lvbmFse1xyXG4gICAgcHJvZmVzaW9uYWxfaWQ6SURcclxuICAgIHVzdWFyaW86U3RyaW5nXHJcbiAgICBwYXNzd29yZDpTdHJpbmdcclxuICAgIG5vbWJyZTpTdHJpbmdcclxuICAgIGVzcGVjaWFsaWRhZDpTdHJpbmdcclxuICAgIGNlbHVsYXI6SW50XHJcbiAgICBlbWFpbDpTdHJpbmdcclxuICAgIGF2YXRhcjpTdHJpbmdcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnk6e1xyXG4gICAgcHJvZmVzaW9uYWxlczogYXN5bmMgKCkgPT4gZGIucHJvZmVzaW9uYWwuZmluZEFsbCgpLFxyXG4gICAgcHJvZmVzaW9uYWw6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgIGRiLnByb2Zlc2lvbmFsLmZpbmRCeVBrKGFyZ3MuaWQpLFxyXG4gIH1cclxufSIsImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcbnZhciBkYiA9IHt9XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgcHJvY2Vzcy5lbnYuREFUQUJBU0VfTkFNRSxcclxuICAgIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VTRVIsXHJcbiAgICBwcm9jZXNzLmVudi5EQVRBQkFTRV9QQVNTV09SRCxcclxuICAgIHtcclxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9IT1NULFxyXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlQsXHJcbiAgICAgICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgICAgICBkZWZpbmU6IHtcclxuICAgICAgICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9vbDoge1xyXG4gICAgICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICAgICAgICAgIGlkbGU6IDEwMDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gPGh0dHA6Ly9kb2NzLnNlcXVlbGl6ZWpzLmNvbS9tYW51YWwvdHV0b3JpYWwvcXVlcnlpbmcuaHRtbCNvcGVyYXRvcnM+XHJcbiAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogMCxcclxuICAgIH0sXHJcbilcclxuXHJcbmxldCBtb2RlbHMgPSBbXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL2hvcmFyaW9zLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL25vdGFzLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL3BhY2llbnRlLmpzJyksXHJcbiAgcmVxdWlyZSgnLi4vbW9kZWxzL3Byb2Zlc2lvbmFsLmpzJyksXHJcblxyXG5dXHJcblxyXG4vLyBJbml0aWFsaXplIG1vZGVsc1xyXG5tb2RlbHMuZm9yRWFjaChtb2RlbCA9PiB7XHJcbiAgICBjb25zdCBzZXFNb2RlbCA9IG1vZGVsKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxyXG4gICAgZGJbc2VxTW9kZWwubmFtZV0gPSBzZXFNb2RlbFxyXG59KVxyXG5cclxuLy8gQXBwbHkgYXNzb2NpYXRpb25zXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBpZiAoJ2Fzc29jaWF0ZScgaW4gZGJba2V5XSkge1xyXG4gICAgICAgIGRiW2tleV0uYXNzb2NpYXRlKGRiKVxyXG4gICAgfVxyXG59KVxyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplXHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGIiLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ2hvcmFyaW9zJywge1xuICAgIHR1cm5vX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZmVzaW9uYWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwcm9mZXNpb25hbCcsXG4gICAgICAgIGtleTogJ3VzdWFyaW8nXG4gICAgICB9XG4gICAgfSxcbiAgICBwYWNpZW50ZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg1MCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3BhY2llbnRlJyxcbiAgICAgICAga2V5OiAnbm9tYnJlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaG9yYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ05JTkUnLCdOSU5FSCcsJ1RFTicsJ1RFTkgnLCdFTEVWRU4nLCdFTEVWRU5IJywnVFdFTFZFJywnVFdFTFZFSCcsJ0ZPVVJURUVOJywnRk9VUlRFRU5IJywnRklGVEVFTicsJ0ZJRlRFRU5IJywnU0lYVEVFTicsJ1NJWFRFRU5IJywnU0VWRU5URUVOJywnU0VWRU5URUVOSCcpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBkdXJhY2lvbjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ0hBTEYnLCAnT05FJywgJ09ORUgnLCAnVFdPJyksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBmZWNoYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygpLFxuICAgICAgYWxsb3dOdWxsOmZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ2hvcmFyaW9zJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ0dXJub19pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZmtfaG9yYXJpb19wcm9mZXNpb25hbFwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImZrX2hvcmFyaW9fcGFjaWVudGVcIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInBhY2llbnRlXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgnbm90YXMnLCB7XG4gICAgbm90YToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlRFWFQsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBub3RhX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZmVzaW9uYWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwcm9mZXNpb25hbCcsXG4gICAgICAgIGtleTogJ3VzdWFyaW8nXG4gICAgICB9XG4gICAgfSxcbiAgICBmZWNoYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ25vdGFzJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJub3RhX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJwcm9mZXNpb25hbFwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdwYWNpZW50ZScsIHtcbiAgICBwYWNpZW50ZV9pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIG5vbWJyZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBjZWx1bGFyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDE1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGFjdGl2bzoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkJPT0xFQU4sXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAxXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ3BhY2llbnRlJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwYWNpZW50ZV9pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwibm9tYnJlXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJub21icmVcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdwcm9mZXNpb25hbCcsIHtcbiAgICBwcm9mZXNpb25hbF9pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHVzdWFyaW86IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgbm9tYnJlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGVzcGVjaWFsaWRhZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkNIQVIoNTApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgY2VsdWxhcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygxNSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzAwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAncHJvZmVzaW9uYWwnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInByb2Zlc2lvbmFsX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ1c3VhcmlvXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ1c3VhcmlvXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJ1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXG5jb25zdCB7IEFwb2xsb1NlcnZlciB9ID0gcmVxdWlyZSgnYXBvbGxvLXNlcnZlci1leHByZXNzJylcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXG5hcHAudXNlKGNvcnMoKSlcblxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgbW9kdWxlczogW1xuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvaG9yYXJpb3MuanMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9HcmFwaFFML3BhY2llbnRlLmpzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9ub3Rhcy5qcycpLFxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvcHJvZmVzaW9uYWwuanMnKVxuICAgIF0sXG59KVxuXG5jb25zdCBzZXJ2ZXJSdW4gPSBhc3luYyAoKSA9PntcbiAgICBhd2FpdCBzZXJ2ZXIuc3RhcnQoKS50aGVuKHJlcz0+e30pXG5cbiAgICBzZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pXG4gICAgXG4gICAgYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4gcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpKVxuICAgIFxuICAgIGFwcC5saXN0ZW4oeyBwb3J0OiA1MDAwIH0sICgpID0+XG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5qAIFNlcnZlciByZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OjUwMDBgKSxcbiAgICApXG59XG5cbnNlcnZlclJ1bigpIl0sIm5hbWVzIjpbImdxbCIsInByb2Zlc2lvbmFsIiwiZGIiLCJyZXF1aXJlIiwiT3AiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsIkR1cmF0aW9uIiwiSEFMRkhPVVIiLCJPTkVIT1VSIiwiT05FSEFMRiIsIlRXT0hPVVJTIiwiQWxsb3dlZEhvdXIiLCJOSU5FIiwiTklORUgiLCJURU4iLCJURU5IIiwiRUxFVkVOIiwiRUxFVkVOSCIsIlRXRUxWRSIsIlRXRUxWRUgiLCJGT1VSVEVFTiIsIkZPVVJURUVOSCIsIkZJRlRFRU4iLCJGSUZURUVOSCIsIlNJWFRFRU4iLCJTSVhURUVOSCIsIlNFVkVOVEVFTiIsIlNFVkVOVEVFTkgiLCJRdWVyeSIsImhvcmFyaW9zIiwiXyIsInByb2YiLCJ0dXJub3MiLCJmaW5kQWxsIiwid2hlcmUiLCJFcnJvciIsImhvcmFyaW8iLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJmaW5kQnlQayIsImlkIiwiaG9yYXJpb1BvckRpYUhvcmEiLCJmZWNoYSIsImhvcmEiLCJmaW5kT25lIiwiYW5kIiwiaG9yYXJpb1BvckRpYSIsIk11dGF0aW9uIiwiYWdyZWdhckNpdGEiLCJpbnB1dCIsImRhdGEiLCJjcmVhdGUiLCJjaXRhIiwiZWxpbWluYXJIb3JhcmlvIiwidHVybm9faWQiLCJkZXN0cm95Iiwibm90YXMiLCJub3RlcyIsIm1lc3NhZ2UiLCJub3RhIiwiYWdyZWdhck5vdGEiLCJjcmVhdGVOb3RlIiwiZWxpbWluYXJOb3RhIiwibm90YV9pZCIsInBhY2llbnRlcyIsInBhY2llbnRlIiwiYWN0aXZvIiwibm9tYnJlIiwicGFjaWVudCIsImFncmVnYXJQYWNpZW50ZSIsImNyZWF0ZVBhY2llbnQiLCJkZXNhY3RpdmFyUGFjaWVudGUiLCJwYWNpZW50ZV9pZCIsInVwZGF0ZSIsInByb2Zlc2lvbmFsZXMiLCJTZXF1ZWxpemUiLCJjb25maWciLCJzZXF1ZWxpemUiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfTkFNRSIsIkRBVEFCQVNFX1VTRVIiLCJEQVRBQkFTRV9QQVNTV09SRCIsImhvc3QiLCJEQVRBQkFTRV9IT1NUIiwicG9ydCIsIkRBVEFCQVNFX1BPUlQiLCJkaWFsZWN0IiwiZGVmaW5lIiwiZnJlZXplVGFibGVOYW1lIiwicG9vbCIsIm1heCIsIm1pbiIsImFjcXVpcmUiLCJpZGxlIiwib3BlcmF0b3JzQWxpYXNlcyIsIm1vZGVscyIsImZvckVhY2giLCJtb2RlbCIsInNlcU1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJhc3NvY2lhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRGF0YVR5cGVzIiwiYXV0b0luY3JlbWVudCIsInR5cGUiLCJJTlRFR0VSIiwiYWxsb3dOdWxsIiwicHJpbWFyeUtleSIsIlNUUklORyIsInJlZmVyZW5jZXMiLCJFTlVNIiwiZHVyYWNpb24iLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwiaW5kZXhlcyIsInVuaXF1ZSIsInVzaW5nIiwiZmllbGRzIiwiVEVYVCIsImNlbHVsYXIiLCJCT09MRUFOIiwiZGVmYXVsdFZhbHVlIiwicHJvZmVzaW9uYWxfaWQiLCJ1c3VhcmlvIiwicGFzc3dvcmQiLCJlc3BlY2lhbGlkYWQiLCJDSEFSIiwiZW1haWwiLCJhdmF0YXIiLCJleHByZXNzIiwiYm9keVBhcnNlciIsIkFwb2xsb1NlcnZlciIsImNvcnMiLCJhcHAiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2VydmVyIiwibW9kdWxlcyIsInNlcnZlclJ1biIsInN0YXJ0IiwidGhlbiIsInJlcyIsImFwcGx5TWlkZGxld2FyZSIsImdldCIsInJlcSIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==