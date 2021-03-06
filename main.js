
'use strict';
this.wordle = this.wordle || {}, this.wordle.bundle = function(exports) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(obj);
  }
  /**
   * @param {!AudioNode} b
   * @param {!Function} a
   * @return {undefined}
   */
  function log(b, a) {
    if (!(b instanceof a)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!Function} a
   * @param {string} d
   * @return {undefined}
   */
  function t(a, d) {
    /** @type {number} */
    var i = 0;
    for (; i < d.length; i++) {
      var desc = d[i];
      desc.enumerable = desc.enumerable || false;
      /** @type {boolean} */
      desc.configurable = true;
      if ("value" in desc) {
        /** @type {boolean} */
        desc.writable = true;
      }
      Object.defineProperty(a, desc.key, desc);
    }
  }
  /**
   * @param {!Function} e
   * @param {!Function} r
   * @param {!Function} n
   * @return {?}
   */
  function trigger(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  }
  /**
   * @param {!Object} object
   * @param {string} name
   * @param {string} id
   * @return {?}
   */
  function callback(object, name, id) {
    return name in object ? Object.defineProperty(object, name, {
      value : id,
      enumerable : true,
      configurable : true,
      writable : true
    }) : object[name] = id, object;
  }
  /**
   * @param {string} message
   * @param {!Object} t
   * @return {undefined}
   */
  function on(message, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function");
    }
    /** @type {!Object} */
    message.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : message,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      fn(message, t);
    }
  }
  /**
   * @param {(!Function|string)} that
   * @return {?}
   */
  function wrapper(that) {
    return (wrapper = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
      return a.__proto__ || Object.getPrototypeOf(a);
    })(that);
  }
  /**
   * @param {string} type
   * @param {!Object} source
   * @return {?}
   */
  function fn(type, source) {
    return (fn = Object.setPrototypeOf || function(m, a) {
      return m.__proto__ = a, m;
    })(type, source);
  }
  /**
   * @return {?}
   */
  function defer() {
    if ("undefined" == typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ("function" == typeof Proxy) {
      return true;
    }
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e) {
      return false;
    }
  }
  /**
   * @param {!Function} type
   * @param {!Array} a
   * @param {!Function} fn
   * @return {?}
   */
  function init(type, a, fn) {
    return (init = defer() ? Reflect.construct : function(type, ctorArgs, e) {
      /** @type {!Array} */
      var or_queue = [null];
      or_queue.push.apply(or_queue, ctorArgs);
      var t = new (Function.bind.apply(type, or_queue));
      return e && fn(t, e.prototype), t;
    }).apply(null, arguments);
  }
  /**
   * @param {string} ctor
   * @return {?}
   */
  function register(ctor) {
    /** @type {(Map|undefined)} */
    var ss = "function" == typeof Map ? new Map : void 0;
    return (register = function(value) {
      /**
       * @return {?}
       */
      function method() {
        return init(value, arguments, wrapper(this).constructor);
      }
      if (null === value || (s = value, -1 === Function.toString.call(s).indexOf("[native code]"))) {
        return value;
      }
      var s;
      if ("function" != typeof value) {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (void 0 !== ss) {
        if (ss.has(value)) {
          return ss.get(value);
        }
        ss.set(value, method);
      }
      return method.prototype = Object.create(value.prototype, {
        constructor : {
          value : method,
          enumerable : false,
          writable : true,
          configurable : true
        }
      }), fn(method, value);
    })(ctor);
  }
  /**
   * @param {number} name
   * @return {?}
   */
  function set(name) {
    if (void 0 === name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return name;
  }
  /**
   * @param {undefined} event
   * @param {string} a
   * @return {?}
   */
  function onChange(event, a) {
    return !a || "object" != typeof a && "function" != typeof a ? set(event) : a;
  }
  /**
   * @param {!Function} name
   * @return {?}
   */
  function makeRequest(name) {
    var deferred = defer();
    return function() {
      var val;
      var C = wrapper(name);
      if (deferred) {
        var ctor = wrapper(this).constructor;
        val = Reflect.construct(C, arguments, ctor);
      } else {
        val = C.apply(this, arguments);
      }
      return onChange(this, val);
    };
  }
  /**
   * @param {!Object} el
   * @param {number} target
   * @return {?}
   */
  function update(el, target) {
    return function(val) {
      if (Array.isArray(val)) {
        return val;
      }
    }(el) || function(s, a) {
      var g = null == s ? null : "undefined" != typeof Symbol && s[Symbol.iterator] || s["@@iterator"];
      if (null == g) {
        return;
      }
      var info;
      var o;
      /** @type {!Array} */
      var m = [];
      /** @type {boolean} */
      var _n = true;
      /** @type {boolean} */
      var i = false;
      try {
        g = g.call(s);
        for (; !(_n = (info = g.next()).done) && (m.push(info.value), !a || m.length !== a); _n = true) {
        }
      } catch (tObj) {
        /** @type {boolean} */
        i = true;
        o = tObj;
      } finally {
        try {
          if (!(_n || null == g.return)) {
            g.return();
          }
        } finally {
          if (i) {
            throw o;
          }
        }
      }
      return m;
    }(el, target) || validate(el, target) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} i
   * @return {?}
   */
  function toArray(i) {
    return function(e) {
      if (Array.isArray(e)) {
        return next(e);
      }
    }(i) || function(units) {
      if ("undefined" != typeof Symbol && null != units[Symbol.iterator] || null != units["@@iterator"]) {
        return Array.from(units);
      }
    }(i) || validate(i) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} e
   * @param {number} a
   * @return {?}
   */
  function validate(e, a) {
    if (e) {
      if ("string" == typeof e) {
        return next(e, a);
      }
      /** @type {string} */
      var k = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === k && e.constructor && (k = e.constructor.name), "Map" === k || "Set" === k ? Array.from(e) : "Arguments" === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k) ? next(e, a) : void 0;
    }
  }
  /**
   * @param {!Object} item
   * @param {number} i
   * @return {?}
   */
  function next(item, i) {
    if (null == i || i > item.length) {
      i = item.length;
    }
    /** @type {number} */
    var k = 0;
    /** @type {!Array} */
    var copy = new Array(i);
    for (; k < i; k++) {
      copy[k] = item[k];
    }
    return copy;
  }
  /**
   * @param {?} x
   * @param {?} y
   * @return {?}
   */
  function is(x, y) {
    return x === y || x != x && y != y;
  }
  /**
   * @param {!Array} keys
   * @param {!Object} key
   * @return {?}
   */
  function indexOfIdentical(keys, key) {
    var i = keys.length;
    for (; i--;) {
      if (is(keys[i][0], key)) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @param {string} entries
   * @return {undefined}
   */
  function ListCache(entries) {
    /** @type {number} */
    var i = -1;
    var length = null == entries ? 0 : entries.length;
    this.clear();
    for (; ++i < length;) {
      var entry = entries[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function stringify(value) {
    return null == value ? void 0 === value ? "[object Undefined]" : "[object Null]" : symToStringTag && symToStringTag in Object(value) ? function(e) {
      var t = func.call(e, x);
      var i = e[x];
      try {
        e[x] = void 0;
        /** @type {boolean} */
        var ba = true;
      } catch (e) {
      }
      var b = type.call(e);
      return ba && (t ? e[x] = i : delete e[x]), b;
    }(value) : function(obj) {
      return objToString.call(obj);
    }(value);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArray(obj) {
    var type = _typeof(obj);
    return null != obj && ("object" == type || "function" == type);
  }
  /**
   * @param {!Object} date
   * @return {?}
   */
  function toString(date) {
    if (!isArray(date)) {
      return false;
    }
    var value = stringify(date);
    return "[object Function]" == value || "[object GeneratorFunction]" == value || "[object AsyncFunction]" == value || "[object Proxy]" == value;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isNative(value) {
    return !(!isArray(value) || (args = value, flagAlias && flagAlias in args)) && (toString(value) ? reIsNative : reIsHostCtor).test(function(value) {
      if (null != value) {
        try {
          return objectToString$2.call(value);
        } catch (e) {
        }
        try {
          return value + "";
        } catch (e) {
        }
      }
      return "";
    }(value));
    var args;
  }
  /**
   * @param {!Function} object
   * @param {string} key
   * @return {?}
   */
  function getNative(object, key) {
    var value = function(object, name) {
      return null == object ? void 0 : object[name];
    }(object, key);
    return isNative(value) ? value : void 0;
  }
  /**
   * @param {string} entries
   * @return {undefined}
   */
  function Hash(entries) {
    /** @type {number} */
    var i = -1;
    var length = null == entries ? 0 : entries.length;
    this.clear();
    for (; ++i < length;) {
      var entry = entries[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {!Object} self
   * @param {!Object} s
   * @return {?}
   */
  function get(self, s) {
    var numrc;
    var type;
    var data = self.__data__;
    return ("string" == (type = _typeof(numrc = s)) || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== numrc : null === numrc) ? data["string" == typeof s ? "string" : "hash"] : data.map;
  }
  /**
   * @param {string} values
   * @return {undefined}
   */
  function MapCache(values) {
    /** @type {number} */
    var i = -1;
    var length = null == values ? 0 : values.length;
    this.clear();
    for (; ++i < length;) {
      var entry = values[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {?} entries
   * @return {undefined}
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  /**
   * @param {!Object} obj
   * @param {string} prop
   * @param {!Object} def
   * @return {undefined}
   */
  function extend(obj, prop, def) {
    if ("__proto__" == prop && defineProperty) {
      defineProperty(obj, prop, {
        configurable : true,
        enumerable : true,
        value : def,
        writable : true
      });
    } else {
      /** @type {!Object} */
      obj[prop] = def;
    }
  }
  /**
   * @param {!Object} obj
   * @param {string} item
   * @param {?} value
   * @return {undefined}
   */
  function clone(obj, item, value) {
    if (void 0 !== value && !is(obj[item], value) || void 0 === value && !(item in obj)) {
      extend(obj, item, value);
    }
  }
  /**
   * @param {!Object} typedArray
   * @param {boolean} isDeep
   * @return {?}
   */
  function copy(typedArray, isDeep) {
    var arrayBuffer;
    var lump;
    var buffer = isDeep ? (arrayBuffer = typedArray.buffer, lump = new arrayBuffer.constructor(arrayBuffer.byteLength), (new Uint8Array(lump)).set(new Uint8Array(arrayBuffer)), lump) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  /**
   * @param {!Object} array
   * @return {?}
   */
  function require(array) {
    var obj = array && array.constructor;
    return array === ("function" == typeof obj && obj.prototype || objectProto$12);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isObject(obj) {
    return null != obj && "object" == _typeof(obj);
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function requiredValueValid(value) {
    return isObject(value) && "[object Arguments]" == stringify(value);
  }
  /**
   * @param {number} length
   * @return {?}
   */
  function isLength(length) {
    return "number" == typeof length && length > -1 && length % 1 == 0 && length <= 9007199254740991;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function isString(value) {
    return null != value && isLength(value.length) && !toString(value);
  }
  /**
   * @param {!Object} value
   * @param {string} name
   * @return {?}
   */
  function isPlainObject(value, name) {
    if (("constructor" !== name || "function" != typeof value[name]) && "__proto__" != name) {
      return value[name];
    }
  }
  /**
   * @param {!Object} data
   * @param {string} key
   * @param {?} value
   * @return {undefined}
   */
  function split(data, key, value) {
    var options = data[key];
    if (!(has.call(data, key) && is(options, value) && (void 0 !== value || key in data))) {
      extend(data, key, value);
    }
  }
  /**
   * @param {?} val
   * @param {number} x
   * @return {?}
   */
  function push(val, x) {
    var type = _typeof(val);
    return !!(x = null == x ? 9007199254740991 : x) && ("number" == type || "symbol" != type && rNum.test(val)) && val > -1 && val % 1 == 0 && val < x;
  }
  /**
   * @param {!Array} value
   * @param {boolean} inherited
   * @return {?}
   */
  function arrayLikeKeys(value, inherited) {
    /** @type {boolean} */
    var isArr = _isArray(value);
    var isBuff = !isArr && isBuffer(value);
    var isTyped = !isArr && !isBuff && action(value);
    var isType = !isArr && !isBuff && !isTyped && isTypedArray(value);
    var skipIndexes = isArr || isBuff || isTyped || isType;
    var result = skipIndexes ? function(length, iteratee) {
      /** @type {number} */
      var i = -1;
      /** @type {!Array} */
      var result = Array(length);
      for (; ++i < length;) {
        /** @type {string} */
        result[i] = iteratee(i);
      }
      return result;
    }(value.length, String) : [];
    var actual = result.length;
    var key;
    for (key in value) {
      if (!(!inherited && !__hasProp.call(value, key) || skipIndexes && ("length" == key || isTyped && ("offset" == key || "parent" == key) || isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || push(key, actual)))) {
        result.push(key);
      }
    }
    return result;
  }
  /**
   * @param {!Array} source
   * @return {?}
   */
  function translate(source) {
    if (!isArray(source)) {
      return function(object) {
        /** @type {!Array} */
        var arr = [];
        if (null != object) {
          var key;
          for (key in Object(object)) {
            arr.push(key);
          }
        }
        return arr;
      }(source);
    }
    var contents = require(source);
    /** @type {!Array} */
    var result = [];
    var prop;
    for (prop in source) {
      if ("constructor" != prop || !contents && safeHasOwnProperty.call(source, prop)) {
        result.push(prop);
      }
    }
    return result;
  }
  /**
   * @param {!Array} data
   * @return {?}
   */
  function keys(data) {
    return isString(data) ? arrayLikeKeys(data, true) : translate(data);
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function add(value) {
    return function(x, counter, data, fn) {
      /** @type {boolean} */
      var offer = !data;
      if (!data) {
        data = {};
      }
      /** @type {number} */
      var n = -1;
      var max = counter.length;
      for (; ++n < max;) {
        var i = counter[n];
        var value = fn ? fn(data[i], x[i], i, data, x) : void 0;
        if (void 0 === value) {
          value = x[i];
        }
        if (offer) {
          extend(data, i, value);
        } else {
          split(data, i, value);
        }
      }
      return data;
    }(value, keys(value));
  }
  /**
   * @param {!Object} x
   * @param {!Object} instance
   * @param {string} type
   * @param {number} fn
   * @param {!Function} map
   * @param {string} transform
   * @param {!Object} context
   * @return {undefined}
   */
  function test(x, instance, type, fn, map, transform, context) {
    var v = isPlainObject(x, type);
    var data = isPlainObject(instance, type);
    var result = context.get(data);
    if (result) {
      clone(x, type, result);
    } else {
      var val;
      var result = transform ? transform(v, data, type + "", x, instance, context) : void 0;
      /** @type {boolean} */
      var flag = void 0 === result;
      if (flag) {
        /** @type {boolean} */
        var h = _isArray(data);
        var d = !h && action(data);
        var w = !h && !d && isTypedArray(data);
        result = data;
        if (h || d || w) {
          if (_isArray(v)) {
            result = v;
          } else {
            if (isObject(val = v) && isString(val)) {
              result = function(params, result) {
                /** @type {number} */
                var p = -1;
                var q = params.length;
                if (!result) {
                  /** @type {!Array} */
                  result = Array(q);
                }
                for (; ++p < q;) {
                  result[p] = params[p];
                }
                return result;
              }(v);
            } else {
              if (d) {
                /** @type {boolean} */
                flag = false;
                result = function(o, zoomAware) {
                  if (zoomAware) {
                    return o.slice();
                  }
                  var s = o.length;
                  var date = create ? create(s) : new o.constructor(s);
                  return o.copy(date), date;
                }(data, true);
              } else {
                if (w) {
                  /** @type {boolean} */
                  flag = false;
                  result = copy(data, true);
                } else {
                  /** @type {!Array} */
                  result = [];
                }
              }
            }
          }
        } else {
          if (function(value) {
            if (!isObject(value) || "[object Object]" != stringify(value)) {
              return false;
            }
            var proto = $(value);
            if (null === proto) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }(data) || isBuffer(data)) {
            result = v;
            if (isBuffer(v)) {
              result = add(v);
            } else {
              if (!(isArray(v) && !toString(v))) {
                result = function(value) {
                  return "function" != typeof value.constructor || require(value) ? {} : resolve($(value));
                }(data);
              }
            }
          } else {
            /** @type {boolean} */
            flag = false;
          }
        }
      }
      if (flag) {
        context.set(data, result);
        map(result, data, fn, transform, context);
        context.delete(data);
      }
      clone(x, type, result);
    }
  }
  /**
   * @param {!Object} object
   * @param {!Object} source
   * @param {number} options
   * @param {string} customizer
   * @param {?} stack
   * @return {undefined}
   */
  function baseMerge(object, source, options, customizer, stack) {
    if (object !== source) {
      baseFor(source, function(srcValue, type) {
        if (stack || (stack = new Stack), isArray(srcValue)) {
          test(object, source, type, options, baseMerge, customizer, stack);
        } else {
          var result = customizer ? customizer(isPlainObject(object, type), srcValue, type + "", object, source, stack) : void 0;
          if (void 0 === result) {
            /** @type {!Object} */
            result = srcValue;
          }
          clone(object, type, result);
        }
      }, keys);
    }
  }
  /**
   * @param {!Array} keys
   * @return {?}
   */
  function key(keys) {
    return keys;
  }
  /**
   * @param {!Function} fn
   * @param {?} thisArg
   * @param {!Object} params
   * @return {?}
   */
  function applyQuick(fn, thisArg, params) {
    switch(params.length) {
      case 0:
        return fn.call(thisArg);
      case 1:
        return fn.call(thisArg, params[0]);
      case 2:
        return fn.call(thisArg, params[0], params[1]);
      case 3:
        return fn.call(thisArg, params[0], params[1], params[2]);
    }
    return fn.apply(thisArg, params);
  }
  /**
   * @param {string} id
   * @param {undefined} val
   * @return {?}
   */
  function exists(id, val) {
    return expect(function(e, i, value) {
      return i = max(void 0 === i ? e.length - 1 : i, 0), function() {
        /** @type {!Arguments} */
        var a = arguments;
        /** @type {number} */
        var j = -1;
        /** @type {number} */
        var m = max(a.length - i, 0);
        /** @type {!Array} */
        var x = Array(m);
        for (; ++j < m;) {
          x[j] = a[i + j];
        }
        /** @type {number} */
        j = -1;
        /** @type {!Array} */
        var params = Array(i + 1);
        for (; ++j < i;) {
          params[j] = a[j];
        }
        return params[i] = value(x), applyQuick(e, this, params);
      };
    }(id, val, key), id + "");
  }
  /**
   * @return {?}
   */
  function parse() {
    /** @type {string} */
    var favs_data = window.localStorage.getItem(url) || JSON.stringify(data);
    return JSON.parse(favs_data);
  }
  /**
   * @param {?} rows
   * @return {undefined}
   */
  function done(rows) {
    var createdRows = parse();
    !function(showThumb) {
      window.localStorage.setItem(url, JSON.stringify(showThumb));
    }(_afterCreateRow(createdRows, rows));
  }
  /**
   * @return {undefined}
   */
  function check() {
    dataLayer.push(arguments);
  }
  /**
   * @param {!Array} errors
   * @param {!NodeList} component
   * @return {?}
   */
  function filter(errors, component) {
    var tableSjis = {};
    return errors.forEach(function(inStyles, methodNameOrFunction) {
      if (component[methodNameOrFunction]) {
        /** @type {number} */
        var stylesLimit = 0;
        for (; stylesLimit < inStyles.length; stylesLimit++) {
          var sjis = inStyles[stylesLimit];
          var counter = component[methodNameOrFunction][stylesLimit];
          var id = tableSjis[sjis] || "unknown";
          if (settings[counter] > settings[id]) {
            tableSjis[sjis] = counter;
          }
        }
      }
    }), tableSjis;
  }
  /**
   * @param {number} number
   * @return {?}
   */
  function ordinal(number) {
    /** @type {!Array} */
    switch(number) {
      case 1:
        return "Birinci";
      case 2:
        return "??kinci";
      case 3:
        return "??????nc??";
      case 4:
        return "D??rd??nc??";
	  case 5:
        return "Be??inci";
    }
	return number + "-ci";
  }
  /**
   * @param {!Date} obj
   * @param {!Date} val
   * @return {?}
   */
  function cb(obj, val) {
    /** @type {!Date} */
    var t = new Date(obj);
    /** @type {number} */
    var filmSteps = (new Date(val)).setHours(0, 0, 0, 0) - t.setHours(0, 0, 0, 0);
    return Math.round(filmSteps / 864E5);
  }
  /**
   * @param {!Date} a
   * @return {?}
   */
  function isDate(a) {
    var i;
    var j = getTime(a);
    return i = j * 26641 % options.length, options[i];
  }
  /**
   * @param {!Date} token
   * @return {?}
   */
  function getTime(token) {
    return cb(mutationsMap, token);
  }
  /**
   * @param {!NodeList} values
   * @return {?}
   */
  function combine(values) {
    /** @type {string} */
    var ret = "";
    /** @type {number} */
    var j = 0;
    for (; j < values.length; j++) {
      /** @type {number} */
      var braceIndex = choices.indexOf(values[j]);
      /** @type {string} */
      ret = ret + (braceIndex >= 0 ? braces[braceIndex] : "_");
    }
    return ret;
  }
  /**
   * @return {?}
   */
  function deepClone() {
    /** @type {string} */
    var favs_data = window.localStorage.getItem(STORAGE_KEY_MOCKSTORE) || JSON.stringify(train1or);
    return JSON.parse(favs_data);
  }
  /**
   * @param {?} options
   * @return {undefined}
   */
  function draw(options) {
    var stdout = options.isWin;
    var includerReg = options.isStreak;
    var t = options.numGuesses;
    var data = deepClone();
    if (stdout) {
      data.guesses[t] += 1;
      if (includerReg) {
        data.currentStreak += 1;
      } else {
        /** @type {number} */
        data.currentStreak = 1;
      }
    } else {
      /** @type {number} */
      data.currentStreak = 0;
      data.guesses.fail += 1;
    }
    /** @type {number} */
    data.maxStreak = Math.max(data.currentStreak, data.maxStreak);
    data.gamesPlayed += 1;
    data.gamesWon += stdout ? 1 : 0;
    /** @type {number} */
    data.winPercentage = Math.round(data.gamesWon / data.gamesPlayed * 100);
    /** @type {number} */
    data.averageGuesses = Math.round(Object.entries(data.guesses).reduce(function(i, select) {
      var res = update(select, 2);
      var k = res[0];
      var width = res[1];
      return k !== undefined ? i = i + k * width : i;
    }, 0) / data.gamesWon);
    (function(commitData) {
      window.localStorage.setItem(STORAGE_KEY_MOCKSTORE, JSON.stringify(commitData));
    })(data);
  }
  /**
   * @param {?} thisArg
   * @param {number} _arguments
   * @param {!Function} P
   * @param {!Function} generator
   * @return {?}
   */
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(expect, reject) {
      /**
       * @param {?} value
       * @return {undefined}
       */
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (createConnectionErr) {
          reject(createConnectionErr);
        }
      }
      /**
       * @param {?} value
       * @return {undefined}
       */
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (createConnectionErr) {
          reject(createConnectionErr);
        }
      }
      /**
       * @param {!Object} result
       * @return {undefined}
       */
      function step(result) {
        var x;
        if (result.done) {
          expect(result.value);
        } else {
          (x = result.value, x instanceof P ? x : new P(function(resolve) {
            resolve(x);
          })).then(fulfilled, rejected);
        }
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  /**
   * @param {?} text
   * @param {!Function} a
   * @return {?}
   */
  function send(text, a) {
    /**
     * @param {number} data
     * @return {?}
     */
    function verb(data) {
      return function(i) {
        return function(op) {
          if (pp) {
            throw new TypeError("Generator is already executing.");
          }
          for (; _;) {
            try {
              if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                return t;
              }
              switch(c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  return _.label++, {
                    value : op[1],
                    done : false
                  };
                case 5:
                  _.label++;
                  c = op[1];
                  /** @type {!Array} */
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!((t = (t = _.trys).length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                    /** @type {number} */
                    _ = 0;
                    continue;
                  }
                  if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (6 === op[0] && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) {
                    _.ops.pop();
                  }
                  _.trys.pop();
                  continue;
              }
              op = a.call(text, _);
            } catch (e) {
              /** @type {!Array} */
              op = [6, e];
              /** @type {number} */
              c = 0;
            } finally {
              /** @type {number} */
              pp = t = 0;
            }
          }
          if (5 & op[0]) {
            throw op[1];
          }
          return {
            value : op[0] ? op[1] : void 0,
            done : true
          };
        }([data, i]);
      };
    }
    var pp;
    var c;
    var t;
    var g;
    var _ = {
      label : 0,
      sent : function() {
        if (1 & t[0]) {
          throw t[1];
        }
        return t[1];
      },
      trys : [],
      ops : []
    };
    return g = {
      next : verb(0),
      throw : verb(1),
      return : verb(2)
    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
      return this;
    }), g;
  }
  /**
   * @param {!Object} text
   * @param {!Object} obj
   * @param {!Event} event
   * @return {undefined}
   */
  function paste(text, obj, event) {
    var key;
    for (key in text.success = true, obj) {
      var value = obj[key];
      var data = event.clipboardData;
      data.setData(key, value);
      if ("text/plain" === key && data.getData(key) !== value) {
        /** @type {boolean} */
        text.success = false;
      }
    }
    event.preventDefault();
  }
  /**
   * @param {!Object} d
   * @return {?}
   */
  function F(d) {
    var b = new e;
    var c = paste.bind(this, b, d);
    document.addEventListener("copy", c);
    try {
      document.execCommand("copy");
    } finally {
      document.removeEventListener("copy", c);
    }
    return b.success;
  }
  /**
   * @param {!Element} props
   * @param {!Object} obj
   * @return {?}
   */
  function wrap(props, obj) {
    select(props);
    var res = F(obj);
    return _moveCursorToEnd(), res;
  }
  /**
   * @param {(Node|Window)} target
   * @return {undefined}
   */
  function select(target) {
    var sel = document.getSelection();
    if (sel) {
      /** @type {(Range|null)} */
      var range = document.createRange();
      range.selectNodeContents(target);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
  /**
   * @return {undefined}
   */
  function _moveCursorToEnd() {
    var selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function start(data) {
    return __awaiter(this, void 0, void 0, function() {
      var valid;
      return send(this, function(s) {
        if (valid = "text/plain" in data, "undefined" == typeof ClipboardEvent && void 0 !== state.clipboardData && void 0 !== state.clipboardData.setData) {
          if (!valid) {
            throw new Error("No `text/plain` value was specified.");
          }
          if (content = data["text/plain"], state.clipboardData.setData("Text", content)) {
            return [2, true];
          }
          throw new Error("Copying failed, possibly because the user rejected it.");
        }
        var content;
        return F(data) || navigator.userAgent.indexOf("Edge") > -1 || wrap(document.body, data) || function(parent) {
          /** @type {!Element} */
          var value = document.createElement("div");
          value.setAttribute("style", "-webkit-user-select: text !important");
          /** @type {string} */
          value.textContent = "temporary element";
          document.body.appendChild(value);
          var result = wrap(value, parent);
          return document.body.removeChild(value), result;
        }(data) || function(total) {
          /** @type {!Element} */
          var div = document.createElement("div");
          div.setAttribute("style", "-webkit-user-select: text !important");
          /** @type {!Element} */
          var a = div;
          if (div.attachShadow) {
            a = div.attachShadow({
              mode : "open"
            });
          }
          /** @type {!Element} */
          var body = document.createElement("span");
          /** @type {string} */
          body.innerText = total;
          a.appendChild(body);
          document.body.appendChild(div);
          select(body);
          var bubble = document.execCommand("copy");
          return _moveCursorToEnd(), document.body.removeChild(div), bubble;
        }(data["text/plain"]) ? [2, true] : [2, false];
      });
    });
  }
  /**
   * @param {!Object} time
   * @param {!Function} end
   * @param {!Function} range
   * @return {undefined}
   */
  function render(time, end, range) {
    try {
      t = navigator.userAgent || navigator.vendor || window.opera;
      if (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 
      4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(time)) {
        (function(data) {
          return __awaiter(this, void 0, void 0, function() {
            return send(this, function(a) {
              if (renderMachines) {
                return [2, renderMachines(data)];
              }
              if (!start(function(cb) {
                var routes = {};
                return routes["text/plain"] = cb, routes;
              }(data))) {
                throw new Error("writeText() failed");
              }
              return [2];
            });
          });
        })(time.text).then(end, range);
      } else {
        navigator.share(time);
      }
    } catch (e) {
      range();
    }
    var t;
  }
  /** @type {!Element} */
  var conferenceGroupDetailsTemplate = document.createElement("template");
  /** @type {string} */
  conferenceGroupDetailsTemplate.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: ;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var Class = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      return log(this, update), callback(set(self = api.call(this)), "_letter", ""), callback(set(self), "_state", "empty"), callback(set(self), "_animation", "idle"), callback(set(self), "_last", false), callback(set(self), "_reveal", false), self.attachShadow({
        mode : "open"
      }), self;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "last",
      set : function(text) {
        /** @type {string} */
        this._last = text;
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(conferenceGroupDetailsTemplate.content.cloneNode(true));
        this.$tile = this.shadowRoot.querySelector(".tile");
        this.$tile.addEventListener("animationend", function(css) {
          if ("PopIn" === css.animationName) {
            /** @type {string} */
            self._animation = "idle";
          }
          if ("FlipIn" === css.animationName) {
            self.$tile.dataset.state = self._state;
            /** @type {string} */
            self._animation = "flip-out";
          }
          if ("FlipOut" === css.animationName) {
            /** @type {string} */
            self._animation = "idle";
            if (self._last) {
              self.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                bubbles : true,
                composed : true
              }));
            }
          }
          self._render();
        });
        this._render();
      }
    }, {
      key : "attributeChangedCallback",
      value : function(matchPattern, test, value) {
        switch(matchPattern) {
          case "letter":
            if (value === test) {
              break;
            }
            var end = "null" === value ? "" : value;
            this._letter = end;
            /** @type {string} */
            this._state = end ? "tbd" : "empty";
            /** @type {string} */
            this._animation = end ? "pop" : "idle";
            break;
          case "evaluation":
            if (!value) {
              break;
            }
            /** @type {string} */
            this._state = value;
            break;
          case "reveal":
            /** @type {string} */
            this._animation = "flip-in";
            /** @type {boolean} */
            this._reveal = true;
        }
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        if (this.$tile) {
          this.$tile.textContent = this._letter;
          if (["empty", "tbd"].includes(this._state)) {
            this.$tile.dataset.state = this._state;
          }
          if ((["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation) {
            this.$tile.dataset.animation = this._animation;
          }
        }
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["letter", "evaluation", "reveal"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-tile", Class);
  /** @type {!Element} */
  var parts = document.createElement("template");
  /** @type {string} */
  parts.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var cls = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var data;
      return log(this, update), (data = api.call(this)).attachShadow({
        mode : "open"
      }), data._letters = "", data._evaluation = [], data._length, data;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "evaluation",
      get : function() {
        return this._evaluation;
      },
      set : function(data) {
        var vroot = this;
        /** @type {!Object} */
        this._evaluation = data;
        if (this.$tiles) {
          this.$tiles.forEach(function(table, i) {
            table.setAttribute("evaluation", vroot._evaluation[i]);
            setTimeout(function() {
              table.setAttribute("reveal", "");
            }, 300 * i);
          });
        }
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var data = this;
        this.shadowRoot.appendChild(parts.content.cloneNode(true));
        this.$row = this.shadowRoot.querySelector(".row");
        /**
         * @param {number} index
         * @return {undefined}
         */
        var init = function(index) {
          /** @type {!Element} */
          var node = document.createElement("game-tile");
          var className = data._letters[index];
          if (className && node.setAttribute("letter", className), data._evaluation[index]) {
            node.setAttribute("evaluation", data._evaluation[index]);
            setTimeout(function() {
              node.setAttribute("reveal", "");
            }, 100 * index);
          }
          if (index === data._length - 1) {
            /** @type {boolean} */
            node.last = true;
          }
          data.$row.appendChild(node);
        };
        /** @type {number} */
        var i = 0;
        for (; i < this._length; i++) {
          init(i);
        }
        this.$tiles = this.shadowRoot.querySelectorAll("game-tile");
        this.addEventListener("animationend", function(css) {
          if ("Shake" === css.animationName) {
            data.removeAttribute("invalid");
          }
        });
      }
    }, {
      key : "attributeChangedCallback",
      value : function(name, a, start) {
        switch(name) {
          case "letters":
            this._letters = start || "";
            break;
          case "length":
            /** @type {number} */
            this._length = parseInt(start, 10);
            break;
          case "win":
            if (null === start) {
              this.$tiles.forEach(function(focusedObj) {
                focusedObj.classList.remove("win");
              });
              break;
            }
            this.$tiles.forEach(function(elem, scaleX) {
              elem.classList.add("win");
              /** @type {string} */
              elem.style.animationDelay = "".concat(100 * scaleX, "ms");
            });
        }
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        var data = this;
        if (this.$row) {
          this.$tiles.forEach(function(a, tag) {
            var group = data._letters[tag];
            if (group) {
              a.setAttribute("letter", group);
            } else {
              a.removeAttribute("letter");
            }
          });
        }
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["letters", "length", "invalid", "win"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-row", cls);
  /** @type {!Element} */
  var tokens = document.createElement("template");
  /** @type {string} */
  tokens.innerHTML = "\n  <slot></slot>\n";
  /** @type {string} */
  var shop_id = "darkTheme";
  /** @type {string} */
  var STORE_ID = "colorBlindTheme";
  var SorTable = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      log(this, update);
      callback(set(element = api.call(this)), "isDarkTheme", false);
      callback(set(element), "isColorBlindTheme", false);
      element.attachShadow({
        mode : "open"
      });
      /** @type {*} */
      var a = JSON.parse(window.localStorage.getItem(shop_id));
      /** @type {boolean} */
      var oldMatches = window.matchMedia("(prefers-color-scheme: dark)").matches;
      /** @type {*} */
      var addBtnElement = JSON.parse(window.localStorage.getItem(STORE_ID));
      return true === a || false === a ? element.setDarkTheme(a) : oldMatches && element.setDarkTheme(true), true !== addBtnElement && false !== addBtnElement || element.setColorBlindTheme(addBtnElement), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "setDarkTheme",
      value : function(e) {
        /** @type {(Element|null)} */
        var a = document.querySelector("body");
        if (e && !a.classList.contains("nightmode")) {
          a.classList.add("nightmode");
        } else {
          a.classList.remove("nightmode");
        }
        /** @type {boolean} */
        this.isDarkTheme = e;
        window.localStorage.setItem(shop_id, JSON.stringify(e));
      }
    }, {
      key : "setColorBlindTheme",
      value : function(e) {
        /** @type {(Element|null)} */
        var a = document.querySelector("body");
        if (e && !a.classList.contains("colorblind")) {
          a.classList.add("colorblind");
        } else {
          a.classList.remove("colorblind");
        }
        /** @type {boolean} */
        this.isColorBlindTheme = e;
        window.localStorage.setItem(STORE_ID, JSON.stringify(e));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var window_ = this;
        this.shadowRoot.appendChild(tokens.content.cloneNode(true));
        this.shadowRoot.addEventListener("game-setting-change", function(params) {
          var config = params.detail;
          var groupCellClass = config.name;
          var anim = config.checked;
          switch(groupCellClass) {
            case "dark-theme":
              return void window_.setDarkTheme(anim);
            case "color-blind-theme":
              return void window_.setColorBlindTheme(anim);
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-theme-manager", SorTable);
  /** @type {function(this:IArrayLike<T>, *=, *=, ...T): !Array<T>} */
  var splice = Array.prototype.splice;
  /**
   * @return {undefined}
   */
  ListCache.prototype.clear = function() {
    /** @type {!Array} */
    this.__data__ = [];
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {(Object|string)} key
   * @return {?}
   */
  ListCache.prototype.delete = function(key) {
    var data = this.__data__;
    var index = indexOfIdentical(data, key);
    return !(index < 0) && (index == data.length - 1 ? data.pop() : splice.call(data, index, 1), --this.size, true);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  ListCache.prototype.get = function(key) {
    var keys = this.__data__;
    var index = indexOfIdentical(keys, key);
    return index < 0 ? void 0 : keys[index][1];
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  ListCache.prototype.has = function(key) {
    return indexOfIdentical(this.__data__, key) > -1;
  };
  /**
   * @param {!Object} key
   * @param {(!Function|string)} item
   * @return {?}
   */
  ListCache.prototype.set = function(key, item) {
    var keys = this.__data__;
    var index = indexOfIdentical(keys, key);
    return index < 0 ? (++this.size, keys.push([key, item])) : keys[index][1] = item, this;
  };
  var freeGlobal = "object" == ("undefined" == typeof global ? "undefined" : _typeof(global)) && global && global.Object === Object && global;
  /** @type {(Window|boolean)} */
  var freeSelf = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var Symbol = root.Symbol;
  var prop = Object.prototype;
  var func = prop.hasOwnProperty;
  var type = prop.toString;
  var x = Symbol ? Symbol.toStringTag : void 0;
  /** @type {function(this:*): string} */
  var objToString = Object.prototype.toString;
  var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
  var that;
  var coreJsData = root["__core-js_shared__"];
  /** @type {string} */
  var flagAlias = (that = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "")) ? "Symbol(src)_1." + that : "";
  /** @type {function(this:!Function): string} */
  var objectToString$2 = Function.prototype.toString;
  /** @type {!RegExp} */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var p = Function.prototype;
  var objectProto$4 = Object.prototype;
  /** @type {function(this:!Function): string} */
  var str = p.toString;
  var hasOwnProperty$2 = objectProto$4.hasOwnProperty;
  /** @type {!RegExp} */
  var reIsNative = RegExp("^" + str.call(hasOwnProperty$2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Map = getNative(root, "Map");
  var nativeCreate = getNative(Object, "create");
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
  /**
   * @return {undefined}
   */
  Hash.prototype.clear = function() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.delete = function(key) {
    var result = this.has(key) && delete this.__data__[key];
    return this.size -= result ? 1 : 0, result;
  };
  /**
   * @param {!Object} k
   * @return {?}
   */
  Hash.prototype.get = function(k) {
    var data = this.__data__;
    if (nativeCreate) {
      var val = data[k];
      return "__lodash_hash_undefined__" === val ? void 0 : val;
    }
    return hasOwn.call(data, k) ? data[k] : void 0;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.has = function(key) {
    var data = this.__data__;
    return nativeCreate ? void 0 !== data[key] : hasOwnProperty$3.call(data, key);
  };
  /**
   * @param {!Object} type
   * @param {?} value
   * @return {?}
   */
  Hash.prototype.set = function(type, value) {
    var data = this.__data__;
    return this.size += this.has(type) ? 0 : 1, data[type] = nativeCreate && void 0 === value ? "__lodash_hash_undefined__" : value, this;
  };
  /**
   * @return {undefined}
   */
  MapCache.prototype.clear = function() {
    /** @type {number} */
    this.size = 0;
    this.__data__ = {
      hash : new Hash,
      map : new (Map || ListCache),
      string : new Hash
    };
  };
  /**
   * @param {(Object|string)} id
   * @return {?}
   */
  MapCache.prototype.delete = function(id) {
    var result = get(this, id).delete(id);
    return this.size -= result ? 1 : 0, result;
  };
  /**
   * @param {!Object} e
   * @return {?}
   */
  MapCache.prototype.get = function(e) {
    return get(this, e).get(e);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  MapCache.prototype.has = function(key) {
    return get(this, key).has(key);
  };
  /**
   * @param {(Object|string)} data
   * @param {!Array} a
   * @return {?}
   */
  MapCache.prototype.set = function(data, a) {
    var x = get(this, data);
    var n = x.size;
    return x.set(data, a), this.size += x.size == n ? 0 : 1, this;
  };
  /**
   * @return {undefined}
   */
  Stack.prototype.clear = function() {
    this.__data__ = new ListCache;
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {(Object|string)} e
   * @return {?}
   */
  Stack.prototype.delete = function(e) {
    var data = this.__data__;
    var this_area = data.delete(e);
    return this.size = data.size, this_area;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  Stack.prototype.get = function(value) {
    return this.__data__.get(value);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Stack.prototype.has = function(key) {
    return this.__data__.has(key);
  };
  /**
   * @param {(Object|string)} value
   * @param {!Array} item
   * @return {?}
   */
  Stack.prototype.set = function(value, item) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map || pairs.length < 199) {
        return pairs.push([value, item]), this.size = ++cache.size, this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    return cache.set(value, item), this.size = cache.size, this;
  };
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      return func({}, "", {}), func;
    } catch (e) {
    }
  }();
  var fromRight;
  /**
   * @param {!Object} object
   * @param {!Function} cb
   * @param {!Function} keysFunc
   * @return {?}
   */
  var baseFor = function(object, cb, keysFunc) {
    /** @type {number} */
    var index = -1;
    /** @type {!Object} */
    var o = Object(object);
    var props = keysFunc(object);
    var length = props.length;
    for (; length--;) {
      var p = props[fromRight ? length : ++index];
      if (false === cb(o[p], p, o)) {
        break;
      }
    }
    return object;
  };
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var uri = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var widget = uri && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var Buffer = widget && widget.exports === uri ? root.Buffer : void 0;
  var create = Buffer ? Buffer.allocUnsafe : void 0;
  var Uint8Array = root.Uint8Array;
  /** @type {function((Object|null), (Object|null)=): !Object} */
  var _create = Object.create;
  var resolve = function() {
    /**
     * @return {undefined}
     */
    function e() {
    }
    return function(obj) {
      if (!isArray(obj)) {
        return {};
      }
      if (_create) {
        return _create(obj);
      }
      /** @type {!Object} */
      e.prototype = obj;
      var b = new e;
      return e.prototype = void 0, b;
    };
  }();
  var getPrototypeOf;
  var ret;
  /** @type {function(!Object): ?} */
  var $ = (getPrototypeOf = Object.getPrototypeOf, ret = Object, function(name) {
    return getPrototypeOf(ret(name));
  });
  var objectProto$12 = Object.prototype;
  var objectProto = Object.prototype;
  var isProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  /** @type {function(!Array): ?} */
  var isBuffer = requiredValueValid(function() {
    return arguments;
  }()) ? requiredValueValid : function(value) {
    return isObject(value) && isProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  /** @type {function(*): boolean} */
  var _isArray = Array.isArray;
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var freeExports = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var freeModule = freeExports && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var file = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
  var action = (file ? file.isBuffer : void 0) || function() {
    return false;
  };
  var funcProto = Function.prototype;
  var ObjProto = Object.prototype;
  /** @type {function(this:!Function): string} */
  var funcToString = funcProto.toString;
  var hasOwnProperty = ObjProto.hasOwnProperty;
  /** @type {string} */
  var objectCtorString = funcToString.call(Object);
  var primaryReplicas = {};
  /** @type {boolean} */
  primaryReplicas["[object Float32Array]"] = primaryReplicas["[object Float64Array]"] = primaryReplicas["[object Int8Array]"] = primaryReplicas["[object Int16Array]"] = primaryReplicas["[object Int32Array]"] = primaryReplicas["[object Uint8Array]"] = primaryReplicas["[object Uint8ClampedArray]"] = primaryReplicas["[object Uint16Array]"] = primaryReplicas["[object Uint32Array]"] = true;
  /** @type {boolean} */
  primaryReplicas["[object Arguments]"] = primaryReplicas["[object Array]"] = primaryReplicas["[object ArrayBuffer]"] = primaryReplicas["[object Boolean]"] = primaryReplicas["[object DataView]"] = primaryReplicas["[object Date]"] = primaryReplicas["[object Error]"] = primaryReplicas["[object Function]"] = primaryReplicas["[object Map]"] = primaryReplicas["[object Number]"] = primaryReplicas["[object Object]"] = primaryReplicas["[object RegExp]"] = primaryReplicas["[object Set]"] = primaryReplicas["[object String]"] = 
  primaryReplicas["[object WeakMap]"] = false;
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var a = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var parent = a && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var freeProcess = parent && parent.exports === a && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var e = parent && parent.require && parent.require("util").types;
      return e || freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? function(func) {
    return function(ldata) {
      return func(ldata);
    };
  }(nodeIsTypedArray) : function(value) {
    return isObject(value) && isLength(value.length) && !!primaryReplicas[stringify(value)];
  };
  /** @type {function(this:Object, *): boolean} */
  var has = Object.prototype.hasOwnProperty;
  /** @type {!RegExp} */
  var rNum = /^(?:0|[1-9]\d*)$/;
  /** @type {function(this:Object, *): boolean} */
  var __hasProp = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, *): boolean} */
  var safeHasOwnProperty = Object.prototype.hasOwnProperty;
  /** @type {function(...?): number} */
  var max = Math.max;
  /** @type {!Function} */
  var id = defineProperty ? function(resourceClass, a) {
    return defineProperty(resourceClass, "toString", {
      configurable : true,
      enumerable : false,
      value : (_x$2 = a, function() {
        return _x$2;
      }),
      writable : true
    });
    var _x$2;
  } : key;
  /** @type {function(): number} */
  var d = Date.now;
  var expect = function(CropAreaRectangle) {
    /** @type {number} */
    var a = 0;
    /** @type {number} */
    var concurency = 0;
    return function() {
      /** @type {number} */
      var connectNumber = d();
      /** @type {number} */
      var first = 16 - (connectNumber - concurency);
      if (concurency = connectNumber, first > 0) {
        if (++a >= 800) {
          return arguments[0];
        }
      } else {
        /** @type {number} */
        a = 0;
      }
      return CropAreaRectangle.apply(void 0, arguments);
    };
  }(id);
  var merge;
  var _afterCreateRow = (merge = function(object, source, callback) {
    baseMerge(object, source, callback);
  }, exists(function(obj, array) {
    /** @type {number} */
    var i = -1;
    var length = array.length;
    var customizer = length > 1 ? array[length - 1] : void 0;
    var el_l = length > 2 ? array[2] : void 0;
    /** @type {(!Function|undefined)} */
    customizer = merge.length > 3 && "function" == typeof customizer ? (length--, customizer) : void 0;
    if (el_l && function(undefined, y, pos) {
      if (!isArray(pos)) {
        return false;
      }
      var type = _typeof(y);
      return !!("number" == type ? isString(pos) && push(y, pos.length) : "string" == type && y in pos) && is(pos[y], undefined);
    }(array[0], array[1], el_l)) {
      /** @type {(!Function|undefined)} */
      customizer = length < 3 ? void 0 : customizer;
      /** @type {number} */
      length = 1;
    }
    /** @type {!Object} */
    obj = Object(obj);
    for (; ++i < length;) {
      var item = array[i];
      if (item) {
        merge(obj, item, i, customizer);
      }
    }
    return obj;
  }));
  /** @type {string} */
  var url = "gameState";
  var data = {
    boardState : null,
    evaluations : null,
    rowIndex : null,
    solution : null,
    gameStatus : null,
    lastPlayedTs : null,
    lastCompletedTs : null,
    restoringFromLocalStorage : null,
    hardMode : false
  };
  /** @type {!Element} */
  var nodes = document.createElement("template");
  /** @type {string} */
  nodes.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">????tin variant</div>\n          <div class="description">H??r bir i??ar?? sonrak?? c??hdl??rd?? istifad?? edilm??lidir.</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Qaranl??q mod</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Kontrast r??ngl??r</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">??laq??</div>\n        </div>\n        <div class="control">\n          <a href="https://synetrix.in"  target="blank" title="Synetrix.in">Synetrix.in</a>\n          |\n          <a href="mailto:info@synetrix.in" target="blank" title="info@synetrix.in">info@synetrix.in</a>\n        </div>\n      </div>\n    </section>\n <section>\n      <div class="setting">\n        <div class="text">\n   <p>S??z bazas??n?? v?? ya maraqland??????n??z dig??r m??lumatlar <a href = "https://github.com/Shahidsamadov/wordle-azerbaycan-dilinde-web" target="_blank">github-da</a> ??trafl?? ????kild?? g??r?? bil??rsiniz </p>       <p>Orijinal oyunun m????llifi: Josh Wardle. <a href = "https://www.nytimes.com/games/wordle/" target="_blank">Linkd??</a> ingilis dilind?? oynaya bil??rsiniz.</section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="puzzle-number"></div>\n </div>\n  </div>\n';
  var XelDemoElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "gameApp", void 0), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var e;
        var modal = this;
        this.shadowRoot.appendChild(nodes.content.cloneNode(true));
        /** @type {string} */
        this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset);
        this.shadowRoot.addEventListener("game-switch-change", function(event) {
          event.stopPropagation();
          var node = event.detail;
          var t = node.name;
          var value = node.checked;
          var isDisabled = node.disabled;
          modal.dispatchEvent(new CustomEvent("game-setting-change", {
            bubbles : true,
            composed : true,
            detail : {
              name : t,
              checked : value,
              disabled : isDisabled
            }
          }));
          modal.render();
        });
        this.render();
      }
    }, {
      key : "render",
      value : function() {
        /** @type {(Element|null)} */
        var e = document.querySelector("body");
        if (e.classList.contains("nightmode")) {
          this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", "");
        }
        if (e.classList.contains("colorblind")) {
          this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
        }
        var from = parse();
        if (from.hardMode) {
          this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", "");
        }
        if (!(from.hardMode || "IN_PROGRESS" !== from.gameStatus || 0 === from.rowIndex)) {
          this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked");
          this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", "");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-settings", XelDemoElement);
  /** @type {!Element} */
  var content = document.createElement("template");
  /** @type {string} */
  content.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var wndMain;
  var ActionSheetButtonElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "_duration", void 0), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var gobel = this;
        this.shadowRoot.appendChild(content.content.cloneNode(true));
        var e = this.shadowRoot.querySelector(".toast");
        e.textContent = this.getAttribute("text");
        this._duration = this.getAttribute("duration") || 1E3;
        if ("Infinity" !== this._duration) {
          setTimeout(function() {
            e.classList.add("fade");
          }, this._duration);
        }
        e.addEventListener("transitionend", function(a) {
          gobel.parentNode.removeChild(gobel);
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-toast", ActionSheetButtonElement);
  window.dataLayer = window.dataLayer || [];
  check("js", new Date);
  /** @type {!Array} */
  var options = ["abid??",
  "abun??",
  "acl??q",
  "a??maq",
  "add??m",
  "ads??z",
  "afi??a",
  "ah??ng",
  "alan??",
  "al??aq",
  "al??c??",
  "all??q",
  "almaq",
  "almaz",
  "alq????",
  "altay",
  "altun",
  "ampul",
  "anbar",
  "ancaq",
  "antik",
  "aprel",
  "aptek",
  "aqrar",
  "araba",
  "ard??c",
  "ariz??",
  "armud",
  "art??m",
  "art??q",
  "arvad",
  "arxiv",
  "a??a????",
  "a??baz",
  "aslan",
  "asmaq",
  "a??paz",
  "astar",
  "asud??",
  "at??c??",
  "atlas",
  "atmaq",
  "audit",
  "avans",
  "avara",
  "axmaq",
  "ax??am",
  "axsaq",
  "ayd??n",
  "ay????r",
  "ayl??q",
  "ayran",
  "ayr??c",
  "ayr??q",
  "az????n",
  "azl??q",
  "azmaq",
  "azuq??",
  "badam",
  "ba????a",
  "ba??l??",
  "bahar",
  "bah??m",
  "bakir",
  "balet",
  "bal??q",
  "ball??",
  "balta",
  "banan",
  "barak",
  "barel",
  "bar????",
  "bar??t",
  "bariz",
  "ba??aq",
  "basma",
  "ba??qa",
  "basq??",
  "bataq",
  "batil",
  "bat??q",
  "baton",
  "batq??",
  "bax??m",
  "bax????",
  "baxma",
  "bayan",
  "bayaq",
  "bayat",
  "bayaz",
  "bazar",
  "b??b??k",
  "b??bir",
  "b??d??l",
  "b??d??n",
  "b??dii",
  "b??h??m",
  "b??hr??",
  "bekar",
  "b??l??k",
  "b??lk??",
  "b??nd??",
  "beret",
  "b??rpa",
  "b??????r",
  "be??ik",
  "b??sit",
  "b??st??",
  "b??sti",
  "b??yan",
  "b??yaz",
  "b??yim",
  "beyin",
  "bezar",
  "b??z??k",
  "b??z??n",
  "bezik",
  "bib??r",
  "b????aq",
  "bi??im",
  "bi??in",
  "bidar",
  "b????l??",
  "bihal",
  "bihu??",
  "bil??k",
  "bilet",
  "bilik",
  "birg??",
  "birja",
  "biti??",
  "bitki",
  "bivec",
  "b??c??k",
  "bo??az",
  "bo????a",
  "b??lg??",
  "b??lg??",
  "b??lm??",
  "b??l??k",
  "b??l??m",
  "boran",
  "b??y??k",
  "boyun",
  "bucaq",
  "budaq",
  "b??dc??",
  "bufer",
  "bu??da",
  "bu??um",
  "buket",
  "b??km??",
  "b??k??k",
  "b??k??m",
  "b??k????",
  "bulaq",
  "bulka",
  "bulud",
  "bulu??",
  "b??lu??",
  "b??rk??",
  "burma",
  "burum",
  "burun",
  "buruq",
  "buruz",
  "b??t??v",
  "b??t??n",
  "buxaq",
  "buxar",
  "buxta",
  "buzlu",
  "buzov",
  "b??z??k",
  "??ad??r",
  "??al????",
  "??alma",
  "canan",
  "??anaq",
  "can??m",
  "canl??",
  "??anta",
  "??apar",
  "??ap??q",
  "car????",
  "casus",
  "??atal",
  "??at????",
  "cavab",
  "cavan",
  "??ax??r",
  "??axma",
  "??ay????",
  "??ay??r",
  "c??bh??",
  "c??h??t",
  "cehiz",
  "????kik",
  "????kil",
  "????kim",
  "????km??",
  "????lik",
  "????m??n",
  "c??nab",
  "c??ngi",
  "????ngi",
  "c??nub",
  "????p??r",
  "????pi??",
  "????r??k",
  "????r??z",
  "c??rg??",
  "c??s??d",
  "??e??id",
  "??e??m??",
  "c??sur",
  "????tin",
  "????tir",
  "??evik",
  "??evr??",
  "cibli",
  "??i????k",
  "ciddi",
  "c??d??r",
  "c????al",
  "c??????r",
  "cihad",
  "c??l??z",
  "??ill??",
  "??illi",
  "cilov",
  "cilv??",
  "cinah",
  "??inar",
  "????raq",
  "????rp??",
  "??is??k",
  "cisim",
  "????x??q",
  "????x????",
  "ciy??r",
  "??iyid",
  "??iyin",
  "c??z??q",
  "c??zma",
  "??oban",
  "????hr??",
  "????k??k",
  "????km??",
  "??olaq",
  "????l????",
  "??olpa",
  "????m????",
  "????p????",
  "??opur",
  "corab",
  "????r??k",
  "??oxlu",
  "????z??m",
  "??ubuq",
  "c??ml??",
  "??uqun",
  "c??r??t",
  "????r??k",
  "c??ss??",
  "??uval",
  "??uxur",
  "c??y??r",
  "daban",
  "dabb??",
  "dadl??",
  "daima",
  "daimi",
  "dair??",
  "dalan",
  "dalaq",
  "dal??a",
  "damaq",
  "damar",
  "damc??",
  "damla",
  "daraq",
  "da??l??",
  "davam",
  "daxil",
  "daxma",
  "dayaq",
  "dayaz",
  "debit",
  "deb??t",
  "d??c??l",
  "dekan",
  "dekor",
  "d??lik",
  "d??lil",
  "delta",
  "d??mir",
  "d??mli",
  "d??ng:",
  "d??niz",
  "d??nli",
  "d??qiq",
  "d??rya",
  "d??rzi",
  "de??ik",
  "d??st??",
  "d????ti",
  "d??v??t",
  "d??y??r",
  "dig??r",
  "dikm??",
  "dil??k",
  "dinm??",
  "di??li",
  "divan",
  "divar",
  "diyar",
  "diyet",
  "dodaq",
  "do??ma",
  "do??ru",
  "do??um",
  "dolab",
  "dolaq",
  "dol??a",
  "dolma",
  "d??n??m",
  "d??n??r",
  "d??ng??",
  "donma",
  "d??n????",
  "donuz",
  "do??ab",
  "d??????k",
  "dov??a",
  "d??vr??",
  "d??vri",
  "d??ym??",
  "doyum",
  "d??y????",
  "d??z??m",
  "d??kan",
  "duman",
  "d??n??n",
  "d??nya",
  "duraq",
  "durma",
  "durna",
  "durum",
  "duvaq",
  "duy??u",
  "d??ym??",
  "d??y??n",
  "d??z??n",
  "??b??di",
  "??caib",
  "??cdad",
  "??c??l??",
  "??dal??",
  "??d??bi",
  "??d??di",
  "??fkar",
  "??fsun",
  "??hali",
  "??hat??",
  "??h??ng",
  "ehkam",
  "ehmal",
  "ehsan",
  "??hs??n",
  "??hval",
  "ekran",
  "??ksik",
  "??la????",
  "??lav??",
  "??lbir",
  "??lc??k",
  "??lvan",
  "??mlak",
  "??msal",
  "??mt????",
  "??mzik",
  "??ncam",
  "??ncir",
  "??ndam",
  "??n??n??",
  "??ng??l",
  "enlik",
  "??nlik",
  "??ntiq",
  "epoxa",
  "??qid??",
  "??qr??b",
  "??razi",
  "??rbab",
  "??r??f??",
  "??rg??n",
  "??riz??",
  "??rzaq",
  "??s??bi",
  "??sg??r",
  "??shab",
  "??skik",
  "eskiz",
  "??sm??k",
  "??sm??r",
  "??snaf",
  "??sn??k",
  "e??????k",
  "etika",
  "??tlas",
  "etnik",
  "??traf",
  "evcik",
  "evcil",
  "evdar",
  "??vv??l",
  "??xlaq",
  "??yani",
  "??yl??c",
  "eyn??k",
  "eyvah",
  "eyvan",
  "??yya??",
  "??zb??r",
  "??z??l??",
  "??z??li",
  "??zgil",
  "??zgin",
  "??zm??k",
  "??zmli",
  "faci??",
  "fa????r",
  "fal????",
  "fasiq",
  "fas??q",
  "fateh",
  "fauna",
  "fayda",
  "f??n??r",
  "f??rdi",
  "f??r??h",
  "ferma",
  "f??sad",
  "f??sil",
  "f??tir",
  "fikir",
  "filan",
  "filiz",
  "f??r??a",
  "firon",
  "fitn??",
  "fitr??",
  "flora",
  "forma",
  "forum",
  "gedi??",
  "g??lin",
  "g??lir",
  "g??li??",
  "g??r??k",
  "geyim",
  "gilas",
  "giri??",
  "girov",
  "gizir",
  "gizli",
  "g??b??k",
  "g??d??k",
  "g??rm??",
  "g??r????",
  "g??vd??",
  "g??br??",
  "g??lab",
  "g??l????",
  "g??ll??",
  "g??ll??",
  "g??man",
  "g??m????",
  "g??n????",
  "g??rc??",
  "g??rz??",
  "g??zg??",
  "ha??an",
  "hafiz",
  "hakim",
  "halal",
  "halay",
  "hall??",
  "halqa",
  "halva",
  "hamam",
  "hamar",
  "haql??",
  "haram",
  "haray",
  "hasar",
  "hasil",
  "hayan",
  "haz??r",
  "h??bib",
  "h??d??f",
  "h??d??r",
  "h??dis",
  "h??ft??",
  "h??kim",
  "h??lak",
  "h??lim",
  "h??lq??",
  "h??m??l",
  "h??m??n",
  "h??min",
  "h??mz??",
  "h??nir",
  "h??rbi",
  "h??rif",
  "h??ris",
  "hesab",
  "h??s??d",
  "h??sir",
  "h??v??s",
  "h??yat",
  "heyb??",
  "hey??t",
  "h??y??t",
  "heyif",
  "heyva",
  "h??zin",
  "hicab",
  "hicaz",
  "hicri",
  "hikk??",
  "hilal",
  "hindu",
  "hisli",
  "hiss??",
  "hissi",
  "hiyl??",
  "h??c??t",
  "hoqqa",
  "h??rg??",
  "h??rm??",
  "h??r??k",
  "hotel",
  "hovuz",
  "h??vz??",
  "h??cum",
  "h??dud",
  "h??n??r",
  "h??zur",
  "iblis",
  "icar??",
  "icaz??",
  "icbar",
  "i????ri",
  "iclas",
  "i??lik",
  "icmal",
  "idar??",
  "iddia",
  "ideal",
  "ideya",
  "idman",
  "idrak",
  "idxal",
  "ifad??",
  "iff??t",
  "iflas",
  "iflic",
  "ifrat",
  "ifraz",
  "ifrit",
  "iftar",
  "ikrah",
  "ikram",
  "ilah??",
  "ilbiz",
  "ilg??k",
  "il????m",
  "ilham",
  "ilkin",
  "illik",
  "imdad",
  "imkan",
  "imsak",
  "incik",
  "incil",
  "incir",
  "inkar",
  "innab",
  "insaf",
  "insan",
  "iplik",
  "iqbal",
  "iqlim",
  "irad??",
  "iradi",
  "ir??li",
  "irfan",
  "ir??ad",
  "i??ar??",
  "isbat",
  "i????al",
  "islam",
  "i??l??k",
  "ism??t",
  "isnad",
  "israf",
  "israr",
  "i??r??t",
  "isrif",
  "iss??z",
  "i??siz",
  "ist??k",
  "ita??t",
  "itkin",
  "ixlas",
  "ixrac",
  "izafi",
  "izsiz",
  "kabab",
  "kabus",
  "kafir",
  "ka????z",
  "kahin",
  "kakao",
  "kalan",
  "kamal",
  "kaman",
  "kamil",
  "karat",
  "karl??",
  "kasad",
  "kas??b",
  "kassa",
  "katib",
  "k??bin",
  "k??bir",
  "ke????l",
  "ke??id",
  "k??d??r",
  "kefal",
  "kefir",
  "kefli",
  "k??kil",
  "k??lam",
  "k??l??k",
  "k??l??m",
  "k??ll??",
  "k??lm??",
  "k??mal",
  "k??man",
  "k??naf",
  "k??nar",
  "k??p??k",
  "k??sad",
  "ke??ik",
  "k??sik",
  "k??sim",
  "k??sir",
  "ke??i??",
  "k??sm??",
  "k??tan",
  "ki??ik",
  "kilid",
  "kilim",
  "kilk??",
  "kils??",
  "kimya",
  "kinli",
  "kir??c",
  "kirli",
  "kirpi",
  "kitab",
  "kloun",
  "kobra",
  "kobud",
  "k????m??",
  "k??hn??",
  "k??lg??",
  "k??m??k",
  "k??m??r",
  "k??n??l",
  "k??p??k",
  "k??p??k",
  "k??rp??",
  "k??rp??",
  "kotan",
  "k??bar",
  "k??????k",
  "k??ft??",
  "k??l????",
  "k??l??k",
  "k??lli",
  "k??ll??",
  "k??nd??",
  "k??r??k",
  "k??r??n",
  "k??rs??",
  "k??tl??",
  "k??t??m",
  "k??y????",
  "k??yl??",
  "la????m",
  "lampa",
  "lava??",
  "layiq",
  "laz??m",
  "l??????k",
  "l??n??t",
  "l??pir",
  "l??q??b",
  "leyli",
  "l??ziz",
  "libas",
  "lider",
  "lifli",
  "limit",
  "limon",
  "lobya",
  "lokal",
  "lotos",
  "lov??a",
  "l??vh??",
  "loyal",
  "l??????t",
  "l??zum",
  "macal",
  "madd??",
  "maddi",
  "mahal",
  "mahir",
  "mahn??",
  "maili",
  "maket",
  "malik",
  "mam??r",
  "manat",
  "manqo",
  "maral",
  "maraq",
  "ma????n",
  "mat??m",
  "mayak",
  "mazut",
  "m??b??d",
  "mebel",
  "m??caz",
  "m??cmu",
  "m??cra",
  "m??cun",
  "m??hl??",
  "m??kan",
  "m??l??k",
  "memar",
  "m??mur",
  "m??nb??",
  "m??nfi",
  "m??n????",
  "m??qam",
  "m??ram",
  "m??rci",
  "m??rmi",
  "mesaj",
  "m??????l",
  "m??sud",
  "m??sum",
  "metal",
  "m??tin",
  "metod",
  "metro",
  "m??xfi",
  "meyar",
  "meyil",
  "m??yus",
  "meyv??",
  "m??zun",
  "milad",
  "milli",
  "minik",
  "minor",
  "minus",
  "miraj",
  "miras",
  "m??r??q",
  "mirz??",
  "misal",
  "mi??ar",
  "misli",
  "mitil",
  "mix??k",
  "mobil",
  "modal",
  "model",
  "modul",
  "m??h??r",
  "molla",
  "m??min",
  "moruq",
  "m??vqe",
  "m??vzu",
  "m??cr??",
  "m??dir",
  "m??ft??",
  "mu??am",
  "m??hit",
  "m??h??m",
  "m??jd??",
  "m??lki",
  "murad",
  "muzey",
  "nabat",
  "nadan",
  "nadir",
  "na??d??",
  "na????l",
  "nahar",
  "nakam",
  "namaz",
  "nar??n",
  "na??ir",
  "natiq",
  "nax????",
  "naxo??",
  "nazik",
  "nazir",
  "nazl??",
  "n??bat",
  "n??cib",
  "n??dim",
  "n??f??r",
  "n??f??s",
  "n????m??",
  "nehr??",
  "nem??t",
  "n??nni",
  "n??sib",
  "n??sil",
  "n??z??r",
  "n??zir",
  "nicat",
  "nifaq",
  "nigah",
  "nihal",
  "nihan",
  "nim????",
  "ninni",
  "ni??an",
  "nisbi",
  "nisy??",
  "niyaz",
  "nizam",
  "no??ul",
  "nohur",
  "n??k??r",
  "n??mr??",
  "n??qt??",
  "norma",
  "n??vb??",
  "noxud",
  "n??ans",
  "n??fus",
  "n??fuz",
  "nurlu",
  "n??sx??",
  "??d??m??",
  "odluq",
  "??d??nc",
  "o??lan",
  "o??laq",
  "okean",
  "??lm??z",
  "??nc??l",
  "??nd??r",
  "??nl??k",
  "onluq",
  "opera",
  "??pm??k",
  "??rd??k",
  "orden",
  "order",
  "??rn??k",
  "??rp??k",
  "orqan",
  "ortam",
  "ortaq",
  "??rt??k",
  "??t??ki",
  "??t??ri",
  "??tk??m",
  "otlaq",
  "otluq",
  "??vlad",
  "ovqat",
  "ovsun",
  "oxlov",
  "oxucu",
  "palaz",
  "pal??d",
  "palto",
  "papaq",
  "parad",
  "par??a",
  "parol",
  "parta",
  "pasl??",
  "pauza",
  "pax??l",
  "paxla",
  "pay??z",
  "p??nah",
  "p??nc??",
  "p??rd??",
  "p??t??k",
  "peyin",
  "piano",
  "pilot",
  "pi??ik",
  "poema",
  "p??hr??",
  "polad",
  "pozan",
  "pusqu",
  "p??st??",
  "p??xt??",
  "qaban",
  "qabaq",
  "qabar",
  "qab??q",
  "qabl??",
  "qa??aq",
  "qa??????",
  "qad??n",
  "qadir",
  "qafil",
  "qaid??",
  "qaim??",
  "qalaq",
  "qalib",
  "qal??n",
  "qal??q",
  "qalo??",
  "qam????",
  "qam????",
  "qanad",
  "qanl??",
  "qanun",
  "qapan",
  "qapaq",
  "qapaz",
  "qar??t",
  "qar??v",
  "qar??a",
  "qar????",
  "qar??n",
  "qar????",
  "qar????",
  "qasid",
  "qas??q",
  "qa????q",
  "qa??qa",
  "qatar",
  "qatil",
  "qat??r",
  "qatq??",
  "qaval",
  "qaxac",
  "qay????",
  "qayda",
  "qay????",
  "qay??q",
  "qays??",
  "qazan",
  "qazl??",
  "q??bir",
  "q??bul",
  "q??d??h",
  "q??d??m",
  "q??d??r",
  "q??dim",
  "q??dir",
  "q??f??s",
  "q??fil",
  "q??h??r",
  "q??hv??",
  "q??l??m",
  "q??lib",
  "q??lp??",
  "q??mli",
  "q??mz??",
  "q??pik",
  "q??r??z",
  "q??rib",
  "qeyri",
  "q??z??b",
  "q??zet",
  "qibt??",
  "q??c??q",
  "q??f??l",
  "q??l??c",
  "q??naq",
  "q??raq",
  "q??r????",
  "q??r??q",
  "q??r????",
  "q??rma",
  "qisas",
  "qisim",
  "q??s??q",
  "q??s??r",
  "qiyam",
  "qiyas",
  "q??y??q",
  "q??yl??",
  "q??yma",
  "q??z??l",
  "qo??aq",
  "qo??al",
  "qohum",
  "q??n????",
  "qon??u",
  "qopuz",
  "qorxu",
  "qo??ma",
  "qo??qu",
  "qo??un",
  "qov??a",
  "qovma",
  "qovun",
  "qoyma",
  "qoyun",
  "qozlu",
  "qubar",
  "qucaq",
  "quduz",
  "qulaq",
  "q??ll??",
  "qumar",
  "quma??",
  "quraq",
  "qur??u",
  "qurma",
  "q??rub",
  "qurum",
  "q??rur",
  "qurut",
  "q??ss??",
  "q??sur",
  "qutab",
  "q??vv??",
  "quzey",
  "radar",
  "radio",
  "rahat",
  "rahib",
  "raket",
  "rayon",
  "r??fiq",
  "r??q??m",
  "r??qib",
  "r????id",
  "r??smi",
  "r??sul",
  "retro",
  "r??van",
  "r??zil",
  "rezin",
  "rifah",
  "robot",
  "roman",
  "r??bai",
  "r??k??t",
  "r??sum",
  "r??tb??",
  "sabah",
  "sabiq",
  "sabun",
  "sa??aq",
  "sadiq",
  "sa????r",
  "sahib",
  "??ahid",
  "sahil",
  "??ahin",
  "sair??",
  "??air??",
  "sakin",
  "sakit",
  "salam",
  "saman",
  "sambo",
  "sanc??",
  "sanki",
  "sanl??",
  "??anl??",
  "sapma",
  "saray",
  "sar????",
  "sar??q",
  "sat????",
  "savab",
  "savad",
  "sava??",
  "saxs??",
  "saxta",
  "??axta",
  "sazan",
  "sazaq",
  "sazl??",
  "seans",
  "s??b??b",
  "s??bir",
  "s??bzi",
  "se??m??",
  "s??feh",
  "????f??q",
  "s??f??r",
  "s??fil",
  "s??fir",
  "segah",
  "s??h??r",
  "????h??r",
  "????hid",
  "??ehli",
  "s??hn??",
  "s??hra",
  "????k??r",
  "????kil",
  "selik",
  "s??lis",
  "????nb??",
  "s??n??d",
  "s??n??t",
  "s??pgi",
  "s??pki",
  "????rab",
  "s??r????",
  "????r??f",
  "s??rgi",
  "????rif",
  "????rik",
  "s??rin",
  "????rti",
  "s??thi",
  "s??tir",
  "sevda",
  "sevgi",
  "????xsi",
  "sfera",
  "sif??t",
  "s??f??r",
  "sift??",
  "s????al",
  "??ikar",
  "silah",
  "silgi",
  "??ill??",
  "??imal",
  "simic",
  "simli",
  "s??naq",
  "sinif",
  "s??n??q",
  "sinir",
  "s??nma",
  "sinus",
  "sip??r",
  "s??r??a",
  "??irin",
  "s??r??q",
  "sirk??",
  "??irni",
  "sit??m",
  "sivil",
  "sivri",
  "s??xac",
  "s??xma",
  "s??y??q",
  "s??zma",
  "so??an",
  "s??k??k",
  "sonra",
  "s??n??k",
  "??orba",
  "sor??u",
  "soyad",
  "soylu",
  "s??y??d",
  "soyuq",
  "s??y????",
  "??rift",
  "subay",
  "????bh??",
  "s??but",
  "s??fr??",
  "suiti",
  "s??kan",
  "????k??r",
  "s??kut",
  "??uluq",
  "????mal",
  "sumaq",
  "sumax",
  "s??m??k",
  "s??qut",
  "sur??t",
  "s??r??t",
  "susma",
  "s??tun",
  "suvaq",
  "s??xur",
  "????y??d",
  "taksi",
  "talan",
  "talib",
  "tamam",
  "tan??q",
  "tan????",
  "tanqo",
  "taraz",
  "tarix",
  "tarla",
  "tatar",
  "tavan",
  "tax??l",
  "taxta",
  "tayfa",
  "tayqa",
  "t??b????",
  "t??bib",
  "t??bii",
  "t??bil",
  "t??bir",
  "t??kan",
  "t??k??r",
  "t??kid",
  "t??kn??",
  "t??la??",
  "t??l??b",
  "t??l??f",
  "t??lif",
  "t??lim",
  "telli",
  "t??mas",
  "t??m??l",
  "t??min",
  "t??mir",
  "t??miz",
  "t??n??k",
  "t??nha",
  "t??p??r",
  "t??pik",
  "t??qib",
  "t??r??f",
  "t??rif",
  "t??riq",
  "t??sir",
  "t??sis",
  "t??tik",
  "t??til",
  "t??yin",
  "t??zad",
  "tikan",
  "tiki??",
  "tikm??",
  "tilov",
  "tiraj",
  "tiran",
  "tirm??",
  "titan",
  "titul",
  "t??xac",
  "t??hf??",
  "topal",
  "top??u",
  "topuq",
  "torba",
  "t??vb??",
  "t??vl??",
  "toxum",
  "toyuq",
  "tozlu",
  "tufan",
  "t??lk??",
  "tumar",
  "tunel",
  "turac",
  "t??rb??",
  "tur??u",
  "t??st??",
  "t??t??k",
  "tutma",
  "tutum",
  "t??t??n",
  "u??maq",
  "ucqar",
  "u??qun",
  "udmaq",
  "??f??qi",
  "ulduz",
  "??l??ma",
  "??lf??t",
  "??lg??c",
  "??mman",
  "ummaq",
  "??mm??t",
  "??mumi",
  "??ns??r",
  "??nvan",
  "??rk??k",
  "??sk??k",
  "??slub",
  "ustad",
  "??st??n",
  "??syan",
  "uy??un",
  "??zg??c",
  "??zg??n",
  "??zl??k",
  "??zm??k",
  "??zrl??",
  "vacib",
  "vahid",
  "varis",
  "va??aq",
  "v??h??i",
  "v??kil",
  "v??l??s",
  "v??r??m",
  "v??r??q",
  "vergi",
  "v??t??n",
  "v??t??r",
  "viran",
  "v??cud",
  "vur??u",
  "v??sal",
  "xadim",
  "xahi??",
  "xalat",
  "xal??a",
  "xalis",
  "xalta",
  "xan??m",
  "xarab",
  "xaric",
  "xatun",
  "x??b??r",
  "x??bis",
  "x??fif",
  "x??l??f",
  "x??l??l",
  "x??l??t",
  "x??mir",
  "x??r??k",
  "x??????m",
  "x????il",
  "x??sis",
  "x??st??",
  "x??tib",
  "x??tir",
  "x??yal",
  "xeyir",
  "xeyli",
  "x??z??l",
  "x??zri",
  "xilas",
  "x??rda",
  "xitab",
  "xitam",
  "xiyar",
  "xiz??k",
  "xoflu",
  "xon??a",
  "x??r??k",
  "xoruz",
  "xoxan",
  "xumar",
  "xurma",
  "x??tb??",
  "yaban",
  "ya??????",
  "ya??l??",
  "ya??ma",
  "yalan",
  "yal??n",
  "yall??",
  "yamac",
  "yaman",
  "yamaq",
  "yanaq",
  "yan????",
  "yan??q",
  "yanma",
  "yaqut",
  "yar????",
  "yasaq",
  "ya????l",
  "ya??l??",
  "yast??",
  "yataq",
  "yavan",
  "yava??",
  "yav??r",
  "yax??n",
  "yax????",
  "yayla",
  "yaz??q",
  "yeddi",
  "yed??k",
  "y??h??r",
  "yekun",
  "yel??k",
  "yem??k",
  "yemi??",
  "yemli",
  "yeng??",
  "yengi",
  "y??qin",
  "y??????m",
  "y????ma",
  "yo??un",
  "yol??u",
  "yonca",
  "y??nl??",
  "yoxsa",
  "yoxu??",
  "y??kl??",
  "yulaf",
  "yumaq",
  "yumor",
  "yumru",
  "yumuq",
  "yunan",
  "y??y??n",
  "zabit",
  "zahid",
  "zahir",
  "zakir",
  "zal??m",
  "zaman",
  "zamin",
  "zaval",
  "zavod",
  "z??f??r",
  "z??h??r",
  "zehin",
  "z??kat",
  "z??lil",
  "z??min",
  "z??n??n",
  "z??rb??",
  "z??rif",
  "z??rli",
  "z??rr??",
  "zin??t",
  "zireh",
  "zir??k",
  "zirv??",
  "ziyan",
  "zo??al",
  "z??hr??",
  "zolaq",
  "zorba",
  "z??vc??",
  "z??hur",
  "z??lal",
  "z??lum",
  "zurna"
];
  /** @type {!Array} */
  var updatedSet = ["abal??",
  "abas??",
  "abba??",
  "abbat",
  "abdal",
  "abdan",
  "abdar",
  "abduq",
  "abgah",
  "abg??n",
  "ab??ca",
  "abke??",
  "abnos",
  "abnus",
  "abort",
  "abpa??",
  "abrek",
  "abris",
  "abriz",
  "abses",
  "absis",
  "abxaz",
  "abxor",
  "abzas",
  "acg??z",
  "ac??ca",
  "a????c??",
  "ac??l??",
  "ac??ma",
  "acmaq",
  "adal??",
  "adept",
  "ad??ta",
  "ad??ti",
  "adic??",
  "ad??na",
  "adin??",
  "adl??q",
  "adres",
  "adyal",
  "aerob",
  "aeron",
  "afiqi",
  "afsar",
  "aftab",
  "agahi",
  "a??ayi",
  "a??ba??",
  "a??b????",
  "a????a??",
  "a????il",
  "a??da??",
  "a??di??",
  "a??d????",
  "agent",
  "a??g??z",
  "a??g??n",
  "a????????",
  "a????l??",
  "a??lar",
  "a??lay",
  "a??l??q",
  "a??naq",
  "a??qa??",
  "a??sa??",
  "a??????n",
  "a??sol",
  "a??t??k",
  "a??ulu",
  "a??yal",
  "a??yan",
  "A??yol",
  "akant",
  "aksiz",
  "aktin",
  "aktiv",
  "akul??",
  "alaca",
  "ala??a",
  "ala????",
  "alafa",
  "alah??",
  "alal??",
  "alama",
  "alana",
  "ala??a",
  "alay??",
  "alban",
  "albom",
  "aldil",
  "al??mi",
  "aleut",
  "alibi",
  "al??????",
  "aliy??",
  "alkan",
  "allaf",
  "Allah",
  "all??r",
  "alman",
  "altda",
  "alud??",
  "alver",
  "amad??",
  "aman??",
  "amb??l",
  "amb??r",
  "amorf",
  "amper",
  "ampir",
  "amurf",
  "amy??b",
  "anal??",
  "ana??a",
  "and????",
  "and??r",
  "and??z",
  "andl??",
  "anfas",
  "angah",
  "angil",
  "anion",
  "anker",
  "anket",
  "anlaq",
  "anl??q",
  "anmaq",
  "anons",
  "anqar",
  "anqob",
  "anqor",
  "anqut",
  "ans??z",
  "antun",
  "aorta",
  "aport",
  "aqava",
  "aqraf",
  "ara????",
  "arada",
  "aral??",
  "arama",
  "arami",
  "ar??an",
  "areal",
  "arebl",
  "arena",
  "ar??ac",
  "ar??al",
  "ar??az",
  "ar????n",
  "ar??????",
  "ar??ma",
  "ariya",
  "arqon",
  "arqus",
  "arsen",
  "arsin",
  "ar????n",
  "ars??z",
  "artan",
  "artel",
  "artma",
  "arxac",
  "arxar",
  "arxl??",
  "a??a??a",
  "as??c??",
  "as??l??",
  "a????l??",
  "a??ina",
  "asiya",
  "a??kar",
  "asket",
  "a??l??q",
  "a??maq",
  "asori",
  "a??qal",
  "a??qar",
  "asral",
  "astma",
  "astra",
  "a??ura",
  "atal??",
  "atbaz",
  "atc??l",
  "atlaz",
  "atlet",
  "ats??z",
  "avand",
  "avan??",
  "avar??",
  "avaz??",
  "avdu??",
  "avgit",
  "aviz??",
  "avizo",
  "avlaq",
  "avral",
  "avruq",
  "av??ar",
  "avtol",
  "avtul",
  "ax??c??",
  "ax??r??",
  "axmaz",
  "axsar",
  "axund",
  "ayama",
  "ayin??",
  "ay??rd",
  "aylam",
  "aylan",
  "ayq??r",
  "ayr??m",
  "ays??z",
  "aysor",
  "azad??",
  "az??ri",
  "az??rm",
  "azman",
  "azm????",
  "babal",
  "babat",
  "babay",
  "bab??t",
  "babin",
  "babka",
  "bacaq",
  "badan",
  "badaq",
  "badar",
  "bada??",
  "bad????",
  "badya",
  "bafta",
  "ba??am",
  "ba??at",
  "ba??????",
  "baget",
  "ba????r",
  "bakal",
  "bakan",
  "baken",
  "balaq",
  "balba",
  "bal????",
  "bal????",
  "balka",
  "balon",
  "balun",
  "banda",
  "banka",
  "bank??",
  "baqaj",
  "baran",
  "barat",
  "barit",
  "barka",
  "barl??",
  "baron",
  "barun",
  "barza",
  "basar",
  "ba??????",
  "ba??da",
  "basil",
  "bas??m",
  "bas??q",
  "basir",
  "ba??l??",
  "batat",
  "batin",
  "bat????",
  "batma",
  "bavar",
  "bav??r",
  "baxan",
  "baxar",
  "bax????",
  "baxta",
  "baxya",
  "bayda",
  "bay??l",
  "bay??r",
  "bayka",
  "bayqu",
  "bazal",
  "bazis",
  "be??????",
  "becid",
  "b??dgu",
  "b??di??",
  "b??dir",
  "b??d??v",
  "b??d??y",
  "b??dxu",
  "b??dy??",
  "b??hai",
  "b??h??r",
  "behli",
  "b??hri",
  "bekas",
  "b??k??i",
  "bekon",
  "b??l??d",
  "b??l??n",
  "b??lg??",
  "belil",
  "b??lim",
  "b??lli",
  "bemit",
  "bemol",
  "bemul",
  "b??n??k",
  "b??ngi",
  "b??niz",
  "b??nna",
  "b??nn??",
  "b??rat",
  "beril",
  "berma",
  "b??rni",
  "be??c??",
  "bet??r",
  "beton",
  "betun",
  "b??xil",
  "b??xur",
  "b??y??m",
  "bey??t",
  "beyza",
  "beyz??",
  "b??zir",
  "bezm??",
  "bibak",
  "bibar",
  "bicad",
  "bican",
  "bic??k",
  "b??????q",
  "bi??iz",
  "bi??ki",
  "bi??m??",
  "b????q??",
  "bidad",
  "bideh",
  "bid??t",
  "bidil",
  "bidin",
  "bidon",
  "bielm",
  "bi??ql",
  "bieyb",
  "bif??r",
  "bigah",
  "bigar",
  "biizn",
  "bikam",
  "bikar",
  "bikef",
  "bik??s",
  "bil??n",
  "bilg??",
  "bilgi",
  "bili??",
  "bill??",
  "bilm??",
  "bimar",
  "binam",
  "binar",
  "binom",
  "binur",
  "biqal",
  "biq??m",
  "b??qma",
  "birc??",
  "bir??r",
  "birka",
  "birli",
  "biruc",
  "biruh",
  "birun",
  "bis??r",
  "bi??m??",
  "bitab",
  "bitik",
  "bitli",
  "bitm??",
  "bitum",
  "bi??zr",
  "bixab",
  "biyan",
  "biyar",
  "bizar",
  "bizc??",
  "bizim",
  "bizon",
  "bizun",
  "blank",
  "blint",
  "bluza",
  "bo??ka",
  "bo??ma",
  "bo??uq",
  "b??l??n",
  "bolid",
  "bollu",
  "b??l????",
  "bomab",
  "bomba",
  "bonus",
  "borlu",
  "boyaq",
  "boyar",
  "boyca",
  "b??y??k",
  "b??yl??",
  "boylu",
  "b??y??r",
  "bozaq",
  "bozay",
  "bozca",
  "bozux",
  "brass",
  "bronx",
  "bubon",
  "budal",
  "b??d??t",
  "budka",
  "bufet",
  "bug??n",
  "bu??ur",
  "bukle",
  "bukli",
  "bulat",
  "bulla",
  "bulma",
  "b??l??v",
  "bunca",
  "b??ny??",
  "buraz",
  "burda",
  "b??ret",
  "bur??u",
  "b??rm??",
  "burov",
  "b??rq??",
  "bursa",
  "b??ruz",
  "b??sat",
  "butan",
  "b??t????",
  "bux??a",
  "buxov",
  "buxur",
  "b??xur",
  "buz??u",
  "buz??k",
  "b??zm??",
  "caciq",
  "cadar",
  "cadd??",
  "??adra",
  "ca??la",
  "ca??l??",
  "cahan",
  "cahil",
  "cah??l",
  "calal",
  "calaq",
  "cal??a",
  "??al??n",
  "??alov",
  "camal",
  "??am??r",
  "cam????",
  "caml??",
  "??apaq",
  "??ap????",
  "??ap????",
  "??apma",
  "??aq??l",
  "??ar??q",
  "??ar????",
  "??arsu",
  "??arx??",
  "??a????r",
  "??a??ma",
  "??ataq",
  "??at??q",
  "??atl??",
  "??atma",
  "cavar",
  "cavid",
  "??ax????",
  "??ayan",
  "caz????",
  "c??b??l",
  "c??bri",
  "??e??en",
  "cecim",
  "c??d??l",
  "c??did",
  "c??ft??",
  "c??hr??",
  "????kic",
  "c??l??b",
  "????lim",
  "c??mad",
  "c??m??n",
  "????ng??",
  "????nli",
  "????p??l",
  "????pik",
  "????r??i",
  "????r??n",
  "c??sim",
  "??e??ni",
  "????t??n",
  "c??vc??",
  "ceviz",
  "c??viz",
  "??exc??",
  "??exol",
  "c??y??n",
  "c??zb??",
  "??iban",
  "??ibin",
  "cidal",
  "cidar",
  "cidov",
  "cihaz",
  "cikk??",
  "cilet",
  "c??l????",
  "??ilik",
  "cilli",
  "??ilov",
  "c??lxa",
  "??imir",
  "??imli",
  "??imm??",
  "cinaq",
  "c??naq",
  "cinas",
  "??inc??",
  "c??nda",
  "cinli",
  "??inli",
  "cinsi",
  "c??qqa",
  "c??r??m",
  "c??r??q",
  "??iri??",
  "c??rma",
  "cismi",
  "??it??k",
  "civar",
  "??ivz??",
  "????xan",
  "????xar",
  "????xma",
  "??iyan",
  "ciy??n",
  "ciyil",
  "c??zan",
  "cizgi",
  "c??zl??",
  "cizy??",
  "??ocuq",
  "??odar",
  "????k??2",
  "????k??k",
  "????ll??",
  "????lm??",
  "??omaq",
  "c??ng??",
  "????nm??",
  "????p??k",
  "co??ma",
  "??o??qa",
  "????tk??",
  "??otur",
  "??ovu??",
  "c??v??z",
  "c??vz??",
  "??oxca",
  "c??bb??",
  "??u??ul",
  "cuhud",
  "culfa",
  "c??lg??",
  "??ullu",
  "culus",
  "c??lus",
  "cumma",
  "??umur",
  "????nki",
  "c??nun",
  "??u??ka",
  "c??t????",
  "cuvar",
  "??uva??",
  "cuyuq",
  "c??zam",
  "c??zvi",
  "dabaq",
  "dada??",
  "dadma",
  "dafi??",
  "da??al",
  "da??ar",
  "da??l??",
  "dahan",
  "dalab",
  "dalay",
  "dalda",
  "dall??",
  "dalma",
  "damad",
  "damba",
  "dam????",
  "dam??n",
  "dam??a",
  "damka",
  "damma",
  "dani??",
  "danma",
  "danqa",
  "danq??",
  "daqqa",
  "daram",
  "darca",
  "dar????",
  "dar??a",
  "dart??",
  "da??????",
  "da????q",
  "dasit",
  "da??ka",
  "da??ma",
  "davar",
  "davat",
  "davla",
  "davul",
  "davu??",
  "daxal",
  "dax??l",
  "day??a",
  "dayka",
  "dayna",
  "d??bb??",
  "debet",
  "debil",
  "d??bir",
  "d??bli",
  "d??f??i",
  "defis",
  "d??fn??",
  "d??????l",
  "d??han",
  "d??h??n",
  "d??hha",
  "d??hn??",
  "d??hr??",
  "d??hri",
  "deist",
  "deizm",
  "d??kk??",
  "dekur",
  "d??l??n",
  "d??lm??",
  "d??m??i",
  "dem??k",
  "d??m??k",
  "d??m??t",
  "d??min",
  "d??my??",
  "d??nab",
  "d??nd??",
  "d??ray",
  "d??rb??",
  "d??r??k",
  "d??rin",
  "d??rm??",
  "d??rn??",
  "d??run",
  "de??m??",
  "d????n??",
  "d??sti",
  "detal",
  "d??vam",
  "d??vat",
  "devik",
  "deviz",
  "d??xil",
  "d??xli",
  "dey??k",
  "dey??n",
  "deyil",
  "deyin",
  "deyi??",
  "d??ym??",
  "dib??k",
  "dibir",
  "d??b??r",
  "dibli",
  "didar",
  "didik",
  "didm??",
  "d??????r",
  "dikc??",
  "dikli",
  "dikt??",
  "dil????",
  "dil??i",
  "dilcu",
  "dilik",
  "dilim",
  "dilir",
  "dilli",
  "dilov",
  "dima??",
  "d??m??q",
  "dinab",
  "dinar",
  "din??i",
  "ding??",
  "dingi",
  "dini??",
  "dinli",
  "dinqo",
  "dipol",
  "d??qqa",
  "d??qq??",
  "d??raz",
  "dir??k",
  "di??di",
  "di????k",
  "di??l??",
  "di??r??",
  "diyez",
  "diyin",
  "dizel",
  "d??z??x",
  "do??an",
  "do??ar",
  "do??u??",
  "d??h??l",
  "dolam",
  "dolan",
  "dola??",
  "dolay",
  "d??l????",
  "d??lm??",
  "dolu??",
  "domba",
  "domca",
  "domna",
  "domra",
  "d??n??k",
  "d??n??n",
  "donlu",
  "d??nm??",
  "donor",
  "donos",
  "donqa",
  "d??n??k",
  "d??n??m",
  "donuq",
  "donu??",
  "doqma",
  "dorik",
  "dosey",
  "d????l??",
  "dostu",
  "dosye",
  "dovla",
  "d??yc??",
  "d??y??c",
  "doyma",
  "d??y??m",
  "d??y??n",
  "d??zm??",
  "d??z????",
  "draje",
  "drama",
  "draqa",
  "dreyf",
  "dua????",
  "duagu",
  "dual??",
  "d??bb??",
  "d????ar",
  "d??d??k",
  "d??d??k",
  "d??gah",
  "d??j??n",
  "d??k????",
  "d??l??r",
  "d??l??k",
  "dulus",
  "d??ma??",
  "d??mb??",
  "d??m??k",
  "dunit",
  "d??nk??",
  "duqma",
  "d??ral",
  "d??r??k",
  "d??rg??",
  "dur??u",
  "d??rl??",
  "duru??",
  "d??sen",
  "d??s??r",
  "d????m??",
  "d??????k",
  "d??????m",
  "d??tar",
  "d??v??l",
  "duxan",
  "d??xi??",
  "d??yd??",
  "duyma",
  "d??y??m",
  "duyuq",
  "duyu??",
  "duzaq",
  "d??zc??",
  "duz??u",
  "d??z??k",
  "duz??x",
  "d??zg??",
  "duzlu",
  "d??zm??",
  "d??z??m",
  "d??z????",
  "??bal??",
  "??bc??d",
  "??b????i",
  "??b??da",
  "??bl??h",
  "??bl??q",
  "??br????",
  "??by??z",
  "??c??ba",
  "??c??mi",
  "??c??ri",
  "??claf",
  "??cuz??",
  "edad??",
  "??d??s??",
  "??d??va",
  "edici",
  "edikt",
  "??dyal",
  "??dyan",
  "??f??an",
  "??flak",
  "??fqan",
  "??frad",
  "??f??an",
  "??fs??r",
  "??fsus",
  "??fyun",
  "??fz??l",
  "??fzun",
  "????l??b",
  "????yar",
  "??hkam",
  "??hm??q",
  "??hm??r",
  "ehram",
  "??hram",
  "ehsas",
  "??jd??r",
  "??kili",
  "??kkas",
  "ekker",
  "??klil",
  "??km??k",
  "??knaf",
  "??kr??m",
  "??ks??r",
  "ekzot",
  "??laq??",
  "??lb??t",
  "??l??im",
  "??l??in",
  "elda??",
  "??ld??n",
  "el??c??",
  "el??m??",
  "??l??m??",
  "el??si",
  "??leyh",
  "??lhal",
  "??lhan",
  "??lhay",
  "??lh??d",
  "??lh??q",
  "elita",
  "??llaf",
  "ellik",
  "??llik",
  "elmli",
  "elsiz",
  "??lsiz",
  "??lz??m",
  "??mbiz",
  "??mc??k",
  "??m??l??",
  "??m??li",
  "??mg??k",
  "??mici",
  "??miri",
  "??mlik",
  "??mm??k",
  "??mraz",
  "??mudi",
  "??mval",
  "??nb??r",
  "??nbir",
  "??nduh",
  "??ng??c",
  "??ngin",
  "??nhar",
  "enin??",
  "enm??k",
  "??nqaz",
  "ensiz",
  "??nt??r",
  "??nvar",
  "??nv??r",
  "??nzar",
  "enzim",
  "eolit",
  "epika",
  "??pp??k",
  "epunj",
  "??qd??m",
  "??qd??s",
  "??q??ll",
  "??ql??n",
  "??qsam",
  "??qvam",
  "??rcik",
  "??rd??m",
  "??r??bi",
  "??rgin",
  "??rim??",
  "??rkan",
  "erk??c",
  "erk??k",
  "erk??n",
  "erker",
  "??rlik",
  "erm??k",
  "??rsin",
  "??rsiz",
  "??rvah",
  "??rv??z",
  "??rz??n",
  "??sal??",
  "??sasi",
  "??sbab",
  "??????dd",
  "e??ici",
  "????kal",
  "??ske??",
  "??sl??n",
  "e??m??k",
  "e??ql??",
  "e??qli",
  "????raf",
  "??srar",
  "????r??f",
  "??srik",
  "e??siz",
  "????siz",
  "estet",
  "eston",
  "????xas",
  "??tba??",
  "??t??n??",
  "??tfal",
  "etila",
  "etina",
  "??tlik",
  "etm??k",
  "??tm??k",
  "??trak",
  "??tsiz",
  "??ttar",
  "??tvar",
  "evenk",
  "evlad",
  "evlik",
  "evsaf",
  "evsiz",
  "??xbar",
  "??x??vi",
  "??xt??r",
  "eybcu",
  "??yd??m",
  "eyham",
  "eyic??",
  "??ylik",
  "eym????",
  "??ym??k",
  "eym??n",
  "eyn??n",
  "??yrim",
  "eyvay",
  "??yyam",
  "??yyar",
  "eyz??n",
  "??zb??s",
  "??zdad",
  "??z??mi",
  "??zici",
  "??zvay",
  "??zz??l",
  "fahi??",
  "falda",
  "famil",
  "fanat",
  "faner",
  "fanus",
  "fanza",
  "faqot",
  "faqq??",
  "faqut",
  "farad",
  "fara??",
  "farsi",
  "fasad",
  "faset",
  "fasid",
  "faska",
  "fason",
  "fasun",
  "faxir",
  "fazil",
  "fazis",
  "f??dai",
  "f????an",
  "f??hl??",
  "f??l??k",
  "fel??n",
  "f??nni",
  "fenol",
  "f??q??t",
  "f??qir",
  "f??raq",
  "f??rar",
  "f??rda",
  "f??r??c",
  "f??rik",
  "f??rli",
  "f??rzi",
  "f??sih",
  "f??th??",
  "feti??",
  "f??xri",
  "f??zl??",
  "fibra",
  "fidan",
  "fider",
  "fidy??",
  "fikri",
  "fikus",
  "filtr",
  "fimoz",
  "final",
  "finc??",
  "fini??",
  "finka",
  "finna",
  "fiord",
  "fiqur",
  "f??r??n",
  "f??r??q",
  "f??r??t",
  "f??rl??",
  "firma",
  "firni",
  "firq??",
  "firun",
  "fitil",
  "fitin",
  "fitri",
  "fitva",
  "fizik",
  "flans",
  "flint",
  "floem",
  "fl??or",
  "flura",
  "fokal",
  "fokus",
  "folqa",
  "fonem",
  "fonik",
  "fonon",
  "forte",
  "foton",
  "f??vri",
  "frank",
  "frant",
  "fraza",
  "fren??",
  "freon",
  "fukus",
  "f??nun",
  "fuqas",
  "furma",
  "furum",
  "f??ru??",
  "f??sun",
  "f??yuz",
  "f??zul",
  "f??zun",
  "gahl??",
  "gap????",
  "gavar",
  "gav??r",
  "gavur",
  "g??d??k",
  "ged??r",
  "gedik",
  "g??dik",
  "g??l??n",
  "g??lim",
  "g??lm??",
  "g??mik",
  "genc??",
  "gend??",
  "geni??",
  "g??r??i",
  "g??rd??",
  "g??rdi",
  "g??rm??",
  "gerze",
  "getm??",
  "getto",
  "g??v??n",
  "g??v????",
  "g??v??t",
  "g??yan",
  "geyik",
  "geyi??",
  "geym??",
  "geysu",
  "g??z??l",
  "g??z??n",
  "g??zi??",
  "g??zm??",
  "gicik",
  "gi??ka",
  "gigit",
  "gilan",
  "gilc??",
  "giley",
  "giliz",
  "gill??",
  "gilli",
  "gimg??",
  "gip??r",
  "giran",
  "gird??",
  "gireh",
  "gir??m",
  "girgi",
  "girim",
  "giriz",
  "girli",
  "girm??",
  "girv??",
  "girvi",
  "giry??",
  "giyah",
  "giyid",
  "giyov",
  "g??d??n",
  "godul",
  "godu??",
  "g??lm??",
  "g??mm??",
  "gomu??",
  "g??n????",
  "gop??u",
  "gorda",
  "g??r??k",
  "g??r??n",
  "g??r??m",
  "g??yc??",
  "g??y??m",
  "g??yl??",
  "g??yot",
  "g??y??n",
  "g??z??k",
  "g??z??l",
  "g??z??m",
  "g??zl??",
  "g??cl??",
  "g??cl??",
  "g??daz",
  "g??dm??",
  "g??d??k",
  "g??h??r",
  "g??l????",
  "g??l??r",
  "g??lg??",
  "g??lm??",
  "g??l??l",
  "g??l????",
  "g??nah",
  "g??nd??",
  "g??ney",
  "g??nl??",
  "g??ny??",
  "g??ruh",
  "g??v??c",
  "guyum",
  "g??y??m",
  "g??zar",
  "g??z??m",
  "g??z??r",
  "ha??aq",
  "hac??t",
  "hal??t",
  "haman",
  "hama??",
  "hamil",
  "hampa",
  "handa",
  "hank??",
  "hans??",
  "haqda",
  "har??n",
  "hat??m",
  "hay????",
  "hayd??",
  "h??bb??",
  "h??b????",
  "h??cmi",
  "h??dik",
  "h??f??i",
  "h??k??m",
  "h??man",
  "h??ml??",
  "h??n??k",
  "h??nuz",
  "h??pir",
  "h??qir",
  "h??rb??",
  "h??r??i",
  "h??r??m",
  "h??rfi",
  "herik",
  "h??rki",
  "h??rz??",
  "h??????m",
  "h????ir",
  "h????i??",
  "h??tta",
  "heyli",
  "h??z??r",
  "hidra",
  "hilli",
  "hindi",
  "hodaq",
  "hopla",
  "hopma",
  "hoppa",
  "horra",
  "h??vk??",
  "hovlu",
  "hovur",
  "hoydu",
  "h??y????",
  "h??bab",
  "h??cr??",
  "h??may",
  "humid",
  "humus",
  "h??quq",
  "h??rk??",
  "h??rm??",
  "h??ruf",
  "h??r????",
  "hu??lu",
  "ian??t",
  "ibar??",
  "ib??in",
  "ibraz",
  "ibr??t",
  "ibriq",
  "i??d??n",
  "i????i??",
  "i??ici",
  "i??in??",
  "i??m??k",
  "icr??t",
  "i??siz",
  "idbar",
  "idd??t",
  "idebl",
  "idiom",
  "idiot",
  "idium",
  "idiut",
  "ifa????",
  "if??in",
  "ifraq",
  "i??fal",
  "ihat??",
  "ikic??",
  "ikili",
  "ikisi",
  "ikmal",
  "ikona",
  "iksir",
  "ikuna",
  "ilahi",
  "ilav??",
  "ild??z",
  "il??ri",
  "il??ar",
  "ilhaq",
  "ilkc??",
  "illah",
  "ill??t",
  "ilm??k",
  "ilqar",
  "imal??",
  "im??ci",
  "immun",
  "imrik",
  "imsik",
  "ind??n",
  "inert",
  "inqu??",
  "in??ad",
  "intim",
  "invar",
  "ionlu",
  "ip??in",
  "iprit",
  "ipsiz",
  "iqdam",
  "iqrar",
  "iqrek",
  "irbis",
  "ir??al",
  "ir??m??",
  "ir????t",
  "iric??",
  "irmaq",
  "irm??k",
  "irq??i",
  "irsal",
  "irs??n",
  "i??baz",
  "i??cil",
  "i??d??k",
  "i????m??",
  "is??vi",
  "isfar",
  "i??gil",
  "ishal",
  "islah",
  "islaq",
  "isl??q",
  "i??m??k",
  "ispan",
  "i??tah",
  "ist??r",
  "istil",
  "i??t??k",
  "i??t??x",
  "itbaz",
  "ithaf",
  "itic??",
  "itiuc",
  "itlik",
  "itmam",
  "itm??k",
  "itmil",
  "itmi??",
  "itotu",
  "iycil",
  "iyham",
  "iyim??",
  "iysiz",
  "izaf??",
  "izhar",
  "izlik",
  "izol??",
  "izz??t",
  "jaket",
  "jal??z",
  "jeton",
  "jetun",
  "jilet",
  "jokey",
  "julik",
  "kabel",
  "kadet",
  "kafel",
  "kaf??r",
  "kafur",
  "ka??an",
  "kahal",
  "kahil",
  "kah??l",
  "kakbo",
  "kakil",
  "kalah",
  "kalax",
  "kalba",
  "kal??m",
  "kal????",
  "kalka",
  "kalta",
  "kanal",
  "kanat",
  "kanna",
  "kanoe",
  "kanon",
  "kanue",
  "kapot",
  "kaput",
  "kaqor",
  "kaqur",
  "karel",
  "karet",
  "karst",
  "kaset",
  "ka????y",
  "kaska",
  "ka??ne",
  "kasni",
  "kasta",
  "katar",
  "kater",
  "katet",
  "katod",
  "katta",
  "kayra",
  "kayut",
  "kazak",
  "kazus",
  "k??biz",
  "ke????n",
  "ke????r",
  "ke??m??",
  "kec??y",
  "kef??i",
  "k??f??n",
  "k??f??r",
  "k??fli",
  "k??h??r",
  "k??hr??",
  "k??kov",
  "k??kr??",
  "k??l????",
  "k??l??f",
  "k??l??z",
  "k??lik",
  "k??lt??",
  "k??m????",
  "k??m??r",
  "k??min",
  "k??ndi",
  "k??n??k",
  "k??niz",
  "k??pir",
  "kepka",
  "k??r????",
  "k??rd??",
  "k??rdi",
  "k??r??m",
  "k??r??n",
  "k??rim",
  "k??rk??",
  "k??rki",
  "k??rm??",
  "k??rr??",
  "k??rti",
  "k??s??b",
  "k??s??k",
  "k??s??n",
  "k??s??r",
  "k????fi",
  "k??sif",
  "ke??k??",
  "k??ski",
  "k??sr??",
  "k??sri",
  "k??til",
  "k??v??r",
  "k??yan",
  "keyik",
  "keysu",
  "kibr??",
  "kifir",
  "kifli",
  "kifoz",
  "kims??",
  "kinl??",
  "kinto",
  "kiosk",
  "kipc??",
  "kiri??",
  "kirka",
  "kir????",
  "kirv??",
  "kirza",
  "kisel",
  "kisif",
  "kista",
  "kitel",
  "kitr??",
  "kiusk",
  "klerk",
  "kli??e",
  "knyaz",
  "k??b??r",
  "kobur",
  "kobza",
  "k??????l",
  "kodak",
  "kodal",
  "kofta",
  "ko??ar",
  "ko??u??",
  "k??h??l",
  "k??kl??",
  "k??k??r",
  "kokus",
  "kolaz",
  "kolba",
  "kolit",
  "kollu",
  "k??mb??",
  "k??m??c",
  "komik",
  "komod",
  "konka",
  "konki",
  "konus",
  "kopal",
  "k??p????",
  "k??pm??",
  "k??pp??",
  "k??p????",
  "k??r??k",
  "koru??",
  "ko????k",
  "k??????k",
  "k??????n",
  "k??s??v",
  "k??t??k",
  "k??t??y",
  "k??t??k",
  "kotul",
  "k??t??r",
  "k??v??r",
  "kovlu",
  "kovxa",
  "k??yl??",
  "koyne",
  "k??z??l",
  "krant",
  "kredo",
  "kreml",
  "kreol",
  "kross",
  "kubik",
  "kubok",
  "kubza",
  "k??d??l",
  "k??fl??",
  "kuful",
  "kukla",
  "kukut",
  "k??lah",
  "kulak",
  "k??lb??",
  "k??l????",
  "k??lf??",
  "kulis",
  "k??lm??",
  "kulon",
  "k??lt??",
  "kuluf",
  "k??luf",
  "k??l??f",
  "kulun",
  "k??m????",
  "kumik",
  "kum??k",
  "kum??s",
  "kumol",
  "k??nal",
  "k??n??k",
  "k??ny??",
  "k??p????",
  "kup??i",
  "k??p????",
  "kupon",
  "k??rdi",
  "k??rd??",
  "k??r??z",
  "k??rr??",
  "k??r????",
  "k??s??n",
  "k??sk??",
  "k??sm??",
  "k????t??",
  "k??t??b",
  "k??vet",
  "k??y??l",
  "k??zl??",
  "kuzov",
  "kvant",
  "kvars",
  "kvota",
  "labaz",
  "labil",
  "lab??d",
  "la????n",
  "ladan",
  "lafet",
  "lafit",
  "la??an",
  "la??????",
  "lager",
  "lah??c",
  "lahut",
  "lakca",
  "lak????",
  "lakey",
  "lakin",
  "lakl??",
  "lal??q",
  "lapan",
  "lapca",
  "laqun",
  "larqo",
  "lart??",
  "lat??n",
  "lat????",
  "latun",
  "laxan",
  "laxta",
  "layba",
  "layka",
  "layla",
  "layl??",
  "lazca",
  "lazer",
  "l??????r",
  "l??hc??",
  "lehim",
  "lehm??",
  "l??hz??",
  "lekal",
  "l??k??r",
  "l??kt??",
  "l??l??k",
  "l??l????",
  "l??lik",
  "lemma",
  "l??mp??",
  "lemur",
  "l??pik",
  "leqal",
  "l??rg??",
  "l??rz??",
  "letal",
  "l??tif",
  "l??y??n",
  "leyka",
  "l??zgi",
  "liana",
  "licim",
  "lif??i",
  "lik??r",
  "lilli",
  "liman",
  "limfa",
  "linza",
  "liqaf",
  "l??qqa",
  "lirik",
  "lisan",
  "lisey",
  "liter",
  "liver",
  "lobbi",
  "lodka",
  "lo??az",
  "lo??ma",
  "l??k??d",
  "l??k??t",
  "lomba",
  "lopuq",
  "lotok",
  "lovlu",
  "loxma",
  "l??y??n",
  "l????ab",
  "l??l??k",
  "l??m??k",
  "l??pin",
  "l??str",
  "l??tc??",
  "mab??d",
  "macar",
  "madam",
  "madar",
  "mad??r",
  "ma??da",
  "mafar",
  "ma??ar",
  "magik",
  "ma??ul",
  "mah????",
  "mahna",
  "mahru",
  "mahud",
  "mahur",
  "major",
  "majur",
  "makao",
  "makbo",
  "malax",
  "malay",
  "mall??",
  "mane??",
  "manej",
  "manna",
  "manqa",
  "mansi",
  "manto",
  "mantu",
  "manul",
  "mao??u",
  "maqas",
  "maqma",
  "mar??q",
  "mar??t",
  "marka",
  "mart??",
  "masaj",
  "masal",
  "maska",
  "mason",
  "matah",
  "matan",
  "matsa",
  "mavr??",
  "may??f",
  "mayis",
  "mayka",
  "mayor",
  "mayur",
  "mayya",
  "mazaq",
  "mazat",
  "mazer",
  "mazl??",
  "m??bud",
  "m??cus",
  "medal",
  "m??dar",
  "m??d??d",
  "m??d??n",
  "media",
  "medye",
  "m??g??r",
  "m??g????",
  "m??hal",
  "m??h??k",
  "m??h??l",
  "mehli",
  "m??kik",
  "m??kus",
  "m??lal",
  "m??l??r",
  "m??l??s",
  "m??l??z",
  "m??lih",
  "m??lik",
  "melos",
  "m??lul",
  "m??lum",
  "m??lun",
  "m??mat",
  "m??m????",
  "m??mnu",
  "m??mul",
  "m??nc??",
  "m??n??n",
  "m??nim",
  "menno",
  "menyu",
  "meqom",
  "m??qt??",
  "m??qul",
  "merac",
  "m??r??k",
  "m??r??z",
  "m??riz",
  "m??ruf",
  "m??ruz",
  "m??rz??",
  "m??s??l",
  "me??in",
  "me??ok",
  "messa",
  "messo",
  "m??sul",
  "m????um",
  "m????uq",
  "metan",
  "m??tbu",
  "m??t??l",
  "metil",
  "metis",
  "m??tl??",
  "m??tli",
  "m??tni",
  "metol",
  "meton",
  "metru",
  "metul",
  "meviz",
  "mevr??",
  "m??x??z",
  "meyit",
  "meyn??",
  "meyoz",
  "m??zac",
  "m??zad",
  "m??zaq",
  "m??zar",
  "mezon",
  "m??zur",
  "m??c??r",
  "m??????r",
  "mifik",
  "mikoz",
  "mikst",
  "mil????",
  "mil??l",
  "milis",
  "mimik",
  "minc??",
  "min??k",
  "mini??",
  "minm??",
  "minur",
  "mioma",
  "mirab",
  "mirat",
  "misil",
  "misra",
  "misri",
  "mitoz",
  "mitra",
  "m??x??a",
  "m??xl??",
  "miyan",
  "miyov",
  "mizac",
  "mizan",
  "mob??d",
  "mobud",
  "m??c??z",
  "modem",
  "modlu",
  "mofet",
  "m??hr??",
  "moiz??",
  "mokko",
  "moped",
  "moqar",
  "moren",
  "morfi",
  "motal",
  "motel",
  "motiv",
  "motor",
  "motur",
  "m??vla",
  "m??v??c",
  "moxer",
  "moyva",
  "m??bah",
  "mubvr",
  "mucul",
  "mucuq",
  "m??c??r",
  "m??dam",
  "mudul",
  "mufel",
  "mufta",
  "m??fti",
  "m??hib",
  "mujik",
  "mukko",
  "mukur",
  "mulat",
  "mul??a",
  "mulda",
  "mumlu",
  "munda",
  "munis",
  "munqu",
  "m??n??i",
  "m??qim",
  "m??qta",
  "muqur",
  "murfi",
  "m??rg??",
  "m??rid",
  "murov",
  "m??rur",
  "murze",
  "m????di",
  "m??sin",
  "m??sy??",
  "mutun",
  "muxru",
  "muxul",
  "m??z??r",
  "nabor",
  "nabud",
  "nacaq",
  "na??aq",
  "na??ar",
  "na??iz",
  "na??ot",
  "nadel",
  "na??hl",
  "nagah",
  "na??ar",
  "nahaq",
  "nak??s",
  "nalan",
  "nal??a",
  "nalim",
  "nall??",
  "namlu",
  "namus",
  "nanay",
  "nandi",
  "nandu",
  "nan??x",
  "napak",
  "naqan",
  "naqil",
  "naqis",
  "naqqa",
  "naqus",
  "narl??",
  "narta",
  "na??ad",
  "nasaq",
  "nasaz",
  "naseh",
  "nasir",
  "nasos",
  "na??ur",
  "nat??q",
  "navar",
  "naxah",
  "nax??r",
  "nazil",
  "nazim",
  "nazla",
  "n??cat",
  "ne??in",
  "n??cis",
  "ne????n",
  "n??d??n",
  "n??fir",
  "n??fis",
  "n??fli",
  "n??hvi",
  "n??lik",
  "nelma",
  "n??m??r",
  "nemes",
  "n??mi??",
  "n??mli",
  "n??mov",
  "nenc??",
  "n??qli",
  "n??q????",
  "nerka",
  "nerpa",
  "n????at",
  "n??s??b",
  "n??????t",
  "n??sim",
  "n??sli",
  "n??sri",
  "netto",
  "ney??i",
  "nigar",
  "nihad",
  "nijad",
  "nikah",
  "nikel",
  "nikol",
  "nimfa",
  "nimru",
  "niqab",
  "niruz",
  "nisar",
  "n??t??q",
  "nival",
  "nonet",
  "noqay",
  "norka",
  "n??????n",
  "notlu",
  "nov??a",
  "n??vh??",
  "novlu",
  "n??vl??",
  "noxta",
  "n??y??t",
  "n??cum",
  "n??kt??",
  "nurma",
  "n??tf??",
  "nutri",
  "n??z??l",
  "oba????",
  "obal??",
  "obraz",
  "o??erk",
  "odda??",
  "??dd??k",
  "odlaq",
  "??dl??k",
  "odsuz",
  "ofort",
  "ofset",
  "o??ra??",
  "o??run",
  "okebn",
  "oksid",
  "??ks??z",
  "??l??m??",
  "olein",
  "oleum",
  "??lg??n",
  "olimp",
  "olmaq",
  "olmaz",
  "??lm??k",
  "??lm????",
  "olsun",
  "omeqa",
  "omlet",
  "oniks",
  "onlar",
  "onqat",
  "onsuz",
  "optik",
  "orada",
  "oral??",
  "oras??",
  "oraya",
  "orbit",
  "??rk??n",
  "orman",
  "ornac",
  "ortit",
  "??rtm??",
  "osmer",
  "osmos",
  "ostan",
  "ostit",
  "??tk??n",
  "??tm??k",
  "??tm????",
  "otqul",
  "otsuz",
  "ovdan",
  "ovduq",
  "ovlaq",
  "ovmaq",
  "??vraq",
  "??vr??t",
  "ovsaf",
  "??vsaf",
  "ovsar",
  "ov??ar",
  "ovucu",
  "ovurd",
  "ovxaq",
  "ovxar",
  "oxcuq",
  "oxdan",
  "oxluq",
  "oxotu",
  "oxqay",
  "ox??ar",
  "oxuma",
  "oylaq",
  "oymaq",
  "??ym??k",
  "oynaq",
  "oynar",
  "oyna??",
  "oyrot",
  "??y??m??",
  "??zb??k",
  "??zg??n",
  "padar",
  "pado??",
  "pafos",
  "paker",
  "paket",
  "palan",
  "palma",
  "pampa",
  "panel",
  "panno",
  "papey",
  "pap????",
  "papka",
  "paraf",
  "paraq",
  "parez",
  "parik",
  "parom",
  "parul",
  "pasaj",
  "pasaq",
  "pasta",
  "pasxa",
  "patin",
  "patka",
  "paxar",
  "pax??r",
  "pay????",
  "payl??",
  "payok",
  "pazaq",
  "pazl??",
  "pbuza",
  "pe??at",
  "pedal",
  "p??d??r",
  "p??l????",
  "p??lik",
  "p??lm??",
  "pemza",
  "p??nb??",
  "penni",
  "penya",
  "p??p????",
  "p??rdi",
  "p??r??k",
  "p??rli",
  "p??rqu",
  "p??sab",
  "p??s??k",
  "pe??in",
  "p????ov",
  "petit",
  "peyda",
  "pibno",
  "pi??????",
  "pifos",
  "pikap",
  "piket",
  "pil??k",
  "pilik",
  "pill??",
  "pilon",
  "pilt??",
  "pilut",
  "pinti",
  "pipet",
  "pipik",
  "pirat",
  "pirit",
  "piroq",
  "piruz",
  "pi??t??",
  "pitik",
  "piton",
  "piyan",
  "piyli",
  "plato",
  "platu",
  "plaun",
  "plebs",
  "plit??",
  "plomb",
  "plyaj",
  "plyus",
  "poker",
  "polip",
  "polis",
  "polka",
  "pompa",
  "poqon",
  "poruq",
  "pota??",
  "potu??",
  "pozma",
  "pozuq",
  "prava",
  "press",
  "prima",
  "prins",
  "proza",
  "psixi",
  "pu??al",
  "pu??ur",
  "pudra",
  "pulis",
  "pulka",
  "pullu",
  "p??l??k",
  "pun??o",
  "punkt",
  "pusma",
  "p????t??",
  "p????ti",
  "pyeza",
  "qabil",
  "qabla",
  "qaboy",
  "qa??an",
  "qa??ar",
  "qacl??",
  "qa??ma",
  "qadaq",
  "qafel",
  "qa??la",
  "qahal",
  "qalac",
  "qalan",
  "qalay",
  "qalen",
  "qalet",
  "qal??a",
  "qal????",
  "qal??m",
  "qal????",
  "qall??",
  "qalma",
  "qalop",
  "qamak",
  "qam??t",
  "qamma",
  "qamus",
  "qanda",
  "qan??q",
  "qanma",
  "qanon",
  "qanov",
  "qanq??",
  "qanqu",
  "qapma",
  "qaqqa",
  "qaqum",
  "qaraj",
  "qaram",
  "qar????",
  "qar??m",
  "qarl??",
  "qarma",
  "qarov",
  "qart3",
  "qarta",
  "qart??",
  "qarun",
  "qarus",
  "qasaq",
  "qasib",
  "qas??b",
  "qa??l??",
  "qa??ov",
  "qat??m",
  "qat??q",
  "qatl??",
  "qatma",
  "qavut",
  "qax????",
  "qaxma",
  "qay??t",
  "qay??m",
  "qay??n",
  "qay????",
  "qayka",
  "qayma",
  "qazaq",
  "qazax",
  "qazel",
  "qaz??q",
  "qazma",
  "qazon",
  "qazun",
  "q??bih",
  "q??bil",
  "q??biz",
  "q??bz??",
  "q??c??c",
  "q??d??k",
  "q??did",
  "q??h??l",
  "q??h??t",
  "q??jvi",
  "q??lbi",
  "q??l??t",
  "q??liz",
  "q??ll??",
  "q??ly??",
  "q??m??r",
  "q??mi??",
  "q??nim",
  "q??nir",
  "q??rai",
  "q??rar",
  "q??rbi",
  "q??rim",
  "q??rin",
  "q??riq",
  "q??rni",
  "q??ry??",
  "q??s??m",
  "q??tar",
  "q??t??n",
  "q??tf??",
  "q??til",
  "q??tr??",
  "qeybi",
  "q??yur",
  "q??zal",
  "q??z??l",
  "q??zil",
  "qibl??",
  "qibti",
  "qi??ka",
  "q??d??q",
  "q??jov",
  "qilaf",
  "q??laf",
  "q??lan",
  "q??lca",
  "q??l??a",
  "q??l??q",
  "q??ll??",
  "q??lma",
  "q??lov",
  "q??lqa",
  "q??m??z",
  "q??nd??",
  "q??n??f",
  "q??nl??",
  "q??p??q",
  "q??pma",
  "q??r????",
  "q??r??m",
  "q??rl??",
  "q??rna",
  "q??rov",
  "q??rra",
  "q??rt??",
  "q????da",
  "q????la",
  "q??sma",
  "qismi",
  "q??sq??",
  "qiss??",
  "qitov",
  "qiyab",
  "qiyaq",
  "q??y????",
  "qiym??",
  "qiyy??",
  "qizal",
  "q??zma",
  "qlava",
  "qliya",
  "qneys",
  "qobur",
  "qobuy",
  "qobuz",
  "qoduq",
  "qofta",
  "qolac",
  "qolan",
  "qolay",
  "qol??a",
  "qolfi",
  "qollu",
  "qoluq",
  "qonaq",
  "qonit",
  "qonka",
  "qonma",
  "qons??",
  "qonuq",
  "qonur",
  "qopak",
  "qop??a",
  "qopma",
  "qopuq",
  "qorlu",
  "qoruq",
  "qorut",
  "qo??an",
  "qo??aq",
  "qo??ar",
  "qo??um",
  "qotaz",
  "qotik",
  "qotur",
  "qovan",
  "qovaq",
  "q??vmi",
  "qovra",
  "q??v????",
  "q??vsi",
  "qovuq",
  "qovu??",
  "qovut",
  "qoyum",
  "qoyuq",
  "qozla",
  "qrafa",
  "qrant",
  "qrena",
  "qrunt",
  "quano",
  "q??bar",
  "q??bb??",
  "qubka",
  "qucma",
  "qucum",
  "q??dd??",
  "qudok",
  "q??dsi",
  "qulac",
  "qulam",
  "qulan",
  "qulun",
  "qumca",
  "qumlu",
  "qumma",
  "qummi",
  "qumru",
  "qumuq",
  "q??nn??",
  "quqqu",
  "qurab",
  "q??rab",
  "Quran",
  "qurna",
  "qurra",
  "q??rr??",
  "qursa",
  "quru??",
  "qusar",
  "qu????u",
  "qusli",
  "qusma",
  "qu??qu",
  "qutan",
  "q??tbi",
  "qutlu",
  "q??y??d",
  "q??zeh",
  "rabat",
  "radd??",
  "radon",
  "rahab",
  "ralli",
  "ramka",
  "rampa",
  "ranet",
  "rasta",
  "ratin",
  "raund",
  "raxit",
  "rbund",
  "rebus",
  "r??c??b",
  "r??c??z",
  "r??dif",
  "redut",
  "r??hil",
  "r??hl??",
  "rejim",
  "r??kik",
  "rekun",
  "r??m??l",
  "r??mzi",
  "r??nd??",
  "renta",
  "reqbi",
  "r??qiq",
  "r????m??",
  "retu??",
  "r??vac",
  "revyu",
  "r??xn??",
  "r??y??i",
  "reyka",
  "ri??al",
  "ric??t",
  "rik??a",
  "ri??t??",
  "ritor",
  "rolik",
  "rondo",
  "rotor",
  "r??vz??",
  "royal",
  "r??bab",
  "rubot",
  "r??f??t",
  "ruh??n",
  "ruhlu",
  "rulet",
  "rulon",
  "rumba",
  "rum??n",
  "rumka",
  "r??muz",
  "rundo",
  "rupor",
  "rusca",
  "r??sva",
  "rutil",
  "rutor",
  "??aba??",
  "sabit",
  "sabur",
  "sa????q",
  "sa??l??",
  "sa??ma",
  "sadaq",
  "sadir",
  "sa??an",
  "sa????m",
  "sa????n",
  "sa??ma",
  "sa??r??",
  "??ahad",
  "sajan",
  "saj??n",
  "??ak??r",
  "??alaq",
  "salar",
  "salat",
  "sal????",
  "saldo",
  "saleh",
  "salim",
  "sal??m",
  "sal??q",
  "??all??",
  "salma",
  "salol",
  "salon",
  "salto",
  "salul",
  "salun",
  "??aman",
  "??amil",
  "samit",
  "samur",
  "??amut",
  "sanma",
  "sapan",
  "??apka",
  "sapl??",
  "saq??n",
  "saqit",
  "saqqa",
  "??aqqa",
  "saqqo",
  "??aqul",
  "sarab",
  "??arap",
  "sarja",
  "??arl??",
  "sarma",
  "??a??ka",
  "??a??ma",
  "??assi",
  "sat??l",
  "satin",
  "sat??n",
  "??atir",
  "??at??r",
  "satma",
  "satq??",
  "sauna",
  "savar",
  "savay",
  "??axis",
  "??axl??",
  "saxur",
  "sayad",
  "??ayan",
  "sayaq",
  "??ayba",
  "sayca",
  "say????",
  "sayda",
  "??ay??d",
  "say????",
  "??ayi??",
  "say??q",
  "sayl??",
  "sayma",
  "sayqa",
  "sayr??",
  "saz????",
  "sazi??",
  "????ban",
  "s??bat",
  "????bbu",
  "s??b??t",
  "????bih",
  "seb??s",
  "s??bur",
  "s??bz??",
  "s??cd??",
  "se??im",
  "se??ki",
  "????dd??",
  "s??d??f",
  "????did",
  "s??dri",
  "s??fh??",
  "????fiq",
  "s??fra",
  "s????ir",
  "????hab",
  "s??hih",
  "????hla",
  "????hr??",
  "sekam",
  "s??kil",
  "????kli",
  "s??km??",
  "sekta",
  "s??kt??",
  "????kva",
  "selab",
  "s??lah",
  "s??lb??",
  "s??l??f",
  "s??l??m",
  "selen",
  "s??lib",
  "selli",
  "????lp??",
  "selpo",
  "selsi",
  "????lt??",
  "selva",
  "s??m??r",
  "s??mir",
  "semit",
  "s??mum",
  "senaj",
  "senat",
  "s??nc??",
  "s??n??k",
  "s??n??m",
  "s??pin",
  "s??pm??",
  "s??qqa",
  "s??rab",
  "????r??i",
  "s??r??k",
  "????r??n",
  "s??rf??",
  "????rid",
  "s??rih",
  "????rir",
  "s??rki",
  "s??rm??",
  "seroz",
  "????rqi",
  "serum",
  "??????????",
  "s??sli",
  "??e??li",
  "setar",
  "????t??l",
  "s??tri",
  "s??vab",
  "????v??l",
  "sev??r",
  "sevi??",
  "sevm??",
  "??evru",
  "??eyda",
  "??eyh??",
  "seyid",
  "seyiz",
  "s??yli",
  "sezm??",
  "??ibid",
  "sibr??",
  "??iby??",
  "si??an",
  "s??caq",
  "sicim",
  "sidik",
  "??ifer",
  "sifon",
  "sifun",
  "??ifun",
  "s??????m",
  "s??????n",
  "s??????r",
  "s????ma",
  "sikk??",
  "??ikv??",
  "sill??",
  "silm??",
  "silos",
  "silvi",
  "simin",
  "sin??k",
  "sinel",
  "??inel",
  "sinfi",
  "sinil",
  "sinli",
  "??inli",
  "sinm??",
  "sinod",
  "sinov",
  "sinqa",
  "sinud",
  "siqar",
  "siqay",
  "sirab",
  "sirat",
  "??ir??i",
  "????r??m",
  "sirli",
  "??irli",
  "s??rma",
  "??irma",
  "??i????k",
  "siser",
  "??i??ik",
  "sisli",
  "??i??m??",
  "s??sqa",
  "??itab",
  "sital",
  "sitat",
  "??itil",
  "sitra",
  "??iv??n",
  "sivr??",
  "sivu??",
  "s??xca",
  "s??x??m",
  "??ixta",
  "siyah",
  "siyal",
  "sizal",
  "s??zan",
  "s??zaq",
  "sizc??",
  "s??z??m",
  "sizin",
  "s??zqa",
  "s??zq??",
  "??kala",
  "sket??",
  "skuns",
  "??lanq",
  "slayd",
  "sl??nq",
  "??leyf",
  "smeta",
  "??ofer",
  "s??km??",
  "solaq",
  "sol??u",
  "solma",
  "soluq",
  "s??n??n",
  "sonet",
  "sonku",
  "sonlu",
  "s??nm??",
  "sonor",
  "sonuc",
  "soplo",
  "??oran",
  "soraq",
  "??oraq",
  "sorma",
  "??ortu",
  "??o??aq",
  "??otka",
  "????t??k",
  "s??vda",
  "s??vd??",
  "sovet",
  "sovka",
  "sovma",
  "s??vti",
  "sovxa",
  "soxma",
  "soyma",
  "s??ym??",
  "s??z????",
  "s??zd??",
  "s??zl??",
  "spazm",
  "spirt",
  "??piun",
  "sport",
  "??pris",
  "??prot",
  "??tamm",
  "??tamp",
  "??tanq",
  "start",
  "stend",
  "??tift",
  "??trek",
  "stres",
  "??trix",
  "????al??",
  "s??bur",
  "su??lu",
  "sucul",
  "sucuq",
  "s??d????",
  "s??dl??",
  "sudur",
  "s??dur",
  "??????ra",
  "s??fl??",
  "??u??ul",
  "suhaz",
  "s??ita",
  "s??jet",
  "s??kun",
  "sulaq",
  "????l??k",
  "suluf",
  "s??l??k",
  "??ulum",
  "suluq",
  "??umal",
  "????mar",
  "sumka",
  "s??ms??",
  "????mul",
  "????m??r",
  "s??nb??",
  "s??ng??",
  "s??nn??",
  "s??nni",
  "suoxu",
  "s??rb??",
  "s??r??k",
  "s??rf??",
  "s??rg??",
  "??uri??",
  "s??rm??",
  "s??r??k",
  "s??r??m",
  "??urup",
  "????rut",
  "s??rv??",
  "s??s??n",
  "s??sl??",
  "susuz",
  "sutka",
  "s??t??l",
  "s??var",
  "suvat",
  "????v??l",
  "s??y??m",
  "s??z??k",
  "s??z??n",
  "s??z??r",
  "s??zm??",
  "taban",
  "tabaq",
  "tabel",
  "tabl??",
  "tablu",
  "tabor",
  "tabut",
  "tacik",
  "tacir",
  "tafta",
  "ta??ar",
  "ta??l??",
  "tahir",
  "talaq",
  "tal??a",
  "talun",
  "talxa",
  "tamah",
  "tamet",
  "taml??",
  "tanin",
  "tanr??",
  "tapan",
  "tapma",
  "tapq??",
  "taq??t",
  "taq??m",
  "tarac",
  "taran",
  "tara??",
  "tar????",
  "tarif",
  "tarik",
  "tar??m",
  "tavar",
  "tavot",
  "tax??a",
  "taxma",
  "tebtr",
  "t??cil",
  "t??h??r",
  "teizm",
  "t??kc??",
  "t??k????",
  "t??kir",
  "t??ky??",
  "t??l??t",
  "t??lis",
  "temar",
  "t??mim",
  "tenor",
  "t??p??l",
  "t??pm??",
  "t??qti",
  "t??r??k",
  "t??rli",
  "t??rsa",
  "t??rs??",
  "t??s??k",
  "t??????r",
  "t????n??",
  "t??xir",
  "teyxa",
  "tezc??",
  "t??z??k",
  "t??zim",
  "tezis",
  "tibbi",
  "tifaq",
  "tifil",
  "tikim",
  "timik",
  "timol",
  "tin??t",
  "ting??",
  "tinli",
  "tipaj",
  "tipik",
  "tirli",
  "t??xl??",
  "t??xma",
  "tiyan",
  "to??ay",
  "to??lu",
  "t??km??",
  "tomat",
  "tonal",
  "topaz",
  "toplu",
  "topu??",
  "toqqa",
  "toran",
  "tor??u",
  "torit",
  "torlu",
  "torna",
  "toros",
  "t??rp??",
  "torta",
  "total",
  "totem",
  "totuq",
  "totu??",
  "tovuz",
  "toxac",
  "toy??u",
  "t??yc??",
  "trest",
  "triku",
  "tromb",
  "truba",
  "trus??",
  "tufli",
  "tu??ra",
  "t??haf",
  "tukar",
  "t??kc??",
  "t??kl??",
  "t??l??k",
  "tuluq",
  "tumac",
  "tuman",
  "t??m??n",
  "tumlu",
  "tumov",
  "t??n??k",
  "tunus",
  "t??rf??",
  "t??rk??",
  "tutam",
  "tutar",
  "tuta??",
  "t??tm??",
  "tutuq",
  "tutya",
  "????bir",
  "????g??l",
  "????l??k",
  "ucluq",
  "u??ucu",
  "udlaq",
  "uducu",
  "uklad",
  "ulama",
  "??lk??r",
  "ultra",
  "??m??ra",
  "umsuq",
  "union",
  "un??ta",
  "uniya",
  "unluq",
  "??q??la",
  "??rcah",
  "??r??fa",
  "??rfan",
  "??rkm??",
  "urvat",
  "??ryan",
  "u??qun",
  "??sr??t",
  "??????aq",
  "??????m??",
  "??tm??k",
  "??t??l??",
  "uyezd",
  "uymaq",
  "uyuma",
  "uza????",
  "??zd??n",
  "??zs??z",
  "??z??a??",
  "??z??c??",
  "vabal",
  "vadar",
  "vafli",
  "va??am",
  "vagir",
  "valay",
  "valeh",
  "valet",
  "valid",
  "valun",
  "vanil",
  "vanna",
  "vapur",
  "vaqi??",
  "vaqif",
  "vaqon",
  "varan",
  "varid",
  "varl??",
  "varma",
  "varna",
  "vasil",
  "vatin",
  "vayl??",
  "vazeh",
  "v??bal",
  "vedr??",
  "v??fat",
  "v??g??r",
  "v??hm??",
  "v??l??d",
  "v??lim",
  "vel??r",
  "venoz",
  "verim",
  "veri??",
  "verm??",
  "v??rni",
  "verst",
  "v??rt??",
  "v??s??t",
  "v??sfi",
  "v??sm??",
  "veyil",
  "video",
  "villa",
  "vinil",
  "viraj",
  "virus",
  "v????ka",
  "viski",
  "vi??n??",
  "viula",
  "vizit",
  "vokal",
  "vulta",
  "v??qar",
  "v??quf",
  "vuran",
  "vurma",
  "v??rud",
  "vurum",
  "vuruq",
  "vuru??",
  "v??s??t",
  "v??sul",
  "v??suq",
  "vutum",
  "v??zuh",
  "vzvod",
  "xa??l??",
  "xakas",
  "xaliq",
  "xall??",
  "xam??t",
  "xamna",
  "xamu??",
  "xaqan",
  "xaral",
  "xar??o",
  "xa??ak",
  "xa??al",
  "xass??",
  "xat??m",
  "xat??n",
  "xatir",
  "xaxam",
  "xay??r",
  "x??cil",
  "x??dim",
  "x??lf??",
  "x??lic",
  "x??lqi",
  "x??mr??",
  "x??msi",
  "x??nd??",
  "x??rac",
  "x??rif",
  "x??????l",
  "x??sil",
  "x??t??r",
  "x??tmi",
  "xeym??",
  "xeyr??",
  "xeyri",
  "x??zan",
  "x??z??i",
  "x??zli",
  "x??zn??",
  "xilaf",
  "xill??",
  "x??lta",
  "x??lxa",
  "ximer",
  "xinin",
  "x??r????",
  "xirid",
  "x??rl??",
  "xirq??",
  "x????ma",
  "x??z??r",
  "xonsa",
  "xorna",
  "xorum",
  "xo??ab",
  "xo??ca",
  "x??t??k",
  "xotk??",
  "xotuq",
  "xovlu",
  "xubru",
  "x??lus",
  "x??lya",
  "xunta",
  "xural",
  "xurda",
  "x??ruc",
  "xuru??",
  "x??sus",
  "xutor",
  "yadro",
  "ya??ar",
  "ya??????",
  "ya????n",
  "ya????r",
  "yalaq",
  "yalov",
  "yalxa",
  "yalx??",
  "yanar",
  "yan????",
  "yanl??",
  "yap??q",
  "yapma",
  "yapun",
  "yaqma",
  "yaraq",
  "yarar",
  "yar??b",
  "yar??m",
  "yar??n",
  "yar??q",
  "yarl??",
  "yarma",
  "yarus",
  "ya??ar",
  "ya????d",
  "yasin",
  "yasli",
  "yasl??",
  "yatab",
  "yatar",
  "yat??m",
  "yat??q",
  "yat??r",
  "yat????",
  "yatma",
  "yavru",
  "yavuq",
  "yavuz",
  "yaxac",
  "yax??q",
  "yaxma",
  "yaxta",
  "yaxud",
  "yayc??",
  "yay??m",
  "yay??q",
  "yayl??",
  "yayma",
  "yayq??",
  "yaz??n",
  "yaz????",
  "yazma",
  "yegah",
  "yegan",
  "yeger",
  "y????ma",
  "yekta",
  "yelb??",
  "yelda",
  "yel??n",
  "yelg??",
  "yelin",
  "yelli",
  "yem??i",
  "y??min",
  "yeni??",
  "yenm??",
  "yenut",
  "yerik",
  "yeri??",
  "yerli",
  "y??????m",
  "ye??ik",
  "yesir",
  "yet??n",
  "yet??r",
  "yetik",
  "yetim",
  "yetm??",
  "yeyim",
  "yeyin",
  "yezid",
  "yezn??",
  "y??????n",
  "y????????",
  "yivli",
  "y??x??q",
  "y??xma",
  "yodlu",
  "yolaq",
  "yolka",
  "yollu",
  "yolma",
  "yolpa",
  "yoluq",
  "yonma",
  "yonuq",
  "yor??a",
  "yorma",
  "yosma",
  "yosun",
  "yovuq",
  "yozma",
  "yubka",
  "yukka",
  "yumma",
  "yun??u",
  "yunlu",
  "yunqa",
  "y??r??k",
  "y??r????",
  "yusif",
  "yuvaq",
  "y??z??r",
  "zabil",
  "za??ot",
  "za??ar",
  "za??ca",
  "za??????",
  "za??l??",
  "zaiq??",
  "zalom",
  "zalxa",
  "zam??a",
  "zat??n",
  "z??ban",
  "z??b??r",
  "z??bun",
  "z??bur",
  "zefir",
  "z??????n",
  "z??g??v",
  "z??hir",
  "z??hl??",
  "zehli",
  "zehni",
  "z??lam",
  "z??mir",
  "z??mm??",
  "z??nci",
  "z??n??x",
  "z??ngi",
  "zenit",
  "z??rd??",
  "z??r??r",
  "z??val",
  "z??vat",
  "zeyil",
  "z??yli",
  "zib??s",
  "zibil",
  "zifaf",
  "z????l??",
  "z??l??a",
  "z??l??q",
  "zilli",
  "z??lxa",
  "z??nba",
  "zind??",
  "z??nq2",
  "z??qq??",
  "zirab",
  "z??ran",
  "z??rn??",
  "z??rp??",
  "zi??an",
  "ziv??r",
  "ziyad",
  "ziyil",
  "zodlu",
  "zo??lu",
  "z??k??m",
  "zonal",
  "zorlu",
  "z??bd??",
  "zubul",
  "Z??h??l",
  "z??kur",
  "z??lam",
  "zumar",
  "z??mr??",
  "z??y????"
];
  /** @type {string} */
  var c = "present";
  /** @type {string} */
  var correctLetter = "correct";
  /** @type {string} */
  var bytes = "absent";
  var settings = {
    unknown : 0,
    absent : 1,
    present : 2,
    correct : 3
  };
  /** @type {!Date} */
  var mutationsMap = new Date(2022, 0, 16, 0, 0, 0, 0);
  /** @type {string} */
  var choices = "q??ertyuiop????asdfghjkl????zxcvbnm????";
  /** @type {!Array<?>} */
  var braces = [].concat(toArray(choices.split("").slice(13)), toArray(choices.split("").slice(0, 13)));
  /** @type {string} */
  var STORAGE_KEY_MOCKSTORE = "statistics";
  /** @type {string} */
  var undefined = "fail";
  var train1or = {
    currentStreak : 0,
    maxStreak : 0,
    guesses : callback({
      1 : 0,
      2 : 0,
      3 : 0,
      4 : 0,
      5 : 0,
      6 : 0
    }, undefined, 0),
    winPercentage : 0,
    gamesPlayed : 0,
    gamesWon : 0,
    averageGuesses : 0
  };
  /** @type {!Element} */
  var post = document.createElement("template");
  /** @type {string} */
  post.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1E3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4E3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: ;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         WORDLE????????\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  /** @type {!Element} */
  var form = document.createElement("template");
  /** @type {string} */
  form.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  /** @type {string} */
  var exitCode = "IN_PROGRESS";
  /** @type {string} */
  var CONNECTING = "WIN";
  /** @type {string} */
  var obj = "FAIL";
  /** @type {!Array} */
  var pedalboards = ["??nan??lmaz", "??la", "??la????", "M??c??z??", "Xeyirli", "Wow!"];
  var DialogElement = function(e) {
    /**
     * @return {?}
     */
    function init() {
      var self;
      log(this, init);
      callback(set(self = request.call(this)), "tileIndex", 0);
      callback(set(self), "rowIndex", 0);
      callback(set(self), "solution", void 0);
      callback(set(self), "boardState", void 0);
      callback(set(self), "evaluations", void 0);
      callback(set(self), "canInput", true);
      callback(set(self), "gameStatus", exitCode);
      callback(set(self), "letterEvaluations", {});
      callback(set(self), "$board", void 0);
      callback(set(self), "$keyboard", void 0);
      callback(set(self), "$game", void 0);
      callback(set(self), "today", void 0);
      callback(set(self), "lastPlayedTs", void 0);
      callback(set(self), "lastCompletedTs", void 0);
      callback(set(self), "hardMode", void 0);
      callback(set(self), "dayOffset", void 0);
      self.attachShadow({
        mode : "open"
      });
      /** @type {!Date} */
      self.today = new Date;
      var data = parse();
      return self.lastPlayedTs = data.lastPlayedTs, !self.lastPlayedTs || cb(new Date(self.lastPlayedTs), self.today) >= 1 ? (self.boardState = (new Array(6)).fill(""), self.evaluations = (new Array(6)).fill(null), self.solution = isDate(self.today), self.dayOffset = getTime(self.today), self.lastCompletedTs = data.lastCompletedTs, self.hardMode = data.hardMode, self.restoringFromLocalStorage = false, done({
        rowIndex : self.rowIndex,
        boardState : self.boardState,
        evaluations : self.evaluations,
        solution : self.solution,
        gameStatus : self.gameStatus
      }), check("event", "level_start", {
        level_name : combine(self.solution)
      })) : (self.boardState = data.boardState, self.evaluations = data.evaluations, self.rowIndex = data.rowIndex, self.solution = data.solution, self.dayOffset = getTime(self.today), self.letterEvaluations = filter(self.boardState, self.evaluations), self.gameStatus = data.gameStatus, self.lastCompletedTs = data.lastCompletedTs, self.hardMode = data.hardMode, self.gameStatus !== exitCode && (self.canInput = false), self.restoringFromLocalStorage = true), self;
    }
    on(init, e);
    var request = makeRequest(init);
    return trigger(init, [{
      key : "evaluateRow",
      value : function() {
        if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
          var value;
          var brickInput = this.$board.querySelectorAll("game-row")[this.rowIndex];
          var integer = this.boardState[this.rowIndex];
          if (value = integer, !updatedSet.includes(value) && !options.includes(value)) {
            return brickInput.setAttribute("invalid", ""), void this.addToast("M??n bu s??z?? bilmir??m!");
          }
          if (this.hardMode) {
            var that = function(x, obj, word) {
              if (!x || !obj || !word) {
                return {
                  validGuess : true
                };
              }
              /** @type {number} */
              var i = 0;
              for (; i < word.length; i++) {
                if (word[i] === correctLetter && x[i] !== obj[i]) {
                  return {
                    validGuess : false,
                    errorMessage : "".concat(ordinal(i + 1), " H??rf olmal??d??r ").concat(obj[i].toUpperCase())
                  };
                }
              }
              var o = {};
              /** @type {number} */
              var k = 0;
              for (; k < word.length; k++) {
                if ([correctLetter, c].includes(word[k])) {
                  if (o[obj[k]]) {
                    o[obj[k]] += 1;
                  } else {
                    /** @type {number} */
                    o[obj[k]] = 1;
                  }
                }
              }
              var newValuesArr = x.split("").reduce(function(eventsDict, event) {
                return eventsDict[event] ? eventsDict[event] += 1 : eventsDict[event] = 1, eventsDict;
              }, {});
              var f;
              for (f in o) {
                if ((newValuesArr[f] || 0) < o[f]) {
                  return {
                    validGuess : false,
                    errorMessage : "S??z olmal??d??r ".concat(f.toUpperCase())
                  };
                }
              }
              return {
                validGuess : true
              };
            }(integer, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]);
            var malakh = that.validGuess;
            var paramErrorMessage = that.errorMessage;
            if (!malakh) {
              return brickInput.setAttribute("invalid", ""), void this.addToast(paramErrorMessage || "Not valid in hard mode");
            }
          }
          var that = function(p, s) {
            /** @type {!IArrayLike<?>} */
            var v = Array(s.length).fill(bytes);
            /** @type {!IArrayLike<?>} */
            var eccBuffer = Array(s.length).fill(true);
            /** @type {!IArrayLike<?>} */
            var fdcache = Array(s.length).fill(true);
            /** @type {number} */
            var i = 0;
            for (; i < p.length; i++) {
              if (p[i] === s[i] && fdcache[i]) {
                /** @type {string} */
                v[i] = correctLetter;
                /** @type {boolean} */
                eccBuffer[i] = false;
                /** @type {boolean} */
                fdcache[i] = false;
              }
            }
            /** @type {number} */
            var t = 0;
            for (; t < p.length; t++) {
              var type = p[t];
              if (eccBuffer[t]) {
                /** @type {number} */
                var i = 0;
                for (; i < s.length; i++) {
                  var n = s[i];
                  if (fdcache[i] && type === n) {
                    /** @type {string} */
                    v[t] = c;
                    /** @type {boolean} */
                    fdcache[i] = false;
                    break;
                  }
                }
              }
            }
            return v;
          }(integer, this.solution);
          this.evaluations[this.rowIndex] = that;
          this.letterEvaluations = filter(this.boardState, this.evaluations);
          brickInput.evaluation = this.evaluations[this.rowIndex];
          this.rowIndex += 1;
          /** @type {boolean} */
          var eventName = this.rowIndex >= 6;
          var propertyName = that.every(function(guess) {
            return "correct" === guess;
          });
          if (eventName || propertyName) {
            draw({
              isWin : propertyName,
              isStreak : !!this.lastCompletedTs && 1 === cb(new Date(this.lastCompletedTs), new Date),
              numGuesses : this.rowIndex
            });
            done({
              lastCompletedTs : Date.now()
            });
            /** @type {string} */
            this.gameStatus = propertyName ? CONNECTING : obj;
            check("event", "level_end", {
              level_name : combine(this.solution),
              num_guesses : this.rowIndex,
              success : propertyName
            });
          }
          /** @type {number} */
          this.tileIndex = 0;
          /** @type {boolean} */
          this.canInput = false;
          done({
            rowIndex : this.rowIndex,
            boardState : this.boardState,
            evaluations : this.evaluations,
            solution : this.solution,
            gameStatus : this.gameStatus,
            lastPlayedTs : Date.now()
          });
        }
      }
    }, {
      key : "addLetter",
      value : function(recB) {
        if (this.gameStatus === exitCode) {
          if (this.canInput) {
            if (!(this.tileIndex >= 5)) {
              this.boardState[this.rowIndex] += recB;
              this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]);
              this.tileIndex += 1;
            }
          }
        }
      }
    }, {
      key : "removeLetter",
      value : function() {
        if (this.gameStatus === exitCode && this.canInput && !(this.tileIndex <= 0)) {
          this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
          var _ = this.$board.querySelectorAll("game-row")[this.rowIndex];
          if (this.boardState[this.rowIndex]) {
            _.setAttribute("letters", this.boardState[this.rowIndex]);
          } else {
            _.removeAttribute("letters");
          }
          _.removeAttribute("invalid");
          this.tileIndex -= 1;
        }
      }
    }, {
      key : "submitGuess",
      value : function() {
        if (this.gameStatus === exitCode && this.canInput) {
          if (5 !== this.tileIndex) {
            return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("H??rf catm??r!");
          }
          this.evaluateRow();
        }
      }
    }, {
      key : "addToast",
      value : function(reason, label) {
        var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        /** @type {!Element} */
        var t = document.createElement("game-toast");
        t.setAttribute("text", reason);
        if (label) {
          t.setAttribute("duration", label);
        }
        if (s) {
          this.shadowRoot.querySelector("#system-toaster").prepend(t);
        } else {
          this.shadowRoot.querySelector("#game-toaster").prepend(t);
        }
      }
    }, {
      key : "sizeBoard",
      value : function() {
        var scrollbar_handle = this.shadowRoot.querySelector("#board-container");
        /** @type {number} */
        var x = Math.min(Math.floor(scrollbar_handle.clientHeight * (5 / 6)), 350);
        /** @type {number} */
        var predicted_answer = 6 * Math.floor(x / 5);
        /** @type {string} */
        this.$board.style.width = "".concat(x, "px");
        /** @type {string} */
        this.$board.style.height = "".concat(predicted_answer, "px");
      }
    }, {
      key : "showStatsModal",
      value : function() {
        var span = this.$game.querySelector("game-modal");
        /** @type {!Element} */
        var edit = document.createElement("game-stats");
        if (this.gameStatus === CONNECTING && this.rowIndex <= 6) {
          edit.setAttribute("highlight-guess", this.rowIndex);
        }
        edit.gameApp = this;
        span.appendChild(edit);
        span.setAttribute("open", "");
      }
    }, {
      key : "showHelpModal",
      value : function() {
        var e = this.$game.querySelector("game-modal");
        e.appendChild(document.createElement("game-help"));
        e.setAttribute("open", "");
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(post.content.cloneNode(true));
        this.$game = this.shadowRoot.querySelector("#game");
        this.$board = this.shadowRoot.querySelector("#board");
        this.$keyboard = this.shadowRoot.querySelector("game-keyboard");
        this.sizeBoard();
        if (!this.lastPlayedTs) {
          setTimeout(function() {
            return self.showHelpModal();
          }, 100);
        }
        /** @type {number} */
        var prop = 0;
        for (; prop < 6; prop++) {
          /** @type {!Element} */
          var model = document.createElement("game-row");
          model.setAttribute("letters", this.boardState[prop]);
          model.setAttribute("length", 5);
          if (this.evaluations[prop]) {
            model.evaluation = this.evaluations[prop];
          }
          this.$board.appendChild(model);
        }
        this.$game.addEventListener("game-key-press", function(sender) {
          var s = sender.detail.key;
          if ("???" === s || "Backspace" === s) {
            self.removeLetter();
          } else {
            if ("???" === s || "Enter" === s) {
              self.submitGuess();
            } else {
              if (choices.includes(s.toLowerCase())) {
                self.addLetter(s.toLowerCase());
              }
            }
          }
        });
        this.$game.addEventListener("game-last-tile-revealed-in-row", function(event) {
          self.$keyboard.letterEvaluations = self.letterEvaluations;
          if (self.rowIndex < 6) {
            /** @type {boolean} */
            self.canInput = true;
          }
          var r = self.$board.querySelectorAll("game-row")[self.rowIndex - 1];
          if ((event.path || event.composedPath && event.composedPath()).includes(r)) {
            if ([CONNECTING, obj].includes(self.gameStatus)) {
              if (self.restoringFromLocalStorage) {
                self.showStatsModal();
              } else {
                if (self.gameStatus === CONNECTING) {
                  r.setAttribute("win", "");
                  self.addToast(pedalboards[self.rowIndex - 1], 2E3);
                }
                if (self.gameStatus === obj) {
                  self.addToast(self.solution.toUpperCase(), 1 / 0);
                }
                setTimeout(function() {
                  self.showStatsModal();
                }, 2500);
              }
            }
            /** @type {boolean} */
            self.restoringFromLocalStorage = false;
          }
        });
        this.shadowRoot.addEventListener("game-setting-change", function(event) {
          var node = event.detail;
          var variableIdentifier = node.name;
          var connection = node.checked;
          var isDisabled = node.disabled;
          switch(variableIdentifier) {
            case "hard-mode":
              return void(isDisabled ? self.addToast("Yaln??z raundun ??vv??lind?? i???? sal??na bil??r", 1500, true) : (self.hardMode = connection, done({
                hardMode : connection
              })));
          }
        });
        this.shadowRoot.getElementById("settings-button").addEventListener("click", function(a) {
          var body = self.$game.querySelector("game-page");
          /** @type {!Text} */
          var debug = document.createTextNode("Ayarlar");
          body.appendChild(debug);
          /** @type {!Element} */
          var node = document.createElement("game-settings");
          node.setAttribute("slot", "content");
          node.gameApp = self;
          body.appendChild(node);
          body.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("help-button").addEventListener("click", function(a) {
          var s = self.$game.querySelector("game-page");
          /** @type {!Text} */
          var t = document.createTextNode("Qaydalar");
          s.appendChild(t);
          /** @type {!Element} */
          var container = document.createElement("game-help");
          container.setAttribute("page", "");
          container.setAttribute("slot", "content");
          s.appendChild(container);
          s.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("statistics-button").addEventListener("click", function(a) {
          self.showStatsModal();
        });
        window.addEventListener("resize", this.sizeBoard.bind(this));
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
      }
    }, {
      key : "debugTools",
      value : function() {
        var i = this;
        this.shadowRoot.getElementById("debug-tools").appendChild(form.content.cloneNode(true));
        this.shadowRoot.getElementById("toast").addEventListener("click", function(a) {
          i.addToast("hello world");
        });
        this.shadowRoot.getElementById("modal").addEventListener("click", function(a) {
          var s = i.$game.querySelector("game-modal");
          /** @type {string} */
          s.textContent = "hello plz";
          s.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("reveal").addEventListener("click", function() {
          i.evaluateRow();
        });
        this.shadowRoot.getElementById("shake").addEventListener("click", function() {
          i.$board.querySelectorAll("game-row")[i.rowIndex].setAttribute("invalid", "");
        });
        this.shadowRoot.getElementById("bounce").addEventListener("click", function() {
          var context = i.$board.querySelectorAll("game-row")[i.rowIndex - 1];
          if ("" === context.getAttribute("win")) {
            context.removeAttribute("win");
          } else {
            context.setAttribute("win", "");
          }
        });
      }
    }]), init;
  }(register(HTMLElement));
  customElements.define("game-app", DialogElement);
  /** @type {!Element} */
  var tabs = document.createElement("template");
  /** @type {string} */
  tabs.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3E3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var XBabel2 = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var menu = this;
        this.shadowRoot.appendChild(tabs.content.cloneNode(true));
        this.addEventListener("click", function(a) {
          menu.shadowRoot.querySelector(".content").classList.add("closing");
        });
        this.shadowRoot.addEventListener("animationend", function(css) {
          if ("SlideOut" === css.animationName) {
            menu.shadowRoot.querySelector(".content").classList.remove("closing");
            menu.removeChild(menu.firstChild);
            menu.removeAttribute("open");
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-modal", XBabel2);
  /** @type {!Element} */
  var fragment = document.createElement("template");
  /** @type {string} */
  fragment.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: ;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  /** @type {!Element} */
  var templateNode = document.createElement("template");
  /** @type {string} */
  templateNode.innerHTML = "\n  <button>key</button>\n";
  /** @type {!Element} */
  var _temp = document.createElement("template");
  /** @type {string} */
  _temp.innerHTML = '\n  <div></div>\n';
  /** @type {!Array} */ 
  var pipelets = [["q", "??", "e", "r", "t", "y", "u", "i", "o", "p", "??", "??"], ["a", "s", "d", "f", "g", "h", "j", "k", "l", "??", "??"], ["???", "z", "x", "c", "v", "b", "n", "m", "??", "??", "???"]];
  var XDefined = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "_letterEvaluations", {}), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "letterEvaluations",
      set : function(data) {
        /** @type {!Object} */
        this._letterEvaluations = data;
        this._render();
      }
    }, {
      key : "dispatchKeyPressEvent",
      value : function(e) {
        this.dispatchEvent(new CustomEvent("game-key-press", {
          bubbles : true,
          composed : true,
          detail : {
            key : e
          }
        }));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var base = this;
        this.shadowRoot.appendChild(fragment.content.cloneNode(true));
        this.$keyboard = this.shadowRoot.getElementById("keyboard");
        this.$keyboard.addEventListener("click", function(event) {
          var el = event.target.closest("button");
          if (el && base.$keyboard.contains(el)) {
            base.dispatchKeyPressEvent(el.dataset.key);
          }
        });
        window.addEventListener("keydown", function(event) {
          if (true !== event.repeat) {
            var s = event.key;
            /** @type {boolean} */
            var meta = event.metaKey;
            /** @type {boolean} */
            var ctrlPressed = event.ctrlKey;
            if (!(meta || ctrlPressed)) {
              if (choices.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) {
                base.dispatchKeyPressEvent(s);
              }
            }
          }
        });
        this.$keyboard.addEventListener("transitionend", function(event) {
          var el = event.target.closest("button");
          if (el && base.$keyboard.contains(el)) {
            el.classList.remove("fade");
          }
        });
        pipelets.forEach(function(wrappersTemplates) {
          /** @type {!Element} */
          var s = document.createElement("div");
          s.classList.add("row");
          wrappersTemplates.forEach(function(char) {
            var span;
            if ((char >= "a") || "???" === char || "???" === char) {
              if ((span = templateNode.content.cloneNode(true).firstElementChild).dataset.key = char, span.textContent = char, "???" === char) {
                /** @type {!Element} */
                var t = document.createElement("game-icon");
                t.setAttribute("icon", "backspace");
                /** @type {string} */
                span.textContent = "";
                span.appendChild(t);
                span.classList.add("one-and-a-half");
              }
              if ("???" == char) {
                /** @type {string} */
                span.textContent = "daxil";
                span.classList.add("one-and-a-half");
              }
            } else {
              (span = _temp.content.cloneNode(true).firstElementChild).classList.add(1 === char.length ? "half" : "one");
            }
            s.appendChild(span);
          });
          base.$keyboard.appendChild(s);
        });
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        var i;
        for (i in this._letterEvaluations) {
          var objectDiv = this.$keyboard.querySelector('[data-key="'.concat(i, '"]'));
          objectDiv.dataset.state = this._letterEvaluations[i];
          objectDiv.classList.add("fade");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-keyboard", XDefined);
  (function() {
    (console.warn || console.log).apply(console, arguments);
  }).bind("[clipboard-polyfill]");
  var dom;
  var list;
  var app;
  var comp;
  /** @type {(Navigator|undefined)} */
  var target = "undefined" == typeof navigator ? void 0 : navigator;
  var clipboard = null == target ? void 0 : target.clipboard;
  if (!(null === (dom = null == clipboard ? void 0 : clipboard.read) || void 0 === dom)) {
    dom.bind(clipboard);
  }
  if (!(null === (list = null == clipboard ? void 0 : clipboard.readText) || void 0 === list)) {
    list.bind(clipboard);
  }
  var renderMachines = (null === (app = null == clipboard ? void 0 : clipboard.write) || void 0 === app || app.bind(clipboard), null === (comp = null == clipboard ? void 0 : clipboard.writeText) || void 0 === comp ? void 0 : comp.bind(clipboard));
  /** @type {(Window|undefined)} */
  var _a = "undefined" == typeof window ? void 0 : window;
  /** @type {(Window|undefined)} */
  var state = (null == _a || _a.ClipboardItem, _a);
  /**
   * @return {undefined}
   */
  var e = function() {
    /** @type {boolean} */
    this.success = false;
  };
  /** @type {!Element} */
  var $template = document.createElement("template");
  /** @type {string} */
  $template.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: ;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: ;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 12px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistika</h1>\n    <div id="statistics"></div>\n    <h1>Oyun tarixi</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
  /** @type {!Element} */
  var tpl = document.createElement("template");
  /** @type {string} */
  tpl.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  /** @type {!Element} */
  var container = document.createElement("template");
  /** @type {string} */
  container.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  /** @type {!Element} */
  var cached = document.createElement("template");
  /** @type {string} */
  cached.innerHTML = '\n  <div class="countdown">\n    <h1>N??vb??ti s??z</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      N??tic??ni payla????n\n    </button>\n  </div>\n';
  var dragitemhomes = {
    currentStreak : "Cari oyun",
    maxStreak : "??n yax???? oyun",
    winPercentage : "% Qazand??",
    gamesPlayed : "??mumi",
    gamesWon : "Qazand??",
    averageGuesses : "C??hdl??rin orta say??"
  };
  var XProgressbarElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      return log(this, update), callback(set(self = api.call(this)), "stats", {}), callback(set(self), "gameApp", void 0), self.attachShadow({
        mode : "open"
      }), self.stats = deepClone(), self;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        var years = this.shadowRoot.getElementById("statistics");
        var overlay = this.shadowRoot.getElementById("guess-distribution");
        /** @type {number} */
        var total = Math.max.apply(Math, toArray(Object.values(this.stats.guesses)));
        if (Object.values(this.stats.guesses).every(function(canCreateDiscussions) {
          return 0 === canCreateDiscussions;
        })) {
          /** @type {!Element} */
          var cursor = document.createElement("div");
          cursor.classList.add("no-data");
          /** @type {string} */
          cursor.innerText = "M??lumat yoxdur!";
          overlay.appendChild(cursor);
        } else {
          /** @type {number} */
          var i = 1;
          for (; i < Object.keys(this.stats.guesses).length; i++) {
            /** @type {number} */
            var funcCode = i;
            var v = this.stats.guesses[i];
            var fragment = container.content.cloneNode(true);
            /** @type {number} */
            var x = Math.max(7, Math.round(v / total * 100));
            /** @type {number} */
            fragment.querySelector(".guess").textContent = funcCode;
            var visualsElement = fragment.querySelector(".graph-bar");
            if (visualsElement.style.width = "".concat(x, "%"), "number" == typeof v) {
              fragment.querySelector(".num-guesses").textContent = v;
              if (v > 0) {
                visualsElement.classList.add("align-right");
              }
              /** @type {number} */
              var t = parseInt(this.getAttribute("highlight-guess"), 10);
              if (t && i === t) {
                visualsElement.classList.add("highlight");
              }
            }
            overlay.appendChild(fragment);
          }
        }
        if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach(function(x) {
          var dragitemhome = dragitemhomes[x];
          var subwiki = self.stats[x];
          var span = tpl.content.cloneNode(true);
          span.querySelector(".label").textContent = dragitemhome;
          span.querySelector(".statistic").textContent = subwiki;
          years.appendChild(span);
        }), this.gameApp.gameStatus !== exitCode) {
          var tableRowElementOne = this.shadowRoot.querySelector(".footer");
          var tableDataCellElementOne = cached.content.cloneNode(true);
          tableRowElementOne.appendChild(tableDataCellElementOne);
          this.shadowRoot.querySelector("button#share-button").addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            render(function(data) {
              var a = data.evaluations;
              var datas = data.dayOffset;
              var val = data.rowIndex;
              var currentAnime = data.isHardMode;
              /** @type {boolean} */
              var active = data.isWin;
              /** @type {*} */
              var element = JSON.parse(window.localStorage.getItem(shop_id));
              /** @type {*} */
              var i = JSON.parse(window.localStorage.getItem(STORE_ID));
              /** @type {string} */
              var level = "Wordle Az??rbaycan dilind?? ".concat(datas);
              /** @type {string} */
              level = level + " ".concat(active ? val : "X", "/").concat(6);
              if (currentAnime) {
                /** @type {string} */
                level = level + "*";
              }
              /** @type {string} */
              var url = "";
              return a.forEach(function(wrappersTemplates) {
                if (wrappersTemplates) {
                  wrappersTemplates.forEach(function(type) {
                    if (type) {
                      /** @type {string} */
                      var p = "";
                      switch(type) {
                        case correctLetter:
                          p = function(aRoundNumber) {
                            return aRoundNumber ? String.fromCodePoint("0x1F7E7") : String.fromCodePoint("0x1F7E9");
                          }(i);
                          break;
                        case c:
                          p = function(aRoundNumber) {
                            return aRoundNumber ? String.fromCodePoint("0x1F7E6") : String.fromCodePoint("0x1F7E8");
                          }(i);
                          break;
                        case bytes:
                          p = function(suppressDisabledCheck) {
                            return suppressDisabledCheck ? String.fromCodePoint("0x2B1B") : String.fromCodePoint("0x2B1C");
                          }(element);
                      }
                      url = url + p;
                    }
                  });
                  url = url + "\n";
                }
              }), {
                text : "".concat(level, "\n\n").concat(url.trimEnd()).concat("\n\n#WordleAZ \n\n").concat("http://wordleaz.synetrix.in/")
              };
            }({
              evaluations : self.gameApp.evaluations,
              dayOffset : self.gameApp.dayOffset,
              rowIndex : self.gameApp.rowIndex,
              isHardMode : self.gameApp.hardMode,
              isWin : self.gameApp.gameStatus === CONNECTING
            }), function() {
              self.gameApp.addToast("N??tic?? kopyaland??", 2E3, true);
            }, function() {
              self.gameApp.addToast("N??tic??l??ri payla??maq al??nmad??", 2E3, true);
            });
          });
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-stats", XProgressbarElement);
  /** @type {!Element} */
  var result = document.createElement("template");
  /** @type {string} */
  result.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var XBabel = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var checkbox = this;
        this.shadowRoot.appendChild(result.content.cloneNode(true));
        this.shadowRoot.querySelector(".container").addEventListener("click", function(event) {
          event.stopPropagation();
          if (checkbox.hasAttribute("checked")) {
            checkbox.removeAttribute("checked");
          } else {
            checkbox.setAttribute("checked", "");
          }
          checkbox.dispatchEvent(new CustomEvent("game-switch-change", {
            bubbles : true,
            composed : true,
            detail : {
              name : checkbox.getAttribute("name"),
              checked : checkbox.hasAttribute("checked"),
              disabled : checkbox.hasAttribute("disabled")
            }
          }));
        });
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["checked"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-switch", XBabel);
  /** @type {!Element} */
  var element = document.createElement("template");
  /** @type {string} */
  element.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>S??z tap??n <strong>WORDLE????????</strong> 6 c??hd??</p>\n      <p>H??r bir s??z <strong>BE??</strong> h??rfd??n ibar??tdir v?? siz bu s??z?? <strong>ALTI</strong> c??hd?? tapmal??s??n??z!</p>\n      <p>H??r c??hd??n sonra xanan??n r??ngi d??yi????c??k v?? yazd??????n??z s??z??n n??z??rd?? tutulmu?? s??z?? n?? q??d??r yax??n oldu??unu g??st??r??c??k.</p>\n      <div class="examples">\n        <p><strong>N??mun??</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="V" evaluation="correct" reveal></game-tile>\n            <game-tile letter="??"></game-tile>\n            <game-tile letter="R"></game-tile>\n            <game-tile letter="??"></game-tile>\n            <game-tile letter="Q"></game-tile>\n          </div>\n          <p><strong>V</strong> h??rfi s??zd?? var do??ru yerd??dir.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="D"></game-tile>\n            <game-tile letter="A" evaluation="present" reveal></game-tile>\n            <game-tile letter="??"></game-tile>\n            <game-tile letter="R"></game-tile>\n            <game-tile letter="??"></game-tile>\n          </div>\n          <p><strong>A</strong> h??rfi s??zd?? var amma ba??qa yerd??dir.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="M"></game-tile>\n            <game-tile letter="E"></game-tile>\n            <game-tile letter="Y"></game-tile>\n            <game-tile letter="V"></game-tile>\n            <game-tile letter="??"  evaluation="absent" reveal></game-tile>\n          </div>\n          <p> <strong>??</strong> h??rfi he?? bir yer?? yoxdur.</p>\n        </div>\n      </div>\n      <p><strong>H??r g??n yeni s??z????????!</strong></p>\n    </div>\n  </section>\n';
  var XDrawerElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        this.shadowRoot.appendChild(element.content.cloneNode(true));
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-help", XDrawerElement);
  /** @type {!Element} */
  var template = document.createElement("template");
  /** @type {string} */
  template.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2E3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: ;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
  var XCheckboxElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var menu = this;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("game-icon").addEventListener("click", function(a) {
          menu.shadowRoot.querySelector(".overlay").classList.add("closing");
        });
        this.shadowRoot.addEventListener("animationend", function(css) {
          if ("SlideOut" === css.animationName) {
            menu.shadowRoot.querySelector(".overlay").classList.remove("closing");
            Array.from(menu.childNodes).forEach(function(a) {
              menu.removeChild(a);
            });
            menu.removeAttribute("open");
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-page", XCheckboxElement);
  /** @type {!Element} */
  var templateElement = document.createElement("template");
  /** @type {string} */
  templateElement.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
  var opts = {
    help : "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
    settings : "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
    backspace : "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
    close : "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    share : "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    statistics : "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
  };
  var XThrobberElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        this.shadowRoot.appendChild(templateElement.content.cloneNode(true));
        var index = this.getAttribute("icon");
        this.shadowRoot.querySelector("path").setAttribute("d", opts[index]);
        if ("backspace" === index) {
          this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)");
        }
        if ("share" === index) {
          this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-icon", XThrobberElement);
  /** @type {!Element} */
  var s = document.createElement("template");
  /** @type {string} */
  s.innerHTML = '\n  <div id="timer"></div>\n';
  /** @type {number} */
  var msDay = 6E4;
  /** @type {number} */
  var msMonth = 36E5;
  var XIconElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      log(this, update);
      callback(set(self = config.call(this)), "targetEpochMS", void 0);
      callback(set(self), "intervalId", void 0);
      callback(set(self), "$timer", void 0);
      self.attachShadow({
        mode : "open"
      });
      /** @type {!Date} */
      var restart = new Date;
      return restart.setDate(restart.getDate() + 1), restart.setHours(0, 0, 0, 0), self.targetEpochMS = restart.getTime(), self;
    }
    on(update, e);
    var config = makeRequest(update);
    return trigger(update, [{
      key : "padDigit",
      value : function(funcToEval) {
        return funcToEval.toString().padStart(2, "0");
      }
    }, {
      key : "updateTimer",
      value : function() {
        var funcCode;
        /** @type {number} */
        var lastKeyWidth = (new Date).getTime();
        /** @type {number} */
        var ms = Math.floor(this.targetEpochMS - lastKeyWidth);
        if (ms <= 0) {
          /** @type {string} */
          funcCode = "00:00:00";
        } else {
          /** @type {number} */
          var activeTicketIds = Math.floor(ms % 864E5 / msMonth);
          /** @type {number} */
          var objectsExpand = Math.floor(ms % msMonth / msDay);
          /** @type {number} */
          var subVariant = Math.floor(ms % msDay / 1E3);
          /** @type {string} */
          funcCode = "".concat(this.padDigit(activeTicketIds), ":").concat(this.padDigit(objectsExpand), ":").concat(this.padDigit(subVariant));
        }
        /** @type {string} */
        this.$timer.textContent = funcCode;
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(s.content.cloneNode(true));
        this.$timer = this.shadowRoot.querySelector("#timer");
        /** @type {number} */
        this.intervalId = setInterval(function() {
          self.updateTimer();
        }, 200);
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
        clearInterval(this.intervalId);
      }
    }]), update;
  }(register(HTMLElement));
  return customElements.define("countdown-timer", XIconElement), exports.CountdownTimer = XIconElement, exports.GameApp = DialogElement, exports.GameHelp = XDrawerElement, exports.GameIcon = XThrobberElement, exports.GameKeyboard = XDefined, exports.GameModal = XBabel2, exports.GamePage = XCheckboxElement, exports.GameRow = cls, exports.GameSettings = XelDemoElement, exports.GameStats = XProgressbarElement, exports.GameSwitch = XBabel, exports.GameThemeManager = SorTable, exports.GameTile = Class, 
  exports.GameToast = ActionSheetButtonElement, Object.defineProperty(exports, "__esModule", {
    value : true
  }), exports;
}({});
