/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
var sequelize = new (sequelize__WEBPACK_IMPORTED_MODULE_0___default())(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
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

/***/ "./app/graphql/horarios.js":
/*!*********************************!*\
  !*** ./app/graphql/horarios.js ***!
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

/***/ "./app/graphql/notas.js":
/*!******************************!*\
  !*** ./app/graphql/notas.js ***!
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

/***/ "./app/graphql/paciente.js":
/*!*********************************!*\
  !*** ./app/graphql/paciente.js ***!
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

/***/ "./app/graphql/profesional.js":
/*!************************************!*\
  !*** ./app/graphql/profesional.js ***!
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
var typeDefs = (0,apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query{\n    profesionales:[Profesional]\n    profesional(profesional_id:ID!):Profesional\n  }\n  type Profesional{\n    profesional_id:ID\n    usuario:String\n    password:String\n    nombre:String\n    especialidad:String\n    celular:String\n    email:String\n    avatar:String\n  }\n  type AuthPayload {\n    token: String!\n    user: Profesional!\n  }\n  input addProfesional{\n    usuario:String\n    password:String\n    nombre:String\n    especialidad:String\n    celular:String\n    email:String\n    avatar:String\n  }\n\n  type Mutation{\n    register(input:addProfesional):AuthPayload!\n    login (email: String!, password: String!): AuthPayload!\n  }\n"])));
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PORT": () => (/* binding */ PORT)
/* harmony export */ });
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
var PORT = process.env.PORT || 5000;
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
  modules: [__webpack_require__(/*! ./graphql/horarios.js */ "./app/graphql/horarios.js"), __webpack_require__(/*! ./graphql/paciente.js */ "./app/graphql/paciente.js"), __webpack_require__(/*! ./graphql/notas.js */ "./app/graphql/notas.js"), __webpack_require__(/*! ./graphql/profesional.js */ "./app/graphql/profesional.js")]
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
            port: PORT
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPLENBQUNDLEdBQUcsc0RBQTRDO1VBQUEsRUFDMUQ7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FDSjtFQUFBLGdCQVZLUixTQUFTO0lBQUE7RUFBQTtBQUFBLEdBVWQ7QUFFREEsU0FBUyxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL2RhdGFiYXNlLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvZ3JhcGhxbC9ob3Jhcmlvcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL2dyYXBocWwvbm90YXMuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9ncmFwaHFsL3BhY2llbnRlLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvZ3JhcGhxbC9wcm9mZXNpb25hbC5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL2hvcmFyaW9zLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9tb2RlbHMvbm90YXMuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9wYWNpZW50ZS5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL3Byb2Zlc2lvbmFsLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcbnZhciBkYiA9IHt9XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgcHJvY2Vzcy5lbnYuTVlTUUxEQVRBQkFTRSxcclxuICAgIHByb2Nlc3MuZW52Lk1ZU1FMVVNFUixcclxuICAgIHByb2Nlc3MuZW52Lk1ZU1FMUEFTU1dPUkQsXHJcbiAgICB7XHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuTVlTUUxIT1NULFxyXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52Lk1ZU1FMUE9SVCxcclxuICAgICAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgICAgIGRlZmluZToge1xyXG4gICAgICAgICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb29sOiB7XHJcbiAgICAgICAgICAgIG1heDogNSxcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBhY3F1aXJlOiAzMDAwMCxcclxuICAgICAgICAgICAgaWRsZTogMTAwMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyA8aHR0cDovL2RvY3Muc2VxdWVsaXplanMuY29tL21hbnVhbC90dXRvcmlhbC9xdWVyeWluZy5odG1sI29wZXJhdG9ycz5cclxuICAgICAgICBvcGVyYXRvcnNBbGlhc2VzOiAwLFxyXG4gICAgfSxcclxuKVxyXG5cclxubGV0IG1vZGVscyA9IFtcclxuICByZXF1aXJlKCcuLi9tb2RlbHMvaG9yYXJpb3MuanMnKSxcclxuICByZXF1aXJlKCcuLi9tb2RlbHMvbm90YXMuanMnKSxcclxuICByZXF1aXJlKCcuLi9tb2RlbHMvcGFjaWVudGUuanMnKSxcclxuICByZXF1aXJlKCcuLi9tb2RlbHMvcHJvZmVzaW9uYWwuanMnKSxcclxuXHJcbl1cclxuXHJcbi8vIEluaXRpYWxpemUgbW9kZWxzXHJcbm1vZGVscy5mb3JFYWNoKG1vZGVsID0+IHtcclxuICAgIGNvbnN0IHNlcU1vZGVsID0gbW9kZWwoc2VxdWVsaXplLCBTZXF1ZWxpemUpXHJcbiAgICBkYltzZXFNb2RlbC5uYW1lXSA9IHNlcU1vZGVsXHJcbn0pXHJcblxyXG4vLyBBcHBseSBhc3NvY2lhdGlvbnNcclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGlmICgnYXNzb2NpYXRlJyBpbiBkYltrZXldKSB7XHJcbiAgICAgICAgZGJba2V5XS5hc3NvY2lhdGUoZGIpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemVcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5jb25zdCB7IE9wIH0gPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIGhvcmFyaW9zKHByb2Zlc2lvbmFsOlN0cmluZyk6IFtIb3JhcmlvXVxyXG4gICAgaG9yYXJpb1BvckRpYShmZWNoYTpTdHJpbmcsIHByb2Zlc2lvbmFsOlN0cmluZyk6W0hvcmFyaW9dXHJcbiAgfVxyXG4gIHR5cGUgSG9yYXJpb3tcclxuICAgIHR1cm5vX2lkOklEXHJcbiAgICBwcm9mZXNpb25hbDogU3RyaW5nXHJcbiAgICBwYWNpZW50ZTpTdHJpbmdcclxuICAgIGR1cmFjaW9uOkR1cmF0aW9uIVxyXG4gICAgaG9yYTogQWxsb3dlZEhvdXIhXHJcbiAgICBmZWNoYTpTdHJpbmdcclxuICB9XHJcbiAgZW51bSBEdXJhdGlvbntcclxuICAgIEhBTEZcclxuICAgIE9ORVxyXG4gICAgT05FSFxyXG4gICAgVFdPXHJcbiAgfVxyXG4gIGVudW0gQWxsb3dlZEhvdXJ7XHJcbiAgICBOSU5FXHJcbiAgICBOSU5FSFxyXG4gICAgVEVOXHJcbiAgICBURU5IXHJcbiAgICBFTEVWRU5cclxuICAgIEVMRVZFTkhcclxuICAgIFRXRUxWRVxyXG4gICAgVFdFTFZFSFxyXG4gICAgRk9VUlRFRU5cclxuICAgIEZPVVJURUVOSFxyXG4gICAgRklGVEVFTlxyXG4gICAgRklGVEVFTkhcclxuICAgIFNJWFRFRU5cclxuICAgIFNJWFRFRU5IXHJcbiAgICBTRVZFTlRFRU5cclxuICAgIFNFVkVOVEVFTkhcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQgYWRkRGF0ZXtcclxuICAgIHByb2Zlc2lvbmFsOlN0cmluZ1xyXG4gICAgcGFjaWVudGU6IFN0cmluZ1xyXG4gICAgZHVyYWNpb246RHVyYXRpb24hXHJcbiAgICBob3JhOkFsbG93ZWRIb3VyIVxyXG4gICAgZmVjaGE6U3RyaW5nXHJcbiAgfVxyXG4gIFxyXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9ue1xyXG4gICAgYWdyZWdhckNpdGEoaW5wdXQ6YWRkRGF0ZSk6SG9yYXJpb1xyXG4gICAgZWxpbWluYXJIb3JhcmlvKHR1cm5vX2lkOkludCk6SG9yYXJpb1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIER1cmF0aW9uOntcclxuICAgIEhBTEZIT1VSOiAnMDozMCcsXHJcbiAgICBPTkVIT1VSOiAnMTowMCcsXHJcbiAgICBPTkVIQUxGOiAnMTozMCcsXHJcbiAgICBUV09IT1VSUzogJzI6MDAnXHJcbiAgfSxcclxuICBBbGxvd2VkSG91cjp7XHJcbiAgICBOSU5FOiAnOTowMCcsXHJcbiAgICBOSU5FSDogJzk6MzAnLFxyXG4gICAgVEVOOiBcIjEwOjAwXCIsXHJcbiAgICBURU5IOiAnMTA6MzAnLFxyXG4gICAgRUxFVkVOOiAnMTE6MDAnLFxyXG4gICAgRUxFVkVOSDogJzExOjMwJyxcclxuICAgIFRXRUxWRTogJzEyOjAwJyxcclxuICAgIFRXRUxWRUg6ICcxMjozMCcsXHJcbiAgICBGT1VSVEVFTjogJzE0OjAwJyxcclxuICAgIEZPVVJURUVOSDogJzE0OjMwJyxcclxuICAgIEZJRlRFRU46ICcxNTowMCcsXHJcbiAgICBGSUZURUVOSDogJzE1OjMwJyxcclxuICAgIFNJWFRFRU46ICcxNjowMCcsXHJcbiAgICBTSVhURUVOSDogJzE2OjMwJyxcclxuICAgIFNFVkVOVEVFTjogJzE3OjAwJyxcclxuICAgIFNFVkVOVEVFTkg6ICcxNzozMCcsXHJcbiAgfSxcclxuICBRdWVyeToge1xyXG4gICAgaG9yYXJpb3M6IGFzeW5jIChfLHtwcm9mZXNpb25hbH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcHJvZiA9IHByb2Zlc2lvbmFsO1xyXG4gICAgICAgIGxldCB0dXJub3MgPSBbXTtcclxuICAgICAgICBpZiAocHJvZiA9PT0gJ251bGwnKXtcclxuICAgICAgICAgIHR1cm5vcyA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHVybm9zID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZEFsbCh7d2hlcmU6e3Byb2Zlc2lvbmFsOnByb2Zlc2lvbmFsfX0pXHJcbiAgICAgICAgfTsgcmV0dXJuIHR1cm5vc1xyXG4gICAgICAgIFxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGhheSB0dXJub3MgcGFyYSBtb3N0cmFyJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgaG9yYXJpb1BvckRpYTogYXN5bmMgKF8sIHtmZWNoYSwgcHJvZmVzaW9uYWx9KSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGxldCB0dXJub3MgPSBbXTtcclxuICAgICAgICBpZiAocHJvZmVzaW9uYWwgPT09ICdhbGwnKXtcclxuICAgICAgICAgIHR1cm5vcyA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRBbGwoe3doZXJlOiB7ZmVjaGE6ZmVjaGF9fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHR1cm5vcyA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRBbGwoe3doZXJlOntbT3AuYW5kXTpbXHJcbiAgICAgICAgICAgIHtwcm9mZXNpb25hbDpwcm9mZXNpb25hbH0sXHJcbiAgICAgICAgICAgIHtmZWNoYTogZmVjaGF9XHJcbiAgICAgICAgICBdfX0pXHJcbiAgICAgICAgfTsgcmV0dXJuIHR1cm5vc1xyXG4gICAgICAgIFxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgTXV0YXRpb246e1xyXG4gICAgYWdyZWdhckNpdGE6IGFzeW5jIChfLCB7aW5wdXR9KSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kT25lKHt3aGVyZTp7W09wLmFuZF06IFtcclxuICAgICAgICAgIHsgZmVjaGE6IGlucHV0LmZlY2hhIH0sXHJcbiAgICAgICAgICB7IGhvcmE6IGlucHV0LmhvcmEgfVxyXG4gICAgICAgIF19fSlcclxuICAgICAgICBpZiAoZGF0YSl7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3lhIGV4aXN0ZSBlc2UgaG9yYXJpbycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGNpdGEgPSBhd2FpdCBkYi5ob3Jhcmlvcy5jcmVhdGUoaW5wdXQpXHJcbiAgICAgICAgICByZXR1cm4gY2l0YVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciBhbCBjcmVhciBsYSBjaXRhJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVsaW1pbmFySG9yYXJpbzogYXN5bmMgKF8se3R1cm5vX2lkfSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBsZXQgaG9yYXJpbyA9IGF3YWl0IGRiLmhvcmFyaW9zLmRlc3Ryb3koe3doZXJlOiB7dHVybm9faWQ6dHVybm9faWR9fSlcclxuICAgICAgICBpZiAoaG9yYXJpbyl7XHJcbiAgICAgICAgICByZXR1cm4gJ09rJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ25vIGV4aXN0ZSBob3JhcmlvJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBleGlzdGUgZWwgaG9yYXJpbycpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbCBgXHJcbiAgZXh0ZW5kIHR5cGUgUXVlcnl7XHJcbiAgICBub3RhczogW05vdGFdXHJcbiAgICBub3RhKG5vdGFfaWQ6SUQhKTogTm90YVxyXG4gIH1cclxuICB0eXBlIE5vdGF7XHJcbiAgICBub3RhX2lkOiBJRFxyXG4gICAgbm90YTpTdHJpbmdcclxuICAgIHByb2Zlc2lvbmFsOlN0cmluZ1xyXG4gICAgZmVjaGE6U3RyaW5nXHJcbiAgfVxyXG4gIGlucHV0IGFkZE5vdGV7XHJcbiAgICBub3RhOlN0cmluZ1xyXG4gICAgcHJvZmVzaW9uYWw6U3RyaW5nXHJcbiAgICBmZWNoYTpTdHJpbmdcclxuICB9XHJcbiAgZXh0ZW5kIHR5cGUgTXV0YXRpb257XHJcbiAgICBhZ3JlZ2FyTm90YShpbnB1dDphZGROb3RlKTpOb3RhXHJcbiAgICBlbGltaW5hck5vdGEobm90YV9pZDpJbnQpOk5vdGFcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPXtcclxuICBRdWVyeToge1xyXG4gICAgbm90YXM6IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IG5vdGVzID0gYXdhaXQgZGIubm90YXMuZmluZEFsbCgpO1xyXG4gICAgICAgIGlmICghbm90ZXMpe1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBleGlzdGVuIG5vdGFzIHBhcmEgbW9zdHJhcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub3RlcztcclxuICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbm90YTogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cclxuICAgICAgZGIubm90YXMuZmluZEJ5UGsoYXJncy5pZCksXHJcbiAgfSxcclxuXHJcbiAgTXV0YXRpb246IHtcclxuICAgIGFncmVnYXJOb3RhOiBhc3luYyAoXyx7aW5wdXR9KT0+IHtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5vdGUgPSBhd2FpdCBkYi5ub3Rhcy5jcmVhdGUoaW5wdXQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vdGVcclxuICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgYWwgY3JlYXIgbGEgbm90YScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbGltaW5hck5vdGE6IGFzeW5jIChfLHtub3RhX2lkfSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBsZXQgbm90YSA9IGF3YWl0IGRiLm5vdGFzLmRlc3Ryb3koe3doZXJlOiB7bm90YV9pZDpub3RhX2lkfX0pXHJcbiAgICAgICAgaWYgKG5vdGEpe1xyXG4gICAgICAgICAgcmV0dXJuICdPaydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdubyBleGlzdGUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZXhpc3RlIGxhIG5vdGEnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgZXh0ZW5kIHR5cGUgUXVlcnl7XHJcbiAgICBwYWNpZW50ZXM6IFtQYWNpZW50ZV1cclxuICAgIHBhY2llbnRlKHBhY2llbnRlX2lkOklEISk6IFBhY2llbnRlICAgXHJcbiAgfVxyXG4gIHR5cGUgUGFjaWVudGV7XHJcbiAgICBwYWNpZW50ZV9pZDpJRFxyXG4gICAgbm9tYnJlOiBTdHJpbmdcclxuICAgIGNlbHVsYXI6U3RyaW5nXHJcbiAgICBhY3Rpdm86Qm9vbGVhblxyXG4gIH1cclxuICBpbnB1dCBhZGRQYWNpZW50e1xyXG4gICAgbm9tYnJlOlN0cmluZ1xyXG4gICAgY2VsdWxhcjpTdHJpbmdcclxuICAgIGFjdGl2bzpCb29sZWFuXHJcbiAgfVxyXG4gIGlucHV0IHNldFBhY2llbnR7XHJcbiAgICBhY3Rpdm86Qm9vbGVhblxyXG4gIH1cclxuICBleHRlbmQgdHlwZSBNdXRhdGlvbntcclxuICAgIGFncmVnYXJQYWNpZW50ZShpbnB1dDphZGRQYWNpZW50KTpQYWNpZW50ZVxyXG4gICAgZGVzYWN0aXZhclBhY2llbnRlKHBhY2llbnRlX2lkOkludCwgaW5wdXQ6IHNldFBhY2llbnQpOlBhY2llbnRlXHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnk6IHtcclxuICAgIHBhY2llbnRlczogYXN5bmMgKCkgPT4gZGIucGFjaWVudGUuZmluZEFsbCh7d2hlcmU6e2FjdGl2bzp0cnVlfX0pLFxyXG4gICAgcGFjaWVudGU6IGFzeW5jIChhcmdzKSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHBhY2llbnQgPSBhd2FpdCBkYi5wYWNpZW50ZS5maW5kQWxsKHt3aGVyZToge25vbWJyZTphcmdzLm5vbWJyZX19KVxyXG4gICAgICAgIGlmKCFwYWNpZW50KXtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZXhpc3RlIGVsIHBhY2llbnRlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHBhY2llbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgTXV0YXRpb246e1xyXG4gICAgYWdyZWdhclBhY2llbnRlOiBhc3luYyhfLCB7aW5wdXR9KT0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlUGFjaWVudCA9IGRiLnBhY2llbnRlLmNyZWF0ZShpbnB1dClcclxuICAgICAgICByZXR1cm4gY3JlYXRlUGFjaWVudFxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHNlIHB1ZG8gY3JlYXIgZWwgbnVldm8gcGFjaWVudGUnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVzYWN0aXZhclBhY2llbnRlOiBhc3luYyhfLHtpbnB1dCwgcGFjaWVudGVfaWR9KT0+e1xyXG4gICAgICBkYi5wYWNpZW50ZS51cGRhdGUoaW5wdXQgLHt3aGVyZTp7cGFjaWVudGVfaWQ6cGFjaWVudGVfaWR9fSlcclxuICAgIH0sXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5jb25zdCBqc29ud2VidG9rZW4gPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCBzYWx0Um91bmRzID0gMTA7XHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsIGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIHByb2Zlc2lvbmFsZXM6W1Byb2Zlc2lvbmFsXVxyXG4gICAgcHJvZmVzaW9uYWwocHJvZmVzaW9uYWxfaWQ6SUQhKTpQcm9mZXNpb25hbFxyXG4gIH1cclxuICB0eXBlIFByb2Zlc2lvbmFse1xyXG4gICAgcHJvZmVzaW9uYWxfaWQ6SURcclxuICAgIHVzdWFyaW86U3RyaW5nXHJcbiAgICBwYXNzd29yZDpTdHJpbmdcclxuICAgIG5vbWJyZTpTdHJpbmdcclxuICAgIGVzcGVjaWFsaWRhZDpTdHJpbmdcclxuICAgIGNlbHVsYXI6U3RyaW5nXHJcbiAgICBlbWFpbDpTdHJpbmdcclxuICAgIGF2YXRhcjpTdHJpbmdcclxuICB9XHJcbiAgdHlwZSBBdXRoUGF5bG9hZCB7XHJcbiAgICB0b2tlbjogU3RyaW5nIVxyXG4gICAgdXNlcjogUHJvZmVzaW9uYWwhXHJcbiAgfVxyXG4gIGlucHV0IGFkZFByb2Zlc2lvbmFse1xyXG4gICAgdXN1YXJpbzpTdHJpbmdcclxuICAgIHBhc3N3b3JkOlN0cmluZ1xyXG4gICAgbm9tYnJlOlN0cmluZ1xyXG4gICAgZXNwZWNpYWxpZGFkOlN0cmluZ1xyXG4gICAgY2VsdWxhcjpTdHJpbmdcclxuICAgIGVtYWlsOlN0cmluZ1xyXG4gICAgYXZhdGFyOlN0cmluZ1xyXG4gIH1cclxuXHJcbiAgdHlwZSBNdXRhdGlvbntcclxuICAgIHJlZ2lzdGVyKGlucHV0OmFkZFByb2Zlc2lvbmFsKTpBdXRoUGF5bG9hZCFcclxuICAgIGxvZ2luIChlbWFpbDogU3RyaW5nISwgcGFzc3dvcmQ6IFN0cmluZyEpOiBBdXRoUGF5bG9hZCFcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnk6e1xyXG4gICAgcHJvZmVzaW9uYWxlczogYXN5bmMgKCkgPT4gZGIucHJvZmVzaW9uYWwuZmluZEFsbCgpLFxyXG4gICAgcHJvZmVzaW9uYWw6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgIGRiLnByb2Zlc2lvbmFsLmZpbmRCeVBrKGFyZ3MuaWQpLFxyXG4gIH0sXHJcbiAgTXV0YXRpb246e1xyXG4gICAgcmVnaXN0ZXI6IGFzeW5jIChfLCB7IGlucHV0IH0pID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucHJvZmVzaW9uYWwuY3JlYXRlKHtcclxuICAgICAgICAgIG5vbWJyZTogaW5wdXQubm9tYnJlLFxyXG4gICAgICAgICAgZXNwZWNpYWxpZGFkOiBpbnB1dC5lc3BlY2lhbGlkYWQsXHJcbiAgICAgICAgICBjZWx1bGFyOiBpbnB1dC5jZWx1bGFyLFxyXG4gICAgICAgICAgYXZhdGFyOiBpbnB1dC5hdmF0YXIsXHJcbiAgICAgICAgICB1c3VhcmlvOiBpbnB1dC51c3VhcmlvLFxyXG4gICAgICAgICAgZW1haWw6IGlucHV0LmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IGF3YWl0IGJjcnlwdC5oYXNoKGlucHV0LnBhc3N3b3JkLCBzYWx0Um91bmRzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdXNlciwgbWVzc2FnZTogXCJBdXRoZW50aWNhdGlvbiBzdWNjZXNmdWxsXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbG9naW46IGFzeW5jIChfLCB7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnByb2Zlc2lvbmFsLmZpbmRPbmUoeyB3aGVyZTogeyBlbWFpbCB9fSlcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciB3aXRoIHRoYXQgZW1haWwnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBwYXNzd29yZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiBqd3RcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGpzb253ZWJ0b2tlbi5zaWduKFxyXG4gICAgICAgICAgeyBpZDogdXNlci5wcm9mZXNpb25hbF9pZCwgZW1haWw6IHVzZXIuZW1haWx9LFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcclxuICAgICAgICAgIHsgZXhwaXJlc0luOiAnMWQnfVxyXG4gICAgICAgIClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICB0b2tlbiwgdXNlclxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcbn0iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ2hvcmFyaW9zJywge1xuICAgIHR1cm5vX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZmVzaW9uYWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwcm9mZXNpb25hbCcsXG4gICAgICAgIGtleTogJ3VzdWFyaW8nXG4gICAgICB9XG4gICAgfSxcbiAgICBwYWNpZW50ZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg1MCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3BhY2llbnRlJyxcbiAgICAgICAga2V5OiAnbm9tYnJlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaG9yYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ05JTkUnLCdOSU5FSCcsJ1RFTicsJ1RFTkgnLCdFTEVWRU4nLCdFTEVWRU5IJywnVFdFTFZFJywnVFdFTFZFSCcsJ0ZPVVJURUVOJywnRk9VUlRFRU5IJywnRklGVEVFTicsJ0ZJRlRFRU5IJywnU0lYVEVFTicsJ1NJWFRFRU5IJywnU0VWRU5URUVOJywnU0VWRU5URUVOSCcpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBkdXJhY2lvbjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ0hBTEYnLCAnT05FJywgJ09ORUgnLCAnVFdPJyksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBmZWNoYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygpLFxuICAgICAgYWxsb3dOdWxsOmZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ2hvcmFyaW9zJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ0dXJub19pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZmtfaG9yYXJpb19wcm9mZXNpb25hbFwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImZrX2hvcmFyaW9fcGFjaWVudGVcIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInBhY2llbnRlXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgnbm90YXMnLCB7XG4gICAgbm90YToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlRFWFQsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBub3RhX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvZmVzaW9uYWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdwcm9mZXNpb25hbCcsXG4gICAgICAgIGtleTogJ3VzdWFyaW8nXG4gICAgICB9XG4gICAgfSxcbiAgICBmZWNoYToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ25vdGFzJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJub3RhX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJwcm9mZXNpb25hbFwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdwYWNpZW50ZScsIHtcbiAgICBwYWNpZW50ZV9pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIG5vbWJyZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBjZWx1bGFyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDE1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGFjdGl2bzoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkJPT0xFQU4sXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAxXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ3BhY2llbnRlJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwYWNpZW50ZV9pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwibm9tYnJlXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJub21icmVcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdwcm9mZXNpb25hbCcsIHtcbiAgICBwcm9mZXNpb25hbF9pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHVzdWFyaW86IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgbm9tYnJlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGVzcGVjaWFsaWRhZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkNIQVIoNTApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgY2VsdWxhcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygxNSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzAwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAncHJvZmVzaW9uYWwnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInByb2Zlc2lvbmFsX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ1c3VhcmlvXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ1c3VhcmlvXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJylcbmNvbnN0IHsgQXBvbGxvU2VydmVyIH0gPSByZXF1aXJlKCdhcG9sbG8tc2VydmVyLWV4cHJlc3MnKVxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBqd3QgPSAgcmVxdWlyZSgnanNvbndlYnRva2VuJylcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcbmFwcC51c2UoY29ycygpKVxuXG5leHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMFxuXG5jb25zdCBnZXRVc2VyID0gdG9rZW4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpXG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgY29udGV4dDogKHsgcmVxIH0pID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuZ2V0KCdBdXRob3JpemF0aW9uJykgfHwgJydcbiAgICAgICAgcmV0dXJuIHsgdXNlcjogZ2V0VXNlcih0b2tlbi5yZXBsYWNlKCdCZWFyZXInLCAnJykpfVxuICAgICAgfSxcbiAgICAgIGludHJvc3BlY3Rpb246IHRydWUsXG4gICAgICBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgICAgbW9kdWxlczogW1xuICAgICAgICByZXF1aXJlKCcuL2dyYXBocWwvaG9yYXJpb3MuanMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9ncmFwaHFsL3BhY2llbnRlLmpzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vZ3JhcGhxbC9ub3Rhcy5qcycpLFxuICAgICAgICByZXF1aXJlKCcuL2dyYXBocWwvcHJvZmVzaW9uYWwuanMnKVxuICAgIF0sXG59KVxuXG5jb25zdCBzZXJ2ZXJSdW4gPSBhc3luYyAoKSA9PntcbiAgICBhd2FpdCBzZXJ2ZXIuc3RhcnQoKS50aGVuKHJlcz0+e30pXG5cbiAgICBzZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pXG4gICAgXG4gICAgYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4gcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpKVxuICAgIFxuICAgIGFwcC5saXN0ZW4oeyBwb3J0OiBQT1JUIH0sICgpID0+XG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5qAIFNlcnZlciByZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OjUwMDBgKSxcbiAgICApXG59XG5cbnNlcnZlclJ1bigpIl0sIm5hbWVzIjpbIlNlcXVlbGl6ZSIsInJlcXVpcmUiLCJjb25maWciLCJkYiIsInNlcXVlbGl6ZSIsInByb2Nlc3MiLCJlbnYiLCJNWVNRTERBVEFCQVNFIiwiTVlTUUxVU0VSIiwiTVlTUUxQQVNTV09SRCIsImhvc3QiLCJNWVNRTEhPU1QiLCJwb3J0IiwiTVlTUUxQT1JUIiwiZGlhbGVjdCIsImRlZmluZSIsImZyZWV6ZVRhYmxlTmFtZSIsInBvb2wiLCJtYXgiLCJtaW4iLCJhY3F1aXJlIiwiaWRsZSIsIm9wZXJhdG9yc0FsaWFzZXMiLCJtb2RlbHMiLCJmb3JFYWNoIiwibW9kZWwiLCJzZXFNb2RlbCIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXNzb2NpYXRlIiwiZ3FsIiwiT3AiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsIkR1cmF0aW9uIiwiSEFMRkhPVVIiLCJPTkVIT1VSIiwiT05FSEFMRiIsIlRXT0hPVVJTIiwiQWxsb3dlZEhvdXIiLCJOSU5FIiwiTklORUgiLCJURU4iLCJURU5IIiwiRUxFVkVOIiwiRUxFVkVOSCIsIlRXRUxWRSIsIlRXRUxWRUgiLCJGT1VSVEVFTiIsIkZPVVJURUVOSCIsIkZJRlRFRU4iLCJGSUZURUVOSCIsIlNJWFRFRU4iLCJTSVhURUVOSCIsIlNFVkVOVEVFTiIsIlNFVkVOVEVFTkgiLCJRdWVyeSIsImhvcmFyaW9zIiwiXyIsInByb2Zlc2lvbmFsIiwicHJvZiIsInR1cm5vcyIsImZpbmRBbGwiLCJ3aGVyZSIsIkVycm9yIiwiaG9yYXJpb1BvckRpYSIsImZlY2hhIiwiYW5kIiwiTXV0YXRpb24iLCJhZ3JlZ2FyQ2l0YSIsImlucHV0IiwiZmluZE9uZSIsImhvcmEiLCJkYXRhIiwiY3JlYXRlIiwiY2l0YSIsImVsaW1pbmFySG9yYXJpbyIsInR1cm5vX2lkIiwiZGVzdHJveSIsImhvcmFyaW8iLCJub3RhcyIsIm5vdGVzIiwibWVzc2FnZSIsIm5vdGEiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJmaW5kQnlQayIsImlkIiwiYWdyZWdhck5vdGEiLCJjcmVhdGVOb3RlIiwiZWxpbWluYXJOb3RhIiwibm90YV9pZCIsInBhY2llbnRlcyIsInBhY2llbnRlIiwiYWN0aXZvIiwibm9tYnJlIiwicGFjaWVudCIsImFncmVnYXJQYWNpZW50ZSIsImNyZWF0ZVBhY2llbnQiLCJkZXNhY3RpdmFyUGFjaWVudGUiLCJwYWNpZW50ZV9pZCIsInVwZGF0ZSIsImJjcnlwdCIsImpzb253ZWJ0b2tlbiIsInNhbHRSb3VuZHMiLCJwcm9mZXNpb25hbGVzIiwicmVnaXN0ZXIiLCJlc3BlY2lhbGlkYWQiLCJjZWx1bGFyIiwiYXZhdGFyIiwidXN1YXJpbyIsImVtYWlsIiwiaGFzaCIsInBhc3N3b3JkIiwidXNlciIsImxvZ2luIiwiY29tcGFyZSIsImlzVmFsaWQiLCJ0b2tlbiIsInNpZ24iLCJwcm9mZXNpb25hbF9pZCIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiRGF0YVR5cGVzIiwiYXV0b0luY3JlbWVudCIsInR5cGUiLCJJTlRFR0VSIiwiYWxsb3dOdWxsIiwicHJpbWFyeUtleSIsIlNUUklORyIsInJlZmVyZW5jZXMiLCJFTlVNIiwiZHVyYWNpb24iLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwiaW5kZXhlcyIsInVuaXF1ZSIsInVzaW5nIiwiZmllbGRzIiwiVEVYVCIsIkJPT0xFQU4iLCJkZWZhdWx0VmFsdWUiLCJDSEFSIiwiZXhwcmVzcyIsImJvZHlQYXJzZXIiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwiand0IiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIlBPUlQiLCJnZXRVc2VyIiwidmVyaWZ5IiwiZXJyb3IiLCJzZXJ2ZXIiLCJyZXEiLCJnZXQiLCJyZXBsYWNlIiwiaW50cm9zcGVjdGlvbiIsInBsYXlncm91bmQiLCJtb2R1bGVzIiwic2VydmVyUnVuIiwic3RhcnQiLCJ0aGVuIiwicmVzIiwiYXBwbHlNaWRkbGV3YXJlIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9