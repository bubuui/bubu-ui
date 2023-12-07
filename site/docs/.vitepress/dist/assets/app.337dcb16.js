function ol(e, t) {
  const n = Object.create(null),
    s = e.split(',');
  for (let i = 0; i < s.length; i++) n[s[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const et = {},
  es = [],
  Rn = () => {},
  bb = () => !1,
  wb = /^on[^a-z]/,
  vi = (e) => wb.test(e),
  Fu = (e) => e.startsWith('onUpdate:'),
  lt = Object.assign,
  Ru = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  kb = Object.prototype.hasOwnProperty,
  Ue = (e, t) => kb.call(e, t),
  he = Array.isArray,
  ts = (e) => vs(e) === '[object Map]',
  Po = (e) => vs(e) === '[object Set]',
  oh = (e) => vs(e) === '[object Date]',
  $b = (e) => vs(e) === '[object RegExp]',
  Te = (e) => typeof e == 'function',
  We = (e) => typeof e == 'string',
  ls = (e) => typeof e == 'symbol',
  Je = (e) => e !== null && typeof e == 'object',
  Nu = (e) => (Je(e) || Te(e)) && Te(e.then) && Te(e.catch),
  D0 = Object.prototype.toString,
  vs = (e) => D0.call(e),
  xb = (e) => vs(e).slice(8, -1),
  q0 = (e) => vs(e) === '[object Object]',
  Hu = (e) =>
    We(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Xs = ol(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  sl = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Cb = /-(\w)/g,
  Zt = sl((e) => e.replace(Cb, (t, n) => (n ? n.toUpperCase() : ''))),
  Pb = /\B([A-Z])/g,
  ln = sl((e) => e.replace(Pb, '-$1').toLowerCase()),
  _i = sl((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Zs = sl((e) => (e ? `on${_i(e)}` : '')),
  Wr = (e, t) => !Object.is(e, t),
  ns = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Ha = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  za = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  ja = (e) => {
    const t = We(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let sh;
const ou = () =>
    sh ||
    (sh =
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
          ? self
          : typeof window < 'u'
            ? window
            : typeof global < 'u'
              ? global
              : {}),
  Sb =
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console',
  Tb = ol(Sb);
function dt(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = We(s) ? Mb(s) : dt(s);
      if (i) for (const a in i) t[a] = i[a];
    }
    return t;
  } else if (We(e) || Je(e)) return e;
}
const Eb = /;(?![^(]*\))/g,
  Ab = /:([^]+)/,
  Ib = /\/\*[^]*?\*\//g;
function Mb(e) {
  const t = {};
  return (
    e
      .replace(Ib, '')
      .split(Eb)
      .forEach((n) => {
        if (n) {
          const s = n.split(Ab);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ce(e) {
  let t = '';
  if (We(e)) t = e;
  else if (he(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ce(e[n]);
      s && (t += s + ' ');
    }
  else if (Je(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
function Lb(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !We(t) && (e.class = Ce(t)), n && (e.style = dt(n)), e;
}
const Ob =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Bb = ol(Ob);
function U0(e) {
  return !!e || e === '';
}
function Vb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = Kr(e[s], t[s]);
  return n;
}
function Kr(e, t) {
  if (e === t) return !0;
  let n = oh(e),
    s = oh(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = ls(e)), (s = ls(t)), n || s)) return e === t;
  if (((n = he(e)), (s = he(t)), n || s)) return n && s ? Vb(e, t) : !1;
  if (((n = Je(e)), (s = Je(t)), n || s)) {
    if (!n || !s) return !1;
    const i = Object.keys(e).length,
      a = Object.keys(t).length;
    if (i !== a) return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c),
        d = t.hasOwnProperty(c);
      if ((u && !d) || (!u && d) || !Kr(e[c], t[c])) return !1;
    }
  }
  return String(e) === String(t);
}
function il(e, t) {
  return e.findIndex((n) => Kr(n, t));
}
const Be = (e) =>
    We(e)
      ? e
      : e == null
        ? ''
        : he(e) || (Je(e) && (e.toString === D0 || !Te(e.toString)))
          ? JSON.stringify(e, W0, 2)
          : String(e),
  W0 = (e, t) =>
    t && t.__v_isRef
      ? W0(e, t.value)
      : ts(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, i]) => ((n[`${s} =>`] = i), n),
              {},
            ),
          }
        : Po(t)
          ? { [`Set(${t.size})`]: [...t.values()] }
          : Je(t) && !he(t) && !q0(t)
            ? String(t)
            : t;
let sn;
class zu {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = sn),
      !t && sn && (this.index = (sn.scopes || (sn.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = sn;
      try {
        return (sn = this), t();
      } finally {
        sn = n;
      }
    }
  }
  on() {
    sn = this;
  }
  off() {
    sn = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Fb(e) {
  return new zu(e);
}
function K0(e, t = sn) {
  t && t.active && t.effects.push(e);
}
function gi() {
  return sn;
}
function al(e) {
  sn && sn.cleanups.push(e);
}
const ju = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Y0 = (e) => (e.w & Yr) > 0,
  X0 = (e) => (e.n & Yr) > 0,
  Rb = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Yr;
  },
  Nb = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        Y0(i) && !X0(i) ? i.delete(e) : (t[n++] = i),
          (i.w &= ~Yr),
          (i.n &= ~Yr);
      }
      t.length = n;
    }
  },
  Da = new WeakMap();
let qs = 0,
  Yr = 1;
const su = 30;
let Bn;
const _o = Symbol(''),
  iu = Symbol('');
class cs {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      K0(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Bn,
      n = zr;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Bn),
        (Bn = this),
        (zr = !0),
        (Yr = 1 << ++qs),
        qs <= su ? Rb(this) : ih(this),
        this.fn()
      );
    } finally {
      qs <= su && Nb(this),
        (Yr = 1 << --qs),
        (Bn = this.parent),
        (zr = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Bn === this
      ? (this.deferStop = !0)
      : this.active &&
        (ih(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function ih(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
function Hb(e, t) {
  e.effect instanceof cs && (e = e.effect.fn);
  const n = new cs(e);
  t && (lt(n, t), t.scope && K0(n, t.scope)), (!t || !t.lazy) && n.run();
  const s = n.run.bind(n);
  return (s.effect = n), s;
}
function zb(e) {
  e.effect.stop();
}
let zr = !0;
const Z0 = [];
function _s() {
  Z0.push(zr), (zr = !1);
}
function gs() {
  const e = Z0.pop();
  zr = e === void 0 ? !0 : e;
}
function Gt(e, t, n) {
  if (zr && Bn) {
    let s = Da.get(e);
    s || Da.set(e, (s = new Map()));
    let i = s.get(n);
    i || s.set(n, (i = ju())), G0(i);
  }
}
function G0(e, t) {
  let n = !1;
  qs <= su ? X0(e) || ((e.n |= Yr), (n = !Y0(e))) : (n = !e.has(Bn)),
    n && (e.add(Bn), Bn.deps.push(e));
}
function hr(e, t, n, s, i, a) {
  const c = Da.get(e);
  if (!c) return;
  let u = [];
  if (t === 'clear') u = [...c.values()];
  else if (n === 'length' && he(e)) {
    const d = Number(s);
    c.forEach((h, _) => {
      (_ === 'length' || (!ls(_) && _ >= d)) && u.push(h);
    });
  } else
    switch ((n !== void 0 && u.push(c.get(n)), t)) {
      case 'add':
        he(e)
          ? Hu(n) && u.push(c.get('length'))
          : (u.push(c.get(_o)), ts(e) && u.push(c.get(iu)));
        break;
      case 'delete':
        he(e) || (u.push(c.get(_o)), ts(e) && u.push(c.get(iu)));
        break;
      case 'set':
        ts(e) && u.push(c.get(_o));
        break;
    }
  if (u.length === 1) u[0] && au(u[0]);
  else {
    const d = [];
    for (const h of u) h && d.push(...h);
    au(ju(d));
  }
}
function au(e, t) {
  const n = he(e) ? e : [...e];
  for (const s of n) s.computed && ah(s);
  for (const s of n) s.computed || ah(s);
}
function ah(e, t) {
  (e !== Bn || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function jb(e, t) {
  var n;
  return (n = Da.get(e)) == null ? void 0 : n.get(t);
}
const Db = ol('__proto__,__v_isRef,__isVue'),
  Q0 = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(ls),
  ),
  lh = qb();
function qb() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = qe(this);
        for (let a = 0, c = this.length; a < c; a++) Gt(s, 'get', a + '');
        const i = s[t](...n);
        return i === -1 || i === !1 ? s[t](...n.map(qe)) : i;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        _s();
        const s = qe(this)[t].apply(this, n);
        return gs(), s;
      };
    }),
    e
  );
}
function Ub(e) {
  const t = qe(this);
  return Gt(t, 'has', e), t.hasOwnProperty(e);
}
class J0 {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, s) {
    const i = this._isReadonly,
      a = this._shallow;
    if (n === '__v_isReactive') return !i;
    if (n === '__v_isReadonly') return i;
    if (n === '__v_isShallow') return a;
    if (n === '__v_raw' && s === (i ? (a ? s1 : o1) : a ? r1 : n1).get(t))
      return t;
    const c = he(t);
    if (!i) {
      if (c && Ue(lh, n)) return Reflect.get(lh, n, s);
      if (n === 'hasOwnProperty') return Ub;
    }
    const u = Reflect.get(t, n, s);
    return (ls(n) ? Q0.has(n) : Db(n)) || (i || Gt(t, 'get', n), a)
      ? u
      : _t(u)
        ? c && Hu(n)
          ? u
          : u.value
        : Je(u)
          ? i
            ? ms(u)
            : un(u)
          : u;
  }
}
class e1 extends J0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let a = t[n];
    if (ko(a) && _t(a) && !_t(s)) return !1;
    if (
      !this._shallow &&
      (!oi(s) && !ko(s) && ((a = qe(a)), (s = qe(s))),
      !he(t) && _t(a) && !_t(s))
    )
      return (a.value = s), !0;
    const c = he(t) && Hu(n) ? Number(n) < t.length : Ue(t, n),
      u = Reflect.set(t, n, s, i);
    return (
      t === qe(i) && (c ? Wr(s, a) && hr(t, 'set', n, s) : hr(t, 'add', n, s)),
      u
    );
  }
  deleteProperty(t, n) {
    const s = Ue(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && hr(t, 'delete', n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ls(n) || !Q0.has(n)) && Gt(t, 'has', n), s;
  }
  ownKeys(t) {
    return Gt(t, 'iterate', he(t) ? 'length' : _o), Reflect.ownKeys(t);
  }
}
class t1 extends J0 {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Wb = new e1(),
  Kb = new t1(),
  Yb = new e1(!0),
  Xb = new t1(!0),
  Du = (e) => e,
  ll = (e) => Reflect.getPrototypeOf(e);
function da(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = qe(e),
    a = qe(t);
  n || (Wr(t, a) && Gt(i, 'get', t), Gt(i, 'get', a));
  const { has: c } = ll(i),
    u = s ? Du : n ? Wu : si;
  if (c.call(i, t)) return u(e.get(t));
  if (c.call(i, a)) return u(e.get(a));
  e !== i && e.get(t);
}
function pa(e, t = !1) {
  const n = this.__v_raw,
    s = qe(n),
    i = qe(e);
  return (
    t || (Wr(e, i) && Gt(s, 'has', e), Gt(s, 'has', i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function ha(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Gt(qe(e), 'iterate', _o), Reflect.get(e, 'size', e)
  );
}
function ch(e) {
  e = qe(e);
  const t = qe(this);
  return ll(t).has.call(t, e) || (t.add(e), hr(t, 'add', e, e)), this;
}
function uh(e, t) {
  t = qe(t);
  const n = qe(this),
    { has: s, get: i } = ll(n);
  let a = s.call(n, e);
  a || ((e = qe(e)), (a = s.call(n, e)));
  const c = i.call(n, e);
  return (
    n.set(e, t), a ? Wr(t, c) && hr(n, 'set', e, t) : hr(n, 'add', e, t), this
  );
}
function fh(e) {
  const t = qe(this),
    { has: n, get: s } = ll(t);
  let i = n.call(t, e);
  i || ((e = qe(e)), (i = n.call(t, e))), s && s.call(t, e);
  const a = t.delete(e);
  return i && hr(t, 'delete', e, void 0), a;
}
function dh() {
  const e = qe(this),
    t = e.size !== 0,
    n = e.clear();
  return t && hr(e, 'clear', void 0, void 0), n;
}
function va(e, t) {
  return function (s, i) {
    const a = this,
      c = a.__v_raw,
      u = qe(c),
      d = t ? Du : e ? Wu : si;
    return (
      !e && Gt(u, 'iterate', _o), c.forEach((h, _) => s.call(i, d(h), d(_), a))
    );
  };
}
function _a(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      a = qe(i),
      c = ts(a),
      u = e === 'entries' || (e === Symbol.iterator && c),
      d = e === 'keys' && c,
      h = i[e](...s),
      _ = n ? Du : t ? Wu : si;
    return (
      !t && Gt(a, 'iterate', d ? iu : _o),
      {
        next() {
          const { value: m, done: y } = h.next();
          return y
            ? { value: m, done: y }
            : { value: u ? [_(m[0]), _(m[1])] : _(m), done: y };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Or(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function Zb() {
  const e = {
      get(a) {
        return da(this, a);
      },
      get size() {
        return ha(this);
      },
      has: pa,
      add: ch,
      set: uh,
      delete: fh,
      clear: dh,
      forEach: va(!1, !1),
    },
    t = {
      get(a) {
        return da(this, a, !1, !0);
      },
      get size() {
        return ha(this);
      },
      has: pa,
      add: ch,
      set: uh,
      delete: fh,
      clear: dh,
      forEach: va(!1, !0),
    },
    n = {
      get(a) {
        return da(this, a, !0);
      },
      get size() {
        return ha(this, !0);
      },
      has(a) {
        return pa.call(this, a, !0);
      },
      add: Or('add'),
      set: Or('set'),
      delete: Or('delete'),
      clear: Or('clear'),
      forEach: va(!0, !1),
    },
    s = {
      get(a) {
        return da(this, a, !0, !0);
      },
      get size() {
        return ha(this, !0);
      },
      has(a) {
        return pa.call(this, a, !0);
      },
      add: Or('add'),
      set: Or('set'),
      delete: Or('delete'),
      clear: Or('clear'),
      forEach: va(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((a) => {
      (e[a] = _a(a, !1, !1)),
        (n[a] = _a(a, !0, !1)),
        (t[a] = _a(a, !1, !0)),
        (s[a] = _a(a, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Gb, Qb, Jb, e8] = Zb();
function cl(e, t) {
  const n = t ? (e ? e8 : Jb) : e ? Qb : Gb;
  return (s, i, a) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
        ? e
        : i === '__v_raw'
          ? s
          : Reflect.get(Ue(n, i) && i in s ? n : s, i, a);
}
const t8 = { get: cl(!1, !1) },
  n8 = { get: cl(!1, !0) },
  r8 = { get: cl(!0, !1) },
  o8 = { get: cl(!0, !0) },
  n1 = new WeakMap(),
  r1 = new WeakMap(),
  o1 = new WeakMap(),
  s1 = new WeakMap();
function s8(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function i8(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : s8(xb(e));
}
function un(e) {
  return ko(e) ? e : ul(e, !1, Wb, t8, n1);
}
function qu(e) {
  return ul(e, !1, Yb, n8, r1);
}
function ms(e) {
  return ul(e, !0, Kb, r8, o1);
}
function a8(e) {
  return ul(e, !0, Xb, o8, s1);
}
function ul(e, t, n, s, i) {
  if (!Je(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const a = i.get(e);
  if (a) return a;
  const c = i8(e);
  if (c === 0) return e;
  const u = new Proxy(e, c === 2 ? s : n);
  return i.set(e, u), u;
}
function go(e) {
  return ko(e) ? go(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ko(e) {
  return !!(e && e.__v_isReadonly);
}
function oi(e) {
  return !!(e && e.__v_isShallow);
}
function Uu(e) {
  return go(e) || ko(e);
}
function qe(e) {
  const t = e && e.__v_raw;
  return t ? qe(t) : e;
}
function rs(e) {
  return Ha(e, '__v_skip', !0), e;
}
const si = (e) => (Je(e) ? un(e) : e),
  Wu = (e) => (Je(e) ? ms(e) : e);
function Ku(e) {
  zr && Bn && ((e = qe(e)), G0(e.dep || (e.dep = ju())));
}
function fl(e, t) {
  e = qe(e);
  const n = e.dep;
  n && au(n);
}
function _t(e) {
  return !!(e && e.__v_isRef === !0);
}
function re(e) {
  return a1(e, !1);
}
function i1(e) {
  return a1(e, !0);
}
function a1(e, t) {
  return _t(e) ? e : new l8(e, t);
}
class l8 {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : qe(t)),
      (this._value = n ? t : si(t));
  }
  get value() {
    return Ku(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || oi(t) || ko(t);
    (t = n ? t : qe(t)),
      Wr(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : si(t)), fl(this));
  }
}
function c8(e) {
  fl(e);
}
function D(e) {
  return _t(e) ? e.value : e;
}
function u8(e) {
  return Te(e) ? e() : D(e);
}
const f8 = {
  get: (e, t, n) => D(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return _t(i) && !_t(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Yu(e) {
  return go(e) ? e : new Proxy(e, f8);
}
class d8 {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: s } = t(
      () => Ku(this),
      () => fl(this),
    );
    (this._get = n), (this._set = s);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function p8(e) {
  return new d8(e);
}
function mr(e) {
  const t = he(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = l1(e, n);
  return t;
}
class h8 {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return jb(qe(this._object), this._key);
  }
}
class v8 {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function _8(e, t, n) {
  return _t(e)
    ? e
    : Te(e)
      ? new v8(e)
      : Je(e) && arguments.length > 1
        ? l1(e, t, n)
        : re(e);
}
function l1(e, t, n) {
  const s = e[t];
  return _t(s) ? s : new h8(e, t, n);
}
class g8 {
  constructor(t, n, s, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new cs(t, () => {
        this._dirty || ((this._dirty = !0), fl(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = qe(this);
    return (
      Ku(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function m8(e, t, n = !1) {
  let s, i;
  const a = Te(e);
  return (
    a ? ((s = e), (i = Rn)) : ((s = e.get), (i = e.set)),
    new g8(s, i, a || !i, n)
  );
}
function y8(e, ...t) {}
function b8(e, t) {}
function vr(e, t, n, s) {
  let i;
  try {
    i = s ? e(...s) : e();
  } catch (a) {
    So(a, t, n);
  }
  return i;
}
function fn(e, t, n, s) {
  if (Te(e)) {
    const a = vr(e, t, n, s);
    return (
      a &&
        Nu(a) &&
        a.catch((c) => {
          So(c, t, n);
        }),
      a
    );
  }
  const i = [];
  for (let a = 0; a < e.length; a++) i.push(fn(e[a], t, n, s));
  return i;
}
function So(e, t, n, s = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const c = t.proxy,
      u = n;
    for (; a; ) {
      const h = a.ec;
      if (h) {
        for (let _ = 0; _ < h.length; _++) if (h[_](e, c, u) === !1) return;
      }
      a = a.parent;
    }
    const d = t.appContext.config.errorHandler;
    if (d) {
      vr(d, null, 10, [e, c, u]);
      return;
    }
  }
  w8(e, n, i, s);
}
function w8(e, t, n, s = !0) {
  console.error(e);
}
let ii = !1,
  lu = !1;
const Lt = [];
let Xn = 0;
const os = [];
let dr = null,
  uo = 0;
const c1 = Promise.resolve();
let Xu = null;
function Tn(e) {
  const t = Xu || c1;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function k8(e) {
  let t = Xn + 1,
    n = Lt.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = Lt[s],
      a = ai(i);
    a < e || (a === e && i.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function dl(e) {
  (!Lt.length || !Lt.includes(e, ii && e.allowRecurse ? Xn + 1 : Xn)) &&
    (e.id == null ? Lt.push(e) : Lt.splice(k8(e.id), 0, e), u1());
}
function u1() {
  !ii && !lu && ((lu = !0), (Xu = c1.then(f1)));
}
function $8(e) {
  const t = Lt.indexOf(e);
  t > Xn && Lt.splice(t, 1);
}
function qa(e) {
  he(e)
    ? os.push(...e)
    : (!dr || !dr.includes(e, e.allowRecurse ? uo + 1 : uo)) && os.push(e),
    u1();
}
function ph(e, t = ii ? Xn + 1 : 0) {
  for (; t < Lt.length; t++) {
    const n = Lt[t];
    n && n.pre && (Lt.splice(t, 1), t--, n());
  }
}
function Ua(e) {
  if (os.length) {
    const t = [...new Set(os)];
    if (((os.length = 0), dr)) {
      dr.push(...t);
      return;
    }
    for (dr = t, dr.sort((n, s) => ai(n) - ai(s)), uo = 0; uo < dr.length; uo++)
      dr[uo]();
    (dr = null), (uo = 0);
  }
}
const ai = (e) => (e.id == null ? 1 / 0 : e.id),
  x8 = (e, t) => {
    const n = ai(e) - ai(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function f1(e) {
  (lu = !1), (ii = !0), Lt.sort(x8);
  const t = Rn;
  try {
    for (Xn = 0; Xn < Lt.length; Xn++) {
      const n = Lt[Xn];
      n && n.active !== !1 && vr(n, null, 14);
    }
  } finally {
    (Xn = 0),
      (Lt.length = 0),
      Ua(),
      (ii = !1),
      (Xu = null),
      (Lt.length || os.length) && f1();
  }
}
let Qo,
  ga = [];
function d1(e, t) {
  var n, s;
  (Qo = e),
    Qo
      ? ((Qo.enabled = !0),
        ga.forEach(({ event: i, args: a }) => Qo.emit(i, ...a)),
        (ga = []))
      : typeof window < 'u' &&
          window.HTMLElement &&
          !(
            (s = (n = window.navigator) == null ? void 0 : n.userAgent) !=
              null && s.includes('jsdom')
          )
        ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
            t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
            d1(a, t);
          }),
          setTimeout(() => {
            Qo || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (ga = []));
          }, 3e3))
        : (ga = []);
}
function C8(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || et;
  let i = n;
  const a = t.startsWith('update:'),
    c = a && t.slice(7);
  if (c && c in s) {
    const _ = `${c === 'modelValue' ? 'model' : c}Modifiers`,
      { number: m, trim: y } = s[_] || et;
    y && (i = n.map((S) => (We(S) ? S.trim() : S))), m && (i = n.map(za));
  }
  let u,
    d = s[(u = Zs(t))] || s[(u = Zs(Zt(t)))];
  !d && a && (d = s[(u = Zs(ln(t)))]), d && fn(d, e, 6, i);
  const h = s[u + 'Once'];
  if (h) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[u]) return;
    (e.emitted[u] = !0), fn(h, e, 6, i);
  }
}
function p1(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const a = e.emits;
  let c = {},
    u = !1;
  if (!Te(e)) {
    const d = (h) => {
      const _ = p1(h, t, !0);
      _ && ((u = !0), lt(c, _));
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  return !a && !u
    ? (Je(e) && s.set(e, null), null)
    : (he(a) ? a.forEach((d) => (c[d] = null)) : lt(c, a),
      Je(e) && s.set(e, c),
      c);
}
function pl(e, t) {
  return !e || !vi(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Ue(e, t[0].toLowerCase() + t.slice(1)) || Ue(e, ln(t)) || Ue(e, t));
}
let xt = null,
  hl = null;
function li(e) {
  const t = xt;
  return (xt = e), (hl = (e && e.type.__scopeId) || null), t;
}
function dn(e) {
  hl = e;
}
function pn() {
  hl = null;
}
const P8 = (e) => ae;
function ae(e, t = xt, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && vu(-1);
    const a = li(t);
    let c;
    try {
      c = e(...i);
    } finally {
      li(a), s._d && vu(1);
    }
    return c;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Va(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: a,
    propsOptions: [c],
    slots: u,
    attrs: d,
    emit: h,
    render: _,
    renderCache: m,
    data: y,
    setupState: S,
    ctx: R,
    inheritAttrs: x,
  } = e;
  let L, O;
  const V = li(e);
  try {
    if (n.shapeFlag & 4) {
      const w = i || s,
        B = w;
      (L = an(_.call(B, w, m, a, S, y, R))), (O = d);
    } else {
      const w = t;
      (L = an(
        w.length > 1 ? w(a, { attrs: d, slots: u, emit: h }) : w(a, null),
      )),
        (O = t.props ? d : T8(d));
    }
  } catch (w) {
    (Js.length = 0), So(w, e, 1), (L = Y(Et));
  }
  let P = L;
  if (O && x !== !1) {
    const w = Object.keys(O),
      { shapeFlag: B } = P;
    w.length && B & 7 && (c && w.some(Fu) && (O = E8(O, c)), (P = Qn(P, O)));
  }
  return (
    n.dirs && ((P = Qn(P)), (P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (P.transition = n.transition),
    (L = P),
    li(V),
    L
  );
}
function S8(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (zn(s)) {
      if (s.type !== Et || s.children === 'v-if') {
        if (t) return;
        t = s;
      }
    } else return;
  }
  return t;
}
const T8 = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || vi(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  E8 = (e, t) => {
    const n = {};
    for (const s in e) (!Fu(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function A8(e, t, n) {
  const { props: s, children: i, component: a } = e,
    { props: c, children: u, patchFlag: d } = t,
    h = a.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && d >= 0) {
    if (d & 1024) return !0;
    if (d & 16) return s ? hh(s, c, h) : !!c;
    if (d & 8) {
      const _ = t.dynamicProps;
      for (let m = 0; m < _.length; m++) {
        const y = _[m];
        if (c[y] !== s[y] && !pl(h, y)) return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable)
      ? !0
      : s === c
        ? !1
        : s
          ? c
            ? hh(s, c, h)
            : !0
          : !!c;
  return !1;
}
function hh(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    if (t[a] !== e[a] && !pl(n, a)) return !0;
  }
  return !1;
}
function Zu({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Gu = 'components',
  I8 = 'directives';
function Hn(e, t) {
  return Qu(Gu, e, !0, t) || e;
}
const h1 = Symbol.for('v-ndc');
function vl(e) {
  return We(e) ? Qu(Gu, e, !1) || e : e || h1;
}
function M8(e) {
  return Qu(I8, e);
}
function Qu(e, t, n = !0, s = !1) {
  const i = xt || vt;
  if (i) {
    const a = i.type;
    if (e === Gu) {
      const u = mu(a, !1);
      if (u && (u === t || u === Zt(t) || u === _i(Zt(t)))) return a;
    }
    const c = vh(i[e] || a[e], t) || vh(i.appContext[e], t);
    return !c && s ? a : c;
  }
}
function vh(e, t) {
  return e && (e[t] || e[Zt(t)] || e[_i(Zt(t))]);
}
const v1 = (e) => e.__isSuspense,
  L8 = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, s, i, a, c, u, d, h) {
      e == null ? B8(t, n, s, i, a, c, u, d, h) : V8(e, t, n, s, i, c, u, d, h);
    },
    hydrate: F8,
    create: Ju,
    normalize: R8,
  },
  O8 = L8;
function ci(e, t) {
  const n = e.props && e.props[t];
  Te(n) && n();
}
function B8(e, t, n, s, i, a, c, u, d) {
  const {
      p: h,
      o: { createElement: _ },
    } = d,
    m = _('div'),
    y = (e.suspense = Ju(e, i, s, t, m, n, a, c, u, d));
  h(null, (y.pendingBranch = e.ssContent), m, null, s, y, a, c),
    y.deps > 0
      ? (ci(e, 'onPending'),
        ci(e, 'onFallback'),
        h(null, e.ssFallback, t, n, s, null, a, c),
        ss(y, e.ssFallback))
      : y.resolve(!1, !0);
}
function V8(e, t, n, s, i, a, c, u, { p: d, um: h, o: { createElement: _ } }) {
  const m = (t.suspense = e.suspense);
  (m.vnode = t), (t.el = e.el);
  const y = t.ssContent,
    S = t.ssFallback,
    { activeBranch: R, pendingBranch: x, isInFallback: L, isHydrating: O } = m;
  if (x)
    (m.pendingBranch = y),
      Vn(y, x)
        ? (d(x, y, m.hiddenContainer, null, i, m, a, c, u),
          m.deps <= 0
            ? m.resolve()
            : L && (d(R, S, n, s, i, null, a, c, u), ss(m, S)))
        : (m.pendingId++,
          O ? ((m.isHydrating = !1), (m.activeBranch = x)) : h(x, i, m),
          (m.deps = 0),
          (m.effects.length = 0),
          (m.hiddenContainer = _('div')),
          L
            ? (d(null, y, m.hiddenContainer, null, i, m, a, c, u),
              m.deps <= 0
                ? m.resolve()
                : (d(R, S, n, s, i, null, a, c, u), ss(m, S)))
            : R && Vn(y, R)
              ? (d(R, y, n, s, i, m, a, c, u), m.resolve(!0))
              : (d(null, y, m.hiddenContainer, null, i, m, a, c, u),
                m.deps <= 0 && m.resolve()));
  else if (R && Vn(y, R)) d(R, y, n, s, i, m, a, c, u), ss(m, y);
  else if (
    (ci(t, 'onPending'),
    (m.pendingBranch = y),
    m.pendingId++,
    d(null, y, m.hiddenContainer, null, i, m, a, c, u),
    m.deps <= 0)
  )
    m.resolve();
  else {
    const { timeout: V, pendingId: P } = m;
    V > 0
      ? setTimeout(() => {
          m.pendingId === P && m.fallback(S);
        }, V)
      : V === 0 && m.fallback(S);
  }
}
function Ju(e, t, n, s, i, a, c, u, d, h, _ = !1) {
  const {
    p: m,
    m: y,
    um: S,
    n: R,
    o: { parentNode: x, remove: L },
  } = h;
  let O;
  const V = N8(e);
  V && t != null && t.pendingBranch && ((O = t.pendingId), t.deps++);
  const P = e.props ? ja(e.props.timeout) : void 0,
    w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: c,
      container: s,
      hiddenContainer: i,
      anchor: a,
      deps: 0,
      pendingId: 0,
      timeout: typeof P == 'number' ? P : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: _,
      isUnmounted: !1,
      effects: [],
      resolve(B = !1, N = !1) {
        const {
          vnode: q,
          activeBranch: z,
          pendingBranch: se,
          pendingId: ne,
          effects: ve,
          parentComponent: J,
          container: we,
        } = w;
        let Ge = !1;
        if (w.isHydrating) w.isHydrating = !1;
        else if (!B) {
          (Ge = z && se.transition && se.transition.mode === 'out-in'),
            Ge &&
              (z.transition.afterLeave = () => {
                ne === w.pendingId && (y(se, we, Ie, 0), qa(ve));
              });
          let { anchor: Ie } = w;
          z && ((Ie = R(z)), S(z, J, w, !0)), Ge || y(se, we, Ie, 0);
        }
        ss(w, se), (w.pendingBranch = null), (w.isInFallback = !1);
        let ot = w.parent,
          be = !1;
        for (; ot; ) {
          if (ot.pendingBranch) {
            ot.effects.push(...ve), (be = !0);
            break;
          }
          ot = ot.parent;
        }
        !be && !Ge && qa(ve),
          (w.effects = []),
          V &&
            t &&
            t.pendingBranch &&
            O === t.pendingId &&
            (t.deps--, t.deps === 0 && !N && t.resolve()),
          ci(q, 'onResolve');
      },
      fallback(B) {
        if (!w.pendingBranch) return;
        const {
          vnode: N,
          activeBranch: q,
          parentComponent: z,
          container: se,
          isSVG: ne,
        } = w;
        ci(N, 'onFallback');
        const ve = R(q),
          J = () => {
            w.isInFallback && (m(null, B, se, ve, z, null, ne, u, d), ss(w, B));
          },
          we = B.transition && B.transition.mode === 'out-in';
        we && (q.transition.afterLeave = J),
          (w.isInFallback = !0),
          S(q, z, null, !0),
          we || J();
      },
      move(B, N, q) {
        w.activeBranch && y(w.activeBranch, B, N, q), (w.container = B);
      },
      next() {
        return w.activeBranch && R(w.activeBranch);
      },
      registerDep(B, N) {
        const q = !!w.pendingBranch;
        q && w.deps++;
        const z = B.vnode.el;
        B.asyncDep
          .catch((se) => {
            So(se, B, 0);
          })
          .then((se) => {
            if (B.isUnmounted || w.isUnmounted || w.pendingId !== B.suspenseId)
              return;
            B.asyncResolved = !0;
            const { vnode: ne } = B;
            _u(B, se, !1), z && (ne.el = z);
            const ve = !z && B.subTree.el;
            N(B, ne, x(z || B.subTree.el), z ? null : R(B.subTree), w, c, d),
              ve && L(ve),
              Zu(B, ne.el),
              q && --w.deps === 0 && w.resolve();
          });
      },
      unmount(B, N) {
        (w.isUnmounted = !0),
          w.activeBranch && S(w.activeBranch, n, B, N),
          w.pendingBranch && S(w.pendingBranch, n, B, N);
      },
    };
  return w;
}
function F8(e, t, n, s, i, a, c, u, d) {
  const h = (t.suspense = Ju(
      t,
      s,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      i,
      a,
      c,
      u,
      !0,
    )),
    _ = d(e, (h.pendingBranch = t.ssContent), n, h, a, c);
  return h.deps === 0 && h.resolve(!1, !0), _;
}
function R8(e) {
  const { shapeFlag: t, children: n } = e,
    s = t & 32;
  (e.ssContent = _h(s ? n.default : n)),
    (e.ssFallback = s ? _h(n.fallback) : Y(Et));
}
function _h(e) {
  let t;
  if (Te(e)) {
    const n = Co && e._c;
    n && ((e._d = !1), k()), (e = e()), n && ((e._d = !0), (t = Xt), D1());
  }
  return (
    he(e) && (e = S8(e)),
    (e = an(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function _1(e, t) {
  t && t.pendingBranch
    ? he(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : qa(e);
}
function ss(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e,
    i = (n.el = t.el);
  s && s.subTree === n && ((s.vnode.el = i), Zu(s, i));
}
function N8(e) {
  var t;
  return (
    ((t = e.props) == null ? void 0 : t.suspensible) != null &&
    e.props.suspensible !== !1
  );
}
function gr(e, t) {
  return mi(e, null, t);
}
function ef(e, t) {
  return mi(e, null, { flush: 'post' });
}
function H8(e, t) {
  return mi(e, null, { flush: 'sync' });
}
const ma = {};
function yt(e, t, n) {
  return mi(e, t, n);
}
function mi(
  e,
  t,
  { immediate: n, deep: s, flush: i, onTrack: a, onTrigger: c } = et,
) {
  var u;
  const d = gi() === ((u = vt) == null ? void 0 : u.scope) ? vt : null;
  let h,
    _ = !1,
    m = !1;
  if (
    (_t(e)
      ? ((h = () => e.value), (_ = oi(e)))
      : go(e)
        ? ((h = () => e), (s = !0))
        : he(e)
          ? ((m = !0),
            (_ = e.some((w) => go(w) || oi(w))),
            (h = () =>
              e.map((w) => {
                if (_t(w)) return w.value;
                if (go(w)) return ho(w);
                if (Te(w)) return vr(w, d, 2);
              })))
          : Te(e)
            ? t
              ? (h = () => vr(e, d, 2))
              : (h = () => {
                  if (!(d && d.isUnmounted)) return y && y(), fn(e, d, 3, [S]);
                })
            : (h = Rn),
    t && s)
  ) {
    const w = h;
    h = () => ho(w());
  }
  let y,
    S = (w) => {
      y = V.onStop = () => {
        vr(w, d, 4), (y = V.onStop = void 0);
      };
    },
    R;
  if (fs)
    if (
      ((S = Rn),
      t ? n && fn(t, d, 3, [h(), m ? [] : void 0, S]) : h(),
      i === 'sync')
    ) {
      const w = ev();
      R = w.__watcherHandles || (w.__watcherHandles = []);
    } else return Rn;
  let x = m ? new Array(e.length).fill(ma) : ma;
  const L = () => {
    if (V.active)
      if (t) {
        const w = V.run();
        (s || _ || (m ? w.some((B, N) => Wr(B, x[N])) : Wr(w, x))) &&
          (y && y(),
          fn(t, d, 3, [w, x === ma ? void 0 : m && x[0] === ma ? [] : x, S]),
          (x = w));
      } else V.run();
  };
  L.allowRecurse = !!t;
  let O;
  i === 'sync'
    ? (O = L)
    : i === 'post'
      ? (O = () => Tt(L, d && d.suspense))
      : ((L.pre = !0), d && (L.id = d.uid), (O = () => dl(L)));
  const V = new cs(h, O);
  t
    ? n
      ? L()
      : (x = V.run())
    : i === 'post'
      ? Tt(V.run.bind(V), d && d.suspense)
      : V.run();
  const P = () => {
    V.stop(), d && d.scope && Ru(d.scope.effects, V);
  };
  return R && R.push(P), P;
}
function z8(e, t, n) {
  const s = this.proxy,
    i = We(e) ? (e.includes('.') ? g1(s, e) : () => s[e]) : e.bind(s, s);
  let a;
  Te(t) ? (a = t) : ((a = t.handler), (n = t));
  const c = vt;
  Xr(this);
  const u = mi(i, a.bind(s), n);
  return c ? Xr(c) : jr(), u;
}
function g1(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function ho(e, t) {
  if (!Je(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), _t(e))) ho(e.value, t);
  else if (he(e)) for (let n = 0; n < e.length; n++) ho(e[n], t);
  else if (Po(e) || ts(e))
    e.forEach((n) => {
      ho(n, t);
    });
  else if (q0(e)) for (const n in e) ho(e[n], t);
  return e;
}
function _r(e, t) {
  const n = xt;
  if (n === null) return e;
  const s = yl(n) || n.proxy,
    i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, u, d, h = et] = t[a];
    c &&
      (Te(c) && (c = { mounted: c, updated: c }),
      c.deep && ho(u),
      i.push({
        dir: c,
        instance: s,
        value: u,
        oldValue: void 0,
        arg: d,
        modifiers: h,
      }));
  }
  return e;
}
function Yn(e, t, n, s) {
  const i = e.dirs,
    a = t && t.dirs;
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    a && (u.oldValue = a[c].value);
    let d = u.dir[s];
    d && (_s(), fn(d, n, 8, [e.el, u, e, t]), gs());
  }
}
const Nr = Symbol('_leaveCb'),
  ya = Symbol('_enterCb');
function tf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ut(() => {
      e.isMounted = !0;
    }),
    bs(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const xn = [Function, Array],
  nf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: xn,
    onEnter: xn,
    onAfterEnter: xn,
    onEnterCancelled: xn,
    onBeforeLeave: xn,
    onLeave: xn,
    onAfterLeave: xn,
    onLeaveCancelled: xn,
    onBeforeAppear: xn,
    onAppear: xn,
    onAfterAppear: xn,
    onAppearCancelled: xn,
  },
  j8 = {
    name: 'BaseTransition',
    props: nf,
    setup(e, { slots: t }) {
      const n = En(),
        s = tf();
      let i;
      return () => {
        const a = t.default && _l(t.default(), !0);
        if (!a || !a.length) return;
        let c = a[0];
        if (a.length > 1) {
          for (const x of a)
            if (x.type !== Et) {
              c = x;
              break;
            }
        }
        const u = qe(e),
          { mode: d } = u;
        if (s.isLeaving) return zc(c);
        const h = gh(c);
        if (!h) return zc(c);
        const _ = us(h, u, s, n);
        $o(h, _);
        const m = n.subTree,
          y = m && gh(m);
        let S = !1;
        const { getTransitionKey: R } = h.type;
        if (R) {
          const x = R();
          i === void 0 ? (i = x) : x !== i && ((i = x), (S = !0));
        }
        if (y && y.type !== Et && (!Vn(h, y) || S)) {
          const x = us(y, u, s, n);
          if (($o(y, x), d === 'out-in'))
            return (
              (s.isLeaving = !0),
              (x.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              zc(c)
            );
          d === 'in-out' &&
            h.type !== Et &&
            (x.delayLeave = (L, O, V) => {
              const P = y1(s, y);
              (P[String(y.key)] = y),
                (L[Nr] = () => {
                  O(), (L[Nr] = void 0), delete _.delayedLeave;
                }),
                (_.delayedLeave = V);
            });
        }
        return c;
      };
    },
  },
  m1 = j8;
function y1(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function us(e, t, n, s) {
  const {
      appear: i,
      mode: a,
      persisted: c = !1,
      onBeforeEnter: u,
      onEnter: d,
      onAfterEnter: h,
      onEnterCancelled: _,
      onBeforeLeave: m,
      onLeave: y,
      onAfterLeave: S,
      onLeaveCancelled: R,
      onBeforeAppear: x,
      onAppear: L,
      onAfterAppear: O,
      onAppearCancelled: V,
    } = t,
    P = String(e.key),
    w = y1(n, e),
    B = (z, se) => {
      z && fn(z, s, 9, se);
    },
    N = (z, se) => {
      const ne = se[1];
      B(z, se),
        he(z) ? z.every((ve) => ve.length <= 1) && ne() : z.length <= 1 && ne();
    },
    q = {
      mode: a,
      persisted: c,
      beforeEnter(z) {
        let se = u;
        if (!n.isMounted)
          if (i) se = x || u;
          else return;
        z[Nr] && z[Nr](!0);
        const ne = w[P];
        ne && Vn(e, ne) && ne.el[Nr] && ne.el[Nr](), B(se, [z]);
      },
      enter(z) {
        let se = d,
          ne = h,
          ve = _;
        if (!n.isMounted)
          if (i) (se = L || d), (ne = O || h), (ve = V || _);
          else return;
        let J = !1;
        const we = (z[ya] = (Ge) => {
          J ||
            ((J = !0),
            Ge ? B(ve, [z]) : B(ne, [z]),
            q.delayedLeave && q.delayedLeave(),
            (z[ya] = void 0));
        });
        se ? N(se, [z, we]) : we();
      },
      leave(z, se) {
        const ne = String(e.key);
        if ((z[ya] && z[ya](!0), n.isUnmounting)) return se();
        B(m, [z]);
        let ve = !1;
        const J = (z[Nr] = (we) => {
          ve ||
            ((ve = !0),
            se(),
            we ? B(R, [z]) : B(S, [z]),
            (z[Nr] = void 0),
            w[ne] === e && delete w[ne]);
        });
        (w[ne] = e), y ? N(y, [z, J]) : J();
      },
      clone(z) {
        return us(z, t, n, s);
      },
    };
  return q;
}
function zc(e) {
  if (yi(e)) return (e = Qn(e)), (e.children = null), e;
}
function gh(e) {
  return yi(e) ? (e.children ? e.children[0] : void 0) : e;
}
function $o(e, t) {
  e.shapeFlag & 6 && e.component
    ? $o(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function _l(e, t = !1, n) {
  let s = [],
    i = 0;
  for (let a = 0; a < e.length; a++) {
    let c = e[a];
    const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : a);
    c.type === Ae
      ? (c.patchFlag & 128 && i++, (s = s.concat(_l(c.children, t, u))))
      : (t || c.type !== Et) && s.push(u != null ? Qn(c, { key: u }) : c);
  }
  if (i > 1) for (let a = 0; a < s.length; a++) s[a].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */ function te(e, t) {
  return Te(e) ? (() => lt({ name: e.name }, t, { setup: e }))() : e;
}
const mo = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ function D8(e) {
  Te(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: i = 200,
    timeout: a,
    suspensible: c = !0,
    onError: u,
  } = e;
  let d = null,
    h,
    _ = 0;
  const m = () => (_++, (d = null), y()),
    y = () => {
      let S;
      return (
        d ||
        (S = d =
          t()
            .catch((R) => {
              if (((R = R instanceof Error ? R : new Error(String(R))), u))
                return new Promise((x, L) => {
                  u(
                    R,
                    () => x(m()),
                    () => L(R),
                    _ + 1,
                  );
                });
              throw R;
            })
            .then((R) =>
              S !== d && d
                ? d
                : (R &&
                    (R.__esModule || R[Symbol.toStringTag] === 'Module') &&
                    (R = R.default),
                  (h = R),
                  R),
            ))
      );
    };
  return te({
    name: 'AsyncComponentWrapper',
    __asyncLoader: y,
    get __asyncResolved() {
      return h;
    },
    setup() {
      const S = vt;
      if (h) return () => jc(h, S);
      const R = (V) => {
        (d = null), So(V, S, 13, !s);
      };
      if ((c && S.suspense) || fs)
        return y()
          .then((V) => () => jc(V, S))
          .catch((V) => (R(V), () => (s ? Y(s, { error: V }) : null)));
      const x = re(!1),
        L = re(),
        O = re(!!i);
      return (
        i &&
          setTimeout(() => {
            O.value = !1;
          }, i),
        a != null &&
          setTimeout(() => {
            if (!x.value && !L.value) {
              const V = new Error(`Async component timed out after ${a}ms.`);
              R(V), (L.value = V);
            }
          }, a),
        y()
          .then(() => {
            (x.value = !0),
              S.parent && yi(S.parent.vnode) && dl(S.parent.update);
          })
          .catch((V) => {
            R(V), (L.value = V);
          }),
        () => {
          if (x.value && h) return jc(h, S);
          if (L.value && s) return Y(s, { error: L.value });
          if (n && !O.value) return Y(n);
        }
      );
    },
  });
}
function jc(e, t) {
  const { ref: n, props: s, children: i, ce: a } = t.vnode,
    c = Y(e, s, i);
  return (c.ref = n), (c.ce = a), delete t.vnode.ce, c;
}
const yi = (e) => e.type.__isKeepAlive,
  q8 = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = En(),
        s = n.ctx;
      if (!s.renderer)
        return () => {
          const V = t.default && t.default();
          return V && V.length === 1 ? V[0] : V;
        };
      const i = new Map(),
        a = new Set();
      let c = null;
      const u = n.suspense,
        {
          renderer: {
            p: d,
            m: h,
            um: _,
            o: { createElement: m },
          },
        } = s,
        y = m('div');
      (s.activate = (V, P, w, B, N) => {
        const q = V.component;
        h(V, P, w, 0, u),
          d(q.vnode, V, P, w, q, u, B, V.slotScopeIds, N),
          Tt(() => {
            (q.isDeactivated = !1), q.a && ns(q.a);
            const z = V.props && V.props.onVnodeMounted;
            z && Yt(z, q.parent, V);
          }, u);
      }),
        (s.deactivate = (V) => {
          const P = V.component;
          h(V, y, null, 1, u),
            Tt(() => {
              P.da && ns(P.da);
              const w = V.props && V.props.onVnodeUnmounted;
              w && Yt(w, P.parent, V), (P.isDeactivated = !0);
            }, u);
        });
      function S(V) {
        Dc(V), _(V, n, u, !0);
      }
      function R(V) {
        i.forEach((P, w) => {
          const B = mu(P.type);
          B && (!V || !V(B)) && x(w);
        });
      }
      function x(V) {
        const P = i.get(V);
        !c || !Vn(P, c) ? S(P) : c && Dc(c), i.delete(V), a.delete(V);
      }
      yt(
        () => [e.include, e.exclude],
        ([V, P]) => {
          V && R((w) => Us(V, w)), P && R((w) => !Us(P, w));
        },
        { flush: 'post', deep: !0 },
      );
      let L = null;
      const O = () => {
        L != null && i.set(L, qc(n.subTree));
      };
      return (
        ut(O),
        ys(O),
        bs(() => {
          i.forEach((V) => {
            const { subTree: P, suspense: w } = n,
              B = qc(P);
            if (V.type === B.type && V.key === B.key) {
              Dc(B);
              const N = B.component.da;
              N && Tt(N, w);
              return;
            }
            S(V);
          });
        }),
        () => {
          if (((L = null), !t.default)) return null;
          const V = t.default(),
            P = V[0];
          if (V.length > 1) return (c = null), V;
          if (!zn(P) || (!(P.shapeFlag & 4) && !(P.shapeFlag & 128)))
            return (c = null), P;
          let w = qc(P);
          const B = w.type,
            N = mu(mo(w) ? w.type.__asyncResolved || {} : B),
            { include: q, exclude: z, max: se } = e;
          if ((q && (!N || !Us(q, N))) || (z && N && Us(z, N)))
            return (c = w), P;
          const ne = w.key == null ? B : w.key,
            ve = i.get(ne);
          return (
            w.el && ((w = Qn(w)), P.shapeFlag & 128 && (P.ssContent = w)),
            (L = ne),
            ve
              ? ((w.el = ve.el),
                (w.component = ve.component),
                w.transition && $o(w, w.transition),
                (w.shapeFlag |= 512),
                a.delete(ne),
                a.add(ne))
              : (a.add(ne),
                se && a.size > parseInt(se, 10) && x(a.values().next().value)),
            (w.shapeFlag |= 256),
            (c = w),
            v1(P.type) ? P : w
          );
        }
      );
    },
  },
  U8 = q8;
function Us(e, t) {
  return he(e)
    ? e.some((n) => Us(n, t))
    : We(e)
      ? e.split(',').includes(t)
      : $b(e)
        ? e.test(t)
        : !1;
}
function b1(e, t) {
  k1(e, 'a', t);
}
function w1(e, t) {
  k1(e, 'da', t);
}
function k1(e, t, n = vt) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((gl(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      yi(i.parent.vnode) && W8(s, t, n, i), (i = i.parent);
  }
}
function W8(e, t, n, s) {
  const i = gl(t, e, s, !0);
  br(() => {
    Ru(s[t], i);
  }, n);
}
function Dc(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function qc(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function gl(e, t, n = vt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...c) => {
          if (n.isUnmounted) return;
          _s(), Xr(n);
          const u = fn(t, n, e, c);
          return jr(), gs(), u;
        });
    return s ? i.unshift(a) : i.push(a), a;
  }
}
const yr =
    (e) =>
    (t, n = vt) =>
      (!fs || e === 'sp') && gl(e, (...s) => t(...s), n),
  $1 = yr('bm'),
  ut = yr('m'),
  x1 = yr('bu'),
  ys = yr('u'),
  bs = yr('bum'),
  br = yr('um'),
  C1 = yr('sp'),
  P1 = yr('rtg'),
  S1 = yr('rtc');
function T1(e, t = vt) {
  gl('ec', e, t);
}
function wt(e, t, n, s) {
  let i;
  const a = n && n[s];
  if (he(e) || We(e)) {
    i = new Array(e.length);
    for (let c = 0, u = e.length; c < u; c++)
      i[c] = t(e[c], c, void 0, a && a[c]);
  } else if (typeof e == 'number') {
    i = new Array(e);
    for (let c = 0; c < e; c++) i[c] = t(c + 1, c, void 0, a && a[c]);
  } else if (Je(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (c, u) => t(c, u, void 0, a && a[u]));
    else {
      const c = Object.keys(e);
      i = new Array(c.length);
      for (let u = 0, d = c.length; u < d; u++) {
        const h = c[u];
        i[u] = t(e[h], h, u, a && a[u]);
      }
    }
  else i = [];
  return n && (n[s] = i), i;
}
function K8(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (he(s)) for (let i = 0; i < s.length; i++) e[s[i].name] = s[i].fn;
    else
      s &&
        (e[s.name] = s.key
          ? (...i) => {
              const a = s.fn(...i);
              return a && (a.key = s.key), a;
            }
          : s.fn);
  }
  return e;
}
function K(e, t, n = {}, s, i) {
  if (xt.isCE || (xt.parent && mo(xt.parent) && xt.parent.isCE))
    return t !== 'default' && (n.name = t), Y('slot', n, s && s());
  let a = e[t];
  a && a._c && (a._d = !1), k();
  const c = a && E1(a(n)),
    u = ke(
      Ae,
      { key: n.key || (c && c.key) || `_${t}` },
      c || (s ? s() : []),
      c && e._ === 1 ? 64 : -2,
    );
  return (
    !i && u.scopeId && (u.slotScopeIds = [u.scopeId + '-s']),
    a && a._c && (a._d = !0),
    u
  );
}
function E1(e) {
  return e.some((t) =>
    zn(t) ? !(t.type === Et || (t.type === Ae && !E1(t.children))) : !0,
  )
    ? e
    : null;
}
function Y8(e, t) {
  const n = {};
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : Zs(s)] = e[s];
  return n;
}
const cu = (e) => (e ? (X1(e) ? yl(e) || e.proxy : cu(e.parent)) : null),
  Gs = lt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => cu(e.parent),
    $root: (e) => cu(e.root),
    $emit: (e) => e.emit,
    $options: (e) => of(e),
    $forceUpdate: (e) => e.f || (e.f = () => dl(e.update)),
    $nextTick: (e) => e.n || (e.n = Tn.bind(e.proxy)),
    $watch: (e) => z8.bind(e),
  }),
  Uc = (e, t) => e !== et && !e.__isScriptSetup && Ue(e, t),
  uu = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: a,
        accessCache: c,
        type: u,
        appContext: d,
      } = e;
      let h;
      if (t[0] !== '$') {
        const S = c[t];
        if (S !== void 0)
          switch (S) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return a[t];
          }
        else {
          if (Uc(s, t)) return (c[t] = 1), s[t];
          if (i !== et && Ue(i, t)) return (c[t] = 2), i[t];
          if ((h = e.propsOptions[0]) && Ue(h, t)) return (c[t] = 3), a[t];
          if (n !== et && Ue(n, t)) return (c[t] = 4), n[t];
          fu && (c[t] = 0);
        }
      }
      const _ = Gs[t];
      let m, y;
      if (_) return t === '$attrs' && Gt(e, 'get', t), _(e);
      if ((m = u.__cssModules) && (m = m[t])) return m;
      if (n !== et && Ue(n, t)) return (c[t] = 4), n[t];
      if (((y = d.config.globalProperties), Ue(y, t))) return y[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: a } = e;
      return Uc(i, t)
        ? ((i[t] = n), !0)
        : s !== et && Ue(s, t)
          ? ((s[t] = n), !0)
          : Ue(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((a[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: a,
        },
      },
      c,
    ) {
      let u;
      return (
        !!n[c] ||
        (e !== et && Ue(e, c)) ||
        Uc(t, c) ||
        ((u = a[0]) && Ue(u, c)) ||
        Ue(s, c) ||
        Ue(Gs, c) ||
        Ue(i.config.globalProperties, c)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Ue(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  },
  X8 = lt({}, uu, {
    get(e, t) {
      if (t !== Symbol.unscopables) return uu.get(e, t, e);
    },
    has(e, t) {
      return t[0] !== '_' && !Tb(t);
    },
  });
function Z8() {
  return null;
}
function G8() {
  return null;
}
function Q8(e) {}
function J8(e) {}
function ew() {
  return null;
}
function tw() {}
function nw(e, t) {
  return null;
}
function rf() {
  return A1().slots;
}
function rw() {
  return A1().attrs;
}
function ow(e, t, n) {
  const s = En();
  if (n && n.local) {
    const i = re(e[t]);
    return (
      yt(
        () => e[t],
        (a) => (i.value = a),
      ),
      yt(i, (a) => {
        a !== e[t] && s.emit(`update:${t}`, a);
      }),
      i
    );
  } else
    return {
      __v_isRef: !0,
      get value() {
        return e[t];
      },
      set value(i) {
        s.emit(`update:${t}`, i);
      },
    };
}
function A1() {
  const e = En();
  return e.setupContext || (e.setupContext = Q1(e));
}
function ui(e) {
  return he(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function sw(e, t) {
  const n = ui(e);
  for (const s in t) {
    if (s.startsWith('__skip')) continue;
    let i = n[s];
    i
      ? he(i) || Te(i)
        ? (i = n[s] = { type: i, default: t[s] })
        : (i.default = t[s])
      : i === null && (i = n[s] = { default: t[s] }),
      i && t[`__skip_${s}`] && (i.skipFactory = !0);
  }
  return n;
}
function iw(e, t) {
  return !e || !t
    ? e || t
    : he(e) && he(t)
      ? e.concat(t)
      : lt({}, ui(e), ui(t));
}
function aw(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) ||
      Object.defineProperty(n, s, { enumerable: !0, get: () => e[s] });
  return n;
}
function lw(e) {
  const t = En();
  let n = e();
  return (
    jr(),
    Nu(n) &&
      (n = n.catch((s) => {
        throw (Xr(t), s);
      })),
    [n, () => Xr(t)]
  );
}
let fu = !0;
function cw(e) {
  const t = of(e),
    n = e.proxy,
    s = e.ctx;
  (fu = !1), t.beforeCreate && mh(t.beforeCreate, e, 'bc');
  const {
    data: i,
    computed: a,
    methods: c,
    watch: u,
    provide: d,
    inject: h,
    created: _,
    beforeMount: m,
    mounted: y,
    beforeUpdate: S,
    updated: R,
    activated: x,
    deactivated: L,
    beforeDestroy: O,
    beforeUnmount: V,
    destroyed: P,
    unmounted: w,
    render: B,
    renderTracked: N,
    renderTriggered: q,
    errorCaptured: z,
    serverPrefetch: se,
    expose: ne,
    inheritAttrs: ve,
    components: J,
    directives: we,
    filters: Ge,
  } = t;
  if ((h && uw(h, s, null), c))
    for (const Ie in c) {
      const ge = c[Ie];
      Te(ge) && (s[Ie] = ge.bind(n));
    }
  if (i) {
    const Ie = i.call(n, n);
    Je(Ie) && (e.data = un(Ie));
  }
  if (((fu = !0), a))
    for (const Ie in a) {
      const ge = a[Ie],
        An = Te(ge) ? ge.bind(n, n) : Te(ge.get) ? ge.get.bind(n, n) : Rn,
        er = !Te(ge) && Te(ge.set) ? ge.set.bind(n) : Rn,
        kt = de({ get: An, set: er });
      Object.defineProperty(s, Ie, {
        enumerable: !0,
        configurable: !0,
        get: () => kt.value,
        set: (hn) => (kt.value = hn),
      });
    }
  if (u) for (const Ie in u) I1(u[Ie], s, n, Ie);
  if (d) {
    const Ie = Te(d) ? d.call(n) : d;
    Reflect.ownKeys(Ie).forEach((ge) => {
      Zn(ge, Ie[ge]);
    });
  }
  _ && mh(_, e, 'c');
  function be(Ie, ge) {
    he(ge) ? ge.forEach((An) => Ie(An.bind(n))) : ge && Ie(ge.bind(n));
  }
  if (
    (be($1, m),
    be(ut, y),
    be(x1, S),
    be(ys, R),
    be(b1, x),
    be(w1, L),
    be(T1, z),
    be(S1, N),
    be(P1, q),
    be(bs, V),
    be(br, w),
    be(C1, se),
    he(ne))
  )
    if (ne.length) {
      const Ie = e.exposed || (e.exposed = {});
      ne.forEach((ge) => {
        Object.defineProperty(Ie, ge, {
          get: () => n[ge],
          set: (An) => (n[ge] = An),
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === Rn && (e.render = B),
    ve != null && (e.inheritAttrs = ve),
    J && (e.components = J),
    we && (e.directives = we);
}
function uw(e, t, n = Rn) {
  he(e) && (e = du(e));
  for (const s in e) {
    const i = e[s];
    let a;
    Je(i)
      ? 'default' in i
        ? (a = Ot(i.from || s, i.default, !0))
        : (a = Ot(i.from || s))
      : (a = Ot(i)),
      _t(a)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (c) => (a.value = c),
          })
        : (t[s] = a);
  }
}
function mh(e, t, n) {
  fn(he(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function I1(e, t, n, s) {
  const i = s.includes('.') ? g1(n, s) : () => n[s];
  if (We(e)) {
    const a = t[e];
    Te(a) && yt(i, a);
  } else if (Te(e)) yt(i, e.bind(n));
  else if (Je(e))
    if (he(e)) e.forEach((a) => I1(a, t, n, s));
    else {
      const a = Te(e.handler) ? e.handler.bind(n) : t[e.handler];
      Te(a) && yt(i, a, e);
    }
}
function of(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: a,
      config: { optionMergeStrategies: c },
    } = e.appContext,
    u = a.get(t);
  let d;
  return (
    u
      ? (d = u)
      : !i.length && !n && !s
        ? (d = t)
        : ((d = {}),
          i.length && i.forEach((h) => Wa(d, h, c, !0)),
          Wa(d, t, c)),
    Je(t) && a.set(t, d),
    d
  );
}
function Wa(e, t, n, s = !1) {
  const { mixins: i, extends: a } = t;
  a && Wa(e, a, n, !0), i && i.forEach((c) => Wa(e, c, n, !0));
  for (const c in t)
    if (!(s && c === 'expose')) {
      const u = fw[c] || (n && n[c]);
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const fw = {
  data: yh,
  props: bh,
  emits: bh,
  methods: Ws,
  computed: Ws,
  beforeCreate: Nt,
  created: Nt,
  beforeMount: Nt,
  mounted: Nt,
  beforeUpdate: Nt,
  updated: Nt,
  beforeDestroy: Nt,
  beforeUnmount: Nt,
  destroyed: Nt,
  unmounted: Nt,
  activated: Nt,
  deactivated: Nt,
  errorCaptured: Nt,
  serverPrefetch: Nt,
  components: Ws,
  directives: Ws,
  watch: pw,
  provide: yh,
  inject: dw,
};
function yh(e, t) {
  return t
    ? e
      ? function () {
          return lt(
            Te(e) ? e.call(this, this) : e,
            Te(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function dw(e, t) {
  return Ws(du(e), du(t));
}
function du(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Nt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ws(e, t) {
  return e ? lt(Object.create(null), e, t) : t;
}
function bh(e, t) {
  return e
    ? he(e) && he(t)
      ? [...new Set([...e, ...t])]
      : lt(Object.create(null), ui(e), ui(t ?? {}))
    : t;
}
function pw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = lt(Object.create(null), e);
  for (const s in t) n[s] = Nt(e[s], t[s]);
  return n;
}
function M1() {
  return {
    app: null,
    config: {
      isNativeTag: bb,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let hw = 0;
function vw(e, t) {
  return function (s, i = null) {
    Te(s) || (s = lt({}, s)), i != null && !Je(i) && (i = null);
    const a = M1(),
      c = new WeakSet();
    let u = !1;
    const d = (a.app = {
      _uid: hw++,
      _component: s,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: nv,
      get config() {
        return a.config;
      },
      set config(h) {},
      use(h, ..._) {
        return (
          c.has(h) ||
            (h && Te(h.install)
              ? (c.add(h), h.install(d, ..._))
              : Te(h) && (c.add(h), h(d, ..._))),
          d
        );
      },
      mixin(h) {
        return a.mixins.includes(h) || a.mixins.push(h), d;
      },
      component(h, _) {
        return _ ? ((a.components[h] = _), d) : a.components[h];
      },
      directive(h, _) {
        return _ ? ((a.directives[h] = _), d) : a.directives[h];
      },
      mount(h, _, m) {
        if (!u) {
          const y = Y(s, i);
          return (
            (y.appContext = a),
            _ && t ? t(y, h) : e(y, h, m),
            (u = !0),
            (d._container = h),
            (h.__vue_app__ = d),
            yl(y.component) || y.component.proxy
          );
        }
      },
      unmount() {
        u && (e(null, d._container), delete d._container.__vue_app__);
      },
      provide(h, _) {
        return (a.provides[h] = _), d;
      },
      runWithContext(h) {
        fi = d;
        try {
          return h();
        } finally {
          fi = null;
        }
      },
    });
    return d;
  };
}
let fi = null;
function Zn(e, t) {
  if (vt) {
    let n = vt.provides;
    const s = vt.parent && vt.parent.provides;
    s === n && (n = vt.provides = Object.create(s)), (n[e] = t);
  }
}
function Ot(e, t, n = !1) {
  const s = vt || xt;
  if (s || fi) {
    const i = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : fi._context.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && Te(t) ? t.call(s && s.proxy) : t;
  }
}
function _w() {
  return !!(vt || xt || fi);
}
function gw(e, t, n, s = !1) {
  const i = {},
    a = {};
  Ha(a, ml, 1), (e.propsDefaults = Object.create(null)), L1(e, t, i, a);
  for (const c in e.propsOptions[0]) c in i || (i[c] = void 0);
  n ? (e.props = s ? i : qu(i)) : e.type.props ? (e.props = i) : (e.props = a),
    (e.attrs = a);
}
function mw(e, t, n, s) {
  const {
      props: i,
      attrs: a,
      vnode: { patchFlag: c },
    } = e,
    u = qe(i),
    [d] = e.propsOptions;
  let h = !1;
  if ((s || c > 0) && !(c & 16)) {
    if (c & 8) {
      const _ = e.vnode.dynamicProps;
      for (let m = 0; m < _.length; m++) {
        let y = _[m];
        if (pl(e.emitsOptions, y)) continue;
        const S = t[y];
        if (d)
          if (Ue(a, y)) S !== a[y] && ((a[y] = S), (h = !0));
          else {
            const R = Zt(y);
            i[R] = pu(d, u, R, S, e, !1);
          }
        else S !== a[y] && ((a[y] = S), (h = !0));
      }
    }
  } else {
    L1(e, t, i, a) && (h = !0);
    let _;
    for (const m in u)
      (!t || (!Ue(t, m) && ((_ = ln(m)) === m || !Ue(t, _)))) &&
        (d
          ? n &&
            (n[m] !== void 0 || n[_] !== void 0) &&
            (i[m] = pu(d, u, m, void 0, e, !0))
          : delete i[m]);
    if (a !== u)
      for (const m in a) (!t || !Ue(t, m)) && (delete a[m], (h = !0));
  }
  h && hr(e, 'set', '$attrs');
}
function L1(e, t, n, s) {
  const [i, a] = e.propsOptions;
  let c = !1,
    u;
  if (t)
    for (let d in t) {
      if (Xs(d)) continue;
      const h = t[d];
      let _;
      i && Ue(i, (_ = Zt(d)))
        ? !a || !a.includes(_)
          ? (n[_] = h)
          : ((u || (u = {}))[_] = h)
        : pl(e.emitsOptions, d) ||
          ((!(d in s) || h !== s[d]) && ((s[d] = h), (c = !0)));
    }
  if (a) {
    const d = qe(n),
      h = u || et;
    for (let _ = 0; _ < a.length; _++) {
      const m = a[_];
      n[m] = pu(i, d, m, h[m], e, !Ue(h, m));
    }
  }
  return c;
}
function pu(e, t, n, s, i, a) {
  const c = e[n];
  if (c != null) {
    const u = Ue(c, 'default');
    if (u && s === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Te(d)) {
        const { propsDefaults: h } = i;
        n in h ? (s = h[n]) : (Xr(i), (s = h[n] = d.call(null, t)), jr());
      } else s = d;
    }
    c[0] &&
      (a && !u ? (s = !1) : c[1] && (s === '' || s === ln(n)) && (s = !0));
  }
  return s;
}
function O1(e, t, n = !1) {
  const s = t.propsCache,
    i = s.get(e);
  if (i) return i;
  const a = e.props,
    c = {},
    u = [];
  let d = !1;
  if (!Te(e)) {
    const _ = (m) => {
      d = !0;
      const [y, S] = O1(m, t, !0);
      lt(c, y), S && u.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(_),
      e.extends && _(e.extends),
      e.mixins && e.mixins.forEach(_);
  }
  if (!a && !d) return Je(e) && s.set(e, es), es;
  if (he(a))
    for (let _ = 0; _ < a.length; _++) {
      const m = Zt(a[_]);
      wh(m) && (c[m] = et);
    }
  else if (a)
    for (const _ in a) {
      const m = Zt(_);
      if (wh(m)) {
        const y = a[_],
          S = (c[m] = he(y) || Te(y) ? { type: y } : lt({}, y));
        if (S) {
          const R = xh(Boolean, S.type),
            x = xh(String, S.type);
          (S[0] = R > -1),
            (S[1] = x < 0 || R < x),
            (R > -1 || Ue(S, 'default')) && u.push(m);
        }
      }
    }
  const h = [c, u];
  return Je(e) && s.set(e, h), h;
}
function wh(e) {
  return e[0] !== '$';
}
function kh(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? 'null' : '';
}
function $h(e, t) {
  return kh(e) === kh(t);
}
function xh(e, t) {
  return he(t) ? t.findIndex((n) => $h(n, e)) : Te(t) && $h(t, e) ? 0 : -1;
}
const B1 = (e) => e[0] === '_' || e === '$stable',
  sf = (e) => (he(e) ? e.map(an) : [an(e)]),
  yw = (e, t, n) => {
    if (t._n) return t;
    const s = ae((...i) => sf(t(...i)), n);
    return (s._c = !1), s;
  },
  V1 = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (B1(i)) continue;
      const a = e[i];
      if (Te(a)) t[i] = yw(i, a, s);
      else if (a != null) {
        const c = sf(a);
        t[i] = () => c;
      }
    }
  },
  F1 = (e, t) => {
    const n = sf(t);
    e.slots.default = () => n;
  },
  bw = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = qe(t)), Ha(t, '_', n)) : V1(t, (e.slots = {}));
    } else (e.slots = {}), t && F1(e, t);
    Ha(e.slots, ml, 1);
  },
  ww = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let a = !0,
      c = et;
    if (s.shapeFlag & 32) {
      const u = t._;
      u
        ? n && u === 1
          ? (a = !1)
          : (lt(i, t), !n && u === 1 && delete i._)
        : ((a = !t.$stable), V1(t, i)),
        (c = t);
    } else t && (F1(e, t), (c = { default: 1 }));
    if (a) for (const u in i) !B1(u) && c[u] == null && delete i[u];
  };
function Ka(e, t, n, s, i = !1) {
  if (he(e)) {
    e.forEach((y, S) => Ka(y, t && (he(t) ? t[S] : t), n, s, i));
    return;
  }
  if (mo(s) && !i) return;
  const a = s.shapeFlag & 4 ? yl(s.component) || s.component.proxy : s.el,
    c = i ? null : a,
    { i: u, r: d } = e,
    h = t && t.r,
    _ = u.refs === et ? (u.refs = {}) : u.refs,
    m = u.setupState;
  if (
    (h != null &&
      h !== d &&
      (We(h)
        ? ((_[h] = null), Ue(m, h) && (m[h] = null))
        : _t(h) && (h.value = null)),
    Te(d))
  )
    vr(d, u, 12, [c, _]);
  else {
    const y = We(d),
      S = _t(d);
    if (y || S) {
      const R = () => {
        if (e.f) {
          const x = y ? (Ue(m, d) ? m[d] : _[d]) : d.value;
          i
            ? he(x) && Ru(x, a)
            : he(x)
              ? x.includes(a) || x.push(a)
              : y
                ? ((_[d] = [a]), Ue(m, d) && (m[d] = _[d]))
                : ((d.value = [a]), e.k && (_[e.k] = d.value));
        } else
          y
            ? ((_[d] = c), Ue(m, d) && (m[d] = c))
            : S && ((d.value = c), e.k && (_[e.k] = c));
      };
      c ? ((R.id = -1), Tt(R, n)) : R();
    }
  }
}
let Br = !1;
const ba = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  wa = (e) => e.nodeType === 8;
function kw(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: i,
        nextSibling: a,
        parentNode: c,
        remove: u,
        insert: d,
        createComment: h,
      },
    } = e,
    _ = (P, w) => {
      if (!w.hasChildNodes()) {
        n(null, P, w), Ua(), (w._vnode = P);
        return;
      }
      (Br = !1),
        m(w.firstChild, P, null, null, null),
        Ua(),
        (w._vnode = P),
        Br && console.error('Hydration completed but contains mismatches.');
    },
    m = (P, w, B, N, q, z = !1) => {
      const se = wa(P) && P.data === '[',
        ne = () => x(P, w, B, N, q, se),
        { type: ve, ref: J, shapeFlag: we, patchFlag: Ge } = w;
      let ot = P.nodeType;
      (w.el = P), Ge === -2 && ((z = !1), (w.dynamicChildren = null));
      let be = null;
      switch (ve) {
        case xo:
          ot !== 3
            ? w.children === ''
              ? (d((w.el = i('')), c(P), P), (be = P))
              : (be = ne())
            : (P.data !== w.children && ((Br = !0), (P.data = w.children)),
              (be = a(P)));
          break;
        case Et:
          V(P)
            ? ((be = a(P)), O((w.el = P.content.firstChild), P, B))
            : ot !== 8 || se
              ? (be = ne())
              : (be = a(P));
          break;
        case yo:
          if ((se && ((P = a(P)), (ot = P.nodeType)), ot === 1 || ot === 3)) {
            be = P;
            const Ie = !w.children.length;
            for (let ge = 0; ge < w.staticCount; ge++)
              Ie && (w.children += be.nodeType === 1 ? be.outerHTML : be.data),
                ge === w.staticCount - 1 && (w.anchor = be),
                (be = a(be));
            return se ? a(be) : be;
          } else ne();
          break;
        case Ae:
          se ? (be = R(P, w, B, N, q, z)) : (be = ne());
          break;
        default:
          if (we & 1)
            (ot !== 1 || w.type.toLowerCase() !== P.tagName.toLowerCase()) &&
            !V(P)
              ? (be = ne())
              : (be = y(P, w, B, N, q, z));
          else if (we & 6) {
            w.slotScopeIds = q;
            const Ie = c(P);
            if (
              (se
                ? (be = L(P))
                : wa(P) && P.data === 'teleport start'
                  ? (be = L(P, P.data, 'teleport end'))
                  : (be = a(P)),
              t(w, Ie, null, B, N, ba(Ie), z),
              mo(w))
            ) {
              let ge;
              se
                ? ((ge = Y(Ae)),
                  (ge.anchor = be ? be.previousSibling : Ie.lastChild))
                : (ge = P.nodeType === 3 ? At('') : Y('div')),
                (ge.el = P),
                (w.component.subTree = ge);
            }
          } else
            we & 64
              ? ot !== 8
                ? (be = ne())
                : (be = w.type.hydrate(P, w, B, N, q, z, e, S))
              : we & 128 &&
                (be = w.type.hydrate(P, w, B, N, ba(c(P)), q, z, e, m));
      }
      return J != null && Ka(J, null, N, w), be;
    },
    y = (P, w, B, N, q, z) => {
      z = z || !!w.dynamicChildren;
      const {
          type: se,
          props: ne,
          patchFlag: ve,
          shapeFlag: J,
          dirs: we,
          transition: Ge,
        } = w,
        ot = se === 'input' || se === 'option';
      if (ot || ve !== -1) {
        if ((we && Yn(w, null, B, 'created'), ne))
          if (ot || !z || ve & 48)
            for (const ge in ne)
              ((ot && (ge.endsWith('value') || ge === 'indeterminate')) ||
                (vi(ge) && !Xs(ge)) ||
                ge[0] === '.') &&
                s(P, ge, null, ne[ge], !1, void 0, B);
          else ne.onClick && s(P, 'onClick', null, ne.onClick, !1, void 0, B);
        let be;
        (be = ne && ne.onVnodeBeforeMount) && Yt(be, B, w);
        let Ie = !1;
        if (V(P)) {
          Ie = z1(N, Ge) && B && B.vnode.props && B.vnode.props.appear;
          const ge = P.content.firstChild;
          Ie && Ge.beforeEnter(ge), O(ge, P, B), (w.el = P = ge);
        }
        if (
          (we && Yn(w, null, B, 'beforeMount'),
          ((be = ne && ne.onVnodeMounted) || we || Ie) &&
            _1(() => {
              be && Yt(be, B, w),
                Ie && Ge.enter(P),
                we && Yn(w, null, B, 'mounted');
            }, N),
          J & 16 && !(ne && (ne.innerHTML || ne.textContent)))
        ) {
          let ge = S(P.firstChild, w, P, B, N, q, z);
          for (; ge; ) {
            Br = !0;
            const An = ge;
            (ge = ge.nextSibling), u(An);
          }
        } else
          J & 8 &&
            P.textContent !== w.children &&
            ((Br = !0), (P.textContent = w.children));
      }
      return P.nextSibling;
    },
    S = (P, w, B, N, q, z, se) => {
      se = se || !!w.dynamicChildren;
      const ne = w.children,
        ve = ne.length;
      for (let J = 0; J < ve; J++) {
        const we = se ? ne[J] : (ne[J] = an(ne[J]));
        if (P) P = m(P, we, N, q, z, se);
        else {
          if (we.type === xo && !we.children) continue;
          (Br = !0), n(null, we, B, null, N, q, ba(B), z);
        }
      }
      return P;
    },
    R = (P, w, B, N, q, z) => {
      const { slotScopeIds: se } = w;
      se && (q = q ? q.concat(se) : se);
      const ne = c(P),
        ve = S(a(P), w, ne, B, N, q, z);
      return ve && wa(ve) && ve.data === ']'
        ? a((w.anchor = ve))
        : ((Br = !0), d((w.anchor = h(']')), ne, ve), ve);
    },
    x = (P, w, B, N, q, z) => {
      if (((Br = !0), (w.el = null), z)) {
        const ve = L(P);
        for (;;) {
          const J = a(P);
          if (J && J !== ve) u(J);
          else break;
        }
      }
      const se = a(P),
        ne = c(P);
      return u(P), n(null, w, ne, se, B, N, ba(ne), q), se;
    },
    L = (P, w = '[', B = ']') => {
      let N = 0;
      for (; P; )
        if (((P = a(P)), P && wa(P) && (P.data === w && N++, P.data === B))) {
          if (N === 0) return a(P);
          N--;
        }
      return P;
    },
    O = (P, w, B) => {
      const N = w.parentNode;
      N && N.replaceChild(P, w);
      let q = B;
      for (; q; )
        q.vnode.el === w && (q.vnode.el = q.subTree.el = P), (q = q.parent);
    },
    V = (P) => P.nodeType === 1 && P.tagName.toLowerCase() === 'template';
  return [_, m];
}
const Tt = _1;
function R1(e) {
  return H1(e);
}
function N1(e) {
  return H1(e, kw);
}
function H1(e, t) {
  const n = ou();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: a,
      createElement: c,
      createText: u,
      createComment: d,
      setText: h,
      setElementText: _,
      parentNode: m,
      nextSibling: y,
      setScopeId: S = Rn,
      insertStaticContent: R,
    } = e,
    x = (
      $,
      T,
      H,
      X = null,
      Q = null,
      ee = null,
      ce = !1,
      oe = null,
      ie = !!T.dynamicChildren,
    ) => {
      if ($ === T) return;
      $ && !Vn($, T) && ((X = Ao($)), hn($, Q, ee, !0), ($ = null)),
        T.patchFlag === -2 && ((ie = !1), (T.dynamicChildren = null));
      const { type: Z, ref: ye, shapeFlag: _e } = T;
      switch (Z) {
        case xo:
          L($, T, H, X);
          break;
        case Et:
          O($, T, H, X);
          break;
        case yo:
          $ == null && V(T, H, X, ce);
          break;
        case Ae:
          J($, T, H, X, Q, ee, ce, oe, ie);
          break;
        default:
          _e & 1
            ? B($, T, H, X, Q, ee, ce, oe, ie)
            : _e & 6
              ? we($, T, H, X, Q, ee, ce, oe, ie)
              : (_e & 64 || _e & 128) &&
                Z.process($, T, H, X, Q, ee, ce, oe, ie, vn);
      }
      ye != null && Q && Ka(ye, $ && $.ref, ee, T || $, !T);
    },
    L = ($, T, H, X) => {
      if ($ == null) s((T.el = u(T.children)), H, X);
      else {
        const Q = (T.el = $.el);
        T.children !== $.children && h(Q, T.children);
      }
    },
    O = ($, T, H, X) => {
      $ == null ? s((T.el = d(T.children || '')), H, X) : (T.el = $.el);
    },
    V = ($, T, H, X) => {
      [$.el, $.anchor] = R($.children, T, H, X, $.el, $.anchor);
    },
    P = ({ el: $, anchor: T }, H, X) => {
      let Q;
      for (; $ && $ !== T; ) (Q = y($)), s($, H, X), ($ = Q);
      s(T, H, X);
    },
    w = ({ el: $, anchor: T }) => {
      let H;
      for (; $ && $ !== T; ) (H = y($)), i($), ($ = H);
      i(T);
    },
    B = ($, T, H, X, Q, ee, ce, oe, ie) => {
      (ce = ce || T.type === 'svg'),
        $ == null ? N(T, H, X, Q, ee, ce, oe, ie) : se($, T, Q, ee, ce, oe, ie);
    },
    N = ($, T, H, X, Q, ee, ce, oe) => {
      let ie, Z;
      const {
        type: ye,
        props: _e,
        shapeFlag: $e,
        transition: Ee,
        dirs: Re,
      } = $;
      if (
        ((ie = $.el = c($.type, ee, _e && _e.is, _e)),
        $e & 8
          ? _(ie, $.children)
          : $e & 16 &&
            z($.children, ie, null, X, Q, ee && ye !== 'foreignObject', ce, oe),
        Re && Yn($, null, X, 'created'),
        q(ie, $, $.scopeId, ce, X),
        _e)
      ) {
        for (const je in _e)
          je !== 'value' &&
            !Xs(je) &&
            a(ie, je, null, _e[je], ee, $.children, X, Q, jt);
        'value' in _e && a(ie, 'value', null, _e.value),
          (Z = _e.onVnodeBeforeMount) && Yt(Z, X, $);
      }
      Re && Yn($, null, X, 'beforeMount');
      const Ye = z1(Q, Ee);
      Ye && Ee.beforeEnter(ie),
        s(ie, T, H),
        ((Z = _e && _e.onVnodeMounted) || Ye || Re) &&
          Tt(() => {
            Z && Yt(Z, X, $),
              Ye && Ee.enter(ie),
              Re && Yn($, null, X, 'mounted');
          }, Q);
    },
    q = ($, T, H, X, Q) => {
      if ((H && S($, H), X)) for (let ee = 0; ee < X.length; ee++) S($, X[ee]);
      if (Q) {
        let ee = Q.subTree;
        if (T === ee) {
          const ce = Q.vnode;
          q($, ce, ce.scopeId, ce.slotScopeIds, Q.parent);
        }
      }
    },
    z = ($, T, H, X, Q, ee, ce, oe, ie = 0) => {
      for (let Z = ie; Z < $.length; Z++) {
        const ye = ($[Z] = oe ? Hr($[Z]) : an($[Z]));
        x(null, ye, T, H, X, Q, ee, ce, oe);
      }
    },
    se = ($, T, H, X, Q, ee, ce) => {
      const oe = (T.el = $.el);
      let { patchFlag: ie, dynamicChildren: Z, dirs: ye } = T;
      ie |= $.patchFlag & 16;
      const _e = $.props || et,
        $e = T.props || et;
      let Ee;
      H && lo(H, !1),
        (Ee = $e.onVnodeBeforeUpdate) && Yt(Ee, H, T, $),
        ye && Yn(T, $, H, 'beforeUpdate'),
        H && lo(H, !0);
      const Re = Q && T.type !== 'foreignObject';
      if (
        (Z
          ? ne($.dynamicChildren, Z, oe, H, X, Re, ee)
          : ce || ge($, T, oe, null, H, X, Re, ee, !1),
        ie > 0)
      ) {
        if (ie & 16) ve(oe, T, _e, $e, H, X, Q);
        else if (
          (ie & 2 && _e.class !== $e.class && a(oe, 'class', null, $e.class, Q),
          ie & 4 && a(oe, 'style', _e.style, $e.style, Q),
          ie & 8)
        ) {
          const Ye = T.dynamicProps;
          for (let je = 0; je < Ye.length; je++) {
            const it = Ye[je],
              Bt = _e[it],
              qn = $e[it];
            (qn !== Bt || it === 'value') &&
              a(oe, it, Bt, qn, Q, $.children, H, X, jt);
          }
        }
        ie & 1 && $.children !== T.children && _(oe, T.children);
      } else !ce && Z == null && ve(oe, T, _e, $e, H, X, Q);
      ((Ee = $e.onVnodeUpdated) || ye) &&
        Tt(() => {
          Ee && Yt(Ee, H, T, $), ye && Yn(T, $, H, 'updated');
        }, X);
    },
    ne = ($, T, H, X, Q, ee, ce) => {
      for (let oe = 0; oe < T.length; oe++) {
        const ie = $[oe],
          Z = T[oe],
          ye =
            ie.el && (ie.type === Ae || !Vn(ie, Z) || ie.shapeFlag & 70)
              ? m(ie.el)
              : H;
        x(ie, Z, ye, null, X, Q, ee, ce, !0);
      }
    },
    ve = ($, T, H, X, Q, ee, ce) => {
      if (H !== X) {
        if (H !== et)
          for (const oe in H)
            !Xs(oe) &&
              !(oe in X) &&
              a($, oe, H[oe], null, ce, T.children, Q, ee, jt);
        for (const oe in X) {
          if (Xs(oe)) continue;
          const ie = X[oe],
            Z = H[oe];
          ie !== Z &&
            oe !== 'value' &&
            a($, oe, Z, ie, ce, T.children, Q, ee, jt);
        }
        'value' in X && a($, 'value', H.value, X.value);
      }
    },
    J = ($, T, H, X, Q, ee, ce, oe, ie) => {
      const Z = (T.el = $ ? $.el : u('')),
        ye = (T.anchor = $ ? $.anchor : u(''));
      let { patchFlag: _e, dynamicChildren: $e, slotScopeIds: Ee } = T;
      Ee && (oe = oe ? oe.concat(Ee) : Ee),
        $ == null
          ? (s(Z, H, X), s(ye, H, X), z(T.children, H, ye, Q, ee, ce, oe, ie))
          : _e > 0 && _e & 64 && $e && $.dynamicChildren
            ? (ne($.dynamicChildren, $e, H, Q, ee, ce, oe),
              (T.key != null || (Q && T === Q.subTree)) && af($, T, !0))
            : ge($, T, H, ye, Q, ee, ce, oe, ie);
    },
    we = ($, T, H, X, Q, ee, ce, oe, ie) => {
      (T.slotScopeIds = oe),
        $ == null
          ? T.shapeFlag & 512
            ? Q.ctx.activate(T, H, X, ce, ie)
            : Ge(T, H, X, Q, ee, ce, ie)
          : ot($, T, ie);
    },
    Ge = ($, T, H, X, Q, ee, ce) => {
      const oe = ($.component = Y1($, X, Q));
      if ((yi($) && (oe.ctx.renderer = vn), Z1(oe), oe.asyncDep)) {
        if ((Q && Q.registerDep(oe, be), !$.el)) {
          const ie = (oe.subTree = Y(Et));
          O(null, ie, T, H);
        }
        return;
      }
      be(oe, $, T, H, Q, ee, ce);
    },
    ot = ($, T, H) => {
      const X = (T.component = $.component);
      if (A8($, T, H))
        if (X.asyncDep && !X.asyncResolved) {
          Ie(X, T, H);
          return;
        } else (X.next = T), $8(X.update), X.update();
      else (T.el = $.el), (X.vnode = T);
    },
    be = ($, T, H, X, Q, ee, ce) => {
      const oe = () => {
          if ($.isMounted) {
            let { next: ye, bu: _e, u: $e, parent: Ee, vnode: Re } = $,
              Ye = ye,
              je;
            lo($, !1),
              ye ? ((ye.el = Re.el), Ie($, ye, ce)) : (ye = Re),
              _e && ns(_e),
              (je = ye.props && ye.props.onVnodeBeforeUpdate) &&
                Yt(je, Ee, ye, Re),
              lo($, !0);
            const it = Va($),
              Bt = $.subTree;
            ($.subTree = it),
              x(Bt, it, m(Bt.el), Ao(Bt), $, Q, ee),
              (ye.el = it.el),
              Ye === null && Zu($, it.el),
              $e && Tt($e, Q),
              (je = ye.props && ye.props.onVnodeUpdated) &&
                Tt(() => Yt(je, Ee, ye, Re), Q);
          } else {
            let ye;
            const { el: _e, props: $e } = T,
              { bm: Ee, m: Re, parent: Ye } = $,
              je = mo(T);
            if (
              (lo($, !1),
              Ee && ns(Ee),
              !je && (ye = $e && $e.onVnodeBeforeMount) && Yt(ye, Ye, T),
              lo($, !0),
              _e && xr)
            ) {
              const it = () => {
                ($.subTree = Va($)), xr(_e, $.subTree, $, Q, null);
              };
              je
                ? T.type.__asyncLoader().then(() => !$.isUnmounted && it())
                : it();
            } else {
              const it = ($.subTree = Va($));
              x(null, it, H, X, $, Q, ee), (T.el = it.el);
            }
            if ((Re && Tt(Re, Q), !je && (ye = $e && $e.onVnodeMounted))) {
              const it = T;
              Tt(() => Yt(ye, Ye, it), Q);
            }
            (T.shapeFlag & 256 ||
              (Ye && mo(Ye.vnode) && Ye.vnode.shapeFlag & 256)) &&
              $.a &&
              Tt($.a, Q),
              ($.isMounted = !0),
              (T = H = X = null);
          }
        },
        ie = ($.effect = new cs(oe, () => dl(Z), $.scope)),
        Z = ($.update = () => ie.run());
      (Z.id = $.uid), lo($, !0), Z();
    },
    Ie = ($, T, H) => {
      T.component = $;
      const X = $.vnode.props;
      ($.vnode = T),
        ($.next = null),
        mw($, T.props, X, H),
        ww($, T.children, H),
        _s(),
        ph(),
        gs();
    },
    ge = ($, T, H, X, Q, ee, ce, oe, ie = !1) => {
      const Z = $ && $.children,
        ye = $ ? $.shapeFlag : 0,
        _e = T.children,
        { patchFlag: $e, shapeFlag: Ee } = T;
      if ($e > 0) {
        if ($e & 128) {
          er(Z, _e, H, X, Q, ee, ce, oe, ie);
          return;
        } else if ($e & 256) {
          An(Z, _e, H, X, Q, ee, ce, oe, ie);
          return;
        }
      }
      Ee & 8
        ? (ye & 16 && jt(Z, Q, ee), _e !== Z && _(H, _e))
        : ye & 16
          ? Ee & 16
            ? er(Z, _e, H, X, Q, ee, ce, oe, ie)
            : jt(Z, Q, ee, !0)
          : (ye & 8 && _(H, ''), Ee & 16 && z(_e, H, X, Q, ee, ce, oe, ie));
    },
    An = ($, T, H, X, Q, ee, ce, oe, ie) => {
      ($ = $ || es), (T = T || es);
      const Z = $.length,
        ye = T.length,
        _e = Math.min(Z, ye);
      let $e;
      for ($e = 0; $e < _e; $e++) {
        const Ee = (T[$e] = ie ? Hr(T[$e]) : an(T[$e]));
        x($[$e], Ee, H, null, Q, ee, ce, oe, ie);
      }
      Z > ye ? jt($, Q, ee, !0, !1, _e) : z(T, H, X, Q, ee, ce, oe, ie, _e);
    },
    er = ($, T, H, X, Q, ee, ce, oe, ie) => {
      let Z = 0;
      const ye = T.length;
      let _e = $.length - 1,
        $e = ye - 1;
      for (; Z <= _e && Z <= $e; ) {
        const Ee = $[Z],
          Re = (T[Z] = ie ? Hr(T[Z]) : an(T[Z]));
        if (Vn(Ee, Re)) x(Ee, Re, H, null, Q, ee, ce, oe, ie);
        else break;
        Z++;
      }
      for (; Z <= _e && Z <= $e; ) {
        const Ee = $[_e],
          Re = (T[$e] = ie ? Hr(T[$e]) : an(T[$e]));
        if (Vn(Ee, Re)) x(Ee, Re, H, null, Q, ee, ce, oe, ie);
        else break;
        _e--, $e--;
      }
      if (Z > _e) {
        if (Z <= $e) {
          const Ee = $e + 1,
            Re = Ee < ye ? T[Ee].el : X;
          for (; Z <= $e; )
            x(
              null,
              (T[Z] = ie ? Hr(T[Z]) : an(T[Z])),
              H,
              Re,
              Q,
              ee,
              ce,
              oe,
              ie,
            ),
              Z++;
        }
      } else if (Z > $e) for (; Z <= _e; ) hn($[Z], Q, ee, !0), Z++;
      else {
        const Ee = Z,
          Re = Z,
          Ye = new Map();
        for (Z = Re; Z <= $e; Z++) {
          const Ct = (T[Z] = ie ? Hr(T[Z]) : an(T[Z]));
          Ct.key != null && Ye.set(Ct.key, Z);
        }
        let je,
          it = 0;
        const Bt = $e - Re + 1;
        let qn = !1,
          Io = 0;
        const tr = new Array(Bt);
        for (Z = 0; Z < Bt; Z++) tr[Z] = 0;
        for (Z = Ee; Z <= _e; Z++) {
          const Ct = $[Z];
          if (it >= Bt) {
            hn(Ct, Q, ee, !0);
            continue;
          }
          let Dt;
          if (Ct.key != null) Dt = Ye.get(Ct.key);
          else
            for (je = Re; je <= $e; je++)
              if (tr[je - Re] === 0 && Vn(Ct, T[je])) {
                Dt = je;
                break;
              }
          Dt === void 0
            ? hn(Ct, Q, ee, !0)
            : ((tr[Dt - Re] = Z + 1),
              Dt >= Io ? (Io = Dt) : (qn = !0),
              x(Ct, T[Dt], H, null, Q, ee, ce, oe, ie),
              it++);
        }
        const Mo = qn ? $w(tr) : es;
        for (je = Mo.length - 1, Z = Bt - 1; Z >= 0; Z--) {
          const Ct = Re + Z,
            Dt = T[Ct],
            Lo = Ct + 1 < ye ? T[Ct + 1].el : X;
          tr[Z] === 0
            ? x(null, Dt, H, Lo, Q, ee, ce, oe, ie)
            : qn && (je < 0 || Z !== Mo[je] ? kt(Dt, H, Lo, 2) : je--);
        }
      }
    },
    kt = ($, T, H, X, Q = null) => {
      const {
        el: ee,
        type: ce,
        transition: oe,
        children: ie,
        shapeFlag: Z,
      } = $;
      if (Z & 6) {
        kt($.component.subTree, T, H, X);
        return;
      }
      if (Z & 128) {
        $.suspense.move(T, H, X);
        return;
      }
      if (Z & 64) {
        ce.move($, T, H, vn);
        return;
      }
      if (ce === Ae) {
        s(ee, T, H);
        for (let _e = 0; _e < ie.length; _e++) kt(ie[_e], T, H, X);
        s($.anchor, T, H);
        return;
      }
      if (ce === yo) {
        P($, T, H);
        return;
      }
      if (X !== 2 && Z & 1 && oe)
        if (X === 0) oe.beforeEnter(ee), s(ee, T, H), Tt(() => oe.enter(ee), Q);
        else {
          const { leave: _e, delayLeave: $e, afterLeave: Ee } = oe,
            Re = () => s(ee, T, H),
            Ye = () => {
              _e(ee, () => {
                Re(), Ee && Ee();
              });
            };
          $e ? $e(ee, Re, Ye) : Ye();
        }
      else s(ee, T, H);
    },
    hn = ($, T, H, X = !1, Q = !1) => {
      const {
        type: ee,
        props: ce,
        ref: oe,
        children: ie,
        dynamicChildren: Z,
        shapeFlag: ye,
        patchFlag: _e,
        dirs: $e,
      } = $;
      if ((oe != null && Ka(oe, null, H, $, !0), ye & 256)) {
        T.ctx.deactivate($);
        return;
      }
      const Ee = ye & 1 && $e,
        Re = !mo($);
      let Ye;
      if ((Re && (Ye = ce && ce.onVnodeBeforeUnmount) && Yt(Ye, T, $), ye & 6))
        kr($.component, H, X);
      else {
        if (ye & 128) {
          $.suspense.unmount(H, X);
          return;
        }
        Ee && Yn($, null, T, 'beforeUnmount'),
          ye & 64
            ? $.type.remove($, T, H, Q, vn, X)
            : Z && (ee !== Ae || (_e > 0 && _e & 64))
              ? jt(Z, T, H, !1, !0)
              : ((ee === Ae && _e & 384) || (!Q && ye & 16)) && jt(ie, T, H),
          X && $i($);
      }
      ((Re && (Ye = ce && ce.onVnodeUnmounted)) || Ee) &&
        Tt(() => {
          Ye && Yt(Ye, T, $), Ee && Yn($, null, T, 'unmounted');
        }, H);
    },
    $i = ($) => {
      const { type: T, el: H, anchor: X, transition: Q } = $;
      if (T === Ae) {
        Tl(H, X);
        return;
      }
      if (T === yo) {
        w($);
        return;
      }
      const ee = () => {
        i(H), Q && !Q.persisted && Q.afterLeave && Q.afterLeave();
      };
      if ($.shapeFlag & 1 && Q && !Q.persisted) {
        const { leave: ce, delayLeave: oe } = Q,
          ie = () => ce(H, ee);
        oe ? oe($.el, ee, ie) : ie();
      } else ee();
    },
    Tl = ($, T) => {
      let H;
      for (; $ !== T; ) (H = y($)), i($), ($ = H);
      i(T);
    },
    kr = ($, T, H) => {
      const { bum: X, scope: Q, update: ee, subTree: ce, um: oe } = $;
      X && ns(X),
        Q.stop(),
        ee && ((ee.active = !1), hn(ce, $, T, H)),
        oe && Tt(oe, T),
        Tt(() => {
          $.isUnmounted = !0;
        }, T),
        T &&
          T.pendingBranch &&
          !T.isUnmounted &&
          $.asyncDep &&
          !$.asyncResolved &&
          $.suspenseId === T.pendingId &&
          (T.deps--, T.deps === 0 && T.resolve());
    },
    jt = ($, T, H, X = !1, Q = !1, ee = 0) => {
      for (let ce = ee; ce < $.length; ce++) hn($[ce], T, H, X, Q);
    },
    Ao = ($) =>
      $.shapeFlag & 6
        ? Ao($.component.subTree)
        : $.shapeFlag & 128
          ? $.suspense.next()
          : y($.anchor || $.el),
    $r = ($, T, H) => {
      $ == null
        ? T._vnode && hn(T._vnode, null, null, !0)
        : x(T._vnode || null, $, T, null, null, null, H),
        ph(),
        Ua(),
        (T._vnode = $);
    },
    vn = {
      p: x,
      um: hn,
      m: kt,
      r: $i,
      mt: Ge,
      mc: z,
      pc: ge,
      pbc: ne,
      n: Ao,
      o: e,
    };
  let $s, xr;
  return (
    t && ([$s, xr] = t(vn)), { render: $r, hydrate: $s, createApp: vw($r, $s) }
  );
}
function lo({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function z1(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function af(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (he(s) && he(i))
    for (let a = 0; a < s.length; a++) {
      const c = s[a];
      let u = i[a];
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = i[a] = Hr(i[a])), (u.el = c.el)),
        n || af(c, u)),
        u.type === xo && (u.el = c.el);
    }
}
function $w(e) {
  const t = e.slice(),
    n = [0];
  let s, i, a, c, u;
  const d = e.length;
  for (s = 0; s < d; s++) {
    const h = e[s];
    if (h !== 0) {
      if (((i = n[n.length - 1]), e[i] < h)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (a = 0, c = n.length - 1; a < c; )
        (u = (a + c) >> 1), e[n[u]] < h ? (a = u + 1) : (c = u);
      h < e[n[a]] && (a > 0 && (t[s] = n[a - 1]), (n[a] = s));
    }
  }
  for (a = n.length, c = n[a - 1]; a-- > 0; ) (n[a] = c), (c = t[c]);
  return n;
}
const xw = (e) => e.__isTeleport,
  Qs = (e) => e && (e.disabled || e.disabled === ''),
  Ch = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  hu = (e, t) => {
    const n = e && e.to;
    return We(n) ? (t ? t(n) : null) : n;
  },
  Cw = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, s, i, a, c, u, d, h) {
      const {
          mc: _,
          pc: m,
          pbc: y,
          o: { insert: S, querySelector: R, createText: x, createComment: L },
        } = h,
        O = Qs(t.props);
      let { shapeFlag: V, children: P, dynamicChildren: w } = t;
      if (e == null) {
        const B = (t.el = x('')),
          N = (t.anchor = x(''));
        S(B, n, s), S(N, n, s);
        const q = (t.target = hu(t.props, R)),
          z = (t.targetAnchor = x(''));
        q && (S(z, q), (c = c || Ch(q)));
        const se = (ne, ve) => {
          V & 16 && _(P, ne, ve, i, a, c, u, d);
        };
        O ? se(n, N) : q && se(q, z);
      } else {
        t.el = e.el;
        const B = (t.anchor = e.anchor),
          N = (t.target = e.target),
          q = (t.targetAnchor = e.targetAnchor),
          z = Qs(e.props),
          se = z ? n : N,
          ne = z ? B : q;
        if (
          ((c = c || Ch(N)),
          w
            ? (y(e.dynamicChildren, w, se, i, a, c, u), af(e, t, !0))
            : d || m(e, t, se, ne, i, a, c, u, !1),
          O)
        )
          z
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : ka(t, n, B, h, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const ve = (t.target = hu(t.props, R));
          ve && ka(t, ve, null, h, 0);
        } else z && ka(t, N, q, h, 1);
      }
      j1(t);
    },
    remove(e, t, n, s, { um: i, o: { remove: a } }, c) {
      const {
        shapeFlag: u,
        children: d,
        anchor: h,
        targetAnchor: _,
        target: m,
        props: y,
      } = e;
      if ((m && a(_), c && a(h), u & 16)) {
        const S = c || !Qs(y);
        for (let R = 0; R < d.length; R++) {
          const x = d[R];
          i(x, t, n, S, !!x.dynamicChildren);
        }
      }
    },
    move: ka,
    hydrate: Pw,
  };
function ka(e, t, n, { o: { insert: s }, m: i }, a = 2) {
  a === 0 && s(e.targetAnchor, t, n);
  const { el: c, anchor: u, shapeFlag: d, children: h, props: _ } = e,
    m = a === 2;
  if ((m && s(c, t, n), (!m || Qs(_)) && d & 16))
    for (let y = 0; y < h.length; y++) i(h[y], t, n, 2);
  m && s(u, t, n);
}
function Pw(
  e,
  t,
  n,
  s,
  i,
  a,
  { o: { nextSibling: c, parentNode: u, querySelector: d } },
  h,
) {
  const _ = (t.target = hu(t.props, d));
  if (_) {
    const m = _._lpa || _.firstChild;
    if (t.shapeFlag & 16)
      if (Qs(t.props))
        (t.anchor = h(c(e), t, u(e), n, s, i, a)), (t.targetAnchor = m);
      else {
        t.anchor = c(e);
        let y = m;
        for (; y; )
          if (
            ((y = c(y)), y && y.nodeType === 8 && y.data === 'teleport anchor')
          ) {
            (t.targetAnchor = y),
              (_._lpa = t.targetAnchor && c(t.targetAnchor));
            break;
          }
        h(m, t, _, n, s, i, a);
      }
    j1(t);
  }
  return t.anchor && c(t.anchor);
}
const Sw = Cw;
function j1(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const Ae = Symbol.for('v-fgt'),
  xo = Symbol.for('v-txt'),
  Et = Symbol.for('v-cmt'),
  yo = Symbol.for('v-stc'),
  Js = [];
let Xt = null;
function k(e = !1) {
  Js.push((Xt = e ? null : []));
}
function D1() {
  Js.pop(), (Xt = Js[Js.length - 1] || null);
}
let Co = 1;
function vu(e) {
  Co += e;
}
function q1(e) {
  return (
    (e.dynamicChildren = Co > 0 ? Xt || es : null),
    D1(),
    Co > 0 && Xt && Xt.push(e),
    e
  );
}
function M(e, t, n, s, i, a) {
  return q1(I(e, t, n, s, i, a, !0));
}
function ke(e, t, n, s, i) {
  return q1(Y(e, t, n, s, i, !0));
}
function zn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vn(e, t) {
  return e.type === t.type && e.key === t.key;
}
function Tw(e) {}
const ml = '__vInternal',
  U1 = ({ key: e }) => e ?? null,
  Fa = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? We(e) || _t(e) || Te(e)
        ? { i: xt, r: e, k: t, f: !!n }
        : e
      : null
  );
function I(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  a = e === Ae ? 0 : 1,
  c = !1,
  u = !1,
) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && U1(t),
    ref: t && Fa(t),
    scopeId: hl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: xt,
  };
  return (
    u
      ? (lf(d, n), a & 128 && e.normalize(d))
      : n && (d.shapeFlag |= We(n) ? 8 : 16),
    Co > 0 &&
      !c &&
      Xt &&
      (d.patchFlag > 0 || a & 6) &&
      d.patchFlag !== 32 &&
      Xt.push(d),
    d
  );
}
const Y = Ew;
function Ew(e, t = null, n = null, s = 0, i = null, a = !1) {
  if (((!e || e === h1) && (e = Et), zn(e))) {
    const u = Qn(e, t, !0);
    return (
      n && lf(u, n),
      Co > 0 &&
        !a &&
        Xt &&
        (u.shapeFlag & 6 ? (Xt[Xt.indexOf(e)] = u) : Xt.push(u)),
      (u.patchFlag |= -2),
      u
    );
  }
  if ((Vw(e) && (e = e.__vccOpts), t)) {
    t = W1(t);
    let { class: u, style: d } = t;
    u && !We(u) && (t.class = Ce(u)),
      Je(d) && (Uu(d) && !he(d) && (d = lt({}, d)), (t.style = dt(d)));
  }
  const c = We(e) ? 1 : v1(e) ? 128 : xw(e) ? 64 : Je(e) ? 4 : Te(e) ? 2 : 0;
  return I(e, t, n, s, i, c, a, !0);
}
function W1(e) {
  return e ? (Uu(e) || ml in e ? lt({}, e) : e) : null;
}
function Qn(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: a, children: c } = e,
    u = t ? zt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && U1(u),
    ref:
      t && t.ref
        ? n && i
          ? he(i)
            ? i.concat(Fa(t))
            : [i, Fa(t)]
          : Fa(t)
        : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ae ? (a === -1 ? 16 : a | 16) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qn(e.ssContent),
    ssFallback: e.ssFallback && Qn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function At(e = ' ', t = 0) {
  return Y(xo, null, e, t);
}
function K1(e, t) {
  const n = Y(yo, null, e);
  return (n.staticCount = t), n;
}
function ue(e = '', t = !1) {
  return t ? (k(), ke(Et, null, e)) : Y(Et, null, e);
}
function an(e) {
  return e == null || typeof e == 'boolean'
    ? Y(Et)
    : he(e)
      ? Y(Ae, null, e.slice())
      : typeof e == 'object'
        ? Hr(e)
        : Y(xo, null, String(e));
}
function Hr(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Qn(e);
}
function lf(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (he(t)) n = 16;
  else if (typeof t == 'object')
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), lf(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(ml in t)
        ? (t._ctx = xt)
        : i === 3 &&
          xt &&
          (xt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Te(t)
      ? ((t = { default: t, _ctx: xt }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [At(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function zt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === 'class')
        t.class !== s.class && (t.class = Ce([t.class, s.class]));
      else if (i === 'style') t.style = dt([t.style, s.style]);
      else if (vi(i)) {
        const a = t[i],
          c = s[i];
        c &&
          a !== c &&
          !(he(a) && a.includes(c)) &&
          (t[i] = a ? [].concat(a, c) : c);
      } else i !== '' && (t[i] = s[i]);
  }
  return t;
}
function Yt(e, t, n, s = null) {
  fn(e, t, 7, [n, s]);
}
const Aw = M1();
let Iw = 0;
function Y1(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || Aw,
    a = {
      uid: Iw++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new zu(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: O1(s, i),
      emitsOptions: p1(s, i),
      emit: null,
      emitted: null,
      propsDefaults: et,
      inheritAttrs: s.inheritAttrs,
      ctx: et,
      data: et,
      props: et,
      attrs: et,
      slots: et,
      refs: et,
      setupState: et,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (a.ctx = { _: a }),
    (a.root = t ? t.root : a),
    (a.emit = C8.bind(null, a)),
    e.ce && e.ce(a),
    a
  );
}
let vt = null;
const En = () => vt || xt;
let cf,
  Yo,
  Ph = '__VUE_INSTANCE_SETTERS__';
(Yo = ou()[Ph]) || (Yo = ou()[Ph] = []),
  Yo.push((e) => (vt = e)),
  (cf = (e) => {
    Yo.length > 1 ? Yo.forEach((t) => t(e)) : Yo[0](e);
  });
const Xr = (e) => {
    cf(e), e.scope.on();
  },
  jr = () => {
    vt && vt.scope.off(), cf(null);
  };
function X1(e) {
  return e.vnode.shapeFlag & 4;
}
let fs = !1;
function Z1(e, t = !1) {
  fs = t;
  const { props: n, children: s } = e.vnode,
    i = X1(e);
  gw(e, n, i, t), bw(e, s);
  const a = i ? Mw(e, t) : void 0;
  return (fs = !1), a;
}
function Mw(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = rs(new Proxy(e.ctx, uu)));
  const { setup: s } = n;
  if (s) {
    const i = (e.setupContext = s.length > 1 ? Q1(e) : null);
    Xr(e), _s();
    const a = vr(s, e, 0, [e.props, i]);
    if ((gs(), jr(), Nu(a))) {
      if ((a.then(jr, jr), t))
        return a
          .then((c) => {
            _u(e, c, t);
          })
          .catch((c) => {
            So(c, e, 0);
          });
      e.asyncDep = a;
    } else _u(e, a, t);
  } else G1(e, t);
}
function _u(e, t, n) {
  Te(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Je(t) && (e.setupState = Yu(t)),
    G1(e, n);
}
let Ya, gu;
function Lw(e) {
  (Ya = e),
    (gu = (t) => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, X8));
    });
}
const Ow = () => !Ya;
function G1(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ya && !s.render) {
      const i = s.template || of(e).template;
      if (i) {
        const { isCustomElement: a, compilerOptions: c } = e.appContext.config,
          { delimiters: u, compilerOptions: d } = s,
          h = lt(lt({ isCustomElement: a, delimiters: u }, c), d);
        s.render = Ya(i, h);
      }
    }
    (e.render = s.render || Rn), gu && gu(e);
  }
  {
    Xr(e), _s();
    try {
      cw(e);
    } finally {
      gs(), jr();
    }
  }
}
function Bw(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Gt(e, 'get', '$attrs'), t[n];
      },
    }))
  );
}
function Q1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Bw(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function yl(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Yu(rs(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Gs) return Gs[n](e);
        },
        has(t, n) {
          return n in t || n in Gs;
        },
      }))
    );
}
function mu(e, t = !0) {
  return Te(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Vw(e) {
  return Te(e) && '__vccOpts' in e;
}
const de = (e, t) => m8(e, t, fs);
function jn(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? Je(t) && !he(t)
      ? zn(t)
        ? Y(e, null, [t])
        : Y(e, t)
      : Y(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && zn(n) && (n = [n]),
      Y(e, t, n));
}
const J1 = Symbol.for('v-scx'),
  ev = () => Ot(J1);
function Fw() {}
function Rw(e, t, n, s) {
  const i = n[s];
  if (i && tv(i, e)) return i;
  const a = t();
  return (a.memo = e.slice()), (n[s] = a);
}
function tv(e, t) {
  const n = e.memo;
  if (n.length != t.length) return !1;
  for (let s = 0; s < n.length; s++) if (Wr(n[s], t[s])) return !1;
  return Co > 0 && Xt && Xt.push(e), !0;
}
const nv = '3.3.9',
  Nw = {
    createComponentInstance: Y1,
    setupComponent: Z1,
    renderComponentRoot: Va,
    setCurrentRenderingInstance: li,
    isVNode: zn,
    normalizeVNode: an,
  },
  Hw = Nw,
  zw = null,
  jw = null,
  Dw = 'http://www.w3.org/2000/svg',
  fo = typeof document < 'u' ? document : null,
  Sh = fo && fo.createElement('template'),
  qw = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i = t
        ? fo.createElementNS(Dw, e)
        : fo.createElement(e, n ? { is: n } : void 0);
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          i.setAttribute('multiple', s.multiple),
        i
      );
    },
    createText: (e) => fo.createTextNode(e),
    createComment: (e) => fo.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => fo.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, s, i, a) {
      const c = n ? n.previousSibling : t.lastChild;
      if (i && (i === a || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === a || !(i = i.nextSibling));

        );
      else {
        Sh.innerHTML = s ? `<svg>${e}</svg>` : e;
        const u = Sh.content;
        if (s) {
          const d = u.firstChild;
          for (; d.firstChild; ) u.appendChild(d.firstChild);
          u.removeChild(d);
        }
        t.insertBefore(u, n);
      }
      return [
        c ? c.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Vr = 'transition',
  Ns = 'animation',
  ds = Symbol('_vtc'),
  Nn = (e, { slots: t }) => jn(m1, ov(e), t);
Nn.displayName = 'Transition';
const rv = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Uw = (Nn.props = lt({}, nf, rv)),
  co = (e, t = []) => {
    he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Th = (e) => (e ? (he(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ov(e) {
  const t = {};
  for (const J in e) J in rv || (t[J] = e[J]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: s,
      duration: i,
      enterFromClass: a = `${n}-enter-from`,
      enterActiveClass: c = `${n}-enter-active`,
      enterToClass: u = `${n}-enter-to`,
      appearFromClass: d = a,
      appearActiveClass: h = c,
      appearToClass: _ = u,
      leaveFromClass: m = `${n}-leave-from`,
      leaveActiveClass: y = `${n}-leave-active`,
      leaveToClass: S = `${n}-leave-to`,
    } = e,
    R = Ww(i),
    x = R && R[0],
    L = R && R[1],
    {
      onBeforeEnter: O,
      onEnter: V,
      onEnterCancelled: P,
      onLeave: w,
      onLeaveCancelled: B,
      onBeforeAppear: N = O,
      onAppear: q = V,
      onAppearCancelled: z = P,
    } = t,
    se = (J, we, Ge) => {
      Rr(J, we ? _ : u), Rr(J, we ? h : c), Ge && Ge();
    },
    ne = (J, we) => {
      (J._isLeaving = !1), Rr(J, m), Rr(J, S), Rr(J, y), we && we();
    },
    ve = (J) => (we, Ge) => {
      const ot = J ? q : V,
        be = () => se(we, J, Ge);
      co(ot, [we, be]),
        Eh(() => {
          Rr(we, J ? d : a), fr(we, J ? _ : u), Th(ot) || Ah(we, s, x, be);
        });
    };
  return lt(t, {
    onBeforeEnter(J) {
      co(O, [J]), fr(J, a), fr(J, c);
    },
    onBeforeAppear(J) {
      co(N, [J]), fr(J, d), fr(J, h);
    },
    onEnter: ve(!1),
    onAppear: ve(!0),
    onLeave(J, we) {
      J._isLeaving = !0;
      const Ge = () => ne(J, we);
      fr(J, m),
        iv(),
        fr(J, y),
        Eh(() => {
          J._isLeaving && (Rr(J, m), fr(J, S), Th(w) || Ah(J, s, L, Ge));
        }),
        co(w, [J, Ge]);
    },
    onEnterCancelled(J) {
      se(J, !1), co(P, [J]);
    },
    onAppearCancelled(J) {
      se(J, !0), co(z, [J]);
    },
    onLeaveCancelled(J) {
      ne(J), co(B, [J]);
    },
  });
}
function Ww(e) {
  if (e == null) return null;
  if (Je(e)) return [Wc(e.enter), Wc(e.leave)];
  {
    const t = Wc(e);
    return [t, t];
  }
}
function Wc(e) {
  return ja(e);
}
function fr(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[ds] || (e[ds] = new Set())).add(t);
}
function Rr(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[ds];
  n && (n.delete(t), n.size || (e[ds] = void 0));
}
function Eh(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Kw = 0;
function Ah(e, t, n, s) {
  const i = (e._endId = ++Kw),
    a = () => {
      i === e._endId && s();
    };
  if (n) return setTimeout(a, n);
  const { type: c, timeout: u, propCount: d } = sv(e, t);
  if (!c) return s();
  const h = c + 'end';
  let _ = 0;
  const m = () => {
      e.removeEventListener(h, y), a();
    },
    y = (S) => {
      S.target === e && ++_ >= d && m();
    };
  setTimeout(() => {
    _ < d && m();
  }, u + 1),
    e.addEventListener(h, y);
}
function sv(e, t) {
  const n = window.getComputedStyle(e),
    s = (R) => (n[R] || '').split(', '),
    i = s(`${Vr}Delay`),
    a = s(`${Vr}Duration`),
    c = Ih(i, a),
    u = s(`${Ns}Delay`),
    d = s(`${Ns}Duration`),
    h = Ih(u, d);
  let _ = null,
    m = 0,
    y = 0;
  t === Vr
    ? c > 0 && ((_ = Vr), (m = c), (y = a.length))
    : t === Ns
      ? h > 0 && ((_ = Ns), (m = h), (y = d.length))
      : ((m = Math.max(c, h)),
        (_ = m > 0 ? (c > h ? Vr : Ns) : null),
        (y = _ ? (_ === Vr ? a.length : d.length) : 0));
  const S =
    _ === Vr && /\b(transform|all)(,|$)/.test(s(`${Vr}Property`).toString());
  return { type: _, timeout: m, propCount: y, hasTransform: S };
}
function Ih(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Mh(n) + Mh(e[s])));
}
function Mh(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function iv() {
  return document.body.offsetHeight;
}
function Yw(e, t, n) {
  const s = e[ds];
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t);
}
const uf = Symbol('_vod'),
  Gn = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[uf] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Hs(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Hs(e, !0), s.enter(e))
            : s.leave(e, () => {
                Hs(e, !1);
              })
          : Hs(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Hs(e, t);
    },
  };
function Hs(e, t) {
  e.style.display = t ? e[uf] : 'none';
}
function Xw() {
  Gn.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: 'none' } };
  };
}
function Zw(e, t, n) {
  const s = e.style,
    i = We(n);
  if (n && !i) {
    if (t && !We(t)) for (const a in t) n[a] == null && yu(s, a, '');
    for (const a in n) yu(s, a, n[a]);
  } else {
    const a = s.display;
    i ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'),
      uf in e && (s.display = a);
  }
}
const Lh = /\s*!important$/;
function yu(e, t, n) {
  if (he(n)) n.forEach((s) => yu(e, t, s));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const s = Gw(e, t);
    Lh.test(n)
      ? e.setProperty(ln(s), n.replace(Lh, ''), 'important')
      : (e[s] = n);
  }
}
const Oh = ['Webkit', 'Moz', 'ms'],
  Kc = {};
function Gw(e, t) {
  const n = Kc[t];
  if (n) return n;
  let s = Zt(t);
  if (s !== 'filter' && s in e) return (Kc[t] = s);
  s = _i(s);
  for (let i = 0; i < Oh.length; i++) {
    const a = Oh[i] + s;
    if (a in e) return (Kc[t] = a);
  }
  return t;
}
const Bh = 'http://www.w3.org/1999/xlink';
function Qw(e, t, n, s, i) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Bh, t.slice(6, t.length))
      : e.setAttributeNS(Bh, t, n);
  else {
    const a = Bb(t);
    n == null || (a && !U0(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? '' : n);
  }
}
function Jw(e, t, n, s, i, a, c) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && c(s, i, a), (e[t] = n ?? '');
    return;
  }
  const u = e.tagName;
  if (t === 'value' && u !== 'PROGRESS' && !u.includes('-')) {
    e._value = n;
    const h = u === 'OPTION' ? e.getAttribute('value') : e.value,
      _ = n ?? '';
    h !== _ && (e.value = _), n == null && e.removeAttribute(t);
    return;
  }
  let d = !1;
  if (n === '' || n == null) {
    const h = typeof e[t];
    h === 'boolean'
      ? (n = U0(n))
      : n == null && h === 'string'
        ? ((n = ''), (d = !0))
        : h === 'number' && ((n = 0), (d = !0));
  }
  try {
    e[t] = n;
  } catch {}
  d && e.removeAttribute(t);
}
function pr(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function e5(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Vh = Symbol('_vei');
function t5(e, t, n, s, i = null) {
  const a = e[Vh] || (e[Vh] = {}),
    c = a[t];
  if (s && c) c.value = s;
  else {
    const [u, d] = n5(t);
    if (s) {
      const h = (a[t] = s5(s, i));
      pr(e, u, h, d);
    } else c && (e5(e, u, c, d), (a[t] = void 0));
  }
}
const Fh = /(?:Once|Passive|Capture)$/;
function n5(e) {
  let t;
  if (Fh.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Fh)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : ln(e.slice(2)), t];
}
let Yc = 0;
const r5 = Promise.resolve(),
  o5 = () => Yc || (r5.then(() => (Yc = 0)), (Yc = Date.now()));
function s5(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    fn(i5(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = o5()), n;
}
function i5(e, t) {
  if (he(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const Rh = /^on[a-z]/,
  a5 = (e, t, n, s, i = !1, a, c, u, d) => {
    t === 'class'
      ? Yw(e, s, i)
      : t === 'style'
        ? Zw(e, n, s)
        : vi(t)
          ? Fu(t) || t5(e, t, n, s, c)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : l5(e, t, s, i)
              )
            ? Jw(e, t, s, a, c, u, d)
            : (t === 'true-value'
                ? (e._trueValue = s)
                : t === 'false-value' && (e._falseValue = s),
              Qw(e, t, s, i));
  };
function l5(e, t, n, s) {
  return s
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && Rh.test(t) && Te(n))
      )
    : t === 'spellcheck' ||
        t === 'draggable' ||
        t === 'translate' ||
        t === 'form' ||
        (t === 'list' && e.tagName === 'INPUT') ||
        (t === 'type' && e.tagName === 'TEXTAREA') ||
        (Rh.test(t) && We(n))
      ? !1
      : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */ function av(e, t) {
  const n = te(e);
  class s extends bl {
    constructor(a) {
      super(n, a, t);
    }
  }
  return (s.def = n), s;
}
/*! #__NO_SIDE_EFFECTS__ */ const c5 = (e) => av(e, bv),
  u5 = typeof HTMLElement < 'u' ? HTMLElement : class {};
class bl extends u5 {
  constructor(t, n = {}, s) {
    super(),
      (this._def = t),
      (this._props = n),
      (this._instance = null),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      (this._ob = null),
      this.shadowRoot && s
        ? s(this._createVNode(), this.shadowRoot)
        : (this.attachShadow({ mode: 'open' }),
          this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    (this._connected = !0),
      this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    (this._connected = !1),
      this._ob && (this._ob.disconnect(), (this._ob = null)),
      Tn(() => {
        this._connected || (Jn(null, this.shadowRoot), (this._instance = null));
      });
  }
  _resolveDef() {
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    (this._ob = new MutationObserver((s) => {
      for (const i of s) this._setAttr(i.attributeName);
    })),
      this._ob.observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
        const { props: a, styles: c } = s;
        let u;
        if (a && !he(a))
          for (const d in a) {
            const h = a[d];
            (h === Number || (h && h.type === Number)) &&
              (d in this._props && (this._props[d] = ja(this._props[d])),
              ((u || (u = Object.create(null)))[Zt(d)] = !0));
          }
        (this._numberProps = u),
          i && this._resolveProps(s),
          this._applyStyles(c),
          this._update();
      },
      n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t,
      s = he(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== '_' && s.includes(i) && this._setProp(i, this[i], !0, !1);
    for (const i of s.map(Zt))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(a) {
          this._setProp(i, a);
        },
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = Zt(t);
    this._numberProps && this._numberProps[s] && (n = ja(n)),
      this._setProp(s, n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, s = !0, i = !0) {
    n !== this._props[t] &&
      ((this._props[t] = n),
      i && this._instance && this._update(),
      s &&
        (n === !0
          ? this.setAttribute(ln(t), '')
          : typeof n == 'string' || typeof n == 'number'
            ? this.setAttribute(ln(t), n + '')
            : n || this.removeAttribute(ln(t))));
  }
  _update() {
    Jn(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Y(this._def, lt({}, this._props));
    return (
      this._instance ||
        (t.ce = (n) => {
          (this._instance = n), (n.isCE = !0);
          const s = (a, c) => {
            this.dispatchEvent(new CustomEvent(a, { detail: c }));
          };
          n.emit = (a, ...c) => {
            s(a, c), ln(a) !== a && s(ln(a), c);
          };
          let i = this;
          for (; (i = i && (i.parentNode || i.host)); )
            if (i instanceof bl) {
              (n.parent = i._instance), (n.provides = i._instance.provides);
              break;
            }
        }),
      t
    );
  }
  _applyStyles(t) {
    t &&
      t.forEach((n) => {
        const s = document.createElement('style');
        (s.textContent = n), this.shadowRoot.appendChild(s);
      });
  }
}
function f5(e = '$style') {
  {
    const t = En();
    if (!t) return et;
    const n = t.type.__cssModules;
    if (!n) return et;
    const s = n[e];
    return s || et;
  }
}
function lv(e) {
  const t = En();
  if (!t) return;
  const n = (t.ut = (i = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`),
      ).forEach((a) => wu(a, i));
    }),
    s = () => {
      const i = e(t.proxy);
      bu(t.subTree, i), n(i);
    };
  ef(s),
    ut(() => {
      const i = new MutationObserver(s);
      i.observe(t.subTree.el.parentNode, { childList: !0 }),
        br(() => i.disconnect());
    });
}
function bu(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          bu(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) wu(e.el, t);
  else if (e.type === Ae) e.children.forEach((n) => bu(n, t));
  else if (e.type === yo) {
    let { el: n, anchor: s } = e;
    for (; n && (wu(n, t), n !== s); ) n = n.nextSibling;
  }
}
function wu(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const s in t) n.setProperty(`--${s}`, t[s]);
  }
}
const cv = new WeakMap(),
  uv = new WeakMap(),
  Xa = Symbol('_moveCb'),
  Nh = Symbol('_enterCb'),
  fv = {
    name: 'TransitionGroup',
    props: lt({}, Uw, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = En(),
        s = tf();
      let i, a;
      return (
        ys(() => {
          if (!i.length) return;
          const c = e.moveClass || `${e.name || 'v'}-move`;
          if (!_5(i[0].el, n.vnode.el, c)) return;
          i.forEach(p5), i.forEach(h5);
          const u = i.filter(v5);
          iv(),
            u.forEach((d) => {
              const h = d.el,
                _ = h.style;
              fr(h, c),
                (_.transform = _.webkitTransform = _.transitionDuration = '');
              const m = (h[Xa] = (y) => {
                (y && y.target !== h) ||
                  ((!y || /transform$/.test(y.propertyName)) &&
                    (h.removeEventListener('transitionend', m),
                    (h[Xa] = null),
                    Rr(h, c)));
              });
              h.addEventListener('transitionend', m);
            });
        }),
        () => {
          const c = qe(e),
            u = ov(c);
          let d = c.tag || Ae;
          (i = a), (a = t.default ? _l(t.default()) : []);
          for (let h = 0; h < a.length; h++) {
            const _ = a[h];
            _.key != null && $o(_, us(_, u, s, n));
          }
          if (i)
            for (let h = 0; h < i.length; h++) {
              const _ = i[h];
              $o(_, us(_, u, s, n)), cv.set(_, _.el.getBoundingClientRect());
            }
          return Y(d, null, a);
        }
      );
    },
  },
  d5 = (e) => delete e.mode;
fv.props;
const dv = fv;
function p5(e) {
  const t = e.el;
  t[Xa] && t[Xa](), t[Nh] && t[Nh]();
}
function h5(e) {
  uv.set(e, e.el.getBoundingClientRect());
}
function v5(e) {
  const t = cv.get(e),
    n = uv.get(e),
    s = t.left - n.left,
    i = t.top - n.top;
  if (s || i) {
    const a = e.el.style;
    return (
      (a.transform = a.webkitTransform = `translate(${s}px,${i}px)`),
      (a.transitionDuration = '0s'),
      e
    );
  }
}
function _5(e, t, n) {
  const s = e.cloneNode(),
    i = e[ds];
  i &&
    i.forEach((u) => {
      u.split(/\s+/).forEach((d) => d && s.classList.remove(d));
    }),
    n.split(/\s+/).forEach((u) => u && s.classList.add(u)),
    (s.style.display = 'none');
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(s);
  const { hasTransform: c } = sv(s);
  return a.removeChild(s), c;
}
const Zr = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return he(t) ? (n) => ns(t, n) : t;
};
function g5(e) {
  e.target.composing = !0;
}
function Hh(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const Cn = Symbol('_assign'),
  Za = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e[Cn] = Zr(i);
      const a = s || (i.props && i.props.type === 'number');
      pr(e, t ? 'change' : 'input', (c) => {
        if (c.target.composing) return;
        let u = e.value;
        n && (u = u.trim()), a && (u = za(u)), e[Cn](u);
      }),
        n &&
          pr(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (pr(e, 'compositionstart', g5),
          pr(e, 'compositionend', Hh),
          pr(e, 'change', Hh));
    },
    mounted(e, { value: t }) {
      e.value = t ?? '';
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: i } },
      a,
    ) {
      if (((e[Cn] = Zr(a)), e.composing)) return;
      const c = i || e.type === 'number' ? za(e.value) : e.value,
        u = t ?? '';
      c !== u &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (n || (s && e.value.trim() === u))) ||
          (e.value = u));
    },
  },
  ff = {
    deep: !0,
    created(e, t, n) {
      (e[Cn] = Zr(n)),
        pr(e, 'change', () => {
          const s = e._modelValue,
            i = ps(e),
            a = e.checked,
            c = e[Cn];
          if (he(s)) {
            const u = il(s, i),
              d = u !== -1;
            if (a && !d) c(s.concat(i));
            else if (!a && d) {
              const h = [...s];
              h.splice(u, 1), c(h);
            }
          } else if (Po(s)) {
            const u = new Set(s);
            a ? u.add(i) : u.delete(i), c(u);
          } else c(hv(e, a));
        });
    },
    mounted: zh,
    beforeUpdate(e, t, n) {
      (e[Cn] = Zr(n)), zh(e, t, n);
    },
  };
function zh(e, { value: t, oldValue: n }, s) {
  (e._modelValue = t),
    he(t)
      ? (e.checked = il(t, s.props.value) > -1)
      : Po(t)
        ? (e.checked = t.has(s.props.value))
        : t !== n && (e.checked = Kr(t, hv(e, !0)));
}
const df = {
    created(e, { value: t }, n) {
      (e.checked = Kr(t, n.props.value)),
        (e[Cn] = Zr(n)),
        pr(e, 'change', () => {
          e[Cn](ps(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      (e[Cn] = Zr(s)), t !== n && (e.checked = Kr(t, s.props.value));
    },
  },
  pv = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, s) {
      const i = Po(t);
      pr(e, 'change', () => {
        const a = Array.prototype.filter
          .call(e.options, (c) => c.selected)
          .map((c) => (n ? za(ps(c)) : ps(c)));
        e[Cn](e.multiple ? (i ? new Set(a) : a) : a[0]);
      }),
        (e[Cn] = Zr(s));
    },
    mounted(e, { value: t }) {
      jh(e, t);
    },
    beforeUpdate(e, t, n) {
      e[Cn] = Zr(n);
    },
    updated(e, { value: t }) {
      jh(e, t);
    },
  };
function jh(e, t) {
  const n = e.multiple;
  if (!(n && !he(t) && !Po(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const a = e.options[s],
        c = ps(a);
      if (n) he(t) ? (a.selected = il(t, c) > -1) : (a.selected = t.has(c));
      else if (Kr(ps(a), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ps(e) {
  return '_value' in e ? e._value : e.value;
}
function hv(e, t) {
  const n = t ? '_trueValue' : '_falseValue';
  return n in e ? e[n] : t;
}
const vv = {
  created(e, t, n) {
    $a(e, t, n, null, 'created');
  },
  mounted(e, t, n) {
    $a(e, t, n, null, 'mounted');
  },
  beforeUpdate(e, t, n, s) {
    $a(e, t, n, s, 'beforeUpdate');
  },
  updated(e, t, n, s) {
    $a(e, t, n, s, 'updated');
  },
};
function _v(e, t) {
  switch (e) {
    case 'SELECT':
      return pv;
    case 'TEXTAREA':
      return Za;
    default:
      switch (t) {
        case 'checkbox':
          return ff;
        case 'radio':
          return df;
        default:
          return Za;
      }
  }
}
function $a(e, t, n, s, i) {
  const c = _v(e.tagName, n.props && n.props.type)[i];
  c && c(e, t, n, s);
}
function m5() {
  (Za.getSSRProps = ({ value: e }) => ({ value: e })),
    (df.getSSRProps = ({ value: e }, t) => {
      if (t.props && Kr(t.props.value, e)) return { checked: !0 };
    }),
    (ff.getSSRProps = ({ value: e }, t) => {
      if (he(e)) {
        if (t.props && il(e, t.props.value) > -1) return { checked: !0 };
      } else if (Po(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 };
      } else if (e) return { checked: !0 };
    }),
    (vv.getSSRProps = (e, t) => {
      if (typeof t.type != 'string') return;
      const n = _v(t.type.toUpperCase(), t.props && t.props.type);
      if (n.getSSRProps) return n.getSSRProps(e, t);
    });
}
const y5 = ['ctrl', 'shift', 'alt', 'meta'],
  b5 = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => y5.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Gr =
    (e, t) =>
    (n, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const a = b5[t[i]];
        if (a && a(n, t)) return;
      }
      return e(n, ...s);
    },
  w5 = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  k5 = (e, t) => (n) => {
    if (!('key' in n)) return;
    const s = ln(n.key);
    if (t.some((i) => i === s || w5[i] === s)) return e(n);
  },
  gv = lt({ patchProp: a5 }, qw);
let ei,
  Dh = !1;
function mv() {
  return ei || (ei = R1(gv));
}
function yv() {
  return (ei = Dh ? ei : N1(gv)), (Dh = !0), ei;
}
const Jn = (...e) => {
    mv().render(...e);
  },
  bv = (...e) => {
    yv().hydrate(...e);
  },
  wv = (...e) => {
    const t = mv().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const i = $v(s);
        if (!i) return;
        const a = t._component;
        !Te(a) && !a.render && !a.template && (a.template = i.innerHTML),
          (i.innerHTML = '');
        const c = n(i, !1, i instanceof SVGElement);
        return (
          i instanceof Element &&
            (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')),
          c
        );
      }),
      t
    );
  },
  kv = (...e) => {
    const t = yv().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const i = $v(s);
        if (i) return n(i, !0, i instanceof SVGElement);
      }),
      t
    );
  };
function $v(e) {
  return We(e) ? document.querySelector(e) : e;
}
let qh = !1;
const $5 = () => {
    qh || ((qh = !0), m5(), Xw());
  },
  x5 = () => {},
  lI = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BaseTransition: m1,
        BaseTransitionPropsValidators: nf,
        Comment: Et,
        EffectScope: zu,
        Fragment: Ae,
        KeepAlive: U8,
        ReactiveEffect: cs,
        Static: yo,
        Suspense: O8,
        Teleport: Sw,
        Text: xo,
        Transition: Nn,
        TransitionGroup: dv,
        VueElement: bl,
        assertNumber: b8,
        callWithAsyncErrorHandling: fn,
        callWithErrorHandling: vr,
        camelize: Zt,
        capitalize: _i,
        cloneVNode: Qn,
        compatUtils: jw,
        compile: x5,
        computed: de,
        createApp: wv,
        createBlock: ke,
        createCommentVNode: ue,
        createElementBlock: M,
        createElementVNode: I,
        createHydrationRenderer: N1,
        createPropsRestProxy: aw,
        createRenderer: R1,
        createSSRApp: kv,
        createSlots: K8,
        createStaticVNode: K1,
        createTextVNode: At,
        createVNode: Y,
        customRef: p8,
        defineAsyncComponent: D8,
        defineComponent: te,
        defineCustomElement: av,
        defineEmits: G8,
        defineExpose: Q8,
        defineModel: tw,
        defineOptions: J8,
        defineProps: Z8,
        defineSSRCustomElement: c5,
        defineSlots: ew,
        get devtools() {
          return Qo;
        },
        effect: Hb,
        effectScope: Fb,
        getCurrentInstance: En,
        getCurrentScope: gi,
        getTransitionRawChildren: _l,
        guardReactiveProps: W1,
        h: jn,
        handleError: So,
        hasInjectionContext: _w,
        hydrate: bv,
        initCustomFormatter: Fw,
        initDirectivesForSSR: $5,
        inject: Ot,
        isMemoSame: tv,
        isProxy: Uu,
        isReactive: go,
        isReadonly: ko,
        isRef: _t,
        isRuntimeOnly: Ow,
        isShallow: oi,
        isVNode: zn,
        markRaw: rs,
        mergeDefaults: sw,
        mergeModels: iw,
        mergeProps: zt,
        nextTick: Tn,
        normalizeClass: Ce,
        normalizeProps: Lb,
        normalizeStyle: dt,
        onActivated: b1,
        onBeforeMount: $1,
        onBeforeUnmount: bs,
        onBeforeUpdate: x1,
        onDeactivated: w1,
        onErrorCaptured: T1,
        onMounted: ut,
        onRenderTracked: S1,
        onRenderTriggered: P1,
        onScopeDispose: al,
        onServerPrefetch: C1,
        onUnmounted: br,
        onUpdated: ys,
        openBlock: k,
        popScopeId: pn,
        provide: Zn,
        proxyRefs: Yu,
        pushScopeId: dn,
        queuePostFlushCb: qa,
        reactive: un,
        readonly: ms,
        ref: re,
        registerRuntimeCompiler: Lw,
        render: Jn,
        renderList: wt,
        renderSlot: K,
        resolveComponent: Hn,
        resolveDirective: M8,
        resolveDynamicComponent: vl,
        resolveFilter: zw,
        resolveTransitionHooks: us,
        setBlockTracking: vu,
        setDevtoolsHook: d1,
        setTransitionHooks: $o,
        shallowReactive: qu,
        shallowReadonly: a8,
        shallowRef: i1,
        ssrContextKey: J1,
        ssrUtils: Hw,
        stop: zb,
        toDisplayString: Be,
        toHandlerKey: Zs,
        toHandlers: Y8,
        toRaw: qe,
        toRef: _8,
        toRefs: mr,
        toValue: u8,
        transformVNodeArgs: Tw,
        triggerRef: c8,
        unref: D,
        useAttrs: rw,
        useCssModule: f5,
        useCssVars: lv,
        useModel: ow,
        useSSRContext: ev,
        useSlots: rf,
        useTransitionState: tf,
        vModelCheckbox: ff,
        vModelDynamic: vv,
        vModelRadio: df,
        vModelSelect: pv,
        vModelText: Za,
        vShow: Gn,
        version: nv,
        warn: y8,
        watch: yt,
        watchEffect: gr,
        watchPostEffect: ef,
        watchSyncEffect: H8,
        withAsyncContext: lw,
        withCtx: ae,
        withDefaults: nw,
        withDirectives: _r,
        withKeys: k5,
        withMemo: Rw,
        withModifiers: Gr,
        withScopeId: P8,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  fe = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, i] of t) n[s] = i;
    return n;
  },
  C5 = {
    type: { type: String, default: 'default' },
    size: { type: String, default: '' },
    shape: { type: String, default: '' },
    block: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
  },
  P5 = ['xlink:href', 'fill'],
  S5 = ['src', 'alt'],
  T5 = te({
    name: 'BuIcon',
    __name: 'icon',
    props: { name: {}, size: {}, color: {}, type: {}, component: {} },
    setup(e) {
      const t = e,
        n = de(() => (typeof t.size == 'number' ? `${t.size}px` : t.size));
      return (s, i) => (
        k(),
        M(
          Ae,
          null,
          [
            s.component
              ? (k(),
                M(
                  'svg',
                  zt(
                    {
                      key: 0,
                      class: [
                        s.$attrs.class,
                        'icon',
                        'icon-svg',
                        s.type && `icon-${s.type}`,
                      ],
                      style: { width: n.value, height: n.value },
                      'aria-hidden': 'true',
                    },
                    s.$attrs,
                  ),
                  [
                    I(
                      'use',
                      { 'xlink:href': `#icon-${s.component}`, fill: s.color },
                      null,
                      8,
                      P5,
                    ),
                  ],
                  16,
                ))
              : ue('', !0),
            s.name
              ? (k(),
                M(
                  Ae,
                  { key: 1 },
                  [
                    /http|https/.test(s.name)
                      ? (k(),
                        M(
                          'img',
                          zt({ key: 0 }, s.$attrs, {
                            src: s.name,
                            alt: s.name,
                          }),
                          null,
                          16,
                          S5,
                        ))
                      : (k(),
                        M(
                          'span',
                          zt(
                            {
                              key: 1,
                              class: [
                                'bu-icon',
                                'icon-' + s.name,
                                s.type && `icon-${s.type}`,
                                s.$attrs.class,
                              ],
                            },
                            s.$attrs,
                            { style: { fontSize: n.value, color: s.color } },
                          ),
                          null,
                          16,
                        )),
                  ],
                  64,
                ))
              : ue('', !0),
          ],
          64,
        )
      );
    },
  }),
  E5 = () => {},
  Qt = (e, t) => {
    if (
      ((e.install = (n) => {
        for (const s of [e, ...Object.values(t ?? {})]) n.component(s.name, s);
      }),
      t)
    )
      for (const [n, s] of Object.entries(t)) e[n] = s;
    return e;
  },
  pf = (e, t) => (
    (e.install = (n) => {
      (e._context = n._context), (n.config.globalProperties[t] = e);
    }),
    e
  ),
  ws = (e) => ((e.install = E5), e),
  Xc = (function () {
    return function (e, t, n, s = !1) {
      e && t && n && e.addEventListener(t, n, s);
    };
  })(),
  Zc = (function () {
    return function (e, t, n, s = !1) {
      e && t && e.removeEventListener(t, n, s);
    };
  })();
const Pn = Qt(T5),
  A5 = te({
    name: 'BuButton',
    props: C5,
    emits: { click: (e) => e instanceof MouseEvent },
    setup(e, { slots: t, attrs: n, emit: s }) {
      const {
          type: i,
          size: a,
          block: c,
          disabled: u,
          shape: d,
          loading: h,
        } = mr(e),
        _ = 'bu-btn',
        m = d.value ? `${_}--${d.value}` : '',
        y = a.value ? `${_}--${a.value}` : '',
        S = de(() => [
          _,
          `${_}--${i.value}`,
          `${y}`,
          `${m}`,
          { [`${_}--block`]: c.value },
        ]),
        R = t.default ? t.default() : '按钮',
        x = i.value === 'link' ? 'a' : 'button',
        L = (O) => {
          e.loading || e.disabled || s('click', O);
        };
      return () =>
        Y(x, zt({ class: S.value, disabled: u.value, onClick: L }, n), {
          default: () => [
            h.value &&
              Y(
                Pn,
                { class: 'bu-load-loop', name: 'loading', size: '18' },
                null,
              ),
            R,
          ],
        });
    },
  });
const xv = Qt(A5),
  I5 = { class: 'bu-checkbox--label' },
  M5 = te({
    name: 'BuCheckbox',
    __name: 'checkbox',
    props: {
      modelValue: { type: Boolean },
      label: {},
      indeterminate: { type: Boolean, default: !1 },
    },
    emits: ['update:modelValue', 'click'],
    setup(e) {
      return (t, n) => (
        k(),
        M(
          'label',
          {
            class: Ce(['bu-checkbox', t.modelValue ? 'checked' : '']),
            onClick:
              n[0] ||
              (n[0] = (s) => t.$emit('update:modelValue', !t.modelValue)),
          },
          [
            I(
              'span',
              {
                class: Ce([
                  'bu-checkbox--input',
                  t.modelValue || t.indeterminate ? 'checked' : '',
                ]),
              },
              [
                t.modelValue
                  ? (k(),
                    ke(D(Pn), {
                      key: 0,
                      name: 'checkbox-select',
                      size: '18px',
                    }))
                  : (k(),
                    M(
                      Ae,
                      { key: 1 },
                      [
                        t.indeterminate
                          ? (k(),
                            ke(D(Pn), {
                              key: 0,
                              name: 'checkbox-indeterminate',
                              size: '18px',
                            }))
                          : (k(),
                            ke(D(Pn), {
                              key: 1,
                              name: 'checkbox',
                              size: '18px',
                            })),
                      ],
                      64,
                    )),
              ],
              2,
            ),
            I('span', I5, Be(t.label), 1),
          ],
          2,
        )
      );
    },
  }),
  hf = Qt(M5),
  L5 = te({
    name: 'BuContainer',
    __name: 'container',
    props: { direction: {} },
    setup(e) {
      const t = e,
        n = rf(),
        s = de(() =>
          n && n.default
            ? n.default().some((i) => {
                const a = i.type.name;
                return a === 'BuHeader' || a === 'BuFooter';
              })
            : t.direction === 'vertical',
        );
      return (i, a) => (
        k(),
        M(
          'section',
          { class: Ce(['bu-container', { 'is-vertical': s.value }]) },
          [K(i.$slots, 'default')],
          2,
        )
      );
    },
  }),
  Cv = te({
    name: 'BuAside',
    __name: 'aside',
    props: { width: { default: '300px' } },
    setup(e) {
      return (t, n) => (
        k(),
        M(
          'aside',
          { class: 'bu-aside', style: dt({ width: t.width }) },
          [K(t.$slots, 'default')],
          4,
        )
      );
    },
  }),
  Pv = te({
    name: 'BuFooter',
    __name: 'footer',
    props: { height: { default: '60px' } },
    setup(e) {
      return (t, n) => (
        k(),
        M(
          'footer',
          { class: 'bu-footer', style: dt({ height: t.height }) },
          [K(t.$slots, 'default')],
          4,
        )
      );
    },
  }),
  Sv = te({
    name: 'BuHeader',
    __name: 'header',
    props: { height: { default: '60px' } },
    setup(e) {
      return (t, n) => (
        k(),
        M(
          'header',
          { class: 'bu-header', style: dt({ height: t.height }) },
          [K(t.$slots, 'default')],
          4,
        )
      );
    },
  }),
  O5 = { name: 'BuMain' },
  B5 = { class: 'bu-main' };
function V5(e, t, n, s, i, a) {
  return k(), M('main', B5, [K(e.$slots, 'default')]);
}
const Tv = fe(O5, [['render', V5]]);
const Ev = Qt(L5, { Aside: Cv, Footer: Pv, Header: Sv, Main: Tv }),
  Av = ws(Cv),
  Iv = ws(Pv),
  Mv = ws(Sv),
  Lv = ws(Tv),
  Uh = 'bu-form',
  F5 = te({
    name: 'BuForm',
    __name: 'form',
    props: { model: {}, rules: {}, labelPosition: {}, labelWidth: {} },
    emits: ['submit'],
    setup(e, { expose: t, emit: n }) {
      const s = e,
        i = [],
        a = re(0),
        c = de(() => [Uh, `${Uh}--${s.labelPosition || 'right'}`]),
        u = n,
        d = (S) => {
          S &&
            (i.push(S),
            console.log('field.$label', S.$label),
            S.$label && !s.labelWidth && h(S.$label.value));
        },
        h = (S) => {
          const R = window.getComputedStyle(S.firstElementChild).width,
            x = Math.ceil(Number.parseFloat(R)) + 2;
          x > a.value && (a.value = x),
            console.log(
              x,
              Number.parseFloat(R),
              Math.ceil(Number.parseFloat(R)),
            );
        };
      function _(S) {
        const R = i.map((x) => x.validate());
        Promise.all(R)
          .then(() => {
            S(!0);
          })
          .catch(() => {
            S(!1);
          });
      }
      function m(S) {
        S.preventDefault(), u('submit', S);
      }
      const y = un({ ...mr(s), addField: d, autoLabelWidth: a });
      return (
        Zn('buFormKey', y),
        t({ validate: _ }),
        (S, R) => (
          k(),
          M(
            'form',
            { class: Ce(c.value), onSubmit: m },
            [K(S.$slots, 'default')],
            34,
          )
        )
      );
    },
  });
function vo() {
  return (
    (vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    vo.apply(this, arguments)
  );
}
function R5(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    di(e, t);
}
function ku(e) {
  return (
    (ku = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ku(e)
  );
}
function di(e, t) {
  return (
    (di = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (s, i) {
          return (s.__proto__ = i), s;
        }),
    di(e, t)
  );
}
function N5() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ra(e, t, n) {
  return (
    N5()
      ? (Ra = Reflect.construct.bind())
      : (Ra = function (i, a, c) {
          var u = [null];
          u.push.apply(u, a);
          var d = Function.bind.apply(i, u),
            h = new d();
          return c && di(h, c.prototype), h;
        }),
    Ra.apply(null, arguments)
  );
}
function H5(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1;
}
function $u(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    ($u = function (s) {
      if (s === null || !H5(s)) return s;
      if (typeof s != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (typeof t < 'u') {
        if (t.has(s)) return t.get(s);
        t.set(s, i);
      }
      function i() {
        return Ra(s, arguments, ku(this).constructor);
      }
      return (
        (i.prototype = Object.create(s.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        di(i, s)
      );
    }),
    $u(e)
  );
}
var z5 = /%[sdj%]/g,
  j5 = function () {};
typeof process < 'u' && process.env;
function xu(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (n) {
      var s = n.field;
      (t[s] = t[s] || []), t[s].push(n);
    }),
    t
  );
}
function cn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1;
    s < t;
    s++
  )
    n[s - 1] = arguments[s];
  var i = 0,
    a = n.length;
  if (typeof e == 'function') return e.apply(null, n);
  if (typeof e == 'string') {
    var c = e.replace(z5, function (u) {
      if (u === '%%') return '%';
      if (i >= a) return u;
      switch (u) {
        case '%s':
          return String(n[i++]);
        case '%d':
          return Number(n[i++]);
        case '%j':
          try {
            return JSON.stringify(n[i++]);
          } catch {
            return '[Circular]';
          }
          break;
        default:
          return u;
      }
    });
    return c;
  }
  return e;
}
function D5(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  );
}
function bt(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (D5(t) && typeof e == 'string' && !e)
  );
}
function q5(e, t, n) {
  var s = [],
    i = 0,
    a = e.length;
  function c(u) {
    s.push.apply(s, u || []), i++, i === a && n(s);
  }
  e.forEach(function (u) {
    t(u, c);
  });
}
function Wh(e, t, n) {
  var s = 0,
    i = e.length;
  function a(c) {
    if (c && c.length) {
      n(c);
      return;
    }
    var u = s;
    (s = s + 1), u < i ? t(e[u], a) : n([]);
  }
  a([]);
}
function U5(e) {
  var t = [];
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, e[n] || []);
    }),
    t
  );
}
var Kh = (function (e) {
  R5(t, e);
  function t(n, s) {
    var i;
    return (
      (i = e.call(this, 'Async Validation Error') || this),
      (i.errors = n),
      (i.fields = s),
      i
    );
  }
  return t;
})($u(Error));
function W5(e, t, n, s, i) {
  if (t.first) {
    var a = new Promise(function (y, S) {
      var R = function (O) {
          return s(O), O.length ? S(new Kh(O, xu(O))) : y(i);
        },
        x = U5(e);
      Wh(x, n, R);
    });
    return (
      a.catch(function (y) {
        return y;
      }),
      a
    );
  }
  var c = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    u = Object.keys(e),
    d = u.length,
    h = 0,
    _ = [],
    m = new Promise(function (y, S) {
      var R = function (L) {
        if ((_.push.apply(_, L), h++, h === d))
          return s(_), _.length ? S(new Kh(_, xu(_))) : y(i);
      };
      u.length || (s(_), y(i)),
        u.forEach(function (x) {
          var L = e[x];
          c.indexOf(x) !== -1 ? Wh(L, n, R) : q5(L, n, R);
        });
    });
  return (
    m.catch(function (y) {
      return y;
    }),
    m
  );
}
function K5(e) {
  return !!(e && e.message !== void 0);
}
function Y5(e, t) {
  for (var n = e, s = 0; s < t.length; s++) {
    if (n == null) return n;
    n = n[t[s]];
  }
  return n;
}
function Yh(e, t) {
  return function (n) {
    var s;
    return (
      e.fullFields
        ? (s = Y5(t, e.fullFields))
        : (s = t[n.field || e.fullField]),
      K5(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = s), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: s,
            field: n.field || e.fullField,
          }
    );
  };
}
function Xh(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var s = t[n];
        typeof s == 'object' && typeof e[n] == 'object'
          ? (e[n] = vo({}, e[n], s))
          : (e[n] = s);
      }
  }
  return e;
}
var Ov = function (t, n, s, i, a, c) {
    t.required &&
      (!s.hasOwnProperty(t.field) || bt(n, c || t.type)) &&
      i.push(cn(a.messages.required, t.fullField));
  },
  X5 = function (t, n, s, i, a) {
    (/^\s+$/.test(n) || n === '') &&
      i.push(cn(a.messages.whitespace, t.fullField));
  },
  xa,
  Z5 = function () {
    if (xa) return xa;
    var e = '[a-fA-F\\d:]',
      t = function (w) {
        return w && w.includeBoundaries
          ? '(?:(?<=\\s|^)(?=' + e + ')|(?<=' + e + ')(?=\\s|$))'
          : '';
      },
      n =
        '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
      s = '[a-fA-F\\d]{1,4}',
      i = (
        `
(?:
(?:` +
        s +
        ':){7}(?:' +
        s +
        `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
        s +
        ':){6}(?:' +
        n +
        '|:' +
        s +
        `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
        s +
        ':){5}(?::' +
        n +
        '|(?::' +
        s +
        `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
        s +
        ':){4}(?:(?::' +
        s +
        '){0,1}:' +
        n +
        '|(?::' +
        s +
        `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
        s +
        ':){3}(?:(?::' +
        s +
        '){0,2}:' +
        n +
        '|(?::' +
        s +
        `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
        s +
        ':){2}(?:(?::' +
        s +
        '){0,3}:' +
        n +
        '|(?::' +
        s +
        `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
        s +
        ':){1}(?:(?::' +
        s +
        '){0,4}:' +
        n +
        '|(?::' +
        s +
        `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
        s +
        '){0,5}:' +
        n +
        '|(?::' +
        s +
        `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
      )
        .replace(/\s*\/\/.*$/gm, '')
        .replace(/\n/g, '')
        .trim(),
      a = new RegExp('(?:^' + n + '$)|(?:^' + i + '$)'),
      c = new RegExp('^' + n + '$'),
      u = new RegExp('^' + i + '$'),
      d = function (w) {
        return w && w.exact
          ? a
          : new RegExp(
              '(?:' + t(w) + n + t(w) + ')|(?:' + t(w) + i + t(w) + ')',
              'g',
            );
      };
    (d.v4 = function (P) {
      return P && P.exact ? c : new RegExp('' + t(P) + n + t(P), 'g');
    }),
      (d.v6 = function (P) {
        return P && P.exact ? u : new RegExp('' + t(P) + i + t(P), 'g');
      });
    var h = '(?:(?:[a-z]+:)?//)',
      _ = '(?:\\S+(?::\\S*)?@)?',
      m = d.v4().source,
      y = d.v6().source,
      S = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
      R = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
      x = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
      L = '(?::\\d{2,5})?',
      O = '(?:[/?#][^\\s"]*)?',
      V =
        '(?:' +
        h +
        '|www\\.)' +
        _ +
        '(?:localhost|' +
        m +
        '|' +
        y +
        '|' +
        S +
        R +
        x +
        ')' +
        L +
        O;
    return (xa = new RegExp('(?:^' + V + '$)', 'i')), xa;
  },
  Zh = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  Ks = {
    integer: function (t) {
      return Ks.number(t) && parseInt(t, 10) === t;
    },
    float: function (t) {
      return Ks.number(t) && !Ks.integer(t);
    },
    array: function (t) {
      return Array.isArray(t);
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0;
      try {
        return !!new RegExp(t);
      } catch {
        return !1;
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == 'function' &&
        typeof t.getMonth == 'function' &&
        typeof t.getYear == 'function' &&
        !isNaN(t.getTime())
      );
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == 'number';
    },
    object: function (t) {
      return typeof t == 'object' && !Ks.array(t);
    },
    method: function (t) {
      return typeof t == 'function';
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(Zh.email);
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(Z5());
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(Zh.hex);
    },
  },
  G5 = function (t, n, s, i, a) {
    if (t.required && n === void 0) {
      Ov(t, n, s, i, a);
      return;
    }
    var c = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex',
      ],
      u = t.type;
    c.indexOf(u) > -1
      ? Ks[u](n) || i.push(cn(a.messages.types[u], t.fullField, t.type))
      : u &&
        typeof n !== t.type &&
        i.push(cn(a.messages.types[u], t.fullField, t.type));
  },
  Q5 = function (t, n, s, i, a) {
    var c = typeof t.len == 'number',
      u = typeof t.min == 'number',
      d = typeof t.max == 'number',
      h = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      _ = n,
      m = null,
      y = typeof n == 'number',
      S = typeof n == 'string',
      R = Array.isArray(n);
    if ((y ? (m = 'number') : S ? (m = 'string') : R && (m = 'array'), !m))
      return !1;
    R && (_ = n.length),
      S && (_ = n.replace(h, '_').length),
      c
        ? _ !== t.len && i.push(cn(a.messages[m].len, t.fullField, t.len))
        : u && !d && _ < t.min
          ? i.push(cn(a.messages[m].min, t.fullField, t.min))
          : d && !u && _ > t.max
            ? i.push(cn(a.messages[m].max, t.fullField, t.max))
            : u &&
              d &&
              (_ < t.min || _ > t.max) &&
              i.push(cn(a.messages[m].range, t.fullField, t.min, t.max));
  },
  Xo = 'enum',
  J5 = function (t, n, s, i, a) {
    (t[Xo] = Array.isArray(t[Xo]) ? t[Xo] : []),
      t[Xo].indexOf(n) === -1 &&
        i.push(cn(a.messages[Xo], t.fullField, t[Xo].join(', ')));
  },
  e7 = function (t, n, s, i, a) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            i.push(cn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
      else if (typeof t.pattern == 'string') {
        var c = new RegExp(t.pattern);
        c.test(n) ||
          i.push(cn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
      }
    }
  },
  ze = {
    required: Ov,
    whitespace: X5,
    type: G5,
    range: Q5,
    enum: J5,
    pattern: e7,
  },
  t7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n, 'string') && !t.required) return s();
      ze.required(t, n, i, c, a, 'string'),
        bt(n, 'string') ||
          (ze.type(t, n, i, c, a),
          ze.range(t, n, i, c, a),
          ze.pattern(t, n, i, c, a),
          t.whitespace === !0 && ze.whitespace(t, n, i, c, a));
    }
    s(c);
  },
  n7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n) && !t.required) return s();
      ze.required(t, n, i, c, a), n !== void 0 && ze.type(t, n, i, c, a);
    }
    s(c);
  },
  r7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if ((n === '' && (n = void 0), bt(n) && !t.required)) return s();
      ze.required(t, n, i, c, a),
        n !== void 0 && (ze.type(t, n, i, c, a), ze.range(t, n, i, c, a));
    }
    s(c);
  },
  o7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n) && !t.required) return s();
      ze.required(t, n, i, c, a), n !== void 0 && ze.type(t, n, i, c, a);
    }
    s(c);
  },
  s7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n) && !t.required) return s();
      ze.required(t, n, i, c, a), bt(n) || ze.type(t, n, i, c, a);
    }
    s(c);
  },
  i7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n) && !t.required) return s();
      ze.required(t, n, i, c, a),
        n !== void 0 && (ze.type(t, n, i, c, a), ze.range(t, n, i, c, a));
    }
    s(c);
  },
  a7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n) && !t.required) return s();
      ze.required(t, n, i, c, a),
        n !== void 0 && (ze.type(t, n, i, c, a), ze.range(t, n, i, c, a));
    }
    s(c);
  },
  l7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (n == null && !t.required) return s();
      ze.required(t, n, i, c, a, 'array'),
        n != null && (ze.type(t, n, i, c, a), ze.range(t, n, i, c, a));
    }
    s(c);
  },
  c7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n) && !t.required) return s();
      ze.required(t, n, i, c, a), n !== void 0 && ze.type(t, n, i, c, a);
    }
    s(c);
  },
  u7 = 'enum',
  f7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n) && !t.required) return s();
      ze.required(t, n, i, c, a), n !== void 0 && ze[u7](t, n, i, c, a);
    }
    s(c);
  },
  d7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n, 'string') && !t.required) return s();
      ze.required(t, n, i, c, a), bt(n, 'string') || ze.pattern(t, n, i, c, a);
    }
    s(c);
  },
  p7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n, 'date') && !t.required) return s();
      if ((ze.required(t, n, i, c, a), !bt(n, 'date'))) {
        var d;
        n instanceof Date ? (d = n) : (d = new Date(n)),
          ze.type(t, d, i, c, a),
          d && ze.range(t, d.getTime(), i, c, a);
      }
    }
    s(c);
  },
  h7 = function (t, n, s, i, a) {
    var c = [],
      u = Array.isArray(n) ? 'array' : typeof n;
    ze.required(t, n, i, c, a, u), s(c);
  },
  Gc = function (t, n, s, i, a) {
    var c = t.type,
      u = [],
      d = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (d) {
      if (bt(n, c) && !t.required) return s();
      ze.required(t, n, i, u, a, c), bt(n, c) || ze.type(t, n, i, u, a);
    }
    s(u);
  },
  v7 = function (t, n, s, i, a) {
    var c = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (bt(n) && !t.required) return s();
      ze.required(t, n, i, c, a);
    }
    s(c);
  },
  ti = {
    string: t7,
    method: n7,
    number: r7,
    boolean: o7,
    regexp: s7,
    integer: i7,
    float: a7,
    array: l7,
    object: c7,
    enum: f7,
    pattern: d7,
    date: p7,
    url: Gc,
    hex: Gc,
    email: Gc,
    required: h7,
    any: v7,
  };
function Cu() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this));
      return (t.clone = this.clone), t;
    },
  };
}
var Pu = Cu(),
  bi = (function () {
    function e(n) {
      (this.rules = null), (this._messages = Pu), this.define(n);
    }
    var t = e.prototype;
    return (
      (t.define = function (s) {
        var i = this;
        if (!s) throw new Error('Cannot configure a schema with no rules');
        if (typeof s != 'object' || Array.isArray(s))
          throw new Error('Rules must be an object');
        (this.rules = {}),
          Object.keys(s).forEach(function (a) {
            var c = s[a];
            i.rules[a] = Array.isArray(c) ? c : [c];
          });
      }),
      (t.messages = function (s) {
        return s && (this._messages = Xh(Cu(), s)), this._messages;
      }),
      (t.validate = function (s, i, a) {
        var c = this;
        i === void 0 && (i = {}), a === void 0 && (a = function () {});
        var u = s,
          d = i,
          h = a;
        if (
          (typeof d == 'function' && ((h = d), (d = {})),
          !this.rules || Object.keys(this.rules).length === 0)
        )
          return h && h(null, u), Promise.resolve(u);
        function _(x) {
          var L = [],
            O = {};
          function V(w) {
            if (Array.isArray(w)) {
              var B;
              L = (B = L).concat.apply(B, w);
            } else L.push(w);
          }
          for (var P = 0; P < x.length; P++) V(x[P]);
          L.length ? ((O = xu(L)), h(L, O)) : h(null, u);
        }
        if (d.messages) {
          var m = this.messages();
          m === Pu && (m = Cu()), Xh(m, d.messages), (d.messages = m);
        } else d.messages = this.messages();
        var y = {},
          S = d.keys || Object.keys(this.rules);
        S.forEach(function (x) {
          var L = c.rules[x],
            O = u[x];
          L.forEach(function (V) {
            var P = V;
            typeof P.transform == 'function' &&
              (u === s && (u = vo({}, u)), (O = u[x] = P.transform(O))),
              typeof P == 'function' ? (P = { validator: P }) : (P = vo({}, P)),
              (P.validator = c.getValidationMethod(P)),
              P.validator &&
                ((P.field = x),
                (P.fullField = P.fullField || x),
                (P.type = c.getType(P)),
                (y[x] = y[x] || []),
                y[x].push({ rule: P, value: O, source: u, field: x }));
          });
        });
        var R = {};
        return W5(
          y,
          d,
          function (x, L) {
            var O = x.rule,
              V =
                (O.type === 'object' || O.type === 'array') &&
                (typeof O.fields == 'object' ||
                  typeof O.defaultField == 'object');
            (V = V && (O.required || (!O.required && x.value))),
              (O.field = x.field);
            function P(N, q) {
              return vo({}, q, {
                fullField: O.fullField + '.' + N,
                fullFields: O.fullFields ? [].concat(O.fullFields, [N]) : [N],
              });
            }
            function w(N) {
              N === void 0 && (N = []);
              var q = Array.isArray(N) ? N : [N];
              !d.suppressWarning &&
                q.length &&
                e.warning('async-validator:', q),
                q.length && O.message !== void 0 && (q = [].concat(O.message));
              var z = q.map(Yh(O, u));
              if (d.first && z.length) return (R[O.field] = 1), L(z);
              if (!V) L(z);
              else {
                if (O.required && !x.value)
                  return (
                    O.message !== void 0
                      ? (z = [].concat(O.message).map(Yh(O, u)))
                      : d.error &&
                        (z = [d.error(O, cn(d.messages.required, O.field))]),
                    L(z)
                  );
                var se = {};
                O.defaultField &&
                  Object.keys(x.value).map(function (J) {
                    se[J] = O.defaultField;
                  }),
                  (se = vo({}, se, x.rule.fields));
                var ne = {};
                Object.keys(se).forEach(function (J) {
                  var we = se[J],
                    Ge = Array.isArray(we) ? we : [we];
                  ne[J] = Ge.map(P.bind(null, J));
                });
                var ve = new e(ne);
                ve.messages(d.messages),
                  x.rule.options &&
                    ((x.rule.options.messages = d.messages),
                    (x.rule.options.error = d.error)),
                  ve.validate(x.value, x.rule.options || d, function (J) {
                    var we = [];
                    z && z.length && we.push.apply(we, z),
                      J && J.length && we.push.apply(we, J),
                      L(we.length ? we : null);
                  });
              }
            }
            var B;
            if (O.asyncValidator)
              B = O.asyncValidator(O, x.value, w, x.source, d);
            else if (O.validator) {
              try {
                B = O.validator(O, x.value, w, x.source, d);
              } catch (N) {
                console.error == null || console.error(N),
                  d.suppressValidatorError ||
                    setTimeout(function () {
                      throw N;
                    }, 0),
                  w(N.message);
              }
              B === !0
                ? w()
                : B === !1
                  ? w(
                      typeof O.message == 'function'
                        ? O.message(O.fullField || O.field)
                        : O.message || (O.fullField || O.field) + ' fails',
                    )
                  : B instanceof Array
                    ? w(B)
                    : B instanceof Error && w(B.message);
            }
            B &&
              B.then &&
              B.then(
                function () {
                  return w();
                },
                function (N) {
                  return w(N);
                },
              );
          },
          function (x) {
            _(x);
          },
          u,
        );
      }),
      (t.getType = function (s) {
        if (
          (s.type === void 0 &&
            s.pattern instanceof RegExp &&
            (s.type = 'pattern'),
          typeof s.validator != 'function' &&
            s.type &&
            !ti.hasOwnProperty(s.type))
        )
          throw new Error(cn('Unknown rule type %s', s.type));
        return s.type || 'string';
      }),
      (t.getValidationMethod = function (s) {
        if (typeof s.validator == 'function') return s.validator;
        var i = Object.keys(s),
          a = i.indexOf('message');
        return (
          a !== -1 && i.splice(a, 1),
          i.length === 1 && i[0] === 'required'
            ? ti.required
            : ti[this.getType(s)] || void 0
        );
      }),
      e
    );
  })();
bi.register = function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function',
    );
  ti[t] = n;
};
bi.warning = j5;
bi.messages = Pu;
bi.validators = ti;
const _7 = { class: 'bu-form-item--content' },
  g7 = { key: 0, class: 'bu-form-item--error' },
  m7 = 'bu-form-item',
  Bv = te({
    name: 'BuFormItem',
    __name: 'form-item',
    props: { label: { default: '' }, prop: { default: '' } },
    setup(e) {
      const t = re(),
        n = Ot('buFormKey', {}),
        s = e,
        i = re(''),
        a = de(
          () => (
            console.log('uForm?.rules.value', n.rules[s.prop]),
            n.rules[s.prop] && n.rules[s.prop].some((_) => _.required)
          ),
        ),
        c = de(() => [m7, i.value && 'is-error', a.value && 'is-required']),
        u = de(() =>
          n.labelWidth
            ? typeof n.labelWidth == 'string'
              ? n.labelWidth
              : n.labelWidth + 'px'
            : 'auto',
        ),
        d = () => {
          if (n && n.rules === void 0) return Promise.resolve({ result: !0 });
          const _ = n.rules[s.prop],
            m = n.model[s.prop];
          return new bi({ [s.prop]: _ }).validate({ [s.prop]: m }, (S) => {
            S ? (i.value = S[0].message || '校验错误') : (i.value = '');
          });
        },
        h = un({ ...mr(s), validate: d, $label: t });
      return (
        Zn('buFormItem', h),
        ut(() => {
          s.prop &&
            Tn(() => {
              n && n.addField(h);
            });
        }),
        (_, m) => (
          k(),
          M(
            'div',
            { class: Ce(c.value) },
            [
              I(
                'div',
                {
                  ref_key: 'formItemLabelRef',
                  ref: t,
                  style: dt({
                    width:
                      D(n).autoLabelWidth > 0
                        ? D(n).autoLabelWidth + 'px'
                        : 'auto',
                  }),
                },
                [
                  _.label
                    ? (k(),
                      M(
                        'label',
                        {
                          key: 0,
                          class: 'bu-form-item-label',
                          style: dt({ width: u.value }),
                        },
                        Be(_.label),
                        5,
                      ))
                    : ue('', !0),
                  K(_.$slots, 'label'),
                ],
                4,
              ),
              I('div', _7, [
                K(_.$slots, 'default'),
                i.value ? (k(), M('div', g7, Be(i.value), 1)) : ue('', !0),
              ]),
            ],
            2,
          )
        )
      );
    },
  });
const Vv = Qt(F5, { FormItem: Bv }),
  Fv = ws(Bv),
  y7 = te({
    name: 'BuGrid',
    props: {
      cols: { type: Number },
      xGap: { type: Number, default: 15 },
      yGap: { type: Number, default: 15 },
    },
    setup(e, { slots: t }) {
      const { cols: n, xGap: s, yGap: i } = mr(e);
      let a = 1;
      return () => {
        const c = K(t, 'default', { key: 0 }, () => []);
        return (c.children ?? []).length === 0
          ? null
          : Y(
              'div',
              {
                style: {
                  'grid-template-columns': `repeat(${n.value}, minmax(0px, 1fr))`,
                  gap: `${i.value}px ${s.value}px`,
                  display: 'grid',
                },
              },
              [
                c.children &&
                  c.children.map((u) => {
                    var _, m, y;
                    let d = {};
                    u &&
                      u.type.name === 'BuGridItem' &&
                      ((a += ((_ = u.props) == null ? void 0 : _.offset) || 0),
                      (d = {
                        style: {
                          'grid-column': `${a} / span ${
                            ((m = u.props) == null ? void 0 : m.span) || 1
                          }`,
                        },
                      }));
                    const h = jn(u, d);
                    return (
                      (a += ((y = u.props) == null ? void 0 : y.span) || 1), h
                    );
                  }),
              ],
            );
      };
    },
  }),
  b7 = { class: 'bu-grid--item' },
  Rv = te({
    name: 'BuGridItem',
    __name: 'grid-item',
    props: { offset: {}, span: {} },
    setup(e) {
      return (t, n) => (k(), M('div', b7, [K(t.$slots, 'default')]));
    },
  }),
  Nv = Qt(y7, { GridItem: Rv }),
  Hv = ws(Rv);
function w7(e, t) {
  const n = Object.create(null),
    s = e.split(',');
  for (let i = 0; i < s.length; i++) n[s[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const k7 = () => {},
  $7 = Object.prototype.hasOwnProperty,
  Ga = (e, t) => $7.call(e, t),
  Dr = Array.isArray,
  Na = (e) => jv(e) === '[object Map]',
  zv = (e) => typeof e == 'function',
  x7 = (e) => typeof e == 'string',
  wl = (e) => typeof e == 'symbol',
  kl = (e) => e !== null && typeof e == 'object',
  C7 = Object.prototype.toString,
  jv = (e) => C7.call(e),
  P7 = (e) => jv(e).slice(8, -1),
  vf = (e) =>
    x7(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  wi = (e, t) => !Object.is(e, t);
let Gh;
const Qh = () =>
  Gh ||
  (Gh =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
let S7;
function T7(e, t = S7) {
  t && t.active && t.effects.push(e);
}
const _f = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Dv = (e) => (e.w & Qr) > 0,
  qv = (e) => (e.n & Qr) > 0,
  E7 = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Qr;
  },
  A7 = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        Dv(i) && !qv(i) ? i.delete(e) : (t[n++] = i),
          (i.w &= ~Qr),
          (i.n &= ~Qr);
      }
      t.length = n;
    }
  },
  Su = new WeakMap();
let Ys = 0,
  Qr = 1;
const Tu = 30;
let Fn;
const bo = Symbol(''),
  Eu = Symbol('');
class I7 {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      T7(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Fn,
      n = qr;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Fn),
        (Fn = this),
        (qr = !0),
        (Qr = 1 << ++Ys),
        Ys <= Tu ? E7(this) : Jh(this),
        this.fn()
      );
    } finally {
      Ys <= Tu && A7(this),
        (Qr = 1 << --Ys),
        (Fn = this.parent),
        (qr = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Fn === this
      ? (this.deferStop = !0)
      : this.active &&
        (Jh(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Jh(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let qr = !0;
const Uv = [];
function M7() {
  Uv.push(qr), (qr = !1);
}
function L7() {
  const e = Uv.pop();
  qr = e === void 0 ? !0 : e;
}
function Sn(e, t, n) {
  if (qr && Fn) {
    let s = Su.get(e);
    s || Su.set(e, (s = new Map()));
    let i = s.get(n);
    i || s.set(n, (i = _f())), Wv(i);
  }
}
function Wv(e, t) {
  let n = !1;
  Ys <= Tu ? qv(e) || ((e.n |= Qr), (n = !Dv(e))) : (n = !e.has(Fn)),
    n && (e.add(Fn), Fn.deps.push(e));
}
function Ur(e, t, n, s, i, a) {
  const c = Su.get(e);
  if (!c) return;
  let u = [];
  if (t === 'clear') u = [...c.values()];
  else if (n === 'length' && Dr(e)) {
    const d = Number(s);
    c.forEach((h, _) => {
      (_ === 'length' || (!wl(_) && _ >= d)) && u.push(h);
    });
  } else
    switch ((n !== void 0 && u.push(c.get(n)), t)) {
      case 'add':
        Dr(e)
          ? vf(n) && u.push(c.get('length'))
          : (u.push(c.get(bo)), Na(e) && u.push(c.get(Eu)));
        break;
      case 'delete':
        Dr(e) || (u.push(c.get(bo)), Na(e) && u.push(c.get(Eu)));
        break;
      case 'set':
        Na(e) && u.push(c.get(bo));
        break;
    }
  if (u.length === 1) u[0] && Au(u[0]);
  else {
    const d = [];
    for (const h of u) h && d.push(...h);
    Au(_f(d));
  }
}
function Au(e, t) {
  const n = Dr(e) ? e : [...e];
  for (const s of n) s.computed && e0(s);
  for (const s of n) s.computed || e0(s);
}
function e0(e, t) {
  (e !== Fn || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const O7 = w7('__proto__,__v_isRef,__isVue'),
  Kv = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(wl),
  ),
  t0 = B7();
function B7() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = tt(this);
        for (let a = 0, c = this.length; a < c; a++) Sn(s, 'get', a + '');
        const i = s[t](...n);
        return i === -1 || i === !1 ? s[t](...n.map(tt)) : i;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        M7();
        const s = tt(this)[t].apply(this, n);
        return L7(), s;
      };
    }),
    e
  );
}
function V7(e) {
  const t = tt(this);
  return Sn(t, 'has', e), t.hasOwnProperty(e);
}
class Yv {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, s) {
    const i = this._isReadonly,
      a = this._shallow;
    if (n === '__v_isReactive') return !i;
    if (n === '__v_isReadonly') return i;
    if (n === '__v_isShallow') return a;
    if (n === '__v_raw' && s === (i ? (a ? X7 : Gv) : a ? Y7 : Zv).get(t))
      return t;
    const c = Dr(t);
    if (!i) {
      if (c && Ga(t0, n)) return Reflect.get(t0, n, s);
      if (n === 'hasOwnProperty') return V7;
    }
    const u = Reflect.get(t, n, s);
    return (wl(n) ? Kv.has(n) : O7(n)) || (i || Sn(t, 'get', n), a)
      ? u
      : Jo(u)
        ? c && vf(n)
          ? u
          : u.value
        : kl(u)
          ? i
            ? Jv(u)
            : Qv(u)
          : u;
  }
}
class F7 extends Yv {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let a = t[n];
    if (Qa(a) && Jo(a) && !Jo(s)) return !1;
    if (
      !this._shallow &&
      (!t_(s) && !Qa(s) && ((a = tt(a)), (s = tt(s))),
      !Dr(t) && Jo(a) && !Jo(s))
    )
      return (a.value = s), !0;
    const c = Dr(t) && vf(n) ? Number(n) < t.length : Ga(t, n),
      u = Reflect.set(t, n, s, i);
    return (
      t === tt(i) && (c ? wi(s, a) && Ur(t, 'set', n, s) : Ur(t, 'add', n, s)),
      u
    );
  }
  deleteProperty(t, n) {
    const s = Ga(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Ur(t, 'delete', n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!wl(n) || !Kv.has(n)) && Sn(t, 'has', n), s;
  }
  ownKeys(t) {
    return Sn(t, 'iterate', Dr(t) ? 'length' : bo), Reflect.ownKeys(t);
  }
}
class R7 extends Yv {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const N7 = new F7(),
  H7 = new R7(),
  gf = (e) => e,
  $l = (e) => Reflect.getPrototypeOf(e);
function Ca(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = tt(e),
    a = tt(t);
  n || (wi(t, a) && Sn(i, 'get', t), Sn(i, 'get', a));
  const { has: c } = $l(i),
    u = s ? gf : n ? mf : pi;
  if (c.call(i, t)) return u(e.get(t));
  if (c.call(i, a)) return u(e.get(a));
  e !== i && e.get(t);
}
function Pa(e, t = !1) {
  const n = this.__v_raw,
    s = tt(n),
    i = tt(e);
  return (
    t || (wi(e, i) && Sn(s, 'has', e), Sn(s, 'has', i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function Sa(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Sn(tt(e), 'iterate', bo), Reflect.get(e, 'size', e)
  );
}
function n0(e) {
  e = tt(e);
  const t = tt(this);
  return $l(t).has.call(t, e) || (t.add(e), Ur(t, 'add', e, e)), this;
}
function r0(e, t) {
  t = tt(t);
  const n = tt(this),
    { has: s, get: i } = $l(n);
  let a = s.call(n, e);
  a || ((e = tt(e)), (a = s.call(n, e)));
  const c = i.call(n, e);
  return (
    n.set(e, t), a ? wi(t, c) && Ur(n, 'set', e, t) : Ur(n, 'add', e, t), this
  );
}
function o0(e) {
  const t = tt(this),
    { has: n, get: s } = $l(t);
  let i = n.call(t, e);
  i || ((e = tt(e)), (i = n.call(t, e))), s && s.call(t, e);
  const a = t.delete(e);
  return i && Ur(t, 'delete', e, void 0), a;
}
function s0() {
  const e = tt(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ur(e, 'clear', void 0, void 0), n;
}
function Ta(e, t) {
  return function (n, s) {
    const i = this,
      a = i.__v_raw,
      c = tt(a),
      u = t ? gf : e ? mf : pi;
    return (
      !e && Sn(c, 'iterate', bo), a.forEach((d, h) => n.call(s, u(d), u(h), i))
    );
  };
}
function Ea(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      a = tt(i),
      c = Na(a),
      u = e === 'entries' || (e === Symbol.iterator && c),
      d = e === 'keys' && c,
      h = i[e](...s),
      _ = n ? gf : t ? mf : pi;
    return (
      !t && Sn(a, 'iterate', d ? Eu : bo),
      {
        next() {
          const { value: m, done: y } = h.next();
          return y
            ? { value: m, done: y }
            : { value: u ? [_(m[0]), _(m[1])] : _(m), done: y };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Fr(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function z7() {
  const e = {
      get(i) {
        return Ca(this, i);
      },
      get size() {
        return Sa(this);
      },
      has: Pa,
      add: n0,
      set: r0,
      delete: o0,
      clear: s0,
      forEach: Ta(!1, !1),
    },
    t = {
      get(i) {
        return Ca(this, i, !1, !0);
      },
      get size() {
        return Sa(this);
      },
      has: Pa,
      add: n0,
      set: r0,
      delete: o0,
      clear: s0,
      forEach: Ta(!1, !0),
    },
    n = {
      get(i) {
        return Ca(this, i, !0);
      },
      get size() {
        return Sa(this, !0);
      },
      has(i) {
        return Pa.call(this, i, !0);
      },
      add: Fr('add'),
      set: Fr('set'),
      delete: Fr('delete'),
      clear: Fr('clear'),
      forEach: Ta(!0, !1),
    },
    s = {
      get(i) {
        return Ca(this, i, !0, !0);
      },
      get size() {
        return Sa(this, !0);
      },
      has(i) {
        return Pa.call(this, i, !0);
      },
      add: Fr('add'),
      set: Fr('set'),
      delete: Fr('delete'),
      clear: Fr('clear'),
      forEach: Ta(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      (e[i] = Ea(i, !1, !1)),
        (n[i] = Ea(i, !0, !1)),
        (t[i] = Ea(i, !1, !0)),
        (s[i] = Ea(i, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [j7, D7, q7, U7] = z7();
function Xv(e, t) {
  const n = t ? (e ? U7 : q7) : e ? D7 : j7;
  return (s, i, a) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
        ? e
        : i === '__v_raw'
          ? s
          : Reflect.get(Ga(n, i) && i in s ? n : s, i, a);
}
const W7 = { get: Xv(!1, !1) },
  K7 = { get: Xv(!0, !1) },
  Zv = new WeakMap(),
  Y7 = new WeakMap(),
  Gv = new WeakMap(),
  X7 = new WeakMap();
function Z7(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function G7(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Z7(P7(e));
}
function Qv(e) {
  return Qa(e) ? e : e_(e, !1, N7, W7, Zv);
}
function Jv(e) {
  return e_(e, !0, H7, K7, Gv);
}
function e_(e, t, n, s, i) {
  if (!kl(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const a = i.get(e);
  if (a) return a;
  const c = G7(e);
  if (c === 0) return e;
  const u = new Proxy(e, c === 2 ? s : n);
  return i.set(e, u), u;
}
function Qa(e) {
  return !!(e && e.__v_isReadonly);
}
function t_(e) {
  return !!(e && e.__v_isShallow);
}
function tt(e) {
  const t = e && e.__v_raw;
  return t ? tt(t) : e;
}
const pi = (e) => (kl(e) ? Qv(e) : e),
  mf = (e) => (kl(e) ? Jv(e) : e);
function n_(e) {
  qr && Fn && ((e = tt(e)), Wv(e.dep || (e.dep = _f())));
}
function r_(e, t) {
  e = tt(e);
  const n = e.dep;
  n && Au(n);
}
function Jo(e) {
  return !!(e && e.__v_isRef === !0);
}
function Zo(e) {
  return Q7(e, !1);
}
function Q7(e, t) {
  return Jo(e) ? e : new J7(e, t);
}
class J7 {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : tt(t)),
      (this._value = n ? t : pi(t));
  }
  get value() {
    return n_(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || t_(t) || Qa(t);
    (t = n ? t : tt(t)),
      wi(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : pi(t)), r_(this));
  }
}
class ek {
  constructor(t, n, s, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new I7(t, () => {
        this._dirty || ((this._dirty = !0), r_(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = tt(this);
    return (
      n_(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function tk(e, t, n = !1) {
  let s, i;
  const a = zv(e);
  return (
    a ? ((s = e), (i = k7)) : ((s = e.get), (i = e.set)),
    new ek(s, i, a || !i, n)
  );
}
let o_ = null,
  i0 = null;
function a0(e, t, n = !1) {
  const s = yf || o_;
  if (s || i0) {
    const i = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : i0._context.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && zv(t) ? t.call(s && s.proxy) : t;
  }
}
let yf = null;
const nk = () => yf || o_;
let Qc,
  l0 = '__VUE_INSTANCE_SETTERS__';
(Qc = Qh()[l0]) || (Qc = Qh()[l0] = []), Qc.push((e) => (yf = e));
let rk = !1;
const c0 = (e, t) => tk(e, t, rk);
var zs =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function ok(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ja = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ Ja.exports;
(function (e, t) {
  (function () {
    var n,
      s = '4.17.21',
      i = 200,
      a = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      c = 'Expected a function',
      u = 'Invalid `variable` option passed into `_.template`',
      d = '__lodash_hash_undefined__',
      h = 500,
      _ = '__lodash_placeholder__',
      m = 1,
      y = 2,
      S = 4,
      R = 1,
      x = 2,
      L = 1,
      O = 2,
      V = 4,
      P = 8,
      w = 16,
      B = 32,
      N = 64,
      q = 128,
      z = 256,
      se = 512,
      ne = 30,
      ve = '...',
      J = 800,
      we = 16,
      Ge = 1,
      ot = 2,
      be = 3,
      Ie = 1 / 0,
      ge = 9007199254740991,
      An = 17976931348623157e292,
      er = NaN,
      kt = 4294967295,
      hn = kt - 1,
      $i = kt >>> 1,
      Tl = [
        ['ary', q],
        ['bind', L],
        ['bindKey', O],
        ['curry', P],
        ['curryRight', w],
        ['flip', se],
        ['partial', B],
        ['partialRight', N],
        ['rearg', z],
      ],
      kr = '[object Arguments]',
      jt = '[object Array]',
      Ao = '[object AsyncFunction]',
      $r = '[object Boolean]',
      vn = '[object Date]',
      $s = '[object DOMException]',
      xr = '[object Error]',
      $ = '[object Function]',
      T = '[object GeneratorFunction]',
      H = '[object Map]',
      X = '[object Number]',
      Q = '[object Null]',
      ee = '[object Object]',
      ce = '[object Promise]',
      oe = '[object Proxy]',
      ie = '[object RegExp]',
      Z = '[object Set]',
      ye = '[object String]',
      _e = '[object Symbol]',
      $e = '[object Undefined]',
      Ee = '[object WeakMap]',
      Re = '[object WeakSet]',
      Ye = '[object ArrayBuffer]',
      je = '[object DataView]',
      it = '[object Float32Array]',
      Bt = '[object Float64Array]',
      qn = '[object Int8Array]',
      Io = '[object Int16Array]',
      tr = '[object Int32Array]',
      Mo = '[object Uint8Array]',
      Ct = '[object Uint8ClampedArray]',
      Dt = '[object Uint16Array]',
      Lo = '[object Uint32Array]',
      z_ = /\b__p \+= '';/g,
      j_ = /\b(__p \+=) '' \+/g,
      D_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Ef = /&(?:amp|lt|gt|quot|#39);/g,
      Af = /[&<>"']/g,
      q_ = RegExp(Ef.source),
      U_ = RegExp(Af.source),
      W_ = /<%-([\s\S]+?)%>/g,
      K_ = /<%([\s\S]+?)%>/g,
      If = /<%=([\s\S]+?)%>/g,
      Y_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      X_ = /^\w*$/,
      Z_ =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      El = /[\\^$.*+?()[\]{}|]/g,
      G_ = RegExp(El.source),
      Al = /^\s+/,
      Q_ = /\s/,
      J_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      eg = /\{\n\/\* \[wrapped with (.+)\] \*/,
      tg = /,? & /,
      ng = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      rg = /[()=,{}\[\]\/\s]/,
      og = /\\(\\)?/g,
      sg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Mf = /\w*$/,
      ig = /^[-+]0x[0-9a-f]+$/i,
      ag = /^0b[01]+$/i,
      lg = /^\[object .+?Constructor\]$/,
      cg = /^0o[0-7]+$/i,
      ug = /^(?:0|[1-9]\d*)$/,
      fg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      xi = /($^)/,
      dg = /['\n\r\u2028\u2029\\]/g,
      Ci = '\\ud800-\\udfff',
      pg = '\\u0300-\\u036f',
      hg = '\\ufe20-\\ufe2f',
      vg = '\\u20d0-\\u20ff',
      Lf = pg + hg + vg,
      Of = '\\u2700-\\u27bf',
      Bf = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      _g = '\\xac\\xb1\\xd7\\xf7',
      gg = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      mg = '\\u2000-\\u206f',
      yg =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      Vf = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      Ff = '\\ufe0e\\ufe0f',
      Rf = _g + gg + mg + yg,
      Il = "['’]",
      bg = '[' + Ci + ']',
      Nf = '[' + Rf + ']',
      Pi = '[' + Lf + ']',
      Hf = '\\d+',
      wg = '[' + Of + ']',
      zf = '[' + Bf + ']',
      jf = '[^' + Ci + Rf + Hf + Of + Bf + Vf + ']',
      Ml = '\\ud83c[\\udffb-\\udfff]',
      kg = '(?:' + Pi + '|' + Ml + ')',
      Df = '[^' + Ci + ']',
      Ll = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      Ol = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      Oo = '[' + Vf + ']',
      qf = '\\u200d',
      Uf = '(?:' + zf + '|' + jf + ')',
      $g = '(?:' + Oo + '|' + jf + ')',
      Wf = '(?:' + Il + '(?:d|ll|m|re|s|t|ve))?',
      Kf = '(?:' + Il + '(?:D|LL|M|RE|S|T|VE))?',
      Yf = kg + '?',
      Xf = '[' + Ff + ']?',
      xg = '(?:' + qf + '(?:' + [Df, Ll, Ol].join('|') + ')' + Xf + Yf + ')*',
      Cg = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      Pg = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      Zf = Xf + Yf + xg,
      Sg = '(?:' + [wg, Ll, Ol].join('|') + ')' + Zf,
      Tg = '(?:' + [Df + Pi + '?', Pi, Ll, Ol, bg].join('|') + ')',
      Eg = RegExp(Il, 'g'),
      Ag = RegExp(Pi, 'g'),
      Bl = RegExp(Ml + '(?=' + Ml + ')|' + Tg + Zf, 'g'),
      Ig = RegExp(
        [
          Oo + '?' + zf + '+' + Wf + '(?=' + [Nf, Oo, '$'].join('|') + ')',
          $g + '+' + Kf + '(?=' + [Nf, Oo + Uf, '$'].join('|') + ')',
          Oo + '?' + Uf + '+' + Wf,
          Oo + '+' + Kf,
          Pg,
          Cg,
          Hf,
          Sg,
        ].join('|'),
        'g',
      ),
      Mg = RegExp('[' + qf + Ci + Lf + Ff + ']'),
      Lg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Og = [
        'Array',
        'Buffer',
        'DataView',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Math',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'String',
        'Symbol',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        '_',
        'clearTimeout',
        'isFinite',
        'parseInt',
        'setTimeout',
      ],
      Bg = -1,
      st = {};
    (st[it] =
      st[Bt] =
      st[qn] =
      st[Io] =
      st[tr] =
      st[Mo] =
      st[Ct] =
      st[Dt] =
      st[Lo] =
        !0),
      (st[kr] =
        st[jt] =
        st[Ye] =
        st[$r] =
        st[je] =
        st[vn] =
        st[xr] =
        st[$] =
        st[H] =
        st[X] =
        st[ee] =
        st[ie] =
        st[Z] =
        st[ye] =
        st[Ee] =
          !1);
    var rt = {};
    (rt[kr] =
      rt[jt] =
      rt[Ye] =
      rt[je] =
      rt[$r] =
      rt[vn] =
      rt[it] =
      rt[Bt] =
      rt[qn] =
      rt[Io] =
      rt[tr] =
      rt[H] =
      rt[X] =
      rt[ee] =
      rt[ie] =
      rt[Z] =
      rt[ye] =
      rt[_e] =
      rt[Mo] =
      rt[Ct] =
      rt[Dt] =
      rt[Lo] =
        !0),
      (rt[xr] = rt[$] = rt[Ee] = !1);
    var Vg = {
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      },
      Fg = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      Rg = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
      Ng = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      Hg = parseFloat,
      zg = parseInt,
      Gf = typeof zs == 'object' && zs && zs.Object === Object && zs,
      jg = typeof self == 'object' && self && self.Object === Object && self,
      Pt = Gf || jg || Function('return this')(),
      Vl = t && !t.nodeType && t,
      Jr = Vl && !0 && e && !e.nodeType && e,
      Qf = Jr && Jr.exports === Vl,
      Fl = Qf && Gf.process,
      _n = (function () {
        try {
          var E = Jr && Jr.require && Jr.require('util').types;
          return E || (Fl && Fl.binding && Fl.binding('util'));
        } catch {}
      })(),
      Jf = _n && _n.isArrayBuffer,
      ed = _n && _n.isDate,
      td = _n && _n.isMap,
      nd = _n && _n.isRegExp,
      rd = _n && _n.isSet,
      od = _n && _n.isTypedArray;
    function Jt(E, j, F) {
      switch (F.length) {
        case 0:
          return E.call(j);
        case 1:
          return E.call(j, F[0]);
        case 2:
          return E.call(j, F[0], F[1]);
        case 3:
          return E.call(j, F[0], F[1], F[2]);
      }
      return E.apply(j, F);
    }
    function Dg(E, j, F, pe) {
      for (var Me = -1, Xe = E == null ? 0 : E.length; ++Me < Xe; ) {
        var gt = E[Me];
        j(pe, gt, F(gt), E);
      }
      return pe;
    }
    function gn(E, j) {
      for (
        var F = -1, pe = E == null ? 0 : E.length;
        ++F < pe && j(E[F], F, E) !== !1;

      );
      return E;
    }
    function qg(E, j) {
      for (var F = E == null ? 0 : E.length; F-- && j(E[F], F, E) !== !1; );
      return E;
    }
    function sd(E, j) {
      for (var F = -1, pe = E == null ? 0 : E.length; ++F < pe; )
        if (!j(E[F], F, E)) return !1;
      return !0;
    }
    function Cr(E, j) {
      for (
        var F = -1, pe = E == null ? 0 : E.length, Me = 0, Xe = [];
        ++F < pe;

      ) {
        var gt = E[F];
        j(gt, F, E) && (Xe[Me++] = gt);
      }
      return Xe;
    }
    function Si(E, j) {
      var F = E == null ? 0 : E.length;
      return !!F && Bo(E, j, 0) > -1;
    }
    function Rl(E, j, F) {
      for (var pe = -1, Me = E == null ? 0 : E.length; ++pe < Me; )
        if (F(j, E[pe])) return !0;
      return !1;
    }
    function at(E, j) {
      for (
        var F = -1, pe = E == null ? 0 : E.length, Me = Array(pe);
        ++F < pe;

      )
        Me[F] = j(E[F], F, E);
      return Me;
    }
    function Pr(E, j) {
      for (var F = -1, pe = j.length, Me = E.length; ++F < pe; )
        E[Me + F] = j[F];
      return E;
    }
    function Nl(E, j, F, pe) {
      var Me = -1,
        Xe = E == null ? 0 : E.length;
      for (pe && Xe && (F = E[++Me]); ++Me < Xe; ) F = j(F, E[Me], Me, E);
      return F;
    }
    function Ug(E, j, F, pe) {
      var Me = E == null ? 0 : E.length;
      for (pe && Me && (F = E[--Me]); Me--; ) F = j(F, E[Me], Me, E);
      return F;
    }
    function Hl(E, j) {
      for (var F = -1, pe = E == null ? 0 : E.length; ++F < pe; )
        if (j(E[F], F, E)) return !0;
      return !1;
    }
    var Wg = zl('length');
    function Kg(E) {
      return E.split('');
    }
    function Yg(E) {
      return E.match(ng) || [];
    }
    function id(E, j, F) {
      var pe;
      return (
        F(E, function (Me, Xe, gt) {
          if (j(Me, Xe, gt)) return (pe = Xe), !1;
        }),
        pe
      );
    }
    function Ti(E, j, F, pe) {
      for (var Me = E.length, Xe = F + (pe ? 1 : -1); pe ? Xe-- : ++Xe < Me; )
        if (j(E[Xe], Xe, E)) return Xe;
      return -1;
    }
    function Bo(E, j, F) {
      return j === j ? im(E, j, F) : Ti(E, ad, F);
    }
    function Xg(E, j, F, pe) {
      for (var Me = F - 1, Xe = E.length; ++Me < Xe; )
        if (pe(E[Me], j)) return Me;
      return -1;
    }
    function ad(E) {
      return E !== E;
    }
    function ld(E, j) {
      var F = E == null ? 0 : E.length;
      return F ? Dl(E, j) / F : er;
    }
    function zl(E) {
      return function (j) {
        return j == null ? n : j[E];
      };
    }
    function jl(E) {
      return function (j) {
        return E == null ? n : E[j];
      };
    }
    function cd(E, j, F, pe, Me) {
      return (
        Me(E, function (Xe, gt, nt) {
          F = pe ? ((pe = !1), Xe) : j(F, Xe, gt, nt);
        }),
        F
      );
    }
    function Zg(E, j) {
      var F = E.length;
      for (E.sort(j); F--; ) E[F] = E[F].value;
      return E;
    }
    function Dl(E, j) {
      for (var F, pe = -1, Me = E.length; ++pe < Me; ) {
        var Xe = j(E[pe]);
        Xe !== n && (F = F === n ? Xe : F + Xe);
      }
      return F;
    }
    function ql(E, j) {
      for (var F = -1, pe = Array(E); ++F < E; ) pe[F] = j(F);
      return pe;
    }
    function Gg(E, j) {
      return at(j, function (F) {
        return [F, E[F]];
      });
    }
    function ud(E) {
      return E && E.slice(0, hd(E) + 1).replace(Al, '');
    }
    function en(E) {
      return function (j) {
        return E(j);
      };
    }
    function Ul(E, j) {
      return at(j, function (F) {
        return E[F];
      });
    }
    function xs(E, j) {
      return E.has(j);
    }
    function fd(E, j) {
      for (var F = -1, pe = E.length; ++F < pe && Bo(j, E[F], 0) > -1; );
      return F;
    }
    function dd(E, j) {
      for (var F = E.length; F-- && Bo(j, E[F], 0) > -1; );
      return F;
    }
    function Qg(E, j) {
      for (var F = E.length, pe = 0; F--; ) E[F] === j && ++pe;
      return pe;
    }
    var Jg = jl(Vg),
      em = jl(Fg);
    function tm(E) {
      return '\\' + Ng[E];
    }
    function nm(E, j) {
      return E == null ? n : E[j];
    }
    function Vo(E) {
      return Mg.test(E);
    }
    function rm(E) {
      return Lg.test(E);
    }
    function om(E) {
      for (var j, F = []; !(j = E.next()).done; ) F.push(j.value);
      return F;
    }
    function Wl(E) {
      var j = -1,
        F = Array(E.size);
      return (
        E.forEach(function (pe, Me) {
          F[++j] = [Me, pe];
        }),
        F
      );
    }
    function pd(E, j) {
      return function (F) {
        return E(j(F));
      };
    }
    function Sr(E, j) {
      for (var F = -1, pe = E.length, Me = 0, Xe = []; ++F < pe; ) {
        var gt = E[F];
        (gt === j || gt === _) && ((E[F] = _), (Xe[Me++] = F));
      }
      return Xe;
    }
    function Ei(E) {
      var j = -1,
        F = Array(E.size);
      return (
        E.forEach(function (pe) {
          F[++j] = pe;
        }),
        F
      );
    }
    function sm(E) {
      var j = -1,
        F = Array(E.size);
      return (
        E.forEach(function (pe) {
          F[++j] = [pe, pe];
        }),
        F
      );
    }
    function im(E, j, F) {
      for (var pe = F - 1, Me = E.length; ++pe < Me; )
        if (E[pe] === j) return pe;
      return -1;
    }
    function am(E, j, F) {
      for (var pe = F + 1; pe--; ) if (E[pe] === j) return pe;
      return pe;
    }
    function Fo(E) {
      return Vo(E) ? cm(E) : Wg(E);
    }
    function In(E) {
      return Vo(E) ? um(E) : Kg(E);
    }
    function hd(E) {
      for (var j = E.length; j-- && Q_.test(E.charAt(j)); );
      return j;
    }
    var lm = jl(Rg);
    function cm(E) {
      for (var j = (Bl.lastIndex = 0); Bl.test(E); ) ++j;
      return j;
    }
    function um(E) {
      return E.match(Bl) || [];
    }
    function fm(E) {
      return E.match(Ig) || [];
    }
    var dm = function E(j) {
        j = j == null ? Pt : Ro.defaults(Pt.Object(), j, Ro.pick(Pt, Og));
        var F = j.Array,
          pe = j.Date,
          Me = j.Error,
          Xe = j.Function,
          gt = j.Math,
          nt = j.Object,
          Kl = j.RegExp,
          pm = j.String,
          mn = j.TypeError,
          Ai = F.prototype,
          hm = Xe.prototype,
          No = nt.prototype,
          Ii = j['__core-js_shared__'],
          Mi = hm.toString,
          Qe = No.hasOwnProperty,
          vm = 0,
          vd = (function () {
            var r = /[^.]+$/.exec((Ii && Ii.keys && Ii.keys.IE_PROTO) || '');
            return r ? 'Symbol(src)_1.' + r : '';
          })(),
          Li = No.toString,
          _m = Mi.call(nt),
          gm = Pt._,
          mm = Kl(
            '^' +
              Mi.call(Qe)
                .replace(El, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?',
                ) +
              '$',
          ),
          Oi = Qf ? j.Buffer : n,
          Tr = j.Symbol,
          Bi = j.Uint8Array,
          _d = Oi ? Oi.allocUnsafe : n,
          Vi = pd(nt.getPrototypeOf, nt),
          gd = nt.create,
          md = No.propertyIsEnumerable,
          Fi = Ai.splice,
          yd = Tr ? Tr.isConcatSpreadable : n,
          Cs = Tr ? Tr.iterator : n,
          eo = Tr ? Tr.toStringTag : n,
          Ri = (function () {
            try {
              var r = so(nt, 'defineProperty');
              return r({}, '', {}), r;
            } catch {}
          })(),
          ym = j.clearTimeout !== Pt.clearTimeout && j.clearTimeout,
          bm = pe && pe.now !== Pt.Date.now && pe.now,
          wm = j.setTimeout !== Pt.setTimeout && j.setTimeout,
          Ni = gt.ceil,
          Hi = gt.floor,
          Yl = nt.getOwnPropertySymbols,
          km = Oi ? Oi.isBuffer : n,
          bd = j.isFinite,
          $m = Ai.join,
          xm = pd(nt.keys, nt),
          mt = gt.max,
          It = gt.min,
          Cm = pe.now,
          Pm = j.parseInt,
          wd = gt.random,
          Sm = Ai.reverse,
          Xl = so(j, 'DataView'),
          Ps = so(j, 'Map'),
          Zl = so(j, 'Promise'),
          Ho = so(j, 'Set'),
          Ss = so(j, 'WeakMap'),
          Ts = so(nt, 'create'),
          zi = Ss && new Ss(),
          zo = {},
          Tm = io(Xl),
          Em = io(Ps),
          Am = io(Zl),
          Im = io(Ho),
          Mm = io(Ss),
          ji = Tr ? Tr.prototype : n,
          Es = ji ? ji.valueOf : n,
          kd = ji ? ji.toString : n;
        function v(r) {
          if (ft(r) && !Le(r) && !(r instanceof He)) {
            if (r instanceof yn) return r;
            if (Qe.call(r, '__wrapped__')) return $p(r);
          }
          return new yn(r);
        }
        var jo = (function () {
          function r() {}
          return function (o) {
            if (!ct(o)) return {};
            if (gd) return gd(o);
            r.prototype = o;
            var l = new r();
            return (r.prototype = n), l;
          };
        })();
        function Di() {}
        function yn(r, o) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!o),
            (this.__index__ = 0),
            (this.__values__ = n);
        }
        (v.templateSettings = {
          escape: W_,
          evaluate: K_,
          interpolate: If,
          variable: '',
          imports: { _: v },
        }),
          (v.prototype = Di.prototype),
          (v.prototype.constructor = v),
          (yn.prototype = jo(Di.prototype)),
          (yn.prototype.constructor = yn);
        function He(r) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = kt),
            (this.__views__ = []);
        }
        function Lm() {
          var r = new He(this.__wrapped__);
          return (
            (r.__actions__ = qt(this.__actions__)),
            (r.__dir__ = this.__dir__),
            (r.__filtered__ = this.__filtered__),
            (r.__iteratees__ = qt(this.__iteratees__)),
            (r.__takeCount__ = this.__takeCount__),
            (r.__views__ = qt(this.__views__)),
            r
          );
        }
        function Om() {
          if (this.__filtered__) {
            var r = new He(this);
            (r.__dir__ = -1), (r.__filtered__ = !0);
          } else (r = this.clone()), (r.__dir__ *= -1);
          return r;
        }
        function Bm() {
          var r = this.__wrapped__.value(),
            o = this.__dir__,
            l = Le(r),
            f = o < 0,
            p = l ? r.length : 0,
            g = K2(0, p, this.__views__),
            b = g.start,
            C = g.end,
            A = C - b,
            U = f ? C : b - 1,
            W = this.__iteratees__,
            G = W.length,
            le = 0,
            me = It(A, this.__takeCount__);
          if (!l || (!f && p == A && me == A)) return Wd(r, this.__actions__);
          var Pe = [];
          e: for (; A-- && le < me; ) {
            U += o;
            for (var Ve = -1, Se = r[U]; ++Ve < G; ) {
              var Ne = W[Ve],
                De = Ne.iteratee,
                rn = Ne.type,
                Rt = De(Se);
              if (rn == ot) Se = Rt;
              else if (!Rt) {
                if (rn == Ge) continue e;
                break e;
              }
            }
            Pe[le++] = Se;
          }
          return Pe;
        }
        (He.prototype = jo(Di.prototype)), (He.prototype.constructor = He);
        function to(r) {
          var o = -1,
            l = r == null ? 0 : r.length;
          for (this.clear(); ++o < l; ) {
            var f = r[o];
            this.set(f[0], f[1]);
          }
        }
        function Vm() {
          (this.__data__ = Ts ? Ts(null) : {}), (this.size = 0);
        }
        function Fm(r) {
          var o = this.has(r) && delete this.__data__[r];
          return (this.size -= o ? 1 : 0), o;
        }
        function Rm(r) {
          var o = this.__data__;
          if (Ts) {
            var l = o[r];
            return l === d ? n : l;
          }
          return Qe.call(o, r) ? o[r] : n;
        }
        function Nm(r) {
          var o = this.__data__;
          return Ts ? o[r] !== n : Qe.call(o, r);
        }
        function Hm(r, o) {
          var l = this.__data__;
          return (
            (this.size += this.has(r) ? 0 : 1),
            (l[r] = Ts && o === n ? d : o),
            this
          );
        }
        (to.prototype.clear = Vm),
          (to.prototype.delete = Fm),
          (to.prototype.get = Rm),
          (to.prototype.has = Nm),
          (to.prototype.set = Hm);
        function nr(r) {
          var o = -1,
            l = r == null ? 0 : r.length;
          for (this.clear(); ++o < l; ) {
            var f = r[o];
            this.set(f[0], f[1]);
          }
        }
        function zm() {
          (this.__data__ = []), (this.size = 0);
        }
        function jm(r) {
          var o = this.__data__,
            l = qi(o, r);
          if (l < 0) return !1;
          var f = o.length - 1;
          return l == f ? o.pop() : Fi.call(o, l, 1), --this.size, !0;
        }
        function Dm(r) {
          var o = this.__data__,
            l = qi(o, r);
          return l < 0 ? n : o[l][1];
        }
        function qm(r) {
          return qi(this.__data__, r) > -1;
        }
        function Um(r, o) {
          var l = this.__data__,
            f = qi(l, r);
          return f < 0 ? (++this.size, l.push([r, o])) : (l[f][1] = o), this;
        }
        (nr.prototype.clear = zm),
          (nr.prototype.delete = jm),
          (nr.prototype.get = Dm),
          (nr.prototype.has = qm),
          (nr.prototype.set = Um);
        function rr(r) {
          var o = -1,
            l = r == null ? 0 : r.length;
          for (this.clear(); ++o < l; ) {
            var f = r[o];
            this.set(f[0], f[1]);
          }
        }
        function Wm() {
          (this.size = 0),
            (this.__data__ = {
              hash: new to(),
              map: new (Ps || nr)(),
              string: new to(),
            });
        }
        function Km(r) {
          var o = na(this, r).delete(r);
          return (this.size -= o ? 1 : 0), o;
        }
        function Ym(r) {
          return na(this, r).get(r);
        }
        function Xm(r) {
          return na(this, r).has(r);
        }
        function Zm(r, o) {
          var l = na(this, r),
            f = l.size;
          return l.set(r, o), (this.size += l.size == f ? 0 : 1), this;
        }
        (rr.prototype.clear = Wm),
          (rr.prototype.delete = Km),
          (rr.prototype.get = Ym),
          (rr.prototype.has = Xm),
          (rr.prototype.set = Zm);
        function no(r) {
          var o = -1,
            l = r == null ? 0 : r.length;
          for (this.__data__ = new rr(); ++o < l; ) this.add(r[o]);
        }
        function Gm(r) {
          return this.__data__.set(r, d), this;
        }
        function Qm(r) {
          return this.__data__.has(r);
        }
        (no.prototype.add = no.prototype.push = Gm), (no.prototype.has = Qm);
        function Mn(r) {
          var o = (this.__data__ = new nr(r));
          this.size = o.size;
        }
        function Jm() {
          (this.__data__ = new nr()), (this.size = 0);
        }
        function e2(r) {
          var o = this.__data__,
            l = o.delete(r);
          return (this.size = o.size), l;
        }
        function t2(r) {
          return this.__data__.get(r);
        }
        function n2(r) {
          return this.__data__.has(r);
        }
        function r2(r, o) {
          var l = this.__data__;
          if (l instanceof nr) {
            var f = l.__data__;
            if (!Ps || f.length < i - 1)
              return f.push([r, o]), (this.size = ++l.size), this;
            l = this.__data__ = new rr(f);
          }
          return l.set(r, o), (this.size = l.size), this;
        }
        (Mn.prototype.clear = Jm),
          (Mn.prototype.delete = e2),
          (Mn.prototype.get = t2),
          (Mn.prototype.has = n2),
          (Mn.prototype.set = r2);
        function $d(r, o) {
          var l = Le(r),
            f = !l && ao(r),
            p = !l && !f && Lr(r),
            g = !l && !f && !p && Wo(r),
            b = l || f || p || g,
            C = b ? ql(r.length, pm) : [],
            A = C.length;
          for (var U in r)
            (o || Qe.call(r, U)) &&
              !(
                b &&
                (U == 'length' ||
                  (p && (U == 'offset' || U == 'parent')) ||
                  (g &&
                    (U == 'buffer' ||
                      U == 'byteLength' ||
                      U == 'byteOffset')) ||
                  ar(U, A))
              ) &&
              C.push(U);
          return C;
        }
        function xd(r) {
          var o = r.length;
          return o ? r[ac(0, o - 1)] : n;
        }
        function o2(r, o) {
          return ra(qt(r), ro(o, 0, r.length));
        }
        function s2(r) {
          return ra(qt(r));
        }
        function Gl(r, o, l) {
          ((l !== n && !Ln(r[o], l)) || (l === n && !(o in r))) && or(r, o, l);
        }
        function As(r, o, l) {
          var f = r[o];
          (!(Qe.call(r, o) && Ln(f, l)) || (l === n && !(o in r))) &&
            or(r, o, l);
        }
        function qi(r, o) {
          for (var l = r.length; l--; ) if (Ln(r[l][0], o)) return l;
          return -1;
        }
        function i2(r, o, l, f) {
          return (
            Er(r, function (p, g, b) {
              o(f, p, l(p), b);
            }),
            f
          );
        }
        function Cd(r, o) {
          return r && Wn(o, $t(o), r);
        }
        function a2(r, o) {
          return r && Wn(o, Wt(o), r);
        }
        function or(r, o, l) {
          o == '__proto__' && Ri
            ? Ri(r, o, {
                configurable: !0,
                enumerable: !0,
                value: l,
                writable: !0,
              })
            : (r[o] = l);
        }
        function Ql(r, o) {
          for (var l = -1, f = o.length, p = F(f), g = r == null; ++l < f; )
            p[l] = g ? n : Mc(r, o[l]);
          return p;
        }
        function ro(r, o, l) {
          return (
            r === r &&
              (l !== n && (r = r <= l ? r : l),
              o !== n && (r = r >= o ? r : o)),
            r
          );
        }
        function bn(r, o, l, f, p, g) {
          var b,
            C = o & m,
            A = o & y,
            U = o & S;
          if ((l && (b = p ? l(r, f, p, g) : l(r)), b !== n)) return b;
          if (!ct(r)) return r;
          var W = Le(r);
          if (W) {
            if (((b = X2(r)), !C)) return qt(r, b);
          } else {
            var G = Mt(r),
              le = G == $ || G == T;
            if (Lr(r)) return Xd(r, C);
            if (G == ee || G == kr || (le && !p)) {
              if (((b = A || le ? {} : hp(r)), !C))
                return A ? R2(r, a2(b, r)) : F2(r, Cd(b, r));
            } else {
              if (!rt[G]) return p ? r : {};
              b = Z2(r, G, C);
            }
          }
          g || (g = new Mn());
          var me = g.get(r);
          if (me) return me;
          g.set(r, b),
            Dp(r)
              ? r.forEach(function (Se) {
                  b.add(bn(Se, o, l, Se, r, g));
                })
              : zp(r) &&
                r.forEach(function (Se, Ne) {
                  b.set(Ne, bn(Se, o, l, Ne, r, g));
                });
          var Pe = U ? (A ? mc : gc) : A ? Wt : $t,
            Ve = W ? n : Pe(r);
          return (
            gn(Ve || r, function (Se, Ne) {
              Ve && ((Ne = Se), (Se = r[Ne])),
                As(b, Ne, bn(Se, o, l, Ne, r, g));
            }),
            b
          );
        }
        function l2(r) {
          var o = $t(r);
          return function (l) {
            return Pd(l, r, o);
          };
        }
        function Pd(r, o, l) {
          var f = l.length;
          if (r == null) return !f;
          for (r = nt(r); f--; ) {
            var p = l[f],
              g = o[p],
              b = r[p];
            if ((b === n && !(p in r)) || !g(b)) return !1;
          }
          return !0;
        }
        function Sd(r, o, l) {
          if (typeof r != 'function') throw new mn(c);
          return Fs(function () {
            r.apply(n, l);
          }, o);
        }
        function Is(r, o, l, f) {
          var p = -1,
            g = Si,
            b = !0,
            C = r.length,
            A = [],
            U = o.length;
          if (!C) return A;
          l && (o = at(o, en(l))),
            f
              ? ((g = Rl), (b = !1))
              : o.length >= i && ((g = xs), (b = !1), (o = new no(o)));
          e: for (; ++p < C; ) {
            var W = r[p],
              G = l == null ? W : l(W);
            if (((W = f || W !== 0 ? W : 0), b && G === G)) {
              for (var le = U; le--; ) if (o[le] === G) continue e;
              A.push(W);
            } else g(o, G, f) || A.push(W);
          }
          return A;
        }
        var Er = ep(Un),
          Td = ep(ec, !0);
        function c2(r, o) {
          var l = !0;
          return (
            Er(r, function (f, p, g) {
              return (l = !!o(f, p, g)), l;
            }),
            l
          );
        }
        function Ui(r, o, l) {
          for (var f = -1, p = r.length; ++f < p; ) {
            var g = r[f],
              b = o(g);
            if (b != null && (C === n ? b === b && !nn(b) : l(b, C)))
              var C = b,
                A = g;
          }
          return A;
        }
        function u2(r, o, l, f) {
          var p = r.length;
          for (
            l = Oe(l),
              l < 0 && (l = -l > p ? 0 : p + l),
              f = f === n || f > p ? p : Oe(f),
              f < 0 && (f += p),
              f = l > f ? 0 : Up(f);
            l < f;

          )
            r[l++] = o;
          return r;
        }
        function Ed(r, o) {
          var l = [];
          return (
            Er(r, function (f, p, g) {
              o(f, p, g) && l.push(f);
            }),
            l
          );
        }
        function St(r, o, l, f, p) {
          var g = -1,
            b = r.length;
          for (l || (l = Q2), p || (p = []); ++g < b; ) {
            var C = r[g];
            o > 0 && l(C)
              ? o > 1
                ? St(C, o - 1, l, f, p)
                : Pr(p, C)
              : f || (p[p.length] = C);
          }
          return p;
        }
        var Jl = tp(),
          Ad = tp(!0);
        function Un(r, o) {
          return r && Jl(r, o, $t);
        }
        function ec(r, o) {
          return r && Ad(r, o, $t);
        }
        function Wi(r, o) {
          return Cr(o, function (l) {
            return lr(r[l]);
          });
        }
        function oo(r, o) {
          o = Ir(o, r);
          for (var l = 0, f = o.length; r != null && l < f; ) r = r[Kn(o[l++])];
          return l && l == f ? r : n;
        }
        function Id(r, o, l) {
          var f = o(r);
          return Le(r) ? f : Pr(f, l(r));
        }
        function Vt(r) {
          return r == null
            ? r === n
              ? $e
              : Q
            : eo && eo in nt(r)
              ? W2(r)
              : sy(r);
        }
        function tc(r, o) {
          return r > o;
        }
        function f2(r, o) {
          return r != null && Qe.call(r, o);
        }
        function d2(r, o) {
          return r != null && o in nt(r);
        }
        function p2(r, o, l) {
          return r >= It(o, l) && r < mt(o, l);
        }
        function nc(r, o, l) {
          for (
            var f = l ? Rl : Si,
              p = r[0].length,
              g = r.length,
              b = g,
              C = F(g),
              A = 1 / 0,
              U = [];
            b--;

          ) {
            var W = r[b];
            b && o && (W = at(W, en(o))),
              (A = It(W.length, A)),
              (C[b] =
                !l && (o || (p >= 120 && W.length >= 120))
                  ? new no(b && W)
                  : n);
          }
          W = r[0];
          var G = -1,
            le = C[0];
          e: for (; ++G < p && U.length < A; ) {
            var me = W[G],
              Pe = o ? o(me) : me;
            if (
              ((me = l || me !== 0 ? me : 0), !(le ? xs(le, Pe) : f(U, Pe, l)))
            ) {
              for (b = g; --b; ) {
                var Ve = C[b];
                if (!(Ve ? xs(Ve, Pe) : f(r[b], Pe, l))) continue e;
              }
              le && le.push(Pe), U.push(me);
            }
          }
          return U;
        }
        function h2(r, o, l, f) {
          return (
            Un(r, function (p, g, b) {
              o(f, l(p), g, b);
            }),
            f
          );
        }
        function Ms(r, o, l) {
          (o = Ir(o, r)), (r = mp(r, o));
          var f = r == null ? r : r[Kn(kn(o))];
          return f == null ? n : Jt(f, r, l);
        }
        function Md(r) {
          return ft(r) && Vt(r) == kr;
        }
        function v2(r) {
          return ft(r) && Vt(r) == Ye;
        }
        function _2(r) {
          return ft(r) && Vt(r) == vn;
        }
        function Ls(r, o, l, f, p) {
          return r === o
            ? !0
            : r == null || o == null || (!ft(r) && !ft(o))
              ? r !== r && o !== o
              : g2(r, o, l, f, Ls, p);
        }
        function g2(r, o, l, f, p, g) {
          var b = Le(r),
            C = Le(o),
            A = b ? jt : Mt(r),
            U = C ? jt : Mt(o);
          (A = A == kr ? ee : A), (U = U == kr ? ee : U);
          var W = A == ee,
            G = U == ee,
            le = A == U;
          if (le && Lr(r)) {
            if (!Lr(o)) return !1;
            (b = !0), (W = !1);
          }
          if (le && !W)
            return (
              g || (g = new Mn()),
              b || Wo(r) ? fp(r, o, l, f, p, g) : q2(r, o, A, l, f, p, g)
            );
          if (!(l & R)) {
            var me = W && Qe.call(r, '__wrapped__'),
              Pe = G && Qe.call(o, '__wrapped__');
            if (me || Pe) {
              var Ve = me ? r.value() : r,
                Se = Pe ? o.value() : o;
              return g || (g = new Mn()), p(Ve, Se, l, f, g);
            }
          }
          return le ? (g || (g = new Mn()), U2(r, o, l, f, p, g)) : !1;
        }
        function m2(r) {
          return ft(r) && Mt(r) == H;
        }
        function rc(r, o, l, f) {
          var p = l.length,
            g = p,
            b = !f;
          if (r == null) return !g;
          for (r = nt(r); p--; ) {
            var C = l[p];
            if (b && C[2] ? C[1] !== r[C[0]] : !(C[0] in r)) return !1;
          }
          for (; ++p < g; ) {
            C = l[p];
            var A = C[0],
              U = r[A],
              W = C[1];
            if (b && C[2]) {
              if (U === n && !(A in r)) return !1;
            } else {
              var G = new Mn();
              if (f) var le = f(U, W, A, r, o, G);
              if (!(le === n ? Ls(W, U, R | x, f, G) : le)) return !1;
            }
          }
          return !0;
        }
        function Ld(r) {
          if (!ct(r) || ey(r)) return !1;
          var o = lr(r) ? mm : lg;
          return o.test(io(r));
        }
        function y2(r) {
          return ft(r) && Vt(r) == ie;
        }
        function b2(r) {
          return ft(r) && Mt(r) == Z;
        }
        function w2(r) {
          return ft(r) && ca(r.length) && !!st[Vt(r)];
        }
        function Od(r) {
          return typeof r == 'function'
            ? r
            : r == null
              ? Kt
              : typeof r == 'object'
                ? Le(r)
                  ? Fd(r[0], r[1])
                  : Vd(r)
                : nh(r);
        }
        function oc(r) {
          if (!Vs(r)) return xm(r);
          var o = [];
          for (var l in nt(r)) Qe.call(r, l) && l != 'constructor' && o.push(l);
          return o;
        }
        function k2(r) {
          if (!ct(r)) return oy(r);
          var o = Vs(r),
            l = [];
          for (var f in r)
            (f == 'constructor' && (o || !Qe.call(r, f))) || l.push(f);
          return l;
        }
        function sc(r, o) {
          return r < o;
        }
        function Bd(r, o) {
          var l = -1,
            f = Ut(r) ? F(r.length) : [];
          return (
            Er(r, function (p, g, b) {
              f[++l] = o(p, g, b);
            }),
            f
          );
        }
        function Vd(r) {
          var o = bc(r);
          return o.length == 1 && o[0][2]
            ? _p(o[0][0], o[0][1])
            : function (l) {
                return l === r || rc(l, r, o);
              };
        }
        function Fd(r, o) {
          return kc(r) && vp(o)
            ? _p(Kn(r), o)
            : function (l) {
                var f = Mc(l, r);
                return f === n && f === o ? Lc(l, r) : Ls(o, f, R | x);
              };
        }
        function Ki(r, o, l, f, p) {
          r !== o &&
            Jl(
              o,
              function (g, b) {
                if ((p || (p = new Mn()), ct(g))) $2(r, o, b, l, Ki, f, p);
                else {
                  var C = f ? f(xc(r, b), g, b + '', r, o, p) : n;
                  C === n && (C = g), Gl(r, b, C);
                }
              },
              Wt,
            );
        }
        function $2(r, o, l, f, p, g, b) {
          var C = xc(r, l),
            A = xc(o, l),
            U = b.get(A);
          if (U) {
            Gl(r, l, U);
            return;
          }
          var W = g ? g(C, A, l + '', r, o, b) : n,
            G = W === n;
          if (G) {
            var le = Le(A),
              me = !le && Lr(A),
              Pe = !le && !me && Wo(A);
            (W = A),
              le || me || Pe
                ? Le(C)
                  ? (W = C)
                  : pt(C)
                    ? (W = qt(C))
                    : me
                      ? ((G = !1), (W = Xd(A, !0)))
                      : Pe
                        ? ((G = !1), (W = Zd(A, !0)))
                        : (W = [])
                : Rs(A) || ao(A)
                  ? ((W = C),
                    ao(C) ? (W = Wp(C)) : (!ct(C) || lr(C)) && (W = hp(A)))
                  : (G = !1);
          }
          G && (b.set(A, W), p(W, A, f, g, b), b.delete(A)), Gl(r, l, W);
        }
        function Rd(r, o) {
          var l = r.length;
          if (l) return (o += o < 0 ? l : 0), ar(o, l) ? r[o] : n;
        }
        function Nd(r, o, l) {
          o.length
            ? (o = at(o, function (g) {
                return Le(g)
                  ? function (b) {
                      return oo(b, g.length === 1 ? g[0] : g);
                    }
                  : g;
              }))
            : (o = [Kt]);
          var f = -1;
          o = at(o, en(xe()));
          var p = Bd(r, function (g, b, C) {
            var A = at(o, function (U) {
              return U(g);
            });
            return { criteria: A, index: ++f, value: g };
          });
          return Zg(p, function (g, b) {
            return V2(g, b, l);
          });
        }
        function x2(r, o) {
          return Hd(r, o, function (l, f) {
            return Lc(r, f);
          });
        }
        function Hd(r, o, l) {
          for (var f = -1, p = o.length, g = {}; ++f < p; ) {
            var b = o[f],
              C = oo(r, b);
            l(C, b) && Os(g, Ir(b, r), C);
          }
          return g;
        }
        function C2(r) {
          return function (o) {
            return oo(o, r);
          };
        }
        function ic(r, o, l, f) {
          var p = f ? Xg : Bo,
            g = -1,
            b = o.length,
            C = r;
          for (r === o && (o = qt(o)), l && (C = at(r, en(l))); ++g < b; )
            for (
              var A = 0, U = o[g], W = l ? l(U) : U;
              (A = p(C, W, A, f)) > -1;

            )
              C !== r && Fi.call(C, A, 1), Fi.call(r, A, 1);
          return r;
        }
        function zd(r, o) {
          for (var l = r ? o.length : 0, f = l - 1; l--; ) {
            var p = o[l];
            if (l == f || p !== g) {
              var g = p;
              ar(p) ? Fi.call(r, p, 1) : uc(r, p);
            }
          }
          return r;
        }
        function ac(r, o) {
          return r + Hi(wd() * (o - r + 1));
        }
        function P2(r, o, l, f) {
          for (var p = -1, g = mt(Ni((o - r) / (l || 1)), 0), b = F(g); g--; )
            (b[f ? g : ++p] = r), (r += l);
          return b;
        }
        function lc(r, o) {
          var l = '';
          if (!r || o < 1 || o > ge) return l;
          do o % 2 && (l += r), (o = Hi(o / 2)), o && (r += r);
          while (o);
          return l;
        }
        function Fe(r, o) {
          return Cc(gp(r, o, Kt), r + '');
        }
        function S2(r) {
          return xd(Ko(r));
        }
        function T2(r, o) {
          var l = Ko(r);
          return ra(l, ro(o, 0, l.length));
        }
        function Os(r, o, l, f) {
          if (!ct(r)) return r;
          o = Ir(o, r);
          for (
            var p = -1, g = o.length, b = g - 1, C = r;
            C != null && ++p < g;

          ) {
            var A = Kn(o[p]),
              U = l;
            if (A === '__proto__' || A === 'constructor' || A === 'prototype')
              return r;
            if (p != b) {
              var W = C[A];
              (U = f ? f(W, A, C) : n),
                U === n && (U = ct(W) ? W : ar(o[p + 1]) ? [] : {});
            }
            As(C, A, U), (C = C[A]);
          }
          return r;
        }
        var jd = zi
            ? function (r, o) {
                return zi.set(r, o), r;
              }
            : Kt,
          E2 = Ri
            ? function (r, o) {
                return Ri(r, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Bc(o),
                  writable: !0,
                });
              }
            : Kt;
        function A2(r) {
          return ra(Ko(r));
        }
        function wn(r, o, l) {
          var f = -1,
            p = r.length;
          o < 0 && (o = -o > p ? 0 : p + o),
            (l = l > p ? p : l),
            l < 0 && (l += p),
            (p = o > l ? 0 : (l - o) >>> 0),
            (o >>>= 0);
          for (var g = F(p); ++f < p; ) g[f] = r[f + o];
          return g;
        }
        function I2(r, o) {
          var l;
          return (
            Er(r, function (f, p, g) {
              return (l = o(f, p, g)), !l;
            }),
            !!l
          );
        }
        function Yi(r, o, l) {
          var f = 0,
            p = r == null ? f : r.length;
          if (typeof o == 'number' && o === o && p <= $i) {
            for (; f < p; ) {
              var g = (f + p) >>> 1,
                b = r[g];
              b !== null && !nn(b) && (l ? b <= o : b < o)
                ? (f = g + 1)
                : (p = g);
            }
            return p;
          }
          return cc(r, o, Kt, l);
        }
        function cc(r, o, l, f) {
          var p = 0,
            g = r == null ? 0 : r.length;
          if (g === 0) return 0;
          o = l(o);
          for (
            var b = o !== o, C = o === null, A = nn(o), U = o === n;
            p < g;

          ) {
            var W = Hi((p + g) / 2),
              G = l(r[W]),
              le = G !== n,
              me = G === null,
              Pe = G === G,
              Ve = nn(G);
            if (b) var Se = f || Pe;
            else
              U
                ? (Se = Pe && (f || le))
                : C
                  ? (Se = Pe && le && (f || !me))
                  : A
                    ? (Se = Pe && le && !me && (f || !Ve))
                    : me || Ve
                      ? (Se = !1)
                      : (Se = f ? G <= o : G < o);
            Se ? (p = W + 1) : (g = W);
          }
          return It(g, hn);
        }
        function Dd(r, o) {
          for (var l = -1, f = r.length, p = 0, g = []; ++l < f; ) {
            var b = r[l],
              C = o ? o(b) : b;
            if (!l || !Ln(C, A)) {
              var A = C;
              g[p++] = b === 0 ? 0 : b;
            }
          }
          return g;
        }
        function qd(r) {
          return typeof r == 'number' ? r : nn(r) ? er : +r;
        }
        function tn(r) {
          if (typeof r == 'string') return r;
          if (Le(r)) return at(r, tn) + '';
          if (nn(r)) return kd ? kd.call(r) : '';
          var o = r + '';
          return o == '0' && 1 / r == -Ie ? '-0' : o;
        }
        function Ar(r, o, l) {
          var f = -1,
            p = Si,
            g = r.length,
            b = !0,
            C = [],
            A = C;
          if (l) (b = !1), (p = Rl);
          else if (g >= i) {
            var U = o ? null : j2(r);
            if (U) return Ei(U);
            (b = !1), (p = xs), (A = new no());
          } else A = o ? [] : C;
          e: for (; ++f < g; ) {
            var W = r[f],
              G = o ? o(W) : W;
            if (((W = l || W !== 0 ? W : 0), b && G === G)) {
              for (var le = A.length; le--; ) if (A[le] === G) continue e;
              o && A.push(G), C.push(W);
            } else p(A, G, l) || (A !== C && A.push(G), C.push(W));
          }
          return C;
        }
        function uc(r, o) {
          return (
            (o = Ir(o, r)), (r = mp(r, o)), r == null || delete r[Kn(kn(o))]
          );
        }
        function Ud(r, o, l, f) {
          return Os(r, o, l(oo(r, o)), f);
        }
        function Xi(r, o, l, f) {
          for (
            var p = r.length, g = f ? p : -1;
            (f ? g-- : ++g < p) && o(r[g], g, r);

          );
          return l
            ? wn(r, f ? 0 : g, f ? g + 1 : p)
            : wn(r, f ? g + 1 : 0, f ? p : g);
        }
        function Wd(r, o) {
          var l = r;
          return (
            l instanceof He && (l = l.value()),
            Nl(
              o,
              function (f, p) {
                return p.func.apply(p.thisArg, Pr([f], p.args));
              },
              l,
            )
          );
        }
        function fc(r, o, l) {
          var f = r.length;
          if (f < 2) return f ? Ar(r[0]) : [];
          for (var p = -1, g = F(f); ++p < f; )
            for (var b = r[p], C = -1; ++C < f; )
              C != p && (g[p] = Is(g[p] || b, r[C], o, l));
          return Ar(St(g, 1), o, l);
        }
        function Kd(r, o, l) {
          for (var f = -1, p = r.length, g = o.length, b = {}; ++f < p; ) {
            var C = f < g ? o[f] : n;
            l(b, r[f], C);
          }
          return b;
        }
        function dc(r) {
          return pt(r) ? r : [];
        }
        function pc(r) {
          return typeof r == 'function' ? r : Kt;
        }
        function Ir(r, o) {
          return Le(r) ? r : kc(r, o) ? [r] : kp(Ze(r));
        }
        var M2 = Fe;
        function Mr(r, o, l) {
          var f = r.length;
          return (l = l === n ? f : l), !o && l >= f ? r : wn(r, o, l);
        }
        var Yd =
          ym ||
          function (r) {
            return Pt.clearTimeout(r);
          };
        function Xd(r, o) {
          if (o) return r.slice();
          var l = r.length,
            f = _d ? _d(l) : new r.constructor(l);
          return r.copy(f), f;
        }
        function hc(r) {
          var o = new r.constructor(r.byteLength);
          return new Bi(o).set(new Bi(r)), o;
        }
        function L2(r, o) {
          var l = o ? hc(r.buffer) : r.buffer;
          return new r.constructor(l, r.byteOffset, r.byteLength);
        }
        function O2(r) {
          var o = new r.constructor(r.source, Mf.exec(r));
          return (o.lastIndex = r.lastIndex), o;
        }
        function B2(r) {
          return Es ? nt(Es.call(r)) : {};
        }
        function Zd(r, o) {
          var l = o ? hc(r.buffer) : r.buffer;
          return new r.constructor(l, r.byteOffset, r.length);
        }
        function Gd(r, o) {
          if (r !== o) {
            var l = r !== n,
              f = r === null,
              p = r === r,
              g = nn(r),
              b = o !== n,
              C = o === null,
              A = o === o,
              U = nn(o);
            if (
              (!C && !U && !g && r > o) ||
              (g && b && A && !C && !U) ||
              (f && b && A) ||
              (!l && A) ||
              !p
            )
              return 1;
            if (
              (!f && !g && !U && r < o) ||
              (U && l && p && !f && !g) ||
              (C && l && p) ||
              (!b && p) ||
              !A
            )
              return -1;
          }
          return 0;
        }
        function V2(r, o, l) {
          for (
            var f = -1,
              p = r.criteria,
              g = o.criteria,
              b = p.length,
              C = l.length;
            ++f < b;

          ) {
            var A = Gd(p[f], g[f]);
            if (A) {
              if (f >= C) return A;
              var U = l[f];
              return A * (U == 'desc' ? -1 : 1);
            }
          }
          return r.index - o.index;
        }
        function Qd(r, o, l, f) {
          for (
            var p = -1,
              g = r.length,
              b = l.length,
              C = -1,
              A = o.length,
              U = mt(g - b, 0),
              W = F(A + U),
              G = !f;
            ++C < A;

          )
            W[C] = o[C];
          for (; ++p < b; ) (G || p < g) && (W[l[p]] = r[p]);
          for (; U--; ) W[C++] = r[p++];
          return W;
        }
        function Jd(r, o, l, f) {
          for (
            var p = -1,
              g = r.length,
              b = -1,
              C = l.length,
              A = -1,
              U = o.length,
              W = mt(g - C, 0),
              G = F(W + U),
              le = !f;
            ++p < W;

          )
            G[p] = r[p];
          for (var me = p; ++A < U; ) G[me + A] = o[A];
          for (; ++b < C; ) (le || p < g) && (G[me + l[b]] = r[p++]);
          return G;
        }
        function qt(r, o) {
          var l = -1,
            f = r.length;
          for (o || (o = F(f)); ++l < f; ) o[l] = r[l];
          return o;
        }
        function Wn(r, o, l, f) {
          var p = !l;
          l || (l = {});
          for (var g = -1, b = o.length; ++g < b; ) {
            var C = o[g],
              A = f ? f(l[C], r[C], C, l, r) : n;
            A === n && (A = r[C]), p ? or(l, C, A) : As(l, C, A);
          }
          return l;
        }
        function F2(r, o) {
          return Wn(r, wc(r), o);
        }
        function R2(r, o) {
          return Wn(r, dp(r), o);
        }
        function Zi(r, o) {
          return function (l, f) {
            var p = Le(l) ? Dg : i2,
              g = o ? o() : {};
            return p(l, r, xe(f, 2), g);
          };
        }
        function Do(r) {
          return Fe(function (o, l) {
            var f = -1,
              p = l.length,
              g = p > 1 ? l[p - 1] : n,
              b = p > 2 ? l[2] : n;
            for (
              g = r.length > 3 && typeof g == 'function' ? (p--, g) : n,
                b && Ft(l[0], l[1], b) && ((g = p < 3 ? n : g), (p = 1)),
                o = nt(o);
              ++f < p;

            ) {
              var C = l[f];
              C && r(o, C, f, g);
            }
            return o;
          });
        }
        function ep(r, o) {
          return function (l, f) {
            if (l == null) return l;
            if (!Ut(l)) return r(l, f);
            for (
              var p = l.length, g = o ? p : -1, b = nt(l);
              (o ? g-- : ++g < p) && f(b[g], g, b) !== !1;

            );
            return l;
          };
        }
        function tp(r) {
          return function (o, l, f) {
            for (var p = -1, g = nt(o), b = f(o), C = b.length; C--; ) {
              var A = b[r ? C : ++p];
              if (l(g[A], A, g) === !1) break;
            }
            return o;
          };
        }
        function N2(r, o, l) {
          var f = o & L,
            p = Bs(r);
          function g() {
            var b = this && this !== Pt && this instanceof g ? p : r;
            return b.apply(f ? l : this, arguments);
          }
          return g;
        }
        function np(r) {
          return function (o) {
            o = Ze(o);
            var l = Vo(o) ? In(o) : n,
              f = l ? l[0] : o.charAt(0),
              p = l ? Mr(l, 1).join('') : o.slice(1);
            return f[r]() + p;
          };
        }
        function qo(r) {
          return function (o) {
            return Nl(eh(Jp(o).replace(Eg, '')), r, '');
          };
        }
        function Bs(r) {
          return function () {
            var o = arguments;
            switch (o.length) {
              case 0:
                return new r();
              case 1:
                return new r(o[0]);
              case 2:
                return new r(o[0], o[1]);
              case 3:
                return new r(o[0], o[1], o[2]);
              case 4:
                return new r(o[0], o[1], o[2], o[3]);
              case 5:
                return new r(o[0], o[1], o[2], o[3], o[4]);
              case 6:
                return new r(o[0], o[1], o[2], o[3], o[4], o[5]);
              case 7:
                return new r(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
            }
            var l = jo(r.prototype),
              f = r.apply(l, o);
            return ct(f) ? f : l;
          };
        }
        function H2(r, o, l) {
          var f = Bs(r);
          function p() {
            for (var g = arguments.length, b = F(g), C = g, A = Uo(p); C--; )
              b[C] = arguments[C];
            var U = g < 3 && b[0] !== A && b[g - 1] !== A ? [] : Sr(b, A);
            if (((g -= U.length), g < l))
              return ap(r, o, Gi, p.placeholder, n, b, U, n, n, l - g);
            var W = this && this !== Pt && this instanceof p ? f : r;
            return Jt(W, this, b);
          }
          return p;
        }
        function rp(r) {
          return function (o, l, f) {
            var p = nt(o);
            if (!Ut(o)) {
              var g = xe(l, 3);
              (o = $t(o)),
                (l = function (C) {
                  return g(p[C], C, p);
                });
            }
            var b = r(o, l, f);
            return b > -1 ? p[g ? o[b] : b] : n;
          };
        }
        function op(r) {
          return ir(function (o) {
            var l = o.length,
              f = l,
              p = yn.prototype.thru;
            for (r && o.reverse(); f--; ) {
              var g = o[f];
              if (typeof g != 'function') throw new mn(c);
              if (p && !b && ta(g) == 'wrapper') var b = new yn([], !0);
            }
            for (f = b ? f : l; ++f < l; ) {
              g = o[f];
              var C = ta(g),
                A = C == 'wrapper' ? yc(g) : n;
              A &&
              $c(A[0]) &&
              A[1] == (q | P | B | z) &&
              !A[4].length &&
              A[9] == 1
                ? (b = b[ta(A[0])].apply(b, A[3]))
                : (b = g.length == 1 && $c(g) ? b[C]() : b.thru(g));
            }
            return function () {
              var U = arguments,
                W = U[0];
              if (b && U.length == 1 && Le(W)) return b.plant(W).value();
              for (var G = 0, le = l ? o[G].apply(this, U) : W; ++G < l; )
                le = o[G].call(this, le);
              return le;
            };
          });
        }
        function Gi(r, o, l, f, p, g, b, C, A, U) {
          var W = o & q,
            G = o & L,
            le = o & O,
            me = o & (P | w),
            Pe = o & se,
            Ve = le ? n : Bs(r);
          function Se() {
            for (var Ne = arguments.length, De = F(Ne), rn = Ne; rn--; )
              De[rn] = arguments[rn];
            if (me)
              var Rt = Uo(Se),
                on = Qg(De, Rt);
            if (
              (f && (De = Qd(De, f, p, me)),
              g && (De = Jd(De, g, b, me)),
              (Ne -= on),
              me && Ne < U)
            ) {
              var ht = Sr(De, Rt);
              return ap(r, o, Gi, Se.placeholder, l, De, ht, C, A, U - Ne);
            }
            var On = G ? l : this,
              ur = le ? On[r] : r;
            return (
              (Ne = De.length),
              C ? (De = iy(De, C)) : Pe && Ne > 1 && De.reverse(),
              W && A < Ne && (De.length = A),
              this && this !== Pt && this instanceof Se && (ur = Ve || Bs(ur)),
              ur.apply(On, De)
            );
          }
          return Se;
        }
        function sp(r, o) {
          return function (l, f) {
            return h2(l, r, o(f), {});
          };
        }
        function Qi(r, o) {
          return function (l, f) {
            var p;
            if (l === n && f === n) return o;
            if ((l !== n && (p = l), f !== n)) {
              if (p === n) return f;
              typeof l == 'string' || typeof f == 'string'
                ? ((l = tn(l)), (f = tn(f)))
                : ((l = qd(l)), (f = qd(f))),
                (p = r(l, f));
            }
            return p;
          };
        }
        function vc(r) {
          return ir(function (o) {
            return (
              (o = at(o, en(xe()))),
              Fe(function (l) {
                var f = this;
                return r(o, function (p) {
                  return Jt(p, f, l);
                });
              })
            );
          });
        }
        function Ji(r, o) {
          o = o === n ? ' ' : tn(o);
          var l = o.length;
          if (l < 2) return l ? lc(o, r) : o;
          var f = lc(o, Ni(r / Fo(o)));
          return Vo(o) ? Mr(In(f), 0, r).join('') : f.slice(0, r);
        }
        function z2(r, o, l, f) {
          var p = o & L,
            g = Bs(r);
          function b() {
            for (
              var C = -1,
                A = arguments.length,
                U = -1,
                W = f.length,
                G = F(W + A),
                le = this && this !== Pt && this instanceof b ? g : r;
              ++U < W;

            )
              G[U] = f[U];
            for (; A--; ) G[U++] = arguments[++C];
            return Jt(le, p ? l : this, G);
          }
          return b;
        }
        function ip(r) {
          return function (o, l, f) {
            return (
              f && typeof f != 'number' && Ft(o, l, f) && (l = f = n),
              (o = cr(o)),
              l === n ? ((l = o), (o = 0)) : (l = cr(l)),
              (f = f === n ? (o < l ? 1 : -1) : cr(f)),
              P2(o, l, f, r)
            );
          };
        }
        function ea(r) {
          return function (o, l) {
            return (
              (typeof o == 'string' && typeof l == 'string') ||
                ((o = $n(o)), (l = $n(l))),
              r(o, l)
            );
          };
        }
        function ap(r, o, l, f, p, g, b, C, A, U) {
          var W = o & P,
            G = W ? b : n,
            le = W ? n : b,
            me = W ? g : n,
            Pe = W ? n : g;
          (o |= W ? B : N), (o &= ~(W ? N : B)), o & V || (o &= ~(L | O));
          var Ve = [r, o, p, me, G, Pe, le, C, A, U],
            Se = l.apply(n, Ve);
          return $c(r) && yp(Se, Ve), (Se.placeholder = f), bp(Se, r, o);
        }
        function _c(r) {
          var o = gt[r];
          return function (l, f) {
            if (
              ((l = $n(l)), (f = f == null ? 0 : It(Oe(f), 292)), f && bd(l))
            ) {
              var p = (Ze(l) + 'e').split('e'),
                g = o(p[0] + 'e' + (+p[1] + f));
              return (
                (p = (Ze(g) + 'e').split('e')), +(p[0] + 'e' + (+p[1] - f))
              );
            }
            return o(l);
          };
        }
        var j2 =
          Ho && 1 / Ei(new Ho([, -0]))[1] == Ie
            ? function (r) {
                return new Ho(r);
              }
            : Rc;
        function lp(r) {
          return function (o) {
            var l = Mt(o);
            return l == H ? Wl(o) : l == Z ? sm(o) : Gg(o, r(o));
          };
        }
        function sr(r, o, l, f, p, g, b, C) {
          var A = o & O;
          if (!A && typeof r != 'function') throw new mn(c);
          var U = f ? f.length : 0;
          if (
            (U || ((o &= ~(B | N)), (f = p = n)),
            (b = b === n ? b : mt(Oe(b), 0)),
            (C = C === n ? C : Oe(C)),
            (U -= p ? p.length : 0),
            o & N)
          ) {
            var W = f,
              G = p;
            f = p = n;
          }
          var le = A ? n : yc(r),
            me = [r, o, l, f, p, W, G, g, b, C];
          if (
            (le && ry(me, le),
            (r = me[0]),
            (o = me[1]),
            (l = me[2]),
            (f = me[3]),
            (p = me[4]),
            (C = me[9] = me[9] === n ? (A ? 0 : r.length) : mt(me[9] - U, 0)),
            !C && o & (P | w) && (o &= ~(P | w)),
            !o || o == L)
          )
            var Pe = N2(r, o, l);
          else
            o == P || o == w
              ? (Pe = H2(r, o, C))
              : (o == B || o == (L | B)) && !p.length
                ? (Pe = z2(r, o, l, f))
                : (Pe = Gi.apply(n, me));
          var Ve = le ? jd : yp;
          return bp(Ve(Pe, me), r, o);
        }
        function cp(r, o, l, f) {
          return r === n || (Ln(r, No[l]) && !Qe.call(f, l)) ? o : r;
        }
        function up(r, o, l, f, p, g) {
          return (
            ct(r) && ct(o) && (g.set(o, r), Ki(r, o, n, up, g), g.delete(o)), r
          );
        }
        function D2(r) {
          return Rs(r) ? n : r;
        }
        function fp(r, o, l, f, p, g) {
          var b = l & R,
            C = r.length,
            A = o.length;
          if (C != A && !(b && A > C)) return !1;
          var U = g.get(r),
            W = g.get(o);
          if (U && W) return U == o && W == r;
          var G = -1,
            le = !0,
            me = l & x ? new no() : n;
          for (g.set(r, o), g.set(o, r); ++G < C; ) {
            var Pe = r[G],
              Ve = o[G];
            if (f) var Se = b ? f(Ve, Pe, G, o, r, g) : f(Pe, Ve, G, r, o, g);
            if (Se !== n) {
              if (Se) continue;
              le = !1;
              break;
            }
            if (me) {
              if (
                !Hl(o, function (Ne, De) {
                  if (!xs(me, De) && (Pe === Ne || p(Pe, Ne, l, f, g)))
                    return me.push(De);
                })
              ) {
                le = !1;
                break;
              }
            } else if (!(Pe === Ve || p(Pe, Ve, l, f, g))) {
              le = !1;
              break;
            }
          }
          return g.delete(r), g.delete(o), le;
        }
        function q2(r, o, l, f, p, g, b) {
          switch (l) {
            case je:
              if (r.byteLength != o.byteLength || r.byteOffset != o.byteOffset)
                return !1;
              (r = r.buffer), (o = o.buffer);
            case Ye:
              return !(
                r.byteLength != o.byteLength || !g(new Bi(r), new Bi(o))
              );
            case $r:
            case vn:
            case X:
              return Ln(+r, +o);
            case xr:
              return r.name == o.name && r.message == o.message;
            case ie:
            case ye:
              return r == o + '';
            case H:
              var C = Wl;
            case Z:
              var A = f & R;
              if ((C || (C = Ei), r.size != o.size && !A)) return !1;
              var U = b.get(r);
              if (U) return U == o;
              (f |= x), b.set(r, o);
              var W = fp(C(r), C(o), f, p, g, b);
              return b.delete(r), W;
            case _e:
              if (Es) return Es.call(r) == Es.call(o);
          }
          return !1;
        }
        function U2(r, o, l, f, p, g) {
          var b = l & R,
            C = gc(r),
            A = C.length,
            U = gc(o),
            W = U.length;
          if (A != W && !b) return !1;
          for (var G = A; G--; ) {
            var le = C[G];
            if (!(b ? le in o : Qe.call(o, le))) return !1;
          }
          var me = g.get(r),
            Pe = g.get(o);
          if (me && Pe) return me == o && Pe == r;
          var Ve = !0;
          g.set(r, o), g.set(o, r);
          for (var Se = b; ++G < A; ) {
            le = C[G];
            var Ne = r[le],
              De = o[le];
            if (f) var rn = b ? f(De, Ne, le, o, r, g) : f(Ne, De, le, r, o, g);
            if (!(rn === n ? Ne === De || p(Ne, De, l, f, g) : rn)) {
              Ve = !1;
              break;
            }
            Se || (Se = le == 'constructor');
          }
          if (Ve && !Se) {
            var Rt = r.constructor,
              on = o.constructor;
            Rt != on &&
              'constructor' in r &&
              'constructor' in o &&
              !(
                typeof Rt == 'function' &&
                Rt instanceof Rt &&
                typeof on == 'function' &&
                on instanceof on
              ) &&
              (Ve = !1);
          }
          return g.delete(r), g.delete(o), Ve;
        }
        function ir(r) {
          return Cc(gp(r, n, Pp), r + '');
        }
        function gc(r) {
          return Id(r, $t, wc);
        }
        function mc(r) {
          return Id(r, Wt, dp);
        }
        var yc = zi
          ? function (r) {
              return zi.get(r);
            }
          : Rc;
        function ta(r) {
          for (
            var o = r.name + '', l = zo[o], f = Qe.call(zo, o) ? l.length : 0;
            f--;

          ) {
            var p = l[f],
              g = p.func;
            if (g == null || g == r) return p.name;
          }
          return o;
        }
        function Uo(r) {
          var o = Qe.call(v, 'placeholder') ? v : r;
          return o.placeholder;
        }
        function xe() {
          var r = v.iteratee || Vc;
          return (
            (r = r === Vc ? Od : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          );
        }
        function na(r, o) {
          var l = r.__data__;
          return J2(o) ? l[typeof o == 'string' ? 'string' : 'hash'] : l.map;
        }
        function bc(r) {
          for (var o = $t(r), l = o.length; l--; ) {
            var f = o[l],
              p = r[f];
            o[l] = [f, p, vp(p)];
          }
          return o;
        }
        function so(r, o) {
          var l = nm(r, o);
          return Ld(l) ? l : n;
        }
        function W2(r) {
          var o = Qe.call(r, eo),
            l = r[eo];
          try {
            r[eo] = n;
            var f = !0;
          } catch {}
          var p = Li.call(r);
          return f && (o ? (r[eo] = l) : delete r[eo]), p;
        }
        var wc = Yl
            ? function (r) {
                return r == null
                  ? []
                  : ((r = nt(r)),
                    Cr(Yl(r), function (o) {
                      return md.call(r, o);
                    }));
              }
            : Nc,
          dp = Yl
            ? function (r) {
                for (var o = []; r; ) Pr(o, wc(r)), (r = Vi(r));
                return o;
              }
            : Nc,
          Mt = Vt;
        ((Xl && Mt(new Xl(new ArrayBuffer(1))) != je) ||
          (Ps && Mt(new Ps()) != H) ||
          (Zl && Mt(Zl.resolve()) != ce) ||
          (Ho && Mt(new Ho()) != Z) ||
          (Ss && Mt(new Ss()) != Ee)) &&
          (Mt = function (r) {
            var o = Vt(r),
              l = o == ee ? r.constructor : n,
              f = l ? io(l) : '';
            if (f)
              switch (f) {
                case Tm:
                  return je;
                case Em:
                  return H;
                case Am:
                  return ce;
                case Im:
                  return Z;
                case Mm:
                  return Ee;
              }
            return o;
          });
        function K2(r, o, l) {
          for (var f = -1, p = l.length; ++f < p; ) {
            var g = l[f],
              b = g.size;
            switch (g.type) {
              case 'drop':
                r += b;
                break;
              case 'dropRight':
                o -= b;
                break;
              case 'take':
                o = It(o, r + b);
                break;
              case 'takeRight':
                r = mt(r, o - b);
                break;
            }
          }
          return { start: r, end: o };
        }
        function Y2(r) {
          var o = r.match(eg);
          return o ? o[1].split(tg) : [];
        }
        function pp(r, o, l) {
          o = Ir(o, r);
          for (var f = -1, p = o.length, g = !1; ++f < p; ) {
            var b = Kn(o[f]);
            if (!(g = r != null && l(r, b))) break;
            r = r[b];
          }
          return g || ++f != p
            ? g
            : ((p = r == null ? 0 : r.length),
              !!p && ca(p) && ar(b, p) && (Le(r) || ao(r)));
        }
        function X2(r) {
          var o = r.length,
            l = new r.constructor(o);
          return (
            o &&
              typeof r[0] == 'string' &&
              Qe.call(r, 'index') &&
              ((l.index = r.index), (l.input = r.input)),
            l
          );
        }
        function hp(r) {
          return typeof r.constructor == 'function' && !Vs(r) ? jo(Vi(r)) : {};
        }
        function Z2(r, o, l) {
          var f = r.constructor;
          switch (o) {
            case Ye:
              return hc(r);
            case $r:
            case vn:
              return new f(+r);
            case je:
              return L2(r, l);
            case it:
            case Bt:
            case qn:
            case Io:
            case tr:
            case Mo:
            case Ct:
            case Dt:
            case Lo:
              return Zd(r, l);
            case H:
              return new f();
            case X:
            case ye:
              return new f(r);
            case ie:
              return O2(r);
            case Z:
              return new f();
            case _e:
              return B2(r);
          }
        }
        function G2(r, o) {
          var l = o.length;
          if (!l) return r;
          var f = l - 1;
          return (
            (o[f] = (l > 1 ? '& ' : '') + o[f]),
            (o = o.join(l > 2 ? ', ' : ' ')),
            r.replace(
              J_,
              `{
/* [wrapped with ` +
                o +
                `] */
`,
            )
          );
        }
        function Q2(r) {
          return Le(r) || ao(r) || !!(yd && r && r[yd]);
        }
        function ar(r, o) {
          var l = typeof r;
          return (
            (o = o ?? ge),
            !!o &&
              (l == 'number' || (l != 'symbol' && ug.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < o
          );
        }
        function Ft(r, o, l) {
          if (!ct(l)) return !1;
          var f = typeof o;
          return (
            f == 'number' ? Ut(l) && ar(o, l.length) : f == 'string' && o in l
          )
            ? Ln(l[o], r)
            : !1;
        }
        function kc(r, o) {
          if (Le(r)) return !1;
          var l = typeof r;
          return l == 'number' ||
            l == 'symbol' ||
            l == 'boolean' ||
            r == null ||
            nn(r)
            ? !0
            : X_.test(r) || !Y_.test(r) || (o != null && r in nt(o));
        }
        function J2(r) {
          var o = typeof r;
          return o == 'string' ||
            o == 'number' ||
            o == 'symbol' ||
            o == 'boolean'
            ? r !== '__proto__'
            : r === null;
        }
        function $c(r) {
          var o = ta(r),
            l = v[o];
          if (typeof l != 'function' || !(o in He.prototype)) return !1;
          if (r === l) return !0;
          var f = yc(l);
          return !!f && r === f[0];
        }
        function ey(r) {
          return !!vd && vd in r;
        }
        var ty = Ii ? lr : Hc;
        function Vs(r) {
          var o = r && r.constructor,
            l = (typeof o == 'function' && o.prototype) || No;
          return r === l;
        }
        function vp(r) {
          return r === r && !ct(r);
        }
        function _p(r, o) {
          return function (l) {
            return l == null ? !1 : l[r] === o && (o !== n || r in nt(l));
          };
        }
        function ny(r) {
          var o = aa(r, function (f) {
              return l.size === h && l.clear(), f;
            }),
            l = o.cache;
          return o;
        }
        function ry(r, o) {
          var l = r[1],
            f = o[1],
            p = l | f,
            g = p < (L | O | q),
            b =
              (f == q && l == P) ||
              (f == q && l == z && r[7].length <= o[8]) ||
              (f == (q | z) && o[7].length <= o[8] && l == P);
          if (!(g || b)) return r;
          f & L && ((r[2] = o[2]), (p |= l & L ? 0 : V));
          var C = o[3];
          if (C) {
            var A = r[3];
            (r[3] = A ? Qd(A, C, o[4]) : C), (r[4] = A ? Sr(r[3], _) : o[4]);
          }
          return (
            (C = o[5]),
            C &&
              ((A = r[5]),
              (r[5] = A ? Jd(A, C, o[6]) : C),
              (r[6] = A ? Sr(r[5], _) : o[6])),
            (C = o[7]),
            C && (r[7] = C),
            f & q && (r[8] = r[8] == null ? o[8] : It(r[8], o[8])),
            r[9] == null && (r[9] = o[9]),
            (r[0] = o[0]),
            (r[1] = p),
            r
          );
        }
        function oy(r) {
          var o = [];
          if (r != null) for (var l in nt(r)) o.push(l);
          return o;
        }
        function sy(r) {
          return Li.call(r);
        }
        function gp(r, o, l) {
          return (
            (o = mt(o === n ? r.length - 1 : o, 0)),
            function () {
              for (
                var f = arguments, p = -1, g = mt(f.length - o, 0), b = F(g);
                ++p < g;

              )
                b[p] = f[o + p];
              p = -1;
              for (var C = F(o + 1); ++p < o; ) C[p] = f[p];
              return (C[o] = l(b)), Jt(r, this, C);
            }
          );
        }
        function mp(r, o) {
          return o.length < 2 ? r : oo(r, wn(o, 0, -1));
        }
        function iy(r, o) {
          for (var l = r.length, f = It(o.length, l), p = qt(r); f--; ) {
            var g = o[f];
            r[f] = ar(g, l) ? p[g] : n;
          }
          return r;
        }
        function xc(r, o) {
          if (
            !(o === 'constructor' && typeof r[o] == 'function') &&
            o != '__proto__'
          )
            return r[o];
        }
        var yp = wp(jd),
          Fs =
            wm ||
            function (r, o) {
              return Pt.setTimeout(r, o);
            },
          Cc = wp(E2);
        function bp(r, o, l) {
          var f = o + '';
          return Cc(r, G2(f, ay(Y2(f), l)));
        }
        function wp(r) {
          var o = 0,
            l = 0;
          return function () {
            var f = Cm(),
              p = we - (f - l);
            if (((l = f), p > 0)) {
              if (++o >= J) return arguments[0];
            } else o = 0;
            return r.apply(n, arguments);
          };
        }
        function ra(r, o) {
          var l = -1,
            f = r.length,
            p = f - 1;
          for (o = o === n ? f : o; ++l < o; ) {
            var g = ac(l, p),
              b = r[g];
            (r[g] = r[l]), (r[l] = b);
          }
          return (r.length = o), r;
        }
        var kp = ny(function (r) {
          var o = [];
          return (
            r.charCodeAt(0) === 46 && o.push(''),
            r.replace(Z_, function (l, f, p, g) {
              o.push(p ? g.replace(og, '$1') : f || l);
            }),
            o
          );
        });
        function Kn(r) {
          if (typeof r == 'string' || nn(r)) return r;
          var o = r + '';
          return o == '0' && 1 / r == -Ie ? '-0' : o;
        }
        function io(r) {
          if (r != null) {
            try {
              return Mi.call(r);
            } catch {}
            try {
              return r + '';
            } catch {}
          }
          return '';
        }
        function ay(r, o) {
          return (
            gn(Tl, function (l) {
              var f = '_.' + l[0];
              o & l[1] && !Si(r, f) && r.push(f);
            }),
            r.sort()
          );
        }
        function $p(r) {
          if (r instanceof He) return r.clone();
          var o = new yn(r.__wrapped__, r.__chain__);
          return (
            (o.__actions__ = qt(r.__actions__)),
            (o.__index__ = r.__index__),
            (o.__values__ = r.__values__),
            o
          );
        }
        function ly(r, o, l) {
          (l ? Ft(r, o, l) : o === n) ? (o = 1) : (o = mt(Oe(o), 0));
          var f = r == null ? 0 : r.length;
          if (!f || o < 1) return [];
          for (var p = 0, g = 0, b = F(Ni(f / o)); p < f; )
            b[g++] = wn(r, p, (p += o));
          return b;
        }
        function cy(r) {
          for (
            var o = -1, l = r == null ? 0 : r.length, f = 0, p = [];
            ++o < l;

          ) {
            var g = r[o];
            g && (p[f++] = g);
          }
          return p;
        }
        function uy() {
          var r = arguments.length;
          if (!r) return [];
          for (var o = F(r - 1), l = arguments[0], f = r; f--; )
            o[f - 1] = arguments[f];
          return Pr(Le(l) ? qt(l) : [l], St(o, 1));
        }
        var fy = Fe(function (r, o) {
            return pt(r) ? Is(r, St(o, 1, pt, !0)) : [];
          }),
          dy = Fe(function (r, o) {
            var l = kn(o);
            return (
              pt(l) && (l = n), pt(r) ? Is(r, St(o, 1, pt, !0), xe(l, 2)) : []
            );
          }),
          py = Fe(function (r, o) {
            var l = kn(o);
            return pt(l) && (l = n), pt(r) ? Is(r, St(o, 1, pt, !0), n, l) : [];
          });
        function hy(r, o, l) {
          var f = r == null ? 0 : r.length;
          return f
            ? ((o = l || o === n ? 1 : Oe(o)), wn(r, o < 0 ? 0 : o, f))
            : [];
        }
        function vy(r, o, l) {
          var f = r == null ? 0 : r.length;
          return f
            ? ((o = l || o === n ? 1 : Oe(o)),
              (o = f - o),
              wn(r, 0, o < 0 ? 0 : o))
            : [];
        }
        function _y(r, o) {
          return r && r.length ? Xi(r, xe(o, 3), !0, !0) : [];
        }
        function gy(r, o) {
          return r && r.length ? Xi(r, xe(o, 3), !0) : [];
        }
        function my(r, o, l, f) {
          var p = r == null ? 0 : r.length;
          return p
            ? (l && typeof l != 'number' && Ft(r, o, l) && ((l = 0), (f = p)),
              u2(r, o, l, f))
            : [];
        }
        function xp(r, o, l) {
          var f = r == null ? 0 : r.length;
          if (!f) return -1;
          var p = l == null ? 0 : Oe(l);
          return p < 0 && (p = mt(f + p, 0)), Ti(r, xe(o, 3), p);
        }
        function Cp(r, o, l) {
          var f = r == null ? 0 : r.length;
          if (!f) return -1;
          var p = f - 1;
          return (
            l !== n && ((p = Oe(l)), (p = l < 0 ? mt(f + p, 0) : It(p, f - 1))),
            Ti(r, xe(o, 3), p, !0)
          );
        }
        function Pp(r) {
          var o = r == null ? 0 : r.length;
          return o ? St(r, 1) : [];
        }
        function yy(r) {
          var o = r == null ? 0 : r.length;
          return o ? St(r, Ie) : [];
        }
        function by(r, o) {
          var l = r == null ? 0 : r.length;
          return l ? ((o = o === n ? 1 : Oe(o)), St(r, o)) : [];
        }
        function wy(r) {
          for (var o = -1, l = r == null ? 0 : r.length, f = {}; ++o < l; ) {
            var p = r[o];
            f[p[0]] = p[1];
          }
          return f;
        }
        function Sp(r) {
          return r && r.length ? r[0] : n;
        }
        function ky(r, o, l) {
          var f = r == null ? 0 : r.length;
          if (!f) return -1;
          var p = l == null ? 0 : Oe(l);
          return p < 0 && (p = mt(f + p, 0)), Bo(r, o, p);
        }
        function $y(r) {
          var o = r == null ? 0 : r.length;
          return o ? wn(r, 0, -1) : [];
        }
        var xy = Fe(function (r) {
            var o = at(r, dc);
            return o.length && o[0] === r[0] ? nc(o) : [];
          }),
          Cy = Fe(function (r) {
            var o = kn(r),
              l = at(r, dc);
            return (
              o === kn(l) ? (o = n) : l.pop(),
              l.length && l[0] === r[0] ? nc(l, xe(o, 2)) : []
            );
          }),
          Py = Fe(function (r) {
            var o = kn(r),
              l = at(r, dc);
            return (
              (o = typeof o == 'function' ? o : n),
              o && l.pop(),
              l.length && l[0] === r[0] ? nc(l, n, o) : []
            );
          });
        function Sy(r, o) {
          return r == null ? '' : $m.call(r, o);
        }
        function kn(r) {
          var o = r == null ? 0 : r.length;
          return o ? r[o - 1] : n;
        }
        function Ty(r, o, l) {
          var f = r == null ? 0 : r.length;
          if (!f) return -1;
          var p = f;
          return (
            l !== n && ((p = Oe(l)), (p = p < 0 ? mt(f + p, 0) : It(p, f - 1))),
            o === o ? am(r, o, p) : Ti(r, ad, p, !0)
          );
        }
        function Ey(r, o) {
          return r && r.length ? Rd(r, Oe(o)) : n;
        }
        var Ay = Fe(Tp);
        function Tp(r, o) {
          return r && r.length && o && o.length ? ic(r, o) : r;
        }
        function Iy(r, o, l) {
          return r && r.length && o && o.length ? ic(r, o, xe(l, 2)) : r;
        }
        function My(r, o, l) {
          return r && r.length && o && o.length ? ic(r, o, n, l) : r;
        }
        var Ly = ir(function (r, o) {
          var l = r == null ? 0 : r.length,
            f = Ql(r, o);
          return (
            zd(
              r,
              at(o, function (p) {
                return ar(p, l) ? +p : p;
              }).sort(Gd),
            ),
            f
          );
        });
        function Oy(r, o) {
          var l = [];
          if (!(r && r.length)) return l;
          var f = -1,
            p = [],
            g = r.length;
          for (o = xe(o, 3); ++f < g; ) {
            var b = r[f];
            o(b, f, r) && (l.push(b), p.push(f));
          }
          return zd(r, p), l;
        }
        function Pc(r) {
          return r == null ? r : Sm.call(r);
        }
        function By(r, o, l) {
          var f = r == null ? 0 : r.length;
          return f
            ? (l && typeof l != 'number' && Ft(r, o, l)
                ? ((o = 0), (l = f))
                : ((o = o == null ? 0 : Oe(o)), (l = l === n ? f : Oe(l))),
              wn(r, o, l))
            : [];
        }
        function Vy(r, o) {
          return Yi(r, o);
        }
        function Fy(r, o, l) {
          return cc(r, o, xe(l, 2));
        }
        function Ry(r, o) {
          var l = r == null ? 0 : r.length;
          if (l) {
            var f = Yi(r, o);
            if (f < l && Ln(r[f], o)) return f;
          }
          return -1;
        }
        function Ny(r, o) {
          return Yi(r, o, !0);
        }
        function Hy(r, o, l) {
          return cc(r, o, xe(l, 2), !0);
        }
        function zy(r, o) {
          var l = r == null ? 0 : r.length;
          if (l) {
            var f = Yi(r, o, !0) - 1;
            if (Ln(r[f], o)) return f;
          }
          return -1;
        }
        function jy(r) {
          return r && r.length ? Dd(r) : [];
        }
        function Dy(r, o) {
          return r && r.length ? Dd(r, xe(o, 2)) : [];
        }
        function qy(r) {
          var o = r == null ? 0 : r.length;
          return o ? wn(r, 1, o) : [];
        }
        function Uy(r, o, l) {
          return r && r.length
            ? ((o = l || o === n ? 1 : Oe(o)), wn(r, 0, o < 0 ? 0 : o))
            : [];
        }
        function Wy(r, o, l) {
          var f = r == null ? 0 : r.length;
          return f
            ? ((o = l || o === n ? 1 : Oe(o)),
              (o = f - o),
              wn(r, o < 0 ? 0 : o, f))
            : [];
        }
        function Ky(r, o) {
          return r && r.length ? Xi(r, xe(o, 3), !1, !0) : [];
        }
        function Yy(r, o) {
          return r && r.length ? Xi(r, xe(o, 3)) : [];
        }
        var Xy = Fe(function (r) {
            return Ar(St(r, 1, pt, !0));
          }),
          Zy = Fe(function (r) {
            var o = kn(r);
            return pt(o) && (o = n), Ar(St(r, 1, pt, !0), xe(o, 2));
          }),
          Gy = Fe(function (r) {
            var o = kn(r);
            return (
              (o = typeof o == 'function' ? o : n), Ar(St(r, 1, pt, !0), n, o)
            );
          });
        function Qy(r) {
          return r && r.length ? Ar(r) : [];
        }
        function Jy(r, o) {
          return r && r.length ? Ar(r, xe(o, 2)) : [];
        }
        function e3(r, o) {
          return (
            (o = typeof o == 'function' ? o : n),
            r && r.length ? Ar(r, n, o) : []
          );
        }
        function Sc(r) {
          if (!(r && r.length)) return [];
          var o = 0;
          return (
            (r = Cr(r, function (l) {
              if (pt(l)) return (o = mt(l.length, o)), !0;
            })),
            ql(o, function (l) {
              return at(r, zl(l));
            })
          );
        }
        function Ep(r, o) {
          if (!(r && r.length)) return [];
          var l = Sc(r);
          return o == null
            ? l
            : at(l, function (f) {
                return Jt(o, n, f);
              });
        }
        var t3 = Fe(function (r, o) {
            return pt(r) ? Is(r, o) : [];
          }),
          n3 = Fe(function (r) {
            return fc(Cr(r, pt));
          }),
          r3 = Fe(function (r) {
            var o = kn(r);
            return pt(o) && (o = n), fc(Cr(r, pt), xe(o, 2));
          }),
          o3 = Fe(function (r) {
            var o = kn(r);
            return (o = typeof o == 'function' ? o : n), fc(Cr(r, pt), n, o);
          }),
          s3 = Fe(Sc);
        function i3(r, o) {
          return Kd(r || [], o || [], As);
        }
        function a3(r, o) {
          return Kd(r || [], o || [], Os);
        }
        var l3 = Fe(function (r) {
          var o = r.length,
            l = o > 1 ? r[o - 1] : n;
          return (l = typeof l == 'function' ? (r.pop(), l) : n), Ep(r, l);
        });
        function Ap(r) {
          var o = v(r);
          return (o.__chain__ = !0), o;
        }
        function c3(r, o) {
          return o(r), r;
        }
        function oa(r, o) {
          return o(r);
        }
        var u3 = ir(function (r) {
          var o = r.length,
            l = o ? r[0] : 0,
            f = this.__wrapped__,
            p = function (g) {
              return Ql(g, r);
            };
          return o > 1 ||
            this.__actions__.length ||
            !(f instanceof He) ||
            !ar(l)
            ? this.thru(p)
            : ((f = f.slice(l, +l + (o ? 1 : 0))),
              f.__actions__.push({ func: oa, args: [p], thisArg: n }),
              new yn(f, this.__chain__).thru(function (g) {
                return o && !g.length && g.push(n), g;
              }));
        });
        function f3() {
          return Ap(this);
        }
        function d3() {
          return new yn(this.value(), this.__chain__);
        }
        function p3() {
          this.__values__ === n && (this.__values__ = qp(this.value()));
          var r = this.__index__ >= this.__values__.length,
            o = r ? n : this.__values__[this.__index__++];
          return { done: r, value: o };
        }
        function h3() {
          return this;
        }
        function v3(r) {
          for (var o, l = this; l instanceof Di; ) {
            var f = $p(l);
            (f.__index__ = 0),
              (f.__values__ = n),
              o ? (p.__wrapped__ = f) : (o = f);
            var p = f;
            l = l.__wrapped__;
          }
          return (p.__wrapped__ = r), o;
        }
        function _3() {
          var r = this.__wrapped__;
          if (r instanceof He) {
            var o = r;
            return (
              this.__actions__.length && (o = new He(this)),
              (o = o.reverse()),
              o.__actions__.push({ func: oa, args: [Pc], thisArg: n }),
              new yn(o, this.__chain__)
            );
          }
          return this.thru(Pc);
        }
        function g3() {
          return Wd(this.__wrapped__, this.__actions__);
        }
        var m3 = Zi(function (r, o, l) {
          Qe.call(r, l) ? ++r[l] : or(r, l, 1);
        });
        function y3(r, o, l) {
          var f = Le(r) ? sd : c2;
          return l && Ft(r, o, l) && (o = n), f(r, xe(o, 3));
        }
        function b3(r, o) {
          var l = Le(r) ? Cr : Ed;
          return l(r, xe(o, 3));
        }
        var w3 = rp(xp),
          k3 = rp(Cp);
        function $3(r, o) {
          return St(sa(r, o), 1);
        }
        function x3(r, o) {
          return St(sa(r, o), Ie);
        }
        function C3(r, o, l) {
          return (l = l === n ? 1 : Oe(l)), St(sa(r, o), l);
        }
        function Ip(r, o) {
          var l = Le(r) ? gn : Er;
          return l(r, xe(o, 3));
        }
        function Mp(r, o) {
          var l = Le(r) ? qg : Td;
          return l(r, xe(o, 3));
        }
        var P3 = Zi(function (r, o, l) {
          Qe.call(r, l) ? r[l].push(o) : or(r, l, [o]);
        });
        function S3(r, o, l, f) {
          (r = Ut(r) ? r : Ko(r)), (l = l && !f ? Oe(l) : 0);
          var p = r.length;
          return (
            l < 0 && (l = mt(p + l, 0)),
            ua(r) ? l <= p && r.indexOf(o, l) > -1 : !!p && Bo(r, o, l) > -1
          );
        }
        var T3 = Fe(function (r, o, l) {
            var f = -1,
              p = typeof o == 'function',
              g = Ut(r) ? F(r.length) : [];
            return (
              Er(r, function (b) {
                g[++f] = p ? Jt(o, b, l) : Ms(b, o, l);
              }),
              g
            );
          }),
          E3 = Zi(function (r, o, l) {
            or(r, l, o);
          });
        function sa(r, o) {
          var l = Le(r) ? at : Bd;
          return l(r, xe(o, 3));
        }
        function A3(r, o, l, f) {
          return r == null
            ? []
            : (Le(o) || (o = o == null ? [] : [o]),
              (l = f ? n : l),
              Le(l) || (l = l == null ? [] : [l]),
              Nd(r, o, l));
        }
        var I3 = Zi(
          function (r, o, l) {
            r[l ? 0 : 1].push(o);
          },
          function () {
            return [[], []];
          },
        );
        function M3(r, o, l) {
          var f = Le(r) ? Nl : cd,
            p = arguments.length < 3;
          return f(r, xe(o, 4), l, p, Er);
        }
        function L3(r, o, l) {
          var f = Le(r) ? Ug : cd,
            p = arguments.length < 3;
          return f(r, xe(o, 4), l, p, Td);
        }
        function O3(r, o) {
          var l = Le(r) ? Cr : Ed;
          return l(r, la(xe(o, 3)));
        }
        function B3(r) {
          var o = Le(r) ? xd : S2;
          return o(r);
        }
        function V3(r, o, l) {
          (l ? Ft(r, o, l) : o === n) ? (o = 1) : (o = Oe(o));
          var f = Le(r) ? o2 : T2;
          return f(r, o);
        }
        function F3(r) {
          var o = Le(r) ? s2 : A2;
          return o(r);
        }
        function R3(r) {
          if (r == null) return 0;
          if (Ut(r)) return ua(r) ? Fo(r) : r.length;
          var o = Mt(r);
          return o == H || o == Z ? r.size : oc(r).length;
        }
        function N3(r, o, l) {
          var f = Le(r) ? Hl : I2;
          return l && Ft(r, o, l) && (o = n), f(r, xe(o, 3));
        }
        var H3 = Fe(function (r, o) {
            if (r == null) return [];
            var l = o.length;
            return (
              l > 1 && Ft(r, o[0], o[1])
                ? (o = [])
                : l > 2 && Ft(o[0], o[1], o[2]) && (o = [o[0]]),
              Nd(r, St(o, 1), [])
            );
          }),
          ia =
            bm ||
            function () {
              return Pt.Date.now();
            };
        function z3(r, o) {
          if (typeof o != 'function') throw new mn(c);
          return (
            (r = Oe(r)),
            function () {
              if (--r < 1) return o.apply(this, arguments);
            }
          );
        }
        function Lp(r, o, l) {
          return (
            (o = l ? n : o),
            (o = r && o == null ? r.length : o),
            sr(r, q, n, n, n, n, o)
          );
        }
        function Op(r, o) {
          var l;
          if (typeof o != 'function') throw new mn(c);
          return (
            (r = Oe(r)),
            function () {
              return (
                --r > 0 && (l = o.apply(this, arguments)), r <= 1 && (o = n), l
              );
            }
          );
        }
        var Tc = Fe(function (r, o, l) {
            var f = L;
            if (l.length) {
              var p = Sr(l, Uo(Tc));
              f |= B;
            }
            return sr(r, f, o, l, p);
          }),
          Bp = Fe(function (r, o, l) {
            var f = L | O;
            if (l.length) {
              var p = Sr(l, Uo(Bp));
              f |= B;
            }
            return sr(o, f, r, l, p);
          });
        function Vp(r, o, l) {
          o = l ? n : o;
          var f = sr(r, P, n, n, n, n, n, o);
          return (f.placeholder = Vp.placeholder), f;
        }
        function Fp(r, o, l) {
          o = l ? n : o;
          var f = sr(r, w, n, n, n, n, n, o);
          return (f.placeholder = Fp.placeholder), f;
        }
        function Rp(r, o, l) {
          var f,
            p,
            g,
            b,
            C,
            A,
            U = 0,
            W = !1,
            G = !1,
            le = !0;
          if (typeof r != 'function') throw new mn(c);
          (o = $n(o) || 0),
            ct(l) &&
              ((W = !!l.leading),
              (G = 'maxWait' in l),
              (g = G ? mt($n(l.maxWait) || 0, o) : g),
              (le = 'trailing' in l ? !!l.trailing : le));
          function me(ht) {
            var On = f,
              ur = p;
            return (f = p = n), (U = ht), (b = r.apply(ur, On)), b;
          }
          function Pe(ht) {
            return (U = ht), (C = Fs(Ne, o)), W ? me(ht) : b;
          }
          function Ve(ht) {
            var On = ht - A,
              ur = ht - U,
              rh = o - On;
            return G ? It(rh, g - ur) : rh;
          }
          function Se(ht) {
            var On = ht - A,
              ur = ht - U;
            return A === n || On >= o || On < 0 || (G && ur >= g);
          }
          function Ne() {
            var ht = ia();
            if (Se(ht)) return De(ht);
            C = Fs(Ne, Ve(ht));
          }
          function De(ht) {
            return (C = n), le && f ? me(ht) : ((f = p = n), b);
          }
          function rn() {
            C !== n && Yd(C), (U = 0), (f = A = p = C = n);
          }
          function Rt() {
            return C === n ? b : De(ia());
          }
          function on() {
            var ht = ia(),
              On = Se(ht);
            if (((f = arguments), (p = this), (A = ht), On)) {
              if (C === n) return Pe(A);
              if (G) return Yd(C), (C = Fs(Ne, o)), me(A);
            }
            return C === n && (C = Fs(Ne, o)), b;
          }
          return (on.cancel = rn), (on.flush = Rt), on;
        }
        var j3 = Fe(function (r, o) {
            return Sd(r, 1, o);
          }),
          D3 = Fe(function (r, o, l) {
            return Sd(r, $n(o) || 0, l);
          });
        function q3(r) {
          return sr(r, se);
        }
        function aa(r, o) {
          if (typeof r != 'function' || (o != null && typeof o != 'function'))
            throw new mn(c);
          var l = function () {
            var f = arguments,
              p = o ? o.apply(this, f) : f[0],
              g = l.cache;
            if (g.has(p)) return g.get(p);
            var b = r.apply(this, f);
            return (l.cache = g.set(p, b) || g), b;
          };
          return (l.cache = new (aa.Cache || rr)()), l;
        }
        aa.Cache = rr;
        function la(r) {
          if (typeof r != 'function') throw new mn(c);
          return function () {
            var o = arguments;
            switch (o.length) {
              case 0:
                return !r.call(this);
              case 1:
                return !r.call(this, o[0]);
              case 2:
                return !r.call(this, o[0], o[1]);
              case 3:
                return !r.call(this, o[0], o[1], o[2]);
            }
            return !r.apply(this, o);
          };
        }
        function U3(r) {
          return Op(2, r);
        }
        var W3 = M2(function (r, o) {
            o =
              o.length == 1 && Le(o[0])
                ? at(o[0], en(xe()))
                : at(St(o, 1), en(xe()));
            var l = o.length;
            return Fe(function (f) {
              for (var p = -1, g = It(f.length, l); ++p < g; )
                f[p] = o[p].call(this, f[p]);
              return Jt(r, this, f);
            });
          }),
          Ec = Fe(function (r, o) {
            var l = Sr(o, Uo(Ec));
            return sr(r, B, n, o, l);
          }),
          Np = Fe(function (r, o) {
            var l = Sr(o, Uo(Np));
            return sr(r, N, n, o, l);
          }),
          K3 = ir(function (r, o) {
            return sr(r, z, n, n, n, o);
          });
        function Y3(r, o) {
          if (typeof r != 'function') throw new mn(c);
          return (o = o === n ? o : Oe(o)), Fe(r, o);
        }
        function X3(r, o) {
          if (typeof r != 'function') throw new mn(c);
          return (
            (o = o == null ? 0 : mt(Oe(o), 0)),
            Fe(function (l) {
              var f = l[o],
                p = Mr(l, 0, o);
              return f && Pr(p, f), Jt(r, this, p);
            })
          );
        }
        function Z3(r, o, l) {
          var f = !0,
            p = !0;
          if (typeof r != 'function') throw new mn(c);
          return (
            ct(l) &&
              ((f = 'leading' in l ? !!l.leading : f),
              (p = 'trailing' in l ? !!l.trailing : p)),
            Rp(r, o, { leading: f, maxWait: o, trailing: p })
          );
        }
        function G3(r) {
          return Lp(r, 1);
        }
        function Q3(r, o) {
          return Ec(pc(o), r);
        }
        function J3() {
          if (!arguments.length) return [];
          var r = arguments[0];
          return Le(r) ? r : [r];
        }
        function e6(r) {
          return bn(r, S);
        }
        function t6(r, o) {
          return (o = typeof o == 'function' ? o : n), bn(r, S, o);
        }
        function n6(r) {
          return bn(r, m | S);
        }
        function r6(r, o) {
          return (o = typeof o == 'function' ? o : n), bn(r, m | S, o);
        }
        function o6(r, o) {
          return o == null || Pd(r, o, $t(o));
        }
        function Ln(r, o) {
          return r === o || (r !== r && o !== o);
        }
        var s6 = ea(tc),
          i6 = ea(function (r, o) {
            return r >= o;
          }),
          ao = Md(
            (function () {
              return arguments;
            })(),
          )
            ? Md
            : function (r) {
                return ft(r) && Qe.call(r, 'callee') && !md.call(r, 'callee');
              },
          Le = F.isArray,
          a6 = Jf ? en(Jf) : v2;
        function Ut(r) {
          return r != null && ca(r.length) && !lr(r);
        }
        function pt(r) {
          return ft(r) && Ut(r);
        }
        function l6(r) {
          return r === !0 || r === !1 || (ft(r) && Vt(r) == $r);
        }
        var Lr = km || Hc,
          c6 = ed ? en(ed) : _2;
        function u6(r) {
          return ft(r) && r.nodeType === 1 && !Rs(r);
        }
        function f6(r) {
          if (r == null) return !0;
          if (
            Ut(r) &&
            (Le(r) ||
              typeof r == 'string' ||
              typeof r.splice == 'function' ||
              Lr(r) ||
              Wo(r) ||
              ao(r))
          )
            return !r.length;
          var o = Mt(r);
          if (o == H || o == Z) return !r.size;
          if (Vs(r)) return !oc(r).length;
          for (var l in r) if (Qe.call(r, l)) return !1;
          return !0;
        }
        function d6(r, o) {
          return Ls(r, o);
        }
        function p6(r, o, l) {
          l = typeof l == 'function' ? l : n;
          var f = l ? l(r, o) : n;
          return f === n ? Ls(r, o, n, l) : !!f;
        }
        function Ac(r) {
          if (!ft(r)) return !1;
          var o = Vt(r);
          return (
            o == xr ||
            o == $s ||
            (typeof r.message == 'string' &&
              typeof r.name == 'string' &&
              !Rs(r))
          );
        }
        function h6(r) {
          return typeof r == 'number' && bd(r);
        }
        function lr(r) {
          if (!ct(r)) return !1;
          var o = Vt(r);
          return o == $ || o == T || o == Ao || o == oe;
        }
        function Hp(r) {
          return typeof r == 'number' && r == Oe(r);
        }
        function ca(r) {
          return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= ge;
        }
        function ct(r) {
          var o = typeof r;
          return r != null && (o == 'object' || o == 'function');
        }
        function ft(r) {
          return r != null && typeof r == 'object';
        }
        var zp = td ? en(td) : m2;
        function v6(r, o) {
          return r === o || rc(r, o, bc(o));
        }
        function _6(r, o, l) {
          return (l = typeof l == 'function' ? l : n), rc(r, o, bc(o), l);
        }
        function g6(r) {
          return jp(r) && r != +r;
        }
        function m6(r) {
          if (ty(r)) throw new Me(a);
          return Ld(r);
        }
        function y6(r) {
          return r === null;
        }
        function b6(r) {
          return r == null;
        }
        function jp(r) {
          return typeof r == 'number' || (ft(r) && Vt(r) == X);
        }
        function Rs(r) {
          if (!ft(r) || Vt(r) != ee) return !1;
          var o = Vi(r);
          if (o === null) return !0;
          var l = Qe.call(o, 'constructor') && o.constructor;
          return typeof l == 'function' && l instanceof l && Mi.call(l) == _m;
        }
        var Ic = nd ? en(nd) : y2;
        function w6(r) {
          return Hp(r) && r >= -ge && r <= ge;
        }
        var Dp = rd ? en(rd) : b2;
        function ua(r) {
          return typeof r == 'string' || (!Le(r) && ft(r) && Vt(r) == ye);
        }
        function nn(r) {
          return typeof r == 'symbol' || (ft(r) && Vt(r) == _e);
        }
        var Wo = od ? en(od) : w2;
        function k6(r) {
          return r === n;
        }
        function $6(r) {
          return ft(r) && Mt(r) == Ee;
        }
        function x6(r) {
          return ft(r) && Vt(r) == Re;
        }
        var C6 = ea(sc),
          P6 = ea(function (r, o) {
            return r <= o;
          });
        function qp(r) {
          if (!r) return [];
          if (Ut(r)) return ua(r) ? In(r) : qt(r);
          if (Cs && r[Cs]) return om(r[Cs]());
          var o = Mt(r),
            l = o == H ? Wl : o == Z ? Ei : Ko;
          return l(r);
        }
        function cr(r) {
          if (!r) return r === 0 ? r : 0;
          if (((r = $n(r)), r === Ie || r === -Ie)) {
            var o = r < 0 ? -1 : 1;
            return o * An;
          }
          return r === r ? r : 0;
        }
        function Oe(r) {
          var o = cr(r),
            l = o % 1;
          return o === o ? (l ? o - l : o) : 0;
        }
        function Up(r) {
          return r ? ro(Oe(r), 0, kt) : 0;
        }
        function $n(r) {
          if (typeof r == 'number') return r;
          if (nn(r)) return er;
          if (ct(r)) {
            var o = typeof r.valueOf == 'function' ? r.valueOf() : r;
            r = ct(o) ? o + '' : o;
          }
          if (typeof r != 'string') return r === 0 ? r : +r;
          r = ud(r);
          var l = ag.test(r);
          return l || cg.test(r)
            ? zg(r.slice(2), l ? 2 : 8)
            : ig.test(r)
              ? er
              : +r;
        }
        function Wp(r) {
          return Wn(r, Wt(r));
        }
        function S6(r) {
          return r ? ro(Oe(r), -ge, ge) : r === 0 ? r : 0;
        }
        function Ze(r) {
          return r == null ? '' : tn(r);
        }
        var T6 = Do(function (r, o) {
            if (Vs(o) || Ut(o)) {
              Wn(o, $t(o), r);
              return;
            }
            for (var l in o) Qe.call(o, l) && As(r, l, o[l]);
          }),
          Kp = Do(function (r, o) {
            Wn(o, Wt(o), r);
          }),
          fa = Do(function (r, o, l, f) {
            Wn(o, Wt(o), r, f);
          }),
          E6 = Do(function (r, o, l, f) {
            Wn(o, $t(o), r, f);
          }),
          A6 = ir(Ql);
        function I6(r, o) {
          var l = jo(r);
          return o == null ? l : Cd(l, o);
        }
        var M6 = Fe(function (r, o) {
            r = nt(r);
            var l = -1,
              f = o.length,
              p = f > 2 ? o[2] : n;
            for (p && Ft(o[0], o[1], p) && (f = 1); ++l < f; )
              for (var g = o[l], b = Wt(g), C = -1, A = b.length; ++C < A; ) {
                var U = b[C],
                  W = r[U];
                (W === n || (Ln(W, No[U]) && !Qe.call(r, U))) && (r[U] = g[U]);
              }
            return r;
          }),
          L6 = Fe(function (r) {
            return r.push(n, up), Jt(Yp, n, r);
          });
        function O6(r, o) {
          return id(r, xe(o, 3), Un);
        }
        function B6(r, o) {
          return id(r, xe(o, 3), ec);
        }
        function V6(r, o) {
          return r == null ? r : Jl(r, xe(o, 3), Wt);
        }
        function F6(r, o) {
          return r == null ? r : Ad(r, xe(o, 3), Wt);
        }
        function R6(r, o) {
          return r && Un(r, xe(o, 3));
        }
        function N6(r, o) {
          return r && ec(r, xe(o, 3));
        }
        function H6(r) {
          return r == null ? [] : Wi(r, $t(r));
        }
        function z6(r) {
          return r == null ? [] : Wi(r, Wt(r));
        }
        function Mc(r, o, l) {
          var f = r == null ? n : oo(r, o);
          return f === n ? l : f;
        }
        function j6(r, o) {
          return r != null && pp(r, o, f2);
        }
        function Lc(r, o) {
          return r != null && pp(r, o, d2);
        }
        var D6 = sp(function (r, o, l) {
            o != null && typeof o.toString != 'function' && (o = Li.call(o)),
              (r[o] = l);
          }, Bc(Kt)),
          q6 = sp(function (r, o, l) {
            o != null && typeof o.toString != 'function' && (o = Li.call(o)),
              Qe.call(r, o) ? r[o].push(l) : (r[o] = [l]);
          }, xe),
          U6 = Fe(Ms);
        function $t(r) {
          return Ut(r) ? $d(r) : oc(r);
        }
        function Wt(r) {
          return Ut(r) ? $d(r, !0) : k2(r);
        }
        function W6(r, o) {
          var l = {};
          return (
            (o = xe(o, 3)),
            Un(r, function (f, p, g) {
              or(l, o(f, p, g), f);
            }),
            l
          );
        }
        function K6(r, o) {
          var l = {};
          return (
            (o = xe(o, 3)),
            Un(r, function (f, p, g) {
              or(l, p, o(f, p, g));
            }),
            l
          );
        }
        var Y6 = Do(function (r, o, l) {
            Ki(r, o, l);
          }),
          Yp = Do(function (r, o, l, f) {
            Ki(r, o, l, f);
          }),
          X6 = ir(function (r, o) {
            var l = {};
            if (r == null) return l;
            var f = !1;
            (o = at(o, function (g) {
              return (g = Ir(g, r)), f || (f = g.length > 1), g;
            })),
              Wn(r, mc(r), l),
              f && (l = bn(l, m | y | S, D2));
            for (var p = o.length; p--; ) uc(l, o[p]);
            return l;
          });
        function Z6(r, o) {
          return Xp(r, la(xe(o)));
        }
        var G6 = ir(function (r, o) {
          return r == null ? {} : x2(r, o);
        });
        function Xp(r, o) {
          if (r == null) return {};
          var l = at(mc(r), function (f) {
            return [f];
          });
          return (
            (o = xe(o)),
            Hd(r, l, function (f, p) {
              return o(f, p[0]);
            })
          );
        }
        function Q6(r, o, l) {
          o = Ir(o, r);
          var f = -1,
            p = o.length;
          for (p || ((p = 1), (r = n)); ++f < p; ) {
            var g = r == null ? n : r[Kn(o[f])];
            g === n && ((f = p), (g = l)), (r = lr(g) ? g.call(r) : g);
          }
          return r;
        }
        function J6(r, o, l) {
          return r == null ? r : Os(r, o, l);
        }
        function e4(r, o, l, f) {
          return (
            (f = typeof f == 'function' ? f : n), r == null ? r : Os(r, o, l, f)
          );
        }
        var Zp = lp($t),
          Gp = lp(Wt);
        function t4(r, o, l) {
          var f = Le(r),
            p = f || Lr(r) || Wo(r);
          if (((o = xe(o, 4)), l == null)) {
            var g = r && r.constructor;
            p
              ? (l = f ? new g() : [])
              : ct(r)
                ? (l = lr(g) ? jo(Vi(r)) : {})
                : (l = {});
          }
          return (
            (p ? gn : Un)(r, function (b, C, A) {
              return o(l, b, C, A);
            }),
            l
          );
        }
        function n4(r, o) {
          return r == null ? !0 : uc(r, o);
        }
        function r4(r, o, l) {
          return r == null ? r : Ud(r, o, pc(l));
        }
        function o4(r, o, l, f) {
          return (
            (f = typeof f == 'function' ? f : n),
            r == null ? r : Ud(r, o, pc(l), f)
          );
        }
        function Ko(r) {
          return r == null ? [] : Ul(r, $t(r));
        }
        function s4(r) {
          return r == null ? [] : Ul(r, Wt(r));
        }
        function i4(r, o, l) {
          return (
            l === n && ((l = o), (o = n)),
            l !== n && ((l = $n(l)), (l = l === l ? l : 0)),
            o !== n && ((o = $n(o)), (o = o === o ? o : 0)),
            ro($n(r), o, l)
          );
        }
        function a4(r, o, l) {
          return (
            (o = cr(o)),
            l === n ? ((l = o), (o = 0)) : (l = cr(l)),
            (r = $n(r)),
            p2(r, o, l)
          );
        }
        function l4(r, o, l) {
          if (
            (l && typeof l != 'boolean' && Ft(r, o, l) && (o = l = n),
            l === n &&
              (typeof o == 'boolean'
                ? ((l = o), (o = n))
                : typeof r == 'boolean' && ((l = r), (r = n))),
            r === n && o === n
              ? ((r = 0), (o = 1))
              : ((r = cr(r)), o === n ? ((o = r), (r = 0)) : (o = cr(o))),
            r > o)
          ) {
            var f = r;
            (r = o), (o = f);
          }
          if (l || r % 1 || o % 1) {
            var p = wd();
            return It(r + p * (o - r + Hg('1e-' + ((p + '').length - 1))), o);
          }
          return ac(r, o);
        }
        var c4 = qo(function (r, o, l) {
          return (o = o.toLowerCase()), r + (l ? Qp(o) : o);
        });
        function Qp(r) {
          return Oc(Ze(r).toLowerCase());
        }
        function Jp(r) {
          return (r = Ze(r)), r && r.replace(fg, Jg).replace(Ag, '');
        }
        function u4(r, o, l) {
          (r = Ze(r)), (o = tn(o));
          var f = r.length;
          l = l === n ? f : ro(Oe(l), 0, f);
          var p = l;
          return (l -= o.length), l >= 0 && r.slice(l, p) == o;
        }
        function f4(r) {
          return (r = Ze(r)), r && U_.test(r) ? r.replace(Af, em) : r;
        }
        function d4(r) {
          return (r = Ze(r)), r && G_.test(r) ? r.replace(El, '\\$&') : r;
        }
        var p4 = qo(function (r, o, l) {
            return r + (l ? '-' : '') + o.toLowerCase();
          }),
          h4 = qo(function (r, o, l) {
            return r + (l ? ' ' : '') + o.toLowerCase();
          }),
          v4 = np('toLowerCase');
        function _4(r, o, l) {
          (r = Ze(r)), (o = Oe(o));
          var f = o ? Fo(r) : 0;
          if (!o || f >= o) return r;
          var p = (o - f) / 2;
          return Ji(Hi(p), l) + r + Ji(Ni(p), l);
        }
        function g4(r, o, l) {
          (r = Ze(r)), (o = Oe(o));
          var f = o ? Fo(r) : 0;
          return o && f < o ? r + Ji(o - f, l) : r;
        }
        function m4(r, o, l) {
          (r = Ze(r)), (o = Oe(o));
          var f = o ? Fo(r) : 0;
          return o && f < o ? Ji(o - f, l) + r : r;
        }
        function y4(r, o, l) {
          return (
            l || o == null ? (o = 0) : o && (o = +o),
            Pm(Ze(r).replace(Al, ''), o || 0)
          );
        }
        function b4(r, o, l) {
          return (
            (l ? Ft(r, o, l) : o === n) ? (o = 1) : (o = Oe(o)), lc(Ze(r), o)
          );
        }
        function w4() {
          var r = arguments,
            o = Ze(r[0]);
          return r.length < 3 ? o : o.replace(r[1], r[2]);
        }
        var k4 = qo(function (r, o, l) {
          return r + (l ? '_' : '') + o.toLowerCase();
        });
        function $4(r, o, l) {
          return (
            l && typeof l != 'number' && Ft(r, o, l) && (o = l = n),
            (l = l === n ? kt : l >>> 0),
            l
              ? ((r = Ze(r)),
                r &&
                (typeof o == 'string' || (o != null && !Ic(o))) &&
                ((o = tn(o)), !o && Vo(r))
                  ? Mr(In(r), 0, l)
                  : r.split(o, l))
              : []
          );
        }
        var x4 = qo(function (r, o, l) {
          return r + (l ? ' ' : '') + Oc(o);
        });
        function C4(r, o, l) {
          return (
            (r = Ze(r)),
            (l = l == null ? 0 : ro(Oe(l), 0, r.length)),
            (o = tn(o)),
            r.slice(l, l + o.length) == o
          );
        }
        function P4(r, o, l) {
          var f = v.templateSettings;
          l && Ft(r, o, l) && (o = n), (r = Ze(r)), (o = fa({}, o, f, cp));
          var p = fa({}, o.imports, f.imports, cp),
            g = $t(p),
            b = Ul(p, g),
            C,
            A,
            U = 0,
            W = o.interpolate || xi,
            G = "__p += '",
            le = Kl(
              (o.escape || xi).source +
                '|' +
                W.source +
                '|' +
                (W === If ? sg : xi).source +
                '|' +
                (o.evaluate || xi).source +
                '|$',
              'g',
            ),
            me =
              '//# sourceURL=' +
              (Qe.call(o, 'sourceURL')
                ? (o.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++Bg + ']') +
              `
`;
          r.replace(le, function (Se, Ne, De, rn, Rt, on) {
            return (
              De || (De = rn),
              (G += r.slice(U, on).replace(dg, tm)),
              Ne &&
                ((C = !0),
                (G +=
                  `' +
__e(` +
                  Ne +
                  `) +
'`)),
              Rt &&
                ((A = !0),
                (G +=
                  `';
` +
                  Rt +
                  `;
__p += '`)),
              De &&
                (G +=
                  `' +
((__t = (` +
                  De +
                  `)) == null ? '' : __t) +
'`),
              (U = on + Se.length),
              Se
            );
          }),
            (G += `';
`);
          var Pe = Qe.call(o, 'variable') && o.variable;
          if (!Pe)
            G =
              `with (obj) {
` +
              G +
              `
}
`;
          else if (rg.test(Pe)) throw new Me(u);
          (G = (A ? G.replace(z_, '') : G)
            .replace(j_, '$1')
            .replace(D_, '$1;')),
            (G =
              'function(' +
              (Pe || 'obj') +
              `) {
` +
              (Pe
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (C ? ', __e = _.escape' : '') +
              (A
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              G +
              `return __p
}`);
          var Ve = th(function () {
            return Xe(g, me + 'return ' + G).apply(n, b);
          });
          if (((Ve.source = G), Ac(Ve))) throw Ve;
          return Ve;
        }
        function S4(r) {
          return Ze(r).toLowerCase();
        }
        function T4(r) {
          return Ze(r).toUpperCase();
        }
        function E4(r, o, l) {
          if (((r = Ze(r)), r && (l || o === n))) return ud(r);
          if (!r || !(o = tn(o))) return r;
          var f = In(r),
            p = In(o),
            g = fd(f, p),
            b = dd(f, p) + 1;
          return Mr(f, g, b).join('');
        }
        function A4(r, o, l) {
          if (((r = Ze(r)), r && (l || o === n))) return r.slice(0, hd(r) + 1);
          if (!r || !(o = tn(o))) return r;
          var f = In(r),
            p = dd(f, In(o)) + 1;
          return Mr(f, 0, p).join('');
        }
        function I4(r, o, l) {
          if (((r = Ze(r)), r && (l || o === n))) return r.replace(Al, '');
          if (!r || !(o = tn(o))) return r;
          var f = In(r),
            p = fd(f, In(o));
          return Mr(f, p).join('');
        }
        function M4(r, o) {
          var l = ne,
            f = ve;
          if (ct(o)) {
            var p = 'separator' in o ? o.separator : p;
            (l = 'length' in o ? Oe(o.length) : l),
              (f = 'omission' in o ? tn(o.omission) : f);
          }
          r = Ze(r);
          var g = r.length;
          if (Vo(r)) {
            var b = In(r);
            g = b.length;
          }
          if (l >= g) return r;
          var C = l - Fo(f);
          if (C < 1) return f;
          var A = b ? Mr(b, 0, C).join('') : r.slice(0, C);
          if (p === n) return A + f;
          if ((b && (C += A.length - C), Ic(p))) {
            if (r.slice(C).search(p)) {
              var U,
                W = A;
              for (
                p.global || (p = Kl(p.source, Ze(Mf.exec(p)) + 'g')),
                  p.lastIndex = 0;
                (U = p.exec(W));

              )
                var G = U.index;
              A = A.slice(0, G === n ? C : G);
            }
          } else if (r.indexOf(tn(p), C) != C) {
            var le = A.lastIndexOf(p);
            le > -1 && (A = A.slice(0, le));
          }
          return A + f;
        }
        function L4(r) {
          return (r = Ze(r)), r && q_.test(r) ? r.replace(Ef, lm) : r;
        }
        var O4 = qo(function (r, o, l) {
            return r + (l ? ' ' : '') + o.toUpperCase();
          }),
          Oc = np('toUpperCase');
        function eh(r, o, l) {
          return (
            (r = Ze(r)),
            (o = l ? n : o),
            o === n ? (rm(r) ? fm(r) : Yg(r)) : r.match(o) || []
          );
        }
        var th = Fe(function (r, o) {
            try {
              return Jt(r, n, o);
            } catch (l) {
              return Ac(l) ? l : new Me(l);
            }
          }),
          B4 = ir(function (r, o) {
            return (
              gn(o, function (l) {
                (l = Kn(l)), or(r, l, Tc(r[l], r));
              }),
              r
            );
          });
        function V4(r) {
          var o = r == null ? 0 : r.length,
            l = xe();
          return (
            (r = o
              ? at(r, function (f) {
                  if (typeof f[1] != 'function') throw new mn(c);
                  return [l(f[0]), f[1]];
                })
              : []),
            Fe(function (f) {
              for (var p = -1; ++p < o; ) {
                var g = r[p];
                if (Jt(g[0], this, f)) return Jt(g[1], this, f);
              }
            })
          );
        }
        function F4(r) {
          return l2(bn(r, m));
        }
        function Bc(r) {
          return function () {
            return r;
          };
        }
        function R4(r, o) {
          return r == null || r !== r ? o : r;
        }
        var N4 = op(),
          H4 = op(!0);
        function Kt(r) {
          return r;
        }
        function Vc(r) {
          return Od(typeof r == 'function' ? r : bn(r, m));
        }
        function z4(r) {
          return Vd(bn(r, m));
        }
        function j4(r, o) {
          return Fd(r, bn(o, m));
        }
        var D4 = Fe(function (r, o) {
            return function (l) {
              return Ms(l, r, o);
            };
          }),
          q4 = Fe(function (r, o) {
            return function (l) {
              return Ms(r, l, o);
            };
          });
        function Fc(r, o, l) {
          var f = $t(o),
            p = Wi(o, f);
          l == null &&
            !(ct(o) && (p.length || !f.length)) &&
            ((l = o), (o = r), (r = this), (p = Wi(o, $t(o))));
          var g = !(ct(l) && 'chain' in l) || !!l.chain,
            b = lr(r);
          return (
            gn(p, function (C) {
              var A = o[C];
              (r[C] = A),
                b &&
                  (r.prototype[C] = function () {
                    var U = this.__chain__;
                    if (g || U) {
                      var W = r(this.__wrapped__),
                        G = (W.__actions__ = qt(this.__actions__));
                      return (
                        G.push({ func: A, args: arguments, thisArg: r }),
                        (W.__chain__ = U),
                        W
                      );
                    }
                    return A.apply(r, Pr([this.value()], arguments));
                  });
            }),
            r
          );
        }
        function U4() {
          return Pt._ === this && (Pt._ = gm), this;
        }
        function Rc() {}
        function W4(r) {
          return (
            (r = Oe(r)),
            Fe(function (o) {
              return Rd(o, r);
            })
          );
        }
        var K4 = vc(at),
          Y4 = vc(sd),
          X4 = vc(Hl);
        function nh(r) {
          return kc(r) ? zl(Kn(r)) : C2(r);
        }
        function Z4(r) {
          return function (o) {
            return r == null ? n : oo(r, o);
          };
        }
        var G4 = ip(),
          Q4 = ip(!0);
        function Nc() {
          return [];
        }
        function Hc() {
          return !1;
        }
        function J4() {
          return {};
        }
        function eb() {
          return '';
        }
        function tb() {
          return !0;
        }
        function nb(r, o) {
          if (((r = Oe(r)), r < 1 || r > ge)) return [];
          var l = kt,
            f = It(r, kt);
          (o = xe(o)), (r -= kt);
          for (var p = ql(f, o); ++l < r; ) o(l);
          return p;
        }
        function rb(r) {
          return Le(r) ? at(r, Kn) : nn(r) ? [r] : qt(kp(Ze(r)));
        }
        function ob(r) {
          var o = ++vm;
          return Ze(r) + o;
        }
        var sb = Qi(function (r, o) {
            return r + o;
          }, 0),
          ib = _c('ceil'),
          ab = Qi(function (r, o) {
            return r / o;
          }, 1),
          lb = _c('floor');
        function cb(r) {
          return r && r.length ? Ui(r, Kt, tc) : n;
        }
        function ub(r, o) {
          return r && r.length ? Ui(r, xe(o, 2), tc) : n;
        }
        function fb(r) {
          return ld(r, Kt);
        }
        function db(r, o) {
          return ld(r, xe(o, 2));
        }
        function pb(r) {
          return r && r.length ? Ui(r, Kt, sc) : n;
        }
        function hb(r, o) {
          return r && r.length ? Ui(r, xe(o, 2), sc) : n;
        }
        var vb = Qi(function (r, o) {
            return r * o;
          }, 1),
          _b = _c('round'),
          gb = Qi(function (r, o) {
            return r - o;
          }, 0);
        function mb(r) {
          return r && r.length ? Dl(r, Kt) : 0;
        }
        function yb(r, o) {
          return r && r.length ? Dl(r, xe(o, 2)) : 0;
        }
        return (
          (v.after = z3),
          (v.ary = Lp),
          (v.assign = T6),
          (v.assignIn = Kp),
          (v.assignInWith = fa),
          (v.assignWith = E6),
          (v.at = A6),
          (v.before = Op),
          (v.bind = Tc),
          (v.bindAll = B4),
          (v.bindKey = Bp),
          (v.castArray = J3),
          (v.chain = Ap),
          (v.chunk = ly),
          (v.compact = cy),
          (v.concat = uy),
          (v.cond = V4),
          (v.conforms = F4),
          (v.constant = Bc),
          (v.countBy = m3),
          (v.create = I6),
          (v.curry = Vp),
          (v.curryRight = Fp),
          (v.debounce = Rp),
          (v.defaults = M6),
          (v.defaultsDeep = L6),
          (v.defer = j3),
          (v.delay = D3),
          (v.difference = fy),
          (v.differenceBy = dy),
          (v.differenceWith = py),
          (v.drop = hy),
          (v.dropRight = vy),
          (v.dropRightWhile = _y),
          (v.dropWhile = gy),
          (v.fill = my),
          (v.filter = b3),
          (v.flatMap = $3),
          (v.flatMapDeep = x3),
          (v.flatMapDepth = C3),
          (v.flatten = Pp),
          (v.flattenDeep = yy),
          (v.flattenDepth = by),
          (v.flip = q3),
          (v.flow = N4),
          (v.flowRight = H4),
          (v.fromPairs = wy),
          (v.functions = H6),
          (v.functionsIn = z6),
          (v.groupBy = P3),
          (v.initial = $y),
          (v.intersection = xy),
          (v.intersectionBy = Cy),
          (v.intersectionWith = Py),
          (v.invert = D6),
          (v.invertBy = q6),
          (v.invokeMap = T3),
          (v.iteratee = Vc),
          (v.keyBy = E3),
          (v.keys = $t),
          (v.keysIn = Wt),
          (v.map = sa),
          (v.mapKeys = W6),
          (v.mapValues = K6),
          (v.matches = z4),
          (v.matchesProperty = j4),
          (v.memoize = aa),
          (v.merge = Y6),
          (v.mergeWith = Yp),
          (v.method = D4),
          (v.methodOf = q4),
          (v.mixin = Fc),
          (v.negate = la),
          (v.nthArg = W4),
          (v.omit = X6),
          (v.omitBy = Z6),
          (v.once = U3),
          (v.orderBy = A3),
          (v.over = K4),
          (v.overArgs = W3),
          (v.overEvery = Y4),
          (v.overSome = X4),
          (v.partial = Ec),
          (v.partialRight = Np),
          (v.partition = I3),
          (v.pick = G6),
          (v.pickBy = Xp),
          (v.property = nh),
          (v.propertyOf = Z4),
          (v.pull = Ay),
          (v.pullAll = Tp),
          (v.pullAllBy = Iy),
          (v.pullAllWith = My),
          (v.pullAt = Ly),
          (v.range = G4),
          (v.rangeRight = Q4),
          (v.rearg = K3),
          (v.reject = O3),
          (v.remove = Oy),
          (v.rest = Y3),
          (v.reverse = Pc),
          (v.sampleSize = V3),
          (v.set = J6),
          (v.setWith = e4),
          (v.shuffle = F3),
          (v.slice = By),
          (v.sortBy = H3),
          (v.sortedUniq = jy),
          (v.sortedUniqBy = Dy),
          (v.split = $4),
          (v.spread = X3),
          (v.tail = qy),
          (v.take = Uy),
          (v.takeRight = Wy),
          (v.takeRightWhile = Ky),
          (v.takeWhile = Yy),
          (v.tap = c3),
          (v.throttle = Z3),
          (v.thru = oa),
          (v.toArray = qp),
          (v.toPairs = Zp),
          (v.toPairsIn = Gp),
          (v.toPath = rb),
          (v.toPlainObject = Wp),
          (v.transform = t4),
          (v.unary = G3),
          (v.union = Xy),
          (v.unionBy = Zy),
          (v.unionWith = Gy),
          (v.uniq = Qy),
          (v.uniqBy = Jy),
          (v.uniqWith = e3),
          (v.unset = n4),
          (v.unzip = Sc),
          (v.unzipWith = Ep),
          (v.update = r4),
          (v.updateWith = o4),
          (v.values = Ko),
          (v.valuesIn = s4),
          (v.without = t3),
          (v.words = eh),
          (v.wrap = Q3),
          (v.xor = n3),
          (v.xorBy = r3),
          (v.xorWith = o3),
          (v.zip = s3),
          (v.zipObject = i3),
          (v.zipObjectDeep = a3),
          (v.zipWith = l3),
          (v.entries = Zp),
          (v.entriesIn = Gp),
          (v.extend = Kp),
          (v.extendWith = fa),
          Fc(v, v),
          (v.add = sb),
          (v.attempt = th),
          (v.camelCase = c4),
          (v.capitalize = Qp),
          (v.ceil = ib),
          (v.clamp = i4),
          (v.clone = e6),
          (v.cloneDeep = n6),
          (v.cloneDeepWith = r6),
          (v.cloneWith = t6),
          (v.conformsTo = o6),
          (v.deburr = Jp),
          (v.defaultTo = R4),
          (v.divide = ab),
          (v.endsWith = u4),
          (v.eq = Ln),
          (v.escape = f4),
          (v.escapeRegExp = d4),
          (v.every = y3),
          (v.find = w3),
          (v.findIndex = xp),
          (v.findKey = O6),
          (v.findLast = k3),
          (v.findLastIndex = Cp),
          (v.findLastKey = B6),
          (v.floor = lb),
          (v.forEach = Ip),
          (v.forEachRight = Mp),
          (v.forIn = V6),
          (v.forInRight = F6),
          (v.forOwn = R6),
          (v.forOwnRight = N6),
          (v.get = Mc),
          (v.gt = s6),
          (v.gte = i6),
          (v.has = j6),
          (v.hasIn = Lc),
          (v.head = Sp),
          (v.identity = Kt),
          (v.includes = S3),
          (v.indexOf = ky),
          (v.inRange = a4),
          (v.invoke = U6),
          (v.isArguments = ao),
          (v.isArray = Le),
          (v.isArrayBuffer = a6),
          (v.isArrayLike = Ut),
          (v.isArrayLikeObject = pt),
          (v.isBoolean = l6),
          (v.isBuffer = Lr),
          (v.isDate = c6),
          (v.isElement = u6),
          (v.isEmpty = f6),
          (v.isEqual = d6),
          (v.isEqualWith = p6),
          (v.isError = Ac),
          (v.isFinite = h6),
          (v.isFunction = lr),
          (v.isInteger = Hp),
          (v.isLength = ca),
          (v.isMap = zp),
          (v.isMatch = v6),
          (v.isMatchWith = _6),
          (v.isNaN = g6),
          (v.isNative = m6),
          (v.isNil = b6),
          (v.isNull = y6),
          (v.isNumber = jp),
          (v.isObject = ct),
          (v.isObjectLike = ft),
          (v.isPlainObject = Rs),
          (v.isRegExp = Ic),
          (v.isSafeInteger = w6),
          (v.isSet = Dp),
          (v.isString = ua),
          (v.isSymbol = nn),
          (v.isTypedArray = Wo),
          (v.isUndefined = k6),
          (v.isWeakMap = $6),
          (v.isWeakSet = x6),
          (v.join = Sy),
          (v.kebabCase = p4),
          (v.last = kn),
          (v.lastIndexOf = Ty),
          (v.lowerCase = h4),
          (v.lowerFirst = v4),
          (v.lt = C6),
          (v.lte = P6),
          (v.max = cb),
          (v.maxBy = ub),
          (v.mean = fb),
          (v.meanBy = db),
          (v.min = pb),
          (v.minBy = hb),
          (v.stubArray = Nc),
          (v.stubFalse = Hc),
          (v.stubObject = J4),
          (v.stubString = eb),
          (v.stubTrue = tb),
          (v.multiply = vb),
          (v.nth = Ey),
          (v.noConflict = U4),
          (v.noop = Rc),
          (v.now = ia),
          (v.pad = _4),
          (v.padEnd = g4),
          (v.padStart = m4),
          (v.parseInt = y4),
          (v.random = l4),
          (v.reduce = M3),
          (v.reduceRight = L3),
          (v.repeat = b4),
          (v.replace = w4),
          (v.result = Q6),
          (v.round = _b),
          (v.runInContext = E),
          (v.sample = B3),
          (v.size = R3),
          (v.snakeCase = k4),
          (v.some = N3),
          (v.sortedIndex = Vy),
          (v.sortedIndexBy = Fy),
          (v.sortedIndexOf = Ry),
          (v.sortedLastIndex = Ny),
          (v.sortedLastIndexBy = Hy),
          (v.sortedLastIndexOf = zy),
          (v.startCase = x4),
          (v.startsWith = C4),
          (v.subtract = gb),
          (v.sum = mb),
          (v.sumBy = yb),
          (v.template = P4),
          (v.times = nb),
          (v.toFinite = cr),
          (v.toInteger = Oe),
          (v.toLength = Up),
          (v.toLower = S4),
          (v.toNumber = $n),
          (v.toSafeInteger = S6),
          (v.toString = Ze),
          (v.toUpper = T4),
          (v.trim = E4),
          (v.trimEnd = A4),
          (v.trimStart = I4),
          (v.truncate = M4),
          (v.unescape = L4),
          (v.uniqueId = ob),
          (v.upperCase = O4),
          (v.upperFirst = Oc),
          (v.each = Ip),
          (v.eachRight = Mp),
          (v.first = Sp),
          Fc(
            v,
            (function () {
              var r = {};
              return (
                Un(v, function (o, l) {
                  Qe.call(v.prototype, l) || (r[l] = o);
                }),
                r
              );
            })(),
            { chain: !1 },
          ),
          (v.VERSION = s),
          gn(
            [
              'bind',
              'bindKey',
              'curry',
              'curryRight',
              'partial',
              'partialRight',
            ],
            function (r) {
              v[r].placeholder = v;
            },
          ),
          gn(['drop', 'take'], function (r, o) {
            (He.prototype[r] = function (l) {
              l = l === n ? 1 : mt(Oe(l), 0);
              var f = this.__filtered__ && !o ? new He(this) : this.clone();
              return (
                f.__filtered__
                  ? (f.__takeCount__ = It(l, f.__takeCount__))
                  : f.__views__.push({
                      size: It(l, kt),
                      type: r + (f.__dir__ < 0 ? 'Right' : ''),
                    }),
                f
              );
            }),
              (He.prototype[r + 'Right'] = function (l) {
                return this.reverse()[r](l).reverse();
              });
          }),
          gn(['filter', 'map', 'takeWhile'], function (r, o) {
            var l = o + 1,
              f = l == Ge || l == be;
            He.prototype[r] = function (p) {
              var g = this.clone();
              return (
                g.__iteratees__.push({ iteratee: xe(p, 3), type: l }),
                (g.__filtered__ = g.__filtered__ || f),
                g
              );
            };
          }),
          gn(['head', 'last'], function (r, o) {
            var l = 'take' + (o ? 'Right' : '');
            He.prototype[r] = function () {
              return this[l](1).value()[0];
            };
          }),
          gn(['initial', 'tail'], function (r, o) {
            var l = 'drop' + (o ? '' : 'Right');
            He.prototype[r] = function () {
              return this.__filtered__ ? new He(this) : this[l](1);
            };
          }),
          (He.prototype.compact = function () {
            return this.filter(Kt);
          }),
          (He.prototype.find = function (r) {
            return this.filter(r).head();
          }),
          (He.prototype.findLast = function (r) {
            return this.reverse().find(r);
          }),
          (He.prototype.invokeMap = Fe(function (r, o) {
            return typeof r == 'function'
              ? new He(this)
              : this.map(function (l) {
                  return Ms(l, r, o);
                });
          })),
          (He.prototype.reject = function (r) {
            return this.filter(la(xe(r)));
          }),
          (He.prototype.slice = function (r, o) {
            r = Oe(r);
            var l = this;
            return l.__filtered__ && (r > 0 || o < 0)
              ? new He(l)
              : (r < 0 ? (l = l.takeRight(-r)) : r && (l = l.drop(r)),
                o !== n &&
                  ((o = Oe(o)), (l = o < 0 ? l.dropRight(-o) : l.take(o - r))),
                l);
          }),
          (He.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse();
          }),
          (He.prototype.toArray = function () {
            return this.take(kt);
          }),
          Un(He.prototype, function (r, o) {
            var l = /^(?:filter|find|map|reject)|While$/.test(o),
              f = /^(?:head|last)$/.test(o),
              p = v[f ? 'take' + (o == 'last' ? 'Right' : '') : o],
              g = f || /^find/.test(o);
            p &&
              (v.prototype[o] = function () {
                var b = this.__wrapped__,
                  C = f ? [1] : arguments,
                  A = b instanceof He,
                  U = C[0],
                  W = A || Le(b),
                  G = function (Ne) {
                    var De = p.apply(v, Pr([Ne], C));
                    return f && le ? De[0] : De;
                  };
                W &&
                  l &&
                  typeof U == 'function' &&
                  U.length != 1 &&
                  (A = W = !1);
                var le = this.__chain__,
                  me = !!this.__actions__.length,
                  Pe = g && !le,
                  Ve = A && !me;
                if (!g && W) {
                  b = Ve ? b : new He(this);
                  var Se = r.apply(b, C);
                  return (
                    Se.__actions__.push({ func: oa, args: [G], thisArg: n }),
                    new yn(Se, le)
                  );
                }
                return Pe && Ve
                  ? r.apply(this, C)
                  : ((Se = this.thru(G)),
                    Pe ? (f ? Se.value()[0] : Se.value()) : Se);
              });
          }),
          gn(
            ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
            function (r) {
              var o = Ai[r],
                l = /^(?:push|sort|unshift)$/.test(r) ? 'tap' : 'thru',
                f = /^(?:pop|shift)$/.test(r);
              v.prototype[r] = function () {
                var p = arguments;
                if (f && !this.__chain__) {
                  var g = this.value();
                  return o.apply(Le(g) ? g : [], p);
                }
                return this[l](function (b) {
                  return o.apply(Le(b) ? b : [], p);
                });
              };
            },
          ),
          Un(He.prototype, function (r, o) {
            var l = v[o];
            if (l) {
              var f = l.name + '';
              Qe.call(zo, f) || (zo[f] = []), zo[f].push({ name: o, func: l });
            }
          }),
          (zo[Gi(n, O).name] = [{ name: 'wrapper', func: n }]),
          (He.prototype.clone = Lm),
          (He.prototype.reverse = Om),
          (He.prototype.value = Bm),
          (v.prototype.at = u3),
          (v.prototype.chain = f3),
          (v.prototype.commit = d3),
          (v.prototype.next = p3),
          (v.prototype.plant = v3),
          (v.prototype.reverse = _3),
          (v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = g3),
          (v.prototype.first = v.prototype.head),
          Cs && (v.prototype[Cs] = h3),
          v
        );
      },
      Ro = dm();
    Jr ? (((Jr.exports = Ro)._ = Ro), (Vl._ = Ro)) : (Pt._ = Ro);
  }).call(zs);
})(Ja, Ja.exports);
var sk = Ja.exports;
const ik = ok(sk),
  ak = ['class', 'style'],
  lk = /^on[A-Z]/,
  ck = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n = [] } = e,
      s = n.concat(ak),
      i = nk();
    return i
      ? c0(() => {
          var a;
          return ik.fromPairs(
            Object.entries((a = i.proxy) == null ? void 0 : a.$attrs).filter(
              ([c]) => !s.includes(c) && !(t && lk.test(c)),
            ),
          );
        })
      : (console.warn(
          'use-attrs',
          'getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function',
        ),
        c0(() => ({})));
  },
  uk = () => {
    const e = a0('buForm', void 0),
      t = a0('buFormItem', void 0);
    return { form: e, formItem: t };
  };
function fk() {
  const e = Zo(0),
    t = Zo(0),
    n = Zo(0),
    s = Zo(0),
    i = Zo(0),
    a = Zo(0),
    c = () => {
      (n.value = 0), (s.value = 0), (i.value = 0), (a.value = 0);
    };
  return {
    move: (u) => {
      const d = u.touches[0];
      (n.value = (d.clientX < 0 ? 0 : d.clientX) - e.value),
        (s.value = d.clientY - t.value),
        (i.value = Math.abs(n.value)),
        (a.value = Math.abs(s.value));
    },
    start: (u) => {
      c(), (e.value = u.touches[0].clientX), (t.value = u.touches[0].clientY);
    },
    reset: c,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: s,
    offsetX: i,
    offsetY: a,
  };
}
const dk = { key: 0, class: 'group--prepend' },
  pk = { key: 0, class: 'bu-input--prefix' },
  hk = { class: 'bu-input--prefix-inner' },
  vk = ['value', 'disabled'],
  _k = { key: 1, class: 'bu-input--suffix' },
  gk = { class: 'bu-input--suffix-inner' },
  mk = { class: 'bu-input--suffix-inner' },
  yk = { key: 1, class: 'group--append' },
  Go = 'bu-input',
  bk = te({
    name: 'BuInput',
    __name: 'input',
    props: {
      modelValue: {},
      disabled: { type: Boolean },
      clearable: { type: Boolean },
      size: {},
      prefixIcon: {},
      suffixIcon: {},
    },
    emits: ['update:model-value', 'focus'],
    setup(e, { emit: t }) {
      const { formItem: n } = uk(),
        s = ck(),
        i = t,
        a = re(!1);
      function c(h) {
        const _ = h.target;
        i('update:model-value', _.value), n && n.validate();
      }
      const u = (h) => {
          (a.value = !0), i('focus', h);
        },
        d = () => {
          i('update:model-value', '');
        };
      return (h, _) => (
        k(),
        M(
          'div',
          {
            class: Ce([
              Go,
              h.disabled ? 'is-disabled' : '',
              h.$attrs.class,
              h.$slots.prepend || h.$slots.append ? `${Go}-group` : '',
              h.$slots.prepend ? `${Go}-group--prepend` : '',
              h.$slots.append ? `${Go}-group--append` : '',
            ]),
          },
          [
            h.$slots.prepend
              ? (k(), M('div', dk, [K(h.$slots, 'prepend')]))
              : ue('', !0),
            I(
              'div',
              {
                class: Ce([
                  Go + '--wrapper',
                  a.value && h.clearable ? 'is-focus' : '',
                ]),
              },
              [
                h.$slots.prefix || h.prefixIcon
                  ? (k(),
                    M('span', pk, [
                      I('span', hk, [
                        K(h.$slots, 'prefix'),
                        h.prefixIcon
                          ? (k(),
                            ke(
                              D(Pn),
                              { key: 0, size: '20', name: h.prefixIcon },
                              null,
                              8,
                              ['name'],
                            ))
                          : ue('', !0),
                      ]),
                    ]))
                  : ue('', !0),
                I(
                  'input',
                  zt(
                    {
                      value: h.modelValue,
                      class: [
                        `${Go}--${h.size || 'default'}`,
                        'bu-input--inner',
                      ],
                      onInput: c,
                    },
                    D(s),
                    {
                      disabled: h.disabled,
                      onFocus: u,
                      onBlur:
                        _[0] || (_[0] = Gr((m) => (a.value = !1), ['stop'])),
                    },
                  ),
                  null,
                  16,
                  vk,
                ),
                h.$slots.suffix || h.suffixIcon
                  ? (k(),
                    M('span', _k, [
                      I('span', gk, [
                        K(h.$slots, 'suffix'),
                        h.suffixIcon
                          ? (k(),
                            ke(
                              D(Pn),
                              { key: 0, size: '20', name: h.suffixIcon },
                              null,
                              8,
                              ['name'],
                            ))
                          : ue('', !0),
                      ]),
                    ]))
                  : ue('', !0),
                h.clearable && a.value && h.modelValue
                  ? (k(),
                    M(
                      'span',
                      {
                        key: 2,
                        class: 'bu-input--suffix bu-input--clear',
                        onMousedown: _[1] || (_[1] = Gr(() => {}, ['prevent'])),
                        onClick: d,
                      },
                      [
                        I('span', mk, [
                          Y(D(Pn), { size: '20', name: 'close' }),
                        ]),
                      ],
                      32,
                    ))
                  : ue('', !0),
              ],
              2,
            ),
            h.$slots.append
              ? (k(), M('div', yk, [K(h.$slots, 'append')]))
              : ue('', !0),
          ],
          2,
        )
      );
    },
  });
const s_ = Qt(bk),
  wk = { class: 'bu-loading-spinner' },
  kk = { key: 0, class: 'bu-loading-svg bu-load-loop' },
  $k = { key: 1, 'aria-hidden': 'true', class: 'bu-loading-svg bu-load-loop' },
  xk = I('use', { 'xlink:href': '#icon-loading', fill: '#2d8cf0' }, null, -1),
  Ck = [xk],
  Pk = { class: 'bu-loading-text' },
  Sk = te({
    __name: 'loading',
    props: {
      backgroundColor: {},
      text: {},
      fullscreen: { type: Boolean },
      customClass: {},
      visible: {},
    },
    setup(e) {
      return (t, n) => (
        k(),
        ke(
          Nn,
          { name: 'bu-loading-fade' },
          {
            default: ae(() => [
              _r(
                I(
                  'div',
                  {
                    class: Ce([
                      'bu-loading-mask',
                      [t.customClass, t.fullscreen ? 'is-fullscreen' : ''],
                    ]),
                    style: dt({ backgroundColor: t.backgroundColor }),
                  },
                  [
                    I('div', wk, [
                      t.$slots.spinner
                        ? (k(), M('span', kk, [K(t.$slots, 'spinner')]))
                        : (k(), M('svg', $k, Ck)),
                      I('div', Pk, Be(t.text), 1),
                    ]),
                  ],
                  6,
                ),
                [[Gn, t.visible]],
              ),
            ]),
            _: 3,
          },
        )
      );
    },
  });
let Aa;
const Iu = function (e = {}) {
    const t = document.createElement('div'),
      n = Tk(e);
    n.fullscreen && Aa && (n.parent.removeChild(t), Aa.close());
    const s = re(!1),
      i = jn(
        Sk,
        {
          backgroundColor: n.background,
          text: n.text,
          fullscreen: n.fullscreen,
          customClass: n.customClass,
          visible: s,
        },
        {
          spinner: n.spinner
            ? () =>
                _t(n.spinner)
                  ? jn(Pn, { name: n.spinner.value, size: 20 }, '')
                  : n.spinner
            : null,
        },
      );
    Jn(i, t),
      n.parent.appendChild(t),
      (n.parent.style.position = 'relative'),
      Tn(() => {
        s.value = n.visible;
      });
    const a = {
      close: () => {
        (s.value = !1),
          n.parent.removeChild(t),
          n.closed && n.closed(),
          n.fullscreen && (Aa = void 0);
      },
      vnode: i,
    };
    return n.fullscreen && (Aa = a), a;
  },
  Tk = (e) => {
    let t;
    return (
      We(e.target)
        ? (t = document.querySelector(e.target) ?? document.body)
        : (t = e.target || document.body),
      {
        parent: t === document.body || e.body ? document.body : t,
        background: e.background || '',
        spinner: e.spinner || !1,
        text: e.text || '',
        fullscreen: t === document.body && (e.fullscreen ?? !0),
        lock: e.lock ?? !1,
        customClass: e.customClass || '',
        visible: e.visible ?? !0,
        target: t,
      }
    );
  },
  u0 = (e, t) => {
    const n = t.instance,
      s = (d) => (Je(t.value) ? t.value[d] : void 0),
      i = (d) => {
        const h = (We(d) && (n == null ? void 0 : n[d])) || d;
        return h && re(h);
      },
      a = (d) => i(e.getAttribute(`bu-loading-${ln(d)}`)),
      c = s('fullscreen') ?? t.modifiers.fullscreen,
      u = {
        text: a('text'),
        spinner: a('spinner'),
        background: a('background'),
        customClass: a('customClass'),
        fullscreen: c,
        target: s('target') ?? (c ? void 0 : e),
        body: s('body') ?? t.modifiers.body,
        lock: s('lock') ?? t.modifiers.lock,
      };
    e.BuLoading = { options: u, instance: Iu(u) };
  },
  Ek = {
    mounted(e, t) {
      console.log('binding', t), t.value && u0(e, t);
    },
    updated(e, t) {
      const n = e.BuLoading;
      t.oldValue !== t.value &&
        (t.value && !t.oldValue ? u0(e, t) : n == null || n.instance.close());
    },
    unmounted(e) {
      var t;
      (t = e.BuLoading) == null || t.instance.close();
    },
  };
const i_ = {
  install(e) {
    e.directive('loading', Ek), (e.config.globalProperties.$loading = Iu);
  },
  service: Iu,
};
const wo = qu([]),
  Ak = (e) => {
    const t = wo.findIndex((i) => i.id === e),
      n = wo[t];
    let s;
    return t > 0 && (s = wo[t - 1]), { current: n, prev: s };
  },
  Ik = (e) => {
    const { prev: t } = Ak(e);
    return t ? t.vm.exposed.bottom.value : 0;
  },
  Mk = (e, t) => (wo.findIndex((s) => s.id === e) > 0 ? 20 : t),
  Lk = (e) => e,
  Ok = {
    message: { type: [String, Object, Function], default: '' },
    type: { type: String, default: 'info' },
    icon: { type: [String, Object, Function], default: '' },
    dangerouslyUseHTMLString: { type: Boolean, default: !1 },
    duration: { type: Number, default: 3e3 },
    showClose: { type: Boolean, default: !1 },
    offset: { type: Number, default: 16 },
    id: { type: String, default: '' },
    onClose: { type: Lk(Function), required: !1 },
  };
function a_(e) {
  return gi() ? (al(e), !0) : !1;
}
function l_(e) {
  return typeof e == 'function' ? e() : D(e);
}
const c_ = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
function u_(e, t, n = {}) {
  const { immediate: s = !0 } = n,
    i = re(!1);
  let a = null;
  function c() {
    a && (clearTimeout(a), (a = null));
  }
  function u() {
    (i.value = !1), c();
  }
  function d(...h) {
    c(),
      (i.value = !0),
      (a = setTimeout(() => {
        (i.value = !1), (a = null), e(...h);
      }, l_(t)));
  }
  return (
    s && ((i.value = !0), c_ && d()),
    a_(u),
    { isPending: ms(i), start: d, stop: u }
  );
}
function f0(e) {
  var t;
  const n = l_(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Bk = c_ ? window : void 0;
function Vk() {
  const e = re(!1);
  return (
    En() &&
      ut(() => {
        e.value = !0;
      }),
    e
  );
}
function Fk(e) {
  const t = Vk();
  return de(() => (t.value, !!e()));
}
function Rk(e, t, n = {}) {
  const { window: s = Bk, ...i } = n;
  let a;
  const c = Fk(() => s && 'ResizeObserver' in s),
    u = () => {
      a && (a.disconnect(), (a = void 0));
    },
    d = de(() => (Array.isArray(e) ? e.map((m) => f0(m)) : [f0(e)])),
    h = yt(
      d,
      (m) => {
        if ((u(), c.value && s)) {
          a = new ResizeObserver(t);
          for (const y of m) y && a.observe(y, i);
        }
      },
      { immediate: !0, flush: 'post', deep: !0 },
    ),
    _ = () => {
      u(), h();
    };
  return a_(_), { isSupported: c, stop: _ };
}
const Nk = ['id'],
  Hk = { key: 0, class: 'bu-message--content' },
  zk = ['innerHTML'],
  jk = te({
    name: 'BuMessage',
    __name: 'message',
    props: Ok,
    emits: ['destory'],
    setup(e, { expose: t }) {
      const n = re(!1),
        s = re(),
        i = e,
        a = re(0);
      let c;
      const u = de(() => Ik(i.id)),
        d = de(() => a.value + h.value),
        h = de(() => Mk(i.id, i.offset) + u.value);
      function _() {
        c == null || c();
      }
      function m() {
        i.duration !== 0 &&
          ({ stop: c } = u_(() => {
            y();
          }, i.duration));
      }
      function y() {
        n.value = !1;
      }
      return (
        ut(() => {
          m(), (n.value = !0);
        }),
        Rk(s, () => {
          a.value = s.value.getBoundingClientRect().height;
        }),
        t({ close: y, visible: n, bottom: d }),
        (S, R) => (
          k(),
          ke(
            Nn,
            {
              name: 'bu-message-fade',
              onAfterLeave: R[0] || (R[0] = (x) => S.$emit('destroy')),
              onBeforeLeave: S.onClose,
            },
            {
              default: ae(() => [
                _r(
                  I(
                    'div',
                    {
                      class: Ce([
                        'bu-message',
                        [
                          `bu-message--${S.type}`,
                          S.showClose ? 'is-close' : '',
                        ],
                      ]),
                      id: S.id,
                      ref_key: 'messageRef',
                      ref: s,
                      style: dt({ top: h.value + 'px', zIndex: 99 }),
                      onMouseenter: _,
                      onMouseleave: m,
                    },
                    [
                      K(S.$slots, 'default', {}, () => [
                        S.dangerouslyUseHTMLString
                          ? (k(), M('p', Hk, Be(S.message), 1))
                          : (k(),
                            M(
                              'p',
                              {
                                key: 1,
                                class: 'bu-message--content',
                                innerHTML: S.message,
                              },
                              null,
                              8,
                              zk,
                            )),
                      ]),
                      S.showClose
                        ? (k(),
                          ke(D(Pn), {
                            key: 0,
                            class: 'bu-message--close',
                            name: 'close',
                            size: 16,
                          }))
                        : ue('', !0),
                    ],
                    46,
                    Nk,
                  ),
                  [[Gn, n.value]],
                ),
              ]),
              _: 3,
            },
            8,
            ['onBeforeLeave'],
          )
        )
      );
    },
  });
let Dk = 1;
const qk = (e) => {
    const t = Wk(e);
    return wo.push(t), console.log('container', t.id), t.handler;
  },
  Uk = (e) => {
    const t = wo.indexOf(e);
    if (t === -1) return;
    wo.splice(t, 1);
    const { handler: n } = e;
    n.close();
  },
  Wk = (e) => {
    const t = `message_${Dk++}`,
      n = document.createElement('div'),
      s = {
        ...e,
        id: t,
        onClose: () => {
          var d;
          (d = e.onClose) == null || d.call(e), Uk(u);
        },
        onDestroy: () => {
          Jn(null, n);
        },
      },
      i = Y(
        jk,
        s,
        Te(s.message) || zn(s.message)
          ? { default: Te(s.message) ? s.message : () => s.message }
          : null,
      );
    Jn(i, n), document.body.append(n.firstElementChild);
    const a = i.component,
      u = {
        id: t,
        vnode: i,
        vm: a,
        handler: {
          close: () => {
            a.exposed.visible.value = !1;
          },
        },
      };
    return u;
  },
  f_ = pf(qk, '$message'),
  Kk = te({
    name: 'BuModal',
    __name: 'modal',
    setup(e) {
      return (t, n) => (k(), M('div'));
    },
  }),
  d_ = Qt(Kk);
const Yk = {
    id: { type: String, default: '0' },
    position: {
      type: String,
      values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      default: 'top-right',
    },
    type: {
      type: String,
      values: ['', 'success', 'warning', 'info', 'error'],
      default: '',
    },
    dangerouslyUseHTMLString: { type: Boolean, default: !1 },
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    duration: { type: Number, default: 450 },
    zIndex: { type: Number, default: 0 },
    offset: { type: Number, default: 0 },
    onClose: { type: Function, required: !0 },
  },
  Xk = { destroy: () => !0 },
  Zk = te({
    name: 'BuNofication',
    emits: Xk,
    props: Yk,
    components: { BuIcon: Pn },
    setup(e) {
      const t = re(!1);
      let n;
      const s = de(() => (e.position.endsWith('right') ? 'right' : 'left')),
        i = de(() => (e.position.startsWith('top') ? 'top' : 'bottom')),
        a = de(() => ({ [i.value]: `${e.offset}px`, zIndex: e.zIndex })),
        c = () => {
          console.log('en'), (t.value = !1);
        },
        u = () => {
          e.duration > 0 &&
            ({ stop: n } = u_(() => {
              t.value && c();
            }, e.duration));
        },
        d = () => {
          n == null || n();
        };
      return (
        ut(() => {
          u(), (t.value = !0);
        }),
        {
          visible: t,
          horizontalClass: s,
          positionStyle: a,
          close: c,
          startTimer: u,
          clearTimer: d,
        }
      );
    },
  }),
  Gk = ['id'],
  Qk = { class: 'bu-notification--group' },
  Jk = { class: 'bu-notification--title' },
  e9 = { class: 'bu-notification--content' },
  t9 = { key: 0 },
  n9 = ['innerHTML'];
function r9(e, t, n, s, i, a) {
  const c = Hn('bu-icon');
  return (
    k(),
    ke(
      Nn,
      {
        name: 'bu-notification-fade',
        onBeforeLeave: e.onClose,
        onAfterLeave: t[2] || (t[2] = (u) => e.$emit('destroy')),
      },
      {
        default: ae(() => [
          _r(
            I(
              'div',
              {
                id: e.id,
                class: Ce(['bu-notification', e.horizontalClass]),
                style: dt(e.positionStyle),
                onMouseenter:
                  t[0] || (t[0] = (...u) => e.clearTimer && e.clearTimer(...u)),
                onMouseleave:
                  t[1] || (t[1] = (...u) => e.startTimer && e.startTimer(...u)),
              },
              [
                e.type
                  ? (k(),
                    ke(
                      c,
                      {
                        key: 0,
                        name: e.type,
                        size: '24px',
                        class: Ce(['notification-title-icon', e.type]),
                      },
                      null,
                      8,
                      ['name', 'class'],
                    ))
                  : ue('', !0),
                I('div', Qk, [
                  I('div', Jk, Be(e.title), 1),
                  I('div', e9, [
                    K(e.$slots, 'default', {}, () => [
                      e.dangerouslyUseHTMLString
                        ? (k(),
                          M('p', { key: 1, innerHTML: e.message }, null, 8, n9))
                        : (k(), M('p', t9, Be(e.message), 1)),
                    ]),
                  ]),
                  Y(
                    c,
                    {
                      onClick: e.close,
                      class: 'bu-notification--close',
                      name: 'close',
                      size: '18px',
                    },
                    null,
                    8,
                    ['onClick'],
                  ),
                ]),
              ],
              46,
              Gk,
            ),
            [[Gn, e.visible]],
          ),
        ]),
        _: 3,
      },
      8,
      ['onBeforeLeave'],
    )
  );
}
const o9 = fe(Zk, [['render', r9]]),
  Mu = 16;
let s9 = 1;
const Lu = {
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': [],
  },
  i9 = function (e = {}) {
    const t = document.body,
      n = document.createElement('div');
    (typeof e == 'string' || zn(e)) && (e = { message: e });
    const s = e.position || 'top-right';
    let i = e.offset || 0;
    Lu[s].forEach(({ vm: h }) => {
      var _;
      i += (((_ = h.el) == null ? void 0 : _.offsetHeight) || 0) + Mu;
    }),
      (i += Mu);
    const a = `notification_${s9++}`,
      c = e.onClose,
      u = {
        ...e,
        zIndex: 9999,
        offset: i,
        id: a,
        onClose: () => {
          a9(a, s, c);
        },
      },
      d = Y(o9, u, zn(u.message) ? { default: () => u.message } : null);
    return (
      (d.props.onDestroy = () => {
        Jn(null, n);
      }),
      Jn(d, n),
      Lu[s].push({ vm: d }),
      t.appendChild(n.firstElementChild),
      { close: () => (d.component.proxy.visible = !1) }
    );
  };
function a9(e, t, n) {
  const s = Lu[t],
    i = s.findIndex(({ vm: h }) => {
      var _;
      return ((_ = h.component) == null ? void 0 : _.props.id) === e;
    });
  if (i === -1) return;
  const { vm: a } = s[i];
  if (!a) return;
  n == null || n(a);
  const c = a.el.offsetHeight,
    u = t.split('-')[0];
  s.splice(i, 1);
  const d = s.length;
  if (!(d < 1))
    for (let h = i; h < d; h++) {
      const { el: _, component: m } = s[h].vm,
        y = parseInt(_.style[u], 10) - c - Mu;
      m.props.offset = y;
    }
}
const p_ = pf(i9, '$notify'),
  l9 = {
    size: { type: [String, Number], default: '' },
    direction: { type: String, default: 'horizontal' },
    alignment: { type: String, default: 'center' },
    wrap: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 },
  },
  c9 = te({
    name: 'BuSpace',
    props: l9,
    setup(e, { slots: t }) {
      const { direction: n, wrap: s, alignment: i, size: a } = mr(e),
        c = 'bu-space',
        u = de(() => [c, `${c}--${n.value}`]),
        d = de(() =>
          a.value
            ? typeof a.value == 'string'
              ? a.value
              : a.value + 'px'
            : '8px',
        );
      return () => {
        const h = K(t, 'default', { key: 0 }, () => []);
        return (h.children ?? []).length === 0
          ? null
          : Y(
              'div',
              {
                class: u.value,
                style: {
                  'flex-wrap': s.value ? 'wrap' : 'nowrap',
                  'align-items': i.value,
                },
              },
              [
                he(h.children) &&
                  h.children.map((_) =>
                    _.type === Et
                      ? jn(_)
                      : jn(
                          'div',
                          {
                            class: 'bu-space--item',
                            style: {
                              'margin-bottom':
                                n.value === 'horizontal' ? 0 : d.value,
                              'margin-right':
                                n.value === 'horizontal' ? d.value : 0,
                            },
                          },
                          _,
                        ),
                  ),
              ],
            );
      };
    },
  });
const h_ = Qt(c9),
  u9 = { key: 0, class: 'bu-split--horizontal' },
  f9 = { key: 1, class: 'bu-split--vertical' },
  d9 = te({
    name: 'BuSplit',
    __name: 'split',
    props: {
      modelValue: { default: 0.5 },
      mode: { default: 'horizontal' },
      min: { default: '40px' },
      max: { default: '40px' },
    },
    emits: ['update:model-value', 'mousemove'],
    setup(e, { emit: t }) {
      const n = e,
        s = t,
        i = re(),
        a = re(0),
        c = re(0),
        u = re(0),
        d = re(0),
        h = re(!1),
        _ = re(),
        m = de(() =>
          n.mode === 'horizontal' ? 'offsetWidth' : 'offsetHeight',
        ),
        y = de(() => 100 - a.value),
        S = de(() => ({ 'bu-split-pane-moving': h.value }));
      yt(
        () => n.modelValue,
        () => {
          L();
        },
        { immediate: !0 },
      ),
        ut(() => {
          Xc(window, 'resize', L);
        }),
        bs(() => {
          Zc(window, 'resize', L);
        });
      const R = (N, q) => parseFloat(String(N)) / q;
      function x(N) {
        (c.value = n.mode === 'horizontal' ? N.pageX : N.pageY),
          (_.value = n.modelValue),
          (h.value = !0),
          Xc(document, 'mousemove', V),
          Xc(document, 'mouseup', P);
      }
      function L() {
        Tn(() => {
          (u.value = O('min')),
            (d.value = O('max')),
            (a.value =
              (We(n.modelValue)
                ? R(n.modelValue, i.value[m.value])
                : n.modelValue) * 100);
        });
      }
      function O(N) {
        let q = i.value[m.value];
        return We(n.modelValue)
          ? We(n[N])
            ? n[N]
            : q * Number(n[N])
          : We(n[N])
            ? R(n[N], q)
            : n[N];
      }
      function V(N) {
        const q = N;
        let se = (n.mode === 'horizontal' ? q.pageX : q.pageY) - c.value,
          ne = i.value[m.value],
          ve = We(_.value)
            ? `${parseFloat(_.value) + se}px`
            : R((ne * _.value + se).toString(), ne),
          J = w(ve);
        parseFloat(ve) <= u.value && (ve = B(ve, u.value)),
          parseFloat(J) <= d.value && (ve = w(B(J, d.value))),
          s('update:model-value', ve),
          s('mousemove', N);
      }
      function P() {
        (h.value = !1),
          Zc(document, 'mousemove', V),
          Zc(document, 'mouseup', P);
      }
      function w(N) {
        let q = 0;
        return (
          We(N)
            ? (q = `${i.value[m.value] - parseFloat(N)}px`)
            : (q = 1 - Number(N)),
          q
        );
      }
      function B(N, q) {
        return We(N) ? `${Math.max(parseFloat(N), q)}px` : Math.max(N, q);
      }
      return (N, q) => (
        k(),
        M(
          'div',
          { class: 'bu-split', ref_key: 'outerWrapper', ref: i },
          [
            N.mode === 'horizontal'
              ? (k(),
                M('div', u9, [
                  I(
                    'div',
                    {
                      class: Ce(['bu-split-left-pane', S.value]),
                      style: dt({ right: `${y.value}%` }),
                    },
                    [K(N.$slots, 'left')],
                    6,
                  ),
                  I(
                    'div',
                    {
                      class: 'bu-split-trigger',
                      onMousedown: x,
                      style: dt({ left: `${a.value}%` }),
                    },
                    null,
                    36,
                  ),
                  I(
                    'div',
                    {
                      class: Ce(['bu-split-right-pane', S.value]),
                      style: dt({ left: `${a.value}%` }),
                    },
                    [K(N.$slots, 'right')],
                    6,
                  ),
                ]))
              : (k(),
                M('div', f9, [
                  I(
                    'div',
                    {
                      class: Ce(['bu-split-top-pane', S.value]),
                      style: dt({ bottom: `${y.value}%` }),
                    },
                    [K(N.$slots, 'top')],
                    6,
                  ),
                  I(
                    'div',
                    {
                      class: 'bu-split-trigger bu-split-trigger--vertical',
                      onMousedown: x,
                      style: dt({ top: `${a.value}%` }),
                    },
                    null,
                    36,
                  ),
                  I(
                    'div',
                    {
                      class: Ce(['bu-split-bottom-pane', S.value]),
                      style: dt({ top: `${a.value}%` }),
                    },
                    [K(N.$slots, 'bottom')],
                    6,
                  ),
                ])),
          ],
          512,
        )
      );
    },
  });
const v_ = Qt(d9),
  p9 = { class: 'bu-title-content' },
  Ia = 'bu-title',
  h9 = te({
    name: 'BuTitle',
    __name: 'title',
    props: { sub: { type: Boolean }, border: { type: Boolean }, type: {} },
    setup(e) {
      const { sub: t = !1, border: n = !1, type: s = 'primary' } = e,
        i = de(() => {
          let a = [Ia, `${Ia}--${s}`];
          return t && a.push(`${Ia}--sub`), n && a.push(`${Ia}--border`), a;
        });
      return (a, c) => (
        k(),
        M(
          'div',
          { class: Ce(i.value) },
          [
            I('div', p9, [K(a.$slots, 'default'), K(a.$slots, 'left')]),
            K(a.$slots, 'right'),
          ],
          2,
        )
      );
    },
  });
const __ = Qt(h9),
  g_ = {
    data: { type: Object, required: !0 },
    lineable: { type: Boolean, default: !1 },
    checkable: { type: Boolean, default: !1 },
    dragdrop: { type: [Boolean, Object], default: !1 },
    height: { type: Number },
    itemHeight: { type: Number, default: 30 },
  },
  v9 = {
    ...g_,
    treeNode: { type: Object, required: !0 },
    onClick: { type: [Function, Array] },
  },
  Ma = 32,
  d0 = 24,
  _9 = te({
    name: 'BuTreeNode',
    props: v9,
    setup(e, { slots: t, emit: n }) {
      const { treeNode: s, lineable: i, checkable: a, dragdrop: c } = mr(e),
        {
          getChildrenExpanded: u,
          toggleCheckNode: d,
          onDragstart: h,
          onDrop: _,
          onDragover: m,
          onDragend: y,
          onDragleave: S,
        } = Ot('TREE_UTILS');
      let R = {};
      return (
        c.value &&
          (R = {
            draggable: !0,
            onDragend: (x) => y(x),
            onDragleave: (x) => S(x),
            onDragover: (x) => m(x),
            onDragstart: (x) => h(x, s.value),
            onDrop: (x) => _(x, s.value),
          }),
        () =>
          Y(
            'div',
            {
              class: 'bu-tree--node',
              style: {
                paddingLeft: `${d0 * (s.value.level - 1)}px`,
                height: Ma + 'px',
                lineHeight: Ma + 'px',
              },
            },
            [
              !s.value.isLeaf &&
                s.value.expanded &&
                i.value &&
                Y(
                  'span',
                  {
                    class: 'bu-tree--node-vline',
                    style: {
                      height: `${Ma * u(s.value).length}px`,
                      left: `${d0 * (s.value.level - 1) + 12}px`,
                      top: `${Ma}px`,
                    },
                  },
                  null,
                ),
              Y('div', zt({ class: 'bu-tree--node-content' }, R), [
                s.value.isLeaf
                  ? Y(
                      'span',
                      { style: { display: 'inline-block', width: '25px' } },
                      null,
                    )
                  : t.icon(),
                a.value &&
                  Y(
                    hf,
                    {
                      modelValue: s.value.checked,
                      indeterminate: s.value.indeterminate,
                      onClick: () => d(s.value),
                    },
                    null,
                  ),
                t.content(),
                s.value.loading && t.loading(),
              ]),
            ],
          )
      );
    },
  });
function bf(e, t = 0, n = {}) {
  return (
    t++,
    e.reduce((s, i) => {
      const a = { ...i };
      if (
        ((a.level = t),
        t > 1 && n.level && t > n.level && (a.parentId = n.id),
        a.children)
      ) {
        const c = bf(a.children, t, a);
        return delete a.children, s.concat(a, c);
      } else return a.isLeaf === void 0 && (a.isLeaf = !0), s.concat(a);
    }, [])
  );
}
function g9(e) {
  const t = de(() => {
      let u = [];
      const d = [];
      for (const h of e.value)
        u.map((_) => _.id).includes(h.id) ||
          (h.expanded !== !0 && (u = n(h)), d.push(h));
      return d;
    }),
    n = (u, d = !0) => {
      const h = [],
        _ = e.value.findIndex((m) => m.id === u.id);
      for (let m = _ + 1; m < e.value.length && u.level < e.value[m].level; m++)
        (d || u.level === e.value[m].level - 1) && h.push(e.value[m]);
      return h;
    },
    s = (u, d = []) => {
      const h = n(u, !1);
      return (
        d.push(...h),
        h.forEach((_) => {
          _.expanded && s(_, d);
        }),
        d
      );
    };
  return {
    expendedTree: t,
    getChildren: n,
    getParent: (u) => e.value.find((d) => d.id === u.parentId),
    getChildrenExpanded: s,
    getIndex: (u) => (u ? e.value.findIndex((d) => d.id === u.id) : -1),
    getNode: (u) => e.value.find((d) => d.id === u.id),
  };
}
function m9(e, t, n, s) {
  const { lazyLoadNodes: i } = s;
  return {
    toggleNode: (c) => {
      const u = e.value.find((d) => d.id === c.id);
      u && ((u.expanded = !u.expanded), u.expanded && i(u));
    },
  };
}
function y9(e, { getChildren: t }) {
  const n = (i) => {
      (i.checked = !i.checked),
        t(i).forEach((a) => {
          a.checked = i.checked;
        }),
        s(i);
    },
    s = (i) => {
      const a = e.value.find((d) => d.id === i.parentId);
      if (!a) return;
      const c = t(a, !1),
        u = c.filter((d) => d.checked);
      u.length === c.length
        ? ((a.checked = !0), (a.indeterminate = !1))
        : ((a.checked = !1), (a.indeterminate = u.length !== 0)),
        console.log('treeNode', a),
        s(a);
    };
  return { toggleCheckNode: n };
}
const Jc = {
  dropPrev: 'bu-tree--node--drop-prev',
  dropNext: 'bu-tree--node--drop-next',
  dropInner: 'bu-tree--node--drop-inner',
};
function b9(e, t, { getChildren: n, getParent: s }) {
  const i = un({
      dropType: void 0,
      draggingNode: null,
      draggingTreeNode: null,
    }),
    a = de(() => t.value.reduce((x, L) => ({ ...x, [L.id]: L }), {})),
    c = (x) => {
      x == null || x.classList.remove(...Object.values(Jc));
    },
    u = () => {
      (i.dropType = void 0),
        (i.draggingNode = null),
        (i.draggingTreeNode = null);
    },
    d = (x, L) => {
      var V;
      const O = (V = a.value[x]) == null ? void 0 : V.parentId;
      return O === L ? !0 : O !== void 0 ? d(O, L) : !1;
    };
  function h(x, L) {
    const O = t.value.find((V) => V.id === x);
    if (O) {
      let V;
      const P = n(O),
        w = s(O);
      if (i.dropType === 'dropInner') {
        V = { ...O, parentId: L.id, level: L.level + 1 };
        const B = t.value.indexOf(L);
        t.value.splice(B + 1, 0, V), (L.isLeaf = void 0);
        const N = t.value.indexOf(O);
        t.value.splice(N, 1);
      } else if (i.dropType === 'dropNext') {
        V = { ...O, parentId: L.parentId, level: L.level };
        const B = t.value.indexOf(L),
          N = n(L, !0).length;
        t.value.splice(B + N + 1, 0, V);
        const q = t.value.indexOf(O);
        t.value.splice(q, 1);
      } else if (i.dropType === 'dropPrev') {
        V = { ...O, parentId: L.parentId, level: L.level };
        const B = t.value.indexOf(L);
        t.value.splice(B, 0, V);
        const N = t.value.indexOf(O);
        t.value.splice(N, 1);
      }
      (i.dropType = 'dropInner'),
        P.forEach((B) => h(B.id, V)),
        w && n(w).length === 0 && (w.isLeaf = !0);
    }
  }
  return {
    onDragstart: (x, L) => {
      var O;
      x.stopPropagation(),
        (i.draggingNode = x.target),
        (i.draggingTreeNode = L),
        (O = x.dataTransfer) == null || O.setData('dragNodeId', L.id);
    },
    onDrop: (x, L) => {
      var V;
      if (
        (x.preventDefault(),
        x.stopPropagation(),
        c(x.currentTarget),
        !i.draggingNode || !e)
      )
        return;
      const O = (V = x.dataTransfer) == null ? void 0 : V.getData('dragNodeId');
      if (O) {
        const P = d(L.id, O);
        if (O === L.id || P) return;
        i.dropType && h(O, L);
      }
      u();
    },
    onDragover: (x) => {
      if ((x.preventDefault(), x.stopPropagation(), !!i.draggingNode && e)) {
        if ((x.dataTransfer && (x.dataTransfer.dropEffect = 'move'), !t))
          return;
        let L = {};
        typeof e == 'object' ? (L = e) : e === !0 && (L = { dropInner: !0 });
        const { dropPrev: O, dropNext: V, dropInner: P } = L;
        let w;
        const B = O ? (P ? 0.25 : V ? 0.45 : 1) : -1,
          N = V ? (P ? 0.75 : O ? 0.55 : 0) : 1,
          q = x.currentTarget,
          z = q == null ? void 0 : q.getBoundingClientRect(),
          se = x.clientY - ((z == null ? void 0 : z.top) || 0);
        if (
          (se < ((z == null ? void 0 : z.height) || 0) * B
            ? (w = 'dropPrev')
            : se > ((z == null ? void 0 : z.height) || 0) * N
              ? (w = 'dropNext')
              : P
                ? (w = 'dropInner')
                : (w = void 0),
          w)
        ) {
          const ne = q == null ? void 0 : q.classList;
          ne && (ne.contains(Jc[w]) || (c(q), ne.add(Jc[w])));
        } else c(q);
        i.dropType = w;
      }
    },
    onDragleave: (x) => {
      x.stopPropagation(), i.draggingNode && c(x.currentTarget);
    },
    onDragend: (x) => {
      x.preventDefault(), x.stopPropagation(), u();
    },
  };
}
function w9(e, { getNode: t, getIndex: n, getChildren: s }, { emit: i }) {
  const a = (h) => {
      const _ = t(h);
      _ &&
        _.isLeaf === !1 &&
        !_.childNodeCount &&
        ((_.loading = !0), i('lazy-load', h, c));
    },
    c = (h) => {
      const _ = t(h.node);
      if (_) {
        _.loading = !1;
        const m = re(bf(h.treeItems, _.level));
        u(_, m), d(_, m);
        const y = s(_);
        _.childNodeCount = y.length;
      }
    },
    u = (h, _) => {
      _.value.forEach((m) => {
        m.level - 1 === h.level && !m.parentId && (m.parentId = h.id);
      });
    },
    d = (h, _) => {
      const m = n(h);
      m && e.value.splice(m + 1, 0, ..._.value);
    };
  return { lazyLoadNodes: a };
}
function k9(e, t, n) {
  const s = D(e),
    i = re(bf(s)),
    a = g9(i),
    c = [m9, y9],
    u = w9(i, a, n),
    d = b9(t.dragdrop, i, a);
  return {
    ...c.reduce((_, m) => ({ ..._, ...m(i, a, n, u) }), {}),
    ...a,
    ...d,
    treeData: i,
  };
}
const $9 = (e, { emit: t }) =>
    Y(
      'svg',
      {
        style: {
          width: '25px',
          height: '16px',
          display: 'inline-block',
          transform: e.expanded ? 'rotate(90deg)' : '',
        },
        viewBox: '0 0 1024 1024',
        xmlns: 'http://www.w3.org/2000/svg',
        onClick: () => t('onClick'),
      },
      [
        Y(
          'path',
          { fill: 'currentColor', d: 'M384 192v640l384-320.064z' },
          null,
        ),
      ],
    ),
  x9 = {
    data: { type: Array, default: [] },
    itemHeight: { type: Number, default: 22 },
    component: { type: String, default: 'div' },
  },
  C9 = te({
    name: 'BuVirtualList',
    props: x9,
    setup(e, { slots: t }) {
      const { data: n, itemHeight: s, component: i } = mr(e),
        a = re(),
        c = re(0),
        u = re(0),
        d = re(0),
        h = (y) => {
          const S = y.target.scrollTop;
          (d.value = Math.floor(S / s.value)), (u.value = S - (S % s.value));
        },
        _ = de(() => Math.ceil(c.value / s.value)),
        m = de(() =>
          n.value.slice(d.value, Math.min(d.value + _.value, n.value.length)),
        );
      return (
        ut(() => {
          Tn(() => {
            var y;
            (c.value = (y = a.value) == null ? void 0 : y.clientHeight),
              console.log('containerHeight', c.value);
          });
        }),
        () =>
          Y(
            i.value,
            { class: 'bu-virtual-list--container', ref: a, onScroll: h },
            {
              default: () => [
                Y(
                  'div',
                  {
                    class: 'bu-virtual-list--blank',
                    style: { height: `${n.value.length * s.value}px` },
                  },
                  null,
                ),
                Y(
                  'div',
                  {
                    class: 'bu-virtual-list',
                    style: { transform: `translate3d(0,${u.value}px,0)` },
                  },
                  [
                    m.value.map((y, S) => {
                      var R;
                      return Y('div', { style: { height: s.value + 'px' } }, [
                        (R = t.default) == null
                          ? void 0
                          : R.call(t, { item: y, index: S }),
                      ]);
                    }),
                  ],
                ),
              ],
            },
          )
      );
    },
  });
const wf = Qt(C9),
  P9 = te({
    name: 'BuTree',
    props: g_,
    emits: ['lazy-load'],
    setup(e, t) {
      const { data: n, height: s, itemHeight: i } = mr(e),
        { slots: a } = t,
        c = k9(n == null ? void 0 : n.value, e, t);
      Zn('TREE_UTILS', c);
      const u = (d) =>
        Y(_9, zt(e, { treeNode: d, onClick: () => c.toggleNode(d) }), {
          content: () => (a.content ? a.content(d) : d.label),
          icon: () =>
            a.icon
              ? a.icon({ nodeData: d, toggleNode: c.toggleNode })
              : Y($9, { expanded: !!d.expanded }, null),
          loading: () =>
            a.loading
              ? a.loading({ nodeData: c })
              : Y('span', { class: 'ml-1' }, [At('loading...')]),
        });
      return () =>
        Y('div', { class: 'bu-tree' }, [
          s != null && s.value
            ? Y('div', { style: { height: `${s.value}px` } }, [
                Y(
                  wf,
                  { data: c.expendedTree.value, itemHeight: i.value },
                  { default: ({ item: d }) => u(d) },
                ),
              ])
            : c.expendedTree.value.map((d) => u(d)),
        ]);
    },
  });
const m_ = Qt(P9),
  S9 = () => {
    (function (e) {
      let t,
        n,
        s,
        i,
        a,
        c,
        u =
          '<svg><symbol id="left" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M31 36 19 24l12-12" data-follow-stroke="currentColor"/></symbol><symbol id="right" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="m19 12 12 12-12 12" data-follow-stroke="currentColor"/></symbol><symbol id="zoom-out" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z" data-follow-stroke="currentColor"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M15 21h12m6.222 12.222 8.485 8.485" data-follow-stroke="currentColor"/></symbol><symbol id="zoom-in" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z" data-follow-stroke="currentColor"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M21 15v12m-6-6h12m6.222 12.222 8.485 8.485" data-follow-stroke="currentColor"/></symbol><symbol id="download-four" viewBox="0 0 48 48" fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M24 29 12 17h8V6h8v11h8L24 29Z" clip-rule="evenodd" data-follow-stroke="currentColor"/><path stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M42 37H6m28 7H14" data-follow-stroke="currentColor"/></symbol><symbol id="full-screen" viewBox="0 0 48 48" fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9" data-follow-stroke="currentColor"/></symbol><symbol id="close" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="m8 8 32 32M8 40 40 8" data-follow-stroke="currentColor"/></symbol></svg>';
      function d() {
        a || ((a = !0), s());
      }
      (t = function () {
        let h, _, m;
        ((m = document.createElement('div')).innerHTML = u),
          (u = null),
          (_ = m.getElementsByTagName('svg')[0]) &&
            (_.setAttribute('aria-hidden', 'true'),
            (_.style.position = 'absolute'),
            (_.style.width = 0),
            (_.style.height = 0),
            (_.style.overflow = 'hidden'),
            (h = _),
            (m = document.body).firstChild
              ? (_ = m.firstChild).parentNode.insertBefore(h, _)
              : m.appendChild(h));
      }),
        document.addEventListener
          ? ['complete', 'loaded', 'interactive'].indexOf(document.readyState) >
            -1
            ? setTimeout(t, 0)
            : ((n = function () {
                document.removeEventListener('DOMContentLoaded', n, !1), t();
              }),
              document.addEventListener('DOMContentLoaded', n, !1))
          : document.attachEvent &&
            ((s = t),
            (i = e.document),
            (a = !1),
            (c = function () {
              try {
                i.documentElement.doScroll('left');
              } catch {
                return void setTimeout(c, 50);
              }
              d();
            })(),
            (i.onreadystatechange = function () {
              i.readyState == 'complete' &&
                ((i.onreadystatechange = null), d());
            }));
    })(window);
  },
  p0 = window.outerWidth / 4,
  T9 = te({
    props: {
      loop: { type: Boolean, default: !1 },
      active: { type: Number, default: 0 },
    },
    setup() {
      const e = re(),
        t = re(0),
        n = re(0),
        s = re(0),
        i = re(0),
        a = re(0),
        c = re(0),
        u = un({ active: 0, width: 0, swiping: !1 });
      return {
        trackDom: e,
        startX: t,
        startY: n,
        state: u,
        deltaX: s,
        deltaY: i,
        offsetX: a,
        offsetY: c,
      };
    },
    methods: {
      getStyle() {
        const e = this.$refs.trackDom;
        (this.state.width = e.clientWidth),
          (e.style.width = e.clientWidth * e.children.length + 'px');
      },
      touchstart(e) {
        this.reset(),
          (this.startX = e.touches[0].clientX),
          (this.startY = e.touches[0].clientY),
          (this.state.swiping = !0);
      },
      touchmove(e) {
        if (this.state.swiping) {
          const t = e.touches[0];
          (this.deltaX = (t.clientX < 0 ? 0 : t.clientX) - this.startX),
            (this.deltaY = t.clientY - this.startY),
            (this.offsetX = Math.abs(this.deltaX)),
            (this.offsetY = Math.abs(this.deltaY)),
            this.deltaX > 0
              ? this.checkActive('right') && this.move('right')
              : this.deltaX < 0 &&
                this.checkActive('left') &&
                this.move('left');
        }
      },
      touchend(e) {
        if (!this.state.swiping) return;
        const t = this.$refs.trackDom;
        (this.state.swiping = !1),
          this.deltaX > p0
            ? (this.loop &&
                this.state.active === 0 &&
                (this.state.active = t.children.length - 1),
              this.checkActive('right') &&
                ((this.state.active -= 1), this.move('right')))
            : this.deltaX < -p0
              ? (this.loop &&
                  this.state.active === t.children.length - 1 &&
                  (this.state.active = 0),
                this.checkActive('left') &&
                  ((this.state.active += 1), this.move('left')))
              : this.move('');
      },
      reset() {
        (this.startX = 0),
          (this.startY = 0),
          (this.deltaX = 0),
          (this.deltaY = 0),
          (this.offsetX = 0),
          (this.offsetY = 0);
      },
      move(e) {
        const t = this.$refs.trackDom;
        if (
          ((t.style.transitionDuration = `${this.state.swiping ? 0 : 500}ms`),
          e === 'left')
        ) {
          let n = this.state.active * this.state.width;
          this.state.swiping && (n += this.offsetX),
            (t.style.transform = `translateX(-${n}px)`);
        } else if (e === 'right') {
          let n = -this.state.active * this.state.width;
          this.state.swiping && (n += this.offsetX),
            (t.style.transform = `translateX(${n}px)`);
        } else {
          let n = this.state.active * this.state.width;
          t.style.transform = `translateX(-${n}px)`;
        }
        !this.state.swiping && e && this.$emit('change', this.state.active);
      },
      checkActive(e) {
        const t = this.$refs.trackDom;
        let n = !0;
        return (
          ((!this.loop &&
            this.state.active === t.children.length - 1 &&
            e === 'left') ||
            (!this.loop && this.state.active === 0 && e === 'right')) &&
            (n = !1),
          console.log('result', n, e),
          n
        );
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.getStyle();
      });
    },
    watch: {
      active: {
        handler(e) {
          (this.state.active = e),
            this.$nextTick(() => {
              this.move('');
            });
        },
        immediate: !0,
      },
    },
  });
function E9(e, t, n, s, i, a) {
  return (
    k(),
    M(
      'div',
      zt({ class: 'ysj-swipe-wrapper' }, e.$attrs),
      [
        I(
          'div',
          {
            class: 'ysj-swipe__track',
            ref: 'trackDom',
            onTouchstart:
              t[0] || (t[0] = (...c) => e.touchstart && e.touchstart(...c)),
            onTouchmove:
              t[1] || (t[1] = (...c) => e.touchmove && e.touchmove(...c)),
            onTouchend:
              t[2] || (t[2] = (...c) => e.touchend && e.touchend(...c)),
          },
          [K(e.$slots, 'default', {}, void 0, !0)],
          544,
        ),
      ],
      16,
    )
  );
}
const A9 = fe(T9, [
    ['render', E9],
    ['__scopeId', 'data-v-a8d1ade1'],
  ]),
  I9 = te({
    setup() {
      return {};
    },
  });
function M9(e, t, n, s, i, a) {
  return (
    k(),
    M(
      'div',
      zt({ class: 'ysj-swipe-item' }, e.$attrs),
      [K(e.$slots, 'default', {}, void 0, !0)],
      16,
    )
  );
}
const L9 = fe(I9, [
    ['render', M9],
    ['__scopeId', 'data-v-e4bff4b2'],
  ]),
  O9 = (e) => e.stopPropagation();
function h0(e, t) {
  (typeof e.cancelable != 'boolean' || e.cancelable) && e.preventDefault(),
    t && O9(e);
}
const js = fk();
let v0, eu, _0, La, Oa, Ds;
const B9 = te({
  name: 'img-preview',
  components: { swipe: A9, swipeItem: L9 },
  props: {
    config: {
      type: Object,
      default() {
        return { maxZoom: 3 };
      },
    },
  },
  setup() {
    const e = re(),
      t = re({ maxZoom: 3, current: 0, urls: [] }),
      n = re(!1),
      s = re(!1),
      i = un({ w: 0, h: 0 }),
      a = re(1),
      c = un({
        scale: 1,
        moveX: 0,
        moveY: 0,
        moving: !1,
        zooming: !1,
        imageRatio: 0,
        displayWidth: 0,
        displayHeight: 0,
      }),
      u = re(!1),
      d = un({
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0,
        originX: 0,
        originY: 0,
        isdown: !1,
      });
    return {
      imgDom: e,
      dataConfig: t,
      loading: n,
      imgInfo: i,
      loadIcon: S9,
      error: s,
      state: c,
      zoomRate: a,
      isHidden: u,
      imgPosition: d,
    };
  },
  computed: {
    browserRedirect() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
        ? 'Mobile'
        : 'Desktop';
    },
    imgStyle() {
      const {
          scale: e,
          moveX: t,
          moveY: n,
          moving: s,
          zooming: i,
        } = this.state,
        a = { transitionDuration: i || s ? '0s' : '.3s' };
      if (e !== 1) {
        const c = t / e,
          u = n / e;
        a.transform = `scale(${e}, ${e}) translate(${c}px, ${u}px)`;
      }
      return a;
    },
    imgTransform() {
      const { offsetX: e, offsetY: t, isdown: n } = this.imgPosition;
      return {
        transitionDuration: n ? '0s' : '.3s',
        transform: `translate(${e}px, ${t}px)`,
      };
    },
  },
  methods: {
    loadImage() {
      const e = window.innerWidth,
        t = window.innerHeight,
        n = e / t,
        s = this.$refs.imgDom;
      this.$nextTick(() => {
        (this.loading = !0),
          s.removeAttribute('width'),
          s.removeAttribute('height'),
          this.dataConfig &&
            (s.src = this.dataConfig.urls[this.dataConfig.current - 1]),
          (this.error = !1),
          (s.onload = () => {
            this.config.success && this.config.success('success');
            const i = s.width / s.height;
            (this.imgInfo.w = s.width),
              (this.imgInfo.h = s.height),
              i > n
                ? s.width > e * 0.7
                  ? ((s.style.width = e * 0.7 + 'px'),
                    (s.style.height = s.height / (s.width / (e * 0.7)) + 'px'),
                    (this.imgInfo.w = e * 0.7),
                    (this.imgInfo.h = s.height / (s.width / (e * 0.7))))
                  : ((s.style.width = s.width + 'px'),
                    (s.style.height = s.height + 'px'))
                : s.height > t * 0.7
                  ? ((s.style.height = t * 0.7 + 'px'),
                    (s.style.width = s.width / (s.height / (t * 0.7)) + 'px'),
                    (this.imgInfo.w = s.width / (s.height / (t * 0.7))),
                    (this.imgInfo.h = t * 0.7))
                  : ((s.style.width = s.width + 'px'),
                    (s.style.height = s.height + 'px')),
              (this.loading = !1);
          }),
          (s.onerror = (i) => {
            (this.loading = !1),
              (this.error = !0),
              this.config.fail && this.config.fail('fail');
          });
      });
    },
    arrawRight() {
      (this.dataConfig.current == this.dataConfig.urls.length &&
        !this.dataConfig.loop) ||
        (this.resetImgPositon(),
        (this.zoomRate = 1),
        this.dataConfig.current === this.dataConfig.urls.length &&
        this.dataConfig.loop
          ? (this.dataConfig.current = 1)
          : (this.dataConfig.current += 1),
        this.loadImage());
    },
    arrawLeft() {
      (this.dataConfig.current == 1 && !this.dataConfig.loop) ||
        (this.resetImgPositon(),
        (this.zoomRate = 1),
        this.dataConfig.loop && this.dataConfig.current == 1
          ? (this.dataConfig.current = this.dataConfig.urls.length)
          : (this.dataConfig.current -= 1),
        this.loadImage());
    },
    getFull() {
      if (this.isFull()) {
        const t = document.exitFullscreen;
        if (t) t.call(document);
        else if (window.ActiveXObject) {
          const n = new window.ActiveXObject('WScript.Shell');
          n && n.SendKeys('F11');
        }
      }
      const e = document.documentElement;
      e.requestFullscreen
        ? e.requestFullscreen()
        : e.mozRequestFullScreen
          ? e.mozRequestFullScreen()
          : e.webkitRequestFullscreen
            ? e.webkitRequestFullscreen()
            : e.msRequestFullscreen && e.msRequestFullscreen();
    },
    isFull() {
      return document.fullscreenElement || !1;
    },
    close() {
      if (this.isFull()) {
        const t = document.exitFullscreen;
        if (t) t.call(document);
        else if (window.ActiveXObject) {
          const n = new window.ActiveXObject('WScript.Shell');
          n && n.SendKeys('F11');
        }
      }
      const e = document.getElementsByClassName('ysj-imgage-wrapper');
      e[0].style.display = 'none';
    },
    touchstart(e) {
      if (this.browserRedirect === 'Desktop') return;
      const { touches: t } = e;
      js.start(e),
        (this.state.moving = t.length === 1 && this.state.scale !== 1),
        (this.state.zooming = t.length === 2),
        (La = this.state.moveX),
        (Oa = this.state.moveY),
        (v0 = Date.now()),
        this.state.zooming &&
          ((eu = this.state.scale), (_0 = this.getDistance(e.touches)));
    },
    touchmove(e) {
      const { touches: t } = e;
      js.move(e), (this.state.moving || this.state.zooming) && h0(e, !0);
      const n = this.config.maxZoom || 3;
      if (this.state.moving) {
        const { deltaX: s, deltaY: i } = js,
          a = s.value + La,
          c = i.value + Oa,
          u = Number((n / 2) * window.innerWidth),
          d = Number((n / 2) * window.innerHeight);
        (this.state.moveX = this.clamp(a, -u, u)),
          (this.state.moveY = this.clamp(c, -d, d));
      }
      if (this.state.zooming && t.length === 2) {
        const s = this.getDistance(t),
          i = (eu * s) / _0;
        i < 1
          ? (this.state.scale = i)
          : i > n
            ? (this.state.scale = n)
            : (this.state.scale = i);
      }
    },
    touchend(e) {
      let t = !1;
      if (this.state.moving || this.state.zooming) {
        (t = !0),
          this.state.moving &&
            La === this.state.moveX &&
            Oa === this.state.moveY &&
            (t = !1);
        const n = this.config.maxZoom || 3;
        if (!e.touches.length) {
          if (this.state.zooming) {
            const s = Number((n / 2) * window.innerWidth),
              i = Number((n / 2) * window.innerHeight);
            (this.state.moveX = this.clamp(this.state.moveX, -s, s)),
              (this.state.moveY = this.clamp(this.state.moveY, -i, i)),
              (this.state.zooming = !1);
          }
          (this.state.moving = !1),
            (La = 0),
            (Oa = 0),
            (eu = 1),
            this.state.scale < 1 && this.resetScale();
        }
      } else this.checkTap();
      h0(e, t), js.reset();
    },
    getDistance(e) {
      return Math.sqrt(
        (e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2,
      );
    },
    changeSwipe(e) {
      (this.dataConfig.current = e + 1), this.resetScale();
    },
    clamp(e, t, n) {
      return Math.min(Math.max(e, t), n);
    },
    resetScale() {
      (this.state.scale = 1), (this.state.moveX = 0), (this.state.moveY = 0);
    },
    checkTap() {
      const { offsetX: e, offsetY: t } = js,
        n = Date.now() - v0,
        s = 250,
        i = 5;
      e.value < i &&
        t.value < i &&
        n < s &&
        (Ds
          ? (clearTimeout(Ds), (Ds = null))
          : (Ds = setTimeout(() => {
              this.close(), (Ds = null);
            }, s)));
    },
    zoom(e) {
      this.resetImgPositon();
      const t = this.config.maxZoom || 3;
      if (this.zoomRate >= t && e === 'big') return;
      if (e === 'big') this.zoomRate = Number((this.zoomRate + 0.2).toFixed(1));
      else {
        if (this.zoomRate <= 0.2) return;
        this.zoomRate = Number((this.zoomRate - 0.2).toFixed(1));
      }
      const n = this.$refs.imgDom,
        s = this.imgInfo.w * this.zoomRate,
        i = this.imgInfo.h * this.zoomRate;
      n && ((n.style.width = s + 'px'), (n.style.height = i + 'px')),
        s > window.innerWidth || i > window.innerHeight
          ? (this.isHidden = !0)
          : (this.isHidden = !1);
    },
    mousedown(e) {
      e.preventDefault(),
        this.isHidden &&
          ((this.imgPosition.startX = e.clientX),
          (this.imgPosition.startY = e.clientY),
          (this.imgPosition.isdown = !0),
          (this.$refs.imgDom.style.cursor = 'move'));
    },
    mousemove(e) {
      if (this.isHidden && this.imgPosition.isdown) {
        const {
          originX: t,
          originY: n,
          startX: s,
          startY: i,
        } = this.imgPosition;
        let a = t + e.clientX - s,
          c = n + e.clientY - i;
        (this.imgPosition.offsetX = a), (this.imgPosition.offsetY = c);
      }
    },
    mouseup(e) {
      e.preventDefault(),
        (this.$refs.imgDom.style.cursor = 'default'),
        (this.imgPosition.isdown = !1),
        (this.imgPosition.originX = this.imgPosition.offsetX),
        (this.imgPosition.originY = this.imgPosition.offsetY);
    },
    resetImgPositon() {
      (this.imgPosition.offsetX = 0),
        (this.imgPosition.offsetY = 0),
        (this.imgPosition.originX = 0),
        (this.imgPosition.originY = 0);
    },
    init() {
      window.addEventListener('mousewheel', (e) => {
        document.getElementsByClassName('ysj-imgage-wrapper')[0].style
          .display !== 'none' &&
          (e.wheelDelta > 0 ? this.zoom('big') : this.zoom('small'));
      });
    },
    dwonload() {
      let e = this.dataConfig.urls[this.dataConfig.current - 1];
      window.open(e, '_blank');
    },
  },
  mounted() {
    this.loadIcon(),
      this.config &&
        (this.init(),
        (this.dataConfig = Object.assign({}, this.config)),
        this.browserRedirect === 'Desktop' && this.loadImage());
  },
});
const To = (e) => (dn('data-v-112b33f6'), (e = e()), pn(), e),
  V9 = { class: 'ysj-image-container' },
  F9 = { class: 'ysj-image-container-header' },
  R9 = { key: 0 },
  N9 = { key: 1, class: 'ysj-image-opt' },
  H9 = To(() =>
    I('svg', { class: 'iconpark-icon' }, [I('use', { href: '#zoom-in' })], -1),
  ),
  z9 = [H9],
  j9 = To(() =>
    I('svg', { class: 'iconpark-icon' }, [I('use', { href: '#zoom-out' })], -1),
  ),
  D9 = [j9],
  q9 = To(() =>
    I(
      'svg',
      { class: 'iconpark-icon' },
      [I('use', { href: '#download-four' })],
      -1,
    ),
  ),
  U9 = [q9],
  W9 = To(() =>
    I(
      'svg',
      { class: 'iconpark-icon' },
      [I('use', { href: '#full-screen' })],
      -1,
    ),
  ),
  K9 = [W9],
  Y9 = To(() =>
    I('svg', { class: 'iconpark-icon' }, [I('use', { href: '#close' })], -1),
  ),
  X9 = [Y9],
  Z9 = { class: 'loading-wrapper' },
  G9 = { class: 'loading-wrapper' },
  Q9 = { key: 1 },
  J9 = ['src'],
  e$ = To(() =>
    I('svg', { class: 'iconpark-icon' }, [I('use', { href: '#left' })], -1),
  ),
  t$ = [e$],
  n$ = To(() =>
    I('svg', { class: 'iconpark-icon' }, [I('use', { href: '#right' })], -1),
  ),
  r$ = [n$];
function o$(e, t, n, s, i, a) {
  const c = Hn('swipe-item'),
    u = Hn('swipe');
  return (
    k(),
    M('div', V9, [
      I('div', F9, [
        K(e.$slots, 'default', {}, void 0, !0),
        e.config.header
          ? ue('', !0)
          : (k(),
            M(
              'div',
              R9,
              Be(e.dataConfig.current + '/' + e.dataConfig.urls.length),
              1,
            )),
        !e.config.header && e.browserRedirect === 'Desktop'
          ? (k(),
            M('div', N9, [
              I(
                'button',
                { onClick: t[0] || (t[0] = (d) => e.zoom('big')) },
                z9,
              ),
              I(
                'button',
                { onClick: t[1] || (t[1] = (d) => e.zoom('small')) },
                D9,
              ),
              I(
                'button',
                {
                  onClick:
                    t[2] || (t[2] = (...d) => e.dwonload && e.dwonload(...d)),
                },
                U9,
              ),
              I(
                'button',
                {
                  onClick:
                    t[3] || (t[3] = (...d) => e.getFull && e.getFull(...d)),
                },
                K9,
              ),
              I(
                'button',
                {
                  onClick: t[4] || (t[4] = (...d) => e.close && e.close(...d)),
                },
                X9,
              ),
            ]))
          : ue('', !0),
      ]),
      e.browserRedirect === 'Desktop'
        ? (k(),
          M(
            'div',
            {
              key: 0,
              class: 'ysj-image-container-content',
              onMousedown:
                t[5] || (t[5] = (...d) => e.mousedown && e.mousedown(...d)),
              onMousemove:
                t[6] || (t[6] = (...d) => e.mousemove && e.mousemove(...d)),
              onMouseup:
                t[7] || (t[7] = (...d) => e.mouseup && e.mouseup(...d)),
            },
            [
              _r(I('span', Z9, '图片加载中', 512), [[Gn, e.loading]]),
              _r(I('span', G9, '图片加载失败', 512), [[Gn, e.error]]),
              _r(
                I(
                  'img',
                  { ref: 'imgDom', alt: '', style: dt(e.imgTransform) },
                  null,
                  4,
                ),
                [[Gn, !e.loading]],
              ),
            ],
            32,
          ))
        : (k(),
          M('div', Q9, [
            Y(
              u,
              {
                class: 'ysj-my-swipe',
                active: e.dataConfig.current - 1,
                onChange: e.changeSwipe,
              },
              {
                default: ae(() => [
                  (k(!0),
                  M(
                    Ae,
                    null,
                    wt(
                      e.config.urls,
                      (d, h) => (
                        k(),
                        ke(
                          c,
                          {
                            key: d,
                            onTouchstart: e.touchstart,
                            onTouchmove: e.touchmove,
                            onTouchend: e.touchend,
                          },
                          {
                            default: ae(() => [
                              I(
                                'img',
                                {
                                  src: d,
                                  style: dt(
                                    h === e.dataConfig.current - 1
                                      ? e.imgStyle
                                      : {},
                                  ),
                                  alt: '',
                                  class: 'img-item',
                                },
                                null,
                                12,
                                J9,
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ['onTouchstart', 'onTouchmove', 'onTouchend'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
              8,
              ['active', 'onChange'],
            ),
          ])),
      e.dataConfig.current > 1 && e.browserRedirect === 'Desktop'
        ? (k(),
          M(
            'div',
            {
              key: 2,
              class: 'ysj-image-arraw-left',
              onClick:
                t[8] ||
                (t[8] = Gr(
                  (...d) => e.arrawLeft && e.arrawLeft(...d),
                  ['stop'],
                )),
            },
            t$,
          ))
        : ue('', !0),
      e.dataConfig.current < e.dataConfig.urls.length &&
      e.browserRedirect === 'Desktop'
        ? (k(),
          M(
            'div',
            {
              key: 3,
              class: 'ysj-image-arraw-right',
              onClick:
                t[9] ||
                (t[9] = Gr(
                  (...d) => e.arrawRight && e.arrawRight(...d),
                  ['stop'],
                )),
            },
            r$,
          ))
        : ue('', !0),
    ])
  );
}
const s$ = fe(B9, [
  ['render', o$],
  ['__scopeId', 'data-v-112b33f6'],
]);
function i$(e) {
  const t = document.body,
    n =
      document.querySelector('.ysj-imgage-wrapper') ||
      document.createElement('div');
  n.classList.add('ysj-imgage-wrapper'), (n.style.display = 'block');
  const s = Y(s$, { config: e }, null);
  (s.props.onDestroy = () => {
    Jn(null, n);
  }),
    Jn(s, n),
    t.appendChild(n);
}
const y_ = pf(i$, '$previewImage'),
  a$ = ['disabled', 'placeholder', 'onKeyup'],
  l$ = te({
    name: 'BuRichTextArea',
    __name: 'richTextArea',
    props: {
      disabled: { type: Boolean, default: !1 },
      placeholder: { default: '' },
      copy: { type: Boolean, default: !1 },
      modelValue: {},
      maxImgWidth: { default: '240px' },
      maxImgHeight: { default: '240px' },
      maxImgSize: { default: 4 },
      imgPrevie: { type: Boolean, default: !1 },
    },
    emits: ['change', 'update:modelValue', 'imgUpload', 'keyup'],
    setup(e, { expose: t, emit: n }) {
      const s = n,
        i = e,
        a = re(),
        c = re(),
        u = re(!1);
      ut(() => {
        gr(() => {
          c.value &&
            (i.disabled
              ? c.value.setAttribute('contenteditable', 'false')
              : (c.value.setAttribute('contenteditable', 'true'),
                c.value.focus()));
        }),
          Tn(() => {
            c.value &&
              ((c.value.innerHTML = i.modelValue),
              h(),
              _(),
              i.copy && i.imgPrevie && m(),
              c.value.addEventListener('compositionstart', () => {
                u.value = !0;
              }),
              c.value.addEventListener('compositionend', () => {
                u.value = !1;
              }));
          });
      });
      function d(x) {
        const L = () => {
          console.log('1211'),
            setTimeout(() => {
              var O;
              s(
                'update:modelValue',
                (O = c.value) == null ? void 0 : O.innerHTML,
              ),
                s('change'),
                s('keyup', x);
            }, 10);
        };
        u.value ? x.code === 'Space' && L() : L();
      }
      function h() {
        var x = window.getSelection(),
          L = document.createRange();
        L.selectNodeContents(c.value),
          L.collapse(!1),
          x && x.removeAllRanges(),
          x && x.addRange(L);
      }
      function _() {
        var x;
        (x = c.value) == null ||
          x.addEventListener('paste', async (L) => {
            var V, P;
            console.log('props.copy', i.copy),
              L.preventDefault(),
              L.stopPropagation();
            let O = ((V = L.clipboardData) == null ? void 0 : V.items) || [];
            for (let w = 0; w < (O == null ? void 0 : O.length); w++) {
              const B = O[w];
              if (B.kind === 'string' && B.type === 'text/plain')
                B.getAsString(function (N) {
                  document.execCommand('insertHTML', !0, N);
                });
              else if (
                B.kind === 'file' &&
                B.type.indexOf('image') !== -1 &&
                i.copy
              ) {
                const N = B.getAsFile();
                if (N && N.size < i.maxImgSize * 1024 * 1024) {
                  const q = window.URL.createObjectURL(N);
                  document.execCommand(
                    'insertHTML',
                    !0,
                    `<img src=${q} style="max-width: ${i.maxImgWidth}; max-height: ${i.maxImgHeight};vertical-align: bottom"></img>`,
                  ),
                    s(
                      'update:modelValue',
                      (P = c.value) == null ? void 0 : P.innerHTML,
                    ),
                    s('imgUpload', N),
                    s('change');
                }
              }
            }
          });
      }
      function m() {
        var x;
        (x = c.value) == null ||
          x.addEventListener('dblclick', (L) => {
            const O = L.target;
            if ((console.log('target', O), O && O.tagName === 'IMG')) {
              if (a.value)
                (a.value.style.display = 'block'),
                  a.value.classList.add('bu-rich-img-wrapper-active'),
                  (a.value.children[0].src = O.currentSrc);
              else {
                (a.value = document.createElement('div')),
                  a.value.classList.add('bu-rich-img-wrapper-active');
                const V = document.createElement('img');
                (V.src = O.currentSrc),
                  V.classList.add('bu-rich-enlarged'),
                  a.value.appendChild(V),
                  document.body.appendChild(a.value);
              }
              a.value.addEventListener('click', (V) => {
                V.target &&
                  V.target.tagName !== 'IMG' &&
                  (a.value.classList.remove('bu-rich-img-wrapper-active'),
                  (a.value.style.display = 'none'));
              });
            }
          });
      }
      function y(x) {
        c.value && (c.value.innerText = x);
      }
      function S() {
        return c.value && c.value.innerText;
      }
      function R(x) {
        document.execCommand('insertHTML', !0, x);
      }
      return (
        t({ setText: y, getText: S, insertHtml: R }),
        (x, L) => (
          k(),
          M(
            'div',
            zt({ class: 'bu-rich-textarea-content' }, x.$attrs, {
              ref_key: 'textDom',
              ref: c,
              contenteditable: '',
              disabled: x.disabled,
              placeholder: x.placeholder,
              onKeyup: Gr(d, ['stop']),
            }),
            null,
            16,
            a$,
          )
        )
      );
    },
  });
const c$ = fe(l$, [['__scopeId', 'data-v-9e628f0f']]);
const b_ = Qt(c$),
  g0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BuAside: Av,
        BuButton: xv,
        BuCheckbox: hf,
        BuContainer: Ev,
        BuFooter: Iv,
        BuForm: Vv,
        BuFormItem: Fv,
        BuGrid: Nv,
        BuGridItem: Hv,
        BuHeader: Mv,
        BuIcon: Pn,
        BuImgPreview: y_,
        BuInput: s_,
        BuLoading: i_,
        BuMain: Lv,
        BuMessage: f_,
        BuModal: d_,
        BuNotification: p_,
        BuRichTextArea: b_,
        BuSpace: h_,
        BuSplit: v_,
        BuTitle: __,
        BuTree: m_,
        BuVirtualList: wf,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
(window._iconfont_svg_string_3889283 =
  '<svg><symbol id="icon-checkbox" viewBox="0 0 1024 1024"><path d="M810.666667 213.333333v597.333334H213.333333V213.333333h597.333334m0-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z"  ></path></symbol><symbol id="icon-checkbox-select" viewBox="0 0 1024 1024"><path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-353.706667 567.04a42.496 42.496 0 0 1-60.16 0L243.626667 541.866667c-8.106667-8.106667-12.373333-18.773333-12.373334-29.866667s4.693333-22.186667 12.373334-29.866667a42.496 42.496 0 0 1 60.16 0L426.666667 604.586667l293.546666-293.546667a42.496 42.496 0 1 1 60.16 60.16l-323.413333 323.84z"  ></path></symbol><symbol id="icon-checkbox-indeterminate" viewBox="0 0 1024 1024"><path d="M170.666667 128h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m128 341.333333v85.333334h426.666666v-85.333334H298.666667z"  ></path></symbol><symbol id="icon-success" viewBox="0 0 1024 1024"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64z m-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z"  ></path></symbol><symbol id="icon-info" viewBox="0 0 1024 1024"><path d="M512 96c-229.76 0-416 186.24-416 416s186.24 416 416 416 416-186.24 416-416-186.24-416-416-416zM577.248 665.056c-31.392 47.136-63.328 83.456-117.056 83.456-36.672-5.984-51.744-32.256-43.808-59.04l69.12-228.928c1.696-5.6-1.12-11.584-6.24-13.408-5.088-1.792-15.072 4.832-23.712 14.304l-41.792 50.272c-1.12-8.448-0.128-22.4-0.128-28.032 31.392-47.136 82.976-84.32 117.952-84.32 33.248 3.392 48.992 29.984 43.2 59.2l-69.6 230.048c-0.928 5.184 1.824 10.464 6.528 12.128 5.12 1.792 15.872-4.832 24.544-14.304l41.76-50.24c1.12 8.448-0.768 23.232-0.768 28.864zM567.936 366.048c-26.432 0-47.872-19.264-47.872-47.616s21.44-47.584 47.872-47.584 47.872 19.264 47.872 47.584c0 28.384-21.44 47.616-47.872 47.616z"  ></path></symbol><symbol id="icon-warning-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64z m0 394.016l-104-104q-12-12-27.488-12t-27.008 11.488-11.488 27.008 12 27.488l104 104-104 104q-12 12-12 27.488t11.488 27.008 27.008 11.488 27.488-12l104-104 104 104q16 15.008 36.992 9.504t26.496-26.496-9.504-36.992L565.984 512l104-104q12-12 12-27.488t-11.488-27.008-27.008-11.488-27.488 12z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z" fill="#666666" ></path></symbol><symbol id="icon-caret-right" viewBox="0 0 1024 1024"><path d="M320 769.324V254.676c0-35.636 43.086-53.482 68.284-28.284l257.324 257.324c15.62 15.62 15.62 40.948 0 56.568L388.284 797.608C363.086 822.808 320 804.96 320 769.324z"  ></path></symbol><symbol id="icon-question-circle" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7c0-19.7 12.4-37.7 30.9-44.8 59-22.7 97.1-74.7 97.1-132.5 0.1-39.3-17.1-76-48.3-103.3z"  ></path><path d="M512 732m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M834.7648 736.3584a5.632 5.632 0 1 0 11.264 0 5.632 5.632 0 0 0-11.264 0z m-124.16 128.1024a11.1616 11.1616 0 1 0 22.3744 0 11.1616 11.1616 0 0 0-22.3744 0z m-167.3216 65.8944a16.7936 16.7936 0 1 0 33.6384 0 16.7936 16.7936 0 0 0-33.6384 0zM363.1616 921.6a22.3744 22.3744 0 1 0 44.7488 0 22.3744 22.3744 0 0 0-44.7488 0z m-159.744-82.0224a28.0064 28.0064 0 1 0 55.9616 0 28.0064 28.0064 0 0 0-56.0128 0zM92.672 700.16a33.6384 33.6384 0 1 0 67.2256 0 33.6384 33.6384 0 0 0-67.2256 0zM51.2 528.9984a39.168 39.168 0 1 0 78.336 0 39.168 39.168 0 0 0-78.336 0z m34.1504-170.0864a44.8 44.8 0 1 0 89.6 0 44.8 44.8 0 0 0-89.6 0zM187.904 221.7984a50.432 50.432 0 1 0 100.864 0 50.432 50.432 0 0 0-100.864 0zM338.432 143.36a55.9616 55.9616 0 1 0 111.9232 0 55.9616 55.9616 0 0 0-111.9744 0z m169.0112-4.9152a61.5936 61.5936 0 1 0 123.2384 0 61.5936 61.5936 0 0 0-123.2384 0z m154.7776 69.632a67.1744 67.1744 0 1 0 134.3488 0 67.1744 67.1744 0 0 0-134.3488 0z m110.0288 130.816a72.8064 72.8064 0 1 0 145.5616 0 72.8064 72.8064 0 0 0-145.5616 0z m43.7248 169.472a78.3872 78.3872 0 1 0 156.8256 0 78.3872 78.3872 0 0 0-156.8256 0z" fill="" ></path></symbol><symbol id="icon-caret-left" viewBox="0 0 1024 1024"><path d="M270.848 544.725l336.896 297.302a45.525 45.525 0 0 0 63.403-3.286c7.424-8.064 11.52-18.56 11.52-29.44V214.7c0-24.32-20.096-44.032-44.886-44.032-11.093 0-21.76 4.01-30.037 11.306L270.848 479.275a43.435 43.435 0 0 0 0 65.45z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" fill="#666666" ></path></symbol><symbol id="icon-caret-bottom" viewBox="0 0 1024 1024"><path d="M184.32 315.392l327.68 393.216 327.68-393.216H184.32z"  ></path></symbol><symbol id="icon-caret-top" viewBox="0 0 1024 1024"><path d="M512 315.392L184.32 708.608h655.36L512 315.392z"  ></path></symbol></svg>'),
  (function (e) {
    var n = (n = document.getElementsByTagName('script'))[n.length - 1],
      t = n.getAttribute('data-injectcss'),
      n = n.getAttribute('data-disable-injectsvg');
    if (!n) {
      var s,
        i,
        a,
        c,
        u,
        d = function (m, y) {
          y.parentNode.insertBefore(m, y);
        };
      if (t && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          );
        } catch (m) {
          console && console.log(m);
        }
      }
      (s = function () {
        var m,
          y = document.createElement('div');
        (y.innerHTML = e._iconfont_svg_string_3889283),
          (y = y.getElementsByTagName('svg')[0]) &&
            (y.setAttribute('aria-hidden', 'true'),
            (y.style.position = 'absolute'),
            (y.style.width = 0),
            (y.style.height = 0),
            (y.style.overflow = 'hidden'),
            (y = y),
            (m = document.body).firstChild
              ? d(y, m.firstChild)
              : m.appendChild(y));
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(s, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), s();
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((a = s),
            (c = e.document),
            (u = !1),
            _(),
            (c.onreadystatechange = function () {
              c.readyState == 'complete' &&
                ((c.onreadystatechange = null), h());
            }));
    }
    function h() {
      u || ((u = !0), a());
    }
    function _() {
      try {
        c.documentElement.doScroll('left');
      } catch {
        return void setTimeout(_, 50);
      }
      h();
    }
  })(window);
const w_ = {
    install: (e) => {
      for (const t in g0) e.use(g0[t]);
    },
  },
  cI = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BuAside: Av,
        BuButton: xv,
        BuCheckbox: hf,
        BuContainer: Ev,
        BuFooter: Iv,
        BuForm: Vv,
        BuFormItem: Fv,
        BuGrid: Nv,
        BuGridItem: Hv,
        BuHeader: Mv,
        BuIcon: Pn,
        BuImgPreview: y_,
        BuInput: s_,
        BuLoading: i_,
        BuMain: Lv,
        BuMessage: f_,
        BuModal: d_,
        BuNotification: p_,
        BuRichTextArea: b_,
        BuSpace: h_,
        BuSplit: v_,
        BuTitle: __,
        BuTree: m_,
        BuVirtualList: wf,
        default: w_,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  u$ = 'modulepreload',
  f$ = function (e) {
    return '/' + e;
  },
  m0 = {},
  d$ = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName('link');
    return Promise.all(
      n.map((a) => {
        if (((a = f$(a)), a in m0)) return;
        m0[a] = !0;
        const c = a.endsWith('.css'),
          u = c ? '[rel="stylesheet"]' : '';
        if (!!s)
          for (let _ = i.length - 1; _ >= 0; _--) {
            const m = i[_];
            if (m.href === a && (!c || m.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${a}"]${u}`)) return;
        const h = document.createElement('link');
        if (
          ((h.rel = c ? 'stylesheet' : u$),
          c || ((h.as = 'script'), (h.crossOrigin = '')),
          (h.href = a),
          document.head.appendChild(h),
          c)
        )
          return new Promise((_, m) => {
            h.addEventListener('load', _),
              h.addEventListener('error', () =>
                m(new Error(`Unable to preload CSS for ${a}`)),
              );
          });
      }),
    )
      .then(() => t())
      .catch((a) => {
        const c = new Event('vite:preloadError', { cancelable: !0 });
        if (((c.payload = a), window.dispatchEvent(c), !c.defaultPrevented))
          throw a;
      });
  };
const p$ = te({
  __name: 'VPBadge',
  props: { text: {}, type: {} },
  setup(e) {
    return (t, n) => (
      k(),
      M(
        'span',
        { class: Ce(['VPBadge', t.type ?? 'tip']) },
        [K(t.$slots, 'default', {}, () => [At(Be(t.text), 1)], !0)],
        2,
      )
    );
  },
});
const h$ = fe(p$, [['__scopeId', 'data-v-3769e2f1']]),
  v$ = JSON.parse(
    '{"lang":"en-US","title":"BuBu-UI","description":"A VitePress site","base":"/","head":[],"appearance":true,"themeConfig":{"sidebar":{"/guide/":[{"text":"开始","collapsible":true,"items":[{"text":"什么是bubu-ui?","link":"/guide/start"},{"text":"快速开始","link":"/guide/quickStart"}]}],"/components/":[{"text":"布局组件","items":[{"text":"Container组件","link":"/components/container"},{"text":"Grid组件","link":"/components/grid"},{"text":"Space组件","link":"/components/space"},{"text":"Split组件","link":"/components/split"}]},{"text":"基础组件","items":[{"text":"Button组件","link":"/components/button"},{"text":"Title组件","link":"/components/title"},{"text":"Icon组件","link":"/components/icon"}]},{"text":"表单组件","items":[{"text":"Input组件","link":"/components/input"},{"text":"Checkbox组件","link":"/components/checkbox"},{"text":"Form组件","link":"/components/form"},{"text":"richTextArea组件","link":"/components/richTextArea"}]},{"text":"数据展示","items":[{"text":"Tree组件","link":"/components/tree"},{"text":"图片预览","link":"/components/imgpreview"}]},{"text":"反馈组件","items":[{"text":"Notification组件","link":"/components/notification"},{"text":"Loading组件","link":"/components/loading"},{"text":"Message组件","link":"/components/message"}]}]},"nav":[{"text":"指南","link":"/guide/start","activeMatch":"/guide/"},{"text":"组件","link":"/components/button","activeMatch":"/components/"},{"items":[{"text":"bubu-cli","link":"https://github.com/yeshaojun/bubu-cli"},{"text":"mini-vue","link":"https://github.com/yeshaojun/v3-mini"}]}],"socialLinks":[{"icon":"github","link":"https://github.com/BuBuUI/bubu-ui/"}],"footer":{"message":"Released under the MIT License.","copyright":"Copyright © 2019-present Evan You"}},"locales":{},"langs":{},"scrollOffset":90,"cleanUrls":"disabled"}',
  ),
  xl = /^[a-z]+:/i,
  _$ = /^pathname:\/\//,
  y0 = 'vitepress-theme-appearance',
  Ht = typeof window < 'u',
  k_ = {
    relativePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
  };
function g$(e, t) {
  t.sort((n, s) => {
    const i = s.split('/').length - n.split('/').length;
    return i !== 0 ? i : s.length - n.length;
  });
  for (const n of t) if (e.startsWith(n)) return n;
}
function b0(e, t) {
  const n = g$(t, Object.keys(e));
  return n ? e[n] : void 0;
}
function m$(e) {
  const { locales: t } = e.themeConfig || {},
    n = e.locales;
  return t && n
    ? Object.keys(t).reduce(
        (s, i) => ((s[i] = { label: t[i].label, lang: n[i].lang }), s),
        {},
      )
    : {};
}
function y$(e, t) {
  t = w$(e, t);
  const n = b0(e.locales || {}, t),
    s = b0(e.themeConfig.locales || {}, t);
  return Object.assign({}, e, n, {
    themeConfig: Object.assign({}, e.themeConfig, s, { locales: {} }),
    lang: (n || e).lang,
    locales: {},
    langs: m$(e),
  });
}
function $_(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate;
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n);
  const i = b$(e.title, s);
  return `${n}${i}`;
}
function b$(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`;
}
function w$(e, t) {
  if (!Ht) return t;
  const n = e.base,
    s = n.endsWith('/') ? n.slice(0, -1) : n;
  return t.slice(s.length);
}
function k$(e, t) {
  const [n, s] = t;
  if (n !== 'meta') return !1;
  const i = Object.entries(s)[0];
  return i == null ? !1 : e.some(([a, c]) => a === n && c[i[0]] === i[1]);
}
function $$(e, t) {
  return [...e.filter((n) => !k$(t, n)), ...t];
}
const x$ = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  C$ = /^[a-z]:/i;
function w0(e) {
  const t = C$.exec(e),
    n = t ? t[0] : '';
  return (
    n +
    e
      .slice(n.length)
      .replace(x$, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  );
}
function P$(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/');
}
function hi(e) {
  return xl.test(e) ? e : P$(hs.value.base, e);
}
function x_(e) {
  let t = e.replace(/\.html$/, '');
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), Ht)) {
    const n = '/';
    t = w0(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md';
    let s = __VP_HASH_MAP__[t.toLowerCase()];
    s ||
      ((t = t.endsWith('_index.md')
        ? t.slice(0, -9) + '.md'
        : t.slice(0, -3) + '_index.md'),
      (s = __VP_HASH_MAP__[t.toLowerCase()])),
      (t = `${n}assets/${t}.${s}.js`);
  } else t = `./${w0(t.slice(1).replace(/\//g, '_'))}.md.js`;
  return t;
}
const C_ = Symbol(),
  hs = i1(v$);
function S$(e) {
  const t = de(() => y$(hs.value, e.path));
  return {
    site: t,
    theme: de(() => t.value.themeConfig),
    page: de(() => e.data),
    frontmatter: de(() => e.data.frontmatter),
    lang: de(() => t.value.lang),
    localePath: de(() => {
      const { langs: n, lang: s } = t.value,
        i = Object.keys(n).find((a) => n[a].lang === s);
      return hi(i || '/');
    }),
    title: de(() => $_(t.value, e.data)),
    description: de(() => e.data.description || t.value.description),
    isDark: re(!1),
  };
}
function Ke() {
  const e = Ot(C_);
  if (!e) throw new Error('vitepress data not properly injected in app');
  return e;
}
const P_ = Symbol(),
  k0 = 'http://a.com',
  T$ = () => ({ path: '/', component: null, data: k_ });
function E$(e, t) {
  const n = un(T$()),
    s = { route: n, go: i };
  async function i(u = Ht ? location.href : '/') {
    var h, _;
    await ((h = s.onBeforeRouteChange) == null ? void 0 : h.call(s, u));
    const d = new URL(u, k0);
    hs.value.cleanUrls === 'disabled' &&
      !d.pathname.endsWith('/') &&
      !d.pathname.endsWith('.html') &&
      ((d.pathname += '.html'), (u = d.pathname + d.search + d.hash)),
      Ht &&
        (history.replaceState(
          { scrollPosition: window.scrollY },
          document.title,
        ),
        history.pushState(null, '', u)),
      await c(u),
      await ((_ = s.onAfterRouteChanged) == null ? void 0 : _.call(s, u));
  }
  let a = null;
  async function c(u, d = 0, h = !1) {
    const _ = new URL(u, k0),
      m = (a = _.pathname);
    try {
      let y = await e(m);
      if (a === m) {
        a = null;
        const { default: S, __pageData: R } = y;
        if (!S) throw new Error(`Invalid route component: ${S}`);
        (n.path = Ht ? m : hi(m)),
          (n.component = rs(S)),
          (n.data = rs(R)),
          Ht &&
            Tn(() => {
              if (_.hash && !d) {
                let x = null;
                try {
                  x = document.querySelector(decodeURIComponent(_.hash));
                } catch (L) {
                  console.warn(L);
                }
                if (x) {
                  $0(x, _.hash);
                  return;
                }
              }
              window.scrollTo(0, d);
            });
      }
    } catch (y) {
      if (
        (!/fetch/.test(y.message) &&
          !/^\/404(\.html|\/)?$/.test(u) &&
          console.error(y),
        !h)
      )
        try {
          const S = await fetch(hs.value.base + 'hashmap.json');
          (window.__VP_HASH_MAP__ = await S.json()), await c(u, d, !0);
          return;
        } catch {}
      a === m &&
        ((a = null),
        (n.path = Ht ? m : hi(m)),
        (n.component = t ? rs(t) : null),
        (n.data = k_));
    }
  }
  return (
    Ht &&
      (window.addEventListener(
        'click',
        (u) => {
          if (u.target.closest('button')) return;
          const h = u.target.closest('a');
          if (h && !h.closest('.vp-raw') && !h.download) {
            const {
                href: _,
                origin: m,
                pathname: y,
                hash: S,
                search: R,
                target: x,
              } = h,
              L = window.location,
              O = y.match(/\.\w+$/);
            !u.ctrlKey &&
              !u.shiftKey &&
              !u.altKey &&
              !u.metaKey &&
              x !== '_blank' &&
              m === L.origin &&
              !(O && O[0] !== '.html') &&
              (u.preventDefault(),
              y === L.pathname && R === L.search
                ? S &&
                  S !== L.hash &&
                  (history.pushState(null, '', S),
                  window.dispatchEvent(new Event('hashchange')),
                  $0(h, S, h.classList.contains('header-anchor')))
                : i(_));
          }
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', (u) => {
        c(location.href, (u.state && u.state.scrollPosition) || 0);
      }),
      window.addEventListener('hashchange', (u) => {
        u.preventDefault();
      })),
    s
  );
}
function A$() {
  const e = Ot(P_);
  if (!e) throw new Error('useRouter() is called without provider.');
  return e;
}
function wr() {
  return A$().route;
}
function $0(e, t, n = !1) {
  let s = null;
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.querySelector(decodeURIComponent(t));
  } catch (i) {
    console.warn(i);
  }
  if (s) {
    let i = hs.value.scrollOffset;
    typeof i == 'string' &&
      (i = document.querySelector(i).getBoundingClientRect().bottom + 24);
    const a = parseInt(window.getComputedStyle(s).paddingTop, 10),
      c = window.scrollY + s.getBoundingClientRect().top - i + a;
    !n || Math.abs(c - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, c)
      : window.scrollTo({ left: 0, top: c, behavior: 'smooth' });
  }
}
const I$ = te({
  name: 'VitePressContent',
  props: { onContentUpdated: Function },
  setup(e) {
    const t = wr();
    return (
      ys(() => {
        var n;
        (n = e.onContentUpdated) == null || n.call(e);
      }),
      () =>
        jn('div', { style: { position: 'relative' } }, [
          t.component ? jn(t.component) : null,
        ])
    );
  },
});
var x0;
const S_ = typeof window < 'u';
S_ &&
  (x0 = window == null ? void 0 : window.navigator) != null &&
  x0.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function M$(e) {
  return e;
}
function L$(e) {
  return gi() ? (al(e), !0) : !1;
}
function O$(e) {
  return typeof e == 'function' ? de(e) : re(e);
}
function B$(e, t = !0) {
  En() ? ut(e) : t ? e() : Tn(e);
}
const V$ = S_ ? window : void 0;
function F$(e, t = !1) {
  const n = re(),
    s = () => (n.value = !!e());
  return s(), B$(s, t), n;
}
function Ou(e, t = {}) {
  const { window: n = V$ } = t,
    s = F$(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function');
  let i;
  const a = re(!1),
    c = () => {
      i &&
        ('removeEventListener' in i
          ? i.removeEventListener('change', u)
          : i.removeListener(u));
    },
    u = () => {
      s.value &&
        (c(),
        (i = n.matchMedia(O$(e).value)),
        (a.value = i.matches),
        'addEventListener' in i
          ? i.addEventListener('change', u)
          : i.addListener(u));
    };
  return gr(u), L$(() => c()), a;
}
const C0 =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  P0 = '__vueuse_ssr_handlers__';
C0[P0] = C0[P0] || {};
var S0;
(function (e) {
  (e.UP = 'UP'),
    (e.RIGHT = 'RIGHT'),
    (e.DOWN = 'DOWN'),
    (e.LEFT = 'LEFT'),
    (e.NONE = 'NONE');
})(S0 || (S0 = {}));
var R$ = Object.defineProperty,
  T0 = Object.getOwnPropertySymbols,
  N$ = Object.prototype.hasOwnProperty,
  H$ = Object.prototype.propertyIsEnumerable,
  E0 = (e, t, n) =>
    t in e
      ? R$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  z$ = (e, t) => {
    for (var n in t || (t = {})) N$.call(t, n) && E0(e, n, t[n]);
    if (T0) for (var n of T0(t)) H$.call(t, n) && E0(e, n, t[n]);
    return e;
  };
const j$ = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
z$({ linear: M$ }, j$);
const T_ = /#.*$/,
  D$ = /(index)?\.(md|html)$/,
  q$ = typeof window < 'u',
  U$ = re(q$ ? location.hash : '');
function W$(e) {
  return xl.test(e);
}
function K$(e, t) {
  let n,
    s = !1;
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(e, t))
        : (e(),
          (s = !0),
          setTimeout(() => {
            s = !1;
          }, t));
  };
}
function ks(e, t, n = !1) {
  if (t === void 0) return !1;
  if (((e = I0(`/${e}`)), n)) return new RegExp(t).test(e);
  if (I0(t) !== e) return !1;
  const s = t.match(T_);
  return s ? U$.value === s[0] : !0;
}
function A0(e) {
  return /^\//.test(e) ? e : `/${e}`;
}
function I0(e) {
  return decodeURI(e).replace(T_, '').replace(D$, '');
}
function el(e) {
  if (W$(e)) return e.replace(_$, '');
  const { site: t } = Ke(),
    { pathname: n, search: s, hash: i } = new URL(e, 'http://example.com'),
    a =
      n.endsWith('/') || n.endsWith('.html')
        ? e
        : `${n.replace(
            /(\.md)?$/,
            t.value.cleanUrls === 'disabled' ? '.html' : '',
          )}${s}${i}`;
  return hi(a);
}
function E_(e, t) {
  if (Array.isArray(e)) return e;
  if (e == null) return [];
  t = A0(t);
  const n = Object.keys(e)
    .sort((s, i) => i.split('/').length - s.split('/').length)
    .find((s) => t.startsWith(A0(s)));
  return n ? e[n] : [];
}
function Y$(e) {
  const t = [];
  function n(s) {
    for (const i of s)
      i.link && t.push({ ...i, link: i.link }), 'items' in i && n(i.items);
  }
  for (const s of e) n(s.items);
  return t;
}
function Dn() {
  const e = wr(),
    { theme: t, frontmatter: n } = Ke(),
    s = Ou('(min-width: 960px)'),
    i = re(!1),
    a = de(() => {
      const y = t.value.sidebar,
        S = e.data.relativePath;
      return y ? E_(y, S) : [];
    }),
    c = de(
      () =>
        n.value.sidebar !== !1 &&
        a.value.length > 0 &&
        n.value.layout !== 'home',
    ),
    u = de(() => n.value.layout !== 'home' && n.value.aside !== !1),
    d = de(() => c.value && s.value);
  function h() {
    i.value = !0;
  }
  function _() {
    i.value = !1;
  }
  function m() {
    i.value ? _() : h();
  }
  return {
    isOpen: i,
    sidebar: a,
    hasSidebar: c,
    hasAside: u,
    isSidebarEnabled: d,
    open: h,
    close: _,
    toggle: m,
  };
}
function X$(e, t) {
  let n;
  gr(() => {
    n = e.value ? document.activeElement : void 0;
  }),
    ut(() => {
      window.addEventListener('keyup', s);
    }),
    br(() => {
      window.removeEventListener('keyup', s);
    });
  function s(i) {
    i.key === 'Escape' && e.value && (t(), n == null || n.focus());
  }
}
const Z$ = te({
  __name: 'VPSkipLink',
  setup(e) {
    const t = wr(),
      n = re();
    yt(
      () => t.path,
      () => n.value.focus(),
    );
    function s({ target: i }) {
      const a = document.querySelector(i.hash);
      if (a) {
        const c = () => {
          a.removeAttribute('tabindex'), a.removeEventListener('blur', c);
        };
        a.setAttribute('tabindex', '-1'),
          a.addEventListener('blur', c),
          a.focus(),
          window.scrollTo(0, 0);
      }
    }
    return (i, a) => (
      k(),
      M(
        Ae,
        null,
        [
          I(
            'span',
            { ref_key: 'backToTop', ref: n, tabindex: '-1' },
            null,
            512,
          ),
          I(
            'a',
            {
              href: '#VPContent',
              class: 'VPSkipLink visually-hidden',
              onClick: s,
            },
            ' Skip to content ',
          ),
        ],
        64,
      )
    );
  },
});
const G$ = fe(Z$, [['__scopeId', 'data-v-641e32a3']]),
  Q$ = { key: 0, class: 'VPBackdrop' },
  J$ = te({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(e) {
      return (t, n) => (
        k(),
        ke(
          Nn,
          { name: 'fade' },
          {
            default: ae(() => [t.show ? (k(), M('div', Q$)) : ue('', !0)]),
            _: 1,
          },
        )
      );
    },
  });
const ex = fe(J$, [['__scopeId', 'data-v-cbde629e']]);
function tx() {
  const e = re(!1);
  function t() {
    (e.value = !0), window.addEventListener('resize', i);
  }
  function n() {
    (e.value = !1), window.removeEventListener('resize', i);
  }
  function s() {
    e.value ? n() : t();
  }
  function i() {
    window.outerWidth >= 768 && n();
  }
  const a = wr();
  return (
    yt(() => a.path, n),
    { isScreenOpen: e, openScreen: t, closeScreen: n, toggleScreen: s }
  );
}
const nx = ['src', 'alt'],
  rx = { inheritAttrs: !1 },
  ox = te({
    ...rx,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(e) {
      return (t, n) => {
        const s = Hn('VPImage', !0);
        return t.image
          ? (k(),
            M(
              Ae,
              { key: 0 },
              [
                typeof t.image == 'string' || 'src' in t.image
                  ? (k(),
                    M(
                      'img',
                      zt(
                        { key: 0, class: 'VPImage' },
                        typeof t.image == 'string'
                          ? t.$attrs
                          : { ...t.image, ...t.$attrs },
                        {
                          src: D(hi)(
                            typeof t.image == 'string' ? t.image : t.image.src,
                          ),
                          alt:
                            t.alt ??
                            (typeof t.image == 'string'
                              ? ''
                              : t.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      nx,
                    ))
                  : (k(),
                    M(
                      Ae,
                      { key: 1 },
                      [
                        Y(
                          s,
                          zt(
                            {
                              class: 'dark',
                              image: t.image.dark,
                              alt: t.image.alt,
                            },
                            t.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                        Y(
                          s,
                          zt(
                            {
                              class: 'light',
                              image: t.image.light,
                              alt: t.image.alt,
                            },
                            t.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : ue('', !0);
      };
    },
  });
const kf = fe(ox, [['__scopeId', 'data-v-d605929a']]),
  sx = ['href'],
  ix = te({
    __name: 'VPNavBarTitle',
    setup(e) {
      const { site: t, theme: n } = Ke(),
        { hasSidebar: s } = Dn();
      return (i, a) => (
        k(),
        M(
          'div',
          { class: Ce(['VPNavBarTitle', { 'has-sidebar': D(s) }]) },
          [
            I(
              'a',
              { class: 'title', href: D(t).base },
              [
                K(i.$slots, 'nav-bar-title-before', {}, void 0, !0),
                Y(kf, { class: 'logo', image: D(n).logo }, null, 8, ['image']),
                D(n).siteTitle
                  ? (k(), M(Ae, { key: 0 }, [At(Be(D(n).siteTitle), 1)], 64))
                  : D(n).siteTitle === void 0
                    ? (k(), M(Ae, { key: 1 }, [At(Be(D(t).title), 1)], 64))
                    : ue('', !0),
                K(i.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              sx,
            ),
          ],
          2,
        )
      );
    },
  });
const ax = fe(ix, [['__scopeId', 'data-v-e1d64914']]);
const lx = { key: 0, class: 'VPNavBarSearch' },
  cx = {
    type: 'button',
    class: 'DocSearch DocSearch-Button',
    'aria-label': 'Search',
  },
  ux = { class: 'DocSearch-Button-Container' },
  fx = I(
    'svg',
    {
      class: 'DocSearch-Search-Icon',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
    },
    [
      I('path', {
        d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
        stroke: 'currentColor',
        fill: 'none',
        'fill-rule': 'evenodd',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
    -1,
  ),
  dx = { class: 'DocSearch-Button-Placeholder' },
  px = I(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [
      I('kbd', { class: 'DocSearch-Button-Key' }),
      I('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
    ],
    -1,
  ),
  hx = te({
    __name: 'VPNavBarSearch',
    setup(e) {
      lv((c) => ({ '31819f8a': i.value }));
      const t = () => null,
        { theme: n } = Ke(),
        s = re(!1),
        i = re("'Meta'");
      ut(() => {
        if (!n.value.algolia) return;
        i.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          ? "'⌘'"
          : "'Ctrl'";
        const c = (d) => {
            d.key === 'k' &&
              (d.ctrlKey || d.metaKey) &&
              (d.preventDefault(), a(), u());
          },
          u = () => {
            window.removeEventListener('keydown', c);
          };
        window.addEventListener('keydown', c), br(u);
      });
      function a() {
        s.value || (s.value = !0);
      }
      return (c, u) => {
        var d;
        return D(n).algolia
          ? (k(),
            M('div', lx, [
              s.value
                ? (k(), ke(D(t), { key: 0 }))
                : (k(),
                  M('div', { key: 1, id: 'docsearch', onClick: a }, [
                    I('button', cx, [
                      I('span', ux, [
                        fx,
                        I(
                          'span',
                          dx,
                          Be(
                            ((d = D(n).algolia) == null
                              ? void 0
                              : d.buttonText) || 'Search',
                          ),
                          1,
                        ),
                      ]),
                      px,
                    ]),
                  ])),
            ]))
          : ue('', !0);
      };
    },
  });
const vx = {},
  _x = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
  },
  gx = I('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }, null, -1),
  mx = I(
    'path',
    { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' },
    null,
    -1,
  ),
  yx = [gx, mx];
function bx(e, t) {
  return k(), M('svg', _x, yx);
}
const wx = fe(vx, [['render', bx]]),
  kx = te({
    __name: 'VPLink',
    props: { href: {}, noIcon: { type: Boolean } },
    setup(e) {
      const t = e,
        n = de(() => t.href && xl.test(t.href));
      return (s, i) => (
        k(),
        ke(
          vl(s.href ? 'a' : 'span'),
          {
            class: Ce(['VPLink', { link: s.href }]),
            href: s.href ? D(el)(s.href) : void 0,
            target: n.value ? '_blank' : void 0,
            rel: n.value ? 'noreferrer' : void 0,
          },
          {
            default: ae(() => [
              K(s.$slots, 'default', {}, void 0, !0),
              n.value && !s.noIcon
                ? (k(), ke(wx, { key: 0, class: 'icon' }))
                : ue('', !0),
            ]),
            _: 3,
          },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  });
const Eo = fe(kx, [['__scopeId', 'data-v-525ffef3']]),
  $x = te({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(e) {
      const { page: t } = Ke();
      return (n, s) => (
        k(),
        ke(
          Eo,
          {
            class: Ce({
              VPNavBarMenuLink: !0,
              active: D(ks)(
                D(t).relativePath,
                n.item.activeMatch || n.item.link,
                !!n.item.activeMatch,
              ),
            }),
            href: n.item.link,
            noIcon: !0,
          },
          { default: ae(() => [At(Be(n.item.text), 1)]), _: 1 },
          8,
          ['class', 'href'],
        )
      );
    },
  });
const xx = fe($x, [['__scopeId', 'data-v-03361f91']]),
  $f = re();
let A_ = !1,
  tu = 0;
function Cx(e) {
  const t = re(!1);
  if (typeof window < 'u') {
    !A_ && Px(), tu++;
    const n = yt($f, (s) => {
      var i, a, c;
      s === e.el.value || ((i = e.el.value) != null && i.contains(s))
        ? ((t.value = !0), (a = e.onFocus) == null || a.call(e))
        : ((t.value = !1), (c = e.onBlur) == null || c.call(e));
    });
    br(() => {
      n(), tu--, tu || Sx();
    });
  }
  return ms(t);
}
function Px() {
  document.addEventListener('focusin', I_),
    (A_ = !0),
    ($f.value = document.activeElement);
}
function Sx() {
  document.removeEventListener('focusin', I_);
}
function I_() {
  $f.value = document.activeElement;
}
const Tx = {},
  Ex = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Ax = I(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1,
  ),
  Ix = [Ax];
function Mx(e, t) {
  return k(), M('svg', Ex, Ix);
}
const M_ = fe(Tx, [['render', Mx]]),
  Lx = {},
  Ox = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Bx = I('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  Vx = I('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  Fx = I('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  Rx = [Bx, Vx, Fx];
function Nx(e, t) {
  return k(), M('svg', Ox, Rx);
}
const Hx = fe(Lx, [['render', Nx]]),
  zx = { class: 'VPMenuLink' },
  jx = te({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(e) {
      const { page: t } = Ke();
      return (n, s) => (
        k(),
        M('div', zx, [
          Y(
            Eo,
            {
              class: Ce({
                active: D(ks)(
                  D(t).relativePath,
                  n.item.activeMatch || n.item.link,
                  !!n.item.activeMatch,
                ),
              }),
              href: n.item.link,
            },
            { default: ae(() => [At(Be(n.item.text), 1)]), _: 1 },
            8,
            ['class', 'href'],
          ),
        ])
      );
    },
  });
const Cl = fe(jx, [['__scopeId', 'data-v-b44a2d6a']]),
  Dx = { class: 'VPMenuGroup' },
  qx = { key: 0, class: 'title' },
  Ux = te({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(e) {
      return (t, n) => (
        k(),
        M('div', Dx, [
          t.text ? (k(), M('p', qx, Be(t.text), 1)) : ue('', !0),
          (k(!0),
          M(
            Ae,
            null,
            wt(
              t.items,
              (s) => (
                k(),
                M(
                  Ae,
                  null,
                  [
                    'link' in s
                      ? (k(), ke(Cl, { key: 0, item: s }, null, 8, ['item']))
                      : ue('', !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      );
    },
  });
const Wx = fe(Ux, [['__scopeId', 'data-v-0bc013f6']]),
  Kx = { class: 'VPMenu' },
  Yx = { key: 0, class: 'items' },
  Xx = te({
    __name: 'VPMenu',
    props: { items: {} },
    setup(e) {
      return (t, n) => (
        k(),
        M('div', Kx, [
          t.items
            ? (k(),
              M('div', Yx, [
                (k(!0),
                M(
                  Ae,
                  null,
                  wt(
                    t.items,
                    (s) => (
                      k(),
                      M(
                        Ae,
                        { key: s.text },
                        [
                          'link' in s
                            ? (k(),
                              ke(Cl, { key: 0, item: s }, null, 8, ['item']))
                            : (k(),
                              ke(
                                Wx,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ['text', 'items'],
                              )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : ue('', !0),
          K(t.$slots, 'default', {}, void 0, !0),
        ])
      );
    },
  });
const Zx = fe(Xx, [['__scopeId', 'data-v-a48a02bf']]),
  Gx = ['aria-expanded', 'aria-label'],
  Qx = { key: 0, class: 'text' },
  Jx = { class: 'menu' },
  eC = te({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(e) {
      const t = re(!1),
        n = re();
      Cx({ el: n, onBlur: s });
      function s() {
        t.value = !1;
      }
      return (i, a) => (
        k(),
        M(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: n,
            onMouseenter: a[1] || (a[1] = (c) => (t.value = !0)),
            onMouseleave: a[2] || (a[2] = (c) => (t.value = !1)),
          },
          [
            I(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': t.value,
                'aria-label': i.label,
                onClick: a[0] || (a[0] = (c) => (t.value = !t.value)),
              },
              [
                i.button || i.icon
                  ? (k(),
                    M('span', Qx, [
                      i.icon
                        ? (k(),
                          ke(vl(i.icon), { key: 0, class: 'option-icon' }))
                        : ue('', !0),
                      At(' ' + Be(i.button) + ' ', 1),
                      Y(M_, { class: 'text-icon' }),
                    ]))
                  : (k(), ke(Hx, { key: 1, class: 'icon' })),
              ],
              8,
              Gx,
            ),
            I('div', Jx, [
              Y(
                Zx,
                { items: i.items },
                {
                  default: ae(() => [K(i.$slots, 'default', {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ['items'],
              ),
            ]),
          ],
          544,
        )
      );
    },
  });
const xf = fe(eC, [['__scopeId', 'data-v-4b91eee2']]),
  tC = te({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(e) {
      const { page: t } = Ke();
      return (n, s) => (
        k(),
        ke(
          xf,
          {
            class: Ce({
              VPNavBarMenuGroup: !0,
              active: D(ks)(
                D(t).relativePath,
                n.item.activeMatch,
                !!n.item.activeMatch,
              ),
            }),
            button: n.item.text,
            items: n.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      );
    },
  }),
  nC = (e) => (dn('data-v-792c37ca'), (e = e()), pn(), e),
  rC = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  oC = nC(() =>
    I(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1,
    ),
  ),
  sC = te({
    __name: 'VPNavBarMenu',
    setup(e) {
      const { theme: t } = Ke();
      return (n, s) =>
        D(t).nav
          ? (k(),
            M('nav', rC, [
              oC,
              (k(!0),
              M(
                Ae,
                null,
                wt(
                  D(t).nav,
                  (i) => (
                    k(),
                    M(
                      Ae,
                      { key: i.text },
                      [
                        'link' in i
                          ? (k(),
                            ke(xx, { key: 0, item: i }, null, 8, ['item']))
                          : (k(),
                            ke(tC, { key: 1, item: i }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : ue('', !0);
    },
  });
const iC = fe(sC, [['__scopeId', 'data-v-792c37ca']]),
  aC = {},
  lC = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  cC = I('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  uC = I(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1,
  ),
  fC = [cC, uC];
function dC(e, t) {
  return k(), M('svg', lC, fC);
}
const L_ = fe(aC, [['render', dC]]),
  pC = { class: 'items' },
  hC = { class: 'title' },
  vC = te({
    __name: 'VPNavBarTranslations',
    setup(e) {
      const { theme: t } = Ke();
      return (n, s) =>
        D(t).localeLinks
          ? (k(),
            ke(
              xf,
              { key: 0, class: 'VPNavBarTranslations', icon: L_ },
              {
                default: ae(() => [
                  I('div', pC, [
                    I('p', hC, Be(D(t).localeLinks.text), 1),
                    (k(!0),
                    M(
                      Ae,
                      null,
                      wt(
                        D(t).localeLinks.items,
                        (i) => (
                          k(),
                          ke(Cl, { key: i.link, item: i }, null, 8, ['item'])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
            ))
          : ue('', !0);
    },
  });
const _C = fe(vC, [['__scopeId', 'data-v-48a7f51d']]);
const gC = {},
  mC = { class: 'VPSwitch', type: 'button', role: 'switch' },
  yC = { class: 'check' },
  bC = { key: 0, class: 'icon' };
function wC(e, t) {
  return (
    k(),
    M('button', mC, [
      I('span', yC, [
        e.$slots.default
          ? (k(), M('span', bC, [K(e.$slots, 'default', {}, void 0, !0)]))
          : ue('', !0),
      ]),
    ])
  );
}
const kC = fe(gC, [
    ['render', wC],
    ['__scopeId', 'data-v-111b6abe'],
  ]),
  $C = {},
  xC = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  CC = K1(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  PC = [CC];
function SC(e, t) {
  return k(), M('svg', xC, PC);
}
const TC = fe($C, [['render', SC]]),
  EC = {},
  AC = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  IC = I(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1,
  ),
  MC = [IC];
function LC(e, t) {
  return k(), M('svg', AC, MC);
}
const OC = fe(EC, [['render', LC]]),
  BC = te({
    __name: 'VPSwitchAppearance',
    setup(e) {
      const { site: t, isDark: n } = Ke(),
        s = re(!1),
        i = typeof localStorage < 'u' ? a() : () => {};
      ut(() => {
        s.value = document.documentElement.classList.contains('dark');
      });
      function a() {
        const c = window.matchMedia('(prefers-color-scheme: dark)'),
          u = document.documentElement.classList;
        let d = localStorage.getItem(y0),
          h =
            (t.value.appearance === 'dark' && d == null) ||
            (d === 'auto' || d == null ? c.matches : d === 'dark');
        c.onchange = (y) => {
          d === 'auto' && m((h = y.matches));
        };
        function _() {
          m((h = !h)),
            (d = h
              ? c.matches
                ? 'auto'
                : 'dark'
              : c.matches
                ? 'light'
                : 'auto'),
            localStorage.setItem(y0, d);
        }
        function m(y) {
          const S = document.createElement('style');
          (S.type = 'text/css'),
            S.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`),
            ),
            document.head.appendChild(S),
            (s.value = y),
            u[y ? 'add' : 'remove']('dark'),
            window.getComputedStyle(S).opacity,
            document.head.removeChild(S);
        }
        return _;
      }
      return (
        yt(s, (c) => {
          n.value = c;
        }),
        (c, u) => (
          k(),
          ke(
            kC,
            {
              class: 'VPSwitchAppearance',
              'aria-label': 'toggle dark mode',
              'aria-checked': s.value,
              onClick: D(i),
            },
            {
              default: ae(() => [
                Y(TC, { class: 'sun' }),
                Y(OC, { class: 'moon' }),
              ]),
              _: 1,
            },
            8,
            ['aria-checked', 'onClick'],
          )
        )
      );
    },
  });
const Cf = fe(BC, [['__scopeId', 'data-v-f520c8f9']]),
  VC = { key: 0, class: 'VPNavBarAppearance' },
  FC = te({
    __name: 'VPNavBarAppearance',
    setup(e) {
      const { site: t } = Ke();
      return (n, s) =>
        D(t).appearance ? (k(), M('div', VC, [Y(Cf)])) : ue('', !0);
    },
  });
const RC = fe(FC, [['__scopeId', 'data-v-adc738c7']]),
  NC = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  HC = ['href', 'innerHTML'],
  zC = te({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {} },
    setup(e) {
      const t = e,
        n = de(() => (typeof t.icon == 'object' ? t.icon.svg : NC[t.icon]));
      return (s, i) => (
        k(),
        M(
          'a',
          {
            class: 'VPSocialLink',
            href: s.link,
            target: '_blank',
            rel: 'noopener',
            innerHTML: n.value,
          },
          null,
          8,
          HC,
        )
      );
    },
  });
const jC = fe(zC, [['__scopeId', 'data-v-2770d24e']]),
  DC = { class: 'VPSocialLinks' },
  qC = te({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(e) {
      return (t, n) => (
        k(),
        M('div', DC, [
          (k(!0),
          M(
            Ae,
            null,
            wt(
              t.links,
              ({ link: s, icon: i }) => (
                k(),
                ke(jC, { key: s, icon: i, link: s }, null, 8, ['icon', 'link'])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const Pf = fe(qC, [['__scopeId', 'data-v-0affcb9e']]),
  UC = te({
    __name: 'VPNavBarSocialLinks',
    setup(e) {
      const { theme: t } = Ke();
      return (n, s) =>
        D(t).socialLinks
          ? (k(),
            ke(
              Pf,
              { key: 0, class: 'VPNavBarSocialLinks', links: D(t).socialLinks },
              null,
              8,
              ['links'],
            ))
          : ue('', !0);
    },
  });
const WC = fe(UC, [['__scopeId', 'data-v-84aa6160']]),
  KC = (e) => (dn('data-v-c738f5b5'), (e = e()), pn(), e),
  YC = { key: 0, class: 'group' },
  XC = { class: 'trans-title' },
  ZC = { key: 1, class: 'group' },
  GC = { class: 'item appearance' },
  QC = KC(() => I('p', { class: 'label' }, 'Appearance', -1)),
  JC = { class: 'appearance-action' },
  eP = { key: 2, class: 'group' },
  tP = { class: 'item social-links' },
  nP = te({
    __name: 'VPNavBarExtra',
    setup(e) {
      const { site: t, theme: n } = Ke(),
        s = de(
          () =>
            n.value.localeLinks || t.value.appearance || n.value.socialLinks,
        );
      return (i, a) =>
        s.value
          ? (k(),
            ke(
              xf,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: ae(() => [
                  D(n).localeLinks
                    ? (k(),
                      M('div', YC, [
                        I('p', XC, Be(D(n).localeLinks.text), 1),
                        (k(!0),
                        M(
                          Ae,
                          null,
                          wt(
                            D(n).localeLinks.items,
                            (c) => (
                              k(),
                              ke(Cl, { key: c.link, item: c }, null, 8, [
                                'item',
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : ue('', !0),
                  D(t).appearance
                    ? (k(),
                      M('div', ZC, [I('div', GC, [QC, I('div', JC, [Y(Cf)])])]))
                    : ue('', !0),
                  D(n).socialLinks
                    ? (k(),
                      M('div', eP, [
                        I('div', tP, [
                          Y(
                            Pf,
                            {
                              class: 'social-links-list',
                              links: D(n).socialLinks,
                            },
                            null,
                            8,
                            ['links'],
                          ),
                        ]),
                      ]))
                    : ue('', !0),
                ]),
                _: 1,
              },
            ))
          : ue('', !0);
    },
  });
const rP = fe(nP, [['__scopeId', 'data-v-c738f5b5']]),
  oP = (e) => (dn('data-v-68d929bf'), (e = e()), pn(), e),
  sP = ['aria-expanded'],
  iP = oP(() =>
    I(
      'span',
      { class: 'container' },
      [
        I('span', { class: 'top' }),
        I('span', { class: 'middle' }),
        I('span', { class: 'bottom' }),
      ],
      -1,
    ),
  ),
  aP = [iP],
  lP = te({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(e) {
      return (t, n) => (
        k(),
        M(
          'button',
          {
            type: 'button',
            class: Ce(['VPNavBarHamburger', { active: t.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': t.active,
            'aria-controls': 'VPNavScreen',
            onClick: n[0] || (n[0] = (s) => t.$emit('click')),
          },
          aP,
          10,
          sP,
        )
      );
    },
  });
const cP = fe(lP, [['__scopeId', 'data-v-68d929bf']]),
  uP = { class: 'container' },
  fP = { class: 'content' },
  dP = te({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(e) {
      const { hasSidebar: t } = Dn();
      return (n, s) => (
        k(),
        M(
          'div',
          { class: Ce(['VPNavBar', { 'has-sidebar': D(t) }]) },
          [
            I('div', uP, [
              Y(ax, null, {
                'nav-bar-title-before': ae(() => [
                  K(n.$slots, 'nav-bar-title-before', {}, void 0, !0),
                ]),
                'nav-bar-title-after': ae(() => [
                  K(n.$slots, 'nav-bar-title-after', {}, void 0, !0),
                ]),
                _: 3,
              }),
              I('div', fP, [
                K(n.$slots, 'nav-bar-content-before', {}, void 0, !0),
                Y(hx, { class: 'search' }),
                Y(iC, { class: 'menu' }),
                Y(_C, { class: 'translations' }),
                Y(RC, { class: 'appearance' }),
                Y(WC, { class: 'social-links' }),
                Y(rP, { class: 'extra' }),
                K(n.$slots, 'nav-bar-content-after', {}, void 0, !0),
                Y(
                  cP,
                  {
                    class: 'hamburger',
                    active: n.isScreenOpen,
                    onClick: s[0] || (s[0] = (i) => n.$emit('toggle-screen')),
                  },
                  null,
                  8,
                  ['active'],
                ),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  });
const pP = fe(dP, [['__scopeId', 'data-v-19492336']]);
function hP(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  } else return Array.from(e);
}
var Sf = !1;
if (typeof window < 'u') {
  var M0 = {
    get passive() {
      Sf = !0;
    },
  };
  window.addEventListener('testPassive', null, M0),
    window.removeEventListener('testPassive', null, M0);
}
var tl =
    typeof window < 'u' &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === 'MacIntel' &&
        window.navigator.maxTouchPoints > 1)),
  is = [],
  nl = !1,
  Tf = -1,
  ni = void 0,
  po = void 0,
  ri = void 0,
  O_ = function (t) {
    return is.some(function (n) {
      return !!(n.options.allowTouchMove && n.options.allowTouchMove(t));
    });
  },
  rl = function (t) {
    var n = t || window.event;
    return O_(n.target) || n.touches.length > 1
      ? !0
      : (n.preventDefault && n.preventDefault(), !1);
  },
  vP = function (t) {
    if (ri === void 0) {
      var n = !!t && t.reserveScrollBarGap === !0,
        s = window.innerWidth - document.documentElement.clientWidth;
      if (n && s > 0) {
        var i = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right'),
          10,
        );
        (ri = document.body.style.paddingRight),
          (document.body.style.paddingRight = i + s + 'px');
      }
    }
    ni === void 0 &&
      ((ni = document.body.style.overflow),
      (document.body.style.overflow = 'hidden'));
  },
  _P = function () {
    ri !== void 0 && ((document.body.style.paddingRight = ri), (ri = void 0)),
      ni !== void 0 && ((document.body.style.overflow = ni), (ni = void 0));
  },
  gP = function () {
    return window.requestAnimationFrame(function () {
      if (po === void 0) {
        po = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var t = window,
          n = t.scrollY,
          s = t.scrollX,
          i = t.innerHeight;
        (document.body.style.position = 'fixed'),
          (document.body.style.top = -n),
          (document.body.style.left = -s),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var a = i - window.innerHeight;
              a && n >= i && (document.body.style.top = -(n + a));
            });
          }, 300);
      }
    });
  },
  mP = function () {
    if (po !== void 0) {
      var t = -parseInt(document.body.style.top, 10),
        n = -parseInt(document.body.style.left, 10);
      (document.body.style.position = po.position),
        (document.body.style.top = po.top),
        (document.body.style.left = po.left),
        window.scrollTo(n, t),
        (po = void 0);
    }
  },
  yP = function (t) {
    return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
  },
  bP = function (t, n) {
    var s = t.targetTouches[0].clientY - Tf;
    return O_(t.target)
      ? !1
      : (n && n.scrollTop === 0 && s > 0) || (yP(n) && s < 0)
        ? rl(t)
        : (t.stopPropagation(), !0);
  },
  B_ = function (t, n) {
    if (!t) {
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
      );
      return;
    }
    if (
      !is.some(function (i) {
        return i.targetElement === t;
      })
    ) {
      var s = { targetElement: t, options: n || {} };
      (is = [].concat(hP(is), [s])),
        tl ? gP() : vP(n),
        tl &&
          ((t.ontouchstart = function (i) {
            i.targetTouches.length === 1 && (Tf = i.targetTouches[0].clientY);
          }),
          (t.ontouchmove = function (i) {
            i.targetTouches.length === 1 && bP(i, t);
          }),
          nl ||
            (document.addEventListener(
              'touchmove',
              rl,
              Sf ? { passive: !1 } : void 0,
            ),
            (nl = !0)));
    }
  },
  V_ = function () {
    tl &&
      (is.forEach(function (t) {
        (t.targetElement.ontouchstart = null),
          (t.targetElement.ontouchmove = null);
      }),
      nl &&
        (document.removeEventListener(
          'touchmove',
          rl,
          Sf ? { passive: !1 } : void 0,
        ),
        (nl = !1)),
      (Tf = -1)),
      tl ? mP() : _P(),
      (is = []);
  };
const wP = te({
  __name: 'VPNavScreenMenuLink',
  props: { text: {}, link: {} },
  setup(e) {
    const t = Ot('close-screen');
    return (n, s) => (
      k(),
      ke(
        Eo,
        { class: 'VPNavScreenMenuLink', href: n.link, onClick: D(t) },
        { default: ae(() => [At(Be(n.text), 1)]), _: 1 },
        8,
        ['href', 'onClick'],
      )
    );
  },
});
const kP = fe(wP, [['__scopeId', 'data-v-54b0cf8f']]),
  $P = {},
  xP = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  CP = I(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1,
  ),
  PP = [CP];
function SP(e, t) {
  return k(), M('svg', xP, PP);
}
const TP = fe($P, [['render', SP]]),
  EP = te({
    __name: 'VPNavScreenMenuGroupLink',
    props: { text: {}, link: {} },
    setup(e) {
      const t = Ot('close-screen');
      return (n, s) => (
        k(),
        ke(
          Eo,
          { class: 'VPNavScreenMenuGroupLink', href: n.link, onClick: D(t) },
          { default: ae(() => [At(Be(n.text), 1)]), _: 1 },
          8,
          ['href', 'onClick'],
        )
      );
    },
  });
const F_ = fe(EP, [['__scopeId', 'data-v-dde32c4d']]),
  AP = { class: 'VPNavScreenMenuGroupSection' },
  IP = { key: 0, class: 'title' },
  MP = te({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(e) {
      return (t, n) => (
        k(),
        M('div', AP, [
          t.text ? (k(), M('p', IP, Be(t.text), 1)) : ue('', !0),
          (k(!0),
          M(
            Ae,
            null,
            wt(
              t.items,
              (s) => (
                k(),
                ke(F_, { key: s.text, text: s.text, link: s.link }, null, 8, [
                  'text',
                  'link',
                ])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const LP = fe(MP, [['__scopeId', 'data-v-8fd690c5']]),
  OP = ['aria-controls', 'aria-expanded'],
  BP = { class: 'button-text' },
  VP = ['id'],
  FP = { key: 1, class: 'group' },
  RP = te({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(e) {
      const t = e,
        n = re(!1),
        s = de(
          () => `NavScreenGroup-${t.text.replace(' ', '-').toLowerCase()}`,
        );
      function i() {
        n.value = !n.value;
      }
      return (a, c) => (
        k(),
        M(
          'div',
          { class: Ce(['VPNavScreenMenuGroup', { open: n.value }]) },
          [
            I(
              'button',
              {
                class: 'button',
                'aria-controls': s.value,
                'aria-expanded': n.value,
                onClick: i,
              },
              [I('span', BP, Be(a.text), 1), Y(TP, { class: 'button-icon' })],
              8,
              OP,
            ),
            I(
              'div',
              { id: s.value, class: 'items' },
              [
                (k(!0),
                M(
                  Ae,
                  null,
                  wt(
                    a.items,
                    (u) => (
                      k(),
                      M(
                        Ae,
                        { key: u.text },
                        [
                          'link' in u
                            ? (k(),
                              M('div', { key: u.text, class: 'item' }, [
                                Y(F_, { text: u.text, link: u.link }, null, 8, [
                                  'text',
                                  'link',
                                ]),
                              ]))
                            : (k(),
                              M('div', FP, [
                                Y(
                                  LP,
                                  { text: u.text, items: u.items },
                                  null,
                                  8,
                                  ['text', 'items'],
                                ),
                              ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              VP,
            ),
          ],
          2,
        )
      );
    },
  });
const NP = fe(RP, [['__scopeId', 'data-v-1b7b00de']]),
  HP = { key: 0, class: 'VPNavScreenMenu' },
  zP = te({
    __name: 'VPNavScreenMenu',
    setup(e) {
      const { theme: t } = Ke();
      return (n, s) =>
        D(t).nav
          ? (k(),
            M('nav', HP, [
              (k(!0),
              M(
                Ae,
                null,
                wt(
                  D(t).nav,
                  (i) => (
                    k(),
                    M(
                      Ae,
                      { key: i.text },
                      [
                        'link' in i
                          ? (k(),
                            ke(
                              kP,
                              { key: 0, text: i.text, link: i.link },
                              null,
                              8,
                              ['text', 'link'],
                            ))
                          : (k(),
                            ke(
                              NP,
                              { key: 1, text: i.text || '', items: i.items },
                              null,
                              8,
                              ['text', 'items'],
                            )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : ue('', !0);
    },
  }),
  jP = (e) => (dn('data-v-d65624d7'), (e = e()), pn(), e),
  DP = { key: 0, class: 'VPNavScreenAppearance' },
  qP = jP(() => I('p', { class: 'text' }, 'Appearance', -1)),
  UP = te({
    __name: 'VPNavScreenAppearance',
    setup(e) {
      const { site: t } = Ke();
      return (n, s) =>
        D(t).appearance ? (k(), M('div', DP, [qP, Y(Cf)])) : ue('', !0);
    },
  });
const WP = fe(UP, [['__scopeId', 'data-v-d65624d7']]),
  KP = { class: 'list' },
  YP = ['href'],
  XP = te({
    __name: 'VPNavScreenTranslations',
    setup(e) {
      const { theme: t } = Ke(),
        n = re(!1);
      function s() {
        n.value = !n.value;
      }
      return (i, a) =>
        D(t).localeLinks
          ? (k(),
            M(
              'div',
              {
                key: 0,
                class: Ce(['VPNavScreenTranslations', { open: n.value }]),
              },
              [
                I('button', { class: 'title', onClick: s }, [
                  Y(L_, { class: 'icon lang' }),
                  At(' ' + Be(D(t).localeLinks.text) + ' ', 1),
                  Y(M_, { class: 'icon chevron' }),
                ]),
                I('ul', KP, [
                  (k(!0),
                  M(
                    Ae,
                    null,
                    wt(
                      D(t).localeLinks.items,
                      (c) => (
                        k(),
                        M('li', { key: c.link, class: 'item' }, [
                          I(
                            'a',
                            { class: 'link', href: c.link },
                            Be(c.text),
                            9,
                            YP,
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : ue('', !0);
    },
  });
const ZP = fe(XP, [['__scopeId', 'data-v-37186b2c']]),
  GP = te({
    __name: 'VPNavScreenSocialLinks',
    setup(e) {
      const { theme: t } = Ke();
      return (n, s) =>
        D(t).socialLinks
          ? (k(),
            ke(
              Pf,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: D(t).socialLinks,
              },
              null,
              8,
              ['links'],
            ))
          : ue('', !0);
    },
  }),
  QP = { class: 'container' },
  JP = te({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(e) {
      const t = re(null);
      function n() {
        B_(t.value, { reserveScrollBarGap: !0 });
      }
      function s() {
        V_();
      }
      return (i, a) => (
        k(),
        ke(
          Nn,
          { name: 'fade', onEnter: n, onAfterLeave: s },
          {
            default: ae(() => [
              i.open
                ? (k(),
                  M(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: t },
                    [
                      I('div', QP, [
                        K(
                          i.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        Y(zP, { class: 'menu' }),
                        Y(ZP, { class: 'translations' }),
                        Y(WP, { class: 'appearance' }),
                        Y(GP, { class: 'social-links' }),
                        K(i.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : ue('', !0),
            ]),
            _: 3,
          },
        )
      );
    },
  });
const eS = fe(JP, [['__scopeId', 'data-v-6f8335ec']]),
  tS = te({
    __name: 'VPNav',
    setup(e) {
      const { isScreenOpen: t, closeScreen: n, toggleScreen: s } = tx(),
        { hasSidebar: i } = Dn();
      return (
        Zn('close-screen', n),
        (a, c) => (
          k(),
          M(
            'header',
            { class: Ce(['VPNav', { 'no-sidebar': !D(i) }]) },
            [
              Y(
                pP,
                { 'is-screen-open': D(t), onToggleScreen: D(s) },
                {
                  'nav-bar-title-before': ae(() => [
                    K(a.$slots, 'nav-bar-title-before', {}, void 0, !0),
                  ]),
                  'nav-bar-title-after': ae(() => [
                    K(a.$slots, 'nav-bar-title-after', {}, void 0, !0),
                  ]),
                  'nav-bar-content-before': ae(() => [
                    K(a.$slots, 'nav-bar-content-before', {}, void 0, !0),
                  ]),
                  'nav-bar-content-after': ae(() => [
                    K(a.$slots, 'nav-bar-content-after', {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ['is-screen-open', 'onToggleScreen'],
              ),
              Y(
                eS,
                { open: D(t) },
                {
                  'nav-screen-content-before': ae(() => [
                    K(a.$slots, 'nav-screen-content-before', {}, void 0, !0),
                  ]),
                  'nav-screen-content-after': ae(() => [
                    K(a.$slots, 'nav-screen-content-after', {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ['open'],
              ),
            ],
            2,
          )
        )
      );
    },
  });
const nS = fe(tS, [['__scopeId', 'data-v-4514d3fd']]),
  rS = {},
  oS = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  sS = I(
    'path',
    {
      d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z',
    },
    null,
    -1,
  ),
  iS = I(
    'path',
    { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' },
    null,
    -1,
  ),
  aS = I(
    'path',
    {
      d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z',
    },
    null,
    -1,
  ),
  lS = I(
    'path',
    {
      d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z',
    },
    null,
    -1,
  ),
  cS = [sS, iS, aS, lS];
function uS(e, t) {
  return k(), M('svg', oS, cS);
}
const fS = fe(rS, [['render', uS]]),
  dS = (e) => (dn('data-v-e2d97d8d'), (e = e()), pn(), e),
  pS = { key: 0, class: 'VPLocalNav' },
  hS = ['aria-expanded'],
  vS = dS(() => I('span', { class: 'menu-text' }, 'Menu', -1)),
  _S = te({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(e) {
      const { hasSidebar: t } = Dn();
      function n() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return (s, i) =>
        D(t)
          ? (k(),
            M('div', pS, [
              I(
                'button',
                {
                  class: 'menu',
                  'aria-expanded': s.open,
                  'aria-controls': 'VPSidebarNav',
                  onClick: i[0] || (i[0] = (a) => s.$emit('open-menu')),
                },
                [Y(fS, { class: 'menu-icon' }), vS],
                8,
                hS,
              ),
              I(
                'a',
                { class: 'top-link', href: '#', onClick: n },
                ' Return to top ',
              ),
            ]))
          : ue('', !0);
    },
  });
const gS = fe(_S, [['__scopeId', 'data-v-e2d97d8d']]),
  mS = {},
  yS = {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
  },
  bS = I(
    'path',
    {
      d: 'M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z',
    },
    null,
    -1,
  ),
  wS = I(
    'path',
    {
      d: 'M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z',
    },
    null,
    -1,
  ),
  kS = [bS, wS];
function $S(e, t) {
  return k(), M('svg', yS, kS);
}
const xS = fe(mS, [['render', $S]]),
  CS = {},
  PS = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 24 24',
  },
  SS = I(
    'path',
    {
      d: 'M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z',
    },
    null,
    -1,
  ),
  TS = I(
    'path',
    {
      d: 'M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z',
    },
    null,
    -1,
  ),
  ES = [SS, TS];
function AS(e, t) {
  return k(), M('svg', PS, ES);
}
const IS = fe(CS, [['render', AS]]),
  MS = ['innerHTML'],
  LS = te({
    __name: 'VPSidebarLink',
    props: { item: {}, depth: { default: 1 } },
    setup(e) {
      const t = e,
        { page: n, frontmatter: s } = Ke(),
        i = de(() => s.value.sidebarDepth || 1 / 0),
        a = de(() => ks(n.value.relativePath, t.item.link)),
        { isSidebarEnabled: c } = Dn(),
        u = Ot('close-sidebar'),
        d = Ot('is-sidebar-open'),
        h = re(null);
      return (
        gr(() => {
          var _, m;
          d.value &&
            a.value &&
            ((m = (_ = h.value) == null ? void 0 : _.$el) == null || m.focus());
        }),
        (_, m) => {
          const y = Hn('VPSidebarLink', !0);
          return (
            k(),
            M(
              Ae,
              null,
              [
                Y(
                  Eo,
                  {
                    class: Ce(['link', { active: a.value }]),
                    style: dt({ paddingLeft: 16 * (_.depth - 1) + 'px' }),
                    href: _.item.link,
                    tabindex: D(c) || D(d) ? 0 : -1,
                    onClick: D(u),
                    ref_key: 'link',
                    ref: h,
                  },
                  {
                    default: ae(() => [
                      I(
                        'span',
                        {
                          innerHTML: _.item.text,
                          class: Ce(['link-text', { light: _.depth > 1 }]),
                        },
                        null,
                        10,
                        MS,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['class', 'style', 'href', 'tabindex', 'onClick'],
                ),
                'items' in _.item && _.depth < i.value
                  ? (k(!0),
                    M(
                      Ae,
                      { key: 0 },
                      wt(
                        _.item.items,
                        (S) => (
                          k(),
                          ke(
                            y,
                            { key: S.link, item: S, depth: _.depth + 1 },
                            null,
                            8,
                            ['item', 'depth'],
                          )
                        ),
                      ),
                      128,
                    ))
                  : ue('', !0),
              ],
              64,
            )
          );
        }
      );
    },
  });
const OS = fe(LS, [['__scopeId', 'data-v-0543d224']]),
  BS = ['role'],
  VS = ['innerHTML'],
  FS = { class: 'action' },
  RS = { class: 'items' },
  NS = te({
    __name: 'VPSidebarGroup',
    props: {
      text: {},
      items: {},
      collapsible: { type: Boolean },
      collapsed: { type: Boolean },
    },
    setup(e) {
      const t = e,
        n = re(!1);
      gr(() => {
        n.value = !!(t.collapsible && t.collapsed);
      });
      const { page: s } = Ke();
      gr(() => {
        t.items.some((a) => ks(s.value.relativePath, a.link)) && (n.value = !1);
      });
      function i() {
        t.collapsible && (n.value = !n.value);
      }
      return (a, c) => (
        k(),
        M(
          'section',
          {
            class: Ce([
              'VPSidebarGroup',
              { collapsible: a.collapsible, collapsed: n.value },
            ]),
          },
          [
            a.text
              ? (k(),
                M(
                  'div',
                  {
                    key: 0,
                    class: 'title',
                    role: a.collapsible ? 'button' : void 0,
                    onClick: i,
                  },
                  [
                    I(
                      'h2',
                      { innerHTML: a.text, class: 'title-text' },
                      null,
                      8,
                      VS,
                    ),
                    I('div', FS, [
                      Y(IS, { class: 'icon minus' }),
                      Y(xS, { class: 'icon plus' }),
                    ]),
                  ],
                  8,
                  BS,
                ))
              : ue('', !0),
            I('div', RS, [
              (k(!0),
              M(
                Ae,
                null,
                wt(
                  a.items,
                  (u) => (
                    k(), ke(OS, { key: u.link, item: u }, null, 8, ['item'])
                  ),
                ),
                128,
              )),
            ]),
          ],
          2,
        )
      );
    },
  });
const HS = fe(NS, [['__scopeId', 'data-v-f9fbb81d']]),
  zS = (e) => (dn('data-v-e92acee1'), (e = e()), pn(), e),
  jS = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  DS = zS(() =>
    I(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1,
    ),
  ),
  qS = te({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(e) {
      const { sidebar: t, hasSidebar: n } = Dn(),
        s = e;
      let i = re(null);
      function a() {
        B_(i.value, { reserveScrollBarGap: !0 });
      }
      function c() {
        V_();
      }
      return (
        ef(async () => {
          var u;
          s.open ? (a(), (u = i.value) == null || u.focus()) : c();
        }),
        (u, d) =>
          D(n)
            ? (k(),
              M(
                'aside',
                {
                  key: 0,
                  class: Ce(['VPSidebar', { open: u.open }]),
                  ref_key: 'navEl',
                  ref: i,
                  onClick: d[0] || (d[0] = Gr(() => {}, ['stop'])),
                },
                [
                  I('nav', jS, [
                    DS,
                    K(u.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (k(!0),
                    M(
                      Ae,
                      null,
                      wt(
                        D(t),
                        (h) => (
                          k(),
                          M('div', { key: h.text, class: 'group' }, [
                            Y(
                              HS,
                              {
                                text: h.text,
                                items: h.items,
                                collapsible: h.collapsible,
                                collapsed: h.collapsed,
                              },
                              null,
                              8,
                              ['text', 'items', 'collapsible', 'collapsed'],
                            ),
                          ])
                        ),
                      ),
                      128,
                    )),
                    K(u.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : ue('', !0)
      );
    },
  });
const US = fe(qS, [['__scopeId', 'data-v-e92acee1']]),
  WS = {},
  KS = { class: 'VPPage' };
function YS(e, t) {
  const n = Hn('Content');
  return k(), M('div', KS, [Y(n)]);
}
const XS = fe(WS, [['render', YS]]),
  ZS = te({
    __name: 'VPButton',
    props: { tag: {}, size: {}, theme: {}, text: {}, href: {} },
    setup(e) {
      const t = e,
        n = de(() => [t.size ?? 'medium', t.theme ?? 'brand']),
        s = de(() => t.href && xl.test(t.href)),
        i = de(() => (t.tag ? t.tag : t.href ? 'a' : 'button'));
      return (a, c) => (
        k(),
        ke(
          vl(i.value),
          {
            class: Ce(['VPButton', n.value]),
            href: a.href ? D(el)(a.href) : void 0,
            target: s.value ? '_blank' : void 0,
            rel: s.value ? 'noreferrer' : void 0,
          },
          { default: ae(() => [At(Be(a.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  });
const GS = fe(ZS, [['__scopeId', 'data-v-3fdbadc8']]),
  QS = (e) => (dn('data-v-e7cb8302'), (e = e()), pn(), e),
  JS = { class: 'container' },
  eT = { class: 'main' },
  tT = { key: 0, class: 'name' },
  nT = { class: 'clip' },
  rT = { key: 1, class: 'text' },
  oT = { key: 2, class: 'tagline' },
  sT = { key: 3, class: 'actions' },
  iT = { key: 0, class: 'image' },
  aT = { class: 'image-container' },
  lT = QS(() => I('div', { class: 'image-bg' }, null, -1)),
  cT = te({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(e) {
      const t = Ot('hero-image-slot-exists');
      return (n, s) => (
        k(),
        M(
          'div',
          { class: Ce(['VPHero', { 'has-image': n.image || D(t) }]) },
          [
            I('div', JS, [
              I('div', eT, [
                n.name
                  ? (k(), M('h1', tT, [I('span', nT, Be(n.name), 1)]))
                  : ue('', !0),
                n.text ? (k(), M('p', rT, Be(n.text), 1)) : ue('', !0),
                n.tagline ? (k(), M('p', oT, Be(n.tagline), 1)) : ue('', !0),
                n.actions
                  ? (k(),
                    M('div', sT, [
                      (k(!0),
                      M(
                        Ae,
                        null,
                        wt(
                          n.actions,
                          (i) => (
                            k(),
                            M('div', { key: i.link, class: 'action' }, [
                              Y(
                                GS,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: i.theme,
                                  text: i.text,
                                  href: i.link,
                                },
                                null,
                                8,
                                ['theme', 'text', 'href'],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : ue('', !0),
              ]),
              n.image || D(t)
                ? (k(),
                  M('div', iT, [
                    I('div', aT, [
                      lT,
                      K(
                        n.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          n.image
                            ? (k(),
                              ke(
                                kf,
                                { key: 0, class: 'image-src', image: n.image },
                                null,
                                8,
                                ['image'],
                              ))
                            : ue('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : ue('', !0),
            ]),
          ],
          2,
        )
      );
    },
  });
const uT = fe(cT, [['__scopeId', 'data-v-e7cb8302']]),
  fT = te({
    __name: 'VPHomeHero',
    setup(e) {
      const { frontmatter: t } = Ke();
      return (n, s) =>
        D(t).hero
          ? (k(),
            ke(
              uT,
              {
                key: 0,
                class: 'VPHomeHero',
                name: D(t).hero.name,
                text: D(t).hero.text,
                tagline: D(t).hero.tagline,
                image: D(t).hero.image,
                actions: D(t).hero.actions,
              },
              {
                'home-hero-image': ae(() => [K(n.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : ue('', !0);
    },
  }),
  dT = {},
  pT = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  hT = I(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1,
  ),
  vT = [hT];
function _T(e, t) {
  return k(), M('svg', pT, vT);
}
const gT = fe(dT, [['render', _T]]),
  mT = { class: 'box' },
  yT = { key: 1, class: 'icon' },
  bT = { class: 'title' },
  wT = { class: 'details' },
  kT = { key: 2, class: 'link-text' },
  $T = { class: 'link-text-value' },
  xT = te({
    __name: 'VPFeature',
    props: { icon: {}, title: {}, details: {}, link: {}, linkText: {} },
    setup(e) {
      return (t, n) => (
        k(),
        ke(
          Eo,
          { class: 'VPFeature', href: t.link, 'no-icon': !0 },
          {
            default: ae(() => [
              I('article', mT, [
                typeof t.icon == 'object'
                  ? (k(),
                    ke(
                      kf,
                      {
                        key: 0,
                        image: t.icon,
                        alt: t.icon.alt,
                        height: t.icon.height,
                        width: t.icon.width,
                      },
                      null,
                      8,
                      ['image', 'alt', 'height', 'width'],
                    ))
                  : t.icon
                    ? (k(), M('div', yT, Be(t.icon), 1))
                    : ue('', !0),
                I('h2', bT, Be(t.title), 1),
                I('p', wT, Be(t.details), 1),
                t.linkText
                  ? (k(),
                    M('div', kT, [
                      I('p', $T, [
                        At(Be(t.linkText) + ' ', 1),
                        Y(gT, { class: 'link-text-icon' }),
                      ]),
                    ]))
                  : ue('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href'],
        )
      );
    },
  });
const CT = fe(xT, [['__scopeId', 'data-v-e747b642']]),
  PT = { key: 0, class: 'VPFeatures' },
  ST = { class: 'container' },
  TT = { class: 'items' },
  ET = te({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(e) {
      const t = e,
        n = de(() => {
          const s = t.features.length;
          if (s) {
            if (s === 2) return 'grid-2';
            if (s === 3) return 'grid-3';
            if (s % 3 === 0) return 'grid-6';
            if (s % 2 === 0) return 'grid-4';
          } else return;
        });
      return (s, i) =>
        s.features
          ? (k(),
            M('div', PT, [
              I('div', ST, [
                I('div', TT, [
                  (k(!0),
                  M(
                    Ae,
                    null,
                    wt(
                      s.features,
                      (a) => (
                        k(),
                        M(
                          'div',
                          { key: a.title, class: Ce(['item', [n.value]]) },
                          [
                            Y(
                              CT,
                              {
                                icon: a.icon,
                                title: a.title,
                                details: a.details,
                                link: a.link,
                                'link-text': a.linkText,
                              },
                              null,
                              8,
                              ['icon', 'title', 'details', 'link', 'link-text'],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : ue('', !0);
    },
  });
const AT = fe(ET, [['__scopeId', 'data-v-53c55a6e']]),
  IT = te({
    __name: 'VPHomeFeatures',
    setup(e) {
      const { frontmatter: t } = Ke();
      return (n, s) =>
        D(t).features
          ? (k(),
            ke(
              AT,
              { key: 0, class: 'VPHomeFeatures', features: D(t).features },
              null,
              8,
              ['features'],
            ))
          : ue('', !0);
    },
  }),
  MT = { class: 'VPHome' },
  LT = te({
    __name: 'VPHome',
    setup(e) {
      return (t, n) => {
        const s = Hn('Content');
        return (
          k(),
          M('div', MT, [
            K(t.$slots, 'home-hero-before', {}, void 0, !0),
            Y(fT, null, {
              'home-hero-image': ae(() => [
                K(t.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            K(t.$slots, 'home-hero-after', {}, void 0, !0),
            K(t.$slots, 'home-features-before', {}, void 0, !0),
            Y(IT),
            K(t.$slots, 'home-features-after', {}, void 0, !0),
            Y(s),
          ])
        );
      };
    },
  });
const OT = fe(LT, [['__scopeId', 'data-v-83039f0a']]);
function BT() {
  const { hasSidebar: e } = Dn(),
    t = Ou('(min-width: 960px)'),
    n = Ou('(min-width: 1280px)');
  return {
    isAsideEnabled: de(() =>
      !n.value && !t.value ? !1 : e.value ? n.value : t.value,
    ),
  };
}
const VT = 71;
function FT(e) {
  if (e === !1) return [];
  let t = [];
  return (
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach((n) => {
      n.textContent &&
        n.id &&
        t.push({
          level: Number(n.tagName[1]),
          title: n.innerText.replace(/\s+#\s*$/, ''),
          link: `#${n.id}`,
        });
    }),
    RT(t, e)
  );
}
function RT(e, t = 2) {
  return NT(e, typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t);
}
function NT(e, t) {
  const n = [];
  return (
    (e = e.map((s) => ({ ...s }))),
    e.forEach((s, i) => {
      s.level >= t[0] && s.level <= t[1] && HT(i, e, t) && n.push(s);
    }),
    n
  );
}
function HT(e, t, n) {
  if (e === 0) return !0;
  const s = t[e];
  for (let i = e - 1; i >= 0; i--) {
    const a = t[i];
    if (a.level < s.level && a.level >= n[0] && a.level <= n[1])
      return a.children == null && (a.children = []), a.children.push(s), !1;
  }
  return !0;
}
function zT(e, t) {
  const { isAsideEnabled: n } = BT(),
    s = K$(a, 100);
  let i = null;
  ut(() => {
    requestAnimationFrame(a), window.addEventListener('scroll', s);
  }),
    ys(() => {
      c(location.hash);
    }),
    br(() => {
      window.removeEventListener('scroll', s);
    });
  function a() {
    if (!n.value) return;
    const u = [].slice.call(e.value.querySelectorAll('.outline-link')),
      d = [].slice
        .call(document.querySelectorAll('.content .header-anchor'))
        .filter((S) =>
          u.some((R) => R.hash === S.hash && S.offsetParent !== null),
        ),
      h = window.scrollY,
      _ = window.innerHeight,
      m = document.body.offsetHeight,
      y = Math.abs(h + _ - m) < 1;
    if (d.length && y) {
      c(d[d.length - 1].hash);
      return;
    }
    for (let S = 0; S < d.length; S++) {
      const R = d[S],
        x = d[S + 1],
        [L, O] = jT(S, R, x);
      if (L) {
        c(O);
        return;
      }
    }
  }
  function c(u) {
    i && i.classList.remove('active'),
      u !== null &&
        (i = e.value.querySelector(`a[href="${decodeURIComponent(u)}"]`));
    const d = i;
    d
      ? (d.classList.add('active'),
        (t.value.style.top = d.offsetTop + 33 + 'px'),
        (t.value.style.opacity = '1'))
      : ((t.value.style.top = '33px'), (t.value.style.opacity = '0'));
  }
}
function L0(e) {
  return e.parentElement.offsetTop - VT;
}
function jT(e, t, n) {
  const s = window.scrollY;
  return e === 0 && s === 0
    ? [!0, null]
    : s < L0(t)
      ? [!1, null]
      : !n || s < L0(n)
        ? [!0, t.hash]
        : [!1, null];
}
const DT = ['href'],
  qT = te({
    __name: 'VPDocAsideOutlineItem',
    props: {
      headers: {},
      onClick: { type: Function },
      root: { type: Boolean },
    },
    setup(e) {
      return (t, n) => {
        const s = Hn('VPDocAsideOutlineItem', !0);
        return (
          k(),
          M(
            'ul',
            { class: Ce(t.root ? 'root' : 'nested') },
            [
              (k(!0),
              M(
                Ae,
                null,
                wt(
                  t.headers,
                  ({ children: i, link: a, title: c }) => (
                    k(),
                    M('li', null, [
                      I(
                        'a',
                        {
                          class: 'outline-link',
                          href: a,
                          onClick:
                            n[0] ||
                            (n[0] = (...u) => t.onClick && t.onClick(...u)),
                        },
                        Be(c),
                        9,
                        DT,
                      ),
                      i != null && i.length
                        ? (k(),
                          ke(
                            s,
                            { key: 0, headers: i, onClick: t.onClick },
                            null,
                            8,
                            ['headers', 'onClick'],
                          ))
                        : ue('', !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        );
      };
    },
  });
const UT = fe(qT, [['__scopeId', 'data-v-99158aa9']]),
  WT = (e) => (dn('data-v-6e50ce76'), (e = e()), pn(), e),
  KT = { class: 'content' },
  YT = { class: 'outline-title' },
  XT = { 'aria-labelledby': 'doc-outline-aria-label' },
  ZT = WT(() =>
    I(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1,
    ),
  ),
  GT = te({
    __name: 'VPDocAsideOutline',
    setup(e) {
      const { frontmatter: t, theme: n } = Ke(),
        s = de(() => t.value.outline ?? n.value.outline),
        i = Ot('onContentUpdated');
      i.value = () => {
        a.value = FT(s.value);
      };
      const a = re([]),
        c = de(() => a.value.length > 0),
        u = re(),
        d = re();
      zT(u, d);
      function h({ target: _ }) {
        const m = '#' + _.href.split('#')[1],
          y = document.querySelector(decodeURIComponent(m));
        y == null || y.focus();
      }
      return (_, m) => (
        k(),
        M(
          'div',
          {
            class: Ce(['VPDocAsideOutline', { 'has-outline': c.value }]),
            ref_key: 'container',
            ref: u,
          },
          [
            I('div', KT, [
              I(
                'div',
                { class: 'outline-marker', ref_key: 'marker', ref: d },
                null,
                512,
              ),
              I('div', YT, Be(D(n).outlineTitle || 'On this page'), 1),
              I('nav', XT, [
                ZT,
                Y(UT, { headers: a.value, root: !0, onClick: h }, null, 8, [
                  'headers',
                ]),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  });
const QT = fe(GT, [['__scopeId', 'data-v-6e50ce76']]),
  JT = { class: 'VPDocAsideCarbonAds' },
  eE = te({
    __name: 'VPDocAsideCarbonAds',
    setup(e) {
      const t = () => null;
      return (n, s) => (k(), M('div', JT, [Y(D(t))]));
    },
  }),
  tE = (e) => (dn('data-v-c33ddd35'), (e = e()), pn(), e),
  nE = { class: 'VPDocAside' },
  rE = tE(() => I('div', { class: 'spacer' }, null, -1)),
  oE = te({
    __name: 'VPDocAside',
    setup(e) {
      const { theme: t } = Ke();
      return (n, s) => (
        k(),
        M('div', nE, [
          K(n.$slots, 'aside-top', {}, void 0, !0),
          K(n.$slots, 'aside-outline-before', {}, void 0, !0),
          Y(QT),
          K(n.$slots, 'aside-outline-after', {}, void 0, !0),
          rE,
          K(n.$slots, 'aside-ads-before', {}, void 0, !0),
          D(t).carbonAds ? (k(), ke(eE, { key: 0 })) : ue('', !0),
          K(n.$slots, 'aside-ads-after', {}, void 0, !0),
          K(n.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      );
    },
  });
const sE = fe(oE, [['__scopeId', 'data-v-c33ddd35']]);
function iE() {
  const { theme: e, page: t } = Ke();
  return de(() => {
    const { text: n = 'Edit this page', pattern: s } = e.value.editLink || {},
      { relativePath: i } = t.value;
    return { url: s.replace(/:path/g, i), text: n };
  });
}
function aE() {
  const { page: e, theme: t, frontmatter: n } = Ke();
  return de(() => {
    const s = E_(t.value.sidebar, e.value.relativePath),
      i = Y$(s),
      a = i.findIndex((c) => ks(e.value.relativePath, c.link));
    return {
      prev: n.value.prev ? { ...i[a - 1], text: n.value.prev } : i[a - 1],
      next: n.value.next ? { ...i[a + 1], text: n.value.next } : i[a + 1],
    };
  });
}
const lE = {},
  cE = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  uE = I(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1,
  ),
  fE = I(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1,
  ),
  dE = [uE, fE];
function pE(e, t) {
  return k(), M('svg', cE, dE);
}
const hE = fe(lE, [['render', pE]]),
  vE = { class: 'VPLastUpdated' },
  _E = ['datetime'],
  gE = te({
    __name: 'VPDocFooterLastUpdated',
    setup(e) {
      const { theme: t, page: n } = Ke(),
        s = de(() => new Date(n.value.lastUpdated)),
        i = de(() => s.value.toISOString()),
        a = re('');
      return (
        ut(() => {
          gr(() => {
            a.value = s.value.toLocaleString(window.navigator.language);
          });
        }),
        (c, u) => (
          k(),
          M('p', vE, [
            At(Be(D(t).lastUpdatedText ?? 'Last updated') + ': ', 1),
            I('time', { datetime: i.value }, Be(a.value), 9, _E),
          ])
        )
      );
    },
  });
const mE = fe(gE, [['__scopeId', 'data-v-de3e9be5']]),
  yE = { key: 0, class: 'VPDocFooter' },
  bE = { key: 0, class: 'edit-info' },
  wE = { key: 0, class: 'edit-link' },
  kE = { key: 1, class: 'last-updated' },
  $E = { key: 1, class: 'prev-next' },
  xE = { class: 'pager' },
  CE = ['href'],
  PE = ['innerHTML'],
  SE = ['innerHTML'],
  TE = ['href'],
  EE = ['innerHTML'],
  AE = ['innerHTML'],
  IE = te({
    __name: 'VPDocFooter',
    setup(e) {
      const { theme: t, page: n, frontmatter: s } = Ke(),
        i = iE(),
        a = aE(),
        c = de(() => t.value.editLink && s.value.editLink !== !1),
        u = de(() => n.value.lastUpdated && s.value.lastUpdated !== !1),
        d = de(() => c.value || u.value || a.value.prev || a.value.next);
      return (h, _) => {
        var m, y;
        return d.value
          ? (k(),
            M('footer', yE, [
              c.value || u.value
                ? (k(),
                  M('div', bE, [
                    c.value
                      ? (k(),
                        M('div', wE, [
                          Y(
                            Eo,
                            {
                              class: 'edit-link-button',
                              href: D(i).url,
                              'no-icon': !0,
                            },
                            {
                              default: ae(() => [
                                Y(hE, { class: 'edit-link-icon' }),
                                At(' ' + Be(D(i).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : ue('', !0),
                    u.value ? (k(), M('div', kE, [Y(mE)])) : ue('', !0),
                  ]))
                : ue('', !0),
              D(a).prev || D(a).next
                ? (k(),
                  M('div', $E, [
                    I('div', xE, [
                      D(a).prev
                        ? (k(),
                          M(
                            'a',
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: D(el)(D(a).prev.link),
                            },
                            [
                              I(
                                'span',
                                {
                                  class: 'desc',
                                  innerHTML:
                                    ((m = D(t).docFooter) == null
                                      ? void 0
                                      : m.prev) ?? 'Previous page',
                                },
                                null,
                                8,
                                PE,
                              ),
                              I(
                                'span',
                                { class: 'title', innerHTML: D(a).prev.text },
                                null,
                                8,
                                SE,
                              ),
                            ],
                            8,
                            CE,
                          ))
                        : ue('', !0),
                    ]),
                    I(
                      'div',
                      { class: Ce(['pager', { 'has-prev': D(a).prev }]) },
                      [
                        D(a).next
                          ? (k(),
                            M(
                              'a',
                              {
                                key: 0,
                                class: 'pager-link next',
                                href: D(el)(D(a).next.link),
                              },
                              [
                                I(
                                  'span',
                                  {
                                    class: 'desc',
                                    innerHTML:
                                      ((y = D(t).docFooter) == null
                                        ? void 0
                                        : y.next) ?? 'Next page',
                                  },
                                  null,
                                  8,
                                  EE,
                                ),
                                I(
                                  'span',
                                  { class: 'title', innerHTML: D(a).next.text },
                                  null,
                                  8,
                                  AE,
                                ),
                              ],
                              8,
                              TE,
                            ))
                          : ue('', !0),
                      ],
                      2,
                    ),
                  ]))
                : ue('', !0),
            ]))
          : ue('', !0);
      };
    },
  });
const ME = fe(IE, [['__scopeId', 'data-v-bfc312bf']]),
  LE = (e) => (dn('data-v-582c1173'), (e = e()), pn(), e),
  OE = { class: 'container' },
  BE = { key: 0, class: 'aside' },
  VE = LE(() => I('div', { class: 'aside-curtain' }, null, -1)),
  FE = { class: 'aside-container' },
  RE = { class: 'aside-content' },
  NE = { class: 'content' },
  HE = { class: 'content-container' },
  zE = { class: 'main' },
  jE = te({
    __name: 'VPDoc',
    setup(e) {
      const t = wr(),
        { hasSidebar: n, hasAside: s } = Dn(),
        i = de(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, '')),
        a = re();
      return (
        Zn('onContentUpdated', a),
        (c, u) => {
          const d = Hn('Content');
          return (
            k(),
            M(
              'div',
              {
                class: Ce([
                  'VPDoc',
                  { 'has-sidebar': D(n), 'has-aside': D(s) },
                ]),
              },
              [
                I('div', OE, [
                  D(s)
                    ? (k(),
                      M('div', BE, [
                        VE,
                        I('div', FE, [
                          I('div', RE, [
                            Y(sE, null, {
                              'aside-top': ae(() => [
                                K(c.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': ae(() => [
                                K(c.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': ae(() => [
                                K(
                                  c.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-outline-after': ae(() => [
                                K(
                                  c.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-ads-before': ae(() => [
                                K(c.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': ae(() => [
                                K(c.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ]))
                    : ue('', !0),
                  I('div', NE, [
                    I('div', HE, [
                      K(c.$slots, 'doc-before', {}, void 0, !0),
                      I('main', zE, [
                        Y(
                          d,
                          {
                            class: Ce(['vp-doc', i.value]),
                            onContentUpdated: a.value,
                          },
                          null,
                          8,
                          ['class', 'onContentUpdated'],
                        ),
                      ]),
                      K(c.$slots, 'doc-footer-before', {}, void 0, !0),
                      Y(ME),
                      K(c.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                  ]),
                ]),
              ],
              2,
            )
          );
        }
      );
    },
  });
const DE = fe(jE, [['__scopeId', 'data-v-582c1173']]),
  qE = te({
    __name: 'VPContent',
    setup(e) {
      const t = wr(),
        { frontmatter: n } = Ke(),
        { hasSidebar: s } = Dn(),
        i = Ot('NotFound');
      return (a, c) => (
        k(),
        M(
          'div',
          {
            class: Ce([
              'VPContent',
              { 'has-sidebar': D(s), 'is-home': D(n).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            D(t).component === D(i)
              ? (k(), ke(D(i), { key: 0 }))
              : D(n).layout === 'page'
                ? (k(), ke(XS, { key: 1 }))
                : D(n).layout === 'home'
                  ? (k(),
                    ke(
                      OT,
                      { key: 2 },
                      {
                        'home-hero-before': ae(() => [
                          K(a.$slots, 'home-hero-before', {}, void 0, !0),
                        ]),
                        'home-hero-image': ae(() => [
                          K(a.$slots, 'home-hero-image', {}, void 0, !0),
                        ]),
                        'home-hero-after': ae(() => [
                          K(a.$slots, 'home-hero-after', {}, void 0, !0),
                        ]),
                        'home-features-before': ae(() => [
                          K(a.$slots, 'home-features-before', {}, void 0, !0),
                        ]),
                        'home-features-after': ae(() => [
                          K(a.$slots, 'home-features-after', {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    ))
                  : (k(),
                    ke(
                      DE,
                      { key: 3 },
                      {
                        'doc-footer-before': ae(() => [
                          K(a.$slots, 'doc-footer-before', {}, void 0, !0),
                        ]),
                        'doc-before': ae(() => [
                          K(a.$slots, 'doc-before', {}, void 0, !0),
                        ]),
                        'doc-after': ae(() => [
                          K(a.$slots, 'doc-after', {}, void 0, !0),
                        ]),
                        'aside-top': ae(() => [
                          K(a.$slots, 'aside-top', {}, void 0, !0),
                        ]),
                        'aside-outline-before': ae(() => [
                          K(a.$slots, 'aside-outline-before', {}, void 0, !0),
                        ]),
                        'aside-outline-after': ae(() => [
                          K(a.$slots, 'aside-outline-after', {}, void 0, !0),
                        ]),
                        'aside-ads-before': ae(() => [
                          K(a.$slots, 'aside-ads-before', {}, void 0, !0),
                        ]),
                        'aside-ads-after': ae(() => [
                          K(a.$slots, 'aside-ads-after', {}, void 0, !0),
                        ]),
                        'aside-bottom': ae(() => [
                          K(a.$slots, 'aside-bottom', {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    )),
          ],
          2,
        )
      );
    },
  });
const UE = fe(qE, [['__scopeId', 'data-v-1f22d228']]),
  WE = { class: 'container' },
  KE = ['innerHTML'],
  YE = ['innerHTML'],
  XE = te({
    __name: 'VPFooter',
    setup(e) {
      const { theme: t } = Ke(),
        { hasSidebar: n } = Dn();
      return (s, i) =>
        D(t).footer
          ? (k(),
            M(
              'footer',
              { key: 0, class: Ce(['VPFooter', { 'has-sidebar': D(n) }]) },
              [
                I('div', WE, [
                  D(t).footer.message
                    ? (k(),
                      M(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: D(t).footer.message,
                        },
                        null,
                        8,
                        KE,
                      ))
                    : ue('', !0),
                  D(t).footer.copyright
                    ? (k(),
                      M(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: D(t).footer.copyright,
                        },
                        null,
                        8,
                        YE,
                      ))
                    : ue('', !0),
                ]),
              ],
              2,
            ))
          : ue('', !0);
    },
  });
const ZE = fe(XE, [['__scopeId', 'data-v-c51bd057']]),
  GE = { key: 0, class: 'Layout' },
  QE = te({
    __name: 'Layout',
    setup(e) {
      const { isOpen: t, open: n, close: s } = Dn(),
        i = wr();
      yt(() => i.path, s),
        X$(t, s),
        Zn('close-sidebar', s),
        Zn('is-sidebar-open', t);
      const { frontmatter: a } = Ke(),
        c = rf(),
        u = de(() => !!c['home-hero-image']);
      return (
        Zn('hero-image-slot-exists', u),
        (d, h) => {
          const _ = Hn('Content');
          return D(a).layout !== !1
            ? (k(),
              M('div', GE, [
                K(d.$slots, 'layout-top', {}, void 0, !0),
                Y(G$),
                Y(
                  ex,
                  { class: 'backdrop', show: D(t), onClick: D(s) },
                  null,
                  8,
                  ['show', 'onClick'],
                ),
                Y(nS, null, {
                  'nav-bar-title-before': ae(() => [
                    K(d.$slots, 'nav-bar-title-before', {}, void 0, !0),
                  ]),
                  'nav-bar-title-after': ae(() => [
                    K(d.$slots, 'nav-bar-title-after', {}, void 0, !0),
                  ]),
                  'nav-bar-content-before': ae(() => [
                    K(d.$slots, 'nav-bar-content-before', {}, void 0, !0),
                  ]),
                  'nav-bar-content-after': ae(() => [
                    K(d.$slots, 'nav-bar-content-after', {}, void 0, !0),
                  ]),
                  'nav-screen-content-before': ae(() => [
                    K(d.$slots, 'nav-screen-content-before', {}, void 0, !0),
                  ]),
                  'nav-screen-content-after': ae(() => [
                    K(d.$slots, 'nav-screen-content-after', {}, void 0, !0),
                  ]),
                  _: 3,
                }),
                Y(gS, { open: D(t), onOpenMenu: D(n) }, null, 8, [
                  'open',
                  'onOpenMenu',
                ]),
                Y(
                  US,
                  { open: D(t) },
                  {
                    'sidebar-nav-before': ae(() => [
                      K(d.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    ]),
                    'sidebar-nav-after': ae(() => [
                      K(d.$slots, 'sidebar-nav-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open'],
                ),
                Y(UE, null, {
                  'home-hero-before': ae(() => [
                    K(d.$slots, 'home-hero-before', {}, void 0, !0),
                  ]),
                  'home-hero-image': ae(() => [
                    K(d.$slots, 'home-hero-image', {}, void 0, !0),
                  ]),
                  'home-hero-after': ae(() => [
                    K(d.$slots, 'home-hero-after', {}, void 0, !0),
                  ]),
                  'home-features-before': ae(() => [
                    K(d.$slots, 'home-features-before', {}, void 0, !0),
                  ]),
                  'home-features-after': ae(() => [
                    K(d.$slots, 'home-features-after', {}, void 0, !0),
                  ]),
                  'doc-footer-before': ae(() => [
                    K(d.$slots, 'doc-footer-before', {}, void 0, !0),
                  ]),
                  'doc-before': ae(() => [
                    K(d.$slots, 'doc-before', {}, void 0, !0),
                  ]),
                  'doc-after': ae(() => [
                    K(d.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                  'aside-top': ae(() => [
                    K(d.$slots, 'aside-top', {}, void 0, !0),
                  ]),
                  'aside-bottom': ae(() => [
                    K(d.$slots, 'aside-bottom', {}, void 0, !0),
                  ]),
                  'aside-outline-before': ae(() => [
                    K(d.$slots, 'aside-outline-before', {}, void 0, !0),
                  ]),
                  'aside-outline-after': ae(() => [
                    K(d.$slots, 'aside-outline-after', {}, void 0, !0),
                  ]),
                  'aside-ads-before': ae(() => [
                    K(d.$slots, 'aside-ads-before', {}, void 0, !0),
                  ]),
                  'aside-ads-after': ae(() => [
                    K(d.$slots, 'aside-ads-after', {}, void 0, !0),
                  ]),
                  _: 3,
                }),
                Y(ZE),
                K(d.$slots, 'layout-bottom', {}, void 0, !0),
              ]))
            : (k(), ke(_, { key: 1 }));
        }
      );
    },
  });
const JE = fe(QE, [['__scopeId', 'data-v-5a1a9d88']]),
  Pl = (e) => (dn('data-v-1cc66c88'), (e = e()), pn(), e),
  eA = { class: 'NotFound' },
  tA = Pl(() => I('p', { class: 'code' }, '404', -1)),
  nA = Pl(() => I('h1', { class: 'title' }, 'PAGE NOT FOUND', -1)),
  rA = Pl(() => I('div', { class: 'divider' }, null, -1)),
  oA = Pl(() =>
    I(
      'blockquote',
      { class: 'quote' },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1,
    ),
  ),
  sA = { class: 'action' },
  iA = ['href'],
  aA = te({
    __name: 'NotFound',
    setup(e) {
      const { site: t } = Ke();
      return (n, s) => (
        k(),
        M('div', eA, [
          tA,
          nA,
          rA,
          oA,
          I('div', sA, [
            I(
              'a',
              { class: 'link', href: D(t).base, 'aria-label': 'go to home' },
              ' Take me home ',
              8,
              iA,
            ),
          ]),
        ])
      );
    },
  });
const lA = fe(aA, [['__scopeId', 'data-v-1cc66c88']]);
const O0 = {
  Layout: JE,
  NotFound: lA,
  enhanceApp: ({ app: e }) => {
    e.component('Badge', h$);
  },
};
var B0;
const Sl = typeof window < 'u',
  cA = (e) => typeof e == 'string',
  Bu = () => {};
Sl &&
  (B0 = window == null ? void 0 : window.navigator) != null &&
  B0.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ki(e) {
  return typeof e == 'function' ? e() : D(e);
}
function uA(e, t) {
  function n(...s) {
    return new Promise((i, a) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }),
      )
        .then(i)
        .catch(a);
    });
  }
  return n;
}
function fA(e, t = !0, n = !0, s = !1) {
  let i = 0,
    a,
    c = !0,
    u = Bu,
    d;
  const h = () => {
    a && (clearTimeout(a), (a = void 0), u(), (u = Bu));
  };
  return (m) => {
    const y = ki(e),
      S = Date.now() - i,
      R = () => (d = m());
    return (
      h(),
      y <= 0
        ? ((i = Date.now()), R())
        : (S > y && (n || !c)
            ? ((i = Date.now()), R())
            : t &&
              (d = new Promise((x, L) => {
                (u = s ? L : x),
                  (a = setTimeout(
                    () => {
                      (i = Date.now()), (c = !0), x(R()), h();
                    },
                    Math.max(0, y - S),
                  ));
              })),
          !n && !a && (a = setTimeout(() => (c = !0), y)),
          (c = !1),
          d)
    );
  };
}
function dA(e) {
  return e;
}
function R_(e) {
  return gi() ? (al(e), !0) : !1;
}
function pA(e, t = 200, n = !1, s = !0, i = !1) {
  return uA(fA(t, n, s, i), e);
}
function hA(e, t = !0) {
  En() ? ut(e) : t ? e() : Tn(e);
}
function vA(e, t, n = {}) {
  const { immediate: s = !0 } = n,
    i = re(!1);
  let a = null;
  function c() {
    a && (clearTimeout(a), (a = null));
  }
  function u() {
    (i.value = !1), c();
  }
  function d(...h) {
    c(),
      (i.value = !0),
      (a = setTimeout(() => {
        (i.value = !1), (a = null), e(...h);
      }, ki(t)));
  }
  return (
    s && ((i.value = !0), Sl && d()),
    R_(u),
    { isPending: ms(i), start: d, stop: u }
  );
}
function _A(e) {
  var t;
  const n = ki(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const gA = Sl ? window : void 0,
  mA = Sl ? window.navigator : void 0;
function yA(...e) {
  let t, n, s, i;
  if (
    (cA(e[0]) || Array.isArray(e[0])
      ? (([n, s, i] = e), (t = gA))
      : ([t, n, s, i] = e),
    !t)
  )
    return Bu;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const a = [],
    c = () => {
      a.forEach((_) => _()), (a.length = 0);
    },
    u = (_, m, y, S) => (
      _.addEventListener(m, y, S), () => _.removeEventListener(m, y, S)
    ),
    d = yt(
      () => [_A(t), ki(i)],
      ([_, m]) => {
        c(), _ && a.push(...n.flatMap((y) => s.map((S) => u(_, y, S, m))));
      },
      { immediate: !0, flush: 'post' },
    ),
    h = () => {
      d(), c();
    };
  return R_(h), h;
}
function bA(e, t = !1) {
  const n = re(),
    s = () => (n.value = !!e());
  return s(), hA(s, t), n;
}
function wA(e = {}) {
  const {
      navigator: t = mA,
      read: n = !1,
      source: s,
      copiedDuring: i = 1500,
      legacy: a = !1,
    } = e,
    c = ['copy', 'cut'],
    u = bA(() => t && 'clipboard' in t),
    d = de(() => u.value || a),
    h = re(''),
    _ = re(!1),
    m = vA(() => (_.value = !1), i);
  function y() {
    u.value
      ? t.clipboard.readText().then((L) => {
          h.value = L;
        })
      : (h.value = x());
  }
  if (d.value && n) for (const L of c) yA(L, y);
  async function S(L = ki(s)) {
    d.value &&
      L != null &&
      (u.value ? await t.clipboard.writeText(L) : R(L),
      (h.value = L),
      (_.value = !0),
      m.start());
  }
  function R(L) {
    const O = document.createElement('textarea');
    (O.value = L ?? ''),
      (O.style.position = 'absolute'),
      (O.style.opacity = '0'),
      document.body.appendChild(O),
      O.select(),
      document.execCommand('copy'),
      O.remove();
  }
  function x() {
    var L, O, V;
    return (V =
      (O =
        (L = document == null ? void 0 : document.getSelection) == null
          ? void 0
          : L.call(document)) == null
        ? void 0
        : O.toString()) != null
      ? V
      : '';
  }
  return { isSupported: d, text: h, copied: _, copy: S };
}
const V0 =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  F0 = '__vueuse_ssr_handlers__';
V0[F0] = V0[F0] || {};
var R0;
(function (e) {
  (e.UP = 'UP'),
    (e.RIGHT = 'RIGHT'),
    (e.DOWN = 'DOWN'),
    (e.LEFT = 'LEFT'),
    (e.NONE = 'NONE');
})(R0 || (R0 = {}));
var kA = Object.defineProperty,
  N0 = Object.getOwnPropertySymbols,
  $A = Object.prototype.hasOwnProperty,
  xA = Object.prototype.propertyIsEnumerable,
  H0 = (e, t, n) =>
    t in e
      ? kA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  CA = (e, t) => {
    for (var n in t || (t = {})) $A.call(t, n) && H0(e, n, t[n]);
    if (N0) for (var n of N0(t)) xA.call(t, n) && H0(e, n, t[n]);
    return e;
  };
const PA = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
CA({ linear: dA }, PA);
let SA = 0;
function TA() {
  return 'message_' + SA++;
}
const EA = te({
    setup() {
      const e = re([]);
      function t(s) {
        const i = TA(),
          a = { name: i, ...s };
        e.value.push(a);
        const c = s.duration;
        setTimeout(() => {
          n(i);
        }, c * 1e3);
      }
      function n(s) {
        for (const [i, a] of e.value.entries())
          if (a.name === s) {
            e.value.splice(i, 1);
            break;
          }
      }
      return { messages: e, add: t, remove: n };
    },
  }),
  AA = { class: 'demoblock-message-content' };
function IA(e, t, n, s, i, a) {
  return (
    k(),
    ke(
      dv,
      { name: 'demoblock-fade', tag: 'div', class: 'demoblock-message-wrap' },
      {
        default: ae(() => [
          (k(!0),
          M(
            Ae,
            null,
            wt(
              e.messages,
              (c) => (
                k(),
                M(
                  'div',
                  {
                    key: c.name,
                    class: Ce([
                      'demoblock-message',
                      c.type ? `demoblock-message-${c.type}` : '',
                    ]),
                  },
                  [I('div', AA, Be(c.content), 1)],
                  2,
                )
              ),
            ),
            128,
          )),
        ]),
        _: 1,
      },
    )
  );
}
const Vu = fe(EA, [
  ['render', IA],
  ['__scopeId', 'data-v-218f552b'],
]);
Vu.newInstance = (e = {}) => {
  const t = document.createElement('div'),
    i = wv({
      render() {
        return jn(Vu, { ...e, ref: 'messageRef' });
      },
    }).mount(t).$refs.messageRef;
  return (
    document.body.appendChild(t.firstElementChild),
    {
      add(a) {
        i.add(a);
      },
      remove(a) {
        i.remove(a);
      },
    }
  );
};
let nu;
function MA() {
  return (nu = nu || Vu.newInstance()), nu;
}
function z0(e, { duration: t = 3, type: n = '' }) {
  MA().add({ content: e, duration: t, type: n });
}
const j0 = {
  info(e, t) {
    return z0(e, { ...t });
  },
  error(e, t) {
    return z0(e, { ...t, type: 'error' });
  },
};
const LA = {
    name: 'Demo',
    props: { customClass: String, sourceCode: String },
    setup(e) {
      const { copy: t } = wA(),
        n = Ke(),
        s = wr(),
        i = re(!1),
        a = re(!1),
        c = re(!1),
        u = re(null),
        d = re(null),
        h = re(null),
        _ = re(null),
        m = re(null);
      yt(c, (z) => {
        if (((h.value.style.height = z ? `${N.value + 1}px` : '0'), !z)) {
          (a.value = !1),
            (_.value.style.left = '0'),
            (_.value.style.width = 'auto'),
            R();
          return;
        }
        setTimeout(() => {
          window.addEventListener('scroll', S),
            window.addEventListener('resize', S),
            y();
        }, 300);
      }),
        ut(() => {
          Tn(() => {
            d.value || (u.value.style.width = '100%');
          });
        }),
        bs(() => {
          R();
        });
      const y = () => {
          const {
              top: z,
              bottom: se,
              left: ne,
            } = h.value.getBoundingClientRect(),
            ve = window.innerHeight || document.body.clientHeight;
          (a.value = se > ve && z + 44 <= ve),
            (_.value.style.left = a.value ? `${ne}px` : '0');
          const J = a.value ? 1 : 2;
          _.value.style.width = `${m.value.offsetWidth - J}px`;
        },
        S = pA(y, 200),
        R = () => {
          window.removeEventListener('scroll', S),
            window.removeEventListener('resize', S);
        };
      yt(
        () => s.path,
        (z) => {
          x.value = z.split('/');
        },
      );
      const x = re(s.path.split('/')),
        L = de(() => x.value[x.value.length - 1].split('.')[0]),
        O = de(() => `demo-${L.value}`);
      un({});
      const V = () => {},
        P = () => {
          (c.value = !c.value), (i.value = c.value);
        },
        w = de(() => {
          var z;
          return (
            ((z = n.theme.value.demoblock) == null
              ? void 0
              : z[n.localePath.value]) ?? {
              'hide-text': '隐藏代码',
              'show-text': '显示代码',
              'copy-button-text': '复制代码片段',
              'copy-success-text': '复制成功',
            }
          );
        }),
        B = de(() => (c.value ? w.value['hide-text'] : w.value['show-text'])),
        N = de(() =>
          d.value
            ? d.value.clientHeight + u.value.clientHeight + 20
            : u.value.clientHeight,
        );
      return {
        blockClass: O,
        hover: i,
        fixedControl: a,
        isExpanded: c,
        locale: w,
        controlText: B,
        onClickControl: P,
        highlight: u,
        description: d,
        meta: h,
        control: _,
        onCopy: async () => {
          try {
            t(e.sourceCode), j0.info(w.value['copy-success-text']);
          } catch {
            j0.error(w.value['copy-success-text']);
          }
        },
        goCodepen: V,
        demoBlock: m,
      };
    },
  },
  OA = { class: 'source' },
  BA = { ref: 'meta', class: 'meta' },
  VA = { key: 0, ref: 'description', class: 'description' },
  FA = { ref: 'highlight', class: 'highlight' },
  RA = { class: 'control-button-wrap' };
function NA(e, t, n, s, i, a) {
  return (
    k(),
    M(
      'div',
      {
        ref: 'demoBlock',
        class: Ce([
          'demo-block',
          s.blockClass,
          n.customClass ? n.customClass : '',
          { hover: s.hover },
        ]),
        onMouseenter: t[2] || (t[2] = (c) => (s.hover = !0)),
        onMouseleave: t[3] || (t[3] = (c) => (s.hover = !1)),
      },
      [
        I('div', OA, [K(e.$slots, 'default', {}, void 0, !0)]),
        I(
          'div',
          BA,
          [
            e.$slots.description
              ? (k(),
                M('div', VA, [K(e.$slots, 'description', {}, void 0, !0)], 512))
              : ue('', !0),
            I('div', FA, [K(e.$slots, 'highlight', {}, void 0, !0)], 512),
          ],
          512,
        ),
        I(
          'div',
          {
            ref: 'control',
            class: Ce([
              'demo-block-control',
              { 'is-fixed': s.fixedControl, 'is-expanded': s.isExpanded },
            ]),
            onClick:
              t[1] ||
              (t[1] = (...c) => s.onClickControl && s.onClickControl(...c)),
          },
          [
            Y(
              Nn,
              { name: 'arrow-slide' },
              {
                default: ae(() => [
                  I(
                    'i',
                    {
                      class: Ce([
                        'control-icon',
                        {
                          'icon-caret-down': !s.isExpanded,
                          'icon-caret-up': s.isExpanded,
                          hovering: s.hover,
                        },
                      ]),
                    },
                    null,
                    2,
                  ),
                ]),
                _: 1,
              },
            ),
            Y(
              Nn,
              { name: 'text-slide' },
              {
                default: ae(() => [
                  _r(
                    I(
                      'span',
                      { class: 'control-text' },
                      Be(s.controlText),
                      513,
                    ),
                    [[Gn, s.hover]],
                  ),
                ]),
                _: 1,
              },
            ),
            I('div', RA, [
              Y(
                Nn,
                { name: 'text-slide' },
                {
                  default: ae(() => [
                    _r(
                      I(
                        'span',
                        {
                          class: 'control-button copy-button',
                          onClick:
                            t[0] ||
                            (t[0] = Gr(
                              (...c) => s.onCopy && s.onCopy(...c),
                              ['stop'],
                            )),
                        },
                        Be(s.locale && s.locale['copy-button-text']),
                        513,
                      ),
                      [[Gn, s.isExpanded]],
                    ),
                  ]),
                  _: 1,
                },
              ),
            ]),
          ],
          2,
        ),
      ],
      34,
    )
  );
}
const HA = fe(LA, [
  ['render', NA],
  ['__scopeId', 'data-v-fe53fce4'],
]);
const zA = te({ name: 'DemoBlock', props: { customClass: String } }),
  jA = { class: 'source' };
function DA(e, t, n, s, i, a) {
  return (
    k(),
    M(
      'div',
      { class: Ce(['demo-block', [e.customClass ? e.customClass : '']]) },
      [I('div', jA, [K(e.$slots, 'default', {}, void 0, !0)])],
      2,
    )
  );
}
const qA = fe(zA, [
  ['render', DA],
  ['__scopeId', 'data-v-b4c275f1'],
]);
function UA(e) {
  e.component('Demo', HA), e.component('DemoBlock', qA);
}
const as = {
  ...O0,
  enhanceApp(e) {
    O0.enhanceApp(e), UA(e.app), e.app.use(w_);
  },
};
function WA(e, t) {
  let n = [],
    s = !0;
  const i = (a) => {
    if (s) {
      s = !1;
      return;
    }
    n.forEach((c) => document.head.removeChild(c)),
      (n = []),
      a.forEach((c) => {
        const u = KA(c);
        document.head.appendChild(u), n.push(u);
      });
  };
  gr(() => {
    const a = e.data,
      c = t.value,
      u = a && a.description,
      d = (a && a.frontmatter.head) || [];
    (document.title = $_(c, a)),
      document
        .querySelector('meta[name=description]')
        .setAttribute('content', u || c.description),
      i($$(c.head, XA(d)));
  });
}
function KA([e, t, n]) {
  const s = document.createElement(e);
  for (const i in t) s.setAttribute(i, t[i]);
  return n && (s.innerHTML = n), s;
}
function YA(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description';
}
function XA(e) {
  return e.filter((t) => !YA(t));
}
const ru = new Set(),
  N_ = () => document.createElement('link'),
  ZA = (e) => {
    const t = N_();
    (t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t);
  },
  GA = (e) => {
    const t = new XMLHttpRequest();
    t.open('GET', e, (t.withCredentials = !0)), t.send();
  };
let Ba;
const QA =
  Ht &&
  (Ba = N_()) &&
  Ba.relList &&
  Ba.relList.supports &&
  Ba.relList.supports('prefetch')
    ? ZA
    : GA;
function JA() {
  if (!Ht || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((a) => {
        a.forEach((c) => {
          if (c.isIntersecting) {
            const u = c.target;
            n.unobserve(u);
            const { pathname: d } = u;
            if (!ru.has(d)) {
              ru.add(d);
              const h = x_(d);
              QA(h);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((a) => {
          const { target: c, hostname: u, pathname: d } = a,
            h = d.match(/\.\w+$/);
          (h && h[0] !== '.html') ||
            (c !== '_blank' &&
              u === location.hostname &&
              (d !== location.pathname ? n.observe(a) : ru.add(d)));
        });
      });
  };
  ut(s);
  const i = wr();
  yt(() => i.path, s),
    br(() => {
      n && n.disconnect();
    });
}
const eI = te({
  setup(e, { slots: t }) {
    const n = re(!1);
    return (
      ut(() => {
        n.value = !0;
      }),
      () => (n.value && t.default ? t.default() : null)
    );
  },
});
function tI() {
  if (Ht) {
    const e = new Map();
    window.addEventListener('click', (t) => {
      var s;
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const i = n.parentElement,
          a =
            (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
        if (!i || !a) return;
        const c = /language-(shellscript|shell|bash|sh|zsh)/.test(i.className);
        let u = '';
        a.querySelectorAll('span.line:not(.diff.remove)').forEach(
          (d) =>
            (u +=
              (d.textContent || '') +
              `
`),
        ),
          (u = u.slice(0, -1)),
          c && (u = u.replace(/^ *(\$|>) /gm, '').trim()),
          nI(u).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n));
            const d = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n);
            }, 2e3);
            e.set(n, d);
          });
      }
    });
  }
}
async function nI(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement;
    (t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt');
    const s = document.getSelection(),
      i = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      i && (s.removeAllRanges(), s.addRange(i)),
      n && n.focus();
  }
}
function rI() {
  Ht &&
    window.addEventListener('click', (e) => {
      var n, s;
      const t = e.target;
      if (t.matches('.vp-code-group input')) {
        const i = (n = t.parentElement) == null ? void 0 : n.parentElement,
          a = Array.from(
            (i == null ? void 0 : i.querySelectorAll('input')) || [],
          ).indexOf(t),
          c =
            i == null
              ? void 0
              : i.querySelector('div[class*="language-"].active'),
          u =
            (s =
              i == null
                ? void 0
                : i.querySelectorAll('div[class*="language-"]')) == null
              ? void 0
              : s[a];
        c &&
          u &&
          c !== u &&
          (c.classList.remove('active'), u.classList.add('active'));
      }
    });
}
const H_ = as.NotFound || (() => '404 Not Found'),
  oI = te({
    name: 'VitePressApp',
    setup() {
      const { site: e } = Ke();
      return (
        ut(() => {
          yt(
            () => e.value.lang,
            (t) => {
              document.documentElement.lang = t;
            },
            { immediate: !0 },
          );
        }),
        JA(),
        tI(),
        rI(),
        as.setup && as.setup(),
        () => jn(as.Layout)
      );
    },
  });
async function sI() {
  const e = aI(),
    t = iI();
  t.provide(P_, e);
  const n = S$(e.route);
  return (
    t.provide(C_, n),
    t.provide('NotFound', H_),
    t.component('Content', I$),
    t.component('ClientOnly', eI),
    Object.defineProperty(t.config.globalProperties, '$frontmatter', {
      get() {
        return n.frontmatter.value;
      },
    }),
    as.enhanceApp && (await as.enhanceApp({ app: t, router: e, siteData: hs })),
    { app: t, router: e, data: n }
  );
}
function iI() {
  return kv(oI);
}
function aI() {
  let e = Ht,
    t;
  return E$((n) => {
    let s = x_(n);
    return (
      e && (t = s),
      (e || t === s) && (s = s.replace(/\.js$/, '.lean.js')),
      Ht && (e = !1),
      d$(() => import(s), [])
    );
  }, H_);
}
Ht &&
  sI().then(({ app: e, router: t, data: n }) => {
    t.go().then(() => {
      WA(t.route, n.site), e.mount('#app');
    });
  });
export {
  lI as V,
  fe as _,
  Y as a,
  I as b,
  M as c,
  sI as createApp,
  At as d,
  K1 as e,
  cI as f,
  k as o,
  Hn as r,
  ae as w,
};
