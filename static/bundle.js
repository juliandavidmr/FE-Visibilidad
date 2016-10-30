webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _reactRouter = __webpack_require__(1);

	var _reactRouterRedux = __webpack_require__(93);

	var _reactRedux = __webpack_require__(98);

	var _reactDom = __webpack_require__(119);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Index = __webpack_require__(252);

	var _Index2 = _interopRequireDefault(_Index);

	var _container = __webpack_require__(379);

	var _container2 = _interopRequireDefault(_container);

	var _About = __webpack_require__(380);

	var _About2 = _interopRequireDefault(_About);

	var _Eventos = __webpack_require__(382);

	var _Eventos2 = _interopRequireDefault(_Eventos);

	var _Header = __webpack_require__(384);

	var _Header2 = _interopRequireDefault(_Header);

	var _Login = __webpack_require__(385);

	var _Login2 = _interopRequireDefault(_Login);

	var _NoMatch = __webpack_require__(508);

	var _NoMatch2 = _interopRequireDefault(_NoMatch);

	var _store = __webpack_require__(510);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Paginas
	 */
	var store = (0, _store2.default)(); // 404 o no encontrado

	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	var basename = '/';

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: basename, component: _Header2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Index2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/acercade', component: _About2.default }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/eventos', component: _Eventos2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: 'recientes', component: _About2.default })
	      ),
	      _react2.default.createElement(_reactRouter.Route, { path: '/noticias', component: _Eventos2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _Login2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoMatch2.default })
	  )
	), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(105);

	var _reactRedux = __webpack_require__(98);

	var _Index = __webpack_require__(339);

	var _Index2 = _interopRequireDefault(_Index);

	var _semilleros = __webpack_require__(348);

	var SemilleroActions = _interopRequireWildcard(_semilleros);

	var _noticia = __webpack_require__(373);

	var NoticiasActions = _interopRequireWildcard(_noticia);

	__webpack_require__(375);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Index = function (_Component) {
	  (0, _inherits3.default)(Index, _Component);

	  function Index(props) {
	    (0, _classCallCheck3.default)(this, Index);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

	    _this.state = {
	      list_semilleros: [],
	      list_noticias: []
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Index, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var _props = this.props;
	      var actions_semilleros = _props.actions_semilleros;
	      var actions_noticias = _props.actions_noticias;

	      // Semilleros

	      actions_semilleros.listar().then(function () {
	        var l = _this2.props.semilleros.semillero.toJS();

	        if (l.data_list_semilleros) {
	          console.log('fetchSemilleros =>', l.data_list_semilleros);

	          _this2.setState({
	            list_semilleros: l.data_list_semilleros
	          });
	        }
	      });

	      // Noticias
	      actions_noticias.listar().then(function () {
	        var n = _this2.props.noticias.noticia.toJS();

	        if (n.data_list_noticias) {
	          console.log('fetchNoticias =>', n.data_list_noticias);

	          _this2.setState({
	            list_noticias: n.data_list_noticias
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Index2.default, null);
	    }
	  }]);
	  return Index;
	}(_react.Component);

	function mapStateToProps(state) {
	  // console.log("==mapStateToProps: ", state);
	  return {
	    semilleros: state.semilleros,
	    noticias: state.noticia
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions_semilleros: (0, _redux.bindActionCreators)(SemilleroActions, dispatch),
	    actions_noticias: (0, _redux.bindActionCreators)(NoticiasActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(254), __esModule: true };

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(255);
	module.exports = __webpack_require__(266).Object.getPrototypeOf;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(256)
	  , $getPrototypeOf = __webpack_require__(258);

	__webpack_require__(264)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(257);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 257 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(259)
	  , toObject    = __webpack_require__(256)
	  , IE_PROTO    = __webpack_require__(260)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 259 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(261)('keys')
	  , uid    = __webpack_require__(263);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(262)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 262 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 263 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(265)
	  , core    = __webpack_require__(266)
	  , fails   = __webpack_require__(275);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(262)
	  , core      = __webpack_require__(266)
	  , ctx       = __webpack_require__(267)
	  , hide      = __webpack_require__(269)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 266 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(268);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(270)
	  , createDesc = __webpack_require__(278);
	module.exports = __webpack_require__(274) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(271)
	  , IE8_DOM_DEFINE = __webpack_require__(273)
	  , toPrimitive    = __webpack_require__(277)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(274) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(272);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(274) && !__webpack_require__(275)(function(){
	  return Object.defineProperty(__webpack_require__(276)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(275)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(272)
	  , document = __webpack_require__(262).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(272);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 279 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(281);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(282), __esModule: true };

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(283);
	var $Object = __webpack_require__(266).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(265);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(274), 'Object', {defineProperty: __webpack_require__(270).f});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(285);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(286);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(315);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(287), __esModule: true };

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(288);
	__webpack_require__(310);
	module.exports = __webpack_require__(314).f('iterator');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(289)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(291)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(290)
	  , defined   = __webpack_require__(257);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(292)
	  , $export        = __webpack_require__(265)
	  , redefine       = __webpack_require__(293)
	  , hide           = __webpack_require__(269)
	  , has            = __webpack_require__(259)
	  , Iterators      = __webpack_require__(294)
	  , $iterCreate    = __webpack_require__(295)
	  , setToStringTag = __webpack_require__(308)
	  , getPrototypeOf = __webpack_require__(258)
	  , ITERATOR       = __webpack_require__(309)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 292 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(269);

/***/ },
/* 294 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(296)
	  , descriptor     = __webpack_require__(278)
	  , setToStringTag = __webpack_require__(308)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(269)(IteratorPrototype, __webpack_require__(309)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(271)
	  , dPs         = __webpack_require__(297)
	  , enumBugKeys = __webpack_require__(306)
	  , IE_PROTO    = __webpack_require__(260)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(276)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(307).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(270)
	  , anObject = __webpack_require__(271)
	  , getKeys  = __webpack_require__(298);

	module.exports = __webpack_require__(274) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(299)
	  , enumBugKeys = __webpack_require__(306);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(259)
	  , toIObject    = __webpack_require__(300)
	  , arrayIndexOf = __webpack_require__(303)(false)
	  , IE_PROTO     = __webpack_require__(260)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(301)
	  , defined = __webpack_require__(257);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(302);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 302 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(300)
	  , toLength  = __webpack_require__(304)
	  , toIndex   = __webpack_require__(305);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(290)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(290)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 306 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(262).document && document.documentElement;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(270).f
	  , has = __webpack_require__(259)
	  , TAG = __webpack_require__(309)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(261)('wks')
	  , uid        = __webpack_require__(263)
	  , Symbol     = __webpack_require__(262).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(311);
	var global        = __webpack_require__(262)
	  , hide          = __webpack_require__(269)
	  , Iterators     = __webpack_require__(294)
	  , TO_STRING_TAG = __webpack_require__(309)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(312)
	  , step             = __webpack_require__(313)
	  , Iterators        = __webpack_require__(294)
	  , toIObject        = __webpack_require__(300);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(291)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 312 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(309);

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(316), __esModule: true };

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(317);
	__webpack_require__(328);
	__webpack_require__(329);
	__webpack_require__(330);
	module.exports = __webpack_require__(266).Symbol;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(262)
	  , has            = __webpack_require__(259)
	  , DESCRIPTORS    = __webpack_require__(274)
	  , $export        = __webpack_require__(265)
	  , redefine       = __webpack_require__(293)
	  , META           = __webpack_require__(318).KEY
	  , $fails         = __webpack_require__(275)
	  , shared         = __webpack_require__(261)
	  , setToStringTag = __webpack_require__(308)
	  , uid            = __webpack_require__(263)
	  , wks            = __webpack_require__(309)
	  , wksExt         = __webpack_require__(314)
	  , wksDefine      = __webpack_require__(319)
	  , keyOf          = __webpack_require__(320)
	  , enumKeys       = __webpack_require__(321)
	  , isArray        = __webpack_require__(324)
	  , anObject       = __webpack_require__(271)
	  , toIObject      = __webpack_require__(300)
	  , toPrimitive    = __webpack_require__(277)
	  , createDesc     = __webpack_require__(278)
	  , _create        = __webpack_require__(296)
	  , gOPNExt        = __webpack_require__(325)
	  , $GOPD          = __webpack_require__(327)
	  , $DP            = __webpack_require__(270)
	  , $keys          = __webpack_require__(298)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(326).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(323).f  = $propertyIsEnumerable;
	  __webpack_require__(322).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(292)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(269)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(263)('meta')
	  , isObject = __webpack_require__(272)
	  , has      = __webpack_require__(259)
	  , setDesc  = __webpack_require__(270).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(275)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(262)
	  , core           = __webpack_require__(266)
	  , LIBRARY        = __webpack_require__(292)
	  , wksExt         = __webpack_require__(314)
	  , defineProperty = __webpack_require__(270).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(298)
	  , toIObject = __webpack_require__(300);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(298)
	  , gOPS    = __webpack_require__(322)
	  , pIE     = __webpack_require__(323);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 322 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 323 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(302);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(300)
	  , gOPN      = __webpack_require__(326).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(299)
	  , hiddenKeys = __webpack_require__(306).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(323)
	  , createDesc     = __webpack_require__(278)
	  , toIObject      = __webpack_require__(300)
	  , toPrimitive    = __webpack_require__(277)
	  , has            = __webpack_require__(259)
	  , IE8_DOM_DEFINE = __webpack_require__(273)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(274) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 328 */
/***/ function(module, exports) {

	

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(319)('asyncIterator');

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(319)('observable');

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(332);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(336);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(285);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(333), __esModule: true };

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(334);
	module.exports = __webpack_require__(266).Object.setPrototypeOf;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(265);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(335).set});

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(272)
	  , anObject = __webpack_require__(271);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(267)(Function.call, __webpack_require__(327).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(337), __esModule: true };

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(338);
	var $Object = __webpack_require__(266).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(265)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(296)});

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _CursosComponent = __webpack_require__(340);

	var _CursosComponent2 = _interopRequireDefault(_CursosComponent);

	var _MenuComponent = __webpack_require__(341);

	var _MenuComponent2 = _interopRequireDefault(_MenuComponent);

	var _SliderComponent = __webpack_require__(342);

	var _SliderComponent2 = _interopRequireDefault(_SliderComponent);

	var _ServiceComponent = __webpack_require__(343);

	var _ServiceComponent2 = _interopRequireDefault(_ServiceComponent);

	var _AboutComponent = __webpack_require__(344);

	var _AboutComponent2 = _interopRequireDefault(_AboutComponent);

	var _FeaturesComponent = __webpack_require__(345);

	var _FeaturesComponent2 = _interopRequireDefault(_FeaturesComponent);

	var _CounterComponent = __webpack_require__(346);

	var _CounterComponent2 = _interopRequireDefault(_CounterComponent);

	var _SemillerosComponent = __webpack_require__(347);

	var _SemillerosComponent2 = _interopRequireDefault(_SemillerosComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IndexComponent = function (_Component) {
	  (0, _inherits3.default)(IndexComponent, _Component);

	  function IndexComponent(props) {
	    (0, _classCallCheck3.default)(this, IndexComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (IndexComponent.__proto__ || (0, _getPrototypeOf2.default)(IndexComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(IndexComponent, [{
	    key: 'render',
	    value: function render() {
	      var list_semilleros = this.props.list_semilleros;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_SliderComponent2.default, { slides: [{
	            id: 1,
	            img: 'assets/assets/img/slider/1.jpg',
	            titulo: 'Titulo de prueba',
	            resumen: 'un resumen cualquiera',
	            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	            link: 'in link'
	          }, {
	            id: 2,
	            img: 'assets/assets/img/slider/2.jpg',
	            titulo: 'Titulo de prueba 2',
	            resumen: 'un resumen cualquiera2',
	            descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	            link: 'in lin22222k'
	          }] }),
	        _react2.default.createElement(_ServiceComponent2.default, null),
	        _react2.default.createElement(_AboutComponent2.default, null),
	        _react2.default.createElement(_CounterComponent2.default, { tags: [{
	            class: 'fa fa-book',
	            number: 890,
	            subtitle: 'Subjects'
	          }, {
	            class: 'fa fa-users',
	            number: 3500,
	            subtitle: 'Students'
	          }, {
	            class: 'fa fa-flask',
	            number: 67,
	            subtitle: 'Modern Lab'
	          }, {
	            class: 'fa fa-user-secret',
	            number: 250,
	            subtitle: 'Teachers'
	          }] }),
	        _react2.default.createElement(_FeaturesComponent2.default, { tags: [{
	            title: 'Professional Courses',
	            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
	            link: '#unid',
	            class: 'fa fa-book'
	          }, {
	            title: 'Expert Teachers',
	            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
	            link: '#otroid',
	            class: 'fa fa-users'
	          }, {
	            title: 'Online Learning',
	            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
	            link: '',
	            class: 'fa fa-laptop'
	          }, {
	            title: 'Audio Lessons',
	            description: 'Lorem ipsum dolor sit amet, consectetur elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
	            link: '',
	            class: 'fa fa-microphone'
	          }, {
	            title: 'Video Lessons',
	            description: 'Lorem ipsum dolor sit, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
	            link: '',
	            class: 'fa fa-film'
	          }] }),
	        _react2.default.createElement(_CursosComponent2.default, {
	          title: 'Latest Courses',
	          description: 'Lorem saepe reprehenderit totam aliquam architecto fugiat sunt animi!',
	          items: [{
	            img: 'assets/assets/img/courses/1.jpg',
	            title: 'Un curso 1',
	            time: '90Days',
	            description: 'Una descripcion corta 1',
	            resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi.',
	            price: '$165.00'
	          }, {
	            img: 'assets/assets/img/courses/1.jpg',
	            title: 'Un curso 1',
	            time: '90Days',
	            description: 'Una descripcion corta 1',
	            resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi.',
	            price: '$165.00'
	          }, {
	            img: 'assets/assets/img/courses/1.jpg',
	            title: 'Un curso 1',
	            time: '90Days',
	            description: 'Una descripcion corta 1',
	            resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi.',
	            price: '$165.00'
	          }, {
	            img: 'assets/assets/img/courses/1.jpg',
	            title: 'Un curso 1',
	            time: '90Days',
	            description: 'Una descripcion corta 1',
	            resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi.',
	            price: '$165.00'
	          }]
	        }),
	        _react2.default.createElement(_SemillerosComponent2.default, {
	          title: 'Semilleros de investigación',
	          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa, repudiandae, suscipit repellat minus molestiae ea.',
	          list: list_semilleros
	        }),
	        _react2.default.createElement(
	          'section',
	          { id: 'mu-testimonial' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-12' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'mu-testimonial-area' },
	                  _react2.default.createElement(
	                    'div',
	                    { id: 'mu-testimonial-slide', className: 'mu-testimonial-content' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'mu-testimonial-item' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-quote' },
	                        _react2.default.createElement(
	                          'blockquote',
	                          null,
	                          _react2.default.createElement(
	                            'p',
	                            null,
	                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.'
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-img' },
	                        _react2.default.createElement('img', { src: 'assets/assets/img/testimonial-1.png', alt: 'img' })
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-info' },
	                        _react2.default.createElement(
	                          'h4',
	                          null,
	                          'John Doe'
	                        ),
	                        _react2.default.createElement(
	                          'span',
	                          null,
	                          'Happy Student'
	                        )
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'mu-testimonial-item' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-quote' },
	                        _react2.default.createElement(
	                          'blockquote',
	                          null,
	                          _react2.default.createElement(
	                            'p',
	                            null,
	                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.'
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-img' },
	                        _react2.default.createElement('img', { src: 'assets/assets/img/testimonial-3.png', alt: 'img' })
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-info' },
	                        _react2.default.createElement(
	                          'h4',
	                          null,
	                          'Rebaca Michel'
	                        ),
	                        _react2.default.createElement(
	                          'span',
	                          null,
	                          'Happy Parent'
	                        )
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'mu-testimonial-item' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-quote' },
	                        _react2.default.createElement(
	                          'blockquote',
	                          null,
	                          _react2.default.createElement(
	                            'p',
	                            null,
	                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.'
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-img' },
	                        _react2.default.createElement('img', { src: 'assets/assets/img/testimonial-2.png', alt: 'img' })
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'mu-testimonial-info' },
	                        _react2.default.createElement(
	                          'h4',
	                          null,
	                          'Stev Smith'
	                        ),
	                        _react2.default.createElement(
	                          'span',
	                          null,
	                          'Happy Student'
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { id: 'mu-from-blog' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-12' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'mu-from-blog-area' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'mu-title' },
	                    _react2.default.createElement(
	                      'h2',
	                      null,
	                      'From Blog'
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      null,
	                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Rerum vitae quae vero ut natus.Dolore!'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'mu-from-blog-content' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'row' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-sm-4' },
	                        _react2.default.createElement(
	                          'article',
	                          { className: 'mu-blog-single-item' },
	                          _react2.default.createElement(
	                            'figure',
	                            { className: 'mu-blog-single-img' },
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              _react2.default.createElement('img', { src: 'assets/assets/img/blog/blog-1.jpg', alt: 'img' })
	                            ),
	                            _react2.default.createElement(
	                              'figcaption',
	                              { className: 'mu-blog-caption' },
	                              _react2.default.createElement(
	                                'h3',
	                                null,
	                                _react2.default.createElement(
	                                  'a',
	                                  { href: '#' },
	                                  'Lorem ipsum dolor sit amet.'
	                                )
	                              )
	                            )
	                          ),
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'mu-blog-meta' },
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              'By Admin'
	                            ),
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              '02 June 2016'
	                            ),
	                            _react2.default.createElement(
	                              'span',
	                              null,
	                              _react2.default.createElement('i', { className: 'fa fa-comments-o' }),
	                              '87'
	                            )
	                          ),
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'mu-blog-description' },
	                            _react2.default.createElement(
	                              'p',
	                              null,
	                              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae ipsum non voluptatum eum repellendus quod aliquid.Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.'
	                            ),
	                            _react2.default.createElement(
	                              'a',
	                              { className: 'mu-read-more-btn', href: '#' },
	                              'Read More'
	                            )
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-sm-4' },
	                        _react2.default.createElement(
	                          'article',
	                          { className: 'mu-blog-single-item' },
	                          _react2.default.createElement(
	                            'figure',
	                            { className: 'mu-blog-single-img' },
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              _react2.default.createElement('img', { src: 'assets/assets/img/blog/blog-2.jpg', alt: 'img' })
	                            ),
	                            _react2.default.createElement(
	                              'figcaption',
	                              { className: 'mu-blog-caption' },
	                              _react2.default.createElement(
	                                'h3',
	                                null,
	                                _react2.default.createElement(
	                                  'a',
	                                  { href: '#' },
	                                  'Lorem ipsum dolor sit amet.'
	                                )
	                              )
	                            )
	                          ),
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'mu-blog-meta' },
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              'By Admin'
	                            ),
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              '02 June 2016'
	                            ),
	                            _react2.default.createElement(
	                              'span',
	                              null,
	                              _react2.default.createElement('i', { className: 'fa fa-comments-o' }),
	                              '87'
	                            )
	                          ),
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'mu-blog-description' },
	                            _react2.default.createElement(
	                              'p',
	                              null,
	                              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae ipsum non voluptatum eum repellendus quod aliquid.Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.'
	                            ),
	                            _react2.default.createElement(
	                              'a',
	                              { className: 'mu-read-more-btn', href: '#' },
	                              'Read More'
	                            )
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-sm-4' },
	                        _react2.default.createElement(
	                          'article',
	                          { className: 'mu-blog-single-item' },
	                          _react2.default.createElement(
	                            'figure',
	                            { className: 'mu-blog-single-img' },
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              _react2.default.createElement('img', { src: 'assets/assets/img/blog/blog-3.jpg', alt: 'img' })
	                            ),
	                            _react2.default.createElement(
	                              'figcaption',
	                              { className: 'mu-blog-caption' },
	                              _react2.default.createElement(
	                                'h3',
	                                null,
	                                _react2.default.createElement(
	                                  'a',
	                                  { href: '#' },
	                                  'Lorem ipsum dolor sit amet.'
	                                )
	                              )
	                            )
	                          ),
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'mu-blog-meta' },
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              'By Admin'
	                            ),
	                            _react2.default.createElement(
	                              'a',
	                              { href: '#' },
	                              '02 June 2016'
	                            ),
	                            _react2.default.createElement(
	                              'span',
	                              null,
	                              _react2.default.createElement('i', { className: 'fa fa-comments-o' }),
	                              '87'
	                            )
	                          ),
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'mu-blog-description' },
	                            _react2.default.createElement(
	                              'p',
	                              null,
	                              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae ipsum non voluptatum eum repellendus quod aliquid.Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.'
	                            ),
	                            _react2.default.createElement(
	                              'a',
	                              { className: 'mu-read-more-btn', href: '#' },
	                              'Read More'
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'footer',
	          { id: 'mu-footer' },
	          _react2.default.createElement(
	            'div',
	            { className: 'mu-footer-top' },
	            _react2.default.createElement(
	              'div',
	              { className: 'container' },
	              _react2.default.createElement(
	                'div',
	                { className: 'mu-footer-top-area' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'row' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-lg-3 col-md-3 col-sm-3' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'mu-footer-widget' },
	                      _react2.default.createElement(
	                        'h4',
	                        null,
	                        'Information'
	                      ),
	                      _react2.default.createElement(
	                        'ul',
	                        null,
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'About Us'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Features'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Course'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Event'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Sitemap'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Term Of Use'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-lg-3 col-md-3 col-sm-3' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'mu-footer-widget' },
	                      _react2.default.createElement(
	                        'h4',
	                        null,
	                        'Student Help'
	                      ),
	                      _react2.default.createElement(
	                        'ul',
	                        null,
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Get Started'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'My Questions'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Download Files'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Latest Course'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'li',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            'Academic News'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-lg-3 col-md-3 col-sm-3' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'mu-footer-widget' },
	                      _react2.default.createElement(
	                        'h4',
	                        null,
	                        'News letter'
	                      ),
	                      _react2.default.createElement(
	                        'p',
	                        null,
	                        'Get latest update, news & academic offers'
	                      ),
	                      _react2.default.createElement(
	                        'form',
	                        { className: 'mu-subscribe-form' },
	                        _react2.default.createElement('input', { type: 'email', placeholder: 'Type your Email' }),
	                        _react2.default.createElement(
	                          'button',
	                          { className: 'mu-subscribe-btn', type: 'submit' },
	                          'Subscribe!'
	                        )
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-lg-3 col-md-3 col-sm-3' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'mu-footer-widget' },
	                      _react2.default.createElement(
	                        'h4',
	                        null,
	                        'Contact'
	                      ),
	                      _react2.default.createElement(
	                        'address',
	                        null,
	                        _react2.default.createElement(
	                          'p',
	                          null,
	                          'P.O.Box 320, Ross, California 9495, USA'
	                        ),
	                        _react2.default.createElement(
	                          'p',
	                          null,
	                          'Phone: (415) 453-1568'
	                        ),
	                        _react2.default.createElement(
	                          'p',
	                          null,
	                          'Website: www.markups.io'
	                        ),
	                        _react2.default.createElement(
	                          'p',
	                          null,
	                          'Email: info @markups.io'
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return IndexComponent;
	}(_react.Component);

	IndexComponent.propTypes = {};

	exports.default = IndexComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CursosComponent = function (_Component) {
	  (0, _inherits3.default)(CursosComponent, _Component);

	  function CursosComponent(props) {
	    (0, _classCallCheck3.default)(this, CursosComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (CursosComponent.__proto__ || (0, _getPrototypeOf2.default)(CursosComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(CursosComponent, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var description = _props.description;
	      var items = _props.items;


	      return _react2.default.createElement(
	        "section",
	        { id: "mu-latest-courses" },
	        _react2.default.createElement(
	          "div",
	          { className: "container" },
	          _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	              "div",
	              { className: "col-lg-12 col-md-12" },
	              _react2.default.createElement(
	                "div",
	                { className: "mu-latest-courses-area" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "mu-title" },
	                  _react2.default.createElement(
	                    "h2",
	                    null,
	                    title
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    description
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { id: "mu-latest-course-slide", className: "mu-latest-courses-content" },
	                  items.map(function (item, i) {
	                    return _react2.default.createElement(
	                      "div",
	                      { key: i, className: "col-lg-4 col-md-4 col-xs-12" },
	                      _react2.default.createElement(
	                        "div",
	                        { className: "mu-latest-course-single" },
	                        _react2.default.createElement(
	                          "figure",
	                          { className: "mu-latest-course-img" },
	                          _react2.default.createElement(
	                            "a",
	                            { href: "#" },
	                            _react2.default.createElement("img", { src: item.img, alt: "img" })
	                          ),
	                          _react2.default.createElement(
	                            "figcaption",
	                            { className: "mu-latest-course-imgcaption" },
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              item.title
	                            ),
	                            _react2.default.createElement(
	                              "span",
	                              null,
	                              _react2.default.createElement("i", { className: "fa fa-clock-o" }),
	                              item.time
	                            )
	                          )
	                        ),
	                        _react2.default.createElement(
	                          "div",
	                          { className: "mu-latest-course-single-content" },
	                          _react2.default.createElement(
	                            "h4",
	                            null,
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              item.description
	                            )
	                          ),
	                          _react2.default.createElement(
	                            "p",
	                            null,
	                            item.resume
	                          ),
	                          _react2.default.createElement(
	                            "div",
	                            { className: "mu-latest-course-single-contbottom" },
	                            _react2.default.createElement(
	                              "a",
	                              { className: "mu-course-details", href: "#" },
	                              "Detalle"
	                            ),
	                            _react2.default.createElement(
	                              "span",
	                              { className: "mu-course-price", href: "#" },
	                              item.price
	                            )
	                          )
	                        )
	                      )
	                    );
	                  })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return CursosComponent;
	}(_react.Component);

	CursosComponent.propTypes = {
	  title: _react.PropTypes.string.isRequired,
	  description: _react.PropTypes.string.isRequired,
	  items: _react.PropTypes.array.isRequired
	};

	exports.default = CursosComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Cursos.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MenuComponent = function (_Component) {
	  (0, _inherits3.default)(MenuComponent, _Component);

	  function MenuComponent(props) {
	    (0, _classCallCheck3.default)(this, MenuComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (MenuComponent.__proto__ || (0, _getPrototypeOf2.default)(MenuComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(MenuComponent, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var titulo = _props.titulo;
	      var menu = _props.menu;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'section',
	          { id: 'mu-menu' },
	          _react2.default.createElement(
	            'nav',
	            { className: 'navbar navbar-default', role: 'navigation' },
	            _react2.default.createElement(
	              'div',
	              { className: 'container' },
	              _react2.default.createElement(
	                'div',
	                { className: 'navbar-header' },
	                _react2.default.createElement(
	                  'button',
	                  { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'sr-only' },
	                    'Toggle navigation'
	                  ),
	                  _react2.default.createElement('span', { className: 'icon-bar' }),
	                  _react2.default.createElement('span', { className: 'icon-bar' }),
	                  _react2.default.createElement('span', { className: 'icon-bar' })
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { className: 'navbar-brand', href: 'index.html' },
	                  _react2.default.createElement('i', { className: 'fa fa-university' }),
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    titulo
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { id: 'navbar', className: 'navbar-collapse collapse' },
	                _react2.default.createElement(
	                  'ul',
	                  { id: 'top-menu', className: 'nav navbar-nav navbar-right main-nav' },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/', activeClassName: 'active' },
	                      'Principal'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/dashboard', activeClassName: 'active' },
	                      'Login'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    { className: 'dropdown' },
	                    _react2.default.createElement(
	                      'a',
	                      { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
	                      'Noticias',
	                      _react2.default.createElement('span', { className: 'fa fa-angle-down' })
	                    ),
	                    _react2.default.createElement(
	                      'ul',
	                      { className: 'dropdown-menu', role: 'menu' },
	                      _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                          _reactRouter.Link,
	                          { to: '/eventos/recientes', activeClassName: 'active' },
	                          'Recientes'
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                          _reactRouter.Link,
	                          { to: '/eventos/categorias', activeClassName: 'active' },
	                          'Categorias'
	                        )
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/eventos', activeClassName: 'active' },
	                      'Eventos'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    { className: 'dropdown' },
	                    _react2.default.createElement(
	                      'a',
	                      { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
	                      'Blog',
	                      _react2.default.createElement('span', { className: 'fa fa-angle-down' })
	                    ),
	                    _react2.default.createElement(
	                      'ul',
	                      { className: 'dropdown-menu', role: 'menu' },
	                      _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                          'a',
	                          { href: 'blog-archive.html' },
	                          'Blog Archive'
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                          'a',
	                          { href: 'blog-single.html' },
	                          'Blog Single'
	                        )
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/contacto', activeClassName: 'active' },
	                      'Contacto'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      'a',
	                      { href: '#', id: 'mu-search-icon' },
	                      _react2.default.createElement('i', { className: 'fa fa-search' })
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'mu-search' },
	          _react2.default.createElement(
	            'div',
	            { className: 'mu-search-area' },
	            _react2.default.createElement(
	              'button',
	              { className: 'mu-search-close' },
	              _react2.default.createElement('span', { className: 'fa fa-close' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'container' },
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-12' },
	                  _react2.default.createElement(
	                    'form',
	                    { className: 'mu-search-form' },
	                    _react2.default.createElement('input', { type: 'search', placeholder: 'Escriba aquí lo que desee buscar...' })
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return MenuComponent;
	}(_react.Component);

	MenuComponent.propTypes = {
	  titulo: _react.PropTypes.string.isRequired,
	  menu: _react.PropTypes.array
	};

	exports.default = MenuComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Menu.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderComponent = function (_Component) {
	  (0, _inherits3.default)(SliderComponent, _Component);

	  function SliderComponent(props) {
	    (0, _classCallCheck3.default)(this, SliderComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (SliderComponent.__proto__ || (0, _getPrototypeOf2.default)(SliderComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(SliderComponent, [{
	    key: "render",
	    value: function render() {
	      var slides = this.props.slides;


	      return _react2.default.createElement(
	        "section",
	        { id: "mu-slider" },
	        slides.map(function (item) {
	          return _react2.default.createElement(
	            "div",
	            { className: "mu-slider-single", key: item.id },
	            _react2.default.createElement(
	              "div",
	              { className: "mu-slider-img" },
	              _react2.default.createElement(
	                "figure",
	                null,
	                _react2.default.createElement("img", { src: item.img, alt: "img" })
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "mu-slider-content" },
	              _react2.default.createElement(
	                "h4",
	                null,
	                item.titulo
	              ),
	              _react2.default.createElement("span", null),
	              _react2.default.createElement(
	                "h2",
	                null,
	                item.resumen
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                item.descripcion
	              ),
	              _react2.default.createElement(
	                "a",
	                { href: item.link, className: "mu-read-more-btn" },
	                "Leer más"
	              )
	            )
	          );
	        })
	      );
	    }
	  }]);
	  return SliderComponent;
	}(_react.Component);

	SliderComponent.propTypes = {
	  slides: _react.PropTypes.array.isRequired
	};

	exports.default = SliderComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Slider.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ServiceComponent = function (_Component) {
		(0, _inherits3.default)(ServiceComponent, _Component);

		function ServiceComponent(props) {
			(0, _classCallCheck3.default)(this, ServiceComponent);
			return (0, _possibleConstructorReturn3.default)(this, (ServiceComponent.__proto__ || (0, _getPrototypeOf2.default)(ServiceComponent)).call(this, props));
		}

		(0, _createClass3.default)(ServiceComponent, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"section",
					{ id: "mu-service" },
					_react2.default.createElement(
						"div",
						{ className: "container" },
						_react2.default.createElement(
							"div",
							{ className: "row" },
							_react2.default.createElement(
								"div",
								{ className: "col-lg-12 col-md-12" },
								_react2.default.createElement(
									"div",
									{ className: "mu-service-area" },
									_react2.default.createElement(
										"div",
										{ className: "mu-service-single" },
										_react2.default.createElement("span", { className: "fa fa-book" }),
										_react2.default.createElement(
											"h3",
											null,
											"Learn Online"
										),
										_react2.default.createElement(
											"p",
											null,
											"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima officiis, deleniti dolorem exercitationem praesentium, est!"
										)
									),
									_react2.default.createElement(
										"div",
										{ className: "mu-service-single" },
										_react2.default.createElement("span", { className: "fa fa-users" }),
										_react2.default.createElement(
											"h3",
											null,
											"Expert Teachers"
										),
										_react2.default.createElement(
											"p",
											null,
											"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima officiis, deleniti dolorem exercitationem praesentium, est!"
										)
									),
									_react2.default.createElement(
										"div",
										{ className: "mu-service-single" },
										_react2.default.createElement("span", { className: "fa fa-table" }),
										_react2.default.createElement(
											"h3",
											null,
											"Best Classrooms"
										),
										_react2.default.createElement(
											"p",
											null,
											"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima officiis, deleniti dolorem exercitationem praesentium, est!"
										)
									)
								)
							)
						)
					)
				);
			}
		}]);
		return ServiceComponent;
	}(_react.Component);

	ServiceComponent.propTypes = {};

	exports.default = ServiceComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Service.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutComponent = function (_Component) {
		(0, _inherits3.default)(AboutComponent, _Component);

		function AboutComponent(props) {
			(0, _classCallCheck3.default)(this, AboutComponent);
			return (0, _possibleConstructorReturn3.default)(this, (AboutComponent.__proto__ || (0, _getPrototypeOf2.default)(AboutComponent)).call(this, props));
		}

		(0, _createClass3.default)(AboutComponent, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"section",
					{ id: "mu-about-us" },
					_react2.default.createElement(
						"div",
						{ className: "container" },
						_react2.default.createElement(
							"div",
							{ className: "row" },
							_react2.default.createElement(
								"div",
								{ className: "col-md-12" },
								_react2.default.createElement(
									"div",
									{ className: "mu-about-us-area" },
									_react2.default.createElement(
										"div",
										{ className: "row" },
										_react2.default.createElement(
											"div",
											{ className: "col-lg-6 col-md-6" },
											_react2.default.createElement(
												"div",
												{ className: "mu-about-us-left" },
												_react2.default.createElement(
													"div",
													{ className: "mu-title" },
													_react2.default.createElement(
														"h2",
														null,
														"Acerca de"
													)
												),
												_react2.default.createElement(
													"p",
													null,
													"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Rerum pariatur fuga eveniet soluta aspernatur rem, nam voluptatibus voluptate voluptates sapiente, inventore.Voluptatem, maiores esse molestiae."
												),
												_react2.default.createElement(
													"ul",
													null,
													_react2.default.createElement(
														"li",
														null,
														"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
													),
													_react2.default.createElement(
														"li",
														null,
														"Saepe a minima quod iste libero rerum dicta!"
													),
													_react2.default.createElement(
														"li",
														null,
														"Voluptas obcaecati, iste porro fugit soluta consequuntur.Veritatis?"
													),
													_react2.default.createElement(
														"li",
														null,
														"Ipsam deserunt numquam ad error rem unde, omnis."
													),
													_react2.default.createElement(
														"li",
														null,
														"Repellat assumenda adipisci pariatur ipsam eos similique, explicabo."
													)
												),
												_react2.default.createElement(
													"p",
													null,
													"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perspiciatis quaerat harum facilis excepturi et?Mollitia!"
												)
											)
										),
										_react2.default.createElement(
											"div",
											{ className: "col-lg-6 col-md-6" },
											_react2.default.createElement(
												"div",
												{ className: "mu-about-us-right" },
												_react2.default.createElement(
													"a",
													{ id: "mu-abtus-video", href: "https://www.youtube.com/embed/HN3pm9qYAUs", target: "mutube-video" },
													_react2.default.createElement("img", { src: "assets/assets/img/about-us.jpg", alt: "img" })
												)
											)
										)
									)
								)
							)
						)
					)
				);
			}
		}]);
		return AboutComponent;
	}(_react.Component);

	AboutComponent.propTypes = {};

	exports.default = AboutComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "About.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FeaturesComponent = function (_Component) {
	  (0, _inherits3.default)(FeaturesComponent, _Component);

	  function FeaturesComponent(props) {
	    (0, _classCallCheck3.default)(this, FeaturesComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (FeaturesComponent.__proto__ || (0, _getPrototypeOf2.default)(FeaturesComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(FeaturesComponent, [{
	    key: "render",
	    value: function render() {
	      var tags = this.props.tags;

	      return _react2.default.createElement(
	        "section",
	        { id: "mu-features" },
	        _react2.default.createElement(
	          "div",
	          { className: "container" },
	          _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	              "div",
	              { className: "col-lg-12 col-md-12" },
	              _react2.default.createElement(
	                "div",
	                { className: "mu-features-area" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "mu-title" },
	                  _react2.default.createElement(
	                    "h2",
	                    null,
	                    "Our Features"
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "mu-features-content" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "row" },
	                    tags.map(function (item, i) {
	                      return _react2.default.createElement(
	                        "div",
	                        { className: "col-lg-4 col-md-4 col-sm-6", key: i },
	                        _react2.default.createElement(
	                          "div",
	                          { className: "mu-single-feature" },
	                          _react2.default.createElement("span", { className: item.class }),
	                          _react2.default.createElement(
	                            "h4",
	                            null,
	                            item.title
	                          ),
	                          _react2.default.createElement(
	                            "p",
	                            null,
	                            item.description
	                          ),
	                          _react2.default.createElement(
	                            "a",
	                            { href: item.link },
	                            "Leer más"
	                          )
	                        )
	                      );
	                    })
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return FeaturesComponent;
	}(_react.Component);

	FeaturesComponent.propTypes = {
	  tags: _react.PropTypes.array.isRequired
	};

	exports.default = FeaturesComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Features.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CounterComponent = function (_Component) {
	  (0, _inherits3.default)(CounterComponent, _Component);

	  function CounterComponent(props) {
	    (0, _classCallCheck3.default)(this, CounterComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (CounterComponent.__proto__ || (0, _getPrototypeOf2.default)(CounterComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(CounterComponent, [{
	    key: "render",
	    value: function render() {
	      var tags = this.props.tags;


	      return _react2.default.createElement(
	        "section",
	        { id: "mu-abtus-counter" },
	        _react2.default.createElement(
	          "div",
	          { className: "container" },
	          _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	              "div",
	              { className: "col-md-12" },
	              _react2.default.createElement(
	                "div",
	                { className: "mu-abtus-counter-area" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "row" },
	                  tags.map(function (item, i) {
	                    return _react2.default.createElement(
	                      "div",
	                      { className: "col-lg-3 col-md-3 col-sm-3", key: i },
	                      _react2.default.createElement(
	                        "div",
	                        { className: "mu-abtus-counter-single" },
	                        _react2.default.createElement("span", { className: item.class }),
	                        _react2.default.createElement(
	                          "h4",
	                          { className: "counter" },
	                          item.number
	                        ),
	                        _react2.default.createElement(
	                          "p",
	                          null,
	                          item.subtitle
	                        )
	                      )
	                    );
	                  })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return CounterComponent;
	}(_react.Component);

	CounterComponent.propTypes = {
	  tags: _react.PropTypes.array.isRequired
	};

	exports.default = CounterComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Counter.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SemillerosComponent = function (_Component) {
	  (0, _inherits3.default)(SemillerosComponent, _Component);

	  function SemillerosComponent(props) {
	    (0, _classCallCheck3.default)(this, SemillerosComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (SemillerosComponent.__proto__ || (0, _getPrototypeOf2.default)(SemillerosComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(SemillerosComponent, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var description = _props.description;
	      var list_semilleros = _props.list_semilleros;


	      return _react2.default.createElement(
	        "section",
	        { id: "mu-our-teacher" },
	        _react2.default.createElement(
	          "div",
	          { className: "container" },
	          _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	              "div",
	              { className: "col-md-12" },
	              _react2.default.createElement(
	                "div",
	                { className: "mu-our-teacher-area" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "mu-title" },
	                  _react2.default.createElement(
	                    "h2",
	                    null,
	                    title
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    description
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "mu-our-teacher-content" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "row" },
	                    list_semilleros ? list_semilleros.map(function (item, i) {
	                      return _react2.default.createElement(
	                        "div",
	                        { key: i, className: "col-lg-3 col-md-3 col-sm-6" },
	                        _react2.default.createElement(
	                          "div",
	                          { className: "mu-our-teacher-single" },
	                          _react2.default.createElement(
	                            "figure",
	                            { className: "mu-our-teacher-img" },
	                            _react2.default.createElement("img", { src: "assets/assets/img/teachers/teacher-01.png", alt: "teacher img" }),
	                            _react2.default.createElement(
	                              "div",
	                              { className: "mu-our-teacher-social" },
	                              _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                _react2.default.createElement("span", { className: "fa fa-facebook" })
	                              ),
	                              _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                _react2.default.createElement("span", { className: "fa fa-twitter" })
	                              ),
	                              _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                _react2.default.createElement("span", { className: "fa fa-linkedin" })
	                              ),
	                              _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                _react2.default.createElement("span", { className: "fa fa-google-plus" })
	                              )
	                            )
	                          ),
	                          _react2.default.createElement(
	                            "div",
	                            { className: "mu-ourteacher-single-content" },
	                            _react2.default.createElement(
	                              "h4",
	                              null,
	                              "Brian Dean"
	                            ),
	                            _react2.default.createElement(
	                              "span",
	                              null,
	                              "Math Teacher"
	                            ),
	                            _react2.default.createElement(
	                              "p",
	                              null,
	                              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Similique quod pariatur recusandae odio dignissimos.Eligendi."
	                            )
	                          )
	                        )
	                      );
	                    }) : 'No hay semilleros de investigacion'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return SemillerosComponent;
	}(_react.Component);

	SemillerosComponent.propTypes = {
	  title: _react.PropTypes.string.isRequired,
	  description: _react.PropTypes.string.isRequired,
	  list_semilleros: _react.PropTypes.any
	};

	exports.default = SemillerosComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Semilleros.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.error_listar = error_listar;
	exports.error_post_insert = error_post_insert;
	exports.semillero_listar_request = semillero_listar_request;
	exports.semillero_post_request = semillero_post_request;
	exports.listar = listar;
	exports.registrar = registrar;

	var _axios = __webpack_require__(349);

	var _axios2 = _interopRequireDefault(_axios);

	var _semilleros = __webpack_require__(371);

	var _api = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function error_listar(error) {
	  return {
	    error: error,
	    type: _semilleros.ERROR_LISTAR_SEMILLERO
	  };
	}

	function error_post_insert(error) {
	  return {
	    error: error,
	    type: _semilleros.ERROR_INSERTAR_SEMILLERO
	  };
	}

	function semillero_listar_request(response) {
	  return function (dispatch) {
	    dispatch({
	      response: response,
	      type: _semilleros.LISTAR_SEMILLEROS
	    });
	  };
	}

	function semillero_post_request(response) {
	  return function (dispatch) {
	    dispatch({
	      response: response,
	      type: _semilleros.SUCCESSFULL_INSERT_SEMILLERO
	    });
	  };
	}

	function listar() {
	  return function (dispatch) {
	    return _axios2.default.get(_api.SEMILLERO_GET_SEMILLEROS).then(function (response) {
	      if (response.status >= 200 && response.status < 300) {
	        console.log('Response listar semilleros: ', response);

	        dispatch(semillero_listar_request(response));
	      } else {
	        var error = new Error(response.statusText);
	        error.response = response;

	        dispatch(error_listar(error));
	      }
	    }).catch(function (err) {
	      var error = new Error(err);
	      dispatch(error_listar(error));
	    });
	  };
	}

	function registrar(semillero_data) {
	  return function (dispatch) {
	    _axios2.default.post(_api.SEMILLERO_POST_SEMILLERO).then(function (response) {
	      if (response.status >= 200 && response.status < 300) {
	        console.log('Response registrar semillero: ', response);
	        dispatch(semillero_post_request(response));
	      } else {
	        var error = new Error(response.statusText);
	        error.response = response;

	        dispatch(error_post_insert(error));
	      }
	    }).catch(function (error) {
	      var err = new Error(error);

	      dispatch(error_post_insert(err));
	    });
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "semilleros.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(350);

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);
	var bind = __webpack_require__(352);
	var Axios = __webpack_require__(353);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance();

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(defaultConfig) {
	  return createInstance(defaultConfig);
	};

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(370);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(352);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 352 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(354);
	var utils = __webpack_require__(351);
	var InterceptorManager = __webpack_require__(356);
	var dispatchRequest = __webpack_require__(357);
	var isAbsoluteURL = __webpack_require__(368);
	var combineURLs = __webpack_require__(369);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 */
	function Axios(defaultConfig) {
	  this.defaults = utils.merge(defaults, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);
	var normalizeHeaderName = __webpack_require__(355);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	module.exports = {
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(351);
	var transformData = __webpack_require__(358);

	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter;

	  if (typeof config.adapter === 'function') {
	    // For custom adapter support
	    adapter = config.adapter;
	  } else if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(359);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(359);
	  }

	  return Promise.resolve(config)
	    // Wrap synchronous adapter errors and pass configuration
	    .then(adapter)
	    .then(function onFulfilled(response) {
	      // Transform response data
	      response.data = transformData(
	        response.data,
	        response.headers,
	        config.transformResponse
	      );

	      return response;
	    }, function onRejected(error) {
	      // Transform response data
	      if (error && error.response) {
	        error.response.data = transformData(
	          error.response.data,
	          error.response.headers,
	          config.transformResponse
	        );
	      }

	      return Promise.reject(error);
	    });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(200)))

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);
	var settle = __webpack_require__(360);
	var buildURL = __webpack_require__(363);
	var parseHeaders = __webpack_require__(364);
	var isURLSameOrigin = __webpack_require__(365);
	var createError = __webpack_require__(361);
	var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(366);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("production") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      if (request.status === 0) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(367);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }


	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(361);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(362);

	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 362 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 366 */
/***/ function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(351);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 368 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 369 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 370 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	  Estados del reducer
	 */
	var VER_SEMILLERO = exports.VER_SEMILLERO = 'VER_SEMILLERO';
	var INSERTAR_SEMILLERO = exports.INSERTAR_SEMILLERO = 'INSERTAR_SEMILLERO';
	var ELIMINAR_SEMILLERO = exports.ELIMINAR_SEMILLERO = 'ELIMINAR_SEMILLERO';
	var LISTAR_SEMILLEROS = exports.LISTAR_SEMILLEROS = 'LISTAR_SEMILLEROS';

	/*
	Estados de api
	 */
	var ERROR_INSERTAR_SEMILLERO = exports.ERROR_INSERTAR_SEMILLERO = 'ERROR_INSERTAR_SEMILLERO';
	var ERROR_ACTUALIZAR_SEMILLERO = exports.ERROR_ACTUALIZAR_SEMILLERO = 'ERROR_ACTUALIZAR_SEMILLERO';
	var ERROR_ELIMINAR_SEMILLERO = exports.ERROR_ELIMINAR_SEMILLERO = 'ERROR_ELIMINAR_SEMILLERO';
	var ERROR_LISTAR_SEMILLERO = exports.ERROR_LISTAR_SEMILLERO = 'ERROR_LISTAR_SEMILLERO';

	var SUCCESSFULL_INSERT_SEMILLERO = exports.SUCCESSFULL_INSERT_SEMILLERO = 'SUCCESSFULL_INSERT_SEMILLERO';
	var SUCCESSFULL_UPDATE_SEMILLERO = exports.SUCCESSFULL_UPDATE_SEMILLERO = 'SUCCESSFULL_UPDATE_SEMILLERO';
	var SUCCESSFULL_DELETE_SEMILLERO = exports.SUCCESSFULL_DELETE_SEMILLERO = 'SUCCESSFULL_DELETE_SEMILLERO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "semilleros.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PREFIX = 'http://172.16.31.150/semilleros/api';

	/**
	 * menu usuario 
	 */
	var MENU_USUARIO_GET_MENUS_USUARIO = exports.MENU_USUARIO_GET_MENUS_USUARIO = PREFIX + '/menu_usuario/get_menu_usuario';
	var MENU_USUARIO_POST_MENU_USUARIO = exports.MENU_USUARIO_POST_MENU_USUARIO = PREFIX + '/menu_usuario/insert_menu_usuario';
	var MENU_USUARIO_DELETE_MENU_USUARIO = exports.MENU_USUARIO_DELETE_MENU_USUARIO = PREFIX + '/menu_usuario/delete_menu_usuario';

	/**
	 * subpermisos 
	 */
	var SUBPERMISO_GET_SUBPERMISO = exports.SUBPERMISO_GET_SUBPERMISO = PREFIX + '/subpermisos/get_subpermisos';
	var SUBPERMISO_POST_SUBPERMISO = exports.SUBPERMISO_POST_SUBPERMISO = PREFIX + '/subpermisos/insert_subpermisos';
	var SUBPERMISO_DELETE_SUBPERMISO = exports.SUBPERMISO_DELETE_SUBPERMISO = PREFIX + '/subpermisos/delete_subpermisos';

	/**
	 * permisos 
	 */
	var PERMISO_GET_PERMISO = exports.PERMISO_GET_PERMISO = PREFIX + '/permisos/get_permisos';
	var PERMISO_POST_PERMISO = exports.PERMISO_POST_PERMISO = PREFIX + '/permisos/insert_permisos';
	var PERMISO_DELETE_PERMISO = exports.PERMISO_DELETE_PERMISO = PREFIX + '/permisos/delete_permisos';

	/**
	 * Cuenta de correo 
	 */
	var CUENTA_CORREO_GET_CUENTA_CORREO = exports.CUENTA_CORREO_GET_CUENTA_CORREO = PREFIX + '/cuentacorreo/get_cuentacorreo';
	var CUENTA_CORREO_POST_CUENTA_CORREO = exports.CUENTA_CORREO_POST_CUENTA_CORREO = PREFIX + '/cuentacorreo/insert_cuentacorreo';
	var CUENTA_CORREO_DELETE_CUENTA_CORREO = exports.CUENTA_CORREO_DELETE_CUENTA_CORREO = PREFIX + '/cuentacorreo/delete_cuentacorreo';

	/**
	 * Tipo curso 
	 */
	var TIPO_CURSO_GET_TIPOS_CURSO = exports.TIPO_CURSO_GET_TIPOS_CURSO = PREFIX + '/tipo_curso/get_tipo_curso';
	var TIPO_CURSO_POST_TIPO_CURSO = exports.TIPO_CURSO_POST_TIPO_CURSO = PREFIX + '/tipo_curso/insert_tipo_curso';
	var TIPO_CURSO_DELETE_TIPO_CURSO = exports.TIPO_CURSO_DELETE_TIPO_CURSO = PREFIX + '/tipo_curso/delete_tipo_curso';

	/**
	 * Nivel 
	 */
	var NIVEL_GET_NIVELES = exports.NIVEL_GET_NIVELES = PREFIX + '/nivel/get_nivel';
	var NIVEL_POST_NIVEL = exports.NIVEL_POST_NIVEL = PREFIX + '/nivel/insert_nivel';
	var NIVEL_DELETE_NIVEL = exports.NIVEL_DELETE_NIVEL = PREFIX + '/nivel/delete_nivel';

	/**
	 * Correo enviado 
	 */
	var CORREO_ENVIADO_GET_CORREOS_ENVIADOS = exports.CORREO_ENVIADO_GET_CORREOS_ENVIADOS = PREFIX + '/correosenviados/get_correosenviados';
	var CORREO_ENVIADO_POST_CORREO_ENVIADO = exports.CORREO_ENVIADO_POST_CORREO_ENVIADO = PREFIX + '/correosenviados/insert_correosenviados';
	var CORREO_ENVIADO_DELETE_CORREO_ENVIADO = exports.CORREO_ENVIADO_DELETE_CORREO_ENVIADO = PREFIX + '/correosenviados/delete_correosenviados';

	/**
	 * Asignacion noticia 
	 */
	var NOTICIA_GET_NOTICIAS = exports.NOTICIA_GET_NOTICIAS = PREFIX + '/noticia/get_noticia';
	var NOTICIA_POST_NOTICIA = exports.NOTICIA_POST_NOTICIA = PREFIX + '/noticia/insert_noticia';
	var NOTICIA_DELETE_NOTICIA = exports.NOTICIA_DELETE_NOTICIA = PREFIX + '/noticia/delete_noticia';

	/**
	 * Asignacion tareas 
	 */
	var ASIGNACION_TAREAS_GET_ASIGNACION_TAREAS = exports.ASIGNACION_TAREAS_GET_ASIGNACION_TAREAS = PREFIX + '/asignaciontarea/get_asignaciontarea';
	var ASIGNACION_TAREAS_POST_ASIGNACION_TAREA = exports.ASIGNACION_TAREAS_POST_ASIGNACION_TAREA = PREFIX + '/asignaciontarea/insert_asignaciontarea';
	var ASIGNACION_TAREAS_DELETE_ASIGNACION_TAREA = exports.ASIGNACION_TAREAS_DELETE_ASIGNACION_TAREA = PREFIX + '/asignaciontarea/delete_asignaciontarea';

	/**
	 * ROLES
	 */
	var ROL_GET_ROLES = exports.ROL_GET_ROLES = PREFIX + '/rol/get_rol';
	var ROL_POST_ROL = exports.ROL_POST_ROL = PREFIX + '/rol/insert_rol';
	var ROL_DELETE_ROL = exports.ROL_DELETE_ROL = PREFIX + '/rol/delete_rol';

	/**
	 * Semilleros
	 */
	var SEMILLERO_GET_SEMILLEROS = exports.SEMILLERO_GET_SEMILLEROS = PREFIX + '/semillero/get_semillero';
	var SEMILLERO_POST_SEMILLERO = exports.SEMILLERO_POST_SEMILLERO = PREFIX + '/semillero/insert_semillero';
	var SEMILLERO_DELETE_SEMILLERO = exports.SEMILLERO_DELETE_SEMILLERO = PREFIX + '/semillero/delete_semillero';

	/**
	 * Actividades
	 */
	var ACTIVIDAD_GET_ACTIVIDADES = exports.ACTIVIDAD_GET_ACTIVIDADES = PREFIX + '/actividad/get_actividad';
	var ACTIVIDAD_POST_ACTIVIDAD = exports.ACTIVIDAD_POST_ACTIVIDAD = PREFIX + '/actividad/insert_actividad';
	var ACTIVIDAD_DELETE_ACTIVIDAD = exports.ACTIVIDAD_DELETE_ACTIVIDAD = PREFIX + '/actividad/delete_actividad';

	/**
	 * Adjunto tareas
	 */
	var ACTIVIDAD_GET_ADJUNTO_TAREAS = exports.ACTIVIDAD_GET_ADJUNTO_TAREAS = PREFIX + '/actividad/get_adjunto_tareas';
	var ACTIVIDAD_POST_ADJUNTO_TAREAS = exports.ACTIVIDAD_POST_ADJUNTO_TAREAS = PREFIX + '/actividad/insert_adjunto_tareas';
	var ACTIVIDAD_DELETE_ADJUNTO_TAREAS = exports.ACTIVIDAD_DELETE_ADJUNTO_TAREAS = PREFIX + '/actividad/delete_adjunto_tareas';

	/**
	 * Competencias
	 */
	var COMPETENCIA_GET_COMPETENCIAS = exports.COMPETENCIA_GET_COMPETENCIAS = PREFIX + '/competencia/get_competencia';
	var COMPETENCIA_POST_COMPETENCIA = exports.COMPETENCIA_POST_COMPETENCIA = PREFIX + '/competencia/insert_competencia';
	var COMPETENCIA_DELETE_COMPETENCIA = exports.COMPETENCIA_DELETE_COMPETENCIA = PREFIX + '/competencia/delete_competencia';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.errorListar = errorListar;
	exports.noticia_listar_request = noticia_listar_request;
	exports.noticia_post_request = noticia_post_request;
	exports.listar = listar;
	exports.registrar = registrar;

	var _axios = __webpack_require__(349);

	var _axios2 = _interopRequireDefault(_axios);

	var _noticia = __webpack_require__(374);

	var _api = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function errorListar(error) {
	  return {
	    error: error,
	    type: _noticia.ERROR_LISTAR_NOTICIAS
	  };
	}

	function noticia_listar_request(response) {
	  return function (dispatch) {
	    dispatch({
	      response: response,
	      type: _noticia.LISTAR_NOTICIAS
	    });
	  };
	}

	function noticia_post_request(response) {
	  return function (dispatch) {
	    dispatch({
	      response: response,
	      type: _noticia.SUCCESSFULL_INSERT_NOTICIA
	    });
	  };
	}

	function listar() {
	  return function (dispatch) {
	    return _axios2.default.get(_api.NOTICIA_GET_NOTICIAS).then(function (response) {
	      if (response.status >= 200 && response.status < 300) {
	        console.log('Response listar NOTICIAs: ', response);

	        dispatch(noticia_listar_request(response));
	      } else {
	        var error = new Error(response.statusText);
	        error.response = response;

	        dispatch(errorListar(error));
	      }
	    }).catch(function (err) {
	      var error = new Error(err);
	      dispatch(errorListar(error));
	    });
	  };
	}

	function registrar(noticia_data) {
	  return function (dispatch) {
	    _axios2.default.post(_api.NOTICIA_POST_NOTICIA).then(function (response) {
	      if (response.status >= 200 && response.status < 300) {
	        console.log('Response registrar noticia: ', response);
	        dispatch(noticia_post_request(response));
	      } else {
	        var error = new Error(response.statusText);
	        error.response = response;

	        dispatch(errorListar(error));
	      }
	    }).catch(function (error) {
	      var err = new Error(error);

	      dispatch(errorListar(err));
	    });
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "noticia.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_NOTICIA = exports.VER_NOTICIA = 'VER_NOTICIA';
	var INSERTAR_NOTICIA = exports.INSERTAR_NOTICIA = 'INSERTAR_NOTICIA';
	var ELIMINAR_NOTICIA = exports.ELIMINAR_NOTICIA = 'ELIMINAR_NOTICIA';
	var LISTAR_NOTICIAS = exports.LISTAR_NOTICIAS = 'LISTAR_NOTICIAS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_NOTICIA = exports.ERROR_INSERTAR_NOTICIA = 'ERROR_INSERTAR_NOTICIA';
	var ERROR_ACTUALIZAR_NOTICIA = exports.ERROR_ACTUALIZAR_NOTICIA = 'ERROR_ACTUALIZAR_NOTICIA';
	var ERROR_ELIMINAR_NOTICIA = exports.ERROR_ELIMINAR_NOTICIA = 'ERROR_ELIMINAR_NOTICIA';
	var ERROR_LISTAR_NOTICIAS = exports.ERROR_LISTAR_NOTICIAS = 'ERROR_LISTAR_NOTICIAS';
	var ERROR_NOTICIA = exports.ERROR_NOTICIA = 'ERROR_NOTICIA';

	var SUCCESSFULL_INSERT_NOTICIA = exports.SUCCESSFULL_INSERT_NOTICIA = 'SUCCESSFULL_INSERT_NOTICIA';
	var SUCCESSFULL_UPDATE_NOTICIA = exports.SUCCESSFULL_UPDATE_NOTICIA = 'SUCCESSFULL_UPDATE_NOTICIA';
	var SUCCESSFULL_DELETE_NOTICIA = exports.SUCCESSFULL_DELETE_NOTICIA = 'SUCCESSFULL_DELETE_NOTICIA';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "noticia.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(376);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(378)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(377)();
	// imports


	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"style.css","sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 377 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Container = function (_Component) {
	  (0, _inherits3.default)(Container, _Component);

	  function Container(props) {
	    (0, _classCallCheck3.default)(this, Container);
	    return (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this, props));
	  }

	  (0, _createClass3.default)(Container, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children
	      );
	    }
	  }]);
	  return Container;
	}(_react.Component);

	exports.default = Container;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "container.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(105);

	var _reactRedux = __webpack_require__(98);

	var _reactRouter = __webpack_require__(1);

	var _About = __webpack_require__(381);

	var _About2 = _interopRequireDefault(_About);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = function (_Component) {
	  (0, _inherits3.default)(About, _Component);

	  function About() {
	    (0, _classCallCheck3.default)(this, About);
	    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(About, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var todos = _props.todos;
	      var actions = _props.actions;
	      var children = _props.children;


	      return _react2.default.createElement(_About2.default, null);
	    }
	  }]);
	  return About;
	}(_react.Component);

	exports.default = About;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutComponent = function (_Component) {
	  (0, _inherits3.default)(AboutComponent, _Component);

	  function AboutComponent(props) {
	    (0, _classCallCheck3.default)(this, AboutComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (AboutComponent.__proto__ || (0, _getPrototypeOf2.default)(AboutComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(AboutComponent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'h1',
	        null,
	        'Hola estee es el acerca de'
	      );
	    }
	  }]);
	  return AboutComponent;
	}(_react.Component);

	exports.default = AboutComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(105);

	var _reactRedux = __webpack_require__(98);

	var _EventosComponent = __webpack_require__(383);

	var _EventosComponent2 = _interopRequireDefault(_EventosComponent);

	var _semilleros = __webpack_require__(348);

	var SemilleroActions = _interopRequireWildcard(_semilleros);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Index = function (_Component) {
	  (0, _inherits3.default)(Index, _Component);

	  function Index() {
	    (0, _classCallCheck3.default)(this, Index);
	    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Index, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_EventosComponent2.default, null)
	      );
	    }
	  }]);
	  return Index;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    semilleros: state.semilleros
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(SemilleroActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EventosComponent = function (_Component) {
	  (0, _inherits3.default)(EventosComponent, _Component);

	  function EventosComponent() {
	    (0, _classCallCheck3.default)(this, EventosComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (EventosComponent.__proto__ || (0, _getPrototypeOf2.default)(EventosComponent)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(EventosComponent, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "section",
	          { id: "mu-page-breadcrumb" },
	          _react2.default.createElement(
	            "div",
	            { className: "container" },
	            _react2.default.createElement(
	              "div",
	              { className: "row" },
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-12" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "mu-page-breadcrumb-area" },
	                  _react2.default.createElement(
	                    "h2",
	                    null,
	                    "Eventos"
	                  ),
	                  _react2.default.createElement(
	                    "ol",
	                    { className: "breadcrumb" },
	                    _react2.default.createElement(
	                      "li",
	                      null,
	                      _react2.default.createElement(
	                        "a",
	                        { href: "#" },
	                        "Index"
	                      )
	                    ),
	                    _react2.default.createElement(
	                      "li",
	                      { className: "active" },
	                      "Principal"
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "section",
	          { id: "mu-course-content" },
	          _react2.default.createElement(
	            "div",
	            { className: "container" },
	            _react2.default.createElement(
	              "div",
	              { className: "row" },
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-12" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "mu-course-content-area" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "row" },
	                    _react2.default.createElement(
	                      "div",
	                      { className: "col-md-9" },
	                      _react2.default.createElement(
	                        "div",
	                        { className: "mu-course-container mu-course-details" },
	                        _react2.default.createElement(
	                          "div",
	                          { className: "row" },
	                          _react2.default.createElement(
	                            "div",
	                            { className: "col-md-12" },
	                            _react2.default.createElement(
	                              "div",
	                              { className: "mu-latest-course-single" },
	                              _react2.default.createElement(
	                                "figure",
	                                { className: "mu-latest-course-img" },
	                                _react2.default.createElement(
	                                  "a",
	                                  { href: "#" },
	                                  _react2.default.createElement("img", { src: "assets/img/courses/1.jpg", alt: "img" })
	                                ),
	                                _react2.default.createElement(
	                                  "figcaption",
	                                  { className: "mu-latest-course-imgcaption" },
	                                  _react2.default.createElement(
	                                    "a",
	                                    { href: "#" },
	                                    "Drawing"
	                                  ),
	                                  _react2.default.createElement(
	                                    "span",
	                                    null,
	                                    _react2.default.createElement("i", { className: "fa fa-clock-o" }),
	                                    "90Days"
	                                  )
	                                )
	                              ),
	                              _react2.default.createElement(
	                                "div",
	                                { className: "mu-latest-course-single-content" },
	                                _react2.default.createElement(
	                                  "h2",
	                                  null,
	                                  _react2.default.createElement(
	                                    "a",
	                                    { href: "#" },
	                                    "Lorem ipsum dolor sit amet."
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "h4",
	                                  null,
	                                  "Course Information"
	                                ),
	                                _react2.default.createElement(
	                                  "ul",
	                                  null,
	                                  _react2.default.createElement(
	                                    "li",
	                                    null,
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "Course Price"
	                                    ),
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "$250"
	                                    )
	                                  ),
	                                  _react2.default.createElement(
	                                    "li",
	                                    null,
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "Place"
	                                    ),
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "California, USA"
	                                    )
	                                  ),
	                                  _react2.default.createElement(
	                                    "li",
	                                    null,
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "Total Students"
	                                    ),
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "800+"
	                                    )
	                                  ),
	                                  _react2.default.createElement(
	                                    "li",
	                                    null,
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "Course Duration"
	                                    ),
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "4 Weeks"
	                                    )
	                                  ),
	                                  _react2.default.createElement(
	                                    "li",
	                                    null,
	                                    " ",
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "Course Start"
	                                    ),
	                                    " ",
	                                    _react2.default.createElement(
	                                      "span",
	                                      null,
	                                      "July 25, 2016"
	                                    )
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "h4",
	                                  null,
	                                  "Description"
	                                ),
	                                _react2.default.createElement(
	                                  "p",
	                                  null,
	                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia."
	                                ),
	                                _react2.default.createElement(
	                                  "p",
	                                  null,
	                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quo est itaque vero porro quasi illo ex consequuntur ad animi commodi, ipsam provident voluptas vel adipisci."
	                                ),
	                                _react2.default.createElement(
	                                  "blockquote",
	                                  null,
	                                  _react2.default.createElement(
	                                    "p",
	                                    null,
	                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Deleniti, placeat, ipsa.Modi sed quibusdam vel autem fugit, eaque, iste.Excepturi fugit dignissimos suscipit dolor perferendis debitis magni sed, quia ab."
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "p",
	                                  null,
	                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis ea consequatur doloremque deleniti error ullam, accusamus vel est alias, sit.Similique voluptas aliquid, excepturi accusamus, sequi ducimus incidunt mollitia non."
	                                ),
	                                _react2.default.createElement(
	                                  "p",
	                                  null,
	                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi saepe possimus doloribus quod quibusdam officia suscipit qui illum nemo itaque, porro ipsam tempore enim error eius quia, culpa.Reprehenderit consequuntur voluptatem dolorum magni natus inventore molestias veritatis eos aspernatur repudiandae."
	                                ),
	                                _react2.default.createElement(
	                                  "h4",
	                                  null,
	                                  "Course Outline"
	                                ),
	                                _react2.default.createElement(
	                                  "div",
	                                  { className: "table-responsive" },
	                                  _react2.default.createElement(
	                                    "table",
	                                    { className: "table" },
	                                    _react2.default.createElement(
	                                      "thead",
	                                      null,
	                                      _react2.default.createElement(
	                                        "tr",
	                                        null,
	                                        _react2.default.createElement(
	                                          "th",
	                                          null,
	                                          " Title "
	                                        ),
	                                        _react2.default.createElement(
	                                          "th",
	                                          null,
	                                          " Course Time "
	                                        ),
	                                        _react2.default.createElement(
	                                          "th",
	                                          null,
	                                          " Spent Time "
	                                        ),
	                                        _react2.default.createElement(
	                                          "th",
	                                          null,
	                                          " Status "
	                                        )
	                                      )
	                                    ),
	                                    _react2.default.createElement(
	                                      "tbody",
	                                      null,
	                                      _react2.default.createElement(
	                                        "tr",
	                                        null,
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 1. Topic 1 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 15: 30 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 13: 80 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " Successful "
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "tr",
	                                        null,
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 2. Topic 2 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 15: 30 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 13: 80 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " Successful "
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "tr",
	                                        null,
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 3. Topic 3 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 15: 30 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " - "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " Successful "
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "tr",
	                                        null,
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 4. Topic 4 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 15: 30 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 13: 80 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " Successful "
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "tr",
	                                        null,
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 5. Topic 5 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 15: 30 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " - "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " Waiting "
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "tr",
	                                        null,
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 6. Topic 6 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 15: 30 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " 13: 80 "
	                                        ),
	                                        _react2.default.createElement(
	                                          "td",
	                                          null,
	                                          " - "
	                                        )
	                                      )
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "div",
	                        { className: "row" },
	                        _react2.default.createElement(
	                          "div",
	                          { className: "col-md-12" },
	                          _react2.default.createElement(
	                            "div",
	                            { className: "mu-related-item" },
	                            _react2.default.createElement(
	                              "h3",
	                              null,
	                              "Related Courses"
	                            ),
	                            _react2.default.createElement(
	                              "div",
	                              { className: "mu-related-item-area" },
	                              _react2.default.createElement(
	                                "div",
	                                { id: "mu-related-item-slide" },
	                                _react2.default.createElement(
	                                  "div",
	                                  { className: "col-md-6" },
	                                  _react2.default.createElement(
	                                    "div",
	                                    { className: "mu-latest-course-single" },
	                                    _react2.default.createElement(
	                                      "figure",
	                                      { className: "mu-latest-course-img" },
	                                      _react2.default.createElement(
	                                        "a",
	                                        { href: "#" },
	                                        _react2.default.createElement("img", { alt: "img", src: "assets/img/courses/1.jpg" })
	                                      ),
	                                      _react2.default.createElement(
	                                        "figcaption",
	                                        { className: "mu-latest-course-imgcaption" },
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#" },
	                                          "Drawing"
	                                        ),
	                                        _react2.default.createElement(
	                                          "span",
	                                          null,
	                                          _react2.default.createElement("i", { className: "fa fa-clock-o" }),
	                                          "90Days"
	                                        )
	                                      )
	                                    ),
	                                    _react2.default.createElement(
	                                      "div",
	                                      { className: "mu-latest-course-single-content" },
	                                      _react2.default.createElement(
	                                        "h4",
	                                        null,
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#" },
	                                          "Lorem ipsum dolor sit amet."
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia."
	                                      ),
	                                      _react2.default.createElement(
	                                        "div",
	                                        { className: "mu-latest-course-single-contbottom" },
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#", className: "mu-course-details" },
	                                          "Details"
	                                        ),
	                                        _react2.default.createElement(
	                                          "span",
	                                          { href: "#", className: "mu-course-price" },
	                                          "$165.00"
	                                        )
	                                      )
	                                    )
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "div",
	                                  { className: "col-md-6" },
	                                  _react2.default.createElement(
	                                    "div",
	                                    { className: "mu-latest-course-single" },
	                                    _react2.default.createElement(
	                                      "figure",
	                                      { className: "mu-latest-course-img" },
	                                      _react2.default.createElement(
	                                        "a",
	                                        { href: "#" },
	                                        _react2.default.createElement("img", { alt: "img", src: "assets/img/courses/2.jpg" })
	                                      ),
	                                      _react2.default.createElement(
	                                        "figcaption",
	                                        { className: "mu-latest-course-imgcaption" },
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#" },
	                                          "Drawing"
	                                        ),
	                                        _react2.default.createElement(
	                                          "span",
	                                          null,
	                                          _react2.default.createElement("i", { className: "fa fa-clock-o" }),
	                                          "90Days"
	                                        )
	                                      )
	                                    ),
	                                    _react2.default.createElement(
	                                      "div",
	                                      { className: "mu-latest-course-single-content" },
	                                      _react2.default.createElement(
	                                        "h4",
	                                        null,
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#" },
	                                          "Lorem ipsum dolor sit amet."
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia."
	                                      ),
	                                      _react2.default.createElement(
	                                        "div",
	                                        { className: "mu-latest-course-single-contbottom" },
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#", className: "mu-course-details" },
	                                          "Details"
	                                        ),
	                                        _react2.default.createElement(
	                                          "span",
	                                          { href: "#", className: "mu-course-price" },
	                                          "$165.00"
	                                        )
	                                      )
	                                    )
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "div",
	                                  { className: "col-md-6" },
	                                  _react2.default.createElement(
	                                    "div",
	                                    { className: "mu-latest-course-single" },
	                                    _react2.default.createElement(
	                                      "figure",
	                                      { className: "mu-latest-course-img" },
	                                      _react2.default.createElement(
	                                        "a",
	                                        { href: "#" },
	                                        _react2.default.createElement("img", { alt: "img", src: "assets/img/courses/3.jpg" })
	                                      ),
	                                      _react2.default.createElement(
	                                        "figcaption",
	                                        { className: "mu-latest-course-imgcaption" },
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#" },
	                                          "Drawing"
	                                        ),
	                                        _react2.default.createElement(
	                                          "span",
	                                          null,
	                                          _react2.default.createElement("i", { className: "fa fa-clock-o" }),
	                                          "90Days"
	                                        )
	                                      )
	                                    ),
	                                    _react2.default.createElement(
	                                      "div",
	                                      { className: "mu-latest-course-single-content" },
	                                      _react2.default.createElement(
	                                        "h4",
	                                        null,
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#" },
	                                          "Lorem ipsum dolor sit amet."
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia."
	                                      ),
	                                      _react2.default.createElement(
	                                        "div",
	                                        { className: "mu-latest-course-single-contbottom" },
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#", className: "mu-course-details" },
	                                          "Details"
	                                        ),
	                                        _react2.default.createElement(
	                                          "span",
	                                          { href: "#", className: "mu-course-price" },
	                                          "$165.00"
	                                        )
	                                      )
	                                    )
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "div",
	                                  { className: "col-md-6" },
	                                  _react2.default.createElement(
	                                    "div",
	                                    { className: "mu-latest-course-single" },
	                                    _react2.default.createElement(
	                                      "figure",
	                                      { className: "mu-latest-course-img" },
	                                      _react2.default.createElement(
	                                        "a",
	                                        { href: "#" },
	                                        _react2.default.createElement("img", { alt: "img", src: "assets/img/courses/1.jpg" })
	                                      ),
	                                      _react2.default.createElement(
	                                        "figcaption",
	                                        { className: "mu-latest-course-imgcaption" },
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#" },
	                                          "Drawing"
	                                        ),
	                                        _react2.default.createElement(
	                                          "span",
	                                          null,
	                                          _react2.default.createElement("i", { className: "fa fa-clock-o" }),
	                                          "90Days"
	                                        )
	                                      )
	                                    ),
	                                    _react2.default.createElement(
	                                      "div",
	                                      { className: "mu-latest-course-single-content" },
	                                      _react2.default.createElement(
	                                        "h4",
	                                        null,
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#" },
	                                          "Lorem ipsum dolor sit amet."
	                                        )
	                                      ),
	                                      _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia."
	                                      ),
	                                      _react2.default.createElement(
	                                        "div",
	                                        { className: "mu-latest-course-single-contbottom" },
	                                        _react2.default.createElement(
	                                          "a",
	                                          { href: "#", className: "mu-course-details" },
	                                          "Details"
	                                        ),
	                                        _react2.default.createElement(
	                                          "span",
	                                          { href: "#", className: "mu-course-price" },
	                                          "$165.00"
	                                        )
	                                      )
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    _react2.default.createElement(
	                      "div",
	                      { className: "col-md-3" },
	                      _react2.default.createElement(
	                        "aside",
	                        { className: "mu-sidebar" },
	                        _react2.default.createElement(
	                          "div",
	                          { className: "mu-single-sidebar" },
	                          _react2.default.createElement(
	                            "h3",
	                            null,
	                            "Categories"
	                          ),
	                          _react2.default.createElement(
	                            "ul",
	                            { className: "mu-sidebar-catg" },
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "Web Design"
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "Web Development"
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "Math"
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "Physics"
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "Camestry"
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "English"
	                              )
	                            )
	                          )
	                        ),
	                        _react2.default.createElement(
	                          "div",
	                          { className: "mu-single-sidebar" },
	                          _react2.default.createElement(
	                            "h3",
	                            null,
	                            "Popular Course"
	                          ),
	                          _react2.default.createElement(
	                            "div",
	                            { className: "mu-sidebar-popular-courses" },
	                            _react2.default.createElement(
	                              "div",
	                              { className: "media" },
	                              _react2.default.createElement(
	                                "div",
	                                { className: "media-left" },
	                                _react2.default.createElement(
	                                  "a",
	                                  { href: "#" },
	                                  _react2.default.createElement("img", { className: "media-object", src: "assets/img/courses/1.jpg", alt: "img" })
	                                )
	                              ),
	                              _react2.default.createElement(
	                                "div",
	                                { className: "media-body" },
	                                _react2.default.createElement(
	                                  "h4",
	                                  { className: "media-heading" },
	                                  _react2.default.createElement(
	                                    "a",
	                                    { href: "#" },
	                                    "Medical Science"
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "span",
	                                  { className: "popular-course-price" },
	                                  "$200.00"
	                                )
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "div",
	                              { className: "media" },
	                              _react2.default.createElement(
	                                "div",
	                                { className: "media-left" },
	                                _react2.default.createElement(
	                                  "a",
	                                  { href: "#" },
	                                  _react2.default.createElement("img", { className: "media-object", src: "assets/img/courses/2.jpg", alt: "img" })
	                                )
	                              ),
	                              _react2.default.createElement(
	                                "div",
	                                { className: "media-body" },
	                                _react2.default.createElement(
	                                  "h4",
	                                  { className: "media-heading" },
	                                  _react2.default.createElement(
	                                    "a",
	                                    { href: "#" },
	                                    "Web Design"
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "span",
	                                  { className: "popular-course-price" },
	                                  "$250.00"
	                                )
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "div",
	                              { className: "media" },
	                              _react2.default.createElement(
	                                "div",
	                                { className: "media-left" },
	                                _react2.default.createElement(
	                                  "a",
	                                  { href: "#" },
	                                  _react2.default.createElement("img", { className: "media-object", src: "assets/img/courses/3.jpg", alt: "img" })
	                                )
	                              ),
	                              _react2.default.createElement(
	                                "div",
	                                { className: "media-body" },
	                                _react2.default.createElement(
	                                  "h4",
	                                  { className: "media-heading" },
	                                  _react2.default.createElement(
	                                    "a",
	                                    { href: "#" },
	                                    "Health & Sports"
	                                  )
	                                ),
	                                _react2.default.createElement(
	                                  "span",
	                                  { className: "popular-course-price" },
	                                  "$90.00"
	                                )
	                              )
	                            )
	                          )
	                        ),
	                        _react2.default.createElement(
	                          "div",
	                          { className: "mu-single-sidebar" },
	                          _react2.default.createElement(
	                            "h3",
	                            null,
	                            "Archives"
	                          ),
	                          _react2.default.createElement(
	                            "ul",
	                            { className: "mu-sidebar-catg mu-sidebar-archives" },
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "May ",
	                                _react2.default.createElement(
	                                  "span",
	                                  null,
	                                  "(25) "
	                                )
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "June ",
	                                _react2.default.createElement(
	                                  "span",
	                                  null,
	                                  "(35) "
	                                )
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "July ",
	                                _react2.default.createElement(
	                                  "span",
	                                  null,
	                                  "(20) "
	                                )
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "August ",
	                                _react2.default.createElement(
	                                  "span",
	                                  null,
	                                  "(125) "
	                                )
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "September ",
	                                _react2.default.createElement(
	                                  "span",
	                                  null,
	                                  "(45) "
	                                )
	                              )
	                            ),
	                            _react2.default.createElement(
	                              "li",
	                              null,
	                              _react2.default.createElement(
	                                "a",
	                                { href: "" },
	                                "October ",
	                                _react2.default.createElement(
	                                  "span",
	                                  null,
	                                  "(85) "
	                                )
	                              )
	                            )
	                          )
	                        ),
	                        _react2.default.createElement(
	                          "div",
	                          { className: "mu-single-sidebar" },
	                          _react2.default.createElement(
	                            "h3",
	                            null,
	                            "Tags Cloud"
	                          ),
	                          _react2.default.createElement(
	                            "div",
	                            { className: "tag-cloud" },
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              "Health"
	                            ),
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              "Science"
	                            ),
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              "Sports"
	                            ),
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              "Mathematics"
	                            ),
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              "Web Design"
	                            ),
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              "Admission"
	                            ),
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              "History"
	                            ),
	                            _react2.default.createElement(
	                              "a",
	                              { href: "#" },
	                              "Environment"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return EventosComponent;
	}(_react.Component);

	EventosComponent.propTypes = {};

	exports.default = EventosComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Eventos.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(105);

	var _reactRedux = __webpack_require__(98);

	var _MenuComponent = __webpack_require__(341);

	var _MenuComponent2 = _interopRequireDefault(_MenuComponent);

	var _semilleros = __webpack_require__(348);

	var SemilleroActions = _interopRequireWildcard(_semilleros);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Index = function (_Component) {
	  (0, _inherits3.default)(Index, _Component);

	  function Index() {
	    (0, _classCallCheck3.default)(this, Index);
	    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Index, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'a',
	          { className: 'scrollToTop', href: '#' },
	          _react2.default.createElement('i', { className: 'fa fa-angle-up' })
	        ),
	        _react2.default.createElement(_MenuComponent2.default, { titulo: 'Visibilidad' }),
	        this.props.children
	      );
	    }
	  }]);
	  return Index;
	}(_react.Component);

	function mapStateToProps(state) {
	  // console.log("mapStateToProps: ", state);
	  return {
	    semilleros: state.semilleros
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(SemilleroActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(386);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(105);

	var _reactRedux = __webpack_require__(98);

	var _LoginComponent = __webpack_require__(388);

	var _LoginComponent2 = _interopRequireDefault(_LoginComponent);

	var _login = __webpack_require__(506);

	var LoginActions = _interopRequireWildcard(_login);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Login = function (_Component) {
	  (0, _inherits3.default)(Login, _Component);

	  function Login(props) {
	    (0, _classCallCheck3.default)(this, Login);
	    return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));
	  }

	  (0, _createClass3.default)(Login, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: '_handleClick',
	    value: function _handleClick() {
	      var _this2 = this;

	      var actions = this.props.actions;


	      actions.login({ email: 'elemail@hotmail.com', password: '321123' }).then(function () {
	        console.log('===>>=>==> ', _this2.props.login);
	      }).catch(function (err) {
	        console.log('>>=>==> ', err);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var login = _props.login;
	      var actions = _props.actions;

	      // this.props.login();

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Login'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          (0, _stringify2.default)(login)
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this._handleClick.bind(this) },
	          'Click'
	        ),
	        _react2.default.createElement(_LoginComponent2.default, null)
	      );
	    }
	  }]);
	  return Login;
	}(_react.Component);

	function mapStateToProps(state) {
	  console.log("Los state de login:", state);

	  return {
	    login: state.login
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(LoginActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(387), __esModule: true };

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(266)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(389);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _formous = __webpack_require__(394);

	var _formous2 = _interopRequireDefault(_formous);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ErrorText = function (_Component) {
	  (0, _inherits3.default)(ErrorText, _Component);

	  function ErrorText() {
	    (0, _classCallCheck3.default)(this, ErrorText);
	    return (0, _possibleConstructorReturn3.default)(this, (ErrorText.__proto__ || (0, _getPrototypeOf2.default)(ErrorText)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ErrorText, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { color: '#f00' } },
	        this.props.errorText
	      );
	    }
	  }]);
	  return ErrorText;
	}(_react.Component);

	var LoginComponent = function (_Component2) {
	  (0, _inherits3.default)(LoginComponent, _Component2);

	  function LoginComponent(props) {
	    (0, _classCallCheck3.default)(this, LoginComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (LoginComponent.__proto__ || (0, _getPrototypeOf2.default)(LoginComponent)).call(this, props));
	  }

	  (0, _createClass3.default)(LoginComponent, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // Set default form values (might be appropriate in a different method
	      this.props.setDefaultValues({
	        password: 33,
	        email: 'Sir Fluffalot'
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(formStatus, fields) {
	      if (!formStatus.touched) {
	        alert('Please fill out the form.');
	        return;
	      }

	      if (!formStatus.valid) {
	        alert('Please address the errors in the form.');
	        return;
	      }

	      // All good! Do something with fields.email.value and fields.password.value
	      console.log(formStatus, fields);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var _props$fields = _props.fields;
	      var password = _props$fields.password;
	      var email = _props$fields.email;
	      var formSubmit = _props.formSubmit;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'form',
	          { onSubmit: formSubmit(this.handleSubmit) },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', (0, _extends3.default)({
	              placeholder: 'email',
	              type: 'text',
	              value: email.value
	            }, email.events)),
	            _react2.default.createElement(ErrorText, email.failProps)
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', (0, _extends3.default)({
	              placeholder: 'password',
	              type: 'text',
	              value: password.value
	            }, password.events)),
	            _react2.default.createElement(ErrorText, password.failProps)
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'button',
	              { type: 'submit' },
	              'Iniciar sesión'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return LoginComponent;
	}(_react.Component);

	var formousOptions = {
	  fields: {
	    email: {
	      tests: [{
	        critical: true,
	        failProps: {
	          errorText: 'email is required.'
	        },
	        test: function test(value) {
	          return value !== '';
	        }
	      }]
	    },

	    password: {
	      tests: [{
	        critical: true,
	        failProps: {
	          errorText: 'password should be a number.'
	        },
	        test: function test(value) {
	          return (/^\d*$/.test(value)
	          );
	        }
	      }, {
	        critical: false,
	        failProps: {
	          errorText: 'Are you sure you\'re that old? :o'
	        },
	        test: function test(value) {
	          return +value < 120;
	        }
	      }]
	    }
	  }
	};

	exports.default = (0, _formous2.default)(formousOptions)(LoginComponent);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Login.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(390);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(391), __esModule: true };

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(392);
	module.exports = __webpack_require__(266).Object.assign;

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(265);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(393)});

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(298)
	  , gOPS     = __webpack_require__(322)
	  , pIE      = __webpack_require__(323)
	  , toObject = __webpack_require__(256)
	  , IObject  = __webpack_require__(301)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(275)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _formous = __webpack_require__(395);

	var _formous2 = _interopRequireDefault(_formous);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _formous2.default;

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(396);

	var _dx = __webpack_require__(397);

	var _dx2 = _interopRequireDefault(_dx);

	var _helpers = __webpack_require__(505);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Formous = function Formous(options) {
	  return function (Wrapped) {
	    return function (_Component) {
	      _inherits(_class2, _Component);

	      function _class2(props) {
	        _classCallCheck(this, _class2);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class2).call(this, props));

	        _this.clearForm = function () {
	          var updatedFields = _this.initializeFields(true);
	          _this.updateFields((0, _immutable.fromJS)(updatedFields));
	        };

	        _this.handleSubmit = function (formHandler) {
	          return function (event) {
	            event.preventDefault();

	            var fields = undefined;
	            if (_this.state.currentField) {
	              var value = _this.state.fields.getIn([_this.state.currentField.name, 'value']);

	              fields = _this.testFieldAndUpdateState(_this.state.currentField, value);
	            }

	            var formState = _extends({}, _this.state.form, {
	              valid: _this.isFormValid(fields || _this.state.fields)
	            });

	            formHandler(formState, (fields || _this.state.fields).map(function (field) {
	              return { value: field.get('value') };
	            }).toJS());
	          };
	        };

	        _this.initializeFields = function (reset) {
	          var updatedFields = {};

	          for (var fieldName in options.fields) {
	            var fieldSpec = _extends({}, options.fields[fieldName], {
	              name: fieldName
	            });

	            var events = {
	              onBlur: _this.onBlur.bind(_this, fieldSpec),
	              onChange: _this.onChange.bind(_this, fieldSpec),
	              onFocus: _this.onFocus.bind(_this, fieldSpec)
	            };

	            var testResults = _this.testField(fieldSpec, '', true);

	            updatedFields[fieldName] = {
	              events: events,
	              valid: (0, _helpers.allTestsPassed)(testResults),
	              value: reset ? '' : _this.state.fields.getIn([fieldName, 'value']) || ''
	            };
	          }

	          return updatedFields;
	        };

	        _this.isFormValid = function (fields, options) {
	          var excludeField = options && options.excludeField;
	          var stateFields = fields.toJS();
	          var examineFields = Object.keys(stateFields).filter(function (fieldName) {
	            return fieldName !== excludeField;
	          });

	          if (examineFields.length === 0) return true;

	          var formValid = Object.keys(stateFields).filter(function (fieldName) {
	            return fieldName !== excludeField;
	          }).map(function (fieldName) {
	            return stateFields[fieldName];
	          }).every(function (field) {
	            return field.valid;
	          });

	          return typeof formValid === 'boolean' ? formValid : formValid.valid;
	        };

	        _this.markFieldAsValid = function (fieldName, valid, options) {
	          var fields = _this.state.fields.mergeDeep(_defineProperty({}, fieldName, {
	            failProps: options.quietly ? undefined : options.failProps,
	            valid: valid
	          }));

	          _this.updateFields(fields);
	        };

	        _this.onBlur = function (fieldSpec, _ref) {
	          var target = _ref.target;

	          _this.setState({ currentField: undefined });
	          _this.testFieldAndUpdateState(fieldSpec, target.value);
	        };

	        _this.onChange = function (fieldSpec, _ref2) {
	          var target = _ref2.target;

	          _this.setState({
	            fields: _this.state.fields.setIn([fieldSpec.name, 'value'], target.value)
	          });
	        };

	        _this.onFocus = function (fieldSpec) {
	          _this.setState({
	            currentField: fieldSpec,
	            form: _extends({}, _this.state.form, {
	              touched: true
	            })
	          });
	        };

	        _this.setDefaultValues = function (defaultData) {
	          if (!_this.defaultsSet) {
	            var defaults = {};

	            for (var fieldName in defaultData) {
	              var field = _extends({}, options.fields[fieldName], {
	                name: fieldName
	              });
	              var tests = options.fields[fieldName] && options.fields[fieldName].tests;
	              var testResults = void 0;

	              if (tests) {
	                testResults = _this.testField(field, defaultData[fieldName], true);
	              } else {
	                testResults = [];
	              }

	              defaults[fieldName] = {
	                valid: (0, _helpers.allTestsPassed)(testResults),
	                value: defaultData[fieldName]
	              };
	            }

	            var fields = _this.state.fields.mergeDeep(defaults);

	            _this.updateFields(fields);
	            _this.defaultsSet = true;
	          }
	        };

	        _this.setFieldsValidity = function (tests) {
	          var updatedFields = {};

	          if (tests.length === 0) {
	            (0, _dx.warn)(false, 'We should never see this? If you see this, please submit' + 'an issue at https://github.com/ffxsam/formous/issues');
	          } else {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	              for (var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var test = _step.value;

	                updatedFields[test.fieldName] = {
	                  failProps: test.passed || test.quiet ? undefined : test.failProps,
	                  valid: test.passed
	                };
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }

	            var fields = _this.state.fields.mergeDeep(updatedFields);
	            _this.updateFields(fields);

	            return fields;
	          }
	        };

	        _this.testField = function (fieldSpec, value, initial) {
	          var tests = fieldSpec.tests;
	          var completedTests = [];
	          var failedTestCount = 0;

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = tests[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var test = _step2.value;

	              var testResult = test.test(value, _this.state.fields.toJS());

	              completedTests = [_extends({}, test, {
	                passed: testResult,
	                fieldName: fieldSpec.name
	              })];

	              if (!testResult) break;
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          failedTestCount = completedTests.filter(function (test) {
	            return !test.passed;
	          }).length;

	          if (fieldSpec.alsoTest && !initial && failedTestCount === 0) {
	            fieldSpec.alsoTest.forEach(function (fieldName) {
	              var fieldInfo = _extends({}, options.fields[fieldName], {
	                name: fieldName
	              });
	              var fieldValue = _this.state.fields.getIn([fieldName, 'value']);
	              var sideEffectTests = _this.testField(fieldInfo, fieldValue);

	              sideEffectTests = sideEffectTests.map(function (test) {
	                return _extends({}, test, { quiet: true });
	              });

	              completedTests = [].concat(_toConsumableArray(completedTests), _toConsumableArray(sideEffectTests));
	            });
	          }

	          return completedTests;
	        };

	        _this.testFieldAndUpdateState = function (fieldSpec, value) {
	          var completedTests = _this.testField(fieldSpec, value);
	          return _this.setFieldsValidity(completedTests);
	        };

	        _this.updateFields = function (fields) {
	          _this.setState({
	            fields: fields,
	            form: _this.updateFormValidity(fields)
	          });
	        };

	        _this.updateFormValidity = function (fields) {
	          return _extends({}, _this.state.form, {
	            valid: _this.isFormValid(fields)
	          });
	        };

	        _this.defaultsSet = false;
	        _this.state = {
	          fields: (0, _immutable.Map)({}),
	          form: {
	            touched: false,
	            valid: false
	          }
	        };
	        return _this;
	      }

	      _createClass(_class2, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          var updatedFields = void 0;

	          if (!options.fields) {
	            (0, _dx.warn)(false, 'Put fields in their own object. See details: ' + 'https://gist.github.com/ffxsam/1233cef6c60df350cc4d35536428409b');
	            options.fields = _extends({}, options);
	          }

	          (0, _dx2.default)(options);
	          updatedFields = this.initializeFields();
	          this.updateFields((0, _immutable.fromJS)(updatedFields));
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(Wrapped, _extends({}, this.props, {
	            clearForm: this.clearForm,
	            fields: this.state.fields.toJS(),
	            formSubmit: this.handleSubmit,
	            formState: this.state.form,
	            setDefaultValues: this.setDefaultValues
	          }));
	        }
	      }]);

	      return _class2;
	    }(_react.Component);
	  };
	};

	exports.default = Formous;

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.warn = warn;
	exports.inv = inv;
	exports.default = runChecks;

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _findIndex = __webpack_require__(398);

	var _findIndex2 = _interopRequireDefault(_findIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function warn(test, message) {
	  (0, _warning2.default)(test, '[Formous] ' + message);
	}

	function inv(test, message) {
	  (0, _invariant2.default)(test, '[Formous] ' + message);
	}

	function checkTestProp(tests, propName, propType) {
	  var comparator = function comparator(thing, expectedType) {
	    if (!propType) {
	      return typeof thing !== 'undefined';
	    }

	    return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === expectedType;
	  };

	  return tests.filter(function (t) {
	    return comparator(t[propName], propType);
	  }).length === tests.length;
	}

	function runChecks(options) {
	  for (var fieldName in options.fields) {
	    var field = options.fields[fieldName];

	    inv(!!field.tests, 'You need a \'tests\' array for the "' + fieldName + '" ' + 'field.');

	    var tests = field.tests;
	    var numTests = tests.length;
	    var nonCriticalInd = void 0;

	    warn(!field.name, 'Object property \'name\' (declared on the "' + fieldName + '"' + ' field) is no longer required.');

	    warn(numTests > 0, 'The "' + fieldName + '" field doesn\'t seem to have any tests. ' + 'The property is defined but it\'s an empty array. Is this a ' + 'mistake?');

	    inv(checkTestProp(tests, 'critical', 'boolean'), 'Make sure all of the "' + fieldName + '" field\'s tests have the ' + '\'critical\' property, and that they\'re boolean values.');

	    warn(checkTestProp(tests, 'failProps', 'object'), 'Make sure all of the "' + fieldName + '" field\'s tests have the ' + '\'failProps\' property, and that they\'re objects.');

	    nonCriticalInd = (0, _findIndex2.default)(tests, function (test) {
	      return !test.critical;
	    });

	    if (nonCriticalInd >= 0 && tests[nonCriticalInd + 1]) {
	      for (var i = nonCriticalInd + 1; i < numTests; i++) {
	        inv(!tests[i].critical, 'Double-check the "' + fieldName + '" ' + 'field\'s tests. Remember that critical tests must *always* ' + 'come before non-critical ones.');
	      }
	    }
	  }
	}

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(399),
	    baseIteratee = __webpack_require__(400),
	    toInteger = __webpack_require__(502);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	module.exports = findIndex;


/***/ },
/* 399 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(401),
	    baseMatchesProperty = __webpack_require__(483),
	    identity = __webpack_require__(498),
	    isArray = __webpack_require__(464),
	    property = __webpack_require__(499);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(402),
	    getMatchData = __webpack_require__(480),
	    matchesStrictComparable = __webpack_require__(482);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(403),
	    baseIsEqual = __webpack_require__(443);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(404),
	    stackClear = __webpack_require__(412),
	    stackDelete = __webpack_require__(413),
	    stackGet = __webpack_require__(414),
	    stackHas = __webpack_require__(415),
	    stackSet = __webpack_require__(416);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(405),
	    listCacheDelete = __webpack_require__(406),
	    listCacheGet = __webpack_require__(409),
	    listCacheHas = __webpack_require__(410),
	    listCacheSet = __webpack_require__(411);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 405 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(407);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(408);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 408 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(407);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(407);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(407);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(404);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 413 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 414 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 415 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(404),
	    Map = __webpack_require__(417),
	    MapCache = __webpack_require__(428);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(418),
	    root = __webpack_require__(424);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(419),
	    getValue = __webpack_require__(427);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(420),
	    isMasked = __webpack_require__(422),
	    isObject = __webpack_require__(421),
	    toSource = __webpack_require__(426);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(421);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 421 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(423);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(424);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(425);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 425 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 426 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 427 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(429),
	    mapCacheDelete = __webpack_require__(437),
	    mapCacheGet = __webpack_require__(440),
	    mapCacheHas = __webpack_require__(441),
	    mapCacheSet = __webpack_require__(442);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(430),
	    ListCache = __webpack_require__(404),
	    Map = __webpack_require__(417);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(431),
	    hashDelete = __webpack_require__(433),
	    hashGet = __webpack_require__(434),
	    hashHas = __webpack_require__(435),
	    hashSet = __webpack_require__(436);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(432);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(418);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 433 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(432);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(432);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(432);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(438);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(439);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 439 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(438);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(438);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(438);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(444),
	    isObject = __webpack_require__(421),
	    isObjectLike = __webpack_require__(110);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(403),
	    equalArrays = __webpack_require__(445),
	    equalByTag = __webpack_require__(451),
	    equalObjects = __webpack_require__(456),
	    getTag = __webpack_require__(469),
	    isArray = __webpack_require__(464),
	    isTypedArray = __webpack_require__(475);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(446),
	    arraySome = __webpack_require__(449),
	    cacheHas = __webpack_require__(450);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(428),
	    setCacheAdd = __webpack_require__(447),
	    setCacheHas = __webpack_require__(448);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 447 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 448 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 449 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 450 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(452),
	    Uint8Array = __webpack_require__(453),
	    eq = __webpack_require__(408),
	    equalArrays = __webpack_require__(445),
	    mapToArray = __webpack_require__(454),
	    setToArray = __webpack_require__(455);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(424);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(424);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 454 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 455 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(457);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(458),
	    baseKeys = __webpack_require__(466),
	    isArrayLike = __webpack_require__(462);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(459),
	    isArguments = __webpack_require__(460),
	    isArray = __webpack_require__(464),
	    isIndex = __webpack_require__(465);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 459 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(461);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(462),
	    isObjectLike = __webpack_require__(110);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(420),
	    isLength = __webpack_require__(463);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 463 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 464 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 465 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(467),
	    nativeKeys = __webpack_require__(468);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 467 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(109);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(470),
	    Map = __webpack_require__(417),
	    Promise = __webpack_require__(471),
	    Set = __webpack_require__(472),
	    WeakMap = __webpack_require__(473),
	    baseGetTag = __webpack_require__(474),
	    toSource = __webpack_require__(426);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(418),
	    root = __webpack_require__(424);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(418),
	    root = __webpack_require__(424);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(418),
	    root = __webpack_require__(424);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(418),
	    root = __webpack_require__(424);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 474 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(476),
	    baseUnary = __webpack_require__(477),
	    nodeUtil = __webpack_require__(478);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(463),
	    isObjectLike = __webpack_require__(110);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 477 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(425);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(479)(module)))

/***/ },
/* 479 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(481),
	    keys = __webpack_require__(457);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(421);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 482 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(443),
	    get = __webpack_require__(484),
	    hasIn = __webpack_require__(495),
	    isKey = __webpack_require__(493),
	    isStrictComparable = __webpack_require__(481),
	    matchesStrictComparable = __webpack_require__(482),
	    toKey = __webpack_require__(494);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(485);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(486),
	    isKey = __webpack_require__(493),
	    toKey = __webpack_require__(494);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(464),
	    stringToPath = __webpack_require__(487);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(488),
	    toString = __webpack_require__(490);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(489);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(428);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(491);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(452),
	    isSymbol = __webpack_require__(492);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(110);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(464),
	    isSymbol = __webpack_require__(492);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(492);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(496),
	    hasPath = __webpack_require__(497);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 496 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(486),
	    isArguments = __webpack_require__(460),
	    isArray = __webpack_require__(464),
	    isIndex = __webpack_require__(465),
	    isKey = __webpack_require__(493),
	    isLength = __webpack_require__(463),
	    toKey = __webpack_require__(494);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 498 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(500),
	    basePropertyDeep = __webpack_require__(501),
	    isKey = __webpack_require__(493),
	    toKey = __webpack_require__(494);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 500 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(485);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(503);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(504);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(421),
	    isSymbol = __webpack_require__(492);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 505 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.allTestsPassed = allTestsPassed;
	function allTestsPassed(tests) {
	  return tests.filter(function (test) {
	    return !test.critical || test.passed;
	  }).length === tests.length;
	}

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loginError = loginError;
	exports.loginSuccess = loginSuccess;
	exports.loginRequest = loginRequest;
	exports.login = login;

	var _axios = __webpack_require__(349);

	var _axios2 = _interopRequireDefault(_axios);

	var _login = __webpack_require__(507);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function loginError(error) {
	  return { error: error, type: _login.LOGGED_FAILED };
	}

	// You'll have a side effect here so (dispatch) => {} form is a good idea
	function loginSuccess(response) {
	  return function (dispatch) {
	    dispatch({ response: response, type: _login.LOGGED_SUCCESSFULLY });
	    // router.transitionTo('/dashboard');
	  };
	}

	function loginRequest(email, password) {
	  var user = { email: email, password: password };
	  return { user: user, type: _login.LOGIN_ATTEMPT };
	}

	function login(userData) {
	  console.log('data user: ', userData);

	  return function (dispatch) {
	    return _axios2.default.get('http://45.55.50.95:3000/api/allComerciantes').then(function (response) {
	      if (response.status >= 200 && response.status < 300) {
	        console.log('Response =', response);
	        dispatch(loginSuccess(response));
	      } else {
	        var error = new Error(response.statusText);
	        error.response = response;
	        dispatch(loginError(error));
	        throw error;
	      }
	    }).catch(function (error) {
	      console.log(error);

	      var err = new Error(error);
	      error.response = response;
	      dispatch(loginError(error));
	      throw error;
	    });
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LOGIN_ATTEMPT = exports.LOGIN_ATTEMPT = 'login_attempt';
	var LOGGED_FAILED = exports.LOGGED_FAILED = 'logged_failed';
	var LOGGED_SUCCESSFULLY = exports.LOGGED_SUCCESSFULLY = 'logged_successfully';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(105);

	var _reactRedux = __webpack_require__(98);

	var _NoMatchComponent = __webpack_require__(509);

	var _NoMatchComponent2 = _interopRequireDefault(_NoMatchComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NoMatch = function (_Component) {
	  (0, _inherits3.default)(NoMatch, _Component);

	  function NoMatch() {
	    (0, _classCallCheck3.default)(this, NoMatch);
	    return (0, _possibleConstructorReturn3.default)(this, (NoMatch.__proto__ || (0, _getPrototypeOf2.default)(NoMatch)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(NoMatch, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_NoMatchComponent2.default, null)
	      );
	    }
	  }]);
	  return NoMatch;
	}(_react.Component);

	NoMatch.propTypes = {};

	exports.default = NoMatch;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(253);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(279);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(280);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(284);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(331);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NoMatchComponent = function (_Component) {
	  (0, _inherits3.default)(NoMatchComponent, _Component);

	  function NoMatchComponent() {
	    (0, _classCallCheck3.default)(this, NoMatchComponent);
	    return (0, _possibleConstructorReturn3.default)(this, (NoMatchComponent.__proto__ || (0, _getPrototypeOf2.default)(NoMatchComponent)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(NoMatchComponent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'No encontrado'
	      );
	    }
	  }]);
	  return NoMatchComponent;
	}(_react.Component);

	NoMatchComponent.propTypes = {};

	exports.default = NoMatchComponent;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NoMatch.component.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configure;

	var _redux = __webpack_require__(105);

	var _reduxThunk = __webpack_require__(511);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _middleware = __webpack_require__(512);

	var _reducers = __webpack_require__(514);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configure(initialState) {
	  var create = window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore;

	  var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, // lets us dispatch() functions
	  _middleware.logger // neat middleware that logs actions
	  )(create);

	  var store = createStoreWithMiddleware(_reducers2.default, initialState);

	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 511 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logger = undefined;

	var _logger = __webpack_require__(513);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.logger = _logger2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (store) {
	  return function (next) {
	    return function (action) {
	      console.log(action);
	      return next(action);
	    };
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "logger.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouterRedux = __webpack_require__(93);

	var _redux = __webpack_require__(105);

	var _semilleros = __webpack_require__(515);

	var _semilleros2 = _interopRequireDefault(_semilleros);

	var _dashboard = __webpack_require__(516);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	var _login = __webpack_require__(531);

	var _login2 = _interopRequireDefault(_login);

	var _rol = __webpack_require__(532);

	var _rol2 = _interopRequireDefault(_rol);

	var _noticia = __webpack_require__(534);

	var _noticia2 = _interopRequireDefault(_noticia);

	var _actividad = __webpack_require__(535);

	var _actividad2 = _interopRequireDefault(_actividad);

	var _asignaciontareas = __webpack_require__(537);

	var _asignaciontareas2 = _interopRequireDefault(_asignaciontareas);

	var _correosenviados = __webpack_require__(539);

	var _correosenviados2 = _interopRequireDefault(_correosenviados);

	var _cuentacorreo = __webpack_require__(541);

	var _cuentacorreo2 = _interopRequireDefault(_cuentacorreo);

	var _detalletarea = __webpack_require__(543);

	var _detalletarea2 = _interopRequireDefault(_detalletarea);

	var _estudiantecurso = __webpack_require__(545);

	var _estudiantecurso2 = _interopRequireDefault(_estudiantecurso);

	var _grupo = __webpack_require__(547);

	var _grupo2 = _interopRequireDefault(_grupo);

	var _horarioscursos = __webpack_require__(549);

	var _horarioscursos2 = _interopRequireDefault(_horarioscursos);

	var _integrantesgrupo = __webpack_require__(551);

	var _integrantesgrupo2 = _interopRequireDefault(_integrantesgrupo);

	var _lidersemillero = __webpack_require__(552);

	var _lidersemillero2 = _interopRequireDefault(_lidersemillero);

	var _menuusuario = __webpack_require__(553);

	var _menuusuario2 = _interopRequireDefault(_menuusuario);

	var _nivel = __webpack_require__(555);

	var _nivel2 = _interopRequireDefault(_nivel);

	var _notificacion = __webpack_require__(557);

	var _notificacion2 = _interopRequireDefault(_notificacion);

	var _programa = __webpack_require__(558);

	var _programa2 = _interopRequireDefault(_programa);

	var _programassemilleros = __webpack_require__(559);

	var _programassemilleros2 = _interopRequireDefault(_programassemilleros);

	var _proyectos = __webpack_require__(560);

	var _proyectos2 = _interopRequireDefault(_proyectos);

	var _rolsemillero = __webpack_require__(561);

	var _rolsemillero2 = _interopRequireDefault(_rolsemillero);

	var _subpermisos = __webpack_require__(562);

	var _subpermisos2 = _interopRequireDefault(_subpermisos);

	var _tareas = __webpack_require__(564);

	var _tareas2 = _interopRequireDefault(_tareas);

	var _tipocurso = __webpack_require__(565);

	var _tipocurso2 = _interopRequireDefault(_tipocurso);

	var _tiponoticia = __webpack_require__(567);

	var _tiponoticia2 = _interopRequireDefault(_tiponoticia);

	var _tiponotificacion = __webpack_require__(568);

	var _tiponotificacion2 = _interopRequireDefault(_tiponotificacion);

	var _usuario = __webpack_require__(569);

	var _usuario2 = _interopRequireDefault(_usuario);

	var _permiso = __webpack_require__(570);

	var _permiso2 = _interopRequireDefault(_permiso);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer,
	  semilleros: _semilleros2.default,
	  dashboard: _dashboard2.default,
	  login: _login2.default,
	  rol: _rol2.default,
	  noticia: _noticia2.default,
	  actividad: _actividad2.default,
	  asignaciontareas: _asignaciontareas2.default,
	  correosenviados: _correosenviados2.default,
	  cuentacorreo: _cuentacorreo2.default,
	  detalletarea: _detalletarea2.default,
	  estudiantecurso: _estudiantecurso2.default,
	  grupo: _grupo2.default,
	  horarioscursos: _horarioscursos2.default,
	  integrantesgrupo: _integrantesgrupo2.default,
	  lidersemillero: _lidersemillero2.default,
	  menuusuario: _menuusuario2.default,
	  nivel: _nivel2.default,
	  notificacion: _notificacion2.default,
	  programa: _programa2.default,
	  programassemilleros: _programassemilleros2.default,
	  proyectos: _proyectos2.default,
	  rolsemillero: _rolsemillero2.default,
	  subpermisos: _subpermisos2.default,
	  tareas: _tareas2.default,
	  tipocurso: _tipocurso2.default,
	  tiponoticia: _tiponoticia2.default,
	  tiponotificacion: _tiponotificacion2.default,
	  usuario: _usuario2.default,
	  permiso: _permiso2.default
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.semillero = semillero;

	var _redux = __webpack_require__(105);

	var _semilleros = __webpack_require__(371);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_semilleros: [],
	  error: null,
	  result: false
	});

	function semillero() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _semilleros.LISTAR_SEMILLEROS:
	      return state.merge({
	        data_list_semilleros: action.response.data,
	        error: null,
	        result: true
	      });
	    case _semilleros.INSERTAR_SEMILLERO:
	      return state.merge({
	        data_list_semilleros: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  semillero: semillero
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "semilleros.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isomorphicFetch = __webpack_require__(517);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _reduxActions = __webpack_require__(519);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  email: '',
	  password: '',
	  isLoggingIn: false,
	  isLoggedIn: false,
	  error: null
	});

	exports.default = (0, _reduxActions.handleActions)({
	  'signin': function signin(state, action) {
	    console.log("Signin, state: ", state);

	    return state.merge({
	      email: 'anlijudavid',
	      password: '',
	      isLoggingIn: false,
	      isLoggedIn: false,
	      error: null
	    });

	    /*return dispatch => {
	      dispatch({ data: 'data cualquiera', type: 'LOGIN' });
	    };*/

	    /* return {
	       data: 'un dato del reducer dashboard.js',
	       date: (new Date()).toTimeString()
	     };*/
	    /*$.get(action, function (result) {
	      return result;
	    }*/
	  }
	}, initialState);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "dashboard.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(518);
	module.exports = self.fetch.bind(self);


/***/ },
/* 518 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return
	      }

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createAction = __webpack_require__(520);

	var _createAction2 = _interopRequireDefault(_createAction);

	var _handleAction = __webpack_require__(521);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _handleActions = __webpack_require__(528);

	var _handleActions2 = _interopRequireDefault(_handleActions);

	exports.createAction = _createAction2['default'];
	exports.handleAction = _handleAction2['default'];
	exports.handleActions = _handleActions2['default'];

/***/ },
/* 520 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAction;
	function identity(t) {
	  return t;
	}

	function createAction(type, actionCreator, metaCreator) {
	  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var action = {
	      type: type,
	      payload: finalActionCreator.apply(undefined, args)
	    };

	    if (args.length === 1 && args[0] instanceof Error) {
	      // Handle FSA errors where the payload is an Error object. Set error.
	      action.error = true;
	    }

	    if (typeof metaCreator === 'function') {
	      action.meta = metaCreator.apply(undefined, args);
	    }

	    return action;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleAction;

	var _fluxStandardAction = __webpack_require__(522);

	function isFunction(val) {
	  return typeof val === 'function';
	}

	function handleAction(type, reducers) {
	  return function (state, action) {
	    // If action type does not match, return previous state
	    if (action.type !== type) return state;

	    var handlerKey = _fluxStandardAction.isError(action) ? 'throw' : 'next';

	    // If function is passed instead of map, use as reducer
	    if (isFunction(reducers)) {
	      reducers.next = reducers['throw'] = reducers;
	    }

	    // Otherwise, assume an action map was passed
	    var reducer = reducers[handlerKey];

	    return isFunction(reducer) ? reducer(state, action) : state;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.isFSA = isFSA;
	exports.isError = isError;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsplainobject = __webpack_require__(523);

	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

	var validKeys = ['type', 'payload', 'error', 'meta'];

	function isValidKey(key) {
	  return validKeys.indexOf(key) > -1;
	}

	function isFSA(action) {
	  return _lodashIsplainobject2['default'](action) && typeof action.type !== 'undefined' && Object.keys(action).every(isValidKey);
	}

	function isError(action) {
	  return action.error === true;
	}

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(524),
	    isArguments = __webpack_require__(525),
	    keysIn = __webpack_require__(526);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 524 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = baseFor;


/***/ },
/* 525 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(525),
	    isArray = __webpack_require__(527);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 527 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleActions;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _handleAction = __webpack_require__(521);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _ownKeys = __webpack_require__(529);

	var _ownKeys2 = _interopRequireDefault(_ownKeys);

	var _reduceReducers = __webpack_require__(530);

	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

	function handleActions(handlers, defaultState) {
	  var reducers = _ownKeys2['default'](handlers).map(function (type) {
	    return _handleAction2['default'](type, handlers[type]);
	  });

	  return typeof defaultState !== 'undefined' ? function (state, action) {
	    if (state === undefined) state = defaultState;
	    return _reduceReducers2['default'].apply(undefined, reducers)(state, action);
	  } : _reduceReducers2['default'].apply(undefined, reducers);
	}

	module.exports = exports['default'];

/***/ },
/* 529 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = ownKeys;

	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }

	  var keys = Object.getOwnPropertyNames(object);

	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }

	  return keys;
	}

	module.exports = exports['default'];

/***/ },
/* 530 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = reduceReducers;

	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }

	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.user = user;

	var _redux = __webpack_require__(105);

	var _login = __webpack_require__(507);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  email: '',
	  password: '',
	  isLoggingIn: false,
	  isLoggedIn: false,
	  error: null,
	  data: []
	});

	function user() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  // console.log('action: ', action);

	  switch (action.type) {
	    case _login.LOGIN_ATTEMPT:
	      return state.merge({
	        isLoggingIn: true,
	        isLoggedIn: false,
	        email: action.email,
	        password: action.password // Note you shouldn't store user's password in real apps,
	      });
	    case _login.LOGGED_FAILED:
	      return state.merge({
	        error: action.error,
	        isLoggingIn: false,
	        isLoggedIn: false
	      });
	    case _login.LOGGED_SUCCESSFULLY:
	      return state.merge({
	        error: null,
	        isLoggingIn: false,
	        isLoggedIn: true,
	        data: action.response.data
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  user: user
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rol = rol;

	var _redux = __webpack_require__(105);

	var _rol = __webpack_require__(533);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_roles: [],
	  error: null,
	  result: false
	});

	function rol() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _rol.LISTAR_ROLES:
	      return state.merge({
	        data_list_roles: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    case _rol.INSERTAR_ROL:
	      return state.merge({
	        data_list_roles: action.response.data,
	        err: null,
	        result: action.response.data.result
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  rol: rol
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "rol.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_ROL = exports.VER_ROL = 'VER_ROL';
	var INSERTAR_ROL = exports.INSERTAR_ROL = 'INSERTAR_ROL';
	var ELIMINAR_ROL = exports.ELIMINAR_ROL = 'ELIMINAR_ROL';
	var LISTAR_ROLES = exports.LISTAR_ROLES = 'LISTAR_ROLES';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_ROL = exports.ERROR_INSERTAR_ROL = 'ERROR_INSERTAR_ROL';
	var ERROR_ACTUALIZAR_ROL = exports.ERROR_ACTUALIZAR_ROL = 'ERROR_ACTUALIZAR_ROL';
	var ERROR_ELIMINAR_ROL = exports.ERROR_ELIMINAR_ROL = 'ERROR_ELIMINAR_ROL';
	var ERROR_ROL = exports.ERROR_ROL = 'ERROR_ROL';

	var SUCCESSFULL_INSERT_ROL = exports.SUCCESSFULL_INSERT_ROL = 'SUCCESSFULL_INSERT_ROL';
	var SUCCESSFULL_UPDATE_ROL = exports.SUCCESSFULL_UPDATE_ROL = 'SUCCESSFULL_UPDATE_ROL';
	var SUCCESSFULL_DELETE_ROL = exports.SUCCESSFULL_DELETE_ROL = 'SUCCESSFULL_DELETE_ROL';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "rol.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noticia = noticia;

	var _redux = __webpack_require__(105);

	var _noticia = __webpack_require__(374);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_noticias: [],
	  error: null,
	  result: false
	});

	function noticia() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _noticia.LISTAR_NOTICIAS:
	      return state.merge({
	        data_list_noticias: action.response.data,
	        error: null,
	        result: true
	      });
	    case _noticia.INSERTAR_NOTICIA:
	      return state.merge({
	        data_list_noticias: action.response.data,
	        error: true,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  noticia: noticia
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "noticia.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actividad = actividad;

	var _redux = __webpack_require__(105);

	var _actividad = __webpack_require__(536);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_actividades: [],
	  error: null,
	  result: false
	});

	function actividad() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actividad.LISTAR_ACTIVIDADES:
	      return state.merge({
	        data_list_actividades: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    case _actividad.INSERTAR_ACTIVIDAD:
	      return state.merge({
	        data_list_actividades: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  actividad: actividad
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "actividad.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_ACTIVIDAD = exports.VER_ACTIVIDAD = 'VER_ACTIVIDAD';
	var INSERTAR_ACTIVIDAD = exports.INSERTAR_ACTIVIDAD = 'INSERTAR_ACTIVIDAD';
	var ELIMINAR_ACTIVIDAD = exports.ELIMINAR_ACTIVIDAD = 'ELIMINAR_ACTIVIDAD';
	var LISTAR_ACTIVIDADES = exports.LISTAR_ACTIVIDADES = 'LISTAR_ACTIVIDADES';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_ACTIVIDAD = exports.ERROR_INSERTAR_ACTIVIDAD = 'ERROR_INSERTAR_ACTIVIDAD';
	var ERROR_ACTUALIZAR_ACTIVIDAD = exports.ERROR_ACTUALIZAR_ACTIVIDAD = 'ERROR_ACTUALIZAR_ACTIVIDAD';
	var ERROR_ELIMINAR_ACTIVIDAD = exports.ERROR_ELIMINAR_ACTIVIDAD = 'ERROR_ELIMINAR_ACTIVIDAD';
	var ERROR_LISTAR_ACTIVIDAD = exports.ERROR_LISTAR_ACTIVIDAD = 'ERROR_LISTAR_ACTIVIDAD';
	var ERROR_ACTIVIDAD = exports.ERROR_ACTIVIDAD = 'ERROR_ACTIVIDAD';

	var SUCCESSFULL_INSERT_ACTIVIDAD = exports.SUCCESSFULL_INSERT_ACTIVIDAD = 'SUCCESSFULL_INSERT_ACTIVIDAD';
	var SUCCESSFULL_UPDATE_ACTIVIDAD = exports.SUCCESSFULL_UPDATE_ACTIVIDAD = 'SUCCESSFULL_UPDATE_ACTIVIDAD';
	var SUCCESSFULL_DELETE_ACTIVIDAD = exports.SUCCESSFULL_DELETE_ACTIVIDAD = 'SUCCESSFULL_DELETE_ACTIVIDAD';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "actividad.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.asignaciontareas = asignaciontareas;

	var _redux = __webpack_require__(105);

	var _asignaciontareas = __webpack_require__(538);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_asignaciontareas: [],
	  error: null,
	  result: false
	});

	function asignaciontareas() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _asignaciontareas.LISTAR_ASIGNACION_TAREAS:
	      return state.merge({
	        data_list_asignaciontareas: action.response.data,
	        error: null,
	        result: true
	      });
	    case _asignaciontareas.INSERTAR_ASIGNACION_TAREA:
	      return state.merge({
	        data_list_asignaciontareas: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  asignaciontareas: asignaciontareas
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "asignaciontareas.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_ASIGNACION_TAREA = exports.VER_ASIGNACION_TAREA = 'VER_ASIGNACION_TAREA';
	var INSERTAR_ASIGNACION_TAREA = exports.INSERTAR_ASIGNACION_TAREA = 'INSERTAR_ASIGNACION_TAREA';
	var ELIMINAR_ASIGNACION_TAREA = exports.ELIMINAR_ASIGNACION_TAREA = 'ELIMINAR_ASIGNACION_TAREA';
	var LISTAR_ASIGNACION_TAREAS = exports.LISTAR_ASIGNACION_TAREAS = 'LISTAR_ASIGNACION_TAREAS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_ASIGNACION_TAREA = exports.ERROR_INSERTAR_ASIGNACION_TAREA = 'ERROR_INSERTAR_ASIGNACION_TAREA';
	var ERROR_ACTUALIZAR_ASIGNACION_TAREA = exports.ERROR_ACTUALIZAR_ASIGNACION_TAREA = 'ERROR_ACTUALIZAR_ASIGNACION_TAREA';
	var ERROR_ELIMINAR_ASIGNACION_TAREA = exports.ERROR_ELIMINAR_ASIGNACION_TAREA = 'ERROR_ELIMINAR_ASIGNACION_TAREA';
	var ERROR_LISTAR_ASIGNACION_TAREAS = exports.ERROR_LISTAR_ASIGNACION_TAREAS = 'ERROR_LISTAR_ASIGNACION_TAREAS';
	var ERROR_ASIGNACION_TAREA = exports.ERROR_ASIGNACION_TAREA = 'ERROR_ASIGNACION_TAREA';

	var SUCCESSFULL_INSERT_ASIGNACION_TAREA = exports.SUCCESSFULL_INSERT_ASIGNACION_TAREA = 'SUCCESSFULL_INSERT_ASIGNACION_TAREA';
	var SUCCESSFULL_UPDATE_ASIGNACION_TAREA = exports.SUCCESSFULL_UPDATE_ASIGNACION_TAREA = 'SUCCESSFULL_UPDATE_ASIGNACION_TAREA';
	var SUCCESSFULL_DELETE_ASIGNACION_TAREA = exports.SUCCESSFULL_DELETE_ASIGNACION_TAREA = 'SUCCESSFULL_DELETE_ASIGNACION_TAREA';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "asignaciontareas.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.correosenviados = correosenviados;

	var _redux = __webpack_require__(105);

	var _correosenviados = __webpack_require__(540);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_correosenviados: [],
	  error: null,
	  result: false
	});

	function correosenviados() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _correosenviados.LISTAR_CORREOS_ENVIADOS:
	      return state.merge({
	        data_list_correosenviados: action.response.data,
	        error: null,
	        result: true
	      });
	    case _correosenviados.INSERTAR_CORREO_ENVIADO:
	      return state.merge({
	        data_list_correosenviados: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  correosenviados: correosenviados
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "correosenviados.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/*
		Estados del reducer
	*/
	var VER_CORREOS_ENVIADOS = exports.VER_CORREOS_ENVIADOS = 'VER_CORREOS_ENVIADOS';
	var INSERTAR_CORREO_ENVIADO = exports.INSERTAR_CORREO_ENVIADO = 'INSERTAR_CORREOS_ENVIADOS';
	var ELIMINAR_CORREO_ENVIADO = exports.ELIMINAR_CORREO_ENVIADO = 'ELIMINAR_CORREOS_ENVIADOS';
	var LISTAR_CORREOS_ENVIADOS = exports.LISTAR_CORREOS_ENVIADOS = 'LISTAR_CORREOS_ENVIADOS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_CORREO_ENVIADO = exports.ERROR_INSERTAR_CORREO_ENVIADO = 'ERROR_INSERTAR_CORREOS_ENVIADO';
	var ERROR_ACTUALIZAR_CORREO_ENVIADO = exports.ERROR_ACTUALIZAR_CORREO_ENVIADO = 'ERROR_ACTUALIZAR_CORREOS_ENVIADO';
	var ERROR_ELIMINAR_CORREO_ENVIADO = exports.ERROR_ELIMINAR_CORREO_ENVIADO = 'ERROR_ELIMINAR_CORREOS_ENVIADO';
	var ERROR_LISTAR_CORREOS_ENVIADOS = exports.ERROR_LISTAR_CORREOS_ENVIADOS = 'ERROR_LISTAR_CORREOS_ENVIADOS';
	var ERROR_CORREOS_ENVIADOS = exports.ERROR_CORREOS_ENVIADOS = 'ERROR_CORREOS_ENVIADOS';

	var SUCCESSFULL_INSERT_CORREO_ENVIADO = exports.SUCCESSFULL_INSERT_CORREO_ENVIADO = 'SUCCESSFULL_INSERT_CORREO_ENVIADO';
	var SUCCESSFULL_UPDATE_CORREO_ENVIADO = exports.SUCCESSFULL_UPDATE_CORREO_ENVIADO = 'SUCCESSFULL_UPDATE_CORREO_ENVIADO';
	var SUCCESSFULL_DELETE_CORREO_ENVIADO = exports.SUCCESSFULL_DELETE_CORREO_ENVIADO = 'SUCCESSFULL_DELETE_CORREO_ENVIADO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "correosenviados.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.semillero = semillero;

	var _redux = __webpack_require__(105);

	var _cuentacorreo = __webpack_require__(542);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_cuentacorreo: [],
	  error: null,
	  result: false
	});

	function semillero() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _cuentacorreo.LISTAR_CUENTAS_CORREOS:
	      return state.merge({
	        data_list_semilleros: action.response.data,
	        error: null,
	        result: true
	      });
	    case _cuentacorreo.INSERTAR_CUENTA_CORREO:
	      return state.merge({
	        data_list_semilleros: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  semillero: semillero
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cuentacorreo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_CUENTA_CORREO = exports.VER_CUENTA_CORREO = 'VER_CUENTA_CORREO';
	var INSERTAR_CUENTA_CORREO = exports.INSERTAR_CUENTA_CORREO = 'INSERTAR_CUENTA_CORREO';
	var ELIMINAR_CUENTA_CORREO = exports.ELIMINAR_CUENTA_CORREO = 'ELIMINAR_CUENTA_CORREO';
	var LISTAR_CUENTAS_CORREOS = exports.LISTAR_CUENTAS_CORREOS = 'LISTAR_CUENTAS_CORREOS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_CUENTA_CORREO = exports.ERROR_INSERTAR_CUENTA_CORREO = 'ERROR_INSERTAR_CUENTA_CORREO';
	var ERROR_ACTUALIZAR_CUENTA_CORREO = exports.ERROR_ACTUALIZAR_CUENTA_CORREO = 'ERROR_ACTUALIZAR_CUENTA_CORREO';
	var ERROR_ELIMINAR_CUENTA_CORREO = exports.ERROR_ELIMINAR_CUENTA_CORREO = 'ERROR_ELIMINAR_CUENTA_CORREO';
	var ERROR_LISTAR_CUENTAS_CORREOS = exports.ERROR_LISTAR_CUENTAS_CORREOS = 'ERROR_LISTAR_CUENTAS_CORREOS';
	var ERROR_CUENTA_CORREO = exports.ERROR_CUENTA_CORREO = 'ERROR_CUENTA_CORREO';

	var SUCCESSFULL_INSERT_CUENTA_CORREO = exports.SUCCESSFULL_INSERT_CUENTA_CORREO = 'SUCCESSFULL_INSERT_CUENTA_CORREO';
	var SUCCESSFULL_UPDATE_CUENTA_CORREO = exports.SUCCESSFULL_UPDATE_CUENTA_CORREO = 'SUCCESSFULL_UPDATE_CUENTA_CORREO';
	var SUCCESSFULL_DELETE_CUENTA_CORREO = exports.SUCCESSFULL_DELETE_CUENTA_CORREO = 'SUCCESSFULL_DELETE_CUENTA_CORREO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cuentacorreo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.detalletarea = detalletarea;

	var _redux = __webpack_require__(105);

	var _detalletarea = __webpack_require__(544);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_detalletarea: [],
	  error: null,
	  result: false
	});

	function detalletarea() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _detalletarea.LISTAR_DETALLE_TAREAS:
	      return state.merge({
	        data_list_detalletarea: action.response.data,
	        error: null,
	        result: true
	      });
	    case _detalletarea.INSERTAR_DETALLE_TAREA:
	      return state.merge({
	        data_list_detalletarea: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  detalletarea: detalletarea
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "detalletarea.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_DETALLE_TAREA = exports.VER_DETALLE_TAREA = 'VER_DETALLE_TAREA';
	var INSERTAR_DETALLE_TAREA = exports.INSERTAR_DETALLE_TAREA = 'INSERTAR_DETALLE_TAREA';
	var ELIMINAR_DETALLE_TAREA = exports.ELIMINAR_DETALLE_TAREA = 'ELIMINAR_DETALLE_TAREA';
	var LISTAR_DETALLE_TAREAS = exports.LISTAR_DETALLE_TAREAS = 'LISTAR_DETALLE_TAREAS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_DETALLE_TAREA = exports.ERROR_INSERTAR_DETALLE_TAREA = 'ERROR_INSERTAR_DETALLE_TAREA';
	var ERROR_ACTUALIZAR_DETALLE_TAREA = exports.ERROR_ACTUALIZAR_DETALLE_TAREA = 'ERROR_ACTUALIZAR_DETALLE_TAREA';
	var ERROR_ELIMINAR_DETALLE_TAREA = exports.ERROR_ELIMINAR_DETALLE_TAREA = 'ERROR_ELIMINAR_DETALLE_TAREA';
	var ERROR_LISTAR_DETALLE_TAREA = exports.ERROR_LISTAR_DETALLE_TAREA = 'ERROR_LISTAR_DETALLES_TAREAS';
	var ERROR_DETALLE_TAREA = exports.ERROR_DETALLE_TAREA = 'ERROR_DETALLE_TAREA';

	var SUCCESSFULL_INSERT_DETALLE_TAREA = exports.SUCCESSFULL_INSERT_DETALLE_TAREA = 'SUCCESSFULL_INSERT_DETALLE_TAREA';
	var SUCCESSFULL_UPDATE_DETALLE_TAREA = exports.SUCCESSFULL_UPDATE_DETALLE_TAREA = 'SUCCESSFULL_UPDATE_DETALLE_TAREA';
	var SUCCESSFULL_DELETE_DETALLE_TAREA = exports.SUCCESSFULL_DELETE_DETALLE_TAREA = 'SUCCESSFULL_DELETE_DETALLE_TAREA';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "detalletarea.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.estudiantecurso = estudiantecurso;

	var _redux = __webpack_require__(105);

	var _estudiantecurso = __webpack_require__(546);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_estudiantecurso: [],
	  error: null,
	  result: false
	});

	function estudiantecurso() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _estudiantecurso.LISTAR_ESTUDIANTE_CURSOS:
	      return state.merge({
	        data_list_estudiantecurso: action.response.data,
	        error: null,
	        result: true
	      });
	    case _estudiantecurso.INSERTAR_ESTUDIANTE_CURSO:
	      return state.merge({
	        data_list_estudiantecurso: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  estudiantecurso: estudiantecurso
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "estudiantecurso.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_ESTUDIANTE_CURSO = exports.VER_ESTUDIANTE_CURSO = 'VER_ESTUDIANTE_CURSO';
	var INSERTAR_ESTUDIANTE_CURSO = exports.INSERTAR_ESTUDIANTE_CURSO = 'INSERTAR_ESTUDIANTE_CURSO';
	var ELIMINAR_ESTUDIANTE_CURSO = exports.ELIMINAR_ESTUDIANTE_CURSO = 'ELIMINAR_ESTUDIANTE_CURSO';
	var LISTAR_ESTUDIANTE_CURSOS = exports.LISTAR_ESTUDIANTE_CURSOS = 'LISTAR_ESTUDIANTE_CURSOS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_ESTUDIANTE_CURSO = exports.ERROR_INSERTAR_ESTUDIANTE_CURSO = 'ERROR_INSERTAR_ESTUDIANTE_CURSO';
	var ERROR_ACTUALIZAR_ESTUDIANTE_CURSO = exports.ERROR_ACTUALIZAR_ESTUDIANTE_CURSO = 'ERROR_ACTUALIZAR_ESTUDIANTE_CURSO';
	var ERROR_ELIMINAR_ESTUDIANTE_CURSO = exports.ERROR_ELIMINAR_ESTUDIANTE_CURSO = 'ERROR_ELIMINAR_ESTUDIANTE_CURSO';
	var ERROR_LISTAR_ESTUDIANTES_CURSOS = exports.ERROR_LISTAR_ESTUDIANTES_CURSOS = 'ERROR_LISTAR_ESTUDIANTES_CURSOS';
	var ERROR_ESTUDIANTE_CURSO = exports.ERROR_ESTUDIANTE_CURSO = 'ERROR_ESTUDIANTE_CURSO';

	var SUCCESSFULL_INSERT_ESTUDIANTE_CURSO = exports.SUCCESSFULL_INSERT_ESTUDIANTE_CURSO = 'SUCCESSFULL_INSERT_ESTUDIANTE_CURSO';
	var SUCCESSFULL_UPDATE_ESTUDIANTE_CURSO = exports.SUCCESSFULL_UPDATE_ESTUDIANTE_CURSO = 'SUCCESSFULL_UPDATE_ESTUDIANTE_CURSO';
	var SUCCESSFULL_DELETE_ESTUDIANTE_CURSO = exports.SUCCESSFULL_DELETE_ESTUDIANTE_CURSO = 'SUCCESSFULL_DELETE_ESTUDIANTE_CURSO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "estudiantecurso.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.grupo = grupo;

	var _redux = __webpack_require__(105);

	var _grupo = __webpack_require__(548);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_grupo: [],
	  error: null,
	  result: false
	});

	function grupo() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _grupo.LISTAR_GRUPOS:
	      return state.merge({
	        data_list_grupo: action.response.data,
	        error: null,
	        result: true
	      });
	    case _grupo.INSERTAR_GRUPO:
	      return state.merge({
	        data_list_grupo: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  grupo: grupo
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "grupo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_GRUPO = exports.VER_GRUPO = 'VER_GRUPO';
	var INSERTAR_GRUPO = exports.INSERTAR_GRUPO = 'INSERTAR_GRUPO';
	var ELIMINAR_GRUPO = exports.ELIMINAR_GRUPO = 'ELIMINAR_GRUPO';
	var LISTAR_GRUPOS = exports.LISTAR_GRUPOS = 'LISTAR_GRUPOS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_GRUPO = exports.ERROR_INSERTAR_GRUPO = 'ERROR_INSERTAR_GRUPO';
	var ERROR_ACTUALIZAR_GRUPO = exports.ERROR_ACTUALIZAR_GRUPO = 'ERROR_ACTUALIZAR_GRUPO';
	var ERROR_ELIMINAR_GRUPO = exports.ERROR_ELIMINAR_GRUPO = 'ERROR_ELIMINAR_GRUPO';
	var ERROR_LISTAR_GRUPOS = exports.ERROR_LISTAR_GRUPOS = 'ERROR_LISTAR_GRUPOS';
	var ERROR_GRUPO = exports.ERROR_GRUPO = 'ERROR_GRUPO';

	var SUCCESSFULL_INSERT_GRUPO = exports.SUCCESSFULL_INSERT_GRUPO = 'SUCCESSFULL_INSERT_GRUPO';
	var SUCCESSFULL_UPDATE_GRUPO = exports.SUCCESSFULL_UPDATE_GRUPO = 'SUCCESSFULL_UPDATE_GRUPO';
	var SUCCESSFULL_DELETE_GRUPO = exports.SUCCESSFULL_DELETE_GRUPO = 'SUCCESSFULL_DELETE_GRUPO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "grupo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.horarioscursos = horarioscursos;

	var _redux = __webpack_require__(105);

	var _horarioscursos = __webpack_require__(550);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_horarioscursos: [],
	  error: null,
	  result: false
	});

	function horarioscursos() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _horarioscursos.LISTAR_HORARIOS_CURSOS:
	      return state.merge({
	        data_list_horarioscursos: action.response.data,
	        error: null,
	        result: true
	      });
	    case _horarioscursos.INSERTAR_HORARIO_CURSO:
	      return state.merge({
	        data_list_horarioscursos: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  horarioscursos: horarioscursos
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "horarioscursos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_HORARIO_CURSO = exports.VER_HORARIO_CURSO = 'VER_HORARIO_CURSO';
	var INSERTAR_HORARIO_CURSO = exports.INSERTAR_HORARIO_CURSO = 'INSERTAR_HORARIO_CURSO';
	var ELIMINAR_HORARIO_CURSO = exports.ELIMINAR_HORARIO_CURSO = 'ELIMINAR_HORARIO_CURSO';
	var LISTAR_HORARIOS_CURSOS = exports.LISTAR_HORARIOS_CURSOS = 'LISTAR_HORARIOS_CURSOS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_HORARIO_CURSO = exports.ERROR_INSERTAR_HORARIO_CURSO = 'ERROR_INSERTAR_HORARIO_CURSO';
	var ERROR_ACTUALIZAR_HORARIO_CURSO = exports.ERROR_ACTUALIZAR_HORARIO_CURSO = 'ERROR_ACTUALIZAR_HORARIO_CURSO';
	var ERROR_ELIMINAR_HORARIO_CURSO = exports.ERROR_ELIMINAR_HORARIO_CURSO = 'ERROR_ELIMINAR_HORARIO_CURSO';
	var ERROR_LISTAR_HORARIOS_CURSOS = exports.ERROR_LISTAR_HORARIOS_CURSOS = 'ERROR_LISTAR_HORARIOS_CURSOS';
	var ERROR_HORARIO_CURSO = exports.ERROR_HORARIO_CURSO = 'ERROR_HORARIO_CURSO';

	var SUCCESSFULL_INSERT_HORARIO_CURSO = exports.SUCCESSFULL_INSERT_HORARIO_CURSO = 'SUCCESSFULL_INSERT_HORARIO_CURSO';
	var SUCCESSFULL_UPDATE_HORARIO_CURSO = exports.SUCCESSFULL_UPDATE_HORARIO_CURSO = 'SUCCESSFULL_UPDATE_HORARIO_CURSO';
	var SUCCESSFULL_DELETE_HORARIO_CURSO = exports.SUCCESSFULL_DELETE_HORARIO_CURSO = 'SUCCESSFULL_DELETE_HORARIO_CURSO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "horarioscursos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 551 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "integrantesgrupo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.grupo = grupo;

	var _redux = __webpack_require__(105);

	var _grupo = __webpack_require__(548);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_grupo: [],
	  error: null,
	  result: false
	});

	function grupo() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _grupo.LISTAR_GRUPOS:
	      return state.merge({
	        data_list_grupo: action.response.data,
	        error: null,
	        result: true
	      });
	    case _grupo.INSERTAR_GRUPO:
	      return state.merge({
	        data_list_grupo: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  grupo: grupo
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "lidersemillero.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.menuusuario = menuusuario;

	var _redux = __webpack_require__(105);

	var _menuusuario = __webpack_require__(554);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_menuusuario: [],
	  error: null,
	  result: false
	});

	function menuusuario() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _menuusuario.LISTAR_MENUS_USUARIOS:
	      return state.merge({
	        data_list_menuusuario: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    case _menuusuario.INSERTAR_MENU_USUARIO:
	      return state.merge({
	        data_list_menuusuario: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  menuusuario: menuusuario
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "menuusuario.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_MENU_USUARIO = exports.VER_MENU_USUARIO = 'VER_MENU_USUARIO';
	var INSERTAR_MENU_USUARIO = exports.INSERTAR_MENU_USUARIO = 'INSERTAR_MENU_USUARIO';
	var ELIMINAR_MENU_USUARIO = exports.ELIMINAR_MENU_USUARIO = 'ELIMINAR_MENU_USUARIO';
	var LISTAR_MENUS_USUARIOS = exports.LISTAR_MENUS_USUARIOS = 'LISTAR_MENUS_USUARIOS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_MENU_USUARIO = exports.ERROR_INSERTAR_MENU_USUARIO = 'ERROR_INSERTAR_MENU_USUARIO';
	var ERROR_ACTUALIZAR_MENU_USUARIO = exports.ERROR_ACTUALIZAR_MENU_USUARIO = 'ERROR_ACTUALIZAR_MENU_USUARIO';
	var ERROR_ELIMINAR_MENU_USUARIO = exports.ERROR_ELIMINAR_MENU_USUARIO = 'ERROR_ELIMINAR_MENU_USUARIO';
	var ERROR_LISTAR_MENUS_USUARIOS = exports.ERROR_LISTAR_MENUS_USUARIOS = 'ERROR_LISTAR_MENUS_USUARIOS';
	var ERROR_MENU_USUARIO = exports.ERROR_MENU_USUARIO = 'ERROR_MENU_USUARIO';

	var SUCCESSFULL_INSERT_MENU_USUARIO = exports.SUCCESSFULL_INSERT_MENU_USUARIO = 'SUCCESSFULL_INSERT_MENU_USUARIO';
	var SUCCESSFULL_UPDATE_MENU_USUARIO = exports.SUCCESSFULL_UPDATE_MENU_USUARIO = 'SUCCESSFULL_UPDATE_MENU_USUARIO';
	var SUCCESSFULL_DELETE_MENU_USUARIO = exports.SUCCESSFULL_DELETE_MENU_USUARIO = 'SUCCESSFULL_DELETE_MENU_USUARIO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "menuusuario.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.nivel = nivel;

	var _redux = __webpack_require__(105);

	var _nivel = __webpack_require__(556);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_nivel: [],
	  error: null,
	  result: false
	});

	function nivel() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _nivel.LISTAR_NIVELES:
	      return state.merge({
	        data_list_nivel: action.response.data,
	        error: null,
	        result: true
	      });
	    case _nivel.INSERTAR_NIVEL:
	      return state.merge({
	        data_list_nivel: action.response.data, // Valores del registro insertado
	        err: null,
	        result: true
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  nivel: nivel
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "nivel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_NIVEL = exports.VER_NIVEL = 'VER_NIVEL';
	var INSERTAR_NIVEL = exports.INSERTAR_NIVEL = 'INSERTAR_NIVEL';
	var ELIMINAR_NIVEL = exports.ELIMINAR_NIVEL = 'ELIMINAR_NIVEL';
	var LISTAR_NIVELES = exports.LISTAR_NIVELES = 'LISTAR_NIVELES';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_NIVEL = exports.ERROR_INSERTAR_NIVEL = 'ERROR_INSERTAR_NIVEL';
	var ERROR_ACTUALIZAR_NIVEL = exports.ERROR_ACTUALIZAR_NIVEL = 'ERROR_ACTUALIZAR_NIVEL';
	var ERROR_ELIMINAR_NIVEL = exports.ERROR_ELIMINAR_NIVEL = 'ERROR_ELIMINAR_NIVEL';
	var ERROR_LISTAR_NIVELES = exports.ERROR_LISTAR_NIVELES = 'ERROR_LISTAR_NIVELES';
	var ERROR_NIVEL = exports.ERROR_NIVEL = 'ERROR_NIVEL';

	var SUCCESSFULL_INSERT_NIVEL = exports.SUCCESSFULL_INSERT_NIVEL = 'SUCCESSFULL_INSERT_NIVEL';
	var SUCCESSFULL_UPDATE_NIVEL = exports.SUCCESSFULL_UPDATE_NIVEL = 'SUCCESSFULL_UPDATE_NIVEL';
	var SUCCESSFULL_DELETE_NIVEL = exports.SUCCESSFULL_DELETE_NIVEL = 'SUCCESSFULL_DELETE_NIVEL';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "nivel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "notificacion.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "programa.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "programassemilleros.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "proyectos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "rolsemillero.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.subpermisos = subpermisos;

	var _redux = __webpack_require__(105);

	var _subpermisos = __webpack_require__(563);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_subpermisos: [],
	  error: null,
	  result: false
	});

	function subpermisos() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _subpermisos.LISTAR_SUBPERMISOS:
	      return state.merge({
	        data_list_subpermisos: action.response.data,
	        error: null,
	        result: false
	      });
	    case _subpermisos.INSERTAR_SUBPERMISO:
	      return state.merge({
	        data_list_subpermisos: action.response.data, // Valores del registro insertado
	        error: null,
	        result: false
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  subpermisos: subpermisos
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "subpermisos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_SUBPERMISO = exports.VER_SUBPERMISO = 'VER_SUBPERMISO';
	var INSERTAR_SUBPERMISO = exports.INSERTAR_SUBPERMISO = 'INSERTAR_SUBPERMISO';
	var ELIMINAR_SUBPERMISO = exports.ELIMINAR_SUBPERMISO = 'ELIMINAR_SUBPERMISO';
	var LISTAR_SUBPERMISOS = exports.LISTAR_SUBPERMISOS = 'LISTAR_SUBPERMISOS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_SUBPERMISO = exports.ERROR_INSERTAR_SUBPERMISO = 'ERROR_INSERTAR_SUBPERMISO';
	var ERROR_ACTUALIZAR_SUBPERMISO = exports.ERROR_ACTUALIZAR_SUBPERMISO = 'ERROR_ACTUALIZAR_SUBPERMISO';
	var ERROR_ELIMINAR_SUBPERMISO = exports.ERROR_ELIMINAR_SUBPERMISO = 'ERROR_ELIMINAR_SUBPERMISO';
	var ERROR_LISTAR_SUBPERMISOS = exports.ERROR_LISTAR_SUBPERMISOS = 'ERROR_LISTAR_SUBPERMISOS';
	var ERROR_SUBPERMISO = exports.ERROR_SUBPERMISO = 'ERROR_SUBPERMISO';

	var SUCCESSFULL_INSERT_SUBPERMISO = exports.SUCCESSFULL_INSERT_SUBPERMISO = 'SUCCESSFULL_INSERT_SUBPERMISO';
	var SUCCESSFULL_UPDATE_SUBPERMISO = exports.SUCCESSFULL_UPDATE_SUBPERMISO = 'SUCCESSFULL_UPDATE_SUBPERMISO';
	var SUCCESSFULL_DELETE_SUBPERMISO = exports.SUCCESSFULL_DELETE_SUBPERMISO = 'SUCCESSFULL_DELETE_SUBPERMISO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "subpermisos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "tareas.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tipocurso = tipocurso;

	var _redux = __webpack_require__(105);

	var _tipocurso = __webpack_require__(566);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_tipocurso: [],
	  error: null,
	  result: false
	});

	function tipocurso() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _tipocurso.LISTAR_TIPOS_CURSOS:
	      return state.merge({
	        data_list_tipocurso: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    case _tipocurso.INSERTAR_TIPO_CURSO:
	      return state.merge({
	        data_list_tipocurso: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  tipocurso: tipocurso
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "tipocurso.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
		Estados del reducer
	*/
	var VER_TIPO_CURSO = exports.VER_TIPO_CURSO = 'VER_TIPO_CURSO';
	var INSERTAR_TIPO_CURSO = exports.INSERTAR_TIPO_CURSO = 'INSERTAR_TIPO_CURSO';
	var ELIMINAR_TIPO_CURSO = exports.ELIMINAR_TIPO_CURSO = 'ELIMINAR_TIPO_CURSO';
	var LISTAR_TIPOS_CURSOS = exports.LISTAR_TIPOS_CURSOS = 'LISTAR_TIPOS_CURSOS';

	/*
		Estados de API
	*/
	var ERROR_INSERTAR_TIPO_CURSO = exports.ERROR_INSERTAR_TIPO_CURSO = 'ERROR_INSERTAR_TIPO_CURSO';
	var ERROR_ACTUALIZAR_TIPO_CURSO = exports.ERROR_ACTUALIZAR_TIPO_CURSO = 'ERROR_ACTUALIZAR_TIPO_CURSO';
	var ERROR_ELIMINAR_TIPO_CURSO = exports.ERROR_ELIMINAR_TIPO_CURSO = 'ERROR_ELIMINAR_TIPO_CURSO';
	var ERROR_LISTAR_TIPOS_CURSOS = exports.ERROR_LISTAR_TIPOS_CURSOS = 'ERROR_LISTAR_TIPOS_CURSOS';
	var ERROR_TIPO_CURSO = exports.ERROR_TIPO_CURSO = 'ERROR_TIPO_CURSO';

	var SUCCESSFULL_INSERT_TIPO_CURSO = exports.SUCCESSFULL_INSERT_TIPO_CURSO = 'SUCCESSFULL_INSERT_TIPO_CURSO';
	var SUCCESSFULL_UPDATE_TIPO_CURSO = exports.SUCCESSFULL_UPDATE_TIPO_CURSO = 'SUCCESSFULL_UPDATE_TIPO_CURSO';
	var SUCCESSFULL_DELETE_TIPO_CURSO = exports.SUCCESSFULL_DELETE_TIPO_CURSO = 'SUCCESSFULL_DELETE_TIPO_CURSO';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "tipocurso.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "tiponoticia.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "tiponotificacion.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "usuario.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.permiso = permiso;

	var _redux = __webpack_require__(105);

	var _permisos = __webpack_require__(571);

	var _immutable = __webpack_require__(396);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = new _immutable2.default.Map({
	  data_list_permisos: [],
	  error: null,
	  result: false
	});

	function permiso() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _permisos.LISTAR_PERMISOS:
	      return state.merge({
	        data_list_permisos: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    case _permisos.INSERTAR_PERMISO:
	      return state.merge({
	        data_list_permisos: action.response.data,
	        error: null,
	        result: action.response.data.result
	      });
	    default:
	      return state;
	  }
	}

	var Reducer = (0, _redux.combineReducers)({
	  permiso: permiso
	});

	exports.default = Reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "permiso.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Estados del reducer
	 */

	var VER_PERMISO = exports.VER_PERMISO = "VER_PERMISO";
	var INSERTAR_PERMISO = exports.INSERTAR_PERMISO = "INSERTAR_PERMISO";
	var ELIMINAR_PERMISO = exports.ELIMINAR_PERMISO = "ELIMINAR_PERMISO";
	var LISTAR_PERMISOS = exports.LISTAR_PERMISOS = "LISTAR_PERMISOS";

	/**
	 * Estados del api
	 */
	var ERROR_INSERTAR_PERMISO = exports.ERROR_INSERTAR_PERMISO = "ERROR_INSERTAR_PERMISO";
	var ERROR_ACTUALIZAR_PERMISO = exports.ERROR_ACTUALIZAR_PERMISO = "ERROR_ACTUALIZAR_PERMISO";
	var ERROR_ELIMINAR_PERMISO = exports.ERROR_ELIMINAR_PERMISO = "ERROR_ELIMINAR_PERMISO";
	var ERROR_LISTAR_PERMISO = exports.ERROR_LISTAR_PERMISO = "ERROR_LISTAR_PERMISO";

	var SUCCESSFULL_INSERT_PERMISO = exports.SUCCESSFULL_INSERT_PERMISO = "SUCCESSFULL_INSERT_PERMISO";
	var SUCCESSFULL_UPDATE_PERMISO = exports.SUCCESSFULL_UPDATE_PERMISO = "SUCCESSFULL_UPDATE_PERMISO";
	var SUCCESSFULL_DELETE_PERMISO = exports.SUCCESSFULL_DELETE_PERMISO = "SUCCESSFULL_DELETE_PERMISO";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/david/Documentos/Proyectos/ReactJS/ReactJS/FE-Visibilidad/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "permisos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
]);