import Pe, { memo as Q, useId as Oe, useState as P, useEffect as $, useRef as K } from "react";
import { validateFieldsNatively as W, toNestErrors as J } from "@hookform/resolvers";
import { appendErrors as ee, FormProvider as ke, useForm as Ae, useFormState as D, useFormContext as S, Controller as re } from "react-hook-form";
import Ne from "react-select";
import Fe from "react-datepicker";
var O = { exports: {} }, j = {};
var Z;
function Ce() {
  if (Z) return j;
  Z = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(n, a, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      i = {};
      for (var c in a)
        c !== "key" && (i[c] = a[c]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return j.Fragment = o, j.jsx = t, j.jsxs = t, j;
}
var R = {};
var G;
function Ie() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === xe ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case h:
          return "Fragment";
        case Ee:
          return "Profiler";
        case ye:
          return "StrictMode";
        case ge:
          return "Suspense";
        case je:
          return "SuspenseList";
        case Se:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case z:
            return "Portal";
          case he:
            return r.displayName || "Context";
          case be:
            return (r._context.displayName || "Context") + ".Consumer";
          case _e:
            var u = r.render;
            return r = r.displayName, r || (r = u.displayName || u.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Re:
            return u = r.displayName || null, u !== null ? u : e(r.type) || "Memo";
          case A:
            u = r._payload, r = r._init;
            try {
              return e(r(u));
            } catch {
            }
        }
      return null;
    }
    function o(r) {
      return "" + r;
    }
    function t(r) {
      try {
        o(r);
        var u = !1;
      } catch {
        u = !0;
      }
      if (u) {
        u = console;
        var d = u.error, m = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return d.call(
          u,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), o(r);
      }
    }
    function n(r) {
      if (r === h) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === A)
        return "<...>";
      try {
        var u = e(r);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var r = N.A;
      return r === null ? null : r.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(r) {
      if (Y.call(r, "key")) {
        var u = Object.getOwnPropertyDescriptor(r, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function c(r, u) {
      function d() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          u
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: d,
        configurable: !0
      });
    }
    function f() {
      var r = e(this.type);
      return V[r] || (V[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function v(r, u, d, m, w, C) {
      var p = d.ref;
      return r = {
        $$typeof: T,
        type: r,
        key: u,
        props: d,
        _owner: m
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function y(r, u, d, m, w, C) {
      var p = u.children;
      if (p !== void 0)
        if (m)
          if (Te(p)) {
            for (m = 0; m < p.length; m++)
              E(p[m]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(p);
      if (Y.call(u, "key")) {
        p = e(r);
        var g = Object.keys(u).filter(function(we) {
          return we !== "key";
        });
        m = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", q[p + m] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          p,
          g,
          p
        ), q[p + m] = !0);
      }
      if (p = null, d !== void 0 && (t(d), p = "" + d), s(u) && (t(u.key), p = "" + u.key), "key" in u) {
        d = {};
        for (var I in u)
          I !== "key" && (d[I] = u[I]);
      } else d = u;
      return p && c(
        d,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), v(
        r,
        p,
        d,
        a(),
        w,
        C
      );
    }
    function E(r) {
      b(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === A && (r._payload.status === "fulfilled" ? b(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function b(r) {
      return typeof r == "object" && r !== null && r.$$typeof === T;
    }
    var _ = Pe, T = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), ye = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ee = /* @__PURE__ */ Symbol.for("react.profiler"), be = /* @__PURE__ */ Symbol.for("react.consumer"), he = /* @__PURE__ */ Symbol.for("react.context"), _e = /* @__PURE__ */ Symbol.for("react.forward_ref"), ge = /* @__PURE__ */ Symbol.for("react.suspense"), je = /* @__PURE__ */ Symbol.for("react.suspense_list"), Re = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), Se = /* @__PURE__ */ Symbol.for("react.activity"), xe = /* @__PURE__ */ Symbol.for("react.client.reference"), N = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, Te = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var M, V = {}, L = _.react_stack_bottom_frame.bind(
      _,
      i
    )(), U = F(n(i)), q = {};
    R.Fragment = h, R.jsx = function(r, u, d) {
      var m = 1e4 > N.recentlyCreatedOwnerStacks++;
      return y(
        r,
        u,
        d,
        !1,
        m ? Error("react-stack-top-frame") : L,
        m ? F(n(r)) : U
      );
    }, R.jsxs = function(r, u, d) {
      var m = 1e4 > N.recentlyCreatedOwnerStacks++;
      return y(
        r,
        u,
        d,
        !0,
        m ? Error("react-stack-top-frame") : L,
        m ? F(n(r)) : U
      );
    };
  })()), R;
}
var B;
function $e() {
  return B || (B = 1, process.env.NODE_ENV === "production" ? O.exports = Ce() : O.exports = Ie()), O.exports;
}
var l = $e();
function te(e, o, t) {
  function n(c, f) {
    if (c._zod || Object.defineProperty(c, "_zod", {
      value: {
        def: f,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), c._zod.traits.has(e))
      return;
    c._zod.traits.add(e), o(c, f);
    const v = s.prototype, y = Object.keys(v);
    for (let E = 0; E < y.length; E++) {
      const b = y[E];
      b in c || (c[b] = v[b].bind(c));
    }
  }
  const a = t?.Parent ?? Object;
  class i extends a {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(c) {
    var f;
    const v = t?.Parent ? new i() : this;
    n(v, c), (f = v._zod).deferred ?? (f.deferred = []);
    for (const y of v._zod.deferred)
      y();
    return v;
  }
  return Object.defineProperty(s, "init", { value: n }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (c) => t?.Parent && c instanceof t.Parent ? !0 : c?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class De extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const ze = {};
function ne(e) {
  return ze;
}
function Ye(e, o) {
  return typeof o == "bigint" ? o.toString() : o;
}
const oe = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function k(e) {
  return typeof e == "string" ? e : e?.message;
}
function se(e, o, t) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const a = k(e.inst?._zod.def?.error?.(e)) ?? k(o?.error?.(e)) ?? k(t.customError?.(e)) ?? k(t.localeError?.(e)) ?? "Invalid input";
    n.message = a;
  }
  return delete n.inst, delete n.continue, o?.reportInput || delete n.input, n;
}
const ae = (e, o) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: o,
    enumerable: !1
  }), e.message = JSON.stringify(o, Ye, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Me = te("$ZodError", ae), ie = te("$ZodError", ae, { Parent: Error }), Ve = (e) => (o, t, n, a) => {
  const i = n ? Object.assign(n, { async: !1 }) : { async: !1 }, s = o._zod.run({ value: t, issues: [] }, i);
  if (s instanceof Promise)
    throw new De();
  if (s.issues.length) {
    const c = new (a?.Err ?? e)(s.issues.map((f) => se(f, i, ne())));
    throw oe(c, a?.callee), c;
  }
  return s.value;
}, Le = /* @__PURE__ */ Ve(ie), Ue = (e) => async (o, t, n, a) => {
  const i = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = o._zod.run({ value: t, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const c = new (a?.Err ?? e)(s.issues.map((f) => se(f, i, ne())));
    throw oe(c, a?.callee), c;
  }
  return s.value;
}, qe = /* @__PURE__ */ Ue(ie);
function X(e, o) {
  try {
    var t = e();
  } catch (n) {
    return o(n);
  }
  return t && t.then ? t.then(void 0, o) : t;
}
function We(e, o) {
  for (var t = {}; e.length; ) {
    var n = e[0], a = n.code, i = n.message, s = n.path.join(".");
    if (!t[s]) if ("unionErrors" in n) {
      var c = n.unionErrors[0].errors[0];
      t[s] = { message: c.message, type: c.code };
    } else t[s] = { message: i, type: a };
    if ("unionErrors" in n && n.unionErrors.forEach(function(y) {
      return y.errors.forEach(function(E) {
        return e.push(E);
      });
    }), o) {
      var f = t[s].types, v = f && f[n.code];
      t[s] = ee(s, o, t, a, v ? [].concat(v, n.message) : n.message);
    }
    e.shift();
  }
  return t;
}
function Je(e, o) {
  for (var t = {}; e.length; ) {
    var n = e[0], a = n.code, i = n.message, s = n.path.join(".");
    if (!t[s]) if (n.code === "invalid_union" && n.errors.length > 0) {
      var c = n.errors[0][0];
      t[s] = { message: c.message, type: c.code };
    } else t[s] = { message: i, type: a };
    if (n.code === "invalid_union" && n.errors.forEach(function(y) {
      return y.forEach(function(E) {
        return e.push(E);
      });
    }), o) {
      var f = t[s].types, v = f && f[n.code];
      t[s] = ee(s, o, t, a, v ? [].concat(v, n.message) : n.message);
    }
    e.shift();
  }
  return t;
}
function Ze(e, o, t) {
  if (t === void 0 && (t = {}), (function(n) {
    return "_def" in n && typeof n._def == "object" && "typeName" in n._def;
  })(e)) return function(n, a, i) {
    try {
      return Promise.resolve(X(function() {
        return Promise.resolve(e[t.mode === "sync" ? "parse" : "parseAsync"](n, o)).then(function(s) {
          return i.shouldUseNativeValidation && W({}, i), { errors: {}, values: t.raw ? Object.assign({}, n) : s };
        });
      }, function(s) {
        if ((function(c) {
          return Array.isArray(c?.issues);
        })(s)) return { values: {}, errors: J(We(s.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
  if ((function(n) {
    return "_zod" in n && typeof n._zod == "object";
  })(e)) return function(n, a, i) {
    try {
      return Promise.resolve(X(function() {
        return Promise.resolve((t.mode === "sync" ? Le : qe)(e, n, o)).then(function(s) {
          return i.shouldUseNativeValidation && W({}, i), { errors: {}, values: t.raw ? Object.assign({}, n) : s };
        });
      }, function(s) {
        if ((function(c) {
          return c instanceof Me;
        })(s)) return { values: {}, errors: J(Je(s.issues, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
const Ge = (e = "", o = "post") => async (t) => {
  await fetch(e, {
    method: o,
    body: JSON.stringify(t)
  }).then(async (n) => {
    console.log(n);
  });
}, or = ({
  form: e,
  children: o,
  ...t
}) => {
  const n = t?.onSubmit || Ge(t?.action ?? "", t?.method);
  return /* @__PURE__ */ l.jsx(ke, { ...e, children: /* @__PURE__ */ l.jsx(
    "form",
    {
      noValidate: !0,
      ...t,
      onSubmit: e.handleSubmit(n),
      children: /* @__PURE__ */ l.jsx("fieldset", { children: o })
    }
  ) });
};
function sr(e, o) {
  return Ae({
    ...o,
    resolver: Ze(e)
  });
}
function ce(...e) {
  const o = [];
  for (let t = 0; t < e.length; t += 1) {
    const n = e[t];
    Array.isArray(n) ? o.push(ce.apply(null, n)) : typeof n == "object" ? Object.entries(n).map(
      ([a, i]) => i ? o.push(a) : !0
    ) : typeof n == "string" && o.push(n.trim());
  }
  return o.join(" ");
}
function x(e) {
  return (t) => {
    const { isSubmitted: n } = D(), a = Be(t?.name ?? ""), i = t?.id || Oe();
    return /* @__PURE__ */ l.jsxs(
      ue,
      {
        label: t?.label,
        id: i,
        required: t?.required || !1,
        hasError: !!a,
        isSubmitted: n,
        children: [
          /* @__PURE__ */ l.jsx(e, { ...t, label: null, id: i }),
          a && /* @__PURE__ */ l.jsx(le, { error: a })
        ]
      }
    );
  };
}
const ue = Q(
  ({ id: e, label: o, required: t, hasError: n, isSubmitted: a, children: i }) => /* @__PURE__ */ l.jsxs("div", { className: ce("field-control", { required: t, "is-invalid": n, "is-valid": !n && a }), children: [
    o && /* @__PURE__ */ l.jsx("label", { htmlFor: e, children: o || null }),
    i
  ] })
);
ue.displayName = "FieldControl";
const Be = (e) => {
  const { errors: o, isSubmitted: t } = D({ name: e });
  if (!t)
    return;
  const n = e.split(".");
  let a = o;
  for (const i of n) a = a?.[i] || void 0;
  return Array.isArray(a) && (a = a[0]), a;
}, le = Q(
  ({ error: e }) => e && /* @__PURE__ */ l.jsx("div", { className: "field-error", "data-error-type": e?.type || null, children: e?.message || null })
);
le.displayName = "ErrorMessage";
class H extends Error {
  code;
  constructor(o, t, n) {
    super(o, n), this.code = t, this.name = "ServerError";
  }
}
const Xe = ({ templateId: e }) => {
  const o = K(null);
  return $(() => {
    const t = document.getElementById(e);
    t && o.current && (o.current.innerHTML = "", o.current.appendChild(
      t.content.cloneNode(!0)
    ));
  }, []), /* @__PURE__ */ l.jsx("div", { ref: o, className: "form-loading-indicator" });
};
async function He(e) {
  return fetch(e, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  }).then(async (o) => {
    if (o.status !== 200)
      throw new H("server error", o.status);
    return await o.json().catch((t) => {
      throw new H("Bad response from server", 500, { cause: t });
    });
  });
}
const ar = (e, o, t = {}) => {
  const n = {
    templateId: "form-loading-indicator",
    retry: !0,
    ...t
  };
  return function(i) {
    const [s, c] = P(!0), [f, v] = P(null), [y, E] = P({}), [b, _] = P(Date.now());
    $(() => {
      v(null), c(!0), He(o).then((h) => {
        E(h);
      }).catch((h) => {
        v(h);
      }).finally(() => c(!1));
    }, [b]);
    const T = () => {
      _(Date.now());
    };
    return s ? /* @__PURE__ */ l.jsx(Xe, { templateId: n?.templateId }) : f ? /* @__PURE__ */ l.jsxs("div", { className: "form-server-errors", children: [
      f?.message,
      n?.retry && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: T, children: "Retry" })
    ] }) : /* @__PURE__ */ l.jsx(e, { ...i, ...y });
  };
}, fe = ({ name: e, type: o = "text", ...t }) => {
  const { register: n } = S();
  return /* @__PURE__ */ l.jsx("input", { type: o, ...n(e), ...t });
};
fe.displayName = "FieldInput";
const ir = x(fe), de = ({ name: e, ...o }) => {
  const { register: t } = S();
  return /* @__PURE__ */ l.jsx("textarea", { ...t(e), ...o });
};
de.displayName = "FieldTextarea";
const cr = x(de), me = ({ name: e, children: o, ...t }) => {
  const { register: n } = S();
  return /* @__PURE__ */ l.jsx("select", { ...n(e), ...t, children: o });
};
me.displayName = "FieldNativeSelect";
const ur = x(me), Qe = (e, o) => {
  const t = (a) => a.flatMap(
    (i) => i.options ? t(i.options) : [i]
  ), n = t(o);
  return Array.isArray(e) ? n.filter((a) => e.includes(a.value)) || [] : n.find((a) => a.value === e) || null;
}, pe = ({ name: e, options: o = [], ...t }) => {
  const { resetField: n, formState: { defaultValues: a } } = S(), i = K(!1);
  return $(() => {
    const s = e.split(".");
    let c = a;
    for (const f of s) c = c?.[f] || null;
    n(e, { defaultValue: Qe(c, o) }), i.current = !0;
  }, []), /* @__PURE__ */ l.jsx(
    re,
    {
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ l.jsx(
        Ne,
        {
          ...s,
          value: i.current && s.value,
          inputId: t?.id,
          options: o || [],
          ...t,
          id: void 0
        }
      )
    }
  );
};
pe.displayName = "FieldReactSelect";
const lr = x(pe), ve = ({ name: e, ...o }) => /* @__PURE__ */ l.jsx(
  re,
  {
    name: e,
    render: ({ field: t }) => /* @__PURE__ */ l.jsx(
      Fe,
      {
        ...t,
        selected: t.value ?? null,
        ...o
      }
    )
  }
);
ve.displayName = "FieldDatepicker";
const fr = x(ve), dr = ({ name: e, ...o }) => {
  const { register: t } = S();
  return /* @__PURE__ */ l.jsx("input", { type: "hidden", ...t(e), ...o });
}, mr = ({ label: e, ...o }) => {
  const { isDirty: t, isSubmitting: n } = D();
  return /* @__PURE__ */ l.jsx("button", { type: "submit", disabled: !t || n, ...o, children: e || "" });
};
export {
  ue as FieldControl,
  fr as FieldDatepicker,
  dr as FieldHidden,
  ir as FieldInput,
  ur as FieldNativeSelect,
  lr as FieldReactSelect,
  cr as FieldTextarea,
  or as Form,
  mr as Submit,
  sr as createZodForm,
  He as fetchDefaultValues,
  x as withFieldControl,
  ar as withFormLoader
};
