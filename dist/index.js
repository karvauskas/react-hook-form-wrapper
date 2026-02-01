import ke, { memo as K, useId as Ae, useState as O, useEffect as $, useRef as ee } from "react";
import { validateFieldsNatively as J, toNestErrors as Z } from "@hookform/resolvers";
import { appendErrors as re, FormProvider as Ne, useForm as Fe, useFormState as z, useFormContext as x, Controller as te } from "react-hook-form";
import _ from "zod";
import Ce from "react-select";
import Ie from "react-datepicker";
var k = { exports: {} }, R = {};
var G;
function Ve() {
  if (G) return R;
  G = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(n, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var c in i)
        c !== "key" && (s[c] = i[c]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return R.Fragment = o, R.jsx = r, R.jsxs = r, R;
}
var S = {};
var B;
function $e() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === we ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case E:
          return "Fragment";
        case Ee:
          return "Profiler";
        case be:
          return "StrictMode";
        case Re:
          return "Suspense";
        case Se:
          return "SuspenseList";
        case Te:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case D:
            return "Portal";
          case ge:
            return t.displayName || "Context";
          case _e:
            return (t._context.displayName || "Context") + ".Consumer";
          case je:
            var u = t.render;
            return t = t.displayName, t || (t = u.displayName || u.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case xe:
            return u = t.displayName || null, u !== null ? u : e(t.type) || "Memo";
          case N:
            u = t._payload, t = t._init;
            try {
              return e(t(u));
            } catch {
            }
        }
      return null;
    }
    function o(t) {
      return "" + t;
    }
    function r(t) {
      try {
        o(t);
        var u = !1;
      } catch {
        u = !0;
      }
      if (u) {
        u = console;
        var m = u.error, p = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return m.call(
          u,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), o(t);
      }
    }
    function n(t) {
      if (t === E) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === N)
        return "<...>";
      try {
        var u = e(t);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var t = F.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(t) {
      if (Y.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function c(t, u) {
      function m() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          u
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: m,
        configurable: !0
      });
    }
    function l() {
      var t = e(this.type);
      return L[t] || (L[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function f(t, u, m, p, P, I) {
      var v = m.ref;
      return t = {
        $$typeof: w,
        type: t,
        key: u,
        props: m,
        _owner: p
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function y(t, u, m, p, P, I) {
      var v = u.children;
      if (v !== void 0)
        if (p)
          if (Pe(v)) {
            for (p = 0; p < v.length; p++)
              h(v[p]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(v);
      if (Y.call(u, "key")) {
        v = e(t);
        var j = Object.keys(u).filter(function(Oe) {
          return Oe !== "key";
        });
        p = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", W[v + p] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          v,
          j,
          v
        ), W[v + p] = !0);
      }
      if (v = null, m !== void 0 && (r(m), v = "" + m), a(u) && (r(u.key), v = "" + u.key), "key" in u) {
        m = {};
        for (var V in u)
          V !== "key" && (m[V] = u[V]);
      } else m = u;
      return v && c(
        m,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), f(
        t,
        v,
        m,
        i(),
        P,
        I
      );
    }
    function h(t) {
      b(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === N && (t._payload.status === "fulfilled" ? b(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function b(t) {
      return typeof t == "object" && t !== null && t.$$typeof === w;
    }
    var g = ke, w = /* @__PURE__ */ Symbol.for("react.transitional.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), be = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ee = /* @__PURE__ */ Symbol.for("react.profiler"), _e = /* @__PURE__ */ Symbol.for("react.consumer"), ge = /* @__PURE__ */ Symbol.for("react.context"), je = /* @__PURE__ */ Symbol.for("react.forward_ref"), Re = /* @__PURE__ */ Symbol.for("react.suspense"), Se = /* @__PURE__ */ Symbol.for("react.suspense_list"), xe = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), Te = /* @__PURE__ */ Symbol.for("react.activity"), we = /* @__PURE__ */ Symbol.for("react.client.reference"), F = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, Pe = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var M, L = {}, U = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), q = C(n(s)), W = {};
    S.Fragment = E, S.jsx = function(t, u, m) {
      var p = 1e4 > F.recentlyCreatedOwnerStacks++;
      return y(
        t,
        u,
        m,
        !1,
        p ? Error("react-stack-top-frame") : U,
        p ? C(n(t)) : q
      );
    }, S.jsxs = function(t, u, m) {
      var p = 1e4 > F.recentlyCreatedOwnerStacks++;
      return y(
        t,
        u,
        m,
        !0,
        p ? Error("react-stack-top-frame") : U,
        p ? C(n(t)) : q
      );
    };
  })()), S;
}
var X;
function ze() {
  return X || (X = 1, process.env.NODE_ENV === "production" ? k.exports = Ve() : k.exports = $e()), k.exports;
}
var d = ze();
function ne(e, o, r) {
  function n(c, l) {
    if (c._zod || Object.defineProperty(c, "_zod", {
      value: {
        def: l,
        constr: a,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), c._zod.traits.has(e))
      return;
    c._zod.traits.add(e), o(c, l);
    const f = a.prototype, y = Object.keys(f);
    for (let h = 0; h < y.length; h++) {
      const b = y[h];
      b in c || (c[b] = f[b].bind(c));
    }
  }
  const i = r?.Parent ?? Object;
  class s extends i {
  }
  Object.defineProperty(s, "name", { value: e });
  function a(c) {
    var l;
    const f = r?.Parent ? new s() : this;
    n(f, c), (l = f._zod).deferred ?? (l.deferred = []);
    for (const y of f._zod.deferred)
      y();
    return f;
  }
  return Object.defineProperty(a, "init", { value: n }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (c) => r?.Parent && c instanceof r.Parent ? !0 : c?._zod?.traits?.has(e)
  }), Object.defineProperty(a, "name", { value: e }), a;
}
class De extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const Ye = {};
function oe(e) {
  return Ye;
}
function Me(e, o) {
  return typeof o == "bigint" ? o.toString() : o;
}
const se = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function A(e) {
  return typeof e == "string" ? e : e?.message;
}
function ae(e, o, r) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const i = A(e.inst?._zod.def?.error?.(e)) ?? A(o?.error?.(e)) ?? A(r.customError?.(e)) ?? A(r.localeError?.(e)) ?? "Invalid input";
    n.message = i;
  }
  return delete n.inst, delete n.continue, o?.reportInput || delete n.input, n;
}
const ie = (e, o) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: o,
    enumerable: !1
  }), e.message = JSON.stringify(o, Me, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Le = ne("$ZodError", ie), ce = ne("$ZodError", ie, { Parent: Error }), Ue = (e) => (o, r, n, i) => {
  const s = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = o._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise)
    throw new De();
  if (a.issues.length) {
    const c = new (i?.Err ?? e)(a.issues.map((l) => ae(l, s, oe())));
    throw se(c, i?.callee), c;
  }
  return a.value;
}, qe = /* @__PURE__ */ Ue(ce), We = (e) => async (o, r, n, i) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = o._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const c = new (i?.Err ?? e)(a.issues.map((l) => ae(l, s, oe())));
    throw se(c, i?.callee), c;
  }
  return a.value;
}, Je = /* @__PURE__ */ We(ce);
function H(e, o) {
  try {
    var r = e();
  } catch (n) {
    return o(n);
  }
  return r && r.then ? r.then(void 0, o) : r;
}
function Ze(e, o) {
  for (var r = {}; e.length; ) {
    var n = e[0], i = n.code, s = n.message, a = n.path.join(".");
    if (!r[a]) if ("unionErrors" in n) {
      var c = n.unionErrors[0].errors[0];
      r[a] = { message: c.message, type: c.code };
    } else r[a] = { message: s, type: i };
    if ("unionErrors" in n && n.unionErrors.forEach(function(y) {
      return y.errors.forEach(function(h) {
        return e.push(h);
      });
    }), o) {
      var l = r[a].types, f = l && l[n.code];
      r[a] = re(a, o, r, i, f ? [].concat(f, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function Ge(e, o) {
  for (var r = {}; e.length; ) {
    var n = e[0], i = n.code, s = n.message, a = n.path.join(".");
    if (!r[a]) if (n.code === "invalid_union" && n.errors.length > 0) {
      var c = n.errors[0][0];
      r[a] = { message: c.message, type: c.code };
    } else r[a] = { message: s, type: i };
    if (n.code === "invalid_union" && n.errors.forEach(function(y) {
      return y.forEach(function(h) {
        return e.push(h);
      });
    }), o) {
      var l = r[a].types, f = l && l[n.code];
      r[a] = re(a, o, r, i, f ? [].concat(f, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function Be(e, o, r) {
  if (r === void 0 && (r = {}), (function(n) {
    return "_def" in n && typeof n._def == "object" && "typeName" in n._def;
  })(e)) return function(n, i, s) {
    try {
      return Promise.resolve(H(function() {
        return Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](n, o)).then(function(a) {
          return s.shouldUseNativeValidation && J({}, s), { errors: {}, values: r.raw ? Object.assign({}, n) : a };
        });
      }, function(a) {
        if ((function(c) {
          return Array.isArray(c?.issues);
        })(a)) return { values: {}, errors: Z(Ze(a.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
  if ((function(n) {
    return "_zod" in n && typeof n._zod == "object";
  })(e)) return function(n, i, s) {
    try {
      return Promise.resolve(H(function() {
        return Promise.resolve((r.mode === "sync" ? qe : Je)(e, n, o)).then(function(a) {
          return s.shouldUseNativeValidation && J({}, s), { errors: {}, values: r.raw ? Object.assign({}, n) : a };
        });
      }, function(a) {
        if ((function(c) {
          return c instanceof Le;
        })(a)) return { values: {}, errors: Z(Ge(a.issues, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
function ue(e, o) {
  return o ? Object.keys(e).reduce((r, n) => {
    const i = o[n], s = e[n];
    return r[n] = s && typeof s == "object" && !Array.isArray(s) && i && typeof i == "object" && !Array.isArray(i) ? ue(s, i) : i !== void 0 ? i : s, r;
  }, {}) : { ...e };
}
const Xe = (e = "", o = "post") => async (r) => {
  await fetch(e, {
    method: o,
    body: JSON.stringify(r)
  }).then(async (n) => {
    console.log(n);
  });
}, ir = ({
  form: e,
  children: o,
  ...r
}) => {
  const n = r?.onSubmit || Xe(r?.action ?? "", r?.method);
  return /* @__PURE__ */ d.jsx(Ne, { ...e, children: /* @__PURE__ */ d.jsx(
    "form",
    {
      noValidate: !0,
      ...r,
      onSubmit: e.handleSubmit(n),
      children: /* @__PURE__ */ d.jsx("fieldset", { className: "form-fieldset-main", children: o })
    }
  ) });
};
function cr(e, o) {
  return Fe({
    ...o,
    defaultValues: ue(e.defaultValues, o?.defaultValues),
    resolver: Be(e?.schema)
  });
}
function ur(e) {
  function o(s) {
    return s && "schema" in s && "defaultValue" in s;
  }
  const r = (s) => {
    const a = {}, c = {};
    for (const l in s) {
      const f = s[l];
      if (o(f))
        a[l] = f?.schema, c[l] = f?.defaultValue;
      else {
        const y = r(f);
        a[l] = _.object(y?.schema), c[l] = y?.defaultValues;
      }
    }
    return { schema: a, defaultValues: c };
  }, { schema: n, defaultValues: i } = r(e);
  return { schema: _.object(n), defaultValues: i };
}
const lr = {
  string: (e = _.string(), o = "") => ({ schema: _.preprocess((r) => r ? String(r) : void 0, e), defaultValue: o }),
  number: (e = _.number(), o = "") => ({ schema: _.preprocess((r) => r ? Number(r) : void 0, e), defaultValue: o })
};
_.config({
  customError: (e) => {
    if (e.code === "invalid_type")
      return e.input === void 0 ? "Required" : void 0;
  }
});
function le(...e) {
  const o = [];
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    Array.isArray(n) ? o.push(le.apply(null, n)) : typeof n == "object" ? Object.entries(n).map(
      ([i, s]) => s ? o.push(i) : !0
    ) : typeof n == "string" && o.push(n.trim());
  }
  return o.join(" ");
}
function T(e) {
  return (r) => {
    if (!r?.name)
      return;
    const { isSubmitted: n } = z(), i = He(r?.name ?? ""), s = r?.id || Ae();
    return /* @__PURE__ */ d.jsxs(
      fe,
      {
        label: r?.label,
        id: s,
        required: r?.required || !1,
        hasError: !!i,
        isSubmitted: n,
        children: [
          /* @__PURE__ */ d.jsx(e, { ...r, label: null, id: s }),
          i && /* @__PURE__ */ d.jsx(de, { error: i })
        ]
      }
    );
  };
}
const fe = K(
  ({ id: e, label: o, required: r, hasError: n, isSubmitted: i, children: s }) => /* @__PURE__ */ d.jsxs("div", { className: le("form-control", { required: r, "is-invalid": n, "is-valid": !n && i }), children: [
    o && /* @__PURE__ */ d.jsx("label", { htmlFor: e, children: o || null }),
    s
  ] })
);
fe.displayName = "FieldControl";
const He = (e) => {
  const { errors: o, isSubmitted: r } = z({ name: e });
  if (!r)
    return;
  const n = e.split(".");
  let i = o;
  for (const s of n) i = i?.[s] || void 0;
  return Array.isArray(i) && (i = i[0]), i;
}, de = K(
  ({ error: e }) => e && /* @__PURE__ */ d.jsx("div", { className: "invalid-feedback", "data-error-type": e?.type || null, children: e?.message || null })
);
de.displayName = "ErrorMessage";
class Q extends Error {
  code;
  constructor(o, r, n) {
    super(o, n), this.code = r, this.name = "ServerError";
  }
}
const Qe = ({ templateId: e }) => {
  const o = ee(null);
  return $(() => {
    const r = document.getElementById(e);
    r && o.current && (o.current.innerHTML = "", o.current.appendChild(
      r.content.cloneNode(!0)
    ));
  }, []), /* @__PURE__ */ d.jsx("div", { ref: o, className: "form-loading-indicator" });
};
async function Ke(e) {
  return fetch(e, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  }).then(async (o) => {
    if (o.status !== 200)
      throw new Q("server error", o.status);
    return await o.json().catch((r) => {
      throw new Q("Bad response from server", 500, { cause: r });
    });
  });
}
const fr = (e, o, r = {}) => {
  const n = {
    templateId: "form-loading-indicator",
    retry: !0,
    ...r
  };
  return function(s) {
    const [a, c] = O(!0), [l, f] = O(null), [y, h] = O({}), [b, g] = O(Date.now());
    $(() => {
      f(null), c(!0), Ke(o).then((E) => {
        h(E);
      }).catch((E) => {
        f(E);
      }).finally(() => c(!1));
    }, [b]);
    const w = () => {
      g(Date.now());
    };
    return a ? /* @__PURE__ */ d.jsx(Qe, { templateId: n?.templateId }) : l ? /* @__PURE__ */ d.jsxs("div", { className: "form-server-errors", children: [
      l?.message,
      n?.retry && /* @__PURE__ */ d.jsx("button", { type: "button", onClick: w, children: "Retry" })
    ] }) : /* @__PURE__ */ d.jsx(e, { ...s, ...y });
  };
}, me = ({ name: e, type: o = "text", ...r }) => {
  const { register: n } = x();
  return /* @__PURE__ */ d.jsx("input", { type: o, ...n(e), ...r });
};
me.displayName = "FieldInput";
const dr = T(me), pe = ({ name: e, ...o }) => {
  const { register: r } = x();
  return /* @__PURE__ */ d.jsx("textarea", { ...r(e), ...o });
};
pe.displayName = "FieldTextarea";
const mr = T(pe), ve = ({ name: e, children: o, ...r }) => {
  const { register: n } = x();
  return /* @__PURE__ */ d.jsx("select", { ...n(e), ...r, children: o });
};
ve.displayName = "FieldNativeSelect";
const pr = T(ve), er = (e, o) => {
  const r = (i) => i.flatMap(
    (s) => s.options ? r(s.options) : [s]
  ), n = r(o);
  return Array.isArray(e) ? n.filter((i) => e.includes(i.value)) || [] : n.find((i) => i.value === e) || null;
}, ye = ({ name: e, options: o = [], ...r }) => {
  const { resetField: n, formState: { defaultValues: i } } = x(), s = ee(!1);
  return $(() => {
    const a = e.split(".");
    let c = i;
    for (const l of a) c = c?.[l] || null;
    n(e, { defaultValue: er(c, o) }), s.current = !0;
  }, []), /* @__PURE__ */ d.jsx(
    te,
    {
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ d.jsx(
        Ce,
        {
          ...a,
          value: s.current && a.value,
          inputId: r?.id,
          options: o || [],
          classNamePrefix: "react-select",
          unstyled: !0,
          ...r,
          className: [r?.className || null, "react-select-container"].join(" "),
          id: void 0
        }
      )
    }
  );
};
ye.displayName = "FieldReactSelect";
const vr = T(ye), he = ({ name: e, ...o }) => /* @__PURE__ */ d.jsx(
  te,
  {
    name: e,
    render: ({ field: r }) => /* @__PURE__ */ d.jsx(
      Ie,
      {
        ...r,
        selected: r.value ?? null,
        ...o
      }
    )
  }
);
he.displayName = "FieldDatepicker";
const yr = T(he), hr = ({ name: e, ...o }) => {
  const { register: r } = x();
  return /* @__PURE__ */ d.jsx("input", { type: "hidden", ...r(e), ...o });
}, br = ({ label: e, ...o }) => {
  const { isDirty: r, isSubmitting: n } = z();
  return /* @__PURE__ */ d.jsx("button", { type: "submit", disabled: !r || n, ...o, children: e || "" });
};
export {
  fe as FieldControl,
  yr as FieldDatepicker,
  hr as FieldHidden,
  dr as FieldInput,
  pr as FieldNativeSelect,
  vr as FieldReactSelect,
  mr as FieldTextarea,
  ir as Form,
  br as Submit,
  cr as createForm,
  ur as createSchema,
  Ke as fetchDefaultValues,
  lr as field,
  T as withFieldControl,
  fr as withFormLoader
};
