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
  function n(t, i, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      a = {};
      for (var c in i)
        c !== "key" && (a[c] = i[c]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: t,
      key: s,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return j.Fragment = o, j.jsx = n, j.jsxs = n, j;
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
        case b:
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
          case be:
            return r.displayName || "Context";
          case he:
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
    function n(r) {
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
    function t(r) {
      if (r === b) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === A)
        return "<...>";
      try {
        var u = e(r);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = N.A;
      return r === null ? null : r.getOwner();
    }
    function a() {
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
      if (p = null, d !== void 0 && (n(d), p = "" + d), s(u) && (n(u.key), p = "" + u.key), "key" in u) {
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
        i(),
        w,
        C
      );
    }
    function E(r) {
      h(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === A && (r._payload.status === "fulfilled" ? h(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function h(r) {
      return typeof r == "object" && r !== null && r.$$typeof === T;
    }
    var _ = Pe, T = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), ye = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ee = /* @__PURE__ */ Symbol.for("react.profiler"), he = /* @__PURE__ */ Symbol.for("react.consumer"), be = /* @__PURE__ */ Symbol.for("react.context"), _e = /* @__PURE__ */ Symbol.for("react.forward_ref"), ge = /* @__PURE__ */ Symbol.for("react.suspense"), je = /* @__PURE__ */ Symbol.for("react.suspense_list"), Re = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), Se = /* @__PURE__ */ Symbol.for("react.activity"), xe = /* @__PURE__ */ Symbol.for("react.client.reference"), N = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, Te = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var M, V = {}, L = _.react_stack_bottom_frame.bind(
      _,
      a
    )(), U = F(t(a)), q = {};
    R.Fragment = b, R.jsx = function(r, u, d) {
      var m = 1e4 > N.recentlyCreatedOwnerStacks++;
      return y(
        r,
        u,
        d,
        !1,
        m ? Error("react-stack-top-frame") : L,
        m ? F(t(r)) : U
      );
    }, R.jsxs = function(r, u, d) {
      var m = 1e4 > N.recentlyCreatedOwnerStacks++;
      return y(
        r,
        u,
        d,
        !0,
        m ? Error("react-stack-top-frame") : L,
        m ? F(t(r)) : U
      );
    };
  })()), R;
}
var B;
function $e() {
  return B || (B = 1, process.env.NODE_ENV === "production" ? O.exports = Ce() : O.exports = Ie()), O.exports;
}
var l = $e();
function te(e, o, n) {
  function t(c, f) {
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
      const h = y[E];
      h in c || (c[h] = v[h].bind(c));
    }
  }
  const i = n?.Parent ?? Object;
  class a extends i {
  }
  Object.defineProperty(a, "name", { value: e });
  function s(c) {
    var f;
    const v = n?.Parent ? new a() : this;
    t(v, c), (f = v._zod).deferred ?? (f.deferred = []);
    for (const y of v._zod.deferred)
      y();
    return v;
  }
  return Object.defineProperty(s, "init", { value: t }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (c) => n?.Parent && c instanceof n.Parent ? !0 : c?._zod?.traits?.has(e)
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
function se(e, o, n) {
  const t = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const i = k(e.inst?._zod.def?.error?.(e)) ?? k(o?.error?.(e)) ?? k(n.customError?.(e)) ?? k(n.localeError?.(e)) ?? "Invalid input";
    t.message = i;
  }
  return delete t.inst, delete t.continue, o?.reportInput || delete t.input, t;
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
}, Me = te("$ZodError", ae), ie = te("$ZodError", ae, { Parent: Error }), Ve = (e) => (o, n, t, i) => {
  const a = t ? Object.assign(t, { async: !1 }) : { async: !1 }, s = o._zod.run({ value: n, issues: [] }, a);
  if (s instanceof Promise)
    throw new De();
  if (s.issues.length) {
    const c = new (i?.Err ?? e)(s.issues.map((f) => se(f, a, ne())));
    throw oe(c, i?.callee), c;
  }
  return s.value;
}, Le = /* @__PURE__ */ Ve(ie), Ue = (e) => async (o, n, t, i) => {
  const a = t ? Object.assign(t, { async: !0 }) : { async: !0 };
  let s = o._zod.run({ value: n, issues: [] }, a);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const c = new (i?.Err ?? e)(s.issues.map((f) => se(f, a, ne())));
    throw oe(c, i?.callee), c;
  }
  return s.value;
}, qe = /* @__PURE__ */ Ue(ie);
function X(e, o) {
  try {
    var n = e();
  } catch (t) {
    return o(t);
  }
  return n && n.then ? n.then(void 0, o) : n;
}
function We(e, o) {
  for (var n = {}; e.length; ) {
    var t = e[0], i = t.code, a = t.message, s = t.path.join(".");
    if (!n[s]) if ("unionErrors" in t) {
      var c = t.unionErrors[0].errors[0];
      n[s] = { message: c.message, type: c.code };
    } else n[s] = { message: a, type: i };
    if ("unionErrors" in t && t.unionErrors.forEach(function(y) {
      return y.errors.forEach(function(E) {
        return e.push(E);
      });
    }), o) {
      var f = n[s].types, v = f && f[t.code];
      n[s] = ee(s, o, n, i, v ? [].concat(v, t.message) : t.message);
    }
    e.shift();
  }
  return n;
}
function Je(e, o) {
  for (var n = {}; e.length; ) {
    var t = e[0], i = t.code, a = t.message, s = t.path.join(".");
    if (!n[s]) if (t.code === "invalid_union" && t.errors.length > 0) {
      var c = t.errors[0][0];
      n[s] = { message: c.message, type: c.code };
    } else n[s] = { message: a, type: i };
    if (t.code === "invalid_union" && t.errors.forEach(function(y) {
      return y.forEach(function(E) {
        return e.push(E);
      });
    }), o) {
      var f = n[s].types, v = f && f[t.code];
      n[s] = ee(s, o, n, i, v ? [].concat(v, t.message) : t.message);
    }
    e.shift();
  }
  return n;
}
function Ze(e, o, n) {
  if (n === void 0 && (n = {}), (function(t) {
    return "_def" in t && typeof t._def == "object" && "typeName" in t._def;
  })(e)) return function(t, i, a) {
    try {
      return Promise.resolve(X(function() {
        return Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](t, o)).then(function(s) {
          return a.shouldUseNativeValidation && W({}, a), { errors: {}, values: n.raw ? Object.assign({}, t) : s };
        });
      }, function(s) {
        if ((function(c) {
          return Array.isArray(c?.issues);
        })(s)) return { values: {}, errors: J(We(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
  if ((function(t) {
    return "_zod" in t && typeof t._zod == "object";
  })(e)) return function(t, i, a) {
    try {
      return Promise.resolve(X(function() {
        return Promise.resolve((n.mode === "sync" ? Le : qe)(e, t, o)).then(function(s) {
          return a.shouldUseNativeValidation && W({}, a), { errors: {}, values: n.raw ? Object.assign({}, t) : s };
        });
      }, function(s) {
        if ((function(c) {
          return c instanceof Me;
        })(s)) return { values: {}, errors: J(Je(s.issues, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
const Ge = (e, o) => async (n) => {
  await fetch(e, {
    method: o,
    body: JSON.stringify(n)
  }).then(async (t) => {
    console.log(t);
  });
}, or = ({
  form: e,
  children: o,
  action: n,
  method: t = "post",
  onSubmit: i,
  ...a
}) => {
  const s = i || Ge(n ?? "", t);
  return /* @__PURE__ */ l.jsx(ke, { ...e, children: /* @__PURE__ */ l.jsx(
    "form",
    {
      action: n,
      method: t,
      onSubmit: e.handleSubmit(s),
      noValidate: !0,
      ...a,
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
  for (let n = 0; n < e.length; n += 1) {
    const t = e[n];
    Array.isArray(t) ? o.push(ce.apply(null, t)) : typeof t == "object" ? Object.entries(t).map(
      ([i, a]) => a ? o.push(i) : !0
    ) : typeof t == "string" && o.push(t.trim());
  }
  return o.join(" ");
}
function x(e) {
  return ({ label: n, ...t }) => {
    const { isSubmitted: i } = D(), a = Be(t?.name ?? ""), s = t?.id || Oe();
    return /* @__PURE__ */ l.jsxs(
      ue,
      {
        label: n,
        id: s,
        required: t?.required || !1,
        hasError: !!a,
        isSubmitted: i,
        children: [
          /* @__PURE__ */ l.jsx(e, { ...t, id: s }),
          a && /* @__PURE__ */ l.jsx(le, { error: a })
        ]
      }
    );
  };
}
const ue = Q(
  ({ id: e, label: o, required: n, hasError: t, isSubmitted: i, children: a }) => /* @__PURE__ */ l.jsxs("div", { className: ce("field-control", { required: n, "is-invalid": t, "is-valid": !t && i }), children: [
    o && /* @__PURE__ */ l.jsx("label", { htmlFor: e, children: o || null }),
    a
  ] })
);
ue.displayName = "FieldControl";
const Be = (e) => {
  const { errors: o, isSubmitted: n } = D({ name: e });
  if (!n)
    return;
  const t = e.split(".");
  let i = o;
  for (const a of t) i = i?.[a] || void 0;
  return Array.isArray(i) && (i = i[0]), i;
}, le = Q(
  ({ error: e }) => e && /* @__PURE__ */ l.jsx("div", { className: "field-error", "data-error-type": e?.type || null, children: e?.message || null })
);
le.displayName = "ErrorMessage";
class H extends Error {
  code;
  constructor(o, n, t) {
    super(o, t), this.code = n, this.name = "ServerError";
  }
}
const Xe = ({ templateId: e }) => {
  const o = K(null);
  return $(() => {
    const n = document.getElementById(e);
    n && o.current && (o.current.innerHTML = "", o.current.appendChild(
      n.content.cloneNode(!0)
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
    return await o.json().catch((n) => {
      throw new H("Bad response from server", 500, { cause: n });
    });
  });
}
const ar = (e, o, n = {}) => {
  const t = {
    templateId: "form-loading-indicator",
    retry: !0,
    ...n
  };
  return function(a) {
    const [s, c] = P(!0), [f, v] = P(null), [y, E] = P({}), [h, _] = P(Date.now());
    $(() => {
      v(null), c(!0), He(o).then((b) => {
        E(b);
      }).catch((b) => {
        v(b);
      }).finally(() => c(!1));
    }, [h]);
    const T = () => {
      _(Date.now());
    };
    return s ? /* @__PURE__ */ l.jsx(Xe, { templateId: t?.templateId }) : f ? /* @__PURE__ */ l.jsxs("div", { className: "form-server-errors", children: [
      f?.message,
      t?.retry && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: T, children: "Retry" })
    ] }) : /* @__PURE__ */ l.jsx(e, { ...a, ...y });
  };
}, fe = ({ name: e, type: o = "text", ...n }) => {
  const { register: t } = S();
  return /* @__PURE__ */ l.jsx("input", { type: o, ...t(e), ...n });
};
fe.displayName = "FieldInput";
const ir = x(fe), de = ({ name: e, ...o }) => {
  const { register: n } = S();
  return /* @__PURE__ */ l.jsx("textarea", { ...n(e), ...o });
};
de.displayName = "FieldTextarea";
const cr = x(de), me = ({ name: e, children: o, ...n }) => {
  const { register: t } = S();
  return /* @__PURE__ */ l.jsx("select", { ...t(e), ...n, children: o });
};
me.displayName = "FieldNativeSelect";
const ur = x(me), Qe = (e, o) => {
  const n = (i) => i.flatMap(
    (a) => a.options ? n(a.options) : [a]
  ), t = n(o);
  return Array.isArray(e) ? t.filter((i) => e.includes(i.value)) || [] : t.find((i) => i.value === e) || null;
}, pe = ({ name: e, options: o, ...n }) => {
  const { resetField: t, formState: { defaultValues: i } } = S(), a = K(!1);
  return $(() => {
    const s = e.split(".");
    let c = i;
    for (const f of s) c = c?.[f] || null;
    t(e, { defaultValue: Qe(c, o) }), a.current = !0;
  }, []), /* @__PURE__ */ l.jsx(
    re,
    {
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ l.jsx(
        Ne,
        {
          ...s,
          value: a.current && s.value,
          inputId: n?.id,
          options: o || [],
          ...n,
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
    render: ({ field: n }) => /* @__PURE__ */ l.jsx(Fe, { ...n, ...o, selected: n.value || null })
  }
);
ve.displayName = "FieldDatepicker";
const fr = x(ve), dr = ({ name: e, ...o }) => {
  const { register: n } = S();
  return /* @__PURE__ */ l.jsx("input", { type: "hidden", ...n(e), ...o });
}, mr = ({ label: e, ...o }) => {
  const { isDirty: n, isSubmitting: t } = D();
  return /* @__PURE__ */ l.jsx("button", { type: "submit", disabled: !n || t, ...o, children: e || "" });
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
