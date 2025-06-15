/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 47:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-undef */
var _require = __webpack_require__(818),
  config = _require.config;
config();

// eslint-disable-next-line no-undef
module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    // Use snake_case for column names
    underscoredAll: true,
    // Use snake_case for all table names
    'createdAt': 'created_at',
    // Rename createdAt to created_at
    'updatedAt': 'updated_at' // Rename updatedAt to updated_at
  },
  dialcetOptions: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
};

/***/ }),

/***/ 818:
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

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
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
// EXTERNAL MODULE: external "dotenv"
var external_dotenv_ = __webpack_require__(818);
;// external "sequelize"
const external_sequelize_namespaceObject = require("sequelize");
var external_sequelize_default = /*#__PURE__*/__webpack_require__.n(external_sequelize_namespaceObject);
;// external "bcryptjs"
const external_bcryptjs_namespaceObject = require("bcryptjs");
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_namespaceObject);
;// ./src/utils/generate_hash.js

function generateHash(password) {
  var salt = external_bcryptjs_default().genSaltSync(10);
  var hash = external_bcryptjs_default().hashSync(password, salt);
  return hash;
}
function compareHash(password, hash) {
  return bcrypt.compareSync(password, hash);
}

;// ./src/models/Aluno.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Aluno = /*#__PURE__*/function (_Model) {
  function Aluno() {
    _classCallCheck(this, Aluno);
    return _callSuper(this, Aluno, arguments);
  }
  _inherits(Aluno, _Model);
  return _createClass(Aluno, null, [{
    key: "init",
    value: function init(sequelize) {
      _superPropGet(Aluno, "init", this, 2)([{
        id: {
          type: external_sequelize_namespaceObject.DataTypes.UUID,
          defaultValue: external_sequelize_namespaceObject.DataTypes.UUIDV4,
          primaryKey: true
        },
        nome: {
          type: external_sequelize_namespaceObject.Sequelize.STRING(100),
          allowNull: false
        },
        sobrenome: {
          type: external_sequelize_namespaceObject.Sequelize.STRING(100),
          allowNull: false
        },
        idade: {
          type: external_sequelize_namespaceObject.Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 1
          }
        },
        peso: {
          type: external_sequelize_namespaceObject.Sequelize.FLOAT,
          allowNull: false
        },
        altura: {
          type: external_sequelize_namespaceObject.Sequelize.FLOAT,
          allowNull: false
        },
        email: {
          type: external_sequelize_namespaceObject.Sequelize.STRING(100),
          allowNull: true,
          unique: true
        },
        data_nascimento: {
          type: external_sequelize_namespaceObject.Sequelize.DATEONLY,
          allowNull: false
        },
        password: {
          type: external_sequelize_namespaceObject.Sequelize.VIRTUAL,
          allowNull: false,
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha precisa ter entre 6 e 50 caracteres'
            }
          }
        },
        password_hash: {
          type: external_sequelize_namespaceObject.Sequelize.STRING,
          allowNull: false,
          defaultValue: ''
        }
      }, {
        sequelize: sequelize,
        tableName: "alunos"
      }]);
      this.addHook('beforeSave', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(aluno) {
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (aluno.password) {
                  aluno.password_hash = generateHash(aluno.password);
                }
              case 1:
                return _context.a(2);
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return this;
    }
  }, {
    key: "associate",
    value: function associate(models) {
      this.hasOne(models.Foto, {
        foreignKey: 'aluno_id'
      });
    }
  }]);
}(external_sequelize_namespaceObject.Model);

;// ./src/config/photourl.js

(0,external_dotenv_.config)();
/* harmony default export */ const photourl = ({
  url: "".concat(process.env.API_URL)
});
;// ./src/models/Foto.js
function Foto_typeof(o) { "@babel/helpers - typeof"; return Foto_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Foto_typeof(o); }
function Foto_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Foto_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Foto_toPropertyKey(o.key), o); } }
function Foto_createClass(e, r, t) { return r && Foto_defineProperties(e.prototype, r), t && Foto_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Foto_toPropertyKey(t) { var i = Foto_toPrimitive(t, "string"); return "symbol" == Foto_typeof(i) ? i : i + ""; }
function Foto_toPrimitive(t, r) { if ("object" != Foto_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Foto_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Foto_callSuper(t, o, e) { return o = Foto_getPrototypeOf(o), Foto_possibleConstructorReturn(t, Foto_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Foto_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Foto_possibleConstructorReturn(t, e) { if (e && ("object" == Foto_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Foto_assertThisInitialized(t); }
function Foto_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Foto_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Foto_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Foto_superPropGet(t, o, e, r) { var p = Foto_get(Foto_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function Foto_get() { return Foto_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = Foto_superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, Foto_get.apply(null, arguments); }
function Foto_superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = Foto_getPrototypeOf(t));); return t; }
function Foto_getPrototypeOf(t) { return Foto_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Foto_getPrototypeOf(t); }
function Foto_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Foto_setPrototypeOf(t, e); }
function Foto_setPrototypeOf(t, e) { return Foto_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Foto_setPrototypeOf(t, e); }


var Foto = /*#__PURE__*/function (_Model) {
  function Foto() {
    Foto_classCallCheck(this, Foto);
    return Foto_callSuper(this, Foto, arguments);
  }
  Foto_inherits(Foto, _Model);
  return Foto_createClass(Foto, null, [{
    key: "init",
    value: function init(sequelize) {
      Foto_superPropGet(Foto, "init", this, 2)([{
        id: {
          type: (external_sequelize_default()).INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        originalname: {
          type: (external_sequelize_default()).STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            notNull: {
              msg: 'O nome original da foto é obrigatório'
            }
          }
        },
        nome: {
          type: (external_sequelize_default()).STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            notNull: {
              msg: 'O nome da foto é obrigatório'
            }
          }
        },
        caminho: {
          type: (external_sequelize_default()).STRING,
          allowNull: false
        },
        url: {
          type: (external_sequelize_default()).VIRTUAL,
          get: function get() {
            return "".concat(photourl.url, "/images/").concat(this.getDataValue('nome'));
          }
        }
      }, {
        sequelize: sequelize,
        tableName: 'fotos'
      }]);
      return this;
    }
  }, {
    key: "associate",
    value: function associate(models) {
      this.belongsTo(models.Aluno, {
        foreignKey: 'aluno_id',
        as: 'aluno'
      });
    }
  }]);
}(external_sequelize_namespaceObject.Model);

;// ./src/controllers/student.js
var _excluded = ["password_hash"],
  _excluded2 = ["password_hash"];
function student_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return student_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (student_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, student_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, student_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), student_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", student_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), student_regeneratorDefine2(u), student_regeneratorDefine2(u, o, "Generator"), student_regeneratorDefine2(u, n, function () { return this; }), student_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (student_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function student_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } student_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { student_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, student_regeneratorDefine2(e, r, n, t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function student_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function student_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { student_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { student_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function create_student(_x, _x2) {
  return _create_student.apply(this, arguments);
}
function _create_student() {
  _create_student = student_asyncToGenerator(/*#__PURE__*/student_regenerator().m(function _callee(req, res) {
    var student, _student$get, password_hash, studentData, _t;
    return student_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return Aluno.create(req.body);
        case 1:
          student = _context.v;
          _student$get = student.get(), password_hash = _student$get.password_hash, studentData = _objectWithoutProperties(_student$get, _excluded);
          return _context.a(2, res.status(201).json(studentData));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error("Erro ao criar aluno:", _t);
          return _context.a(2, res.status(500).json({
            erros: "Erro ao criar aluno",
            message: _t === null || _t === void 0 ? void 0 : _t.message
          }));
      }
    }, _callee, null, [[0, 2]]);
  }));
  return _create_student.apply(this, arguments);
}
function get_students(_x3, _x4) {
  return _get_students.apply(this, arguments);
}
function _get_students() {
  _get_students = student_asyncToGenerator(/*#__PURE__*/student_regenerator().m(function _callee2(req, res) {
    var students, _t2;
    return student_regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return Aluno.findAll({
            attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
            order: [['created_at', 'DESC']],
            include: {
              model: Foto
            }
          });
        case 1:
          students = _context2.v;
          if (!(students.length === 0)) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(404).json({
            message: "Nenhum aluno encontrado"
          }));
        case 2:
          return _context2.a(2, res.status(200).json(students));
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error("Erro ao obter aluno:", _t2);
          return _context2.a(2, res.status(500).json({
            erros: "Erro ao obter aluno",
            message: _t2 === null || _t2 === void 0 ? void 0 : _t2.message
          }));
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return _get_students.apply(this, arguments);
}
function get_student(_x5, _x6) {
  return _get_student.apply(this, arguments);
}
function _get_student() {
  _get_student = student_asyncToGenerator(/*#__PURE__*/student_regenerator().m(function _callee3(req, res) {
    var id, student, _t3;
    return student_regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          id = req.params.id;
          _context3.n = 1;
          return Aluno.findByPk(id, {
            attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
            include: {
              model: Foto
            }
          });
        case 1:
          student = _context3.v;
          if (student) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            message: "Aluno não encontrado"
          }));
        case 2:
          return _context3.a(2, res.status(200).json(student));
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          console.error("Erro ao obter aluno:", _t3);
          return _context3.a(2, res.status(500).json({
            erros: "Erro ao obter aluno",
            message: _t3 === null || _t3 === void 0 ? void 0 : _t3.message
          }));
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return _get_student.apply(this, arguments);
}
function update_student(_x7, _x8) {
  return _update_student.apply(this, arguments);
}
function _update_student() {
  _update_student = student_asyncToGenerator(/*#__PURE__*/student_regenerator().m(function _callee4(req, res) {
    var student, updatedStudent, _updatedStudent$get, password_hash, studentData, _t4;
    return student_regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return Aluno.findByPk(req.params.id);
        case 1:
          student = _context4.v;
          if (student) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            message: "Aluno não encontrado"
          }));
        case 2:
          _context4.n = 3;
          return student.update(req.body);
        case 3:
          updatedStudent = _context4.v;
          _updatedStudent$get = updatedStudent.get(), password_hash = _updatedStudent$get.password_hash, studentData = _objectWithoutProperties(_updatedStudent$get, _excluded2);
          return _context4.a(2, res.status(200).json(studentData));
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          console.error("Erro ao atualizar aluno:", _t4);
          return _context4.a(2, res.status(500).json({
            erros: "Erro ao atualizar aluno",
            message: _t4 === null || _t4 === void 0 ? void 0 : _t4.message
          }));
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return _update_student.apply(this, arguments);
}
function delete_student(_x9, _x0) {
  return _delete_student.apply(this, arguments);
}
function _delete_student() {
  _delete_student = student_asyncToGenerator(/*#__PURE__*/student_regenerator().m(function _callee5(req, res) {
    var id, student, _t5;
    return student_regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.p = 0;
          id = req.params.id;
          _context5.n = 1;
          return Aluno.findByPk(id);
        case 1:
          student = _context5.v;
          if (student) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, res.status(404).json({
            message: "Aluno não encontrado"
          }));
        case 2:
          _context5.n = 3;
          return student.destroy();
        case 3:
          return _context5.a(2, res.status(200).json({
            message: "Aluno deletado com sucesso"
          }));
        case 4:
          _context5.p = 4;
          _t5 = _context5.v;
          console.log("Erro ao deletar aluno: ", _t5);
          return _context5.a(2, res.status(500).json({
            erros: "Erro ao deletar aluno",
            message: _t5 === null || _t5 === void 0 ? void 0 : _t5.message
          }));
      }
    }, _callee5, null, [[0, 4]]);
  }));
  return _delete_student.apply(this, arguments);
}
;// external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// ./src/middlewares/jwt_verify.js
function jwt_verify_typeof(o) { "@babel/helpers - typeof"; return jwt_verify_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, jwt_verify_typeof(o); }
function jwt_verify_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return jwt_verify_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (jwt_verify_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, jwt_verify_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, jwt_verify_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), jwt_verify_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", jwt_verify_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), jwt_verify_regeneratorDefine2(u), jwt_verify_regeneratorDefine2(u, o, "Generator"), jwt_verify_regeneratorDefine2(u, n, function () { return this; }), jwt_verify_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (jwt_verify_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function jwt_verify_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } jwt_verify_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { jwt_verify_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, jwt_verify_regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = jwt_verify_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function jwt_verify_toPropertyKey(t) { var i = jwt_verify_toPrimitive(t, "string"); return "symbol" == jwt_verify_typeof(i) ? i : i + ""; }
function jwt_verify_toPrimitive(t, r) { if ("object" != jwt_verify_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != jwt_verify_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function jwt_verify_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function jwt_verify_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { jwt_verify_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { jwt_verify_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


(0,external_dotenv_.config)();
function jwt_verify(_x, _x2, _x3) {
  return _jwt_verify.apply(this, arguments);
}
function _jwt_verify() {
  _jwt_verify = jwt_verify_asyncToGenerator(/*#__PURE__*/jwt_verify_regenerator().m(function _callee(req, res, next) {
    var _req$headers$authoriz, token, decode, _t;
    return jwt_verify_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          token = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[1];
          console.log(token);
          if (token) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(401).json({
            error: "Login required"
          }));
        case 1:
          // eslint-disable-next-line no-undef
          decode = external_jsonwebtoken_default().verify(token, process.env.SECRET);
          if (decode) {
            _context.n = 2;
            break;
          }
          return _context.a(2, res.status(401).json({
            error: "Invalid login"
          }));
        case 2:
          req.body = _objectSpread(_objectSpread({}, req.body), {}, {
            user_email: decode.email,
            user_password: decode.password
          });
          next();
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error("Error verifying token:", _t);
          return _context.a(2, res.status(500).json({
            error: "Internal server error"
          }));
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 3]]);
  }));
  return _jwt_verify.apply(this, arguments);
}
;// ./src/routes/modulos/student.js



var router = (0,external_express_namespaceObject.Router)();
router.route("/student").get(jwt_verify, get_students).post(jwt_verify, create_student);
router.route("/student/:id").get(jwt_verify, get_student).put(jwt_verify, update_student)["delete"](jwt_verify, delete_student);
/* harmony default export */ const student = (router);
;// ./src/models/User.js
function User_typeof(o) { "@babel/helpers - typeof"; return User_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, User_typeof(o); }
function User_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return User_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (User_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, User_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, User_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), User_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", User_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), User_regeneratorDefine2(u), User_regeneratorDefine2(u, o, "Generator"), User_regeneratorDefine2(u, n, function () { return this; }), User_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (User_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function User_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } User_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { User_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, User_regeneratorDefine2(e, r, n, t); }
function User_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function User_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { User_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { User_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function User_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function User_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, User_toPropertyKey(o.key), o); } }
function User_createClass(e, r, t) { return r && User_defineProperties(e.prototype, r), t && User_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function User_toPropertyKey(t) { var i = User_toPrimitive(t, "string"); return "symbol" == User_typeof(i) ? i : i + ""; }
function User_toPrimitive(t, r) { if ("object" != User_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != User_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function User_callSuper(t, o, e) { return o = User_getPrototypeOf(o), User_possibleConstructorReturn(t, User_isNativeReflectConstruct() ? Reflect.construct(o, e || [], User_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function User_possibleConstructorReturn(t, e) { if (e && ("object" == User_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return User_assertThisInitialized(t); }
function User_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function User_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (User_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function User_superPropGet(t, o, e, r) { var p = User_get(User_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function User_get() { return User_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = User_superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, User_get.apply(null, arguments); }
function User_superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = User_getPrototypeOf(t));); return t; }
function User_getPrototypeOf(t) { return User_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, User_getPrototypeOf(t); }
function User_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && User_setPrototypeOf(t, e); }
function User_setPrototypeOf(t, e) { return User_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, User_setPrototypeOf(t, e); }


var User = /*#__PURE__*/function (_Model) {
  function User() {
    User_classCallCheck(this, User);
    return User_callSuper(this, User, arguments);
  }
  User_inherits(User, _Model);
  return User_createClass(User, null, [{
    key: "init",
    value: function init(sequelize) {
      User_superPropGet(User, "init", this, 2)([{
        id: {
          type: external_sequelize_namespaceObject.DataTypes.UUID,
          defaultValue: external_sequelize_namespaceObject.DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        username: {
          type: external_sequelize_namespaceObject.Sequelize.STRING,
          allowNull: false,
          unique: true,
          defaultValue: "",
          validate: {
            notEmpty: true,
            len: {
              args: [3, 255],
              msg: "Username must be between 3 and 255 characters long."
            }
          }
        },
        email: {
          type: external_sequelize_namespaceObject.Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: {
              msg: "Email must be a valid email address."
            },
            notEmpty: true
          }
        },
        password: {
          type: external_sequelize_namespaceObject.Sequelize.VIRTUAL,
          allowNull: false,
          validate: {
            notEmpty: true,
            len: {
              args: [6, 255],
              msg: "Password must be between 6 and 255 characters long."
            }
          }
        },
        password_hash: {
          type: external_sequelize_namespaceObject.Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        }
      }, {
        sequelize: sequelize,
        tableName: "users"
      }]);
      this.addHook("beforeSave", /*#__PURE__*/function () {
        var _ref = User_asyncToGenerator(/*#__PURE__*/User_regenerator().m(function _callee(user) {
          return User_regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (!user.password) {
                  _context.n = 2;
                  break;
                }
                _context.n = 1;
                return external_bcryptjs_default().hash(user.password, 8);
              case 1:
                user.password_hash = _context.v;
              case 2:
                return _context.a(2);
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return this;
    }
  }]);
}(external_sequelize_namespaceObject.Model);

;// ./src/controllers/user.js
var user_excluded = ["password"];
function user_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return user_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (user_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, user_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, user_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), user_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", user_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), user_regeneratorDefine2(u), user_regeneratorDefine2(u, o, "Generator"), user_regeneratorDefine2(u, n, function () { return this; }), user_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (user_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function user_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } user_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { user_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, user_regeneratorDefine2(e, r, n, t); }
function user_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = user_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function user_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function user_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function user_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { user_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { user_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function create_user(_x, _x2) {
  return _create_user.apply(this, arguments);
}

// login route
function _create_user() {
  _create_user = user_asyncToGenerator(/*#__PURE__*/user_regenerator().m(function _callee(req, res) {
    var user, _user$dataValues, password, userWithoutPassword, _t;
    return user_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return User.create({
            username: req.body.username || "",
            email: req.body.email || "",
            password: req.body.password || ""
          });
        case 1:
          user = _context.v;
          _user$dataValues = user.dataValues, password = _user$dataValues.password, userWithoutPassword = user_objectWithoutProperties(_user$dataValues, user_excluded);
          console.log(userWithoutPassword);
          return _context.a(2, res.status(201).json(userWithoutPassword));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error("Erro ao criar aluno:", _t);
          return _context.a(2, res.status(500).json({
            error: "Erro ao criar aluno",
            message: _t === null || _t === void 0 ? void 0 : _t.message
          }));
      }
    }, _callee, null, [[0, 2]]);
  }));
  return _create_user.apply(this, arguments);
}
function get_user(_x3, _x4, _x5) {
  return _get_user.apply(this, arguments);
}
function _get_user() {
  _get_user = user_asyncToGenerator(/*#__PURE__*/user_regenerator().m(function _callee2(req, res, next) {
    var user, isPasswordValid, _t2;
    return user_regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return User.findOne({
            where: {
              email: req.body.email
            }
          });
        case 1:
          user = _context2.v;
          if (user) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(404).json({
            error: "User not found"
          }));
        case 2:
          ;
          _context2.n = 3;
          return external_bcryptjs_default().compare(req.body.password, user.dataValues.password_hash);
        case 3:
          isPasswordValid = _context2.v;
          if (isPasswordValid) {
            _context2.n = 4;
            break;
          }
          return _context2.a(2, res.status(401).json({
            error: "Senha inválida"
          }));
        case 4:
          req.body = {
            email: user.dataValues.email,
            password: req.body.password
          };
          next();
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          console.error("Erro ao obter usuários:", _t2);
          return _context2.a(2, res.status(500).json({
            error: "Erro ao obter usuários",
            message: _t2 === null || _t2 === void 0 ? void 0 : _t2.message
          }));
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return _get_user.apply(this, arguments);
}
function update_user(_x6, _x7) {
  return _update_user.apply(this, arguments);
}
function _update_user() {
  _update_user = user_asyncToGenerator(/*#__PURE__*/user_regenerator().m(function _callee3(req, res) {
    var updata, user, _t3;
    return user_regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          updata = req.body;
          _context3.n = 1;
          return User.findOne({
            where: {
              email: updata.user_email
            }
          });
        case 1:
          user = _context3.v;
          if (user) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            "Must be logged in to access this resource": "User not found"
          }));
        case 2:
          _context3.n = 3;
          return User.update({
            username: updata.username ? updata.username : user.username,
            email: updata.email ? updata.email : user.email,
            password: updata.password ? updata.password : user.password
          }, {
            where: {
              id: user.dataValues.id
            }
          });
        case 3:
          return _context3.a(2, res.status(200).json({
            message: "Usuário atualizado com sucesso"
          }));
        case 4:
          _context3.p = 4;
          _t3 = _context3.v;
          console.log("ERRO AO ATUALIZAR USUÁRIO", _t3);
          return _context3.a(2, res.status(500).json({
            error: "Erro ao atualizar usuário",
            message: _t3 === null || _t3 === void 0 ? void 0 : _t3.message
          }));
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return _update_user.apply(this, arguments);
}
function delete_user(_x8, _x9) {
  return _delete_user.apply(this, arguments);
}
function _delete_user() {
  _delete_user = user_asyncToGenerator(/*#__PURE__*/user_regenerator().m(function _callee4(req, res) {
    var user, _t4;
    return user_regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return User.findOne({
            where: {
              email: req.body.user_email
            }
          });
        case 1:
          user = _context4.v;
          if (user) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            "Must be logged in to access this resource": "User not found"
          }));
        case 2:
          User.destroy({
            where: {
              id: req.params.id
            }
          });
          return _context4.a(2, res.status(200).json({
            message: "Usuário deletado com sucesso"
          }));
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          console.error("Erro ao deletar usuário:", _t4);
          return _context4.a(2, res.status(500).json({
            error: "Erro ao deletar usuário"
          }));
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return _delete_user.apply(this, arguments);
}
;// ./src/controllers/token.js
function token_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return token_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (token_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, token_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, token_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), token_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", token_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), token_regeneratorDefine2(u), token_regeneratorDefine2(u, o, "Generator"), token_regeneratorDefine2(u, n, function () { return this; }), token_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (token_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function token_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } token_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { token_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, token_regeneratorDefine2(e, r, n, t); }
function token_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function token_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { token_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { token_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




(0,external_dotenv_.config)();
function createToken(_x, _x2) {
  return _createToken.apply(this, arguments);
}
function _createToken() {
  _createToken = token_asyncToGenerator(/*#__PURE__*/token_regenerator().m(function _callee(req, res) {
    var _req$body, email, password, user, isPasswordValid, token, _t;
    return token_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          console.log(req.body);
          if (!(!email || !password)) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: "Email and password are required"
          }));
        case 1:
          _context.n = 2;
          return User.findOne({
            where: {
              email: email
            }
          });
        case 2:
          user = _context.v;
          if (user) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.status(404).json({
            error: "User not found"
          }));
        case 3:
          _context.n = 4;
          return (0,external_bcryptjs_namespaceObject.compare)(password, user.password_hash);
        case 4:
          isPasswordValid = _context.v;
          if (isPasswordValid) {
            _context.n = 5;
            break;
          }
          return _context.a(2, res.status(401).json({
            error: "Invalid password"
          }));
        case 5:
          token = external_jsonwebtoken_default().sign({
            id: user.id,
            email: user.email,
            password: password
          }, process.env.SECRET, {
            expiresIn: process.env.EXPIRE_TIME || "1h"
          });
          if (token) {
            _context.n = 6;
            break;
          }
          return _context.a(2, res.status(500).json({
            error: "Failed to create token"
          }));
        case 6:
          return _context.a(2, res.status(200).json({
            token: token
          }));
        case 7:
          _context.p = 7;
          _t = _context.v;
          console.error("Error creating token:", _t);
          return _context.a(2, res.status(500).json({
            error: "Internal server error"
          }));
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _createToken.apply(this, arguments);
}
;// ./src/routes/modulos/user.js




var user_router = (0,external_express_namespaceObject.Router)();

// All routes are prefixed with /api/users
user_router.route('/users').post(create_user).get(get_user, createToken).put(jwt_verify, update_user)["delete"](jwt_verify, delete_user);
/* harmony default export */ const user = (user_router);
;// ./src/routes/modulos/token.js


var token_router = (0,external_express_namespaceObject.Router)();
token_router.post('/token', createToken);
/* harmony default export */ const token = (token_router);
;// external "multer"
const external_multer_namespaceObject = require("multer");
var external_multer_default = /*#__PURE__*/__webpack_require__.n(external_multer_namespaceObject);
;// external "path"
const external_path_namespaceObject = require("path");
;// ./src/config/multer.js


var random = function random() {
  return Math.floor(Math.random() * 1000000 + 100000);
};
/* harmony default export */ const multer = ({
  fileFilter: function fileFilter(req, file, cb) {
    var alowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
    if (alowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only images are allowed."), false);
    }
  },
  storage: external_multer_default().diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, (0,external_path_namespaceObject.resolve)("uploads", "images"));
    },
    filename: function filename(req, file, cb) {
      cb(null, "".concat(Date.now(), "_").concat(random()).concat((0,external_path_namespaceObject.extname)(file.originalname)));
    }
  })
});
;// ./src/controllers/upload.js
function upload_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return upload_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (upload_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, upload_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, upload_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), upload_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", upload_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), upload_regeneratorDefine2(u), upload_regeneratorDefine2(u, o, "Generator"), upload_regeneratorDefine2(u, n, function () { return this; }), upload_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (upload_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function upload_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } upload_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { upload_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, upload_regeneratorDefine2(e, r, n, t); }
function upload_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function upload_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { upload_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { upload_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var upload = external_multer_default()(multer).single("foto");
function uploadImage(_x, _x2) {
  return _uploadImage.apply(this, arguments);
}
function _uploadImage() {
  _uploadImage = upload_asyncToGenerator(/*#__PURE__*/upload_regenerator().m(function _callee2(req, res) {
    return upload_regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          return _context2.a(2, upload(req, res, /*#__PURE__*/function () {
            var _ref = upload_asyncToGenerator(/*#__PURE__*/upload_regenerator().m(function _callee(err) {
              var student, _req$file, originalname, filename, ft;
              return upload_regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!err) {
                      _context.n = 1;
                      break;
                    }
                    return _context.a(2, res.status(400).json({
                      error: err.message || "An error occurred while uploading the file."
                    }));
                  case 1:
                    if (req.file) {
                      _context.n = 2;
                      break;
                    }
                    return _context.a(2, res.status(400).json({
                      error: "No file uploaded."
                    }));
                  case 2:
                    _context.n = 3;
                    return Aluno.findOne({
                      where: {
                        id: req.params.id
                      }
                    });
                  case 3:
                    student = _context.v;
                    if (student) {
                      _context.n = 4;
                      break;
                    }
                    return _context.a(2, res.status(400).json("Aluno não existe"));
                  case 4:
                    _req$file = req.file, originalname = _req$file.originalname, filename = _req$file.filename;
                    _context.n = 5;
                    return Foto.create({
                      originalname: originalname,
                      nome: filename,
                      caminho: req.file.path,
                      aluno_id: req.params.id
                    })["catch"](function (error) {
                      return res.status(500).json({
                        error: "Failed to save file information in the database.",
                        details: error.message
                      });
                    });
                  case 5:
                    ft = _context.v;
                    console.log(ft);
                    return _context.a(2, res.status(200).json({
                      message: "File uploaded successfully.",
                      file: req.file
                    }));
                }
              }, _callee);
            }));
            return function (_x5) {
              return _ref.apply(this, arguments);
            };
          }()));
      }
    }, _callee2);
  }));
  return _uploadImage.apply(this, arguments);
}
function get_image_by_id(_x3, _x4) {
  return _get_image_by_id.apply(this, arguments);
}
function _get_image_by_id() {
  _get_image_by_id = upload_asyncToGenerator(/*#__PURE__*/upload_regenerator().m(function _callee3(req, res) {
    var id, foto, _t;
    return upload_regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          id = req.params.id;
          _context3.p = 1;
          _context3.n = 2;
          return Foto.findOne({
            where: {
              aluno_id: id,
              attribute: ['url']
            }
          });
        case 2:
          foto = _context3.v;
          if (foto) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, res.status(404).json({
            error: "Image not found."
          }));
        case 3:
          return _context3.a(2, res.status(200).json(foto));
        case 4:
          _context3.p = 4;
          _t = _context3.v;
          return _context3.a(2, res.status(500).json({
            error: "Failed to retrieve image.",
            details: _t.message
          }));
      }
    }, _callee3, null, [[1, 4]]);
  }));
  return _get_image_by_id.apply(this, arguments);
}
;// ./src/routes/modulos/upload.js



var upload_router = (0,external_express_namespaceObject.Router)();
upload_router.route("/upload/:id").post(jwt_verify, uploadImage).get(jwt_verify, get_image_by_id);
/* harmony default export */ const modulos_upload = (upload_router);
;// ./src/routes/index.js





var routes_router = (0,external_express_namespaceObject.Router)();
routes_router.use('/api', student);
routes_router.use('/api', user);
routes_router.use('/api/auth', token);
routes_router.use("/api", modulos_upload);
/* harmony default export */ const routes = (routes_router);
;// external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
// EXTERNAL MODULE: ./src/config/db.js
var db = __webpack_require__(47);
var db_default = /*#__PURE__*/__webpack_require__.n(db);
;// ./src/database/index.js





var models = [Aluno, User, Foto];
var connection = new external_sequelize_namespaceObject.Sequelize((db_default()));
models.forEach(function (model) {
  model.init(connection);
});
models.forEach(function (model) {
  return model.associate && model.associate(connection.models);
});
;// ./src/app.js






(0,external_dotenv_.config)();
var app = external_express_default()();
var PORT = 3000;
app.use(external_express_default().urlencoded({
  extended: true
}));
app.use(external_cors_default()());
app.use(external_express_default().json());
app.use(external_express_default()["static"]((0,external_path_namespaceObject.resolve)(__dirname, "..", "uploads")));
app.use(routes);
app.listen(PORT, function () {
  console.log("Server running");
});
})();

/******/ })()
;