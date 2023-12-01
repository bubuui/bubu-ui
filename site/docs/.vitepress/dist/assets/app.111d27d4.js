function $l(e, t) {
  const r = Object.create(null),
    i = e.split(',');
  for (let o = 0; o < i.length; o++) r[i[o]] = !0;
  return t ? (o) => !!r[o.toLowerCase()] : (o) => !!r[o];
}
const Vy =
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt',
  Dy = $l(Vy),
  Hy =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Uy = $l(Hy);
function Ep(e) {
  return !!e || e === '';
}
function ht(e) {
  if (me(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const i = e[r],
        o = it(i) ? Wy(i) : ht(i);
      if (o) for (const a in o) t[a] = o[a];
    }
    return t;
  } else {
    if (it(e)) return e;
    if (at(e)) return e;
  }
}
const zy = /;(?![^(]*\))/g,
  qy = /:(.+)/;
function Wy(e) {
  const t = {};
  return (
    e.split(zy).forEach((r) => {
      if (r) {
        const i = r.split(qy);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }),
    t
  );
}
function Ce(e) {
  let t = '';
  if (it(e)) t = e;
  else if (me(e))
    for (let r = 0; r < e.length; r++) {
      const i = Ce(e[r]);
      i && (t += i + ' ');
    }
  else if (at(e)) for (const r in e) e[r] && (t += r + ' ');
  return t.trim();
}
function Ky(e) {
  if (!e) return null;
  let { class: t, style: r } = e;
  return t && !it(t) && (e.class = Ce(t)), r && (e.style = ht(r)), e;
}
function Gy(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let i = 0; r && i < e.length; i++) r = Rr(e[i], t[i]);
  return r;
}
function Rr(e, t) {
  if (e === t) return !0;
  let r = lh(e),
    i = lh(t);
  if (r || i) return r && i ? e.getTime() === t.getTime() : !1;
  if (((r = Vi(e)), (i = Vi(t)), r || i)) return e === t;
  if (((r = me(e)), (i = me(t)), r || i)) return r && i ? Gy(e, t) : !1;
  if (((r = at(e)), (i = at(t)), r || i)) {
    if (!r || !i) return !1;
    const o = Object.keys(e).length,
      a = Object.keys(t).length;
    if (o !== a) return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c),
        d = t.hasOwnProperty(c);
      if ((f && !d) || (!f && d) || !Rr(e[c], t[c])) return !1;
    }
  }
  return String(e) === String(t);
}
function Cl(e, t) {
  return e.findIndex((r) => Rr(r, t));
}
const Me = (e) =>
    it(e)
      ? e
      : e == null
        ? ''
        : me(e) || (at(e) && (e.toString === Ap || !Ae(e.toString)))
          ? JSON.stringify(e, Tp, 2)
          : String(e),
  Tp = (e, t) =>
    t && t.__v_isRef
      ? Tp(e, t.value)
      : Hs(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (r, [i, o]) => ((r[`${i} =>`] = o), r),
              {},
            ),
          }
        : ps(t)
          ? { [`Set(${t.size})`]: [...t.values()] }
          : at(t) && !me(t) && !kp(t)
            ? String(t)
            : t,
  Ze = {},
  Ds = [],
  Tn = () => {},
  Yy = () => !1,
  jy = /^on[^a-z]/,
  Gi = (e) => jy.test(e),
  Gc = (e) => e.startsWith('onUpdate:'),
  lt = Object.assign,
  Yc = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  },
  Zy = Object.prototype.hasOwnProperty,
  qe = (e, t) => Zy.call(e, t),
  me = Array.isArray,
  Hs = (e) => Yi(e) === '[object Map]',
  ps = (e) => Yi(e) === '[object Set]',
  lh = (e) => Yi(e) === '[object Date]',
  Ae = (e) => typeof e == 'function',
  it = (e) => typeof e == 'string',
  Vi = (e) => typeof e == 'symbol',
  at = (e) => e !== null && typeof e == 'object',
  jc = (e) => at(e) && Ae(e.then) && Ae(e.catch),
  Ap = Object.prototype.toString,
  Yi = (e) => Ap.call(e),
  Xy = (e) => Yi(e).slice(8, -1),
  kp = (e) => Yi(e) === '[object Object]',
  Zc = (e) =>
    it(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Ti = $l(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Pl = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
  Jy = /-(\w)/g,
  rn = Pl((e) => e.replace(Jy, (t, r) => (r ? r.toUpperCase() : ''))),
  Qy = /\B([A-Z])/g,
  Un = Pl((e) => e.replace(Qy, '-$1').toLowerCase()),
  ji = Pl((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ai = Pl((e) => (e ? `on${ji(e)}` : '')),
  Gs = (e, t) => !Object.is(e, t),
  Us = (e, t) => {
    for (let r = 0; r < e.length; r++) e[r](t);
  },
  al = (e, t, r) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r });
  },
  Nr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ah;
const e4 = () =>
  ah ||
  (ah =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
let Jt;
class Xc {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Jt &&
        ((this.parent = Jt),
        (this.index = (Jt.scopes || (Jt.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const r = Jt;
      try {
        return (Jt = this), t();
      } finally {
        Jt = r;
      }
    }
  }
  on() {
    Jt = this;
  }
  off() {
    Jt = this.parent;
  }
  stop(t) {
    if (this.active) {
      let r, i;
      for (r = 0, i = this.effects.length; r < i; r++) this.effects[r].stop();
      for (r = 0, i = this.cleanups.length; r < i; r++) this.cleanups[r]();
      if (this.scopes)
        for (r = 0, i = this.scopes.length; r < i; r++) this.scopes[r].stop(!0);
      if (this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.active = !1;
    }
  }
}
function t4(e) {
  return new Xc(e);
}
function Ip(e, t = Jt) {
  t && t.active && t.effects.push(e);
}
function Sl() {
  return Jt;
}
function El(e) {
  Jt && Jt.cleanups.push(e);
}
const Jc = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Lp = (e) => (e.w & Vr) > 0,
  Op = (e) => (e.n & Vr) > 0,
  n4 = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Vr;
  },
  r4 = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let r = 0;
      for (let i = 0; i < t.length; i++) {
        const o = t[i];
        Lp(o) && !Op(o) ? o.delete(e) : (t[r++] = o),
          (o.w &= ~Vr),
          (o.n &= ~Vr);
      }
      t.length = r;
    }
  },
  mc = new WeakMap();
let Ci = 0,
  Vr = 1;
const yc = 30;
let En;
const os = Symbol(''),
  bc = Symbol('');
class Zi {
  constructor(t, r = null, i) {
    (this.fn = t),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Ip(this, i);
  }
  run() {
    if (!this.active) return this.fn();
    let t = En,
      r = Br;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = En),
        (En = this),
        (Br = !0),
        (Vr = 1 << ++Ci),
        Ci <= yc ? n4(this) : ch(this),
        this.fn()
      );
    } finally {
      Ci <= yc && r4(this),
        (Vr = 1 << --Ci),
        (En = this.parent),
        (Br = r),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    En === this
      ? (this.deferStop = !0)
      : this.active &&
        (ch(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function ch(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let r = 0; r < t.length; r++) t[r].delete(e);
    t.length = 0;
  }
}
function s4(e, t) {
  e.effect && (e = e.effect.fn);
  const r = new Zi(e);
  t && (lt(r, t), t.scope && Ip(r, t.scope)), (!t || !t.lazy) && r.run();
  const i = r.run.bind(r);
  return (i.effect = r), i;
}
function i4(e) {
  e.effect.stop();
}
let Br = !0;
const Mp = [];
function gs() {
  Mp.push(Br), (Br = !1);
}
function _s() {
  const e = Mp.pop();
  Br = e === void 0 ? !0 : e;
}
function sn(e, t, r) {
  if (Br && En) {
    let i = mc.get(e);
    i || mc.set(e, (i = new Map()));
    let o = i.get(r);
    o || i.set(r, (o = Jc())), Bp(o);
  }
}
function Bp(e, t) {
  let r = !1;
  Ci <= yc ? Op(e) || ((e.n |= Vr), (r = !Lp(e))) : (r = !e.has(En)),
    r && (e.add(En), En.deps.push(e));
}
function or(e, t, r, i, o, a) {
  const c = mc.get(e);
  if (!c) return;
  let f = [];
  if (t === 'clear') f = [...c.values()];
  else if (r === 'length' && me(e))
    c.forEach((d, p) => {
      (p === 'length' || p >= i) && f.push(d);
    });
  else
    switch ((r !== void 0 && f.push(c.get(r)), t)) {
      case 'add':
        me(e)
          ? Zc(r) && f.push(c.get('length'))
          : (f.push(c.get(os)), Hs(e) && f.push(c.get(bc)));
        break;
      case 'delete':
        me(e) || (f.push(c.get(os)), Hs(e) && f.push(c.get(bc)));
        break;
      case 'set':
        Hs(e) && f.push(c.get(os));
        break;
    }
  if (f.length === 1) f[0] && wc(f[0]);
  else {
    const d = [];
    for (const p of f) p && d.push(...p);
    wc(Jc(d));
  }
}
function wc(e, t) {
  const r = me(e) ? e : [...e];
  for (const i of r) i.computed && uh(i);
  for (const i of r) i.computed || uh(i);
}
function uh(e, t) {
  (e !== En || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const o4 = $l('__proto__,__v_isRef,__isVue'),
  Fp = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Vi),
  ),
  l4 = Tl(),
  a4 = Tl(!1, !0),
  c4 = Tl(!0),
  u4 = Tl(!0, !0),
  fh = f4();
function f4() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...r) {
        const i = He(this);
        for (let a = 0, c = this.length; a < c; a++) sn(i, 'get', a + '');
        const o = i[t](...r);
        return o === -1 || o === !1 ? i[t](...r.map(He)) : o;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...r) {
        gs();
        const i = He(this)[t].apply(this, r);
        return _s(), i;
      };
    }),
    e
  );
}
function Tl(e = !1, t = !1) {
  return function (i, o, a) {
    if (o === '__v_isReactive') return !e;
    if (o === '__v_isReadonly') return e;
    if (o === '__v_isShallow') return t;
    if (o === '__v_raw' && a === (e ? (t ? zp : Up) : t ? Hp : Dp).get(i))
      return i;
    const c = me(i);
    if (!e && c && qe(fh, o)) return Reflect.get(fh, o, a);
    const f = Reflect.get(i, o, a);
    return (Vi(o) ? Fp.has(o) : o4(o)) || (e || sn(i, 'get', o), t)
      ? f
      : dt(f)
        ? c && Zc(o)
          ? f
          : f.value
        : at(f)
          ? e
            ? ti(f)
            : lr(f)
          : f;
  };
}
const d4 = Rp(),
  h4 = Rp(!0);
function Rp(e = !1) {
  return function (r, i, o, a) {
    let c = r[i];
    if (Ys(c) && dt(c) && !dt(o)) return !1;
    if (
      !e &&
      !Ys(o) &&
      (cl(o) || ((o = He(o)), (c = He(c))), !me(r) && dt(c) && !dt(o))
    )
      return (c.value = o), !0;
    const f = me(r) && Zc(i) ? Number(i) < r.length : qe(r, i),
      d = Reflect.set(r, i, o, a);
    return (
      r === He(a) && (f ? Gs(o, c) && or(r, 'set', i, o) : or(r, 'add', i, o)),
      d
    );
  };
}
function p4(e, t) {
  const r = qe(e, t);
  e[t];
  const i = Reflect.deleteProperty(e, t);
  return i && r && or(e, 'delete', t, void 0), i;
}
function g4(e, t) {
  const r = Reflect.has(e, t);
  return (!Vi(t) || !Fp.has(t)) && sn(e, 'has', t), r;
}
function _4(e) {
  return sn(e, 'iterate', me(e) ? 'length' : os), Reflect.ownKeys(e);
}
const Np = { get: l4, set: d4, deleteProperty: p4, has: g4, ownKeys: _4 },
  Vp = {
    get: c4,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  v4 = lt({}, Np, { get: a4, set: h4 }),
  m4 = lt({}, Vp, { get: u4 }),
  Qc = (e) => e,
  Al = (e) => Reflect.getPrototypeOf(e);
function Wo(e, t, r = !1, i = !1) {
  e = e.__v_raw;
  const o = He(e),
    a = He(t);
  r || (t !== a && sn(o, 'get', t), sn(o, 'get', a));
  const { has: c } = Al(o),
    f = i ? Qc : r ? nu : Di;
  if (c.call(o, t)) return f(e.get(t));
  if (c.call(o, a)) return f(e.get(a));
  e !== o && e.get(t);
}
function Ko(e, t = !1) {
  const r = this.__v_raw,
    i = He(r),
    o = He(e);
  return (
    t || (e !== o && sn(i, 'has', e), sn(i, 'has', o)),
    e === o ? r.has(e) : r.has(e) || r.has(o)
  );
}
function Go(e, t = !1) {
  return (
    (e = e.__v_raw), !t && sn(He(e), 'iterate', os), Reflect.get(e, 'size', e)
  );
}
function dh(e) {
  e = He(e);
  const t = He(this);
  return Al(t).has.call(t, e) || (t.add(e), or(t, 'add', e, e)), this;
}
function hh(e, t) {
  t = He(t);
  const r = He(this),
    { has: i, get: o } = Al(r);
  let a = i.call(r, e);
  a || ((e = He(e)), (a = i.call(r, e)));
  const c = o.call(r, e);
  return (
    r.set(e, t), a ? Gs(t, c) && or(r, 'set', e, t) : or(r, 'add', e, t), this
  );
}
function ph(e) {
  const t = He(this),
    { has: r, get: i } = Al(t);
  let o = r.call(t, e);
  o || ((e = He(e)), (o = r.call(t, e))), i && i.call(t, e);
  const a = t.delete(e);
  return o && or(t, 'delete', e, void 0), a;
}
function gh() {
  const e = He(this),
    t = e.size !== 0,
    r = e.clear();
  return t && or(e, 'clear', void 0, void 0), r;
}
function Yo(e, t) {
  return function (i, o) {
    const a = this,
      c = a.__v_raw,
      f = He(c),
      d = t ? Qc : e ? nu : Di;
    return (
      !e && sn(f, 'iterate', os), c.forEach((p, v) => i.call(o, d(p), d(v), a))
    );
  };
}
function jo(e, t, r) {
  return function (...i) {
    const o = this.__v_raw,
      a = He(o),
      c = Hs(a),
      f = e === 'entries' || (e === Symbol.iterator && c),
      d = e === 'keys' && c,
      p = o[e](...i),
      v = r ? Qc : t ? nu : Di;
    return (
      !t && sn(a, 'iterate', d ? bc : os),
      {
        next() {
          const { value: m, done: y } = p.next();
          return y
            ? { value: m, done: y }
            : { value: f ? [v(m[0]), v(m[1])] : v(m), done: y };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ar(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this;
  };
}
function y4() {
  const e = {
      get(a) {
        return Wo(this, a);
      },
      get size() {
        return Go(this);
      },
      has: Ko,
      add: dh,
      set: hh,
      delete: ph,
      clear: gh,
      forEach: Yo(!1, !1),
    },
    t = {
      get(a) {
        return Wo(this, a, !1, !0);
      },
      get size() {
        return Go(this);
      },
      has: Ko,
      add: dh,
      set: hh,
      delete: ph,
      clear: gh,
      forEach: Yo(!1, !0),
    },
    r = {
      get(a) {
        return Wo(this, a, !0);
      },
      get size() {
        return Go(this, !0);
      },
      has(a) {
        return Ko.call(this, a, !0);
      },
      add: Ar('add'),
      set: Ar('set'),
      delete: Ar('delete'),
      clear: Ar('clear'),
      forEach: Yo(!0, !1),
    },
    i = {
      get(a) {
        return Wo(this, a, !0, !0);
      },
      get size() {
        return Go(this, !0);
      },
      has(a) {
        return Ko.call(this, a, !0);
      },
      add: Ar('add'),
      set: Ar('set'),
      delete: Ar('delete'),
      clear: Ar('clear'),
      forEach: Yo(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((a) => {
      (e[a] = jo(a, !1, !1)),
        (r[a] = jo(a, !0, !1)),
        (t[a] = jo(a, !1, !0)),
        (i[a] = jo(a, !0, !0));
    }),
    [e, r, t, i]
  );
}
const [b4, w4, x4, $4] = y4();
function kl(e, t) {
  const r = t ? (e ? $4 : x4) : e ? w4 : b4;
  return (i, o, a) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
        ? e
        : o === '__v_raw'
          ? i
          : Reflect.get(qe(r, o) && o in i ? r : i, o, a);
}
const C4 = { get: kl(!1, !1) },
  P4 = { get: kl(!1, !0) },
  S4 = { get: kl(!0, !1) },
  E4 = { get: kl(!0, !0) },
  Dp = new WeakMap(),
  Hp = new WeakMap(),
  Up = new WeakMap(),
  zp = new WeakMap();
function T4(e) {
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
function A4(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : T4(Xy(e));
}
function lr(e) {
  return Ys(e) ? e : Il(e, !1, Np, C4, Dp);
}
function eu(e) {
  return Il(e, !1, v4, P4, Hp);
}
function ti(e) {
  return Il(e, !0, Vp, S4, Up);
}
function k4(e) {
  return Il(e, !0, m4, E4, zp);
}
function Il(e, t, r, i, o) {
  if (!at(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const a = o.get(e);
  if (a) return a;
  const c = A4(e);
  if (c === 0) return e;
  const f = new Proxy(e, c === 2 ? i : r);
  return o.set(e, f), f;
}
function ls(e) {
  return Ys(e) ? ls(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ys(e) {
  return !!(e && e.__v_isReadonly);
}
function cl(e) {
  return !!(e && e.__v_isShallow);
}
function tu(e) {
  return ls(e) || Ys(e);
}
function He(e) {
  const t = e && e.__v_raw;
  return t ? He(t) : e;
}
function zs(e) {
  return al(e, '__v_skip', !0), e;
}
const Di = (e) => (at(e) ? lr(e) : e),
  nu = (e) => (at(e) ? ti(e) : e);
function ru(e) {
  Br && En && ((e = He(e)), Bp(e.dep || (e.dep = Jc())));
}
function Ll(e, t) {
  (e = He(e)), e.dep && wc(e.dep);
}
function dt(e) {
  return !!(e && e.__v_isRef === !0);
}
function ce(e) {
  return Wp(e, !1);
}
function qp(e) {
  return Wp(e, !0);
}
function Wp(e, t) {
  return dt(e) ? e : new I4(e, t);
}
class I4 {
  constructor(t, r) {
    (this.__v_isShallow = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = r ? t : He(t)),
      (this._value = r ? t : Di(t));
  }
  get value() {
    return ru(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : He(t)),
      Gs(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : Di(t)),
        Ll(this));
  }
}
function L4(e) {
  Ll(e);
}
function L(e) {
  return dt(e) ? e.value : e;
}
const O4 = {
  get: (e, t, r) => L(Reflect.get(e, t, r)),
  set: (e, t, r, i) => {
    const o = e[t];
    return dt(o) && !dt(r) ? ((o.value = r), !0) : Reflect.set(e, t, r, i);
  },
};
function su(e) {
  return ls(e) ? e : new Proxy(e, O4);
}
class M4 {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: r, set: i } = t(
      () => ru(this),
      () => Ll(this),
    );
    (this._get = r), (this._set = i);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function B4(e) {
  return new M4(e);
}
function ar(e) {
  const t = me(e) ? new Array(e.length) : {};
  for (const r in e) t[r] = Kp(e, r);
  return t;
}
class F4 {
  constructor(t, r, i) {
    (this._object = t),
      (this._key = r),
      (this._defaultValue = i),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Kp(e, t, r) {
  const i = e[t];
  return dt(i) ? i : new F4(e, t, r);
}
class R4 {
  constructor(t, r, i, o) {
    (this._setter = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new Zi(t, () => {
        this._dirty || ((this._dirty = !0), Ll(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = i);
  }
  get value() {
    const t = He(this);
    return (
      ru(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function N4(e, t, r = !1) {
  let i, o;
  const a = Ae(e);
  return (
    a ? ((i = e), (o = Tn)) : ((i = e.get), (o = e.set)),
    new R4(i, o, a || !o, r)
  );
}
const ki = [];
function Gp(e, ...t) {
  gs();
  const r = ki.length ? ki[ki.length - 1].component : null,
    i = r && r.appContext.config.warnHandler,
    o = V4();
  if (i)
    zn(i, r, 11, [
      e + t.join(''),
      r && r.proxy,
      o.map(({ vnode: a }) => `at <${R0(r, a.type)}>`).join(`
`),
      o,
    ]);
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    o.length &&
      a.push(
        `
`,
        ...D4(o),
      ),
      console.warn(...a);
  }
  _s();
}
function V4() {
  let e = ki[ki.length - 1];
  if (!e) return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e
      ? r.recurseCount++
      : t.push({ vnode: e, recurseCount: 0 });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function D4(e) {
  const t = [];
  return (
    e.forEach((r, i) => {
      t.push(
        ...(i === 0
          ? []
          : [
              `
`,
            ]),
        ...H4(r),
      );
    }),
    t
  );
}
function H4({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : '',
    i = e.component ? e.component.parent == null : !1,
    o = ` at <${R0(e.component, e.type, i)}`,
    a = '>' + r;
  return e.props ? [o, ...U4(e.props), a] : [o + a];
}
function U4(e) {
  const t = [],
    r = Object.keys(e);
  return (
    r.slice(0, 3).forEach((i) => {
      t.push(...Yp(i, e[i]));
    }),
    r.length > 3 && t.push(' ...'),
    t
  );
}
function Yp(e, t, r) {
  return it(t)
    ? ((t = JSON.stringify(t)), r ? t : [`${e}=${t}`])
    : typeof t == 'number' || typeof t == 'boolean' || t == null
      ? r
        ? t
        : [`${e}=${t}`]
      : dt(t)
        ? ((t = Yp(e, He(t.value), !0)), r ? t : [`${e}=Ref<`, t, '>'])
        : Ae(t)
          ? [`${e}=fn${t.name ? `<${t.name}>` : ''}`]
          : ((t = He(t)), r ? t : [`${e}=`, t]);
}
function zn(e, t, r, i) {
  let o;
  try {
    o = i ? e(...i) : e();
  } catch (a) {
    vs(a, t, r);
  }
  return o;
}
function nn(e, t, r, i) {
  if (Ae(e)) {
    const a = zn(e, t, r, i);
    return (
      a &&
        jc(a) &&
        a.catch((c) => {
          vs(c, t, r);
        }),
      a
    );
  }
  const o = [];
  for (let a = 0; a < e.length; a++) o.push(nn(e[a], t, r, i));
  return o;
}
function vs(e, t, r, i = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const c = t.proxy,
      f = r;
    for (; a; ) {
      const p = a.ec;
      if (p) {
        for (let v = 0; v < p.length; v++) if (p[v](e, c, f) === !1) return;
      }
      a = a.parent;
    }
    const d = t.appContext.config.errorHandler;
    if (d) {
      zn(d, null, 10, [e, c, f]);
      return;
    }
  }
  z4(e, r, o, i);
}
function z4(e, t, r, i = !0) {
  console.error(e);
}
let ul = !1,
  xc = !1;
const en = [];
let sr = 0;
const Ii = [];
let Pi = null,
  Rs = 0;
const Li = [];
let Lr = null,
  Ns = 0;
const jp = Promise.resolve();
let iu = null,
  $c = null;
function Ln(e) {
  const t = iu || jp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function q4(e) {
  let t = sr + 1,
    r = en.length;
  for (; t < r; ) {
    const i = (t + r) >>> 1;
    Hi(en[i]) < e ? (t = i + 1) : (r = i);
  }
  return t;
}
function ou(e) {
  (!en.length || !en.includes(e, ul && e.allowRecurse ? sr + 1 : sr)) &&
    e !== $c &&
    (e.id == null ? en.push(e) : en.splice(q4(e.id), 0, e), Zp());
}
function Zp() {
  !ul && !xc && ((xc = !0), (iu = jp.then(Jp)));
}
function W4(e) {
  const t = en.indexOf(e);
  t > sr && en.splice(t, 1);
}
function Xp(e, t, r, i) {
  me(e)
    ? r.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? i + 1 : i)) && r.push(e),
    Zp();
}
function K4(e) {
  Xp(e, Pi, Ii, Rs);
}
function lu(e) {
  Xp(e, Lr, Li, Ns);
}
function Ol(e, t = null) {
  if (Ii.length) {
    for (
      $c = t, Pi = [...new Set(Ii)], Ii.length = 0, Rs = 0;
      Rs < Pi.length;
      Rs++
    )
      Pi[Rs]();
    (Pi = null), (Rs = 0), ($c = null), Ol(e, t);
  }
}
function fl(e) {
  if ((Ol(), Li.length)) {
    const t = [...new Set(Li)];
    if (((Li.length = 0), Lr)) {
      Lr.push(...t);
      return;
    }
    for (Lr = t, Lr.sort((r, i) => Hi(r) - Hi(i)), Ns = 0; Ns < Lr.length; Ns++)
      Lr[Ns]();
    (Lr = null), (Ns = 0);
  }
}
const Hi = (e) => (e.id == null ? 1 / 0 : e.id);
function Jp(e) {
  (xc = !1), (ul = !0), Ol(e), en.sort((r, i) => Hi(r) - Hi(i));
  const t = Tn;
  try {
    for (sr = 0; sr < en.length; sr++) {
      const r = en[sr];
      r && r.active !== !1 && zn(r, null, 14);
    }
  } finally {
    (sr = 0),
      (en.length = 0),
      fl(),
      (ul = !1),
      (iu = null),
      (en.length || Ii.length || Li.length) && Jp(e);
  }
}
let Vs,
  Zo = [];
function Qp(e, t) {
  var r, i;
  (Vs = e),
    Vs
      ? ((Vs.enabled = !0),
        Zo.forEach(({ event: o, args: a }) => Vs.emit(o, ...a)),
        (Zo = []))
      : typeof window < 'u' &&
          window.HTMLElement &&
          !(
            !(
              (i =
                (r = window.navigator) === null || r === void 0
                  ? void 0
                  : r.userAgent) === null || i === void 0
            ) && i.includes('jsdom')
          )
        ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
            t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
            Qp(a, t);
          }),
          setTimeout(() => {
            Vs || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Zo = []));
          }, 3e3))
        : (Zo = []);
}
function G4(e, t, ...r) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ze;
  let o = r;
  const a = t.startsWith('update:'),
    c = a && t.slice(7);
  if (c && c in i) {
    const v = `${c === 'modelValue' ? 'model' : c}Modifiers`,
      { number: m, trim: y } = i[v] || Ze;
    y && (o = r.map((S) => S.trim())), m && (o = r.map(Nr));
  }
  let f,
    d = i[(f = Ai(t))] || i[(f = Ai(rn(t)))];
  !d && a && (d = i[(f = Ai(Un(t)))]), d && nn(d, e, 6, o);
  const p = i[f + 'Once'];
  if (p) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[f]) return;
    (e.emitted[f] = !0), nn(p, e, 6, o);
  }
}
function e0(e, t, r = !1) {
  const i = t.emitsCache,
    o = i.get(e);
  if (o !== void 0) return o;
  const a = e.emits;
  let c = {},
    f = !1;
  if (!Ae(e)) {
    const d = (p) => {
      const v = e0(p, t, !0);
      v && ((f = !0), lt(c, v));
    };
    !r && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  return !a && !f
    ? (i.set(e, null), null)
    : (me(a) ? a.forEach((d) => (c[d] = null)) : lt(c, a), i.set(e, c), c);
}
function Ml(e, t) {
  return !e || !Gi(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      qe(e, t[0].toLowerCase() + t.slice(1)) || qe(e, Un(t)) || qe(e, t));
}
let Lt = null,
  Bl = null;
function Ui(e) {
  const t = Lt;
  return (Lt = e), (Bl = (e && e.type.__scopeId) || null), t;
}
function mn(e) {
  Bl = e;
}
function yn() {
  Bl = null;
}
const Y4 = (e) => se;
function se(e, t = Lt, r) {
  if (!t || e._n) return e;
  const i = (...o) => {
    i._d && kc(-1);
    const a = Ui(t),
      c = e(...o);
    return Ui(a), i._d && kc(1), c;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function il(e) {
  const {
    type: t,
    vnode: r,
    proxy: i,
    withProxy: o,
    props: a,
    propsOptions: [c],
    slots: f,
    attrs: d,
    emit: p,
    render: v,
    renderCache: m,
    data: y,
    setupState: S,
    ctx: R,
    inheritAttrs: k,
  } = e;
  let O, x;
  const P = Ui(e);
  try {
    if (r.shapeFlag & 4) {
      const F = o || i;
      (O = Qt(v.call(F, F, m, a, S, y, R))), (x = d);
    } else {
      const F = t;
      (O = Qt(
        F.length > 1 ? F(a, { attrs: d, slots: f, emit: p }) : F(a, null),
      )),
        (x = t.props ? d : Z4(d));
    }
  } catch (F) {
    (Mi.length = 0), vs(F, e, 1), (O = W(St));
  }
  let I = O;
  if (x && k !== !1) {
    const F = Object.keys(x),
      { shapeFlag: V } = I;
    F.length && V & 7 && (c && F.some(Gc) && (x = X4(x, c)), (I = Wn(I, x)));
  }
  return (
    r.dirs && ((I = Wn(I)), (I.dirs = I.dirs ? I.dirs.concat(r.dirs) : r.dirs)),
    r.transition && (I.transition = r.transition),
    (O = I),
    Ui(P),
    O
  );
}
function j4(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (kn(i)) {
      if (i.type !== St || i.children === 'v-if') {
        if (t) return;
        t = i;
      }
    } else return;
  }
  return t;
}
const Z4 = (e) => {
    let t;
    for (const r in e)
      (r === 'class' || r === 'style' || Gi(r)) && ((t || (t = {}))[r] = e[r]);
    return t;
  },
  X4 = (e, t) => {
    const r = {};
    for (const i in e) (!Gc(i) || !(i.slice(9) in t)) && (r[i] = e[i]);
    return r;
  };
function J4(e, t, r) {
  const { props: i, children: o, component: a } = e,
    { props: c, children: f, patchFlag: d } = t,
    p = a.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (r && d >= 0) {
    if (d & 1024) return !0;
    if (d & 16) return i ? _h(i, c, p) : !!c;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let m = 0; m < v.length; m++) {
        const y = v[m];
        if (c[y] !== i[y] && !Ml(p, y)) return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable)
      ? !0
      : i === c
        ? !1
        : i
          ? c
            ? _h(i, c, p)
            : !0
          : !!c;
  return !1;
}
function _h(e, t, r) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    if (t[a] !== e[a] && !Ml(r, a)) return !0;
  }
  return !1;
}
function au({ vnode: e, parent: t }, r) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = r), (t = t.parent);
}
const t0 = (e) => e.__isSuspense,
  Q4 = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, r, i, o, a, c, f, d, p) {
      e == null ? tb(t, r, i, o, a, c, f, d, p) : nb(e, t, r, i, o, c, f, d, p);
    },
    hydrate: rb,
    create: cu,
    normalize: sb,
  },
  eb = Q4;
function zi(e, t) {
  const r = e.props && e.props[t];
  Ae(r) && r();
}
function tb(e, t, r, i, o, a, c, f, d) {
  const {
      p,
      o: { createElement: v },
    } = d,
    m = v('div'),
    y = (e.suspense = cu(e, o, i, t, m, r, a, c, f, d));
  p(null, (y.pendingBranch = e.ssContent), m, null, i, y, a, c),
    y.deps > 0
      ? (zi(e, 'onPending'),
        zi(e, 'onFallback'),
        p(null, e.ssFallback, t, r, i, null, a, c),
        qs(y, e.ssFallback))
      : y.resolve();
}
function nb(e, t, r, i, o, a, c, f, { p: d, um: p, o: { createElement: v } }) {
  const m = (t.suspense = e.suspense);
  (m.vnode = t), (t.el = e.el);
  const y = t.ssContent,
    S = t.ssFallback,
    { activeBranch: R, pendingBranch: k, isInFallback: O, isHydrating: x } = m;
  if (k)
    (m.pendingBranch = y),
      Hn(y, k)
        ? (d(k, y, m.hiddenContainer, null, o, m, a, c, f),
          m.deps <= 0
            ? m.resolve()
            : O && (d(R, S, r, i, o, null, a, c, f), qs(m, S)))
        : (m.pendingId++,
          x ? ((m.isHydrating = !1), (m.activeBranch = k)) : p(k, o, m),
          (m.deps = 0),
          (m.effects.length = 0),
          (m.hiddenContainer = v('div')),
          O
            ? (d(null, y, m.hiddenContainer, null, o, m, a, c, f),
              m.deps <= 0
                ? m.resolve()
                : (d(R, S, r, i, o, null, a, c, f), qs(m, S)))
            : R && Hn(y, R)
              ? (d(R, y, r, i, o, m, a, c, f), m.resolve(!0))
              : (d(null, y, m.hiddenContainer, null, o, m, a, c, f),
                m.deps <= 0 && m.resolve()));
  else if (R && Hn(y, R)) d(R, y, r, i, o, m, a, c, f), qs(m, y);
  else if (
    (zi(t, 'onPending'),
    (m.pendingBranch = y),
    m.pendingId++,
    d(null, y, m.hiddenContainer, null, o, m, a, c, f),
    m.deps <= 0)
  )
    m.resolve();
  else {
    const { timeout: P, pendingId: I } = m;
    P > 0
      ? setTimeout(() => {
          m.pendingId === I && m.fallback(S);
        }, P)
      : P === 0 && m.fallback(S);
  }
}
function cu(e, t, r, i, o, a, c, f, d, p, v = !1) {
  const {
      p: m,
      m: y,
      um: S,
      n: R,
      o: { parentNode: k, remove: O },
    } = p,
    x = Nr(e.props && e.props.timeout),
    P = {
      vnode: e,
      parent: t,
      parentComponent: r,
      isSVG: c,
      container: i,
      hiddenContainer: o,
      anchor: a,
      deps: 0,
      pendingId: 0,
      timeout: typeof x == 'number' ? x : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: v,
      isUnmounted: !1,
      effects: [],
      resolve(I = !1) {
        const {
          vnode: F,
          activeBranch: V,
          pendingBranch: Y,
          pendingId: te,
          effects: D,
          parentComponent: ie,
          container: le,
        } = P;
        if (P.isHydrating) P.isHydrating = !1;
        else if (!I) {
          const xe = V && Y.transition && Y.transition.mode === 'out-in';
          xe &&
            (V.transition.afterLeave = () => {
              te === P.pendingId && y(Y, le, _e, 0);
            });
          let { anchor: _e } = P;
          V && ((_e = R(V)), S(V, ie, P, !0)), xe || y(Y, le, _e, 0);
        }
        qs(P, Y), (P.pendingBranch = null), (P.isInFallback = !1);
        let pe = P.parent,
          re = !1;
        for (; pe; ) {
          if (pe.pendingBranch) {
            pe.effects.push(...D), (re = !0);
            break;
          }
          pe = pe.parent;
        }
        re || lu(D), (P.effects = []), zi(F, 'onResolve');
      },
      fallback(I) {
        if (!P.pendingBranch) return;
        const {
          vnode: F,
          activeBranch: V,
          parentComponent: Y,
          container: te,
          isSVG: D,
        } = P;
        zi(F, 'onFallback');
        const ie = R(V),
          le = () => {
            P.isInFallback && (m(null, I, te, ie, Y, null, D, f, d), qs(P, I));
          },
          pe = I.transition && I.transition.mode === 'out-in';
        pe && (V.transition.afterLeave = le),
          (P.isInFallback = !0),
          S(V, Y, null, !0),
          pe || le();
      },
      move(I, F, V) {
        P.activeBranch && y(P.activeBranch, I, F, V), (P.container = I);
      },
      next() {
        return P.activeBranch && R(P.activeBranch);
      },
      registerDep(I, F) {
        const V = !!P.pendingBranch;
        V && P.deps++;
        const Y = I.vnode.el;
        I.asyncDep
          .catch((te) => {
            vs(te, I, 0);
          })
          .then((te) => {
            if (I.isUnmounted || P.isUnmounted || P.pendingId !== I.suspenseId)
              return;
            I.asyncResolved = !0;
            const { vnode: D } = I;
            Ic(I, te, !1), Y && (D.el = Y);
            const ie = !Y && I.subTree.el;
            F(I, D, k(Y || I.subTree.el), Y ? null : R(I.subTree), P, c, d),
              ie && O(ie),
              au(I, D.el),
              V && --P.deps === 0 && P.resolve();
          });
      },
      unmount(I, F) {
        (P.isUnmounted = !0),
          P.activeBranch && S(P.activeBranch, r, I, F),
          P.pendingBranch && S(P.pendingBranch, r, I, F);
      },
    };
  return P;
}
function rb(e, t, r, i, o, a, c, f, d) {
  const p = (t.suspense = cu(
      t,
      i,
      r,
      e.parentNode,
      document.createElement('div'),
      null,
      o,
      a,
      c,
      f,
      !0,
    )),
    v = d(e, (p.pendingBranch = t.ssContent), r, p, a, c);
  return p.deps === 0 && p.resolve(), v;
}
function sb(e) {
  const { shapeFlag: t, children: r } = e,
    i = t & 32;
  (e.ssContent = vh(i ? r.default : r)),
    (e.ssFallback = i ? vh(r.fallback) : W(St));
}
function vh(e) {
  let t;
  if (Ae(e)) {
    const r = ds && e._c;
    r && ((e._d = !1), $()), (e = e()), r && ((e._d = !0), (t = Wt), E0());
  }
  return (
    me(e) && (e = j4(e)),
    (e = Qt(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((r) => r !== e)),
    e
  );
}
function n0(e, t) {
  t && t.pendingBranch
    ? me(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : lu(e);
}
function qs(e, t) {
  e.activeBranch = t;
  const { vnode: r, parentComponent: i } = e,
    o = (r.el = t.el);
  i && i.subTree === r && ((i.vnode.el = o), au(i, o));
}
function qn(e, t) {
  if (_t) {
    let r = _t.provides;
    const i = _t.parent && _t.parent.provides;
    i === r && (r = _t.provides = Object.create(i)), (r[e] = t);
  }
}
function yt(e, t, r = !1) {
  const i = _t || Lt;
  if (i) {
    const o =
      i.parent == null
        ? i.vnode.appContext && i.vnode.appContext.provides
        : i.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return r && Ae(t) ? t.call(i.proxy) : t;
  }
}
function Dr(e, t) {
  return Xi(e, null, t);
}
function uu(e, t) {
  return Xi(e, null, { flush: 'post' });
}
function ib(e, t) {
  return Xi(e, null, { flush: 'sync' });
}
const mh = {};
function Pt(e, t, r) {
  return Xi(e, t, r);
}
function Xi(
  e,
  t,
  { immediate: r, deep: i, flush: o, onTrack: a, onTrigger: c } = Ze,
) {
  const f = _t;
  let d,
    p = !1,
    v = !1;
  if (
    (dt(e)
      ? ((d = () => e.value), (p = cl(e)))
      : ls(e)
        ? ((d = () => e), (i = !0))
        : me(e)
          ? ((v = !0),
            (p = e.some((x) => ls(x) || cl(x))),
            (d = () =>
              e.map((x) => {
                if (dt(x)) return x.value;
                if (ls(x)) return ss(x);
                if (Ae(x)) return zn(x, f, 2);
              })))
          : Ae(e)
            ? t
              ? (d = () => zn(e, f, 2))
              : (d = () => {
                  if (!(f && f.isUnmounted)) return m && m(), nn(e, f, 3, [y]);
                })
            : (d = Tn),
    t && i)
  ) {
    const x = d;
    d = () => ss(x());
  }
  let m,
    y = (x) => {
      m = O.onStop = () => {
        zn(x, f, 4);
      };
    };
  if (Js)
    return (y = Tn), t ? r && nn(t, f, 3, [d(), v ? [] : void 0, y]) : d(), Tn;
  let S = v ? [] : mh;
  const R = () => {
    if (O.active)
      if (t) {
        const x = O.run();
        (i || p || (v ? x.some((P, I) => Gs(P, S[I])) : Gs(x, S))) &&
          (m && m(), nn(t, f, 3, [x, S === mh ? void 0 : S, y]), (S = x));
      } else O.run();
  };
  R.allowRecurse = !!t;
  let k;
  o === 'sync'
    ? (k = R)
    : o === 'post'
      ? (k = () => Ct(R, f && f.suspense))
      : (k = () => K4(R));
  const O = new Zi(d, k);
  return (
    t
      ? r
        ? R()
        : (S = O.run())
      : o === 'post'
        ? Ct(O.run.bind(O), f && f.suspense)
        : O.run(),
    () => {
      O.stop(), f && f.scope && Yc(f.scope.effects, O);
    }
  );
}
function ob(e, t, r) {
  const i = this.proxy,
    o = it(e) ? (e.includes('.') ? r0(i, e) : () => i[e]) : e.bind(i, i);
  let a;
  Ae(t) ? (a = t) : ((a = t.handler), (r = t));
  const c = _t;
  Hr(this);
  const f = Xi(o, a.bind(i), r);
  return c ? Hr(c) : Fr(), f;
}
function r0(e, t) {
  const r = t.split('.');
  return () => {
    let i = e;
    for (let o = 0; o < r.length && i; o++) i = i[r[o]];
    return i;
  };
}
function ss(e, t) {
  if (!at(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), dt(e))) ss(e.value, t);
  else if (me(e)) for (let r = 0; r < e.length; r++) ss(e[r], t);
  else if (ps(e) || Hs(e))
    e.forEach((r) => {
      ss(r, t);
    });
  else if (kp(e)) for (const r in e) ss(e[r], t);
  return e;
}
function fu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ct(() => {
      e.isMounted = !0;
    }),
    ri(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const gn = [Function, Array],
  lb = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: gn,
      onEnter: gn,
      onAfterEnter: gn,
      onEnterCancelled: gn,
      onBeforeLeave: gn,
      onLeave: gn,
      onAfterLeave: gn,
      onLeaveCancelled: gn,
      onBeforeAppear: gn,
      onAppear: gn,
      onAfterAppear: gn,
      onAppearCancelled: gn,
    },
    setup(e, { slots: t }) {
      const r = bn(),
        i = fu();
      let o;
      return () => {
        const a = t.default && Fl(t.default(), !0);
        if (!a || !a.length) return;
        let c = a[0];
        if (a.length > 1) {
          for (const k of a)
            if (k.type !== St) {
              c = k;
              break;
            }
        }
        const f = He(e),
          { mode: d } = f;
        if (i.isLeaving) return ic(c);
        const p = yh(c);
        if (!p) return ic(c);
        const v = js(p, f, i, r);
        fs(p, v);
        const m = r.subTree,
          y = m && yh(m);
        let S = !1;
        const { getTransitionKey: R } = p.type;
        if (R) {
          const k = R();
          o === void 0 ? (o = k) : k !== o && ((o = k), (S = !0));
        }
        if (y && y.type !== St && (!Hn(p, y) || S)) {
          const k = js(y, f, i, r);
          if ((fs(y, k), d === 'out-in'))
            return (
              (i.isLeaving = !0),
              (k.afterLeave = () => {
                (i.isLeaving = !1), r.update();
              }),
              ic(c)
            );
          d === 'in-out' &&
            p.type !== St &&
            (k.delayLeave = (O, x, P) => {
              const I = s0(i, y);
              (I[String(y.key)] = y),
                (O._leaveCb = () => {
                  x(), (O._leaveCb = void 0), delete v.delayedLeave;
                }),
                (v.delayedLeave = P);
            });
        }
        return c;
      };
    },
  },
  du = lb;
function s0(e, t) {
  const { leavingVNodes: r } = e;
  let i = r.get(t.type);
  return i || ((i = Object.create(null)), r.set(t.type, i)), i;
}
function js(e, t, r, i) {
  const {
      appear: o,
      mode: a,
      persisted: c = !1,
      onBeforeEnter: f,
      onEnter: d,
      onAfterEnter: p,
      onEnterCancelled: v,
      onBeforeLeave: m,
      onLeave: y,
      onAfterLeave: S,
      onLeaveCancelled: R,
      onBeforeAppear: k,
      onAppear: O,
      onAfterAppear: x,
      onAppearCancelled: P,
    } = t,
    I = String(e.key),
    F = s0(r, e),
    V = (D, ie) => {
      D && nn(D, i, 9, ie);
    },
    Y = (D, ie) => {
      const le = ie[1];
      V(D, ie),
        me(D) ? D.every((pe) => pe.length <= 1) && le() : D.length <= 1 && le();
    },
    te = {
      mode: a,
      persisted: c,
      beforeEnter(D) {
        let ie = f;
        if (!r.isMounted)
          if (o) ie = k || f;
          else return;
        D._leaveCb && D._leaveCb(!0);
        const le = F[I];
        le && Hn(e, le) && le.el._leaveCb && le.el._leaveCb(), V(ie, [D]);
      },
      enter(D) {
        let ie = d,
          le = p,
          pe = v;
        if (!r.isMounted)
          if (o) (ie = O || d), (le = x || p), (pe = P || v);
          else return;
        let re = !1;
        const xe = (D._enterCb = (_e) => {
          re ||
            ((re = !0),
            _e ? V(pe, [D]) : V(le, [D]),
            te.delayedLeave && te.delayedLeave(),
            (D._enterCb = void 0));
        });
        ie ? Y(ie, [D, xe]) : xe();
      },
      leave(D, ie) {
        const le = String(e.key);
        if ((D._enterCb && D._enterCb(!0), r.isUnmounting)) return ie();
        V(m, [D]);
        let pe = !1;
        const re = (D._leaveCb = (xe) => {
          pe ||
            ((pe = !0),
            ie(),
            xe ? V(R, [D]) : V(S, [D]),
            (D._leaveCb = void 0),
            F[le] === e && delete F[le]);
        });
        (F[le] = e), y ? Y(y, [D, re]) : re();
      },
      clone(D) {
        return js(D, t, r, i);
      },
    };
  return te;
}
function ic(e) {
  if (Ji(e)) return (e = Wn(e)), (e.children = null), e;
}
function yh(e) {
  return Ji(e) ? (e.children ? e.children[0] : void 0) : e;
}
function fs(e, t) {
  e.shapeFlag & 6 && e.component
    ? fs(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Fl(e, t = !1, r) {
  let i = [],
    o = 0;
  for (let a = 0; a < e.length; a++) {
    let c = e[a];
    const f = r == null ? c.key : String(r) + String(c.key != null ? c.key : a);
    c.type === Ee
      ? (c.patchFlag & 128 && o++, (i = i.concat(Fl(c.children, t, f))))
      : (t || c.type !== St) && i.push(f != null ? Wn(c, { key: f }) : c);
  }
  if (o > 1) for (let a = 0; a < i.length; a++) i[a].patchFlag = -2;
  return i;
}
function J(e) {
  return Ae(e) ? { setup: e, name: e.name } : e;
}
const as = (e) => !!e.type.__asyncLoader;
function ab(e) {
  Ae(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: r,
    errorComponent: i,
    delay: o = 200,
    timeout: a,
    suspensible: c = !0,
    onError: f,
  } = e;
  let d = null,
    p,
    v = 0;
  const m = () => (v++, (d = null), y()),
    y = () => {
      let S;
      return (
        d ||
        (S = d =
          t()
            .catch((R) => {
              if (((R = R instanceof Error ? R : new Error(String(R))), f))
                return new Promise((k, O) => {
                  f(
                    R,
                    () => k(m()),
                    () => O(R),
                    v + 1,
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
                  (p = R),
                  R),
            ))
      );
    };
  return J({
    name: 'AsyncComponentWrapper',
    __asyncLoader: y,
    get __asyncResolved() {
      return p;
    },
    setup() {
      const S = _t;
      if (p) return () => oc(p, S);
      const R = (P) => {
        (d = null), vs(P, S, 13, !i);
      };
      if ((c && S.suspense) || Js)
        return y()
          .then((P) => () => oc(P, S))
          .catch((P) => (R(P), () => (i ? W(i, { error: P }) : null)));
      const k = ce(!1),
        O = ce(),
        x = ce(!!o);
      return (
        o &&
          setTimeout(() => {
            x.value = !1;
          }, o),
        a != null &&
          setTimeout(() => {
            if (!k.value && !O.value) {
              const P = new Error(`Async component timed out after ${a}ms.`);
              R(P), (O.value = P);
            }
          }, a),
        y()
          .then(() => {
            (k.value = !0),
              S.parent && Ji(S.parent.vnode) && ou(S.parent.update);
          })
          .catch((P) => {
            R(P), (O.value = P);
          }),
        () => {
          if (k.value && p) return oc(p, S);
          if (O.value && i) return W(i, { error: O.value });
          if (r && !x.value) return W(r);
        }
      );
    },
  });
}
function oc(
  e,
  { vnode: { ref: t, props: r, children: i, shapeFlag: o }, parent: a },
) {
  const c = W(e, r, i);
  return (c.ref = t), c;
}
const Ji = (e) => e.type.__isKeepAlive,
  cb = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const r = bn(),
        i = r.ctx;
      if (!i.renderer)
        return () => {
          const P = t.default && t.default();
          return P && P.length === 1 ? P[0] : P;
        };
      const o = new Map(),
        a = new Set();
      let c = null;
      const f = r.suspense,
        {
          renderer: {
            p: d,
            m: p,
            um: v,
            o: { createElement: m },
          },
        } = i,
        y = m('div');
      (i.activate = (P, I, F, V, Y) => {
        const te = P.component;
        p(P, I, F, 0, f),
          d(te.vnode, P, I, F, te, f, V, P.slotScopeIds, Y),
          Ct(() => {
            (te.isDeactivated = !1), te.a && Us(te.a);
            const D = P.props && P.props.onVnodeMounted;
            D && qt(D, te.parent, P);
          }, f);
      }),
        (i.deactivate = (P) => {
          const I = P.component;
          p(P, y, null, 1, f),
            Ct(() => {
              I.da && Us(I.da);
              const F = P.props && P.props.onVnodeUnmounted;
              F && qt(F, I.parent, P), (I.isDeactivated = !0);
            }, f);
        });
      function S(P) {
        lc(P), v(P, r, f, !0);
      }
      function R(P) {
        o.forEach((I, F) => {
          const V = _l(I.type);
          V && (!P || !P(V)) && k(F);
        });
      }
      function k(P) {
        const I = o.get(P);
        !c || I.type !== c.type ? S(I) : c && lc(c), o.delete(P), a.delete(P);
      }
      Pt(
        () => [e.include, e.exclude],
        ([P, I]) => {
          P && R((F) => Si(P, F)), I && R((F) => !Si(I, F));
        },
        { flush: 'post', deep: !0 },
      );
      let O = null;
      const x = () => {
        O != null && o.set(O, ac(r.subTree));
      };
      return (
        ct(x),
        ni(x),
        ri(() => {
          o.forEach((P) => {
            const { subTree: I, suspense: F } = r,
              V = ac(I);
            if (P.type === V.type) {
              lc(V);
              const Y = V.component.da;
              Y && Ct(Y, F);
              return;
            }
            S(P);
          });
        }),
        () => {
          if (((O = null), !t.default)) return null;
          const P = t.default(),
            I = P[0];
          if (P.length > 1) return (c = null), P;
          if (!kn(I) || (!(I.shapeFlag & 4) && !(I.shapeFlag & 128)))
            return (c = null), I;
          let F = ac(I);
          const V = F.type,
            Y = _l(as(F) ? F.type.__asyncResolved || {} : V),
            { include: te, exclude: D, max: ie } = e;
          if ((te && (!Y || !Si(te, Y))) || (D && Y && Si(D, Y)))
            return (c = F), I;
          const le = F.key == null ? V : F.key,
            pe = o.get(le);
          return (
            F.el && ((F = Wn(F)), I.shapeFlag & 128 && (I.ssContent = F)),
            (O = le),
            pe
              ? ((F.el = pe.el),
                (F.component = pe.component),
                F.transition && fs(F, F.transition),
                (F.shapeFlag |= 512),
                a.delete(le),
                a.add(le))
              : (a.add(le),
                ie && a.size > parseInt(ie, 10) && k(a.values().next().value)),
            (F.shapeFlag |= 256),
            (c = F),
            t0(I.type) ? I : F
          );
        }
      );
    },
  },
  ub = cb;
function Si(e, t) {
  return me(e)
    ? e.some((r) => Si(r, t))
    : it(e)
      ? e.split(',').includes(t)
      : e.test
        ? e.test(t)
        : !1;
}
function i0(e, t) {
  l0(e, 'a', t);
}
function o0(e, t) {
  l0(e, 'da', t);
}
function l0(e, t, r = _t) {
  const i =
    e.__wdc ||
    (e.__wdc = () => {
      let o = r;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((Rl(t, i, r), r)) {
    let o = r.parent;
    for (; o && o.parent; )
      Ji(o.parent.vnode) && fb(i, t, r, o), (o = o.parent);
  }
}
function fb(e, t, r, i) {
  const o = Rl(t, e, i, !0);
  ur(() => {
    Yc(i[t], o);
  }, r);
}
function lc(e) {
  let t = e.shapeFlag;
  t & 256 && (t -= 256), t & 512 && (t -= 512), (e.shapeFlag = t);
}
function ac(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Rl(e, t, r = _t, i = !1) {
  if (r) {
    const o = r[e] || (r[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...c) => {
          if (r.isUnmounted) return;
          gs(), Hr(r);
          const f = nn(t, r, e, c);
          return Fr(), _s(), f;
        });
    return i ? o.unshift(a) : o.push(a), a;
  }
}
const cr =
    (e) =>
    (t, r = _t) =>
      (!Js || e === 'sp') && Rl(e, t, r),
  a0 = cr('bm'),
  ct = cr('m'),
  c0 = cr('bu'),
  ni = cr('u'),
  ri = cr('bum'),
  ur = cr('um'),
  u0 = cr('sp'),
  f0 = cr('rtg'),
  d0 = cr('rtc');
function h0(e, t = _t) {
  Rl('ec', e, t);
}
function Zs(e, t) {
  const r = Lt;
  if (r === null) return e;
  const i = Dl(r) || r.proxy,
    o = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, f, d, p = Ze] = t[a];
    Ae(c) && (c = { mounted: c, updated: c }),
      c.deep && ss(f),
      o.push({
        dir: c,
        instance: i,
        value: f,
        oldValue: void 0,
        arg: d,
        modifiers: p,
      });
  }
  return e;
}
function Dn(e, t, r, i) {
  const o = e.dirs,
    a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const f = o[c];
    a && (f.oldValue = a[c].value);
    let d = f.dir[i];
    d && (gs(), nn(d, r, 8, [e.el, f, e, t]), _s());
  }
}
const hu = 'components',
  db = 'directives';
function fr(e, t) {
  return pu(hu, e, !0, t) || e;
}
const p0 = Symbol();
function Nl(e) {
  return it(e) ? pu(hu, e, !1) || e : e || p0;
}
function hb(e) {
  return pu(db, e);
}
function pu(e, t, r = !0, i = !1) {
  const o = Lt || _t;
  if (o) {
    const a = o.type;
    if (e === hu) {
      const f = _l(a);
      if (f && (f === t || f === rn(t) || f === ji(rn(t)))) return a;
    }
    const c = bh(o[e] || a[e], t) || bh(o.appContext[e], t);
    return !c && i ? a : c;
  }
}
function bh(e, t) {
  return e && (e[t] || e[rn(t)] || e[ji(rn(t))]);
}
function bt(e, t, r, i) {
  let o;
  const a = r && r[i];
  if (me(e) || it(e)) {
    o = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(e[c], c, void 0, a && a[c]);
  } else if (typeof e == 'number') {
    o = new Array(e);
    for (let c = 0; c < e; c++) o[c] = t(c + 1, c, void 0, a && a[c]);
  } else if (at(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (c, f) => t(c, f, void 0, a && a[f]));
    else {
      const c = Object.keys(e);
      o = new Array(c.length);
      for (let f = 0, d = c.length; f < d; f++) {
        const p = c[f];
        o[f] = t(e[p], p, f, a && a[f]);
      }
    }
  else o = [];
  return r && (r[i] = o), o;
}
function pb(e, t) {
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (me(i)) for (let o = 0; o < i.length; o++) e[i[o].name] = i[o].fn;
    else i && (e[i.name] = i.fn);
  }
  return e;
}
function G(e, t, r = {}, i, o) {
  if (Lt.isCE || (Lt.parent && as(Lt.parent) && Lt.parent.isCE))
    return W('slot', t === 'default' ? null : { name: t }, i && i());
  let a = e[t];
  a && a._c && (a._d = !1), $();
  const c = a && g0(a(r)),
    f = we(
      Ee,
      { key: r.key || `_${t}` },
      c || (i ? i() : []),
      c && e._ === 1 ? 64 : -2,
    );
  return (
    !o && f.scopeId && (f.slotScopeIds = [f.scopeId + '-s']),
    a && a._c && (a._d = !0),
    f
  );
}
function g0(e) {
  return e.some((t) =>
    kn(t) ? !(t.type === St || (t.type === Ee && !g0(t.children))) : !0,
  )
    ? e
    : null;
}
function gb(e) {
  const t = {};
  for (const r in e) t[Ai(r)] = e[r];
  return t;
}
const Cc = (e) => (e ? (O0(e) ? Dl(e) || e.proxy : Cc(e.parent)) : null),
  dl = lt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Cc(e.parent),
    $root: (e) => Cc(e.root),
    $emit: (e) => e.emit,
    $options: (e) => v0(e),
    $forceUpdate: (e) => e.f || (e.f = () => ou(e.update)),
    $nextTick: (e) => e.n || (e.n = Ln.bind(e.proxy)),
    $watch: (e) => ob.bind(e),
  }),
  Pc = {
    get({ _: e }, t) {
      const {
        ctx: r,
        setupState: i,
        data: o,
        props: a,
        accessCache: c,
        type: f,
        appContext: d,
      } = e;
      let p;
      if (t[0] !== '$') {
        const S = c[t];
        if (S !== void 0)
          switch (S) {
            case 1:
              return i[t];
            case 2:
              return o[t];
            case 4:
              return r[t];
            case 3:
              return a[t];
          }
        else {
          if (i !== Ze && qe(i, t)) return (c[t] = 1), i[t];
          if (o !== Ze && qe(o, t)) return (c[t] = 2), o[t];
          if ((p = e.propsOptions[0]) && qe(p, t)) return (c[t] = 3), a[t];
          if (r !== Ze && qe(r, t)) return (c[t] = 4), r[t];
          Sc && (c[t] = 0);
        }
      }
      const v = dl[t];
      let m, y;
      if (v) return t === '$attrs' && sn(e, 'get', t), v(e);
      if ((m = f.__cssModules) && (m = m[t])) return m;
      if (r !== Ze && qe(r, t)) return (c[t] = 4), r[t];
      if (((y = d.config.globalProperties), qe(y, t))) return y[t];
    },
    set({ _: e }, t, r) {
      const { data: i, setupState: o, ctx: a } = e;
      return o !== Ze && qe(o, t)
        ? ((o[t] = r), !0)
        : i !== Ze && qe(i, t)
          ? ((i[t] = r), !0)
          : qe(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((a[t] = r), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: r,
          ctx: i,
          appContext: o,
          propsOptions: a,
        },
      },
      c,
    ) {
      let f;
      return (
        !!r[c] ||
        (e !== Ze && qe(e, c)) ||
        (t !== Ze && qe(t, c)) ||
        ((f = a[0]) && qe(f, c)) ||
        qe(i, c) ||
        qe(dl, c) ||
        qe(o.config.globalProperties, c)
      );
    },
    defineProperty(e, t, r) {
      return (
        r.get != null
          ? (e._.accessCache[t] = 0)
          : qe(r, 'value') && this.set(e, t, r.value, null),
        Reflect.defineProperty(e, t, r)
      );
    },
  },
  _b = lt({}, Pc, {
    get(e, t) {
      if (t !== Symbol.unscopables) return Pc.get(e, t, e);
    },
    has(e, t) {
      return t[0] !== '_' && !Dy(t);
    },
  });
let Sc = !0;
function vb(e) {
  const t = v0(e),
    r = e.proxy,
    i = e.ctx;
  (Sc = !1), t.beforeCreate && wh(t.beforeCreate, e, 'bc');
  const {
    data: o,
    computed: a,
    methods: c,
    watch: f,
    provide: d,
    inject: p,
    created: v,
    beforeMount: m,
    mounted: y,
    beforeUpdate: S,
    updated: R,
    activated: k,
    deactivated: O,
    beforeDestroy: x,
    beforeUnmount: P,
    destroyed: I,
    unmounted: F,
    render: V,
    renderTracked: Y,
    renderTriggered: te,
    errorCaptured: D,
    serverPrefetch: ie,
    expose: le,
    inheritAttrs: pe,
    components: re,
    directives: xe,
    filters: _e,
  } = t;
  if ((p && mb(p, i, null, e.appContext.config.unwrapInjectedRef), c))
    for (const Ye in c) {
      const Ue = c[Ye];
      Ae(Ue) && (i[Ye] = Ue.bind(r));
    }
  if (o) {
    const Ye = o.call(r, r);
    at(Ye) && (e.data = lr(Ye));
  }
  if (((Sc = !0), a))
    for (const Ye in a) {
      const Ue = a[Ye],
        wn = Ae(Ue) ? Ue.bind(r, r) : Ae(Ue.get) ? Ue.get.bind(r, r) : Tn,
        hr = !Ae(Ue) && Ae(Ue.set) ? Ue.set.bind(r) : Tn,
        At = ue({ get: wn, set: hr });
      Object.defineProperty(i, Ye, {
        enumerable: !0,
        configurable: !0,
        get: () => At.value,
        set: (pr) => (At.value = pr),
      });
    }
  if (f) for (const Ye in f) _0(f[Ye], i, r, Ye);
  if (d) {
    const Ye = Ae(d) ? d.call(r) : d;
    Reflect.ownKeys(Ye).forEach((Ue) => {
      qn(Ue, Ye[Ue]);
    });
  }
  v && wh(v, e, 'c');
  function Xe(Ye, Ue) {
    me(Ue) ? Ue.forEach((wn) => Ye(wn.bind(r))) : Ue && Ye(Ue.bind(r));
  }
  if (
    (Xe(a0, m),
    Xe(ct, y),
    Xe(c0, S),
    Xe(ni, R),
    Xe(i0, k),
    Xe(o0, O),
    Xe(h0, D),
    Xe(d0, Y),
    Xe(f0, te),
    Xe(ri, P),
    Xe(ur, F),
    Xe(u0, ie),
    me(le))
  )
    if (le.length) {
      const Ye = e.exposed || (e.exposed = {});
      le.forEach((Ue) => {
        Object.defineProperty(Ye, Ue, {
          get: () => r[Ue],
          set: (wn) => (r[Ue] = wn),
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === Tn && (e.render = V),
    pe != null && (e.inheritAttrs = pe),
    re && (e.components = re),
    xe && (e.directives = xe);
}
function mb(e, t, r = Tn, i = !1) {
  me(e) && (e = Ec(e));
  for (const o in e) {
    const a = e[o];
    let c;
    at(a)
      ? 'default' in a
        ? (c = yt(a.from || o, a.default, !0))
        : (c = yt(a.from || o))
      : (c = yt(a)),
      dt(c) && i
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => c.value,
            set: (f) => (c.value = f),
          })
        : (t[o] = c);
  }
}
function wh(e, t, r) {
  nn(me(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function _0(e, t, r, i) {
  const o = i.includes('.') ? r0(r, i) : () => r[i];
  if (it(e)) {
    const a = t[e];
    Ae(a) && Pt(o, a);
  } else if (Ae(e)) Pt(o, e.bind(r));
  else if (at(e))
    if (me(e)) e.forEach((a) => _0(a, t, r, i));
    else {
      const a = Ae(e.handler) ? e.handler.bind(r) : t[e.handler];
      Ae(a) && Pt(o, a, e);
    }
}
function v0(e) {
  const t = e.type,
    { mixins: r, extends: i } = t,
    {
      mixins: o,
      optionsCache: a,
      config: { optionMergeStrategies: c },
    } = e.appContext,
    f = a.get(t);
  let d;
  return (
    f
      ? (d = f)
      : !o.length && !r && !i
        ? (d = t)
        : ((d = {}),
          o.length && o.forEach((p) => hl(d, p, c, !0)),
          hl(d, t, c)),
    a.set(t, d),
    d
  );
}
function hl(e, t, r, i = !1) {
  const { mixins: o, extends: a } = t;
  a && hl(e, a, r, !0), o && o.forEach((c) => hl(e, c, r, !0));
  for (const c in t)
    if (!(i && c === 'expose')) {
      const f = yb[c] || (r && r[c]);
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const yb = {
  data: xh,
  props: ts,
  emits: ts,
  methods: ts,
  computed: ts,
  beforeCreate: Rt,
  created: Rt,
  beforeMount: Rt,
  mounted: Rt,
  beforeUpdate: Rt,
  updated: Rt,
  beforeDestroy: Rt,
  beforeUnmount: Rt,
  destroyed: Rt,
  unmounted: Rt,
  activated: Rt,
  deactivated: Rt,
  errorCaptured: Rt,
  serverPrefetch: Rt,
  components: ts,
  directives: ts,
  watch: wb,
  provide: xh,
  inject: bb,
};
function xh(e, t) {
  return t
    ? e
      ? function () {
          return lt(
            Ae(e) ? e.call(this, this) : e,
            Ae(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function bb(e, t) {
  return ts(Ec(e), Ec(t));
}
function Ec(e) {
  if (me(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ts(e, t) {
  return e ? lt(lt(Object.create(null), e), t) : t;
}
function wb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = lt(Object.create(null), e);
  for (const i in t) r[i] = Rt(e[i], t[i]);
  return r;
}
function xb(e, t, r, i = !1) {
  const o = {},
    a = {};
  al(a, Vl, 1), (e.propsDefaults = Object.create(null)), m0(e, t, o, a);
  for (const c in e.propsOptions[0]) c in o || (o[c] = void 0);
  r ? (e.props = i ? o : eu(o)) : e.type.props ? (e.props = o) : (e.props = a),
    (e.attrs = a);
}
function $b(e, t, r, i) {
  const {
      props: o,
      attrs: a,
      vnode: { patchFlag: c },
    } = e,
    f = He(o),
    [d] = e.propsOptions;
  let p = !1;
  if ((i || c > 0) && !(c & 16)) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let m = 0; m < v.length; m++) {
        let y = v[m];
        if (Ml(e.emitsOptions, y)) continue;
        const S = t[y];
        if (d)
          if (qe(a, y)) S !== a[y] && ((a[y] = S), (p = !0));
          else {
            const R = rn(y);
            o[R] = Tc(d, f, R, S, e, !1);
          }
        else S !== a[y] && ((a[y] = S), (p = !0));
      }
    }
  } else {
    m0(e, t, o, a) && (p = !0);
    let v;
    for (const m in f)
      (!t || (!qe(t, m) && ((v = Un(m)) === m || !qe(t, v)))) &&
        (d
          ? r &&
            (r[m] !== void 0 || r[v] !== void 0) &&
            (o[m] = Tc(d, f, m, void 0, e, !0))
          : delete o[m]);
    if (a !== f)
      for (const m in a) (!t || !qe(t, m)) && (delete a[m], (p = !0));
  }
  p && or(e, 'set', '$attrs');
}
function m0(e, t, r, i) {
  const [o, a] = e.propsOptions;
  let c = !1,
    f;
  if (t)
    for (let d in t) {
      if (Ti(d)) continue;
      const p = t[d];
      let v;
      o && qe(o, (v = rn(d)))
        ? !a || !a.includes(v)
          ? (r[v] = p)
          : ((f || (f = {}))[v] = p)
        : Ml(e.emitsOptions, d) ||
          ((!(d in i) || p !== i[d]) && ((i[d] = p), (c = !0)));
    }
  if (a) {
    const d = He(r),
      p = f || Ze;
    for (let v = 0; v < a.length; v++) {
      const m = a[v];
      r[m] = Tc(o, d, m, p[m], e, !qe(p, m));
    }
  }
  return c;
}
function Tc(e, t, r, i, o, a) {
  const c = e[r];
  if (c != null) {
    const f = qe(c, 'default');
    if (f && i === void 0) {
      const d = c.default;
      if (c.type !== Function && Ae(d)) {
        const { propsDefaults: p } = o;
        r in p ? (i = p[r]) : (Hr(o), (i = p[r] = d.call(null, t)), Fr());
      } else i = d;
    }
    c[0] &&
      (a && !f ? (i = !1) : c[1] && (i === '' || i === Un(r)) && (i = !0));
  }
  return i;
}
function y0(e, t, r = !1) {
  const i = t.propsCache,
    o = i.get(e);
  if (o) return o;
  const a = e.props,
    c = {},
    f = [];
  let d = !1;
  if (!Ae(e)) {
    const v = (m) => {
      d = !0;
      const [y, S] = y0(m, t, !0);
      lt(c, y), S && f.push(...S);
    };
    !r && t.mixins.length && t.mixins.forEach(v),
      e.extends && v(e.extends),
      e.mixins && e.mixins.forEach(v);
  }
  if (!a && !d) return i.set(e, Ds), Ds;
  if (me(a))
    for (let v = 0; v < a.length; v++) {
      const m = rn(a[v]);
      $h(m) && (c[m] = Ze);
    }
  else if (a)
    for (const v in a) {
      const m = rn(v);
      if ($h(m)) {
        const y = a[v],
          S = (c[m] = me(y) || Ae(y) ? { type: y } : y);
        if (S) {
          const R = Sh(Boolean, S.type),
            k = Sh(String, S.type);
          (S[0] = R > -1),
            (S[1] = k < 0 || R < k),
            (R > -1 || qe(S, 'default')) && f.push(m);
        }
      }
    }
  const p = [c, f];
  return i.set(e, p), p;
}
function $h(e) {
  return e[0] !== '$';
}
function Ch(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? 'null' : '';
}
function Ph(e, t) {
  return Ch(e) === Ch(t);
}
function Sh(e, t) {
  return me(t) ? t.findIndex((r) => Ph(r, e)) : Ae(t) && Ph(t, e) ? 0 : -1;
}
const b0 = (e) => e[0] === '_' || e === '$stable',
  gu = (e) => (me(e) ? e.map(Qt) : [Qt(e)]),
  Cb = (e, t, r) => {
    if (t._n) return t;
    const i = se((...o) => gu(t(...o)), r);
    return (i._c = !1), i;
  },
  w0 = (e, t, r) => {
    const i = e._ctx;
    for (const o in e) {
      if (b0(o)) continue;
      const a = e[o];
      if (Ae(a)) t[o] = Cb(o, a, i);
      else if (a != null) {
        const c = gu(a);
        t[o] = () => c;
      }
    }
  },
  x0 = (e, t) => {
    const r = gu(t);
    e.slots.default = () => r;
  },
  Pb = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? ((e.slots = He(t)), al(t, '_', r)) : w0(t, (e.slots = {}));
    } else (e.slots = {}), t && x0(e, t);
    al(e.slots, Vl, 1);
  },
  Sb = (e, t, r) => {
    const { vnode: i, slots: o } = e;
    let a = !0,
      c = Ze;
    if (i.shapeFlag & 32) {
      const f = t._;
      f
        ? r && f === 1
          ? (a = !1)
          : (lt(o, t), !r && f === 1 && delete o._)
        : ((a = !t.$stable), w0(t, o)),
        (c = t);
    } else t && (x0(e, t), (c = { default: 1 }));
    if (a) for (const f in o) !b0(f) && !(f in c) && delete o[f];
  };
function $0() {
  return {
    app: null,
    config: {
      isNativeTag: Yy,
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
let Eb = 0;
function Tb(e, t) {
  return function (i, o = null) {
    Ae(i) || (i = Object.assign({}, i)), o != null && !at(o) && (o = null);
    const a = $0(),
      c = new Set();
    let f = !1;
    const d = (a.app = {
      _uid: Eb++,
      _component: i,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: H0,
      get config() {
        return a.config;
      },
      set config(p) {},
      use(p, ...v) {
        return (
          c.has(p) ||
            (p && Ae(p.install)
              ? (c.add(p), p.install(d, ...v))
              : Ae(p) && (c.add(p), p(d, ...v))),
          d
        );
      },
      mixin(p) {
        return a.mixins.includes(p) || a.mixins.push(p), d;
      },
      component(p, v) {
        return v ? ((a.components[p] = v), d) : a.components[p];
      },
      directive(p, v) {
        return v ? ((a.directives[p] = v), d) : a.directives[p];
      },
      mount(p, v, m) {
        if (!f) {
          const y = W(i, o);
          return (
            (y.appContext = a),
            v && t ? t(y, p) : e(y, p, m),
            (f = !0),
            (d._container = p),
            (p.__vue_app__ = d),
            Dl(y.component) || y.component.proxy
          );
        }
      },
      unmount() {
        f && (e(null, d._container), delete d._container.__vue_app__);
      },
      provide(p, v) {
        return (a.provides[p] = v), d;
      },
    });
    return d;
  };
}
function pl(e, t, r, i, o = !1) {
  if (me(e)) {
    e.forEach((y, S) => pl(y, t && (me(t) ? t[S] : t), r, i, o));
    return;
  }
  if (as(i) && !o) return;
  const a = i.shapeFlag & 4 ? Dl(i.component) || i.component.proxy : i.el,
    c = o ? null : a,
    { i: f, r: d } = e,
    p = t && t.r,
    v = f.refs === Ze ? (f.refs = {}) : f.refs,
    m = f.setupState;
  if (
    (p != null &&
      p !== d &&
      (it(p)
        ? ((v[p] = null), qe(m, p) && (m[p] = null))
        : dt(p) && (p.value = null)),
    Ae(d))
  )
    zn(d, f, 12, [c, v]);
  else {
    const y = it(d),
      S = dt(d);
    if (y || S) {
      const R = () => {
        if (e.f) {
          const k = y ? v[d] : d.value;
          o
            ? me(k) && Yc(k, a)
            : me(k)
              ? k.includes(a) || k.push(a)
              : y
                ? ((v[d] = [a]), qe(m, d) && (m[d] = v[d]))
                : ((d.value = [a]), e.k && (v[e.k] = d.value));
        } else
          y
            ? ((v[d] = c), qe(m, d) && (m[d] = c))
            : dt(d) && ((d.value = c), e.k && (v[e.k] = c));
      };
      c ? ((R.id = -1), Ct(R, r)) : R();
    }
  }
}
let kr = !1;
const Xo = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  Jo = (e) => e.nodeType === 8;
function Ab(e) {
  const {
      mt: t,
      p: r,
      o: {
        patchProp: i,
        createText: o,
        nextSibling: a,
        parentNode: c,
        remove: f,
        insert: d,
        createComment: p,
      },
    } = e,
    v = (x, P) => {
      if (!P.hasChildNodes()) {
        r(null, x, P), fl();
        return;
      }
      (kr = !1),
        m(P.firstChild, x, null, null, null),
        fl(),
        kr && console.error('Hydration completed but contains mismatches.');
    },
    m = (x, P, I, F, V, Y = !1) => {
      const te = Jo(x) && x.data === '[',
        D = () => k(x, P, I, F, V, te),
        { type: ie, ref: le, shapeFlag: pe, patchFlag: re } = P,
        xe = x.nodeType;
      (P.el = x), re === -2 && ((Y = !1), (P.dynamicChildren = null));
      let _e = null;
      switch (ie) {
        case Xs:
          xe !== 3
            ? P.children === ''
              ? (d((P.el = o('')), c(x), x), (_e = x))
              : (_e = D())
            : (x.data !== P.children && ((kr = !0), (x.data = P.children)),
              (_e = a(x)));
          break;
        case St:
          xe !== 8 || te ? (_e = D()) : (_e = a(x));
          break;
        case cs:
          if (xe !== 1) _e = D();
          else {
            _e = x;
            const Tt = !P.children.length;
            for (let Xe = 0; Xe < P.staticCount; Xe++)
              Tt && (P.children += _e.outerHTML),
                Xe === P.staticCount - 1 && (P.anchor = _e),
                (_e = a(_e));
            return _e;
          }
          break;
        case Ee:
          te ? (_e = R(x, P, I, F, V, Y)) : (_e = D());
          break;
        default:
          if (pe & 1)
            xe !== 1 || P.type.toLowerCase() !== x.tagName.toLowerCase()
              ? (_e = D())
              : (_e = y(x, P, I, F, V, Y));
          else if (pe & 6) {
            P.slotScopeIds = V;
            const Tt = c(x);
            if (
              (t(P, Tt, null, I, F, Xo(Tt), Y),
              (_e = te ? O(x) : a(x)),
              _e && Jo(_e) && _e.data === 'teleport end' && (_e = a(_e)),
              as(P))
            ) {
              let Xe;
              te
                ? ((Xe = W(Ee)),
                  (Xe.anchor = _e ? _e.previousSibling : Tt.lastChild))
                : (Xe = x.nodeType === 3 ? Et('') : W('div')),
                (Xe.el = x),
                (P.component.subTree = Xe);
            }
          } else
            pe & 64
              ? xe !== 8
                ? (_e = D())
                : (_e = P.type.hydrate(x, P, I, F, V, Y, e, S))
              : pe & 128 &&
                (_e = P.type.hydrate(x, P, I, F, Xo(c(x)), V, Y, e, m));
      }
      return le != null && pl(le, null, F, P), _e;
    },
    y = (x, P, I, F, V, Y) => {
      Y = Y || !!P.dynamicChildren;
      const { type: te, props: D, patchFlag: ie, shapeFlag: le, dirs: pe } = P,
        re = (te === 'input' && pe) || te === 'option';
      if (re || ie !== -1) {
        if ((pe && Dn(P, null, I, 'created'), D))
          if (re || !Y || ie & 48)
            for (const _e in D)
              ((re && _e.endsWith('value')) || (Gi(_e) && !Ti(_e))) &&
                i(x, _e, null, D[_e], !1, void 0, I);
          else D.onClick && i(x, 'onClick', null, D.onClick, !1, void 0, I);
        let xe;
        if (
          ((xe = D && D.onVnodeBeforeMount) && qt(xe, I, P),
          pe && Dn(P, null, I, 'beforeMount'),
          ((xe = D && D.onVnodeMounted) || pe) &&
            n0(() => {
              xe && qt(xe, I, P), pe && Dn(P, null, I, 'mounted');
            }, F),
          le & 16 && !(D && (D.innerHTML || D.textContent)))
        ) {
          let _e = S(x.firstChild, P, x, I, F, V, Y);
          for (; _e; ) {
            kr = !0;
            const Tt = _e;
            (_e = _e.nextSibling), f(Tt);
          }
        } else
          le & 8 &&
            x.textContent !== P.children &&
            ((kr = !0), (x.textContent = P.children));
      }
      return x.nextSibling;
    },
    S = (x, P, I, F, V, Y, te) => {
      te = te || !!P.dynamicChildren;
      const D = P.children,
        ie = D.length;
      for (let le = 0; le < ie; le++) {
        const pe = te ? D[le] : (D[le] = Qt(D[le]));
        if (x) x = m(x, pe, F, V, Y, te);
        else {
          if (pe.type === Xs && !pe.children) continue;
          (kr = !0), r(null, pe, I, null, F, V, Xo(I), Y);
        }
      }
      return x;
    },
    R = (x, P, I, F, V, Y) => {
      const { slotScopeIds: te } = P;
      te && (V = V ? V.concat(te) : te);
      const D = c(x),
        ie = S(a(x), P, D, I, F, V, Y);
      return ie && Jo(ie) && ie.data === ']'
        ? a((P.anchor = ie))
        : ((kr = !0), d((P.anchor = p(']')), D, ie), ie);
    },
    k = (x, P, I, F, V, Y) => {
      if (((kr = !0), (P.el = null), Y)) {
        const ie = O(x);
        for (;;) {
          const le = a(x);
          if (le && le !== ie) f(le);
          else break;
        }
      }
      const te = a(x),
        D = c(x);
      return f(x), r(null, P, D, te, I, F, Xo(D), V), te;
    },
    O = (x) => {
      let P = 0;
      for (; x; )
        if (
          ((x = a(x)), x && Jo(x) && (x.data === '[' && P++, x.data === ']'))
        ) {
          if (P === 0) return a(x);
          P--;
        }
      return x;
    };
  return [v, m];
}
const Ct = n0;
function C0(e) {
  return S0(e);
}
function P0(e) {
  return S0(e, Ab);
}
function S0(e, t) {
  const r = e4();
  r.__VUE__ = !0;
  const {
      insert: i,
      remove: o,
      patchProp: a,
      createElement: c,
      createText: f,
      createComment: d,
      setText: p,
      setElementText: v,
      parentNode: m,
      nextSibling: y,
      setScopeId: S = Tn,
      cloneNode: R,
      insertStaticContent: k,
    } = e,
    O = (
      w,
      E,
      H,
      Z = null,
      K = null,
      ne = null,
      ae = !1,
      Q = null,
      ee = !!E.dynamicChildren,
    ) => {
      if (w === E) return;
      w && !Hn(w, E) && ((Z = Bn(w)), Mn(w, K, ne, !0), (w = null)),
        E.patchFlag === -2 && ((ee = !1), (E.dynamicChildren = null));
      const { type: X, ref: be, shapeFlag: ge } = E;
      switch (X) {
        case Xs:
          x(w, E, H, Z);
          break;
        case St:
          P(w, E, H, Z);
          break;
        case cs:
          w == null && I(E, H, Z, ae);
          break;
        case Ee:
          xe(w, E, H, Z, K, ne, ae, Q, ee);
          break;
        default:
          ge & 1
            ? Y(w, E, H, Z, K, ne, ae, Q, ee)
            : ge & 6
              ? _e(w, E, H, Z, K, ne, ae, Q, ee)
              : (ge & 64 || ge & 128) &&
                X.process(w, E, H, Z, K, ne, ae, Q, ee, vr);
      }
      be != null && K && pl(be, w && w.ref, ne, E || w, !E);
    },
    x = (w, E, H, Z) => {
      if (w == null) i((E.el = f(E.children)), H, Z);
      else {
        const K = (E.el = w.el);
        E.children !== w.children && p(K, E.children);
      }
    },
    P = (w, E, H, Z) => {
      w == null ? i((E.el = d(E.children || '')), H, Z) : (E.el = w.el);
    },
    I = (w, E, H, Z) => {
      [w.el, w.anchor] = k(w.children, E, H, Z, w.el, w.anchor);
    },
    F = ({ el: w, anchor: E }, H, Z) => {
      let K;
      for (; w && w !== E; ) (K = y(w)), i(w, H, Z), (w = K);
      i(E, H, Z);
    },
    V = ({ el: w, anchor: E }) => {
      let H;
      for (; w && w !== E; ) (H = y(w)), o(w), (w = H);
      o(E);
    },
    Y = (w, E, H, Z, K, ne, ae, Q, ee) => {
      (ae = ae || E.type === 'svg'),
        w == null ? te(E, H, Z, K, ne, ae, Q, ee) : le(w, E, K, ne, ae, Q, ee);
    },
    te = (w, E, H, Z, K, ne, ae, Q) => {
      let ee, X;
      const {
        type: be,
        props: ge,
        shapeFlag: ye,
        transition: Te,
        patchFlag: Be,
        dirs: ze,
      } = w;
      if (w.el && R !== void 0 && Be === -1) ee = w.el = R(w.el);
      else {
        if (
          ((ee = w.el = c(w.type, ne, ge && ge.is, ge)),
          ye & 8
            ? v(ee, w.children)
            : ye & 16 &&
              ie(
                w.children,
                ee,
                null,
                Z,
                K,
                ne && be !== 'foreignObject',
                ae,
                Q,
              ),
          ze && Dn(w, null, Z, 'created'),
          ge)
        ) {
          for (const Je in ge)
            Je !== 'value' &&
              !Ti(Je) &&
              a(ee, Je, null, ge[Je], ne, w.children, Z, K, xn);
          'value' in ge && a(ee, 'value', null, ge.value),
            (X = ge.onVnodeBeforeMount) && qt(X, Z, w);
        }
        D(ee, w, w.scopeId, ae, Z);
      }
      ze && Dn(w, null, Z, 'beforeMount');
      const Ke = (!K || (K && !K.pendingBranch)) && Te && !Te.persisted;
      Ke && Te.beforeEnter(ee),
        i(ee, E, H),
        ((X = ge && ge.onVnodeMounted) || Ke || ze) &&
          Ct(() => {
            X && qt(X, Z, w),
              Ke && Te.enter(ee),
              ze && Dn(w, null, Z, 'mounted');
          }, K);
    },
    D = (w, E, H, Z, K) => {
      if ((H && S(w, H), Z)) for (let ne = 0; ne < Z.length; ne++) S(w, Z[ne]);
      if (K) {
        let ne = K.subTree;
        if (E === ne) {
          const ae = K.vnode;
          D(w, ae, ae.scopeId, ae.slotScopeIds, K.parent);
        }
      }
    },
    ie = (w, E, H, Z, K, ne, ae, Q, ee = 0) => {
      for (let X = ee; X < w.length; X++) {
        const be = (w[X] = Q ? Mr(w[X]) : Qt(w[X]));
        O(null, be, E, H, Z, K, ne, ae, Q);
      }
    },
    le = (w, E, H, Z, K, ne, ae) => {
      const Q = (E.el = w.el);
      let { patchFlag: ee, dynamicChildren: X, dirs: be } = E;
      ee |= w.patchFlag & 16;
      const ge = w.props || Ze,
        ye = E.props || Ze;
      let Te;
      H && Qr(H, !1),
        (Te = ye.onVnodeBeforeUpdate) && qt(Te, H, E, w),
        be && Dn(E, w, H, 'beforeUpdate'),
        H && Qr(H, !0);
      const Be = K && E.type !== 'foreignObject';
      if (
        (X
          ? pe(w.dynamicChildren, X, Q, H, Z, Be, ne)
          : ae || wn(w, E, Q, null, H, Z, Be, ne, !1),
        ee > 0)
      ) {
        if (ee & 16) re(Q, E, ge, ye, H, Z, K);
        else if (
          (ee & 2 && ge.class !== ye.class && a(Q, 'class', null, ye.class, K),
          ee & 4 && a(Q, 'style', ge.style, ye.style, K),
          ee & 8)
        ) {
          const ze = E.dynamicProps;
          for (let Ke = 0; Ke < ze.length; Ke++) {
            const Je = ze[Ke],
              Ot = ge[Je],
              Fn = ye[Je];
            (Fn !== Ot || Je === 'value') &&
              a(Q, Je, Ot, Fn, K, w.children, H, Z, xn);
          }
        }
        ee & 1 && w.children !== E.children && v(Q, E.children);
      } else !ae && X == null && re(Q, E, ge, ye, H, Z, K);
      ((Te = ye.onVnodeUpdated) || be) &&
        Ct(() => {
          Te && qt(Te, H, E, w), be && Dn(E, w, H, 'updated');
        }, Z);
    },
    pe = (w, E, H, Z, K, ne, ae) => {
      for (let Q = 0; Q < E.length; Q++) {
        const ee = w[Q],
          X = E[Q],
          be =
            ee.el && (ee.type === Ee || !Hn(ee, X) || ee.shapeFlag & 70)
              ? m(ee.el)
              : H;
        O(ee, X, be, null, Z, K, ne, ae, !0);
      }
    },
    re = (w, E, H, Z, K, ne, ae) => {
      if (H !== Z) {
        for (const Q in Z) {
          if (Ti(Q)) continue;
          const ee = Z[Q],
            X = H[Q];
          ee !== X &&
            Q !== 'value' &&
            a(w, Q, X, ee, ae, E.children, K, ne, xn);
        }
        if (H !== Ze)
          for (const Q in H)
            !Ti(Q) &&
              !(Q in Z) &&
              a(w, Q, H[Q], null, ae, E.children, K, ne, xn);
        'value' in Z && a(w, 'value', H.value, Z.value);
      }
    },
    xe = (w, E, H, Z, K, ne, ae, Q, ee) => {
      const X = (E.el = w ? w.el : f('')),
        be = (E.anchor = w ? w.anchor : f(''));
      let { patchFlag: ge, dynamicChildren: ye, slotScopeIds: Te } = E;
      Te && (Q = Q ? Q.concat(Te) : Te),
        w == null
          ? (i(X, H, Z), i(be, H, Z), ie(E.children, H, be, K, ne, ae, Q, ee))
          : ge > 0 && ge & 64 && ye && w.dynamicChildren
            ? (pe(w.dynamicChildren, ye, H, K, ne, ae, Q),
              (E.key != null || (K && E === K.subTree)) && _u(w, E, !0))
            : wn(w, E, H, be, K, ne, ae, Q, ee);
    },
    _e = (w, E, H, Z, K, ne, ae, Q, ee) => {
      (E.slotScopeIds = Q),
        w == null
          ? E.shapeFlag & 512
            ? K.ctx.activate(E, H, Z, ae, ee)
            : Tt(E, H, Z, K, ne, ae, ee)
          : Xe(w, E, ee);
    },
    Tt = (w, E, H, Z, K, ne, ae) => {
      const Q = (w.component = L0(w, Z, K));
      if ((Ji(w) && (Q.ctx.renderer = vr), M0(Q), Q.asyncDep)) {
        if ((K && K.registerDep(Q, Ye), !w.el)) {
          const ee = (Q.subTree = W(St));
          P(null, ee, E, H);
        }
        return;
      }
      Ye(Q, w, E, H, K, ne, ae);
    },
    Xe = (w, E, H) => {
      const Z = (E.component = w.component);
      if (J4(w, E, H))
        if (Z.asyncDep && !Z.asyncResolved) {
          Ue(Z, E, H);
          return;
        } else (Z.next = E), W4(Z.update), Z.update();
      else (E.el = w.el), (Z.vnode = E);
    },
    Ye = (w, E, H, Z, K, ne, ae) => {
      const Q = () => {
          if (w.isMounted) {
            let { next: be, bu: ge, u: ye, parent: Te, vnode: Be } = w,
              ze = be,
              Ke;
            Qr(w, !1),
              be ? ((be.el = Be.el), Ue(w, be, ae)) : (be = Be),
              ge && Us(ge),
              (Ke = be.props && be.props.onVnodeBeforeUpdate) &&
                qt(Ke, Te, be, Be),
              Qr(w, !0);
            const Je = il(w),
              Ot = w.subTree;
            (w.subTree = Je),
              O(Ot, Je, m(Ot.el), Bn(Ot), w, K, ne),
              (be.el = Je.el),
              ze === null && au(w, Je.el),
              ye && Ct(ye, K),
              (Ke = be.props && be.props.onVnodeUpdated) &&
                Ct(() => qt(Ke, Te, be, Be), K);
          } else {
            let be;
            const { el: ge, props: ye } = E,
              { bm: Te, m: Be, parent: ze } = w,
              Ke = as(E);
            if (
              (Qr(w, !1),
              Te && Us(Te),
              !Ke && (be = ye && ye.onVnodeBeforeMount) && qt(be, ze, E),
              Qr(w, !0),
              ge && yr)
            ) {
              const Je = () => {
                (w.subTree = il(w)), yr(ge, w.subTree, w, K, null);
              };
              Ke
                ? E.type.__asyncLoader().then(() => !w.isUnmounted && Je())
                : Je();
            } else {
              const Je = (w.subTree = il(w));
              O(null, Je, H, Z, w, K, ne), (E.el = Je.el);
            }
            if ((Be && Ct(Be, K), !Ke && (be = ye && ye.onVnodeMounted))) {
              const Je = E;
              Ct(() => qt(be, ze, Je), K);
            }
            (E.shapeFlag & 256 ||
              (ze && as(ze.vnode) && ze.vnode.shapeFlag & 256)) &&
              w.a &&
              Ct(w.a, K),
              (w.isMounted = !0),
              (E = H = Z = null);
          }
        },
        ee = (w.effect = new Zi(Q, () => ou(X), w.scope)),
        X = (w.update = () => ee.run());
      (X.id = w.uid), Qr(w, !0), X();
    },
    Ue = (w, E, H) => {
      E.component = w;
      const Z = w.vnode.props;
      (w.vnode = E),
        (w.next = null),
        $b(w, E.props, Z, H),
        Sb(w, E.children, H),
        gs(),
        Ol(void 0, w.update),
        _s();
    },
    wn = (w, E, H, Z, K, ne, ae, Q, ee = !1) => {
      const X = w && w.children,
        be = w ? w.shapeFlag : 0,
        ge = E.children,
        { patchFlag: ye, shapeFlag: Te } = E;
      if (ye > 0) {
        if (ye & 128) {
          At(X, ge, H, Z, K, ne, ae, Q, ee);
          return;
        } else if (ye & 256) {
          hr(X, ge, H, Z, K, ne, ae, Q, ee);
          return;
        }
      }
      Te & 8
        ? (be & 16 && xn(X, K, ne), ge !== X && v(H, ge))
        : be & 16
          ? Te & 16
            ? At(X, ge, H, Z, K, ne, ae, Q, ee)
            : xn(X, K, ne, !0)
          : (be & 8 && v(H, ''), Te & 16 && ie(ge, H, Z, K, ne, ae, Q, ee));
    },
    hr = (w, E, H, Z, K, ne, ae, Q, ee) => {
      (w = w || Ds), (E = E || Ds);
      const X = w.length,
        be = E.length,
        ge = Math.min(X, be);
      let ye;
      for (ye = 0; ye < ge; ye++) {
        const Te = (E[ye] = ee ? Mr(E[ye]) : Qt(E[ye]));
        O(w[ye], Te, H, null, K, ne, ae, Q, ee);
      }
      X > be ? xn(w, K, ne, !0, !1, ge) : ie(E, H, Z, K, ne, ae, Q, ee, ge);
    },
    At = (w, E, H, Z, K, ne, ae, Q, ee) => {
      let X = 0;
      const be = E.length;
      let ge = w.length - 1,
        ye = be - 1;
      for (; X <= ge && X <= ye; ) {
        const Te = w[X],
          Be = (E[X] = ee ? Mr(E[X]) : Qt(E[X]));
        if (Hn(Te, Be)) O(Te, Be, H, null, K, ne, ae, Q, ee);
        else break;
        X++;
      }
      for (; X <= ge && X <= ye; ) {
        const Te = w[ge],
          Be = (E[ye] = ee ? Mr(E[ye]) : Qt(E[ye]));
        if (Hn(Te, Be)) O(Te, Be, H, null, K, ne, ae, Q, ee);
        else break;
        ge--, ye--;
      }
      if (X > ge) {
        if (X <= ye) {
          const Te = ye + 1,
            Be = Te < be ? E[Te].el : Z;
          for (; X <= ye; )
            O(null, (E[X] = ee ? Mr(E[X]) : Qt(E[X])), H, Be, K, ne, ae, Q, ee),
              X++;
        }
      } else if (X > ye) for (; X <= ge; ) Mn(w[X], K, ne, !0), X++;
      else {
        const Te = X,
          Be = X,
          ze = new Map();
        for (X = Be; X <= ye; X++) {
          const wt = (E[X] = ee ? Mr(E[X]) : Qt(E[X]));
          wt.key != null && ze.set(wt.key, X);
        }
        let Ke,
          Je = 0;
        const Ot = ye - Be + 1;
        let Fn = !1,
          bs = 0;
        const Kn = new Array(Ot);
        for (X = 0; X < Ot; X++) Kn[X] = 0;
        for (X = Te; X <= ge; X++) {
          const wt = w[X];
          if (Je >= Ot) {
            Mn(wt, K, ne, !0);
            continue;
          }
          let Vt;
          if (wt.key != null) Vt = ze.get(wt.key);
          else
            for (Ke = Be; Ke <= ye; Ke++)
              if (Kn[Ke - Be] === 0 && Hn(wt, E[Ke])) {
                Vt = Ke;
                break;
              }
          Vt === void 0
            ? Mn(wt, K, ne, !0)
            : ((Kn[Vt - Be] = X + 1),
              Vt >= bs ? (bs = Vt) : (Fn = !0),
              O(wt, E[Vt], H, null, K, ne, ae, Q, ee),
              Je++);
        }
        const ws = Fn ? kb(Kn) : Ds;
        for (Ke = ws.length - 1, X = Ot - 1; X >= 0; X--) {
          const wt = Be + X,
            Vt = E[wt],
            to = wt + 1 < be ? E[wt + 1].el : Z;
          Kn[X] === 0
            ? O(null, Vt, H, to, K, ne, ae, Q, ee)
            : Fn && (Ke < 0 || X !== ws[Ke] ? pr(Vt, H, to, 2) : Ke--);
        }
      }
    },
    pr = (w, E, H, Z, K = null) => {
      const { el: ne, type: ae, transition: Q, children: ee, shapeFlag: X } = w;
      if (X & 6) {
        pr(w.component.subTree, E, H, Z);
        return;
      }
      if (X & 128) {
        w.suspense.move(E, H, Z);
        return;
      }
      if (X & 64) {
        ae.move(w, E, H, vr);
        return;
      }
      if (ae === Ee) {
        i(ne, E, H);
        for (let ge = 0; ge < ee.length; ge++) pr(ee[ge], E, H, Z);
        i(w.anchor, E, H);
        return;
      }
      if (ae === cs) {
        F(w, E, H);
        return;
      }
      if (Z !== 2 && X & 1 && Q)
        if (Z === 0) Q.beforeEnter(ne), i(ne, E, H), Ct(() => Q.enter(ne), K);
        else {
          const { leave: ge, delayLeave: ye, afterLeave: Te } = Q,
            Be = () => i(ne, E, H),
            ze = () => {
              ge(ne, () => {
                Be(), Te && Te();
              });
            };
          ye ? ye(ne, Be, ze) : ze();
        }
      else i(ne, E, H);
    },
    Mn = (w, E, H, Z = !1, K = !1) => {
      const {
        type: ne,
        props: ae,
        ref: Q,
        children: ee,
        dynamicChildren: X,
        shapeFlag: be,
        patchFlag: ge,
        dirs: ye,
      } = w;
      if ((Q != null && pl(Q, null, H, w, !0), be & 256)) {
        E.ctx.deactivate(w);
        return;
      }
      const Te = be & 1 && ye,
        Be = !as(w);
      let ze;
      if ((Be && (ze = ae && ae.onVnodeBeforeUnmount) && qt(ze, E, w), be & 6))
        ys(w.component, H, Z);
      else {
        if (be & 128) {
          w.suspense.unmount(H, Z);
          return;
        }
        Te && Dn(w, null, E, 'beforeUnmount'),
          be & 64
            ? w.type.remove(w, E, H, K, vr, Z)
            : X && (ne !== Ee || (ge > 0 && ge & 64))
              ? xn(X, E, H, !1, !0)
              : ((ne === Ee && ge & 384) || (!K && be & 16)) && xn(ee, E, H),
          Z && eo(w);
      }
      ((Be && (ze = ae && ae.onVnodeUnmounted)) || Te) &&
        Ct(() => {
          ze && qt(ze, E, w), Te && Dn(w, null, E, 'unmounted');
        }, H);
    },
    eo = (w) => {
      const { type: E, el: H, anchor: Z, transition: K } = w;
      if (E === Ee) {
        gr(H, Z);
        return;
      }
      if (E === cs) {
        V(w);
        return;
      }
      const ne = () => {
        o(H), K && !K.persisted && K.afterLeave && K.afterLeave();
      };
      if (w.shapeFlag & 1 && K && !K.persisted) {
        const { leave: ae, delayLeave: Q } = K,
          ee = () => ae(H, ne);
        Q ? Q(w.el, ne, ee) : ee();
      } else ne();
    },
    gr = (w, E) => {
      let H;
      for (; w !== E; ) (H = y(w)), o(w), (w = H);
      o(E);
    },
    ys = (w, E, H) => {
      const { bum: Z, scope: K, update: ne, subTree: ae, um: Q } = w;
      Z && Us(Z),
        K.stop(),
        ne && ((ne.active = !1), Mn(ae, w, E, H)),
        Q && Ct(Q, E),
        Ct(() => {
          w.isUnmounted = !0;
        }, E),
        E &&
          E.pendingBranch &&
          !E.isUnmounted &&
          w.asyncDep &&
          !w.asyncResolved &&
          w.suspenseId === E.pendingId &&
          (E.deps--, E.deps === 0 && E.resolve());
    },
    xn = (w, E, H, Z = !1, K = !1, ne = 0) => {
      for (let ae = ne; ae < w.length; ae++) Mn(w[ae], E, H, Z, K);
    },
    Bn = (w) =>
      w.shapeFlag & 6
        ? Bn(w.component.subTree)
        : w.shapeFlag & 128
          ? w.suspense.next()
          : y(w.anchor || w.el),
    _r = (w, E, H) => {
      w == null
        ? E._vnode && Mn(E._vnode, null, null, !0)
        : O(E._vnode || null, w, E, null, null, null, H),
        fl(),
        (E._vnode = w);
    },
    vr = {
      p: O,
      um: Mn,
      m: pr,
      r: eo,
      mt: Tt,
      mc: ie,
      pc: wn,
      pbc: pe,
      n: Bn,
      o: e,
    };
  let mr, yr;
  return (
    t && ([mr, yr] = t(vr)), { render: _r, hydrate: mr, createApp: Tb(_r, mr) }
  );
}
function Qr({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function _u(e, t, r = !1) {
  const i = e.children,
    o = t.children;
  if (me(i) && me(o))
    for (let a = 0; a < i.length; a++) {
      const c = i[a];
      let f = o[a];
      f.shapeFlag & 1 &&
        !f.dynamicChildren &&
        ((f.patchFlag <= 0 || f.patchFlag === 32) &&
          ((f = o[a] = Mr(o[a])), (f.el = c.el)),
        r || _u(c, f));
    }
}
function kb(e) {
  const t = e.slice(),
    r = [0];
  let i, o, a, c, f;
  const d = e.length;
  for (i = 0; i < d; i++) {
    const p = e[i];
    if (p !== 0) {
      if (((o = r[r.length - 1]), e[o] < p)) {
        (t[i] = o), r.push(i);
        continue;
      }
      for (a = 0, c = r.length - 1; a < c; )
        (f = (a + c) >> 1), e[r[f]] < p ? (a = f + 1) : (c = f);
      p < e[r[a]] && (a > 0 && (t[i] = r[a - 1]), (r[a] = i));
    }
  }
  for (a = r.length, c = r[a - 1]; a-- > 0; ) (r[a] = c), (c = t[c]);
  return r;
}
const Ib = (e) => e.__isTeleport,
  Oi = (e) => e && (e.disabled || e.disabled === ''),
  Eh = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  Ac = (e, t) => {
    const r = e && e.to;
    return it(r) ? (t ? t(r) : null) : r;
  },
  Lb = {
    __isTeleport: !0,
    process(e, t, r, i, o, a, c, f, d, p) {
      const {
          mc: v,
          pc: m,
          pbc: y,
          o: { insert: S, querySelector: R, createText: k, createComment: O },
        } = p,
        x = Oi(t.props);
      let { shapeFlag: P, children: I, dynamicChildren: F } = t;
      if (e == null) {
        const V = (t.el = k('')),
          Y = (t.anchor = k(''));
        S(V, r, i), S(Y, r, i);
        const te = (t.target = Ac(t.props, R)),
          D = (t.targetAnchor = k(''));
        te && (S(D, te), (c = c || Eh(te)));
        const ie = (le, pe) => {
          P & 16 && v(I, le, pe, o, a, c, f, d);
        };
        x ? ie(r, Y) : te && ie(te, D);
      } else {
        t.el = e.el;
        const V = (t.anchor = e.anchor),
          Y = (t.target = e.target),
          te = (t.targetAnchor = e.targetAnchor),
          D = Oi(e.props),
          ie = D ? r : Y,
          le = D ? V : te;
        if (
          ((c = c || Eh(Y)),
          F
            ? (y(e.dynamicChildren, F, ie, o, a, c, f), _u(e, t, !0))
            : d || m(e, t, ie, le, o, a, c, f, !1),
          x)
        )
          D || Qo(t, r, V, p, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const pe = (t.target = Ac(t.props, R));
          pe && Qo(t, pe, null, p, 0);
        } else D && Qo(t, Y, te, p, 1);
      }
    },
    remove(e, t, r, i, { um: o, o: { remove: a } }, c) {
      const {
        shapeFlag: f,
        children: d,
        anchor: p,
        targetAnchor: v,
        target: m,
        props: y,
      } = e;
      if ((m && a(v), (c || !Oi(y)) && (a(p), f & 16)))
        for (let S = 0; S < d.length; S++) {
          const R = d[S];
          o(R, t, r, !0, !!R.dynamicChildren);
        }
    },
    move: Qo,
    hydrate: Ob,
  };
function Qo(e, t, r, { o: { insert: i }, m: o }, a = 2) {
  a === 0 && i(e.targetAnchor, t, r);
  const { el: c, anchor: f, shapeFlag: d, children: p, props: v } = e,
    m = a === 2;
  if ((m && i(c, t, r), (!m || Oi(v)) && d & 16))
    for (let y = 0; y < p.length; y++) o(p[y], t, r, 2);
  m && i(f, t, r);
}
function Ob(
  e,
  t,
  r,
  i,
  o,
  a,
  { o: { nextSibling: c, parentNode: f, querySelector: d } },
  p,
) {
  const v = (t.target = Ac(t.props, d));
  if (v) {
    const m = v._lpa || v.firstChild;
    if (t.shapeFlag & 16)
      if (Oi(t.props))
        (t.anchor = p(c(e), t, f(e), r, i, o, a)), (t.targetAnchor = m);
      else {
        t.anchor = c(e);
        let y = m;
        for (; y; )
          if (
            ((y = c(y)), y && y.nodeType === 8 && y.data === 'teleport anchor')
          ) {
            (t.targetAnchor = y),
              (v._lpa = t.targetAnchor && c(t.targetAnchor));
            break;
          }
        p(m, t, v, r, i, o, a);
      }
  }
  return t.anchor && c(t.anchor);
}
const Mb = Lb,
  Ee = Symbol(void 0),
  Xs = Symbol(void 0),
  St = Symbol(void 0),
  cs = Symbol(void 0),
  Mi = [];
let Wt = null;
function $(e = !1) {
  Mi.push((Wt = e ? null : []));
}
function E0() {
  Mi.pop(), (Wt = Mi[Mi.length - 1] || null);
}
let ds = 1;
function kc(e) {
  ds += e;
}
function T0(e) {
  return (
    (e.dynamicChildren = ds > 0 ? Wt || Ds : null),
    E0(),
    ds > 0 && Wt && Wt.push(e),
    e
  );
}
function M(e, t, r, i, o, a) {
  return T0(B(e, t, r, i, o, a, !0));
}
function we(e, t, r, i, o) {
  return T0(W(e, t, r, i, o, !0));
}
function kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Hn(e, t) {
  return e.type === t.type && e.key === t.key;
}
function Bb(e) {}
const Vl = '__vInternal',
  A0 = ({ key: e }) => e ?? null,
  ol = ({ ref: e, ref_key: t, ref_for: r }) =>
    e != null
      ? it(e) || dt(e) || Ae(e)
        ? { i: Lt, r: e, k: t, f: !!r }
        : e
      : null;
function B(
  e,
  t = null,
  r = null,
  i = 0,
  o = null,
  a = e === Ee ? 0 : 1,
  c = !1,
  f = !1,
) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && A0(t),
    ref: t && ol(t),
    scopeId: Bl,
    slotScopeIds: null,
    children: r,
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
    patchFlag: i,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    f
      ? (vu(d, r), a & 128 && e.normalize(d))
      : r && (d.shapeFlag |= it(r) ? 8 : 16),
    ds > 0 &&
      !c &&
      Wt &&
      (d.patchFlag > 0 || a & 6) &&
      d.patchFlag !== 32 &&
      Wt.push(d),
    d
  );
}
const W = Fb;
function Fb(e, t = null, r = null, i = 0, o = null, a = !1) {
  if (((!e || e === p0) && (e = St), kn(e))) {
    const f = Wn(e, t, !0);
    return (
      r && vu(f, r),
      ds > 0 &&
        !a &&
        Wt &&
        (f.shapeFlag & 6 ? (Wt[Wt.indexOf(e)] = f) : Wt.push(f)),
      (f.patchFlag |= -2),
      f
    );
  }
  if ((Wb(e) && (e = e.__vccOpts), t)) {
    t = k0(t);
    let { class: f, style: d } = t;
    f && !it(f) && (t.class = Ce(f)),
      at(d) && (tu(d) && !me(d) && (d = lt({}, d)), (t.style = ht(d)));
  }
  const c = it(e) ? 1 : t0(e) ? 128 : Ib(e) ? 64 : at(e) ? 4 : Ae(e) ? 2 : 0;
  return B(e, t, r, i, o, c, a, !0);
}
function k0(e) {
  return e ? (tu(e) || Vl in e ? lt({}, e) : e) : null;
}
function Wn(e, t, r = !1) {
  const { props: i, ref: o, patchFlag: a, children: c } = e,
    f = t ? _n(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && A0(f),
    ref:
      t && t.ref
        ? r && o
          ? me(o)
            ? o.concat(ol(t))
            : [o, ol(t)]
          : ol(t)
        : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ee ? (a === -1 ? 16 : a | 16) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Wn(e.ssContent),
    ssFallback: e.ssFallback && Wn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Et(e = ' ', t = 0) {
  return W(Xs, null, e, t);
}
function I0(e, t) {
  const r = W(cs, null, e);
  return (r.staticCount = t), r;
}
function de(e = '', t = !1) {
  return t ? ($(), we(St, null, e)) : W(St, null, e);
}
function Qt(e) {
  return e == null || typeof e == 'boolean'
    ? W(St)
    : me(e)
      ? W(Ee, null, e.slice())
      : typeof e == 'object'
        ? Mr(e)
        : W(Xs, null, String(e));
}
function Mr(e) {
  return e.el === null || e.memo ? e : Wn(e);
}
function vu(e, t) {
  let r = 0;
  const { shapeFlag: i } = e;
  if (t == null) t = null;
  else if (me(t)) r = 16;
  else if (typeof t == 'object')
    if (i & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), vu(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !(Vl in t)
        ? (t._ctx = Lt)
        : o === 3 &&
          Lt &&
          (Lt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Ae(t)
      ? ((t = { default: t, _ctx: Lt }), (r = 32))
      : ((t = String(t)), i & 64 ? ((r = 16), (t = [Et(t)])) : (r = 8));
  (e.children = t), (e.shapeFlag |= r);
}
function _n(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (const o in i)
      if (o === 'class')
        t.class !== i.class && (t.class = Ce([t.class, i.class]));
      else if (o === 'style') t.style = ht([t.style, i.style]);
      else if (Gi(o)) {
        const a = t[o],
          c = i[o];
        c &&
          a !== c &&
          !(me(a) && a.includes(c)) &&
          (t[o] = a ? [].concat(a, c) : c);
      } else o !== '' && (t[o] = i[o]);
  }
  return t;
}
function qt(e, t, r, i = null) {
  nn(e, t, 7, [r, i]);
}
const Rb = $0();
let Nb = 0;
function L0(e, t, r) {
  const i = e.type,
    o = (t ? t.appContext : e.appContext) || Rb,
    a = {
      uid: Nb++,
      vnode: e,
      type: i,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Xc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: y0(i, o),
      emitsOptions: e0(i, o),
      emit: null,
      emitted: null,
      propsDefaults: Ze,
      inheritAttrs: i.inheritAttrs,
      ctx: Ze,
      data: Ze,
      props: Ze,
      attrs: Ze,
      slots: Ze,
      refs: Ze,
      setupState: Ze,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
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
    (a.emit = G4.bind(null, a)),
    e.ce && e.ce(a),
    a
  );
}
let _t = null;
const bn = () => _t || Lt,
  Hr = (e) => {
    (_t = e), e.scope.on();
  },
  Fr = () => {
    _t && _t.scope.off(), (_t = null);
  };
function O0(e) {
  return e.vnode.shapeFlag & 4;
}
let Js = !1;
function M0(e, t = !1) {
  Js = t;
  const { props: r, children: i } = e.vnode,
    o = O0(e);
  xb(e, r, o, t), Pb(e, i);
  const a = o ? Vb(e, t) : void 0;
  return (Js = !1), a;
}
function Vb(e, t) {
  const r = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = zs(new Proxy(e.ctx, Pc)));
  const { setup: i } = r;
  if (i) {
    const o = (e.setupContext = i.length > 1 ? F0(e) : null);
    Hr(e), gs();
    const a = zn(i, e, 0, [e.props, o]);
    if ((_s(), Fr(), jc(a))) {
      if ((a.then(Fr, Fr), t))
        return a
          .then((c) => {
            Ic(e, c, t);
          })
          .catch((c) => {
            vs(c, e, 0);
          });
      e.asyncDep = a;
    } else Ic(e, a, t);
  } else B0(e, t);
}
function Ic(e, t, r) {
  Ae(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : at(t) && (e.setupState = su(t)),
    B0(e, r);
}
let gl, Lc;
function Db(e) {
  (gl = e),
    (Lc = (t) => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, _b));
    });
}
const Hb = () => !gl;
function B0(e, t, r) {
  const i = e.type;
  if (!e.render) {
    if (!t && gl && !i.render) {
      const o = i.template;
      if (o) {
        const { isCustomElement: a, compilerOptions: c } = e.appContext.config,
          { delimiters: f, compilerOptions: d } = i,
          p = lt(lt({ isCustomElement: a, delimiters: f }, c), d);
        i.render = gl(o, p);
      }
    }
    (e.render = i.render || Tn), Lc && Lc(e);
  }
  Hr(e), gs(), vb(e), _s(), Fr();
}
function Ub(e) {
  return new Proxy(e.attrs, {
    get(t, r) {
      return sn(e, 'get', '$attrs'), t[r];
    },
  });
}
function F0(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  let r;
  return {
    get attrs() {
      return r || (r = Ub(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Dl(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(su(zs(e.exposed)), {
        get(t, r) {
          if (r in t) return t[r];
          if (r in dl) return dl[r](e);
        },
      }))
    );
}
const zb = /(?:^|[-_])(\w)/g,
  qb = (e) => e.replace(zb, (t) => t.toUpperCase()).replace(/[-_]/g, '');
function _l(e) {
  return (Ae(e) && e.displayName) || e.name;
}
function R0(e, t, r = !1) {
  let i = _l(t);
  if (!i && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (i = o[1]);
  }
  if (!i && e && e.parent) {
    const o = (a) => {
      for (const c in a) if (a[c] === t) return c;
    };
    i =
      o(e.components || e.parent.type.components) || o(e.appContext.components);
  }
  return i ? qb(i) : r ? 'App' : 'Anonymous';
}
function Wb(e) {
  return Ae(e) && '__vccOpts' in e;
}
const ue = (e, t) => N4(e, t, Js);
function Kb() {
  return null;
}
function Gb() {
  return null;
}
function Yb(e) {}
function jb(e, t) {
  return null;
}
function mu() {
  return N0().slots;
}
function Zb() {
  return N0().attrs;
}
function N0() {
  const e = bn();
  return e.setupContext || (e.setupContext = F0(e));
}
function Xb(e, t) {
  const r = me(e) ? e.reduce((i, o) => ((i[o] = {}), i), {}) : e;
  for (const i in t) {
    const o = r[i];
    o
      ? me(o) || Ae(o)
        ? (r[i] = { type: o, default: t[i] })
        : (o.default = t[i])
      : o === null && (r[i] = { default: t[i] });
  }
  return r;
}
function Jb(e, t) {
  const r = {};
  for (const i in e)
    t.includes(i) ||
      Object.defineProperty(r, i, { enumerable: !0, get: () => e[i] });
  return r;
}
function Qb(e) {
  const t = bn();
  let r = e();
  return (
    Fr(),
    jc(r) &&
      (r = r.catch((i) => {
        throw (Hr(t), i);
      })),
    [r, () => Hr(t)]
  );
}
function In(e, t, r) {
  const i = arguments.length;
  return i === 2
    ? at(t) && !me(t)
      ? kn(t)
        ? W(e, null, [t])
        : W(e, t)
      : W(e, null, t)
    : (i > 3
        ? (r = Array.prototype.slice.call(arguments, 2))
        : i === 3 && kn(r) && (r = [r]),
      W(e, t, r));
}
const V0 = Symbol(''),
  e8 = () => {
    {
      const e = yt(V0);
      return (
        e ||
          Gp(
            'Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.',
          ),
        e
      );
    }
  };
function t8() {}
function n8(e, t, r, i) {
  const o = r[i];
  if (o && D0(o, e)) return o;
  const a = t();
  return (a.memo = e.slice()), (r[i] = a);
}
function D0(e, t) {
  const r = e.memo;
  if (r.length != t.length) return !1;
  for (let i = 0; i < r.length; i++) if (Gs(r[i], t[i])) return !1;
  return ds > 0 && Wt && Wt.push(e), !0;
}
const H0 = '3.2.36',
  r8 = {
    createComponentInstance: L0,
    setupComponent: M0,
    renderComponentRoot: il,
    setCurrentRenderingInstance: Ui,
    isVNode: kn,
    normalizeVNode: Qt,
  },
  s8 = r8,
  i8 = null,
  o8 = null,
  l8 = 'http://www.w3.org/2000/svg',
  ns = typeof document < 'u' ? document : null,
  Th = ns && ns.createElement('template'),
  a8 = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, r, i) => {
      const o = t
        ? ns.createElementNS(l8, e)
        : ns.createElement(e, r ? { is: r } : void 0);
      return (
        e === 'select' &&
          i &&
          i.multiple != null &&
          o.setAttribute('multiple', i.multiple),
        o
      );
    },
    createText: (e) => ns.createTextNode(e),
    createComment: (e) => ns.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ns.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return '_value' in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, r, i, o, a) {
      const c = r ? r.previousSibling : t.lastChild;
      if (o && (o === a || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), r),
            !(o === a || !(o = o.nextSibling));

        );
      else {
        Th.innerHTML = i ? `<svg>${e}</svg>` : e;
        const f = Th.content;
        if (i) {
          const d = f.firstChild;
          for (; d.firstChild; ) f.appendChild(d.firstChild);
          f.removeChild(d);
        }
        t.insertBefore(f, r);
      }
      return [
        c ? c.nextSibling : t.firstChild,
        r ? r.previousSibling : t.lastChild,
      ];
    },
  };
function c8(e, t, r) {
  const i = e._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : r
        ? e.setAttribute('class', t)
        : (e.className = t);
}
function u8(e, t, r) {
  const i = e.style,
    o = it(r);
  if (r && !o) {
    for (const a in r) Oc(i, a, r[a]);
    if (t && !it(t)) for (const a in t) r[a] == null && Oc(i, a, '');
  } else {
    const a = i.display;
    o ? t !== r && (i.cssText = r) : t && e.removeAttribute('style'),
      '_vod' in e && (i.display = a);
  }
}
const Ah = /\s*!important$/;
function Oc(e, t, r) {
  if (me(r)) r.forEach((i) => Oc(e, t, i));
  else if ((r == null && (r = ''), t.startsWith('--'))) e.setProperty(t, r);
  else {
    const i = f8(e, t);
    Ah.test(r)
      ? e.setProperty(Un(i), r.replace(Ah, ''), 'important')
      : (e[i] = r);
  }
}
const kh = ['Webkit', 'Moz', 'ms'],
  cc = {};
function f8(e, t) {
  const r = cc[t];
  if (r) return r;
  let i = rn(t);
  if (i !== 'filter' && i in e) return (cc[t] = i);
  i = ji(i);
  for (let o = 0; o < kh.length; o++) {
    const a = kh[o] + i;
    if (a in e) return (cc[t] = a);
  }
  return t;
}
const Ih = 'http://www.w3.org/1999/xlink';
function d8(e, t, r, i, o) {
  if (i && t.startsWith('xlink:'))
    r == null
      ? e.removeAttributeNS(Ih, t.slice(6, t.length))
      : e.setAttributeNS(Ih, t, r);
  else {
    const a = Uy(t);
    r == null || (a && !Ep(r))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? '' : r);
  }
}
function h8(e, t, r, i, o, a, c) {
  if (t === 'innerHTML' || t === 'textContent') {
    i && c(i, o, a), (e[t] = r ?? '');
    return;
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = r;
    const d = r ?? '';
    (e.value !== d || e.tagName === 'OPTION') && (e.value = d),
      r == null && e.removeAttribute(t);
    return;
  }
  let f = !1;
  if (r === '' || r == null) {
    const d = typeof e[t];
    d === 'boolean'
      ? (r = Ep(r))
      : r == null && d === 'string'
        ? ((r = ''), (f = !0))
        : d === 'number' && ((r = 0), (f = !0));
  }
  try {
    e[t] = r;
  } catch {}
  f && e.removeAttribute(t);
}
const [U0, p8] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window < 'u') {
    Date.now() > document.createEvent('Event').timeStamp &&
      (e = performance.now.bind(performance));
    const r = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(r && Number(r[1]) <= 53);
  }
  return [e, t];
})();
let Mc = 0;
const g8 = Promise.resolve(),
  _8 = () => {
    Mc = 0;
  },
  v8 = () => Mc || (g8.then(_8), (Mc = U0()));
function ir(e, t, r, i) {
  e.addEventListener(t, r, i);
}
function m8(e, t, r, i) {
  e.removeEventListener(t, r, i);
}
function y8(e, t, r, i, o = null) {
  const a = e._vei || (e._vei = {}),
    c = a[t];
  if (i && c) c.value = i;
  else {
    const [f, d] = b8(t);
    if (i) {
      const p = (a[t] = w8(i, o));
      ir(e, f, p, d);
    } else c && (m8(e, f, c, d), (a[t] = void 0));
  }
}
const Lh = /(?:Once|Passive|Capture)$/;
function b8(e) {
  let t;
  if (Lh.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Lh)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [Un(e.slice(2)), t];
}
function w8(e, t) {
  const r = (i) => {
    const o = i.timeStamp || U0();
    (p8 || o >= r.attached - 1) && nn(x8(i, r.value), t, 5, [i]);
  };
  return (r.value = e), (r.attached = v8()), r;
}
function x8(e, t) {
  if (me(t)) {
    const r = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        r.call(e), (e._stopped = !0);
      }),
      t.map((i) => (o) => !o._stopped && i && i(o))
    );
  } else return t;
}
const Oh = /^on[a-z]/,
  $8 = (e, t, r, i, o = !1, a, c, f, d) => {
    t === 'class'
      ? c8(e, i, o)
      : t === 'style'
        ? u8(e, r, i)
        : Gi(t)
          ? Gc(t) || y8(e, t, r, i, c)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : C8(e, t, i, o)
              )
            ? h8(e, t, i, a, c, f, d)
            : (t === 'true-value'
                ? (e._trueValue = i)
                : t === 'false-value' && (e._falseValue = i),
              d8(e, t, i, o));
  };
function C8(e, t, r, i) {
  return i
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && Oh.test(t) && Ae(r))
      )
    : t === 'spellcheck' ||
        t === 'draggable' ||
        t === 'translate' ||
        t === 'form' ||
        (t === 'list' && e.tagName === 'INPUT') ||
        (t === 'type' && e.tagName === 'TEXTAREA') ||
        (Oh.test(t) && it(r))
      ? !1
      : t in e;
}
function z0(e, t) {
  const r = J(e);
  class i extends Hl {
    constructor(a) {
      super(r, a, t);
    }
  }
  return (i.def = r), i;
}
const P8 = (e) => z0(e, i1),
  S8 = typeof HTMLElement < 'u' ? HTMLElement : class {};
class Hl extends S8 {
  constructor(t, r = {}, i) {
    super(),
      (this._def = t),
      (this._props = r),
      (this._instance = null),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      this.shadowRoot && i
        ? i(this._createVNode(), this.shadowRoot)
        : this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    (this._connected = !0), this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    (this._connected = !1),
      Ln(() => {
        this._connected || (zr(null, this.shadowRoot), (this._instance = null));
      });
  }
  _resolveDef() {
    if (this._resolved) return;
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    new MutationObserver((i) => {
      for (const o of i) this._setAttr(o.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (i) => {
        const { props: o, styles: a } = i,
          c = !me(o),
          f = o ? (c ? Object.keys(o) : o) : [];
        let d;
        if (c)
          for (const p in this._props) {
            const v = o[p];
            (v === Number || (v && v.type === Number)) &&
              ((this._props[p] = Nr(this._props[p])),
              ((d || (d = Object.create(null)))[p] = !0));
          }
        this._numberProps = d;
        for (const p of Object.keys(this))
          p[0] !== '_' && this._setProp(p, this[p], !0, !1);
        for (const p of f.map(rn))
          Object.defineProperty(this, p, {
            get() {
              return this._getProp(p);
            },
            set(v) {
              this._setProp(p, v);
            },
          });
        this._applyStyles(a), this._update();
      },
      r = this._def.__asyncLoader;
    r ? r().then(t) : t(this._def);
  }
  _setAttr(t) {
    let r = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (r = Nr(r)),
      this._setProp(rn(t), r, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, r, i = !0, o = !0) {
    r !== this._props[t] &&
      ((this._props[t] = r),
      o && this._instance && this._update(),
      i &&
        (r === !0
          ? this.setAttribute(Un(t), '')
          : typeof r == 'string' || typeof r == 'number'
            ? this.setAttribute(Un(t), r + '')
            : r || this.removeAttribute(Un(t))));
  }
  _update() {
    zr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = W(this._def, lt({}, this._props));
    return (
      this._instance ||
        (t.ce = (r) => {
          (this._instance = r),
            (r.isCE = !0),
            (r.emit = (o, ...a) => {
              this.dispatchEvent(new CustomEvent(o, { detail: a }));
            });
          let i = this;
          for (; (i = i && (i.parentNode || i.host)); )
            if (i instanceof Hl) {
              r.parent = i._instance;
              break;
            }
        }),
      t
    );
  }
  _applyStyles(t) {
    t &&
      t.forEach((r) => {
        const i = document.createElement('style');
        (i.textContent = r), this.shadowRoot.appendChild(i);
      });
  }
}
function E8(e = '$style') {
  {
    const t = bn();
    if (!t) return Ze;
    const r = t.type.__cssModules;
    if (!r) return Ze;
    const i = r[e];
    return i || Ze;
  }
}
function q0(e) {
  const t = bn();
  if (!t) return;
  const r = () => Bc(t.subTree, e(t.proxy));
  uu(r),
    ct(() => {
      const i = new MutationObserver(r);
      i.observe(t.subTree.el.parentNode, { childList: !0 }),
        ur(() => i.disconnect());
    });
}
function Bc(e, t) {
  if (e.shapeFlag & 128) {
    const r = e.suspense;
    (e = r.activeBranch),
      r.pendingBranch &&
        !r.isHydrating &&
        r.effects.push(() => {
          Bc(r.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Mh(e.el, t);
  else if (e.type === Ee) e.children.forEach((r) => Bc(r, t));
  else if (e.type === cs) {
    let { el: r, anchor: i } = e;
    for (; r && (Mh(r, t), r !== i); ) r = r.nextSibling;
  }
}
function Mh(e, t) {
  if (e.nodeType === 1) {
    const r = e.style;
    for (const i in t) r.setProperty(`--${i}`, t[i]);
  }
}
const Ir = 'transition',
  wi = 'animation',
  An = (e, { slots: t }) => In(du, K0(e), t);
An.displayName = 'Transition';
const W0 = {
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
  T8 = (An.props = lt({}, du.props, W0)),
  es = (e, t = []) => {
    me(e) ? e.forEach((r) => r(...t)) : e && e(...t);
  },
  Bh = (e) => (e ? (me(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function K0(e) {
  const t = {};
  for (const re in e) re in W0 || (t[re] = e[re]);
  if (e.css === !1) return t;
  const {
      name: r = 'v',
      type: i,
      duration: o,
      enterFromClass: a = `${r}-enter-from`,
      enterActiveClass: c = `${r}-enter-active`,
      enterToClass: f = `${r}-enter-to`,
      appearFromClass: d = a,
      appearActiveClass: p = c,
      appearToClass: v = f,
      leaveFromClass: m = `${r}-leave-from`,
      leaveActiveClass: y = `${r}-leave-active`,
      leaveToClass: S = `${r}-leave-to`,
    } = e,
    R = A8(o),
    k = R && R[0],
    O = R && R[1],
    {
      onBeforeEnter: x,
      onEnter: P,
      onEnterCancelled: I,
      onLeave: F,
      onLeaveCancelled: V,
      onBeforeAppear: Y = x,
      onAppear: te = P,
      onAppearCancelled: D = I,
    } = t,
    ie = (re, xe, _e) => {
      Or(re, xe ? v : f), Or(re, xe ? p : c), _e && _e();
    },
    le = (re, xe) => {
      (re._isLeaving = !1), Or(re, m), Or(re, S), Or(re, y), xe && xe();
    },
    pe = (re) => (xe, _e) => {
      const Tt = re ? te : P,
        Xe = () => ie(xe, re, _e);
      es(Tt, [xe, Xe]),
        Fh(() => {
          Or(xe, re ? d : a), nr(xe, re ? v : f), Bh(Tt) || Rh(xe, i, k, Xe);
        });
    };
  return lt(t, {
    onBeforeEnter(re) {
      es(x, [re]), nr(re, a), nr(re, c);
    },
    onBeforeAppear(re) {
      es(Y, [re]), nr(re, d), nr(re, p);
    },
    onEnter: pe(!1),
    onAppear: pe(!0),
    onLeave(re, xe) {
      re._isLeaving = !0;
      const _e = () => le(re, xe);
      nr(re, m),
        Y0(),
        nr(re, y),
        Fh(() => {
          re._isLeaving && (Or(re, m), nr(re, S), Bh(F) || Rh(re, i, O, _e));
        }),
        es(F, [re, _e]);
    },
    onEnterCancelled(re) {
      ie(re, !1), es(I, [re]);
    },
    onAppearCancelled(re) {
      ie(re, !0), es(D, [re]);
    },
    onLeaveCancelled(re) {
      le(re), es(V, [re]);
    },
  });
}
function A8(e) {
  if (e == null) return null;
  if (at(e)) return [uc(e.enter), uc(e.leave)];
  {
    const t = uc(e);
    return [t, t];
  }
}
function uc(e) {
  return Nr(e);
}
function nr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Or(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const { _vtc: r } = e;
  r && (r.delete(t), r.size || (e._vtc = void 0));
}
function Fh(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let k8 = 0;
function Rh(e, t, r, i) {
  const o = (e._endId = ++k8),
    a = () => {
      o === e._endId && i();
    };
  if (r) return setTimeout(a, r);
  const { type: c, timeout: f, propCount: d } = G0(e, t);
  if (!c) return i();
  const p = c + 'end';
  let v = 0;
  const m = () => {
      e.removeEventListener(p, y), a();
    },
    y = (S) => {
      S.target === e && ++v >= d && m();
    };
  setTimeout(() => {
    v < d && m();
  }, f + 1),
    e.addEventListener(p, y);
}
function G0(e, t) {
  const r = window.getComputedStyle(e),
    i = (R) => (r[R] || '').split(', '),
    o = i(Ir + 'Delay'),
    a = i(Ir + 'Duration'),
    c = Nh(o, a),
    f = i(wi + 'Delay'),
    d = i(wi + 'Duration'),
    p = Nh(f, d);
  let v = null,
    m = 0,
    y = 0;
  t === Ir
    ? c > 0 && ((v = Ir), (m = c), (y = a.length))
    : t === wi
      ? p > 0 && ((v = wi), (m = p), (y = d.length))
      : ((m = Math.max(c, p)),
        (v = m > 0 ? (c > p ? Ir : wi) : null),
        (y = v ? (v === Ir ? a.length : d.length) : 0));
  const S = v === Ir && /\b(transform|all)(,|$)/.test(r[Ir + 'Property']);
  return { type: v, timeout: m, propCount: y, hasTransform: S };
}
function Nh(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((r, i) => Vh(r) + Vh(e[i])));
}
function Vh(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Y0() {
  return document.body.offsetHeight;
}
const j0 = new WeakMap(),
  Z0 = new WeakMap(),
  I8 = {
    name: 'TransitionGroup',
    props: lt({}, T8, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const r = bn(),
        i = fu();
      let o, a;
      return (
        ni(() => {
          if (!o.length) return;
          const c = e.moveClass || `${e.name || 'v'}-move`;
          if (!B8(o[0].el, r.vnode.el, c)) return;
          o.forEach(L8), o.forEach(O8);
          const f = o.filter(M8);
          Y0(),
            f.forEach((d) => {
              const p = d.el,
                v = p.style;
              nr(p, c),
                (v.transform = v.webkitTransform = v.transitionDuration = '');
              const m = (p._moveCb = (y) => {
                (y && y.target !== p) ||
                  ((!y || /transform$/.test(y.propertyName)) &&
                    (p.removeEventListener('transitionend', m),
                    (p._moveCb = null),
                    Or(p, c)));
              });
              p.addEventListener('transitionend', m);
            });
        }),
        () => {
          const c = He(e),
            f = K0(c);
          let d = c.tag || Ee;
          (o = a), (a = t.default ? Fl(t.default()) : []);
          for (let p = 0; p < a.length; p++) {
            const v = a[p];
            v.key != null && fs(v, js(v, f, i, r));
          }
          if (o)
            for (let p = 0; p < o.length; p++) {
              const v = o[p];
              fs(v, js(v, f, i, r)), j0.set(v, v.el.getBoundingClientRect());
            }
          return W(d, null, a);
        }
      );
    },
  },
  X0 = I8;
function L8(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function O8(e) {
  Z0.set(e, e.el.getBoundingClientRect());
}
function M8(e) {
  const t = j0.get(e),
    r = Z0.get(e),
    i = t.left - r.left,
    o = t.top - r.top;
  if (i || o) {
    const a = e.el.style;
    return (
      (a.transform = a.webkitTransform = `translate(${i}px,${o}px)`),
      (a.transitionDuration = '0s'),
      e
    );
  }
}
function B8(e, t, r) {
  const i = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((c) => {
      c.split(/\s+/).forEach((f) => f && i.classList.remove(f));
    }),
    r.split(/\s+/).forEach((c) => c && i.classList.add(c)),
    (i.style.display = 'none');
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(i);
  const { hasTransform: a } = G0(i);
  return o.removeChild(i), a;
}
const Ur = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return me(t) ? (r) => Us(t, r) : t;
};
function F8(e) {
  e.target.composing = !0;
}
function Dh(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const vl = {
    created(e, { modifiers: { lazy: t, trim: r, number: i } }, o) {
      e._assign = Ur(o);
      const a = i || (o.props && o.props.type === 'number');
      ir(e, t ? 'change' : 'input', (c) => {
        if (c.target.composing) return;
        let f = e.value;
        r && (f = f.trim()), a && (f = Nr(f)), e._assign(f);
      }),
        r &&
          ir(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (ir(e, 'compositionstart', F8),
          ir(e, 'compositionend', Dh),
          ir(e, 'change', Dh));
    },
    mounted(e, { value: t }) {
      e.value = t ?? '';
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: r, trim: i, number: o } },
      a,
    ) {
      if (
        ((e._assign = Ur(a)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== 'range' &&
            (r ||
              (i && e.value.trim() === t) ||
              ((o || e.type === 'number') && Nr(e.value) === t))))
      )
        return;
      const c = t ?? '';
      e.value !== c && (e.value = c);
    },
  },
  yu = {
    deep: !0,
    created(e, t, r) {
      (e._assign = Ur(r)),
        ir(e, 'change', () => {
          const i = e._modelValue,
            o = Qs(e),
            a = e.checked,
            c = e._assign;
          if (me(i)) {
            const f = Cl(i, o),
              d = f !== -1;
            if (a && !d) c(i.concat(o));
            else if (!a && d) {
              const p = [...i];
              p.splice(f, 1), c(p);
            }
          } else if (ps(i)) {
            const f = new Set(i);
            a ? f.add(o) : f.delete(o), c(f);
          } else c(Q0(e, a));
        });
    },
    mounted: Hh,
    beforeUpdate(e, t, r) {
      (e._assign = Ur(r)), Hh(e, t, r);
    },
  };
function Hh(e, { value: t, oldValue: r }, i) {
  (e._modelValue = t),
    me(t)
      ? (e.checked = Cl(t, i.props.value) > -1)
      : ps(t)
        ? (e.checked = t.has(i.props.value))
        : t !== r && (e.checked = Rr(t, Q0(e, !0)));
}
const bu = {
    created(e, { value: t }, r) {
      (e.checked = Rr(t, r.props.value)),
        (e._assign = Ur(r)),
        ir(e, 'change', () => {
          e._assign(Qs(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: r }, i) {
      (e._assign = Ur(i)), t !== r && (e.checked = Rr(t, i.props.value));
    },
  },
  J0 = {
    deep: !0,
    created(e, { value: t, modifiers: { number: r } }, i) {
      const o = ps(t);
      ir(e, 'change', () => {
        const a = Array.prototype.filter
          .call(e.options, (c) => c.selected)
          .map((c) => (r ? Nr(Qs(c)) : Qs(c)));
        e._assign(e.multiple ? (o ? new Set(a) : a) : a[0]);
      }),
        (e._assign = Ur(i));
    },
    mounted(e, { value: t }) {
      Uh(e, t);
    },
    beforeUpdate(e, t, r) {
      e._assign = Ur(r);
    },
    updated(e, { value: t }) {
      Uh(e, t);
    },
  };
function Uh(e, t) {
  const r = e.multiple;
  if (!(r && !me(t) && !ps(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const a = e.options[i],
        c = Qs(a);
      if (r) me(t) ? (a.selected = Cl(t, c) > -1) : (a.selected = t.has(c));
      else if (Rr(Qs(a), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Qs(e) {
  return '_value' in e ? e._value : e.value;
}
function Q0(e, t) {
  const r = t ? '_trueValue' : '_falseValue';
  return r in e ? e[r] : t;
}
const e1 = {
  created(e, t, r) {
    el(e, t, r, null, 'created');
  },
  mounted(e, t, r) {
    el(e, t, r, null, 'mounted');
  },
  beforeUpdate(e, t, r, i) {
    el(e, t, r, i, 'beforeUpdate');
  },
  updated(e, t, r, i) {
    el(e, t, r, i, 'updated');
  },
};
function t1(e, t) {
  switch (e) {
    case 'SELECT':
      return J0;
    case 'TEXTAREA':
      return vl;
    default:
      switch (t) {
        case 'checkbox':
          return yu;
        case 'radio':
          return bu;
        default:
          return vl;
      }
  }
}
function el(e, t, r, i, o) {
  const c = t1(e.tagName, r.props && r.props.type)[o];
  c && c(e, t, r, i);
}
function R8() {
  (vl.getSSRProps = ({ value: e }) => ({ value: e })),
    (bu.getSSRProps = ({ value: e }, t) => {
      if (t.props && Rr(t.props.value, e)) return { checked: !0 };
    }),
    (yu.getSSRProps = ({ value: e }, t) => {
      if (me(e)) {
        if (t.props && Cl(e, t.props.value) > -1) return { checked: !0 };
      } else if (ps(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 };
      } else if (e) return { checked: !0 };
    }),
    (e1.getSSRProps = (e, t) => {
      if (typeof t.type != 'string') return;
      const r = t1(t.type.toUpperCase(), t.props && t.props.type);
      if (r.getSSRProps) return r.getSSRProps(e, t);
    });
}
const N8 = ['ctrl', 'shift', 'alt', 'meta'],
  V8 = {
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
    exact: (e, t) => N8.some((r) => e[`${r}Key`] && !t.includes(r)),
  },
  qi =
    (e, t) =>
    (r, ...i) => {
      for (let o = 0; o < t.length; o++) {
        const a = V8[t[o]];
        if (a && a(r, t)) return;
      }
      return e(r, ...i);
    },
  D8 = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  H8 = (e, t) => (r) => {
    if (!('key' in r)) return;
    const i = Un(r.key);
    if (t.some((o) => o === i || D8[o] === i)) return e(r);
  },
  hs = {
    beforeMount(e, { value: t }, { transition: r }) {
      (e._vod = e.style.display === 'none' ? '' : e.style.display),
        r && t ? r.beforeEnter(e) : xi(e, t);
    },
    mounted(e, { value: t }, { transition: r }) {
      r && t && r.enter(e);
    },
    updated(e, { value: t, oldValue: r }, { transition: i }) {
      !t != !r &&
        (i
          ? t
            ? (i.beforeEnter(e), xi(e, !0), i.enter(e))
            : i.leave(e, () => {
                xi(e, !1);
              })
          : xi(e, t));
    },
    beforeUnmount(e, { value: t }) {
      xi(e, t);
    },
  };
function xi(e, t) {
  e.style.display = t ? e._vod : 'none';
}
function U8() {
  hs.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: 'none' } };
  };
}
const n1 = lt({ patchProp: $8 }, a8);
let Bi,
  zh = !1;
function r1() {
  return Bi || (Bi = C0(n1));
}
function s1() {
  return (Bi = zh ? Bi : P0(n1)), (zh = !0), Bi;
}
const zr = (...e) => {
    r1().render(...e);
  },
  i1 = (...e) => {
    s1().hydrate(...e);
  },
  o1 = (...e) => {
    const t = r1().createApp(...e),
      { mount: r } = t;
    return (
      (t.mount = (i) => {
        const o = a1(i);
        if (!o) return;
        const a = t._component;
        !Ae(a) && !a.render && !a.template && (a.template = o.innerHTML),
          (o.innerHTML = '');
        const c = r(o, !1, o instanceof SVGElement);
        return (
          o instanceof Element &&
            (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
          c
        );
      }),
      t
    );
  },
  l1 = (...e) => {
    const t = s1().createApp(...e),
      { mount: r } = t;
    return (
      (t.mount = (i) => {
        const o = a1(i);
        if (o) return r(o, !0, o instanceof SVGElement);
      }),
      t
    );
  };
function a1(e) {
  return it(e) ? document.querySelector(e) : e;
}
let qh = !1;
const z8 = () => {
    qh || ((qh = !0), R8(), U8());
  },
  q8 = () => {},
  ET = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BaseTransition: du,
        Comment: St,
        EffectScope: Xc,
        Fragment: Ee,
        KeepAlive: ub,
        ReactiveEffect: Zi,
        Static: cs,
        Suspense: eb,
        Teleport: Mb,
        Text: Xs,
        Transition: An,
        TransitionGroup: X0,
        VueElement: Hl,
        callWithAsyncErrorHandling: nn,
        callWithErrorHandling: zn,
        camelize: rn,
        capitalize: ji,
        cloneVNode: Wn,
        compatUtils: o8,
        compile: q8,
        computed: ue,
        createApp: o1,
        createBlock: we,
        createCommentVNode: de,
        createElementBlock: M,
        createElementVNode: B,
        createHydrationRenderer: P0,
        createPropsRestProxy: Jb,
        createRenderer: C0,
        createSSRApp: l1,
        createSlots: pb,
        createStaticVNode: I0,
        createTextVNode: Et,
        createVNode: W,
        customRef: B4,
        defineAsyncComponent: ab,
        defineComponent: J,
        defineCustomElement: z0,
        defineEmits: Gb,
        defineExpose: Yb,
        defineProps: Kb,
        defineSSRCustomElement: P8,
        get devtools() {
          return Vs;
        },
        effect: s4,
        effectScope: t4,
        getCurrentInstance: bn,
        getCurrentScope: Sl,
        getTransitionRawChildren: Fl,
        guardReactiveProps: k0,
        h: In,
        handleError: vs,
        hydrate: i1,
        initCustomFormatter: t8,
        initDirectivesForSSR: z8,
        inject: yt,
        isMemoSame: D0,
        isProxy: tu,
        isReactive: ls,
        isReadonly: Ys,
        isRef: dt,
        isRuntimeOnly: Hb,
        isShallow: cl,
        isVNode: kn,
        markRaw: zs,
        mergeDefaults: Xb,
        mergeProps: _n,
        nextTick: Ln,
        normalizeClass: Ce,
        normalizeProps: Ky,
        normalizeStyle: ht,
        onActivated: i0,
        onBeforeMount: a0,
        onBeforeUnmount: ri,
        onBeforeUpdate: c0,
        onDeactivated: o0,
        onErrorCaptured: h0,
        onMounted: ct,
        onRenderTracked: d0,
        onRenderTriggered: f0,
        onScopeDispose: El,
        onServerPrefetch: u0,
        onUnmounted: ur,
        onUpdated: ni,
        openBlock: $,
        popScopeId: yn,
        provide: qn,
        proxyRefs: su,
        pushScopeId: mn,
        queuePostFlushCb: lu,
        reactive: lr,
        readonly: ti,
        ref: ce,
        registerRuntimeCompiler: Db,
        render: zr,
        renderList: bt,
        renderSlot: G,
        resolveComponent: fr,
        resolveDirective: hb,
        resolveDynamicComponent: Nl,
        resolveFilter: i8,
        resolveTransitionHooks: js,
        setBlockTracking: kc,
        setDevtoolsHook: Qp,
        setTransitionHooks: fs,
        shallowReactive: eu,
        shallowReadonly: k4,
        shallowRef: qp,
        ssrContextKey: V0,
        ssrUtils: s8,
        stop: i4,
        toDisplayString: Me,
        toHandlerKey: Ai,
        toHandlers: gb,
        toRaw: He,
        toRef: Kp,
        toRefs: ar,
        transformVNodeArgs: Bb,
        triggerRef: L4,
        unref: L,
        useAttrs: Zb,
        useCssModule: E8,
        useCssVars: q0,
        useSSRContext: e8,
        useSlots: mu,
        useTransitionState: fu,
        vModelCheckbox: yu,
        vModelDynamic: e1,
        vModelRadio: bu,
        vModelSelect: J0,
        vModelText: vl,
        vShow: hs,
        version: H0,
        warn: Gp,
        watch: Pt,
        watchEffect: Dr,
        watchPostEffect: uu,
        watchSyncEffect: ib,
        withAsyncContext: Qb,
        withCtx: se,
        withDefaults: jb,
        withDirectives: Zs,
        withKeys: H8,
        withMemo: n8,
        withModifiers: qi,
        withScopeId: Y4,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  he = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [i, o] of t) r[i] = o;
    return r;
  },
  W8 = {
    type: { type: String, default: 'default' },
    size: { type: String, default: '' },
    shape: { type: String, default: '' },
    block: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
  },
  K8 = ['xlink:href', 'fill'],
  G8 = ['src', 'alt'],
  Y8 = J({ name: 'BuIcon' }),
  j8 = J({
    ...Y8,
    props: { name: null, size: null, color: null, type: null, component: null },
    setup(e) {
      const t = e,
        r = ue(() => (typeof t.size == 'number' ? `${t.size}px` : t.size));
      return (i, o) => (
        $(),
        M(
          Ee,
          null,
          [
            e.component
              ? ($(),
                M(
                  'svg',
                  _n(
                    {
                      key: 0,
                      class: [
                        i.$attrs.class,
                        'icon',
                        'icon-svg',
                        e.type && `icon-${e.type}`,
                      ],
                      style: { width: L(r), height: L(r) },
                      'aria-hidden': 'true',
                    },
                    i.$attrs,
                  ),
                  [
                    B(
                      'use',
                      { 'xlink:href': `#icon-${e.component}`, fill: e.color },
                      null,
                      8,
                      K8,
                    ),
                  ],
                  16,
                ))
              : de('', !0),
            e.name
              ? ($(),
                M(
                  Ee,
                  { key: 1 },
                  [
                    /http|https/.test(e.name)
                      ? ($(),
                        M(
                          'img',
                          _n({ key: 0 }, i.$attrs, {
                            src: e.name,
                            alt: e.name,
                          }),
                          null,
                          16,
                          G8,
                        ))
                      : ($(),
                        M(
                          'span',
                          _n(
                            {
                              key: 1,
                              class: [
                                'bu-icon',
                                'icon-' + e.name,
                                e.type && `icon-${e.type}`,
                                i.$attrs.class,
                              ],
                            },
                            i.$attrs,
                            { style: { fontSize: L(r), color: e.color } },
                          ),
                          null,
                          16,
                        )),
                  ],
                  64,
                ))
              : de('', !0),
          ],
          64,
        )
      );
    },
  }),
  Z8 = () => {},
  X8 = Array.isArray,
  Wh = (e) => typeof e == 'function',
  rr = (e) => typeof e == 'string',
  J8 = (e) => e !== null && typeof e == 'object',
  Q8 = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
  e5 = /\B([A-Z])/g,
  t5 = Q8((e) => e.replace(e5, '-$1').toLowerCase()),
  on = (e, t) => {
    if (
      ((e.install = (r) => {
        for (const i of [e, ...Object.values(t ?? {})]) r.component(i.name, i);
      }),
      t)
    )
      for (const [r, i] of Object.entries(t)) e[r] = i;
    return e;
  },
  c1 = (e, t) => (
    (e.install = (r) => {
      (e._context = r._context), (r.config.globalProperties[t] = e);
    }),
    e
  ),
  si = (e) => ((e.install = Z8), e),
  fc = (function () {
    return function (e, t, r, i = !1) {
      e && t && r && e.addEventListener(t, r, i);
    };
  })(),
  dc = (function () {
    return function (e, t, r, i = !1) {
      e && t && e.removeEventListener(t, r, i);
    };
  })();
const vn = on(j8),
  n5 = J({
    name: 'BuButton',
    props: W8,
    emits: { click: (e) => e instanceof MouseEvent },
    setup(e, { slots: t, attrs: r, emit: i }) {
      const {
          type: o,
          size: a,
          block: c,
          disabled: f,
          shape: d,
          loading: p,
        } = ar(e),
        v = 'bu-btn',
        m = d.value ? `${v}--${d.value}` : '',
        y = a.value ? `${v}--${a.value}` : '',
        S = ue(() => [
          v,
          `${v}--${o.value}`,
          `${y}`,
          `${m}`,
          { [`${v}--block`]: c.value },
        ]),
        R = t.default ? t.default() : '按钮',
        k = o.value === 'link' ? 'a' : 'button',
        O = (x) => {
          e.loading || e.disabled || i('click', x);
        };
      return () =>
        W(k, _n({ class: S.value, disabled: f.value, onClick: O }, r), {
          default: () => [
            p.value &&
              W(
                vn,
                { class: 'bu-load-loop', name: 'loading', size: '18' },
                null,
              ),
            R,
          ],
        });
    },
  });
const u1 = on(n5),
  r5 = { class: 'bu-checkbox--label' },
  s5 = J({ name: 'BuCheckbox' }),
  i5 = J({
    ...s5,
    props: {
      modelValue: { type: Boolean },
      label: null,
      indeterminate: { type: Boolean, default: !1 },
    },
    emits: ['update:modelValue', 'click'],
    setup(e) {
      return (t, r) => (
        $(),
        M(
          'label',
          {
            class: Ce(['bu-checkbox', e.modelValue ? 'checked' : '']),
            onClick:
              r[0] ||
              (r[0] = (i) => t.$emit('update:modelValue', !e.modelValue)),
          },
          [
            B(
              'span',
              {
                class: Ce([
                  'bu-checkbox--input',
                  e.modelValue || e.indeterminate ? 'checked' : '',
                ]),
              },
              [
                e.modelValue
                  ? ($(),
                    we(L(vn), {
                      key: 0,
                      name: 'checkbox-select',
                      size: '18px',
                    }))
                  : ($(),
                    M(
                      Ee,
                      { key: 1 },
                      [
                        e.indeterminate
                          ? ($(),
                            we(L(vn), {
                              key: 0,
                              name: 'checkbox-indeterminate',
                              size: '18px',
                            }))
                          : ($(),
                            we(L(vn), {
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
            B('span', r5, Me(e.label), 1),
          ],
          2,
        )
      );
    },
  }),
  wu = on(i5),
  o5 = J({ name: 'BuContainer' }),
  l5 = J({
    ...o5,
    props: { direction: null },
    setup(e) {
      const t = e,
        r = mu(),
        i = ue(() =>
          r && r.default
            ? r.default().some((o) => {
                const a = o.type.name;
                return a === 'BuHeader' || a === 'BuFooter';
              })
            : t.direction === 'vertical',
        );
      return (o, a) => (
        $(),
        M(
          'section',
          { class: Ce(['bu-container', { 'is-vertical': L(i) }]) },
          [G(o.$slots, 'default')],
          2,
        )
      );
    },
  }),
  a5 = J({ name: 'BuAside' }),
  f1 = J({
    ...a5,
    props: { width: { default: '300px' } },
    setup(e) {
      return (t, r) => (
        $(),
        M(
          'aside',
          { class: 'bu-aside', style: ht({ width: e.width }) },
          [G(t.$slots, 'default')],
          4,
        )
      );
    },
  }),
  c5 = J({ name: 'BuFooter' }),
  d1 = J({
    ...c5,
    props: { height: { default: '60px' } },
    setup(e) {
      return (t, r) => (
        $(),
        M(
          'footer',
          { class: 'bu-footer', style: ht({ height: e.height }) },
          [G(t.$slots, 'default')],
          4,
        )
      );
    },
  }),
  u5 = J({ name: 'BuHeader' }),
  h1 = J({
    ...u5,
    props: { height: { default: '60px' } },
    setup(e) {
      return (t, r) => (
        $(),
        M(
          'header',
          { class: 'bu-header', style: ht({ height: e.height }) },
          [G(t.$slots, 'default')],
          4,
        )
      );
    },
  }),
  f5 = { name: 'BuMain' },
  d5 = { class: 'bu-main' };
function h5(e, t, r, i, o, a) {
  return $(), M('main', d5, [G(e.$slots, 'default')]);
}
const p1 = he(f5, [['render', h5]]);
const g1 = on(l5, { Aside: f1, Footer: d1, Header: h1, Main: p1 }),
  _1 = si(f1),
  v1 = si(d1),
  m1 = si(h1),
  y1 = si(p1),
  p5 = J({ name: 'BuForm' }),
  g5 = J({
    ...p5,
    props: { model: null, rules: null, labelPosition: null, labelWidth: null },
    emits: ['submit'],
    setup(e, { expose: t, emit: r }) {
      const i = e,
        o = 'bu-form',
        a = [],
        c = ce(0),
        f = ue(() => [o, `${o}--${i.labelPosition || 'right'}`]),
        d = (S) => {
          S &&
            (a.push(S),
            console.log('field.$label', S.$label),
            S.$label && !i.labelWidth && p(S.$label.value));
        },
        p = (S) => {
          const R = window.getComputedStyle(S.firstElementChild).width,
            k = Math.ceil(Number.parseFloat(R)) + 2;
          k > c.value && (c.value = k),
            console.log(
              k,
              Number.parseFloat(R),
              Math.ceil(Number.parseFloat(R)),
            );
        };
      function v(S) {
        const R = a.map((k) => k.validate());
        Promise.all(R)
          .then(() => {
            S(!0);
          })
          .catch(() => {
            S(!1);
          });
      }
      function m(S) {
        S.preventDefault(), r('submit', S);
      }
      const y = lr({ ...ar(i), addField: d, autoLabelWidth: c });
      return (
        qn('buFormKey', y),
        t({ validate: v }),
        (S, R) => (
          $(),
          M(
            'form',
            { class: Ce(L(f)), onSubmit: m },
            [G(S.$slots, 'default')],
            34,
          )
        )
      );
    },
  });
function is() {
  return (
    (is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }),
    is.apply(this, arguments)
  );
}
function _5(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Wi(e, t);
}
function Fc(e) {
  return (
    (Fc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Fc(e)
  );
}
function Wi(e, t) {
  return (
    (Wi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, o) {
          return (i.__proto__ = o), i;
        }),
    Wi(e, t)
  );
}
function v5() {
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
function ll(e, t, r) {
  return (
    v5()
      ? (ll = Reflect.construct.bind())
      : (ll = function (o, a, c) {
          var f = [null];
          f.push.apply(f, a);
          var d = Function.bind.apply(o, f),
            p = new d();
          return c && Wi(p, c.prototype), p;
        }),
    ll.apply(null, arguments)
  );
}
function m5(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1;
}
function Rc(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (Rc = function (i) {
      if (i === null || !m5(i)) return i;
      if (typeof i != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (typeof t < 'u') {
        if (t.has(i)) return t.get(i);
        t.set(i, o);
      }
      function o() {
        return ll(i, arguments, Fc(this).constructor);
      }
      return (
        (o.prototype = Object.create(i.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Wi(o, i)
      );
    }),
    Rc(e)
  );
}
var y5 = /%[sdj%]/g,
  b5 = function () {};
typeof process < 'u' && process.env;
function Nc(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (r) {
      var i = r.field;
      (t[i] = t[i] || []), t[i].push(r);
    }),
    t
  );
}
function tn(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
    i < t;
    i++
  )
    r[i - 1] = arguments[i];
  var o = 0,
    a = r.length;
  if (typeof e == 'function') return e.apply(null, r);
  if (typeof e == 'string') {
    var c = e.replace(y5, function (f) {
      if (f === '%%') return '%';
      if (o >= a) return f;
      switch (f) {
        case '%s':
          return String(r[o++]);
        case '%d':
          return Number(r[o++]);
        case '%j':
          try {
            return JSON.stringify(r[o++]);
          } catch {
            return '[Circular]';
          }
          break;
        default:
          return f;
      }
    });
    return c;
  }
  return e;
}
function w5(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  );
}
function vt(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (w5(t) && typeof e == 'string' && !e)
  );
}
function x5(e, t, r) {
  var i = [],
    o = 0,
    a = e.length;
  function c(f) {
    i.push.apply(i, f || []), o++, o === a && r(i);
  }
  e.forEach(function (f) {
    t(f, c);
  });
}
function Kh(e, t, r) {
  var i = 0,
    o = e.length;
  function a(c) {
    if (c && c.length) {
      r(c);
      return;
    }
    var f = i;
    (i = i + 1), f < o ? t(e[f], a) : r([]);
  }
  a([]);
}
function $5(e) {
  var t = [];
  return (
    Object.keys(e).forEach(function (r) {
      t.push.apply(t, e[r] || []);
    }),
    t
  );
}
var Gh = (function (e) {
  _5(t, e);
  function t(r, i) {
    var o;
    return (
      (o = e.call(this, 'Async Validation Error') || this),
      (o.errors = r),
      (o.fields = i),
      o
    );
  }
  return t;
})(Rc(Error));
function C5(e, t, r, i, o) {
  if (t.first) {
    var a = new Promise(function (y, S) {
      var R = function (x) {
          return i(x), x.length ? S(new Gh(x, Nc(x))) : y(o);
        },
        k = $5(e);
      Kh(k, r, R);
    });
    return (
      a.catch(function (y) {
        return y;
      }),
      a
    );
  }
  var c = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    f = Object.keys(e),
    d = f.length,
    p = 0,
    v = [],
    m = new Promise(function (y, S) {
      var R = function (O) {
        if ((v.push.apply(v, O), p++, p === d))
          return i(v), v.length ? S(new Gh(v, Nc(v))) : y(o);
      };
      f.length || (i(v), y(o)),
        f.forEach(function (k) {
          var O = e[k];
          c.indexOf(k) !== -1 ? Kh(O, r, R) : x5(O, r, R);
        });
    });
  return (
    m.catch(function (y) {
      return y;
    }),
    m
  );
}
function P5(e) {
  return !!(e && e.message !== void 0);
}
function S5(e, t) {
  for (var r = e, i = 0; i < t.length; i++) {
    if (r == null) return r;
    r = r[t[i]];
  }
  return r;
}
function Yh(e, t) {
  return function (r) {
    var i;
    return (
      e.fullFields
        ? (i = S5(t, e.fullFields))
        : (i = t[r.field || e.fullField]),
      P5(r)
        ? ((r.field = r.field || e.fullField), (r.fieldValue = i), r)
        : {
            message: typeof r == 'function' ? r() : r,
            fieldValue: i,
            field: r.field || e.fullField,
          }
    );
  };
}
function jh(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = t[r];
        typeof i == 'object' && typeof e[r] == 'object'
          ? (e[r] = is({}, e[r], i))
          : (e[r] = i);
      }
  }
  return e;
}
var b1 = function (t, r, i, o, a, c) {
    t.required &&
      (!i.hasOwnProperty(t.field) || vt(r, c || t.type)) &&
      o.push(tn(a.messages.required, t.fullField));
  },
  E5 = function (t, r, i, o, a) {
    (/^\s+$/.test(r) || r === '') &&
      o.push(tn(a.messages.whitespace, t.fullField));
  },
  tl,
  T5 = function () {
    if (tl) return tl;
    var e = '[a-fA-F\\d:]',
      t = function (F) {
        return F && F.includeBoundaries
          ? '(?:(?<=\\s|^)(?=' + e + ')|(?<=' + e + ')(?=\\s|$))'
          : '';
      },
      r =
        '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
      i = '[a-fA-F\\d]{1,4}',
      o = (
        `
(?:
(?:` +
        i +
        ':){7}(?:' +
        i +
        `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
        i +
        ':){6}(?:' +
        r +
        '|:' +
        i +
        `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
        i +
        ':){5}(?::' +
        r +
        '|(?::' +
        i +
        `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
        i +
        ':){4}(?:(?::' +
        i +
        '){0,1}:' +
        r +
        '|(?::' +
        i +
        `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
        i +
        ':){3}(?:(?::' +
        i +
        '){0,2}:' +
        r +
        '|(?::' +
        i +
        `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
        i +
        ':){2}(?:(?::' +
        i +
        '){0,3}:' +
        r +
        '|(?::' +
        i +
        `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
        i +
        ':){1}(?:(?::' +
        i +
        '){0,4}:' +
        r +
        '|(?::' +
        i +
        `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
        i +
        '){0,5}:' +
        r +
        '|(?::' +
        i +
        `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
      )
        .replace(/\s*\/\/.*$/gm, '')
        .replace(/\n/g, '')
        .trim(),
      a = new RegExp('(?:^' + r + '$)|(?:^' + o + '$)'),
      c = new RegExp('^' + r + '$'),
      f = new RegExp('^' + o + '$'),
      d = function (F) {
        return F && F.exact
          ? a
          : new RegExp(
              '(?:' + t(F) + r + t(F) + ')|(?:' + t(F) + o + t(F) + ')',
              'g',
            );
      };
    (d.v4 = function (I) {
      return I && I.exact ? c : new RegExp('' + t(I) + r + t(I), 'g');
    }),
      (d.v6 = function (I) {
        return I && I.exact ? f : new RegExp('' + t(I) + o + t(I), 'g');
      });
    var p = '(?:(?:[a-z]+:)?//)',
      v = '(?:\\S+(?::\\S*)?@)?',
      m = d.v4().source,
      y = d.v6().source,
      S = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
      R = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
      k = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
      O = '(?::\\d{2,5})?',
      x = '(?:[/?#][^\\s"]*)?',
      P =
        '(?:' +
        p +
        '|www\\.)' +
        v +
        '(?:localhost|' +
        m +
        '|' +
        y +
        '|' +
        S +
        R +
        k +
        ')' +
        O +
        x;
    return (tl = new RegExp('(?:^' + P + '$)', 'i')), tl;
  },
  Zh = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  Ei = {
    integer: function (t) {
      return Ei.number(t) && parseInt(t, 10) === t;
    },
    float: function (t) {
      return Ei.number(t) && !Ei.integer(t);
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
      return typeof t == 'object' && !Ei.array(t);
    },
    method: function (t) {
      return typeof t == 'function';
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(Zh.email);
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(T5());
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(Zh.hex);
    },
  },
  A5 = function (t, r, i, o, a) {
    if (t.required && r === void 0) {
      b1(t, r, i, o, a);
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
      f = t.type;
    c.indexOf(f) > -1
      ? Ei[f](r) || o.push(tn(a.messages.types[f], t.fullField, t.type))
      : f &&
        typeof r !== t.type &&
        o.push(tn(a.messages.types[f], t.fullField, t.type));
  },
  k5 = function (t, r, i, o, a) {
    var c = typeof t.len == 'number',
      f = typeof t.min == 'number',
      d = typeof t.max == 'number',
      p = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      v = r,
      m = null,
      y = typeof r == 'number',
      S = typeof r == 'string',
      R = Array.isArray(r);
    if ((y ? (m = 'number') : S ? (m = 'string') : R && (m = 'array'), !m))
      return !1;
    R && (v = r.length),
      S && (v = r.replace(p, '_').length),
      c
        ? v !== t.len && o.push(tn(a.messages[m].len, t.fullField, t.len))
        : f && !d && v < t.min
          ? o.push(tn(a.messages[m].min, t.fullField, t.min))
          : d && !f && v > t.max
            ? o.push(tn(a.messages[m].max, t.fullField, t.max))
            : f &&
              d &&
              (v < t.min || v > t.max) &&
              o.push(tn(a.messages[m].range, t.fullField, t.min, t.max));
  },
  Fs = 'enum',
  I5 = function (t, r, i, o, a) {
    (t[Fs] = Array.isArray(t[Fs]) ? t[Fs] : []),
      t[Fs].indexOf(r) === -1 &&
        o.push(tn(a.messages[Fs], t.fullField, t[Fs].join(', ')));
  },
  L5 = function (t, r, i, o, a) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(r) ||
            o.push(tn(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
      else if (typeof t.pattern == 'string') {
        var c = new RegExp(t.pattern);
        c.test(r) ||
          o.push(tn(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
      }
    }
  },
  Ve = {
    required: b1,
    whitespace: E5,
    type: A5,
    range: k5,
    enum: I5,
    pattern: L5,
  },
  O5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r, 'string') && !t.required) return i();
      Ve.required(t, r, o, c, a, 'string'),
        vt(r, 'string') ||
          (Ve.type(t, r, o, c, a),
          Ve.range(t, r, o, c, a),
          Ve.pattern(t, r, o, c, a),
          t.whitespace === !0 && Ve.whitespace(t, r, o, c, a));
    }
    i(c);
  },
  M5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r) && !t.required) return i();
      Ve.required(t, r, o, c, a), r !== void 0 && Ve.type(t, r, o, c, a);
    }
    i(c);
  },
  B5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if ((r === '' && (r = void 0), vt(r) && !t.required)) return i();
      Ve.required(t, r, o, c, a),
        r !== void 0 && (Ve.type(t, r, o, c, a), Ve.range(t, r, o, c, a));
    }
    i(c);
  },
  F5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r) && !t.required) return i();
      Ve.required(t, r, o, c, a), r !== void 0 && Ve.type(t, r, o, c, a);
    }
    i(c);
  },
  R5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r) && !t.required) return i();
      Ve.required(t, r, o, c, a), vt(r) || Ve.type(t, r, o, c, a);
    }
    i(c);
  },
  N5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r) && !t.required) return i();
      Ve.required(t, r, o, c, a),
        r !== void 0 && (Ve.type(t, r, o, c, a), Ve.range(t, r, o, c, a));
    }
    i(c);
  },
  V5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r) && !t.required) return i();
      Ve.required(t, r, o, c, a),
        r !== void 0 && (Ve.type(t, r, o, c, a), Ve.range(t, r, o, c, a));
    }
    i(c);
  },
  D5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (r == null && !t.required) return i();
      Ve.required(t, r, o, c, a, 'array'),
        r != null && (Ve.type(t, r, o, c, a), Ve.range(t, r, o, c, a));
    }
    i(c);
  },
  H5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r) && !t.required) return i();
      Ve.required(t, r, o, c, a), r !== void 0 && Ve.type(t, r, o, c, a);
    }
    i(c);
  },
  U5 = 'enum',
  z5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r) && !t.required) return i();
      Ve.required(t, r, o, c, a), r !== void 0 && Ve[U5](t, r, o, c, a);
    }
    i(c);
  },
  q5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r, 'string') && !t.required) return i();
      Ve.required(t, r, o, c, a), vt(r, 'string') || Ve.pattern(t, r, o, c, a);
    }
    i(c);
  },
  W5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r, 'date') && !t.required) return i();
      if ((Ve.required(t, r, o, c, a), !vt(r, 'date'))) {
        var d;
        r instanceof Date ? (d = r) : (d = new Date(r)),
          Ve.type(t, d, o, c, a),
          d && Ve.range(t, d.getTime(), o, c, a);
      }
    }
    i(c);
  },
  K5 = function (t, r, i, o, a) {
    var c = [],
      f = Array.isArray(r) ? 'array' : typeof r;
    Ve.required(t, r, o, c, a, f), i(c);
  },
  hc = function (t, r, i, o, a) {
    var c = t.type,
      f = [],
      d = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (d) {
      if (vt(r, c) && !t.required) return i();
      Ve.required(t, r, o, f, a, c), vt(r, c) || Ve.type(t, r, o, f, a);
    }
    i(f);
  },
  G5 = function (t, r, i, o, a) {
    var c = [],
      f = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (f) {
      if (vt(r) && !t.required) return i();
      Ve.required(t, r, o, c, a);
    }
    i(c);
  },
  Fi = {
    string: O5,
    method: M5,
    number: B5,
    boolean: F5,
    regexp: R5,
    integer: N5,
    float: V5,
    array: D5,
    object: H5,
    enum: z5,
    pattern: q5,
    date: W5,
    url: hc,
    hex: hc,
    email: hc,
    required: K5,
    any: G5,
  };
function Vc() {
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
var Dc = Vc(),
  Qi = (function () {
    function e(r) {
      (this.rules = null), (this._messages = Dc), this.define(r);
    }
    var t = e.prototype;
    return (
      (t.define = function (i) {
        var o = this;
        if (!i) throw new Error('Cannot configure a schema with no rules');
        if (typeof i != 'object' || Array.isArray(i))
          throw new Error('Rules must be an object');
        (this.rules = {}),
          Object.keys(i).forEach(function (a) {
            var c = i[a];
            o.rules[a] = Array.isArray(c) ? c : [c];
          });
      }),
      (t.messages = function (i) {
        return i && (this._messages = jh(Vc(), i)), this._messages;
      }),
      (t.validate = function (i, o, a) {
        var c = this;
        o === void 0 && (o = {}), a === void 0 && (a = function () {});
        var f = i,
          d = o,
          p = a;
        if (
          (typeof d == 'function' && ((p = d), (d = {})),
          !this.rules || Object.keys(this.rules).length === 0)
        )
          return p && p(null, f), Promise.resolve(f);
        function v(k) {
          var O = [],
            x = {};
          function P(F) {
            if (Array.isArray(F)) {
              var V;
              O = (V = O).concat.apply(V, F);
            } else O.push(F);
          }
          for (var I = 0; I < k.length; I++) P(k[I]);
          O.length ? ((x = Nc(O)), p(O, x)) : p(null, f);
        }
        if (d.messages) {
          var m = this.messages();
          m === Dc && (m = Vc()), jh(m, d.messages), (d.messages = m);
        } else d.messages = this.messages();
        var y = {},
          S = d.keys || Object.keys(this.rules);
        S.forEach(function (k) {
          var O = c.rules[k],
            x = f[k];
          O.forEach(function (P) {
            var I = P;
            typeof I.transform == 'function' &&
              (f === i && (f = is({}, f)), (x = f[k] = I.transform(x))),
              typeof I == 'function' ? (I = { validator: I }) : (I = is({}, I)),
              (I.validator = c.getValidationMethod(I)),
              I.validator &&
                ((I.field = k),
                (I.fullField = I.fullField || k),
                (I.type = c.getType(I)),
                (y[k] = y[k] || []),
                y[k].push({ rule: I, value: x, source: f, field: k }));
          });
        });
        var R = {};
        return C5(
          y,
          d,
          function (k, O) {
            var x = k.rule,
              P =
                (x.type === 'object' || x.type === 'array') &&
                (typeof x.fields == 'object' ||
                  typeof x.defaultField == 'object');
            (P = P && (x.required || (!x.required && k.value))),
              (x.field = k.field);
            function I(Y, te) {
              return is({}, te, {
                fullField: x.fullField + '.' + Y,
                fullFields: x.fullFields ? [].concat(x.fullFields, [Y]) : [Y],
              });
            }
            function F(Y) {
              Y === void 0 && (Y = []);
              var te = Array.isArray(Y) ? Y : [Y];
              !d.suppressWarning &&
                te.length &&
                e.warning('async-validator:', te),
                te.length &&
                  x.message !== void 0 &&
                  (te = [].concat(x.message));
              var D = te.map(Yh(x, f));
              if (d.first && D.length) return (R[x.field] = 1), O(D);
              if (!P) O(D);
              else {
                if (x.required && !k.value)
                  return (
                    x.message !== void 0
                      ? (D = [].concat(x.message).map(Yh(x, f)))
                      : d.error &&
                        (D = [d.error(x, tn(d.messages.required, x.field))]),
                    O(D)
                  );
                var ie = {};
                x.defaultField &&
                  Object.keys(k.value).map(function (re) {
                    ie[re] = x.defaultField;
                  }),
                  (ie = is({}, ie, k.rule.fields));
                var le = {};
                Object.keys(ie).forEach(function (re) {
                  var xe = ie[re],
                    _e = Array.isArray(xe) ? xe : [xe];
                  le[re] = _e.map(I.bind(null, re));
                });
                var pe = new e(le);
                pe.messages(d.messages),
                  k.rule.options &&
                    ((k.rule.options.messages = d.messages),
                    (k.rule.options.error = d.error)),
                  pe.validate(k.value, k.rule.options || d, function (re) {
                    var xe = [];
                    D && D.length && xe.push.apply(xe, D),
                      re && re.length && xe.push.apply(xe, re),
                      O(xe.length ? xe : null);
                  });
              }
            }
            var V;
            if (x.asyncValidator)
              V = x.asyncValidator(x, k.value, F, k.source, d);
            else if (x.validator) {
              try {
                V = x.validator(x, k.value, F, k.source, d);
              } catch (Y) {
                console.error == null || console.error(Y),
                  d.suppressValidatorError ||
                    setTimeout(function () {
                      throw Y;
                    }, 0),
                  F(Y.message);
              }
              V === !0
                ? F()
                : V === !1
                  ? F(
                      typeof x.message == 'function'
                        ? x.message(x.fullField || x.field)
                        : x.message || (x.fullField || x.field) + ' fails',
                    )
                  : V instanceof Array
                    ? F(V)
                    : V instanceof Error && F(V.message);
            }
            V &&
              V.then &&
              V.then(
                function () {
                  return F();
                },
                function (Y) {
                  return F(Y);
                },
              );
          },
          function (k) {
            v(k);
          },
          f,
        );
      }),
      (t.getType = function (i) {
        if (
          (i.type === void 0 &&
            i.pattern instanceof RegExp &&
            (i.type = 'pattern'),
          typeof i.validator != 'function' &&
            i.type &&
            !Fi.hasOwnProperty(i.type))
        )
          throw new Error(tn('Unknown rule type %s', i.type));
        return i.type || 'string';
      }),
      (t.getValidationMethod = function (i) {
        if (typeof i.validator == 'function') return i.validator;
        var o = Object.keys(i),
          a = o.indexOf('message');
        return (
          a !== -1 && o.splice(a, 1),
          o.length === 1 && o[0] === 'required'
            ? Fi.required
            : Fi[this.getType(i)] || void 0
        );
      }),
      e
    );
  })();
Qi.register = function (t, r) {
  if (typeof r != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function',
    );
  Fi[t] = r;
};
Qi.warning = b5;
Qi.messages = Dc;
Qi.validators = Fi;
const Y5 = { class: 'bu-form-item--content' },
  j5 = { key: 0, class: 'bu-form-item--error' },
  Z5 = J({ name: 'BuFormItem' }),
  w1 = J({
    ...Z5,
    props: { label: { default: '' }, prop: { default: '' } },
    setup(e) {
      const t = e,
        r = 'bu-form-item',
        i = ce(),
        o = yt('buFormKey', {}),
        a = ce(''),
        c = ue(
          () => (
            console.log('uForm?.rules.value', o.rules[t.prop]),
            o.rules[t.prop] && o.rules[t.prop].some((m) => m.required)
          ),
        ),
        f = ue(() => [r, a.value && 'is-error', c.value && 'is-required']),
        d = ue(() =>
          o.labelWidth
            ? typeof o.labelWidth == 'string'
              ? o.labelWidth
              : o.labelWidth + 'px'
            : 'auto',
        ),
        p = () => {
          if (o && o.rules === void 0) return Promise.resolve({ result: !0 });
          const m = o.rules[t.prop],
            y = o.model[t.prop];
          return new Qi({ [t.prop]: m }).validate({ [t.prop]: y }, (R) => {
            R ? (a.value = R[0].message || '校验错误') : (a.value = '');
          });
        },
        v = lr({ ...ar(t), validate: p, $label: i });
      return (
        qn('buFormItem', v),
        ct(() => {
          t.prop &&
            Ln(() => {
              o && o.addField(v);
            });
        }),
        (m, y) => (
          $(),
          M(
            'div',
            { class: Ce(L(f)) },
            [
              B(
                'div',
                {
                  ref_key: 'formItemLabelRef',
                  ref: i,
                  style: ht({
                    width:
                      L(o).autoLabelWidth > 0
                        ? L(o).autoLabelWidth + 'px'
                        : 'auto',
                  }),
                },
                [
                  e.label
                    ? ($(),
                      M(
                        'label',
                        {
                          key: 0,
                          class: 'bu-form-item-label',
                          style: ht({ width: L(d) }),
                        },
                        Me(e.label),
                        5,
                      ))
                    : de('', !0),
                  G(m.$slots, 'label'),
                ],
                4,
              ),
              B('div', Y5, [
                G(m.$slots, 'default'),
                a.value ? ($(), M('div', j5, Me(a.value), 1)) : de('', !0),
              ]),
            ],
            2,
          )
        )
      );
    },
  });
const x1 = on(g5, { FormItem: w1 }),
  $1 = si(w1),
  X5 = J({
    name: 'BuGrid',
    props: {
      cols: { type: Number },
      xGap: { type: Number, default: 15 },
      yGap: { type: Number, default: 15 },
    },
    setup(e, { slots: t }) {
      const { cols: r, xGap: i, yGap: o } = ar(e);
      let a = 1;
      return () => {
        const c = G(t, 'default', { key: 0 }, () => []);
        return (c.children ?? []).length === 0
          ? null
          : W(
              'div',
              {
                style: {
                  'grid-template-columns': `repeat(${r.value}, minmax(0px, 1fr))`,
                  gap: `${o.value}px ${i.value}px`,
                  display: 'grid',
                },
              },
              [
                c.children &&
                  c.children.map((f) => {
                    var v, m, y;
                    let d = {};
                    f &&
                      f.type.name === 'BuGridItem' &&
                      ((a += ((v = f.props) == null ? void 0 : v.offset) || 0),
                      (d = {
                        style: {
                          'grid-column': `${a} / span ${
                            ((m = f.props) == null ? void 0 : m.span) || 1
                          }`,
                        },
                      }));
                    const p = In(f, d);
                    return (
                      (a += ((y = f.props) == null ? void 0 : y.span) || 1), p
                    );
                  }),
              ],
            );
      };
    },
  }),
  J5 = { class: 'bu-grid--item' },
  Q5 = J({ name: 'BuGridItem' }),
  C1 = J({
    ...Q5,
    props: { offset: null, span: null },
    setup(e) {
      return (t, r) => ($(), M('div', J5, [G(t.$slots, 'default')]));
    },
  }),
  P1 = on(X5, { GridItem: C1 }),
  S1 = si(C1);
var $i =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  ml = {},
  ew = {
    get exports() {
      return ml;
    },
    set exports(e) {
      ml = e;
    },
  };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (e, t) {
  (function () {
    var r,
      i = '4.17.21',
      o = 200,
      a = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      c = 'Expected a function',
      f = 'Invalid `variable` option passed into `_.template`',
      d = '__lodash_hash_undefined__',
      p = 500,
      v = '__lodash_placeholder__',
      m = 1,
      y = 2,
      S = 4,
      R = 1,
      k = 2,
      O = 1,
      x = 2,
      P = 4,
      I = 8,
      F = 16,
      V = 32,
      Y = 64,
      te = 128,
      D = 256,
      ie = 512,
      le = 30,
      pe = '...',
      re = 800,
      xe = 16,
      _e = 1,
      Tt = 2,
      Xe = 3,
      Ye = 1 / 0,
      Ue = 9007199254740991,
      wn = 17976931348623157e292,
      hr = 0 / 0,
      At = 4294967295,
      pr = At - 1,
      Mn = At >>> 1,
      eo = [
        ['ary', te],
        ['bind', O],
        ['bindKey', x],
        ['curry', I],
        ['curryRight', F],
        ['flip', ie],
        ['partial', V],
        ['partialRight', Y],
        ['rearg', D],
      ],
      gr = '[object Arguments]',
      ys = '[object Array]',
      xn = '[object AsyncFunction]',
      Bn = '[object Boolean]',
      _r = '[object Date]',
      vr = '[object DOMException]',
      mr = '[object Error]',
      yr = '[object Function]',
      w = '[object GeneratorFunction]',
      E = '[object Map]',
      H = '[object Number]',
      Z = '[object Null]',
      K = '[object Object]',
      ne = '[object Promise]',
      ae = '[object Proxy]',
      Q = '[object RegExp]',
      ee = '[object Set]',
      X = '[object String]',
      be = '[object Symbol]',
      ge = '[object Undefined]',
      ye = '[object WeakMap]',
      Te = '[object WeakSet]',
      Be = '[object ArrayBuffer]',
      ze = '[object DataView]',
      Ke = '[object Float32Array]',
      Je = '[object Float64Array]',
      Ot = '[object Int8Array]',
      Fn = '[object Int16Array]',
      bs = '[object Int32Array]',
      Kn = '[object Uint8Array]',
      ws = '[object Uint8ClampedArray]',
      wt = '[object Uint16Array]',
      Vt = '[object Uint32Array]',
      to = /\b__p \+= '';/g,
      lg = /\b(__p \+=) '' \+/g,
      ag = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Iu = /&(?:amp|lt|gt|quot|#39);/g,
      Lu = /[&<>"']/g,
      cg = RegExp(Iu.source),
      ug = RegExp(Lu.source),
      fg = /<%-([\s\S]+?)%>/g,
      dg = /<%([\s\S]+?)%>/g,
      Ou = /<%=([\s\S]+?)%>/g,
      hg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      pg = /^\w*$/,
      gg =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Gl = /[\\^$.*+?()[\]{}|]/g,
      _g = RegExp(Gl.source),
      Yl = /^\s+/,
      vg = /\s/,
      mg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      yg = /\{\n\/\* \[wrapped with (.+)\] \*/,
      bg = /,? & /,
      wg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      xg = /[()=,{}\[\]\/\s]/,
      $g = /\\(\\)?/g,
      Cg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Mu = /\w*$/,
      Pg = /^[-+]0x[0-9a-f]+$/i,
      Sg = /^0b[01]+$/i,
      Eg = /^\[object .+?Constructor\]$/,
      Tg = /^0o[0-7]+$/i,
      Ag = /^(?:0|[1-9]\d*)$/,
      kg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      no = /($^)/,
      Ig = /['\n\r\u2028\u2029\\]/g,
      ro = '\\ud800-\\udfff',
      Lg = '\\u0300-\\u036f',
      Og = '\\ufe20-\\ufe2f',
      Mg = '\\u20d0-\\u20ff',
      Bu = Lg + Og + Mg,
      Fu = '\\u2700-\\u27bf',
      Ru = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      Bg = '\\xac\\xb1\\xd7\\xf7',
      Fg = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      Rg = '\\u2000-\\u206f',
      Ng =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      Nu = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      Vu = '\\ufe0e\\ufe0f',
      Du = Bg + Fg + Rg + Ng,
      jl = "['’]",
      Vg = '[' + ro + ']',
      Hu = '[' + Du + ']',
      so = '[' + Bu + ']',
      Uu = '\\d+',
      Dg = '[' + Fu + ']',
      zu = '[' + Ru + ']',
      qu = '[^' + ro + Du + Uu + Fu + Ru + Nu + ']',
      Zl = '\\ud83c[\\udffb-\\udfff]',
      Hg = '(?:' + so + '|' + Zl + ')',
      Wu = '[^' + ro + ']',
      Xl = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      Jl = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      xs = '[' + Nu + ']',
      Ku = '\\u200d',
      Gu = '(?:' + zu + '|' + qu + ')',
      Ug = '(?:' + xs + '|' + qu + ')',
      Yu = '(?:' + jl + '(?:d|ll|m|re|s|t|ve))?',
      ju = '(?:' + jl + '(?:D|LL|M|RE|S|T|VE))?',
      Zu = Hg + '?',
      Xu = '[' + Vu + ']?',
      zg = '(?:' + Ku + '(?:' + [Wu, Xl, Jl].join('|') + ')' + Xu + Zu + ')*',
      qg = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      Wg = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      Ju = Xu + Zu + zg,
      Kg = '(?:' + [Dg, Xl, Jl].join('|') + ')' + Ju,
      Gg = '(?:' + [Wu + so + '?', so, Xl, Jl, Vg].join('|') + ')',
      Yg = RegExp(jl, 'g'),
      jg = RegExp(so, 'g'),
      Ql = RegExp(Zl + '(?=' + Zl + ')|' + Gg + Ju, 'g'),
      Zg = RegExp(
        [
          xs + '?' + zu + '+' + Yu + '(?=' + [Hu, xs, '$'].join('|') + ')',
          Ug + '+' + ju + '(?=' + [Hu, xs + Gu, '$'].join('|') + ')',
          xs + '?' + Gu + '+' + Yu,
          xs + '+' + ju,
          Wg,
          qg,
          Uu,
          Kg,
        ].join('|'),
        'g',
      ),
      Xg = RegExp('[' + Ku + ro + Bu + Vu + ']'),
      Jg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Qg = [
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
      e_ = -1,
      nt = {};
    (nt[Ke] =
      nt[Je] =
      nt[Ot] =
      nt[Fn] =
      nt[bs] =
      nt[Kn] =
      nt[ws] =
      nt[wt] =
      nt[Vt] =
        !0),
      (nt[gr] =
        nt[ys] =
        nt[Be] =
        nt[Bn] =
        nt[ze] =
        nt[_r] =
        nt[mr] =
        nt[yr] =
        nt[E] =
        nt[H] =
        nt[K] =
        nt[Q] =
        nt[ee] =
        nt[X] =
        nt[ye] =
          !1);
    var tt = {};
    (tt[gr] =
      tt[ys] =
      tt[Be] =
      tt[ze] =
      tt[Bn] =
      tt[_r] =
      tt[Ke] =
      tt[Je] =
      tt[Ot] =
      tt[Fn] =
      tt[bs] =
      tt[E] =
      tt[H] =
      tt[K] =
      tt[Q] =
      tt[ee] =
      tt[X] =
      tt[be] =
      tt[Kn] =
      tt[ws] =
      tt[wt] =
      tt[Vt] =
        !0),
      (tt[mr] = tt[yr] = tt[ye] = !1);
    var t_ = {
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
      n_ = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      r_ = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
      s_ = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      i_ = parseFloat,
      o_ = parseInt,
      Qu = typeof $i == 'object' && $i && $i.Object === Object && $i,
      l_ = typeof self == 'object' && self && self.Object === Object && self,
      xt = Qu || l_ || Function('return this')(),
      ea = t && !t.nodeType && t,
      qr = ea && !0 && e && !e.nodeType && e,
      ef = qr && qr.exports === ea,
      ta = ef && Qu.process,
      ln = (function () {
        try {
          var T = qr && qr.require && qr.require('util').types;
          return T || (ta && ta.binding && ta.binding('util'));
        } catch {}
      })(),
      tf = ln && ln.isArrayBuffer,
      nf = ln && ln.isDate,
      rf = ln && ln.isMap,
      sf = ln && ln.isRegExp,
      of = ln && ln.isSet,
      lf = ln && ln.isTypedArray;
    function Kt(T, U, N) {
      switch (N.length) {
        case 0:
          return T.call(U);
        case 1:
          return T.call(U, N[0]);
        case 2:
          return T.call(U, N[0], N[1]);
        case 3:
          return T.call(U, N[0], N[1], N[2]);
      }
      return T.apply(U, N);
    }
    function a_(T, U, N, fe) {
      for (var ke = -1, Ge = T == null ? 0 : T.length; ++ke < Ge; ) {
        var pt = T[ke];
        U(fe, pt, N(pt), T);
      }
      return fe;
    }
    function an(T, U) {
      for (
        var N = -1, fe = T == null ? 0 : T.length;
        ++N < fe && U(T[N], N, T) !== !1;

      );
      return T;
    }
    function c_(T, U) {
      for (var N = T == null ? 0 : T.length; N-- && U(T[N], N, T) !== !1; );
      return T;
    }
    function af(T, U) {
      for (var N = -1, fe = T == null ? 0 : T.length; ++N < fe; )
        if (!U(T[N], N, T)) return !1;
      return !0;
    }
    function br(T, U) {
      for (
        var N = -1, fe = T == null ? 0 : T.length, ke = 0, Ge = [];
        ++N < fe;

      ) {
        var pt = T[N];
        U(pt, N, T) && (Ge[ke++] = pt);
      }
      return Ge;
    }
    function io(T, U) {
      var N = T == null ? 0 : T.length;
      return !!N && $s(T, U, 0) > -1;
    }
    function na(T, U, N) {
      for (var fe = -1, ke = T == null ? 0 : T.length; ++fe < ke; )
        if (N(U, T[fe])) return !0;
      return !1;
    }
    function rt(T, U) {
      for (
        var N = -1, fe = T == null ? 0 : T.length, ke = Array(fe);
        ++N < fe;

      )
        ke[N] = U(T[N], N, T);
      return ke;
    }
    function wr(T, U) {
      for (var N = -1, fe = U.length, ke = T.length; ++N < fe; )
        T[ke + N] = U[N];
      return T;
    }
    function ra(T, U, N, fe) {
      var ke = -1,
        Ge = T == null ? 0 : T.length;
      for (fe && Ge && (N = T[++ke]); ++ke < Ge; ) N = U(N, T[ke], ke, T);
      return N;
    }
    function u_(T, U, N, fe) {
      var ke = T == null ? 0 : T.length;
      for (fe && ke && (N = T[--ke]); ke--; ) N = U(N, T[ke], ke, T);
      return N;
    }
    function sa(T, U) {
      for (var N = -1, fe = T == null ? 0 : T.length; ++N < fe; )
        if (U(T[N], N, T)) return !0;
      return !1;
    }
    var f_ = ia('length');
    function d_(T) {
      return T.split('');
    }
    function h_(T) {
      return T.match(wg) || [];
    }
    function cf(T, U, N) {
      var fe;
      return (
        N(T, function (ke, Ge, pt) {
          if (U(ke, Ge, pt)) return (fe = Ge), !1;
        }),
        fe
      );
    }
    function oo(T, U, N, fe) {
      for (var ke = T.length, Ge = N + (fe ? 1 : -1); fe ? Ge-- : ++Ge < ke; )
        if (U(T[Ge], Ge, T)) return Ge;
      return -1;
    }
    function $s(T, U, N) {
      return U === U ? P_(T, U, N) : oo(T, uf, N);
    }
    function p_(T, U, N, fe) {
      for (var ke = N - 1, Ge = T.length; ++ke < Ge; )
        if (fe(T[ke], U)) return ke;
      return -1;
    }
    function uf(T) {
      return T !== T;
    }
    function ff(T, U) {
      var N = T == null ? 0 : T.length;
      return N ? la(T, U) / N : hr;
    }
    function ia(T) {
      return function (U) {
        return U == null ? r : U[T];
      };
    }
    function oa(T) {
      return function (U) {
        return T == null ? r : T[U];
      };
    }
    function df(T, U, N, fe, ke) {
      return (
        ke(T, function (Ge, pt, et) {
          N = fe ? ((fe = !1), Ge) : U(N, Ge, pt, et);
        }),
        N
      );
    }
    function g_(T, U) {
      var N = T.length;
      for (T.sort(U); N--; ) T[N] = T[N].value;
      return T;
    }
    function la(T, U) {
      for (var N, fe = -1, ke = T.length; ++fe < ke; ) {
        var Ge = U(T[fe]);
        Ge !== r && (N = N === r ? Ge : N + Ge);
      }
      return N;
    }
    function aa(T, U) {
      for (var N = -1, fe = Array(T); ++N < T; ) fe[N] = U(N);
      return fe;
    }
    function __(T, U) {
      return rt(U, function (N) {
        return [N, T[N]];
      });
    }
    function hf(T) {
      return T && T.slice(0, vf(T) + 1).replace(Yl, '');
    }
    function Gt(T) {
      return function (U) {
        return T(U);
      };
    }
    function ca(T, U) {
      return rt(U, function (N) {
        return T[N];
      });
    }
    function oi(T, U) {
      return T.has(U);
    }
    function pf(T, U) {
      for (var N = -1, fe = T.length; ++N < fe && $s(U, T[N], 0) > -1; );
      return N;
    }
    function gf(T, U) {
      for (var N = T.length; N-- && $s(U, T[N], 0) > -1; );
      return N;
    }
    function v_(T, U) {
      for (var N = T.length, fe = 0; N--; ) T[N] === U && ++fe;
      return fe;
    }
    var m_ = oa(t_),
      y_ = oa(n_);
    function b_(T) {
      return '\\' + s_[T];
    }
    function w_(T, U) {
      return T == null ? r : T[U];
    }
    function Cs(T) {
      return Xg.test(T);
    }
    function x_(T) {
      return Jg.test(T);
    }
    function $_(T) {
      for (var U, N = []; !(U = T.next()).done; ) N.push(U.value);
      return N;
    }
    function ua(T) {
      var U = -1,
        N = Array(T.size);
      return (
        T.forEach(function (fe, ke) {
          N[++U] = [ke, fe];
        }),
        N
      );
    }
    function _f(T, U) {
      return function (N) {
        return T(U(N));
      };
    }
    function xr(T, U) {
      for (var N = -1, fe = T.length, ke = 0, Ge = []; ++N < fe; ) {
        var pt = T[N];
        (pt === U || pt === v) && ((T[N] = v), (Ge[ke++] = N));
      }
      return Ge;
    }
    function lo(T) {
      var U = -1,
        N = Array(T.size);
      return (
        T.forEach(function (fe) {
          N[++U] = fe;
        }),
        N
      );
    }
    function C_(T) {
      var U = -1,
        N = Array(T.size);
      return (
        T.forEach(function (fe) {
          N[++U] = [fe, fe];
        }),
        N
      );
    }
    function P_(T, U, N) {
      for (var fe = N - 1, ke = T.length; ++fe < ke; )
        if (T[fe] === U) return fe;
      return -1;
    }
    function S_(T, U, N) {
      for (var fe = N + 1; fe--; ) if (T[fe] === U) return fe;
      return fe;
    }
    function Ps(T) {
      return Cs(T) ? T_(T) : f_(T);
    }
    function $n(T) {
      return Cs(T) ? A_(T) : d_(T);
    }
    function vf(T) {
      for (var U = T.length; U-- && vg.test(T.charAt(U)); );
      return U;
    }
    var E_ = oa(r_);
    function T_(T) {
      for (var U = (Ql.lastIndex = 0); Ql.test(T); ) ++U;
      return U;
    }
    function A_(T) {
      return T.match(Ql) || [];
    }
    function k_(T) {
      return T.match(Zg) || [];
    }
    var I_ = function T(U) {
        U = U == null ? xt : Ss.defaults(xt.Object(), U, Ss.pick(xt, Qg));
        var N = U.Array,
          fe = U.Date,
          ke = U.Error,
          Ge = U.Function,
          pt = U.Math,
          et = U.Object,
          fa = U.RegExp,
          L_ = U.String,
          cn = U.TypeError,
          ao = N.prototype,
          O_ = Ge.prototype,
          Es = et.prototype,
          co = U['__core-js_shared__'],
          uo = O_.toString,
          Qe = Es.hasOwnProperty,
          M_ = 0,
          mf = (function () {
            var n = /[^.]+$/.exec((co && co.keys && co.keys.IE_PROTO) || '');
            return n ? 'Symbol(src)_1.' + n : '';
          })(),
          fo = Es.toString,
          B_ = uo.call(et),
          F_ = xt._,
          R_ = fa(
            '^' +
              uo
                .call(Qe)
                .replace(Gl, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?',
                ) +
              '$',
          ),
          ho = ef ? U.Buffer : r,
          $r = U.Symbol,
          po = U.Uint8Array,
          yf = ho ? ho.allocUnsafe : r,
          go = _f(et.getPrototypeOf, et),
          bf = et.create,
          wf = Es.propertyIsEnumerable,
          _o = ao.splice,
          xf = $r ? $r.isConcatSpreadable : r,
          li = $r ? $r.iterator : r,
          Wr = $r ? $r.toStringTag : r,
          vo = (function () {
            try {
              var n = Zr(et, 'defineProperty');
              return n({}, '', {}), n;
            } catch {}
          })(),
          N_ = U.clearTimeout !== xt.clearTimeout && U.clearTimeout,
          V_ = fe && fe.now !== xt.Date.now && fe.now,
          D_ = U.setTimeout !== xt.setTimeout && U.setTimeout,
          mo = pt.ceil,
          yo = pt.floor,
          da = et.getOwnPropertySymbols,
          H_ = ho ? ho.isBuffer : r,
          $f = U.isFinite,
          U_ = ao.join,
          z_ = _f(et.keys, et),
          gt = pt.max,
          kt = pt.min,
          q_ = fe.now,
          W_ = U.parseInt,
          Cf = pt.random,
          K_ = ao.reverse,
          ha = Zr(U, 'DataView'),
          ai = Zr(U, 'Map'),
          pa = Zr(U, 'Promise'),
          Ts = Zr(U, 'Set'),
          ci = Zr(U, 'WeakMap'),
          ui = Zr(et, 'create'),
          bo = ci && new ci(),
          As = {},
          G_ = Xr(ha),
          Y_ = Xr(ai),
          j_ = Xr(pa),
          Z_ = Xr(Ts),
          X_ = Xr(ci),
          wo = $r ? $r.prototype : r,
          fi = wo ? wo.valueOf : r,
          Pf = wo ? wo.toString : r;
        function g(n) {
          if (ot(n) && !Ie(n) && !(n instanceof Ne)) {
            if (n instanceof un) return n;
            if (Qe.call(n, '__wrapped__')) return Sd(n);
          }
          return new un(n);
        }
        var ks = (function () {
          function n() {}
          return function (s) {
            if (!st(s)) return {};
            if (bf) return bf(s);
            n.prototype = s;
            var l = new n();
            return (n.prototype = r), l;
          };
        })();
        function xo() {}
        function un(n, s) {
          (this.__wrapped__ = n),
            (this.__actions__ = []),
            (this.__chain__ = !!s),
            (this.__index__ = 0),
            (this.__values__ = r);
        }
        (g.templateSettings = {
          escape: fg,
          evaluate: dg,
          interpolate: Ou,
          variable: '',
          imports: { _: g },
        }),
          (g.prototype = xo.prototype),
          (g.prototype.constructor = g),
          (un.prototype = ks(xo.prototype)),
          (un.prototype.constructor = un);
        function Ne(n) {
          (this.__wrapped__ = n),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = At),
            (this.__views__ = []);
        }
        function J_() {
          var n = new Ne(this.__wrapped__);
          return (
            (n.__actions__ = Dt(this.__actions__)),
            (n.__dir__ = this.__dir__),
            (n.__filtered__ = this.__filtered__),
            (n.__iteratees__ = Dt(this.__iteratees__)),
            (n.__takeCount__ = this.__takeCount__),
            (n.__views__ = Dt(this.__views__)),
            n
          );
        }
        function Q_() {
          if (this.__filtered__) {
            var n = new Ne(this);
            (n.__dir__ = -1), (n.__filtered__ = !0);
          } else (n = this.clone()), (n.__dir__ *= -1);
          return n;
        }
        function ev() {
          var n = this.__wrapped__.value(),
            s = this.__dir__,
            l = Ie(n),
            u = s < 0,
            h = l ? n.length : 0,
            _ = dm(0, h, this.__views__),
            b = _.start,
            C = _.end,
            A = C - b,
            z = u ? C : b - 1,
            q = this.__iteratees__,
            j = q.length,
            oe = 0,
            ve = kt(A, this.__takeCount__);
          if (!l || (!u && h == A && ve == A)) return jf(n, this.__actions__);
          var Pe = [];
          e: for (; A-- && oe < ve; ) {
            z += s;
            for (var Oe = -1, Se = n[z]; ++Oe < j; ) {
              var Re = q[Oe],
                De = Re.iteratee,
                Zt = Re.type,
                Ft = De(Se);
              if (Zt == Tt) Se = Ft;
              else if (!Ft) {
                if (Zt == _e) continue e;
                break e;
              }
            }
            Pe[oe++] = Se;
          }
          return Pe;
        }
        (Ne.prototype = ks(xo.prototype)), (Ne.prototype.constructor = Ne);
        function Kr(n) {
          var s = -1,
            l = n == null ? 0 : n.length;
          for (this.clear(); ++s < l; ) {
            var u = n[s];
            this.set(u[0], u[1]);
          }
        }
        function tv() {
          (this.__data__ = ui ? ui(null) : {}), (this.size = 0);
        }
        function nv(n) {
          var s = this.has(n) && delete this.__data__[n];
          return (this.size -= s ? 1 : 0), s;
        }
        function rv(n) {
          var s = this.__data__;
          if (ui) {
            var l = s[n];
            return l === d ? r : l;
          }
          return Qe.call(s, n) ? s[n] : r;
        }
        function sv(n) {
          var s = this.__data__;
          return ui ? s[n] !== r : Qe.call(s, n);
        }
        function iv(n, s) {
          var l = this.__data__;
          return (
            (this.size += this.has(n) ? 0 : 1),
            (l[n] = ui && s === r ? d : s),
            this
          );
        }
        (Kr.prototype.clear = tv),
          (Kr.prototype.delete = nv),
          (Kr.prototype.get = rv),
          (Kr.prototype.has = sv),
          (Kr.prototype.set = iv);
        function Gn(n) {
          var s = -1,
            l = n == null ? 0 : n.length;
          for (this.clear(); ++s < l; ) {
            var u = n[s];
            this.set(u[0], u[1]);
          }
        }
        function ov() {
          (this.__data__ = []), (this.size = 0);
        }
        function lv(n) {
          var s = this.__data__,
            l = $o(s, n);
          if (l < 0) return !1;
          var u = s.length - 1;
          return l == u ? s.pop() : _o.call(s, l, 1), --this.size, !0;
        }
        function av(n) {
          var s = this.__data__,
            l = $o(s, n);
          return l < 0 ? r : s[l][1];
        }
        function cv(n) {
          return $o(this.__data__, n) > -1;
        }
        function uv(n, s) {
          var l = this.__data__,
            u = $o(l, n);
          return u < 0 ? (++this.size, l.push([n, s])) : (l[u][1] = s), this;
        }
        (Gn.prototype.clear = ov),
          (Gn.prototype.delete = lv),
          (Gn.prototype.get = av),
          (Gn.prototype.has = cv),
          (Gn.prototype.set = uv);
        function Yn(n) {
          var s = -1,
            l = n == null ? 0 : n.length;
          for (this.clear(); ++s < l; ) {
            var u = n[s];
            this.set(u[0], u[1]);
          }
        }
        function fv() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Kr(),
              map: new (ai || Gn)(),
              string: new Kr(),
            });
        }
        function dv(n) {
          var s = Bo(this, n).delete(n);
          return (this.size -= s ? 1 : 0), s;
        }
        function hv(n) {
          return Bo(this, n).get(n);
        }
        function pv(n) {
          return Bo(this, n).has(n);
        }
        function gv(n, s) {
          var l = Bo(this, n),
            u = l.size;
          return l.set(n, s), (this.size += l.size == u ? 0 : 1), this;
        }
        (Yn.prototype.clear = fv),
          (Yn.prototype.delete = dv),
          (Yn.prototype.get = hv),
          (Yn.prototype.has = pv),
          (Yn.prototype.set = gv);
        function Gr(n) {
          var s = -1,
            l = n == null ? 0 : n.length;
          for (this.__data__ = new Yn(); ++s < l; ) this.add(n[s]);
        }
        function _v(n) {
          return this.__data__.set(n, d), this;
        }
        function vv(n) {
          return this.__data__.has(n);
        }
        (Gr.prototype.add = Gr.prototype.push = _v), (Gr.prototype.has = vv);
        function Cn(n) {
          var s = (this.__data__ = new Gn(n));
          this.size = s.size;
        }
        function mv() {
          (this.__data__ = new Gn()), (this.size = 0);
        }
        function yv(n) {
          var s = this.__data__,
            l = s.delete(n);
          return (this.size = s.size), l;
        }
        function bv(n) {
          return this.__data__.get(n);
        }
        function wv(n) {
          return this.__data__.has(n);
        }
        function xv(n, s) {
          var l = this.__data__;
          if (l instanceof Gn) {
            var u = l.__data__;
            if (!ai || u.length < o - 1)
              return u.push([n, s]), (this.size = ++l.size), this;
            l = this.__data__ = new Yn(u);
          }
          return l.set(n, s), (this.size = l.size), this;
        }
        (Cn.prototype.clear = mv),
          (Cn.prototype.delete = yv),
          (Cn.prototype.get = bv),
          (Cn.prototype.has = wv),
          (Cn.prototype.set = xv);
        function Sf(n, s) {
          var l = Ie(n),
            u = !l && Jr(n),
            h = !l && !u && Tr(n),
            _ = !l && !u && !h && Ms(n),
            b = l || u || h || _,
            C = b ? aa(n.length, L_) : [],
            A = C.length;
          for (var z in n)
            (s || Qe.call(n, z)) &&
              !(
                b &&
                (z == 'length' ||
                  (h && (z == 'offset' || z == 'parent')) ||
                  (_ &&
                    (z == 'buffer' ||
                      z == 'byteLength' ||
                      z == 'byteOffset')) ||
                  Jn(z, A))
              ) &&
              C.push(z);
          return C;
        }
        function Ef(n) {
          var s = n.length;
          return s ? n[Pa(0, s - 1)] : r;
        }
        function $v(n, s) {
          return Fo(Dt(n), Yr(s, 0, n.length));
        }
        function Cv(n) {
          return Fo(Dt(n));
        }
        function ga(n, s, l) {
          ((l !== r && !Pn(n[s], l)) || (l === r && !(s in n))) && jn(n, s, l);
        }
        function di(n, s, l) {
          var u = n[s];
          (!(Qe.call(n, s) && Pn(u, l)) || (l === r && !(s in n))) &&
            jn(n, s, l);
        }
        function $o(n, s) {
          for (var l = n.length; l--; ) if (Pn(n[l][0], s)) return l;
          return -1;
        }
        function Pv(n, s, l, u) {
          return (
            Cr(n, function (h, _, b) {
              s(u, h, l(h), b);
            }),
            u
          );
        }
        function Tf(n, s) {
          return n && Nn(s, mt(s), n);
        }
        function Sv(n, s) {
          return n && Nn(s, Ut(s), n);
        }
        function jn(n, s, l) {
          s == '__proto__' && vo
            ? vo(n, s, {
                configurable: !0,
                enumerable: !0,
                value: l,
                writable: !0,
              })
            : (n[s] = l);
        }
        function _a(n, s) {
          for (var l = -1, u = s.length, h = N(u), _ = n == null; ++l < u; )
            h[l] = _ ? r : Za(n, s[l]);
          return h;
        }
        function Yr(n, s, l) {
          return (
            n === n &&
              (l !== r && (n = n <= l ? n : l),
              s !== r && (n = n >= s ? n : s)),
            n
          );
        }
        function fn(n, s, l, u, h, _) {
          var b,
            C = s & m,
            A = s & y,
            z = s & S;
          if ((l && (b = h ? l(n, u, h, _) : l(n)), b !== r)) return b;
          if (!st(n)) return n;
          var q = Ie(n);
          if (q) {
            if (((b = pm(n)), !C)) return Dt(n, b);
          } else {
            var j = It(n),
              oe = j == yr || j == w;
            if (Tr(n)) return Jf(n, C);
            if (j == K || j == gr || (oe && !h)) {
              if (((b = A || oe ? {} : vd(n)), !C))
                return A ? rm(n, Sv(b, n)) : nm(n, Tf(b, n));
            } else {
              if (!tt[j]) return h ? n : {};
              b = gm(n, j, C);
            }
          }
          _ || (_ = new Cn());
          var ve = _.get(n);
          if (ve) return ve;
          _.set(n, b),
            Kd(n)
              ? n.forEach(function (Se) {
                  b.add(fn(Se, s, l, Se, n, _));
                })
              : qd(n) &&
                n.forEach(function (Se, Re) {
                  b.set(Re, fn(Se, s, l, Re, n, _));
                });
          var Pe = z ? (A ? Fa : Ba) : A ? Ut : mt,
            Oe = q ? r : Pe(n);
          return (
            an(Oe || n, function (Se, Re) {
              Oe && ((Re = Se), (Se = n[Re])),
                di(b, Re, fn(Se, s, l, Re, n, _));
            }),
            b
          );
        }
        function Ev(n) {
          var s = mt(n);
          return function (l) {
            return Af(l, n, s);
          };
        }
        function Af(n, s, l) {
          var u = l.length;
          if (n == null) return !u;
          for (n = et(n); u--; ) {
            var h = l[u],
              _ = s[h],
              b = n[h];
            if ((b === r && !(h in n)) || !_(b)) return !1;
          }
          return !0;
        }
        function kf(n, s, l) {
          if (typeof n != 'function') throw new cn(c);
          return yi(function () {
            n.apply(r, l);
          }, s);
        }
        function hi(n, s, l, u) {
          var h = -1,
            _ = io,
            b = !0,
            C = n.length,
            A = [],
            z = s.length;
          if (!C) return A;
          l && (s = rt(s, Gt(l))),
            u
              ? ((_ = na), (b = !1))
              : s.length >= o && ((_ = oi), (b = !1), (s = new Gr(s)));
          e: for (; ++h < C; ) {
            var q = n[h],
              j = l == null ? q : l(q);
            if (((q = u || q !== 0 ? q : 0), b && j === j)) {
              for (var oe = z; oe--; ) if (s[oe] === j) continue e;
              A.push(q);
            } else _(s, j, u) || A.push(q);
          }
          return A;
        }
        var Cr = rd(Rn),
          If = rd(ma, !0);
        function Tv(n, s) {
          var l = !0;
          return (
            Cr(n, function (u, h, _) {
              return (l = !!s(u, h, _)), l;
            }),
            l
          );
        }
        function Co(n, s, l) {
          for (var u = -1, h = n.length; ++u < h; ) {
            var _ = n[u],
              b = s(_);
            if (b != null && (C === r ? b === b && !jt(b) : l(b, C)))
              var C = b,
                A = _;
          }
          return A;
        }
        function Av(n, s, l, u) {
          var h = n.length;
          for (
            l = Le(l),
              l < 0 && (l = -l > h ? 0 : h + l),
              u = u === r || u > h ? h : Le(u),
              u < 0 && (u += h),
              u = l > u ? 0 : Yd(u);
            l < u;

          )
            n[l++] = s;
          return n;
        }
        function Lf(n, s) {
          var l = [];
          return (
            Cr(n, function (u, h, _) {
              s(u, h, _) && l.push(u);
            }),
            l
          );
        }
        function $t(n, s, l, u, h) {
          var _ = -1,
            b = n.length;
          for (l || (l = vm), h || (h = []); ++_ < b; ) {
            var C = n[_];
            s > 0 && l(C)
              ? s > 1
                ? $t(C, s - 1, l, u, h)
                : wr(h, C)
              : u || (h[h.length] = C);
          }
          return h;
        }
        var va = sd(),
          Of = sd(!0);
        function Rn(n, s) {
          return n && va(n, s, mt);
        }
        function ma(n, s) {
          return n && Of(n, s, mt);
        }
        function Po(n, s) {
          return br(s, function (l) {
            return Qn(n[l]);
          });
        }
        function jr(n, s) {
          s = Sr(s, n);
          for (var l = 0, u = s.length; n != null && l < u; ) n = n[Vn(s[l++])];
          return l && l == u ? n : r;
        }
        function Mf(n, s, l) {
          var u = s(n);
          return Ie(n) ? u : wr(u, l(n));
        }
        function Mt(n) {
          return n == null
            ? n === r
              ? ge
              : Z
            : Wr && Wr in et(n)
              ? fm(n)
              : Cm(n);
        }
        function ya(n, s) {
          return n > s;
        }
        function kv(n, s) {
          return n != null && Qe.call(n, s);
        }
        function Iv(n, s) {
          return n != null && s in et(n);
        }
        function Lv(n, s, l) {
          return n >= kt(s, l) && n < gt(s, l);
        }
        function ba(n, s, l) {
          for (
            var u = l ? na : io,
              h = n[0].length,
              _ = n.length,
              b = _,
              C = N(_),
              A = 1 / 0,
              z = [];
            b--;

          ) {
            var q = n[b];
            b && s && (q = rt(q, Gt(s))),
              (A = kt(q.length, A)),
              (C[b] =
                !l && (s || (h >= 120 && q.length >= 120))
                  ? new Gr(b && q)
                  : r);
          }
          q = n[0];
          var j = -1,
            oe = C[0];
          e: for (; ++j < h && z.length < A; ) {
            var ve = q[j],
              Pe = s ? s(ve) : ve;
            if (
              ((ve = l || ve !== 0 ? ve : 0), !(oe ? oi(oe, Pe) : u(z, Pe, l)))
            ) {
              for (b = _; --b; ) {
                var Oe = C[b];
                if (!(Oe ? oi(Oe, Pe) : u(n[b], Pe, l))) continue e;
              }
              oe && oe.push(Pe), z.push(ve);
            }
          }
          return z;
        }
        function Ov(n, s, l, u) {
          return (
            Rn(n, function (h, _, b) {
              s(u, l(h), _, b);
            }),
            u
          );
        }
        function pi(n, s, l) {
          (s = Sr(s, n)), (n = wd(n, s));
          var u = n == null ? n : n[Vn(hn(s))];
          return u == null ? r : Kt(u, n, l);
        }
        function Bf(n) {
          return ot(n) && Mt(n) == gr;
        }
        function Mv(n) {
          return ot(n) && Mt(n) == Be;
        }
        function Bv(n) {
          return ot(n) && Mt(n) == _r;
        }
        function gi(n, s, l, u, h) {
          return n === s
            ? !0
            : n == null || s == null || (!ot(n) && !ot(s))
              ? n !== n && s !== s
              : Fv(n, s, l, u, gi, h);
        }
        function Fv(n, s, l, u, h, _) {
          var b = Ie(n),
            C = Ie(s),
            A = b ? ys : It(n),
            z = C ? ys : It(s);
          (A = A == gr ? K : A), (z = z == gr ? K : z);
          var q = A == K,
            j = z == K,
            oe = A == z;
          if (oe && Tr(n)) {
            if (!Tr(s)) return !1;
            (b = !0), (q = !1);
          }
          if (oe && !q)
            return (
              _ || (_ = new Cn()),
              b || Ms(n) ? pd(n, s, l, u, h, _) : cm(n, s, A, l, u, h, _)
            );
          if (!(l & R)) {
            var ve = q && Qe.call(n, '__wrapped__'),
              Pe = j && Qe.call(s, '__wrapped__');
            if (ve || Pe) {
              var Oe = ve ? n.value() : n,
                Se = Pe ? s.value() : s;
              return _ || (_ = new Cn()), h(Oe, Se, l, u, _);
            }
          }
          return oe ? (_ || (_ = new Cn()), um(n, s, l, u, h, _)) : !1;
        }
        function Rv(n) {
          return ot(n) && It(n) == E;
        }
        function wa(n, s, l, u) {
          var h = l.length,
            _ = h,
            b = !u;
          if (n == null) return !_;
          for (n = et(n); h--; ) {
            var C = l[h];
            if (b && C[2] ? C[1] !== n[C[0]] : !(C[0] in n)) return !1;
          }
          for (; ++h < _; ) {
            C = l[h];
            var A = C[0],
              z = n[A],
              q = C[1];
            if (b && C[2]) {
              if (z === r && !(A in n)) return !1;
            } else {
              var j = new Cn();
              if (u) var oe = u(z, q, A, n, s, j);
              if (!(oe === r ? gi(q, z, R | k, u, j) : oe)) return !1;
            }
          }
          return !0;
        }
        function Ff(n) {
          if (!st(n) || ym(n)) return !1;
          var s = Qn(n) ? R_ : Eg;
          return s.test(Xr(n));
        }
        function Nv(n) {
          return ot(n) && Mt(n) == Q;
        }
        function Vv(n) {
          return ot(n) && It(n) == ee;
        }
        function Dv(n) {
          return ot(n) && Uo(n.length) && !!nt[Mt(n)];
        }
        function Rf(n) {
          return typeof n == 'function'
            ? n
            : n == null
              ? zt
              : typeof n == 'object'
                ? Ie(n)
                  ? Df(n[0], n[1])
                  : Vf(n)
                : ih(n);
        }
        function xa(n) {
          if (!mi(n)) return z_(n);
          var s = [];
          for (var l in et(n)) Qe.call(n, l) && l != 'constructor' && s.push(l);
          return s;
        }
        function Hv(n) {
          if (!st(n)) return $m(n);
          var s = mi(n),
            l = [];
          for (var u in n)
            (u == 'constructor' && (s || !Qe.call(n, u))) || l.push(u);
          return l;
        }
        function $a(n, s) {
          return n < s;
        }
        function Nf(n, s) {
          var l = -1,
            u = Ht(n) ? N(n.length) : [];
          return (
            Cr(n, function (h, _, b) {
              u[++l] = s(h, _, b);
            }),
            u
          );
        }
        function Vf(n) {
          var s = Na(n);
          return s.length == 1 && s[0][2]
            ? yd(s[0][0], s[0][1])
            : function (l) {
                return l === n || wa(l, n, s);
              };
        }
        function Df(n, s) {
          return Da(n) && md(s)
            ? yd(Vn(n), s)
            : function (l) {
                var u = Za(l, n);
                return u === r && u === s ? Xa(l, n) : gi(s, u, R | k);
              };
        }
        function So(n, s, l, u, h) {
          n !== s &&
            va(
              s,
              function (_, b) {
                if ((h || (h = new Cn()), st(_))) Uv(n, s, b, l, So, u, h);
                else {
                  var C = u ? u(Ua(n, b), _, b + '', n, s, h) : r;
                  C === r && (C = _), ga(n, b, C);
                }
              },
              Ut,
            );
        }
        function Uv(n, s, l, u, h, _, b) {
          var C = Ua(n, l),
            A = Ua(s, l),
            z = b.get(A);
          if (z) {
            ga(n, l, z);
            return;
          }
          var q = _ ? _(C, A, l + '', n, s, b) : r,
            j = q === r;
          if (j) {
            var oe = Ie(A),
              ve = !oe && Tr(A),
              Pe = !oe && !ve && Ms(A);
            (q = A),
              oe || ve || Pe
                ? Ie(C)
                  ? (q = C)
                  : ut(C)
                    ? (q = Dt(C))
                    : ve
                      ? ((j = !1), (q = Jf(A, !0)))
                      : Pe
                        ? ((j = !1), (q = Qf(A, !0)))
                        : (q = [])
                : bi(A) || Jr(A)
                  ? ((q = C),
                    Jr(C) ? (q = jd(C)) : (!st(C) || Qn(C)) && (q = vd(A)))
                  : (j = !1);
          }
          j && (b.set(A, q), h(q, A, u, _, b), b.delete(A)), ga(n, l, q);
        }
        function Hf(n, s) {
          var l = n.length;
          if (l) return (s += s < 0 ? l : 0), Jn(s, l) ? n[s] : r;
        }
        function Uf(n, s, l) {
          s.length
            ? (s = rt(s, function (_) {
                return Ie(_)
                  ? function (b) {
                      return jr(b, _.length === 1 ? _[0] : _);
                    }
                  : _;
              }))
            : (s = [zt]);
          var u = -1;
          s = rt(s, Gt($e()));
          var h = Nf(n, function (_, b, C) {
            var A = rt(s, function (z) {
              return z(_);
            });
            return { criteria: A, index: ++u, value: _ };
          });
          return g_(h, function (_, b) {
            return tm(_, b, l);
          });
        }
        function zv(n, s) {
          return zf(n, s, function (l, u) {
            return Xa(n, u);
          });
        }
        function zf(n, s, l) {
          for (var u = -1, h = s.length, _ = {}; ++u < h; ) {
            var b = s[u],
              C = jr(n, b);
            l(C, b) && _i(_, Sr(b, n), C);
          }
          return _;
        }
        function qv(n) {
          return function (s) {
            return jr(s, n);
          };
        }
        function Ca(n, s, l, u) {
          var h = u ? p_ : $s,
            _ = -1,
            b = s.length,
            C = n;
          for (n === s && (s = Dt(s)), l && (C = rt(n, Gt(l))); ++_ < b; )
            for (
              var A = 0, z = s[_], q = l ? l(z) : z;
              (A = h(C, q, A, u)) > -1;

            )
              C !== n && _o.call(C, A, 1), _o.call(n, A, 1);
          return n;
        }
        function qf(n, s) {
          for (var l = n ? s.length : 0, u = l - 1; l--; ) {
            var h = s[l];
            if (l == u || h !== _) {
              var _ = h;
              Jn(h) ? _o.call(n, h, 1) : Ta(n, h);
            }
          }
          return n;
        }
        function Pa(n, s) {
          return n + yo(Cf() * (s - n + 1));
        }
        function Wv(n, s, l, u) {
          for (var h = -1, _ = gt(mo((s - n) / (l || 1)), 0), b = N(_); _--; )
            (b[u ? _ : ++h] = n), (n += l);
          return b;
        }
        function Sa(n, s) {
          var l = '';
          if (!n || s < 1 || s > Ue) return l;
          do s % 2 && (l += n), (s = yo(s / 2)), s && (n += n);
          while (s);
          return l;
        }
        function Fe(n, s) {
          return za(bd(n, s, zt), n + '');
        }
        function Kv(n) {
          return Ef(Bs(n));
        }
        function Gv(n, s) {
          var l = Bs(n);
          return Fo(l, Yr(s, 0, l.length));
        }
        function _i(n, s, l, u) {
          if (!st(n)) return n;
          s = Sr(s, n);
          for (
            var h = -1, _ = s.length, b = _ - 1, C = n;
            C != null && ++h < _;

          ) {
            var A = Vn(s[h]),
              z = l;
            if (A === '__proto__' || A === 'constructor' || A === 'prototype')
              return n;
            if (h != b) {
              var q = C[A];
              (z = u ? u(q, A, C) : r),
                z === r && (z = st(q) ? q : Jn(s[h + 1]) ? [] : {});
            }
            di(C, A, z), (C = C[A]);
          }
          return n;
        }
        var Wf = bo
            ? function (n, s) {
                return bo.set(n, s), n;
              }
            : zt,
          Yv = vo
            ? function (n, s) {
                return vo(n, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Qa(s),
                  writable: !0,
                });
              }
            : zt;
        function jv(n) {
          return Fo(Bs(n));
        }
        function dn(n, s, l) {
          var u = -1,
            h = n.length;
          s < 0 && (s = -s > h ? 0 : h + s),
            (l = l > h ? h : l),
            l < 0 && (l += h),
            (h = s > l ? 0 : (l - s) >>> 0),
            (s >>>= 0);
          for (var _ = N(h); ++u < h; ) _[u] = n[u + s];
          return _;
        }
        function Zv(n, s) {
          var l;
          return (
            Cr(n, function (u, h, _) {
              return (l = s(u, h, _)), !l;
            }),
            !!l
          );
        }
        function Eo(n, s, l) {
          var u = 0,
            h = n == null ? u : n.length;
          if (typeof s == 'number' && s === s && h <= Mn) {
            for (; u < h; ) {
              var _ = (u + h) >>> 1,
                b = n[_];
              b !== null && !jt(b) && (l ? b <= s : b < s)
                ? (u = _ + 1)
                : (h = _);
            }
            return h;
          }
          return Ea(n, s, zt, l);
        }
        function Ea(n, s, l, u) {
          var h = 0,
            _ = n == null ? 0 : n.length;
          if (_ === 0) return 0;
          s = l(s);
          for (
            var b = s !== s, C = s === null, A = jt(s), z = s === r;
            h < _;

          ) {
            var q = yo((h + _) / 2),
              j = l(n[q]),
              oe = j !== r,
              ve = j === null,
              Pe = j === j,
              Oe = jt(j);
            if (b) var Se = u || Pe;
            else
              z
                ? (Se = Pe && (u || oe))
                : C
                  ? (Se = Pe && oe && (u || !ve))
                  : A
                    ? (Se = Pe && oe && !ve && (u || !Oe))
                    : ve || Oe
                      ? (Se = !1)
                      : (Se = u ? j <= s : j < s);
            Se ? (h = q + 1) : (_ = q);
          }
          return kt(_, pr);
        }
        function Kf(n, s) {
          for (var l = -1, u = n.length, h = 0, _ = []; ++l < u; ) {
            var b = n[l],
              C = s ? s(b) : b;
            if (!l || !Pn(C, A)) {
              var A = C;
              _[h++] = b === 0 ? 0 : b;
            }
          }
          return _;
        }
        function Gf(n) {
          return typeof n == 'number' ? n : jt(n) ? hr : +n;
        }
        function Yt(n) {
          if (typeof n == 'string') return n;
          if (Ie(n)) return rt(n, Yt) + '';
          if (jt(n)) return Pf ? Pf.call(n) : '';
          var s = n + '';
          return s == '0' && 1 / n == -Ye ? '-0' : s;
        }
        function Pr(n, s, l) {
          var u = -1,
            h = io,
            _ = n.length,
            b = !0,
            C = [],
            A = C;
          if (l) (b = !1), (h = na);
          else if (_ >= o) {
            var z = s ? null : lm(n);
            if (z) return lo(z);
            (b = !1), (h = oi), (A = new Gr());
          } else A = s ? [] : C;
          e: for (; ++u < _; ) {
            var q = n[u],
              j = s ? s(q) : q;
            if (((q = l || q !== 0 ? q : 0), b && j === j)) {
              for (var oe = A.length; oe--; ) if (A[oe] === j) continue e;
              s && A.push(j), C.push(q);
            } else h(A, j, l) || (A !== C && A.push(j), C.push(q));
          }
          return C;
        }
        function Ta(n, s) {
          return (
            (s = Sr(s, n)), (n = wd(n, s)), n == null || delete n[Vn(hn(s))]
          );
        }
        function Yf(n, s, l, u) {
          return _i(n, s, l(jr(n, s)), u);
        }
        function To(n, s, l, u) {
          for (
            var h = n.length, _ = u ? h : -1;
            (u ? _-- : ++_ < h) && s(n[_], _, n);

          );
          return l
            ? dn(n, u ? 0 : _, u ? _ + 1 : h)
            : dn(n, u ? _ + 1 : 0, u ? h : _);
        }
        function jf(n, s) {
          var l = n;
          return (
            l instanceof Ne && (l = l.value()),
            ra(
              s,
              function (u, h) {
                return h.func.apply(h.thisArg, wr([u], h.args));
              },
              l,
            )
          );
        }
        function Aa(n, s, l) {
          var u = n.length;
          if (u < 2) return u ? Pr(n[0]) : [];
          for (var h = -1, _ = N(u); ++h < u; )
            for (var b = n[h], C = -1; ++C < u; )
              C != h && (_[h] = hi(_[h] || b, n[C], s, l));
          return Pr($t(_, 1), s, l);
        }
        function Zf(n, s, l) {
          for (var u = -1, h = n.length, _ = s.length, b = {}; ++u < h; ) {
            var C = u < _ ? s[u] : r;
            l(b, n[u], C);
          }
          return b;
        }
        function ka(n) {
          return ut(n) ? n : [];
        }
        function Ia(n) {
          return typeof n == 'function' ? n : zt;
        }
        function Sr(n, s) {
          return Ie(n) ? n : Da(n, s) ? [n] : Pd(je(n));
        }
        var Xv = Fe;
        function Er(n, s, l) {
          var u = n.length;
          return (l = l === r ? u : l), !s && l >= u ? n : dn(n, s, l);
        }
        var Xf =
          N_ ||
          function (n) {
            return xt.clearTimeout(n);
          };
        function Jf(n, s) {
          if (s) return n.slice();
          var l = n.length,
            u = yf ? yf(l) : new n.constructor(l);
          return n.copy(u), u;
        }
        function La(n) {
          var s = new n.constructor(n.byteLength);
          return new po(s).set(new po(n)), s;
        }
        function Jv(n, s) {
          var l = s ? La(n.buffer) : n.buffer;
          return new n.constructor(l, n.byteOffset, n.byteLength);
        }
        function Qv(n) {
          var s = new n.constructor(n.source, Mu.exec(n));
          return (s.lastIndex = n.lastIndex), s;
        }
        function em(n) {
          return fi ? et(fi.call(n)) : {};
        }
        function Qf(n, s) {
          var l = s ? La(n.buffer) : n.buffer;
          return new n.constructor(l, n.byteOffset, n.length);
        }
        function ed(n, s) {
          if (n !== s) {
            var l = n !== r,
              u = n === null,
              h = n === n,
              _ = jt(n),
              b = s !== r,
              C = s === null,
              A = s === s,
              z = jt(s);
            if (
              (!C && !z && !_ && n > s) ||
              (_ && b && A && !C && !z) ||
              (u && b && A) ||
              (!l && A) ||
              !h
            )
              return 1;
            if (
              (!u && !_ && !z && n < s) ||
              (z && l && h && !u && !_) ||
              (C && l && h) ||
              (!b && h) ||
              !A
            )
              return -1;
          }
          return 0;
        }
        function tm(n, s, l) {
          for (
            var u = -1,
              h = n.criteria,
              _ = s.criteria,
              b = h.length,
              C = l.length;
            ++u < b;

          ) {
            var A = ed(h[u], _[u]);
            if (A) {
              if (u >= C) return A;
              var z = l[u];
              return A * (z == 'desc' ? -1 : 1);
            }
          }
          return n.index - s.index;
        }
        function td(n, s, l, u) {
          for (
            var h = -1,
              _ = n.length,
              b = l.length,
              C = -1,
              A = s.length,
              z = gt(_ - b, 0),
              q = N(A + z),
              j = !u;
            ++C < A;

          )
            q[C] = s[C];
          for (; ++h < b; ) (j || h < _) && (q[l[h]] = n[h]);
          for (; z--; ) q[C++] = n[h++];
          return q;
        }
        function nd(n, s, l, u) {
          for (
            var h = -1,
              _ = n.length,
              b = -1,
              C = l.length,
              A = -1,
              z = s.length,
              q = gt(_ - C, 0),
              j = N(q + z),
              oe = !u;
            ++h < q;

          )
            j[h] = n[h];
          for (var ve = h; ++A < z; ) j[ve + A] = s[A];
          for (; ++b < C; ) (oe || h < _) && (j[ve + l[b]] = n[h++]);
          return j;
        }
        function Dt(n, s) {
          var l = -1,
            u = n.length;
          for (s || (s = N(u)); ++l < u; ) s[l] = n[l];
          return s;
        }
        function Nn(n, s, l, u) {
          var h = !l;
          l || (l = {});
          for (var _ = -1, b = s.length; ++_ < b; ) {
            var C = s[_],
              A = u ? u(l[C], n[C], C, l, n) : r;
            A === r && (A = n[C]), h ? jn(l, C, A) : di(l, C, A);
          }
          return l;
        }
        function nm(n, s) {
          return Nn(n, Va(n), s);
        }
        function rm(n, s) {
          return Nn(n, gd(n), s);
        }
        function Ao(n, s) {
          return function (l, u) {
            var h = Ie(l) ? a_ : Pv,
              _ = s ? s() : {};
            return h(l, n, $e(u, 2), _);
          };
        }
        function Is(n) {
          return Fe(function (s, l) {
            var u = -1,
              h = l.length,
              _ = h > 1 ? l[h - 1] : r,
              b = h > 2 ? l[2] : r;
            for (
              _ = n.length > 3 && typeof _ == 'function' ? (h--, _) : r,
                b && Bt(l[0], l[1], b) && ((_ = h < 3 ? r : _), (h = 1)),
                s = et(s);
              ++u < h;

            ) {
              var C = l[u];
              C && n(s, C, u, _);
            }
            return s;
          });
        }
        function rd(n, s) {
          return function (l, u) {
            if (l == null) return l;
            if (!Ht(l)) return n(l, u);
            for (
              var h = l.length, _ = s ? h : -1, b = et(l);
              (s ? _-- : ++_ < h) && u(b[_], _, b) !== !1;

            );
            return l;
          };
        }
        function sd(n) {
          return function (s, l, u) {
            for (var h = -1, _ = et(s), b = u(s), C = b.length; C--; ) {
              var A = b[n ? C : ++h];
              if (l(_[A], A, _) === !1) break;
            }
            return s;
          };
        }
        function sm(n, s, l) {
          var u = s & O,
            h = vi(n);
          function _() {
            var b = this && this !== xt && this instanceof _ ? h : n;
            return b.apply(u ? l : this, arguments);
          }
          return _;
        }
        function id(n) {
          return function (s) {
            s = je(s);
            var l = Cs(s) ? $n(s) : r,
              u = l ? l[0] : s.charAt(0),
              h = l ? Er(l, 1).join('') : s.slice(1);
            return u[n]() + h;
          };
        }
        function Ls(n) {
          return function (s) {
            return ra(rh(nh(s).replace(Yg, '')), n, '');
          };
        }
        function vi(n) {
          return function () {
            var s = arguments;
            switch (s.length) {
              case 0:
                return new n();
              case 1:
                return new n(s[0]);
              case 2:
                return new n(s[0], s[1]);
              case 3:
                return new n(s[0], s[1], s[2]);
              case 4:
                return new n(s[0], s[1], s[2], s[3]);
              case 5:
                return new n(s[0], s[1], s[2], s[3], s[4]);
              case 6:
                return new n(s[0], s[1], s[2], s[3], s[4], s[5]);
              case 7:
                return new n(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
            }
            var l = ks(n.prototype),
              u = n.apply(l, s);
            return st(u) ? u : l;
          };
        }
        function im(n, s, l) {
          var u = vi(n);
          function h() {
            for (var _ = arguments.length, b = N(_), C = _, A = Os(h); C--; )
              b[C] = arguments[C];
            var z = _ < 3 && b[0] !== A && b[_ - 1] !== A ? [] : xr(b, A);
            if (((_ -= z.length), _ < l))
              return ud(n, s, ko, h.placeholder, r, b, z, r, r, l - _);
            var q = this && this !== xt && this instanceof h ? u : n;
            return Kt(q, this, b);
          }
          return h;
        }
        function od(n) {
          return function (s, l, u) {
            var h = et(s);
            if (!Ht(s)) {
              var _ = $e(l, 3);
              (s = mt(s)),
                (l = function (C) {
                  return _(h[C], C, h);
                });
            }
            var b = n(s, l, u);
            return b > -1 ? h[_ ? s[b] : b] : r;
          };
        }
        function ld(n) {
          return Xn(function (s) {
            var l = s.length,
              u = l,
              h = un.prototype.thru;
            for (n && s.reverse(); u--; ) {
              var _ = s[u];
              if (typeof _ != 'function') throw new cn(c);
              if (h && !b && Mo(_) == 'wrapper') var b = new un([], !0);
            }
            for (u = b ? u : l; ++u < l; ) {
              _ = s[u];
              var C = Mo(_),
                A = C == 'wrapper' ? Ra(_) : r;
              A &&
              Ha(A[0]) &&
              A[1] == (te | I | V | D) &&
              !A[4].length &&
              A[9] == 1
                ? (b = b[Mo(A[0])].apply(b, A[3]))
                : (b = _.length == 1 && Ha(_) ? b[C]() : b.thru(_));
            }
            return function () {
              var z = arguments,
                q = z[0];
              if (b && z.length == 1 && Ie(q)) return b.plant(q).value();
              for (var j = 0, oe = l ? s[j].apply(this, z) : q; ++j < l; )
                oe = s[j].call(this, oe);
              return oe;
            };
          });
        }
        function ko(n, s, l, u, h, _, b, C, A, z) {
          var q = s & te,
            j = s & O,
            oe = s & x,
            ve = s & (I | F),
            Pe = s & ie,
            Oe = oe ? r : vi(n);
          function Se() {
            for (var Re = arguments.length, De = N(Re), Zt = Re; Zt--; )
              De[Zt] = arguments[Zt];
            if (ve)
              var Ft = Os(Se),
                Xt = v_(De, Ft);
            if (
              (u && (De = td(De, u, h, ve)),
              _ && (De = nd(De, _, b, ve)),
              (Re -= Xt),
              ve && Re < z)
            ) {
              var ft = xr(De, Ft);
              return ud(n, s, ko, Se.placeholder, l, De, ft, C, A, z - Re);
            }
            var Sn = j ? l : this,
              tr = oe ? Sn[n] : n;
            return (
              (Re = De.length),
              C ? (De = Pm(De, C)) : Pe && Re > 1 && De.reverse(),
              q && A < Re && (De.length = A),
              this && this !== xt && this instanceof Se && (tr = Oe || vi(tr)),
              tr.apply(Sn, De)
            );
          }
          return Se;
        }
        function ad(n, s) {
          return function (l, u) {
            return Ov(l, n, s(u), {});
          };
        }
        function Io(n, s) {
          return function (l, u) {
            var h;
            if (l === r && u === r) return s;
            if ((l !== r && (h = l), u !== r)) {
              if (h === r) return u;
              typeof l == 'string' || typeof u == 'string'
                ? ((l = Yt(l)), (u = Yt(u)))
                : ((l = Gf(l)), (u = Gf(u))),
                (h = n(l, u));
            }
            return h;
          };
        }
        function Oa(n) {
          return Xn(function (s) {
            return (
              (s = rt(s, Gt($e()))),
              Fe(function (l) {
                var u = this;
                return n(s, function (h) {
                  return Kt(h, u, l);
                });
              })
            );
          });
        }
        function Lo(n, s) {
          s = s === r ? ' ' : Yt(s);
          var l = s.length;
          if (l < 2) return l ? Sa(s, n) : s;
          var u = Sa(s, mo(n / Ps(s)));
          return Cs(s) ? Er($n(u), 0, n).join('') : u.slice(0, n);
        }
        function om(n, s, l, u) {
          var h = s & O,
            _ = vi(n);
          function b() {
            for (
              var C = -1,
                A = arguments.length,
                z = -1,
                q = u.length,
                j = N(q + A),
                oe = this && this !== xt && this instanceof b ? _ : n;
              ++z < q;

            )
              j[z] = u[z];
            for (; A--; ) j[z++] = arguments[++C];
            return Kt(oe, h ? l : this, j);
          }
          return b;
        }
        function cd(n) {
          return function (s, l, u) {
            return (
              u && typeof u != 'number' && Bt(s, l, u) && (l = u = r),
              (s = er(s)),
              l === r ? ((l = s), (s = 0)) : (l = er(l)),
              (u = u === r ? (s < l ? 1 : -1) : er(u)),
              Wv(s, l, u, n)
            );
          };
        }
        function Oo(n) {
          return function (s, l) {
            return (
              (typeof s == 'string' && typeof l == 'string') ||
                ((s = pn(s)), (l = pn(l))),
              n(s, l)
            );
          };
        }
        function ud(n, s, l, u, h, _, b, C, A, z) {
          var q = s & I,
            j = q ? b : r,
            oe = q ? r : b,
            ve = q ? _ : r,
            Pe = q ? r : _;
          (s |= q ? V : Y), (s &= ~(q ? Y : V)), s & P || (s &= ~(O | x));
          var Oe = [n, s, h, ve, j, Pe, oe, C, A, z],
            Se = l.apply(r, Oe);
          return Ha(n) && xd(Se, Oe), (Se.placeholder = u), $d(Se, n, s);
        }
        function Ma(n) {
          var s = pt[n];
          return function (l, u) {
            if (
              ((l = pn(l)), (u = u == null ? 0 : kt(Le(u), 292)), u && $f(l))
            ) {
              var h = (je(l) + 'e').split('e'),
                _ = s(h[0] + 'e' + (+h[1] + u));
              return (
                (h = (je(_) + 'e').split('e')), +(h[0] + 'e' + (+h[1] - u))
              );
            }
            return s(l);
          };
        }
        var lm =
          Ts && 1 / lo(new Ts([, -0]))[1] == Ye
            ? function (n) {
                return new Ts(n);
              }
            : nc;
        function fd(n) {
          return function (s) {
            var l = It(s);
            return l == E ? ua(s) : l == ee ? C_(s) : __(s, n(s));
          };
        }
        function Zn(n, s, l, u, h, _, b, C) {
          var A = s & x;
          if (!A && typeof n != 'function') throw new cn(c);
          var z = u ? u.length : 0;
          if (
            (z || ((s &= ~(V | Y)), (u = h = r)),
            (b = b === r ? b : gt(Le(b), 0)),
            (C = C === r ? C : Le(C)),
            (z -= h ? h.length : 0),
            s & Y)
          ) {
            var q = u,
              j = h;
            u = h = r;
          }
          var oe = A ? r : Ra(n),
            ve = [n, s, l, u, h, q, j, _, b, C];
          if (
            (oe && xm(ve, oe),
            (n = ve[0]),
            (s = ve[1]),
            (l = ve[2]),
            (u = ve[3]),
            (h = ve[4]),
            (C = ve[9] = ve[9] === r ? (A ? 0 : n.length) : gt(ve[9] - z, 0)),
            !C && s & (I | F) && (s &= ~(I | F)),
            !s || s == O)
          )
            var Pe = sm(n, s, l);
          else
            s == I || s == F
              ? (Pe = im(n, s, C))
              : (s == V || s == (O | V)) && !h.length
                ? (Pe = om(n, s, l, u))
                : (Pe = ko.apply(r, ve));
          var Oe = oe ? Wf : xd;
          return $d(Oe(Pe, ve), n, s);
        }
        function dd(n, s, l, u) {
          return n === r || (Pn(n, Es[l]) && !Qe.call(u, l)) ? s : n;
        }
        function hd(n, s, l, u, h, _) {
          return (
            st(n) && st(s) && (_.set(s, n), So(n, s, r, hd, _), _.delete(s)), n
          );
        }
        function am(n) {
          return bi(n) ? r : n;
        }
        function pd(n, s, l, u, h, _) {
          var b = l & R,
            C = n.length,
            A = s.length;
          if (C != A && !(b && A > C)) return !1;
          var z = _.get(n),
            q = _.get(s);
          if (z && q) return z == s && q == n;
          var j = -1,
            oe = !0,
            ve = l & k ? new Gr() : r;
          for (_.set(n, s), _.set(s, n); ++j < C; ) {
            var Pe = n[j],
              Oe = s[j];
            if (u) var Se = b ? u(Oe, Pe, j, s, n, _) : u(Pe, Oe, j, n, s, _);
            if (Se !== r) {
              if (Se) continue;
              oe = !1;
              break;
            }
            if (ve) {
              if (
                !sa(s, function (Re, De) {
                  if (!oi(ve, De) && (Pe === Re || h(Pe, Re, l, u, _)))
                    return ve.push(De);
                })
              ) {
                oe = !1;
                break;
              }
            } else if (!(Pe === Oe || h(Pe, Oe, l, u, _))) {
              oe = !1;
              break;
            }
          }
          return _.delete(n), _.delete(s), oe;
        }
        function cm(n, s, l, u, h, _, b) {
          switch (l) {
            case ze:
              if (n.byteLength != s.byteLength || n.byteOffset != s.byteOffset)
                return !1;
              (n = n.buffer), (s = s.buffer);
            case Be:
              return !(
                n.byteLength != s.byteLength || !_(new po(n), new po(s))
              );
            case Bn:
            case _r:
            case H:
              return Pn(+n, +s);
            case mr:
              return n.name == s.name && n.message == s.message;
            case Q:
            case X:
              return n == s + '';
            case E:
              var C = ua;
            case ee:
              var A = u & R;
              if ((C || (C = lo), n.size != s.size && !A)) return !1;
              var z = b.get(n);
              if (z) return z == s;
              (u |= k), b.set(n, s);
              var q = pd(C(n), C(s), u, h, _, b);
              return b.delete(n), q;
            case be:
              if (fi) return fi.call(n) == fi.call(s);
          }
          return !1;
        }
        function um(n, s, l, u, h, _) {
          var b = l & R,
            C = Ba(n),
            A = C.length,
            z = Ba(s),
            q = z.length;
          if (A != q && !b) return !1;
          for (var j = A; j--; ) {
            var oe = C[j];
            if (!(b ? oe in s : Qe.call(s, oe))) return !1;
          }
          var ve = _.get(n),
            Pe = _.get(s);
          if (ve && Pe) return ve == s && Pe == n;
          var Oe = !0;
          _.set(n, s), _.set(s, n);
          for (var Se = b; ++j < A; ) {
            oe = C[j];
            var Re = n[oe],
              De = s[oe];
            if (u) var Zt = b ? u(De, Re, oe, s, n, _) : u(Re, De, oe, n, s, _);
            if (!(Zt === r ? Re === De || h(Re, De, l, u, _) : Zt)) {
              Oe = !1;
              break;
            }
            Se || (Se = oe == 'constructor');
          }
          if (Oe && !Se) {
            var Ft = n.constructor,
              Xt = s.constructor;
            Ft != Xt &&
              'constructor' in n &&
              'constructor' in s &&
              !(
                typeof Ft == 'function' &&
                Ft instanceof Ft &&
                typeof Xt == 'function' &&
                Xt instanceof Xt
              ) &&
              (Oe = !1);
          }
          return _.delete(n), _.delete(s), Oe;
        }
        function Xn(n) {
          return za(bd(n, r, Ad), n + '');
        }
        function Ba(n) {
          return Mf(n, mt, Va);
        }
        function Fa(n) {
          return Mf(n, Ut, gd);
        }
        var Ra = bo
          ? function (n) {
              return bo.get(n);
            }
          : nc;
        function Mo(n) {
          for (
            var s = n.name + '', l = As[s], u = Qe.call(As, s) ? l.length : 0;
            u--;

          ) {
            var h = l[u],
              _ = h.func;
            if (_ == null || _ == n) return h.name;
          }
          return s;
        }
        function Os(n) {
          var s = Qe.call(g, 'placeholder') ? g : n;
          return s.placeholder;
        }
        function $e() {
          var n = g.iteratee || ec;
          return (
            (n = n === ec ? Rf : n),
            arguments.length ? n(arguments[0], arguments[1]) : n
          );
        }
        function Bo(n, s) {
          var l = n.__data__;
          return mm(s) ? l[typeof s == 'string' ? 'string' : 'hash'] : l.map;
        }
        function Na(n) {
          for (var s = mt(n), l = s.length; l--; ) {
            var u = s[l],
              h = n[u];
            s[l] = [u, h, md(h)];
          }
          return s;
        }
        function Zr(n, s) {
          var l = w_(n, s);
          return Ff(l) ? l : r;
        }
        function fm(n) {
          var s = Qe.call(n, Wr),
            l = n[Wr];
          try {
            n[Wr] = r;
            var u = !0;
          } catch {}
          var h = fo.call(n);
          return u && (s ? (n[Wr] = l) : delete n[Wr]), h;
        }
        var Va = da
            ? function (n) {
                return n == null
                  ? []
                  : ((n = et(n)),
                    br(da(n), function (s) {
                      return wf.call(n, s);
                    }));
              }
            : rc,
          gd = da
            ? function (n) {
                for (var s = []; n; ) wr(s, Va(n)), (n = go(n));
                return s;
              }
            : rc,
          It = Mt;
        ((ha && It(new ha(new ArrayBuffer(1))) != ze) ||
          (ai && It(new ai()) != E) ||
          (pa && It(pa.resolve()) != ne) ||
          (Ts && It(new Ts()) != ee) ||
          (ci && It(new ci()) != ye)) &&
          (It = function (n) {
            var s = Mt(n),
              l = s == K ? n.constructor : r,
              u = l ? Xr(l) : '';
            if (u)
              switch (u) {
                case G_:
                  return ze;
                case Y_:
                  return E;
                case j_:
                  return ne;
                case Z_:
                  return ee;
                case X_:
                  return ye;
              }
            return s;
          });
        function dm(n, s, l) {
          for (var u = -1, h = l.length; ++u < h; ) {
            var _ = l[u],
              b = _.size;
            switch (_.type) {
              case 'drop':
                n += b;
                break;
              case 'dropRight':
                s -= b;
                break;
              case 'take':
                s = kt(s, n + b);
                break;
              case 'takeRight':
                n = gt(n, s - b);
                break;
            }
          }
          return { start: n, end: s };
        }
        function hm(n) {
          var s = n.match(yg);
          return s ? s[1].split(bg) : [];
        }
        function _d(n, s, l) {
          s = Sr(s, n);
          for (var u = -1, h = s.length, _ = !1; ++u < h; ) {
            var b = Vn(s[u]);
            if (!(_ = n != null && l(n, b))) break;
            n = n[b];
          }
          return _ || ++u != h
            ? _
            : ((h = n == null ? 0 : n.length),
              !!h && Uo(h) && Jn(b, h) && (Ie(n) || Jr(n)));
        }
        function pm(n) {
          var s = n.length,
            l = new n.constructor(s);
          return (
            s &&
              typeof n[0] == 'string' &&
              Qe.call(n, 'index') &&
              ((l.index = n.index), (l.input = n.input)),
            l
          );
        }
        function vd(n) {
          return typeof n.constructor == 'function' && !mi(n) ? ks(go(n)) : {};
        }
        function gm(n, s, l) {
          var u = n.constructor;
          switch (s) {
            case Be:
              return La(n);
            case Bn:
            case _r:
              return new u(+n);
            case ze:
              return Jv(n, l);
            case Ke:
            case Je:
            case Ot:
            case Fn:
            case bs:
            case Kn:
            case ws:
            case wt:
            case Vt:
              return Qf(n, l);
            case E:
              return new u();
            case H:
            case X:
              return new u(n);
            case Q:
              return Qv(n);
            case ee:
              return new u();
            case be:
              return em(n);
          }
        }
        function _m(n, s) {
          var l = s.length;
          if (!l) return n;
          var u = l - 1;
          return (
            (s[u] = (l > 1 ? '& ' : '') + s[u]),
            (s = s.join(l > 2 ? ', ' : ' ')),
            n.replace(
              mg,
              `{
/* [wrapped with ` +
                s +
                `] */
`,
            )
          );
        }
        function vm(n) {
          return Ie(n) || Jr(n) || !!(xf && n && n[xf]);
        }
        function Jn(n, s) {
          var l = typeof n;
          return (
            (s = s ?? Ue),
            !!s &&
              (l == 'number' || (l != 'symbol' && Ag.test(n))) &&
              n > -1 &&
              n % 1 == 0 &&
              n < s
          );
        }
        function Bt(n, s, l) {
          if (!st(l)) return !1;
          var u = typeof s;
          return (
            u == 'number' ? Ht(l) && Jn(s, l.length) : u == 'string' && s in l
          )
            ? Pn(l[s], n)
            : !1;
        }
        function Da(n, s) {
          if (Ie(n)) return !1;
          var l = typeof n;
          return l == 'number' ||
            l == 'symbol' ||
            l == 'boolean' ||
            n == null ||
            jt(n)
            ? !0
            : pg.test(n) || !hg.test(n) || (s != null && n in et(s));
        }
        function mm(n) {
          var s = typeof n;
          return s == 'string' ||
            s == 'number' ||
            s == 'symbol' ||
            s == 'boolean'
            ? n !== '__proto__'
            : n === null;
        }
        function Ha(n) {
          var s = Mo(n),
            l = g[s];
          if (typeof l != 'function' || !(s in Ne.prototype)) return !1;
          if (n === l) return !0;
          var u = Ra(l);
          return !!u && n === u[0];
        }
        function ym(n) {
          return !!mf && mf in n;
        }
        var bm = co ? Qn : sc;
        function mi(n) {
          var s = n && n.constructor,
            l = (typeof s == 'function' && s.prototype) || Es;
          return n === l;
        }
        function md(n) {
          return n === n && !st(n);
        }
        function yd(n, s) {
          return function (l) {
            return l == null ? !1 : l[n] === s && (s !== r || n in et(l));
          };
        }
        function wm(n) {
          var s = Do(n, function (u) {
              return l.size === p && l.clear(), u;
            }),
            l = s.cache;
          return s;
        }
        function xm(n, s) {
          var l = n[1],
            u = s[1],
            h = l | u,
            _ = h < (O | x | te),
            b =
              (u == te && l == I) ||
              (u == te && l == D && n[7].length <= s[8]) ||
              (u == (te | D) && s[7].length <= s[8] && l == I);
          if (!(_ || b)) return n;
          u & O && ((n[2] = s[2]), (h |= l & O ? 0 : P));
          var C = s[3];
          if (C) {
            var A = n[3];
            (n[3] = A ? td(A, C, s[4]) : C), (n[4] = A ? xr(n[3], v) : s[4]);
          }
          return (
            (C = s[5]),
            C &&
              ((A = n[5]),
              (n[5] = A ? nd(A, C, s[6]) : C),
              (n[6] = A ? xr(n[5], v) : s[6])),
            (C = s[7]),
            C && (n[7] = C),
            u & te && (n[8] = n[8] == null ? s[8] : kt(n[8], s[8])),
            n[9] == null && (n[9] = s[9]),
            (n[0] = s[0]),
            (n[1] = h),
            n
          );
        }
        function $m(n) {
          var s = [];
          if (n != null) for (var l in et(n)) s.push(l);
          return s;
        }
        function Cm(n) {
          return fo.call(n);
        }
        function bd(n, s, l) {
          return (
            (s = gt(s === r ? n.length - 1 : s, 0)),
            function () {
              for (
                var u = arguments, h = -1, _ = gt(u.length - s, 0), b = N(_);
                ++h < _;

              )
                b[h] = u[s + h];
              h = -1;
              for (var C = N(s + 1); ++h < s; ) C[h] = u[h];
              return (C[s] = l(b)), Kt(n, this, C);
            }
          );
        }
        function wd(n, s) {
          return s.length < 2 ? n : jr(n, dn(s, 0, -1));
        }
        function Pm(n, s) {
          for (var l = n.length, u = kt(s.length, l), h = Dt(n); u--; ) {
            var _ = s[u];
            n[u] = Jn(_, l) ? h[_] : r;
          }
          return n;
        }
        function Ua(n, s) {
          if (
            !(s === 'constructor' && typeof n[s] == 'function') &&
            s != '__proto__'
          )
            return n[s];
        }
        var xd = Cd(Wf),
          yi =
            D_ ||
            function (n, s) {
              return xt.setTimeout(n, s);
            },
          za = Cd(Yv);
        function $d(n, s, l) {
          var u = s + '';
          return za(n, _m(u, Sm(hm(u), l)));
        }
        function Cd(n) {
          var s = 0,
            l = 0;
          return function () {
            var u = q_(),
              h = xe - (u - l);
            if (((l = u), h > 0)) {
              if (++s >= re) return arguments[0];
            } else s = 0;
            return n.apply(r, arguments);
          };
        }
        function Fo(n, s) {
          var l = -1,
            u = n.length,
            h = u - 1;
          for (s = s === r ? u : s; ++l < s; ) {
            var _ = Pa(l, h),
              b = n[_];
            (n[_] = n[l]), (n[l] = b);
          }
          return (n.length = s), n;
        }
        var Pd = wm(function (n) {
          var s = [];
          return (
            n.charCodeAt(0) === 46 && s.push(''),
            n.replace(gg, function (l, u, h, _) {
              s.push(h ? _.replace($g, '$1') : u || l);
            }),
            s
          );
        });
        function Vn(n) {
          if (typeof n == 'string' || jt(n)) return n;
          var s = n + '';
          return s == '0' && 1 / n == -Ye ? '-0' : s;
        }
        function Xr(n) {
          if (n != null) {
            try {
              return uo.call(n);
            } catch {}
            try {
              return n + '';
            } catch {}
          }
          return '';
        }
        function Sm(n, s) {
          return (
            an(eo, function (l) {
              var u = '_.' + l[0];
              s & l[1] && !io(n, u) && n.push(u);
            }),
            n.sort()
          );
        }
        function Sd(n) {
          if (n instanceof Ne) return n.clone();
          var s = new un(n.__wrapped__, n.__chain__);
          return (
            (s.__actions__ = Dt(n.__actions__)),
            (s.__index__ = n.__index__),
            (s.__values__ = n.__values__),
            s
          );
        }
        function Em(n, s, l) {
          (l ? Bt(n, s, l) : s === r) ? (s = 1) : (s = gt(Le(s), 0));
          var u = n == null ? 0 : n.length;
          if (!u || s < 1) return [];
          for (var h = 0, _ = 0, b = N(mo(u / s)); h < u; )
            b[_++] = dn(n, h, (h += s));
          return b;
        }
        function Tm(n) {
          for (
            var s = -1, l = n == null ? 0 : n.length, u = 0, h = [];
            ++s < l;

          ) {
            var _ = n[s];
            _ && (h[u++] = _);
          }
          return h;
        }
        function Am() {
          var n = arguments.length;
          if (!n) return [];
          for (var s = N(n - 1), l = arguments[0], u = n; u--; )
            s[u - 1] = arguments[u];
          return wr(Ie(l) ? Dt(l) : [l], $t(s, 1));
        }
        var km = Fe(function (n, s) {
            return ut(n) ? hi(n, $t(s, 1, ut, !0)) : [];
          }),
          Im = Fe(function (n, s) {
            var l = hn(s);
            return (
              ut(l) && (l = r), ut(n) ? hi(n, $t(s, 1, ut, !0), $e(l, 2)) : []
            );
          }),
          Lm = Fe(function (n, s) {
            var l = hn(s);
            return ut(l) && (l = r), ut(n) ? hi(n, $t(s, 1, ut, !0), r, l) : [];
          });
        function Om(n, s, l) {
          var u = n == null ? 0 : n.length;
          return u
            ? ((s = l || s === r ? 1 : Le(s)), dn(n, s < 0 ? 0 : s, u))
            : [];
        }
        function Mm(n, s, l) {
          var u = n == null ? 0 : n.length;
          return u
            ? ((s = l || s === r ? 1 : Le(s)),
              (s = u - s),
              dn(n, 0, s < 0 ? 0 : s))
            : [];
        }
        function Bm(n, s) {
          return n && n.length ? To(n, $e(s, 3), !0, !0) : [];
        }
        function Fm(n, s) {
          return n && n.length ? To(n, $e(s, 3), !0) : [];
        }
        function Rm(n, s, l, u) {
          var h = n == null ? 0 : n.length;
          return h
            ? (l && typeof l != 'number' && Bt(n, s, l) && ((l = 0), (u = h)),
              Av(n, s, l, u))
            : [];
        }
        function Ed(n, s, l) {
          var u = n == null ? 0 : n.length;
          if (!u) return -1;
          var h = l == null ? 0 : Le(l);
          return h < 0 && (h = gt(u + h, 0)), oo(n, $e(s, 3), h);
        }
        function Td(n, s, l) {
          var u = n == null ? 0 : n.length;
          if (!u) return -1;
          var h = u - 1;
          return (
            l !== r && ((h = Le(l)), (h = l < 0 ? gt(u + h, 0) : kt(h, u - 1))),
            oo(n, $e(s, 3), h, !0)
          );
        }
        function Ad(n) {
          var s = n == null ? 0 : n.length;
          return s ? $t(n, 1) : [];
        }
        function Nm(n) {
          var s = n == null ? 0 : n.length;
          return s ? $t(n, Ye) : [];
        }
        function Vm(n, s) {
          var l = n == null ? 0 : n.length;
          return l ? ((s = s === r ? 1 : Le(s)), $t(n, s)) : [];
        }
        function Dm(n) {
          for (var s = -1, l = n == null ? 0 : n.length, u = {}; ++s < l; ) {
            var h = n[s];
            u[h[0]] = h[1];
          }
          return u;
        }
        function kd(n) {
          return n && n.length ? n[0] : r;
        }
        function Hm(n, s, l) {
          var u = n == null ? 0 : n.length;
          if (!u) return -1;
          var h = l == null ? 0 : Le(l);
          return h < 0 && (h = gt(u + h, 0)), $s(n, s, h);
        }
        function Um(n) {
          var s = n == null ? 0 : n.length;
          return s ? dn(n, 0, -1) : [];
        }
        var zm = Fe(function (n) {
            var s = rt(n, ka);
            return s.length && s[0] === n[0] ? ba(s) : [];
          }),
          qm = Fe(function (n) {
            var s = hn(n),
              l = rt(n, ka);
            return (
              s === hn(l) ? (s = r) : l.pop(),
              l.length && l[0] === n[0] ? ba(l, $e(s, 2)) : []
            );
          }),
          Wm = Fe(function (n) {
            var s = hn(n),
              l = rt(n, ka);
            return (
              (s = typeof s == 'function' ? s : r),
              s && l.pop(),
              l.length && l[0] === n[0] ? ba(l, r, s) : []
            );
          });
        function Km(n, s) {
          return n == null ? '' : U_.call(n, s);
        }
        function hn(n) {
          var s = n == null ? 0 : n.length;
          return s ? n[s - 1] : r;
        }
        function Gm(n, s, l) {
          var u = n == null ? 0 : n.length;
          if (!u) return -1;
          var h = u;
          return (
            l !== r && ((h = Le(l)), (h = h < 0 ? gt(u + h, 0) : kt(h, u - 1))),
            s === s ? S_(n, s, h) : oo(n, uf, h, !0)
          );
        }
        function Ym(n, s) {
          return n && n.length ? Hf(n, Le(s)) : r;
        }
        var jm = Fe(Id);
        function Id(n, s) {
          return n && n.length && s && s.length ? Ca(n, s) : n;
        }
        function Zm(n, s, l) {
          return n && n.length && s && s.length ? Ca(n, s, $e(l, 2)) : n;
        }
        function Xm(n, s, l) {
          return n && n.length && s && s.length ? Ca(n, s, r, l) : n;
        }
        var Jm = Xn(function (n, s) {
          var l = n == null ? 0 : n.length,
            u = _a(n, s);
          return (
            qf(
              n,
              rt(s, function (h) {
                return Jn(h, l) ? +h : h;
              }).sort(ed),
            ),
            u
          );
        });
        function Qm(n, s) {
          var l = [];
          if (!(n && n.length)) return l;
          var u = -1,
            h = [],
            _ = n.length;
          for (s = $e(s, 3); ++u < _; ) {
            var b = n[u];
            s(b, u, n) && (l.push(b), h.push(u));
          }
          return qf(n, h), l;
        }
        function qa(n) {
          return n == null ? n : K_.call(n);
        }
        function e2(n, s, l) {
          var u = n == null ? 0 : n.length;
          return u
            ? (l && typeof l != 'number' && Bt(n, s, l)
                ? ((s = 0), (l = u))
                : ((s = s == null ? 0 : Le(s)), (l = l === r ? u : Le(l))),
              dn(n, s, l))
            : [];
        }
        function t2(n, s) {
          return Eo(n, s);
        }
        function n2(n, s, l) {
          return Ea(n, s, $e(l, 2));
        }
        function r2(n, s) {
          var l = n == null ? 0 : n.length;
          if (l) {
            var u = Eo(n, s);
            if (u < l && Pn(n[u], s)) return u;
          }
          return -1;
        }
        function s2(n, s) {
          return Eo(n, s, !0);
        }
        function i2(n, s, l) {
          return Ea(n, s, $e(l, 2), !0);
        }
        function o2(n, s) {
          var l = n == null ? 0 : n.length;
          if (l) {
            var u = Eo(n, s, !0) - 1;
            if (Pn(n[u], s)) return u;
          }
          return -1;
        }
        function l2(n) {
          return n && n.length ? Kf(n) : [];
        }
        function a2(n, s) {
          return n && n.length ? Kf(n, $e(s, 2)) : [];
        }
        function c2(n) {
          var s = n == null ? 0 : n.length;
          return s ? dn(n, 1, s) : [];
        }
        function u2(n, s, l) {
          return n && n.length
            ? ((s = l || s === r ? 1 : Le(s)), dn(n, 0, s < 0 ? 0 : s))
            : [];
        }
        function f2(n, s, l) {
          var u = n == null ? 0 : n.length;
          return u
            ? ((s = l || s === r ? 1 : Le(s)),
              (s = u - s),
              dn(n, s < 0 ? 0 : s, u))
            : [];
        }
        function d2(n, s) {
          return n && n.length ? To(n, $e(s, 3), !1, !0) : [];
        }
        function h2(n, s) {
          return n && n.length ? To(n, $e(s, 3)) : [];
        }
        var p2 = Fe(function (n) {
            return Pr($t(n, 1, ut, !0));
          }),
          g2 = Fe(function (n) {
            var s = hn(n);
            return ut(s) && (s = r), Pr($t(n, 1, ut, !0), $e(s, 2));
          }),
          _2 = Fe(function (n) {
            var s = hn(n);
            return (
              (s = typeof s == 'function' ? s : r), Pr($t(n, 1, ut, !0), r, s)
            );
          });
        function v2(n) {
          return n && n.length ? Pr(n) : [];
        }
        function m2(n, s) {
          return n && n.length ? Pr(n, $e(s, 2)) : [];
        }
        function y2(n, s) {
          return (
            (s = typeof s == 'function' ? s : r),
            n && n.length ? Pr(n, r, s) : []
          );
        }
        function Wa(n) {
          if (!(n && n.length)) return [];
          var s = 0;
          return (
            (n = br(n, function (l) {
              if (ut(l)) return (s = gt(l.length, s)), !0;
            })),
            aa(s, function (l) {
              return rt(n, ia(l));
            })
          );
        }
        function Ld(n, s) {
          if (!(n && n.length)) return [];
          var l = Wa(n);
          return s == null
            ? l
            : rt(l, function (u) {
                return Kt(s, r, u);
              });
        }
        var b2 = Fe(function (n, s) {
            return ut(n) ? hi(n, s) : [];
          }),
          w2 = Fe(function (n) {
            return Aa(br(n, ut));
          }),
          x2 = Fe(function (n) {
            var s = hn(n);
            return ut(s) && (s = r), Aa(br(n, ut), $e(s, 2));
          }),
          $2 = Fe(function (n) {
            var s = hn(n);
            return (s = typeof s == 'function' ? s : r), Aa(br(n, ut), r, s);
          }),
          C2 = Fe(Wa);
        function P2(n, s) {
          return Zf(n || [], s || [], di);
        }
        function S2(n, s) {
          return Zf(n || [], s || [], _i);
        }
        var E2 = Fe(function (n) {
          var s = n.length,
            l = s > 1 ? n[s - 1] : r;
          return (l = typeof l == 'function' ? (n.pop(), l) : r), Ld(n, l);
        });
        function Od(n) {
          var s = g(n);
          return (s.__chain__ = !0), s;
        }
        function T2(n, s) {
          return s(n), n;
        }
        function Ro(n, s) {
          return s(n);
        }
        var A2 = Xn(function (n) {
          var s = n.length,
            l = s ? n[0] : 0,
            u = this.__wrapped__,
            h = function (_) {
              return _a(_, n);
            };
          return s > 1 ||
            this.__actions__.length ||
            !(u instanceof Ne) ||
            !Jn(l)
            ? this.thru(h)
            : ((u = u.slice(l, +l + (s ? 1 : 0))),
              u.__actions__.push({ func: Ro, args: [h], thisArg: r }),
              new un(u, this.__chain__).thru(function (_) {
                return s && !_.length && _.push(r), _;
              }));
        });
        function k2() {
          return Od(this);
        }
        function I2() {
          return new un(this.value(), this.__chain__);
        }
        function L2() {
          this.__values__ === r && (this.__values__ = Gd(this.value()));
          var n = this.__index__ >= this.__values__.length,
            s = n ? r : this.__values__[this.__index__++];
          return { done: n, value: s };
        }
        function O2() {
          return this;
        }
        function M2(n) {
          for (var s, l = this; l instanceof xo; ) {
            var u = Sd(l);
            (u.__index__ = 0),
              (u.__values__ = r),
              s ? (h.__wrapped__ = u) : (s = u);
            var h = u;
            l = l.__wrapped__;
          }
          return (h.__wrapped__ = n), s;
        }
        function B2() {
          var n = this.__wrapped__;
          if (n instanceof Ne) {
            var s = n;
            return (
              this.__actions__.length && (s = new Ne(this)),
              (s = s.reverse()),
              s.__actions__.push({ func: Ro, args: [qa], thisArg: r }),
              new un(s, this.__chain__)
            );
          }
          return this.thru(qa);
        }
        function F2() {
          return jf(this.__wrapped__, this.__actions__);
        }
        var R2 = Ao(function (n, s, l) {
          Qe.call(n, l) ? ++n[l] : jn(n, l, 1);
        });
        function N2(n, s, l) {
          var u = Ie(n) ? af : Tv;
          return l && Bt(n, s, l) && (s = r), u(n, $e(s, 3));
        }
        function V2(n, s) {
          var l = Ie(n) ? br : Lf;
          return l(n, $e(s, 3));
        }
        var D2 = od(Ed),
          H2 = od(Td);
        function U2(n, s) {
          return $t(No(n, s), 1);
        }
        function z2(n, s) {
          return $t(No(n, s), Ye);
        }
        function q2(n, s, l) {
          return (l = l === r ? 1 : Le(l)), $t(No(n, s), l);
        }
        function Md(n, s) {
          var l = Ie(n) ? an : Cr;
          return l(n, $e(s, 3));
        }
        function Bd(n, s) {
          var l = Ie(n) ? c_ : If;
          return l(n, $e(s, 3));
        }
        var W2 = Ao(function (n, s, l) {
          Qe.call(n, l) ? n[l].push(s) : jn(n, l, [s]);
        });
        function K2(n, s, l, u) {
          (n = Ht(n) ? n : Bs(n)), (l = l && !u ? Le(l) : 0);
          var h = n.length;
          return (
            l < 0 && (l = gt(h + l, 0)),
            zo(n) ? l <= h && n.indexOf(s, l) > -1 : !!h && $s(n, s, l) > -1
          );
        }
        var G2 = Fe(function (n, s, l) {
            var u = -1,
              h = typeof s == 'function',
              _ = Ht(n) ? N(n.length) : [];
            return (
              Cr(n, function (b) {
                _[++u] = h ? Kt(s, b, l) : pi(b, s, l);
              }),
              _
            );
          }),
          Y2 = Ao(function (n, s, l) {
            jn(n, l, s);
          });
        function No(n, s) {
          var l = Ie(n) ? rt : Nf;
          return l(n, $e(s, 3));
        }
        function j2(n, s, l, u) {
          return n == null
            ? []
            : (Ie(s) || (s = s == null ? [] : [s]),
              (l = u ? r : l),
              Ie(l) || (l = l == null ? [] : [l]),
              Uf(n, s, l));
        }
        var Z2 = Ao(
          function (n, s, l) {
            n[l ? 0 : 1].push(s);
          },
          function () {
            return [[], []];
          },
        );
        function X2(n, s, l) {
          var u = Ie(n) ? ra : df,
            h = arguments.length < 3;
          return u(n, $e(s, 4), l, h, Cr);
        }
        function J2(n, s, l) {
          var u = Ie(n) ? u_ : df,
            h = arguments.length < 3;
          return u(n, $e(s, 4), l, h, If);
        }
        function Q2(n, s) {
          var l = Ie(n) ? br : Lf;
          return l(n, Ho($e(s, 3)));
        }
        function e3(n) {
          var s = Ie(n) ? Ef : Kv;
          return s(n);
        }
        function t3(n, s, l) {
          (l ? Bt(n, s, l) : s === r) ? (s = 1) : (s = Le(s));
          var u = Ie(n) ? $v : Gv;
          return u(n, s);
        }
        function n3(n) {
          var s = Ie(n) ? Cv : jv;
          return s(n);
        }
        function r3(n) {
          if (n == null) return 0;
          if (Ht(n)) return zo(n) ? Ps(n) : n.length;
          var s = It(n);
          return s == E || s == ee ? n.size : xa(n).length;
        }
        function s3(n, s, l) {
          var u = Ie(n) ? sa : Zv;
          return l && Bt(n, s, l) && (s = r), u(n, $e(s, 3));
        }
        var i3 = Fe(function (n, s) {
            if (n == null) return [];
            var l = s.length;
            return (
              l > 1 && Bt(n, s[0], s[1])
                ? (s = [])
                : l > 2 && Bt(s[0], s[1], s[2]) && (s = [s[0]]),
              Uf(n, $t(s, 1), [])
            );
          }),
          Vo =
            V_ ||
            function () {
              return xt.Date.now();
            };
        function o3(n, s) {
          if (typeof s != 'function') throw new cn(c);
          return (
            (n = Le(n)),
            function () {
              if (--n < 1) return s.apply(this, arguments);
            }
          );
        }
        function Fd(n, s, l) {
          return (
            (s = l ? r : s),
            (s = n && s == null ? n.length : s),
            Zn(n, te, r, r, r, r, s)
          );
        }
        function Rd(n, s) {
          var l;
          if (typeof s != 'function') throw new cn(c);
          return (
            (n = Le(n)),
            function () {
              return (
                --n > 0 && (l = s.apply(this, arguments)), n <= 1 && (s = r), l
              );
            }
          );
        }
        var Ka = Fe(function (n, s, l) {
            var u = O;
            if (l.length) {
              var h = xr(l, Os(Ka));
              u |= V;
            }
            return Zn(n, u, s, l, h);
          }),
          Nd = Fe(function (n, s, l) {
            var u = O | x;
            if (l.length) {
              var h = xr(l, Os(Nd));
              u |= V;
            }
            return Zn(s, u, n, l, h);
          });
        function Vd(n, s, l) {
          s = l ? r : s;
          var u = Zn(n, I, r, r, r, r, r, s);
          return (u.placeholder = Vd.placeholder), u;
        }
        function Dd(n, s, l) {
          s = l ? r : s;
          var u = Zn(n, F, r, r, r, r, r, s);
          return (u.placeholder = Dd.placeholder), u;
        }
        function Hd(n, s, l) {
          var u,
            h,
            _,
            b,
            C,
            A,
            z = 0,
            q = !1,
            j = !1,
            oe = !0;
          if (typeof n != 'function') throw new cn(c);
          (s = pn(s) || 0),
            st(l) &&
              ((q = !!l.leading),
              (j = 'maxWait' in l),
              (_ = j ? gt(pn(l.maxWait) || 0, s) : _),
              (oe = 'trailing' in l ? !!l.trailing : oe));
          function ve(ft) {
            var Sn = u,
              tr = h;
            return (u = h = r), (z = ft), (b = n.apply(tr, Sn)), b;
          }
          function Pe(ft) {
            return (z = ft), (C = yi(Re, s)), q ? ve(ft) : b;
          }
          function Oe(ft) {
            var Sn = ft - A,
              tr = ft - z,
              oh = s - Sn;
            return j ? kt(oh, _ - tr) : oh;
          }
          function Se(ft) {
            var Sn = ft - A,
              tr = ft - z;
            return A === r || Sn >= s || Sn < 0 || (j && tr >= _);
          }
          function Re() {
            var ft = Vo();
            if (Se(ft)) return De(ft);
            C = yi(Re, Oe(ft));
          }
          function De(ft) {
            return (C = r), oe && u ? ve(ft) : ((u = h = r), b);
          }
          function Zt() {
            C !== r && Xf(C), (z = 0), (u = A = h = C = r);
          }
          function Ft() {
            return C === r ? b : De(Vo());
          }
          function Xt() {
            var ft = Vo(),
              Sn = Se(ft);
            if (((u = arguments), (h = this), (A = ft), Sn)) {
              if (C === r) return Pe(A);
              if (j) return Xf(C), (C = yi(Re, s)), ve(A);
            }
            return C === r && (C = yi(Re, s)), b;
          }
          return (Xt.cancel = Zt), (Xt.flush = Ft), Xt;
        }
        var l3 = Fe(function (n, s) {
            return kf(n, 1, s);
          }),
          a3 = Fe(function (n, s, l) {
            return kf(n, pn(s) || 0, l);
          });
        function c3(n) {
          return Zn(n, ie);
        }
        function Do(n, s) {
          if (typeof n != 'function' || (s != null && typeof s != 'function'))
            throw new cn(c);
          var l = function () {
            var u = arguments,
              h = s ? s.apply(this, u) : u[0],
              _ = l.cache;
            if (_.has(h)) return _.get(h);
            var b = n.apply(this, u);
            return (l.cache = _.set(h, b) || _), b;
          };
          return (l.cache = new (Do.Cache || Yn)()), l;
        }
        Do.Cache = Yn;
        function Ho(n) {
          if (typeof n != 'function') throw new cn(c);
          return function () {
            var s = arguments;
            switch (s.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, s[0]);
              case 2:
                return !n.call(this, s[0], s[1]);
              case 3:
                return !n.call(this, s[0], s[1], s[2]);
            }
            return !n.apply(this, s);
          };
        }
        function u3(n) {
          return Rd(2, n);
        }
        var f3 = Xv(function (n, s) {
            s =
              s.length == 1 && Ie(s[0])
                ? rt(s[0], Gt($e()))
                : rt($t(s, 1), Gt($e()));
            var l = s.length;
            return Fe(function (u) {
              for (var h = -1, _ = kt(u.length, l); ++h < _; )
                u[h] = s[h].call(this, u[h]);
              return Kt(n, this, u);
            });
          }),
          Ga = Fe(function (n, s) {
            var l = xr(s, Os(Ga));
            return Zn(n, V, r, s, l);
          }),
          Ud = Fe(function (n, s) {
            var l = xr(s, Os(Ud));
            return Zn(n, Y, r, s, l);
          }),
          d3 = Xn(function (n, s) {
            return Zn(n, D, r, r, r, s);
          });
        function h3(n, s) {
          if (typeof n != 'function') throw new cn(c);
          return (s = s === r ? s : Le(s)), Fe(n, s);
        }
        function p3(n, s) {
          if (typeof n != 'function') throw new cn(c);
          return (
            (s = s == null ? 0 : gt(Le(s), 0)),
            Fe(function (l) {
              var u = l[s],
                h = Er(l, 0, s);
              return u && wr(h, u), Kt(n, this, h);
            })
          );
        }
        function g3(n, s, l) {
          var u = !0,
            h = !0;
          if (typeof n != 'function') throw new cn(c);
          return (
            st(l) &&
              ((u = 'leading' in l ? !!l.leading : u),
              (h = 'trailing' in l ? !!l.trailing : h)),
            Hd(n, s, { leading: u, maxWait: s, trailing: h })
          );
        }
        function _3(n) {
          return Fd(n, 1);
        }
        function v3(n, s) {
          return Ga(Ia(s), n);
        }
        function m3() {
          if (!arguments.length) return [];
          var n = arguments[0];
          return Ie(n) ? n : [n];
        }
        function y3(n) {
          return fn(n, S);
        }
        function b3(n, s) {
          return (s = typeof s == 'function' ? s : r), fn(n, S, s);
        }
        function w3(n) {
          return fn(n, m | S);
        }
        function x3(n, s) {
          return (s = typeof s == 'function' ? s : r), fn(n, m | S, s);
        }
        function $3(n, s) {
          return s == null || Af(n, s, mt(s));
        }
        function Pn(n, s) {
          return n === s || (n !== n && s !== s);
        }
        var C3 = Oo(ya),
          P3 = Oo(function (n, s) {
            return n >= s;
          }),
          Jr = Bf(
            (function () {
              return arguments;
            })(),
          )
            ? Bf
            : function (n) {
                return ot(n) && Qe.call(n, 'callee') && !wf.call(n, 'callee');
              },
          Ie = N.isArray,
          S3 = tf ? Gt(tf) : Mv;
        function Ht(n) {
          return n != null && Uo(n.length) && !Qn(n);
        }
        function ut(n) {
          return ot(n) && Ht(n);
        }
        function E3(n) {
          return n === !0 || n === !1 || (ot(n) && Mt(n) == Bn);
        }
        var Tr = H_ || sc,
          T3 = nf ? Gt(nf) : Bv;
        function A3(n) {
          return ot(n) && n.nodeType === 1 && !bi(n);
        }
        function k3(n) {
          if (n == null) return !0;
          if (
            Ht(n) &&
            (Ie(n) ||
              typeof n == 'string' ||
              typeof n.splice == 'function' ||
              Tr(n) ||
              Ms(n) ||
              Jr(n))
          )
            return !n.length;
          var s = It(n);
          if (s == E || s == ee) return !n.size;
          if (mi(n)) return !xa(n).length;
          for (var l in n) if (Qe.call(n, l)) return !1;
          return !0;
        }
        function I3(n, s) {
          return gi(n, s);
        }
        function L3(n, s, l) {
          l = typeof l == 'function' ? l : r;
          var u = l ? l(n, s) : r;
          return u === r ? gi(n, s, r, l) : !!u;
        }
        function Ya(n) {
          if (!ot(n)) return !1;
          var s = Mt(n);
          return (
            s == mr ||
            s == vr ||
            (typeof n.message == 'string' &&
              typeof n.name == 'string' &&
              !bi(n))
          );
        }
        function O3(n) {
          return typeof n == 'number' && $f(n);
        }
        function Qn(n) {
          if (!st(n)) return !1;
          var s = Mt(n);
          return s == yr || s == w || s == xn || s == ae;
        }
        function zd(n) {
          return typeof n == 'number' && n == Le(n);
        }
        function Uo(n) {
          return typeof n == 'number' && n > -1 && n % 1 == 0 && n <= Ue;
        }
        function st(n) {
          var s = typeof n;
          return n != null && (s == 'object' || s == 'function');
        }
        function ot(n) {
          return n != null && typeof n == 'object';
        }
        var qd = rf ? Gt(rf) : Rv;
        function M3(n, s) {
          return n === s || wa(n, s, Na(s));
        }
        function B3(n, s, l) {
          return (l = typeof l == 'function' ? l : r), wa(n, s, Na(s), l);
        }
        function F3(n) {
          return Wd(n) && n != +n;
        }
        function R3(n) {
          if (bm(n)) throw new ke(a);
          return Ff(n);
        }
        function N3(n) {
          return n === null;
        }
        function V3(n) {
          return n == null;
        }
        function Wd(n) {
          return typeof n == 'number' || (ot(n) && Mt(n) == H);
        }
        function bi(n) {
          if (!ot(n) || Mt(n) != K) return !1;
          var s = go(n);
          if (s === null) return !0;
          var l = Qe.call(s, 'constructor') && s.constructor;
          return typeof l == 'function' && l instanceof l && uo.call(l) == B_;
        }
        var ja = sf ? Gt(sf) : Nv;
        function D3(n) {
          return zd(n) && n >= -Ue && n <= Ue;
        }
        var Kd = of ? Gt(of) : Vv;
        function zo(n) {
          return typeof n == 'string' || (!Ie(n) && ot(n) && Mt(n) == X);
        }
        function jt(n) {
          return typeof n == 'symbol' || (ot(n) && Mt(n) == be);
        }
        var Ms = lf ? Gt(lf) : Dv;
        function H3(n) {
          return n === r;
        }
        function U3(n) {
          return ot(n) && It(n) == ye;
        }
        function z3(n) {
          return ot(n) && Mt(n) == Te;
        }
        var q3 = Oo($a),
          W3 = Oo(function (n, s) {
            return n <= s;
          });
        function Gd(n) {
          if (!n) return [];
          if (Ht(n)) return zo(n) ? $n(n) : Dt(n);
          if (li && n[li]) return $_(n[li]());
          var s = It(n),
            l = s == E ? ua : s == ee ? lo : Bs;
          return l(n);
        }
        function er(n) {
          if (!n) return n === 0 ? n : 0;
          if (((n = pn(n)), n === Ye || n === -Ye)) {
            var s = n < 0 ? -1 : 1;
            return s * wn;
          }
          return n === n ? n : 0;
        }
        function Le(n) {
          var s = er(n),
            l = s % 1;
          return s === s ? (l ? s - l : s) : 0;
        }
        function Yd(n) {
          return n ? Yr(Le(n), 0, At) : 0;
        }
        function pn(n) {
          if (typeof n == 'number') return n;
          if (jt(n)) return hr;
          if (st(n)) {
            var s = typeof n.valueOf == 'function' ? n.valueOf() : n;
            n = st(s) ? s + '' : s;
          }
          if (typeof n != 'string') return n === 0 ? n : +n;
          n = hf(n);
          var l = Sg.test(n);
          return l || Tg.test(n)
            ? o_(n.slice(2), l ? 2 : 8)
            : Pg.test(n)
              ? hr
              : +n;
        }
        function jd(n) {
          return Nn(n, Ut(n));
        }
        function K3(n) {
          return n ? Yr(Le(n), -Ue, Ue) : n === 0 ? n : 0;
        }
        function je(n) {
          return n == null ? '' : Yt(n);
        }
        var G3 = Is(function (n, s) {
            if (mi(s) || Ht(s)) {
              Nn(s, mt(s), n);
              return;
            }
            for (var l in s) Qe.call(s, l) && di(n, l, s[l]);
          }),
          Zd = Is(function (n, s) {
            Nn(s, Ut(s), n);
          }),
          qo = Is(function (n, s, l, u) {
            Nn(s, Ut(s), n, u);
          }),
          Y3 = Is(function (n, s, l, u) {
            Nn(s, mt(s), n, u);
          }),
          j3 = Xn(_a);
        function Z3(n, s) {
          var l = ks(n);
          return s == null ? l : Tf(l, s);
        }
        var X3 = Fe(function (n, s) {
            n = et(n);
            var l = -1,
              u = s.length,
              h = u > 2 ? s[2] : r;
            for (h && Bt(s[0], s[1], h) && (u = 1); ++l < u; )
              for (var _ = s[l], b = Ut(_), C = -1, A = b.length; ++C < A; ) {
                var z = b[C],
                  q = n[z];
                (q === r || (Pn(q, Es[z]) && !Qe.call(n, z))) && (n[z] = _[z]);
              }
            return n;
          }),
          J3 = Fe(function (n) {
            return n.push(r, hd), Kt(Xd, r, n);
          });
        function Q3(n, s) {
          return cf(n, $e(s, 3), Rn);
        }
        function e6(n, s) {
          return cf(n, $e(s, 3), ma);
        }
        function t6(n, s) {
          return n == null ? n : va(n, $e(s, 3), Ut);
        }
        function n6(n, s) {
          return n == null ? n : Of(n, $e(s, 3), Ut);
        }
        function r6(n, s) {
          return n && Rn(n, $e(s, 3));
        }
        function s6(n, s) {
          return n && ma(n, $e(s, 3));
        }
        function i6(n) {
          return n == null ? [] : Po(n, mt(n));
        }
        function o6(n) {
          return n == null ? [] : Po(n, Ut(n));
        }
        function Za(n, s, l) {
          var u = n == null ? r : jr(n, s);
          return u === r ? l : u;
        }
        function l6(n, s) {
          return n != null && _d(n, s, kv);
        }
        function Xa(n, s) {
          return n != null && _d(n, s, Iv);
        }
        var a6 = ad(function (n, s, l) {
            s != null && typeof s.toString != 'function' && (s = fo.call(s)),
              (n[s] = l);
          }, Qa(zt)),
          c6 = ad(function (n, s, l) {
            s != null && typeof s.toString != 'function' && (s = fo.call(s)),
              Qe.call(n, s) ? n[s].push(l) : (n[s] = [l]);
          }, $e),
          u6 = Fe(pi);
        function mt(n) {
          return Ht(n) ? Sf(n) : xa(n);
        }
        function Ut(n) {
          return Ht(n) ? Sf(n, !0) : Hv(n);
        }
        function f6(n, s) {
          var l = {};
          return (
            (s = $e(s, 3)),
            Rn(n, function (u, h, _) {
              jn(l, s(u, h, _), u);
            }),
            l
          );
        }
        function d6(n, s) {
          var l = {};
          return (
            (s = $e(s, 3)),
            Rn(n, function (u, h, _) {
              jn(l, h, s(u, h, _));
            }),
            l
          );
        }
        var h6 = Is(function (n, s, l) {
            So(n, s, l);
          }),
          Xd = Is(function (n, s, l, u) {
            So(n, s, l, u);
          }),
          p6 = Xn(function (n, s) {
            var l = {};
            if (n == null) return l;
            var u = !1;
            (s = rt(s, function (_) {
              return (_ = Sr(_, n)), u || (u = _.length > 1), _;
            })),
              Nn(n, Fa(n), l),
              u && (l = fn(l, m | y | S, am));
            for (var h = s.length; h--; ) Ta(l, s[h]);
            return l;
          });
        function g6(n, s) {
          return Jd(n, Ho($e(s)));
        }
        var _6 = Xn(function (n, s) {
          return n == null ? {} : zv(n, s);
        });
        function Jd(n, s) {
          if (n == null) return {};
          var l = rt(Fa(n), function (u) {
            return [u];
          });
          return (
            (s = $e(s)),
            zf(n, l, function (u, h) {
              return s(u, h[0]);
            })
          );
        }
        function v6(n, s, l) {
          s = Sr(s, n);
          var u = -1,
            h = s.length;
          for (h || ((h = 1), (n = r)); ++u < h; ) {
            var _ = n == null ? r : n[Vn(s[u])];
            _ === r && ((u = h), (_ = l)), (n = Qn(_) ? _.call(n) : _);
          }
          return n;
        }
        function m6(n, s, l) {
          return n == null ? n : _i(n, s, l);
        }
        function y6(n, s, l, u) {
          return (
            (u = typeof u == 'function' ? u : r), n == null ? n : _i(n, s, l, u)
          );
        }
        var Qd = fd(mt),
          eh = fd(Ut);
        function b6(n, s, l) {
          var u = Ie(n),
            h = u || Tr(n) || Ms(n);
          if (((s = $e(s, 4)), l == null)) {
            var _ = n && n.constructor;
            h
              ? (l = u ? new _() : [])
              : st(n)
                ? (l = Qn(_) ? ks(go(n)) : {})
                : (l = {});
          }
          return (
            (h ? an : Rn)(n, function (b, C, A) {
              return s(l, b, C, A);
            }),
            l
          );
        }
        function w6(n, s) {
          return n == null ? !0 : Ta(n, s);
        }
        function x6(n, s, l) {
          return n == null ? n : Yf(n, s, Ia(l));
        }
        function $6(n, s, l, u) {
          return (
            (u = typeof u == 'function' ? u : r),
            n == null ? n : Yf(n, s, Ia(l), u)
          );
        }
        function Bs(n) {
          return n == null ? [] : ca(n, mt(n));
        }
        function C6(n) {
          return n == null ? [] : ca(n, Ut(n));
        }
        function P6(n, s, l) {
          return (
            l === r && ((l = s), (s = r)),
            l !== r && ((l = pn(l)), (l = l === l ? l : 0)),
            s !== r && ((s = pn(s)), (s = s === s ? s : 0)),
            Yr(pn(n), s, l)
          );
        }
        function S6(n, s, l) {
          return (
            (s = er(s)),
            l === r ? ((l = s), (s = 0)) : (l = er(l)),
            (n = pn(n)),
            Lv(n, s, l)
          );
        }
        function E6(n, s, l) {
          if (
            (l && typeof l != 'boolean' && Bt(n, s, l) && (s = l = r),
            l === r &&
              (typeof s == 'boolean'
                ? ((l = s), (s = r))
                : typeof n == 'boolean' && ((l = n), (n = r))),
            n === r && s === r
              ? ((n = 0), (s = 1))
              : ((n = er(n)), s === r ? ((s = n), (n = 0)) : (s = er(s))),
            n > s)
          ) {
            var u = n;
            (n = s), (s = u);
          }
          if (l || n % 1 || s % 1) {
            var h = Cf();
            return kt(n + h * (s - n + i_('1e-' + ((h + '').length - 1))), s);
          }
          return Pa(n, s);
        }
        var T6 = Ls(function (n, s, l) {
          return (s = s.toLowerCase()), n + (l ? th(s) : s);
        });
        function th(n) {
          return Ja(je(n).toLowerCase());
        }
        function nh(n) {
          return (n = je(n)), n && n.replace(kg, m_).replace(jg, '');
        }
        function A6(n, s, l) {
          (n = je(n)), (s = Yt(s));
          var u = n.length;
          l = l === r ? u : Yr(Le(l), 0, u);
          var h = l;
          return (l -= s.length), l >= 0 && n.slice(l, h) == s;
        }
        function k6(n) {
          return (n = je(n)), n && ug.test(n) ? n.replace(Lu, y_) : n;
        }
        function I6(n) {
          return (n = je(n)), n && _g.test(n) ? n.replace(Gl, '\\$&') : n;
        }
        var L6 = Ls(function (n, s, l) {
            return n + (l ? '-' : '') + s.toLowerCase();
          }),
          O6 = Ls(function (n, s, l) {
            return n + (l ? ' ' : '') + s.toLowerCase();
          }),
          M6 = id('toLowerCase');
        function B6(n, s, l) {
          (n = je(n)), (s = Le(s));
          var u = s ? Ps(n) : 0;
          if (!s || u >= s) return n;
          var h = (s - u) / 2;
          return Lo(yo(h), l) + n + Lo(mo(h), l);
        }
        function F6(n, s, l) {
          (n = je(n)), (s = Le(s));
          var u = s ? Ps(n) : 0;
          return s && u < s ? n + Lo(s - u, l) : n;
        }
        function R6(n, s, l) {
          (n = je(n)), (s = Le(s));
          var u = s ? Ps(n) : 0;
          return s && u < s ? Lo(s - u, l) + n : n;
        }
        function N6(n, s, l) {
          return (
            l || s == null ? (s = 0) : s && (s = +s),
            W_(je(n).replace(Yl, ''), s || 0)
          );
        }
        function V6(n, s, l) {
          return (
            (l ? Bt(n, s, l) : s === r) ? (s = 1) : (s = Le(s)), Sa(je(n), s)
          );
        }
        function D6() {
          var n = arguments,
            s = je(n[0]);
          return n.length < 3 ? s : s.replace(n[1], n[2]);
        }
        var H6 = Ls(function (n, s, l) {
          return n + (l ? '_' : '') + s.toLowerCase();
        });
        function U6(n, s, l) {
          return (
            l && typeof l != 'number' && Bt(n, s, l) && (s = l = r),
            (l = l === r ? At : l >>> 0),
            l
              ? ((n = je(n)),
                n &&
                (typeof s == 'string' || (s != null && !ja(s))) &&
                ((s = Yt(s)), !s && Cs(n))
                  ? Er($n(n), 0, l)
                  : n.split(s, l))
              : []
          );
        }
        var z6 = Ls(function (n, s, l) {
          return n + (l ? ' ' : '') + Ja(s);
        });
        function q6(n, s, l) {
          return (
            (n = je(n)),
            (l = l == null ? 0 : Yr(Le(l), 0, n.length)),
            (s = Yt(s)),
            n.slice(l, l + s.length) == s
          );
        }
        function W6(n, s, l) {
          var u = g.templateSettings;
          l && Bt(n, s, l) && (s = r), (n = je(n)), (s = qo({}, s, u, dd));
          var h = qo({}, s.imports, u.imports, dd),
            _ = mt(h),
            b = ca(h, _),
            C,
            A,
            z = 0,
            q = s.interpolate || no,
            j = "__p += '",
            oe = fa(
              (s.escape || no).source +
                '|' +
                q.source +
                '|' +
                (q === Ou ? Cg : no).source +
                '|' +
                (s.evaluate || no).source +
                '|$',
              'g',
            ),
            ve =
              '//# sourceURL=' +
              (Qe.call(s, 'sourceURL')
                ? (s.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++e_ + ']') +
              `
`;
          n.replace(oe, function (Se, Re, De, Zt, Ft, Xt) {
            return (
              De || (De = Zt),
              (j += n.slice(z, Xt).replace(Ig, b_)),
              Re &&
                ((C = !0),
                (j +=
                  `' +
__e(` +
                  Re +
                  `) +
'`)),
              Ft &&
                ((A = !0),
                (j +=
                  `';
` +
                  Ft +
                  `;
__p += '`)),
              De &&
                (j +=
                  `' +
((__t = (` +
                  De +
                  `)) == null ? '' : __t) +
'`),
              (z = Xt + Se.length),
              Se
            );
          }),
            (j += `';
`);
          var Pe = Qe.call(s, 'variable') && s.variable;
          if (!Pe)
            j =
              `with (obj) {
` +
              j +
              `
}
`;
          else if (xg.test(Pe)) throw new ke(f);
          (j = (A ? j.replace(to, '') : j)
            .replace(lg, '$1')
            .replace(ag, '$1;')),
            (j =
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
              j +
              `return __p
}`);
          var Oe = sh(function () {
            return Ge(_, ve + 'return ' + j).apply(r, b);
          });
          if (((Oe.source = j), Ya(Oe))) throw Oe;
          return Oe;
        }
        function K6(n) {
          return je(n).toLowerCase();
        }
        function G6(n) {
          return je(n).toUpperCase();
        }
        function Y6(n, s, l) {
          if (((n = je(n)), n && (l || s === r))) return hf(n);
          if (!n || !(s = Yt(s))) return n;
          var u = $n(n),
            h = $n(s),
            _ = pf(u, h),
            b = gf(u, h) + 1;
          return Er(u, _, b).join('');
        }
        function j6(n, s, l) {
          if (((n = je(n)), n && (l || s === r))) return n.slice(0, vf(n) + 1);
          if (!n || !(s = Yt(s))) return n;
          var u = $n(n),
            h = gf(u, $n(s)) + 1;
          return Er(u, 0, h).join('');
        }
        function Z6(n, s, l) {
          if (((n = je(n)), n && (l || s === r))) return n.replace(Yl, '');
          if (!n || !(s = Yt(s))) return n;
          var u = $n(n),
            h = pf(u, $n(s));
          return Er(u, h).join('');
        }
        function X6(n, s) {
          var l = le,
            u = pe;
          if (st(s)) {
            var h = 'separator' in s ? s.separator : h;
            (l = 'length' in s ? Le(s.length) : l),
              (u = 'omission' in s ? Yt(s.omission) : u);
          }
          n = je(n);
          var _ = n.length;
          if (Cs(n)) {
            var b = $n(n);
            _ = b.length;
          }
          if (l >= _) return n;
          var C = l - Ps(u);
          if (C < 1) return u;
          var A = b ? Er(b, 0, C).join('') : n.slice(0, C);
          if (h === r) return A + u;
          if ((b && (C += A.length - C), ja(h))) {
            if (n.slice(C).search(h)) {
              var z,
                q = A;
              for (
                h.global || (h = fa(h.source, je(Mu.exec(h)) + 'g')),
                  h.lastIndex = 0;
                (z = h.exec(q));

              )
                var j = z.index;
              A = A.slice(0, j === r ? C : j);
            }
          } else if (n.indexOf(Yt(h), C) != C) {
            var oe = A.lastIndexOf(h);
            oe > -1 && (A = A.slice(0, oe));
          }
          return A + u;
        }
        function J6(n) {
          return (n = je(n)), n && cg.test(n) ? n.replace(Iu, E_) : n;
        }
        var Q6 = Ls(function (n, s, l) {
            return n + (l ? ' ' : '') + s.toUpperCase();
          }),
          Ja = id('toUpperCase');
        function rh(n, s, l) {
          return (
            (n = je(n)),
            (s = l ? r : s),
            s === r ? (x_(n) ? k_(n) : h_(n)) : n.match(s) || []
          );
        }
        var sh = Fe(function (n, s) {
            try {
              return Kt(n, r, s);
            } catch (l) {
              return Ya(l) ? l : new ke(l);
            }
          }),
          ey = Xn(function (n, s) {
            return (
              an(s, function (l) {
                (l = Vn(l)), jn(n, l, Ka(n[l], n));
              }),
              n
            );
          });
        function ty(n) {
          var s = n == null ? 0 : n.length,
            l = $e();
          return (
            (n = s
              ? rt(n, function (u) {
                  if (typeof u[1] != 'function') throw new cn(c);
                  return [l(u[0]), u[1]];
                })
              : []),
            Fe(function (u) {
              for (var h = -1; ++h < s; ) {
                var _ = n[h];
                if (Kt(_[0], this, u)) return Kt(_[1], this, u);
              }
            })
          );
        }
        function ny(n) {
          return Ev(fn(n, m));
        }
        function Qa(n) {
          return function () {
            return n;
          };
        }
        function ry(n, s) {
          return n == null || n !== n ? s : n;
        }
        var sy = ld(),
          iy = ld(!0);
        function zt(n) {
          return n;
        }
        function ec(n) {
          return Rf(typeof n == 'function' ? n : fn(n, m));
        }
        function oy(n) {
          return Vf(fn(n, m));
        }
        function ly(n, s) {
          return Df(n, fn(s, m));
        }
        var ay = Fe(function (n, s) {
            return function (l) {
              return pi(l, n, s);
            };
          }),
          cy = Fe(function (n, s) {
            return function (l) {
              return pi(n, l, s);
            };
          });
        function tc(n, s, l) {
          var u = mt(s),
            h = Po(s, u);
          l == null &&
            !(st(s) && (h.length || !u.length)) &&
            ((l = s), (s = n), (n = this), (h = Po(s, mt(s))));
          var _ = !(st(l) && 'chain' in l) || !!l.chain,
            b = Qn(n);
          return (
            an(h, function (C) {
              var A = s[C];
              (n[C] = A),
                b &&
                  (n.prototype[C] = function () {
                    var z = this.__chain__;
                    if (_ || z) {
                      var q = n(this.__wrapped__),
                        j = (q.__actions__ = Dt(this.__actions__));
                      return (
                        j.push({ func: A, args: arguments, thisArg: n }),
                        (q.__chain__ = z),
                        q
                      );
                    }
                    return A.apply(n, wr([this.value()], arguments));
                  });
            }),
            n
          );
        }
        function uy() {
          return xt._ === this && (xt._ = F_), this;
        }
        function nc() {}
        function fy(n) {
          return (
            (n = Le(n)),
            Fe(function (s) {
              return Hf(s, n);
            })
          );
        }
        var dy = Oa(rt),
          hy = Oa(af),
          py = Oa(sa);
        function ih(n) {
          return Da(n) ? ia(Vn(n)) : qv(n);
        }
        function gy(n) {
          return function (s) {
            return n == null ? r : jr(n, s);
          };
        }
        var _y = cd(),
          vy = cd(!0);
        function rc() {
          return [];
        }
        function sc() {
          return !1;
        }
        function my() {
          return {};
        }
        function yy() {
          return '';
        }
        function by() {
          return !0;
        }
        function wy(n, s) {
          if (((n = Le(n)), n < 1 || n > Ue)) return [];
          var l = At,
            u = kt(n, At);
          (s = $e(s)), (n -= At);
          for (var h = aa(u, s); ++l < n; ) s(l);
          return h;
        }
        function xy(n) {
          return Ie(n) ? rt(n, Vn) : jt(n) ? [n] : Dt(Pd(je(n)));
        }
        function $y(n) {
          var s = ++M_;
          return je(n) + s;
        }
        var Cy = Io(function (n, s) {
            return n + s;
          }, 0),
          Py = Ma('ceil'),
          Sy = Io(function (n, s) {
            return n / s;
          }, 1),
          Ey = Ma('floor');
        function Ty(n) {
          return n && n.length ? Co(n, zt, ya) : r;
        }
        function Ay(n, s) {
          return n && n.length ? Co(n, $e(s, 2), ya) : r;
        }
        function ky(n) {
          return ff(n, zt);
        }
        function Iy(n, s) {
          return ff(n, $e(s, 2));
        }
        function Ly(n) {
          return n && n.length ? Co(n, zt, $a) : r;
        }
        function Oy(n, s) {
          return n && n.length ? Co(n, $e(s, 2), $a) : r;
        }
        var My = Io(function (n, s) {
            return n * s;
          }, 1),
          By = Ma('round'),
          Fy = Io(function (n, s) {
            return n - s;
          }, 0);
        function Ry(n) {
          return n && n.length ? la(n, zt) : 0;
        }
        function Ny(n, s) {
          return n && n.length ? la(n, $e(s, 2)) : 0;
        }
        return (
          (g.after = o3),
          (g.ary = Fd),
          (g.assign = G3),
          (g.assignIn = Zd),
          (g.assignInWith = qo),
          (g.assignWith = Y3),
          (g.at = j3),
          (g.before = Rd),
          (g.bind = Ka),
          (g.bindAll = ey),
          (g.bindKey = Nd),
          (g.castArray = m3),
          (g.chain = Od),
          (g.chunk = Em),
          (g.compact = Tm),
          (g.concat = Am),
          (g.cond = ty),
          (g.conforms = ny),
          (g.constant = Qa),
          (g.countBy = R2),
          (g.create = Z3),
          (g.curry = Vd),
          (g.curryRight = Dd),
          (g.debounce = Hd),
          (g.defaults = X3),
          (g.defaultsDeep = J3),
          (g.defer = l3),
          (g.delay = a3),
          (g.difference = km),
          (g.differenceBy = Im),
          (g.differenceWith = Lm),
          (g.drop = Om),
          (g.dropRight = Mm),
          (g.dropRightWhile = Bm),
          (g.dropWhile = Fm),
          (g.fill = Rm),
          (g.filter = V2),
          (g.flatMap = U2),
          (g.flatMapDeep = z2),
          (g.flatMapDepth = q2),
          (g.flatten = Ad),
          (g.flattenDeep = Nm),
          (g.flattenDepth = Vm),
          (g.flip = c3),
          (g.flow = sy),
          (g.flowRight = iy),
          (g.fromPairs = Dm),
          (g.functions = i6),
          (g.functionsIn = o6),
          (g.groupBy = W2),
          (g.initial = Um),
          (g.intersection = zm),
          (g.intersectionBy = qm),
          (g.intersectionWith = Wm),
          (g.invert = a6),
          (g.invertBy = c6),
          (g.invokeMap = G2),
          (g.iteratee = ec),
          (g.keyBy = Y2),
          (g.keys = mt),
          (g.keysIn = Ut),
          (g.map = No),
          (g.mapKeys = f6),
          (g.mapValues = d6),
          (g.matches = oy),
          (g.matchesProperty = ly),
          (g.memoize = Do),
          (g.merge = h6),
          (g.mergeWith = Xd),
          (g.method = ay),
          (g.methodOf = cy),
          (g.mixin = tc),
          (g.negate = Ho),
          (g.nthArg = fy),
          (g.omit = p6),
          (g.omitBy = g6),
          (g.once = u3),
          (g.orderBy = j2),
          (g.over = dy),
          (g.overArgs = f3),
          (g.overEvery = hy),
          (g.overSome = py),
          (g.partial = Ga),
          (g.partialRight = Ud),
          (g.partition = Z2),
          (g.pick = _6),
          (g.pickBy = Jd),
          (g.property = ih),
          (g.propertyOf = gy),
          (g.pull = jm),
          (g.pullAll = Id),
          (g.pullAllBy = Zm),
          (g.pullAllWith = Xm),
          (g.pullAt = Jm),
          (g.range = _y),
          (g.rangeRight = vy),
          (g.rearg = d3),
          (g.reject = Q2),
          (g.remove = Qm),
          (g.rest = h3),
          (g.reverse = qa),
          (g.sampleSize = t3),
          (g.set = m6),
          (g.setWith = y6),
          (g.shuffle = n3),
          (g.slice = e2),
          (g.sortBy = i3),
          (g.sortedUniq = l2),
          (g.sortedUniqBy = a2),
          (g.split = U6),
          (g.spread = p3),
          (g.tail = c2),
          (g.take = u2),
          (g.takeRight = f2),
          (g.takeRightWhile = d2),
          (g.takeWhile = h2),
          (g.tap = T2),
          (g.throttle = g3),
          (g.thru = Ro),
          (g.toArray = Gd),
          (g.toPairs = Qd),
          (g.toPairsIn = eh),
          (g.toPath = xy),
          (g.toPlainObject = jd),
          (g.transform = b6),
          (g.unary = _3),
          (g.union = p2),
          (g.unionBy = g2),
          (g.unionWith = _2),
          (g.uniq = v2),
          (g.uniqBy = m2),
          (g.uniqWith = y2),
          (g.unset = w6),
          (g.unzip = Wa),
          (g.unzipWith = Ld),
          (g.update = x6),
          (g.updateWith = $6),
          (g.values = Bs),
          (g.valuesIn = C6),
          (g.without = b2),
          (g.words = rh),
          (g.wrap = v3),
          (g.xor = w2),
          (g.xorBy = x2),
          (g.xorWith = $2),
          (g.zip = C2),
          (g.zipObject = P2),
          (g.zipObjectDeep = S2),
          (g.zipWith = E2),
          (g.entries = Qd),
          (g.entriesIn = eh),
          (g.extend = Zd),
          (g.extendWith = qo),
          tc(g, g),
          (g.add = Cy),
          (g.attempt = sh),
          (g.camelCase = T6),
          (g.capitalize = th),
          (g.ceil = Py),
          (g.clamp = P6),
          (g.clone = y3),
          (g.cloneDeep = w3),
          (g.cloneDeepWith = x3),
          (g.cloneWith = b3),
          (g.conformsTo = $3),
          (g.deburr = nh),
          (g.defaultTo = ry),
          (g.divide = Sy),
          (g.endsWith = A6),
          (g.eq = Pn),
          (g.escape = k6),
          (g.escapeRegExp = I6),
          (g.every = N2),
          (g.find = D2),
          (g.findIndex = Ed),
          (g.findKey = Q3),
          (g.findLast = H2),
          (g.findLastIndex = Td),
          (g.findLastKey = e6),
          (g.floor = Ey),
          (g.forEach = Md),
          (g.forEachRight = Bd),
          (g.forIn = t6),
          (g.forInRight = n6),
          (g.forOwn = r6),
          (g.forOwnRight = s6),
          (g.get = Za),
          (g.gt = C3),
          (g.gte = P3),
          (g.has = l6),
          (g.hasIn = Xa),
          (g.head = kd),
          (g.identity = zt),
          (g.includes = K2),
          (g.indexOf = Hm),
          (g.inRange = S6),
          (g.invoke = u6),
          (g.isArguments = Jr),
          (g.isArray = Ie),
          (g.isArrayBuffer = S3),
          (g.isArrayLike = Ht),
          (g.isArrayLikeObject = ut),
          (g.isBoolean = E3),
          (g.isBuffer = Tr),
          (g.isDate = T3),
          (g.isElement = A3),
          (g.isEmpty = k3),
          (g.isEqual = I3),
          (g.isEqualWith = L3),
          (g.isError = Ya),
          (g.isFinite = O3),
          (g.isFunction = Qn),
          (g.isInteger = zd),
          (g.isLength = Uo),
          (g.isMap = qd),
          (g.isMatch = M3),
          (g.isMatchWith = B3),
          (g.isNaN = F3),
          (g.isNative = R3),
          (g.isNil = V3),
          (g.isNull = N3),
          (g.isNumber = Wd),
          (g.isObject = st),
          (g.isObjectLike = ot),
          (g.isPlainObject = bi),
          (g.isRegExp = ja),
          (g.isSafeInteger = D3),
          (g.isSet = Kd),
          (g.isString = zo),
          (g.isSymbol = jt),
          (g.isTypedArray = Ms),
          (g.isUndefined = H3),
          (g.isWeakMap = U3),
          (g.isWeakSet = z3),
          (g.join = Km),
          (g.kebabCase = L6),
          (g.last = hn),
          (g.lastIndexOf = Gm),
          (g.lowerCase = O6),
          (g.lowerFirst = M6),
          (g.lt = q3),
          (g.lte = W3),
          (g.max = Ty),
          (g.maxBy = Ay),
          (g.mean = ky),
          (g.meanBy = Iy),
          (g.min = Ly),
          (g.minBy = Oy),
          (g.stubArray = rc),
          (g.stubFalse = sc),
          (g.stubObject = my),
          (g.stubString = yy),
          (g.stubTrue = by),
          (g.multiply = My),
          (g.nth = Ym),
          (g.noConflict = uy),
          (g.noop = nc),
          (g.now = Vo),
          (g.pad = B6),
          (g.padEnd = F6),
          (g.padStart = R6),
          (g.parseInt = N6),
          (g.random = E6),
          (g.reduce = X2),
          (g.reduceRight = J2),
          (g.repeat = V6),
          (g.replace = D6),
          (g.result = v6),
          (g.round = By),
          (g.runInContext = T),
          (g.sample = e3),
          (g.size = r3),
          (g.snakeCase = H6),
          (g.some = s3),
          (g.sortedIndex = t2),
          (g.sortedIndexBy = n2),
          (g.sortedIndexOf = r2),
          (g.sortedLastIndex = s2),
          (g.sortedLastIndexBy = i2),
          (g.sortedLastIndexOf = o2),
          (g.startCase = z6),
          (g.startsWith = q6),
          (g.subtract = Fy),
          (g.sum = Ry),
          (g.sumBy = Ny),
          (g.template = W6),
          (g.times = wy),
          (g.toFinite = er),
          (g.toInteger = Le),
          (g.toLength = Yd),
          (g.toLower = K6),
          (g.toNumber = pn),
          (g.toSafeInteger = K3),
          (g.toString = je),
          (g.toUpper = G6),
          (g.trim = Y6),
          (g.trimEnd = j6),
          (g.trimStart = Z6),
          (g.truncate = X6),
          (g.unescape = J6),
          (g.uniqueId = $y),
          (g.upperCase = Q6),
          (g.upperFirst = Ja),
          (g.each = Md),
          (g.eachRight = Bd),
          (g.first = kd),
          tc(
            g,
            (function () {
              var n = {};
              return (
                Rn(g, function (s, l) {
                  Qe.call(g.prototype, l) || (n[l] = s);
                }),
                n
              );
            })(),
            { chain: !1 },
          ),
          (g.VERSION = i),
          an(
            [
              'bind',
              'bindKey',
              'curry',
              'curryRight',
              'partial',
              'partialRight',
            ],
            function (n) {
              g[n].placeholder = g;
            },
          ),
          an(['drop', 'take'], function (n, s) {
            (Ne.prototype[n] = function (l) {
              l = l === r ? 1 : gt(Le(l), 0);
              var u = this.__filtered__ && !s ? new Ne(this) : this.clone();
              return (
                u.__filtered__
                  ? (u.__takeCount__ = kt(l, u.__takeCount__))
                  : u.__views__.push({
                      size: kt(l, At),
                      type: n + (u.__dir__ < 0 ? 'Right' : ''),
                    }),
                u
              );
            }),
              (Ne.prototype[n + 'Right'] = function (l) {
                return this.reverse()[n](l).reverse();
              });
          }),
          an(['filter', 'map', 'takeWhile'], function (n, s) {
            var l = s + 1,
              u = l == _e || l == Xe;
            Ne.prototype[n] = function (h) {
              var _ = this.clone();
              return (
                _.__iteratees__.push({ iteratee: $e(h, 3), type: l }),
                (_.__filtered__ = _.__filtered__ || u),
                _
              );
            };
          }),
          an(['head', 'last'], function (n, s) {
            var l = 'take' + (s ? 'Right' : '');
            Ne.prototype[n] = function () {
              return this[l](1).value()[0];
            };
          }),
          an(['initial', 'tail'], function (n, s) {
            var l = 'drop' + (s ? '' : 'Right');
            Ne.prototype[n] = function () {
              return this.__filtered__ ? new Ne(this) : this[l](1);
            };
          }),
          (Ne.prototype.compact = function () {
            return this.filter(zt);
          }),
          (Ne.prototype.find = function (n) {
            return this.filter(n).head();
          }),
          (Ne.prototype.findLast = function (n) {
            return this.reverse().find(n);
          }),
          (Ne.prototype.invokeMap = Fe(function (n, s) {
            return typeof n == 'function'
              ? new Ne(this)
              : this.map(function (l) {
                  return pi(l, n, s);
                });
          })),
          (Ne.prototype.reject = function (n) {
            return this.filter(Ho($e(n)));
          }),
          (Ne.prototype.slice = function (n, s) {
            n = Le(n);
            var l = this;
            return l.__filtered__ && (n > 0 || s < 0)
              ? new Ne(l)
              : (n < 0 ? (l = l.takeRight(-n)) : n && (l = l.drop(n)),
                s !== r &&
                  ((s = Le(s)), (l = s < 0 ? l.dropRight(-s) : l.take(s - n))),
                l);
          }),
          (Ne.prototype.takeRightWhile = function (n) {
            return this.reverse().takeWhile(n).reverse();
          }),
          (Ne.prototype.toArray = function () {
            return this.take(At);
          }),
          Rn(Ne.prototype, function (n, s) {
            var l = /^(?:filter|find|map|reject)|While$/.test(s),
              u = /^(?:head|last)$/.test(s),
              h = g[u ? 'take' + (s == 'last' ? 'Right' : '') : s],
              _ = u || /^find/.test(s);
            h &&
              (g.prototype[s] = function () {
                var b = this.__wrapped__,
                  C = u ? [1] : arguments,
                  A = b instanceof Ne,
                  z = C[0],
                  q = A || Ie(b),
                  j = function (Re) {
                    var De = h.apply(g, wr([Re], C));
                    return u && oe ? De[0] : De;
                  };
                q &&
                  l &&
                  typeof z == 'function' &&
                  z.length != 1 &&
                  (A = q = !1);
                var oe = this.__chain__,
                  ve = !!this.__actions__.length,
                  Pe = _ && !oe,
                  Oe = A && !ve;
                if (!_ && q) {
                  b = Oe ? b : new Ne(this);
                  var Se = n.apply(b, C);
                  return (
                    Se.__actions__.push({ func: Ro, args: [j], thisArg: r }),
                    new un(Se, oe)
                  );
                }
                return Pe && Oe
                  ? n.apply(this, C)
                  : ((Se = this.thru(j)),
                    Pe ? (u ? Se.value()[0] : Se.value()) : Se);
              });
          }),
          an(
            ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
            function (n) {
              var s = ao[n],
                l = /^(?:push|sort|unshift)$/.test(n) ? 'tap' : 'thru',
                u = /^(?:pop|shift)$/.test(n);
              g.prototype[n] = function () {
                var h = arguments;
                if (u && !this.__chain__) {
                  var _ = this.value();
                  return s.apply(Ie(_) ? _ : [], h);
                }
                return this[l](function (b) {
                  return s.apply(Ie(b) ? b : [], h);
                });
              };
            },
          ),
          Rn(Ne.prototype, function (n, s) {
            var l = g[s];
            if (l) {
              var u = l.name + '';
              Qe.call(As, u) || (As[u] = []), As[u].push({ name: s, func: l });
            }
          }),
          (As[ko(r, x).name] = [{ name: 'wrapper', func: r }]),
          (Ne.prototype.clone = J_),
          (Ne.prototype.reverse = Q_),
          (Ne.prototype.value = ev),
          (g.prototype.at = A2),
          (g.prototype.chain = k2),
          (g.prototype.commit = I2),
          (g.prototype.next = L2),
          (g.prototype.plant = M2),
          (g.prototype.reverse = B2),
          (g.prototype.toJSON = g.prototype.valueOf = g.prototype.value = F2),
          (g.prototype.first = g.prototype.head),
          li && (g.prototype[li] = O2),
          g
        );
      },
      Ss = I_();
    qr ? (((qr.exports = Ss)._ = Ss), (ea._ = Ss)) : (xt._ = Ss);
  }).call($i);
})(ew, ml);
const tw = ml,
  nw = ['class', 'style'],
  rw = /^on[A-Z]/,
  sw = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: r = [] } = e,
      i = r.concat(nw),
      o = bn();
    return o
      ? ue(() => {
          var a;
          return tw.fromPairs(
            Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(
              ([c]) => !i.includes(c) && !(t && rw.test(c)),
            ),
          );
        })
      : (console.warn(
          'use-attrs',
          'getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function',
        ),
        ue(() => ({})));
  },
  iw = () => {
    const e = yt('buForm', void 0),
      t = yt('buFormItem', void 0);
    return { form: e, formItem: t };
  },
  ow = { key: 0, class: 'group--prepend' },
  lw = { key: 0, class: 'bu-input--prefix' },
  aw = { class: 'bu-input--prefix-inner' },
  cw = ['value', 'disabled'],
  uw = { key: 1, class: 'bu-input--suffix' },
  fw = { class: 'bu-input--suffix-inner' },
  dw = { class: 'bu-input--suffix-inner' },
  hw = { key: 1, class: 'group--append' },
  pw = J({ name: 'BuInput' }),
  gw = J({
    ...pw,
    props: {
      modelValue: null,
      disabled: { type: Boolean },
      clearable: { type: Boolean },
      size: null,
      prefixIcon: null,
      suffixIcon: null,
    },
    emits: ['update:model-value', 'focus'],
    setup(e, { emit: t }) {
      const { formItem: r } = iw(),
        i = 'bu-input',
        o = sw(),
        a = ce(!1);
      function c(p) {
        const v = p.target;
        t('update:model-value', v.value), r && r.validate();
      }
      const f = (p) => {
          (a.value = !0), t('focus', p);
        },
        d = () => {
          t('update:model-value', '');
        };
      return (p, v) => (
        $(),
        M(
          'div',
          {
            class: Ce([
              i,
              e.disabled ? 'is-disabled' : '',
              p.$attrs.class,
              p.$slots.prepend || p.$slots.append ? `${i}-group` : '',
              p.$slots.prepend ? `${i}-group--prepend` : '',
              p.$slots.append ? `${i}-group--append` : '',
            ]),
          },
          [
            p.$slots.prepend
              ? ($(), M('div', ow, [G(p.$slots, 'prepend')]))
              : de('', !0),
            B(
              'div',
              {
                class: Ce([
                  i + '--wrapper',
                  a.value && e.clearable ? 'is-focus' : '',
                ]),
              },
              [
                p.$slots.prefix || e.prefixIcon
                  ? ($(),
                    M('span', lw, [
                      B('span', aw, [
                        G(p.$slots, 'prefix'),
                        e.prefixIcon
                          ? ($(),
                            we(
                              L(vn),
                              { key: 0, size: '20', name: e.prefixIcon },
                              null,
                              8,
                              ['name'],
                            ))
                          : de('', !0),
                      ]),
                    ]))
                  : de('', !0),
                B(
                  'input',
                  _n(
                    {
                      value: e.modelValue,
                      class: [
                        `${i}--${e.size || 'default'}`,
                        'bu-input--inner',
                      ],
                      onInput: c,
                    },
                    L(o),
                    {
                      disabled: e.disabled,
                      onFocus: f,
                      onBlur:
                        v[0] || (v[0] = qi((m) => (a.value = !1), ['stop'])),
                    },
                  ),
                  null,
                  16,
                  cw,
                ),
                p.$slots.suffix || e.suffixIcon
                  ? ($(),
                    M('span', uw, [
                      B('span', fw, [
                        G(p.$slots, 'suffix'),
                        e.suffixIcon
                          ? ($(),
                            we(
                              L(vn),
                              { key: 0, size: '20', name: e.suffixIcon },
                              null,
                              8,
                              ['name'],
                            ))
                          : de('', !0),
                      ]),
                    ]))
                  : de('', !0),
                e.clearable && a.value && e.modelValue
                  ? ($(),
                    M(
                      'span',
                      {
                        key: 2,
                        class: 'bu-input--suffix bu-input--clear',
                        onMousedown: v[1] || (v[1] = qi(() => {}, ['prevent'])),
                        onClick: d,
                      },
                      [
                        B('span', dw, [
                          W(L(vn), { size: '20', name: 'close' }),
                        ]),
                      ],
                      32,
                    ))
                  : de('', !0),
              ],
              2,
            ),
            p.$slots.append
              ? ($(), M('div', hw, [G(p.$slots, 'append')]))
              : de('', !0),
          ],
          2,
        )
      );
    },
  });
const E1 = on(gw),
  _w = { class: 'bu-loading-spinner' },
  vw = { key: 0, class: 'bu-loading-svg bu-load-loop' },
  mw = { key: 1, 'aria-hidden': 'true', class: 'bu-loading-svg bu-load-loop' },
  yw = B('use', { 'xlink:href': '#icon-loading', fill: '#2d8cf0' }, null, -1),
  bw = [yw],
  ww = { class: 'bu-loading-text' },
  xw = J({
    name: 'loading',
    props: {
      backgroundColor: null,
      text: null,
      fullscreen: { type: Boolean },
      customClass: null,
      visible: null,
    },
    setup(e) {
      return (t, r) => (
        $(),
        we(
          An,
          { name: 'bu-loading-fade' },
          {
            default: se(() => [
              Zs(
                B(
                  'div',
                  {
                    class: Ce([
                      'bu-loading-mask',
                      [e.customClass, e.fullscreen ? 'is-fullscreen' : ''],
                    ]),
                    style: ht({ backgroundColor: e.backgroundColor }),
                  },
                  [
                    B('div', _w, [
                      t.$slots.spinner
                        ? ($(), M('span', vw, [G(t.$slots, 'spinner')]))
                        : ($(), M('svg', mw, bw)),
                      B('div', ww, Me(e.text), 1),
                    ]),
                  ],
                  6,
                ),
                [[hs, e.visible]],
              ),
            ]),
            _: 3,
          },
        )
      );
    },
  });
let nl;
const Hc = function (e = {}) {
    const t = document.createElement('div'),
      r = $w(e);
    r.fullscreen && nl && (r.parent.removeChild(t), nl.close());
    const i = ce(!1),
      o = In(
        xw,
        {
          backgroundColor: r.background,
          text: r.text,
          fullscreen: r.fullscreen,
          customClass: r.customClass,
          visible: i,
        },
        {
          spinner: r.spinner
            ? () =>
                dt(r.spinner)
                  ? In(vn, { name: r.spinner.value, size: 20 }, '')
                  : r.spinner
            : null,
        },
      );
    zr(o, t),
      r.parent.appendChild(t),
      (r.parent.style.position = 'relative'),
      Ln(() => {
        i.value = r.visible;
      });
    const a = {
      close: () => {
        (i.value = !1),
          r.parent.removeChild(t),
          r.closed && r.closed(),
          r.fullscreen && (nl = void 0);
      },
      vnode: o,
    };
    return r.fullscreen && (nl = a), a;
  },
  $w = (e) => {
    let t;
    return (
      rr(e.target)
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
  Xh = (e, t) => {
    const r = t.instance,
      i = (d) => (J8(t.value) ? t.value[d] : void 0),
      o = (d) => {
        const p = (rr(d) && (r == null ? void 0 : r[d])) || d;
        return p && ce(p);
      },
      a = (d) => o(e.getAttribute(`bu-loading-${t5(d)}`)),
      c = i('fullscreen') ?? t.modifiers.fullscreen,
      f = {
        text: a('text'),
        spinner: a('spinner'),
        background: a('background'),
        customClass: a('customClass'),
        fullscreen: c,
        target: i('target') ?? (c ? void 0 : e),
        body: i('body') ?? t.modifiers.body,
        lock: i('lock') ?? t.modifiers.lock,
      };
    e.BuLoading = { options: f, instance: Hc(f) };
  },
  Cw = {
    mounted(e, t) {
      console.log('binding', t), t.value && Xh(e, t);
    },
    updated(e, t) {
      const r = e.BuLoading;
      t.oldValue !== t.value &&
        (t.value && !t.oldValue ? Xh(e, t) : r == null || r.instance.close());
    },
    unmounted(e) {
      var t;
      (t = e.BuLoading) == null || t.instance.close();
    },
  };
const T1 = {
  install(e) {
    e.directive('loading', Cw), (e.config.globalProperties.$loading = Hc);
  },
  service: Hc,
};
const us = eu([]),
  Pw = (e) => {
    const t = us.findIndex((o) => o.id === e),
      r = us[t];
    let i;
    return t > 0 && (i = us[t - 1]), { current: r, prev: i };
  },
  Sw = (e) => {
    const { prev: t } = Pw(e);
    return t ? t.vm.exposed.bottom.value : 0;
  },
  Ew = (e, t) => (us.findIndex((i) => i.id === e) > 0 ? 20 : t),
  Tw = (e) => e,
  Aw = {
    message: { type: [String, Object, Function], default: '' },
    type: { type: String, default: 'info' },
    icon: { type: [String, Object, Function], default: '' },
    dangerouslyUseHTMLString: { type: Boolean, default: !1 },
    duration: { type: Number, default: 3e3 },
    showClose: { type: Boolean, default: !1 },
    offset: { type: Number, default: 16 },
    id: { type: String, default: '' },
    onClose: { type: Tw(Function), required: !1 },
  };
function A1(e) {
  return Sl() ? (El(e), !0) : !1;
}
function k1(e) {
  return typeof e == 'function' ? e() : L(e);
}
const I1 = typeof window < 'u';
function L1(e, t, r = {}) {
  const { immediate: i = !0 } = r,
    o = ce(!1);
  let a = null;
  function c() {
    a && (clearTimeout(a), (a = null));
  }
  function f() {
    (o.value = !1), c();
  }
  function d(...p) {
    c(),
      (o.value = !0),
      (a = setTimeout(() => {
        (o.value = !1), (a = null), e(...p);
      }, k1(t)));
  }
  return (
    i && ((o.value = !0), I1 && d()),
    A1(f),
    { isPending: ti(o), start: d, stop: f }
  );
}
function Jh(e) {
  var t;
  const r = k1(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const kw = I1 ? window : void 0;
function Iw() {
  const e = ce(!1);
  return (
    bn() &&
      ct(() => {
        e.value = !0;
      }),
    e
  );
}
function Lw(e) {
  const t = Iw();
  return ue(() => (t.value, !!e()));
}
var Qh = Object.getOwnPropertySymbols,
  Ow = Object.prototype.hasOwnProperty,
  Mw = Object.prototype.propertyIsEnumerable,
  Bw = (e, t) => {
    var r = {};
    for (var i in e) Ow.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
    if (e != null && Qh)
      for (var i of Qh(e)) t.indexOf(i) < 0 && Mw.call(e, i) && (r[i] = e[i]);
    return r;
  };
function Fw(e, t, r = {}) {
  const i = r,
    { window: o = kw } = i,
    a = Bw(i, ['window']);
  let c;
  const f = Lw(() => o && 'ResizeObserver' in o),
    d = () => {
      c && (c.disconnect(), (c = void 0));
    },
    p = ue(() => (Array.isArray(e) ? e.map((y) => Jh(y)) : [Jh(e)])),
    v = Pt(
      p,
      (y) => {
        if ((d(), f.value && o)) {
          c = new ResizeObserver(t);
          for (const S of y) S && c.observe(S, a);
        }
      },
      { immediate: !0, flush: 'post', deep: !0 },
    ),
    m = () => {
      d(), v();
    };
  return A1(m), { isSupported: f, stop: m };
}
const Rw = ['id'],
  Nw = { key: 0, class: 'bu-message--content' },
  Vw = ['innerHTML'],
  Dw = J({ name: 'BuMessage' }),
  Hw = J({
    ...Dw,
    props: Aw,
    emits: ['destory'],
    setup(e, { expose: t }) {
      const r = e,
        i = ce(!1),
        o = ce(),
        a = ce(0);
      let c;
      const f = ue(() => Sw(r.id)),
        d = ue(() => a.value + p.value),
        p = ue(() => Ew(r.id, r.offset) + f.value);
      function v() {
        c == null || c();
      }
      function m() {
        r.duration !== 0 &&
          ({ stop: c } = L1(() => {
            y();
          }, r.duration));
      }
      function y() {
        i.value = !1;
      }
      return (
        ct(() => {
          m(), (i.value = !0);
        }),
        Fw(o, () => {
          a.value = o.value.getBoundingClientRect().height;
        }),
        t({ close: y, visible: i, bottom: d }),
        (S, R) => (
          $(),
          we(
            An,
            {
              name: 'bu-message-fade',
              onAfterLeave: R[0] || (R[0] = (k) => S.$emit('destroy')),
              onBeforeLeave: S.onClose,
            },
            {
              default: se(() => [
                Zs(
                  B(
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
                      ref: o,
                      style: ht({ top: L(p) + 'px', zIndex: 99 }),
                      onMouseenter: v,
                      onMouseleave: m,
                    },
                    [
                      G(S.$slots, 'default', {}, () => [
                        S.dangerouslyUseHTMLString
                          ? ($(), M('p', Nw, Me(S.message), 1))
                          : ($(),
                            M(
                              'p',
                              {
                                key: 1,
                                class: 'bu-message--content',
                                innerHTML: S.message,
                              },
                              null,
                              8,
                              Vw,
                            )),
                      ]),
                      S.showClose
                        ? ($(),
                          we(L(vn), {
                            key: 0,
                            class: 'bu-message--close',
                            name: 'close',
                            size: 16,
                          }))
                        : de('', !0),
                    ],
                    46,
                    Rw,
                  ),
                  [[hs, i.value]],
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
let Uw = 1;
const zw = (e) => {
    const t = Ww(e);
    return us.push(t), console.log('container', t.id), t.handler;
  },
  qw = (e) => {
    const t = us.indexOf(e);
    if (t === -1) return;
    us.splice(t, 1);
    const { handler: r } = e;
    r.close();
  },
  Ww = (e) => {
    const t = `message_${Uw++}`,
      r = document.createElement('div'),
      i = {
        ...e,
        id: t,
        onClose: () => {
          var d;
          (d = e.onClose) == null || d.call(e), qw(f);
        },
        onDestroy: () => {
          zr(null, r);
        },
      },
      o = W(
        Hw,
        i,
        Wh(i.message) || kn(i.message)
          ? { default: Wh(i.message) ? i.message : () => i.message }
          : null,
      );
    zr(o, r), document.body.append(r.firstElementChild);
    const a = o.component,
      f = {
        id: t,
        vnode: o,
        vm: a,
        handler: {
          close: () => {
            a.exposed.visible.value = !1;
          },
        },
      };
    return f;
  },
  O1 = c1(zw, '$message'),
  Kw = J({ name: 'BuModal' }),
  Gw = J({
    ...Kw,
    setup(e) {
      return (t, r) => ($(), M('div'));
    },
  }),
  M1 = on(Gw);
const Yw = {
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
  jw = { destroy: () => !0 },
  Zw = J({
    name: 'BuNofication',
    emits: jw,
    props: Yw,
    components: { BuIcon: vn },
    setup(e) {
      const t = ce(!1);
      let r;
      const i = ue(() => (e.position.endsWith('right') ? 'right' : 'left')),
        o = ue(() => (e.position.startsWith('top') ? 'top' : 'bottom')),
        a = ue(() => ({ [o.value]: `${e.offset}px`, zIndex: e.zIndex })),
        c = () => {
          console.log('en'), (t.value = !1);
        },
        f = () => {
          e.duration > 0 &&
            ({ stop: r } = L1(() => {
              t.value && c();
            }, e.duration));
        },
        d = () => {
          r == null || r();
        };
      return (
        ct(() => {
          f(), (t.value = !0);
        }),
        {
          visible: t,
          horizontalClass: i,
          positionStyle: a,
          close: c,
          startTimer: f,
          clearTimer: d,
        }
      );
    },
  }),
  Xw = ['id'],
  Jw = { class: 'bu-notification--group' },
  Qw = { class: 'bu-notification--title' },
  ex = { class: 'bu-notification--content' },
  tx = { key: 0 },
  nx = ['innerHTML'];
function rx(e, t, r, i, o, a) {
  const c = fr('bu-icon');
  return (
    $(),
    we(
      An,
      {
        name: 'bu-notification-fade',
        onBeforeLeave: e.onClose,
        onAfterLeave: t[2] || (t[2] = (f) => e.$emit('destroy')),
      },
      {
        default: se(() => [
          Zs(
            B(
              'div',
              {
                id: e.id,
                class: Ce(['bu-notification', e.horizontalClass]),
                style: ht(e.positionStyle),
                onMouseenter:
                  t[0] || (t[0] = (...f) => e.clearTimer && e.clearTimer(...f)),
                onMouseleave:
                  t[1] || (t[1] = (...f) => e.startTimer && e.startTimer(...f)),
              },
              [
                e.type
                  ? ($(),
                    we(
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
                  : de('', !0),
                B('div', Jw, [
                  B('div', Qw, Me(e.title), 1),
                  B('div', ex, [
                    G(e.$slots, 'default', {}, () => [
                      e.dangerouslyUseHTMLString
                        ? ($(),
                          M('p', { key: 1, innerHTML: e.message }, null, 8, nx))
                        : ($(), M('p', tx, Me(e.message), 1)),
                    ]),
                  ]),
                  W(
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
              Xw,
            ),
            [[hs, e.visible]],
          ),
        ]),
        _: 3,
      },
      8,
      ['onBeforeLeave'],
    )
  );
}
const sx = he(Zw, [['render', rx]]),
  Uc = 16;
let ix = 1;
const zc = {
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': [],
  },
  ox = function (e = {}) {
    const t = document.body,
      r = document.createElement('div');
    (typeof e == 'string' || kn(e)) && (e = { message: e });
    const i = e.position || 'top-right';
    let o = e.offset || 0;
    zc[i].forEach(({ vm: p }) => {
      var v;
      o += (((v = p.el) == null ? void 0 : v.offsetHeight) || 0) + Uc;
    }),
      (o += Uc);
    const a = `notification_${ix++}`,
      c = e.onClose,
      f = {
        ...e,
        zIndex: 9999,
        offset: o,
        id: a,
        onClose: () => {
          lx(a, i, c);
        },
      },
      d = W(sx, f, kn(f.message) ? { default: () => f.message } : null);
    return (
      (d.props.onDestroy = () => {
        zr(null, r);
      }),
      zr(d, r),
      zc[i].push({ vm: d }),
      t.appendChild(r.firstElementChild),
      { close: () => (d.component.proxy.visible = !1) }
    );
  };
function lx(e, t, r) {
  const i = zc[t],
    o = i.findIndex(({ vm: p }) => {
      var v;
      return ((v = p.component) == null ? void 0 : v.props.id) === e;
    });
  if (o === -1) return;
  const { vm: a } = i[o];
  if (!a) return;
  r == null || r(a);
  const c = a.el.offsetHeight,
    f = t.split('-')[0];
  i.splice(o, 1);
  const d = i.length;
  if (!(d < 1))
    for (let p = o; p < d; p++) {
      const { el: v, component: m } = i[p].vm,
        y = parseInt(v.style[f], 10) - c - Uc;
      m.props.offset = y;
    }
}
const B1 = c1(ox, '$notify'),
  ax = {
    size: { type: [String, Number], default: '' },
    direction: { type: String, default: 'horizontal' },
    alignment: { type: String, default: 'center' },
    wrap: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 },
  },
  cx = J({
    name: 'BuSpace',
    props: ax,
    setup(e, { slots: t }) {
      const { direction: r, wrap: i, alignment: o, size: a } = ar(e),
        c = 'bu-space',
        f = ue(() => [c, `${c}--${r.value}`]),
        d = ue(() =>
          a.value
            ? typeof a.value == 'string'
              ? a.value
              : a.value + 'px'
            : '8px',
        );
      return () => {
        const p = G(t, 'default', { key: 0 }, () => []);
        return (p.children ?? []).length === 0
          ? null
          : W(
              'div',
              {
                class: f.value,
                style: {
                  'flex-wrap': i.value ? 'wrap' : 'nowrap',
                  'align-items': o.value,
                },
              },
              [
                X8(p.children) &&
                  p.children.map((v) =>
                    v.type === St
                      ? In(v)
                      : In(
                          'div',
                          {
                            class: 'bu-space--item',
                            style: {
                              'margin-bottom':
                                r.value === 'horizontal' ? 0 : d.value,
                              'margin-right':
                                r.value === 'horizontal' ? d.value : 0,
                            },
                          },
                          v,
                        ),
                  ),
              ],
            );
      };
    },
  });
const F1 = on(cx),
  ux = { key: 0, class: 'bu-split--horizontal' },
  fx = { key: 1, class: 'bu-split--vertical' },
  dx = J({ name: 'BuSplit' }),
  hx = J({
    ...dx,
    props: {
      modelValue: { default: 0.5 },
      mode: { default: 'horizontal' },
      min: { default: '40px' },
      max: { default: '40px' },
    },
    emits: ['update:model-value', 'mousemove'],
    setup(e, { emit: t }) {
      const r = e,
        i = ce(),
        o = ce(0),
        a = ce(0),
        c = ce(0),
        f = ce(0),
        d = ce(!1),
        p = ce(),
        v = ue(() =>
          r.mode === 'horizontal' ? 'offsetWidth' : 'offsetHeight',
        ),
        m = ue(() => 100 - o.value),
        y = ue(() => ({ 'bu-split-pane-moving': d.value }));
      Pt(
        () => r.modelValue,
        () => {
          k();
        },
        { immediate: !0 },
      ),
        ct(() => {
          fc(window, 'resize', k);
        }),
        ri(() => {
          dc(window, 'resize', k);
        });
      const S = (V, Y) => parseFloat(String(V)) / Y;
      function R(V) {
        (a.value = r.mode === 'horizontal' ? V.pageX : V.pageY),
          (p.value = r.modelValue),
          (d.value = !0),
          fc(document, 'mousemove', x),
          fc(document, 'mouseup', P);
      }
      function k() {
        Ln(() => {
          (c.value = O('min')),
            (f.value = O('max')),
            (o.value =
              (rr(r.modelValue)
                ? S(r.modelValue, i.value[v.value])
                : r.modelValue) * 100);
        });
      }
      function O(V) {
        let Y = i.value[v.value];
        return rr(r.modelValue)
          ? rr(r[V])
            ? r[V]
            : Y * Number(r[V])
          : rr(r[V])
            ? S(r[V], Y)
            : r[V];
      }
      function x(V) {
        const Y = V;
        let D = (r.mode === 'horizontal' ? Y.pageX : Y.pageY) - a.value,
          ie = i.value[v.value],
          le = rr(p.value)
            ? `${parseFloat(p.value) + D}px`
            : S((ie * p.value + D).toString(), ie),
          pe = I(le);
        parseFloat(le) <= c.value && (le = F(le, c.value)),
          parseFloat(pe) <= f.value && (le = I(F(pe, f.value))),
          t('update:model-value', le),
          t('mousemove', V);
      }
      function P() {
        (d.value = !1),
          dc(document, 'mousemove', x),
          dc(document, 'mouseup', P);
      }
      function I(V) {
        let Y = 0;
        return (
          rr(V)
            ? (Y = `${i.value[v.value] - parseFloat(V)}px`)
            : (Y = 1 - Number(V)),
          Y
        );
      }
      function F(V, Y) {
        return rr(V) ? `${Math.max(parseFloat(V), Y)}px` : Math.max(V, Y);
      }
      return (V, Y) => (
        $(),
        M(
          'div',
          { class: 'bu-split', ref_key: 'outerWrapper', ref: i },
          [
            e.mode === 'horizontal'
              ? ($(),
                M('div', ux, [
                  B(
                    'div',
                    {
                      class: Ce(['bu-split-left-pane', L(y)]),
                      style: ht({ right: `${L(m)}%` }),
                    },
                    [G(V.$slots, 'left')],
                    6,
                  ),
                  B(
                    'div',
                    {
                      class: 'bu-split-trigger',
                      onMousedown: R,
                      style: ht({ left: `${o.value}%` }),
                    },
                    null,
                    36,
                  ),
                  B(
                    'div',
                    {
                      class: Ce(['bu-split-right-pane', L(y)]),
                      style: ht({ left: `${o.value}%` }),
                    },
                    [G(V.$slots, 'right')],
                    6,
                  ),
                ]))
              : ($(),
                M('div', fx, [
                  B(
                    'div',
                    {
                      class: Ce(['bu-split-top-pane', L(y)]),
                      style: ht({ bottom: `${L(m)}%` }),
                    },
                    [G(V.$slots, 'top')],
                    6,
                  ),
                  B(
                    'div',
                    {
                      class: 'bu-split-trigger bu-split-trigger--vertical',
                      onMousedown: R,
                      style: ht({ top: `${o.value}%` }),
                    },
                    null,
                    36,
                  ),
                  B(
                    'div',
                    {
                      class: Ce(['bu-split-bottom-pane', L(y)]),
                      style: ht({ top: `${o.value}%` }),
                    },
                    [G(V.$slots, 'bottom')],
                    6,
                  ),
                ])),
          ],
          512,
        )
      );
    },
  });
const R1 = on(hx),
  px = { class: 'bu-title-content' },
  gx = J({ name: 'BuTitle' }),
  _x = J({
    ...gx,
    props: { sub: { type: Boolean }, border: { type: Boolean }, type: null },
    setup(e) {
      const { sub: t = !1, border: r = !1, type: i = 'primary' } = e,
        o = 'bu-title',
        a = ue(() => {
          let c = [o, `${o}--${i}`];
          return t && c.push(`${o}--sub`), r && c.push(`${o}--border`), c;
        });
      return (c, f) => (
        $(),
        M(
          'div',
          { class: Ce(L(a)) },
          [
            B('div', px, [G(c.$slots, 'default'), G(c.$slots, 'left')]),
            G(c.$slots, 'right'),
          ],
          2,
        )
      );
    },
  });
const N1 = on(_x),
  V1 = {
    data: { type: Object, required: !0 },
    lineable: { type: Boolean, default: !1 },
    checkable: { type: Boolean, default: !1 },
    dragdrop: { type: [Boolean, Object], default: !1 },
    height: { type: Number },
    itemHeight: { type: Number, default: 30 },
  },
  vx = {
    ...V1,
    treeNode: { type: Object, required: !0 },
    onClick: { type: [Function, Array] },
  },
  rl = 32,
  ep = 24,
  mx = J({
    name: 'BuTreeNode',
    props: vx,
    setup(e, { slots: t, emit: r }) {
      const { treeNode: i, lineable: o, checkable: a, dragdrop: c } = ar(e),
        {
          getChildrenExpanded: f,
          toggleCheckNode: d,
          onDragstart: p,
          onDrop: v,
          onDragover: m,
          onDragend: y,
          onDragleave: S,
        } = yt('TREE_UTILS');
      let R = {};
      return (
        c.value &&
          (R = {
            draggable: !0,
            onDragend: (k) => y(k),
            onDragleave: (k) => S(k),
            onDragover: (k) => m(k),
            onDragstart: (k) => p(k, i.value),
            onDrop: (k) => v(k, i.value),
          }),
        () =>
          W(
            'div',
            {
              class: 'bu-tree--node',
              style: {
                paddingLeft: `${ep * (i.value.level - 1)}px`,
                height: rl + 'px',
                lineHeight: rl + 'px',
              },
            },
            [
              !i.value.isLeaf &&
                i.value.expanded &&
                o.value &&
                W(
                  'span',
                  {
                    class: 'bu-tree--node-vline',
                    style: {
                      height: `${rl * f(i.value).length}px`,
                      left: `${ep * (i.value.level - 1) + 12}px`,
                      top: `${rl}px`,
                    },
                  },
                  null,
                ),
              W('div', _n({ class: 'bu-tree--node-content' }, R), [
                i.value.isLeaf
                  ? W(
                      'span',
                      { style: { display: 'inline-block', width: '25px' } },
                      null,
                    )
                  : t.icon(),
                a.value &&
                  W(
                    wu,
                    {
                      modelValue: i.value.checked,
                      indeterminate: i.value.indeterminate,
                      onClick: () => d(i.value),
                    },
                    null,
                  ),
                t.content(),
                i.value.loading && t.loading(),
              ]),
            ],
          )
      );
    },
  });
function xu(e, t = 0, r = {}) {
  return (
    t++,
    e.reduce((i, o) => {
      const a = { ...o };
      if (
        ((a.level = t),
        t > 1 && r.level && t > r.level && (a.parentId = r.id),
        a.children)
      ) {
        const c = xu(a.children, t, a);
        return delete a.children, i.concat(a, c);
      } else return a.isLeaf === void 0 && (a.isLeaf = !0), i.concat(a);
    }, [])
  );
}
function yx(e) {
  const t = ue(() => {
      let f = [];
      const d = [];
      for (const p of e.value)
        f.map((v) => v.id).includes(p.id) ||
          (p.expanded !== !0 && (f = r(p)), d.push(p));
      return d;
    }),
    r = (f, d = !0) => {
      const p = [],
        v = e.value.findIndex((m) => m.id === f.id);
      for (let m = v + 1; m < e.value.length && f.level < e.value[m].level; m++)
        (d || f.level === e.value[m].level - 1) && p.push(e.value[m]);
      return p;
    },
    i = (f, d = []) => {
      const p = r(f, !1);
      return (
        d.push(...p),
        p.forEach((v) => {
          v.expanded && i(v, d);
        }),
        d
      );
    };
  return {
    expendedTree: t,
    getChildren: r,
    getParent: (f) => e.value.find((d) => d.id === f.parentId),
    getChildrenExpanded: i,
    getIndex: (f) => (f ? e.value.findIndex((d) => d.id === f.id) : -1),
    getNode: (f) => e.value.find((d) => d.id === f.id),
  };
}
function bx(e, t, r, i) {
  const { lazyLoadNodes: o } = i;
  return {
    toggleNode: (c) => {
      const f = e.value.find((d) => d.id === c.id);
      f && ((f.expanded = !f.expanded), f.expanded && o(f));
    },
  };
}
function wx(e, { getChildren: t }) {
  const r = (o) => {
      (o.checked = !o.checked),
        t(o).forEach((a) => {
          a.checked = o.checked;
        }),
        i(o);
    },
    i = (o) => {
      const a = e.value.find((d) => d.id === o.parentId);
      if (!a) return;
      const c = t(a, !1),
        f = c.filter((d) => d.checked);
      f.length === c.length
        ? ((a.checked = !0), (a.indeterminate = !1))
        : ((a.checked = !1), (a.indeterminate = f.length !== 0)),
        console.log('treeNode', a),
        i(a);
    };
  return { toggleCheckNode: r };
}
const pc = {
  dropPrev: 'bu-tree--node--drop-prev',
  dropNext: 'bu-tree--node--drop-next',
  dropInner: 'bu-tree--node--drop-inner',
};
function xx(e, t, { getChildren: r, getParent: i }) {
  const o = lr({
      dropType: void 0,
      draggingNode: null,
      draggingTreeNode: null,
    }),
    a = ue(() => t.value.reduce((k, O) => ({ ...k, [O.id]: O }), {})),
    c = (k) => {
      k == null || k.classList.remove(...Object.values(pc));
    },
    f = () => {
      (o.dropType = void 0),
        (o.draggingNode = null),
        (o.draggingTreeNode = null);
    },
    d = (k, O) => {
      var P;
      const x = (P = a.value[k]) == null ? void 0 : P.parentId;
      return x === O ? !0 : x !== void 0 ? d(x, O) : !1;
    };
  function p(k, O) {
    const x = t.value.find((P) => P.id === k);
    if (x) {
      let P;
      const I = r(x),
        F = i(x);
      if (o.dropType === 'dropInner') {
        P = { ...x, parentId: O.id, level: O.level + 1 };
        const V = t.value.indexOf(O);
        t.value.splice(V + 1, 0, P), (O.isLeaf = void 0);
        const Y = t.value.indexOf(x);
        t.value.splice(Y, 1);
      } else if (o.dropType === 'dropNext') {
        P = { ...x, parentId: O.parentId, level: O.level };
        const V = t.value.indexOf(O),
          Y = r(O, !0).length;
        t.value.splice(V + Y + 1, 0, P);
        const te = t.value.indexOf(x);
        t.value.splice(te, 1);
      } else if (o.dropType === 'dropPrev') {
        P = { ...x, parentId: O.parentId, level: O.level };
        const V = t.value.indexOf(O);
        t.value.splice(V, 0, P);
        const Y = t.value.indexOf(x);
        t.value.splice(Y, 1);
      }
      (o.dropType = 'dropInner'),
        I.forEach((V) => p(V.id, P)),
        F && r(F).length === 0 && (F.isLeaf = !0);
    }
  }
  return {
    onDragstart: (k, O) => {
      var x;
      k.stopPropagation(),
        (o.draggingNode = k.target),
        (o.draggingTreeNode = O),
        (x = k.dataTransfer) == null || x.setData('dragNodeId', O.id);
    },
    onDrop: (k, O) => {
      var P;
      if (
        (k.preventDefault(),
        k.stopPropagation(),
        c(k.currentTarget),
        !o.draggingNode || !e)
      )
        return;
      const x = (P = k.dataTransfer) == null ? void 0 : P.getData('dragNodeId');
      if (x) {
        const I = d(O.id, x);
        if (x === O.id || I) return;
        o.dropType && p(x, O);
      }
      f();
    },
    onDragover: (k) => {
      if ((k.preventDefault(), k.stopPropagation(), !!o.draggingNode && e)) {
        if ((k.dataTransfer && (k.dataTransfer.dropEffect = 'move'), !t))
          return;
        let O = {};
        typeof e == 'object' ? (O = e) : e === !0 && (O = { dropInner: !0 });
        const { dropPrev: x, dropNext: P, dropInner: I } = O;
        let F;
        const V = x ? (I ? 0.25 : P ? 0.45 : 1) : -1,
          Y = P ? (I ? 0.75 : x ? 0.55 : 0) : 1,
          te = k.currentTarget,
          D = te == null ? void 0 : te.getBoundingClientRect(),
          ie = k.clientY - ((D == null ? void 0 : D.top) || 0);
        if (
          (ie < ((D == null ? void 0 : D.height) || 0) * V
            ? (F = 'dropPrev')
            : ie > ((D == null ? void 0 : D.height) || 0) * Y
              ? (F = 'dropNext')
              : I
                ? (F = 'dropInner')
                : (F = void 0),
          F)
        ) {
          const le = te == null ? void 0 : te.classList;
          le && (le.contains(pc[F]) || (c(te), le.add(pc[F])));
        } else c(te);
        o.dropType = F;
      }
    },
    onDragleave: (k) => {
      k.stopPropagation(), o.draggingNode && c(k.currentTarget);
    },
    onDragend: (k) => {
      k.preventDefault(), k.stopPropagation(), f();
    },
  };
}
function $x(e, { getNode: t, getIndex: r, getChildren: i }, { emit: o }) {
  const a = (p) => {
      const v = t(p);
      v &&
        v.isLeaf === !1 &&
        !v.childNodeCount &&
        ((v.loading = !0), o('lazy-load', p, c));
    },
    c = (p) => {
      const v = t(p.node);
      if (v) {
        v.loading = !1;
        const m = ce(xu(p.treeItems, v.level));
        f(v, m), d(v, m);
        const y = i(v);
        v.childNodeCount = y.length;
      }
    },
    f = (p, v) => {
      v.value.forEach((m) => {
        m.level - 1 === p.level && !m.parentId && (m.parentId = p.id);
      });
    },
    d = (p, v) => {
      const m = r(p);
      m && e.value.splice(m + 1, 0, ...v.value);
    };
  return { lazyLoadNodes: a };
}
function Cx(e, t, r) {
  const i = L(e),
    o = ce(xu(i)),
    a = yx(o),
    c = [bx, wx],
    f = $x(o, a, r),
    d = xx(t.dragdrop, o, a);
  return {
    ...c.reduce((v, m) => ({ ...v, ...m(o, a, r, f) }), {}),
    ...a,
    ...d,
    treeData: o,
  };
}
const Px = (e, { emit: t }) =>
    W(
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
        W(
          'path',
          { fill: 'currentColor', d: 'M384 192v640l384-320.064z' },
          null,
        ),
      ],
    ),
  Sx = {
    data: { type: Array, default: [] },
    itemHeight: { type: Number, default: 22 },
    component: { type: String, default: 'div' },
  },
  Ex = J({
    name: 'BuVirtualList',
    props: Sx,
    setup(e, { slots: t }) {
      const { data: r, itemHeight: i, component: o } = ar(e),
        a = ce(),
        c = ce(0),
        f = ce(0),
        d = ce(0),
        p = (y) => {
          const S = y.target.scrollTop;
          (d.value = Math.floor(S / i.value)), (f.value = S - (S % i.value));
        },
        v = ue(() => Math.ceil(c.value / i.value)),
        m = ue(() =>
          r.value.slice(d.value, Math.min(d.value + v.value, r.value.length)),
        );
      return (
        ct(() => {
          Ln(() => {
            var y;
            (c.value = (y = a.value) == null ? void 0 : y.clientHeight),
              console.log('containerHeight', c.value);
          });
        }),
        () =>
          W(
            o.value,
            { class: 'bu-virtual-list--container', ref: a, onScroll: p },
            {
              default: () => [
                W(
                  'div',
                  {
                    class: 'bu-virtual-list--blank',
                    style: { height: `${r.value.length * i.value}px` },
                  },
                  null,
                ),
                W(
                  'div',
                  {
                    class: 'bu-virtual-list',
                    style: { transform: `translate3d(0,${f.value}px,0)` },
                  },
                  [
                    m.value.map((y, S) => {
                      var R;
                      return W('div', { style: { height: i.value + 'px' } }, [
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
const $u = on(Ex),
  Tx = J({
    name: 'BuTree',
    props: V1,
    emits: ['lazy-load'],
    setup(e, t) {
      const { data: r, height: i, itemHeight: o } = ar(e),
        { slots: a } = t,
        c = Cx(r == null ? void 0 : r.value, e, t);
      qn('TREE_UTILS', c);
      const f = (d) =>
        W(mx, _n(e, { treeNode: d, onClick: () => c.toggleNode(d) }), {
          content: () => (a.content ? a.content(d) : d.label),
          icon: () =>
            a.icon
              ? a.icon({ nodeData: d, toggleNode: c.toggleNode })
              : W(Px, { expanded: !!d.expanded }, null),
          loading: () =>
            a.loading
              ? a.loading({ nodeData: c })
              : W('span', { class: 'ml-1' }, [Et('loading...')]),
        });
      return () =>
        W('div', { class: 'bu-tree' }, [
          i != null && i.value
            ? W('div', { style: { height: `${i.value}px` } }, [
                W(
                  $u,
                  { data: c.expendedTree.value, itemHeight: o.value },
                  { default: ({ item: d }) => f(d) },
                ),
              ])
            : c.expendedTree.value.map((d) => f(d)),
        ]);
    },
  });
const D1 = on(Tx),
  tp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BuAside: _1,
        BuButton: u1,
        BuCheckbox: wu,
        BuContainer: g1,
        BuFooter: v1,
        BuForm: x1,
        BuFormItem: $1,
        BuGrid: P1,
        BuGridItem: S1,
        BuHeader: m1,
        BuIcon: vn,
        BuInput: E1,
        BuLoading: T1,
        BuMain: y1,
        BuMessage: O1,
        BuModal: M1,
        BuNotification: B1,
        BuSpace: F1,
        BuSplit: R1,
        BuTitle: N1,
        BuTree: D1,
        BuVirtualList: $u,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
(window._iconfont_svg_string_3889283 =
  '<svg><symbol id="icon-checkbox" viewBox="0 0 1024 1024"><path d="M810.666667 213.333333v597.333334H213.333333V213.333333h597.333334m0-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z"  ></path></symbol><symbol id="icon-checkbox-select" viewBox="0 0 1024 1024"><path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-353.706667 567.04a42.496 42.496 0 0 1-60.16 0L243.626667 541.866667c-8.106667-8.106667-12.373333-18.773333-12.373334-29.866667s4.693333-22.186667 12.373334-29.866667a42.496 42.496 0 0 1 60.16 0L426.666667 604.586667l293.546666-293.546667a42.496 42.496 0 1 1 60.16 60.16l-323.413333 323.84z"  ></path></symbol><symbol id="icon-checkbox-indeterminate" viewBox="0 0 1024 1024"><path d="M170.666667 128h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m128 341.333333v85.333334h426.666666v-85.333334H298.666667z"  ></path></symbol><symbol id="icon-success" viewBox="0 0 1024 1024"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64z m-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z"  ></path></symbol><symbol id="icon-info" viewBox="0 0 1024 1024"><path d="M512 96c-229.76 0-416 186.24-416 416s186.24 416 416 416 416-186.24 416-416-186.24-416-416-416zM577.248 665.056c-31.392 47.136-63.328 83.456-117.056 83.456-36.672-5.984-51.744-32.256-43.808-59.04l69.12-228.928c1.696-5.6-1.12-11.584-6.24-13.408-5.088-1.792-15.072 4.832-23.712 14.304l-41.792 50.272c-1.12-8.448-0.128-22.4-0.128-28.032 31.392-47.136 82.976-84.32 117.952-84.32 33.248 3.392 48.992 29.984 43.2 59.2l-69.6 230.048c-0.928 5.184 1.824 10.464 6.528 12.128 5.12 1.792 15.872-4.832 24.544-14.304l41.76-50.24c1.12 8.448-0.768 23.232-0.768 28.864zM567.936 366.048c-26.432 0-47.872-19.264-47.872-47.616s21.44-47.584 47.872-47.584 47.872 19.264 47.872 47.584c0 28.384-21.44 47.616-47.872 47.616z"  ></path></symbol><symbol id="icon-warning-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64z m0 394.016l-104-104q-12-12-27.488-12t-27.008 11.488-11.488 27.008 12 27.488l104 104-104 104q-12 12-12 27.488t11.488 27.008 27.008 11.488 27.488-12l104-104 104 104q16 15.008 36.992 9.504t26.496-26.496-9.504-36.992L565.984 512l104-104q12-12 12-27.488t-11.488-27.008-27.008-11.488-27.488 12z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z" fill="#666666" ></path></symbol><symbol id="icon-caret-right" viewBox="0 0 1024 1024"><path d="M320 769.324V254.676c0-35.636 43.086-53.482 68.284-28.284l257.324 257.324c15.62 15.62 15.62 40.948 0 56.568L388.284 797.608C363.086 822.808 320 804.96 320 769.324z"  ></path></symbol><symbol id="icon-question-circle" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7c0-19.7 12.4-37.7 30.9-44.8 59-22.7 97.1-74.7 97.1-132.5 0.1-39.3-17.1-76-48.3-103.3z"  ></path><path d="M512 732m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M834.7648 736.3584a5.632 5.632 0 1 0 11.264 0 5.632 5.632 0 0 0-11.264 0z m-124.16 128.1024a11.1616 11.1616 0 1 0 22.3744 0 11.1616 11.1616 0 0 0-22.3744 0z m-167.3216 65.8944a16.7936 16.7936 0 1 0 33.6384 0 16.7936 16.7936 0 0 0-33.6384 0zM363.1616 921.6a22.3744 22.3744 0 1 0 44.7488 0 22.3744 22.3744 0 0 0-44.7488 0z m-159.744-82.0224a28.0064 28.0064 0 1 0 55.9616 0 28.0064 28.0064 0 0 0-56.0128 0zM92.672 700.16a33.6384 33.6384 0 1 0 67.2256 0 33.6384 33.6384 0 0 0-67.2256 0zM51.2 528.9984a39.168 39.168 0 1 0 78.336 0 39.168 39.168 0 0 0-78.336 0z m34.1504-170.0864a44.8 44.8 0 1 0 89.6 0 44.8 44.8 0 0 0-89.6 0zM187.904 221.7984a50.432 50.432 0 1 0 100.864 0 50.432 50.432 0 0 0-100.864 0zM338.432 143.36a55.9616 55.9616 0 1 0 111.9232 0 55.9616 55.9616 0 0 0-111.9744 0z m169.0112-4.9152a61.5936 61.5936 0 1 0 123.2384 0 61.5936 61.5936 0 0 0-123.2384 0z m154.7776 69.632a67.1744 67.1744 0 1 0 134.3488 0 67.1744 67.1744 0 0 0-134.3488 0z m110.0288 130.816a72.8064 72.8064 0 1 0 145.5616 0 72.8064 72.8064 0 0 0-145.5616 0z m43.7248 169.472a78.3872 78.3872 0 1 0 156.8256 0 78.3872 78.3872 0 0 0-156.8256 0z" fill="" ></path></symbol><symbol id="icon-caret-left" viewBox="0 0 1024 1024"><path d="M270.848 544.725l336.896 297.302a45.525 45.525 0 0 0 63.403-3.286c7.424-8.064 11.52-18.56 11.52-29.44V214.7c0-24.32-20.096-44.032-44.886-44.032-11.093 0-21.76 4.01-30.037 11.306L270.848 479.275a43.435 43.435 0 0 0 0 65.45z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" fill="#666666" ></path></symbol><symbol id="icon-caret-bottom" viewBox="0 0 1024 1024"><path d="M184.32 315.392l327.68 393.216 327.68-393.216H184.32z"  ></path></symbol><symbol id="icon-caret-top" viewBox="0 0 1024 1024"><path d="M512 315.392L184.32 708.608h655.36L512 315.392z"  ></path></symbol></svg>'),
  (function (e) {
    var r = (r = document.getElementsByTagName('script'))[r.length - 1],
      t = r.getAttribute('data-injectcss'),
      r = r.getAttribute('data-disable-injectsvg');
    if (!r) {
      var i,
        o,
        a,
        c,
        f,
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
      (i = function () {
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
            ? setTimeout(i, 0)
            : ((o = function () {
                document.removeEventListener('DOMContentLoaded', o, !1), i();
              }),
              document.addEventListener('DOMContentLoaded', o, !1))
          : document.attachEvent &&
            ((a = i),
            (c = e.document),
            (f = !1),
            v(),
            (c.onreadystatechange = function () {
              c.readyState == 'complete' &&
                ((c.onreadystatechange = null), p());
            }));
    }
    function p() {
      f || ((f = !0), a());
    }
    function v() {
      try {
        c.documentElement.doScroll('left');
      } catch {
        return void setTimeout(v, 50);
      }
      p();
    }
  })(window);
const H1 = {
    install: (e) => {
      for (const t in tp) e.use(tp[t]);
    },
  },
  TT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BuAside: _1,
        BuButton: u1,
        BuCheckbox: wu,
        BuContainer: g1,
        BuFooter: v1,
        BuForm: x1,
        BuFormItem: $1,
        BuGrid: P1,
        BuGridItem: S1,
        BuHeader: m1,
        BuIcon: vn,
        BuInput: E1,
        BuLoading: T1,
        BuMain: y1,
        BuMessage: O1,
        BuModal: M1,
        BuNotification: B1,
        BuSpace: F1,
        BuSplit: R1,
        BuTitle: N1,
        BuTree: D1,
        BuVirtualList: $u,
        default: H1,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ax = 'modulepreload',
  kx = function (e) {
    return '/' + e;
  },
  np = {},
  Ix = function (t, r, i) {
    if (!r || r.length === 0) return t();
    const o = document.getElementsByTagName('link');
    return Promise.all(
      r.map((a) => {
        if (((a = kx(a)), a in np)) return;
        np[a] = !0;
        const c = a.endsWith('.css'),
          f = c ? '[rel="stylesheet"]' : '';
        if (!!i)
          for (let v = o.length - 1; v >= 0; v--) {
            const m = o[v];
            if (m.href === a && (!c || m.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${a}"]${f}`)) return;
        const p = document.createElement('link');
        if (
          ((p.rel = c ? 'stylesheet' : Ax),
          c || ((p.as = 'script'), (p.crossOrigin = '')),
          (p.href = a),
          document.head.appendChild(p),
          c)
        )
          return new Promise((v, m) => {
            p.addEventListener('load', v),
              p.addEventListener('error', () =>
                m(new Error(`Unable to preload CSS for ${a}`)),
              );
          });
      }),
    ).then(() => t());
  };
const Lx = J({
  name: 'VPBadge',
  props: { text: null, type: null },
  setup(e) {
    return (t, r) => (
      $(),
      M(
        'span',
        { class: Ce(['VPBadge', e.type ?? 'tip']) },
        [G(t.$slots, 'default', {}, () => [Et(Me(e.text), 1)], !0)],
        2,
      )
    );
  },
});
const Ox = he(Lx, [['__scopeId', 'data-v-3769e2f1']]),
  Mx = JSON.parse(
    '{"lang":"en-US","title":"BuBu-UI","description":"A VitePress site","base":"/","head":[],"appearance":true,"themeConfig":{"sidebar":{"/guide/":[{"text":"开始","collapsible":true,"items":[{"text":"什么是bubu-ui?","link":"/guide/start"},{"text":"快速开始","link":"/guide/quickStart"}]}],"/components/":[{"text":"布局组件","items":[{"text":"Container组件","link":"/components/container"},{"text":"Grid组件","link":"/components/grid"},{"text":"Space组件","link":"/components/space"},{"text":"Split组件","link":"/components/split"}]},{"text":"基础组件","items":[{"text":"Button组件","link":"/components/button"},{"text":"Title组件","link":"/components/title"},{"text":"Icon组件","link":"/components/icon"}]},{"text":"表单组件","items":[{"text":"Input组件","link":"/components/input"},{"text":"Checkbox组件","link":"/components/checkbox"},{"text":"Form组件","link":"/components/form"}]},{"text":"数据展示","items":[{"text":"Tree组件","link":"/components/tree"}]},{"text":"反馈组件","items":[{"text":"Notification组件","link":"/components/notification"},{"text":"Loading组件","link":"/components/loading"},{"text":"Message组件","link":"/components/message"}]}]},"nav":[{"text":"指南","link":"/guide/start","activeMatch":"/guide/"},{"text":"组件","link":"/components/button","activeMatch":"/components/"},{"items":[{"text":"bubu-cli","link":"https://github.com/yeshaojun/bubu-cli"},{"text":"mini-vue","link":"https://github.com/yeshaojun/v3-mini"}]}],"socialLinks":[{"icon":"github","link":"https://github.com/BuBuUI/bubu-ui/"}],"footer":{"message":"Released under the MIT License.","copyright":"Copyright © 2019-present Evan You"}},"locales":{},"langs":{},"scrollOffset":90,"cleanUrls":"disabled"}',
  ),
  Ul = /^[a-z]+:/i,
  Bx = /^pathname:\/\//,
  rp = 'vitepress-theme-appearance',
  Nt = typeof window < 'u',
  U1 = {
    relativePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
  };
function Fx(e, t) {
  t.sort((r, i) => {
    const o = i.split('/').length - r.split('/').length;
    return o !== 0 ? o : i.length - r.length;
  });
  for (const r of t) if (e.startsWith(r)) return r;
}
function sp(e, t) {
  const r = Fx(t, Object.keys(e));
  return r ? e[r] : void 0;
}
function Rx(e) {
  const { locales: t } = e.themeConfig || {},
    r = e.locales;
  return t && r
    ? Object.keys(t).reduce(
        (i, o) => ((i[o] = { label: t[o].label, lang: r[o].lang }), i),
        {},
      )
    : {};
}
function Nx(e, t) {
  t = Dx(e, t);
  const r = sp(e.locales || {}, t),
    i = sp(e.themeConfig.locales || {}, t);
  return Object.assign({}, e, r, {
    themeConfig: Object.assign({}, e.themeConfig, i, { locales: {} }),
    lang: (r || e).lang,
    locales: {},
    langs: Rx(e),
  });
}
function z1(e, t) {
  const r = t.title || e.title,
    i = t.titleTemplate ?? e.titleTemplate;
  if (typeof i == 'string' && i.includes(':title'))
    return i.replace(/:title/g, r);
  const o = Vx(e.title, i);
  return `${r}${o}`;
}
function Vx(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`;
}
function Dx(e, t) {
  if (!Nt) return t;
  const r = e.base,
    i = r.endsWith('/') ? r.slice(0, -1) : r;
  return t.slice(i.length);
}
function Hx(e, t) {
  const [r, i] = t;
  if (r !== 'meta') return !1;
  const o = Object.entries(i)[0];
  return o == null ? !1 : e.some(([a, c]) => a === r && c[o[0]] === o[1]);
}
function Ux(e, t) {
  return [...e.filter((r) => !Hx(t, r)), ...t];
}
const zx = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  qx = /^[a-z]:/i;
function ip(e) {
  const t = qx.exec(e),
    r = t ? t[0] : '';
  return (
    r +
    e
      .slice(r.length)
      .replace(zx, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  );
}
function Wx(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/');
}
function Ki(e) {
  return Ul.test(e) ? e : Wx(ei.value.base, e);
}
function q1(e) {
  let t = e.replace(/\.html$/, '');
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), Nt)) {
    const r = '/';
    t = ip(t.slice(r.length).replace(/\//g, '_') || 'index') + '.md';
    let i = __VP_HASH_MAP__[t.toLowerCase()];
    i ||
      ((t = t.endsWith('_index.md')
        ? t.slice(0, -9) + '.md'
        : t.slice(0, -3) + '_index.md'),
      (i = __VP_HASH_MAP__[t.toLowerCase()])),
      (t = `${r}assets/${t}.${i}.js`);
  } else t = `./${ip(t.slice(1).replace(/\//g, '_'))}.md.js`;
  return t;
}
const W1 = Symbol(),
  ei = qp(Mx);
function Kx(e) {
  const t = ue(() => Nx(ei.value, e.path));
  return {
    site: t,
    theme: ue(() => t.value.themeConfig),
    page: ue(() => e.data),
    frontmatter: ue(() => e.data.frontmatter),
    lang: ue(() => t.value.lang),
    localePath: ue(() => {
      const { langs: r, lang: i } = t.value,
        o = Object.keys(r).find((a) => r[a].lang === i);
      return Ki(o || '/');
    }),
    title: ue(() => z1(t.value, e.data)),
    description: ue(() => e.data.description || t.value.description),
    isDark: ce(!1),
  };
}
function We() {
  const e = yt(W1);
  if (!e) throw new Error('vitepress data not properly injected in app');
  return e;
}
const K1 = Symbol(),
  op = 'http://a.com',
  Gx = () => ({ path: '/', component: null, data: U1 });
function Yx(e, t) {
  const r = lr(Gx()),
    i = { route: r, go: o };
  async function o(f = Nt ? location.href : '/') {
    var p, v;
    await ((p = i.onBeforeRouteChange) == null ? void 0 : p.call(i, f));
    const d = new URL(f, op);
    ei.value.cleanUrls === 'disabled' &&
      !d.pathname.endsWith('/') &&
      !d.pathname.endsWith('.html') &&
      ((d.pathname += '.html'), (f = d.pathname + d.search + d.hash)),
      Nt &&
        (history.replaceState(
          { scrollPosition: window.scrollY },
          document.title,
        ),
        history.pushState(null, '', f)),
      await c(f),
      await ((v = i.onAfterRouteChanged) == null ? void 0 : v.call(i, f));
  }
  let a = null;
  async function c(f, d = 0, p = !1) {
    const v = new URL(f, op),
      m = (a = v.pathname);
    try {
      let y = await e(m);
      if (a === m) {
        a = null;
        const { default: S, __pageData: R } = y;
        if (!S) throw new Error(`Invalid route component: ${S}`);
        (r.path = Nt ? m : Ki(m)),
          (r.component = zs(S)),
          (r.data = zs(R)),
          Nt &&
            Ln(() => {
              if (v.hash && !d) {
                let k = null;
                try {
                  k = document.querySelector(decodeURIComponent(v.hash));
                } catch (O) {
                  console.warn(O);
                }
                if (k) {
                  lp(k, v.hash);
                  return;
                }
              }
              window.scrollTo(0, d);
            });
      }
    } catch (y) {
      if (
        (!/fetch/.test(y.message) &&
          !/^\/404(\.html|\/)?$/.test(f) &&
          console.error(y),
        !p)
      )
        try {
          const S = await fetch(ei.value.base + 'hashmap.json');
          (window.__VP_HASH_MAP__ = await S.json()), await c(f, d, !0);
          return;
        } catch {}
      a === m &&
        ((a = null),
        (r.path = Nt ? m : Ki(m)),
        (r.component = t ? zs(t) : null),
        (r.data = U1));
    }
  }
  return (
    Nt &&
      (window.addEventListener(
        'click',
        (f) => {
          if (f.target.closest('button')) return;
          const p = f.target.closest('a');
          if (p && !p.closest('.vp-raw') && !p.download) {
            const {
                href: v,
                origin: m,
                pathname: y,
                hash: S,
                search: R,
                target: k,
              } = p,
              O = window.location,
              x = y.match(/\.\w+$/);
            !f.ctrlKey &&
              !f.shiftKey &&
              !f.altKey &&
              !f.metaKey &&
              k !== '_blank' &&
              m === O.origin &&
              !(x && x[0] !== '.html') &&
              (f.preventDefault(),
              y === O.pathname && R === O.search
                ? S &&
                  S !== O.hash &&
                  (history.pushState(null, '', S),
                  window.dispatchEvent(new Event('hashchange')),
                  lp(p, S, p.classList.contains('header-anchor')))
                : o(v));
          }
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', (f) => {
        c(location.href, (f.state && f.state.scrollPosition) || 0);
      }),
      window.addEventListener('hashchange', (f) => {
        f.preventDefault();
      })),
    i
  );
}
function jx() {
  const e = yt(K1);
  if (!e) throw new Error('useRouter() is called without provider.');
  return e;
}
function dr() {
  return jx().route;
}
function lp(e, t, r = !1) {
  let i = null;
  try {
    i = e.classList.contains('header-anchor')
      ? e
      : document.querySelector(decodeURIComponent(t));
  } catch (o) {
    console.warn(o);
  }
  if (i) {
    let o = ei.value.scrollOffset;
    typeof o == 'string' &&
      (o = document.querySelector(o).getBoundingClientRect().bottom + 24);
    const a = parseInt(window.getComputedStyle(i).paddingTop, 10),
      c = window.scrollY + i.getBoundingClientRect().top - o + a;
    !r || Math.abs(c - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, c)
      : window.scrollTo({ left: 0, top: c, behavior: 'smooth' });
  }
}
const Zx = J({
  name: 'VitePressContent',
  props: { onContentUpdated: Function },
  setup(e) {
    const t = dr();
    return (
      ni(() => {
        var r;
        (r = e.onContentUpdated) == null || r.call(e);
      }),
      () =>
        In('div', { style: { position: 'relative' } }, [
          t.component ? In(t.component) : null,
        ])
    );
  },
});
var ap;
const G1 = typeof window < 'u';
G1 &&
  (ap = window == null ? void 0 : window.navigator) != null &&
  ap.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xx(e) {
  return e;
}
function Jx(e) {
  return Sl() ? (El(e), !0) : !1;
}
function Qx(e) {
  return typeof e == 'function' ? ue(e) : ce(e);
}
function e7(e, t = !0) {
  bn() ? ct(e) : t ? e() : Ln(e);
}
const t7 = G1 ? window : void 0;
function n7(e, t = !1) {
  const r = ce(),
    i = () => (r.value = !!e());
  return i(), e7(i, t), r;
}
function qc(e, t = {}) {
  const { window: r = t7 } = t,
    i = n7(() => r && 'matchMedia' in r && typeof r.matchMedia == 'function');
  let o;
  const a = ce(!1),
    c = () => {
      o &&
        ('removeEventListener' in o
          ? o.removeEventListener('change', f)
          : o.removeListener(f));
    },
    f = () => {
      i.value &&
        (c(),
        (o = r.matchMedia(Qx(e).value)),
        (a.value = o.matches),
        'addEventListener' in o
          ? o.addEventListener('change', f)
          : o.addListener(f));
    };
  return Dr(f), Jx(() => c()), a;
}
const cp =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  up = '__vueuse_ssr_handlers__';
cp[up] = cp[up] || {};
var fp;
(function (e) {
  (e.UP = 'UP'),
    (e.RIGHT = 'RIGHT'),
    (e.DOWN = 'DOWN'),
    (e.LEFT = 'LEFT'),
    (e.NONE = 'NONE');
})(fp || (fp = {}));
var r7 = Object.defineProperty,
  dp = Object.getOwnPropertySymbols,
  s7 = Object.prototype.hasOwnProperty,
  i7 = Object.prototype.propertyIsEnumerable,
  hp = (e, t, r) =>
    t in e
      ? r7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  o7 = (e, t) => {
    for (var r in t || (t = {})) s7.call(t, r) && hp(e, r, t[r]);
    if (dp) for (var r of dp(t)) i7.call(t, r) && hp(e, r, t[r]);
    return e;
  };
const l7 = {
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
o7({ linear: Xx }, l7);
const Y1 = /#.*$/,
  a7 = /(index)?\.(md|html)$/,
  c7 = typeof window < 'u',
  u7 = ce(c7 ? location.hash : '');
function f7(e) {
  return Ul.test(e);
}
function d7(e, t) {
  let r,
    i = !1;
  return () => {
    r && clearTimeout(r),
      i
        ? (r = setTimeout(e, t))
        : (e(),
          (i = !0),
          setTimeout(() => {
            i = !1;
          }, t));
  };
}
function ii(e, t, r = !1) {
  if (t === void 0) return !1;
  if (((e = gp(`/${e}`)), r)) return new RegExp(t).test(e);
  if (gp(t) !== e) return !1;
  const i = t.match(Y1);
  return i ? u7.value === i[0] : !0;
}
function pp(e) {
  return /^\//.test(e) ? e : `/${e}`;
}
function gp(e) {
  return decodeURI(e).replace(Y1, '').replace(a7, '');
}
function yl(e) {
  if (f7(e)) return e.replace(Bx, '');
  const { site: t } = We(),
    { pathname: r, search: i, hash: o } = new URL(e, 'http://example.com'),
    a =
      r.endsWith('/') || r.endsWith('.html')
        ? e
        : `${r.replace(
            /(\.md)?$/,
            t.value.cleanUrls === 'disabled' ? '.html' : '',
          )}${i}${o}`;
  return Ki(a);
}
function j1(e, t) {
  if (Array.isArray(e)) return e;
  if (e == null) return [];
  t = pp(t);
  const r = Object.keys(e)
    .sort((i, o) => o.split('/').length - i.split('/').length)
    .find((i) => t.startsWith(pp(i)));
  return r ? e[r] : [];
}
function h7(e) {
  const t = [];
  function r(i) {
    for (const o of i)
      o.link && t.push({ ...o, link: o.link }), 'items' in o && r(o.items);
  }
  for (const i of e) r(i.items);
  return t;
}
function On() {
  const e = dr(),
    { theme: t, frontmatter: r } = We(),
    i = qc('(min-width: 960px)'),
    o = ce(!1),
    a = ue(() => {
      const y = t.value.sidebar,
        S = e.data.relativePath;
      return y ? j1(y, S) : [];
    }),
    c = ue(
      () =>
        r.value.sidebar !== !1 &&
        a.value.length > 0 &&
        r.value.layout !== 'home',
    ),
    f = ue(() => r.value.layout !== 'home' && r.value.aside !== !1),
    d = ue(() => c.value && i.value);
  function p() {
    o.value = !0;
  }
  function v() {
    o.value = !1;
  }
  function m() {
    o.value ? v() : p();
  }
  return {
    isOpen: o,
    sidebar: a,
    hasSidebar: c,
    hasAside: f,
    isSidebarEnabled: d,
    open: p,
    close: v,
    toggle: m,
  };
}
function p7(e, t) {
  let r;
  Dr(() => {
    r = e.value ? document.activeElement : void 0;
  }),
    ct(() => {
      window.addEventListener('keyup', i);
    }),
    ur(() => {
      window.removeEventListener('keyup', i);
    });
  function i(o) {
    o.key === 'Escape' && e.value && (t(), r == null || r.focus());
  }
}
const g7 = J({
  name: 'VPSkipLink',
  setup(e) {
    const t = dr(),
      r = ce();
    Pt(
      () => t.path,
      () => r.value.focus(),
    );
    function i({ target: o }) {
      const a = document.querySelector(o.hash);
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
    return (o, a) => (
      $(),
      M(
        Ee,
        null,
        [
          B(
            'span',
            { ref_key: 'backToTop', ref: r, tabindex: '-1' },
            null,
            512,
          ),
          B(
            'a',
            {
              href: '#VPContent',
              class: 'VPSkipLink visually-hidden',
              onClick: i,
            },
            ' Skip to content ',
          ),
        ],
        64,
      )
    );
  },
});
const _7 = he(g7, [['__scopeId', 'data-v-641e32a3']]),
  v7 = { key: 0, class: 'VPBackdrop' },
  m7 = J({
    name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(e) {
      return (t, r) => (
        $(),
        we(
          An,
          { name: 'fade' },
          {
            default: se(() => [e.show ? ($(), M('div', v7)) : de('', !0)]),
            _: 1,
          },
        )
      );
    },
  });
const y7 = he(m7, [['__scopeId', 'data-v-cbde629e']]);
function b7() {
  const e = ce(!1);
  function t() {
    (e.value = !0), window.addEventListener('resize', o);
  }
  function r() {
    (e.value = !1), window.removeEventListener('resize', o);
  }
  function i() {
    e.value ? r() : t();
  }
  function o() {
    window.outerWidth >= 768 && r();
  }
  const a = dr();
  return (
    Pt(() => a.path, r),
    { isScreenOpen: e, openScreen: t, closeScreen: r, toggleScreen: i }
  );
}
const w7 = ['src', 'alt'],
  x7 = { inheritAttrs: !1 },
  $7 = J({
    ...x7,
    name: 'VPImage',
    props: { image: null, alt: null },
    setup(e) {
      return (t, r) => {
        const i = fr('VPImage', !0);
        return e.image
          ? ($(),
            M(
              Ee,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? ($(),
                    M(
                      'img',
                      _n(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string'
                          ? t.$attrs
                          : { ...e.image, ...t.$attrs },
                        {
                          src: L(Ki)(
                            typeof e.image == 'string' ? e.image : e.image.src,
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == 'string'
                              ? ''
                              : e.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      w7,
                    ))
                  : ($(),
                    M(
                      Ee,
                      { key: 1 },
                      [
                        W(
                          i,
                          _n(
                            {
                              class: 'dark',
                              image: e.image.dark,
                              alt: e.image.alt,
                            },
                            t.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                        W(
                          i,
                          _n(
                            {
                              class: 'light',
                              image: e.image.light,
                              alt: e.image.alt,
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
          : de('', !0);
      };
    },
  });
const Cu = he($7, [['__scopeId', 'data-v-d605929a']]),
  C7 = ['href'],
  P7 = J({
    name: 'VPNavBarTitle',
    setup(e) {
      const { site: t, theme: r } = We(),
        { hasSidebar: i } = On();
      return (o, a) => (
        $(),
        M(
          'div',
          { class: Ce(['VPNavBarTitle', { 'has-sidebar': L(i) }]) },
          [
            B(
              'a',
              { class: 'title', href: L(t).base },
              [
                G(o.$slots, 'nav-bar-title-before', {}, void 0, !0),
                W(Cu, { class: 'logo', image: L(r).logo }, null, 8, ['image']),
                L(r).siteTitle
                  ? ($(), M(Ee, { key: 0 }, [Et(Me(L(r).siteTitle), 1)], 64))
                  : L(r).siteTitle === void 0
                    ? ($(), M(Ee, { key: 1 }, [Et(Me(L(t).title), 1)], 64))
                    : de('', !0),
                G(o.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              C7,
            ),
          ],
          2,
        )
      );
    },
  });
const S7 = he(P7, [['__scopeId', 'data-v-e1d64914']]);
const E7 = { key: 0, class: 'VPNavBarSearch' },
  T7 = {
    type: 'button',
    class: 'DocSearch DocSearch-Button',
    'aria-label': 'Search',
  },
  A7 = { class: 'DocSearch-Button-Container' },
  k7 = B(
    'svg',
    {
      class: 'DocSearch-Search-Icon',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
    },
    [
      B('path', {
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
  I7 = { class: 'DocSearch-Button-Placeholder' },
  L7 = B(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [
      B('kbd', { class: 'DocSearch-Button-Key' }),
      B('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
    ],
    -1,
  ),
  O7 = J({
    name: 'VPNavBarSearch',
    setup(e) {
      q0((c) => ({ '31819f8a': o.value }));
      const t = () => null,
        { theme: r } = We(),
        i = ce(!1),
        o = ce("'Meta'");
      ct(() => {
        if (!r.value.algolia) return;
        o.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          ? "'⌘'"
          : "'Ctrl'";
        const c = (d) => {
            d.key === 'k' &&
              (d.ctrlKey || d.metaKey) &&
              (d.preventDefault(), a(), f());
          },
          f = () => {
            window.removeEventListener('keydown', c);
          };
        window.addEventListener('keydown', c), ur(f);
      });
      function a() {
        i.value || (i.value = !0);
      }
      return (c, f) => {
        var d;
        return L(r).algolia
          ? ($(),
            M('div', E7, [
              i.value
                ? ($(), we(L(t), { key: 0 }))
                : ($(),
                  M('div', { key: 1, id: 'docsearch', onClick: a }, [
                    B('button', T7, [
                      B('span', A7, [
                        k7,
                        B(
                          'span',
                          I7,
                          Me(
                            ((d = L(r).algolia) == null
                              ? void 0
                              : d.buttonText) || 'Search',
                          ),
                          1,
                        ),
                      ]),
                      L7,
                    ]),
                  ])),
            ]))
          : de('', !0);
      };
    },
  });
const M7 = {},
  B7 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
  },
  F7 = B('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }, null, -1),
  R7 = B(
    'path',
    { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' },
    null,
    -1,
  ),
  N7 = [F7, R7];
function V7(e, t) {
  return $(), M('svg', B7, N7);
}
const D7 = he(M7, [['render', V7]]),
  H7 = J({
    name: 'VPLink',
    props: { href: null, noIcon: { type: Boolean } },
    setup(e) {
      const t = e,
        r = ue(() => t.href && Ul.test(t.href));
      return (i, o) => (
        $(),
        we(
          Nl(e.href ? 'a' : 'span'),
          {
            class: Ce(['VPLink', { link: e.href }]),
            href: e.href ? L(yl)(e.href) : void 0,
            target: L(r) ? '_blank' : void 0,
            rel: L(r) ? 'noreferrer' : void 0,
          },
          {
            default: se(() => [
              G(i.$slots, 'default', {}, void 0, !0),
              L(r) && !e.noIcon
                ? ($(), we(D7, { key: 0, class: 'icon' }))
                : de('', !0),
            ]),
            _: 3,
          },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  });
const ms = he(H7, [['__scopeId', 'data-v-525ffef3']]),
  U7 = J({
    name: 'VPNavBarMenuLink',
    props: { item: null },
    setup(e) {
      const { page: t } = We();
      return (r, i) => (
        $(),
        we(
          ms,
          {
            class: Ce({
              VPNavBarMenuLink: !0,
              active: L(ii)(
                L(t).relativePath,
                e.item.activeMatch || e.item.link,
                !!e.item.activeMatch,
              ),
            }),
            href: e.item.link,
            noIcon: !0,
          },
          { default: se(() => [Et(Me(e.item.text), 1)]), _: 1 },
          8,
          ['class', 'href'],
        )
      );
    },
  });
const z7 = he(U7, [['__scopeId', 'data-v-03361f91']]),
  Pu = ce();
let Z1 = !1,
  gc = 0;
function q7(e) {
  const t = ce(!1);
  if (typeof window < 'u') {
    !Z1 && W7(), gc++;
    const r = Pt(Pu, (i) => {
      var o, a, c;
      i === e.el.value || ((o = e.el.value) != null && o.contains(i))
        ? ((t.value = !0), (a = e.onFocus) == null || a.call(e))
        : ((t.value = !1), (c = e.onBlur) == null || c.call(e));
    });
    ur(() => {
      r(), gc--, gc || K7();
    });
  }
  return ti(t);
}
function W7() {
  document.addEventListener('focusin', X1),
    (Z1 = !0),
    (Pu.value = document.activeElement);
}
function K7() {
  document.removeEventListener('focusin', X1);
}
function X1() {
  Pu.value = document.activeElement;
}
const G7 = {},
  Y7 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  j7 = B(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1,
  ),
  Z7 = [j7];
function X7(e, t) {
  return $(), M('svg', Y7, Z7);
}
const J1 = he(G7, [['render', X7]]),
  J7 = {},
  Q7 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  e9 = B('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  t9 = B('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  n9 = B('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  r9 = [e9, t9, n9];
function s9(e, t) {
  return $(), M('svg', Q7, r9);
}
const i9 = he(J7, [['render', s9]]),
  o9 = { class: 'VPMenuLink' },
  l9 = J({
    name: 'VPMenuLink',
    props: { item: null },
    setup(e) {
      const { page: t } = We();
      return (r, i) => (
        $(),
        M('div', o9, [
          W(
            ms,
            {
              class: Ce({
                active: L(ii)(
                  L(t).relativePath,
                  e.item.activeMatch || e.item.link,
                  !!e.item.activeMatch,
                ),
              }),
              href: e.item.link,
            },
            { default: se(() => [Et(Me(e.item.text), 1)]), _: 1 },
            8,
            ['class', 'href'],
          ),
        ])
      );
    },
  });
const zl = he(l9, [['__scopeId', 'data-v-b44a2d6a']]),
  a9 = { class: 'VPMenuGroup' },
  c9 = { key: 0, class: 'title' },
  u9 = J({
    name: 'VPMenuGroup',
    props: { text: null, items: null },
    setup(e) {
      return (t, r) => (
        $(),
        M('div', a9, [
          e.text ? ($(), M('p', c9, Me(e.text), 1)) : de('', !0),
          ($(!0),
          M(
            Ee,
            null,
            bt(
              e.items,
              (i) => (
                $(),
                M(
                  Ee,
                  null,
                  [
                    'link' in i
                      ? ($(), we(zl, { key: 0, item: i }, null, 8, ['item']))
                      : de('', !0),
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
const f9 = he(u9, [['__scopeId', 'data-v-0bc013f6']]),
  d9 = { class: 'VPMenu' },
  h9 = { key: 0, class: 'items' },
  p9 = J({
    name: 'VPMenu',
    props: { items: null },
    setup(e) {
      return (t, r) => (
        $(),
        M('div', d9, [
          e.items
            ? ($(),
              M('div', h9, [
                ($(!0),
                M(
                  Ee,
                  null,
                  bt(
                    e.items,
                    (i) => (
                      $(),
                      M(
                        Ee,
                        { key: i.text },
                        [
                          'link' in i
                            ? ($(),
                              we(zl, { key: 0, item: i }, null, 8, ['item']))
                            : ($(),
                              we(
                                f9,
                                { key: 1, text: i.text, items: i.items },
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
            : de('', !0),
          G(t.$slots, 'default', {}, void 0, !0),
        ])
      );
    },
  });
const g9 = he(p9, [['__scopeId', 'data-v-a48a02bf']]),
  _9 = ['aria-expanded', 'aria-label'],
  v9 = { key: 0, class: 'text' },
  m9 = { class: 'menu' },
  y9 = J({
    name: 'VPFlyout',
    props: { icon: null, button: null, label: null, items: null },
    setup(e) {
      const t = ce(!1),
        r = ce();
      q7({ el: r, onBlur: i });
      function i() {
        t.value = !1;
      }
      return (o, a) => (
        $(),
        M(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: r,
            onMouseenter: a[1] || (a[1] = (c) => (t.value = !0)),
            onMouseleave: a[2] || (a[2] = (c) => (t.value = !1)),
          },
          [
            B(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': t.value,
                'aria-label': e.label,
                onClick: a[0] || (a[0] = (c) => (t.value = !t.value)),
              },
              [
                e.button || e.icon
                  ? ($(),
                    M('span', v9, [
                      e.icon
                        ? ($(),
                          we(Nl(e.icon), { key: 0, class: 'option-icon' }))
                        : de('', !0),
                      Et(' ' + Me(e.button) + ' ', 1),
                      W(J1, { class: 'text-icon' }),
                    ]))
                  : ($(), we(i9, { key: 1, class: 'icon' })),
              ],
              8,
              _9,
            ),
            B('div', m9, [
              W(
                g9,
                { items: e.items },
                {
                  default: se(() => [G(o.$slots, 'default', {}, void 0, !0)]),
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
const Su = he(y9, [['__scopeId', 'data-v-4b91eee2']]),
  b9 = J({
    name: 'VPNavBarMenuGroup',
    props: { item: null },
    setup(e) {
      const { page: t } = We();
      return (r, i) => (
        $(),
        we(
          Su,
          {
            class: Ce({
              VPNavBarMenuGroup: !0,
              active: L(ii)(
                L(t).relativePath,
                e.item.activeMatch,
                !!e.item.activeMatch,
              ),
            }),
            button: e.item.text,
            items: e.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      );
    },
  }),
  w9 = (e) => (mn('data-v-792c37ca'), (e = e()), yn(), e),
  x9 = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  $9 = w9(() =>
    B(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1,
    ),
  ),
  C9 = J({
    name: 'VPNavBarMenu',
    setup(e) {
      const { theme: t } = We();
      return (r, i) =>
        L(t).nav
          ? ($(),
            M('nav', x9, [
              $9,
              ($(!0),
              M(
                Ee,
                null,
                bt(
                  L(t).nav,
                  (o) => (
                    $(),
                    M(
                      Ee,
                      { key: o.text },
                      [
                        'link' in o
                          ? ($(),
                            we(z7, { key: 0, item: o }, null, 8, ['item']))
                          : ($(),
                            we(b9, { key: 1, item: o }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : de('', !0);
    },
  });
const P9 = he(C9, [['__scopeId', 'data-v-792c37ca']]),
  S9 = {},
  E9 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  T9 = B('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  A9 = B(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1,
  ),
  k9 = [T9, A9];
function I9(e, t) {
  return $(), M('svg', E9, k9);
}
const Q1 = he(S9, [['render', I9]]),
  L9 = { class: 'items' },
  O9 = { class: 'title' },
  M9 = J({
    name: 'VPNavBarTranslations',
    setup(e) {
      const { theme: t } = We();
      return (r, i) =>
        L(t).localeLinks
          ? ($(),
            we(
              Su,
              { key: 0, class: 'VPNavBarTranslations', icon: Q1 },
              {
                default: se(() => [
                  B('div', L9, [
                    B('p', O9, Me(L(t).localeLinks.text), 1),
                    ($(!0),
                    M(
                      Ee,
                      null,
                      bt(
                        L(t).localeLinks.items,
                        (o) => (
                          $(),
                          we(zl, { key: o.link, item: o }, null, 8, ['item'])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
            ))
          : de('', !0);
    },
  });
const B9 = he(M9, [['__scopeId', 'data-v-48a7f51d']]);
const F9 = {},
  R9 = { class: 'VPSwitch', type: 'button', role: 'switch' },
  N9 = { class: 'check' },
  V9 = { key: 0, class: 'icon' };
function D9(e, t) {
  return (
    $(),
    M('button', R9, [
      B('span', N9, [
        e.$slots.default
          ? ($(), M('span', V9, [G(e.$slots, 'default', {}, void 0, !0)]))
          : de('', !0),
      ]),
    ])
  );
}
const H9 = he(F9, [
    ['render', D9],
    ['__scopeId', 'data-v-111b6abe'],
  ]),
  U9 = {},
  z9 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  q9 = I0(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  W9 = [q9];
function K9(e, t) {
  return $(), M('svg', z9, W9);
}
const G9 = he(U9, [['render', K9]]),
  Y9 = {},
  j9 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Z9 = B(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1,
  ),
  X9 = [Z9];
function J9(e, t) {
  return $(), M('svg', j9, X9);
}
const Q9 = he(Y9, [['render', J9]]),
  e$ = J({
    name: 'VPSwitchAppearance',
    setup(e) {
      const { site: t, isDark: r } = We(),
        i = ce(!1),
        o = typeof localStorage < 'u' ? a() : () => {};
      ct(() => {
        i.value = document.documentElement.classList.contains('dark');
      });
      function a() {
        const c = window.matchMedia('(prefers-color-scheme: dark)'),
          f = document.documentElement.classList;
        let d = localStorage.getItem(rp),
          p =
            (t.value.appearance === 'dark' && d == null) ||
            (d === 'auto' || d == null ? c.matches : d === 'dark');
        c.onchange = (y) => {
          d === 'auto' && m((p = y.matches));
        };
        function v() {
          m((p = !p)),
            (d = p
              ? c.matches
                ? 'auto'
                : 'dark'
              : c.matches
                ? 'light'
                : 'auto'),
            localStorage.setItem(rp, d);
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
            (i.value = y),
            f[y ? 'add' : 'remove']('dark'),
            window.getComputedStyle(S).opacity,
            document.head.removeChild(S);
        }
        return v;
      }
      return (
        Pt(i, (c) => {
          r.value = c;
        }),
        (c, f) => (
          $(),
          we(
            H9,
            {
              class: 'VPSwitchAppearance',
              'aria-label': 'toggle dark mode',
              'aria-checked': i.value,
              onClick: L(o),
            },
            {
              default: se(() => [
                W(G9, { class: 'sun' }),
                W(Q9, { class: 'moon' }),
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
const Eu = he(e$, [['__scopeId', 'data-v-f520c8f9']]),
  t$ = { key: 0, class: 'VPNavBarAppearance' },
  n$ = J({
    name: 'VPNavBarAppearance',
    setup(e) {
      const { site: t } = We();
      return (r, i) =>
        L(t).appearance ? ($(), M('div', t$, [W(Eu)])) : de('', !0);
    },
  });
const r$ = he(n$, [['__scopeId', 'data-v-adc738c7']]),
  s$ = {
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
  i$ = ['href', 'innerHTML'],
  o$ = J({
    name: 'VPSocialLink',
    props: { icon: null, link: null },
    setup(e) {
      const t = e,
        r = ue(() => (typeof t.icon == 'object' ? t.icon.svg : s$[t.icon]));
      return (i, o) => (
        $(),
        M(
          'a',
          {
            class: 'VPSocialLink',
            href: e.link,
            target: '_blank',
            rel: 'noopener',
            innerHTML: L(r),
          },
          null,
          8,
          i$,
        )
      );
    },
  });
const l$ = he(o$, [['__scopeId', 'data-v-2770d24e']]),
  a$ = { class: 'VPSocialLinks' },
  c$ = J({
    name: 'VPSocialLinks',
    props: { links: null },
    setup(e) {
      return (t, r) => (
        $(),
        M('div', a$, [
          ($(!0),
          M(
            Ee,
            null,
            bt(
              e.links,
              ({ link: i, icon: o }) => (
                $(),
                we(l$, { key: i, icon: o, link: i }, null, 8, ['icon', 'link'])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const Tu = he(c$, [['__scopeId', 'data-v-0affcb9e']]),
  u$ = J({
    name: 'VPNavBarSocialLinks',
    setup(e) {
      const { theme: t } = We();
      return (r, i) =>
        L(t).socialLinks
          ? ($(),
            we(
              Tu,
              { key: 0, class: 'VPNavBarSocialLinks', links: L(t).socialLinks },
              null,
              8,
              ['links'],
            ))
          : de('', !0);
    },
  });
const f$ = he(u$, [['__scopeId', 'data-v-84aa6160']]),
  d$ = (e) => (mn('data-v-c738f5b5'), (e = e()), yn(), e),
  h$ = { key: 0, class: 'group' },
  p$ = { class: 'trans-title' },
  g$ = { key: 1, class: 'group' },
  _$ = { class: 'item appearance' },
  v$ = d$(() => B('p', { class: 'label' }, 'Appearance', -1)),
  m$ = { class: 'appearance-action' },
  y$ = { key: 2, class: 'group' },
  b$ = { class: 'item social-links' },
  w$ = J({
    name: 'VPNavBarExtra',
    setup(e) {
      const { site: t, theme: r } = We(),
        i = ue(
          () =>
            r.value.localeLinks || t.value.appearance || r.value.socialLinks,
        );
      return (o, a) =>
        L(i)
          ? ($(),
            we(
              Su,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: se(() => [
                  L(r).localeLinks
                    ? ($(),
                      M('div', h$, [
                        B('p', p$, Me(L(r).localeLinks.text), 1),
                        ($(!0),
                        M(
                          Ee,
                          null,
                          bt(
                            L(r).localeLinks.items,
                            (c) => (
                              $(),
                              we(zl, { key: c.link, item: c }, null, 8, [
                                'item',
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : de('', !0),
                  L(t).appearance
                    ? ($(),
                      M('div', g$, [B('div', _$, [v$, B('div', m$, [W(Eu)])])]))
                    : de('', !0),
                  L(r).socialLinks
                    ? ($(),
                      M('div', y$, [
                        B('div', b$, [
                          W(
                            Tu,
                            {
                              class: 'social-links-list',
                              links: L(r).socialLinks,
                            },
                            null,
                            8,
                            ['links'],
                          ),
                        ]),
                      ]))
                    : de('', !0),
                ]),
                _: 1,
              },
            ))
          : de('', !0);
    },
  });
const x$ = he(w$, [['__scopeId', 'data-v-c738f5b5']]),
  $$ = (e) => (mn('data-v-68d929bf'), (e = e()), yn(), e),
  C$ = ['aria-expanded'],
  P$ = $$(() =>
    B(
      'span',
      { class: 'container' },
      [
        B('span', { class: 'top' }),
        B('span', { class: 'middle' }),
        B('span', { class: 'bottom' }),
      ],
      -1,
    ),
  ),
  S$ = [P$],
  E$ = J({
    name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(e) {
      return (t, r) => (
        $(),
        M(
          'button',
          {
            type: 'button',
            class: Ce(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: r[0] || (r[0] = (i) => t.$emit('click')),
          },
          S$,
          10,
          C$,
        )
      );
    },
  });
const T$ = he(E$, [['__scopeId', 'data-v-68d929bf']]),
  A$ = { class: 'container' },
  k$ = { class: 'content' },
  I$ = J({
    name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(e) {
      const { hasSidebar: t } = On();
      return (r, i) => (
        $(),
        M(
          'div',
          { class: Ce(['VPNavBar', { 'has-sidebar': L(t) }]) },
          [
            B('div', A$, [
              W(S7, null, {
                'nav-bar-title-before': se(() => [
                  G(r.$slots, 'nav-bar-title-before', {}, void 0, !0),
                ]),
                'nav-bar-title-after': se(() => [
                  G(r.$slots, 'nav-bar-title-after', {}, void 0, !0),
                ]),
                _: 3,
              }),
              B('div', k$, [
                G(r.$slots, 'nav-bar-content-before', {}, void 0, !0),
                W(O7, { class: 'search' }),
                W(P9, { class: 'menu' }),
                W(B9, { class: 'translations' }),
                W(r$, { class: 'appearance' }),
                W(f$, { class: 'social-links' }),
                W(x$, { class: 'extra' }),
                G(r.$slots, 'nav-bar-content-after', {}, void 0, !0),
                W(
                  T$,
                  {
                    class: 'hamburger',
                    active: e.isScreenOpen,
                    onClick: i[0] || (i[0] = (o) => r.$emit('toggle-screen')),
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
const L$ = he(I$, [['__scopeId', 'data-v-19492336']]);
function O$(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
    return r;
  } else return Array.from(e);
}
var Au = !1;
if (typeof window < 'u') {
  var _p = {
    get passive() {
      Au = !0;
    },
  };
  window.addEventListener('testPassive', null, _p),
    window.removeEventListener('testPassive', null, _p);
}
var bl =
    typeof window < 'u' &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === 'MacIntel' &&
        window.navigator.maxTouchPoints > 1)),
  Ws = [],
  wl = !1,
  ku = -1,
  Ri = void 0,
  rs = void 0,
  Ni = void 0,
  eg = function (t) {
    return Ws.some(function (r) {
      return !!(r.options.allowTouchMove && r.options.allowTouchMove(t));
    });
  },
  xl = function (t) {
    var r = t || window.event;
    return eg(r.target) || r.touches.length > 1
      ? !0
      : (r.preventDefault && r.preventDefault(), !1);
  },
  M$ = function (t) {
    if (Ni === void 0) {
      var r = !!t && t.reserveScrollBarGap === !0,
        i = window.innerWidth - document.documentElement.clientWidth;
      if (r && i > 0) {
        var o = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right'),
          10,
        );
        (Ni = document.body.style.paddingRight),
          (document.body.style.paddingRight = o + i + 'px');
      }
    }
    Ri === void 0 &&
      ((Ri = document.body.style.overflow),
      (document.body.style.overflow = 'hidden'));
  },
  B$ = function () {
    Ni !== void 0 && ((document.body.style.paddingRight = Ni), (Ni = void 0)),
      Ri !== void 0 && ((document.body.style.overflow = Ri), (Ri = void 0));
  },
  F$ = function () {
    return window.requestAnimationFrame(function () {
      if (rs === void 0) {
        rs = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var t = window,
          r = t.scrollY,
          i = t.scrollX,
          o = t.innerHeight;
        (document.body.style.position = 'fixed'),
          (document.body.style.top = -r),
          (document.body.style.left = -i),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var a = o - window.innerHeight;
              a && r >= o && (document.body.style.top = -(r + a));
            });
          }, 300);
      }
    });
  },
  R$ = function () {
    if (rs !== void 0) {
      var t = -parseInt(document.body.style.top, 10),
        r = -parseInt(document.body.style.left, 10);
      (document.body.style.position = rs.position),
        (document.body.style.top = rs.top),
        (document.body.style.left = rs.left),
        window.scrollTo(r, t),
        (rs = void 0);
    }
  },
  N$ = function (t) {
    return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
  },
  V$ = function (t, r) {
    var i = t.targetTouches[0].clientY - ku;
    return eg(t.target)
      ? !1
      : (r && r.scrollTop === 0 && i > 0) || (N$(r) && i < 0)
        ? xl(t)
        : (t.stopPropagation(), !0);
  },
  tg = function (t, r) {
    if (!t) {
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
      );
      return;
    }
    if (
      !Ws.some(function (o) {
        return o.targetElement === t;
      })
    ) {
      var i = { targetElement: t, options: r || {} };
      (Ws = [].concat(O$(Ws), [i])),
        bl ? F$() : M$(r),
        bl &&
          ((t.ontouchstart = function (o) {
            o.targetTouches.length === 1 && (ku = o.targetTouches[0].clientY);
          }),
          (t.ontouchmove = function (o) {
            o.targetTouches.length === 1 && V$(o, t);
          }),
          wl ||
            (document.addEventListener(
              'touchmove',
              xl,
              Au ? { passive: !1 } : void 0,
            ),
            (wl = !0)));
    }
  },
  ng = function () {
    bl &&
      (Ws.forEach(function (t) {
        (t.targetElement.ontouchstart = null),
          (t.targetElement.ontouchmove = null);
      }),
      wl &&
        (document.removeEventListener(
          'touchmove',
          xl,
          Au ? { passive: !1 } : void 0,
        ),
        (wl = !1)),
      (ku = -1)),
      bl ? R$() : B$(),
      (Ws = []);
  };
const D$ = J({
  name: 'VPNavScreenMenuLink',
  props: { text: null, link: null },
  setup(e) {
    const t = yt('close-screen');
    return (r, i) => (
      $(),
      we(
        ms,
        { class: 'VPNavScreenMenuLink', href: e.link, onClick: L(t) },
        { default: se(() => [Et(Me(e.text), 1)]), _: 1 },
        8,
        ['href', 'onClick'],
      )
    );
  },
});
const H$ = he(D$, [['__scopeId', 'data-v-54b0cf8f']]),
  U$ = {},
  z$ = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  q$ = B(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1,
  ),
  W$ = [q$];
function K$(e, t) {
  return $(), M('svg', z$, W$);
}
const G$ = he(U$, [['render', K$]]),
  Y$ = J({
    name: 'VPNavScreenMenuGroupLink',
    props: { text: null, link: null },
    setup(e) {
      const t = yt('close-screen');
      return (r, i) => (
        $(),
        we(
          ms,
          { class: 'VPNavScreenMenuGroupLink', href: e.link, onClick: L(t) },
          { default: se(() => [Et(Me(e.text), 1)]), _: 1 },
          8,
          ['href', 'onClick'],
        )
      );
    },
  });
const rg = he(Y$, [['__scopeId', 'data-v-dde32c4d']]),
  j$ = { class: 'VPNavScreenMenuGroupSection' },
  Z$ = { key: 0, class: 'title' },
  X$ = J({
    name: 'VPNavScreenMenuGroupSection',
    props: { text: null, items: null },
    setup(e) {
      return (t, r) => (
        $(),
        M('div', j$, [
          e.text ? ($(), M('p', Z$, Me(e.text), 1)) : de('', !0),
          ($(!0),
          M(
            Ee,
            null,
            bt(
              e.items,
              (i) => (
                $(),
                we(rg, { key: i.text, text: i.text, link: i.link }, null, 8, [
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
const J$ = he(X$, [['__scopeId', 'data-v-8fd690c5']]),
  Q$ = ['aria-controls', 'aria-expanded'],
  eC = { class: 'button-text' },
  tC = ['id'],
  nC = { key: 1, class: 'group' },
  rC = J({
    name: 'VPNavScreenMenuGroup',
    props: { text: null, items: null },
    setup(e) {
      const t = e,
        r = ce(!1),
        i = ue(
          () => `NavScreenGroup-${t.text.replace(' ', '-').toLowerCase()}`,
        );
      function o() {
        r.value = !r.value;
      }
      return (a, c) => (
        $(),
        M(
          'div',
          { class: Ce(['VPNavScreenMenuGroup', { open: r.value }]) },
          [
            B(
              'button',
              {
                class: 'button',
                'aria-controls': L(i),
                'aria-expanded': r.value,
                onClick: o,
              },
              [B('span', eC, Me(e.text), 1), W(G$, { class: 'button-icon' })],
              8,
              Q$,
            ),
            B(
              'div',
              { id: L(i), class: 'items' },
              [
                ($(!0),
                M(
                  Ee,
                  null,
                  bt(
                    e.items,
                    (f) => (
                      $(),
                      M(
                        Ee,
                        { key: f.text },
                        [
                          'link' in f
                            ? ($(),
                              M('div', { key: f.text, class: 'item' }, [
                                W(rg, { text: f.text, link: f.link }, null, 8, [
                                  'text',
                                  'link',
                                ]),
                              ]))
                            : ($(),
                              M('div', nC, [
                                W(
                                  J$,
                                  { text: f.text, items: f.items },
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
              tC,
            ),
          ],
          2,
        )
      );
    },
  });
const sC = he(rC, [['__scopeId', 'data-v-1b7b00de']]),
  iC = { key: 0, class: 'VPNavScreenMenu' },
  oC = J({
    name: 'VPNavScreenMenu',
    setup(e) {
      const { theme: t } = We();
      return (r, i) =>
        L(t).nav
          ? ($(),
            M('nav', iC, [
              ($(!0),
              M(
                Ee,
                null,
                bt(
                  L(t).nav,
                  (o) => (
                    $(),
                    M(
                      Ee,
                      { key: o.text },
                      [
                        'link' in o
                          ? ($(),
                            we(
                              H$,
                              { key: 0, text: o.text, link: o.link },
                              null,
                              8,
                              ['text', 'link'],
                            ))
                          : ($(),
                            we(
                              sC,
                              { key: 1, text: o.text || '', items: o.items },
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
          : de('', !0);
    },
  }),
  lC = (e) => (mn('data-v-d65624d7'), (e = e()), yn(), e),
  aC = { key: 0, class: 'VPNavScreenAppearance' },
  cC = lC(() => B('p', { class: 'text' }, 'Appearance', -1)),
  uC = J({
    name: 'VPNavScreenAppearance',
    setup(e) {
      const { site: t } = We();
      return (r, i) =>
        L(t).appearance ? ($(), M('div', aC, [cC, W(Eu)])) : de('', !0);
    },
  });
const fC = he(uC, [['__scopeId', 'data-v-d65624d7']]),
  dC = { class: 'list' },
  hC = ['href'],
  pC = J({
    name: 'VPNavScreenTranslations',
    setup(e) {
      const { theme: t } = We(),
        r = ce(!1);
      function i() {
        r.value = !r.value;
      }
      return (o, a) =>
        L(t).localeLinks
          ? ($(),
            M(
              'div',
              {
                key: 0,
                class: Ce(['VPNavScreenTranslations', { open: r.value }]),
              },
              [
                B('button', { class: 'title', onClick: i }, [
                  W(Q1, { class: 'icon lang' }),
                  Et(' ' + Me(L(t).localeLinks.text) + ' ', 1),
                  W(J1, { class: 'icon chevron' }),
                ]),
                B('ul', dC, [
                  ($(!0),
                  M(
                    Ee,
                    null,
                    bt(
                      L(t).localeLinks.items,
                      (c) => (
                        $(),
                        M('li', { key: c.link, class: 'item' }, [
                          B(
                            'a',
                            { class: 'link', href: c.link },
                            Me(c.text),
                            9,
                            hC,
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
          : de('', !0);
    },
  });
const gC = he(pC, [['__scopeId', 'data-v-37186b2c']]),
  _C = J({
    name: 'VPNavScreenSocialLinks',
    setup(e) {
      const { theme: t } = We();
      return (r, i) =>
        L(t).socialLinks
          ? ($(),
            we(
              Tu,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: L(t).socialLinks,
              },
              null,
              8,
              ['links'],
            ))
          : de('', !0);
    },
  }),
  vC = { class: 'container' },
  mC = J({
    name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(e) {
      const t = ce(null);
      function r() {
        tg(t.value, { reserveScrollBarGap: !0 });
      }
      function i() {
        ng();
      }
      return (o, a) => (
        $(),
        we(
          An,
          { name: 'fade', onEnter: r, onAfterLeave: i },
          {
            default: se(() => [
              e.open
                ? ($(),
                  M(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: t },
                    [
                      B('div', vC, [
                        G(
                          o.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        W(oC, { class: 'menu' }),
                        W(gC, { class: 'translations' }),
                        W(fC, { class: 'appearance' }),
                        W(_C, { class: 'social-links' }),
                        G(o.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : de('', !0),
            ]),
            _: 3,
          },
        )
      );
    },
  });
const yC = he(mC, [['__scopeId', 'data-v-6f8335ec']]),
  bC = J({
    name: 'VPNav',
    setup(e) {
      const { isScreenOpen: t, closeScreen: r, toggleScreen: i } = b7(),
        { hasSidebar: o } = On();
      return (
        qn('close-screen', r),
        (a, c) => (
          $(),
          M(
            'header',
            { class: Ce(['VPNav', { 'no-sidebar': !L(o) }]) },
            [
              W(
                L$,
                { 'is-screen-open': L(t), onToggleScreen: L(i) },
                {
                  'nav-bar-title-before': se(() => [
                    G(a.$slots, 'nav-bar-title-before', {}, void 0, !0),
                  ]),
                  'nav-bar-title-after': se(() => [
                    G(a.$slots, 'nav-bar-title-after', {}, void 0, !0),
                  ]),
                  'nav-bar-content-before': se(() => [
                    G(a.$slots, 'nav-bar-content-before', {}, void 0, !0),
                  ]),
                  'nav-bar-content-after': se(() => [
                    G(a.$slots, 'nav-bar-content-after', {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ['is-screen-open', 'onToggleScreen'],
              ),
              W(
                yC,
                { open: L(t) },
                {
                  'nav-screen-content-before': se(() => [
                    G(a.$slots, 'nav-screen-content-before', {}, void 0, !0),
                  ]),
                  'nav-screen-content-after': se(() => [
                    G(a.$slots, 'nav-screen-content-after', {}, void 0, !0),
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
const wC = he(bC, [['__scopeId', 'data-v-4514d3fd']]),
  xC = {},
  $C = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  CC = B(
    'path',
    {
      d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z',
    },
    null,
    -1,
  ),
  PC = B(
    'path',
    { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' },
    null,
    -1,
  ),
  SC = B(
    'path',
    {
      d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z',
    },
    null,
    -1,
  ),
  EC = B(
    'path',
    {
      d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z',
    },
    null,
    -1,
  ),
  TC = [CC, PC, SC, EC];
function AC(e, t) {
  return $(), M('svg', $C, TC);
}
const kC = he(xC, [['render', AC]]),
  IC = (e) => (mn('data-v-e2d97d8d'), (e = e()), yn(), e),
  LC = { key: 0, class: 'VPLocalNav' },
  OC = ['aria-expanded'],
  MC = IC(() => B('span', { class: 'menu-text' }, 'Menu', -1)),
  BC = J({
    name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(e) {
      const { hasSidebar: t } = On();
      function r() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return (i, o) =>
        L(t)
          ? ($(),
            M('div', LC, [
              B(
                'button',
                {
                  class: 'menu',
                  'aria-expanded': e.open,
                  'aria-controls': 'VPSidebarNav',
                  onClick: o[0] || (o[0] = (a) => i.$emit('open-menu')),
                },
                [W(kC, { class: 'menu-icon' }), MC],
                8,
                OC,
              ),
              B(
                'a',
                { class: 'top-link', href: '#', onClick: r },
                ' Return to top ',
              ),
            ]))
          : de('', !0);
    },
  });
const FC = he(BC, [['__scopeId', 'data-v-e2d97d8d']]),
  RC = {},
  NC = {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
  },
  VC = B(
    'path',
    {
      d: 'M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z',
    },
    null,
    -1,
  ),
  DC = B(
    'path',
    {
      d: 'M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z',
    },
    null,
    -1,
  ),
  HC = [VC, DC];
function UC(e, t) {
  return $(), M('svg', NC, HC);
}
const zC = he(RC, [['render', UC]]),
  qC = {},
  WC = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 24 24',
  },
  KC = B(
    'path',
    {
      d: 'M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z',
    },
    null,
    -1,
  ),
  GC = B(
    'path',
    {
      d: 'M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z',
    },
    null,
    -1,
  ),
  YC = [KC, GC];
function jC(e, t) {
  return $(), M('svg', WC, YC);
}
const ZC = he(qC, [['render', jC]]),
  XC = ['innerHTML'],
  JC = J({
    name: 'VPSidebarLink',
    props: { item: null, depth: { default: 1 } },
    setup(e) {
      const t = e,
        { page: r, frontmatter: i } = We(),
        o = ue(() => i.value.sidebarDepth || 1 / 0),
        a = ue(() => ii(r.value.relativePath, t.item.link)),
        { isSidebarEnabled: c } = On(),
        f = yt('close-sidebar'),
        d = yt('is-sidebar-open'),
        p = ce(null);
      return (
        Dr(() => {
          var v, m;
          d.value &&
            a.value &&
            ((m = (v = p.value) == null ? void 0 : v.$el) == null || m.focus());
        }),
        (v, m) => {
          const y = fr('VPSidebarLink', !0);
          return (
            $(),
            M(
              Ee,
              null,
              [
                W(
                  ms,
                  {
                    class: Ce(['link', { active: L(a) }]),
                    style: ht({ paddingLeft: 16 * (e.depth - 1) + 'px' }),
                    href: e.item.link,
                    tabindex: L(c) || L(d) ? 0 : -1,
                    onClick: L(f),
                    ref_key: 'link',
                    ref: p,
                  },
                  {
                    default: se(() => [
                      B(
                        'span',
                        {
                          innerHTML: e.item.text,
                          class: Ce(['link-text', { light: e.depth > 1 }]),
                        },
                        null,
                        10,
                        XC,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['class', 'style', 'href', 'tabindex', 'onClick'],
                ),
                'items' in e.item && e.depth < L(o)
                  ? ($(!0),
                    M(
                      Ee,
                      { key: 0 },
                      bt(
                        e.item.items,
                        (S) => (
                          $(),
                          we(
                            y,
                            { key: S.link, item: S, depth: e.depth + 1 },
                            null,
                            8,
                            ['item', 'depth'],
                          )
                        ),
                      ),
                      128,
                    ))
                  : de('', !0),
              ],
              64,
            )
          );
        }
      );
    },
  });
const QC = he(JC, [['__scopeId', 'data-v-0543d224']]),
  eP = ['role'],
  tP = ['innerHTML'],
  nP = { class: 'action' },
  rP = { class: 'items' },
  sP = J({
    name: 'VPSidebarGroup',
    props: {
      text: null,
      items: null,
      collapsible: { type: Boolean },
      collapsed: { type: Boolean },
    },
    setup(e) {
      const t = e,
        r = ce(!1);
      Dr(() => {
        r.value = !!(t.collapsible && t.collapsed);
      });
      const { page: i } = We();
      Dr(() => {
        t.items.some((a) => ii(i.value.relativePath, a.link)) && (r.value = !1);
      });
      function o() {
        t.collapsible && (r.value = !r.value);
      }
      return (a, c) => (
        $(),
        M(
          'section',
          {
            class: Ce([
              'VPSidebarGroup',
              { collapsible: e.collapsible, collapsed: r.value },
            ]),
          },
          [
            e.text
              ? ($(),
                M(
                  'div',
                  {
                    key: 0,
                    class: 'title',
                    role: e.collapsible ? 'button' : void 0,
                    onClick: o,
                  },
                  [
                    B(
                      'h2',
                      { innerHTML: e.text, class: 'title-text' },
                      null,
                      8,
                      tP,
                    ),
                    B('div', nP, [
                      W(ZC, { class: 'icon minus' }),
                      W(zC, { class: 'icon plus' }),
                    ]),
                  ],
                  8,
                  eP,
                ))
              : de('', !0),
            B('div', rP, [
              ($(!0),
              M(
                Ee,
                null,
                bt(
                  e.items,
                  (f) => (
                    $(), we(QC, { key: f.link, item: f }, null, 8, ['item'])
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
const iP = he(sP, [['__scopeId', 'data-v-f9fbb81d']]),
  oP = (e) => (mn('data-v-e92acee1'), (e = e()), yn(), e),
  lP = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  aP = oP(() =>
    B(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1,
    ),
  ),
  cP = J({
    name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(e) {
      const t = e,
        { sidebar: r, hasSidebar: i } = On();
      let o = ce(null);
      function a() {
        tg(o.value, { reserveScrollBarGap: !0 });
      }
      function c() {
        ng();
      }
      return (
        uu(async () => {
          var f;
          t.open ? (a(), (f = o.value) == null || f.focus()) : c();
        }),
        (f, d) =>
          L(i)
            ? ($(),
              M(
                'aside',
                {
                  key: 0,
                  class: Ce(['VPSidebar', { open: e.open }]),
                  ref_key: 'navEl',
                  ref: o,
                  onClick: d[0] || (d[0] = qi(() => {}, ['stop'])),
                },
                [
                  B('nav', lP, [
                    aP,
                    G(f.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    ($(!0),
                    M(
                      Ee,
                      null,
                      bt(
                        L(r),
                        (p) => (
                          $(),
                          M('div', { key: p.text, class: 'group' }, [
                            W(
                              iP,
                              {
                                text: p.text,
                                items: p.items,
                                collapsible: p.collapsible,
                                collapsed: p.collapsed,
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
                    G(f.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : de('', !0)
      );
    },
  });
const uP = he(cP, [['__scopeId', 'data-v-e92acee1']]),
  fP = {},
  dP = { class: 'VPPage' };
function hP(e, t) {
  const r = fr('Content');
  return $(), M('div', dP, [W(r)]);
}
const pP = he(fP, [['render', hP]]),
  gP = J({
    name: 'VPButton',
    props: { tag: null, size: null, theme: null, text: null, href: null },
    setup(e) {
      const t = e,
        r = ue(() => [t.size ?? 'medium', t.theme ?? 'brand']),
        i = ue(() => t.href && Ul.test(t.href)),
        o = ue(() => (t.tag ? t.tag : t.href ? 'a' : 'button'));
      return (a, c) => (
        $(),
        we(
          Nl(L(o)),
          {
            class: Ce(['VPButton', L(r)]),
            href: e.href ? L(yl)(e.href) : void 0,
            target: L(i) ? '_blank' : void 0,
            rel: L(i) ? 'noreferrer' : void 0,
          },
          { default: se(() => [Et(Me(e.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  });
const _P = he(gP, [['__scopeId', 'data-v-3fdbadc8']]),
  vP = (e) => (mn('data-v-e7cb8302'), (e = e()), yn(), e),
  mP = { class: 'container' },
  yP = { class: 'main' },
  bP = { key: 0, class: 'name' },
  wP = { class: 'clip' },
  xP = { key: 1, class: 'text' },
  $P = { key: 2, class: 'tagline' },
  CP = { key: 3, class: 'actions' },
  PP = { key: 0, class: 'image' },
  SP = { class: 'image-container' },
  EP = vP(() => B('div', { class: 'image-bg' }, null, -1)),
  TP = J({
    name: 'VPHero',
    props: {
      name: null,
      text: null,
      tagline: null,
      image: null,
      actions: null,
    },
    setup(e) {
      const t = yt('hero-image-slot-exists');
      return (r, i) => (
        $(),
        M(
          'div',
          { class: Ce(['VPHero', { 'has-image': e.image || L(t) }]) },
          [
            B('div', mP, [
              B('div', yP, [
                e.name
                  ? ($(), M('h1', bP, [B('span', wP, Me(e.name), 1)]))
                  : de('', !0),
                e.text ? ($(), M('p', xP, Me(e.text), 1)) : de('', !0),
                e.tagline ? ($(), M('p', $P, Me(e.tagline), 1)) : de('', !0),
                e.actions
                  ? ($(),
                    M('div', CP, [
                      ($(!0),
                      M(
                        Ee,
                        null,
                        bt(
                          e.actions,
                          (o) => (
                            $(),
                            M('div', { key: o.link, class: 'action' }, [
                              W(
                                _P,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
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
                  : de('', !0),
              ]),
              e.image || L(t)
                ? ($(),
                  M('div', PP, [
                    B('div', SP, [
                      EP,
                      G(
                        r.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          e.image
                            ? ($(),
                              we(
                                Cu,
                                { key: 0, class: 'image-src', image: e.image },
                                null,
                                8,
                                ['image'],
                              ))
                            : de('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : de('', !0),
            ]),
          ],
          2,
        )
      );
    },
  });
const AP = he(TP, [['__scopeId', 'data-v-e7cb8302']]),
  kP = J({
    name: 'VPHomeHero',
    setup(e) {
      const { frontmatter: t } = We();
      return (r, i) =>
        L(t).hero
          ? ($(),
            we(
              AP,
              {
                key: 0,
                class: 'VPHomeHero',
                name: L(t).hero.name,
                text: L(t).hero.text,
                tagline: L(t).hero.tagline,
                image: L(t).hero.image,
                actions: L(t).hero.actions,
              },
              {
                'home-hero-image': se(() => [G(r.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : de('', !0);
    },
  }),
  IP = {},
  LP = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  OP = B(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1,
  ),
  MP = [OP];
function BP(e, t) {
  return $(), M('svg', LP, MP);
}
const FP = he(IP, [['render', BP]]),
  RP = { class: 'box' },
  NP = { key: 1, class: 'icon' },
  VP = { class: 'title' },
  DP = { class: 'details' },
  HP = { key: 2, class: 'link-text' },
  UP = { class: 'link-text-value' },
  zP = J({
    name: 'VPFeature',
    props: {
      icon: null,
      title: null,
      details: null,
      link: null,
      linkText: null,
    },
    setup(e) {
      return (t, r) => (
        $(),
        we(
          ms,
          { class: 'VPFeature', href: e.link, 'no-icon': !0 },
          {
            default: se(() => [
              B('article', RP, [
                typeof e.icon == 'object'
                  ? ($(),
                    we(
                      Cu,
                      {
                        key: 0,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height,
                        width: e.icon.width,
                      },
                      null,
                      8,
                      ['image', 'alt', 'height', 'width'],
                    ))
                  : e.icon
                    ? ($(), M('div', NP, Me(e.icon), 1))
                    : de('', !0),
                B('h2', VP, Me(e.title), 1),
                B('p', DP, Me(e.details), 1),
                e.linkText
                  ? ($(),
                    M('div', HP, [
                      B('p', UP, [
                        Et(Me(e.linkText) + ' ', 1),
                        W(FP, { class: 'link-text-icon' }),
                      ]),
                    ]))
                  : de('', !0),
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
const qP = he(zP, [['__scopeId', 'data-v-e747b642']]),
  WP = { key: 0, class: 'VPFeatures' },
  KP = { class: 'container' },
  GP = { class: 'items' },
  YP = J({
    name: 'VPFeatures',
    props: { features: null },
    setup(e) {
      const t = e,
        r = ue(() => {
          const i = t.features.length;
          if (i) {
            if (i === 2) return 'grid-2';
            if (i === 3) return 'grid-3';
            if (i % 3 === 0) return 'grid-6';
            if (i % 2 === 0) return 'grid-4';
          } else return;
        });
      return (i, o) =>
        e.features
          ? ($(),
            M('div', WP, [
              B('div', KP, [
                B('div', GP, [
                  ($(!0),
                  M(
                    Ee,
                    null,
                    bt(
                      e.features,
                      (a) => (
                        $(),
                        M(
                          'div',
                          { key: a.title, class: Ce(['item', [L(r)]]) },
                          [
                            W(
                              qP,
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
          : de('', !0);
    },
  });
const jP = he(YP, [['__scopeId', 'data-v-53c55a6e']]),
  ZP = J({
    name: 'VPHomeFeatures',
    setup(e) {
      const { frontmatter: t } = We();
      return (r, i) =>
        L(t).features
          ? ($(),
            we(
              jP,
              { key: 0, class: 'VPHomeFeatures', features: L(t).features },
              null,
              8,
              ['features'],
            ))
          : de('', !0);
    },
  }),
  XP = { class: 'VPHome' },
  JP = J({
    name: 'VPHome',
    setup(e) {
      return (t, r) => {
        const i = fr('Content');
        return (
          $(),
          M('div', XP, [
            G(t.$slots, 'home-hero-before', {}, void 0, !0),
            W(kP, null, {
              'home-hero-image': se(() => [
                G(t.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            G(t.$slots, 'home-hero-after', {}, void 0, !0),
            G(t.$slots, 'home-features-before', {}, void 0, !0),
            W(ZP),
            G(t.$slots, 'home-features-after', {}, void 0, !0),
            W(i),
          ])
        );
      };
    },
  });
const QP = he(JP, [['__scopeId', 'data-v-83039f0a']]);
function eS() {
  const { hasSidebar: e } = On(),
    t = qc('(min-width: 960px)'),
    r = qc('(min-width: 1280px)');
  return {
    isAsideEnabled: ue(() =>
      !r.value && !t.value ? !1 : e.value ? r.value : t.value,
    ),
  };
}
const tS = 71;
function nS(e) {
  if (e === !1) return [];
  let t = [];
  return (
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach((r) => {
      r.textContent &&
        r.id &&
        t.push({
          level: Number(r.tagName[1]),
          title: r.innerText.replace(/\s+#\s*$/, ''),
          link: `#${r.id}`,
        });
    }),
    rS(t, e)
  );
}
function rS(e, t = 2) {
  return sS(e, typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t);
}
function sS(e, t) {
  const r = [];
  return (
    (e = e.map((i) => ({ ...i }))),
    e.forEach((i, o) => {
      i.level >= t[0] && i.level <= t[1] && iS(o, e, t) && r.push(i);
    }),
    r
  );
}
function iS(e, t, r) {
  if (e === 0) return !0;
  const i = t[e];
  for (let o = e - 1; o >= 0; o--) {
    const a = t[o];
    if (a.level < i.level && a.level >= r[0] && a.level <= r[1])
      return a.children == null && (a.children = []), a.children.push(i), !1;
  }
  return !0;
}
function oS(e, t) {
  const { isAsideEnabled: r } = eS(),
    i = d7(a, 100);
  let o = null;
  ct(() => {
    requestAnimationFrame(a), window.addEventListener('scroll', i);
  }),
    ni(() => {
      c(location.hash);
    }),
    ur(() => {
      window.removeEventListener('scroll', i);
    });
  function a() {
    if (!r.value) return;
    const f = [].slice.call(e.value.querySelectorAll('.outline-link')),
      d = [].slice
        .call(document.querySelectorAll('.content .header-anchor'))
        .filter((S) =>
          f.some((R) => R.hash === S.hash && S.offsetParent !== null),
        ),
      p = window.scrollY,
      v = window.innerHeight,
      m = document.body.offsetHeight,
      y = Math.abs(p + v - m) < 1;
    if (d.length && y) {
      c(d[d.length - 1].hash);
      return;
    }
    for (let S = 0; S < d.length; S++) {
      const R = d[S],
        k = d[S + 1],
        [O, x] = lS(S, R, k);
      if (O) {
        c(x);
        return;
      }
    }
  }
  function c(f) {
    o && o.classList.remove('active'),
      f !== null &&
        (o = e.value.querySelector(`a[href="${decodeURIComponent(f)}"]`));
    const d = o;
    d
      ? (d.classList.add('active'),
        (t.value.style.top = d.offsetTop + 33 + 'px'),
        (t.value.style.opacity = '1'))
      : ((t.value.style.top = '33px'), (t.value.style.opacity = '0'));
  }
}
function vp(e) {
  return e.parentElement.offsetTop - tS;
}
function lS(e, t, r) {
  const i = window.scrollY;
  return e === 0 && i === 0
    ? [!0, null]
    : i < vp(t)
      ? [!1, null]
      : !r || i < vp(r)
        ? [!0, t.hash]
        : [!1, null];
}
const aS = ['href'],
  cS = J({
    name: 'VPDocAsideOutlineItem',
    props: { headers: null, onClick: null, root: { type: Boolean } },
    setup(e) {
      return (t, r) => {
        const i = fr('VPDocAsideOutlineItem', !0);
        return (
          $(),
          M(
            'ul',
            { class: Ce(e.root ? 'root' : 'nested') },
            [
              ($(!0),
              M(
                Ee,
                null,
                bt(
                  e.headers,
                  ({ children: o, link: a, title: c }) => (
                    $(),
                    M('li', null, [
                      B(
                        'a',
                        {
                          class: 'outline-link',
                          href: a,
                          onClick:
                            r[0] ||
                            (r[0] = (...f) => e.onClick && e.onClick(...f)),
                        },
                        Me(c),
                        9,
                        aS,
                      ),
                      o != null && o.length
                        ? ($(),
                          we(
                            i,
                            { key: 0, headers: o, onClick: e.onClick },
                            null,
                            8,
                            ['headers', 'onClick'],
                          ))
                        : de('', !0),
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
const uS = he(cS, [['__scopeId', 'data-v-99158aa9']]),
  fS = (e) => (mn('data-v-6e50ce76'), (e = e()), yn(), e),
  dS = { class: 'content' },
  hS = { class: 'outline-title' },
  pS = { 'aria-labelledby': 'doc-outline-aria-label' },
  gS = fS(() =>
    B(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1,
    ),
  ),
  _S = J({
    name: 'VPDocAsideOutline',
    setup(e) {
      const { frontmatter: t, theme: r } = We(),
        i = ue(() => t.value.outline ?? r.value.outline),
        o = yt('onContentUpdated');
      o.value = () => {
        a.value = nS(i.value);
      };
      const a = ce([]),
        c = ue(() => a.value.length > 0),
        f = ce(),
        d = ce();
      oS(f, d);
      function p({ target: v }) {
        const m = '#' + v.href.split('#')[1],
          y = document.querySelector(decodeURIComponent(m));
        y == null || y.focus();
      }
      return (v, m) => (
        $(),
        M(
          'div',
          {
            class: Ce(['VPDocAsideOutline', { 'has-outline': L(c) }]),
            ref_key: 'container',
            ref: f,
          },
          [
            B('div', dS, [
              B(
                'div',
                { class: 'outline-marker', ref_key: 'marker', ref: d },
                null,
                512,
              ),
              B('div', hS, Me(L(r).outlineTitle || 'On this page'), 1),
              B('nav', pS, [
                gS,
                W(uS, { headers: a.value, root: !0, onClick: p }, null, 8, [
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
const vS = he(_S, [['__scopeId', 'data-v-6e50ce76']]),
  mS = { class: 'VPDocAsideCarbonAds' },
  yS = J({
    name: 'VPDocAsideCarbonAds',
    setup(e) {
      const t = () => null;
      return (r, i) => ($(), M('div', mS, [W(L(t))]));
    },
  }),
  bS = (e) => (mn('data-v-c33ddd35'), (e = e()), yn(), e),
  wS = { class: 'VPDocAside' },
  xS = bS(() => B('div', { class: 'spacer' }, null, -1)),
  $S = J({
    name: 'VPDocAside',
    setup(e) {
      const { theme: t } = We();
      return (r, i) => (
        $(),
        M('div', wS, [
          G(r.$slots, 'aside-top', {}, void 0, !0),
          G(r.$slots, 'aside-outline-before', {}, void 0, !0),
          W(vS),
          G(r.$slots, 'aside-outline-after', {}, void 0, !0),
          xS,
          G(r.$slots, 'aside-ads-before', {}, void 0, !0),
          L(t).carbonAds ? ($(), we(yS, { key: 0 })) : de('', !0),
          G(r.$slots, 'aside-ads-after', {}, void 0, !0),
          G(r.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      );
    },
  });
const CS = he($S, [['__scopeId', 'data-v-c33ddd35']]);
function PS() {
  const { theme: e, page: t } = We();
  return ue(() => {
    const { text: r = 'Edit this page', pattern: i } = e.value.editLink || {},
      { relativePath: o } = t.value;
    return { url: i.replace(/:path/g, o), text: r };
  });
}
function SS() {
  const { page: e, theme: t, frontmatter: r } = We();
  return ue(() => {
    const i = j1(t.value.sidebar, e.value.relativePath),
      o = h7(i),
      a = o.findIndex((c) => ii(e.value.relativePath, c.link));
    return {
      prev: r.value.prev ? { ...o[a - 1], text: r.value.prev } : o[a - 1],
      next: r.value.next ? { ...o[a + 1], text: r.value.next } : o[a + 1],
    };
  });
}
const ES = {},
  TS = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  AS = B(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1,
  ),
  kS = B(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1,
  ),
  IS = [AS, kS];
function LS(e, t) {
  return $(), M('svg', TS, IS);
}
const OS = he(ES, [['render', LS]]),
  MS = { class: 'VPLastUpdated' },
  BS = ['datetime'],
  FS = J({
    name: 'VPDocFooterLastUpdated',
    setup(e) {
      const { theme: t, page: r } = We(),
        i = ue(() => new Date(r.value.lastUpdated)),
        o = ue(() => i.value.toISOString()),
        a = ce('');
      return (
        ct(() => {
          Dr(() => {
            a.value = i.value.toLocaleString(window.navigator.language);
          });
        }),
        (c, f) => (
          $(),
          M('p', MS, [
            Et(Me(L(t).lastUpdatedText ?? 'Last updated') + ': ', 1),
            B('time', { datetime: L(o) }, Me(a.value), 9, BS),
          ])
        )
      );
    },
  });
const RS = he(FS, [['__scopeId', 'data-v-de3e9be5']]),
  NS = { key: 0, class: 'VPDocFooter' },
  VS = { key: 0, class: 'edit-info' },
  DS = { key: 0, class: 'edit-link' },
  HS = { key: 1, class: 'last-updated' },
  US = { key: 1, class: 'prev-next' },
  zS = { class: 'pager' },
  qS = ['href'],
  WS = ['innerHTML'],
  KS = ['innerHTML'],
  GS = ['href'],
  YS = ['innerHTML'],
  jS = ['innerHTML'],
  ZS = J({
    name: 'VPDocFooter',
    setup(e) {
      const { theme: t, page: r, frontmatter: i } = We(),
        o = PS(),
        a = SS(),
        c = ue(() => t.value.editLink && i.value.editLink !== !1),
        f = ue(() => r.value.lastUpdated && i.value.lastUpdated !== !1),
        d = ue(() => c.value || f.value || a.value.prev || a.value.next);
      return (p, v) => {
        var m, y;
        return L(d)
          ? ($(),
            M('footer', NS, [
              L(c) || L(f)
                ? ($(),
                  M('div', VS, [
                    L(c)
                      ? ($(),
                        M('div', DS, [
                          W(
                            ms,
                            {
                              class: 'edit-link-button',
                              href: L(o).url,
                              'no-icon': !0,
                            },
                            {
                              default: se(() => [
                                W(OS, { class: 'edit-link-icon' }),
                                Et(' ' + Me(L(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : de('', !0),
                    L(f) ? ($(), M('div', HS, [W(RS)])) : de('', !0),
                  ]))
                : de('', !0),
              L(a).prev || L(a).next
                ? ($(),
                  M('div', US, [
                    B('div', zS, [
                      L(a).prev
                        ? ($(),
                          M(
                            'a',
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: L(yl)(L(a).prev.link),
                            },
                            [
                              B(
                                'span',
                                {
                                  class: 'desc',
                                  innerHTML:
                                    ((m = L(t).docFooter) == null
                                      ? void 0
                                      : m.prev) ?? 'Previous page',
                                },
                                null,
                                8,
                                WS,
                              ),
                              B(
                                'span',
                                { class: 'title', innerHTML: L(a).prev.text },
                                null,
                                8,
                                KS,
                              ),
                            ],
                            8,
                            qS,
                          ))
                        : de('', !0),
                    ]),
                    B(
                      'div',
                      { class: Ce(['pager', { 'has-prev': L(a).prev }]) },
                      [
                        L(a).next
                          ? ($(),
                            M(
                              'a',
                              {
                                key: 0,
                                class: 'pager-link next',
                                href: L(yl)(L(a).next.link),
                              },
                              [
                                B(
                                  'span',
                                  {
                                    class: 'desc',
                                    innerHTML:
                                      ((y = L(t).docFooter) == null
                                        ? void 0
                                        : y.next) ?? 'Next page',
                                  },
                                  null,
                                  8,
                                  YS,
                                ),
                                B(
                                  'span',
                                  { class: 'title', innerHTML: L(a).next.text },
                                  null,
                                  8,
                                  jS,
                                ),
                              ],
                              8,
                              GS,
                            ))
                          : de('', !0),
                      ],
                      2,
                    ),
                  ]))
                : de('', !0),
            ]))
          : de('', !0);
      };
    },
  });
const XS = he(ZS, [['__scopeId', 'data-v-bfc312bf']]),
  JS = (e) => (mn('data-v-582c1173'), (e = e()), yn(), e),
  QS = { class: 'container' },
  eE = { key: 0, class: 'aside' },
  tE = JS(() => B('div', { class: 'aside-curtain' }, null, -1)),
  nE = { class: 'aside-container' },
  rE = { class: 'aside-content' },
  sE = { class: 'content' },
  iE = { class: 'content-container' },
  oE = { class: 'main' },
  lE = J({
    name: 'VPDoc',
    setup(e) {
      const t = dr(),
        { hasSidebar: r, hasAside: i } = On(),
        o = ue(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, '')),
        a = ce();
      return (
        qn('onContentUpdated', a),
        (c, f) => {
          const d = fr('Content');
          return (
            $(),
            M(
              'div',
              {
                class: Ce([
                  'VPDoc',
                  { 'has-sidebar': L(r), 'has-aside': L(i) },
                ]),
              },
              [
                B('div', QS, [
                  L(i)
                    ? ($(),
                      M('div', eE, [
                        tE,
                        B('div', nE, [
                          B('div', rE, [
                            W(CS, null, {
                              'aside-top': se(() => [
                                G(c.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': se(() => [
                                G(c.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': se(() => [
                                G(
                                  c.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-outline-after': se(() => [
                                G(
                                  c.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-ads-before': se(() => [
                                G(c.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': se(() => [
                                G(c.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ]))
                    : de('', !0),
                  B('div', sE, [
                    B('div', iE, [
                      G(c.$slots, 'doc-before', {}, void 0, !0),
                      B('main', oE, [
                        W(
                          d,
                          {
                            class: Ce(['vp-doc', L(o)]),
                            onContentUpdated: a.value,
                          },
                          null,
                          8,
                          ['class', 'onContentUpdated'],
                        ),
                      ]),
                      G(c.$slots, 'doc-footer-before', {}, void 0, !0),
                      W(XS),
                      G(c.$slots, 'doc-after', {}, void 0, !0),
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
const aE = he(lE, [['__scopeId', 'data-v-582c1173']]),
  cE = J({
    name: 'VPContent',
    setup(e) {
      const t = dr(),
        { frontmatter: r } = We(),
        { hasSidebar: i } = On(),
        o = yt('NotFound');
      return (a, c) => (
        $(),
        M(
          'div',
          {
            class: Ce([
              'VPContent',
              { 'has-sidebar': L(i), 'is-home': L(r).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            L(t).component === L(o)
              ? ($(), we(L(o), { key: 0 }))
              : L(r).layout === 'page'
                ? ($(), we(pP, { key: 1 }))
                : L(r).layout === 'home'
                  ? ($(),
                    we(
                      QP,
                      { key: 2 },
                      {
                        'home-hero-before': se(() => [
                          G(a.$slots, 'home-hero-before', {}, void 0, !0),
                        ]),
                        'home-hero-image': se(() => [
                          G(a.$slots, 'home-hero-image', {}, void 0, !0),
                        ]),
                        'home-hero-after': se(() => [
                          G(a.$slots, 'home-hero-after', {}, void 0, !0),
                        ]),
                        'home-features-before': se(() => [
                          G(a.$slots, 'home-features-before', {}, void 0, !0),
                        ]),
                        'home-features-after': se(() => [
                          G(a.$slots, 'home-features-after', {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    ))
                  : ($(),
                    we(
                      aE,
                      { key: 3 },
                      {
                        'doc-footer-before': se(() => [
                          G(a.$slots, 'doc-footer-before', {}, void 0, !0),
                        ]),
                        'doc-before': se(() => [
                          G(a.$slots, 'doc-before', {}, void 0, !0),
                        ]),
                        'doc-after': se(() => [
                          G(a.$slots, 'doc-after', {}, void 0, !0),
                        ]),
                        'aside-top': se(() => [
                          G(a.$slots, 'aside-top', {}, void 0, !0),
                        ]),
                        'aside-outline-before': se(() => [
                          G(a.$slots, 'aside-outline-before', {}, void 0, !0),
                        ]),
                        'aside-outline-after': se(() => [
                          G(a.$slots, 'aside-outline-after', {}, void 0, !0),
                        ]),
                        'aside-ads-before': se(() => [
                          G(a.$slots, 'aside-ads-before', {}, void 0, !0),
                        ]),
                        'aside-ads-after': se(() => [
                          G(a.$slots, 'aside-ads-after', {}, void 0, !0),
                        ]),
                        'aside-bottom': se(() => [
                          G(a.$slots, 'aside-bottom', {}, void 0, !0),
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
const uE = he(cE, [['__scopeId', 'data-v-1f22d228']]),
  fE = { class: 'container' },
  dE = ['innerHTML'],
  hE = ['innerHTML'],
  pE = J({
    name: 'VPFooter',
    setup(e) {
      const { theme: t } = We(),
        { hasSidebar: r } = On();
      return (i, o) =>
        L(t).footer
          ? ($(),
            M(
              'footer',
              { key: 0, class: Ce(['VPFooter', { 'has-sidebar': L(r) }]) },
              [
                B('div', fE, [
                  L(t).footer.message
                    ? ($(),
                      M(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: L(t).footer.message,
                        },
                        null,
                        8,
                        dE,
                      ))
                    : de('', !0),
                  L(t).footer.copyright
                    ? ($(),
                      M(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: L(t).footer.copyright,
                        },
                        null,
                        8,
                        hE,
                      ))
                    : de('', !0),
                ]),
              ],
              2,
            ))
          : de('', !0);
    },
  });
const gE = he(pE, [['__scopeId', 'data-v-c51bd057']]),
  _E = { key: 0, class: 'Layout' },
  vE = J({
    name: 'Layout',
    setup(e) {
      const { isOpen: t, open: r, close: i } = On(),
        o = dr();
      Pt(() => o.path, i),
        p7(t, i),
        qn('close-sidebar', i),
        qn('is-sidebar-open', t);
      const { frontmatter: a } = We(),
        c = mu(),
        f = ue(() => !!c['home-hero-image']);
      return (
        qn('hero-image-slot-exists', f),
        (d, p) => {
          const v = fr('Content');
          return L(a).layout !== !1
            ? ($(),
              M('div', _E, [
                G(d.$slots, 'layout-top', {}, void 0, !0),
                W(_7),
                W(
                  y7,
                  { class: 'backdrop', show: L(t), onClick: L(i) },
                  null,
                  8,
                  ['show', 'onClick'],
                ),
                W(wC, null, {
                  'nav-bar-title-before': se(() => [
                    G(d.$slots, 'nav-bar-title-before', {}, void 0, !0),
                  ]),
                  'nav-bar-title-after': se(() => [
                    G(d.$slots, 'nav-bar-title-after', {}, void 0, !0),
                  ]),
                  'nav-bar-content-before': se(() => [
                    G(d.$slots, 'nav-bar-content-before', {}, void 0, !0),
                  ]),
                  'nav-bar-content-after': se(() => [
                    G(d.$slots, 'nav-bar-content-after', {}, void 0, !0),
                  ]),
                  'nav-screen-content-before': se(() => [
                    G(d.$slots, 'nav-screen-content-before', {}, void 0, !0),
                  ]),
                  'nav-screen-content-after': se(() => [
                    G(d.$slots, 'nav-screen-content-after', {}, void 0, !0),
                  ]),
                  _: 3,
                }),
                W(FC, { open: L(t), onOpenMenu: L(r) }, null, 8, [
                  'open',
                  'onOpenMenu',
                ]),
                W(
                  uP,
                  { open: L(t) },
                  {
                    'sidebar-nav-before': se(() => [
                      G(d.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    ]),
                    'sidebar-nav-after': se(() => [
                      G(d.$slots, 'sidebar-nav-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open'],
                ),
                W(uE, null, {
                  'home-hero-before': se(() => [
                    G(d.$slots, 'home-hero-before', {}, void 0, !0),
                  ]),
                  'home-hero-image': se(() => [
                    G(d.$slots, 'home-hero-image', {}, void 0, !0),
                  ]),
                  'home-hero-after': se(() => [
                    G(d.$slots, 'home-hero-after', {}, void 0, !0),
                  ]),
                  'home-features-before': se(() => [
                    G(d.$slots, 'home-features-before', {}, void 0, !0),
                  ]),
                  'home-features-after': se(() => [
                    G(d.$slots, 'home-features-after', {}, void 0, !0),
                  ]),
                  'doc-footer-before': se(() => [
                    G(d.$slots, 'doc-footer-before', {}, void 0, !0),
                  ]),
                  'doc-before': se(() => [
                    G(d.$slots, 'doc-before', {}, void 0, !0),
                  ]),
                  'doc-after': se(() => [
                    G(d.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                  'aside-top': se(() => [
                    G(d.$slots, 'aside-top', {}, void 0, !0),
                  ]),
                  'aside-bottom': se(() => [
                    G(d.$slots, 'aside-bottom', {}, void 0, !0),
                  ]),
                  'aside-outline-before': se(() => [
                    G(d.$slots, 'aside-outline-before', {}, void 0, !0),
                  ]),
                  'aside-outline-after': se(() => [
                    G(d.$slots, 'aside-outline-after', {}, void 0, !0),
                  ]),
                  'aside-ads-before': se(() => [
                    G(d.$slots, 'aside-ads-before', {}, void 0, !0),
                  ]),
                  'aside-ads-after': se(() => [
                    G(d.$slots, 'aside-ads-after', {}, void 0, !0),
                  ]),
                  _: 3,
                }),
                W(gE),
                G(d.$slots, 'layout-bottom', {}, void 0, !0),
              ]))
            : ($(), we(v, { key: 1 }));
        }
      );
    },
  });
const mE = he(vE, [['__scopeId', 'data-v-5a1a9d88']]),
  ql = (e) => (mn('data-v-1cc66c88'), (e = e()), yn(), e),
  yE = { class: 'NotFound' },
  bE = ql(() => B('p', { class: 'code' }, '404', -1)),
  wE = ql(() => B('h1', { class: 'title' }, 'PAGE NOT FOUND', -1)),
  xE = ql(() => B('div', { class: 'divider' }, null, -1)),
  $E = ql(() =>
    B(
      'blockquote',
      { class: 'quote' },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1,
    ),
  ),
  CE = { class: 'action' },
  PE = ['href'],
  SE = J({
    name: 'NotFound',
    setup(e) {
      const { site: t } = We();
      return (r, i) => (
        $(),
        M('div', yE, [
          bE,
          wE,
          xE,
          $E,
          B('div', CE, [
            B(
              'a',
              { class: 'link', href: L(t).base, 'aria-label': 'go to home' },
              ' Take me home ',
              8,
              PE,
            ),
          ]),
        ])
      );
    },
  });
const EE = he(SE, [['__scopeId', 'data-v-1cc66c88']]);
const mp = {
  Layout: mE,
  NotFound: EE,
  enhanceApp: ({ app: e }) => {
    e.component('Badge', Ox);
  },
};
var yp;
const Wl = typeof window < 'u',
  TE = (e) => typeof e == 'string',
  Wc = () => {};
Wl &&
  (yp = window == null ? void 0 : window.navigator) != null &&
  yp.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Kl(e) {
  return typeof e == 'function' ? e() : L(e);
}
function AE(e, t) {
  function r(...i) {
    return new Promise((o, a) => {
      Promise.resolve(
        e(() => t.apply(this, i), { fn: t, thisArg: this, args: i }),
      )
        .then(o)
        .catch(a);
    });
  }
  return r;
}
function kE(e, t = !0, r = !0, i = !1) {
  let o = 0,
    a,
    c = !0,
    f = Wc,
    d;
  const p = () => {
    a && (clearTimeout(a), (a = void 0), f(), (f = Wc));
  };
  return (m) => {
    const y = Kl(e),
      S = Date.now() - o,
      R = () => (d = m());
    if ((p(), y <= 0)) return (o = Date.now()), R();
    if (S > y && (r || !c)) (o = Date.now()), R();
    else if (t)
      return new Promise((k, O) => {
        (f = i ? O : k),
          (a = setTimeout(() => {
            (o = Date.now()), (c = !0), k(R()), p();
          }, y - S));
      });
    return !r && !a && (a = setTimeout(() => (c = !0), y)), (c = !1), d;
  };
}
function IE(e) {
  return e;
}
function sg(e) {
  return Sl() ? (El(e), !0) : !1;
}
function LE(e, t = 200, r = !1, i = !0, o = !1) {
  return AE(kE(t, r, i, o), e);
}
function OE(e, t = !0) {
  bn() ? ct(e) : t ? e() : Ln(e);
}
function ME(e, t, r = {}) {
  const { immediate: i = !0 } = r,
    o = ce(!1);
  let a = null;
  function c() {
    a && (clearTimeout(a), (a = null));
  }
  function f() {
    (o.value = !1), c();
  }
  function d(...p) {
    c(),
      (o.value = !0),
      (a = setTimeout(() => {
        (o.value = !1), (a = null), e(...p);
      }, Kl(t)));
  }
  return (
    i && ((o.value = !0), Wl && d()),
    sg(f),
    { isPending: ti(o), start: d, stop: f }
  );
}
function BE(e) {
  var t;
  const r = Kl(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const FE = Wl ? window : void 0,
  RE = Wl ? window.navigator : void 0;
function NE(...e) {
  let t, r, i, o;
  if (
    (TE(e[0]) || Array.isArray(e[0])
      ? (([r, i, o] = e), (t = FE))
      : ([t, r, i, o] = e),
    !t)
  )
    return Wc;
  Array.isArray(r) || (r = [r]), Array.isArray(i) || (i = [i]);
  const a = [],
    c = () => {
      a.forEach((v) => v()), (a.length = 0);
    },
    f = (v, m, y) => (
      v.addEventListener(m, y, o), () => v.removeEventListener(m, y, o)
    ),
    d = Pt(
      () => BE(t),
      (v) => {
        c(), v && a.push(...r.flatMap((m) => i.map((y) => f(v, m, y))));
      },
      { immediate: !0, flush: 'post' },
    ),
    p = () => {
      d(), c();
    };
  return sg(p), p;
}
function VE(e, t = !1) {
  const r = ce(),
    i = () => (r.value = !!e());
  return i(), OE(i, t), r;
}
function DE(e = {}) {
  const {
      navigator: t = RE,
      read: r = !1,
      source: i,
      copiedDuring: o = 1500,
      legacy: a = !1,
    } = e,
    c = ['copy', 'cut'],
    f = VE(() => t && 'clipboard' in t),
    d = ue(() => f.value || a),
    p = ce(''),
    v = ce(!1),
    m = ME(() => (v.value = !1), o);
  function y() {
    f.value
      ? t.clipboard.readText().then((O) => {
          p.value = O;
        })
      : (p.value = k());
  }
  if (d.value && r) for (const O of c) NE(O, y);
  async function S(O = Kl(i)) {
    d.value &&
      O != null &&
      (f.value ? await t.clipboard.writeText(O) : R(O),
      (p.value = O),
      (v.value = !0),
      m.start());
  }
  function R(O) {
    const x = document.createElement('textarea');
    (x.value = O ?? ''),
      (x.style.position = 'absolute'),
      (x.style.opacity = '0'),
      document.body.appendChild(x),
      x.select(),
      document.execCommand('copy'),
      x.remove();
  }
  function k() {
    var O, x, P;
    return (P =
      (x =
        (O = document == null ? void 0 : document.getSelection) == null
          ? void 0
          : O.call(document)) == null
        ? void 0
        : x.toString()) != null
      ? P
      : '';
  }
  return { isSupported: d, text: p, copied: v, copy: S };
}
const bp =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  wp = '__vueuse_ssr_handlers__';
bp[wp] = bp[wp] || {};
var xp;
(function (e) {
  (e.UP = 'UP'),
    (e.RIGHT = 'RIGHT'),
    (e.DOWN = 'DOWN'),
    (e.LEFT = 'LEFT'),
    (e.NONE = 'NONE');
})(xp || (xp = {}));
var HE = Object.defineProperty,
  $p = Object.getOwnPropertySymbols,
  UE = Object.prototype.hasOwnProperty,
  zE = Object.prototype.propertyIsEnumerable,
  Cp = (e, t, r) =>
    t in e
      ? HE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  qE = (e, t) => {
    for (var r in t || (t = {})) UE.call(t, r) && Cp(e, r, t[r]);
    if ($p) for (var r of $p(t)) zE.call(t, r) && Cp(e, r, t[r]);
    return e;
  };
const WE = {
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
qE({ linear: IE }, WE);
let KE = 0;
function GE() {
  return 'message_' + KE++;
}
const YE = J({
    setup() {
      const e = ce([]);
      function t(i) {
        const o = GE(),
          a = { name: o, ...i };
        e.value.push(a);
        const c = i.duration;
        setTimeout(() => {
          r(o);
        }, c * 1e3);
      }
      function r(i) {
        for (const [o, a] of e.value.entries())
          if (a.name === i) {
            e.value.splice(o, 1);
            break;
          }
      }
      return { messages: e, add: t, remove: r };
    },
  }),
  jE = { class: 'demoblock-message-content' };
function ZE(e, t, r, i, o, a) {
  return (
    $(),
    we(
      X0,
      { name: 'demoblock-fade', tag: 'div', class: 'demoblock-message-wrap' },
      {
        default: se(() => [
          ($(!0),
          M(
            Ee,
            null,
            bt(
              e.messages,
              (c) => (
                $(),
                M(
                  'div',
                  {
                    key: c.name,
                    class: Ce([
                      'demoblock-message',
                      c.type ? `demoblock-message-${c.type}` : '',
                    ]),
                  },
                  [B('div', jE, Me(c.content), 1)],
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
const Kc = he(YE, [
  ['render', ZE],
  ['__scopeId', 'data-v-48d023d6'],
]);
Kc.newInstance = (e = {}) => {
  const t = document.createElement('div'),
    o = o1({
      render() {
        return In(Kc, { ...e, ref: 'messageRef' });
      },
    }).mount(t).$refs.messageRef;
  return (
    document.body.appendChild(t.firstElementChild),
    {
      add(a) {
        o.add(a);
      },
      remove(a) {
        o.remove(a);
      },
    }
  );
};
let _c;
function XE() {
  return (_c = _c || Kc.newInstance()), _c;
}
function Pp(e, { duration: t = 3, type: r = '' }) {
  XE().add({ content: e, duration: t, type: r });
}
const Sp = {
  info(e, t) {
    return Pp(e, { ...t });
  },
  error(e, t) {
    return Pp(e, { ...t, type: 'error' });
  },
};
const JE = {
    name: 'Demo',
    props: { customClass: String, sourceCode: String },
    setup(e) {
      const { copy: t } = DE(),
        r = We(),
        i = dr(),
        o = ce(!1),
        a = ce(!1),
        c = ce(!1),
        f = ce(null),
        d = ce(null),
        p = ce(null),
        v = ce(null),
        m = ce(null);
      Pt(c, (D) => {
        if (((p.value.style.height = D ? `${Y.value + 1}px` : '0'), !D)) {
          (a.value = !1),
            (v.value.style.left = '0'),
            (v.value.style.width = 'auto'),
            R();
          return;
        }
        setTimeout(() => {
          window.addEventListener('scroll', S),
            window.addEventListener('resize', S),
            y();
        }, 300);
      }),
        ct(() => {
          Ln(() => {
            d.value || (f.value.style.width = '100%');
          });
        }),
        ri(() => {
          R();
        });
      const y = () => {
          const {
              top: D,
              bottom: ie,
              left: le,
            } = p.value.getBoundingClientRect(),
            pe = window.innerHeight || document.body.clientHeight;
          (a.value = ie > pe && D + 44 <= pe),
            (v.value.style.left = a.value ? `${le}px` : '0');
          const re = a.value ? 1 : 2;
          v.value.style.width = `${m.value.offsetWidth - re}px`;
        },
        S = LE(y, 200),
        R = () => {
          window.removeEventListener('scroll', S),
            window.removeEventListener('resize', S);
        };
      Pt(
        () => i.path,
        (D) => {
          k.value = D.split('/');
        },
      );
      const k = ce(i.path.split('/')),
        O = ue(() => k.value[k.value.length - 1].split('.')[0]),
        x = ue(() => `demo-${O.value}`);
      lr({});
      const P = () => {},
        I = () => {
          (c.value = !c.value), (o.value = c.value);
        },
        F = ue(() => {
          var D;
          return (
            ((D = r.theme.value.demoblock) == null
              ? void 0
              : D[r.localePath.value]) ?? {
              'hide-text': '隐藏代码',
              'show-text': '显示代码',
              'copy-button-text': '复制代码片段',
              'copy-success-text': '复制成功',
            }
          );
        }),
        V = ue(() => (c.value ? F.value['hide-text'] : F.value['show-text'])),
        Y = ue(() =>
          d.value
            ? d.value.clientHeight + f.value.clientHeight + 20
            : f.value.clientHeight,
        );
      return {
        blockClass: x,
        hover: o,
        fixedControl: a,
        isExpanded: c,
        locale: F,
        controlText: V,
        onClickControl: I,
        highlight: f,
        description: d,
        meta: p,
        control: v,
        onCopy: async () => {
          try {
            t(e.sourceCode), Sp.info(F.value['copy-success-text']);
          } catch {
            Sp.error(F.value['copy-success-text']);
          }
        },
        goCodepen: P,
        demoBlock: m,
      };
    },
  },
  QE = { class: 'source' },
  eT = { ref: 'meta', class: 'meta' },
  tT = { key: 0, ref: 'description', class: 'description' },
  nT = { ref: 'highlight', class: 'highlight' },
  rT = { class: 'control-button-wrap' };
function sT(e, t, r, i, o, a) {
  return (
    $(),
    M(
      'div',
      {
        ref: 'demoBlock',
        class: Ce([
          'demo-block',
          i.blockClass,
          r.customClass ? r.customClass : '',
          { hover: i.hover },
        ]),
        onMouseenter: t[2] || (t[2] = (c) => (i.hover = !0)),
        onMouseleave: t[3] || (t[3] = (c) => (i.hover = !1)),
      },
      [
        B('div', QE, [G(e.$slots, 'default', {}, void 0, !0)]),
        B(
          'div',
          eT,
          [
            e.$slots.description
              ? ($(),
                M('div', tT, [G(e.$slots, 'description', {}, void 0, !0)], 512))
              : de('', !0),
            B('div', nT, [G(e.$slots, 'highlight', {}, void 0, !0)], 512),
          ],
          512,
        ),
        B(
          'div',
          {
            ref: 'control',
            class: Ce([
              'demo-block-control',
              { 'is-fixed': i.fixedControl, 'is-expanded': i.isExpanded },
            ]),
            onClick:
              t[1] ||
              (t[1] = (...c) => i.onClickControl && i.onClickControl(...c)),
          },
          [
            W(
              An,
              { name: 'arrow-slide' },
              {
                default: se(() => [
                  B(
                    'i',
                    {
                      class: Ce([
                        'control-icon',
                        {
                          'icon-caret-down': !i.isExpanded,
                          'icon-caret-up': i.isExpanded,
                          hovering: i.hover,
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
            W(
              An,
              { name: 'text-slide' },
              {
                default: se(() => [
                  Zs(
                    B(
                      'span',
                      { class: 'control-text' },
                      Me(i.controlText),
                      513,
                    ),
                    [[hs, i.hover]],
                  ),
                ]),
                _: 1,
              },
            ),
            B('div', rT, [
              W(
                An,
                { name: 'text-slide' },
                {
                  default: se(() => [
                    Zs(
                      B(
                        'span',
                        {
                          class: 'control-button copy-button',
                          onClick:
                            t[0] ||
                            (t[0] = qi(
                              (...c) => i.onCopy && i.onCopy(...c),
                              ['stop'],
                            )),
                        },
                        Me(i.locale && i.locale['copy-button-text']),
                        513,
                      ),
                      [[hs, i.isExpanded]],
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
const iT = he(JE, [
  ['render', sT],
  ['__scopeId', 'data-v-547bcba9'],
]);
const oT = J({ name: 'DemoBlock', props: { customClass: String } }),
  lT = { class: 'source' };
function aT(e, t, r, i, o, a) {
  return (
    $(),
    M(
      'div',
      { class: Ce(['demo-block', [e.customClass ? e.customClass : '']]) },
      [B('div', lT, [G(e.$slots, 'default', {}, void 0, !0)])],
      2,
    )
  );
}
const cT = he(oT, [
  ['render', aT],
  ['__scopeId', 'data-v-f8eaa088'],
]);
function uT(e) {
  e.component('Demo', iT), e.component('DemoBlock', cT);
}
const Ks = {
  ...mp,
  enhanceApp(e) {
    mp.enhanceApp(e), uT(e.app), e.app.use(H1);
  },
};
function fT(e, t) {
  let r = [],
    i = !0;
  const o = (a) => {
    if (i) {
      i = !1;
      return;
    }
    r.forEach((c) => document.head.removeChild(c)),
      (r = []),
      a.forEach((c) => {
        const f = dT(c);
        document.head.appendChild(f), r.push(f);
      });
  };
  Dr(() => {
    const a = e.data,
      c = t.value,
      f = a && a.description,
      d = (a && a.frontmatter.head) || [];
    (document.title = z1(c, a)),
      document
        .querySelector('meta[name=description]')
        .setAttribute('content', f || c.description),
      o(Ux(c.head, pT(d)));
  });
}
function dT([e, t, r]) {
  const i = document.createElement(e);
  for (const o in t) i.setAttribute(o, t[o]);
  return r && (i.innerHTML = r), i;
}
function hT(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description';
}
function pT(e) {
  return e.filter((t) => !hT(t));
}
const vc = new Set(),
  ig = () => document.createElement('link'),
  gT = (e) => {
    const t = ig();
    (t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t);
  },
  _T = (e) => {
    const t = new XMLHttpRequest();
    t.open('GET', e, (t.withCredentials = !0)), t.send();
  };
let sl;
const vT =
  Nt &&
  (sl = ig()) &&
  sl.relList &&
  sl.relList.supports &&
  sl.relList.supports('prefetch')
    ? gT
    : _T;
function mT() {
  if (!Nt || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let r = null;
  const i = () => {
    r && r.disconnect(),
      (r = new IntersectionObserver((a) => {
        a.forEach((c) => {
          if (c.isIntersecting) {
            const f = c.target;
            r.unobserve(f);
            const { pathname: d } = f;
            if (!vc.has(d)) {
              vc.add(d);
              const p = q1(d);
              vT(p);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((a) => {
          const { target: c, hostname: f, pathname: d } = a,
            p = d.match(/\.\w+$/);
          (p && p[0] !== '.html') ||
            (c !== '_blank' &&
              f === location.hostname &&
              (d !== location.pathname ? r.observe(a) : vc.add(d)));
        });
      });
  };
  ct(i);
  const o = dr();
  Pt(() => o.path, i),
    ur(() => {
      r && r.disconnect();
    });
}
const yT = J({
  setup(e, { slots: t }) {
    const r = ce(!1);
    return (
      ct(() => {
        r.value = !0;
      }),
      () => (r.value && t.default ? t.default() : null)
    );
  },
});
function bT() {
  if (Nt) {
    const e = new Map();
    window.addEventListener('click', (t) => {
      var i;
      const r = t.target;
      if (r.matches('div[class*="language-"] > button.copy')) {
        const o = r.parentElement,
          a =
            (i = r.nextElementSibling) == null ? void 0 : i.nextElementSibling;
        if (!o || !a) return;
        const c = /language-(shellscript|shell|bash|sh|zsh)/.test(o.className);
        let f = '';
        a.querySelectorAll('span.line:not(.diff.remove)').forEach(
          (d) =>
            (f +=
              (d.textContent || '') +
              `
`),
        ),
          (f = f.slice(0, -1)),
          c && (f = f.replace(/^ *(\$|>) /gm, '').trim()),
          wT(f).then(() => {
            r.classList.add('copied'), clearTimeout(e.get(r));
            const d = setTimeout(() => {
              r.classList.remove('copied'), r.blur(), e.delete(r);
            }, 2e3);
            e.set(r, d);
          });
      }
    });
  }
}
async function wT(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement('textarea'),
      r = document.activeElement;
    (t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt');
    const i = document.getSelection(),
      o = i ? i.rangeCount > 0 && i.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      o && (i.removeAllRanges(), i.addRange(o)),
      r && r.focus();
  }
}
function xT() {
  Nt &&
    window.addEventListener('click', (e) => {
      var r, i;
      const t = e.target;
      if (t.matches('.vp-code-group input')) {
        const o = (r = t.parentElement) == null ? void 0 : r.parentElement,
          a = Array.from(
            (o == null ? void 0 : o.querySelectorAll('input')) || [],
          ).indexOf(t),
          c =
            o == null
              ? void 0
              : o.querySelector('div[class*="language-"].active'),
          f =
            (i =
              o == null
                ? void 0
                : o.querySelectorAll('div[class*="language-"]')) == null
              ? void 0
              : i[a];
        c &&
          f &&
          c !== f &&
          (c.classList.remove('active'), f.classList.add('active'));
      }
    });
}
const og = Ks.NotFound || (() => '404 Not Found'),
  $T = J({
    name: 'VitePressApp',
    setup() {
      const { site: e } = We();
      return (
        ct(() => {
          Pt(
            () => e.value.lang,
            (t) => {
              document.documentElement.lang = t;
            },
            { immediate: !0 },
          );
        }),
        mT(),
        bT(),
        xT(),
        Ks.setup && Ks.setup(),
        () => In(Ks.Layout)
      );
    },
  });
async function CT() {
  const e = ST(),
    t = PT();
  t.provide(K1, e);
  const r = Kx(e.route);
  return (
    t.provide(W1, r),
    t.provide('NotFound', og),
    t.component('Content', Zx),
    t.component('ClientOnly', yT),
    Object.defineProperty(t.config.globalProperties, '$frontmatter', {
      get() {
        return r.frontmatter.value;
      },
    }),
    Ks.enhanceApp && (await Ks.enhanceApp({ app: t, router: e, siteData: ei })),
    { app: t, router: e, data: r }
  );
}
function PT() {
  return l1($T);
}
function ST() {
  let e = Nt,
    t;
  return Yx((r) => {
    let i = q1(r);
    return (
      e && (t = i),
      (e || t === i) && (i = i.replace(/\.js$/, '.lean.js')),
      Nt && (e = !1),
      Ix(() => import(i), [])
    );
  }, og);
}
Nt &&
  CT().then(({ app: e, router: t, data: r }) => {
    t.go().then(() => {
      fT(t.route, r.site), e.mount('#app');
    });
  });
export {
  ET as V,
  he as _,
  W as a,
  B as b,
  M as c,
  CT as createApp,
  Et as d,
  I0 as e,
  TT as f,
  $ as o,
  fr as r,
  se as w,
};
