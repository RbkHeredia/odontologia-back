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
////SET NODE_OPTIONS=--openssl-legacy-provider

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtFQUFBLENBQ0o7RUFBQSxnQkFWS1IsU0FBUztJQUFBO0VBQUE7QUFBQSxHQVVkO0FBRURBLFNBQVMsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL2dyYXBocWwvaG9yYXJpb3MuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9ncmFwaHFsL25vdGFzLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9hcHAvZ3JhcGhxbC9wYWNpZW50ZS5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vYXBwL2dyYXBocWwvcHJvZmVzaW9uYWwuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9ob3Jhcmlvcy5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrLy4vbW9kZWxzL25vdGFzLmpzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svLi9tb2RlbHMvcGFjaWVudGUuanMiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL21vZGVscy9wcm9mZXNpb25hbC5qcyIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay9leHRlcm5hbCBjb21tb25qcyBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kb250b2xvZ2lhLWJhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZG9udG9sb2dpYS1iYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RvbnRvbG9naWEtYmFjay8uL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcblxyXG52YXIgZGIgPSB7fVxyXG5cclxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIHByb2Nlc3MuZW52LkRBVEFCQVNFX05BTUUsXHJcbiAgICBwcm9jZXNzLmVudi5EQVRBQkFTRV9VU0VSLFxyXG4gICAgcHJvY2Vzcy5lbnYuREFUQUJBU0VfUEFTU1dPUkQsXHJcbiAgICB7XHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfSE9TVCxcclxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9QT1JULFxyXG4gICAgICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICAgICAgZGVmaW5lOiB7XHJcbiAgICAgICAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvb2w6IHtcclxuICAgICAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgICAgICAgICBpZGxlOiAxMDAwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIDxodHRwOi8vZG9jcy5zZXF1ZWxpemVqcy5jb20vbWFudWFsL3R1dG9yaWFsL3F1ZXJ5aW5nLmh0bWwjb3BlcmF0b3JzPlxyXG4gICAgICAgIG9wZXJhdG9yc0FsaWFzZXM6IDAsXHJcbiAgICB9LFxyXG4pXHJcblxyXG5sZXQgbW9kZWxzID0gW1xyXG4gIHJlcXVpcmUoJy4uL21vZGVscy9ob3Jhcmlvcy5qcycpLFxyXG4gIHJlcXVpcmUoJy4uL21vZGVscy9ub3Rhcy5qcycpLFxyXG4gIHJlcXVpcmUoJy4uL21vZGVscy9wYWNpZW50ZS5qcycpLFxyXG4gIHJlcXVpcmUoJy4uL21vZGVscy9wcm9mZXNpb25hbC5qcycpLFxyXG5cclxuXVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBtb2RlbHNcclxubW9kZWxzLmZvckVhY2gobW9kZWwgPT4ge1xyXG4gICAgY29uc3Qgc2VxTW9kZWwgPSBtb2RlbChzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcclxuICAgIGRiW3NlcU1vZGVsLm5hbWVdID0gc2VxTW9kZWxcclxufSlcclxuXHJcbi8vIEFwcGx5IGFzc29jaWF0aW9uc1xyXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgaWYgKCdhc3NvY2lhdGUnIGluIGRiW2tleV0pIHtcclxuICAgICAgICBkYltrZXldLmFzc29jaWF0ZShkYilcclxuICAgIH1cclxufSlcclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZVxyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXHJcbmNvbnN0IHsgT3AgfSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgaG9yYXJpb3MocHJvZmVzaW9uYWw6U3RyaW5nKTogW0hvcmFyaW9dXHJcbiAgICBob3JhcmlvUG9yRGlhKGZlY2hhOlN0cmluZywgcHJvZmVzaW9uYWw6U3RyaW5nKTpbSG9yYXJpb11cclxuICB9XHJcbiAgdHlwZSBIb3Jhcmlve1xyXG4gICAgdHVybm9faWQ6SURcclxuICAgIHByb2Zlc2lvbmFsOiBTdHJpbmdcclxuICAgIHBhY2llbnRlOlN0cmluZ1xyXG4gICAgZHVyYWNpb246RHVyYXRpb24hXHJcbiAgICBob3JhOiBBbGxvd2VkSG91ciFcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBlbnVtIER1cmF0aW9ue1xyXG4gICAgSEFMRlxyXG4gICAgT05FXHJcbiAgICBPTkVIXHJcbiAgICBUV09cclxuICB9XHJcbiAgZW51bSBBbGxvd2VkSG91cntcclxuICAgIE5JTkVcclxuICAgIE5JTkVIXHJcbiAgICBURU5cclxuICAgIFRFTkhcclxuICAgIEVMRVZFTlxyXG4gICAgRUxFVkVOSFxyXG4gICAgVFdFTFZFXHJcbiAgICBUV0VMVkVIXHJcbiAgICBGT1VSVEVFTlxyXG4gICAgRk9VUlRFRU5IXHJcbiAgICBGSUZURUVOXHJcbiAgICBGSUZURUVOSFxyXG4gICAgU0lYVEVFTlxyXG4gICAgU0lYVEVFTkhcclxuICAgIFNFVkVOVEVFTlxyXG4gICAgU0VWRU5URUVOSFxyXG4gIH1cclxuICBcclxuICBpbnB1dCBhZGREYXRle1xyXG4gICAgcHJvZmVzaW9uYWw6U3RyaW5nXHJcbiAgICBwYWNpZW50ZTogU3RyaW5nXHJcbiAgICBkdXJhY2lvbjpEdXJhdGlvbiFcclxuICAgIGhvcmE6QWxsb3dlZEhvdXIhXHJcbiAgICBmZWNoYTpTdHJpbmdcclxuICB9XHJcbiAgXHJcbiAgZXh0ZW5kIHR5cGUgTXV0YXRpb257XHJcbiAgICBhZ3JlZ2FyQ2l0YShpbnB1dDphZGREYXRlKTpIb3JhcmlvXHJcbiAgICBlbGltaW5hckhvcmFyaW8odHVybm9faWQ6SW50KTpIb3JhcmlvXHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgRHVyYXRpb246e1xyXG4gICAgSEFMRkhPVVI6ICcwOjMwJyxcclxuICAgIE9ORUhPVVI6ICcxOjAwJyxcclxuICAgIE9ORUhBTEY6ICcxOjMwJyxcclxuICAgIFRXT0hPVVJTOiAnMjowMCdcclxuICB9LFxyXG4gIEFsbG93ZWRIb3VyOntcclxuICAgIE5JTkU6ICc5OjAwJyxcclxuICAgIE5JTkVIOiAnOTozMCcsXHJcbiAgICBURU46IFwiMTA6MDBcIixcclxuICAgIFRFTkg6ICcxMDozMCcsXHJcbiAgICBFTEVWRU46ICcxMTowMCcsXHJcbiAgICBFTEVWRU5IOiAnMTE6MzAnLFxyXG4gICAgVFdFTFZFOiAnMTI6MDAnLFxyXG4gICAgVFdFTFZFSDogJzEyOjMwJyxcclxuICAgIEZPVVJURUVOOiAnMTQ6MDAnLFxyXG4gICAgRk9VUlRFRU5IOiAnMTQ6MzAnLFxyXG4gICAgRklGVEVFTjogJzE1OjAwJyxcclxuICAgIEZJRlRFRU5IOiAnMTU6MzAnLFxyXG4gICAgU0lYVEVFTjogJzE2OjAwJyxcclxuICAgIFNJWFRFRU5IOiAnMTY6MzAnLFxyXG4gICAgU0VWRU5URUVOOiAnMTc6MDAnLFxyXG4gICAgU0VWRU5URUVOSDogJzE3OjMwJyxcclxuICB9LFxyXG4gIFF1ZXJ5OiB7XHJcbiAgICBob3JhcmlvczogYXN5bmMgKF8se3Byb2Zlc2lvbmFsfSkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBwcm9mID0gcHJvZmVzaW9uYWw7XHJcbiAgICAgICAgbGV0IHR1cm5vcyA9IFtdO1xyXG4gICAgICAgIGlmIChwcm9mID09PSAnbnVsbCcpe1xyXG4gICAgICAgICAgdHVybm9zID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZEFsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0dXJub3MgPSBhd2FpdCBkYi5ob3Jhcmlvcy5maW5kQWxsKHt3aGVyZTp7cHJvZmVzaW9uYWw6cHJvZmVzaW9uYWx9fSlcclxuICAgICAgICB9OyByZXR1cm4gdHVybm9zXHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gaGF5IHR1cm5vcyBwYXJhIG1vc3RyYXInKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBob3JhcmlvUG9yRGlhOiBhc3luYyAoXywge2ZlY2hhLCBwcm9mZXNpb25hbH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgbGV0IHR1cm5vcyA9IFtdO1xyXG4gICAgICAgIGlmIChwcm9mZXNpb25hbCA9PT0gJ2FsbCcpe1xyXG4gICAgICAgICAgdHVybm9zID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZEFsbCh7d2hlcmU6IHtmZWNoYTpmZWNoYX19KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHVybm9zID0gYXdhaXQgZGIuaG9yYXJpb3MuZmluZEFsbCh7d2hlcmU6e1tPcC5hbmRdOltcclxuICAgICAgICAgICAge3Byb2Zlc2lvbmFsOnByb2Zlc2lvbmFsfSxcclxuICAgICAgICAgICAge2ZlY2hhOiBmZWNoYX1cclxuICAgICAgICAgIF19fSlcclxuICAgICAgICB9OyByZXR1cm4gdHVybm9zXHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3InKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBNdXRhdGlvbjp7XHJcbiAgICBhZ3JlZ2FyQ2l0YTogYXN5bmMgKF8sIHtpbnB1dH0pID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmhvcmFyaW9zLmZpbmRPbmUoe3doZXJlOntbT3AuYW5kXTogW1xyXG4gICAgICAgICAgeyBmZWNoYTogaW5wdXQuZmVjaGEgfSxcclxuICAgICAgICAgIHsgaG9yYTogaW5wdXQuaG9yYSB9XHJcbiAgICAgICAgXX19KVxyXG4gICAgICAgIGlmIChkYXRhKXtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneWEgZXhpc3RlIGVzZSBob3JhcmlvJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgY2l0YSA9IGF3YWl0IGRiLmhvcmFyaW9zLmNyZWF0ZShpbnB1dClcclxuICAgICAgICAgIHJldHVybiBjaXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIGFsIGNyZWFyIGxhIGNpdGEnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWxpbWluYXJIb3JhcmlvOiBhc3luYyAoXyx7dHVybm9faWR9KSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGxldCBob3JhcmlvID0gYXdhaXQgZGIuaG9yYXJpb3MuZGVzdHJveSh7d2hlcmU6IHt0dXJub19pZDp0dXJub19pZH19KVxyXG4gICAgICAgIGlmIChob3JhcmlvKXtcclxuICAgICAgICAgIHJldHVybiAnT2snXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnbm8gZXhpc3RlIGhvcmFyaW8nXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGV4aXN0ZSBlbCBob3JhcmlvJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsIGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIG5vdGFzOiBbTm90YV1cclxuICAgIG5vdGEobm90YV9pZDpJRCEpOiBOb3RhXHJcbiAgfVxyXG4gIHR5cGUgTm90YXtcclxuICAgIG5vdGFfaWQ6IElEXHJcbiAgICBub3RhOlN0cmluZ1xyXG4gICAgcHJvZmVzaW9uYWw6U3RyaW5nXHJcbiAgICBmZWNoYTpTdHJpbmdcclxuICB9XHJcbiAgaW5wdXQgYWRkTm90ZXtcclxuICAgIG5vdGE6U3RyaW5nXHJcbiAgICBwcm9mZXNpb25hbDpTdHJpbmdcclxuICAgIGZlY2hhOlN0cmluZ1xyXG4gIH1cclxuICBleHRlbmQgdHlwZSBNdXRhdGlvbntcclxuICAgIGFncmVnYXJOb3RhKGlucHV0OmFkZE5vdGUpOk5vdGFcclxuICAgIGVsaW1pbmFyTm90YShub3RhX2lkOkludCk6Tm90YVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9e1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBub3RhczogYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBhd2FpdCBkYi5ub3Rhcy5maW5kQWxsKCk7XHJcbiAgICAgICAgaWYgKCFub3Rlcyl7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGV4aXN0ZW4gbm90YXMgcGFyYSBtb3N0cmFyJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBub3RhOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxyXG4gICAgICBkYi5ub3Rhcy5maW5kQnlQayhhcmdzLmlkKSxcclxuICB9LFxyXG5cclxuICBNdXRhdGlvbjoge1xyXG4gICAgYWdyZWdhck5vdGE6IGFzeW5jIChfLHtpbnB1dH0pPT4ge1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlTm90ZSA9IGF3YWl0IGRiLm5vdGFzLmNyZWF0ZShpbnB1dClcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY3JlYXRlTm90ZVxyXG4gICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciBhbCBjcmVhciBsYSBub3RhJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVsaW1pbmFyTm90YTogYXN5bmMgKF8se25vdGFfaWR9KSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGxldCBub3RhID0gYXdhaXQgZGIubm90YXMuZGVzdHJveSh7d2hlcmU6IHtub3RhX2lkOm5vdGFfaWR9fSlcclxuICAgICAgICBpZiAobm90YSl7XHJcbiAgICAgICAgICByZXR1cm4gJ09rJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ25vIGV4aXN0ZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBleGlzdGUgbGEgbm90YScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgIHBhY2llbnRlczogW1BhY2llbnRlXVxyXG4gICAgcGFjaWVudGUocGFjaWVudGVfaWQ6SUQhKTogUGFjaWVudGUgICBcclxuICB9XHJcbiAgdHlwZSBQYWNpZW50ZXtcclxuICAgIHBhY2llbnRlX2lkOklEXHJcbiAgICBub21icmU6IFN0cmluZ1xyXG4gICAgY2VsdWxhcjpTdHJpbmdcclxuICAgIGFjdGl2bzpCb29sZWFuXHJcbiAgfVxyXG4gIGlucHV0IGFkZFBhY2llbnR7XHJcbiAgICBub21icmU6U3RyaW5nXHJcbiAgICBjZWx1bGFyOlN0cmluZ1xyXG4gICAgYWN0aXZvOkJvb2xlYW5cclxuICB9XHJcbiAgaW5wdXQgc2V0UGFjaWVudHtcclxuICAgIGFjdGl2bzpCb29sZWFuXHJcbiAgfVxyXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9ue1xyXG4gICAgYWdyZWdhclBhY2llbnRlKGlucHV0OmFkZFBhY2llbnQpOlBhY2llbnRlXHJcbiAgICBkZXNhY3RpdmFyUGFjaWVudGUocGFjaWVudGVfaWQ6SW50LCBpbnB1dDogc2V0UGFjaWVudCk6UGFjaWVudGVcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeToge1xyXG4gICAgcGFjaWVudGVzOiBhc3luYyAoKSA9PiBkYi5wYWNpZW50ZS5maW5kQWxsKHt3aGVyZTp7YWN0aXZvOnRydWV9fSksXHJcbiAgICBwYWNpZW50ZTogYXN5bmMgKGFyZ3MpID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcGFjaWVudCA9IGF3YWl0IGRiLnBhY2llbnRlLmZpbmRBbGwoe3doZXJlOiB7bm9tYnJlOmFyZ3Mubm9tYnJlfX0pXHJcbiAgICAgICAgaWYoIXBhY2llbnQpe1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBleGlzdGUgZWwgcGFjaWVudGUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcGFjaWVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBNdXRhdGlvbjp7XHJcbiAgICBhZ3JlZ2FyUGFjaWVudGU6IGFzeW5jKF8sIHtpbnB1dH0pPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjcmVhdGVQYWNpZW50ID0gZGIucGFjaWVudGUuY3JlYXRlKGlucHV0KVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVQYWNpZW50XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc2UgcHVkbyBjcmVhciBlbCBudWV2byBwYWNpZW50ZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZXNhY3RpdmFyUGFjaWVudGU6IGFzeW5jKF8se2lucHV0LCBwYWNpZW50ZV9pZH0pPT57XHJcbiAgICAgIGRiLnBhY2llbnRlLnVwZGF0ZShpbnB1dCAse3doZXJlOntwYWNpZW50ZV9pZDpwYWNpZW50ZV9pZH19KVxyXG4gICAgfSxcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGF0YWJhc2UnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmNvbnN0IGpzb253ZWJ0b2tlbiA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWwgYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5e1xyXG4gICAgcHJvZmVzaW9uYWxlczpbUHJvZmVzaW9uYWxdXHJcbiAgICBwcm9mZXNpb25hbChwcm9mZXNpb25hbF9pZDpJRCEpOlByb2Zlc2lvbmFsXHJcbiAgfVxyXG4gIHR5cGUgUHJvZmVzaW9uYWx7XHJcbiAgICBwcm9mZXNpb25hbF9pZDpJRFxyXG4gICAgdXN1YXJpbzpTdHJpbmdcclxuICAgIHBhc3N3b3JkOlN0cmluZ1xyXG4gICAgbm9tYnJlOlN0cmluZ1xyXG4gICAgZXNwZWNpYWxpZGFkOlN0cmluZ1xyXG4gICAgY2VsdWxhcjpJbnRcclxuICAgIGVtYWlsOlN0cmluZ1xyXG4gICAgYXZhdGFyOlN0cmluZ1xyXG4gIH1cclxuICB0eXBlIEF1dGhQYXlsb2FkIHtcclxuICAgIHRva2VuOiBTdHJpbmchXHJcbiAgICB1c2VyOiBQcm9mZXNpb25hbCFcclxuICB9XHJcbiAgaW5wdXQgYWRkUHJvZmVzaW9uYWx7XHJcbiAgICB1c3VhcmlvOlN0cmluZ1xyXG4gICAgcGFzc3dvcmQ6U3RyaW5nXHJcbiAgICBub21icmU6U3RyaW5nXHJcbiAgICBlc3BlY2lhbGlkYWQ6U3RyaW5nXHJcbiAgICBjZWx1bGFyOkludFxyXG4gICAgZW1haWw6U3RyaW5nXHJcbiAgICBhdmF0YXI6U3RyaW5nXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9ue1xyXG4gICAgcmVnaXN0ZXIoaW5wdXQ6YWRkUHJvZmVzaW9uYWwpOkF1dGhQYXlsb2FkIVxyXG4gICAgbG9naW4gKGVtYWlsOiBTdHJpbmchLCBwYXNzd29yZDogU3RyaW5nISk6IEF1dGhQYXlsb2FkIVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeTp7XHJcbiAgICBwcm9mZXNpb25hbGVzOiBhc3luYyAoKSA9PiBkYi5wcm9mZXNpb25hbC5maW5kQWxsKCksXHJcbiAgICBwcm9mZXNpb25hbDogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cclxuICAgICAgZGIucHJvZmVzaW9uYWwuZmluZEJ5UGsoYXJncy5pZCksXHJcbiAgfSxcclxuICBNdXRhdGlvbjp7XHJcbiAgICByZWdpc3RlcjogYXN5bmMgKF8sIHsgaW5wdXQgfSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5wcm9mZXNpb25hbC5jcmVhdGUoe1xyXG4gICAgICAgICAgbm9tYnJlOiBpbnB1dC5ub21icmUsXHJcbiAgICAgICAgICBlc3BlY2lhbGlkYWQ6IGlucHV0LmVzcGVjaWFsaWRhZCxcclxuICAgICAgICAgIGNlbHVsYXI6IGlucHV0LmNlbHVsYXIsXHJcbiAgICAgICAgICBhdmF0YXI6IGlucHV0LmF2YXRhcixcclxuICAgICAgICAgIHVzdWFyaW86IGlucHV0LnVzdWFyaW8sXHJcbiAgICAgICAgICBlbWFpbDogaW5wdXQuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogYXdhaXQgYmNyeXB0Lmhhc2goaW5wdXQucGFzc3dvcmQsIHNhbHRSb3VuZHMpXHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB1c2VyLCBtZXNzYWdlOiBcIkF1dGhlbnRpY2F0aW9uIHN1Y2Nlc2Z1bGxcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dpbjogYXN5bmMgKF8sIHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucHJvZmVzaW9uYWwuZmluZE9uZSh7IHdoZXJlOiB7IGVtYWlsIH19KVxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIHdpdGggdGhhdCBlbWFpbCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZClcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IHBhc3N3b3JkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIGp3dFxyXG4gICAgICAgIGNvbnN0IHRva2VuID0ganNvbndlYnRva2VuLnNpZ24oXHJcbiAgICAgICAgICB7IGlkOiB1c2VyLnByb2Zlc2lvbmFsX2lkLCBlbWFpbDogdXNlci5lbWFpbH0sXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxyXG4gICAgICAgICAgeyBleHBpcmVzSW46ICcxZCd9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIHRva2VuLCB1c2VyXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIH1cclxufSIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgnaG9yYXJpb3MnLCB7XG4gICAgdHVybm9faWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBwcm9mZXNpb25hbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3Byb2Zlc2lvbmFsJyxcbiAgICAgICAga2V5OiAndXN1YXJpbydcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhY2llbnRlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDUwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAncGFjaWVudGUnLFxuICAgICAgICBrZXk6ICdub21icmUnXG4gICAgICB9XG4gICAgfSxcbiAgICBob3JhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuRU5VTSgnTklORScsJ05JTkVIJywnVEVOJywnVEVOSCcsJ0VMRVZFTicsJ0VMRVZFTkgnLCdUV0VMVkUnLCdUV0VMVkVIJywnRk9VUlRFRU4nLCdGT1VSVEVFTkgnLCdGSUZURUVOJywnRklGVEVFTkgnLCdTSVhURUVOJywnU0lYVEVFTkgnLCdTRVZFTlRFRU4nLCdTRVZFTlRFRU5IJyksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIGR1cmFjaW9uOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuRU5VTSgnSEFMRicsICdPTkUnLCAnT05FSCcsICdUV08nKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGZlY2hhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKCksXG4gICAgICBhbGxvd051bGw6ZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAnaG9yYXJpb3MnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInR1cm5vX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJma19ob3JhcmlvX3Byb2Zlc2lvbmFsXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwcm9mZXNpb25hbFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZmtfaG9yYXJpb19wYWNpZW50ZVwiLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicGFjaWVudGVcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdub3RhcycsIHtcbiAgICBub3RhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuVEVYVCxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIG5vdGFfaWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBwcm9mZXNpb25hbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ3Byb2Zlc2lvbmFsJyxcbiAgICAgICAga2V5OiAndXN1YXJpbydcbiAgICAgIH1cbiAgICB9LFxuICAgIGZlY2hhOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDIwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAnbm90YXMnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIm5vdGFfaWRcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcInByb2Zlc2lvbmFsXCIsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJwcm9mZXNpb25hbFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbn07XG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3BhY2llbnRlJywge1xuICAgIHBhY2llbnRlX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgbm9tYnJlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDMwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGNlbHVsYXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgYWN0aXZvOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuQk9PTEVBTixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6IDFcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAncGFjaWVudGUnLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInBhY2llbnRlX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJub21icmVcIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIm5vbWJyZVwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbn07XG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3Byb2Zlc2lvbmFsJywge1xuICAgIHByb2Zlc2lvbmFsX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgdXN1YXJpbzoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBub21icmU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgZXNwZWNpYWxpZGFkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuQ0hBUig1MCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBjZWx1bGFyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDE1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygzMDApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICB0YWJsZU5hbWU6ICdwcm9mZXNpb25hbCcsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgaW5kZXhlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBSSU1BUllcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwicHJvZmVzaW9uYWxfaWRcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcInVzdWFyaW9cIixcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInVzdWFyaW9cIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxuY29uc3QgeyBBcG9sbG9TZXJ2ZXIgfSA9IHJlcXVpcmUoJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcycpXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmNvbnN0IGp3dCA9ICByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxuYXBwLnVzZShjb3JzKCkpXG4vLy8vU0VUIE5PREVfT1BUSU9OUz0tLW9wZW5zc2wtbGVnYWN5LXByb3ZpZGVyXG5cbmNvbnN0IGdldFVzZXIgPSB0b2tlbiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVClcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBjb250ZXh0OiAoeyByZXEgfSkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5nZXQoJ0F1dGhvcml6YXRpb24nKSB8fCAnJ1xuICAgICAgICByZXR1cm4geyB1c2VyOiBnZXRVc2VyKHRva2VuLnJlcGxhY2UoJ0JlYXJlcicsICcnKSl9XG4gICAgICB9LFxuICAgICAgaW50cm9zcGVjdGlvbjogdHJ1ZSxcbiAgICAgIHBsYXlncm91bmQ6IHRydWUsXG4gICAgICBtb2R1bGVzOiBbXG4gICAgICAgIHJlcXVpcmUoJy4vZ3JhcGhxbC9ob3Jhcmlvcy5qcycpLFxuICAgICAgICByZXF1aXJlKCcuL2dyYXBocWwvcGFjaWVudGUuanMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9ncmFwaHFsL25vdGFzLmpzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vZ3JhcGhxbC9wcm9mZXNpb25hbC5qcycpXG4gICAgXSxcbn0pXG5cbmNvbnN0IHNlcnZlclJ1biA9IGFzeW5jICgpID0+e1xuICAgIGF3YWl0IHNlcnZlci5zdGFydCgpLnRoZW4ocmVzPT57fSlcblxuICAgIHNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSlcbiAgICBcbiAgICBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiByZXMuc2VuZCgnSGVsbG8gV29ybGQhJykpXG4gICAgXG4gICAgYXBwLmxpc3Rlbih7IHBvcnQ6IDUwMDAgfSwgKCkgPT5cbiAgICAgICAgY29uc29sZS5sb2coYPCfmoAgU2VydmVyIHJlYWR5IGF0IGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMGApLFxuICAgIClcbn1cblxuc2VydmVyUnVuKCkiXSwibmFtZXMiOlsiU2VxdWVsaXplIiwicmVxdWlyZSIsImNvbmZpZyIsImRiIiwic2VxdWVsaXplIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX05BTUUiLCJEQVRBQkFTRV9VU0VSIiwiREFUQUJBU0VfUEFTU1dPUkQiLCJob3N0IiwiREFUQUJBU0VfSE9TVCIsInBvcnQiLCJEQVRBQkFTRV9QT1JUIiwiZGlhbGVjdCIsImRlZmluZSIsImZyZWV6ZVRhYmxlTmFtZSIsInBvb2wiLCJtYXgiLCJtaW4iLCJhY3F1aXJlIiwiaWRsZSIsIm9wZXJhdG9yc0FsaWFzZXMiLCJtb2RlbHMiLCJmb3JFYWNoIiwibW9kZWwiLCJzZXFNb2RlbCIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXNzb2NpYXRlIiwiZ3FsIiwiT3AiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsIkR1cmF0aW9uIiwiSEFMRkhPVVIiLCJPTkVIT1VSIiwiT05FSEFMRiIsIlRXT0hPVVJTIiwiQWxsb3dlZEhvdXIiLCJOSU5FIiwiTklORUgiLCJURU4iLCJURU5IIiwiRUxFVkVOIiwiRUxFVkVOSCIsIlRXRUxWRSIsIlRXRUxWRUgiLCJGT1VSVEVFTiIsIkZPVVJURUVOSCIsIkZJRlRFRU4iLCJGSUZURUVOSCIsIlNJWFRFRU4iLCJTSVhURUVOSCIsIlNFVkVOVEVFTiIsIlNFVkVOVEVFTkgiLCJRdWVyeSIsImhvcmFyaW9zIiwiXyIsInByb2Zlc2lvbmFsIiwicHJvZiIsInR1cm5vcyIsImZpbmRBbGwiLCJ3aGVyZSIsIkVycm9yIiwiaG9yYXJpb1BvckRpYSIsImZlY2hhIiwiYW5kIiwiTXV0YXRpb24iLCJhZ3JlZ2FyQ2l0YSIsImlucHV0IiwiZmluZE9uZSIsImhvcmEiLCJkYXRhIiwiY3JlYXRlIiwiY2l0YSIsImVsaW1pbmFySG9yYXJpbyIsInR1cm5vX2lkIiwiZGVzdHJveSIsImhvcmFyaW8iLCJub3RhcyIsIm5vdGVzIiwibWVzc2FnZSIsIm5vdGEiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJmaW5kQnlQayIsImlkIiwiYWdyZWdhck5vdGEiLCJjcmVhdGVOb3RlIiwiZWxpbWluYXJOb3RhIiwibm90YV9pZCIsInBhY2llbnRlcyIsInBhY2llbnRlIiwiYWN0aXZvIiwibm9tYnJlIiwicGFjaWVudCIsImFncmVnYXJQYWNpZW50ZSIsImNyZWF0ZVBhY2llbnQiLCJkZXNhY3RpdmFyUGFjaWVudGUiLCJwYWNpZW50ZV9pZCIsInVwZGF0ZSIsImJjcnlwdCIsImpzb253ZWJ0b2tlbiIsInNhbHRSb3VuZHMiLCJwcm9mZXNpb25hbGVzIiwicmVnaXN0ZXIiLCJlc3BlY2lhbGlkYWQiLCJjZWx1bGFyIiwiYXZhdGFyIiwidXN1YXJpbyIsImVtYWlsIiwiaGFzaCIsInBhc3N3b3JkIiwidXNlciIsImxvZ2luIiwiY29tcGFyZSIsImlzVmFsaWQiLCJ0b2tlbiIsInNpZ24iLCJwcm9mZXNpb25hbF9pZCIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiRGF0YVR5cGVzIiwiYXV0b0luY3JlbWVudCIsInR5cGUiLCJJTlRFR0VSIiwiYWxsb3dOdWxsIiwicHJpbWFyeUtleSIsIlNUUklORyIsInJlZmVyZW5jZXMiLCJFTlVNIiwiZHVyYWNpb24iLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwiaW5kZXhlcyIsInVuaXF1ZSIsInVzaW5nIiwiZmllbGRzIiwiVEVYVCIsIkJPT0xFQU4iLCJkZWZhdWx0VmFsdWUiLCJDSEFSIiwiZXhwcmVzcyIsImJvZHlQYXJzZXIiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwiand0IiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImdldFVzZXIiLCJ2ZXJpZnkiLCJlcnJvciIsInNlcnZlciIsInJlcSIsImdldCIsInJlcGxhY2UiLCJpbnRyb3NwZWN0aW9uIiwicGxheWdyb3VuZCIsIm1vZHVsZXMiLCJzZXJ2ZXJSdW4iLCJzdGFydCIsInRoZW4iLCJyZXMiLCJhcHBseU1pZGRsZXdhcmUiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=