var Ri = {};
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const G = Ri.NODE_ENV !== "production" ? Object.freeze({}) : {}, xt = Ri.NODE_ENV !== "production" ? Object.freeze([]) : [], se = () => {
}, Fi = () => !1, Qt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nn = (e) => e.startsWith("onUpdate:"), X = Object.assign, vo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, or = Object.prototype.hasOwnProperty, k = (e, t) => or.call(e, t), A = Array.isArray, gt = (e) => In(e) === "[object Map]", ji = (e) => In(e) === "[object Set]", R = (e) => typeof e == "function", Z = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Oo = (e) => (q(e) || R(e)) && R(e.then) && R(e.catch), Li = Object.prototype.toString, In = (e) => Li.call(e), wo = (e) => In(e).slice(8, -1), Mn = (e) => In(e) === "[object Object]", xo = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kt = /* @__PURE__ */ Ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ir = /* @__PURE__ */ Ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, sr = /-\w/g, Ee = Rn(
  (e) => e.replace(sr, (t) => t.slice(1).toUpperCase())
), rr = /\B([A-Z])/g, Ne = Rn(
  (e) => e.replace(rr, "-$1").toLowerCase()
), Fn = Rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), dt = Rn(
  (e) => e ? `on${Fn(e)}` : ""
), rt = (e, t) => !Object.is(e, t), It = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, vn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, lr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zo = (e) => {
  const t = Z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Yo;
const en = () => Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ht(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = Z(o) ? ar(o) : ht(o);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Z(e) || q(e))
    return e;
}
const cr = /;(?![^(]*\))/g, fr = /:([^]+)/, ur = /\/\*[^]*?\*\//g;
function ar(e) {
  const t = {};
  return e.replace(ur, "").split(cr).forEach((n) => {
    if (n) {
      const o = n.split(fr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function qt(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const o = qt(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const dr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", pr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", hr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", gr = /* @__PURE__ */ Ze(dr), _r = /* @__PURE__ */ Ze(pr), mr = /* @__PURE__ */ Ze(hr), br = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Er = /* @__PURE__ */ Ze(br);
function Hi(e) {
  return !!e || e === "";
}
const ki = (e) => !!(e && e.__v_isRef === !0), Ui = (e) => Z(e) ? e : e == null ? "" : A(e) || q(e) && (e.toString === Li || !R(e.toString)) ? ki(e) ? Ui(e.value) : JSON.stringify(e, Bi, 2) : String(e), Bi = (e, t) => ki(t) ? Bi(e, t.value) : gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], s) => (n[Jn(o, s) + " =>"] = i, n),
    {}
  )
} : ji(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jn(n))
} : ft(t) ? Jn(t) : q(t) && !A(t) && !Mn(t) ? String(t) : t, Jn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var J = {};
function Pe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let be;
class yr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = be, !t && be && (this.index = (be.scopes || (be.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = be;
      try {
        return be = this, t();
      } finally {
        be = n;
      }
    } else J.NODE_ENV !== "production" && Pe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = be, be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (be = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Nr() {
  return be;
}
let K;
const zn = /* @__PURE__ */ new WeakSet();
class Ki {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, be && be.active && be.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, zn.has(this) && (zn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Xo(this), qi(this);
    const t = K, n = Ce;
    K = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      J.NODE_ENV !== "production" && K !== this && Pe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ji(this), K = t, Ce = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        So(t);
      this.deps = this.depsTail = void 0, Xo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ro(this) && this.run();
  }
  get dirty() {
    return ro(this);
  }
}
let Wi = 0, Ut, Bt;
function Gi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bt, Bt = e;
    return;
  }
  e.next = Ut, Ut = e;
}
function Do() {
  Wi++;
}
function Vo() {
  if (--Wi > 0)
    return;
  if (Bt) {
    let t = Bt;
    for (Bt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ut; ) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function qi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ji(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), So(o), vr(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function ro(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jt) || (e.globalVersion = Jt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ro(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = K, o = Ce;
  K = e, Ce = !0;
  try {
    qi(e);
    const i = e.fn(e._value);
    (t.version === 0 || rt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    K = n, Ce = o, Ji(e), e.flags &= -3;
  }
}
function So(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), J.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      So(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function vr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const Yi = [];
function $e() {
  Yi.push(Ce), Ce = !1;
}
function Ae() {
  const e = Yi.pop();
  Ce = e === void 0 ? !0 : e;
}
function Xo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = K;
    K = void 0;
    try {
      t();
    } finally {
      K = n;
    }
  }
}
let Jt = 0;
class Or {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Co {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, J.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!K || !Ce || K === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== K)
      n = this.activeLink = new Or(K, this), K.deps ? (n.prevDep = K.depsTail, K.depsTail.nextDep = n, K.depsTail = n) : K.deps = K.depsTail = n, Xi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = K.depsTail, n.nextDep = void 0, K.depsTail.nextDep = n, K.depsTail = n, K.deps === n && (K.deps = o);
    }
    return J.NODE_ENV !== "production" && K.onTrack && K.onTrack(
      X(
        {
          effect: K
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Jt++, this.notify(t);
  }
  notify(t) {
    Do();
    try {
      if (J.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            X(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Vo();
    }
  }
}
function Xi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Xi(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), J.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const lo = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ Symbol(
  J.NODE_ENV !== "production" ? "Object iterate" : ""
), co = /* @__PURE__ */ Symbol(
  J.NODE_ENV !== "production" ? "Map keys iterate" : ""
), zt = /* @__PURE__ */ Symbol(
  J.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ie(e, t, n) {
  if (Ce && K) {
    let o = lo.get(e);
    o || lo.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Co()), i.map = o, i.key = n), J.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Ke(e, t, n, o, i, s) {
  const r = lo.get(e);
  if (!r) {
    Jt++;
    return;
  }
  const l = (f) => {
    f && (J.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: s
    }) : f.trigger());
  };
  if (Do(), t === "clear")
    r.forEach(l);
  else {
    const f = A(e), h = f && xo(n);
    if (f && n === "length") {
      const a = Number(o);
      r.forEach((d, _) => {
        (_ === "length" || _ === zt || !ft(_) && _ >= a) && l(d);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), h && l(r.get(zt)), t) {
        case "add":
          f ? h && l(r.get("length")) : (l(r.get(_t)), gt(e) && l(r.get(co)));
          break;
        case "delete":
          f || (l(r.get(_t)), gt(e) && l(r.get(co)));
          break;
        case "set":
          gt(e) && l(r.get(_t));
          break;
      }
  }
  Vo();
}
function Nt(e) {
  const t = L(e);
  return t === e ? t : (ie(t, "iterate", zt), he(e) ? t : t.map(Me));
}
function jn(e) {
  return ie(e = L(e), "iterate", zt), e;
}
function nt(e, t) {
  return Ie(e) ? lt(e) ? St(Me(t)) : St(t) : Me(t);
}
const wr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, (e) => nt(this, e));
  },
  concat(...e) {
    return Nt(this).concat(
      ...e.map((t) => A(t) ? Nt(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = nt(this, e[1]), e));
  },
  every(e, t) {
    return ze(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ze(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => nt(this, o)),
      arguments
    );
  },
  find(e, t) {
    return ze(
      this,
      "find",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ze(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ze(
      this,
      "findLast",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ze(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ze(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xn(this, "includes", e);
  },
  indexOf(...e) {
    return Xn(this, "indexOf", e);
  },
  join(e) {
    return Nt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ze(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Mt(this, "pop");
  },
  push(...e) {
    return Mt(this, "push", e);
  },
  reduce(e, ...t) {
    return Zo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zo(this, "reduceRight", e, t);
  },
  shift() {
    return Mt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ze(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Mt(this, "splice", e);
  },
  toReversed() {
    return Nt(this).toReversed();
  },
  toSorted(e) {
    return Nt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Nt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Mt(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", (e) => nt(this, e));
  }
};
function Yn(e, t, n) {
  const o = jn(e), i = o[t]();
  return o !== e && !he(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const xr = Array.prototype;
function ze(e, t, n, o, i, s) {
  const r = jn(e), l = r !== e && !he(e), f = r[t];
  if (f !== xr[t]) {
    const d = f.apply(e, s);
    return l ? Me(d) : d;
  }
  let h = n;
  r !== e && (l ? h = function(d, _) {
    return n.call(this, nt(e, d), _, e);
  } : n.length > 2 && (h = function(d, _) {
    return n.call(this, d, _, e);
  }));
  const a = f.call(r, h, o);
  return l && i ? i(a) : a;
}
function Zo(e, t, n, o) {
  const i = jn(e);
  let s = n;
  return i !== e && (he(e) ? n.length > 3 && (s = function(r, l, f) {
    return n.call(this, r, l, f, e);
  }) : s = function(r, l, f) {
    return n.call(this, r, nt(e, l), f, e);
  }), i[t](s, ...o);
}
function Xn(e, t, n) {
  const o = L(e);
  ie(o, "iterate", zt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && On(n[0]) ? (n[0] = L(n[0]), o[t](...n)) : i;
}
function Mt(e, t, n = []) {
  $e(), Do();
  const o = L(e)[t].apply(e, n);
  return Vo(), Ae(), o;
}
const Dr = /* @__PURE__ */ Ze("__proto__,__v_isRef,__isVue"), Zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function Vr(e) {
  ft(e) || (e = String(e));
  const t = L(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class Qi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (i ? s ? ss : is : s ? os : ns).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = A(t);
    if (!i) {
      let f;
      if (r && (f = wr[n]))
        return f;
      if (n === "hasOwnProperty")
        return Vr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      te(t) ? t : o
    );
    if ((ft(n) ? Zi.has(n) : Dr(n)) || (i || ie(t, "get", n), s))
      return l;
    if (te(l)) {
      const f = r && xo(n) ? l : l.value;
      return i && q(f) ? uo(f) : f;
    }
    return q(l) ? i ? uo(l) : To(l) : l;
  }
}
class es extends Qi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let s = t[n];
    const r = A(t) && xo(n);
    if (!this._isShallow) {
      const h = Ie(s);
      if (!he(o) && !Ie(o) && (s = L(s), o = L(o)), !r && te(s) && !te(o))
        return h ? (J.NODE_ENV !== "production" && Pe(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (s.value = o, !0);
    }
    const l = r ? Number(n) < t.length : k(t, n), f = Reflect.set(
      t,
      n,
      o,
      te(t) ? t : i
    );
    return t === L(i) && (l ? rt(o, s) && Ke(t, "set", n, o, s) : Ke(t, "add", n, o)), f;
  }
  deleteProperty(t, n) {
    const o = k(t, n), i = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Ke(t, "delete", n, void 0, i), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ft(n) || !Zi.has(n)) && ie(t, "has", n), o;
  }
  ownKeys(t) {
    return ie(
      t,
      "iterate",
      A(t) ? "length" : _t
    ), Reflect.ownKeys(t);
  }
}
class ts extends Qi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return J.NODE_ENV !== "production" && Pe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return J.NODE_ENV !== "production" && Pe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Sr = /* @__PURE__ */ new es(), Cr = /* @__PURE__ */ new ts(), Tr = /* @__PURE__ */ new es(!0), Pr = /* @__PURE__ */ new ts(!0), fo = (e) => e, fn = (e) => Reflect.getPrototypeOf(e);
function $r(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, s = L(i), r = gt(s), l = e === "entries" || e === Symbol.iterator && r, f = e === "keys" && r, h = i[e](...o), a = n ? fo : t ? St : Me;
    return !t && ie(
      s,
      "iterate",
      f ? co : _t
    ), {
      // iterator protocol
      next() {
        const { value: d, done: _ } = h.next();
        return _ ? { value: d, done: _ } : {
          value: l ? [a(d[0]), a(d[1])] : a(d),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function un(e) {
  return function(...t) {
    if (J.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Pe(
        `${Fn(e)} operation ${n}failed: target is readonly.`,
        L(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ar(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, r = L(s), l = L(i);
      e || (rt(i, l) && ie(r, "get", i), ie(r, "get", l));
      const { has: f } = fn(r), h = t ? fo : e ? St : Me;
      if (f.call(r, i))
        return h(s.get(i));
      if (f.call(r, l))
        return h(s.get(l));
      s !== r && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ie(L(i), "iterate", _t), i.size;
    },
    has(i) {
      const s = this.__v_raw, r = L(s), l = L(i);
      return e || (rt(i, l) && ie(r, "has", i), ie(r, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const r = this, l = r.__v_raw, f = L(l), h = t ? fo : e ? St : Me;
      return !e && ie(f, "iterate", _t), l.forEach((a, d) => i.call(s, h(a), h(d), r));
    }
  };
  return X(
    n,
    e ? {
      add: un("add"),
      set: un("set"),
      delete: un("delete"),
      clear: un("clear")
    } : {
      add(i) {
        !t && !he(i) && !Ie(i) && (i = L(i));
        const s = L(this);
        return fn(s).has.call(s, i) || (s.add(i), Ke(s, "add", i, i)), this;
      },
      set(i, s) {
        !t && !he(s) && !Ie(s) && (s = L(s));
        const r = L(this), { has: l, get: f } = fn(r);
        let h = l.call(r, i);
        h ? J.NODE_ENV !== "production" && Qo(r, l, i) : (i = L(i), h = l.call(r, i));
        const a = f.call(r, i);
        return r.set(i, s), h ? rt(s, a) && Ke(r, "set", i, s, a) : Ke(r, "add", i, s), this;
      },
      delete(i) {
        const s = L(this), { has: r, get: l } = fn(s);
        let f = r.call(s, i);
        f ? J.NODE_ENV !== "production" && Qo(s, r, i) : (i = L(i), f = r.call(s, i));
        const h = l ? l.call(s, i) : void 0, a = s.delete(i);
        return f && Ke(s, "delete", i, void 0, h), a;
      },
      clear() {
        const i = L(this), s = i.size !== 0, r = J.NODE_ENV !== "production" ? gt(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return s && Ke(
          i,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = $r(i, e, t);
  }), n;
}
function Ln(e, t) {
  const n = Ar(e, t);
  return (o, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    k(n, i) && i in o ? n : o,
    i,
    s
  );
}
const Ir = {
  get: /* @__PURE__ */ Ln(!1, !1)
}, Mr = {
  get: /* @__PURE__ */ Ln(!1, !0)
}, Rr = {
  get: /* @__PURE__ */ Ln(!0, !1)
}, Fr = {
  get: /* @__PURE__ */ Ln(!0, !0)
};
function Qo(e, t, n) {
  const o = L(n);
  if (o !== n && t.call(e, o)) {
    const i = wo(e);
    Pe(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ns = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap();
function jr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Lr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jr(wo(e));
}
function To(e) {
  return Ie(e) ? e : Hn(
    e,
    !1,
    Sr,
    Ir,
    ns
  );
}
function Hr(e) {
  return Hn(
    e,
    !1,
    Tr,
    Mr,
    os
  );
}
function uo(e) {
  return Hn(
    e,
    !0,
    Cr,
    Rr,
    is
  );
}
function Ge(e) {
  return Hn(
    e,
    !0,
    Pr,
    Fr,
    ss
  );
}
function Hn(e, t, n, o, i) {
  if (!q(e))
    return J.NODE_ENV !== "production" && Pe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Lr(e);
  if (s === 0)
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, l), l;
}
function lt(e) {
  return Ie(e) ? lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ie(e) {
  return !!(e && e.__v_isReadonly);
}
function he(e) {
  return !!(e && e.__v_isShallow);
}
function On(e) {
  return e ? !!e.__v_raw : !1;
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function kr(e) {
  return !k(e, "__v_skip") && Object.isExtensible(e) && vn(e, "__v_skip", !0), e;
}
const Me = (e) => q(e) ? To(e) : e, St = (e) => q(e) ? uo(e) : e;
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function dn(e) {
  return Ur(e, !1);
}
function Ur(e, t) {
  return te(e) ? e : new Br(e, t);
}
class Br {
  constructor(t, n) {
    this.dep = new Co(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : L(t), this._value = n ? t : Me(t), this.__v_isShallow = n;
  }
  get value() {
    return J.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || he(t) || Ie(t);
    t = o ? t : L(t), rt(t, n) && (this._rawValue = t, this._value = o ? t : Me(t), J.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function rs(e) {
  return te(e) ? e.value : e;
}
const Kr = {
  get: (e, t, n) => t === "__v_raw" ? e : rs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return te(i) && !te(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ls(e) {
  return lt(e) ? e : new Proxy(e, Kr);
}
class Wr {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Co(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    K !== this)
      return Gi(this, !0), !0;
  }
  get value() {
    const t = J.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return zi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : J.NODE_ENV !== "production" && Pe("Write operation failed: computed value is readonly");
  }
}
function Gr(e, t, n = !1) {
  let o, i;
  return R(e) ? o = e : (o = e.get, i = e.set), new Wr(o, i, n);
}
const an = {}, wn = /* @__PURE__ */ new WeakMap();
let pt;
function qr(e, t = !1, n = pt) {
  if (n) {
    let o = wn.get(n);
    o || wn.set(n, o = []), o.push(e);
  } else J.NODE_ENV !== "production" && !t && Pe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jr(e, t, n = G) {
  const { immediate: o, deep: i, once: s, scheduler: r, augmentJob: l, call: f } = n, h = (C) => {
    (n.onWarn || Pe)(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = (C) => i ? C : he(C) || i === !1 || i === 0 ? st(C, 1) : st(C);
  let d, _, w, M, T = !1, ee = !1;
  if (te(e) ? (_ = () => e.value, T = he(e)) : lt(e) ? (_ = () => a(e), T = !0) : A(e) ? (ee = !0, T = e.some((C) => lt(C) || he(C)), _ = () => e.map((C) => {
    if (te(C))
      return C.value;
    if (lt(C))
      return a(C);
    if (R(C))
      return f ? f(C, 2) : C();
    J.NODE_ENV !== "production" && h(C);
  })) : R(e) ? t ? _ = f ? () => f(e, 2) : e : _ = () => {
    if (w) {
      $e();
      try {
        w();
      } finally {
        Ae();
      }
    }
    const C = pt;
    pt = d;
    try {
      return f ? f(e, 3, [M]) : e(M);
    } finally {
      pt = C;
    }
  } : (_ = se, J.NODE_ENV !== "production" && h(e)), t && i) {
    const C = _, Y = i === !0 ? 1 / 0 : i;
    _ = () => st(C(), Y);
  }
  const $ = Nr(), S = () => {
    d.stop(), $ && $.active && vo($.effects, d);
  };
  if (s && t) {
    const C = t;
    t = (...Y) => {
      C(...Y), S();
    };
  }
  let N = ee ? new Array(e.length).fill(an) : an;
  const j = (C) => {
    if (!(!(d.flags & 1) || !d.dirty && !C))
      if (t) {
        const Y = d.run();
        if (i || T || (ee ? Y.some((re, Q) => rt(re, N[Q])) : rt(Y, N))) {
          w && w();
          const re = pt;
          pt = d;
          try {
            const Q = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              N === an ? void 0 : ee && N[0] === an ? [] : N,
              M
            ];
            N = Y, f ? f(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            pt = re;
          }
        }
      } else
        d.run();
  };
  return l && l(j), d = new Ki(_), d.scheduler = r ? () => r(j, !1) : j, M = (C) => qr(C, !1, d), w = d.onStop = () => {
    const C = wn.get(d);
    if (C) {
      if (f)
        f(C, 4);
      else
        for (const Y of C) Y();
      wn.delete(d);
    }
  }, J.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? o ? j(!0) : N = d.run() : r ? r(j.bind(null, !0), !0) : d.run(), S.pause = d.pause.bind(d), S.resume = d.resume.bind(d), S.stop = S, S;
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, te(e))
    st(e.value, t, n);
  else if (A(e))
    for (let o = 0; o < e.length; o++)
      st(e[o], t, n);
  else if (ji(e) || gt(e))
    e.forEach((o) => {
      st(o, t, n);
    });
  else if (Mn(e)) {
    for (const o in e)
      st(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && st(e[o], t, n);
  }
  return e;
}
var p = {};
const mt = [];
function pn(e) {
  mt.push(e);
}
function hn() {
  mt.pop();
}
let Zn = !1;
function x(e, ...t) {
  if (Zn) return;
  Zn = !0, $e();
  const n = mt.length ? mt[mt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = zr();
  if (o)
    Ct(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var r, l;
          return (l = (r = s.toString) == null ? void 0 : r.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${rn(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    i.length && s.push(`
`, ...Yr(i)), console.warn(...s);
  }
  Ae(), Zn = !1;
}
function zr() {
  let e = mt[mt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Yr(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Xr(n));
  }), t;
}
function Xr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${rn(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [i, ...Zr(e.props), s] : [i + s];
}
function Zr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...cs(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function cs(e, t, n) {
  return Z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : te(t) ? (t = cs(e, L(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = L(t), n ? t : [`${e}=`, t]);
}
const Po = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ct(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    tn(i, t, n);
  }
}
function qe(e, t, n, o) {
  if (R(e)) {
    const i = Ct(e, t, n, o);
    return i && Oo(i) && i.catch((s) => {
      tn(s, t, n);
    }), i;
  }
  if (A(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(qe(e[s], t, n, o));
    return i;
  } else p.NODE_ENV !== "production" && x(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function tn(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || G;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = p.NODE_ENV !== "production" ? Po[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      $e(), Ct(s, null, 10, [
        e,
        f,
        h
      ]), Ae();
      return;
    }
  }
  Qr(e, n, i, o, r);
}
function Qr(e, t, n, o = !0, i = !1) {
  if (p.NODE_ENV !== "production") {
    const s = Po[t];
    if (n && pn(n), x(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && hn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const pe = [];
let Ue = -1;
const Dt = [];
let ot = null, wt = 0;
const fs = /* @__PURE__ */ Promise.resolve();
let xn = null;
const el = 100;
function us(e) {
  const t = xn || fs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tl(e) {
  let t = Ue + 1, n = pe.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = pe[o], s = Yt(i);
    s < e || s === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function kn(e) {
  if (!(e.flags & 1)) {
    const t = Yt(e), n = pe[pe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Yt(n) ? pe.push(e) : pe.splice(tl(t), 0, e), e.flags |= 1, as();
  }
}
function as() {
  xn || (xn = fs.then(hs));
}
function ds(e) {
  A(e) ? Dt.push(...e) : ot && e.id === -1 ? ot.splice(wt + 1, 0, e) : e.flags & 1 || (Dt.push(e), e.flags |= 1), as();
}
function ei(e, t, n = Ue + 1) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < pe.length; n++) {
    const o = pe[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || p.NODE_ENV !== "production" && $o(t, o))
        continue;
      pe.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function ps(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)].sort(
      (n, o) => Yt(n) - Yt(o)
    );
    if (Dt.length = 0, ot) {
      ot.push(...t);
      return;
    }
    for (ot = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), wt = 0; wt < ot.length; wt++) {
      const n = ot[wt];
      p.NODE_ENV !== "production" && $o(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ot = null, wt = 0;
  }
}
const Yt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hs(e) {
  p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (n) => $o(e, n) : se;
  try {
    for (Ue = 0; Ue < pe.length; Ue++) {
      const n = pe[Ue];
      if (n && !(n.flags & 8)) {
        if (p.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ct(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ue < pe.length; Ue++) {
      const n = pe[Ue];
      n && (n.flags &= -2);
    }
    Ue = -1, pe.length = 0, ps(e), xn = null, (pe.length || Dt.length) && hs(e);
  }
}
function $o(e, t) {
  const n = e.get(t) || 0;
  if (n > el) {
    const o = t.i, i = o && Ys(o.type);
    return tn(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Se = !1;
const gn = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (en().__VUE_HMR_RUNTIME__ = {
  createRecord: Qn(gs),
  rerender: Qn(il),
  reload: Qn(sl)
});
const Et = /* @__PURE__ */ new Map();
function nl(e) {
  const t = e.type.__hmrId;
  let n = Et.get(t);
  n || (gs(t, e.type), n = Et.get(t)), n.instances.add(e);
}
function ol(e) {
  Et.get(e.type.__hmrId).instances.delete(e);
}
function gs(e, t) {
  return Et.has(e) ? !1 : (Et.set(e, {
    initialDef: Dn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Dn(e) {
  return Xs(e) ? e.__vccOpts : e;
}
function il(e, t) {
  const n = Et.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Dn(o.type).render = t), o.renderCache = [], Se = !0, o.job.flags & 8 || o.update(), Se = !1;
  }));
}
function sl(e, t) {
  const n = Et.get(e);
  if (!n) return;
  t = Dn(t), ti(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const s = o[i], r = Dn(s.type);
    let l = gn.get(r);
    l || (r !== n.initialDef && ti(r, t), gn.set(r, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? kn(() => {
      s.job.flags & 8 || (Se = !0, s.parent.update(), Se = !1, l.delete(s));
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(r);
  }
  ds(() => {
    gn.clear();
  });
}
function ti(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Qn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let We, Lt = [], ao = !1;
function nn(e, ...t) {
  We ? We.emit(e, ...t) : ao || Lt.push({ event: e, args: t });
}
function _s(e, t) {
  var n, o;
  We = e, We ? (We.enabled = !0, Lt.forEach(({ event: i, args: s }) => We.emit(i, ...s)), Lt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    _s(s, t);
  }), setTimeout(() => {
    We || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ao = !0, Lt = []);
  }, 3e3)) : (ao = !0, Lt = []);
}
function rl(e, t) {
  nn("app:init", e, t, {
    Fragment: ce,
    Text: on,
    Comment: we,
    Static: bn
  });
}
function ll(e) {
  nn("app:unmount", e);
}
const cl = /* @__PURE__ */ Ao(
  "component:added"
  /* COMPONENT_ADDED */
), ms = /* @__PURE__ */ Ao(
  "component:updated"
  /* COMPONENT_UPDATED */
), fl = /* @__PURE__ */ Ao(
  "component:removed"
  /* COMPONENT_REMOVED */
), ul = (e) => {
  We && typeof We.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !We.cleanupBuffer(e) && fl(e);
};
// @__NO_SIDE_EFFECTS__
function Ao(e) {
  return (t) => {
    nn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const al = /* @__PURE__ */ bs(
  "perf:start"
  /* PERFORMANCE_START */
), dl = /* @__PURE__ */ bs(
  "perf:end"
  /* PERFORMANCE_END */
);
function bs(e) {
  return (t, n, o) => {
    nn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function pl(e, t, n) {
  nn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ve = null, Es = null;
function Vn(e) {
  const t = ve;
  return ve = e, Es = e && e.type.__scopeId || null, t;
}
function hl(e, t = ve, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && gi(-1);
    const s = Vn(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Vn(s), o._d && gi(1);
    }
    return p.NODE_ENV !== "production" && ms(t), r;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ys(e) {
  ir(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function ut(e, t, n, o) {
  const i = e.dirs, s = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    s && (l.oldValue = s[r].value);
    let f = l.dir[o];
    f && ($e(), qe(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ae());
  }
}
function gl(e, t) {
  if (p.NODE_ENV !== "production" && (!oe || oe.isMounted) && x("provide() can only be used inside setup()."), oe) {
    let n = oe.provides;
    const o = oe.parent && oe.parent.provides;
    o === n && (n = oe.provides = Object.create(o)), n[e] = t;
  }
}
function _n(e, t, n = !1) {
  const o = qs();
  if (o || Vt) {
    let i = Vt ? Vt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    p.NODE_ENV !== "production" && x(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && x("inject() can only be used inside setup() or functional components.");
}
const _l = /* @__PURE__ */ Symbol.for("v-scx"), ml = () => {
  {
    const e = _n(_l);
    return e || p.NODE_ENV !== "production" && x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function eo(e, t, n) {
  return p.NODE_ENV !== "production" && !R(t) && x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ns(e, t, n);
}
function Ns(e, t, n = G) {
  const { immediate: o, deep: i, flush: s, once: r } = n;
  p.NODE_ENV !== "production" && !t && (o !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = X({}, n);
  p.NODE_ENV !== "production" && (l.onWarn = x);
  const f = t && o || !t && s !== "post";
  let h;
  if (Zt) {
    if (s === "sync") {
      const w = ml();
      h = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!f) {
      const w = () => {
      };
      return w.stop = se, w.resume = se, w.pause = se, w;
    }
  }
  const a = oe;
  l.call = (w, M, T) => qe(w, a, M, T);
  let d = !1;
  s === "post" ? l.scheduler = (w) => {
    ye(w, a && a.suspense);
  } : s !== "sync" && (d = !0, l.scheduler = (w, M) => {
    M ? w() : kn(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), d && (w.flags |= 2, a && (w.id = a.uid, w.i = a));
  };
  const _ = Jr(e, t, l);
  return Zt && (h ? h.push(_) : f && _()), _;
}
function bl(e, t, n) {
  const o = this.proxy, i = Z(e) ? e.includes(".") ? vs(o, e) : () => o[e] : e.bind(o, o);
  let s;
  R(t) ? s = t : (s = t.handler, n = t);
  const r = sn(this), l = Ns(i, s.bind(o), n);
  return r(), l;
}
function vs(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const El = /* @__PURE__ */ Symbol("_vte"), yl = (e) => e.__isTeleport, Nl = /* @__PURE__ */ Symbol("_leaveCb");
function Io(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Io(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Mo(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    X({ name: e.name }, t, { setup: e })
  ) : e;
}
function Os(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ni = /* @__PURE__ */ new WeakSet(), Sn = /* @__PURE__ */ new WeakMap();
function Kt(e, t, n, o, i = !1) {
  if (A(e)) {
    e.forEach(
      (T, ee) => Kt(
        T,
        t && (A(t) ? t[ee] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Wt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Kt(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? Uo(o.component) : o.el, r = i ? null : s, { i: l, r: f } = e;
  if (p.NODE_ENV !== "production" && !l) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, a = l.refs === G ? l.refs = {} : l.refs, d = l.setupState, _ = L(d), w = d === G ? Fi : (T) => p.NODE_ENV !== "production" && (k(_, T) && !te(_[T]) && x(
    `Template ref "${T}" used on a non-ref value. It will not work in the production build.`
  ), ni.has(_[T])) ? !1 : k(_, T), M = (T) => p.NODE_ENV === "production" || !ni.has(T);
  if (h != null && h !== f) {
    if (oi(t), Z(h))
      a[h] = null, w(h) && (d[h] = null);
    else if (te(h)) {
      M(h) && (h.value = null);
      const T = t;
      T.k && (a[T.k] = null);
    }
  }
  if (R(f))
    Ct(f, l, 12, [r, a]);
  else {
    const T = Z(f), ee = te(f);
    if (T || ee) {
      const $ = () => {
        if (e.f) {
          const S = T ? w(f) ? d[f] : a[f] : M(f) || !e.k ? f.value : a[e.k];
          if (i)
            A(S) && vo(S, s);
          else if (A(S))
            S.includes(s) || S.push(s);
          else if (T)
            a[f] = [s], w(f) && (d[f] = a[f]);
          else {
            const N = [s];
            M(f) && (f.value = N), e.k && (a[e.k] = N);
          }
        } else T ? (a[f] = r, w(f) && (d[f] = r)) : ee ? (M(f) && (f.value = r), e.k && (a[e.k] = r)) : p.NODE_ENV !== "production" && x("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (r) {
        const S = () => {
          $(), Sn.delete(e);
        };
        S.id = -1, Sn.set(e, S), ye(S, n);
      } else
        oi(e), $();
    } else p.NODE_ENV !== "production" && x("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function oi(e) {
  const t = Sn.get(e);
  t && (t.flags |= 8, Sn.delete(e));
}
en().requestIdleCallback;
en().cancelIdleCallback;
const Wt = (e) => !!e.type.__asyncLoader, Ro = (e) => e.type.__isKeepAlive;
function vl(e, t) {
  ws(e, "a", t);
}
function Ol(e, t) {
  ws(e, "da", t);
}
function ws(e, t, n = oe) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Un(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Ro(i.parent.vnode) && wl(o, t, n, i), i = i.parent;
  }
}
function wl(e, t, n, o) {
  const i = Un(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  xs(() => {
    vo(o[t], i);
  }, n);
}
function Un(e, t, n = oe, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
      $e();
      const l = sn(n), f = qe(t, n, e, r);
      return l(), Ae(), f;
    });
    return o ? i.unshift(s) : i.push(s), s;
  } else if (p.NODE_ENV !== "production") {
    const i = dt(Po[e].replace(/ hook$/, ""));
    x(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Qe = (e) => (t, n = oe) => {
  (!Zt || e === "sp") && Un(e, (...o) => t(...o), n);
}, xl = Qe("bm"), Dl = Qe("m"), Vl = Qe(
  "bu"
), Sl = Qe("u"), Cl = Qe(
  "bum"
), xs = Qe("um"), Tl = Qe(
  "sp"
), Pl = Qe("rtg"), $l = Qe("rtc");
function Al(e, t = oe) {
  Un("ec", e, t);
}
const Il = /* @__PURE__ */ Symbol.for("v-ndc");
function Rt(e, t, n, o) {
  let i;
  const s = n, r = A(e);
  if (r || Z(e)) {
    const l = r && lt(e);
    let f = !1, h = !1;
    l && (f = !he(e), h = Ie(e), e = jn(e)), i = new Array(e.length);
    for (let a = 0, d = e.length; a < d; a++)
      i[a] = t(
        f ? h ? St(Me(e[a])) : Me(e[a]) : e[a],
        a,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    p.NODE_ENV !== "production" && !Number.isInteger(e) && x(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, s);
  } else if (q(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, f) => t(l, f, void 0, s)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let f = 0, h = l.length; f < h; f++) {
        const a = l[f];
        i[f] = t(e[a], a, f, s);
      }
    }
  else
    i = [];
  return i;
}
const po = (e) => e ? Js(e) ? Uo(e) : po(e.parent) : null, bt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? Ge(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? Ge(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? Ge(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? Ge(e.refs) : e.refs,
    $parent: (e) => po(e.parent),
    $root: (e) => po(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ss(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      kn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = us.bind(e.proxy)),
    $watch: (e) => bl.bind(e)
  })
), Fo = (e) => e === "_" || e === "$", to = (e, t) => e !== G && !e.__isScriptSetup && k(e, t), Ds = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: s, accessCache: r, type: l, appContext: f } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const _ = r[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (to(o, t))
          return r[t] = 1, o[t];
        if (i !== G && k(i, t))
          return r[t] = 2, i[t];
        if (k(s, t))
          return r[t] = 3, s[t];
        if (n !== G && k(n, t))
          return r[t] = 4, n[t];
        ho && (r[t] = 0);
      }
    }
    const h = bt[t];
    let a, d;
    if (h)
      return t === "$attrs" ? (ie(e.attrs, "get", ""), p.NODE_ENV !== "production" && Tn()) : p.NODE_ENV !== "production" && t === "$slots" && ie(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== G && k(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      d = f.config.globalProperties, k(d, t)
    )
      return d[t];
    p.NODE_ENV !== "production" && ve && (!Z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== G && Fo(t[0]) && k(i, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ve && x(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: s } = e;
    return to(i, t) ? (i[t] = n, !0) : p.NODE_ENV !== "production" && i.__isScriptSetup && k(i, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== G && k(o, t) ? (o[t] = n, !0) : k(e.props, t) ? (p.NODE_ENV !== "production" && x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && x(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, props: s, type: r }
  }, l) {
    let f;
    return !!(n[l] || e !== G && l[0] !== "$" && k(e, l) || to(t, l) || k(s, l) || k(o, l) || k(bt, l) || k(i.config.globalProperties, l) || (f = r.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : k(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (Ds.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ml(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(bt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => bt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: se
    });
  }), t;
}
function Rl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: se
    });
  });
}
function Fl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(L(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Fo(o[0])) {
        x(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: se
      });
    }
  });
}
function ii(e) {
  return A(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function jl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ho = !0;
function Ll(e) {
  const t = Ss(e), n = e.proxy, o = e.ctx;
  ho = !1, t.beforeCreate && si(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: r,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: d,
    mounted: _,
    beforeUpdate: w,
    updated: M,
    activated: T,
    deactivated: ee,
    beforeDestroy: $,
    beforeUnmount: S,
    destroyed: N,
    unmounted: j,
    render: C,
    renderTracked: Y,
    renderTriggered: re,
    errorCaptured: Q,
    serverPrefetch: fe,
    // public API
    expose: Re,
    inheritAttrs: Je,
    // assets
    components: De,
    directives: ln,
    filters: Ko
  } = t, et = p.NODE_ENV !== "production" ? jl() : null;
  if (p.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const H in U)
        et("Props", H);
  }
  if (h && Hl(h, o, et), r)
    for (const U in r) {
      const H = r[U];
      R(H) ? (p.NODE_ENV !== "production" ? Object.defineProperty(o, U, {
        value: H.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[U] = H.bind(n), p.NODE_ENV !== "production" && et("Methods", U)) : p.NODE_ENV !== "production" && x(
        `Method "${U}" has type "${typeof H}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    p.NODE_ENV !== "production" && !R(i) && x(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = i.call(n, n);
    if (p.NODE_ENV !== "production" && Oo(U) && x(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(U))
      p.NODE_ENV !== "production" && x("data() should return an object.");
    else if (e.data = To(U), p.NODE_ENV !== "production")
      for (const H in U)
        et("Data", H), Fo(H[0]) || Object.defineProperty(o, H, {
          configurable: !0,
          enumerable: !0,
          get: () => U[H],
          set: se
        });
  }
  if (ho = !0, s)
    for (const U in s) {
      const H = s[U], Fe = R(H) ? H.bind(n, n) : R(H.get) ? H.get.bind(n, n) : se;
      p.NODE_ENV !== "production" && Fe === se && x(`Computed property "${U}" has no getter.`);
      const Wn = !R(H) && R(H.set) ? H.set.bind(n) : p.NODE_ENV !== "production" ? () => {
        x(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : se, Tt = An({
        get: Fe,
        set: Wn
      });
      Object.defineProperty(o, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (yt) => Tt.value = yt
      }), p.NODE_ENV !== "production" && et("Computed", U);
    }
  if (l)
    for (const U in l)
      Vs(l[U], o, n, U);
  if (f) {
    const U = R(f) ? f.call(n) : f;
    Reflect.ownKeys(U).forEach((H) => {
      gl(H, U[H]);
    });
  }
  a && si(a, e, "c");
  function ge(U, H) {
    A(H) ? H.forEach((Fe) => U(Fe.bind(n))) : H && U(H.bind(n));
  }
  if (ge(xl, d), ge(Dl, _), ge(Vl, w), ge(Sl, M), ge(vl, T), ge(Ol, ee), ge(Al, Q), ge($l, Y), ge(Pl, re), ge(Cl, S), ge(xs, j), ge(Tl, fe), A(Re))
    if (Re.length) {
      const U = e.exposed || (e.exposed = {});
      Re.forEach((H) => {
        Object.defineProperty(U, H, {
          get: () => n[H],
          set: (Fe) => n[H] = Fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === se && (e.render = C), Je != null && (e.inheritAttrs = Je), De && (e.components = De), ln && (e.directives = ln), fe && Os(e);
}
function Hl(e, t, n = se) {
  A(e) && (e = go(e));
  for (const o in e) {
    const i = e[o];
    let s;
    q(i) ? "default" in i ? s = _n(
      i.from || o,
      i.default,
      !0
    ) : s = _n(i.from || o) : s = _n(i), te(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (r) => s.value = r
    }) : t[o] = s, p.NODE_ENV !== "production" && n("Inject", o);
  }
}
function si(e, t, n) {
  qe(
    A(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Vs(e, t, n, o) {
  let i = o.includes(".") ? vs(n, o) : () => n[o];
  if (Z(e)) {
    const s = t[e];
    R(s) ? eo(i, s) : p.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e}"`, s);
  } else if (R(e))
    eo(i, e.bind(n));
  else if (q(e))
    if (A(e))
      e.forEach((s) => Vs(s, t, n, o));
    else {
      const s = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(s) ? eo(i, s, e) : p.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else p.NODE_ENV !== "production" && x(`Invalid watch option: "${o}"`, e);
}
function Ss(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = s.get(t);
  let f;
  return l ? f = l : !i.length && !n && !o ? f = t : (f = {}, i.length && i.forEach(
    (h) => Cn(f, h, r, !0)
  ), Cn(f, t, r)), q(t) && s.set(t, f), f;
}
function Cn(e, t, n, o = !1) {
  const { mixins: i, extends: s } = t;
  s && Cn(e, s, n, !0), i && i.forEach(
    (r) => Cn(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      p.NODE_ENV !== "production" && x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = kl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const kl = {
  data: ri,
  props: li,
  emits: li,
  // objects
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: Bl,
  // provide / inject
  provide: ri,
  inject: Ul
};
function ri(e, t) {
  return t ? e ? function() {
    return X(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ul(e, t) {
  return Ht(go(e), go(t));
}
function go(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function li(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    ii(e),
    ii(t ?? {})
  ) : t;
}
function Bl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = de(e[o], t[o]);
  return n;
}
function Cs() {
  return {
    app: null,
    config: {
      isNativeTag: Fi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Kl = 0;
function Wl(e, t) {
  return function(o, i = null) {
    R(o) || (o = X({}, o)), i != null && !q(i) && (p.NODE_ENV !== "production" && x("root props passed to app.mount() must be an object."), i = null);
    const s = Cs(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = s.app = {
      _uid: Kl++,
      _component: o,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: yi,
      get config() {
        return s.config;
      },
      set config(a) {
        p.NODE_ENV !== "production" && x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...d) {
        return r.has(a) ? p.NODE_ENV !== "production" && x("Plugin has already been applied to target app.") : a && R(a.install) ? (r.add(a), a.install(h, ...d)) : R(a) ? (r.add(a), a(h, ...d)) : p.NODE_ENV !== "production" && x(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(a) {
        return s.mixins.includes(a) ? p.NODE_ENV !== "production" && x(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : s.mixins.push(a), h;
      },
      component(a, d) {
        return p.NODE_ENV !== "production" && yo(a, s.config), d ? (p.NODE_ENV !== "production" && s.components[a] && x(`Component "${a}" has already been registered in target app.`), s.components[a] = d, h) : s.components[a];
      },
      directive(a, d) {
        return p.NODE_ENV !== "production" && ys(a), d ? (p.NODE_ENV !== "production" && s.directives[a] && x(`Directive "${a}" has already been registered in target app.`), s.directives[a] = d, h) : s.directives[a];
      },
      mount(a, d, _) {
        if (f)
          p.NODE_ENV !== "production" && x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && a.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const w = h._ceVNode || Te(o, i);
          return w.appContext = s, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), p.NODE_ENV !== "production" && (s.reload = () => {
            const M = ct(w);
            M.el = null, e(M, a, _);
          }), e(w, a, _), f = !0, h._container = a, a.__vue_app__ = h, p.NODE_ENV !== "production" && (h._instance = w.component, rl(h, yi)), Uo(w.component);
        }
      },
      onUnmount(a) {
        p.NODE_ENV !== "production" && typeof a != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof a}`
        ), l.push(a);
      },
      unmount() {
        f ? (qe(
          l,
          h._instance,
          16
        ), e(null, h._container), p.NODE_ENV !== "production" && (h._instance = null, ll(h)), delete h._container.__vue_app__) : p.NODE_ENV !== "production" && x("Cannot unmount an app that is not mounted.");
      },
      provide(a, d) {
        return p.NODE_ENV !== "production" && a in s.provides && (k(s.provides, a) ? x(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ) : x(
          `App already provides property with key "${String(a)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[a] = d, h;
      },
      runWithContext(a) {
        const d = Vt;
        Vt = h;
        try {
          return a();
        } finally {
          Vt = d;
        }
      }
    };
    return h;
  };
}
let Vt = null;
const Gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${Ne(t)}Modifiers`];
function ql(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || G;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: a,
      propsOptions: [d]
    } = e;
    if (a)
      if (!(t in a))
        (!d || !(dt(Ee(t)) in d)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${dt(Ee(t))}" prop.`
        );
      else {
        const _ = a[t];
        R(_) && (_(...n) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const s = t.startsWith("update:"), r = s && Gl(o, t.slice(7));
  if (r && (r.trim && (i = n.map((a) => Z(a) ? a.trim() : a)), r.number && (i = n.map(lr))), p.NODE_ENV !== "production" && pl(e, t, i), p.NODE_ENV !== "production") {
    const a = t.toLowerCase();
    a !== t && o[dt(a)] && x(
      `Event "${a}" is emitted in component ${rn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ne(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = dt(t)] || // also try camelCase event handler (#2249)
  o[l = dt(Ee(t))];
  !f && s && (f = o[l = dt(Ne(t))]), f && qe(
    f,
    e,
    6,
    i
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, qe(
      h,
      e,
      6,
      i
    );
  }
}
const Jl = /* @__PURE__ */ new WeakMap();
function Ts(e, t, n = !1) {
  const o = n ? Jl : t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let r = {}, l = !1;
  if (!R(e)) {
    const f = (h) => {
      const a = Ts(h, t, !0);
      a && (l = !0, X(r, a));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !l ? (q(e) && o.set(e, null), null) : (A(s) ? s.forEach((f) => r[f] = null) : X(r, s), q(e) && o.set(e, r), r);
}
function Bn(e, t) {
  return !e || !Qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), k(e, t[0].toLowerCase() + t.slice(1)) || k(e, Ne(t)) || k(e, t));
}
let _o = !1;
function Tn() {
  _o = !0;
}
function ci(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [s],
    slots: r,
    attrs: l,
    emit: f,
    render: h,
    renderCache: a,
    props: d,
    data: _,
    setupState: w,
    ctx: M,
    inheritAttrs: T
  } = e, ee = Vn(e);
  let $, S;
  p.NODE_ENV !== "production" && (_o = !1);
  try {
    if (n.shapeFlag & 4) {
      const C = i || o, Y = p.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(C, {
        get(re, Q, fe) {
          return x(
            `Property '${String(
              Q
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(re, Q, fe);
        }
      }) : C;
      $ = Ve(
        h.call(
          Y,
          C,
          a,
          p.NODE_ENV !== "production" ? Ge(d) : d,
          w,
          _,
          M
        )
      ), S = l;
    } else {
      const C = t;
      p.NODE_ENV !== "production" && l === d && Tn(), $ = Ve(
        C.length > 1 ? C(
          p.NODE_ENV !== "production" ? Ge(d) : d,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return Tn(), Ge(l);
            },
            slots: r,
            emit: f
          } : { attrs: l, slots: r, emit: f }
        ) : C(
          p.NODE_ENV !== "production" ? Ge(d) : d,
          null
        )
      ), S = t.props ? l : zl(l);
    }
  } catch (C) {
    Gt.length = 0, tn(C, e, 1), $ = Te(we);
  }
  let N = $, j;
  if (p.NODE_ENV !== "production" && $.patchFlag > 0 && $.patchFlag & 2048 && ([N, j] = Ps($)), S && T !== !1) {
    const C = Object.keys(S), { shapeFlag: Y } = N;
    if (C.length) {
      if (Y & 7)
        s && C.some(Nn) && (S = Yl(
          S,
          s
        )), N = ct(N, S, !1, !0);
      else if (p.NODE_ENV !== "production" && !_o && N.type !== we) {
        const re = Object.keys(l), Q = [], fe = [];
        for (let Re = 0, Je = re.length; Re < Je; Re++) {
          const De = re[Re];
          Qt(De) ? Nn(De) || Q.push(De[2].toLowerCase() + De.slice(3)) : fe.push(De);
        }
        fe.length && x(
          `Extraneous non-props attributes (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), Q.length && x(
          `Extraneous non-emits event listeners (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (p.NODE_ENV !== "production" && !fi(N) && x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), N = ct(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && (p.NODE_ENV !== "production" && !fi(N) && x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Io(N, n.transition)), p.NODE_ENV !== "production" && j ? j(N) : $ = N, Vn(ee), $;
}
const Ps = (e) => {
  const t = e.children, n = e.dynamicChildren, o = jo(t, !1);
  if (o) {
    if (p.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ps(o);
  } else return [e, void 0];
  const i = t.indexOf(o), s = n ? n.indexOf(o) : -1, r = (l) => {
    t[i] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ve(o), r];
};
function jo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Kn(i)) {
      if (i.type !== we || i.children === "v-if") {
        if (n)
          return;
        if (n = i, p.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return jo(n.children);
      }
    } else
      return;
  }
  return n;
}
const zl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Yl = (e, t) => {
  const n = {};
  for (const o in e)
    (!Nn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, fi = (e) => e.shapeFlag & 7 || e.type === we;
function Xl(e, t, n) {
  const { props: o, children: i, component: s } = e, { props: r, children: l, patchFlag: f } = t, h = s.emitsOptions;
  if (p.NODE_ENV !== "production" && (i || l) && Se || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? ui(o, r, h) : !!r;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const _ = a[d];
        if (r[_] !== o[_] && !Bn(h, _))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === r ? !1 : o ? r ? ui(o, r, h) : !0 : !!r;
  return !1;
}
function ui(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const s = o[i];
    if (t[s] !== e[s] && !Bn(n, s))
      return !0;
  }
  return !1;
}
function Zl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const $s = {}, As = () => Object.create($s), Is = (e) => Object.getPrototypeOf(e) === $s;
function Ql(e, t, n, o = !1) {
  const i = {}, s = As();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ms(e, t, i, s);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  p.NODE_ENV !== "production" && Fs(t || {}, i, e), n ? e.props = o ? i : Hr(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function ec(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function tc(e, t, n, o) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: r }
  } = e, l = L(i), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && ec(e)) && (o || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let _ = a[d];
        if (Bn(e.emitsOptions, _))
          continue;
        const w = t[_];
        if (f)
          if (k(s, _))
            w !== s[_] && (s[_] = w, h = !0);
          else {
            const M = Ee(_);
            i[M] = mo(
              f,
              l,
              M,
              w,
              e,
              !1
            );
          }
        else
          w !== s[_] && (s[_] = w, h = !0);
      }
    }
  } else {
    Ms(e, t, i, s) && (h = !0);
    let a;
    for (const d in l)
      (!t || // for camelCase
      !k(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ne(d)) === d || !k(t, a))) && (f ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[a] !== void 0) && (i[d] = mo(
        f,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (s !== l)
      for (const d in s)
        (!t || !k(t, d)) && (delete s[d], h = !0);
  }
  h && Ke(e.attrs, "set", ""), p.NODE_ENV !== "production" && Fs(t || {}, i, e);
}
function Ms(e, t, n, o) {
  const [i, s] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let f in t) {
      if (kt(f))
        continue;
      const h = t[f];
      let a;
      i && k(i, a = Ee(f)) ? !s || !s.includes(a) ? n[a] = h : (l || (l = {}))[a] = h : Bn(e.emitsOptions, f) || (!(f in o) || h !== o[f]) && (o[f] = h, r = !0);
    }
  if (s) {
    const f = L(n), h = l || G;
    for (let a = 0; a < s.length; a++) {
      const d = s[a];
      n[d] = mo(
        i,
        f,
        d,
        h[d],
        e,
        !k(h, d)
      );
    }
  }
  return r;
}
function mo(e, t, n, o, i, s) {
  const r = e[n];
  if (r != null) {
    const l = k(r, "default");
    if (l && o === void 0) {
      const f = r.default;
      if (r.type !== Function && !r.skipFactory && R(f)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const a = sn(i);
          o = h[n] = f.call(
            null,
            t
          ), a();
        }
      } else
        o = f;
      i.ce && i.ce._setProp(n, o);
    }
    r[
      0
      /* shouldCast */
    ] && (s && !l ? o = !1 : r[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ne(n)) && (o = !0));
  }
  return o;
}
const nc = /* @__PURE__ */ new WeakMap();
function Rs(e, t, n = !1) {
  const o = n ? nc : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const s = e.props, r = {}, l = [];
  let f = !1;
  if (!R(e)) {
    const a = (d) => {
      f = !0;
      const [_, w] = Rs(d, t, !0);
      X(r, _), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!s && !f)
    return q(e) && o.set(e, xt), xt;
  if (A(s))
    for (let a = 0; a < s.length; a++) {
      p.NODE_ENV !== "production" && !Z(s[a]) && x("props must be strings when using array syntax.", s[a]);
      const d = Ee(s[a]);
      ai(d) && (r[d] = G);
    }
  else if (s) {
    p.NODE_ENV !== "production" && !q(s) && x("invalid props options", s);
    for (const a in s) {
      const d = Ee(a);
      if (ai(d)) {
        const _ = s[a], w = r[d] = A(_) || R(_) ? { type: _ } : X({}, _), M = w.type;
        let T = !1, ee = !0;
        if (A(M))
          for (let $ = 0; $ < M.length; ++$) {
            const S = M[$], N = R(S) && S.name;
            if (N === "Boolean") {
              T = !0;
              break;
            } else N === "String" && (ee = !1);
          }
        else
          T = R(M) && M.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = T, w[
          1
          /* shouldCastTrue */
        ] = ee, (T || k(w, "default")) && l.push(d);
      }
    }
  }
  const h = [r, l];
  return q(e) && o.set(e, h), h;
}
function ai(e) {
  return e[0] !== "$" && !kt(e) ? !0 : (p.NODE_ENV !== "production" && x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function oc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Fs(e, t, n) {
  const o = L(t), i = n.propsOptions[0], s = Object.keys(e).map((r) => Ee(r));
  for (const r in i) {
    let l = i[r];
    l != null && ic(
      r,
      o[r],
      l,
      p.NODE_ENV !== "production" ? Ge(o) : o,
      !s.includes(r)
    );
  }
}
function ic(e, t, n, o, i) {
  const { type: s, required: r, validator: l, skipCheck: f } = n;
  if (r && i) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (s != null && s !== !0 && !f) {
      let h = !1;
      const a = A(s) ? s : [s], d = [];
      for (let _ = 0; _ < a.length && !h; _++) {
        const { valid: w, expectedType: M } = rc(t, a[_]);
        d.push(M || ""), h = w;
      }
      if (!h) {
        x(lc(e, t, d));
        return;
      }
    }
    l && !l(t, o) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const sc = /* @__PURE__ */ Ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function rc(e, t) {
  let n;
  const o = oc(t);
  if (o === "null")
    n = e === null;
  else if (sc(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = q(e) : o === "Array" ? n = A(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function lc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Fn).join(" | ")}`;
  const i = n[0], s = wo(t), r = di(t, i), l = di(t, s);
  return n.length === 1 && pi(i) && !cc(i, s) && (o += ` with value ${r}`), o += `, got ${s} `, pi(s) && (o += `with value ${l}.`), o;
}
function di(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function pi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function cc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Lo = (e) => e === "_" || e === "_ctx" || e === "$stable", Ho = (e) => A(e) ? e.map(Ve) : [Ve(e)], fc = (e, t, n) => {
  if (t._n)
    return t;
  const o = hl((...i) => (p.NODE_ENV !== "production" && oe && !(n === null && ve) && !(n && n.root !== oe.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ho(t(...i))), n);
  return o._c = !1, o;
}, js = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Lo(i)) continue;
    const s = e[i];
    if (R(s))
      t[i] = fc(i, s, o);
    else if (s != null) {
      p.NODE_ENV !== "production" && x(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = Ho(s);
      t[i] = () => r;
    }
  }
}, Ls = (e, t) => {
  p.NODE_ENV !== "production" && !Ro(e.vnode) && x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ho(t);
  e.slots.default = () => n;
}, bo = (e, t, n) => {
  for (const o in t)
    (n || !Lo(o)) && (e[o] = t[o]);
}, uc = (e, t, n) => {
  const o = e.slots = As();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (bo(o, t, n), n && vn(o, "_", i, !0)) : js(t, o);
  } else t && Ls(e, t);
}, ac = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let s = !0, r = G;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? p.NODE_ENV !== "production" && Se ? (bo(i, t, n), Ke(e, "set", "$slots")) : n && l === 1 ? s = !1 : bo(i, t, n) : (s = !t.$stable, js(t, i)), r = t;
  } else t && (Ls(e, t), r = { default: 1 });
  if (s)
    for (const l in i)
      !Lo(l) && r[l] == null && delete i[l];
};
let Ft, Xe;
function vt(e, t) {
  e.appContext.config.performance && Pn() && Xe.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && al(e, t, Pn() ? Xe.now() : Date.now());
}
function Ot(e, t) {
  if (e.appContext.config.performance && Pn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", i = `<${rn(e, e.type)}> ${t}`;
    Xe.mark(o), Xe.measure(i, n, o), Xe.clearMeasures(i), Xe.clearMarks(n), Xe.clearMarks(o);
  }
  p.NODE_ENV !== "production" && dl(e, t, Pn() ? Xe.now() : Date.now());
}
function Pn() {
  return Ft !== void 0 || (typeof window < "u" && window.performance ? (Ft = !0, Xe = window.performance) : Ft = !1), Ft;
}
function dc() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ye = mc;
function pc(e) {
  return hc(e);
}
function hc(e, t) {
  dc();
  const n = en();
  n.__VUE__ = !0, p.NODE_ENV !== "production" && _s(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: s,
    createElement: r,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: a,
    parentNode: d,
    nextSibling: _,
    setScopeId: w = se,
    insertStaticContent: M
  } = e, T = (c, u, g, y = null, b = null, m = null, D = void 0, v = null, O = p.NODE_ENV !== "production" && Se ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !jt(c, u) && (y = cn(c), tt(c, b, m, !0), c = null), u.patchFlag === -2 && (O = !1, u.dynamicChildren = null);
    const { type: E, ref: I, shapeFlag: V } = u;
    switch (E) {
      case on:
        ee(c, u, g, y);
        break;
      case we:
        $(c, u, g, y);
        break;
      case bn:
        c == null ? S(u, g, y, D) : p.NODE_ENV !== "production" && N(c, u, g, D);
        break;
      case ce:
        ln(
          c,
          u,
          g,
          y,
          b,
          m,
          D,
          v,
          O
        );
        break;
      default:
        V & 1 ? Y(
          c,
          u,
          g,
          y,
          b,
          m,
          D,
          v,
          O
        ) : V & 6 ? Ko(
          c,
          u,
          g,
          y,
          b,
          m,
          D,
          v,
          O
        ) : V & 64 || V & 128 ? E.process(
          c,
          u,
          g,
          y,
          b,
          m,
          D,
          v,
          O,
          $t
        ) : p.NODE_ENV !== "production" && x("Invalid VNode type:", E, `(${typeof E})`);
    }
    I != null && b ? Kt(I, c && c.ref, m, u || c, !u) : I == null && c && c.ref != null && Kt(c.ref, null, m, c, !0);
  }, ee = (c, u, g, y) => {
    if (c == null)
      o(
        u.el = l(u.children),
        g,
        y
      );
    else {
      const b = u.el = c.el;
      if (u.children !== c.children)
        if (p.NODE_ENV !== "production" && Se && u.patchFlag === -1 && "__elIndex" in c) {
          const m = g.childNodes, D = l(u.children), v = m[u.__elIndex = c.__elIndex];
          o(D, g, v), i(v);
        } else
          h(b, u.children);
    }
  }, $ = (c, u, g, y) => {
    c == null ? o(
      u.el = f(u.children || ""),
      g,
      y
    ) : u.el = c.el;
  }, S = (c, u, g, y) => {
    [c.el, c.anchor] = M(
      c.children,
      u,
      g,
      y,
      c.el,
      c.anchor
    );
  }, N = (c, u, g, y) => {
    if (u.children !== c.children) {
      const b = _(c.anchor);
      C(c), [u.el, u.anchor] = M(
        u.children,
        g,
        b,
        y
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, j = ({ el: c, anchor: u }, g, y) => {
    let b;
    for (; c && c !== u; )
      b = _(c), o(c, g, y), c = b;
    o(u, g, y);
  }, C = ({ el: c, anchor: u }) => {
    let g;
    for (; c && c !== u; )
      g = _(c), i(c), c = g;
    i(u);
  }, Y = (c, u, g, y, b, m, D, v, O) => {
    if (u.type === "svg" ? D = "svg" : u.type === "math" && (D = "mathml"), c == null)
      re(
        u,
        g,
        y,
        b,
        m,
        D,
        v,
        O
      );
    else {
      const E = c.el && c.el._isVueCE ? c.el : null;
      try {
        E && E._beginPatch(), Re(
          c,
          u,
          b,
          m,
          D,
          v,
          O
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, re = (c, u, g, y, b, m, D, v) => {
    let O, E;
    const { props: I, shapeFlag: V, transition: P, dirs: F } = c;
    if (O = c.el = r(
      c.type,
      m,
      I && I.is,
      I
    ), V & 8 ? a(O, c.children) : V & 16 && fe(
      c.children,
      O,
      null,
      y,
      b,
      no(c, m),
      D,
      v
    ), F && ut(c, null, y, "created"), Q(O, c, c.scopeId, D, y), I) {
      for (const z in I)
        z !== "value" && !kt(z) && s(O, z, null, I[z], m, y);
      "value" in I && s(O, "value", null, I.value, m), (E = I.onVnodeBeforeMount) && ke(E, y, c);
    }
    p.NODE_ENV !== "production" && (vn(O, "__vnode", c, !0), vn(O, "__vueParentComponent", y, !0)), F && ut(c, null, y, "beforeMount");
    const B = gc(b, P);
    B && P.beforeEnter(O), o(O, u, g), ((E = I && I.onVnodeMounted) || B || F) && ye(() => {
      E && ke(E, y, c), B && P.enter(O), F && ut(c, null, y, "mounted");
    }, b);
  }, Q = (c, u, g, y, b) => {
    if (g && w(c, g), y)
      for (let m = 0; m < y.length; m++)
        w(c, y[m]);
    if (b) {
      let m = b.subTree;
      if (p.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && (m = jo(m.children) || m), u === m || Us(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const D = b.vnode;
        Q(
          c,
          D,
          D.scopeId,
          D.slotScopeIds,
          b.parent
        );
      }
    }
  }, fe = (c, u, g, y, b, m, D, v, O = 0) => {
    for (let E = O; E < c.length; E++) {
      const I = c[E] = v ? it(c[E]) : Ve(c[E]);
      T(
        null,
        I,
        u,
        g,
        y,
        b,
        m,
        D,
        v
      );
    }
  }, Re = (c, u, g, y, b, m, D) => {
    const v = u.el = c.el;
    p.NODE_ENV !== "production" && (v.__vnode = u);
    let { patchFlag: O, dynamicChildren: E, dirs: I } = u;
    O |= c.patchFlag & 16;
    const V = c.props || G, P = u.props || G;
    let F;
    if (g && at(g, !1), (F = P.onVnodeBeforeUpdate) && ke(F, g, u, c), I && ut(u, c, g, "beforeUpdate"), g && at(g, !0), p.NODE_ENV !== "production" && Se && (O = 0, D = !1, E = null), (V.innerHTML && P.innerHTML == null || V.textContent && P.textContent == null) && a(v, ""), E ? (Je(
      c.dynamicChildren,
      E,
      v,
      g,
      y,
      no(u, b),
      m
    ), p.NODE_ENV !== "production" && mn(c, u)) : D || Fe(
      c,
      u,
      v,
      null,
      g,
      y,
      no(u, b),
      m,
      !1
    ), O > 0) {
      if (O & 16)
        De(v, V, P, g, b);
      else if (O & 2 && V.class !== P.class && s(v, "class", null, P.class, b), O & 4 && s(v, "style", V.style, P.style, b), O & 8) {
        const B = u.dynamicProps;
        for (let z = 0; z < B.length; z++) {
          const W = B[z], _e = V[W], me = P[W];
          (me !== _e || W === "value") && s(v, W, _e, me, b, g);
        }
      }
      O & 1 && c.children !== u.children && a(v, u.children);
    } else !D && E == null && De(v, V, P, g, b);
    ((F = P.onVnodeUpdated) || I) && ye(() => {
      F && ke(F, g, u, c), I && ut(u, c, g, "updated");
    }, y);
  }, Je = (c, u, g, y, b, m, D) => {
    for (let v = 0; v < u.length; v++) {
      const O = c[v], E = u[v], I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(O, E) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? d(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      T(
        O,
        E,
        I,
        null,
        y,
        b,
        m,
        D,
        !0
      );
    }
  }, De = (c, u, g, y, b) => {
    if (u !== g) {
      if (u !== G)
        for (const m in u)
          !kt(m) && !(m in g) && s(
            c,
            m,
            u[m],
            null,
            b,
            y
          );
      for (const m in g) {
        if (kt(m)) continue;
        const D = g[m], v = u[m];
        D !== v && m !== "value" && s(c, m, v, D, b, y);
      }
      "value" in g && s(c, "value", u.value, g.value, b);
    }
  }, ln = (c, u, g, y, b, m, D, v, O) => {
    const E = u.el = c ? c.el : l(""), I = u.anchor = c ? c.anchor : l("");
    let { patchFlag: V, dynamicChildren: P, slotScopeIds: F } = u;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Se || V & 2048) && (V = 0, O = !1, P = null), F && (v = v ? v.concat(F) : F), c == null ? (o(E, g, y), o(I, g, y), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      g,
      I,
      b,
      m,
      D,
      v,
      O
    )) : V > 0 && V & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === P.length ? (Je(
      c.dynamicChildren,
      P,
      g,
      b,
      m,
      D,
      v
    ), p.NODE_ENV !== "production" ? mn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || b && u === b.subTree) && mn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Fe(
      c,
      u,
      g,
      I,
      b,
      m,
      D,
      v,
      O
    );
  }, Ko = (c, u, g, y, b, m, D, v, O) => {
    u.slotScopeIds = v, c == null ? u.shapeFlag & 512 ? b.ctx.activate(
      u,
      g,
      y,
      D,
      O
    ) : et(
      u,
      g,
      y,
      b,
      m,
      D,
      O
    ) : ge(c, u, O);
  }, et = (c, u, g, y, b, m, D) => {
    const v = c.component = Dc(
      c,
      y,
      b
    );
    if (p.NODE_ENV !== "production" && v.type.__hmrId && nl(v), p.NODE_ENV !== "production" && (pn(c), vt(v, "mount")), Ro(c) && (v.ctx.renderer = $t), p.NODE_ENV !== "production" && vt(v, "init"), Sc(v, !1, D), p.NODE_ENV !== "production" && Ot(v, "init"), p.NODE_ENV !== "production" && Se && (c.el = null), v.asyncDep) {
      if (b && b.registerDep(v, U, D), !c.el) {
        const O = v.subTree = Te(we);
        $(null, O, u, g), c.placeholder = O.el;
      }
    } else
      U(
        v,
        c,
        u,
        g,
        b,
        m,
        D
      );
    p.NODE_ENV !== "production" && (hn(), Ot(v, "mount"));
  }, ge = (c, u, g) => {
    const y = u.component = c.component;
    if (Xl(c, u, g))
      if (y.asyncDep && !y.asyncResolved) {
        p.NODE_ENV !== "production" && pn(u), H(y, u, g), p.NODE_ENV !== "production" && hn();
        return;
      } else
        y.next = u, y.update();
    else
      u.el = c.el, y.vnode = u;
  }, U = (c, u, g, y, b, m, D) => {
    const v = () => {
      if (c.isMounted) {
        let { next: V, bu: P, u: F, parent: B, vnode: z } = c;
        {
          const Le = Hs(c);
          if (Le) {
            V && (V.el = z.el, H(c, V, D)), Le.asyncDep.then(() => {
              c.isUnmounted || v();
            });
            return;
          }
        }
        let W = V, _e;
        p.NODE_ENV !== "production" && pn(V || c.vnode), at(c, !1), V ? (V.el = z.el, H(c, V, D)) : V = z, P && It(P), (_e = V.props && V.props.onVnodeBeforeUpdate) && ke(_e, B, V, z), at(c, !0), p.NODE_ENV !== "production" && vt(c, "render");
        const me = ci(c);
        p.NODE_ENV !== "production" && Ot(c, "render");
        const je = c.subTree;
        c.subTree = me, p.NODE_ENV !== "production" && vt(c, "patch"), T(
          je,
          me,
          // parent may have changed if it's in a teleport
          d(je.el),
          // anchor may have changed if it's in a fragment
          cn(je),
          c,
          b,
          m
        ), p.NODE_ENV !== "production" && Ot(c, "patch"), V.el = me.el, W === null && Zl(c, me.el), F && ye(F, b), (_e = V.props && V.props.onVnodeUpdated) && ye(
          () => ke(_e, B, V, z),
          b
        ), p.NODE_ENV !== "production" && ms(c), p.NODE_ENV !== "production" && hn();
      } else {
        let V;
        const { el: P, props: F } = u, { bm: B, m: z, parent: W, root: _e, type: me } = c, je = Wt(u);
        at(c, !1), B && It(B), !je && (V = F && F.onVnodeBeforeMount) && ke(V, W, u), at(c, !0);
        {
          _e.ce && // @ts-expect-error _def is private
          _e.ce._def.shadowRoot !== !1 && _e.ce._injectChildStyle(me), p.NODE_ENV !== "production" && vt(c, "render");
          const Le = c.subTree = ci(c);
          p.NODE_ENV !== "production" && Ot(c, "render"), p.NODE_ENV !== "production" && vt(c, "patch"), T(
            null,
            Le,
            g,
            y,
            c,
            b,
            m
          ), p.NODE_ENV !== "production" && Ot(c, "patch"), u.el = Le.el;
        }
        if (z && ye(z, b), !je && (V = F && F.onVnodeMounted)) {
          const Le = u;
          ye(
            () => ke(V, W, Le),
            b
          );
        }
        (u.shapeFlag & 256 || W && Wt(W.vnode) && W.vnode.shapeFlag & 256) && c.a && ye(c.a, b), c.isMounted = !0, p.NODE_ENV !== "production" && cl(c), u = g = y = null;
      }
    };
    c.scope.on();
    const O = c.effect = new Ki(v);
    c.scope.off();
    const E = c.update = O.run.bind(O), I = c.job = O.runIfDirty.bind(O);
    I.i = c, I.id = c.uid, O.scheduler = () => kn(I), at(c, !0), p.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (V) => It(c.rtc, V) : void 0, O.onTrigger = c.rtg ? (V) => It(c.rtg, V) : void 0), E();
  }, H = (c, u, g) => {
    u.component = c;
    const y = c.vnode.props;
    c.vnode = u, c.next = null, tc(c, u.props, y, g), ac(c, u.children, g), $e(), ei(c), Ae();
  }, Fe = (c, u, g, y, b, m, D, v, O = !1) => {
    const E = c && c.children, I = c ? c.shapeFlag : 0, V = u.children, { patchFlag: P, shapeFlag: F } = u;
    if (P > 0) {
      if (P & 128) {
        Tt(
          E,
          V,
          g,
          y,
          b,
          m,
          D,
          v,
          O
        );
        return;
      } else if (P & 256) {
        Wn(
          E,
          V,
          g,
          y,
          b,
          m,
          D,
          v,
          O
        );
        return;
      }
    }
    F & 8 ? (I & 16 && Pt(E, b, m), V !== E && a(g, V)) : I & 16 ? F & 16 ? Tt(
      E,
      V,
      g,
      y,
      b,
      m,
      D,
      v,
      O
    ) : Pt(E, b, m, !0) : (I & 8 && a(g, ""), F & 16 && fe(
      V,
      g,
      y,
      b,
      m,
      D,
      v,
      O
    ));
  }, Wn = (c, u, g, y, b, m, D, v, O) => {
    c = c || xt, u = u || xt;
    const E = c.length, I = u.length, V = Math.min(E, I);
    let P;
    for (P = 0; P < V; P++) {
      const F = u[P] = O ? it(u[P]) : Ve(u[P]);
      T(
        c[P],
        F,
        g,
        null,
        b,
        m,
        D,
        v,
        O
      );
    }
    E > I ? Pt(
      c,
      b,
      m,
      !0,
      !1,
      V
    ) : fe(
      u,
      g,
      y,
      b,
      m,
      D,
      v,
      O,
      V
    );
  }, Tt = (c, u, g, y, b, m, D, v, O) => {
    let E = 0;
    const I = u.length;
    let V = c.length - 1, P = I - 1;
    for (; E <= V && E <= P; ) {
      const F = c[E], B = u[E] = O ? it(u[E]) : Ve(u[E]);
      if (jt(F, B))
        T(
          F,
          B,
          g,
          null,
          b,
          m,
          D,
          v,
          O
        );
      else
        break;
      E++;
    }
    for (; E <= V && E <= P; ) {
      const F = c[V], B = u[P] = O ? it(u[P]) : Ve(u[P]);
      if (jt(F, B))
        T(
          F,
          B,
          g,
          null,
          b,
          m,
          D,
          v,
          O
        );
      else
        break;
      V--, P--;
    }
    if (E > V) {
      if (E <= P) {
        const F = P + 1, B = F < I ? u[F].el : y;
        for (; E <= P; )
          T(
            null,
            u[E] = O ? it(u[E]) : Ve(u[E]),
            g,
            B,
            b,
            m,
            D,
            v,
            O
          ), E++;
      }
    } else if (E > P)
      for (; E <= V; )
        tt(c[E], b, m, !0), E++;
    else {
      const F = E, B = E, z = /* @__PURE__ */ new Map();
      for (E = B; E <= P; E++) {
        const ae = u[E] = O ? it(u[E]) : Ve(u[E]);
        ae.key != null && (p.NODE_ENV !== "production" && z.has(ae.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(ae.key),
          "Make sure keys are unique."
        ), z.set(ae.key, E));
      }
      let W, _e = 0;
      const me = P - B + 1;
      let je = !1, Le = 0;
      const At = new Array(me);
      for (E = 0; E < me; E++) At[E] = 0;
      for (E = F; E <= V; E++) {
        const ae = c[E];
        if (_e >= me) {
          tt(ae, b, m, !0);
          continue;
        }
        let He;
        if (ae.key != null)
          He = z.get(ae.key);
        else
          for (W = B; W <= P; W++)
            if (At[W - B] === 0 && jt(ae, u[W])) {
              He = W;
              break;
            }
        He === void 0 ? tt(ae, b, m, !0) : (At[He - B] = E + 1, He >= Le ? Le = He : je = !0, T(
          ae,
          u[He],
          g,
          null,
          b,
          m,
          D,
          v,
          O
        ), _e++);
      }
      const Go = je ? _c(At) : xt;
      for (W = Go.length - 1, E = me - 1; E >= 0; E--) {
        const ae = B + E, He = u[ae], qo = u[ae + 1], Jo = ae + 1 < I ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qo.el || ks(qo)
        ) : y;
        At[E] === 0 ? T(
          null,
          He,
          g,
          Jo,
          b,
          m,
          D,
          v,
          O
        ) : je && (W < 0 || E !== Go[W] ? yt(He, g, Jo, 2) : W--);
      }
    }
  }, yt = (c, u, g, y, b = null) => {
    const { el: m, type: D, transition: v, children: O, shapeFlag: E } = c;
    if (E & 6) {
      yt(c.component.subTree, u, g, y);
      return;
    }
    if (E & 128) {
      c.suspense.move(u, g, y);
      return;
    }
    if (E & 64) {
      D.move(c, u, g, $t);
      return;
    }
    if (D === ce) {
      o(m, u, g);
      for (let V = 0; V < O.length; V++)
        yt(O[V], u, g, y);
      o(c.anchor, u, g);
      return;
    }
    if (D === bn) {
      j(c, u, g);
      return;
    }
    if (y !== 2 && E & 1 && v)
      if (y === 0)
        v.beforeEnter(m), o(m, u, g), ye(() => v.enter(m), b);
      else {
        const { leave: V, delayLeave: P, afterLeave: F } = v, B = () => {
          c.ctx.isUnmounted ? i(m) : o(m, u, g);
        }, z = () => {
          m._isLeaving && m[Nl](
            !0
            /* cancelled */
          ), V(m, () => {
            B(), F && F();
          });
        };
        P ? P(m, B, z) : z();
      }
    else
      o(m, u, g);
  }, tt = (c, u, g, y = !1, b = !1) => {
    const {
      type: m,
      props: D,
      ref: v,
      children: O,
      dynamicChildren: E,
      shapeFlag: I,
      patchFlag: V,
      dirs: P,
      cacheIndex: F
    } = c;
    if (V === -2 && (b = !1), v != null && ($e(), Kt(v, null, g, c, !0), Ae()), F != null && (u.renderCache[F] = void 0), I & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const B = I & 1 && P, z = !Wt(c);
    let W;
    if (z && (W = D && D.onVnodeBeforeUnmount) && ke(W, u, c), I & 6)
      nr(c.component, g, y);
    else {
      if (I & 128) {
        c.suspense.unmount(g, y);
        return;
      }
      B && ut(c, null, u, "beforeUnmount"), I & 64 ? c.type.remove(
        c,
        u,
        g,
        $t,
        y
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== ce || V > 0 && V & 64) ? Pt(
        E,
        u,
        g,
        !1,
        !0
      ) : (m === ce && V & 384 || !b && I & 16) && Pt(O, u, g), y && Gn(c);
    }
    (z && (W = D && D.onVnodeUnmounted) || B) && ye(() => {
      W && ke(W, u, c), B && ut(c, null, u, "unmounted");
    }, g);
  }, Gn = (c) => {
    const { type: u, el: g, anchor: y, transition: b } = c;
    if (u === ce) {
      p.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((D) => {
        D.type === we ? i(D.el) : Gn(D);
      }) : tr(g, y);
      return;
    }
    if (u === bn) {
      C(c);
      return;
    }
    const m = () => {
      i(g), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: D, delayLeave: v } = b, O = () => D(g, m);
      v ? v(c.el, m, O) : O();
    } else
      m();
  }, tr = (c, u) => {
    let g;
    for (; c !== u; )
      g = _(c), i(c), c = g;
    i(u);
  }, nr = (c, u, g) => {
    p.NODE_ENV !== "production" && c.type.__hmrId && ol(c);
    const { bum: y, scope: b, job: m, subTree: D, um: v, m: O, a: E } = c;
    hi(O), hi(E), y && It(y), b.stop(), m && (m.flags |= 8, tt(D, c, u, g)), v && ye(v, u), ye(() => {
      c.isUnmounted = !0;
    }, u), p.NODE_ENV !== "production" && ul(c);
  }, Pt = (c, u, g, y = !1, b = !1, m = 0) => {
    for (let D = m; D < c.length; D++)
      tt(c[D], u, g, y, b);
  }, cn = (c) => {
    if (c.shapeFlag & 6)
      return cn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = _(c.anchor || c.el), g = u && u[El];
    return g ? _(g) : u;
  };
  let qn = !1;
  const Wo = (c, u, g) => {
    let y;
    c == null ? u._vnode && (tt(u._vnode, null, null, !0), y = u._vnode.component) : T(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      g
    ), u._vnode = c, qn || (qn = !0, ei(y), ps(), qn = !1);
  }, $t = {
    p: T,
    um: tt,
    m: yt,
    r: Gn,
    mt: et,
    mc: fe,
    pc: Fe,
    pbc: Je,
    n: cn,
    o: e
  };
  return {
    render: Wo,
    hydrate: void 0,
    createApp: Wl(Wo)
  };
}
function no({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function at({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (A(o) && A(i))
    for (let s = 0; s < o.length; s++) {
      const r = o[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = it(i[s]), l.el = r.el), !n && l.patchFlag !== -2 && mn(r, l)), l.type === on && (l.patchFlag !== -1 ? l.el = r.el : l.__elIndex = s + // take fragment start anchor into account
      (e.type === ce ? 1 : 0)), l.type === we && !l.el && (l.el = r.el), p.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function _c(e) {
  const t = e.slice(), n = [0];
  let o, i, s, r, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (s = 0, r = n.length - 1; s < r; )
        l = s + r >> 1, e[n[l]] < h ? s = l + 1 : r = l;
      h < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, r = n[s - 1]; s-- > 0; )
    n[s] = r, r = t[r];
  return n;
}
function Hs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Hs(t);
}
function hi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ks(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ks(t.subTree) : null;
}
const Us = (e) => e.__isSuspense;
function mc(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : ds(e);
}
const ce = /* @__PURE__ */ Symbol.for("v-fgt"), on = /* @__PURE__ */ Symbol.for("v-txt"), we = /* @__PURE__ */ Symbol.for("v-cmt"), bn = /* @__PURE__ */ Symbol.for("v-stc"), Gt = [];
let Oe = null;
function ne(e = !1) {
  Gt.push(Oe = e ? null : []);
}
function bc() {
  Gt.pop(), Oe = Gt[Gt.length - 1] || null;
}
let Xt = 1;
function gi(e, t = !1) {
  Xt += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function Bs(e) {
  return e.dynamicChildren = Xt > 0 ? Oe || xt : null, bc(), Xt > 0 && Oe && Oe.push(e), e;
}
function le(e, t, n, o, i, s) {
  return Bs(
    Be(
      e,
      t,
      n,
      o,
      i,
      s,
      !0
    )
  );
}
function Ec(e, t, n, o, i) {
  return Bs(
    Te(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function Kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jt(e, t) {
  if (p.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = gn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const yc = (...e) => Ws(
  ...e
), Ks = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || te(e) || R(e) ? { i: ve, r: e, k: t, f: !!n } : e : null);
function Be(e, t = null, n = null, o = 0, i = null, s = e === ce ? 0 : 1, r = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ks(t),
    ref: t && En(t),
    scopeId: Es,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return l ? (ko(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= Z(n) ? 8 : 16), p.NODE_ENV !== "production" && f.key !== f.key && x("VNode created with invalid key (NaN). VNode type:", f.type), Xt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Oe.push(f), f;
}
const Te = p.NODE_ENV !== "production" ? yc : Ws;
function Ws(e, t = null, n = null, o = 0, i = null, s = !1) {
  if ((!e || e === Il) && (p.NODE_ENV !== "production" && !e && x(`Invalid vnode type when creating vnode: ${e}.`), e = we), Kn(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ko(l, n), Xt > 0 && !s && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (Xs(e) && (e = e.__vccOpts), t) {
    t = Nc(t);
    let { class: l, style: f } = t;
    l && !Z(l) && (t.class = qt(l)), q(f) && (On(f) && !A(f) && (f = X({}, f)), t.style = ht(f));
  }
  const r = Z(e) ? 1 : Us(e) ? 128 : yl(e) ? 64 : q(e) ? 4 : R(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && r & 4 && On(e) && (e = L(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Be(
    e,
    t,
    n,
    o,
    i,
    r,
    s,
    !0
  );
}
function Nc(e) {
  return e ? On(e) || Is(e) ? X({}, e) : e : null;
}
function ct(e, t, n = !1, o = !1) {
  const { props: i, ref: s, patchFlag: r, children: l, transition: f } = e, h = t ? Oc(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Ks(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? A(s) ? s.concat(En(t)) : [s, En(t)] : En(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && r === -1 && A(l) ? l.map(Gs) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ce ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && Io(
    a,
    f.clone(a)
  ), a;
}
function Gs(e) {
  const t = ct(e);
  return A(e.children) && (t.children = e.children.map(Gs)), t;
}
function vc(e = " ", t = 0) {
  return Te(on, null, e, t);
}
function _i(e = "", t = !1) {
  return t ? (ne(), Ec(we, null, e)) : Te(we, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? Te(we) : A(e) ? Te(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Kn(e) ? it(e) : Te(on, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function ko(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ko(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Is(t) ? t._ctx = ve : i === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: ve }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [vc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Oc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = qt([t.class, o.class]));
      else if (i === "style")
        t.style = ht([t.style, o.style]);
      else if (Qt(i)) {
        const s = t[i], r = o[i];
        r && s !== r && !(A(s) && s.includes(r)) && (t[i] = s ? [].concat(s, r) : r);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function ke(e, t, n, o = null) {
  qe(e, t, 7, [
    n,
    o
  ]);
}
const wc = Cs();
let xc = 0;
function Dc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || wc, s = {
    uid: xc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new yr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Rs(o, i),
    emitsOptions: Ts(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: G,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: G,
    data: G,
    props: G,
    attrs: G,
    slots: G,
    refs: G,
    setupState: G,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
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
    sp: null
  };
  return p.NODE_ENV !== "production" ? s.ctx = Ml(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ql.bind(null, s), e.ce && e.ce(s), s;
}
let oe = null;
const qs = () => oe || ve;
let $n, Eo;
{
  const e = en(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (s) => {
      i.length > 1 ? i.forEach((r) => r(s)) : i[0](s);
    };
  };
  $n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => oe = n
  ), Eo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Zt = n
  );
}
const sn = (e) => {
  const t = oe;
  return $n(e), e.scope.on(), () => {
    e.scope.off(), $n(t);
  };
}, mi = () => {
  oe && oe.scope.off(), $n(null);
}, Vc = /* @__PURE__ */ Ze("slot,component");
function yo(e, { isNativeTag: t }) {
  (Vc(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Js(e) {
  return e.vnode.shapeFlag & 4;
}
let Zt = !1;
function Sc(e, t = !1, n = !1) {
  t && Eo(t);
  const { props: o, children: i } = e.vnode, s = Js(e);
  Ql(e, o, s, t), uc(e, i, n || t);
  const r = s ? Cc(e, t) : void 0;
  return t && Eo(!1), r;
}
function Cc(e, t) {
  const n = e.type;
  if (p.NODE_ENV !== "production") {
    if (n.name && yo(n.name, e.appContext.config), n.components) {
      const i = Object.keys(n.components);
      for (let s = 0; s < i.length; s++)
        yo(i[s], e.appContext.config);
    }
    if (n.directives) {
      const i = Object.keys(n.directives);
      for (let s = 0; s < i.length; s++)
        ys(i[s]);
    }
    n.compilerOptions && Tc() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ds), p.NODE_ENV !== "production" && Rl(e);
  const { setup: o } = n;
  if (o) {
    $e();
    const i = e.setupContext = o.length > 1 ? $c(e) : null, s = sn(e), r = Ct(
      o,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? Ge(e.props) : e.props,
        i
      ]
    ), l = Oo(r);
    if (Ae(), s(), (l || e.sp) && !Wt(e) && Os(e), l) {
      if (r.then(mi, mi), t)
        return r.then((f) => {
          bi(e, f, t);
        }).catch((f) => {
          tn(f, e, 0);
        });
      if (e.asyncDep = r, p.NODE_ENV !== "production" && !e.suspense) {
        const f = rn(e, n);
        x(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      bi(e, r, t);
  } else
    zs(e, t);
}
function bi(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (p.NODE_ENV !== "production" && Kn(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ls(t), p.NODE_ENV !== "production" && Fl(e)) : p.NODE_ENV !== "production" && t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), zs(e, n);
}
const Tc = () => !0;
function zs(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || se);
  {
    const i = sn(e);
    $e();
    try {
      Ll(e);
    } finally {
      Ae(), i();
    }
  }
  p.NODE_ENV !== "production" && !o.render && e.render === se && !t && (o.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", o));
}
const Ei = p.NODE_ENV !== "production" ? {
  get(e, t) {
    return Tn(), ie(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ie(e, "get", ""), e[t];
  }
};
function Pc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ie(e, "get", "$slots"), t[n];
    }
  });
}
function $c(e) {
  const t = (n) => {
    if (p.NODE_ENV !== "production" && (e.exposed && x("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (A(n) ? o = "array" : te(n) && (o = "ref")), o !== "object" && x(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (p.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ei));
      },
      get slots() {
        return o || (o = Pc(e));
      },
      get emit() {
        return (i, ...s) => e.emit(i, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ei),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Uo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ls(kr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in bt)
        return bt[n](e);
    },
    has(t, n) {
      return n in t || n in bt;
    }
  })) : e.proxy;
}
const Ac = /(?:^|[-_])\w/g, Ic = (e) => e.replace(Ac, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ys(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rn(e, t, n = !1) {
  let o = Ys(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e) {
    const i = (s) => {
      for (const r in s)
        if (s[r] === t)
          return r;
    };
    o = i(e.components) || e.parent && i(
      e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Ic(o) : n ? "App" : "Anonymous";
}
function Xs(e) {
  return R(e) && "__vccOpts" in e;
}
const An = (e, t) => {
  const n = Gr(e, t, Zt);
  if (p.NODE_ENV !== "production") {
    const o = qs();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Mc() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!q(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (te(d)) {
        $e();
        const _ = d.value;
        return Ae(), [
          "div",
          {},
          ["span", e, a(d)],
          "<",
          l(_),
          ">"
        ];
      } else {
        if (lt(d))
          return [
            "div",
            {},
            ["span", e, he(d) ? "ShallowReactive" : "Reactive"],
            "<",
            l(d),
            `>${Ie(d) ? " (readonly)" : ""}`
          ];
        if (Ie(d))
          return [
            "div",
            {},
            ["span", e, he(d) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(d),
            ">"
          ];
      }
      return null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const _ = [];
    d.type.props && d.props && _.push(r("props", L(d.props))), d.setupState !== G && _.push(r("setup", d.setupState)), d.data !== G && _.push(r("data", L(d.data)));
    const w = f(d, "computed");
    w && _.push(r("computed", w));
    const M = f(d, "inject");
    return M && _.push(r("injected", M)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), _;
  }
  function r(d, _) {
    return _ = X({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          l(_[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, _ = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : q(d) ? ["object", { object: _ ? L(d) : d }] : ["span", n, String(d)];
  }
  function f(d, _) {
    const w = d.type;
    if (R(w))
      return;
    const M = {};
    for (const T in d.ctx)
      h(w, T, _) && (M[T] = d.ctx[T]);
    return M;
  }
  function h(d, _, w) {
    const M = d[w];
    if (A(M) && M.includes(_) || q(M) && _ in M || d.extends && h(d.extends, _, w) || d.mixins && d.mixins.some((T) => h(T, _, w)))
      return !0;
  }
  function a(d) {
    return he(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const yi = "3.5.26", xe = p.NODE_ENV !== "production" ? x : se;
var ue = {};
let No;
const Ni = typeof window < "u" && window.trustedTypes;
if (Ni)
  try {
    No = /* @__PURE__ */ Ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ue.NODE_ENV !== "production" && xe(`Error creating trusted types policy: ${e}`);
  }
const Zs = No ? (e) => No.createHTML(e) : (e) => e, Rc = "http://www.w3.org/2000/svg", Fc = "http://www.w3.org/1998/Math/MathML", Ye = typeof document < "u" ? document : null, vi = Ye && /* @__PURE__ */ Ye.createElement("template"), jc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ye.createElementNS(Rc, e) : t === "mathml" ? Ye.createElementNS(Fc, e) : n ? Ye.createElement(e, { is: n }) : Ye.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ye.createTextNode(e),
  createComment: (e) => Ye.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ye.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, s) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      vi.innerHTML = Zs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = vi.content;
      if (o === "svg" || o === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Lc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, n) {
  const o = e[Lc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), kc = /* @__PURE__ */ Symbol("_vsh"), Uc = /* @__PURE__ */ Symbol(ue.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Bc = /(?:^|;)\s*display\s*:/;
function Kc(e, t, n) {
  const o = e.style, i = Z(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (Z(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && yn(o, l, "");
        }
      else
        for (const r in t)
          n[r] == null && yn(o, r, "");
    for (const r in n)
      r === "display" && (s = !0), yn(o, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = o[Uc];
      r && (n += ";" + r), o.cssText = n, s = Bc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = s ? o.display : "", e[kc] && (o.display = "none"));
}
const Wc = /[^\\];\s*$/, wi = /\s*!important$/;
function yn(e, t, n) {
  if (A(n))
    n.forEach((o) => yn(e, t, o));
  else if (n == null && (n = ""), ue.NODE_ENV !== "production" && Wc.test(n) && xe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Gc(e, t);
    wi.test(n) ? e.setProperty(
      Ne(o),
      n.replace(wi, ""),
      "important"
    ) : e[o] = n;
  }
}
const xi = ["Webkit", "Moz", "ms"], oo = {};
function Gc(e, t) {
  const n = oo[t];
  if (n)
    return n;
  let o = Ee(t);
  if (o !== "filter" && o in e)
    return oo[t] = o;
  o = Fn(o);
  for (let i = 0; i < xi.length; i++) {
    const s = xi[i] + o;
    if (s in e)
      return oo[t] = s;
  }
  return t;
}
const Di = "http://www.w3.org/1999/xlink";
function Vi(e, t, n, o, i, s = Er(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Di, t.slice(6, t.length)) : e.setAttributeNS(Di, t, n) : n == null || s && !Hi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : ft(n) ? String(n) : n
  );
}
function Si(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zs(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Hi(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ue.NODE_ENV !== "production" && !r && xe(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(i || t);
}
function qc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Jc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ci = /* @__PURE__ */ Symbol("_vei");
function zc(e, t, n, o, i = null) {
  const s = e[Ci] || (e[Ci] = {}), r = s[t];
  if (o && r)
    r.value = ue.NODE_ENV !== "production" ? Pi(o, t) : o;
  else {
    const [l, f] = Yc(t);
    if (o) {
      const h = s[t] = Qc(
        ue.NODE_ENV !== "production" ? Pi(o, t) : o,
        i
      );
      qc(e, l, h, f);
    } else r && (Jc(e, l, r, f), s[t] = void 0);
  }
}
const Ti = /(?:Once|Passive|Capture)$/;
function Yc(e) {
  let t;
  if (Ti.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ti); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ne(e.slice(2)), t];
}
let io = 0;
const Xc = /* @__PURE__ */ Promise.resolve(), Zc = () => io || (Xc.then(() => io = 0), io = Date.now());
function Qc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    qe(
      ef(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Zc(), n;
}
function Pi(e, t) {
  return R(e) || A(e) ? e : (xe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), se);
}
function ef(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const $i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tf = (e, t, n, o, i, s) => {
  const r = i === "svg";
  t === "class" ? Hc(e, o, r) : t === "style" ? Kc(e, n, o) : Qt(t) ? Nn(t) || zc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nf(e, t, o, r)) ? (Si(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vi(e, t, o, r, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Z(o)) ? Si(e, Ee(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Vi(e, t, o, r));
};
function nf(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $i(t) && R(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return $i(t) && Z(n) ? !1 : t in e;
}
const Ai = {};
// @__NO_SIDE_EFFECTS__
function of(e, t, n) {
  let o = /* @__PURE__ */ Mo(e, t);
  Mn(o) && (o = X({}, o, t));
  class i extends Bo {
    constructor(r) {
      super(o, r, n);
    }
  }
  return i.def = o, i;
}
const sf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Bo extends sf {
  constructor(t, n = {}, o = Mi) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Mi ? this._root = this.shadowRoot : (ue.NODE_ENV !== "production" && this.shadowRoot && xe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      X({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Bo) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, us(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (o, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: r } = o;
      let l;
      if (s && !A(s))
        for (const f in s) {
          const h = s[f];
          (h === Number || h && h.type === Number) && (f in this._props && (this._props[f] = zo(this._props[f])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ee(f)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(r) : ue.NODE_ENV !== "production" && r && xe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    ue.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        k(this, o) ? ue.NODE_ENV !== "production" && xe(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => rs(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = A(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && o.includes(i) && this._setProp(i, this[i]);
    for (const i of o.map(Ee))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(s) {
          this._setProp(i, s, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : Ai;
    const i = Ee(t);
    n && this._numberProps && this._numberProps[i] && (o = zo(o)), this._setProp(i, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, i = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === Ai ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), o)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(Ne(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ne(t), n + "") : n || this.removeAttribute(Ne(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), ff(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Te(this._def, X(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, ue.NODE_ENV !== "production" && (o.ceReload = (s) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const i = (s, r) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            Mn(r[0]) ? X({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      o.emit = (s, ...r) => {
        i(s, r), Ne(s) !== s && i(Ne(s), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (o && s.setAttribute("nonce", o), s.textContent = t[i], this.shadowRoot.prepend(s), ue.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let r = this._childStyles.get(n.__hmrId);
            r || this._childStyles.set(n.__hmrId, r = []), r.push(s);
          }
        } else
          (this._styles || (this._styles = [])).push(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const i = t[o], s = i.getAttribute("name") || "default", r = this._slots[s], l = i.parentNode;
      if (r)
        for (const f of r) {
          if (n && f.nodeType === 1) {
            const h = n + "-s", a = document.createTreeWalker(f, 1);
            f.setAttribute(h, "");
            let d;
            for (; d = a.nextNode(); )
              d.setAttribute(h, "");
          }
          l.insertBefore(f, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const o of t) {
      const i = o.querySelectorAll("slot");
      for (let s = 0; s < i.length; s++)
        n.add(i[s]);
    }
    return Array.from(n);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (ue.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const rf = ["ctrl", "shift", "alt", "meta"], lf = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => rf.some((n) => e[`${n}Key`] && !t.includes(n))
}, so = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = ((i, ...s) => {
    for (let r = 0; r < t.length; r++) {
      const l = lf[t[r]];
      if (l && l(i, t)) return;
    }
    return e(i, ...s);
  }));
}, cf = /* @__PURE__ */ X({ patchProp: tf }, jc);
let Ii;
function Qs() {
  return Ii || (Ii = pc(cf));
}
const ff = ((...e) => {
  Qs().render(...e);
}), Mi = ((...e) => {
  const t = Qs().createApp(...e);
  ue.NODE_ENV !== "production" && (af(t), df(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = pf(o);
    if (!i) return;
    const s = t._component;
    !R(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, uf(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function uf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function af(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => gr(t) || _r(t) || mr(t),
    writable: !1
  });
}
function df(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        xe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return xe(o), n;
      },
      set() {
        xe(o);
      }
    });
  }
}
function pf(e) {
  if (Z(e)) {
    const t = document.querySelector(e);
    return ue.NODE_ENV !== "production" && !t && xe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ue.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && xe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var hf = {};
function gf() {
  Mc();
}
hf.NODE_ENV !== "production" && gf();
const _f = { class: "viewer-area" }, mf = {
  key: 0,
  class: "empty-state"
}, bf = {
  key: 1,
  class: "canvas-container"
}, Ef = { class: "image-wrapper" }, yf = ["src"], Nf = {
  class: "overlay-layer",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, vf = ["id", "cx", "cy", "r"], Of = ["stop-color", "stop-opacity"], wf = ["stop-color"], xf = ["id"], Df = ["stdDeviation"], Vf = ["points", "fill", "filter", "onPointerdown", "onPointerup"], Sf = ["onPointerdown", "onPointerup", "title"], Cf = ["onPointerdown", "onPointerup"], Tf = ["src"], Pf = /* @__PURE__ */ Mo({
  __name: "InteractiveFloorplan",
  props: {
    config: {},
    entityStates: {}
  },
  emits: ["entity-click", "entity-long-press"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = An(() => !!n.config.imageBase64), s = dn(null), r = dn(!1), l = dn({ x: 0, y: 0 });
    function f($, S) {
      $.button === 0 && (r.value = !1, l.value = { x: $.clientX, y: $.clientY }, s.value = window.setTimeout(() => {
        r.value = !0, o("entity-long-press", S.entityId);
      }, 500));
    }
    function h($, S) {
      if (s.value && (clearTimeout(s.value), s.value = null), !r.value) {
        const N = Math.abs($.clientX - l.value.x), j = Math.abs($.clientY - l.value.y);
        N < 10 && j < 10 && o("entity-click", S.entityId, S.type);
      }
      r.value = !1;
    }
    function a() {
      s.value && (clearTimeout(s.value), s.value = null);
    }
    function d($) {
      const S = n.entityStates[$.entityId] || { state: "off" }, { style: N } = $;
      if ($.type === "camera") {
        let re;
        const Q = N.colors;
        return S.state === "recording" ? re = Q.recordingColor || "#ef4444" : S.state === "streaming" ? re = Q.streamingColor || "#3b82f6" : re = Q.idleColor || "#6b7280", {
          color: re,
          opacity: N.onOpacity
        };
      }
      const j = N.colors;
      if (S.state == "off")
        return {
          color: j.offColor,
          opacity: N.offOpacity
        };
      let C = S.color || j.onColor, Y = N.onOpacity;
      return S.brightness !== void 0 && (Y = S.brightness / 255 * N.onOpacity), { color: C, opacity: Y };
    }
    function _($) {
      const { style: S, x: N, y: j } = $;
      return {
        left: `${N}%`,
        top: `${j}%`,
        width: `${S.width}%`,
        height: `${S.height}%`,
        transform: `translate(-50%, -50%) rotate(${S.rotation}deg)`,
        position: "absolute",
        zIndex: 1
      };
    }
    function w($) {
      const { color: S, opacity: N } = d($), { shape: j } = $, C = n.entityStates[$.entityId] || { state: "off" };
      let Y = N;
      if (C.state == "on" && C.brightness !== void 0) {
        const Q = $.style.onOpacity;
        Y = 0.3 + C.brightness / 255 * (Q - 0.3);
      }
      return {
        width: "100%",
        height: "100%",
        backgroundColor: S,
        opacity: Y,
        borderRadius: j === "circle" ? "50%" : "4px",
        cursor: "pointer",
        boxShadow: C.state == "on" ? `0 0 15px ${S}` : "none",
        transition: "all 0.3s ease"
      };
    }
    function M($) {
      const { offsetX: S, offsetY: N, color: j } = $.labelConfig || {};
      return {
        transform: `translate(-50%, -50%) translate(${S || 0}%, ${N || 0}%)`,
        color: j || "#ffffff",
        pointerEvents: "auto",
        cursor: "pointer"
      };
    }
    function T($) {
      return $ ? $.map((S) => `${S.x} ${S.y}`).join(",") : "";
    }
    function ee($) {
      const S = n.entityStates[$.entityId];
      return $.type === "camera" && S?.state === "recording";
    }
    return ($, S) => (ne(), le("div", _f, [
      i.value ? (ne(), le("div", bf, [
        Be("div", Ef, [
          Be("img", {
            src: n.config.imageBase64,
            alt: "Floorplan Base",
            draggable: "false"
          }, null, 8, yf),
          (ne(), le("svg", Nf, [
            Be("defs", null, [
              (ne(!0), le(ce, null, Rt(n.config.entities, (N) => (ne(), le("radialGradient", {
                key: "grad-" + N.id,
                id: "grad-" + N.id,
                gradientUnits: "userSpaceOnUse",
                cx: N.x,
                cy: N.y,
                r: N.style.gradientRadius
              }, [
                Be("stop", {
                  offset: "0%",
                  "stop-color": d(N).color,
                  "stop-opacity": Math.max(0.3, d(N).opacity)
                }, null, 8, Of),
                Be("stop", {
                  offset: "100%",
                  "stop-color": d(N).color,
                  "stop-opacity": "0"
                }, null, 8, wf)
              ], 8, vf))), 128)),
              (ne(!0), le(ce, null, Rt(n.config.entities, (N) => (ne(), le(ce, {
                key: "blur-" + N.id
              }, [
                N.style.edgeBlur && N.style.edgeBlur > 0 ? (ne(), le("filter", {
                  key: 0,
                  id: "blur-" + N.id
                }, [
                  Be("feGaussianBlur", {
                    stdDeviation: N.style.edgeBlur
                  }, null, 8, Df)
                ], 8, xf)) : _i("", !0)
              ], 64))), 128))
            ]),
            (ne(!0), le(ce, null, Rt(n.config.entities, (N) => (ne(), le("polygon", {
              key: "poly-" + N.id,
              points: T(N.points),
              fill: n.entityStates[N.entityId]?.shouldLightUp ? `url(#grad-${N.id})` : "transparent",
              filter: N.style.edgeBlur && N.style.edgeBlur > 0 ? `url(#blur-${N.id})` : void 0,
              stroke: "none",
              class: qt({ clickable: !0 }),
              style: { "pointer-events": "all", transition: "fill-opacity 0.3s ease" },
              onPointerdown: (j) => f(j, N),
              onPointerup: (j) => h(j, N),
              onPointerleave: S[0] || (S[0] = (j) => a())
            }, null, 40, Vf))), 128))
          ])),
          (ne(!0), le(ce, null, Rt(n.config.entities, (N) => (ne(), le("div", {
            key: N.id,
            class: "interactive-entity",
            style: ht(_(N)),
            onPointerdown: (j) => f(j, N),
            onPointerup: (j) => h(j, N),
            onPointerleave: S[2] || (S[2] = (j) => a()),
            title: N.label
          }, [
            Be("div", {
              class: qt(["entity-shape", { "camera-recording": ee(N) }]),
              style: ht(w(N))
            }, null, 6),
            N.labelConfig.show ? (ne(), le("div", {
              key: 0,
              class: "entity-label",
              style: ht(M(N)),
              onPointerdown: so((j) => f(j, N), ["stop"]),
              onPointerup: so((j) => h(j, N), ["stop"]),
              onPointerleave: S[1] || (S[1] = so((j) => a(), ["stop"]))
            }, Ui(N.label), 45, Cf)) : _i("", !0)
          ], 44, Sf))), 128)),
          (ne(!0), le(ce, null, Rt(n.config.overlayImages || [], (N, j) => (ne(), le("img", {
            key: "overlay-" + j,
            src: N.src,
            class: "fp-overlay-img",
            style: ht({
              left: N.x + "%",
              top: N.y + "%",
              width: N.width + "%",
              height: N.height + "%",
              transform: `rotate(${N.rotation || 0}deg)`,
              opacity: N.opacity ?? 1
            }),
            draggable: "false"
          }, null, 12, Tf))), 128))
        ])
      ])) : (ne(), le("div", mf, [...S[3] || (S[3] = [
        Be("p", null, "No floorplan loaded. Go to Editor to set up.", -1)
      ])]))
    ]));
  }
}), er = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, $f = /* @__PURE__ */ er(Pf, [["__scopeId", "data-v-f410de73"]]), Af = {
  key: 1,
  class: "error"
}, If = /* @__PURE__ */ Mo({
  __name: "HaFloorplanCard.ce",
  props: {
    config: { type: [Object, String] },
    hass: { type: null }
  },
  setup(e) {
    const t = e, n = dn(null), o = An(() => {
      if (!t.config) return null;
      let l = null;
      if (typeof t.config == "string")
        try {
          l = JSON.parse(t.config);
        } catch (f) {
          return console.error("Failed to parse floorplan config", f), null;
        }
      else
        l = t.config;
      return l && l.imageBase64 ? {
        ...l,
        imageBase64: l.imageBase64.replace(/\s/g, "")
      } : l;
    }), i = An(() => {
      const l = {};
      return !o.value || !t.hass || o.value.entities?.forEach((f) => {
        const h = t.hass.states[f.entityId];
        if (h) {
          let a = h.state, d, _;
          if (f.type === "light") {
            a == "on" && (h.attributes.rgb_color && (d = `rgb(${h.attributes.rgb_color.join(",")})`), h.attributes.brightness !== void 0 && (_ = h.attributes.brightness));
            const w = f.entityId.split(".")[0], M = w === "media_player" ? !["off", "unavailable", "unknown", "idle"].includes(a) : a === "on";
            l[f.entityId] = { state: a, color: d, brightness: _, shouldLightUp: M };
          } else if (f.type === "media_player") {
            const w = !["off", "unavailable", "unknown"].includes(a);
            l[f.entityId] = { state: a, shouldLightUp: w };
          } else if (f.type === "camera") {
            const w = ["on", "recording", "streaming"].includes(a);
            l[f.entityId] = { state: a, shouldLightUp: w };
          } else f.type === "switch" ? l[f.entityId] = { state: a, shouldLightUp: a === "on" } : l[f.entityId] = { state: a, shouldLightUp: a === "on" };
        } else
          l[f.entityId] = { state: "off", shouldLightUp: !1 };
      }), l;
    });
    function s(l, f) {
      if (!t.hass || !l) return;
      const h = l.includes(".") ? l.split(".")[0] ?? f : f;
      if (["light", "switch", "media_player"].includes(h))
        t.hass.callService(h, "toggle", {
          entity_id: l
        });
      else if (f === "camera") {
        const a = i.value[l]?.state == "idle" ? "turn_on" : "turn_off";
        t.hass.callService("homeassistant", a, {
          entity_id: l
        });
      } else
        t.hass.callService("homeassistant", "toggle", {
          entity_id: l
        });
    }
    function r(l) {
      const f = new CustomEvent("hass-more-info", {
        detail: { entityId: l },
        bubbles: !0,
        composed: !0
      });
      n.value && n.value.dispatchEvent(f);
    }
    return console.info("%c HA Floorplan Card %c v1.0.0 ", "background: #333; color: #fff", "background: #0ea5e9; color: #fff"), (l, f) => o.value ? (ne(), le("ha-card", {
      key: 0,
      ref_key: "cardRef",
      ref: n,
      class: "ha-card-wrapper"
    }, [
      Te($f, {
        config: o.value,
        "entity-states": i.value,
        onEntityClick: s,
        onEntityLongPress: r
      }, null, 8, ["config", "entity-states"])
    ], 512)) : (ne(), le("div", Af, " No Configuration Loaded "));
  }
}), Mf = ':host{display:block!important;width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}*,*:before,*:after{box-sizing:border-box}ha-card{display:block!important;width:100%!important;margin:0!important;padding:0!important;background:none!important;box-shadow:none!important;border:none!important}.ha-card-wrapper{width:100%!important;display:block!important;padding:0!important;margin:0!important}.viewer-area{flex:1;background-color:transparent;display:block;position:relative;padding:0!important;margin:0!important;height:auto;width:100%!important}.empty-state{color:var(--color-text-secondary);font-size:1.2rem;padding:20px;text-align:center}.canvas-container{border-radius:0;overflow:hidden;position:relative;max-width:100%;max-height:100%}.image-wrapper{position:relative;display:block;width:100%;line-height:0;container-type:inline-size}.image-wrapper>img:first-child{width:100%;height:auto;display:block}.entity-label{position:absolute;top:50%;left:50%;background:#000000b3;color:#fff;padding:2px 4px;font-size:14px;font-size:1.5cqw;border-radius:4px;white-space:nowrap;pointer-events:none;line-height:1.2}.overlay-layer{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}.overlay-layer polygon{vector-effect:non-scaling-stroke}.overlay-layer polygon[style*="pointer-events: all"],.overlay-layer polygon.clickable{pointer-events:all!important}.fp-overlay-img{position:absolute;pointer-events:none;object-fit:contain}.interactive-entity{z-index:10}.error{padding:20px;color:red}@keyframes camera-recording-blink{0%,to{opacity:1}50%{opacity:.3}}.camera-recording{animation:camera-recording-blink 2s ease-in-out infinite}', Rf = /* @__PURE__ */ er(If, [["styles", [Mf]]]), Ff = /* @__PURE__ */ of(Rf);
class jf extends Ff {
  setConfig(t) {
    t.floorplan_config ? this.config = t.floorplan_config : t.config ? this.config = t.config : this.config = t;
  }
}
customElements.define("ha-floorplan-card", jf);
console.info(
  "%c HA FLOORPLAN CARD %c v0.0.1 ",
  "color: white; background: #202020; font-weight: 700;",
  "color: #202020; background: #91eb61; font-weight: 700;"
);
