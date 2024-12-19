function IS(t, e) {
    for (var n = 0; n < e.length; n++) {
        const r = e[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in t)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(t, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function zS(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Y1 = {
    exports: {}
}
  , hf = {}
  , G1 = {
    exports: {}
}
  , ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ul = Symbol.for("react.element")
  , BS = Symbol.for("react.portal")
  , $S = Symbol.for("react.fragment")
  , US = Symbol.for("react.strict_mode")
  , WS = Symbol.for("react.profiler")
  , HS = Symbol.for("react.provider")
  , YS = Symbol.for("react.context")
  , GS = Symbol.for("react.forward_ref")
  , XS = Symbol.for("react.suspense")
  , KS = Symbol.for("react.memo")
  , QS = Symbol.for("react.lazy")
  , j0 = Symbol.iterator;
function qS(t) {
    return t === null || typeof t != "object" ? null : (t = j0 && t[j0] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var X1 = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , K1 = Object.assign
  , Q1 = {};
function ia(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Q1,
    this.updater = n || X1
}
ia.prototype.isReactComponent = {};
ia.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
ia.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function q1() {}
q1.prototype = ia.prototype;
function Ip(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Q1,
    this.updater = n || X1
}
var zp = Ip.prototype = new q1;
zp.constructor = Ip;
K1(zp, ia.prototype);
zp.isPureReactComponent = !0;
var V0 = Array.isArray
  , Z1 = Object.prototype.hasOwnProperty
  , Bp = {
    current: null
}
  , J1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ev(t, e, n) {
    var r, i = {}, o = null, s = null;
    if (e != null)
        for (r in e.ref !== void 0 && (s = e.ref),
        e.key !== void 0 && (o = "" + e.key),
        e)
            Z1.call(e, r) && !J1.hasOwnProperty(r) && (i[r] = e[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (t && t.defaultProps)
        for (r in a = t.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Ul,
        type: t,
        key: o,
        ref: s,
        props: i,
        _owner: Bp.current
    }
}
function ZS(t, e) {
    return {
        $$typeof: Ul,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function $p(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Ul
}
function JS(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var F0 = /\/+/g;
function Kf(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? JS("" + t.key) : e.toString(36)
}
function Uu(t, e, n, r, i) {
    var o = typeof t;
    (o === "undefined" || o === "boolean") && (t = null);
    var s = !1;
    if (t === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case Ul:
            case BS:
                s = !0
            }
        }
    if (s)
        return s = t,
        i = i(s),
        t = r === "" ? "." + Kf(s, 0) : r,
        V0(i) ? (n = "",
        t != null && (n = t.replace(F0, "$&/") + "/"),
        Uu(i, e, n, "", function(u) {
            return u
        })) : i != null && ($p(i) && (i = ZS(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(F0, "$&/") + "/") + t)),
        e.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    V0(t))
        for (var a = 0; a < t.length; a++) {
            o = t[a];
            var l = r + Kf(o, a);
            s += Uu(o, e, n, l, i)
        }
    else if (l = qS(t),
    typeof l == "function")
        for (t = l.call(t),
        a = 0; !(o = t.next()).done; )
            o = o.value,
            l = r + Kf(o, a++),
            s += Uu(o, e, n, l, i);
    else if (o === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function su(t, e, n) {
    if (t == null)
        return t;
    var r = []
      , i = 0;
    return Uu(t, r, "", "", function(o) {
        return e.call(n, o, i++)
    }),
    r
}
function eC(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var Xt = {
    current: null
}
  , Wu = {
    transition: null
}
  , tC = {
    ReactCurrentDispatcher: Xt,
    ReactCurrentBatchConfig: Wu,
    ReactCurrentOwner: Bp
};
ie.Children = {
    map: su,
    forEach: function(t, e, n) {
        su(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return su(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return su(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!$p(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
ie.Component = ia;
ie.Fragment = $S;
ie.Profiler = WS;
ie.PureComponent = Ip;
ie.StrictMode = US;
ie.Suspense = XS;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tC;
ie.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = K1({}, t.props)
      , i = t.key
      , o = t.ref
      , s = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (o = e.ref,
        s = Bp.current),
        e.key !== void 0 && (i = "" + e.key),
        t.type && t.type.defaultProps)
            var a = t.type.defaultProps;
        for (l in e)
            Z1.call(e, l) && !J1.hasOwnProperty(l) && (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Ul,
        type: t.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
ie.createContext = function(t) {
    return t = {
        $$typeof: YS,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: HS,
        _context: t
    },
    t.Consumer = t
}
;
ie.createElement = ev;
ie.createFactory = function(t) {
    var e = ev.bind(null, t);
    return e.type = t,
    e
}
;
ie.createRef = function() {
    return {
        current: null
    }
}
;
ie.forwardRef = function(t) {
    return {
        $$typeof: GS,
        render: t
    }
}
;
ie.isValidElement = $p;
ie.lazy = function(t) {
    return {
        $$typeof: QS,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: eC
    }
}
;
ie.memo = function(t, e) {
    return {
        $$typeof: KS,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
ie.startTransition = function(t) {
    var e = Wu.transition;
    Wu.transition = {};
    try {
        t()
    } finally {
        Wu.transition = e
    }
}
;
ie.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
ie.useCallback = function(t, e) {
    return Xt.current.useCallback(t, e)
}
;
ie.useContext = function(t) {
    return Xt.current.useContext(t)
}
;
ie.useDebugValue = function() {}
;
ie.useDeferredValue = function(t) {
    return Xt.current.useDeferredValue(t)
}
;
ie.useEffect = function(t, e) {
    return Xt.current.useEffect(t, e)
}
;
ie.useId = function() {
    return Xt.current.useId()
}
;
ie.useImperativeHandle = function(t, e, n) {
    return Xt.current.useImperativeHandle(t, e, n)
}
;
ie.useInsertionEffect = function(t, e) {
    return Xt.current.useInsertionEffect(t, e)
}
;
ie.useLayoutEffect = function(t, e) {
    return Xt.current.useLayoutEffect(t, e)
}
;
ie.useMemo = function(t, e) {
    return Xt.current.useMemo(t, e)
}
;
ie.useReducer = function(t, e, n) {
    return Xt.current.useReducer(t, e, n)
}
;
ie.useRef = function(t) {
    return Xt.current.useRef(t)
}
;
ie.useState = function(t) {
    return Xt.current.useState(t)
}
;
ie.useSyncExternalStore = function(t, e, n) {
    return Xt.current.useSyncExternalStore(t, e, n)
}
;
ie.useTransition = function() {
    return Xt.current.useTransition()
}
;
ie.version = "18.2.0";
G1.exports = ie;
var E = G1.exports;
const di = zS(E)
  , nC = IS({
    __proto__: null,
    default: di
}, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rC = E
  , iC = Symbol.for("react.element")
  , oC = Symbol.for("react.fragment")
  , sC = Object.prototype.hasOwnProperty
  , aC = rC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , lC = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function tv(t, e, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
    for (r in e)
        sC.call(e, r) && !lC.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps,
        e)
            i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: iC,
        type: t,
        key: o,
        ref: s,
        props: i,
        _owner: aC.current
    }
}
hf.Fragment = oC;
hf.jsx = tv;
hf.jsxs = tv;
Y1.exports = hf;
var P = Y1.exports
  , Jd = {}
  , nv = {
    exports: {}
}
  , An = {}
  , rv = {
    exports: {}
}
  , iv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(R, V) {
        var k = R.length;
        R.push(V);
        e: for (; 0 < k; ) {
            var O = k - 1 >>> 1
              , W = R[O];
            if (0 < i(W, V))
                R[O] = V,
                R[k] = W,
                k = O;
            else
                break e
        }
    }
    function n(R) {
        return R.length === 0 ? null : R[0]
    }
    function r(R) {
        if (R.length === 0)
            return null;
        var V = R[0]
          , k = R.pop();
        if (k !== V) {
            R[0] = k;
            e: for (var O = 0, W = R.length, ge = W >>> 1; O < ge; ) {
                var Z = 2 * (O + 1) - 1
                  , oe = R[Z]
                  , se = Z + 1
                  , he = R[se];
                if (0 > i(oe, k))
                    se < W && 0 > i(he, oe) ? (R[O] = he,
                    R[se] = k,
                    O = se) : (R[O] = oe,
                    R[Z] = k,
                    O = Z);
                else if (se < W && 0 > i(he, k))
                    R[O] = he,
                    R[se] = k,
                    O = se;
                else
                    break e
            }
        }
        return V
    }
    function i(R, V) {
        var k = R.sortIndex - V.sortIndex;
        return k !== 0 ? k : R.id - V.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        t.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , a = s.now();
        t.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , h = !1
      , m = !1
      , p = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(R) {
        for (var V = n(u); V !== null; ) {
            if (V.callback === null)
                r(u);
            else if (V.startTime <= R)
                r(u),
                V.sortIndex = V.expirationTime,
                e(l, V);
            else
                break;
            V = n(u)
        }
    }
    function _(R) {
        if (p = !1,
        v(R),
        !m)
            if (n(l) !== null)
                m = !0,
                H(w);
            else {
                var V = n(u);
                V !== null && I(_, V.startTime - R)
            }
    }
    function w(R, V) {
        m = !1,
        p && (p = !1,
        y(T),
        T = -1),
        h = !0;
        var k = d;
        try {
            for (v(V),
            f = n(l); f !== null && (!(f.expirationTime > V) || R && !b()); ) {
                var O = f.callback;
                if (typeof O == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var W = O(f.expirationTime <= V);
                    V = t.unstable_now(),
                    typeof W == "function" ? f.callback = W : f === n(l) && r(l),
                    v(V)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var ge = !0;
            else {
                var Z = n(u);
                Z !== null && I(_, Z.startTime - V),
                ge = !1
            }
            return ge
        } finally {
            f = null,
            d = k,
            h = !1
        }
    }
    var C = !1
      , S = null
      , T = -1
      , M = 5
      , A = -1;
    function b() {
        return !(t.unstable_now() - A < M)
    }
    function D() {
        if (S !== null) {
            var R = t.unstable_now();
            A = R;
            var V = !0;
            try {
                V = S(!0, R)
            } finally {
                V ? U() : (C = !1,
                S = null)
            }
        } else
            C = !1
    }
    var U;
    if (typeof g == "function")
        U = function() {
            g(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var j = new MessageChannel
          , F = j.port2;
        j.port1.onmessage = D,
        U = function() {
            F.postMessage(null)
        }
    } else
        U = function() {
            x(D, 0)
        }
        ;
    function H(R) {
        S = R,
        C || (C = !0,
        U())
    }
    function I(R, V) {
        T = x(function() {
            R(t.unstable_now())
        }, V)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(R) {
        R.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        m || h || (m = !0,
        H(w))
    }
    ,
    t.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < R ? Math.floor(1e3 / R) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    t.unstable_next = function(R) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var V = 3;
            break;
        default:
            V = d
        }
        var k = d;
        d = V;
        try {
            return R()
        } finally {
            d = k
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(R, V) {
        switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            R = 3
        }
        var k = d;
        d = R;
        try {
            return V()
        } finally {
            d = k
        }
    }
    ,
    t.unstable_scheduleCallback = function(R, V, k) {
        var O = t.unstable_now();
        switch (typeof k == "object" && k !== null ? (k = k.delay,
        k = typeof k == "number" && 0 < k ? O + k : O) : k = O,
        R) {
        case 1:
            var W = -1;
            break;
        case 2:
            W = 250;
            break;
        case 5:
            W = 1073741823;
            break;
        case 4:
            W = 1e4;
            break;
        default:
            W = 5e3
        }
        return W = k + W,
        R = {
            id: c++,
            callback: V,
            priorityLevel: R,
            startTime: k,
            expirationTime: W,
            sortIndex: -1
        },
        k > O ? (R.sortIndex = k,
        e(u, R),
        n(l) === null && R === n(u) && (p ? (y(T),
        T = -1) : p = !0,
        I(_, k - O))) : (R.sortIndex = W,
        e(l, R),
        m || h || (m = !0,
        H(w))),
        R
    }
    ,
    t.unstable_shouldYield = b,
    t.unstable_wrapCallback = function(R) {
        var V = d;
        return function() {
            var k = d;
            d = V;
            try {
                return R.apply(this, arguments)
            } finally {
                d = k
            }
        }
    }
}
)(iv);
rv.exports = iv;
var uC = rv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ov = E
  , Pn = uC;
function L(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var sv = new Set
  , dl = {};
function Wo(t, e) {
    Us(t, e),
    Us(t + "Capture", e)
}
function Us(t, e) {
    for (dl[t] = e,
    t = 0; t < e.length; t++)
        sv.add(e[t])
}
var Gr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , eh = Object.prototype.hasOwnProperty
  , cC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , I0 = {}
  , z0 = {};
function fC(t) {
    return eh.call(z0, t) ? !0 : eh.call(I0, t) ? !1 : cC.test(t) ? z0[t] = !0 : (I0[t] = !0,
    !1)
}
function dC(t, e, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function hC(t, e, n, r) {
    if (e === null || typeof e > "u" || dC(t, e, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function Kt(t, e, n, r, i, o, s) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var St = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    St[t] = new Kt(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    St[e] = new Kt(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    St[t] = new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    St[t] = new Kt(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    St[t] = new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    St[t] = new Kt(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    St[t] = new Kt(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    St[t] = new Kt(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    St[t] = new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var Up = /[\-:]([a-z])/g;
function Wp(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(Up, Wp);
    St[e] = new Kt(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(Up, Wp);
    St[e] = new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(Up, Wp);
    St[e] = new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    St[t] = new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)
});
St.xlinkHref = new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    St[t] = new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function Hp(t, e, n, r) {
    var i = St.hasOwnProperty(e) ? St[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (hC(e, n, i, r) && (n = null),
    r || i === null ? fC(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName,
    r = i.attributeNamespace,
    n === null ? t.removeAttribute(e) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var ti = ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , au = Symbol.for("react.element")
  , cs = Symbol.for("react.portal")
  , fs = Symbol.for("react.fragment")
  , Yp = Symbol.for("react.strict_mode")
  , th = Symbol.for("react.profiler")
  , av = Symbol.for("react.provider")
  , lv = Symbol.for("react.context")
  , Gp = Symbol.for("react.forward_ref")
  , nh = Symbol.for("react.suspense")
  , rh = Symbol.for("react.suspense_list")
  , Xp = Symbol.for("react.memo")
  , ai = Symbol.for("react.lazy")
  , uv = Symbol.for("react.offscreen")
  , B0 = Symbol.iterator;
function pa(t) {
    return t === null || typeof t != "object" ? null : (t = B0 && t[B0] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Fe = Object.assign, Qf;
function Ma(t) {
    if (Qf === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Qf = e && e[1] || ""
        }
    return `
` + Qf + t
}
var qf = !1;
function Zf(t, e) {
    if (!t || qf)
        return "";
    qf = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        qf = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? Ma(t) : ""
}
function pC(t) {
    switch (t.tag) {
    case 5:
        return Ma(t.type);
    case 16:
        return Ma("Lazy");
    case 13:
        return Ma("Suspense");
    case 19:
        return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = Zf(t.type, !1),
        t;
    case 11:
        return t = Zf(t.type.render, !1),
        t;
    case 1:
        return t = Zf(t.type, !0),
        t;
    default:
        return ""
    }
}
function ih(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case fs:
        return "Fragment";
    case cs:
        return "Portal";
    case th:
        return "Profiler";
    case Yp:
        return "StrictMode";
    case nh:
        return "Suspense";
    case rh:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case lv:
            return (t.displayName || "Context") + ".Consumer";
        case av:
            return (t._context.displayName || "Context") + ".Provider";
        case Gp:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Xp:
            return e = t.displayName || null,
            e !== null ? e : ih(t.type) || "Memo";
        case ai:
            e = t._payload,
            t = t._init;
            try {
                return ih(t(e))
            } catch {}
        }
    return null
}
function mC(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ih(e);
    case 8:
        return e === Yp ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function bi(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function cv(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function gC(t) {
    var e = cv(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function lu(t) {
    t._valueTracker || (t._valueTracker = gC(t))
}
function fv(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , r = "";
    return t && (r = cv(t) ? t.checked ? "true" : "false" : t.value),
    t = r,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function gc(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function oh(t, e) {
    var n = e.checked;
    return Fe({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function $0(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , r = e.checked != null ? e.checked : e.defaultChecked;
    n = bi(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function dv(t, e) {
    e = e.checked,
    e != null && Hp(t, "checked", e, !1)
}
function sh(t, e) {
    dv(t, e);
    var n = bi(e.value)
      , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? ah(t, e.type, n) : e.hasOwnProperty("defaultValue") && ah(t, e.type, bi(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function U0(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function ah(t, e, n) {
    (e !== "number" || gc(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Aa = Array.isArray;
function Rs(t, e, n, r) {
    if (t = t.options,
    e) {
        e = {};
        for (var i = 0; i < n.length; i++)
            e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++)
            i = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== i && (t[n].selected = i),
            i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + bi(n),
        e = null,
        i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0,
                r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}
function lh(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(L(91));
    return Fe({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function W0(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(L(92));
            if (Aa(n)) {
                if (1 < n.length)
                    throw Error(L(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: bi(n)
    }
}
function hv(t, e) {
    var n = bi(e.value)
      , r = bi(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r)
}
function H0(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function pv(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function uh(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? pv(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var uu, mv = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, r, i)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (uu = uu || document.createElement("div"),
        uu.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = uu.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function hl(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var Fa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , yC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fa).forEach(function(t) {
    yC.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        Fa[e] = Fa[t]
    })
});
function gv(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Fa.hasOwnProperty(t) && Fa[t] ? ("" + e).trim() : e + "px"
}
function yv(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = gv(n, e[n], r);
            n === "float" && (n = "cssFloat"),
            r ? t.setProperty(n, i) : t[n] = i
        }
}
var vC = Fe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ch(t, e) {
    if (e) {
        if (vC[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(L(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(L(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(L(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(L(62))
    }
}
function fh(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var dh = null;
function Kp(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var hh = null
  , Ns = null
  , Ds = null;
function Y0(t) {
    if (t = Yl(t)) {
        if (typeof hh != "function")
            throw Error(L(280));
        var e = t.stateNode;
        e && (e = vf(e),
        hh(t.stateNode, t.type, e))
    }
}
function vv(t) {
    Ns ? Ds ? Ds.push(t) : Ds = [t] : Ns = t
}
function xv() {
    if (Ns) {
        var t = Ns
          , e = Ds;
        if (Ds = Ns = null,
        Y0(t),
        e)
            for (t = 0; t < e.length; t++)
                Y0(e[t])
    }
}
function _v(t, e) {
    return t(e)
}
function wv() {}
var Jf = !1;
function Sv(t, e, n) {
    if (Jf)
        return t(e, n);
    Jf = !0;
    try {
        return _v(t, e, n)
    } finally {
        Jf = !1,
        (Ns !== null || Ds !== null) && (wv(),
        xv())
    }
}
function pl(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var r = vf(n);
    if (r === null)
        return null;
    n = r[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (t = t.type,
        r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !r;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(L(231, e, typeof n));
    return n
}
var ph = !1;
if (Gr)
    try {
        var ma = {};
        Object.defineProperty(ma, "passive", {
            get: function() {
                ph = !0
            }
        }),
        window.addEventListener("test", ma, ma),
        window.removeEventListener("test", ma, ma)
    } catch {
        ph = !1
    }
function xC(t, e, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Ia = !1
  , yc = null
  , vc = !1
  , mh = null
  , _C = {
    onError: function(t) {
        Ia = !0,
        yc = t
    }
};
function wC(t, e, n, r, i, o, s, a, l) {
    Ia = !1,
    yc = null,
    xC.apply(_C, arguments)
}
function SC(t, e, n, r, i, o, s, a, l) {
    if (wC.apply(this, arguments),
    Ia) {
        if (Ia) {
            var u = yc;
            Ia = !1,
            yc = null
        } else
            throw Error(L(198));
        vc || (vc = !0,
        mh = u)
    }
}
function Ho(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function Cv(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function G0(t) {
    if (Ho(t) !== t)
        throw Error(L(188))
}
function CC(t) {
    var e = t.alternate;
    if (!e) {
        if (e = Ho(t),
        e === null)
            throw Error(L(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return G0(i),
                    t;
                if (o === r)
                    return G0(i),
                    e;
                o = o.sibling
            }
            throw Error(L(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(L(189))
            }
        }
        if (n.alternate !== r)
            throw Error(L(190))
    }
    if (n.tag !== 3)
        throw Error(L(188));
    return n.stateNode.current === n ? t : e
}
function kv(t) {
    return t = CC(t),
    t !== null ? Tv(t) : null
}
function Tv(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Tv(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Pv = Pn.unstable_scheduleCallback
  , X0 = Pn.unstable_cancelCallback
  , kC = Pn.unstable_shouldYield
  , TC = Pn.unstable_requestPaint
  , Xe = Pn.unstable_now
  , PC = Pn.unstable_getCurrentPriorityLevel
  , Qp = Pn.unstable_ImmediatePriority
  , Ev = Pn.unstable_UserBlockingPriority
  , xc = Pn.unstable_NormalPriority
  , EC = Pn.unstable_LowPriority
  , Mv = Pn.unstable_IdlePriority
  , pf = null
  , Sr = null;
function MC(t) {
    if (Sr && typeof Sr.onCommitFiberRoot == "function")
        try {
            Sr.onCommitFiberRoot(pf, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var or = Math.clz32 ? Math.clz32 : NC
  , AC = Math.log
  , RC = Math.LN2;
function NC(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (AC(t) / RC | 0) | 0
}
var cu = 64
  , fu = 4194304;
function Ra(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function _c(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = t.suspendedLanes
      , o = t.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Ra(a) : (o &= s,
        o !== 0 && (r = Ra(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = Ra(s) : o !== 0 && (r = Ra(o));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r,
    o = e & -e,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= r; 0 < e; )
            n = 31 - or(e),
            i = 1 << n,
            r |= t[n],
            e &= ~i;
    return r
}
function DC(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function OC(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, o = t.pendingLanes; 0 < o; ) {
        var s = 31 - or(o)
          , a = 1 << s
          , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = DC(a, e)) : l <= e && (t.expiredLanes |= a),
        o &= ~a
    }
}
function gh(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function Av() {
    var t = cu;
    return cu <<= 1,
    !(cu & 4194240) && (cu = 64),
    t
}
function ed(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function Wl(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - or(e),
    t[e] = n
}
function LC(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var i = 31 - or(n)
          , o = 1 << i;
        e[i] = 0,
        r[i] = -1,
        t[i] = -1,
        n &= ~o
    }
}
function qp(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var r = 31 - or(n)
          , i = 1 << r;
        i & e | t[r] & e && (t[r] |= e),
        n &= ~i
    }
}
var ye = 0;
function Rv(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Nv, Zp, Dv, Ov, Lv, yh = !1, du = [], wi = null, Si = null, Ci = null, ml = new Map, gl = new Map, ci = [], bC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function K0(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        wi = null;
        break;
    case "dragenter":
    case "dragleave":
        Si = null;
        break;
    case "mouseover":
    case "mouseout":
        Ci = null;
        break;
    case "pointerover":
    case "pointerout":
        ml.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        gl.delete(e.pointerId)
    }
}
function ga(t, e, n, r, i, o) {
    return t === null || t.nativeEvent !== o ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    e !== null && (e = Yl(e),
    e !== null && Zp(e)),
    t) : (t.eventSystemFlags |= r,
    e = t.targetContainers,
    i !== null && e.indexOf(i) === -1 && e.push(i),
    t)
}
function jC(t, e, n, r, i) {
    switch (e) {
    case "focusin":
        return wi = ga(wi, t, e, n, r, i),
        !0;
    case "dragenter":
        return Si = ga(Si, t, e, n, r, i),
        !0;
    case "mouseover":
        return Ci = ga(Ci, t, e, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return ml.set(o, ga(ml.get(o) || null, t, e, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        gl.set(o, ga(gl.get(o) || null, t, e, n, r, i)),
        !0
    }
    return !1
}
function bv(t) {
    var e = yo(t.target);
    if (e !== null) {
        var n = Ho(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = Cv(n),
                e !== null) {
                    t.blockedOn = e,
                    Lv(t.priority, function() {
                        Dv(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function Hu(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = vh(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type,n);
            dh = r,
            n.target.dispatchEvent(r),
            dh = null
        } else
            return e = Yl(n),
            e !== null && Zp(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Q0(t, e, n) {
    Hu(t) && n.delete(e)
}
function VC() {
    yh = !1,
    wi !== null && Hu(wi) && (wi = null),
    Si !== null && Hu(Si) && (Si = null),
    Ci !== null && Hu(Ci) && (Ci = null),
    ml.forEach(Q0),
    gl.forEach(Q0)
}
function ya(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    yh || (yh = !0,
    Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority, VC)))
}
function yl(t) {
    function e(i) {
        return ya(i, t)
    }
    if (0 < du.length) {
        ya(du[0], t);
        for (var n = 1; n < du.length; n++) {
            var r = du[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (wi !== null && ya(wi, t),
    Si !== null && ya(Si, t),
    Ci !== null && ya(Ci, t),
    ml.forEach(e),
    gl.forEach(e),
    n = 0; n < ci.length; n++)
        r = ci[n],
        r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < ci.length && (n = ci[0],
    n.blockedOn === null); )
        bv(n),
        n.blockedOn === null && ci.shift()
}
var Os = ti.ReactCurrentBatchConfig
  , wc = !0;
function FC(t, e, n, r) {
    var i = ye
      , o = Os.transition;
    Os.transition = null;
    try {
        ye = 1,
        Jp(t, e, n, r)
    } finally {
        ye = i,
        Os.transition = o
    }
}
function IC(t, e, n, r) {
    var i = ye
      , o = Os.transition;
    Os.transition = null;
    try {
        ye = 4,
        Jp(t, e, n, r)
    } finally {
        ye = i,
        Os.transition = o
    }
}
function Jp(t, e, n, r) {
    if (wc) {
        var i = vh(t, e, n, r);
        if (i === null)
            cd(t, e, r, Sc, n),
            K0(t, r);
        else if (jC(i, t, e, n, r))
            r.stopPropagation();
        else if (K0(t, r),
        e & 4 && -1 < bC.indexOf(t)) {
            for (; i !== null; ) {
                var o = Yl(i);
                if (o !== null && Nv(o),
                o = vh(t, e, n, r),
                o === null && cd(t, e, r, Sc, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            cd(t, e, r, null, n)
    }
}
var Sc = null;
function vh(t, e, n, r) {
    if (Sc = null,
    t = Kp(r),
    t = yo(t),
    t !== null)
        if (e = Ho(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = Cv(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return Sc = t,
    null
}
function jv(t) {
    switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (PC()) {
        case Qp:
            return 1;
        case Ev:
            return 4;
        case xc:
        case EC:
            return 16;
        case Mv:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var hi = null
  , em = null
  , Yu = null;
function Vv() {
    if (Yu)
        return Yu;
    var t, e = em, n = e.length, r, i = "value"in hi ? hi.value : hi.textContent, o = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++)
        ;
    var s = n - t;
    for (r = 1; r <= s && e[n - r] === i[o - r]; r++)
        ;
    return Yu = i.slice(t, 1 < r ? 1 - r : void 0)
}
function Gu(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function hu() {
    return !0
}
function q0() {
    return !1
}
function Rn(t) {
    function e(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in t)
            t.hasOwnProperty(a) && (n = t[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hu : q0,
        this.isPropagationStopped = q0,
        this
    }
    return Fe(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = hu)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = hu)
        },
        persist: function() {},
        isPersistent: hu
    }),
    e
}
var oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, tm = Rn(oa), Hl = Fe({}, oa, {
    view: 0,
    detail: 0
}), zC = Rn(Hl), td, nd, va, mf = Fe({}, Hl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nm,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== va && (va && t.type === "mousemove" ? (td = t.screenX - va.screenX,
        nd = t.screenY - va.screenY) : nd = td = 0,
        va = t),
        td)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : nd
    }
}), Z0 = Rn(mf), BC = Fe({}, mf, {
    dataTransfer: 0
}), $C = Rn(BC), UC = Fe({}, Hl, {
    relatedTarget: 0
}), rd = Rn(UC), WC = Fe({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), HC = Rn(WC), YC = Fe({}, oa, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), GC = Rn(YC), XC = Fe({}, oa, {
    data: 0
}), J0 = Rn(XC), KC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, QC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, qC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function ZC(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = qC[t]) ? !!e[t] : !1
}
function nm() {
    return ZC
}
var JC = Fe({}, Hl, {
    key: function(t) {
        if (t.key) {
            var e = KC[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = Gu(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? QC[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nm,
    charCode: function(t) {
        return t.type === "keypress" ? Gu(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? Gu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , ek = Rn(JC)
  , tk = Fe({}, mf, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , eg = Rn(tk)
  , nk = Fe({}, Hl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nm
})
  , rk = Rn(nk)
  , ik = Fe({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , ok = Rn(ik)
  , sk = Fe({}, mf, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ak = Rn(sk)
  , lk = [9, 13, 27, 32]
  , rm = Gr && "CompositionEvent"in window
  , za = null;
Gr && "documentMode"in document && (za = document.documentMode);
var uk = Gr && "TextEvent"in window && !za
  , Fv = Gr && (!rm || za && 8 < za && 11 >= za)
  , tg = String.fromCharCode(32)
  , ng = !1;
function Iv(t, e) {
    switch (t) {
    case "keyup":
        return lk.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function zv(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var ds = !1;
function ck(t, e) {
    switch (t) {
    case "compositionend":
        return zv(e);
    case "keypress":
        return e.which !== 32 ? null : (ng = !0,
        tg);
    case "textInput":
        return t = e.data,
        t === tg && ng ? null : t;
    default:
        return null
    }
}
function fk(t, e) {
    if (ds)
        return t === "compositionend" || !rm && Iv(t, e) ? (t = Vv(),
        Yu = em = hi = null,
        ds = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return Fv && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var dk = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function rg(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!dk[t.type] : e === "textarea"
}
function Bv(t, e, n, r) {
    vv(r),
    e = Cc(e, "onChange"),
    0 < e.length && (n = new tm("onChange","change",null,n,r),
    t.push({
        event: n,
        listeners: e
    }))
}
var Ba = null
  , vl = null;
function hk(t) {
    Zv(t, 0)
}
function gf(t) {
    var e = ms(t);
    if (fv(e))
        return t
}
function pk(t, e) {
    if (t === "change")
        return e
}
var $v = !1;
if (Gr) {
    var id;
    if (Gr) {
        var od = "oninput"in document;
        if (!od) {
            var ig = document.createElement("div");
            ig.setAttribute("oninput", "return;"),
            od = typeof ig.oninput == "function"
        }
        id = od
    } else
        id = !1;
    $v = id && (!document.documentMode || 9 < document.documentMode)
}
function og() {
    Ba && (Ba.detachEvent("onpropertychange", Uv),
    vl = Ba = null)
}
function Uv(t) {
    if (t.propertyName === "value" && gf(vl)) {
        var e = [];
        Bv(e, vl, t, Kp(t)),
        Sv(hk, e)
    }
}
function mk(t, e, n) {
    t === "focusin" ? (og(),
    Ba = e,
    vl = n,
    Ba.attachEvent("onpropertychange", Uv)) : t === "focusout" && og()
}
function gk(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return gf(vl)
}
function yk(t, e) {
    if (t === "click")
        return gf(e)
}
function vk(t, e) {
    if (t === "input" || t === "change")
        return gf(e)
}
function xk(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var lr = typeof Object.is == "function" ? Object.is : xk;
function xl(t, e) {
    if (lr(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!eh.call(e, i) || !lr(t[i], e[i]))
            return !1
    }
    return !0
}
function sg(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function ag(t, e) {
    var n = sg(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length,
            t <= e && r >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = sg(n)
    }
}
function Wv(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Wv(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Hv() {
    for (var t = window, e = gc(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = gc(t.document)
    }
    return e
}
function im(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function _k(t) {
    var e = Hv()
      , n = t.focusedElem
      , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && Wv(n.ownerDocument.documentElement, n)) {
        if (r !== null && im(n)) {
            if (e = r.start,
            t = r.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !t.extend && o > r && (i = r,
                r = o,
                o = i),
                i = ag(n, o);
                var s = ag(n, r);
                i && s && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== s.node || t.focusOffset !== s.offset) && (e = e.createRange(),
                e.setStart(i.node, i.offset),
                t.removeAllRanges(),
                o > r ? (t.addRange(e),
                t.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var wk = Gr && "documentMode"in document && 11 >= document.documentMode
  , hs = null
  , xh = null
  , $a = null
  , _h = !1;
function lg(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _h || hs == null || hs !== gc(r) || (r = hs,
    "selectionStart"in r && im(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    $a && xl($a, r) || ($a = r,
    r = Cc(xh, "onSelect"),
    0 < r.length && (e = new tm("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: r
    }),
    e.target = hs)))
}
function pu(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var ps = {
    animationend: pu("Animation", "AnimationEnd"),
    animationiteration: pu("Animation", "AnimationIteration"),
    animationstart: pu("Animation", "AnimationStart"),
    transitionend: pu("Transition", "TransitionEnd")
}
  , sd = {}
  , Yv = {};
Gr && (Yv = document.createElement("div").style,
"AnimationEvent"in window || (delete ps.animationend.animation,
delete ps.animationiteration.animation,
delete ps.animationstart.animation),
"TransitionEvent"in window || delete ps.transitionend.transition);
function yf(t) {
    if (sd[t])
        return sd[t];
    if (!ps[t])
        return t;
    var e = ps[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Yv)
            return sd[t] = e[n];
    return t
}
var Gv = yf("animationend")
  , Xv = yf("animationiteration")
  , Kv = yf("animationstart")
  , Qv = yf("transitionend")
  , qv = new Map
  , ug = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wi(t, e) {
    qv.set(t, e),
    Wo(e, [t])
}
for (var ad = 0; ad < ug.length; ad++) {
    var ld = ug[ad]
      , Sk = ld.toLowerCase()
      , Ck = ld[0].toUpperCase() + ld.slice(1);
    Wi(Sk, "on" + Ck)
}
Wi(Gv, "onAnimationEnd");
Wi(Xv, "onAnimationIteration");
Wi(Kv, "onAnimationStart");
Wi("dblclick", "onDoubleClick");
Wi("focusin", "onFocus");
Wi("focusout", "onBlur");
Wi(Qv, "onTransitionEnd");
Us("onMouseEnter", ["mouseout", "mouseover"]);
Us("onMouseLeave", ["mouseout", "mouseover"]);
Us("onPointerEnter", ["pointerout", "pointerover"]);
Us("onPointerLeave", ["pointerout", "pointerover"]);
Wo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Na = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , kk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));
function cg(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
    SC(r, e, void 0, t),
    t.currentTarget = null
}
function Zv(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (e)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    cg(i, a, u),
                    o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    cg(i, a, u),
                    o = l
                }
        }
    }
    if (vc)
        throw t = mh,
        vc = !1,
        mh = null,
        t
}
function ke(t, e) {
    var n = e[Th];
    n === void 0 && (n = e[Th] = new Set);
    var r = t + "__bubble";
    n.has(r) || (Jv(e, t, 2, !1),
    n.add(r))
}
function ud(t, e, n) {
    var r = 0;
    e && (r |= 4),
    Jv(n, t, r, e)
}
var mu = "_reactListening" + Math.random().toString(36).slice(2);
function _l(t) {
    if (!t[mu]) {
        t[mu] = !0,
        sv.forEach(function(n) {
            n !== "selectionchange" && (kk.has(n) || ud(n, !1, t),
            ud(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[mu] || (e[mu] = !0,
        ud("selectionchange", !1, e))
    }
}
function Jv(t, e, n, r) {
    switch (jv(e)) {
    case 1:
        var i = FC;
        break;
    case 4:
        i = IC;
        break;
    default:
        i = Jp
    }
    n = i.bind(null, e, n, t),
    i = void 0,
    !ph || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0),
    r ? i !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
        passive: i
    }) : t.addEventListener(e, n, !1)
}
function cd(t, e, n, r, i) {
    var o = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = yo(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Sv(function() {
        var u = o
          , c = Kp(n)
          , f = [];
        e: {
            var d = qv.get(t);
            if (d !== void 0) {
                var h = tm
                  , m = t;
                switch (t) {
                case "keypress":
                    if (Gu(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = ek;
                    break;
                case "focusin":
                    m = "focus",
                    h = rd;
                    break;
                case "focusout":
                    m = "blur",
                    h = rd;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = rd;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = Z0;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = $C;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = rk;
                    break;
                case Gv:
                case Xv:
                case Kv:
                    h = HC;
                    break;
                case Qv:
                    h = ok;
                    break;
                case "scroll":
                    h = zC;
                    break;
                case "wheel":
                    h = ak;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = GC;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = eg
                }
                var p = (e & 4) !== 0
                  , x = !p && t === "scroll"
                  , y = p ? d !== null ? d + "Capture" : null : d;
                p = [];
                for (var g = u, v; g !== null; ) {
                    v = g;
                    var _ = v.stateNode;
                    if (v.tag === 5 && _ !== null && (v = _,
                    y !== null && (_ = pl(g, y),
                    _ != null && p.push(wl(g, _, v)))),
                    x)
                        break;
                    g = g.return
                }
                0 < p.length && (d = new h(d,m,null,n,c),
                f.push({
                    event: d,
                    listeners: p
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (d = t === "mouseover" || t === "pointerover",
                h = t === "mouseout" || t === "pointerout",
                d && n !== dh && (m = n.relatedTarget || n.fromElement) && (yo(m) || m[Xr]))
                    break e;
                if ((h || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                h ? (m = n.relatedTarget || n.toElement,
                h = u,
                m = m ? yo(m) : null,
                m !== null && (x = Ho(m),
                m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (h = null,
                m = u),
                h !== m)) {
                    if (p = Z0,
                    _ = "onMouseLeave",
                    y = "onMouseEnter",
                    g = "mouse",
                    (t === "pointerout" || t === "pointerover") && (p = eg,
                    _ = "onPointerLeave",
                    y = "onPointerEnter",
                    g = "pointer"),
                    x = h == null ? d : ms(h),
                    v = m == null ? d : ms(m),
                    d = new p(_,g + "leave",h,n,c),
                    d.target = x,
                    d.relatedTarget = v,
                    _ = null,
                    yo(c) === u && (p = new p(y,g + "enter",m,n,c),
                    p.target = v,
                    p.relatedTarget = x,
                    _ = p),
                    x = _,
                    h && m)
                        t: {
                            for (p = h,
                            y = m,
                            g = 0,
                            v = p; v; v = Jo(v))
                                g++;
                            for (v = 0,
                            _ = y; _; _ = Jo(_))
                                v++;
                            for (; 0 < g - v; )
                                p = Jo(p),
                                g--;
                            for (; 0 < v - g; )
                                y = Jo(y),
                                v--;
                            for (; g--; ) {
                                if (p === y || y !== null && p === y.alternate)
                                    break t;
                                p = Jo(p),
                                y = Jo(y)
                            }
                            p = null
                        }
                    else
                        p = null;
                    h !== null && fg(f, d, h, p, !1),
                    m !== null && x !== null && fg(f, x, m, p, !0)
                }
            }
            e: {
                if (d = u ? ms(u) : window,
                h = d.nodeName && d.nodeName.toLowerCase(),
                h === "select" || h === "input" && d.type === "file")
                    var w = pk;
                else if (rg(d))
                    if ($v)
                        w = vk;
                    else {
                        w = gk;
                        var C = mk
                    }
                else
                    (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = yk);
                if (w && (w = w(t, u))) {
                    Bv(f, w, n, c);
                    break e
                }
                C && C(t, d, u),
                t === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && ah(d, "number", d.value)
            }
            switch (C = u ? ms(u) : window,
            t) {
            case "focusin":
                (rg(C) || C.contentEditable === "true") && (hs = C,
                xh = u,
                $a = null);
                break;
            case "focusout":
                $a = xh = hs = null;
                break;
            case "mousedown":
                _h = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                _h = !1,
                lg(f, n, c);
                break;
            case "selectionchange":
                if (wk)
                    break;
            case "keydown":
            case "keyup":
                lg(f, n, c)
            }
            var S;
            if (rm)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                ds ? Iv(t, n) && (T = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (Fv && n.locale !== "ko" && (ds || T !== "onCompositionStart" ? T === "onCompositionEnd" && ds && (S = Vv()) : (hi = c,
            em = "value"in hi ? hi.value : hi.textContent,
            ds = !0)),
            C = Cc(u, T),
            0 < C.length && (T = new J0(T,t,null,n,c),
            f.push({
                event: T,
                listeners: C
            }),
            S ? T.data = S : (S = zv(n),
            S !== null && (T.data = S)))),
            (S = uk ? ck(t, n) : fk(t, n)) && (u = Cc(u, "onBeforeInput"),
            0 < u.length && (c = new J0("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = S))
        }
        Zv(f, e)
    })
}
function wl(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function Cc(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var i = t
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = pl(t, n),
        o != null && r.unshift(wl(t, o, i)),
        o = pl(t, e),
        o != null && r.push(wl(t, o, i))),
        t = t.return
    }
    return r
}
function Jo(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function fg(t, e, n, r, i) {
    for (var o = e._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = pl(n, o),
        l != null && s.unshift(wl(n, l, a))) : i || (l = pl(n, o),
        l != null && s.push(wl(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && t.push({
        event: e,
        listeners: s
    })
}
var Tk = /\r\n?/g
  , Pk = /\u0000|\uFFFD/g;
function dg(t) {
    return (typeof t == "string" ? t : "" + t).replace(Tk, `
`).replace(Pk, "")
}
function gu(t, e, n) {
    if (e = dg(e),
    dg(t) !== e && n)
        throw Error(L(425))
}
function kc() {}
var wh = null
  , Sh = null;
function Ch(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var kh = typeof setTimeout == "function" ? setTimeout : void 0
  , Ek = typeof clearTimeout == "function" ? clearTimeout : void 0
  , hg = typeof Promise == "function" ? Promise : void 0
  , Mk = typeof queueMicrotask == "function" ? queueMicrotask : typeof hg < "u" ? function(t) {
    return hg.resolve(null).then(t).catch(Ak)
}
: kh;
function Ak(t) {
    setTimeout(function() {
        throw t
    })
}
function fd(t, e) {
    var n = e
      , r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    t.removeChild(i),
                    yl(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    yl(e)
}
function ki(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function pg(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var sa = Math.random().toString(36).slice(2)
  , vr = "__reactFiber$" + sa
  , Sl = "__reactProps$" + sa
  , Xr = "__reactContainer$" + sa
  , Th = "__reactEvents$" + sa
  , Rk = "__reactListeners$" + sa
  , Nk = "__reactHandles$" + sa;
function yo(t) {
    var e = t[vr];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[Xr] || n[vr]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = pg(t); t !== null; ) {
                    if (n = t[vr])
                        return n;
                    t = pg(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function Yl(t) {
    return t = t[vr] || t[Xr],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function ms(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(L(33))
}
function vf(t) {
    return t[Sl] || null
}
var Ph = []
  , gs = -1;
function Hi(t) {
    return {
        current: t
    }
}
function Pe(t) {
    0 > gs || (t.current = Ph[gs],
    Ph[gs] = null,
    gs--)
}
function Se(t, e) {
    gs++,
    Ph[gs] = t.current,
    t.current = e
}
var ji = {}
  , bt = Hi(ji)
  , nn = Hi(!1)
  , Lo = ji;
function Ws(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return ji;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = e[o];
    return r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function rn(t) {
    return t = t.childContextTypes,
    t != null
}
function Tc() {
    Pe(nn),
    Pe(bt)
}
function mg(t, e, n) {
    if (bt.current !== ji)
        throw Error(L(168));
    Se(bt, e),
    Se(nn, n)
}
function ex(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e))
            throw Error(L(108, mC(t) || "Unknown", i));
    return Fe({}, n, r)
}
function Pc(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || ji,
    Lo = bt.current,
    Se(bt, t),
    Se(nn, nn.current),
    !0
}
function gg(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(L(169));
    n ? (t = ex(t, e, Lo),
    r.__reactInternalMemoizedMergedChildContext = t,
    Pe(nn),
    Pe(bt),
    Se(bt, t)) : Pe(nn),
    Se(nn, n)
}
var Or = null
  , xf = !1
  , dd = !1;
function tx(t) {
    Or === null ? Or = [t] : Or.push(t)
}
function Dk(t) {
    xf = !0,
    tx(t)
}
function Yi() {
    if (!dd && Or !== null) {
        dd = !0;
        var t = 0
          , e = ye;
        try {
            var n = Or;
            for (ye = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            Or = null,
            xf = !1
        } catch (i) {
            throw Or !== null && (Or = Or.slice(t + 1)),
            Pv(Qp, Yi),
            i
        } finally {
            ye = e,
            dd = !1
        }
    }
    return null
}
var ys = []
  , vs = 0
  , Ec = null
  , Mc = 0
  , Ln = []
  , bn = 0
  , bo = null
  , Vr = 1
  , Fr = "";
function so(t, e) {
    ys[vs++] = Mc,
    ys[vs++] = Ec,
    Ec = t,
    Mc = e
}
function nx(t, e, n) {
    Ln[bn++] = Vr,
    Ln[bn++] = Fr,
    Ln[bn++] = bo,
    bo = t;
    var r = Vr;
    t = Fr;
    var i = 32 - or(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - or(e) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        Vr = 1 << 32 - or(e) + i | n << i | r,
        Fr = o + t
    } else
        Vr = 1 << o | n << i | r,
        Fr = t
}
function om(t) {
    t.return !== null && (so(t, 1),
    nx(t, 1, 0))
}
function sm(t) {
    for (; t === Ec; )
        Ec = ys[--vs],
        ys[vs] = null,
        Mc = ys[--vs],
        ys[vs] = null;
    for (; t === bo; )
        bo = Ln[--bn],
        Ln[bn] = null,
        Fr = Ln[--bn],
        Ln[bn] = null,
        Vr = Ln[--bn],
        Ln[bn] = null
}
var kn = null
  , Cn = null
  , Ae = !1
  , rr = null;
function rx(t, e) {
    var n = Fn(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function yg(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        kn = t,
        Cn = ki(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        kn = t,
        Cn = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = bo !== null ? {
            id: Vr,
            overflow: Fr
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Fn(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        kn = t,
        Cn = null,
        !0) : !1;
    default:
        return !1
    }
}
function Eh(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Mh(t) {
    if (Ae) {
        var e = Cn;
        if (e) {
            var n = e;
            if (!yg(t, e)) {
                if (Eh(t))
                    throw Error(L(418));
                e = ki(n.nextSibling);
                var r = kn;
                e && yg(t, e) ? rx(r, n) : (t.flags = t.flags & -4097 | 2,
                Ae = !1,
                kn = t)
            }
        } else {
            if (Eh(t))
                throw Error(L(418));
            t.flags = t.flags & -4097 | 2,
            Ae = !1,
            kn = t
        }
    }
}
function vg(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    kn = t
}
function yu(t) {
    if (t !== kn)
        return !1;
    if (!Ae)
        return vg(t),
        Ae = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Ch(t.type, t.memoizedProps)),
    e && (e = Cn)) {
        if (Eh(t))
            throw ix(),
            Error(L(418));
        for (; e; )
            rx(t, e),
            e = ki(e.nextSibling)
    }
    if (vg(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(L(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Cn = ki(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Cn = null
        }
    } else
        Cn = kn ? ki(t.stateNode.nextSibling) : null;
    return !0
}
function ix() {
    for (var t = Cn; t; )
        t = ki(t.nextSibling)
}
function Hs() {
    Cn = kn = null,
    Ae = !1
}
function am(t) {
    rr === null ? rr = [t] : rr.push(t)
}
var Ok = ti.ReactCurrentBatchConfig;
function tr(t, e) {
    if (t && t.defaultProps) {
        e = Fe({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
var Ac = Hi(null)
  , Rc = null
  , xs = null
  , lm = null;
function um() {
    lm = xs = Rc = null
}
function cm(t) {
    var e = Ac.current;
    Pe(Ac),
    t._currentValue = e
}
function Ah(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function Ls(t, e) {
    Rc = t,
    lm = xs = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (tn = !0),
    t.firstContext = null)
}
function Wn(t) {
    var e = t._currentValue;
    if (lm !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        xs === null) {
            if (Rc === null)
                throw Error(L(308));
            xs = t,
            Rc.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            xs = xs.next = t;
    return e
}
var vo = null;
function fm(t) {
    vo === null ? vo = [t] : vo.push(t)
}
function ox(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n,
    fm(e)) : (n.next = i.next,
    i.next = n),
    e.interleaved = n,
    Kr(t, r)
}
function Kr(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var li = !1;
function dm(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function sx(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function $r(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Ti(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    de & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next,
        i.next = e),
        r.pending = e,
        Kr(t, n)
    }
    return i = r.interleaved,
    i === null ? (e.next = e,
    fm(r)) : (e.next = i.next,
    i.next = e),
    r.interleaved = e,
    Kr(t, n)
}
function Xu(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        qp(t, n)
    }
}
function xg(t, e) {
    var n = t.updateQueue
      , r = t.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = e : o = o.next = e
        } else
            i = o = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function Nc(t, e, n, r) {
    var i = t.updateQueue;
    li = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? o = u : s.next = u,
        s = l;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        c = u = l = null,
        a = o;
        do {
            var d = a.lane
              , h = a.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var m = t
                      , p = a;
                    switch (d = e,
                    h = n,
                    p.tag) {
                    case 1:
                        if (m = p.payload,
                        typeof m == "function") {
                            f = m.call(h, f, d);
                            break e
                        }
                        f = m;
                        break e;
                    case 3:
                        m.flags = m.flags & -65537 | 128;
                    case 0:
                        if (m = p.payload,
                        d = typeof m == "function" ? m.call(h, f, d) : m,
                        d == null)
                            break e;
                        f = Fe({}, f, d);
                        break e;
                    case 2:
                        li = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (t.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [a] : d.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = f) : c = c.next = h,
                s |= d;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                d = a,
                a = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (1);
        if (c === null && (l = f),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        e = i.shared.interleaved,
        e !== null) {
            i = e;
            do
                s |= i.lane,
                i = i.next;
            while (i !== e)
        } else
            o === null && (i.shared.lanes = 0);
        Vo |= s,
        t.lanes = s,
        t.memoizedState = f
    }
}
function _g(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(L(191, i));
                i.call(r)
            }
        }
}
var ax = new ov.Component().refs;
function Rh(t, e, n, r) {
    e = t.memoizedState,
    n = n(r, e),
    n = n == null ? e : Fe({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var _f = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? Ho(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = Gt()
          , i = Ei(t)
          , o = $r(r, i);
        o.payload = e,
        n != null && (o.callback = n),
        e = Ti(t, o, i),
        e !== null && (sr(e, t, i, r),
        Xu(e, t, i))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = Gt()
          , i = Ei(t)
          , o = $r(r, i);
        o.tag = 1,
        o.payload = e,
        n != null && (o.callback = n),
        e = Ti(t, o, i),
        e !== null && (sr(e, t, i, r),
        Xu(e, t, i))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = Gt()
          , r = Ei(t)
          , i = $r(n, r);
        i.tag = 2,
        e != null && (i.callback = e),
        e = Ti(t, i, r),
        e !== null && (sr(e, t, r, n),
        Xu(e, t, r))
    }
};
function wg(t, e, n, r, i, o, s) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, o, s) : e.prototype && e.prototype.isPureReactComponent ? !xl(n, r) || !xl(i, o) : !0
}
function lx(t, e, n) {
    var r = !1
      , i = ji
      , o = e.contextType;
    return typeof o == "object" && o !== null ? o = Wn(o) : (i = rn(e) ? Lo : bt.current,
    r = e.contextTypes,
    o = (r = r != null) ? Ws(t, i) : ji),
    e = new e(n,o),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = _f,
    t.stateNode = e,
    e._reactInternals = t,
    r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = i,
    t.__reactInternalMemoizedMaskedChildContext = o),
    e
}
function Sg(t, e, n, r) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && _f.enqueueReplaceState(e, e.state, null)
}
function Nh(t, e, n, r) {
    var i = t.stateNode;
    i.props = n,
    i.state = t.memoizedState,
    i.refs = ax,
    dm(t);
    var o = e.contextType;
    typeof o == "object" && o !== null ? i.context = Wn(o) : (o = rn(e) ? Lo : bt.current,
    i.context = Ws(t, o)),
    i.state = t.memoizedState,
    o = e.getDerivedStateFromProps,
    typeof o == "function" && (Rh(t, e, o, n),
    i.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    e !== i.state && _f.enqueueReplaceState(i, i.state, null),
    Nc(t, n, i, r),
    i.state = t.memoizedState),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}
function xa(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(L(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(L(147, t));
            var i = r
              , o = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(s) {
                var a = i.refs;
                a === ax && (a = i.refs = {}),
                s === null ? delete a[o] : a[o] = s
            }
            ,
            e._stringRef = o,
            e)
        }
        if (typeof t != "string")
            throw Error(L(284));
        if (!n._owner)
            throw Error(L(290, t))
    }
    return t
}
function vu(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(L(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function Cg(t) {
    var e = t._init;
    return e(t._payload)
}
function ux(t) {
    function e(y, g) {
        if (t) {
            var v = y.deletions;
            v === null ? (y.deletions = [g],
            y.flags |= 16) : v.push(g)
        }
    }
    function n(y, g) {
        if (!t)
            return null;
        for (; g !== null; )
            e(y, g),
            g = g.sibling;
        return null
    }
    function r(y, g) {
        for (y = new Map; g !== null; )
            g.key !== null ? y.set(g.key, g) : y.set(g.index, g),
            g = g.sibling;
        return y
    }
    function i(y, g) {
        return y = Mi(y, g),
        y.index = 0,
        y.sibling = null,
        y
    }
    function o(y, g, v) {
        return y.index = v,
        t ? (v = y.alternate,
        v !== null ? (v = v.index,
        v < g ? (y.flags |= 2,
        g) : v) : (y.flags |= 2,
        g)) : (y.flags |= 1048576,
        g)
    }
    function s(y) {
        return t && y.alternate === null && (y.flags |= 2),
        y
    }
    function a(y, g, v, _) {
        return g === null || g.tag !== 6 ? (g = xd(v, y.mode, _),
        g.return = y,
        g) : (g = i(g, v),
        g.return = y,
        g)
    }
    function l(y, g, v, _) {
        var w = v.type;
        return w === fs ? c(y, g, v.props.children, _, v.key) : g !== null && (g.elementType === w || typeof w == "object" && w !== null && w.$$typeof === ai && Cg(w) === g.type) ? (_ = i(g, v.props),
        _.ref = xa(y, g, v),
        _.return = y,
        _) : (_ = ec(v.type, v.key, v.props, null, y.mode, _),
        _.ref = xa(y, g, v),
        _.return = y,
        _)
    }
    function u(y, g, v, _) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== v.containerInfo || g.stateNode.implementation !== v.implementation ? (g = _d(v, y.mode, _),
        g.return = y,
        g) : (g = i(g, v.children || []),
        g.return = y,
        g)
    }
    function c(y, g, v, _, w) {
        return g === null || g.tag !== 7 ? (g = Po(v, y.mode, _, w),
        g.return = y,
        g) : (g = i(g, v),
        g.return = y,
        g)
    }
    function f(y, g, v) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return g = xd("" + g, y.mode, v),
            g.return = y,
            g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case au:
                return v = ec(g.type, g.key, g.props, null, y.mode, v),
                v.ref = xa(y, null, g),
                v.return = y,
                v;
            case cs:
                return g = _d(g, y.mode, v),
                g.return = y,
                g;
            case ai:
                var _ = g._init;
                return f(y, _(g._payload), v)
            }
            if (Aa(g) || pa(g))
                return g = Po(g, y.mode, v, null),
                g.return = y,
                g;
            vu(y, g)
        }
        return null
    }
    function d(y, g, v, _) {
        var w = g !== null ? g.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return w !== null ? null : a(y, g, "" + v, _);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case au:
                return v.key === w ? l(y, g, v, _) : null;
            case cs:
                return v.key === w ? u(y, g, v, _) : null;
            case ai:
                return w = v._init,
                d(y, g, w(v._payload), _)
            }
            if (Aa(v) || pa(v))
                return w !== null ? null : c(y, g, v, _, null);
            vu(y, v)
        }
        return null
    }
    function h(y, g, v, _, w) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return y = y.get(v) || null,
            a(g, y, "" + _, w);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case au:
                return y = y.get(_.key === null ? v : _.key) || null,
                l(g, y, _, w);
            case cs:
                return y = y.get(_.key === null ? v : _.key) || null,
                u(g, y, _, w);
            case ai:
                var C = _._init;
                return h(y, g, v, C(_._payload), w)
            }
            if (Aa(_) || pa(_))
                return y = y.get(v) || null,
                c(g, y, _, w, null);
            vu(g, _)
        }
        return null
    }
    function m(y, g, v, _) {
        for (var w = null, C = null, S = g, T = g = 0, M = null; S !== null && T < v.length; T++) {
            S.index > T ? (M = S,
            S = null) : M = S.sibling;
            var A = d(y, S, v[T], _);
            if (A === null) {
                S === null && (S = M);
                break
            }
            t && S && A.alternate === null && e(y, S),
            g = o(A, g, T),
            C === null ? w = A : C.sibling = A,
            C = A,
            S = M
        }
        if (T === v.length)
            return n(y, S),
            Ae && so(y, T),
            w;
        if (S === null) {
            for (; T < v.length; T++)
                S = f(y, v[T], _),
                S !== null && (g = o(S, g, T),
                C === null ? w = S : C.sibling = S,
                C = S);
            return Ae && so(y, T),
            w
        }
        for (S = r(y, S); T < v.length; T++)
            M = h(S, y, T, v[T], _),
            M !== null && (t && M.alternate !== null && S.delete(M.key === null ? T : M.key),
            g = o(M, g, T),
            C === null ? w = M : C.sibling = M,
            C = M);
        return t && S.forEach(function(b) {
            return e(y, b)
        }),
        Ae && so(y, T),
        w
    }
    function p(y, g, v, _) {
        var w = pa(v);
        if (typeof w != "function")
            throw Error(L(150));
        if (v = w.call(v),
        v == null)
            throw Error(L(151));
        for (var C = w = null, S = g, T = g = 0, M = null, A = v.next(); S !== null && !A.done; T++,
        A = v.next()) {
            S.index > T ? (M = S,
            S = null) : M = S.sibling;
            var b = d(y, S, A.value, _);
            if (b === null) {
                S === null && (S = M);
                break
            }
            t && S && b.alternate === null && e(y, S),
            g = o(b, g, T),
            C === null ? w = b : C.sibling = b,
            C = b,
            S = M
        }
        if (A.done)
            return n(y, S),
            Ae && so(y, T),
            w;
        if (S === null) {
            for (; !A.done; T++,
            A = v.next())
                A = f(y, A.value, _),
                A !== null && (g = o(A, g, T),
                C === null ? w = A : C.sibling = A,
                C = A);
            return Ae && so(y, T),
            w
        }
        for (S = r(y, S); !A.done; T++,
        A = v.next())
            A = h(S, y, T, A.value, _),
            A !== null && (t && A.alternate !== null && S.delete(A.key === null ? T : A.key),
            g = o(A, g, T),
            C === null ? w = A : C.sibling = A,
            C = A);
        return t && S.forEach(function(D) {
            return e(y, D)
        }),
        Ae && so(y, T),
        w
    }
    function x(y, g, v, _) {
        if (typeof v == "object" && v !== null && v.type === fs && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case au:
                e: {
                    for (var w = v.key, C = g; C !== null; ) {
                        if (C.key === w) {
                            if (w = v.type,
                            w === fs) {
                                if (C.tag === 7) {
                                    n(y, C.sibling),
                                    g = i(C, v.props.children),
                                    g.return = y,
                                    y = g;
                                    break e
                                }
                            } else if (C.elementType === w || typeof w == "object" && w !== null && w.$$typeof === ai && Cg(w) === C.type) {
                                n(y, C.sibling),
                                g = i(C, v.props),
                                g.ref = xa(y, C, v),
                                g.return = y,
                                y = g;
                                break e
                            }
                            n(y, C);
                            break
                        } else
                            e(y, C);
                        C = C.sibling
                    }
                    v.type === fs ? (g = Po(v.props.children, y.mode, _, v.key),
                    g.return = y,
                    y = g) : (_ = ec(v.type, v.key, v.props, null, y.mode, _),
                    _.ref = xa(y, g, v),
                    _.return = y,
                    y = _)
                }
                return s(y);
            case cs:
                e: {
                    for (C = v.key; g !== null; ) {
                        if (g.key === C)
                            if (g.tag === 4 && g.stateNode.containerInfo === v.containerInfo && g.stateNode.implementation === v.implementation) {
                                n(y, g.sibling),
                                g = i(g, v.children || []),
                                g.return = y,
                                y = g;
                                break e
                            } else {
                                n(y, g);
                                break
                            }
                        else
                            e(y, g);
                        g = g.sibling
                    }
                    g = _d(v, y.mode, _),
                    g.return = y,
                    y = g
                }
                return s(y);
            case ai:
                return C = v._init,
                x(y, g, C(v._payload), _)
            }
            if (Aa(v))
                return m(y, g, v, _);
            if (pa(v))
                return p(y, g, v, _);
            vu(y, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        g !== null && g.tag === 6 ? (n(y, g.sibling),
        g = i(g, v),
        g.return = y,
        y = g) : (n(y, g),
        g = xd(v, y.mode, _),
        g.return = y,
        y = g),
        s(y)) : n(y, g)
    }
    return x
}
var Ys = ux(!0)
  , cx = ux(!1)
  , Gl = {}
  , Cr = Hi(Gl)
  , Cl = Hi(Gl)
  , kl = Hi(Gl);
function xo(t) {
    if (t === Gl)
        throw Error(L(174));
    return t
}
function hm(t, e) {
    switch (Se(kl, e),
    Se(Cl, t),
    Se(Cr, Gl),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : uh(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = uh(e, t)
    }
    Pe(Cr),
    Se(Cr, e)
}
function Gs() {
    Pe(Cr),
    Pe(Cl),
    Pe(kl)
}
function fx(t) {
    xo(kl.current);
    var e = xo(Cr.current)
      , n = uh(e, t.type);
    e !== n && (Se(Cl, t),
    Se(Cr, n))
}
function pm(t) {
    Cl.current === t && (Pe(Cr),
    Pe(Cl))
}
var Oe = Hi(0);
function Dc(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var hd = [];
function mm() {
    for (var t = 0; t < hd.length; t++)
        hd[t]._workInProgressVersionPrimary = null;
    hd.length = 0
}
var Ku = ti.ReactCurrentDispatcher
  , pd = ti.ReactCurrentBatchConfig
  , jo = 0
  , Ve = null
  , rt = null
  , ft = null
  , Oc = !1
  , Ua = !1
  , Tl = 0
  , Lk = 0;
function Mt() {
    throw Error(L(321))
}
function gm(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!lr(t[n], e[n]))
            return !1;
    return !0
}
function ym(t, e, n, r, i, o) {
    if (jo = o,
    Ve = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    Ku.current = t === null || t.memoizedState === null ? Fk : Ik,
    t = n(r, i),
    Ua) {
        o = 0;
        do {
            if (Ua = !1,
            Tl = 0,
            25 <= o)
                throw Error(L(301));
            o += 1,
            ft = rt = null,
            e.updateQueue = null,
            Ku.current = zk,
            t = n(r, i)
        } while (Ua)
    }
    if (Ku.current = Lc,
    e = rt !== null && rt.next !== null,
    jo = 0,
    ft = rt = Ve = null,
    Oc = !1,
    e)
        throw Error(L(300));
    return t
}
function vm() {
    var t = Tl !== 0;
    return Tl = 0,
    t
}
function mr() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ft === null ? Ve.memoizedState = ft = t : ft = ft.next = t,
    ft
}
function Hn() {
    if (rt === null) {
        var t = Ve.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = rt.next;
    var e = ft === null ? Ve.memoizedState : ft.next;
    if (e !== null)
        ft = e,
        rt = t;
    else {
        if (t === null)
            throw Error(L(310));
        rt = t,
        t = {
            memoizedState: rt.memoizedState,
            baseState: rt.baseState,
            baseQueue: rt.baseQueue,
            queue: rt.queue,
            next: null
        },
        ft === null ? Ve.memoizedState = ft = t : ft = ft.next = t
    }
    return ft
}
function Pl(t, e) {
    return typeof e == "function" ? e(t) : e
}
function md(t) {
    var e = Hn()
      , n = e.queue;
    if (n === null)
        throw Error(L(311));
    n.lastRenderedReducer = t;
    var r = rt
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = o;
        do {
            var c = u.lane;
            if ((jo & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : t(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                s = r) : l = l.next = f,
                Ve.lanes |= c,
                Vo |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a,
        lr(r, e.memoizedState) || (tn = !0),
        e.memoizedState = r,
        e.baseState = s,
        e.baseQueue = l,
        n.lastRenderedState = r
    }
    if (t = n.interleaved,
    t !== null) {
        i = t;
        do
            o = i.lane,
            Ve.lanes |= o,
            Vo |= o,
            i = i.next;
        while (i !== t)
    } else
        i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function gd(t) {
    var e = Hn()
      , n = e.queue;
    if (n === null)
        throw Error(L(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch
      , i = n.pending
      , o = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = t(o, s.action),
            s = s.next;
        while (s !== i);
        lr(o, e.memoizedState) || (tn = !0),
        e.memoizedState = o,
        e.baseQueue === null && (e.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function dx() {}
function hx(t, e) {
    var n = Ve
      , r = Hn()
      , i = e()
      , o = !lr(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    tn = !0),
    r = r.queue,
    xm(gx.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || o || ft !== null && ft.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        El(9, mx.bind(null, n, r, i, e), void 0, null),
        dt === null)
            throw Error(L(349));
        jo & 30 || px(n, e, i)
    }
    return i
}
function px(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = Ve.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    Ve.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function mx(t, e, n, r) {
    e.value = n,
    e.getSnapshot = r,
    yx(e) && vx(t)
}
function gx(t, e, n) {
    return n(function() {
        yx(e) && vx(t)
    })
}
function yx(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !lr(t, n)
    } catch {
        return !0
    }
}
function vx(t) {
    var e = Kr(t, 1);
    e !== null && sr(e, t, 1, -1)
}
function kg(t) {
    var e = mr();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pl,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = Vk.bind(null, Ve, t),
    [e.memoizedState, t]
}
function El(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
    e = Ve.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    Ve.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (r = n.next,
    n.next = t,
    t.next = r,
    e.lastEffect = t)),
    t
}
function xx() {
    return Hn().memoizedState
}
function Qu(t, e, n, r) {
    var i = mr();
    Ve.flags |= t,
    i.memoizedState = El(1 | e, n, void 0, r === void 0 ? null : r)
}
function wf(t, e, n, r) {
    var i = Hn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (rt !== null) {
        var s = rt.memoizedState;
        if (o = s.destroy,
        r !== null && gm(r, s.deps)) {
            i.memoizedState = El(e, n, o, r);
            return
        }
    }
    Ve.flags |= t,
    i.memoizedState = El(1 | e, n, o, r)
}
function Tg(t, e) {
    return Qu(8390656, 8, t, e)
}
function xm(t, e) {
    return wf(2048, 8, t, e)
}
function _x(t, e) {
    return wf(4, 2, t, e)
}
function wx(t, e) {
    return wf(4, 4, t, e)
}
function Sx(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function Cx(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    wf(4, 4, Sx.bind(null, e, t), n)
}
function _m() {}
function kx(t, e) {
    var n = Hn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && gm(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
    t)
}
function Tx(t, e) {
    var n = Hn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && gm(e, r[1]) ? r[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function Px(t, e, n) {
    return jo & 21 ? (lr(n, e) || (n = Av(),
    Ve.lanes |= n,
    Vo |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    tn = !0),
    t.memoizedState = n)
}
function bk(t, e) {
    var n = ye;
    ye = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var r = pd.transition;
    pd.transition = {};
    try {
        t(!1),
        e()
    } finally {
        ye = n,
        pd.transition = r
    }
}
function Ex() {
    return Hn().memoizedState
}
function jk(t, e, n) {
    var r = Ei(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Mx(t))
        Ax(e, n);
    else if (n = ox(t, e, n, r),
    n !== null) {
        var i = Gt();
        sr(n, t, r, i),
        Rx(n, e, r)
    }
}
function Vk(t, e, n) {
    var r = Ei(t)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Mx(t))
        Ax(e, i);
    else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer,
        o !== null))
            try {
                var s = e.lastRenderedState
                  , a = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                lr(a, s)) {
                    var l = e.interleaved;
                    l === null ? (i.next = i,
                    fm(e)) : (i.next = l.next,
                    l.next = i),
                    e.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = ox(t, e, i, r),
        n !== null && (i = Gt(),
        sr(n, t, r, i),
        Rx(n, e, r))
    }
}
function Mx(t) {
    var e = t.alternate;
    return t === Ve || e !== null && e === Ve
}
function Ax(t, e) {
    Ua = Oc = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function Rx(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        qp(t, n)
    }
}
var Lc = {
    readContext: Wn,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useInsertionEffect: Mt,
    useLayoutEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useMutableSource: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    unstable_isNewReconciler: !1
}
  , Fk = {
    readContext: Wn,
    useCallback: function(t, e) {
        return mr().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: Wn,
    useEffect: Tg,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        Qu(4194308, 4, Sx.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return Qu(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return Qu(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = mr();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var r = mr();
        return e = n !== void 0 ? n(e) : e,
        r.memoizedState = r.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        r.queue = t,
        t = t.dispatch = jk.bind(null, Ve, t),
        [r.memoizedState, t]
    },
    useRef: function(t) {
        var e = mr();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: kg,
    useDebugValue: _m,
    useDeferredValue: function(t) {
        return mr().memoizedState = t
    },
    useTransition: function() {
        var t = kg(!1)
          , e = t[0];
        return t = bk.bind(null, t[1]),
        mr().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var r = Ve
          , i = mr();
        if (Ae) {
            if (n === void 0)
                throw Error(L(407));
            n = n()
        } else {
            if (n = e(),
            dt === null)
                throw Error(L(349));
            jo & 30 || px(r, e, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: e
        };
        return i.queue = o,
        Tg(gx.bind(null, r, o, t), [t]),
        r.flags |= 2048,
        El(9, mx.bind(null, r, o, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = mr()
          , e = dt.identifierPrefix;
        if (Ae) {
            var n = Fr
              , r = Vr;
            n = (r & ~(1 << 32 - or(r) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = Tl++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = Lk++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , Ik = {
    readContext: Wn,
    useCallback: kx,
    useContext: Wn,
    useEffect: xm,
    useImperativeHandle: Cx,
    useInsertionEffect: _x,
    useLayoutEffect: wx,
    useMemo: Tx,
    useReducer: md,
    useRef: xx,
    useState: function() {
        return md(Pl)
    },
    useDebugValue: _m,
    useDeferredValue: function(t) {
        var e = Hn();
        return Px(e, rt.memoizedState, t)
    },
    useTransition: function() {
        var t = md(Pl)[0]
          , e = Hn().memoizedState;
        return [t, e]
    },
    useMutableSource: dx,
    useSyncExternalStore: hx,
    useId: Ex,
    unstable_isNewReconciler: !1
}
  , zk = {
    readContext: Wn,
    useCallback: kx,
    useContext: Wn,
    useEffect: xm,
    useImperativeHandle: Cx,
    useInsertionEffect: _x,
    useLayoutEffect: wx,
    useMemo: Tx,
    useReducer: gd,
    useRef: xx,
    useState: function() {
        return gd(Pl)
    },
    useDebugValue: _m,
    useDeferredValue: function(t) {
        var e = Hn();
        return rt === null ? e.memoizedState = t : Px(e, rt.memoizedState, t)
    },
    useTransition: function() {
        var t = gd(Pl)[0]
          , e = Hn().memoizedState;
        return [t, e]
    },
    useMutableSource: dx,
    useSyncExternalStore: hx,
    useId: Ex,
    unstable_isNewReconciler: !1
};
function Xs(t, e) {
    try {
        var n = ""
          , r = e;
        do
            n += pC(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}
function yd(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function Dh(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Bk = typeof WeakMap == "function" ? WeakMap : Map;
function Nx(t, e, n) {
    n = $r(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        jc || (jc = !0,
        $h = r),
        Dh(t, e)
    }
    ,
    n
}
function Dx(t, e, n) {
    n = $r(-1, n),
    n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Dh(t, e)
        }
    }
    var o = t.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Dh(t, e),
        typeof r != "function" && (Pi === null ? Pi = new Set([this]) : Pi.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Pg(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new Bk;
        var i = new Set;
        r.set(e, i)
    } else
        i = r.get(e),
        i === void 0 && (i = new Set,
        r.set(e, i));
    i.has(n) || (i.add(n),
    t = tT.bind(null, t, e, n),
    e.then(t, t))
}
function Eg(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function Mg(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = i,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = $r(-1, 1),
    e.tag = 2,
    Ti(n, e, 1))),
    n.lanes |= 1),
    t)
}
var $k = ti.ReactCurrentOwner
  , tn = !1;
function Bt(t, e, n, r) {
    e.child = t === null ? cx(e, null, n, r) : Ys(e, t.child, n, r)
}
function Ag(t, e, n, r, i) {
    n = n.render;
    var o = e.ref;
    return Ls(e, i),
    r = ym(t, e, n, r, o, i),
    n = vm(),
    t !== null && !tn ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    Qr(t, e, i)) : (Ae && n && om(e),
    e.flags |= 1,
    Bt(t, e, r, i),
    e.child)
}
function Rg(t, e, n, r, i) {
    if (t === null) {
        var o = n.type;
        return typeof o == "function" && !Mm(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = o,
        Ox(t, e, o, r, i)) : (t = ec(n.type, null, r, e, e.mode, i),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (o = t.child,
    !(t.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : xl,
        n(s, r) && t.ref === e.ref)
            return Qr(t, e, i)
    }
    return e.flags |= 1,
    t = Mi(o, r),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function Ox(t, e, n, r, i) {
    if (t !== null) {
        var o = t.memoizedProps;
        if (xl(o, r) && t.ref === e.ref)
            if (tn = !1,
            e.pendingProps = r = o,
            (t.lanes & i) !== 0)
                t.flags & 131072 && (tn = !0);
            else
                return e.lanes = t.lanes,
                Qr(t, e, i)
    }
    return Oh(t, e, n, r, i)
}
function Lx(t, e, n) {
    var r = e.pendingProps
      , i = r.children
      , o = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Se(ws, vn),
            vn |= n;
        else {
            if (!(n & 1073741824))
                return t = o !== null ? o.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                Se(ws, vn),
                vn |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            Se(ws, vn),
            vn |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        e.memoizedState = null) : r = n,
        Se(ws, vn),
        vn |= r;
    return Bt(t, e, i, n),
    e.child
}
function bx(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function Oh(t, e, n, r, i) {
    var o = rn(n) ? Lo : bt.current;
    return o = Ws(e, o),
    Ls(e, i),
    n = ym(t, e, n, r, o, i),
    r = vm(),
    t !== null && !tn ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    Qr(t, e, i)) : (Ae && r && om(e),
    e.flags |= 1,
    Bt(t, e, n, i),
    e.child)
}
function Ng(t, e, n, r, i) {
    if (rn(n)) {
        var o = !0;
        Pc(e)
    } else
        o = !1;
    if (Ls(e, i),
    e.stateNode === null)
        qu(t, e),
        lx(e, n, r),
        Nh(e, n, r, i),
        r = !0;
    else if (t === null) {
        var s = e.stateNode
          , a = e.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Wn(u) : (u = rn(n) ? Lo : bt.current,
        u = Ws(e, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Sg(e, s, r, u),
        li = !1;
        var d = e.memoizedState;
        s.state = d,
        Nc(e, r, s, i),
        l = e.memoizedState,
        a !== r || d !== l || nn.current || li ? (typeof c == "function" && (Rh(e, n, c, r),
        l = e.memoizedState),
        (a = li || wg(e, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = r,
        e.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        r = !1)
    } else {
        s = e.stateNode,
        sx(t, e),
        a = e.memoizedProps,
        u = e.type === e.elementType ? a : tr(e.type, a),
        s.props = u,
        f = e.pendingProps,
        d = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Wn(l) : (l = rn(n) ? Lo : bt.current,
        l = Ws(e, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && Sg(e, s, r, l),
        li = !1,
        d = e.memoizedState,
        s.state = d,
        Nc(e, r, s, i);
        var m = e.memoizedState;
        a !== f || d !== m || nn.current || li ? (typeof h == "function" && (Rh(e, n, h, r),
        m = e.memoizedState),
        (u = li || wg(e, n, u, r, d, m, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, m, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, m, l)),
        typeof s.componentDidUpdate == "function" && (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = m),
        s.props = r,
        s.state = m,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return Lh(t, e, n, r, o, i)
}
function Lh(t, e, n, r, i, o) {
    bx(t, e);
    var s = (e.flags & 128) !== 0;
    if (!r && !s)
        return i && gg(e, n, !1),
        Qr(t, e, o);
    r = e.stateNode,
    $k.current = e;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    t !== null && s ? (e.child = Ys(e, t.child, null, o),
    e.child = Ys(e, null, a, o)) : Bt(t, e, a, o),
    e.memoizedState = r.state,
    i && gg(e, n, !0),
    e.child
}
function jx(t) {
    var e = t.stateNode;
    e.pendingContext ? mg(t, e.pendingContext, e.pendingContext !== e.context) : e.context && mg(t, e.context, !1),
    hm(t, e.containerInfo)
}
function Dg(t, e, n, r, i) {
    return Hs(),
    am(i),
    e.flags |= 256,
    Bt(t, e, n, r),
    e.child
}
var bh = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function jh(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function Vx(t, e, n) {
    var r = e.pendingProps, i = Oe.current, o = !1, s = (e.flags & 128) !== 0, a;
    if ((a = s) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1),
    Se(Oe, i & 1),
    t === null)
        return Mh(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (s = r.children,
        t = r.fallback,
        o ? (r = e.mode,
        o = e.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = kf(s, r, 0, null),
        t = Po(t, r, n, null),
        o.return = e,
        t.return = e,
        o.sibling = t,
        e.child = o,
        e.child.memoizedState = jh(n),
        e.memoizedState = bh,
        t) : wm(e, s));
    if (i = t.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return Uk(t, e, s, r, a, i, n);
    if (o) {
        o = r.fallback,
        s = e.mode,
        i = t.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && e.child !== i ? (r = e.child,
        r.childLanes = 0,
        r.pendingProps = l,
        e.deletions = null) : (r = Mi(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = Mi(a, o) : (o = Po(o, s, n, null),
        o.flags |= 2),
        o.return = e,
        r.return = e,
        r.sibling = o,
        e.child = r,
        r = o,
        o = e.child,
        s = t.child.memoizedState,
        s = s === null ? jh(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = t.childLanes & ~n,
        e.memoizedState = bh,
        r
    }
    return o = t.child,
    t = o.sibling,
    r = Mi(o, {
        mode: "visible",
        children: r.children
    }),
    !(e.mode & 1) && (r.lanes = n),
    r.return = e,
    r.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = r,
    e.memoizedState = null,
    r
}
function wm(t, e) {
    return e = kf({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function xu(t, e, n, r) {
    return r !== null && am(r),
    Ys(e, t.child, null, n),
    t = wm(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function Uk(t, e, n, r, i, o, s) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        r = yd(Error(L(422))),
        xu(t, e, s, r)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (o = r.fallback,
        i = e.mode,
        r = kf({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = Po(o, i, s, null),
        o.flags |= 2,
        r.return = e,
        o.return = e,
        r.sibling = o,
        e.child = r,
        e.mode & 1 && Ys(e, t.child, null, s),
        e.child.memoizedState = jh(s),
        e.memoizedState = bh,
        o);
    if (!(e.mode & 1))
        return xu(t, e, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(L(419)),
        r = yd(o, r, void 0),
        xu(t, e, s, r)
    }
    if (a = (s & t.childLanes) !== 0,
    tn || a) {
        if (r = dt,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Kr(t, i),
            sr(r, t, i, -1))
        }
        return Em(),
        r = yd(Error(L(421))),
        xu(t, e, s, r)
    }
    return i.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = nT.bind(null, t),
    i._reactRetry = e,
    null) : (t = o.treeContext,
    Cn = ki(i.nextSibling),
    kn = e,
    Ae = !0,
    rr = null,
    t !== null && (Ln[bn++] = Vr,
    Ln[bn++] = Fr,
    Ln[bn++] = bo,
    Vr = t.id,
    Fr = t.overflow,
    bo = e),
    e = wm(e, r.children),
    e.flags |= 4096,
    e)
}
function Og(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
    Ah(t.return, e, n)
}
function vd(t, e, n, r, i) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = e,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Fx(t, e, n) {
    var r = e.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Bt(t, e, r.children, n),
    r = Oe.current,
    r & 2)
        r = r & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && Og(t, n, e);
                else if (t.tag === 19)
                    Og(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        r &= 1
    }
    if (Se(Oe, r),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = e.child,
            i = null; n !== null; )
                t = n.alternate,
                t !== null && Dc(t) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = e.child,
            e.child = null) : (i = n.sibling,
            n.sibling = null),
            vd(e, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = e.child,
            e.child = null; i !== null; ) {
                if (t = i.alternate,
                t !== null && Dc(t) === null) {
                    e.child = i;
                    break
                }
                t = i.sibling,
                i.sibling = n,
                n = i,
                i = t
            }
            vd(e, !0, n, null, o);
            break;
        case "together":
            vd(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function qu(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function Qr(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    Vo |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(L(153));
    if (e.child !== null) {
        for (t = e.child,
        n = Mi(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = Mi(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function Wk(t, e, n) {
    switch (e.tag) {
    case 3:
        jx(e),
        Hs();
        break;
    case 5:
        fx(e);
        break;
    case 1:
        rn(e.type) && Pc(e);
        break;
    case 4:
        hm(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , i = e.memoizedProps.value;
        Se(Ac, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Se(Oe, Oe.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? Vx(t, e, n) : (Se(Oe, Oe.current & 1),
            t = Qr(t, e, n),
            t !== null ? t.sibling : null);
        Se(Oe, Oe.current & 1);
        break;
    case 19:
        if (r = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (r)
                return Fx(t, e, n);
            e.flags |= 128
        }
        if (i = e.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        Se(Oe, Oe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Lx(t, e, n)
    }
    return Qr(t, e, n)
}
var Ix, Vh, zx, Bx;
Ix = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Vh = function() {}
;
zx = function(t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode,
        xo(Cr.current);
        var o = null;
        switch (n) {
        case "input":
            i = oh(t, i),
            r = oh(t, r),
            o = [];
            break;
        case "select":
            i = Fe({}, i, {
                value: void 0
            }),
            r = Fe({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = lh(t, i),
            r = lh(t, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = kc)
        }
        ch(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (dl.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (dl.hasOwnProperty(u) ? (l != null && u === "onScroll" && ke("scroll", t),
                    o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
Bx = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
}
;
function _a(t, e) {
    if (!Ae)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
}
function At(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , r = 0;
    if (e)
        for (var i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = t,
            i = i.sibling;
    else
        for (i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = t,
            i = i.sibling;
    return t.subtreeFlags |= r,
    t.childLanes = n,
    e
}
function Hk(t, e, n) {
    var r = e.pendingProps;
    switch (sm(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return At(e),
        null;
    case 1:
        return rn(e.type) && Tc(),
        At(e),
        null;
    case 3:
        return r = e.stateNode,
        Gs(),
        Pe(nn),
        Pe(bt),
        mm(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (t === null || t.child === null) && (yu(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        rr !== null && (Hh(rr),
        rr = null))),
        Vh(t, e),
        At(e),
        null;
    case 5:
        pm(e);
        var i = xo(kl.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            zx(t, e, n, r, i),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(L(166));
                return At(e),
                null
            }
            if (t = xo(Cr.current),
            yu(e)) {
                r = e.stateNode,
                n = e.type;
                var o = e.memoizedProps;
                switch (r[vr] = e,
                r[Sl] = o,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    ke("cancel", r),
                    ke("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ke("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Na.length; i++)
                        ke(Na[i], r);
                    break;
                case "source":
                    ke("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ke("error", r),
                    ke("load", r);
                    break;
                case "details":
                    ke("toggle", r);
                    break;
                case "input":
                    $0(r, o),
                    ke("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    ke("invalid", r);
                    break;
                case "textarea":
                    W0(r, o),
                    ke("invalid", r)
                }
                ch(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && gu(r.textContent, a, t),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && gu(r.textContent, a, t),
                        i = ["children", "" + a]) : dl.hasOwnProperty(s) && a != null && s === "onScroll" && ke("scroll", r)
                    }
                switch (n) {
                case "input":
                    lu(r),
                    U0(r, o, !0);
                    break;
                case "textarea":
                    lu(r),
                    H0(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = kc)
                }
                r = i,
                e.updateQueue = r,
                r !== null && (e.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = pv(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = s.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = s.createElement(n, {
                    is: r.is
                }) : (t = s.createElement(n),
                n === "select" && (s = t,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : t = s.createElementNS(t, n),
                t[vr] = e,
                t[Sl] = r,
                Ix(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (s = fh(n, r),
                    n) {
                    case "dialog":
                        ke("cancel", t),
                        ke("close", t),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ke("load", t),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Na.length; i++)
                            ke(Na[i], t);
                        i = r;
                        break;
                    case "source":
                        ke("error", t),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ke("error", t),
                        ke("load", t),
                        i = r;
                        break;
                    case "details":
                        ke("toggle", t),
                        i = r;
                        break;
                    case "input":
                        $0(t, r),
                        i = oh(t, r),
                        ke("invalid", t);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Fe({}, r, {
                            value: void 0
                        }),
                        ke("invalid", t);
                        break;
                    case "textarea":
                        W0(t, r),
                        i = lh(t, r),
                        ke("invalid", t);
                        break;
                    default:
                        i = r
                    }
                    ch(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? yv(t, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && mv(t, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && hl(t, l) : typeof l == "number" && hl(t, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (dl.hasOwnProperty(o) ? l != null && o === "onScroll" && ke("scroll", t) : l != null && Hp(t, o, l, s))
                        }
                    switch (n) {
                    case "input":
                        lu(t),
                        U0(t, r, !1);
                        break;
                    case "textarea":
                        lu(t),
                        H0(t);
                        break;
                    case "option":
                        r.value != null && t.setAttribute("value", "" + bi(r.value));
                        break;
                    case "select":
                        t.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Rs(t, !!r.multiple, o, !1) : r.defaultValue != null && Rs(t, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (t.onclick = kc)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return At(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            Bx(t, e, t.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(L(166));
            if (n = xo(kl.current),
            xo(Cr.current),
            yu(e)) {
                if (r = e.stateNode,
                n = e.memoizedProps,
                r[vr] = e,
                (o = r.nodeValue !== n) && (t = kn,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        gu(r.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && gu(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                o && (e.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[vr] = e,
                e.stateNode = r
        }
        return At(e),
        null;
    case 13:
        if (Pe(Oe),
        r = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (Ae && Cn !== null && e.mode & 1 && !(e.flags & 128))
                ix(),
                Hs(),
                e.flags |= 98560,
                o = !1;
            else if (o = yu(e),
            r !== null && r.dehydrated !== null) {
                if (t === null) {
                    if (!o)
                        throw Error(L(318));
                    if (o = e.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(L(317));
                    o[vr] = e
                } else
                    Hs(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                At(e),
                o = !1
            } else
                rr !== null && (Hh(rr),
                rr = null),
                o = !0;
            if (!o)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (r = r !== null,
        r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || Oe.current & 1 ? ot === 0 && (ot = 3) : Em())),
        e.updateQueue !== null && (e.flags |= 4),
        At(e),
        null);
    case 4:
        return Gs(),
        Vh(t, e),
        t === null && _l(e.stateNode.containerInfo),
        At(e),
        null;
    case 10:
        return cm(e.type._context),
        At(e),
        null;
    case 17:
        return rn(e.type) && Tc(),
        At(e),
        null;
    case 19:
        if (Pe(Oe),
        o = e.memoizedState,
        o === null)
            return At(e),
            null;
        if (r = (e.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                _a(o, !1);
            else {
                if (ot !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (s = Dc(t),
                        s !== null) {
                            for (e.flags |= 128,
                            _a(o, !1),
                            r = s.updateQueue,
                            r !== null && (e.updateQueue = r,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child; n !== null; )
                                o = n,
                                t = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = t,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                t = s.dependencies,
                                o.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return Se(Oe, Oe.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                o.tail !== null && Xe() > Ks && (e.flags |= 128,
                r = !0,
                _a(o, !1),
                e.lanes = 4194304)
            }
        else {
            if (!r)
                if (t = Dc(s),
                t !== null) {
                    if (e.flags |= 128,
                    r = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    _a(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !Ae)
                        return At(e),
                        null
                } else
                    2 * Xe() - o.renderingStartTime > Ks && n !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    _a(o, !1),
                    e.lanes = 4194304);
            o.isBackwards ? (s.sibling = e.child,
            e.child = s) : (n = o.last,
            n !== null ? n.sibling = s : e.child = s,
            o.last = s)
        }
        return o.tail !== null ? (e = o.tail,
        o.rendering = e,
        o.tail = e.sibling,
        o.renderingStartTime = Xe(),
        e.sibling = null,
        n = Oe.current,
        Se(Oe, r ? n & 1 | 2 : n & 1),
        e) : (At(e),
        null);
    case 22:
    case 23:
        return Pm(),
        r = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? vn & 1073741824 && (At(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : At(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(L(156, e.tag))
}
function Yk(t, e) {
    switch (sm(e),
    e.tag) {
    case 1:
        return rn(e.type) && Tc(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return Gs(),
        Pe(nn),
        Pe(bt),
        mm(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return pm(e),
        null;
    case 13:
        if (Pe(Oe),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(L(340));
            Hs()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return Pe(Oe),
        null;
    case 4:
        return Gs(),
        null;
    case 10:
        return cm(e.type._context),
        null;
    case 22:
    case 23:
        return Pm(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var _u = !1
  , Nt = !1
  , Gk = typeof WeakSet == "function" ? WeakSet : Set
  , z = null;
function _s(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Be(t, e, r)
            }
        else
            n.current = null
}
function Fh(t, e, n) {
    try {
        n()
    } catch (r) {
        Be(t, e, r)
    }
}
var Lg = !1;
function Xk(t, e) {
    if (wh = wc,
    t = Hv(),
    im(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = t
                      , d = null;
                    t: for (; ; ) {
                        for (var h; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (h = f.firstChild) !== null; )
                            d = f,
                            f = h;
                        for (; ; ) {
                            if (f === t)
                                break t;
                            if (d === n && ++u === i && (a = s),
                            d === o && ++c === r && (l = s),
                            (h = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Sh = {
        focusedElem: t,
        selectionRange: n
    },
    wc = !1,
    z = e; z !== null; )
        if (e = z,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            z = t;
        else
            for (; z !== null; ) {
                e = z;
                try {
                    var m = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (m !== null) {
                                var p = m.memoizedProps
                                  , x = m.memoizedState
                                  , y = e.stateNode
                                  , g = y.getSnapshotBeforeUpdate(e.elementType === e.type ? p : tr(e.type, p), x);
                                y.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var v = e.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(L(163))
                        }
                } catch (_) {
                    Be(e, e.return, _)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    z = t;
                    break
                }
                z = e.return
            }
    return m = Lg,
    Lg = !1,
    m
}
function Wa(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Fh(e, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Sf(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function Ih(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function $x(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    $x(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[vr],
    delete e[Sl],
    delete e[Th],
    delete e[Rk],
    delete e[Nk])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function Ux(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function bg(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || Ux(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function zh(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = kc));
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (zh(t, e, n),
        t = t.sibling; t !== null; )
            zh(t, e, n),
            t = t.sibling
}
function Bh(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (Bh(t, e, n),
        t = t.sibling; t !== null; )
            Bh(t, e, n),
            t = t.sibling
}
var vt = null
  , nr = !1;
function ii(t, e, n) {
    for (n = n.child; n !== null; )
        Wx(t, e, n),
        n = n.sibling
}
function Wx(t, e, n) {
    if (Sr && typeof Sr.onCommitFiberUnmount == "function")
        try {
            Sr.onCommitFiberUnmount(pf, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Nt || _s(n, e);
    case 6:
        var r = vt
          , i = nr;
        vt = null,
        ii(t, e, n),
        vt = r,
        nr = i,
        vt !== null && (nr ? (t = vt,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : vt.removeChild(n.stateNode));
        break;
    case 18:
        vt !== null && (nr ? (t = vt,
        n = n.stateNode,
        t.nodeType === 8 ? fd(t.parentNode, n) : t.nodeType === 1 && fd(t, n),
        yl(t)) : fd(vt, n.stateNode));
        break;
    case 4:
        r = vt,
        i = nr,
        vt = n.stateNode.containerInfo,
        nr = !0,
        ii(t, e, n),
        vt = r,
        nr = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Nt && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && Fh(n, e, s),
                i = i.next
            } while (i !== r)
        }
        ii(t, e, n);
        break;
    case 1:
        if (!Nt && (_s(n, e),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Be(n, e, a)
            }
        ii(t, e, n);
        break;
    case 21:
        ii(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (Nt = (r = Nt) || n.memoizedState !== null,
        ii(t, e, n),
        Nt = r) : ii(t, e, n);
        break;
    default:
        ii(t, e, n)
    }
}
function jg(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new Gk),
        e.forEach(function(r) {
            var i = rT.bind(null, t, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Jn(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = t
                  , s = e
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        vt = a.stateNode,
                        nr = !1;
                        break e;
                    case 3:
                        vt = a.stateNode.containerInfo,
                        nr = !0;
                        break e;
                    case 4:
                        vt = a.stateNode.containerInfo,
                        nr = !0;
                        break e
                    }
                    a = a.return
                }
                if (vt === null)
                    throw Error(L(160));
                Wx(o, s, i),
                vt = null,
                nr = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                Be(i, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            Hx(e, t),
            e = e.sibling
}
function Hx(t, e) {
    var n = t.alternate
      , r = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Jn(e, t),
        pr(t),
        r & 4) {
            try {
                Wa(3, t, t.return),
                Sf(3, t)
            } catch (p) {
                Be(t, t.return, p)
            }
            try {
                Wa(5, t, t.return)
            } catch (p) {
                Be(t, t.return, p)
            }
        }
        break;
    case 1:
        Jn(e, t),
        pr(t),
        r & 512 && n !== null && _s(n, n.return);
        break;
    case 5:
        if (Jn(e, t),
        pr(t),
        r & 512 && n !== null && _s(n, n.return),
        t.flags & 32) {
            var i = t.stateNode;
            try {
                hl(i, "")
            } catch (p) {
                Be(t, t.return, p)
            }
        }
        if (r & 4 && (i = t.stateNode,
        i != null)) {
            var o = t.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = t.type
              , l = t.updateQueue;
            if (t.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && dv(i, o),
                    fh(a, s);
                    var u = fh(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s]
                          , f = l[s + 1];
                        c === "style" ? yv(i, f) : c === "dangerouslySetInnerHTML" ? mv(i, f) : c === "children" ? hl(i, f) : Hp(i, c, f, u)
                    }
                    switch (a) {
                    case "input":
                        sh(i, o);
                        break;
                    case "textarea":
                        hv(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        h != null ? Rs(i, !!o.multiple, h, !1) : d !== !!o.multiple && (o.defaultValue != null ? Rs(i, !!o.multiple, o.defaultValue, !0) : Rs(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Sl] = o
                } catch (p) {
                    Be(t, t.return, p)
                }
        }
        break;
    case 6:
        if (Jn(e, t),
        pr(t),
        r & 4) {
            if (t.stateNode === null)
                throw Error(L(162));
            i = t.stateNode,
            o = t.memoizedProps;
            try {
                i.nodeValue = o
            } catch (p) {
                Be(t, t.return, p)
            }
        }
        break;
    case 3:
        if (Jn(e, t),
        pr(t),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                yl(e.containerInfo)
            } catch (p) {
                Be(t, t.return, p)
            }
        break;
    case 4:
        Jn(e, t),
        pr(t);
        break;
    case 13:
        Jn(e, t),
        pr(t),
        i = t.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (km = Xe())),
        r & 4 && jg(t);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (Nt = (u = Nt) || c,
        Jn(e, t),
        Nt = u) : Jn(e, t),
        pr(t),
        r & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for (z = t,
                c = t.child; c !== null; ) {
                    for (f = z = c; z !== null; ) {
                        switch (d = z,
                        h = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Wa(4, d, d.return);
                            break;
                        case 1:
                            _s(d, d.return);
                            var m = d.stateNode;
                            if (typeof m.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    e = r,
                                    m.props = e.memoizedProps,
                                    m.state = e.memoizedState,
                                    m.componentWillUnmount()
                                } catch (p) {
                                    Be(r, n, p)
                                }
                            }
                            break;
                        case 5:
                            _s(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Fg(f);
                                continue
                            }
                        }
                        h !== null ? (h.return = d,
                        z = h) : Fg(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = t; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = gv("display", s))
                        } catch (p) {
                            Be(t, t.return, p)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (p) {
                            Be(t, t.return, p)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === t)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === t)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Jn(e, t),
        pr(t),
        r & 4 && jg(t);
        break;
    case 21:
        break;
    default:
        Jn(e, t),
        pr(t)
    }
}
function pr(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (Ux(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(L(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (hl(i, ""),
                r.flags &= -33);
                var o = bg(t);
                Bh(t, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = bg(t);
                zh(t, a, s);
                break;
            default:
                throw Error(L(161))
            }
        } catch (l) {
            Be(t, t.return, l)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function Kk(t, e, n) {
    z = t,
    Yx(t)
}
function Yx(t, e, n) {
    for (var r = (t.mode & 1) !== 0; z !== null; ) {
        var i = z
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || _u;
            if (!s) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Nt;
                a = _u;
                var u = Nt;
                if (_u = s,
                (Nt = l) && !u)
                    for (z = i; z !== null; )
                        s = z,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Ig(i) : l !== null ? (l.return = s,
                        z = l) : Ig(i);
                for (; o !== null; )
                    z = o,
                    Yx(o),
                    o = o.sibling;
                z = i,
                _u = a,
                Nt = u
            }
            Vg(t)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            z = o) : Vg(t)
    }
}
function Vg(t) {
    for (; z !== null; ) {
        var e = z;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Nt || Sf(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !Nt)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = e.elementType === e.type ? n.memoizedProps : tr(e.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = e.updateQueue;
                        o !== null && _g(e, o, r);
                        break;
                    case 3:
                        var s = e.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            _g(e, s, n)
                        }
                        break;
                    case 5:
                        var a = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = a;
                            var l = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && yl(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(L(163))
                    }
                Nt || e.flags & 512 && Ih(e)
            } catch (d) {
                Be(e, e.return, d)
            }
        }
        if (e === t) {
            z = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            z = n;
            break
        }
        z = e.return
    }
}
function Fg(t) {
    for (; z !== null; ) {
        var e = z;
        if (e === t) {
            z = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            z = n;
            break
        }
        z = e.return
    }
}
function Ig(t) {
    for (; z !== null; ) {
        var e = z;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    Sf(4, e)
                } catch (l) {
                    Be(e, n, l)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = e.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Be(e, i, l)
                    }
                }
                var o = e.return;
                try {
                    Ih(e)
                } catch (l) {
                    Be(e, o, l)
                }
                break;
            case 5:
                var s = e.return;
                try {
                    Ih(e)
                } catch (l) {
                    Be(e, s, l)
                }
            }
        } catch (l) {
            Be(e, e.return, l)
        }
        if (e === t) {
            z = null;
            break
        }
        var a = e.sibling;
        if (a !== null) {
            a.return = e.return,
            z = a;
            break
        }
        z = e.return
    }
}
var Qk = Math.ceil
  , bc = ti.ReactCurrentDispatcher
  , Sm = ti.ReactCurrentOwner
  , $n = ti.ReactCurrentBatchConfig
  , de = 0
  , dt = null
  , Ze = null
  , wt = 0
  , vn = 0
  , ws = Hi(0)
  , ot = 0
  , Ml = null
  , Vo = 0
  , Cf = 0
  , Cm = 0
  , Ha = null
  , Jt = null
  , km = 0
  , Ks = 1 / 0
  , Nr = null
  , jc = !1
  , $h = null
  , Pi = null
  , wu = !1
  , pi = null
  , Vc = 0
  , Ya = 0
  , Uh = null
  , Zu = -1
  , Ju = 0;
function Gt() {
    return de & 6 ? Xe() : Zu !== -1 ? Zu : Zu = Xe()
}
function Ei(t) {
    return t.mode & 1 ? de & 2 && wt !== 0 ? wt & -wt : Ok.transition !== null ? (Ju === 0 && (Ju = Av()),
    Ju) : (t = ye,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : jv(t.type)),
    t) : 1
}
function sr(t, e, n, r) {
    if (50 < Ya)
        throw Ya = 0,
        Uh = null,
        Error(L(185));
    Wl(t, n, r),
    (!(de & 2) || t !== dt) && (t === dt && (!(de & 2) && (Cf |= n),
    ot === 4 && fi(t, wt)),
    on(t, r),
    n === 1 && de === 0 && !(e.mode & 1) && (Ks = Xe() + 500,
    xf && Yi()))
}
function on(t, e) {
    var n = t.callbackNode;
    OC(t, e);
    var r = _c(t, t === dt ? wt : 0);
    if (r === 0)
        n !== null && X0(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = r & -r,
    t.callbackPriority !== e) {
        if (n != null && X0(n),
        e === 1)
            t.tag === 0 ? Dk(zg.bind(null, t)) : tx(zg.bind(null, t)),
            Mk(function() {
                !(de & 6) && Yi()
            }),
            n = null;
        else {
            switch (Rv(r)) {
            case 1:
                n = Qp;
                break;
            case 4:
                n = Ev;
                break;
            case 16:
                n = xc;
                break;
            case 536870912:
                n = Mv;
                break;
            default:
                n = xc
            }
            n = e_(n, Gx.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function Gx(t, e) {
    if (Zu = -1,
    Ju = 0,
    de & 6)
        throw Error(L(327));
    var n = t.callbackNode;
    if (bs() && t.callbackNode !== n)
        return null;
    var r = _c(t, t === dt ? wt : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = Fc(t, r);
    else {
        e = r;
        var i = de;
        de |= 2;
        var o = Kx();
        (dt !== t || wt !== e) && (Nr = null,
        Ks = Xe() + 500,
        To(t, e));
        do
            try {
                Jk();
                break
            } catch (a) {
                Xx(t, a)
            }
        while (1);
        um(),
        bc.current = o,
        de = i,
        Ze !== null ? e = 0 : (dt = null,
        wt = 0,
        e = ot)
    }
    if (e !== 0) {
        if (e === 2 && (i = gh(t),
        i !== 0 && (r = i,
        e = Wh(t, i))),
        e === 1)
            throw n = Ml,
            To(t, 0),
            fi(t, r),
            on(t, Xe()),
            n;
        if (e === 6)
            fi(t, r);
        else {
            if (i = t.current.alternate,
            !(r & 30) && !qk(i) && (e = Fc(t, r),
            e === 2 && (o = gh(t),
            o !== 0 && (r = o,
            e = Wh(t, o))),
            e === 1))
                throw n = Ml,
                To(t, 0),
                fi(t, r),
                on(t, Xe()),
                n;
            switch (t.finishedWork = i,
            t.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(L(345));
            case 2:
                ao(t, Jt, Nr);
                break;
            case 3:
                if (fi(t, r),
                (r & 130023424) === r && (e = km + 500 - Xe(),
                10 < e)) {
                    if (_c(t, 0) !== 0)
                        break;
                    if (i = t.suspendedLanes,
                    (i & r) !== r) {
                        Gt(),
                        t.pingedLanes |= t.suspendedLanes & i;
                        break
                    }
                    t.timeoutHandle = kh(ao.bind(null, t, Jt, Nr), e);
                    break
                }
                ao(t, Jt, Nr);
                break;
            case 4:
                if (fi(t, r),
                (r & 4194240) === r)
                    break;
                for (e = t.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - or(r);
                    o = 1 << s,
                    s = e[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = Xe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qk(r / 1960)) - r,
                10 < r) {
                    t.timeoutHandle = kh(ao.bind(null, t, Jt, Nr), r);
                    break
                }
                ao(t, Jt, Nr);
                break;
            case 5:
                ao(t, Jt, Nr);
                break;
            default:
                throw Error(L(329))
            }
        }
    }
    return on(t, Xe()),
    t.callbackNode === n ? Gx.bind(null, t) : null
}
function Wh(t, e) {
    var n = Ha;
    return t.current.memoizedState.isDehydrated && (To(t, e).flags |= 256),
    t = Fc(t, e),
    t !== 2 && (e = Jt,
    Jt = n,
    e !== null && Hh(e)),
    t
}
function Hh(t) {
    Jt === null ? Jt = t : Jt.push.apply(Jt, t)
}
function qk(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!lr(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function fi(t, e) {
    for (e &= ~Cm,
    e &= ~Cf,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - or(e)
          , r = 1 << n;
        t[n] = -1,
        e &= ~r
    }
}
function zg(t) {
    if (de & 6)
        throw Error(L(327));
    bs();
    var e = _c(t, 0);
    if (!(e & 1))
        return on(t, Xe()),
        null;
    var n = Fc(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = gh(t);
        r !== 0 && (e = r,
        n = Wh(t, r))
    }
    if (n === 1)
        throw n = Ml,
        To(t, 0),
        fi(t, e),
        on(t, Xe()),
        n;
    if (n === 6)
        throw Error(L(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    ao(t, Jt, Nr),
    on(t, Xe()),
    null
}
function Tm(t, e) {
    var n = de;
    de |= 1;
    try {
        return t(e)
    } finally {
        de = n,
        de === 0 && (Ks = Xe() + 500,
        xf && Yi())
    }
}
function Fo(t) {
    pi !== null && pi.tag === 0 && !(de & 6) && bs();
    var e = de;
    de |= 1;
    var n = $n.transition
      , r = ye;
    try {
        if ($n.transition = null,
        ye = 1,
        t)
            return t()
    } finally {
        ye = r,
        $n.transition = n,
        de = e,
        !(de & 6) && Yi()
    }
}
function Pm() {
    vn = ws.current,
    Pe(ws)
}
function To(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    Ek(n)),
    Ze !== null)
        for (n = Ze.return; n !== null; ) {
            var r = n;
            switch (sm(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Tc();
                break;
            case 3:
                Gs(),
                Pe(nn),
                Pe(bt),
                mm();
                break;
            case 5:
                pm(r);
                break;
            case 4:
                Gs();
                break;
            case 13:
                Pe(Oe);
                break;
            case 19:
                Pe(Oe);
                break;
            case 10:
                cm(r.type._context);
                break;
            case 22:
            case 23:
                Pm()
            }
            n = n.return
        }
    if (dt = t,
    Ze = t = Mi(t.current, null),
    wt = vn = e,
    ot = 0,
    Ml = null,
    Cm = Cf = Vo = 0,
    Jt = Ha = null,
    vo !== null) {
        for (e = 0; e < vo.length; e++)
            if (n = vo[e],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        vo = null
    }
    return t
}
function Xx(t, e) {
    do {
        var n = Ze;
        try {
            if (um(),
            Ku.current = Lc,
            Oc) {
                for (var r = Ve.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Oc = !1
            }
            if (jo = 0,
            ft = rt = Ve = null,
            Ua = !1,
            Tl = 0,
            Sm.current = null,
            n === null || n.return === null) {
                ot = 1,
                Ml = e,
                Ze = null;
                break
            }
            e: {
                var o = t
                  , s = n.return
                  , a = n
                  , l = e;
                if (e = wt,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = Eg(s);
                    if (h !== null) {
                        h.flags &= -257,
                        Mg(h, s, a, o, e),
                        h.mode & 1 && Pg(o, u, e),
                        e = h,
                        l = u;
                        var m = e.updateQueue;
                        if (m === null) {
                            var p = new Set;
                            p.add(l),
                            e.updateQueue = p
                        } else
                            m.add(l);
                        break e
                    } else {
                        if (!(e & 1)) {
                            Pg(o, u, e),
                            Em();
                            break e
                        }
                        l = Error(L(426))
                    }
                } else if (Ae && a.mode & 1) {
                    var x = Eg(s);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        Mg(x, s, a, o, e),
                        am(Xs(l, a));
                        break e
                    }
                }
                o = l = Xs(l, a),
                ot !== 4 && (ot = 2),
                Ha === null ? Ha = [o] : Ha.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        e &= -e,
                        o.lanes |= e;
                        var y = Nx(o, l, e);
                        xg(o, y);
                        break e;
                    case 1:
                        a = l;
                        var g = o.type
                          , v = o.stateNode;
                        if (!(o.flags & 128) && (typeof g.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Pi === null || !Pi.has(v)))) {
                            o.flags |= 65536,
                            e &= -e,
                            o.lanes |= e;
                            var _ = Dx(o, a, e);
                            xg(o, _);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            qx(n)
        } catch (w) {
            e = w,
            Ze === n && n !== null && (Ze = n = n.return);
            continue
        }
        break
    } while (1)
}
function Kx() {
    var t = bc.current;
    return bc.current = Lc,
    t === null ? Lc : t
}
function Em() {
    (ot === 0 || ot === 3 || ot === 2) && (ot = 4),
    dt === null || !(Vo & 268435455) && !(Cf & 268435455) || fi(dt, wt)
}
function Fc(t, e) {
    var n = de;
    de |= 2;
    var r = Kx();
    (dt !== t || wt !== e) && (Nr = null,
    To(t, e));
    do
        try {
            Zk();
            break
        } catch (i) {
            Xx(t, i)
        }
    while (1);
    if (um(),
    de = n,
    bc.current = r,
    Ze !== null)
        throw Error(L(261));
    return dt = null,
    wt = 0,
    ot
}
function Zk() {
    for (; Ze !== null; )
        Qx(Ze)
}
function Jk() {
    for (; Ze !== null && !kC(); )
        Qx(Ze)
}
function Qx(t) {
    var e = Jx(t.alternate, t, vn);
    t.memoizedProps = t.pendingProps,
    e === null ? qx(t) : Ze = e,
    Sm.current = null
}
function qx(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = Yk(n, e),
            n !== null) {
                n.flags &= 32767,
                Ze = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                ot = 6,
                Ze = null;
                return
            }
        } else if (n = Hk(n, e, vn),
        n !== null) {
            Ze = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            Ze = e;
            return
        }
        Ze = e = t
    } while (e !== null);
    ot === 0 && (ot = 5)
}
function ao(t, e, n) {
    var r = ye
      , i = $n.transition;
    try {
        $n.transition = null,
        ye = 1,
        eT(t, e, n, r)
    } finally {
        $n.transition = i,
        ye = r
    }
    return null
}
function eT(t, e, n, r) {
    do
        bs();
    while (pi !== null);
    if (de & 6)
        throw Error(L(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(L(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (LC(t, o),
    t === dt && (Ze = dt = null,
    wt = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || wu || (wu = !0,
    e_(xc, function() {
        return bs(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = $n.transition,
        $n.transition = null;
        var s = ye;
        ye = 1;
        var a = de;
        de |= 4,
        Sm.current = null,
        Xk(t, n),
        Hx(n, t),
        _k(Sh),
        wc = !!wh,
        Sh = wh = null,
        t.current = n,
        Kk(n),
        TC(),
        de = a,
        ye = s,
        $n.transition = o
    } else
        t.current = n;
    if (wu && (wu = !1,
    pi = t,
    Vc = i),
    o = t.pendingLanes,
    o === 0 && (Pi = null),
    MC(n.stateNode),
    on(t, Xe()),
    e !== null)
        for (r = t.onRecoverableError,
        n = 0; n < e.length; n++)
            i = e[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (jc)
        throw jc = !1,
        t = $h,
        $h = null,
        t;
    return Vc & 1 && t.tag !== 0 && bs(),
    o = t.pendingLanes,
    o & 1 ? t === Uh ? Ya++ : (Ya = 0,
    Uh = t) : Ya = 0,
    Yi(),
    null
}
function bs() {
    if (pi !== null) {
        var t = Rv(Vc)
          , e = $n.transition
          , n = ye;
        try {
            if ($n.transition = null,
            ye = 16 > t ? 16 : t,
            pi === null)
                var r = !1;
            else {
                if (t = pi,
                pi = null,
                Vc = 0,
                de & 6)
                    throw Error(L(331));
                var i = de;
                for (de |= 4,
                z = t.current; z !== null; ) {
                    var o = z
                      , s = o.child;
                    if (z.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (z = u; z !== null; ) {
                                    var c = z;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Wa(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        z = f;
                                    else
                                        for (; z !== null; ) {
                                            c = z;
                                            var d = c.sibling
                                              , h = c.return;
                                            if ($x(c),
                                            c === u) {
                                                z = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = h,
                                                z = d;
                                                break
                                            }
                                            z = h
                                        }
                                }
                            }
                            var m = o.alternate;
                            if (m !== null) {
                                var p = m.child;
                                if (p !== null) {
                                    m.child = null;
                                    do {
                                        var x = p.sibling;
                                        p.sibling = null,
                                        p = x
                                    } while (p !== null)
                                }
                            }
                            z = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        z = s;
                    else
                        e: for (; z !== null; ) {
                            if (o = z,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Wa(9, o, o.return)
                                }
                            var y = o.sibling;
                            if (y !== null) {
                                y.return = o.return,
                                z = y;
                                break e
                            }
                            z = o.return
                        }
                }
                var g = t.current;
                for (z = g; z !== null; ) {
                    s = z;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        z = v;
                    else
                        e: for (s = g; z !== null; ) {
                            if (a = z,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Sf(9, a)
                                    }
                                } catch (w) {
                                    Be(a, a.return, w)
                                }
                            if (a === s) {
                                z = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                z = _;
                                break e
                            }
                            z = a.return
                        }
                }
                if (de = i,
                Yi(),
                Sr && typeof Sr.onPostCommitFiberRoot == "function")
                    try {
                        Sr.onPostCommitFiberRoot(pf, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ye = n,
            $n.transition = e
        }
    }
    return !1
}
function Bg(t, e, n) {
    e = Xs(n, e),
    e = Nx(t, e, 1),
    t = Ti(t, e, 1),
    e = Gt(),
    t !== null && (Wl(t, 1, e),
    on(t, e))
}
function Be(t, e, n) {
    if (t.tag === 3)
        Bg(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                Bg(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pi === null || !Pi.has(r))) {
                    t = Xs(n, t),
                    t = Dx(e, t, 1),
                    e = Ti(e, t, 1),
                    t = Gt(),
                    e !== null && (Wl(e, 1, t),
                    on(e, t));
                    break
                }
            }
            e = e.return
        }
}
function tT(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
    e = Gt(),
    t.pingedLanes |= t.suspendedLanes & n,
    dt === t && (wt & n) === n && (ot === 4 || ot === 3 && (wt & 130023424) === wt && 500 > Xe() - km ? To(t, 0) : Cm |= n),
    on(t, e)
}
function Zx(t, e) {
    e === 0 && (t.mode & 1 ? (e = fu,
    fu <<= 1,
    !(fu & 130023424) && (fu = 4194304)) : e = 1);
    var n = Gt();
    t = Kr(t, e),
    t !== null && (Wl(t, e, n),
    on(t, n))
}
function nT(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    Zx(t, n)
}
function rT(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var r = t.stateNode
          , i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = t.stateNode;
        break;
    default:
        throw Error(L(314))
    }
    r !== null && r.delete(e),
    Zx(t, n)
}
var Jx;
Jx = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || nn.current)
            tn = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return tn = !1,
                Wk(t, e, n);
            tn = !!(t.flags & 131072)
        }
    else
        tn = !1,
        Ae && e.flags & 1048576 && nx(e, Mc, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        qu(t, e),
        t = e.pendingProps;
        var i = Ws(e, bt.current);
        Ls(e, n),
        i = ym(null, e, r, t, i, n);
        var o = vm();
        return e.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        rn(r) ? (o = !0,
        Pc(e)) : o = !1,
        e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        dm(e),
        i.updater = _f,
        e.stateNode = i,
        i._reactInternals = e,
        Nh(e, r, t, n),
        e = Lh(null, e, r, !0, o, n)) : (e.tag = 0,
        Ae && o && om(e),
        Bt(null, e, i, n),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        e: {
            switch (qu(t, e),
            t = e.pendingProps,
            i = r._init,
            r = i(r._payload),
            e.type = r,
            i = e.tag = oT(r),
            t = tr(r, t),
            i) {
            case 0:
                e = Oh(null, e, r, t, n);
                break e;
            case 1:
                e = Ng(null, e, r, t, n);
                break e;
            case 11:
                e = Ag(null, e, r, t, n);
                break e;
            case 14:
                e = Rg(null, e, r, tr(r.type, t), n);
                break e
            }
            throw Error(L(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : tr(r, i),
        Oh(t, e, r, i, n);
    case 1:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : tr(r, i),
        Ng(t, e, r, i, n);
    case 3:
        e: {
            if (jx(e),
            t === null)
                throw Error(L(387));
            r = e.pendingProps,
            o = e.memoizedState,
            i = o.element,
            sx(t, e),
            Nc(e, r, null, n);
            var s = e.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                e.updateQueue.baseState = o,
                e.memoizedState = o,
                e.flags & 256) {
                    i = Xs(Error(L(423)), e),
                    e = Dg(t, e, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Xs(Error(L(424)), e),
                    e = Dg(t, e, r, n, i);
                    break e
                } else
                    for (Cn = ki(e.stateNode.containerInfo.firstChild),
                    kn = e,
                    Ae = !0,
                    rr = null,
                    n = cx(e, null, r, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Hs(),
                r === i) {
                    e = Qr(t, e, n);
                    break e
                }
                Bt(t, e, r, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return fx(e),
        t === null && Mh(e),
        r = e.type,
        i = e.pendingProps,
        o = t !== null ? t.memoizedProps : null,
        s = i.children,
        Ch(r, i) ? s = null : o !== null && Ch(r, o) && (e.flags |= 32),
        bx(t, e),
        Bt(t, e, s, n),
        e.child;
    case 6:
        return t === null && Mh(e),
        null;
    case 13:
        return Vx(t, e, n);
    case 4:
        return hm(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        t === null ? e.child = Ys(e, null, r, n) : Bt(t, e, r, n),
        e.child;
    case 11:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : tr(r, i),
        Ag(t, e, r, i, n);
    case 7:
        return Bt(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return Bt(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return Bt(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (r = e.type._context,
            i = e.pendingProps,
            o = e.memoizedProps,
            s = i.value,
            Se(Ac, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (lr(o.value, s)) {
                    if (o.children === i.children && !nn.current) {
                        e = Qr(t, e, n);
                        break e
                    }
                } else
                    for (o = e.child,
                    o !== null && (o.return = e); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = $r(-1, n & -n),
                                        l.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    Ah(o.return, n, e),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === e.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(L(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            Ah(s, n, e),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === e) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            Bt(t, e, i.children, n),
            e = e.child
        }
        return e;
    case 9:
        return i = e.type,
        r = e.pendingProps.children,
        Ls(e, n),
        i = Wn(i),
        r = r(i),
        e.flags |= 1,
        Bt(t, e, r, n),
        e.child;
    case 14:
        return r = e.type,
        i = tr(r, e.pendingProps),
        i = tr(r.type, i),
        Rg(t, e, r, i, n);
    case 15:
        return Ox(t, e, e.type, e.pendingProps, n);
    case 17:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : tr(r, i),
        qu(t, e),
        e.tag = 1,
        rn(r) ? (t = !0,
        Pc(e)) : t = !1,
        Ls(e, n),
        lx(e, r, i),
        Nh(e, r, i, n),
        Lh(null, e, r, !0, t, n);
    case 19:
        return Fx(t, e, n);
    case 22:
        return Lx(t, e, n)
    }
    throw Error(L(156, e.tag))
}
;
function e_(t, e) {
    return Pv(t, e)
}
function iT(t, e, n, r) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Fn(t, e, n, r) {
    return new iT(t,e,n,r)
}
function Mm(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function oT(t) {
    if (typeof t == "function")
        return Mm(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === Gp)
            return 11;
        if (t === Xp)
            return 14
    }
    return 2
}
function Mi(t, e) {
    var n = t.alternate;
    return n === null ? (n = Fn(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function ec(t, e, n, r, i, o) {
    var s = 2;
    if (r = t,
    typeof t == "function")
        Mm(t) && (s = 1);
    else if (typeof t == "string")
        s = 5;
    else
        e: switch (t) {
        case fs:
            return Po(n.children, i, o, e);
        case Yp:
            s = 8,
            i |= 8;
            break;
        case th:
            return t = Fn(12, n, e, i | 2),
            t.elementType = th,
            t.lanes = o,
            t;
        case nh:
            return t = Fn(13, n, e, i),
            t.elementType = nh,
            t.lanes = o,
            t;
        case rh:
            return t = Fn(19, n, e, i),
            t.elementType = rh,
            t.lanes = o,
            t;
        case uv:
            return kf(n, i, o, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case av:
                    s = 10;
                    break e;
                case lv:
                    s = 9;
                    break e;
                case Gp:
                    s = 11;
                    break e;
                case Xp:
                    s = 14;
                    break e;
                case ai:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(L(130, t == null ? t : typeof t, ""))
        }
    return e = Fn(s, n, e, i),
    e.elementType = t,
    e.type = r,
    e.lanes = o,
    e
}
function Po(t, e, n, r) {
    return t = Fn(7, t, r, e),
    t.lanes = n,
    t
}
function kf(t, e, n, r) {
    return t = Fn(22, t, r, e),
    t.elementType = uv,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function xd(t, e, n) {
    return t = Fn(6, t, null, e),
    t.lanes = n,
    t
}
function _d(t, e, n) {
    return e = Fn(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function sT(t, e, n, r, i) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ed(0),
    this.expirationTimes = ed(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ed(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Am(t, e, n, r, i, o, s, a, l) {
    return t = new sT(t,e,n,a,l),
    e === 1 ? (e = 1,
    o === !0 && (e |= 8)) : e = 0,
    o = Fn(3, null, null, e),
    t.current = o,
    o.stateNode = t,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    dm(o),
    t
}
function aT(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: cs,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function t_(t) {
    if (!t)
        return ji;
    t = t._reactInternals;
    e: {
        if (Ho(t) !== t || t.tag !== 1)
            throw Error(L(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (rn(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(L(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (rn(n))
            return ex(t, n, e)
    }
    return e
}
function n_(t, e, n, r, i, o, s, a, l) {
    return t = Am(n, r, !0, t, i, o, s, a, l),
    t.context = t_(null),
    n = t.current,
    r = Gt(),
    i = Ei(n),
    o = $r(r, i),
    o.callback = e ?? null,
    Ti(n, o, i),
    t.current.lanes = i,
    Wl(t, i, r),
    on(t, r),
    t
}
function Tf(t, e, n, r) {
    var i = e.current
      , o = Gt()
      , s = Ei(i);
    return n = t_(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = $r(o, s),
    e.payload = {
        element: t
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    t = Ti(i, e, s),
    t !== null && (sr(t, i, s, o),
    Xu(t, i, s)),
    s
}
function Ic(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function $g(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function Rm(t, e) {
    $g(t, e),
    (t = t.alternate) && $g(t, e)
}
function lT() {
    return null
}
var r_ = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function Nm(t) {
    this._internalRoot = t
}
Pf.prototype.render = Nm.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(L(409));
    Tf(t, e, null, null)
}
;
Pf.prototype.unmount = Nm.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Fo(function() {
            Tf(null, t, null, null)
        }),
        e[Xr] = null
    }
}
;
function Pf(t) {
    this._internalRoot = t
}
Pf.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Ov();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < ci.length && e !== 0 && e < ci[n].priority; n++)
            ;
        ci.splice(n, 0, t),
        n === 0 && bv(t)
    }
}
;
function Dm(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function Ef(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function Ug() {}
function uT(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Ic(s);
                o.call(u)
            }
        }
        var s = n_(e, r, t, 0, null, !1, !1, "", Ug);
        return t._reactRootContainer = s,
        t[Xr] = s.current,
        _l(t.nodeType === 8 ? t.parentNode : t),
        Fo(),
        s
    }
    for (; i = t.lastChild; )
        t.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ic(l);
            a.call(u)
        }
    }
    var l = Am(t, 0, !1, null, null, !1, !1, "", Ug);
    return t._reactRootContainer = l,
    t[Xr] = l.current,
    _l(t.nodeType === 8 ? t.parentNode : t),
    Fo(function() {
        Tf(e, l, n, r)
    }),
    l
}
function Mf(t, e, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Ic(s);
                a.call(l)
            }
        }
        Tf(e, s, t, i)
    } else
        s = uT(n, e, t, i, r);
    return Ic(s)
}
Nv = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = Ra(e.pendingLanes);
            n !== 0 && (qp(e, n | 1),
            on(e, Xe()),
            !(de & 6) && (Ks = Xe() + 500,
            Yi()))
        }
        break;
    case 13:
        Fo(function() {
            var r = Kr(t, 1);
            if (r !== null) {
                var i = Gt();
                sr(r, t, 1, i)
            }
        }),
        Rm(t, 1)
    }
}
;
Zp = function(t) {
    if (t.tag === 13) {
        var e = Kr(t, 134217728);
        if (e !== null) {
            var n = Gt();
            sr(e, t, 134217728, n)
        }
        Rm(t, 134217728)
    }
}
;
Dv = function(t) {
    if (t.tag === 13) {
        var e = Ei(t)
          , n = Kr(t, e);
        if (n !== null) {
            var r = Gt();
            sr(n, t, e, r)
        }
        Rm(t, e)
    }
}
;
Ov = function() {
    return ye
}
;
Lv = function(t, e) {
    var n = ye;
    try {
        return ye = t,
        e()
    } finally {
        ye = n
    }
}
;
hh = function(t, e, n) {
    switch (e) {
    case "input":
        if (sh(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var r = n[e];
                if (r !== t && r.form === t.form) {
                    var i = vf(r);
                    if (!i)
                        throw Error(L(90));
                    fv(r),
                    sh(r, i)
                }
            }
        }
        break;
    case "textarea":
        hv(t, n);
        break;
    case "select":
        e = n.value,
        e != null && Rs(t, !!n.multiple, e, !1)
    }
}
;
_v = Tm;
wv = Fo;
var cT = {
    usingClientEntryPoint: !1,
    Events: [Yl, ms, vf, vv, xv, Tm]
}
  , wa = {
    findFiberByHostInstance: yo,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , fT = {
    bundleType: wa.bundleType,
    version: wa.version,
    rendererPackageName: wa.rendererPackageName,
    rendererConfig: wa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ti.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = kv(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: wa.findFiberByHostInstance || lT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Su.isDisabled && Su.supportsFiber)
        try {
            pf = Su.inject(fT),
            Sr = Su
        } catch {}
}
An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cT;
An.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Dm(e))
        throw Error(L(200));
    return aT(t, e, null, n)
}
;
An.createRoot = function(t, e) {
    if (!Dm(t))
        throw Error(L(299));
    var n = !1
      , r = ""
      , i = r_;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    e = Am(t, 1, !1, null, null, n, !1, r, i),
    t[Xr] = e.current,
    _l(t.nodeType === 8 ? t.parentNode : t),
    new Nm(e)
}
;
An.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(L(188)) : (t = Object.keys(t).join(","),
        Error(L(268, t)));
    return t = kv(e),
    t = t === null ? null : t.stateNode,
    t
}
;
An.flushSync = function(t) {
    return Fo(t)
}
;
An.hydrate = function(t, e, n) {
    if (!Ef(e))
        throw Error(L(200));
    return Mf(null, t, e, !0, n)
}
;
An.hydrateRoot = function(t, e, n) {
    if (!Dm(t))
        throw Error(L(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = r_;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    e = n_(e, null, t, 1, n ?? null, i, !1, o, s),
    t[Xr] = e.current,
    _l(t),
    r)
        for (t = 0; t < r.length; t++)
            n = r[t],
            i = n._getVersion,
            i = i(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new Pf(e)
}
;
An.render = function(t, e, n) {
    if (!Ef(e))
        throw Error(L(200));
    return Mf(null, t, e, !1, n)
}
;
An.unmountComponentAtNode = function(t) {
    if (!Ef(t))
        throw Error(L(40));
    return t._reactRootContainer ? (Fo(function() {
        Mf(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[Xr] = null
        })
    }),
    !0) : !1
}
;
An.unstable_batchedUpdates = Tm;
An.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!Ef(n))
        throw Error(L(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(L(38));
    return Mf(t, e, n, !1, r)
}
;
An.version = "18.2.0-next-9e3b772b8-20220608";
function i_() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i_)
        } catch (t) {
            console.error(t)
        }
}
i_(),
nv.exports = An;
var dT = nv.exports
  , Wg = dT;
Jd.createRoot = Wg.createRoot,
Jd.hydrateRoot = Wg.hydrateRoot;
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Al() {
    return Al = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ,
    Al.apply(this, arguments)
}
var mi;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(mi || (mi = {}));
const Hg = "popstate";
function hT(t) {
    t === void 0 && (t = {});
    function e(r, i) {
        let {pathname: o, search: s, hash: a} = r.location;
        return Yh("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : zc(i)
    }
    return mT(e, n, null, t)
}
function Je(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function Om(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function pT() {
    return Math.random().toString(36).substr(2, 8)
}
function Yg(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function Yh(t, e, n, r) {
    return n === void 0 && (n = null),
    Al({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? aa(e) : e, {
        state: n,
        key: e && e.key || r || pT()
    })
}
function zc(t) {
    let {pathname: e="/", search: n="", hash: r=""} = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
}
function aa(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && (e.hash = t.substr(n),
        t = t.substr(0, n));
        let r = t.indexOf("?");
        r >= 0 && (e.search = t.substr(r),
        t = t.substr(0, r)),
        t && (e.pathname = t)
    }
    return e
}
function mT(t, e, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , s = i.history
      , a = mi.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(Al({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        a = mi.Pop;
        let x = c()
          , y = x == null ? null : x - u;
        u = x,
        l && l({
            action: a,
            location: p.location,
            delta: y
        })
    }
    function d(x, y) {
        a = mi.Push;
        let g = Yh(p.location, x, y);
        n && n(g, x),
        u = c() + 1;
        let v = Yg(g, u)
          , _ = p.createHref(g);
        try {
            s.pushState(v, "", _)
        } catch (w) {
            if (w instanceof DOMException && w.name === "DataCloneError")
                throw w;
            i.location.assign(_)
        }
        o && l && l({
            action: a,
            location: p.location,
            delta: 1
        })
    }
    function h(x, y) {
        a = mi.Replace;
        let g = Yh(p.location, x, y);
        n && n(g, x),
        u = c();
        let v = Yg(g, u)
          , _ = p.createHref(g);
        s.replaceState(v, "", _),
        o && l && l({
            action: a,
            location: p.location,
            delta: 0
        })
    }
    function m(x) {
        let y = i.location.origin !== "null" ? i.location.origin : i.location.href
          , g = typeof x == "string" ? x : zc(x);
        return Je(y, "No window.location.(origin|href) available to create URL for href: " + g),
        new URL(g,y)
    }
    let p = {
        get action() {
            return a
        },
        get location() {
            return t(i, s)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Hg, f),
            l = x,
            () => {
                i.removeEventListener(Hg, f),
                l = null
            }
        },
        createHref(x) {
            return e(i, x)
        },
        createURL: m,
        encodeLocation(x) {
            let y = m(x);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: d,
        replace: h,
        go(x) {
            return s.go(x)
        }
    };
    return p
}
var Gg;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Gg || (Gg = {}));
function gT(t, e, n) {
    n === void 0 && (n = "/");
    let r = typeof e == "string" ? aa(e) : e
      , i = Lm(r.pathname || "/", n);
    if (i == null)
        return null;
    let o = o_(t);
    yT(o);
    let s = null;
    for (let a = 0; s == null && a < o.length; ++a)
        s = PT(o[a], AT(i));
    return s
}
function o_(t, e, n, r) {
    e === void 0 && (e = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (Je(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Ai([r, l.relativePath])
          , c = n.concat(l);
        o.children && o.children.length > 0 && (Je(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        o_(o.children, e, c, u)),
        !(o.path == null && !o.index) && e.push({
            path: u,
            score: kT(u, o.index),
            routesMeta: c
        })
    }
    ;
    return t.forEach( (o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            i(o, s);
        else
            for (let l of s_(o.path))
                i(o, s, l)
    }
    ),
    e
}
function s_(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[n,...r] = e
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let s = s_(r.join("/"))
      , a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))),
    i && a.push(...s),
    a.map(l => t.startsWith("/") && l === "" ? "/" : l)
}
function yT(t) {
    t.sort( (e, n) => e.score !== n.score ? n.score - e.score : TT(e.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const vT = /^:\w+$/
  , xT = 3
  , _T = 2
  , wT = 1
  , ST = 10
  , CT = -2
  , Xg = t => t === "*";
function kT(t, e) {
    let n = t.split("/")
      , r = n.length;
    return n.some(Xg) && (r += CT),
    e && (r += _T),
    n.filter(i => !Xg(i)).reduce( (i, o) => i + (vT.test(o) ? xT : o === "" ? wT : ST), r)
}
function TT(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (r, i) => r === e[i]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function PT(t, e) {
    let {routesMeta: n} = t
      , r = {}
      , i = "/"
      , o = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s]
          , l = s === n.length - 1
          , u = i === "/" ? e : e.slice(i.length) || "/"
          , c = ET({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: l
        }, u);
        if (!c)
            return null;
        Object.assign(r, c.params);
        let f = a.route;
        o.push({
            params: r,
            pathname: Ai([i, c.pathname]),
            pathnameBase: OT(Ai([i, c.pathnameBase])),
            route: f
        }),
        c.pathnameBase !== "/" && (i = Ai([i, c.pathnameBase]))
    }
    return o
}
function ET(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = MT(t.path, t.caseSensitive, t.end)
      , i = e.match(n);
    if (!i)
        return null;
    let o = i[0]
      , s = o.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, c, f) => {
            if (c === "*") {
                let d = a[f] || "";
                s = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1")
            }
            return u[c] = RT(a[f] || "", c),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: s,
        pattern: t
    }
}
function MT(t, e, n) {
    e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Om(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (s, a) => (r.push(a),
    "/([^\\/]+)"));
    return t.endsWith("*") ? (r.push("*"),
    i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,e ? void 0 : "i"), r]
}
function AT(t) {
    try {
        return decodeURI(t)
    } catch (e) {
        return Om(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function RT(t, e) {
    try {
        return decodeURIComponent(t)
    } catch (n) {
        return Om(!1, 'The value for the URL param "' + e + '" will not be decoded because' + (' the string "' + t + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
        t
    }
}
function Lm(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length
      , r = t.charAt(n);
    return r && r !== "/" ? null : t.slice(n) || "/"
}
function NT(t, e) {
    e === void 0 && (e = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof t == "string" ? aa(t) : t;
    return {
        pathname: n ? n.startsWith("/") ? n : DT(n, e) : e,
        search: LT(r),
        hash: bT(i)
    }
}
function DT(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function wd(t, e, n, r) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function a_(t) {
    return t.filter( (e, n) => n === 0 || e.route.path && e.route.path.length > 0)
}
function l_(t, e, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof t == "string" ? i = aa(t) : (i = Al({}, t),
    Je(!i.pathname || !i.pathname.includes("?"), wd("?", "pathname", "search", i)),
    Je(!i.pathname || !i.pathname.includes("#"), wd("#", "pathname", "hash", i)),
    Je(!i.search || !i.search.includes("#"), wd("#", "search", "hash", i)));
    let o = t === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
    if (r || s == null)
        a = n;
    else {
        let f = e.length - 1;
        if (s.startsWith("..")) {
            let d = s.split("/");
            for (; d[0] === ".."; )
                d.shift(),
                f -= 1;
            i.pathname = d.join("/")
        }
        a = f >= 0 ? e[f] : "/"
    }
    let l = NT(i, a)
      , u = s && s !== "/" && s.endsWith("/")
      , c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const Ai = t => t.join("/").replace(/\/\/+/g, "/")
  , OT = t => t.replace(/\/+$/, "").replace(/^\/*/, "/")
  , LT = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t
  , bT = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
function jT(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const u_ = ["post", "put", "patch", "delete"];
new Set(u_);
const VT = ["get", ...u_];
new Set(VT);
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Bc() {
    return Bc = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ,
    Bc.apply(this, arguments)
}
const bm = E.createContext(null)
  , FT = E.createContext(null)
  , la = E.createContext(null)
  , Af = E.createContext(null)
  , Yo = E.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , c_ = E.createContext(null);
function IT(t, e) {
    let {relative: n} = e === void 0 ? {} : e;
    Xl() || Je(!1);
    let {basename: r, navigator: i} = E.useContext(la)
      , {hash: o, pathname: s, search: a} = d_(t, {
        relative: n
    })
      , l = s;
    return r !== "/" && (l = s === "/" ? r : Ai([r, s])),
    i.createHref({
        pathname: l,
        search: a,
        hash: o
    })
}
function Xl() {
    return E.useContext(Af) != null
}
function Kl() {
    return Xl() || Je(!1),
    E.useContext(Af).location
}
function f_(t) {
    E.useContext(la).static || E.useLayoutEffect(t)
}
function zT() {
    let {isDataRoute: t} = E.useContext(Yo);
    return t ? JT() : BT()
}
function BT() {
    Xl() || Je(!1);
    let t = E.useContext(bm)
      , {basename: e, navigator: n} = E.useContext(la)
      , {matches: r} = E.useContext(Yo)
      , {pathname: i} = Kl()
      , o = JSON.stringify(a_(r).map(l => l.pathnameBase))
      , s = E.useRef(!1);
    return f_( () => {
        s.current = !0
    }
    ),
    E.useCallback(function(l, u) {
        if (u === void 0 && (u = {}),
        !s.current)
            return;
        if (typeof l == "number") {
            n.go(l);
            return
        }
        let c = l_(l, JSON.parse(o), i, u.relative === "path");
        t == null && e !== "/" && (c.pathname = c.pathname === "/" ? e : Ai([e, c.pathname])),
        (u.replace ? n.replace : n.push)(c, u.state, u)
    }, [e, n, o, i, t])
}
function d_(t, e) {
    let {relative: n} = e === void 0 ? {} : e
      , {matches: r} = E.useContext(Yo)
      , {pathname: i} = Kl()
      , o = JSON.stringify(a_(r).map(s => s.pathnameBase));
    return E.useMemo( () => l_(t, JSON.parse(o), i, n === "path"), [t, o, i, n])
}
function $T(t, e) {
    return UT(t, e)
}
function UT(t, e, n) {
    Xl() || Je(!1);
    let {navigator: r} = E.useContext(la)
      , {matches: i} = E.useContext(Yo)
      , o = i[i.length - 1]
      , s = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : "/";
    o && o.route;
    let l = Kl(), u;
    if (e) {
        var c;
        let p = typeof e == "string" ? aa(e) : e;
        a === "/" || (c = p.pathname) != null && c.startsWith(a) || Je(!1),
        u = p
    } else
        u = l;
    let f = u.pathname || "/"
      , d = a === "/" ? f : f.slice(a.length) || "/"
      , h = gT(t, {
        pathname: d
    })
      , m = XT(h && h.map(p => Object.assign({}, p, {
        params: Object.assign({}, s, p.params),
        pathname: Ai([a, r.encodeLocation ? r.encodeLocation(p.pathname).pathname : p.pathname]),
        pathnameBase: p.pathnameBase === "/" ? a : Ai([a, r.encodeLocation ? r.encodeLocation(p.pathnameBase).pathname : p.pathnameBase])
    })), i, n);
    return e && m ? E.createElement(Af.Provider, {
        value: {
            location: Bc({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: mi.Pop
        }
    }, m) : m
}
function WT() {
    let t = ZT()
      , e = jT(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , n = t instanceof Error ? t.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    }
      , o = null;
    return E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), n ? E.createElement("pre", {
        style: i
    }, n) : null, o)
}
const HT = E.createElement(WT, null);
class YT extends E.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, n) {
        return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error || n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation
        }
    }
    componentDidCatch(e, n) {
        console.error("React Router caught the following error during render", e, n)
    }
    render() {
        return this.state.error ? E.createElement(Yo.Provider, {
            value: this.props.routeContext
        }, E.createElement(c_.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function GT(t) {
    let {routeContext: e, match: n, children: r} = t
      , i = E.useContext(bm);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Yo.Provider, {
        value: e
    }, r)
}
function XT(t, e, n) {
    var r;
    if (e === void 0 && (e = []),
    n === void 0 && (n = null),
    t == null) {
        var i;
        if ((i = n) != null && i.errors)
            t = n.matches;
        else
            return null
    }
    let o = t
      , s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
        let a = o.findIndex(l => l.route.id && (s == null ? void 0 : s[l.route.id]));
        a >= 0 || Je(!1),
        o = o.slice(0, Math.min(o.length, a + 1))
    }
    return o.reduceRight( (a, l, u) => {
        let c = l.route.id ? s == null ? void 0 : s[l.route.id] : null
          , f = null;
        n && (f = l.route.errorElement || HT);
        let d = e.concat(o.slice(0, u + 1))
          , h = () => {
            let m;
            return c ? m = f : l.route.Component ? m = E.createElement(l.route.Component, null) : l.route.element ? m = l.route.element : m = a,
            E.createElement(GT, {
                match: l,
                routeContext: {
                    outlet: a,
                    matches: d,
                    isDataRoute: n != null
                },
                children: m
            })
        }
        ;
        return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0) ? E.createElement(YT, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: c,
            children: h(),
            routeContext: {
                outlet: null,
                matches: d,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var h_ = function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t
}(h_ || {})
  , $c = function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}($c || {});
function KT(t) {
    let e = E.useContext(bm);
    return e || Je(!1),
    e
}
function QT(t) {
    let e = E.useContext(FT);
    return e || Je(!1),
    e
}
function qT(t) {
    let e = E.useContext(Yo);
    return e || Je(!1),
    e
}
function p_(t) {
    let e = qT()
      , n = e.matches[e.matches.length - 1];
    return n.route.id || Je(!1),
    n.route.id
}
function ZT() {
    var t;
    let e = E.useContext(c_)
      , n = QT($c.UseRouteError)
      , r = p_($c.UseRouteError);
    return e || ((t = n.errors) == null ? void 0 : t[r])
}
function JT() {
    let {router: t} = KT(h_.UseNavigateStable)
      , e = p_($c.UseNavigateStable)
      , n = E.useRef(!1);
    return f_( () => {
        n.current = !0
    }
    ),
    E.useCallback(function(i, o) {
        o === void 0 && (o = {}),
        n.current && (typeof i == "number" ? t.navigate(i) : t.navigate(i, Bc({
            fromRouteId: e
        }, o)))
    }, [t, e])
}
function go(t) {
    Je(!1)
}
function eP(t) {
    let {basename: e="/", children: n=null, location: r, navigationType: i=mi.Pop, navigator: o, static: s=!1} = t;
    Xl() && Je(!1);
    let a = e.replace(/^\/*/, "/")
      , l = E.useMemo( () => ({
        basename: a,
        navigator: o,
        static: s
    }), [a, o, s]);
    typeof r == "string" && (r = aa(r));
    let {pathname: u="/", search: c="", hash: f="", state: d=null, key: h="default"} = r
      , m = E.useMemo( () => {
        let p = Lm(u, a);
        return p == null ? null : {
            location: {
                pathname: p,
                search: c,
                hash: f,
                state: d,
                key: h
            },
            navigationType: i
        }
    }
    , [a, u, c, f, d, h, i]);
    return m == null ? null : E.createElement(la.Provider, {
        value: l
    }, E.createElement(Af.Provider, {
        children: n,
        value: m
    }))
}
function m_(t) {
    let {children: e, location: n} = t;
    return $T(Gh(e), n)
}
new Promise( () => {}
);
function Gh(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return E.Children.forEach(t, (r, i) => {
        if (!E.isValidElement(r))
            return;
        let o = [...e, i];
        if (r.type === E.Fragment) {
            n.push.apply(n, Gh(r.props.children, o));
            return
        }
        r.type !== go && Je(!1),
        !r.props.index || !r.props.children || Je(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Gh(r.props.children, o)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Xh() {
    return Xh = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ,
    Xh.apply(this, arguments)
}
function tP(t, e) {
    if (t == null)
        return {};
    var n = {}, r = Object.keys(t), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n
}
function nP(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function rP(t, e) {
    return t.button === 0 && (!e || e === "_self") && !nP(t)
}
const iP = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
  , oP = "startTransition"
  , Kg = nC[oP];
function sP(t) {
    let {basename: e, children: n, future: r, window: i} = t
      , o = E.useRef();
    o.current == null && (o.current = hT({
        window: i,
        v5Compat: !0
    }));
    let s = o.current
      , [a,l] = E.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = E.useCallback(f => {
        u && Kg ? Kg( () => l(f)) : l(f)
    }
    , [l, u]);
    return E.useLayoutEffect( () => s.listen(c), [s, c]),
    E.createElement(eP, {
        basename: e,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s
    })
}
const aP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , lP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Zt = E.forwardRef(function(e, n) {
    let {onClick: r, relative: i, reloadDocument: o, replace: s, state: a, target: l, to: u, preventScrollReset: c, unstable_viewTransition: f} = e, d = tP(e, iP), {basename: h} = E.useContext(la), m, p = !1;
    if (typeof u == "string" && lP.test(u) && (m = u,
    aP))
        try {
            let v = new URL(window.location.href)
              , _ = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u)
              , w = Lm(_.pathname, h);
            _.origin === v.origin && w != null ? u = w + _.search + _.hash : p = !0
        } catch {}
    let x = IT(u, {
        relative: i
    })
      , y = uP(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f
    });
    function g(v) {
        r && r(v),
        v.defaultPrevented || y(v)
    }
    return E.createElement("a", Xh({}, d, {
        href: m || x,
        onClick: p || o ? r : g,
        ref: n,
        target: l
    }))
});
var Qg;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(Qg || (Qg = {}));
var qg;
(function(t) {
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(qg || (qg = {}));
function uP(t, e) {
    let {target: n, replace: r, state: i, preventScrollReset: o, relative: s, unstable_viewTransition: a} = e === void 0 ? {} : e
      , l = zT()
      , u = Kl()
      , c = d_(t, {
        relative: s
    });
    return E.useCallback(f => {
        if (rP(f, n)) {
            f.preventDefault();
            let d = r !== void 0 ? r : zc(u) === zc(c);
            l(t, {
                replace: d,
                state: i,
                preventScrollReset: o,
                relative: s,
                unstable_viewTransition: a
            })
        }
    }
    , [u, l, c, r, i, n, t, o, s, a])
}
function Ga() {
    return Ga = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ,
    Ga.apply(this, arguments)
}
const Rl = {
    origin: [0, 0, 0],
    round: 4
}
  , Xa = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    r: 4,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
};
function Zg(t) {
    let e = t.pathValue[t.segmentStart]
      , n = e.toLowerCase();
    const {data: r} = t;
    for (; r.length >= Xa[n] && (n === "m" && r.length > 2 ? (t.segments.push([e, ...r.splice(0, 2)]),
    n = "l",
    e = e === "m" ? "l" : "L") : t.segments.push([e, ...r.splice(0, Xa[n])]),
    Xa[n]); )
        ;
}
const br = "SVGPathCommander error";
function cP(t) {
    const {index: e, pathValue: n} = t
      , r = n.charCodeAt(e);
    return r === 48 ? (t.param = 0,
    void (t.index += 1)) : r === 49 ? (t.param = 1,
    void (t.index += 1)) : void (t.err = `${br}: invalid Arc flag "${n[e]}", expecting 0 or 1 at index ${e}`)
}
function es(t) {
    return t >= 48 && t <= 57
}
const os = "Invalid path value";
function fP(t) {
    const {max: e, pathValue: n, index: r} = t;
    let i, o = r, s = !1, a = !1, l = !1, u = !1;
    if (o >= e)
        t.err = `${br}: ${os} at index ${o}, "pathValue" is missing param`;
    else if (i = n.charCodeAt(o),
    i !== 43 && i !== 45 || (o += 1,
    i = n.charCodeAt(o)),
    es(i) || i === 46) {
        if (i !== 46) {
            if (s = i === 48,
            o += 1,
            i = n.charCodeAt(o),
            s && o < e && i && es(i))
                return void (t.err = `${br}: ${os} at index ${r}, "${n[r]}" illegal number`);
            for (; o < e && es(n.charCodeAt(o)); )
                o += 1,
                a = !0;
            i = n.charCodeAt(o)
        }
        if (i === 46) {
            for (u = !0,
            o += 1; es(n.charCodeAt(o)); )
                o += 1,
                l = !0;
            i = n.charCodeAt(o)
        }
        if (i === 101 || i === 69) {
            if (u && !a && !l)
                return void (t.err = `${br}: ${os} at index ${o}, "${n[o]}" invalid float exponent`);
            if (o += 1,
            i = n.charCodeAt(o),
            i !== 43 && i !== 45 || (o += 1),
            !(o < e && es(n.charCodeAt(o))))
                return void (t.err = `${br}: ${os} at index ${o}, "${n[o]}" invalid integer exponent`);
            for (; o < e && es(n.charCodeAt(o)); )
                o += 1
        }
        t.index = o,
        t.param = +t.pathValue.slice(r, o)
    } else
        t.err = `${br}: ${os} at index ${o}, "${n[o]}" is not a number`
}
function Ka(t) {
    const {pathValue: e, max: n} = t;
    for (; t.index < n && ((r = e.charCodeAt(t.index)) === 10 || r === 13 || r === 8232 || r === 8233 || r === 32 || r === 9 || r === 11 || r === 12 || r === 160 || r >= 5760 && [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(r)); )
        t.index += 1;
    var r
}
function dP(t) {
    return t >= 48 && t <= 57 || t === 43 || t === 45 || t === 46
}
function g_(t) {
    const {max: e, pathValue: n, index: r} = t
      , i = n.charCodeAt(r)
      , o = Xa[n[r].toLowerCase()];
    if (t.segmentStart = r,
    function(s) {
        switch (32 | s) {
        case 109:
        case 122:
        case 108:
        case 104:
        case 118:
        case 99:
        case 115:
        case 113:
        case 116:
        case 97:
            return !0;
        default:
            return !1
        }
    }(i))
        if (t.index += 1,
        Ka(t),
        t.data = [],
        o) {
            for (; ; ) {
                for (let s = o; s > 0; s -= 1) {
                    if ((32 | i) != 97 || s !== 3 && s !== 4 ? fP(t) : cP(t),
                    t.err.length)
                        return;
                    t.data.push(t.param),
                    Ka(t),
                    t.index < e && n.charCodeAt(t.index) === 44 && (t.index += 1,
                    Ka(t))
                }
                if (t.index >= t.max || !dP(n.charCodeAt(t.index)))
                    break
            }
            Zg(t)
        } else
            Zg(t);
    else
        t.err = `${br}: ${os} "${n[r]}" is not a path command`
}
function ur(t) {
    return t.map(e => Array.isArray(e) ? [...e] : e)
}
function y_(t) {
    this.segments = [],
    this.pathValue = t,
    this.max = t.length,
    this.index = 0,
    this.param = 0,
    this.segmentStart = 0,
    this.data = [],
    this.err = ""
}
function Rf(t) {
    return Array.isArray(t) && t.every(e => {
        const n = e[0].toLowerCase();
        return Xa[n] === e.length - 1 && "achlmqstvz".includes(n)
    }
    )
}
function Vi(t) {
    if (Rf(t))
        return ur(t);
    const e = new y_(t);
    for (Ka(e); e.index < e.max && !e.err.length; )
        g_(e);
    return e.err ? e.err : e.segments
}
function jm(t) {
    return Rf(t) && t.every( ([e]) => e === e.toUpperCase())
}
function ua(t) {
    if (jm(t))
        return ur(t);
    const e = Vi(t);
    let n = 0
      , r = 0
      , i = 0
      , o = 0;
    return e.map(s => {
        const a = s.slice(1).map(Number)
          , [l] = s
          , u = l.toUpperCase();
        if (l === "M")
            return [n,r] = a,
            i = n,
            o = r,
            ["M", n, r];
        let c = [];
        if (l !== u)
            switch (u) {
            case "A":
                c = [u, a[0], a[1], a[2], a[3], a[4], a[5] + n, a[6] + r];
                break;
            case "V":
                c = [u, a[0] + r];
                break;
            case "H":
                c = [u, a[0] + n];
                break;
            default:
                c = [u, ...a.map( (d, h) => d + (h % 2 ? r : n))]
            }
        else
            c = [u, ...a];
        const f = c.length;
        switch (u) {
        case "Z":
            n = i,
            r = o;
            break;
        case "H":
            [,n] = c;
            break;
        case "V":
            [,r] = c;
            break;
        default:
            n = c[f - 2],
            r = c[f - 1],
            u === "M" && (i = n,
            o = r)
        }
        return c
    }
    )
}
function v_(t) {
    return Rf(t) && t.slice(1).every( ([e]) => e === e.toLowerCase())
}
function Vm(t) {
    if (v_(t))
        return ur(t);
    const e = Vi(t);
    let n = 0
      , r = 0
      , i = 0
      , o = 0;
    return e.map(s => {
        const a = s.slice(1).map(Number)
          , [l] = s
          , u = l.toLowerCase();
        if (l === "M")
            return [n,r] = a,
            i = n,
            o = r,
            ["M", n, r];
        let c = [];
        if (l !== u)
            switch (u) {
            case "a":
                c = [u, a[0], a[1], a[2], a[3], a[4], a[5] - n, a[6] - r];
                break;
            case "v":
                c = [u, a[0] - r];
                break;
            case "h":
                c = [u, a[0] - n];
                break;
            default:
                c = [u, ...a.map( (d, h) => d - (h % 2 ? r : n))]
            }
        else
            l === "m" && (i = a[0] + n,
            o = a[1] + r),
            c = [u, ...a];
        const f = c.length;
        switch (u) {
        case "z":
            n = i,
            r = o;
            break;
        case "h":
            n += c[1];
            break;
        case "v":
            r += c[1];
            break;
        default:
            n += c[f - 2],
            r += c[f - 1]
        }
        return c
    }
    )
}
function Kh(t, e, n) {
    if (t[n].length > 7) {
        t[n].shift();
        const r = t[n];
        let i = n;
        for (; r.length; )
            e[n] = "A",
            t.splice(i += 1, 0, ["C", ...r.splice(0, 6)]);
        t.splice(n, 1)
    }
}
function Fm(t) {
    return jm(t) && t.every( ([e]) => "ACLMQZ".includes(e))
}
function x_(t) {
    return Fm(t) && t.every( ([e]) => "MC".includes(e))
}
function hP(t, e) {
    const [n] = t
      , {x1: r, y1: i, x2: o, y2: s} = e
      , a = t.slice(1).map(Number);
    let l = t;
    if ("TQ".includes(n) || (e.qx = null,
    e.qy = null),
    n === "H")
        l = ["L", t[1], i];
    else if (n === "V")
        l = ["L", r, t[1]];
    else if (n === "S") {
        const u = 2 * r - o
          , c = 2 * i - s;
        e.x1 = u,
        e.y1 = c,
        l = ["C", u, c, ...a]
    } else if (n === "T") {
        const u = 2 * r - e.qx
          , c = 2 * i - e.qy;
        e.qx = u,
        e.qy = c,
        l = ["Q", u, c, ...a]
    } else if (n === "Q") {
        const [u,c] = a;
        e.qx = u,
        e.qy = c
    }
    return l
}
const Nf = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x: 0,
    y: 0,
    qx: null,
    qy: null
};
function qr(t) {
    if (Fm(t))
        return ur(t);
    const e = ua(t)
      , n = {
        ...Nf
    }
      , r = e.length;
    for (let i = 0; i < r; i += 1) {
        e[i],
        e[i] = hP(e[i], n);
        const o = e[i]
          , s = o.length;
        n.x1 = +o[s - 2],
        n.y1 = +o[s - 1],
        n.x2 = +o[s - 4] || n.x1,
        n.y2 = +o[s - 3] || n.y1
    }
    return e
}
function Cu(t, e, n) {
    return {
        x: t * Math.cos(n) - e * Math.sin(n),
        y: t * Math.sin(n) + e * Math.cos(n)
    }
}
function __(t, e, n, r, i, o, s, a, l, u) {
    let c = t
      , f = e
      , d = n
      , h = r
      , m = a
      , p = l;
    const x = 120 * Math.PI / 180
      , y = Math.PI / 180 * (+i || 0);
    let g, v, _, w, C, S = [];
    if (u)
        [v,_,w,C] = u;
    else {
        g = Cu(c, f, -y),
        c = g.x,
        f = g.y,
        g = Cu(m, p, -y),
        m = g.x,
        p = g.y;
        const O = (c - m) / 2
          , W = (f - p) / 2;
        let ge = O * O / (d * d) + W * W / (h * h);
        ge > 1 && (ge = Math.sqrt(ge),
        d *= ge,
        h *= ge);
        const Z = d * d
          , oe = h * h
          , se = (o === s ? -1 : 1) * Math.sqrt(Math.abs((Z * oe - Z * W * W - oe * O * O) / (Z * W * W + oe * O * O)));
        w = se * d * W / h + (c + m) / 2,
        C = se * -h * O / d + (f + p) / 2,
        v = Math.asin(((f - C) / h * 10 ** 9 >> 0) / 10 ** 9),
        _ = Math.asin(((p - C) / h * 10 ** 9 >> 0) / 10 ** 9),
        v = c < w ? Math.PI - v : v,
        _ = m < w ? Math.PI - _ : _,
        v < 0 && (v = 2 * Math.PI + v),
        _ < 0 && (_ = 2 * Math.PI + _),
        s && v > _ && (v -= 2 * Math.PI),
        !s && _ > v && (_ -= 2 * Math.PI)
    }
    let T = _ - v;
    if (Math.abs(T) > x) {
        const O = _
          , W = m
          , ge = p;
        _ = v + x * (s && _ > v ? 1 : -1),
        m = w + d * Math.cos(_),
        p = C + h * Math.sin(_),
        S = __(m, p, d, h, i, 0, s, W, ge, [_, O, w, C])
    }
    T = _ - v;
    const M = Math.cos(v)
      , A = Math.sin(v)
      , b = Math.cos(_)
      , D = Math.sin(_)
      , U = Math.tan(T / 4)
      , j = 4 / 3 * d * U
      , F = 4 / 3 * h * U
      , H = [c, f]
      , I = [c + j * A, f - F * M]
      , R = [m + j * D, p - F * b]
      , V = [m, p];
    if (I[0] = 2 * H[0] - I[0],
    I[1] = 2 * H[1] - I[1],
    u)
        return [...I, ...R, ...V, ...S];
    S = [...I, ...R, ...V, ...S];
    const k = [];
    for (let O = 0, W = S.length; O < W; O += 1)
        k[O] = O % 2 ? Cu(S[O - 1], S[O], y).y : Cu(S[O], S[O + 1], y).x;
    return k
}
function pP(t, e, n, r, i, o) {
    const s = .3333333333333333
      , a = 2 / 3;
    return [s * t + a * n, s * e + a * r, s * i + a * n, s * o + a * r, i, o]
}
function ss(t, e, n) {
    const [r,i] = t
      , [o,s] = e;
    return [r + (o - r) * n, i + (s - i) * n]
}
function Df(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
}
function Nl(t, e, n, r, i) {
    const o = Df([t, e], [n, r]);
    let s = {
        x: 0,
        y: 0
    };
    if (typeof i == "number")
        if (i <= 0)
            s = {
                x: t,
                y: e
            };
        else if (i >= o)
            s = {
                x: n,
                y: r
            };
        else {
            const [a,l] = ss([t, e], [n, r], i / o);
            s = {
                x: a,
                y: l
            }
        }
    return {
        length: o,
        point: s,
        min: {
            x: Math.min(t, n),
            y: Math.min(e, r)
        },
        max: {
            x: Math.max(t, n),
            y: Math.max(e, r)
        }
    }
}
function Jg(t, e, n, r) {
    const o = [t, e]
      , s = [n, r]
      , a = ss(o, s, .5)
      , l = ss(s, a, .5)
      , u = ss(a, l, .5)
      , c = ss(l, u, .5)
      , f = ss(u, c, .5)
      , d = Nl(...o, ...a, ...u, ...f, .5).point
      , h = Nl(...f, ...c, ...l, ...s, 0).point;
    return [d.x, d.y, h.x, h.y, n, r]
}
function tc(t, e) {
    const [n] = t
      , r = t.slice(1).map(Number)
      , [i,o] = r;
    let s;
    const {x1: a, y1: l, x: u, y: c} = e;
    switch ("TQ".includes(n) || (e.qx = null,
    e.qy = null),
    n) {
    case "M":
        return e.x = i,
        e.y = o,
        t;
    case "A":
        return s = [a, l, ...r],
        ["C", ...__(...s)];
    case "Q":
        return e.qx = i,
        e.qy = o,
        s = [a, l, ...r],
        ["C", ...pP(...s)];
    case "L":
        return ["C", ...Jg(a, l, i, o)];
    case "Z":
        return ["C", ...Jg(a, l, u, c)]
    }
    return t
}
function Uc(t) {
    if (x_(t))
        return ur(t);
    const e = qr(t)
      , n = {
        ...Nf
    }
      , r = [];
    let i = ""
      , o = e.length;
    for (let s = 0; s < o; s += 1) {
        [i] = e[s],
        r[s] = i,
        e[s] = tc(e[s], n),
        Kh(e, r, s),
        o = e.length;
        const a = e[s]
          , l = a.length;
        n.x1 = +a[l - 2],
        n.y1 = +a[l - 1],
        n.x2 = +a[l - 4] || n.x1,
        n.y2 = +a[l - 3] || n.y1
    }
    return e
}
function Wc(t, e) {
    let {round: n} = Rl;
    if (e === "off" || n === "off")
        return ur(t);
    n = e >= 0 ? e : n;
    const r = typeof n == "number" && n >= 1 ? 10 ** n : 1;
    return t.map(i => {
        const o = i.slice(1).map(Number).map(s => n ? Math.round(s * r) / r : Math.round(s));
        return [i[0], ...o]
    }
    )
}
function lo(t, e) {
    return Wc(t, e).map(n => n[0] + n.slice(1).join(" ")).join("")
}
function nc(t) {
    const e = ua(t)
      , n = e.slice(-1)[0][0] === "Z"
      , r = qr(e).map( (i, o) => {
        const [s,a] = i.slice(-2).map(Number);
        return {
            seg: e[o],
            n: i,
            c: e[o][0],
            x: s,
            y: a
        }
    }
    ).map( (i, o, s) => {
        const a = i.seg
          , l = i.n
          , u = o && s[o - 1]
          , c = s[o + 1]
          , f = i.c
          , d = s.length
          , h = o ? s[o - 1].x : s[d - 1].x
          , m = o ? s[o - 1].y : s[d - 1].y;
        let p = [];
        switch (f) {
        case "M":
            p = n ? ["Z"] : [f, h, m];
            break;
        case "A":
            p = [f, ...a.slice(1, -3), a[5] === 1 ? 0 : 1, h, m];
            break;
        case "C":
            p = c && c.c === "S" ? ["S", a[1], a[2], h, m] : [f, a[3], a[4], a[1], a[2], h, m];
            break;
        case "S":
            p = !u || !"CS".includes(u.c) || c && c.c === "S" ? [f, l[1], l[2], h, m] : ["C", l[3], l[4], l[1], l[2], h, m];
            break;
        case "Q":
            p = c && c.c === "T" ? ["T", h, m] : [f, ...a.slice(1, -2), h, m];
            break;
        case "T":
            p = !u || !"QT".includes(u.c) || c && c.c === "T" ? [f, h, m] : ["Q", l[1], l[2], h, m];
            break;
        case "Z":
            p = ["M", h, m];
            break;
        case "H":
            p = [f, h];
            break;
        case "V":
            p = [f, m];
            break;
        default:
            p = [f, ...a.slice(1, -2), h, m]
        }
        return p
    }
    );
    return n ? r.reverse() : [r[0], ...r.slice(1).reverse()]
}
function w_(t) {
    const e = [];
    let n, r = -1;
    return t.forEach(i => {
        i[0] === "M" ? (n = [i],
        r += 1) : n = [...n, i],
        e[r] = n
    }
    ),
    e
}
function mP(t, e, n, r) {
    const [i] = t
      , o = y => Math.round(1e4 * y) / 1e4
      , s = t.slice(1).map(y => +y)
      , a = e.slice(1).map(y => +y)
      , {x1: l, y1: u, x2: c, y2: f, x: d, y: h} = n;
    let m = t;
    const [p,x] = a.slice(-2);
    if ("TQ".includes(i) || (n.qx = null,
    n.qy = null),
    ["V", "H", "S", "T", "Z"].includes(i))
        m = [i, ...s];
    else if (i === "L")
        o(d) === o(p) ? m = ["V", x] : o(h) === o(x) && (m = ["H", p]);
    else if (i === "C") {
        const [y,g] = a;
        "CS".includes(r) && (o(y) === o(2 * l - c) && o(g) === o(2 * u - f) || o(l) === o(2 * c - d) && o(u) === o(2 * f - h)) && (m = ["S", ...a.slice(-4)]),
        n.x1 = y,
        n.y1 = g
    } else if (i === "Q") {
        const [y,g] = a;
        n.qx = y,
        n.qy = g,
        "QT".includes(r) && (o(y) === o(2 * l - c) && o(g) === o(2 * u - f) || o(l) === o(2 * c - d) && o(u) === o(2 * f - h)) && (m = ["T", ...a.slice(-2)])
    }
    return m
}
function S_(t, e) {
    const n = ua(t)
      , r = qr(n)
      , i = {
        ...Nf
    }
      , o = []
      , s = n.length;
    let a = ""
      , l = ""
      , u = 0
      , c = 0
      , f = 0
      , d = 0;
    for (let p = 0; p < s; p += 1) {
        [a] = n[p],
        o[p] = a,
        p && (l = o[p - 1]),
        n[p] = mP(n[p], r[p], i, l);
        const x = n[p]
          , y = x.length;
        switch (i.x1 = +x[y - 2],
        i.y1 = +x[y - 1],
        i.x2 = +x[y - 4] || i.x1,
        i.y2 = +x[y - 3] || i.y1,
        a) {
        case "Z":
            u = f,
            c = d;
            break;
        case "H":
            [,u] = x;
            break;
        case "V":
            [,c] = x;
            break;
        default:
            [u,c] = x.slice(-2).map(Number),
            a === "M" && (f = u,
            d = c)
        }
        i.x = u,
        i.y = c
    }
    const h = Wc(n, e)
      , m = Wc(Vm(n), e);
    return h.map( (p, x) => x ? p.join("").length < m[x].join("").length ? p : m[x] : p)
}
function Ql(t) {
    const e = new fn
      , n = Array.from(t);
    if (!n.every(r => !Number.isNaN(r)))
        throw TypeError(`CSSMatrix: "${t}" must only have numbers.`);
    if (n.length === 16) {
        const [r,i,o,s,a,l,u,c,f,d,h,m,p,x,y,g] = n;
        e.m11 = r,
        e.a = r,
        e.m21 = a,
        e.c = a,
        e.m31 = f,
        e.m41 = p,
        e.e = p,
        e.m12 = i,
        e.b = i,
        e.m22 = l,
        e.d = l,
        e.m32 = d,
        e.m42 = x,
        e.f = x,
        e.m13 = o,
        e.m23 = u,
        e.m33 = h,
        e.m43 = y,
        e.m14 = s,
        e.m24 = c,
        e.m34 = m,
        e.m44 = g
    } else {
        if (n.length !== 6)
            throw new TypeError("CSSMatrix: expecting an Array of 6/16 values.");
        {
            const [r,i,o,s,a,l] = n;
            e.m11 = r,
            e.a = r,
            e.m12 = i,
            e.b = i,
            e.m21 = o,
            e.c = o,
            e.m22 = s,
            e.d = s,
            e.m41 = a,
            e.e = a,
            e.m42 = l,
            e.f = l
        }
    }
    return e
}
function C_(t) {
    const e = Object.keys(new fn);
    if (typeof t == "object" && e.every(n => n in t))
        return Ql([t.m11, t.m12, t.m13, t.m14, t.m21, t.m22, t.m23, t.m24, t.m31, t.m32, t.m33, t.m34, t.m41, t.m42, t.m43, t.m44]);
    throw TypeError(`CSSMatrix: "${JSON.stringify(t)}" is not a DOMMatrix / CSSMatrix / JSON compatible object.`)
}
function k_(t) {
    if (typeof t != "string")
        throw TypeError(`CSSMatrix: "${t}" is not a string.`);
    const e = String(t).replace(/\s/g, "");
    let n = new fn;
    const r = `CSSMatrix: invalid transform string "${t}"`;
    return e.split(")").filter(i => i).forEach(i => {
        const [o,s] = i.split("(");
        if (!s)
            throw TypeError(r);
        const a = s.split(",").map(m => m.includes("rad") ? parseFloat(m) * (180 / Math.PI) : parseFloat(m))
          , [l,u,c,f] = a
          , d = [l, u, c]
          , h = [l, u, c, f];
        if (o === "perspective" && l && [u, c].every(m => m === void 0))
            n.m34 = -1 / l;
        else if (o.includes("matrix") && [6, 16].includes(a.length) && a.every(m => !Number.isNaN(+m))) {
            const m = a.map(p => Math.abs(p) < 1e-6 ? 0 : p);
            n = n.multiply(Ql(m))
        } else if (o === "translate3d" && d.every(m => !Number.isNaN(+m)))
            n = n.translate(l, u, c);
        else if (o === "translate" && l && c === void 0)
            n = n.translate(l, u || 0, 0);
        else if (o === "rotate3d" && h.every(m => !Number.isNaN(+m)) && f)
            n = n.rotateAxisAngle(l, u, c, f);
        else if (o === "rotate" && l && [u, c].every(m => m === void 0))
            n = n.rotate(0, 0, l);
        else if (o === "scale3d" && d.every(m => !Number.isNaN(+m)) && d.some(m => m !== 1))
            n = n.scale(l, u, c);
        else if (o !== "scale" || Number.isNaN(l) || l === 1 || c !== void 0)
            if (o === "skew" && (l || !Number.isNaN(l) && u) && c === void 0)
                n = n.skew(l, u || 0);
            else {
                if (!(/[XYZ]/.test(o) && l && [u, c].every(m => m === void 0) && ["translate", "rotate", "scale", "skew"].some(m => o.includes(m))))
                    throw TypeError(r);
                if (["skewX", "skewY"].includes(o))
                    n = n[o](l);
                else {
                    const m = o.replace(/[XYZ]/, "")
                      , p = o.replace(m, "")
                      , x = ["X", "Y", "Z"].indexOf(p)
                      , y = m === "scale" ? 1 : 0
                      , g = [x === 0 ? l : y, x === 1 ? l : y, x === 2 ? l : y];
                    n = n[m](...g)
                }
            }
        else {
            const m = Number.isNaN(+u) ? l : u;
            n = n.scale(l, m, 1)
        }
    }
    ),
    n
}
function Qh(t, e) {
    return e ? [t.a, t.b, t.c, t.d, t.e, t.f] : [t.m11, t.m12, t.m13, t.m14, t.m21, t.m22, t.m23, t.m24, t.m31, t.m32, t.m33, t.m34, t.m41, t.m42, t.m43, t.m44]
}
function Im(t, e, n) {
    const r = new fn;
    return r.m41 = t,
    r.e = t,
    r.m42 = e,
    r.f = e,
    r.m43 = n,
    r
}
function T_(t, e, n) {
    const r = new fn
      , i = Math.PI / 180
      , o = t * i
      , s = e * i
      , a = n * i
      , l = Math.cos(o)
      , u = -Math.sin(o)
      , c = Math.cos(s)
      , f = -Math.sin(s)
      , d = Math.cos(a)
      , h = -Math.sin(a)
      , m = c * d
      , p = -c * h;
    r.m11 = m,
    r.a = m,
    r.m12 = p,
    r.b = p,
    r.m13 = f;
    const x = u * f * d + l * h;
    r.m21 = x,
    r.c = x;
    const y = l * d - u * f * h;
    return r.m22 = y,
    r.d = y,
    r.m23 = -u * c,
    r.m31 = u * h - l * f * d,
    r.m32 = u * d + l * f * h,
    r.m33 = l * c,
    r
}
function P_(t, e, n, r) {
    const i = new fn
      , o = Math.sqrt(t * t + e * e + n * n);
    if (o === 0)
        return i;
    const s = t / o
      , a = e / o
      , l = n / o
      , u = r * (Math.PI / 360)
      , c = Math.sin(u)
      , f = Math.cos(u)
      , d = c * c
      , h = s * s
      , m = a * a
      , p = l * l
      , x = 1 - 2 * (m + p) * d;
    i.m11 = x,
    i.a = x;
    const y = 2 * (s * a * d + l * c * f);
    i.m12 = y,
    i.b = y,
    i.m13 = 2 * (s * l * d - a * c * f);
    const g = 2 * (a * s * d - l * c * f);
    i.m21 = g,
    i.c = g;
    const v = 1 - 2 * (p + h) * d;
    return i.m22 = v,
    i.d = v,
    i.m23 = 2 * (a * l * d + s * c * f),
    i.m31 = 2 * (l * s * d + a * c * f),
    i.m32 = 2 * (l * a * d - s * c * f),
    i.m33 = 1 - 2 * (h + m) * d,
    i
}
function E_(t, e, n) {
    const r = new fn;
    return r.m11 = t,
    r.a = t,
    r.m22 = e,
    r.d = e,
    r.m33 = n,
    r
}
function Of(t, e) {
    const n = new fn;
    if (t) {
        const r = t * Math.PI / 180
          , i = Math.tan(r);
        n.m21 = i,
        n.c = i
    }
    if (e) {
        const r = e * Math.PI / 180
          , i = Math.tan(r);
        n.m12 = i,
        n.b = i
    }
    return n
}
function M_(t) {
    return Of(t, 0)
}
function A_(t) {
    return Of(0, t)
}
function Rr(t, e) {
    return Ql([e.m11 * t.m11 + e.m12 * t.m21 + e.m13 * t.m31 + e.m14 * t.m41, e.m11 * t.m12 + e.m12 * t.m22 + e.m13 * t.m32 + e.m14 * t.m42, e.m11 * t.m13 + e.m12 * t.m23 + e.m13 * t.m33 + e.m14 * t.m43, e.m11 * t.m14 + e.m12 * t.m24 + e.m13 * t.m34 + e.m14 * t.m44, e.m21 * t.m11 + e.m22 * t.m21 + e.m23 * t.m31 + e.m24 * t.m41, e.m21 * t.m12 + e.m22 * t.m22 + e.m23 * t.m32 + e.m24 * t.m42, e.m21 * t.m13 + e.m22 * t.m23 + e.m23 * t.m33 + e.m24 * t.m43, e.m21 * t.m14 + e.m22 * t.m24 + e.m23 * t.m34 + e.m24 * t.m44, e.m31 * t.m11 + e.m32 * t.m21 + e.m33 * t.m31 + e.m34 * t.m41, e.m31 * t.m12 + e.m32 * t.m22 + e.m33 * t.m32 + e.m34 * t.m42, e.m31 * t.m13 + e.m32 * t.m23 + e.m33 * t.m33 + e.m34 * t.m43, e.m31 * t.m14 + e.m32 * t.m24 + e.m33 * t.m34 + e.m34 * t.m44, e.m41 * t.m11 + e.m42 * t.m21 + e.m43 * t.m31 + e.m44 * t.m41, e.m41 * t.m12 + e.m42 * t.m22 + e.m43 * t.m32 + e.m44 * t.m42, e.m41 * t.m13 + e.m42 * t.m23 + e.m43 * t.m33 + e.m44 * t.m43, e.m41 * t.m14 + e.m42 * t.m24 + e.m43 * t.m34 + e.m44 * t.m44])
}
class fn {
    constructor(...e) {
        const n = this;
        if (n.a = 1,
        n.b = 0,
        n.c = 0,
        n.d = 1,
        n.e = 0,
        n.f = 0,
        n.m11 = 1,
        n.m12 = 0,
        n.m13 = 0,
        n.m14 = 0,
        n.m21 = 0,
        n.m22 = 1,
        n.m23 = 0,
        n.m24 = 0,
        n.m31 = 0,
        n.m32 = 0,
        n.m33 = 1,
        n.m34 = 0,
        n.m41 = 0,
        n.m42 = 0,
        n.m43 = 0,
        n.m44 = 1,
        e.length) {
            const r = [16, 6].some(i => i === e.length) ? e : e[0];
            return n.setMatrixValue(r)
        }
        return n
    }
    get isIdentity() {
        const e = this;
        return e.m11 === 1 && e.m12 === 0 && e.m13 === 0 && e.m14 === 0 && e.m21 === 0 && e.m22 === 1 && e.m23 === 0 && e.m24 === 0 && e.m31 === 0 && e.m32 === 0 && e.m33 === 1 && e.m34 === 0 && e.m41 === 0 && e.m42 === 0 && e.m43 === 0 && e.m44 === 1
    }
    get is2D() {
        const e = this;
        return e.m31 === 0 && e.m32 === 0 && e.m33 === 1 && e.m34 === 0 && e.m43 === 0 && e.m44 === 1
    }
    setMatrixValue(e) {
        return typeof e == "string" && e.length && e !== "none" ? k_(e) : [Array, Float64Array, Float32Array].some(n => e instanceof n) ? Ql(e) : [fn, DOMMatrix, Object].some(n => e instanceof n) ? C_(e) : this
    }
    toFloat32Array(e) {
        return Float32Array.from(Qh(this, e))
    }
    toFloat64Array(e) {
        return Float64Array.from(Qh(this, e))
    }
    toString() {
        const {is2D: e} = this;
        return `${e ? "matrix" : "matrix3d"}(${this.toFloat64Array(e).join(", ")})`
    }
    toJSON() {
        const {is2D: e, isIdentity: n} = this;
        return {
            ...this,
            is2D: e,
            isIdentity: n
        }
    }
    multiply(e) {
        return Rr(this, e)
    }
    translate(e, n, r) {
        let i = n
          , o = r;
        return i === void 0 && (i = 0),
        o === void 0 && (o = 0),
        Rr(this, Im(e, i, o))
    }
    scale(e, n, r) {
        let i = n
          , o = r;
        return i === void 0 && (i = e),
        o === void 0 && (o = 1),
        Rr(this, E_(e, i, o))
    }
    rotate(e, n, r) {
        let i = e
          , o = n || 0
          , s = r || 0;
        return typeof e == "number" && n === void 0 && r === void 0 && (s = i,
        i = 0,
        o = 0),
        Rr(this, T_(i, o, s))
    }
    rotateAxisAngle(e, n, r, i) {
        if ([e, n, r, i].some(o => Number.isNaN(+o)))
            throw new TypeError("CSSMatrix: expecting 4 values");
        return Rr(this, P_(e, n, r, i))
    }
    skewX(e) {
        return Rr(this, M_(e))
    }
    skewY(e) {
        return Rr(this, A_(e))
    }
    skew(e, n) {
        return Rr(this, Of(e, n))
    }
    transformPoint(e) {
        const n = this
          , r = n.m11 * e.x + n.m21 * e.y + n.m31 * e.z + n.m41 * e.w
          , i = n.m12 * e.x + n.m22 * e.y + n.m32 * e.z + n.m42 * e.w
          , o = n.m13 * e.x + n.m23 * e.y + n.m33 * e.z + n.m43 * e.w
          , s = n.m14 * e.x + n.m24 * e.y + n.m34 * e.z + n.m44 * e.w;
        return e instanceof DOMPoint ? new DOMPoint(r,i,o,s) : {
            x: r,
            y: i,
            z: o,
            w: s
        }
    }
}
Object.assign(fn, {
    Translate: Im,
    Rotate: T_,
    RotateAxisAngle: P_,
    Scale: E_,
    SkewX: M_,
    SkewY: A_,
    Skew: Of,
    Multiply: Rr,
    fromArray: Ql,
    fromMatrix: C_,
    fromString: k_,
    toArray: Qh
});
function ey(t, e, n) {
    const [r,i,o] = n
      , [s,a,l] = function(f, d) {
        let h = Im(...d);
        return [,,,h.m44] = d,
        h = f.multiply(h),
        [h.m41, h.m42, h.m43, h.m44]
    }(t, [...e, 0, 1])
      , u = a - i
      , c = l - o;
    return [(s - r) * (Math.abs(o) / Math.abs(c) || 1) + r, u * (Math.abs(o) / Math.abs(c) || 1) + i]
}
function R_(t, e) {
    let n, r, i, o, s, a, l = 0, u = 0;
    const c = ua(t)
      , f = e && Object.keys(e);
    if (!e || !f.length)
        return ur(c);
    const d = qr(c);
    if (!e.origin) {
        const {origin: w} = Rl;
        Object.assign(e, {
            origin: w
        })
    }
    const h = function(w) {
        let C = new fn;
        const {origin: S} = w
          , [T,M] = S
          , {translate: A} = w
          , {rotate: b} = w
          , {skew: D} = w
          , {scale: U} = w;
        return Array.isArray(A) && A.every(j => !Number.isNaN(+j)) && A.some(j => j !== 0) ? C = C.translate(...A) : typeof A != "number" || Number.isNaN(A) || (C = C.translate(A)),
        (b || D || U) && (C = C.translate(T, M),
        Array.isArray(b) && b.every(j => !Number.isNaN(+j)) && b.some(j => j !== 0) ? C = C.rotate(...b) : typeof b != "number" || Number.isNaN(b) || (C = C.rotate(b)),
        Array.isArray(D) && D.every(j => !Number.isNaN(+j)) && D.some(j => j !== 0) ? (C = D[0] ? C.skewX(D[0]) : C,
        C = D[1] ? C.skewY(D[1]) : C) : typeof D != "number" || Number.isNaN(D) || (C = C.skewX(D)),
        Array.isArray(U) && U.every(j => !Number.isNaN(+j)) && U.some(j => j !== 1) ? C = C.scale(...U) : typeof U != "number" || Number.isNaN(U) || (C = C.scale(U)),
        C = C.translate(-T, -M)),
        C
    }(e)
      , {origin: m} = e
      , p = {
        ...Nf
    };
    let x = []
      , y = 0
      , g = ""
      , v = [];
    const _ = [];
    if (!h.isIdentity) {
        for (n = 0,
        i = c.length; n < i; n += 1) {
            x = c[n],
            c[n] && ([g] = x),
            _[n] = g,
            g === "A" && (x = tc(d[n], p),
            c[n] = tc(d[n], p),
            Kh(c, _, n),
            d[n] = tc(d[n], p),
            Kh(d, _, n),
            i = Math.max(c.length, d.length)),
            x = d[n],
            y = x.length,
            p.x1 = +x[y - 2],
            p.y1 = +x[y - 1],
            p.x2 = +x[y - 4] || p.x1,
            p.y2 = +x[y - 3] || p.y1;
            const w = {
                s: c[n],
                c: c[n][0],
                x: p.x1,
                y: p.y1
            };
            v = [...v, w]
        }
        return v.map(w => {
            switch (g = w.c,
            x = w.s,
            g) {
            case "L":
            case "H":
            case "V":
                return [s,a] = ey(h, [w.x, w.y], m),
                l !== s && u !== a ? x = ["L", s, a] : u === a ? x = ["H", s] : l === s && (x = ["V", a]),
                l = s,
                u = a,
                x;
            default:
                for (r = 1,
                o = x.length; r < o; r += 2)
                    [l,u] = ey(h, [+x[r], +x[r + 1]], m),
                    x[r] = l,
                    x[r + 1] = u;
                return x
            }
        }
        )
    }
    return ur(c)
}
function ty(t, e) {
    const {x: n, y: r} = t
      , {x: i, y: o} = e
      , s = n * i + r * o
      , a = Math.sqrt((n ** 2 + r ** 2) * (i ** 2 + o ** 2));
    return (n * o - r * i < 0 ? -1 : 1) * Math.acos(s / a)
}
function gP(t, e, n, r, i, o, s, a, l, u) {
    const {abs: c, sin: f, cos: d, sqrt: h, PI: m} = Math;
    let p = c(n)
      , x = c(r);
    const y = (i % 360 + 360) % 360 * (m / 180);
    if (t === a && e === l)
        return {
            x: t,
            y: e
        };
    if (p === 0 || x === 0)
        return Nl(t, e, a, l, u).point;
    const g = (t - a) / 2
      , v = (e - l) / 2
      , _ = d(y) * g + f(y) * v
      , w = -f(y) * g + d(y) * v
      , C = _ ** 2 / p ** 2 + w ** 2 / x ** 2;
    C > 1 && (p *= h(C),
    x *= h(C));
    let S = (p ** 2 * x ** 2 - p ** 2 * w ** 2 - x ** 2 * _ ** 2) / (p ** 2 * w ** 2 + x ** 2 * _ ** 2);
    S = S < 0 ? 0 : S;
    const T = (o !== s ? 1 : -1) * h(S)
      , M = T * (p * w / x)
      , A = T * (-x * _ / p)
      , b = d(y) * M - f(y) * A + (t + a) / 2
      , D = f(y) * M + d(y) * A + (e + l) / 2
      , U = {
        x: (_ - M) / p,
        y: (w - A) / x
    }
      , j = ty({
        x: 1,
        y: 0
    }, U);
    let F = ty(U, {
        x: (-_ - M) / p,
        y: (-w - A) / x
    });
    !s && F > 0 ? F -= 2 * m : s && F < 0 && (F += 2 * m),
    F %= 2 * m;
    const H = j + F * u
      , I = p * d(H)
      , R = x * f(H);
    return {
        x: d(y) * I - f(y) * R + b,
        y: f(y) * I + d(y) * R + D
    }
}
function yP(t, e, n, r, i, o, s, a, l, u) {
    const c = typeof u == "number";
    let f = t
      , d = e
      , h = 0
      , m = [f, d, h]
      , p = [f, d]
      , x = 0
      , y = {
        x: 0,
        y: 0
    }
      , g = [{
        x: f,
        y: d
    }];
    c && u <= 0 && (y = {
        x: f,
        y: d
    });
    for (let v = 0; v <= 300; v += 1) {
        if (x = v / 300,
        {x: f, y: d} = gP(t, e, n, r, i, o, s, a, l, x),
        g = [...g, {
            x: f,
            y: d
        }],
        h += Df(p, [f, d]),
        p = [f, d],
        c && h > u && u > m[2]) {
            const _ = (h - u) / (h - m[2]);
            y = {
                x: p[0] * (1 - _) + m[0] * _,
                y: p[1] * (1 - _) + m[1] * _
            }
        }
        m = [f, d, h]
    }
    return c && u >= h && (y = {
        x: a,
        y: l
    }),
    {
        length: h,
        point: y,
        min: {
            x: Math.min(...g.map(v => v.x)),
            y: Math.min(...g.map(v => v.y))
        },
        max: {
            x: Math.max(...g.map(v => v.x)),
            y: Math.max(...g.map(v => v.y))
        }
    }
}
function vP(t, e, n, r, i, o, s, a, l) {
    const u = 1 - l;
    return {
        x: u ** 3 * t + 3 * u ** 2 * l * n + 3 * u * l ** 2 * i + l ** 3 * s,
        y: u ** 3 * e + 3 * u ** 2 * l * r + 3 * u * l ** 2 * o + l ** 3 * a
    }
}
function xP(t, e, n, r, i, o, s, a, l) {
    const u = typeof l == "number";
    let c = t
      , f = e
      , d = 0
      , h = [c, f, d]
      , m = [c, f]
      , p = 0
      , x = {
        x: 0,
        y: 0
    }
      , y = [{
        x: c,
        y: f
    }];
    u && l <= 0 && (x = {
        x: c,
        y: f
    });
    for (let g = 0; g <= 300; g += 1) {
        if (p = g / 300,
        {x: c, y: f} = vP(t, e, n, r, i, o, s, a, p),
        y = [...y, {
            x: c,
            y: f
        }],
        d += Df(m, [c, f]),
        m = [c, f],
        u && d > l && l > h[2]) {
            const v = (d - l) / (d - h[2]);
            x = {
                x: m[0] * (1 - v) + h[0] * v,
                y: m[1] * (1 - v) + h[1] * v
            }
        }
        h = [c, f, d]
    }
    return u && l >= d && (x = {
        x: s,
        y: a
    }),
    {
        length: d,
        point: x,
        min: {
            x: Math.min(...y.map(g => g.x)),
            y: Math.min(...y.map(g => g.y))
        },
        max: {
            x: Math.max(...y.map(g => g.x)),
            y: Math.max(...y.map(g => g.y))
        }
    }
}
function _P(t, e, n, r, i, o, s) {
    const a = 1 - s;
    return {
        x: a ** 2 * t + 2 * a * s * n + s ** 2 * i,
        y: a ** 2 * e + 2 * a * s * r + s ** 2 * o
    }
}
function wP(t, e, n, r, i, o, s) {
    const a = typeof s == "number";
    let l = t
      , u = e
      , c = 0
      , f = [l, u, c]
      , d = [l, u]
      , h = 0
      , m = {
        x: 0,
        y: 0
    }
      , p = [{
        x: l,
        y: u
    }];
    a && s <= 0 && (m = {
        x: l,
        y: u
    });
    for (let x = 0; x <= 300; x += 1) {
        if (h = x / 300,
        {x: l, y: u} = _P(t, e, n, r, i, o, h),
        p = [...p, {
            x: l,
            y: u
        }],
        c += Df(d, [l, u]),
        d = [l, u],
        a && c > s && s > f[2]) {
            const y = (c - s) / (c - f[2]);
            m = {
                x: d[0] * (1 - y) + f[0] * y,
                y: d[1] * (1 - y) + f[1] * y
            }
        }
        f = [l, u, c]
    }
    return a && s >= c && (m = {
        x: i,
        y: o
    }),
    {
        length: c,
        point: m,
        min: {
            x: Math.min(...p.map(x => x.x)),
            y: Math.min(...p.map(x => x.y))
        },
        max: {
            x: Math.max(...p.map(x => x.x)),
            y: Math.max(...p.map(x => x.y))
        }
    }
}
function Lf(t, e) {
    const n = qr(t)
      , r = typeof e == "number";
    let i, o, s, a = [], l = 0, u = 0, c = 0, f = 0, d = [], h = [], m = 0, p = {
        x: 0,
        y: 0
    }, x = p, y = p, g = p, v = 0;
    for (let _ = 0, w = n.length; _ < w; _ += 1)
        s = n[_],
        [o] = s,
        i = o === "M",
        a = i ? a : [l, u, ...s.slice(1)],
        i ? ([,c,f] = s,
        p = {
            x: c,
            y: f
        },
        x = p,
        m = 0,
        r && e < .001 && (g = p)) : o === "L" ? {length: m, min: p, max: x, point: y} = Nl(...a, (e || 0) - v) : o === "A" ? {length: m, min: p, max: x, point: y} = yP(...a, (e || 0) - v) : o === "C" ? {length: m, min: p, max: x, point: y} = xP(...a, (e || 0) - v) : o === "Q" ? {length: m, min: p, max: x, point: y} = wP(...a, (e || 0) - v) : o === "Z" && (a = [l, u, c, f],
        {length: m, min: p, max: x, point: y} = Nl(...a, (e || 0) - v)),
        r && v < e && v + m >= e && (g = y),
        h = [...h, x],
        d = [...d, p],
        v += m,
        [l,u] = o !== "Z" ? s.slice(-2) : [c, f];
    return r && e >= v && (g = {
        x: l,
        y: u
    }),
    {
        length: v,
        point: g,
        min: {
            x: Math.min(...d.map(_ => _.x)),
            y: Math.min(...d.map(_ => _.y))
        },
        max: {
            x: Math.max(...h.map(_ => _.x)),
            y: Math.max(...h.map(_ => _.y))
        }
    }
}
function N_(t) {
    if (!t)
        return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0,
            cx: 0,
            cy: 0,
            cz: 0
        };
    const {min: {x: e, y: n}, max: {x: r, y: i}} = Lf(t)
      , o = r - e
      , s = i - n;
    return {
        width: o,
        height: s,
        x: e,
        y: n,
        x2: r,
        y2: i,
        cx: e + o / 2,
        cy: n + s / 2,
        cz: Math.max(o, s) + Math.min(o, s) / 2
    }
}
function js(t) {
    return Lf(t).length
}
function Qa(t, e) {
    return Lf(t, e).point
}
Object.assign(fn, {
    Version: "1.0.3"
});
class rc {
    constructor(e, n) {
        const r = n || {}
          , i = e === void 0;
        if (i || !e.length)
            throw TypeError(`${br}: "pathValue" is ${i ? "undefined" : "empty"}`);
        const o = Vi(e);
        if (typeof o == "string")
            throw TypeError(o);
        this.segments = o;
        const {width: s, height: a, cx: l, cy: u, cz: c} = this.getBBox()
          , {round: f, origin: d} = r;
        let h, m;
        if (f === "auto") {
            const p = `${Math.floor(Math.max(s, a))}`.length;
            h = p >= 4 ? 0 : 4 - p
        } else
            Number.isInteger(f) || f === "off" ? h = f : {round: h} = Rl;
        if (Array.isArray(d) && d.length >= 2) {
            const [p,x,y] = d.map(Number);
            m = [Number.isNaN(p) ? l : p, Number.isNaN(x) ? u : x, Number.isNaN(y) ? c : y]
        } else
            m = [l, u, c];
        return this.round = h,
        this.origin = m,
        this
    }
    getBBox() {
        return N_(this.segments)
    }
    getTotalLength() {
        return js(this.segments)
    }
    getPointAtLength(e) {
        return Qa(this.segments, e)
    }
    toAbsolute() {
        const {segments: e} = this;
        return this.segments = ua(e),
        this
    }
    toRelative() {
        const {segments: e} = this;
        return this.segments = Vm(e),
        this
    }
    toCurve() {
        const {segments: e} = this;
        return this.segments = Uc(e),
        this
    }
    reverse(e) {
        this.toAbsolute();
        const {segments: n} = this
          , r = w_(n)
          , i = r.length > 1 ? r : 0
          , o = i && ur(i).map( (a, l) => e ? l ? nc(a) : Vi(a) : nc(a));
        let s = [];
        return s = i ? o.flat(1) : e ? n : nc(n),
        this.segments = ur(s),
        this
    }
    normalize() {
        const {segments: e} = this;
        return this.segments = qr(e),
        this
    }
    optimize() {
        const {segments: e} = this;
        return this.segments = S_(e, this.round),
        this
    }
    transform(e) {
        if (!e || typeof e != "object" || typeof e == "object" && !["translate", "rotate", "skew", "scale"].some(l => l in e))
            return this;
        const n = {};
        Object.keys(e).forEach(l => {
            n[l] = Array.isArray(e[l]) ? [...e[l]] : Number(e[l])
        }
        );
        const {segments: r} = this
          , [i,o,s] = this.origin
          , {origin: a} = n;
        if (Array.isArray(a) && a.length >= 2) {
            const [l,u,c] = a.map(Number);
            n.origin = [Number.isNaN(l) ? i : l, Number.isNaN(u) ? o : u, c || s]
        } else
            n.origin = [i, o, s];
        return this.segments = R_(r, n),
        this
    }
    flipX() {
        return this.transform({
            rotate: [0, 180, 0]
        }),
        this
    }
    flipY() {
        return this.transform({
            rotate: [180, 0, 0]
        }),
        this
    }
    toString() {
        return lo(this.segments, this.round)
    }
}
function ny(t) {
    let e = 0
      , n = 0
      , r = 0;
    return Uc(t).map(i => i[0] === "M" ? ([,e,n] = i,
    0) : (r = function(o, s, a, l, u, c, f, d) {
        return 3 * ((d - s) * (a + u) - (f - o) * (l + c) + l * (o - u) - a * (s - c) + d * (u + o / 3) - f * (c + s / 3)) / 20
    }(e, n, ...i.slice(1)),
    [e,n] = i.slice(-2),
    r)).reduce( (i, o) => i + o, 0)
}
function qh(t, e) {
    const n = Vi(t);
    if (typeof n == "string")
        throw TypeError(n);
    let r = [...n]
      , i = js(r)
      , o = r.length - 1
      , s = 0
      , a = 0
      , l = n[0];
    const [u,c] = l.slice(-2)
      , f = {
        x: u,
        y: c
    };
    if (o <= 0 || !e || !Number.isFinite(e))
        return {
            segment: l,
            index: 0,
            length: a,
            point: f,
            lengthAtSegment: s
        };
    if (e >= i)
        return r = n.slice(0, -1),
        s = js(r),
        a = i - s,
        {
            segment: n[o],
            index: o,
            length: a,
            lengthAtSegment: s
        };
    const d = [];
    for (; o > 0; )
        l = r[o],
        r = r.slice(0, -1),
        s = js(r),
        a = i - s,
        i = s,
        d.push({
            segment: l,
            index: o,
            length: a,
            lengthAtSegment: s
        }),
        o -= 1;
    return d.find( ({lengthAtSegment: h}) => h <= e)
}
function ku(t, e) {
    const n = Vi(t)
      , r = qr(n)
      , i = js(n)
      , o = v => {
        const _ = v.x - e.x
          , w = v.y - e.y;
        return _ * _ + w * w
    }
    ;
    let s, a, l, u, c = 8, f = 0, d = 0, h = 1 / 0;
    for (let v = 0; v <= i; v += c)
        s = Qa(r, v),
        f = o(s),
        f < h && (a = s,
        d = v,
        h = f);
    c /= 2;
    let m = 0
      , p = 0
      , x = 0
      , y = 0;
    for (; c > .5; )
        m = d - c,
        l = Qa(r, m),
        x = o(l),
        p = d + c,
        u = Qa(r, p),
        y = o(u),
        m >= 0 && x < h ? (a = l,
        d = m,
        h = x) : p <= i && y < h ? (a = u,
        d = p,
        h = y) : c /= 2;
    const g = qh(n, d);
    return {
        closest: a,
        distance: Math.sqrt(h),
        segment: g
    }
}
function ry(t) {
    if (typeof t != "string")
        return !1;
    const e = new y_(t);
    for (Ka(e); e.index < e.max && !e.err.length; )
        g_(e);
    return !e.err.length && "mM".includes(e.segments[0][0])
}
const iy = {
    line: ["x1", "y1", "x2", "y2"],
    circle: ["cx", "cy", "r"],
    ellipse: ["cx", "cy", "rx", "ry"],
    rect: ["width", "height", "x", "y", "rx", "ry"],
    polygon: ["points"],
    polyline: ["points"],
    glyph: ["d"]
}
  , SP = {
    CSSMatrix: fn,
    parsePathString: Vi,
    isPathArray: Rf,
    isCurveArray: x_,
    isAbsoluteArray: jm,
    isRelativeArray: v_,
    isNormalizedArray: Fm,
    isValidPath: ry,
    pathToAbsolute: ua,
    pathToRelative: Vm,
    pathToCurve: Uc,
    pathToString: lo,
    getDrawDirection: function(t) {
        return ny(Uc(t)) >= 0
    },
    getPathArea: ny,
    getPathBBox: N_,
    pathLengthFactory: Lf,
    getTotalLength: js,
    getPointAtLength: Qa,
    getClosestPoint: function(t, e) {
        return ku(t, e).closest
    },
    getSegmentOfPoint: function(t, e) {
        return ku(t, e).segment
    },
    getPropertiesAtPoint: ku,
    getPropertiesAtLength: qh,
    getSegmentAtLength: function(t, e) {
        return qh(t, e).segment
    },
    isPointInStroke: function(t, e) {
        const {distance: n} = ku(t, e);
        return Math.abs(n) < .001
    },
    clonePath: ur,
    splitPath: w_,
    fixPath: function(t) {
        const e = Vi(t)
          , n = qr(e)
          , {length: r} = e
          , i = n.slice(-1)[0][0] === "Z"
          , o = i ? r - 2 : r - 1
          , [s,a] = n[0].slice(1)
          , [l,u] = n[o].slice(-2);
        return i && s === l && a === u ? e.slice(0, -1) : e
    },
    roundPath: Wc,
    optimizePath: S_,
    reverseCurve: function(t) {
        const e = t.slice(1).map( (n, r, i) => r ? [...i[r - 1].slice(-2), ...n.slice(1)] : [...t[0].slice(1), ...n.slice(1)]).map(n => n.map( (r, i) => n[n.length - i - 2 * (1 - i % 2)])).reverse();
        return [["M", ...e[0].slice(0, 2)], ...e.map(n => ["C", ...n.slice(2)])]
    },
    reversePath: nc,
    normalizePath: qr,
    transformPath: R_,
    shapeToPath: function(t, e) {
        const n = Object.keys(iy)
          , {tagName: r} = t;
        if (r && !n.some(c => r === c))
            throw TypeError(`${br}: "${r}" is not SVGElement`);
        const i = document.createElementNS("http://www.w3.org/2000/svg", "path")
          , o = r || t.type
          , s = {};
        s.type = o;
        const a = iy[o];
        let l;
        r ? (a.forEach(c => {
            s[c] = t.getAttribute(c)
        }
        ),
        Object.values(t.attributes).forEach( ({name: c, value: f}) => {
            a.includes(c) || i.setAttribute(c, f)
        }
        )) : (Object.assign(s, t),
        Object.keys(s).forEach(c => {
            a.includes(c) || c === "type" || i.setAttribute(c.replace(/[A-Z]/g, f => `-${f.toLowerCase()}`), s[c])
        }
        ));
        const {round: u} = Rl;
        return o === "circle" ? l = lo(function(c) {
            const {cx: f, cy: d, r: h} = c;
            return [["M", f - h, d], ["a", h, h, 0, 1, 0, 2 * h, 0], ["a", h, h, 0, 1, 0, -2 * h, 0]]
        }(s), u) : o === "ellipse" ? l = lo(function(c) {
            const {cx: f, cy: d, rx: h, ry: m} = c;
            return [["M", f - h, d], ["a", h, m, 0, 1, 0, 2 * h, 0], ["a", h, m, 0, 1, 0, -2 * h, 0]]
        }(s), u) : ["polyline", "polygon"].includes(o) ? l = lo(function(c) {
            const f = []
              , d = (c.points || "").trim().split(/[\s|,]/).map(Number);
            let h = 0;
            for (; h < d.length; )
                f.push([h ? "L" : "M", d[h], d[h + 1]]),
                h += 2;
            return c.type === "polygon" ? [...f, ["z"]] : f
        }(s), u) : o === "rect" ? l = lo(function(c) {
            const f = +c.x || 0
              , d = +c.y || 0
              , h = +c.width
              , m = +c.height;
            let p = +c.rx
              , x = +c.ry;
            return p || x ? (p = p || x,
            x = x || p,
            2 * p > h && (p -= (2 * p - h) / 2),
            2 * x > m && (x -= (2 * x - m) / 2),
            [["M", f + p, d], ["h", h - 2 * p], ["s", p, 0, p, x], ["v", m - 2 * x], ["s", 0, x, -p, x], ["h", 2 * p - h], ["s", -p, 0, -p, -x], ["v", 2 * x - m], ["s", 0, -x, p, -x]]) : [["M", f, d], ["h", h], ["v", m], ["H", f], ["Z"]]
        }(s), u) : o === "line" ? l = lo(function(c) {
            const {x1: f, y1: d, x2: h, y2: m} = c;
            return [["M", f, d], ["L", h, m]]
        }(s), u) : o === "glyph" && (l = r ? t.getAttribute("d") : t.d),
        !!ry(l) && (i.setAttribute("d", l),
        e && r && (t.before(i, t),
        t.remove()),
        i)
    },
    options: Rl
};
Object.assign(rc, SP, {
    Version: "1.0.5"
});
const no = t => t == null
  , CP = t => {
    const {width: e, height: n, cx: r, cy: i, rx: o, ry: s, startOffset: a, reversed: l, text: u, svgProps: c, ellipseProps: f, textPathProps: d, textProps: h, tspanProps: m} = t
      , [p,x] = E.useState(!1)
      , [y] = E.useState(`ellipse-id${E.useId().replaceAll(":", "-")}`)
      , g = E.useRef();
    if (E.useEffect( () => {
        if (g.current) {
            const _ = {
                id: y,
                type: "ellipse",
                rx: o,
                ry: s,
                cx: r,
                cy: i,
                style: "fill: none;",
                ...f
            }
              , w = g.current
              , C = rc.shapeToPath(_, !0)
              , S = document.getElementById(y);
            if (S && S.remove(),
            w.prepend(C),
            l) {
                const T = C.getAttribute("d")
                  , M = rc.reversePath(T)
                  , A = rc.pathToString(M);
                C.setAttribute("d", A)
            }
            x(!0)
        }
    }
    , [g.current, l, e, n, c, r, i, o, s, f]),
    no(e))
        throw new Error("ReactCurvedText Error: width is required");
    if (no(n))
        throw new Error("ReactCurvedText Error: height is required");
    if (no(r))
        throw new Error("ReactCurvedText Error: cx is required");
    if (no(i))
        throw new Error("ReactCurvedText Error: cy is required");
    if (no(o))
        throw new Error("ReactCurvedText Error: rx is required");
    if (no(s))
        throw new Error("ReactCurvedText Error: ry is required");
    if (no(u))
        throw new Error("ReactCurvedText Error: text is required");
    const v = JSON.stringify({
        width: e,
        height: n,
        cx: r,
        cy: i,
        rx: o,
        ry: s,
        startOffset: a,
        reversed: l,
        text: u,
        svgProps: c,
        ellipseProps: f,
        textPathProps: d,
        textProps: h,
        tspanProps: m,
        rendered: p
    });
    return di.createElement("svg", Ga({
        ref: g,
        height: n,
        width: e
    }, c), di.createElement("text", Ga({
        key: v
    }, h), di.createElement("textPath", Ga({
        xlinkHref: `#${y}`,
        startOffset: a
    }, d), di.createElement("tspan", m, u))))
}
;
function Dr(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function D_(t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Tn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Qs = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, zm, Ot, $e, In = 1e8, we = 1 / In, Zh = Math.PI * 2, kP = Zh / 4, TP = 0, O_ = Math.sqrt, PP = Math.cos, EP = Math.sin, ht = function(e) {
    return typeof e == "string"
}, We = function(e) {
    return typeof e == "function"
}, Zr = function(e) {
    return typeof e == "number"
}, Bm = function(e) {
    return typeof e > "u"
}, Er = function(e) {
    return typeof e == "object"
}, sn = function(e) {
    return e !== !1
}, $m = function() {
    return typeof window < "u"
}, Tu = function(e) {
    return We(e) || ht(e)
}, L_ = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Lt = Array.isArray, Jh = /(?:-?\.?\d|\.)+/gi, b_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ss = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Sd = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, j_ = /[+-]=-?[.\d]+/, V_ = /[^,'"\[\]\s]+/gi, MP = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Le, On, ep, Um, En = {}, Hc = {}, F_, I_ = function(e) {
    return (Hc = Io(e, En)) && un
}, Wm = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, Yc = function(e, n) {
    return !n && console.warn(e)
}, z_ = function(e, n) {
    return e && (En[e] = n) && Hc && (Hc[e] = n) || En
}, Dl = function() {
    return 0
}, AP = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, ic = {
    suppressEvents: !0,
    kill: !1
}, RP = {
    suppressEvents: !0
}, Hm = {}, Ri = [], tp = {}, B_, _n = {}, Cd = {}, oy = 30, oc = [], Ym = "", Gm = function(e) {
    var n = e[0], r, i;
    if (Er(n) || We(n) || (e = [e]),
    !(r = (n._gsap || {}).harness)) {
        for (i = oc.length; i-- && !oc[i].targetTest(n); )
            ;
        r = oc[i]
    }
    for (i = e.length; i--; )
        e[i] && (e[i]._gsap || (e[i]._gsap = new fw(e[i],r))) || e.splice(i, 1);
    return e
}, Eo = function(e) {
    return e._gsap || Gm(zn(e))[0]._gsap
}, $_ = function(e, n, r) {
    return (r = e[n]) && We(r) ? e[n]() : Bm(r) && e.getAttribute && e.getAttribute(n) || r
}, an = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
}, Ge = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, xt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Vs = function(e, n) {
    var r = n.charAt(0)
      , i = parseFloat(n.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
}, NP = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
        ;
    return i < r
}, Gc = function() {
    var e = Ri.length, n = Ri.slice(0), r, i;
    for (tp = {},
    Ri.length = 0,
    r = 0; r < e; r++)
        i = n[r],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, U_ = function(e, n, r, i) {
    Ri.length && !Ot && Gc(),
    e.render(n, r, i || Ot && n < 0 && (e._initted || e._startAt)),
    Ri.length && !Ot && Gc()
}, W_ = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(V_).length < 2 ? n : ht(e) ? e.trim() : e
}, H_ = function(e) {
    return e
}, Yn = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, DP = function(e) {
    return function(n, r) {
        for (var i in r)
            i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
}, Io = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, sy = function t(e, n) {
    for (var r in n)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Er(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
}, Xc = function(e, n) {
    var r = {}, i;
    for (i in e)
        i in n || (r[i] = e[i]);
    return r
}, qa = function(e) {
    var n = e.parent || Le
      , r = e.keyframes ? DP(Lt(e.keyframes)) : Yn;
    if (sn(e.inherit))
        for (; n; )
            r(e, n.vars.defaults),
            n = n.parent || n._dp;
    return e
}, OP = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
        ;
    return r < 0
}, Y_ = function(e, n, r, i, o) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var s = e[i], a;
    if (o)
        for (a = n[o]; s && s[o] > a; )
            s = s._prev;
    return s ? (n._next = s._next,
    s._next = n) : (n._next = e[r],
    e[r] = n),
    n._next ? n._next._prev = n : e[i] = n,
    n._prev = s,
    n.parent = n._dp = e,
    n
}, bf = function(e, n, r, i) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var o = n._prev
      , s = n._next;
    o ? o._next = s : e[r] === n && (e[r] = s),
    s ? s._prev = o : e[i] === n && (e[i] = o),
    n._next = n._prev = n.parent = null
}, Fi = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Mo = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, LP = function(e) {
    for (var n = e.parent; n && n.parent; )
        n._dirty = 1,
        n.totalDuration(),
        n = n.parent;
    return e
}, np = function(e, n, r, i) {
    return e._startAt && (Ot ? e._startAt.revert(ic) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
}, bP = function t(e) {
    return !e || e._ts && t(e.parent)
}, ay = function(e) {
    return e._repeat ? qs(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, qs = function(e, n) {
    var r = Math.floor(e /= n);
    return e && r === e ? r - 1 : r
}, Kc = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, jf = function(e) {
    return e._end = xt(e._start + (e._tDur / Math.abs(e._ts || e._rts || we) || 0))
}, Vf = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = xt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)),
    jf(e),
    r._dirty || Mo(r, e)),
    e
}, G_ = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = Kc(e.rawTime(), n),
    (!n._dur || ql(0, n.totalDuration(), r) - n._tTime > we) && n.render(r, !0)),
    Mo(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -we
    }
}, xr = function(e, n, r, i) {
    return n.parent && Fi(n),
    n._start = xt((Zr(r) ? r : r || e !== Le ? Dn(e, r, n) : e._time) + n._delay),
    n._end = xt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
    Y_(e, n, "_first", "_last", e._sort ? "_start" : 0),
    rp(n) || (e._recent = n),
    i || G_(e, n),
    e._ts < 0 && Vf(e, e._tTime),
    e
}, X_ = function(e, n) {
    return (En.ScrollTrigger || Wm("scrollTrigger", n)) && En.ScrollTrigger.create(n, e)
}, K_ = function(e, n, r, i, o) {
    if (Km(e, n, o),
    !e._initted)
        return 1;
    if (!r && e._pt && !Ot && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && B_ !== wn.frame)
        return Ri.push(e),
        e._lazy = [o, i],
        1
}, jP = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
}, rp = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
}, VP = function(e, n, r, i) {
    var o = e.ratio, s = n < 0 || !n && (!e._start && jP(e) && !(!e._initted && rp(e)) || (e._ts < 0 || e._dp._ts < 0) && !rp(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, f;
    if (a && e._repeat && (l = ql(0, e._tDur, n),
    c = qs(l, a),
    e._yoyo && c & 1 && (s = 1 - s),
    c !== qs(e._tTime, a) && (o = 1 - s,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    s !== o || Ot || i || e._zTime === we || !n && e._zTime) {
        if (!e._initted && K_(e, n, i, r, l))
            return;
        for (f = e._zTime,
        e._zTime = n || (r ? we : 0),
        r || (r = n && !f),
        e.ratio = s,
        e._from && (s = 1 - s),
        e._time = 0,
        e._tTime = l,
        u = e._pt; u; )
            u.r(s, u.d),
            u = u._next;
        n < 0 && np(e, n, r, !0),
        e._onUpdate && !r && Bn(e, "onUpdate"),
        l && e._repeat && !r && e.parent && Bn(e, "onRepeat"),
        (n >= e._tDur || n < 0) && e.ratio === s && (s && Fi(e, 1),
        !r && !Ot && (Bn(e, s ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = n)
}, FP = function(e, n, r) {
    var i;
    if (r > n)
        for (i = e._first; i && i._start <= r; ) {
            if (i.data === "isPause" && i._start > n)
                return i;
            i = i._next
        }
    else
        for (i = e._last; i && i._start >= r; ) {
            if (i.data === "isPause" && i._start < n)
                return i;
            i = i._prev
        }
}, Zs = function(e, n, r, i) {
    var o = e._repeat
      , s = xt(n) || 0
      , a = e._tTime / e._tDur;
    return a && !i && (e._time *= s / e._dur),
    e._dur = s,
    e._tDur = o ? o < 0 ? 1e10 : xt(s * (o + 1) + e._rDelay * o) : s,
    a > 0 && !i && Vf(e, e._tTime = e._tDur * a),
    e.parent && jf(e),
    r || Mo(e.parent, e),
    e
}, ly = function(e) {
    return e instanceof en ? Mo(e) : Zs(e, e._dur)
}, IP = {
    _start: 0,
    endTime: Dl,
    totalDuration: Dl
}, Dn = function t(e, n, r) {
    var i = e.labels, o = e._recent || IP, s = e.duration() >= In ? o.endTime(!1) : e._dur, a, l, u;
    return ht(n) && (isNaN(n) || n in i) ? (l = n.charAt(0),
    u = n.substr(-1) === "%",
    a = n.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")),
    (l === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (a < 0 ? o : r).totalDuration() / 100 : 1)) : a < 0 ? (n in i || (i[n] = s),
    i[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)),
    u && r && (l = l / 100 * (Lt(r) ? r[0] : r).totalDuration()),
    a > 1 ? t(e, n.substr(0, a - 1), r) + l : s + l)) : n == null ? s : +n
}, Za = function(e, n, r) {
    var i = Zr(n[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = n[o], a, l;
    if (i && (s.duration = n[1]),
    s.parent = r,
    e) {
        for (a = s,
        l = r; l && !("immediateRender"in a); )
            a = l.vars.defaults || {},
            l = sn(l.vars.inherit) && l.parent;
        s.immediateRender = sn(a.immediateRender),
        e < 2 ? s.runBackwards = 1 : s.startAt = n[o - 1]
    }
    return new qe(n[0],s,n[o + 1])
}, Gi = function(e, n) {
    return e || e === 0 ? n(e) : n
}, ql = function(e, n, r) {
    return r < e ? e : r > n ? n : r
}, Dt = function(e, n) {
    return !ht(e) || !(n = MP.exec(e)) ? "" : n[1]
}, zP = function(e, n, r) {
    return Gi(r, function(i) {
        return ql(e, n, i)
    })
}, ip = [].slice, Q_ = function(e, n) {
    return e && Er(e) && "length"in e && (!n && !e.length || e.length - 1 in e && Er(e[0])) && !e.nodeType && e !== On
}, BP = function(e, n, r) {
    return r === void 0 && (r = []),
    e.forEach(function(i) {
        var o;
        return ht(i) && !n || Q_(i, 1) ? (o = r).push.apply(o, zn(i)) : r.push(i)
    }) || r
}, zn = function(e, n, r) {
    return $e && !n && $e.selector ? $e.selector(e) : ht(e) && !r && (ep || !Js()) ? ip.call((n || Um).querySelectorAll(e), 0) : Lt(e) ? BP(e, r) : Q_(e) ? ip.call(e, 0) : e ? [e] : []
}, op = function(e) {
    return e = zn(e)[0] || Yc("Invalid scope") || {},
    function(n) {
        var r = e.current || e.nativeElement || e;
        return zn(n, r.querySelectorAll ? r : r === e ? Yc("Invalid scope") || Um.createElement("div") : e)
    }
}, q_ = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Z_ = function(e) {
    if (We(e))
        return e;
    var n = Er(e) ? e : {
        each: e
    }
      , r = Ao(n.ease)
      , i = n.from || 0
      , o = parseFloat(n.base) || 0
      , s = {}
      , a = i > 0 && i < 1
      , l = isNaN(i) || a
      , u = n.axis
      , c = i
      , f = i;
    return ht(i) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !a && l && (c = i[0],
    f = i[1]),
    function(d, h, m) {
        var p = (m || n).length, x = s[p], y, g, v, _, w, C, S, T, M;
        if (!x) {
            if (M = n.grid === "auto" ? 0 : (n.grid || [1, In])[1],
            !M) {
                for (S = -In; S < (S = m[M++].getBoundingClientRect().left) && M < p; )
                    ;
                M--
            }
            for (x = s[p] = [],
            y = l ? Math.min(M, p) * c - .5 : i % M,
            g = M === In ? 0 : l ? p * f / M - .5 : i / M | 0,
            S = 0,
            T = In,
            C = 0; C < p; C++)
                v = C % M - y,
                _ = g - (C / M | 0),
                x[C] = w = u ? Math.abs(u === "y" ? _ : v) : O_(v * v + _ * _),
                w > S && (S = w),
                w < T && (T = w);
            i === "random" && q_(x),
            x.max = S - T,
            x.min = T,
            x.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (M > p ? p - 1 : u ? u === "y" ? p / M : M : Math.max(M, p / M)) || 0) * (i === "edges" ? -1 : 1),
            x.b = p < 0 ? o - p : o,
            x.u = Dt(n.amount || n.each) || 0,
            r = r && p < 0 ? lw(r) : r
        }
        return p = (x[d] - x.min) / x.max || 0,
        xt(x.b + (r ? r(p) : p) * x.v) + x.u
    }
}, sp = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var i = xt(Math.round(parseFloat(r) / e) * e * n);
        return (i - i % 1) / n + (Zr(r) ? 0 : Dt(r))
    }
}, J_ = function(e, n) {
    var r = Lt(e), i, o;
    return !r && Er(e) && (i = r = e.radius || In,
    e.values ? (e = zn(e.values),
    (o = !Zr(e[0])) && (i *= i)) : e = sp(e.increment)),
    Gi(n, r ? We(e) ? function(s) {
        return o = e(s),
        Math.abs(o - s) <= i ? o : s
    }
    : function(s) {
        for (var a = parseFloat(o ? s.x : s), l = parseFloat(o ? s.y : 0), u = In, c = 0, f = e.length, d, h; f--; )
            o ? (d = e[f].x - a,
            h = e[f].y - l,
            d = d * d + h * h) : d = Math.abs(e[f] - a),
            d < u && (u = d,
            c = f);
        return c = !i || u <= i ? e[c] : s,
        o || c === s || Zr(s) ? c : c + Dt(s)
    }
    : sp(e))
}, ew = function(e, n, r, i) {
    return Gi(Lt(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
        return Lt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
}, $P = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
    return function(i) {
        return n.reduce(function(o, s) {
            return s(o)
        }, i)
    }
}, UP = function(e, n) {
    return function(r) {
        return e(parseFloat(r)) + (n || Dt(r))
    }
}, WP = function(e, n, r) {
    return nw(e, n, 0, 1, r)
}, tw = function(e, n, r) {
    return Gi(r, function(i) {
        return e[~~n(i)]
    })
}, HP = function t(e, n, r) {
    var i = n - e;
    return Lt(e) ? tw(e, t(0, e.length), n) : Gi(r, function(o) {
        return (i + (o - e) % i) % i + e
    })
}, YP = function t(e, n, r) {
    var i = n - e
      , o = i * 2;
    return Lt(e) ? tw(e, t(0, e.length - 1), n) : Gi(r, function(s) {
        return s = (o + (s - e) % o) % o || 0,
        e + (s > i ? o - s : s)
    })
}, Ol = function(e) {
    for (var n = 0, r = "", i, o, s, a; ~(i = e.indexOf("random(", n)); )
        s = e.indexOf(")", i),
        a = e.charAt(i + 7) === "[",
        o = e.substr(i + 7, s - i - 7).match(a ? V_ : Jh),
        r += e.substr(n, i - n) + ew(a ? o : +o[0], a ? 0 : +o[1], +o[2] || 1e-5),
        n = s + 1;
    return r + e.substr(n, e.length - n)
}, nw = function(e, n, r, i, o) {
    var s = n - e
      , a = i - r;
    return Gi(o, function(l) {
        return r + ((l - e) / s * a || 0)
    })
}, GP = function t(e, n, r, i) {
    var o = isNaN(e + n) ? 0 : function(h) {
        return (1 - h) * e + h * n
    }
    ;
    if (!o) {
        var s = ht(e), a = {}, l, u, c, f, d;
        if (r === !0 && (i = 1) && (r = null),
        s)
            e = {
                p: e
            },
            n = {
                p: n
            };
        else if (Lt(e) && !Lt(n)) {
            for (c = [],
            f = e.length,
            d = f - 2,
            u = 1; u < f; u++)
                c.push(t(e[u - 1], e[u]));
            f--,
            o = function(m) {
                m *= f;
                var p = Math.min(d, ~~m);
                return c[p](m - p)
            }
            ,
            r = n
        } else
            i || (e = Io(Lt(e) ? [] : {}, e));
        if (!c) {
            for (l in n)
                Xm.call(a, e, l, "get", n[l]);
            o = function(m) {
                return Zm(m, a) || (s ? e.p : e)
            }
        }
    }
    return Gi(r, o)
}, uy = function(e, n, r) {
    var i = e.labels, o = In, s, a, l;
    for (s in i)
        a = i[s] - n,
        a < 0 == !!r && a && o > (a = Math.abs(a)) && (l = s,
        o = a);
    return l
}, Bn = function(e, n, r) {
    var i = e.vars, o = i[n], s = $e, a = e._ctx, l, u, c;
    if (o)
        return l = i[n + "Params"],
        u = i.callbackScope || e,
        r && Ri.length && Gc(),
        a && ($e = a),
        c = l ? o.apply(u, l) : o.call(u),
        $e = s,
        c
}, Da = function(e) {
    return Fi(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Ot),
    e.progress() < 1 && Bn(e, "onInterrupt"),
    e
}, Cs, rw = [], iw = function(e) {
    if ($m() && e) {
        e = !e.name && e.default || e;
        var n = e.name
          , r = We(e)
          , i = n && !r && e.init ? function() {
            this._props = []
        }
        : e
          , o = {
            init: Dl,
            render: Zm,
            add: Xm,
            kill: u3,
            modifier: l3,
            rawVars: 0
        }
          , s = {
            targetTest: 0,
            get: 0,
            getSetter: qm,
            aliases: {},
            register: 0
        };
        if (Js(),
        e !== i) {
            if (_n[n])
                return;
            Yn(i, Yn(Xc(e, o), s)),
            Io(i.prototype, Io(o, Xc(e, s))),
            _n[i.prop = n] = i,
            e.targetTest && (oc.push(i),
            Hm[n] = 1),
            n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
        }
        z_(n, i),
        e.register && e.register(un, i, ln)
    } else
        e && rw.push(e)
}, _e = 255, Oa = {
    aqua: [0, _e, _e],
    lime: [0, _e, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _e],
    navy: [0, 0, 128],
    white: [_e, _e, _e],
    olive: [128, 128, 0],
    yellow: [_e, _e, 0],
    orange: [_e, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_e, 0, 0],
    pink: [_e, 192, 203],
    cyan: [0, _e, _e],
    transparent: [_e, _e, _e, 0]
}, kd = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * _e + .5 | 0
}, ow = function(e, n, r) {
    var i = e ? Zr(e) ? [e >> 16, e >> 8 & _e, e & _e] : 0 : Oa.black, o, s, a, l, u, c, f, d, h, m;
    if (!i) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Oa[e])
            i = Oa[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (o = e.charAt(1),
            s = e.charAt(2),
            a = e.charAt(3),
            e = "#" + o + o + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return i = parseInt(e.substr(1, 6), 16),
                [i >> 16, i >> 8 & _e, i & _e, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            i = [e >> 16, e >> 8 & _e, e & _e]
        } else if (e.substr(0, 3) === "hsl") {
            if (i = m = e.match(Jh),
            !n)
                l = +i[0] % 360 / 360,
                u = +i[1] / 100,
                c = +i[2] / 100,
                s = c <= .5 ? c * (u + 1) : c + u - c * u,
                o = c * 2 - s,
                i.length > 3 && (i[3] *= 1),
                i[0] = kd(l + 1 / 3, o, s),
                i[1] = kd(l, o, s),
                i[2] = kd(l - 1 / 3, o, s);
            else if (~e.indexOf("="))
                return i = e.match(b_),
                r && i.length < 4 && (i[3] = 1),
                i
        } else
            i = e.match(Jh) || Oa.transparent;
        i = i.map(Number)
    }
    return n && !m && (o = i[0] / _e,
    s = i[1] / _e,
    a = i[2] / _e,
    f = Math.max(o, s, a),
    d = Math.min(o, s, a),
    c = (f + d) / 2,
    f === d ? l = u = 0 : (h = f - d,
    u = c > .5 ? h / (2 - f - d) : h / (f + d),
    l = f === o ? (s - a) / h + (s < a ? 6 : 0) : f === s ? (a - o) / h + 2 : (o - s) / h + 4,
    l *= 60),
    i[0] = ~~(l + .5),
    i[1] = ~~(u * 100 + .5),
    i[2] = ~~(c * 100 + .5)),
    r && i.length < 4 && (i[3] = 1),
    i
}, sw = function(e) {
    var n = []
      , r = []
      , i = -1;
    return e.split(Ni).forEach(function(o) {
        var s = o.match(Ss) || [];
        n.push.apply(n, s),
        r.push(i += s.length + 1)
    }),
    n.c = r,
    n
}, cy = function(e, n, r) {
    var i = "", o = (e + i).match(Ni), s = n ? "hsla(" : "rgba(", a = 0, l, u, c, f;
    if (!o)
        return e;
    if (o = o.map(function(d) {
        return (d = ow(d, n, 1)) && s + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
    }),
    r && (c = sw(e),
    l = r.c,
    l.join(i) !== c.c.join(i)))
        for (u = e.replace(Ni, "1").split(Ss),
        f = u.length - 1; a < f; a++)
            i += u[a] + (~l.indexOf(a) ? o.shift() || s + "0,0,0,0)" : (c.length ? c : o.length ? o : r).shift());
    if (!u)
        for (u = e.split(Ni),
        f = u.length - 1; a < f; a++)
            i += u[a] + o[a];
    return i + u[f]
}, Ni = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Oa)
        t += "|" + e + "\\b";
    return new RegExp(t + ")","gi")
}(), XP = /hsl[a]?\(/, aw = function(e) {
    var n = e.join(" "), r;
    if (Ni.lastIndex = 0,
    Ni.test(n))
        return r = XP.test(n),
        e[1] = cy(e[1], r),
        e[0] = cy(e[0], r, sw(e[1])),
        !0
}, Ll, wn = function() {
    var t = Date.now, e = 500, n = 33, r = t(), i = r, o = 1e3 / 240, s = o, a = [], l, u, c, f, d, h, m = function p(x) {
        var y = t() - i, g = x === !0, v, _, w, C;
        if (y > e && (r += y - n),
        i += y,
        w = i - r,
        v = w - s,
        (v > 0 || g) && (C = ++f.frame,
        d = w - f.time * 1e3,
        f.time = w = w / 1e3,
        s += v + (v >= o ? 4 : o - v),
        _ = 1),
        g || (l = u(p)),
        _)
            for (h = 0; h < a.length; h++)
                a[h](w, d, C, x)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            m(!0)
        },
        deltaRatio: function(x) {
            return d / (1e3 / (x || 60))
        },
        wake: function() {
            F_ && (!ep && $m() && (On = ep = window,
            Um = On.document || {},
            En.gsap = un,
            (On.gsapVersions || (On.gsapVersions = [])).push(un.version),
            I_(Hc || On.GreenSockGlobals || !On.gsap && On || {}),
            c = On.requestAnimationFrame,
            rw.forEach(iw)),
            l && f.sleep(),
            u = c || function(x) {
                return setTimeout(x, s - f.time * 1e3 + 1 | 0)
            }
            ,
            Ll = 1,
            m(2))
        },
        sleep: function() {
            (c ? On.cancelAnimationFrame : clearTimeout)(l),
            Ll = 0,
            u = Dl
        },
        lagSmoothing: function(x, y) {
            e = x || 1 / 0,
            n = Math.min(y || 33, e)
        },
        fps: function(x) {
            o = 1e3 / (x || 240),
            s = f.time * 1e3 + o
        },
        add: function(x, y, g) {
            var v = y ? function(_, w, C, S) {
                x(_, w, C, S),
                f.remove(v)
            }
            : x;
            return f.remove(x),
            a[g ? "unshift" : "push"](v),
            Js(),
            v
        },
        remove: function(x, y) {
            ~(y = a.indexOf(x)) && a.splice(y, 1) && h >= y && h--
        },
        _listeners: a
    },
    f
}(), Js = function() {
    return !Ll && wn.wake()
}, le = {}, KP = /^[\d.\-M][\d.\-,\s]/, QP = /["']/g, qP = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], o = 1, s = r.length, a, l, u; o < s; o++)
        l = r[o],
        a = o !== s - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, a),
        n[i] = isNaN(u) ? u.replace(QP, "").trim() : +u,
        i = l.substr(a + 1).trim();
    return n
}, ZP = function(e) {
    var n = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
}, JP = function(e) {
    var n = (e + "").split("(")
      , r = le[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [qP(n[1])] : ZP(e).split(",").map(W_)) : le._CE && KP.test(e) ? le._CE("", e) : r
}, lw = function(e) {
    return function(n) {
        return 1 - e(1 - n)
    }
}, uw = function t(e, n) {
    for (var r = e._first, i; r; )
        r instanceof en ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease,
        r._ease = r._yEase,
        r._yEase = i,
        r._yoyo = n)),
        r = r._next
}, Ao = function(e, n) {
    return e && (We(e) ? e : le[e] || JP(e)) || n
}, Go = function(e, n, r, i) {
    r === void 0 && (r = function(l) {
        return 1 - n(1 - l)
    }
    ),
    i === void 0 && (i = function(l) {
        return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
    }
    );
    var o = {
        easeIn: n,
        easeOut: r,
        easeInOut: i
    }, s;
    return an(e, function(a) {
        le[a] = En[a] = o,
        le[s = a.toLowerCase()] = r;
        for (var l in o)
            le[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = le[a + "." + l] = o[l]
    }),
    o
}, cw = function(e) {
    return function(n) {
        return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
}, Td = function t(e, n, r) {
    var i = n >= 1 ? n : 1
      , o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
      , s = o / Zh * (Math.asin(1 / i) || 0)
      , a = function(c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * EP((c - s) * o) + 1
    }
      , l = e === "out" ? a : e === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : cw(a);
    return o = Zh / o,
    l.config = function(u, c) {
        return t(e, u, c)
    }
    ,
    l
}, Pd = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(s) {
        return s ? --s * s * ((n + 1) * s + n) + 1 : 0
    }
      , i = e === "out" ? r : e === "in" ? function(o) {
        return 1 - r(1 - o)
    }
    : cw(r);
    return i.config = function(o) {
        return t(e, o)
    }
    ,
    i
};
an("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var n = e < 5 ? e + 1 : e;
    Go(t + ",Power" + (n - 1), e ? function(r) {
        return Math.pow(r, n)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, n)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
    })
});
le.Linear.easeNone = le.none = le.Linear.easeIn;
Go("Elastic", Td("in"), Td("out"), Td());
(function(t, e) {
    var n = 1 / e
      , r = 2 * n
      , i = 2.5 * n
      , o = function(a) {
        return a < n ? t * a * a : a < r ? t * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? t * (a -= 2.25 / e) * a + .9375 : t * Math.pow(a - 2.625 / e, 2) + .984375
    };
    Go("Bounce", function(s) {
        return 1 - o(1 - s)
    }, o)
}
)(7.5625, 2.75);
Go("Expo", function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
});
Go("Circ", function(t) {
    return -(O_(1 - t * t) - 1)
});
Go("Sine", function(t) {
    return t === 1 ? 1 : -PP(t * kP) + 1
});
Go("Back", Pd("in"), Pd("out"), Pd());
le.SteppedEase = le.steps = En.SteppedEase = {
    config: function(e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , i = e + (n ? 0 : 1)
          , o = n ? 1 : 0
          , s = 1 - we;
        return function(a) {
            return ((i * ql(0, s, a) | 0) + o) * r
        }
    }
};
Qs.ease = le["quad.out"];
an("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return Ym += t + "," + t + "Params,"
});
var fw = function(e, n) {
    this.id = TP++,
    e._gsap = this,
    this.target = e,
    this.harness = n,
    this.get = n ? n.get : $_,
    this.set = n ? n.getSetter : qm
}
  , bl = function() {
    function t(n) {
        this.vars = n,
        this._delay = +n.delay || 0,
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
        this._yoyo = !!n.yoyo || !!n.yoyoEase),
        this._ts = 1,
        Zs(this, +n.duration, 1, 1),
        this.data = n.data,
        $e && (this._ctx = $e,
        $e.data.push(this)),
        Ll || wn.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        Zs(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, i) {
        if (Js(),
        !arguments.length)
            return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
            for (Vf(this, r),
            !o._dp || o.parent || G_(o, this); o && o.parent; )
                o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0),
                o = o.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && xr(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === we || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        U_(this, r, i)),
        this
    }
    ,
    e.time = function(r, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + ay(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }
    ,
    e.totalProgress = function(r, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(r, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + ay(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(r, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * o, i) : this._repeat ? qs(this._tTime, o) + 1 : 1
    }
    ,
    e.timeScale = function(r) {
        if (!arguments.length)
            return this._rts === -we ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var i = this.parent && this._ts ? Kc(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -we ? 0 : this._rts,
        this.totalTime(ql(-Math.abs(this._delay), this._tDur, i), !0),
        jf(this),
        LP(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Js(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== we && (this._tTime -= we)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && xr(i, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (sn(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var i = this.parent || this._dp;
        return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Kc(i.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = RP);
        var i = Ot;
        return Ot = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        Ot = i,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
            o = i._start + o / (i._ts || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(r) : o
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        ly(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = r,
            ly(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, i) {
        return this.totalTime(Dn(this, r), sn(i))
    }
    ,
    e.restart = function(r, i) {
        return this.play().totalTime(r ? -this._delay : 0, sn(i))
    }
    ,
    e.play = function(r, i) {
        return r != null && this.seek(r, i),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, i) {
        return r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, i) {
        return r != null && this.seek(r, i),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -we : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -we,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, i = this._start, o;
        return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= i && o < this.endTime(!0) - we)
    }
    ,
    e.eventCallback = function(r, i, o) {
        var s = this.vars;
        return arguments.length > 1 ? (i ? (s[r] = i,
        o && (s[r + "Params"] = o),
        r === "onUpdate" && (this._onUpdate = i)) : delete s[r],
        this) : s[r]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(o) {
            var s = We(r) ? r : H_
              , a = function() {
                var u = i.then;
                i.then = null,
                We(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                o(s),
                i.then = u
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
        }
        )
    }
    ,
    e.kill = function() {
        Da(this)
    }
    ,
    t
}();
Yn(bl.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -we,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var en = function(t) {
    D_(e, t);
    function e(r, i) {
        var o;
        return r === void 0 && (r = {}),
        o = t.call(this, r) || this,
        o.labels = {},
        o.smoothChildTiming = !!r.smoothChildTiming,
        o.autoRemoveChildren = !!r.autoRemoveChildren,
        o._sort = sn(r.sortChildren),
        Le && xr(r.parent || Le, Dr(o), i),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        r.scrollTrigger && X_(Dr(o), r.scrollTrigger),
        o
    }
    var n = e.prototype;
    return n.to = function(i, o, s) {
        return Za(0, arguments, this),
        this
    }
    ,
    n.from = function(i, o, s) {
        return Za(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(i, o, s, a) {
        return Za(2, arguments, this),
        this
    }
    ,
    n.set = function(i, o, s) {
        return o.duration = 0,
        o.parent = this,
        qa(o).repeatDelay || (o.repeat = 0),
        o.immediateRender = !!o.immediateRender,
        new qe(i,o,Dn(this, s),1),
        this
    }
    ,
    n.call = function(i, o, s) {
        return xr(this, qe.delayedCall(0, i, o), s)
    }
    ,
    n.staggerTo = function(i, o, s, a, l, u, c) {
        return s.duration = o,
        s.stagger = s.stagger || a,
        s.onComplete = u,
        s.onCompleteParams = c,
        s.parent = this,
        new qe(i,s,Dn(this, l)),
        this
    }
    ,
    n.staggerFrom = function(i, o, s, a, l, u, c) {
        return s.runBackwards = 1,
        qa(s).immediateRender = sn(s.immediateRender),
        this.staggerTo(i, o, s, a, l, u, c)
    }
    ,
    n.staggerFromTo = function(i, o, s, a, l, u, c, f) {
        return a.startAt = s,
        qa(a).immediateRender = sn(a.immediateRender),
        this.staggerTo(i, o, a, l, u, c, f)
    }
    ,
    n.render = function(i, o, s) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : xt(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), d, h, m, p, x, y, g, v, _, w, C, S;
        if (this !== Le && c > l && i >= 0 && (c = l),
        c !== this._tTime || s || f) {
            if (a !== this._time && u && (c += this._time - a,
            i += this._time - a),
            d = c,
            _ = this._start,
            v = this._ts,
            y = !v,
            f && (u || (a = this._zTime),
            (i || !o) && (this._zTime = i)),
            this._repeat) {
                if (C = this._yoyo,
                x = u + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(x * 100 + i, o, s);
                if (d = xt(c % x),
                c === l ? (p = this._repeat,
                d = u) : (p = ~~(c / x),
                p && p === c / x && (d = u,
                p--),
                d > u && (d = u)),
                w = qs(this._tTime, x),
                !a && this._tTime && w !== p && this._tTime - w * x - this._dur <= 0 && (w = p),
                C && p & 1 && (d = u - d,
                S = 1),
                p !== w && !this._lock) {
                    var T = C && w & 1
                      , M = T === (C && p & 1);
                    if (p < w && (T = !T),
                    a = T ? 0 : c % u ? u : c,
                    this._lock = 1,
                    this.render(a || (S ? 0 : xt(p * x)), o, !u)._lock = 0,
                    this._tTime = c,
                    !o && this.parent && Bn(this, "onRepeat"),
                    this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                    a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    M && (this._lock = 2,
                    a = T ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !S && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !y)
                        return this;
                    uw(this, S)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (g = FP(this, xt(a), xt(d)),
            g && (c -= d - (d = g._start))),
            this._tTime = c,
            this._time = d,
            this._act = !v,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            a = 0),
            !a && d && !o && !p && (Bn(this, "onStart"),
            this._tTime !== c))
                return this;
            if (d >= a && i >= 0)
                for (h = this._first; h; ) {
                    if (m = h._next,
                    (h._act || d >= h._start) && h._ts && g !== h) {
                        if (h.parent !== this)
                            return this.render(i, o, s);
                        if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, o, s),
                        d !== this._time || !this._ts && !y) {
                            g = 0,
                            m && (c += this._zTime = -we);
                            break
                        }
                    }
                    h = m
                }
            else {
                h = this._last;
                for (var A = i < 0 ? i : d; h; ) {
                    if (m = h._prev,
                    (h._act || A <= h._end) && h._ts && g !== h) {
                        if (h.parent !== this)
                            return this.render(i, o, s);
                        if (h.render(h._ts > 0 ? (A - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (A - h._start) * h._ts, o, s || Ot && (h._initted || h._startAt)),
                        d !== this._time || !this._ts && !y) {
                            g = 0,
                            m && (c += this._zTime = A ? -we : we);
                            break
                        }
                    }
                    h = m
                }
            }
            if (g && !o && (this.pause(),
            g.render(d >= a ? 0 : -we)._zTime = d >= a ? 1 : -1,
            this._ts))
                return this._start = _,
                jf(this),
                this.render(i, o, s);
            this._onUpdate && !o && Bn(this, "onUpdate", !0),
            (c === l && this._tTime >= this.totalDuration() || !c && a) && (_ === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Fi(this, 1),
            !o && !(i < 0 && !a) && (c || a || !l) && (Bn(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(i, o) {
        var s = this;
        if (Zr(o) || (o = Dn(this, o, i)),
        !(i instanceof bl)) {
            if (Lt(i))
                return i.forEach(function(a) {
                    return s.add(a, o)
                }),
                this;
            if (ht(i))
                return this.addLabel(i, o);
            if (We(i))
                i = qe.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? xr(this, i, o) : this
    }
    ,
    n.getChildren = function(i, o, s, a) {
        i === void 0 && (i = !0),
        o === void 0 && (o = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -In);
        for (var l = [], u = this._first; u; )
            u._start >= a && (u instanceof qe ? o && l.push(u) : (s && l.push(u),
            i && l.push.apply(l, u.getChildren(!0, o, s)))),
            u = u._next;
        return l
    }
    ,
    n.getById = function(i) {
        for (var o = this.getChildren(1, 1, 1), s = o.length; s--; )
            if (o[s].vars.id === i)
                return o[s]
    }
    ,
    n.remove = function(i) {
        return ht(i) ? this.removeLabel(i) : We(i) ? this.killTweensOf(i) : (bf(this, i),
        i === this._recent && (this._recent = this._last),
        Mo(this))
    }
    ,
    n.totalTime = function(i, o) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = xt(wn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        t.prototype.totalTime.call(this, i, o),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(i, o) {
        return this.labels[i] = Dn(this, o),
        this
    }
    ,
    n.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    n.addPause = function(i, o, s) {
        var a = qe.delayedCall(0, o || Dl, s);
        return a.data = "isPause",
        this._hasPause = 1,
        xr(this, a, Dn(this, i))
    }
    ,
    n.removePause = function(i) {
        var o = this._first;
        for (i = Dn(this, i); o; )
            o._start === i && o.data === "isPause" && Fi(o),
            o = o._next
    }
    ,
    n.killTweensOf = function(i, o, s) {
        for (var a = this.getTweensOf(i, s), l = a.length; l--; )
            gi !== a[l] && a[l].kill(i, o);
        return this
    }
    ,
    n.getTweensOf = function(i, o) {
        for (var s = [], a = zn(i), l = this._first, u = Zr(o), c; l; )
            l instanceof qe ? NP(l._targets, a) && (u ? (!gi || l._initted && l._ts) && l.globalTime(0) <= o && l.globalTime(l.totalDuration()) > o : !o || l.isActive()) && s.push(l) : (c = l.getTweensOf(a, o)).length && s.push.apply(s, c),
            l = l._next;
        return s
    }
    ,
    n.tweenTo = function(i, o) {
        o = o || {};
        var s = this, a = Dn(s, i), l = o, u = l.startAt, c = l.onStart, f = l.onStartParams, d = l.immediateRender, h, m = qe.to(s, Yn({
            ease: o.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: o.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || we,
            onStart: function() {
                if (s.pause(),
                !h) {
                    var x = o.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                    m._dur !== x && Zs(m, x, 0, 1).render(m._time, !0, !0),
                    h = 1
                }
                c && c.apply(m, f || [])
            }
        }, o));
        return d ? m.render(0) : m
    }
    ,
    n.tweenFromTo = function(i, o, s) {
        return this.tweenTo(o, Yn({
            startAt: {
                time: Dn(this, i)
            }
        }, s))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        uy(this, Dn(this, i))
    }
    ,
    n.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        uy(this, Dn(this, i), 1)
    }
    ,
    n.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + we)
    }
    ,
    n.shiftChildren = function(i, o, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, l = this.labels, u; a; )
            a._start >= s && (a._start += i,
            a._end += i),
            a = a._next;
        if (o)
            for (u in l)
                l[u] >= s && (l[u] += i);
        return Mo(this)
    }
    ,
    n.invalidate = function(i) {
        var o = this._first;
        for (this._lock = 0; o; )
            o.invalidate(i),
            o = o._next;
        return t.prototype.invalidate.call(this, i)
    }
    ,
    n.clear = function(i) {
        i === void 0 && (i = !0);
        for (var o = this._first, s; o; )
            s = o._next,
            this.remove(o),
            o = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Mo(this)
    }
    ,
    n.totalDuration = function(i) {
        var o = 0, s = this, a = s._last, l = In, u, c, f;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (f = s.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                c = a._start,
                c > l && s._sort && a._ts && !s._lock ? (s._lock = 1,
                xr(s, a, c - a._delay, 1)._lock = 0) : l = c,
                c < 0 && a._ts && (o -= c,
                (!f && !s._dp || f && f.smoothChildTiming) && (s._start += c / s._ts,
                s._time -= c,
                s._tTime -= c),
                s.shiftChildren(-c, !1, -1 / 0),
                l = 0),
                a._end > o && a._ts && (o = a._end),
                a = u;
            Zs(s, s === Le && s._time > o ? s._time : o, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    e.updateRoot = function(i) {
        if (Le._ts && (U_(Le, Kc(i, Le)),
        B_ = wn.frame),
        wn.frame >= oy) {
            oy += Tn.autoSleep || 120;
            var o = Le._first;
            if ((!o || !o._ts) && Tn.autoSleep && wn._listeners.length < 2) {
                for (; o && !o._ts; )
                    o = o._next;
                o || wn.sleep()
            }
        }
    }
    ,
    e
}(bl);
Yn(en.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var e3 = function(e, n, r, i, o, s, a) {
    var l = new ln(this._pt,e,n,0,1,yw,null,o), u = 0, c = 0, f, d, h, m, p, x, y, g;
    for (l.b = r,
    l.e = i,
    r += "",
    i += "",
    (y = ~i.indexOf("random(")) && (i = Ol(i)),
    s && (g = [r, i],
    s(g, e, n),
    r = g[0],
    i = g[1]),
    d = r.match(Sd) || []; f = Sd.exec(i); )
        m = f[0],
        p = i.substring(u, f.index),
        h ? h = (h + 1) % 5 : p.substr(-5) === "rgba(" && (h = 1),
        m !== d[c++] && (x = parseFloat(d[c - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: p || c === 1 ? p : ",",
            s: x,
            c: m.charAt(1) === "=" ? Vs(x, m) - x : parseFloat(m) - x,
            m: h && h < 4 ? Math.round : 0
        },
        u = Sd.lastIndex);
    return l.c = u < i.length ? i.substring(u, i.length) : "",
    l.fp = a,
    (j_.test(i) || y) && (l.e = 0),
    this._pt = l,
    l
}, Xm = function(e, n, r, i, o, s, a, l, u, c) {
    We(i) && (i = i(o || 0, e, s));
    var f = e[n], d = r !== "get" ? r : We(f) ? u ? e[n.indexOf("set") || !We(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, h = We(f) ? u ? o3 : mw : Qm, m;
    if (ht(i) && (~i.indexOf("random(") && (i = Ol(i)),
    i.charAt(1) === "=" && (m = Vs(d, i) + (Dt(d) || 0),
    (m || m === 0) && (i = m))),
    !c || d !== i || ap)
        return !isNaN(d * i) && i !== "" ? (m = new ln(this._pt,e,n,+d || 0,i - (d || 0),typeof f == "boolean" ? a3 : gw,0,h),
        u && (m.fp = u),
        a && m.modifier(a, this, e),
        this._pt = m) : (!f && !(n in e) && Wm(n, i),
        e3.call(this, e, n, d, i, h, l || Tn.stringFilter, u))
}, t3 = function(e, n, r, i, o) {
    if (We(e) && (e = Ja(e, o, n, r, i)),
    !Er(e) || e.style && e.nodeType || Lt(e) || L_(e))
        return ht(e) ? Ja(e, o, n, r, i) : e;
    var s = {}, a;
    for (a in e)
        s[a] = Ja(e[a], o, n, r, i);
    return s
}, dw = function(e, n, r, i, o, s) {
    var a, l, u, c;
    if (_n[e] && (a = new _n[e]).init(o, a.rawVars ? n[e] : t3(n[e], i, o, s, r), r, i, s) !== !1 && (r._pt = l = new ln(r._pt,o,e,0,1,a.render,a,0,a.priority),
    r !== Cs))
        for (u = r._ptLookup[r._targets.indexOf(o)],
        c = a._props.length; c--; )
            u[a._props[c]] = l;
    return a
}, gi, ap, Km = function t(e, n, r) {
    var i = e.vars, o = i.ease, s = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.onUpdateParams, f = i.callbackScope, d = i.runBackwards, h = i.yoyoEase, m = i.keyframes, p = i.autoRevert, x = e._dur, y = e._startAt, g = e._targets, v = e.parent, _ = v && v.data === "nested" ? v.vars.targets : g, w = e._overwrite === "auto" && !zm, C = e.timeline, S, T, M, A, b, D, U, j, F, H, I, R, V;
    if (C && (!m || !o) && (o = "none"),
    e._ease = Ao(o, Qs.ease),
    e._yEase = h ? lw(Ao(h === !0 ? o : h, Qs.ease)) : 0,
    h && e._yoyo && !e._repeat && (h = e._yEase,
    e._yEase = e._ease,
    e._ease = h),
    e._from = !C && !!i.runBackwards,
    !C || m && !i.stagger) {
        if (j = g[0] ? Eo(g[0]).harness : 0,
        R = j && i[j.prop],
        S = Xc(i, Hm),
        y && (y._zTime < 0 && y.progress(1),
        n < 0 && d && a && !p ? y.render(-1, !0) : y.revert(d && x ? ic : AP),
        y._lazy = 0),
        s) {
            if (Fi(e._startAt = qe.set(g, Yn({
                data: "isStart",
                overwrite: !1,
                parent: v,
                immediateRender: !0,
                lazy: !y && sn(l),
                startAt: null,
                delay: 0,
                onUpdate: u,
                onUpdateParams: c,
                callbackScope: f,
                stagger: 0
            }, s))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Ot || !a && !p) && e._startAt.revert(ic),
            a && x && n <= 0 && r <= 0) {
                n && (e._zTime = n);
                return
            }
        } else if (d && x && !y) {
            if (n && (a = !1),
            M = Yn({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !y && sn(l),
                immediateRender: a,
                stagger: 0,
                parent: v
            }, S),
            R && (M[j.prop] = R),
            Fi(e._startAt = qe.set(g, M)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Ot ? e._startAt.revert(ic) : e._startAt.render(-1, !0)),
            e._zTime = n,
            !a)
                t(e._startAt, we, we);
            else if (!n)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = x && sn(l) || l && !x,
        T = 0; T < g.length; T++) {
            if (b = g[T],
            U = b._gsap || Gm(g)[T]._gsap,
            e._ptLookup[T] = H = {},
            tp[U.id] && Ri.length && Gc(),
            I = _ === g ? T : _.indexOf(b),
            j && (F = new j).init(b, R || S, e, I, _) !== !1 && (e._pt = A = new ln(e._pt,b,F.name,0,1,F.render,F,0,F.priority),
            F._props.forEach(function(k) {
                H[k] = A
            }),
            F.priority && (D = 1)),
            !j || R)
                for (M in S)
                    _n[M] && (F = dw(M, S, e, I, b, _)) ? F.priority && (D = 1) : H[M] = A = Xm.call(e, b, M, "get", S[M], I, _, 0, i.stringFilter);
            e._op && e._op[T] && e.kill(b, e._op[T]),
            w && e._pt && (gi = e,
            Le.killTweensOf(b, H, e.globalTime(n)),
            V = !e.parent,
            gi = 0),
            e._pt && l && (tp[U.id] = 1)
        }
        D && vw(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !V,
    m && n <= 0 && C.render(In, !0, !0)
}, n3 = function(e, n, r, i, o, s, a) {
    var l = (e._pt && e._ptCache || (e._ptCache = {}))[n], u, c, f, d;
    if (!l)
        for (l = e._ptCache[n] = [],
        f = e._ptLookup,
        d = e._targets.length; d--; ) {
            if (u = f[d][n],
            u && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== n && u.fp !== n; )
                    u = u._next;
            if (!u)
                return ap = 1,
                e.vars[n] = "+=0",
                Km(e, a),
                ap = 0,
                1;
            l.push(u)
        }
    for (d = l.length; d--; )
        c = l[d],
        u = c._pt || c,
        u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + s * u.c,
        u.c = r - u.s,
        c.e && (c.e = Ge(r) + Dt(c.e)),
        c.b && (c.b = u.s + Dt(c.b))
}, r3 = function(e, n) {
    var r = e[0] ? Eo(e[0]).harness : 0, i = r && r.aliases, o, s, a, l;
    if (!i)
        return n;
    o = Io({}, n);
    for (s in i)
        if (s in o)
            for (l = i[s].split(","),
            a = l.length; a--; )
                o[l[a]] = o[s];
    return o
}, i3 = function(e, n, r, i) {
    var o = n.ease || i || "power1.inOut", s, a;
    if (Lt(n))
        a = r[e] || (r[e] = []),
        n.forEach(function(l, u) {
            return a.push({
                t: u / (n.length - 1) * 100,
                v: l,
                e: o
            })
        });
    else
        for (s in n)
            a = r[s] || (r[s] = []),
            s === "ease" || a.push({
                t: parseFloat(e),
                v: n[s],
                e: o
            })
}, Ja = function(e, n, r, i, o) {
    return We(e) ? e.call(n, r, i, o) : ht(e) && ~e.indexOf("random(") ? Ol(e) : e
}, hw = Ym + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", pw = {};
an(hw + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
    return pw[t] = 1
});
var qe = function(t) {
    D_(e, t);
    function e(r, i, o, s) {
        var a;
        typeof i == "number" && (o.duration = i,
        i = o,
        o = null),
        a = t.call(this, s ? i : qa(i)) || this;
        var l = a.vars, u = l.duration, c = l.delay, f = l.immediateRender, d = l.stagger, h = l.overwrite, m = l.keyframes, p = l.defaults, x = l.scrollTrigger, y = l.yoyoEase, g = i.parent || Le, v = (Lt(r) || L_(r) ? Zr(r[0]) : "length"in i) ? [r] : zn(r), _, w, C, S, T, M, A, b;
        if (a._targets = v.length ? Gm(v) : Yc("GSAP target " + r + " not found. https://greensock.com", !Tn.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = h,
        m || d || Tu(u) || Tu(c)) {
            if (i = a.vars,
            _ = a.timeline = new en({
                data: "nested",
                defaults: p || {},
                targets: g && g.data === "nested" ? g.vars.targets : v
            }),
            _.kill(),
            _.parent = _._dp = Dr(a),
            _._start = 0,
            d || Tu(u) || Tu(c)) {
                if (S = v.length,
                A = d && Z_(d),
                Er(d))
                    for (T in d)
                        ~hw.indexOf(T) && (b || (b = {}),
                        b[T] = d[T]);
                for (w = 0; w < S; w++)
                    C = Xc(i, pw),
                    C.stagger = 0,
                    y && (C.yoyoEase = y),
                    b && Io(C, b),
                    M = v[w],
                    C.duration = +Ja(u, Dr(a), w, M, v),
                    C.delay = (+Ja(c, Dr(a), w, M, v) || 0) - a._delay,
                    !d && S === 1 && C.delay && (a._delay = c = C.delay,
                    a._start += c,
                    C.delay = 0),
                    _.to(M, C, A ? A(w, M, v) : 0),
                    _._ease = le.none;
                _.duration() ? u = c = 0 : a.timeline = 0
            } else if (m) {
                qa(Yn(_.vars.defaults, {
                    ease: "none"
                })),
                _._ease = Ao(m.ease || i.ease || "none");
                var D = 0, U, j, F;
                if (Lt(m))
                    m.forEach(function(H) {
                        return _.to(v, H, ">")
                    }),
                    _.duration();
                else {
                    C = {};
                    for (T in m)
                        T === "ease" || T === "easeEach" || i3(T, m[T], C, m.easeEach);
                    for (T in C)
                        for (U = C[T].sort(function(H, I) {
                            return H.t - I.t
                        }),
                        D = 0,
                        w = 0; w < U.length; w++)
                            j = U[w],
                            F = {
                                ease: j.e,
                                duration: (j.t - (w ? U[w - 1].t : 0)) / 100 * u
                            },
                            F[T] = j.v,
                            _.to(v, F, D),
                            D += F.duration;
                    _.duration() < u && _.to({}, {
                        duration: u - _.duration()
                    })
                }
            }
            u || a.duration(u = _.duration())
        } else
            a.timeline = 0;
        return h === !0 && !zm && (gi = Dr(a),
        Le.killTweensOf(v),
        gi = 0),
        xr(g, Dr(a), o),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (f || !u && !m && a._start === xt(g._time) && sn(f) && bP(Dr(a)) && g.data !== "nested") && (a._tTime = -we,
        a.render(Math.max(0, -c) || 0)),
        x && X_(Dr(a), x),
        a
    }
    var n = e.prototype;
    return n.render = function(i, o, s) {
        var a = this._time, l = this._tDur, u = this._dur, c = i < 0, f = i > l - we && !c ? l : i < we ? 0 : i, d, h, m, p, x, y, g, v, _;
        if (!u)
            VP(this, i, o, s);
        else if (f !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (d = f,
            v = this.timeline,
            this._repeat) {
                if (p = u + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(p * 100 + i, o, s);
                if (d = xt(f % p),
                f === l ? (m = this._repeat,
                d = u) : (m = ~~(f / p),
                m && m === f / p && (d = u,
                m--),
                d > u && (d = u)),
                y = this._yoyo && m & 1,
                y && (_ = this._yEase,
                d = u - d),
                x = qs(this._tTime, p),
                d === a && !s && this._initted)
                    return this._tTime = f,
                    this;
                m !== x && (v && this._yEase && uw(v, y),
                this.vars.repeatRefresh && !y && !this._lock && (this._lock = s = 1,
                this.render(xt(p * m), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (K_(this, c ? i : d, s, o, f))
                    return this._tTime = 0,
                    this;
                if (a !== this._time)
                    return this;
                if (u !== this._dur)
                    return this.render(i, o, s)
            }
            if (this._tTime = f,
            this._time = d,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = g = (_ || this._ease)(d / u),
            this._from && (this.ratio = g = 1 - g),
            d && !a && !o && !m && (Bn(this, "onStart"),
            this._tTime !== f))
                return this;
            for (h = this._pt; h; )
                h.r(g, h.d),
                h = h._next;
            v && v.render(i < 0 ? i : !d && y ? -we : v._dur * v._ease(d / this._dur), o, s) || this._startAt && (this._zTime = i),
            this._onUpdate && !o && (c && np(this, i, o, s),
            Bn(this, "onUpdate")),
            this._repeat && m !== x && this.vars.onRepeat && !o && this.parent && Bn(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && np(this, i, !0, !0),
            (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Fi(this, 1),
            !o && !(c && !a) && (f || a || y) && (Bn(this, f === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
    }
    ,
    n.resetTo = function(i, o, s, a) {
        Ll || wn.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
        return this._initted || Km(this, l),
        u = this._ease(l / this._dur),
        n3(this, i, o, s, a, u, l) ? this.resetTo(i, o, s, a) : (Vf(this, 0),
        this.parent || Y_(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    n.kill = function(i, o) {
        if (o === void 0 && (o = "all"),
        !i && (!o || o === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Da(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, o, gi && gi.vars.overwrite !== !0)._first || Da(this),
            this.parent && s !== this.timeline.totalDuration() && Zs(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var a = this._targets, l = i ? zn(i) : a, u = this._ptLookup, c = this._pt, f, d, h, m, p, x, y;
        if ((!o || o === "all") && OP(a, l))
            return o === "all" && (this._pt = 0),
            Da(this);
        for (f = this._op = this._op || [],
        o !== "all" && (ht(o) && (p = {},
        an(o, function(g) {
            return p[g] = 1
        }),
        o = p),
        o = r3(a, o)),
        y = a.length; y--; )
            if (~l.indexOf(a[y])) {
                d = u[y],
                o === "all" ? (f[y] = o,
                m = d,
                h = {}) : (h = f[y] = f[y] || {},
                m = o);
                for (p in m)
                    x = d && d[p],
                    x && ((!("kill"in x.d) || x.d.kill(p) === !0) && bf(this, x, "_pt"),
                    delete d[p]),
                    h !== "all" && (h[p] = 1)
            }
        return this._initted && !this._pt && c && Da(this),
        this
    }
    ,
    e.to = function(i, o) {
        return new e(i,o,arguments[2])
    }
    ,
    e.from = function(i, o) {
        return Za(1, arguments)
    }
    ,
    e.delayedCall = function(i, o, s, a) {
        return new e(o,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: o,
            onReverseComplete: o,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(i, o, s) {
        return Za(2, arguments)
    }
    ,
    e.set = function(i, o) {
        return o.duration = 0,
        o.repeatDelay || (o.repeat = 0),
        new e(i,o)
    }
    ,
    e.killTweensOf = function(i, o, s) {
        return Le.killTweensOf(i, o, s)
    }
    ,
    e
}(bl);
Yn(qe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
an("staggerTo,staggerFrom,staggerFromTo", function(t) {
    qe[t] = function() {
        var e = new en
          , n = ip.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0),
        e[t].apply(e, n)
    }
});
var Qm = function(e, n, r) {
    return e[n] = r
}
  , mw = function(e, n, r) {
    return e[n](r)
}
  , o3 = function(e, n, r, i) {
    return e[n](i.fp, r)
}
  , s3 = function(e, n, r) {
    return e.setAttribute(n, r)
}
  , qm = function(e, n) {
    return We(e[n]) ? mw : Bm(e[n]) && e.setAttribute ? s3 : Qm
}
  , gw = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
}
  , a3 = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
}
  , yw = function(e, n) {
    var r = n._pt
      , i = "";
    if (!e && n.b)
        i = n.b;
    else if (e === 1 && n.e)
        i = n.e;
    else {
        for (; r; )
            i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
            r = r._next;
        i += n.c
    }
    n.set(n.t, n.p, i, n)
}
  , Zm = function(e, n) {
    for (var r = n._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , l3 = function(e, n, r, i) {
    for (var o = this._pt, s; o; )
        s = o._next,
        o.p === i && o.modifier(e, n, r),
        o = s
}
  , u3 = function(e) {
    for (var n = this._pt, r, i; n; )
        i = n._next,
        n.p === e && !n.op || n.op === e ? bf(this, n, "_pt") : n.dep || (r = 1),
        n = i;
    return !r
}
  , c3 = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
}
  , vw = function(e) {
    for (var n = e._pt, r, i, o, s; n; ) {
        for (r = n._next,
        i = o; i && i.pr > n.pr; )
            i = i._next;
        (n._prev = i ? i._prev : s) ? n._prev._next = n : o = n,
        (n._next = i) ? i._prev = n : s = n,
        n = r
    }
    e._pt = o
}
  , ln = function() {
    function t(n, r, i, o, s, a, l, u, c) {
        this.t = r,
        this.s = o,
        this.c = s,
        this.p = i,
        this.r = a || gw,
        this.d = l || this,
        this.set = u || Qm,
        this.pr = c || 0,
        this._next = n,
        n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, o) {
        this.mSet = this.mSet || this.set,
        this.set = c3,
        this.m = r,
        this.mt = o,
        this.tween = i
    }
    ,
    t
}();
an(Ym + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return Hm[t] = 1
});
En.TweenMax = En.TweenLite = qe;
En.TimelineLite = En.TimelineMax = en;
Le = new en({
    sortChildren: !1,
    defaults: Qs,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Tn.stringFilter = aw;
var Ro = []
  , sc = {}
  , f3 = []
  , fy = 0
  , d3 = 0
  , Ed = function(e) {
    return (sc[e] || f3).map(function(n) {
        return n()
    })
}
  , lp = function() {
    var e = Date.now()
      , n = [];
    e - fy > 2 && (Ed("matchMediaInit"),
    Ro.forEach(function(r) {
        var i = r.queries, o = r.conditions, s, a, l, u;
        for (a in i)
            s = On.matchMedia(i[a]).matches,
            s && (l = 1),
            s !== o[a] && (o[a] = s,
            u = 1);
        u && (r.revert(),
        l && n.push(r))
    }),
    Ed("matchMediaRevert"),
    n.forEach(function(r) {
        return r.onMatch(r)
    }),
    fy = e,
    Ed("matchMedia"))
}
  , xw = function() {
    function t(n, r) {
        this.selector = r && op(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = d3++,
        n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, o) {
        We(r) && (o = i,
        i = r,
        r = We);
        var s = this
          , a = function() {
            var u = $e, c = s.selector, f;
            return u && u !== s && u.data.push(s),
            o && (s.selector = op(o)),
            $e = s,
            f = i.apply(s, arguments),
            We(f) && s._r.push(f),
            $e = u,
            s.selector = c,
            s.isReverted = !1,
            f
        };
        return s.last = a,
        r === We ? a(s) : r ? s[r] = a : a
    }
    ,
    e.ignore = function(r) {
        var i = $e;
        $e = null,
        r(this),
        $e = i
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(i) {
            return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof qe && !(i.parent && i.parent.data === "nested") && r.push(i)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, i) {
        var o = this;
        if (r) {
            var s = this.getTweens();
            this.data.forEach(function(l) {
                l.data === "isFlip" && (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function(u) {
                    return s.splice(s.indexOf(u), 1)
                }))
            }),
            s.map(function(l) {
                return {
                    g: l.globalTime(0),
                    t: l
                }
            }).sort(function(l, u) {
                return u.g - l.g || -1 / 0
            }).forEach(function(l) {
                return l.t.revert(r)
            }),
            this.data.forEach(function(l) {
                return !(l instanceof qe) && l.revert && l.revert(r)
            }),
            this._r.forEach(function(l) {
                return l(r, o)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(l) {
                return l.kill && l.kill()
            });
        if (this.clear(),
        i)
            for (var a = Ro.length; a--; )
                Ro[a].id === this.id && Ro.splice(a, 1)
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    t
}()
  , h3 = function() {
    function t(n) {
        this.contexts = [],
        this.scope = n
    }
    var e = t.prototype;
    return e.add = function(r, i, o) {
        Er(r) || (r = {
            matches: r
        });
        var s = new xw(0,o || this.scope), a = s.conditions = {}, l, u, c;
        $e && !s.selector && (s.selector = $e.selector),
        this.contexts.push(s),
        i = s.add("onMatch", i),
        s.queries = r;
        for (u in r)
            u === "all" ? c = 1 : (l = On.matchMedia(r[u]),
            l && (Ro.indexOf(s) < 0 && Ro.push(s),
            (a[u] = l.matches) && (c = 1),
            l.addListener ? l.addListener(lp) : l.addEventListener("change", lp)));
        return c && i(s),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(i) {
            return i.kill(r, !0)
        })
    }
    ,
    t
}()
  , Qc = {
    registerPlugin: function() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
        n.forEach(function(i) {
            return iw(i)
        })
    },
    timeline: function(e) {
        return new en(e)
    },
    getTweensOf: function(e, n) {
        return Le.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
        ht(e) && (e = zn(e)[0]);
        var o = Eo(e || {}).get
          , s = r ? H_ : W_;
        return r === "native" && (r = ""),
        e && (n ? s((_n[n] && _n[n].get || o)(e, n, r, i)) : function(a, l, u) {
            return s((_n[a] && _n[a].get || o)(e, a, l, u))
        }
        )
    },
    quickSetter: function(e, n, r) {
        if (e = zn(e),
        e.length > 1) {
            var i = e.map(function(c) {
                return un.quickSetter(c, n, r)
            })
              , o = i.length;
            return function(c) {
                for (var f = o; f--; )
                    i[f](c)
            }
        }
        e = e[0] || {};
        var s = _n[n]
          , a = Eo(e)
          , l = a.harness && (a.harness.aliases || {})[n] || n
          , u = s ? function(c) {
            var f = new s;
            Cs._pt = 0,
            f.init(e, r ? c + r : c, Cs, 0, [e]),
            f.render(1, f),
            Cs._pt && Zm(1, Cs)
        }
        : a.set(e, l);
        return s ? u : function(c) {
            return u(e, l, r ? c + r : c, a, 1)
        }
    },
    quickTo: function(e, n, r) {
        var i, o = un.to(e, Io((i = {},
        i[n] = "+=0.1",
        i.paused = !0,
        i), r || {})), s = function(l, u, c) {
            return o.resetTo(n, l, u, c)
        };
        return s.tween = o,
        s
    },
    isTweening: function(e) {
        return Le.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = Ao(e.ease, Qs.ease)),
        sy(Qs, e || {})
    },
    config: function(e) {
        return sy(Tn, e || {})
    },
    registerEffect: function(e) {
        var n = e.name
          , r = e.effect
          , i = e.plugins
          , o = e.defaults
          , s = e.extendTimeline;
        (i || "").split(",").forEach(function(a) {
            return a && !_n[a] && !En[a] && Yc(n + " effect requires " + a + " plugin.")
        }),
        Cd[n] = function(a, l, u) {
            return r(zn(a), Yn(l || {}, o), u)
        }
        ,
        s && (en.prototype[n] = function(a, l, u) {
            return this.add(Cd[n](a, Er(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(e, n) {
        le[e] = Ao(n)
    },
    parseEase: function(e, n) {
        return arguments.length ? Ao(e, n) : le
    },
    getById: function(e) {
        return Le.getById(e)
    },
    exportRoot: function(e, n) {
        e === void 0 && (e = {});
        var r = new en(e), i, o;
        for (r.smoothChildTiming = sn(e.smoothChildTiming),
        Le.remove(r),
        r._dp = 0,
        r._time = r._tTime = Le._time,
        i = Le._first; i; )
            o = i._next,
            (n || !(!i._dur && i instanceof qe && i.vars.onComplete === i._targets[0])) && xr(r, i, i._start - i._delay),
            i = o;
        return xr(Le, r, 0),
        r
    },
    context: function(e, n) {
        return e ? new xw(e,n) : $e
    },
    matchMedia: function(e) {
        return new h3(e)
    },
    matchMediaRefresh: function() {
        return Ro.forEach(function(e) {
            var n = e.conditions, r, i;
            for (i in n)
                n[i] && (n[i] = !1,
                r = 1);
            r && e.revert()
        }) || lp()
    },
    addEventListener: function(e, n) {
        var r = sc[e] || (sc[e] = []);
        ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
        var r = sc[e]
          , i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1)
    },
    utils: {
        wrap: HP,
        wrapYoyo: YP,
        distribute: Z_,
        random: ew,
        snap: J_,
        normalize: WP,
        getUnit: Dt,
        clamp: zP,
        splitColor: ow,
        toArray: zn,
        selector: op,
        mapRange: nw,
        pipe: $P,
        unitize: UP,
        interpolate: GP,
        shuffle: q_
    },
    install: I_,
    effects: Cd,
    ticker: wn,
    updateRoot: en.updateRoot,
    plugins: _n,
    globalTimeline: Le,
    core: {
        PropTween: ln,
        globals: z_,
        Tween: qe,
        Timeline: en,
        Animation: bl,
        getCache: Eo,
        _removeLinkedListItem: bf,
        reverting: function() {
            return Ot
        },
        context: function(e) {
            return e && $e && ($e.data.push(e),
            e._ctx = $e),
            $e
        },
        suppressOverwrites: function(e) {
            return zm = e
        }
    }
};
an("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return Qc[t] = qe[t]
});
wn.add(en.updateRoot);
Cs = Qc.to({}, {
    duration: 0
});
var p3 = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
    return r
}
  , m3 = function(e, n) {
    var r = e._targets, i, o, s;
    for (i in n)
        for (o = r.length; o--; )
            s = e._ptLookup[o][i],
            s && (s = s.d) && (s._pt && (s = p3(s, i)),
            s && s.modifier && s.modifier(n[i], e, r[o], i))
}
  , Md = function(e, n) {
    return {
        name: e,
        rawVars: 1,
        init: function(i, o, s) {
            s._onInit = function(a) {
                var l, u;
                if (ht(o) && (l = {},
                an(o, function(c) {
                    return l[c] = 1
                }),
                o = l),
                n) {
                    l = {};
                    for (u in o)
                        l[u] = n(o[u]);
                    o = l
                }
                m3(a, o)
            }
        }
    }
}
  , un = Qc.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, o) {
        var s, a, l;
        this.tween = r;
        for (s in n)
            l = e.getAttribute(s) || "",
            a = this.add(e, "setAttribute", (l || 0) + "", n[s], i, o, 0, 0, s),
            a.op = s,
            a.b = l,
            this._props.push(s)
    },
    render: function(e, n) {
        for (var r = n._pt; r; )
            Ot ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(e, n) {
        for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
}, Md("roundProps", sp), Md("modifiers"), Md("snap", J_)) || Qc;
qe.version = en.version = un.version = "3.12.2";
F_ = 1;
$m() && Js();
le.Power0;
le.Power1;
le.Power2;
le.Power3;
le.Power4;
le.Linear;
le.Quad;
le.Cubic;
le.Quart;
le.Quint;
le.Strong;
le.Elastic;
le.Back;
le.SteppedEase;
le.Bounce;
le.Sine;
le.Expo;
le.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var dy, yi, Fs, Jm, _o, hy, e0, g3 = function() {
    return typeof window < "u"
}, Jr = {}, uo = 180 / Math.PI, Is = Math.PI / 180, ts = Math.atan2, py = 1e8, t0 = /([A-Z])/g, y3 = /(left|right|width|margin|padding|x)/i, v3 = /[\s,\(]\S/, _r = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, up = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, x3 = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, _3 = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
}, w3 = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, _w = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
}, ww = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
}, S3 = function(e, n, r) {
    return e.style[n] = r
}, C3 = function(e, n, r) {
    return e.style.setProperty(n, r)
}, k3 = function(e, n, r) {
    return e._gsap[n] = r
}, T3 = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, P3 = function(e, n, r, i, o) {
    var s = e._gsap;
    s.scaleX = s.scaleY = r,
    s.renderTransform(o, s)
}, E3 = function(e, n, r, i, o) {
    var s = e._gsap;
    s[n] = r,
    s.renderTransform(o, s)
}, be = "transform", ar = be + "Origin", M3 = function t(e, n) {
    var r = this
      , i = this.target
      , o = i.style;
    if (e in Jr && o) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = _r[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(s) {
                return r.tfm[s] = Lr(i, s)
            }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : Lr(i, e);
        else
            return _r.transform.split(",").forEach(function(s) {
                return t.call(r, s, n)
            });
        if (this.props.indexOf(be) >= 0)
            return;
        i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(ar, n, "")),
        e = be
    }
    (o || n) && this.props.push(e, n, o[e])
}, Sw = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, A3 = function() {
    var e = this.props, n = this.target, r = n.style, i = n._gsap, o, s;
    for (o = 0; o < e.length; o += 3)
        e[o + 1] ? n[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(t0, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            i[s] = this.tfm[s];
        i.svg && (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        o = e0(),
        (!o || !o.isStart) && !r[be] && (Sw(r),
        i.uncache = 1)
    }
}, Cw = function(e, n) {
    var r = {
        target: e,
        props: [],
        revert: A3,
        save: M3
    };
    return e._gsap || un.core.getCache(e),
    n && n.split(",").forEach(function(i) {
        return r.save(i)
    }),
    r
}, kw, cp = function(e, n) {
    var r = yi.createElementNS ? yi.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : yi.createElement(e);
    return r.style ? r : yi.createElement(e)
}, kr = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(t0, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, ea(n) || n, 1) || ""
}, my = "O,Moz,ms,Ms,Webkit".split(","), ea = function(e, n, r) {
    var i = n || _o
      , o = i.style
      , s = 5;
    if (e in o && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(my[s] + e in o); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? my[s] : "") + e
}, fp = function() {
    g3() && window.document && (dy = window,
    yi = dy.document,
    Fs = yi.documentElement,
    _o = cp("div") || {
        style: {}
    },
    cp("div"),
    be = ea(be),
    ar = be + "Origin",
    _o.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    kw = !!ea("perspective"),
    e0 = un.core.reverting,
    Jm = 1)
}, Ad = function t(e) {
    var n = cp("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText, s;
    if (Fs.appendChild(n),
    n.appendChild(this),
    this.style.display = "block",
    e)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = t
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
    Fs.removeChild(n),
    this.style.cssText = o,
    s
}, gy = function(e, n) {
    for (var r = n.length; r--; )
        if (e.hasAttribute(n[r]))
            return e.getAttribute(n[r])
}, Tw = function(e) {
    var n;
    try {
        n = e.getBBox()
    } catch {
        n = Ad.call(e, !0)
    }
    return n && (n.width || n.height) || e.getBBox === Ad || (n = Ad.call(e, !0)),
    n && !n.width && !n.x && !n.y ? {
        x: +gy(e, ["x", "cx", "x1"]) || 0,
        y: +gy(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : n
}, Pw = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Tw(e))
}, jl = function(e, n) {
    if (n) {
        var r = e.style;
        n in Jr && n !== ar && (n = be),
        r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
        r.removeProperty(n.replace(t0, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
}, vi = function(e, n, r, i, o, s) {
    var a = new ln(e._pt,n,r,0,1,s ? ww : _w);
    return e._pt = a,
    a.b = i,
    a.e = o,
    e._props.push(r),
    a
}, yy = {
    deg: 1,
    rad: 1,
    turn: 1
}, R3 = {
    grid: 1,
    flex: 1
}, Ii = function t(e, n, r, i) {
    var o = parseFloat(r) || 0, s = (r + "").trim().substr((o + "").length) || "px", a = _o.style, l = y3.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, d = i === "px", h = i === "%", m, p, x, y;
    return i === s || !o || yy[i] || yy[s] ? o : (s !== "px" && !d && (o = t(e, n, r, "px")),
    y = e.getCTM && Pw(e),
    (h || s === "%") && (Jr[n] || ~n.indexOf("adius")) ? (m = y ? e.getBBox()[l ? "width" : "height"] : e[c],
    Ge(h ? o / m * f : o / 100 * m)) : (a[l ? "width" : "height"] = f + (d ? s : i),
    p = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode,
    y && (p = (e.ownerSVGElement || {}).parentNode),
    (!p || p === yi || !p.appendChild) && (p = yi.body),
    x = p._gsap,
    x && h && x.width && l && x.time === wn.time && !x.uncache ? Ge(o / x.width * f) : ((h || s === "%") && !R3[kr(p, "display")] && (a.position = kr(e, "position")),
    p === e && (a.position = "static"),
    p.appendChild(_o),
    m = _o[c],
    p.removeChild(_o),
    a.position = "absolute",
    l && h && (x = Eo(p),
    x.time = wn.time,
    x.width = p[c]),
    Ge(d ? m * o / f : m && o ? f / m * o : 0))))
}, Lr = function(e, n, r, i) {
    var o;
    return Jm || fp(),
    n in _r && n !== "transform" && (n = _r[n],
    ~n.indexOf(",") && (n = n.split(",")[0])),
    Jr[n] && n !== "transform" ? (o = Fl(e, i),
    o = n !== "transformOrigin" ? o[n] : o.svg ? o.origin : Zc(kr(e, ar)) + " " + o.zOrigin + "px") : (o = e.style[n],
    (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = qc[n] && qc[n](e, n, r) || kr(e, n) || $_(e, n) || (n === "opacity" ? 1 : 0))),
    r && !~(o + "").trim().indexOf(" ") ? Ii(e, n, o, r) + r : o
}, N3 = function(e, n, r, i) {
    if (!r || r === "none") {
        var o = ea(n, e, 1)
          , s = o && kr(e, o, 1);
        s && s !== r ? (n = o,
        r = s) : n === "borderColor" && (r = kr(e, "borderTopColor"))
    }
    var a = new ln(this._pt,e.style,n,0,1,yw), l = 0, u = 0, c, f, d, h, m, p, x, y, g, v, _, w;
    if (a.b = r,
    a.e = i,
    r += "",
    i += "",
    i === "auto" && (e.style[n] = i,
    i = kr(e, n) || i,
    e.style[n] = r),
    c = [r, i],
    aw(c),
    r = c[0],
    i = c[1],
    d = r.match(Ss) || [],
    w = i.match(Ss) || [],
    w.length) {
        for (; f = Ss.exec(i); )
            x = f[0],
            g = i.substring(l, f.index),
            m ? m = (m + 1) % 5 : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (m = 1),
            x !== (p = d[u++] || "") && (h = parseFloat(p) || 0,
            _ = p.substr((h + "").length),
            x.charAt(1) === "=" && (x = Vs(h, x) + _),
            y = parseFloat(x),
            v = x.substr((y + "").length),
            l = Ss.lastIndex - v.length,
            v || (v = v || Tn.units[n] || _,
            l === i.length && (i += v,
            a.e += v)),
            _ !== v && (h = Ii(e, n, p, v) || 0),
            a._pt = {
                _next: a._pt,
                p: g || u === 1 ? g : ",",
                s: h,
                c: y - h,
                m: m && m < 4 || n === "zIndex" ? Math.round : 0
            });
        a.c = l < i.length ? i.substring(l, i.length) : ""
    } else
        a.r = n === "display" && i === "none" ? ww : _w;
    return j_.test(i) && (a.e = 0),
    this._pt = a,
    a
}, vy = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, D3 = function(e) {
    var n = e.split(" ")
      , r = n[0]
      , i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r,
    r = i,
    i = e),
    n[0] = vy[r] || r,
    n[1] = vy[i] || i,
    n.join(" ")
}, O3 = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
        var r = n.t, i = r.style, o = n.u, s = r._gsap, a, l, u;
        if (o === "all" || o === !0)
            i.cssText = "",
            l = 1;
        else
            for (o = o.split(","),
            u = o.length; --u > -1; )
                a = o[u],
                Jr[a] && (l = 1,
                a = a === "transformOrigin" ? ar : be),
                jl(r, a);
        l && (jl(r, be),
        s && (s.svg && r.removeAttribute("transform"),
        Fl(r, 1),
        s.uncache = 1,
        Sw(i)))
    }
}, qc = {
    clearProps: function(e, n, r, i, o) {
        if (o.data !== "isFromStart") {
            var s = e._pt = new ln(e._pt,n,r,0,0,O3);
            return s.u = i,
            s.pr = -10,
            s.tween = o,
            e._props.push(r),
            1
        }
    }
}, Vl = [1, 0, 0, 1, 0, 0], Ew = {}, Mw = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, xy = function(e) {
    var n = kr(e, be);
    return Mw(n) ? Vl : n.substr(7).match(b_).map(Ge)
}, n0 = function(e, n) {
    var r = e._gsap || Eo(e), i = e.style, o = xy(e), s, a, l, u;
    return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    o = [l.a, l.b, l.c, l.d, l.e, l.f],
    o.join(",") === "1,0,0,1,0,0" ? Vl : o) : (o === Vl && !e.offsetParent && e !== Fs && !r.svg && (l = i.display,
    i.display = "block",
    s = e.parentNode,
    (!s || !e.offsetParent) && (u = 1,
    a = e.nextElementSibling,
    Fs.appendChild(e)),
    o = xy(e),
    l ? i.display = l : jl(e, "display"),
    u && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : Fs.removeChild(e))),
    n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
}, dp = function(e, n, r, i, o, s) {
    var a = e._gsap, l = o || n0(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, d = a.yOffset || 0, h = l[0], m = l[1], p = l[2], x = l[3], y = l[4], g = l[5], v = n.split(" "), _ = parseFloat(v[0]) || 0, w = parseFloat(v[1]) || 0, C, S, T, M;
    r ? l !== Vl && (S = h * x - m * p) && (T = _ * (x / S) + w * (-p / S) + (p * g - x * y) / S,
    M = _ * (-m / S) + w * (h / S) - (h * g - m * y) / S,
    _ = T,
    w = M) : (C = Tw(e),
    _ = C.x + (~v[0].indexOf("%") ? _ / 100 * C.width : _),
    w = C.y + (~(v[1] || v[0]).indexOf("%") ? w / 100 * C.height : w)),
    i || i !== !1 && a.smooth ? (y = _ - u,
    g = w - c,
    a.xOffset = f + (y * h + g * p) - y,
    a.yOffset = d + (y * m + g * x) - g) : a.xOffset = a.yOffset = 0,
    a.xOrigin = _,
    a.yOrigin = w,
    a.smooth = !!i,
    a.origin = n,
    a.originIsAbsolute = !!r,
    e.style[ar] = "0px 0px",
    s && (vi(s, a, "xOrigin", u, _),
    vi(s, a, "yOrigin", c, w),
    vi(s, a, "xOffset", f, a.xOffset),
    vi(s, a, "yOffset", d, a.yOffset)),
    e.setAttribute("data-svg-origin", _ + " " + w)
}, Fl = function(e, n) {
    var r = e._gsap || new fw(e);
    if ("x"in r && !n && !r.uncache)
        return r;
    var i = e.style, o = r.scaleX < 0, s = "px", a = "deg", l = getComputedStyle(e), u = kr(e, ar) || "0", c, f, d, h, m, p, x, y, g, v, _, w, C, S, T, M, A, b, D, U, j, F, H, I, R, V, k, O, W, ge, Z, oe;
    return c = f = d = p = x = y = g = v = _ = 0,
    h = m = 1,
    r.svg = !!(e.getCTM && Pw(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[be] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[be] !== "none" ? l[be] : "")),
    i.scale = i.rotate = i.translate = "none"),
    S = n0(e, r.svg),
    r.svg && (r.uncache ? (R = e.getBBox(),
    u = r.xOrigin - R.x + "px " + (r.yOrigin - R.y) + "px",
    I = "") : I = !n && e.getAttribute("data-svg-origin"),
    dp(e, I || u, !!I || r.originIsAbsolute, r.smooth !== !1, S)),
    w = r.xOrigin || 0,
    C = r.yOrigin || 0,
    S !== Vl && (b = S[0],
    D = S[1],
    U = S[2],
    j = S[3],
    c = F = S[4],
    f = H = S[5],
    S.length === 6 ? (h = Math.sqrt(b * b + D * D),
    m = Math.sqrt(j * j + U * U),
    p = b || D ? ts(D, b) * uo : 0,
    g = U || j ? ts(U, j) * uo + p : 0,
    g && (m *= Math.abs(Math.cos(g * Is))),
    r.svg && (c -= w - (w * b + C * U),
    f -= C - (w * D + C * j))) : (oe = S[6],
    ge = S[7],
    k = S[8],
    O = S[9],
    W = S[10],
    Z = S[11],
    c = S[12],
    f = S[13],
    d = S[14],
    T = ts(oe, W),
    x = T * uo,
    T && (M = Math.cos(-T),
    A = Math.sin(-T),
    I = F * M + k * A,
    R = H * M + O * A,
    V = oe * M + W * A,
    k = F * -A + k * M,
    O = H * -A + O * M,
    W = oe * -A + W * M,
    Z = ge * -A + Z * M,
    F = I,
    H = R,
    oe = V),
    T = ts(-U, W),
    y = T * uo,
    T && (M = Math.cos(-T),
    A = Math.sin(-T),
    I = b * M - k * A,
    R = D * M - O * A,
    V = U * M - W * A,
    Z = j * A + Z * M,
    b = I,
    D = R,
    U = V),
    T = ts(D, b),
    p = T * uo,
    T && (M = Math.cos(T),
    A = Math.sin(T),
    I = b * M + D * A,
    R = F * M + H * A,
    D = D * M - b * A,
    H = H * M - F * A,
    b = I,
    F = R),
    x && Math.abs(x) + Math.abs(p) > 359.9 && (x = p = 0,
    y = 180 - y),
    h = Ge(Math.sqrt(b * b + D * D + U * U)),
    m = Ge(Math.sqrt(H * H + oe * oe)),
    T = ts(F, H),
    g = Math.abs(T) > 2e-4 ? T * uo : 0,
    _ = Z ? 1 / (Z < 0 ? -Z : Z) : 0),
    r.svg && (I = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !Mw(kr(e, be)),
    I && e.setAttribute("transform", I))),
    Math.abs(g) > 90 && Math.abs(g) < 270 && (o ? (h *= -1,
    g += p <= 0 ? 180 : -180,
    p += p <= 0 ? 180 : -180) : (m *= -1,
    g += g <= 0 ? 180 : -180)),
    n = n || r.uncache,
    r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s,
    r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s,
    r.z = d + s,
    r.scaleX = Ge(h),
    r.scaleY = Ge(m),
    r.rotation = Ge(p) + a,
    r.rotationX = Ge(x) + a,
    r.rotationY = Ge(y) + a,
    r.skewX = g + a,
    r.skewY = v + a,
    r.transformPerspective = _ + s,
    (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[ar] = Zc(u)),
    r.xOffset = r.yOffset = 0,
    r.force3D = Tn.force3D,
    r.renderTransform = r.svg ? b3 : kw ? Aw : L3,
    r.uncache = 0,
    r
}, Zc = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Rd = function(e, n, r) {
    var i = Dt(n);
    return Ge(parseFloat(n) + parseFloat(Ii(e, "x", r + "px", i))) + i
}, L3 = function(e, n) {
    n.z = "0px",
    n.rotationY = n.rotationX = "0deg",
    n.force3D = 0,
    Aw(e, n)
}, ro = "0deg", Sa = "0px", io = ") ", Aw = function(e, n) {
    var r = n || this
      , i = r.xPercent
      , o = r.yPercent
      , s = r.x
      , a = r.y
      , l = r.z
      , u = r.rotation
      , c = r.rotationY
      , f = r.rotationX
      , d = r.skewX
      , h = r.skewY
      , m = r.scaleX
      , p = r.scaleY
      , x = r.transformPerspective
      , y = r.force3D
      , g = r.target
      , v = r.zOrigin
      , _ = ""
      , w = y === "auto" && e && e !== 1 || y === !0;
    if (v && (f !== ro || c !== ro)) {
        var C = parseFloat(c) * Is, S = Math.sin(C), T = Math.cos(C), M;
        C = parseFloat(f) * Is,
        M = Math.cos(C),
        s = Rd(g, s, S * M * -v),
        a = Rd(g, a, -Math.sin(C) * -v),
        l = Rd(g, l, T * M * -v + v)
    }
    x !== Sa && (_ += "perspective(" + x + io),
    (i || o) && (_ += "translate(" + i + "%, " + o + "%) "),
    (w || s !== Sa || a !== Sa || l !== Sa) && (_ += l !== Sa || w ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + io),
    u !== ro && (_ += "rotate(" + u + io),
    c !== ro && (_ += "rotateY(" + c + io),
    f !== ro && (_ += "rotateX(" + f + io),
    (d !== ro || h !== ro) && (_ += "skew(" + d + ", " + h + io),
    (m !== 1 || p !== 1) && (_ += "scale(" + m + ", " + p + io),
    g.style[be] = _ || "translate(0, 0)"
}, b3 = function(e, n) {
    var r = n || this, i = r.xPercent, o = r.yPercent, s = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, d = r.scaleY, h = r.target, m = r.xOrigin, p = r.yOrigin, x = r.xOffset, y = r.yOffset, g = r.forceCSS, v = parseFloat(s), _ = parseFloat(a), w, C, S, T, M;
    l = parseFloat(l),
    u = parseFloat(u),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    u += c,
    l += c),
    l || u ? (l *= Is,
    u *= Is,
    w = Math.cos(l) * f,
    C = Math.sin(l) * f,
    S = Math.sin(l - u) * -d,
    T = Math.cos(l - u) * d,
    u && (c *= Is,
    M = Math.tan(u - c),
    M = Math.sqrt(1 + M * M),
    S *= M,
    T *= M,
    c && (M = Math.tan(c),
    M = Math.sqrt(1 + M * M),
    w *= M,
    C *= M)),
    w = Ge(w),
    C = Ge(C),
    S = Ge(S),
    T = Ge(T)) : (w = f,
    T = d,
    C = S = 0),
    (v && !~(s + "").indexOf("px") || _ && !~(a + "").indexOf("px")) && (v = Ii(h, "x", s, "px"),
    _ = Ii(h, "y", a, "px")),
    (m || p || x || y) && (v = Ge(v + m - (m * w + p * S) + x),
    _ = Ge(_ + p - (m * C + p * T) + y)),
    (i || o) && (M = h.getBBox(),
    v = Ge(v + i / 100 * M.width),
    _ = Ge(_ + o / 100 * M.height)),
    M = "matrix(" + w + "," + C + "," + S + "," + T + "," + v + "," + _ + ")",
    h.setAttribute("transform", M),
    g && (h.style[be] = M)
}, j3 = function(e, n, r, i, o) {
    var s = 360, a = ht(o), l = parseFloat(o) * (a && ~o.indexOf("rad") ? uo : 1), u = l - i, c = i + u + "deg", f, d;
    return a && (f = o.split("_")[1],
    f === "short" && (u %= s,
    u !== u % (s / 2) && (u += u < 0 ? s : -s)),
    f === "cw" && u < 0 ? u = (u + s * py) % s - ~~(u / s) * s : f === "ccw" && u > 0 && (u = (u - s * py) % s - ~~(u / s) * s)),
    e._pt = d = new ln(e._pt,n,r,i,u,x3),
    d.e = c,
    d.u = "deg",
    e._props.push(r),
    d
}, _y = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, V3 = function(e, n, r) {
    var i = _y({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, l, u, c, f, d, h, m;
    i.svg ? (u = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    s[be] = n,
    a = Fl(r, 1),
    jl(r, be),
    r.setAttribute("transform", u)) : (u = getComputedStyle(r)[be],
    s[be] = n,
    a = Fl(r, 1),
    s[be] = u);
    for (l in Jr)
        u = i[l],
        c = a[l],
        u !== c && o.indexOf(l) < 0 && (h = Dt(u),
        m = Dt(c),
        f = h !== m ? Ii(r, l, u, m) : parseFloat(u),
        d = parseFloat(c),
        e._pt = new ln(e._pt,a,l,f,d - f,up),
        e._pt.u = m || 0,
        e._props.push(l));
    _y(a, i)
};
an("padding,margin,Width,Radius", function(t, e) {
    var n = "Top"
      , r = "Right"
      , i = "Bottom"
      , o = "Left"
      , s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(a) {
        return e < 2 ? t + a : "border" + a + t
    });
    qc[e > 1 ? "border" + t : t] = function(a, l, u, c, f) {
        var d, h;
        if (arguments.length < 4)
            return d = s.map(function(m) {
                return Lr(a, m, u)
            }),
            h = d.join(" "),
            h.split(d[0]).length === 5 ? d[0] : h;
        d = (c + "").split(" "),
        h = {},
        s.forEach(function(m, p) {
            return h[m] = d[p] = d[p] || d[(p - 1) / 2 | 0]
        }),
        a.init(l, h, f)
    }
});
var Rw = {
    name: "css",
    register: fp,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, n, r, i, o) {
        var s = this._props, a = e.style, l = r.vars.startAt, u, c, f, d, h, m, p, x, y, g, v, _, w, C, S, T;
        Jm || fp(),
        this.styles = this.styles || Cw(e),
        T = this.styles.props,
        this.tween = r;
        for (p in n)
            if (p !== "autoRound" && (c = n[p],
            !(_n[p] && dw(p, n, r, i, e, o)))) {
                if (h = typeof c,
                m = qc[p],
                h === "function" && (c = c.call(r, i, e, o),
                h = typeof c),
                h === "string" && ~c.indexOf("random(") && (c = Ol(c)),
                m)
                    m(this, e, p, c, r) && (S = 1);
                else if (p.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(p) + "").trim(),
                    c += "",
                    Ni.lastIndex = 0,
                    Ni.test(u) || (x = Dt(u),
                    y = Dt(c)),
                    y ? x !== y && (u = Ii(e, p, u, y) + y) : x && (c += x),
                    this.add(a, "setProperty", u, c, i, o, 0, 0, p),
                    s.push(p),
                    T.push(p, 0, a[p]);
                else if (h !== "undefined") {
                    if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(r, i, e, o) : l[p],
                    ht(u) && ~u.indexOf("random(") && (u = Ol(u)),
                    Dt(u + "") || (u += Tn.units[p] || Dt(Lr(e, p)) || ""),
                    (u + "").charAt(1) === "=" && (u = Lr(e, p))) : u = Lr(e, p),
                    d = parseFloat(u),
                    g = h === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    g && (c = c.substr(2)),
                    f = parseFloat(c),
                    p in _r && (p === "autoAlpha" && (d === 1 && Lr(e, "visibility") === "hidden" && f && (d = 0),
                    T.push("visibility", 0, a.visibility),
                    vi(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    p !== "scale" && p !== "transform" && (p = _r[p],
                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                    v = p in Jr,
                    v) {
                        if (this.styles.save(p),
                        _ || (w = e._gsap,
                        w.renderTransform && !n.parseTransform || Fl(e, n.parseTransform),
                        C = n.smoothOrigin !== !1 && w.smooth,
                        _ = this._pt = new ln(this._pt,a,be,0,1,w.renderTransform,w,0,-1),
                        _.dep = 1),
                        p === "scale")
                            this._pt = new ln(this._pt,w,"scaleY",w.scaleY,(g ? Vs(w.scaleY, g + f) : f) - w.scaleY || 0,up),
                            this._pt.u = 0,
                            s.push("scaleY", p),
                            p += "X";
                        else if (p === "transformOrigin") {
                            T.push(ar, 0, a[ar]),
                            c = D3(c),
                            w.svg ? dp(e, c, 0, C, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0,
                            y !== w.zOrigin && vi(this, w, "zOrigin", w.zOrigin, y),
                            vi(this, a, p, Zc(u), Zc(c)));
                            continue
                        } else if (p === "svgOrigin") {
                            dp(e, c, 1, C, 0, this);
                            continue
                        } else if (p in Ew) {
                            j3(this, w, p, d, g ? Vs(d, g + c) : c);
                            continue
                        } else if (p === "smoothOrigin") {
                            vi(this, w, "smooth", w.smooth, c);
                            continue
                        } else if (p === "force3D") {
                            w[p] = c;
                            continue
                        } else if (p === "transform") {
                            V3(this, c, e);
                            continue
                        }
                    } else
                        p in a || (p = ea(p) || p);
                    if (v || (f || f === 0) && (d || d === 0) && !v3.test(c) && p in a)
                        x = (u + "").substr((d + "").length),
                        f || (f = 0),
                        y = Dt(c) || (p in Tn.units ? Tn.units[p] : x),
                        x !== y && (d = Ii(e, p, u, y)),
                        this._pt = new ln(this._pt,v ? w : a,p,d,(g ? Vs(d, g + f) : f) - d,!v && (y === "px" || p === "zIndex") && n.autoRound !== !1 ? w3 : up),
                        this._pt.u = y || 0,
                        x !== y && y !== "%" && (this._pt.b = u,
                        this._pt.r = _3);
                    else if (p in a)
                        N3.call(this, e, p, u, g ? g + c : c);
                    else if (p in e)
                        this.add(e, p, u || e[p], g ? g + c : c, i, o);
                    else if (p !== "parseTransform") {
                        Wm(p, c);
                        continue
                    }
                    v || (p in a ? T.push(p, 0, a[p]) : T.push(p, 1, u || e[p])),
                    s.push(p)
                }
            }
        S && vw(this)
    },
    render: function(e, n) {
        if (n.tween._time || !e0())
            for (var r = n._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            n.styles.revert()
    },
    get: Lr,
    aliases: _r,
    getSetter: function(e, n, r) {
        var i = _r[n];
        return i && i.indexOf(",") < 0 && (n = i),
        n in Jr && n !== ar && (e._gsap.x || Lr(e, "x")) ? r && hy === r ? n === "scale" ? T3 : k3 : (hy = r || {}) && (n === "scale" ? P3 : E3) : e.style && !Bm(e.style[n]) ? S3 : ~n.indexOf("-") ? C3 : qm(e, n)
    },
    core: {
        _removeProperty: jl,
        _getMatrix: n0
    }
};
un.utils.checkPrefix = ea;
un.core.getStyleSaver = Cw;
(function(t, e, n, r) {
    var i = an(t + "," + e + "," + n, function(o) {
        Jr[o] = 1
    });
    an(e, function(o) {
        Tn.units[o] = "deg",
        Ew[o] = 1
    }),
    _r[i[13]] = t + "," + e,
    an(r, function(o) {
        var s = o.split(":");
        _r[s[1]] = i[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
an("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    Tn.units[t] = "px"
});
un.registerPlugin(Rw);
var q = un.registerPlugin(Rw) || un;
q.core.Tween;
( () => {
    function t(...r) {
        const i = r.length;
        for (let o = 0; o < i; o++) {
            const s = r[o];
            s.nodeType === 1 || s.nodeType === 11 ? this.appendChild(s) : this.appendChild(document.createTextNode(String(s)))
        }
    }
    function e(...r) {
        for (; this.lastChild; )
            this.removeChild(this.lastChild);
        r.length && this.append(...r)
    }
    function n(...r) {
        const i = this.parentNode;
        let o = r.length;
        if (i)
            for (o || i.removeChild(this); o--; ) {
                let s = r[o];
                typeof s != "object" ? s = this.ownerDocument.createTextNode(s) : s.parentNode && s.parentNode.removeChild(s),
                o ? i.insertBefore(this.previousSibling, s) : i.replaceChild(s, this)
            }
    }
    typeof Element < "u" && (Element.prototype.append || (Element.prototype.append = t,
    DocumentFragment.prototype.append = t),
    Element.prototype.replaceChildren || (Element.prototype.replaceChildren = e,
    DocumentFragment.prototype.replaceChildren = e),
    Element.prototype.replaceWith || (Element.prototype.replaceWith = n,
    DocumentFragment.prototype.replaceWith = n))
}
)();
function wo(t, e) {
    return Object.getOwnPropertyNames(Object(t)).reduce( (n, r) => {
        const i = Object.getOwnPropertyDescriptor(Object(t), r)
          , o = Object.getOwnPropertyDescriptor(Object(e), r);
        return Object.defineProperty(n, r, o || i)
    }
    , {})
}
function Zl(t) {
    return typeof t == "string"
}
function r0(t) {
    return Array.isArray(t)
}
function Pu(t={}) {
    const e = wo(t);
    let n;
    return e.types !== void 0 ? n = e.types : e.split !== void 0 && (n = e.split),
    n !== void 0 && (e.types = (Zl(n) || r0(n) ? String(n) : "").split(",").map(r => String(r).trim()).filter(r => /((line)|(word)|(char))/i.test(r))),
    (e.absolute || e.position) && (e.absolute = e.absolute || /absolute/.test(t.position)),
    e
}
function i0(t) {
    const e = Zl(t) || r0(t) ? String(t) : "";
    return {
        none: !e,
        lines: /line/i.test(e),
        words: /word/i.test(e),
        chars: /char/i.test(e)
    }
}
function Ff(t) {
    return t !== null && typeof t == "object"
}
function F3(t) {
    return Ff(t) && /^(1|3|11)$/.test(t.nodeType)
}
function I3(t) {
    return typeof t == "number" && t > -1 && t % 1 === 0
}
function z3(t) {
    return Ff(t) && I3(t.length)
}
function zo(t) {
    return r0(t) ? t : t == null ? [] : z3(t) ? Array.prototype.slice.call(t) : [t]
}
function wy(t) {
    let e = t;
    return Zl(t) && (/^(#[a-z]\w+)$/.test(t.trim()) ? e = document.getElementById(t.trim().slice(1)) : e = document.querySelectorAll(t)),
    zo(e).reduce( (n, r) => [...n, ...zo(r).filter(F3)], [])
}
const {entries: B3, keys: sN, values: aN} = Object
  , Jc = "_splittype"
  , Ur = {};
let $3 = 0;
function wr(t, e, n) {
    if (!Ff(t))
        return console.warn("[data.set] owner is not an object"),
        null;
    const r = t[Jc] || (t[Jc] = ++$3)
      , i = Ur[r] || (Ur[r] = {});
    return n === void 0 ? e && Object.getPrototypeOf(e) === Object.prototype && (Ur[r] = {
        ...i,
        ...e
    }) : e !== void 0 && (i[e] = n),
    n
}
function So(t, e) {
    const n = Ff(t) ? t[Jc] : null
      , r = n && Ur[n] || {};
    return e === void 0 ? r : r[e]
}
function Nw(t) {
    const e = t && t[Jc];
    e && (delete t[e],
    delete Ur[e])
}
function U3() {
    B3(Ur).forEach( ([t,{isRoot: e, isSplit: n}]) => {
        (!e || !n) && (Ur[t] = null,
        delete Ur[t])
    }
    )
}
function W3(t, e=" ") {
    return (t ? String(t) : "").trim().replace(/\s+/g, " ").split(e)
}
const o0 = "\\ud800-\\udfff"
  , Dw = "\\u0300-\\u036f\\ufe20-\\ufe23"
  , Ow = "\\u20d0-\\u20f0"
  , Lw = "\\ufe0e\\ufe0f"
  , H3 = `[${o0}]`
  , hp = `[${Dw}${Ow}]`
  , pp = "\\ud83c[\\udffb-\\udfff]"
  , Y3 = `(?:${hp}|${pp})`
  , bw = `[^${o0}]`
  , jw = "(?:\\ud83c[\\udde6-\\uddff]){2}"
  , Vw = "[\\ud800-\\udbff][\\udc00-\\udfff]"
  , Fw = "\\u200d"
  , Iw = `${Y3}?`
  , zw = `[${Lw}]?`
  , G3 = "(?:" + Fw + "(?:" + [bw, jw, Vw].join("|") + ")" + zw + Iw + ")*"
  , X3 = zw + Iw + G3
  , K3 = `(?:${[`${bw}${hp}?`, hp, jw, Vw, H3].join("|")}
)`
  , Q3 = RegExp(`${pp}(?=${pp})|${K3}${X3}`, "g")
  , q3 = [Fw, o0, Dw, Ow, Lw]
  , Z3 = RegExp(`[${q3.join("")}]`);
function J3(t) {
    return t.split("")
}
function Bw(t) {
    return Z3.test(t)
}
function eE(t) {
    return t.match(Q3) || []
}
function tE(t) {
    return Bw(t) ? eE(t) : J3(t)
}
function nE(t) {
    return t == null ? "" : String(t)
}
function rE(t, e="") {
    return t = nE(t),
    t && Zl(t) && !e && Bw(t) ? tE(t) : t.split(e)
}
function mp(t, e) {
    const n = document.createElement(t);
    return e && Object.keys(e).forEach(r => {
        const i = e[r]
          , o = Zl(i) ? i.trim() : i;
        o === null || o === "" || (r === "children" ? n.append(...zo(o)) : n.setAttribute(r, o))
    }
    ),
    n
}
var s0 = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div"
};
function iE(t, e) {
    e = wo(s0, e);
    const n = i0(e.types)
      , r = e.tagName
      , i = t.nodeValue
      , o = document.createDocumentFragment();
    let s = []
      , a = [];
    return /^\s/.test(i) && o.append(" "),
    s = W3(i).reduce( (l, u, c, f) => {
        let d, h;
        return n.chars && (h = rE(u).map(m => {
            const p = mp(r, {
                class: `${e.splitClass} ${e.charClass}`,
                style: "display: inline-block;",
                children: m
            });
            return wr(p, "isChar", !0),
            a = [...a, p],
            p
        }
        )),
        n.words || n.lines ? (d = mp(r, {
            class: `${e.wordClass} ${e.splitClass}`,
            style: `display: inline-block; ${n.words && e.absolute ? "position: relative;" : ""}`,
            children: n.chars ? h : u
        }),
        wr(d, {
            isWord: !0,
            isWordStart: !0,
            isWordEnd: !0
        }),
        o.appendChild(d)) : h.forEach(m => {
            o.appendChild(m)
        }
        ),
        c < f.length - 1 && o.append(" "),
        n.words ? l.concat(d) : l
    }
    , []),
    /\s$/.test(i) && o.append(" "),
    t.replaceWith(o),
    {
        words: s,
        chars: a
    }
}
function $w(t, e) {
    const n = t.nodeType
      , r = {
        words: [],
        chars: []
    };
    if (!/(1|3|11)/.test(n))
        return r;
    if (n === 3 && /\S/.test(t.nodeValue))
        return iE(t, e);
    const i = zo(t.childNodes);
    if (i.length && (wr(t, "isSplit", !0),
    !So(t).isRoot)) {
        t.style.display = "inline-block",
        t.style.position = "relative";
        const o = t.nextSibling
          , s = t.previousSibling
          , a = t.textContent || ""
          , l = o ? o.textContent : " "
          , u = s ? s.textContent : " ";
        wr(t, {
            isWordEnd: /\s$/.test(a) || /^\s/.test(l),
            isWordStart: /^\s/.test(a) || /\s$/.test(u)
        })
    }
    return i.reduce( (o, s) => {
        const {words: a, chars: l} = $w(s, e);
        return {
            words: [...o.words, ...a],
            chars: [...o.chars, ...l]
        }
    }
    , r)
}
function oE(t, e, n, r) {
    if (!n.absolute)
        return {
            top: e ? t.offsetTop : null
        };
    const i = t.offsetParent
      , [o,s] = r;
    let a = 0
      , l = 0;
    if (i && i !== document.body) {
        const p = i.getBoundingClientRect();
        a = p.x + o,
        l = p.y + s
    }
    const {width: u, height: c, x: f, y: d} = t.getBoundingClientRect()
      , h = d + s - l
      , m = f + o - a;
    return {
        width: u,
        height: c,
        top: h,
        left: m
    }
}
function Uw(t) {
    So(t).isWord ? (Nw(t),
    t.replaceWith(...t.childNodes)) : zo(t.children).forEach(e => Uw(e))
}
const sE = () => document.createDocumentFragment();
function aE(t, e, n) {
    const r = i0(e.types)
      , i = e.tagName
      , o = t.getElementsByTagName("*")
      , s = [];
    let a = [], l = null, u, c, f, d = [];
    const h = t.parentElement
      , m = t.nextElementSibling
      , p = sE()
      , x = window.getComputedStyle(t)
      , y = x.textAlign
      , v = parseFloat(x.fontSize) * .2;
    return e.absolute && (f = {
        left: t.offsetLeft,
        top: t.offsetTop,
        width: t.offsetWidth
    },
    c = t.offsetWidth,
    u = t.offsetHeight,
    wr(t, {
        cssWidth: t.style.width,
        cssHeight: t.style.height
    })),
    zo(o).forEach(_ => {
        const w = _.parentElement === t
          , {width: C, height: S, top: T, left: M} = oE(_, w, e, n);
        /^br$/i.test(_.nodeName) || (r.lines && w && ((l === null || T - l >= v) && (l = T,
        s.push(a = [])),
        a.push(_)),
        e.absolute && wr(_, {
            top: T,
            left: M,
            width: C,
            height: S
        }))
    }
    ),
    h && h.removeChild(t),
    r.lines && (d = s.map(_ => {
        const w = mp(i, {
            class: `${e.splitClass} ${e.lineClass}`,
            style: `display: block; text-align: ${y}; width: 100%;`
        });
        wr(w, "isLine", !0);
        const C = {
            height: 0,
            top: 1e4
        };
        return p.appendChild(w),
        _.forEach( (S, T, M) => {
            const {isWordEnd: A, top: b, height: D} = So(S)
              , U = M[T + 1];
            C.height = Math.max(C.height, D),
            C.top = Math.min(C.top, b),
            w.appendChild(S),
            A && So(U).isWordStart && w.append(" ")
        }
        ),
        e.absolute && wr(w, {
            height: C.height,
            top: C.top
        }),
        w
    }
    ),
    r.words || Uw(p),
    t.replaceChildren(p)),
    e.absolute && (t.style.width = `${t.style.width || c}px`,
    t.style.height = `${u}px`,
    zo(o).forEach(_ => {
        const {isLine: w, top: C, left: S, width: T, height: M} = So(_)
          , A = So(_.parentElement)
          , b = !w && A.isLine;
        _.style.top = `${b ? C - A.top : C}px`,
        _.style.left = w ? `${f.left}px` : `${S - (b ? f.left : 0)}px`,
        _.style.height = `${M}px`,
        _.style.width = w ? `${f.width}px` : `${T}px`,
        _.style.position = "absolute"
    }
    )),
    h && (m ? h.insertBefore(t, m) : h.appendChild(t)),
    d
}
let ns = wo(s0, {});
class zi {
    static get data() {
        return Ur
    }
    static get defaults() {
        return ns
    }
    static set defaults(e) {
        ns = wo(ns, Pu(e))
    }
    static setDefaults(e) {
        return ns = wo(ns, Pu(e)),
        s0
    }
    static revert(e) {
        wy(e).forEach(n => {
            const {isSplit: r, html: i, cssWidth: o, cssHeight: s} = So(n);
            r && (n.innerHTML = i,
            n.style.width = o || "",
            n.style.height = s || "",
            Nw(n))
        }
        )
    }
    static create(e, n) {
        return new zi(e,n)
    }
    constructor(e, n) {
        this.isSplit = !1,
        this.settings = wo(ns, Pu(n)),
        this.elements = wy(e),
        this.split()
    }
    split(e) {
        this.revert(),
        this.elements.forEach(i => {
            wr(i, "html", i.innerHTML)
        }
        ),
        this.lines = [],
        this.words = [],
        this.chars = [];
        const n = [window.pageXOffset, window.pageYOffset];
        e !== void 0 && (this.settings = wo(this.settings, Pu(e)));
        const r = i0(this.settings.types);
        r.none || (this.elements.forEach(i => {
            wr(i, "isRoot", !0);
            const {words: o, chars: s} = $w(i, this.settings);
            this.words = [...this.words, ...o],
            this.chars = [...this.chars, ...s]
        }
        ),
        this.elements.forEach(i => {
            if (r.lines || this.settings.absolute) {
                const o = aE(i, this.settings, n);
                this.lines = [...this.lines, ...o]
            }
        }
        ),
        this.isSplit = !0,
        window.scrollTo(n[0], n[1]),
        U3())
    }
    revert() {
        this.isSplit && (this.lines = null,
        this.words = null,
        this.chars = null,
        this.isSplit = !1),
        zi.revert(this.elements)
    }
}
function Sy(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r)
    }
}
function lE(t, e, n) {
    return e && Sy(t.prototype, e),
    n && Sy(t, n),
    t
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _t, gp, Sn, xi, _i, zs, Ww, co, el, Hw, Ir, er, Yw, Gw = function() {
    return _t || typeof window < "u" && (_t = window.gsap) && _t.registerPlugin && _t
}, Xw = 1, ks = [], ne = [], Tr = [], tl = Date.now, yp = function(e, n) {
    return n
}, uE = function() {
    var e = el.core
      , n = e.bridge || {}
      , r = e._scrollers
      , i = e._proxies;
    r.push.apply(r, ne),
    i.push.apply(i, Tr),
    ne = r,
    Tr = i,
    yp = function(s, a) {
        return n[s](a)
    }
}, Di = function(e, n) {
    return ~Tr.indexOf(e) && Tr[Tr.indexOf(e) + 1][n]
}, nl = function(e) {
    return !!~Hw.indexOf(e)
}, It = function(e, n, r, i, o) {
    return e.addEventListener(n, r, {
        passive: !i,
        capture: !!o
    })
}, Ft = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, Eu = "scrollLeft", Mu = "scrollTop", vp = function() {
    return Ir && Ir.isPressed || ne.cache++
}, ef = function(e, n) {
    var r = function i(o) {
        if (o || o === 0) {
            Xw && (Sn.history.scrollRestoration = "manual");
            var s = Ir && Ir.isPressed;
            o = i.v = Math.round(o) || (Ir && Ir.iOS ? 1 : 0),
            e(o),
            i.cacheID = ne.cache,
            s && yp("ss", o)
        } else
            (n || ne.cache !== i.cacheID || yp("ref")) && (i.cacheID = ne.cache,
            i.v = e());
        return i.v + i.offset
    };
    return r.offset = 0,
    e && r
}, Ht = {
    s: Eu,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: ef(function(t) {
        return arguments.length ? Sn.scrollTo(t, it.sc()) : Sn.pageXOffset || xi[Eu] || _i[Eu] || zs[Eu] || 0
    })
}, it = {
    s: Mu,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ht,
    sc: ef(function(t) {
        return arguments.length ? Sn.scrollTo(Ht.sc(), t) : Sn.pageYOffset || xi[Mu] || _i[Mu] || zs[Mu] || 0
    })
}, qt = function(e, n) {
    return (n && n._ctx && n._ctx.selector || _t.utils.toArray)(e)[0] || (typeof e == "string" && _t.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, Bi = function(e, n) {
    var r = n.s
      , i = n.sc;
    nl(e) && (e = xi.scrollingElement || _i);
    var o = ne.indexOf(e)
      , s = i === it.sc ? 1 : 2;
    !~o && (o = ne.push(e) - 1),
    ne[o + s] || It(e, "scroll", vp);
    var a = ne[o + s]
      , l = a || (ne[o + s] = ef(Di(e, r), !0) || (nl(e) ? i : ef(function(u) {
        return arguments.length ? e[r] = u : e[r]
    })));
    return l.target = e,
    a || (l.smooth = _t.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, xp = function(e, n, r) {
    var i = e
      , o = e
      , s = tl()
      , a = s
      , l = n || 50
      , u = Math.max(500, l * 3)
      , c = function(m, p) {
        var x = tl();
        p || x - s > l ? (o = i,
        i = m,
        a = s,
        s = x) : r ? i += m : i = o + (m - o) / (x - a) * (s - a)
    }
      , f = function() {
        o = i = r ? 0 : i,
        a = s = 0
    }
      , d = function(m) {
        var p = a
          , x = o
          , y = tl();
        return (m || m === 0) && m !== i && c(m),
        s === a || y - a > u ? 0 : (i + (r ? x : -x)) / ((r ? y : s) - p) * 1e3
    };
    return {
        update: c,
        reset: f,
        getVelocity: d
    }
}, Ca = function(e, n) {
    return n && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Cy = function(e) {
    var n = Math.max.apply(Math, e)
      , r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r
}, Kw = function() {
    el = _t.core.globals().ScrollTrigger,
    el && el.core && uE()
}, Qw = function(e) {
    return _t = e || Gw(),
    _t && typeof document < "u" && document.body && (Sn = window,
    xi = document,
    _i = xi.documentElement,
    zs = xi.body,
    Hw = [Sn, xi, _i, zs],
    _t.utils.clamp,
    Yw = _t.core.context || function() {}
    ,
    co = "onpointerenter"in zs ? "pointer" : "mouse",
    Ww = et.isTouch = Sn.matchMedia && Sn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Sn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    er = et.eventTypes = ("ontouchstart"in _i ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in _i ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return Xw = 0
    }, 500),
    Kw(),
    gp = 1),
    gp
};
Ht.op = it;
ne.cache = 0;
var et = function() {
    function t(n) {
        this.init(n)
    }
    var e = t.prototype;
    return e.init = function(r) {
        gp || Qw(_t) || console.warn("Please gsap.registerPlugin(Observer)"),
        el || Kw();
        var i = r.tolerance
          , o = r.dragMinimum
          , s = r.type
          , a = r.target
          , l = r.lineHeight
          , u = r.debounce
          , c = r.preventDefault
          , f = r.onStop
          , d = r.onStopDelay
          , h = r.ignore
          , m = r.wheelSpeed
          , p = r.event
          , x = r.onDragStart
          , y = r.onDragEnd
          , g = r.onDrag
          , v = r.onPress
          , _ = r.onRelease
          , w = r.onRight
          , C = r.onLeft
          , S = r.onUp
          , T = r.onDown
          , M = r.onChangeX
          , A = r.onChangeY
          , b = r.onChange
          , D = r.onToggleX
          , U = r.onToggleY
          , j = r.onHover
          , F = r.onHoverEnd
          , H = r.onMove
          , I = r.ignoreCheck
          , R = r.isNormalizer
          , V = r.onGestureStart
          , k = r.onGestureEnd
          , O = r.onWheel
          , W = r.onEnable
          , ge = r.onDisable
          , Z = r.onClick
          , oe = r.scrollSpeed
          , se = r.capture
          , he = r.allowClicks
          , tt = r.lockAxis
          , Ee = r.onLockAxis;
        this.target = a = qt(a) || _i,
        this.vars = r,
        h && (h = _t.utils.toArray(h)),
        i = i || 1e-9,
        o = o || 0,
        m = m || 1,
        oe = oe || 1,
        s = s || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(Sn.getComputedStyle(zs).lineHeight) || 22);
        var Ct, pe, jt, ee, Ie, kt, Tt, N = this, ve = 0, K = 0, st = Bi(a, Ht), Me = Bi(a, it), dn = st(), Ki = Me(), ca = ~s.indexOf("touch") && !~s.indexOf("pointer") && er[0] === "pointerdown", pt = nl(a), He = a.ownerDocument || xi, Gn = [0, 0, 0], Xn = [0, 0, 0], Qi = 0, Mr = function() {
            return Qi = tl()
        }, cr = function(Y, me) {
            return (N.event = Y) && h && ~h.indexOf(Y.target) || me && ca && Y.pointerType !== "touch" || I && I(Y, me)
        }, Qt = function() {
            N._vx.reset(),
            N._vy.reset(),
            pe.pause(),
            f && f(N)
        }, qi = function() {
            var Y = N.deltaX = Cy(Gn)
              , me = N.deltaY = Cy(Xn)
              , ze = Math.abs(Y) >= i
              , B = Math.abs(me) >= i;
            b && (ze || B) && b(N, Y, me, Gn, Xn),
            ze && (w && N.deltaX > 0 && w(N),
            C && N.deltaX < 0 && C(N),
            M && M(N),
            D && N.deltaX < 0 != ve < 0 && D(N),
            ve = N.deltaX,
            Gn[0] = Gn[1] = Gn[2] = 0),
            B && (T && N.deltaY > 0 && T(N),
            S && N.deltaY < 0 && S(N),
            A && A(N),
            U && N.deltaY < 0 != K < 0 && U(N),
            K = N.deltaY,
            Xn[0] = Xn[1] = Xn[2] = 0),
            (ee || jt) && (H && H(N),
            jt && (g(N),
            jt = !1),
            ee = !1),
            kt && !(kt = !1) && Ee && Ee(N),
            Ie && (O(N),
            Ie = !1),
            Ct = 0
        }, Qo = function(Y, me, ze) {
            Gn[ze] += Y,
            Xn[ze] += me,
            N._vx.update(Y),
            N._vy.update(me),
            u ? Ct || (Ct = requestAnimationFrame(qi)) : qi()
        }, qo = function(Y, me) {
            tt && !Tt && (N.axis = Tt = Math.abs(Y) > Math.abs(me) ? "x" : "y",
            kt = !0),
            Tt !== "y" && (Gn[2] += Y,
            N._vx.update(Y, !0)),
            Tt !== "x" && (Xn[2] += me,
            N._vy.update(me, !0)),
            u ? Ct || (Ct = requestAnimationFrame(qi)) : qi()
        }, Zi = function(Y) {
            if (!cr(Y, 1)) {
                Y = Ca(Y, c);
                var me = Y.clientX
                  , ze = Y.clientY
                  , B = me - N.x
                  , ue = ze - N.y
                  , X = N.isDragging;
                N.x = me,
                N.y = ze,
                (X || Math.abs(N.startX - me) >= o || Math.abs(N.startY - ze) >= o) && (g && (jt = !0),
                X || (N.isDragging = !0),
                qo(B, ue),
                X || x && x(N))
            }
        }, ni = N.onPress = function(Q) {
            cr(Q, 1) || Q && Q.button || (N.axis = Tt = null,
            pe.pause(),
            N.isPressed = !0,
            Q = Ca(Q),
            ve = K = 0,
            N.startX = N.x = Q.clientX,
            N.startY = N.y = Q.clientY,
            N._vx.reset(),
            N._vy.reset(),
            It(R ? a : He, er[1], Zi, c, !0),
            N.deltaX = N.deltaY = 0,
            v && v(N))
        }
        , ri = N.onRelease = function(Q) {
            if (!cr(Q, 1)) {
                Ft(R ? a : He, er[1], Zi, !0);
                var Y = !isNaN(N.y - N.startY)
                  , me = N.isDragging && (Math.abs(N.x - N.startX) > 3 || Math.abs(N.y - N.startY) > 3)
                  , ze = Ca(Q);
                !me && Y && (N._vx.reset(),
                N._vy.reset(),
                c && he && _t.delayedCall(.08, function() {
                    if (tl() - Qi > 300 && !Q.defaultPrevented) {
                        if (Q.target.click)
                            Q.target.click();
                        else if (He.createEvent) {
                            var B = He.createEvent("MouseEvents");
                            B.initMouseEvent("click", !0, !0, Sn, 1, ze.screenX, ze.screenY, ze.clientX, ze.clientY, !1, !1, !1, !1, 0, null),
                            Q.target.dispatchEvent(B)
                        }
                    }
                })),
                N.isDragging = N.isGesturing = N.isPressed = !1,
                f && !R && pe.restart(!0),
                y && me && y(N),
                _ && _(N, me)
            }
        }
        , ce = function(Y) {
            return Y.touches && Y.touches.length > 1 && (N.isGesturing = !0) && V(Y, N.isDragging)
        }, Ji = function() {
            return (N.isGesturing = !1) || k(N)
        }, Kn = function(Y) {
            if (!cr(Y)) {
                var me = st()
                  , ze = Me();
                Qo((me - dn) * oe, (ze - Ki) * oe, 1),
                dn = me,
                Ki = ze,
                f && pe.restart(!0)
            }
        }, Qn = function(Y) {
            if (!cr(Y)) {
                Y = Ca(Y, c),
                O && (Ie = !0);
                var me = (Y.deltaMode === 1 ? l : Y.deltaMode === 2 ? Sn.innerHeight : 1) * m;
                Qo(Y.deltaX * me, Y.deltaY * me, 0),
                f && !R && pe.restart(!0)
            }
        }, qn = function(Y) {
            if (!cr(Y)) {
                var me = Y.clientX
                  , ze = Y.clientY
                  , B = me - N.x
                  , ue = ze - N.y;
                N.x = me,
                N.y = ze,
                ee = !0,
                (B || ue) && qo(B, ue)
            }
        }, eo = function(Y) {
            N.event = Y,
            j(N)
        }, Zo = function(Y) {
            N.event = Y,
            F(N)
        }, Ar = function(Y) {
            return cr(Y) || Ca(Y, c) && Z(N)
        };
        pe = N._dc = _t.delayedCall(d || .25, Qt).pause(),
        N.deltaX = N.deltaY = 0,
        N._vx = xp(0, 50, !0),
        N._vy = xp(0, 50, !0),
        N.scrollX = st,
        N.scrollY = Me,
        N.isDragging = N.isGesturing = N.isPressed = !1,
        Yw(this),
        N.enable = function(Q) {
            return N.isEnabled || (It(pt ? He : a, "scroll", vp),
            s.indexOf("scroll") >= 0 && It(pt ? He : a, "scroll", Kn, c, se),
            s.indexOf("wheel") >= 0 && It(a, "wheel", Qn, c, se),
            (s.indexOf("touch") >= 0 && Ww || s.indexOf("pointer") >= 0) && (It(a, er[0], ni, c, se),
            It(He, er[2], ri),
            It(He, er[3], ri),
            he && It(a, "click", Mr, !1, !0),
            Z && It(a, "click", Ar),
            V && It(He, "gesturestart", ce),
            k && It(He, "gestureend", Ji),
            j && It(a, co + "enter", eo),
            F && It(a, co + "leave", Zo),
            H && It(a, co + "move", qn)),
            N.isEnabled = !0,
            Q && Q.type && ni(Q),
            W && W(N)),
            N
        }
        ,
        N.disable = function() {
            N.isEnabled && (ks.filter(function(Q) {
                return Q !== N && nl(Q.target)
            }).length || Ft(pt ? He : a, "scroll", vp),
            N.isPressed && (N._vx.reset(),
            N._vy.reset(),
            Ft(R ? a : He, er[1], Zi, !0)),
            Ft(pt ? He : a, "scroll", Kn, se),
            Ft(a, "wheel", Qn, se),
            Ft(a, er[0], ni, se),
            Ft(He, er[2], ri),
            Ft(He, er[3], ri),
            Ft(a, "click", Mr, !0),
            Ft(a, "click", Ar),
            Ft(He, "gesturestart", ce),
            Ft(He, "gestureend", Ji),
            Ft(a, co + "enter", eo),
            Ft(a, co + "leave", Zo),
            Ft(a, co + "move", qn),
            N.isEnabled = N.isPressed = N.isDragging = !1,
            ge && ge(N))
        }
        ,
        N.kill = N.revert = function() {
            N.disable();
            var Q = ks.indexOf(N);
            Q >= 0 && ks.splice(Q, 1),
            Ir === N && (Ir = 0)
        }
        ,
        ks.push(N),
        R && nl(a) && (Ir = N),
        N.enable(p)
    }
    ,
    lE(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    t
}();
et.version = "3.12.2";
et.create = function(t) {
    return new et(t)
}
;
et.register = Qw;
et.getAll = function() {
    return ks.slice()
}
;
et.getById = function(t) {
    return ks.filter(function(e) {
        return e.vars.id === t
    })[0]
}
;
Gw() && _t.registerPlugin(et);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var $, as, ae, De, ir, Te, qw, tf, nf, Ts, ac, Au, Rt, If, _p, $t, ky, Ty, ls, Zw, Nd, Jw, gn, e2, t2, n2, oi, wp, a0, Bs, l0, Dd, Ru = 1, Wt = Date.now, Od = Wt(), Un = 0, La = 0, Py = function(e, n, r) {
    var i = xn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + n + "Clamp"] = i,
    i ? e.substr(6, e.length - 7) : e
}, Ey = function(e, n) {
    return n && (!xn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, cE = function t() {
    return La && requestAnimationFrame(t)
}, My = function() {
    return If = 1
}, Ay = function() {
    return If = 0
}, yr = function(e) {
    return e
}, ba = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, r2 = function() {
    return typeof window < "u"
}, i2 = function() {
    return $ || r2() && ($ = window.gsap) && $.registerPlugin && $
}, Bo = function(e) {
    return !!~qw.indexOf(e)
}, o2 = function(e) {
    return (e === "Height" ? l0 : ae["inner" + e]) || ir["client" + e] || Te["client" + e]
}, s2 = function(e) {
    return Di(e, "getBoundingClientRect") || (Bo(e) ? function() {
        return hc.width = ae.innerWidth,
        hc.height = l0,
        hc
    }
    : function() {
        return jr(e)
    }
    )
}, fE = function(e, n, r) {
    var i = r.d
      , o = r.d2
      , s = r.a;
    return (s = Di(e, "getBoundingClientRect")) ? function() {
        return s()[i]
    }
    : function() {
        return (n ? o2(o) : e["client" + o]) || 0
    }
}, dE = function(e, n) {
    return !n || ~Tr.indexOf(e) ? s2(e) : function() {
        return hc
    }
}, zr = function(e, n) {
    var r = n.s
      , i = n.d2
      , o = n.d
      , s = n.a;
    return Math.max(0, (r = "scroll" + i) && (s = Di(e, r)) ? s() - s2(e)()[o] : Bo(e) ? (ir[r] || Te[r]) - o2(i) : e[r] - e["offset" + i])
}, Nu = function(e, n) {
    for (var r = 0; r < ls.length; r += 3)
        (!n || ~n.indexOf(ls[r + 1])) && e(ls[r], ls[r + 1], ls[r + 2])
}, xn = function(e) {
    return typeof e == "string"
}, Yt = function(e) {
    return typeof e == "function"
}, lc = function(e) {
    return typeof e == "number"
}, fo = function(e) {
    return typeof e == "object"
}, ka = function(e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause()
}, Ld = function(e, n) {
    if (e.enabled) {
        var r = n(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, rs = Math.abs, a2 = "left", l2 = "top", u0 = "right", c0 = "bottom", No = "width", Do = "height", rl = "Right", il = "Left", ol = "Top", sl = "Bottom", Qe = "padding", jn = "margin", ta = "Width", f0 = "Height", yt = "px", Vn = function(e) {
    return ae.getComputedStyle(e)
}, hE = function(e) {
    var n = Vn(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
}, Ry = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, jr = function(e, n) {
    var r = n && Vn(e)[_p] !== "matrix(1, 0, 0, 1, 0, 0)" && $.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = e.getBoundingClientRect();
    return r && r.progress(0).kill(),
    i
}, Sp = function(e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0
}, u2 = function(e) {
    var n = [], r = e.labels, i = e.duration(), o;
    for (o in r)
        n.push(r[o] / i);
    return n
}, pE = function(e) {
    return function(n) {
        return $.utils.snap(u2(e), n)
    }
}, d0 = function(e) {
    var n = $.utils.snap(e)
      , r = Array.isArray(e) && e.slice(0).sort(function(i, o) {
        return i - o
    });
    return r ? function(i, o, s) {
        s === void 0 && (s = .001);
        var a;
        if (!o)
            return n(i);
        if (o > 0) {
            for (i -= s,
            a = 0; a < r.length; a++)
                if (r[a] >= i)
                    return r[a];
            return r[a - 1]
        } else
            for (a = r.length,
            i += s; a--; )
                if (r[a] <= i)
                    return r[a];
        return r[0]
    }
    : function(i, o, s) {
        s === void 0 && (s = .001);
        var a = n(i);
        return !o || Math.abs(a - i) < s || a - i < 0 == o < 0 ? a : n(o < 0 ? i - e : i + e)
    }
}, mE = function(e) {
    return function(n, r) {
        return d0(u2(e))(n, r.direction)
    }
}, Du = function(e, n, r, i) {
    return r.split(",").forEach(function(o) {
        return e(n, o, i)
    })
}, ut = function(e, n, r, i, o) {
    return e.addEventListener(n, r, {
        passive: !i,
        capture: !!o
    })
}, lt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, Ou = function(e, n, r) {
    r = r && r.wheelHandler,
    r && (e(n, "wheel", r),
    e(n, "touchmove", r))
}, Ny = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Lu = {
    toggleActions: "play",
    anticipatePin: 0
}, rf = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, uc = function(e, n) {
    if (xn(e)) {
        var r = e.indexOf("=")
          , i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= n / 100),
        e = e.substr(0, r - 1)),
        e = i + (e in rf ? rf[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
    }
    return e
}, bu = function(e, n, r, i, o, s, a, l) {
    var u = o.startColor
      , c = o.endColor
      , f = o.fontSize
      , d = o.indent
      , h = o.fontWeight
      , m = De.createElement("div")
      , p = Bo(r) || Di(r, "pinType") === "fixed"
      , x = e.indexOf("scroller") !== -1
      , y = p ? Te : r
      , g = e.indexOf("start") !== -1
      , v = g ? u : c
      , _ = "border-color:" + v + ";font-size:" + f + ";color:" + v + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return _ += "position:" + ((x || l) && p ? "fixed;" : "absolute;"),
    (x || l || !p) && (_ += (i === it ? u0 : c0) + ":" + (s + parseFloat(d)) + "px;"),
    a && (_ += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
    m._isStart = g,
    m.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
    m.style.cssText = _,
    m.innerText = n || n === 0 ? e + "-" + n : e,
    y.children[0] ? y.insertBefore(m, y.children[0]) : y.appendChild(m),
    m._offset = m["offset" + i.op.d2],
    cc(m, 0, i, g),
    m
}, cc = function(e, n, r, i) {
    var o = {
        display: "block"
    }
      , s = r[i ? "os2" : "p2"]
      , a = r[i ? "p2" : "os2"];
    e._isFlipped = i,
    o[r.a + "Percent"] = i ? -100 : 0,
    o[r.a] = i ? "1px" : 0,
    o["border" + s + ta] = 1,
    o["border" + a + ta] = 0,
    o[r.p] = n + "px",
    $.set(e, o)
}, J = [], Cp = {}, Il, Dy = function() {
    return Wt() - Un > 34 && (Il || (Il = requestAnimationFrame(Wr)))
}, is = function() {
    (!gn || !gn.isPressed || gn.startX > Te.clientWidth) && (ne.cache++,
    gn ? Il || (Il = requestAnimationFrame(Wr)) : Wr(),
    Un || Uo("scrollStart"),
    Un = Wt())
}, bd = function() {
    n2 = ae.innerWidth,
    t2 = ae.innerHeight
}, ja = function() {
    ne.cache++,
    !Rt && !Jw && !De.fullscreenElement && !De.webkitFullscreenElement && (!e2 || n2 !== ae.innerWidth || Math.abs(ae.innerHeight - t2) > ae.innerHeight * .25) && tf.restart(!0)
}, $o = {}, gE = [], c2 = function t() {
    return lt(re, "scrollEnd", t) || Co(!0)
}, Uo = function(e) {
    return $o[e] && $o[e].map(function(n) {
        return n()
    }) || gE
}, yn = [], f2 = function(e) {
    for (var n = 0; n < yn.length; n += 5)
        (!e || yn[n + 4] && yn[n + 4].query === e) && (yn[n].style.cssText = yn[n + 1],
        yn[n].getBBox && yn[n].setAttribute("transform", yn[n + 2] || ""),
        yn[n + 3].uncache = 1)
}, h0 = function(e, n) {
    var r;
    for ($t = 0; $t < J.length; $t++)
        r = J[$t],
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    n && f2(n),
    n || Uo("revert")
}, d2 = function(e, n) {
    ne.cache++,
    (n || !Ut) && ne.forEach(function(r) {
        return Yt(r) && r.cacheID++ && (r.rec = 0)
    }),
    xn(e) && (ae.history.scrollRestoration = a0 = e)
}, Ut, Oo = 0, Oy, yE = function() {
    if (Oy !== Oo) {
        var e = Oy = Oo;
        requestAnimationFrame(function() {
            return e === Oo && Co(!0)
        })
    }
}, h2 = function() {
    Te.appendChild(Bs),
    l0 = Bs.offsetHeight || ae.innerHeight,
    Te.removeChild(Bs)
}, Co = function(e, n) {
    if (Un && !e) {
        ut(re, "scrollEnd", c2);
        return
    }
    h2(),
    Ut = re.isRefreshing = !0,
    ne.forEach(function(i) {
        return Yt(i) && ++i.cacheID && (i.rec = i())
    });
    var r = Uo("refreshInit");
    Zw && re.sort(),
    n || h0(),
    ne.forEach(function(i) {
        Yt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    J.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    J.forEach(function(i, o) {
        if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , a = i.pin[s];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[s] - a),
            i.refresh()
        }
    }),
    J.forEach(function(i) {
        var o = zr(i.scroller, i._dir);
        (i.vars.end === "max" || i._endClamp && i.end > o) && i.setPositions(i.start, Math.max(i.start + 1, o), !0)
    }),
    r.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    ne.forEach(function(i) {
        Yt(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    d2(a0, 1),
    tf.pause(),
    Oo++,
    Ut = 2,
    Wr(2),
    J.forEach(function(i) {
        return Yt(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    Ut = re.isRefreshing = !1,
    Uo("refresh")
}, kp = 0, fc = 1, al, Wr = function(e) {
    if (!Ut || e === 2) {
        re.isUpdating = !0,
        al && al.update(0);
        var n = J.length
          , r = Wt()
          , i = r - Od >= 50
          , o = n && J[0].scroll();
        if (fc = kp > o ? -1 : 1,
        Ut || (kp = o),
        i && (Un && !If && r - Un > 200 && (Un = 0,
        Uo("scrollEnd")),
        ac = Od,
        Od = r),
        fc < 0) {
            for ($t = n; $t-- > 0; )
                J[$t] && J[$t].update(0, i);
            fc = 1
        } else
            for ($t = 0; $t < n; $t++)
                J[$t] && J[$t].update(0, i);
        re.isUpdating = !1
    }
    Il = 0
}, Tp = [a2, l2, c0, u0, jn + sl, jn + rl, jn + ol, jn + il, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], dc = Tp.concat([No, Do, "boxSizing", "max" + ta, "max" + f0, "position", jn, Qe, Qe + ol, Qe + rl, Qe + sl, Qe + il]), vE = function(e, n, r) {
    $s(r);
    var i = e._gsap;
    if (i.spacerIsNative)
        $s(i.spacerState);
    else if (e._gsap.swappedIn) {
        var o = n.parentNode;
        o && (o.insertBefore(e, n),
        o.removeChild(n))
    }
    e._gsap.swappedIn = !1
}, jd = function(e, n, r, i) {
    if (!e._gsap.swappedIn) {
        for (var o = Tp.length, s = n.style, a = e.style, l; o--; )
            l = Tp[o],
            s[l] = r[l];
        s.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (s.display = "inline-block"),
        a[c0] = a[u0] = "auto",
        s.flexBasis = r.flexBasis || "auto",
        s.overflow = "visible",
        s.boxSizing = "border-box",
        s[No] = Sp(e, Ht) + yt,
        s[Do] = Sp(e, it) + yt,
        s[Qe] = a[jn] = a[l2] = a[a2] = "0",
        $s(i),
        a[No] = a["max" + ta] = r[No],
        a[Do] = a["max" + f0] = r[Do],
        a[Qe] = r[Qe],
        e.parentNode !== n && (e.parentNode.insertBefore(n, e),
        n.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, xE = /([A-Z])/g, $s = function(e) {
    if (e) {
        var n = e.t.style, r = e.length, i = 0, o, s;
        for ((e.t._gsap || $.core.getCache(e.t)).uncache = 1; i < r; i += 2)
            s = e[i + 1],
            o = e[i],
            s ? n[o] = s : n[o] && n.removeProperty(o.replace(xE, "-$1").toLowerCase())
    }
}, ju = function(e) {
    for (var n = dc.length, r = e.style, i = [], o = 0; o < n; o++)
        i.push(dc[o], r[dc[o]]);
    return i.t = e,
    i
}, _E = function(e, n, r) {
    for (var i = [], o = e.length, s = r ? 8 : 0, a; s < o; s += 2)
        a = e[s],
        i.push(a, a in n ? n[a] : e[s + 1]);
    return i.t = e.t,
    i
}, hc = {
    left: 0,
    top: 0
}, Ly = function(e, n, r, i, o, s, a, l, u, c, f, d, h, m) {
    Yt(e) && (e = e(l)),
    xn(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? uc("0" + e.substr(3), r) : 0));
    var p = h ? h.time() : 0, x, y, g;
    if (h && h.seek(0),
    isNaN(e) || (e = +e),
    lc(e))
        h && (e = $.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, d, e)),
        a && cc(a, r, i, !0);
    else {
        Yt(n) && (n = n(l));
        var v = (e || "0").split(" "), _, w, C, S;
        g = qt(n, l) || Te,
        _ = jr(g) || {},
        (!_ || !_.left && !_.top) && Vn(g).display === "none" && (S = g.style.display,
        g.style.display = "block",
        _ = jr(g),
        S ? g.style.display = S : g.style.removeProperty("display")),
        w = uc(v[0], _[i.d]),
        C = uc(v[1] || "0", r),
        e = _[i.p] - u[i.p] - c + w + o - C,
        a && cc(a, C, i, r - C < 20 || a._isStart && C > 20),
        r -= r - C
    }
    if (m && (l[m] = e || -.001,
    e < 0 && (e = 0)),
    s) {
        var T = e + r
          , M = s._isStart;
        x = "scroll" + i.d2,
        cc(s, T, i, M && T > 20 || !M && (f ? Math.max(Te[x], ir[x]) : s.parentNode[x]) <= T + 1),
        f && (u = jr(a),
        f && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + yt))
    }
    return h && g && (x = jr(g),
    h.seek(d),
    y = jr(g),
    h._caScrollDist = x[i.p] - y[i.p],
    e = e / h._caScrollDist * d),
    h && h.seek(p),
    h ? e : Math.round(e)
}, wE = /(webkit|moz|length|cssText|inset)/i, by = function(e, n, r, i) {
    if (e.parentNode !== n) {
        var o = e.style, s, a;
        if (n === Te) {
            e._stOrig = o.cssText,
            a = Vn(e);
            for (s in a)
                !+s && !wE.test(s) && a[s] && typeof o[s] == "string" && s !== "0" && (o[s] = a[s]);
            o.top = r,
            o.left = i
        } else
            o.cssText = e._stOrig;
        $.core.getCache(e).uncache = 1,
        n.appendChild(e)
    }
}, p2 = function(e, n, r) {
    var i = n
      , o = i;
    return function(s) {
        var a = Math.round(e());
        return a !== i && a !== o && Math.abs(a - i) > 3 && Math.abs(a - o) > 3 && (s = a,
        r && r()),
        o = i,
        i = s,
        s
    }
}, Vu = function(e, n, r) {
    var i = {};
    i[n.p] = "+=" + r,
    $.set(e, i)
}, jy = function(e, n) {
    var r = Bi(e, n)
      , i = "_scroll" + n.p2
      , o = function s(a, l, u, c, f) {
        var d = s.tween
          , h = l.onComplete
          , m = {};
        u = u || r();
        var p = p2(r, u, function() {
            d.kill(),
            s.tween = 0
        });
        return f = c && f || 0,
        c = c || a - u,
        d && d.kill(),
        l[i] = a,
        l.modifiers = m,
        m[i] = function() {
            return p(u + c * d.ratio + f * d.ratio * d.ratio)
        }
        ,
        l.onUpdate = function() {
            ne.cache++,
            Wr()
        }
        ,
        l.onComplete = function() {
            s.tween = 0,
            h && h.call(d)
        }
        ,
        d = s.tween = $.to(e, l),
        d
    };
    return e[i] = r,
    r.wheelHandler = function() {
        return o.tween && o.tween.kill() && (o.tween = 0)
    }
    ,
    ut(e, "wheel", r.wheelHandler),
    re.isTouch && ut(e, "touchmove", r.wheelHandler),
    o
}, re = function() {
    function t(n, r) {
        as || t.register($) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        wp(this),
        this.init(n, r)
    }
    var e = t.prototype;
    return e.init = function(r, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !La) {
            this.update = this.refresh = this.kill = yr;
            return
        }
        r = Ry(xn(r) || lc(r) || r.nodeType ? {
            trigger: r
        } : r, Lu);
        var o = r, s = o.onUpdate, a = o.toggleClass, l = o.id, u = o.onToggle, c = o.onRefresh, f = o.scrub, d = o.trigger, h = o.pin, m = o.pinSpacing, p = o.invalidateOnRefresh, x = o.anticipatePin, y = o.onScrubComplete, g = o.onSnapComplete, v = o.once, _ = o.snap, w = o.pinReparent, C = o.pinSpacer, S = o.containerAnimation, T = o.fastScrollEnd, M = o.preventOverlaps, A = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Ht : it, b = !f && f !== 0, D = qt(r.scroller || ae), U = $.core.getCache(D), j = Bo(D), F = ("pinType"in r ? r.pinType : Di(D, "pinType") || j && "fixed") === "fixed", H = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], I = b && r.toggleActions.split(" "), R = "markers"in r ? r.markers : Lu.markers, V = j ? 0 : parseFloat(Vn(D)["border" + A.p2 + ta]) || 0, k = this, O = r.onRefreshInit && function() {
            return r.onRefreshInit(k)
        }
        , W = fE(D, j, A), ge = dE(D, j), Z = 0, oe = 0, se = 0, he = Bi(D, A), tt, Ee, Ct, pe, jt, ee, Ie, kt, Tt, N, ve, K, st, Me, dn, Ki, ca, pt, He, Gn, Xn, Qi, Mr, cr, Qt, qi, Qo, qo, Zi, ni, ri, ce, Ji, Kn, Qn, qn, eo, Zo, Ar;
        if (k._startClamp = k._endClamp = !1,
        k._dir = A,
        x *= 45,
        k.scroller = D,
        k.scroll = S ? S.time.bind(S) : he,
        pe = he(),
        k.vars = r,
        i = i || r.animation,
        "refreshPriority"in r && (Zw = 1,
        r.refreshPriority === -9999 && (al = k)),
        U.tweenScroll = U.tweenScroll || {
            top: jy(D, it),
            left: jy(D, Ht)
        },
        k.tweenTo = tt = U.tweenScroll[A.p],
        k.scrubDuration = function(B) {
            Ji = lc(B) && B,
            Ji ? ce ? ce.duration(B) : ce = $.to(i, {
                ease: "expo",
                totalProgress: "+=0",
                duration: Ji,
                paused: !0,
                onComplete: function() {
                    return y && y(k)
                }
            }) : (ce && ce.progress(1).kill(),
            ce = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted && !k.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        k.animation = i.pause(),
        i.scrollTrigger = k,
        k.scrubDuration(f),
        ni = 0,
        l || (l = i.vars.id)),
        _ && ((!fo(_) || _.push) && (_ = {
            snapTo: _
        }),
        "scrollBehavior"in Te.style && $.set(j ? [Te, ir] : D, {
            scrollBehavior: "auto"
        }),
        ne.forEach(function(B) {
            return Yt(B) && B.target === (j ? De.scrollingElement || ir : D) && (B.smooth = !1)
        }),
        Ct = Yt(_.snapTo) ? _.snapTo : _.snapTo === "labels" ? pE(i) : _.snapTo === "labelsDirectional" ? mE(i) : _.directional !== !1 ? function(B, ue) {
            return d0(_.snapTo)(B, Wt() - oe < 500 ? 0 : ue.direction)
        }
        : $.utils.snap(_.snapTo),
        Kn = _.duration || {
            min: .1,
            max: 2
        },
        Kn = fo(Kn) ? Ts(Kn.min, Kn.max) : Ts(Kn, Kn),
        Qn = $.delayedCall(_.delay || Ji / 2 || .1, function() {
            var B = he()
              , ue = Wt() - oe < 500
              , X = tt.tween;
            if ((ue || Math.abs(k.getVelocity()) < 10) && !X && !If && Z !== B) {
                var te = (B - ee) / Me
                  , at = i && !b ? i.totalProgress() : te
                  , fe = ue ? 0 : (at - ri) / (Wt() - ac) * 1e3 || 0
                  , Ye = $.utils.clamp(-te, 1 - te, rs(fe / 2) * fe / .185)
                  , Vt = te + (_.inertia === !1 ? 0 : Ye)
                  , mt = Ts(0, 1, Ct(Vt, k))
                  , Re = Math.round(ee + mt * Me)
                  , xe = _
                  , Zn = xe.onStart
                  , Ne = xe.onInterrupt
                  , hn = xe.onComplete;
                if (B <= Ie && B >= ee && Re !== B) {
                    if (X && !X._initted && X.data <= rs(Re - B))
                        return;
                    _.inertia === !1 && (Ye = mt - te),
                    tt(Re, {
                        duration: Kn(rs(Math.max(rs(Vt - at), rs(mt - at)) * .185 / fe / .05 || 0)),
                        ease: _.ease || "power3",
                        data: rs(Re - B),
                        onInterrupt: function() {
                            return Qn.restart(!0) && Ne && Ne(k)
                        },
                        onComplete: function() {
                            k.update(),
                            Z = he(),
                            ni = ri = i && !b ? i.totalProgress() : k.progress,
                            g && g(k),
                            hn && hn(k)
                        }
                    }, B, Ye * Me, Re - B - Ye * Me),
                    Zn && Zn(k, tt.tween)
                }
            } else
                k.isActive && Z !== B && Qn.restart(!0)
        }).pause()),
        l && (Cp[l] = k),
        d = k.trigger = qt(d || h !== !0 && h),
        Ar = d && d._gsap && d._gsap.stRevert,
        Ar && (Ar = Ar(k)),
        h = h === !0 ? d : qt(h),
        xn(a) && (a = {
            targets: d,
            className: a
        }),
        h && (m === !1 || m === jn || (m = !m && h.parentNode && h.parentNode.style && Vn(h.parentNode).display === "flex" ? !1 : Qe),
        k.pin = h,
        Ee = $.core.getCache(h),
        Ee.spacer ? dn = Ee.pinState : (C && (C = qt(C),
        C && !C.nodeType && (C = C.current || C.nativeElement),
        Ee.spacerIsNative = !!C,
        C && (Ee.spacerState = ju(C))),
        Ee.spacer = pt = C || De.createElement("div"),
        pt.classList.add("pin-spacer"),
        l && pt.classList.add("pin-spacer-" + l),
        Ee.pinState = dn = ju(h)),
        r.force3D !== !1 && $.set(h, {
            force3D: !0
        }),
        k.spacer = pt = Ee.spacer,
        Zi = Vn(h),
        cr = Zi[m + A.os2],
        Gn = $.getProperty(h),
        Xn = $.quickSetter(h, A.a, yt),
        jd(h, pt, Zi),
        ca = ju(h)),
        R) {
            K = fo(R) ? Ry(R, Ny) : Ny,
            N = bu("scroller-start", l, D, A, K, 0),
            ve = bu("scroller-end", l, D, A, K, 0, N),
            He = N["offset" + A.op.d2];
            var Q = qt(Di(D, "content") || D);
            kt = this.markerStart = bu("start", l, Q, A, K, He, 0, S),
            Tt = this.markerEnd = bu("end", l, Q, A, K, He, 0, S),
            S && (Zo = $.quickSetter([kt, Tt], A.a, yt)),
            !F && !(Tr.length && Di(D, "fixedMarkers") === !0) && (hE(j ? Te : D),
            $.set([N, ve], {
                force3D: !0
            }),
            qi = $.quickSetter(N, A.a, yt),
            qo = $.quickSetter(ve, A.a, yt))
        }
        if (S) {
            var Y = S.vars.onUpdate
              , me = S.vars.onUpdateParams;
            S.eventCallback("onUpdate", function() {
                k.update(0, 0, 1),
                Y && Y.apply(S, me || [])
            })
        }
        if (k.previous = function() {
            return J[J.indexOf(k) - 1]
        }
        ,
        k.next = function() {
            return J[J.indexOf(k) + 1]
        }
        ,
        k.revert = function(B, ue) {
            if (!ue)
                return k.kill(!0);
            var X = B !== !1 || !k.enabled
              , te = Rt;
            X !== k.isReverted && (X && (qn = Math.max(he(), k.scroll.rec || 0),
            se = k.progress,
            eo = i && i.progress()),
            kt && [kt, Tt, N, ve].forEach(function(at) {
                return at.style.display = X ? "none" : "block"
            }),
            X && (Rt = k,
            k.update(X)),
            h && (!w || !k.isActive) && (X ? vE(h, pt, dn) : jd(h, pt, Vn(h), Qt)),
            X || k.update(X),
            Rt = te,
            k.isReverted = X)
        }
        ,
        k.refresh = function(B, ue, X, te) {
            if (!((Rt || !k.enabled) && !ue)) {
                if (h && B && Un) {
                    ut(t, "scrollEnd", c2);
                    return
                }
                !Ut && O && O(k),
                Rt = k,
                tt.tween && !X && (tt.tween.kill(),
                tt.tween = 0),
                ce && ce.pause(),
                p && i && i.revert({
                    kill: !1
                }).invalidate(),
                k.isReverted || k.revert(!0, !0),
                k._subPinOffset = !1;
                var at = W(), fe = ge(), Ye = S ? S.duration() : zr(D, A), Vt = Me <= .01, mt = 0, Re = te || 0, xe = fo(X) ? X.end : r.end, Zn = r.endTrigger || d, Ne = fo(X) ? X.start : r.start || (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"), hn = k.pinnedContainer = r.pinnedContainer && qt(r.pinnedContainer, k), fr = d && Math.max(0, J.indexOf(k)) || 0, pn = fr, gt, Pt, to, iu, Et, nt, dr, Xf, b0, fa, hr, da, ou;
                for (R && fo(X) && (da = $.getProperty(N, A.p),
                ou = $.getProperty(ve, A.p)); pn--; )
                    nt = J[pn],
                    nt.end || nt.refresh(0, 1) || (Rt = k),
                    dr = nt.pin,
                    dr && (dr === d || dr === h || dr === hn) && !nt.isReverted && (fa || (fa = []),
                    fa.unshift(nt),
                    nt.revert(!0, !0)),
                    nt !== J[pn] && (fr--,
                    pn--);
                for (Yt(Ne) && (Ne = Ne(k)),
                Ne = Py(Ne, "start", k),
                ee = Ly(Ne, d, at, A, he(), kt, N, k, fe, V, F, Ye, S, k._startClamp && "_startClamp") || (h ? -.001 : 0),
                Yt(xe) && (xe = xe(k)),
                xn(xe) && !xe.indexOf("+=") && (~xe.indexOf(" ") ? xe = (xn(Ne) ? Ne.split(" ")[0] : "") + xe : (mt = uc(xe.substr(2), at),
                xe = xn(Ne) ? Ne : (S ? $.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, ee) : ee) + mt,
                Zn = d)),
                xe = Py(xe, "end", k),
                Ie = Math.max(ee, Ly(xe || (Zn ? "100% 0" : Ye), Zn, at, A, he() + mt, Tt, ve, k, fe, V, F, Ye, S, k._endClamp && "_endClamp")) || -.001,
                mt = 0,
                pn = fr; pn--; )
                    nt = J[pn],
                    dr = nt.pin,
                    dr && nt.start - nt._pinPush <= ee && !S && nt.end > 0 && (gt = nt.end - (k._startClamp ? Math.max(0, nt.start) : nt.start),
                    (dr === d && nt.start - nt._pinPush < ee || dr === hn) && isNaN(Ne) && (mt += gt * (1 - nt.progress)),
                    dr === h && (Re += gt));
                if (ee += mt,
                Ie += mt,
                k._startClamp && (k._startClamp += mt),
                k._endClamp && !Ut && (k._endClamp = Ie || -.001,
                Ie = Math.min(Ie, zr(D, A))),
                Me = Ie - ee || (ee -= .01) && .001,
                Vt && (se = $.utils.clamp(0, 1, $.utils.normalize(ee, Ie, qn))),
                k._pinPush = Re,
                kt && mt && (gt = {},
                gt[A.a] = "+=" + mt,
                hn && (gt[A.p] = "-=" + he()),
                $.set([kt, Tt], gt)),
                h)
                    gt = Vn(h),
                    iu = A === it,
                    to = he(),
                    Qi = parseFloat(Gn(A.a)) + Re,
                    !Ye && Ie > 1 && (hr = (j ? De.scrollingElement || ir : D).style,
                    hr = {
                        style: hr,
                        value: hr["overflow" + A.a.toUpperCase()]
                    },
                    j && Vn(Te)["overflow" + A.a.toUpperCase()] !== "scroll" && (hr.style["overflow" + A.a.toUpperCase()] = "scroll")),
                    jd(h, pt, gt),
                    ca = ju(h),
                    Pt = jr(h, !0),
                    Xf = F && Bi(D, iu ? Ht : it)(),
                    m && (Qt = [m + A.os2, Me + Re + yt],
                    Qt.t = pt,
                    pn = m === Qe ? Sp(h, A) + Me + Re : 0,
                    pn && Qt.push(A.d, pn + yt),
                    $s(Qt),
                    hn && J.forEach(function(ha) {
                        ha.pin === hn && ha.vars.pinSpacing !== !1 && (ha._subPinOffset = !0)
                    }),
                    F && he(qn)),
                    F && (Et = {
                        top: Pt.top + (iu ? to - ee : Xf) + yt,
                        left: Pt.left + (iu ? Xf : to - ee) + yt,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    Et[No] = Et["max" + ta] = Math.ceil(Pt.width) + yt,
                    Et[Do] = Et["max" + f0] = Math.ceil(Pt.height) + yt,
                    Et[jn] = Et[jn + ol] = Et[jn + rl] = Et[jn + sl] = Et[jn + il] = "0",
                    Et[Qe] = gt[Qe],
                    Et[Qe + ol] = gt[Qe + ol],
                    Et[Qe + rl] = gt[Qe + rl],
                    Et[Qe + sl] = gt[Qe + sl],
                    Et[Qe + il] = gt[Qe + il],
                    Ki = _E(dn, Et, w),
                    Ut && he(0)),
                    i ? (b0 = i._initted,
                    Nd(1),
                    i.render(i.duration(), !0, !0),
                    Mr = Gn(A.a) - Qi + Me + Re,
                    Qo = Math.abs(Me - Mr) > 1,
                    F && Qo && Ki.splice(Ki.length - 2, 2),
                    i.render(0, !0, !0),
                    b0 || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    Nd(0)) : Mr = Me,
                    hr && (hr.value ? hr.style["overflow" + A.a.toUpperCase()] = hr.value : hr.style.removeProperty("overflow-" + A.a));
                else if (d && he() && !S)
                    for (Pt = d.parentNode; Pt && Pt !== Te; )
                        Pt._pinOffset && (ee -= Pt._pinOffset,
                        Ie -= Pt._pinOffset),
                        Pt = Pt.parentNode;
                fa && fa.forEach(function(ha) {
                    return ha.revert(!1, !0)
                }),
                k.start = ee,
                k.end = Ie,
                pe = jt = Ut ? qn : he(),
                !S && !Ut && (pe < qn && he(qn),
                k.scroll.rec = 0),
                k.revert(!1, !0),
                oe = Wt(),
                Qn && (Z = -1,
                Qn.restart(!0)),
                Rt = 0,
                i && b && (i._initted || eo) && i.progress() !== eo && i.progress(eo || 0, !0).render(i.time(), !0, !0),
                (Vt || se !== k.progress || S) && (i && !b && i.totalProgress(S && ee < -.001 && !se ? $.utils.normalize(ee, Ie, 0) : se, !0),
                k.progress = Vt || (pe - ee) / Me === se ? 0 : se),
                h && m && (pt._pinOffset = Math.round(k.progress * Mr)),
                ce && ce.invalidate(),
                isNaN(da) || (da -= $.getProperty(N, A.p),
                ou -= $.getProperty(ve, A.p),
                Vu(N, A, da),
                Vu(kt, A, da - (te || 0)),
                Vu(ve, A, ou),
                Vu(Tt, A, ou - (te || 0))),
                Vt && !Ut && k.update(),
                c && !Ut && !st && (st = !0,
                c(k),
                st = !1)
            }
        }
        ,
        k.getVelocity = function() {
            return (he() - jt) / (Wt() - ac) * 1e3 || 0
        }
        ,
        k.endAnimation = function() {
            ka(k.callbackAnimation),
            i && (ce ? ce.progress(1) : i.paused() ? b || ka(i, k.direction < 0, 1) : ka(i, i.reversed()))
        }
        ,
        k.labelToScroll = function(B) {
            return i && i.labels && (ee || k.refresh() || ee) + i.labels[B] / i.duration() * Me || 0
        }
        ,
        k.getTrailing = function(B) {
            var ue = J.indexOf(k)
              , X = k.direction > 0 ? J.slice(0, ue).reverse() : J.slice(ue + 1);
            return (xn(B) ? X.filter(function(te) {
                return te.vars.preventOverlaps === B
            }) : X).filter(function(te) {
                return k.direction > 0 ? te.end <= ee : te.start >= Ie
            })
        }
        ,
        k.update = function(B, ue, X) {
            if (!(S && !X && !B)) {
                var te = Ut === !0 ? qn : k.scroll(), at = B ? 0 : (te - ee) / Me, fe = at < 0 ? 0 : at > 1 ? 1 : at || 0, Ye = k.progress, Vt, mt, Re, xe, Zn, Ne, hn, fr;
                if (ue && (jt = pe,
                pe = S ? he() : te,
                _ && (ri = ni,
                ni = i && !b ? i.totalProgress() : fe)),
                x && !fe && h && !Rt && !Ru && Un && ee < te + (te - jt) / (Wt() - ac) * x && (fe = 1e-4),
                fe !== Ye && k.enabled) {
                    if (Vt = k.isActive = !!fe && fe < 1,
                    mt = !!Ye && Ye < 1,
                    Ne = Vt !== mt,
                    Zn = Ne || !!fe != !!Ye,
                    k.direction = fe > Ye ? 1 : -1,
                    k.progress = fe,
                    Zn && !Rt && (Re = fe && !Ye ? 0 : fe === 1 ? 1 : Ye === 1 ? 2 : 3,
                    b && (xe = !Ne && I[Re + 1] !== "none" && I[Re + 1] || I[Re],
                    fr = i && (xe === "complete" || xe === "reset" || xe in i))),
                    M && (Ne || fr) && (fr || f || !i) && (Yt(M) ? M(k) : k.getTrailing(M).forEach(function(to) {
                        return to.endAnimation()
                    })),
                    b || (ce && !Rt && !Ru ? (ce._dp._time - ce._start !== ce._time && ce.render(ce._dp._time - ce._start),
                    ce.resetTo ? ce.resetTo("totalProgress", fe, i._tTime / i._tDur) : (ce.vars.totalProgress = fe,
                    ce.invalidate().restart())) : i && i.totalProgress(fe, !!(Rt && (oe || B)))),
                    h) {
                        if (B && m && (pt.style[m + A.os2] = cr),
                        !F)
                            Xn(ba(Qi + Mr * fe));
                        else if (Zn) {
                            if (hn = !B && fe > Ye && Ie + 1 > te && te + 1 >= zr(D, A),
                            w)
                                if (!B && (Vt || hn)) {
                                    var pn = jr(h, !0)
                                      , gt = te - ee;
                                    by(h, Te, pn.top + (A === it ? gt : 0) + yt, pn.left + (A === it ? 0 : gt) + yt)
                                } else
                                    by(h, pt);
                            $s(Vt || hn ? Ki : ca),
                            Qo && fe < 1 && Vt || Xn(Qi + (fe === 1 && !hn ? Mr : 0))
                        }
                    }
                    _ && !tt.tween && !Rt && !Ru && Qn.restart(!0),
                    a && (Ne || v && fe && (fe < 1 || !Dd)) && nf(a.targets).forEach(function(to) {
                        return to.classList[Vt || v ? "add" : "remove"](a.className)
                    }),
                    s && !b && !B && s(k),
                    Zn && !Rt ? (b && (fr && (xe === "complete" ? i.pause().totalProgress(1) : xe === "reset" ? i.restart(!0).pause() : xe === "restart" ? i.restart(!0) : i[xe]()),
                    s && s(k)),
                    (Ne || !Dd) && (u && Ne && Ld(k, u),
                    H[Re] && Ld(k, H[Re]),
                    v && (fe === 1 ? k.kill(!1, 1) : H[Re] = 0),
                    Ne || (Re = fe === 1 ? 1 : 3,
                    H[Re] && Ld(k, H[Re]))),
                    T && !Vt && Math.abs(k.getVelocity()) > (lc(T) ? T : 2500) && (ka(k.callbackAnimation),
                    ce ? ce.progress(1) : ka(i, xe === "reverse" ? 1 : !fe, 1))) : b && s && !Rt && s(k)
                }
                if (qo) {
                    var Pt = S ? te / S.duration() * (S._caScrollDist || 0) : te;
                    qi(Pt + (N._isFlipped ? 1 : 0)),
                    qo(Pt)
                }
                Zo && Zo(-te / S.duration() * (S._caScrollDist || 0))
            }
        }
        ,
        k.enable = function(B, ue) {
            k.enabled || (k.enabled = !0,
            ut(D, "resize", ja),
            j || ut(D, "scroll", is),
            O && ut(t, "refreshInit", O),
            B !== !1 && (k.progress = se = 0,
            pe = jt = Z = he()),
            ue !== !1 && k.refresh())
        }
        ,
        k.getTween = function(B) {
            return B && tt ? tt.tween : ce
        }
        ,
        k.setPositions = function(B, ue, X, te) {
            if (S) {
                var at = S.scrollTrigger
                  , fe = S.duration()
                  , Ye = at.end - at.start;
                B = at.start + Ye * B / fe,
                ue = at.start + Ye * ue / fe
            }
            k.refresh(!1, !1, {
                start: Ey(B, X && !!k._startClamp),
                end: Ey(ue, X && !!k._endClamp)
            }, te),
            k.update()
        }
        ,
        k.adjustPinSpacing = function(B) {
            if (Qt && B) {
                var ue = Qt.indexOf(A.d) + 1;
                Qt[ue] = parseFloat(Qt[ue]) + B + yt,
                Qt[1] = parseFloat(Qt[1]) + B + yt,
                $s(Qt)
            }
        }
        ,
        k.disable = function(B, ue) {
            if (k.enabled && (B !== !1 && k.revert(!0, !0),
            k.enabled = k.isActive = !1,
            ue || ce && ce.pause(),
            qn = 0,
            Ee && (Ee.uncache = 1),
            O && lt(t, "refreshInit", O),
            Qn && (Qn.pause(),
            tt.tween && tt.tween.kill() && (tt.tween = 0)),
            !j)) {
                for (var X = J.length; X--; )
                    if (J[X].scroller === D && J[X] !== k)
                        return;
                lt(D, "resize", ja),
                j || lt(D, "scroll", is)
            }
        }
        ,
        k.kill = function(B, ue) {
            k.disable(B, ue),
            ce && !ue && ce.kill(),
            l && delete Cp[l];
            var X = J.indexOf(k);
            X >= 0 && J.splice(X, 1),
            X === $t && fc > 0 && $t--,
            X = 0,
            J.forEach(function(te) {
                return te.scroller === k.scroller && (X = 1)
            }),
            X || Ut || (k.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            B && i.revert({
                kill: !1
            }),
            ue || i.kill()),
            kt && [kt, Tt, N, ve].forEach(function(te) {
                return te.parentNode && te.parentNode.removeChild(te)
            }),
            al === k && (al = 0),
            h && (Ee && (Ee.uncache = 1),
            X = 0,
            J.forEach(function(te) {
                return te.pin === h && X++
            }),
            X || (Ee.spacer = 0)),
            r.onKill && r.onKill(k)
        }
        ,
        J.push(k),
        k.enable(!1, !1),
        Ar && Ar(k),
        i && i.add && !Me) {
            var ze = k.update;
            k.update = function() {
                k.update = ze,
                ee || Ie || k.refresh()
            }
            ,
            $.delayedCall(.01, k.update),
            Me = .01,
            ee = Ie = 0
        } else
            k.refresh();
        h && yE()
    }
    ,
    t.register = function(r) {
        return as || ($ = r || i2(),
        r2() && window.document && t.enable(),
        as = La),
        as
    }
    ,
    t.defaults = function(r) {
        if (r)
            for (var i in r)
                Lu[i] = r[i];
        return Lu
    }
    ,
    t.disable = function(r, i) {
        La = 0,
        J.forEach(function(s) {
            return s[i ? "kill" : "disable"](r)
        }),
        lt(ae, "wheel", is),
        lt(De, "scroll", is),
        clearInterval(Au),
        lt(De, "touchcancel", yr),
        lt(Te, "touchstart", yr),
        Du(lt, De, "pointerdown,touchstart,mousedown", My),
        Du(lt, De, "pointerup,touchend,mouseup", Ay),
        tf.kill(),
        Nu(lt);
        for (var o = 0; o < ne.length; o += 3)
            Ou(lt, ne[o], ne[o + 1]),
            Ou(lt, ne[o], ne[o + 2])
    }
    ,
    t.enable = function() {
        if (ae = window,
        De = document,
        ir = De.documentElement,
        Te = De.body,
        $ && (nf = $.utils.toArray,
        Ts = $.utils.clamp,
        wp = $.core.context || yr,
        Nd = $.core.suppressOverwrites || yr,
        a0 = ae.history.scrollRestoration || "auto",
        kp = ae.pageYOffset,
        $.core.globals("ScrollTrigger", t),
        Te)) {
            La = 1,
            Bs = document.createElement("div"),
            Bs.style.height = "100vh",
            Bs.style.position = "absolute",
            h2(),
            cE(),
            et.register($),
            t.isTouch = et.isTouch,
            oi = et.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            ut(ae, "wheel", is),
            qw = [ae, De, ir, Te],
            $.matchMedia ? (t.matchMedia = function(l) {
                var u = $.matchMedia(), c;
                for (c in l)
                    u.add(c, l[c]);
                return u
            }
            ,
            $.addEventListener("matchMediaInit", function() {
                return h0()
            }),
            $.addEventListener("matchMediaRevert", function() {
                return f2()
            }),
            $.addEventListener("matchMedia", function() {
                Co(0, 1),
                Uo("matchMedia")
            }),
            $.matchMedia("(orientation: portrait)", function() {
                return bd(),
                bd
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            bd(),
            ut(De, "scroll", is);
            var r = Te.style, i = r.borderTopStyle, o = $.core.Animation.prototype, s, a;
            for (o.revert || Object.defineProperty(o, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            s = jr(Te),
            it.m = Math.round(s.top + it.sc()) || 0,
            Ht.m = Math.round(s.left + Ht.sc()) || 0,
            i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
            Au = setInterval(Dy, 250),
            $.delayedCall(.5, function() {
                return Ru = 0
            }),
            ut(De, "touchcancel", yr),
            ut(Te, "touchstart", yr),
            Du(ut, De, "pointerdown,touchstart,mousedown", My),
            Du(ut, De, "pointerup,touchend,mouseup", Ay),
            _p = $.utils.checkPrefix("transform"),
            dc.push(_p),
            as = Wt(),
            tf = $.delayedCall(.2, Co).pause(),
            ls = [De, "visibilitychange", function() {
                var l = ae.innerWidth
                  , u = ae.innerHeight;
                De.hidden ? (ky = l,
                Ty = u) : (ky !== l || Ty !== u) && ja()
            }
            , De, "DOMContentLoaded", Co, ae, "load", Co, ae, "resize", ja],
            Nu(ut),
            J.forEach(function(l) {
                return l.enable(0, 1)
            }),
            a = 0; a < ne.length; a += 3)
                Ou(lt, ne[a], ne[a + 1]),
                Ou(lt, ne[a], ne[a + 2])
        }
    }
    ,
    t.config = function(r) {
        "limitCallbacks"in r && (Dd = !!r.limitCallbacks);
        var i = r.syncInterval;
        i && clearInterval(Au) || (Au = i) && setInterval(Dy, i),
        "ignoreMobileResize"in r && (e2 = t.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents"in r && (Nu(lt) || Nu(ut, r.autoRefreshEvents || "none"),
        Jw = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    t.scrollerProxy = function(r, i) {
        var o = qt(r)
          , s = ne.indexOf(o)
          , a = Bo(o);
        ~s && ne.splice(s, a ? 6 : 2),
        i && (a ? Tr.unshift(ae, i, Te, i, ir, i) : Tr.unshift(o, i))
    }
    ,
    t.clearMatchMedia = function(r) {
        J.forEach(function(i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
        })
    }
    ,
    t.isInViewport = function(r, i, o) {
        var s = (xn(r) ? qt(r) : r).getBoundingClientRect()
          , a = s[o ? No : Do] * i || 0;
        return o ? s.right - a > 0 && s.left + a < ae.innerWidth : s.bottom - a > 0 && s.top + a < ae.innerHeight
    }
    ,
    t.positionInViewport = function(r, i, o) {
        xn(r) && (r = qt(r));
        var s = r.getBoundingClientRect()
          , a = s[o ? No : Do]
          , l = i == null ? a / 2 : i in rf ? rf[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
        return o ? (s.left + l) / ae.innerWidth : (s.top + l) / ae.innerHeight
    }
    ,
    t.killAll = function(r) {
        if (J.slice(0).forEach(function(o) {
            return o.vars.id !== "ScrollSmoother" && o.kill()
        }),
        r !== !0) {
            var i = $o.killAll || [];
            $o = {},
            i.forEach(function(o) {
                return o()
            })
        }
    }
    ,
    t
}();
re.version = "3.12.2";
re.saveStyles = function(t) {
    return t ? nf(t).forEach(function(e) {
        if (e && e.style) {
            var n = yn.indexOf(e);
            n >= 0 && yn.splice(n, 5),
            yn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), $.core.getCache(e), wp())
        }
    }) : yn
}
;
re.revert = function(t, e) {
    return h0(!t, e)
}
;
re.create = function(t, e) {
    return new re(t,e)
}
;
re.refresh = function(t) {
    return t ? ja() : (as || re.register()) && Co(!0)
}
;
re.update = function(t) {
    return ++ne.cache && Wr(t === !0 ? 2 : 0)
}
;
re.clearScrollMemory = d2;
re.maxScroll = function(t, e) {
    return zr(t, e ? Ht : it)
}
;
re.getScrollFunc = function(t, e) {
    return Bi(qt(t), e ? Ht : it)
}
;
re.getById = function(t) {
    return Cp[t]
}
;
re.getAll = function() {
    return J.filter(function(t) {
        return t.vars.id !== "ScrollSmoother"
    })
}
;
re.isScrolling = function() {
    return !!Un
}
;
re.snapDirectional = d0;
re.addEventListener = function(t, e) {
    var n = $o[t] || ($o[t] = []);
    ~n.indexOf(e) || n.push(e)
}
;
re.removeEventListener = function(t, e) {
    var n = $o[t]
      , r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1)
}
;
re.batch = function(t, e) {
    var n = [], r = {}, i = e.interval || .016, o = e.batchMax || 1e9, s = function(u, c) {
        var f = []
          , d = []
          , h = $.delayedCall(i, function() {
            c(f, d),
            f = [],
            d = []
        }).pause();
        return function(m) {
            f.length || h.restart(!0),
            f.push(m.trigger),
            d.push(m),
            o <= f.length && h.progress(1)
        }
    }, a;
    for (a in e)
        r[a] = a.substr(0, 2) === "on" && Yt(e[a]) && a !== "onRefreshInit" ? s(a, e[a]) : e[a];
    return Yt(o) && (o = o(),
    ut(re, "refresh", function() {
        return o = e.batchMax()
    })),
    nf(t).forEach(function(l) {
        var u = {};
        for (a in r)
            u[a] = r[a];
        u.trigger = l,
        n.push(re.create(u))
    }),
    n
}
;
var Vy = function(e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0),
    r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
}, Vd = function t(e, n) {
    n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (et.isTouch ? " pinch-zoom" : "") : "none",
    e === ir && t(Te, n)
}, Fu = {
    auto: 1,
    scroll: 1
}, SE = function(e) {
    var n = e.event, r = e.target, i = e.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, s = o._gsap || $.core.getCache(o), a = Wt(), l;
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
        for (; o && o !== Te && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(Fu[(l = Vn(o)).overflowY] || Fu[l.overflowX])); )
            o = o.parentNode;
        s._isScroll = o && o !== r && !Bo(o) && (Fu[(l = Vn(o)).overflowY] || Fu[l.overflowX]),
        s._isScrollT = a
    }
    (s._isScroll || i === "x") && (n.stopPropagation(),
    n._gsapAllow = !0)
}, m2 = function(e, n, r, i) {
    return et.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: i = i && SE,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return r && ut(De, et.eventTypes[0], Iy, !1, !0)
        },
        onDisable: function() {
            return lt(De, et.eventTypes[0], Iy, !0)
        }
    })
}, CE = /(input|label|select|textarea)/i, Fy, Iy = function(e) {
    var n = CE.test(e.target.tagName);
    (n || Fy) && (e._gsapAllow = !0,
    Fy = n)
}, kE = function(e) {
    fo(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var n = e, r = n.normalizeScrollX, i = n.momentum, o = n.allowNestedScroll, s = n.onRelease, a, l, u = qt(e.target) || ir, c = $.core.globals().ScrollSmoother, f = c && c.get(), d = oi && (e.content && qt(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), h = Bi(u, it), m = Bi(u, Ht), p = 1, x = (et.isTouch && ae.visualViewport ? ae.visualViewport.scale * ae.visualViewport.width : ae.outerWidth) / ae.innerWidth, y = 0, g = Yt(i) ? function() {
        return i(a)
    }
    : function() {
        return i || 2.8
    }
    , v, _, w = m2(u, e.type, !0, o), C = function() {
        return _ = !1
    }, S = yr, T = yr, M = function() {
        l = zr(u, it),
        T = Ts(oi ? 1 : 0, l),
        r && (S = Ts(0, zr(u, Ht))),
        v = Oo
    }, A = function() {
        d._gsap.y = ba(parseFloat(d._gsap.y) + h.offset) + "px",
        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)",
        h.offset = h.cacheID = 0
    }, b = function() {
        if (_) {
            requestAnimationFrame(C);
            var R = ba(a.deltaY / 2)
              , V = T(h.v - R);
            if (d && V !== h.v + h.offset) {
                h.offset = V - h.v;
                var k = ba((parseFloat(d && d._gsap.y) || 0) - h.offset);
                d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + k + ", 0, 1)",
                d._gsap.y = k + "px",
                h.cacheID = ne.cache,
                Wr()
            }
            return !0
        }
        h.offset && A(),
        _ = !0
    }, D, U, j, F, H = function() {
        M(),
        D.isActive() && D.vars.scrollY > l && (h() > l ? D.progress(1) && h(l) : D.resetTo("scrollY", l))
    };
    return d && $.set(d, {
        y: "+=0"
    }),
    e.ignoreCheck = function(I) {
        return oi && I.type === "touchmove" && b() || p > 1.05 && I.type !== "touchstart" || a.isGesturing || I.touches && I.touches.length > 1
    }
    ,
    e.onPress = function() {
        _ = !1;
        var I = p;
        p = ba((ae.visualViewport && ae.visualViewport.scale || 1) / x),
        D.pause(),
        I !== p && Vd(u, p > 1.01 ? !0 : r ? !1 : "x"),
        U = m(),
        j = h(),
        M(),
        v = Oo
    }
    ,
    e.onRelease = e.onGestureStart = function(I, R) {
        if (h.offset && A(),
        !R)
            F.restart(!0);
        else {
            ne.cache++;
            var V = g(), k, O;
            r && (k = m(),
            O = k + V * .05 * -I.velocityX / .227,
            V *= Vy(m, k, O, zr(u, Ht)),
            D.vars.scrollX = S(O)),
            k = h(),
            O = k + V * .05 * -I.velocityY / .227,
            V *= Vy(h, k, O, zr(u, it)),
            D.vars.scrollY = T(O),
            D.invalidate().duration(V).play(.01),
            (oi && D.vars.scrollY >= l || k >= l - 1) && $.to({}, {
                onUpdate: H,
                duration: V
            })
        }
        s && s(I)
    }
    ,
    e.onWheel = function() {
        D._ts && D.pause(),
        Wt() - y > 1e3 && (v = 0,
        y = Wt())
    }
    ,
    e.onChange = function(I, R, V, k, O) {
        if (Oo !== v && M(),
        R && r && m(S(k[2] === R ? U + (I.startX - I.x) : m() + R - k[1])),
        V) {
            h.offset && A();
            var W = O[2] === V
              , ge = W ? j + I.startY - I.y : h() + V - O[1]
              , Z = T(ge);
            W && ge !== Z && (j += Z - ge),
            h(Z)
        }
        (V || R) && Wr()
    }
    ,
    e.onEnable = function() {
        Vd(u, r ? !1 : "x"),
        re.addEventListener("refresh", H),
        ut(ae, "resize", H),
        h.smooth && (h.target.style.scrollBehavior = "auto",
        h.smooth = m.smooth = !1),
        w.enable()
    }
    ,
    e.onDisable = function() {
        Vd(u, !0),
        lt(ae, "resize", H),
        re.removeEventListener("refresh", H),
        w.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    a = new et(e),
    a.iOS = oi,
    oi && !h() && h(1),
    oi && $.ticker.add(yr),
    F = a._dc,
    D = $.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: p2(h, h(), function() {
                return D.pause()
            })
        },
        onUpdate: Wr,
        onComplete: F.vars.onComplete
    }),
    a
};
re.sort = function(t) {
    return J.sort(t || function(e, n) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
re.observe = function(t) {
    return new et(t)
}
;
re.normalizeScroll = function(t) {
    if (typeof t > "u")
        return gn;
    if (t === !0 && gn)
        return gn.enable();
    if (t === !1)
        return gn && gn.kill();
    var e = t instanceof et ? t : kE(t);
    return gn && gn.target === e.target && gn.kill(),
    Bo(e.target) && (gn = e),
    e
}
;
re.core = {
    _getVelocityProp: xp,
    _inputObserver: m2,
    _scrollers: ne,
    _proxies: Tr,
    bridge: {
        ss: function() {
            Un || Uo("scrollStart"),
            Un = Wt()
        },
        ref: function() {
            return Rt
        }
    }
};
i2() && $.registerPlugin(re);
const g2 = E.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
})
  , zf = E.createContext({})
  , Bf = E.createContext(null)
  , $f = typeof document < "u"
  , p0 = $f ? E.useLayoutEffect : E.useEffect
  , y2 = E.createContext({
    strict: !1
});
function TE(t, e, n, r) {
    const {visualElement: i} = E.useContext(zf)
      , o = E.useContext(y2)
      , s = E.useContext(Bf)
      , a = E.useContext(g2).reducedMotion
      , l = E.useRef();
    r = r || o.renderer,
    !l.current && r && (l.current = r(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const u = l.current;
    E.useInsertionEffect( () => {
        u && u.update(n, s)
    }
    );
    const c = E.useRef(!!window.HandoffAppearAnimations);
    return p0( () => {
        u && (u.render(),
        c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    E.useEffect( () => {
        u && (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        window.HandoffAppearAnimations = void 0,
        c.current = !1)
    }
    ),
    u
}
function Ps(t) {
    return typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function PE(t, e, n) {
    return E.useCallback(r => {
        r && t.mount && t.mount(r),
        e && (r ? e.mount(r) : e.unmount()),
        n && (typeof n == "function" ? n(r) : Ps(n) && (n.current = r))
    }
    , [e])
}
function zl(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Uf(t) {
    return typeof t == "object" && typeof t.start == "function"
}
const m0 = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , g0 = ["initial", ...m0];
function Wf(t) {
    return Uf(t.animate) || g0.some(e => zl(t[e]))
}
function v2(t) {
    return !!(Wf(t) || t.variants)
}
function EE(t, e) {
    if (Wf(t)) {
        const {initial: n, animate: r} = t;
        return {
            initial: n === !1 || zl(n) ? n : void 0,
            animate: zl(r) ? r : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function ME(t) {
    const {initial: e, animate: n} = EE(t, E.useContext(zf));
    return E.useMemo( () => ({
        initial: e,
        animate: n
    }), [zy(e), zy(n)])
}
function zy(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const By = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Bl = {};
for (const t in By)
    Bl[t] = {
        isEnabled: e => By[t].some(n => !!e[n])
    };
function AE(t) {
    for (const e in t)
        Bl[e] = {
            ...Bl[e],
            ...t[e]
        }
}
const y0 = E.createContext({})
  , x2 = E.createContext({})
  , RE = Symbol.for("motionComponentSymbol");
function NE({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: r, Component: i}) {
    t && AE(t);
    function o(a, l) {
        let u;
        const c = {
            ...E.useContext(g2),
            ...a,
            layoutId: DE(a)
        }
          , {isStatic: f} = c
          , d = ME(a)
          , h = r(a, f);
        if (!f && $f) {
            d.visualElement = TE(i, h, c, e);
            const m = E.useContext(x2)
              , p = E.useContext(y2).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, p, t, m))
        }
        return E.createElement(zf.Provider, {
            value: d
        }, u && d.visualElement ? E.createElement(u, {
            visualElement: d.visualElement,
            ...c
        }) : null, n(i, a, PE(h, d.visualElement, l), h, f, d.visualElement))
    }
    const s = E.forwardRef(o);
    return s[RE] = i,
    s
}
function DE({layoutId: t}) {
    const e = E.useContext(y0).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function OE(t) {
    function e(r, i={}) {
        return NE(t(r, i))
    }
    if (typeof Proxy > "u")
        return e;
    const n = new Map;
    return new Proxy(e,{
        get: (r, i) => (n.has(i) || n.set(i, e(i)),
        n.get(i))
    })
}
const LE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function v0(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(LE.indexOf(t) > -1 || /[A-Z]/.test(t))
}
const of = {};
function bE(t) {
    Object.assign(of, t)
}
const Jl = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Xo = new Set(Jl);
function _2(t, {layout: e, layoutId: n}) {
    return Xo.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!of[t] || t === "opacity")
}
const cn = t => !!(t && t.getVelocity)
  , jE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , VE = Jl.length;
function FE(t, {enableHardwareAcceleration: e=!0, allowTransformNone: n=!0}, r, i) {
    let o = "";
    for (let s = 0; s < VE; s++) {
        const a = Jl[s];
        if (t[a] !== void 0) {
            const l = jE[a] || a;
            o += `${l}(${t[a]}) `
        }
    }
    return e && !t.z && (o += "translateZ(0)"),
    o = o.trim(),
    i ? o = i(t, r ? "" : o) : n && r && (o = "none"),
    o
}
const w2 = t => e => typeof e == "string" && e.startsWith(t)
  , S2 = w2("--")
  , Pp = w2("var(--")
  , IE = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , zE = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , $i = (t, e, n) => Math.min(Math.max(n, t), e)
  , Ko = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , ll = {
    ...Ko,
    transform: t => $i(0, 1, t)
}
  , Iu = {
    ...Ko,
    default: 1
}
  , ul = t => Math.round(t * 1e5) / 1e5
  , Hf = /(-)?([\d]*\.?[\d])+/g
  , C2 = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , BE = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function eu(t) {
    return typeof t == "string"
}
const tu = t => ({
    test: e => eu(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , si = tu("deg")
  , Pr = tu("%")
  , G = tu("px")
  , $E = tu("vh")
  , UE = tu("vw")
  , $y = {
    ...Pr,
    parse: t => Pr.parse(t) / 100,
    transform: t => Pr.transform(t * 100)
}
  , Uy = {
    ...Ko,
    transform: Math.round
}
  , k2 = {
    borderWidth: G,
    borderTopWidth: G,
    borderRightWidth: G,
    borderBottomWidth: G,
    borderLeftWidth: G,
    borderRadius: G,
    radius: G,
    borderTopLeftRadius: G,
    borderTopRightRadius: G,
    borderBottomRightRadius: G,
    borderBottomLeftRadius: G,
    width: G,
    maxWidth: G,
    height: G,
    maxHeight: G,
    size: G,
    top: G,
    right: G,
    bottom: G,
    left: G,
    padding: G,
    paddingTop: G,
    paddingRight: G,
    paddingBottom: G,
    paddingLeft: G,
    margin: G,
    marginTop: G,
    marginRight: G,
    marginBottom: G,
    marginLeft: G,
    rotate: si,
    rotateX: si,
    rotateY: si,
    rotateZ: si,
    scale: Iu,
    scaleX: Iu,
    scaleY: Iu,
    scaleZ: Iu,
    skew: si,
    skewX: si,
    skewY: si,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: ll,
    originX: $y,
    originY: $y,
    originZ: G,
    zIndex: Uy,
    fillOpacity: ll,
    strokeOpacity: ll,
    numOctaves: Uy
};
function x0(t, e, n, r) {
    const {style: i, vars: o, transform: s, transformOrigin: a} = t;
    let l = !1
      , u = !1
      , c = !0;
    for (const f in e) {
        const d = e[f];
        if (S2(f)) {
            o[f] = d;
            continue
        }
        const h = k2[f]
          , m = zE(d, h);
        if (Xo.has(f)) {
            if (l = !0,
            s[f] = m,
            !c)
                continue;
            d !== (h.default || 0) && (c = !1)
        } else
            f.startsWith("origin") ? (u = !0,
            a[f] = m) : i[f] = m
    }
    if (e.transform || (l || r ? i.transform = FE(t.transform, n, c, r) : i.transform && (i.transform = "none")),
    u) {
        const {originX: f="50%", originY: d="50%", originZ: h=0} = a;
        i.transformOrigin = `${f} ${d} ${h}`
    }
}
const _0 = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function T2(t, e, n) {
    for (const r in e)
        !cn(e[r]) && !_2(r, n) && (t[r] = e[r])
}
function WE({transformTemplate: t}, e, n) {
    return E.useMemo( () => {
        const r = _0();
        return x0(r, e, {
            enableHardwareAcceleration: !n
        }, t),
        Object.assign({}, r.vars, r.style)
    }
    , [e])
}
function HE(t, e, n) {
    const r = t.style || {}
      , i = {};
    return T2(i, r, t),
    Object.assign(i, WE(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
}
function YE(t, e, n) {
    const r = {}
      , i = HE(t, e, n);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
const GE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
function sf(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || GE.has(t)
}
let P2 = t => !sf(t);
function XE(t) {
    t && (P2 = e => e.startsWith("on") ? !sf(e) : t(e))
}
try {
    XE(require("@emotion/is-prop-valid").default)
} catch {}
function KE(t, e, n) {
    const r = {};
    for (const i in t)
        i === "values" && typeof t.values == "object" || (P2(i) || n === !0 && sf(i) || !e && !sf(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
    return r
}
function Wy(t, e, n) {
    return typeof t == "string" ? t : G.transform(e + n * t)
}
function QE(t, e, n) {
    const r = Wy(e, t.x, t.width)
      , i = Wy(n, t.y, t.height);
    return `${r} ${i}`
}
const qE = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , ZE = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function JE(t, e, n=1, r=0, i=!0) {
    t.pathLength = 1;
    const o = i ? qE : ZE;
    t[o.offset] = G.transform(-r);
    const s = G.transform(e)
      , a = G.transform(n);
    t[o.array] = `${s} ${a}`
}
function w0(t, {attrX: e, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: a=1, pathOffset: l=0, ...u}, c, f, d) {
    if (x0(t, u, c, d),
    f) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: h, style: m, dimensions: p} = t;
    h.transform && (p && (m.transform = h.transform),
    delete h.transform),
    p && (i !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = QE(p, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    e !== void 0 && (h.x = e),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && JE(h, s, a, l, !1)
}
const E2 = () => ({
    ..._0(),
    attrs: {}
})
  , S0 = t => typeof t == "string" && t.toLowerCase() === "svg";
function e4(t, e, n, r) {
    const i = E.useMemo( () => {
        const o = E2();
        return w0(o, e, {
            enableHardwareAcceleration: !1
        }, S0(r), t.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const o = {};
        T2(o, t.style, t),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function t4(t=!1) {
    return (n, r, i, {latestValues: o}, s) => {
        const l = (v0(n) ? e4 : YE)(r, o, s, n)
          , c = {
            ...KE(r, typeof n == "string", t),
            ...l,
            ref: i
        }
          , {children: f} = r
          , d = E.useMemo( () => cn(f) ? f.get() : f, [f]);
        return E.createElement(n, {
            ...c,
            children: d
        })
    }
}
const C0 = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function M2(t, {style: e, vars: n}, r, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(r));
    for (const o in n)
        t.style.setProperty(o, n[o])
}
const A2 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function R2(t, e, n, r) {
    M2(t, e, void 0, r);
    for (const i in e.attrs)
        t.setAttribute(A2.has(i) ? i : C0(i), e.attrs[i])
}
function k0(t, e) {
    const {style: n} = t
      , r = {};
    for (const i in n)
        (cn(n[i]) || e.style && cn(e.style[i]) || _2(i, t)) && (r[i] = n[i]);
    return r
}
function N2(t, e) {
    const n = k0(t, e);
    for (const r in t)
        if (cn(t[r]) || cn(e[r])) {
            const i = Jl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = t[r]
        }
    return n
}
function T0(t, e, n, r={}, i={}) {
    return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)),
    e
}
function D2(t) {
    const e = E.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const af = t => Array.isArray(t)
  , n4 = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , r4 = t => af(t) ? t[t.length - 1] || 0 : t;
function pc(t) {
    const e = cn(t) ? t.get() : t;
    return n4(e) ? e.toValue() : e
}
function i4({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, r, i, o) {
    const s = {
        latestValues: o4(r, i, o, t),
        renderState: e()
    };
    return n && (s.mount = a => n(r, a, s)),
    s
}
const O2 = t => (e, n) => {
    const r = E.useContext(zf)
      , i = E.useContext(Bf)
      , o = () => i4(t, e, r, i);
    return n ? o() : D2(o)
}
;
function o4(t, e, n, r) {
    const i = {}
      , o = r(t, {});
    for (const d in o)
        i[d] = pc(o[d]);
    let {initial: s, animate: a} = t;
    const l = Wf(t)
      , u = v2(t);
    e && u && !l && t.inherit !== !1 && (s === void 0 && (s = e.initial),
    a === void 0 && (a = e.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return f && typeof f != "boolean" && !Uf(f) && (Array.isArray(f) ? f : [f]).forEach(h => {
        const m = T0(t, h);
        if (!m)
            return;
        const {transitionEnd: p, transition: x, ...y} = m;
        for (const g in y) {
            let v = y[g];
            if (Array.isArray(v)) {
                const _ = c ? v.length - 1 : 0;
                v = v[_]
            }
            v !== null && (i[g] = v)
        }
        for (const g in p)
            i[g] = p[g]
    }
    ),
    i
}
const Ue = t => t;
class Hy {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(e) {
        if (!this.scheduled.has(e))
            return this.scheduled.add(e),
            this.order.push(e),
            !0
    }
    remove(e) {
        const n = this.order.indexOf(e);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(e))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function s4(t) {
    let e = new Hy
      , n = new Hy
      , r = 0
      , i = !1
      , o = !1;
    const s = new WeakSet
      , a = {
        schedule: (l, u=!1, c=!1) => {
            const f = c && i
              , d = f ? e : n;
            return u && s.add(l),
            d.add(l) && f && i && (r = e.order.length),
            l
        }
        ,
        cancel: l => {
            n.remove(l),
            s.delete(l)
        }
        ,
        process: l => {
            if (i) {
                o = !0;
                return
            }
            if (i = !0,
            [e,n] = [n, e],
            n.clear(),
            r = e.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = e.order[u];
                    c(l),
                    s.has(c) && (a.schedule(c),
                    t())
                }
            i = !1,
            o && (o = !1,
            a.process(l))
        }
    };
    return a
}
const zu = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , a4 = 40;
function l4(t, e) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = zu.reduce( (f, d) => (f[d] = s4( () => n = !0),
    f), {})
      , s = f => o[f].process(i)
      , a = () => {
        const f = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, a4), 1),
        i.timestamp = f,
        i.isProcessing = !0,
        zu.forEach(s),
        i.isProcessing = !1,
        n && e && (r = !1,
        t(a))
    }
      , l = () => {
        n = !0,
        r = !0,
        i.isProcessing || t(a)
    }
    ;
    return {
        schedule: zu.reduce( (f, d) => {
            const h = o[d];
            return f[d] = (m, p=!1, x=!1) => (n || l(),
            h.schedule(m, p, x)),
            f
        }
        , {}),
        cancel: f => zu.forEach(d => o[d].cancel(f)),
        state: i,
        steps: o
    }
}
const {schedule: Ce, cancel: ei, state: ct, steps: Fd} = l4(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0)
  , u4 = {
    useVisualState: O2({
        scrapeMotionValuesFromProps: N2,
        createRenderState: E2,
        onMount: (t, e, {renderState: n, latestValues: r}) => {
            Ce.read( () => {
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            Ce.render( () => {
                w0(n, r, {
                    enableHardwareAcceleration: !1
                }, S0(e.tagName), t.transformTemplate),
                R2(e, n)
            }
            )
        }
    })
}
  , c4 = {
    useVisualState: O2({
        scrapeMotionValuesFromProps: k0,
        createRenderState: _0
    })
};
function f4(t, {forwardMotionProps: e=!1}, n, r) {
    return {
        ...v0(t) ? u4 : c4,
        preloadedFeatures: n,
        useRender: t4(e),
        createVisualElement: r,
        Component: t
    }
}
function Br(t, e, n, r={
    passive: !0
}) {
    return t.addEventListener(e, n, r),
    () => t.removeEventListener(e, n)
}
const L2 = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function Yf(t, e="page") {
    return {
        point: {
            x: t[e + "X"],
            y: t[e + "Y"]
        }
    }
}
const d4 = t => e => L2(e) && t(e, Yf(e));
function Hr(t, e, n, r) {
    return Br(t, e, d4(n), r)
}
const h4 = (t, e) => n => e(t(n))
  , Oi = (...t) => t.reduce(h4);
function b2(t) {
    let e = null;
    return () => {
        const n = () => {
            e = null
        }
        ;
        return e === null ? (e = t,
        n) : !1
    }
}
const Yy = b2("dragHorizontal")
  , Gy = b2("dragVertical");
function j2(t) {
    let e = !1;
    if (t === "y")
        e = Gy();
    else if (t === "x")
        e = Yy();
    else {
        const n = Yy()
          , r = Gy();
        n && r ? e = () => {
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return e
}
function V2() {
    const t = j2(!0);
    return t ? (t(),
    !1) : !0
}
class Xi {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
function Xy(t, e) {
    const n = "pointer" + (e ? "enter" : "leave")
      , r = "onHover" + (e ? "Start" : "End")
      , i = (o, s) => {
        if (o.type === "touch" || V2())
            return;
        const a = t.getProps();
        t.animationState && a.whileHover && t.animationState.setActive("whileHover", e),
        a[r] && Ce.update( () => a[r](o, s))
    }
    ;
    return Hr(t.current, n, i, {
        passive: !t.getProps()[r]
    })
}
class p4 extends Xi {
    mount() {
        this.unmount = Oi(Xy(this.node, !0), Xy(this.node, !1))
    }
    unmount() {}
}
class m4 extends Xi {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Oi(Br(this.node.current, "focus", () => this.onFocus()), Br(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const F2 = (t, e) => e ? t === e ? !0 : F2(t, e.parentElement) : !1;
function Id(t, e) {
    if (!e)
        return;
    const n = new PointerEvent("pointer" + t);
    e(n, Yf(n))
}
class g4 extends Xi {
    constructor() {
        super(...arguments),
        this.removeStartListeners = Ue,
        this.removeEndListeners = Ue,
        this.removeAccessibleListeners = Ue,
        this.startPointerPress = (e, n) => {
            if (this.removeEndListeners(),
            this.isPressing)
                return;
            const r = this.node.getProps()
              , o = Hr(window, "pointerup", (a, l) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c} = this.node.getProps();
                Ce.update( () => {
                    F2(this.node.current, a.target) ? u && u(a, l) : c && c(a, l)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , s = Hr(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = Oi(o, s),
            this.startPress(e, n)
        }
        ,
        this.startAccessiblePress = () => {
            const e = o => {
                if (o.key !== "Enter" || this.isPressing)
                    return;
                const s = a => {
                    a.key !== "Enter" || !this.checkPressEnd() || Id("up", (l, u) => {
                        const {onTap: c} = this.node.getProps();
                        c && Ce.update( () => c(l, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = Br(this.node.current, "keyup", s),
                Id("down", (a, l) => {
                    this.startPress(a, l)
                }
                )
            }
              , n = Br(this.node.current, "keydown", e)
              , r = () => {
                this.isPressing && Id("cancel", (o, s) => this.cancelPress(o, s))
            }
              , i = Br(this.node.current, "blur", r);
            this.removeAccessibleListeners = Oi(n, i)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && Ce.update( () => r(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !V2()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && Ce.update( () => r(e, n))
    }
    mount() {
        const e = this.node.getProps()
          , n = Hr(this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(e.onTapStart || e.onPointerStart)
        })
          , r = Br(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Oi(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const Ep = new WeakMap
  , zd = new WeakMap
  , y4 = t => {
    const e = Ep.get(t.target);
    e && e(t)
}
  , v4 = t => {
    t.forEach(y4)
}
;
function x4({root: t, ...e}) {
    const n = t || document;
    zd.has(n) || zd.set(n, {});
    const r = zd.get(n)
      , i = JSON.stringify(e);
    return r[i] || (r[i] = new IntersectionObserver(v4,{
        root: t,
        ...e
    })),
    r[i]
}
function _4(t, e, n) {
    const r = x4(e);
    return Ep.set(t, n),
    r.observe(t),
    () => {
        Ep.delete(t),
        r.unobserve(t)
    }
}
const w4 = {
    some: 0,
    all: 1
};
class S4 extends Xi {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = e
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : w4[i]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(l)
        }
        ;
        return _4(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(C4(e, n)) && this.startObserver()
    }
    unmount() {}
}
function C4({viewport: t={}}, {viewport: e={}}={}) {
    return n => t[n] !== e[n]
}
const k4 = {
    inView: {
        Feature: S4
    },
    tap: {
        Feature: g4
    },
    focus: {
        Feature: m4
    },
    hover: {
        Feature: p4
    }
};
function I2(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (e[r] !== t[r])
            return !1;
    return !0
}
function T4(t) {
    const e = {};
    return t.values.forEach( (n, r) => e[r] = n.get()),
    e
}
function P4(t) {
    const e = {};
    return t.values.forEach( (n, r) => e[r] = n.getVelocity()),
    e
}
function Gf(t, e, n) {
    const r = t.getProps();
    return T0(r, e, n !== void 0 ? n : r.custom, T4(t), P4(t))
}
const E4 = "framerAppearId"
  , M4 = "data-" + C0(E4);
let A4 = Ue
  , P0 = Ue;
const Li = t => t * 1e3
  , Yr = t => t / 1e3
  , R4 = {
    current: !1
}
  , z2 = t => Array.isArray(t) && typeof t[0] == "number";
function B2(t) {
    return !!(!t || typeof t == "string" && $2[t] || z2(t) || Array.isArray(t) && t.every(B2))
}
const Va = ([t,e,n,r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`
  , $2 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Va([0, .65, .55, 1]),
    circOut: Va([.55, 0, 1, .45]),
    backIn: Va([.31, .01, .66, -.59]),
    backOut: Va([.33, 1.53, .69, .99])
};
function U2(t) {
    if (t)
        return z2(t) ? Va(t) : Array.isArray(t) ? t.map(U2) : $2[t]
}
function N4(t, e, n, {delay: r=0, duration: i, repeat: o=0, repeatType: s="loop", ease: a, times: l}={}) {
    const u = {
        [e]: n
    };
    l && (u.offset = l);
    const c = U2(a);
    return Array.isArray(c) && (u.easing = c),
    t.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
function D4(t, {repeat: e, repeatType: n="loop"}) {
    const r = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
    return t[r]
}
const W2 = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , O4 = 1e-7
  , L4 = 12;
function b4(t, e, n, r, i) {
    let o, s, a = 0;
    do
        s = e + (n - e) / 2,
        o = W2(s, r, i) - t,
        o > 0 ? n = s : e = s;
    while (Math.abs(o) > O4 && ++a < L4);
    return s
}
function nu(t, e, n, r) {
    if (t === e && n === r)
        return Ue;
    const i = o => b4(o, 0, 1, t, n);
    return o => o === 0 || o === 1 ? o : W2(i(o), e, r)
}
const j4 = nu(.42, 0, 1, 1)
  , V4 = nu(0, 0, .58, 1)
  , H2 = nu(.42, 0, .58, 1)
  , F4 = t => Array.isArray(t) && typeof t[0] != "number"
  , Y2 = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , G2 = t => e => 1 - t(1 - e)
  , X2 = t => 1 - Math.sin(Math.acos(t))
  , E0 = G2(X2)
  , I4 = Y2(E0)
  , K2 = nu(.33, 1.53, .69, .99)
  , M0 = G2(K2)
  , z4 = Y2(M0)
  , B4 = t => (t *= 2) < 1 ? .5 * M0(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , $4 = {
    linear: Ue,
    easeIn: j4,
    easeInOut: H2,
    easeOut: V4,
    circIn: X2,
    circInOut: I4,
    circOut: E0,
    backIn: M0,
    backInOut: z4,
    backOut: K2,
    anticipate: B4
}
  , Ky = t => {
    if (Array.isArray(t)) {
        P0(t.length === 4);
        const [e,n,r,i] = t;
        return nu(e, n, r, i)
    } else if (typeof t == "string")
        return $4[t];
    return t
}
  , A0 = (t, e) => n => !!(eu(n) && BE.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
  , Q2 = (t, e, n) => r => {
    if (!eu(r))
        return r;
    const [i,o,s,a] = r.match(Hf);
    return {
        [t]: parseFloat(i),
        [e]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , U4 = t => $i(0, 255, t)
  , Bd = {
    ...Ko,
    transform: t => Math.round(U4(t))
}
  , ko = {
    test: A0("rgb", "red"),
    parse: Q2("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: r=1}) => "rgba(" + Bd.transform(t) + ", " + Bd.transform(e) + ", " + Bd.transform(n) + ", " + ul(ll.transform(r)) + ")"
};
function W4(t) {
    let e = ""
      , n = ""
      , r = ""
      , i = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    r = t.substring(5, 7),
    i = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    r = t.substring(3, 4),
    i = t.substring(4, 5),
    e += e,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Mp = {
    test: A0("#"),
    parse: W4,
    transform: ko.transform
}
  , Es = {
    test: A0("hsl", "hue"),
    parse: Q2("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: r=1}) => "hsla(" + Math.round(t) + ", " + Pr.transform(ul(e)) + ", " + Pr.transform(ul(n)) + ", " + ul(ll.transform(r)) + ")"
}
  , zt = {
    test: t => ko.test(t) || Mp.test(t) || Es.test(t),
    parse: t => ko.test(t) ? ko.parse(t) : Es.test(t) ? Es.parse(t) : Mp.parse(t),
    transform: t => eu(t) ? t : t.hasOwnProperty("red") ? ko.transform(t) : Es.transform(t)
}
  , je = (t, e, n) => -n * t + n * e + t;
function $d(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function H4({hue: t, saturation: e, lightness: n, alpha: r}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!e)
        i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e
          , l = 2 * n - a;
        i = $d(l, a, t + 1 / 3),
        o = $d(l, a, t),
        s = $d(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const Ud = (t, e, n) => {
    const r = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - r) + r))
}
  , Y4 = [Mp, ko, Es]
  , G4 = t => Y4.find(e => e.test(t));
function Qy(t) {
    const e = G4(t);
    let n = e.parse(t);
    return e === Es && (n = H4(n)),
    n
}
const q2 = (t, e) => {
    const n = Qy(t)
      , r = Qy(e)
      , i = {
        ...n
    };
    return o => (i.red = Ud(n.red, r.red, o),
    i.green = Ud(n.green, r.green, o),
    i.blue = Ud(n.blue, r.blue, o),
    i.alpha = je(n.alpha, r.alpha, o),
    ko.transform(i))
}
;
function X4(t) {
    var e, n;
    return isNaN(t) && eu(t) && (((e = t.match(Hf)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(C2)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Z2 = {
    regex: IE,
    countKey: "Vars",
    token: "${v}",
    parse: Ue
}
  , J2 = {
    regex: C2,
    countKey: "Colors",
    token: "${c}",
    parse: zt.parse
}
  , eS = {
    regex: Hf,
    countKey: "Numbers",
    token: "${n}",
    parse: Ko.parse
};
function Wd(t, {regex: e, countKey: n, token: r, parse: i}) {
    const o = t.tokenised.match(e);
    o && (t["num" + n] = o.length,
    t.tokenised = t.tokenised.replace(e, r),
    t.values.push(...o.map(i)))
}
function lf(t) {
    const e = t.toString()
      , n = {
        value: e,
        tokenised: e,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && Wd(n, Z2),
    Wd(n, J2),
    Wd(n, eS),
    n
}
function tS(t) {
    return lf(t).values
}
function nS(t) {
    const {values: e, numColors: n, numVars: r, tokenised: i} = lf(t)
      , o = e.length;
    return s => {
        let a = i;
        for (let l = 0; l < o; l++)
            l < r ? a = a.replace(Z2.token, s[l]) : l < r + n ? a = a.replace(J2.token, zt.transform(s[l])) : a = a.replace(eS.token, ul(s[l]));
        return a
    }
}
const K4 = t => typeof t == "number" ? 0 : t;
function Q4(t) {
    const e = tS(t);
    return nS(t)(e.map(K4))
}
const Ui = {
    test: X4,
    parse: tS,
    createTransformer: nS,
    getAnimatableNone: Q4
}
  , rS = (t, e) => n => `${n > 0 ? e : t}`;
function iS(t, e) {
    return typeof t == "number" ? n => je(t, e, n) : zt.test(t) ? q2(t, e) : t.startsWith("var(") ? rS(t, e) : sS(t, e)
}
const oS = (t, e) => {
    const n = [...t]
      , r = n.length
      , i = t.map( (o, s) => iS(o, e[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
  , q4 = (t, e) => {
    const n = {
        ...t,
        ...e
    }
      , r = {};
    for (const i in n)
        t[i] !== void 0 && e[i] !== void 0 && (r[i] = iS(t[i], e[i]));
    return i => {
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
  , sS = (t, e) => {
    const n = Ui.createTransformer(e)
      , r = lf(t)
      , i = lf(e);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? Oi(oS(r.values, i.values), n) : rS(t, e)
}
  , $l = (t, e, n) => {
    const r = e - t;
    return r === 0 ? 1 : (n - t) / r
}
  , qy = (t, e) => n => je(t, e, n);
function Z4(t) {
    return typeof t == "number" ? qy : typeof t == "string" ? zt.test(t) ? q2 : sS : Array.isArray(t) ? oS : typeof t == "object" ? q4 : qy
}
function J4(t, e, n) {
    const r = []
      , i = n || Z4(t[0])
      , o = t.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(t[s], t[s + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[s] || Ue : e;
            a = Oi(l, a)
        }
        r.push(a)
    }
    return r
}
function aS(t, e, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = t.length;
    if (P0(o === e.length),
    o === 1)
        return () => e[0];
    t[0] > t[o - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const s = J4(e, r, i)
      , a = s.length
      , l = u => {
        let c = 0;
        if (a > 1)
            for (; c < t.length - 2 && !(u < t[c + 1]); c++)
                ;
        const f = $l(t[c], t[c + 1], u);
        return s[c](f)
    }
    ;
    return n ? u => l($i(t[0], t[o - 1], u)) : l
}
function eM(t, e) {
    const n = t[t.length - 1];
    for (let r = 1; r <= e; r++) {
        const i = $l(0, e, r);
        t.push(je(n, 1, i))
    }
}
function tM(t) {
    const e = [0];
    return eM(e, t.length - 1),
    e
}
function nM(t, e) {
    return t.map(n => n * e)
}
function rM(t, e) {
    return t.map( () => e || H2).splice(0, t.length - 1)
}
function uf({duration: t=300, keyframes: e, times: n, ease: r="easeInOut"}) {
    const i = F4(r) ? r.map(Ky) : Ky(r)
      , o = {
        done: !1,
        value: e[0]
    }
      , s = nM(n && n.length === e.length ? n : tM(e), t)
      , a = aS(s, e, {
        ease: Array.isArray(i) ? i : rM(e, i)
    });
    return {
        calculatedDuration: t,
        next: l => (o.value = a(l),
        o.done = l >= t,
        o)
    }
}
function lS(t, e) {
    return e ? t * (1e3 / e) : 0
}
const iM = 5;
function uS(t, e, n) {
    const r = Math.max(e - iM, 0);
    return lS(n - t(r), e - r)
}
const Hd = .001
  , oM = .01
  , Zy = 10
  , sM = .05
  , aM = 1;
function lM({duration: t=800, bounce: e=.25, velocity: n=0, mass: r=1}) {
    let i, o;
    A4(t <= Li(Zy));
    let s = 1 - e;
    s = $i(sM, aM, s),
    t = $i(oM, Zy, Yr(t)),
    s < 1 ? (i = u => {
        const c = u * s
          , f = c * t
          , d = c - n
          , h = Ap(u, s)
          , m = Math.exp(-f);
        return Hd - d / h * m
    }
    ,
    o = u => {
        const f = u * s * t
          , d = f * n + n
          , h = Math.pow(s, 2) * Math.pow(u, 2) * t
          , m = Math.exp(-f)
          , p = Ap(Math.pow(u, 2), s);
        return (-i(u) + Hd > 0 ? -1 : 1) * ((d - h) * m) / p
    }
    ) : (i = u => {
        const c = Math.exp(-u * t)
          , f = (u - n) * t + 1;
        return -Hd + c * f
    }
    ,
    o = u => {
        const c = Math.exp(-u * t)
          , f = (n - u) * (t * t);
        return c * f
    }
    );
    const a = 5 / t
      , l = cM(i, o, a);
    if (t = Li(t),
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: t
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: t
        }
    }
}
const uM = 12;
function cM(t, e, n) {
    let r = n;
    for (let i = 1; i < uM; i++)
        r = r - t(r) / e(r);
    return r
}
function Ap(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const fM = ["duration", "bounce"]
  , dM = ["stiffness", "damping", "mass"];
function Jy(t, e) {
    return e.some(n => t[n] !== void 0)
}
function hM(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Jy(t, dM) && Jy(t, fM)) {
        const n = lM(t);
        e = {
            ...e,
            ...n,
            velocity: 0,
            mass: 1
        },
        e.isResolvedFromDuration = !0
    }
    return e
}
function cS({keyframes: t, restDelta: e, restSpeed: n, ...r}) {
    const i = t[0]
      , o = t[t.length - 1]
      , s = {
        done: !1,
        value: i
    }
      , {stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d} = hM(r)
      , h = c ? -Yr(c) : 0
      , m = l / (2 * Math.sqrt(a * u))
      , p = o - i
      , x = Yr(Math.sqrt(a / u))
      , y = Math.abs(p) < 5;
    n || (n = y ? .01 : 2),
    e || (e = y ? .005 : .5);
    let g;
    if (m < 1) {
        const v = Ap(x, m);
        g = _ => {
            const w = Math.exp(-m * x * _);
            return o - w * ((h + m * x * p) / v * Math.sin(v * _) + p * Math.cos(v * _))
        }
    } else if (m === 1)
        g = v => o - Math.exp(-x * v) * (p + (h + x * p) * v);
    else {
        const v = x * Math.sqrt(m * m - 1);
        g = _ => {
            const w = Math.exp(-m * x * _)
              , C = Math.min(v * _, 300);
            return o - w * ((h + m * x * p) * Math.sinh(C) + v * p * Math.cosh(C)) / v
        }
    }
    return {
        calculatedDuration: d && f || null,
        next: v => {
            const _ = g(v);
            if (d)
                s.done = v >= f;
            else {
                let w = h;
                v !== 0 && (m < 1 ? w = uS(g, v, _) : w = 0);
                const C = Math.abs(w) <= n
                  , S = Math.abs(o - _) <= e;
                s.done = C && S
            }
            return s.value = s.done ? o : _,
            s
        }
    }
}
function e1({keyframes: t, velocity: e=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const f = t[0]
      , d = {
        done: !1,
        value: f
    }
      , h = T => a !== void 0 && T < a || l !== void 0 && T > l
      , m = T => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
    let p = n * e;
    const x = f + p
      , y = s === void 0 ? x : s(x);
    y !== x && (p = y - f);
    const g = T => -p * Math.exp(-T / r)
      , v = T => y + g(T)
      , _ = T => {
        const M = g(T)
          , A = v(T);
        d.done = Math.abs(M) <= u,
        d.value = d.done ? y : A
    }
    ;
    let w, C;
    const S = T => {
        h(d.value) && (w = T,
        C = cS({
            keyframes: [d.value, m(d.value)],
            velocity: uS(v, T, d.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return S(0),
    {
        calculatedDuration: null,
        next: T => {
            let M = !1;
            return !C && w === void 0 && (M = !0,
            _(T),
            S(T)),
            w !== void 0 && T > w ? C.next(T - w) : (!M && _(T),
            d)
        }
    }
}
const pM = t => {
    const e = ({timestamp: n}) => t(n);
    return {
        start: () => Ce.update(e, !0),
        stop: () => ei(e),
        now: () => ct.isProcessing ? ct.timestamp : performance.now()
    }
}
  , t1 = 2e4;
function n1(t) {
    let e = 0;
    const n = 50;
    let r = t.next(e);
    for (; !r.done && e < t1; )
        e += n,
        r = t.next(e);
    return e >= t1 ? 1 / 0 : e
}
const mM = {
    decay: e1,
    inertia: e1,
    tween: uf,
    keyframes: uf,
    spring: cS
};
function cf({autoplay: t=!0, delay: e=0, driver: n=pM, keyframes: r, type: i="keyframes", repeat: o=0, repeatDelay: s=0, repeatType: a="loop", onPlay: l, onStop: u, onComplete: c, onUpdate: f, ...d}) {
    let h = 1, m = !1, p, x;
    const y = () => {
        x = new Promise(O => {
            p = O
        }
        )
    }
    ;
    y();
    let g;
    const v = mM[i] || uf;
    let _;
    v !== uf && typeof r[0] != "number" && (_ = aS([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const w = v({
        ...d,
        keyframes: r
    });
    let C;
    a === "mirror" && (C = v({
        ...d,
        keyframes: [...r].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let S = "idle"
      , T = null
      , M = null
      , A = null;
    w.calculatedDuration === null && o && (w.calculatedDuration = n1(w));
    const {calculatedDuration: b} = w;
    let D = 1 / 0
      , U = 1 / 0;
    b !== null && (D = b + s,
    U = D * (o + 1) - s);
    let j = 0;
    const F = O => {
        if (M === null)
            return;
        h > 0 && (M = Math.min(M, O)),
        h < 0 && (M = Math.min(O - U / h, M)),
        T !== null ? j = T : j = Math.round(O - M) * h;
        const W = j - e * (h >= 0 ? 1 : -1)
          , ge = h >= 0 ? W < 0 : W > U;
        j = Math.max(W, 0),
        S === "finished" && T === null && (j = U);
        let Z = j
          , oe = w;
        if (o) {
            const Ee = j / D;
            let Ct = Math.floor(Ee)
              , pe = Ee % 1;
            !pe && Ee >= 1 && (pe = 1),
            pe === 1 && Ct--,
            Ct = Math.min(Ct, o + 1);
            const jt = !!(Ct % 2);
            jt && (a === "reverse" ? (pe = 1 - pe,
            s && (pe -= s / D)) : a === "mirror" && (oe = C));
            let ee = $i(0, 1, pe);
            j > U && (ee = a === "reverse" && jt ? 1 : 0),
            Z = ee * D
        }
        const se = ge ? {
            done: !1,
            value: r[0]
        } : oe.next(Z);
        _ && (se.value = _(se.value));
        let {done: he} = se;
        !ge && b !== null && (he = h >= 0 ? j >= U : j <= 0);
        const tt = T === null && (S === "finished" || S === "running" && he);
        return f && f(se.value),
        tt && R(),
        se
    }
      , H = () => {
        g && g.stop(),
        g = void 0
    }
      , I = () => {
        S = "idle",
        H(),
        p(),
        y(),
        M = A = null
    }
      , R = () => {
        S = "finished",
        c && c(),
        H(),
        p()
    }
      , V = () => {
        if (m)
            return;
        g || (g = n(F));
        const O = g.now();
        l && l(),
        T !== null ? M = O - T : (!M || S === "finished") && (M = O),
        S === "finished" && y(),
        A = M,
        T = null,
        S = "running",
        g.start()
    }
    ;
    t && V();
    const k = {
        then(O, W) {
            return x.then(O, W)
        },
        get time() {
            return Yr(j)
        },
        set time(O) {
            O = Li(O),
            j = O,
            T !== null || !g || h === 0 ? T = O : M = g.now() - O / h
        },
        get duration() {
            const O = w.calculatedDuration === null ? n1(w) : w.calculatedDuration;
            return Yr(O)
        },
        get speed() {
            return h
        },
        set speed(O) {
            O === h || !g || (h = O,
            k.time = Yr(j))
        },
        get state() {
            return S
        },
        play: V,
        pause: () => {
            S = "paused",
            T = j
        }
        ,
        stop: () => {
            m = !0,
            S !== "idle" && (S = "idle",
            u && u(),
            I())
        }
        ,
        cancel: () => {
            A !== null && F(A),
            I()
        }
        ,
        complete: () => {
            S = "finished"
        }
        ,
        sample: O => (M = 0,
        F(O))
    };
    return k
}
function gM(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const yM = gM( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , vM = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , Bu = 10
  , xM = 2e4
  , _M = (t, e) => e.type === "spring" || t === "backgroundColor" || !B2(e.ease);
function wM(t, e, {onUpdate: n, onComplete: r, ...i}) {
    if (!(yM() && vM.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let s = !1, a, l;
    const u = () => {
        l = new Promise(g => {
            a = g
        }
        )
    }
    ;
    u();
    let {keyframes: c, duration: f=300, ease: d, times: h} = i;
    if (_M(e, i)) {
        const g = cf({
            ...i,
            repeat: 0,
            delay: 0
        });
        let v = {
            done: !1,
            value: c[0]
        };
        const _ = [];
        let w = 0;
        for (; !v.done && w < xM; )
            v = g.sample(w),
            _.push(v.value),
            w += Bu;
        h = void 0,
        c = _,
        f = w - Bu,
        d = "linear"
    }
    const m = N4(t.owner.current, e, c, {
        ...i,
        duration: f,
        ease: d,
        times: h
    });
    i.syncStart && (m.startTime = ct.isProcessing ? ct.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
    const p = () => m.cancel()
      , x = () => {
        Ce.update(p),
        a(),
        u()
    }
    ;
    return m.onfinish = () => {
        t.set(D4(c, i)),
        r && r(),
        x()
    }
    ,
    {
        then(g, v) {
            return l.then(g, v)
        },
        attachTimeline(g) {
            return m.timeline = g,
            m.onfinish = null,
            Ue
        },
        get time() {
            return Yr(m.currentTime || 0)
        },
        set time(g) {
            m.currentTime = Li(g)
        },
        get speed() {
            return m.playbackRate
        },
        set speed(g) {
            m.playbackRate = g
        },
        get duration() {
            return Yr(f)
        },
        play: () => {
            s || (m.play(),
            ei(p))
        }
        ,
        pause: () => m.pause(),
        stop: () => {
            if (s = !0,
            m.playState === "idle")
                return;
            const {currentTime: g} = m;
            if (g) {
                const v = cf({
                    ...i,
                    autoplay: !1
                });
                t.setWithVelocity(v.sample(g - Bu).value, v.sample(g).value, Bu)
            }
            x()
        }
        ,
        complete: () => m.finish(),
        cancel: x
    }
}
function SM({keyframes: t, delay: e, onUpdate: n, onComplete: r}) {
    const i = () => (n && n(t[t.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: Ue,
        pause: Ue,
        stop: Ue,
        then: o => (o(),
        Promise.resolve()),
        cancel: Ue,
        complete: Ue
    });
    return e ? cf({
        keyframes: [0, 1],
        duration: 0,
        delay: e,
        onComplete: i
    }) : i()
}
const CM = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , kM = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , TM = {
    type: "keyframes",
    duration: .8
}
  , PM = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , EM = (t, {keyframes: e}) => e.length > 2 ? TM : Xo.has(t) ? t.startsWith("scale") ? kM(e[1]) : CM : PM
  , Rp = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ui.test(e) || e === "0") && !e.startsWith("url("))
  , MM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function AM(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [r] = n.match(Hf) || [];
    if (!r)
        return t;
    const i = n.replace(r, "");
    let o = MM.has(e) ? 1 : 0;
    return r !== n && (o *= 100),
    e + "(" + o + i + ")"
}
const RM = /([a-z-]*)\(.*?\)/g
  , Np = {
    ...Ui,
    getAnimatableNone: t => {
        const e = t.match(RM);
        return e ? e.map(AM).join(" ") : t
    }
}
  , NM = {
    ...k2,
    color: zt,
    backgroundColor: zt,
    outlineColor: zt,
    fill: zt,
    stroke: zt,
    borderColor: zt,
    borderTopColor: zt,
    borderRightColor: zt,
    borderBottomColor: zt,
    borderLeftColor: zt,
    filter: Np,
    WebkitFilter: Np
}
  , R0 = t => NM[t];
function fS(t, e) {
    let n = R0(t);
    return n !== Np && (n = Ui),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const dS = t => /^0[^.\s]+$/.test(t);
function DM(t) {
    if (typeof t == "number")
        return t === 0;
    if (t !== null)
        return t === "none" || t === "0" || dS(t)
}
function OM(t, e, n, r) {
    const i = Rp(e, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const s = r.from !== void 0 ? r.from : t.get();
    let a;
    const l = [];
    for (let u = 0; u < o.length; u++)
        o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
        DM(o[u]) && l.push(u),
        typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
    if (i && l.length && a)
        for (let u = 0; u < l.length; u++) {
            const c = l[u];
            o[c] = fS(e, a)
        }
    return o
}
function LM({when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
function hS(t, e) {
    return t[e] || t.default || t
}
const N0 = (t, e, n, r={}) => i => {
    const o = hS(r, t) || {}
      , s = o.delay || r.delay || 0;
    let {elapsed: a=0} = r;
    a = a - Li(s);
    const l = OM(e, t, n, o)
      , u = l[0]
      , c = l[l.length - 1]
      , f = Rp(t, u)
      , d = Rp(t, c);
    let h = {
        keyframes: l,
        velocity: e.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: m => {
            e.set(m),
            o.onUpdate && o.onUpdate(m)
        }
        ,
        onComplete: () => {
            i(),
            o.onComplete && o.onComplete()
        }
    };
    if (LM(o) || (h = {
        ...h,
        ...EM(t, h)
    }),
    h.duration && (h.duration = Li(h.duration)),
    h.repeatDelay && (h.repeatDelay = Li(h.repeatDelay)),
    !f || !d || R4.current || o.type === !1)
        return SM(h);
    if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
        const m = wM(e, t, h);
        if (m)
            return m
    }
    return cf(h)
}
;
function ff(t) {
    return !!(cn(t) && t.add)
}
const pS = t => /^\-?\d*\.?\d+$/.test(t);
function D0(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function O0(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class L0 {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return D0(this.subscriptions, e),
        () => O0(this.subscriptions, e)
    }
    notify(e, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](e, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(e, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const bM = t => !isNaN(parseFloat(t));
class jM {
    constructor(e, n={}) {
        this.version = "10.16.4",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            this.prev = this.current,
            this.current = r;
            const {delta: o, timestamp: s} = ct;
            this.lastUpdated !== s && (this.timeDelta = o,
            this.lastUpdated = s,
            Ce.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => Ce.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r}) => {
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = e,
        this.canTrackVelocity = bM(this.current),
        this.owner = n.owner
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new L0);
        const r = this.events[e].add(n);
        return e === "change" ? () => {
            r(),
            Ce.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, r) {
        this.set(n),
        this.prev = e,
        this.timeDelta = r
    }
    jump(e) {
        this.updateAndNotify(e),
        this.prev = e,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? lS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(e) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function na(t, e) {
    return new jM(t,e)
}
const mS = t => e => e.test(t)
  , VM = {
    test: t => t === "auto",
    parse: t => t
}
  , gS = [Ko, G, Pr, si, UE, $E, VM]
  , Ta = t => gS.find(mS(t))
  , FM = [...gS, zt, Ui]
  , IM = t => FM.find(mS(t));
function zM(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, na(n))
}
function BM(t, e) {
    const n = Gf(t, e);
    let {transitionEnd: r={}, transition: i={}, ...o} = n ? t.makeTargetAnimatable(n, !1) : {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const a = r4(o[s]);
        zM(t, s, a)
    }
}
function $M(t, e, n) {
    var r, i;
    const o = Object.keys(e).filter(a => !t.hasValue(a))
      , s = o.length;
    if (s)
        for (let a = 0; a < s; a++) {
            const l = o[a]
              , u = e[l];
            let c = null;
            Array.isArray(u) && (c = u[0]),
            c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : t.readValue(l)) !== null && i !== void 0 ? i : e[l]),
            c != null && (typeof c == "string" && (pS(c) || dS(c)) ? c = parseFloat(c) : !IM(c) && Ui.test(u) && (c = fS(l, u)),
            t.addValue(l, na(c, {
                owner: t
            })),
            n[l] === void 0 && (n[l] = c),
            c !== null && t.setBaseTarget(l, c))
        }
}
function UM(t, e) {
    return e ? (e[t] || e.default || e).from : void 0
}
function WM(t, e, n) {
    const r = {};
    for (const i in t) {
        const o = UM(i, e);
        if (o !== void 0)
            r[i] = o;
        else {
            const s = n.getValue(i);
            s && (r[i] = s.get())
        }
    }
    return r
}
function HM({protectedKeys: t, needsAnimating: e}, n) {
    const r = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    r
}
function yS(t, e, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: o=t.getDefaultTransition(), transitionEnd: s, ...a} = t.makeTargetAnimatable(e);
    const l = t.getValue("willChange");
    r && (o = r);
    const u = []
      , c = i && t.animationState && t.animationState.getState()[i];
    for (const f in a) {
        const d = t.getValue(f)
          , h = a[f];
        if (!d || h === void 0 || c && HM(c, f))
            continue;
        const m = {
            delay: n,
            elapsed: 0,
            ...o
        };
        if (window.HandoffAppearAnimations && !d.hasAnimated) {
            const x = t.getProps()[M4];
            x && (m.elapsed = window.HandoffAppearAnimations(x, f, d, Ce),
            m.syncStart = !0)
        }
        d.start(N0(f, d, h, t.shouldReduceMotion && Xo.has(f) ? {
            type: !1
        } : m));
        const p = d.animation;
        ff(l) && (l.add(f),
        p.then( () => l.remove(f))),
        u.push(p)
    }
    return s && Promise.all(u).then( () => {
        s && BM(t, s)
    }
    ),
    u
}
function Dp(t, e, n={}) {
    const r = Gf(t, e, n.custom);
    let {transition: i=t.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(yS(t, r, n)) : () => Promise.resolve()
      , s = t.variantChildren && t.variantChildren.size ? (l=0) => {
        const {delayChildren: u=0, staggerChildren: c, staggerDirection: f} = i;
        return YM(t, e, u + l, c, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [l,u] = a === "beforeChildren" ? [o, s] : [s, o];
        return l().then( () => u())
    } else
        return Promise.all([o(), s(n.delay)])
}
function YM(t, e, n=0, r=0, i=1, o) {
    const s = []
      , a = (t.variantChildren.size - 1) * r
      , l = i === 1 ? (u=0) => u * r : (u=0) => a - u * r;
    return Array.from(t.variantChildren).sort(GM).forEach( (u, c) => {
        u.notify("AnimationStart", e),
        s.push(Dp(u, e, {
            ...o,
            delay: n + l(c)
        }).then( () => u.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(s)
}
function GM(t, e) {
    return t.sortNodePosition(e)
}
function XM(t, e, n={}) {
    t.notify("AnimationStart", e);
    let r;
    if (Array.isArray(e)) {
        const i = e.map(o => Dp(t, o, n));
        r = Promise.all(i)
    } else if (typeof e == "string")
        r = Dp(t, e, n);
    else {
        const i = typeof e == "function" ? Gf(t, e, n.custom) : e;
        r = Promise.all(yS(t, i, n))
    }
    return r.then( () => t.notify("AnimationComplete", e))
}
const KM = [...m0].reverse()
  , QM = m0.length;
function qM(t) {
    return e => Promise.all(e.map( ({animation: n, options: r}) => XM(t, n, r)))
}
function ZM(t) {
    let e = qM(t);
    const n = eA();
    let r = !0;
    const i = (l, u) => {
        const c = Gf(t, u);
        if (c) {
            const {transition: f, transitionEnd: d, ...h} = c;
            l = {
                ...l,
                ...h,
                ...d
            }
        }
        return l
    }
    ;
    function o(l) {
        e = l(t)
    }
    function s(l, u) {
        const c = t.getProps()
          , f = t.getVariantContext(!0) || {}
          , d = []
          , h = new Set;
        let m = {}
          , p = 1 / 0;
        for (let y = 0; y < QM; y++) {
            const g = KM[y]
              , v = n[g]
              , _ = c[g] !== void 0 ? c[g] : f[g]
              , w = zl(_)
              , C = g === u ? v.isActive : null;
            C === !1 && (p = y);
            let S = _ === f[g] && _ !== c[g] && w;
            if (S && r && t.manuallyAnimateOnMount && (S = !1),
            v.protectedKeys = {
                ...m
            },
            !v.isActive && C === null || !_ && !v.prevProp || Uf(_) || typeof _ == "boolean")
                continue;
            const T = JM(v.prevProp, _);
            let M = T || g === u && v.isActive && !S && w || y > p && w;
            const A = Array.isArray(_) ? _ : [_];
            let b = A.reduce(i, {});
            C === !1 && (b = {});
            const {prevResolvedValues: D={}} = v
              , U = {
                ...D,
                ...b
            }
              , j = F => {
                M = !0,
                h.delete(F),
                v.needsAnimating[F] = !0
            }
            ;
            for (const F in U) {
                const H = b[F]
                  , I = D[F];
                m.hasOwnProperty(F) || (H !== I ? af(H) && af(I) ? !I2(H, I) || T ? j(F) : v.protectedKeys[F] = !0 : H !== void 0 ? j(F) : h.add(F) : H !== void 0 && h.has(F) ? j(F) : v.protectedKeys[F] = !0)
            }
            v.prevProp = _,
            v.prevResolvedValues = b,
            v.isActive && (m = {
                ...m,
                ...b
            }),
            r && t.blockInitialAnimation && (M = !1),
            M && !S && d.push(...A.map(F => ({
                animation: F,
                options: {
                    type: g,
                    ...l
                }
            })))
        }
        if (h.size) {
            const y = {};
            h.forEach(g => {
                const v = t.getBaseTarget(g);
                v !== void 0 && (y[g] = v)
            }
            ),
            d.push({
                animation: y
            })
        }
        let x = !!d.length;
        return r && c.initial === !1 && !t.manuallyAnimateOnMount && (x = !1),
        r = !1,
        x ? e(d) : Promise.resolve()
    }
    function a(l, u, c) {
        var f;
        if (n[l].isActive === u)
            return Promise.resolve();
        (f = t.variantChildren) === null || f === void 0 || f.forEach(h => {
            var m;
            return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const d = s(c, l);
        for (const h in n)
            n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n
    }
}
function JM(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !I2(e, t) : !1
}
function oo(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function eA() {
    return {
        animate: oo(!0),
        whileInView: oo(),
        whileHover: oo(),
        whileTap: oo(),
        whileDrag: oo(),
        whileFocus: oo(),
        exit: oo()
    }
}
class tA extends Xi {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = ZM(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        this.unmount(),
        Uf(e) && (this.unmount = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let nA = 0;
class rA extends Xi {
    constructor() {
        super(...arguments),
        this.id = nA++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const o = this.node.animationState.setActive("exit", !e, {
            custom: r ?? this.node.getProps().custom
        });
        n && !e && o.then( () => n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const iA = {
    animation: {
        Feature: tA
    },
    exit: {
        Feature: rA
    }
}
  , r1 = (t, e) => Math.abs(t - e);
function oA(t, e) {
    const n = r1(t.x, e.x)
      , r = r1(t.y, e.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class vS {
    constructor(e, n, {transformPagePoint: r}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const u = Gd(this.lastMoveEventInfo, this.history)
              , c = this.startEvent !== null
              , f = oA(u.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!c && !f)
                return;
            const {point: d} = u
              , {timestamp: h} = ct;
            this.history.push({
                ...d,
                timestamp: h
            });
            const {onStart: m, onMove: p} = this.handlers;
            c || (m && m(this.lastMoveEvent, u),
            this.startEvent = this.lastMoveEvent),
            p && p(this.lastMoveEvent, u)
        }
        ,
        this.handlePointerMove = (u, c) => {
            this.lastMoveEvent = u,
            this.lastMoveEventInfo = Yd(c, this.transformPagePoint),
            Ce.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (u, c) => {
            if (this.end(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const {onEnd: f, onSessionEnd: d} = this.handlers
              , h = Gd(u.type === "pointercancel" ? this.lastMoveEventInfo : Yd(c, this.transformPagePoint), this.history);
            this.startEvent && f && f(u, h),
            d && d(u, h)
        }
        ,
        !L2(e))
            return;
        this.handlers = n,
        this.transformPagePoint = r;
        const i = Yf(e)
          , o = Yd(i, this.transformPagePoint)
          , {point: s} = o
          , {timestamp: a} = ct;
        this.history = [{
            ...s,
            timestamp: a
        }];
        const {onSessionStart: l} = n;
        l && l(e, Gd(o, this.history)),
        this.removeListeners = Oi(Hr(window, "pointermove", this.handlePointerMove), Hr(window, "pointerup", this.handlePointerUp), Hr(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        ei(this.updatePoint)
    }
}
function Yd(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function i1(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function Gd({point: t}, e) {
    return {
        point: t,
        delta: i1(t, xS(e)),
        offset: i1(t, sA(e)),
        velocity: aA(e, .1)
    }
}
function sA(t) {
    return t[0]
}
function xS(t) {
    return t[t.length - 1]
}
function aA(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , r = null;
    const i = xS(t);
    for (; n >= 0 && (r = t[n],
    !(i.timestamp - r.timestamp > Li(e))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = Yr(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function Mn(t) {
    return t.max - t.min
}
function Op(t, e=0, n=.01) {
    return Math.abs(t - e) <= n
}
function o1(t, e, n, r=.5) {
    t.origin = r,
    t.originPoint = je(e.min, e.max, t.origin),
    t.scale = Mn(n) / Mn(e),
    (Op(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    t.translate = je(n.min, n.max, t.origin) - t.originPoint,
    (Op(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}
function cl(t, e, n, r) {
    o1(t.x, e.x, n.x, r ? r.originX : void 0),
    o1(t.y, e.y, n.y, r ? r.originY : void 0)
}
function s1(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + Mn(e)
}
function lA(t, e, n) {
    s1(t.x, e.x, n.x),
    s1(t.y, e.y, n.y)
}
function a1(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + Mn(e)
}
function fl(t, e, n) {
    a1(t.x, e.x, n.x),
    a1(t.y, e.y, n.y)
}
function uA(t, {min: e, max: n}, r) {
    return e !== void 0 && t < e ? t = r ? je(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? je(n, t, r.max) : Math.min(t, n)),
    t
}
function l1(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function cA(t, {top: e, left: n, bottom: r, right: i}) {
    return {
        x: l1(t.x, n, i),
        y: l1(t.y, e, r)
    }
}
function u1(t, e) {
    let n = e.min - t.min
      , r = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function fA(t, e) {
    return {
        x: u1(t.x, e.x),
        y: u1(t.y, e.y)
    }
}
function dA(t, e) {
    let n = .5;
    const r = Mn(t)
      , i = Mn(e);
    return i > r ? n = $l(e.min, e.max - r, t.min) : r > i && (n = $l(t.min, t.max - i, e.min)),
    $i(0, 1, n)
}
function hA(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const Lp = .35;
function pA(t=Lp) {
    return t === !1 ? t = 0 : t === !0 && (t = Lp),
    {
        x: c1(t, "left", "right"),
        y: c1(t, "top", "bottom")
    }
}
function c1(t, e, n) {
    return {
        min: f1(t, e),
        max: f1(t, n)
    }
}
function f1(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const d1 = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ms = () => ({
    x: d1(),
    y: d1()
})
  , h1 = () => ({
    min: 0,
    max: 0
})
  , Ke = () => ({
    x: h1(),
    y: h1()
});
function gr(t) {
    return [t("x"), t("y")]
}
function _S({top: t, left: e, right: n, bottom: r}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: r
        }
    }
}
function mA({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function gA(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , r = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Xd(t) {
    return t === void 0 || t === 1
}
function bp({scale: t, scaleX: e, scaleY: n}) {
    return !Xd(t) || !Xd(e) || !Xd(n)
}
function ho(t) {
    return bp(t) || wS(t) || t.z || t.rotate || t.rotateX || t.rotateY
}
function wS(t) {
    return p1(t.x) || p1(t.y)
}
function p1(t) {
    return t && t !== "0%"
}
function df(t, e, n) {
    const r = t - n
      , i = e * r;
    return n + i
}
function m1(t, e, n, r, i) {
    return i !== void 0 && (t = df(t, i, r)),
    df(t, n, r) + e
}
function jp(t, e=0, n=1, r, i) {
    t.min = m1(t.min, e, n, r, i),
    t.max = m1(t.max, e, n, r, i)
}
function SS(t, {x: e, y: n}) {
    jp(t.x, e.translate, e.scale, e.originPoint),
    jp(t.y, n.translate, n.scale, n.originPoint)
}
function yA(t, e, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    e.x = e.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a],
        s = o.projectionDelta;
        const l = o.instance;
        l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && As(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (e.x *= s.x.scale,
        e.y *= s.y.scale,
        SS(t, s)),
        r && ho(o.latestValues) && As(t, o.latestValues))
    }
    e.x = g1(e.x),
    e.y = g1(e.y)
}
function g1(t) {
    return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
}
function ui(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function y1(t, e, [n,r,i]) {
    const o = e[i] !== void 0 ? e[i] : .5
      , s = je(t.min, t.max, o);
    jp(t, e[n], e[r], s, e.scale)
}
const vA = ["x", "scaleX", "originX"]
  , xA = ["y", "scaleY", "originY"];
function As(t, e) {
    y1(t.x, e, vA),
    y1(t.y, e, xA)
}
function CS(t, e) {
    return _S(gA(t.getBoundingClientRect(), e))
}
function _A(t, e, n) {
    const r = CS(t, n)
      , {scroll: i} = e;
    return i && (ui(r.x, i.offset.x),
    ui(r.y, i.offset.y)),
    r
}
const wA = new WeakMap;
class SA {
    constructor(e) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ke(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = l => {
            this.stopAnimation(),
            n && this.snapToCursor(Yf(l, "page").point)
        }
          , o = (l, u) => {
            const {drag: c, dragPropagation: f, onDragStart: d} = this.getProps();
            if (c && !f && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = j2(c),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            gr(m => {
                let p = this.getAxisMotionValue(m).get() || 0;
                if (Pr.test(p)) {
                    const {projection: x} = this.visualElement;
                    if (x && x.layout) {
                        const y = x.layout.layoutBox[m];
                        y && (p = Mn(y) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[m] = p
            }
            ),
            d && Ce.update( () => d(l, u), !1, !0);
            const {animationState: h} = this.visualElement;
            h && h.setActive("whileDrag", !0)
        }
          , s = (l, u) => {
            const {dragPropagation: c, dragDirectionLock: f, onDirectionLock: d, onDrag: h} = this.getProps();
            if (!c && !this.openGlobalLock)
                return;
            const {offset: m} = u;
            if (f && this.currentDirection === null) {
                this.currentDirection = CA(m),
                this.currentDirection !== null && d && d(this.currentDirection);
                return
            }
            this.updateAxis("x", u.point, m),
            this.updateAxis("y", u.point, m),
            this.visualElement.render(),
            h && h(l, u)
        }
          , a = (l, u) => this.stop(l, u);
        this.panSession = new vS(e,{
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(e, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && Ce.update( () => o(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !$u(e, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(e);
        let s = this.originPoint[e] + r[e];
        this.constraints && this.constraints[e] && (s = uA(s, this.constraints[e], this.elastic[e])),
        o.set(s)
    }
    resolveConstraints() {
        const {dragConstraints: e, dragElastic: n} = this.getProps()
          , {layout: r} = this.visualElement.projection || {}
          , i = this.constraints;
        e && Ps(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = cA(r.layoutBox, e) : this.constraints = !1,
        this.elastic = pA(n),
        i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && gr(o => {
            this.getAxisMotionValue(o) && (this.constraints[o] = hA(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !Ps(e))
            return !1;
        const r = e.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = _A(r, i.root, this.visualElement.getTransformPagePoint());
        let s = fA(i.layout.layoutBox, o);
        if (n) {
            const a = n(mA(s));
            this.hasMutatedConstraints = !!a,
            a && (s = _S(a))
        }
        return s
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = gr(c => {
            if (!$u(c, n, this.currentDirection))
                return;
            let f = l && l[c] || {};
            s && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , h = i ? 40 : 1e7
              , m = {
                type: "inertia",
                velocity: r ? e[c] : 0,
                bounceStiffness: d,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...f
            };
            return this.startAxisValueAnimation(c, m)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(e, n) {
        const r = this.getAxisMotionValue(e);
        return r.start(N0(e, r, 0, n))
    }
    stopAnimation() {
        gr(e => this.getAxisMotionValue(e).stop())
    }
    getAxisMotionValue(e) {
        const n = "_drag" + e.toUpperCase()
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        gr(n => {
            const {drag: r} = this.getProps();
            if (!$u(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: a} = i.layout.layoutBox[n];
                o.set(e[n] - je(s, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Ps(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        gr(s => {
            const a = this.getAxisMotionValue(s);
            if (a) {
                const l = a.get();
                i[s] = dA({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        gr(s => {
            if (!$u(s, e, null))
                return;
            const a = this.getAxisMotionValue(s)
              , {min: l, max: u} = this.constraints[s];
            a.set(je(l, u, i[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        wA.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = Hr(e, "pointerdown", l => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(l)
        }
        )
          , r = () => {
            const {dragConstraints: l} = this.getProps();
            Ps(l) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        r();
        const s = Br(window, "resize", () => this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u}) => {
            this.isDragging && u && (gr(c => {
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += l[c].translate,
                f.set(f.get() + l[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            s(),
            n(),
            o(),
            a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=Lp, dragMomentum: a=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function $u(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function CA(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class kA extends Xi {
    constructor(e) {
        super(e),
        this.removeGroupControls = Ue,
        this.removeListeners = Ue,
        this.controls = new SA(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ue
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const v1 = t => (e, n) => {
    t && Ce.update( () => t(e, n))
}
;
class TA extends Xi {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ue
    }
    onPointerDown(e) {
        this.session = new vS(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: v1(e),
            onStart: v1(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session,
                i && Ce.update( () => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Hr(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function PA() {
    const t = E.useContext(Bf);
    if (t === null)
        return [!0, null];
    const {isPresent: e, onExitComplete: n, register: r} = t
      , i = E.useId();
    return E.useEffect( () => r(i), []),
    !e && n ? [!1, () => n && n(i)] : [!0]
}
const mc = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function x1(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Pa = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (G.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = x1(t, e.target.x)
          , r = x1(t, e.target.y);
        return `${n}% ${r}%`
    }
}
  , EA = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const r = t
          , i = Ui.parse(t);
        if (i.length > 5)
            return r;
        const o = Ui.createTransformer(t)
          , s = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * e.x
          , l = n.y.scale * e.y;
        i[0 + s] /= a,
        i[1 + s] /= l;
        const u = je(a, l, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
    }
};
class MA extends di.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = e;
        bE(AA),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })),
        mc.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , s = r.projection;
        return s && (s.isPresent = o,
        i || e.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        e.isPresent !== o && (o ? s.promote() : s.relegate() || Ce.postRender( () => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        queueMicrotask( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = e;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function kS(t) {
    const [e,n] = PA()
      , r = E.useContext(y0);
    return di.createElement(MA, {
        ...t,
        layoutGroup: r,
        switchLayoutGroup: E.useContext(x2),
        isPresent: e,
        safeToRemove: n
    })
}
const AA = {
    borderRadius: {
        ...Pa,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Pa,
    borderTopRightRadius: Pa,
    borderBottomLeftRadius: Pa,
    borderBottomRightRadius: Pa,
    boxShadow: EA
}
  , TS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , RA = TS.length
  , _1 = t => typeof t == "string" ? parseFloat(t) : t
  , w1 = t => typeof t == "number" || G.test(t);
function NA(t, e, n, r, i, o) {
    i ? (t.opacity = je(0, n.opacity !== void 0 ? n.opacity : 1, DA(r)),
    t.opacityExit = je(e.opacity !== void 0 ? e.opacity : 1, 0, OA(r))) : o && (t.opacity = je(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < RA; s++) {
        const a = `border${TS[s]}Radius`;
        let l = S1(e, a)
          , u = S1(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || w1(l) === w1(u) ? (t[a] = Math.max(je(_1(l), _1(u), r), 0),
        (Pr.test(u) || Pr.test(l)) && (t[a] += "%")) : t[a] = u
    }
    (e.rotate || n.rotate) && (t.rotate = je(e.rotate || 0, n.rotate || 0, r))
}
function S1(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const DA = PS(0, .5, E0)
  , OA = PS(.5, .95, Ue);
function PS(t, e, n) {
    return r => r < t ? 0 : r > e ? 1 : n($l(t, e, r))
}
function C1(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Nn(t, e) {
    C1(t.x, e.x),
    C1(t.y, e.y)
}
function k1(t, e, n, r, i) {
    return t -= e,
    t = df(t, 1 / n, r),
    i !== void 0 && (t = df(t, 1 / i, r)),
    t
}
function LA(t, e=0, n=1, r=.5, i, o=t, s=t) {
    if (Pr.test(e) && (e = parseFloat(e),
    e = je(s.min, s.max, e / 100) - s.min),
    typeof e != "number")
        return;
    let a = je(o.min, o.max, r);
    t === o && (a -= e),
    t.min = k1(t.min, e, n, a, i),
    t.max = k1(t.max, e, n, a, i)
}
function T1(t, e, [n,r,i], o, s) {
    LA(t, e[n], e[r], e[i], e.scale, o, s)
}
const bA = ["x", "scaleX", "originX"]
  , jA = ["y", "scaleY", "originY"];
function P1(t, e, n, r) {
    T1(t.x, e, bA, n ? n.x : void 0, r ? r.x : void 0),
    T1(t.y, e, jA, n ? n.y : void 0, r ? r.y : void 0)
}
function E1(t) {
    return t.translate === 0 && t.scale === 1
}
function ES(t) {
    return E1(t.x) && E1(t.y)
}
function VA(t, e) {
    return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
}
function MS(t, e) {
    return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
}
function M1(t) {
    return Mn(t.x) / Mn(t.y)
}
class FA {
    constructor() {
        this.members = []
    }
    add(e) {
        D0(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (O0(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(e, n) {
        const r = this.lead;
        if (e !== r && (this.prevLead = r,
        this.lead = e,
        e.show(),
        r)) {
            r.instance && r.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = r,
            n && (e.resumeFrom.preserveOpacity = !0),
            r.snapshot && (e.snapshot = r.snapshot,
            e.snapshot.latestValues = r.animationValues || r.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: i} = e.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: n, resumingFrom: r} = e;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function A1(t, e, n) {
    let r = "";
    const i = t.x.translate / e.x
      , o = t.y.translate / e.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {rotate: l, rotateX: u, rotateY: c} = n;
        l && (r += `rotate(${l}deg) `),
        u && (r += `rotateX(${u}deg) `),
        c && (r += `rotateY(${c}deg) `)
    }
    const s = t.x.scale * e.x
      , a = t.y.scale * e.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`),
    r || "none"
}
const IA = (t, e) => t.depth - e.depth;
class zA {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        D0(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        O0(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(IA),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function BA(t, e) {
    const n = performance.now()
      , r = ({timestamp: i}) => {
        const o = i - n;
        o >= e && (ei(r),
        t(o - e))
    }
    ;
    return Ce.read(r, !0),
    () => ei(r)
}
function $A(t) {
    window.MotionDebug && window.MotionDebug.record(t)
}
function UA(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
function WA(t, e, n) {
    const r = cn(t) ? t : na(t);
    return r.start(N0("", r, e, n)),
    r.animation
}
const R1 = ["", "X", "Y", "Z"]
  , N1 = 1e3;
let HA = 0;
const po = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function AS({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s={}, a=e == null ? void 0 : e()) {
            this.id = HA++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                po.totalNodes = po.resolvedTargetDeltas = po.recalculatedProjection = 0,
                this.nodes.forEach(XA),
                this.nodes.forEach(JA),
                this.nodes.forEach(eR),
                this.nodes.forEach(KA),
                $A(po)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new zA)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new L0),
            this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = UA(s),
            this.instance = s;
            const {layoutId: l, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (u || l) && (this.isLayoutDirty = !0),
            t) {
                let f;
                const d = () => this.root.updateBlockedByResize = !1;
                t(s, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = BA(d, 250),
                    mc.hasAnimatedSinceResize && (mc.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(O1))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: h, layout: m}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const p = this.options.transition || c.getDefaultTransition() || oR
                  , {onLayoutAnimationStart: x, onLayoutAnimationComplete: y} = c.getProps()
                  , g = !this.targetLayout || !MS(this.targetLayout, m) || h
                  , v = !d && h;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || d && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, v);
                    const _ = {
                        ...hS(p, "layout"),
                        onPlay: x,
                        onComplete: y
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0,
                    _.type = !1),
                    this.startAnimation(_)
                } else
                    d || O1(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = m
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            ei(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(tR),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(D1);
                return
            }
            this.isUpdating || this.nodes.forEach(qA),
            this.isUpdating = !1,
            this.nodes.forEach(ZA),
            this.nodes.forEach(YA),
            this.nodes.forEach(GA),
            this.clearAllSnapshots();
            const a = performance.now();
            ct.delta = $i(0, 1e3 / 60, a - ct.timestamp),
            ct.timestamp = a,
            ct.isProcessing = !0,
            Fd.update.process(ct),
            Fd.preRender.process(ct),
            Fd.render.process(ct),
            ct.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(QA),
            this.sharedNodes.forEach(nR)
        }
        scheduleUpdateProjection() {
            Ce.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            Ce.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Ke(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
            a && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
              , a = this.projectionDelta && !ES(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && (a || ho(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
            sR(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: s} = this.options;
            if (!s)
                return Ke();
            const a = s.measureViewportBox()
              , {scroll: l} = this.root;
            return l && (ui(a.x, l.offset.x),
            ui(a.y, l.offset.y)),
            a
        }
        removeElementScroll(s) {
            const a = Ke();
            Nn(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l]
                  , {scroll: c, options: f} = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        Nn(a, s);
                        const {scroll: d} = this.root;
                        d && (ui(a.x, -d.offset.x),
                        ui(a.y, -d.offset.y))
                    }
                    ui(a.x, c.offset.x),
                    ui(a.y, c.offset.y)
                }
            }
            return a
        }
        applyTransform(s, a=!1) {
            const l = Ke();
            Nn(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && As(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                ho(c.latestValues) && As(l, c.latestValues)
            }
            return ho(this.latestValues) && As(l, this.latestValues),
            l
        }
        removeTransform(s) {
            const a = Ke();
            Nn(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !ho(u.latestValues))
                    continue;
                bp(u.latestValues) && u.updateSnapshot();
                const c = Ke()
                  , f = u.measurePageBox();
                Nn(c, f),
                P1(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return ho(this.latestValues) && P1(a, this.latestValues),
            a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ct.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = ct.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const h = this.getClosestProjectingParent();
                    h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Ke(),
                    this.relativeTargetOrigin = Ke(),
                    fl(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
                    Nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ke(),
                    this.targetWithTransforms = Ke()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    lA(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Nn(this.target, this.layout.layoutBox),
                    SS(this.target, this.targetDelta)) : Nn(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const h = this.getClosestProjectingParent();
                        h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Ke(),
                        this.relativeTargetOrigin = Ke(),
                        fl(this.relativeTargetOrigin, this.target, h.target),
                        Nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    po.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || bp(this.parent.latestValues) || wS(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead()
              , l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === ct.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
                return;
            Nn(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , h = this.treeScale.y;
            yA(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const {target: m} = a;
            if (!m) {
                this.projectionTransform && (this.projectionDelta = Ms(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Ms(),
            this.projectionDeltaWithTransform = Ms());
            const p = this.projectionTransform;
            cl(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
            this.projectionTransform = A1(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== p || this.treeScale.x !== d || this.treeScale.y !== h) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", m)),
            po.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = Ms();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const d = Ke()
              , h = l ? l.source : void 0
              , m = this.layout ? this.layout.source : void 0
              , p = h !== m
              , x = this.getStack()
              , y = !x || x.members.length <= 1
              , g = !!(p && !y && this.options.crossfade === !0 && !this.path.some(iR));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = _ => {
                const w = _ / 1e3;
                L1(f.x, s.x, w),
                L1(f.y, s.y, w),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (fl(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                rR(this.relativeTarget, this.relativeTargetOrigin, d, w),
                v && VA(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = Ke()),
                Nn(v, this.relativeTarget)),
                p && (this.animationValues = c,
                NA(c, u, this.latestValues, w, g, y)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = w
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (ei(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ce.update( () => {
                mc.hasAnimatedSinceResize = !0,
                this.currentAnimation = WA(0, N1, {
                    ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        s.onUpdate && s.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(N1),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && RS(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ke();
                    const f = Mn(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                    l.x.max = l.x.min + f;
                    const d = Mn(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                    l.y.max = l.y.min + d
                }
                Nn(a, l),
                As(a, c),
                cl(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new FA),
            this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: a} = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: a} = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let a = !1;
            const {latestValues: l} = s;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0),
            !a)
                return;
            const u = {};
            for (let c = 0; c < R1.length; c++) {
                const f = "rotate" + R1[c];
                l[f] && (u[f] = l[f],
                s.setStaticValue(f, 0))
            }
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s={}) {
            var a, l;
            const u = {};
            if (!this.instance || this.isSVG)
                return u;
            if (this.isVisible)
                u.visibility = "";
            else
                return {
                    visibility: "hidden"
                };
            const c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = pc(s.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const p = {};
                return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                p.pointerEvents = pc(s.pointerEvents) || ""),
                this.hasProjected && !ho(this.latestValues) && (p.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                p
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = A1(this.projectionDeltaWithTransform, this.treeScale, d),
            c && (u.transform = c(d, u.transform));
            const {x: h, y: m} = this.projectionDelta;
            u.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const p in of) {
                if (d[p] === void 0)
                    continue;
                const {correct: x, applyTo: y} = of[p]
                  , g = u.transform === "none" ? d[p] : x(d[p], f);
                if (y) {
                    const v = y.length;
                    for (let _ = 0; _ < v; _++)
                        u[y[_]] = g
                } else
                    u[p] = g
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? pc(s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(D1),
            this.root.sharedNodes.clear()
        }
    }
}
function YA(t) {
    t.updateLayout()
}
function GA(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = t.layout
          , {animationType: o} = t.options
          , s = n.source !== t.layout.source;
        o === "size" ? gr(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , h = Mn(d);
            d.min = r[f].min,
            d.max = d.min + h
        }
        ) : RS(o, n.layoutBox, r) && gr(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , h = Mn(r[f]);
            d.max = d.min + h,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[f].max = t.relativeTarget[f].min + h)
        }
        );
        const a = Ms();
        cl(a, r, n.layoutBox);
        const l = Ms();
        s ? cl(l, t.applyTransform(i, !0), n.measuredBox) : cl(l, r, n.layoutBox);
        const u = !ES(a);
        let c = !1;
        if (!t.resumeFrom) {
            const f = t.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: h} = f;
                if (d && h) {
                    const m = Ke();
                    fl(m, n.layoutBox, d.layoutBox);
                    const p = Ke();
                    fl(p, r, h.layoutBox),
                    MS(m, p) || (c = !0),
                    f.options.layoutRoot && (t.relativeTarget = p,
                    t.relativeTargetOrigin = m,
                    t.relativeParent = f)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (t.isLead()) {
        const {onExitComplete: r} = t.options;
        r && r()
    }
    t.options.transition = void 0
}
function XA(t) {
    po.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function KA(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function QA(t) {
    t.clearSnapshot()
}
function D1(t) {
    t.clearMeasurements()
}
function qA(t) {
    t.isLayoutDirty = !1
}
function ZA(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function O1(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function JA(t) {
    t.resolveTargetDelta()
}
function eR(t) {
    t.calcProjection()
}
function tR(t) {
    t.resetRotation()
}
function nR(t) {
    t.removeLeadSnapshot()
}
function L1(t, e, n) {
    t.translate = je(e.translate, 0, n),
    t.scale = je(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function b1(t, e, n, r) {
    t.min = je(e.min, n.min, r),
    t.max = je(e.max, n.max, r)
}
function rR(t, e, n, r) {
    b1(t.x, e.x, n.x, r),
    b1(t.y, e.y, n.y, r)
}
function iR(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const oR = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , j1 = t => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t)
  , V1 = j1("applewebkit/") && !j1("chrome/") ? Math.round : Ue;
function F1(t) {
    t.min = V1(t.min),
    t.max = V1(t.max)
}
function sR(t) {
    F1(t.x),
    F1(t.y)
}
function RS(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !Op(M1(e), M1(n), .2)
}
const aR = AS({
    attachResizeListener: (t, e) => Br(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Kd = {
    current: void 0
}
  , NS = AS({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!Kd.current) {
            const t = new aR({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            Kd.current = t
        }
        return Kd.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , lR = {
    pan: {
        Feature: TA
    },
    drag: {
        Feature: kA,
        ProjectionNode: NS,
        MeasureLayout: kS
    }
}
  , uR = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function cR(t) {
    const e = uR.exec(t);
    if (!e)
        return [, ];
    const [,n,r] = e;
    return [n, r]
}
function Vp(t, e, n=1) {
    const [r,i] = cR(t);
    if (!r)
        return;
    const o = window.getComputedStyle(e).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return pS(s) ? parseFloat(s) : s
    } else
        return Pp(i) ? Vp(i, e, n + 1) : i
}
function fR(t, {...e}, n) {
    const r = t.current;
    if (!(r instanceof Element))
        return {
            target: e,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    t.values.forEach(i => {
        const o = i.get();
        if (!Pp(o))
            return;
        const s = Vp(o, r);
        s && i.set(s)
    }
    );
    for (const i in e) {
        const o = e[i];
        if (!Pp(o))
            continue;
        const s = Vp(o, r);
        s && (e[i] = s,
        n || (n = {}),
        n[i] === void 0 && (n[i] = o))
    }
    return {
        target: e,
        transitionEnd: n
    }
}
const dR = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , DS = t => dR.has(t)
  , hR = t => Object.keys(t).some(DS)
  , I1 = t => t === Ko || t === G
  , z1 = (t, e) => parseFloat(t.split(", ")[e])
  , B1 = (t, e) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
        return z1(i[1], e);
    {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? z1(o[1], t) : 0
    }
}
  , pR = new Set(["x", "y", "z"])
  , mR = Jl.filter(t => !pR.has(t));
function gR(t) {
    const e = [];
    return mR.forEach(n => {
        const r = t.getValue(n);
        r !== void 0 && (e.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e.length && t.render(),
    e
}
const ra = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: B1(4, 13),
    y: B1(5, 14)
};
ra.translateX = ra.x;
ra.translateY = ra.y;
const yR = (t, e, n) => {
    const r = e.measureViewportBox()
      , i = e.current
      , o = getComputedStyle(i)
      , {display: s} = o
      , a = {};
    s === "none" && e.setStaticValue("display", t.display || "block"),
    n.forEach(u => {
        a[u] = ra[u](r, o)
    }
    ),
    e.render();
    const l = e.measureViewportBox();
    return n.forEach(u => {
        const c = e.getValue(u);
        c && c.jump(a[u]),
        t[u] = ra[u](l, o)
    }
    ),
    t
}
  , vR = (t, e, n={}, r={}) => {
    e = {
        ...e
    },
    r = {
        ...r
    };
    const i = Object.keys(e).filter(DS);
    let o = []
      , s = !1;
    const a = [];
    if (i.forEach(l => {
        const u = t.getValue(l);
        if (!t.hasValue(l))
            return;
        let c = n[l]
          , f = Ta(c);
        const d = e[l];
        let h;
        if (af(d)) {
            const m = d.length
              , p = d[0] === null ? 1 : 0;
            c = d[p],
            f = Ta(c);
            for (let x = p; x < m && d[x] !== null; x++)
                h ? P0(Ta(d[x]) === h) : h = Ta(d[x])
        } else
            h = Ta(d);
        if (f !== h)
            if (I1(f) && I1(h)) {
                const m = u.get();
                typeof m == "string" && u.set(parseFloat(m)),
                typeof d == "string" ? e[l] = parseFloat(d) : Array.isArray(d) && h === G && (e[l] = d.map(parseFloat))
            } else
                f != null && f.transform && (h != null && h.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(h.transform(c)) : e[l] = f.transform(d) : (s || (o = gR(t),
                s = !0),
                a.push(l),
                r[l] = r[l] !== void 0 ? r[l] : e[l],
                u.jump(d))
    }
    ),
    a.length) {
        const l = a.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = yR(e, t, a);
        return o.length && o.forEach( ([c,f]) => {
            t.getValue(c).set(f)
        }
        ),
        t.render(),
        $f && l !== null && window.scrollTo({
            top: l
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: e,
            transitionEnd: r
        }
}
;
function xR(t, e, n, r) {
    return hR(e) ? vR(t, e, n, r) : {
        target: e,
        transitionEnd: r
    }
}
const _R = (t, e, n, r) => {
    const i = fR(t, e, r);
    return e = i.target,
    r = i.transitionEnd,
    xR(t, e, n, r)
}
  , Fp = {
    current: null
}
  , OS = {
    current: !1
};
function wR() {
    if (OS.current = !0,
    !!$f)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => Fp.current = t.matches;
            t.addListener(e),
            e()
        } else
            Fp.current = !1
}
function SR(t, e, n) {
    const {willChange: r} = e;
    for (const i in e) {
        const o = e[i]
          , s = n[i];
        if (cn(o))
            t.addValue(i, o),
            ff(r) && r.add(i);
        else if (cn(s))
            t.addValue(i, na(o, {
                owner: t
            })),
            ff(r) && r.remove(i);
        else if (s !== o)
            if (t.hasValue(i)) {
                const a = t.getValue(i);
                !a.hasAnimated && a.set(o)
            } else {
                const a = t.getStaticValue(i);
                t.addValue(i, na(a !== void 0 ? a : o, {
                    owner: t
                }))
            }
    }
    for (const i in n)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const $1 = new WeakMap
  , LS = Object.keys(Bl)
  , CR = LS.length
  , U1 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , kR = g0.length;
class TR {
    constructor({parent: e, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o}, s={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => Ce.render(this.render, !1, !0);
        const {latestValues: a, renderState: l} = o;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = l,
        this.parent = e,
        this.props = n,
        this.presenceContext = r,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = s,
        this.isControllingVariants = Wf(n),
        this.isVariantNode = v2(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: u, ...c} = this.scrapeMotionValuesFromProps(n, {});
        for (const f in c) {
            const d = c[f];
            a[f] !== void 0 && cn(d) && (d.set(a[f], !1),
            ff(u) && u.add(f))
        }
    }
    scrapeMotionValuesFromProps(e, n) {
        return {}
    }
    mount(e) {
        this.current = e,
        $1.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        OS.current || wR(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Fp.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        $1.delete(this.current),
        this.projection && this.projection.unmount(),
        ei(this.notifyUpdate),
        ei(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features)
            this.features[e].unmount();
        this.current = null
    }
    bindToMotionValue(e, n) {
        const r = Xo.has(e)
          , i = n.on("change", s => {
            this.latestValues[e] = s,
            this.props.onUpdate && Ce.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, () => {
            i(),
            o()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    loadFeatures({children: e, ...n}, r, i, o) {
        let s, a;
        for (let l = 0; l < CR; l++) {
            const u = LS[l]
              , {isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: h} = Bl[u];
            d && (s = d),
            c(n) && (!this.features[u] && f && (this.features[u] = new f(this)),
            h && (a = h))
        }
        if (!this.projection && s) {
            this.projection = new s(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: h} = n;
            this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || f && Ps(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: o,
                layoutScroll: d,
                layoutRoot: h
            })
        }
        return a
    }
    updateFeatures() {
        for (const e in this.features) {
            const n = this.features[e];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ke()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    makeTargetAnimatable(e, n=!0) {
        return this.makeTargetAnimatableFromInstance(e, this.props, n)
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < U1.length; r++) {
            const i = U1[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = e["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = SR(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(e=!1) {
        if (e)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < kR; r++) {
            const i = g0[r]
              , o = this.props[i];
            (zl(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        n !== this.values.get(e) && (this.removeValue(e),
        this.bindToMotionValue(e, n)),
        this.values.set(e, n),
        this.latestValues[e] = n.get()
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let r = this.values.get(e);
        return r === void 0 && n !== void 0 && (r = na(n, {
            owner: this
        }),
        this.addValue(e, r)),
        r
    }
    readValue(e) {
        var n;
        return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options)
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: r} = this.props
          , i = typeof r == "string" || typeof r == "object" ? (n = T0(this.props, r)) === null || n === void 0 ? void 0 : n[e] : void 0;
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, e);
        return o !== void 0 && !cn(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new L0),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class bS extends TR {
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: r}) {
        delete n[e],
        delete r[e]
    }
    makeTargetAnimatableFromInstance({transition: e, transitionEnd: n, ...r}, {transformValues: i}, o) {
        let s = WM(r, e || {}, this);
        if (i && (n && (n = i(n)),
        r && (r = i(r)),
        s && (s = i(s))),
        o) {
            $M(this, r, s);
            const a = _R(this, r, s, n);
            n = a.transitionEnd,
            r = a.target
        }
        return {
            transition: e,
            transitionEnd: n,
            ...r
        }
    }
}
function PR(t) {
    return window.getComputedStyle(t)
}
class ER extends bS {
    readValueFromInstance(e, n) {
        if (Xo.has(n)) {
            const r = R0(n);
            return r && r.default || 0
        } else {
            const r = PR(e)
              , i = (S2(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return CS(e, n)
    }
    build(e, n, r, i) {
        x0(e, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n) {
        return k0(e, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        cn(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(e, n, r, i) {
        M2(e, n, r, i)
    }
}
class MR extends bS {
    constructor() {
        super(...arguments),
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (Xo.has(n)) {
            const r = R0(n);
            return r && r.default || 0
        }
        return n = A2.has(n) ? n : C0(n),
        e.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return Ke()
    }
    scrapeMotionValuesFromProps(e, n) {
        return N2(e, n)
    }
    build(e, n, r, i) {
        w0(e, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, r, i) {
        R2(e, n, r, i)
    }
    mount(e) {
        this.isSVGTag = S0(e.tagName),
        super.mount(e)
    }
}
const AR = (t, e) => v0(t) ? new MR(e,{
    enableHardwareAcceleration: !1
}) : new ER(e,{
    enableHardwareAcceleration: !0
})
  , RR = {
    layout: {
        ProjectionNode: NS,
        MeasureLayout: kS
    }
}
  , NR = {
    ...iA,
    ...k4,
    ...lR,
    ...RR
}
  , W1 = OE( (t, e) => f4(t, e, NR, AR));
function jS() {
    const t = E.useRef(!1);
    return p0( () => (t.current = !0,
    () => {
        t.current = !1
    }
    ), []),
    t
}
function DR() {
    const t = jS()
      , [e,n] = E.useState(0)
      , r = E.useCallback( () => {
        t.current && n(e + 1)
    }
    , [e]);
    return [E.useCallback( () => Ce.postRender(r), [r]), e]
}
class OR extends E.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function LR({children: t, isPresent: e}) {
    const n = E.useId()
      , r = E.useRef(null)
      , i = E.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    return E.useInsertionEffect( () => {
        const {width: o, height: s, top: a, left: l} = i.current;
        if (e || !r.current || !o || !s)
            return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return document.head.appendChild(u),
        u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
            document.head.removeChild(u)
        }
    }
    , [e]),
    E.createElement(OR, {
        isPresent: e,
        childRef: r,
        sizeRef: i
    }, E.cloneElement(t, {
        ref: r
    }))
}
const Qd = ({children: t, initial: e, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s}) => {
    const a = D2(bR)
      , l = E.useId()
      , u = E.useMemo( () => ({
        id: l,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: c => {
            a.set(c, !0);
            for (const f of a.values())
                if (!f)
                    return;
            r && r()
        }
        ,
        register: c => (a.set(c, !1),
        () => a.delete(c))
    }), o ? void 0 : [n]);
    return E.useMemo( () => {
        a.forEach( (c, f) => a.set(f, !1))
    }
    , [n]),
    E.useEffect( () => {
        !n && !a.size && r && r()
    }
    , [n]),
    s === "popLayout" && (t = E.createElement(LR, {
        isPresent: n
    }, t)),
    E.createElement(Bf.Provider, {
        value: u
    }, t)
}
;
function bR() {
    return new Map
}
function jR(t) {
    return E.useEffect( () => () => t(), [])
}
const us = t => t.key || "";
function VR(t, e) {
    t.forEach(n => {
        const r = us(n);
        e.set(r, n)
    }
    )
}
function FR(t) {
    const e = [];
    return E.Children.forEach(t, n => {
        E.isValidElement(n) && e.push(n)
    }
    ),
    e
}
const IR = ({children: t, custom: e, initial: n=!0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o=!0, mode: s="sync"}) => {
    const a = E.useContext(y0).forceRender || DR()[0]
      , l = jS()
      , u = FR(t);
    let c = u;
    const f = E.useRef(new Map).current
      , d = E.useRef(c)
      , h = E.useRef(new Map).current
      , m = E.useRef(!0);
    if (p0( () => {
        m.current = !1,
        VR(u, h),
        d.current = c
    }
    ),
    jR( () => {
        m.current = !0,
        h.clear(),
        f.clear()
    }
    ),
    m.current)
        return E.createElement(E.Fragment, null, c.map(g => E.createElement(Qd, {
            key: us(g),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s
        }, g)));
    c = [...c];
    const p = d.current.map(us)
      , x = u.map(us)
      , y = p.length;
    for (let g = 0; g < y; g++) {
        const v = p[g];
        x.indexOf(v) === -1 && !f.has(v) && f.set(v, void 0)
    }
    return s === "wait" && f.size && (c = []),
    f.forEach( (g, v) => {
        if (x.indexOf(v) !== -1)
            return;
        const _ = h.get(v);
        if (!_)
            return;
        const w = p.indexOf(v);
        let C = g;
        if (!C) {
            const S = () => {
                h.delete(v),
                f.delete(v);
                const T = d.current.findIndex(M => M.key === v);
                if (d.current.splice(T, 1),
                !f.size) {
                    if (d.current = u,
                    l.current === !1)
                        return;
                    a(),
                    r && r()
                }
            }
            ;
            C = E.createElement(Qd, {
                key: us(_),
                isPresent: !1,
                onExitComplete: S,
                custom: e,
                presenceAffectsLayout: o,
                mode: s
            }, _),
            f.set(v, C)
        }
        c.splice(w, 0, C)
    }
    ),
    c = c.map(g => {
        const v = g.key;
        return f.has(v) ? g : E.createElement(Qd, {
            key: us(g),
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: s
        }, g)
    }
    ),
    E.createElement(E.Fragment, null, f.size ? c : c.map(g => E.cloneElement(g)))
}
  , ru = t => () => P.jsxs(P.Fragment, {
    children: [P.jsx(t, {}), P.jsx(W1.div, {
        className: "slide-in",
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 0
        },
        exit: {
            scaleY: 1
        },
        transition: {
            duration: 1,
            ease: [.22, 1, .36, 1]
        }
    }), P.jsx(W1.div, {
        className: "slide-out",
        initial: {
            scaleY: 1
        },
        animate: {
            scaleY: 0
        },
        exit: {
            scaleY: 0
        },
        transition: {
            duration: 1,
            ease: [.22, 1, .36, 1]
        }
    })]
})
  , qd = [""];
function zR() {
    const [t,e] = E.useState(0);
    q.registerPlugin(re);
    const n = E.useRef()
      , r = E.useRef();
    return E.useEffect( () => {
        q.to(n.current, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: "none"
        }),
        q.to(r.current, {
            rotation: -360,
            duration: 10,
            repeat: -1,
            ease: "none"
        });
        const o = zi.create(".text-heading", {
            types: "chars"
        }).chars;
        q.fromTo(o, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .02,
            duration: 2,
            ease: "power4.out"
        }),
        q.fromTo(".down", {
            opacity: 0
        }, {
            stagger: .002,
            opacity: 1,
            duration: 2,
            ease: "power4.out",
            delay: 1
        }),
        q.fromTo(".based-in", {
            y: -10,
            opacity: 0
        }, {
            y: 0,
            stagger: .004,
            opacity: 1,
            duration: 2,
            ease: "power4.out",
            delay: 1.5
        }),
        document.querySelectorAll(".about").forEach(l => {
            const u = l.getAttribute("id");
            q.to(l, {
                backgroundPositionX: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: l,
                    onEnter: () => {
                        e(u),
                        q.fromTo(".citation", {
                            y: 20,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            stagger: .02,
                            duration: 2,
                            ease: "power4.out"
                        })
                    }
                    ,
                    onLeaveBack: () => {
                        e(u - 1),
                        q.fromTo(".citation", {
                            y: 20,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            stagger: .02,
                            duration: 2,
                            ease: "power4.out"
                        })
                    }
                    ,
                    scrub: 1,
                    start: "center center",
                    end: "center center"
                }
            })
        }
        ),
        q.fromTo(".selected-projects", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            stagger: .02,
            ease: "power2.out",
            duration: 1,
            delay: .2,
            scrollTrigger: {
                trigger: ".selected-projects",
                start: "top center",
                end: "top center"
            }
        }),
        q.fromTo(".selected-projects-asterisk", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            ease: "power2.out",
            duration: 1.5,
            scrollTrigger: {
                trigger: ".selected-projects",
                start: "top center",
                end: "top center"
            }
        }),
        document.querySelectorAll(".project-item").forEach(l => {
            q.fromTo(l, {
                opacity: 0,
                x: -150
            }, {
                opacity: 1,
                x: 0,
                stagger: .02,
                ease: "power4.out",
                duration: 3,
                scrollTrigger: {
                    trigger: l,
                    start: "top bottom",
                    end: "top center"
                }
            }),
            q.fromTo(".project-line", {
                width: 0
            }, {
                width: "100%",
                stagger: .02,
                ease: "power4.out",
                duration: 2,
                scrollTrigger: {
                    trigger: l,
                    start: "top center",
                    end: "top center"
                }
            })
        }
        ),
        q.fromTo(".get-in-touch", {
            opacity: 0,
            x: -150
        }, {
            opacity: 1,
            x: 0,
            stagger: .02,
            ease: "power4.out",
            duration: 2.5,
            scrollTrigger: {
                trigger: ".get-in-touch",
                start: "top bottom",
                end: "top bottom"
            }
        }),
        q.fromTo(".social-link", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            stagger: .02,
            ease: "power4.out",
            duration: 2.5,
            delay: 1,
            scrollTrigger: {
                trigger: ".social-link",
                start: "top bottom",
                end: "top bottom"
            }
        })
    }
    , []),
    E.useEffect( () => {
        t === 0 && q.to(".citation", {
            opacity: 0,
            y: 20,
            stagger: .05,
            duration: 1,
            overwrite: !0
        }),
        q.to("#portfolio-section", {
            scrollTrigger: {
                trigger: "#portfolio-section",
                start: "top center",
                end: "top center",
                scrub: 1,
                onEnter: () => {
                    q.to(".citation", {
                        opacity: 0,
                        y: 20,
                        stagger: .02,
                        duration: .1,
                        overwrite: !0
                    })
                }
            }
        })
    }
    , [t]),
P.jsxs("main", {
    children: [P.jsxs("section", { 
        className: "flex items-center h-screen relative px-[30px] lg:px-[60px]",
        children: [P.jsx("div", {
            id: "cv-link",
            className: "absolute z-50 -translate-y-1/2 top-1/2 right-0",
            children: P.jsx("a", {
                href: "cv.pdf", // Remplacez par le chemin de votre fichier PDF
                target: "_blank",
                children: P.jsxs("svg", {
                    width: "53.08",
                    height: "171.358",
                    children: [P.jsx("rect", {
                        width: "53.08",
                        height: "171.358",
                        fill: "white",
                        rx:"10,10,0,0"
                    }), P.jsx("text", {
                        x: "50%",
                        y: "50%",
                        fill: "black",
                        "text-anchor": "middle",
                        "dominant-baseline": "middle",
                        fontSize: "16",
                        fontWeight:"700",
                        children: "CV"
                    })]
                })
            })
        }), P.jsxs("h1", {
            className: "overflow-hidden text-heading font-bold text-[45px] leading-[100%] xl:text-[120px] 2xl:text-[150px] xl:leading-[120px] 2xl:leading-[140px] uppercase mb-16 text-white",
            children: ["Etudiant", P.jsx("br", {}), P.jsx("span", {
                className: "ml-10 whitespace-nowrap",
                children: "Developpeur"
            })]
            }), P.jsxs("div", {
                className: "absolute left-0 bottom-[60px] right-0 flex items-end lg:items-start justify-between px-[30px] lg:px-[60px]",
                children: [P.jsxs("div", {
                    className: "xl:h-[100px] xl:w-[100px] 2xl:w-[125px] 2xl:h-[125px] flex items-center justify-center",
                    children: [P.jsx("div", {
                        ref: n,
                        children: P.jsx(CP, {
                            width: "100",
                            height: "100",
                            cx: "50",
                            cy: "50",
                            rx: "50",
                            ry: "50",
                            startOffset: "0",
                            reversed: !1,
                            text: "SCROLL DOWN SCROLL DOWN",
                            textProps: {
                                style: {
                                    fontSize: "11",
                                    letterSpacing: "6.5px",
                                    fill: "#f4f4f4"
                                }
                            }
                        })
                    }), P.jsx("div", {
                        className: "absolute h-[16px] w-[16px]",
                        ref: r,
                        children: P.jsx("img", {
                            src: "/img/asterisk.svg",
                            alt: "asterisk",
                            className: "object-contain"
                        })
                    })]
                }), P.jsxs("div", {
                    className: "flex flex-col mb-2 lg:mb-0",
                    children: [P.jsxs("div", {
                        className: "flex items-center gap-4 xl:gap-[20px] 2xl:gap-[30px] down",
                        children: [P.jsx("h3", {
                            className: "uppercase xl:text-[26px] 2xl:text-[32px] font-[400] text-white",
                            children: "basé en france"
                        }), P.jsx("div", {
                            className: "relative h-[28px] w-[28px]",
                            children: P.jsx("img", {
                                src: "/img/asterisk.svg",
                                alt: "asterisk",
                                className: "object-contain animate-spin"
                            })
                        })]
                    }), P.jsx("h4", {
                        className: "font-[200] text-white lg:ml-1 based-in",
                        children: "BTS Lycée le Rebours"
                    })]
                })]
            })]
        }), P.jsxs("section", {
            className: "py-[80px] lg:py-[200px] relative grid grid-cols-12 px-[30px] lg:px-[60px]",
            children: [P.jsx("div", {
                className: "col-span-6 relative hidden lg:block",
                children: P.jsx("div", {
                    className: "fixed top-1/2 -translate-y-1/2 text-white -rotate-90 w-[400px] -left-24",
                    children: P.jsxs("p", {
                        className: "citation opacity-0 font-[300] tracking-wide text-xl ml-20",
                        children: ["‟ ", qd[t - 1] ? qd[t - 1] : qd[t], " ”"]
                    })
                })
            }), P.jsxs("div", {
                className: "text col-span-12 lg:col-span-6 flex flex-col gap-14",
                children: [P.jsx("p", {
                    id: "1",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px] first-p",
                    children: "Java"
                }), P.jsx("p", {
                    id: "2",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px]",
                    children: "Php"
                }), P.jsx("p", {
                    id: "3",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px]",
                    children: "Python"
                }), P.jsx("p", {
                    id: "4",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px]",
                    children: "SQL"
                }), P.jsx("p", {
                    id: "5",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px]",
                    children: "JavaScript"
                }), P.jsx("p", {
                    id: "6",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px]",
                    children: "HTML/CSS"
                }), P.jsx("p", {
                    id: "7",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px]",
                    children: "RESPONSIVE"
                }), P.jsx("p", {
                    id: "8",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px]",
                    children: "Symfony"
                }), P.jsx("p", {
                    id: "9",
                    className: "about uppercase font-bold text-right text-[40px] lg:text-[100px]",
                    children: "JavaFx"
                })]
            })]
        }), P.jsx("div", {
            id: "portfolio-section"
        }), P.jsx("section", {
            className: "lg:mt-[80px] px-[30px] lg:p-[60px] flex items-center justify-center portfolio-wrapper",
            children: P.jsxs("div", {
                className: "no-scrollbar overflow-hidden pb-[80px] w-full overflow-x-hidden",
                children: [P.jsxs("div", {
                    className: "flex items-center lg:ml-10 gap-[10px] mt-[100px]",
                    children: [P.jsx("img", {
                        src: "/img/asterisk.svg",
                        alt: "asterisk",
                        className: "object-contain animate-spin selected-projects-asterisk"
                    }), P.jsx("h2", {
                        className: "uppercase text-white selected-projects font-light text-[16px] lg:text-[20px] ml-3 whitespace-nowrap",
                        children: "Projet"
                    })]
                }), P.jsxs("div", {
                    className: "flex flex-col lg:mx-10 mt-10 lg:mt-16",
                    children: [P.jsx("hr", {
                        className: "project-line opacity-20"
                    }), P.jsxs(Zt, {
                        to: "/fdi",
                        className: "project-item group flex items-center justify-between",
                        children: [P.jsx("h3", {
                            className: "uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition",
                            children: "FDI"
                        }), P.jsx("img", {
                            src: "/img/fdi.webp",
                            alt: "Fdi",
                            className: "project-img-1 scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100"
                        })]
                    }), P.jsx("hr", {
                        className: "project-line opacity-20"
                    }), P.jsxs(Zt, {
                        to: "/TeaTime",
                        className: "border-opacity-20 project-item group flex items-center justify-between",
                        children: [P.jsx("h3", {
                            className: "uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition",
                            children: "Tea Time"
                        }), P.jsx("img", {
                            src: "/img/tea.webp",
                            alt: "TeaTime",
                            className: "scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100"
                        })]
                    }), P.jsx("hr", {
                        className: "project-line opacity-20"
                    }), P.jsxs(Zt, {
                        to: "/league",
                        className: "border-opacity-20 project-item group flex items-center justify-between",
                        children: [P.jsx("h3", {
                            className: "uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition",
                            children: "Champion"
                        }), P.jsx("img", {
                            src: "/img/league.webp",
                            alt: "league",
                            className: "scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100"
                        })]
                    }), P.jsx("hr", {
                        className: "project-line opacity-20"
                    }), P.jsx("hr", {
                        className: "project-line opacity-20"
                    })]
                })]
            })
        }),P.jsx("div", {
            id: "Certification-section"
        }), P.jsx("section", {
            className: "lg:mt-[10px] px-[30px] lg:p-[60px] flex items-center justify-center portfolio-wrapper",
            children: P.jsxs("div", {
                className: "no-scrollbar overflow-hidden pb-[80px] w-full overflow-x-hidden",
                children: [P.jsxs("div", {
                    className: "flex items-center lg:ml-10 gap-[10px] mt-[100px]",
                    children: [P.jsx("img", {
                        src: "/img/asterisk.svg",
                        alt: "asterisk",
                        className: "object-contain animate-spin selected-projects-asterisk"
                    }), P.jsx("h2", {
                        className: "uppercase text-white selected-projects font-light text-[16px] lg:text-[20px] ml-3 whitespace-nowrap",
                        children: "Certification"
                    })]
                }), P.jsxs("div", {
                    className: "flex flex-col lg:mx-10 mt-10 lg:mt-16",
                    children: [P.jsx("hr", {
                        className: "project-line opacity-20"
                    }), P.jsxs(Zt, {
                        to: "/cnil",
                        className: "project-item group flex items-center justify-between",
                        children: [P.jsx("h3", {
                            className: "uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition",
                            children: "MOOC CNIL"
                        }), P.jsx("img", {
                            src: "/img/CNIL_Logo.svg",
                            alt: "CNIL",
                            className: "project-img-1 scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100"
                        })]
                    }), P.jsx("hr", {
                        className: "project-line opacity-20"
                    }),P.jsxs(Zt, {
                        to: "/sna",
                        className: "border-opacity-20 project-item group flex items-center justify-between",
                        children: [P.jsx("h3", {
                            className: "uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition",
                            children: "MOOC SECNUMACADEMIE"
                        }), P.jsx("img", {
                            src: "/img/secnumacademie_logo.png",
                            alt: "SecNumAcademie",
                            className: "scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100"
                        })]
                    }), P.jsx("hr", {
                        className: "project-line opacity-20"
                    }),
                    ]
                })]
            })
            }),P.jsx("div", {
            id: "Veille-section"
        }), P.jsx("section", {
            className: "lg:mt-[10px] px-[30px] lg:p-[60px] flex items-center justify-center portfolio-wrapper",
            children: P.jsxs("div", {
                className: "no-scrollbar overflow-hidden pb-[80px] w-full overflow-x-hidden",
                children: [P.jsxs("div", {
                    className: "flex items-center lg:ml-10 gap-[10px] mt-[100px]",
                    children: [P.jsx("img", {
                        src: "/img/asterisk.svg",
                        alt: "asterisk",
                        className: "object-contain animate-spin selected-projects-asterisk"
                    }), P.jsx("h2", {
                        className: "uppercase text-white selected-projects font-light text-[16px] lg:text-[20px] ml-3 whitespace-nowrap",
                        children: "Veille informationnelle"
                    })]
                }), P.jsxs("div", {
                    className: "flex flex-col lg:mx-10 mt-10 lg:mt-16",
                    children: [P.jsx("hr", {
                        className: "project-line opacity-20"
                    }), P.jsxs(Zt, {
                        to: "/crypto",
                        className: "project-item group flex items-center justify-between",
                        children: [P.jsx("h3", {
                            className: "uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition",
                            children: "Cryptomonaie"
                        }), P.jsx("img", {
                            src: "/img/crypto.webp",
                            alt: "crypto",
                            className: "project-img-1 scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100"
                        })]
                    }), P.jsx("hr", {
                        className: "project-line opacity-20"
                    })]
                })]
            })
        }),P.jsxs("section", {
            className: "px-[30px] lg:px-[60px] lg:mx-10 mb-[100px] lg:mb-[200px] flex flex-col lg:flex-row mt-[50px] lg:mt-[100px]",
            children: [P.jsx("div", {
                className: "lg:w-1/2",
                children: P.jsx(Zt, {
                    to: "mailto:jhuang469@gmail.com",
                    className: "uppercase hover:bg-white hover:text-black transition-colors get-in-touch block text-center text-white text-[30px] w-full lg:!w-fit lg:text-[60px] rounded-full px-9 py-2 border border-white",
                    children: "Contact"
                })
            }), P.jsxs("div", {
                className: "flex flex-col w-full lg:items-end lg:w-1/2 gap-6 mt-16 lg:mt-0",
                children: [P.jsxs(Zt, {
                    to: "https://www.linkedin.com/in/justin-huang-581423247/",
                    target: "_blank",
                    className: "link-underline gap-4 text-[20px] social-link lg:text-[30px] flex items-center relative lg:w-1/3 justify-between text-white",
                    children: ["Linkedin", P.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: P.jsx("g", {
                            id: "Arrow / Arrow_Up_Right_LG",
                            children: P.jsx("path", {
                                id: "Vector",
                                d: "M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642",
                                stroke: "white",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            })
                        })
                    })]
                }), P.jsxs(Zt, {
                    to: "https://github.com/ImJustin580",
                    target: "_blank",
                    className: "link-underline gap-4 text-[20px] social-link lg:text-[30px] flex items-center relative lg:w-1/3 justify-between text-white",
                    children: ["Github", P.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: P.jsx("g", {
                            id: "Arrow / Arrow_Up_Right_LG",
                            children: P.jsx("path", {
                                id: "Vector",
                                d: "M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642",
                                stroke: "white",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            })
                        })
                    })]
                })]
            })]
        })]
    })
}
const BR = ru(zR);
function $R() {
    return window.scrollTo(0, 0),
    E.useEffect( () => {
        const e = zi.create(".project-name", {
            types: "chars"
        }).chars;
        q.fromTo(e, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .02,
            duration: 2,
            ease: "power4.out"
        }),
        q.fromTo(".tag-primary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-secondary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            delay: .3,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-tiertary", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .6,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".project-desc", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .9,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".link-underline", {
            opacity: 0
        }, {
            opacity: 1,
            delay: 1.2,
            duration: 1.5,
            ease: "power4.out"
        })
    }
    , []),
    P.jsx(P.Fragment, {
        children: P.jsxs("main", {
            className: "my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]",
            children: [P.jsxs("section", {
                className: "flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]",
                children: [P.jsxs("div", {
                    className: "lg:w-1/3 lg:fixed flex flex-col gap-[20px]",
                    children: [P.jsx("h2", {
                        className: "text-white project-name leading-[100%] font-medium text-[80px] whitespace-nowrap",
                        children: "FDI"
                    }), P.jsxs("div", {
                        className: "flex items-center flex-wrap gap-[6px] group",
                        children: [P.jsx("span", {
                            className: "tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "Wordpress"
                        }), P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "JavaScript"
                        }),P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "FIGMA"
                        }),P.jsx("span", {
                            className: "tag-tiertary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "GSAP"
                        })]
                    }), P.jsx("p", {
                        className: "text-white project-desc text-opacity-60",
                        children: "Lors de mon stage, j’ai eu l’opportunité de travailler sur la réalisation du site Fret Transport Distribution, un projet qui m’a permis de mettre en pratique à la fois ma créativité et mes compétences techniques. De la conception de la maquette jusqu’à la mise en ligne sur WordPress, j’ai pris en charge chaque étape avec rigueur et précision. J’ai commencé par élaborer des maquettes détaillées et interactives, en veillant à ce que le design soit intuitif et centré sur l’expérience utilisateur. Ensuite, lors de la phase de réalisation, j’ai utilisé WordPress pour transformer ces concepts en un site web fonctionnel, fluide et responsive, tout en optimisant la navigation et les performances. Ce projet ne s’est pas limité à la simple création d’un site internet, mais visait à concevoir une plateforme digitale reflétant l’identité de l’entreprise et offrant une expérience utilisateur optimale."
                    }), P.jsxs(Zt, {
                        to: "https://stg-m3dpug.elementor.cloud/",
                        className: "text-white flex items-center gap-3 mt-6 md:mt-10 link-underline relative w-fit h-10",
                        target: "_blank",
                        children: ["Voir le site", " ", P.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: P.jsx("g", {
                                id: "Arrow / Arrow_Up_Right_LG",
                                children: P.jsx("path", {
                                    id: "Vector",
                                    d: "M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642",
                                    stroke: "white",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                })
                            })
                        })]
                    })]
                }), P.jsx("img", {
                    src: "img/fdi.webp",
                    alt: "fdi",
                    className: "lg:w-1/2 h-full object-contain rounded-xl ml-auto"
                })]
            }), P.jsxs(Zt, {
                to: "/",
                className: "flex items-center justify-center gap-4 text-white mt-[100px] lg:mt-[200px]",
                children: [P.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: P.jsx("path", {
                        d: "M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12",
                        stroke: "#ffffff",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                    })
                }), "Go back to home page"]
            })]
        })
    })
}
const UR = ru($R);
function WR() {
    return window.scrollTo(0, 0),
    E.useEffect( () => {
        const e = zi.create(".project-name", {
            types: "chars"
        }).chars;
        q.fromTo(e, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .02,
            duration: 2,
            ease: "power4.out"
        }),
        q.fromTo(".tag-primary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-secondary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            delay: .3,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-tiertary", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .6,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".project-desc", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .9,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".link-underline", {
            opacity: 0
        }, {
            opacity: 1,
            delay: 1.2,
            duration: 1.5,
            ease: "power4.out"
        })
    }
    , []),
    P.jsx(P.Fragment, {
        children: P.jsxs("main", {
            className: "my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]",
            children: [P.jsxs("section", {
                className: "flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]",
                children: [P.jsxs("div", {
                    className: "lg:w-1/3 lg:fixed flex flex-col gap-[20px]",
                    children: [P.jsx("h2", {
                        className: "text-white project-name leading-[100%] font-medium text-[80px] whitespace-nowrap",
                        children: "TeaTime"
                    }), P.jsxs("div", {
                        className: "flex items-center flex-wrap gap-[6px] group",
                        children: [P.jsx("span", {
                            className: "tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "HTML"
                        }), P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "CSS"
                        }), P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "Bootstrap"
                        })]
                    }), P.jsx("p", {
                        className: "text-white project-desc text-opacity-60",
                        children: "Dans le cadre d’un projet de classe en équipe, nous avons réalisé le site TeaTime en utilisant HTML, CSS et Bootstrap. J’ai collaboré activement à chaque étape, de la conception à l’intégration, pour créer un site moderne, responsive et fonctionnel. Ce projet m’a permis de renforcer mes compétences en développement front-end tout en favorisant le travail d’équipe pour offrir une expérience utilisateur fluide et agréable."
                    }), P.jsxs(Zt, {
                        to: "",
                        className: "text-white flex items-center gap-3 mt-6 md:mt-10 link-underline relative w-fit h-10",
                        target: "_blank",
                        children: ["Site Indisponible, non heberger", " ", P.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: P.jsx("g", {
                                id: "Arrow / Arrow_Up_Right_LG",
                                children: P.jsx("path", {
                                    id: "Vector",
                                    d: "M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642",
                                    stroke: "white",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                })
                            })
                        })]
                    })]
                }), P.jsx("img", {
                    src: "img/tea.webp",
                    alt: "TeaTime",
                    className: "lg:w-1/2 h-full object-contain rounded-xl ml-auto"
                })]
            }), P.jsxs(Zt, {
                to: "/",
                className: "flex items-center justify-center gap-4 text-white mt-[100px] lg:mt-[200px]",
                children: [P.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: P.jsx("path", {
                        d: "M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12",
                        stroke: "#ffffff",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                    })
                }), "Go back to home page"]
            })]
        })
    })
}
function affCrypto() {
    return window.scrollTo(0, 0),
    E.useEffect( () => {
        const e = zi.create(".project-name", {
            types: "chars"
        }).chars;
        q.fromTo(e, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .02,
            duration: 2,
            ease: "power4.out"
        }),
        q.fromTo(".tag-primary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-secondary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            delay: .3,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-tiertary", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .6,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".project-desc", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .9,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".link-underline", {
            opacity: 0
        }, {
            opacity: 1,
            delay: 1.2,
            duration: 1.5,
            ease: "power4.out"
        })
    }
    , []),
    P.jsx(P.Fragment, {
    children: P.jsxs("main", {
        className: "my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]",
        children: [P.jsxs("section", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[80vh] items-center justify-items-center", // Ajout de items-center et justify-items-center
    children: [P.jsxs("div", {
        className: "flex flex-col gap-[20px] items-center", // Ajout de items-center pour centrer le contenu à l'intérieur
        children: [P.jsx("h2", {
            className: "text-white project-name leading-[100%] font-medium text-[80px] whitespace-nowrap",
            children: "Cryptomonaie"
        }), P.jsxs("div", {
            className: "flex items-center flex-wrap gap-[6px] group",
            children: [P.jsx("span", {
                className: "tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                children: "BlockChain"
            })]
                
        }), P.jsx("p", {
            className: "text-white project-desc text-opacity-60",
        }), P.jsxs(Zt, {
            to: "",
            className: "text-white flex items-center gap-3 mt-6 md:mt-10 link-underline relative w-fit h-10",
            target: "_blank",
        })]
    }), P.jsxs("section", {
    className: "work-grid",
    children: [
        P.jsxs("div", {
            className: "cards",
            children: [
                P.jsxs("div", {
                    className: "card",
                    children: [
                        P.jsx("a", {
                            href: "https://www.capital.fr/votre-argent/flat-tax-les-deputes-votent-une-augmentation-du-taux-a-33-en-2025-1504087", // Remplacez par l'URL de votre lien
                            children: P.jsx("img", { 
                                src: "img/flat-tax.jpg", // Remplacez par l'URL de votre image
                                style: { width: '100%', height: 'auto', borderRadius: '8px' } // Styles pour l'image
                            })
                        }),
                    ]
                }),
                P.jsxs("div", {
                    className: "card",
                    children: [
                        P.jsx("a", {
                            href: "https://www.lebigdata.fr/le-fbi-a-cree-sa-propre-crypto-pour-pieger-les-arnaqueurs", // Remplacez par l'URL de votre lien
                            children: P.jsx("img", { 
                                src: "img/FBI.jpg", // Remplacez par l'URL de votre image
                                style: { width: '100%', height: 'auto', borderRadius: '8px' } // Styles pour l'image
                            })
                        }),
                    ]
                }),
                P.jsxs("div", {
                    className: "card",
                    children: [
                        P.jsx("a", {
                            href: "https://crypto.news/trumps-world-liberty-eyes-stablecoin-launch-report/", // Remplacez par l'URL de votre lien
                            children: P.jsx("img", { 
                                src: "img/trump.jpg", // Remplacez par l'URL de votre image
                                style: { width: '100%', height: 'auto', borderRadius: '8px' } // Styles pour l'image
                            })
                        }),
                    ]
                }),P.jsxs("div", {
                    className: "card",
                    children: [
                        P.jsx("a", {
                            href: "https://www.theblock.co/post/318195/paypal-to-allow-us-business-accounts-to-buy-and-transfer-crypto?utm_source=feedly&utm_medium=rss", // Remplacez par l'URL de votre lien
                            children: P.jsx("img", { 
                                src: "img/Paypal.jpg", // Remplacez par l'URL de votre image
                                style: { width: '100%', height: 'auto', borderRadius: '8px' } // Styles pour l'image
                            })
                        }),
                    ]
                }),
                P.jsxs("div", {
                    className: "card",
                    children: [
                        P.jsx("a", {
                            href: "https://cryptoslate.com/samsung-pay-expands-crypto-payments-options-via-alchemy-pay-partnership/", // Remplacez par l'URL de votre lien
                            children: P.jsx("img", { 
                                src: "img/samsung.jpg", // Remplacez par l'URL de votre image
                                style: { width: '100%', height: 'auto', borderRadius: '8px' } // Styles pour l'image
                            })
                        }),
                    ]
                }),
            ]
        })
    ]
})
    ]
}), P.jsxs(Zt, {
            to: "/",
            className: "flex items-center justify-center gap-4 text-white mt-[100px] lg:mt-[200px]",
            children: [P.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: P.jsx("path", {
                    d: "M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12",
                    stroke: "#ffffff",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                })
            }), "Go back to home page"]
        })]
    })
})
}    
const HR = ru(WR);
function YR() {
    return window.scrollTo(0, 0),
    E.useEffect( () => {
        const e = zi.create(".project-name", {
            types: "chars"
        }).chars;
        q.fromTo(e, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .02,
            duration: 2,
            ease: "power4.out"
        }),
        q.fromTo(".tag-primary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-secondary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            delay: .3,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-tiertary", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .6,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".project-desc", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .9,
            duration: 1.5,
            ease: "power4.out"
        })
    }
    , []),
    P.jsx(P.Fragment, {
        children: P.jsxs("main", {
            className: "my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]",
            children: [P.jsxs("section", {
                className: "flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]",
                children: [P.jsxs("div", {
                    className: "lg:w-1/3 lg:fixed flex flex-col gap-[20px]",
                    children: [P.jsx("h2", {
                        className: "text-white project-name leading-[100%] font-medium text-[80px] whitespace-nowrap",
                        children: "league"
                    }), P.jsxs("div", {
                        className: "flex items-center flex-wrap gap-[6px] group",
                        children: [P.jsx("span", {
                            className: "tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "Java"
                        }), P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "Scene Builder"
                        })]
                    }), P.jsx("p", {
                        className: "text-white project-desc text-opacity-60",
                        children: ""
                    })]
                }), P.jsxs("div", {
                    className: "flex flex-col gap-[30px] lg:w-1/2 h-full ml-auto",
                    children: [P.jsx("img", {
                        src: "img/league.webp",
                        alt: "",
                        className: "object-contain rounded-xl"
                    })]
                })]
            }), P.jsxs(Zt, {
                to: "/",
                className: "flex items-center justify-center gap-4 text-white mt-[100px] lg:mt-[200px]",
                children: [P.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: P.jsx("path", {
                        d: "M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12",
                        stroke: "#ffffff",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                    })
                }), "Go back to home page"]
            })]
        })
    })
}
const GR = ru(YR);
function XR() {
    return window.scrollTo(0, 0),
    E.useEffect( () => {
        const e = zi.create(".project-name", {
            types: "chars"
        }).chars;
        q.fromTo(e, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .02,
            duration: 2,
            ease: "power4.out"
        }),
        q.fromTo(".tag-primary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-secondary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            delay: .3,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-tiertary", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .6,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".project-desc", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .9,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".link-underline", {
            opacity: 0
        }, {
            opacity: 1,
            delay: 1.2,
            duration: 1.5,
            ease: "power4.out"
        })
    }
    , []),
    P.jsx(P.Fragment, {
        children: P.jsxs("main", {
            className: "my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]",
            children: [P.jsxs("section", {
                className: "flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]",
                children: [P.jsxs("div", {
                    className: "lg:w-1/3 lg:fixed flex flex-col gap-[20px]",
                    children: [P.jsx("h2", {
                        className: "text-white project-name leading-[100%] font-medium text-[80px] whitespace-nowrap",
                        children: "Certlification CNIL"
                    }), P.jsxs("div", {
                        className: "flex items-center flex-wrap gap-[6px] group",
                        children: [P.jsx("span", {
                            className: "tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "Droit"
                        }), P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "RGPD"
                        }), P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "Bonne pratique"
                        })]
                    }), P.jsx("p", {
                        className: "text-white project-desc text-opacity-60",
                        children: "Le MOOC (Massive Open Online Course) de la CNIL (Commission Nationale de l'Informatique et des Libertés) est une formation en ligne proposée par la CNIL pour sensibiliser et former les participants sur les enjeux de la protection des données personnelles. Ce MOOC aborde divers sujets liés à la réglementation sur la protection des données, notamment le RGPD (Règlement Général sur la Protection des Données), les droits des personnes, les obligations des responsables de traitement, et les bonnes pratiques en matière de gestion des données."
                    }), P.jsxs(Zt, {
                        to: "",
                        className: "text-white flex items-center gap-3 mt-6 md:mt-10 link-underline relative w-fit h-10",
                        target: "_blank",
                    })]
                }), P.jsxs("div", {
                className: "flex flex-col gap-[30px] lg:w-1/2 h-full ml-auto",
                children: [
                    // Array of image sources
                    ["img/Cnil1.jpg", "img/Cnil2.jpg", "img/Cnil3.jpg", "img/Cnil4.jpg", "img/Cnil5.jpg"].map((src, index) => 
                        P.jsx("img", {
                            key: index,
                            src: src,
                            alt: `CNIL ${index + 1}`,
                            className: "object-contain rounded-xl"
                        })
                    )
                ],
                })]
            }), P.jsxs(Zt, {
                to: "/",
                className: "flex items-center justify-center gap-4 text-white mt-[100px] lg:mt-[200px]",
                children: [P.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: P.jsx("path", {
                        d: "M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12",
                        stroke: "#ffffff",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                    })
                }), "Go back to home page"]
            })]
        })
    })
}
const KR = ru(XR);
function Sna() {
    return window.scrollTo(0, 0),
    E.useEffect( () => {
        const e = zi.create(".project-name", {
            types: "chars"
        }).chars;
        q.fromTo(e, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .02,
            duration: 2,
            ease: "power4.out"
        }),
        q.fromTo(".tag-primary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-secondary", {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            delay: .3,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".tag-tiertary", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .6,
            stagger: .02,
            duration: 1.5,
            ease: "power4.out"
        }),
        q.fromTo(".project-desc", {
            opacity: 0
        }, {
            opacity: 1,
            delay: .9,
            duration: 1.5,
            ease: "power4.out"
        })
    }
    , []),
    P.jsx(P.Fragment, {
        children: P.jsxs("main", {
            className: "my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]",
            children: [P.jsxs("section", {
                className: "flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]",
                children: [P.jsxs("div", {
                    className: "lg:w-1/3 lg:fixed flex flex-col gap-[20px]",
                    children: [P.jsx("h2", {
                        className: "text-white project-name leading-[100%] font-medium text-[80px] whitespace-nowrap",
                        children: "SecNumAcademie"
                    }), P.jsxs("div", {
                        className: "flex items-center flex-wrap gap-[6px] group",
                        children: [P.jsx("span", {
                            className: "tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "Donnée personnelle"
                        }), P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "Cybersécurité"
                        }), P.jsx("span", {
                            className: "tag-secondary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100",
                            children: "MOOC"
                        })]
                    }), P.jsx("p", {
                        className: "text-white project-desc text-opacity-60",
                        children: "SecNumAcadémie est une plateforme en ligne lancée par l'Agence nationale de la sécurité des systèmes d'information (ANSSI) en France, visant à sensibiliser et former le grand public à la cybersécurité. Accessible gratuitement, elle propose un MOOC (cours en ligne ouvert et massif) qui aborde divers aspects de la sécurité numérique, tels que la protection des données, la sécurisation des connexions et les bonnes pratiques à adopter pour éviter les cyberattaques."
                    })]
                }), P.jsxs("div", {
                    className: "flex flex-col gap-[30px] lg:w-1/2 h-full ml-auto",
                    children: [P.jsx("img", {
                        src: "img/sna.jpg",
                        alt: "",
                        className: "object-contain rounded-xl"
                    })]
                })]
            }), P.jsxs(Zt, {
                to: "/",
                className: "flex items-center justify-center gap-4 text-white mt-[100px] lg:mt-[200px]",
                children: [P.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: P.jsx("path", {
                        d: "M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12",
                        stroke: "#ffffff",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                    })
                }), "Go back to home page"]
            })]
        })
    })
}
var QR = "@vercel/analytics"
  , qR = "1.1.1"
  , ZR = () => {
    window.va || (window.va = function(...e) {
        (window.vaq = window.vaq || []).push(e)
    }
    )
}
;
function VS() {
    return typeof window < "u"
}
function FS() {
    try {
        const t = "production"
    } catch {}
    return "production"
}
function JR(t="auto") {
    if (t === "auto") {
        window.vam = FS();
        return
    }
    window.vam = t
}
function eN() {
    return (VS() ? window.vam : FS()) || "production"
}
function Zd() {
    return eN() === "development"
}
function tN(t={
    debug: !0
}) {
    var e;
    if (!VS())
        return;
    JR(t.mode),
    ZR(),
    t.beforeSend && ((e = window.va) == null || e.call(window, "beforeSend", t.beforeSend));
    const n = Zd() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js";
    if (document.head.querySelector(`script[src*="${n}"]`))
        return;
    const r = document.createElement("script");
    r.src = n,
    r.defer = !0,
    r.setAttribute("data-sdkn", QR),
    r.setAttribute("data-sdkv", qR),
    r.onerror = () => {
        const i = Zd() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${i}`)
    }
    ,
    Zd() && t.debug === !1 && r.setAttribute("data-debug", "false"),
    document.head.appendChild(r)
}
function nN({beforeSend: t, debug: e=!0, mode: n="auto"}) {
    return E.useEffect( () => {
        tN({
            beforeSend: t,
            debug: e,
            mode: n
        })
    }
    , [t, e, n]),
    null
}
function rN() {
    const t = Kl();
    return P.jsx(P.Fragment, {
        children: P.jsxs(IR, {
            mode: "wait",
            children: [P.jsx(nN, {}), P.jsxs(m_, {
                location: t,
                children: [P.jsx(go, {
                    index: !0,
                    element: P.jsx(BR, {})
                }), P.jsx(go, {
                    path: "/fdi",
                    element: P.jsx(UR, {})
                }), P.jsx(go, {
                    path: "/TeaTime",
                    element: P.jsx(HR, {})
                }), P.jsx(go, {
                    path: "/league",
                    element: P.jsx(GR, {})
                }), P.jsx(go, {
                    path: "/cnil",
                    element: P.jsx(KR, {})
                }), P.jsx(go, {
                    path: "/crypto",
                    element: P.jsx(affCrypto, {})
                }), P.jsx(go, {
                    path: "/sna",
                    element: P.jsx(Sna, {})
                })]
            }, t.pathname)]
        })
    })
}
var mn = function() {
    return mn = Object.assign || function(e) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
    ,
    mn.apply(this, arguments)
};
function Ea(t, e, n) {
    n === void 0 && (n = window);
    var r = E.useRef(null);
    E.useEffect(function() {
        r.current = e
    }, [e]),
    E.useEffect(function() {
        var i = n && n.addEventListener;
        if (i) {
            var o = function(s) {
                r.current && r.current(s)
            };
            return n.addEventListener(t, o),
            function() {
                n.removeEventListener(t, o)
            }
        }
    }, [t, n])
}
var mo = function() {
    if (!(typeof navigator > "u")) {
        var t = navigator.userAgent;
        return {
            info: t,
            Android: function() {
                return t.match(/Android/i)
            },
            BlackBerry: function() {
                return t.match(/BlackBerry/i)
            },
            IEMobile: function() {
                return t.match(/IEMobile/i)
            },
            iOS: function() {
                return t.match(/iPhone|iPad|iPod/i)
            },
            iPad: function() {
                return t.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2
            },
            OperaMini: function() {
                return t.match(/Opera Mini/i)
            },
            any: function() {
                return mo.Android() || mo.BlackBerry() || mo.iOS() || mo.iPad() || mo.OperaMini() || mo.IEMobile()
            }
        }
    }
}();
function H1(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
    if (typeof e != "function")
        throw new TypeError("callback must be a function");
    for (var i = Object(t), o = i.length >>> 0, s = n[2], a = 0; a < o; a++) {
        var l = i[a];
        if (e.call(s, l, a, i))
            return l
    }
}
function iN(t) {
    var e = t.clickables
      , n = e === void 0 ? ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link"] : e
      , r = t.children
      , i = t.color
      , o = i === void 0 ? "220, 90, 90" : i
      , s = t.innerScale
      , a = s === void 0 ? .6 : s
      , l = t.innerSize
      , u = l === void 0 ? 8 : l
      , c = t.innerStyle
      , f = t.outerAlpha
      , d = f === void 0 ? .4 : f
      , h = t.outerScale
      , m = h === void 0 ? 6 : h
      , p = t.outerSize
      , x = p === void 0 ? 8 : p
      , y = t.outerStyle
      , g = t.showSystemCursor
      , v = g === void 0 ? !1 : g
      , _ = t.trailingSpeed
      , w = _ === void 0 ? 8 : _
      , C = E.useMemo(function() {
        return {
            children: r,
            color: o,
            innerScale: a,
            innerSize: u,
            innerStyle: c,
            outerAlpha: d,
            outerScale: m,
            outerSize: x,
            outerStyle: y
        }
    }, [r, o, a, u, c, d, m, x, y])
      , S = E.useRef(null)
      , T = E.useRef(null)
      , M = E.useRef(null)
      , A = E.useRef(null)
      , b = E.useState({
        x: 0,
        y: 0
    })
      , D = b[0]
      , U = b[1]
      , j = E.useState(!1)
      , F = j[0]
      , H = j[1]
      , I = E.useState(C)
      , R = I[0]
      , V = I[1]
      , k = E.useState(!1)
      , O = k[0]
      , W = k[1]
      , ge = E.useState(!1)
      , Z = ge[0]
      , oe = ge[1]
      , se = E.useRef(0)
      , he = E.useRef(0)
      , tt = E.useCallback(function(ve) {
        var K = ve.clientX
          , st = ve.clientY;
        U({
            x: K,
            y: st
        }),
        T.current.style.top = "".concat(st, "px"),
        T.current.style.left = "".concat(K, "px"),
        se.current = K,
        he.current = st
    }, [])
      , Ee = E.useCallback(function(ve) {
        A.current !== void 0 && (D.x += (se.current - D.x) / w,
        D.y += (he.current - D.y) / w,
        S.current.style.top = "".concat(D.y, "px"),
        S.current.style.left = "".concat(D.x, "px")),
        A.current = ve,
        M.current = requestAnimationFrame(Ee)
    }, [M]);
    E.useEffect(function() {
        return M.current = requestAnimationFrame(Ee),
        function() {
            return cancelAnimationFrame(M.current)
        }
    }, [Ee]);
    var Ct = function(ve, K) {
        return "".concat(parseInt(String(ve * K)), "px")
    }
      , pe = E.useCallback(function(ve, K, st) {
        ve && (ve.style.height = Ct(K, st),
        ve.style.width = Ct(K, st))
    }, [])
      , jt = E.useCallback(function() {
        return W(!0)
    }, [])
      , ee = E.useCallback(function() {
        return W(!1)
    }, [])
      , Ie = E.useCallback(function() {
        return H(!0)
    }, [])
      , kt = E.useCallback(function() {
        return H(!1)
    }, []);
    Ea("mousemove", tt),
    Ea("mousedown", jt),
    Ea("mouseup", ee),
    Ea("mouseover", Ie),
    Ea("mouseout", kt),
    E.useEffect(function() {
        O ? (pe(T.current, R.innerSize, R.innerScale),
        pe(S.current, R.outerSize, R.outerScale)) : (pe(T.current, R.innerSize, 1),
        pe(S.current, R.outerSize, 1))
    }, [R.innerSize, R.innerScale, R.outerSize, R.outerScale, pe, O]),
    E.useEffect(function() {
        Z && (pe(T.current, R.innerSize, R.innerScale * 1.2),
        pe(S.current, R.outerSize, R.outerScale * 1.4))
    }, [R.innerSize, R.innerScale, R.outerSize, R.outerScale, pe, Z]),
    E.useEffect(function() {
        F ? (T.current.style.opacity = "1",
        S.current.style.opacity = "1") : (T.current.style.opacity = "0",
        S.current.style.opacity = "0")
    }, [F]),
    E.useEffect(function() {
        var ve = document.querySelectorAll(n.map(function(K) {
            return typeof K == "object" && (K != null && K.target) ? K.target : K ?? ""
        }).join(","));
        return ve.forEach(function(K) {
            v || (K.style.cursor = "none");
            var st = typeof n == "object" ? H1(n, function(dn) {
                return typeof dn == "object" && K.matches(dn.target)
            }) : {}
              , Me = mn(mn({}, C), st);
            K.addEventListener("mouseover", function() {
                W(!0),
                V(Me)
            }),
            K.addEventListener("click", function() {
                W(!0),
                oe(!1)
            }),
            K.addEventListener("mousedown", function() {
                oe(!0)
            }),
            K.addEventListener("mouseup", function() {
                W(!0)
            }),
            K.addEventListener("mouseout", function() {
                W(!1),
                oe(!1),
                V(C)
            })
        }),
        function() {
            ve.forEach(function(K) {
                var st = typeof n == "object" ? H1(n, function(dn) {
                    return typeof dn == "object" && K.matches(dn.target)
                }) : {}
                  , Me = mn(mn({}, C), st);
                K.removeEventListener("mouseover", function() {
                    W(!0),
                    V(Me)
                }),
                K.removeEventListener("click", function() {
                    W(!0),
                    oe(!1)
                }),
                K.removeEventListener("mousedown", function() {
                    oe(!0)
                }),
                K.removeEventListener("mouseup", function() {
                    W(!0)
                }),
                K.removeEventListener("mouseout", function() {
                    W(!1),
                    oe(!1),
                    V(C)
                })
            })
        }
    }, [O, n, v, C]);
    var Tt = {
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"
    }
      , N = {
        cursorInner: mn(mn({
            width: R.children ? "auto" : R.innerSize,
            height: R.children ? "auto" : R.innerSize,
            backgroundColor: R.children ? "transparent" : "rgba(".concat(R.color, ", 1)")
        }, Tt), R.innerStyle && R.innerStyle),
        cursorOuter: mn(mn({
            width: R.outerSize,
            height: R.outerSize,
            backgroundColor: "rgba(".concat(R.color, ", ").concat(R.outerAlpha, ")")
        }, Tt), R.outerStyle && R.outerStyle)
    };
    return v || (document.body.style.cursor = "none"),
    P.jsxs(P.Fragment, {
        children: [P.jsx("div", {
            ref: S,
            style: N.cursorOuter
        }), P.jsx("div", mn({
            ref: T,
            style: N.cursorInner
        }, {
            children: P.jsx("div", mn({
                style: {
                    opacity: R.children ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out"
                }
            }, {
                children: R.children
            }))
        }))]
    })
}
function oN(t) {
    var e = t.children
      , n = t.clickables
      , r = t.color
      , i = t.innerScale
      , o = t.innerSize
      , s = t.innerStyle
      , a = t.outerAlpha
      , l = t.outerScale
      , u = t.outerSize
      , c = t.outerStyle
      , f = t.showSystemCursor
      , d = t.trailingSpeed;
    return typeof navigator < "u" && mo.any() ? P.jsx(P.Fragment, {}) : P.jsx(iN, mn({
        clickables: n,
        color: r,
        innerScale: i,
        innerSize: o,
        innerStyle: s,
        outerAlpha: a,
        outerScale: l,
        outerSize: u,
        outerStyle: c,
        showSystemCursor: f,
        trailingSpeed: d
    }, {
        children: e
    }))
}
Jd.createRoot(document.getElementById("root")).render(P.jsxs(di.StrictMode, {
    children: [P.jsx(oN, {
        innerSize: 8,
        outerSize: 35,
        innerScale: 1,
        outerScale: 2,
        outerAlpha: 0,
        showSystemCursor: !1,
        trailingSpeed: 8,
        innerStyle: {
            backgroundColor: "#f4f4f4"
        },
        outerStyle: {
            border: "1px solid #f4f4f4"
        },
        clickables: ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link", {
            target: ".project-item",
            children: "VIEW",
            outerStyle: {
                background: "#fff"
            }
        }, {
            target: ".get-in-touch",
            outerStyle: {
                background: "#fff",
                mixBlendMode: "exclusion"
            },
            innerStyle: {
                background: "#000",
                mixBlendMode: "exclusion"
            }
        }, {
            target: ".link-underline",
            outerStyle: {
                background: "#fff",
                mixBlendMode: "exclusion"
            },
            innerStyle: {
                background: "#000",
                mixBlendMode: "exclusion"
            }
        }, {
            target: "#awwwards",
            outerStyle: {
                background: "#fff",
                mixBlendMode: "exclusion"
            },
            innerStyle: {
                background: "#000",
                mixBlendMode: "exclusion"
            }
        }]
    }), P.jsx("nav", {
        className: "px-[30px] md:px-[60px] py-[30px] flex items-center justify-between absolute top-0 left-0 right-0",
        children: P.jsx("a", {
            href: "/",
            className: "xl:text-[32px] 2xl:text-[40px] font-[300] text-white text-heading",
            children: "Justin Huang"
        })
    }), P.jsx(sP, {
        children: P.jsx(m_, {
            children: P.jsx(go, {
                path: "*",
                element: P.jsx(rN, {})
            })
        })
    })]
}));

// Sélectionner le menu et le déclencheur
const menu = document.querySelector('menu');
const menuTrigger = document.querySelector('.menu-trigger');

// Ajouter un écouteur d'événements pour le clic sur le déclencheur
menuTrigger.addEventListener('click', () => {
    // Basculer la classe 'is-active' sur le menu
    menu.classList.toggle('is-active');
});

// Fonction pour créer le menu
function createMenu() {
    // Créer le conteneur principal pour les éléments du menu
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');

    // Créer une liste non ordonnée
    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    // Définir les éléments du menu avec leurs titres et SVG
    const menuItems = [
        {
            title: "",
            href: "",
            svg: `<svg width="24" height="24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="2">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>`
        },
        {
            title: "",
            href: "",
            svg: `<svg width="24" height="24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="2">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"/>
                  </svg>`
        },
        {
            title: "",
            href: "",
            svg: `<svg width="24" height="24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="2">
                    <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-8l-2-2z"/>
                  </svg>`
        }
    ];

    // Créer les éléments de menu
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href; // Utiliser l'URL définie
        a.title = item.title;

        // Créer un élément div pour contenir le SVG et le texte
        const svgContainer = document.createElement('div');
        svgContainer.innerHTML = item.svg; // Ajouter le SVG
        a.appendChild(svgContainer); // Ajouter le SVG au lien
        a.appendChild(document.createTextNode(item.title)); // Ajouter le texte au lien

        li.appendChild(a); // Ajouter le lien à l'élément de liste
        menuList.appendChild(li); // Ajouter l'élément de liste à la liste
    });

    // Ajouter la liste au conteneur principal
    menuItemsDiv.appendChild(menuList);

    // Ajouter le conteneur au menu-container dans le DOM
    document.getElementById("menu-container").appendChild(menuItemsDiv);
}

// Appeler la fonction pour créer le menu lors du chargement de la page
createMenu();


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.add("dimmed");
                }
            });
        });

        card.addEventListener("mouseleave", () => {
            cards.forEach(otherCard => {
                otherCard.classList.remove("dimmed");
            });
        });
    });
});
